var mI=Object.defineProperty;var gI=(i,e,t)=>e in i?mI(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var up=(i,e,t)=>(gI(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ys(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function xM(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vl={duration:.5,overwrite:!1,delay:0},qg,si,cn,_r=1e8,en=1/_r,qm=Math.PI*2,_I=qm/4,vI=0,yM=Math.sqrt,xI=Math.cos,yI=Math.sin,kn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},Cs=function(e){return typeof e=="number"},Yg=function(e){return typeof e>"u"},ns=function(e){return typeof e=="object"},Ri=function(e){return e!==!1},jg=function(){return typeof window<"u"},ju=function(e){return _n(e)||kn(e)},SM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},oi=Array.isArray,Ym=/(?:-?\.?\d|\.)+/gi,EM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,tl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,fp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,MM=/[+-]=-?[.\d]+/,TM=/[^,'"\[\]\s]+/gi,SI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,hn,Wr,jm,Kg,Ji={},dh={},bM,wM=function(e){return(dh=ia(e,Ji))&&Oi},Zg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bc=function(e,t){return!t&&console.warn(e)},AM=function(e,t){return e&&(Ji[e]=t)&&dh&&(dh[e]=t)||Ji},zc=function(){return 0},EI={suppressEvents:!0,isStart:!0,kill:!1},jf={suppressEvents:!0,kill:!1},MI={suppressEvents:!0},Jg={},ro=[],Km={},CM,Xi={},hp={},xx=30,Kf=[],Qg="",e_=function(e){var t=e[0],n,r;if(ns(t)||_n(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Kf.length;r--&&!Kf[r].targetTest(t););n=Kf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new JM(e[r],n)))||e.splice(r,1);return e},$o=function(e){return e._gsap||e_(vr(e))[0]._gsap},RM=function(e,t,n){return(n=e[t])&&_n(n)?e[t]():Yg(n)&&e.getAttribute&&e.getAttribute(t)||n},Pi=function(e,t){return(e=e.split(",")).forEach(t)||e},En=function(e){return Math.round(e*1e5)/1e5||0},Gn=function(e){return Math.round(e*1e7)/1e7||0},ll=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},TI=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ph=function(){var e=ro.length,t=ro.slice(0),n,r;for(Km={},ro.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},PM=function(e,t,n,r){ro.length&&!si&&ph(),e.render(t,n,r||si&&t<0&&(e._initted||e._startAt)),ro.length&&!si&&ph()},LM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(TM).length<2?t:kn(e)?e.trim():e},DM=function(e){return e},yr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},bI=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ia=function(e,t){for(var n in t)e[n]=t[n];return e},yx=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ns(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},mh=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},wc=function(e){var t=e.parent||hn,n=e.keyframes?bI(oi(e.keyframes)):yr;if(Ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},wI=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},IM=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],l;if(s)for(l=t[s];a&&a[s]>l;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Fh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},fo=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},AI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Zm=function(e,t,n,r){return e._startAt&&(si?e._startAt.revert(jf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},CI=function i(e){return!e||e._ts&&i(e.parent)},Sx=function(e){return e._repeat?xl(e._tTime,e=e.duration()+e._rDelay)*e:0},xl=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},gh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Bh=function(e){return e._end=Gn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},zh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Bh(e),n._dirty||Xo(n,e)),e},OM=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=gh(e.rawTime(),t),(!t._dur||Kc(0,t.totalDuration(),n)-t._tTime>en)&&t.render(n,!0)),Xo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-en}},qr=function(e,t,n,r){return t.parent&&fo(t),t._start=Gn((Cs(n)?n:n||e!==hn?fr(e,n,t):e._time)+t._delay),t._end=Gn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),IM(e,t,"_first","_last",e._sort?"_start":0),Jm(t)||(e._recent=t),r||OM(e,t),e._ts<0&&zh(e,e._tTime),e},UM=function(e,t){return(Ji.ScrollTrigger||Zg("scrollTrigger",t))&&Ji.ScrollTrigger.create(t,e)},NM=function(e,t,n,r,s){if(n_(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!si&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&CM!==qi.frame)return ro.push(e),e._lazy=[s,r],1},RI=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Jm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},PI=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&RI(e)&&!(!e._initted&&Jm(e))||(e._ts<0||e._dp._ts<0)&&!Jm(e))?0:1,l=e._rDelay,u=0,f,h,p;if(l&&e._repeat&&(u=Kc(0,e._tDur,t),h=xl(u,l),e._yoyo&&h&1&&(a=1-a),h!==xl(e._tTime,l)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||si||r||e._zTime===en||!t&&e._zTime){if(!e._initted&&NM(e,t,r,n,u))return;for(p=e._zTime,e._zTime=t||(n?en:0),n||(n=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,f=e._pt;f;)f.r(a,f.d),f=f._next;t<0&&Zm(e,t,n,!0),e._onUpdate&&!n&&ji(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&ji(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&fo(e,1),!n&&!si&&(ji(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},LI=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},yl=function(e,t,n,r){var s=e._repeat,a=Gn(t)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gn(a*(s+1)+e._rDelay*s):a,l>0&&!r&&zh(e,e._tTime=e._tDur*l),e.parent&&Bh(e),n||Xo(e.parent,e),e},Ex=function(e){return e instanceof vi?Xo(e):yl(e,e._dur)},DI={_start:0,endTime:zc,totalDuration:zc},fr=function i(e,t,n){var r=e.labels,s=e._recent||DI,a=e.duration()>=_r?s.endTime(!1):e._dur,l,u,f;return kn(t)&&(isNaN(t)||t in r)?(u=t.charAt(0),f=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(l<0?s:n).totalDuration()/100:1)):l<0?(t in r||(r[t]=a),r[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),f&&n&&(u=u/100*(oi(n)?n[0]:n).totalDuration()),l>1?i(e,t.substr(0,l-1),n)+u:a+u)):t==null?a:+t},Ac=function(e,t,n){var r=Cs(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],l,u;if(r&&(a.duration=t[1]),a.parent=n,e){for(l=a,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=Ri(u.vars.inherit)&&u.parent;a.immediateRender=Ri(l.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new wn(t[0],a,t[s+1])},go=function(e,t){return e||e===0?t(e):t},Kc=function(e,t,n){return n<e?e:n>t?t:n},ri=function(e,t){return!kn(e)||!(t=SI.exec(e))?"":t[1]},II=function(e,t,n){return go(n,function(r){return Kc(e,t,r)})},Qm=[].slice,FM=function(e,t){return e&&ns(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ns(e[0]))&&!e.nodeType&&e!==Wr},OI=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return kn(r)&&!t||FM(r,1)?(s=n).push.apply(s,vr(r)):n.push(r)})||n},vr=function(e,t,n){return cn&&!t&&cn.selector?cn.selector(e):kn(e)&&!n&&(jm||!Sl())?Qm.call((t||Kg).querySelectorAll(e),0):oi(e)?OI(e,n):FM(e)?Qm.call(e,0):e?[e]:[]},eg=function(e){return e=vr(e)[0]||Bc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vr(t,n.querySelectorAll?n:n===e?Bc("Invalid scope")||Kg.createElement("div"):e)}},BM=function(e){return e.sort(function(){return .5-Math.random()})},zM=function(e){if(_n(e))return e;var t=ns(e)?e:{each:e},n=qo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},l=r>0&&r<1,u=isNaN(r)||l,f=t.axis,h=r,p=r;return kn(r)?h=p={center:.5,edges:.5,end:1}[r]||0:!l&&u&&(h=r[0],p=r[1]),function(m,g,y){var x=(y||t).length,_=a[x],v,w,b,E,C,R,A,z,k;if(!_){if(k=t.grid==="auto"?0:(t.grid||[1,_r])[1],!k){for(A=-_r;A<(A=y[k++].getBoundingClientRect().left)&&k<x;);k<x&&k--}for(_=a[x]=[],v=u?Math.min(k,x)*h-.5:r%k,w=k===_r?0:u?x*p/k-.5:r/k|0,A=0,z=_r,R=0;R<x;R++)b=R%k-v,E=w-(R/k|0),_[R]=C=f?Math.abs(f==="y"?E:b):yM(b*b+E*E),C>A&&(A=C),C<z&&(z=C);r==="random"&&BM(_),_.max=A-z,_.min=z,_.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(k>x?x-1:f?f==="y"?x/k:k:Math.max(k,x/k))||0)*(r==="edges"?-1:1),_.b=x<0?s-x:s,_.u=ri(t.amount||t.each)||0,n=n&&x<0?jM(n):n}return x=(_[m]-_.min)/_.max||0,Gn(_.b+(n?n(x):x)*_.v)+_.u}},tg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Gn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Cs(n)?0:ri(n))}},GM=function(e,t){var n=oi(e),r,s;return!n&&ns(e)&&(r=n=e.radius||_r,e.values?(e=vr(e.values),(s=!Cs(e[0]))&&(r*=r)):e=tg(e.increment)),go(t,n?_n(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var l=parseFloat(s?a.x:a),u=parseFloat(s?a.y:0),f=_r,h=0,p=e.length,m,g;p--;)s?(m=e[p].x-l,g=e[p].y-u,m=m*m+g*g):m=Math.abs(e[p]-l),m<f&&(f=m,h=p);return h=!r||f<=r?e[h]:a,s||h===a||Cs(a)?h:h+ri(a)}:tg(e))},HM=function(e,t,n,r){return go(oi(e)?!t:n===!0?!!(n=0):!r,function(){return oi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},UI=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},NI=function(e,t){return function(n){return e(parseFloat(n))+(t||ri(n))}},FI=function(e,t,n){return WM(e,t,0,1,n)},kM=function(e,t,n){return go(n,function(r){return e[~~t(r)]})},BI=function i(e,t,n){var r=t-e;return oi(e)?kM(e,i(0,e.length),t):go(n,function(s){return(r+(s-e)%r)%r+e})},zI=function i(e,t,n){var r=t-e,s=r*2;return oi(e)?kM(e,i(0,e.length-1),t):go(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},Gc=function(e){for(var t=0,n="",r,s,a,l;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),l=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(l?TM:Ym),n+=e.substr(t,r-t)+HM(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},WM=function(e,t,n,r,s){var a=t-e,l=r-n;return go(s,function(u){return n+((u-e)/a*l||0)})},GI=function i(e,t,n,r){var s=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!s){var a=kn(e),l={},u,f,h,p,m;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(oi(e)&&!oi(t)){for(h=[],p=e.length,m=p-2,f=1;f<p;f++)h.push(i(e[f-1],e[f]));p--,s=function(y){y*=p;var x=Math.min(m,~~y);return h[x](y-x)},n=t}else r||(e=ia(oi(e)?[]:{},e));if(!h){for(u in t)t_.call(l,e,u,"get",t[u]);s=function(y){return s_(y,l)||(a?e.p:e)}}}return go(n,s)},Mx=function(e,t,n){var r=e.labels,s=_r,a,l,u;for(a in r)l=r[a]-t,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=a,s=l);return u},ji=function(e,t,n){var r=e.vars,s=r[t],a=cn,l=e._ctx,u,f,h;if(s)return u=r[t+"Params"],f=r.callbackScope||e,n&&ro.length&&ph(),l&&(cn=l),h=u?s.apply(f,u):s.call(f),cn=a,h},xc=function(e){return fo(e),e.scrollTrigger&&e.scrollTrigger.kill(!!si),e.progress()<1&&ji(e,"onInterrupt"),e},nl,VM=[],$M=function(e){if(e)if(e=!e.name&&e.default||e,jg()||e.headless){var t=e.name,n=_n(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:zc,render:s_,add:t_,kill:n2,modifier:t2,rawVars:0},a={targetTest:0,get:0,getSetter:r_,aliases:{},register:0};if(Sl(),e!==r){if(Xi[t])return;yr(r,yr(mh(e,s),a)),ia(r.prototype,ia(s,mh(e,a))),Xi[r.prop=t]=r,e.targetTest&&(Kf.push(r),Jg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}AM(t,r),e.register&&e.register(Oi,r,Li)}else VM.push(e)},Jt=255,yc={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},dp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Jt+.5|0},XM=function(e,t,n){var r=e?Cs(e)?[e>>16,e>>8&Jt,e&Jt]:0:yc.black,s,a,l,u,f,h,p,m,g,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yc[e])r=yc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),l=e.charAt(3),e="#"+s+s+a+a+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(Ym),!t)u=+r[0]%360/360,f=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(f+1):h+f-h*f,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=dp(u+1/3,s,a),r[1]=dp(u,s,a),r[2]=dp(u-1/3,s,a);else if(~e.indexOf("="))return r=e.match(EM),n&&r.length<4&&(r[3]=1),r}else r=e.match(Ym)||yc.transparent;r=r.map(Number)}return t&&!y&&(s=r[0]/Jt,a=r[1]/Jt,l=r[2]/Jt,p=Math.max(s,a,l),m=Math.min(s,a,l),h=(p+m)/2,p===m?u=f=0:(g=p-m,f=h>.5?g/(2-p-m):g/(p+m),u=p===s?(a-l)/g+(a<l?6:0):p===a?(l-s)/g+2:(s-a)/g+4,u*=60),r[0]=~~(u+.5),r[1]=~~(f*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},qM=function(e){var t=[],n=[],r=-1;return e.split(so).forEach(function(s){var a=s.match(tl)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Tx=function(e,t,n){var r="",s=(e+r).match(so),a=t?"hsla(":"rgba(",l=0,u,f,h,p;if(!s)return e;if(s=s.map(function(m){return(m=XM(m,t,1))&&a+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(h=qM(e),u=n.c,u.join(r)!==h.c.join(r)))for(f=e.replace(so,"1").split(tl),p=f.length-1;l<p;l++)r+=f[l]+(~u.indexOf(l)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!f)for(f=e.split(so),p=f.length-1;l<p;l++)r+=f[l]+s[l];return r+f[p]},so=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yc)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),HI=/hsl[a]?\(/,YM=function(e){var t=e.join(" "),n;if(so.lastIndex=0,so.test(t))return n=HI.test(t),e[1]=Tx(e[1],n),e[0]=Tx(e[0],n,qM(e[1])),!0},Hc,qi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,l=[],u,f,h,p,m,g,y=function x(_){var v=i()-r,w=_===!0,b,E,C,R;if((v>e||v<0)&&(n+=v-t),r+=v,C=r-n,b=C-a,(b>0||w)&&(R=++p.frame,m=C-p.time*1e3,p.time=C=C/1e3,a+=b+(b>=s?4:s-b),E=1),w||(u=f(x)),E)for(g=0;g<l.length;g++)l[g](C,m,R,_)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return m/(1e3/(_||60))},wake:function(){bM&&(!jm&&jg()&&(Wr=jm=window,Kg=Wr.document||{},Ji.gsap=Oi,(Wr.gsapVersions||(Wr.gsapVersions=[])).push(Oi.version),wM(dh||Wr.GreenSockGlobals||!Wr.gsap&&Wr||{}),VM.forEach($M)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&p.sleep(),f=h||function(_){return setTimeout(_,a-p.time*1e3+1|0)},Hc=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(u),Hc=0,f=zc},lagSmoothing:function(_,v){e=_||1/0,t=Math.min(v||33,e)},fps:function(_){s=1e3/(_||240),a=p.time*1e3+s},add:function(_,v,w){var b=v?function(E,C,R,A){_(E,C,R,A),p.remove(b)}:_;return p.remove(_),l[w?"unshift":"push"](b),Sl(),b},remove:function(_,v){~(v=l.indexOf(_))&&l.splice(v,1)&&g>=v&&g--},_listeners:l},p}(),Sl=function(){return!Hc&&qi.wake()},Nt={},kI=/^[\d.\-M][\d.\-,\s]/,WI=/["']/g,VI=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,l,u,f;s<a;s++)u=n[s],l=s!==a-1?u.lastIndexOf(","):u.length,f=u.substr(0,l),t[r]=isNaN(f)?f.replace(WI,"").trim():+f,r=u.substr(l+1).trim();return t},$I=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},XI=function(e){var t=(e+"").split("("),n=Nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[VI(t[1])]:$I(e).split(",").map(LM)):Nt._CE&&kI.test(e)?Nt._CE("",e):n},jM=function(e){return function(t){return 1-e(1-t)}},KM=function i(e,t){for(var n=e._first,r;n;)n instanceof vi?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},qo=function(e,t){return e&&(_n(e)?e:Nt[e]||XI(e))||t},fa=function(e,t,n,r){n===void 0&&(n=function(u){return 1-t(1-u)}),r===void 0&&(r=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Pi(e,function(l){Nt[l]=Ji[l]=s,Nt[a=l.toLowerCase()]=n;for(var u in s)Nt[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Nt[l+"."+u]=s[u]}),s},ZM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},pp=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/qm*(Math.asin(1/r)||0),l=function(h){return h===1?1:r*Math.pow(2,-10*h)*yI((h-a)*s)+1},u=e==="out"?l:e==="in"?function(f){return 1-l(1-f)}:ZM(l);return s=qm/s,u.config=function(f,h){return i(e,f,h)},u},mp=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ZM(n);return r.config=function(s){return i(e,s)},r};Pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;fa(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Nt.Linear.easeNone=Nt.none=Nt.Linear.easeIn;fa("Elastic",pp("in"),pp("out"),pp());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(l){return l<t?i*l*l:l<n?i*Math.pow(l-1.5/e,2)+.75:l<r?i*(l-=2.25/e)*l+.9375:i*Math.pow(l-2.625/e,2)+.984375};fa("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);fa("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});fa("Circ",function(i){return-(yM(1-i*i)-1)});fa("Sine",function(i){return i===1?1:-xI(i*_I)+1});fa("Back",mp("in"),mp("out"),mp());Nt.SteppedEase=Nt.steps=Ji.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-en;return function(l){return((r*Kc(0,a,l)|0)+s)*n}}};vl.ease=Nt["quad.out"];Pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Qg+=i+","+i+"Params,"});var JM=function(e,t){this.id=vI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:RM,this.set=t?t.getSetter:r_},kc=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yl(this,+t.duration,1,1),this.data=t.data,cn&&(this._ctx=cn,cn.data.push(this)),Hc||qi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Sl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zh(this,n),!s._dp||s.parent||OM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===en||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),PM(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Sx(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Sx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?xl(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?gh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-en?0:this._rts,this.totalTime(Kc(-Math.abs(this._delay),this._tDur,s),r!==!1),Bh(this),AI(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&qr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?gh(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=MI);var r=si;return si=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),si=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ex(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Ex(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(fr(this,n),Ri(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ri(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-en)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=_n(n)?n:DM,l=function(){var f=r.then;r.then=null,_n(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=f),s(a),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){xc(this)},i}();yr(kc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var vi=function(i){xM(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ri(n.sortChildren),hn&&qr(n.parent||hn,ys(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&UM(ys(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ac(0,arguments,this),this},t.from=function(r,s,a){return Ac(1,arguments,this),this},t.fromTo=function(r,s,a,l){return Ac(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,wc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wn(r,s,fr(this,a),1),this},t.call=function(r,s,a){return qr(this,wn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,l,u,f,h){return a.duration=s,a.stagger=a.stagger||l,a.onComplete=f,a.onCompleteParams=h,a.parent=this,new wn(r,a,fr(this,u)),this},t.staggerFrom=function(r,s,a,l,u,f,h){return a.runBackwards=1,wc(a).immediateRender=Ri(a.immediateRender),this.staggerTo(r,s,a,l,u,f,h)},t.staggerFromTo=function(r,s,a,l,u,f,h,p){return l.startAt=a,wc(l).immediateRender=Ri(l.immediateRender),this.staggerTo(r,s,l,u,f,h,p)},t.render=function(r,s,a){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,f=this._dur,h=r<=0?0:Gn(r),p=this._zTime<0!=r<0&&(this._initted||!f),m,g,y,x,_,v,w,b,E,C,R,A;if(this!==hn&&h>u&&r>=0&&(h=u),h!==this._tTime||a||p){if(l!==this._time&&f&&(h+=this._time-l,r+=this._time-l),m=h,E=this._start,b=this._ts,v=!b,p&&(f||(l=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(m=Gn(h%_),h===u?(x=this._repeat,m=f):(x=~~(h/_),x&&x===h/_&&(m=f,x--),m>f&&(m=f)),C=xl(this._tTime,_),!l&&this._tTime&&C!==x&&this._tTime-C*_-this._dur<=0&&(C=x),R&&x&1&&(m=f-m,A=1),x!==C&&!this._lock){var z=R&&C&1,k=z===(R&&x&1);if(x<C&&(z=!z),l=z?0:h%f?f:h,this._lock=1,this.render(l||(A?0:Gn(x*_)),s,!f)._lock=0,this._tTime=h,!s&&this.parent&&ji(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),l&&l!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,u=this._tDur,k&&(this._lock=2,l=z?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;KM(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=LI(this,Gn(l),Gn(m)),w&&(h-=m-(m=w._start))),this._tTime=h,this._time=m,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&m&&!s&&!x&&(ji(this,"onStart"),this._tTime!==h))return this;if(m>=l&&r>=0)for(g=this._first;g;){if(y=g._next,(g._act||m>=g._start)&&g._ts&&w!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(m-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(m-g._start)*g._ts,s,a),m!==this._time||!this._ts&&!v){w=0,y&&(h+=this._zTime=-en);break}}g=y}else{g=this._last;for(var M=r<0?r:m;g;){if(y=g._prev,(g._act||M<=g._end)&&g._ts&&w!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(M-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(M-g._start)*g._ts,s,a||si&&(g._initted||g._startAt)),m!==this._time||!this._ts&&!v){w=0,y&&(h+=this._zTime=M?-en:en);break}}g=y}}if(w&&!s&&(this.pause(),w.render(m>=l?0:-en)._zTime=m>=l?1:-1,this._ts))return this._start=E,Bh(this),this.render(r,s,a);this._onUpdate&&!s&&ji(this,"onUpdate",!0),(h===u&&this._tTime>=this.totalDuration()||!h&&l)&&(E===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(h===u&&this._ts>0||!h&&this._ts<0)&&fo(this,1),!s&&!(r<0&&!l)&&(h||l||!u)&&(ji(this,h===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Cs(s)||(s=fr(this,s,r)),!(r instanceof kc)){if(oi(r))return r.forEach(function(l){return a.add(l,s)}),this;if(kn(r))return this.addLabel(r,s);if(_n(r))r=wn.delayedCall(0,r);else return this}return this!==r?qr(this,r,s):this},t.getChildren=function(r,s,a,l){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=-_r);for(var u=[],f=this._first;f;)f._start>=l&&(f instanceof wn?s&&u.push(f):(a&&u.push(f),r&&u.push.apply(u,f.getChildren(!0,s,a)))),f=f._next;return u},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return kn(r)?this.removeLabel(r):_n(r)?this.killTweensOf(r):(Fh(this,r),r===this._recent&&(this._recent=this._last),Xo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gn(qi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fr(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var l=wn.delayedCall(0,s||zc,a);return l.data="isPause",this._hasPause=1,qr(this,l,fr(this,r))},t.removePause=function(r){var s=this._first;for(r=fr(this,r);s;)s._start===r&&s.data==="isPause"&&fo(s),s=s._next},t.killTweensOf=function(r,s,a){for(var l=this.getTweensOf(r,a),u=l.length;u--;)Js!==l[u]&&l[u].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],l=vr(r),u=this._first,f=Cs(s),h;u;)u instanceof wn?TI(u._targets,l)&&(f?(!Js||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&a.push(u):(h=u.getTweensOf(l,s)).length&&a.push.apply(a,h),u=u._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,l=fr(a,r),u=s,f=u.startAt,h=u.onStart,p=u.onStartParams,m=u.immediateRender,g,y=wn.to(a,yr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(f&&"time"in f?f.time:a._time))/a.timeScale())||en,onStart:function(){if(a.pause(),!g){var _=s.duration||Math.abs((l-(f&&"time"in f?f.time:a._time))/a.timeScale());y._dur!==_&&yl(y,_,0,1).render(y._time,!0,!0),g=1}h&&h.apply(y,p||[])}},s));return m?y.render(0):y},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,yr({startAt:{time:fr(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Mx(this,fr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Mx(this,fr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var l=this._first,u=this.labels,f;l;)l._start>=a&&(l._start+=r,l._end+=r),l=l._next;if(s)for(f in u)u[f]>=a&&(u[f]+=r);return Xo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xo(this)},t.totalDuration=function(r){var s=0,a=this,l=a._last,u=_r,f,h,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(p=a.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),h=l._start,h>u&&a._sort&&l._ts&&!a._lock?(a._lock=1,qr(a,l,h-l._delay,1)._lock=0):u=h,h<0&&l._ts&&(s-=h,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=f;yl(a,a===hn&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(hn._ts&&(PM(hn,gh(r,hn)),CM=qi.frame),qi.frame>=xx){xx+=Ki.autoSleep||120;var s=hn._first;if((!s||!s._ts)&&Ki.autoSleep&&qi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qi.sleep()}}},e}(kc);yr(vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var qI=function(e,t,n,r,s,a,l){var u=new Li(this._pt,e,t,0,1,rT,null,s),f=0,h=0,p,m,g,y,x,_,v,w;for(u.b=n,u.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=Gc(r)),a&&(w=[n,r],a(w,e,t),n=w[0],r=w[1]),m=n.match(fp)||[];p=fp.exec(r);)y=p[0],x=r.substring(f,p.index),g?g=(g+1)%5:x.substr(-5)==="rgba("&&(g=1),y!==m[h++]&&(_=parseFloat(m[h-1])||0,u._pt={_next:u._pt,p:x||h===1?x:",",s:_,c:y.charAt(1)==="="?ll(_,y)-_:parseFloat(y)-_,m:g&&g<4?Math.round:0},f=fp.lastIndex);return u.c=f<r.length?r.substring(f,r.length):"",u.fp=l,(MM.test(r)||v)&&(u.e=0),this._pt=u,u},t_=function(e,t,n,r,s,a,l,u,f,h){_n(r)&&(r=r(s||0,e,a));var p=e[t],m=n!=="get"?n:_n(p)?f?e[t.indexOf("set")||!_n(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():p,g=_n(p)?f?JI:nT:i_,y;if(kn(r)&&(~r.indexOf("random(")&&(r=Gc(r)),r.charAt(1)==="="&&(y=ll(m,r)+(ri(m)||0),(y||y===0)&&(r=y))),!h||m!==r||ng)return!isNaN(m*r)&&r!==""?(y=new Li(this._pt,e,t,+m||0,r-(m||0),typeof p=="boolean"?e2:iT,0,g),f&&(y.fp=f),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(t in e)&&Zg(t,r),qI.call(this,e,t,m,r,g,u||Ki.stringFilter,f))},YI=function(e,t,n,r,s){if(_n(e)&&(e=Cc(e,s,t,n,r)),!ns(e)||e.style&&e.nodeType||oi(e)||SM(e))return kn(e)?Cc(e,s,t,n,r):e;var a={},l;for(l in e)a[l]=Cc(e[l],s,t,n,r);return a},QM=function(e,t,n,r,s,a){var l,u,f,h;if(Xi[e]&&(l=new Xi[e]).init(s,l.rawVars?t[e]:YI(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=u=new Li(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==nl))for(f=n._ptLookup[n._targets.indexOf(s)],h=l._props.length;h--;)f[l._props[h]]=u;return l},Js,ng,n_=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,l=r.immediateRender,u=r.lazy,f=r.onUpdate,h=r.runBackwards,p=r.yoyoEase,m=r.keyframes,g=r.autoRevert,y=e._dur,x=e._startAt,_=e._targets,v=e.parent,w=v&&v.data==="nested"?v.vars.targets:_,b=e._overwrite==="auto"&&!qg,E=e.timeline,C,R,A,z,k,M,U,V,ae,G,J,j,te;if(E&&(!m||!s)&&(s="none"),e._ease=qo(s,vl.ease),e._yEase=p?jM(qo(p===!0?s:p,vl.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||m&&!r.stagger){if(V=_[0]?$o(_[0]).harness:0,j=V&&r[V.prop],C=mh(r,Jg),x&&(x._zTime<0&&x.progress(1),t<0&&h&&l&&!g?x.render(-1,!0):x.revert(h&&y?jf:EI),x._lazy=0),a){if(fo(e._startAt=wn.set(_,yr({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!x&&Ri(u),startAt:null,delay:0,onUpdate:f&&function(){return ji(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si||!l&&!g)&&e._startAt.revert(jf),l&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&y&&!x){if(t&&(l=!1),A=yr({overwrite:!1,data:"isFromStart",lazy:l&&!x&&Ri(u),immediateRender:l,stagger:0,parent:v},C),j&&(A[V.prop]=j),fo(e._startAt=wn.set(_,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si?e._startAt.revert(jf):e._startAt.render(-1,!0)),e._zTime=t,!l)i(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,u=y&&Ri(u)||u&&!y,R=0;R<_.length;R++){if(k=_[R],U=k._gsap||e_(_)[R]._gsap,e._ptLookup[R]=G={},Km[U.id]&&ro.length&&ph(),J=w===_?R:w.indexOf(k),V&&(ae=new V).init(k,j||C,e,J,w)!==!1&&(e._pt=z=new Li(e._pt,k,ae.name,0,1,ae.render,ae,0,ae.priority),ae._props.forEach(function(ie){G[ie]=z}),ae.priority&&(M=1)),!V||j)for(A in C)Xi[A]&&(ae=QM(A,C,e,J,k,w))?ae.priority&&(M=1):G[A]=z=t_.call(e,k,A,"get",C[A],J,w,0,r.stringFilter);e._op&&e._op[R]&&e.kill(k,e._op[R]),b&&e._pt&&(Js=e,hn.killTweensOf(k,G,e.globalTime(t)),te=!e.parent,Js=0),e._pt&&u&&(Km[U.id]=1)}M&&sT(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!te,m&&t<=0&&E.render(_r,!0,!0)},jI=function(e,t,n,r,s,a,l,u){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,m,g;if(!f)for(f=e._ptCache[t]=[],m=e._ptLookup,g=e._targets.length;g--;){if(h=m[g][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ng=1,e.vars[t]="+=0",n_(e,l),ng=0,u?Bc(t+" not eligible for reset"):1;f.push(h)}for(g=f.length;g--;)p=f[g],h=p._pt||p,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,p.e&&(p.e=En(n)+ri(p.e)),p.b&&(p.b=h.s+ri(p.b))},KI=function(e,t){var n=e[0]?$o(e[0]).harness:0,r=n&&n.aliases,s,a,l,u;if(!r)return t;s=ia({},t);for(a in r)if(a in s)for(u=r[a].split(","),l=u.length;l--;)s[u[l]]=s[a];return s},ZI=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,l;if(oi(t))l=n[e]||(n[e]=[]),t.forEach(function(u,f){return l.push({t:f/(t.length-1)*100,v:u,e:s})});else for(a in t)l=n[a]||(n[a]=[]),a==="ease"||l.push({t:parseFloat(e),v:t[a],e:s})},Cc=function(e,t,n,r,s){return _n(e)?e.call(t,n,r,s):kn(e)&&~e.indexOf("random(")?Gc(e):e},eT=Qg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tT={};Pi(eT+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return tT[i]=1});var wn=function(i){xM(e,i);function e(n,r,s,a){var l;typeof r=="number"&&(s.duration=r,r=s,s=null),l=i.call(this,a?r:wc(r))||this;var u=l.vars,f=u.duration,h=u.delay,p=u.immediateRender,m=u.stagger,g=u.overwrite,y=u.keyframes,x=u.defaults,_=u.scrollTrigger,v=u.yoyoEase,w=r.parent||hn,b=(oi(n)||SM(n)?Cs(n[0]):"length"in r)?[n]:vr(n),E,C,R,A,z,k,M,U;if(l._targets=b.length?e_(b):Bc("GSAP target "+n+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,y||m||ju(f)||ju(h)){if(r=l.vars,E=l.timeline=new vi({data:"nested",defaults:x||{},targets:w&&w.data==="nested"?w.vars.targets:b}),E.kill(),E.parent=E._dp=ys(l),E._start=0,m||ju(f)||ju(h)){if(A=b.length,M=m&&zM(m),ns(m))for(z in m)~eT.indexOf(z)&&(U||(U={}),U[z]=m[z]);for(C=0;C<A;C++)R=mh(r,tT),R.stagger=0,v&&(R.yoyoEase=v),U&&ia(R,U),k=b[C],R.duration=+Cc(f,ys(l),C,k,b),R.delay=(+Cc(h,ys(l),C,k,b)||0)-l._delay,!m&&A===1&&R.delay&&(l._delay=h=R.delay,l._start+=h,R.delay=0),E.to(k,R,M?M(C,k,b):0),E._ease=Nt.none;E.duration()?f=h=0:l.timeline=0}else if(y){wc(yr(E.vars.defaults,{ease:"none"})),E._ease=qo(y.ease||r.ease||"none");var V=0,ae,G,J;if(oi(y))y.forEach(function(j){return E.to(b,j,">")}),E.duration();else{R={};for(z in y)z==="ease"||z==="easeEach"||ZI(z,y[z],R,y.easeEach);for(z in R)for(ae=R[z].sort(function(j,te){return j.t-te.t}),V=0,C=0;C<ae.length;C++)G=ae[C],J={ease:G.e,duration:(G.t-(C?ae[C-1].t:0))/100*f},J[z]=G.v,E.to(b,J,V),V+=J.duration;E.duration()<f&&E.to({},{duration:f-E.duration()})}}f||l.duration(f=E.duration())}else l.timeline=0;return g===!0&&!qg&&(Js=ys(l),hn.killTweensOf(b),Js=0),qr(w,ys(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!f&&!y&&l._start===Gn(w._time)&&Ri(p)&&CI(ys(l))&&w.data!=="nested")&&(l._tTime=-en,l.render(Math.max(0,-h)||0)),_&&UM(ys(l),_),l}var t=e.prototype;return t.render=function(r,s,a){var l=this._time,u=this._tDur,f=this._dur,h=r<0,p=r>u-en&&!h?u:r<en?0:r,m,g,y,x,_,v,w,b,E;if(!f)PI(this,r,s,a);else if(p!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(m=p,b=this.timeline,this._repeat){if(x=f+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+r,s,a);if(m=Gn(p%x),p===u?(y=this._repeat,m=f):(y=~~(p/x),y&&y===Gn(p/x)&&(m=f,y--),m>f&&(m=f)),v=this._yoyo&&y&1,v&&(E=this._yEase,m=f-m),_=xl(this._tTime,x),m===l&&!a&&this._initted&&y===_)return this._tTime=p,this;y!==_&&(b&&this._yEase&&KM(b,v),this.vars.repeatRefresh&&!v&&!this._lock&&this._time!==x&&this._initted&&(this._lock=a=1,this.render(Gn(x*y),!0).invalidate()._lock=0))}if(!this._initted){if(NM(this,h?r:m,a,s,p))return this._tTime=0,this;if(l!==this._time&&!(a&&this.vars.repeatRefresh&&y!==_))return this;if(f!==this._dur)return this.render(r,s,a)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(E||this._ease)(m/f),this._from&&(this.ratio=w=1-w),m&&!l&&!s&&!y&&(ji(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(w,g.d),g=g._next;b&&b.render(r<0?r:b._dur*b._ease(m/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Zm(this,r,s,a),ji(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!s&&this.parent&&ji(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&Zm(this,r,!0,!0),(r||!f)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&fo(this,1),!s&&!(h&&!l)&&(p||l||v)&&(ji(this,p===u?"onComplete":"onReverseComplete",!0),this._prom&&!(p<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,l,u){Hc||qi.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||n_(this,f),h=this._ease(f/this._dur),jI(this,r,s,a,l,h,f,u)?this.resetTo(r,s,a,l,1):(zh(this,0),this.parent||IM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xc(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Js&&Js.vars.overwrite!==!0)._first||xc(this),this.parent&&a!==this.timeline.totalDuration()&&yl(this,this._dur*this.timeline._tDur/a,0,1),this}var l=this._targets,u=r?vr(r):l,f=this._ptLookup,h=this._pt,p,m,g,y,x,_,v;if((!s||s==="all")&&wI(l,u))return s==="all"&&(this._pt=0),xc(this);for(p=this._op=this._op||[],s!=="all"&&(kn(s)&&(x={},Pi(s,function(w){return x[w]=1}),s=x),s=KI(l,s)),v=l.length;v--;)if(~u.indexOf(l[v])){m=f[v],s==="all"?(p[v]=s,y=m,g={}):(g=p[v]=p[v]||{},y=s);for(x in y)_=m&&m[x],_&&((!("kill"in _.d)||_.d.kill(x)===!0)&&Fh(this,_,"_pt"),delete m[x]),g!=="all"&&(g[x]=1)}return this._initted&&!this._pt&&h&&xc(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ac(1,arguments)},e.delayedCall=function(r,s,a,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:l})},e.fromTo=function(r,s,a){return Ac(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return hn.killTweensOf(r,s,a)},e}(kc);yr(wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pi("staggerTo,staggerFrom,staggerFromTo",function(i){wn[i]=function(){var e=new vi,t=Qm.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var i_=function(e,t,n){return e[t]=n},nT=function(e,t,n){return e[t](n)},JI=function(e,t,n,r){return e[t](r.fp,n)},QI=function(e,t,n){return e.setAttribute(t,n)},r_=function(e,t){return _n(e[t])?nT:Yg(e[t])&&e.setAttribute?QI:i_},iT=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},e2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},rT=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},s_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},t2=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},n2=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Fh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},i2=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},sT=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Li=function(){function i(t,n,r,s,a,l,u,f,h){this.t=n,this.s=s,this.c=a,this.p=r,this.r=l||iT,this.d=u||this,this.set=f||i_,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=i2,this.m=n,this.mt=s,this.tween=r},i}();Pi(Qg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Jg[i]=1});Ji.TweenMax=Ji.TweenLite=wn;Ji.TimelineLite=Ji.TimelineMax=vi;hn=new vi({sortChildren:!1,defaults:vl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=YM;var Yo=[],Zf={},r2=[],bx=0,s2=0,gp=function(e){return(Zf[e]||r2).map(function(t){return t()})},ig=function(){var e=Date.now(),t=[];e-bx>2&&(gp("matchMediaInit"),Yo.forEach(function(n){var r=n.queries,s=n.conditions,a,l,u,f;for(l in r)a=Wr.matchMedia(r[l]).matches,a&&(u=1),a!==s[l]&&(s[l]=a,f=1);f&&(n.revert(),u&&t.push(n))}),gp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),bx=e,gp("matchMedia"))},oT=function(){function i(t,n){this.selector=n&&eg(n),this.data=[],this._r=[],this.isReverted=!1,this.id=s2++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){_n(n)&&(s=r,r=n,n=_n);var a=this,l=function(){var f=cn,h=a.selector,p;return f&&f!==a&&f.data.push(a),s&&(a.selector=eg(s)),cn=a,p=r.apply(a,arguments),_n(p)&&a._r.push(p),cn=f,a.selector=h,a.isReverted=!1,p};return a.last=l,n===_n?l(a,function(u){return a.add(null,u)}):n?a[n]=l:l},e.ignore=function(n){var r=cn;cn=null,n(this),cn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof wn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,f;u--;)f=s.data[u],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(h){return l.splice(l.indexOf(h),1)}));for(l.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),u=s.data.length;u--;)f=s.data[u],f instanceof vi?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof wn)&&f.revert&&f.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var a=Yo.length;a--;)Yo[a].id===this.id&&Yo.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),o2=function(){function i(t){this.contexts=[],this.scope=t,cn&&cn.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){ns(n)||(n={matches:n});var a=new oT(0,s||this.scope),l=a.conditions={},u,f,h;cn&&!a.selector&&(a.selector=cn.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(f in n)f==="all"?h=1:(u=Wr.matchMedia(n[f]),u&&(Yo.indexOf(a)<0&&Yo.push(a),(l[f]=u.matches)&&(h=1),u.addListener?u.addListener(ig):u.addEventListener("change",ig)));return h&&r(a,function(p){return a.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),_h={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return $M(r)})},timeline:function(e){return new vi(e)},getTweensOf:function(e,t){return hn.getTweensOf(e,t)},getProperty:function(e,t,n,r){kn(e)&&(e=vr(e)[0]);var s=$o(e||{}).get,a=n?DM:LM;return n==="native"&&(n=""),e&&(t?a((Xi[t]&&Xi[t].get||s)(e,t,n,r)):function(l,u,f){return a((Xi[l]&&Xi[l].get||s)(e,l,u,f))})},quickSetter:function(e,t,n){if(e=vr(e),e.length>1){var r=e.map(function(h){return Oi.quickSetter(h,t,n)}),s=r.length;return function(h){for(var p=s;p--;)r[p](h)}}e=e[0]||{};var a=Xi[t],l=$o(e),u=l.harness&&(l.harness.aliases||{})[t]||t,f=a?function(h){var p=new a;nl._pt=0,p.init(e,n?h+n:h,nl,0,[e]),p.render(1,p),nl._pt&&s_(1,nl)}:l.set(e,u);return a?f:function(h){return f(e,u,n?h+n:h,l,1)}},quickTo:function(e,t,n){var r,s=Oi.to(e,ia((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(u,f,h){return s.resetTo(t,u,f,h)};return a.tween=s,a},isTweening:function(e){return hn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qo(e.ease,vl.ease)),yx(vl,e||{})},config:function(e){return yx(Ki,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Xi[l]&&!Ji[l]&&Bc(t+" effect requires "+l+" plugin.")}),hp[t]=function(l,u,f){return n(vr(l),yr(u||{},s),f)},a&&(vi.prototype[t]=function(l,u,f){return this.add(hp[t](l,ns(u)?u:(f=u)&&{},this),f)})},registerEase:function(e,t){Nt[e]=qo(t)},parseEase:function(e,t){return arguments.length?qo(e,t):Nt},getById:function(e){return hn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vi(e),r,s;for(n.smoothChildTiming=Ri(e.smoothChildTiming),hn.remove(n),n._dp=0,n._time=n._tTime=hn._time,r=hn._first;r;)s=r._next,(t||!(!r._dur&&r instanceof wn&&r.vars.onComplete===r._targets[0]))&&qr(n,r,r._start-r._delay),r=s;return qr(hn,n,0),n},context:function(e,t){return e?new oT(e,t):cn},matchMedia:function(e){return new o2(e)},matchMediaRefresh:function(){return Yo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||ig()},addEventListener:function(e,t){var n=Zf[e]||(Zf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:BI,wrapYoyo:zI,distribute:zM,random:HM,snap:GM,normalize:FI,getUnit:ri,clamp:II,splitColor:XM,toArray:vr,selector:eg,mapRange:WM,pipe:UI,unitize:NI,interpolate:GI,shuffle:BM},install:wM,effects:hp,ticker:qi,updateRoot:vi.updateRoot,plugins:Xi,globalTimeline:hn,core:{PropTween:Li,globals:AM,Tween:wn,Timeline:vi,Animation:kc,getCache:$o,_removeLinkedListItem:Fh,reverting:function(){return si},context:function(e){return e&&cn&&(cn.data.push(e),e._ctx=cn),cn},suppressOverwrites:function(e){return qg=e}}};Pi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return _h[i]=wn[i]});qi.add(vi.updateRoot);nl=_h.to({},{duration:0});var a2=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},l2=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=a2(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},_p=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(l){var u,f;if(kn(s)&&(u={},Pi(s,function(h){return u[h]=1}),s=u),t){u={};for(f in s)u[f]=t(s[f]);s=u}l2(l,s)}}}},Oi=_h.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,l,u;this.tween=n;for(a in t)u=e.getAttribute(a)||"",l=this.add(e,"setAttribute",(u||0)+"",t[a],r,s,0,0,a),l.op=a,l.b=u,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)si?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},_p("roundProps",tg),_p("modifiers"),_p("snap",GM))||_h;wn.version=vi.version=Oi.version="3.12.5";bM=1;jg()&&Sl();Nt.Power0;Nt.Power1;Nt.Power2;Nt.Power3;Nt.Power4;Nt.Linear;Nt.Quad;Nt.Cubic;Nt.Quart;Nt.Quint;Nt.Strong;Nt.Elastic;Nt.Back;Nt.SteppedEase;Nt.Bounce;Nt.Sine;Nt.Expo;Nt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wx,Qs,cl,o_,Ho,Ax,a_,c2=function(){return typeof window<"u"},Rs={},Io=180/Math.PI,ul=Math.PI/180,La=Math.atan2,Cx=1e8,l_=/([A-Z])/g,u2=/(left|right|width|margin|padding|x)/i,f2=/[\s,\(]\S/,jr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},rg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},h2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},d2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},p2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},aT=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},lT=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},m2=function(e,t,n){return e.style[t]=n},g2=function(e,t,n){return e.style.setProperty(t,n)},_2=function(e,t,n){return e._gsap[t]=n},v2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},x2=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},y2=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dn="transform",Di=dn+"Origin",S2=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Rs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=jr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Ss(r,l)}):this.tfm[e]=a.x?a[e]:Ss(r,e),e===Di&&(this.tfm.zOrigin=a.zOrigin);else return jr.transform.split(",").forEach(function(l){return i.call(n,l,t)});if(this.props.indexOf(dn)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Di,t,"")),e=dn}(s||t)&&this.props.push(e,t,s[e])},cT=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},E2=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(l_,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=a_(),(!s||!s.isStart)&&!n[dn]&&(cT(n),r.zOrigin&&n[Di]&&(n[Di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},uT=function(e,t){var n={target:e,props:[],revert:E2,save:S2};return e._gsap||Oi.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},fT,sg=function(e,t){var n=Qs.createElementNS?Qs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qs.createElement(e);return n&&n.style?n:Qs.createElement(e)},Jr=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(l_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,El(t)||t,1)||""},Rx="O,Moz,ms,Ms,Webkit".split(","),El=function(e,t,n){var r=t||Ho,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Rx[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Rx[a]:"")+e},og=function(){c2()&&window.document&&(wx=window,Qs=wx.document,cl=Qs.documentElement,Ho=sg("div")||{style:{}},sg("div"),dn=El(dn),Di=dn+"Origin",Ho.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fT=!!El("perspective"),a_=Oi.core.reverting,o_=1)},vp=function i(e){var t=sg("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(cl.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),cl.removeChild(t),this.style.cssText=s,a},Px=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hT=function(e){var t;try{t=e.getBBox()}catch{t=vp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===vp||(t=vp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Px(e,["x","cx","x1"])||0,y:+Px(e,["y","cy","y1"])||0,width:0,height:0}:t},dT=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hT(e))},ra=function(e,t){if(t){var n=e.style,r;t in Rs&&t!==Di&&(t=dn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(l_,"-$1").toLowerCase())):n.removeAttribute(t)}},eo=function(e,t,n,r,s,a){var l=new Li(e._pt,t,n,0,1,a?lT:aT);return e._pt=l,l.b=r,l.e=s,e._props.push(n),l},Lx={deg:1,rad:1,turn:1},M2={grid:1,flex:1},ho=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",l=Ho.style,u=u2.test(t),f=e.tagName.toLowerCase()==="svg",h=(f?"client":"offset")+(u?"Width":"Height"),p=100,m=r==="px",g=r==="%",y,x,_,v;if(r===a||!s||Lx[r]||Lx[a])return s;if(a!=="px"&&!m&&(s=i(e,t,n,"px")),v=e.getCTM&&dT(e),(g||a==="%")&&(Rs[t]||~t.indexOf("adius")))return y=v?e.getBBox()[u?"width":"height"]:e[h],En(g?s/y*p:s/100*y);if(l[u?"width":"height"]=p+(m?a:r),x=~t.indexOf("adius")||r==="em"&&e.appendChild&&!f?e:e.parentNode,v&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Qs||!x.appendChild)&&(x=Qs.body),_=x._gsap,_&&g&&_.width&&u&&_.time===qi.time&&!_.uncache)return En(s/_.width*p);if(g&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=p+r,y=e[h],w?e.style[t]=w:ra(e,t)}else(g||a==="%")&&!M2[Jr(x,"display")]&&(l.position=Jr(e,"position")),x===e&&(l.position="static"),x.appendChild(Ho),y=Ho[h],x.removeChild(Ho),l.position="absolute";return u&&g&&(_=$o(x),_.time=qi.time,_.width=x[h]),En(m?y*s/p:y&&s?p/y*s:0)},Ss=function(e,t,n,r){var s;return o_||og(),t in jr&&t!=="transform"&&(t=jr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Rs[t]&&t!=="transform"?(s=Vc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:xh(Jr(e,Di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=vh[t]&&vh[t](e,t,n)||Jr(e,t)||RM(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ho(e,t,s,n)+n:s},T2=function(e,t,n,r){if(!n||n==="none"){var s=El(t,e,1),a=s&&Jr(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Jr(e,"borderTopColor"))}var l=new Li(this._pt,e.style,t,0,1,rT),u=0,f=0,h,p,m,g,y,x,_,v,w,b,E,C;if(l.b=n,l.e=r,n+="",r+="",r==="auto"&&(x=e.style[t],e.style[t]=r,r=Jr(e,t)||r,x?e.style[t]=x:ra(e,t)),h=[n,r],YM(h),n=h[0],r=h[1],m=n.match(tl)||[],C=r.match(tl)||[],C.length){for(;p=tl.exec(r);)_=p[0],w=r.substring(u,p.index),y?y=(y+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(y=1),_!==(x=m[f++]||"")&&(g=parseFloat(x)||0,E=x.substr((g+"").length),_.charAt(1)==="="&&(_=ll(g,_)+E),v=parseFloat(_),b=_.substr((v+"").length),u=tl.lastIndex-b.length,b||(b=b||Ki.units[t]||E,u===r.length&&(r+=b,l.e+=b)),E!==b&&(g=ho(e,t,x,b)||0),l._pt={_next:l._pt,p:w||f===1?w:",",s:g,c:v-g,m:y&&y<4||t==="zIndex"?Math.round:0});l.c=u<r.length?r.substring(u,r.length):""}else l.r=t==="display"&&r==="none"?lT:aT;return MM.test(r)&&(l.e=0),this._pt=l,l},Dx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b2=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Dx[n]||n,t[1]=Dx[r]||r,t.join(" ")},w2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,l,u,f;if(s==="all"||s===!0)r.cssText="",u=1;else for(s=s.split(","),f=s.length;--f>-1;)l=s[f],Rs[l]&&(u=1,l=l==="transformOrigin"?Di:dn),ra(n,l);u&&(ra(n,dn),a&&(a.svg&&n.removeAttribute("transform"),Vc(n,1),a.uncache=1,cT(r)))}},vh={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Li(e._pt,t,n,0,0,w2);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Wc=[1,0,0,1,0,0],pT={},mT=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ix=function(e){var t=Jr(e,dn);return mT(t)?Wc:t.substr(7).match(EM).map(En)},c_=function(e,t){var n=e._gsap||$o(e),r=e.style,s=Ix(e),a,l,u,f;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?Wc:s):(s===Wc&&!e.offsetParent&&e!==cl&&!n.svg&&(u=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(f=1,l=e.nextElementSibling,cl.appendChild(e)),s=Ix(e),u?r.display=u:ra(e,"display"),f&&(l?a.insertBefore(e,l):a?a.appendChild(e):cl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ag=function(e,t,n,r,s,a){var l=e._gsap,u=s||c_(e,!0),f=l.xOrigin||0,h=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,g=u[0],y=u[1],x=u[2],_=u[3],v=u[4],w=u[5],b=t.split(" "),E=parseFloat(b[0])||0,C=parseFloat(b[1])||0,R,A,z,k;n?u!==Wc&&(A=g*_-y*x)&&(z=E*(_/A)+C*(-x/A)+(x*w-_*v)/A,k=E*(-y/A)+C*(g/A)-(g*w-y*v)/A,E=z,C=k):(R=hT(e),E=R.x+(~b[0].indexOf("%")?E/100*R.width:E),C=R.y+(~(b[1]||b[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&l.smooth?(v=E-f,w=C-h,l.xOffset=p+(v*g+w*x)-v,l.yOffset=m+(v*y+w*_)-w):l.xOffset=l.yOffset=0,l.xOrigin=E,l.yOrigin=C,l.smooth=!!r,l.origin=t,l.originIsAbsolute=!!n,e.style[Di]="0px 0px",a&&(eo(a,l,"xOrigin",f,E),eo(a,l,"yOrigin",h,C),eo(a,l,"xOffset",p,l.xOffset),eo(a,l,"yOffset",m,l.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},Vc=function(e,t){var n=e._gsap||new JM(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",l="deg",u=getComputedStyle(e),f=Jr(e,Di)||"0",h,p,m,g,y,x,_,v,w,b,E,C,R,A,z,k,M,U,V,ae,G,J,j,te,ie,oe,N,ce,Se,Je,ne,ue;return h=p=m=x=_=v=w=b=E=0,g=y=1,n.svg=!!(e.getCTM&&dT(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[dn]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[dn]!=="none"?u[dn]:"")),r.scale=r.rotate=r.translate="none"),A=c_(e,n.svg),n.svg&&(n.uncache?(ie=e.getBBox(),f=n.xOrigin-ie.x+"px "+(n.yOrigin-ie.y)+"px",te=""):te=!t&&e.getAttribute("data-svg-origin"),ag(e,te||f,!!te||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,R=n.yOrigin||0,A!==Wc&&(U=A[0],V=A[1],ae=A[2],G=A[3],h=J=A[4],p=j=A[5],A.length===6?(g=Math.sqrt(U*U+V*V),y=Math.sqrt(G*G+ae*ae),x=U||V?La(V,U)*Io:0,w=ae||G?La(ae,G)*Io+x:0,w&&(y*=Math.abs(Math.cos(w*ul))),n.svg&&(h-=C-(C*U+R*ae),p-=R-(C*V+R*G))):(ue=A[6],Je=A[7],N=A[8],ce=A[9],Se=A[10],ne=A[11],h=A[12],p=A[13],m=A[14],z=La(ue,Se),_=z*Io,z&&(k=Math.cos(-z),M=Math.sin(-z),te=J*k+N*M,ie=j*k+ce*M,oe=ue*k+Se*M,N=J*-M+N*k,ce=j*-M+ce*k,Se=ue*-M+Se*k,ne=Je*-M+ne*k,J=te,j=ie,ue=oe),z=La(-ae,Se),v=z*Io,z&&(k=Math.cos(-z),M=Math.sin(-z),te=U*k-N*M,ie=V*k-ce*M,oe=ae*k-Se*M,ne=G*M+ne*k,U=te,V=ie,ae=oe),z=La(V,U),x=z*Io,z&&(k=Math.cos(z),M=Math.sin(z),te=U*k+V*M,ie=J*k+j*M,V=V*k-U*M,j=j*k-J*M,U=te,J=ie),_&&Math.abs(_)+Math.abs(x)>359.9&&(_=x=0,v=180-v),g=En(Math.sqrt(U*U+V*V+ae*ae)),y=En(Math.sqrt(j*j+ue*ue)),z=La(J,j),w=Math.abs(z)>2e-4?z*Io:0,E=ne?1/(ne<0?-ne:ne):0),n.svg&&(te=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!mT(Jr(e,dn)),te&&e.setAttribute("transform",te))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(g*=-1,w+=x<=0?180:-180,x+=x<=0?180:-180):(y*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=m+a,n.scaleX=En(g),n.scaleY=En(y),n.rotation=En(x)+l,n.rotationX=En(_)+l,n.rotationY=En(v)+l,n.skewX=w+l,n.skewY=b+l,n.transformPerspective=E+a,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Di]=xh(f)),n.xOffset=n.yOffset=0,n.force3D=Ki.force3D,n.renderTransform=n.svg?C2:fT?gT:A2,n.uncache=0,n},xh=function(e){return(e=e.split(" "))[0]+" "+e[1]},xp=function(e,t,n){var r=ri(t);return En(parseFloat(t)+parseFloat(ho(e,"x",n+"px",r)))+r},A2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,gT(e,t)},Ao="0deg",nc="0px",Co=") ",gT=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.z,f=n.rotation,h=n.rotationY,p=n.rotationX,m=n.skewX,g=n.skewY,y=n.scaleX,x=n.scaleY,_=n.transformPerspective,v=n.force3D,w=n.target,b=n.zOrigin,E="",C=v==="auto"&&e&&e!==1||v===!0;if(b&&(p!==Ao||h!==Ao)){var R=parseFloat(h)*ul,A=Math.sin(R),z=Math.cos(R),k;R=parseFloat(p)*ul,k=Math.cos(R),a=xp(w,a,A*k*-b),l=xp(w,l,-Math.sin(R)*-b),u=xp(w,u,z*k*-b+b)}_!==nc&&(E+="perspective("+_+Co),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||a!==nc||l!==nc||u!==nc)&&(E+=u!==nc||C?"translate3d("+a+", "+l+", "+u+") ":"translate("+a+", "+l+Co),f!==Ao&&(E+="rotate("+f+Co),h!==Ao&&(E+="rotateY("+h+Co),p!==Ao&&(E+="rotateX("+p+Co),(m!==Ao||g!==Ao)&&(E+="skew("+m+", "+g+Co),(y!==1||x!==1)&&(E+="scale("+y+", "+x+Co),w.style[dn]=E||"translate(0, 0)"},C2=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.rotation,f=n.skewX,h=n.skewY,p=n.scaleX,m=n.scaleY,g=n.target,y=n.xOrigin,x=n.yOrigin,_=n.xOffset,v=n.yOffset,w=n.forceCSS,b=parseFloat(a),E=parseFloat(l),C,R,A,z,k;u=parseFloat(u),f=parseFloat(f),h=parseFloat(h),h&&(h=parseFloat(h),f+=h,u+=h),u||f?(u*=ul,f*=ul,C=Math.cos(u)*p,R=Math.sin(u)*p,A=Math.sin(u-f)*-m,z=Math.cos(u-f)*m,f&&(h*=ul,k=Math.tan(f-h),k=Math.sqrt(1+k*k),A*=k,z*=k,h&&(k=Math.tan(h),k=Math.sqrt(1+k*k),C*=k,R*=k)),C=En(C),R=En(R),A=En(A),z=En(z)):(C=p,z=m,R=A=0),(b&&!~(a+"").indexOf("px")||E&&!~(l+"").indexOf("px"))&&(b=ho(g,"x",a,"px"),E=ho(g,"y",l,"px")),(y||x||_||v)&&(b=En(b+y-(y*C+x*A)+_),E=En(E+x-(y*R+x*z)+v)),(r||s)&&(k=g.getBBox(),b=En(b+r/100*k.width),E=En(E+s/100*k.height)),k="matrix("+C+","+R+","+A+","+z+","+b+","+E+")",g.setAttribute("transform",k),w&&(g.style[dn]=k)},R2=function(e,t,n,r,s){var a=360,l=kn(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Io:1),f=u-r,h=r+f+"deg",p,m;return l&&(p=s.split("_")[1],p==="short"&&(f%=a,f!==f%(a/2)&&(f+=f<0?a:-a)),p==="cw"&&f<0?f=(f+a*Cx)%a-~~(f/a)*a:p==="ccw"&&f>0&&(f=(f-a*Cx)%a-~~(f/a)*a)),e._pt=m=new Li(e._pt,t,n,r,f,h2),m.e=h,m.u="deg",e._props.push(n),m},Ox=function(e,t){for(var n in t)e[n]=t[n];return e},P2=function(e,t,n){var r=Ox({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,l,u,f,h,p,m,g,y;r.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),a[dn]=t,l=Vc(n,1),ra(n,dn),n.setAttribute("transform",f)):(f=getComputedStyle(n)[dn],a[dn]=t,l=Vc(n,1),a[dn]=f);for(u in Rs)f=r[u],h=l[u],f!==h&&s.indexOf(u)<0&&(g=ri(f),y=ri(h),p=g!==y?ho(n,u,f,y):parseFloat(f),m=parseFloat(h),e._pt=new Li(e._pt,l,u,p,m-p,rg),e._pt.u=y||0,e._props.push(u));Ox(l,r)};Pi("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(l){return e<2?i+l:"border"+l+i});vh[e>1?"border"+i:i]=function(l,u,f,h,p){var m,g;if(arguments.length<4)return m=a.map(function(y){return Ss(l,y,f)}),g=m.join(" "),g.split(m[0]).length===5?m[0]:g;m=(h+"").split(" "),g={},a.forEach(function(y,x){return g[y]=m[x]=m[x]||m[(x-1)/2|0]}),l.init(u,g,p)}});var _T={name:"css",register:og,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,l=e.style,u=n.vars.startAt,f,h,p,m,g,y,x,_,v,w,b,E,C,R,A,z;o_||og(),this.styles=this.styles||uT(e),z=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(h=t[x],!(Xi[x]&&QM(x,t,n,r,e,s)))){if(g=typeof h,y=vh[x],g==="function"&&(h=h.call(n,r,e,s),g=typeof h),g==="string"&&~h.indexOf("random(")&&(h=Gc(h)),y)y(this,e,x,h,n)&&(A=1);else if(x.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",so.lastIndex=0,so.test(f)||(_=ri(f),v=ri(h)),v?_!==v&&(f=ho(e,x,f,v)+v):_&&(h+=_),this.add(l,"setProperty",f,h,r,s,0,0,x),a.push(x),z.push(x,0,l[x]);else if(g!=="undefined"){if(u&&x in u?(f=typeof u[x]=="function"?u[x].call(n,r,e,s):u[x],kn(f)&&~f.indexOf("random(")&&(f=Gc(f)),ri(f+"")||f==="auto"||(f+=Ki.units[x]||ri(Ss(e,x))||""),(f+"").charAt(1)==="="&&(f=Ss(e,x))):f=Ss(e,x),m=parseFloat(f),w=g==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),p=parseFloat(h),x in jr&&(x==="autoAlpha"&&(m===1&&Ss(e,"visibility")==="hidden"&&p&&(m=0),z.push("visibility",0,l.visibility),eo(this,l,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),x!=="scale"&&x!=="transform"&&(x=jr[x],~x.indexOf(",")&&(x=x.split(",")[0]))),b=x in Rs,b){if(this.styles.save(x),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||Vc(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new Li(this._pt,l,dn,0,1,C.renderTransform,C,0,-1),E.dep=1),x==="scale")this._pt=new Li(this._pt,C,"scaleY",C.scaleY,(w?ll(C.scaleY,w+p):p)-C.scaleY||0,rg),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){z.push(Di,0,l[Di]),h=b2(h),C.svg?ag(e,h,0,R,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==C.zOrigin&&eo(this,C,"zOrigin",C.zOrigin,v),eo(this,l,x,xh(f),xh(h)));continue}else if(x==="svgOrigin"){ag(e,h,1,R,0,this);continue}else if(x in pT){R2(this,C,x,m,w?ll(m,w+h):h);continue}else if(x==="smoothOrigin"){eo(this,C,"smooth",C.smooth,h);continue}else if(x==="force3D"){C[x]=h;continue}else if(x==="transform"){P2(this,h,e);continue}}else x in l||(x=El(x)||x);if(b||(p||p===0)&&(m||m===0)&&!f2.test(h)&&x in l)_=(f+"").substr((m+"").length),p||(p=0),v=ri(h)||(x in Ki.units?Ki.units[x]:_),_!==v&&(m=ho(e,x,f,v)),this._pt=new Li(this._pt,b?C:l,x,m,(w?ll(m,w+p):p)-m,!b&&(v==="px"||x==="zIndex")&&t.autoRound!==!1?p2:rg),this._pt.u=v||0,_!==v&&v!=="%"&&(this._pt.b=f,this._pt.r=d2);else if(x in l)T2.call(this,e,x,f,w?w+h:h);else if(x in e)this.add(e,x,f||e[x],w?w+h:h,r,s);else if(x!=="parseTransform"){Zg(x,h);continue}b||(x in l?z.push(x,0,l[x]):z.push(x,1,f||e[x])),a.push(x)}}A&&sT(this)},render:function(e,t){if(t.tween._time||!a_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ss,aliases:jr,getSetter:function(e,t,n){var r=jr[t];return r&&r.indexOf(",")<0&&(t=r),t in Rs&&t!==Di&&(e._gsap.x||Ss(e,"x"))?n&&Ax===n?t==="scale"?v2:_2:(Ax=n||{})&&(t==="scale"?x2:y2):e.style&&!Yg(e.style[t])?m2:~t.indexOf("-")?g2:r_(e,t)},core:{_removeProperty:ra,_getMatrix:c_}};Oi.utils.checkPrefix=El;Oi.core.getStyleSaver=uT;(function(i,e,t,n){var r=Pi(i+","+e+","+t,function(s){Rs[s]=1});Pi(e,function(s){Ki.units[s]="deg",pT[s]=1}),jr[r[13]]=i+","+e,Pi(n,function(s){var a=s.split(":");jr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ki.units[i]="px"});Oi.registerPlugin(_T);var u_=Oi.registerPlugin(_T)||Oi;u_.core.Tween;function Ux(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function L2(i,e,t){return e&&Ux(i.prototype,e),t&&Ux(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qn,Jf,Yi,to,no,fl,vT,Oo,Rc,xT,bs,Pr,yT,ST=function(){return qn||typeof window<"u"&&(qn=window.gsap)&&qn.registerPlugin&&qn},ET=1,il=[],Pt=[],Qr=[],Pc=Date.now,lg=function(e,t){return t},D2=function(){var e=Rc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Pt),r.push.apply(r,Qr),Pt=n,Qr=r,lg=function(a,l){return t[a](l)}},oo=function(e,t){return~Qr.indexOf(e)&&Qr[Qr.indexOf(e)+1][t]},Lc=function(e){return!!~xT.indexOf(e)},hi=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},fi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ku="scrollLeft",Zu="scrollTop",cg=function(){return bs&&bs.isPressed||Pt.cache++},yh=function(e,t){var n=function r(s){if(s||s===0){ET&&(Yi.history.scrollRestoration="manual");var a=bs&&bs.isPressed;s=r.v=Math.round(s)||(bs&&bs.iOS?1:0),e(s),r.cacheID=Pt.cache,a&&lg("ss",s)}else(t||Pt.cache!==r.cacheID||lg("ref"))&&(r.cacheID=Pt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},xi={s:Ku,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yh(function(i){return arguments.length?Yi.scrollTo(i,In.sc()):Yi.pageXOffset||to[Ku]||no[Ku]||fl[Ku]||0})},In={s:Zu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xi,sc:yh(function(i){return arguments.length?Yi.scrollTo(xi.sc(),i):Yi.pageYOffset||to[Zu]||no[Zu]||fl[Zu]||0})},Ai=function(e,t){return(t&&t._ctx&&t._ctx.selector||qn.utils.toArray)(e)[0]||(typeof e=="string"&&qn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},po=function(e,t){var n=t.s,r=t.sc;Lc(e)&&(e=to.scrollingElement||no);var s=Pt.indexOf(e),a=r===In.sc?1:2;!~s&&(s=Pt.push(e)-1),Pt[s+a]||hi(e,"scroll",cg);var l=Pt[s+a],u=l||(Pt[s+a]=yh(oo(e,n),!0)||(Lc(e)?r:yh(function(f){return arguments.length?e[n]=f:e[n]})));return u.target=e,l||(u.smooth=qn.getProperty(e,"scrollBehavior")==="smooth"),u},ug=function(e,t,n){var r=e,s=e,a=Pc(),l=a,u=t||50,f=Math.max(500,u*3),h=function(y,x){var _=Pc();x||_-a>u?(s=r,r=y,l=a,a=_):n?r+=y:r=s+(y-s)/(_-l)*(a-l)},p=function(){s=r=n?0:r,l=a=0},m=function(y){var x=l,_=s,v=Pc();return(y||y===0)&&y!==r&&h(y),a===l||v-l>f?0:(r+(n?_:-_))/((n?v:a)-x)*1e3};return{update:h,reset:p,getVelocity:m}},ic=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Nx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},MT=function(){Rc=qn.core.globals().ScrollTrigger,Rc&&Rc.core&&D2()},TT=function(e){return qn=e||ST(),!Jf&&qn&&typeof document<"u"&&document.body&&(Yi=window,to=document,no=to.documentElement,fl=to.body,xT=[Yi,to,no,fl],qn.utils.clamp,yT=qn.core.context||function(){},Oo="onpointerenter"in fl?"pointer":"mouse",vT=Mn.isTouch=Yi.matchMedia&&Yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pr=Mn.eventTypes=("ontouchstart"in no?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in no?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return ET=0},500),MT(),Jf=1),Jf};xi.op=In;Pt.cache=0;var Mn=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Jf||TT(qn)||console.warn("Please gsap.registerPlugin(Observer)"),Rc||MT();var r=n.tolerance,s=n.dragMinimum,a=n.type,l=n.target,u=n.lineHeight,f=n.debounce,h=n.preventDefault,p=n.onStop,m=n.onStopDelay,g=n.ignore,y=n.wheelSpeed,x=n.event,_=n.onDragStart,v=n.onDragEnd,w=n.onDrag,b=n.onPress,E=n.onRelease,C=n.onRight,R=n.onLeft,A=n.onUp,z=n.onDown,k=n.onChangeX,M=n.onChangeY,U=n.onChange,V=n.onToggleX,ae=n.onToggleY,G=n.onHover,J=n.onHoverEnd,j=n.onMove,te=n.ignoreCheck,ie=n.isNormalizer,oe=n.onGestureStart,N=n.onGestureEnd,ce=n.onWheel,Se=n.onEnable,Je=n.onDisable,ne=n.onClick,ue=n.scrollSpeed,be=n.capture,De=n.allowClicks,Oe=n.lockAxis,Ce=n.onLockAxis;this.target=l=Ai(l)||no,this.vars=n,g&&(g=qn.utils.toArray(g)),r=r||1e-9,s=s||0,y=y||1,ue=ue||1,a=a||"wheel,touch,pointer",f=f!==!1,u||(u=parseFloat(Yi.getComputedStyle(fl).lineHeight)||22);var gt,$e,q,st,Te,ke,Ue,K=this,et=0,O=0,P=n.passive||!h,Y=po(l,xi),me=po(l,In),de=Y(),_e=me(),Ae=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Pr[0]==="pointerdown",we=Lc(l),Ee=l.ownerDocument||to,Ge=[0,0,0],tt=[0,0,0],pe=0,bt=function(){return pe=Pc()},Xe=function(Ve,je){return(K.event=Ve)&&g&&~g.indexOf(Ve.target)||je&&Ae&&Ve.pointerType!=="touch"||te&&te(Ve,je)},ot=function(){K._vx.reset(),K._vy.reset(),$e.pause(),p&&p(K)},We=function(){var Ve=K.deltaX=Nx(Ge),je=K.deltaY=Nx(tt),ye=Math.abs(Ve)>=r,nt=Math.abs(je)>=r;U&&(ye||nt)&&U(K,Ve,je,Ge,tt),ye&&(C&&K.deltaX>0&&C(K),R&&K.deltaX<0&&R(K),k&&k(K),V&&K.deltaX<0!=et<0&&V(K),et=K.deltaX,Ge[0]=Ge[1]=Ge[2]=0),nt&&(z&&K.deltaY>0&&z(K),A&&K.deltaY<0&&A(K),M&&M(K),ae&&K.deltaY<0!=O<0&&ae(K),O=K.deltaY,tt[0]=tt[1]=tt[2]=0),(st||q)&&(j&&j(K),q&&(w(K),q=!1),st=!1),ke&&!(ke=!1)&&Ce&&Ce(K),Te&&(ce(K),Te=!1),gt=0},Ie=function(Ve,je,ye){Ge[ye]+=Ve,tt[ye]+=je,K._vx.update(Ve),K._vy.update(je),f?gt||(gt=requestAnimationFrame(We)):We()},at=function(Ve,je){Oe&&!Ue&&(K.axis=Ue=Math.abs(Ve)>Math.abs(je)?"x":"y",ke=!0),Ue!=="y"&&(Ge[2]+=Ve,K._vx.update(Ve,!0)),Ue!=="x"&&(tt[2]+=je,K._vy.update(je,!0)),f?gt||(gt=requestAnimationFrame(We)):We()},_t=function(Ve){if(!Xe(Ve,1)){Ve=ic(Ve,h);var je=Ve.clientX,ye=Ve.clientY,nt=je-K.x,Qe=ye-K.y,ft=K.isDragging;K.x=je,K.y=ye,(ft||Math.abs(K.startX-je)>=s||Math.abs(K.startY-ye)>=s)&&(w&&(q=!0),ft||(K.isDragging=!0),at(nt,Qe),ft||_&&_(K))}},Dt=K.onPress=function(qe){Xe(qe,1)||qe&&qe.button||(K.axis=Ue=null,$e.pause(),K.isPressed=!0,qe=ic(qe),et=O=0,K.startX=K.x=qe.clientX,K.startY=K.y=qe.clientY,K._vx.reset(),K._vy.reset(),hi(ie?l:Ee,Pr[1],_t,P,!0),K.deltaX=K.deltaY=0,b&&b(K))},Pe=K.onRelease=function(qe){if(!Xe(qe,1)){fi(ie?l:Ee,Pr[1],_t,!0);var Ve=!isNaN(K.y-K.startY),je=K.isDragging,ye=je&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),nt=ic(qe);!ye&&Ve&&(K._vx.reset(),K._vy.reset(),h&&De&&qn.delayedCall(.08,function(){if(Pc()-pe>300&&!qe.defaultPrevented){if(qe.target.click)qe.target.click();else if(Ee.createEvent){var Qe=Ee.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,Yi,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),qe.target.dispatchEvent(Qe)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,p&&je&&!ie&&$e.restart(!0),v&&je&&v(K),E&&E(K,ye)}},Ct=function(Ve){return Ve.touches&&Ve.touches.length>1&&(K.isGesturing=!0)&&oe(Ve,K.isDragging)},F=function(){return(K.isGesturing=!1)||N(K)},ve=function(Ve){if(!Xe(Ve)){var je=Y(),ye=me();Ie((je-de)*ue,(ye-_e)*ue,1),de=je,_e=ye,p&&$e.restart(!0)}},xe=function(Ve){if(!Xe(Ve)){Ve=ic(Ve,h),ce&&(Te=!0);var je=(Ve.deltaMode===1?u:Ve.deltaMode===2?Yi.innerHeight:1)*y;Ie(Ve.deltaX*je,Ve.deltaY*je,0),p&&!ie&&$e.restart(!0)}},Ne=function(Ve){if(!Xe(Ve)){var je=Ve.clientX,ye=Ve.clientY,nt=je-K.x,Qe=ye-K.y;K.x=je,K.y=ye,st=!0,p&&$e.restart(!0),(nt||Qe)&&at(nt,Qe)}},Ze=function(Ve){K.event=Ve,G(K)},vt=function(Ve){K.event=Ve,J(K)},It=function(Ve){return Xe(Ve)||ic(Ve,h)&&ne(K)};$e=K._dc=qn.delayedCall(m||.25,ot).pause(),K.deltaX=K.deltaY=0,K._vx=ug(0,50,!0),K._vy=ug(0,50,!0),K.scrollX=Y,K.scrollY=me,K.isDragging=K.isGesturing=K.isPressed=!1,yT(this),K.enable=function(qe){return K.isEnabled||(hi(we?Ee:l,"scroll",cg),a.indexOf("scroll")>=0&&hi(we?Ee:l,"scroll",ve,P,be),a.indexOf("wheel")>=0&&hi(l,"wheel",xe,P,be),(a.indexOf("touch")>=0&&vT||a.indexOf("pointer")>=0)&&(hi(l,Pr[0],Dt,P,be),hi(Ee,Pr[2],Pe),hi(Ee,Pr[3],Pe),De&&hi(l,"click",bt,!0,!0),ne&&hi(l,"click",It),oe&&hi(Ee,"gesturestart",Ct),N&&hi(Ee,"gestureend",F),G&&hi(l,Oo+"enter",Ze),J&&hi(l,Oo+"leave",vt),j&&hi(l,Oo+"move",Ne)),K.isEnabled=!0,qe&&qe.type&&Dt(qe),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(il.filter(function(qe){return qe!==K&&Lc(qe.target)}).length||fi(we?Ee:l,"scroll",cg),K.isPressed&&(K._vx.reset(),K._vy.reset(),fi(ie?l:Ee,Pr[1],_t,!0)),fi(we?Ee:l,"scroll",ve,be),fi(l,"wheel",xe,be),fi(l,Pr[0],Dt,be),fi(Ee,Pr[2],Pe),fi(Ee,Pr[3],Pe),fi(l,"click",bt,!0),fi(l,"click",It),fi(Ee,"gesturestart",Ct),fi(Ee,"gestureend",F),fi(l,Oo+"enter",Ze),fi(l,Oo+"leave",vt),fi(l,Oo+"move",Ne),K.isEnabled=K.isPressed=K.isDragging=!1,Je&&Je(K))},K.kill=K.revert=function(){K.disable();var qe=il.indexOf(K);qe>=0&&il.splice(qe,1),bs===K&&(bs=0)},il.push(K),ie&&Lc(l)&&(bs=K),K.enable(x)},L2(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Mn.version="3.12.5";Mn.create=function(i){return new Mn(i)};Mn.register=TT;Mn.getAll=function(){return il.slice()};Mn.getById=function(i){return il.filter(function(e){return e.vars.id===i})[0]};ST()&&qn.registerPlugin(Mn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var He,Ja,Ut,fn,Lr,on,bT,Sh,$c,Dc,Sc,Ju,ni,Gh,fg,mi,Fx,Bx,Qa,wT,yp,AT,pi,hg,CT,RT,Zs,dg,f_,hl,h_,Eh,pg,Sp,Qu=1,ii=Date.now,Ep=ii(),xr=0,Ec=0,zx=function(e,t,n){var r=$i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Gx=function(e,t){return t&&(!$i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},I2=function i(){return Ec&&requestAnimationFrame(i)},Hx=function(){return Gh=1},kx=function(){return Gh=0},Vr=function(e){return e},Mc=function(e){return Math.round(e*1e5)/1e5||0},PT=function(){return typeof window<"u"},LT=function(){return He||PT()&&(He=window.gsap)&&He.registerPlugin&&He},sa=function(e){return!!~bT.indexOf(e)},DT=function(e){return(e==="Height"?h_:Ut["inner"+e])||Lr["client"+e]||on["client"+e]},IT=function(e){return oo(e,"getBoundingClientRect")||(sa(e)?function(){return ih.width=Ut.innerWidth,ih.height=h_,ih}:function(){return Es(e)})},O2=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=oo(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?DT(s):e["client"+s])||0}},U2=function(e,t){return!t||~Qr.indexOf(e)?IT(e):function(){return ih}},Kr=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=oo(e,n))?a()-IT(e)()[s]:sa(e)?(Lr[n]||on[n])-DT(r):e[n]-e["offset"+r])},ef=function(e,t){for(var n=0;n<Qa.length;n+=3)(!t||~t.indexOf(Qa[n+1]))&&e(Qa[n],Qa[n+1],Qa[n+2])},$i=function(e){return typeof e=="string"},yi=function(e){return typeof e=="function"},Tc=function(e){return typeof e=="number"},Uo=function(e){return typeof e=="object"},rc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Mp=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Da=Math.abs,OT="left",UT="top",d_="right",p_="bottom",jo="width",Ko="height",Ic="Right",Oc="Left",Uc="Top",Nc="Bottom",bn="padding",dr="margin",Ml="Width",m_="Height",Dn="px",pr=function(e){return Ut.getComputedStyle(e)},N2=function(e){var t=pr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Wx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Es=function(e,t){var n=t&&pr(e)[fg]!=="matrix(1, 0, 0, 1, 0, 0)"&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Mh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},NT=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},F2=function(e){return function(t){return He.utils.snap(NT(e),t)}},g_=function(e){var t=He.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var l;if(!s)return t(r);if(s>0){for(r-=a,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=a;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var l=t(r);return!s||Math.abs(l-r)<a||l-r<0==s<0?l:t(s<0?r-e:r+e)}},B2=function(e){return function(t,n){return g_(NT(e))(t,n.direction)}},tf=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},zn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Bn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},nf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Vx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rf={toggleActions:"play",anticipatePin:0},Th={top:0,left:0,center:.5,bottom:1,right:1},Qf=function(e,t){if($i(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Th?Th[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sf=function(e,t,n,r,s,a,l,u){var f=s.startColor,h=s.endColor,p=s.fontSize,m=s.indent,g=s.fontWeight,y=fn.createElement("div"),x=sa(n)||oo(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,v=x?on:n,w=e.indexOf("start")!==-1,b=w?f:h,E="border-color:"+b+";font-size:"+p+";color:"+b+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((_||u)&&x?"fixed;":"absolute;"),(_||u||!x)&&(E+=(r===In?d_:p_)+":"+(a+parseFloat(m))+"px;"),l&&(E+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=w,y.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),y.style.cssText=E,y.innerText=t||t===0?e+"-"+t:e,v.children[0]?v.insertBefore(y,v.children[0]):v.appendChild(y),y._offset=y["offset"+r.op.d2],eh(y,0,r,w),y},eh=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],l=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+Ml]=1,s["border"+l+Ml]=0,s[n.p]=t+"px",He.set(e,s)},wt=[],mg={},Xc,$x=function(){return ii()-xr>34&&(Xc||(Xc=requestAnimationFrame(As)))},Ia=function(){(!pi||!pi.isPressed||pi.startX>on.clientWidth)&&(Pt.cache++,pi?Xc||(Xc=requestAnimationFrame(As)):As(),xr||aa("scrollStart"),xr=ii())},Tp=function(){RT=Ut.innerWidth,CT=Ut.innerHeight},bc=function(){Pt.cache++,!ni&&!AT&&!fn.fullscreenElement&&!fn.webkitFullscreenElement&&(!hg||RT!==Ut.innerWidth||Math.abs(Ut.innerHeight-CT)>Ut.innerHeight*.25)&&Sh.restart(!0)},oa={},z2=[],FT=function i(){return Bn(yt,"scrollEnd",i)||ko(!0)},aa=function(e){return oa[e]&&oa[e].map(function(t){return t()})||z2},Vi=[],BT=function(e){for(var t=0;t<Vi.length;t+=5)(!e||Vi[t+4]&&Vi[t+4].query===e)&&(Vi[t].style.cssText=Vi[t+1],Vi[t].getBBox&&Vi[t].setAttribute("transform",Vi[t+2]||""),Vi[t+3].uncache=1)},__=function(e,t){var n;for(mi=0;mi<wt.length;mi++)n=wt[mi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Eh=!0,t&&BT(t),t||aa("revert")},zT=function(e,t){Pt.cache++,(t||!gi)&&Pt.forEach(function(n){return yi(n)&&n.cacheID++&&(n.rec=0)}),$i(e)&&(Ut.history.scrollRestoration=f_=e)},gi,Zo=0,Xx,G2=function(){if(Xx!==Zo){var e=Xx=Zo;requestAnimationFrame(function(){return e===Zo&&ko(!0)})}},GT=function(){on.appendChild(hl),h_=!pi&&hl.offsetHeight||Ut.innerHeight,on.removeChild(hl)},qx=function(e){return $c(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ko=function(e,t){if(xr&&!e&&!Eh){zn(yt,"scrollEnd",FT);return}GT(),gi=yt.isRefreshing=!0,Pt.forEach(function(r){return yi(r)&&++r.cacheID&&(r.rec=r())});var n=aa("refreshInit");wT&&yt.sort(),t||__(),Pt.forEach(function(r){yi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),wt.slice(0).forEach(function(r){return r.refresh()}),Eh=!1,wt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),pg=1,qx(!0),wt.forEach(function(r){var s=Kr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,l=r._startClamp&&r.start>=s;(a||l)&&r.setPositions(l?s-1:r.start,a?Math.max(l?s:r.start+1,s):r.end,!0)}),qx(!1),pg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Pt.forEach(function(r){yi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),zT(f_,1),Sh.pause(),Zo++,gi=2,As(2),wt.forEach(function(r){return yi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),gi=yt.isRefreshing=!1,aa("refresh")},gg=0,th=1,Fc,As=function(e){if(e===2||!gi&&!Eh){yt.isUpdating=!0,Fc&&Fc.update(0);var t=wt.length,n=ii(),r=n-Ep>=50,s=t&&wt[0].scroll();if(th=gg>s?-1:1,gi||(gg=s),r&&(xr&&!Gh&&n-xr>200&&(xr=0,aa("scrollEnd")),Sc=Ep,Ep=n),th<0){for(mi=t;mi-- >0;)wt[mi]&&wt[mi].update(0,r);th=1}else for(mi=0;mi<t;mi++)wt[mi]&&wt[mi].update(0,r);yt.isUpdating=!1}Xc=0},_g=[OT,UT,p_,d_,dr+Nc,dr+Ic,dr+Uc,dr+Oc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nh=_g.concat([jo,Ko,"boxSizing","max"+Ml,"max"+m_,"position",dr,bn,bn+Uc,bn+Ic,bn+Nc,bn+Oc]),H2=function(e,t,n){dl(n);var r=e._gsap;if(r.spacerIsNative)dl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},bp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=_g.length,a=t.style,l=e.style,u;s--;)u=_g[s],a[u]=n[u];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),l[p_]=l[d_]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[jo]=Mh(e,xi)+Dn,a[Ko]=Mh(e,In)+Dn,a[bn]=l[dr]=l[UT]=l[OT]="0",dl(r),l[jo]=l["max"+Ml]=n[jo],l[Ko]=l["max"+m_]=n[Ko],l[bn]=n[bn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},k2=/([A-Z])/g,dl=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(k2,"-$1").toLowerCase())}},of=function(e){for(var t=nh.length,n=e.style,r=[],s=0;s<t;s++)r.push(nh[s],n[nh[s]]);return r.t=e,r},W2=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,l;a<s;a+=2)l=e[a],r.push(l,l in t?t[l]:e[a+1]);return r.t=e.t,r},ih={left:0,top:0},Yx=function(e,t,n,r,s,a,l,u,f,h,p,m,g,y){yi(e)&&(e=e(u)),$i(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?Qf("0"+e.substr(3),n):0));var x=g?g.time():0,_,v,w;if(g&&g.seek(0),isNaN(e)||(e=+e),Tc(e))g&&(e=He.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,m,e)),l&&eh(l,n,r,!0);else{yi(t)&&(t=t(u));var b=(e||"0").split(" "),E,C,R,A;w=Ai(t,u)||on,E=Es(w)||{},(!E||!E.left&&!E.top)&&pr(w).display==="none"&&(A=w.style.display,w.style.display="block",E=Es(w),A?w.style.display=A:w.style.removeProperty("display")),C=Qf(b[0],E[r.d]),R=Qf(b[1]||"0",n),e=E[r.p]-f[r.p]-h+C+s-R,l&&eh(l,R,r,n-R<20||l._isStart&&R>20),n-=n-R}if(y&&(u[y]=e||-.001,e<0&&(e=0)),a){var z=e+n,k=a._isStart;_="scroll"+r.d2,eh(a,z,r,k&&z>20||!k&&(p?Math.max(on[_],Lr[_]):a.parentNode[_])<=z+1),p&&(f=Es(l),p&&(a.style[r.op.p]=f[r.op.p]-r.op.m-a._offset+Dn))}return g&&w&&(_=Es(w),g.seek(m),v=Es(w),g._caScrollDist=_[r.p]-v[r.p],e=e/g._caScrollDist*m),g&&g.seek(x),g?e:Math.round(e)},V2=/(webkit|moz|length|cssText|inset)/i,jx=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,l;if(t===on){e._stOrig=s.cssText,l=pr(e);for(a in l)!+a&&!V2.test(a)&&l[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=l[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}},HT=function(e,t,n){var r=t,s=r;return function(a){var l=Math.round(e());return l!==r&&l!==s&&Math.abs(l-r)>3&&Math.abs(l-s)>3&&(a=l,n&&n()),s=r,r=a,a}},af=function(e,t,n){var r={};r[t.p]="+="+n,He.set(e,r)},Kx=function(e,t){var n=po(e,t),r="_scroll"+t.p2,s=function a(l,u,f,h,p){var m=a.tween,g=u.onComplete,y={};f=f||n();var x=HT(n,f,function(){m.kill(),a.tween=0});return p=h&&p||0,h=h||l-f,m&&m.kill(),u[r]=l,u.inherit=!1,u.modifiers=y,y[r]=function(){return x(f+h*m.ratio+p*m.ratio*m.ratio)},u.onUpdate=function(){Pt.cache++,a.tween&&As()},u.onComplete=function(){a.tween=0,g&&g.call(m)},m=a.tween=He.to(e,u),m};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},zn(e,"wheel",n.wheelHandler),yt.isTouch&&zn(e,"touchmove",n.wheelHandler),s},yt=function(){function i(t,n){Ja||i.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dg(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ec){this.update=this.refresh=this.kill=Vr;return}n=Wx($i(n)||Tc(n)||n.nodeType?{trigger:n}:n,rf);var s=n,a=s.onUpdate,l=s.toggleClass,u=s.id,f=s.onToggle,h=s.onRefresh,p=s.scrub,m=s.trigger,g=s.pin,y=s.pinSpacing,x=s.invalidateOnRefresh,_=s.anticipatePin,v=s.onScrubComplete,w=s.onSnapComplete,b=s.once,E=s.snap,C=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,z=s.fastScrollEnd,k=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xi:In,U=!p&&p!==0,V=Ai(n.scroller||Ut),ae=He.core.getCache(V),G=sa(V),J=("pinType"in n?n.pinType:oo(V,"pinType")||G&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],te=U&&n.toggleActions.split(" "),ie="markers"in n?n.markers:rf.markers,oe=G?0:parseFloat(pr(V)["border"+M.p2+Ml])||0,N=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Se=O2(V,G,M),Je=U2(V,G),ne=0,ue=0,be=0,De=po(V,M),Oe,Ce,gt,$e,q,st,Te,ke,Ue,K,et,O,P,Y,me,de,_e,Ae,we,Ee,Ge,tt,pe,bt,Xe,ot,We,Ie,at,_t,Dt,Pe,Ct,F,ve,xe,Ne,Ze,vt;if(N._startClamp=N._endClamp=!1,N._dir=M,_*=45,N.scroller=V,N.scroll=A?A.time.bind(A):De,$e=De(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(wT=1,n.refreshPriority===-9999&&(Fc=N)),ae.tweenScroll=ae.tweenScroll||{top:Kx(V,In),left:Kx(V,xi)},N.tweenTo=Oe=ae.tweenScroll[M.p],N.scrubDuration=function(ye){Ct=Tc(ye)&&ye,Ct?Pe?Pe.duration(ye):Pe=He.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ct,paused:!0,onComplete:function(){return v&&v(N)}}):(Pe&&Pe.progress(1).kill(),Pe=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(p),_t=0,u||(u=r.vars.id)),E&&((!Uo(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in on.style&&He.set(G?[on,Lr]:V,{scrollBehavior:"auto"}),Pt.forEach(function(ye){return yi(ye)&&ye.target===(G?fn.scrollingElement||Lr:V)&&(ye.smooth=!1)}),gt=yi(E.snapTo)?E.snapTo:E.snapTo==="labels"?F2(r):E.snapTo==="labelsDirectional"?B2(r):E.directional!==!1?function(ye,nt){return g_(E.snapTo)(ye,ii()-ue<500?0:nt.direction)}:He.utils.snap(E.snapTo),F=E.duration||{min:.1,max:2},F=Uo(F)?Dc(F.min,F.max):Dc(F,F),ve=He.delayedCall(E.delay||Ct/2||.1,function(){var ye=De(),nt=ii()-ue<500,Qe=Oe.tween;if((nt||Math.abs(N.getVelocity())<10)&&!Qe&&!Gh&&ne!==ye){var ft=(ye-st)/Y,tn=r&&!U?r.totalProgress():ft,St=nt?0:(tn-Dt)/(ii()-Sc)*1e3||0,$t=He.utils.clamp(-ft,1-ft,Da(St/2)*St/.185),xn=ft+(E.inertia===!1?0:$t),jt,Xt,zt=E,Zn=zt.onStart,I=zt.onInterrupt,$=zt.onComplete;if(jt=gt(xn,N),Tc(jt)||(jt=xn),Xt=Math.round(st+jt*Y),ye<=Te&&ye>=st&&Xt!==ye){if(Qe&&!Qe._initted&&Qe.data<=Da(Xt-ye))return;E.inertia===!1&&($t=jt-ft),Oe(Xt,{duration:F(Da(Math.max(Da(xn-tn),Da(jt-tn))*.185/St/.05||0)),ease:E.ease||"power3",data:Da(Xt-ye),onInterrupt:function(){return ve.restart(!0)&&I&&I(N)},onComplete:function(){N.update(),ne=De(),r&&(Pe?Pe.resetTo("totalProgress",jt,r._tTime/r._tDur):r.progress(jt)),_t=Dt=r&&!U?r.totalProgress():N.progress,w&&w(N),$&&$(N)}},ye,$t*Y,Xt-ye-$t*Y),Zn&&Zn(N,Oe.tween)}}else N.isActive&&ne!==ye&&ve.restart(!0)}).pause()),u&&(mg[u]=N),m=N.trigger=Ai(m||g!==!0&&g),vt=m&&m._gsap&&m._gsap.stRevert,vt&&(vt=vt(N)),g=g===!0?m:Ai(g),$i(l)&&(l={targets:m,className:l}),g&&(y===!1||y===dr||(y=!y&&g.parentNode&&g.parentNode.style&&pr(g.parentNode).display==="flex"?!1:bn),N.pin=g,Ce=He.core.getCache(g),Ce.spacer?me=Ce.pinState:(R&&(R=Ai(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Ce.spacerIsNative=!!R,R&&(Ce.spacerState=of(R))),Ce.spacer=Ae=R||fn.createElement("div"),Ae.classList.add("pin-spacer"),u&&Ae.classList.add("pin-spacer-"+u),Ce.pinState=me=of(g)),n.force3D!==!1&&He.set(g,{force3D:!0}),N.spacer=Ae=Ce.spacer,at=pr(g),bt=at[y+M.os2],Ee=He.getProperty(g),Ge=He.quickSetter(g,M.a,Dn),bp(g,Ae,at),_e=of(g)),ie){O=Uo(ie)?Wx(ie,Vx):Vx,K=sf("scroller-start",u,V,M,O,0),et=sf("scroller-end",u,V,M,O,0,K),we=K["offset"+M.op.d2];var It=Ai(oo(V,"content")||V);ke=this.markerStart=sf("start",u,It,M,O,we,0,A),Ue=this.markerEnd=sf("end",u,It,M,O,we,0,A),A&&(Ze=He.quickSetter([ke,Ue],M.a,Dn)),!J&&!(Qr.length&&oo(V,"fixedMarkers")===!0)&&(N2(G?on:V),He.set([K,et],{force3D:!0}),ot=He.quickSetter(K,M.a,Dn),Ie=He.quickSetter(et,M.a,Dn))}if(A){var qe=A.vars.onUpdate,Ve=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),qe&&qe.apply(A,Ve||[])})}if(N.previous=function(){return wt[wt.indexOf(N)-1]},N.next=function(){return wt[wt.indexOf(N)+1]},N.revert=function(ye,nt){if(!nt)return N.kill(!0);var Qe=ye!==!1||!N.enabled,ft=ni;Qe!==N.isReverted&&(Qe&&(xe=Math.max(De(),N.scroll.rec||0),be=N.progress,Ne=r&&r.progress()),ke&&[ke,Ue,K,et].forEach(function(tn){return tn.style.display=Qe?"none":"block"}),Qe&&(ni=N,N.update(Qe)),g&&(!C||!N.isActive)&&(Qe?H2(g,Ae,me):bp(g,Ae,pr(g),Xe)),Qe||N.update(Qe),ni=ft,N.isReverted=Qe)},N.refresh=function(ye,nt,Qe,ft){if(!((ni||!N.enabled)&&!nt)){if(g&&ye&&xr){zn(i,"scrollEnd",FT);return}!gi&&ce&&ce(N),ni=N,Oe.tween&&!Qe&&(Oe.tween.kill(),Oe.tween=0),Pe&&Pe.pause(),x&&r&&r.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var tn=Se(),St=Je(),$t=A?A.duration():Kr(V,M),xn=Y<=.01,jt=0,Xt=ft||0,zt=Uo(Qe)?Qe.end:n.end,Zn=n.endTrigger||m,I=Uo(Qe)?Qe.start:n.start||(n.start===0||!m?0:g?"0 0":"0 100%"),$=N.pinnedContainer=n.pinnedContainer&&Ai(n.pinnedContainer,N),ee=m&&Math.max(0,wt.indexOf(N))||0,Q=ee,Z,Me,Fe,it,Be,Ye,rt,ht,Kt,pn,Ft,Wn,Ht;for(ie&&Uo(Qe)&&(Wn=He.getProperty(K,M.p),Ht=He.getProperty(et,M.p));Q--;)Ye=wt[Q],Ye.end||Ye.refresh(0,1)||(ni=N),rt=Ye.pin,rt&&(rt===m||rt===g||rt===$)&&!Ye.isReverted&&(pn||(pn=[]),pn.unshift(Ye),Ye.revert(!0,!0)),Ye!==wt[Q]&&(ee--,Q--);for(yi(I)&&(I=I(N)),I=zx(I,"start",N),st=Yx(I,m,tn,M,De(),ke,K,N,St,oe,J,$t,A,N._startClamp&&"_startClamp")||(g?-.001:0),yi(zt)&&(zt=zt(N)),$i(zt)&&!zt.indexOf("+=")&&(~zt.indexOf(" ")?zt=($i(I)?I.split(" ")[0]:"")+zt:(jt=Qf(zt.substr(2),tn),zt=$i(I)?I:(A?He.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,st):st)+jt,Zn=m)),zt=zx(zt,"end",N),Te=Math.max(st,Yx(zt||(Zn?"100% 0":$t),Zn,tn,M,De()+jt,Ue,et,N,St,oe,J,$t,A,N._endClamp&&"_endClamp"))||-.001,jt=0,Q=ee;Q--;)Ye=wt[Q],rt=Ye.pin,rt&&Ye.start-Ye._pinPush<=st&&!A&&Ye.end>0&&(Z=Ye.end-(N._startClamp?Math.max(0,Ye.start):Ye.start),(rt===m&&Ye.start-Ye._pinPush<st||rt===$)&&isNaN(I)&&(jt+=Z*(1-Ye.progress)),rt===g&&(Xt+=Z));if(st+=jt,Te+=jt,N._startClamp&&(N._startClamp+=jt),N._endClamp&&!gi&&(N._endClamp=Te||-.001,Te=Math.min(Te,Kr(V,M))),Y=Te-st||(st-=.01)&&.001,xn&&(be=He.utils.clamp(0,1,He.utils.normalize(st,Te,xe))),N._pinPush=Xt,ke&&jt&&(Z={},Z[M.a]="+="+jt,$&&(Z[M.p]="-="+De()),He.set([ke,Ue],Z)),g&&!(pg&&N.end>=Kr(V,M)))Z=pr(g),it=M===In,Fe=De(),tt=parseFloat(Ee(M.a))+Xt,!$t&&Te>1&&(Ft=(G?fn.scrollingElement||Lr:V).style,Ft={style:Ft,value:Ft["overflow"+M.a.toUpperCase()]},G&&pr(on)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Ft.style["overflow"+M.a.toUpperCase()]="scroll")),bp(g,Ae,Z),_e=of(g),Me=Es(g,!0),ht=J&&po(V,it?xi:In)(),y?(Xe=[y+M.os2,Y+Xt+Dn],Xe.t=Ae,Q=y===bn?Mh(g,M)+Y+Xt:0,Q&&(Xe.push(M.d,Q+Dn),Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=Q+Dn)),dl(Xe),$&&wt.forEach(function(dt){dt.pin===$&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),J&&De(xe)):(Q=Mh(g,M),Q&&Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=Q+Dn)),J&&(Be={top:Me.top+(it?Fe-st:ht)+Dn,left:Me.left+(it?ht:Fe-st)+Dn,boxSizing:"border-box",position:"fixed"},Be[jo]=Be["max"+Ml]=Math.ceil(Me.width)+Dn,Be[Ko]=Be["max"+m_]=Math.ceil(Me.height)+Dn,Be[dr]=Be[dr+Uc]=Be[dr+Ic]=Be[dr+Nc]=Be[dr+Oc]="0",Be[bn]=Z[bn],Be[bn+Uc]=Z[bn+Uc],Be[bn+Ic]=Z[bn+Ic],Be[bn+Nc]=Z[bn+Nc],Be[bn+Oc]=Z[bn+Oc],de=W2(me,Be,C),gi&&De(0)),r?(Kt=r._initted,yp(1),r.render(r.duration(),!0,!0),pe=Ee(M.a)-tt+Y+Xt,We=Math.abs(Y-pe)>1,J&&We&&de.splice(de.length-2,2),r.render(0,!0,!0),Kt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),yp(0)):pe=Y,Ft&&(Ft.value?Ft.style["overflow"+M.a.toUpperCase()]=Ft.value:Ft.style.removeProperty("overflow-"+M.a));else if(m&&De()&&!A)for(Me=m.parentNode;Me&&Me!==on;)Me._pinOffset&&(st-=Me._pinOffset,Te-=Me._pinOffset),Me=Me.parentNode;pn&&pn.forEach(function(dt){return dt.revert(!1,!0)}),N.start=st,N.end=Te,$e=q=gi?xe:De(),!A&&!gi&&($e<xe&&De(xe),N.scroll.rec=0),N.revert(!1,!0),ue=ii(),ve&&(ne=-1,ve.restart(!0)),ni=0,r&&U&&(r._initted||Ne)&&r.progress()!==Ne&&r.progress(Ne||0,!0).render(r.time(),!0,!0),(xn||be!==N.progress||A||x)&&(r&&!U&&r.totalProgress(A&&st<-.001&&!be?He.utils.normalize(st,Te,0):be,!0),N.progress=xn||($e-st)/Y===be?0:be),g&&y&&(Ae._pinOffset=Math.round(N.progress*pe)),Pe&&Pe.invalidate(),isNaN(Wn)||(Wn-=He.getProperty(K,M.p),Ht-=He.getProperty(et,M.p),af(K,M,Wn),af(ke,M,Wn-(ft||0)),af(et,M,Ht),af(Ue,M,Ht-(ft||0))),xn&&!gi&&N.update(),h&&!gi&&!P&&(P=!0,h(N),P=!1)}},N.getVelocity=function(){return(De()-q)/(ii()-Sc)*1e3||0},N.endAnimation=function(){rc(N.callbackAnimation),r&&(Pe?Pe.progress(1):r.paused()?U||rc(r,N.direction<0,1):rc(r,r.reversed()))},N.labelToScroll=function(ye){return r&&r.labels&&(st||N.refresh()||st)+r.labels[ye]/r.duration()*Y||0},N.getTrailing=function(ye){var nt=wt.indexOf(N),Qe=N.direction>0?wt.slice(0,nt).reverse():wt.slice(nt+1);return($i(ye)?Qe.filter(function(ft){return ft.vars.preventOverlaps===ye}):Qe).filter(function(ft){return N.direction>0?ft.end<=st:ft.start>=Te})},N.update=function(ye,nt,Qe){if(!(A&&!Qe&&!ye)){var ft=gi===!0?xe:N.scroll(),tn=ye?0:(ft-st)/Y,St=tn<0?0:tn>1?1:tn||0,$t=N.progress,xn,jt,Xt,zt,Zn,I,$,ee;if(nt&&(q=$e,$e=A?De():ft,E&&(Dt=_t,_t=r&&!U?r.totalProgress():St)),_&&g&&!ni&&!Qu&&xr&&(!St&&st<ft+(ft-q)/(ii()-Sc)*_?St=1e-4:St===1&&Te>ft+(ft-q)/(ii()-Sc)*_&&(St=.9999)),St!==$t&&N.enabled){if(xn=N.isActive=!!St&&St<1,jt=!!$t&&$t<1,I=xn!==jt,Zn=I||!!St!=!!$t,N.direction=St>$t?1:-1,N.progress=St,Zn&&!ni&&(Xt=St&&!$t?0:St===1?1:$t===1?2:3,U&&(zt=!I&&te[Xt+1]!=="none"&&te[Xt+1]||te[Xt],ee=r&&(zt==="complete"||zt==="reset"||zt in r))),k&&(I||ee)&&(ee||p||!r)&&(yi(k)?k(N):N.getTrailing(k).forEach(function(Fe){return Fe.endAnimation()})),U||(Pe&&!ni&&!Qu?(Pe._dp._time-Pe._start!==Pe._time&&Pe.render(Pe._dp._time-Pe._start),Pe.resetTo?Pe.resetTo("totalProgress",St,r._tTime/r._tDur):(Pe.vars.totalProgress=St,Pe.invalidate().restart())):r&&r.totalProgress(St,!!(ni&&(ue||ye)))),g){if(ye&&y&&(Ae.style[y+M.os2]=bt),!J)Ge(Mc(tt+pe*St));else if(Zn){if($=!ye&&St>$t&&Te+1>ft&&ft+1>=Kr(V,M),C)if(!ye&&(xn||$)){var Q=Es(g,!0),Z=ft-st;jx(g,on,Q.top+(M===In?Z:0)+Dn,Q.left+(M===In?0:Z)+Dn)}else jx(g,Ae);dl(xn||$?de:_e),We&&St<1&&xn||Ge(tt+(St===1&&!$?pe:0))}}E&&!Oe.tween&&!ni&&!Qu&&ve.restart(!0),l&&(I||b&&St&&(St<1||!Sp))&&$c(l.targets).forEach(function(Fe){return Fe.classList[xn||b?"add":"remove"](l.className)}),a&&!U&&!ye&&a(N),Zn&&!ni?(U&&(ee&&(zt==="complete"?r.pause().totalProgress(1):zt==="reset"?r.restart(!0).pause():zt==="restart"?r.restart(!0):r[zt]()),a&&a(N)),(I||!Sp)&&(f&&I&&Mp(N,f),j[Xt]&&Mp(N,j[Xt]),b&&(St===1?N.kill(!1,1):j[Xt]=0),I||(Xt=St===1?1:3,j[Xt]&&Mp(N,j[Xt]))),z&&!xn&&Math.abs(N.getVelocity())>(Tc(z)?z:2500)&&(rc(N.callbackAnimation),Pe?Pe.progress(1):rc(r,zt==="reverse"?1:!St,1))):U&&a&&!ni&&a(N)}if(Ie){var Me=A?ft/A.duration()*(A._caScrollDist||0):ft;ot(Me+(K._isFlipped?1:0)),Ie(Me)}Ze&&Ze(-ft/A.duration()*(A._caScrollDist||0))}},N.enable=function(ye,nt){N.enabled||(N.enabled=!0,zn(V,"resize",bc),G||zn(V,"scroll",Ia),ce&&zn(i,"refreshInit",ce),ye!==!1&&(N.progress=be=0,$e=q=ne=De()),nt!==!1&&N.refresh())},N.getTween=function(ye){return ye&&Oe?Oe.tween:Pe},N.setPositions=function(ye,nt,Qe,ft){if(A){var tn=A.scrollTrigger,St=A.duration(),$t=tn.end-tn.start;ye=tn.start+$t*ye/St,nt=tn.start+$t*nt/St}N.refresh(!1,!1,{start:Gx(ye,Qe&&!!N._startClamp),end:Gx(nt,Qe&&!!N._endClamp)},ft),N.update()},N.adjustPinSpacing=function(ye){if(Xe&&ye){var nt=Xe.indexOf(M.d)+1;Xe[nt]=parseFloat(Xe[nt])+ye+Dn,Xe[1]=parseFloat(Xe[1])+ye+Dn,dl(Xe)}},N.disable=function(ye,nt){if(N.enabled&&(ye!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,nt||Pe&&Pe.pause(),xe=0,Ce&&(Ce.uncache=1),ce&&Bn(i,"refreshInit",ce),ve&&(ve.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!G)){for(var Qe=wt.length;Qe--;)if(wt[Qe].scroller===V&&wt[Qe]!==N)return;Bn(V,"resize",bc),G||Bn(V,"scroll",Ia)}},N.kill=function(ye,nt){N.disable(ye,nt),Pe&&!nt&&Pe.kill(),u&&delete mg[u];var Qe=wt.indexOf(N);Qe>=0&&wt.splice(Qe,1),Qe===mi&&th>0&&mi--,Qe=0,wt.forEach(function(ft){return ft.scroller===N.scroller&&(Qe=1)}),Qe||gi||(N.scroll.rec=0),r&&(r.scrollTrigger=null,ye&&r.revert({kill:!1}),nt||r.kill()),ke&&[ke,Ue,K,et].forEach(function(ft){return ft.parentNode&&ft.parentNode.removeChild(ft)}),Fc===N&&(Fc=0),g&&(Ce&&(Ce.uncache=1),Qe=0,wt.forEach(function(ft){return ft.pin===g&&Qe++}),Qe||(Ce.spacer=0)),n.onKill&&n.onKill(N)},wt.push(N),N.enable(!1,!1),vt&&vt(N),r&&r.add&&!Y){var je=N.update;N.update=function(){N.update=je,st||Te||N.refresh()},He.delayedCall(.01,N.update),Y=.01,st=Te=0}else N.refresh();g&&G2()},i.register=function(n){return Ja||(He=n||LT(),PT()&&window.document&&i.enable(),Ja=Ec),Ja},i.defaults=function(n){if(n)for(var r in n)rf[r]=n[r];return rf},i.disable=function(n,r){Ec=0,wt.forEach(function(a){return a[r?"kill":"disable"](n)}),Bn(Ut,"wheel",Ia),Bn(fn,"scroll",Ia),clearInterval(Ju),Bn(fn,"touchcancel",Vr),Bn(on,"touchstart",Vr),tf(Bn,fn,"pointerdown,touchstart,mousedown",Hx),tf(Bn,fn,"pointerup,touchend,mouseup",kx),Sh.kill(),ef(Bn);for(var s=0;s<Pt.length;s+=3)nf(Bn,Pt[s],Pt[s+1]),nf(Bn,Pt[s],Pt[s+2])},i.enable=function(){if(Ut=window,fn=document,Lr=fn.documentElement,on=fn.body,He&&($c=He.utils.toArray,Dc=He.utils.clamp,dg=He.core.context||Vr,yp=He.core.suppressOverwrites||Vr,f_=Ut.history.scrollRestoration||"auto",gg=Ut.pageYOffset,He.core.globals("ScrollTrigger",i),on)){Ec=1,hl=document.createElement("div"),hl.style.height="100vh",hl.style.position="absolute",GT(),I2(),Mn.register(He),i.isTouch=Mn.isTouch,Zs=Mn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),hg=Mn.isTouch===1,zn(Ut,"wheel",Ia),bT=[Ut,fn,Lr,on],He.matchMedia?(i.matchMedia=function(u){var f=He.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},He.addEventListener("matchMediaInit",function(){return __()}),He.addEventListener("matchMediaRevert",function(){return BT()}),He.addEventListener("matchMedia",function(){ko(0,1),aa("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Tp(),Tp})):console.warn("Requires GSAP 3.11.0 or later"),Tp(),zn(fn,"scroll",Ia);var n=on.style,r=n.borderTopStyle,s=He.core.Animation.prototype,a,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Es(on),In.m=Math.round(a.top+In.sc())||0,xi.m=Math.round(a.left+xi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Ju=setInterval($x,250),He.delayedCall(.5,function(){return Qu=0}),zn(fn,"touchcancel",Vr),zn(on,"touchstart",Vr),tf(zn,fn,"pointerdown,touchstart,mousedown",Hx),tf(zn,fn,"pointerup,touchend,mouseup",kx),fg=He.utils.checkPrefix("transform"),nh.push(fg),Ja=ii(),Sh=He.delayedCall(.2,ko).pause(),Qa=[fn,"visibilitychange",function(){var u=Ut.innerWidth,f=Ut.innerHeight;fn.hidden?(Fx=u,Bx=f):(Fx!==u||Bx!==f)&&bc()},fn,"DOMContentLoaded",ko,Ut,"load",ko,Ut,"resize",bc],ef(zn),wt.forEach(function(u){return u.enable(0,1)}),l=0;l<Pt.length;l+=3)nf(Bn,Pt[l],Pt[l+1]),nf(Bn,Pt[l],Pt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Sp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ju)||(Ju=r)&&setInterval($x,r),"ignoreMobileResize"in n&&(hg=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ef(Bn)||ef(zn,n.autoRefreshEvents||"none"),AT=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Ai(n),a=Pt.indexOf(s),l=sa(s);~a&&Pt.splice(a,l?6:2),r&&(l?Qr.unshift(Ut,r,on,r,Lr,r):Qr.unshift(s,r))},i.clearMatchMedia=function(n){wt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=($i(n)?Ai(n):n).getBoundingClientRect(),l=a[s?jo:Ko]*r||0;return s?a.right-l>0&&a.left+l<Ut.innerWidth:a.bottom-l>0&&a.top+l<Ut.innerHeight},i.positionInViewport=function(n,r,s){$i(n)&&(n=Ai(n));var a=n.getBoundingClientRect(),l=a[s?jo:Ko],u=r==null?l/2:r in Th?Th[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return s?(a.left+u)/Ut.innerWidth:(a.top+u)/Ut.innerHeight},i.killAll=function(n){if(wt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=oa.killAll||[];oa={},r.forEach(function(s){return s()})}},i}();yt.version="3.12.5";yt.saveStyles=function(i){return i?$c(i).forEach(function(e){if(e&&e.style){var t=Vi.indexOf(e);t>=0&&Vi.splice(t,5),Vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),dg())}}):Vi};yt.revert=function(i,e){return __(!i,e)};yt.create=function(i,e){return new yt(i,e)};yt.refresh=function(i){return i?bc():(Ja||yt.register())&&ko(!0)};yt.update=function(i){return++Pt.cache&&As(i===!0?2:0)};yt.clearScrollMemory=zT;yt.maxScroll=function(i,e){return Kr(i,e?xi:In)};yt.getScrollFunc=function(i,e){return po(Ai(i),e?xi:In)};yt.getById=function(i){return mg[i]};yt.getAll=function(){return wt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};yt.isScrolling=function(){return!!xr};yt.snapDirectional=g_;yt.addEventListener=function(i,e){var t=oa[i]||(oa[i]=[]);~t.indexOf(e)||t.push(e)};yt.removeEventListener=function(i,e){var t=oa[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};yt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(f,h){var p=[],m=[],g=He.delayedCall(r,function(){h(p,m),p=[],m=[]}).pause();return function(y){p.length||g.restart(!0),p.push(y.trigger),m.push(y),s<=p.length&&g.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&yi(e[l])&&l!=="onRefreshInit"?a(l,e[l]):e[l];return yi(s)&&(s=s(),zn(yt,"refresh",function(){return s=e.batchMax()})),$c(i).forEach(function(u){var f={};for(l in n)f[l]=n[l];f.trigger=u,t.push(yt.create(f))}),t};var Zx=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},wp=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Mn.isTouch?" pinch-zoom":""):"none",e===Lr&&i(on,t)},lf={auto:1,scroll:1},$2=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||He.core.getCache(s),l=ii(),u;if(!a._isScrollT||l-a._isScrollT>2e3){for(;s&&s!==on&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(lf[(u=pr(s)).overflowY]||lf[u.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!sa(s)&&(lf[(u=pr(s)).overflowY]||lf[u.overflowX]),a._isScrollT=l}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},kT=function(e,t,n,r){return Mn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&$2,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&zn(fn,Mn.eventTypes[0],Qx,!1,!0)},onDisable:function(){return Bn(fn,Mn.eventTypes[0],Qx,!0)}})},X2=/(input|label|select|textarea)/i,Jx,Qx=function(e){var t=X2.test(e.target.tagName);(t||Jx)&&(e._gsapAllow=!0,Jx=t)},q2=function(e){Uo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,l,u,f=Ai(e.target)||Lr,h=He.core.globals().ScrollSmoother,p=h&&h.get(),m=Zs&&(e.content&&Ai(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),g=po(f,In),y=po(f,xi),x=1,_=(Mn.isTouch&&Ut.visualViewport?Ut.visualViewport.scale*Ut.visualViewport.width:Ut.outerWidth)/Ut.innerWidth,v=0,w=yi(r)?function(){return r(l)}:function(){return r||2.8},b,E,C=kT(f,e.type,!0,s),R=function(){return E=!1},A=Vr,z=Vr,k=function(){u=Kr(f,In),z=Dc(Zs?1:0,u),n&&(A=Dc(0,Kr(f,xi))),b=Zo},M=function(){m._gsap.y=Mc(parseFloat(m._gsap.y)+g.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},U=function(){if(E){requestAnimationFrame(R);var ie=Mc(l.deltaY/2),oe=z(g.v-ie);if(m&&oe!==g.v+g.offset){g.offset=oe-g.v;var N=Mc((parseFloat(m&&m._gsap.y)||0)-g.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",m._gsap.y=N+"px",g.cacheID=Pt.cache,As()}return!0}g.offset&&M(),E=!0},V,ae,G,J,j=function(){k(),V.isActive()&&V.vars.scrollY>u&&(g()>u?V.progress(1)&&g(u):V.resetTo("scrollY",u))};return m&&He.set(m,{y:"+=0"}),e.ignoreCheck=function(te){return Zs&&te.type==="touchmove"&&U()||x>1.05&&te.type!=="touchstart"||l.isGesturing||te.touches&&te.touches.length>1},e.onPress=function(){E=!1;var te=x;x=Mc((Ut.visualViewport&&Ut.visualViewport.scale||1)/_),V.pause(),te!==x&&wp(f,x>1.01?!0:n?!1:"x"),ae=y(),G=g(),k(),b=Zo},e.onRelease=e.onGestureStart=function(te,ie){if(g.offset&&M(),!ie)J.restart(!0);else{Pt.cache++;var oe=w(),N,ce;n&&(N=y(),ce=N+oe*.05*-te.velocityX/.227,oe*=Zx(y,N,ce,Kr(f,xi)),V.vars.scrollX=A(ce)),N=g(),ce=N+oe*.05*-te.velocityY/.227,oe*=Zx(g,N,ce,Kr(f,In)),V.vars.scrollY=z(ce),V.invalidate().duration(oe).play(.01),(Zs&&V.vars.scrollY>=u||N>=u-1)&&He.to({},{onUpdate:j,duration:oe})}a&&a(te)},e.onWheel=function(){V._ts&&V.pause(),ii()-v>1e3&&(b=0,v=ii())},e.onChange=function(te,ie,oe,N,ce){if(Zo!==b&&k(),ie&&n&&y(A(N[2]===ie?ae+(te.startX-te.x):y()+ie-N[1])),oe){g.offset&&M();var Se=ce[2]===oe,Je=Se?G+te.startY-te.y:g()+oe-ce[1],ne=z(Je);Se&&Je!==ne&&(G+=ne-Je),g(ne)}(oe||ie)&&As()},e.onEnable=function(){wp(f,n?!1:"x"),yt.addEventListener("refresh",j),zn(Ut,"resize",j),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=y.smooth=!1),C.enable()},e.onDisable=function(){wp(f,!0),Bn(Ut,"resize",j),yt.removeEventListener("refresh",j),C.kill()},e.lockAxis=e.lockAxis!==!1,l=new Mn(e),l.iOS=Zs,Zs&&!g()&&g(1),Zs&&He.ticker.add(Vr),J=l._dc,V=He.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:HT(g,g(),function(){return V.pause()})},onUpdate:As,onComplete:J.vars.onComplete}),l};yt.sort=function(i){return wt.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};yt.observe=function(i){return new Mn(i)};yt.normalizeScroll=function(i){if(typeof i>"u")return pi;if(i===!0&&pi)return pi.enable();if(i===!1){pi&&pi.kill(),pi=i;return}var e=i instanceof Mn?i:q2(i);return pi&&pi.target===e.target&&pi.kill(),sa(e.target)&&(pi=e),e};yt.core={_getVelocityProp:ug,_inputObserver:kT,_scrollers:Pt,_proxies:Qr,bridge:{ss:function(){xr||aa("scrollStart"),xr=ii()},ref:function(){return ni}}};LT()&&He.registerPlugin(yt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var vg=function(i,e){return vg=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},vg(i,e)};function Y2(i,e){vg(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var es=function(){return es=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},es.apply(this,arguments)};function Bo(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function j2(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],a=0,l=s.length;a<l;a++,r++)n[r]=s[a];return n}var an=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function K2(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jn=function(i){try{return!!i()}catch{return!0}},Z2=jn,v_=!Z2(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),WT=v_,VT=Function.prototype,xg=VT.call,J2=WT&&VT.bind.bind(xg,xg),vn=WT?J2:function(i){return function(){return xg.apply(i,arguments)}},$T=vn,Q2=$T({}.toString),eO=$T("".slice),Rl=function(i){return eO(Q2(i),8,-1)},tO=vn,nO=jn,iO=Rl,Ap=Object,rO=tO("".split),x_=nO(function(){return!Ap("z").propertyIsEnumerable(0)})?function(i){return iO(i)==="String"?rO(i,""):Ap(i)}:Ap,Pl=function(i){return i==null},sO=Pl,oO=TypeError,Hh=function(i){if(sO(i))throw new oO("Can't call method on "+i);return i},aO=x_,lO=Hh,Ll=function(i){return aO(lO(i))},sc=function(i){return i&&i.Math===Math&&i},Qi=sc(typeof globalThis=="object"&&globalThis)||sc(typeof window=="object"&&window)||sc(typeof self=="object"&&self)||sc(typeof an=="object"&&an)||sc(typeof an=="object"&&an)||function(){return this}()||Function("return this")(),XT={exports:{}},cO=!1,ey=Qi,uO=Object.defineProperty,y_=function(i,e){try{uO(ey,i,{value:e,configurable:!0,writable:!0})}catch{ey[i]=e}return e},fO=Qi,hO=y_,ty="__core-js_shared__",ny=XT.exports=fO[ty]||hO(ty,{});(ny.versions||(ny.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var S_=XT.exports,iy=S_,qT=function(i,e){return iy[i]||(iy[i]=e||{})},dO=Hh,pO=Object,Zc=function(i){return pO(dO(i))},mO=vn,gO=Zc,_O=mO({}.hasOwnProperty),Ur=Object.hasOwn||function(e,t){return _O(gO(e),t)},vO=vn,xO=0,yO=Math.random(),SO=vO(1 .toString),E_=function(i){return"Symbol("+(i===void 0?"":i)+")_"+SO(++xO+yO,36)},EO=typeof navigator<"u"&&String(navigator.userAgent)||"",YT=Qi,Cp=EO,ry=YT.process,sy=YT.Deno,oy=ry&&ry.versions||sy&&sy.version,ay=oy&&oy.v8,Dr,bh;ay&&(Dr=ay.split("."),bh=Dr[0]>0&&Dr[0]<4?1:+(Dr[0]+Dr[1]));!bh&&Cp&&(Dr=Cp.match(/Edge\/(\d+)/),(!Dr||Dr[1]>=74)&&(Dr=Cp.match(/Chrome\/(\d+)/),Dr&&(bh=+Dr[1])));var MO=bh,ly=MO,TO=jn,bO=Qi,wO=bO.String,jT=!!Object.getOwnPropertySymbols&&!TO(function(){var i=Symbol("symbol detection");return!wO(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&ly&&ly<41}),AO=jT,KT=AO&&!Symbol.sham&&typeof Symbol.iterator=="symbol",CO=Qi,RO=qT,cy=Ur,PO=E_,LO=jT,DO=KT,rl=CO.Symbol,Rp=RO("wks"),IO=DO?rl.for||rl:rl&&rl.withoutSetter||PO,Er=function(i){return cy(Rp,i)||(Rp[i]=LO&&cy(rl,i)?rl[i]:IO("Symbol."+i)),Rp[i]},Pp=typeof document=="object"&&document.all,Kn=typeof Pp>"u"&&Pp!==void 0?function(i){return typeof i=="function"||i===Pp}:function(i){return typeof i=="function"},OO=Kn,Ui=function(i){return typeof i=="object"?i!==null:OO(i)},UO=Ui,NO=String,FO=TypeError,is=function(i){if(UO(i))return i;throw new FO(NO(i)+" is not an object")},ZT={},BO=jn,er=!BO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),zO=er,GO=jn,JT=zO&&GO(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Nr={},HO=Qi,uy=Ui,yg=HO.document,kO=uy(yg)&&uy(yg.createElement),QT=function(i){return kO?yg.createElement(i):{}},WO=er,VO=jn,$O=QT,eb=!WO&&!VO(function(){return Object.defineProperty($O("div"),"a",{get:function(){return 7}}).a!==7}),XO=v_,cf=Function.prototype.call,Is=XO?cf.bind(cf):function(){return cf.apply(cf,arguments)},Lp=Qi,qO=Kn,YO=function(i){return qO(i)?i:void 0},Jc=function(i,e){return arguments.length<2?YO(Lp[i]):Lp[i]&&Lp[i][e]},jO=vn,M_=jO({}.isPrototypeOf),KO=Jc,ZO=Kn,JO=M_,QO=KT,eU=Object,tb=QO?function(i){return typeof i=="symbol"}:function(i){var e=KO("Symbol");return ZO(e)&&JO(e.prototype,eU(i))},tU=String,T_=function(i){try{return tU(i)}catch{return"Object"}},nU=Kn,iU=T_,rU=TypeError,Qc=function(i){if(nU(i))return i;throw new rU(iU(i)+" is not a function")},sU=Qc,oU=Pl,b_=function(i,e){var t=i[e];return oU(t)?void 0:sU(t)},Dp=Is,Ip=Kn,Op=Ui,aU=TypeError,lU=function(i,e){var t,n;if(e==="string"&&Ip(t=i.toString)&&!Op(n=Dp(t,i))||Ip(t=i.valueOf)&&!Op(n=Dp(t,i))||e!=="string"&&Ip(t=i.toString)&&!Op(n=Dp(t,i)))return n;throw new aU("Can't convert object to primitive value")},cU=Is,fy=Ui,hy=tb,uU=b_,fU=lU,hU=Er,dU=TypeError,pU=hU("toPrimitive"),mU=function(i,e){if(!fy(i)||hy(i))return i;var t=uU(i,pU),n;if(t){if(e===void 0&&(e="default"),n=cU(t,i,e),!fy(n)||hy(n))return n;throw new dU("Can't convert object to primitive value")}return e===void 0&&(e="number"),fU(i,e)},gU=mU,_U=tb,nb=function(i){var e=gU(i,"string");return _U(e)?e:e+""},vU=er,xU=eb,yU=JT,uf=is,dy=nb,SU=TypeError,Up=Object.defineProperty,EU=Object.getOwnPropertyDescriptor,Np="enumerable",Fp="configurable",Bp="writable";Nr.f=vU?yU?function(e,t,n){if(uf(e),t=dy(t),uf(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Bp in n&&!n[Bp]){var r=EU(e,t);r&&r[Bp]&&(e[t]=n.value,n={configurable:Fp in n?n[Fp]:r[Fp],enumerable:Np in n?n[Np]:r[Np],writable:!1})}return Up(e,t,n)}:Up:function(e,t,n){if(uf(e),t=dy(t),uf(n),xU)try{return Up(e,t,n)}catch{}if("get"in n||"set"in n)throw new SU("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var MU=Math.ceil,TU=Math.floor,bU=Math.trunc||function(e){var t=+e;return(t>0?TU:MU)(t)},wU=bU,w_=function(i){var e=+i;return e!==e||e===0?0:wU(e)},AU=w_,CU=Math.max,RU=Math.min,PU=function(i,e){var t=AU(i);return t<0?CU(t+e,0):RU(t,e)},LU=w_,DU=Math.min,IU=function(i){var e=LU(i);return e>0?DU(e,9007199254740991):0},OU=IU,kh=function(i){return OU(i.length)},UU=Ll,NU=PU,FU=kh,py=function(i){return function(e,t,n){var r=UU(e),s=FU(r);if(s===0)return!i&&-1;var a=NU(n,s),l;if(i&&t!==t){for(;s>a;)if(l=r[a++],l!==l)return!0}else for(;s>a;a++)if((i||a in r)&&r[a]===t)return i||a||0;return!i&&-1}},BU={includes:py(!0),indexOf:py(!1)},Wh={},zU=vn,zp=Ur,GU=Ll,HU=BU.indexOf,kU=Wh,my=zU([].push),ib=function(i,e){var t=GU(i),n=0,r=[],s;for(s in t)!zp(kU,s)&&zp(t,s)&&my(r,s);for(;e.length>n;)zp(t,s=e[n++])&&(~HU(r,s)||my(r,s));return r},A_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],WU=ib,VU=A_,rb=Object.keys||function(e){return WU(e,VU)},$U=er,XU=JT,qU=Nr,YU=is,jU=Ll,KU=rb;ZT.f=$U&&!XU?Object.defineProperties:function(e,t){YU(e);for(var n=jU(t),r=KU(t),s=r.length,a=0,l;s>a;)qU.f(e,l=r[a++],n[l]);return e};var ZU=Jc,JU=ZU("document","documentElement"),QU=qT,e3=E_,gy=QU("keys"),C_=function(i){return gy[i]||(gy[i]=e3(i))},t3=is,n3=ZT,_y=A_,i3=Wh,r3=JU,s3=QT,o3=C_,vy=">",xy="<",Sg="prototype",Eg="script",sb=o3("IE_PROTO"),Gp=function(){},ob=function(i){return xy+Eg+vy+i+xy+"/"+Eg+vy},yy=function(i){i.write(ob("")),i.close();var e=i.parentWindow.Object;return i=null,e},a3=function(){var i=s3("iframe"),e="java"+Eg+":",t;return i.style.display="none",r3.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(ob("document.F=Object")),t.close(),t.F},ff,rh=function(){try{ff=new ActiveXObject("htmlfile")}catch{}rh=typeof document<"u"?document.domain&&ff?yy(ff):a3():yy(ff);for(var i=_y.length;i--;)delete rh[Sg][_y[i]];return rh()};i3[sb]=!0;var R_=Object.create||function(e,t){var n;return e!==null?(Gp[Sg]=t3(e),n=new Gp,Gp[Sg]=null,n[sb]=e):n=rh(),t===void 0?n:n3.f(n,t)},l3=Er,c3=R_,u3=Nr.f,Mg=l3("unscopables"),Tg=Array.prototype;Tg[Mg]===void 0&&u3(Tg,Mg,{configurable:!0,value:c3(null)});var f3=function(i){Tg[Mg][i]=!0},eu={},h3=Qi,d3=Kn,Sy=h3.WeakMap,ab=d3(Sy)&&/native code/.test(String(Sy)),Vh=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},p3=er,m3=Nr,g3=Vh,P_=p3?function(i,e,t){return m3.f(i,e,g3(1,t))}:function(i,e,t){return i[e]=t,i},_3=ab,lb=Qi,v3=Ui,x3=P_,Hp=Ur,kp=S_,y3=C_,S3=Wh,Ey="Object already initialized",bg=lb.TypeError,E3=lb.WeakMap,wh,qc,Ah,M3=function(i){return Ah(i)?qc(i):wh(i,{})},T3=function(i){return function(e){var t;if(!v3(e)||(t=qc(e)).type!==i)throw new bg("Incompatible receiver, "+i+" required");return t}};if(_3||kp.state){var Hr=kp.state||(kp.state=new E3);Hr.get=Hr.get,Hr.has=Hr.has,Hr.set=Hr.set,wh=function(i,e){if(Hr.has(i))throw new bg(Ey);return e.facade=i,Hr.set(i,e),e},qc=function(i){return Hr.get(i)||{}},Ah=function(i){return Hr.has(i)}}else{var Oa=y3("state");S3[Oa]=!0,wh=function(i,e){if(Hp(i,Oa))throw new bg(Ey);return e.facade=i,x3(i,Oa,e),e},qc=function(i){return Hp(i,Oa)?i[Oa]:{}},Ah=function(i){return Hp(i,Oa)}}var Dl={set:wh,get:qc,has:Ah,enforce:M3,getterFor:T3},L_={},D_={},cb={}.propertyIsEnumerable,ub=Object.getOwnPropertyDescriptor,b3=ub&&!cb.call({1:2},1);D_.f=b3?function(e){var t=ub(this,e);return!!t&&t.enumerable}:cb;var w3=er,A3=Is,C3=D_,R3=Vh,P3=Ll,L3=nb,D3=Ur,I3=eb,My=Object.getOwnPropertyDescriptor;L_.f=w3?My:function(e,t){if(e=P3(e),t=L3(t),I3)try{return My(e,t)}catch{}if(D3(e,t))return R3(!A3(C3.f,e,t),e[t])};var fb={exports:{}},wg=er,O3=Ur,hb=Function.prototype,U3=wg&&Object.getOwnPropertyDescriptor,I_=O3(hb,"name"),N3=I_&&(function(){}).name==="something",F3=I_&&(!wg||wg&&U3(hb,"name").configurable),db={EXISTS:I_,PROPER:N3,CONFIGURABLE:F3},B3=vn,z3=Kn,Ag=S_,G3=B3(Function.toString);z3(Ag.inspectSource)||(Ag.inspectSource=function(i){return G3(i)});var pb=Ag.inspectSource,O_=vn,H3=jn,k3=Kn,hf=Ur,Cg=er,W3=db.CONFIGURABLE,V3=pb,mb=Dl,$3=mb.enforce,X3=mb.get,Ty=String,sh=Object.defineProperty,q3=O_("".slice),Y3=O_("".replace),j3=O_([].join),K3=Cg&&!H3(function(){return sh(function(){},"length",{value:8}).length!==8}),Z3=String(String).split("String"),J3=fb.exports=function(i,e,t){q3(Ty(e),0,7)==="Symbol("&&(e="["+Y3(Ty(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!hf(i,"name")||W3&&i.name!==e)&&(Cg?sh(i,"name",{value:e,configurable:!0}):i.name=e),K3&&t&&hf(t,"arity")&&i.length!==t.arity&&sh(i,"length",{value:t.arity});try{t&&hf(t,"constructor")&&t.constructor?Cg&&sh(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=$3(i);return hf(n,"source")||(n.source=j3(Z3,typeof e=="string"?e:"")),i};Function.prototype.toString=J3(function(){return k3(this)&&X3(this).source||V3(this)},"toString");var gb=fb.exports,Q3=Kn,eN=Nr,tN=gb,nN=y_,Il=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(Q3(t)&&tN(t,s,n),n.global)r?i[e]=t:nN(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:eN.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},$h={},iN=ib,rN=A_,sN=rN.concat("length","prototype");$h.f=Object.getOwnPropertyNames||function(e){return iN(e,sN)};var U_={};U_.f=Object.getOwnPropertySymbols;var oN=Jc,aN=vn,lN=$h,cN=U_,uN=is,fN=aN([].concat),hN=oN("Reflect","ownKeys")||function(e){var t=lN.f(uN(e)),n=cN.f;return n?fN(t,n(e)):t},by=Ur,dN=hN,pN=L_,mN=Nr,gN=function(i,e,t){for(var n=dN(e),r=mN.f,s=pN.f,a=0;a<n.length;a++){var l=n[a];!by(i,l)&&!(t&&by(t,l))&&r(i,l,s(e,l))}},_N=jn,vN=Kn,xN=/#|\.prototype\./,tu=function(i,e){var t=SN[yN(i)];return t===MN?!0:t===EN?!1:vN(e)?_N(e):!!e},yN=tu.normalize=function(i){return String(i).replace(xN,".").toLowerCase()},SN=tu.data={},EN=tu.NATIVE="N",MN=tu.POLYFILL="P",_b=tu,df=Qi,TN=L_.f,bN=P_,wN=Il,AN=y_,CN=gN,RN=_b,Ol=function(i,e){var t=i.target,n=i.global,r=i.stat,s,a,l,u,f,h;if(n?a=df:r?a=df[t]||AN(t,{}):a=df[t]&&df[t].prototype,a)for(l in e){if(f=e[l],i.dontCallGetSet?(h=TN(a,l),u=h&&h.value):u=a[l],s=RN(n?l:t+(r?".":"#")+l,i.forced),!s&&u!==void 0){if(typeof f==typeof u)continue;CN(f,u)}(i.sham||u&&u.sham)&&bN(f,"sham",!0),wN(a,l,f,i)}},PN=jn,LN=!PN(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),DN=Ur,IN=Kn,ON=Zc,UN=C_,NN=LN,wy=UN("IE_PROTO"),Rg=Object,FN=Rg.prototype,vb=NN?Rg.getPrototypeOf:function(i){var e=ON(i);if(DN(e,wy))return e[wy];var t=e.constructor;return IN(t)&&e instanceof t?t.prototype:e instanceof Rg?FN:null},BN=jn,zN=Kn,GN=Ui,Ay=vb,HN=Il,kN=Er,Pg=kN("iterator"),xb=!1,la,Wp,Vp;[].keys&&(Vp=[].keys(),"next"in Vp?(Wp=Ay(Ay(Vp)),Wp!==Object.prototype&&(la=Wp)):xb=!0);var WN=!GN(la)||BN(function(){var i={};return la[Pg].call(i)!==i});WN&&(la={});zN(la[Pg])||HN(la,Pg,function(){return this});var yb={IteratorPrototype:la,BUGGY_SAFARI_ITERATORS:xb},VN=Nr.f,$N=Ur,XN=Er,Cy=XN("toStringTag"),N_=function(i,e,t){i&&!t&&(i=i.prototype),i&&!$N(i,Cy)&&VN(i,Cy,{configurable:!0,value:e})},qN=yb.IteratorPrototype,YN=R_,jN=Vh,KN=N_,ZN=eu,JN=function(){return this},QN=function(i,e,t,n){var r=e+" Iterator";return i.prototype=YN(qN,{next:jN(+!n,t)}),KN(i,r,!1),ZN[r]=JN,i},eF=vn,tF=Qc,nF=function(i,e,t){try{return eF(tF(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},iF=Ui,rF=function(i){return iF(i)||i===null},sF=rF,oF=String,aF=TypeError,lF=function(i){if(sF(i))return i;throw new aF("Can't set "+oF(i)+" as a prototype")},cF=nF,uF=is,fF=lF,Sb=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=cF(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return uF(r),fF(s),i?t(r,s):r.__proto__=s,r}}():void 0),hF=Ol,dF=Is,Eb=db,pF=Kn,mF=QN,Ry=vb,Py=Sb,gF=N_,_F=P_,$p=Il,vF=Er,xF=eu,Mb=yb,yF=Eb.PROPER,SF=Eb.CONFIGURABLE,Ly=Mb.IteratorPrototype,pf=Mb.BUGGY_SAFARI_ITERATORS,oc=vF("iterator"),Dy="keys",ac="values",Iy="entries",EF=function(){return this},F_=function(i,e,t,n,r,s,a){mF(t,e,n);var l=function(v){if(v===r&&m)return m;if(!pf&&v&&v in h)return h[v];switch(v){case Dy:return function(){return new t(this,v)};case ac:return function(){return new t(this,v)};case Iy:return function(){return new t(this,v)}}return function(){return new t(this)}},u=e+" Iterator",f=!1,h=i.prototype,p=h[oc]||h["@@iterator"]||r&&h[r],m=!pf&&p||l(r),g=e==="Array"&&h.entries||p,y,x,_;if(g&&(y=Ry(g.call(new i)),y!==Object.prototype&&y.next&&(Ry(y)!==Ly&&(Py?Py(y,Ly):pF(y[oc])||$p(y,oc,EF)),gF(y,u,!0))),yF&&r===ac&&p&&p.name!==ac&&(SF?_F(h,"name",ac):(f=!0,m=function(){return dF(p,this)})),r)if(x={values:l(ac),keys:s?m:l(Dy),entries:l(Iy)},a)for(_ in x)(pf||f||!(_ in h))&&$p(h,_,x[_]);else hF({target:e,proto:!0,forced:pf||f},x);return h[oc]!==m&&$p(h,oc,m,{name:r}),xF[e]=m,x},B_=function(i,e){return{value:i,done:e}},MF=Ll,z_=f3,Oy=eu,Tb=Dl,TF=Nr.f,bF=F_,mf=B_,wF=er,bb="Array Iterator",AF=Tb.set,CF=Tb.getterFor(bb);bF(Array,"Array",function(i,e){AF(this,{type:bb,target:MF(i),index:0,kind:e})},function(){var i=CF(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,mf(void 0,!0);switch(i.kind){case"keys":return mf(t,!1);case"values":return mf(e[t],!1)}return mf([t,e[t]],!1)},"values");var Uy=Oy.Arguments=Oy.Array;z_("keys");z_("values");z_("entries");if(wF&&Uy.name!=="values")try{TF(Uy,"name",{value:"values"})}catch{}var wb={exports:{}},Ab={},RF=vn,PF=RF([].slice),LF=Rl,DF=Ll,Cb=$h.f,IF=PF,Rb=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],OF=function(i){try{return Cb(i)}catch{return IF(Rb)}};Ab.f=function(e){return Rb&&LF(e)==="Window"?OF(e):Cb(DF(e))};var UF=jn,NF=UF(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),FF=jn,BF=Ui,zF=Rl,Ny=NF,oh=Object.isExtensible,GF=FF(function(){oh(1)}),HF=GF||Ny?function(e){return!BF(e)||Ny&&zF(e)==="ArrayBuffer"?!1:oh?oh(e):!0}:oh,kF=jn,Pb=!kF(function(){return Object.isExtensible(Object.preventExtensions({}))}),WF=Ol,VF=vn,$F=Wh,XF=Ui,G_=Ur,qF=Nr.f,Fy=$h,YF=Ab,H_=HF,jF=E_,KF=Pb,Lb=!1,Ps=jF("meta"),ZF=0,k_=function(i){qF(i,Ps,{value:{objectID:"O"+ZF++,weakData:{}}})},JF=function(i,e){if(!XF(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!G_(i,Ps)){if(!H_(i))return"F";if(!e)return"E";k_(i)}return i[Ps].objectID},QF=function(i,e){if(!G_(i,Ps)){if(!H_(i))return!0;if(!e)return!1;k_(i)}return i[Ps].weakData},eB=function(i){return KF&&Lb&&H_(i)&&!G_(i,Ps)&&k_(i),i},tB=function(){nB.enable=function(){},Lb=!0;var i=Fy.f,e=VF([].splice),t={};t[Ps]=1,i(t).length&&(Fy.f=function(n){for(var r=i(n),s=0,a=r.length;s<a;s++)if(r[s]===Ps){e(r,s,1);break}return r},WF({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:YF.f}))},nB=wb.exports={enable:tB,fastKey:JF,getWeakData:QF,onFreeze:eB};$F[Ps]=!0;var Xh=wb.exports,iB=Rl,rB=vn,sB=function(i){if(iB(i)==="Function")return rB(i)},By=sB,oB=Qc,aB=v_,lB=By(By.bind),qh=function(i,e){return oB(i),e===void 0?i:aB?lB(i,e):function(){return i.apply(e,arguments)}},cB=Er,uB=eu,fB=cB("iterator"),hB=Array.prototype,Db=function(i){return i!==void 0&&(uB.Array===i||hB[fB]===i)},dB=Er,pB=dB("toStringTag"),Ib={};Ib[pB]="z";var W_=String(Ib)==="[object z]",mB=W_,gB=Kn,ah=Rl,_B=Er,vB=_B("toStringTag"),xB=Object,yB=ah(function(){return arguments}())==="Arguments",SB=function(i,e){try{return i[e]}catch{}},Yh=mB?ah:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=SB(e=xB(i),vB))=="string"?t:yB?ah(e):(n=ah(e))==="Object"&&gB(e.callee)?"Arguments":n},EB=Yh,zy=b_,MB=Pl,TB=eu,bB=Er,wB=bB("iterator"),V_=function(i){if(!MB(i))return zy(i,wB)||zy(i,"@@iterator")||TB[EB(i)]},AB=Is,CB=Qc,RB=is,PB=T_,LB=V_,DB=TypeError,Ob=function(i,e){var t=arguments.length<2?LB(i):e;if(CB(t))return RB(AB(t,i));throw new DB(PB(i)+" is not iterable")},IB=Is,Gy=is,OB=b_,Ub=function(i,e,t){var n,r;Gy(i);try{if(n=OB(i,"return"),!n){if(e==="throw")throw t;return t}n=IB(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return Gy(n),t},UB=qh,NB=Is,FB=is,BB=T_,zB=Db,GB=kh,Hy=M_,HB=Ob,kB=V_,ky=Ub,WB=TypeError,lh=function(i,e){this.stopped=i,this.result=e},Wy=lh.prototype,jh=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),a=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),u=UB(e,n),f,h,p,m,g,y,x,_=function(w){return f&&ky(f,"normal",w),new lh(!0,w)},v=function(w){return r?(FB(w),l?u(w[0],w[1],_):u(w[0],w[1])):l?u(w,_):u(w)};if(s)f=i.iterator;else if(a)f=i;else{if(h=kB(i),!h)throw new WB(BB(i)+" is not iterable");if(zB(h)){for(p=0,m=GB(i);m>p;p++)if(g=v(i[p]),g&&Hy(Wy,g))return g;return new lh(!1)}f=HB(i,h)}for(y=s?i.next:f.next;!(x=NB(y,f)).done;){try{g=v(x.value)}catch(w){ky(f,"throw",w)}if(typeof g=="object"&&g&&Hy(Wy,g))return g}return new lh(!1)},VB=M_,$B=TypeError,$_=function(i,e){if(VB(e,i))return i;throw new $B("Incorrect invocation")},XB=Er,Nb=XB("iterator"),Fb=!1;try{var qB=0,Vy={next:function(){return{done:!!qB++}},return:function(){Fb=!0}};Vy[Nb]=function(){return this},Array.from(Vy,function(){throw 2})}catch{}var Bb=function(i,e){try{if(!e&&!Fb)return!1}catch{return!1}var t=!1;try{var n={};n[Nb]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},YB=Kn,jB=Ui,$y=Sb,KB=function(i,e,t){var n,r;return $y&&YB(n=e.constructor)&&n!==t&&jB(r=n.prototype)&&r!==t.prototype&&$y(i,r),i},ZB=Ol,JB=Qi,QB=vn,Xy=_b,ez=Il,tz=Xh,nz=jh,iz=$_,rz=Kn,sz=Pl,Xp=Ui,qp=jn,oz=Bb,az=N_,lz=KB,X_=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",a=JB[i],l=a&&a.prototype,u=a,f={},h=function(v){var w=QB(l[v]);ez(l,v,v==="add"?function(E){return w(this,E===0?0:E),this}:v==="delete"?function(b){return r&&!Xp(b)?!1:w(this,b===0?0:b)}:v==="get"?function(E){return r&&!Xp(E)?void 0:w(this,E===0?0:E)}:v==="has"?function(E){return r&&!Xp(E)?!1:w(this,E===0?0:E)}:function(E,C){return w(this,E===0?0:E,C),this})},p=Xy(i,!rz(a)||!(r||l.forEach&&!qp(function(){new a().entries().next()})));if(p)u=t.getConstructor(e,i,n,s),tz.enable();else if(Xy(i,!0)){var m=new u,g=m[s](r?{}:-0,1)!==m,y=qp(function(){m.has(1)}),x=oz(function(v){new a(v)}),_=!r&&qp(function(){for(var v=new a,w=5;w--;)v[s](w,w);return!v.has(-0)});x||(u=e(function(v,w){iz(v,l);var b=lz(new a,v,u);return sz(w)||nz(w,b[s],{that:b,AS_ENTRIES:n}),b}),u.prototype=l,l.constructor=u),(y||_)&&(h("delete"),h("has"),n&&h("get")),(_||g)&&h(s),r&&l.clear&&delete l.clear}return f[i]=u,ZB({global:!0,constructor:!0,forced:u!==a},f),az(u,i),r||t.setStrong(u,i,n),u},qy=gb,cz=Nr,zb=function(i,e,t){return t.get&&qy(t.get,e,{getter:!0}),t.set&&qy(t.set,e,{setter:!0}),cz.f(i,e,t)},uz=Il,q_=function(i,e,t){for(var n in e)uz(i,n,e[n],t);return i},fz=Jc,hz=zb,dz=Er,pz=er,Yy=dz("species"),mz=function(i){var e=fz(i);pz&&e&&!e[Yy]&&hz(e,Yy,{configurable:!0,get:function(){return this}})},jy=R_,gz=zb,Ky=q_,_z=qh,vz=$_,xz=Pl,yz=jh,Sz=F_,gf=B_,Ez=mz,lc=er,Zy=Xh.fastKey,Gb=Dl,Jy=Gb.set,Yp=Gb.getterFor,Hb={getConstructor:function(i,e,t,n){var r=i(function(f,h){vz(f,s),Jy(f,{type:e,index:jy(null),first:void 0,last:void 0,size:0}),lc||(f.size=0),xz(h)||yz(h,f[n],{that:f,AS_ENTRIES:t})}),s=r.prototype,a=Yp(e),l=function(f,h,p){var m=a(f),g=u(f,h),y,x;return g?g.value=p:(m.last=g={index:x=Zy(h,!0),key:h,value:p,previous:y=m.last,next:void 0,removed:!1},m.first||(m.first=g),y&&(y.next=g),lc?m.size++:f.size++,x!=="F"&&(m.index[x]=g)),f},u=function(f,h){var p=a(f),m=Zy(h),g;if(m!=="F")return p.index[m];for(g=p.first;g;g=g.next)if(g.key===h)return g};return Ky(s,{clear:function(){for(var h=this,p=a(h),m=p.first;m;)m.removed=!0,m.previous&&(m.previous=m.previous.next=void 0),m=m.next;p.first=p.last=void 0,p.index=jy(null),lc?p.size=0:h.size=0},delete:function(f){var h=this,p=a(h),m=u(h,f);if(m){var g=m.next,y=m.previous;delete p.index[m.index],m.removed=!0,y&&(y.next=g),g&&(g.previous=y),p.first===m&&(p.first=g),p.last===m&&(p.last=y),lc?p.size--:h.size--}return!!m},forEach:function(h){for(var p=a(this),m=_z(h,arguments.length>1?arguments[1]:void 0),g;g=g?g.next:p.first;)for(m(g.value,g.key,this);g&&g.removed;)g=g.previous},has:function(h){return!!u(this,h)}}),Ky(s,t?{get:function(h){var p=u(this,h);return p&&p.value},set:function(h,p){return l(this,h===0?0:h,p)}}:{add:function(h){return l(this,h=h===0?0:h,h)}}),lc&&gz(s,"size",{configurable:!0,get:function(){return a(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=Yp(e),s=Yp(n);Sz(i,e,function(a,l){Jy(this,{type:n,target:a,state:r(a),kind:l,last:void 0})},function(){for(var a=s(this),l=a.kind,u=a.last;u&&u.removed;)u=u.previous;return!a.target||!(a.last=u=u?u.next:a.state.first)?(a.target=void 0,gf(void 0,!0)):gf(l==="keys"?u.key:l==="values"?u.value:[u.key,u.value],!1)},t?"entries":"values",!t,!0),Ez(e)}},Mz=X_,Tz=Hb;Mz("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Tz);var _f=vn,cc=Map.prototype,bz={Map,set:_f(cc.set),get:_f(cc.get),has:_f(cc.has),remove:_f(cc.delete),proto:cc},wz=Ol,Az=vn,Cz=Qc,Rz=Hh,Pz=jh,Kh=bz,Lz=cO,Dz=Kh.Map,Iz=Kh.has,Oz=Kh.get,Uz=Kh.set,Nz=Az([].push);wz({target:"Map",stat:!0,forced:Lz},{groupBy:function(e,t){Rz(e),Cz(t);var n=new Dz,r=0;return Pz(e,function(s){var a=t(s,r++);Iz(n,a)?Nz(Oz(n,a),s):Uz(n,a,[s])}),n}});var Fz=W_,Bz=Yh,zz=Fz?{}.toString:function(){return"[object "+Bz(this)+"]"},Gz=W_,Hz=Il,kz=zz;Gz||Hz(Object.prototype,"toString",kz,{unsafe:!0});var Wz=Yh,Vz=String,kb=function(i){if(Wz(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Vz(i)},Y_=vn,$z=w_,Xz=kb,qz=Hh,Yz=Y_("".charAt),Qy=Y_("".charCodeAt),jz=Y_("".slice),eS=function(i){return function(e,t){var n=Xz(qz(e)),r=$z(t),s=n.length,a,l;return r<0||r>=s?i?"":void 0:(a=Qy(n,r),a<55296||a>56319||r+1===s||(l=Qy(n,r+1))<56320||l>57343?i?Yz(n,r):a:i?jz(n,r,r+2):(a-55296<<10)+(l-56320)+65536)}},Kz={codeAt:eS(!1),charAt:eS(!0)},Zz=Kz.charAt,Jz=kb,Wb=Dl,Qz=F_,tS=B_,Vb="String Iterator",eG=Wb.set,tG=Wb.getterFor(Vb);Qz(String,"String",function(i){eG(this,{type:Vb,string:Jz(i),index:0})},function(){var e=tG(this),t=e.string,n=e.index,r;return n>=t.length?tS(void 0,!0):(r=Zz(t,n),e.index+=r.length,tS(r,!1))});var nG=Qi,nu=nG,iG=nu;iG.Map;var rG=X_,sG=Hb;rG("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},sG);var oG=nu;oG.Set;var aG=Rl,lG=Array.isArray||function(e){return aG(e)==="Array"},cG=vn,uG=jn,$b=Kn,fG=Yh,hG=Jc,dG=pb,Xb=function(){},qb=hG("Reflect","construct"),j_=/^\s*(?:class|function)\b/,pG=cG(j_.exec),mG=!j_.test(Xb),uc=function(e){if(!$b(e))return!1;try{return qb(Xb,[],e),!0}catch{return!1}},Yb=function(e){if(!$b(e))return!1;switch(fG(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return mG||!!pG(j_,dG(e))}catch{return!0}};Yb.sham=!0;var jb=!qb||uG(function(){var i;return uc(uc.call)||!uc(Object)||!uc(function(){i=!0})||i})?Yb:uc,nS=lG,gG=jb,_G=Ui,vG=Er,xG=vG("species"),iS=Array,yG=function(i){var e;return nS(i)&&(e=i.constructor,gG(e)&&(e===iS||nS(e.prototype))?e=void 0:_G(e)&&(e=e[xG],e===null&&(e=void 0))),e===void 0?iS:e},SG=yG,EG=function(i,e){return new(SG(i))(e===0?0:e)},MG=qh,TG=vn,bG=x_,wG=Zc,AG=kh,CG=EG,rS=TG([].push),Ws=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,s=i===6,a=i===7,l=i===5||s;return function(u,f,h,p){for(var m=wG(u),g=bG(m),y=AG(g),x=MG(f,h),_=0,v=p||CG,w=e?v(u,y):t||a?v(u,0):void 0,b,E;y>_;_++)if((l||_ in g)&&(b=g[_],E=x(b,_,m),i))if(e)w[_]=E;else if(E)switch(i){case 3:return!0;case 5:return b;case 6:return _;case 2:rS(w,b)}else switch(i){case 4:return!1;case 7:rS(w,b)}return s?-1:n||r?r:w}},RG={forEach:Ws(0),map:Ws(1),filter:Ws(2),some:Ws(3),every:Ws(4),find:Ws(5),findIndex:Ws(6),filterReject:Ws(7)},PG=vn,sS=q_,vf=Xh.getWeakData,LG=$_,DG=is,IG=Pl,jp=Ui,OG=jh,Kb=RG,oS=Ur,Zb=Dl,UG=Zb.set,NG=Zb.getterFor,FG=Kb.find,BG=Kb.findIndex,zG=PG([].splice),GG=0,xf=function(i){return i.frozen||(i.frozen=new Jb)},Jb=function(){this.entries=[]},Kp=function(i,e){return FG(i.entries,function(t){return t[0]===e})};Jb.prototype={get:function(i){var e=Kp(this,i);if(e)return e[1]},has:function(i){return!!Kp(this,i)},set:function(i,e){var t=Kp(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=BG(this.entries,function(t){return t[0]===i});return~e&&zG(this.entries,e,1),!!~e}};var HG={getConstructor:function(i,e,t,n){var r=i(function(u,f){LG(u,s),UG(u,{type:e,id:GG++,frozen:void 0}),IG(f)||OG(f,u[n],{that:u,AS_ENTRIES:t})}),s=r.prototype,a=NG(e),l=function(u,f,h){var p=a(u),m=vf(DG(f),!0);return m===!0?xf(p).set(f,h):m[p.id]=h,u};return sS(s,{delete:function(u){var f=a(this);if(!jp(u))return!1;var h=vf(u);return h===!0?xf(f).delete(u):h&&oS(h,f.id)&&delete h[f.id]},has:function(f){var h=a(this);if(!jp(f))return!1;var p=vf(f);return p===!0?xf(h).has(f):p&&oS(p,h.id)}}),sS(s,t?{get:function(f){var h=a(this);if(jp(f)){var p=vf(f);return p===!0?xf(h).get(f):p?p[h.id]:void 0}},set:function(f,h){return l(this,f,h)}}:{add:function(f){return l(this,f,!0)}}),r}},kG=Pb,aS=Qi,ch=vn,lS=q_,WG=Xh,VG=X_,Qb=HG,yf=Ui,Sf=Dl.enforce,$G=jn,XG=ab,iu=Object,qG=Array.isArray,Ef=iu.isExtensible,e1=iu.isFrozen,YG=iu.isSealed,t1=iu.freeze,jG=iu.seal,KG=!aS.ActiveXObject&&"ActiveXObject"in aS,fc,n1=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},i1=VG("WeakMap",n1,Qb),el=i1.prototype,uh=ch(el.set),ZG=function(){return kG&&$G(function(){var i=t1([]);return uh(new i1,i,1),!e1(i)})};if(XG)if(KG){fc=Qb.getConstructor(n1,"WeakMap",!0),WG.enable();var cS=ch(el.delete),Mf=ch(el.has),uS=ch(el.get);lS(el,{delete:function(i){if(yf(i)&&!Ef(i)){var e=Sf(this);return e.frozen||(e.frozen=new fc),cS(this,i)||e.frozen.delete(i)}return cS(this,i)},has:function(e){if(yf(e)&&!Ef(e)){var t=Sf(this);return t.frozen||(t.frozen=new fc),Mf(this,e)||t.frozen.has(e)}return Mf(this,e)},get:function(e){if(yf(e)&&!Ef(e)){var t=Sf(this);return t.frozen||(t.frozen=new fc),Mf(this,e)?uS(this,e):t.frozen.get(e)}return uS(this,e)},set:function(e,t){if(yf(e)&&!Ef(e)){var n=Sf(this);n.frozen||(n.frozen=new fc),Mf(this,e)?uh(this,e,t):n.frozen.set(e,t)}else uh(this,e,t);return this}})}else ZG()&&lS(el,{set:function(e,t){var n;return qG(e)&&(e1(e)?n=t1:YG(e)&&(n=jG)),uh(this,e,t),n&&n(e),this}});var JG=nu;JG.WeakMap;var QG=is,eH=Ub,tH=function(i,e,t,n){try{return n?e(QG(t)[0],t[1]):e(t)}catch(r){eH(i,"throw",r)}},nH=er,iH=Nr,rH=Vh,sH=function(i,e,t){nH?iH.f(i,e,rH(0,t)):i[e]=t},oH=qh,aH=Is,lH=Zc,cH=tH,uH=Db,fH=jb,hH=kh,fS=sH,dH=Ob,pH=V_,hS=Array,mH=function(e){var t=lH(e),n=fH(this),r=arguments.length,s=r>1?arguments[1]:void 0,a=s!==void 0;a&&(s=oH(s,r>2?arguments[2]:void 0));var l=pH(t),u=0,f,h,p,m,g,y;if(l&&!(this===hS&&uH(l)))for(m=dH(t,l),g=m.next,h=n?new this:[];!(p=aH(g,m)).done;u++)y=a?cH(m,s,[p.value,u],!0):p.value,fS(h,u,y);else for(f=hH(t),h=n?new this(f):hS(f);f>u;u++)y=a?s(t[u],u):t[u],fS(h,u,y);return h.length=u,h},gH=Ol,_H=mH,vH=Bb,xH=!vH(function(i){Array.from(i)});gH({target:"Array",stat:!0,forced:xH},{from:_H});var yH=nu;yH.Array.from;var dS=er,SH=vn,EH=Is,MH=jn,Zp=rb,TH=U_,bH=D_,wH=Zc,AH=x_,Ua=Object.assign,pS=Object.defineProperty,CH=SH([].concat),RH=!Ua||MH(function(){if(dS&&Ua({b:1},Ua(pS({},"a",{enumerable:!0,get:function(){pS(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),Ua({},i)[t]!==7||Zp(Ua({},e)).join("")!==n})?function(e,t){for(var n=wH(e),r=arguments.length,s=1,a=TH.f,l=bH.f;r>s;)for(var u=AH(arguments[s++]),f=a?CH(Zp(u),a(u)):Zp(u),h=f.length,p=0,m;h>p;)m=f[p++],(!dS||EH(l,u,m))&&(n[m]=u[m]);return n}:Ua,PH=Ol,mS=RH;PH({target:"Object",stat:!0,arity:2,forced:Object.assign!==mS},{assign:mS});var LH=nu;LH.Object.assign;var Tf,Ch=new WeakMap;function r1(){if(Tf!==void 0)return Tf;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return Tf=i?{passive:!1}:!1,Tf}function Ul(i){var e=Ch.get(i)||[];return Ch.set(i,e),function(n,r,s){function a(l){l.defaultPrevented||s(l)}r.split(/\s+/g).forEach(function(l){e.push({elem:n,eventName:l,handler:a}),n.addEventListener(l,a,r1())})}}function DH(i){var e=Ch.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,s=t.handler;n.removeEventListener(r,s,r1())}),Ch.delete(i))}function IH(i){return i.touches?i.touches[i.touches.length-1]:i}function pl(i){var e=IH(i);return{x:e.clientX,y:e.clientY}}function bf(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var s1=["webkit","moz","ms","o"],OH=new RegExp("^-(?!(?:"+s1.join("|")+")-)");function UH(i){var e={};return Object.keys(i).forEach(function(t){if(!OH.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,s1.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function ca(i,e){e=UH(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,s){return s.toUpperCase()});i.style[n]=e[t]})}var NH=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=pl(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,s=t.lastPosition,a=Date.now(),l=pl(e),u={x:-(l.x-s.x),y:-(l.y-s.y)},f=a-r||16.7,h=u.x/f*16.7,p=u.y/f*16.7;n.x=h*this.velocityMultiplier,n.y=p*this.velocityMultiplier,this.delta=u,this.updateTime=a,this.lastPosition=l},i}(),FH=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?es({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?es({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(s){for(var a=Math.abs(r[s])<=10?0:r[s];a!==0;)n[s]+=a,a=a*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new NH(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function Sr(i,e,t){return Math.max(e,Math.min(t,i))}function o1(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var a=this,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];if(t){var f=Date.now(),h=f-r;r=f,h>=e&&i.apply(this,l)}clearTimeout(n),n=setTimeout(function(){i.apply(a,l)},e)}}function gS(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(s){Object.defineProperty(this,r,{value:Sr(s,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function Jp(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function a1(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var s=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:o1.apply(void 0,j2([s],i))}),this[n]}}}}var BH=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),Bo([gS(0,1)],i.prototype,"damping",void 0),Bo([gS(0,1/0)],i.prototype,"thumbMinSize",void 0),Bo([Jp],i.prototype,"renderByPixels",void 0),Bo([Jp],i.prototype,"alwaysShowTracks",void 0),Bo([Jp],i.prototype,"continuousScrolling",void 0),i}(),Tl;(function(i){i.X="x",i.Y="y"})(Tl||(Tl={}));var zH=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),ca(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case Tl.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case Tl.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),_S=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new zH(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){ca(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),GH=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new _S(Tl.X,t),this.yAxis=new _S(Tl.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},Bo([a1(300)],i.prototype,"autoHideOnIdle",null),i}();function HH(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(l){return n[l]?parseFloat(n[l]):0}),s=r[0]+r[1],a=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+a,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function kH(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),s=Math.max(t.left,n.left),a=Math.min(t.right,n.right),l=Math.min(t.bottom,n.bottom);return r<l&&s<a}function WH(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function VH(i,e,t){var n=i.options,r=i.offset,s=i.limit,a=i.track,l=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=Sr(e,0,s.x),t=Sr(t,0,s.y),e!==r.x&&a.xAxis.show(),t!==r.y&&a.yAxis.show(),n.alwaysShowTracks||a.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,ca(l,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),a.update(),{offset:es({},r),limit:es({},s)})}var vS=new WeakMap;function $H(i,e,t,n,r){n===void 0&&(n=0);var s=r===void 0?{}:r,a=s.easing,l=a===void 0?XH:a,u=s.callback,f=i.options,h=i.offset,p=i.limit;f.renderByPixels&&(e=Math.round(e),t=Math.round(t));var m=h.x,g=h.y,y=Sr(e,0,p.x)-m,x=Sr(t,0,p.y)-g,_=Date.now();function v(){var w=Date.now()-_,b=n?l(Math.min(w/n,1)):1;if(i.setPosition(m+y*b,g+x*b),w>=n)typeof u=="function"&&u.call(i);else{var E=requestAnimationFrame(v);vS.set(i,E)}}cancelAnimationFrame(vS.get(i)),v()}function XH(i){return Math.pow(i-1,3)+1}function qH(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,s=r===void 0?!0:r,a=n.onlyScrollIfNeeded,l=a===void 0?!1:a,u=n.offsetTop,f=u===void 0?0:u,h=n.offsetLeft,p=h===void 0?0:h,m=n.offsetBottom,g=m===void 0?0:m,y=i.containerEl,x=i.bounding,_=i.offset,v=i.limit;if(!(!e||!y.contains(e))){var w=e.getBoundingClientRect();if(!(l&&i.isVisible(e))){var b=s?w.top-x.top-f:w.bottom-x.bottom+g;i.setMomentum(w.left-x.left-p,Sr(b,-_.y,v.y-_.y))}}}var l1=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=es(es({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return es({},e)},i.pluginName="",i.defaultOptions={},i}(),Rh={order:new Set,constructors:{}};function YH(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Rh.order.add(n),Rh.constructors[n]=t})}function jH(i,e){return Array.from(Rh.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Rh.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var hr;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(hr||(hr={}));function KH(i){var e=Ul(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!QH(r)){var s=ZH(i,n.keyCode||n.which);if(s){var a=s[0],l=s[1];i.addTransformableMomentum(a,l,n,function(u){u?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function ZH(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case hr.TAB:return JH(i);case hr.SPACE:return[0,200];case hr.PAGE_UP:return[0,-t.container.height+40];case hr.PAGE_DOWN:return[0,t.container.height-40];case hr.END:return[0,n.y-r.y];case hr.HOME:return[0,-r.y];case hr.LEFT:return[-40,0];case hr.UP:return[0,-40];case hr.RIGHT:return[40,0];case hr.DOWN:return[0,40];default:return null}}function JH(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function QH(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var kr;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(kr||(kr={}));function ek(i){var e=Ul(i),t=i.containerEl,n=i.track,r=n.xAxis,s=n.yAxis;function a(g,y){var x=i.size,_=i.limit,v=i.offset;if(g===kr.X){var w=x.container.width+(r.thumb.realSize-r.thumb.displaySize);return Sr(y/w*x.content.width,0,_.x)-v.x}if(g===kr.Y){var b=x.container.height+(s.thumb.realSize-s.thumb.displaySize);return Sr(y/b*x.content.height,0,_.y)-v.y}return 0}function l(g){if(bf(g,[r.element,r.thumb.element]))return kr.X;if(bf(g,[s.element,s.thumb.element]))return kr.Y}var u,f,h,p,m;e(t,"click",function(g){if(!(f||!bf(g.target,[r.element,s.element]))){var y=g.target,x=l(y),_=y.getBoundingClientRect(),v=pl(g);if(x===kr.X){var w=v.x-_.left-r.thumb.displaySize/2;i.setMomentum(a(x,w),0)}if(x===kr.Y){var w=v.y-_.top-s.thumb.displaySize/2;i.setMomentum(0,a(x,w))}}}),e(t,"mousedown",function(g){if(bf(g.target,[r.thumb.element,s.thumb.element])){u=!0;var y=g.target,x=pl(g),_=y.getBoundingClientRect();p=l(y),h={x:x.x-_.left,y:x.y-_.top},m=t.getBoundingClientRect(),ca(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(g){if(u){f=!0;var y=pl(g);if(p===kr.X){var x=y.x-h.x-m.left;i.setMomentum(a(p,x),0)}if(p===kr.Y){var x=y.y-h.y-m.top;i.setMomentum(0,a(p,x))}}}),e(window,"mouseup blur",function(){u=f=!1,ca(i.containerEl,{"-user-select":""})})}function tk(i){var e=Ul(i);e(window,"resize",o1(i.update.bind(i),300))}function nk(i){var e=Ul(i),t=i.containerEl,n=i.contentEl,r=!1,s=!1,a;function l(u){var f=u.x,h=u.y;if(!(!f&&!h)){var p=i.offset,m=i.limit;i.setMomentum(Sr(p.x+f,0,m.x)-p.x,Sr(p.y+h,0,m.y)-p.y),a=requestAnimationFrame(function(){l({x:f,y:h})})}}e(window,"mousemove",function(u){if(r){cancelAnimationFrame(a);var f=ik(i,u);l(f)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(a),r=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(a),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(a),r=!1,s=!1}),e(t,"scroll",function(u){u.preventDefault(),t.scrollTop=t.scrollLeft=0})}function ik(i,e){var t=i.bounding,n=t.top,r=t.right,s=t.bottom,a=t.left,l=pl(e),u=l.x,f=l.y,h={x:0,y:0},p=20;return u===0&&f===0||(u>r-p?h.x=u-r+p:u<a+p&&(h.x=u-a-p),f>s-p?h.y=f-s+p:f<n+p&&(h.y=f-n-p),h.x*=2,h.y*=2),h}var wf;function rk(i){var e=i.options.delegateTo||i.containerEl,t=new FH,n=Ul(i),r,s=0;n(e,"touchstart",function(a){t.track(a),i.setMomentum(0,0),s===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),s++}),n(e,"touchmove",function(a){if(!(wf&&wf!==i)){t.update(a);var l=t.getDelta(),u=l.x,f=l.y;i.addTransformableMomentum(u,f,a,function(h){h&&a.cancelable&&(a.preventDefault(),wf=i)})}}),n(e,"touchcancel touchend",function(a){var l=t.getEasingDistance(r);i.addTransformableMomentum(l.x,l.y,a),s--,s===0&&(i.options.damping=r),t.release(a),wf=null})}function sk(i){var e=Ul(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var s=ak(r),a=s.x,l=s.y;i.addTransformableMomentum(a,l,r,function(u){u&&r.preventDefault()})})}var hc={STANDARD:1,OTHERS:-3},xS=[1,28,500],ok=function(i){return xS[i]||xS[0]};function ak(i){if("deltaX"in i){var e=ok(i.deltaMode);return{x:i.deltaX/hc.STANDARD*e,y:i.deltaY/hc.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/hc.OTHERS,y:i.wheelDeltaY/hc.OTHERS}:{x:0,y:i.wheelDelta/hc.OTHERS}}const yS=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:KH,mouseHandler:ek,resizeHandler:tk,selectHandler:nk,touchHandler:rk,wheelHandler:sk},Symbol.toStringTag,{value:"Module"}));var $r=new Map,SS=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new BH(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),ca(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(u){r.appendChild(u)}),e.appendChild(r),this.track=new GH(this),this.size=this.getSize(),this._plugins=jH(this,this.options.plugins);var s=e.scrollLeft,a=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,a,{withoutCallbacks:!0});var l=window.ResizeObserver;typeof l=="function"&&(this._observer=new l(function(){n.update()}),this._observer.observe(r)),$r.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=$r.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return HH(this)},i.prototype.update=function(){WH(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return kH(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=VH(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(a){a.call(r,s)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),$H(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),qH(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var s=this._plugins.reduce(function(l,u){return u.transformDelta(l,n)||l},{x:e,y:t}),a=!this._shouldPropagateMomentum(s.x,s.y);a&&this.addMomentum(s.x,s.y),r&&r.call(this,a)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;DH(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),$r.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(s){t.appendChild(s)}),ca(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(yS).forEach(function(t){yS[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,s=n.offset,a=n.limit;if(!r.continuousScrolling)return!1;a.x===0&&a.y===0&&this._updateDebounced();var l=Sr(e+s.x,0,a.x),u=Sr(t+s.y,0,a.y),f=!0;return f=f&&l===s.x,f=f&&u===s.y,f=f&&(s.x===a.x||s.x===0||s.y===a.y||s.y===0),f},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=es({},this._momentum);this._plugins.forEach(function(s){s.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,s=t._momentum,a=r[e],l=s[e];if(Math.abs(l)<=.1)return{momentum:0,position:a+l};var u=l*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:a+l-u}},Bo([a1(100,!0)],i.prototype,"_updateDebounced",null),i}(),lk="rgba(222, 222, 222, .75)",ck="rgba(0, 0, 0, .5)",uk=`
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: `+lk+`;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: `+ck+`;
  border-radius: 4px;
}
`,c1="smooth-scrollbar-style",Ph=!1;function ES(){if(!(Ph||typeof window>"u")){var i=document.createElement("style");i.id=c1,i.textContent=uk,document.head&&document.head.appendChild(i),Ph=!0}}function fk(){if(!(!Ph||typeof window>"u")){var i=document.getElementById(c1);!i||!i.parentNode||(i.parentNode.removeChild(i),Ph=!1)}}var MS=function(i){Y2(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return ES(),$r.has(t)?$r.get(t):new SS(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return $r.has(t)},e.get=function(t){return $r.get(t)},e.getAll=function(){return Array.from($r.values())},e.destroy=function(t){var n=$r.get(t);n&&n.destroy()},e.destroyAll=function(){$r.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return YH.apply(void 0,t)},e.attachStyle=function(){return ES()},e.detachStyle=function(){return fk()},e.version="8.8.4",e.ScrollbarPlugin=l1,e}(SS);const Cn={page:{breakpoint:769},time:{debounce:250},phone:{width:"20",height:"15",rectWidth:"20",rectHeight:"1"},tabletAndUp:{width:"30",height:"25",rectWidth:"30",rectHeight:"2"},humbergerBtnSelector:"button.Header__Icon",logoeSelector:"Header__LogoImage",buttonParent:"Header__FlexItem",svgCart:"cart",svg:{cartDesktop:"cartDesktopSvg",cartPhone:"cartPhoneSvg"},logo:{white:"./logo-white.png",black:"./logo-black.png",phone:"18px",tablet:"24px"},color:{white:"#ffffff",black:"#000000"},target:{pageContainer:"page-container",header:"section-header",announcement:"section-announcement"},rootProperty:{headerHeight:"--header-height",announcementHeight:"--announcement-bar-height"}};var u1={exports:{}},Qp={exports:{}},em={exports:{}},tm={exports:{}},TS;function K_(){return TS||(TS=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:an,function(){function e(){}let t=e.prototype;return t.on=function(n,r){if(!n||!r)return this;let s=this._events=this._events||{},a=s[n]=s[n]||[];return a.includes(r)||a.push(r),this},t.once=function(n,r){if(!n||!r)return this;this.on(n,r);let s=this._onceEvents=this._onceEvents||{},a=s[n]=s[n]||{};return a[r]=!0,this},t.off=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;let a=s.indexOf(r);return a!=-1&&s.splice(a,1),this},t.emitEvent=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;s=s.slice(0),r=r||[];let a=this._onceEvents&&this._onceEvents[n];for(let l of s)a&&a[l]&&(this.off(n,l),delete a[l]),l.apply(this,r);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(tm)),tm.exports}var nm={exports:{}};/*!
 * Infinite Scroll v2.0.4
 * measure size of elements
 * MIT license
 */var bS;function f1(){return bS||(bS=1,function(i){(function(e,t){i.exports?i.exports=t():e.getSize=t()})(window,function(){function t(a){let l=parseFloat(a);return a.indexOf("%")==-1&&!isNaN(l)&&l}let n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];function r(){let a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return n.forEach(l=>{a[l]=0}),a}function s(a){if(typeof a=="string"&&(a=document.querySelector(a)),!(a&&typeof a=="object"&&a.nodeType))return;let u=getComputedStyle(a);if(u.display=="none")return r();let f={};f.width=a.offsetWidth,f.height=a.offsetHeight;let h=f.isBorderBox=u.boxSizing=="border-box";n.forEach(b=>{let E=u[b],C=parseFloat(E);f[b]=isNaN(C)?0:C});let p=f.paddingLeft+f.paddingRight,m=f.paddingTop+f.paddingBottom,g=f.marginLeft+f.marginRight,y=f.marginTop+f.marginBottom,x=f.borderLeftWidth+f.borderRightWidth,_=f.borderTopWidth+f.borderBottomWidth,v=t(u.width);v!==!1&&(f.width=v+(h?0:p+x));let w=t(u.height);return w!==!1&&(f.height=w+(h?0:m+_)),f.innerWidth=f.width-(p+x),f.innerHeight=f.height-(m+_),f.outerWidth=f.width+g,f.outerHeight=f.height+y,f}return s})}(nm)),nm.exports}var im={exports:{}},wS;function ha(){return wS||(wS=1,function(i){(function(e,t){i.exports?i.exports=t(e):e.fizzyUIUtils=t(e)})(an,function(t){let n={};n.extend=function(s,a){return Object.assign(s,a)},n.modulo=function(s,a){return(s%a+a)%a},n.makeArray=function(s){return Array.isArray(s)?s:s==null?[]:typeof s=="object"&&typeof s.length=="number"?[...s]:[s]},n.removeFrom=function(s,a){let l=s.indexOf(a);l!=-1&&s.splice(l,1)},n.getParent=function(s,a){for(;s.parentNode&&s!=document.body;)if(s=s.parentNode,s.matches(a))return s},n.getQueryElement=function(s){return typeof s=="string"?document.querySelector(s):s},n.handleEvent=function(s){let a="on"+s.type;this[a]&&this[a](s)},n.filterFindElements=function(s,a){return s=n.makeArray(s),s.filter(l=>l instanceof HTMLElement).reduce((l,u)=>{if(!a)return l.push(u),l;u.matches(a)&&l.push(u);let f=u.querySelectorAll(a);return l=l.concat(...f),l},[])},n.debounceMethod=function(s,a,l){l=l||100;let u=s.prototype[a],f=a+"Timeout";s.prototype[a]=function(){clearTimeout(this[f]);let h=arguments;this[f]=setTimeout(()=>{u.apply(this,h),delete this[f]},l)}},n.docReady=function(s){let a=document.readyState;a=="complete"||a=="interactive"?setTimeout(s):document.addEventListener("DOMContentLoaded",s)},n.toDashed=function(s){return s.replace(/(.)([A-Z])/g,function(a,l,u){return l+"-"+u}).toLowerCase()};let r=t.console;return n.htmlInit=function(s,a){n.docReady(function(){let u="data-"+n.toDashed(a),f=document.querySelectorAll(`[${u}]`),h=t.jQuery;[...f].forEach(p=>{let m=p.getAttribute(u),g;try{g=m&&JSON.parse(m)}catch(x){r&&r.error(`Error parsing ${u} on ${p.className}: ${x}`);return}let y=new s(p,g);h&&h.data(p,a,y)})})},n})}(im)),im.exports}var rm={exports:{}},AS;function hk(){return AS||(AS=1,function(i){(function(e,t){i.exports?i.exports=t(f1()):(e.Flickity=e.Flickity||{},e.Flickity.Cell=t(e.getSize))})(typeof window<"u"?window:an,function(t){const n="flickity-cell";function r(a){this.element=a,this.element.classList.add(n),this.x=0,this.unselect()}let s=r.prototype;return s.destroy=function(){this.unselect(),this.element.classList.remove(n),this.element.style.transform="",this.element.removeAttribute("aria-hidden")},s.getSize=function(){this.size=t(this.element)},s.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},s.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},s.remove=function(){this.element.remove()},r})}(rm)),rm.exports}var sm={exports:{}},CS;function dk(){return CS||(CS=1,function(i){(function(e,t){i.exports?i.exports=t():(e.Flickity=e.Flickity||{},e.Flickity.Slide=t())})(typeof window<"u"?window:an,function(){function t(r,s,a){this.beginMargin=r,this.endMargin=s,this.cellAlign=a,this.cells=[],this.outerWidth=0,this.height=0}let n=t.prototype;return n.addCell=function(r){this.cells.push(r),this.outerWidth+=r.size.outerWidth,this.height=Math.max(r.size.outerHeight,this.height),this.cells.length===1&&(this.x=r.x,this.firstMargin=r.size[this.beginMargin])},n.updateTarget=function(){let r=this.getLastCell(),s=r?r.size[this.endMargin]:0,a=this.outerWidth-(this.firstMargin+s);this.target=this.x+this.firstMargin+a*this.cellAlign},n.getLastCell=function(){return this.cells[this.cells.length-1]},n.select=function(){this.cells.forEach(r=>r.select())},n.unselect=function(){this.cells.forEach(r=>r.unselect())},n.getCellElements=function(){return this.cells.map(r=>r.element)},t})}(sm)),sm.exports}var om={exports:{}},RS;function pk(){return RS||(RS=1,function(i){(function(e,t){i.exports?i.exports=t(ha()):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=t(e.fizzyUIUtils))})(typeof window<"u"?window:an,function(t){let n={};return n.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},n.animate=function(){this.applyDragForce(),this.applySelectedAttraction();let r=this.x;this.integratePhysics(),this.positionSlider(),this.settle(r),this.isAnimating&&requestAnimationFrame(()=>this.animate())},n.positionSlider=function(){let r=this.x;this.isWrapping&&(r=t.modulo(r,this.slideableWidth)-this.slideableWidth,this.shiftWrapCells(r)),this.setTranslateX(r,this.isAnimating),this.dispatchScrollEvent()},n.setTranslateX=function(r,s){r+=this.cursorPosition,this.options.rightToLeft&&(r=-r);let a=this.getPositionValue(r);this.slider.style.transform=s?`translate3d(${a},0,0)`:`translateX(${a})`},n.dispatchScrollEvent=function(){let r=this.slides[0];if(!r)return;let s=-this.x-r.target,a=s/this.slidesWidth;this.dispatchEvent("scroll",null,[a,s])},n.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},n.getPositionValue=function(r){return this.options.percentPosition?Math.round(r/this.size.innerWidth*1e4)*.01+"%":Math.round(r)+"px"},n.settle=function(r){!this.isPointerDown&&Math.round(this.x*100)===Math.round(r*100)&&this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},n.shiftWrapCells=function(r){let s=this.cursorPosition+r;this._shiftCells(this.beforeShiftCells,s,-1);let a=this.size.innerWidth-(r+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,a,1)},n._shiftCells=function(r,s,a){r.forEach(l=>{let u=s>0?a:0;this._wrapShiftCell(l,u),s-=l.size.outerWidth})},n._unshiftCells=function(r){!r||!r.length||r.forEach(s=>this._wrapShiftCell(s,0))},n._wrapShiftCell=function(r,s){this._renderCellPosition(r,r.x+this.slideableWidth*s)},n.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},n.applyForce=function(r){this.velocity+=r},n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown)return;let s=this.dragX-this.x-this.velocity;this.applyForce(s)},n.applySelectedAttraction=function(){if(this.isDraggable&&this.isPointerDown||this.isFreeScrolling||!this.slides.length)return;let a=(this.selectedSlide.target*-1-this.x)*this.options.selectedAttraction;this.applyForce(a)},n})}(om)),om.exports}var PS;function _o(){return PS||(PS=1,function(i){(function(e,t){if(i.exports)i.exports=t(e,K_(),f1(),ha(),hk(),dk(),pk());else{let n=e.Flickity;e.Flickity=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,n.Cell,n.Slide,n.animatePrototype)}})(typeof window<"u"?window:an,function(t,n,r,s,a,l,u){const{getComputedStyle:f,console:h}=t;let{jQuery:p}=t,m=0,g={};function y(E,C){let R=s.getQueryElement(E);if(!R){h&&h.error(`Bad element for Flickity: ${R||E}`);return}if(this.element=R,this.element.flickityGUID){let A=g[this.element.flickityGUID];return A&&A.option(C),A}p&&(this.$element=p(this.element)),this.options={...this.constructor.defaults},this.option(C),this._create()}y.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},y.create={};let x=y.prototype;Object.assign(x,n.prototype),x._create=function(){let{resize:E,watchCSS:C,rightToLeft:R}=this.options,A=this.guid=++m;this.element.flickityGUID=A,g[A]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.beginMargin=R?"marginRight":"marginLeft",this.endMargin=R?"marginLeft":"marginRight",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),this.focusableElems=[this.element],(E||C)&&t.addEventListener("resize",this);for(let z in this.options.on){let k=this.options.on[z];this.on(z,k)}for(let z in y.create)y.create[z].call(this);C?this.watchCSS():this.activate()},x.option=function(E){Object.assign(this.options,E)},x.activate=function(){if(this.isActive)return;this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();let E=this._filterFindCellElements(this.element.children);this.slider.append(...E),this.viewport.append(this.slider),this.element.append(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready")},x._createSlider=function(){let E=document.createElement("div");E.className="flickity-slider",this.slider=E},x._filterFindCellElements=function(E){return s.filterFindElements(E,this.options.cellSelector)},x.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize()},x._makeCells=function(E){return this._filterFindCellElements(E).map(R=>new a(R))},x.getLastCell=function(){return this.cells[this.cells.length-1]},x.getLastSlide=function(){return this.slides[this.slides.length-1]},x.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},x._positionCells=function(E){E=E||0,this.maxCellHeight=E&&this.maxCellHeight||0;let C=0;if(E>0){let R=this.cells[E-1];C=R.x+R.size.outerWidth}this.cells.slice(E).forEach(R=>{R.x=C,this._renderCellPosition(R,C),C+=R.size.outerWidth,this.maxCellHeight=Math.max(R.size.outerHeight,this.maxCellHeight)}),this.slideableWidth=C,this.updateSlides(),this._containSlides(),this.slidesWidth=this.cells.length?this.getLastSlide().target-this.slides[0].target:0},x._renderCellPosition=function(E,C){let R=this.options.rightToLeft?-1:1,A=C*R;this.options.percentPosition&&(A*=this.size.innerWidth/E.size.width);let z=this.getPositionValue(A);E.element.style.transform=`translateX( ${z} )`},x._sizeCells=function(E){E.forEach(C=>C.getSize())},x.updateSlides=function(){if(this.slides=[],!this.cells.length)return;let{beginMargin:E,endMargin:C}=this,R=new l(E,C,this.cellAlign);this.slides.push(R);let A=this._getCanCellFit();this.cells.forEach((z,k)=>{if(!R.cells.length){R.addCell(z);return}let M=R.outerWidth-R.firstMargin+(z.size.outerWidth-z.size[C]);A(k,M)||(R.updateTarget(),R=new l(E,C,this.cellAlign),this.slides.push(R)),R.addCell(z)}),R.updateTarget(),this.updateSelectedSlide()},x._getCanCellFit=function(){let{groupCells:E}=this.options;if(!E)return()=>!1;if(typeof E=="number"){let z=parseInt(E,10);return k=>k%z!==0}let C=1,R=typeof E=="string"&&E.match(/^(\d+)%$/);R&&(C=parseInt(R[1],10)/100);let A=(this.size.innerWidth+1)*C;return(z,k)=>k<=A},x._init=x.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},x.getSize=function(){this.size=r(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};let _={left:0,center:.5,right:1};x.setCellAlign=function(){let{cellAlign:E,rightToLeft:C}=this.options,R=_[E];this.cellAlign=R!==void 0?R:E,C&&(this.cellAlign=1-this.cellAlign)},x.setGallerySize=function(){if(!this.options.setGallerySize)return;let E=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=`${E}px`},x._updateWrapShiftCells=function(){if(this.isWrapping=this.getIsWrapping(),!this.isWrapping)return;this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);let E=this.cursorPosition,C=this.cells.length-1;this.beforeShiftCells=this._getGapCells(E,C,-1);let R=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(R,0,1)},x.getIsWrapping=function(){let{wrapAround:E}=this.options;if(!E||this.slides.length<2)return!1;if(E!=="fill")return!0;let C=this.slideableWidth-this.size.innerWidth;if(C>this.size.innerWidth)return!0;for(let R of this.cells)if(R.size.outerWidth>C)return!1;return!0},x._getGapCells=function(E,C,R){let A=[];for(;E>0;){let z=this.cells[C];if(!z)break;A.push(z),C+=R,E-=z.size.outerWidth}return A},x._containSlides=function(){if(!(this.options.contain&&!this.isWrapping&&this.cells.length))return;let C=this.slideableWidth-this.getLastCell().size[this.endMargin];if(C<this.size.innerWidth)this.slides.forEach(A=>{A.target=C*this.cellAlign});else{let A=this.cursorPosition+this.cells[0].size[this.beginMargin],z=C-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(k=>{k.target=Math.max(k.target,A),k.target=Math.min(k.target,z)})}},x.dispatchEvent=function(E,C,R){let A=C?[C].concat(R):R;if(this.emitEvent(E,A),p&&this.$element){E+=this.options.namespaceJQueryEvents?".flickity":"";let z=E;if(C){let k=new p.Event(C);k.type=E,z=k}this.$element.trigger(z,R)}};const v=["dragStart","dragMove","dragEnd","pointerDown","pointerMove","pointerEnd","staticClick"];let w=x.emitEvent;x.emitEvent=function(E,C){if(E==="staticClick"){let k=this.getParentCell(C[0].target),M=k&&k.element,U=k&&this.cells.indexOf(k);C=C.concat(M,U)}if(w.call(this,E,C),!v.includes(E)||!p||!this.$element)return;E+=this.options.namespaceJQueryEvents?".flickity":"";let A=C.shift(0),z=new p.Event(A);z.type=E,this.$element.trigger(z,C)},x.select=function(E,C,R){if(!this.isActive||(E=parseInt(E,10),this._wrapSelect(E),(this.isWrapping||C)&&(E=s.modulo(E,this.slides.length)),!this.slides[E]))return;let A=this.selectedIndex;this.selectedIndex=E,this.updateSelectedSlide(),R?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[E]),E!==A&&this.dispatchEvent("change",null,[E])},x._wrapSelect=function(E){if(!this.isWrapping)return;const{selectedIndex:C,slideableWidth:R,slides:{length:A}}=this;if(!this.isDragSelect){let z=s.modulo(E,A),k=Math.abs(z-C),M=Math.abs(z+A-C),U=Math.abs(z-A-C);M<k?E+=A:U<k&&(E-=A)}E<0?this.x-=R:E>=A&&(this.x+=R)},x.previous=function(E,C){this.select(this.selectedIndex-1,E,C)},x.next=function(E,C){this.select(this.selectedIndex+1,E,C)},x.updateSelectedSlide=function(){let E=this.slides[this.selectedIndex];E&&(this.unselectSelectedSlide(),this.selectedSlide=E,E.select(),this.selectedCells=E.cells,this.selectedElements=E.getCellElements(),this.selectedCell=E.cells[0],this.selectedElement=this.selectedElements[0])},x.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},x.selectInitialIndex=function(){let E=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,!1,!0);return}if(E&&typeof E=="string"&&this.queryCell(E)){this.selectCell(E,!1,!0);return}let C=0;E&&this.slides[E]&&(C=E),this.select(C,!1,!0)},x.selectCell=function(E,C,R){let A=this.queryCell(E);if(!A)return;let z=this.getCellSlideIndex(A);this.select(z,C,R)},x.getCellSlideIndex=function(E){let C=this.slides.find(R=>R.cells.includes(E));return this.slides.indexOf(C)},x.getCell=function(E){for(let C of this.cells)if(C.element===E)return C},x.getCells=function(E){return E=s.makeArray(E),E.map(C=>this.getCell(C)).filter(Boolean)},x.getCellElements=function(){return this.cells.map(E=>E.element)},x.getParentCell=function(E){let C=this.getCell(E);if(C)return C;let R=E.closest(".flickity-slider > *");return this.getCell(R)},x.getAdjacentCellElements=function(E,C){if(!E)return this.selectedSlide.getCellElements();C=C===void 0?this.selectedIndex:C;let R=this.slides.length;if(1+E*2>=R)return this.getCellElements();let A=[];for(let z=C-E;z<=C+E;z++){let k=this.isWrapping?s.modulo(z,R):z,M=this.slides[k];M&&(A=A.concat(M.getCellElements()))}return A},x.queryCell=function(E){return typeof E=="number"?this.cells[E]:(typeof E=="string"&&!E.match(/^[#.]?[\d/]/)&&(E=this.element.querySelector(E)),this.getCell(E))},x.uiChange=function(){this.emitEvent("uiChange")},x.onresize=function(){this.watchCSS(),this.resize()},s.debounceMethod(y,"onresize",150),x.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging)return;this.getSize(),this.isWrapping&&(this.x=s.modulo(this.x,this.slideableWidth)),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");let E=this.selectedElements&&this.selectedElements[0];this.selectCell(E,!1,!0)},x.watchCSS=function(){if(!this.options.watchCSS)return;f(this.element,":after").content.includes("flickity")?this.activate():this.deactivate()},x.onkeydown=function(E){let{activeElement:C}=document,R=y.keyboardHandlers[E.key];if(!this.options.accessibility||!C||!R)return;this.focusableElems.some(z=>C===z)&&R.call(this)},y.keyboardHandlers={ArrowLeft:function(){this.uiChange();let E=this.options.rightToLeft?"next":"previous";this[E]()},ArrowRight:function(){this.uiChange();let E=this.options.rightToLeft?"previous":"next";this[E]()}},x.focus=function(){this.element.focus({preventScroll:!0})},x.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(E=>E.destroy()),this.viewport.remove(),this.element.append(...this.slider.children),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},x.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),p&&this.$element&&p.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete g[this.guid]},Object.assign(x,u),y.data=function(E){if(E=s.getQueryElement(E),E)return g[E.flickityGUID]},s.htmlInit(y,"flickity");let{jQueryBridget:b}=t;return p&&b&&b("flickity",y,p),y.setJQuery=function(E){p=E},y.Cell=a,y.Slide=l,y})}(em)),em.exports}var am={exports:{}},lm={exports:{}};/*!
 * Unidragger v3.0.1
 * Draggable base class
 * MIT license
 */var LS;function mk(){return LS||(LS=1,function(i){(function(e,t){i.exports?i.exports=t(e,K_()):e.Unidragger=t(e,e.EvEmitter)})(typeof window<"u"?window:an,function(t,n){function r(){}let s=r.prototype=Object.create(n.prototype);s.handleEvent=function(h){let p="on"+h.type;this[p]&&this[p](h)};let a,l;"ontouchstart"in t?(a="touchstart",l=["touchmove","touchend","touchcancel"]):t.PointerEvent?(a="pointerdown",l=["pointermove","pointerup","pointercancel"]):(a="mousedown",l=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(h,p){this.handles.forEach(m=>{m[h](a,this),m[h]("click",this),t.PointerEvent&&(m.style.touchAction=p)})},s.bindActivePointerEvents=function(){l.forEach(h=>{t.addEventListener(h,this)})},s.unbindActivePointerEvents=function(){l.forEach(h=>{t.removeEventListener(h,this)})},s.withPointer=function(h,p){p.pointerId===this.pointerIdentifier&&this[h](p,p)},s.withTouch=function(h,p){let m;for(let g of p.changedTouches)g.identifier===this.pointerIdentifier&&(m=g);m&&this[h](p,m)},s.onmousedown=function(h){this.pointerDown(h,h)},s.ontouchstart=function(h){this.pointerDown(h,h.changedTouches[0])},s.onpointerdown=function(h){this.pointerDown(h,h)};const u=["TEXTAREA","INPUT","SELECT","OPTION"],f=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(h,p){let m=u.includes(h.target.nodeName),g=f.includes(h.target.type),y=!m||g;!this.isPointerDown&&!h.button&&y&&(this.isPointerDown=!0,this.pointerIdentifier=p.pointerId!==void 0?p.pointerId:p.identifier,this.pointerDownPointer={pageX:p.pageX,pageY:p.pageY},this.bindActivePointerEvents(),this.emitEvent("pointerDown",[h,p]))},s.onmousemove=function(h){this.pointerMove(h,h)},s.onpointermove=function(h){this.withPointer("pointerMove",h)},s.ontouchmove=function(h){this.withTouch("pointerMove",h)},s.pointerMove=function(h,p){let m={x:p.pageX-this.pointerDownPointer.pageX,y:p.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[h,p,m]),!this.isDragging&&this.hasDragStarted(m)&&this.dragStart(h,p),this.isDragging&&this.dragMove(h,p,m)},s.hasDragStarted=function(h){return Math.abs(h.x)>3||Math.abs(h.y)>3},s.dragStart=function(h,p){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[h,p])},s.dragMove=function(h,p,m){this.emitEvent("dragMove",[h,p,m])},s.onmouseup=function(h){this.pointerUp(h,h)},s.onpointerup=function(h){this.withPointer("pointerUp",h)},s.ontouchend=function(h){this.withTouch("pointerUp",h)},s.pointerUp=function(h,p){this.pointerDone(),this.emitEvent("pointerUp",[h,p]),this.isDragging?this.dragEnd(h,p):this.staticClick(h,p)},s.dragEnd=function(h,p){this.isDragging=!1,setTimeout(()=>delete this.isPreventingClicks),this.emitEvent("dragEnd",[h,p])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(h){this.withPointer("pointerCancel",h)},s.ontouchcancel=function(h){this.withTouch("pointerCancel",h)},s.pointerCancel=function(h,p){this.pointerDone(),this.emitEvent("pointerCancel",[h,p])},s.onclick=function(h){this.isPreventingClicks&&h.preventDefault()},s.staticClick=function(h,p){let m=h.type==="mouseup";m&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[h,p]),m&&(this.isIgnoringMouseUp=!0,setTimeout(()=>{delete this.isIgnoringMouseUp},400)))},r})}(lm)),lm.exports}var DS;function gk(){return DS||(DS=1,function(i){(function(e,t){i.exports?i.exports=t(e,_o(),mk(),ha()):e.Flickity=t(e,e.Flickity,e.Unidragger,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n,r,s){Object.assign(n.defaults,{draggable:">1",dragThreshold:3});let a=n.prototype;Object.assign(a,r.prototype),a.touchActionValue="",n.create.drag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("pointerDown",this.handlePointerDone),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.on("staticClick",this.handleStaticClick)},a.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},a.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},a.updateDraggable=function(){this.options.draggable===">1"?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.element.classList.toggle("is-draggable",this.isDraggable)},a._uiChangeDrag=function(){delete this.isFreeScrolling},a.handlePointerDown=function(u){if(!this.isDraggable){this.bindActivePointerEvents(u);return}let f=u.type==="touchstart",h=u.pointerType==="touch",p=u.target.matches("input, textarea, select");!f&&!h&&!p&&u.preventDefault(),p||this.focus(),document.activeElement!==this.element&&document.activeElement.blur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),t.addEventListener("scroll",this),this.bindActivePointerEvents(u)},a.hasDragStarted=function(u){return Math.abs(u.x)>this.options.dragThreshold},a.handlePointerUp=function(){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down")},a.handlePointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},a.handleDragStart=function(){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this))},a.handleDragMove=function(u,f,h){if(!this.isDraggable)return;u.preventDefault(),this.previousDragX=this.dragX;let p=this.options.rightToLeft?-1:1;this.isWrapping&&(h.x%=this.slideableWidth);let m=this.dragStartPosition+h.x*p;if(!this.isWrapping){let g=Math.max(-this.slides[0].target,this.dragStartPosition);m=m>g?(m+g)*.5:m;let y=Math.min(-this.getLastSlide().target,this.dragStartPosition);m=m<y?(m+y)*.5:m}this.dragX=m,this.dragMoveTime=new Date},a.handleDragEnd=function(){if(!this.isDraggable)return;let{freeScroll:u}=this.options;u&&(this.isFreeScrolling=!0);let f=this.dragEndRestingSelect();if(u&&!this.isWrapping){let h=this.getRestingPosition();this.isFreeScrolling=-h>this.slides[0].target&&-h<this.getLastSlide().target}else!u&&f===this.selectedIndex&&(f+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.isWrapping,this.select(f),delete this.isDragSelect},a.dragEndRestingSelect=function(){let u=this.getRestingPosition(),f=Math.abs(this.getSlideDistance(-u,this.selectedIndex)),h=this._getClosestResting(u,f,1),p=this._getClosestResting(u,f,-1);return h.distance<p.distance?h.index:p.index},a._getClosestResting=function(u,f,h){let p=this.selectedIndex,m=1/0,g=this.options.contain&&!this.isWrapping?(y,x)=>y<=x:(y,x)=>y<x;for(;g(f,m)&&(p+=h,m=f,f=this.getSlideDistance(-u,p),f!==null);)f=Math.abs(f);return{distance:m,index:p-h}},a.getSlideDistance=function(u,f){let h=this.slides.length,p=this.options.wrapAround&&h>1,m=p?s.modulo(f,h):f,g=this.slides[m];if(!g)return null;let y=p?this.slideableWidth*Math.floor(f/h):0;return u-(g.target+y)},a.dragEndBoostSelect=function(){if(this.previousDragX===void 0||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;let u=this.getSlideDistance(-this.dragX,this.selectedIndex),f=this.previousDragX-this.dragX;return u>0&&f>0?1:u<0&&f<0?-1:0},a.onscroll=function(){let u=l(),f=this.pointerDownScroll.x-u.x,h=this.pointerDownScroll.y-u.y;(Math.abs(f)>3||Math.abs(h)>3)&&this.pointerDone()};function l(){return{x:t.pageXOffset,y:t.pageYOffset}}return n})}(am)),am.exports}var cm={exports:{}},IS;function _k(){return IS||(IS=1,function(i){(function(e,t){i.exports?i.exports=t(_o()):t(e.Flickity)})(typeof window<"u"?window:an,function(t){const n="http://www.w3.org/2000/svg";function r(l,u,f){this.increment=l,this.direction=u,this.isPrevious=l==="previous",this.isLeft=u==="left",this._create(f)}r.prototype._create=function(l){let u=this.element=document.createElement("button");u.className=`flickity-button flickity-prev-next-button ${this.increment}`;let f=this.isPrevious?"Previous":"Next";u.setAttribute("type","button"),u.setAttribute("aria-label",f),this.disable();let h=this.createSVG(f,l);u.append(h)},r.prototype.createSVG=function(l,u){let f=document.createElementNS(n,"svg");f.setAttribute("class","flickity-button-icon"),f.setAttribute("viewBox","0 0 100 100");let h=document.createElementNS(n,"title");h.append(l);let p=document.createElementNS(n,"path"),m=s(u);return p.setAttribute("d",m),p.setAttribute("class","arrow"),this.isLeft||p.setAttribute("transform","translate(100, 100) rotate(180)"),f.append(h,p),f};function s(l){if(typeof l=="string")return l;let{x0:u,x1:f,x2:h,x3:p,y1:m,y2:g}=l;return`M ${u}, 50
    L ${f}, ${m+50}
    L ${h}, ${g+50}
    L ${p}, 50
    L ${h}, ${50-g}
    L ${f}, ${50-m}
    Z`}r.prototype.enable=function(){this.element.removeAttribute("disabled")},r.prototype.disable=function(){this.element.setAttribute("disabled",!0)},Object.assign(t.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),t.create.prevNextButtons=function(){if(!this.options.prevNextButtons)return;let{rightToLeft:l,arrowShape:u}=this.options,f=l?"right":"left",h=l?"left":"right";this.prevButton=new r("previous",f,u),this.nextButton=new r("next",h,u),this.focusableElems.push(this.prevButton.element),this.focusableElems.push(this.nextButton.element),this.handlePrevButtonClick=()=>{this.uiChange(),this.previous()},this.handleNextButtonClick=()=>{this.uiChange(),this.next()},this.on("activate",this.activatePrevNextButtons),this.on("select",this.updatePrevNextButtons)};let a=t.prototype;return a.updatePrevNextButtons=function(){let l=this.slides.length?this.slides.length-1:0;this.updatePrevNextButton(this.prevButton,0),this.updatePrevNextButton(this.nextButton,l)},a.updatePrevNextButton=function(l,u){if(this.isWrapping&&this.slides.length>1){l.enable();return}let f=this.selectedIndex!==u;l[f?"enable":"disable"](),!f&&document.activeElement===l.element&&this.focus()},a.activatePrevNextButtons=function(){this.prevButton.element.addEventListener("click",this.handlePrevButtonClick),this.nextButton.element.addEventListener("click",this.handleNextButtonClick),this.element.append(this.prevButton.element,this.nextButton.element),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.element.remove(),this.nextButton.element.remove(),this.prevButton.element.removeEventListener("click",this.handlePrevButtonClick),this.nextButton.element.removeEventListener("click",this.handleNextButtonClick),this.off("deactivate",this.deactivatePrevNextButtons)},t.PrevNextButton=r,t})}(cm)),cm.exports}var um={exports:{}},OS;function vk(){return OS||(OS=1,function(i){(function(e,t){i.exports?i.exports=t(_o(),ha()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){function r(){this.holder=document.createElement("div"),this.holder.className="flickity-page-dots",this.dots=[]}r.prototype.setDots=function(a){let l=a-this.dots.length;l>0?this.addDots(l):l<0&&this.removeDots(-l)},r.prototype.addDots=function(a){let l=new Array(a).fill().map((u,f)=>{let h=document.createElement("button");h.setAttribute("type","button");let p=f+1+this.dots.length;return h.className="flickity-page-dot",h.textContent=`View slide ${p}`,h});this.holder.append(...l),this.dots=this.dots.concat(l)},r.prototype.removeDots=function(a){this.dots.splice(this.dots.length-a,a).forEach(u=>u.remove())},r.prototype.updateSelected=function(a){this.selectedDot&&(this.selectedDot.classList.remove("is-selected"),this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[a],this.selectedDot.classList.add("is-selected"),this.selectedDot.setAttribute("aria-current","step"))},t.PageDots=r,Object.assign(t.defaults,{pageDots:!0}),t.create.pageDots=function(){this.options.pageDots&&(this.pageDots=new r,this.handlePageDotsClick=this.onPageDotsClick.bind(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))};let s=t.prototype;return s.activatePageDots=function(){this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots),this.pageDots.holder.addEventListener("click",this.handlePageDotsClick),this.element.append(this.pageDots.holder)},s.onPageDotsClick=function(a){let l=this.pageDots.dots.indexOf(a.target);l!==-1&&(this.uiChange(),this.select(l))},s.updateSelectedPageDots=function(){this.pageDots.updateSelected(this.selectedIndex)},s.updatePageDots=function(){this.pageDots.dots.forEach(a=>{n.removeFrom(this.focusableElems,a)}),this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots)},s.deactivatePageDots=function(){this.pageDots.holder.remove(),this.pageDots.holder.removeEventListener("click",this.handlePageDotsClick)},t.PageDots=r,t})}(um)),um.exports}var fm={exports:{}},US;function xk(){return US||(US=1,function(i){(function(e,t){i.exports?i.exports=t(_o()):t(e.Flickity)})(typeof window<"u"?window:an,function(t){function n(s,a){this.autoPlay=s,this.onTick=a,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype.play=function(){if(this.state==="playing")return;if(document.hidden){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()},n.prototype.tick=function(){if(this.state!=="playing")return;let s=typeof this.autoPlay=="number"?this.autoPlay:3e3;this.clear(),this.timeout=setTimeout(()=>{this.onTick(),this.tick()},s)},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){this.state==="playing"&&(this.state="paused",this.clear())},n.prototype.unpause=function(){this.state==="paused"&&this.play()},n.prototype.visibilityChange=function(){let s=document.hidden;this[s?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},Object.assign(t.defaults,{pauseAutoPlayOnHover:!0}),t.create.player=function(){this.player=new n(this.options.autoPlay,()=>{this.next(!0)}),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)};let r=t.prototype;return r.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},r.playPlayer=function(){this.player.play()},r.stopPlayer=function(){this.player.stop()},r.pausePlayer=function(){this.player.pause()},r.unpausePlayer=function(){this.player.unpause()},r.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},r.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},r.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},t.Player=n,t})}(fm)),fm.exports}var hm={exports:{}},NS;function yk(){return NS||(NS=1,function(i){(function(e,t){i.exports?i.exports=t(_o(),ha()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){function r(a){let l=document.createDocumentFragment();return a.forEach(u=>l.appendChild(u.element)),l}let s=t.prototype;return s.insert=function(a,l){let u=this._makeCells(a);if(!u||!u.length)return;let f=this.cells.length;l=l===void 0?f:l;let h=r(u),p=l===f;if(p)this.slider.appendChild(h);else{let m=this.cells[l].element;this.slider.insertBefore(h,m)}if(l===0)this.cells=u.concat(this.cells);else if(p)this.cells=this.cells.concat(u);else{let m=this.cells.splice(l,f-l);this.cells=this.cells.concat(u).concat(m)}this._sizeCells(u),this.cellChange(l),this.positionSliderAtSelected()},s.append=function(a){this.insert(a,this.cells.length)},s.prepend=function(a){this.insert(a,0)},s.remove=function(a){let l=this.getCells(a);if(!l||!l.length)return;let u=this.cells.length-1;l.forEach(f=>{f.remove();let h=this.cells.indexOf(f);u=Math.min(h,u),n.removeFrom(this.cells,f)}),this.cellChange(u),this.positionSliderAtSelected()},s.cellSizeChange=function(a){let l=this.getCell(a);if(!l)return;l.getSize();let u=this.cells.indexOf(l);this.cellChange(u)},s.cellChange=function(a){let l=this.selectedElement;this._positionCells(a),this._updateWrapShiftCells(),this.setGallerySize();let u=this.getCell(l);u&&(this.selectedIndex=this.getCellSlideIndex(u)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[a]),this.select(this.selectedIndex)},t})}(hm)),hm.exports}var dm={exports:{}},FS;function Sk(){return FS||(FS=1,function(i){(function(e,t){i.exports?i.exports=t(_o(),ha()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){const r="data-flickity-lazyload",s=`${r}-src`,a=`${r}-srcset`,l=`img[${r}], img[${s}], img[${a}], source[${a}]`;t.create.lazyLoad=function(){this.on("select",this.lazyLoad),this.handleLazyLoadComplete=this.onLazyLoadComplete.bind(this)};let u=t.prototype;u.lazyLoad=function(){let{lazyLoad:p}=this.options;if(!p)return;let m=typeof p=="number"?p:0;this.getAdjacentCellElements(m).map(f).flat().forEach(g=>new h(g,this.handleLazyLoadComplete))};function f(p){if(p.matches("img")){let m=p.getAttribute(r),g=p.getAttribute(s),y=p.getAttribute(a);if(m||g||y)return p}return[...p.querySelectorAll(l)]}u.onLazyLoadComplete=function(p,m){let g=this.getParentCell(p),y=g&&g.element;this.cellSizeChange(y),this.dispatchEvent("lazyLoad",m,y)};function h(p,m){this.img=p,this.onComplete=m,this.load()}return h.prototype.handleEvent=n.handleEvent,h.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);let p=this.img.getAttribute(r)||this.img.getAttribute(s),m=this.img.getAttribute(a);this.img.src=p,m&&this.img.setAttribute("srcset",m),this.img.removeAttribute(r),this.img.removeAttribute(s),this.img.removeAttribute(a)},h.prototype.onload=function(p){this.complete(p,"flickity-lazyloaded")},h.prototype.onerror=function(p){this.complete(p,"flickity-lazyerror")},h.prototype.complete=function(p,m){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this),(this.img.parentNode.matches("picture")?this.img.parentNode:this.img).classList.add(m),this.onComplete(this.img,p)},t.LazyLoader=h,t})}(dm)),dm.exports}var pm={exports:{}},mm={exports:{}};/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */var BS;function Ek(){return BS||(BS=1,function(i){(function(e,t){i.exports?i.exports=t(e,K_()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:an,function(t,n){let r=t.jQuery,s=t.console;function a(m){return Array.isArray(m)?m:typeof m=="object"&&typeof m.length=="number"?[...m]:[m]}function l(m,g,y){if(!(this instanceof l))return new l(m,g,y);let x=m;if(typeof m=="string"&&(x=document.querySelectorAll(m)),!x){s.error(`Bad element for imagesLoaded ${x||m}`);return}this.elements=a(x),this.options={},typeof g=="function"?y=g:Object.assign(this.options,g),y&&this.on("always",y),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}l.prototype=Object.create(n.prototype),l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const u=[1,9,11];l.prototype.addElementImages=function(m){m.nodeName==="IMG"&&this.addImage(m),this.options.background===!0&&this.addElementBackgroundImages(m);let{nodeType:g}=m;if(!g||!u.includes(g))return;let y=m.querySelectorAll("img");for(let x of y)this.addImage(x);if(typeof this.options.background=="string"){let x=m.querySelectorAll(this.options.background);for(let _ of x)this.addElementBackgroundImages(_)}};const f=/url\((['"])?(.*?)\1\)/gi;l.prototype.addElementBackgroundImages=function(m){let g=getComputedStyle(m);if(!g)return;let y=f.exec(g.backgroundImage);for(;y!==null;){let x=y&&y[2];x&&this.addBackground(x,m),y=f.exec(g.backgroundImage)}},l.prototype.addImage=function(m){let g=new h(m);this.images.push(g)},l.prototype.addBackground=function(m,g){let y=new p(m,g);this.images.push(y)},l.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let m=(g,y,x)=>{setTimeout(()=>{this.progress(g,y,x)})};this.images.forEach(function(g){g.once("progress",m),g.check()})},l.prototype.progress=function(m,g,y){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!m.isLoaded,this.emitEvent("progress",[this,m,g]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,m),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${y}`,m,g)},l.prototype.complete=function(){let m=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(m,[this]),this.emitEvent("always",[this]),this.jqDeferred){let g=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[g](this)}};function h(m){this.img=m}h.prototype=Object.create(n.prototype),h.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(m,g){this.isLoaded=m;let{parentNode:y}=this.img,x=y.nodeName==="PICTURE"?y:this.img;this.emitEvent("progress",[this,x,g])},h.prototype.handleEvent=function(m){let g="on"+m.type;this[g]&&this[g](m)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function p(m,g){this.url=m,this.element=g,this.img=new Image}return p.prototype=Object.create(h.prototype),p.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},p.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},p.prototype.confirm=function(m,g){this.isLoaded=m,this.emitEvent("progress",[this,this.element,g])},l.makeJQueryPlugin=function(m){m=m||t.jQuery,m&&(r=m,r.fn.imagesLoaded=function(g,y){return new l(this,g,y).jqDeferred.promise(r(this))})},l.makeJQueryPlugin(),l})}(mm)),mm.exports}var zS;function Mk(){return zS||(zS=1,function(i){(function(e,t){i.exports?i.exports=t(_o(),Ek()):t(e.Flickity,e.imagesLoaded)})(typeof window<"u"?window:an,function(t,n){return t.create.imagesLoaded=function(){this.on("activate",this.imagesLoaded)},t.prototype.imagesLoaded=function(){if(!this.options.imagesLoaded)return;let r=(s,a)=>{let l=this.getParentCell(a.img);this.cellSizeChange(l&&l.element),this.options.freeScroll||this.positionSliderAtSelected()};n(this.slider).on("progress",r)},t})}(pm)),pm.exports}/*!
 * Flickity v3.0.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2022 Metafizzy
 */var GS;function Tk(){return GS||(GS=1,function(i){if(i.exports){const e=_o();gk(),_k(),vk(),xk(),yk(),Sk(),Mk(),i.exports=e}}(Qp)),Qp.exports}(function(i){(function(e,t){i.exports?i.exports=t(Tk(),ha()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){let r=t.Slide;r.prototype.renderFadePosition=function(){},r.prototype.setOpacity=function(p){this.cells.forEach(m=>{m.element.style.opacity=p})},t.create.fade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};let s=t.prototype,a=s.updateSlides;s.updateSlides=function(){a.apply(this,arguments),this.options.fade&&this.slides.forEach((p,m)=>{let g=p.target-p.x,y=p.cells[0].x;p.cells.forEach(_=>{let v=_.x-y-g;this._renderCellPosition(_,v)});let x=m===this.selectedIndex?1:0;p.setOpacity(x)})},s.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},s.onSettleFade=function(){if(delete this.didDragEnd,!this.options.fade)return;this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!==this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0)},s.onDragEndFade=function(){this.didDragEnd=!0},s.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},s.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(p=>{p.setOpacity("")}))};let l=s.positionSlider;s.positionSlider=function(){if(!this.options.fade){l.apply(this,arguments);return}this.fadeSlides(),this.dispatchScrollEvent()};let u=s.positionSliderAtSelected;s.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),u.apply(this,arguments)},s.fadeSlides=function(){if(this.slides.length<2)return;let p=this.getFadeIndexes(),m=this.slides[p.a],g=this.slides[p.b],y=this.wrapDifference(m.target,g.target),x=this.wrapDifference(m.target,-this.x);x/=y,m.setOpacity(1-x),g.setOpacity(x);let _=p.a;this.isDragging&&(_=x>.5?p.a:p.b),this.fadeHideIndex!==void 0&&this.fadeHideIndex!==_&&this.fadeHideIndex!==p.a&&this.fadeHideIndex!==p.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=_},s.getFadeIndexes=function(){return!this.isDragging&&!this.didDragEnd?{a:this.fadeIndex,b:this.selectedIndex}:this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes()},s.getFadeDragWrapIndexes=function(){let p=this.slides.map(function(w,b){return this.getSlideDistance(-this.x,b)},this),m=p.map(function(w){return Math.abs(w)}),g=Math.min(...m),y=m.indexOf(g),x=p[y],_=this.slides.length,v=x>=0?1:-1;return{a:y,b:n.modulo(y+v,_)}},s.getFadeDragLimitIndexes=function(){let p=0;for(let m=0;m<this.slides.length-1;m++){let g=this.slides[m];if(-this.x<g.target)break;p=m}return{a:p,b:p+1}},s.wrapDifference=function(p,m){let g=m-p;if(!this.options.wrapAround)return g;let y=g+this.slideableWidth,x=g-this.slideableWidth;return Math.abs(y)<Math.abs(g)&&(g=y),Math.abs(x)<Math.abs(g)&&(g=x),g};let f=s._updateWrapShiftCells;s._updateWrapShiftCells=function(){this.options.fade?this.isWrapping=this.getIsWrapping():f.apply(this,arguments)};let h=s.shiftWrapCells;return s.shiftWrapCells=function(){this.options.fade||h.apply(this,arguments)},t})})(u1);var bk=u1.exports;const wk=K2(bk);function Jo(i){const e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return e>=i&&e>t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Z_="161",Ak=0,HS=1,Ck=2,h1=1,Rk=2,xs=3,mo=0,Ii=1,Ms=2,ao=0,ml=1,kS=2,WS=3,VS=4,Pk=5,zo=100,Lk=101,Dk=102,$S=103,XS=104,Ik=200,Ok=201,Uk=202,Nk=203,Lg=204,Dg=205,Fk=206,Bk=207,zk=208,Gk=209,Hk=210,kk=211,Wk=212,Vk=213,$k=214,Xk=0,qk=1,Yk=2,Lh=3,jk=4,Kk=5,Zk=6,Jk=7,d1=0,Qk=1,eW=2,lo=0,tW=1,nW=2,iW=3,rW=4,sW=5,oW=6,p1=300,bl=301,wl=302,Ig=303,Og=304,Zh=306,Ug=1e3,Ir=1001,Ng=1002,_i=1003,qS=1004,dc=1005,An=1006,gm=1007,Wo=1008,co=1009,aW=1010,lW=1011,J_=1012,m1=1013,io=1014,Ts=1015,Yc=1016,g1=1017,_1=1018,Qo=1020,cW=1021,Or=1023,uW=1024,fW=1025,ea=1026,Al=1027,hW=1028,v1=1029,dW=1030,x1=1031,y1=1033,_m=33776,vm=33777,xm=33778,ym=33779,YS=35840,jS=35841,KS=35842,ZS=35843,S1=36196,JS=37492,QS=37496,eE=37808,tE=37809,nE=37810,iE=37811,rE=37812,sE=37813,oE=37814,aE=37815,lE=37816,cE=37817,uE=37818,fE=37819,hE=37820,dE=37821,Sm=36492,pE=36494,mE=36495,pW=36283,gE=36284,_E=36285,vE=36286,E1=3e3,ta=3001,mW=3200,gW=3201,_W=0,vW=1,gr="",Xn="srgb",Ls="srgb-linear",Q_="display-p3",Jh="display-p3-linear",Dh="linear",sn="srgb",Ih="rec709",Oh="p3",Na=7680,xE=519,xW=512,yW=513,SW=514,M1=515,EW=516,MW=517,TW=518,bW=519,yE=35044,SE="300 es",Fg=1035,ws=2e3,Uh=2001;class Nl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Em=Math.PI/180,Bg=180/Math.PI;function ru(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function Ci(i,e,t){return Math.max(e,Math.min(t,i))}function wW(i,e){return(i%e+e)%e}function Mm(i,e,t){return(1-t)*i+t*e}function EE(i){return(i&i-1)===0&&i!==0}function zg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pc(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,t=0){Bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,n,r,s,a,l,u,f){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,f)}set(e,t,n,r,s,a,l,u,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=a,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],f=n[1],h=n[4],p=n[7],m=n[2],g=n[5],y=n[8],x=r[0],_=r[3],v=r[6],w=r[1],b=r[4],E=r[7],C=r[2],R=r[5],A=r[8];return s[0]=a*x+l*w+u*C,s[3]=a*_+l*b+u*R,s[6]=a*v+l*E+u*A,s[1]=f*x+h*w+p*C,s[4]=f*_+h*b+p*R,s[7]=f*v+h*E+p*A,s[2]=m*x+g*w+y*C,s[5]=m*_+g*b+y*R,s[8]=m*v+g*E+y*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8];return t*a*h-t*l*f-n*s*h+n*l*u+r*s*f-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=h*a-l*f,m=l*u-h*s,g=f*s-a*u,y=t*p+n*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=p*x,e[1]=(r*f-h*n)*x,e[2]=(l*n-r*a)*x,e[3]=m*x,e[4]=(h*t-r*u)*x,e[5]=(r*s-l*t)*x,e[6]=g*x,e[7]=(n*u-f*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*a+f*l)+a+e,-r*f,r*u,-r*(-f*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Tm.makeScale(e,t)),this}rotate(e){return this.premultiply(Tm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tm=new At;function T1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function AW(){const i=jc("canvas");return i.style.display="block",i}const ME={};function gl(i){i in ME||(ME[i]=!0,console.warn(i))}const TE=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),bE=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Af={[Ls]:{transfer:Dh,primaries:Ih,toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:sn,primaries:Ih,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jh]:{transfer:Dh,primaries:Oh,toReference:i=>i.applyMatrix3(bE),fromReference:i=>i.applyMatrix3(TE)},[Q_]:{transfer:sn,primaries:Oh,toReference:i=>i.convertSRGBToLinear().applyMatrix3(bE),fromReference:i=>i.applyMatrix3(TE).convertLinearToSRGB()}},CW=new Set([Ls,Jh]),qt={enabled:!0,_workingColorSpace:Ls,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!CW.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Af[e].toReference,r=Af[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Af[i].primaries},getTransfer:function(i){return i===gr?Dh:Af[i].transfer}};function _l(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function bm(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fa;class b1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fa===void 0&&(Fa=jc("canvas")),Fa.width=e.width,Fa.height=e.height;const n=Fa.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fa}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=jc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_l(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_l(t[n]/255)*255):t[n]=_l(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let RW=0;class w1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RW++}),this.uuid=ru(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(wm(r[a].image)):s.push(wm(r[a]))}else s=wm(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function wm(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?b1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let PW=0;class ai extends Nl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,n=Ir,r=Ir,s=An,a=Wo,l=Or,u=co,f=ai.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:PW++}),this.uuid=ru(),this.name="",this.source=new w1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ta?Xn:gr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ug:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Ng:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ug:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Ng:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xn?ta:E1}set encoding(e){gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ta?Xn:gr}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=p1;ai.DEFAULT_ANISOTROPY=1;class Hn{constructor(e=0,t=0,n=0,r=1){Hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,f=u[0],h=u[4],p=u[8],m=u[1],g=u[5],y=u[9],x=u[2],_=u[6],v=u[10];if(Math.abs(h-m)<.01&&Math.abs(p-x)<.01&&Math.abs(y-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+x)<.1&&Math.abs(y+_)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(f+1)/2,E=(g+1)/2,C=(v+1)/2,R=(h+m)/4,A=(p+x)/4,z=(y+_)/4;return b>E&&b>C?b<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(b),r=R/n,s=A/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=z/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=z/s),this.set(n,r,s,t),this}let w=Math.sqrt((_-y)*(_-y)+(p-x)*(p-x)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(_-y)/w,this.y=(p-x)/w,this.z=(m-h)/w,this.w=Math.acos((f+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class LW extends Nl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(gl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ta?Xn:gr),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new w1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ua extends LW{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class A1 extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class DW extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class su{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let u=n[r+0],f=n[r+1],h=n[r+2],p=n[r+3];const m=s[a+0],g=s[a+1],y=s[a+2],x=s[a+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=x;return}if(p!==x||u!==m||f!==g||h!==y){let _=1-l;const v=u*m+f*g+h*y+p*x,w=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const C=Math.sqrt(b),R=Math.atan2(C,v*w);_=Math.sin(_*R)/C,l=Math.sin(l*R)/C}const E=l*w;if(u=u*_+m*E,f=f*_+g*E,h=h*_+y*E,p=p*_+x*E,_===1-l){const C=1/Math.sqrt(u*u+f*f+h*h+p*p);u*=C,f*=C,h*=C,p*=C}}e[t]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],u=n[r+1],f=n[r+2],h=n[r+3],p=s[a],m=s[a+1],g=s[a+2],y=s[a+3];return e[t]=l*y+h*p+u*g-f*m,e[t+1]=u*y+h*m+f*p-l*g,e[t+2]=f*y+h*g+l*m-u*p,e[t+3]=h*y-l*p-u*m-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,f=l(n/2),h=l(r/2),p=l(s/2),m=u(n/2),g=u(r/2),y=u(s/2);switch(a){case"XYZ":this._x=m*h*p+f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p-m*g*y;break;case"YXZ":this._x=m*h*p+f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p+m*g*y;break;case"ZXY":this._x=m*h*p-f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p-m*g*y;break;case"ZYX":this._x=m*h*p-f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p+m*g*y;break;case"YZX":this._x=m*h*p+f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p-m*g*y;break;case"XZY":this._x=m*h*p-f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],u=t[9],f=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-u)*g,this._y=(s-f)*g,this._z=(a-r)*g}else if(n>l&&n>p){const g=2*Math.sqrt(1+n-l-p);this._w=(h-u)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+f)/g}else if(l>p){const g=2*Math.sqrt(1+l-n-p);this._w=(s-f)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(u+h)/g}else{const g=2*Math.sqrt(1+p-n-l);this._w=(a-r)/g,this._x=(s+f)/g,this._y=(u+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ci(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,u=t._y,f=t._z,h=t._w;return this._x=n*h+a*l+r*f-s*u,this._y=r*h+a*u+s*l-n*f,this._z=s*h+a*f+n*u-r*l,this._w=a*h-n*l-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const f=Math.sqrt(u),h=Math.atan2(f,l),p=Math.sin((1-t)*h)/f,m=Math.sin(t*h)/f;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wE.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wE.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,f=2*(a*r-l*n),h=2*(l*t-s*r),p=2*(s*n-a*t);return this.x=t+u*f+a*p-l*h,this.y=n+u*h+l*f-s*p,this.z=r+u*p+s*h-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*a-n*u,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Am.copy(this).projectOnVector(e),this.sub(Am)}reflect(e){return this.sub(Am.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Am=new se,wE=new su;class ou{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Ar):Ar.fromBufferAttribute(s,a),Ar.applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cf.copy(n.boundingBox)),Cf.applyMatrix4(e.matrixWorld),this.union(Cf)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mc),Rf.subVectors(this.max,mc),Ba.subVectors(e.a,mc),za.subVectors(e.b,mc),Ga.subVectors(e.c,mc),Vs.subVectors(za,Ba),$s.subVectors(Ga,za),Ro.subVectors(Ba,Ga);let t=[0,-Vs.z,Vs.y,0,-$s.z,$s.y,0,-Ro.z,Ro.y,Vs.z,0,-Vs.x,$s.z,0,-$s.x,Ro.z,0,-Ro.x,-Vs.y,Vs.x,0,-$s.y,$s.x,0,-Ro.y,Ro.x,0];return!Cm(t,Ba,za,Ga,Rf)||(t=[1,0,0,0,1,0,0,0,1],!Cm(t,Ba,za,Ga,Rf))?!1:(Pf.crossVectors(Vs,$s),t=[Pf.x,Pf.y,Pf.z],Cm(t,Ba,za,Ga,Rf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ps=[new se,new se,new se,new se,new se,new se,new se,new se],Ar=new se,Cf=new ou,Ba=new se,za=new se,Ga=new se,Vs=new se,$s=new se,Ro=new se,mc=new se,Rf=new se,Pf=new se,Po=new se;function Cm(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Po.fromArray(i,s);const l=r.x*Math.abs(Po.x)+r.y*Math.abs(Po.y)+r.z*Math.abs(Po.z),u=e.dot(Po),f=t.dot(Po),h=n.dot(Po);if(Math.max(-Math.max(u,f,h),Math.min(u,f,h))>l)return!1}return!0}const IW=new ou,gc=new se,Rm=new se;class ev{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):IW.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;gc.subVectors(e,this.center);const t=gc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(gc,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(gc.copy(e.center).add(Rm)),this.expandByPoint(gc.copy(e.center).sub(Rm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ms=new se,Pm=new se,Lf=new se,Xs=new se,Lm=new se,Df=new se,Dm=new se;class C1{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ms)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ms.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ms.copy(this.origin).addScaledVector(this.direction,t),ms.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Pm.copy(e).add(t).multiplyScalar(.5),Lf.copy(t).sub(e).normalize(),Xs.copy(this.origin).sub(Pm);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Lf),l=Xs.dot(this.direction),u=-Xs.dot(Lf),f=Xs.lengthSq(),h=Math.abs(1-a*a);let p,m,g,y;if(h>0)if(p=a*u-l,m=a*l-u,y=s*h,p>=0)if(m>=-y)if(m<=y){const x=1/h;p*=x,m*=x,g=p*(p+a*m+2*l)+m*(a*p+m+2*u)+f}else m=s,p=Math.max(0,-(a*m+l)),g=-p*p+m*(m+2*u)+f;else m=-s,p=Math.max(0,-(a*m+l)),g=-p*p+m*(m+2*u)+f;else m<=-y?(p=Math.max(0,-(-a*s+l)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+f):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+f):(p=Math.max(0,-(a*s+l)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+f);else m=a>0?-s:s,p=Math.max(0,-(a*m+l)),g=-p*p+m*(m+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Pm).addScaledVector(Lf,m),g}intersectSphere(e,t){ms.subVectors(e.center,this.origin);const n=ms.dot(this.direction),r=ms.dot(ms)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,u;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ms)!==null}intersectTriangle(e,t,n,r,s){Lm.subVectors(t,e),Df.subVectors(n,e),Dm.crossVectors(Lm,Df);let a=this.direction.dot(Dm),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Xs.subVectors(this.origin,e);const u=l*this.direction.dot(Df.crossVectors(Xs,Df));if(u<0)return null;const f=l*this.direction.dot(Lm.cross(Xs));if(f<0||u+f>a)return null;const h=-l*Xs.dot(Dm);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn{constructor(e,t,n,r,s,a,l,u,f,h,p,m,g,y,x,_){Yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,f,h,p,m,g,y,x,_)}set(e,t,n,r,s,a,l,u,f,h,p,m,g,y,x,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=l,v[13]=u,v[2]=f,v[6]=h,v[10]=p,v[14]=m,v[3]=g,v[7]=y,v[11]=x,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ha.setFromMatrixColumn(e,0).length(),s=1/Ha.setFromMatrixColumn(e,1).length(),a=1/Ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*h,g=a*p,y=l*h,x=l*p;t[0]=u*h,t[4]=-u*p,t[8]=f,t[1]=g+y*f,t[5]=m-x*f,t[9]=-l*u,t[2]=x-m*f,t[6]=y+g*f,t[10]=a*u}else if(e.order==="YXZ"){const m=u*h,g=u*p,y=f*h,x=f*p;t[0]=m+x*l,t[4]=y*l-g,t[8]=a*f,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=g*l-y,t[6]=x+m*l,t[10]=a*u}else if(e.order==="ZXY"){const m=u*h,g=u*p,y=f*h,x=f*p;t[0]=m-x*l,t[4]=-a*p,t[8]=y+g*l,t[1]=g+y*l,t[5]=a*h,t[9]=x-m*l,t[2]=-a*f,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const m=a*h,g=a*p,y=l*h,x=l*p;t[0]=u*h,t[4]=y*f-g,t[8]=m*f+x,t[1]=u*p,t[5]=x*f+m,t[9]=g*f-y,t[2]=-f,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*f,y=l*u,x=l*f;t[0]=u*h,t[4]=x-m*p,t[8]=y*p+g,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-f*h,t[6]=g*p+y,t[10]=m-x*p}else if(e.order==="XZY"){const m=a*u,g=a*f,y=l*u,x=l*f;t[0]=u*h,t[4]=-p,t[8]=f*h,t[1]=m*p+x,t[5]=a*h,t[9]=g*p-y,t[2]=y*p-g,t[6]=l*h,t[10]=x*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(OW,e,UW)}lookAt(e,t,n){const r=this.elements;return ki.subVectors(e,t),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),qs.crossVectors(n,ki),qs.lengthSq()===0&&(Math.abs(n.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),qs.crossVectors(n,ki)),qs.normalize(),If.crossVectors(ki,qs),r[0]=qs.x,r[4]=If.x,r[8]=ki.x,r[1]=qs.y,r[5]=If.y,r[9]=ki.y,r[2]=qs.z,r[6]=If.z,r[10]=ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],f=n[12],h=n[1],p=n[5],m=n[9],g=n[13],y=n[2],x=n[6],_=n[10],v=n[14],w=n[3],b=n[7],E=n[11],C=n[15],R=r[0],A=r[4],z=r[8],k=r[12],M=r[1],U=r[5],V=r[9],ae=r[13],G=r[2],J=r[6],j=r[10],te=r[14],ie=r[3],oe=r[7],N=r[11],ce=r[15];return s[0]=a*R+l*M+u*G+f*ie,s[4]=a*A+l*U+u*J+f*oe,s[8]=a*z+l*V+u*j+f*N,s[12]=a*k+l*ae+u*te+f*ce,s[1]=h*R+p*M+m*G+g*ie,s[5]=h*A+p*U+m*J+g*oe,s[9]=h*z+p*V+m*j+g*N,s[13]=h*k+p*ae+m*te+g*ce,s[2]=y*R+x*M+_*G+v*ie,s[6]=y*A+x*U+_*J+v*oe,s[10]=y*z+x*V+_*j+v*N,s[14]=y*k+x*ae+_*te+v*ce,s[3]=w*R+b*M+E*G+C*ie,s[7]=w*A+b*U+E*J+C*oe,s[11]=w*z+b*V+E*j+C*N,s[15]=w*k+b*ae+E*te+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],f=e[13],h=e[2],p=e[6],m=e[10],g=e[14],y=e[3],x=e[7],_=e[11],v=e[15];return y*(+s*u*p-r*f*p-s*l*m+n*f*m+r*l*g-n*u*g)+x*(+t*u*g-t*f*m+s*a*m-r*a*g+r*f*h-s*u*h)+_*(+t*f*p-t*l*g-s*a*p+n*a*g+s*l*h-n*f*h)+v*(-r*l*h-t*u*p+t*l*m+r*a*p-n*a*m+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=e[9],m=e[10],g=e[11],y=e[12],x=e[13],_=e[14],v=e[15],w=p*_*f-x*m*f+x*u*g-l*_*g-p*u*v+l*m*v,b=y*m*f-h*_*f-y*u*g+a*_*g+h*u*v-a*m*v,E=h*x*f-y*p*f+y*l*g-a*x*g-h*l*v+a*p*v,C=y*p*u-h*x*u-y*l*m+a*x*m+h*l*_-a*p*_,R=t*w+n*b+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(x*m*s-p*_*s-x*r*g+n*_*g+p*r*v-n*m*v)*A,e[2]=(l*_*s-x*u*s+x*r*f-n*_*f-l*r*v+n*u*v)*A,e[3]=(p*u*s-l*m*s-p*r*f+n*m*f+l*r*g-n*u*g)*A,e[4]=b*A,e[5]=(h*_*s-y*m*s+y*r*g-t*_*g-h*r*v+t*m*v)*A,e[6]=(y*u*s-a*_*s-y*r*f+t*_*f+a*r*v-t*u*v)*A,e[7]=(a*m*s-h*u*s+h*r*f-t*m*f-a*r*g+t*u*g)*A,e[8]=E*A,e[9]=(y*p*s-h*x*s-y*n*g+t*x*g+h*n*v-t*p*v)*A,e[10]=(a*x*s-y*l*s+y*n*f-t*x*f-a*n*v+t*l*v)*A,e[11]=(h*l*s-a*p*s-h*n*f+t*p*f+a*n*g-t*l*g)*A,e[12]=C*A,e[13]=(h*x*r-y*p*r+y*n*m-t*x*m-h*n*_+t*p*_)*A,e[14]=(y*l*r-a*x*r-y*n*u+t*x*u+a*n*_-t*l*_)*A,e[15]=(a*p*r-h*l*r+h*n*u-t*p*u-a*n*m+t*l*m)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,f=s*a,h=s*l;return this.set(f*a+n,f*l-r*u,f*u+r*l,0,f*l+r*u,h*l+n,h*u-r*a,0,f*u-r*l,h*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,f=s+s,h=a+a,p=l+l,m=s*f,g=s*h,y=s*p,x=a*h,_=a*p,v=l*p,w=u*f,b=u*h,E=u*p,C=n.x,R=n.y,A=n.z;return r[0]=(1-(x+v))*C,r[1]=(g+E)*C,r[2]=(y-b)*C,r[3]=0,r[4]=(g-E)*R,r[5]=(1-(m+v))*R,r[6]=(_+w)*R,r[7]=0,r[8]=(y+b)*A,r[9]=(_-w)*A,r[10]=(1-(m+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ha.set(r[0],r[1],r[2]).length();const a=Ha.set(r[4],r[5],r[6]).length(),l=Ha.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cr.copy(this);const f=1/s,h=1/a,p=1/l;return Cr.elements[0]*=f,Cr.elements[1]*=f,Cr.elements[2]*=f,Cr.elements[4]*=h,Cr.elements[5]*=h,Cr.elements[6]*=h,Cr.elements[8]*=p,Cr.elements[9]*=p,Cr.elements[10]*=p,t.setFromRotationMatrix(Cr),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=ws){const u=this.elements,f=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let g,y;if(l===ws)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(l===Uh)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=ws){const u=this.elements,f=1/(t-e),h=1/(n-r),p=1/(a-s),m=(t+e)*f,g=(n+r)*h;let y,x;if(l===ws)y=(a+s)*p,x=-2*p;else if(l===Uh)y=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=x,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ha=new se,Cr=new Yn,OW=new se(0,0,0),UW=new se(1,1,1),qs=new se,If=new se,ki=new se,AE=new Yn,CE=new su;class Qh{constructor(e=0,t=0,n=0,r=Qh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],u=r[1],f=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ci(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ci(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ci(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ci(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Ci(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ci(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return AE.makeRotationFromQuaternion(e),this.setFromRotationMatrix(AE,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return CE.setFromEuler(this),this.setFromQuaternion(CE,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qh.DEFAULT_ORDER="XYZ";class tv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let NW=0;const RE=new se,ka=new su,gs=new Yn,Of=new se,_c=new se,FW=new se,BW=new su,PE=new se(1,0,0),LE=new se(0,1,0),DE=new se(0,0,1),zW={type:"added"},GW={type:"removed"};class Zi extends Nl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:NW++}),this.uuid=ru(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zi.DEFAULT_UP.clone();const e=new se,t=new Qh,n=new su,r=new se(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yn},normalMatrix:{value:new At}}),this.matrix=new Yn,this.matrixWorld=new Yn,this.matrixAutoUpdate=Zi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.multiply(ka),this}rotateOnWorldAxis(e,t){return ka.setFromAxisAngle(e,t),this.quaternion.premultiply(ka),this}rotateX(e){return this.rotateOnAxis(PE,e)}rotateY(e){return this.rotateOnAxis(LE,e)}rotateZ(e){return this.rotateOnAxis(DE,e)}translateOnAxis(e,t){return RE.copy(e).applyQuaternion(this.quaternion),this.position.add(RE.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(PE,e)}translateY(e){return this.translateOnAxis(LE,e)}translateZ(e){return this.translateOnAxis(DE,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Of.copy(e):Of.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),_c.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(_c,Of,this.up):gs.lookAt(Of,_c,this.up),this.quaternion.setFromRotationMatrix(gs),r&&(gs.extractRotation(r.matrixWorld),ka.setFromRotationMatrix(gs),this.quaternion.premultiply(ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(zW)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(GW)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(gs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_c,e,FW),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_c,BW,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,h=u.length;f<h;f++){const p=u[f];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),f=a(e.textures),h=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),y=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Zi.DEFAULT_UP=new se(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rr=new se,_s=new se,Im=new se,vs=new se,Wa=new se,Va=new se,IE=new se,Om=new se,Um=new se,Nm=new se;class Yr{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rr.subVectors(e,t),r.cross(Rr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rr.subVectors(r,t),_s.subVectors(n,t),Im.subVectors(e,t);const a=Rr.dot(Rr),l=Rr.dot(_s),u=Rr.dot(Im),f=_s.dot(_s),h=_s.dot(Im),p=a*f-l*l;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(f*u-l*h)*m,y=(a*h-l*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(e,t,n,r,s,a,l,u){return this.getBarycoord(e,t,n,r,vs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,vs.x),u.addScaledVector(a,vs.y),u.addScaledVector(l,vs.z),u)}static isFrontFacing(e,t,n,r){return Rr.subVectors(n,t),_s.subVectors(e,t),Rr.cross(_s).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rr.subVectors(this.c,this.b),_s.subVectors(this.a,this.b),Rr.cross(_s).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Wa.subVectors(r,n),Va.subVectors(s,n),Om.subVectors(e,n);const u=Wa.dot(Om),f=Va.dot(Om);if(u<=0&&f<=0)return t.copy(n);Um.subVectors(e,r);const h=Wa.dot(Um),p=Va.dot(Um);if(h>=0&&p<=h)return t.copy(r);const m=u*p-h*f;if(m<=0&&u>=0&&h<=0)return a=u/(u-h),t.copy(n).addScaledVector(Wa,a);Nm.subVectors(e,s);const g=Wa.dot(Nm),y=Va.dot(Nm);if(y>=0&&g<=y)return t.copy(s);const x=g*f-u*y;if(x<=0&&f>=0&&y<=0)return l=f/(f-y),t.copy(n).addScaledVector(Va,l);const _=h*y-g*p;if(_<=0&&p-h>=0&&g-y>=0)return IE.subVectors(s,r),l=(p-h)/(p-h+(g-y)),t.copy(r).addScaledVector(IE,l);const v=1/(_+x+m);return a=x*v,l=m*v,t.copy(n).addScaledVector(Wa,a).addScaledVector(Va,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const R1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ys={h:0,s:0,l:0},Uf={h:0,s:0,l:0};function Fm(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=wW(e,1),t=Ci(t,0,1),n=Ci(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Fm(a,s,e+1/3),this.g=Fm(a,s,e),this.b=Fm(a,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=R1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}copyLinearToSRGB(e){return this.r=bm(e.r),this.g=bm(e.g),this.b=bm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return qt.fromWorkingColorSpace(ti.copy(this),e),Math.round(Ci(ti.r*255,0,255))*65536+Math.round(Ci(ti.g*255,0,255))*256+Math.round(Ci(ti.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(ti.copy(this),t);const n=ti.r,r=ti.g,s=ti.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let u,f;const h=(l+a)/2;if(l===a)u=0,f=0;else{const p=a-l;switch(f=h<=.5?p/(a+l):p/(2-a-l),a){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Xn){qt.fromWorkingColorSpace(ti.copy(this),e);const t=ti.r,n=ti.g,r=ti.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ys),this.setHSL(Ys.h+e,Ys.s+t,Ys.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ys),e.getHSL(Uf);const n=Mm(Ys.h,Uf.h,t),r=Mm(Ys.s,Uf.s,t),s=Mm(Ys.l,Uf.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Yt;Yt.NAMES=R1;let HW=0;class ed extends Nl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:HW++}),this.uuid=ru(),this.name="",this.type="Material",this.blending=ml,this.side=mo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Lg,this.blendDst=Dg,this.blendEquation=zo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Lh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ml&&(n.blending=this.blending),this.side!==mo&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Lg&&(n.blendSrc=this.blendSrc),this.blendDst!==Dg&&(n.blendDst=this.blendDst),this.blendEquation!==zo&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Lh&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xE&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Na&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Na&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Na&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P1 extends ed{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=d1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new se,Nf=new Bt;class ts{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ts,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nf.fromBufferAttribute(this,t),Nf.applyMatrix3(e),this.setXY(t,Nf.x,Nf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pc(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pc(t,this.array)),t}setX(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pc(t,this.array)),t}setY(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pc(t,this.array)),t}setW(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wi(t,this.array),n=wi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wi(t,this.array),n=wi(n,this.array),r=wi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wi(t,this.array),n=wi(n,this.array),r=wi(r,this.array),s=wi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yE&&(e.usage=this.usage),e}}class L1 extends ts{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class D1 extends ts{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class na extends ts{constructor(e,t,n){super(new Float32Array(e),t,n)}}let kW=0;const ur=new Yn,Bm=new Zi,$a=new se,Wi=new ou,vc=new ou,Fn=new se;class da extends Nl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kW++}),this.uuid=ru(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(T1(e)?D1:L1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new At().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,n){return ur.makeTranslation(e,t,n),this.applyMatrix4(ur),this}scale(e,t,n){return ur.makeScale(e,t,n),this.applyMatrix4(ur),this}lookAt(e){return Bm.lookAt(e),Bm.updateMatrix(),this.applyMatrix4(Bm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($a).negate(),this.translate($a.x,$a.y,$a.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new na(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ou);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wi.setFromBufferAttribute(s),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Wi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Wi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Wi.min),this.boundingBox.expandByPoint(Wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ev);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(Wi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];vc.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(Wi.min,vc.min),Wi.expandByPoint(Fn),Fn.addVectors(Wi.max,vc.max),Wi.expandByPoint(Fn)):(Wi.expandByPoint(vc.min),Wi.expandByPoint(vc.max))}Wi.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Fn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Fn));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)Fn.fromBufferAttribute(l,f),u&&($a.fromBufferAttribute(e,f),Fn.add($a)),r=Math.max(r,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ts(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,f=[],h=[];for(let M=0;M<l;M++)f[M]=new se,h[M]=new se;const p=new se,m=new se,g=new se,y=new Bt,x=new Bt,_=new Bt,v=new se,w=new se;function b(M,U,V){p.fromArray(r,M*3),m.fromArray(r,U*3),g.fromArray(r,V*3),y.fromArray(a,M*2),x.fromArray(a,U*2),_.fromArray(a,V*2),m.sub(p),g.sub(p),x.sub(y),_.sub(y);const ae=1/(x.x*_.y-_.x*x.y);isFinite(ae)&&(v.copy(m).multiplyScalar(_.y).addScaledVector(g,-x.y).multiplyScalar(ae),w.copy(g).multiplyScalar(x.x).addScaledVector(m,-_.x).multiplyScalar(ae),f[M].add(v),f[U].add(v),f[V].add(v),h[M].add(w),h[U].add(w),h[V].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let M=0,U=E.length;M<U;++M){const V=E[M],ae=V.start,G=V.count;for(let J=ae,j=ae+G;J<j;J+=3)b(n[J+0],n[J+1],n[J+2])}const C=new se,R=new se,A=new se,z=new se;function k(M){A.fromArray(s,M*3),z.copy(A);const U=f[M];C.copy(U),C.sub(A.multiplyScalar(A.dot(U))).normalize(),R.crossVectors(z,U);const ae=R.dot(h[M])<0?-1:1;u[M*4]=C.x,u[M*4+1]=C.y,u[M*4+2]=C.z,u[M*4+3]=ae}for(let M=0,U=E.length;M<U;++M){const V=E[M],ae=V.start,G=V.count;for(let J=ae,j=ae+G;J<j;J+=3)k(n[J+0]),k(n[J+1]),k(n[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ts(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new se,s=new se,a=new se,l=new se,u=new se,f=new se,h=new se,p=new se;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),x=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,_),l.add(h),u.add(h),f.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(l,u){const f=l.array,h=l.itemSize,p=l.normalized,m=new f.constructor(u.length*h);let g=0,y=0;for(let x=0,_=u.length;x<_;x++){l.isInterleavedBufferAttribute?g=u[x]*l.data.stride+l.offset:g=u[x]*h;for(let v=0;v<h;v++)m[y++]=f[g++]}return new ts(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new da,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++){const m=f[h],g=e(m,n);u.push(g)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],h=[];for(let p=0,m=f.length;p<m;p++){const g=f[p];h.push(g.toJSON(e.data))}h.length>0&&(r[u]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,h=a.length;f<h;f++){const p=a[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const OE=new Yn,Lo=new C1,Ff=new ev,UE=new se,Xa=new se,qa=new se,Ya=new se,zm=new se,Bf=new se,zf=new Bt,Gf=new Bt,Hf=new Bt,NE=new se,FE=new se,BE=new se,kf=new se,Wf=new se;class Zr extends Zi{constructor(e=new da,t=new P1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){Bf.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const h=l[u],p=s[u];h!==0&&(zm.fromBufferAttribute(p,e),a?Bf.addScaledVector(zm,h):Bf.addScaledVector(zm.sub(t),h))}t.add(Bf)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ff.copy(n.boundingSphere),Ff.applyMatrix4(s),Lo.copy(e.ray).recast(e.near),!(Ff.containsPoint(Lo.origin)===!1&&(Lo.intersectSphere(Ff,UE)===null||Lo.origin.distanceToSquared(UE)>(e.far-e.near)**2))&&(OE.copy(s).invert(),Lo.copy(e.ray).applyMatrix4(OE),!(n.boundingBox!==null&&Lo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lo)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,x=m.length;y<x;y++){const _=m[y],v=a[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=w,C=b;E<C;E+=3){const R=l.getX(E),A=l.getX(E+1),z=l.getX(E+2);r=Vf(this,v,e,n,f,h,p,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let _=y,v=x;_<v;_+=3){const w=l.getX(_),b=l.getX(_+1),E=l.getX(_+2);r=Vf(this,a,e,n,f,h,p,w,b,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let y=0,x=m.length;y<x;y++){const _=m[y],v=a[_.materialIndex],w=Math.max(_.start,g.start),b=Math.min(u.count,Math.min(_.start+_.count,g.start+g.count));for(let E=w,C=b;E<C;E+=3){const R=E,A=E+1,z=E+2;r=Vf(this,v,e,n,f,h,p,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(u.count,g.start+g.count);for(let _=y,v=x;_<v;_+=3){const w=_,b=_+1,E=_+2;r=Vf(this,a,e,n,f,h,p,w,b,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function WW(i,e,t,n,r,s,a,l){let u;if(e.side===Ii?u=n.intersectTriangle(a,s,r,!0,l):u=n.intersectTriangle(r,s,a,e.side===mo,l),u===null)return null;Wf.copy(l),Wf.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Wf);return f<t.near||f>t.far?null:{distance:f,point:Wf.clone(),object:i}}function Vf(i,e,t,n,r,s,a,l,u,f){i.getVertexPosition(l,Xa),i.getVertexPosition(u,qa),i.getVertexPosition(f,Ya);const h=WW(i,e,t,n,Xa,qa,Ya,kf);if(h){r&&(zf.fromBufferAttribute(r,l),Gf.fromBufferAttribute(r,u),Hf.fromBufferAttribute(r,f),h.uv=Yr.getInterpolation(kf,Xa,qa,Ya,zf,Gf,Hf,new Bt)),s&&(zf.fromBufferAttribute(s,l),Gf.fromBufferAttribute(s,u),Hf.fromBufferAttribute(s,f),h.uv1=Yr.getInterpolation(kf,Xa,qa,Ya,zf,Gf,Hf,new Bt),h.uv2=h.uv1),a&&(NE.fromBufferAttribute(a,l),FE.fromBufferAttribute(a,u),BE.fromBufferAttribute(a,f),h.normal=Yr.getInterpolation(kf,Xa,qa,Ya,NE,FE,BE,new se),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:u,c:f,normal:new se,materialIndex:0};Yr.getNormal(Xa,qa,Ya,p.normal),h.face=p}return h}class au extends da{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],f=[],h=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new na(f,3)),this.setAttribute("normal",new na(h,3)),this.setAttribute("uv",new na(p,2));function y(x,_,v,w,b,E,C,R,A,z,k){const M=E/A,U=C/z,V=E/2,ae=C/2,G=R/2,J=A+1,j=z+1;let te=0,ie=0;const oe=new se;for(let N=0;N<j;N++){const ce=N*U-ae;for(let Se=0;Se<J;Se++){const Je=Se*M-V;oe[x]=Je*w,oe[_]=ce*b,oe[v]=G,f.push(oe.x,oe.y,oe.z),oe[x]=0,oe[_]=0,oe[v]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(Se/A),p.push(1-N/z),te+=1}}for(let N=0;N<z;N++)for(let ce=0;ce<A;ce++){const Se=m+ce+J*N,Je=m+ce+J*(N+1),ne=m+(ce+1)+J*(N+1),ue=m+(ce+1)+J*N;u.push(Se,Je,ue),u.push(Je,ne,ue),ie+=6}l.addGroup(g,ie,k),g+=ie,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cl(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function di(i){const e={};for(let t=0;t<i.length;t++){const n=Cl(i[t]);for(const r in n)e[r]=n[r]}return e}function VW(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function I1(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}const $W={clone:Cl,merge:di};var XW=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qW=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ds extends ed{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XW,this.fragmentShader=qW,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cl(e.uniforms),this.uniformsGroups=VW(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class O1 extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yn,this.projectionMatrix=new Yn,this.projectionMatrixInverse=new Yn,this.coordinateSystem=ws}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const js=new se,zE=new Bt,GE=new Bt;class mr extends O1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Bg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Em*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bg*2*Math.atan(Math.tan(Em*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,zE,GE),t.subVectors(GE,zE)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Em*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,f=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/f,r*=a.width/u,n*=a.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ja=-90,Ka=1;class YW extends Zi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mr(ja,Ka,e,t);r.layers=this.layers,this.add(r);const s=new mr(ja,Ka,e,t);s.layers=this.layers,this.add(s);const a=new mr(ja,Ka,e,t);a.layers=this.layers,this.add(a);const l=new mr(ja,Ka,e,t);l.layers=this.layers,this.add(l);const u=new mr(ja,Ka,e,t);u.layers=this.layers,this.add(u);const f=new mr(ja,Ka,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,u]=t;for(const f of t)this.remove(f);if(e===ws)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Uh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,f,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class U1 extends ai{constructor(e,t,n,r,s,a,l,u,f,h){e=e!==void 0?e:[],t=t!==void 0?t:bl,super(e,t,n,r,s,a,l,u,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jW extends ua{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(gl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ta?Xn:gr),this.texture=new U1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new au(5,5,5),s=new Ds({name:"CubemapFromEquirect",uniforms:Cl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ii,blending:ao});s.uniforms.tEquirect.value=t;const a=new Zr(r,s),l=t.minFilter;return t.minFilter===Wo&&(t.minFilter=An),new YW(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Gm=new se,KW=new se,ZW=new At;class No{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Gm.subVectors(n,t).cross(KW.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Gm),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ZW.getNormalMatrix(e),r=this.coplanarPoint(Gm).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Do=new ev,$f=new se;class N1{constructor(e=new No,t=new No,n=new No,r=new No,s=new No,a=new No){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ws){const n=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],u=r[3],f=r[4],h=r[5],p=r[6],m=r[7],g=r[8],y=r[9],x=r[10],_=r[11],v=r[12],w=r[13],b=r[14],E=r[15];if(n[0].setComponents(u-s,m-f,_-g,E-v).normalize(),n[1].setComponents(u+s,m+f,_+g,E+v).normalize(),n[2].setComponents(u+a,m+h,_+y,E+w).normalize(),n[3].setComponents(u-a,m-h,_-y,E-w).normalize(),n[4].setComponents(u-l,m-p,_-x,E-b).normalize(),t===ws)n[5].setComponents(u+l,m+p,_+x,E+b).normalize();else if(t===Uh)n[5].setComponents(l,p,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Do.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Do.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Do)}intersectsSprite(e){return Do.center.set(0,0,0),Do.radius=.7071067811865476,Do.applyMatrix4(e.matrixWorld),this.intersectsSphere(Do)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($f.x=r.normal.x>0?e.max.x:e.min.x,$f.y=r.normal.y>0?e.max.y:e.min.y,$f.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($f)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function F1(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function JW(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,h){const p=f.array,m=f.usage,g=p.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,h,p){const m=h.array,g=h._updateRange,y=h.updateRanges;if(i.bindBuffer(p,f),g.count===-1&&y.length===0&&i.bufferSubData(p,0,m),y.length!==0){for(let x=0,_=y.length;x<_;x++){const v=y[x];t?i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=n.get(f);h&&(i.deleteBuffer(h.buffer),n.delete(f))}function u(f,h){if(f.isGLBufferAttribute){const m=n.get(f);(!m||m.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);if(p===void 0)n.set(f,r(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}class lu extends da{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(r),f=l+1,h=u+1,p=e/l,m=t/u,g=[],y=[],x=[],_=[];for(let v=0;v<h;v++){const w=v*m-a;for(let b=0;b<f;b++){const E=b*p-s;y.push(E,-w,0),x.push(0,0,1),_.push(b/l),_.push(1-v/u)}}for(let v=0;v<u;v++)for(let w=0;w<l;w++){const b=w+f*v,E=w+f*(v+1),C=w+1+f*(v+1),R=w+1+f*v;g.push(b,E,R),g.push(E,C,R)}this.setIndex(g),this.setAttribute("position",new na(y,3)),this.setAttribute("normal",new na(x,3)),this.setAttribute("uv",new na(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var QW=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e4=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,t4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,n4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,i4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,s4=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,o4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,a4=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,c4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,f4=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h4=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,d4=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,p4=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,m4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,S4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,E4=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M4=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T4=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,w4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,A4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,R4="gl_FragColor = linearToOutputTexel( gl_FragColor );",P4=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,L4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,D4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,I4=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,U4=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,N4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,F4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,B4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,z4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G4=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,H4=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,k4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,W4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,V4=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$4=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,X4=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,q4=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y4=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j4=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,K4=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z4=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J4=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Q4=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eV=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tV=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,sV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oV=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aV=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lV=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cV=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uV=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fV=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hV=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dV=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,pV=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,mV=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,gV=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_V=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,SV=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EV=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MV=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TV=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bV=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wV=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,AV=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CV=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,RV=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PV=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LV=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DV=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,IV=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OV=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,UV=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,NV=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FV=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,BV=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zV=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GV=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,HV=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kV=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WV=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VV=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$V=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,XV=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qV=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,YV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KV=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZV=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JV=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QV=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,n5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,i5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,s5=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,o5=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,a5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,l5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u5=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,f5=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,h5=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,d5=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p5=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g5=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_5=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v5=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,x5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,y5=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E5=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,M5=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T5=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w5=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,A5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,R5=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,P5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,L5=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Mt={alphahash_fragment:QW,alphahash_pars_fragment:e4,alphamap_fragment:t4,alphamap_pars_fragment:n4,alphatest_fragment:i4,alphatest_pars_fragment:r4,aomap_fragment:s4,aomap_pars_fragment:o4,batching_pars_vertex:a4,batching_vertex:l4,begin_vertex:c4,beginnormal_vertex:u4,bsdfs:f4,iridescence_fragment:h4,bumpmap_pars_fragment:d4,clipping_planes_fragment:p4,clipping_planes_pars_fragment:m4,clipping_planes_pars_vertex:g4,clipping_planes_vertex:_4,color_fragment:v4,color_pars_fragment:x4,color_pars_vertex:y4,color_vertex:S4,common:E4,cube_uv_reflection_fragment:M4,defaultnormal_vertex:T4,displacementmap_pars_vertex:b4,displacementmap_vertex:w4,emissivemap_fragment:A4,emissivemap_pars_fragment:C4,colorspace_fragment:R4,colorspace_pars_fragment:P4,envmap_fragment:L4,envmap_common_pars_fragment:D4,envmap_pars_fragment:I4,envmap_pars_vertex:O4,envmap_physical_pars_fragment:X4,envmap_vertex:U4,fog_vertex:N4,fog_pars_vertex:F4,fog_fragment:B4,fog_pars_fragment:z4,gradientmap_pars_fragment:G4,lightmap_fragment:H4,lightmap_pars_fragment:k4,lights_lambert_fragment:W4,lights_lambert_pars_fragment:V4,lights_pars_begin:$4,lights_toon_fragment:q4,lights_toon_pars_fragment:Y4,lights_phong_fragment:j4,lights_phong_pars_fragment:K4,lights_physical_fragment:Z4,lights_physical_pars_fragment:J4,lights_fragment_begin:Q4,lights_fragment_maps:eV,lights_fragment_end:tV,logdepthbuf_fragment:nV,logdepthbuf_pars_fragment:iV,logdepthbuf_pars_vertex:rV,logdepthbuf_vertex:sV,map_fragment:oV,map_pars_fragment:aV,map_particle_fragment:lV,map_particle_pars_fragment:cV,metalnessmap_fragment:uV,metalnessmap_pars_fragment:fV,morphcolor_vertex:hV,morphnormal_vertex:dV,morphtarget_pars_vertex:pV,morphtarget_vertex:mV,normal_fragment_begin:gV,normal_fragment_maps:_V,normal_pars_fragment:vV,normal_pars_vertex:xV,normal_vertex:yV,normalmap_pars_fragment:SV,clearcoat_normal_fragment_begin:EV,clearcoat_normal_fragment_maps:MV,clearcoat_pars_fragment:TV,iridescence_pars_fragment:bV,opaque_fragment:wV,packing:AV,premultiplied_alpha_fragment:CV,project_vertex:RV,dithering_fragment:PV,dithering_pars_fragment:LV,roughnessmap_fragment:DV,roughnessmap_pars_fragment:IV,shadowmap_pars_fragment:OV,shadowmap_pars_vertex:UV,shadowmap_vertex:NV,shadowmask_pars_fragment:FV,skinbase_vertex:BV,skinning_pars_vertex:zV,skinning_vertex:GV,skinnormal_vertex:HV,specularmap_fragment:kV,specularmap_pars_fragment:WV,tonemapping_fragment:VV,tonemapping_pars_fragment:$V,transmission_fragment:XV,transmission_pars_fragment:qV,uv_pars_fragment:YV,uv_pars_vertex:jV,uv_vertex:KV,worldpos_vertex:ZV,background_vert:JV,background_frag:QV,backgroundCube_vert:e5,backgroundCube_frag:t5,cube_vert:n5,cube_frag:i5,depth_vert:r5,depth_frag:s5,distanceRGBA_vert:o5,distanceRGBA_frag:a5,equirect_vert:l5,equirect_frag:c5,linedashed_vert:u5,linedashed_frag:f5,meshbasic_vert:h5,meshbasic_frag:d5,meshlambert_vert:p5,meshlambert_frag:m5,meshmatcap_vert:g5,meshmatcap_frag:_5,meshnormal_vert:v5,meshnormal_frag:x5,meshphong_vert:y5,meshphong_frag:S5,meshphysical_vert:E5,meshphysical_frag:M5,meshtoon_vert:T5,meshtoon_frag:b5,points_vert:w5,points_frag:A5,shadow_vert:C5,shadow_frag:R5,sprite_vert:P5,sprite_frag:L5},Re={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Xr={basic:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:di([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:di([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:di([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:di([Re.points,Re.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:di([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:di([Re.common,Re.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:di([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:di([Re.sprite,Re.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:di([Re.common,Re.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:di([Re.lights,Re.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Xr.physical={uniforms:di([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Xf={r:0,b:0,g:0};function D5(i,e,t,n,r,s,a){const l=new Yt(0);let u=s===!0?0:1,f,h,p=null,m=0,g=null;function y(_,v){let w=!1,b=v.isScene===!0?v.background:null;b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b===null?x(l,u):b&&b.isColor&&(x(b,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Zh)?(h===void 0&&(h=new Zr(new au(1,1,1),new Ds({name:"BackgroundCubeMaterial",uniforms:Cl(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=qt.getTransfer(b.colorSpace)!==sn,(p!==b||m!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=b,m=b.version,g=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(f===void 0&&(f=new Zr(new lu(2,2),new Ds({name:"BackgroundMaterial",uniforms:Cl(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:mo,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=b,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=qt.getTransfer(b.colorSpace)!==sn,b.matrixAutoUpdate===!0&&b.updateMatrix(),f.material.uniforms.uvTransform.value.copy(b.matrix),(p!==b||m!==b.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,p=b,m=b.version,g=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function x(_,v){_.getRGB(Xf,I1(i)),n.buffers.color.setClear(Xf.r,Xf.g,Xf.b,v,a)}return{getClearColor:function(){return l},setClearColor:function(_,v=1){l.set(_),u=v,x(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,x(l,u)},render:y}}function I5(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,l={},u=_(null);let f=u,h=!1;function p(G,J,j,te,ie){let oe=!1;if(a){const N=x(te,j,J);f!==N&&(f=N,g(f.object)),oe=v(G,te,j,ie),oe&&w(G,te,j,ie)}else{const N=J.wireframe===!0;(f.geometry!==te.id||f.program!==j.id||f.wireframe!==N)&&(f.geometry=te.id,f.program=j.id,f.wireframe=N,oe=!0)}ie!==null&&t.update(ie,i.ELEMENT_ARRAY_BUFFER),(oe||h)&&(h=!1,z(G,J,j,te),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(G){return n.isWebGL2?i.bindVertexArray(G):s.bindVertexArrayOES(G)}function y(G){return n.isWebGL2?i.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function x(G,J,j){const te=j.wireframe===!0;let ie=l[G.id];ie===void 0&&(ie={},l[G.id]=ie);let oe=ie[J.id];oe===void 0&&(oe={},ie[J.id]=oe);let N=oe[te];return N===void 0&&(N=_(m()),oe[te]=N),N}function _(G){const J=[],j=[],te=[];for(let ie=0;ie<r;ie++)J[ie]=0,j[ie]=0,te[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:te,object:G,attributes:{},index:null}}function v(G,J,j,te){const ie=f.attributes,oe=J.attributes;let N=0;const ce=j.getAttributes();for(const Se in ce)if(ce[Se].location>=0){const ne=ie[Se];let ue=oe[Se];if(ue===void 0&&(Se==="instanceMatrix"&&G.instanceMatrix&&(ue=G.instanceMatrix),Se==="instanceColor"&&G.instanceColor&&(ue=G.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;N++}return f.attributesNum!==N||f.index!==te}function w(G,J,j,te){const ie={},oe=J.attributes;let N=0;const ce=j.getAttributes();for(const Se in ce)if(ce[Se].location>=0){let ne=oe[Se];ne===void 0&&(Se==="instanceMatrix"&&G.instanceMatrix&&(ne=G.instanceMatrix),Se==="instanceColor"&&G.instanceColor&&(ne=G.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),ie[Se]=ue,N++}f.attributes=ie,f.attributesNum=N,f.index=te}function b(){const G=f.newAttributes;for(let J=0,j=G.length;J<j;J++)G[J]=0}function E(G){C(G,0)}function C(G,J){const j=f.newAttributes,te=f.enabledAttributes,ie=f.attributeDivisors;j[G]=1,te[G]===0&&(i.enableVertexAttribArray(G),te[G]=1),ie[G]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,J),ie[G]=J)}function R(){const G=f.newAttributes,J=f.enabledAttributes;for(let j=0,te=J.length;j<te;j++)J[j]!==G[j]&&(i.disableVertexAttribArray(j),J[j]=0)}function A(G,J,j,te,ie,oe,N){N===!0?i.vertexAttribIPointer(G,J,j,ie,oe):i.vertexAttribPointer(G,J,j,te,ie,oe)}function z(G,J,j,te){if(n.isWebGL2===!1&&(G.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ie=te.attributes,oe=j.getAttributes(),N=J.defaultAttributeValues;for(const ce in oe){const Se=oe[ce];if(Se.location>=0){let Je=ie[ce];if(Je===void 0&&(ce==="instanceMatrix"&&G.instanceMatrix&&(Je=G.instanceMatrix),ce==="instanceColor"&&G.instanceColor&&(Je=G.instanceColor)),Je!==void 0){const ne=Je.normalized,ue=Je.itemSize,be=t.get(Je);if(be===void 0)continue;const De=be.buffer,Oe=be.type,Ce=be.bytesPerElement,gt=n.isWebGL2===!0&&(Oe===i.INT||Oe===i.UNSIGNED_INT||Je.gpuType===m1);if(Je.isInterleavedBufferAttribute){const $e=Je.data,q=$e.stride,st=Je.offset;if($e.isInstancedInterleavedBuffer){for(let Te=0;Te<Se.locationSize;Te++)C(Se.location+Te,$e.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Te=0;Te<Se.locationSize;Te++)E(Se.location+Te);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Te=0;Te<Se.locationSize;Te++)A(Se.location+Te,ue/Se.locationSize,Oe,ne,q*Ce,(st+ue/Se.locationSize*Te)*Ce,gt)}else{if(Je.isInstancedBufferAttribute){for(let $e=0;$e<Se.locationSize;$e++)C(Se.location+$e,Je.meshPerAttribute);G.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let $e=0;$e<Se.locationSize;$e++)E(Se.location+$e);i.bindBuffer(i.ARRAY_BUFFER,De);for(let $e=0;$e<Se.locationSize;$e++)A(Se.location+$e,ue/Se.locationSize,Oe,ne,ue*Ce,ue/Se.locationSize*$e*Ce,gt)}}else if(N!==void 0){const ne=N[ce];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Se.location,ne);break;case 3:i.vertexAttrib3fv(Se.location,ne);break;case 4:i.vertexAttrib4fv(Se.location,ne);break;default:i.vertexAttrib1fv(Se.location,ne)}}}}R()}function k(){V();for(const G in l){const J=l[G];for(const j in J){const te=J[j];for(const ie in te)y(te[ie].object),delete te[ie];delete J[j]}delete l[G]}}function M(G){if(l[G.id]===void 0)return;const J=l[G.id];for(const j in J){const te=J[j];for(const ie in te)y(te[ie].object),delete te[ie];delete J[j]}delete l[G.id]}function U(G){for(const J in l){const j=l[J];if(j[G.id]===void 0)continue;const te=j[G.id];for(const ie in te)y(te[ie].object),delete te[ie];delete j[G.id]}}function V(){ae(),h=!0,f!==u&&(f=u,g(f.object))}function ae(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:V,resetDefaultState:ae,dispose:k,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:b,enableAttribute:E,disableUnusedAttributes:R}}function O5(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function l(h,p){i.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,m){if(m===0)return;let g,y;if(r)g=i,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,h,p,m),t.update(p,s,m)}function f(h,p,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<m;y++)this.render(h[y],p[y]);else{g.multiDrawArraysWEBGL(s,h,0,p,0,m);let y=0;for(let x=0;x<m;x++)y+=p[x];t.update(y,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function U5(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=m>0,E=a||e.has("OES_texture_float"),C=b&&E,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:b,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:R}}function N5(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new No,l=new At,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,x=p.clipIntersection,_=p.clipShadows,v=i.get(p);if(!r||y===null||y.length===0||s&&!_)s?h(null):f();else{const w=s?0:n,b=w*4;let E=v.clippingState||null;u.value=E,E=h(y,m,b,g);for(let C=0;C!==b;++C)E[C]=t[C];v.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,g,y){const x=p!==null?p.length:0;let _=null;if(x!==0){if(_=u.value,y!==!0||_===null){const v=g+x*4,w=m.matrixWorldInverse;l.getNormalMatrix(w),(_===null||_.length<v)&&(_=new Float32Array(v));for(let b=0,E=g;b!==x;++b,E+=4)a.copy(p[b]).applyMatrix4(w,l),a.normal.toArray(_,E),_[E+3]=a.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function F5(i){let e=new WeakMap;function t(a,l){return l===Ig?a.mapping=bl:l===Og&&(a.mapping=wl),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Ig||l===Og)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const f=new jW(u.height);return f.fromEquirectangularTexture(i,a),e.set(a,f),a.addEventListener("dispose",r),t(f.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class B5 extends O1{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sl=4,HE=[.125,.215,.35,.446,.526,.582],Go=20,Hm=new B5,kE=new Yt;let km=null,Wm=0,Vm=0;const Fo=(1+Math.sqrt(5))/2,Za=1/Fo,WE=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Fo,Za),new se(0,Fo,-Za),new se(Za,0,Fo),new se(-Za,0,Fo),new se(Fo,Za,0),new se(-Fo,Za,0)];class VE{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){km=this._renderer.getRenderTarget(),Wm=this._renderer.getActiveCubeFace(),Vm=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=XE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(km,Wm,Vm),e.scissorTest=!1,qf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===bl||e.mapping===wl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),km=this._renderer.getRenderTarget(),Wm=this._renderer.getActiveCubeFace(),Vm=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Yc,format:Or,colorSpace:Ls,depthBuffer:!1},r=$E(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$E(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=z5(s)),this._blurMaterial=G5(s,e,t)}return r}_compileMaterial(e){const t=new Zr(this._lodPlanes[0],e);this._renderer.compile(t,Hm)}_sceneToCubeUV(e,t,n,r){const l=new mr(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(kE),h.toneMapping=lo,h.autoClear=!1;const g=new P1({name:"PMREM.Background",side:Ii,depthWrite:!1,depthTest:!1}),y=new Zr(new au,g);let x=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,x=!0):(g.color.copy(kE),x=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(l.up.set(0,u[v],0),l.lookAt(f[v],0,0)):w===1?(l.up.set(0,0,u[v]),l.lookAt(0,f[v],0)):(l.up.set(0,u[v],0),l.lookAt(0,0,f[v]));const b=this._cubeSize;qf(r,w*b,v>2?b:0,b,b),h.setRenderTarget(r),x&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===bl||e.mapping===wl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=XE());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Zr(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;qf(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Hm)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=WE[(r-1)%WE.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const u=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Zr(this._lodPlanes[r],f),m=f.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Go-1),x=s/y,_=isFinite(s)?1+Math.floor(h*x):Go;_>Go&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Go}`);const v=[];let w=0;for(let A=0;A<Go;++A){const z=A/x,k=Math.exp(-z*z/2);v.push(k),A===0?w+=k:A<_&&(w+=2*k)}for(let A=0;A<v.length;A++)v[A]=v[A]/w;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=v,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:b}=this;m.dTheta.value=y,m.mipInt.value=b-n;const E=this._sizeLods[r],C=3*E*(r>b-sl?r-b+sl:0),R=4*(this._cubeSize-E);qf(t,C,R,3*E,2*E),u.setRenderTarget(t),u.render(p,Hm)}}function z5(i){const e=[],t=[],n=[];let r=i;const s=i-sl+1+HE.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let u=1/l;a>i-sl?u=HE[a-i+sl-1]:a===0&&(u=0),n.push(u);const f=1/(l-2),h=-f,p=1+f,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,y=6,x=3,_=2,v=1,w=new Float32Array(x*y*g),b=new Float32Array(_*y*g),E=new Float32Array(v*y*g);for(let R=0;R<g;R++){const A=R%3*2/3-1,z=R>2?0:-1,k=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];w.set(k,x*y*R),b.set(m,_*y*R);const M=[R,R,R,R,R,R];E.set(M,v*y*R)}const C=new da;C.setAttribute("position",new ts(w,x)),C.setAttribute("uv",new ts(b,_)),C.setAttribute("faceIndex",new ts(E,v)),e.push(C),r>sl&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function $E(i,e,t){const n=new ua(i,e,t);return n.texture.mapping=Zh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qf(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function G5(i,e,t){const n=new Float32Array(Go),r=new se(0,1,0);return new Ds({name:"SphericalGaussianBlur",defines:{n:Go,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ao,depthTest:!1,depthWrite:!1})}function XE(){return new Ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ao,depthTest:!1,depthWrite:!1})}function qE(){return new Ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ao,depthTest:!1,depthWrite:!1})}function nv(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function H5(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===Ig||u===Og,h=u===bl||u===wl;if(f||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new VE(i)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||h&&p&&r(p)){t===null&&(t=new VE(i));const m=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",s),m.texture}else return null}}}return l}function r(l){let u=0;const f=6;for(let h=0;h<f;h++)l[h]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function k5(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function W5(i,e,t,n){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const x=m.morphAttributes[y];for(let _=0,v=x.length;_<v;_++)e.remove(x[_])}m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const x=g[y];for(let _=0,v=x.length;_<v;_++)e.update(x[_],i.ARRAY_BUFFER)}}function f(p){const m=[],g=p.index,y=p.attributes.position;let x=0;if(g!==null){const w=g.array;x=g.version;for(let b=0,E=w.length;b<E;b+=3){const C=w[b+0],R=w[b+1],A=w[b+2];m.push(C,R,R,A,A,C)}}else if(y!==void 0){const w=y.array;x=y.version;for(let b=0,E=w.length/3-1;b<E;b+=3){const C=b+0,R=b+1,A=b+2;m.push(C,R,R,A,A,C)}}else return;const _=new(T1(m)?D1:L1)(m,1);_.version=x;const v=s.get(p);v&&e.remove(v),s.set(p,_)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&f(p)}else f(p);return s.get(p)}return{get:l,update:u,getWireframeAttribute:h}}function V5(i,e,t,n){const r=n.isWebGL2;let s;function a(g){s=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function h(g,y){i.drawElements(s,y,l,g*u),t.update(y,s,1)}function p(g,y,x){if(x===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,y,l,g*u,x),t.update(y,s,x)}function m(g,y,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<x;v++)this.render(g[v]/u,y[v]);else{_.multiDrawElementsWEBGL(s,y,0,l,g,0,x);let v=0;for(let w=0;w<x;w++)v+=y[w];t.update(v,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function $5(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function X5(i,e){return i[0]-e[0]}function q5(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Y5(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Hn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function u(f,h,p){const m=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=y!==void 0?y.length:0;let _=s.get(h);if(_===void 0||_.count!==x){let J=function(){ae.dispose(),s.delete(h),h.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const b=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let k=0;b===!0&&(k=1),E===!0&&(k=2),C===!0&&(k=3);let M=h.attributes.position.count*k,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*U*4*x),ae=new A1(V,M,U,x);ae.type=Ts,ae.needsUpdate=!0;const G=k*4;for(let j=0;j<x;j++){const te=R[j],ie=A[j],oe=z[j],N=M*U*4*j;for(let ce=0;ce<te.count;ce++){const Se=ce*G;b===!0&&(a.fromBufferAttribute(te,ce),V[N+Se+0]=a.x,V[N+Se+1]=a.y,V[N+Se+2]=a.z,V[N+Se+3]=0),E===!0&&(a.fromBufferAttribute(ie,ce),V[N+Se+4]=a.x,V[N+Se+5]=a.y,V[N+Se+6]=a.z,V[N+Se+7]=0),C===!0&&(a.fromBufferAttribute(oe,ce),V[N+Se+8]=a.x,V[N+Se+9]=a.y,V[N+Se+10]=a.z,V[N+Se+11]=oe.itemSize===4?a.w:1)}}_={count:x,texture:ae,size:new Bt(M,U)},s.set(h,_),h.addEventListener("dispose",J)}let v=0;for(let b=0;b<m.length;b++)v+=m[b];const w=h.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",w),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const y=m===void 0?0:m.length;let x=n[h.id];if(x===void 0||x.length!==y){x=[];for(let E=0;E<y;E++)x[E]=[E,0];n[h.id]=x}for(let E=0;E<y;E++){const C=x[E];C[0]=E,C[1]=m[E]}x.sort(q5);for(let E=0;E<8;E++)E<y&&x[E][1]?(l[E][0]=x[E][0],l[E][1]=x[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(X5);const _=h.morphAttributes.position,v=h.morphAttributes.normal;let w=0;for(let E=0;E<8;E++){const C=l[E],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+E)!==_[R]&&h.setAttribute("morphTarget"+E,_[R]),v&&h.getAttribute("morphNormal"+E)!==v[R]&&h.setAttribute("morphNormal"+E,v[R]),r[E]=A,w+=A):(_&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),v&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const b=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function j5(i,e,t,n){let r=new WeakMap;function s(u){const f=n.render.frame,h=u.geometry,p=e.get(u,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function a(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}class B1 extends ai{constructor(e,t,n,r,s,a,l,u,f,h){if(h=h!==void 0?h:ea,h!==ea&&h!==Al)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ea&&(n=io),n===void 0&&h===Al&&(n=Qo),super(null,r,s,a,l,u,h,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:_i,this.minFilter=u!==void 0?u:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const z1=new ai,G1=new B1(1,1);G1.compareFunction=M1;const H1=new A1,k1=new DW,W1=new U1,YE=[],jE=[],KE=new Float32Array(16),ZE=new Float32Array(9),JE=new Float32Array(4);function Fl(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=YE[r];if(s===void 0&&(s=new Float32Array(r),YE[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function On(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function td(i,e){let t=jE[e];t===void 0&&(t=new Int32Array(e),jE[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function K5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Z5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function J5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function Q5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function e$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;JE.set(n),i.uniformMatrix2fv(this.addr,!1,JE),Un(t,n)}}function t$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;ZE.set(n),i.uniformMatrix3fv(this.addr,!1,ZE),Un(t,n)}}function n$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;KE.set(n),i.uniformMatrix4fv(this.addr,!1,KE),Un(t,n)}}function i$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function r$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function s$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function o$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function a$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function l$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function c$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function u$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function f$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?G1:z1;t.setTexture2D(e||s,r)}function h$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||k1,r)}function d$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||W1,r)}function p$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||H1,r)}function m$(i){switch(i){case 5126:return K5;case 35664:return Z5;case 35665:return J5;case 35666:return Q5;case 35674:return e$;case 35675:return t$;case 35676:return n$;case 5124:case 35670:return i$;case 35667:case 35671:return r$;case 35668:case 35672:return s$;case 35669:case 35673:return o$;case 5125:return a$;case 36294:return l$;case 36295:return c$;case 36296:return u$;case 35678:case 36198:case 36298:case 36306:case 35682:return f$;case 35679:case 36299:case 36307:return h$;case 35680:case 36300:case 36308:case 36293:return d$;case 36289:case 36303:case 36311:case 36292:return p$}}function g$(i,e){i.uniform1fv(this.addr,e)}function _$(i,e){const t=Fl(e,this.size,2);i.uniform2fv(this.addr,t)}function v$(i,e){const t=Fl(e,this.size,3);i.uniform3fv(this.addr,t)}function x$(i,e){const t=Fl(e,this.size,4);i.uniform4fv(this.addr,t)}function y$(i,e){const t=Fl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function S$(i,e){const t=Fl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function E$(i,e){const t=Fl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function M$(i,e){i.uniform1iv(this.addr,e)}function T$(i,e){i.uniform2iv(this.addr,e)}function b$(i,e){i.uniform3iv(this.addr,e)}function w$(i,e){i.uniform4iv(this.addr,e)}function A$(i,e){i.uniform1uiv(this.addr,e)}function C$(i,e){i.uniform2uiv(this.addr,e)}function R$(i,e){i.uniform3uiv(this.addr,e)}function P$(i,e){i.uniform4uiv(this.addr,e)}function L$(i,e,t){const n=this.cache,r=e.length,s=td(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||z1,s[a])}function D$(i,e,t){const n=this.cache,r=e.length,s=td(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||k1,s[a])}function I$(i,e,t){const n=this.cache,r=e.length,s=td(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||W1,s[a])}function O$(i,e,t){const n=this.cache,r=e.length,s=td(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||H1,s[a])}function U$(i){switch(i){case 5126:return g$;case 35664:return _$;case 35665:return v$;case 35666:return x$;case 35674:return y$;case 35675:return S$;case 35676:return E$;case 5124:case 35670:return M$;case 35667:case 35671:return T$;case 35668:case 35672:return b$;case 35669:case 35673:return w$;case 5125:return A$;case 36294:return C$;case 36295:return R$;case 36296:return P$;case 35678:case 36198:case 36298:case 36306:case 35682:return L$;case 35679:case 36299:case 36307:return D$;case 35680:case 36300:case 36308:case 36293:return I$;case 36289:case 36303:case 36311:case 36292:return O$}}class N${constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=m$(t.type)}}class F${constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=U$(t.type)}}class B${constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const $m=/(\w+)(\])?(\[|\.)?/g;function QE(i,e){i.seq.push(e),i.map[e.id]=e}function z$(i,e,t){const n=i.name,r=n.length;for($m.lastIndex=0;;){const s=$m.exec(n),a=$m.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&a+2===r){QE(t,f===void 0?new N$(l,i,e):new F$(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new B$(l),QE(t,p)),t=p}}}class fh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);z$(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function eM(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const G$=37297;let H$=0;function k$(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function W$(i){const e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(i);let n;switch(e===t?n="":e===Oh&&t===Ih?n="LinearDisplayP3ToLinearSRGB":e===Ih&&t===Oh&&(n="LinearSRGBToLinearDisplayP3"),i){case Ls:case Jh:return[n,"LinearTransferOETF"];case Xn:case Q_:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function tM(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+k$(i.getShaderSource(e),a)}else return r}function V$(i,e){const t=W$(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $$(i,e){let t;switch(e){case tW:t="Linear";break;case nW:t="Reinhard";break;case iW:t="OptimizedCineon";break;case rW:t="ACESFilmic";break;case oW:t="AgX";break;case sW:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function X$(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ol).join(`
`)}function q$(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ol).join(`
`)}function Y$(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function j$(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function ol(i){return i!==""}function nM(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function iM(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const K$=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gg(i){return i.replace(K$,J$)}const Z$=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function J$(i,e){let t=Mt[e];if(t===void 0){const n=Z$.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Gg(t)}const Q$=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rM(i){return i.replace(Q$,e8)}function e8(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sM(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function t8(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===h1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rk?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xs&&(e="SHADOWMAP_TYPE_VSM"),e}function n8(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bl:case wl:e="ENVMAP_TYPE_CUBE";break;case Zh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i8(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wl:e="ENVMAP_MODE_REFRACTION";break}return e}function r8(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case d1:e="ENVMAP_BLENDING_MULTIPLY";break;case Qk:e="ENVMAP_BLENDING_MIX";break;case eW:e="ENVMAP_BLENDING_ADD";break}return e}function s8(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function o8(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=t8(t),f=n8(t),h=i8(t),p=r8(t),m=s8(t),g=t.isWebGL2?"":X$(t),y=q$(t),x=Y$(s),_=r.createProgram();let v,w,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ol).join(`
`),v.length>0&&(v+=`
`),w=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ol).join(`
`),w.length>0&&(w+=`
`)):(v=[sM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ol).join(`
`),w=[g,sM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lo?"#define TONE_MAPPING":"",t.toneMapping!==lo?Mt.tonemapping_pars_fragment:"",t.toneMapping!==lo?$$("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,V$("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ol).join(`
`)),a=Gg(a),a=nM(a,t),a=iM(a,t),l=Gg(l),l=nM(l,t),l=iM(l,t),a=rM(a),l=rM(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,v=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===SE?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===SE?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const E=b+v+a,C=b+w+l,R=eM(r,r.VERTEX_SHADER,E),A=eM(r,r.FRAGMENT_SHADER,C);r.attachShader(_,R),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function z(V){if(i.debug.checkShaderErrors){const ae=r.getProgramInfoLog(_).trim(),G=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(A).trim();let j=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,A);else{const ie=tM(r,R,"vertex"),oe=tM(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+ie+`
`+oe)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(G===""||J==="")&&(te=!1);te&&(V.diagnostics={runnable:j,programLog:ae,vertexShader:{log:G,prefix:v},fragmentShader:{log:J,prefix:w}})}r.deleteShader(R),r.deleteShader(A),k=new fh(r,_),M=j$(r,_)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,G$)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=H$++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let a8=0;class l8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new c8(e),t.set(e,n)),n}}class c8{constructor(e){this.id=a8++,this.code=e,this.usedTimes=0}}function u8(i,e,t,n,r,s,a){const l=new tv,u=new l8,f=new Set,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return f.add(M),M===0?"uv":`uv${M}`}function v(M,U,V,ae,G){const J=ae.fog,j=G.geometry,te=M.isMeshStandardMaterial?ae.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),oe=ie&&ie.mapping===Zh?ie.image.height:null,N=x[M.type];M.precision!==null&&(y=r.getMaxPrecision(M.precision),y!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",y,"instead."));const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Je=0;j.morphAttributes.position!==void 0&&(Je=1),j.morphAttributes.normal!==void 0&&(Je=2),j.morphAttributes.color!==void 0&&(Je=3);let ne,ue,be,De;if(N){const It=Xr[N];ne=It.vertexShader,ue=It.fragmentShader}else ne=M.vertexShader,ue=M.fragmentShader,u.update(M),be=u.getVertexShaderID(M),De=u.getFragmentShaderID(M);const Oe=i.getRenderTarget(),Ce=G.isInstancedMesh===!0,gt=G.isBatchedMesh===!0,$e=!!M.map,q=!!M.matcap,st=!!ie,Te=!!M.aoMap,ke=!!M.lightMap,Ue=!!M.bumpMap,K=!!M.normalMap,et=!!M.displacementMap,O=!!M.emissiveMap,P=!!M.metalnessMap,Y=!!M.roughnessMap,me=M.anisotropy>0,de=M.clearcoat>0,_e=M.iridescence>0,Ae=M.sheen>0,we=M.transmission>0,Ee=me&&!!M.anisotropyMap,Ge=de&&!!M.clearcoatMap,tt=de&&!!M.clearcoatNormalMap,pe=de&&!!M.clearcoatRoughnessMap,bt=_e&&!!M.iridescenceMap,Xe=_e&&!!M.iridescenceThicknessMap,ot=Ae&&!!M.sheenColorMap,We=Ae&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,at=!!M.specularColorMap,_t=!!M.specularIntensityMap,Dt=we&&!!M.transmissionMap,Pe=we&&!!M.thicknessMap,Ct=!!M.gradientMap,F=!!M.alphaMap,ve=M.alphaTest>0,xe=!!M.alphaHash,Ne=!!M.extensions;let Ze=lo;M.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const vt={isWebGL2:p,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:ue,defines:M.defines,customVertexShaderID:be,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:y,batching:gt,instancing:Ce,instancingColor:Ce&&G.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ls,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:q,envMap:st,envMapMode:st&&ie.mapping,envMapCubeUVHeight:oe,aoMap:Te,lightMap:ke,bumpMap:Ue,normalMap:K,displacementMap:g&&et,emissiveMap:O,normalMapObjectSpace:K&&M.normalMapType===vW,normalMapTangentSpace:K&&M.normalMapType===_W,metalnessMap:P,roughnessMap:Y,anisotropy:me,anisotropyMap:Ee,clearcoat:de,clearcoatMap:Ge,clearcoatNormalMap:tt,clearcoatRoughnessMap:pe,iridescence:_e,iridescenceMap:bt,iridescenceThicknessMap:Xe,sheen:Ae,sheenColorMap:ot,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:at,specularIntensityMap:_t,transmission:we,transmissionMap:Dt,thicknessMap:Pe,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===ml&&M.alphaToCoverage===!1,alphaMap:F,alphaTest:ve,alphaHash:xe,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:Te&&_(M.aoMap.channel),lightMapUv:ke&&_(M.lightMap.channel),bumpMapUv:Ue&&_(M.bumpMap.channel),normalMapUv:K&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:O&&_(M.emissiveMap.channel),metalnessMapUv:P&&_(M.metalnessMap.channel),roughnessMapUv:Y&&_(M.roughnessMap.channel),anisotropyMapUv:Ee&&_(M.anisotropyMap.channel),clearcoatMapUv:Ge&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(M.sheenRoughnessMap.channel),specularMapUv:Ie&&_(M.specularMap.channel),specularColorMapUv:at&&_(M.specularColorMap.channel),specularIntensityMapUv:_t&&_(M.specularIntensityMap.channel),transmissionMapUv:Dt&&_(M.transmissionMap.channel),thicknessMapUv:Pe&&_(M.thicknessMap.channel),alphaMapUv:F&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(K||me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!j.attributes.uv&&($e||F),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:G.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Je,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===sn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ms,flipSided:M.side===Ii,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ne&&M.extensions.derivatives===!0,extensionFragDepth:Ne&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=f.has(1),vt.vertexUv2s=f.has(2),vt.vertexUv3s=f.has(3),f.clear(),vt}function w(M){const U=[];if(M.shaderID?U.push(M.shaderID):(U.push(M.customVertexShaderID),U.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)U.push(V),U.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(b(U,M),E(U,M),U.push(i.outputColorSpace)),U.push(M.customProgramCacheKey),U.join()}function b(M,U){M.push(U.precision),M.push(U.outputColorSpace),M.push(U.envMapMode),M.push(U.envMapCubeUVHeight),M.push(U.mapUv),M.push(U.alphaMapUv),M.push(U.lightMapUv),M.push(U.aoMapUv),M.push(U.bumpMapUv),M.push(U.normalMapUv),M.push(U.displacementMapUv),M.push(U.emissiveMapUv),M.push(U.metalnessMapUv),M.push(U.roughnessMapUv),M.push(U.anisotropyMapUv),M.push(U.clearcoatMapUv),M.push(U.clearcoatNormalMapUv),M.push(U.clearcoatRoughnessMapUv),M.push(U.iridescenceMapUv),M.push(U.iridescenceThicknessMapUv),M.push(U.sheenColorMapUv),M.push(U.sheenRoughnessMapUv),M.push(U.specularMapUv),M.push(U.specularColorMapUv),M.push(U.specularIntensityMapUv),M.push(U.transmissionMapUv),M.push(U.thicknessMapUv),M.push(U.combine),M.push(U.fogExp2),M.push(U.sizeAttenuation),M.push(U.morphTargetsCount),M.push(U.morphAttributeCount),M.push(U.numDirLights),M.push(U.numPointLights),M.push(U.numSpotLights),M.push(U.numSpotLightMaps),M.push(U.numHemiLights),M.push(U.numRectAreaLights),M.push(U.numDirLightShadows),M.push(U.numPointLightShadows),M.push(U.numSpotLightShadows),M.push(U.numSpotLightShadowsWithMaps),M.push(U.numLightProbes),M.push(U.shadowMapType),M.push(U.toneMapping),M.push(U.numClippingPlanes),M.push(U.numClipIntersection),M.push(U.depthPacking)}function E(M,U){l.disableAll(),U.isWebGL2&&l.enable(0),U.supportsVertexTextures&&l.enable(1),U.instancing&&l.enable(2),U.instancingColor&&l.enable(3),U.matcap&&l.enable(4),U.envMap&&l.enable(5),U.normalMapObjectSpace&&l.enable(6),U.normalMapTangentSpace&&l.enable(7),U.clearcoat&&l.enable(8),U.iridescence&&l.enable(9),U.alphaTest&&l.enable(10),U.vertexColors&&l.enable(11),U.vertexAlphas&&l.enable(12),U.vertexUv1s&&l.enable(13),U.vertexUv2s&&l.enable(14),U.vertexUv3s&&l.enable(15),U.vertexTangents&&l.enable(16),U.anisotropy&&l.enable(17),U.alphaHash&&l.enable(18),U.batching&&l.enable(19),M.push(l.mask),l.disableAll(),U.fog&&l.enable(0),U.useFog&&l.enable(1),U.flatShading&&l.enable(2),U.logarithmicDepthBuffer&&l.enable(3),U.skinning&&l.enable(4),U.morphTargets&&l.enable(5),U.morphNormals&&l.enable(6),U.morphColors&&l.enable(7),U.premultipliedAlpha&&l.enable(8),U.shadowMapEnabled&&l.enable(9),U.useLegacyLights&&l.enable(10),U.doubleSided&&l.enable(11),U.flipSided&&l.enable(12),U.useDepthPacking&&l.enable(13),U.dithering&&l.enable(14),U.transmission&&l.enable(15),U.sheen&&l.enable(16),U.opaque&&l.enable(17),U.pointsUvs&&l.enable(18),U.decodeVideoTexture&&l.enable(19),U.alphaToCoverage&&l.enable(20),M.push(l.mask)}function C(M){const U=x[M.type];let V;if(U){const ae=Xr[U];V=$W.clone(ae.uniforms)}else V=M.uniforms;return V}function R(M,U){let V;for(let ae=0,G=h.length;ae<G;ae++){const J=h[ae];if(J.cacheKey===U){V=J,++V.usedTimes;break}}return V===void 0&&(V=new o8(i,U,M,s),h.push(V)),V}function A(M){if(--M.usedTimes===0){const U=h.indexOf(M);h[U]=h[h.length-1],h.pop(),M.destroy()}}function z(M){u.remove(M)}function k(){u.dispose()}return{getParameters:v,getProgramCacheKey:w,getUniforms:C,acquireProgram:R,releaseProgram:A,releaseShaderCache:z,programs:h,dispose:k}}function f8(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,l){i.get(s)[a]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function h8(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function oM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function aM(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,m,g,y,x,_){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:x,group:_},i[e]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=g,v.groupOrder=y,v.renderOrder=p.renderOrder,v.z=x,v.group=_),e++,v}function l(p,m,g,y,x,_){const v=a(p,m,g,y,x,_);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):t.push(v)}function u(p,m,g,y,x,_){const v=a(p,m,g,y,x,_);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function f(p,m){t.length>1&&t.sort(p||h8),n.length>1&&n.sort(m||oM),r.length>1&&r.sort(m||oM)}function h(){for(let p=e,m=i.length;p<m;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:h,sort:f}}function d8(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new aM,i.set(n,[a])):r>=s.length?(a=new aM,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function p8(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Yt};break;case"SpotLight":t={position:new se,direction:new se,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":t={color:new Yt,position:new se,halfWidth:new se,halfHeight:new se};break}return i[e.id]=t,t}}}function m8(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let g8=0;function _8(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v8(i,e){const t=new p8,n=m8(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new se);const s=new se,a=new Yn,l=new Yn;function u(h,p){let m=0,g=0,y=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let x=0,_=0,v=0,w=0,b=0,E=0,C=0,R=0,A=0,z=0,k=0;h.sort(_8);const M=p===!0?Math.PI:1;for(let V=0,ae=h.length;V<ae;V++){const G=h[V],J=G.color,j=G.intensity,te=G.distance,ie=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)m+=J.r*j*M,g+=J.g*j*M,y+=J.b*j*M;else if(G.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(G.sh.coefficients[oe],j);k++}else if(G.isDirectionalLight){const oe=t.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity*M),G.castShadow){const N=G.shadow,ce=n.get(G);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,r.directionalShadow[x]=ce,r.directionalShadowMap[x]=ie,r.directionalShadowMatrix[x]=G.shadow.matrix,E++}r.directional[x]=oe,x++}else if(G.isSpotLight){const oe=t.get(G);oe.position.setFromMatrixPosition(G.matrixWorld),oe.color.copy(J).multiplyScalar(j*M),oe.distance=te,oe.coneCos=Math.cos(G.angle),oe.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),oe.decay=G.decay,r.spot[v]=oe;const N=G.shadow;if(G.map&&(r.spotLightMap[A]=G.map,A++,N.updateMatrices(G),G.castShadow&&z++),r.spotLightMatrix[v]=N.matrix,G.castShadow){const ce=n.get(G);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,r.spotShadow[v]=ce,r.spotShadowMap[v]=ie,R++}v++}else if(G.isRectAreaLight){const oe=t.get(G);oe.color.copy(J).multiplyScalar(j),oe.halfWidth.set(G.width*.5,0,0),oe.halfHeight.set(0,G.height*.5,0),r.rectArea[w]=oe,w++}else if(G.isPointLight){const oe=t.get(G);if(oe.color.copy(G.color).multiplyScalar(G.intensity*M),oe.distance=G.distance,oe.decay=G.decay,G.castShadow){const N=G.shadow,ce=n.get(G);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,ce.shadowCameraNear=N.camera.near,ce.shadowCameraFar=N.camera.far,r.pointShadow[_]=ce,r.pointShadowMap[_]=ie,r.pointShadowMatrix[_]=G.shadow.matrix,C++}r.point[_]=oe,_++}else if(G.isHemisphereLight){const oe=t.get(G);oe.skyColor.copy(G.color).multiplyScalar(j*M),oe.groundColor.copy(G.groundColor).multiplyScalar(j*M),r.hemi[b]=oe,b++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=y;const U=r.hash;(U.directionalLength!==x||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==w||U.hemiLength!==b||U.numDirectionalShadows!==E||U.numPointShadows!==C||U.numSpotShadows!==R||U.numSpotMaps!==A||U.numLightProbes!==k)&&(r.directional.length=x,r.spot.length=v,r.rectArea.length=w,r.point.length=_,r.hemi.length=b,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-z,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=k,U.directionalLength=x,U.pointLength=_,U.spotLength=v,U.rectAreaLength=w,U.hemiLength=b,U.numDirectionalShadows=E,U.numPointShadows=C,U.numSpotShadows=R,U.numSpotMaps=A,U.numLightProbes=k,r.version=g8++)}function f(h,p){let m=0,g=0,y=0,x=0,_=0;const v=p.matrixWorldInverse;for(let w=0,b=h.length;w<b;w++){const E=h[w];if(E.isDirectionalLight){const C=r.directional[m];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),m++}else if(E.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),y++}else if(E.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),l.identity(),a.copy(E.matrixWorld),a.premultiply(v),l.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),x++}else if(E.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),g++}else if(E.isHemisphereLight){const C=r.hemi[_];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(v),_++}}}return{setup:u,setupView:f,state:r}}function lM(i,e){const t=new v8(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(p){n.push(p)}function l(p){r.push(p)}function u(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:f,pushLight:a,pushShadow:l}}function x8(i,e){let t=new WeakMap;function n(s,a=0){const l=t.get(s);let u;return l===void 0?(u=new lM(i,e),t.set(s,[u])):a>=l.length?(u=new lM(i,e),l.push(u)):u=l[a],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class y8 extends ed{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mW,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class S8 extends ed{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const E8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M8=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function T8(i,e,t){let n=new N1;const r=new Bt,s=new Bt,a=new Hn,l=new y8({depthPacking:gW}),u=new S8,f={},h=t.maxTextureSize,p={[mo]:Ii,[Ii]:mo,[Ms]:Ms},m=new Ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:E8,fragmentShader:M8}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new da;y.setAttribute("position",new ts(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zr(y,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=h1;let v=this.type;this.render=function(R,A,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const k=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(ao),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ae=v!==xs&&this.type===xs,G=v===xs&&this.type!==xs;for(let J=0,j=R.length;J<j;J++){const te=R[J],ie=te.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const oe=ie.getFrameExtents();if(r.multiply(oe),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,ie.mapSize.y=s.y)),ie.map===null||ae===!0||G===!0){const ce=this.type!==xs?{minFilter:_i,magFilter:_i}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ua(r.x,r.y,ce),ie.map.texture.name=te.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const N=ie.getViewportCount();for(let ce=0;ce<N;ce++){const Se=ie.getViewport(ce);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),V.viewport(a),ie.updateMatrices(te,ce),n=ie.getFrustum(),E(A,z,ie.camera,te,this.type)}ie.isPointLightShadow!==!0&&this.type===xs&&w(ie,z),ie.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(k,M,U)};function w(R,A){const z=e.update(x);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new ua(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,z,m,x,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,z,g,x,null)}function b(R,A,z,k){let M=null;const U=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)M=U;else if(M=z.isPointLight===!0?u:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,ae=A.uuid;let G=f[V];G===void 0&&(G={},f[V]=G);let J=G[ae];J===void 0&&(J=M.clone(),G[ae]=J,A.addEventListener("dispose",C)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,k===xs?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=z}return M}function E(R,A,z,k,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===xs)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),G=R.material;if(Array.isArray(G)){const J=ae.groups;for(let j=0,te=J.length;j<te;j++){const ie=J[j],oe=G[ie.materialIndex];if(oe&&oe.visible){const N=b(R,oe,k,M);R.onBeforeShadow(i,R,A,z,ae,N,ie),i.renderBufferDirect(z,null,ae,N,R,ie),R.onAfterShadow(i,R,A,z,ae,N,ie)}}}else if(G.visible){const J=b(R,G,k,M);R.onBeforeShadow(i,R,A,z,ae,J,null),i.renderBufferDirect(z,null,ae,J,R,null),R.onAfterShadow(i,R,A,z,ae,J,null)}}const V=R.children;for(let ae=0,G=V.length;ae<G;ae++)E(V[ae],A,z,k,M)}function C(R){R.target.removeEventListener("dispose",C);for(const z in f){const k=f[z],M=R.target.uuid;M in k&&(k[M].dispose(),delete k[M])}}}function b8(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const ve=new Hn;let xe=null;const Ne=new Hn(0,0,0,0);return{setMask:function(Ze){xe!==Ze&&!F&&(i.colorMask(Ze,Ze,Ze,Ze),xe=Ze)},setLocked:function(Ze){F=Ze},setClear:function(Ze,vt,It,qe,Ve){Ve===!0&&(Ze*=qe,vt*=qe,It*=qe),ve.set(Ze,vt,It,qe),Ne.equals(ve)===!1&&(i.clearColor(Ze,vt,It,qe),Ne.copy(ve))},reset:function(){F=!1,xe=null,Ne.set(-1,0,0,0)}}}function s(){let F=!1,ve=null,xe=null,Ne=null;return{setTest:function(Ze){Ze?Ce(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Ze){ve!==Ze&&!F&&(i.depthMask(Ze),ve=Ze)},setFunc:function(Ze){if(xe!==Ze){switch(Ze){case Xk:i.depthFunc(i.NEVER);break;case qk:i.depthFunc(i.ALWAYS);break;case Yk:i.depthFunc(i.LESS);break;case Lh:i.depthFunc(i.LEQUAL);break;case jk:i.depthFunc(i.EQUAL);break;case Kk:i.depthFunc(i.GEQUAL);break;case Zk:i.depthFunc(i.GREATER);break;case Jk:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Ze}},setLocked:function(Ze){F=Ze},setClear:function(Ze){Ne!==Ze&&(i.clearDepth(Ze),Ne=Ze)},reset:function(){F=!1,ve=null,xe=null,Ne=null}}}function a(){let F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,It=null,qe=null,Ve=null;return{setTest:function(je){F||(je?Ce(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(je){ve!==je&&!F&&(i.stencilMask(je),ve=je)},setFunc:function(je,ye,nt){(xe!==je||Ne!==ye||Ze!==nt)&&(i.stencilFunc(je,ye,nt),xe=je,Ne=ye,Ze=nt)},setOp:function(je,ye,nt){(vt!==je||It!==ye||qe!==nt)&&(i.stencilOp(je,ye,nt),vt=je,It=ye,qe=nt)},setLocked:function(je){F=je},setClear:function(je){Ve!==je&&(i.clearStencil(je),Ve=je)},reset:function(){F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,It=null,qe=null,Ve=null}}}const l=new r,u=new s,f=new a,h=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,x=[],_=null,v=!1,w=null,b=null,E=null,C=null,R=null,A=null,z=null,k=new Yt(0,0,0),M=0,U=!1,V=null,ae=null,G=null,J=null,j=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,oe=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(N)[1]),ie=oe>=1):N.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ie=oe>=2);let ce=null,Se={};const Je=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ue=new Hn().fromArray(Je),be=new Hn().fromArray(ne);function De(F,ve,xe,Ne){const Ze=new Uint8Array(4),vt=i.createTexture();i.bindTexture(F,vt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<xe;It++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(ve+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return vt}const Oe={};Oe[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ce(i.DEPTH_TEST),u.setFunc(Lh),et(!1),O(HS),Ce(i.CULL_FACE),Ue(ao);function Ce(F){m[F]!==!0&&(i.enable(F),m[F]=!0)}function gt(F){m[F]!==!1&&(i.disable(F),m[F]=!1)}function $e(F,ve){return g[F]!==ve?(i.bindFramebuffer(F,ve),g[F]=ve,n&&(F===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function q(F,ve){let xe=x,Ne=!1;if(F)if(xe=y.get(ve),xe===void 0&&(xe=[],y.set(ve,xe)),F.isWebGLMultipleRenderTargets){const Ze=F.texture;if(xe.length!==Ze.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,It=Ze.length;vt<It;vt++)xe[vt]=i.COLOR_ATTACHMENT0+vt;xe.length=Ze.length,Ne=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ne=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ne=!0);Ne&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function st(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const Te={[zo]:i.FUNC_ADD,[Lk]:i.FUNC_SUBTRACT,[Dk]:i.FUNC_REVERSE_SUBTRACT};if(n)Te[$S]=i.MIN,Te[XS]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Te[$S]=F.MIN_EXT,Te[XS]=F.MAX_EXT)}const ke={[Ik]:i.ZERO,[Ok]:i.ONE,[Uk]:i.SRC_COLOR,[Lg]:i.SRC_ALPHA,[Hk]:i.SRC_ALPHA_SATURATE,[zk]:i.DST_COLOR,[Fk]:i.DST_ALPHA,[Nk]:i.ONE_MINUS_SRC_COLOR,[Dg]:i.ONE_MINUS_SRC_ALPHA,[Gk]:i.ONE_MINUS_DST_COLOR,[Bk]:i.ONE_MINUS_DST_ALPHA,[kk]:i.CONSTANT_COLOR,[Wk]:i.ONE_MINUS_CONSTANT_COLOR,[Vk]:i.CONSTANT_ALPHA,[$k]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(F,ve,xe,Ne,Ze,vt,It,qe,Ve,je){if(F===ao){v===!0&&(gt(i.BLEND),v=!1);return}if(v===!1&&(Ce(i.BLEND),v=!0),F!==Pk){if(F!==w||je!==U){if((b!==zo||R!==zo)&&(i.blendEquation(i.FUNC_ADD),b=zo,R=zo),je)switch(F){case ml:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kS:i.blendFunc(i.ONE,i.ONE);break;case WS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case VS:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case kS:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case WS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case VS:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,C=null,A=null,z=null,k.set(0,0,0),M=0,w=F,U=je}return}Ze=Ze||ve,vt=vt||xe,It=It||Ne,(ve!==b||Ze!==R)&&(i.blendEquationSeparate(Te[ve],Te[Ze]),b=ve,R=Ze),(xe!==E||Ne!==C||vt!==A||It!==z)&&(i.blendFuncSeparate(ke[xe],ke[Ne],ke[vt],ke[It]),E=xe,C=Ne,A=vt,z=It),(qe.equals(k)===!1||Ve!==M)&&(i.blendColor(qe.r,qe.g,qe.b,Ve),k.copy(qe),M=Ve),w=F,U=!1}function K(F,ve){F.side===Ms?gt(i.CULL_FACE):Ce(i.CULL_FACE);let xe=F.side===Ii;ve&&(xe=!xe),et(xe),F.blending===ml&&F.transparent===!1?Ue(ao):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),l.setMask(F.colorWrite);const Ne=F.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){V!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),V=F)}function O(F){F!==Ak?(Ce(i.CULL_FACE),F!==ae&&(F===HS?i.cullFace(i.BACK):F===Ck?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),ae=F}function P(F){F!==G&&(ie&&i.lineWidth(F),G=F)}function Y(F,ve,xe){F?(Ce(i.POLYGON_OFFSET_FILL),(J!==ve||j!==xe)&&(i.polygonOffset(ve,xe),J=ve,j=xe)):gt(i.POLYGON_OFFSET_FILL)}function me(F){F?Ce(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function de(F){F===void 0&&(F=i.TEXTURE0+te-1),ce!==F&&(i.activeTexture(F),ce=F)}function _e(F,ve,xe){xe===void 0&&(ce===null?xe=i.TEXTURE0+te-1:xe=ce);let Ne=Se[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},Se[xe]=Ne),(Ne.type!==F||Ne.texture!==ve)&&(ce!==xe&&(i.activeTexture(xe),ce=xe),i.bindTexture(F,ve||Oe[F]),Ne.type=F,Ne.texture=ve)}function Ae(){const F=Se[ce];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function we(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ge(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(F){ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function _t(F){be.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),be.copy(F))}function Dt(F,ve){let xe=p.get(ve);xe===void 0&&(xe=new WeakMap,p.set(ve,xe));let Ne=xe.get(F);Ne===void 0&&(Ne=i.getUniformBlockIndex(ve,F.name),xe.set(F,Ne))}function Pe(F,ve){const Ne=p.get(ve).get(F);h.get(ve)!==Ne&&(i.uniformBlockBinding(ve,Ne,F.__bindingPointIndex),h.set(ve,Ne))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ce=null,Se={},g={},y=new WeakMap,x=[],_=null,v=!1,w=null,b=null,E=null,C=null,R=null,A=null,z=null,k=new Yt(0,0,0),M=0,U=!1,V=null,ae=null,G=null,J=null,j=null,ue.set(0,0,i.canvas.width,i.canvas.height),be.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Ce,disable:gt,bindFramebuffer:$e,drawBuffers:q,useProgram:st,setBlending:Ue,setMaterial:K,setFlipSided:et,setCullFace:O,setLineWidth:P,setPolygonOffset:Y,setScissorTest:me,activeTexture:de,bindTexture:_e,unbindTexture:Ae,compressedTexImage2D:we,compressedTexImage3D:Ee,texImage2D:We,texImage3D:Ie,updateUBOMapping:Dt,uniformBlockBinding:Pe,texStorage2D:Xe,texStorage3D:ot,texSubImage2D:Ge,texSubImage3D:tt,compressedTexSubImage2D:pe,compressedTexSubImage3D:bt,scissor:at,viewport:_t,reset:Ct}}function w8(i,e,t,n,r,s,a){const l=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,P){return g?new OffscreenCanvas(O,P):jc("canvas")}function x(O,P,Y,me){let de=1;if((O.width>me||O.height>me)&&(de=me/Math.max(O.width,O.height)),de<1||P===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const _e=P?zg:Math.floor,Ae=_e(de*O.width),we=_e(de*O.height);p===void 0&&(p=y(Ae,we));const Ee=Y?y(Ae,we):p;return Ee.width=Ae,Ee.height=we,Ee.getContext("2d").drawImage(O,0,0,Ae,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Ae+"x"+we+")."),Ee}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function _(O){return EE(O.width)&&EE(O.height)}function v(O){return l?!1:O.wrapS!==Ir||O.wrapT!==Ir||O.minFilter!==_i&&O.minFilter!==An}function w(O,P){return O.generateMipmaps&&P&&O.minFilter!==_i&&O.minFilter!==An}function b(O){i.generateMipmap(O)}function E(O,P,Y,me,de=!1){if(l===!1)return P;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e=P;if(P===i.RED&&(Y===i.FLOAT&&(_e=i.R32F),Y===i.HALF_FLOAT&&(_e=i.R16F),Y===i.UNSIGNED_BYTE&&(_e=i.R8)),P===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.R8UI),Y===i.UNSIGNED_SHORT&&(_e=i.R16UI),Y===i.UNSIGNED_INT&&(_e=i.R32UI),Y===i.BYTE&&(_e=i.R8I),Y===i.SHORT&&(_e=i.R16I),Y===i.INT&&(_e=i.R32I)),P===i.RG&&(Y===i.FLOAT&&(_e=i.RG32F),Y===i.HALF_FLOAT&&(_e=i.RG16F),Y===i.UNSIGNED_BYTE&&(_e=i.RG8)),P===i.RGBA){const Ae=de?Dh:qt.getTransfer(me);Y===i.FLOAT&&(_e=i.RGBA32F),Y===i.HALF_FLOAT&&(_e=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(_e=Ae===sn?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(O,P,Y){return w(O,Y)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==An?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function R(O){return O===_i||O===qS||O===dc?i.NEAREST:i.LINEAR}function A(O){const P=O.target;P.removeEventListener("dispose",A),k(P),P.isVideoTexture&&h.delete(P)}function z(O){const P=O.target;P.removeEventListener("dispose",z),U(P)}function k(O){const P=n.get(O);if(P.__webglInit===void 0)return;const Y=O.source,me=m.get(Y);if(me){const de=me[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(O),Object.keys(me).length===0&&m.delete(Y)}n.remove(O)}function M(O){const P=n.get(O);i.deleteTexture(P.__webglTexture);const Y=O.source,me=m.get(Y);delete me[P.__cacheKey],a.memory.textures--}function U(O){const P=O.texture,Y=n.get(O),me=n.get(P);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Y.__webglFramebuffer[de]))for(let _e=0;_e<Y.__webglFramebuffer[de].length;_e++)i.deleteFramebuffer(Y.__webglFramebuffer[de][_e]);else i.deleteFramebuffer(Y.__webglFramebuffer[de]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[de])}else{if(Array.isArray(Y.__webglFramebuffer))for(let de=0;de<Y.__webglFramebuffer.length;de++)i.deleteFramebuffer(Y.__webglFramebuffer[de]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let de=0;de<Y.__webglColorRenderbuffer.length;de++)Y.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[de]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let de=0,_e=P.length;de<_e;de++){const Ae=n.get(P[de]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(P[de])}n.remove(P),n.remove(O)}let V=0;function ae(){V=0}function G(){const O=V;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),V+=1,O}function J(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function j(O,P){const Y=n.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){const me=O.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,O,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function te(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){ue(Y,O,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function ie(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){ue(Y,O,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function oe(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){be(Y,O,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const N={[Ug]:i.REPEAT,[Ir]:i.CLAMP_TO_EDGE,[Ng]:i.MIRRORED_REPEAT},ce={[_i]:i.NEAREST,[qS]:i.NEAREST_MIPMAP_NEAREST,[dc]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[gm]:i.LINEAR_MIPMAP_NEAREST,[Wo]:i.LINEAR_MIPMAP_LINEAR},Se={[xW]:i.NEVER,[bW]:i.ALWAYS,[yW]:i.LESS,[M1]:i.LEQUAL,[SW]:i.EQUAL,[TW]:i.GEQUAL,[EW]:i.GREATER,[MW]:i.NOTEQUAL};function Je(O,P,Y){if(P.type===Ts&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===An||P.magFilter===gm||P.magFilter===dc||P.magFilter===Wo||P.minFilter===An||P.minFilter===gm||P.minFilter===dc||P.minFilter===Wo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(O,i.TEXTURE_WRAP_S,N[P.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,N[P.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,N[P.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ce[P.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ce[P.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==Ir||P.wrapT!==Ir)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,R(P.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,R(P.minFilter)),P.minFilter!==_i&&P.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Se[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===_i||P.minFilter!==dc&&P.minFilter!==Wo||P.type===Ts&&e.has("OES_texture_float_linear")===!1||l===!1&&P.type===Yc&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(O,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function ne(O,P){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",A));const me=P.source;let de=m.get(me);de===void 0&&(de={},m.set(me,de));const _e=J(P);if(_e!==O.__cacheKey){de[_e]===void 0&&(de[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),de[_e].usedTimes++;const Ae=de[O.__cacheKey];Ae!==void 0&&(de[O.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(P)),O.__cacheKey=_e,O.__webglTexture=de[_e].texture}return Y}function ue(O,P,Y){let me=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(me=i.TEXTURE_3D);const de=ne(O,P),_e=P.source;t.bindTexture(me,O.__webglTexture,i.TEXTURE0+Y);const Ae=n.get(_e);if(_e.version!==Ae.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);const we=qt.getPrimaries(qt.workingColorSpace),Ee=P.colorSpace===gr?null:qt.getPrimaries(P.colorSpace),Ge=P.colorSpace===gr||we===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);const tt=v(P)&&_(P.image)===!1;let pe=x(P.image,tt,!1,r.maxTextureSize);pe=et(P,pe);const bt=_(pe)||l,Xe=s.convert(P.format,P.colorSpace);let ot=s.convert(P.type),We=E(P.internalFormat,Xe,ot,P.colorSpace,P.isVideoTexture);Je(me,P,bt);let Ie;const at=P.mipmaps,_t=l&&P.isVideoTexture!==!0&&We!==S1,Dt=Ae.__version===void 0||de===!0,Pe=_e.dataReady,Ct=C(P,pe,bt);if(P.isDepthTexture)We=i.DEPTH_COMPONENT,l?P.type===Ts?We=i.DEPTH_COMPONENT32F:P.type===io?We=i.DEPTH_COMPONENT24:P.type===Qo?We=i.DEPTH24_STENCIL8:We=i.DEPTH_COMPONENT16:P.type===Ts&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ea&&We===i.DEPTH_COMPONENT&&P.type!==J_&&P.type!==io&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=io,ot=s.convert(P.type)),P.format===Al&&We===i.DEPTH_COMPONENT&&(We=i.DEPTH_STENCIL,P.type!==Qo&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Qo,ot=s.convert(P.type))),Dt&&(_t?t.texStorage2D(i.TEXTURE_2D,1,We,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,We,pe.width,pe.height,0,Xe,ot,null));else if(P.isDataTexture)if(at.length>0&&bt){_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,at[0].width,at[0].height);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,ot,Ie.data):t.texImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Xe,ot,Ie.data);P.generateMipmaps=!1}else _t?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Xe,ot,pe.data)):t.texImage2D(i.TEXTURE_2D,0,We,pe.width,pe.height,0,Xe,ot,pe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){_t&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,We,at[0].width,at[0].height,pe.depth);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],P.format!==Or?Xe!==null?_t?Pe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,pe.depth,Xe,Ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,We,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,pe.depth,Xe,ot,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,We,Ie.width,Ie.height,pe.depth,0,Xe,ot,Ie.data)}else{_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,at[0].width,at[0].height);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],P.format!==Or?Xe!==null?_t?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,ot,Ie.data):t.texImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Xe,ot,Ie.data)}else if(P.isDataArrayTexture)_t?(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,We,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Xe,ot,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,Xe,ot,pe.data);else if(P.isData3DTexture)_t?(Dt&&t.texStorage3D(i.TEXTURE_3D,Ct,We,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Xe,ot,pe.data)):t.texImage3D(i.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,Xe,ot,pe.data);else if(P.isFramebufferTexture){if(Dt)if(_t)t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height);else{let F=pe.width,ve=pe.height;for(let xe=0;xe<Ct;xe++)t.texImage2D(i.TEXTURE_2D,xe,We,F,ve,0,Xe,ot,null),F>>=1,ve>>=1}}else if(at.length>0&&bt){_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,at[0].width,at[0].height);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Xe,ot,Ie):t.texImage2D(i.TEXTURE_2D,F,We,Xe,ot,Ie);P.generateMipmaps=!1}else _t?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,ot,pe)):t.texImage2D(i.TEXTURE_2D,0,We,Xe,ot,pe);w(P,bt)&&b(me),Ae.__version=_e.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function be(O,P,Y){if(P.image.length!==6)return;const me=ne(O,P),de=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);const _e=n.get(de);if(de.version!==_e.__version||me===!0){t.activeTexture(i.TEXTURE0+Y);const Ae=qt.getPrimaries(qt.workingColorSpace),we=P.colorSpace===gr?null:qt.getPrimaries(P.colorSpace),Ee=P.colorSpace===gr||Ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ge=P.isCompressedTexture||P.image[0].isCompressedTexture,tt=P.image[0]&&P.image[0].isDataTexture,pe=[];for(let F=0;F<6;F++)!Ge&&!tt?pe[F]=x(P.image[F],!1,!0,r.maxCubemapSize):pe[F]=tt?P.image[F].image:P.image[F],pe[F]=et(P,pe[F]);const bt=pe[0],Xe=_(bt)||l,ot=s.convert(P.format,P.colorSpace),We=s.convert(P.type),Ie=E(P.internalFormat,ot,We,P.colorSpace),at=l&&P.isVideoTexture!==!0,_t=_e.__version===void 0||me===!0,Dt=de.dataReady;let Pe=C(P,bt,Xe);Je(i.TEXTURE_CUBE_MAP,P,Xe);let Ct;if(Ge){at&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ie,bt.width,bt.height);for(let F=0;F<6;F++){Ct=pe[F].mipmaps;for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];P.format!==Or?ot!==null?at?Dt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,ot,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,ot,We,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,Ie,xe.width,xe.height,0,ot,We,xe.data)}}}else{Ct=P.mipmaps,at&&_t&&(Ct.length>0&&Pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ie,pe[0].width,pe[0].height));for(let F=0;F<6;F++)if(tt){at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,pe[F].width,pe[F].height,ot,We,pe[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ie,pe[F].width,pe[F].height,0,ot,We,pe[F].data);for(let ve=0;ve<Ct.length;ve++){const Ne=Ct[ve].image[F].image;at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,Ne.width,Ne.height,ot,We,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,Ie,Ne.width,Ne.height,0,ot,We,Ne.data)}}else{at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ot,We,pe[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ie,ot,We,pe[F]);for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,ot,We,xe.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,Ie,ot,We,xe.image[F])}}}w(P,Xe)&&b(i.TEXTURE_CUBE_MAP),_e.__version=de.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function De(O,P,Y,me,de,_e){const Ae=s.convert(Y.format,Y.colorSpace),we=s.convert(Y.type),Ee=E(Y.internalFormat,Ae,we,Y.colorSpace);if(!n.get(P).__hasExternalTextures){const tt=Math.max(1,P.width>>_e),pe=Math.max(1,P.height>>_e);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,_e,Ee,tt,pe,P.depth,0,Ae,we,null):t.texImage2D(de,_e,Ee,tt,pe,0,Ae,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,de,n.get(Y).__webglTexture,0,ke(P)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,de,n.get(Y).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(O,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let me=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Ue(P)){const de=P.depthTexture;de&&de.isDepthTexture&&(de.type===Ts?me=i.DEPTH_COMPONENT32F:de.type===io&&(me=i.DEPTH_COMPONENT24));const _e=ke(P);Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,me,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const me=ke(P);Y&&Ue(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,P.width,P.height):Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{const me=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0;de<me.length;de++){const _e=me[de],Ae=s.convert(_e.format,_e.colorSpace),we=s.convert(_e.type),Ee=E(_e.internalFormat,Ae,we,_e.colorSpace),Ge=ke(P);Y&&Ue(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,Ee,P.width,P.height):Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,Ee,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),j(P.depthTexture,0);const me=n.get(P.depthTexture).__webglTexture,de=ke(P);if(P.depthTexture.format===ea)Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(P.depthTexture.format===Al)Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function gt(O){const P=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ce(P.__webglFramebuffer,O)}else if(Y){P.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[me]),P.__webglDepthbuffer[me]=i.createRenderbuffer(),Oe(P.__webglDepthbuffer[me],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Oe(P.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(O,P,Y){const me=n.get(O);P!==void 0&&De(me.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&gt(O)}function q(O){const P=O.texture,Y=n.get(O),me=n.get(P);O.addEventListener("dispose",z),O.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=P.version,a.memory.textures++);const de=O.isWebGLCubeRenderTarget===!0,_e=O.isWebGLMultipleRenderTargets===!0,Ae=_(O)||l;if(de){Y.__webglFramebuffer=[];for(let we=0;we<6;we++)if(l&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer[we]=[];for(let Ee=0;Ee<P.mipmaps.length;Ee++)Y.__webglFramebuffer[we][Ee]=i.createFramebuffer()}else Y.__webglFramebuffer[we]=i.createFramebuffer()}else{if(l&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer=[];for(let we=0;we<P.mipmaps.length;we++)Y.__webglFramebuffer[we]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(_e)if(r.drawBuffers){const we=O.texture;for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const tt=n.get(we[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&O.samples>0&&Ue(O)===!1){const we=_e?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<we.length;Ee++){const Ge=we[Ee];Y.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);const tt=s.convert(Ge.format,Ge.colorSpace),pe=s.convert(Ge.type),bt=E(Ge.internalFormat,tt,pe,Ge.colorSpace,O.isXRRenderTarget===!0),Xe=ke(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,bt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Je(i.TEXTURE_CUBE_MAP,P,Ae);for(let we=0;we<6;we++)if(l&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)De(Y.__webglFramebuffer[we][Ee],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ee);else De(Y.__webglFramebuffer[we],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);w(P,Ae)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const we=O.texture;for(let Ee=0,Ge=we.length;Ee<Ge;Ee++){const tt=we[Ee],pe=n.get(tt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Je(i.TEXTURE_2D,tt,Ae),De(Y.__webglFramebuffer,O,tt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),w(tt,Ae)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(l?we=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,me.__webglTexture),Je(we,P,Ae),l&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)De(Y.__webglFramebuffer[Ee],O,P,i.COLOR_ATTACHMENT0,we,Ee);else De(Y.__webglFramebuffer,O,P,i.COLOR_ATTACHMENT0,we,0);w(P,Ae)&&b(we),t.unbindTexture()}O.depthBuffer&&gt(O)}function st(O){const P=_(O)||l,Y=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let me=0,de=Y.length;me<de;me++){const _e=Y[me];if(w(_e,P)){const Ae=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(_e).__webglTexture;t.bindTexture(Ae,we),b(Ae),t.unbindTexture()}}}function Te(O){if(l&&O.samples>0&&Ue(O)===!1){const P=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],Y=O.width,me=O.height;let de=i.COLOR_BUFFER_BIT;const _e=[],Ae=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(O),Ee=O.isWebGLMultipleRenderTargets===!0;if(Ee)for(let Ge=0;Ge<P.length;Ge++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ge=0;Ge<P.length;Ge++){_e.push(i.COLOR_ATTACHMENT0+Ge),O.depthBuffer&&_e.push(Ae);const tt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(tt===!1&&(O.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ge]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ae])),Ee){const pe=n.get(P[Ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,Y,me,0,0,Y,me,de,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Ge=0;Ge<P.length;Ge++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.RENDERBUFFER,we.__webglColorRenderbuffer[Ge]);const tt=n.get(P[Ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ge,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function ke(O){return Math.min(r.maxSamples,O.samples)}function Ue(O){const P=n.get(O);return l&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function K(O){const P=a.render.frame;h.get(O)!==P&&(h.set(O,P),O.update())}function et(O,P){const Y=O.colorSpace,me=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Fg||Y!==Ls&&Y!==gr&&(qt.getTransfer(Y)===sn?l===!1?e.has("EXT_sRGB")===!0&&me===Or?(O.format=Fg,O.minFilter=An,O.generateMipmaps=!1):P=b1.sRGBToLinear(P):(me!==Or||de!==co)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=G,this.resetTextureUnits=ae,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=ie,this.setTextureCube=oe,this.rebindTextures=$e,this.setupRenderTarget=q,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ue}function A8(i,e,t){const n=t.isWebGL2;function r(s,a=gr){let l;const u=qt.getTransfer(a);if(s===co)return i.UNSIGNED_BYTE;if(s===g1)return i.UNSIGNED_SHORT_4_4_4_4;if(s===_1)return i.UNSIGNED_SHORT_5_5_5_1;if(s===aW)return i.BYTE;if(s===lW)return i.SHORT;if(s===J_)return i.UNSIGNED_SHORT;if(s===m1)return i.INT;if(s===io)return i.UNSIGNED_INT;if(s===Ts)return i.FLOAT;if(s===Yc)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===cW)return i.ALPHA;if(s===Or)return i.RGBA;if(s===uW)return i.LUMINANCE;if(s===fW)return i.LUMINANCE_ALPHA;if(s===ea)return i.DEPTH_COMPONENT;if(s===Al)return i.DEPTH_STENCIL;if(s===Fg)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===hW)return i.RED;if(s===v1)return i.RED_INTEGER;if(s===dW)return i.RG;if(s===x1)return i.RG_INTEGER;if(s===y1)return i.RGBA_INTEGER;if(s===_m||s===vm||s===xm||s===ym)if(u===sn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===_m)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===vm)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xm)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ym)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===_m)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===vm)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xm)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ym)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===YS||s===jS||s===KS||s===ZS)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===YS)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jS)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===KS)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ZS)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===S1)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===JS||s===QS)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===JS)return u===sn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===QS)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===eE||s===tE||s===nE||s===iE||s===rE||s===sE||s===oE||s===aE||s===lE||s===cE||s===uE||s===fE||s===hE||s===dE)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===eE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===iE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===aE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Sm||s===pE||s===mE)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Sm)return u===sn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pE)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mE)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pW||s===gE||s===_E||s===vE)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Sm)return l.COMPRESSED_RED_RGTC1_EXT;if(s===gE)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_E)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vE)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qo?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class C8 extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yf extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const R8={type:"move"};class Xm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n),v=this._getHandJoint(f,x);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,y=.005;f.inputState.pinching&&m>g+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=g-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(R8)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const P8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,L8=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class D8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ai,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ds({extensions:{fragDepth:!0},vertexShader:P8,fragmentShader:L8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zr(new lu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class I8 extends Nl{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",u=1,f=null,h=null,p=null,m=null,g=null,y=null;const x=new D8,_=t.getContextAttributes();let v=null,w=null;const b=[],E=[],C=new Bt;let R=null;const A=new mr;A.layers.enable(1),A.viewport=new Hn;const z=new mr;z.layers.enable(2),z.viewport=new Hn;const k=[A,z],M=new C8;M.layers.enable(1),M.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=b[ne];return ue===void 0&&(ue=new Xm,b[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=b[ne];return ue===void 0&&(ue=new Xm,b[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=b[ne];return ue===void 0&&(ue=new Xm,b[ne]=ue),ue.getHandSpace()};function ae(ne){const ue=E.indexOf(ne.inputSource);if(ue===-1)return;const be=b[ue];be!==void 0&&(be.update(ne.inputSource,ne.frame,f||a),be.dispatchEvent({type:ne.type,data:ne.inputSource}))}function G(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",J);for(let ne=0;ne<b.length;ne++){const ue=E[ne];ue!==null&&(E[ne]=null,b[ne].disconnect(ue))}U=null,V=null,x.reset(),e.setRenderTarget(v),g=null,m=null,p=null,r=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",G),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new ua(g.framebufferWidth,g.framebufferHeight,{format:Or,type:co,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ue=null,be=null,De=null;_.depth&&(De=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?Al:ea,be=_.stencil?Qo:io);const Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Oe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new ua(m.textureWidth,m.textureHeight,{format:Or,type:co,depthTexture:new B1(m.textureWidth,m.textureHeight,be,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(w);Ce.__ignoreDepthValues=m.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(u),f=null,a=await r.requestReferenceSpace(l),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(ne){for(let ue=0;ue<ne.removed.length;ue++){const be=ne.removed[ue],De=E.indexOf(be);De>=0&&(E[De]=null,b[De].disconnect(be))}for(let ue=0;ue<ne.added.length;ue++){const be=ne.added[ue];let De=E.indexOf(be);if(De===-1){for(let Ce=0;Ce<b.length;Ce++)if(Ce>=E.length){E.push(be),De=Ce;break}else if(E[Ce]===null){E[Ce]=be,De=Ce;break}if(De===-1)break}const Oe=b[De];Oe&&Oe.connect(be)}}const j=new se,te=new se;function ie(ne,ue,be){j.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(be.matrixWorld);const De=j.distanceTo(te),Oe=ue.projectionMatrix.elements,Ce=be.projectionMatrix.elements,gt=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),q=(Oe[9]+1)/Oe[5],st=(Oe[9]-1)/Oe[5],Te=(Oe[8]-1)/Oe[0],ke=(Ce[8]+1)/Ce[0],Ue=gt*Te,K=gt*ke,et=De/(-Te+ke),O=et*-Te;ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(O),ne.translateZ(et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const P=gt+et,Y=$e+et,me=Ue-O,de=K+(De-O),_e=q*$e/Y*P,Ae=st*$e/Y*P;ne.projectionMatrix.makePerspective(me,de,_e,Ae,P,Y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function oe(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;x.texture!==null&&(ne.near=x.depthNear,ne.far=x.depthFar),M.near=z.near=A.near=ne.near,M.far=z.far=A.far=ne.far,(U!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,V=M.far,A.near=U,A.far=V,z.near=U,z.far=V,A.updateProjectionMatrix(),z.updateProjectionMatrix(),ne.updateProjectionMatrix());const ue=ne.parent,be=M.cameras;oe(M,ue);for(let De=0;De<be.length;De++)oe(be[De],ue);be.length===2?ie(M,A,z):M.projectionMatrix.copy(A.projectionMatrix),N(ne,M,ue)};function N(ne,ue,be){be===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(be.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Bg*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null};let ce=null;function Se(ne,ue){if(h=ue.getViewerPose(f||a),y=ue,h!==null){const be=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let De=!1;be.length!==M.cameras.length&&(M.cameras.length=0,De=!0);for(let Ce=0;Ce<be.length;Ce++){const gt=be[Ce];let $e=null;if(g!==null)$e=g.getViewport(gt);else{const st=p.getViewSubImage(m,gt);$e=st.viewport,Ce===0&&(e.setRenderTargetTextures(w,st.colorTexture,m.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(w))}let q=k[Ce];q===void 0&&(q=new mr,q.layers.enable(Ce),q.viewport=new Hn,k[Ce]=q),q.matrix.fromArray(gt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(gt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set($e.x,$e.y,$e.width,$e.height),Ce===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),De===!0&&M.cameras.push(q)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=p.getDepthInformation(be[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let be=0;be<b.length;be++){const De=E[be],Oe=b[be];De!==null&&Oe!==void 0&&Oe.update(De,ue,f||a)}x.render(e,M),ce&&ce(ne,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),y=null}const Je=new F1;Je.setAnimationLoop(Se),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}}function O8(i,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,I1(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,w,b,E){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(_,v):v.isMeshToonMaterial?(s(_,v),p(_,v)):v.isMeshPhongMaterial?(s(_,v),h(_,v)):v.isMeshStandardMaterial?(s(_,v),m(_,v),v.isMeshPhysicalMaterial&&g(_,v,E)):v.isMeshMatcapMaterial?(s(_,v),y(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),x(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(a(_,v),v.isLineDashedMaterial&&l(_,v)):v.isPointsMaterial?u(_,v,w,b):v.isSpriteMaterial?f(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Ii&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Ii&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const w=e.get(v).envMap;if(w&&(_.envMap.value=w,_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap){_.lightMap.value=v.lightMap;const b=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=v.lightMapIntensity*b,t(v.lightMap,_.lightMapTransform)}v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function a(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function l(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function u(_,v,w,b){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*w,_.scale.value=b*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function f(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function p(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),e.get(v).envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,w){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ii&&_.clearcoatNormalScale.value.negate())),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,v){v.matcap&&(_.matcap.value=v.matcap)}function x(_,v){const w=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function U8(i,e,t,n){let r={},s={},a=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(w,b){const E=b.program;n.uniformBlockBinding(w,E)}function f(w,b){let E=r[w.id];E===void 0&&(y(w),E=h(w),r[w.id]=E,w.addEventListener("dispose",_));const C=b.program;n.updateUBOMapping(w,C);const R=e.render.frame;s[w.id]!==R&&(m(w),s[w.id]=R)}function h(w){const b=p();w.__bindingPointIndex=b;const E=i.createBuffer(),C=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,E),E}function p(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const b=r[w.id],E=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let R=0,A=E.length;R<A;R++){const z=Array.isArray(E[R])?E[R]:[E[R]];for(let k=0,M=z.length;k<M;k++){const U=z[k];if(g(U,R,k,C)===!0){const V=U.__offset,ae=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let J=0;J<ae.length;J++){const j=ae[J],te=x(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+G,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,b,E,C){const R=w.value,A=b+"_"+E;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const z=C[A];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[A]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function y(w){const b=w.uniforms;let E=0;const C=16;for(let A=0,z=b.length;A<z;A++){const k=Array.isArray(b[A])?b[A]:[b[A]];for(let M=0,U=k.length;M<U;M++){const V=k[M],ae=Array.isArray(V.value)?V.value:[V.value];for(let G=0,J=ae.length;G<J;G++){const j=ae[G],te=x(j),ie=E%C;ie!==0&&C-ie<te.boundary&&(E+=C-ie),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=te.storage}}}const R=E%C;return R>0&&(E+=C-R),w.__size=E,w.__cache={},this}function x(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function _(w){const b=w.target;b.removeEventListener("dispose",_);const E=a.indexOf(b.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function v(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:u,update:f,dispose:v}}class V1{constructor(e={}){const{canvas:t=AW(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const v=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=lo,this.toneMappingExposure=1;const b=this;let E=!1,C=0,R=0,A=null,z=-1,k=null;const M=new Hn,U=new Hn;let V=null;const ae=new Yt(0);let G=0,J=t.width,j=t.height,te=1,ie=null,oe=null;const N=new Hn(0,0,J,j),ce=new Hn(0,0,J,j);let Se=!1;const Je=new N1;let ne=!1,ue=!1,be=null;const De=new Yn,Oe=new Bt,Ce=new se,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return A===null?te:1}let q=n;function st(I,$){for(let ee=0;ee<I.length;ee++){const Q=I[ee],Z=t.getContext(Q,$);if(Z!==null)return Z}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Z_}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ve,!1),q===null){const $=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&$.shift(),q=st($,I),q===null)throw st($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Te,ke,Ue,K,et,O,P,Y,me,de,_e,Ae,we,Ee,Ge,tt,pe,bt,Xe,ot,We,Ie,at,_t;function Dt(){Te=new k5(q),ke=new U5(q,Te,e),Te.init(ke),Ie=new A8(q,Te,ke),Ue=new b8(q,Te,ke),K=new $5(q),et=new f8,O=new w8(q,Te,Ue,et,ke,Ie,K),P=new F5(b),Y=new H5(b),me=new JW(q,ke),at=new I5(q,Te,me,ke),de=new W5(q,me,K,at),_e=new j5(q,de,me,K),Xe=new Y5(q,ke,O),tt=new N5(et),Ae=new u8(b,P,Y,Te,ke,at,tt),we=new O8(b,et),Ee=new d8,Ge=new x8(Te,ke),bt=new D5(b,P,Y,Ue,_e,m,u),pe=new T8(b,_e,ke),_t=new U8(q,K,ke,Ue),ot=new O5(q,Te,K,ke),We=new V5(q,Te,K,ke),K.programs=Ae.programs,b.capabilities=ke,b.extensions=Te,b.properties=et,b.renderLists=Ee,b.shadowMap=pe,b.state=Ue,b.info=K}Dt();const Pe=new I8(b,q);this.xr=Pe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const I=Te.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Te.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(I){I!==void 0&&(te=I,this.setSize(J,j,!1))},this.getSize=function(I){return I.set(J,j)},this.setSize=function(I,$,ee=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,j=$,t.width=Math.floor(I*te),t.height=Math.floor($*te),ee===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(J*te,j*te).floor()},this.setDrawingBufferSize=function(I,$,ee){J=I,j=$,te=ee,t.width=Math.floor(I*ee),t.height=Math.floor($*ee),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,$,ee,Q){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,$,ee,Q),Ue.viewport(M.copy(N).multiplyScalar(te).floor())},this.getScissor=function(I){return I.copy(ce)},this.setScissor=function(I,$,ee,Q){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,$,ee,Q),Ue.scissor(U.copy(ce).multiplyScalar(te).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(I){Ue.setScissorTest(Se=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(I=!0,$=!0,ee=!0){let Q=0;if(I){let Z=!1;if(A!==null){const Me=A.texture.format;Z=Me===y1||Me===x1||Me===v1}if(Z){const Me=A.texture.type,Fe=Me===co||Me===io||Me===J_||Me===Qo||Me===g1||Me===_1,it=bt.getClearColor(),Be=bt.getClearAlpha(),Ye=it.r,rt=it.g,ht=it.b;Fe?(g[0]=Ye,g[1]=rt,g[2]=ht,g[3]=Be,q.clearBufferuiv(q.COLOR,0,g)):(y[0]=Ye,y[1]=rt,y[2]=ht,y[3]=Be,q.clearBufferiv(q.COLOR,0,y))}else Q|=q.COLOR_BUFFER_BIT}$&&(Q|=q.DEPTH_BUFFER_BIT),ee&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ee.dispose(),Ge.dispose(),et.dispose(),P.dispose(),Y.dispose(),_e.dispose(),at.dispose(),_t.dispose(),Ae.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ve),Pe.removeEventListener("sessionend",je),be&&(be.dispose(),be=null),ye.stop()};function Ct(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=K.autoReset,$=pe.enabled,ee=pe.autoUpdate,Q=pe.needsUpdate,Z=pe.type;Dt(),K.autoReset=I,pe.enabled=$,pe.autoUpdate=ee,pe.needsUpdate=Q,pe.type=Z}function ve(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function xe(I){const $=I.target;$.removeEventListener("dispose",xe),Ne($)}function Ne(I){Ze(I),et.remove(I)}function Ze(I){const $=et.get(I).programs;$!==void 0&&($.forEach(function(ee){Ae.releaseProgram(ee)}),I.isShaderMaterial&&Ae.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ee,Q,Z,Me){$===null&&($=gt);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,it=Xt(I,$,ee,Q,Z);Ue.setMaterial(Q,Fe);let Be=ee.index,Ye=1;if(Q.wireframe===!0){if(Be=de.getWireframeAttribute(ee),Be===void 0)return;Ye=2}const rt=ee.drawRange,ht=ee.attributes.position;let Kt=rt.start*Ye,pn=(rt.start+rt.count)*Ye;Me!==null&&(Kt=Math.max(Kt,Me.start*Ye),pn=Math.min(pn,(Me.start+Me.count)*Ye)),Be!==null?(Kt=Math.max(Kt,0),pn=Math.min(pn,Be.count)):ht!=null&&(Kt=Math.max(Kt,0),pn=Math.min(pn,ht.count));const Ft=pn-Kt;if(Ft<0||Ft===1/0)return;at.setup(Z,Q,it,ee,Be);let Wn,Ht=ot;if(Be!==null&&(Wn=me.get(Be),Ht=We,Ht.setIndex(Wn)),Z.isMesh)Q.wireframe===!0?(Ue.setLineWidth(Q.wireframeLinewidth*$e()),Ht.setMode(q.LINES)):Ht.setMode(q.TRIANGLES);else if(Z.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),Ue.setLineWidth(dt*$e()),Z.isLineSegments?Ht.setMode(q.LINES):Z.isLineLoop?Ht.setMode(q.LINE_LOOP):Ht.setMode(q.LINE_STRIP)}else Z.isPoints?Ht.setMode(q.POINTS):Z.isSprite&&Ht.setMode(q.TRIANGLES);if(Z.isBatchedMesh)Ht.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Ht.renderInstances(Kt,Ft,Z.count);else if(ee.isInstancedBufferGeometry){const dt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Bl=Math.min(ee.instanceCount,dt);Ht.renderInstances(Kt,Ft,Bl)}else Ht.render(Kt,Ft)};function vt(I,$,ee){I.transparent===!0&&I.side===Ms&&I.forceSinglePass===!1?(I.side=Ii,I.needsUpdate=!0,$t(I,$,ee),I.side=mo,I.needsUpdate=!0,$t(I,$,ee),I.side=Ms):$t(I,$,ee)}this.compile=function(I,$,ee=null){ee===null&&(ee=I),_=Ge.get(ee),_.init(),w.push(_),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),I!==ee&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(b._useLegacyLights);const Q=new Set;return I.traverse(function(Z){const Me=Z.material;if(Me)if(Array.isArray(Me))for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];vt(it,ee,Z),Q.add(it)}else vt(Me,ee,Z),Q.add(Me)}),w.pop(),_=null,Q},this.compileAsync=function(I,$,ee=null){const Q=this.compile(I,$,ee);return new Promise(Z=>{function Me(){if(Q.forEach(function(Fe){et.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){Z(I);return}setTimeout(Me,10)}Te.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let It=null;function qe(I){It&&It(I)}function Ve(){ye.stop()}function je(){ye.start()}const ye=new F1;ye.setAnimationLoop(qe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(I){It=I,Pe.setAnimationLoop(I),I===null?ye.stop():ye.start()},Pe.addEventListener("sessionstart",Ve),Pe.addEventListener("sessionend",je),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera($),$=Pe.getCamera()),I.isScene===!0&&I.onBeforeRender(b,I,$,A),_=Ge.get(I,w.length),_.init(),w.push(_),De.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Je.setFromProjectionMatrix(De),ue=this.localClippingEnabled,ne=tt.init(this.clippingPlanes,ue),x=Ee.get(I,v.length),x.init(),v.push(x),nt(I,$,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ie,oe),this.info.render.frame++,ne===!0&&tt.beginShadows();const ee=_.state.shadowsArray;if(pe.render(ee,I,$),ne===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&bt.render(x,I),_.setupLights(b._useLegacyLights),$.isArrayCamera){const Q=$.cameras;for(let Z=0,Me=Q.length;Z<Me;Z++){const Fe=Q[Z];Qe(x,I,Fe,Fe.viewport)}}else Qe(x,I,$);A!==null&&(O.updateMultisampleRenderTarget(A),O.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(b,I,$),at.resetDefaultState(),z=-1,k=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function nt(I,$,ee,Q){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Je.intersectsSprite(I)){Q&&Ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(De);const Fe=_e.update(I),it=I.material;it.visible&&x.push(I,Fe,it,ee,Ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Je.intersectsObject(I))){const Fe=_e.update(I),it=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ce.copy(I.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(I.matrixWorld).applyMatrix4(De)),Array.isArray(it)){const Be=Fe.groups;for(let Ye=0,rt=Be.length;Ye<rt;Ye++){const ht=Be[Ye],Kt=it[ht.materialIndex];Kt&&Kt.visible&&x.push(I,Fe,Kt,ee,Ce.z,ht)}}else it.visible&&x.push(I,Fe,it,ee,Ce.z,null)}}const Me=I.children;for(let Fe=0,it=Me.length;Fe<it;Fe++)nt(Me[Fe],$,ee,Q)}function Qe(I,$,ee,Q){const Z=I.opaque,Me=I.transmissive,Fe=I.transparent;_.setupLightsView(ee),ne===!0&&tt.setGlobalState(b.clippingPlanes,ee),Me.length>0&&ft(Z,Me,$,ee),Q&&Ue.viewport(M.copy(Q)),Z.length>0&&tn(Z,$,ee),Me.length>0&&tn(Me,$,ee),Fe.length>0&&tn(Fe,$,ee),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ft(I,$,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Me=ke.isWebGL2;be===null&&(be=new ua(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Yc:co,minFilter:Wo,samples:Me?4:0})),b.getDrawingBufferSize(Oe),Me?be.setSize(Oe.x,Oe.y):be.setSize(zg(Oe.x),zg(Oe.y));const Fe=b.getRenderTarget();b.setRenderTarget(be),b.getClearColor(ae),G=b.getClearAlpha(),G<1&&b.setClearColor(16777215,.5),b.clear();const it=b.toneMapping;b.toneMapping=lo,tn(I,ee,Q),O.updateMultisampleRenderTarget(be),O.updateRenderTargetMipmap(be);let Be=!1;for(let Ye=0,rt=$.length;Ye<rt;Ye++){const ht=$[Ye],Kt=ht.object,pn=ht.geometry,Ft=ht.material,Wn=ht.group;if(Ft.side===Ms&&Kt.layers.test(Q.layers)){const Ht=Ft.side;Ft.side=Ii,Ft.needsUpdate=!0,St(Kt,ee,Q,pn,Ft,Wn),Ft.side=Ht,Ft.needsUpdate=!0,Be=!0}}Be===!0&&(O.updateMultisampleRenderTarget(be),O.updateRenderTargetMipmap(be)),b.setRenderTarget(Fe),b.setClearColor(ae,G),b.toneMapping=it}function tn(I,$,ee){const Q=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Me=I.length;Z<Me;Z++){const Fe=I[Z],it=Fe.object,Be=Fe.geometry,Ye=Q===null?Fe.material:Q,rt=Fe.group;it.layers.test(ee.layers)&&St(it,$,ee,Be,Ye,rt)}}function St(I,$,ee,Q,Z,Me){I.onBeforeRender(b,$,ee,Q,Z,Me),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(b,$,ee,Q,I,Me),Z.transparent===!0&&Z.side===Ms&&Z.forceSinglePass===!1?(Z.side=Ii,Z.needsUpdate=!0,b.renderBufferDirect(ee,$,Q,Z,I,Me),Z.side=mo,Z.needsUpdate=!0,b.renderBufferDirect(ee,$,Q,Z,I,Me),Z.side=Ms):b.renderBufferDirect(ee,$,Q,Z,I,Me),I.onAfterRender(b,$,ee,Q,Z,Me)}function $t(I,$,ee){$.isScene!==!0&&($=gt);const Q=et.get(I),Z=_.state.lights,Me=_.state.shadowsArray,Fe=Z.state.version,it=Ae.getParameters(I,Z.state,Me,$,ee),Be=Ae.getProgramCacheKey(it);let Ye=Q.programs;Q.environment=I.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(I.isMeshStandardMaterial?Y:P).get(I.envMap||Q.environment),Ye===void 0&&(I.addEventListener("dispose",xe),Ye=new Map,Q.programs=Ye);let rt=Ye.get(Be);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Fe)return jt(I,it),rt}else it.uniforms=Ae.getUniforms(I),I.onBuild(ee,it,b),I.onBeforeCompile(it,b),rt=Ae.acquireProgram(it,Be),Ye.set(Be,rt),Q.uniforms=it.uniforms;const ht=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ht.clippingPlanes=tt.uniform),jt(I,it),Q.needsLights=Zn(I),Q.lightsStateVersion=Fe,Q.needsLights&&(ht.ambientLightColor.value=Z.state.ambient,ht.lightProbe.value=Z.state.probe,ht.directionalLights.value=Z.state.directional,ht.directionalLightShadows.value=Z.state.directionalShadow,ht.spotLights.value=Z.state.spot,ht.spotLightShadows.value=Z.state.spotShadow,ht.rectAreaLights.value=Z.state.rectArea,ht.ltc_1.value=Z.state.rectAreaLTC1,ht.ltc_2.value=Z.state.rectAreaLTC2,ht.pointLights.value=Z.state.point,ht.pointLightShadows.value=Z.state.pointShadow,ht.hemisphereLights.value=Z.state.hemi,ht.directionalShadowMap.value=Z.state.directionalShadowMap,ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ht.spotShadowMap.value=Z.state.spotShadowMap,ht.spotLightMatrix.value=Z.state.spotLightMatrix,ht.spotLightMap.value=Z.state.spotLightMap,ht.pointShadowMap.value=Z.state.pointShadowMap,ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function xn(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=fh.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function jt(I,$){const ee=et.get(I);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function Xt(I,$,ee,Q,Z){$.isScene!==!0&&($=gt),O.resetTextureUnits();const Me=$.fog,Fe=Q.isMeshStandardMaterial?$.environment:null,it=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ls,Be=(Q.isMeshStandardMaterial?Y:P).get(Q.envMap||Fe),Ye=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ht=!!ee.morphAttributes.position,Kt=!!ee.morphAttributes.normal,pn=!!ee.morphAttributes.color;let Ft=lo;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ft=b.toneMapping);const Wn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ht=Wn!==void 0?Wn.length:0,dt=et.get(Q),Bl=_.state.lights;if(ne===!0&&(ue===!0||I!==k)){const Si=I===k&&Q.id===z;tt.setState(Q,I,Si)}let nn=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Bl.state.version||dt.outputColorSpace!==it||Z.isBatchedMesh&&dt.batching===!1||!Z.isBatchedMesh&&dt.batching===!0||Z.isInstancedMesh&&dt.instancing===!1||!Z.isInstancedMesh&&dt.instancing===!0||Z.isSkinnedMesh&&dt.skinning===!1||!Z.isSkinnedMesh&&dt.skinning===!0||Z.isInstancedMesh&&dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&dt.instancingColor===!1&&Z.instanceColor!==null||dt.envMap!==Be||Q.fog===!0&&dt.fog!==Me||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==tt.numPlanes||dt.numIntersection!==tt.numIntersection)||dt.vertexAlphas!==Ye||dt.vertexTangents!==rt||dt.morphTargets!==ht||dt.morphNormals!==Kt||dt.morphColors!==pn||dt.toneMapping!==Ft||ke.isWebGL2===!0&&dt.morphTargetsCount!==Ht)&&(nn=!0):(nn=!0,dt.__version=Q.version);let Fr=dt.currentProgram;nn===!0&&(Fr=$t(Q,$,Z));let zl=!1,rs=!1,Gl=!1;const Rn=Fr.getUniforms(),tr=dt.uniforms;if(Ue.useProgram(Fr.program)&&(zl=!0,rs=!0,Gl=!0),Q.id!==z&&(z=Q.id,rs=!0),zl||k!==I){Rn.setValue(q,"projectionMatrix",I.projectionMatrix),Rn.setValue(q,"viewMatrix",I.matrixWorldInverse);const Si=Rn.map.cameraPosition;Si!==void 0&&Si.setValue(q,Ce.setFromMatrixPosition(I.matrixWorld)),ke.logarithmicDepthBuffer&&Rn.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Rn.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),k!==I&&(k=I,rs=!0,Gl=!0)}if(Z.isSkinnedMesh){Rn.setOptional(q,Z,"bindMatrix"),Rn.setOptional(q,Z,"bindMatrixInverse");const Si=Z.skeleton;Si&&(ke.floatVertexTextures?(Si.boneTexture===null&&Si.computeBoneTexture(),Rn.setValue(q,"boneTexture",Si.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Rn.setOptional(q,Z,"batchingTexture"),Rn.setValue(q,"batchingTexture",Z._matricesTexture,O));const pa=ee.morphAttributes;if((pa.position!==void 0||pa.normal!==void 0||pa.color!==void 0&&ke.isWebGL2===!0)&&Xe.update(Z,ee,Fr),(rs||dt.receiveShadow!==Z.receiveShadow)&&(dt.receiveShadow=Z.receiveShadow,Rn.setValue(q,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(tr.envMap.value=Be,tr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),rs&&(Rn.setValue(q,"toneMappingExposure",b.toneMappingExposure),dt.needsLights&&zt(tr,Gl),Me&&Q.fog===!0&&we.refreshFogUniforms(tr,Me),we.refreshMaterialUniforms(tr,Q,te,j,be),fh.upload(q,xn(dt),tr,O)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(fh.upload(q,xn(dt),tr,O),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Rn.setValue(q,"center",Z.center),Rn.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Rn.setValue(q,"normalMatrix",Z.normalMatrix),Rn.setValue(q,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Si=Q.uniformsGroups;for(let ma=0,cu=Si.length;ma<cu;ma++)if(ke.isWebGL2){const ga=Si[ma];_t.update(ga,Fr),_t.bind(ga,Fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fr}function zt(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Zn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,$,ee){et.get(I.texture).__webglTexture=$,et.get(I.depthTexture).__webglTexture=ee;const Q=et.get(I);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ee===void 0,Q.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,$){const ee=et.get(I);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ee=0){A=I,C=$,R=ee;let Q=!0,Z=null,Me=!1,Fe=!1;if(I){const Be=et.get(I);Be.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1):Be.__webglFramebuffer===void 0?O.setupRenderTarget(I):Be.__hasExternalTextures&&O.rebindTextures(I,et.get(I.texture).__webglTexture,et.get(I.depthTexture).__webglTexture);const Ye=I.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const rt=et.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?Z=rt[$][ee]:Z=rt[$],Me=!0):ke.isWebGL2&&I.samples>0&&O.useMultisampledRTT(I)===!1?Z=et.get(I).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[ee]:Z=rt,M.copy(I.viewport),U.copy(I.scissor),V=I.scissorTest}else M.copy(N).multiplyScalar(te).floor(),U.copy(ce).multiplyScalar(te).floor(),V=Se;if(Ue.bindFramebuffer(q.FRAMEBUFFER,Z)&&ke.drawBuffers&&Q&&Ue.drawBuffers(I,Z),Ue.viewport(M),Ue.scissor(U),Ue.setScissorTest(V),Me){const Be=et.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,ee)}else if(Fe){const Be=et.get(I.texture),Ye=$||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Ye)}z=-1},this.readRenderTargetPixels=function(I,$,ee,Q,Z,Me,Fe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=et.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(it=it[Fe]),it){Ue.bindFramebuffer(q.FRAMEBUFFER,it);try{const Be=I.texture,Ye=Be.format,rt=Be.type;if(Ye!==Or&&Ie.convert(Ye)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=rt===Yc&&(Te.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Te.has("EXT_color_buffer_float"));if(rt!==co&&Ie.convert(rt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Ts&&(ke.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-Q&&ee>=0&&ee<=I.height-Z&&q.readPixels($,ee,Q,Z,Ie.convert(Ye),Ie.convert(rt),Me)}finally{const Be=A!==null?et.get(A).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(I,$,ee=0){const Q=Math.pow(2,-ee),Z=Math.floor($.image.width*Q),Me=Math.floor($.image.height*Q);O.setTexture2D($,0),q.copyTexSubImage2D(q.TEXTURE_2D,ee,0,0,I.x,I.y,Z,Me),Ue.unbindTexture()},this.copyTextureToTexture=function(I,$,ee,Q=0){const Z=$.image.width,Me=$.image.height,Fe=Ie.convert(ee.format),it=Ie.convert(ee.type);O.setTexture2D(ee,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment),$.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Z,Me,Fe,it,$.image.data):$.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,$.mipmaps[0].width,$.mipmaps[0].height,Fe,$.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Fe,it,$.image),Q===0&&ee.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(I,$,ee,Q,Z=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=I.max.x-I.min.x+1,Fe=I.max.y-I.min.y+1,it=I.max.z-I.min.z+1,Be=Ie.convert(Q.format),Ye=Ie.convert(Q.type);let rt;if(Q.isData3DTexture)O.setTexture3D(Q,0),rt=q.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)O.setTexture2DArray(Q,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);const ht=q.getParameter(q.UNPACK_ROW_LENGTH),Kt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),pn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ft=q.getParameter(q.UNPACK_SKIP_ROWS),Wn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ht=ee.isCompressedTexture?ee.mipmaps[Z]:ee.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ht.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ht.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,I.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,I.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,I.min.z),ee.isDataTexture||ee.isData3DTexture?q.texSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ye,Ht.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ht.data)):q.texSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ye,Ht),q.pixelStorei(q.UNPACK_ROW_LENGTH,ht),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Kt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,pn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ft),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Wn),Z===0&&Q.generateMipmaps&&q.generateMipmap(rt),Ue.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Ue.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Ue.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Q_?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===Jh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xn?ta:E1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ta?Xn:Ls}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class N8 extends V1{}N8.prototype.isWebGL1Renderer=!0;class F8 extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class B8 extends ai{constructor(e,t,n,r,s,a,l,u,f){super(e,t,n,r,s,a,l,u,f),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:An,this.magFilter=s!==void 0?s:An,this.generateMipmaps=!1;const h=this;function p(){h.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const cM={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class z8{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,l),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,p){return f.push(h,p),this},this.removeHandler=function(h){const p=f.indexOf(h);return p!==-1&&f.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=f.length;p<m;p+=2){const g=f[p],y=f[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return y}return null}}}const G8=new z8;class iv{constructor(e){this.manager=e!==void 0?e:G8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}iv.DEFAULT_MATERIAL_NAME="__DEFAULT";class H8 extends iv{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=cM.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=jc("img");function u(){h(),cM.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class k8 extends iv{constructor(e){super(e)}load(e,t,n,r){const s=new ai,a=new H8(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class W8{constructor(e,t,n=0,r=1/0){this.ray=new C1(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new tv,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Hg(e,this,n,t),n.sort(uM),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Hg(e[r],this,n,t);return n.sort(uM),n}}function uM(i,e){return i.distance-e.distance}function Hg(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)Hg(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Z_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Z_);const kg=new Bt;function V8(){document.querySelector("#global-container").addEventListener("pointermove",$8)}function $8(i){kg.x=X8(i.clientX),kg.y=q8(i.clientY)}function X8(i){return i/window.innerWidth*2-1}function q8(i){return-(i/window.innerHeight)*2+1}function Y8(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}function j8(i,e){return Math.round(i/e*100)}const al=new Map,K8=new k8;window.textureCache=al;const hh={init:Z8,loadAllAssets:J8,loadImg:X1,getTexByElement:Q8,addProgressAction:j1,letsBegin:n6},Vo={};function Z8(){Vo.globalContainer=document.getElementById("global-container"),Vo.loader=document.getElementById("loader"),Vo.loaderPercent=document.getElementById("Loader-percent"),j1((i,e)=>{Vo.loaderPercent.innerHTML=j8(i,e)+"%"})}async function J8(){const i=document.querySelectorAll("[data-webgl]");for(const t of i){const n=t.dataset;for(let r in n){if(!r.startsWith("tex"))continue;const s=n[r];al.has(s)||al.set(s,null)}}const e=[];al.forEach((t,n)=>{let r=null;r=(/\.(mp4|webm|mov)$/.test(n)?e6:X1)(n).then(a=>{al.set(n,a)}).catch(()=>{console.error("Failed to load Media: ",n)}),e.push(r)}),await Promise.all(e)}async function Q8(i){const e=new Map,t=i.dataset;let n=null,r=!0;for(let s in t){if(!s.startsWith("tex"))continue;const a=t[s],l=al.get(a);s=s.replace("-",""),e.set(s,l),r&&i instanceof HTMLImageElement&&(n=new Promise(u=>{i.onload=u}),i.src=a,r=!1),r&&i instanceof HTMLVideoElement&&(n=new Promise(u=>{i.oncanplay=u}),i.src=a,i.load(),r=!1)}return await n,e}let $1=0,fM=0,Wg=null;async function X1(i){q1();const e=await K8.loadAsync(i);return Y1(),e.magFilter=An,e.minFilter=An,e.needsUpdate=!1,e}async function e6(i){const e=document.createElement("video");let t=i.split(".").pop();return t==="mov"&&(t="quicktime"),e.canPlayType(`video/${t}`)?(q1(),new Promise(n=>{const r=document.createElement("video");r.oncanplay=()=>{const s=new B8(r);Y1(),s.magFilter=An,s.minFilter=An,r.play(),r.oncanplay=null,n(s)},r.src=i,r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,r.defaultMuted=!0})):null}function q1(){$1++}function Y1(){fM++,Wg&&Wg(fM,$1)}function j1(i){Wg=i}function t6(){const i=u_.timeline();return i.to(Vo.loader.firstElementChild,{opacity:0,y:10,duration:.3,delay:.5}).set(Vo.globalContainer,{visibility:"visible"}).set(Vo.loader,{display:"none"}),i}function n6(){t6()}const i6="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",r6="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;uniform vec4 uResolution;uniform sampler2D tex1;uniform sampler2D tex2;vec2 coverUv(vec2 uv,vec4 resolution){return(uv-0.5)*resolution.zw+0.5;}void main(){vec2 uv=coverUv(vUv,uResolution);vec4 t1=texture2D(tex1,uv);vec4 t2=texture2D(tex2,uv);vec4 mixColor=mix(t1,t2,step(.5,uv.y));gl_FragColor=mixColor;}",Wt={os:[],raycaster:new W8,worldInit:K1,adjustWorldPosition:Z1,render:Q1};function K1(i,e){return Wt.renderer=new V1({canvas:i,antialias:!0}),Wt.renderer.setSize(e.width,e.height,!1),Wt.renderer.setPixelRatio(e.devicePixelRatio),Wt.renderer.setClearColor(0,0),Wt.scene=new F8,Wt.camera=o6(e),s6(e),Wt}async function s6(i){const t=[...document.querySelectorAll("[data-webgl]")].map(async n=>{const r=n.getBoundingClientRect(),s=await hh.getTexByElement(n),a=new lu(r.width,r.height,1,1),l=new Ds({vertexShader:i6,fragmentShader:r6,uniforms:{uMouse:{value:new Bt(.5,.5)},uHover:{value:0}}});function u(m){if(!s.get("tex1"))return m;const g=s.get("tex1").source.data,y={};g instanceof HTMLImageElement?(y.width=g.naturalWidth,y.height=g.naturalHeight):g instanceof HTMLVideoElement&&(y.width=g.videoWidth,y.height=g.videoHeight);const x=f(r,y);return m.uResolution={value:x},m}function f(m,g){const{width:y,height:x}=m,_=new Hn(y,x,1,1);if(!g)return _;const{width:v,height:w}=g,b=w/v,E=x/y;let C,R;return E>b?(C=1/E*b,R=1):(C=1,R=E/b),_.z=C,_.w=R,_}l.uniforms=u(l.uniforms),s.forEach((m,g)=>{l.uniforms[g]={value:m}});const h=new Zr(a,l);h.position.z=0;const p={geometry:a,material:l,mesh:h,rect:r,$:{el:n}};return Wt.scene.add(h),Wt.os.push(p),p});await Promise.all(t),Z1(i)}function Z1(i){Wt.renderer.setSize(i.width,i.height,!1),Wt.os.forEach(e=>l6(e,i)),c6(i)}function o6(i){const{fov:e,aspect:t,near:n,far:r,cameraZ:s}=i,a=new mr(e,t,n,r);return a.position.z=s,a}function a6(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=J1(n,gn.rect);e.position.y=r}function l6(i,e){const{$:{el:t},mesh:n,geometry:r,rect:s}=i,a=t.getBoundingClientRect(),{x:l,y:u}=J1(a,e);n.position.x=l,n.position.y=u,r.scale(a.width/s.width,a.height/s.height,1),i.rect=a}function c6(i){const{aspect:e,radian:t,fov:n}=i;Wt.camera.aspect=e,Wt.camera.radian=t,Wt.camera.fov=n,Wt.camera.updateProjectionMatrix(),Wt.renderer.render(Wt.scene,Wt.camera)}function J1(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function u6(){Wt.raycaster.setFromCamera(kg,Wt.camera);const e=Wt.raycaster.intersectObjects(Wt.scene.children)[0];for(let t=0;t<Wt.scene.children.length;t++){const n=Wt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=Y8(r.value,r.__endValue,.1)}}function Q1(){requestAnimationFrame(Q1),Wt.os.forEach(i=>a6(i)),u6(),Wt.renderer.render(Wt.scene,Wt.camera)}const gn={init:f6},ew={};let hM=!1;function f6(i){ew.canvas=i;const e=i.getBoundingClientRect();return gn.rect=e,gn.width=e.width,gn.height=e.height,gn.near=1500,gn.far=4e3,gn.aspect=gn.width/gn.height,gn.cameraZ=2500,gn.radian=2*Math.atan(gn.height/2/gn.cameraZ),gn.fov=180*gn.radian/Math.PI,gn.devicePixelRatio=window.devicePixelRatio,hM||(hM=!0,h6()),gn}function h6(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{d6()},100)})}function d6(){p6(),Wt.adjustWorldPosition(gn)}function p6(){const{near:i,far:e,cameraZ:t}=gn;gn.init(ew.canvas,i,e,t)}const tw=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 17 20">
<path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
</svg>`,nw=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 19 23">
<path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="currentColor"></path>
</svg>`;var Nh={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Nh.exports;(function(i,e){(function(){var t,n="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",p=1,m=2,g=4,y=1,x=2,_=1,v=2,w=4,b=8,E=16,C=32,R=64,A=128,z=256,k=512,M=30,U="...",V=800,ae=16,G=1,J=2,j=3,te=1/0,ie=9007199254740991,oe=17976931348623157e292,N=NaN,ce=4294967295,Se=ce-1,Je=ce>>>1,ne=[["ary",A],["bind",_],["bindKey",v],["curry",b],["curryRight",E],["flip",k],["partial",C],["partialRight",R],["rearg",z]],ue="[object Arguments]",be="[object Array]",De="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",gt="[object DOMException]",$e="[object Error]",q="[object Function]",st="[object GeneratorFunction]",Te="[object Map]",ke="[object Number]",Ue="[object Null]",K="[object Object]",et="[object Promise]",O="[object Proxy]",P="[object RegExp]",Y="[object Set]",me="[object String]",de="[object Symbol]",_e="[object Undefined]",Ae="[object WeakMap]",we="[object WeakSet]",Ee="[object ArrayBuffer]",Ge="[object DataView]",tt="[object Float32Array]",pe="[object Float64Array]",bt="[object Int8Array]",Xe="[object Int16Array]",ot="[object Int32Array]",We="[object Uint8Array]",Ie="[object Uint8ClampedArray]",at="[object Uint16Array]",_t="[object Uint32Array]",Dt=/\b__p \+= '';/g,Pe=/\b(__p \+=) '' \+/g,Ct=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,xe=RegExp(F.source),Ne=RegExp(ve.source),Ze=/<%-([\s\S]+?)%>/g,vt=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,qe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ve=/^\w*$/,je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/[\\^$.*+?()[\]{}|]/g,nt=RegExp(ye.source),Qe=/^\s+/,ft=/\s/,tn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,St=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,xn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jt=/[()=,{}\[\]\/\s]/,Xt=/\\(\\)?/g,zt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zn=/\w*$/,I=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,Q=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,Me=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fe=/($^)/,it=/['\n\r\u2028\u2029\\]/g,Be="\\ud800-\\udfff",Ye="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Kt=Ye+rt+ht,pn="\\u2700-\\u27bf",Ft="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",Ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",Bl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nn="A-Z\\xc0-\\xd6\\xd8-\\xde",Fr="\\ufe0e\\ufe0f",zl=Wn+Ht+dt+Bl,rs="['’]",Gl="["+Be+"]",Rn="["+zl+"]",tr="["+Kt+"]",pa="\\d+",Si="["+pn+"]",ma="["+Ft+"]",cu="[^"+Be+zl+pa+pn+Ft+nn+"]",ga="\\ud83c[\\udffb-\\udfff]",_w="(?:"+tr+"|"+ga+")",rv="[^"+Be+"]",nd="(?:\\ud83c[\\udde6-\\uddff]){2}",id="[\\ud800-\\udbff][\\udc00-\\udfff]",_a="["+nn+"]",sv="\\u200d",ov="(?:"+ma+"|"+cu+")",vw="(?:"+_a+"|"+cu+")",av="(?:"+rs+"(?:d|ll|m|re|s|t|ve))?",lv="(?:"+rs+"(?:D|LL|M|RE|S|T|VE))?",cv=_w+"?",uv="["+Fr+"]?",xw="(?:"+sv+"(?:"+[rv,nd,id].join("|")+")"+uv+cv+")*",yw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Sw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",fv=uv+cv+xw,Ew="(?:"+[Si,nd,id].join("|")+")"+fv,Mw="(?:"+[rv+tr+"?",tr,nd,id,Gl].join("|")+")",Tw=RegExp(rs,"g"),bw=RegExp(tr,"g"),rd=RegExp(ga+"(?="+ga+")|"+Mw+fv,"g"),ww=RegExp([_a+"?"+ma+"+"+av+"(?="+[Rn,_a,"$"].join("|")+")",vw+"+"+lv+"(?="+[Rn,_a+ov,"$"].join("|")+")",_a+"?"+ov+"+"+av,_a+"+"+lv,Sw,yw,pa,Ew].join("|"),"g"),Aw=RegExp("["+sv+Be+Kt+Fr+"]"),Cw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Rw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Pw=-1,rn={};rn[tt]=rn[pe]=rn[bt]=rn[Xe]=rn[ot]=rn[We]=rn[Ie]=rn[at]=rn[_t]=!0,rn[ue]=rn[be]=rn[Ee]=rn[Oe]=rn[Ge]=rn[Ce]=rn[$e]=rn[q]=rn[Te]=rn[ke]=rn[K]=rn[P]=rn[Y]=rn[me]=rn[Ae]=!1;var Qt={};Qt[ue]=Qt[be]=Qt[Ee]=Qt[Ge]=Qt[Oe]=Qt[Ce]=Qt[tt]=Qt[pe]=Qt[bt]=Qt[Xe]=Qt[ot]=Qt[Te]=Qt[ke]=Qt[K]=Qt[P]=Qt[Y]=Qt[me]=Qt[de]=Qt[We]=Qt[Ie]=Qt[at]=Qt[_t]=!0,Qt[$e]=Qt[q]=Qt[Ae]=!1;var Lw={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Dw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Iw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Ow={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Uw=parseFloat,Nw=parseInt,hv=typeof an=="object"&&an&&an.Object===Object&&an,Fw=typeof self=="object"&&self&&self.Object===Object&&self,Vn=hv||Fw||Function("return this")(),sd=e&&!e.nodeType&&e,vo=sd&&!0&&i&&!i.nodeType&&i,dv=vo&&vo.exports===sd,od=dv&&hv.process,nr=function(){try{var W=vo&&vo.require&&vo.require("util").types;return W||od&&od.binding&&od.binding("util")}catch{}}(),pv=nr&&nr.isArrayBuffer,mv=nr&&nr.isDate,gv=nr&&nr.isMap,_v=nr&&nr.isRegExp,vv=nr&&nr.isSet,xv=nr&&nr.isTypedArray;function Ni(W,le,re){switch(re.length){case 0:return W.call(le);case 1:return W.call(le,re[0]);case 2:return W.call(le,re[0],re[1]);case 3:return W.call(le,re[0],re[1],re[2])}return W.apply(le,re)}function Bw(W,le,re,ze){for(var pt=-1,Gt=W==null?0:W.length;++pt<Gt;){var Pn=W[pt];le(ze,Pn,re(Pn),W)}return ze}function ir(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze&&le(W[re],re,W)!==!1;);return W}function zw(W,le){for(var re=W==null?0:W.length;re--&&le(W[re],re,W)!==!1;);return W}function yv(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze;)if(!le(W[re],re,W))return!1;return!0}function Os(W,le){for(var re=-1,ze=W==null?0:W.length,pt=0,Gt=[];++re<ze;){var Pn=W[re];le(Pn,re,W)&&(Gt[pt++]=Pn)}return Gt}function uu(W,le){var re=W==null?0:W.length;return!!re&&va(W,le,0)>-1}function ad(W,le,re){for(var ze=-1,pt=W==null?0:W.length;++ze<pt;)if(re(le,W[ze]))return!0;return!1}function ln(W,le){for(var re=-1,ze=W==null?0:W.length,pt=Array(ze);++re<ze;)pt[re]=le(W[re],re,W);return pt}function Us(W,le){for(var re=-1,ze=le.length,pt=W.length;++re<ze;)W[pt+re]=le[re];return W}function ld(W,le,re,ze){var pt=-1,Gt=W==null?0:W.length;for(ze&&Gt&&(re=W[++pt]);++pt<Gt;)re=le(re,W[pt],pt,W);return re}function Gw(W,le,re,ze){var pt=W==null?0:W.length;for(ze&&pt&&(re=W[--pt]);pt--;)re=le(re,W[pt],pt,W);return re}function cd(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze;)if(le(W[re],re,W))return!0;return!1}var Hw=ud("length");function kw(W){return W.split("")}function Ww(W){return W.match(xn)||[]}function Sv(W,le,re){var ze;return re(W,function(pt,Gt,Pn){if(le(pt,Gt,Pn))return ze=Gt,!1}),ze}function fu(W,le,re,ze){for(var pt=W.length,Gt=re+(ze?1:-1);ze?Gt--:++Gt<pt;)if(le(W[Gt],Gt,W))return Gt;return-1}function va(W,le,re){return le===le?tA(W,le,re):fu(W,Ev,re)}function Vw(W,le,re,ze){for(var pt=re-1,Gt=W.length;++pt<Gt;)if(ze(W[pt],le))return pt;return-1}function Ev(W){return W!==W}function Mv(W,le){var re=W==null?0:W.length;return re?hd(W,le)/re:N}function ud(W){return function(le){return le==null?t:le[W]}}function fd(W){return function(le){return W==null?t:W[le]}}function Tv(W,le,re,ze,pt){return pt(W,function(Gt,Pn,Zt){re=ze?(ze=!1,Gt):le(re,Gt,Pn,Zt)}),re}function $w(W,le){var re=W.length;for(W.sort(le);re--;)W[re]=W[re].value;return W}function hd(W,le){for(var re,ze=-1,pt=W.length;++ze<pt;){var Gt=le(W[ze]);Gt!==t&&(re=re===t?Gt:re+Gt)}return re}function dd(W,le){for(var re=-1,ze=Array(W);++re<W;)ze[re]=le(re);return ze}function Xw(W,le){return ln(le,function(re){return[re,W[re]]})}function bv(W){return W&&W.slice(0,Rv(W)+1).replace(Qe,"")}function Fi(W){return function(le){return W(le)}}function pd(W,le){return ln(le,function(re){return W[re]})}function Hl(W,le){return W.has(le)}function wv(W,le){for(var re=-1,ze=W.length;++re<ze&&va(le,W[re],0)>-1;);return re}function Av(W,le){for(var re=W.length;re--&&va(le,W[re],0)>-1;);return re}function qw(W,le){for(var re=W.length,ze=0;re--;)W[re]===le&&++ze;return ze}var Yw=fd(Lw),jw=fd(Dw);function Kw(W){return"\\"+Ow[W]}function Zw(W,le){return W==null?t:W[le]}function xa(W){return Aw.test(W)}function Jw(W){return Cw.test(W)}function Qw(W){for(var le,re=[];!(le=W.next()).done;)re.push(le.value);return re}function md(W){var le=-1,re=Array(W.size);return W.forEach(function(ze,pt){re[++le]=[pt,ze]}),re}function Cv(W,le){return function(re){return W(le(re))}}function Ns(W,le){for(var re=-1,ze=W.length,pt=0,Gt=[];++re<ze;){var Pn=W[re];(Pn===le||Pn===h)&&(W[re]=h,Gt[pt++]=re)}return Gt}function hu(W){var le=-1,re=Array(W.size);return W.forEach(function(ze){re[++le]=ze}),re}function eA(W){var le=-1,re=Array(W.size);return W.forEach(function(ze){re[++le]=[ze,ze]}),re}function tA(W,le,re){for(var ze=re-1,pt=W.length;++ze<pt;)if(W[ze]===le)return ze;return-1}function nA(W,le,re){for(var ze=re+1;ze--;)if(W[ze]===le)return ze;return ze}function ya(W){return xa(W)?rA(W):Hw(W)}function Mr(W){return xa(W)?sA(W):kw(W)}function Rv(W){for(var le=W.length;le--&&ft.test(W.charAt(le)););return le}var iA=fd(Iw);function rA(W){for(var le=rd.lastIndex=0;rd.test(W);)++le;return le}function sA(W){return W.match(rd)||[]}function oA(W){return W.match(ww)||[]}var aA=function W(le){le=le==null?Vn:Sa.defaults(Vn.Object(),le,Sa.pick(Vn,Rw));var re=le.Array,ze=le.Date,pt=le.Error,Gt=le.Function,Pn=le.Math,Zt=le.Object,gd=le.RegExp,lA=le.String,rr=le.TypeError,du=re.prototype,cA=Gt.prototype,Ea=Zt.prototype,pu=le["__core-js_shared__"],mu=cA.toString,Vt=Ea.hasOwnProperty,uA=0,Pv=function(){var o=/[^.]+$/.exec(pu&&pu.keys&&pu.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),gu=Ea.toString,fA=mu.call(Zt),hA=Vn._,dA=gd("^"+mu.call(Vt).replace(ye,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_u=dv?le.Buffer:t,Fs=le.Symbol,vu=le.Uint8Array,Lv=_u?_u.allocUnsafe:t,xu=Cv(Zt.getPrototypeOf,Zt),Dv=Zt.create,Iv=Ea.propertyIsEnumerable,yu=du.splice,Ov=Fs?Fs.isConcatSpreadable:t,kl=Fs?Fs.iterator:t,xo=Fs?Fs.toStringTag:t,Su=function(){try{var o=To(Zt,"defineProperty");return o({},"",{}),o}catch{}}(),pA=le.clearTimeout!==Vn.clearTimeout&&le.clearTimeout,mA=ze&&ze.now!==Vn.Date.now&&ze.now,gA=le.setTimeout!==Vn.setTimeout&&le.setTimeout,Eu=Pn.ceil,Mu=Pn.floor,_d=Zt.getOwnPropertySymbols,_A=_u?_u.isBuffer:t,Uv=le.isFinite,vA=du.join,xA=Cv(Zt.keys,Zt),Ln=Pn.max,Jn=Pn.min,yA=ze.now,SA=le.parseInt,Nv=Pn.random,EA=du.reverse,vd=To(le,"DataView"),Wl=To(le,"Map"),xd=To(le,"Promise"),Ma=To(le,"Set"),Vl=To(le,"WeakMap"),$l=To(Zt,"create"),Tu=Vl&&new Vl,Ta={},MA=bo(vd),TA=bo(Wl),bA=bo(xd),wA=bo(Ma),AA=bo(Vl),bu=Fs?Fs.prototype:t,Xl=bu?bu.valueOf:t,Fv=bu?bu.toString:t;function L(o){if(mn(o)&&!mt(o)&&!(o instanceof Lt)){if(o instanceof sr)return o;if(Vt.call(o,"__wrapped__"))return B0(o)}return new sr(o)}var ba=function(){function o(){}return function(c){if(!un(c))return{};if(Dv)return Dv(c);o.prototype=c;var d=new o;return o.prototype=t,d}}();function wu(){}function sr(o,c){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=t}L.templateSettings={escape:Ze,evaluate:vt,interpolate:It,variable:"",imports:{_:L}},L.prototype=wu.prototype,L.prototype.constructor=L,sr.prototype=ba(wu.prototype),sr.prototype.constructor=sr;function Lt(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function CA(){var o=new Lt(this.__wrapped__);return o.__actions__=Ei(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=Ei(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=Ei(this.__views__),o}function RA(){if(this.__filtered__){var o=new Lt(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function PA(){var o=this.__wrapped__.value(),c=this.__dir__,d=mt(o),S=c<0,T=d?o.length:0,D=kC(0,T,this.__views__),B=D.start,H=D.end,X=H-B,fe=S?H:B-1,he=this.__iteratees__,ge=he.length,Le=0,Ke=Jn(X,this.__takeCount__);if(!d||!S&&T==X&&Ke==X)return a0(o,this.__actions__);var ct=[];e:for(;X--&&Le<Ke;){fe+=c;for(var Et=-1,ut=o[fe];++Et<ge;){var Rt=he[Et],Ot=Rt.iteratee,Gi=Rt.type,ui=Ot(ut);if(Gi==J)ut=ui;else if(!ui){if(Gi==G)continue e;break e}}ct[Le++]=ut}return ct}Lt.prototype=ba(wu.prototype),Lt.prototype.constructor=Lt;function yo(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var S=o[c];this.set(S[0],S[1])}}function LA(){this.__data__=$l?$l(null):{},this.size=0}function DA(o){var c=this.has(o)&&delete this.__data__[o];return this.size-=c?1:0,c}function IA(o){var c=this.__data__;if($l){var d=c[o];return d===u?t:d}return Vt.call(c,o)?c[o]:t}function OA(o){var c=this.__data__;return $l?c[o]!==t:Vt.call(c,o)}function UA(o,c){var d=this.__data__;return this.size+=this.has(o)?0:1,d[o]=$l&&c===t?u:c,this}yo.prototype.clear=LA,yo.prototype.delete=DA,yo.prototype.get=IA,yo.prototype.has=OA,yo.prototype.set=UA;function ss(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var S=o[c];this.set(S[0],S[1])}}function NA(){this.__data__=[],this.size=0}function FA(o){var c=this.__data__,d=Au(c,o);if(d<0)return!1;var S=c.length-1;return d==S?c.pop():yu.call(c,d,1),--this.size,!0}function BA(o){var c=this.__data__,d=Au(c,o);return d<0?t:c[d][1]}function zA(o){return Au(this.__data__,o)>-1}function GA(o,c){var d=this.__data__,S=Au(d,o);return S<0?(++this.size,d.push([o,c])):d[S][1]=c,this}ss.prototype.clear=NA,ss.prototype.delete=FA,ss.prototype.get=BA,ss.prototype.has=zA,ss.prototype.set=GA;function os(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var S=o[c];this.set(S[0],S[1])}}function HA(){this.size=0,this.__data__={hash:new yo,map:new(Wl||ss),string:new yo}}function kA(o){var c=zu(this,o).delete(o);return this.size-=c?1:0,c}function WA(o){return zu(this,o).get(o)}function VA(o){return zu(this,o).has(o)}function $A(o,c){var d=zu(this,o),S=d.size;return d.set(o,c),this.size+=d.size==S?0:1,this}os.prototype.clear=HA,os.prototype.delete=kA,os.prototype.get=WA,os.prototype.has=VA,os.prototype.set=$A;function So(o){var c=-1,d=o==null?0:o.length;for(this.__data__=new os;++c<d;)this.add(o[c])}function XA(o){return this.__data__.set(o,u),this}function qA(o){return this.__data__.has(o)}So.prototype.add=So.prototype.push=XA,So.prototype.has=qA;function Tr(o){var c=this.__data__=new ss(o);this.size=c.size}function YA(){this.__data__=new ss,this.size=0}function jA(o){var c=this.__data__,d=c.delete(o);return this.size=c.size,d}function KA(o){return this.__data__.get(o)}function ZA(o){return this.__data__.has(o)}function JA(o,c){var d=this.__data__;if(d instanceof ss){var S=d.__data__;if(!Wl||S.length<r-1)return S.push([o,c]),this.size=++d.size,this;d=this.__data__=new os(S)}return d.set(o,c),this.size=d.size,this}Tr.prototype.clear=YA,Tr.prototype.delete=jA,Tr.prototype.get=KA,Tr.prototype.has=ZA,Tr.prototype.set=JA;function Bv(o,c){var d=mt(o),S=!d&&wo(o),T=!d&&!S&&ks(o),D=!d&&!S&&!T&&Ra(o),B=d||S||T||D,H=B?dd(o.length,lA):[],X=H.length;for(var fe in o)(c||Vt.call(o,fe))&&!(B&&(fe=="length"||T&&(fe=="offset"||fe=="parent")||D&&(fe=="buffer"||fe=="byteLength"||fe=="byteOffset")||us(fe,X)))&&H.push(fe);return H}function zv(o){var c=o.length;return c?o[Pd(0,c-1)]:t}function QA(o,c){return Gu(Ei(o),Eo(c,0,o.length))}function eC(o){return Gu(Ei(o))}function yd(o,c,d){(d!==t&&!br(o[c],d)||d===t&&!(c in o))&&as(o,c,d)}function ql(o,c,d){var S=o[c];(!(Vt.call(o,c)&&br(S,d))||d===t&&!(c in o))&&as(o,c,d)}function Au(o,c){for(var d=o.length;d--;)if(br(o[d][0],c))return d;return-1}function tC(o,c,d,S){return Bs(o,function(T,D,B){c(S,T,d(T),B)}),S}function Gv(o,c){return o&&zr(c,Nn(c),o)}function nC(o,c){return o&&zr(c,Ti(c),o)}function as(o,c,d){c=="__proto__"&&Su?Su(o,c,{configurable:!0,enumerable:!0,value:d,writable:!0}):o[c]=d}function Sd(o,c){for(var d=-1,S=c.length,T=re(S),D=o==null;++d<S;)T[d]=D?t:tp(o,c[d]);return T}function Eo(o,c,d){return o===o&&(d!==t&&(o=o<=d?o:d),c!==t&&(o=o>=c?o:c)),o}function or(o,c,d,S,T,D){var B,H=c&p,X=c&m,fe=c&g;if(d&&(B=T?d(o,S,T,D):d(o)),B!==t)return B;if(!un(o))return o;var he=mt(o);if(he){if(B=VC(o),!H)return Ei(o,B)}else{var ge=Qn(o),Le=ge==q||ge==st;if(ks(o))return u0(o,H);if(ge==K||ge==ue||Le&&!T){if(B=X||Le?{}:R0(o),!H)return X?IC(o,nC(B,o)):DC(o,Gv(B,o))}else{if(!Qt[ge])return T?o:{};B=$C(o,ge,H)}}D||(D=new Tr);var Ke=D.get(o);if(Ke)return Ke;D.set(o,B),rx(o)?o.forEach(function(ut){B.add(or(ut,c,d,ut,o,D))}):nx(o)&&o.forEach(function(ut,Rt){B.set(Rt,or(ut,c,d,Rt,o,D))});var ct=fe?X?Hd:Gd:X?Ti:Nn,Et=he?t:ct(o);return ir(Et||o,function(ut,Rt){Et&&(Rt=ut,ut=o[Rt]),ql(B,Rt,or(ut,c,d,Rt,o,D))}),B}function iC(o){var c=Nn(o);return function(d){return Hv(d,o,c)}}function Hv(o,c,d){var S=d.length;if(o==null)return!S;for(o=Zt(o);S--;){var T=d[S],D=c[T],B=o[T];if(B===t&&!(T in o)||!D(B))return!1}return!0}function kv(o,c,d){if(typeof o!="function")throw new rr(a);return ec(function(){o.apply(t,d)},c)}function Yl(o,c,d,S){var T=-1,D=uu,B=!0,H=o.length,X=[],fe=c.length;if(!H)return X;d&&(c=ln(c,Fi(d))),S?(D=ad,B=!1):c.length>=r&&(D=Hl,B=!1,c=new So(c));e:for(;++T<H;){var he=o[T],ge=d==null?he:d(he);if(he=S||he!==0?he:0,B&&ge===ge){for(var Le=fe;Le--;)if(c[Le]===ge)continue e;X.push(he)}else D(c,ge,S)||X.push(he)}return X}var Bs=m0(Br),Wv=m0(Md,!0);function rC(o,c){var d=!0;return Bs(o,function(S,T,D){return d=!!c(S,T,D),d}),d}function Cu(o,c,d){for(var S=-1,T=o.length;++S<T;){var D=o[S],B=c(D);if(B!=null&&(H===t?B===B&&!zi(B):d(B,H)))var H=B,X=D}return X}function sC(o,c,d,S){var T=o.length;for(d=xt(d),d<0&&(d=-d>T?0:T+d),S=S===t||S>T?T:xt(S),S<0&&(S+=T),S=d>S?0:ox(S);d<S;)o[d++]=c;return o}function Vv(o,c){var d=[];return Bs(o,function(S,T,D){c(S,T,D)&&d.push(S)}),d}function $n(o,c,d,S,T){var D=-1,B=o.length;for(d||(d=qC),T||(T=[]);++D<B;){var H=o[D];c>0&&d(H)?c>1?$n(H,c-1,d,S,T):Us(T,H):S||(T[T.length]=H)}return T}var Ed=g0(),$v=g0(!0);function Br(o,c){return o&&Ed(o,c,Nn)}function Md(o,c){return o&&$v(o,c,Nn)}function Ru(o,c){return Os(c,function(d){return fs(o[d])})}function Mo(o,c){c=Gs(c,o);for(var d=0,S=c.length;o!=null&&d<S;)o=o[Gr(c[d++])];return d&&d==S?o:t}function Xv(o,c,d){var S=c(o);return mt(o)?S:Us(S,d(o))}function li(o){return o==null?o===t?_e:Ue:xo&&xo in Zt(o)?HC(o):eR(o)}function Td(o,c){return o>c}function oC(o,c){return o!=null&&Vt.call(o,c)}function aC(o,c){return o!=null&&c in Zt(o)}function lC(o,c,d){return o>=Jn(c,d)&&o<Ln(c,d)}function bd(o,c,d){for(var S=d?ad:uu,T=o[0].length,D=o.length,B=D,H=re(D),X=1/0,fe=[];B--;){var he=o[B];B&&c&&(he=ln(he,Fi(c))),X=Jn(he.length,X),H[B]=!d&&(c||T>=120&&he.length>=120)?new So(B&&he):t}he=o[0];var ge=-1,Le=H[0];e:for(;++ge<T&&fe.length<X;){var Ke=he[ge],ct=c?c(Ke):Ke;if(Ke=d||Ke!==0?Ke:0,!(Le?Hl(Le,ct):S(fe,ct,d))){for(B=D;--B;){var Et=H[B];if(!(Et?Hl(Et,ct):S(o[B],ct,d)))continue e}Le&&Le.push(ct),fe.push(Ke)}}return fe}function cC(o,c,d,S){return Br(o,function(T,D,B){c(S,d(T),D,B)}),S}function jl(o,c,d){c=Gs(c,o),o=I0(o,c);var S=o==null?o:o[Gr(lr(c))];return S==null?t:Ni(S,o,d)}function qv(o){return mn(o)&&li(o)==ue}function uC(o){return mn(o)&&li(o)==Ee}function fC(o){return mn(o)&&li(o)==Ce}function Kl(o,c,d,S,T){return o===c?!0:o==null||c==null||!mn(o)&&!mn(c)?o!==o&&c!==c:hC(o,c,d,S,Kl,T)}function hC(o,c,d,S,T,D){var B=mt(o),H=mt(c),X=B?be:Qn(o),fe=H?be:Qn(c);X=X==ue?K:X,fe=fe==ue?K:fe;var he=X==K,ge=fe==K,Le=X==fe;if(Le&&ks(o)){if(!ks(c))return!1;B=!0,he=!1}if(Le&&!he)return D||(D=new Tr),B||Ra(o)?w0(o,c,d,S,T,D):zC(o,c,X,d,S,T,D);if(!(d&y)){var Ke=he&&Vt.call(o,"__wrapped__"),ct=ge&&Vt.call(c,"__wrapped__");if(Ke||ct){var Et=Ke?o.value():o,ut=ct?c.value():c;return D||(D=new Tr),T(Et,ut,d,S,D)}}return Le?(D||(D=new Tr),GC(o,c,d,S,T,D)):!1}function dC(o){return mn(o)&&Qn(o)==Te}function wd(o,c,d,S){var T=d.length,D=T,B=!S;if(o==null)return!D;for(o=Zt(o);T--;){var H=d[T];if(B&&H[2]?H[1]!==o[H[0]]:!(H[0]in o))return!1}for(;++T<D;){H=d[T];var X=H[0],fe=o[X],he=H[1];if(B&&H[2]){if(fe===t&&!(X in o))return!1}else{var ge=new Tr;if(S)var Le=S(fe,he,X,o,c,ge);if(!(Le===t?Kl(he,fe,y|x,S,ge):Le))return!1}}return!0}function Yv(o){if(!un(o)||jC(o))return!1;var c=fs(o)?dA:ee;return c.test(bo(o))}function pC(o){return mn(o)&&li(o)==P}function mC(o){return mn(o)&&Qn(o)==Y}function gC(o){return mn(o)&&Xu(o.length)&&!!rn[li(o)]}function jv(o){return typeof o=="function"?o:o==null?bi:typeof o=="object"?mt(o)?Jv(o[0],o[1]):Zv(o):_x(o)}function Ad(o){if(!Ql(o))return xA(o);var c=[];for(var d in Zt(o))Vt.call(o,d)&&d!="constructor"&&c.push(d);return c}function _C(o){if(!un(o))return QC(o);var c=Ql(o),d=[];for(var S in o)S=="constructor"&&(c||!Vt.call(o,S))||d.push(S);return d}function Cd(o,c){return o<c}function Kv(o,c){var d=-1,S=Mi(o)?re(o.length):[];return Bs(o,function(T,D,B){S[++d]=c(T,D,B)}),S}function Zv(o){var c=Wd(o);return c.length==1&&c[0][2]?L0(c[0][0],c[0][1]):function(d){return d===o||wd(d,o,c)}}function Jv(o,c){return $d(o)&&P0(c)?L0(Gr(o),c):function(d){var S=tp(d,o);return S===t&&S===c?np(d,o):Kl(c,S,y|x)}}function Pu(o,c,d,S,T){o!==c&&Ed(c,function(D,B){if(T||(T=new Tr),un(D))vC(o,c,B,d,Pu,S,T);else{var H=S?S(qd(o,B),D,B+"",o,c,T):t;H===t&&(H=D),yd(o,B,H)}},Ti)}function vC(o,c,d,S,T,D,B){var H=qd(o,d),X=qd(c,d),fe=B.get(X);if(fe){yd(o,d,fe);return}var he=D?D(H,X,d+"",o,c,B):t,ge=he===t;if(ge){var Le=mt(X),Ke=!Le&&ks(X),ct=!Le&&!Ke&&Ra(X);he=X,Le||Ke||ct?mt(H)?he=H:yn(H)?he=Ei(H):Ke?(ge=!1,he=u0(X,!0)):ct?(ge=!1,he=f0(X,!0)):he=[]:tc(X)||wo(X)?(he=H,wo(H)?he=ax(H):(!un(H)||fs(H))&&(he=R0(X))):ge=!1}ge&&(B.set(X,he),T(he,X,S,D,B),B.delete(X)),yd(o,d,he)}function Qv(o,c){var d=o.length;if(d)return c+=c<0?d:0,us(c,d)?o[c]:t}function e0(o,c,d){c.length?c=ln(c,function(D){return mt(D)?function(B){return Mo(B,D.length===1?D[0]:D)}:D}):c=[bi];var S=-1;c=ln(c,Fi(lt()));var T=Kv(o,function(D,B,H){var X=ln(c,function(fe){return fe(D)});return{criteria:X,index:++S,value:D}});return $w(T,function(D,B){return LC(D,B,d)})}function xC(o,c){return t0(o,c,function(d,S){return np(o,S)})}function t0(o,c,d){for(var S=-1,T=c.length,D={};++S<T;){var B=c[S],H=Mo(o,B);d(H,B)&&Zl(D,Gs(B,o),H)}return D}function yC(o){return function(c){return Mo(c,o)}}function Rd(o,c,d,S){var T=S?Vw:va,D=-1,B=c.length,H=o;for(o===c&&(c=Ei(c)),d&&(H=ln(o,Fi(d)));++D<B;)for(var X=0,fe=c[D],he=d?d(fe):fe;(X=T(H,he,X,S))>-1;)H!==o&&yu.call(H,X,1),yu.call(o,X,1);return o}function n0(o,c){for(var d=o?c.length:0,S=d-1;d--;){var T=c[d];if(d==S||T!==D){var D=T;us(T)?yu.call(o,T,1):Id(o,T)}}return o}function Pd(o,c){return o+Mu(Nv()*(c-o+1))}function SC(o,c,d,S){for(var T=-1,D=Ln(Eu((c-o)/(d||1)),0),B=re(D);D--;)B[S?D:++T]=o,o+=d;return B}function Ld(o,c){var d="";if(!o||c<1||c>ie)return d;do c%2&&(d+=o),c=Mu(c/2),c&&(o+=o);while(c);return d}function Tt(o,c){return Yd(D0(o,c,bi),o+"")}function EC(o){return zv(Pa(o))}function MC(o,c){var d=Pa(o);return Gu(d,Eo(c,0,d.length))}function Zl(o,c,d,S){if(!un(o))return o;c=Gs(c,o);for(var T=-1,D=c.length,B=D-1,H=o;H!=null&&++T<D;){var X=Gr(c[T]),fe=d;if(X==="__proto__"||X==="constructor"||X==="prototype")return o;if(T!=B){var he=H[X];fe=S?S(he,X,H):t,fe===t&&(fe=un(he)?he:us(c[T+1])?[]:{})}ql(H,X,fe),H=H[X]}return o}var i0=Tu?function(o,c){return Tu.set(o,c),o}:bi,TC=Su?function(o,c){return Su(o,"toString",{configurable:!0,enumerable:!1,value:rp(c),writable:!0})}:bi;function bC(o){return Gu(Pa(o))}function ar(o,c,d){var S=-1,T=o.length;c<0&&(c=-c>T?0:T+c),d=d>T?T:d,d<0&&(d+=T),T=c>d?0:d-c>>>0,c>>>=0;for(var D=re(T);++S<T;)D[S]=o[S+c];return D}function wC(o,c){var d;return Bs(o,function(S,T,D){return d=c(S,T,D),!d}),!!d}function Lu(o,c,d){var S=0,T=o==null?S:o.length;if(typeof c=="number"&&c===c&&T<=Je){for(;S<T;){var D=S+T>>>1,B=o[D];B!==null&&!zi(B)&&(d?B<=c:B<c)?S=D+1:T=D}return T}return Dd(o,c,bi,d)}function Dd(o,c,d,S){var T=0,D=o==null?0:o.length;if(D===0)return 0;c=d(c);for(var B=c!==c,H=c===null,X=zi(c),fe=c===t;T<D;){var he=Mu((T+D)/2),ge=d(o[he]),Le=ge!==t,Ke=ge===null,ct=ge===ge,Et=zi(ge);if(B)var ut=S||ct;else fe?ut=ct&&(S||Le):H?ut=ct&&Le&&(S||!Ke):X?ut=ct&&Le&&!Ke&&(S||!Et):Ke||Et?ut=!1:ut=S?ge<=c:ge<c;ut?T=he+1:D=he}return Jn(D,Se)}function r0(o,c){for(var d=-1,S=o.length,T=0,D=[];++d<S;){var B=o[d],H=c?c(B):B;if(!d||!br(H,X)){var X=H;D[T++]=B===0?0:B}}return D}function s0(o){return typeof o=="number"?o:zi(o)?N:+o}function Bi(o){if(typeof o=="string")return o;if(mt(o))return ln(o,Bi)+"";if(zi(o))return Fv?Fv.call(o):"";var c=o+"";return c=="0"&&1/o==-te?"-0":c}function zs(o,c,d){var S=-1,T=uu,D=o.length,B=!0,H=[],X=H;if(d)B=!1,T=ad;else if(D>=r){var fe=c?null:FC(o);if(fe)return hu(fe);B=!1,T=Hl,X=new So}else X=c?[]:H;e:for(;++S<D;){var he=o[S],ge=c?c(he):he;if(he=d||he!==0?he:0,B&&ge===ge){for(var Le=X.length;Le--;)if(X[Le]===ge)continue e;c&&X.push(ge),H.push(he)}else T(X,ge,d)||(X!==H&&X.push(ge),H.push(he))}return H}function Id(o,c){return c=Gs(c,o),o=I0(o,c),o==null||delete o[Gr(lr(c))]}function o0(o,c,d,S){return Zl(o,c,d(Mo(o,c)),S)}function Du(o,c,d,S){for(var T=o.length,D=S?T:-1;(S?D--:++D<T)&&c(o[D],D,o););return d?ar(o,S?0:D,S?D+1:T):ar(o,S?D+1:0,S?T:D)}function a0(o,c){var d=o;return d instanceof Lt&&(d=d.value()),ld(c,function(S,T){return T.func.apply(T.thisArg,Us([S],T.args))},d)}function Od(o,c,d){var S=o.length;if(S<2)return S?zs(o[0]):[];for(var T=-1,D=re(S);++T<S;)for(var B=o[T],H=-1;++H<S;)H!=T&&(D[T]=Yl(D[T]||B,o[H],c,d));return zs($n(D,1),c,d)}function l0(o,c,d){for(var S=-1,T=o.length,D=c.length,B={};++S<T;){var H=S<D?c[S]:t;d(B,o[S],H)}return B}function Ud(o){return yn(o)?o:[]}function Nd(o){return typeof o=="function"?o:bi}function Gs(o,c){return mt(o)?o:$d(o,c)?[o]:F0(kt(o))}var AC=Tt;function Hs(o,c,d){var S=o.length;return d=d===t?S:d,!c&&d>=S?o:ar(o,c,d)}var c0=pA||function(o){return Vn.clearTimeout(o)};function u0(o,c){if(c)return o.slice();var d=o.length,S=Lv?Lv(d):new o.constructor(d);return o.copy(S),S}function Fd(o){var c=new o.constructor(o.byteLength);return new vu(c).set(new vu(o)),c}function CC(o,c){var d=c?Fd(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.byteLength)}function RC(o){var c=new o.constructor(o.source,Zn.exec(o));return c.lastIndex=o.lastIndex,c}function PC(o){return Xl?Zt(Xl.call(o)):{}}function f0(o,c){var d=c?Fd(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.length)}function h0(o,c){if(o!==c){var d=o!==t,S=o===null,T=o===o,D=zi(o),B=c!==t,H=c===null,X=c===c,fe=zi(c);if(!H&&!fe&&!D&&o>c||D&&B&&X&&!H&&!fe||S&&B&&X||!d&&X||!T)return 1;if(!S&&!D&&!fe&&o<c||fe&&d&&T&&!S&&!D||H&&d&&T||!B&&T||!X)return-1}return 0}function LC(o,c,d){for(var S=-1,T=o.criteria,D=c.criteria,B=T.length,H=d.length;++S<B;){var X=h0(T[S],D[S]);if(X){if(S>=H)return X;var fe=d[S];return X*(fe=="desc"?-1:1)}}return o.index-c.index}function d0(o,c,d,S){for(var T=-1,D=o.length,B=d.length,H=-1,X=c.length,fe=Ln(D-B,0),he=re(X+fe),ge=!S;++H<X;)he[H]=c[H];for(;++T<B;)(ge||T<D)&&(he[d[T]]=o[T]);for(;fe--;)he[H++]=o[T++];return he}function p0(o,c,d,S){for(var T=-1,D=o.length,B=-1,H=d.length,X=-1,fe=c.length,he=Ln(D-H,0),ge=re(he+fe),Le=!S;++T<he;)ge[T]=o[T];for(var Ke=T;++X<fe;)ge[Ke+X]=c[X];for(;++B<H;)(Le||T<D)&&(ge[Ke+d[B]]=o[T++]);return ge}function Ei(o,c){var d=-1,S=o.length;for(c||(c=re(S));++d<S;)c[d]=o[d];return c}function zr(o,c,d,S){var T=!d;d||(d={});for(var D=-1,B=c.length;++D<B;){var H=c[D],X=S?S(d[H],o[H],H,d,o):t;X===t&&(X=o[H]),T?as(d,H,X):ql(d,H,X)}return d}function DC(o,c){return zr(o,Vd(o),c)}function IC(o,c){return zr(o,A0(o),c)}function Iu(o,c){return function(d,S){var T=mt(d)?Bw:tC,D=c?c():{};return T(d,o,lt(S,2),D)}}function wa(o){return Tt(function(c,d){var S=-1,T=d.length,D=T>1?d[T-1]:t,B=T>2?d[2]:t;for(D=o.length>3&&typeof D=="function"?(T--,D):t,B&&ci(d[0],d[1],B)&&(D=T<3?t:D,T=1),c=Zt(c);++S<T;){var H=d[S];H&&o(c,H,S,D)}return c})}function m0(o,c){return function(d,S){if(d==null)return d;if(!Mi(d))return o(d,S);for(var T=d.length,D=c?T:-1,B=Zt(d);(c?D--:++D<T)&&S(B[D],D,B)!==!1;);return d}}function g0(o){return function(c,d,S){for(var T=-1,D=Zt(c),B=S(c),H=B.length;H--;){var X=B[o?H:++T];if(d(D[X],X,D)===!1)break}return c}}function OC(o,c,d){var S=c&_,T=Jl(o);function D(){var B=this&&this!==Vn&&this instanceof D?T:o;return B.apply(S?d:this,arguments)}return D}function _0(o){return function(c){c=kt(c);var d=xa(c)?Mr(c):t,S=d?d[0]:c.charAt(0),T=d?Hs(d,1).join(""):c.slice(1);return S[o]()+T}}function Aa(o){return function(c){return ld(mx(px(c).replace(Tw,"")),o,"")}}function Jl(o){return function(){var c=arguments;switch(c.length){case 0:return new o;case 1:return new o(c[0]);case 2:return new o(c[0],c[1]);case 3:return new o(c[0],c[1],c[2]);case 4:return new o(c[0],c[1],c[2],c[3]);case 5:return new o(c[0],c[1],c[2],c[3],c[4]);case 6:return new o(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new o(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var d=ba(o.prototype),S=o.apply(d,c);return un(S)?S:d}}function UC(o,c,d){var S=Jl(o);function T(){for(var D=arguments.length,B=re(D),H=D,X=Ca(T);H--;)B[H]=arguments[H];var fe=D<3&&B[0]!==X&&B[D-1]!==X?[]:Ns(B,X);if(D-=fe.length,D<d)return E0(o,c,Ou,T.placeholder,t,B,fe,t,t,d-D);var he=this&&this!==Vn&&this instanceof T?S:o;return Ni(he,this,B)}return T}function v0(o){return function(c,d,S){var T=Zt(c);if(!Mi(c)){var D=lt(d,3);c=Nn(c),d=function(H){return D(T[H],H,T)}}var B=o(c,d,S);return B>-1?T[D?c[B]:B]:t}}function x0(o){return cs(function(c){var d=c.length,S=d,T=sr.prototype.thru;for(o&&c.reverse();S--;){var D=c[S];if(typeof D!="function")throw new rr(a);if(T&&!B&&Bu(D)=="wrapper")var B=new sr([],!0)}for(S=B?S:d;++S<d;){D=c[S];var H=Bu(D),X=H=="wrapper"?kd(D):t;X&&Xd(X[0])&&X[1]==(A|b|C|z)&&!X[4].length&&X[9]==1?B=B[Bu(X[0])].apply(B,X[3]):B=D.length==1&&Xd(D)?B[H]():B.thru(D)}return function(){var fe=arguments,he=fe[0];if(B&&fe.length==1&&mt(he))return B.plant(he).value();for(var ge=0,Le=d?c[ge].apply(this,fe):he;++ge<d;)Le=c[ge].call(this,Le);return Le}})}function Ou(o,c,d,S,T,D,B,H,X,fe){var he=c&A,ge=c&_,Le=c&v,Ke=c&(b|E),ct=c&k,Et=Le?t:Jl(o);function ut(){for(var Rt=arguments.length,Ot=re(Rt),Gi=Rt;Gi--;)Ot[Gi]=arguments[Gi];if(Ke)var ui=Ca(ut),Hi=qw(Ot,ui);if(S&&(Ot=d0(Ot,S,T,Ke)),D&&(Ot=p0(Ot,D,B,Ke)),Rt-=Hi,Ke&&Rt<fe){var Sn=Ns(Ot,ui);return E0(o,c,Ou,ut.placeholder,d,Ot,Sn,H,X,fe-Rt)}var wr=ge?d:this,ds=Le?wr[o]:o;return Rt=Ot.length,H?Ot=tR(Ot,H):ct&&Rt>1&&Ot.reverse(),he&&X<Rt&&(Ot.length=X),this&&this!==Vn&&this instanceof ut&&(ds=Et||Jl(ds)),ds.apply(wr,Ot)}return ut}function y0(o,c){return function(d,S){return cC(d,o,c(S),{})}}function Uu(o,c){return function(d,S){var T;if(d===t&&S===t)return c;if(d!==t&&(T=d),S!==t){if(T===t)return S;typeof d=="string"||typeof S=="string"?(d=Bi(d),S=Bi(S)):(d=s0(d),S=s0(S)),T=o(d,S)}return T}}function Bd(o){return cs(function(c){return c=ln(c,Fi(lt())),Tt(function(d){var S=this;return o(c,function(T){return Ni(T,S,d)})})})}function Nu(o,c){c=c===t?" ":Bi(c);var d=c.length;if(d<2)return d?Ld(c,o):c;var S=Ld(c,Eu(o/ya(c)));return xa(c)?Hs(Mr(S),0,o).join(""):S.slice(0,o)}function NC(o,c,d,S){var T=c&_,D=Jl(o);function B(){for(var H=-1,X=arguments.length,fe=-1,he=S.length,ge=re(he+X),Le=this&&this!==Vn&&this instanceof B?D:o;++fe<he;)ge[fe]=S[fe];for(;X--;)ge[fe++]=arguments[++H];return Ni(Le,T?d:this,ge)}return B}function S0(o){return function(c,d,S){return S&&typeof S!="number"&&ci(c,d,S)&&(d=S=t),c=hs(c),d===t?(d=c,c=0):d=hs(d),S=S===t?c<d?1:-1:hs(S),SC(c,d,S,o)}}function Fu(o){return function(c,d){return typeof c=="string"&&typeof d=="string"||(c=cr(c),d=cr(d)),o(c,d)}}function E0(o,c,d,S,T,D,B,H,X,fe){var he=c&b,ge=he?B:t,Le=he?t:B,Ke=he?D:t,ct=he?t:D;c|=he?C:R,c&=~(he?R:C),c&w||(c&=~(_|v));var Et=[o,c,T,Ke,ge,ct,Le,H,X,fe],ut=d.apply(t,Et);return Xd(o)&&O0(ut,Et),ut.placeholder=S,U0(ut,o,c)}function zd(o){var c=Pn[o];return function(d,S){if(d=cr(d),S=S==null?0:Jn(xt(S),292),S&&Uv(d)){var T=(kt(d)+"e").split("e"),D=c(T[0]+"e"+(+T[1]+S));return T=(kt(D)+"e").split("e"),+(T[0]+"e"+(+T[1]-S))}return c(d)}}var FC=Ma&&1/hu(new Ma([,-0]))[1]==te?function(o){return new Ma(o)}:ap;function M0(o){return function(c){var d=Qn(c);return d==Te?md(c):d==Y?eA(c):Xw(c,o(c))}}function ls(o,c,d,S,T,D,B,H){var X=c&v;if(!X&&typeof o!="function")throw new rr(a);var fe=S?S.length:0;if(fe||(c&=~(C|R),S=T=t),B=B===t?B:Ln(xt(B),0),H=H===t?H:xt(H),fe-=T?T.length:0,c&R){var he=S,ge=T;S=T=t}var Le=X?t:kd(o),Ke=[o,c,d,S,T,he,ge,D,B,H];if(Le&&JC(Ke,Le),o=Ke[0],c=Ke[1],d=Ke[2],S=Ke[3],T=Ke[4],H=Ke[9]=Ke[9]===t?X?0:o.length:Ln(Ke[9]-fe,0),!H&&c&(b|E)&&(c&=~(b|E)),!c||c==_)var ct=OC(o,c,d);else c==b||c==E?ct=UC(o,c,H):(c==C||c==(_|C))&&!T.length?ct=NC(o,c,d,S):ct=Ou.apply(t,Ke);var Et=Le?i0:O0;return U0(Et(ct,Ke),o,c)}function T0(o,c,d,S){return o===t||br(o,Ea[d])&&!Vt.call(S,d)?c:o}function b0(o,c,d,S,T,D){return un(o)&&un(c)&&(D.set(c,o),Pu(o,c,t,b0,D),D.delete(c)),o}function BC(o){return tc(o)?t:o}function w0(o,c,d,S,T,D){var B=d&y,H=o.length,X=c.length;if(H!=X&&!(B&&X>H))return!1;var fe=D.get(o),he=D.get(c);if(fe&&he)return fe==c&&he==o;var ge=-1,Le=!0,Ke=d&x?new So:t;for(D.set(o,c),D.set(c,o);++ge<H;){var ct=o[ge],Et=c[ge];if(S)var ut=B?S(Et,ct,ge,c,o,D):S(ct,Et,ge,o,c,D);if(ut!==t){if(ut)continue;Le=!1;break}if(Ke){if(!cd(c,function(Rt,Ot){if(!Hl(Ke,Ot)&&(ct===Rt||T(ct,Rt,d,S,D)))return Ke.push(Ot)})){Le=!1;break}}else if(!(ct===Et||T(ct,Et,d,S,D))){Le=!1;break}}return D.delete(o),D.delete(c),Le}function zC(o,c,d,S,T,D,B){switch(d){case Ge:if(o.byteLength!=c.byteLength||o.byteOffset!=c.byteOffset)return!1;o=o.buffer,c=c.buffer;case Ee:return!(o.byteLength!=c.byteLength||!D(new vu(o),new vu(c)));case Oe:case Ce:case ke:return br(+o,+c);case $e:return o.name==c.name&&o.message==c.message;case P:case me:return o==c+"";case Te:var H=md;case Y:var X=S&y;if(H||(H=hu),o.size!=c.size&&!X)return!1;var fe=B.get(o);if(fe)return fe==c;S|=x,B.set(o,c);var he=w0(H(o),H(c),S,T,D,B);return B.delete(o),he;case de:if(Xl)return Xl.call(o)==Xl.call(c)}return!1}function GC(o,c,d,S,T,D){var B=d&y,H=Gd(o),X=H.length,fe=Gd(c),he=fe.length;if(X!=he&&!B)return!1;for(var ge=X;ge--;){var Le=H[ge];if(!(B?Le in c:Vt.call(c,Le)))return!1}var Ke=D.get(o),ct=D.get(c);if(Ke&&ct)return Ke==c&&ct==o;var Et=!0;D.set(o,c),D.set(c,o);for(var ut=B;++ge<X;){Le=H[ge];var Rt=o[Le],Ot=c[Le];if(S)var Gi=B?S(Ot,Rt,Le,c,o,D):S(Rt,Ot,Le,o,c,D);if(!(Gi===t?Rt===Ot||T(Rt,Ot,d,S,D):Gi)){Et=!1;break}ut||(ut=Le=="constructor")}if(Et&&!ut){var ui=o.constructor,Hi=c.constructor;ui!=Hi&&"constructor"in o&&"constructor"in c&&!(typeof ui=="function"&&ui instanceof ui&&typeof Hi=="function"&&Hi instanceof Hi)&&(Et=!1)}return D.delete(o),D.delete(c),Et}function cs(o){return Yd(D0(o,t,H0),o+"")}function Gd(o){return Xv(o,Nn,Vd)}function Hd(o){return Xv(o,Ti,A0)}var kd=Tu?function(o){return Tu.get(o)}:ap;function Bu(o){for(var c=o.name+"",d=Ta[c],S=Vt.call(Ta,c)?d.length:0;S--;){var T=d[S],D=T.func;if(D==null||D==o)return T.name}return c}function Ca(o){var c=Vt.call(L,"placeholder")?L:o;return c.placeholder}function lt(){var o=L.iteratee||sp;return o=o===sp?jv:o,arguments.length?o(arguments[0],arguments[1]):o}function zu(o,c){var d=o.__data__;return YC(c)?d[typeof c=="string"?"string":"hash"]:d.map}function Wd(o){for(var c=Nn(o),d=c.length;d--;){var S=c[d],T=o[S];c[d]=[S,T,P0(T)]}return c}function To(o,c){var d=Zw(o,c);return Yv(d)?d:t}function HC(o){var c=Vt.call(o,xo),d=o[xo];try{o[xo]=t;var S=!0}catch{}var T=gu.call(o);return S&&(c?o[xo]=d:delete o[xo]),T}var Vd=_d?function(o){return o==null?[]:(o=Zt(o),Os(_d(o),function(c){return Iv.call(o,c)}))}:lp,A0=_d?function(o){for(var c=[];o;)Us(c,Vd(o)),o=xu(o);return c}:lp,Qn=li;(vd&&Qn(new vd(new ArrayBuffer(1)))!=Ge||Wl&&Qn(new Wl)!=Te||xd&&Qn(xd.resolve())!=et||Ma&&Qn(new Ma)!=Y||Vl&&Qn(new Vl)!=Ae)&&(Qn=function(o){var c=li(o),d=c==K?o.constructor:t,S=d?bo(d):"";if(S)switch(S){case MA:return Ge;case TA:return Te;case bA:return et;case wA:return Y;case AA:return Ae}return c});function kC(o,c,d){for(var S=-1,T=d.length;++S<T;){var D=d[S],B=D.size;switch(D.type){case"drop":o+=B;break;case"dropRight":c-=B;break;case"take":c=Jn(c,o+B);break;case"takeRight":o=Ln(o,c-B);break}}return{start:o,end:c}}function WC(o){var c=o.match(St);return c?c[1].split($t):[]}function C0(o,c,d){c=Gs(c,o);for(var S=-1,T=c.length,D=!1;++S<T;){var B=Gr(c[S]);if(!(D=o!=null&&d(o,B)))break;o=o[B]}return D||++S!=T?D:(T=o==null?0:o.length,!!T&&Xu(T)&&us(B,T)&&(mt(o)||wo(o)))}function VC(o){var c=o.length,d=new o.constructor(c);return c&&typeof o[0]=="string"&&Vt.call(o,"index")&&(d.index=o.index,d.input=o.input),d}function R0(o){return typeof o.constructor=="function"&&!Ql(o)?ba(xu(o)):{}}function $C(o,c,d){var S=o.constructor;switch(c){case Ee:return Fd(o);case Oe:case Ce:return new S(+o);case Ge:return CC(o,d);case tt:case pe:case bt:case Xe:case ot:case We:case Ie:case at:case _t:return f0(o,d);case Te:return new S;case ke:case me:return new S(o);case P:return RC(o);case Y:return new S;case de:return PC(o)}}function XC(o,c){var d=c.length;if(!d)return o;var S=d-1;return c[S]=(d>1?"& ":"")+c[S],c=c.join(d>2?", ":" "),o.replace(tn,`{
/* [wrapped with `+c+`] */
`)}function qC(o){return mt(o)||wo(o)||!!(Ov&&o&&o[Ov])}function us(o,c){var d=typeof o;return c=c??ie,!!c&&(d=="number"||d!="symbol"&&Z.test(o))&&o>-1&&o%1==0&&o<c}function ci(o,c,d){if(!un(d))return!1;var S=typeof c;return(S=="number"?Mi(d)&&us(c,d.length):S=="string"&&c in d)?br(d[c],o):!1}function $d(o,c){if(mt(o))return!1;var d=typeof o;return d=="number"||d=="symbol"||d=="boolean"||o==null||zi(o)?!0:Ve.test(o)||!qe.test(o)||c!=null&&o in Zt(c)}function YC(o){var c=typeof o;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?o!=="__proto__":o===null}function Xd(o){var c=Bu(o),d=L[c];if(typeof d!="function"||!(c in Lt.prototype))return!1;if(o===d)return!0;var S=kd(d);return!!S&&o===S[0]}function jC(o){return!!Pv&&Pv in o}var KC=pu?fs:cp;function Ql(o){var c=o&&o.constructor,d=typeof c=="function"&&c.prototype||Ea;return o===d}function P0(o){return o===o&&!un(o)}function L0(o,c){return function(d){return d==null?!1:d[o]===c&&(c!==t||o in Zt(d))}}function ZC(o){var c=Vu(o,function(S){return d.size===f&&d.clear(),S}),d=c.cache;return c}function JC(o,c){var d=o[1],S=c[1],T=d|S,D=T<(_|v|A),B=S==A&&d==b||S==A&&d==z&&o[7].length<=c[8]||S==(A|z)&&c[7].length<=c[8]&&d==b;if(!(D||B))return o;S&_&&(o[2]=c[2],T|=d&_?0:w);var H=c[3];if(H){var X=o[3];o[3]=X?d0(X,H,c[4]):H,o[4]=X?Ns(o[3],h):c[4]}return H=c[5],H&&(X=o[5],o[5]=X?p0(X,H,c[6]):H,o[6]=X?Ns(o[5],h):c[6]),H=c[7],H&&(o[7]=H),S&A&&(o[8]=o[8]==null?c[8]:Jn(o[8],c[8])),o[9]==null&&(o[9]=c[9]),o[0]=c[0],o[1]=T,o}function QC(o){var c=[];if(o!=null)for(var d in Zt(o))c.push(d);return c}function eR(o){return gu.call(o)}function D0(o,c,d){return c=Ln(c===t?o.length-1:c,0),function(){for(var S=arguments,T=-1,D=Ln(S.length-c,0),B=re(D);++T<D;)B[T]=S[c+T];T=-1;for(var H=re(c+1);++T<c;)H[T]=S[T];return H[c]=d(B),Ni(o,this,H)}}function I0(o,c){return c.length<2?o:Mo(o,ar(c,0,-1))}function tR(o,c){for(var d=o.length,S=Jn(c.length,d),T=Ei(o);S--;){var D=c[S];o[S]=us(D,d)?T[D]:t}return o}function qd(o,c){if(!(c==="constructor"&&typeof o[c]=="function")&&c!="__proto__")return o[c]}var O0=N0(i0),ec=gA||function(o,c){return Vn.setTimeout(o,c)},Yd=N0(TC);function U0(o,c,d){var S=c+"";return Yd(o,XC(S,nR(WC(S),d)))}function N0(o){var c=0,d=0;return function(){var S=yA(),T=ae-(S-d);if(d=S,T>0){if(++c>=V)return arguments[0]}else c=0;return o.apply(t,arguments)}}function Gu(o,c){var d=-1,S=o.length,T=S-1;for(c=c===t?S:c;++d<c;){var D=Pd(d,T),B=o[D];o[D]=o[d],o[d]=B}return o.length=c,o}var F0=ZC(function(o){var c=[];return o.charCodeAt(0)===46&&c.push(""),o.replace(je,function(d,S,T,D){c.push(T?D.replace(Xt,"$1"):S||d)}),c});function Gr(o){if(typeof o=="string"||zi(o))return o;var c=o+"";return c=="0"&&1/o==-te?"-0":c}function bo(o){if(o!=null){try{return mu.call(o)}catch{}try{return o+""}catch{}}return""}function nR(o,c){return ir(ne,function(d){var S="_."+d[0];c&d[1]&&!uu(o,S)&&o.push(S)}),o.sort()}function B0(o){if(o instanceof Lt)return o.clone();var c=new sr(o.__wrapped__,o.__chain__);return c.__actions__=Ei(o.__actions__),c.__index__=o.__index__,c.__values__=o.__values__,c}function iR(o,c,d){(d?ci(o,c,d):c===t)?c=1:c=Ln(xt(c),0);var S=o==null?0:o.length;if(!S||c<1)return[];for(var T=0,D=0,B=re(Eu(S/c));T<S;)B[D++]=ar(o,T,T+=c);return B}function rR(o){for(var c=-1,d=o==null?0:o.length,S=0,T=[];++c<d;){var D=o[c];D&&(T[S++]=D)}return T}function sR(){var o=arguments.length;if(!o)return[];for(var c=re(o-1),d=arguments[0],S=o;S--;)c[S-1]=arguments[S];return Us(mt(d)?Ei(d):[d],$n(c,1))}var oR=Tt(function(o,c){return yn(o)?Yl(o,$n(c,1,yn,!0)):[]}),aR=Tt(function(o,c){var d=lr(c);return yn(d)&&(d=t),yn(o)?Yl(o,$n(c,1,yn,!0),lt(d,2)):[]}),lR=Tt(function(o,c){var d=lr(c);return yn(d)&&(d=t),yn(o)?Yl(o,$n(c,1,yn,!0),t,d):[]});function cR(o,c,d){var S=o==null?0:o.length;return S?(c=d||c===t?1:xt(c),ar(o,c<0?0:c,S)):[]}function uR(o,c,d){var S=o==null?0:o.length;return S?(c=d||c===t?1:xt(c),c=S-c,ar(o,0,c<0?0:c)):[]}function fR(o,c){return o&&o.length?Du(o,lt(c,3),!0,!0):[]}function hR(o,c){return o&&o.length?Du(o,lt(c,3),!0):[]}function dR(o,c,d,S){var T=o==null?0:o.length;return T?(d&&typeof d!="number"&&ci(o,c,d)&&(d=0,S=T),sC(o,c,d,S)):[]}function z0(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var T=d==null?0:xt(d);return T<0&&(T=Ln(S+T,0)),fu(o,lt(c,3),T)}function G0(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var T=S-1;return d!==t&&(T=xt(d),T=d<0?Ln(S+T,0):Jn(T,S-1)),fu(o,lt(c,3),T,!0)}function H0(o){var c=o==null?0:o.length;return c?$n(o,1):[]}function pR(o){var c=o==null?0:o.length;return c?$n(o,te):[]}function mR(o,c){var d=o==null?0:o.length;return d?(c=c===t?1:xt(c),$n(o,c)):[]}function gR(o){for(var c=-1,d=o==null?0:o.length,S={};++c<d;){var T=o[c];S[T[0]]=T[1]}return S}function k0(o){return o&&o.length?o[0]:t}function _R(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var T=d==null?0:xt(d);return T<0&&(T=Ln(S+T,0)),va(o,c,T)}function vR(o){var c=o==null?0:o.length;return c?ar(o,0,-1):[]}var xR=Tt(function(o){var c=ln(o,Ud);return c.length&&c[0]===o[0]?bd(c):[]}),yR=Tt(function(o){var c=lr(o),d=ln(o,Ud);return c===lr(d)?c=t:d.pop(),d.length&&d[0]===o[0]?bd(d,lt(c,2)):[]}),SR=Tt(function(o){var c=lr(o),d=ln(o,Ud);return c=typeof c=="function"?c:t,c&&d.pop(),d.length&&d[0]===o[0]?bd(d,t,c):[]});function ER(o,c){return o==null?"":vA.call(o,c)}function lr(o){var c=o==null?0:o.length;return c?o[c-1]:t}function MR(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var T=S;return d!==t&&(T=xt(d),T=T<0?Ln(S+T,0):Jn(T,S-1)),c===c?nA(o,c,T):fu(o,Ev,T,!0)}function TR(o,c){return o&&o.length?Qv(o,xt(c)):t}var bR=Tt(W0);function W0(o,c){return o&&o.length&&c&&c.length?Rd(o,c):o}function wR(o,c,d){return o&&o.length&&c&&c.length?Rd(o,c,lt(d,2)):o}function AR(o,c,d){return o&&o.length&&c&&c.length?Rd(o,c,t,d):o}var CR=cs(function(o,c){var d=o==null?0:o.length,S=Sd(o,c);return n0(o,ln(c,function(T){return us(T,d)?+T:T}).sort(h0)),S});function RR(o,c){var d=[];if(!(o&&o.length))return d;var S=-1,T=[],D=o.length;for(c=lt(c,3);++S<D;){var B=o[S];c(B,S,o)&&(d.push(B),T.push(S))}return n0(o,T),d}function jd(o){return o==null?o:EA.call(o)}function PR(o,c,d){var S=o==null?0:o.length;return S?(d&&typeof d!="number"&&ci(o,c,d)?(c=0,d=S):(c=c==null?0:xt(c),d=d===t?S:xt(d)),ar(o,c,d)):[]}function LR(o,c){return Lu(o,c)}function DR(o,c,d){return Dd(o,c,lt(d,2))}function IR(o,c){var d=o==null?0:o.length;if(d){var S=Lu(o,c);if(S<d&&br(o[S],c))return S}return-1}function OR(o,c){return Lu(o,c,!0)}function UR(o,c,d){return Dd(o,c,lt(d,2),!0)}function NR(o,c){var d=o==null?0:o.length;if(d){var S=Lu(o,c,!0)-1;if(br(o[S],c))return S}return-1}function FR(o){return o&&o.length?r0(o):[]}function BR(o,c){return o&&o.length?r0(o,lt(c,2)):[]}function zR(o){var c=o==null?0:o.length;return c?ar(o,1,c):[]}function GR(o,c,d){return o&&o.length?(c=d||c===t?1:xt(c),ar(o,0,c<0?0:c)):[]}function HR(o,c,d){var S=o==null?0:o.length;return S?(c=d||c===t?1:xt(c),c=S-c,ar(o,c<0?0:c,S)):[]}function kR(o,c){return o&&o.length?Du(o,lt(c,3),!1,!0):[]}function WR(o,c){return o&&o.length?Du(o,lt(c,3)):[]}var VR=Tt(function(o){return zs($n(o,1,yn,!0))}),$R=Tt(function(o){var c=lr(o);return yn(c)&&(c=t),zs($n(o,1,yn,!0),lt(c,2))}),XR=Tt(function(o){var c=lr(o);return c=typeof c=="function"?c:t,zs($n(o,1,yn,!0),t,c)});function qR(o){return o&&o.length?zs(o):[]}function YR(o,c){return o&&o.length?zs(o,lt(c,2)):[]}function jR(o,c){return c=typeof c=="function"?c:t,o&&o.length?zs(o,t,c):[]}function Kd(o){if(!(o&&o.length))return[];var c=0;return o=Os(o,function(d){if(yn(d))return c=Ln(d.length,c),!0}),dd(c,function(d){return ln(o,ud(d))})}function V0(o,c){if(!(o&&o.length))return[];var d=Kd(o);return c==null?d:ln(d,function(S){return Ni(c,t,S)})}var KR=Tt(function(o,c){return yn(o)?Yl(o,c):[]}),ZR=Tt(function(o){return Od(Os(o,yn))}),JR=Tt(function(o){var c=lr(o);return yn(c)&&(c=t),Od(Os(o,yn),lt(c,2))}),QR=Tt(function(o){var c=lr(o);return c=typeof c=="function"?c:t,Od(Os(o,yn),t,c)}),eP=Tt(Kd);function tP(o,c){return l0(o||[],c||[],ql)}function nP(o,c){return l0(o||[],c||[],Zl)}var iP=Tt(function(o){var c=o.length,d=c>1?o[c-1]:t;return d=typeof d=="function"?(o.pop(),d):t,V0(o,d)});function $0(o){var c=L(o);return c.__chain__=!0,c}function rP(o,c){return c(o),o}function Hu(o,c){return c(o)}var sP=cs(function(o){var c=o.length,d=c?o[0]:0,S=this.__wrapped__,T=function(D){return Sd(D,o)};return c>1||this.__actions__.length||!(S instanceof Lt)||!us(d)?this.thru(T):(S=S.slice(d,+d+(c?1:0)),S.__actions__.push({func:Hu,args:[T],thisArg:t}),new sr(S,this.__chain__).thru(function(D){return c&&!D.length&&D.push(t),D}))});function oP(){return $0(this)}function aP(){return new sr(this.value(),this.__chain__)}function lP(){this.__values__===t&&(this.__values__=sx(this.value()));var o=this.__index__>=this.__values__.length,c=o?t:this.__values__[this.__index__++];return{done:o,value:c}}function cP(){return this}function uP(o){for(var c,d=this;d instanceof wu;){var S=B0(d);S.__index__=0,S.__values__=t,c?T.__wrapped__=S:c=S;var T=S;d=d.__wrapped__}return T.__wrapped__=o,c}function fP(){var o=this.__wrapped__;if(o instanceof Lt){var c=o;return this.__actions__.length&&(c=new Lt(this)),c=c.reverse(),c.__actions__.push({func:Hu,args:[jd],thisArg:t}),new sr(c,this.__chain__)}return this.thru(jd)}function hP(){return a0(this.__wrapped__,this.__actions__)}var dP=Iu(function(o,c,d){Vt.call(o,d)?++o[d]:as(o,d,1)});function pP(o,c,d){var S=mt(o)?yv:rC;return d&&ci(o,c,d)&&(c=t),S(o,lt(c,3))}function mP(o,c){var d=mt(o)?Os:Vv;return d(o,lt(c,3))}var gP=v0(z0),_P=v0(G0);function vP(o,c){return $n(ku(o,c),1)}function xP(o,c){return $n(ku(o,c),te)}function yP(o,c,d){return d=d===t?1:xt(d),$n(ku(o,c),d)}function X0(o,c){var d=mt(o)?ir:Bs;return d(o,lt(c,3))}function q0(o,c){var d=mt(o)?zw:Wv;return d(o,lt(c,3))}var SP=Iu(function(o,c,d){Vt.call(o,d)?o[d].push(c):as(o,d,[c])});function EP(o,c,d,S){o=Mi(o)?o:Pa(o),d=d&&!S?xt(d):0;var T=o.length;return d<0&&(d=Ln(T+d,0)),qu(o)?d<=T&&o.indexOf(c,d)>-1:!!T&&va(o,c,d)>-1}var MP=Tt(function(o,c,d){var S=-1,T=typeof c=="function",D=Mi(o)?re(o.length):[];return Bs(o,function(B){D[++S]=T?Ni(c,B,d):jl(B,c,d)}),D}),TP=Iu(function(o,c,d){as(o,d,c)});function ku(o,c){var d=mt(o)?ln:Kv;return d(o,lt(c,3))}function bP(o,c,d,S){return o==null?[]:(mt(c)||(c=c==null?[]:[c]),d=S?t:d,mt(d)||(d=d==null?[]:[d]),e0(o,c,d))}var wP=Iu(function(o,c,d){o[d?0:1].push(c)},function(){return[[],[]]});function AP(o,c,d){var S=mt(o)?ld:Tv,T=arguments.length<3;return S(o,lt(c,4),d,T,Bs)}function CP(o,c,d){var S=mt(o)?Gw:Tv,T=arguments.length<3;return S(o,lt(c,4),d,T,Wv)}function RP(o,c){var d=mt(o)?Os:Vv;return d(o,$u(lt(c,3)))}function PP(o){var c=mt(o)?zv:EC;return c(o)}function LP(o,c,d){(d?ci(o,c,d):c===t)?c=1:c=xt(c);var S=mt(o)?QA:MC;return S(o,c)}function DP(o){var c=mt(o)?eC:bC;return c(o)}function IP(o){if(o==null)return 0;if(Mi(o))return qu(o)?ya(o):o.length;var c=Qn(o);return c==Te||c==Y?o.size:Ad(o).length}function OP(o,c,d){var S=mt(o)?cd:wC;return d&&ci(o,c,d)&&(c=t),S(o,lt(c,3))}var UP=Tt(function(o,c){if(o==null)return[];var d=c.length;return d>1&&ci(o,c[0],c[1])?c=[]:d>2&&ci(c[0],c[1],c[2])&&(c=[c[0]]),e0(o,$n(c,1),[])}),Wu=mA||function(){return Vn.Date.now()};function NP(o,c){if(typeof c!="function")throw new rr(a);return o=xt(o),function(){if(--o<1)return c.apply(this,arguments)}}function Y0(o,c,d){return c=d?t:c,c=o&&c==null?o.length:c,ls(o,A,t,t,t,t,c)}function j0(o,c){var d;if(typeof c!="function")throw new rr(a);return o=xt(o),function(){return--o>0&&(d=c.apply(this,arguments)),o<=1&&(c=t),d}}var Zd=Tt(function(o,c,d){var S=_;if(d.length){var T=Ns(d,Ca(Zd));S|=C}return ls(o,S,c,d,T)}),K0=Tt(function(o,c,d){var S=_|v;if(d.length){var T=Ns(d,Ca(K0));S|=C}return ls(c,S,o,d,T)});function Z0(o,c,d){c=d?t:c;var S=ls(o,b,t,t,t,t,t,c);return S.placeholder=Z0.placeholder,S}function J0(o,c,d){c=d?t:c;var S=ls(o,E,t,t,t,t,t,c);return S.placeholder=J0.placeholder,S}function Q0(o,c,d){var S,T,D,B,H,X,fe=0,he=!1,ge=!1,Le=!0;if(typeof o!="function")throw new rr(a);c=cr(c)||0,un(d)&&(he=!!d.leading,ge="maxWait"in d,D=ge?Ln(cr(d.maxWait)||0,c):D,Le="trailing"in d?!!d.trailing:Le);function Ke(Sn){var wr=S,ds=T;return S=T=t,fe=Sn,B=o.apply(ds,wr),B}function ct(Sn){return fe=Sn,H=ec(Rt,c),he?Ke(Sn):B}function Et(Sn){var wr=Sn-X,ds=Sn-fe,vx=c-wr;return ge?Jn(vx,D-ds):vx}function ut(Sn){var wr=Sn-X,ds=Sn-fe;return X===t||wr>=c||wr<0||ge&&ds>=D}function Rt(){var Sn=Wu();if(ut(Sn))return Ot(Sn);H=ec(Rt,Et(Sn))}function Ot(Sn){return H=t,Le&&S?Ke(Sn):(S=T=t,B)}function Gi(){H!==t&&c0(H),fe=0,S=X=T=H=t}function ui(){return H===t?B:Ot(Wu())}function Hi(){var Sn=Wu(),wr=ut(Sn);if(S=arguments,T=this,X=Sn,wr){if(H===t)return ct(X);if(ge)return c0(H),H=ec(Rt,c),Ke(X)}return H===t&&(H=ec(Rt,c)),B}return Hi.cancel=Gi,Hi.flush=ui,Hi}var FP=Tt(function(o,c){return kv(o,1,c)}),BP=Tt(function(o,c,d){return kv(o,cr(c)||0,d)});function zP(o){return ls(o,k)}function Vu(o,c){if(typeof o!="function"||c!=null&&typeof c!="function")throw new rr(a);var d=function(){var S=arguments,T=c?c.apply(this,S):S[0],D=d.cache;if(D.has(T))return D.get(T);var B=o.apply(this,S);return d.cache=D.set(T,B)||D,B};return d.cache=new(Vu.Cache||os),d}Vu.Cache=os;function $u(o){if(typeof o!="function")throw new rr(a);return function(){var c=arguments;switch(c.length){case 0:return!o.call(this);case 1:return!o.call(this,c[0]);case 2:return!o.call(this,c[0],c[1]);case 3:return!o.call(this,c[0],c[1],c[2])}return!o.apply(this,c)}}function GP(o){return j0(2,o)}var HP=AC(function(o,c){c=c.length==1&&mt(c[0])?ln(c[0],Fi(lt())):ln($n(c,1),Fi(lt()));var d=c.length;return Tt(function(S){for(var T=-1,D=Jn(S.length,d);++T<D;)S[T]=c[T].call(this,S[T]);return Ni(o,this,S)})}),Jd=Tt(function(o,c){var d=Ns(c,Ca(Jd));return ls(o,C,t,c,d)}),ex=Tt(function(o,c){var d=Ns(c,Ca(ex));return ls(o,R,t,c,d)}),kP=cs(function(o,c){return ls(o,z,t,t,t,c)});function WP(o,c){if(typeof o!="function")throw new rr(a);return c=c===t?c:xt(c),Tt(o,c)}function VP(o,c){if(typeof o!="function")throw new rr(a);return c=c==null?0:Ln(xt(c),0),Tt(function(d){var S=d[c],T=Hs(d,0,c);return S&&Us(T,S),Ni(o,this,T)})}function $P(o,c,d){var S=!0,T=!0;if(typeof o!="function")throw new rr(a);return un(d)&&(S="leading"in d?!!d.leading:S,T="trailing"in d?!!d.trailing:T),Q0(o,c,{leading:S,maxWait:c,trailing:T})}function XP(o){return Y0(o,1)}function qP(o,c){return Jd(Nd(c),o)}function YP(){if(!arguments.length)return[];var o=arguments[0];return mt(o)?o:[o]}function jP(o){return or(o,g)}function KP(o,c){return c=typeof c=="function"?c:t,or(o,g,c)}function ZP(o){return or(o,p|g)}function JP(o,c){return c=typeof c=="function"?c:t,or(o,p|g,c)}function QP(o,c){return c==null||Hv(o,c,Nn(c))}function br(o,c){return o===c||o!==o&&c!==c}var eL=Fu(Td),tL=Fu(function(o,c){return o>=c}),wo=qv(function(){return arguments}())?qv:function(o){return mn(o)&&Vt.call(o,"callee")&&!Iv.call(o,"callee")},mt=re.isArray,nL=pv?Fi(pv):uC;function Mi(o){return o!=null&&Xu(o.length)&&!fs(o)}function yn(o){return mn(o)&&Mi(o)}function iL(o){return o===!0||o===!1||mn(o)&&li(o)==Oe}var ks=_A||cp,rL=mv?Fi(mv):fC;function sL(o){return mn(o)&&o.nodeType===1&&!tc(o)}function oL(o){if(o==null)return!0;if(Mi(o)&&(mt(o)||typeof o=="string"||typeof o.splice=="function"||ks(o)||Ra(o)||wo(o)))return!o.length;var c=Qn(o);if(c==Te||c==Y)return!o.size;if(Ql(o))return!Ad(o).length;for(var d in o)if(Vt.call(o,d))return!1;return!0}function aL(o,c){return Kl(o,c)}function lL(o,c,d){d=typeof d=="function"?d:t;var S=d?d(o,c):t;return S===t?Kl(o,c,t,d):!!S}function Qd(o){if(!mn(o))return!1;var c=li(o);return c==$e||c==gt||typeof o.message=="string"&&typeof o.name=="string"&&!tc(o)}function cL(o){return typeof o=="number"&&Uv(o)}function fs(o){if(!un(o))return!1;var c=li(o);return c==q||c==st||c==De||c==O}function tx(o){return typeof o=="number"&&o==xt(o)}function Xu(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=ie}function un(o){var c=typeof o;return o!=null&&(c=="object"||c=="function")}function mn(o){return o!=null&&typeof o=="object"}var nx=gv?Fi(gv):dC;function uL(o,c){return o===c||wd(o,c,Wd(c))}function fL(o,c,d){return d=typeof d=="function"?d:t,wd(o,c,Wd(c),d)}function hL(o){return ix(o)&&o!=+o}function dL(o){if(KC(o))throw new pt(s);return Yv(o)}function pL(o){return o===null}function mL(o){return o==null}function ix(o){return typeof o=="number"||mn(o)&&li(o)==ke}function tc(o){if(!mn(o)||li(o)!=K)return!1;var c=xu(o);if(c===null)return!0;var d=Vt.call(c,"constructor")&&c.constructor;return typeof d=="function"&&d instanceof d&&mu.call(d)==fA}var ep=_v?Fi(_v):pC;function gL(o){return tx(o)&&o>=-ie&&o<=ie}var rx=vv?Fi(vv):mC;function qu(o){return typeof o=="string"||!mt(o)&&mn(o)&&li(o)==me}function zi(o){return typeof o=="symbol"||mn(o)&&li(o)==de}var Ra=xv?Fi(xv):gC;function _L(o){return o===t}function vL(o){return mn(o)&&Qn(o)==Ae}function xL(o){return mn(o)&&li(o)==we}var yL=Fu(Cd),SL=Fu(function(o,c){return o<=c});function sx(o){if(!o)return[];if(Mi(o))return qu(o)?Mr(o):Ei(o);if(kl&&o[kl])return Qw(o[kl]());var c=Qn(o),d=c==Te?md:c==Y?hu:Pa;return d(o)}function hs(o){if(!o)return o===0?o:0;if(o=cr(o),o===te||o===-te){var c=o<0?-1:1;return c*oe}return o===o?o:0}function xt(o){var c=hs(o),d=c%1;return c===c?d?c-d:c:0}function ox(o){return o?Eo(xt(o),0,ce):0}function cr(o){if(typeof o=="number")return o;if(zi(o))return N;if(un(o)){var c=typeof o.valueOf=="function"?o.valueOf():o;o=un(c)?c+"":c}if(typeof o!="string")return o===0?o:+o;o=bv(o);var d=$.test(o);return d||Q.test(o)?Nw(o.slice(2),d?2:8):I.test(o)?N:+o}function ax(o){return zr(o,Ti(o))}function EL(o){return o?Eo(xt(o),-ie,ie):o===0?o:0}function kt(o){return o==null?"":Bi(o)}var ML=wa(function(o,c){if(Ql(c)||Mi(c)){zr(c,Nn(c),o);return}for(var d in c)Vt.call(c,d)&&ql(o,d,c[d])}),lx=wa(function(o,c){zr(c,Ti(c),o)}),Yu=wa(function(o,c,d,S){zr(c,Ti(c),o,S)}),TL=wa(function(o,c,d,S){zr(c,Nn(c),o,S)}),bL=cs(Sd);function wL(o,c){var d=ba(o);return c==null?d:Gv(d,c)}var AL=Tt(function(o,c){o=Zt(o);var d=-1,S=c.length,T=S>2?c[2]:t;for(T&&ci(c[0],c[1],T)&&(S=1);++d<S;)for(var D=c[d],B=Ti(D),H=-1,X=B.length;++H<X;){var fe=B[H],he=o[fe];(he===t||br(he,Ea[fe])&&!Vt.call(o,fe))&&(o[fe]=D[fe])}return o}),CL=Tt(function(o){return o.push(t,b0),Ni(cx,t,o)});function RL(o,c){return Sv(o,lt(c,3),Br)}function PL(o,c){return Sv(o,lt(c,3),Md)}function LL(o,c){return o==null?o:Ed(o,lt(c,3),Ti)}function DL(o,c){return o==null?o:$v(o,lt(c,3),Ti)}function IL(o,c){return o&&Br(o,lt(c,3))}function OL(o,c){return o&&Md(o,lt(c,3))}function UL(o){return o==null?[]:Ru(o,Nn(o))}function NL(o){return o==null?[]:Ru(o,Ti(o))}function tp(o,c,d){var S=o==null?t:Mo(o,c);return S===t?d:S}function FL(o,c){return o!=null&&C0(o,c,oC)}function np(o,c){return o!=null&&C0(o,c,aC)}var BL=y0(function(o,c,d){c!=null&&typeof c.toString!="function"&&(c=gu.call(c)),o[c]=d},rp(bi)),zL=y0(function(o,c,d){c!=null&&typeof c.toString!="function"&&(c=gu.call(c)),Vt.call(o,c)?o[c].push(d):o[c]=[d]},lt),GL=Tt(jl);function Nn(o){return Mi(o)?Bv(o):Ad(o)}function Ti(o){return Mi(o)?Bv(o,!0):_C(o)}function HL(o,c){var d={};return c=lt(c,3),Br(o,function(S,T,D){as(d,c(S,T,D),S)}),d}function kL(o,c){var d={};return c=lt(c,3),Br(o,function(S,T,D){as(d,T,c(S,T,D))}),d}var WL=wa(function(o,c,d){Pu(o,c,d)}),cx=wa(function(o,c,d,S){Pu(o,c,d,S)}),VL=cs(function(o,c){var d={};if(o==null)return d;var S=!1;c=ln(c,function(D){return D=Gs(D,o),S||(S=D.length>1),D}),zr(o,Hd(o),d),S&&(d=or(d,p|m|g,BC));for(var T=c.length;T--;)Id(d,c[T]);return d});function $L(o,c){return ux(o,$u(lt(c)))}var XL=cs(function(o,c){return o==null?{}:xC(o,c)});function ux(o,c){if(o==null)return{};var d=ln(Hd(o),function(S){return[S]});return c=lt(c),t0(o,d,function(S,T){return c(S,T[0])})}function qL(o,c,d){c=Gs(c,o);var S=-1,T=c.length;for(T||(T=1,o=t);++S<T;){var D=o==null?t:o[Gr(c[S])];D===t&&(S=T,D=d),o=fs(D)?D.call(o):D}return o}function YL(o,c,d){return o==null?o:Zl(o,c,d)}function jL(o,c,d,S){return S=typeof S=="function"?S:t,o==null?o:Zl(o,c,d,S)}var fx=M0(Nn),hx=M0(Ti);function KL(o,c,d){var S=mt(o),T=S||ks(o)||Ra(o);if(c=lt(c,4),d==null){var D=o&&o.constructor;T?d=S?new D:[]:un(o)?d=fs(D)?ba(xu(o)):{}:d={}}return(T?ir:Br)(o,function(B,H,X){return c(d,B,H,X)}),d}function ZL(o,c){return o==null?!0:Id(o,c)}function JL(o,c,d){return o==null?o:o0(o,c,Nd(d))}function QL(o,c,d,S){return S=typeof S=="function"?S:t,o==null?o:o0(o,c,Nd(d),S)}function Pa(o){return o==null?[]:pd(o,Nn(o))}function eD(o){return o==null?[]:pd(o,Ti(o))}function tD(o,c,d){return d===t&&(d=c,c=t),d!==t&&(d=cr(d),d=d===d?d:0),c!==t&&(c=cr(c),c=c===c?c:0),Eo(cr(o),c,d)}function nD(o,c,d){return c=hs(c),d===t?(d=c,c=0):d=hs(d),o=cr(o),lC(o,c,d)}function iD(o,c,d){if(d&&typeof d!="boolean"&&ci(o,c,d)&&(c=d=t),d===t&&(typeof c=="boolean"?(d=c,c=t):typeof o=="boolean"&&(d=o,o=t)),o===t&&c===t?(o=0,c=1):(o=hs(o),c===t?(c=o,o=0):c=hs(c)),o>c){var S=o;o=c,c=S}if(d||o%1||c%1){var T=Nv();return Jn(o+T*(c-o+Uw("1e-"+((T+"").length-1))),c)}return Pd(o,c)}var rD=Aa(function(o,c,d){return c=c.toLowerCase(),o+(d?dx(c):c)});function dx(o){return ip(kt(o).toLowerCase())}function px(o){return o=kt(o),o&&o.replace(Me,Yw).replace(bw,"")}function sD(o,c,d){o=kt(o),c=Bi(c);var S=o.length;d=d===t?S:Eo(xt(d),0,S);var T=d;return d-=c.length,d>=0&&o.slice(d,T)==c}function oD(o){return o=kt(o),o&&Ne.test(o)?o.replace(ve,jw):o}function aD(o){return o=kt(o),o&&nt.test(o)?o.replace(ye,"\\$&"):o}var lD=Aa(function(o,c,d){return o+(d?"-":"")+c.toLowerCase()}),cD=Aa(function(o,c,d){return o+(d?" ":"")+c.toLowerCase()}),uD=_0("toLowerCase");function fD(o,c,d){o=kt(o),c=xt(c);var S=c?ya(o):0;if(!c||S>=c)return o;var T=(c-S)/2;return Nu(Mu(T),d)+o+Nu(Eu(T),d)}function hD(o,c,d){o=kt(o),c=xt(c);var S=c?ya(o):0;return c&&S<c?o+Nu(c-S,d):o}function dD(o,c,d){o=kt(o),c=xt(c);var S=c?ya(o):0;return c&&S<c?Nu(c-S,d)+o:o}function pD(o,c,d){return d||c==null?c=0:c&&(c=+c),SA(kt(o).replace(Qe,""),c||0)}function mD(o,c,d){return(d?ci(o,c,d):c===t)?c=1:c=xt(c),Ld(kt(o),c)}function gD(){var o=arguments,c=kt(o[0]);return o.length<3?c:c.replace(o[1],o[2])}var _D=Aa(function(o,c,d){return o+(d?"_":"")+c.toLowerCase()});function vD(o,c,d){return d&&typeof d!="number"&&ci(o,c,d)&&(c=d=t),d=d===t?ce:d>>>0,d?(o=kt(o),o&&(typeof c=="string"||c!=null&&!ep(c))&&(c=Bi(c),!c&&xa(o))?Hs(Mr(o),0,d):o.split(c,d)):[]}var xD=Aa(function(o,c,d){return o+(d?" ":"")+ip(c)});function yD(o,c,d){return o=kt(o),d=d==null?0:Eo(xt(d),0,o.length),c=Bi(c),o.slice(d,d+c.length)==c}function SD(o,c,d){var S=L.templateSettings;d&&ci(o,c,d)&&(c=t),o=kt(o),c=Yu({},c,S,T0);var T=Yu({},c.imports,S.imports,T0),D=Nn(T),B=pd(T,D),H,X,fe=0,he=c.interpolate||Fe,ge="__p += '",Le=gd((c.escape||Fe).source+"|"+he.source+"|"+(he===It?zt:Fe).source+"|"+(c.evaluate||Fe).source+"|$","g"),Ke="//# sourceURL="+(Vt.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Pw+"]")+`
`;o.replace(Le,function(ut,Rt,Ot,Gi,ui,Hi){return Ot||(Ot=Gi),ge+=o.slice(fe,Hi).replace(it,Kw),Rt&&(H=!0,ge+=`' +
__e(`+Rt+`) +
'`),ui&&(X=!0,ge+=`';
`+ui+`;
__p += '`),Ot&&(ge+=`' +
((__t = (`+Ot+`)) == null ? '' : __t) +
'`),fe=Hi+ut.length,ut}),ge+=`';
`;var ct=Vt.call(c,"variable")&&c.variable;if(!ct)ge=`with (obj) {
`+ge+`
}
`;else if(jt.test(ct))throw new pt(l);ge=(X?ge.replace(Dt,""):ge).replace(Pe,"$1").replace(Ct,"$1;"),ge="function("+(ct||"obj")+`) {
`+(ct?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var Et=gx(function(){return Gt(D,Ke+"return "+ge).apply(t,B)});if(Et.source=ge,Qd(Et))throw Et;return Et}function ED(o){return kt(o).toLowerCase()}function MD(o){return kt(o).toUpperCase()}function TD(o,c,d){if(o=kt(o),o&&(d||c===t))return bv(o);if(!o||!(c=Bi(c)))return o;var S=Mr(o),T=Mr(c),D=wv(S,T),B=Av(S,T)+1;return Hs(S,D,B).join("")}function bD(o,c,d){if(o=kt(o),o&&(d||c===t))return o.slice(0,Rv(o)+1);if(!o||!(c=Bi(c)))return o;var S=Mr(o),T=Av(S,Mr(c))+1;return Hs(S,0,T).join("")}function wD(o,c,d){if(o=kt(o),o&&(d||c===t))return o.replace(Qe,"");if(!o||!(c=Bi(c)))return o;var S=Mr(o),T=wv(S,Mr(c));return Hs(S,T).join("")}function AD(o,c){var d=M,S=U;if(un(c)){var T="separator"in c?c.separator:T;d="length"in c?xt(c.length):d,S="omission"in c?Bi(c.omission):S}o=kt(o);var D=o.length;if(xa(o)){var B=Mr(o);D=B.length}if(d>=D)return o;var H=d-ya(S);if(H<1)return S;var X=B?Hs(B,0,H).join(""):o.slice(0,H);if(T===t)return X+S;if(B&&(H+=X.length-H),ep(T)){if(o.slice(H).search(T)){var fe,he=X;for(T.global||(T=gd(T.source,kt(Zn.exec(T))+"g")),T.lastIndex=0;fe=T.exec(he);)var ge=fe.index;X=X.slice(0,ge===t?H:ge)}}else if(o.indexOf(Bi(T),H)!=H){var Le=X.lastIndexOf(T);Le>-1&&(X=X.slice(0,Le))}return X+S}function CD(o){return o=kt(o),o&&xe.test(o)?o.replace(F,iA):o}var RD=Aa(function(o,c,d){return o+(d?" ":"")+c.toUpperCase()}),ip=_0("toUpperCase");function mx(o,c,d){return o=kt(o),c=d?t:c,c===t?Jw(o)?oA(o):Ww(o):o.match(c)||[]}var gx=Tt(function(o,c){try{return Ni(o,t,c)}catch(d){return Qd(d)?d:new pt(d)}}),PD=cs(function(o,c){return ir(c,function(d){d=Gr(d),as(o,d,Zd(o[d],o))}),o});function LD(o){var c=o==null?0:o.length,d=lt();return o=c?ln(o,function(S){if(typeof S[1]!="function")throw new rr(a);return[d(S[0]),S[1]]}):[],Tt(function(S){for(var T=-1;++T<c;){var D=o[T];if(Ni(D[0],this,S))return Ni(D[1],this,S)}})}function DD(o){return iC(or(o,p))}function rp(o){return function(){return o}}function ID(o,c){return o==null||o!==o?c:o}var OD=x0(),UD=x0(!0);function bi(o){return o}function sp(o){return jv(typeof o=="function"?o:or(o,p))}function ND(o){return Zv(or(o,p))}function FD(o,c){return Jv(o,or(c,p))}var BD=Tt(function(o,c){return function(d){return jl(d,o,c)}}),zD=Tt(function(o,c){return function(d){return jl(o,d,c)}});function op(o,c,d){var S=Nn(c),T=Ru(c,S);d==null&&!(un(c)&&(T.length||!S.length))&&(d=c,c=o,o=this,T=Ru(c,Nn(c)));var D=!(un(d)&&"chain"in d)||!!d.chain,B=fs(o);return ir(T,function(H){var X=c[H];o[H]=X,B&&(o.prototype[H]=function(){var fe=this.__chain__;if(D||fe){var he=o(this.__wrapped__),ge=he.__actions__=Ei(this.__actions__);return ge.push({func:X,args:arguments,thisArg:o}),he.__chain__=fe,he}return X.apply(o,Us([this.value()],arguments))})}),o}function GD(){return Vn._===this&&(Vn._=hA),this}function ap(){}function HD(o){return o=xt(o),Tt(function(c){return Qv(c,o)})}var kD=Bd(ln),WD=Bd(yv),VD=Bd(cd);function _x(o){return $d(o)?ud(Gr(o)):yC(o)}function $D(o){return function(c){return o==null?t:Mo(o,c)}}var XD=S0(),qD=S0(!0);function lp(){return[]}function cp(){return!1}function YD(){return{}}function jD(){return""}function KD(){return!0}function ZD(o,c){if(o=xt(o),o<1||o>ie)return[];var d=ce,S=Jn(o,ce);c=lt(c),o-=ce;for(var T=dd(S,c);++d<o;)c(d);return T}function JD(o){return mt(o)?ln(o,Gr):zi(o)?[o]:Ei(F0(kt(o)))}function QD(o){var c=++uA;return kt(o)+c}var eI=Uu(function(o,c){return o+c},0),tI=zd("ceil"),nI=Uu(function(o,c){return o/c},1),iI=zd("floor");function rI(o){return o&&o.length?Cu(o,bi,Td):t}function sI(o,c){return o&&o.length?Cu(o,lt(c,2),Td):t}function oI(o){return Mv(o,bi)}function aI(o,c){return Mv(o,lt(c,2))}function lI(o){return o&&o.length?Cu(o,bi,Cd):t}function cI(o,c){return o&&o.length?Cu(o,lt(c,2),Cd):t}var uI=Uu(function(o,c){return o*c},1),fI=zd("round"),hI=Uu(function(o,c){return o-c},0);function dI(o){return o&&o.length?hd(o,bi):0}function pI(o,c){return o&&o.length?hd(o,lt(c,2)):0}return L.after=NP,L.ary=Y0,L.assign=ML,L.assignIn=lx,L.assignInWith=Yu,L.assignWith=TL,L.at=bL,L.before=j0,L.bind=Zd,L.bindAll=PD,L.bindKey=K0,L.castArray=YP,L.chain=$0,L.chunk=iR,L.compact=rR,L.concat=sR,L.cond=LD,L.conforms=DD,L.constant=rp,L.countBy=dP,L.create=wL,L.curry=Z0,L.curryRight=J0,L.debounce=Q0,L.defaults=AL,L.defaultsDeep=CL,L.defer=FP,L.delay=BP,L.difference=oR,L.differenceBy=aR,L.differenceWith=lR,L.drop=cR,L.dropRight=uR,L.dropRightWhile=fR,L.dropWhile=hR,L.fill=dR,L.filter=mP,L.flatMap=vP,L.flatMapDeep=xP,L.flatMapDepth=yP,L.flatten=H0,L.flattenDeep=pR,L.flattenDepth=mR,L.flip=zP,L.flow=OD,L.flowRight=UD,L.fromPairs=gR,L.functions=UL,L.functionsIn=NL,L.groupBy=SP,L.initial=vR,L.intersection=xR,L.intersectionBy=yR,L.intersectionWith=SR,L.invert=BL,L.invertBy=zL,L.invokeMap=MP,L.iteratee=sp,L.keyBy=TP,L.keys=Nn,L.keysIn=Ti,L.map=ku,L.mapKeys=HL,L.mapValues=kL,L.matches=ND,L.matchesProperty=FD,L.memoize=Vu,L.merge=WL,L.mergeWith=cx,L.method=BD,L.methodOf=zD,L.mixin=op,L.negate=$u,L.nthArg=HD,L.omit=VL,L.omitBy=$L,L.once=GP,L.orderBy=bP,L.over=kD,L.overArgs=HP,L.overEvery=WD,L.overSome=VD,L.partial=Jd,L.partialRight=ex,L.partition=wP,L.pick=XL,L.pickBy=ux,L.property=_x,L.propertyOf=$D,L.pull=bR,L.pullAll=W0,L.pullAllBy=wR,L.pullAllWith=AR,L.pullAt=CR,L.range=XD,L.rangeRight=qD,L.rearg=kP,L.reject=RP,L.remove=RR,L.rest=WP,L.reverse=jd,L.sampleSize=LP,L.set=YL,L.setWith=jL,L.shuffle=DP,L.slice=PR,L.sortBy=UP,L.sortedUniq=FR,L.sortedUniqBy=BR,L.split=vD,L.spread=VP,L.tail=zR,L.take=GR,L.takeRight=HR,L.takeRightWhile=kR,L.takeWhile=WR,L.tap=rP,L.throttle=$P,L.thru=Hu,L.toArray=sx,L.toPairs=fx,L.toPairsIn=hx,L.toPath=JD,L.toPlainObject=ax,L.transform=KL,L.unary=XP,L.union=VR,L.unionBy=$R,L.unionWith=XR,L.uniq=qR,L.uniqBy=YR,L.uniqWith=jR,L.unset=ZL,L.unzip=Kd,L.unzipWith=V0,L.update=JL,L.updateWith=QL,L.values=Pa,L.valuesIn=eD,L.without=KR,L.words=mx,L.wrap=qP,L.xor=ZR,L.xorBy=JR,L.xorWith=QR,L.zip=eP,L.zipObject=tP,L.zipObjectDeep=nP,L.zipWith=iP,L.entries=fx,L.entriesIn=hx,L.extend=lx,L.extendWith=Yu,op(L,L),L.add=eI,L.attempt=gx,L.camelCase=rD,L.capitalize=dx,L.ceil=tI,L.clamp=tD,L.clone=jP,L.cloneDeep=ZP,L.cloneDeepWith=JP,L.cloneWith=KP,L.conformsTo=QP,L.deburr=px,L.defaultTo=ID,L.divide=nI,L.endsWith=sD,L.eq=br,L.escape=oD,L.escapeRegExp=aD,L.every=pP,L.find=gP,L.findIndex=z0,L.findKey=RL,L.findLast=_P,L.findLastIndex=G0,L.findLastKey=PL,L.floor=iI,L.forEach=X0,L.forEachRight=q0,L.forIn=LL,L.forInRight=DL,L.forOwn=IL,L.forOwnRight=OL,L.get=tp,L.gt=eL,L.gte=tL,L.has=FL,L.hasIn=np,L.head=k0,L.identity=bi,L.includes=EP,L.indexOf=_R,L.inRange=nD,L.invoke=GL,L.isArguments=wo,L.isArray=mt,L.isArrayBuffer=nL,L.isArrayLike=Mi,L.isArrayLikeObject=yn,L.isBoolean=iL,L.isBuffer=ks,L.isDate=rL,L.isElement=sL,L.isEmpty=oL,L.isEqual=aL,L.isEqualWith=lL,L.isError=Qd,L.isFinite=cL,L.isFunction=fs,L.isInteger=tx,L.isLength=Xu,L.isMap=nx,L.isMatch=uL,L.isMatchWith=fL,L.isNaN=hL,L.isNative=dL,L.isNil=mL,L.isNull=pL,L.isNumber=ix,L.isObject=un,L.isObjectLike=mn,L.isPlainObject=tc,L.isRegExp=ep,L.isSafeInteger=gL,L.isSet=rx,L.isString=qu,L.isSymbol=zi,L.isTypedArray=Ra,L.isUndefined=_L,L.isWeakMap=vL,L.isWeakSet=xL,L.join=ER,L.kebabCase=lD,L.last=lr,L.lastIndexOf=MR,L.lowerCase=cD,L.lowerFirst=uD,L.lt=yL,L.lte=SL,L.max=rI,L.maxBy=sI,L.mean=oI,L.meanBy=aI,L.min=lI,L.minBy=cI,L.stubArray=lp,L.stubFalse=cp,L.stubObject=YD,L.stubString=jD,L.stubTrue=KD,L.multiply=uI,L.nth=TR,L.noConflict=GD,L.noop=ap,L.now=Wu,L.pad=fD,L.padEnd=hD,L.padStart=dD,L.parseInt=pD,L.random=iD,L.reduce=AP,L.reduceRight=CP,L.repeat=mD,L.replace=gD,L.result=qL,L.round=fI,L.runInContext=W,L.sample=PP,L.size=IP,L.snakeCase=_D,L.some=OP,L.sortedIndex=LR,L.sortedIndexBy=DR,L.sortedIndexOf=IR,L.sortedLastIndex=OR,L.sortedLastIndexBy=UR,L.sortedLastIndexOf=NR,L.startCase=xD,L.startsWith=yD,L.subtract=hI,L.sum=dI,L.sumBy=pI,L.template=SD,L.times=ZD,L.toFinite=hs,L.toInteger=xt,L.toLength=ox,L.toLower=ED,L.toNumber=cr,L.toSafeInteger=EL,L.toString=kt,L.toUpper=MD,L.trim=TD,L.trimEnd=bD,L.trimStart=wD,L.truncate=AD,L.unescape=CD,L.uniqueId=QD,L.upperCase=RD,L.upperFirst=ip,L.each=X0,L.eachRight=q0,L.first=k0,op(L,function(){var o={};return Br(L,function(c,d){Vt.call(L.prototype,d)||(o[d]=c)}),o}(),{chain:!1}),L.VERSION=n,ir(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){L[o].placeholder=L}),ir(["drop","take"],function(o,c){Lt.prototype[o]=function(d){d=d===t?1:Ln(xt(d),0);var S=this.__filtered__&&!c?new Lt(this):this.clone();return S.__filtered__?S.__takeCount__=Jn(d,S.__takeCount__):S.__views__.push({size:Jn(d,ce),type:o+(S.__dir__<0?"Right":"")}),S},Lt.prototype[o+"Right"]=function(d){return this.reverse()[o](d).reverse()}}),ir(["filter","map","takeWhile"],function(o,c){var d=c+1,S=d==G||d==j;Lt.prototype[o]=function(T){var D=this.clone();return D.__iteratees__.push({iteratee:lt(T,3),type:d}),D.__filtered__=D.__filtered__||S,D}}),ir(["head","last"],function(o,c){var d="take"+(c?"Right":"");Lt.prototype[o]=function(){return this[d](1).value()[0]}}),ir(["initial","tail"],function(o,c){var d="drop"+(c?"":"Right");Lt.prototype[o]=function(){return this.__filtered__?new Lt(this):this[d](1)}}),Lt.prototype.compact=function(){return this.filter(bi)},Lt.prototype.find=function(o){return this.filter(o).head()},Lt.prototype.findLast=function(o){return this.reverse().find(o)},Lt.prototype.invokeMap=Tt(function(o,c){return typeof o=="function"?new Lt(this):this.map(function(d){return jl(d,o,c)})}),Lt.prototype.reject=function(o){return this.filter($u(lt(o)))},Lt.prototype.slice=function(o,c){o=xt(o);var d=this;return d.__filtered__&&(o>0||c<0)?new Lt(d):(o<0?d=d.takeRight(-o):o&&(d=d.drop(o)),c!==t&&(c=xt(c),d=c<0?d.dropRight(-c):d.take(c-o)),d)},Lt.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},Lt.prototype.toArray=function(){return this.take(ce)},Br(Lt.prototype,function(o,c){var d=/^(?:filter|find|map|reject)|While$/.test(c),S=/^(?:head|last)$/.test(c),T=L[S?"take"+(c=="last"?"Right":""):c],D=S||/^find/.test(c);T&&(L.prototype[c]=function(){var B=this.__wrapped__,H=S?[1]:arguments,X=B instanceof Lt,fe=H[0],he=X||mt(B),ge=function(Rt){var Ot=T.apply(L,Us([Rt],H));return S&&Le?Ot[0]:Ot};he&&d&&typeof fe=="function"&&fe.length!=1&&(X=he=!1);var Le=this.__chain__,Ke=!!this.__actions__.length,ct=D&&!Le,Et=X&&!Ke;if(!D&&he){B=Et?B:new Lt(this);var ut=o.apply(B,H);return ut.__actions__.push({func:Hu,args:[ge],thisArg:t}),new sr(ut,Le)}return ct&&Et?o.apply(this,H):(ut=this.thru(ge),ct?S?ut.value()[0]:ut.value():ut)})}),ir(["pop","push","shift","sort","splice","unshift"],function(o){var c=du[o],d=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",S=/^(?:pop|shift)$/.test(o);L.prototype[o]=function(){var T=arguments;if(S&&!this.__chain__){var D=this.value();return c.apply(mt(D)?D:[],T)}return this[d](function(B){return c.apply(mt(B)?B:[],T)})}}),Br(Lt.prototype,function(o,c){var d=L[c];if(d){var S=d.name+"";Vt.call(Ta,S)||(Ta[S]=[]),Ta[S].push({name:c,func:d})}}),Ta[Ou(t,v).name]=[{name:"wrapper",func:t}],Lt.prototype.clone=CA,Lt.prototype.reverse=RA,Lt.prototype.value=PA,L.prototype.at=sP,L.prototype.chain=oP,L.prototype.commit=aP,L.prototype.next=lP,L.prototype.plant=uP,L.prototype.reverse=fP,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=hP,L.prototype.first=L.prototype.head,kl&&(L.prototype[kl]=cP),L},Sa=aA();vo?((vo.exports=Sa)._=Sa,sd._=Sa):Vn._=Sa}).call(an)})(Nh,Nh.exports);Nh.exports;const uo=Cn.page.breakpoint,m6=Cn.time.debounce,g6=Cn.humbergerBtnSelector,_6=Cn.logoeSelector,iw=Cn.buttonParent,Vg=Cn.svgCart,v6=Cn.logo.white,rw=Cn.logo.black,x6=Cn.logo.phone,y6=Cn.logo.tablet,S6=Cn.target.pageContainer,sw=Cn.target.header,E6=Cn.target.announcement,M6=Cn.rootProperty.headerHeight,T6=Cn.rootProperty.announcementHeight,ow=Cn.tabletAndUp,aw=Cn.phone;Jo(uo);(function(){document.addEventListener("DOMContentLoaded",function(){B6(),mw(),W6(),b6()})})();function b6(){w6(),A6(),C6()}function w6(){const i={contain:!0,prevNextButtons:!1,setGallerySize:!1,adaptiveHeight:!1,wrapAround:!0,dragThreshold:15,pauseAutoPlayOnHover:!1,autoPlay:!1,pageDots:!0,fade:!0,on:{change:function(n){console.log("Slide changed to",n),document.querySelectorAll(".Carousel__Cell").forEach((a,l)=>{if(a.classList.contains("is-selected")){let g=function(y){m===null&&(m=y);let x=y-m,_=Math.min(x/p,1),v=P6(f,h,_);a.style.opacity=v,_<1&&requestAnimationFrame(g)};var u=g;a.style.visibility="inherit";let f=0,h=1,p=1e3,m=null;requestAnimationFrame(g)}else a.style.visibility="hidden",a.style.opacity="1"}),document.querySelectorAll(".SectionHeader").forEach((a,l)=>{l===n?(a.style.visibility="visible",a.style.opacity="1",a.style.transform="translateY(0)"):(a.style.visibility="hidden",a.style.opacity="0",a.style.transform="translateY(20px)")})}}},e=document.querySelector(".Slideshow-Carousel"),t=JSON.stringify(i,null,2);e.setAttribute("data-flickity-config",t),new wk(e,i),e.classList.add("Carousel--fixed")}let dM=!1;function A6(i){const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".flickity-page-dots");if(r.length>0&&r[0].children.length>0)return;!dM&&r.length>0&&(e.disconnect(),dM=!0,console.log("disconnected"))}})});e.observe(document,{childList:!0,subtree:!0})}let pM=!1;function C6(i){if(pM)return;pM=!0,console.log("CarouselCellSettings has run");const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".Carousel__Cell");let s=["./img/yamadera.jpeg","./img/sakuramich.jpeg","./img/yamadera.jpeg","./img/yamadera.jpeg","./img/sakuramich.jpeg"],a=["Text 1","Text 2","Text 3","Text 4","Text 5"],l=["Text A","Text B","Text C","Text D","Text E"];r.forEach((u,f)=>{if(u.children.length>0)return;let h=s[f%s.length],p=a[f%a.length],m=l[f%l.length];L6(u,h),D6(u,h),I6(u,p,m)}),r.length>=s.length&&(e.disconnect(),console.log("disconnected"),F6(),R6())}})});e.observe(document,{childList:!0,subtree:!0})}function R6(){const i=document.querySelectorAll(".SectionHeader");i[0].style.visibility="visible",i[0].style.opacity="1",i[0].style.transform="matrix(1, 0, 0, 1, 0, 0)"}function P6(i,e,t){return i*(1-t)+e*t}function lw(i,e){const t=document.createElement("img");t.alt="yamadera",t.classList.add("Slideshow__Image","Image--lazyLoaded"),t.onload=function(){i.appendChild(t)},t.src=e}function L6(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-tablet-and-up"),i.appendChild(t),lw(t,e)}function D6(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-phone"),i.appendChild(t),lw(t,e)}function I6(i,e,t){const n=document.createElement("div");n.classList.add("Slideshow__Content","Slideshow__Content--bottomLeft"),i.appendChild(n),O6(n,e,t)}function O6(i,e,t){const n=document.createElement("header");n.classList.add("SectionHeader"),i.appendChild(n);const r=document.createElement("h3"),s=document.createElement("h2");r.classList.add("SectionHeader__SubHeader","Heading","u-h6"),s.classList.add("SectionHeader__Heading","Section__Heading--emphasize","Heading","u-h1"),r.textContent=e,s.textContent=t,n.appendChild(r),n.appendChild(s),U6(n)}function U6(i){const e=document.createElement("div");e.classList.add("SectionHeader__ButtonWrapper"),i.appendChild(e),N6(e)}function N6(i){const e=document.createElement("div");e.classList.add("ButtonGroup","ButtonGroup--spacingSmall"),i.appendChild(e);const t=document.createElement("a");t.href="./subhtml/demo-wrapAround.html",t.classList.add("ButtonGroup__Item","Button"),t.textContent="READ MORE",e.appendChild(t)}function F6(){document.querySelectorAll(".Carousel__Cell")}function B6(){const i=document.title,e=document.querySelector(".AnnouncementBar__Content");return e&&(e.innerHTML=i),i}function z6(i){G6(i),[{src:rw,alt:"logo"},{src:v6,alt:"logo"}].forEach(t=>k6(t.src,t.alt))}function G6(i){const e=document.querySelector(".Header__FlexItem--logo"),t=document.createElement("h1");t.classList.add("Header__Logo"),e.appendChild(t),H6(t,i)}function H6(i,e){console.log(e);const t=document.querySelector(".Header__LogoLink"),n=t.parentElement;i.appendChild(t),n.appendChild(i);const r=document.createElement("img");r.className="Header__LogoImage Header__LogoImage--primary",r.alt="",r.style.height=e;const s=document.createElement("img");s.className="Header__LogoImage Header__LogoImage--transparent",s.alt="",s.style.height=e,t.appendChild(r),t.appendChild(s)}function k6(i,e){const t=document.querySelector(`.Header__LogoImage--${i===rw?"primary":"transparent"}`);t.src=i,t.alt=e}function W6(){const i=Jo(uo)?ow:aw;hw(i);const e=Jo(uo)?nw:tw;cw(e);const t=Jo(uo)?y6:x6;z6(t)}async function V6(i){const n=new DOMParser().parseFromString(i,"image/svg+xml").querySelector("svg");if(!n)throw new Error(`No SVG element found in the provided data: ${i}`);return n.getAttribute("height")||n.setAttribute("height","20"),n.getAttribute("width")||n.setAttribute("width","20"),n.querySelectorAll("path").forEach(s=>{s.setAttribute("fill","currentColor"),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width","0.05")}),n}async function cw(i){try{const e=document.querySelector(`.${Vg}`);if(!e)throw new Error(`No element found with class: ${Vg}`);fw(e);const t=await V6(i);if(!t)throw new Error(`No SVG element created for path: ${i}`);e.appendChild(t),window.innerWidth>=uo?t.classList.add("hidden-phone"):t.classList.add("hidden-tablet-and-up");const r=document.querySelector(`.${iw}`).offsetHeight;dw(t,r),pw()}catch(e){console.error("Error in createCart:",e)}}let mM;window.addEventListener("resize",function(){console.log("Window resized"),uw()});window.addEventListener("orientationchange",function(){console.log("Orientation changed"),uw()});function uw(){console.log("Resize event"),clearTimeout(mM),mM=setTimeout(async()=>{const i=Jo(uo)?ow:aw;hw(i);const e=Jo(uo)?nw:tw;await cw(e);const t=Jo(uo)?"28px":"18px";document.querySelectorAll(".Header__LogoImage").forEach(r=>{r.style.height=t}),$6(),pw()},m6)}function $6(){const i=document.querySelector(".pin-spacer"),e=document.getElementById(sw);if(i){const t=window.innerWidth;console.log("width",t),i.style.width=t+"px",i.style.maxWidth=t+"px",e.style.width=t+"px",e.style.maxWidth=t+"px"}}function fw(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function X6(i,e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",`0 0 ${e} ${t}`),n.setAttribute("width",e),n.setAttribute("height",t),n}function q6(i,e,t,n){const r=(e-n*3)/2;for(let s=0;s<3;s++){const a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("width",t),a.setAttribute("height",n),a.setAttribute("y",s*(parseInt(n)+r)),a.setAttribute("fill","currentColor"),i.appendChild(a)}}function gM({viewBox:i,width:e,height:t,rectWidth:n,rectHeight:r}){const s=X6(i,e,t);return q6(s,t,n,r),s}function hw(i){const e=document.querySelector(g6);fw(e);const t=gM(i),n=gM(i);e.appendChild(t),e.appendChild(n),n.style.display="none"}function Y6(i,e,t){if(!i)return;const n=i.parentNode;n.style.height=`${t}px`,n.style.width=`${e}px`}function _M(i,e,t){i.style.width=`${e}px`,i.style.height=`${t}px`}function dw(i,e){if(!i){console.log("No element provided to adjustElementToHeight");return}if(i instanceof SVGSVGElement){const t=i.getBBox(),r=t.width/t.height*e;_M(i,r,e)}else{const n=i.offsetWidth/i.offsetHeight*e;_M(i,n,e)}}function pw(){const e=document.querySelector(`.${iw}`).offsetHeight;document.querySelectorAll(`.${_6}`);const t=document.querySelector(`.${Vg}`);dw(t,e),Y6(t,t.offsetWidth,e)}function mw(){const i=window.innerHeight,e=document.getElementById(S6);e&&(e.style.height=`${i}px`),gw("--window-height",i)}window.addEventListener("resize",mw);window.addEventListener("load",function(){vM(`#${sw}`,M6),vM(`#${E6}`,T6)});function vM(i,e){const t=document.querySelector(i);if(t){const n=t.offsetHeight;gw(e,n)}}function gw(i,e){document.documentElement.style.setProperty(i,`${e}px`)}window.addEventListener("load",j6);let $g=0;function j6(){const i=document.body.getElementsByTagName("*"),e=Array.from(i).filter(t=>t.id.includes("section"));$g=0,e.forEach(t=>{$g+=t.offsetHeight})}const K6={get totalHeight(){return $g}},Z6=Cn.target.pageContainer;class Xg extends l1{transformDelta(e,t){return e=this.options.disabled?{x:0,y:0}:e,e}}up(Xg,"pluginName","disablePlugin"),up(Xg,"defaultOptions",{disabled:!1});let Ks;function J6(){const i=document.getElementById(Z6);u_.registerPlugin(yt),MS.use(Xg),Ks=MS.init(i,{delegateTo:document}),yt.scrollerProxy(i,{scrollTop(n){return arguments.length?Ks.scrollTop=n:Ks.scrollTop}}),Ks.addListener(yt.update);function e(){Ks.updatePluginOptions("disablePlugin",{disabled:!0}),console.log("plugin is disabled")}function t(){Ks.updatePluginOptions("disablePlugin",{disabled:!1})}yt.defaults({scroller:i}),Ks.addListener(n=>{n.offset.y+window.innerHeight>=Ks.getSize().content.height&&console.log("you're at the bottom of the page")}),window.addEventListener("load",function(){const n=K6.totalHeight,r=document.querySelector(`#${Cn.target.header}`);r.style.position="relative",r.style.zIndex="1000",yt.create({trigger:r,start:"top top",end:`${n}px top`,pin:!0,pinSpacing:!1,onEnter:()=>{},onLeaveBack:()=>{}});function s(){const a=document.getElementById(Cn.target.header);a.classList.add("Header--transparent"),yt.create({trigger:a,start:"top top",end:99999,onEnter:()=>{a.classList.remove("Header--transparent")},onLeaveBack:()=>{a.classList.add("Header--transparent")}})}return s(),{disablePlugin:e,enablePlugin:t}})}async function Q6(){const i=document.querySelector("#canvas");gn.init(i),J6(),hh.init(),await hh.loadAllAssets(),K1(i,gn),V8(),Wt.render(),hh.letsBegin()}function eX(){document.querySelector("[data-webgl]")}Q6();console.log("Production output");eX();
