// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(function(){return function(){function e(a){this.fields=a;this._fieldsMap=new Map;this._dateFieldsSet=new Set;this.dateFields=[];if(a){var d=[];for(const b of a)if(a=b&&b.name){const f=a.toLowerCase().trim();this._fieldsMap.set(a,b);this._fieldsMap.set(f,b);d.push(f);if("date"===b.type||"esriFieldTypeDate"===b.type)this.dateFields.push(b),this._dateFieldsSet.add(b)}d.sort();this.uid=d.join(",")}}var c=e.prototype;c.destroy=function(){this._fieldsMap.clear()};c.has=function(a){return null!=this.get(a)};
c.get=function(a){return null!=a?this._fieldsMap.get(a)||this._fieldsMap.get(a.toLowerCase().trim()):void 0};c.isDateField=function(a){return this._dateFieldsSet.has(this.get(a))};c.normalizeFieldName=function(a){if(a=this.get(a))return a.name};return e}()});