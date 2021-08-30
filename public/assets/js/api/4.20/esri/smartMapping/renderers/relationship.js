// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../core/Error ../../core/lang ../../core/maybe ../../intl/messages ../../renderers/support/AuthoringInfo ../../renderers/support/AuthoringInfoClassBreakInfo ../../renderers/support/AuthoringInfoFieldInfo ./type ./support/utils ../support/adapters/support/layerUtils ../../chunks/relationship ../../symbols/support/utils".split(" "),function(w,n,h,N,x,O,P,H,I,Q,t,J,u,R){function S(a){return y.apply(this,arguments)}function y(){y=n._asyncToGenerator(function*(a){if(!(a&&
a.layer&&a.view&&a.field1&&a.field2))throw new h("relationship-renderer:missing-parameters","'layer', 'view', 'field1' and 'field2' parameters are required");const b={...a};b.symbolType=b.symbolType||"2d";b.defaultSymbolEnabled=null==b.defaultSymbolEnabled?!0:b.defaultSymbolEnabled;b.classificationMethod=b.classificationMethod||"quantile";b.numClasses=b.numClasses||3;b.focus=b.focus||null;if(-1===T.indexOf(b.classificationMethod))throw new h("relationship-renderer:invalid-parameters",`classification method ${b.classificationMethod} is not supported`);
if(2>b.numClasses||4<b.numClasses)throw new h("relationship-renderer:invalid-parameters","'numClasses' must be 2, 3 or 4");if(a.focus&&-1===U.indexOf(a.focus))throw new h("relationship-renderer:invalid-parameters","'focus' must be 'HH', 'HL', 'LH', 'LL' or null");var c=[0,2,1,3,5];a=J.createLayerAdapter(b.layer,c);b.layer=a;if(!a)throw new h("relationship-renderer:invalid-parameters","'layer' must be one of these types: "+J.getLayerTypeLabels(c).join(", "));c=x.isSome(b.signal)?{signal:b.signal}:
null;yield a.load(c);c=a.geometryType;const d=-1<b.symbolType.indexOf("3d");b.outlineOptimizationEnabled="polygon"===c?b.outlineOptimizationEnabled:!1;b.sizeOptimizationEnabled="point"===c||"multipoint"===c||"polyline"===c?b.sizeOptimizationEnabled:!1;if("mesh"===c)b.symbolType="3d-volumetric",b.colorMixMode=b.colorMixMode||"replace",b.edgesType=b.edgesType||"none";else{if("3d-volumetric-uniform"===b.symbolType&&"point"!==c)throw new h("relationship-renderer:not-supported","3d-volumetric-uniform symbols are supported for point layers only");
if(d&&"polygon"===c)throw new h("relationship-renderer:not-supported","3d symbols are not supported for polygon layers");if(-1<b.symbolType.indexOf("3d-volumetric")&&(!b.view||"3d"!==b.view.type))throw new h("relationship-renderer:invalid-parameters","'view' parameter should be an instance of SceneView when 'symbolType' parameter is '3d-volumetric' or '3d-volumetric-uniform'");}const {field1:e,field2:f}=b;c=[e.field,f.field];e.normalizationField&&c.push(e.normalizationField);f.normalizationField&&
c.push(f.normalizationField);if(a=t.verifyBasicFieldValidity(a,c,"relationship-renderer:invalid-parameters"))throw a;return b});return y.apply(this,arguments)}function V(a){return z.apply(this,arguments)}function z(){z=n._asyncToGenerator(function*(a){if(!(a&&a.renderer&&a.numClasses))throw new h("update-relationship-renderer:missing-parameters","'renderer' and 'numClasses' parameters are required");const {field1:b,field2:c,renderer:d,numClasses:e,colors:f}=a,g=e**2;if((b||c)&&!(b&&c&&b.field&&c.field))throw new h("update-relationship-renderer:missing-parameters",
"'field1' and 'field2' parameters are required");if(b&&!b.classBreakInfos||c&&!c.classBreakInfos)throw new h("update-relationship-renderer:missing-parameters","'field1.classBreakInfos' and 'field2.classBreakInfos' are required");if(!d.authoringInfo)throw new h("update-relationship-renderer:missing-parameters","'renderer.authoringInfo' is required");if(d.uniqueValueInfos.length!==g)throw new h("update-relationship-renderer:invalid-parameters",`Renderer must have ${g} unique value infos to support ${e} classes`);
if(f&&f.length!==g)throw new h("update-relationship-renderer:invalid-parameters",`The scheme must have ${g} colors`);return a});return z.apply(this,arguments)}function W(a){return A.apply(this,arguments)}function A(){A=n._asyncToGenerator(function*(a){let b=a.relationshipScheme,c=null;var d=null;d=yield t.getBasemapInfo(a.basemap,a.view);c=x.isSome(d.basemapId)?d.basemapId:null;d=x.isSome(d.basemapTheme)?d.basemapTheme:null;if(b)return{scheme:u.cloneScheme(b),basemapId:c,basemapTheme:d};if(a=u.getSchemes({basemap:c,
basemapTheme:d,geometryType:a.geometryType,theme:a.theme,worldScale:a.worldScale,view:a.view}))b=a.primaryScheme,c=a.basemapId,d=a.basemapTheme;return{scheme:b,basemapId:c,basemapTheme:d}});return A.apply(this,arguments)}function K(a,b){a=N.clone(X[a]);return u.flatten2DArray(a,b)}function Y(a,b){return K(a,b).map(c=>({value:c,count:0}))}function L(a,b,c,d){const {field:e,normalizationField:f}=a,{field:g,normalizationField:k}=b;a=c.map(l=>[l.minValue,l.maxValue]);d=d.map(l=>[l.minValue,l.maxValue]);
b=Z[a.length];return`
  var field1 = $feature['${e}'];
  var field2 = $feature['${g}'];
  var hasNormField1 = ${f?"true":"false"};
  var hasNormField2 = ${k?"true":"false"};
  var normField1 = ${f?`$feature['${f}']`:"null"};
  var normField2 = ${k?`$feature['${k}']`:"null"};

  if (
    IsEmpty(field1) ||
    IsEmpty(field2) ||
    (hasNormField1 && (IsEmpty(normField1) || normField1 == 0)) ||
    (hasNormField2 && (IsEmpty(normField2) || normField2 == 0))
  ) {
    return null;
  }

  var value1 = IIf(hasNormField1, (field1 / normField1), field1);
  var value2 = IIf(hasNormField2, (field2 / normField2), field2);

  var breaks1 = ${JSON.stringify(a)};
  var breaks2 = ${JSON.stringify(d)};
  var classCodes = ${JSON.stringify(b)};

  function getClassCode(value, breaks) {
    var code = null;

    for (var i in breaks) {
      var info = breaks[i];
      if (value >= info[0] && value <= info[1]) {
        code = classCodes[i];
        break;
      }
    }

    return code;
  }

  var code1 = getClassCode(value1, breaks1);
  var code2 = getClassCode(value2, breaks2);

  var classValue = IIf(IsEmpty(code1) || IsEmpty(code2), null, code1 + code2);
  return classValue;
  `}function aa(a,b,c){return B.apply(this,arguments)}function B(){B=n._asyncToGenerator(function*(a,b,c){var d=yield O.fetchMessageBundle("esri/smartMapping/t9n/smartMapping");const {basemap:e,classificationMethod:f,field1:g,field2:k,focus:l,numClasses:m,signal:p}=a;var q=a.layer,r=b.classBreakInfos;const C=c.classBreakInfos;if(m!==r.length||r.length!==C.length)throw new h("relationship-renderer:error","incompatible class breaks");var D=Y(m,l);const ba=L(a.field1,a.field2,r,C),E=(yield W({basemap:e,
geometryType:q.geometryType,theme:"default",relationshipScheme:a.relationshipScheme,worldScale:-1<a.symbolType.indexOf("3d-volumetric"),view:a.view})).scheme;a=yield Q.createRenderer({layer:q,basemap:e,valueExpression:ba,valueExpressionTitle:d.relationship.legendTitle,numTypes:-1,sortEnabled:!1,defaultSymbolEnabled:a.defaultSymbolEnabled,typeScheme:{colors:u.getColors(E,m,l),...E},statistics:{uniqueValueInfos:D},legendOptions:a.legendOptions,outlineOptimizationEnabled:a.outlineOptimizationEnabled,
sizeOptimizationEnabled:a.sizeOptimizationEnabled,symbolType:a.symbolType,colorMixMode:a.colorMixMode,edgesType:a.edgesType,view:a.view,signal:p});q=a.renderer;D=q.uniqueValueInfos;d=d.relationship;for(const M of D)M.label=d[M.value];r=new P({type:"relationship",classificationMethod:f,numClasses:m,focus:l,field1:{field:g.field,normalizationField:g.normalizationField,label:g.label,classBreakInfos:r.map(v)},field2:{field:k.field,normalizationField:k.normalizationField,label:k.label,classBreakInfos:C.map(v)}});
q.authoringInfo=r;return{renderer:q,classBreaks:{field1:b,field2:c},uniqueValueInfos:a.uniqueValueInfos,relationshipScheme:E,basemapId:a.basemapId,basemapTheme:a.basemapTheme}});return B.apply(this,arguments)}function ca(a,b,c){const d=K(b,c);a.sort((e,f)=>{e=d.indexOf(e.value);f=d.indexOf(f.value);let g=0;e<f?g=-1:e>f&&(g=1);return g})}function da(a,b){const {authoringInfo:c}=a;c.numClasses=b.numClasses;c.focus=b.focus||null;c.focus||delete c.focus;const {field1:d,field2:e}=b;c.field1=new I["default"]({field:d.field,
normalizationField:d.normalizationField,label:d.label,classBreakInfos:d.classBreakInfos.map(f=>new H["default"](v(f)))});c.field2=new I["default"]({field:e.field,normalizationField:e.normalizationField,label:e.label,classBreakInfos:e.classBreakInfos.map(f=>new H["default"](v(f)))});a.authoringInfo=c}function F(){F=n._asyncToGenerator(function*(a){a=yield V(a);const {field1:b,field2:c,renderer:d,numClasses:e,focus:f,colors:g}=a,k=d.clone();k.valueExpression=L(b,c,b.classBreakInfos,c.classBreakInfos);
ca(k.uniqueValueInfos,e,f);if(g){const l=t.createColors(g,g.length);k.uniqueValueInfos.forEach((m,p)=>R.applyColorToSymbol(m.symbol,l[p]))}da(k,a);return k});return F.apply(this,arguments)}function G(){G=n._asyncToGenerator(function*(a){a=yield S(a);const {layer:b,classificationMethod:c,field1:d,field2:e,numClasses:f,view:g,signal:k}=a,l={layer:b,classificationMethod:c,field:e.field,normalizationField:e.normalizationField,normalizationType:e.normalizationField?"field":null,minValue:e.minValue,maxValue:e.maxValue,
analyzeData:!(null!=e.minValue&&null!=e.maxValue),numClasses:f,view:g,signal:k},[m,p]=yield Promise.all([t.getClassBreaks({layer:b,classificationMethod:c,field:d.field,normalizationField:d.normalizationField,normalizationType:d.normalizationField?"field":null,minValue:d.minValue,maxValue:d.maxValue,analyzeData:!(null!=d.minValue&&null!=d.maxValue),numClasses:f,view:g,signal:k}),t.getClassBreaks(l)]);if(!m||!p)throw new h("relationship-renderer:error","error when calculating class breaks");return aa(a,
m.result,p.result)});return G.apply(this,arguments)}const T=["equal-interval","natural-breaks","quantile"],U=["HH","HL","LH","LL"],X={2:[["HL","HH"],["LL","LH"]],3:[["HL","HM","HH"],["ML","MM","MH"],["LL","LM","LH"]],4:[["HL","HM1","HM2","HH"],["M2L","M2M1","M2M2","M2H"],["M1L","M1M1","M1M2","M1H"],["LL","LM1","LM2","LH"]]},Z={2:["L","H"],3:["L","M","H"],4:["L","M1","M2","H"]},v=a=>({minValue:a.minValue,maxValue:a.maxValue});w.createRenderer=function(a){return G.apply(this,arguments)};w.updateRenderer=
function(a){return F.apply(this,arguments)};Object.defineProperty(w,"__esModule",{value:!0})});