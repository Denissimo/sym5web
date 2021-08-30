// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Logger ../../../core/maybe ../../../chunks/mat3 ../../../chunks/mat3f64 ../../../chunks/mat4 ../../../chunks/mat4f64 ../../../chunks/vec3 ../../../chunks/vec3f64 ../../projection ../../projectionEllipsoid ../axisAngleDegrees ./geographicUtils ./projection".split(" "),function(z,E,h,F,G,A,H,m,u,w,I,k,J,n){function p(a,d,b,f=u.ZEROS){if(!h.isNone(a))for(A.identity(q),A.rotate(q,q,k.angleRad(d),k.axis(d)),d=0;d<a.length;d+=b){for(var c=0;3>c;c++)r[c]=a[d+c]-f[c];m.transformMat4(r,
r,q);for(c=0;3>c;c++)a[d+c]=r[c]+f[c]}}const B=E.getLogger("esri.geometry.support.meshUtils.rotate"),r=u.create(),C=u.create(),v=k.create(),q=H.create(),D=G.create(),g=u.create();z.rotate=function(a,d,b){if(a.vertexAttributes&&a.vertexAttributes.position&&0!==d[3]){var f=a.spatialReference;if(h.isSome(a.transform)){var c;null!=(null==b?void 0:b.geographic)&&b.geographic!==a.transform.geographic&&B.warn(`Specifying the 'geographic' parameter (${b.geographic}) different from the Mesh transform setting (${a.transform.geographic}) is not supported`);
b=null!=(c=null==b?void 0:b.origin)?c:a.transform.getOriginPoint(f);a=a.transform;b=m.set(r,b.x,b.y,b.z);b=m.subtract(r,b,a.origin);a.applyLocalInverse(b,C);a.rotation=k.compose(a.rotation,d,k.create());a.applyLocalInverse(b,b);m.subtract(b,b,C);a.translation=m.add(u.create(),a.translation,b)}else{var e;c=null!=(e=null==b?void 0:b.origin)?e:a.origin;if(J.isGeographicMesh(a.spatialReference,b)){{e=c;b=a.spatialReference;c=I.getSphericalPCPF(b);w.projectPointToVector(e,g,c)||w.projectPointToVector(a.origin,
g,c);e=a.vertexAttributes.position;f=a.vertexAttributes.normal;const t=a.vertexAttributes.tangent,l=new Float64Array(e.length),x=h.isSome(f)?new Float32Array(f.length):null,y=h.isSome(t)?new Float32Array(t.length):null;w.computeLinearTransformation(c,g,q,c);F.fromMat4(D,q);m.transformMat3(k.axis(v),k.axis(d),D);v[3]=d[3];n.projectToPCPF(e,b,l);h.isSome(f)&&n.projectNormalToPCPF(f,e,l,b,x);h.isSome(t)&&n.projectTangentToPCPF(t,e,l,b,y);p(l,v,3,g);n.projectFromPCPF(l,e,b);h.isSome(f)&&(p(x,v,3),n.projectNormalFromPCPF(x,
e,l,b,f));h.isSome(t)&&(p(y,v,4),n.projectTangentFromPCPF(y,e,l,b,t));a.vertexAttributesChanged()}}else b=c,w.projectPointToVector(b,g,a.spatialReference)||(c=a.origin,g[0]=c.x,g[1]=c.y,g[2]=c.z,B.error(`Failed to project specified origin (wkid:${b.spatialReference.wkid}) to mesh spatial reference (wkid:${a.spatialReference.wkid}).`)),p(a.vertexAttributes.position,d,3,g),p(a.vertexAttributes.normal,d,3),p(a.vertexAttributes.tangent,d,4),a.vertexAttributesChanged()}}};Object.defineProperty(z,"__esModule",
{value:!0})});