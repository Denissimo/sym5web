/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import"./ArrayPool.js";import"../geometry/Extent.js";import"../core/lang.js";import"../rest/support/Query.js";import"./TileKey.js";function o(o,r,t,e){const l=o.clone(),s=1<<l.level,c=l.col+r,p=l.row+t;return e&&c<0?(l.col=c+s,l.world-=1):c>=s?(l.col=c-s,l.world+=1):l.col=c,l.row=p,l}export{o as g};
