// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(d){const e=(()=>{if("function"===typeof Element.prototype.closest)return(b,c)=>b.closest(c);const a=Element.prototype.matches||Element.prototype.msMatchesSelector;return(b,c)=>{do{if(a.call(b,c))return b;b=b.parentElement}while(null!==b&&1===b.nodeType);return null}})();d.byId=function(a){return"string"===typeof a?document.getElementById(a):a};d.closest=e;d.empty=function(a){for(;a.hasChildNodes();)a.removeChild(a.firstChild)};d.insertAfter=function(a,b){const c=b.parentNode;
c&&(c.lastChild===b?c.appendChild(a):c.insertBefore(a,b.nextSibling))};d.insertBefore=function(a,b){const c=b.parentNode;c&&c.insertBefore(a,b)};d.remove=function(a){a.parentNode&&a.parentNode.removeChild(a)};d.reparent=function(a,b){for(;;){const c=a.firstChild;if(!c)break;b.appendChild(c)}};Object.defineProperty(d,"__esModule",{value:!0})});