/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{C as e}from"./CircularArray.js";import{c as t}from"./mathUtils.js";import{b as r,i as s,u as o,d as i,c as n}from"../core/lang.js";import{_ as a}from"./tslib.es6.js";import"../geometry.js";import c from"../request.js";import d from"../core/Error.js";import{L as u}from"./Logger.js";import{after as h,createResolver as l}from"../core/promiseUtils.js";import{property as f}from"../core/accessorSupport/decorators/property.js";import"./ensureType.js";import{subclass as _}from"../core/accessorSupport/decorators/subclass.js";import{E as p}from"./Evented.js";import{HandleOwner as m}from"../core/HandleOwner.js";import{g as y}from"./zscale.js";import{c as g}from"./query.js";import w from"../rest/support/Query.js";import{fromJSON as b}from"../geometry/support/jsonUtils.js";import v from"../geometry/SpatialReference.js";class k{constructor(e,t,r,s,o=128){this._trackIdToObservations=new Map,this._idCounter=0,this._lastPurge=performance.now(),this._addOrUpdated=new Map,this._removed=[],this._maxAge=0,this._timeInfo=r,this._purgeOptions=s,this.store=e,this.objectIdField=t,this.purgeInterval=o,this._useGeneratedIds="__esri_stream_id__"===this.objectIdField}add(o){if(this._useGeneratedIds){const e=this._nextId();o.attributes[this.objectIdField]=e,o.objectId=e}else o.objectId=o.attributes[this.objectIdField];if(this._addOrUpdated.set(o.objectId,o),this._maxAge=Math.max(this._maxAge,o.attributes[this._timeInfo.startTimeField]),!this._timeInfo.trackIdField)return r(this._trackIdLessObservations)&&(this._trackIdLessObservations=new e(1e5)),void this._trackIdLessObservations.enqueue(o.objectId);const i=o.attributes[this._timeInfo.trackIdField];if(!this._trackIdToObservations.has(i)){const r=s(this._purgeOptions)&&null!=this._purgeOptions.maxObservations?this._purgeOptions.maxObservations:1e3,o=t(r,0,1e3);this._trackIdToObservations.set(i,new e(o))}const n=this._trackIdToObservations.get(i).enqueue(o.objectId);s(n)&&(this._addOrUpdated.has(n)?this._addOrUpdated.delete(n):this._removed.push(n))}checkForUpdates(){const e=this._getToAdd(),t=this._getToRemove(),r=performance.now();r-this._lastPurge>=this.purgeInterval&&(this._purge(r),this._lastPurge=r);const o=[];if(s(t))for(const e of t){const t=this.store.removeById(e);s(t)&&o.push(t)}if(s(e))for(const t of e)t.attributes.__esri_timestamp__=r,this.store.add(t);(e||o)&&this.store.update(e,o)}_getToAdd(){if(!this._addOrUpdated.size)return null;const e=new Array(this._addOrUpdated.size);let t=0;return this._addOrUpdated.forEach((r=>e[t++]=r)),this._addOrUpdated.clear(),e}_getToRemove(){const e=this._removed;return this._removed.length?(this._removed=[],e):null}_nextId(){const e=this._idCounter;return this._idCounter=(this._idCounter+1)%4294967294+1,e}_purge(e){const t=this._purgeOptions;s(t)&&(this._purgeSomeByDisplayCount(t),this._purgeByAge(t),this._purgeByAgeReceived(e,t),this._purgeTracks())}_purgeSomeByDisplayCount(e){if(!e.displayCount)return;let t=this.store.size;if(t>e.displayCount){if(this._timeInfo.trackIdField)for(const r of this._trackIdToObservations.values())if(t>e.displayCount&&r.size){const e=o(r.dequeue());this._removed.push(e),t--}if(s(this._trackIdLessObservations)){let r=t-e.displayCount;for(;r-- >0;){const e=this._trackIdLessObservations.dequeue();s(e)&&this._removed.push(e)}}}}_purgeByAge(e){var t;if(!e.age||null==(t=this._timeInfo)||!t.startTimeField)return;const r=60*e.age*1e3,s=this._maxAge-r;this.store.forEach((e=>{e.attributes[this._timeInfo.startTimeField]<s&&this._removed.push(e.objectId)}))}_purgeByAgeReceived(e,t){if(!t.ageReceived)return;const r=e-60*t.ageReceived*1e3;this.store.forEach((e=>{e.attributes.__esri_timestamp__<r&&this._removed.push(e.objectId)}))}_purgeTracks(){this._trackIdToObservations.forEach(((e,t)=>{0===e.size&&this._trackIdToObservations.delete(t)}))}}let S=class extends(p.EventedMixin(m)){onFeature(e){this.emit("feature",e)}};S=a([_("esri.layers.graphics.sources.connections.StreamConnection")],S);var F=S;const O=u.getLogger("esri.layers.graphics.sources.connections.WebSocketConnection");var I;!function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"}(I||(I={}));let j=class extends F{constructor(e){super(),this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=y(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){s(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(r(this._websocket))return"disconnected";switch(this._websocket.readyState){case I.CONNECTING:case I.OPEN:return"connected";case I.CLOSING:case I.CLOSED:return"disconnected"}}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){try{if(this.destroyed)return;this._websocket=await this._createWebSocket(e),this.notifyChange("connectionStatus")}catch(s){const o=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(O.error(new d("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(O.error(new d("websocket-connection",`Failed to connect. Attempting to reconnect in ${o}s`,s)),await h(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_createWebSocket(e){const t=new WebSocket(e),r=new Promise(((e,r)=>{t.onopen=()=>e(t),t.onclose=e=>r(e)}));return r.then((()=>{if(this.destroyed)return t.onclose=()=>{},void t.close();t.onclose=e=>this._onClose(e),t.onerror=e=>this._onError(e),t.onmessage=e=>this._onMessage(e)})),r}async _handshake(e=1e4){const t=this._websocket;if(r(t))return;const s=l(),o=t.onmessage,{filter:i,outFields:n,spatialReference:a}=this._config;return s.timeout(e),t.onmessage=e=>{var r;let c=null;try{c=JSON.parse(e.data)}catch(e){}c&&"object"==typeof c||(O.error(new d("websocket-connection","Protocol violation. Handshake failed - malformed message",e.data)),s.reject(),this.destroy()),(null==(r=c.spatialReference)?void 0:r.wkid)!==(null==a?void 0:a.wkid)&&(O.error(new d("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${a.wkid}`,e.data)),s.reject(),this.destroy()),"json"!==c.format&&(O.error(new d("websocket-connection","Protocol violation. Handshake failed - format is not set",e.data)),s.reject(),this.destroy()),i&&c.filter!==i&&O.error(new d("websocket-connection","Tried to set filter, but server doesn't support it")),n&&c.outFields!==n&&O.error(new d("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=o,s.resolve()},t.send(JSON.stringify({filter:i,outFields:n,format:"json",spatialReference:{wkid:a.wkid}})),s.promise}_onMessage(e){try{const t=JSON.parse(e.data);if("featureResult"!==t.type)throw new d("websocket-connection","Protocol violation - Expected to find message of type 'featureResult'",t);for(const e of t.features)this._featureZScaler&&this._featureZScaler(e.geometry),this.onFeature(e)}catch(e){return O.error(new d("websocket-connection","Failed to parse message",e)),void this.destroy()}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),O.error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),1e3!==e.code&&O.error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};a([f()],j.prototype,"connectionStatus",null),a([f()],j.prototype,"errorString",void 0),j=a([_("esri.layers.graphics.sources.connections.WebSocketConnection")],j);const C=u.getLogger("esri.layers.graphics.sources.connections.GeoEventConnection"),x={maxQueryDepth:5,maxRecordCountFactor:3};let R=class extends j{constructor(e){super({...x,...e})}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||C.warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=await this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){let t;try{t=this._enrich(JSON.parse(e.data)),this._featureZScaler&&this._featureZScaler(t.geometry)}catch(e){return void C.error(new d("geoevent-connection","Failed to parse message",e))}this.onFeature(t)}async _fetchServiceDefinition(e){const t=c(e.path,{query:{f:"json"},responseType:"json"}),r=(await t).data;return this._serviceDefinition=r,r}async _fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r;return`${this._inferWebSocketBaseUrl(s)}/subscribe?outSR=${t.wkid}${o?"&token="+o:""}`}_inferWebSocketBaseUrl(e){if(1===e.length)return e[0];for(const t of e)if(-1!==t.indexOf("wss"))return t;return C.error(new d("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const s=this._websocket;if(r(s)||r(e)&&r(t))return;const o=JSON.stringify({filter:this._serializeFilter(e,t)});let i=!1;const n=l();return s.onmessage=e=>{const t=JSON.parse(e.data);t.filter&&(t.error&&(C.error(new d("geoevent-connection","Failed to set service filter",t.error)),this._set("errorString",`Could not set service filter - ${t.error}`),n.reject(t.error)),s.onmessage=this._onMessage.bind(this),i=!0,n.resolve())},s.send(o),setTimeout((()=>{i||(this.destroyed||this._websocket!==s||C.error(new d("geoevent-connection","Server timed out when setting filter")),n.reject())}),1e4),n.promise}_serializeFilter(e,t){const o={};if(r(e)&&r(t))return o;if(s(e)&&e.geometry)try{const t=b(e.geometry);if("extent"!==t.type)throw new d(`Expected extent but found type ${t.type}`);o.geometry=JSON.stringify(t.shiftCentralMeridian())}catch(e){C.error(new d("geoevent-connection","Encountered an error when setting connection geometryDefinition",e))}return s(e)&&e.where&&"1 = 1"!==e.where&&(o.where=e.where),s(t)&&(o.outFields=t.join(",")),o}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t];if(!this._relatedFeatures.has(r))return C.warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:s,geometry:o}=this._relatedFeatures.get(r);for(const t in s)e.attributes[t]=s[t];return o&&(e.geometry=o),e.geometry||e.centroid||C.error(new d("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const e of o.features)this.onFeature(this._enrich(e))}catch(e){C.error(new d("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new((await import("../layers/FeatureLayer.js")).default)({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,a=r.query.supportsCentroid,c=this._config.maxRecordCountFactor,d=t.capabilities.query.maxRecordCount,u=s?d*c:d,h=new w;if(h.outFields=i(this._config.outFields,["*"]),h.where=i(n(this._config.filter,"where"),"1=1"),h.returnGeometry=!0,h.returnExceededLimitFeatures=!0,h.outSpatialReference=v.fromJSON(this._config.spatialReference),a&&(h.returnCentroid=!0),s&&(h.maxRecordCountFactor=c),o)return h.num=u,t.destroy(),this._queryPages(e,h);const l=await g(e,h,this._config.sourceSpatialReference);return t.destroy(),l.data}async _queryPages(e,t,r=[],o=0){t.start=s(t.num)?o*t.num:null;const{data:i}=await g(e,t,this._config.sourceSpatialReference);return i.exceededTransferLimit&&o<this._config.maxQueryDepth?(i.features.forEach((e=>r.push(e))),this._queryPages(e,t,r,o+1)):(r.forEach((e=>i.features.push(e))),i)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const e of r){const r=e.attributes[s];t.set(r,e)}this._relatedFeatures=t}};R=a([_("esri.layers.graphics.sources.connections.GeoEventConnection")],R);var E=R;function T(e,t,r,s,o,i,n){const a=0===e.path.indexOf("wss://")||0===e.path.indexOf("ws://"),c={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:i,maxReconnectionInterval:n};return a?new j(c):new E(c)}export{k as S,T as c};
