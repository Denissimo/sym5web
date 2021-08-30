/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import e from"../config.js";import{i as r}from"../core/lang.js";import{n as t}from"./string.js";const o={info:0,warn:1,error:2,none:3};class n{constructor(e){this.level=null,this._module="",this._parent=null,this.writer=null,this._loggedMessages={error:new Map,warn:new Map,info:new Map},null!=e.level&&(this.level=e.level),null!=e.writer&&(this.writer=e.writer),this._module=e.module,n._loggers[this.module]=this;const r=this.module.lastIndexOf(".");-1!==r&&(this._parent=n.getLogger(this.module.slice(0,r)))}get module(){return this._module}get parent(){return this._parent}error(...e){this._log("error","always",...e)}warn(...e){this._log("warn","always",...e)}info(...e){this._log("info","always",...e)}errorOnce(...e){this._log("error","once",...e)}warnOnce(...e){this._log("warn","once",...e)}infoOnce(...e){this._log("info","once",...e)}errorOncePerTick(...e){this._log("error","oncePerTick",...e)}warnOncePerTick(...e){this._log("warn","oncePerTick",...e)}infoOncePerTick(...e){this._log("info","oncePerTick",...e)}get test(){const e=this;return{loggedMessages:e._loggedMessages,clearLoggedWarnings:()=>e._loggedMessages.warn.clear()}}static get testSingleton(){return{resetLoggers(e={}){const r=n._loggers;return n._loggers=e,r},set throttlingDisabled(e){n._throttlingDisabled=e}}}static getLogger(e){let r=n._loggers[e];return r||(r=new n({module:e})),r}_log(r,t,...o){if(!this._matchLevel(r))return;if("always"!==t&&!n._throttlingDisabled){const e=this._argsToKey(o),s=this._loggedMessages[r].get(e);if("once"===t&&null!=s||"oncePerTick"===t&&s&&s>=n._tickCounter)return;this._loggedMessages[r].set(e,n._tickCounter),n._scheduleTickCounterIncrement()}for(const t of e.log.interceptors)if(t(r,this.module,...o))return;this._inheritedWriter()(r,this.module,...o)}_parentWithMember(e,t){let o=this;for(;r(o);){const t=o[e];if(r(t))return t;o=o.parent}return t}_inheritedWriter(){return this._parentWithMember("writer",this._consoleWriter)}_consoleWriter(e,r,...t){console[e](`[${r}]`,...t)}_matchLevel(r){const t=e.log.level?e.log.level:"warn";return o[this._parentWithMember("level",t)]<=o[r]}_argsToKey(...e){return t(JSON.stringify(e,((e,r)=>"object"!=typeof r||Array.isArray(r)?r:"[Object]")))}static _scheduleTickCounterIncrement(){n._tickCounterScheduled||(n._tickCounterScheduled=!0,Promise.resolve().then((()=>{n._tickCounter++,n._tickCounterScheduled=!1})))}}n._loggers={},n._tickCounter=0,n._tickCounterScheduled=!1,n._throttlingDisabled=!1;export{n as L};