/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{r as t}from"./unitUtils.js";const e={readOnly:!0,get(){const e="metric",{view:r}=this;if(!r)return e;const s=r.get("map.portalItem.portal");if(s){switch(s.get("user.units")||s.units){case e:return e;case"english":return"imperial"}}return t(r.spatialReference)||e}};export{e as d};
