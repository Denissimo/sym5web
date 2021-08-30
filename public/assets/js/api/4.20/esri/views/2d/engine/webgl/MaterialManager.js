// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../core/maybe ../../../webgl/BufferObject ../../../webgl/FramebufferObject ../../../webgl/Program ../../../webgl/ProgramCache ../../../webgl/Renderbuffer ../../../webgl/RenderingContext ../../../webgl/ShaderCompiler ../../../webgl/Texture ../../../webgl/VertexArrayObject ./enums ./shaders/MaterialPrograms".split(" "),function(p,x,y,z,t,A,B,C,D,E,m,q){const r=e=>e===m.WGLDrawPhase.HITTEST||e===m.WGLDrawPhase.LABEL_ALPHA,u=({rendererInfo:e,drawPhase:d},c,b,a)=>{c=c.getVariationHash();
a=a.join(".");d=(r(d)?1:0)|(d===m.WGLDrawPhase.HIGHLIGHT?2:0);return`${c}-${a}-${d}-${e.getVariationHash()}-${p.isSome(b)&&b.join(".")}`},v=(e,d,c,b)=>{b=b.reduce((a,f)=>({...a,[f]:e.driverTestResult[f]}),{});d={...d.getVariation(),...e.rendererInfo.getVariation(),highlight:e.drawPhase===m.WGLDrawPhase.HIGHLIGHT,id:r(e.drawPhase),...b};if(p.isSome(c))for(const a of c)d[a]=!0;return d};return function(){function e(c){this._programByKey=new Map;this._programCache=new t(c)}var d=e.prototype;d.dispose=
function(){this._programCache&&this._programCache.dispose()};d.getProgram=function(c,b,a=[],f=[]){const h=b.vsPath+"."+b.fsPath+JSON.stringify(a)+f.join(".");if(this._programByKey.has(h))return this._programByKey.get(h);f=f.reduce((g,k)=>({...g,[k]:c.driverTestResult[k]}),{});a={...a.map(g=>"string"===typeof g?{name:g,value:!0}:g).reduce((g,k)=>({...g,[k.name]:k.value}),{}),...f};const {vsPath:n,fsPath:l,attributes:w}=b;b=this._programCache.getProgram(q.createProgramTemplate(n,l,w),a);if(!b)throw Error("Unable to get program for key: ${key}");
this._programByKey.set(h,b);return b};d.getMaterialProgram=function(c,b,a,f,h,n=["ignoresSamplerPrecision"]){const l=u(c,b,h,n);if(this._programByKey.has(l))return this._programByKey.get(l);c=v(c,b,h,n);a=this._programCache.getProgram(q.createProgramTemplate(a,a,f),c);if(!a)throw Error("Unable to get program for key: ${key}");this._programByKey.set(l,a);return a};return e}()});