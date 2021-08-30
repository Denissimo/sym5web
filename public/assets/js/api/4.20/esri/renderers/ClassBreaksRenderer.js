// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../symbols ../core/jsonMap ../core/lang ../core/Logger ../core/maybe ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/cast ../core/has ../core/accessorSupport/decorators/enumeration ../core/accessorSupport/decorators/reader ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ../core/accessorSupport/ensureType ../layers/support/fieldUtils ./Renderer ./mixins/VisualVariablesMixin ./support/ClassBreakInfo ./support/commonProperties ./support/LegendOptions ../support/arcadeOnDemand".split(" "),
function(n,g,C,p,r,D,m,k,E,M,F,G,H,I,x,y,e,J,t,A,K,B){var z;const u=D.getLogger("esri.renderers.ClassBreaksRenderer");p=new p.JSONMap({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});const L=x.ensureType(t);e=z=function(v){function w(a){a=v.call(this,a)||this;a._compiledValueExpression={valueExpression:null,compiledFunction:null};a.backgroundFillSymbol=null;a.classBreakInfos=null;a.defaultLabel=null;a.defaultSymbol=null;a.field=null;a.isMaxInclusive=
!0;a.legendOptions=null;a.normalizationField=null;a.normalizationTotal=null;a.type="class-breaks";a.valueExpression=null;a.valueExpressionTitle=null;a._set("classBreakInfos",[]);return a}n._inheritsLoose(w,v);var f=w.prototype;f.readClassBreakInfos=function(a,b,c){if(Array.isArray(a)){var d=b.minValue;return a.map(h=>{const l=new t;l.read(h,c);null==l.minValue&&(l.minValue=d);null==l.maxValue&&(l.maxValue=l.minValue);d=l.maxValue;return l})}};f.writeClassBreakInfos=function(a,b,c,d){a=a.map(h=>h.write({},
d));this._areClassBreaksConsecutive()&&a.forEach(h=>delete h.classMinValue);b[c]=a};f.castField=function(a){return null==a?a:"function"===typeof a?(u.error(".field: field must be a string value"),null):x.ensureString(a)};f.addClassBreakInfo=function(a,b,c){let d=null;d="number"===typeof a?new t({minValue:a,maxValue:b,symbol:C.ensureType(c)}):L(r.clone(a));this.classBreakInfos.push(d);1===this.classBreakInfos.length&&this.notifyChange("minValue")};f.removeClassBreakInfo=function(a,b){const c=this.classBreakInfos.length;
for(let d=0;d<c;d++){const h=[this.classBreakInfos[d].minValue,this.classBreakInfos[d].maxValue];if(h[0]===a&&h[1]===b){this.classBreakInfos.splice(d,1);break}}};f.getBreakIndex=function(a,b){this.valueExpression&&(m.isNone(b)||m.isNone(b.arcade))&&u.warn("");return this.valueExpression?this._getBreakIndexForExpression(a,b):this._getBreakIndexForField(a)};f.getClassBreakInfo=function(){var a=n._asyncToGenerator(function*(b,c){let d=c;this.valueExpression&&(m.isNone(c)||m.isNone(c.arcade))&&(d={...d,
arcade:yield B.loadArcade()});b=this.getBreakIndex(b,d);return-1!==b?this.classBreakInfos[b]:null});return function(b,c){return a.apply(this,arguments)}}();f.getSymbol=function(a,b){if(this.valueExpression&&(m.isNone(b)||m.isNone(b.arcade)))u.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");else return a=this.getBreakIndex(a,b),-1<a?this.classBreakInfos[a].symbol:this.defaultSymbol};f.getSymbolAsync=function(){var a=n._asyncToGenerator(function*(b,c){let d=c;if(this.valueExpression&&
(m.isNone(c)||m.isNone(c.arcade))){c=yield B.loadArcade();const {arcadeUtils:h}=c;h.hasGeometryOperations(this.valueExpression)&&(yield h.enableGeometryOperations());d={...d,arcade:c}}b=this.getBreakIndex(b,d);return-1<b?this.classBreakInfos[b].symbol:this.defaultSymbol});return function(b,c){return a.apply(this,arguments)}}();f.getSymbols=function(){const a=[];this.classBreakInfos.forEach(b=>{b.symbol&&a.push(b.symbol)});this.defaultSymbol&&a.push(this.defaultSymbol);return a};f.getAttributeHash=
function(){return this.visualVariables&&this.visualVariables.reduce((a,b)=>a+b.getAttributeHash(),"")};f.getMeshHash=function(){const a=JSON.stringify(this.backgroundFillSymbol),b=JSON.stringify(this.defaultSymbol),c=`${this.normalizationField}.${this.normalizationType}.${this.normalizationTotal}`,d=this.classBreakInfos.reduce((h,l)=>h+l.getMeshHash(),"");return`${a}.${b}.${d}.${c}.${this.field}.${this.valueExpression}`};f.clone=function(){return new z({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&
this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:r.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:r.clone(this.visualVariables),legendOptions:r.clone(this.legendOptions),
authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};f.collectRequiredFields=function(){var a=n._asyncToGenerator(function*(b,c){b=[this.collectVVRequiredFields(b,c),this.collectSymbolFields(b,c)];yield Promise.all(b)});return function(b,c){return a.apply(this,arguments)}}();f.collectSymbolFields=function(){var a=n._asyncToGenerator(function*(b,c){const d=[...this.getSymbols().map(h=>h.collectRequiredFields(b,c)),y.collectArcadeFieldNames(b,c,this.valueExpression)];y.collectField(b,c,this.field);
y.collectField(b,c,this.normalizationField);yield Promise.all(d)});return function(b,c){return a.apply(this,arguments)}}();f._getBreakIndexForExpression=function(a,b){const {viewingMode:c,scale:d,spatialReference:h,arcade:l}=m.unwrapOr(b,{});var q=this._compiledValueExpression.valueExpression===this.valueExpression?this._compiledValueExpression.compiledFunction:null;b=m.unwrap(l).arcadeUtils;q||(q=b.createSyntaxTree(this.valueExpression),q=b.createFunction(q),this._compiledValueExpression.compiledFunction=
q);this._compiledValueExpression.valueExpression=this.valueExpression;a=b.executeFunction(q,b.createExecContext(a,b.getViewInfo({viewingMode:c,scale:d,spatialReference:h})));return this._getBreakIndexfromInfos(a)};f._getBreakIndexForField=function(a){var b=a.attributes;a=this.normalizationType;let c=parseFloat(b[this.field]);if(a){const d=this.normalizationTotal;b=parseFloat(b[this.normalizationField]);if("log"===a)c=Math.log(c)*Math.LOG10E;else if("percent-of-total"===a&&!isNaN(d))c=c/d*100;else if("field"===
a&&!isNaN(b)){if(isNaN(c)||isNaN(b))return-1;c/=b}}return this._getBreakIndexfromInfos(c)};f._getBreakIndexfromInfos=function(a){const b=this.isMaxInclusive;if(null!=a&&"number"===typeof a&&!isNaN(a))for(let c=0;c<this.classBreakInfos.length;c++){const d=[this.classBreakInfos[c].minValue,this.classBreakInfos[c].maxValue];if(d[0]<=a&&(b?a<=d[1]:a<d[1]))return c}return-1};f._areClassBreaksConsecutive=function(){const a=this.classBreakInfos,b=a.length;for(let c=1;c<b;c++)if(a[c-1].maxValue!==a[c].minValue)return!1;
return!0};n._createClass(w,[{key:"minValue",get:function(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0}},{key:"normalizationType",get:function(){let a=this._get("normalizationType");const b=!!this.normalizationField,c=null!=this.normalizationTotal;if(b||c)a=b&&"field"||c&&"percent-of-total"||null,b&&c&&u.warn("warning: both normalizationField and normalizationTotal are set!");else if("field"===a||"percent-of-total"===a)a=null;return a},set:function(a){this._set("normalizationType",
a)}},{key:"arcadeRequired",get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression}}]);return w}(J.VisualVariablesMixin(e));g.__decorate([k.property(A.rendererBackgroundFillSymbolProperty)],e.prototype,"backgroundFillSymbol",void 0);g.__decorate([k.property({type:[t]})],e.prototype,"classBreakInfos",void 0);g.__decorate([G.reader("classBreakInfos")],e.prototype,"readClassBreakInfos",null);g.__decorate([I.writer("classBreakInfos")],e.prototype,"writeClassBreakInfos",null);
g.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"defaultLabel",void 0);g.__decorate([k.property(A.rendererSymbolProperty)],e.prototype,"defaultSymbol",void 0);g.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"field",void 0);g.__decorate([E.cast("field")],e.prototype,"castField",null);g.__decorate([k.property({type:Boolean})],e.prototype,"isMaxInclusive",void 0);g.__decorate([k.property({type:K["default"],json:{write:!0}})],e.prototype,"legendOptions",void 0);
g.__decorate([k.property({type:Number,readOnly:!0,value:null,json:{read:!1,write:{overridePolicy(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],e.prototype,"minValue",null);g.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"normalizationField",void 0);g.__decorate([k.property({type:Number,cast:v=>x.ensureNumber(v),json:{write:!0}})],e.prototype,"normalizationTotal",void 0);g.__decorate([k.property({type:p.apiValues,value:null,
json:{type:p.jsonValues,read:p.read,write:p.write}})],e.prototype,"normalizationType",null);g.__decorate([F.enumeration({classBreaks:"class-breaks"})],e.prototype,"type",void 0);g.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"valueExpression",void 0);g.__decorate([k.property({type:String,json:{write:!0}})],e.prototype,"valueExpressionTitle",void 0);return e=z=g.__decorate([H.subclass("esri.renderers.ClassBreaksRenderer")],e)});