// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ../ensureType ./serializableProperty/originAliases ./serializableProperty/reader ./serializableProperty/shorthands ./serializableProperty/writer".split(" "),function(d,l,m,g,n,h){function f(a,b,c){let e=a&&a.json;a&&a.json&&a.json.origins&&c&&(a=a.json.origins[c.origin])&&("any"===b||b in a)&&(e=a);return e}const k={processPrototypePropertyMetadata(a,b){if(n.process(b)){m.process(b);if(b.type)if(b.type){a=0;for(var c=b.type;Array.isArray(c)&&!l.isOneOf(c);)c=c[0],a++;a={type:c,ndimArray:a}}else a=
void 0;else if(b.types){a=0;for(c=b.types;Array.isArray(c);)c=c[0],a++;a={types:c,ndimArray:a}}else a=void 0;if(b.json.origins)for(const e in b.json.origins)c=b.json.origins[e],g.create(a,c,!1),h.create(a,c);g.create(a,b.json,!0);h.create(a,b.json)}}};d.SerializablePropertyExtension=k;d.default=k;d.originSpecificPropertyDefinition=f;d.originSpecificReadPropertyDefinition=function(a,b){return f(a,"read",b)};d.originSpecificWritePropertyDefinition=function(a,b){return f(a,"write",b)};Object.defineProperty(d,
"__esModule",{value:!0})});