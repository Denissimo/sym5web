// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../../../../core/Logger ../../../../../webgl/BufferObject ../../../../../webgl/FramebufferObject ../../../../../webgl/Program ../../../../../webgl/ProgramCache ../../../../../webgl/Renderbuffer ../../../../../webgl/RenderingContext ../../../../../webgl/ShaderCompiler ../../../../../webgl/Texture ../../../../../webgl/VertexArrayObject ../../definitions ./parameters".split(" "),function(u,z,A,B,C,D,E,F,v,G,w,f){function x(g,a){a.fillColor[0]=g.color.r/255;a.fillColor[1]=g.color.g/255;
a.fillColor[2]=g.color.b/255;a.fillColor[3]=g.color.a;g.haloColor?(a.outlineColor[0]=g.haloColor.r/255,a.outlineColor[1]=g.haloColor.g/255,a.outlineColor[2]=g.haloColor.b/255,a.outlineColor[3]=g.haloColor.a):(a.outlineColor[0]=a.fillColor[0],a.outlineColor[1]=a.fillColor[1],a.outlineColor[2]=a.fillColor[2],a.outlineColor[3]=a.fillColor[3]);a.fillColor[3]*=g.fillOpacity;a.outlineColor[3]*=g.haloOpacity;a.fillColor[0]*=a.fillColor[3];a.fillColor[1]*=a.fillColor[3];a.fillColor[2]*=a.fillColor[3];a.outlineColor[0]*=
a.outlineColor[3];a.outlineColor[1]*=a.outlineColor[3];a.outlineColor[2]*=a.outlineColor[3];a.outlineWidth=f.HIGHLIGHT_SIZING.outlineWidth;a.outerHaloWidth=f.HIGHLIGHT_SIZING.outerHaloWidth;a.innerHaloWidth=f.HIGHLIGHT_SIZING.innerHaloWidth;a.outlinePosition=f.HIGHLIGHT_SIZING.outlinePosition}const q=u.getLogger("esri.views.2d.engine.webgl.painter.highlight.HighlightGradient"),y=[0,0,0,0];return function(){function g(){this._convertedHighlightOptions={fillColor:[.2*.75,.6*.75,.675,.75],outlineColor:[.2*
.9,.54,.81,.9],outlinePosition:f.HIGHLIGHT_SIZING.outlinePosition,outlineWidth:f.HIGHLIGHT_SIZING.outlineWidth,innerHaloWidth:f.HIGHLIGHT_SIZING.innerHaloWidth,outerHaloWidth:f.HIGHLIGHT_SIZING.outerHaloWidth};this.shadeTexChanged=!0;this.texelData=new Uint8Array(4*f.SHADE_TEXTURE_SIZE);this.minMaxDistance=[0,0]}var a=g.prototype;a.setHighlightOptions=function(h){function n(b,p,l){c[0]=(1-l)*b[0]+l*p[0];c[1]=(1-l)*b[1]+l*p[1];c[2]=(1-l)*b[2]+l*p[2];c[3]=(1-l)*b[3]+l*p[3]}const d=this._convertedHighlightOptions;
x(h,d);h=d.outlinePosition-d.outlineWidth/2-d.outerHaloWidth;const t=d.outlinePosition-d.outlineWidth/2,r=d.outlinePosition+d.outlineWidth/2,m=d.outlinePosition+d.outlineWidth/2+d.innerHaloWidth;var e=Math.sqrt(Math.PI/2)*f.SIGMA,k=Math.abs(h)>e?Math.round(10*(Math.abs(h)-e))/10:0;e=Math.abs(m)>e?Math.round(10*(Math.abs(m)-e))/10:0;k&&!e?q.error("The outer rim of the highlight is "+k+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards positive values (inwards)."):
!k&&e?q.error("The inner rim of the highlight is "+e+"px away from the edge of the feature; consider reducing some width values or shifting the outline position towards negative values (outwards)."):k&&e&&q.error("The highlight is "+Math.max(k,e)+"px away from the edge of the feature; consider reducing some width values.");const c=[void 0,void 0,void 0,void 0];({texelData:e}=this);for(let b=0;b<f.SHADE_TEXTURE_SIZE;++b)k=h+b/(f.SHADE_TEXTURE_SIZE-1)*(m-h),k<h?(c[4*b]=0,c[4*b+1]=0,c[4*b+2]=0,c[4*b+
3]=0):k<t?n(y,d.outlineColor,(k-h)/(t-h)):k<r?[c[0],c[1],c[2],c[3]]=d.outlineColor:k<m?n(d.outlineColor,d.fillColor,(k-r)/(m-r)):[c[4*b],c[4*b+1],c[4*b+2],c[4*b+3]]=d.fillColor,e[4*b]=255*c[0],e[4*b+1]=255*c[1],e[4*b+2]=255*c[2],e[4*b+3]=255*c[3];this.minMaxDistance[0]=h;this.minMaxDistance[1]=m;this.shadeTexChanged=!0};a.applyHighlightOptions=function(h,n){this.shadeTex||(this.shadeTex=new v(h,{target:3553,pixelFormat:6408,dataType:5121,wrapMode:33071,width:f.SHADE_TEXTURE_SIZE,height:1,samplingMode:9729}));
this.shadeTexChanged&&(this.shadeTex.updateData(0,0,0,f.SHADE_TEXTURE_SIZE,1,this.texelData),this.shadeTexChanged=!1);h.bindTexture(this.shadeTex,w.TEXTURE_BINDING_HIGHLIGHT_1);n.setUniform2fv("u_minMaxDistance",this.minMaxDistance)};a.destroy=function(){this.shadeTex&&(this.shadeTex.dispose(),this.shadeTex=null)};return g}()});