// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("exports ./intl/date ./intl/number ./intl/substitute ./intl/locale ./intl/messages ./intl/t9n ./assets".split(" "),function(a,d,e,g,b,c,f,h){c.registerMessageBundleLoader(f.createJSONLoader({pattern:"esri/",location:h.getAssetUrl}));a.convertDateFormatToIntlOptions=d.convertDateFormatToIntlOptions;a.formatDate=d.formatDate;a.convertNumberFormatToIntlOptions=e.convertNumberFormatToIntlOptions;a.formatNumber=e.formatNumber;a.substitute=g.substitute;a.getLocale=b.getLocale;a.onLocaleChange=b.onLocaleChange;
a.prefersRTL=b.prefersRTL;a.setLocale=b.setLocale;a.fetchMessageBundle=c.fetchMessageBundle;a.normalizeMessageBundleLocale=c.normalizeMessageBundleLocale;a.registerMessageBundleLoader=c.registerMessageBundleLoader;a.createJSONLoader=f.createJSONLoader;Object.defineProperty(a,"__esModule",{value:!0})});