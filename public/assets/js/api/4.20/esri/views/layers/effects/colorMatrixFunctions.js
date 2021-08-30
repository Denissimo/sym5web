// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/mat4"],function(e,c){e.brightness=(b,a)=>{b=c.set(b,a,0,0,0,0,a,0,0,0,0,a,0,0,0,0,1);return c.transpose(b,b)};e.contrast=(b,a)=>{b=c.set(b,a,0,0,.5-.5*a,0,a,0,.5-.5*a,0,0,a,.5-.5*a,0,0,0,1);return c.transpose(b,b)};e.grayscale=(b,a)=>{a=1-a;b=c.set(b,.2126+.7874*a,.7152-.7152*a,.0722-.0722*a,0,.2126-.2126*a,.7152+.2848*a,.0722-.0722*a,0,.2126-.2126*a,.7152-.7152*a,.0722+.9278*a,0,0,0,0,1);return c.transpose(b,b)};e.invert=(b,a)=>{const d=1-2*a;b=c.set(b,d,0,0,a,
0,d,0,a,0,0,d,a,0,0,0,1);return c.transpose(b,b)};e.rotateHue=(b,a)=>{const d=Math.sin(a*Math.PI/180);a=Math.cos(a*Math.PI/180);b=c.set(b,.213+.787*a-.213*d,.715-.715*a-.715*d,.072-.072*a+.928*d,0,.213-.213*a+.143*d,.715+.285*a+.14*d,.072-.072*a-.283*d,0,.213-.213*a-.787*d,.715-.715*a+.715*d,.072+.928*a+.072*d,0,0,0,0,1);return c.transpose(b,b)};e.saturate=(b,a)=>{b=c.set(b,.213+.787*a,.715-.715*a,.072-.072*a,0,.213-.213*a,.715+.285*a,.072-.072*a,0,.213-.213*a,.715-.715*a,.072+.928*a,0,0,0,0,1);return c.transpose(b,
b)};e.sepia=(b,a)=>{a=1-a;b=c.set(b,.393+.607*a,.769-.769*a,.189-.189*a,0,.349-.349*a,.686+.314*a,.168-.168*a,0,.272-.272*a,.534-.534*a,.131+.869*a,0,0,0,0,1);return c.transpose(b,b)};Object.defineProperty(e,"__esModule",{value:!0})});