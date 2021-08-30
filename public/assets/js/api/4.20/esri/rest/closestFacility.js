// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../chunks/_rollupPluginBabelHelpers ../request ../core/queryUtils ../geometry/support/normalizeUtils ./networkService ./utils ./support/ClosestFacilitySolveResult".split(" "),function(q,r,t,u,v,c,w,x){function l(){l=r._asyncToGenerator(function*(h,a,m){const n=[],e=[],d={},g={},p=w.parseUrl(h);a.incidents&&a.incidents.features&&c.collectGeometries(a.incidents.features,e,"incidents.features",d);a.facilities&&a.facilities.features&&c.collectGeometries(a.facilities.features,e,"facilities.features",
d);a.pointBarriers&&a.pointBarriers.features&&c.collectGeometries(a.pointBarriers.features,e,"pointBarriers.features",d);a.polylineBarriers&&a.polylineBarriers.features&&c.collectGeometries(a.polylineBarriers.features,e,"polylineBarriers.features",d);a.polygonBarriers&&a.polygonBarriers.features&&c.collectGeometries(a.polygonBarriers.features,e,"polygonBarriers.features",d);return v.normalizeCentralMeridian(e).then(b=>{for(const f in d){const k=d[f];n.push(f);g[f]=b.slice(k[0],k[1])}return c.isInputGeometryZAware(g,
n)?c.fetchServiceDescription(p.path):Promise.resolve({dontCheck:!0})}).then(b=>{("dontCheck"in b?b.dontCheck:b.hasZ)||c.dropZValuesOffInputGeometry(g,n);for(const f in g)g[f].forEach((k,y)=>{a.get(f)[y].geometry=k});b={query:{...p.query,f:"json",...z.toQueryParams(a)}};m&&(b={...m,...b});return t(`${p.path}/solveClosestFacility`,b)}).then(b=>x.fromJSON(b.data))});return l.apply(this,arguments)}const z=u.createQueryParamsHelper({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,
directionsTimeAttribute:{name:"directionsTimeAttributeName"},impedanceAttribute:{name:"impedanceAttributeName"},facilities:!0,incidents:!0,outSpatialReference:{name:"outSR",getter:h=>h.outSpatialReference.wkid},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},returnRoutes:{name:"returnCFRoutes"},travelMode:!0});q.solve=function(h,a,m){return l.apply(this,arguments)};Object.defineProperty(q,
"__esModule",{value:!0})});