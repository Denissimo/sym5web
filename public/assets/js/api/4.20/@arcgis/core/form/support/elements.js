/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{a as t}from"../../chunks/ensureType.js";import{_ as e}from"../../chunks/tslib.es6.js";import{property as s}from"../../core/accessorSupport/decorators/property.js";import{clone as i}from"../../core/lang.js";import"../../chunks/Logger.js";import{subclass as o}from"../../core/accessorSupport/decorators/subclass.js";import r,{E as p}from"../elements/FieldElement.js";import{a as n}from"../../chunks/JSONSupport.js";import a from"../../popup/support/RelatedRecordsInfoFieldOrder.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../elements/support/inputs.js";import"../elements/inputs/BarcodeScannerInput.js";import"../elements/inputs/TextInput.js";import"../elements/inputs/Input.js";import"../elements/inputs/ComboBoxInput.js";import"../elements/inputs/DateTimePickerInput.js";import"../../chunks/reader.js";import"../../chunks/writer.js";import"../elements/inputs/RadioButtonsInput.js";import"../elements/inputs/SwitchInput.js";import"../elements/inputs/TextAreaInput.js";import"../elements/inputs/TextBoxInput.js";import"../../chunks/domains.js";import"../../layers/support/CodedValueDomain.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../layers/support/Domain.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../chunks/write.js";import"../../layers/support/InheritedDomain.js";import"../../layers/support/RangeDomain.js";var u;let l=u=class extends n{constructor(t){super(t),this.type=null}clone(){return new u({type:this.type})}};e([s({type:["attachment","audio","document","image","signature","video"],json:{write:!0}})],l.prototype,"type",void 0),l=u=e([o("esri.form.elements.inputs.AttachmentInput")],l);var m,y=l;let c=m=class extends p{constructor(t){super(t),this.attachmentKeyword=null,this.editable=!0,this.input=null,this.type="attachment"}clone(){return new m({attachmentKeyword:this.attachmentKeyword,description:this.description,editable:this.editable,input:this.input,label:this.label,visibilityExpression:this.visibilityExpression})}};e([s({type:String,json:{write:!0}})],c.prototype,"attachmentKeyword",void 0),e([s({type:Boolean,json:{write:!0}})],c.prototype,"editable",void 0),e([s({type:y,json:{read:{source:"inputType"},write:{target:"inputType"}}})],c.prototype,"input",void 0),e([s({type:["attachment"],json:{read:!1,write:!0}})],c.prototype,"type",void 0),c=m=e([o("esri.form.elements.AttachmentElement")],c);var d,h=c;let j=d=class extends p{constructor(t){super(t),this.displayCount=null,this.displayType="list",this.editable=!0,this.orderByFields=null,this.relationshipId=null,this.type="relationship"}clone(){return new d({description:this.description,displayCount:this.displayCount,displayType:this.displayType,editable:this.editable,label:this.label,orderByFields:i(this.orderByFields),relationshipId:this.relationshipId,visibilityExpression:this.visibilityExpression})}};e([s({type:Number,json:{write:!0}})],j.prototype,"displayCount",void 0),e([s({type:["list"],json:{write:!0}})],j.prototype,"displayType",void 0),e([s({type:Boolean,json:{write:!0}})],j.prototype,"editable",void 0),e([s({type:[a],json:{write:!0}})],j.prototype,"orderByFields",void 0),e([s({type:Number,json:{write:!0}})],j.prototype,"relationshipId",void 0),e([s({type:["relationship"],json:{read:!1,write:!0}})],j.prototype,"type",void 0),j=d=e([o("esri.form.elements.RelationshipElement")],j);var b=j;function f(t){return{typesWithGroup:{base:p,key:"type",typeMap:{attachment:h,field:r,group:t,relationship:b}},typesWithoutGroup:{base:p,key:"type",typeMap:{attachment:h,field:r,relationship:b}}}}function k(t,e,s=!0){if(!t)return null;const i=s?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>i[t.type])).map((t=>i[t.type].fromJSON(t)))}function w(t,e,s=!0){if(!t)return null;const i=s?e.typesWithGroup.typeMap:e.typesWithoutGroup.typeMap;return t.filter((t=>i[t.type])).map((t=>t.toJSON()))}function v(e,s,i=!0){return e?e.map((e=>t(i?s.typesWithGroup:s.typesWithoutGroup,e))):null}export{f as buildTypeMaps,v as ensureType,k as fromJSON,w as toJSON};
