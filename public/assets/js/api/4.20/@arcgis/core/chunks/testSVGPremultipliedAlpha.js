/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{B as e,V as t}from"./VertexArrayObject.js";import{F as r}from"./FramebufferObject.js";import{P as i}from"./Program.js";import{T as n}from"./Texture.js";async function o(o){const a=new Image;if(a.src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='5' height='5' version='1.1' viewBox='0 0 5 5' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='5' height='5' fill='%23f00' fill-opacity='.5'/%3E%3C/svg%3E%0A",a.width=5,a.height=5,await a.decode(),!o.gl)return!0;const s=new r(o,{colorTarget:0,depthStencilTarget:0},{target:3553,wrapMode:33071,pixelFormat:6408,dataType:5121,samplingMode:9728,width:1,height:1}),p=e.createVertex(o,35044,new Uint16Array([0,0,1,0,0,1,1,1])),d=new t(o,new Map([["a_pos",0]]),{geometry:[{name:"a_pos",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:p}),g=new i(o,"\n  precision highp float;\n\n  attribute vec2 a_pos;\n  varying vec2 v_uv;\n\n  void main() {\n    v_uv = a_pos;\n    gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);\n  }\n  ","\n  precision highp float;\n\n  varying vec2 v_uv;\n  uniform sampler2D u_texture;\n\n  void main() {\n    gl_FragColor = texture2D(u_texture, v_uv);\n  }\n  ",new Map([["a_pos",0]]));o.useProgram(g);const m=new n(o,{dataType:5121,pixelFormat:6408,preMultiplyAlpha:!1,wrapMode:33071,samplingMode:9729},a);o.bindTexture(m,0),g.setUniform1i("u_texture",0);const c=o.getBoundFramebufferObject(),{x:u,y:w,width:l,height:f}=o.getViewport();o.bindFramebuffer(s),o.setViewport(0,0,1,1),o.bindVAO(d),o.drawArrays(5,0,4);const v=new Uint8Array(4);return s.readPixels(0,0,1,1,6408,5121,v),g.dispose(),d.dispose(!1),p.dispose(),s.dispose(),m.dispose(),o.setViewport(u,w,l,f),o.bindFramebuffer(c),a.src="",255===v[0]}export{o as t};
