/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{clone as t,h as e}from"../core/lang.js";import{D as r}from"./DisplayObject.js";import{a as n,b as s,h as i,g as a}from"./colorUtils.js";import c from"../core/Error.js";import{L as o}from"./Logger.js";import{c as u}from"./mat4f32.js";import{e as l,h}from"./mat4.js";import{c as f}from"./_commonjsHelpers.js";class p{constructor(t,e,r){this.strength=t,this.radius=e,this.threshold=r,this.type="bloom"}interpolate(t,e,r){this.strength=y(t.strength,e.strength,r),this.radius=y(t.radius,e.radius,r),this.threshold=y(t.threshold,e.threshold,r)}clone(){return new p(this.strength,this.radius,this.threshold)}}class d{constructor(t){this.radius=t,this.type="blur"}interpolate(t,e,r){this.radius=Math.round(y(t.radius,e.radius,r))}clone(){return new d(this.radius)}}class g{constructor(t,e){this.type=t,this.amount=e,"invert"!==this.type&&"grayscale"!==this.type&&"sepia"!==this.type||(this.amount=Math.min(this.amount,1))}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.amount=y(t.amount,e.amount,r),this._updateMatrix()}clone(){return new g(this.type,this.amount)}_updateMatrix(){const t=this._colorMatrix||u();switch(this.type){case"brightness":this._colorMatrix=((t,e)=>{const r=h(t,e,0,0,0,0,e,0,0,0,0,e,0,0,0,0,1);return l(r,r)})(t,this.amount);break;case"contrast":this._colorMatrix=((t,e)=>{const r=h(t,e,0,0,.5-.5*e,0,e,0,.5-.5*e,0,0,e,.5-.5*e,0,0,0,1);return l(r,r)})(t,this.amount);break;case"grayscale":this._colorMatrix=((t,e)=>{const r=1-e,n=h(t,.2126+.7874*r,.7152-.7152*r,.0722-.0722*r,0,.2126-.2126*r,.7152+.2848*r,.0722-.0722*r,0,.2126-.2126*r,.7152-.7152*r,.0722+.9278*r,0,0,0,0,1);return l(n,n)})(t,this.amount);break;case"invert":this._colorMatrix=((t,e)=>{const r=1-2*e,n=h(t,r,0,0,e,0,r,0,e,0,0,r,e,0,0,0,1);return l(n,n)})(t,this.amount);break;case"saturate":this._colorMatrix=((t,e)=>{const r=h(t,.213+.787*e,.715-.715*e,.072-.072*e,0,.213-.213*e,.715+.285*e,.072-.072*e,0,.213-.213*e,.715-.715*e,.072+.928*e,0,0,0,0,1);return l(r,r)})(t,this.amount);break;case"sepia":this._colorMatrix=((t,e)=>{const r=1-e,n=h(t,.393+.607*r,.769-.769*r,.189-.189*r,0,.349-.349*r,.686+.314*r,.168-.168*r,0,.272-.272*r,.534-.534*r,.131+.869*r,0,0,0,0,1);return l(n,n)})(t,this.amount)}}}class m{constructor(t,e,r,n){this.offsetX=t,this.offsetY=e,this.blurRadius=r,this.color=n,this.type="drop-shadow"}interpolate(t,e,r){this.offsetX=y(t.offsetX,e.offsetX,r),this.offsetY=y(t.offsetY,e.offsetY,r),this.blurRadius=y(t.blurRadius,e.blurRadius,r),this.color[0]=Math.round(y(t.color[0],e.color[0],r)),this.color[1]=Math.round(y(t.color[1],e.color[1],r)),this.color[2]=Math.round(y(t.color[2],e.color[2],r)),this.color[3]=y(t.color[3],e.color[3],r)}clone(){return new m(this.offsetX,this.offsetY,this.blurRadius,[...this.color])}}class _{constructor(t){this.angle=t,this.type="hue-rotate"}get colorMatrix(){return this._colorMatrix||this._updateMatrix(),this._colorMatrix}interpolate(t,e,r){this.angle=y(t.angle,e.angle,r),this._updateMatrix()}clone(){return new _(this.angle)}_updateMatrix(){const t=this._colorMatrix||u();this._colorMatrix=((t,e)=>{const r=Math.sin(e*Math.PI/180),n=Math.cos(e*Math.PI/180),s=h(t,.213+.787*n-.213*r,.715-.715*n-.715*r,.072-.072*n+.928*r,0,.213-.213*n+.143*r,.715+.285*n+.14*r,.072-.072*n-.283*r,0,.213-.213*n-.787*r,.715-.715*n+.715*r,.072+.928*n+.072*r,0,0,0,0,1);return l(s,s)})(t,this.angle)}}class v{constructor(t){this.amount=t,this.type="opacity",this.amount=Math.min(this.amount,1)}interpolate(t,e,r){this.amount=y(t.amount,e.amount,r)}clone(){return new v(this.amount)}}function y(t,e,r){return t+(e-t)*r}var w,x={exports:{}};function A(t){let e;try{e=t?x.exports.parse(t):[]}catch(e){return{input:t,parsedFunctions:[],effects:[],error:new c("effect:invalid-syntax","Invalid effect syntax",{input:t,error:e})}}const r={input:t,parsedFunctions:e,effects:[],error:null};try{for(const t of e)r.effects.push(b(t))}catch(t){r.effects.length=0,r.error=t}return r}function b(t){try{switch(t.name){case"grayscale":case"sepia":case"saturate":case"invert":case"brightness":case"contrast":return function(t){let e=1;M(t.parameters,1),1===t.parameters.length&&(e=S(t.parameters[0]));return new g(t.name,e)}(t);case"opacity":return function(t){let e=1;M(t.parameters,1),1===t.parameters.length&&(e=S(t.parameters[0]));return new v(e)}(t);case"hue-rotate":return function(t){let e=0;M(t.parameters,1),1===t.parameters.length&&(function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==F[t.unit])throw new c("effect:type-error",`Expected <angle>, Actual: ${C(t)}`,{term:t})}(r=t.parameters[0]),e=r.value*F[r.unit]||0);var r;return new _(e)}(t);case"blur":return function(t){let e=0;M(t.parameters,1),1===t.parameters.length&&(e=L(t.parameters[0]),E(e,t.parameters[0]));return new d(e)}(t);case"drop-shadow":return function(t){const e=[];let r;for(const n of t.parameters)if("color"===n.type){if(e.length&&Object.freeze(e),r)throw new c("effect:type-error","Accepts only one color",{});r=j(n)}else{const t=L(n);if(Object.isFrozen(e))throw new c("effect:type-error","<length> parameters not consecutive",{lengths:e});e.push(t),3===e.length&&E(t,n)}if(e.length<2||e.length>3)throw new c("effect:type-error",`Expected <length>{2,3}, Actual: <length>{${e.length}}`,{lengths:e});return new m(e[0],e[1],e[2]||0,r||k("black"))}(t);case"bloom":return function(t){let e=1,r=0,n=0;M(t.parameters,3),t.parameters[0]&&(e=S(t.parameters[0]));t.parameters[1]&&(r=L(t.parameters[1]),E(r,t.parameters[1]));t.parameters[2]&&(n=S(t.parameters[2]));return new p(e,r,n)}(t)}}catch(e){throw e.details.filter=t,e}throw new c("effect:unknown-effect",`Effect '${t.name}' is not supported`,{effect:t})}function M(t,e){if(t.length>e)throw new c("effect:type-error",`Function supports up to ${e} parameters, Actual: ${t.length}`,{parameters:t})}function C(t){return"color"===t.type?"<color>":R[t.unit]?"<length>":F[t.unit]?"<angle>":"%"===t.unit?"<percentage>":"<double>"}function E(t,e){if(t<0)throw new c("effect:type-error",`Negative values are not allowed, Actual: ${t}`,{term:e})}(w=x).exports&&(w.exports=function(){function t(t,e){function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r}function e(t,r,n,s){this.message=t,this.expected=r,this.found=n,this.location=s,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,e)}function r(t,r){r=void 0!==r?r:{};var n,s={},i={start:Bt},a=Bt,c=zt("none"),o="none",u=It("none",!1),l=function(){return[]},h=")",f=It(")",!1),p=function(t,e){return{type:"function",name:t,parameters:e||[]}},d=",",g=It(",",!1),m=function(t,e){return e.length>0?oe(t,e,3):[t]},_=function(t){return{type:"quantity",value:t.value,unit:t.unit}},v=function(t){return{type:"color",colorType:t.type,value:t.value}},y=zt("whitespace"),w=/^[ \t\n\r]/,x=Xt([" ","\t","\n","\r"],!1,!1),A=zt("function"),b="(",M=It("(",!1),C=function(t){return t},E=zt("identifier"),F=/^[a-z\-]/,R=Xt([["a","z"],"-"],!1,!1),S=function(){return Pt()},T=zt("percentage"),L="%",j=It("%",!1),k=function(t){return{value:t,unit:"%"}},$=zt("length"),q="px",O=It("px",!1),P=function(t){return{value:t,unit:"px"}},I="cm",X=It("cm",!1),Y=function(t){return{value:t,unit:"cm"}},z="mm",D=It("mm",!1),U=function(t){return{value:t,unit:"mm"}},H="in",N=It("in",!1),B=function(t){return{value:t,unit:"in"}},G="pt",J=It("pt",!1),K=function(t){return{value:t,unit:"pt"}},Q="pc",V=It("pc",!1),W=function(t){return{value:t,unit:"pc"}},Z=zt("angle"),tt="deg",et=It("deg",!1),rt=function(t){return{value:t,unit:"deg"}},nt="rad",st=It("rad",!1),it=function(t){return{value:t,unit:"rad"}},at="grad",ct=It("grad",!1),ot=function(t){return{value:t,unit:"grad"}},ut="turn",lt=It("turn",!1),ht=function(t){return{value:t,unit:"turn"}},ft=zt("number"),pt=function(t){return{value:t,unit:null}},dt=zt("color"),gt="#",mt=It("#",!1),_t=/^[0-9a-fA-F]/,vt=Xt([["0","9"],["a","f"],["A","F"]],!1,!1),yt=function(){return{type:"hex",value:Pt()}},wt=function(t){return{type:"function",value:t}},xt=function(){return{type:"named",value:Pt()}},At=/^[+\-]/,bt=Xt(["+","-"],!1,!1),Mt=/^[0-9]/,Ct=Xt([["0","9"]],!1,!1),Et=".",Ft=It(".",!1),Rt="e",St=It("e",!1),Tt=function(){return parseFloat(Pt())},Lt=0,jt=0,kt=[{line:1,column:1}],$t=0,qt=[],Ot=0;if("startRule"in r){if(!(r.startRule in i))throw new Error("Can't start parsing from rule \""+r.startRule+'".');a=i[r.startRule]}function Pt(){return t.substring(jt,Lt)}function It(t,e){return{type:"literal",text:t,ignoreCase:e}}function Xt(t,e,r){return{type:"class",parts:t,inverted:e,ignoreCase:r}}function Yt(){return{type:"end"}}function zt(t){return{type:"other",description:t}}function Dt(e){var r,n=kt[e];if(n)return n;for(r=e-1;!kt[r];)r--;for(n={line:(n=kt[r]).line,column:n.column};r<e;)10===t.charCodeAt(r)?(n.line++,n.column=1):n.column++,r++;return kt[e]=n,n}function Ut(t,e){var r=Dt(t),n=Dt(e);return{start:{offset:t,line:r.line,column:r.column},end:{offset:e,line:n.line,column:n.column}}}function Ht(t){Lt<$t||(Lt>$t&&($t=Lt,qt=[]),qt.push(t))}function Nt(t,r,n){return new e(e.buildMessage(t,r),t,r,n)}function Bt(){var t;return(t=Gt())===s&&(t=Jt()),t}function Gt(){var e,r;return Ot++,e=Lt,Wt()!==s?(t.substr(Lt,4)===o?(r=o,Lt+=4):(r=s,0===Ot&&Ht(u)),r!==s&&Wt()!==s?(jt=e,e=l()):(Lt=e,e=s)):(Lt=e,e=s),Ot--,e===s&&0===Ot&&Ht(c),e}function Jt(){var t,e;if(t=[],(e=Kt())!==s)for(;e!==s;)t.push(e),e=Kt();else t=s;return t}function Kt(){var e,r,n,i;return e=Lt,Wt()!==s&&(r=Zt())!==s&&Wt()!==s?((n=Qt())===s&&(n=null),n!==s&&Wt()!==s?(41===t.charCodeAt(Lt)?(i=h,Lt++):(i=s,0===Ot&&Ht(f)),i!==s&&Wt()!==s?(jt=e,e=p(r,n)):(Lt=e,e=s)):(Lt=e,e=s)):(Lt=e,e=s),e}function Qt(){var e,r,n,i,a,c,o,u;if(e=Lt,(r=Vt())!==s){for(n=[],i=Lt,(a=Wt())!==s?(44===t.charCodeAt(Lt)?(c=d,Lt++):(c=s,0===Ot&&Ht(g)),c===s&&(c=null),c!==s&&(o=Wt())!==s&&(u=Vt())!==s?i=a=[a,c,o,u]:(Lt=i,i=s)):(Lt=i,i=s);i!==s;)n.push(i),i=Lt,(a=Wt())!==s?(44===t.charCodeAt(Lt)?(c=d,Lt++):(c=s,0===Ot&&Ht(g)),c===s&&(c=null),c!==s&&(o=Wt())!==s&&(u=Vt())!==s?i=a=[a,c,o,u]:(Lt=i,i=s)):(Lt=i,i=s);n!==s?(jt=e,e=r=m(r,n)):(Lt=e,e=s)}else Lt=e,e=s;return e}function Vt(){var t,e;return t=Lt,(e=ee())===s&&(e=re())===s&&(e=ne())===s&&(e=se()),e!==s&&(jt=t,e=_(e)),(t=e)===s&&(t=Lt,(e=ie())!==s&&(jt=t,e=v(e)),t=e),t}function Wt(){var e,r;for(Ot++,e=[],w.test(t.charAt(Lt))?(r=t.charAt(Lt),Lt++):(r=s,0===Ot&&Ht(x));r!==s;)e.push(r),w.test(t.charAt(Lt))?(r=t.charAt(Lt),Lt++):(r=s,0===Ot&&Ht(x));return Ot--,e===s&&(r=s,0===Ot&&Ht(y)),e}function Zt(){var e,r,n;return Ot++,e=Lt,(r=te())!==s?(40===t.charCodeAt(Lt)?(n=b,Lt++):(n=s,0===Ot&&Ht(M)),n!==s?(jt=e,e=r=C(r)):(Lt=e,e=s)):(Lt=e,e=s),Ot--,e===s&&(r=s,0===Ot&&Ht(A)),e}function te(){var e,r,n;if(Ot++,e=Lt,r=[],F.test(t.charAt(Lt))?(n=t.charAt(Lt),Lt++):(n=s,0===Ot&&Ht(R)),n!==s)for(;n!==s;)r.push(n),F.test(t.charAt(Lt))?(n=t.charAt(Lt),Lt++):(n=s,0===Ot&&Ht(R));else r=s;return r!==s&&(jt=e,r=S()),Ot--,(e=r)===s&&(r=s,0===Ot&&Ht(E)),e}function ee(){var e,r,n;return Ot++,e=Lt,Wt()!==s&&(r=ae())!==s?(37===t.charCodeAt(Lt)?(n=L,Lt++):(n=s,0===Ot&&Ht(j)),n!==s?(jt=e,e=k(r)):(Lt=e,e=s)):(Lt=e,e=s),Ot--,e===s&&0===Ot&&Ht(T),e}function re(){var e,r,n;return Ot++,e=Lt,Wt()!==s&&(r=ae())!==s?(t.substr(Lt,2)===q?(n=q,Lt+=2):(n=s,0===Ot&&Ht(O)),n!==s?(jt=e,e=P(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,Wt()!==s&&(r=ae())!==s?(t.substr(Lt,2)===I?(n=I,Lt+=2):(n=s,0===Ot&&Ht(X)),n!==s?(jt=e,e=Y(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,Wt()!==s&&(r=ae())!==s?(t.substr(Lt,2)===z?(n=z,Lt+=2):(n=s,0===Ot&&Ht(D)),n!==s?(jt=e,e=U(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,Wt()!==s&&(r=ae())!==s?(t.substr(Lt,2)===H?(n=H,Lt+=2):(n=s,0===Ot&&Ht(N)),n!==s?(jt=e,e=B(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,Wt()!==s&&(r=ae())!==s?(t.substr(Lt,2)===G?(n=G,Lt+=2):(n=s,0===Ot&&Ht(J)),n!==s?(jt=e,e=K(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,Wt()!==s&&(r=ae())!==s?(t.substr(Lt,2)===Q?(n=Q,Lt+=2):(n=s,0===Ot&&Ht(V)),n!==s?(jt=e,e=W(r)):(Lt=e,e=s)):(Lt=e,e=s)))))),Ot--,e===s&&0===Ot&&Ht($),e}function ne(){var e,r,n;return Ot++,e=Lt,(r=ae())!==s?(t.substr(Lt,3)===tt?(n=tt,Lt+=3):(n=s,0===Ot&&Ht(et)),n!==s?(jt=e,e=r=rt(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,(r=ae())!==s?(t.substr(Lt,3)===nt?(n=nt,Lt+=3):(n=s,0===Ot&&Ht(st)),n!==s?(jt=e,e=r=it(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,(r=ae())!==s?(t.substr(Lt,4)===at?(n=at,Lt+=4):(n=s,0===Ot&&Ht(ct)),n!==s?(jt=e,e=r=ot(r)):(Lt=e,e=s)):(Lt=e,e=s),e===s&&(e=Lt,(r=ae())!==s?(t.substr(Lt,4)===ut?(n=ut,Lt+=4):(n=s,0===Ot&&Ht(lt)),n!==s?(jt=e,e=r=ht(r)):(Lt=e,e=s)):(Lt=e,e=s)))),Ot--,e===s&&(r=s,0===Ot&&Ht(Z)),e}function se(){var t,e;return Ot++,t=Lt,Wt()!==s&&(e=ae())!==s?(jt=t,t=pt(e)):(Lt=t,t=s),Ot--,t===s&&0===Ot&&Ht(ft),t}function ie(){var e,r,n,i;if(Ot++,e=Lt,35===t.charCodeAt(Lt)?(r=gt,Lt++):(r=s,0===Ot&&Ht(mt)),r!==s){if(n=[],_t.test(t.charAt(Lt))?(i=t.charAt(Lt),Lt++):(i=s,0===Ot&&Ht(vt)),i!==s)for(;i!==s;)n.push(i),_t.test(t.charAt(Lt))?(i=t.charAt(Lt),Lt++):(i=s,0===Ot&&Ht(vt));else n=s;n!==s?(jt=e,e=r=yt()):(Lt=e,e=s)}else Lt=e,e=s;return e===s&&(e=Lt,(r=Kt())!==s&&(jt=e,r=wt(r)),(e=r)===s&&(e=Lt,(r=te())!==s&&(jt=e,r=xt()),e=r)),Ot--,e===s&&(r=s,0===Ot&&Ht(dt)),e}function ae(){var e,r,n,i,a,c,o,u;if(e=Lt,At.test(t.charAt(Lt))?(r=t.charAt(Lt),Lt++):(r=s,0===Ot&&Ht(bt)),r===s&&(r=null),r!==s){for(n=Lt,i=[],Mt.test(t.charAt(Lt))?(a=t.charAt(Lt),Lt++):(a=s,0===Ot&&Ht(Ct));a!==s;)i.push(a),Mt.test(t.charAt(Lt))?(a=t.charAt(Lt),Lt++):(a=s,0===Ot&&Ht(Ct));if(i!==s)if(46===t.charCodeAt(Lt)?(a=Et,Lt++):(a=s,0===Ot&&Ht(Ft)),a!==s){if(c=[],Mt.test(t.charAt(Lt))?(o=t.charAt(Lt),Lt++):(o=s,0===Ot&&Ht(Ct)),o!==s)for(;o!==s;)c.push(o),Mt.test(t.charAt(Lt))?(o=t.charAt(Lt),Lt++):(o=s,0===Ot&&Ht(Ct));else c=s;c!==s?n=i=[i,a,c]:(Lt=n,n=s)}else Lt=n,n=s;else Lt=n,n=s;if(n===s)if(n=[],Mt.test(t.charAt(Lt))?(i=t.charAt(Lt),Lt++):(i=s,0===Ot&&Ht(Ct)),i!==s)for(;i!==s;)n.push(i),Mt.test(t.charAt(Lt))?(i=t.charAt(Lt),Lt++):(i=s,0===Ot&&Ht(Ct));else n=s;if(n!==s){if(i=Lt,101===t.charCodeAt(Lt)?(a=Rt,Lt++):(a=s,0===Ot&&Ht(St)),a!==s)if(At.test(t.charAt(Lt))?(c=t.charAt(Lt),Lt++):(c=s,0===Ot&&Ht(bt)),c===s&&(c=null),c!==s){if(o=[],Mt.test(t.charAt(Lt))?(u=t.charAt(Lt),Lt++):(u=s,0===Ot&&Ht(Ct)),u!==s)for(;u!==s;)o.push(u),Mt.test(t.charAt(Lt))?(u=t.charAt(Lt),Lt++):(u=s,0===Ot&&Ht(Ct));else o=s;o!==s?i=a=[a,c,o]:(Lt=i,i=s)}else Lt=i,i=s;else Lt=i,i=s;i===s&&(i=null),i!==s?(jt=e,e=r=Tt()):(Lt=e,e=s)}else Lt=e,e=s}else Lt=e,e=s;return e}function ce(t,e){return t.map((function(t){return t[e]}))}function oe(t,e,r){return[t].concat(ce(e,r))}if((n=a())!==s&&Lt===t.length)return n;throw n!==s&&Lt<t.length&&Ht(Yt()),Nt(qt,$t<t.length?t.charAt($t):null,$t<t.length?Ut($t,$t+1):Ut($t,$t))}return t(e,Error),e.buildMessage=function(t,e){var r={literal:function(t){return'"'+s(t.text)+'"'},class:function(t){var e,r="";for(e=0;e<t.parts.length;e++)r+=t.parts[e]instanceof Array?i(t.parts[e][0])+"-"+i(t.parts[e][1]):i(t.parts[e]);return"["+(t.inverted?"^":"")+r+"]"},any:function(t){return"any character"},end:function(t){return"end of input"},other:function(t){return t.description}};function n(t){return t.charCodeAt(0).toString(16).toUpperCase()}function s(t){return t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function i(t){return t.replace(/\\/g,"\\\\").replace(/\]/g,"\\]").replace(/\^/g,"\\^").replace(/-/g,"\\-").replace(/\0/g,"\\0").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/[\x00-\x0F]/g,(function(t){return"\\x0"+n(t)})).replace(/[\x10-\x1F\x7F-\x9F]/g,(function(t){return"\\x"+n(t)}))}function a(t){return r[t.type](t)}function c(t){var e,r,n=new Array(t.length);for(e=0;e<t.length;e++)n[e]=a(t[e]);if(n.sort(),n.length>0){for(e=1,r=1;e<n.length;e++)n[e-1]!==n[e]&&(n[r]=n[e],r++);n.length=r}switch(n.length){case 1:return n[0];case 2:return n[0]+" or "+n[1];default:return n.slice(0,-1).join(", ")+", or "+n[n.length-1]}}function o(t){return t?'"'+s(t)+'"':"end of input"}return"Expected "+c(t)+" but "+o(e)+" found."},{SyntaxError:e,parse:r}}());const F={deg:1,grad:.9,rad:180/Math.PI,turn:360};const R={px:1,cm:96/2.54,mm:96/2.54/10,in:96,pc:16,pt:96/73};function S(t){!function(t){if("quantity"!==t.type||null!==t.unit&&"%"!==t.unit)throw new c("effect:type-error",`Expected <double> or <percentage>, Actual: ${C(t)}`,{term:t})}(t);const e=t.value;return E(e,t),"%"===t.unit?.01*e:e}function T(t){return function(t){if("quantity"!==t.type||null!==t.unit)throw new c("effect:type-error",`Expected <double>, Actual: ${C(t)}`,{term:t})}(t),E(t.value,t),t.value}function L(t){return function(t){if("quantity"!==t.type||(0!==t.value||null!==t.unit)&&null==R[t.unit])throw new c("effect:type-error",`Expected <length>, Actual: ${C(t)}`,{term:t})}(t),t.value*R[t.unit]||0}function j(t){switch(t.colorType){case"hex":return n(t.value);case"named":return k(t.value);case"function":return function(t){if(M(t.parameters,4),$.test(t.name))return[S(t.parameters[0]),S(t.parameters[1]),S(t.parameters[2]),t.parameters[3]?S(t.parameters[3]):1];if(q.test(t.name))return i(T(t.parameters[0]),S(t.parameters[1]),S(t.parameters[2]),t.parameters[3]?S(t.parameters[3]):1);throw new c("effect:syntax-error",`Invalid color function '${t.name}'`,{colorFunction:t})}(t.value)}}function k(t){const e=s(t);if(!e)throw new c("effect:unknown-color",`color '${t}' isn't valid`,{namedColor:t});return e}const $=/^rgba?/i,q=/^hsla?/i;class O{constructor(t=200){this.duration=t,this._from=null,this._to=null,this._final=null,this._current=[],this._time=0,this._effect="",this._effects=[],this._scale=0}get effect(){return this._effect}set effect(t){if(t=t||"",this._effect===t)return;this._effect=t;const e=function(t){if(!t)return[];if("string"==typeof t){const e=A(t);return e.error?e.error:[{scale:-1,effects:e.effects}]}const e=[];for(const r of t){if(!isFinite(r.scale)||r.scale<=0)return new c("effect:invalid-scale","scale must be finite and greater than 0",{stop:r});const t=A(r.value);if(t.error)return t.error;e.push({scale:r.scale,effects:t.effects})}e.sort(((t,e)=>e.effects.length-t.effects.length));for(let t=0;t<e.length-1;t++){if(!I(e[t].effects,e[t+1].effects))return new c("effect:interpolation-impossible","Cannot interpolate by scale between 2 lists of mixed effects",{a:e[t].effects,b:e[t+1].effects});X(e[t].effects,e[t+1].effects)}return e.sort(((t,e)=>e.scale-t.scale)),e}(t);Array.isArray(e)?this._transitionTo(e):(this._transitionTo([]),o.getLogger("esri.views.layers.effects.EffectList").warn("Invalid Effect",{effect:t,error:e}))}get hasEffects(){return this.transitioning||!!this._effects.length}get effects(){return this._effects}get scale(){return this._scale}get transitioning(){return null!==this._to}transitionStep(t,e){this._applyTimeTransition(t),this._updateForScale(e)}_transitionTo(e){this.scale>0&&function(t,e,r){var n,s,i,a;if(null==(n=t[0])||!n.effects||null==(s=e[0])||!s.effects)return!0;if((-1===(null==(i=t[0])?void 0:i.scale)||-1===(null==(a=e[0])?void 0:a.scale))&&(t.length>1||e.length>1)&&r<=0)return!1;return I(t[0].effects,e[0].effects)}(this._current,e,this.scale)?(this._final=e,this._to=t(e),function(t,e,r){var n,s;const i=t.length>e.length?t:e,a=t.length>e.length?e:t,c=a[a.length-1],o=null!=(n=null==c?void 0:c.scale)?n:r,u=null!=(s=null==c?void 0:c.effects)?s:[];for(let t=a.length;t<i.length;t++)a.push({scale:o,effects:[...u]});for(let t=0;t<i.length;t++)a[t].scale=-1===a[t].scale?r:a[t].scale,i[t].scale=-1===i[t].scale?r:i[t].scale,X(a[t].effects,i[t].effects)}(this._current,this._to,this.scale),this._from=t(this._current),this._time=0):(this._from=this._to=this._final=null,this._current=e),this._effects=this._current[0]?t(this._current[0].effects):[]}_applyTimeTransition(e){if(!this._to)return;this._time+=e;const r=Math.min(1,this._time/this.duration);for(let t=0;t<this._current.length;t++){const e=this._current[t],n=this._from[t],s=this._to[t];e.scale=Y(n.scale,s.scale,r);for(let t=0;t<e.effects.length;t++){const i=e.effects[t],a=n.effects[t],c=s.effects[t];i.interpolate(a,c,r)}}1===r&&(this._current=this._final,this._effects=this._current[0]?t(this._current[0].effects):[],this._from=this._to=this._final=null)}_updateForScale(t){if(0===this._current.length)return;this._scale=t;const e=this._current,r=this._current.length-1;let n,s,i=1;if(1===e.length||t>=e[0].scale)s=n=e[0].effects;else if(t<=e[r].scale)s=n=e[r].effects;else for(let a=0;a<r;a++){const r=e[a],c=e[a+1];if(r.scale>=t&&c.scale<=t){i=(t-r.scale)/(c.scale-r.scale),n=r.effects,s=c.effects;break}}for(let t=0;t<this._effects.length;t++){this._effects[t].interpolate(n[t],s[t],i)}}}function P(t){switch(t.type){case"grayscale":case"sepia":case"invert":return new g(t.type,0);case"saturate":case"brightness":case"contrast":return new g(t.type,1);case"opacity":return new v(1);case"hue-rotate":return new _(0);case"blur":return new d(0);case"drop-shadow":return new m(0,0,0,[...a("transparent")]);case"bloom":return new p(0,0,0)}}function I(t,e){const r=t.length>e.length?t:e;return(t.length>e.length?e:t).every(((t,e)=>t.type===r[e].type))}function X(t,e){const r=t.length>e.length?t:e,n=t.length>e.length?e:t;for(let t=n.length;t<r.length;t++)n.push(P(r[t]))}function Y(t,e,r){return t+(e-t)*r}const z=e("mapview-transitions-duration");class D extends r{constructor(){super(...arguments),this._childrenSet=new Set,this.children=[],this._effectList=null}get blendMode(){return this._blendMode}set blendMode(t){this._blendMode=t,this.requestRender()}get clips(){return this._clips}set clips(t){this._clips=t,this.children.forEach((e=>e.clips=t))}get computedEffects(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effects)?t:null}get effect(){var t,e;return null!=(t=null==(e=this._effectList)?void 0:e.effect)?t:""}set effect(t){(this._effectList||t)&&(this._effectList||(this._effectList=new O(z)),this._effectList.effect=t,this.requestRender())}updateTransitionProperties(t,e){super.updateTransitionProperties(t,e),this._effectList&&(this._effectList.transitionStep(t,e),this._effectList.transitioning&&this.requestRender())}doRender(t){const e=this.createRenderParams(t);this.renderChildren(e)}addChild(t){return this.addChildAt(t,this.children.length)}addChildAt(t,e=this.children.length){if(!t)return t;if(this.contains(t))return t;const r=t.parent;return r&&r!==this&&r.removeChild(t),e>=this.children.length?this.children.push(t):this.children.splice(e,0,t),this._childrenSet.add(t),t.parent=this,t.stage=this.stage,this!==this.stage&&(t.clips=this.clips),this.requestRender(),t}contains(t){return this._childrenSet.has(t)}removeAllChildren(){this._childrenSet.clear();for(const t of this.children)this!==this.stage&&(t.clips=null),t.stage=null,t.parent=null;this.children.length=0}removeChild(t){return this.contains(t)?this.removeChildAt(this.children.indexOf(t)):t}removeChildAt(t){if(t<0||t>=this.children.length)return null;const e=this.children.splice(t,1)[0];return this._childrenSet.delete(e),this!==this.stage&&(e.clips=null),e.stage=null,e.parent=null,e}sortChildren(t){return this.children.sort(t)}onAttach(){super.onAttach();const t=this.stage;for(const e of this.children)e.stage=t}onDetach(){super.onDetach();for(const t of this.children)t.stage=null}renderChildren(t){for(const e of this.children)e.beforeRender(t);for(const e of this.children)e.processRender(t);for(const e of this.children)e.afterRender(t)}createRenderParams(t){return{...t,blendMode:this.blendMode,effects:this.computedEffects,globalOpacity:t.globalOpacity*this.computedOpacity,inFadeTransition:this.inFadeTransition}}}export{D as C,O as E};
