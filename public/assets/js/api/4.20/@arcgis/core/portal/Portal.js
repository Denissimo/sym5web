/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{_ as t}from"../chunks/tslib.es6.js";import e from"../config.js";import"../intl.js";import{id as r}from"../kernel.js";import o from"../request.js";import s from"../core/Error.js";import{J as i}from"../chunks/JSONSupport.js";import{L as a}from"../chunks/Loadable.js";import{i as l}from"../core/lang.js";import{throwIfAborted as n,isAborted as u,createAbortError as p,throwIfAbortError as h}from"../core/promiseUtils.js";import{property as d}from"../core/accessorSupport/decorators/property.js";import{e as c}from"../chunks/ensureType.js";import"../chunks/Logger.js";import{r as m}from"../chunks/reader.js";import{subclass as y}from"../core/accessorSupport/decorators/subclass.js";import v from"../geometry/Extent.js";import f from"./PortalQueryParams.js";import S from"./PortalQueryResult.js";import g from"./PortalUser.js";import{g as P}from"../chunks/locale.js";import"../chunks/object.js";import"../chunks/number.js";import"../chunks/jsonMap.js";import"../chunks/string.js";import"../chunks/assets.js";import"../core/urlUtils.js";import"../chunks/Message.js";import"../core/Accessor.js";import"../chunks/deprecate.js";import"../chunks/metadata.js";import"../chunks/handleUtils.js";import"../chunks/ArrayPool.js";import"../chunks/arrayUtils.js";import"../core/scheduling.js";import"../chunks/write.js";import"../chunks/Promise.js";import"../geometry/Geometry.js";import"../geometry/SpatialReference.js";import"../chunks/writer.js";import"../geometry/Point.js";import"../core/accessorSupport/decorators/cast.js";import"../geometry/support/webMercatorUtils.js";import"../chunks/Ellipsoid.js";import"./PortalFolder.js";import"./PortalGroup.js";var j;let _;const O={PortalGroup:()=>import("./PortalGroup.js"),PortalItem:()=>import("./PortalItem.js"),PortalUser:()=>import("./PortalUser.js")};let U=j=class extends(i(a)){constructor(t){super(t),this.access=null,this.allSSL=!1,this.authMode="auto",this.authorizedCrossOriginDomains=null,this.basemapGalleryGroupQuery=null,this.bingKey=null,this.canListApps=!1,this.canListData=!1,this.canListPreProvisionedItems=!1,this.canProvisionDirectPurchase=!1,this.canSearchPublic=!0,this.canShareBingPublic=!1,this.canSharePublic=!1,this.canSignInArcGIS=!1,this.canSignInIDP=!1,this.colorSetsGroupQuery=null,this.commentsEnabled=!1,this.created=null,this.culture=null,this.customBaseUrl=null,this.defaultBasemap=null,this.defaultExtent=null,this.defaultVectorBasemap=null,this.description=null,this.eueiEnabled=null,this.featuredGroups=null,this.featuredItemsGroupQuery=null,this.galleryTemplatesGroupQuery=null,this.livingAtlasGroupQuery=null,this.hasCategorySchema=!1,this.helperServices=null,this.homePageFeaturedContent=null,this.homePageFeaturedContentCount=null,this.httpPort=null,this.httpsPort=null,this.id=null,this.ipCntryCode=null,this.isPortal=!1,this.isReadOnly=!1,this.layerTemplatesGroupQuery=null,this.maxTokenExpirationMinutes=null,this.modified=null,this.name=null,this.portalHostname=null,this.portalMode=null,this.portalProperties=null,this.region=null,this.rotatorPanels=null,this.showHomePageDescription=!1,this.sourceJSON=null,this.supportsHostedServices=!1,this.symbolSetsGroupQuery=null,this.templatesGroupQuery=null,this.units=null,this.url=e.portalUrl,this.urlKey=null,this.user=null,this.useStandardizedQuery=!1,this.useVectorBasemaps=!1,this.vectorBasemapGalleryGroupQuery=null}normalizeCtorArgs(t){return"string"==typeof t?{url:t}:t}destroy(){this._esriId_credentialCreateHandle&&(this._esriId_credentialCreateHandle.remove(),this._esriId_credentialCreateHandle=null)}readAuthorizedCrossOriginDomains(t){if(t)for(const r of t)-1===e.request.trustedServers.indexOf(r)&&e.request.trustedServers.push(r);return t}readDefaultBasemap(t){if(t){const e=_.fromJSON(t);return e.portalItem={portal:this},e}return null}readDefaultVectorBasemap(t){if(t){const e=_.fromJSON(t);return e.portalItem={portal:this},e}return null}get extraQuery(){const t=!(this.user&&this.user.orgId)||this.canSearchPublic;return this.id&&!t?` AND orgid:${this.id}`:null}get isOrganization(){return!!this.access}get restUrl(){let t=this.url;if(t){const e=t.indexOf("/sharing");t=e>0?t.substring(0,e):this.url.replace(/\/+$/,""),t+="/sharing/rest"}return t}get thumbnailUrl(){const t=this.restUrl,e=this.thumbnail;return t&&e?this._normalizeSSL(t+"/portals/self/resources/"+e):null}readUrlKey(t){return t?t.toLowerCase():t}readUser(t){let e=null;return t&&(e=g.fromJSON(t),e.portal=this),e}load(t){const e=import("../Basemap.js").then((function(t){return t.B})).then((({default:e})=>{n(t),_=e})).then((()=>this.sourceJSON?this.sourceJSON:this._fetchSelf(this.authMode,!1,t))).then((t=>{if(r){const t=r;this.credential=t.findCredential(this.restUrl),this.credential||this.authMode!==j.AUTH_MODE_AUTO||(this._esriId_credentialCreateHandle=t.on("credential-create",(()=>{t.findCredential(this.restUrl)&&this._signIn()})))}this.sourceJSON=t,this.read(t)}));return this.addResolvingPromise(e),Promise.resolve(this)}async createClosestFacilityTask(){await this.load();const t=this._getHelperServiceUrl("closestFacility");return new(0,(await import("../tasks/ClosestFacilityTask.js")).default)(t)}async createElevationLayers(){await this.load();const t=this._getHelperService("defaultElevationLayers"),e=(await import("../layers/ElevationLayer.js")).default;return t?t.map((t=>new e({id:t.id,url:t.url}))):[]}async createGeometryService(){await this.load();const t=this._getHelperServiceUrl("geometry");return new(0,(await import("../tasks/GeometryService.js")).default)({url:t})}async createPrintTask(){await this.load();const t=this._getHelperServiceUrl("printTask");return new(0,(await import("../tasks/PrintTask.js")).default)(t)}async createRouteTask(){await this.load();const t=this._getHelperServiceUrl("route");return new(0,(await import("../tasks/RouteTask.js")).default)(t)}async createServiceAreaTask(){await this.load();const t=this._getHelperServiceUrl("serviceArea");return new(0,(await import("../tasks/ServiceAreaTask.js")).default)(t)}fetchBasemaps(t,e){const r=new f;return r.query=t||(this.useVectorBasemaps?this.vectorBasemapGalleryGroupQuery:this.basemapGalleryGroupQuery),r.disableExtraQuery=!0,this.queryGroups(r,e).then((t=>{if(r.num=100,r.query='type:"Web Map" -type:"Web Application"',t.total){const o=t.results[0];return r.sortField=o.sortField||"name",r.sortOrder=o.sortOrder||"desc",o.queryItems(r,e)}return null})).then((t=>{let e;return e=t&&t.total?t.results.filter((t=>"Web Map"===t.type)).map((t=>new _({portalItem:t}))):[],e}))}fetchCategorySchema(t){return this.hasCategorySchema?this._request(this.restUrl+"/portals/self/categorySchema",t).then((t=>t.categorySchema)):u(t)?Promise.reject(p()):Promise.resolve([])}fetchFeaturedGroups(t){const e=this.featuredGroups,r=new f;if(r.num=100,r.sortField="title",e&&e.length){const o=[];for(const t of e)o.push(`(title:"${t.title}" AND owner:${t.owner})`);return r.query=o.join(" OR "),this.queryGroups(r,t).then((t=>t.results))}return u(t)?Promise.reject(p()):Promise.resolve([])}fetchRegions(t){const e=this.user&&this.user.culture||this.culture||P();return this._request(this.restUrl+"/portals/regions",{...t,query:{culture:e}})}static getDefault(){return j._default&&!j._default.destroyed||(j._default=new j),j._default}queryGroups(t,e){return this._queryPortal("/community/groups",t,"PortalGroup",e)}queryItems(t,e){return this._queryPortal("/search",t,"PortalItem",e)}queryUsers(t,e){return t.sortField||(t.sortField="username"),this._queryPortal("/community/users",t,"PortalUser",e)}toJSON(){throw new s("internal:not-yet-implemented","Portal.toJSON is not yet implemented")}static fromJSON(t){if(!t)return null;if(t.declaredClass)throw new Error("JSON object is already hydrated");return new j({sourceJSON:t})}_getHelperService(t){const e=this.helperServices&&this.helperServices[t];if(!e)throw new s("portal:service-not-found",`The \`helperServices\` do not include an entry named "${t}"`);return e}_getHelperServiceUrl(t){const e=this._getHelperService(t);if(!e.url)throw new s("portal:service-url-not-found",`The \`helperServices\` entry "${t}" does not include a \`url\` value`);return e.url}_fetchSelf(t=this.authMode,e=!1,r){const o=this.restUrl+"/portals/self",s={authMode:t,query:{culture:P().toLowerCase()},...r};return"auto"===s.authMode&&(s.authMode="no-prompt"),e&&(s.query.default=!0),this._request(o,s)}_queryPortal(t,e,r,o){const s=c(f,e),i=e=>this._request(this.restUrl+t,{...s.toRequestOptions(this),...o}).then((t=>{const r=s.clone();return r.start=t.nextStart,new S({nextQueryParams:r,queryParams:s,total:t.total,results:j._resultsToTypedArray(e,{portal:this},t,o)})})).then((t=>Promise.all(t.results.map((e=>"function"==typeof e.when?e.when():t))).then((()=>t),(e=>(h(e),t)))));return r&&O[r]?O[r]().then((({default:t})=>(n(o),i(t)))):i()}_signIn(){if(this.authMode===j.AUTH_MODE_ANONYMOUS)return Promise.reject(new s("portal:invalid-auth-mode",`Current "authMode"' is "${this.authMode}"`));if("failed"===this.loadStatus)return Promise.reject(this.loadError);const t=t=>Promise.resolve().then((()=>"not-loaded"===this.loadStatus?(t||(this.authMode="immediate"),this.load().then((()=>null))):"loading"===this.loadStatus?this.load().then((()=>this.credential?null:(this.credential=t,this._fetchSelf("immediate")))):this.user&&this.credential===t?null:(this.credential=t,this._fetchSelf("immediate")))).then((t=>{t&&(this.sourceJSON=t,this.read(t))}));return r?r.getCredential(this.restUrl).then((e=>t(e))):t(this.credential)}_normalizeSSL(t){return t.replace(/^http:/i,"https:").replace(":7080",":7443")}_normalizeUrl(t){const e=this.credential&&this.credential.token;return this._normalizeSSL(e?t+(t.indexOf("?")>-1?"&":"?")+"token="+e:t)}_requestToTypedArray(t,e,r){return this._request(t,e).then((t=>{const e=j._resultsToTypedArray(r,{portal:this},t);return Promise.all(e.map((e=>"function"==typeof e.when?e.when():t))).then((()=>e),(()=>e))}))}_request(t,e={}){const r={f:"json",...e.query},{authMode:s=(this.authMode===j.AUTH_MODE_ANONYMOUS?"anonymous":"auto"),body:i=null,cacheBust:a=!1,method:l="auto",responseType:n="json",signal:u}=e,p={authMode:s,body:i,cacheBust:a,method:l,query:r,responseType:n,timeout:0,signal:u};return o(this._normalizeSSL(t),p).then((t=>t.data))}static _resultsToTypedArray(t,e,r,o){let s;if(r){const i=l(o)?o.signal:null;s=r.listings||r.notifications||r.userInvitations||r.tags||r.items||r.groups||r.comments||r.provisions||r.results||r.relatedItems||r,(t||e)&&(s=s.map((r=>{const o=Object.assign(t?t.fromJSON(r):r,e);return"function"==typeof o.load&&o.load(i),o})))}else s=[];return s}};U.AUTH_MODE_ANONYMOUS="anonymous",U.AUTH_MODE_AUTO="auto",U.AUTH_MODE_IMMEDIATE="immediate",t([d()],U.prototype,"access",void 0),t([d()],U.prototype,"allSSL",void 0),t([d()],U.prototype,"authMode",void 0),t([d()],U.prototype,"authorizedCrossOriginDomains",void 0),t([m("authorizedCrossOriginDomains")],U.prototype,"readAuthorizedCrossOriginDomains",null),t([d()],U.prototype,"basemapGalleryGroupQuery",void 0),t([d()],U.prototype,"bingKey",void 0),t([d()],U.prototype,"canListApps",void 0),t([d()],U.prototype,"canListData",void 0),t([d()],U.prototype,"canListPreProvisionedItems",void 0),t([d()],U.prototype,"canProvisionDirectPurchase",void 0),t([d()],U.prototype,"canSearchPublic",void 0),t([d()],U.prototype,"canShareBingPublic",void 0),t([d()],U.prototype,"canSharePublic",void 0),t([d()],U.prototype,"canSignInArcGIS",void 0),t([d()],U.prototype,"canSignInIDP",void 0),t([d()],U.prototype,"colorSetsGroupQuery",void 0),t([d()],U.prototype,"commentsEnabled",void 0),t([d({type:Date})],U.prototype,"created",void 0),t([d()],U.prototype,"credential",void 0),t([d()],U.prototype,"culture",void 0),t([d()],U.prototype,"currentVersion",void 0),t([d()],U.prototype,"customBaseUrl",void 0),t([d()],U.prototype,"defaultBasemap",void 0),t([m("defaultBasemap")],U.prototype,"readDefaultBasemap",null),t([d({type:v})],U.prototype,"defaultExtent",void 0),t([d()],U.prototype,"defaultVectorBasemap",void 0),t([m("defaultVectorBasemap")],U.prototype,"readDefaultVectorBasemap",null),t([d()],U.prototype,"description",void 0),t([d()],U.prototype,"eueiEnabled",void 0),t([d({readOnly:!0})],U.prototype,"extraQuery",null),t([d()],U.prototype,"featuredGroups",void 0),t([d()],U.prototype,"featuredItemsGroupQuery",void 0),t([d()],U.prototype,"galleryTemplatesGroupQuery",void 0),t([d()],U.prototype,"livingAtlasGroupQuery",void 0),t([d()],U.prototype,"hasCategorySchema",void 0),t([d()],U.prototype,"helpBase",void 0),t([d()],U.prototype,"helperServices",void 0),t([d()],U.prototype,"helpMap",void 0),t([d()],U.prototype,"homePageFeaturedContent",void 0),t([d()],U.prototype,"homePageFeaturedContentCount",void 0),t([d()],U.prototype,"httpPort",void 0),t([d()],U.prototype,"httpsPort",void 0),t([d()],U.prototype,"id",void 0),t([d()],U.prototype,"ipCntryCode",void 0),t([d({readOnly:!0})],U.prototype,"isOrganization",null),t([d()],U.prototype,"isPortal",void 0),t([d()],U.prototype,"isReadOnly",void 0),t([d()],U.prototype,"layerTemplatesGroupQuery",void 0),t([d()],U.prototype,"maxTokenExpirationMinutes",void 0),t([d({type:Date})],U.prototype,"modified",void 0),t([d()],U.prototype,"name",void 0),t([d()],U.prototype,"portalHostname",void 0),t([d()],U.prototype,"portalMode",void 0),t([d()],U.prototype,"portalProperties",void 0),t([d()],U.prototype,"region",void 0),t([d({readOnly:!0})],U.prototype,"restUrl",null),t([d()],U.prototype,"rotatorPanels",void 0),t([d()],U.prototype,"showHomePageDescription",void 0),t([d()],U.prototype,"sourceJSON",void 0),t([d()],U.prototype,"staticImagesUrl",void 0),t([d()],U.prototype,"stylesGroupQuery",void 0),t([d()],U.prototype,"supportsHostedServices",void 0),t([d()],U.prototype,"symbolSetsGroupQuery",void 0),t([d()],U.prototype,"templatesGroupQuery",void 0),t([d()],U.prototype,"thumbnail",void 0),t([d({readOnly:!0})],U.prototype,"thumbnailUrl",null),t([d()],U.prototype,"units",void 0),t([d()],U.prototype,"url",void 0),t([d()],U.prototype,"urlKey",void 0),t([m("urlKey")],U.prototype,"readUrlKey",null),t([d()],U.prototype,"user",void 0),t([m("user")],U.prototype,"readUser",null),t([d()],U.prototype,"useStandardizedQuery",void 0),t([d()],U.prototype,"useVectorBasemaps",void 0),t([d()],U.prototype,"vectorBasemapGalleryGroupQuery",void 0),U=j=t([y("esri.portal.Portal")],U);var w=U;export default w;