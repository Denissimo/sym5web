// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/Logger ../core/maybe ../core/watchUtils ../core/accessorSupport/decorators/aliasOf ../core/has ../core/accessorSupport/decorators/cast ../core/jsonMap ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Daylight/DaylightViewModel ./Daylight/support/daylightUtils ./Daylight/support/SliderWithDropdown ./support/DatePicker ./support/Heading ./support/timeWidgetUtils ./support/widgetUtils ./support/decorators/messageBundle ./support/jsxFactory".split(" "),
function(m,e,c,q,l,r,F,x,G,h,y,z,u,A,B,C,D,t,H,v,d){const w={playButtons:!0,shadowsToggle:!0,datePicker:!0,timezone:!0},E=c.getLogger("esri.widgets.Daylight");c=function(k){function n(a,b){var f;a=k.call(this,a,b)||this;a.headingLevel=3;a.iconClass="esri-icon-environment-settings";a.label=void 0;a.playSpeedMultiplier=1;a.timeSliderSteps=5;a.view=null;a.viewModel=new u;a.visibleElements={...w};a.dateOrSeason="date";a._timeSlider=new B({viewModel:a.viewModel.timeSliderViewModel,labelFormatFunction:t.formatSliderLabel,
inputFormatFunction:t.formatSliderLabel,min:0,max:1439,steps:null!=(f=a.timeSliderSteps)?f:5,values:[0],labelInputsEnabled:!1,visibleElements:{labels:!0},tickConfigs:[{mode:"position",values:[0,360,720,1080,1439],labelsVisible:!0,tickCreatedFunction:a._onPrimaryTickCreated.bind(m._assertThisInitialized(a))},{mode:"position",values:[120,240,480,600,840,960,1200,1320],tickCreatedFunction:a._onSecondaryTickCreated.bind(m._assertThisInitialized(a))}],items:[]});a._datePicker=new C({viewModel:a.viewModel.datePickerViewModel,
commitOnMonthChange:!0});return a}m._inheritsLoose(n,k);var g=n.prototype;g.castVisibleElements=function(a){return{...w,...a}};g.postInitialize=function(){this.viewModel.isSupported&&this.own(l.init(this.viewModel,"datePickerViewModel",a=>{this._datePicker.viewModel=a}),l.init(this.viewModel,"timeSliderViewModel",a=>{this._timeSlider.viewModel=a}),l.init(this,"messages",()=>{this._timeSlider.buttonTooltip=this.timezoneMessages.chooseTimezone}),l.init(this,"visibleElements",()=>{this._timeSlider.showDropDown=
this.visibleElements.timezone}),l.init(this,"gmtOffsets",a=>{q.isSome(a)&&(this._timeSlider.items=a.map(b=>({utcOffset:b.utcOffset,name:b.short,label:[b.shortWithUTC,b.long]})))}),l.init(this,["viewModel.utcOffset","gmtOffsets"],()=>this._onUTCOffsetChange()))};g.destroy=function(){this._datePicker.destroy();this._timeSlider.destroy()};g.render=function(){return this.viewModel.isSupported?d.tsx("div",{class:this.classes("esri-daylight","esri-widget")},d.tsx(D.Heading,{level:this.headingLevel},this.messages.title),
this.renderTimeOptions(),this.visibleElements.datePicker?"date"===this.dateOrSeason?this.renderDateOptions():this.renderSeasonOptions():null,this.visibleElements.shadowsToggle?this.renderShadowOptions():null):d.tsx("div",{class:this.classes("esri-daylight","esri-widget")},d.tsx("div",{key:"daylight__unsupported",class:"esri-daylight__panel--error"},d.tsx("p",null,this.messages.unsupported)))};g.renderTimeOptions=function(){const a={["esri-icon-play"]:!this.viewModel.dayPlaying,["esri-icon-pause"]:this.viewModel.dayPlaying};
return d.tsx("div",{class:this.classes("esri-daylight__container esri-daylight__day-container",{["esri-slider--shadow-on"]:this.viewModel.directShadowsEnabled,["esri-slider--shadow-off"]:!this.viewModel.directShadowsEnabled},{["esri-slider--date-on"]:this.visibleElements.datePicker,["esri-slider--date-off"]:!this.visibleElements.datePicker}),key:"daylight-time-options"},this._timeSlider.render(),this.visibleElements.playButtons?d.tsx("button",{bind:this.viewModel,onclick:this.viewModel.toggleDayPlaying,
"aria-label":this.messages.playDay,title:this.messages.playDay,type:"button",class:this.classes("esri-button","esri-daylight__play-pause-button",a)},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d.tsx("path",{d:"M6 3.745L11.255 8 6 12.255z"}))):null)};g.renderDateOptions=function(){const a={["esri-icon-play"]:!this.viewModel.yearPlaying,["esri-icon-pause"]:this.viewModel.yearPlaying};return d.tsx("div",{class:"esri-daylight__container esri-daylight__date-container",key:"daylight-date-options"},
this._datePicker.render(),this.visibleElements.playButtons?d.tsx("button",{bind:this.viewModel,onclick:this.viewModel.toggleYearPlaying,"aria-label":this.messages.playYear,title:this.messages.playYear,type:"button",class:this.classes("esri-button","esri-daylight__play-pause-button",a)},d.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},d.tsx("path",{d:"M6 3.745L11.255 8 6 12.255z"}))):null)};g.renderShadowOptions=function(){const a=`${this.id}__shadowButton`;return d.tsx("div",{class:"esri-daylight__shadow-container",
key:"daylight-shadow-options"},d.tsx("button",{bind:this.viewModel,onclick:this.viewModel.toggleDirectShadows,name:a,class:this.classes("esri-button","esri-daylight__checkbox",{["esri-icon-checkbox-checked"]:this.viewModel.directShadowsEnabled,["esri-icon-checkbox-unchecked"]:!this.viewModel.directShadowsEnabled}),"aria-label":this.messages.directShadow,title:this.messages.directShadow,type:"button"}),d.tsx("label",{bind:this.viewModel,onclick:this.viewModel.toggleDirectShadows,for:a,class:this.classes(" esri-widget__anchor",
"esri-interactive"),"aria-label":this.messages.directShadow,title:this.messages.directShadow},this.messages.directShadow))};g.renderSeasonOptions=function(){return d.tsx("select",{bind:this,onchange:this._onSeasonChange,class:this.classes("esri-select","esri-daylight__season-picker"),value:this.viewModel.currentSeason,"aria-label":this.messages.season},A.ORDERED_SEASONS.map(a=>d.tsx("option",{value:a},this.messages[a])))};g._onSeasonChange=function(a){this.viewModel.currentSeason=a.target.value};
g._onUTCOffsetChange=function(){var a;const b=this.viewModel.utcOffset;var f=null==(a=this._timeSlider.currentItem)?void 0:a.utcOffset;a=this.gmtOffsets;q.isSome(a)&&f!==b&&(f=a.findIndex(({utcOffset:p})=>p===b),-1<f&&(this._timeSlider.currentIndex=f))};g._onPrimaryTickCreated=function(a,b,f){b.className+=" esri-interactive esri-widget__anchor esri-daylight__container__tick esri-daylight__container__labelled-tick";f.className+=" esri-interactive esri-widget__anchor";const p=()=>{this.viewModel.timeSliderPosition=
a};b.onclick=p;f.onclick=p;b=f.innerText;-1!==b.indexOf(" ")&&(f.innerHTML=b.replace(/(.*) (.*)/,'$1\x3cbr\x3e\x3cdiv class\x3d"esri-label__ampm"\x3e$2\x3c/div\x3e'))};g._onSecondaryTickCreated=function(a,b){b.className+=" esri-interactive esri-widget__anchor esri-daylight__container__tick";b.onclick=()=>{this.viewModel.timeSliderPosition=a}};m._createClass(n,[{key:"gmtOffsets",get:function(){return q.applySome(this.timezoneMessages,t.getTimezoneInfos)}}]);return n}(z);e.__decorate([h.property({readOnly:!0})],
c.prototype,"gmtOffsets",null);e.__decorate([h.property(),v.messageBundle("esri/widgets/Daylight/t9n/Daylight")],c.prototype,"messages",void 0);e.__decorate([h.property(),v.messageBundle("esri/widgets/support/t9n/timezone")],c.prototype,"timezoneMessages",void 0);e.__decorate([h.property()],c.prototype,"headingLevel",void 0);e.__decorate([h.property()],c.prototype,"iconClass",void 0);e.__decorate([h.property({aliasOf:{source:"messages.title",overridable:!0}})],c.prototype,"label",void 0);e.__decorate([r.aliasOf("viewModel.playSpeedMultiplier")],
c.prototype,"playSpeedMultiplier",void 0);e.__decorate([r.aliasOf("_timeSlider.steps")],c.prototype,"timeSliderSteps",void 0);e.__decorate([r.aliasOf("viewModel.view")],c.prototype,"view",void 0);e.__decorate([h.property({type:u})],c.prototype,"viewModel",void 0);e.__decorate([h.property()],c.prototype,"visibleElements",void 0);e.__decorate([x.cast("visibleElements")],c.prototype,"castVisibleElements",null);e.__decorate([h.property({cast:k=>{if("season"===k||"date"===k)return k;E.warn(`"${k}" is not a valid option. Acceptable values are only "date" or "season". Defaulting to "${"date"}".`);
return"date"}})],c.prototype,"dateOrSeason",void 0);e.__decorate([h.property()],c.prototype,"_timeSlider",void 0);e.__decorate([h.property()],c.prototype,"_datePicker",void 0);return c=e.__decorate([y.subclass("esri.widgets.Daylight")],c)});