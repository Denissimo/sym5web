// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["../chunks/_rollupPluginBabelHelpers","../core/promiseUtils"],function(e,f){return function(){function c(){this._password=this._username="";this._token=null}c.fromUserName=function(a,b){const d=new c;d._username=a;d._password=b;d._token=null;return d};c.fromArcadeDictionary=function(a){const b=new c;a.hasField("username")&&(b._username=a.field("username"));a.hasField("password")&&(b._password=a.field("password"));a.hasField("token")&&(b._token=a.field("token"));return b};c.fromToken=function(a){const b=
new c;b._token=a;return b};c.prototype.getToken=function(){return f.create((a,b)=>{null===this._token?b("No Token Provided"):a(this._token)})};e._createClass(c,[{key:"username",get:function(){return this._username}},{key:"password",get:function(){return this._password}}]);return c}()});