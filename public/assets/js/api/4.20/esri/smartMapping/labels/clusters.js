// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../../chunks/_rollupPluginBabelHelpers ../../symbols ../../core/Error ../../intl/messages ../../layers/support/LabelClass ../../layers/support/LabelExpressionInfo ../heuristics/clusterMinSize ../support/clusterUtils ../../views/2d/layers/support/clusterUtils ../../symbols/TextSymbol".split(" "),function(t,m,D,v,w,x,y,z,g,A,B){function C(a){return n.apply(this,arguments)}function n(){n=m._asyncToGenerator(function*(a){const {layer:b,renderer:h,view:c}=a;yield Promise.all([b.load(),
c.when()]);a=h||b.renderer;return A.isClusterCompatibleRenderer(a)?{layer:b,renderer:a,view:c}:Promise.reject(new v("clusters-label-schemes:invalid-parameters","'renderer' is not valid"))});return n.apply(this,arguments)}function u(a){return p.apply(this,arguments)}function p(){p=m._asyncToGenerator(function*(a){const {renderer:b,view:h,statInfo:c}=a,f=null==c?void 0:c.statisticType,e=c?g.getClusterField(c.attributeInfo,f):g.clusterCountField;{a="type"===f?g.getPredominantTypeExpression("unique-value"===
b.type?b.uniqueValueInfos:[],e,a.noneValueLabel):`
  $feature["${e}"];
  var value = $feature["${e}"];
  var num = Count(Text(Round(value)));
  var label = When(
    num < 4, Text(value, "#.#"),
    num == 4, Text(value / Pow(10, 3), "#.0k"),
    num <= 6, Text(value / Pow(10, 3), "#k"),
    num == 7, Text(value / Pow(10, 6), "#.0m"),
    num > 7, Text(value / Pow(10, 6), "#m"),
    Text(value, "#,###")
  );
  return label;
  `;const q=new B({haloColor:"#373837",haloSize:"1px",color:"#f0f0f0",font:{family:"Noto Sans",size:"12px",weight:"bold"}});a=new x({symbol:q,deconflictionStrategy:"none",labelPlacement:"center-center",labelExpressionInfo:new y({expression:a})})}return{name:c?`clusters-${f}-${g.getClusterFieldHash(e,f)}`:"clusters-count",labelingInfo:[a],clusterMinSize:yield z(a.symbol,h),fieldName:e}});return p.apply(this,arguments)}function r(){r=m._asyncToGenerator(function*(a){const [{renderer:b,layer:h,view:c},
f]=yield Promise.all([C(a),w.fetchMessageBundle("esri/smartMapping/t9n/smartMapping")]);if(!b)return null;a=null;const e=[];{var q=g.getStatisticInfos(h,b,!1);const l=new Map;for(d of q)"size"===d.attributeInfo.vvType?l.set(d.statisticHash,d):l.has(d.statisticHash)||l.set(d.statisticHash,d);var d=[...l.values()]}for(var k of d)d=yield u({renderer:b,view:c,statInfo:k,noneValueLabel:f.clusters.predominantNoneValue}),"size"===k.attributeInfo.vvType?a=d:e.push(d);k=yield u({renderer:b,view:c});a?e.unshift(k):
a=k;return{primaryScheme:a,secondarySchemes:e}});return r.apply(this,arguments)}t.getLabelSchemes=function(a){return r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0})});