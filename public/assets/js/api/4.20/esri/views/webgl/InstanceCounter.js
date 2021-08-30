// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","./enums"],function(g,h,e){let k=function(){function f(){this._current=[];this._max=[];for(this._allocations=new Map;this._current.length<e.ResourceType.COUNT;)this._current.push(0),this._max.push(0)}var c=f.prototype;c.resetMax=function(){for(this._max.length=0;this._max.length<this._current.length;)this._max.push(0)};c.increment=function(a,b){b=++this._current[a];this._max[a]=Math.max(b,this._max[a])};c.decrement=function(a,b){--this._current[a]};
c.printResourceCount=function(){if(0<this.total){console.log("Live objects:");for(let a=0;a<e.ResourceType.COUNT;++a){const b=this._current[a];0<b&&console.log(`${e.ResourceType[a]}: ${b}`)}}if(0<this._allocations.size){console.log(`${this._allocations.size} live object allocations:`);const a=new Map;this._allocations.forEach(b=>{var d;a.set(b,(null!=(d=a.get(b))?d:0)+1)});a.forEach((b,d)=>console.log(b," : ",d))}};h._createClass(f,[{key:"max",get:function(){return this._max}},{key:"current",get:function(){return this._current}},
{key:"total",get:function(){return this.current.reduce((a,b)=>a+b,0)}}]);return f}();g.InstanceCounter=k;Object.defineProperty(g,"__esModule",{value:!0})});