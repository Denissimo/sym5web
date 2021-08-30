/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../core/Error.js";import{s as t}from"./object.js";import r,{F as s}from"../layers/support/FeatureReductionSelection.js";import o from"../layers/support/FeatureReductionCluster.js";const n={key:"type",base:s,typeMap:{selection:r}};function u(e,t){const s=(t=t.layerDefinition||t).featureReduction;if(s)switch(s.type){case"selection":return r.fromJSON(s);case"cluster":return o.fromJSON(s)}return null}function i(r,s,o,n){const u=function(t,r,s){if(!t)return null;if("selection"!==t.type)return s.messages&&s.messages.push(new e("featureReduction:unsupported",`FeatureReduction of type '${t.declaredClass}' are not supported in scenes.`,{featureReduction:t,context:s})),null;return t.write(r,s)}(r,{},n);u&&t(o,u,s)}export{n as a,u as r,i as w};
