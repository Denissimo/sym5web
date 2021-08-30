/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../../chunks/tslib.es6.js";import e from"../../TimeExtent.js";import i from"../../TimeInterval.js";import{a as s}from"../../chunks/deprecate.js";import{HandleOwner as n}from"../../core/HandleOwner.js";import{b as r,i as o,u as l,clone as a}from"../../core/lang.js";import{L as m}from"../../chunks/Logger.js";import{createTask as u,after as p,isAbortError as d,createAbortController as c}from"../../core/promiseUtils.js";import{o as h}from"../../chunks/timeUtils.js";import{init as f,whenFalseOnce as v}from"../../core/watchUtils.js";import{property as g}from"../../core/accessorSupport/decorators/property.js";import{e as w}from"../../chunks/ensureType.js";import{subclass as T}from"../../core/accessorSupport/decorators/subclass.js";import{i as _}from"../../chunks/TemporalLayer.js";import{b as y,W as x}from"../../chunks/Widgets.js";import"../../chunks/JSONSupport.js";import"../../core/Accessor.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/Error.js";import"../../chunks/Message.js";import"../../chunks/object.js";import"../../config.js";import"../../chunks/string.js";import"../../chunks/write.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../../chunks/jsonMap.js";import"../../core/Handles.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../layers/support/TimeInfo.js";import"../../layers/support/fieldUtils.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../layers/support/Domain.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";import"../../chunks/arcadeOnDemand.js";import"../../geometry.js";import"../../geometry/Extent.js";import"../../geometry/Geometry.js";import"../../geometry/SpatialReference.js";import"../../geometry/Point.js";import"../../core/accessorSupport/decorators/cast.js";import"../../geometry/support/webMercatorUtils.js";import"../../chunks/Ellipsoid.js";import"../../geometry/Multipoint.js";import"../../chunks/zmUtils.js";import"../../geometry/Polygon.js";import"../../chunks/extentUtils.js";import"../../geometry/Polyline.js";import"../../chunks/typeUtils.js";import"../../geometry/support/jsonUtils.js";function E(t){return o(t)&&void 0!==t.count}function j(t){return o(t)&&void 0!==t.interval}function S(t){return o(t)&&void 0!==t.dates}function k(t){return"esri.WebMap"===t.declaredClass}const b=m.getLogger("esri.widgets.TimeSlider.TimeSliderViewModel");let D=class extends n{constructor(t){super(t),this._animationController=null,this._loadingWebDocument=!1,this._timerId=null,this._updateTimeSliderTask=null,this.view=null}initialize(){this.handles.add([f(this,"effectiveStops",(()=>{r(this.timeExtent)&&this._set("timeExtent",this._getDefaultTimeExtent())})),f(this,"view.map",(t=>{o(this._updateTimeSliderTask)&&(this._updateTimeSliderTask.abort(),this._updateTimeSliderTask=null),this._updateTimeSliderTask=u((async e=>{this._loadingWebDocument=!0,await this._updateTimeSliderFromMap(t,e),this._loadingWebDocument=!1}))})),f(this,"view",((t,e)=>{this._unregisterWidget(e),this._registerWidget(t)}),!0),f(this,"timeExtent",(t=>{o(this.view)&&(this.view.timeExtent=t)}))])}destroy(){o(this._timerId)&&(clearInterval(this._timerId),this._timerId=null),this._unregisterWidget(this.view),this.view=null,o(this._animationController)&&(this._animationController.abort(),this._animationController=null),o(this._updateTimeSliderTask)&&(this._updateTimeSliderTask.abort(),this._updateTimeSliderTask=null)}get effectiveStops(){const{fullTimeExtent:t,stops:e}=this;if(S(e)){const{dates:i}=e;if(null==i||0===i.length)return null;const s=i.sort(((t,e)=>t.getTime()-e.getTime()));if(r(t))return s;const{start:n,end:o}=t;if(r(n)||r(o))return s;return s.filter((t=>!(t.getTime()<n.getTime()||t.getTime()>o.getTime())))}if(E(e)){var i;const s=null!=(i=e.timeExtent)?i:l(t);return this._divideTimeExtentByCount(s,e.count)}if(j(e)){var s;const i=null!=(s=e.timeExtent)?s:l(t);return this._divideTimeExtentByInterval(i,e.interval)}return[]}set fullTimeExtent(t){this._override("fullTimeExtent",t)}set loop(t){this._override("loop",t)}set mode(t){this._override("mode",t)}set playRate(t){t<=0||t>36e5||("playing"===this.state&&this._startAnimation(),this._override("playRate",t))}get state(){return r(this.fullTimeExtent)||this._loadingWebDocument?"disabled":o(this._animationController)?"playing":"ready"}set stops(t){this._override("stops",t)}set timeExtent(t){this._override("timeExtent",t)}get timeExtentValues(){const{mode:t,timeExtent:e}=this;if(r(e)||e.isAllTime||e.isEmpty)return null;const{start:i,end:s}=e;switch(t){case"cumulative-from-end":case"instant":return o(i)?[i.getTime()]:null;case"cumulative-from-start":return o(s)?[s.getTime()]:null;case"time-window":return o(i)&&o(s)?[i.getTime(),s.getTime()]:null}}get values(){s(b,"values",{replacement:"timeExtent",version:"4.20"});const{mode:t,timeExtent:e}=this;if(r(e))return null;if(e.isAllTime)return"time-window"===t?[null,null]:[null];if(e.isEmpty)return"time-window"===t?[void 0,void 0]:[void 0];const{start:i,end:n}=e;switch(t){case"time-window":return[i,n];case"instant":case"cumulative-from-end":return[i];case"cumulative-from-start":return[n]}}set values(t){if(s(b,"values",{replacement:"timeExtent",version:"4.20"}),r(t))return void(this.timeExtent=null);const i=t[0];if(r(i))return void(this.timeExtent=new e({start:i,end:i}));const n=t.length>1&&t[1];switch(this.mode){case"time-window":return void(this.timeExtent=new e({start:i,end:n}));case"instant":return void(this.timeExtent=new e({start:i,end:i}));case"cumulative-from-end":return void(this.timeExtent=new e({start:i,end:null}));case"cumulative-from-start":return void(this.timeExtent=new e({start:null,end:i}))}}next(){this._step({forward:!0,allowRestart:!1})}play(){this._startAnimation()}previous(){this._step({forward:!1,allowRestart:!1})}stop(){this._stopAnimation()}updateWebDocument(t){if(k(t)){const e=new y({currentTimeExtent:this.timeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:E(this.stops)?this.stops.count:null,numThumbs:"time-window"===this.mode?2:1,stopDelay:this.playRate,stopInterval:j(this.stops)?this.stops.interval:null,stops:S(this.stops)?this.stops.dates:null});t.widgets?t.widgets.timeSlider=e:t.widgets=new x({timeSlider:e})}}valuesToTimeExtent(t){if(r(t))return null;const i=t.length>0?new Date(t[0]):null,s=t.length>1?new Date(t[1]):null;switch(this.mode){case"time-window":return new e({start:i,end:s});case"instant":return new e({start:i,end:i});case"cumulative-from-start":return new e({start:null,end:i});case"cumulative-from-end":return new e({start:i,end:null});default:return e.allTime}}async _animate(){try{await Promise.all([p(this.playRate,null,o(this._animationController)&&this._animationController.signal),o(this.view)&&v(this.view,"updating",o(this._animationController)&&this._animationController.signal)])}catch(t){return d(t)||b.error(t),void(this._animationController=null)}this._step({forward:!0,allowRestart:!1}),r(this._animationController)||this._animate()}_divideTimeExtentByCount(t,e=10){if(!t||!e)return[];const{start:i,end:s}=t;if(r(i)||r(s))return[];if(e>1e4)return this._divideTimeExtentByCount(t);const n=[],o=i.getTime(),l=s.getTime()-o;for(let t=0;t<=e;t++)n.push(new Date(o+t/e*l));return n}_divideTimeExtentByInterval(t,e,i=1e4){if(!t||!e)return[];const{start:s,end:n}=t;if(r(s)||r(n))return[];if((n.getTime()-s.getTime())/e.toMilliseconds()>i)return this._divideTimeExtentByCount(t);const o=[],{value:l,unit:a}=e;let m=s;for(;m.getTime()<=n.getTime();)o.push(new Date(m.getTime())),m=h(m,l,a);return o}_getDefaultTimeExtent(){const{effectiveStops:t,mode:i}=this;if(r(t)||!i)return null;switch(i){case"time-window":return t.length>1?new e({start:t[0],end:t[1]}):null;case"cumulative-from-start":return t.length>0?new e({start:null,end:t[0]}):null;case"cumulative-from-end":return t.length>0?new e({start:t[0],end:null}):null;case"instant":return t.length>0?new e({start:t[0],end:t[0]}):null;default:return null}}async _getFullTimeExtentFromWebDocument(t,e){const{fullTimeExtent:i}=t.widgets.timeSlider;if(i)return i;const s=t.allLayers.filter((t=>_(t)&&t.useViewTime));await Promise.all(s.map((t=>t.load({signal:e}))));const n=s.map((t=>t.timeInfo));let r;if(n.some((t=>t.hasLiveData))){const t=s.filter((t=>function(t){return"feature"===(null==t?void 0:t.type)}(t)||function(t){return"map-image"===(null==t?void 0:t.type)}(t))).map((t=>t.fetchRecomputedExtents({signal:e})));r=(await Promise.all(t)).map((t=>t.timeExtent))}else r=n.map((t=>t.fullTimeExtent));return r.reduce(((t,e)=>t.union(e)))}_getModeFromTimeSlider(t){var e;const i=null!=(e=t.numThumbs)?e:2,s=t.currentTimeExtent;if(s){const{start:t,end:e}=s;return o(t)&&o(e)&&t.getTime()===e.getTime()?"instant":2===i?"time-window":r(t)||0===t.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===i?"time-window":"cumulative-from-start"}_getStopsFromTimeSlider(t){const{numStops:e,stopInterval:i,stops:s}=t;return s?{dates:a(s)}:i?{interval:i.clone()}:{count:null!=e?e:5}}_getTimeExtentFromTimeSlider(t,i){const s=t.currentTimeExtent;if(s){var n;const{start:t,end:r}=s,o=null!=(n=null!=t?t:r)?n:null;switch(i){case"time-window":return new e({start:t,end:r});case"cumulative-from-start":return new e({start:null,end:o});case"cumulative-from-end":return new e({start:o,end:null});case"instant":return new e({start:o,end:o})}}return this._getDefaultTimeExtent()}_registerWidget(t){if(o(t)){t.persistableViewModels.some((t=>t===this))||t.persistableViewModels.add(this)}}_startAnimation(){this._stopAnimation(),this._animationController=c(),this._step({forward:!0,allowRestart:!0}),this._animate()}_step(t){const{forward:e,allowRestart:i}=t,{effectiveStops:s}=this;if(r(this.timeExtentValues)||r(s))return;const n=s.map((t=>t.getTime())),o=this.timeExtentValues.map((t=>{const e=n.indexOf(t);if(-1!==e)return e;const i=n.reduce(((e,i)=>Math.abs(i-t)<Math.abs(e-t)?i:e));return n.indexOf(i)})),l=o.map((t=>t+(e?1:-1))),a=l.some((t=>t<0||t>n.length-1)),{loop:m,state:u}=this;if(a)if(m||i){const t=Math.min(...o),i=Math.max(...o),s=(e?o.map((e=>e-t)):o.map((t=>t+(n.length-1-i)))).map((t=>n[t]));this.timeExtent=this.valuesToTimeExtent(s)}else"playing"===u&&this.stop();else{const t=l.map((t=>n[t]));this.timeExtent=this.valuesToTimeExtent(t)}}_stopAnimation(){o(this._animationController)&&(this._animationController.abort(),this._animationController=null)}_unregisterWidget(t){o(t)&&t.persistableViewModels.remove(this)}async _updateTimeSliderFromMap(t,e){var i;if(!t||!k(t))return;await t.load({signal:e});const s=null==t||null==(i=t.widgets)?void 0:i.timeSlider;if(!s)return;const n=this._getModeFromTimeSlider(s);var r;(this._isOverridden("mode")||(this.mode=n),this._isOverridden("fullTimeExtent")||(this.fullTimeExtent=await this._getFullTimeExtentFromWebDocument(t,e)),this._isOverridden("playRate"))||(this.playRate=null!=(r=s.stopDelay)?r:2e3);this._isOverridden("stops")||(this.stops=this._getStopsFromTimeSlider(s)),this._isOverridden("timeExtent")||(this.timeExtent=this._getTimeExtentFromTimeSlider(s,n)),this._isOverridden("loop")||(this.loop=s.loop)}};t([g()],D.prototype,"_animationController",void 0),t([g()],D.prototype,"_loadingWebDocument",void 0),t([g({readOnly:!0})],D.prototype,"effectiveStops",null),t([g({type:e,value:null})],D.prototype,"fullTimeExtent",null),t([g({nonNullable:!0,value:!1})],D.prototype,"loop",null),t([g({nonNullable:!0,value:"time-window"})],D.prototype,"mode",null),t([g({nonNullable:!0,value:1e3})],D.prototype,"playRate",null),t([g({readOnly:!0})],D.prototype,"state",null),t([g({cast:t=>r(t)?null:(j(t)&&(t.interval=w(i,t.interval)),(j(t)||E(t))&&(t.timeExtent=w(e,t.timeExtent)),t),value:{count:10}})],D.prototype,"stops",null),t([g({type:e,value:null})],D.prototype,"timeExtent",null),t([g({readOnly:!0})],D.prototype,"timeExtentValues",null),t([g({value:null})],D.prototype,"values",null),t([g()],D.prototype,"view",void 0),t([g()],D.prototype,"next",null),t([g()],D.prototype,"play",null),t([g()],D.prototype,"previous",null),t([g()],D.prototype,"stop",null),t([g()],D.prototype,"updateWebDocument",null),D=t([T("esri.widgets.TimeSlider.TimeSliderViewModel")],D);var C=D;export default C;