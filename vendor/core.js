/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e,r=Array,n=r.prototype,o=Object,i=o.prototype,a=Function,c=a.prototype,u=String,s=u.prototype,f=Number,l=f.prototype,p=n.slice,h=n.splice,y=n.push,d=n.unshift,v=n.concat,b=n.join,g=c.call,w=c.apply,O=Math.max,m=Math.min,j=i.toString,T="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,S=Function.prototype.toString,E=/^\s*class /,_=function(t){try{var e=S.call(t),r=e.replace(/\/\/.*\n/g,""),n=r.replace(/\/\*[.\s\S]*\*\//g,""),o=n.replace(/\n/gm," ").replace(/ {2}/g," ");return E.test(o)}catch(i){return!1}},x=function(t){try{return _(t)?!1:(S.call(t),!0)}catch(e){return!1}},I="[object Function]",C="[object GeneratorFunction]",t=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(T)return x(t);if(_(t))return!1;var e=j.call(t);return e===I||e===C},P=RegExp.prototype.exec,M=function(t){try{return P.call(t),!0}catch(e){return!1}},N="[object RegExp]";e=function(t){return"object"!=typeof t?!1:T?M(t):j.call(t)===N};var A,D=String.prototype.valueOf,R=function(t){try{return D.call(t),!0}catch(e){return!1}},k="[object String]";A=function(t){return"string"==typeof t?!0:"object"!=typeof t?!1:T?R(t):j.call(t)===k};var F=o.defineProperty&&function(){try{var t={};o.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(r){return!1}}(),L=function(t){var e;return e=F?function(t,e,r,n){!n&&e in t||o.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(i.hasOwnProperty),U=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},z=f.isNaN||function(t){return t!==t},H={ToInteger:function(t){var e=+t;return z(e)?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},ToPrimitive:function(e){var r,n,o;if(U(e))return e;if(n=e.valueOf,t(n)&&(r=n.call(e),U(r)))return r;if(o=e.toString,t(o)&&(r=o.call(e),U(r)))return r;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return o(t)},ToUint32:function(t){return t>>>0}},$=function(){};L(c,{bind:function(e){var r=this;if(!t(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var n,i=p.call(arguments,1),c=function(){if(this instanceof n){var t=w.call(r,this,v.call(i,p.call(arguments)));return o(t)===t?t:this}return w.call(r,e,v.call(i,p.call(arguments)))},u=O(0,r.length-i.length),s=[],f=0;u>f;f++)y.call(s,"$"+f);return n=a("binder","return function ("+b.call(s,",")+"){ return binder.apply(this, arguments); }")(c),r.prototype&&($.prototype=r.prototype,n.prototype=new $,$.prototype=null),n}});var q=g.bind(i.hasOwnProperty),G=g.bind(i.toString),J=g.bind(p),X=w.bind(p),W=g.bind(s.slice),V=g.bind(s.split),Z=g.bind(s.indexOf),B=g.bind(y),Y=g.bind(i.propertyIsEnumerable),K=g.bind(n.sort),Q=r.isArray||function(t){return"[object Array]"===G(t)},tt=1!==[].unshift(0);L(n,{unshift:function(){return d.apply(this,arguments),this.length}},tt),L(r,{isArray:Q});var et=o("a"),rt="a"!==et[0]||!(0 in et),nt=function(t){var e=!0,r=!0,n=!1;if(t)try{t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")}catch(o){n=!0}return!!t&&!n&&e&&r};L(n,{forEach:function(e){var r,n=H.ToObject(this),o=rt&&A(this)?V(this,""):n,i=-1,a=H.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++i<a;)i in o&&("undefined"==typeof r?e(o[i],i,n):e.call(r,o[i],i,n))}},!nt(n.forEach)),L(n,{map:function(e){var n,o=H.ToObject(this),i=rt&&A(this)?V(this,""):o,a=H.ToUint32(i.length),c=r(a);if(arguments.length>1&&(n=arguments[1]),!t(e))throw new TypeError("Array.prototype.map callback must be a function");for(var u=0;a>u;u++)u in i&&("undefined"==typeof n?c[u]=e(i[u],u,o):c[u]=e.call(n,i[u],u,o));return c}},!nt(n.map)),L(n,{filter:function(e){var r,n,o=H.ToObject(this),i=rt&&A(this)?V(this,""):o,a=H.ToUint32(i.length),c=[];if(arguments.length>1&&(n=arguments[1]),!t(e))throw new TypeError("Array.prototype.filter callback must be a function");for(var u=0;a>u;u++)u in i&&(r=i[u],("undefined"==typeof n?e(r,u,o):e.call(n,r,u,o))&&B(c,r));return c}},!nt(n.filter)),L(n,{every:function(e){var r,n=H.ToObject(this),o=rt&&A(this)?V(this,""):n,i=H.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.every callback must be a function");for(var a=0;i>a;a++)if(a in o&&!("undefined"==typeof r?e(o[a],a,n):e.call(r,o[a],a,n)))return!1;return!0}},!nt(n.every)),L(n,{some:function(e){var r,n=H.ToObject(this),o=rt&&A(this)?V(this,""):n,i=H.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.some callback must be a function");for(var a=0;i>a;a++)if(a in o&&("undefined"==typeof r?e(o[a],a,n):e.call(r,o[a],a,n)))return!0;return!1}},!nt(n.some));var ot=!1;n.reduce&&(ot="object"==typeof n.reduce.call("es5",function(t,e,r,n){return n})),L(n,{reduce:function(e){var r=H.ToObject(this),n=rt&&A(this)?V(this,""):r,o=H.ToUint32(n.length);if(!t(e))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,a=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a++];break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;o>a;a++)a in n&&(i=e(i,n[a],a,r));return i}},!ot);var it=!1;n.reduceRight&&(it="object"==typeof n.reduceRight.call("es5",function(t,e,r,n){return n})),L(n,{reduceRight:function(e){var r=H.ToObject(this),n=rt&&A(this)?V(this,""):r,o=H.ToUint32(n.length);if(!t(e))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,a=o-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>a)return i;do a in n&&(i=e(i,n[a],a,r));while(a--);return i}},!it);var at=n.indexOf&&-1!==[0,1].indexOf(1,2);L(n,{indexOf:function(t){var e=rt&&A(this)?V(this,""):H.ToObject(this),r=H.ToUint32(e.length);if(0===r)return-1;var n=0;for(arguments.length>1&&(n=H.ToInteger(arguments[1])),n=n>=0?n:O(0,r+n);r>n;n++)if(n in e&&e[n]===t)return n;return-1}},at);var ct=n.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);L(n,{lastIndexOf:function(t){var e=rt&&A(this)?V(this,""):H.ToObject(this),r=H.ToUint32(e.length);if(0===r)return-1;var n=r-1;for(arguments.length>1&&(n=m(n,H.ToInteger(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}},ct);var ut=function(){var t=[1,2],e=t.splice();return 2===t.length&&Q(e)&&0===e.length}();L(n,{splice:function(t,e){return 0===arguments.length?[]:h.apply(this,arguments)}},!ut);var st=function(){var t={};return n.splice.call(t,0,0,1),1===t.length}();L(n,{splice:function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=O(H.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&(r=J(arguments),r.length<2?B(r,this.length-t):r[1]=H.ToInteger(e)),h.apply(this,r)}},!st);var ft=function(){var t=new r(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),lt=function(){var t=256,e=[];return e[t]="a",e.splice(t+1,0,"b"),"a"===e[t]}();L(n,{splice:function(t,e){for(var r,n=H.ToObject(this),o=[],i=H.ToUint32(n.length),a=H.ToInteger(t),c=0>a?O(i+a,0):m(a,i),s=m(O(H.ToInteger(e),0),i-c),f=0;s>f;)r=u(c+f),q(n,r)&&(o[f]=n[r]),f+=1;var l,p=J(arguments,2),h=p.length;if(s>h){f=c;for(var y=i-s;y>f;)r=u(f+s),l=u(f+h),q(n,r)?n[l]=n[r]:delete n[l],f+=1;f=i;for(var d=i-s+h;f>d;)delete n[f-1],f-=1}else if(h>s)for(f=i-s;f>c;)r=u(f+s-1),l=u(f+h-1),q(n,r)?n[l]=n[r]:delete n[l],f-=1;f=c;for(var v=0;v<p.length;++v)n[f]=p[v],f+=1;return n.length=i-s+h,o}},!ft||!lt);var pt,ht=n.join;try{pt="1,2,3"!==Array.prototype.join.call("123",",")}catch(yt){pt=!0}pt&&L(n,{join:function(t){var e="undefined"==typeof t?",":t;return ht.call(A(this)?V(this,""):this,e)}},pt);var dt="1,2"!==[1,2].join(void 0);dt&&L(n,{join:function(t){var e="undefined"==typeof t?",":t;return ht.call(this,e)}},dt);var vt=function(t){for(var e=H.ToObject(this),r=H.ToUint32(e.length),n=0;n<arguments.length;)e[r+n]=arguments[n],n+=1;return e.length=r+n,r+n},bt=function(){var t={},e=Array.prototype.push.call(t,void 0);return 1!==e||1!==t.length||"undefined"!=typeof t[0]||!q(t,0)}();L(n,{push:function(t){return Q(this)?y.apply(this,arguments):vt.apply(this,arguments)}},bt);var gt=function(){var t=[],e=t.push(void 0);return 1!==e||1!==t.length||"undefined"!=typeof t[0]||!q(t,0)}();L(n,{push:vt},gt),L(n,{slice:function(t,e){var r=A(this)?V(this,""):this;return X(r,arguments)}},rt);var wt=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(t){}return!1}(),Ot=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),mt=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();L(n,{sort:function(e){if("undefined"==typeof e)return K(this);if(!t(e))throw new TypeError("Array.prototype.sort callback must be a function");return K(this,e)}},wt||!mt||!Ot);var jt=!{toString:null}.propertyIsEnumerable("toString"),Tt=function(){}.propertyIsEnumerable("prototype"),St=!q("x","0"),Et=function(t){var e=t.constructor;return e&&e.prototype===t},_t={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0},xt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!_t["$"+t]&&q(window,t)&&null!==window[t]&&"object"==typeof window[t]&&Et(window[t])}catch(e){return!0}return!1}(),It=function(t){if("undefined"==typeof window||!xt)return Et(t);try{return Et(t)}catch(e){return!1}},Ct=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Pt=Ct.length,Mt=function(t){return"[object Arguments]"===G(t)},Nt=function(e){return null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&!Q(e)&&t(e.callee)},At=Mt(arguments)?Mt:Nt;L(o,{keys:function(e){var r=t(e),n=At(e),o=null!==e&&"object"==typeof e,i=o&&A(e);if(!o&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var a=[],c=Tt&&r;if(i&&St||n)for(var s=0;s<e.length;++s)B(a,u(s));if(!n)for(var f in e)c&&"prototype"===f||!q(e,f)||B(a,u(f));if(jt)for(var l=It(e),p=0;Pt>p;p++){var h=Ct[p];l&&"constructor"===h||!q(e,h)||B(a,h)}return a}});var Dt=o.keys&&function(){return 2===o.keys(arguments).length}(1,2),Rt=o.keys&&function(){var t=o.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),kt=o.keys;L(o,{keys:function(t){return kt(At(t)?J(t):t)}},!Dt||Rt);var Ft,Lt,Ut=0!==new Date(-0xc782b5b342b24).getUTCMonth(),zt=new Date(-0x55d318d56a724),Ht=new Date(14496624e5),$t="Mon, 01 Jan -45875 11:59:59 GMT"!==zt.toUTCString(),qt=zt.getTimezoneOffset();-720>qt?(Ft="Tue Jan 02 -45875"!==zt.toDateString(),Lt=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ht.toString())):(Ft="Mon Jan 01 -45875"!==zt.toDateString(),Lt=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Ht.toString()));var Gt=g.bind(Date.prototype.getFullYear),Jt=g.bind(Date.prototype.getMonth),Xt=g.bind(Date.prototype.getDate),Wt=g.bind(Date.prototype.getUTCFullYear),Vt=g.bind(Date.prototype.getUTCMonth),Zt=g.bind(Date.prototype.getUTCDate),Bt=g.bind(Date.prototype.getUTCDay),Yt=g.bind(Date.prototype.getUTCHours),Kt=g.bind(Date.prototype.getUTCMinutes),Qt=g.bind(Date.prototype.getUTCSeconds),te=g.bind(Date.prototype.getUTCMilliseconds),ee=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],re=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ne=function(t,e){return Xt(new Date(e,t,0))};L(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Gt(this);return 0>t&&Jt(this)>11?t+1:t},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Gt(this),e=Jt(this);return 0>t&&e>11?0:e},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Gt(this),e=Jt(this),r=Xt(this);if(0>t&&e>11){if(12===e)return r;var n=ne(0,t+1);return n-r+1}return r},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Wt(this);return 0>t&&Vt(this)>11?t+1:t},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Wt(this),e=Vt(this);return 0>t&&e>11?0:e},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Wt(this),e=Vt(this),r=Zt(this);if(0>t&&e>11){if(12===e)return r;var n=ne(0,t+1);return n-r+1}return r}},Ut),L(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Bt(this),e=Zt(this),r=Vt(this),n=Wt(this),o=Yt(this),i=Kt(this),a=Qt(this);return ee[t]+", "+(10>e?"0"+e:e)+" "+re[r]+" "+n+" "+(10>o?"0"+o:o)+":"+(10>i?"0"+i:i)+":"+(10>a?"0"+a:a)+" GMT"}},Ut||$t),L(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return ee[t]+" "+re[r]+" "+(10>e?"0"+e:e)+" "+n}},Ut||Ft),(Ut||Lt)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),c=this.getTimezoneOffset(),u=Math.floor(Math.abs(c)/60),s=Math.floor(Math.abs(c)%60);return ee[t]+" "+re[r]+" "+(10>e?"0"+e:e)+" "+n+" "+(10>o?"0"+o:o)+":"+(10>i?"0"+i:i)+":"+(10>a?"0"+a:a)+" GMT"+(c>0?"-":"+")+(10>u?"0"+u:u)+(10>s?"0"+s:s)},F&&o.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var oe=-621987552e5,ie="-000001",ae=Date.prototype.toISOString&&-1===new Date(oe).toISOString().indexOf(ie),ce=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString(),ue=g.bind(Date.prototype.getTime);L(Date.prototype,{toISOString:function(){if(!isFinite(this)||!isFinite(ue(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Wt(this),e=Vt(this);t+=Math.floor(e/12),e=(e%12+12)%12;var r=[e+1,Zt(this),Yt(this),Kt(this),Qt(this)];t=(0>t?"-":t>9999?"+":"")+W("00000"+Math.abs(t),t>=0&&9999>=t?-4:-6);for(var n=0;n<r.length;++n)r[n]=W("00"+r[n],-2);return t+"-"+J(r,0,2).join("-")+"T"+J(r,2).join(":")+"."+W("000"+te(this),-3)+"Z"}},ae||ce);var se=function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(oe).toJSON().indexOf(ie)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}();se||(Date.prototype.toJSON=function(e){var r=o(this),n=H.ToPrimitive(r);if("number"==typeof n&&!isFinite(n))return null;var i=r.toISOString;if(!t(i))throw new TypeError("toISOString property is not callable");return i.call(r)});var fe=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),le=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),pe=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(pe||le||!fe){var he=Math.pow(2,31)-1,ye=z(new Date(1970,0,1,0,0,0,he+1).getTime());Date=function(t){var e=function(r,n,o,i,a,c,s){var f,l=arguments.length;if(this instanceof t){var p=c,h=s;if(ye&&l>=7&&s>he){var y=Math.floor(s/he)*he,d=Math.floor(y/1e3);p+=d,h-=1e3*d}f=1===l&&u(r)===r?new t(e.parse(r)):l>=7?new t(r,n,o,i,a,p,h):l>=6?new t(r,n,o,i,a,p):l>=5?new t(r,n,o,i,a):l>=4?new t(r,n,o,i):l>=3?new t(r,n,o):l>=2?new t(r,n):l>=1?new t(r instanceof t?+r:r):new t}else f=t.apply(this,arguments);return U(f)||L(f,{constructor:e},!0),f},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)},i=function(e){var r=0,n=e;if(ye&&n>he){var o=Math.floor(n/he)*he,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return f(new t(1970,0,1,0,0,r,n))};for(var a in t)q(t,a)&&(e[a]=t[a]);L(e,{now:t.now,UTC:t.UTC},!0),e.prototype=t.prototype,L(e.prototype,{constructor:e},!0);var c=function(e){var n=r.exec(e);if(n){var a,c=f(n[1]),u=f(n[2]||1)-1,s=f(n[3]||1)-1,l=f(n[4]||0),p=f(n[5]||0),h=f(n[6]||0),y=Math.floor(1e3*f(n[7]||0)),d=Boolean(n[4]&&!n[8]),v="-"===n[9]?1:-1,b=f(n[10]||0),g=f(n[11]||0),w=p>0||h>0||y>0;return(w?24:25)>l&&60>p&&60>h&&1e3>y&&u>-1&&12>u&&24>b&&60>g&&s>-1&&s<o(c,u+1)-o(c,u)&&(a=60*(24*(o(c,u)+s)+l+b*v),a=1e3*(60*(a+p+g*v)+h)+y,d&&(a=i(a)),a>=-864e13&&864e13>=a)?a:NaN}return t.parse.apply(this,arguments)};return L(e,{parse:c}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var de=l.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),ve={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1,n=e;++r<ve.size;)n+=t*ve.data[r],ve.data[r]=n%ve.base,n=Math.floor(n/ve.base)},divide:function(t){for(var e=ve.size,r=0;--e>=0;)r+=ve.data[e],ve.data[e]=Math.floor(r/t),r=r%t*ve.base},numToString:function(){for(var t=ve.size,e="";--t>=0;)if(""!==e||0===t||0!==ve.data[t]){var r=u(ve.data[t]);""===e?e=r:e+=W("0000000",0,7-r.length)+r}return e},pow:function ke(t,e,r){return 0===e?r:e%2===1?ke(t,e-1,r*t):ke(t*t,e/2,r)},log:function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}},be=function(t){var e,r,n,o,i,a,c,s;if(e=f(t),e=z(e)?0:Math.floor(e),0>e||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=f(this),z(r))return"NaN";if(-1e21>=r||r>=1e21)return u(r);if(n="",0>r&&(n="-",r=-r),o="0",r>1e-21)if(i=ve.log(r*ve.pow(2,69,1))-69,a=0>i?r*ve.pow(2,-i,1):r/ve.pow(2,i,1),a*=4503599627370496,i=52-i,i>0){for(ve.multiply(0,a),c=e;c>=7;)ve.multiply(1e7,0),c-=7;for(ve.multiply(ve.pow(10,c,1),0),c=i-1;c>=23;)ve.divide(1<<23),c-=23;ve.divide(1<<c),ve.multiply(1,1),ve.divide(2),o=ve.numToString()}else ve.multiply(0,a),ve.multiply(1<<-i,0),o=ve.numToString()+W("0.00000000000000000000",2,2+e);return e>0?(s=o.length,o=e>=s?n+W("0.0000000000000000000",0,e-s+2)+o:n+W(o,0,s-e)+"."+W(o,s-e)):o=n+o,o};L(l,{toFixed:be},de);var ge=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),we=l.toPrecision;L(l,{toPrecision:function(t){return"undefined"==typeof t?we.call(this):we.call(this,t)}},ge),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t="undefined"==typeof/()??/.exec("")[1],r=Math.pow(2,32)-1;s.split=function(n,o){var i=String(this);if("undefined"==typeof n&&0===o)return[];if(!e(n))return V(this,n,o);var a,c,u,s,f=[],l=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),p=0,h=new RegExp(n.source,l+"g");t||(a=new RegExp("^"+h.source+"$(?!\\s)",l));var d="undefined"==typeof o?r:H.ToUint32(o);for(c=h.exec(i);c&&(u=c.index+c[0].length,!(u>p&&(B(f,W(i,p,c.index)),!t&&c.length>1&&c[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(c[t]=void 0)}),c.length>1&&c.index<i.length&&y.apply(f,J(c,1)),s=c[0].length,p=u,f.length>=d)));)h.lastIndex===c.index&&h.lastIndex++,c=h.exec(i);return p===i.length?!s&&h.test("")||B(f,""):B(f,W(i,p)),f.length>d?J(f,0,d):f}}():"0".split(void 0,0).length&&(s.split=function(t,e){return"undefined"==typeof t&&0===e?[]:V(this,t,e)});var Oe=s.replace,me=function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){B(t,r)}),1===t.length&&"undefined"==typeof t[0]}();me||(s.replace=function(r,n){var o=t(n),i=e(r)&&/\)[*?]/.test(r.source);if(o&&i){var a=function(t){var e=arguments.length,o=r.lastIndex;r.lastIndex=0;var i=r.exec(t)||[];return r.lastIndex=o,B(i,arguments[e-2],arguments[e-1]),n.apply(this,i)};return Oe.call(this,r,a)}return Oe.call(this,r,n)});var je=s.substr,Te="".substr&&"b"!=="0b".substr(-1);L(s,{substr:function(t,e){var r=t;return 0>t&&(r=O(this.length+t,0)),je.call(this,r,e)}},Te);var Se="	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",Ee="​",_e="["+Se+"]",xe=new RegExp("^"+_e+_e+"*"),Ie=new RegExp(_e+_e+"*$"),Ce=s.trim&&(Se.trim()||!Ee.trim());L(s,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return u(this).replace(xe,"").replace(Ie,"")}},Ce);var Pe=g.bind(String.prototype.trim),Me=s.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);L(s,{lastIndexOf:function(t){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");for(var e=u(this),r=u(t),n=arguments.length>1?f(arguments[1]):NaN,o=z(n)?1/0:H.ToInteger(n),i=m(O(o,0),e.length),a=r.length,c=i+a;c>0;){c=O(0,c-a);var s=Z(W(e,c,i+a),r);if(-1!==s)return c+s}return-1}},Me);var Ne=s.lastIndexOf;if(L(s,{lastIndexOf:function(t){return Ne.apply(this,arguments)}},1!==s.lastIndexOf.length),8===parseInt(Se+"08")&&22===parseInt(Se+"0x16")||(parseInt=function(t){var e=/^[\-+]?0[xX]/;return function(r,n){var o=Pe(r),i=f(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt)),1/parseFloat("-0")!==-(1/0)&&(parseFloat=function(t){return function(e){var r=Pe(e),n=t(r);return 0===n&&"-"===W(r,0,1)?-0:n}}(parseFloat)),"RangeError: test"!==String(new RangeError("test"))){var Ae=function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");var t=this.name;"undefined"==typeof t?t="Error":"string"!=typeof t&&(t=u(t));var e=this.message;return"undefined"==typeof e?e="":"string"!=typeof e&&(e=u(e)),t?e?t+": "+e:t:e};Error.prototype.toString=Ae}if(F){var De=function(t,e){if(Y(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.configurable&&(r.enumerable=!1,Object.defineProperty(t,e,r))}};De(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),De(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){var Re=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t};RegExp.prototype.toString=Re}}),!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e,r,n,o=Function.call,i=Object.prototype,a=o.bind(i.hasOwnProperty),c=o.bind(i.propertyIsEnumerable),u=o.bind(i.toString),s=a(i,"__defineGetter__");s&&(t=o.bind(i.__defineGetter__),e=o.bind(i.__defineSetter__),r=o.bind(i.__lookupGetter__),n=o.bind(i.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){var e=t.__proto__;return e||null===e?e:"[object Function]"===u(t.constructor)?t.constructor.prototype:t instanceof Object?i:null});var f=function(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(e){return!1}};if(Object.defineProperty){var l=f({}),p="undefined"==typeof document||f(document.createElement("div"));if(!p||!l)var h=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||h){var y="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(y+t);if(h)try{return h.call(Object,t,e)}catch(o){}var u;if(!a(t,e))return u;if(u={enumerable:c(t,e),configurable:!0},s){var f=t.__proto__,l=t!==i;l&&(t.__proto__=i);var p=r(t,e),d=n(t,e);if(l&&(t.__proto__=f),p||d)return p&&(u.get=p),d&&(u.set=d),u}return u.value=t[e],u.writable=!0,u}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)}),!Object.create){var d,v=!({__proto__:null}instanceof Object),b=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(t){return!1}},g=function(){var t,e;e=new ActiveXObject("htmlfile");var r="script";return e.write("<"+r+"></"+r+">"),e.close(),t=e.parentWindow.Object.prototype,e=null,t},w=function(){var t,e=document.createElement("iframe"),r=document.body||document.documentElement;return e.style.display="none",r.appendChild(e),e.src="javascript:",t=e.contentWindow.Object.prototype,r.removeChild(e),e=null,t};d=v||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var t=b()?g():w();delete t.constructor,delete t.hasOwnProperty,delete t.propertyIsEnumerable,delete t.isPrototypeOf,delete t.toLocaleString,delete t.toString,delete t.valueOf;var e=function(){};return e.prototype=t,d=function(){return new e},new e},Object.create=function(t,e){var r,n=function(){};if(null===t)r=d();else{if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object prototype may only be an Object or null");n.prototype=t,r=new n,r.__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r}}var O=function(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(e){return!1}};if(Object.defineProperty){var m=O({}),j="undefined"==typeof document||O(document.createElement("div"));if(!m||!j)var T=Object.defineProperty,S=Object.defineProperties}if(!Object.defineProperty||T){var E="Property description must be an object: ",_="Object.defineProperty called on non-object: ",x="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(o,a,c){if("object"!=typeof o&&"function"!=typeof o||null===o)throw new TypeError(_+o);if("object"!=typeof c&&"function"!=typeof c||null===c)throw new TypeError(E+c);if(T)try{return T.call(Object,o,a,c)}catch(u){}if("value"in c)if(s&&(r(o,a)||n(o,a))){var f=o.__proto__;o.__proto__=i,delete o[a],o[a]=c.value,o.__proto__=f}else o[a]=c.value;else{if(!s&&("get"in c||"set"in c))throw new TypeError(x);"get"in c&&t(o,a,c.get),"set"in c&&e(o,a,c.set)}return o}}Object.defineProperties&&!S||(Object.defineProperties=function(t,e){if(S)try{return S.call(Object,t,e)}catch(r){}return Object.keys(e).forEach(function(r){"__proto__"!==r&&Object.defineProperty(t,r,e[r])}),t}),Object.seal||(Object.seal=function(t){if(Object(t)!==t)throw new TypeError("Object.seal can only be called on Objects.");return t}),Object.freeze||(Object.freeze=function(t){if(Object(t)!==t)throw new TypeError("Object.freeze can only be called on Objects.");return t});try{Object.freeze(function(){})}catch(I){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){if(Object(t)!==t)throw new TypeError("Object.preventExtensions can only be called on Objects.");return t}),Object.isSealed||(Object.isSealed=function(t){if(Object(t)!==t)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(t){if(Object(t)!==t)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var e="";a(t,e);)e+="?";t[e]=!0;var r=a(t,e);return delete t[e],r})}),!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){"use strict";var t,e=Function.call.bind(Function.apply),r=Function.call.bind(Function.call),n=Array.isArray,o=Object.keys,i=function(t){return function(){return!e(t,this,arguments)}},a=function(t){try{return t(),!1}catch(e){return!0}},c=function(t){try{return t()}catch(e){return!1}},u=i(a),s=function(){return!a(function(){Object.defineProperty({},"x",{get:function(){}})})},f=!!Object.defineProperty&&s(),l="foo"===function(){}.name,p=Function.call.bind(Array.prototype.forEach),h=Function.call.bind(Array.prototype.reduce),y=Function.call.bind(Array.prototype.filter),d=Function.call.bind(Array.prototype.some),v=function(t,e,r,n){!n&&e in t||(f?Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r}):t[e]=r)},b=function(t,e,r){p(o(e),function(n){var o=e[n];v(t,n,o,!!r)})},g=Function.call.bind(Object.prototype.toString),w="function"==typeof/abc/?function(t){return"function"==typeof t&&"[object Function]"===g(t)}:function(t){return"function"==typeof t},O={getter:function(t,e,r){if(!f)throw new TypeError("getters require true ES5 support");Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get:r})},proxy:function(t,e,r){if(!f)throw new TypeError("getters require true ES5 support");var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,{configurable:n.configurable,enumerable:n.enumerable,get:function(){return t[e]},set:function(r){t[e]=r}})},redefine:function(t,e,r){if(f){var n=Object.getOwnPropertyDescriptor(t,e);n.value=r,Object.defineProperty(t,e,n)}else t[e]=r},defineByDescriptor:function(t,e,r){f?Object.defineProperty(t,e,r):"value"in r&&(t[e]=r.value)},preserveToString:function(t,e){e&&w(e.toString)&&v(t,"toString",e.toString.bind(e),!0)}},m=Object.create||function(t,e){var r=function(){};r.prototype=t;var n=new r;return"undefined"!=typeof e&&o(e).forEach(function(t){O.defineByDescriptor(n,t,e[t])}),n},j=function(t,e){return Object.setPrototypeOf?c(function(){var r=function n(e){var r=new t(e);return Object.setPrototypeOf(r,n.prototype),r};return Object.setPrototypeOf(r,t),r.prototype=m(t.prototype,{constructor:{value:r}}),e(r)}):!1},T=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("unable to locate global object")},S=T(),E=S.isFinite,_=Function.call.bind(String.prototype.indexOf),x=Function.apply.bind(Array.prototype.indexOf),I=Function.call.bind(Array.prototype.concat),C=Function.call.bind(String.prototype.slice),P=Function.call.bind(Array.prototype.push),M=Function.apply.bind(Array.prototype.push),N=Function.call.bind(Array.prototype.shift),A=Math.max,D=Math.min,R=Math.floor,k=Math.abs,F=Math.exp,L=Math.log,U=Math.sqrt,z=Function.call.bind(Object.prototype.hasOwnProperty),H=function(){},$=S.Symbol||{},q=$.species||"@@species",G=Number.isNaN||function(t){return t!==t},J=Number.isFinite||function(t){return"number"==typeof t&&E(t)},X=w(Math.sign)?Math.sign:function(t){var e=Number(t);return 0===e?e:G(e)?e:0>e?-1:1},W=function(t){return"[object Arguments]"===g(t)},V=function(t){return null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&"[object Array]"!==g(t)&&"[object Function]"===g(t.callee)},Z=W(arguments)?W:V,B={primitive:function(t){return null===t||"function"!=typeof t&&"object"!=typeof t},string:function(t){return"[object String]"===g(t)},regex:function(t){return"[object RegExp]"===g(t)},symbol:function(t){return"function"==typeof S.Symbol&&"symbol"==typeof t}},Y=function(t,e,r){var n=t[e];v(t,e,r,!0),O.preserveToString(t[e],n)},K="function"==typeof $&&"function"==typeof $["for"]&&B.symbol($()),Q=B.symbol($.iterator)?$.iterator:"_es6-shim iterator_";S.Set&&"function"==typeof(new S.Set)["@@iterator"]&&(Q="@@iterator"),S.Reflect||v(S,"Reflect",{},!0);var tt=S.Reflect,et=String,rt={Call:function(t,r){var n=arguments.length>2?arguments[2]:[];if(!rt.IsCallable(t))throw new TypeError(t+" is not a function");return e(t,r,n)},RequireObjectCoercible:function(t,e){if(null==t)throw new TypeError(e||"Cannot call method on "+t);return t},TypeIsObject:function(t){return void 0===t||null===t||t===!0||t===!1?!1:"function"==typeof t||"object"==typeof t},ToObject:function(t,e){return Object(rt.RequireObjectCoercible(t,e))},IsCallable:w,IsConstructor:function(t){
return rt.IsCallable(t)},ToInt32:function(t){return rt.ToNumber(t)>>0},ToUint32:function(t){return rt.ToNumber(t)>>>0},ToNumber:function(t){if("[object Symbol]"===g(t))throw new TypeError("Cannot convert a Symbol value to a number");return+t},ToInteger:function(t){var e=rt.ToNumber(t);return G(e)?0:0!==e&&J(e)?(e>0?1:-1)*R(k(e)):e},ToLength:function(t){var e=rt.ToInteger(t);return 0>=e?0:e>Number.MAX_SAFE_INTEGER?Number.MAX_SAFE_INTEGER:e},SameValue:function(t,e){return t===e?0===t?1/t===1/e:!0:G(t)&&G(e)},SameValueZero:function(t,e){return t===e||G(t)&&G(e)},IsIterable:function(t){return rt.TypeIsObject(t)&&("undefined"!=typeof t[Q]||Z(t))},GetIterator:function(e){if(Z(e))return new t(e,"value");var r=rt.GetMethod(e,Q);if(!rt.IsCallable(r))throw new TypeError("value is not an iterable");var n=rt.Call(r,e);if(!rt.TypeIsObject(n))throw new TypeError("bad iterator");return n},GetMethod:function(t,e){var r=rt.ToObject(t)[e];if(void 0!==r&&null!==r){if(!rt.IsCallable(r))throw new TypeError("Method not callable: "+e);return r}},IteratorComplete:function(t){return!!t.done},IteratorClose:function(t,e){var r=rt.GetMethod(t,"return");if(void 0!==r){var n,o;try{n=rt.Call(r,t)}catch(i){o=i}if(!e){if(o)throw o;if(!rt.TypeIsObject(n))throw new TypeError("Iterator's return method returned a non-object.")}}},IteratorNext:function(t){var e=arguments.length>1?t.next(arguments[1]):t.next();if(!rt.TypeIsObject(e))throw new TypeError("bad iterator");return e},IteratorStep:function(t){var e=rt.IteratorNext(t),r=rt.IteratorComplete(e);return r?!1:e},Construct:function(t,e,r,n){var o="undefined"==typeof r?t:r;if(!n&&tt.construct)return tt.construct(t,e,o);var i=o.prototype;rt.TypeIsObject(i)||(i=Object.prototype);var a=m(i),c=rt.Call(t,a,e);return rt.TypeIsObject(c)?c:a},SpeciesConstructor:function(t,e){var r=t.constructor;if(void 0===r)return e;if(!rt.TypeIsObject(r))throw new TypeError("Bad constructor");var n=r[q];if(void 0===n||null===n)return e;if(!rt.IsConstructor(n))throw new TypeError("Bad @@species");return n},CreateHTML:function(t,e,r,n){var o=rt.ToString(t),i="<"+e;if(""!==r){var a=rt.ToString(n),c=a.replace(/"/g,"&quot;");i+=" "+r+'="'+c+'"'}var u=i+">",s=u+o;return s+"</"+e+">"},IsRegExp:function(t){if(!rt.TypeIsObject(t))return!1;var e=t[$.match];return"undefined"!=typeof e?!!e:B.regex(t)},ToString:function(t){return et(t)}};if(f&&K){var nt=function(t){if(B.symbol($[t]))return $[t];var e=$["for"]("Symbol."+t);return Object.defineProperty($,t,{configurable:!1,enumerable:!1,writable:!1,value:e}),e};if(!B.symbol($.search)){var ot=nt("search"),it=String.prototype.search;v(RegExp.prototype,ot,function(t){return rt.Call(it,t,[this])});var at=function(t){var e=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var r=rt.GetMethod(t,ot);if("undefined"!=typeof r)return rt.Call(r,t,[e])}return rt.Call(it,e,[rt.ToString(t)])};Y(String.prototype,"search",at)}if(!B.symbol($.replace)){var ct=nt("replace"),ut=String.prototype.replace;v(RegExp.prototype,ct,function(t,e){return rt.Call(ut,t,[this,e])});var st=function(t,e){var r=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var n=rt.GetMethod(t,ct);if("undefined"!=typeof n)return rt.Call(n,t,[r,e])}return rt.Call(ut,r,[rt.ToString(t),e])};Y(String.prototype,"replace",st)}if(!B.symbol($.split)){var ft=nt("split"),lt=String.prototype.split;v(RegExp.prototype,ft,function(t,e){return rt.Call(lt,t,[this,e])});var pt=function(t,e){var r=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var n=rt.GetMethod(t,ft);if("undefined"!=typeof n)return rt.Call(n,t,[r,e])}return rt.Call(lt,r,[rt.ToString(t),e])};Y(String.prototype,"split",pt)}var ht=B.symbol($.match),yt=ht&&function(){var t={};return t[$.match]=function(){return 42},42!=="a".match(t)}();if(!ht||yt){var dt=nt("match"),vt=String.prototype.match;v(RegExp.prototype,dt,function(t){return rt.Call(vt,t,[this])});var bt=function(t){var e=rt.RequireObjectCoercible(this);if(null!==t&&"undefined"!=typeof t){var r=rt.GetMethod(t,dt);if("undefined"!=typeof r)return rt.Call(r,t,[e])}return rt.Call(vt,e,[rt.ToString(t)])};Y(String.prototype,"match",bt)}}var gt=function(t,e,r){O.preserveToString(e,t),Object.setPrototypeOf&&Object.setPrototypeOf(t,e),f?p(Object.getOwnPropertyNames(t),function(n){n in H||r[n]||O.proxy(t,n,e)}):p(Object.keys(t),function(n){n in H||r[n]||(e[n]=t[n])}),e.prototype=t.prototype,O.redefine(t.prototype,"constructor",e)},wt=function(){return this},Ot=function(t){f&&!z(t,q)&&O.getter(t,q,wt)},mt=function(t,e){var r=e||function(){return this};v(t,Q,r),!t[Q]&&B.symbol(Q)&&(t[Q]=r)},jt=function(t,e,r){f?Object.defineProperty(t,e,{configurable:!0,enumerable:!0,writable:!0,value:r}):t[e]=r},Tt=function(t,e,r){if(jt(t,e,r),!rt.SameValue(t[e],r))throw new TypeError("property is nonconfigurable")},St=function(t,e,r,n){if(!rt.TypeIsObject(t))throw new TypeError("Constructor requires `new`: "+e.name);var o=e.prototype;rt.TypeIsObject(o)||(o=r);var i=m(o);for(var a in n)if(z(n,a)){var c=n[a];v(i,a,c,!0)}return i};if(String.fromCodePoint&&1!==String.fromCodePoint.length){var Et=String.fromCodePoint;Y(String,"fromCodePoint",function(t){return rt.Call(Et,this,arguments)})}var _t={fromCodePoint:function(t){for(var e,r=[],n=0,o=arguments.length;o>n;n++){if(e=Number(arguments[n]),!rt.SameValue(e,rt.ToInteger(e))||0>e||e>1114111)throw new RangeError("Invalid code point "+e);65536>e?P(r,String.fromCharCode(e)):(e-=65536,P(r,String.fromCharCode((e>>10)+55296)),P(r,String.fromCharCode(e%1024+56320)))}return r.join("")},raw:function(t){var e=rt.ToObject(t,"bad callSite"),r=rt.ToObject(e.raw,"bad raw value"),n=r.length,o=rt.ToLength(n);if(0>=o)return"";for(var i,a,c,u,s=[],f=0;o>f&&(i=rt.ToString(f),c=rt.ToString(r[i]),P(s,c),!(f+1>=o));)a=f+1<arguments.length?arguments[f+1]:"",u=rt.ToString(a),P(s,u),f+=1;return s.join("")}};String.raw&&"xy"!==String.raw({raw:{0:"x",1:"y",length:2}})&&Y(String,"raw",_t.raw),b(String,_t);var xt=function Rn(t,e){if(1>e)return"";if(e%2)return Rn(t,e-1)+t;var r=Rn(t,e/2);return r+r},It=1/0,Ct={repeat:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this)),r=rt.ToInteger(t);if(0>r||r>=It)throw new RangeError("repeat count must be less than infinity and not overflow maximum string size");return xt(e,r)},startsWith:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this));if(rt.IsRegExp(t))throw new TypeError('Cannot call method "startsWith" with a regex');var r,n=rt.ToString(t);arguments.length>1&&(r=arguments[1]);var o=A(rt.ToInteger(r),0);return C(e,o,o+n.length)===n},endsWith:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this));if(rt.IsRegExp(t))throw new TypeError('Cannot call method "endsWith" with a regex');var r,n=rt.ToString(t),o=e.length;arguments.length>1&&(r=arguments[1]);var i="undefined"==typeof r?o:rt.ToInteger(r),a=D(A(i,0),o);return C(e,a-n.length,a)===n},includes:function(t){if(rt.IsRegExp(t))throw new TypeError('"includes" does not accept a RegExp');var e,r=rt.ToString(t);return arguments.length>1&&(e=arguments[1]),-1!==_(this,r,e)},codePointAt:function(t){var e=rt.ToString(rt.RequireObjectCoercible(this)),r=rt.ToInteger(t),n=e.length;if(r>=0&&n>r){var o=e.charCodeAt(r),i=r+1===n;if(55296>o||o>56319||i)return o;var a=e.charCodeAt(r+1);return 56320>a||a>57343?o:1024*(o-55296)+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",1/0)!==!1&&Y(String.prototype,"includes",Ct.includes),String.prototype.startsWith&&String.prototype.endsWith){var Pt=a(function(){"/a/".startsWith(/a/)}),Mt=c(function(){return"abc".startsWith("a",1/0)===!1});Pt&&Mt||(Y(String.prototype,"startsWith",Ct.startsWith),Y(String.prototype,"endsWith",Ct.endsWith))}if(K){var Nt=c(function(){var t=/a/;return t[$.match]=!1,"/a/".startsWith(t)});Nt||Y(String.prototype,"startsWith",Ct.startsWith);var At=c(function(){var t=/a/;return t[$.match]=!1,"/a/".endsWith(t)});At||Y(String.prototype,"endsWith",Ct.endsWith);var Dt=c(function(){var t=/a/;return t[$.match]=!1,"/a/".includes(t)});Dt||Y(String.prototype,"includes",Ct.includes)}b(String.prototype,Ct);var Rt=["	\n\x0B\f\r   ᠎    ","         　\u2028","\u2029\ufeff"].join(""),kt=new RegExp("(^["+Rt+"]+)|(["+Rt+"]+$)","g"),Ft=function(){return rt.ToString(rt.RequireObjectCoercible(this)).replace(kt,"")},Lt=["","​","￾"].join(""),Ut=new RegExp("["+Lt+"]","g"),zt=/^[\-+]0x[0-9a-f]+$/i,Ht=Lt.trim().length!==Lt.length;v(String.prototype,"trim",Ft,Ht);var $t=function(t){return{value:t,done:0===arguments.length}},qt=function(t){rt.RequireObjectCoercible(t),this._s=rt.ToString(t),this._i=0};qt.prototype.next=function(){var t=this._s,e=this._i;if("undefined"==typeof t||e>=t.length)return this._s=void 0,$t();var r,n,o=t.charCodeAt(e);return 55296>o||o>56319||e+1===t.length?n=1:(r=t.charCodeAt(e+1),n=56320>r||r>57343?1:2),this._i=e+n,$t(t.substr(e,n))},mt(qt.prototype),mt(String.prototype,function(){return new qt(this)});var Gt={from:function(t){var e,n=this;arguments.length>1&&(e=arguments[1]);var o,i;if("undefined"==typeof e)o=!1;else{if(!rt.IsCallable(e))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(i=arguments[2]),o=!0}var a,c,u,s="undefined"!=typeof(Z(t)||rt.GetMethod(t,Q));if(s){c=rt.IsConstructor(n)?Object(new n):[];var f,l,p=rt.GetIterator(t);for(u=0;f=rt.IteratorStep(p),f!==!1;){l=f.value;try{o&&(l="undefined"==typeof i?e(l,u):r(e,i,l,u)),c[u]=l}catch(h){throw rt.IteratorClose(p,!0),h}u+=1}a=u}else{var y=rt.ToObject(t);a=rt.ToLength(y.length),c=rt.IsConstructor(n)?Object(new n(a)):new Array(a);var d;for(u=0;a>u;++u)d=y[u],o&&(d="undefined"==typeof i?e(d,u):r(e,i,d,u)),Tt(c,u,d)}return c.length=a,c},of:function(){for(var t=arguments.length,e=this,r=n(e)||!rt.IsCallable(e)?new Array(t):rt.Construct(e,[t]),o=0;t>o;++o)Tt(r,o,arguments[o]);return r.length=t,r}};b(Array,Gt),Ot(Array),t=function(t,e){this.i=0,this.array=t,this.kind=e},b(t.prototype,{next:function(){var e=this.i,r=this.array;if(!(this instanceof t))throw new TypeError("Not an ArrayIterator");if("undefined"!=typeof r)for(var n=rt.ToLength(r.length);n>e;e++){var o,i=this.kind;return"key"===i?o=e:"value"===i?o=r[e]:"entry"===i&&(o=[e,r[e]]),this.i=e+1,$t(o)}return this.array=void 0,$t()}}),mt(t.prototype);var Jt=Array.of===Gt.of||function(){var t=function(t){this.length=t};t.prototype=[];var e=Array.of.apply(t,[1,2]);return e instanceof t&&2===e.length}();Jt||Y(Array,"of",Gt.of);var Xt={copyWithin:function(t,e){var r,n=rt.ToObject(this),o=rt.ToLength(n.length),i=rt.ToInteger(t),a=rt.ToInteger(e),c=0>i?A(o+i,0):D(i,o),u=0>a?A(o+a,0):D(a,o);arguments.length>2&&(r=arguments[2]);var s="undefined"==typeof r?o:rt.ToInteger(r),f=0>s?A(o+s,0):D(s,o),l=D(f-u,o-c),p=1;for(c>u&&u+l>c&&(p=-1,u+=l-1,c+=l-1);l>0;)u in n?n[c]=n[u]:delete n[c],u+=p,c+=p,l-=1;return n},fill:function(t){var e;arguments.length>1&&(e=arguments[1]);var r;arguments.length>2&&(r=arguments[2]);var n=rt.ToObject(this),o=rt.ToLength(n.length);e=rt.ToInteger("undefined"==typeof e?0:e),r=rt.ToInteger("undefined"==typeof r?o:r);for(var i=0>e?A(o+e,0):D(e,o),a=0>r?o+r:r,c=i;o>c&&a>c;++c)n[c]=t;return n},find:function(t){var e=rt.ToObject(this),n=rt.ToLength(e.length);if(!rt.IsCallable(t))throw new TypeError("Array#find: predicate must be a function");for(var o,i=arguments.length>1?arguments[1]:null,a=0;n>a;a++)if(o=e[a],i){if(r(t,i,o,a,e))return o}else if(t(o,a,e))return o},findIndex:function(t){var e=rt.ToObject(this),n=rt.ToLength(e.length);if(!rt.IsCallable(t))throw new TypeError("Array#findIndex: predicate must be a function");for(var o=arguments.length>1?arguments[1]:null,i=0;n>i;i++)if(o){if(r(t,o,e[i],i,e))return i}else if(t(e[i],i,e))return i;return-1},keys:function(){return new t(this,"key")},values:function(){return new t(this,"value")},entries:function(){return new t(this,"entry")}};if(Array.prototype.keys&&!rt.IsCallable([1].keys().next)&&delete Array.prototype.keys,Array.prototype.entries&&!rt.IsCallable([1].entries().next)&&delete Array.prototype.entries,Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[Q]&&(b(Array.prototype,{values:Array.prototype[Q]}),B.symbol($.unscopables)&&(Array.prototype[$.unscopables].values=!0)),l&&Array.prototype.values&&"values"!==Array.prototype.values.name){var Wt=Array.prototype.values;Y(Array.prototype,"values",function(){return rt.Call(Wt,this,arguments)}),v(Array.prototype,Q,Array.prototype.values,!0)}b(Array.prototype,Xt),1/[!0].indexOf(!0,-0)<0&&v(Array.prototype,"indexOf",function(t){var e=x(this,arguments);return 0===e&&0>1/e?0:e},!0),mt(Array.prototype,function(){return this.values()}),Object.getPrototypeOf&&mt(Object.getPrototypeOf([].values()));var Vt=function(){return c(function(){return 0===Array.from({length:-1}).length})}(),Zt=function(){var t=Array.from([0].entries());return 1===t.length&&n(t[0])&&0===t[0][0]&&0===t[0][1]}();Vt&&Zt||Y(Array,"from",Gt.from);var Bt=function(){return c(function(){return Array.from([0],void 0)})}();if(!Bt){var Yt=Array.from;Y(Array,"from",function(t){return arguments.length>1&&"undefined"!=typeof arguments[1]?rt.Call(Yt,this,arguments):r(Yt,this,t)})}var Kt=-(Math.pow(2,32)-1),Qt=function(t,e){var n={length:Kt};return n[e?(n.length>>>0)-1:0]=!0,c(function(){return r(t,n,function(){throw new RangeError("should not reach here")},[]),!0})};if(!Qt(Array.prototype.forEach)){var te=Array.prototype.forEach;Y(Array.prototype,"forEach",function(t){return rt.Call(te,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.map)){var ee=Array.prototype.map;Y(Array.prototype,"map",function(t){return rt.Call(ee,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.filter)){var re=Array.prototype.filter;Y(Array.prototype,"filter",function(t){return rt.Call(re,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.some)){var ne=Array.prototype.some;Y(Array.prototype,"some",function(t){return rt.Call(ne,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.every)){var oe=Array.prototype.every;Y(Array.prototype,"every",function(t){return rt.Call(oe,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.reduce)){var ie=Array.prototype.reduce;Y(Array.prototype,"reduce",function(t){return rt.Call(ie,this.length>=0?this:[],arguments)},!0)}if(!Qt(Array.prototype.reduceRight,!0)){var ae=Array.prototype.reduceRight;Y(Array.prototype,"reduceRight",function(t){return rt.Call(ae,this.length>=0?this:[],arguments)},!0)}var ce=8!==Number("0o10"),ue=2!==Number("0b10"),se=d(Lt,function(t){return 0===Number(t+0+t)});if(ce||ue||se){var fe=Number,le=/^0b[01]+$/i,pe=/^0o[0-7]+$/i,he=le.test.bind(le),ye=pe.test.bind(pe),de=function(t){var e;if("function"==typeof t.valueOf&&(e=t.valueOf(),B.primitive(e)))return e;if("function"==typeof t.toString&&(e=t.toString(),B.primitive(e)))return e;throw new TypeError("No default value")},ve=Ut.test.bind(Ut),be=zt.test.bind(zt),ge=function(){var t=function(e){var r;r=arguments.length>0?B.primitive(e)?e:de(e,"number"):0,"string"==typeof r&&(r=rt.Call(Ft,r),he(r)?r=parseInt(C(r,2),2):ye(r)?r=parseInt(C(r,2),8):(ve(r)||be(r))&&(r=NaN));var n=this,o=c(function(){return fe.prototype.valueOf.call(n),!0});return n instanceof t&&!o?new fe(r):fe(r)};return t}();gt(fe,ge,{}),b(ge,{NaN:fe.NaN,MAX_VALUE:fe.MAX_VALUE,MIN_VALUE:fe.MIN_VALUE,NEGATIVE_INFINITY:fe.NEGATIVE_INFINITY,POSITIVE_INFINITY:fe.POSITIVE_INFINITY}),Number=ge,O.redefine(S,"Number",ge)}var we=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:we,MIN_SAFE_INTEGER:-we,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:J,isInteger:function(t){return J(t)&&rt.ToInteger(t)===t},isSafeInteger:function(t){return Number.isInteger(t)&&k(t)<=Number.MAX_SAFE_INTEGER},isNaN:G}),v(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt),[,1].find(function(t,e){return 0===e})||Y(Array.prototype,"find",Xt.find),0!==[,1].findIndex(function(t,e){return 0===e})&&Y(Array.prototype,"findIndex",Xt.findIndex);var Oe=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable),me=function(t,e){f&&Oe(t,e)&&Object.defineProperty(t,e,{enumerable:!1})},je=function(){for(var t=Number(this),e=arguments.length,r=e-t,n=new Array(0>r?0:r),o=t;e>o;++o)n[o-t]=arguments[o];return n},Te=function(t){return function(e,r){return e[r]=t[r],e}},Se=function(t,e){var r,n=o(Object(e));return rt.IsCallable(Object.getOwnPropertySymbols)&&(r=y(Object.getOwnPropertySymbols(Object(e)),Oe(e))),h(I(n,r||[]),Te(e),t)},Ee={assign:function(t,e){var r=rt.ToObject(t,"Cannot convert undefined or null to object");return h(rt.Call(je,1,arguments),Se,r)},is:function(t,e){return rt.SameValue(t,e)}},_e=Object.assign&&Object.preventExtensions&&function(){var t=Object.preventExtensions({1:2});try{Object.assign(t,"xy")}catch(e){return"y"===t[1]}}();if(_e&&Y(Object,"assign",Ee.assign),b(Object,Ee),f){var xe={setPrototypeOf:function(t,e){var n,o=function(t,e){if(!rt.TypeIsObject(t))throw new TypeError("cannot set prototype on a non-object");if(null!==e&&!rt.TypeIsObject(e))throw new TypeError("can only set prototype to an object or null"+e)},i=function(t,e){return o(t,e),r(n,t,e),t};try{n=t.getOwnPropertyDescriptor(t.prototype,e).set,r(n,{},null)}catch(a){if(t.prototype!=={}[e])return;n=function(t){this[e]=t},i.polyfill=i(i({},null),t.prototype)instanceof t}return i}(Object,"__proto__")};b(Object,xe)}Object.setPrototypeOf&&Object.getPrototypeOf&&null!==Object.getPrototypeOf(Object.setPrototypeOf({},null))&&null===Object.getPrototypeOf(Object.create(null))&&!function(){var t=Object.create(null),e=Object.getPrototypeOf,r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=e(r);return n===t?null:n},Object.setPrototypeOf=function(e,n){var o=null===n?t:n;return r(e,o)},Object.setPrototypeOf.polyfill=!1}();var Ie=!a(function(){Object.keys("foo")});if(!Ie){var Ce=Object.keys;Y(Object,"keys",function(t){return Ce(rt.ToObject(t))}),o=Object.keys}var Pe=a(function(){Object.keys(/a/g)});if(Pe){var Me=Object.keys;Y(Object,"keys",function(t){if(B.regex(t)){var e=[];for(var r in t)z(t,r)&&P(e,r);return e}return Me(t)}),o=Object.keys}if(Object.getOwnPropertyNames){var Ne=!a(function(){Object.getOwnPropertyNames("foo")});if(!Ne){var Ae="object"==typeof window?Object.getOwnPropertyNames(window):[],De=Object.getOwnPropertyNames;Y(Object,"getOwnPropertyNames",function(t){var e=rt.ToObject(t);if("[object Window]"===g(e))try{return De(e)}catch(r){return I([],Ae)}return De(e)})}}if(Object.getOwnPropertyDescriptor){var Re=!a(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!Re){var ke=Object.getOwnPropertyDescriptor;Y(Object,"getOwnPropertyDescriptor",function(t,e){return ke(rt.ToObject(t),e)})}}if(Object.seal){var Fe=!a(function(){Object.seal("foo")});if(!Fe){var Le=Object.seal;Y(Object,"seal",function(t){return rt.TypeIsObject(t)?Le(t):t})}}if(Object.isSealed){var Ue=!a(function(){Object.isSealed("foo")});if(!Ue){var ze=Object.isSealed;Y(Object,"isSealed",function(t){return rt.TypeIsObject(t)?ze(t):!0})}}if(Object.freeze){var He=!a(function(){Object.freeze("foo")});if(!He){var $e=Object.freeze;Y(Object,"freeze",function(t){return rt.TypeIsObject(t)?$e(t):t})}}if(Object.isFrozen){var qe=!a(function(){Object.isFrozen("foo")});if(!qe){var Ge=Object.isFrozen;Y(Object,"isFrozen",function(t){return rt.TypeIsObject(t)?Ge(t):!0})}}if(Object.preventExtensions){var Je=!a(function(){Object.preventExtensions("foo")});if(!Je){var Xe=Object.preventExtensions;Y(Object,"preventExtensions",function(t){return rt.TypeIsObject(t)?Xe(t):t})}}if(Object.isExtensible){var We=!a(function(){Object.isExtensible("foo")});if(!We){var Ve=Object.isExtensible;Y(Object,"isExtensible",function(t){return rt.TypeIsObject(t)?Ve(t):!1})}}if(Object.getPrototypeOf){var Ze=!a(function(){Object.getPrototypeOf("foo")});if(!Ze){var Be=Object.getPrototypeOf;Y(Object,"getPrototypeOf",function(t){return Be(rt.ToObject(t))})}}var Ye=f&&function(){var t=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return t&&rt.IsCallable(t.get)}();if(f&&!Ye){var Ke=function(){if(!rt.TypeIsObject(this))throw new TypeError("Method called on incompatible type: must be an object.");var t="";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),this.unicode&&(t+="u"),this.sticky&&(t+="y"),t};O.getter(RegExp.prototype,"flags",Ke)}var Qe=f&&c(function(){return"/a/i"===String(new RegExp(/a/g,"i"))}),tr=K&&f&&function(){var t=/./;return t[$.match]=!1,RegExp(t)===t}(),er=c(function(){return"/abc/"===RegExp.prototype.toString.call({source:"abc"})}),rr=er&&c(function(){return"/a/b"===RegExp.prototype.toString.call({source:"a",flags:"b"})});if(!er||!rr){var nr=RegExp.prototype.toString;v(RegExp.prototype,"toString",function(){var t=rt.RequireObjectCoercible(this);if(B.regex(t))return r(nr,t);var e=et(t.source),n=et(t.flags);return"/"+e+"/"+n},!0),O.preserveToString(RegExp.prototype.toString,nr)}if(f&&(!Qe||tr)){var or=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get,ir=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{},ar=function(){return this.source},cr=rt.IsCallable(ir.get)?ir.get:ar,ur=RegExp,sr=function(){return function t(e,r){var n=rt.IsRegExp(e),o=this instanceof t;if(!o&&n&&"undefined"==typeof r&&e.constructor===t)return e;var i=e,a=r;return B.regex(e)?(i=rt.Call(cr,e),a="undefined"==typeof r?rt.Call(or,e):r,new t(i,a)):(n&&(i=e.source,a="undefined"==typeof r?e.flags:r),new ur(e,r))}}();gt(ur,sr,{$input:!0}),RegExp=sr,O.redefine(S,"RegExp",sr)}if(f){var fr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};p(o(fr),function(t){t in RegExp&&!(fr[t]in RegExp)&&O.getter(RegExp,fr[t],function(){return RegExp[t]})})}Ot(RegExp);var lr=1/Number.EPSILON,pr=function(t){return t+lr-lr},hr=Math.pow(2,-23),yr=Math.pow(2,127)*(2-hr),dr=Math.pow(2,-126),vr=Math.E,br=Math.LOG2E,gr=Math.LOG10E,wr=Number.prototype.clz;delete Number.prototype.clz;var Or={acosh:function(t){var e=Number(t);return G(e)||1>t?NaN:1===e?0:e===1/0?e:L(e/vr+U(e+1)*U(e-1)/vr)+1},asinh:function kn(t){var e=Number(t);return 0!==e&&E(e)?0>e?-kn(-e):L(e+U(e*e+1)):e},atanh:function(t){var e=Number(t);return G(e)||-1>e||e>1?NaN:-1===e?-(1/0):1===e?1/0:0===e?e:.5*L((1+e)/(1-e))},cbrt:function(t){var e=Number(t);if(0===e)return e;var r,n=0>e;return n&&(e=-e),e===1/0?r=1/0:(r=F(L(e)/3),r=(e/(r*r)+2*r)/3),n?-r:r},clz32:function(t){var e=Number(t),r=rt.ToUint32(e);return 0===r?32:wr?rt.Call(wr,r):31-R(L(r+.5)*br)},cosh:function(t){var e=Number(t);return 0===e?1:G(e)?NaN:E(e)?(0>e&&(e=-e),e>21?F(e)/2:(F(e)+F(-e))/2):1/0},expm1:function(t){var e=Number(t);if(e===-(1/0))return-1;if(!E(e)||0===e)return e;if(k(e)>.5)return F(e)-1;for(var r=e,n=0,o=1;n+r!==n;)n+=r,o+=1,r*=e/o;return n},hypot:function(t,e){for(var r=0,n=0,o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));i>n?(r*=n/i*(n/i),r+=1,n=i):r+=i>0?i/n*(i/n):i}return n===1/0?1/0:n*U(r)},log2:function(t){return L(t)*br},log10:function(t){return L(t)*gr},log1p:function(t){var e=Number(t);return-1>e||G(e)?NaN:0===e||e===1/0?e:-1===e?-(1/0):1+e-1===0?e:e*(L(1+e)/(1+e-1))},sign:X,sinh:function(t){var e=Number(t);return E(e)&&0!==e?k(e)<1?(Math.expm1(e)-Math.expm1(-e))/2:(F(e-1)-F(-e-1))*vr/2:e},tanh:function(t){var e=Number(t);return G(e)||0===e?e:e>=20?1:-20>=e?-1:(Math.expm1(e)-Math.expm1(-e))/(F(e)+F(-e))},trunc:function(t){var e=Number(t);return 0>e?-R(-e):R(e)},imul:function(t,e){var r=rt.ToUint32(t),n=rt.ToUint32(e),o=r>>>16&65535,i=65535&r,a=n>>>16&65535,c=65535&n;return i*c+(o*c+i*a<<16>>>0)|0},fround:function(t){var e=Number(t);if(0===e||e===1/0||e===-(1/0)||G(e))return e;var r=X(e),n=k(e);if(dr>n)return r*pr(n/dr/hr)*dr*hr;var o=(1+hr/Number.EPSILON)*n,i=o-(o-n);return i>yr||G(i)?r*(1/0):r*i}};b(Math,Or),v(Math,"log1p",Or.log1p,-1e-17!==Math.log1p(-1e-17)),v(Math,"asinh",Or.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7)),v(Math,"tanh",Or.tanh,-2e-17!==Math.tanh(-2e-17)),v(Math,"acosh",Or.acosh,Math.acosh(Number.MAX_VALUE)===1/0),v(Math,"cbrt",Or.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8),v(Math,"sinh",Or.sinh,-2e-17!==Math.sinh(-2e-17));var mr=Math.expm1(10);v(Math,"expm1",Or.expm1,mr>22025.465794806718||22025.465794806718>mr);var jr=Math.round,Tr=0===Math.round(.5-Number.EPSILON/4)&&1===Math.round(-.5+Number.EPSILON/3.99),Sr=lr+1,Er=2*lr-1,_r=[Sr,Er].every(function(t){return Math.round(t)===t});v(Math,"round",function(t){var e=R(t),r=-1===e?-0:e+1;return.5>t-e?e:r},!Tr||!_r),O.preserveToString(Math.round,jr);var xr=Math.imul;-5!==Math.imul(4294967295,5)&&(Math.imul=Or.imul,O.preserveToString(Math.imul,xr)),2!==Math.imul.length&&Y(Math,"imul",function(t,e){return rt.Call(xr,Math,arguments)});var Ir=function(){var t=S.setTimeout;if("function"==typeof t||"object"==typeof t){rt.IsPromise=function(t){return rt.TypeIsObject(t)?"undefined"!=typeof t._promise:!1};var e,n=function(t){if(!rt.IsConstructor(t))throw new TypeError("Bad promise constructor");var e=this,r=function(t,r){if(void 0!==e.resolve||void 0!==e.reject)throw new TypeError("Bad Promise implementation!");e.resolve=t,e.reject=r};if(e.resolve=void 0,e.reject=void 0,e.promise=new t(r),!rt.IsCallable(e.resolve)||!rt.IsCallable(e.reject))throw new TypeError("Bad promise constructor")};"undefined"!=typeof window&&rt.IsCallable(window.postMessage)&&(e=function(){var t=[],e="zero-timeout-message",r=function(r){P(t,r),window.postMessage(e,"*")},n=function(r){if(r.source===window&&r.data===e){if(r.stopPropagation(),0===t.length)return;var n=N(t);n()}};return window.addEventListener("message",n,!0),r});var o,i,a=function(){var t=S.Promise,e=t&&t.resolve&&t.resolve();return e&&function(t){return e.then(t)}},c=rt.IsCallable(S.setImmediate)?S.setImmediate:"object"==typeof process&&process.nextTick?process.nextTick:a()||(rt.IsCallable(e)?e():function(e){t(e,0)}),u=function(t){return t},s=function(t){throw t},f=0,l=1,p=2,h=0,y=1,d=2,v={},g=function(t,e,r){c(function(){w(t,e,r)})},w=function(t,e,r){var n,o;if(e===v)return t(r);try{n=t(r),o=e.resolve}catch(i){n=i,o=e.reject}o(n)},O=function(t,e){var r=t._promise,n=r.reactionLength;if(n>0&&(g(r.fulfillReactionHandler0,r.reactionCapability0,e),r.fulfillReactionHandler0=void 0,r.rejectReactions0=void 0,r.reactionCapability0=void 0,n>1))for(var o=1,i=0;n>o;o++,i+=3)g(r[i+h],r[i+d],e),t[i+h]=void 0,t[i+y]=void 0,t[i+d]=void 0;r.result=e,r.state=l,r.reactionLength=0},m=function(t,e){var r=t._promise,n=r.reactionLength;if(n>0&&(g(r.rejectReactionHandler0,r.reactionCapability0,e),r.fulfillReactionHandler0=void 0,r.rejectReactions0=void 0,r.reactionCapability0=void 0,n>1))for(var o=1,i=0;n>o;o++,i+=3)g(r[i+y],r[i+d],e),t[i+h]=void 0,t[i+y]=void 0,t[i+d]=void 0;r.result=e,r.state=p,r.reactionLength=0},j=function(t){var e=!1,r=function(r){var n;if(!e){if(e=!0,r===t)return m(t,new TypeError("Self resolution"));if(!rt.TypeIsObject(r))return O(t,r);try{n=r.then}catch(o){return m(t,o)}return rt.IsCallable(n)?void c(function(){E(t,r,n)}):O(t,r)}},n=function(r){return e?void 0:(e=!0,m(t,r))};return{resolve:r,reject:n}},T=function(t,e,n,o){t===i?r(t,e,n,o,v):r(t,e,n,o)},E=function(t,e,r){var n=j(t),o=n.resolve,i=n.reject;try{T(r,e,o,i)}catch(a){i(a)}},_=function(){var t=function(e){if(!(this instanceof t))throw new TypeError('Constructor Promise requires "new"');if(this&&this._promise)throw new TypeError("Bad construction");if(!rt.IsCallable(e))throw new TypeError("not a valid resolver");var r=St(this,t,o,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}}),n=j(r),i=n.reject;try{e(n.resolve,i)}catch(a){i(a)}return r};return t}();o=_.prototype;var x=function(t,e,r,n){var o=!1;return function(i){if(!o&&(o=!0,e[t]=i,0===--n.count)){var a=r.resolve;a(e)}}},I=function(t,e,r){for(var n,o,i=t.iterator,a=[],c={count:1},u=0;;){try{if(n=rt.IteratorStep(i),n===!1){t.done=!0;break}o=n.value}catch(s){throw t.done=!0,s}a[u]=void 0;var f=e.resolve(o),l=x(u,a,r,c);c.count+=1,T(f.then,f,l,r.reject),u+=1}if(0===--c.count){var p=r.resolve;p(a)}return r.promise},C=function(t,e,r){for(var n,o,i,a=t.iterator;;){try{if(n=rt.IteratorStep(a),n===!1){t.done=!0;break}o=n.value}catch(c){throw t.done=!0,c}i=e.resolve(o),T(i.then,i,r.resolve,r.reject)}return r.promise};return b(_,{all:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Promise is not object");var r,o,i=new n(e);try{return r=rt.GetIterator(t),o={iterator:r,done:!1},I(o,e,i)}catch(a){var c=a;if(o&&!o.done)try{rt.IteratorClose(r,!0)}catch(u){c=u}var s=i.reject;return s(c),i.promise}},race:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Promise is not object");var r,o,i=new n(e);try{return r=rt.GetIterator(t),o={iterator:r,done:!1},C(o,e,i)}catch(a){var c=a;if(o&&!o.done)try{rt.IteratorClose(r,!0)}catch(u){c=u}var s=i.reject;return s(c),i.promise}},reject:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Bad promise constructor");var r=new n(e),o=r.reject;return o(t),r.promise},resolve:function(t){var e=this;if(!rt.TypeIsObject(e))throw new TypeError("Bad promise constructor");if(rt.IsPromise(t)){var r=t.constructor;if(r===e)return t}var o=new n(e),i=o.resolve;return i(t),o.promise}}),b(o,{"catch":function(t){return this.then(null,t)},then:function(t,e){var r=this;if(!rt.IsPromise(r))throw new TypeError("not a promise");var o,i=rt.SpeciesConstructor(r,_),a=arguments.length>2&&arguments[2]===v;o=a&&i===_?v:new n(i);var c,b=rt.IsCallable(t)?t:u,w=rt.IsCallable(e)?e:s,O=r._promise;if(O.state===f){if(0===O.reactionLength)O.fulfillReactionHandler0=b,O.rejectReactionHandler0=w,O.reactionCapability0=o;else{var m=3*(O.reactionLength-1);O[m+h]=b,O[m+y]=w,O[m+d]=o}O.reactionLength+=1}else if(O.state===l)c=O.result,g(b,o,c);else{if(O.state!==p)throw new TypeError("unexpected Promise state");c=O.result,g(w,o,c)}return o.promise}}),v=new n(_),i=o.then,_}}();if(S.Promise&&(delete S.Promise.accept,delete S.Promise.defer,delete S.Promise.prototype.chain),"function"==typeof Ir){b(S,{Promise:Ir});var Cr=j(S.Promise,function(t){return t.resolve(42).then(function(){})instanceof t}),Pr=!a(function(){S.Promise.reject(42).then(null,5).then(null,H)}),Mr=a(function(){S.Promise.call(3,H)}),Nr=function(t){var e=t.resolve(5);e.constructor={};var r=t.resolve(e);try{r.then(null,H).then(null,H)}catch(n){return!0}return e===r}(S.Promise),Ar=f&&function(){var t=0,e=Object.defineProperty({},"then",{get:function(){t+=1}});return Promise.resolve(e),1===t}(),Dr=function Fn(t){var e=new Promise(t);t(3,function(){}),this.then=e.then,this.constructor=Fn};Dr.prototype=Promise.prototype,Dr.all=Promise.all;var Rr=c(function(){return!!Dr.all([1,2])});if(Cr&&Pr&&Mr&&!Nr&&Ar&&!Rr||(Promise=Ir,Y(S,"Promise",Ir)),1!==Promise.all.length){var kr=Promise.all;Y(Promise,"all",function(t){return rt.Call(kr,this,arguments)})}if(1!==Promise.race.length){var Fr=Promise.race;Y(Promise,"race",function(t){return rt.Call(Fr,this,arguments)})}if(1!==Promise.resolve.length){var Lr=Promise.resolve;Y(Promise,"resolve",function(t){return rt.Call(Lr,this,arguments)})}if(1!==Promise.reject.length){var Ur=Promise.reject;Y(Promise,"reject",function(t){return rt.Call(Ur,this,arguments)})}me(Promise,"all"),me(Promise,"race"),me(Promise,"resolve"),me(Promise,"reject"),Ot(Promise)}var zr=function(t){var e=o(h(t,function(t,e){return t[e]=!0,t},{}));return t.join(":")===e.join(":")},Hr=zr(["z","a","bb"]),$r=zr(["z",1,"a","3",2]);if(f){var qr=function(t){return Hr?"undefined"==typeof t||null===t?"^"+rt.ToString(t):"string"==typeof t?"$"+t:"number"==typeof t?$r?t:"n"+t:"boolean"==typeof t?"b"+t:null:null},Gr=function(){return Object.create?Object.create(null):{}},Jr=function(t,e,o){if(n(o)||B.string(o))p(o,function(t){if(!rt.TypeIsObject(t))throw new TypeError("Iterator value "+t+" is not an entry object");e.set(t[0],t[1])});else if(o instanceof t)r(t.prototype.forEach,o,function(t,r){e.set(r,t)});else{var i,a;if(null!==o&&"undefined"!=typeof o){if(a=e.set,!rt.IsCallable(a))throw new TypeError("bad map");i=rt.GetIterator(o)}if("undefined"!=typeof i)for(;;){var c=rt.IteratorStep(i);if(c===!1)break;var u=c.value;try{
if(!rt.TypeIsObject(u))throw new TypeError("Iterator value "+u+" is not an entry object");r(a,e,u[0],u[1])}catch(s){throw rt.IteratorClose(i,!0),s}}}},Xr=function(t,e,o){if(n(o)||B.string(o))p(o,function(t){e.add(t)});else if(o instanceof t)r(t.prototype.forEach,o,function(t){e.add(t)});else{var i,a;if(null!==o&&"undefined"!=typeof o){if(a=e.add,!rt.IsCallable(a))throw new TypeError("bad set");i=rt.GetIterator(o)}if("undefined"!=typeof i)for(;;){var c=rt.IteratorStep(i);if(c===!1)break;var u=c.value;try{r(a,e,u)}catch(s){throw rt.IteratorClose(i,!0),s}}}},Wr={Map:function(){var t={},e=function(t,e){this.key=t,this.value=e,this.next=null,this.prev=null};e.prototype.isRemoved=function(){return this.key===t};var n=function(t){return!!t._es6map},o=function(t,e){if(!rt.TypeIsObject(t)||!n(t))throw new TypeError("Method Map.prototype."+e+" called on incompatible receiver "+rt.ToString(t))},i=function(t,e){o(t,"[[MapIterator]]"),this.head=t._head,this.i=this.head,this.kind=e};i.prototype={next:function(){var t=this.i,e=this.kind,r=this.head;if("undefined"==typeof this.i)return $t();for(;t.isRemoved()&&t!==r;)t=t.prev;for(var n;t.next!==r;)if(t=t.next,!t.isRemoved())return n="key"===e?t.key:"value"===e?t.value:[t.key,t.value],this.i=t,$t(n);return this.i=void 0,$t()}},mt(i.prototype);var a,c=function u(){if(!(this instanceof u))throw new TypeError('Constructor Map requires "new"');if(this&&this._es6map)throw new TypeError("Bad construction");var t=St(this,u,a,{_es6map:!0,_head:null,_storage:Gr(),_size:0}),r=new e(null,null);return r.next=r.prev=r,t._head=r,arguments.length>0&&Jr(u,t,arguments[0]),t};return a=c.prototype,O.getter(a,"size",function(){if("undefined"==typeof this._size)throw new TypeError("size method called on incompatible Map");return this._size}),b(a,{get:function(t){o(this,"get");var e=qr(t);if(null!==e){var r=this._storage[e];return r?r.value:void 0}for(var n=this._head,i=n;(i=i.next)!==n;)if(rt.SameValueZero(i.key,t))return i.value},has:function(t){o(this,"has");var e=qr(t);if(null!==e)return"undefined"!=typeof this._storage[e];for(var r=this._head,n=r;(n=n.next)!==r;)if(rt.SameValueZero(n.key,t))return!0;return!1},set:function(t,r){o(this,"set");var n,i=this._head,a=i,c=qr(t);if(null!==c){if("undefined"!=typeof this._storage[c])return this._storage[c].value=r,this;n=this._storage[c]=new e(t,r),a=i.prev}for(;(a=a.next)!==i;)if(rt.SameValueZero(a.key,t))return a.value=r,this;return n=n||new e(t,r),rt.SameValue(-0,t)&&(n.key=0),n.next=this._head,n.prev=this._head.prev,n.prev.next=n,n.next.prev=n,this._size+=1,this},"delete":function(e){o(this,"delete");var r=this._head,n=r,i=qr(e);if(null!==i){if("undefined"==typeof this._storage[i])return!1;n=this._storage[i].prev,delete this._storage[i]}for(;(n=n.next)!==r;)if(rt.SameValueZero(n.key,e))return n.key=n.value=t,n.prev.next=n.next,n.next.prev=n.prev,this._size-=1,!0;return!1},clear:function(){o(this,"clear"),this._size=0,this._storage=Gr();for(var e=this._head,r=e,n=r.next;(r=n)!==e;)r.key=r.value=t,n=r.next,r.next=r.prev=e;e.next=e.prev=e},keys:function(){return o(this,"keys"),new i(this,"key")},values:function(){return o(this,"values"),new i(this,"value")},entries:function(){return o(this,"entries"),new i(this,"key+value")},forEach:function(t){o(this,"forEach");for(var e=arguments.length>1?arguments[1]:null,n=this.entries(),i=n.next();!i.done;i=n.next())e?r(t,e,i.value[1],i.value[0],this):t(i.value[1],i.value[0],this)}}),mt(a,a.entries),c}(),Set:function(){var t,e=function(t){return t._es6set&&"undefined"!=typeof t._storage},n=function(t,r){if(!rt.TypeIsObject(t)||!e(t))throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+rt.ToString(t))},i=function u(){if(!(this instanceof u))throw new TypeError('Constructor Set requires "new"');if(this&&this._es6set)throw new TypeError("Bad construction");var e=St(this,u,t,{_es6set:!0,"[[SetData]]":null,_storage:Gr()});if(!e._es6set)throw new TypeError("bad set");return arguments.length>0&&Xr(u,e,arguments[0]),e};t=i.prototype;var a=function(t){var e=t;if("^null"===e)return null;if("^undefined"!==e){var r=e.charAt(0);return"$"===r?C(e,1):"n"===r?+C(e,1):"b"===r?"btrue"===e:+e}},c=function(t){if(!t["[[SetData]]"]){var e=t["[[SetData]]"]=new Wr.Map;p(o(t._storage),function(t){var r=a(t);e.set(r,r)}),t["[[SetData]]"]=e}t._storage=null};return O.getter(i.prototype,"size",function(){return n(this,"size"),this._storage?o(this._storage).length:(c(this),this["[[SetData]]"].size)}),b(i.prototype,{has:function(t){n(this,"has");var e;return this._storage&&null!==(e=qr(t))?!!this._storage[e]:(c(this),this["[[SetData]]"].has(t))},add:function(t){n(this,"add");var e;return this._storage&&null!==(e=qr(t))?(this._storage[e]=!0,this):(c(this),this["[[SetData]]"].set(t,t),this)},"delete":function(t){n(this,"delete");var e;if(this._storage&&null!==(e=qr(t))){var r=z(this._storage,e);return delete this._storage[e]&&r}return c(this),this["[[SetData]]"]["delete"](t)},clear:function(){n(this,"clear"),this._storage&&(this._storage=Gr()),this["[[SetData]]"]&&this["[[SetData]]"].clear()},values:function(){return n(this,"values"),c(this),this["[[SetData]]"].values()},entries:function(){return n(this,"entries"),c(this),this["[[SetData]]"].entries()},forEach:function(t){n(this,"forEach");var e=arguments.length>1?arguments[1]:null,o=this;c(o),this["[[SetData]]"].forEach(function(n,i){e?r(t,e,i,i,o):t(i,i,o)})}}),v(i.prototype,"keys",i.prototype.values,!0),mt(i.prototype,i.prototype.values),i}()};if(S.Map||S.Set){var Vr=c(function(){return 2===new Map([[1,2]]).get(1)});if(!Vr){var Zr=S.Map;S.Map=function Ln(){if(!(this instanceof Ln))throw new TypeError('Constructor Map requires "new"');var t=new Zr;return arguments.length>0&&Jr(Ln,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,S.Map.prototype),t},S.Map.prototype=m(Zr.prototype),v(S.Map.prototype,"constructor",S.Map,!0),O.preserveToString(S.Map,Zr)}var Br=new Map,Yr=function(){var t=new Map([[1,0],[2,0],[3,0],[4,0]]);return t.set(-0,t),t.get(0)===t&&t.get(-0)===t&&t.has(0)&&t.has(-0)}(),Kr=Br.set(1,2)===Br;if(!Yr||!Kr){var Qr=Map.prototype.set;Y(Map.prototype,"set",function(t,e){return r(Qr,this,0===t?0:t,e),this})}if(!Yr){var tn=Map.prototype.get,en=Map.prototype.has;b(Map.prototype,{get:function(t){return r(tn,this,0===t?0:t)},has:function(t){return r(en,this,0===t?0:t)}},!0),O.preserveToString(Map.prototype.get,tn),O.preserveToString(Map.prototype.has,en)}var rn=new Set,nn=function(t){return t["delete"](0),t.add(-0),!t.has(0)}(rn),on=rn.add(1)===rn;if(!nn||!on){var an=Set.prototype.add;Set.prototype.add=function(t){return r(an,this,0===t?0:t),this},O.preserveToString(Set.prototype.add,an)}if(!nn){var cn=Set.prototype.has;Set.prototype.has=function(t){return r(cn,this,0===t?0:t)},O.preserveToString(Set.prototype.has,cn);var un=Set.prototype["delete"];Set.prototype["delete"]=function(t){return r(un,this,0===t?0:t)},O.preserveToString(Set.prototype["delete"],un)}var sn=j(S.Map,function(t){var e=new t([]);return e.set(42,42),e instanceof t}),fn=Object.setPrototypeOf&&!sn,ln=function(){try{return!(S.Map()instanceof S.Map)}catch(t){return t instanceof TypeError}}();if(0!==S.Map.length||fn||!ln){var pn=S.Map;S.Map=function Un(){if(!(this instanceof Un))throw new TypeError('Constructor Map requires "new"');var t=new pn;return arguments.length>0&&Jr(Un,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,Un.prototype),t},S.Map.prototype=pn.prototype,v(S.Map.prototype,"constructor",S.Map,!0),O.preserveToString(S.Map,pn)}var hn=j(S.Set,function(t){var e=new t([]);return e.add(42,42),e instanceof t}),yn=Object.setPrototypeOf&&!hn,dn=function(){try{return!(S.Set()instanceof S.Set)}catch(t){return t instanceof TypeError}}();if(0!==S.Set.length||yn||!dn){var vn=S.Set;S.Set=function zn(){if(!(this instanceof zn))throw new TypeError('Constructor Set requires "new"');var t=new vn;return arguments.length>0&&Xr(zn,t,arguments[0]),delete t.constructor,Object.setPrototypeOf(t,zn.prototype),t},S.Set.prototype=vn.prototype,v(S.Set.prototype,"constructor",S.Set,!0),O.preserveToString(S.Set,vn)}var bn=new S.Map,gn=!c(function(){return bn.keys().next().done});if(("function"!=typeof S.Map.prototype.clear||0!==(new S.Set).size||0!==bn.size||"function"!=typeof S.Map.prototype.keys||"function"!=typeof S.Set.prototype.keys||"function"!=typeof S.Map.prototype.forEach||"function"!=typeof S.Set.prototype.forEach||u(S.Map)||u(S.Set)||"function"!=typeof bn.keys().next||gn||!sn)&&b(S,{Map:Wr.Map,Set:Wr.Set},!0),S.Set.prototype.keys!==S.Set.prototype.values&&v(S.Set.prototype,"keys",S.Set.prototype.values,!0),mt(Object.getPrototypeOf((new S.Map).keys())),mt(Object.getPrototypeOf((new S.Set).keys())),l&&"has"!==S.Set.prototype.has.name){var wn=S.Set.prototype.has;Y(S.Set.prototype,"has",function(t){return r(wn,this,t)})}}b(S,Wr),Ot(S.Map),Ot(S.Set)}var On=function(t){if(!rt.TypeIsObject(t))throw new TypeError("target must be an object")},mn={apply:function(){return rt.Call(rt.Call,null,arguments)},construct:function(t,e){if(!rt.IsConstructor(t))throw new TypeError("First argument must be a constructor.");var r=arguments.length>2?arguments[2]:t;if(!rt.IsConstructor(r))throw new TypeError("new.target must be a constructor.");return rt.Construct(t,e,r,"internal")},deleteProperty:function(t,e){if(On(t),f){var r=Object.getOwnPropertyDescriptor(t,e);if(r&&!r.configurable)return!1}return delete t[e]},has:function(t,e){return On(t),e in t}};Object.getOwnPropertyNames&&Object.assign(mn,{ownKeys:function(t){On(t);var e=Object.getOwnPropertyNames(t);return rt.IsCallable(Object.getOwnPropertySymbols)&&M(e,Object.getOwnPropertySymbols(t)),e}});var jn=function(t){return!a(t)};if(Object.preventExtensions&&Object.assign(mn,{isExtensible:function(t){return On(t),Object.isExtensible(t)},preventExtensions:function(t){return On(t),jn(function(){Object.preventExtensions(t)})}}),f){var Tn=function(t,e,r){var n=Object.getOwnPropertyDescriptor(t,e);if(!n){var o=Object.getPrototypeOf(t);if(null===o)return;return Tn(o,e,r)}return"value"in n?n.value:n.get?rt.Call(n.get,r):void 0},Sn=function(t,e,n,o){var i=Object.getOwnPropertyDescriptor(t,e);if(!i){var a=Object.getPrototypeOf(t);if(null!==a)return Sn(a,e,n,o);i={value:void 0,writable:!0,enumerable:!0,configurable:!0}}if("value"in i){if(!i.writable)return!1;if(!rt.TypeIsObject(o))return!1;var c=Object.getOwnPropertyDescriptor(o,e);return c?tt.defineProperty(o,e,{value:n}):tt.defineProperty(o,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}return i.set?(r(i.set,o,n),!0):!1};Object.assign(mn,{defineProperty:function(t,e,r){return On(t),jn(function(){Object.defineProperty(t,e,r)})},getOwnPropertyDescriptor:function(t,e){return On(t),Object.getOwnPropertyDescriptor(t,e)},get:function(t,e){On(t);var r=arguments.length>2?arguments[2]:t;return Tn(t,e,r)},set:function(t,e,r){On(t);var n=arguments.length>3?arguments[3]:t;return Sn(t,e,r,n)}})}if(Object.getPrototypeOf){var En=Object.getPrototypeOf;mn.getPrototypeOf=function(t){return On(t),En(t)}}if(Object.setPrototypeOf&&mn.getPrototypeOf){var _n=function(t,e){for(var r=e;r;){if(t===r)return!0;r=mn.getPrototypeOf(r)}return!1};Object.assign(mn,{setPrototypeOf:function(t,e){if(On(t),null!==e&&!rt.TypeIsObject(e))throw new TypeError("proto must be an object or null");return e===tt.getPrototypeOf(t)?!0:tt.isExtensible&&!tt.isExtensible(t)?!1:_n(t,e)?!1:(Object.setPrototypeOf(t,e),!0)}})}var xn=function(t,e){if(rt.IsCallable(S.Reflect[t])){var r=c(function(){return S.Reflect[t](1),S.Reflect[t](NaN),S.Reflect[t](!0),!0});r&&Y(S.Reflect,t,e)}else v(S.Reflect,t,e)};Object.keys(mn).forEach(function(t){xn(t,mn[t])});var In=S.Reflect.getPrototypeOf;if(l&&In&&"getPrototypeOf"!==In.name&&Y(S.Reflect,"getPrototypeOf",function(t){return r(In,S.Reflect,t)}),S.Reflect.setPrototypeOf&&c(function(){return S.Reflect.setPrototypeOf(1,{}),!0})&&Y(S.Reflect,"setPrototypeOf",mn.setPrototypeOf),S.Reflect.defineProperty&&(c(function(){var t=!S.Reflect.defineProperty(1,"test",{value:1}),e="function"!=typeof Object.preventExtensions||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return t&&e})||Y(S.Reflect,"defineProperty",mn.defineProperty)),S.Reflect.construct&&(c(function(){var t=function(){};return S.Reflect.construct(function(){},[],t)instanceof t})||Y(S.Reflect,"construct",mn.construct)),"Invalid Date"!==String(new Date(NaN))){var Cn=Date.prototype.toString,Pn=function(){var t=+this;return t!==t?"Invalid Date":rt.Call(Cn,this)};Y(Date.prototype,"toString",Pn)}var Mn={anchor:function(t){return rt.CreateHTML(this,"a","name",t)},big:function(){return rt.CreateHTML(this,"big","","")},blink:function(){return rt.CreateHTML(this,"blink","","")},bold:function(){return rt.CreateHTML(this,"b","","")},fixed:function(){return rt.CreateHTML(this,"tt","","")},fontcolor:function(t){return rt.CreateHTML(this,"font","color",t)},fontsize:function(t){return rt.CreateHTML(this,"font","size",t)},italics:function(){return rt.CreateHTML(this,"i","","")},link:function(t){return rt.CreateHTML(this,"a","href",t)},small:function(){return rt.CreateHTML(this,"small","","")},strike:function(){return rt.CreateHTML(this,"strike","","")},sub:function(){return rt.CreateHTML(this,"sub","","")},sup:function(){return rt.CreateHTML(this,"sup","","")}};p(Object.keys(Mn),function(t){var e=String.prototype[t],n=!1;if(rt.IsCallable(e)){var o=r(e,"",' " '),i=I([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else n=!0;n&&Y(String.prototype,t,Mn[t])});var Nn=function(){if(!K)return!1;var t="object"==typeof JSON&&"function"==typeof JSON.stringify?JSON.stringify:null;if(!t)return!1;if("undefined"!=typeof t($()))return!0;if("[null]"!==t([$()]))return!0;var e={a:$()};return e[$()]=!0,"{}"!==t(e)}(),An=c(function(){return K?"{}"===JSON.stringify(Object($()))&&"[{}]"===JSON.stringify([Object($())]):!0});if(Nn||!An){var Dn=JSON.stringify;Y(JSON,"stringify",function(t){if("symbol"!=typeof t){var e;arguments.length>1&&(e=arguments[1]);var o=[t];if(n(e))o.push(e);else{var i=rt.IsCallable(e)?e:null,a=function(t,e){var n=i?r(i,this,t,e):e;return"symbol"!=typeof n?B.symbol(n)?Te({})(n):n:void 0};o.push(a)}return arguments.length>2&&o.push(arguments[2]),Dn.apply(this,o)}})}return S}),function(){function t(e,n){function i(t){if(i[t]!==v)return i[t];var e;if("bug-string-char-index"==t)e="a"!="a"[0];else if("json"==t)e=i("json-stringify")&&i("json-parse");else{var r,o='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if("json-stringify"==t){var u=n.stringify,f="function"==typeof u&&w;if(f){(r=function(){return 1}).toJSON=r;try{f="0"===u(0)&&"0"===u(new a)&&'""'==u(new c)&&u(g)===v&&u(v)===v&&u()===v&&"1"===u(r)&&"[1]"==u([r])&&"[null]"==u([v])&&"null"==u(null)&&"[null,null,null]"==u([v,g,null])&&u({a:[r,!0,!1,null,"\x00\b\n\f\r	"]})==o&&"1"===u(null,r)&&"[\n 1,\n 2\n]"==u([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==u(new s(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==u(new s(864e13))&&'"-000001-01-01T00:00:00.000Z"'==u(new s(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==u(new s(-1))}catch(l){f=!1}}e=f}if("json-parse"==t){var p=n.parse;if("function"==typeof p)try{if(0===p("0")&&!p(!1)){r=p(o);var h=5==r.a.length&&1===r.a[0];if(h){try{h=!p('"	"')}catch(l){}if(h)try{h=1!==p("01")}catch(l){}if(h)try{h=1!==p("1.")}catch(l){}}}}catch(l){h=!1}e=h}}return i[t]=!!e}e||(e=o.Object()),n||(n=o.Object());var a=e.Number||o.Number,c=e.String||o.String,u=e.Object||o.Object,s=e.Date||o.Date,f=e.SyntaxError||o.SyntaxError,l=e.TypeError||o.TypeError,p=e.Math||o.Math,h=e.JSON||o.JSON;"object"==typeof h&&h&&(n.stringify=h.stringify,n.parse=h.parse);var y,d,v,b=u.prototype,g=b.toString,w=new s(-0xc782b5b800cec);try{w=-109252==w.getUTCFullYear()&&0===w.getUTCMonth()&&1===w.getUTCDate()&&10==w.getUTCHours()&&37==w.getUTCMinutes()&&6==w.getUTCSeconds()&&708==w.getUTCMilliseconds()}catch(O){}if(!i("json")){var m="[object Function]",j="[object Date]",T="[object Number]",S="[object String]",E="[object Array]",_="[object Boolean]",x=i("bug-string-char-index");if(!w)var I=p.floor,C=[0,31,59,90,120,151,181,212,243,273,304,334],P=function(t,e){return C[e]+365*(t-1970)+I((t-1969+(e=+(e>1)))/4)-I((t-1901+e)/100)+I((t-1601+e)/400)};if((y=b.hasOwnProperty)||(y=function(t){var e,r={};return(r.__proto__=null,r.__proto__={toString:1},r).toString!=g?y=function(t){var e=this.__proto__,r=t in(this.__proto__=null,this);return this.__proto__=e,r}:(e=r.constructor,y=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,y.call(this,t)}),d=function(t,e){var n,o,i,a=0;(n=function(){this.valueOf=0}).prototype.valueOf=0,o=new n;for(i in o)y.call(o,i)&&a++;return n=o=null,a?d=2==a?function(t,e){var r,n={},o=g.call(t)==m;for(r in t)o&&"prototype"==r||y.call(n,r)||!(n[r]=1)||!y.call(t,r)||e(r)}:function(t,e){var r,n,o=g.call(t)==m;for(r in t)o&&"prototype"==r||!y.call(t,r)||(n="constructor"===r)||e(r);(n||y.call(t,r="constructor"))&&e(r)}:(o=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"],d=function(t,e){var n,i,a=g.call(t)==m,c=!a&&"function"!=typeof t.constructor&&r[typeof t.hasOwnProperty]&&t.hasOwnProperty||y;for(n in t)a&&"prototype"==n||!c.call(t,n)||e(n);for(i=o.length;n=o[--i];c.call(t,n)&&e(n));}),d(t,e)},!i("json-stringify")){var M={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"},N="000000",A=function(t,e){return(N+(e||0)).slice(-t)},D="\\u00",R=function(t){for(var e='"',r=0,n=t.length,o=!x||n>10,i=o&&(x?t.split(""):t);n>r;r++){var a=t.charCodeAt(r);switch(a){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=M[a];break;default:if(32>a){e+=D+A(2,a.toString(16));break}e+=o?i[r]:t.charAt(r)}}return e+'"'},k=function(t,e,r,n,o,i,a){var c,u,s,f,p,h,b,w,O,m,x,C,M,N,D,F;try{c=e[t]}catch(L){}if("object"==typeof c&&c)if(u=g.call(c),u!=j||y.call(c,"toJSON"))"function"==typeof c.toJSON&&(u!=T&&u!=S&&u!=E||y.call(c,"toJSON"))&&(c=c.toJSON(t));else if(c>-1/0&&1/0>c){if(P){for(p=I(c/864e5),s=I(p/365.2425)+1970-1;P(s+1,0)<=p;s++);for(f=I((p-P(s,0))/30.42);P(s,f+1)<=p;f++);p=1+p-P(s,f),h=(c%864e5+864e5)%864e5,b=I(h/36e5)%24,w=I(h/6e4)%60,O=I(h/1e3)%60,m=h%1e3}else s=c.getUTCFullYear(),f=c.getUTCMonth(),p=c.getUTCDate(),b=c.getUTCHours(),w=c.getUTCMinutes(),O=c.getUTCSeconds(),m=c.getUTCMilliseconds();c=(0>=s||s>=1e4?(0>s?"-":"+")+A(6,0>s?-s:s):A(4,s))+"-"+A(2,f+1)+"-"+A(2,p)+"T"+A(2,b)+":"+A(2,w)+":"+A(2,O)+"."+A(3,m)+"Z"}else c=null;if(r&&(c=r.call(e,t,c)),null===c)return"null";if(u=g.call(c),u==_)return""+c;if(u==T)return c>-1/0&&1/0>c?""+c:"null";if(u==S)return R(""+c);if("object"==typeof c){for(N=a.length;N--;)if(a[N]===c)throw l();if(a.push(c),x=[],D=i,i+=o,u==E){for(M=0,N=c.length;N>M;M++)C=k(M,c,r,n,o,i,a),x.push(C===v?"null":C);F=x.length?o?"[\n"+i+x.join(",\n"+i)+"\n"+D+"]":"["+x.join(",")+"]":"[]"}else d(n||c,function(t){var e=k(t,c,r,n,o,i,a);e!==v&&x.push(R(t)+":"+(o?" ":"")+e)}),F=x.length?o?"{\n"+i+x.join(",\n"+i)+"\n"+D+"}":"{"+x.join(",")+"}":"{}";return a.pop(),F}};n.stringify=function(t,e,n){var o,i,a,c;if(r[typeof e]&&e)if((c=g.call(e))==m)i=e;else if(c==E){a={};for(var u,s=0,f=e.length;f>s;u=e[s++],c=g.call(u),(c==S||c==T)&&(a[u]=1));}if(n)if((c=g.call(n))==T){if((n-=n%1)>0)for(o="",n>10&&(n=10);o.length<n;o+=" ");}else c==S&&(o=n.length<=10?n:n.slice(0,10));return k("",(u={},u[""]=t,u),i,a,o,"",[])}}if(!i("json-parse")){var F,L,U=c.fromCharCode,z={92:"\\",34:'"',47:"/",98:"\b",116:"	",110:"\n",102:"\f",114:"\r"},H=function(){throw F=L=null,f()},$=function(){for(var t,e,r,n,o,i=L,a=i.length;a>F;)switch(o=i.charCodeAt(F)){case 9:case 10:case 13:case 32:F++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=x?i.charAt(F):i[F],F++,t;case 34:for(t="@",F++;a>F;)if(o=i.charCodeAt(F),32>o)H();else if(92==o)switch(o=i.charCodeAt(++F)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=z[o],F++;break;case 117:for(e=++F,r=F+4;r>F;F++)o=i.charCodeAt(F),o>=48&&57>=o||o>=97&&102>=o||o>=65&&70>=o||H();t+=U("0x"+i.slice(e,F));break;default:H()}else{if(34==o)break;for(o=i.charCodeAt(F),e=F;o>=32&&92!=o&&34!=o;)o=i.charCodeAt(++F);t+=i.slice(e,F)}if(34==i.charCodeAt(F))return F++,t;H();default:if(e=F,45==o&&(n=!0,o=i.charCodeAt(++F)),o>=48&&57>=o){for(48==o&&(o=i.charCodeAt(F+1),o>=48&&57>=o)&&H(),n=!1;a>F&&(o=i.charCodeAt(F),o>=48&&57>=o);F++);if(46==i.charCodeAt(F)){for(r=++F;a>r&&(o=i.charCodeAt(r),o>=48&&57>=o);r++);r==F&&H(),F=r}if(o=i.charCodeAt(F),101==o||69==o){for(o=i.charCodeAt(++F),43!=o&&45!=o||F++,r=F;a>r&&(o=i.charCodeAt(r),o>=48&&57>=o);r++);r==F&&H(),F=r}return+i.slice(e,F)}if(n&&H(),"true"==i.slice(F,F+4))return F+=4,!0;if("false"==i.slice(F,F+5))return F+=5,!1;if("null"==i.slice(F,F+4))return F+=4,null;H()}return"$"},q=function(t){var e,r;if("$"==t&&H(),"string"==typeof t){if("@"==(x?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];t=$(),"]"!=t;r||(r=!0))r&&(","==t?(t=$(),"]"==t&&H()):H()),","==t&&H(),e.push(q(t));return e}if("{"==t){for(e={};t=$(),"}"!=t;r||(r=!0))r&&(","==t?(t=$(),"}"==t&&H()):H()),","!=t&&"string"==typeof t&&"@"==(x?t.charAt(0):t[0])&&":"==$()||H(),e[t.slice(1)]=q($());return e}H()}return t},G=function(t,e,r){var n=J(t,e,r);n===v?delete t[e]:t[e]=n},J=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if(g.call(o)==E)for(n=o.length;n--;)G(o,n,r);else d(o,function(t){G(o,t,r)});return r.call(t,e,o)};n.parse=function(t,e){var r,n;return F=0,L=""+t,r=q($()),"$"!=$()&&H(),F=L=null,e&&g.call(e)==m?J((n={},n[""]=r,n),"",e):r}}}return n.runInContext=t,n}var e="function"==typeof define&&define.amd,r={"function":!0,object:!0},n=r[typeof exports]&&exports&&!exports.nodeType&&exports,o=r[typeof window]&&window||this,i=n&&r[typeof module]&&module&&!module.nodeType&&"object"==typeof global&&global;if(!i||i.global!==i&&i.window!==i&&i.self!==i||(o=i),n&&!e)t(o,n);else{var a=o.JSON,c=o.JSON3,u=!1,s=t(o,o.JSON3={noConflict:function(){return u||(u=!0,o.JSON=a,o.JSON3=c,a=c=null),s}});o.JSON={parse:s.parse,stringify:s.stringify}}e&&define(function(){return s})}.call(this),!function(t,e){"use strict";"function"==typeof define&&define.amd?define("stacktrace",["error-stack-parser","stack-generator","stacktrace-gps"],e):"object"==typeof exports?module.exports=e(require("error-stack-parser"),require("stack-generator"),require("stacktrace-gps")):t.StackTrace=e(t.ErrorStackParser,t.StackGenerator,t.StackTraceGPS)}(this,function(t,e,r){function n(t,e){var r={};return[t,e].forEach(function(t){for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e]);return r}),r}function o(t){return t.stack||t["opera#sourceloc"]}var i={filter:function(t){return-1===(t.functionName||"").indexOf("StackTrace$$")&&-1===(t.functionName||"").indexOf("ErrorStackParser$$")&&-1===(t.functionName||"").indexOf("StackTraceGPS$$")&&-1===(t.functionName||"").indexOf("StackGenerator$$")},sourceCache:{}};return{get:function(t){try{throw new Error}catch(e){return o(e)?this.fromError(e,t):this.generateArtificially(t)}},fromError:function(e,o){o=n(i,o);var a=new r(o);return new Promise(function(r){var n=t.parse(e);"function"==typeof o.filter&&(n=n.filter(o.filter)),r(Promise.all(n.map(function(t){return new Promise(function(e){function r(){e(t)}a.pinpoint(t).then(e,r)["catch"](r)})})))}.bind(this))},generateArtificially:function(t){t=n(i,t);var r=e.backtrace(t);return"function"==typeof t.filter&&(r=r.filter(t.filter)),Promise.resolve(r)},instrument:function(t,e,r,n){if("function"!=typeof t)throw new Error("Cannot instrument non-function object");if("function"==typeof t.__stacktraceOriginalFn)return t;var i=function(){try{return this.get().then(e,r)["catch"](r),t.apply(n||this,arguments)}catch(i){throw o(i)&&this.fromError(i).then(e,r)["catch"](r),i}}.bind(this);return i.__stacktraceOriginalFn=t,i},deinstrument:function(t){if("function"!=typeof t)throw new Error("Cannot de-instrument non-function object");return"function"==typeof t.__stacktraceOriginalFn?t.__stacktraceOriginalFn:t},report:function(t,e){return new Promise(function(r,n){var o=new XMLHttpRequest;o.onerror=n,o.onreadystatechange=function(){4===o.readyState&&(o.status>=200&&o.status<400?r(o.responseText):n(new Error("POST to "+e+" failed with status: "+o.status)))},o.open("post",e),o.setRequestHeader("Content-Type","application/json"),o.send(JSON.stringify({stack:t}))})}}}),!function(){function t(){!window.XMLHttpRequest||f?this._object=new window.ActiveXObject("Microsoft.XMLHTTP"):window.XMLHttpRequest.isNormalizedObject?this._object=new c:this._object=new window.XMLHttpRequest,this._listeners=[]}function e(){return new t}function r(t){if(t._object.send(t._data),u&&!t._async)for(t.readyState=e.OPENED,i(t);t.readyState<e.DONE;)if(t.readyState++,n(t),t._aborted)return}function n(t){e.onreadystatechange&&e.onreadystatechange.apply(t),t.dispatchEvent({type:"readystatechange",bubbles:!1,cancelable:!1,timeStamp:(new Date).getTime()})}function o(t){var e=t.responseXML,r=t.responseText;return s&&r&&e&&!e.documentElement&&t.getResponseHeader("Content-Type").match(/[^\/]+\/[^\+]+\+xml/)&&(e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async=!1,e.validateOnParse=!1,e.loadXML(r)),e&&(s&&0!=e.parseError||!e.documentElement||e.documentElement&&"parsererror"==e.documentElement.tagName)?null:e}function i(t){try{t.responseText=t._object.responseText}catch(e){}try{t.responseXML=o(t._object)}catch(e){}try{t.status=t._object.status}catch(e){}try{t.statusText=t._object.statusText}catch(e){}}function a(t){t._object.onreadystatechange=new window.Function}var c=window.XMLHttpRequest,u=!!window.controllers,s=!!window.document.namespaces,f=s&&window.navigator.userAgent.match(/MSIE 7.0/);e.prototype=t.prototype,u&&c.wrapped&&(e.wrapped=c.wrapped),e.isNormalizedObject=!0,e.UNSENT=0,e.OPENED=1,e.HEADERS_RECEIVED=2,e.LOADING=3,e.DONE=4,e.prototype.UNSENT=e.UNSENT,e.prototype.OPENED=e.OPENED,e.prototype.HEADERS_RECEIVED=e.HEADERS_RECEIVED,e.prototype.LOADING=e.LOADING,e.prototype.DONE=e.DONE,e.prototype.readyState=e.UNSENT,e.prototype.responseText="",e.prototype.responseXML=null,e.prototype.status=0,e.prototype.statusText="",e.prototype.priority="NORMAL",e.prototype.onreadystatechange=null,e.onreadystatechange=null,e.onopen=null,e.onsend=null,e.onabort=null,e.prototype.open=function(t,r,o,c,f){var l=t.toLowerCase();if("connect"==l||"trace"==l||"track"==l)throw new Error(18);delete this._headers,arguments.length<3&&(o=!0),this._async=o;var p=this,h=this.readyState,y=null;s&&o&&(y=function(){h!=e.DONE&&(a(p),p.abort())},window.attachEvent("onunload",y)),e.onopen&&e.onopen.apply(this,arguments),arguments.length>4?this._object.open(t,r,o,c,f):arguments.length>3?this._object.open(t,r,o,c):this._object.open(t,r,o),this.readyState=e.OPENED,n(this),this._object.onreadystatechange=function(){return!u||o?(p.readyState=p._object.readyState,i(p),p._aborted?void(p.readyState=e.UNSENT):void(p.readyState==e.DONE&&(delete p._data,a(p),s&&o&&window.detachEvent("onunload",y),h!=p.readyState&&n(p),h=p.readyState))):void 0}},e.prototype.send=function(t){e.onsend&&e.onsend.apply(this,arguments),arguments.length||(t=null),t&&t.nodeType&&(t=window.XMLSerializer?(new window.XMLSerializer).serializeToString(t):t.xml,this._headers["Content-Type"]||this._object.setRequestHeader("Content-Type","application/xml")),this._data=t,r(this)},e.prototype.abort=function(){e.onabort&&e.onabort.apply(this,arguments),this.readyState>e.UNSENT&&(this._aborted=!0),this._object.abort(),a(this),this.readyState=e.UNSENT,delete this._data},e.prototype.getAllResponseHeaders=function(){return this._object.getAllResponseHeaders()},e.prototype.getResponseHeader=function(t){return this._object.getResponseHeader(t)},e.prototype.setRequestHeader=function(t,e){return this._headers||(this._headers={}),this._headers[t]=e,this._object.setRequestHeader(t,e)},e.prototype.addEventListener=function(t,e,r){for(var n,o=0;n=this._listeners[o];o++)if(n[0]==t&&n[1]==e&&n[2]==r)return;this._listeners.push([t,e,r])},e.prototype.removeEventListener=function(t,e,r){for(var n,o=0;(n=this._listeners[o])&&(n[0]!=t||n[1]!=e||n[2]!=r);o++);n&&this._listeners.splice(o,1)},e.prototype.dispatchEvent=function(t){var e={type:t.type,target:this,currentTarget:this,eventPhase:2,bubbles:t.bubbles,cancelable:t.cancelable,timeStamp:t.timeStamp,stopPropagation:function(){},preventDefault:function(){},initEvent:function(){}};"readystatechange"==e.type&&this.onreadystatechange&&(this.onreadystatechange.handleEvent||this.onreadystatechange).apply(this,[e]);for(var r,n=0;r=this._listeners[n];n++)r[0]!=e.type||r[2]||(r[1].handleEvent||r[1]).apply(this,[e])},e.prototype.toString=function(){return"[object XMLHttpRequest]"},e.toString=function(){return"[XMLHttpRequest]"},window.Function.prototype.apply||(window.Function.prototype.apply=function(t,e){e||(e=[]),t.__func=this,t.__func(e[0],e[1],e[2],e[3],e[4]),delete t.__func}),window.XMLHttpRequest=e}(),!function(){"use strict";var bind=function(t,e,r){var n=Array.prototype.slice.call(arguments,2);return function(){var r=n.concat(Array.prototype.slice.call(arguments,0));t.apply(e,r)}};window.console||(window.console={});var console=window.console;if(!console.log)if(window.log4javascript){var log=log4javascript.getDefaultLogger();console.log=bind(log.info,log),console.debug=bind(log.debug,log),console.info=bind(log.info,log),console.warn=bind(log.warn,log),console.error=bind(log.error,log)}else console.log=function(t){};if(console.debug||(console.debug=console.log),console.info||(console.info=console.log),console.warn||(console.warn=console.log),console.error||(console.error=console.log),null!=window.__consoleShimTest__||eval("/*@cc_on @_jscript_version <= 9@*/")){var wrap=function(t){var e,r,n,o;if(t=Array.prototype.slice.call(arguments,0),o=t.shift(),r=t.length,r>1&&window.__consoleShimTest__!==!1)for("string"!=typeof t[0]&&(t.unshift("%o"),r+=1),n=t[0].match(/%[a-z]/g),e=n?n.length+1:1;r>e;e+=1)t[0]+=" %o";Function.apply.call(o,console,t)};console.log=bind(wrap,window,console.log),console.debug=bind(wrap,window,console.debug),console.info=bind(wrap,window,console.info),console.warn=bind(wrap,window,console.warn),console.error=bind(wrap,window,console.error)}if(console.assert||(console.assert=function(){var t=Array.prototype.slice.call(arguments,0),e=t.shift();e||(t[0]="Assertion failed: "+t[0],console.error.apply(console,t))}),console.dir||(console.dir=console.log),console.dirxml||(console.dirxml=console.log),console.exception||(console.exception=console.error),!console.time||!console.timeEnd){var timers={};console.time=function(t){timers[t]=(new Date).getTime()},console.timeEnd=function(t){var e=timers[t];e&&(console.log(t+": "+((new Date).getTime()-e)+"ms"),delete timers[t])}}console.table||(console.table=function(t,e){var r,n,o,i,a,c;if(t&&t instanceof Array&&t.length){if(!(e&&e instanceof Array)){e=[];for(c in t[0])t[0].hasOwnProperty(c)&&e.push(c)}for(r=0,n=t.length;n>r;r+=1){for(o=[],i=0,a=e.length;a>i;i+=1)o.push(t[r][e[i]]);Function.apply.call(console.log,console,o)}}}),console.clear||(console.clear=function(){}),console.trace||(console.trace=function(){}),console.group||(console.group=function(){}),console.groupCollapsed||(console.groupCollapsed=function(){}),console.groupEnd||(console.groupEnd=function(){}),console.timeStamp||(console.timeStamp=function(){}),console.profile||(console.profile=function(){}),console.profileEnd||(console.profileEnd=function(){}),console.count||(console.count=function(){})}();
//# sourceMappingURL=../maps/burnscars.js.map

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */(function(){
  'use strict';
  (function(){

    // Stolen from https://github.com/maikudou/iso639-js
    var canonical = {
      'aa': 'Afar',
      'ab': 'Abkhazian',
      'af': 'Afrikaans',
      'ak': 'Akan',
      'am': 'Amharic',
      'ar': 'Arabic',
      'an': 'Aragonese',
      'as': 'Assamese',
      'av': 'Avaric',
      'ae': 'Avestan',
      'ay': 'Aymara',
      'az': 'Azerbaijani',
      'ba': 'Bashkir',
      'bm': 'Bambara',
      'be': 'Belarusian',
      'bn': 'Bengali',
      'bi': 'Bislama',
      'bo': 'Tibetan',
      'bs': 'Bosnian',
      'br': 'Breton',
      'bg': 'Bulgarian',
      'ca': 'Catalan',
      'cs': 'Czech',
      'ch': 'Chamorro',
      'ce': 'Chechen',
      'cu': 'Church Slavic',
      'cv': 'Chuvash',
      'kw': 'Cornish',
      'co': 'Corsican',
      'cr': 'Cree',
      'cy': 'Welsh',
      'da': 'Danish',
      'de': 'German',
      'dv': 'Dhivehi',
      'dz': 'Dzongkha',
      'el': 'Modern Greek (1453-)',
      'en': 'English',
      'eo': 'Esperanto',
      'et': 'Estonian',
      'eu': 'Basque',
      'ee': 'Ewe',
      'fo': 'Faroese',
      'fa': 'Persian',
      'fj': 'Fijian',
      'fi': 'Finnish',
      'fr': 'French',
      'fy': 'Western Frisian',
      'ff': 'Fulah',
      'gd': 'Scottish Gaelic',
      'ga': 'Irish',
      'gl': 'Galician',
      'gv': 'Manx',
      'gn': 'Guarani',
      'gu': 'Gujarati',
      'ht': 'Haitian',
      'ha': 'Hausa',
      'sh': 'Serbo-Croatian',
      'he': 'Hebrew',
      'hz': 'Herero',
      'hi': 'Hindi',
      'ho': 'Hiri Motu',
      'hr': 'Croatian',
      'hu': 'Hungarian',
      'hy': 'Armenian',
      'ig': 'Igbo',
      'io': 'Ido',
      'ii': 'Sichuan Yi',
      'iu': 'Inuktitut',
      'ie': 'Interlingue',
      'ia': 'Interlingua (International Auxiliary Language Association)',
      'id': 'Indonesian',
      'ik': 'Inupiaq',
      'is': 'Icelandic',
      'it': 'Italian',
      'jv': 'Javanese',
      'ja': 'Japanese',
      'kl': 'Kalaallisut',
      'kn': 'Kannada',
      'ks': 'Kashmiri',
      'ka': 'Georgian',
      'kr': 'Kanuri',
      'kk': 'Kazakh',
      'km': 'Central Khmer',
      'ki': 'Kikuyu',
      'rw': 'Kinyarwanda',
      'ky': 'Kirghiz',
      'kv': 'Komi',
      'kg': 'Kongo',
      'ko': 'Korean',
      'kj': 'Kuanyama',
      'ku': 'Kurdish',
      'lo': 'Lao',
      'la': 'Latin',
      'lv': 'Latvian',
      'li': 'Limburgan',
      'ln': 'Lingala',
      'lt': 'Lithuanian',
      'lb': 'Luxembourgish',
      'lu': 'Luba-Katanga',
      'lg': 'Ganda',
      'mh': 'Marshallese',
      'ml': 'Malayalam',
      'mr': 'Marathi',
      'mk': 'Macedonian',
      'mg': 'Malagasy',
      'mt': 'Maltese',
      'mn': 'Mongolian',
      'mi': 'Maori',
      'ms': 'Malay (macrolanguage)',
      'my': 'Burmese',
      'na': 'Nauru',
      'nv': 'Navajo',
      'nr': 'South Ndebele',
      'nd': 'North Ndebele',
      'ng': 'Ndonga',
      'ne': 'Nepali (macrolanguage)',
      'nl': 'Dutch',
      'nn': 'Norwegian Nynorsk',
      'nb': 'Norwegian Bokmål',
      'no': 'Norwegian',
      'ny': 'Nyanja',
      'oc': 'Occitan (post 1500)',
      'oj': 'Ojibwa',
      'or': 'Oriya (macrolanguage)',
      'om': 'Oromo',
      'os': 'Ossetian',
      'pa': 'Panjabi',
      'pi': 'Pali',
      'pl': 'Polish',
      'pt': 'Portuguese',
      'ps': 'Pushto',
      'qu': 'Quechua',
      'rm': 'Romansh',
      'ro': 'Romanian',
      'rn': 'Rundi',
      'ru': 'Russian',
      'sg': 'Sango',
      'sa': 'Sanskrit',
      'si': 'Sinhala',
      'sk': 'Slovak',
      'sl': 'Slovenian',
      'se': 'Northern Sami',
      'sm': 'Samoan',
      'sn': 'Shona',
      'sd': 'Sindhi',
      'so': 'Somali',
      'st': 'Southern Sotho',
      'es': 'Spanish',
      'sq': 'Albanian',
      'sc': 'Sardinian',
      'sr': 'Serbian',
      'ss': 'Swati',
      'su': 'Sundanese',
      'sw': 'Swahili (macrolanguage)',
      'sv': 'Swedish',
      'ty': 'Tahitian',
      'ta': 'Tamil',
      'tt': 'Tatar',
      'te': 'Telugu',
      'tg': 'Tajik',
      'tl': 'Tagalog',
      'th': 'Thai',
      'ti': 'Tigrinya',
      'to': 'Tonga (Tonga Islands)',
      'tn': 'Tswana',
      'ts': 'Tsonga',
      'tk': 'Turkmen',
      'tr': 'Turkish',
      'tw': 'Twi',
      'ug': 'Uighur',
      'uk': 'Ukrainian',
      'ur': 'Urdu',
      'uz': 'Uzbek',
      've': 'Venda',
      'vi': 'Vietnamese',
      'vo': 'Volapük',
      'wa': 'Walloon',
      'wo': 'Wolof',
      'xh': 'Xhosa',
      'yi': 'Yiddish',
      'yo': 'Yoruba',
      'za': 'Zhuang',
      'zh': 'Chinese',
      'zu': 'Zulu'
    };


    var generateReverse = function(lku){
      var rev = {};
      Object.keys(lku).forEach(function(key){
        rev[lku[key]] = key;
      });
      return rev;
    }


    var LanguageService = function(lko){
      var lookup = lko || canonical;
      var reverse = generateReverse(lookup);

      this.decode = function(isoCode){
        if (!(isoCode in lookup))
          return;
        return lookup[isoCode];
      };

      this.encode = function(ln){
        if (!(ln in reverse))
          return;
        return reverse[ln];
      };

      this.fork = function(alternativeLookupTable){
        return new LanguageService(alternativeLookupTable);
      };
    };

    this.iso639 = new LanguageService();

  }).apply(this.grammar || (this.grammar = {}));
}).apply(this.Mingus || (this.Mingus = {}));


/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */(function(){
  'use strict';
  (function(){

    this.uuid = {
      generate: function() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
        });
      }
    };

  }).apply(this.grammar || (this.grammar = {}));
}).apply(this.Mingus || (this.Mingus = {}));

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */(function(globalObject) {
  'use strict';

  var toUse = [];
  var lastUse;
  var toAdd = [];
  var lastAdd;

  var flush = function() {
    if (lastUse) {
      toUse.push(lastUse);
      lastUse = null;
    }
    if (lastAdd) {
      if (!lastAdd.name)
        throw new Error('NEED_A_NAME: Trying to bind "something" without any name');
      toAdd.push(lastAdd);
      lastAdd = null;
    }
  };

  var simplePull = function(glob, name, optional) {
    name.split('.').forEach(function(fragment) {
      if (!glob || !(fragment in glob))
        if (!optional)
          throw new Error('MISSING: Trying to require something that doesn\'t exist' + name);
        else
          return (glob = undefined);
        glob = glob[fragment];
    });
    return glob;
  };

  var parentPull = function(glob, name) {
    var ret = {};
    name.split('.').forEach(function(fragment) {
      ret.o = glob;
      ret.k = fragment;
      if (!(fragment in glob))
        glob[fragment] = {};
      glob = glob[fragment];
    });
    return ret;
  };

  var packer = function() {
    // Close anything going on
    flush();
    // Dereference requested stuff and flush it
    var localUse = toUse;
    var localAdd = toAdd;
    toUse = [];
    toAdd = [];

    // Add local elements to the API
    var api = {};
    localAdd.forEach(function(item) {
      if (item.name in api)
        throw new Error('ALREADY_DEFINED: You are shadowing ' + api[item.name] + ' with ' +
            item + ' for name ' + item.name);
      api[item.name] = item.value;
    });

    localUse.forEach(function(item) {
      if (item.name in api)
        throw new Error('ALREADY_DEFINED: You are shadowing name ' + item.name);
      api[item.name] = simplePull(globalObject, item.module, item.optional);
    });
    return api;
  };

  this.use = function(a, optional) {
    flush();
    lastUse = {module: a, name: a.split('.').pop(), optional: optional};
    return this;
  };

  this.add = function(a, optional) {
    if (a === undefined && !optional)
      throw new Error('UNDEFINED: Requesting something local that is undefined');
    flush();
    lastAdd = {value: a};
    return this;
  };

  this.as = function(a) {
    (lastUse ? lastUse : lastAdd).name = a.toString();
    flush();
  };

  this.has = function(name) {
    return simplePull(globalObject, name, true) !== undefined;
  };

  this.pack = function(name, factory) {
    var api = packer();
    var r = parentPull(globalObject, name);
    var ret = factory.apply(r.o[r.k], [api]);
    if (ret)
      r.o[r.k] = ret;
  };

  this.run = function(factory) {
    var api = packer();
    factory.apply({}, [api]);
  };

}).apply(this.jsBoot || (this.jsBoot = {}), [this]);

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 *//*global Error: false*/
jsBoot.add(Error).as('NativeError');
jsBoot.add(this).as('globalObject');
jsBoot.pack('jsBoot.core', function(api) {
  /*globals printStackTrace:false */
  'use strict';

  // Possibly pb related to X-Domain limitation shit
  this.Error = function(name, message) {
    // Error behavior is strange...
    var b = api.NativeError.apply(this, [message]);
    // Not too sure this leads anywhere safe though (google code fux...)
    if (this === api.globalObject || this === undefined)
      return;
    this.message = b.message;
    this.stack = b.stack;
    this.name = name;
    if (!this.stack)
      this.stack = typeof printStackTrace !== 'undefined' ? printStackTrace() : [];
  };

  Object.getOwnPropertyNames(api.NativeError.prototype).forEach(function(i) {
    if (i !== 'constructor')
      this.Error.prototype[i] = api.NativeError.prototype[i];
  }, this);

  ['NOT_IMPLEMENTED', 'UNSPECIFIED', 'NOT_INITIALIZED', 'WRONG_ARGUMENTS',
   'UNSUPPORTED', 'NATURAL_BORN_CRASH'].forEach(function(item, idx) {
    this.Error[item] = this.Error.prototype[item] = idx;
  }, this);

  this.Error.prototype.toString = function() {
    return this.name + ': ' + this.message + '\nStack: ' +
        (Array.prototype.isPrototypeOf(this.stack) ? this.stack.join('\n') : this.stack);
  };

});

/**
 * @namespace
 * @name jsBoot
 */

/**
 * @namespace
 * @name jsBoot.core
 */

/**
 * @class
 * @name jsBoot.core.Error
 */


/**
 * Just in case you are too lazy to define errors yourself, use this hodge pot here... NOT recommended.
 * @property
 * @static
 * @constant
 * @name jsBoot.core.Error.UNSPECIFIED
 */


/**
 * Use this in a method that explicitely wants to say implementation is missing (in a virtual for eg.)
 * @property
 * @static
 * @constant
 * @name jsBoot.core.Error.NOT_IMPLEMENTED
 */


/**
 * Meant to say that something has not been properly inited before being used
 * @property
 * @static
 * @constant
 * @name jsBoot.core.Error.NOT_INITIALIZED
 */


/**
 * Use this if you do validate arguments, and what's passed doesn't cut it
 * @property
 * @static
 * @constant
 * @name jsBoot.core.Error.WRONG_ARGUMENTS
 */



/**
 * Use this in factories for example, where the arguments ask for something that's not doable.
 * @property
 * @static
 * @constant
 * @name jsBoot.core.Error.UNSUPPORTED
 */



/**
 * Interecepted throw that gets respoofed into the list.
 * @property
 * @static
 * @constant
 * @name jsBoot.core.Error.NATURAL_BORN_CRASH
 */

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */jsBoot.add(1).as('delay');
jsBoot.use('jsBoot.core.Error');
jsBoot.pack('jsBoot.types', function(api) {
  /*jshint browser:true*/
  'use strict';

  // Dispatched when a batch of changes are handled
  var BEFORE_MUTATION = 'changestart';
  // Might be used to notify something changed in the object
  var CHANGE = 'change';
  // Dispatched when a batch of changes ends
  var AFTER_MUTATION  = 'changestop';

  // Static helper function
  var doHandle = function(listeners, target, type, details, mumble, crash) {
    // XXX Right now, result is not handled - provisional for cancelling / holding stuff
    var result = false;
    var eve = {
      type: type,
      target: target,
      details: details
    };
    var defThrow = [];
    var ret = listeners.filter(function(listener) {
      if (crash) {
        result |= listener(eve);
      } else {
        try {
          result |= listener(eve);
        } catch (e) {
          defThrow.push(new api.Error('LISTENER_FAILURE', mumble + ':' + e));
        }
      }
      return !listener.throwable;
    });

    // Throw no matter what - the crash thing is cool to stop the flow at the first error,
    // but production code HAS to report failures
    if (defThrow.length)
      throw defThrow.shift();
    return ret;
  };

  // A simple event emitter, supporting coalesce and asynchronous dispatching
  this.EventDispatcher = function() {
    // Useful while debugging (will CRASH AND STOP dispatching on the first failing listener)
    this.crash = false;

    // Private var to hold listeners for given types
    var listeners = {};
    // Private var to hold timeout references for asynchronous dispatching
    var tout = {};
    // Queue, to hold coalescable events
    var queue = {};

    this.addEventListener = function(type, listener, context, throwable) {
      if (!(type in listeners)) {
        listeners[type] = [];
        queue[type] = [];
      }
      // Bind the listener onto the desired execution context
      var l = listener.bind(context);
      l.throwable = !!throwable;
      l.bound = listener;
      l.context = context;
      listeners[type].push(l);
    };

    // BEWARE keeping references to inactive objects will prevent needed GC... This is no *weak* ref.
    // XXX untested code
    this.removeEventListener = function(type, listener, context) {
      if (!(type in listeners))
        return;

      listeners[type].some(function(l, x) {
        if (listener === l.bound && context === l.context)
          listeners[type].splice(x, 1);
      });

      // for (var x = 0, l; (x < listeners[type].length) && (l = listeners[type][x]); x++)
      //   if ((listener == l.bound) && (context == l.context)) {
      //     listeners[type].splice(x, 1);
      //     return;
      //   }
    };

    var handleQueue = function(type, target) {
      // If that was asynchronous, clear-up the timeout now
      if (type in tout)
        delete tout[type];

      // Change event may dispatch additional before mutation
      if (type === CHANGE && BEFORE_MUTATION in listeners)
        listeners[BEFORE_MUTATION] = doHandle(listeners[BEFORE_MUTATION], target, BEFORE_MUTATION, {},
          'A before mutation event listener failed', this.crash);

      // For each event in the queue to be dispatched
      if (type in listeners)
        queue[type].forEach(function(details) {
          listeners[type] = doHandle(listeners[type], target, type, details, 'An event listener failed', this.crash);
        }, this);
      // Empty queue now
      queue[type].splice(0, queue[type].length);

      // Change event may dispatch additional after mutation
      if (type === CHANGE && AFTER_MUTATION in listeners)
        listeners[AFTER_MUTATION] = doHandle(listeners[AFTER_MUTATION], target, AFTER_MUTATION, {},
          'An after mutation event listener failed', this.crash);
    }.bind(this);

    this.dispatchEvent = function(type, details, synchronous) {
      // Only dispatch if there is something to listen, or if this is a change event and there is a mutation listener
      if (!(type in listeners || type === this.CHANGE && (BEFORE_MUTATION in listeners || AFTER_MUTATION in listeners)))
        return;
      // Cancel any previous running coalesce
      if (type in tout)
        clearTimeout(tout[type]);

      // Queue-up the details for the event to dispatch
      (queue[type] || (queue[type] = [])).push(details);
      // If it's asynchronous, set timeout delay already
      if (!synchronous)
        tout[type] = setTimeout(handleQueue, api.delay, type, this);
      else
        handleQueue(type, this);
    };

    this.destroy = function() {
      Object.keys(tout).forEach(function(type) {
        clearTimeout(tout[type]);
      });
      // for (var type in tout) {
      //   if (tout.hasOwnProperty(type))
      //     clearTimeout(tout[type]);
      // }
      queue = {};
      tout = {};
      listeners = {};
    };
  };

  this.EventDispatcher.prototype.BEFORE_MUTATION  = BEFORE_MUTATION;
  this.EventDispatcher.prototype.CHANGE           = CHANGE;
  this.EventDispatcher.prototype.AFTER_MUTATION   = AFTER_MUTATION;

});

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */jsBoot.use('jsBoot.types.EventDispatcher').as('dispatcher');

// An object that when mutating (eg: via a call to the change method) will dispatch a change event
jsBoot.pack('jsBoot.types', function(api) {
  /*global Ember*/
  'use strict';

  this.Mutable = function() {
    api.dispatcher.apply(this);
  };

  this.Mutable.prototype = Object.create(api.dispatcher.prototype);

  // This "smart" detects ember and makes it an Ember Object as well
  this.Mutable.prototype.set = function(key, value) {
    var ov = typeof Ember != 'undefined' ? Ember.get(this, key) : this[key];
    // Bail out if nothing changed
    if (value === ov)
      return;
    // Dispatch if it did change
    this.dispatchEvent(this.CHANGE, {key: key, oldValue: ov, newValue: value});
    // Set, with ember detection
    if (typeof Ember != 'undefined') {
      return Ember.set(this, key, value);
    }
    return this[key] = value;
  };


  // Should not be constructed before the store is ready
  /*
  this.StoreMutable = function(storeObject){
    this.Mutable.apply(this);

    Object.keys(storeObject).forEach(function(key){
      // XXX miss typage instanciation
      this[key] = storeObject[key];
    }, this);

    // Should save on user-idle, or on logout / shutdown
    this.addEventListener(this.AFTER_MUTATION, function(){
      // Reset / repopulate store object
      Object.keys(storeObject).forEach(function(key){
        // XXX miss typage serialization
        if(key in this)
          storeObject[key] = this[key];
        else
          delete storeObject[key];
      });
    }, this);
  };

  StoreMutable.prototype = Object.create(Mutable.prototype);
  */

});



/*
  var des = function(valuesHolder){
  };
  return {
    toto: {
      enumerable: true,
      configurable: false,
      writable: true,
      value: 'whatever'
    },
    titi: {
      enumerable: true,
      configurable: false,
      value: 'toto',
      parse: function(value){
        return 'parse: ' + value;
      },
      serialize: function(value){
        return 'serialize: ' + value;
      }
    }
  };

  var TypedMutable = function(descriptor){
    var proxy = Object.create({}, descriptor);
    Object.keys(descriptor).forEach(function(key){
      Object.defineProperty(this, key, {
        enumerable: descriptor[key].enumerable,
        configurable: true,
        get: function(){
          if(descriptor[key].parse){
            return descriptor[key].parse(proxy[key]);
          return proxy[key];
        },
        set: descriptor[key].writable ? function(value){
          if(descriptor[key].serialize){
            proxy[key] = descriptor[key].serialize(value);
            return;
          }
          switch(typeof descriptor[key].value){
            case 'number':
              proxy[key] = parseInt(value, 10);
              break;
            case 'boolean':
              proxy[key] = !!value;
              break;
            case 'string':
              proxy[key] = '' + value;
              break;
            case 'object':
            // XXX code injection risk?
              proxy[key] = value; // Object.create({}, value);
              break;
            case 'function':
              // Custom filtering method
          }
        } : undefined
      });
    }, this);
  };

  var a1 = new TypedMutable(des);
  var a2 = new TypedMutable(des);
  // throw "toto"
*/

/*
jsBoot.use('jsBoot.types.Mutable');
jsBoot.pack('jsBoot.types', function(api) {
  'use strict';

  this.TypedMutable = function(descriptor, initialMesh) {
    api.Mutable.apply(this);

    this.isTyped = true;

    var privatePool = {};
    var lastMesh = {};

    Object.keys(descriptor).forEach(function(i) {
      var item = descriptor[i];
      switch (typeof item) {
        case 'number':
          this[i] = parseInt(item, 10);
          break;
        case 'boolean':
          this[i] = (item == 'true');
          break;
        case 'string':
          this[i] = '' + item;
          break;
        case 'object':
          // May be null, an array, or an object-object
          this[i] = item;
          break;
        case 'function':
          Object.defineProperty(this, i, {
            enumerable: true,
            configurable: true,
            get: function() {
              // XXX super dirty and dangerous - cause of the bind
              // Verify this in IE and other non-bindable browsers
              if (item.isDirty || item.constructor != Function)
                return item(lastMesh[i]);
              else {
                if (typeof privatePool[i] == 'undefined') {
                  privatePool[i] = new item(lastMesh[i] || null);
                }
                return privatePool[i];
              }
            },
            set: function(value) {
              privatePool[i] = value;
              // XXX dirty trix to let polymorph descriptors do whatever job need be be done
              if (item.isDirty)
                privatePool[i] = item(value);
            }
          });
          break;
      }
    }, this);

    this.free = function() {
      privatePool = {};
    };

    this.toObject = function() {
      var ret = {};
      Object.keys(descriptor).forEach(function(i) {
        ret[i] = (!!this[i] && (typeof this[i] == 'object') && ('toObject' in this[i])) ? this[i].toObject() : this[i];
      }, this);
      return ret;
    };

    this.fromObject = function(networkMesh) {
      if (typeof networkMesh != 'object')
        networkMesh = {id: networkMesh};
      Object.keys(networkMesh).forEach(function(i) {
        if (!(i in descriptor))
          return;
        var item = networkMesh[i];
        switch (typeof descriptor[i]) {
          case 'number':
            this.set(i, parseInt(item, 10));
            break;
          case 'boolean':
            this.set(i, (item == 'true'));
            break;
          case 'string':
            this.set(i, '' + item);
            break;
          case 'object':
            // May be null, an array, or an object-object
            this.set(i, item);
            break;
          case 'function':
            if (typeof privatePool[i] != 'undefined') {
              if (descriptor[i].constructor == Function) {
                if (!!privatePool[i]) {
                  privatePool[i].fromObject(networkMesh[i]);
                }else {
                  lastMesh[i] = networkMesh[i];
                }
              }else
                this.set(i, descriptor[i](networkMesh[i]));
            }else
              // Merge and override lastMesh otherwise, to be used for later construction
              lastMesh[i] = networkMesh[i];


            // if(typeof privatePool[i] != 'undefined')
            //   if('fromObject' in privatePool[i])
            //     privatePool[i].fromObject(networkMesh[i]);
            //   else
            //     this.set(i, descriptor[i](networkMesh[i]));
            // else
            //   // Merge and override lastMesh otherwise, to be used for later construction
            //   lastMesh[i] = networkMesh[i];
            break;
          default:
            this.set(i, item);
            throw new Error('UNTYPED_MESH', 'Mesh is not typed properly ' + i + ' ' + descriptor[i] + ' ' + item);
        }
      }, this);
    };

    if (initialMesh)
      this.fromObject(initialMesh);
  };

});

*/

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */jsBoot.use('jsBoot.types.Mutable').as('mutable');

// An object that when mutating (eg: via a call to the change method) will dispatch a change event
jsBoot.pack('jsBoot.types', function(api) {
  'use strict';

  // Private helper that attaches a property to an object with the passed data
  var binder = function(obj, key, type, defaultValue){
    var privateData;
    return Object.defineProperty(obj, key, {
      configurable: false,
      enumerable: true,
//      value: type.js,
//      writable: true,
      get: function(){
        if (typeof privateData === 'undefined' && typeof defaultValue !== 'undefined')
          return defaultValue;
        return privateData;
      },
      set: function(value){
        privateData = type.ingest(value);
      }
    });
  };

  // Factory that registers ingesters associated with data types
  // Also provide a helper to declare said properties on new objects
  var attr = this.attr = (function(){
    var attrs = {};

    var factory = function(type, options) {
      if (!(type in attrs))
        throw new Error('NO_SUCH_TYPE', 'No known type like ' + type);
      type = attrs[type];
      return function(obj, key){
        return binder(obj, key, type, options ? options.defaultValue : undefined);
      };
    };

    factory.register = function(type, jsType, customIngester) {
      attrs[type] = {
        js: jsType,
        ingest: customIngester || function(value){
          return jsType(value);
        }
      };
    };
    return factory;
  })();

  // Register a bunch of pre-existing types
  attr.register('boolean', Boolean);
  attr.register('identifier', String);
  attr.register('string', String);
  attr.register('json', Object);
  attr.register('date', Date, function(date){
    return new Date(date);
  });
  attr.register('integer', Number, function(value){
    return parseInt(value, 10);
  });
  attr.register('float', Number, function(value){
    return parseFloat(value);
  });
  attr.register('geocoordinates', Object, function(value){
    return value;
  });

  // The other public type here is a magic object that parses attributes at creation
  this.Object = function(attributes) {
    // Dynamically return a new type that inherits mutable and has a bunch of attr built at instanciation time
    var inner = function(){
      api.mutable.apply(this);
      Object.getOwnPropertyNames(attributes).forEach(function(key){
        attributes[key](this, key);
      }.bind(this));
    };
    inner.prototype = Object.create(api.mutable.prototype);
    return inner;
  };

});

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */jsBoot.add(500).as('idleTime');
jsBoot.add(5000).as('staleTime');
jsBoot.use('jsBoot.types.Mutable');
jsBoot.pack('jsBoot.services', function(api) {
  // TODO refine focus events by checking if mouse is in or out
  /*globals window:false, document:false*/
  'use strict';

  var ACTIVE = 'ACTIVE';
  var QUIET = 'QUIET';
  var DISTRACTED = 'DISTRACTED';
  var AWAY = 'AWAY';

  var UserActivity = function(time, staleTime) {
    // We are a mutable
    api.Mutable.apply(this);

    var interval;
    var lastActive = Date.now();

    var paused = false;
    var isIn = false;

    var status = AWAY;
    var staled = false;

    Object.defineProperty(this, 'status', {
      enumerable: true,
      get: function() {
        return status;
      },
      set: function(value) {
        status = value;
        this.set('staled', !(value || !this.get('staled')));
      }
    });

    Object.defineProperty(this, 'staled', {
      enumerable: true,
      get: function() {
        return staled;
      },
      set: function(value) {
        staled = value;
      }
    });


    var checkState = function() {
      if (paused)
        return;
      // Blurred, or still in the active window? exit
      if (Date.now() - lastActive < api.idleTime)
        return;
      // Nope, then we are (becoming) idle (if not blurred)
      if (status !== AWAY)
        this.set('status', isIn ? QUIET : DISTRACTED);
      // Still not staled? exit
      if (Date.now() - lastActive < api.staleTime)
        return;
      // Nope, then we are (becoming) stale
      this.set('staled', true);
    }.bind(this);

    var isActive = function(/*e*/) {
      // console.debug('jsBoot:services:userActivity: activity');
      // Are we blured? Then don't account for activity
      if (paused || status === AWAY)
        return;
      lastActive = Date.now();
      isIn = true;
      this.set('status', ACTIVE);
      // this.set('staled', false);
    }.bind(this);

    var isKeyActive = function(/*e*/) {
      // console.debug('jsBoot:services:userActivity: keyboard activity');
      // XXX Can't be blured and keyboard active...
      if (paused || status === AWAY)
        return;
      lastActive = Date.now();
      this.set('status', ACTIVE);
      // this.set('staled', false);
    }.bind(this);

    var isBlur = function() {
      // console.debug('jsBoot:services:userActivity: has blurred');
      this.set('status', AWAY);
    }.bind(this);

    var isFocus = function() {
      // console.debug('jsBoot:services:userActivity: has focused');
      lastActive = Date.now();
      this.set('status',  isIn ? QUIET : DISTRACTED);
      // this.set('staled', false);
    }.bind(this);

    var outViewport = function(e){
      if (e.target !== document)
        return;
      // console.debug('jsBoot:services:userActivity: out');
      isIn = false;
    };

    var inViewport = function(/*e*/){
      // console.debug('jsBoot:services:userActivity: in');
      /*if (e.target !== document)
        return;*/
      isIn = true;
    };

    var init = function() {
      // console.debug('jsBoot:services:userActivity:init');
      // Allow override of the default time
      if (time)
        api.idleTime = time * 1000;
      if (staleTime)
        api.staleTime = staleTime * 1000;
      // Idling support
      window.addEventListener('blur', isBlur, true);
      window.addEventListener('focus', isFocus, true);
      document.addEventListener('mousemove', isActive, true);
      document.addEventListener('click', isActive, true);
      document.addEventListener('dblclick', isActive, true);
      window.addEventListener('keypress', isKeyActive, true);
      document.addEventListener('mouseenter', inViewport, false);
      document.addEventListener('mouseleave', outViewport, false);

      interval = setInterval(checkState, api.idleTime / 2);
    };

    init();

    this.toggle = function(){
      // Will pause / resume activity tracking
      // Note we always track blur / focus events
      paused = !paused;
    };

    this.destroy = function() {
      // console.debug('jsBoot:services:userActivity:destroy');
      // Kill all refs to listeners
      api.Mutable.prototype.destroy.apply(this);
      // Clean the interval
      clearInterval(interval);
      // Stop all the listening support
      window.removeEventListener('blur', isBlur, true);
      window.removeEventListener('focus', isFocus, true);
      document.removeEventListener('mousemove', isActive, true);
      document.removeEventListener('click', isActive, true);
      document.removeEventListener('dblclick', isActive, true);
      window.removeEventListener('keypress', isActive, true);
      document.removeEventListener('mouseenter', inViewport, false);
      document.removeEventListener('mouseleave', outViewport, false);
    };
  };

  UserActivity.prototype = Object.create(api.Mutable.prototype, {
    HYPER: {value: ACTIVE, writable: false, enumerable: true},
    QUIET: {value: QUIET, writable: false, enumerable: true},
    DISTRACTED: {value: DISTRACTED, writable: false, enumerable: true},
    AWAY: {value: AWAY, writable: false, enumerable: true}
  });

  this.UserActivity = UserActivity;
});

/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */// Lifetime of a (stale) lock, before acquiring
jsBoot.add(1000).as('lifeLength');

jsBoot.add(this.localStorage).as('localStorage');
jsBoot.add(this.sessionStorage).as('sessionStorage');

jsBoot.use('jsBoot.types.Mutable');
jsBoot.use('jsBoot.core.Error');

jsBoot.pack('jsBoot.services', function(api) {
  'use strict';

  var seed = '_jsbootsingleapp_';

  // Trivial low level helpers
  var getId = function(name) {
    var id;
    // No session storage means we won't persist over reloads
    if (api.sessionStorage)
      id = api.sessionStorage.getItem(seed + name + '_instanceId');
    if (!id) {
      id = Date.now() + '-' + Math.random(1000);
      if (api.sessionStorage)
        api.sessionStorage.setItem(seed + name + '_instanceId', id);
    }
    return id;
  };

  var read = function(name) {
    return (api.localStorage.getItem(seed + name + '_lockname') || '').split('_');
  };

  var write = function(name, d) {
    api.localStorage.setItem(seed + name + '_lockname', d.join('_'));
  };

  var kill = function(name) {
    api.localStorage.removeItem(seed + name + '_lockname');
  };

  var INIT = 'initializing';
  var ACQUIRED = 'acquired';
  var FAILED = 'waiting';

  var SingleApp = function(appKey, length) {
    api.Mutable.apply(this);

    // Start in initialization
    var status = INIT;

    var interval;
    var instanceId;

    Object.defineProperty(this, 'status', {
      enumerable: true,
      get: function() {
        return status;
      },
      set: function(value) {
        // console.debug('jsBoot:services:singleApp: changing status to', value);
        status = value;
      }
    });

    var ticker = function() {
      // Decide whether to acquire lock or not
      var currentOwner = read(appKey);
      // The lock is already there. Is it ours? Is it still valid?
      if (currentOwner.pop() !== instanceId && Date.now() - currentOwner.shift() < api.lifeLength) {
        if (status !== FAILED) {
          this.set('status',  FAILED);
          throw new api.Error('ALREADY_LOCKED',
            'Another instance of the app is already running.', true);
        }
        return;
      }

      // Otherwise, confirm / acquire lock
      this.set('status',  ACQUIRED);

      // And write our timestamp to the store
      // We do this after in order to resist porn mode conditions making the setItem call fail
      write(appKey, [Date.now(), instanceId]);
    }.bind(this);

    var init = function() {
      // console.debug('jsBoot:services:singleApp:init');
      if (length)
        api.lifeLength = length * 1000;
      instanceId = getId(appKey);
      // Do good measure: cleanup shit if we owned this before
      if (read(appKey).pop() === instanceId)
        kill(appKey);
      // Bind the ticker
      interval = setInterval(ticker, api.lifeLength / 2);
    };

    init();

    this.destroy = function() {
      // console.debug('jsBoot:services:singleApp:destroy');
      // Kill all refs to listeners
      api.Mutable.prototype.destroy.apply(this);
      // Clean it up
      if (read(appKey).pop() === instanceId)
        kill(appKey);
      // Clear timeout
      clearInterval(interval);
    };
  };

  SingleApp.prototype = Object.create(api.Mutable.prototype, {
    INIT: {value: INIT, writable: false, enumerable: true},
    ACQUIRED: {value: ACQUIRED, writable: false, enumerable: true},
    FAILED: {value: FAILED, writable: false, enumerable: true}
  });

  this.SingleApp = SingleApp;

});


/*
 * -------------------------------------------------------
 * Project:  jsboot
 * Version:  0.5.0
 * Homepage: http://www.webitup.fr/lab
 *
 * Author:   Mangled Deutz
 * Contact:  olivier@webitup.fr
 * Homepage: https://github.com/dmp42
 *
 * Copyright (c) Mangled Deutz
under AGPL all rights reserved.
 * -------------------------------------------------------
 */jsBoot.add(500).as('idleTime');
jsBoot.use('jsBoot.types.Mutable');
jsBoot.pack('jsBoot.services', function(api) {
  /*globals FB:false, window:false, document:false*/
  'use strict';

  var fbScriptInsert = false;
  var fbScriptReady = false;

  var CONNECTED = 'CONNECTED';
  var APP_DISCONNECT = 'APP_DISCONNECT';
  var FB_DISCONNECT = 'FB_DISCONNECT';

  var Facebook = function(appID){
    // We are a mutable
    api.Mutable.apply(this);

    var status;
    var userID;
    var scopes = [];

    Object.defineProperty(this, 'status', {
      enumerable: true,
      get: function() {
        return status;
      },
      set: function(value) {
        status = value;
      }
    });

    Object.defineProperty(this, 'userID', {
      enumerable: true,
      get: function() {
        return userID;
      },
      set: function(value) {
        userID = value;
      }
    });

    Object.defineProperty(this, 'scopes', {
      enumerable: true,
      get: function() {
        return scopes;
      },
      set: function(value) {
        scopes = value;
      }
    });

    var reset = function(){
      this.set('scopes', []);
      this.set('userID', undefined);
    }.bind(this);

    var callthem = [];

    // XXX deal with no network condition on the mobile app
    var insert = function(callback){
      // Ready? Move along
      if (fbScriptReady)
        return callback();
      // Otherwise, remember to call them back
      if (callback)
        callthem.push(callback);
      // Already inserted (but not ready), stop here
      if (fbScriptInsert)
        return;
      // Otherwise, yeah, loads the SDK asynchronously
      (function(d, s, id) {
        fbScriptInsert = true;
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = '//connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    };

    // Call this back when done
    window.fbAsyncInit = function() {
      // It's done, we are ready.
      fbScriptReady = true;
      // Init the thing.
      FB.init({
        appId      : appID,
        cookie     : false,  // enable cookies to allow the server to access
        // the session
        status     : false,
        frictionlessRequests: false,
        hideFlashCallback: null,
        xfbml      : false,  // parse social plugins on this page
        version    : 'v2.6' // use graph api version 2.6
      });

      // Callback everybody waiting for it
      callthem.forEach(function(callback){
        callback();
      });
    };

    var responseHandler = function(response) {
      if (response.status === 'connected') {
        // Logged into your app and Facebook.
        this.set('status', CONNECTED);
        this.set('userID', response.authResponse.userID);
        if ('grantedScopes' in response.authResponse)
          this.set('scopes', response.authResponse.grantedScopes.split(',').sort());
      } else if (response.status === 'not_authorized') {
        // The person is logged into Facebook, but not your app.
        this.set('status', APP_DISCONNECT);
        reset();
      } else {
        // The person is not logged into Facebook, so we're not sure if
        // they are logged into this app or not.
        this.set('status', FB_DISCONNECT);
        reset();
      }
    }.bind(this);

    this.getLoginStatus = function(callback, force){
      insert(function(){
        FB.getLoginStatus(function(response){
          responseHandler(response);
          if (callback)
            callback();
        }, force);
      });
    };

    this.login = function(permissions){
      insert(function(){
        FB.login(responseHandler, {
          /*eslint camelcase: 0*/
          scope: permissions,
          return_scopes: true
        });
      });
    };

    this.api = function(callback, endpoint, method, params){
      insert(function() {
        FB.api(endpoint, method, params, callback);
      });
    };

    this.logout = function(){
      insert(function(){
        FB.logout(reset);
      });
    };

    // XXX synchronous, assumes we are inserted already
    this.getAuthResponse = function(){
      var response = FB.getAuthResponse();
      if (!response){
        reset();
        return;
      }
      if (response.grantedScopes)
        this.set('scopes', response.grantedScopes.split(',').sort());
      this.set('userID', response.userID);
    };
  };

  Facebook.prototype = Object.create(api.Mutable.prototype, {
    CONNECTED: {value: CONNECTED, writable: false, enumerable: true},
    APP_DISCONNECT: {value: APP_DISCONNECT, writable: false, enumerable: true},
    FB_DISCONNECT: {value: FB_DISCONNECT, writable: false, enumerable: true}
  });

  this.Facebook = Facebook;

});

//# sourceMappingURL=../maps/core.js.map
