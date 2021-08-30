// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../../../chunks/vec3","../../../../../chunks/vec3f64","./viewUtils"],function(f,a,b,g){let k=function(){function h(){this.origin=b.create();this.start=b.create();this.end=b.create()}h.prototype.update=function(c,d,e){a.copy(this.start,c);a.copy(this.end,d);if(e)switch(e){case "start":a.copy(this.origin,this.start);break;case "center":g.midpoint([c,d],this.origin);break;case "end":a.copy(this.origin,this.end);break;default:a.copy(this.origin,e)}else g.midpoint([c,d],this.origin)};
return h}();f.LabelSegment=k;Object.defineProperty(f,"__esModule",{value:!0})});