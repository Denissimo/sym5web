// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../core/unitUtils"],function(c,d){c.defaultUnitPropertyMetadata={readOnly:!0,get(){const {view:a}=this;if(!a)return"metric";const b=a.get("map.portalItem.portal");if(b)switch(b.get("user.units")||b.units){case "metric":return"metric";case "english":return"imperial"}return d.getDefaultUnitSystem(a.spatialReference)||"metric"}};Object.defineProperty(c,"__esModule",{value:!0})});