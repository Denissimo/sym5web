// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/lang ../core/accessorSupport/decorators/property ../core/accessorSupport/ensureType ../core/has ../core/Logger ../core/jsonMap ../core/accessorSupport/decorators/subclass ../core/accessorSupport/decorators/writer ./Extent ./Geometry ./Point ./SpatialReference ./support/centroid ./support/contains ./support/coordsUtils ./support/extentUtils ./support/intersectsBase ./support/webMercatorUtils ./support/zmUtils".split(" "),function(t,
k,u,m,h,I,J,K,y,z,A,B,l,C,D,E,F,G,H,v,w){var q;h=q=function(x){function n(...a){a=x.call(this,...a)||this;a.rings=[];a.type="polygon";return a}t._inheritsLoose(n,x);n.fromExtent=function(a){var b=a.clone().normalize();a=a.spatialReference;let c=!1,f=!1;b.map(d=>{d.hasZ&&(c=!0);d.hasM&&(f=!0)});b={rings:b.map(function(d){const e=[[d.xmin,d.ymin],[d.xmin,d.ymax],[d.xmax,d.ymax],[d.xmax,d.ymin],[d.xmin,d.ymin]];if(c&&d.hasZ){var p=d.zmin+.5*(d.zmax-d.zmin);for(let r=0;r<e.length;r++)e[r].push(p)}if(f&&
d.hasM)for(d=d.mmin+.5*(d.mmax-d.mmin),p=0;p<e.length;p++)e[p].push(d);return e}),spatialReference:a};c&&(b.hasZ=!0);f&&(b.hasM=!0);return new q(b)};var g=n.prototype;g.normalizeCtorArgs=function(a,b){let c=null,f,d,e=null;a&&!Array.isArray(a)?(c=a.rings?a.rings:null,b||(a.spatialReference?b=a.spatialReference:a.rings||(b=a)),f=a.hasZ,d=a.hasM):c=a;c=c||[];b=b||C.WGS84;c.length&&c[0]&&null!=c[0][0]&&"number"===typeof c[0][0]&&(c=[c]);if(e=c[0]&&c[0][0])void 0===f&&void 0===d?(f=2<e.length,d=3<e.length):
void 0===f?f=d?3<e.length:2<e.length:void 0===d&&(d=f?3<e.length:2<e.length);return{rings:c,spatialReference:b,hasZ:f,hasM:d}};g.writeRings=function(a,b){b.rings=u.clone(this.rings)};g.addRing=function(a){if(a){var b=this.rings,c=b.length;if(Array.isArray(a[0]))b[c]=a.concat();else{const f=[];for(let d=0,e=a.length;d<e;d++)f[d]=a[d].toArray();b[c]=f}this.notifyChange("rings");return this}};g.clone=function(){const a=new q;a.spatialReference=this.spatialReference;a.rings=u.clone(this.rings);a.hasZ=
this.hasZ;a.hasM=this.hasM;return a};g.contains=function(a){if(!a)return!1;v.canProject(a,this.spatialReference)&&(a=v.project(a,this.spatialReference));return E.polygonContainsPoint(this,a)};g.isClockwise=function(a){a=Array.isArray(a[0])?a:a.map(b=>this.hasZ?this.hasM?[b.x,b.y,b.z,b.m]:[b.x,b.y,b.z]:[b.x,b.y]);return F.isClockwise(a,this.hasM,this.hasZ)};g.getPoint=function(a,b){if(!this._validateInputs(a,b))return null;a=this.rings[a][b];b=this.hasZ;const c=this.hasM;return b&&!c?new l(a[0],a[1],
a[2],void 0,this.spatialReference):c&&!b?new l(a[0],a[1],void 0,a[2],this.spatialReference):b&&c?new l(a[0],a[1],a[2],a[3],this.spatialReference):new l(a[0],a[1],this.spatialReference)};g.insertPoint=function(a,b,c){if(!this._validateInputs(a,b,!0))return this;w.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a].splice(b,0,c);this.notifyChange("rings");return this};g.removePoint=function(a,b){if(!this._validateInputs(a,b))return null;a=new l(this.rings[a].splice(b,1)[0],
this.spatialReference);this.notifyChange("rings");return a};g.removeRing=function(a){if(!this._validateInputs(a,null))return null;a=this.rings.splice(a,1)[0];const b=this.spatialReference;a=a.map(c=>new l(c,b));this.notifyChange("rings");return a};g.setPoint=function(a,b,c){if(!this._validateInputs(a,b))return this;w.updateSupportFromPoint(this,c);Array.isArray(c)||(c=c.toArray());this.rings[a][b]=c;this.notifyChange("rings");return this};g._validateInputs=function(a,b,c=!1){return null==a||0>a||
a>=this.rings.length||null!=b&&(a=this.rings[a],c&&(0>b||b>a.length)||!c&&(0>b||b>=a.length))?!1:!0};g.toJSON=function(a){return this.write(null,a)};t._createClass(n,[{key:"cache",get:function(){this.commitProperty("rings");this.commitProperty("hasZ");this.commitProperty("hasM");this.commitProperty("spatialReference");return{}}},{key:"centroid",get:function(){const a=D.polygonCentroid(this);if(!a||isNaN(a[0])||isNaN(a[1])||this.hasZ&&isNaN(a[2]))return null;const b=new l;b.x=a[0];b.y=a[1];b.spatialReference=
this.spatialReference;this.hasZ&&(b.z=a[2]);return b}},{key:"extent",get:function(){const {spatialReference:a}=this;var b=G.getPolygonExtent(this);if(!b)return null;b=new A(b);b.spatialReference=a;return b}},{key:"isSelfIntersecting",get:function(){return H.isSelfIntersecting(this.rings)}}]);return n}(B);k.__decorate([m.property({readOnly:!0})],h.prototype,"cache",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"centroid",null);k.__decorate([m.property({readOnly:!0})],h.prototype,"extent",
null);k.__decorate([m.property({readOnly:!0})],h.prototype,"isSelfIntersecting",null);k.__decorate([m.property({type:[[[Number]]],json:{write:{isRequired:!0}}})],h.prototype,"rings",void 0);k.__decorate([z.writer("rings")],h.prototype,"writeRings",null);h=q=k.__decorate([y.subclass("esri.geometry.Polygon")],h);h.prototype.toJSON.isDefaultToJSON=!0;return h});