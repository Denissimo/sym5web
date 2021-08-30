// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../chunks/_rollupPluginBabelHelpers","../../../core/ObjectPool"],function(h,k){let g=function(){function e(a,b,c,d){this.set(a,b,c,d)}e.getId=function(a,b,c,d){return"object"===typeof a?`${a.level}/${a.row}/${a.col}/${a.world}`:`${a}/${b}/${c}/${d}`};var f=e.prototype;f.acquire=function(a,b,c,d){this.set(a,b,c,d)};f.contains=function(a){const b=a.level-this.level;return this.row===a.row>>b&&this.col===a.col>>b&&this.world===a.world};f.equals=function(a){return this.level===a.level&&
this.row===a.row&&this.col===a.col&&this.world===a.world};f.clone=function(){return new e(this)};f.release=function(){this.world=this.col=this.row=this.level=0};f.set=function(a,b,c,d){if(null==a)this.world=this.col=this.row=this.level=0;else if("object"===typeof a)this.level=a.level||0,this.row=a.row||0,this.col=a.col||0,this.world=a.world||0;else if("string"===typeof a){const [l,m,n,p]=a.split("/");this.level=parseFloat(l);this.row=parseFloat(m);this.col=parseFloat(n);this.world=parseFloat(p)}else this.level=
+a,this.row=+b,this.col=+c,this.world=+d||0;return this};f.toString=function(){return`${this.level}/${this.row}/${this.col}/${this.world}`};f.getParentKey=function(){return 0>=this.level?null:new e(this.level-1,this.row>>1,this.col>>1,this.world)};f.getChildKeys=function(){const a=this.level+1,b=this.row<<1,c=this.col<<1,d=this.world;return[new e(a,b,c,d),new e(a,b,c+1,d),new e(a,b+1,c,d),new e(a,b+1,c+1,d)]};f.compareRowMajor=function(a){return this.row<a.row?-1:this.row>a.row?1:this.col<a.col?-1:
this.col>a.col?1:0};h._createClass(e,[{key:"key",get:function(){return this}},{key:"id",get:function(){return this.toString()},set:function(a){this.set(a)}}]);return e}();g.pool=new k(g,null,null,25,50);return g});