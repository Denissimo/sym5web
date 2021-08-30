// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.20/esri/copyright.txt for details.
//>>built
define(["exports","../../Color","../../core/colorUtils"],function(n,x,u){function q(a,b){if(!a||!b||a.length!==b.length)return!1;for(let f=0;f<a.length;f++)if(a[f]>b[f]+2||a[f]<b[f]-2)return!1;return!0}function y(a,b){if(a){b=b?b:z;var f=null,d;"algorithmic"===a.type?b.some(h=>{if(q(a.fromColor.toRgb(),h.fromColor)&&q(a.toColor.toRgb(),h.toColor))return f=h.id,!0}):"multipart"===a.type&&b.some(h=>{if(a.colorRamps&&h.colorRamps&&a.colorRamps.length===h.colorRamps.length&&(d=a.colorRamps,!h.colorRamps.some((l,
g)=>{if(!q(d[g].fromColor.toRgb(),(new x(l.fromColor)).toRgb())||!q(d[g].toColor.toRgb(),(new x(l.toColor)).toRgb()))return!0}))){if(f)return!0;f=h.id}});return f}}const z=[{id:"aspect_predefined",type:"multipart",colorRamps:[{fromColor:[190,190,190],toColor:[255,45,8]},{fromColor:[255,45,8],toColor:[255,181,61]},{fromColor:[255,181,61],toColor:[255,254,52]},{fromColor:[255,254,52],toColor:[0,251,50]},{fromColor:[0,251,50],toColor:[255,254,52]},{fromColor:[0,253,255],toColor:[0,181,255]},{fromColor:[0,
181,255],toColor:[26,35,253]},{fromColor:[26,35,253],toColor:[255,57,251]},{fromColor:[255,57,251],toColor:[255,45,8]}]},{id:"blackToWhite_predefined",fromColor:[0,0,0],toColor:[255,255,255]},{id:"blueBright_predefined",fromColor:[204,204,255],toColor:[0,0,224]},{id:"blueLightToDark_predefined",fromColor:[211,229,232],toColor:[46,100,140]},{id:"blueGreenBright_predefined",fromColor:[203,245,234],toColor:[48,207,146]},{id:"blueGreenLightToDark_predefined",fromColor:[216,242,237],toColor:[21,79,74]},
{id:"brownLightToDark_predefined",fromColor:[240,236,170],toColor:[102,72,48]},{id:"brownToBlueGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[156,85,31],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[33,130,145]}]},{id:"brownToBlueGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[110,70,45],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[48,100,102]}]},{id:"coefficientBias_predefined",fromColor:[214,214,255],toColor:[0,57,148]},{id:"coldToHotDiverging_predefined",
type:"multipart",colorRamps:[{fromColor:[69,117,181],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[214,47,39]}]},{id:"conditionNumber_predefined",type:"multipart",colorRamps:[{fromColor:[0,97,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,34,0]}]},{id:"cyanToPurple_predefined",type:"multipart",colorRamps:[{fromColor:[0,245,245],toColor:[0,0,245]},{fromColor:[0,0,245],toColor:[245,0,245]}]},{id:"cyanLightToBlueDark_predefined",type:"multipart",colorRamps:[{fromColor:[182,237,
240],toColor:[31,131,224]},{fromColor:[31,131,224],toColor:[9,9,145]}]},{id:"distance_predefined",fromColor:[255,200,0],toColor:[0,0,255]},{id:"elevation1_predefined",type:"multipart",colorRamps:[{fromColor:[175,240,233],toColor:[255,255,179]},{fromColor:[255,255,179],toColor:[0,128,64]},{fromColor:[0,128,64],toColor:[252,186,3]},{fromColor:[252,186,3],toColor:[128,0,0]},{fromColor:[120,0,0],toColor:[105,48,13]},{fromColor:[105,48,13],toColor:[171,171,171]},{fromColor:[171,171,171],toColor:[255,252,
255]}]},{id:"elevation2_predefined",type:"multipart",colorRamps:[{fromColor:[118,219,211],toColor:[255,255,199]},{fromColor:[255,255,199],toColor:[255,255,128]},{fromColor:[255,255,128],toColor:[217,194,121]},{fromColor:[217,194,121],toColor:[135,96,38]},{fromColor:[135,96,38],toColor:[150,150,181]},{fromColor:[150,150,181],toColor:[181,150,181]},{fromColor:[181,150,181],toColor:[255,252,255]}]},{id:"errors_predefined",fromColor:[255,235,214],toColor:[196,10,10]},{id:"grayLightToDark_predefined",
fromColor:[219,219,219],toColor:[69,69,69]},{id:"greenBright_predefined",fromColor:[204,255,204],toColor:[14,204,14]},{id:"greenLightToDark_predefined",fromColor:[220,245,233],toColor:[34,102,51]},{id:"greenToBlue_predefined",type:"multipart",colorRamps:[{fromColor:[32,204,16],toColor:[0,242,242]},{fromColor:[0,242,242],toColor:[2,33,227]}]},{id:"orangeBright_predefined",fromColor:[255,235,204],toColor:[240,118,5]},{id:"orangeLightToDark_predefined",fromColor:[250,233,212],toColor:[171,65,36]},{id:"partialSpectrum_predefined",
type:"multipart",colorRamps:[{fromColor:[242,241,162],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]},{fromColor:[252,3,69],toColor:[176,7,237]},{fromColor:[176,7,237],toColor:[2,29,173]}]},{id:"partialSpectrum1Diverging_predefined",type:"multipart",colorRamps:[{fromColor:[135,38,38],toColor:[240,149,12]},{fromColor:[240,149,12],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[74,80,181]},{fromColor:[74,80,181],toColor:[39,32,122]}]},{id:"partialSpectrum2Diverging_predefined",
type:"multipart",colorRamps:[{fromColor:[115,77,42],toColor:[201,137,52]},{fromColor:[201,137,52],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[91,63,176]},{fromColor:[91,63,176],toColor:[81,13,97]}]},{id:"pinkToYellowGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[158,30,113],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[99,110,45]}]},{id:"pinkToYellowGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[97,47,73],toColor:[204,204,
102]},{fromColor:[204,204,102],toColor:[22,59,15]}]},{id:"precipitation_predefined",type:"multipart",colorRamps:[{fromColor:[194,82,60],toColor:[237,161,19]},{fromColor:[237,161,19],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,219,0]},{fromColor:[0,219,0],toColor:[32,153,143]},{fromColor:[32,153,143],toColor:[11,44,122]}]},{id:"prediction_predefined",type:"multipart",colorRamps:[{fromColor:[40,146,199],toColor:[250,250,100]},{fromColor:[250,250,100],toColor:[232,16,20]}]},{id:"purpleBright_predefined",
fromColor:[255,204,255],toColor:[199,0,199]},{id:"purpleToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[77,32,150],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[20,122,11]}]},{id:"purpleToGreenDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[67,14,89],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[24,79,15]}]},{id:"purpleBlueBright_predefined",fromColor:[223,184,230],toColor:[112,12,242]},{id:"purpleBlueLightToDark_predefined",fromColor:[229,
213,242],toColor:[93,44,112]},{id:"purpleRedBright_predefined",fromColor:[255,204,225],toColor:[199,0,99]},{id:"purpleRedLightToDark_predefined",fromColor:[250,215,246],toColor:[143,17,57]},{id:"redBright_predefined",fromColor:[255,204,204],toColor:[219,0,0]},{id:"redLightToDark_predefined",fromColor:[255,224,224],toColor:[143,10,10]},{id:"redToBlueDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[196,69,57],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[48,95,207]}]},
{id:"redToBlueDivergingDark_predefined",type:"multipart",colorRamps:[{fromColor:[107,13,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[13,53,97]}]},{id:"redToGreen_predefined",type:"multipart",colorRamps:[{fromColor:[245,0,0],toColor:[245,245,0]},{fromColor:[245,245,0],toColor:[0,245,0]}]},{id:"redToGreenDivergingBright_predefined",type:"multipart",colorRamps:[{fromColor:[186,20,20],toColor:[255,255,191]},{fromColor:[255,255,191],toColor:[54,145,33]}]},{id:"redToGreenDivergingDark_predefined",
type:"multipart",colorRamps:[{fromColor:[97,21,13],toColor:[204,204,102]},{fromColor:[204,204,102],toColor:[16,69,16]}]},{id:"slope_predefined",type:"multipart",colorRamps:[{fromColor:[56,168,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,0,0]}]},{id:"spectrumFullBright_predefined",type:"multipart",colorRamps:[{fromColor:[255,0,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,0,255]}]},{id:"spectrumFullDark_predefined",type:"multipart",
colorRamps:[{fromColor:[153,0,0],toColor:[153,153,0]},{fromColor:[153,153,0],toColor:[0,153,153]},{fromColor:[0,153,153],toColor:[0,0,153]}]},{id:"spectrumFullLight_predefined",type:"multipart",colorRamps:[{fromColor:[255,153,153],toColor:[255,255,153]},{fromColor:[255,255,153],toColor:[153,255,255]},{fromColor:[153,255,255],toColor:[153,153,255]}]},{id:"surface_predefined",type:"multipart",colorRamps:[{fromColor:[112,153,89],toColor:[242,238,162]},{fromColor:[242,238,162],toColor:[242,206,133]},
{fromColor:[242,206,133],toColor:[194,140,124]},{fromColor:[194,140,124],toColor:[255,242,255]}]},{id:"temperature_predefined",type:"multipart",colorRamps:[{fromColor:[255,252,255],toColor:[255,0,255]},{fromColor:[255,0,255],toColor:[0,0,255]},{fromColor:[0,0,255],toColor:[0,255,255]},{fromColor:[0,255,255],toColor:[0,255,0]},{fromColor:[0,255,0],toColor:[255,255,0]},{fromColor:[255,255,0],toColor:[255,128,0]},{fromColor:[255,128,0],toColor:[128,0,0]}]},{id:"whiteToBlack_predefined",fromColor:[255,
255,255],toColor:[0,0,0]},{id:"yellowToDarkRed_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[242,167,46]},{fromColor:[242,167,46],toColor:[107,0,0]}]},{id:"yellowToGreenToDarkBlue_predefined",type:"multipart",colorRamps:[{fromColor:[255,255,128],toColor:[56,224,9]},{fromColor:[56,224,9],toColor:[26,147,171]},{fromColor:[26,147,171],toColor:[12,16,120]}]},{id:"yellowToRed_predefined",fromColor:[245,245,0],toColor:[255,0,0]},{id:"yellowGreenBright_predefined",fromColor:[236,
252,204],toColor:[157,204,16]},{id:"yellowGreenLightToDark_predefined",fromColor:[215,240,175],toColor:[96,107,45]}],A={aspect_predefined:"Aspect",blackToWhite_predefined:"Black to White",blueBright_predefined:"Blue Bright",blueLightToDark_predefined:"Blue Light to Dark",blueGreenBright_predefined:"Blue-Green Bright",blueGreenLightToDark_predefined:"Blue-Green Light to Dark",brownLightToDark_predefined:"Brown Light to Dark",brownToBlueGreenDivergingBright_predefined:"Brown to Blue Green Diverging, Bright",
brownToBlueGreenDivergingDark_predefined:"Brown to Blue Green Diverging, Dark",coefficientBias_predefined:"Coefficient Bias",coldToHotDiverging_predefined:"Cold to Hot Diverging",conditionNumber_predefined:"Condition Number",cyanToPurple_predefined:"Cyan to Purple",cyanLightToBlueDark_predefined:"Cyan-Light to Blue-Dark",distance_predefined:"Distance",elevation1_predefined:"Elevation #1",elevation2_predefined:"Elevation #2",errors_predefined:"Errors",grayLightToDark_predefined:"Gray Light to Dark",
greenBright_predefined:"Green Bright",greenLightToDark_predefined:"Green Light to Dark",greenToBlue_predefined:"Green to Blue",orangeBright_predefined:"Orange Bright",orangeLightToDark_predefined:"Orange Light to Dark",partialSpectrum_predefined:"Partial Spectrum",partialSpectrum1Diverging_predefined:"Partial Spectrum 1 Diverging",partialSpectrum2Diverging_predefined:"Partial Spectrum 2 Diverging",pinkToYellowGreenDivergingBright_predefined:"Pink to YellowGreen Diverging, Bright",pinkToYellowGreenDivergingDark_predefined:"Pink to YellowGreen Diverging, Dark",
precipitation_predefined:"Precipitation",prediction_predefined:"Prediction",purpleBright_predefined:"Purple Bright",purpleToGreenDivergingBright_predefined:"Purple to Green Diverging, Bright",purpleToGreenDivergingDark_predefined:"Purple to Green Diverging, Dark",purpleBlueBright_predefined:"Purple-Blue Bright",purpleBlueLightToDark_predefined:"Purple-Blue Light to Dark",purpleRedBright_predefined:"Purple-Red Bright",purpleRedLightToDark_predefined:"Purple-Red Light to Dark",redBright_predefined:"Red Bright",
redLightToDark_predefined:"Red Light to Dark",redToBlueDivergingBright_predefined:"Red to Blue Diverging, Bright",redToBlueDivergingDark_predefined:"Red to Blue Diverging, Dark",redToGreen_predefined:"Red to Green",redToGreenDivergingBright_predefined:"Red to Green Diverging, Bright",redToGreenDivergingDark_predefined:"Red to Green Diverging, Dark",slope_predefined:"Slope",spectrumFullBright_predefined:"Spectrum-Full Bright",spectrumFullDark_predefined:"Spectrum-Full Dark",spectrumFullLight_predefined:"Spectrum-Full Light",
surface_predefined:"Surface",temperature_predefined:"Temperature",whiteToBlack_predefined:"White to Black",yellowToDarkRed_predefined:"Yellow to Dark Red",yellowToGreenToDarkBlue_predefined:"Yellow to Green to Dark Blue",yellowToRed_predefined:"Yellow to Red",yellowGreenBright_predefined:"Yellow-Green Bright",yellowGreenLightToDark_predefined:"Yellow-Green Light to Dark"};n.PREDEFINED_COLOR_RAMP_NAME_MAP=A;n.PREDEFINED_JSON_COLOR_RAMPS=z;n.convertColorRampToColormap=function(a,b,f=!1){if(a&&b&&!(1>
b)){var d="toJSON"in a?a.toJSON():a,h="multipart"===d.type?d.colorRamps.length:1;a=[];var l=[],g,r,t,v=0;if(1===b){var k="multipart"===d.type?d.colorRamps[0].fromColor:d.fromColor;l.push([0].concat(k));return l}for(let c=0;c<h;c++)a[c]={start:null,end:null},a[c].start=v,a[c].end=v+1/h,v=a[c].end;for(let c=0;c<b;c++){var w=c/(b-1);a.forEach((e,m)=>{if(w>=e.start&&(w<e.end||c===b-1&&m===h-1)){t=(w-e.start)/(e.end-e.start);"multipart"===d.type?(k=d.colorRamps[m].fromColor,g=d.colorRamps[m].toColor):
(k=d.fromColor,g=d.toColor);if(0===c)l.push([c].concat(k.slice(0,3)));else if(c===b-1)l.push([c].concat(g.slice(0,3)));else{var p={r:g[0],g:g[1],b:g[2]};e=t;m=u.toLAB({r:k[0],g:k[1],b:k[2]});p=u.toLAB(p);r=u.toRGB({l:m.l*(1-e)+e*p.l,a:m.a*(1-e)+e*p.a,b:m.b*(1-e)+e*p.b});l.push([c,r.r,r.g,r.b])}e=null!=k[3]?1<k[3]?k[3]/255:k[3]:1;m=null!=g[3]?1<g[3]?g[3]/255:g[3]:1;f&&l[c].push(Math.min(255,Math.round(255*(e*(1-t)+m*t))))}})}return l}};n.getColorRampId=y;n.getColorRampName=function(a){return(a=y(a))?
A[a]:null};Object.defineProperty(n,"__esModule",{value:!0})});