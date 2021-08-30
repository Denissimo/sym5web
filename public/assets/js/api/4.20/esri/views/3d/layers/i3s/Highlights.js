// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../../../../core/arrayUtils"],function(g){let h=function(){this.ids=new Set;this.paused=!1};return function(){function f({collection:a,forAllFeatures:b,forAllFeaturesOfNode:c}){this.highlights=[];this.collection=a;this.forAllFeatures=b;this.forAllFeaturesOfNode=c}var d=f.prototype;d.destroy=function(){this.highlights.forEach(a=>this.releaseSet(a));this.highlights=null};d.acquireSet=function(){const a=new h;this.highlights.push(a);return{set:a,handle:{remove:()=>{this.releaseSet(a);g.removeUnordered(this.highlights,
a)},pause:()=>{this.releaseSet(a);a.paused=!0},resume:()=>{a.paused=!1;this.initializeSet(a)}}}};d.setFeatureIds=function(a,b){b.forEach(c=>a.ids.add(c));this.initializeSet(a)};d.initializeSet=function(a){this.forAllFeatures((b,c,e)=>{a.ids.has(b)&&this.collection.addComponentHighlight(e.objectHandle,c);return 1})};d.releaseSet=function(a){this.forAllFeatures((b,c,e)=>{a.ids.has(b)&&this.collection.removeComponentHighlight(e.objectHandle,c);return 1})};d.objectCreated=function(a){this.highlights.forEach(b=>
{b.paused||this.forAllFeaturesOfNode(a,(c,e)=>{b.ids.has(c)&&this.collection.addComponentHighlight(a.objectHandle,e);return 1})})};d.objectDeleted=function(a){this.collection.clearHighlights(a.objectHandle)};return f}()});