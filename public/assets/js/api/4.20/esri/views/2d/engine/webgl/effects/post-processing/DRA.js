// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../../core/Logger ../../../../../webgl/BufferObject ../../../../../webgl/FramebufferObject ../../../../../webgl/Program ../../../../../webgl/ProgramCache ../../../../../webgl/Renderbuffer ../../../../../webgl/RenderingContext ../../../../../webgl/ShaderCompiler ../../../../../webgl/Texture ../../../../../webgl/VertexArrayObject ../../VertexStream".split(" "),function(y,u,H,D,I,J,K,L,M,E,N,F){const G=u.getLogger("esri.views.2d.engine.webgl.effects.post-processing.DRA");
u=function(){function z(){this._fbos=null;this._colorAttachmentsPoints=[36064,36065];this._size=[0,0];this._programDesc={"min-max":{vsPath:"post-processing/pp",fsPath:"post-processing/dra/min-max",attributes:new Map([["a_position",0]])},dra:{vsPath:"post-processing/pp",fsPath:"post-processing/dra",attributes:new Map([["a_position",0]])}}}var p=z.prototype;p.dispose=function(){this._disposeFBOs();this._layerTexture&&(this._layerTexture.dispose(),this._layerTexture=null)};p.draw=function(b,f,k){this._createOrResizeResources(b);
const {context:a,state:d,painter:e,pixelRatio:g}=b;({materialManager:k}=e);const A=this._programDesc;var {size:l}=d;const B=this._fbos,h=[g*l[0],g*l[1]],C=a.capabilities.drawBuffers;if(C){this._quad||(this._quad=new F(a,[-1,-1,1,-1,-1,1,1,1]));l=this._layerTexture;f.copyToTexture(0,0,h[0],h[1],0,0,l);var q=this._quad;q.bind();var m=k.getProgram(b,A["min-max"]);a.useProgram(m);a.setBlendingEnabled(!1);var v=f.colorTexture,w=f.colorTexture,x=[h[0],h[1]],n=[0,0];for(let r=0;r<B.length;r++){const t=B[r];
var c=t.descriptor;n[0]=c.width;n[1]=c.height;a.bindFramebuffer(t);C.drawBuffers(this._colorAttachmentsPoints);a.setViewport(0,0,c.width,c.height);c=r;6<c&&(c=6);a.bindTexture(v,c);a.bindTexture(w,c+1);m.setUniform1i("u_minTexture",c);m.setUniform1i("u_maxTexture",c+1);m.setUniform2fv("u_srcResolution",x);m.setUniform2fv("u_dstResolution",n);q.draw();v=t.getColorTexture(36064);w=t.getColorTexture(36065);x[0]=n[0];x[1]=n[1]}a.setViewport(0,0,h[0],h[1]);a.bindFramebuffer(f);b=k.getProgram(b,A.dra);
a.useProgram(b);a.bindTexture(v,5);a.bindTexture(w,6);a.bindTexture(l,7);b.setUniform1i("u_minColor",5);b.setUniform1i("u_maxColor",6);b.setUniform1i("u_texture",7);a.setStencilWriteMask(0);a.setStencilTestEnabled(!1);a.setDepthWriteEnabled(!1);a.setDepthTestEnabled(!1);q.draw();a.setBlendingEnabled(!0);a.setBlendFunction(1,771);a.setStencilTestEnabled(!0);q.unbind()}else G.error("esri.DRA","WebGL Extension WEBGL_draw_buffers isn't supported!")};p._createOrResizeResources=function(b){const {context:f,
state:k,pixelRatio:a}=b;({size:b}=k);let d=Math.round(a*b[0]),e=Math.round(a*b[1]);if(this._size[0]!==d||this._size[1]!==e){this._size[0]=d;this._size[1]=e;this._disposeFBOs();for(this._fbos=[];1<d||1<e;){d=Math.max(1,Math.floor((d+2-1)/2)|0);e=Math.max(1,Math.floor((e+2-1)/2)|0);var g={pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1,width:d,height:e};g=new D(f,{depthStencilTarget:0,width:d,height:e},[g,g]);this._fbos.push(g)}this._layerTexture?this._layerTexture.resize(Math.round(a*
b[0]),Math.round(a*b[1])):this._layerTexture=new E(f,{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:Math.round(a*b[0]),height:Math.round(a*b[1])})}};p._disposeFBOs=function(){if(this._fbos){for(const b of this._fbos)b.dispose();this._fbos.length=0;this._fbos=null}};return z}();y.DRA=u;Object.defineProperty(y,"__esModule",{value:!0})});