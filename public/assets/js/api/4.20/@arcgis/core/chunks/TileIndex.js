/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{isAbortError as e}from"../core/promiseUtils.js";import{T as t}from"./TilemapCache.js";import{T as l}from"./TileKey.js";class r{constructor(e){if(e instanceof t)this._tilemapCache=e;else{if(!e||!("index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}dataKey(t,r){if(this._tilemapCache){const{level:i,row:o,col:a}=t,s=new l(t);return this._tilemapCache.fetchAvailabilityUpsample(i,o,a,s,r).then((()=>(s.world=t.world,s))).catch((t=>{if(e(t))throw t;return null}))}return this._getIndexedDataKey(t)}forEach(e,t,l,r,i){this._callback=i,this._maxLevel=t+e,this._forEach(this._tilemap,t,l,r)}_forEach(e,t,l,r){0!==e&&(this._callback(t,l,r),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*l,2*r),this._forEach(e[1],t+1,2*l,2*r+1),this._forEach(e[2],t+1,2*l+1,2*r),this._forEach(e[3],t+1,2*l+1,2*r+1)))}_getIndexedDataKey(e){const t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return Promise.resolve(null);let r=e;for(;0!==r.level;)r=new l(r.level-1,r.row>>1,r.col>>1,r.world),t.push(r);let i,o,a=this._tilemap,s=t.pop();if(1===a)return Promise.resolve(s);for(;t.length;)if(i=t.pop(),o=(1&i.col)+((1&i.row)<<1),a){if(0===a[o]){s=null;break}if(1===a[o]){s=i;break}s=i,a=a[o]}return Promise.resolve(s)}}export{r as T};
