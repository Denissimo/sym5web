// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../../core/Handles ../../../core/maybe ../../../core/accessorSupport/trackingUtils ./constants ./HoveredPoints ./InputRepresentation2D".split(" "),function(e,k,d,f,l,m,n){let r=function(){function g(b,c){this._handles=new k;this._inputRepresentation=new n.InputRepresentation2D({view:b});this._hoveredPoints=new m.HoveredPoints({view:b});this._handles.add([f.reactionInit(()=>c.viewModel.hoveredPoints,a=>this._hoveredPoints.update(a)),f.reactionInit(()=>{const {state:a,highlightEnabled:p,
viewModel:q}=c;return{input:q.input,state:a,highlightEnabled:p}},a=>this._updateInputRepresentation(a))])}var h=g.prototype;h.destroy=function(){this._handles=d.destroyMaybe(this._handles);this._inputRepresentation=d.destroyMaybe(this._inputRepresentation);this._hoveredPoints=d.destroyMaybe(this._hoveredPoints)};h._updateInputRepresentation=function({input:b,state:c,highlightEnabled:a}){c===l.ElevationProfileState.Selected&&a?this._inputRepresentation.update(b):this._inputRepresentation.remove()};
return g}();e.ElevationProfileView2D=r;Object.defineProperty(e,"__esModule",{value:!0})});