// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../chunks/_rollupPluginBabelHelpers","../../core/asyncUtils","../../core/promiseUtils","../../core/Warning"],function(f,g,h,k,l){function e(){e=g._asyncToGenerator(function*(c,a,d){var b=c&&c.getAtOrigin&&c.getAtOrigin("renderer",a.origin);b&&"unique-value"===b.type&&b.styleOrigin&&(b=yield h.result(b.populateFromStyle()),k.throwIfAborted(d),!1===b.ok&&(d=b.error,a&&a.messages&&a.messages.push(new l("renderer:style-reference",`Failed to create unique value renderer from style reference: ${d.message}`,
{error:d,context:a})),c.clear("renderer",a.origin)))});return e.apply(this,arguments)}f.loadStyleRenderer=function(c,a,d){return e.apply(this,arguments)};Object.defineProperty(f,"__esModule",{value:!0})});