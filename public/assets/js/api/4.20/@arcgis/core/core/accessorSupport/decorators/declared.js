/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{b as r}from"../../../chunks/deprecate.js";import{h as s}from"../../lang.js";import{L as e}from"../../../chunks/Logger.js";import"../../../config.js";import"../../../chunks/object.js";import"../../../chunks/string.js";function o(o,...t){if(t.length>0)throw new Error("Multi-inheritance unsupported since 4.16");return s("esri-deprecation-warnings")&&r(e.getLogger("esri.core.accessorSupport.decorators"),"'extends declared(superclass)' syntax",{version:"4.16",see:"https://arcg.is/T8fr4"}),o}export{o as declared};
