// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../core/lang ../../../../../core/screenUtils ../../../../../chunks/mat4 ../../../../../chunks/vec2 ../../../../../chunks/vec3 ../../../../../chunks/vec3f64".split(" "),function(d,x,f,k,g,h,m){function l(b,c,a){const e=a.state.camera;a.renderCoordsHelper.toRenderCoords(b,n);e.projectToRenderScreen(n,p);a.state.camera.renderToScreen(p,c)}const q=m.create(),n=m.create(),p=f.createRenderScreenPointArray3(),r=f.createRenderScreenPointArray3(),t=f.createRenderScreenPointArray3(),
u=f.createScreenPointArray(),v=f.createScreenPointArray(),w=f.createScreenPointArray();d.copyParameter=function(b,c){return{...b,...x.clone(c)}};d.midpoint=function(b,c){h.set(c,0,0,0);if(0<b.length){for(let a=0;a<b.length;++a)h.add(c,c,b[a]);h.scale(c,c,1/b.length)}};d.pointToPointScreenDistance=function(b,c,a){l(b,v,a);l(c,w,a);return g.distance(v,w)};d.pointToScreenPositionDistance=function(b,c,a){l(b,u,a);return g.distance(u,c)};d.resizeArray=function(b,c,a,e){for(;b.length<c;)b.push(a());if(e)for(;b.length>
c;)a=b.pop(),e(a);else b.length=c};d.scaleTranslateMatrix=function(b,c,a){k.identity(a);k.translate(a,a,c);h.set(q,b,b,b);k.scale(a,a,q)};d.screenSpaceTangent=function(b,c,a,e){e.projectToRenderScreen(b,r);e.projectToRenderScreen(c,t);g.subtract(a,t,r);g.normalize(a,a)};Object.defineProperty(d,"__esModule",{value:!0})});