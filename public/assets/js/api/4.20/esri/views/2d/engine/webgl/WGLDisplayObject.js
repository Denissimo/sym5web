// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["./WGLDisplayRecord","./util/serializationUtils"],function(g,e){return function(){function b(a){this.insertAfter=null;this.id=a;this.displayRecords=[]}var c=b.prototype;c.copy=function(){const a=new b(this.id);a.set(this);return a};c.clone=function(){const a=new b(this.id);a.displayRecords=this.displayRecords.map(d=>d.clone());a.insertAfter=this.insertAfter;return a};c.set=function(a){this.id=a.id;this.displayRecords=a.displayRecords;this.insertAfter=a.insertAfter};c.serialize=function(a){a.push(this.id);
e.serializeList(a,this.displayRecords);return a};b.deserialize=function(a){const d=a.readInt32(),f=new b(d);f.displayRecords=e.deserializeList(a,g,{id:d});return f};return b}()});