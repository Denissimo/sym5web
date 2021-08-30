// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../../../chunks/_rollupPluginBabelHelpers ../../../chunks/tslib.es6 ../../../core/accessorSupport/decorators/property ../../../core/has ../../../core/accessorSupport/ensureType ../../../core/Logger ../../../core/jsonMap ../../../core/accessorSupport/decorators/subclass ./Column".split(" "),function(r,g,h,f,y,z,A,v,w){f=function(u){function t(m){var a=u.call(this,m)||this;a.activeEditInfo=null;a.cellValueValidatorFunction=({oldValue:c,value:b})=>c!==b;a.editable=!1;a.inputRenderFunction=({root:c,
column:b,rowData:d})=>{var e,k;if((null==(e=a.activeEditInfo)||!e.updating)&&a.editable){var l=a.getCellValue(b,d);e=a.createInputElement({root:c,column:b,rowData:d,value:l});a._set("activeEditInfo",{column:b,input:e,root:c,rowData:d,updating:!0,oldValue:l});b=a.createInputContainer();b.appendChild(e);a.removeCellContent(c);c.appendChild(b);e.focus();e instanceof HTMLInputElement&&e.select();null==(k=a.grid)?void 0:k.notifyResize()}};a.loadingMessage="";a.inputType="text";a.maxLength=null;a.parseInputValueFunction=
({input:c})=>c.value;a.renderFunction=c=>{var b;const {root:d,column:e,rowData:k}=c;var {activeEditInfo:l}=r._assertThisInitialized(a);if(!l||!l.updating){l=a.getCellValue(e,k);l=a.cellValueFormatFunction({column:e,rowData:k,value:l});d.onclick=()=>d.focus();d.ondblclick=()=>a.inputRenderFunction(c);d.ontouchend=()=>a.inputRenderFunction(c);var p=null==(b=a.grid)?void 0:b.getSlotElementByName(d.slot);(b=null==p?void 0:p.parentElement)&&!b.onkeydown&&(b.onkeydown=n=>{"Enter"!==n.key||a.activeEditInfo||
a.inputRenderFunction(c);"Escape"===n.key&&a.activeEditInfo&&a.cancel()});(null==l?void 0:l.toString())!==d.innerHTML&&(d.innerHTML=l)}};a.required=!1;a.store=null;a.updateRowItemFunction=({rowData:c,column:b,value:d})=>{c.item[b.path]=d};a.updateStoreItemFunction=({rowData:c,column:b,value:d})=>{var e;return null==(e=a.store)?void 0:e.updateItem({index:c.index,name:b.path,value:d})};return a}r._inheritsLoose(t,u);var q=t.prototype;q.cancel=function(){var m,{activeEditInfo:a}=this;if(a){var {column:c,
root:b,rowData:d,oldValue:e}=a;this._set("activeEditInfo",null);a=this.cellValueFormatFunction({column:c,rowData:d,value:e});b.innerHTML=a;null==(m=this.grid)?void 0:m.notifyResize()}};q.createInputContainer=function(){const m=document.createElement("div");m.classList.add("esri-editor-column__cell-input--container");return m};q.createInputElement=function({value:m}){const a=document.createElement("input");a.classList.add("esri-editor-column__cell-input");a.maxLength=this.maxLength;a.type=this.inputType;
a.value=m;a.onblur=()=>{a.onblur=null;this.submit()};return a};q.submit=function(){var m=r._asyncToGenerator(function*(){var a,{activeEditInfo:c}=this;if(c){var {column:b,input:d,root:e,rowData:k,oldValue:l}=c;c=this.parseInputValueFunction({input:d,column:b,rowData:k});if(this.cellValueValidatorFunction({value:c,oldValue:l,column:b,rowData:k})){e.innerHTML=this.loadingMessage;null==(a=this.grid)?void 0:a.notifyResize();try{var p;yield this.updateStoreItemFunction({rowData:k,column:b,value:c});this.updateRowItemFunction({rowData:k,
column:b,value:c});const n=this.getCellValue(b,k),x=this.cellValueFormatFunction({column:b,rowData:k,value:n});e.innerHTML=x;this.emit("value-change",{column:b,rowData:k,value:n});this._set("activeEditInfo",null);null==(p=this.grid)?void 0:p.notifyResize()}catch(n){this.cancel()}}else this.cancel()}});return function(){return m.apply(this,arguments)}}();return t}(w);g.__decorate([h.property({readOnly:!0})],f.prototype,"activeEditInfo",void 0);g.__decorate([h.property()],f.prototype,"cellValueValidatorFunction",
void 0);g.__decorate([h.property()],f.prototype,"editable",void 0);g.__decorate([h.property()],f.prototype,"inputRenderFunction",void 0);g.__decorate([h.property({constructOnly:!0})],f.prototype,"loadingMessage",void 0);g.__decorate([h.property()],f.prototype,"inputType",void 0);g.__decorate([h.property()],f.prototype,"maxLength",void 0);g.__decorate([h.property()],f.prototype,"parseInputValueFunction",void 0);g.__decorate([h.property()],f.prototype,"renderFunction",void 0);g.__decorate([h.property()],
f.prototype,"required",void 0);g.__decorate([h.property()],f.prototype,"store",void 0);g.__decorate([h.property()],f.prototype,"updateRowItemFunction",void 0);g.__decorate([h.property()],f.prototype,"updateStoreItemFunction",void 0);return f=g.__decorate([v.subclass("esri.widgets.FeatureTable.EditorColumn")],f)});