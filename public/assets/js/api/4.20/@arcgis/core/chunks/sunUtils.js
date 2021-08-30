/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
import{e as t,p as n,h as e,S as i,b as a,t as o,c as r}from"./mathUtils.js";import{i as u,a as l,j as s,r as c}from"./mat4.js";import{c as f}from"./mat4f64.js";var d,m,g={exports:{}};d=g,void 0!==(m=function(){var t=Math.PI,n=Math.sin,e=Math.cos,i=Math.tan,a=Math.asin,o=Math.atan2,r=Math.acos,u=t/180,l=864e5,s=2440588,c=2451545,f={dec:0,ra:0};function d(t){return t.valueOf()/l-.5+s}function m(t){return new Date((t+.5-s)*l)}function g(t){return d(t)-c}var h=23.4397*u;function b(t,a){return o(n(t)*e(h)-i(a)*n(h),e(t))}function A(t,i){return a(n(i)*e(h)+e(i)*n(h)*n(t))}function N(t,a,r){return o(n(t),e(t)*n(a)-i(r)*e(a))}function O(t,i,o){return a(n(i)*n(o)+e(i)*e(o)*e(t))}function P(t,n){return u*(280.16+360.9856235*t)-n}function T(t){return u*(357.5291+.98560028*t)}function M(t){return u*(1.9148*n(t)+.02*n(2*t)+3e-4*n(3*t))}function p(n,e){return n+e+102.9372*u+t}function E(t,n){var e=T(t),i=p(e,M(e));return n||(n={dec:0,ra:0}),n.dec=A(i,0),n.ra=b(i,0),n}var I={POLAR_EXCEPTION:{NORMAL:0,MIDNIGHT_SUN:1,POLAR_NIGHT:2},getPosition:function(t,n,e,i){var a=u*-e,o=u*n,r=g(t),l=E(r,f),s=P(r,a)-l.ra;return i||(i={azimuth:0,altitude:0}),i.azimuth=N(s,o,l.dec),i.altitude=O(s,o,l.dec),i}},v=[[-.83,"sunrise","sunset"]];I.addTime=function(t,n,e){v.push([t,n,e])};var L=9e-4;function _(n,e){return Math.round(n-L-e/(2*t))}function R(n,e,i){return L+(n+e)/(2*t)+i}function y(t,e,i){return c+t+.0053*n(e)-.0069*n(2*i)}function z(t,i,a){return r((n(t)-n(i)*n(a))/(e(i)*e(a)))}function x(t){var i=u*(134.963+13.064993*t),a=u*(93.272+13.22935*t),o=u*(218.316+13.176396*t)+6.289*u*n(i),r=5.128*u*n(a),l=385001-20905*e(i);return{ra:b(o,r),dec:A(o,r),dist:l}}return I.getTimes=function(t,i,a){var o=u*-a,r=u*i,l=_(g(t),o),s=R(0,o,l),c=T(s),f=M(c),d=p(c,f),h=A(d,0),b=y(s,c,d);function N(t){return y(R(z(t,r,h),o,l),c,d)}function O(t){var i=(n(t)-n(r)*n(h))/(e(r)*e(h));return i<-1?I.POLAR_EXCEPTION.MIDNIGHT_SUN:i>1?I.POLAR_EXCEPTION.POLAR_NIGHT:I.POLAR_EXCEPTION.NORMAL}var P,E,L,x,D,H={solarNoon:m(b),nadir:m(b-.5),polarException:I.POLAR_EXCEPTION.NORMAL};for(P=0,E=v.length;P<E;P+=1)D=b-((x=N((L=v[P])[0]*u))-b),H[L[1]]=m(D),H[L[2]]=m(x);return H.polarException=O(v[0][0]*u),H},I.getMoonPosition=function(t,n,e){var a=u*-e,o=u*n,r=g(t),l=x(r),s=P(r,a)-l.ra,c=O(s,o,l.dec);return c+=.017*u/i(c+10.26*u/(c+5.1*u)),{azimuth:N(s,o,l.dec),altitude:c,distance:l.dist}},I.getMoonFraction=function(t){var i=g(t),a=E(i),u=x(i),l=149598e3,s=r(n(a.dec)*n(u.dec)+e(a.dec)*e(u.dec)*e(a.ra-u.ra)),c=o(l*n(s),u.dist-l*e(s));return(1+e(c))/2},I}())&&(d.exports=m);var h=g.exports;const b={local:{altitude:1500,ambientAtNight:.1,ambientAtNoon:.45,ambientAtTwilight:.2,diffuseAtNoon:.65,diffuseAtTwilight:.7},global:{altitude:8e5,ambient:.015,diffuse:.75},planarDirection:{localAltitude:1e4,globalAltitude:1e6,globalAngles:{azimuth:1.3*Math.PI,altitude:.6*Math.PI}}};function A(a,o){const u=o[2],l=p;t(l.ambient.color,1,1,1),l.ambient.intensity=b.global.ambient,t(l.diffuse.color,1,1,1),l.diffuse.intensity=b.global.diffuse;let s=(Math.abs(u)-b.local.altitude)/(b.global.altitude-b.local.altitude);s=r(s,0,1),l.globalFactor=s;const c=h.getTimes(a,o[1],o[0]);if(s<1){const t=function(t,e){const i=t.valueOf();let a,o;e.polarException===h.POLAR_EXCEPTION.MIDNIGHT_SUN?(a=i-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,o=a+432e6):e.polarException===h.POLAR_EXCEPTION.POLAR_NIGHT?(a=i-2,o=i-1):(a=e.sunrise.valueOf(),o=e.sunset.valueOf());const r=o-a,u=a+r/2,l=r/4,s=u-l,c=u+l,f=.06*r,d=a-f/2,m=a+f/2,g=o-f/2,A=o+f/2,N=b.local,O=[.01,N.ambientAtNight],P=[.8,.8,1],T=[.01,.01,.01],M=[N.diffuseAtTwilight,N.ambientAtTwilight],p=[1,.75,.75],I=[.8,.8,1],v=[.9*N.diffuseAtNoon,N.ambientAtNoon],L=[1,.98,.98],_=[.98,.98,1],R=[N.diffuseAtNoon,N.ambientAtNoon],y=[1,1,1],z=[1,1,1],x=v,D=L,H=_,C=M,X=p,G=I;let S,w,F=[0,0],U=[0,0,0],j=[0,0,0];i<d||i>A?(F=O,U=T,j=P,w="night"):i<m?(S=m-d,F=E(i-d,S,O,M),U=E(i-d,S,T,p),j=E(i-d,S,P,I),w="sun rising"):i<s?(S=s-m,F=E(i-m,S,M,v),U=E(i-m,S,p,L),j=E(i-m,S,I,_),w="early morning"):i<u?(S=u-s,F=E(i-s,S,v,R),U=E(i-s,S,L,y),j=E(i-s,S,_,z),w="late morning"):i<c?(S=c-u,F=E(i-u,S,R,x),U=E(i-u,S,y,D),j=E(i-u,S,z,H),w="early afternoon"):i<g?(S=g-c,F=E(i-c,S,x,C),U=E(i-c,S,D,X),j=E(i-c,S,H,G),w="late afternoon"):i<A&&(S=A-g,F=E(i-g,S,C,O),U=E(i-g,S,X,T),j=E(i-g,S,G,P),w="sun setting");return{diffuse:{intensity:F[0],color:n(U[0],U[1],U[2])},ambient:{intensity:F[1],color:n(j[0],j[1],j[2])},timeOfDay:w}}(a,c);e(l.ambient.color,t.ambient.color,l.ambient.color,s),l.ambient.intensity=i(t.ambient.intensity,l.ambient.intensity,s),e(l.diffuse.color,t.diffuse.color,l.diffuse.color,s),l.diffuse.intensity=i(t.diffuse.intensity,l.diffuse.intensity,s)}return l.noonFactor=function(t,n){const e=t.valueOf();let i,a;n.polarException===h.POLAR_EXCEPTION.MIDNIGHT_SUN?(i=e-60*(t.getHours()+48)*60*1e3-60*t.getMinutes()*1e3,a=i+432e6):n.polarException===h.POLAR_EXCEPTION.POLAR_NIGHT?(i=e-2,a=e-1):(i=n.sunrise.valueOf(),a=n.sunset.valueOf());const o=i+(a-i)/2;return 1-r(Math.abs(e-o)/432e5,0,1)}(a,c),l}function N(n,e,i,f){f||(f=a());const d=M,m=u(T);if("global"===i)h.getPosition(n,0,0,d),t(f,0,0,-1),l(m,m,-d.azimuth),s(m,m,-d.altitude),o(f,f,m);else{const i=b.planarDirection,a=i.globalAngles,u=e[2];let s=(Math.abs(u)-i.localAltitude)/(i.globalAltitude-i.localAltitude);s=r(s,0,1),s<1?(h.getPosition(n,e[1],e[0],d),d.azimuth=(1-s)*d.azimuth+s*a.azimuth,d.altitude=(1-s)*d.altitude+s*a.altitude):(d.azimuth=a.azimuth,d.altitude=a.altitude),t(f,0,-1,0),c(m,m,-d.azimuth),l(m,m,-d.altitude),o(f,f,m)}return f}function O(t,n){if("global"===n)return!0;{const n=b.planarDirection,e=t[2];return Math.abs(e)<n.localAltitude}}function P(t,n,e,i,a){const o=a.length;if(o<1)return a;const r=t.getTime(),u=(n.getTime()-r)/o;for(let t=0;t<o;++t)I.setTime(r+u*t),N(I,e,i,a[t]);return a}const T=f(),M={azimuth:0,altitude:0},p={ambient:{color:a(),intensity:0},diffuse:{color:a(),intensity:0,directionToLightSource:a()},globalFactor:0,noonFactor:0};function E(t,n,e,i){const a=[];for(let o=0;o<e.length;o++)a[o]=(i[o]-e[o])*t/n+e[o];return a}const I=new Date(0);export{h as S,N as a,O as b,A as c,P as d};
