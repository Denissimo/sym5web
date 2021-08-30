// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/maybe","../../../chunks/vec4f64"],function(g,k,b,l){let p=function(){function f(a){this._getFadeDuration=a;this._delayedTime=this._fadeStart=0}var d=f.prototype;d.clear=function(){this._current=b.destroyMaybe(this._current);this._next=b.destroyMaybe(this._next);this._waiting=b.destroyMaybe(this._waiting);this._delayed=b.destroyMaybe(this._delayed)};d.push=function(a,c,e,m,n=0){this._delayed=b.destroyMaybe(this._delayed);
a=b.isSome(a)?new h(a,c,e,m):null;this._push(a,n)};d._push=function(a,c){this._isFading||this.clear();if(b.isNone(this._current))this._current=a;else{var e=performance.now();0!==c?(this._delayed=a,this._delayedTime=e+c):b.isNone(this._next)?(this._next=a,this._fadeStart=this._alignFadeStart(e)):b.isNone(a)||(b.destroyMaybe(this._waiting),this._waiting=a)}};d._alignFadeStart=function(a){const c=this._getFadeDuration();return a+c-a%c};k._createClass(f,[{key:"current",get:function(){if(b.isNone(this._current))return null;
if(!this._isFading){var a=this._delayed||this._waiting||this._next||this._current;a!==this._current&&(this._current=null,this.clear(),this._current=a)}a=0;b.isSome(this._delayed)&&(a=performance.now(),a>=this._delayedTime&&(this._push(this._delayed,0),this._delayed=null));b.isSome(this._next)&&(a=a||performance.now(),a-this._fadeStart>=this._fadeDuration&&(b.destroyMaybe(this._current),this._current=this._next,this._next=this._waiting,this._waiting=null,this._fadeStart=this._alignFadeStart(a)));return this._current}},
{key:"next",get:function(){return this._next}},{key:"fadeFactor",get:function(){if(b.isNone(this._next))return 1;const a=Math.max(0,performance.now()-this._fadeStart),c=this._fadeDuration;return a>c?0:1-a/c}},{key:"isFading",get:function(){return b.isSome(this._next)||b.isSome(this._delayed)}},{key:"_fadeDuration",get:function(){return b.isNone(this._waiting)?this._getFadeDuration():.5*this._getFadeDuration()}},{key:"_isFading",get:function(){return 0<this._getFadeDuration()}}]);return f}(),h=function(){function f(d,
a,c,e){this.texture=d;d.retain();this.offsetAndScale=l.fromValues(a,c,e,e)}f.prototype.destroy=function(){this.texture.release()};return f}();g.TextureReference=h;g.default=p;Object.defineProperty(g,"__esModule",{value:!0})});