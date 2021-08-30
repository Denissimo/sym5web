// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../geometry ../../core/JSONSupport ../../core/lang ../../core/Warning ../../core/accessorSupport/decorators/property ../../core/accessorSupport/ensureType ../../core/has ../../core/Logger ../../core/jsonMap ../../core/accessorSupport/decorators/subclass ../../core/accessorSupport/decorators/writer ../../core/accessorSupport/decorators/persistable ../../geometry/projection ../../geometry/Polygon".split(" "),function(t,d,c,u,v,
w,k,z,A,B,C,x,y,l,m,n){var e;c=e=function(p){function f(b){b=p.call(this,b)||this;b.geometry=null;b.type="clip";return b}t._inheritsLoose(f,p);var q=f.prototype;q.writeGeometry=function(b,g,h,a){if(a.layer&&a.layer.spatialReference&&!a.layer.spatialReference.equals(this.geometry.spatialReference)){if(!m.canProjectWithoutEngine(b.spatialReference,a.layer.spatialReference)){a&&a.messages&&a.messages.push(new w("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",
{modification:this,spatialReference:a.layer.spatialReference,context:a}));return}const r=new n;m.projectPolygon(b,r,a.layer.spatialReference);g[h]=r.toJSON(a)}else g[h]=b.toJSON(a);delete g[h].spatialReference};q.clone=function(){return new e({geometry:v.clone(this.geometry),type:this.type})};return f}(u.JSONSupport);d.__decorate([k.property({type:n}),l.persistable()],c.prototype,"geometry",void 0);d.__decorate([y.writer(["web-scene","portal-item"],"geometry")],c.prototype,"writeGeometry",null);d.__decorate([k.property({type:["clip",
"mask","replace"],nonNullable:!0}),l.persistable()],c.prototype,"type",void 0);return c=e=d.__decorate([x.subclass("esri.layers.support.SceneModification")],c)});