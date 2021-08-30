/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{u as e,i as r}from"../core/lang.js";import{W as t}from"./WorkerHandle.js";class s extends t{constructor(e=null){super("LercWorker","_decode",e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,r,t){return e&&0!==e.byteLength?this.invoke({buffer:e,options:r},t):Promise.resolve(null)}getTransferList(e){return[e.buffer]}release(){--this.ref<=0&&(n.forEach(((e,r)=>{e===this&&n.delete(r)})),this.destroy())}}const n=new Map;function o(t=null){let o=n.get(e(t));return o||(r(t)?(o=new s((e=>t.schedule(e))),n.set(t,o)):(o=new s,n.set(null,o))),++o.ref,o}export{o as a};
