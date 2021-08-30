// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../TimeExtent ../../TimeInterval ../../core/deprecate ../../core/HandleOwner ../../core/lang ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/timeUtils ../../core/watchUtils ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../layers/mixins/TemporalLayer ../../webdoc/Widgets ../../webdoc/widgets/TimeSlider".split(" "),
function(u,m,k,H,D,g,I,J,f,y,K,w,n,E,P,Q,L,M,N,O){function B(l){return f.isSome(l)&&void 0!==l.count}function z(l){return f.isSome(l)&&void 0!==l.interval}function F(l){return f.isSome(l)&&void 0!==l.dates}const C=J.getLogger("esri.widgets.TimeSlider.TimeSliderViewModel");g=function(l){function A(a){a=l.call(this,a)||this;a._animationController=null;a._loadingWebDocument=!1;a._timerId=null;a._updateTimeSliderTask=null;a.view=null;return a}u._inheritsLoose(A,l);var h=A.prototype;h.initialize=function(){var a=
this;this.handles.add([w.init(this,"effectiveStops",()=>{f.isNone(this.timeExtent)&&this._set("timeExtent",this._getDefaultTimeExtent())}),w.init(this,"view.map",b=>{f.isSome(this._updateTimeSliderTask)&&(this._updateTimeSliderTask.abort(),this._updateTimeSliderTask=null);this._updateTimeSliderTask=y.createTask(function(){var d=u._asyncToGenerator(function*(c){a._loadingWebDocument=!0;yield a._updateTimeSliderFromMap(b,c);a._loadingWebDocument=!1});return function(c){return d.apply(this,arguments)}}())}),
w.init(this,"view",(b,d)=>{this._unregisterWidget(d);this._registerWidget(b)},!0),w.init(this,"timeExtent",b=>{f.isSome(this.view)&&(this.view.timeExtent=b)})])};h.destroy=function(){f.isSome(this._timerId)&&(clearInterval(this._timerId),this._timerId=null);this._unregisterWidget(this.view);this.view=null;f.isSome(this._animationController)&&(this._animationController.abort(),this._animationController=null);f.isSome(this._updateTimeSliderTask)&&(this._updateTimeSliderTask.abort(),this._updateTimeSliderTask=
null)};h.next=function(){this._step({forward:!0,allowRestart:!1})};h.play=function(){this._startAnimation()};h.previous=function(){this._step({forward:!1,allowRestart:!1})};h.stop=function(){this._stopAnimation()};h.updateWebDocument=function(a){if("esri.WebMap"===a.declaredClass){const b=new O({currentTimeExtent:this.timeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:B(this.stops)?this.stops.count:null,numThumbs:"time-window"===this.mode?2:1,stopDelay:this.playRate,stopInterval:z(this.stops)?
this.stops.interval:null,stops:F(this.stops)?this.stops.dates:null});a.widgets?a.widgets.timeSlider=b:a.widgets=new N({timeSlider:b})}};h.valuesToTimeExtent=function(a){if(f.isNone(a))return null;const b=0<a.length?new Date(a[0]):null;a=1<a.length?new Date(a[1]):null;switch(this.mode){case "time-window":return new k({start:b,end:a});case "instant":return new k({start:b,end:b});case "cumulative-from-start":return new k({start:null,end:b});case "cumulative-from-end":return new k({start:b,end:null});
default:return k.allTime}};h._animate=function(){var a=u._asyncToGenerator(function*(){try{yield Promise.all([y.after(this.playRate,null,f.isSome(this._animationController)&&this._animationController.signal),f.isSome(this.view)&&w.whenFalseOnce(this.view,"updating",f.isSome(this._animationController)&&this._animationController.signal)])}catch(b){y.isAbortError(b)||C.error(b);this._animationController=null;return}this._step({forward:!0,allowRestart:!1});f.isNone(this._animationController)||this._animate()});
return function(){return a.apply(this,arguments)}}();h._divideTimeExtentByCount=function(a,b=10){if(!a||!b)return[];const {start:d,end:c}=a;if(f.isNone(d)||f.isNone(c))return[];if(1E4<b)return this._divideTimeExtentByCount(a);a=[];const e=d.getTime(),q=c.getTime()-e;for(let r=0;r<=b;r++)a.push(new Date(e+r/b*q));return a};h._divideTimeExtentByInterval=function(a,b,d=1E4){if(!a||!b)return[];const {start:c,end:e}=a;if(f.isNone(c)||f.isNone(e))return[];const q=e.getTime()-c.getTime(),r=b.toMilliseconds();
if(q/r>d)return this._divideTimeExtentByCount(a);a=[];const {value:x,unit:p}=b;for(b=c;b.getTime()<=e.getTime();)a.push(new Date(b.getTime())),b=K.offsetDate(b,x,p);return a};h._getDefaultTimeExtent=function(){const {effectiveStops:a,mode:b}=this;if(f.isNone(a)||!b)return null;switch(b){case "time-window":return 1<a.length?new k({start:a[0],end:a[1]}):null;case "cumulative-from-start":return 0<a.length?new k({start:null,end:a[0]}):null;case "cumulative-from-end":return 0<a.length?new k({start:a[0],
end:null}):null;case "instant":return 0<a.length?new k({start:a[0],end:a[0]}):null;default:return null}};h._getFullTimeExtentFromWebDocument=function(){var a=u._asyncToGenerator(function*(b,d){var {fullTimeExtent:c}=b.widgets.timeSlider;if(c)return c;b=b.allLayers.filter(e=>M.isTemporalLayer(e)&&e.useViewTime);yield Promise.all(b.map(e=>e.load({signal:d})));c=b.map(e=>e.timeInfo);c.some(e=>e.hasLiveData)?(b=b.filter(e=>"feature"===(null==e?void 0:e.type)||"map-image"===(null==e?void 0:e.type)).map(e=>
e.fetchRecomputedExtents({signal:d})),b=(yield Promise.all(b)).map(e=>e.timeExtent)):b=c.map(e=>e.fullTimeExtent);return b.reduce((e,q)=>e.union(q))});return function(b,d){return a.apply(this,arguments)}}();h._getModeFromTimeSlider=function(a){var b;const d=null!=(b=a.numThumbs)?b:2;if(a=a.currentTimeExtent){const {start:c,end:e}=a;return f.isSome(c)&&f.isSome(e)&&c.getTime()===e.getTime()?"instant":2===d?"time-window":f.isNone(c)||0===c.getTime()?"cumulative-from-start":"cumulative-from-end"}return 2===
d?"time-window":"cumulative-from-start"};h._getStopsFromTimeSlider=function(a){const {numStops:b,stopInterval:d,stops:c}=a;return c?{dates:I.clone(c)}:d?{interval:d.clone()}:{count:null!=b?b:5}};h._getTimeExtentFromTimeSlider=function(a,b){if(a=a.currentTimeExtent){var d;const {start:c,end:e}=a;a=null!=(d=null!=c?c:e)?d:null;switch(b){case "time-window":return new k({start:c,end:e});case "cumulative-from-start":return new k({start:null,end:a});case "cumulative-from-end":return new k({start:a,end:null});
case "instant":return new k({start:a,end:a})}}return this._getDefaultTimeExtent()};h._registerWidget=function(a){f.isSome(a)&&(a.persistableViewModels.some(b=>b===this)||a.persistableViewModels.add(this))};h._startAnimation=function(){this._stopAnimation();this._animationController=y.createAbortController();this._step({forward:!0,allowRestart:!0});this._animate()};h._step=function(a){const {forward:b,allowRestart:d}=a;({effectiveStops:a}=this);if(!f.isNone(this.timeExtentValues)&&!f.isNone(a)){var c=
a.map(p=>p.getTime());a=this.timeExtentValues.map(p=>{var v=c.indexOf(p);if(-1!==v)return v;v=c.reduce((t,G)=>Math.abs(G-p)<Math.abs(t-p)?G:t);return c.indexOf(v)});var e=a.map(p=>p+=b?1:-1),q=e.some(p=>0>p||p>c.length-1),{loop:r,state:x}=this;if(q)if(r||d){const p=Math.min(...a),v=Math.max(...a);a=(b?a.map(t=>t-p):a.map(t=>t+(c.length-1-v))).map(t=>c[t]);this.timeExtent=this.valuesToTimeExtent(a)}else"playing"===x&&this.stop();else a=e.map(p=>c[p]),this.timeExtent=this.valuesToTimeExtent(a)}};h._stopAnimation=
function(){f.isSome(this._animationController)&&(this._animationController.abort(),this._animationController=null)};h._unregisterWidget=function(a){f.isSome(a)&&a.persistableViewModels.remove(this)};h._updateTimeSliderFromMap=function(){var a=u._asyncToGenerator(function*(b,d){var c;if(b&&"esri.WebMap"===b.declaredClass){yield b.load({signal:d});var e=null==b?void 0:null==(c=b.widgets)?void 0:c.timeSlider;if(e){c=this._getModeFromTimeSlider(e);this._isOverridden("mode")||(this.mode=c);this._isOverridden("fullTimeExtent")||
(this.fullTimeExtent=yield this._getFullTimeExtentFromWebDocument(b,d));if(!this._isOverridden("playRate")){var q;this.playRate=null!=(q=e.stopDelay)?q:2E3}this._isOverridden("stops")||(this.stops=this._getStopsFromTimeSlider(e));this._isOverridden("timeExtent")||(this.timeExtent=this._getTimeExtentFromTimeSlider(e,c));this._isOverridden("loop")||(this.loop=e.loop)}}});return function(b,d){return a.apply(this,arguments)}}();u._createClass(A,[{key:"effectiveStops",get:function(){const {fullTimeExtent:a,
stops:b}=this;if(F(b)){var {dates:d}=b;if(null==d||0===d.length)return null;d=d.sort((r,x)=>r.getTime()-x.getTime());if(f.isNone(a))return d;const {start:e,end:q}=a;return f.isNone(e)||f.isNone(q)?d:d.filter(r=>!(r.getTime()<e.getTime()||r.getTime()>q.getTime()))}if(B(b)){var c=null!=(d=b.timeExtent)?d:f.unwrap(a);return this._divideTimeExtentByCount(c,b.count)}return z(b)?(d=null!=(c=b.timeExtent)?c:f.unwrap(a),this._divideTimeExtentByInterval(d,b.interval)):[]}},{key:"fullTimeExtent",set:function(a){this._override("fullTimeExtent",
a)}},{key:"loop",set:function(a){this._override("loop",a)}},{key:"mode",set:function(a){this._override("mode",a)}},{key:"playRate",set:function(a){0>=a||36E5<a||("playing"===this.state&&this._startAnimation(),this._override("playRate",a))}},{key:"state",get:function(){return f.isNone(this.fullTimeExtent)||this._loadingWebDocument?"disabled":f.isSome(this._animationController)?"playing":"ready"}},{key:"stops",set:function(a){this._override("stops",a)}},{key:"timeExtent",set:function(a){this._override("timeExtent",
a)}},{key:"timeExtentValues",get:function(){const {mode:a,timeExtent:b}=this;if(f.isNone(b)||b.isAllTime||b.isEmpty)return null;const {start:d,end:c}=b;switch(a){case "cumulative-from-end":case "instant":return f.isSome(d)?[d.getTime()]:null;case "cumulative-from-start":return f.isSome(c)?[c.getTime()]:null;case "time-window":return f.isSome(d)&&f.isSome(c)?[d.getTime(),c.getTime()]:null}}},{key:"values",get:function(){D.deprecatedProperty(C,"values",{replacement:"timeExtent",version:"4.20"});const {mode:a,
timeExtent:b}=this;if(f.isNone(b))return null;if(b.isAllTime)return"time-window"===a?[null,null]:[null];if(b.isEmpty)return"time-window"===a?[void 0,void 0]:[void 0];const {start:d,end:c}=b;switch(a){case "time-window":return[d,c];case "instant":case "cumulative-from-end":return[d];case "cumulative-from-start":return[c]}},set:function(a){D.deprecatedProperty(C,"values",{replacement:"timeExtent",version:"4.20"});if(f.isNone(a))this.timeExtent=null;else{var b=a[0];if(f.isNone(b))this.timeExtent=new k({start:b,
end:b});else switch(a=1<a.length&&a[1],this.mode){case "time-window":this.timeExtent=new k({start:b,end:a});break;case "instant":this.timeExtent=new k({start:b,end:b});break;case "cumulative-from-end":this.timeExtent=new k({start:b,end:null});break;case "cumulative-from-start":this.timeExtent=new k({start:null,end:b})}}}}]);return A}(g.HandleOwner);m.__decorate([n.property()],g.prototype,"_animationController",void 0);m.__decorate([n.property()],g.prototype,"_loadingWebDocument",void 0);m.__decorate([n.property({readOnly:!0})],
g.prototype,"effectiveStops",null);m.__decorate([n.property({type:k,value:null})],g.prototype,"fullTimeExtent",null);m.__decorate([n.property({nonNullable:!0,value:!1})],g.prototype,"loop",null);m.__decorate([n.property({nonNullable:!0,value:"time-window"})],g.prototype,"mode",null);m.__decorate([n.property({nonNullable:!0,value:1E3})],g.prototype,"playRate",null);m.__decorate([n.property({readOnly:!0})],g.prototype,"state",null);m.__decorate([n.property({cast:l=>{if(f.isNone(l))return null;z(l)&&
(l.interval=E.ensureType(H,l.interval));if(z(l)||B(l))l.timeExtent=E.ensureType(k,l.timeExtent);return l},value:{count:10}})],g.prototype,"stops",null);m.__decorate([n.property({type:k,value:null})],g.prototype,"timeExtent",null);m.__decorate([n.property({readOnly:!0})],g.prototype,"timeExtentValues",null);m.__decorate([n.property({value:null})],g.prototype,"values",null);m.__decorate([n.property()],g.prototype,"view",void 0);m.__decorate([n.property()],g.prototype,"next",null);m.__decorate([n.property()],
g.prototype,"play",null);m.__decorate([n.property()],g.prototype,"previous",null);m.__decorate([n.property()],g.prototype,"stop",null);m.__decorate([n.property()],g.prototype,"updateWebDocument",null);return g=m.__decorate([L.subclass("esri.widgets.TimeSlider.TimeSliderViewModel")],g)});