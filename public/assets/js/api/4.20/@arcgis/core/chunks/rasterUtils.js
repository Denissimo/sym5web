/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"./FramebufferObject.js";import{T as e}from"./Texture.js";function t(t,a,n="nearest",i=!1){var r;const s=!(i&&"u8"===a.pixelType),o=s?5126:5121,u=null==a.pixels||0===a.pixels.length?null:s?a.getAsRGBAFloat():a.getAsRGBA(),f=null==(r=t.capabilities.textureFloat)?void 0:r.textureFloatLinear,l={width:a.width,height:a.height,target:3553,pixelFormat:6408,internalFormat:"webgl2"===t.webglVersion&&s?34836:6408,samplingMode:!f||"bilinear"!==n&&"cubic"!==n?9728:9729,dataType:o,wrapMode:33071,flipped:!1};return new e(t,l,u)}function a(t,a){const n=4*a.size[0],i=a.size[1],r={width:n,height:i,target:3553,pixelFormat:6408,internalFormat:"webgl2"===t.webglVersion?34836:6408,dataType:5126,samplingMode:9728,wrapMode:33071,flipped:!1},s=new Float32Array(n*i*4);let o=0;for(let e=0;e<a.coefficients.length;e++)s[o++]=a.coefficients[e],e%3==2&&(s[o++]=1);return new e(t,r,s)}function n(t,a){const n={width:a.length/4,height:1,target:3553,pixelFormat:6408,internalFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,flipped:!1};return new e(t,n,a)}function i(e,t,a,n=1,i=!0,r=!1){return{u_flipY:i,u_isFloatTexture:r,u_applyTransform:!!e,u_opacity:n,u_transformSpacing:e?e.spacing:null,u_transformGridSize:e?e.size:null,u_targetImageSize:t,u_srcImageSize:a}}function r(e,t){return{u_colormapOffset:t||0,u_colormapMaxIndex:e?e.length/4-1:null}}function s(e,t){return{u_scale:e,u_offset:t}}function o(e){return{u_bandCount:e.bandCount,u_minOutput:e.outMin,u_maxOutput:e.outMax,u_minCutOff:e.minCutOff,u_maxCutOff:e.maxCutOff,u_factor:e.factor,u_useGamma:e.useGamma,u_gamma:e.gamma,u_gammaCorrection:e.gammaCorrection}}function u(e){return{u_hillshadeType:e.hillshadeType,u_sinZcosAs:e.sinZcosAs,u_sinZsinAs:e.sinZsinAs,u_cosZs:e.cosZs,u_weights:e.weights,u_factor:e.factor,u_minValue:e.minValue,u_maxValue:e.maxValue}}function f(e,t){const a=e.gl,n=t.glName,i=a.getProgramParameter(n,a.ACTIVE_UNIFORMS),r=new Map;let s;for(let e=0;e<i;e++)s=a.getActiveUniform(n,e),s&&r.set(s.name,{location:a.getUniformLocation(n,s.name),info:s});return r}function l(e,t,a){Object.keys(a).forEach((n=>{const i=t.get(n)||t.get(n+"[0]");i&&function(e,t,a,n){if(null===n||null==a)return!1;const{info:i}=n;switch(i.type){case 5126:i.size>1?e.setUniform1fv(t,a):e.setUniform1f(t,a);break;case 35664:e.setUniform2fv(t,a);break;case 35665:e.setUniform3fv(t,a);break;case 35666:e.setUniform4fv(t,a);break;case 35675:e.setUniformMatrix3fv(t,a);break;case 35676:e.setUniformMatrix4fv(t,a);break;case 5124:i.size>1?e.setUniform1iv(t,a):e.setUniform1i(t,a);break;case 35670:e.setUniform1i(t,a?1:0);break;case 35667:case 35671:e.setUniform2iv(t,a);break;case 35668:case 35672:e.setUniform3iv(t,a);break;case 35669:case 35673:e.setUniform4iv(t,a);break;default:return!1}}(e,n,a[n],i)}))}function c(e,t,a,n){a.length===n.length&&(n.some((e=>null==e))||a.some((e=>null==e))||a.forEach(((a,i)=>{t.setUniform1i(a,i),e.bindTexture(n[i],i)})))}export{s as a,i as b,a as c,r as d,o as e,u as f,f as g,t as h,n as i,c as j,l as s};
