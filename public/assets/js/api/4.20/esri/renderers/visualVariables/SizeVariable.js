// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/Error ../../core/jsonMap ../../core/Logger ../../core/screenUtils ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/decorators/cast ../../core/accessorSupport/decorators/reader ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ./VisualVariable ./support/SizeStop ./support/SizeVariableLegendOptions ./support/sizeVariableUtils ./support/visualVariableUtils".split(" "),
function(u,c,z,v,n,A,d,H,w,q,B,C,D,E,F,m,G){function x(e){if(null!=e){if("string"===typeof e||"number"===typeof e)return A.toPt(e);if("size"===e.type){if(m.isSizeVariable(e))return e;e={...e};delete e.type;return new b(e)}}}function y(e,l,g){if("object"!==typeof e)return e;l=new b;l.read(e,g);return l}var r;const p=n.getLogger("esri.renderers.visualVariables.SizeVariable");n=new v.JSONMap({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"});const t=new v.JSONMap({unknown:"unknown",
inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"});let b=r=function(e){function l(a){a=e.call(this,a)||this;a.axis=null;a.legendOptions=null;a.normalizationField=null;a.scaleBy=null;a.target=null;a.type="size";a.useSymbolValue=null;a.valueExpression=null;a.valueRepresentation=null;a.valueUnit=null;return a}u._inheritsLoose(l,
e);var g=l.prototype;g.castMaxSize=function(a){return x(a)};g.readMaxSize=function(a,f,k){return y(a,f,k)};g.castMinSize=function(a){return x(a)};g.readMinSize=function(a,f,k){return y(a,f,k)};g.readValueExpression=function(a,f){return a||f.expression&&"$view.scale"};g.writeValueExpressionWebScene=function(a,f,k,h){"$view.scale"===a?h&&h.messages&&(a=this.index,h.messages.push(new z("property:unsupported",this.type+"VisualVariable.valueExpression \x3d '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",
{instance:this,propertyName:("string"===typeof a?a:`visualVariables[${a}]`)+".valueExpression",context:h}))):f[k]=a};g.readValueUnit=function(a){return a?t.read(a):null};g.clone=function(){return new r({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:m.isSizeVariable(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:m.isSizeVariable(this.minSize)?this.minSize.clone():
this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(a=>a.clone()),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})};g.flipSizes=function(){if("clamped-linear"===this.transformationType){const {minSize:a,maxSize:f}=this;this.minSize=f;this.maxSize=a;return this}if("stops"===this.transformationType){const a=this.stops,f=a.map(h=>
h.size).reverse(),k=a.length;for(let h=0;h<k;h++)a[h].size=f[h]}return this};g.getAttributeHash=function(){return`${e.prototype.getAttributeHash.call(this)}-${this.target}-${this.normalizationField}`};g._interpolateData=function(){return this.stops&&this.stops.map(a=>a.value||0)};u._createClass(l,[{key:"cache",get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:G.viewScaleRE.test(this.valueExpression)}}},{key:"expression",set:function(a){p.warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'.");
"view.scale"===a?(this.valueExpression="$view.scale",this._set("expression",a)):this._set("expression",null)}},{key:"index",set:function(a){m.isSizeVariable(this.maxSize)&&(this.maxSize.index=`visualVariables[${a}].maxSize`);m.isSizeVariable(this.minSize)&&(this.minSize.index=`visualVariables[${a}].minSize`);this._set("index",a)}},{key:"inputValueType",get:function(){return m.getInputValueType(this)}},{key:"maxDataValue",set:function(a){a&&this.stops&&(p.warn("cannot set maxDataValue when stops is not null."),
a=null);this._set("maxDataValue",a)}},{key:"maxSize",set:function(a){a&&this.stops&&(p.warn("cannot set maxSize when stops is not null."),a=null);this._set("maxSize",a)}},{key:"minDataValue",set:function(a){a&&this.stops&&(p.warn("cannot set minDataValue when stops is not null."),a=null);this._set("minDataValue",a)}},{key:"minSize",set:function(a){a&&this.stops&&(p.warn("cannot set minSize when stops is not null."),a=null);this._set("minSize",a)}},{key:"arcadeRequired",get:function(){return this.valueExpression?
!0:this.minSize&&"object"===typeof this.minSize&&this.minSize.arcadeRequired||this.maxSize&&"object"===typeof this.maxSize&&this.maxSize.arcadeRequired}},{key:"stops",set:function(a){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?a&&Array.isArray(a)&&(a=a.filter(f=>!!f),a.sort((f,k)=>f.value-k.value)):a&&(p.warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),a=null);this._set("stops",a)}},{key:"transformationType",
get:function(){return m.getTransformationType(this,this.inputValueType)}}]);return l}(D);c.__decorate([d.property({readOnly:!0})],b.prototype,"cache",null);c.__decorate([d.property({type:n.apiValues,json:{type:n.jsonValues,origins:{"web-map":{read:!1}},read:n.read,write:n.write}})],b.prototype,"axis",void 0);c.__decorate([d.property({type:String,value:null,json:{read:!1}})],b.prototype,"expression",null);c.__decorate([d.property()],b.prototype,"index",null);c.__decorate([d.property({type:String,readOnly:!0})],
b.prototype,"inputValueType",null);c.__decorate([d.property({type:F,json:{write:!0}})],b.prototype,"legendOptions",void 0);c.__decorate([d.property({type:Number,value:null,json:{write:!0}})],b.prototype,"maxDataValue",null);c.__decorate([d.property({type:Number,value:null,json:{write:!0}})],b.prototype,"maxSize",null);c.__decorate([w.cast("maxSize")],b.prototype,"castMaxSize",null);c.__decorate([q.reader("maxSize")],b.prototype,"readMaxSize",null);c.__decorate([d.property({type:Number,value:null,
json:{write:!0}})],b.prototype,"minDataValue",null);c.__decorate([d.property({type:Number,value:null,json:{write:!0}})],b.prototype,"minSize",null);c.__decorate([w.cast("minSize")],b.prototype,"castMinSize",null);c.__decorate([q.reader("minSize")],b.prototype,"readMinSize",null);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"normalizationField",void 0);c.__decorate([d.property({readOnly:!0})],b.prototype,"arcadeRequired",null);c.__decorate([d.property({type:String})],b.prototype,
"scaleBy",void 0);c.__decorate([d.property({type:[E],value:null,json:{write:!0}})],b.prototype,"stops",null);c.__decorate([d.property({type:["outline"],json:{write:!0}})],b.prototype,"target",void 0);c.__decorate([d.property({type:String,readOnly:!0})],b.prototype,"transformationType",null);c.__decorate([d.property({type:["size"],json:{type:["sizeInfo"]}})],b.prototype,"type",void 0);c.__decorate([d.property({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],b.prototype,"useSymbolValue",
void 0);c.__decorate([d.property({type:String,json:{write:!0}})],b.prototype,"valueExpression",void 0);c.__decorate([q.reader("valueExpression",["valueExpression","expression"])],b.prototype,"readValueExpression",null);c.__decorate([C.writer("web-scene","valueExpression")],b.prototype,"writeValueExpressionWebScene",null);c.__decorate([d.property({type:["radius","diameter","area","width","distance"],json:{write:!0}})],b.prototype,"valueRepresentation",void 0);c.__decorate([d.property({type:t.apiValues,
json:{write:t.write,origins:{"web-map":{read:!1},"web-scene":{write:!0}}}})],b.prototype,"valueUnit",void 0);c.__decorate([q.reader("valueUnit")],b.prototype,"readValueUnit",null);return b=r=c.__decorate([B.subclass("esri.renderers.visualVariables.SizeVariable")],b)});