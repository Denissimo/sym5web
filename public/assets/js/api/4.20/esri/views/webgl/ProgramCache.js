// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["./programUtils"],function(f){return function(){function e(a){this._programCacheByTemplate=new Map;this._rctx=a}var d=e.prototype;d.dispose=function(){this._programCacheByTemplate.forEach(a=>a.programs.forEach(b=>b.dispose()));this._programCacheByTemplate=null};d.getProgram=function(a,b){this._programCacheByTemplate.has(a)||this.addProgramTemplate(a,c=>f.createProgram(this._rctx,a,c));return this.getProgramTemplateInstance(a,b)};d.addProgramTemplate=function(a,b){this._programCacheByTemplate.set(a,
{constructor:b,programs:new Map})};d.getProgramTemplateInstance=function(a,b){if(a=this._programCacheByTemplate.get(a)){const c=b?JSON.stringify(b):"default";a.programs.has(c)||(b=a.constructor(b),a.programs.set(c,b));return a.programs.get(c)}return null};return e}()});