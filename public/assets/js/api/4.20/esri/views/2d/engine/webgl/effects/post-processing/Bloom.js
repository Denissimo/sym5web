// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../../../webgl/BufferObject ../../../../../webgl/FramebufferObject ../../../../../webgl/Program ../../../../../webgl/ProgramCache ../../../../../webgl/Renderbuffer ../../../../../webgl/RenderingContext ../../../../../webgl/ShaderCompiler ../../../../../webgl/Texture ../../../../../webgl/VertexArrayObject ../../VertexStream".split(" "),function(t,u,l,F,G,H,I,J,K,L,w){const x=[1,0],y=[0,1],z=[1,.8,.6,.4,.2],A=[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];u=function(){function v(){this._compositeFBO=
this._intensityFBO=null;this._mipsFBOs=Array(5);this._nMips=5;this._kernelSizeArray=[3,5,7,9,11];this._size=[0,0];this._programDesc={luminosityHighPass:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/luminosityHighPass",attributes:new Map([["a_position",0]])},gaussianBlur:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/gaussianBlur",attributes:new Map([["a_position",0]])},composite:{vsPath:"post-processing/pp",fsPath:"post-processing/bloom/composite",attributes:new Map([["a_position",
0]])},blit:{vsPath:"post-processing/pp",fsPath:"post-processing/blit",attributes:new Map([["a_position",0]])}}}var q=v.prototype;q.dispose=function(){this._quad&&(this._quad.dispose(),this._quad=null);this._intensityFBO&&(this._intensityFBO.dispose(),this._intensityFBO=null);this._compositeFBO&&(this._compositeFBO.dispose(),this._compositeFBO=null);if(this._mipsFBOs){for(let d=0;d<this._nMips;d++)this._mipsFBOs[d]&&(this._mipsFBOs[d].horizontal.dispose(),this._mipsFBOs[d].vertical.dispose());this._mipsFBOs=
null}};q.draw=function(d,e,f){const {width:c,height:r}=e,{context:a,painter:B}=d,{materialManager:m}=B;var h=a.gl;const n=this._programDesc,{strength:C,radius:D,threshold:E}=f;this._quad||(this._quad=new w(a,[-1,-1,1,-1,-1,1,1,1]));this._createOrResizeResources(d,c,r);a.setStencilTestEnabled(!1);a.setBlendingEnabled(!0);a.setBlendFunction(1,771);a.setStencilWriteMask(0);f=this._quad;f.bind();a.bindFramebuffer(this._intensityFBO);var b=m.getProgram(d,n.luminosityHighPass);a.useProgram(b);a.bindTexture(e.colorTexture,
0);b.setUniform1i("u_texture",0);b.setUniform3fv("u_defaultColor",[0,0,0]);b.setUniform1f("u_defaultOpacity",0);b.setUniform1f("u_luminosityThreshold",E);b.setUniform1f("u_smoothWidth",.01);b=[Math.round(c/2),Math.round(r/2)];a.setViewport(0,0,b[0],b[1]);a.setClearColor(0,0,0,0);a.clear(h.COLOR_BUFFER_BIT);f.draw();a.setBlendingEnabled(!1);h=this._intensityFBO.colorTexture;for(let g=0;g<this._nMips;g++){const k=m.getProgram(d,n.gaussianBlur,[{name:"radius",value:this._kernelSizeArray[g]}]);a.useProgram(k);
a.bindTexture(h,g+1);k.setUniform1i("u_colorTexture",g+1);k.setUniform2fv("u_texSize",b);k.setUniform2fv("u_direction",x);a.setViewport(0,0,b[0],b[1]);const p=this._mipsFBOs[g];a.bindFramebuffer(p.horizontal);f.draw();h=p.horizontal.colorTexture;a.bindFramebuffer(p.vertical);a.bindTexture(h,g+1);k.setUniform2fv("u_direction",y);f.draw();h=p.vertical.colorTexture;b[0]=Math.round(b[0]/2);b[1]=Math.round(b[1]/2)}a.setViewport(0,0,c,r);b=m.getProgram(d,n.composite,[{name:"nummips",value:5}]);a.bindFramebuffer(this._compositeFBO);
a.useProgram(b);b.setUniform1f("u_bloomStrength",C);b.setUniform1f("u_bloomRadius",D);b.setUniform1fv("u_bloomFactors",z);b.setUniform3fv("u_bloomTintColors",A);a.bindTexture(this._mipsFBOs[0].vertical.colorTexture,1);b.setUniform1i("u_blurTexture1",1);a.bindTexture(this._mipsFBOs[1].vertical.colorTexture,2);b.setUniform1i("u_blurTexture2",2);a.bindTexture(this._mipsFBOs[2].vertical.colorTexture,3);b.setUniform1i("u_blurTexture3",3);a.bindTexture(this._mipsFBOs[3].vertical.colorTexture,4);b.setUniform1i("u_blurTexture4",
4);a.bindTexture(this._mipsFBOs[4].vertical.colorTexture,5);b.setUniform1i("u_blurTexture5",5);f.draw();a.bindFramebuffer(e);a.setBlendingEnabled(!0);d=m.getProgram(d,n.blit);a.useProgram(d);a.bindTexture(this._compositeFBO.colorTexture,6);d.setUniform1i("u_texture",6);a.setBlendFunction(1,1);f.draw();f.unbind();a.setBlendFunction(1,771);a.setStencilTestEnabled(!0)};q._createOrResizeResources=function(d,e,f){({context:d}=d);if(!this._compositeFBO||this._size[0]!==e||this._size[1]!==f){this._size[0]=
e;this._size[1]=f;var c=[Math.round(e/2),Math.round(f/2)];this._compositeFBO?this._compositeFBO.resize(e,f):this._compositeFBO=new l(d,{colorTarget:0,depthStencilTarget:0,width:e,height:f});this._intensityFBO?this._intensityFBO.resize(c[0],c[1]):this._intensityFBO=new l(d,{colorTarget:0,depthStencilTarget:0,width:c[0],height:c[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:c[0],height:c[1]});for(e=0;e<this._nMips;e++)this._mipsFBOs[e]?
(this._mipsFBOs[e].horizontal.resize(c[0],c[1]),this._mipsFBOs[e].vertical.resize(c[0],c[1])):this._mipsFBOs[e]={horizontal:new l(d,{colorTarget:0,depthStencilTarget:0,width:c[0],height:c[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,width:c[0],height:c[1]}),vertical:new l(d,{colorTarget:0,depthStencilTarget:0,width:c[0],height:c[1]},{target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!1,
width:c[0],height:c[1]})},c[0]=Math.round(c[0]/2),c[1]=Math.round(c[1]/2)}};return v}();t.Bloom=u;Object.defineProperty(t,"__esModule",{value:!0})});