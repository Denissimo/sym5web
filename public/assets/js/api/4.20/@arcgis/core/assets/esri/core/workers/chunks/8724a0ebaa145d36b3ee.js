(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[8324,9450],{23761:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var i,n=r(29768),s=r(74569),o=r(86748),a=r(96467),l=r(74673),u=r(76506),c=r(42788),p=r(34250),d=(r(91306),r(92143),r(17533)),y=r(32422);r(21801),r(40642),r(71552),r(73796),r(97714),r(60947),r(2906),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(26341),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(15324),r(76996),r(14249),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(63571),r(30776),r(48027),r(54174),r(82426),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(82058),r(88762),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589);let f=i=class extends l.a{constructor(...e){super(...e),this.isAggregate=!1,this.layer=null,this.popupTemplate=null,this.sourceLayer=null,Object.defineProperty(this,"uid",{value:(0,c.g)(),configurable:!0})}normalizeCtorArgs(e,t,r,i){return e&&!e.declaredClass?e:{geometry:e,symbol:t,attributes:r,popupTemplate:i}}set attributes(e){const t=this._get("attributes");t!==e&&(this._set("attributes",e),this._notifyLayer("attributes",t,e))}set geometry(e){const t=this._get("geometry");t!==e&&(this._set("geometry",e),this._notifyLayer("geometry",t,e))}set symbol(e){const t=this._get("symbol");t!==e&&(this._set("symbol",e),this._notifyLayer("symbol",t,e))}set visible(e){const t=this._get("visible");t!==e&&(this._set("visible",e),this._notifyLayer("visible",t,e))}getEffectivePopupTemplate(e=!1){if(this.popupTemplate)return this.popupTemplate;for(const t of[this.sourceLayer,this.layer])if(t){if("popupTemplate"in t&&t.popupTemplate)return t.popupTemplate;if(e&&"defaultPopupTemplate"in t&&(0,u.i)(t.defaultPopupTemplate))return t.defaultPopupTemplate}return null}getAttribute(e){return this.attributes&&this.attributes[e]}setAttribute(e,t){if(this.attributes){const r=this.getAttribute(e);this.attributes[e]=t,this._notifyLayer("attributes",r,t,e)}else this.attributes={[e]:t},this._notifyLayer("attributes",void 0,t,e)}getObjectId(){return this.sourceLayer&&"objectIdField"in this.sourceLayer&&this.sourceLayer.objectIdField?this.getAttribute(this.sourceLayer.objectIdField):null}toJSON(){return{geometry:(0,u.i)(this.geometry)?this.geometry.toJSON():null,symbol:(0,u.i)(this.symbol)?this.symbol.toJSON():null,attributes:{...this.attributes},popupTemplate:this.popupTemplate&&this.popupTemplate.toJSON()}}clone(){return new i(this.cloneProperties())}notifyGeometryChanged(){this._notifyLayer("geometry",this.geometry,this.geometry)}cloneProperties(){return{attributes:(0,u.d9)(this.attributes),geometry:(0,u.d9)(this.geometry),layer:this.layer,popupTemplate:this.popupTemplate&&this.popupTemplate.clone(),sourceLayer:this.sourceLayer,symbol:(0,u.d9)(this.symbol),visible:this.visible}}_notifyLayer(e,t,r,i){if(!this.layer||!("graphicChanged"in this.layer))return;const n={graphic:this,property:e,oldValue:t,newValue:r};"attributes"===e&&(n.attributeName=i),this.layer.graphicChanged(n)}};(0,n._)([(0,p.Cb)({value:null})],f.prototype,"attributes",null),(0,n._)([(0,p.Cb)({value:null,types:s.qM,json:{read:y.im}})],f.prototype,"geometry",null),(0,n._)([(0,p.Cb)({type:Boolean})],f.prototype,"isAggregate",void 0),(0,n._)([(0,p.Cb)()],f.prototype,"layer",void 0),(0,n._)([(0,p.Cb)({type:o.Z})],f.prototype,"popupTemplate",void 0),(0,n._)([(0,p.Cb)()],f.prototype,"sourceLayer",void 0),(0,n._)([(0,p.Cb)({value:null,types:a.LB})],f.prototype,"symbol",null),(0,n._)([(0,p.Cb)({type:Boolean,value:!0})],f.prototype,"visible",null),f=i=(0,n._)([(0,d.j)("esri.Graphic")],f),(f||(f={})).generateUID=c.g;const m=f},75025:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var i=r(29768),n=r(92143),s=r(76506),o=r(34250),a=(r(91306),r(17533)),l=r(21132);const u=e=>{let t=class extends e{get title(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){const e=(0,l.p)(this.url);if((0,s.i)(e)&&e.title)return e.title}return this._get("title")||""}set title(e){this._set("title",e)}set url(e){this._set("url",(0,l.s)(e,n.L.getLogger(this.declaredClass)))}};return(0,i._)([(0,o.Cb)()],t.prototype,"title",null),(0,i._)([(0,o.Cb)({type:String})],t.prototype,"url",null),t=(0,i._)([(0,a.j)("esri.layers.mixins.ArcGISService")],t),t}},21132:(e,t,r)=>{"use strict";r.d(t,{a:()=>b,b:()=>m,c:()=>y,d:()=>c,e:()=>v,f:()=>d,p:()=>p,s:()=>h,t:()=>f,w:()=>g});var i=r(76506),n=r(32101),s=r(38742);const o=["MapServer","ImageServer","FeatureServer","SceneServer","StreamServer","VectorTileServer"],a=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),l=new RegExp(`^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${o.join("|")}))(?:\\/(?:layers\\/)?(\\d+))?`,"i"),u=/(.*?)\/(?:layers\/)?(\d+)\/?$/i;function c(e){return!!a.test(e)}function p(e){const t=(0,n.mN)(e),r=t.path.match(a)||t.path.match(l);if(!r)return null;const[,i,s,o,u]=r,c=s.indexOf("/");return{title:y(-1!==c?s.slice(c+1):s),serverType:o,sublayer:null!=u&&""!==u?parseInt(u,10):null,url:{path:i}}}function d(e){const t=(0,n.mN)(e).path.match(u);return t?{serviceUrl:t[1],sublayerId:Number(t[2])}:null}function y(e){return(e=e.replace(/\s*[/_]+\s*/g," "))[0].toUpperCase()+e.slice(1)}function f(e,t){const r=[];if(e){const t=p(e);(0,i.i)(t)&&t.title&&r.push(t.title)}if(t){const e=y(t);r.push(e)}if(2===r.length){if(-1!==r[0].toLowerCase().indexOf(r[1].toLowerCase()))return r[0];if(-1!==r[1].toLowerCase().indexOf(r[0].toLowerCase()))return r[1]}return r.join(" - ")}function m(e){if(!e)return!1;const t=-1!==(e=e.toLowerCase()).indexOf(".arcgis.com/"),r=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&r}function h(e,t){return e?(0,n.Qj)((0,n.Hu)(e,t)):e}function b(e){let{url:t}=e;if(!t)return{url:t};t=(0,n.Hu)(t,e.logger);const r=(0,n.mN)(t),s=p(r.path);let o;if((0,i.i)(s))null!=s.sublayer&&null==e.layer.layerId&&(o=s.sublayer),t=s.url.path;else if(e.nonStandardUrlAllowed){const e=d(r.path);(0,i.i)(e)&&(t=e.serviceUrl,o=e.sublayerId)}return{url:(0,n.Qj)(t),layerId:o}}function g(e,t,r,i,o){(0,s.w)(t,i,"url",o),i.url&&null!=e.layerId&&(i.url=(0,n.v_)(i.url,r,e.layerId.toString()))}function v(e){if(!e)return!1;const t=e.toLowerCase(),r=-1!==t.indexOf("/services/"),i=-1!==t.indexOf("/mapserver/wmsserver"),n=-1!==t.indexOf("/imageserver/wmsserver"),s=-1!==t.indexOf("/wmsserver");return r&&(i||n||s)}},48190:(e,t,r)=>{"use strict";function i(e){}r.d(t,{n:()=>i}),r(76506)},6941:(e,t,r)=>{"use strict";r.d(t,{a:()=>s,b:()=>o,c:()=>a,d:()=>n,e:()=>l,f:()=>u,g:()=>c});const i=[252,146,31,255],n={type:"esriSMS",style:"esriSMSCircle",size:6,color:i,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:i},o={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},a={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},l={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},u={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},c={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}},93939:(e,t,r)=>{"use strict";r.d(t,{a:()=>f,d:()=>m,h:()=>y});var i=r(21972),n=r(15324),s=r(76506),o=r(86656);const a=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];function l(e){return e instanceof i.Z}function u(e){return e instanceof n.Z?Object.keys(e.items):l(e)?(0,o.g)(e).keys():e?Object.keys(e):[]}function c(e,t){return e instanceof n.Z?e.items[t]:e[t]}function p(e){return e?e.declaredClass:null}function d(e,t){const r=e.diff;if(r&&"function"==typeof r)return r(e,t);const i=u(e),n=u(t);if(0===i.length&&0===n.length)return;if(!i.length||!n.length||function(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}(e,t))return{type:"complete",oldValue:e,newValue:t};const o=n.filter((e=>-1===i.indexOf(e))),y=i.filter((e=>-1===n.indexOf(e))),f=i.filter((r=>n.indexOf(r)>-1&&c(e,r)!==c(t,r))).concat(o,y).sort(),m=p(e);if(m&&a.indexOf(m)>-1&&f.length)return{type:"complete",oldValue:e,newValue:t};let h;const b=l(e)&&l(t);for(const i of f){const n=c(e,i),o=c(t,i);let a;(b||"function"!=typeof n&&"function"!=typeof o)&&n!==o&&(null==n&&null==o||(a=r&&r[i]&&"function"==typeof r[i]?r[i](n,o):"object"==typeof n&&"object"==typeof o&&p(n)===p(o)?d(n,o):{type:"complete",oldValue:n,newValue:o},(0,s.i)(a)&&((0,s.i)(h)?h.diff[i]=a:h={type:"partial",diff:{[i]:a}})))}return h}function y(e,t){if((0,s.b)(e))return!1;const r=t.split(".");let i=e;for(const e of r){if("complete"===i.type)return!0;if("partial"!==i.type)return!1;{const t=i.diff[e];if(!t)return!1;i=t}}return!0}function f(e,t){for(const r of t)if(y(e,r))return!0;return!1}function m(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&p(e)!==p(t)?{type:"complete",oldValue:e,newValue:t}:d(e,t)}},54732:(e,t,r)=>{"use strict";r.d(t,{k:()=>i});const i=new(r(57251).J)({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})},85557:(e,t,r)=>{"use strict";r.d(t,{m:()=>s});var i=r(53785),n=r(89623);const s={inches:(0,i.c)(1,"meters","inches"),feet:(0,i.c)(1,"meters","feet"),"us-feet":(0,i.c)(1,"meters","us-feet"),yards:(0,i.c)(1,"meters","yards"),miles:(0,i.c)(1,"meters","miles"),"nautical-miles":(0,i.c)(1,"meters","nautical-miles"),millimeters:(0,i.c)(1,"meters","millimeters"),centimeters:(0,i.c)(1,"meters","centimeters"),decimeters:(0,i.c)(1,"meters","decimeters"),meters:(0,i.c)(1,"meters","meters"),kilometers:(0,i.c)(1,"meters","kilometers"),"decimal-degrees":1/(0,i.l)(1,"meters",n.e.radius)}},52228:(e,t,r)=>{"use strict";function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function n(e){return null!=e&&!isNaN(e)&&isFinite(e)}function s(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function o(e,t){const r=t||s(e),i=e.valueUnit||"unknown";return"unknown"===r?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===i?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}r.d(t,{a:()=>o,b:()=>n,g:()=>s,i:()=>i})},68714:(e,t,r)=>{"use strict";r.d(t,{l:()=>o});var i=r(41864),n=r(50406),s=r(17533);async function o(e,t,r){const o=e&&e.getAtOrigin&&e.getAtOrigin("renderer",t.origin);if(o&&"unique-value"===o.type&&o.styleOrigin){const a=await(0,i.r)(o.populateFromStyle());if((0,n.k_)(r),!1===a.ok){const r=a.error;t&&t.messages&&t.messages.push(new s.W("renderer:style-reference",`Failed to create unique value renderer from style reference: ${r.message}`,{error:r,context:t})),e.clear("renderer",t.origin)}}}},42788:(e,t,r)=>{"use strict";r.d(t,{g:()=>n});let i=0;function n(){return++i}},74057:(e,t,r)=>{"use strict";r.d(t,{PR:()=>_,Lq:()=>f,Km:()=>m,cM:()=>h,ap:()=>b,V3:()=>S,B3:()=>y});var i=r(48027),n=r(23761),s=r(48190),o=r(92143),a=r(76506),l=r(85557),u=r(52228);r(54174),r(82426),r(91306),r(31450),r(71552),r(40642),r(74569),r(21801),r(34250),r(86656),r(22723),r(17533),r(81172),r(73796),r(74673),r(21972),r(23639),r(91055),r(27794),r(6906),r(50406),r(60991),r(26341),r(97714),r(60947),r(2906),r(91597),r(86787),r(35132),r(89623),r(84069),r(44567),r(98380),r(92896),r(22781),r(57251),r(32422),r(86748),r(15324),r(76996),r(14249),r(9801),r(53523),r(59465),r(42911),r(46826),r(45433),r(60217),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(96467),r(63571),r(30776),r(63130),r(25696),r(66396),r(42775),r(95834),r(34394),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(82058),r(88762),r(73173),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(53785),r(95587);const c=o.L.getLogger("esri.renderers.visualVariables.support.visualVariableUtils"),p=new n.Z,d=Math.PI,y=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;function f(e,t,r){const n="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"color"===e.type))[0]:e;if(!n)return;if("esri.renderers.visualVariables.ColorVariable"!==n.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable");const s="number"==typeof t,o=s?null:t,l=o&&o.attributes;let u=s?t:null;const p=n.field,{ipData:d,hasExpression:y}=n.cache;let f=n.cache.compiledFunc;if(!p&&!y){const e=n.stops;return e&&e[0]&&e[0].color}if("number"!=typeof u)if(y){if(!(0,a.i)(r)||!(0,a.i)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,i=t.getViewInfo(e),s=t.createExecContext(o,i);if(!f){const e=t.createSyntaxTree(n.valueExpression);f=t.createFunction(e),n.cache.compiledFunc=f}u=t.executeFunction(f,s)}else l&&(u=l[p]);const m=n.normalizationField,h=l?parseFloat(l[m]):void 0;if(null!=u&&(!m||s||!isNaN(h)&&0!==h)){isNaN(h)||s||(u/=h);const e=w(u,d);if(e){const t=e[0],s=e[1],o=t===s?n.stops[t].color:i.Z.blendColors(n.stops[t].color,n.stops[s].color,e[2],(0,a.i)(r)?r.color:void 0);return new i.Z(o)}}}function m(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"opacity"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.OpacityVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable");const n="number"==typeof t,s=n?null:t,o=s&&s.attributes;let l=n?t:null;const u=i.field,{ipData:p,hasExpression:d}=i.cache;let y=i.cache.compiledFunc;if(!u&&!d){const e=i.stops;return e&&e[0]&&e[0].opacity}if("number"!=typeof l)if(d){if((0,a.b)(r)||(0,a.b)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),o=t.createExecContext(s,n);if(!y){const e=t.createSyntaxTree(i.valueExpression);y=t.createFunction(e),i.cache.compiledFunc=y}l=t.executeFunction(y,o)}else o&&(l=o[u]);const f=i.normalizationField,m=o?parseFloat(o[f]):void 0;if(null!=l&&(!f||n||!isNaN(m)&&0!==m)){isNaN(m)||n||(l/=m);const e=w(l,p);if(e){const t=e[0],r=e[1];if(t===r)return i.stops[t].opacity;{const n=i.stops[t].opacity;return n+(i.stops[r].opacity-n)*e[2]}}}}function h(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"rotation"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.RotationVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable");const n=i.axis||"heading",s="heading"===n&&"arithmetic"===i.rotationType?90:0,o="heading"===n&&"arithmetic"===i.rotationType?-1:1,l="number"==typeof t?null:t,u=l&&l.attributes,p=i.field,{hasExpression:d}=i.cache;let y=i.cache.compiledFunc,f=0;if(!p&&!d)return f;if(d){if((0,a.b)(r)||(0,a.b)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const e={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},t=r.arcade.arcadeUtils,n=t.getViewInfo(e),s=t.createExecContext(l,n);if(!y){const e=t.createSyntaxTree(i.valueExpression);y=t.createFunction(e),i.cache.compiledFunc=y}f=t.executeFunction(y,s)}else u&&(f=u[p]||0);return f="number"!=typeof f||isNaN(f)?null:s+o*f,f}function b(e,t,r){const i="visualVariables"in e&&e.visualVariables?e.visualVariables.filter((e=>"size"===e.type))[0]:e;if(!i)return;if("esri.renderers.visualVariables.SizeVariable"!==i.declaredClass)return void c.warn("The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable");const n=function(e,t,r,i,n){switch(t.transformationType){case"additive":return function(e,t,r,i){return e+(g(t.minSize,r,i)||t.minDataValue)}(e,t,r,i);case"constant":return function(e,t,r){const i=e.stops;let n=i&&i.length&&i[0].size;return null==n&&(n=e.minSize),g(n,t,r)}(t,r,i);case"clamped-linear":return function(e,t,r,i){const n=(e-t.minDataValue)/(t.maxDataValue-t.minDataValue),s=g(t.minSize,r,i),o=g(t.maxSize,r,i),l=(0,a.i)(i)?i.shape:void 0;if(e<=t.minDataValue)return s;if(e>=t.maxDataValue)return o;if("area"===t.scaleBy&&l){const e="circle"===l,t=e?d*(s/2)**2:s*s,r=t+n*((e?d*(o/2)**2:o*o)-t);return e?2*Math.sqrt(r/d):Math.sqrt(r)}return s+n*(o-s)}(e,t,r,i);case"proportional":return function(e,t,r,i){const n=(0,a.i)(i)?i.shape:void 0,s=e/t.minDataValue,o=g(t.minSize,r,i),l=g(t.maxSize,r,i);let u=null;return u="circle"===n?2*Math.sqrt(s*(o/2)**2):"square"===n||"diamond"===n||"image"===n?Math.sqrt(s*o**2):s*o,v(u,o,l)}(e,t,r,i);case"stops":return function(e,t,r,i,n){const[s,o,a]=w(e,n);if(s===o)return g(t.stops[s].size,r,i);{const e=g(t.stops[s].size,r,i);return e+(g(t.stops[o].size,r,i)-e)*a}}(e,t,r,i,n);case"real-world-size":return function(e,t,r,i){const n=((0,a.i)(i)&&i.resolution?i.resolution:1)*l.m[t.valueUnit],s=g(t.minSize,r,i),o=g(t.maxSize,r,i),{valueRepresentation:u}=t;let c=null;return c="area"===u?2*Math.sqrt(e/d)/n:"radius"===u||"distance"===u?2*e/n:e/n,v(c,s,o)}(e,t,r,i);case"identity":return e;case"unknown":return null}}(function(e,t,r){const i="number"==typeof t,n=i?null:t,s=n&&n.attributes;let o=i?t:null;const{isScaleDriven:l}=e.cache;let p=e.cache.compiledFunc;if(l){const t=(0,a.i)(r)?r.scale:void 0,i=(0,a.i)(r)?r.view:void 0;o=null==t||"3d"===i?function(e){let t=null,r=null;const i=e.stops;return i?(t=i[0].value,r=i[i.length-1].value):(t=e.minDataValue||0,r=e.maxDataValue||0),(t+r)/2}(e):t}else if(!i)switch(e.inputValueType){case"expression":{if((0,a.b)(r)||(0,a.b)(r.arcade))return void c.error("Use of arcade expressions requires an arcade context");const t={viewingMode:r.viewingMode,scale:r.scale,spatialReference:r.spatialReference},i=r.arcade.arcadeUtils,s=i.getViewInfo(t),l=i.createExecContext(n,s);if(!p){const t=i.createSyntaxTree(e.valueExpression);p=i.createFunction(t),e.cache.compiledFunc=p}o=i.executeFunction(p,l);break}case"field":s&&(o=s[e.field]);break;case"unknown":o=null}if(!(0,u.b)(o))return null;if(i||!e.normalizationField)return o;const d=s?parseFloat(s[e.normalizationField]):null;return(0,u.b)(d)&&0!==d?o/d:null}(i,t,r),i,t,r,i.cache.ipData);return null==n||isNaN(n)?0:n}function g(e,t,r){return null==e?null:(0,u.i)(e)?b(e,t,r):(0,u.b)(e)?e:null}function v(e,t,r){return(0,u.b)(r)&&e>r?r:(0,u.b)(t)&&e<t?t:e}function S(e,t,r){const{isScaleDriven:i}=e.cache;if(!(i&&"3d"===r||t))return null;const n={scale:t,view:r};let s=g(e.minSize,p,n),o=g(e.maxSize,p,n);if(null!=s||null!=o){if(s>o){const e=o;o=s,s=e}return{minSize:s,maxSize:o}}}function w(e,t){if(!t)return;let r=0,i=t.length-1;return t.some(((t,n)=>e<t?(i=n,!0):(r=n,!1))),[r,i,(e-t[r])/(t[i]-t[r])]}function _(e,t,r){const i=["proportional","proportional","proportional"];for(const n of e){const e=n.useSymbolValue?"symbol-value":b(n,t,r);switch(n.axis){case"width":i[0]=e;break;case"depth":i[1]=e;break;case"height":i[2]=e;break;case"width-and-depth":i[0]=e,i[1]=e;break;case"all":case void 0:case null:i[0]=e,i[1]=e,i[2]=e;break;default:(0,s.n)(n.axis)}}return i}},58324:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Q});var i,n=r(29768),s=(r(74569),r(86748)),o=(r(55306),r(71206),r(51979),r(60698),r(65684),r(86758)),a=r(95310),l=r(20208),u=r(82058),c=r(96467),p=r(60991),d=r(76506),y=r(92143),f=r(54179),m=r(50406),h=r(34250),b=r(91306),g=r(97714),v=r(17533),S=r(2906),w=r(22781),_=r(41617),x=r(75025),C=r(11118),V=r(89440),T=r(62162),I=r(16647),F=r(58912),O=r(19902),j=r(43022),L=r(83290),R=r(47346),D=r(14249),N=r(77807),z=r(68653),k=r(74673),A=r(68714),P=r(31292),E=r(78893),U=r(47842),M=r(60947),Z=r(21801);r(73796),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(31450),r(71552),r(40642),r(81172),r(26341),r(84069),r(91597),r(86787),r(35132),r(89623),r(44567),r(98380),r(92896),r(32422),r(57251),r(15324),r(76996),r(29107),r(30574),r(2157),r(25977),r(7471),r(54414),r(59465),r(1648),r(8925),r(33921),r(3482),r(45154),r(16769),r(55531),r(30582),r(593),r(85699),r(63136),r(96055),r(47776),r(18033),r(6331),r(62048),r(4292),r(75626),r(72652),r(29641),r(30493),r(70821),r(82673),r(34229),r(37029),r(9801),r(53523),r(42911),r(46826),r(45433),r(60217),r(74071),r(51723),r(23243),r(51669),r(6090),r(48027),r(54174),r(82426),r(3977),r(36741),r(34394),r(11253),r(90319),r(38822),r(74057),r(23761),r(63571),r(30776),r(63130),r(25696),r(66396),r(42775),r(95834),r(57150),r(76726),r(20444),r(76393),r(78548),r(2497),r(49906),r(46527),r(48649),r(9960),r(3101),r(5853),r(39141),r(32101),r(38742),r(48243),r(34635),r(10401),r(49900),r(66284),r(73173),r(88762),r(22739),r(20543),r(67477),r(78533),r(74653),r(91091),r(58943),r(70737),r(8487),r(17817),r(90814),r(15459),r(61847),r(16796),r(16955),r(22401),r(77894),r(55187),r(8586),r(44509),r(69814),r(11305),r(62259),r(44790),r(5909),r(60669),r(48208),r(51589),r(48190),r(85557),r(53785),r(95587),r(94070),r(16218),r(9075),r(67541),r(12158),r(74864),r(63683),r(94479),r(45702),r(51127),r(89241),r(91700),r(32037),r(90811),r(93939),r(238),r(71831),r(49500),r(50161),r(21132),r(41864),r(56420),r(74742),r(28239),r(93314),r(35197),r(59765),r(77361),r(13322),r(14460),r(17298),r(50203),r(30439),r(6941),r(97546),r(54732),r(69218),r(27207);let q=i=class extends k.a{constructor(){super(...arguments),this.age=null,this.ageReceived=null,this.displayCount=null,this.maxObservations=1}clone(){return new i({age:this.age,ageReceived:this.ageReceived,displayCount:this.displayCount,maxObservations:this.maxObservations})}};(0,n._)([(0,h.Cb)({type:Number,json:{write:!0}})],q.prototype,"age",void 0),(0,n._)([(0,h.Cb)({type:Number,json:{write:!0}})],q.prototype,"ageReceived",void 0),(0,n._)([(0,h.Cb)({type:Number,json:{write:!0}})],q.prototype,"displayCount",void 0),(0,n._)([(0,h.Cb)({type:Number,json:{write:!0}})],q.prototype,"maxObservations",void 0),q=i=(0,n._)([(0,v.j)("esri.layers.support.PurgeOptions")],q);var J=q;const G=y.L.getLogger("esri.layers.StreamLayer"),W=(0,R.d)();let B=class extends((0,C.B)((0,O.T)((0,F.S)((0,I.R)((0,x.A)((0,V.O)((0,T.P)((0,f.M)(_.Z))))))))){constructor(...e){super(...e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.geometryDefinition=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.maxReconnectionAttempts=0,this.maxReconnectionInterval=20,this.maxScale=0,this.minScale=0,this.objectIdField=null,this.operationalLayerType="ArcGISStreamLayer",this.popupEnabled=!0,this.popupTemplate=null,this.purgeOptions=new J,this.screenSizePerspectiveEnabled=!0,this.sourceJSON=null,this.spatialReference=M.Z.WGS84,this.type="stream",this.url=null,this.updateInterval=300,this.webSocketUrl=null}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}load(e){if(!("WebSocket"in d.g))return this.addResolvingPromise(Promise.reject(new p.Z("stream-layer:websocket-unsupported","WebSocket is not supported in this browser. StreamLayer will not have real-time connection with the stream service."))),Promise.resolve(this);const t=(0,d.i)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Stream Service","Feed"]},e).catch(m.r9).then((()=>this._fetchService(t)))),Promise.resolve(this)}get defaultPopupTemplate(){return this.createPopupTemplate()}readFeatureReduction(e,t){return(0,L.r)(e,t)}writeWebSceneFeatureReduction(e,t,r,i){(0,L.w)(e,t,"layerDefinition.featureReduction",i)}set renderer(e){(0,D.YN)(e,this.fieldsIndex),this._set("renderer",e)}readRenderer(e,t,r){const i=(t=t.layerDefinition||t).drawingInfo&&t.drawingInfo.renderer||void 0;if(i){const e=(0,l.ij)(i,t,r)||void 0;return e||G.error("Failed to create renderer",{rendererDefinition:t.drawingInfo.renderer,layer:this,context:r}),e}if(t.defaultSymbol)return t.types&&t.types.length?new a.Z({defaultSymbol:$(t.defaultSymbol,t,r),field:t.typeIdField,uniqueValueInfos:t.types.map((e=>({id:e.id,symbol:$(e.symbol,e,r)})))}):new o.Z({symbol:$(t.defaultSymbol,t,r)})}writeRenderer(e,t,r,i){(0,l.cW)(e,t,r,i)}writeWebSceneRenderer(e,t,r,i){(0,l.cW)(e,t,"layerDefinition.drawingInfo.renderer",i)}createPopupTemplate(e){return(0,E.eZ)(this,e)}createQuery(){const e=new P.Z;return e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1",e}getFieldDomain(e,t){if(!this.fields)return null;let r=null;return this.fields.some((t=>(t.name===e&&(r=t.domain),!!r))),r}getField(e){return this.fieldsIndex.get(e)}async _fetchService(e){var t;if(this.webSocketUrl){var r;if(null==(r=this.timeInfo)||!r.trackIdField)throw new p.Z("stream-layer:missing-metadata","The stream layer trackIdField must be specified.");if(!this.objectIdField)throw new p.Z("stream-layer:missing-metadata","The stream layer objectIdField must be specified.");if(!this.fields)throw new p.Z("stream-layer:missing-metadata","The stream layer fields must be specified.");if(!this.geometryType)throw new p.Z("stream-layer:missing-metadata","The stream layer geometryType must be specified.");this.url=this.webSocketUrl}else if(!this.sourceJSON){const{data:t}=await(0,u.default)(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e});this.sourceJSON=t}return this.sourceJSON={...null!=(t=this.sourceJSON)?t:{},objectIdField:"__esri_stream_id__"},this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),(0,D.YN)(this.renderer,this.fieldsIndex),(0,D.UF)(this.timeInfo,this.fieldsIndex),(0,A.l)(this,{origin:"service"})}};(0,n._)([(0,h.Cb)({type:String})],B.prototype,"copyright",void 0),(0,n._)([(0,h.Cb)({readOnly:!0})],B.prototype,"defaultPopupTemplate",null),(0,n._)([(0,h.Cb)({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],B.prototype,"definitionExpression",void 0),(0,n._)([(0,h.Cb)({type:String})],B.prototype,"displayField",void 0),(0,n._)([(0,h.Cb)({type:U.E})],B.prototype,"elevationInfo",void 0),(0,n._)([(0,g.r)("featureReduction",["layerDefinition.featureReduction"])],B.prototype,"readFeatureReduction",null),(0,n._)([(0,S.w)("web-scene","featureReduction",{"layerDefinition.featureReduction":{types:L.a}})],B.prototype,"writeWebSceneFeatureReduction",null),(0,n._)([(0,h.Cb)(W.fields)],B.prototype,"fields",void 0),(0,n._)([(0,h.Cb)(W.fieldsIndex)],B.prototype,"fieldsIndex",void 0),(0,n._)([(0,h.Cb)({type:Z.Z})],B.prototype,"geometryDefinition",void 0),(0,n._)([(0,h.Cb)({type:w.f.apiValues,json:{read:{reader:w.f.read}}})],B.prototype,"geometryType",void 0),(0,n._)([(0,h.Cb)(j.l)],B.prototype,"labelsVisible",void 0),(0,n._)([(0,h.Cb)({type:[N.Z],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo",reader:z.r},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],B.prototype,"labelingInfo",void 0),(0,n._)([(0,h.Cb)(j.b)],B.prototype,"legendEnabled",void 0),(0,n._)([(0,h.Cb)({type:["show","hide"]})],B.prototype,"listMode",void 0),(0,n._)([(0,h.Cb)({type:b.I})],B.prototype,"maxReconnectionAttempts",void 0),(0,n._)([(0,h.Cb)({type:b.I})],B.prototype,"maxReconnectionInterval",void 0),(0,n._)([(0,h.Cb)(j.c)],B.prototype,"maxScale",void 0),(0,n._)([(0,h.Cb)(j.m)],B.prototype,"minScale",void 0),(0,n._)([(0,h.Cb)({type:String})],B.prototype,"objectIdField",void 0),(0,n._)([(0,h.Cb)({value:"ArcGISStreamLayer",type:["ArcGISStreamLayer"]})],B.prototype,"operationalLayerType",void 0),(0,n._)([(0,h.Cb)(j.p)],B.prototype,"popupEnabled",void 0),(0,n._)([(0,h.Cb)({type:s.Z,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],B.prototype,"popupTemplate",void 0),(0,n._)([(0,h.Cb)({type:J})],B.prototype,"purgeOptions",void 0),(0,n._)([(0,h.Cb)({types:l.r,json:{origins:{service:{write:{target:"drawingInfo.renderer",enabled:!1}}},write:{target:"layerDefinition.drawingInfo.renderer"}}})],B.prototype,"renderer",null),(0,n._)([(0,g.r)("service","renderer",["drawingInfo.renderer","defaultSymbol"]),(0,g.r)("renderer",["layerDefinition.drawingInfo.renderer","layerDefinition.defaultSymbol"])],B.prototype,"readRenderer",null),(0,n._)([(0,S.w)("renderer")],B.prototype,"writeRenderer",null),(0,n._)([(0,S.w)("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:l.w}})],B.prototype,"writeWebSceneRenderer",null),(0,n._)([(0,h.Cb)(j.d)],B.prototype,"screenSizePerspectiveEnabled",void 0),(0,n._)([(0,h.Cb)({type:M.Z,json:{origins:{service:{read:{source:"spatialReference"}}}}})],B.prototype,"spatialReference",void 0),(0,n._)([(0,h.Cb)({json:{read:!1}})],B.prototype,"type",void 0),(0,n._)([(0,h.Cb)(j.u)],B.prototype,"url",void 0),(0,n._)([(0,h.Cb)({type:Number})],B.prototype,"updateInterval",void 0),(0,n._)([(0,h.Cb)({type:String})],B.prototype,"webSocketUrl",void 0),B=(0,n._)([(0,v.j)("esri.layers.StreamLayer")],B);const $=(0,v.d)({types:c.QT}),Q=B},97546:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var i,n=r(29768),s=r(57251),o=r(74673),a=r(34250),l=(r(76506),r(91306)),u=(r(92143),r(59465)),c=r(97714),p=r(17533),d=r(9801),y=r(54732);r(71552),r(21972),r(23639),r(86656),r(22723),r(91055),r(27794),r(6906),r(50406),r(60991),r(81172),r(31450),r(40642),r(26341),r(53523),r(42911),r(46826),r(45433);const f=new s.J({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});let m=i=class extends o.a{constructor(e){super(e),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=-1,this.name=null,this.nullable=!0,this.type=null,this.valueType=null}readDescription(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?r.value:null}readValueType(e,{description:t}){let r;try{r=JSON.parse(t)}catch(e){}return r?f.fromJSON(r.fieldValueType):null}clone(){return new i({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})}};(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"alias",void 0),(0,n._)([(0,a.Cb)({type:[String,Number],json:{write:{allowNull:!0}}})],m.prototype,"defaultValue",void 0),(0,n._)([(0,a.Cb)()],m.prototype,"description",void 0),(0,n._)([(0,c.r)("description")],m.prototype,"readDescription",null),(0,n._)([(0,a.Cb)({types:d.t,json:{read:{reader:d.f},write:!0}})],m.prototype,"domain",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"editable",void 0),(0,n._)([(0,a.Cb)({type:l.I,json:{write:!0}})],m.prototype,"length",void 0),(0,n._)([(0,a.Cb)({type:String,json:{write:!0}})],m.prototype,"name",void 0),(0,n._)([(0,a.Cb)({type:Boolean,json:{write:!0}})],m.prototype,"nullable",void 0),(0,n._)([(0,u.e)(y.k)],m.prototype,"type",void 0),(0,n._)([(0,a.Cb)()],m.prototype,"valueType",void 0),(0,n._)([(0,c.r)("valueType",["description"])],m.prototype,"readValueType",null),m=i=(0,n._)([(0,p.j)("esri.layers.support.Field")],m);const h=m}}]);