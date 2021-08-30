/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as e}from"./tslib.es6.js";import"../core/accessorSupport/decorators/property.js";import"../core/lang.js";import"./ensureType.js";import"./Logger.js";import{subclass as i}from"../core/accessorSupport/decorators/subclass.js";import{B as t}from"./BitmapTileContainer.js";const r=r=>{let s=class extends r{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new t(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()}};return s=e([i("esri.views.2d.layers.BitmapTileLayerView2D")],s),s};export{r as B};
