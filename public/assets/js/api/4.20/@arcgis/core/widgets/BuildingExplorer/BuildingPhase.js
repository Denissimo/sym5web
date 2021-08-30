/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as s}from"../../chunks/tslib.es6.js";import{i as e}from"../../core/lang.js";import{property as t}from"../../core/accessorSupport/decorators/property.js";import"../../chunks/ensureType.js";import"../../chunks/Logger.js";import{subclass as r}from"../../core/accessorSupport/decorators/subclass.js";import{B as i,e as o,h as l,i as a}from"../../chunks/filterUtils.js";import"../../chunks/metadata.js";import"../../chunks/handleUtils.js";import"../../config.js";import"../../chunks/object.js";import"../../chunks/string.js";import"../../chunks/Message.js";import"../../core/Accessor.js";import"../../chunks/deprecate.js";import"../../chunks/ArrayPool.js";import"../../chunks/arrayUtils.js";import"../../core/scheduling.js";import"../../core/promiseUtils.js";import"../../core/Error.js";import"../../core/Collection.js";import"../../chunks/Evented.js";import"../../chunks/collectionUtils.js";import"../../core/Handles.js";import"../../chunks/uuid.js";import"../../chunks/BuildingFilterBlock.js";import"../../chunks/JSONSupport.js";import"../../chunks/write.js";import"../../chunks/enumeration.js";import"../../chunks/jsonMap.js";import"../../chunks/utils.js";import"../../symbols/edges/Edges3D.js";import"../../Color.js";import"../../chunks/colorUtils.js";import"../../chunks/mathUtils.js";import"../../chunks/screenUtils.js";import"../../chunks/materialUtils.js";import"../../chunks/opacityUtils.js";import"../../symbols/edges/SketchEdges3D.js";import"../../symbols/edges/SolidEdges3D.js";let n=class extends i{constructor(){super(...arguments),this._createdPhaseFieldName=null,this._demolishedPhaseFieldName=null,this._parseValueFromFilter=s=>{const e=this._createdPhaseFieldName,t=new RegExp(`${e}\\s*<=\\s*(\\d+)\\s*OR\\s*${e}\\s*IS\\s*NULL`,"gi"),r=this._demolishedPhaseFieldName,i=new RegExp(`${r}\\s*>\\s*(\\d+)\\s*OR\\s*${r}\\s*IS\\s*NULL`,"gi");for(const{filterExpression:e}of s.filterBlocks.items){var o;const s=null!=(o=t.exec(e))?o:i.exec(e);if(s)return parseInt(s[1],10)}return null}}get filterExpressions(){if(!this.enabled)return{solid:null,xRay:null};const s=[],e=this._createdPhaseFieldName;e&&s.push(`(${e} <= ${this.value} OR ${e} IS NULL)`);const t=this._demolishedPhaseFieldName;t&&s.push(`(${t} > ${this.value} OR ${t} IS NULL)`);const r=s.join(" AND ");return{solid:r,xRay:r}}get _lastValue(){const s=this.allowedValues;return s.length>0?s[s.length-1]:0}_setup(){const s=[];this.layers.forEach((t=>{const r=o(t,"createdphase");e(r)&&(this._createdPhaseFieldName=r.fieldName,s.push(r));const i=o(t,"demolishedphase");e(i)&&(this._demolishedPhaseFieldName=i.fieldName,s.push(i))})),this._domainInfo=l(s);const t=a(this.layers,this._parseValueFromFilter);this.allowedValues.length>0?this.select(e(t)?t:this._lastValue):this.clear()}};s([t({readOnly:!0})],n.prototype,"filterExpressions",null),s([t()],n.prototype,"_createdPhaseFieldName",void 0),s([t()],n.prototype,"_demolishedPhaseFieldName",void 0),s([t({readOnly:!0})],n.prototype,"_lastValue",null),n=s([r("esri.widgets.BuildingExplorer.BuildingPhase")],n);var c=n;export default c;
