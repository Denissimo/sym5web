// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../chunks/_rollupPluginBabelHelpers ../../../../request ../../../../core/asyncUtils ../../../../core/Error ../../../../core/Logger ../../../../core/maybe ../../../../core/promiseUtils ../../../../core/Version ../../../../chunks/vec3f64 ../../../../geometry/support/aaBoundingBox ../../../../support/requestImageUtils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial".split(" "),function(v,w,N,G,O,P,t,H,I,J,z,Q,R,S,T){function A(){A=
w._asyncToGenerator(function*(a,b){a=yield U(a,b);b=yield K(a.textureDefinitions,b);return{resource:a,textures:b}});return A.apply(this,arguments)}function U(a,b){return B.apply(this,arguments)}function B(){B=w._asyncToGenerator(function*(a,b){const e=t.isSome(b)&&b.streamDataRequester;if(e)return V(a,e,b);a=yield G.result(N(a,t.unwrap(b)));if(!0===a.ok)return a.value.data;H.throwIfAbortError(a.error);L(a.error)});return B.apply(this,arguments)}function V(a,b,e){return C.apply(this,arguments)}function C(){C=
w._asyncToGenerator(function*(a,b,e){a=yield G.result(b.request(a,"json",e));if(!0===a.ok)return a.value;H.throwIfAbortError(a.error);L(a.error.details.url)});return C.apply(this,arguments)}function L(a){throw new O("",`Request for object resource failed: ${a}`);}function W(a){const b=z.empty();a.forEach(e=>{e=e.boundingInfo;t.isSome(e)&&(z.expandWithVec3(b,e.getBBMin()),z.expandWithVec3(b,e.getBBMax()))});return b}function K(a,b){return D.apply(this,arguments)}function D(){D=w._asyncToGenerator(function*(a,
b){const e=[];for(const l in a){const q=a[l];var m=q.images[0].data;if(!m){n.warn("Externally referenced texture data is not yet supported");continue}m=q.encoding+";base64,"+m;const r="/textureDefinitions/"+l,u={noUnpackFlip:!0,wrap:{s:10497,t:10497},preMultiplyAlpha:!0};m=t.isSome(b)&&b.disableTextures?Promise.resolve(null):Q.requestImage(m,b);e.push(m.then(x=>({refId:r,image:x,params:u,alphaChannelUsage:"rgba"===q.channels?q.alphaChannelUsage||"transparency":"none"})))}a=yield Promise.all(e);b=
{};for(const l of a)b[l.refId]=l;return b});return D.apply(this,arguments)}function X(a){switch(a){case "mask":return 2;case "maskAndTransparency":return 3;case "none":return 1;case "transparency":return 0;default:return 0}}const n=P.getLogger("esri.views.3d.layers.graphics.objectResourceUtils"),Y=new I.Version(1,2,"wosr");v.createTextureResources=K;v.load=function(a,b){return A.apply(this,arguments)};v.processLoadResult=function(a,b){const e=[],m=[],l=[],q=[],r=a.resource;var u=I.Version.parse(r.version||
"1.0","wosr");Y.validate(u);u=r.model.name;const x=r.model.geometries,Z=r.materialDefinitions;a=a.textures;let M=0;const E=new Map;for(let F=0;F<x.length;F++){var f=x[F],p=f,d=p.params,g=d.topology;var c=!0;d.vertexAttributes||(n.warn("Geometry must specify vertex attributes"),c=!1);switch(d.topology){case "PerAttributeArray":break;case "Indexed":case null:case void 0:g=d.faces;if(!g)n.warn("Indexed geometries must specify faces"),c=!1;else if(d.vertexAttributes)for(const k in d.vertexAttributes)(d=
g[k])&&d.values?(null!=d.valueType&&"UInt32"!==d.valueType&&(n.warn(`Unsupported indexed geometry indices type '${d.valueType}', only UInt32 is currently supported`),c=!1),null!=d.valuesPerElement&&1!==d.valuesPerElement&&(n.warn(`Unsupported indexed geometry values per element '${d.valuesPerElement}', only 1 is currently supported`),c=!1)):(n.warn(`Indexed geometry does not specify face indices for '${k}' attribute`),c=!1);break;default:n.warn(`Unsupported topology '${g}'`),c=!1}p.params.material||
(n.warn("Geometry requires material"),c=!1);p=p.params.vertexAttributes;for(const k in p)p[k].values||(n.warn("Geometries with externally defined attributes are not yet supported"),c=!1);if(c){c=f.params;c={id:1,material:c.material,texture:c.texture,region:c.texture};d=f.params.vertexAttributes;p=[];for(const k in d)g=d[k],p.push([k,{data:g.values,size:g.valuesPerElement,exclusive:!0}]);d=[];if("PerAttributeArray"!==f.params.topology){f=f.params.faces;for(const k in f)d.push([k,new Uint32Array(f[k].values)])}if((f=
a&&a[c.texture])&&!E.has(c.texture)){const {image:k,params:aa}=f;g=new S.Texture(k,aa);q.push(g);E.set(c.texture,g)}g=(g=E.get(c.texture))?g.id:void 0;var h=l[c.material]?l[c.material][c.texture]:null;if(!h){h=c.material.substring(c.material.lastIndexOf("/")+1);h=Z[h].params;1===h.transparency&&(h.transparency=0);var y=f&&f.alphaChannelUsage;y=0<h.transparency||"transparency"===y||"maskAndTransparency"===y;f={ambient:J.fromArray(h.diffuse),diffuse:J.fromArray(h.diffuse),opacity:1-(h.transparency||
0),transparent:y,textureAlphaMode:f?X(f.alphaChannelUsage):void 0,textureAlphaCutoff:.33,textureId:g,initTextureTransparent:!0,doubleSided:!0,cullFace:0,colorMixMode:h.externalColorMixMode||"tint",textureAlphaPremultiplied:!0};t.isSome(b)&&b.materialParamsMixin&&Object.assign(f,b.materialParamsMixin);h=new T.DefaultMaterial(f);l[c.material]||(l[c.material]={});l[c.material][c.texture]=h}m.push(h);c=new R.Geometry(p,d);M+=d.position?d.position.length:0;e.push(c)}}return{name:u,stageResources:{textures:q,
materials:m,geometries:e},pivotOffset:r.model.pivotOffset,boundingBox:W(e),numberOfVertices:M,lodThreshold:null}};Object.defineProperty(v,"__esModule",{value:!0})});