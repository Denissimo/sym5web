// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports"],function(f){let h=function(){function d(a,b){this.x=a;this.y=b}var c=d.prototype;c.clone=function(){return new d(this.x,this.y)};c.equals=function(a,b){return a===this.x&&b===this.y};c.isEqual=function(a){return a.x===this.x&&a.y===this.y};c.setCoords=function(a,b){this.x=a;this.y=b};c.normalize=function(){var a=this.x;const b=this.y;a=Math.sqrt(a*a+b*b);this.x/=a;this.y/=a};c.rightPerpendicular=function(){const a=this.x;this.x=this.y;this.y=-a};c.move=function(a,b){this.x+=a;this.y+=
b};c.assign=function(a){this.x=a.x;this.y=a.y};c.assignAdd=function(a,b){this.x=a.x+b.x;this.y=a.y+b.y};c.assignSub=function(a,b){this.x=a.x-b.x;this.y=a.y-b.y};c.rotate=function(a,b){const e=this.x,g=this.y;this.x=e*a-g*b;this.y=e*b+g*a};c.scale=function(a){this.x*=a;this.y*=a};c.length=function(){const a=this.x,b=this.y;return Math.sqrt(a*a+b*b)};d.distance=function(a,b){const e=b.x-a.x;a=b.y-a.y;return Math.sqrt(e*e+a*a)};d.add=function(a,b){return new d(a.x+b.x,a.y+b.y)};d.sub=function(a,b){return new d(a.x-
b.x,a.y-b.y)};return d}();f.Point=h;Object.defineProperty(f,"__esModule",{value:!0})});