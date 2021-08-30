/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{s as t}from"./object.js";class s{constructor(s,o={ignoreUnknown:!1}){this.jsonToAPI=s,this.options=o,this.apiValues=[],this.jsonValues=[],this.apiToJSON=this.invertMap(s),this.apiValues=this.getKeysSorted(this.apiToJSON),this.jsonValues=this.getKeysSorted(this.jsonToAPI),this.read=t=>this.fromJSON(t),this.write=(s,o,i)=>{const n=this.toJSON(s);void 0!==n&&t(i,n,o)},this.write.isJSONMapWriter=!0}toJSON(t){return this.apiToJSON.hasOwnProperty(t)?this.apiToJSON[t]:this.options.ignoreUnknown?void 0:t}fromJSON(t){return this.jsonToAPI.hasOwnProperty(t)?this.jsonToAPI[t]:this.options.ignoreUnknown?void 0:t}invertMap(t){const s={};for(const o in t)s[t[o]]=o;return s}getKeysSorted(t){const s=[];for(const o in t)s.push(o);return s.sort(),s}}function o(){return function(t){return new s(t,{ignoreUnknown:!0})}}export{s as J,o as s};
