// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../core/deprecate ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators/property ../../core/has ../../core/accessorSupport/ensureType ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../geometry/Point ./FeatureSet".split(" "),function(h,b,a,k,e,d,p,q,r,l,m,n){e=e.getLogger("esri.rest.support.ImageServiceIdentifyResult");a.deprecatedModule(e,"esri/rest/support/ImageServiceIdentifyResult",
{replacement:"esri/rest/support/ImageIdentifyResult"});a=function(f){function g(){var c=f.apply(this,arguments)||this;c.catalogItemVisibilities=null;c.catalogItems=null;c.location=null;c.name=null;c.objectId=null;c.processedValues=null;c.properties=null;c.value=null;return c}h._inheritsLoose(g,f);return g}(k.JSONSupport);b.__decorate([d.property({json:{write:!0}})],a.prototype,"catalogItemVisibilities",void 0);b.__decorate([d.property({type:n,json:{write:!0}})],a.prototype,"catalogItems",void 0);
b.__decorate([d.property({type:m,json:{write:!0}})],a.prototype,"location",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"objectId",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"processedValues",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"properties",void 0);b.__decorate([d.property({json:{write:!0}})],a.prototype,"value",void 0);return a=b.__decorate([l.subclass("esri.rest.support.ImageServiceIdentifyResult")],
a)});