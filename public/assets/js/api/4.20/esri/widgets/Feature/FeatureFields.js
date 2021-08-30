// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/watchUtils ../../core/accessorSupport/decorators/aliasOf ../../core/has ../../core/accessorSupport/ensureType ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/property ../../core/accessorSupport/decorators/subclass ../Widget ./FeatureFields/FeatureFieldsViewModel ./support/FeatureElementInfo ../support/uriUtils ../support/widgetUtils ../support/decorators/messageBundle ../support/jsxFactory".split(" "),
function(r,d,t,k,b,z,A,B,l,u,v,n,w,x,C,p,g){b=function(q){function m(a,e){a=q.call(this,a,e)||this;a._featureElementInfo=null;a.attributes=null;a.description=null;a.expressionInfos=null;a.fieldInfos=null;a.title=null;a.viewModel=new n;a.messages=null;a.messagesURIUtils=null;return a}r._inheritsLoose(m,q);var f=m.prototype;f.initialize=function(){this._featureElementInfo=new w;t.init(this,["viewModel.description","viewModel.title"],()=>this._setupFeatureElementInfo())};f.destroy=function(){this._featureElementInfo.destroy()};
f.renderFieldInfo=function(a,e){var {attributes:c}=this.viewModel;const h=a.fieldName,y=a.label||h;c=c?null==c[h]?"":c[h]:"";a=!(!a.format||!a.format.dateFormat);c="number"!==typeof c||a?x.autoLink(this.messagesURIUtils,c):this._forceLTR(c);a={["esri-feature-fields__field-data--date"]:a};return g.tsx("tr",{key:`fields-element-info-row-${h}-${e}`},g.tsx("th",{key:`fields-element-info-row-header-${h}-${e}`,class:"esri-feature-fields__field-header",innerHTML:y}),g.tsx("td",{key:`fields-element-info-row-data-${h}-${e}`,
class:this.classes("esri-feature-fields__field-data",a),innerHTML:c}))};f.renderFields=function(){const {formattedFieldInfos:a}=this.viewModel;return a.length?g.tsx("table",{class:"esri-widget__table",summary:this.messages.fieldsSummary},g.tsx("tbody",null,a.map((e,c)=>this.renderFieldInfo(e,c)))):null};f.render=function(){var a;return g.tsx("div",{class:"esri-feature-fields"},null==(a=this._featureElementInfo)?void 0:a.render(),this.renderFields())};f._setupFeatureElementInfo=function(){const {description:a,
title:e}=this;this._featureElementInfo.set({description:a,title:e})};f._forceLTR=function(a){return`&lrm;${a}`};return m}(v);d.__decorate([k.aliasOf("viewModel.attributes")],b.prototype,"attributes",void 0);d.__decorate([k.aliasOf("viewModel.description")],b.prototype,"description",void 0);d.__decorate([k.aliasOf("viewModel.expressionInfos")],b.prototype,"expressionInfos",void 0);d.__decorate([k.aliasOf("viewModel.fieldInfos")],b.prototype,"fieldInfos",void 0);d.__decorate([k.aliasOf("viewModel.title")],
b.prototype,"title",void 0);d.__decorate([l.property({type:n})],b.prototype,"viewModel",void 0);d.__decorate([l.property(),p.messageBundle("esri/widgets/Feature/t9n/Feature")],b.prototype,"messages",void 0);d.__decorate([l.property(),p.messageBundle("esri/widgets/support/t9n/uriUtils")],b.prototype,"messagesURIUtils",void 0);return b=d.__decorate([u.subclass("esri.widgets.Feature.FeatureFields")],b)});