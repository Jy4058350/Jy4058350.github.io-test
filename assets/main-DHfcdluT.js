var Oy=Object.defineProperty;var Uy=(i,e,t)=>e in i?Oy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var Hc=(i,e,t)=>(Uy(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function ki(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function B_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},wh,ln,Et,ti=1e8,_t=1/ti,Af=Math.PI*2,Ny=Af/4,Fy=0,z_=Math.sqrt,By=Math.cos,zy=Math.sin,Yt=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},Ch=function(e){return typeof e>"u"},Di=function(e){return typeof e=="object"},An=function(e){return e!==!1},Rh=function(){return typeof window<"u"},Io=function(e){return Rt(e)||Yt(e)},k_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,wf=/(?:-?\.?\d|\.)+/gi,G_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,zs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Vc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,H_=/[+-]=-?[.\d]+/,V_=/[^,'"\[\]\s]+/gi,ky=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,xi,Cf,Ph,Wn={},Kl={},W_,$_=function(e){return(Kl=rs(e,Wn))&&Ln},Lh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ao=function(e,t){return!t&&console.warn(e)},X_=function(e,t){return e&&(Wn[e]=t)&&Kl&&(Kl[e]=t)||Wn},oo=function(){return 0},Gy={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},Hy={suppressEvents:!0},Dh={},mr=[],Rf={},q_,Bn={},Wc={},kd=30,Il=[],Ih="",Oh=function(e){var t=e[0],n,r;if(Di(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Il.length;r--&&!Il[r].targetTest(t););n=Il[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new _v(e[r],n)))||e.splice(r,1);return e},qr=function(e){return e._gsap||Oh(ni(e))[0]._gsap},j_=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():Ch(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},Xs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Vy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},Zl=function(){var e=mr.length,t=mr.slice(0),n,r;for(Rf={},mr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Y_=function(e,t,n,r){mr.length&&!ln&&Zl(),e.render(t,n,r||ln&&t<0&&(e._initted||e._startAt)),mr.length&&!ln&&Zl()},K_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(V_).length<2?t:Yt(e)?e.trim():e},Z_=function(e){return e},ri=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Wy=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},rs=function(e,t){for(var n in t)e[n]=t[n];return e},Gd=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Di(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Jl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},ja=function(e){var t=e.parent||Tt,n=e.keyframes?Wy(cn(e.keyframes)):ri;if(An(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},$y=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},J_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},xc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},jr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Xy=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pf=function(e,t,n,r){return e._startAt&&(ln?e._startAt.revert(Dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},qy=function i(e){return!e||e._ts&&i(e.parent)},Hd=function(e){return e._repeat?ia(e._tTime,e=e.duration()+e._rDelay)*e:0},ia=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Ql=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},yc=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},Sc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),yc(e),n._dirty||jr(n,e)),e},Q_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Ql(e.rawTime(),t),(!t._dur||yo(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),jr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},Mi=function(e,t,n,r){return t.parent&&Sr(t),t._start=qt((ji(n)?n:n||e!==Tt?Yn(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),J_(e,t,"_first","_last",e._sort?"_start":0),Lf(t)||(e._recent=t),r||Q_(e,t),e._ts<0&&Sc(e,e._tTime),e},ev=function(e,t){return(Wn.ScrollTrigger||Lh("scrollTrigger",t))&&Wn.ScrollTrigger.create(t,e)},tv=function(e,t,n,r,s){if(Nh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&q_!==zn.frame)return mr.push(e),e._lazy=[s,r],1},jy=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Lf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Yy=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&jy(e)&&!(!e._initted&&Lf(e))||(e._ts<0||e._dp._ts<0)&&!Lf(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=yo(0,e._tDur,t),u=ia(l,o),e._yoyo&&u&1&&(a=1-a),u!==ia(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||ln||r||e._zTime===_t||!t&&e._zTime){if(!e._initted&&tv(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Pf(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Sr(e,1),!n&&!ln&&(Gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Ky=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ra=function(e,t,n,r){var s=e._repeat,a=qt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:qt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&Sc(e,e._tTime=e._tDur*o),e.parent&&yc(e),n||jr(e.parent,e),e},Vd=function(e){return e instanceof yn?jr(e):ra(e,e._dur)},Zy={_start:0,endTime:oo,totalDuration:oo},Yn=function i(e,t,n){var r=e.labels,s=e._recent||Zy,a=e.duration()>=ti?s.endTime(!1):e._dur,o,l,c;return Yt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ya=function(e,t,n){var r=ji(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=An(l.vars.inherit)&&l.parent;a.immediateRender=An(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ut(t[0],a,t[s+1])},Tr=function(e,t){return e||e===0?t(e):t},yo=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!Yt(e)||!(t=ky.exec(e))?"":t[1]},Jy=function(e,t,n){return Tr(n,function(r){return yo(e,t,r)})},Df=[].slice,nv=function(e,t){return e&&Di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Di(e[0]))&&!e.nodeType&&e!==xi},Qy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Yt(r)&&!t||nv(r,1)?(s=n).push.apply(s,ni(r)):n.push(r)})||n},ni=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):Yt(e)&&!n&&(Cf||!sa())?Df.call((t||Ph).querySelectorAll(e),0):cn(e)?Qy(e,n):nv(e)?Df.call(e,0):e?[e]:[]},If=function(e){return e=ni(e)[0]||ao("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?ao("Invalid scope")||Ph.createElement("div"):e)}},iv=function(e){return e.sort(function(){return .5-Math.random()})},rv=function(e){if(Rt(e))return e;var t=Di(e)?e:{each:e},n=Yr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return Yt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,_){var g=(_||t).length,p=a[g],m,S,y,v,M,b,E,L,I;if(!p){if(I=t.grid==="auto"?0:(t.grid||[1,ti])[1],!I){for(E=-ti;E<(E=_[I++].getBoundingClientRect().left)&&I<g;);I<g&&I--}for(p=a[g]=[],m=l?Math.min(I,g)*u-.5:r%I,S=I===ti?0:l?g*f/I-.5:r/I|0,E=0,L=ti,b=0;b<g;b++)y=b%I-m,v=S-(b/I|0),p[b]=M=c?Math.abs(c==="y"?v:y):z_(y*y+v*v),M>E&&(E=M),M<L&&(L=M);r==="random"&&iv(p),p.max=E-L,p.min=L,p.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(I>g?g-1:c?c==="y"?g/I:I:Math.max(I,g/I))||0)*(r==="edges"?-1:1),p.b=g<0?s-g:s,p.u=on(t.amount||t.each)||0,n=n&&g<0?pv(n):n}return g=(p[h]-p.min)/p.max||0,qt(p.b+(n?n(g):g)*p.v)+p.u}},Of=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=qt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(ji(n)?0:on(n))}},sv=function(e,t){var n=cn(e),r,s;return!n&&Di(e)&&(r=n=e.radius||ti,e.values?(e=ni(e.values),(s=!ji(e[0]))&&(r*=r)):e=Of(e.increment)),Tr(t,n?Rt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=ti,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||ji(a)?u:u+on(a)}:Of(e))},av=function(e,t,n,r){return Tr(cn(e)?!t:n===!0?!!(n=0):!r,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},eS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},tS=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},nS=function(e,t,n){return lv(e,t,0,1,n)},ov=function(e,t,n){return Tr(n,function(r){return e[~~t(r)]})},iS=function i(e,t,n){var r=t-e;return cn(e)?ov(e,i(0,e.length),t):Tr(n,function(s){return(r+(s-e)%r)%r+e})},rS=function i(e,t,n){var r=t-e,s=r*2;return cn(e)?ov(e,i(0,e.length-1),t):Tr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},lo=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?V_:wf),n+=e.substr(t,r-t)+av(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},lv=function(e,t,n,r,s){var a=t-e,o=r-n;return Tr(s,function(l){return n+((l-e)/a*o||0)})},sS=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Yt(e),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=t}else r||(e=rs(cn(e)?[]:{},e));if(!u){for(l in t)Uh.call(o,e,l,"get",t[l]);s=function(_){return zh(_,o)||(a?e.p:e)}}}return Tr(n,s)},Wd=function(e,t,n){var r=e.labels,s=ti,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Gn=function(e,t,n){var r=e.vars,s=r[t],a=Et,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&mr.length&&Zl(),o&&(Et=o),u=l?s.apply(c,l):s.call(c),Et=a,u},Ga=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&Gn(e,"onInterrupt"),e},ks,cv=[],uv=function(e){if(e)if(e=!e.name&&e.default||e,Rh()||e.headless){var t=e.name,n=Rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oo,render:zh,add:Uh,kill:SS,modifier:yS,rawVars:0},a={targetTest:0,get:0,getSetter:Bh,aliases:{},register:0};if(sa(),e!==r){if(Bn[t])return;ri(r,ri(Jl(e,s),a)),rs(r.prototype,rs(s,Jl(e,a))),Bn[r.prop=t]=r,e.targetTest&&(Il.push(r),Dh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}X_(t,r),e.register&&e.register(Ln,r,Cn)}else cv.push(e)},pt=255,Ha={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},$c=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},fv=function(e,t,n){var r=e?ji(e)?[e>>16,e>>8&pt,e&pt]:0:Ha.black,s,a,o,l,c,u,f,h,d,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ha[e])r=Ha[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&pt,r&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(wf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=$c(l+1/3,s,a),r[1]=$c(l,s,a),r[2]=$c(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(G_),n&&r.length<4&&(r[3]=1),r}else r=e.match(wf)||Ha.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/pt,a=r[1]/pt,o=r[2]/pt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},hv=function(e){var t=[],n=[],r=-1;return e.split(gr).forEach(function(s){var a=s.match(zs)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},$d=function(e,t,n){var r="",s=(e+r).match(gr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=fv(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=hv(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(gr,"1").split(zs),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(gr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},gr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ha)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),aS=/hsl[a]?\(/,dv=function(e){var t=e.join(" "),n;if(gr.lastIndex=0,gr.test(t))return n=aS.test(t),e[1]=$d(e[1],n),e[0]=$d(e[0],n,hv(e[1])),!0},co,zn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,_=function g(p){var m=i()-r,S=p===!0,y,v,M,b;if((m>e||m<0)&&(n+=m-t),r+=m,M=r-n,y=M-a,(y>0||S)&&(b=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,a+=y+(y>=s?4:s-y),v=1),S||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](M,h,b,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){W_&&(!Cf&&Rh()&&(xi=Cf=window,Ph=xi.document||{},Wn.gsap=Ln,(xi.gsapVersions||(xi.gsapVersions=[])).push(Ln.version),$_(Kl||xi.GreenSockGlobals||!xi.gsap&&xi||{}),cv.forEach(uv)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},co=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),co=0,c=oo},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,S){var y=m?function(v,M,b,E){p(v,M,b,E),f.remove(y)}:p;return f.remove(p),o[S?"unshift":"push"](y),sa(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),sa=function(){return!co&&zn.wake()},it={},oS=/^[\d.\-M][\d.\-,\s]/,lS=/["']/g,cS=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(lS,"").trim():+c,r=l.substr(o+1).trim();return t},uS=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},fS=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[cS(t[1])]:uS(e).split(",").map(K_)):it._CE&&oS.test(e)?it._CE("",e):n},pv=function(e){return function(t){return 1-e(1-t)}},mv=function i(e,t){for(var n=e._first,r;n;)n instanceof yn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(Rt(e)?e:it[e]||fS(e))||t},hs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return wn(e,function(o){it[o]=Wn[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},gv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Af*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*zy((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:gv(o);return s=Af/s,l.config=function(c,u){return i(e,c,u)},l},qc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:gv(n);return r.config=function(s){return i(e,s)},r};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;hs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;hs("Elastic",Xc("in"),Xc("out"),Xc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};hs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);hs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});hs("Circ",function(i){return-(z_(1-i*i)-1)});hs("Sine",function(i){return i===1?1:-By(i*Ny)+1});hs("Back",qc("in"),qc("out"),qc());it.SteppedEase=it.steps=Wn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-_t;return function(o){return((r*yo(0,a,o)|0)+s)*n}}};na.ease=it["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return Ih+=i+","+i+"Params,"});var _v=function(e,t){this.id=Fy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:j_,this.set=t?t.getSetter:Bh},uo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ra(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),co||zn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ra(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(sa(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Sc(this,n),!s._dp||s.parent||Q_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Y_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?ia(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Ql(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(yo(-Math.abs(this._delay),this._tDur,s),r!==!1),yc(this),Xy(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(An(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ql(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Hy);var r=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Vd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Vd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Yn(this,n),An(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,An(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Rt(n)?n:Z_,o=function(){var c=r.then;r.then=null,Rt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Ga(this)},i}();ri(uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var yn=function(i){B_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=An(n.sortChildren),Tt&&Mi(n.parent||Tt,ki(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ev(ki(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Ya(0,arguments,this),this},t.from=function(r,s,a){return Ya(1,arguments,this),this},t.fromTo=function(r,s,a,o){return Ya(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,ja(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(r,s,Yn(this,a),1),this},t.call=function(r,s,a){return Mi(this,Ut.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ut(r,a,Yn(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,ja(a).immediateRender=An(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,ja(o).immediateRender=An(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:qt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,_,g,p,m,S,y,v,M,b,E;if(this!==Tt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,v=this._start,y=this._ts,m=!y,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(b=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=qt(u%p),u===l?(g=this._repeat,h=c):(g=~~(u/p),g&&g===u/p&&(h=c,g--),h>c&&(h=c)),M=ia(this._tTime,p),!o&&this._tTime&&M!==g&&this._tTime-M*p-this._dur<=0&&(M=g),b&&g&1&&(h=c-h,E=1),g!==M&&!this._lock){var L=b&&M&1,I=L===(b&&g&1);if(g<M&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(E?0:qt(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,I&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;mv(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=Ky(this,qt(o),qt(h)),S&&(u-=h-(h=S._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!g&&(Gn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(_=d._next,(d._act||h>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=-_t);break}}d=_}else{d=this._last;for(var x=r<0?r:h;d;){if(_=d._prev,(d._act||x<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,a||ln&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){S=0,_&&(u+=this._zTime=x?-_t:_t);break}}d=_}}if(S&&!s&&(this.pause(),S.render(h>=o?0:-_t)._zTime=h>=o?1:-1,this._ts))return this._start=v,yc(this),this.render(r,s,a);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Gn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(ji(s)||(s=Yn(this,s,r)),!(r instanceof uo)){if(cn(r))return r.forEach(function(o){return a.add(o,s)}),this;if(Yt(r))return this.addLabel(r,s);if(Rt(r))r=Ut.delayedCall(0,r);else return this}return this!==r?Mi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ti);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ut?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Yt(r)?this.removeLabel(r):Rt(r)?this.killTweensOf(r):(xc(this,r),r===this._recent&&(this._recent=this._last),jr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(zn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ut.delayedCall(0,s||oo,a);return o.data="isPause",this._hasPause=1,Mi(this,o,Yn(this,r))},t.removePause=function(r){var s=this._first;for(r=Yn(this,r);s;)s._start===r&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)cr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=ni(r),l=this._first,c=ji(s),u;l;)l instanceof Ut?Vy(l._targets,o)&&(c?(!cr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=Yn(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,_=Ut.to(a,ri({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&ra(_,p,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ri({startAt:{time:Yn(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Wd(this,Yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Wd(this,Yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return jr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),jr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=ti,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Mi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;ra(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(Tt._ts&&(Y_(Tt,Ql(r,Tt)),q_=zn.frame),zn.frame>=kd){kd+=Hn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&Hn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},e}(uo);ri(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var hS=function(e,t,n,r,s,a,o){var l=new Cn(this._pt,e,t,0,1,Mv,null,s),c=0,u=0,f,h,d,_,g,p,m,S;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=lo(r)),a&&(S=[n,r],a(S,e,t),n=S[0],r=S[1]),h=n.match(Vc)||[];f=Vc.exec(r);)_=f[0],g=r.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Xs(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},c=Vc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(H_.test(r)||m)&&(l.e=0),this._pt=l,l},Uh=function(e,t,n,r,s,a,o,l,c,u){Rt(r)&&(r=r(s||0,e,a));var f=e[t],h=n!=="get"?n:Rt(f)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Rt(f)?c?_S:Sv:Fh,_;if(Yt(r)&&(~r.indexOf("random(")&&(r=lo(r)),r.charAt(1)==="="&&(_=Xs(h,r)+(on(h)||0),(_||_===0)&&(r=_))),!u||h!==r||Uf)return!isNaN(h*r)&&r!==""?(_=new Cn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?xS:Ev,0,d),c&&(_.fp=c),o&&_.modifier(o,this,e),this._pt=_):(!f&&!(t in e)&&Lh(t,r),hS.call(this,e,t,h,r,d,l||Hn.stringFilter,c))},dS=function(e,t,n,r,s){if(Rt(e)&&(e=Ka(e,s,t,n,r)),!Di(e)||e.style&&e.nodeType||cn(e)||k_(e))return Yt(e)?Ka(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Ka(e[o],s,t,n,r);return a},vv=function(e,t,n,r,s,a){var o,l,c,u;if(Bn[e]&&(o=new Bn[e]).init(s,o.rawVars?t[e]:dS(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Cn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==ks))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},cr,Uf,Nh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,_=e._dur,g=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!wh,v=e.timeline,M,b,E,L,I,x,C,O,Y,D,k,F,$;if(v&&(!h||!s)&&(s="none"),e._ease=Yr(s,na.ease),e._yEase=f?pv(Yr(f===!0?s:f,na.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!v&&!!r.runBackwards,!v||h&&!r.stagger){if(O=p[0]?qr(p[0]).harness:0,F=O&&r[O.prop],M=Jl(r,Dh),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&_?Dl:Gy),g._lazy=0),a){if(Sr(e._startAt=Ut.set(p,ri({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&An(l),startAt:null,delay:0,onUpdate:c&&function(){return Gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!o&&!d)&&e._startAt.revert(Dl),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!g){if(t&&(o=!1),E=ri({overwrite:!1,data:"isFromStart",lazy:o&&!g&&An(l),immediateRender:o,stagger:0,parent:m},M),F&&(E[O.prop]=F),Sr(e._startAt=Ut.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Dl):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&An(l)||l&&!_,b=0;b<p.length;b++){if(I=p[b],C=I._gsap||Oh(p)[b]._gsap,e._ptLookup[b]=D={},Rf[C.id]&&mr.length&&Zl(),k=S===p?b:S.indexOf(I),O&&(Y=new O).init(I,F||M,e,k,S)!==!1&&(e._pt=L=new Cn(e._pt,I,Y.name,0,1,Y.render,Y,0,Y.priority),Y._props.forEach(function(X){D[X]=L}),Y.priority&&(x=1)),!O||F)for(E in M)Bn[E]&&(Y=vv(E,M,e,k,I,S))?Y.priority&&(x=1):D[E]=L=Uh.call(e,I,E,"get",M[E],k,S,0,r.stringFilter);e._op&&e._op[b]&&e.kill(I,e._op[b]),y&&e._pt&&(cr=e,Tt.killTweensOf(I,D,e.globalTime(t)),$=!e.parent,cr=0),e._pt&&l&&(Rf[C.id]=1)}x&&bv(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&v.render(ti,!0,!0)},pS=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Uf=1,e.vars[t]="+=0",Nh(e,o),Uf=0,l?ao(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Lt(n)+on(f.e)),f.b&&(f.b=u.s+on(f.b))},mS=function(e,t){var n=e[0]?qr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=rs({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},gS=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(cn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ka=function(e,t,n,r,s){return Rt(e)?e.call(t,n,r,s):Yt(e)&&~e.indexOf("random(")?lo(e):e},xv=Ih+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",yv={};wn(xv+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return yv[i]=1});var Ut=function(i){B_(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:ja(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,S=r.parent||Tt,y=(cn(n)||k_(n)?ji(n[0]):"length"in r)?[n]:ni(n),v,M,b,E,L,I,x,C;if(o._targets=y.length?Oh(y):ao("GSAP target "+n+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||h||Io(c)||Io(u)){if(r=o.vars,v=o.timeline=new yn({data:"nested",defaults:g||{},targets:S&&S.data==="nested"?S.vars.targets:y}),v.kill(),v.parent=v._dp=ki(o),v._start=0,h||Io(c)||Io(u)){if(E=y.length,x=h&&rv(h),Di(h))for(L in h)~xv.indexOf(L)&&(C||(C={}),C[L]=h[L]);for(M=0;M<E;M++)b=Jl(r,yv),b.stagger=0,m&&(b.yoyoEase=m),C&&rs(b,C),I=y[M],b.duration=+Ka(c,ki(o),M,I,y),b.delay=(+Ka(u,ki(o),M,I,y)||0)-o._delay,!h&&E===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),v.to(I,b,x?x(M,I,y):0),v._ease=it.none;v.duration()?c=u=0:o.timeline=0}else if(_){ja(ri(v.vars.defaults,{ease:"none"})),v._ease=Yr(_.ease||r.ease||"none");var O=0,Y,D,k;if(cn(_))_.forEach(function(F){return v.to(y,F,">")}),v.duration();else{b={};for(L in _)L==="ease"||L==="easeEach"||gS(L,_[L],b,_.easeEach);for(L in b)for(Y=b[L].sort(function(F,$){return F.t-$.t}),O=0,M=0;M<Y.length;M++)D=Y[M],k={ease:D.e,duration:(D.t-(M?Y[M-1].t:0))/100*c},k[L]=D.v,v.to(y,k,O),O+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||o.duration(c=v.duration())}else o.timeline=0;return d===!0&&!wh&&(cr=ki(o),Tt.killTweensOf(y),cr=0),Mi(S,ki(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!_&&o._start===qt(S._time)&&An(f)&&qy(ki(o))&&S.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-u)||0)),p&&ev(ki(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-_t&&!u?l:r<_t?0:r,h,d,_,g,p,m,S,y,v;if(!c)Yy(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+r,s,a);if(h=qt(f%g),f===l?(_=this._repeat,h=c):(_=~~(f/g),_&&_===qt(f/g)&&(h=c,_--),h>c&&(h=c)),m=this._yoyo&&_&1,m&&(v=this._yEase,h=c-h),p=ia(this._tTime,g),h===o&&!a&&this._initted&&_===p)return this._tTime=f,this;_!==p&&(y&&this._yEase&&mv(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==g&&this._initted&&(this._lock=a=1,this.render(qt(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(tv(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=S=(v||this._ease)(h/c),this._from&&(this.ratio=S=1-S),h&&!o&&!s&&!_&&(Gn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(r<0?r:y._dur*y._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&Pf(this,r,s,a),Gn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Pf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Sr(this,1),!s&&!(u&&!o)&&(f||o||m)&&(Gn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){co||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Nh(this,c),u=this._ease(c/this._dur),pS(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(Sc(this,0),this.parent||J_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ga(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,cr&&cr.vars.overwrite!==!0)._first||Ga(this),this.parent&&a!==this.timeline.totalDuration()&&ra(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?ni(r):o,c=this._ptLookup,u=this._pt,f,h,d,_,g,p,m;if((!s||s==="all")&&$y(o,l))return s==="all"&&(this._pt=0),Ga(this);for(f=this._op=this._op||[],s!=="all"&&(Yt(s)&&(g={},wn(s,function(S){return g[S]=1}),s=g),s=mS(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,_=h,d={}):(d=f[m]=f[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&xc(this,p,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&Ga(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ya(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return Ya(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return Tt.killTweensOf(r,s,a)},e}(uo);ri(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new yn,t=Df.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var Fh=function(e,t,n){return e[t]=n},Sv=function(e,t,n){return e[t](n)},_S=function(e,t,n,r){return e[t](r.fp,n)},vS=function(e,t,n){return e.setAttribute(t,n)},Bh=function(e,t){return Rt(e[t])?Sv:Ch(e[t])&&e.setAttribute?vS:Fh},Ev=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xS=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mv=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},zh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},yS=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},SS=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?xc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},ES=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},bv=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Cn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Ev,this.d=l||this,this.set=c||Fh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=ES,this.m=n,this.mt=s,this.tween=r},i}();wn(Ih+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return Dh[i]=1});Wn.TweenMax=Wn.TweenLite=Ut;Wn.TimelineLite=Wn.TimelineMax=yn;Tt=new yn({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=dv;var Kr=[],Ol={},MS=[],Xd=0,bS=0,jc=function(e){return(Ol[e]||MS).map(function(t){return t()})},Nf=function(){var e=Date.now(),t=[];e-Xd>2&&(jc("matchMediaInit"),Kr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=xi.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),jc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Xd=e,jc("matchMedia"))},Tv=function(){function i(t,n){this.selector=n&&If(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Rt(n)&&(s=r,r=n,n=Rt);var a=this,o=function(){var c=Et,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=If(s)),Et=a,f=r.apply(a,arguments),Rt(f)&&a._r.push(f),Et=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Rt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=Et;Et=null,n(this),Et=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Kr.length;a--;)Kr[a].id===this.id&&Kr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),TS=function(){function i(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Di(n)||(n={matches:n});var a=new Tv(0,s||this.scope),o=a.conditions={},l,c,u;Et&&!a.selector&&(a.selector=Et.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=xi.matchMedia(n[c]),l&&(Kr.indexOf(a)<0&&Kr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Nf):l.addEventListener("change",Nf)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),ec={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return uv(r)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,r){Yt(e)&&(e=ni(e)[0]);var s=qr(e||{}).get,a=n?Z_:K_;return n==="native"&&(n=""),e&&(t?a((Bn[t]&&Bn[t].get||s)(e,t,n,r)):function(o,l,c){return a((Bn[o]&&Bn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var r=e.map(function(u){return Ln.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Bn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;ks._pt=0,f.init(e,n?u+n:u,ks,0,[e]),f.render(1,f),ks._pt&&zh(1,ks)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Ln.to(e,rs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,na.ease)),Gd(na,e||{})},config:function(e){return Gd(Hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Bn[o]&&!Wn[o]&&ao(t+" effect requires "+o+" plugin.")}),Wc[t]=function(o,l,c){return n(ni(o),ri(l||{},s),c)},a&&(yn.prototype[t]=function(o,l,c){return this.add(Wc[t](o,Di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):it},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),r,s;for(n.smoothChildTiming=An(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,r=Tt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&Mi(n,r,r._start-r._delay),r=s;return Mi(Tt,n,0),n},context:function(e,t){return e?new Tv(e,t):Et},matchMedia:function(e){return new TS(e)},matchMediaRefresh:function(){return Kr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||Nf()},addEventListener:function(e,t){var n=Ol[e]||(Ol[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ol[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:iS,wrapYoyo:rS,distribute:rv,random:av,snap:sv,normalize:nS,getUnit:on,clamp:Jy,splitColor:fv,toArray:ni,selector:If,mapRange:lv,pipe:eS,unitize:tS,interpolate:sS,shuffle:iv},install:$_,effects:Wc,ticker:zn,updateRoot:yn.updateRoot,plugins:Bn,globalTimeline:Tt,core:{PropTween:Cn,globals:X_,Tween:Ut,Timeline:yn,Animation:uo,getCache:qr,_removeLinkedListItem:xc,reverting:function(){return ln},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return wh=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return ec[i]=Ut[i]});zn.add(yn.updateRoot);ks=ec.to({},{duration:0});var AS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},wS=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=AS(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},Yc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if(Yt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}wS(o,s)}}}},Ln=ec.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Yc("roundProps",Of),Yc("modifiers"),Yc("snap",sv))||ec;Ut.version=yn.version=Ln.version="3.12.5";W_=1;Rh()&&sa();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qd,ur,qs,kh,Vr,jd,Gh,CS=function(){return typeof window<"u"},Yi={},Ur=180/Math.PI,js=Math.PI/180,ms=Math.atan2,Yd=1e8,Hh=/([A-Z])/g,RS=/(left|right|width|margin|padding|x)/i,PS=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ff=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},DS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},IS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Av=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OS=function(e,t,n){return e.style[t]=n},US=function(e,t,n){return e.style.setProperty(t,n)},NS=function(e,t,n){return e._gsap[t]=n},FS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},BS=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},zS=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},At="transform",Rn=At+"Origin",kS=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(r,o)}):this.tfm[e]=a.x?a[e]:Gi(r,e),e===Rn&&(this.tfm.zOrigin=a.zOrigin);else return Ti.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(At)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},Cv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},GS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gh(),(!s||!s.isStart)&&!n[At]&&(Cv(n),r.zOrigin&&n[Rn]&&(n[Rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Rv=function(e,t){var n={target:e,props:[],revert:GS,save:kS};return e._gsap||Ln.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},Pv,Bf=function(e,t){var n=ur.createElementNS?ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ur.createElement(e);return n&&n.style?n:ur.createElement(e)},Ci=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Hh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,aa(t)||t,1)||""},Kd="O,Moz,ms,Ms,Webkit".split(","),aa=function(e,t,n){var r=t||Vr,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Kd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Kd[a]:"")+e},zf=function(){CS()&&window.document&&(qd=window,ur=qd.document,qs=ur.documentElement,Vr=Bf("div")||{style:{}},Bf("div"),At=aa(At),Rn=At+"Origin",Vr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pv=!!aa("perspective"),Gh=Ln.core.reverting,kh=1)},Kc=function i(e){var t=Bf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(qs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),qs.removeChild(t),this.style.cssText=s,a},Zd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Lv=function(e){var t;try{t=e.getBBox()}catch{t=Kc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Kc||(t=Kc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Zd(e,["x","cx","x1"])||0,y:+Zd(e,["y","cy","y1"])||0,width:0,height:0}:t},Dv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Lv(e))},ss=function(e,t){if(t){var n=e.style,r;t in Yi&&t!==Rn&&(t=At),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Hh,"-$1").toLowerCase())):n.removeAttribute(t)}},fr=function(e,t,n,r,s,a){var o=new Cn(e._pt,t,n,0,1,a?wv:Av);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Jd={deg:1,rad:1,turn:1},HS={grid:1,flex:1},Er=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Vr.style,l=RS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",_,g,p,m;if(r===a||!s||Jd[r]||Jd[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&Dv(e),(d||a==="%")&&(Yi[t]||~t.indexOf("adius")))return _=m?e.getBBox()[l?"width":"height"]:e[u],Lt(d?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(h?a:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ur||!g.appendChild)&&(g=ur.body),p=g._gsap,p&&d&&p.width&&l&&p.time===zn.time&&!p.uncache)return Lt(s/p.width*f);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=f+r,_=e[u],S?e.style[t]=S:ss(e,t)}else(d||a==="%")&&!HS[Ci(g,"display")]&&(o.position=Ci(e,"position")),g===e&&(o.position="static"),g.appendChild(Vr),_=Vr[u],g.removeChild(Vr),o.position="absolute";return l&&d&&(p=qr(g),p.time=zn.time,p.width=g[u]),Lt(h?_*s/f:_&&s?f/_*s:0)},Gi=function(e,t,n,r){var s;return kh||zf(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(s=ho(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:nc(Ci(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=tc[t]&&tc[t](e,t,n)||Ci(e,t)||j_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},VS=function(e,t,n,r){if(!n||n==="none"){var s=aa(t,e,1),a=s&&Ci(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Ci(e,"borderTopColor"))}var o=new Cn(this._pt,e.style,t,0,1,Mv),l=0,c=0,u,f,h,d,_,g,p,m,S,y,v,M;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=Ci(e,t)||r,g?e.style[t]=g:ss(e,t)),u=[n,r],dv(u),n=u[0],r=u[1],h=n.match(zs)||[],M=r.match(zs)||[],M.length){for(;f=zs.exec(r);)p=f[0],S=r.substring(l,f.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),p.charAt(1)==="="&&(p=Xs(d,p)+v),m=parseFloat(p),y=p.substr((m+"").length),l=zs.lastIndex-y.length,y||(y=y||Hn.units[t]||v,l===r.length&&(r+=y,o.e+=y)),v!==y&&(d=Er(e,t,g,y)||0),o._pt={_next:o._pt,p:S||c===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?wv:Av;return H_.test(r)&&(o.e=0),this._pt=o,o},Qd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},WS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Qd[n]||n,t[1]=Qd[r]||r,t.join(" ")},$S=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Yi[o]&&(l=1,o=o==="transformOrigin"?Rn:At),ss(n,o);l&&(ss(n,At),a&&(a.svg&&n.removeAttribute("transform"),ho(n,1),a.uncache=1,Cv(r)))}},tc={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Cn(e._pt,t,n,0,0,$S);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},fo=[1,0,0,1,0,0],Iv={},Ov=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},ep=function(e){var t=Ci(e,At);return Ov(t)?fo:t.substr(7).match(G_).map(Lt)},Vh=function(e,t){var n=e._gsap||qr(e),r=e.style,s=ep(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?fo:s):(s===fo&&!e.offsetParent&&e!==qs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,qs.appendChild(e)),s=ep(e),l?r.display=l:ss(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):qs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},kf=function(e,t,n,r,s,a){var o=e._gsap,l=s||Vh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],_=l[1],g=l[2],p=l[3],m=l[4],S=l[5],y=t.split(" "),v=parseFloat(y[0])||0,M=parseFloat(y[1])||0,b,E,L,I;n?l!==fo&&(E=d*p-_*g)&&(L=v*(p/E)+M*(-g/E)+(g*S-p*m)/E,I=v*(-_/E)+M*(d/E)-(d*S-_*m)/E,v=L,M=I):(b=Lv(e),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),M=b.y+(~(y[1]||y[0]).indexOf("%")?M/100*b.height:M)),r||r!==!1&&o.smooth?(m=v-c,S=M-u,o.xOffset=f+(m*d+S*g)-m,o.yOffset=h+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=M,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[Rn]="0px 0px",a&&(fr(a,o,"xOrigin",c,v),fr(a,o,"yOrigin",u,M),fr(a,o,"xOffset",f,o.xOffset),fr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},ho=function(e,t){var n=e._gsap||new _v(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Ci(e,Rn)||"0",u,f,h,d,_,g,p,m,S,y,v,M,b,E,L,I,x,C,O,Y,D,k,F,$,X,j,R,K,re,Ie,W,Z;return u=f=h=g=p=m=S=y=v=0,d=_=1,n.svg=!!(e.getCTM&&Dv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),r.scale=r.rotate=r.translate="none"),E=Vh(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),kf(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,E)),M=n.xOrigin||0,b=n.yOrigin||0,E!==fo&&(C=E[0],O=E[1],Y=E[2],D=E[3],u=k=E[4],f=F=E[5],E.length===6?(d=Math.sqrt(C*C+O*O),_=Math.sqrt(D*D+Y*Y),g=C||O?ms(O,C)*Ur:0,S=Y||D?ms(Y,D)*Ur+g:0,S&&(_*=Math.abs(Math.cos(S*js))),n.svg&&(u-=M-(M*C+b*Y),f-=b-(M*O+b*D))):(Z=E[6],Ie=E[7],R=E[8],K=E[9],re=E[10],W=E[11],u=E[12],f=E[13],h=E[14],L=ms(Z,re),p=L*Ur,L&&(I=Math.cos(-L),x=Math.sin(-L),$=k*I+R*x,X=F*I+K*x,j=Z*I+re*x,R=k*-x+R*I,K=F*-x+K*I,re=Z*-x+re*I,W=Ie*-x+W*I,k=$,F=X,Z=j),L=ms(-Y,re),m=L*Ur,L&&(I=Math.cos(-L),x=Math.sin(-L),$=C*I-R*x,X=O*I-K*x,j=Y*I-re*x,W=D*x+W*I,C=$,O=X,Y=j),L=ms(O,C),g=L*Ur,L&&(I=Math.cos(L),x=Math.sin(L),$=C*I+O*x,X=k*I+F*x,O=O*I-C*x,F=F*I-k*x,C=$,k=X),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),d=Lt(Math.sqrt(C*C+O*O+Y*Y)),_=Lt(Math.sqrt(F*F+Z*Z)),L=ms(k,F),S=Math.abs(L)>2e-4?L*Ur:0,v=W?1/(W<0?-W:W):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ov(Ci(e,At)),$&&e.setAttribute("transform",$))),Math.abs(S)>90&&Math.abs(S)<270&&(s?(d*=-1,S+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Lt(d),n.scaleY=Lt(_),n.rotation=Lt(g)+o,n.rotationX=Lt(p)+o,n.rotationY=Lt(m)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Rn]=nc(c)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?qS:Pv?Uv:XS,n.uncache=0,n},nc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Zc=function(e,t,n){var r=on(t);return Lt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",r)))+r},XS=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Uv(e,t)},Rr="0deg",ba="0px",Pr=") ",Uv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,v="",M=m==="auto"&&e&&e!==1||m===!0;if(y&&(f!==Rr||u!==Rr)){var b=parseFloat(u)*js,E=Math.sin(b),L=Math.cos(b),I;b=parseFloat(f)*js,I=Math.cos(b),a=Zc(S,a,E*I*-y),o=Zc(S,o,-Math.sin(b)*-y),l=Zc(S,l,L*I*-y+y)}p!==ba&&(v+="perspective("+p+Pr),(r||s)&&(v+="translate("+r+"%, "+s+"%) "),(M||a!==ba||o!==ba||l!==ba)&&(v+=l!==ba||M?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Pr),c!==Rr&&(v+="rotate("+c+Pr),u!==Rr&&(v+="rotateY("+u+Pr),f!==Rr&&(v+="rotateX("+f+Pr),(h!==Rr||d!==Rr)&&(v+="skew("+h+", "+d+Pr),(_!==1||g!==1)&&(v+="scale("+_+", "+g+Pr),S.style[At]=v||"translate(0, 0)"},qS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(a),v=parseFloat(o),M,b,E,L,I;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=js,c*=js,M=Math.cos(l)*f,b=Math.sin(l)*f,E=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=js,I=Math.tan(c-u),I=Math.sqrt(1+I*I),E*=I,L*=I,u&&(I=Math.tan(u),I=Math.sqrt(1+I*I),M*=I,b*=I)),M=Lt(M),b=Lt(b),E=Lt(E),L=Lt(L)):(M=f,L=h,b=E=0),(y&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(y=Er(d,"x",a,"px"),v=Er(d,"y",o,"px")),(_||g||p||m)&&(y=Lt(y+_-(_*M+g*E)+p),v=Lt(v+g-(_*b+g*L)+m)),(r||s)&&(I=d.getBBox(),y=Lt(y+r/100*I.width),v=Lt(v+s/100*I.height)),I="matrix("+M+","+b+","+E+","+L+","+y+","+v+")",d.setAttribute("transform",I),S&&(d.style[At]=I)},jS=function(e,t,n,r,s){var a=360,o=Yt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Ur:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Yd)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Yd)%a-~~(c/a)*a)),e._pt=h=new Cn(e._pt,t,n,r,c,LS),h.e=u,h.u="deg",e._props.push(n),h},tp=function(e,t){for(var n in t)e[n]=t[n];return e},YS=function(e,t,n){var r=tp({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,_;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[At]=t,o=ho(n,1),ss(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],a[At]=t,o=ho(n,1),a[At]=c);for(l in Yi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=on(c),_=on(u),f=d!==_?Er(n,l,c,_):parseFloat(c),h=parseFloat(u),e._pt=new Cn(e._pt,o,l,f,h-f,Ff),e._pt.u=_||0,e._props.push(l));tp(o,r)};wn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});tc[e>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(_){return Gi(o,_,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(_,g){return d[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var Nv={name:"css",register:zf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,_,g,p,m,S,y,v,M,b,E,L;kh||zf(),this.styles=this.styles||Rv(e),L=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(Bn[g]&&vv(g,t,n,r,e,s)))){if(d=typeof u,_=tc[g],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=lo(u)),_)_(this,e,g,u,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",gr.lastIndex=0,gr.test(c)||(p=on(c),m=on(u)),m?p!==m&&(c=Er(e,g,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,g),a.push(g),L.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,r,e,s):l[g],Yt(c)&&~c.indexOf("random(")&&(c=lo(c)),on(c+"")||c==="auto"||(c+=Hn.units[g]||on(Gi(e,g))||""),(c+"").charAt(1)==="="&&(c=Gi(e,g))):c=Gi(e,g),h=parseFloat(c),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),f=parseFloat(u),g in Ti&&(g==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,o.visibility),fr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Ti[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in Yi,y){if(this.styles.save(g),v||(M=e._gsap,M.renderTransform&&!t.parseTransform||ho(e,t.parseTransform),b=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new Cn(this._pt,o,At,0,1,M.renderTransform,M,0,-1),v.dep=1),g==="scale")this._pt=new Cn(this._pt,M,"scaleY",M.scaleY,(S?Xs(M.scaleY,S+f):f)-M.scaleY||0,Ff),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){L.push(Rn,0,o[Rn]),u=WS(u),M.svg?kf(e,u,0,b,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==M.zOrigin&&fr(this,M,"zOrigin",M.zOrigin,m),fr(this,o,g,nc(c),nc(u)));continue}else if(g==="svgOrigin"){kf(e,u,1,b,0,this);continue}else if(g in Iv){jS(this,M,g,h,S?Xs(h,S+u):u);continue}else if(g==="smoothOrigin"){fr(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){YS(this,u,e);continue}}else g in o||(g=aa(g)||g);if(y||(f||f===0)&&(h||h===0)&&!PS.test(u)&&g in o)p=(c+"").substr((h+"").length),f||(f=0),m=on(u)||(g in Hn.units?Hn.units[g]:p),p!==m&&(h=Er(e,g,c,m)),this._pt=new Cn(this._pt,y?M:o,g,h,(S?Xs(h,S+f):f)-h,!y&&(m==="px"||g==="zIndex")&&t.autoRound!==!1?IS:Ff),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=DS);else if(g in o)VS.call(this,e,g,c,S?S+u:u);else if(g in e)this.add(e,g,c||e[g],S?S+u:u,r,s);else if(g!=="parseTransform"){Lh(g,u);continue}y||(g in o?L.push(g,0,o[g]):L.push(g,1,c||e[g])),a.push(g)}}E&&bv(this)},render:function(e,t){if(t.tween._time||!Gh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ti,getSetter:function(e,t,n){var r=Ti[t];return r&&r.indexOf(",")<0&&(t=r),t in Yi&&t!==Rn&&(e._gsap.x||Gi(e,"x"))?n&&jd===n?t==="scale"?FS:NS:(jd=n||{})&&(t==="scale"?BS:zS):e.style&&!Ch(e.style[t])?OS:~t.indexOf("-")?US:Bh(e,t)},core:{_removeProperty:ss,_getMatrix:Vh}};Ln.utils.checkPrefix=aa;Ln.core.getStyleSaver=Rv;(function(i,e,t,n){var r=wn(i+","+e+","+t,function(s){Yi[s]=1});wn(e,function(s){Hn.units[s]="deg",Iv[s]=1}),Ti[r[13]]=i+","+e,wn(n,function(s){var a=s.split(":");Ti[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Hn.units[i]="px"});Ln.registerPlugin(Nv);var Wh=Ln.registerPlugin(Nv)||Ln;Wh.core.Tween;function np(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function KS(i,e,t){return e&&np(i.prototype,e),t&&np(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,Ul,kn,hr,dr,Ys,Fv,Nr,Za,Bv,$i,ui,zv,kv=function(){return Zt||typeof window<"u"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},Gv=1,Gs=[],et=[],Ri=[],Ja=Date.now,Gf=function(e,t){return t},ZS=function(){var e=Za.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,et),r.push.apply(r,Ri),et=n,Ri=r,Gf=function(a,o){return t[a](o)}},_r=function(e,t){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][t]},Qa=function(e){return!!~Bv.indexOf(e)},pn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},dn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Oo="scrollLeft",Uo="scrollTop",Hf=function(){return $i&&$i.isPressed||et.cache++},ic=function(e,t){var n=function r(s){if(s||s===0){Gv&&(kn.history.scrollRestoration="manual");var a=$i&&$i.isPressed;s=r.v=Math.round(s)||($i&&$i.iOS?1:0),e(s),r.cacheID=et.cache,a&&Gf("ss",s)}else(t||et.cache!==r.cacheID||Gf("ref"))&&(r.cacheID=et.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},Sn={s:Oo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ic(function(i){return arguments.length?kn.scrollTo(i,Gt.sc()):kn.pageXOffset||hr[Oo]||dr[Oo]||Ys[Oo]||0})},Gt={s:Uo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Sn,sc:ic(function(i){return arguments.length?kn.scrollTo(Sn.sc(),i):kn.pageYOffset||hr[Uo]||dr[Uo]||Ys[Uo]||0})},bn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Zt.utils.toArray)(e)[0]||(typeof e=="string"&&Zt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mr=function(e,t){var n=t.s,r=t.sc;Qa(e)&&(e=hr.scrollingElement||dr);var s=et.indexOf(e),a=r===Gt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+a]||pn(e,"scroll",Hf);var o=et[s+a],l=o||(et[s+a]=ic(_r(e,n),!0)||(Qa(e)?r:ic(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Zt.getProperty(e,"scrollBehavior")==="smooth"),l},Vf=function(e,t,n){var r=e,s=e,a=Ja(),o=a,l=t||50,c=Math.max(500,l*3),u=function(_,g){var p=Ja();g||p-a>l?(s=r,r=_,o=a,a=p):n?r+=_:r=s+(_-s)/(p-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(_){var g=o,p=s,m=Ja();return(_||_===0)&&_!==r&&u(_),a===o||m-o>c?0:(r+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Ta=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},ip=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hv=function(){Za=Zt.core.globals().ScrollTrigger,Za&&Za.core&&ZS()},Vv=function(e){return Zt=e||kv(),!Ul&&Zt&&typeof document<"u"&&document.body&&(kn=window,hr=document,dr=hr.documentElement,Ys=hr.body,Bv=[kn,hr,dr,Ys],Zt.utils.clamp,zv=Zt.core.context||function(){},Nr="onpointerenter"in Ys?"pointer":"mouse",Fv=Dt.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ui=Dt.eventTypes=("ontouchstart"in dr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in dr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Gv=0},500),Hv(),Ul=1),Ul};Sn.op=Gt;et.cache=0;var Dt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Ul||Vv(Zt)||console.warn("Please gsap.registerPlugin(Observer)"),Za||Hv();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,v=n.onRelease,M=n.onRight,b=n.onLeft,E=n.onUp,L=n.onDown,I=n.onChangeX,x=n.onChangeY,C=n.onChange,O=n.onToggleX,Y=n.onToggleY,D=n.onHover,k=n.onHoverEnd,F=n.onMove,$=n.ignoreCheck,X=n.isNormalizer,j=n.onGestureStart,R=n.onGestureEnd,K=n.onWheel,re=n.onEnable,Ie=n.onDisable,W=n.onClick,Z=n.scrollSpeed,ue=n.capture,me=n.allowClicks,ye=n.lockAxis,he=n.onLockAxis;this.target=o=bn(o)||dr,this.vars=n,d&&(d=Zt.utils.toArray(d)),r=r||1e-9,s=s||0,_=_||1,Z=Z||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(Ys).lineHeight)||22);var qe,Le,N,ke,pe,Ce,_e,H=this,Oe=0,w=0,T=n.passive||!u,B=Mr(o,Sn),ee=Mr(o,Gt),Q=B(),te=ee(),fe=~a.indexOf("touch")&&!~a.indexOf("pointer")&&ui[0]==="pointerdown",le=Qa(o),oe=o.ownerDocument||hr,Ae=[0,0,0],ze=[0,0,0],J=0,rt=function(){return J=Ja()},Re=function(Ee,Pe){return(H.event=Ee)&&d&&~d.indexOf(Ee.target)||Pe&&fe&&Ee.pointerType!=="touch"||$&&$(Ee,Pe)},Ge=function(){H._vx.reset(),H._vy.reset(),Le.pause(),f&&f(H)},be=function(){var Ee=H.deltaX=ip(Ae),Pe=H.deltaY=ip(ze),se=Math.abs(Ee)>=r,Ne=Math.abs(Pe)>=r;C&&(se||Ne)&&C(H,Ee,Pe,Ae,ze),se&&(M&&H.deltaX>0&&M(H),b&&H.deltaX<0&&b(H),I&&I(H),O&&H.deltaX<0!=Oe<0&&O(H),Oe=H.deltaX,Ae[0]=Ae[1]=Ae[2]=0),Ne&&(L&&H.deltaY>0&&L(H),E&&H.deltaY<0&&E(H),x&&x(H),Y&&H.deltaY<0!=w<0&&Y(H),w=H.deltaY,ze[0]=ze[1]=ze[2]=0),(ke||N)&&(F&&F(H),N&&(S(H),N=!1),ke=!1),Ce&&!(Ce=!1)&&he&&he(H),pe&&(K(H),pe=!1),qe=0},ge=function(Ee,Pe,se){Ae[se]+=Ee,ze[se]+=Pe,H._vx.update(Ee),H._vy.update(Pe),c?qe||(qe=requestAnimationFrame(be)):be()},He=function(Ee,Pe){ye&&!_e&&(H.axis=_e=Math.abs(Ee)>Math.abs(Pe)?"x":"y",Ce=!0),_e!=="y"&&(Ae[2]+=Ee,H._vx.update(Ee,!0)),_e!=="x"&&(ze[2]+=Pe,H._vy.update(Pe,!0)),c?qe||(qe=requestAnimationFrame(be)):be()},Ke=function(Ee){if(!Re(Ee,1)){Ee=Ta(Ee,u);var Pe=Ee.clientX,se=Ee.clientY,Ne=Pe-H.x,Ue=se-H.y,Ve=H.isDragging;H.x=Pe,H.y=se,(Ve||Math.abs(H.startX-Pe)>=s||Math.abs(H.startY-se)>=s)&&(S&&(N=!0),Ve||(H.isDragging=!0),He(Ne,Ue),Ve||p&&p(H))}},st=H.onPress=function(Te){Re(Te,1)||Te&&Te.button||(H.axis=_e=null,Le.pause(),H.isPressed=!0,Te=Ta(Te),Oe=w=0,H.startX=H.x=Te.clientX,H.startY=H.y=Te.clientY,H._vx.reset(),H._vy.reset(),pn(X?o:oe,ui[1],Ke,T,!0),H.deltaX=H.deltaY=0,y&&y(H))},de=H.onRelease=function(Te){if(!Re(Te,1)){dn(X?o:oe,ui[1],Ke,!0);var Ee=!isNaN(H.y-H.startY),Pe=H.isDragging,se=Pe&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ne=Ta(Te);!se&&Ee&&(H._vx.reset(),H._vy.reset(),u&&me&&Zt.delayedCall(.08,function(){if(Ja()-J>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if(oe.createEvent){var Ue=oe.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,kn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(Ue)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Pe&&!X&&Le.restart(!0),m&&Pe&&m(H),v&&v(H,se)}},tt=function(Ee){return Ee.touches&&Ee.touches.length>1&&(H.isGesturing=!0)&&j(Ee,H.isDragging)},P=function(){return(H.isGesturing=!1)||R(H)},ne=function(Ee){if(!Re(Ee)){var Pe=B(),se=ee();ge((Pe-Q)*Z,(se-te)*Z,1),Q=Pe,te=se,f&&Le.restart(!0)}},ie=function(Ee){if(!Re(Ee)){Ee=Ta(Ee,u),K&&(pe=!0);var Pe=(Ee.deltaMode===1?l:Ee.deltaMode===2?kn.innerHeight:1)*_;ge(Ee.deltaX*Pe,Ee.deltaY*Pe,0),f&&!X&&Le.restart(!0)}},ve=function(Ee){if(!Re(Ee)){var Pe=Ee.clientX,se=Ee.clientY,Ne=Pe-H.x,Ue=se-H.y;H.x=Pe,H.y=se,ke=!0,f&&Le.restart(!0),(Ne||Ue)&&He(Ne,Ue)}},De=function(Ee){H.event=Ee,D(H)},Ye=function(Ee){H.event=Ee,k(H)},at=function(Ee){return Re(Ee)||Ta(Ee,u)&&W(H)};Le=H._dc=Zt.delayedCall(h||.25,Ge).pause(),H.deltaX=H.deltaY=0,H._vx=Vf(0,50,!0),H._vy=Vf(0,50,!0),H.scrollX=B,H.scrollY=ee,H.isDragging=H.isGesturing=H.isPressed=!1,zv(this),H.enable=function(Te){return H.isEnabled||(pn(le?oe:o,"scroll",Hf),a.indexOf("scroll")>=0&&pn(le?oe:o,"scroll",ne,T,ue),a.indexOf("wheel")>=0&&pn(o,"wheel",ie,T,ue),(a.indexOf("touch")>=0&&Fv||a.indexOf("pointer")>=0)&&(pn(o,ui[0],st,T,ue),pn(oe,ui[2],de),pn(oe,ui[3],de),me&&pn(o,"click",rt,!0,!0),W&&pn(o,"click",at),j&&pn(oe,"gesturestart",tt),R&&pn(oe,"gestureend",P),D&&pn(o,Nr+"enter",De),k&&pn(o,Nr+"leave",Ye),F&&pn(o,Nr+"move",ve)),H.isEnabled=!0,Te&&Te.type&&st(Te),re&&re(H)),H},H.disable=function(){H.isEnabled&&(Gs.filter(function(Te){return Te!==H&&Qa(Te.target)}).length||dn(le?oe:o,"scroll",Hf),H.isPressed&&(H._vx.reset(),H._vy.reset(),dn(X?o:oe,ui[1],Ke,!0)),dn(le?oe:o,"scroll",ne,ue),dn(o,"wheel",ie,ue),dn(o,ui[0],st,ue),dn(oe,ui[2],de),dn(oe,ui[3],de),dn(o,"click",rt,!0),dn(o,"click",at),dn(oe,"gesturestart",tt),dn(oe,"gestureend",P),dn(o,Nr+"enter",De),dn(o,Nr+"leave",Ye),dn(o,Nr+"move",ve),H.isEnabled=H.isPressed=H.isDragging=!1,Ie&&Ie(H))},H.kill=H.revert=function(){H.disable();var Te=Gs.indexOf(H);Te>=0&&Gs.splice(Te,1),$i===H&&($i=0)},Gs.push(H),X&&Qa(o)&&($i=H),H.enable(g)},KS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Dt.version="3.12.5";Dt.create=function(i){return new Dt(i)};Dt.register=Vv;Dt.getAll=function(){return Gs.slice()};Dt.getById=function(i){return Gs.filter(function(e){return e.vars.id===i})[0]};kv()&&Zt.registerPlugin(Dt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xe,Ns,nt,bt,fi,yt,Wv,rc,po,eo,Va,No,sn,Ec,Wf,_n,rp,sp,Fs,$v,Jc,Xv,gn,$f,qv,jv,lr,Xf,$h,Ks,Xh,sc,qf,Qc,Fo=1,an=Date.now,eu=an(),ii=0,Wa=0,ap=function(e,t,n){var r=Fn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},op=function(e,t){return t&&(!Fn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},JS=function i(){return Wa&&requestAnimationFrame(i)},lp=function(){return Ec=1},cp=function(){return Ec=0},yi=function(e){return e},$a=function(e){return Math.round(e*1e5)/1e5||0},Yv=function(){return typeof window<"u"},Kv=function(){return xe||Yv()&&(xe=window.gsap)&&xe.registerPlugin&&xe},as=function(e){return!!~Wv.indexOf(e)},Zv=function(e){return(e==="Height"?Xh:nt["inner"+e])||fi["client"+e]||yt["client"+e]},Jv=function(e){return _r(e,"getBoundingClientRect")||(as(e)?function(){return kl.width=nt.innerWidth,kl.height=Xh,kl}:function(){return Hi(e)})},QS=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=_r(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Zv(s):e["client"+s])||0}},eE=function(e,t){return!t||~Ri.indexOf(e)?Jv(e):function(){return kl}},Ai=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=_r(e,n))?a()-Jv(e)()[s]:as(e)?(fi[n]||yt[n])-Zv(r):e[n]-e["offset"+r])},Bo=function(e,t){for(var n=0;n<Fs.length;n+=3)(!t||~t.indexOf(Fs[n+1]))&&e(Fs[n],Fs[n+1],Fs[n+2])},Fn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},Xa=function(e){return typeof e=="number"},Fr=function(e){return typeof e=="object"},Aa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},tu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},gs=Math.abs,Qv="left",e0="top",qh="right",jh="bottom",Zr="width",Jr="height",to="Right",no="Left",io="Top",ro="Bottom",Ot="padding",Zn="margin",oa="Width",Yh="Height",kt="px",Jn=function(e){return nt.getComputedStyle(e)},tE=function(e){var t=Jn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},up=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&Jn(e)[Wf]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},ac=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},t0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},nE=function(e){return function(t){return xe.utils.snap(t0(e),t)}},Kh=function(e){var t=xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},iE=function(e){return function(t,n){return Kh(t0(e))(t,n.direction)}},zo=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Xt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},$t=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ko=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},fp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Go={toggleActions:"play",anticipatePin:0},oc={top:0,left:0,center:.5,bottom:1,right:1},Nl=function(e,t){if(Fn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in oc?oc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Ho=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,_=bt.createElement("div"),g=as(n)||_r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=g?yt:n,S=e.indexOf("start")!==-1,y=S?c:u,v="border-color:"+y+";font-size:"+f+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(v+=(r===Gt?qh:jh)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=v,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+r.op.d2],Fl(_,0,r,S),_},Fl=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+oa]=1,s["border"+o+oa]=0,s[n.p]=t+"px",xe.set(e,s)},Je=[],jf={},mo,hp=function(){return an()-ii>34&&(mo||(mo=requestAnimationFrame(qi)))},_s=function(){(!gn||!gn.isPressed||gn.startX>yt.clientWidth)&&(et.cache++,gn?mo||(mo=requestAnimationFrame(qi)):qi(),ii||ls("scrollStart"),ii=an())},nu=function(){jv=nt.innerWidth,qv=nt.innerHeight},qa=function(){et.cache++,!sn&&!Xv&&!bt.fullscreenElement&&!bt.webkitFullscreenElement&&(!$f||jv!==nt.innerWidth||Math.abs(nt.innerHeight-qv)>nt.innerHeight*.25)&&rc.restart(!0)},os={},rE=[],n0=function i(){return $t(Xe,"scrollEnd",i)||Wr(!0)},ls=function(e){return os[e]&&os[e].map(function(t){return t()})||rE},Nn=[],i0=function(e){for(var t=0;t<Nn.length;t+=5)(!e||Nn[t+4]&&Nn[t+4].query===e)&&(Nn[t].style.cssText=Nn[t+1],Nn[t].getBBox&&Nn[t].setAttribute("transform",Nn[t+2]||""),Nn[t+3].uncache=1)},Zh=function(e,t){var n;for(_n=0;_n<Je.length;_n++)n=Je[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));sc=!0,t&&i0(t),t||ls("revert")},r0=function(e,t){et.cache++,(t||!vn)&&et.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Fn(e)&&(nt.history.scrollRestoration=$h=e)},vn,Qr=0,dp,sE=function(){if(dp!==Qr){var e=dp=Qr;requestAnimationFrame(function(){return e===Qr&&Wr(!0)})}},s0=function(){yt.appendChild(Ks),Xh=!gn&&Ks.offsetHeight||nt.innerHeight,yt.removeChild(Ks)},pp=function(e){return po(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Wr=function(e,t){if(ii&&!e&&!sc){Xt(Xe,"scrollEnd",n0);return}s0(),vn=Xe.isRefreshing=!0,et.forEach(function(r){return En(r)&&++r.cacheID&&(r.rec=r())});var n=ls("refreshInit");$v&&Xe.sort(),t||Zh(),et.forEach(function(r){En(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),sc=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),qf=1,pp(!0),Je.forEach(function(r){var s=Ai(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),pp(!1),qf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),et.forEach(function(r){En(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),r0($h,1),rc.pause(),Qr++,vn=2,qi(2),Je.forEach(function(r){return En(r.vars.onRefresh)&&r.vars.onRefresh(r)}),vn=Xe.isRefreshing=!1,ls("refresh")},Yf=0,Bl=1,so,qi=function(e){if(e===2||!vn&&!sc){Xe.isUpdating=!0,so&&so.update(0);var t=Je.length,n=an(),r=n-eu>=50,s=t&&Je[0].scroll();if(Bl=Yf>s?-1:1,vn||(Yf=s),r&&(ii&&!Ec&&n-ii>200&&(ii=0,ls("scrollEnd")),Va=eu,eu=n),Bl<0){for(_n=t;_n-- >0;)Je[_n]&&Je[_n].update(0,r);Bl=1}else for(_n=0;_n<t;_n++)Je[_n]&&Je[_n].update(0,r);Xe.isUpdating=!1}mo=0},Kf=[Qv,e0,jh,qh,Zn+ro,Zn+to,Zn+io,Zn+no,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],zl=Kf.concat([Zr,Jr,"boxSizing","max"+oa,"max"+Yh,"position",Zn,Ot,Ot+io,Ot+to,Ot+ro,Ot+no]),aE=function(e,t,n){Zs(n);var r=e._gsap;if(r.spacerIsNative)Zs(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},iu=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Kf.length,a=t.style,o=e.style,l;s--;)l=Kf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[jh]=o[qh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Zr]=ac(e,Sn)+kt,a[Jr]=ac(e,Gt)+kt,a[Ot]=o[Zn]=o[e0]=o[Qv]="0",Zs(r),o[Zr]=o["max"+oa]=n[Zr],o[Jr]=o["max"+Yh]=n[Jr],o[Ot]=n[Ot],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},oE=/([A-Z])/g,Zs=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(oE,"-$1").toLowerCase())}},Vo=function(e){for(var t=zl.length,n=e.style,r=[],s=0;s<t;s++)r.push(zl[s],n[zl[s]]);return r.t=e,r},lE=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},kl={left:0,top:0},mp=function(e,t,n,r,s,a,o,l,c,u,f,h,d,_){En(e)&&(e=e(l)),Fn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Nl("0"+e.substr(3),n):0));var g=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Xa(e))d&&(e=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Fl(o,n,r,!0);else{En(t)&&(t=t(l));var y=(e||"0").split(" "),v,M,b,E;S=bn(t,l)||yt,v=Hi(S)||{},(!v||!v.left&&!v.top)&&Jn(S).display==="none"&&(E=S.style.display,S.style.display="block",v=Hi(S),E?S.style.display=E:S.style.removeProperty("display")),M=Nl(y[0],v[r.d]),b=Nl(y[1]||"0",n),e=v[r.p]-c[r.p]-u+M+s-b,o&&Fl(o,b,r,n-b<20||o._isStart&&b>20),n-=n-b}if(_&&(l[_]=e||-.001,e<0&&(e=0)),a){var L=e+n,I=a._isStart;p="scroll"+r.d2,Fl(a,L,r,I&&L>20||!I&&(f?Math.max(yt[p],fi[p]):a.parentNode[p])<=L+1),f&&(c=Hi(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+kt))}return d&&S&&(p=Hi(S),d.seek(h),m=Hi(S),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},cE=/(webkit|moz|length|cssText|inset)/i,gp=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===yt){e._stOrig=s.cssText,o=Jn(e);for(a in o)!+a&&!cE.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},a0=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=a,a}},Wo=function(e,t,n){var r={};r[t.p]="+="+n,xe.set(e,r)},_p=function(e,t){var n=Mr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,_={};c=c||n();var g=a0(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=_,_[r]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,a.tween&&qi()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=xe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Xt(e,"wheel",n.wheelHandler),Xe.isTouch&&Xt(e,"touchmove",n.wheelHandler),s},Xe=function(){function i(t,n){Ns||i.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Xf(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Wa){this.update=this.refresh=this.kill=yi;return}n=up(Fn(n)||Xa(n)||n.nodeType?{trigger:n}:n,Go);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,S=s.onSnapComplete,y=s.once,v=s.snap,M=s.pinReparent,b=s.pinSpacer,E=s.containerAnimation,L=s.fastScrollEnd,I=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Sn:Gt,C=!f&&f!==0,O=bn(n.scroller||nt),Y=xe.core.getCache(O),D=as(O),k=("pinType"in n?n.pinType:_r(O,"pinType")||D&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=C&&n.toggleActions.split(" "),X="markers"in n?n.markers:Go.markers,j=D?0:parseFloat(Jn(O)["border"+x.p2+oa])||0,R=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(R)},re=QS(O,D,x),Ie=eE(O,D),W=0,Z=0,ue=0,me=Mr(O,x),ye,he,qe,Le,N,ke,pe,Ce,_e,H,Oe,w,T,B,ee,Q,te,fe,le,oe,Ae,ze,J,rt,Re,Ge,be,ge,He,Ke,st,de,tt,P,ne,ie,ve,De,Ye;if(R._startClamp=R._endClamp=!1,R._dir=x,p*=45,R.scroller=O,R.scroll=E?E.time.bind(E):me,Le=me(),R.vars=n,r=r||n.animation,"refreshPriority"in n&&($v=1,n.refreshPriority===-9999&&(so=R)),Y.tweenScroll=Y.tweenScroll||{top:_p(O,Gt),left:_p(O,Sn)},R.tweenTo=ye=Y.tweenScroll[x.p],R.scrubDuration=function(se){tt=Xa(se)&&se,tt?de?de.duration(se):de=xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return m&&m(R)}}):(de&&de.progress(1).kill(),de=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(f),Ke=0,l||(l=r.vars.id)),v&&((!Fr(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in yt.style&&xe.set(D?[yt,fi]:O,{scrollBehavior:"auto"}),et.forEach(function(se){return En(se)&&se.target===(D?bt.scrollingElement||fi:O)&&(se.smooth=!1)}),qe=En(v.snapTo)?v.snapTo:v.snapTo==="labels"?nE(r):v.snapTo==="labelsDirectional"?iE(r):v.directional!==!1?function(se,Ne){return Kh(v.snapTo)(se,an()-Z<500?0:Ne.direction)}:xe.utils.snap(v.snapTo),P=v.duration||{min:.1,max:2},P=Fr(P)?eo(P.min,P.max):eo(P,P),ne=xe.delayedCall(v.delay||tt/2||.1,function(){var se=me(),Ne=an()-Z<500,Ue=ye.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ue&&!Ec&&W!==se){var Ve=(se-ke)/B,Mt=r&&!C?r.totalProgress():Ve,Ze=Ne?0:(Mt-st)/(an()-Va)*1e3||0,mt=xe.utils.clamp(-Ve,1-Ve,gs(Ze/2)*Ze/.185),Bt=Ve+(v.inertia===!1?0:mt),vt,gt,ct=v,In=ct.onStart,A=ct.onInterrupt,U=ct.onComplete;if(vt=qe(Bt,R),Xa(vt)||(vt=Bt),gt=Math.round(ke+vt*B),se<=pe&&se>=ke&&gt!==se){if(Ue&&!Ue._initted&&Ue.data<=gs(gt-se))return;v.inertia===!1&&(mt=vt-Ve),ye(gt,{duration:P(gs(Math.max(gs(Bt-Mt),gs(vt-Mt))*.185/Ze/.05||0)),ease:v.ease||"power3",data:gs(gt-se),onInterrupt:function(){return ne.restart(!0)&&A&&A(R)},onComplete:function(){R.update(),W=me(),r&&(de?de.resetTo("totalProgress",vt,r._tTime/r._tDur):r.progress(vt)),Ke=st=r&&!C?r.totalProgress():R.progress,S&&S(R),U&&U(R)}},se,mt*B,gt-se-mt*B),In&&In(R,ye.tween)}}else R.isActive&&W!==se&&ne.restart(!0)}).pause()),l&&(jf[l]=R),h=R.trigger=bn(h||d!==!0&&d),Ye=h&&h._gsap&&h._gsap.stRevert,Ye&&(Ye=Ye(R)),d=d===!0?h:bn(d),Fn(o)&&(o={targets:h,className:o}),d&&(_===!1||_===Zn||(_=!_&&d.parentNode&&d.parentNode.style&&Jn(d.parentNode).display==="flex"?!1:Ot),R.pin=d,he=xe.core.getCache(d),he.spacer?ee=he.pinState:(b&&(b=bn(b),b&&!b.nodeType&&(b=b.current||b.nativeElement),he.spacerIsNative=!!b,b&&(he.spacerState=Vo(b))),he.spacer=fe=b||bt.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),he.pinState=ee=Vo(d)),n.force3D!==!1&&xe.set(d,{force3D:!0}),R.spacer=fe=he.spacer,He=Jn(d),rt=He[_+x.os2],oe=xe.getProperty(d),Ae=xe.quickSetter(d,x.a,kt),iu(d,fe,He),te=Vo(d)),X){w=Fr(X)?up(X,fp):fp,H=Ho("scroller-start",l,O,x,w,0),Oe=Ho("scroller-end",l,O,x,w,0,H),le=H["offset"+x.op.d2];var at=bn(_r(O,"content")||O);Ce=this.markerStart=Ho("start",l,at,x,w,le,0,E),_e=this.markerEnd=Ho("end",l,at,x,w,le,0,E),E&&(De=xe.quickSetter([Ce,_e],x.a,kt)),!k&&!(Ri.length&&_r(O,"fixedMarkers")===!0)&&(tE(D?yt:O),xe.set([H,Oe],{force3D:!0}),Ge=xe.quickSetter(H,x.a,kt),ge=xe.quickSetter(Oe,x.a,kt))}if(E){var Te=E.vars.onUpdate,Ee=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Te&&Te.apply(E,Ee||[])})}if(R.previous=function(){return Je[Je.indexOf(R)-1]},R.next=function(){return Je[Je.indexOf(R)+1]},R.revert=function(se,Ne){if(!Ne)return R.kill(!0);var Ue=se!==!1||!R.enabled,Ve=sn;Ue!==R.isReverted&&(Ue&&(ie=Math.max(me(),R.scroll.rec||0),ue=R.progress,ve=r&&r.progress()),Ce&&[Ce,_e,H,Oe].forEach(function(Mt){return Mt.style.display=Ue?"none":"block"}),Ue&&(sn=R,R.update(Ue)),d&&(!M||!R.isActive)&&(Ue?aE(d,fe,ee):iu(d,fe,Jn(d),Re)),Ue||R.update(Ue),sn=Ve,R.isReverted=Ue)},R.refresh=function(se,Ne,Ue,Ve){if(!((sn||!R.enabled)&&!Ne)){if(d&&se&&ii){Xt(i,"scrollEnd",n0);return}!vn&&K&&K(R),sn=R,ye.tween&&!Ue&&(ye.tween.kill(),ye.tween=0),de&&de.pause(),g&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Mt=re(),Ze=Ie(),mt=E?E.duration():Ai(O,x),Bt=B<=.01,vt=0,gt=Ve||0,ct=Fr(Ue)?Ue.end:n.end,In=n.endTrigger||h,A=Fr(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),U=R.pinnedContainer=n.pinnedContainer&&bn(n.pinnedContainer,R),V=h&&Math.max(0,Je.indexOf(R))||0,G=V,z,ae,Se,Fe,Me,we,Be,We,St,zt,ut,hn,ft;for(X&&Fr(Ue)&&(hn=xe.getProperty(H,x.p),ft=xe.getProperty(Oe,x.p));G--;)we=Je[G],we.end||we.refresh(0,1)||(sn=R),Be=we.pin,Be&&(Be===h||Be===d||Be===U)&&!we.isReverted&&(zt||(zt=[]),zt.unshift(we),we.revert(!0,!0)),we!==Je[G]&&(V--,G--);for(En(A)&&(A=A(R)),A=ap(A,"start",R),ke=mp(A,h,Mt,x,me(),Ce,H,R,Ze,j,k,mt,E,R._startClamp&&"_startClamp")||(d?-.001:0),En(ct)&&(ct=ct(R)),Fn(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(Fn(A)?A.split(" ")[0]:"")+ct:(vt=Nl(ct.substr(2),Mt),ct=Fn(A)?A:(E?xe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ke):ke)+vt,In=h)),ct=ap(ct,"end",R),pe=Math.max(ke,mp(ct||(In?"100% 0":mt),In,Mt,x,me()+vt,_e,Oe,R,Ze,j,k,mt,E,R._endClamp&&"_endClamp"))||-.001,vt=0,G=V;G--;)we=Je[G],Be=we.pin,Be&&we.start-we._pinPush<=ke&&!E&&we.end>0&&(z=we.end-(R._startClamp?Math.max(0,we.start):we.start),(Be===h&&we.start-we._pinPush<ke||Be===U)&&isNaN(A)&&(vt+=z*(1-we.progress)),Be===d&&(gt+=z));if(ke+=vt,pe+=vt,R._startClamp&&(R._startClamp+=vt),R._endClamp&&!vn&&(R._endClamp=pe||-.001,pe=Math.min(pe,Ai(O,x))),B=pe-ke||(ke-=.01)&&.001,Bt&&(ue=xe.utils.clamp(0,1,xe.utils.normalize(ke,pe,ie))),R._pinPush=gt,Ce&&vt&&(z={},z[x.a]="+="+vt,U&&(z[x.p]="-="+me()),xe.set([Ce,_e],z)),d&&!(qf&&R.end>=Ai(O,x)))z=Jn(d),Fe=x===Gt,Se=me(),ze=parseFloat(oe(x.a))+gt,!mt&&pe>1&&(ut=(D?bt.scrollingElement||fi:O).style,ut={style:ut,value:ut["overflow"+x.a.toUpperCase()]},D&&Jn(yt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+x.a.toUpperCase()]="scroll")),iu(d,fe,z),te=Vo(d),ae=Hi(d,!0),We=k&&Mr(O,Fe?Sn:Gt)(),_?(Re=[_+x.os2,B+gt+kt],Re.t=fe,G=_===Ot?ac(d,x)+B+gt:0,G&&(Re.push(x.d,G+kt),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=G+kt)),Zs(Re),U&&Je.forEach(function($e){$e.pin===U&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),k&&me(ie)):(G=ac(d,x),G&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=G+kt)),k&&(Me={top:ae.top+(Fe?Se-ke:We)+kt,left:ae.left+(Fe?We:Se-ke)+kt,boxSizing:"border-box",position:"fixed"},Me[Zr]=Me["max"+oa]=Math.ceil(ae.width)+kt,Me[Jr]=Me["max"+Yh]=Math.ceil(ae.height)+kt,Me[Zn]=Me[Zn+io]=Me[Zn+to]=Me[Zn+ro]=Me[Zn+no]="0",Me[Ot]=z[Ot],Me[Ot+io]=z[Ot+io],Me[Ot+to]=z[Ot+to],Me[Ot+ro]=z[Ot+ro],Me[Ot+no]=z[Ot+no],Q=lE(ee,Me,M),vn&&me(0)),r?(St=r._initted,Jc(1),r.render(r.duration(),!0,!0),J=oe(x.a)-ze+B+gt,be=Math.abs(B-J)>1,k&&be&&Q.splice(Q.length-2,2),r.render(0,!0,!0),St||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Jc(0)):J=B,ut&&(ut.value?ut.style["overflow"+x.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+x.a));else if(h&&me()&&!E)for(ae=h.parentNode;ae&&ae!==yt;)ae._pinOffset&&(ke-=ae._pinOffset,pe-=ae._pinOffset),ae=ae.parentNode;zt&&zt.forEach(function($e){return $e.revert(!1,!0)}),R.start=ke,R.end=pe,Le=N=vn?ie:me(),!E&&!vn&&(Le<ie&&me(ie),R.scroll.rec=0),R.revert(!1,!0),Z=an(),ne&&(W=-1,ne.restart(!0)),sn=0,r&&C&&(r._initted||ve)&&r.progress()!==ve&&r.progress(ve||0,!0).render(r.time(),!0,!0),(Bt||ue!==R.progress||E||g)&&(r&&!C&&r.totalProgress(E&&ke<-.001&&!ue?xe.utils.normalize(ke,pe,0):ue,!0),R.progress=Bt||(Le-ke)/B===ue?0:ue),d&&_&&(fe._pinOffset=Math.round(R.progress*J)),de&&de.invalidate(),isNaN(hn)||(hn-=xe.getProperty(H,x.p),ft-=xe.getProperty(Oe,x.p),Wo(H,x,hn),Wo(Ce,x,hn-(Ve||0)),Wo(Oe,x,ft),Wo(_e,x,ft-(Ve||0))),Bt&&!vn&&R.update(),u&&!vn&&!T&&(T=!0,u(R),T=!1)}},R.getVelocity=function(){return(me()-N)/(an()-Va)*1e3||0},R.endAnimation=function(){Aa(R.callbackAnimation),r&&(de?de.progress(1):r.paused()?C||Aa(r,R.direction<0,1):Aa(r,r.reversed()))},R.labelToScroll=function(se){return r&&r.labels&&(ke||R.refresh()||ke)+r.labels[se]/r.duration()*B||0},R.getTrailing=function(se){var Ne=Je.indexOf(R),Ue=R.direction>0?Je.slice(0,Ne).reverse():Je.slice(Ne+1);return(Fn(se)?Ue.filter(function(Ve){return Ve.vars.preventOverlaps===se}):Ue).filter(function(Ve){return R.direction>0?Ve.end<=ke:Ve.start>=pe})},R.update=function(se,Ne,Ue){if(!(E&&!Ue&&!se)){var Ve=vn===!0?ie:R.scroll(),Mt=se?0:(Ve-ke)/B,Ze=Mt<0?0:Mt>1?1:Mt||0,mt=R.progress,Bt,vt,gt,ct,In,A,U,V;if(Ne&&(N=Le,Le=E?me():Ve,v&&(st=Ke,Ke=r&&!C?r.totalProgress():Ze)),p&&d&&!sn&&!Fo&&ii&&(!Ze&&ke<Ve+(Ve-N)/(an()-Va)*p?Ze=1e-4:Ze===1&&pe>Ve+(Ve-N)/(an()-Va)*p&&(Ze=.9999)),Ze!==mt&&R.enabled){if(Bt=R.isActive=!!Ze&&Ze<1,vt=!!mt&&mt<1,A=Bt!==vt,In=A||!!Ze!=!!mt,R.direction=Ze>mt?1:-1,R.progress=Ze,In&&!sn&&(gt=Ze&&!mt?0:Ze===1?1:mt===1?2:3,C&&(ct=!A&&$[gt+1]!=="none"&&$[gt+1]||$[gt],V=r&&(ct==="complete"||ct==="reset"||ct in r))),I&&(A||V)&&(V||f||!r)&&(En(I)?I(R):R.getTrailing(I).forEach(function(Se){return Se.endAnimation()})),C||(de&&!sn&&!Fo?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",Ze,r._tTime/r._tDur):(de.vars.totalProgress=Ze,de.invalidate().restart())):r&&r.totalProgress(Ze,!!(sn&&(Z||se)))),d){if(se&&_&&(fe.style[_+x.os2]=rt),!k)Ae($a(ze+J*Ze));else if(In){if(U=!se&&Ze>mt&&pe+1>Ve&&Ve+1>=Ai(O,x),M)if(!se&&(Bt||U)){var G=Hi(d,!0),z=Ve-ke;gp(d,yt,G.top+(x===Gt?z:0)+kt,G.left+(x===Gt?0:z)+kt)}else gp(d,fe);Zs(Bt||U?Q:te),be&&Ze<1&&Bt||Ae(ze+(Ze===1&&!U?J:0))}}v&&!ye.tween&&!sn&&!Fo&&ne.restart(!0),o&&(A||y&&Ze&&(Ze<1||!Qc))&&po(o.targets).forEach(function(Se){return Se.classList[Bt||y?"add":"remove"](o.className)}),a&&!C&&!se&&a(R),In&&!sn?(C&&(V&&(ct==="complete"?r.pause().totalProgress(1):ct==="reset"?r.restart(!0).pause():ct==="restart"?r.restart(!0):r[ct]()),a&&a(R)),(A||!Qc)&&(c&&A&&tu(R,c),F[gt]&&tu(R,F[gt]),y&&(Ze===1?R.kill(!1,1):F[gt]=0),A||(gt=Ze===1?1:3,F[gt]&&tu(R,F[gt]))),L&&!Bt&&Math.abs(R.getVelocity())>(Xa(L)?L:2500)&&(Aa(R.callbackAnimation),de?de.progress(1):Aa(r,ct==="reverse"?1:!Ze,1))):C&&a&&!sn&&a(R)}if(ge){var ae=E?Ve/E.duration()*(E._caScrollDist||0):Ve;Ge(ae+(H._isFlipped?1:0)),ge(ae)}De&&De(-Ve/E.duration()*(E._caScrollDist||0))}},R.enable=function(se,Ne){R.enabled||(R.enabled=!0,Xt(O,"resize",qa),D||Xt(O,"scroll",_s),K&&Xt(i,"refreshInit",K),se!==!1&&(R.progress=ue=0,Le=N=W=me()),Ne!==!1&&R.refresh())},R.getTween=function(se){return se&&ye?ye.tween:de},R.setPositions=function(se,Ne,Ue,Ve){if(E){var Mt=E.scrollTrigger,Ze=E.duration(),mt=Mt.end-Mt.start;se=Mt.start+mt*se/Ze,Ne=Mt.start+mt*Ne/Ze}R.refresh(!1,!1,{start:op(se,Ue&&!!R._startClamp),end:op(Ne,Ue&&!!R._endClamp)},Ve),R.update()},R.adjustPinSpacing=function(se){if(Re&&se){var Ne=Re.indexOf(x.d)+1;Re[Ne]=parseFloat(Re[Ne])+se+kt,Re[1]=parseFloat(Re[1])+se+kt,Zs(Re)}},R.disable=function(se,Ne){if(R.enabled&&(se!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ne||de&&de.pause(),ie=0,he&&(he.uncache=1),K&&$t(i,"refreshInit",K),ne&&(ne.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!D)){for(var Ue=Je.length;Ue--;)if(Je[Ue].scroller===O&&Je[Ue]!==R)return;$t(O,"resize",qa),D||$t(O,"scroll",_s)}},R.kill=function(se,Ne){R.disable(se,Ne),de&&!Ne&&de.kill(),l&&delete jf[l];var Ue=Je.indexOf(R);Ue>=0&&Je.splice(Ue,1),Ue===_n&&Bl>0&&_n--,Ue=0,Je.forEach(function(Ve){return Ve.scroller===R.scroller&&(Ue=1)}),Ue||vn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,se&&r.revert({kill:!1}),Ne||r.kill()),Ce&&[Ce,_e,H,Oe].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),so===R&&(so=0),d&&(he&&(he.uncache=1),Ue=0,Je.forEach(function(Ve){return Ve.pin===d&&Ue++}),Ue||(he.spacer=0)),n.onKill&&n.onKill(R)},Je.push(R),R.enable(!1,!1),Ye&&Ye(R),r&&r.add&&!B){var Pe=R.update;R.update=function(){R.update=Pe,ke||pe||R.refresh()},xe.delayedCall(.01,R.update),B=.01,ke=pe=0}else R.refresh();d&&sE()},i.register=function(n){return Ns||(xe=n||Kv(),Yv()&&window.document&&i.enable(),Ns=Wa),Ns},i.defaults=function(n){if(n)for(var r in n)Go[r]=n[r];return Go},i.disable=function(n,r){Wa=0,Je.forEach(function(a){return a[r?"kill":"disable"](n)}),$t(nt,"wheel",_s),$t(bt,"scroll",_s),clearInterval(No),$t(bt,"touchcancel",yi),$t(yt,"touchstart",yi),zo($t,bt,"pointerdown,touchstart,mousedown",lp),zo($t,bt,"pointerup,touchend,mouseup",cp),rc.kill(),Bo($t);for(var s=0;s<et.length;s+=3)ko($t,et[s],et[s+1]),ko($t,et[s],et[s+2])},i.enable=function(){if(nt=window,bt=document,fi=bt.documentElement,yt=bt.body,xe&&(po=xe.utils.toArray,eo=xe.utils.clamp,Xf=xe.core.context||yi,Jc=xe.core.suppressOverwrites||yi,$h=nt.history.scrollRestoration||"auto",Yf=nt.pageYOffset,xe.core.globals("ScrollTrigger",i),yt)){Wa=1,Ks=document.createElement("div"),Ks.style.height="100vh",Ks.style.position="absolute",s0(),JS(),Dt.register(xe),i.isTouch=Dt.isTouch,lr=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),$f=Dt.isTouch===1,Xt(nt,"wheel",_s),Wv=[nt,bt,fi,yt],xe.matchMedia?(i.matchMedia=function(l){var c=xe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},xe.addEventListener("matchMediaInit",function(){return Zh()}),xe.addEventListener("matchMediaRevert",function(){return i0()}),xe.addEventListener("matchMedia",function(){Wr(0,1),ls("matchMedia")}),xe.matchMedia("(orientation: portrait)",function(){return nu(),nu})):console.warn("Requires GSAP 3.11.0 or later"),nu(),Xt(bt,"scroll",_s);var n=yt.style,r=n.borderTopStyle,s=xe.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Hi(yt),Gt.m=Math.round(a.top+Gt.sc())||0,Sn.m=Math.round(a.left+Sn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),No=setInterval(hp,250),xe.delayedCall(.5,function(){return Fo=0}),Xt(bt,"touchcancel",yi),Xt(yt,"touchstart",yi),zo(Xt,bt,"pointerdown,touchstart,mousedown",lp),zo(Xt,bt,"pointerup,touchend,mouseup",cp),Wf=xe.utils.checkPrefix("transform"),zl.push(Wf),Ns=an(),rc=xe.delayedCall(.2,Wr).pause(),Fs=[bt,"visibilitychange",function(){var l=nt.innerWidth,c=nt.innerHeight;bt.hidden?(rp=l,sp=c):(rp!==l||sp!==c)&&qa()},bt,"DOMContentLoaded",Wr,nt,"load",Wr,nt,"resize",qa],Bo(Xt),Je.forEach(function(l){return l.enable(0,1)}),o=0;o<et.length;o+=3)ko($t,et[o],et[o+1]),ko($t,et[o],et[o+2])}},i.config=function(n){"limitCallbacks"in n&&(Qc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(No)||(No=r)&&setInterval(hp,r),"ignoreMobileResize"in n&&($f=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Bo($t)||Bo(Xt,n.autoRefreshEvents||"none"),Xv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=bn(n),a=et.indexOf(s),o=as(s);~a&&et.splice(a,o?6:2),r&&(o?Ri.unshift(nt,r,yt,r,fi,r):Ri.unshift(s,r))},i.clearMatchMedia=function(n){Je.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(Fn(n)?bn(n):n).getBoundingClientRect(),o=a[s?Zr:Jr]*r||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},i.positionInViewport=function(n,r,s){Fn(n)&&(n=bn(n));var a=n.getBoundingClientRect(),o=a[s?Zr:Jr],l=r==null?o/2:r in oc?oc[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},i.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=os.killAll||[];os={},r.forEach(function(s){return s()})}},i}();Xe.version="3.12.5";Xe.saveStyles=function(i){return i?po(i).forEach(function(e){if(e&&e.style){var t=Nn.indexOf(e);t>=0&&Nn.splice(t,5),Nn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),Xf())}}):Nn};Xe.revert=function(i,e){return Zh(!i,e)};Xe.create=function(i,e){return new Xe(i,e)};Xe.refresh=function(i){return i?qa():(Ns||Xe.register())&&Wr(!0)};Xe.update=function(i){return++et.cache&&qi(i===!0?2:0)};Xe.clearScrollMemory=r0;Xe.maxScroll=function(i,e){return Ai(i,e?Sn:Gt)};Xe.getScrollFunc=function(i,e){return Mr(bn(i),e?Sn:Gt)};Xe.getById=function(i){return jf[i]};Xe.getAll=function(){return Je.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!ii};Xe.snapDirectional=Kh;Xe.addEventListener=function(i,e){var t=os[i]||(os[i]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(i,e){var t=os[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Xe.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=xe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(_){f.length||d.restart(!0),f.push(_.trigger),h.push(_),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&En(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return En(s)&&(s=s(),Xt(Xe,"refresh",function(){return s=e.batchMax()})),po(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Xe.create(c))}),t};var vp=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},ru=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===fi&&i(yt,t)},$o={auto:1,scroll:1},uE=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||xe.core.getCache(s),o=an(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!($o[(l=Jn(s)).overflowY]||$o[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!as(s)&&($o[(l=Jn(s)).overflowY]||$o[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},o0=function(e,t,n,r){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&uE,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Xt(bt,Dt.eventTypes[0],yp,!1,!0)},onDisable:function(){return $t(bt,Dt.eventTypes[0],yp,!0)}})},fE=/(input|label|select|textarea)/i,xp,yp=function(e){var t=fE.test(e.target.tagName);(t||xp)&&(e._gsapAllow=!0,xp=t)},hE=function(e){Fr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=bn(e.target)||fi,u=xe.core.globals().ScrollSmoother,f=u&&u.get(),h=lr&&(e.content&&bn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Mr(c,Gt),_=Mr(c,Sn),g=1,p=(Dt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,m=0,S=En(r)?function(){return r(o)}:function(){return r||2.8},y,v,M=o0(c,e.type,!0,s),b=function(){return v=!1},E=yi,L=yi,I=function(){l=Ai(c,Gt),L=eo(lr?1:0,l),n&&(E=eo(0,Ai(c,Sn))),y=Qr},x=function(){h._gsap.y=$a(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},C=function(){if(v){requestAnimationFrame(b);var X=$a(o.deltaY/2),j=L(d.v-X);if(h&&j!==d.v+d.offset){d.offset=j-d.v;var R=$a((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=et.cache,qi()}return!0}d.offset&&x(),v=!0},O,Y,D,k,F=function(){I(),O.isActive()&&O.vars.scrollY>l&&(d()>l?O.progress(1)&&d(l):O.resetTo("scrollY",l))};return h&&xe.set(h,{y:"+=0"}),e.ignoreCheck=function($){return lr&&$.type==="touchmove"&&C()||g>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){v=!1;var $=g;g=$a((nt.visualViewport&&nt.visualViewport.scale||1)/p),O.pause(),$!==g&&ru(c,g>1.01?!0:n?!1:"x"),Y=_(),D=d(),I(),y=Qr},e.onRelease=e.onGestureStart=function($,X){if(d.offset&&x(),!X)k.restart(!0);else{et.cache++;var j=S(),R,K;n&&(R=_(),K=R+j*.05*-$.velocityX/.227,j*=vp(_,R,K,Ai(c,Sn)),O.vars.scrollX=E(K)),R=d(),K=R+j*.05*-$.velocityY/.227,j*=vp(d,R,K,Ai(c,Gt)),O.vars.scrollY=L(K),O.invalidate().duration(j).play(.01),(lr&&O.vars.scrollY>=l||R>=l-1)&&xe.to({},{onUpdate:F,duration:j})}a&&a($)},e.onWheel=function(){O._ts&&O.pause(),an()-m>1e3&&(y=0,m=an())},e.onChange=function($,X,j,R,K){if(Qr!==y&&I(),X&&n&&_(E(R[2]===X?Y+($.startX-$.x):_()+X-R[1])),j){d.offset&&x();var re=K[2]===j,Ie=re?D+$.startY-$.y:d()+j-K[1],W=L(Ie);re&&Ie!==W&&(D+=W-Ie),d(W)}(j||X)&&qi()},e.onEnable=function(){ru(c,n?!1:"x"),Xe.addEventListener("refresh",F),Xt(nt,"resize",F),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),M.enable()},e.onDisable=function(){ru(c,!0),$t(nt,"resize",F),Xe.removeEventListener("refresh",F),M.kill()},e.lockAxis=e.lockAxis!==!1,o=new Dt(e),o.iOS=lr,lr&&!d()&&d(1),lr&&xe.ticker.add(yi),k=o._dc,O=xe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:a0(d,d(),function(){return O.pause()})},onUpdate:qi,onComplete:k.vars.onComplete}),o};Xe.sort=function(i){return Je.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(i){return new Dt(i)};Xe.normalizeScroll=function(i){if(typeof i>"u")return gn;if(i===!0&&gn)return gn.enable();if(i===!1){gn&&gn.kill(),gn=i;return}var e=i instanceof Dt?i:hE(i);return gn&&gn.target===e.target&&gn.kill(),as(e.target)&&(gn=e),e};Xe.core={_getVelocityProp:Vf,_inputObserver:o0,_scrollers:et,_proxies:Ri,bridge:{ss:function(){ii||ls("scrollStart"),ii=an()},ref:function(){return sn}}};Kv()&&xe.registerPlugin(Xe);/*! *****************************************************************************
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
***************************************************************************** */var Zf=function(i,e){return Zf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Zf(i,e)};function dE(i,e){Zf(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Pi=function(){return Pi=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Pi.apply(this,arguments)};function kr(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function pE(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,r++)n[r]=s[a];return n}var Ft=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mE(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Qt=function(i){try{return!!i()}catch{return!0}},gE=Qt,Jh=!gE(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),l0=Jh,c0=Function.prototype,Jf=c0.call,_E=l0&&c0.bind.bind(Jf,Jf),Pt=l0?_E:function(i){return function(){return Jf.apply(i,arguments)}},u0=Pt,vE=u0({}.toString),xE=u0("".slice),pa=function(i){return xE(vE(i),8,-1)},yE=Pt,SE=Qt,EE=pa,su=Object,ME=yE("".split),Qh=SE(function(){return!su("z").propertyIsEnumerable(0)})?function(i){return EE(i)==="String"?ME(i,""):su(i)}:su,ma=function(i){return i==null},bE=ma,TE=TypeError,Mc=function(i){if(bE(i))throw new TE("Can't call method on "+i);return i},AE=Qh,wE=Mc,ga=function(i){return AE(wE(i))},wa=function(i){return i&&i.Math===Math&&i},$n=wa(typeof globalThis=="object"&&globalThis)||wa(typeof window=="object"&&window)||wa(typeof self=="object"&&self)||wa(typeof Ft=="object"&&Ft)||wa(typeof Ft=="object"&&Ft)||function(){return this}()||Function("return this")(),f0={exports:{}},CE=!1,Sp=$n,RE=Object.defineProperty,ed=function(i,e){try{RE(Sp,i,{value:e,configurable:!0,writable:!0})}catch{Sp[i]=e}return e},PE=$n,LE=ed,Ep="__core-js_shared__",Mp=f0.exports=PE[Ep]||LE(Ep,{});(Mp.versions||(Mp.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var td=f0.exports,bp=td,h0=function(i,e){return bp[i]||(bp[i]=e||{})},DE=Mc,IE=Object,So=function(i){return IE(DE(i))},OE=Pt,UE=So,NE=OE({}.hasOwnProperty),mi=Object.hasOwn||function(e,t){return NE(UE(e),t)},FE=Pt,BE=0,zE=Math.random(),kE=FE(1 .toString),nd=function(i){return"Symbol("+(i===void 0?"":i)+")_"+kE(++BE+zE,36)},GE=typeof navigator<"u"&&String(navigator.userAgent)||"",d0=$n,au=GE,Tp=d0.process,Ap=d0.Deno,wp=Tp&&Tp.versions||Ap&&Ap.version,Cp=wp&&wp.v8,hi,lc;Cp&&(hi=Cp.split("."),lc=hi[0]>0&&hi[0]<4?1:+(hi[0]+hi[1]));!lc&&au&&(hi=au.match(/Edge\/(\d+)/),(!hi||hi[1]>=74)&&(hi=au.match(/Chrome\/(\d+)/),hi&&(lc=+hi[1])));var HE=lc,Rp=HE,VE=Qt,WE=$n,$E=WE.String,p0=!!Object.getOwnPropertySymbols&&!VE(function(){var i=Symbol("symbol detection");return!$E(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&Rp&&Rp<41}),XE=p0,m0=XE&&!Symbol.sham&&typeof Symbol.iterator=="symbol",qE=$n,jE=h0,Pp=mi,YE=nd,KE=p0,ZE=m0,Hs=qE.Symbol,ou=jE("wks"),JE=ZE?Hs.for||Hs:Hs&&Hs.withoutSetter||YE,ai=function(i){return Pp(ou,i)||(ou[i]=KE&&Pp(Hs,i)?Hs[i]:JE("Symbol."+i)),ou[i]},lu=typeof document=="object"&&document.all,en=typeof lu>"u"&&lu!==void 0?function(i){return typeof i=="function"||i===lu}:function(i){return typeof i=="function"},QE=en,Dn=function(i){return typeof i=="object"?i!==null:QE(i)},eM=Dn,tM=String,nM=TypeError,Ii=function(i){if(eM(i))return i;throw new nM(tM(i)+" is not an object")},g0={},iM=Qt,Xn=!iM(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),rM=Xn,sM=Qt,_0=rM&&sM(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),gi={},aM=$n,Lp=Dn,Qf=aM.document,oM=Lp(Qf)&&Lp(Qf.createElement),v0=function(i){return oM?Qf.createElement(i):{}},lM=Xn,cM=Qt,uM=v0,x0=!lM&&!cM(function(){return Object.defineProperty(uM("div"),"a",{get:function(){return 7}}).a!==7}),fM=Jh,Xo=Function.prototype.call,Qi=fM?Xo.bind(Xo):function(){return Xo.apply(Xo,arguments)},cu=$n,hM=en,dM=function(i){return hM(i)?i:void 0},Eo=function(i,e){return arguments.length<2?dM(cu[i]):cu[i]&&cu[i][e]},pM=Pt,id=pM({}.isPrototypeOf),mM=Eo,gM=en,_M=id,vM=m0,xM=Object,y0=vM?function(i){return typeof i=="symbol"}:function(i){var e=mM("Symbol");return gM(e)&&_M(e.prototype,xM(i))},yM=String,rd=function(i){try{return yM(i)}catch{return"Object"}},SM=en,EM=rd,MM=TypeError,Mo=function(i){if(SM(i))return i;throw new MM(EM(i)+" is not a function")},bM=Mo,TM=ma,sd=function(i,e){var t=i[e];return TM(t)?void 0:bM(t)},uu=Qi,fu=en,hu=Dn,AM=TypeError,wM=function(i,e){var t,n;if(e==="string"&&fu(t=i.toString)&&!hu(n=uu(t,i))||fu(t=i.valueOf)&&!hu(n=uu(t,i))||e!=="string"&&fu(t=i.toString)&&!hu(n=uu(t,i)))return n;throw new AM("Can't convert object to primitive value")},CM=Qi,Dp=Dn,Ip=y0,RM=sd,PM=wM,LM=ai,DM=TypeError,IM=LM("toPrimitive"),OM=function(i,e){if(!Dp(i)||Ip(i))return i;var t=RM(i,IM),n;if(t){if(e===void 0&&(e="default"),n=CM(t,i,e),!Dp(n)||Ip(n))return n;throw new DM("Can't convert object to primitive value")}return e===void 0&&(e="number"),PM(i,e)},UM=OM,NM=y0,S0=function(i){var e=UM(i,"string");return NM(e)?e:e+""},FM=Xn,BM=x0,zM=_0,qo=Ii,Op=S0,kM=TypeError,du=Object.defineProperty,GM=Object.getOwnPropertyDescriptor,pu="enumerable",mu="configurable",gu="writable";gi.f=FM?zM?function(e,t,n){if(qo(e),t=Op(t),qo(n),typeof e=="function"&&t==="prototype"&&"value"in n&&gu in n&&!n[gu]){var r=GM(e,t);r&&r[gu]&&(e[t]=n.value,n={configurable:mu in n?n[mu]:r[mu],enumerable:pu in n?n[pu]:r[pu],writable:!1})}return du(e,t,n)}:du:function(e,t,n){if(qo(e),t=Op(t),qo(n),BM)try{return du(e,t,n)}catch{}if("get"in n||"set"in n)throw new kM("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var HM=Math.ceil,VM=Math.floor,WM=Math.trunc||function(e){var t=+e;return(t>0?VM:HM)(t)},$M=WM,ad=function(i){var e=+i;return e!==e||e===0?0:$M(e)},XM=ad,qM=Math.max,jM=Math.min,YM=function(i,e){var t=XM(i);return t<0?qM(t+e,0):jM(t,e)},KM=ad,ZM=Math.min,JM=function(i){var e=KM(i);return e>0?ZM(e,9007199254740991):0},QM=JM,bc=function(i){return QM(i.length)},eb=ga,tb=YM,nb=bc,Up=function(i){return function(e,t,n){var r=eb(e),s=nb(r);if(s===0)return!i&&-1;var a=tb(n,s),o;if(i&&t!==t){for(;s>a;)if(o=r[a++],o!==o)return!0}else for(;s>a;a++)if((i||a in r)&&r[a]===t)return i||a||0;return!i&&-1}},ib={includes:Up(!0),indexOf:Up(!1)},Tc={},rb=Pt,_u=mi,sb=ga,ab=ib.indexOf,ob=Tc,Np=rb([].push),E0=function(i,e){var t=sb(i),n=0,r=[],s;for(s in t)!_u(ob,s)&&_u(t,s)&&Np(r,s);for(;e.length>n;)_u(t,s=e[n++])&&(~ab(r,s)||Np(r,s));return r},od=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],lb=E0,cb=od,M0=Object.keys||function(e){return lb(e,cb)},ub=Xn,fb=_0,hb=gi,db=Ii,pb=ga,mb=M0;g0.f=ub&&!fb?Object.defineProperties:function(e,t){db(e);for(var n=pb(t),r=mb(t),s=r.length,a=0,o;s>a;)hb.f(e,o=r[a++],n[o]);return e};var gb=Eo,_b=gb("document","documentElement"),vb=h0,xb=nd,Fp=vb("keys"),ld=function(i){return Fp[i]||(Fp[i]=xb(i))},yb=Ii,Sb=g0,Bp=od,Eb=Tc,Mb=_b,bb=v0,Tb=ld,zp=">",kp="<",eh="prototype",th="script",b0=Tb("IE_PROTO"),vu=function(){},T0=function(i){return kp+th+zp+i+kp+"/"+th+zp},Gp=function(i){i.write(T0("")),i.close();var e=i.parentWindow.Object;return i=null,e},Ab=function(){var i=bb("iframe"),e="java"+th+":",t;return i.style.display="none",Mb.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(T0("document.F=Object")),t.close(),t.F},jo,Gl=function(){try{jo=new ActiveXObject("htmlfile")}catch{}Gl=typeof document<"u"?document.domain&&jo?Gp(jo):Ab():Gp(jo);for(var i=Bp.length;i--;)delete Gl[eh][Bp[i]];return Gl()};Eb[b0]=!0;var cd=Object.create||function(e,t){var n;return e!==null?(vu[eh]=yb(e),n=new vu,vu[eh]=null,n[b0]=e):n=Gl(),t===void 0?n:Sb.f(n,t)},wb=ai,Cb=cd,Rb=gi.f,nh=wb("unscopables"),ih=Array.prototype;ih[nh]===void 0&&Rb(ih,nh,{configurable:!0,value:Cb(null)});var Pb=function(i){ih[nh][i]=!0},bo={},Lb=$n,Db=en,Hp=Lb.WeakMap,A0=Db(Hp)&&/native code/.test(String(Hp)),Ac=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},Ib=Xn,Ob=gi,Ub=Ac,ud=Ib?function(i,e,t){return Ob.f(i,e,Ub(1,t))}:function(i,e,t){return i[e]=t,i},Nb=A0,w0=$n,Fb=Dn,Bb=ud,xu=mi,yu=td,zb=ld,kb=Tc,Vp="Object already initialized",rh=w0.TypeError,Gb=w0.WeakMap,cc,go,uc,Hb=function(i){return uc(i)?go(i):cc(i,{})},Vb=function(i){return function(e){var t;if(!Fb(e)||(t=go(e)).type!==i)throw new rh("Incompatible receiver, "+i+" required");return t}};if(Nb||yu.state){var _i=yu.state||(yu.state=new Gb);_i.get=_i.get,_i.has=_i.has,_i.set=_i.set,cc=function(i,e){if(_i.has(i))throw new rh(Vp);return e.facade=i,_i.set(i,e),e},go=function(i){return _i.get(i)||{}},uc=function(i){return _i.has(i)}}else{var vs=zb("state");kb[vs]=!0,cc=function(i,e){if(xu(i,vs))throw new rh(Vp);return e.facade=i,Bb(i,vs,e),e},go=function(i){return xu(i,vs)?i[vs]:{}},uc=function(i){return xu(i,vs)}}var _a={set:cc,get:go,has:uc,enforce:Hb,getterFor:Vb},fd={},hd={},C0={}.propertyIsEnumerable,R0=Object.getOwnPropertyDescriptor,Wb=R0&&!C0.call({1:2},1);hd.f=Wb?function(e){var t=R0(this,e);return!!t&&t.enumerable}:C0;var $b=Xn,Xb=Qi,qb=hd,jb=Ac,Yb=ga,Kb=S0,Zb=mi,Jb=x0,Wp=Object.getOwnPropertyDescriptor;fd.f=$b?Wp:function(e,t){if(e=Yb(e),t=Kb(t),Jb)try{return Wp(e,t)}catch{}if(Zb(e,t))return jb(!Xb(qb.f,e,t),e[t])};var P0={exports:{}},sh=Xn,Qb=mi,L0=Function.prototype,eT=sh&&Object.getOwnPropertyDescriptor,dd=Qb(L0,"name"),tT=dd&&(function(){}).name==="something",nT=dd&&(!sh||sh&&eT(L0,"name").configurable),D0={EXISTS:dd,PROPER:tT,CONFIGURABLE:nT},iT=Pt,rT=en,ah=td,sT=iT(Function.toString);rT(ah.inspectSource)||(ah.inspectSource=function(i){return sT(i)});var I0=ah.inspectSource,pd=Pt,aT=Qt,oT=en,Yo=mi,oh=Xn,lT=D0.CONFIGURABLE,cT=I0,O0=_a,uT=O0.enforce,fT=O0.get,$p=String,Hl=Object.defineProperty,hT=pd("".slice),dT=pd("".replace),pT=pd([].join),mT=oh&&!aT(function(){return Hl(function(){},"length",{value:8}).length!==8}),gT=String(String).split("String"),_T=P0.exports=function(i,e,t){hT($p(e),0,7)==="Symbol("&&(e="["+dT($p(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Yo(i,"name")||lT&&i.name!==e)&&(oh?Hl(i,"name",{value:e,configurable:!0}):i.name=e),mT&&t&&Yo(t,"arity")&&i.length!==t.arity&&Hl(i,"length",{value:t.arity});try{t&&Yo(t,"constructor")&&t.constructor?oh&&Hl(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=uT(i);return Yo(n,"source")||(n.source=pT(gT,typeof e=="string"?e:"")),i};Function.prototype.toString=_T(function(){return oT(this)&&fT(this).source||cT(this)},"toString");var U0=P0.exports,vT=en,xT=gi,yT=U0,ST=ed,va=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(vT(t)&&yT(t,s,n),n.global)r?i[e]=t:ST(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:xT.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},wc={},ET=E0,MT=od,bT=MT.concat("length","prototype");wc.f=Object.getOwnPropertyNames||function(e){return ET(e,bT)};var md={};md.f=Object.getOwnPropertySymbols;var TT=Eo,AT=Pt,wT=wc,CT=md,RT=Ii,PT=AT([].concat),LT=TT("Reflect","ownKeys")||function(e){var t=wT.f(RT(e)),n=CT.f;return n?PT(t,n(e)):t},Xp=mi,DT=LT,IT=fd,OT=gi,UT=function(i,e,t){for(var n=DT(e),r=OT.f,s=IT.f,a=0;a<n.length;a++){var o=n[a];!Xp(i,o)&&!(t&&Xp(t,o))&&r(i,o,s(e,o))}},NT=Qt,FT=en,BT=/#|\.prototype\./,To=function(i,e){var t=kT[zT(i)];return t===HT?!0:t===GT?!1:FT(e)?NT(e):!!e},zT=To.normalize=function(i){return String(i).replace(BT,".").toLowerCase()},kT=To.data={},GT=To.NATIVE="N",HT=To.POLYFILL="P",N0=To,Ko=$n,VT=fd.f,WT=ud,$T=va,XT=ed,qT=UT,jT=N0,xa=function(i,e){var t=i.target,n=i.global,r=i.stat,s,a,o,l,c,u;if(n?a=Ko:r?a=Ko[t]||XT(t,{}):a=Ko[t]&&Ko[t].prototype,a)for(o in e){if(c=e[o],i.dontCallGetSet?(u=VT(a,o),l=u&&u.value):l=a[o],s=jT(n?o:t+(r?".":"#")+o,i.forced),!s&&l!==void 0){if(typeof c==typeof l)continue;qT(c,l)}(i.sham||l&&l.sham)&&WT(c,"sham",!0),$T(a,o,c,i)}},YT=Qt,KT=!YT(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),ZT=mi,JT=en,QT=So,eA=ld,tA=KT,qp=eA("IE_PROTO"),lh=Object,nA=lh.prototype,F0=tA?lh.getPrototypeOf:function(i){var e=QT(i);if(ZT(e,qp))return e[qp];var t=e.constructor;return JT(t)&&e instanceof t?t.prototype:e instanceof lh?nA:null},iA=Qt,rA=en,sA=Dn,jp=F0,aA=va,oA=ai,ch=oA("iterator"),B0=!1,cs,Su,Eu;[].keys&&(Eu=[].keys(),"next"in Eu?(Su=jp(jp(Eu)),Su!==Object.prototype&&(cs=Su)):B0=!0);var lA=!sA(cs)||iA(function(){var i={};return cs[ch].call(i)!==i});lA&&(cs={});rA(cs[ch])||aA(cs,ch,function(){return this});var z0={IteratorPrototype:cs,BUGGY_SAFARI_ITERATORS:B0},cA=gi.f,uA=mi,fA=ai,Yp=fA("toStringTag"),gd=function(i,e,t){i&&!t&&(i=i.prototype),i&&!uA(i,Yp)&&cA(i,Yp,{configurable:!0,value:e})},hA=z0.IteratorPrototype,dA=cd,pA=Ac,mA=gd,gA=bo,_A=function(){return this},vA=function(i,e,t,n){var r=e+" Iterator";return i.prototype=dA(hA,{next:pA(+!n,t)}),mA(i,r,!1),gA[r]=_A,i},xA=Pt,yA=Mo,SA=function(i,e,t){try{return xA(yA(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},EA=Dn,MA=function(i){return EA(i)||i===null},bA=MA,TA=String,AA=TypeError,wA=function(i){if(bA(i))return i;throw new AA("Can't set "+TA(i)+" as a prototype")},CA=SA,RA=Ii,PA=wA,k0=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=CA(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return RA(r),PA(s),i?t(r,s):r.__proto__=s,r}}():void 0),LA=xa,DA=Qi,G0=D0,IA=en,OA=vA,Kp=F0,Zp=k0,UA=gd,NA=ud,Mu=va,FA=ai,BA=bo,H0=z0,zA=G0.PROPER,kA=G0.CONFIGURABLE,Jp=H0.IteratorPrototype,Zo=H0.BUGGY_SAFARI_ITERATORS,Ca=FA("iterator"),Qp="keys",Ra="values",em="entries",GA=function(){return this},_d=function(i,e,t,n,r,s,a){OA(t,e,n);var o=function(m){if(m===r&&h)return h;if(!Zo&&m&&m in u)return u[m];switch(m){case Qp:return function(){return new t(this,m)};case Ra:return function(){return new t(this,m)};case em:return function(){return new t(this,m)}}return function(){return new t(this)}},l=e+" Iterator",c=!1,u=i.prototype,f=u[Ca]||u["@@iterator"]||r&&u[r],h=!Zo&&f||o(r),d=e==="Array"&&u.entries||f,_,g,p;if(d&&(_=Kp(d.call(new i)),_!==Object.prototype&&_.next&&(Kp(_)!==Jp&&(Zp?Zp(_,Jp):IA(_[Ca])||Mu(_,Ca,GA)),UA(_,l,!0))),zA&&r===Ra&&f&&f.name!==Ra&&(kA?NA(u,"name",Ra):(c=!0,h=function(){return DA(f,this)})),r)if(g={values:o(Ra),keys:s?h:o(Qp),entries:o(em)},a)for(p in g)(Zo||c||!(p in u))&&Mu(u,p,g[p]);else LA({target:e,proto:!0,forced:Zo||c},g);return u[Ca]!==h&&Mu(u,Ca,h,{name:r}),BA[e]=h,g},vd=function(i,e){return{value:i,done:e}},HA=ga,xd=Pb,tm=bo,V0=_a,VA=gi.f,WA=_d,Jo=vd,$A=Xn,W0="Array Iterator",XA=V0.set,qA=V0.getterFor(W0);WA(Array,"Array",function(i,e){XA(this,{type:W0,target:HA(i),index:0,kind:e})},function(){var i=qA(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,Jo(void 0,!0);switch(i.kind){case"keys":return Jo(t,!1);case"values":return Jo(e[t],!1)}return Jo([t,e[t]],!1)},"values");var nm=tm.Arguments=tm.Array;xd("keys");xd("values");xd("entries");if($A&&nm.name!=="values")try{VA(nm,"name",{value:"values"})}catch{}var $0={exports:{}},X0={},jA=Pt,YA=jA([].slice),KA=pa,ZA=ga,q0=wc.f,JA=YA,j0=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],QA=function(i){try{return q0(i)}catch{return JA(j0)}};X0.f=function(e){return j0&&KA(e)==="Window"?QA(e):q0(ZA(e))};var ew=Qt,tw=ew(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),nw=Qt,iw=Dn,rw=pa,im=tw,Vl=Object.isExtensible,sw=nw(function(){Vl(1)}),aw=sw||im?function(e){return!iw(e)||im&&rw(e)==="ArrayBuffer"?!1:Vl?Vl(e):!0}:Vl,ow=Qt,Y0=!ow(function(){return Object.isExtensible(Object.preventExtensions({}))}),lw=xa,cw=Pt,uw=Tc,fw=Dn,yd=mi,hw=gi.f,rm=wc,dw=X0,Sd=aw,pw=nd,mw=Y0,K0=!1,Ki=pw("meta"),gw=0,Ed=function(i){hw(i,Ki,{value:{objectID:"O"+gw++,weakData:{}}})},_w=function(i,e){if(!fw(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!yd(i,Ki)){if(!Sd(i))return"F";if(!e)return"E";Ed(i)}return i[Ki].objectID},vw=function(i,e){if(!yd(i,Ki)){if(!Sd(i))return!0;if(!e)return!1;Ed(i)}return i[Ki].weakData},xw=function(i){return mw&&K0&&Sd(i)&&!yd(i,Ki)&&Ed(i),i},yw=function(){Sw.enable=function(){},K0=!0;var i=rm.f,e=cw([].splice),t={};t[Ki]=1,i(t).length&&(rm.f=function(n){for(var r=i(n),s=0,a=r.length;s<a;s++)if(r[s]===Ki){e(r,s,1);break}return r},lw({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:dw.f}))},Sw=$0.exports={enable:yw,fastKey:_w,getWeakData:vw,onFreeze:xw};uw[Ki]=!0;var Cc=$0.exports,Ew=pa,Mw=Pt,bw=function(i){if(Ew(i)==="Function")return Mw(i)},sm=bw,Tw=Mo,Aw=Jh,ww=sm(sm.bind),Rc=function(i,e){return Tw(i),e===void 0?i:Aw?ww(i,e):function(){return i.apply(e,arguments)}},Cw=ai,Rw=bo,Pw=Cw("iterator"),Lw=Array.prototype,Z0=function(i){return i!==void 0&&(Rw.Array===i||Lw[Pw]===i)},Dw=ai,Iw=Dw("toStringTag"),J0={};J0[Iw]="z";var Md=String(J0)==="[object z]",Ow=Md,Uw=en,Wl=pa,Nw=ai,Fw=Nw("toStringTag"),Bw=Object,zw=Wl(function(){return arguments}())==="Arguments",kw=function(i,e){try{return i[e]}catch{}},Pc=Ow?Wl:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=kw(e=Bw(i),Fw))=="string"?t:zw?Wl(e):(n=Wl(e))==="Object"&&Uw(e.callee)?"Arguments":n},Gw=Pc,am=sd,Hw=ma,Vw=bo,Ww=ai,$w=Ww("iterator"),bd=function(i){if(!Hw(i))return am(i,$w)||am(i,"@@iterator")||Vw[Gw(i)]},Xw=Qi,qw=Mo,jw=Ii,Yw=rd,Kw=bd,Zw=TypeError,Q0=function(i,e){var t=arguments.length<2?Kw(i):e;if(qw(t))return jw(Xw(t,i));throw new Zw(Yw(i)+" is not iterable")},Jw=Qi,om=Ii,Qw=sd,ex=function(i,e,t){var n,r;om(i);try{if(n=Qw(i,"return"),!n){if(e==="throw")throw t;return t}n=Jw(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return om(n),t},e1=Rc,t1=Qi,n1=Ii,i1=rd,r1=Z0,s1=bc,lm=id,a1=Q0,o1=bd,cm=ex,l1=TypeError,$l=function(i,e){this.stopped=i,this.result=e},um=$l.prototype,Lc=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),a=!!(t&&t.IS_ITERATOR),o=!!(t&&t.INTERRUPTED),l=e1(e,n),c,u,f,h,d,_,g,p=function(S){return c&&cm(c,"normal",S),new $l(!0,S)},m=function(S){return r?(n1(S),o?l(S[0],S[1],p):l(S[0],S[1])):o?l(S,p):l(S)};if(s)c=i.iterator;else if(a)c=i;else{if(u=o1(i),!u)throw new l1(i1(i)+" is not iterable");if(r1(u)){for(f=0,h=s1(i);h>f;f++)if(d=m(i[f]),d&&lm(um,d))return d;return new $l(!1)}c=a1(i,u)}for(_=s?i.next:c.next;!(g=t1(_,c)).done;){try{d=m(g.value)}catch(S){cm(c,"throw",S)}if(typeof d=="object"&&d&&lm(um,d))return d}return new $l(!1)},c1=id,u1=TypeError,Td=function(i,e){if(c1(e,i))return i;throw new u1("Incorrect invocation")},f1=ai,tx=f1("iterator"),nx=!1;try{var h1=0,fm={next:function(){return{done:!!h1++}},return:function(){nx=!0}};fm[tx]=function(){return this},Array.from(fm,function(){throw 2})}catch{}var ix=function(i,e){try{if(!e&&!nx)return!1}catch{return!1}var t=!1;try{var n={};n[tx]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},d1=en,p1=Dn,hm=k0,m1=function(i,e,t){var n,r;return hm&&d1(n=e.constructor)&&n!==t&&p1(r=n.prototype)&&r!==t.prototype&&hm(i,r),i},g1=xa,_1=$n,v1=Pt,dm=N0,x1=va,y1=Cc,S1=Lc,E1=Td,M1=en,b1=ma,bu=Dn,Tu=Qt,T1=ix,A1=gd,w1=m1,Ad=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",a=_1[i],o=a&&a.prototype,l=a,c={},u=function(m){var S=v1(o[m]);x1(o,m,m==="add"?function(v){return S(this,v===0?0:v),this}:m==="delete"?function(y){return r&&!bu(y)?!1:S(this,y===0?0:y)}:m==="get"?function(v){return r&&!bu(v)?void 0:S(this,v===0?0:v)}:m==="has"?function(v){return r&&!bu(v)?!1:S(this,v===0?0:v)}:function(v,M){return S(this,v===0?0:v,M),this})},f=dm(i,!M1(a)||!(r||o.forEach&&!Tu(function(){new a().entries().next()})));if(f)l=t.getConstructor(e,i,n,s),y1.enable();else if(dm(i,!0)){var h=new l,d=h[s](r?{}:-0,1)!==h,_=Tu(function(){h.has(1)}),g=T1(function(m){new a(m)}),p=!r&&Tu(function(){for(var m=new a,S=5;S--;)m[s](S,S);return!m.has(-0)});g||(l=e(function(m,S){E1(m,o);var y=w1(new a,m,l);return b1(S)||S1(S,y[s],{that:y,AS_ENTRIES:n}),y}),l.prototype=o,o.constructor=l),(_||p)&&(u("delete"),u("has"),n&&u("get")),(p||d)&&u(s),r&&o.clear&&delete o.clear}return c[i]=l,g1({global:!0,constructor:!0,forced:l!==a},c),A1(l,i),r||t.setStrong(l,i,n),l},pm=U0,C1=gi,rx=function(i,e,t){return t.get&&pm(t.get,e,{getter:!0}),t.set&&pm(t.set,e,{setter:!0}),C1.f(i,e,t)},R1=va,wd=function(i,e,t){for(var n in e)R1(i,n,e[n],t);return i},P1=Eo,L1=rx,D1=ai,I1=Xn,mm=D1("species"),O1=function(i){var e=P1(i);I1&&e&&!e[mm]&&L1(e,mm,{configurable:!0,get:function(){return this}})},gm=cd,U1=rx,_m=wd,N1=Rc,F1=Td,B1=ma,z1=Lc,k1=_d,Qo=vd,G1=O1,Pa=Xn,vm=Cc.fastKey,sx=_a,xm=sx.set,Au=sx.getterFor,ax={getConstructor:function(i,e,t,n){var r=i(function(c,u){F1(c,s),xm(c,{type:e,index:gm(null),first:void 0,last:void 0,size:0}),Pa||(c.size=0),B1(u)||z1(u,c[n],{that:c,AS_ENTRIES:t})}),s=r.prototype,a=Au(e),o=function(c,u,f){var h=a(c),d=l(c,u),_,g;return d?d.value=f:(h.last=d={index:g=vm(u,!0),key:u,value:f,previous:_=h.last,next:void 0,removed:!1},h.first||(h.first=d),_&&(_.next=d),Pa?h.size++:c.size++,g!=="F"&&(h.index[g]=d)),c},l=function(c,u){var f=a(c),h=vm(u),d;if(h!=="F")return f.index[h];for(d=f.first;d;d=d.next)if(d.key===u)return d};return _m(s,{clear:function(){for(var u=this,f=a(u),h=f.first;h;)h.removed=!0,h.previous&&(h.previous=h.previous.next=void 0),h=h.next;f.first=f.last=void 0,f.index=gm(null),Pa?f.size=0:u.size=0},delete:function(c){var u=this,f=a(u),h=l(u,c);if(h){var d=h.next,_=h.previous;delete f.index[h.index],h.removed=!0,_&&(_.next=d),d&&(d.previous=_),f.first===h&&(f.first=d),f.last===h&&(f.last=_),Pa?f.size--:u.size--}return!!h},forEach:function(u){for(var f=a(this),h=N1(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:f.first;)for(h(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!l(this,u)}}),_m(s,t?{get:function(u){var f=l(this,u);return f&&f.value},set:function(u,f){return o(this,u===0?0:u,f)}}:{add:function(u){return o(this,u=u===0?0:u,u)}}),Pa&&U1(s,"size",{configurable:!0,get:function(){return a(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=Au(e),s=Au(n);k1(i,e,function(a,o){xm(this,{type:n,target:a,state:r(a),kind:o,last:void 0})},function(){for(var a=s(this),o=a.kind,l=a.last;l&&l.removed;)l=l.previous;return!a.target||!(a.last=l=l?l.next:a.state.first)?(a.target=void 0,Qo(void 0,!0)):Qo(o==="keys"?l.key:o==="values"?l.value:[l.key,l.value],!1)},t?"entries":"values",!t,!0),G1(e)}},H1=Ad,V1=ax;H1("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},V1);var el=Pt,La=Map.prototype,W1={Map,set:el(La.set),get:el(La.get),has:el(La.has),remove:el(La.delete),proto:La},$1=xa,X1=Pt,q1=Mo,j1=Mc,Y1=Lc,Dc=W1,K1=CE,Z1=Dc.Map,J1=Dc.has,Q1=Dc.get,eC=Dc.set,tC=X1([].push);$1({target:"Map",stat:!0,forced:K1},{groupBy:function(e,t){j1(e),q1(t);var n=new Z1,r=0;return Y1(e,function(s){var a=t(s,r++);J1(n,a)?tC(Q1(n,a),s):eC(n,a,[s])}),n}});var nC=Md,iC=Pc,rC=nC?{}.toString:function(){return"[object "+iC(this)+"]"},sC=Md,aC=va,oC=rC;sC||aC(Object.prototype,"toString",oC,{unsafe:!0});var lC=Pc,cC=String,ox=function(i){if(lC(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return cC(i)},Cd=Pt,uC=ad,fC=ox,hC=Mc,dC=Cd("".charAt),ym=Cd("".charCodeAt),pC=Cd("".slice),Sm=function(i){return function(e,t){var n=fC(hC(e)),r=uC(t),s=n.length,a,o;return r<0||r>=s?i?"":void 0:(a=ym(n,r),a<55296||a>56319||r+1===s||(o=ym(n,r+1))<56320||o>57343?i?dC(n,r):a:i?pC(n,r,r+2):(a-55296<<10)+(o-56320)+65536)}},mC={codeAt:Sm(!1),charAt:Sm(!0)},gC=mC.charAt,_C=ox,lx=_a,vC=_d,Em=vd,cx="String Iterator",xC=lx.set,yC=lx.getterFor(cx);vC(String,"String",function(i){xC(this,{type:cx,string:_C(i),index:0})},function(){var e=yC(this),t=e.string,n=e.index,r;return n>=t.length?Em(void 0,!0):(r=gC(t,n),e.index+=r.length,Em(r,!1))});var SC=$n,Ao=SC,EC=Ao;EC.Map;var MC=Ad,bC=ax;MC("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},bC);var TC=Ao;TC.Set;var AC=pa,wC=Array.isArray||function(e){return AC(e)==="Array"},CC=Pt,RC=Qt,ux=en,PC=Pc,LC=Eo,DC=I0,fx=function(){},hx=LC("Reflect","construct"),Rd=/^\s*(?:class|function)\b/,IC=CC(Rd.exec),OC=!Rd.test(fx),Da=function(e){if(!ux(e))return!1;try{return hx(fx,[],e),!0}catch{return!1}},dx=function(e){if(!ux(e))return!1;switch(PC(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return OC||!!IC(Rd,DC(e))}catch{return!0}};dx.sham=!0;var px=!hx||RC(function(){var i;return Da(Da.call)||!Da(Object)||!Da(function(){i=!0})||i})?dx:Da,Mm=wC,UC=px,NC=Dn,FC=ai,BC=FC("species"),bm=Array,zC=function(i){var e;return Mm(i)&&(e=i.constructor,UC(e)&&(e===bm||Mm(e.prototype))?e=void 0:NC(e)&&(e=e[BC],e===null&&(e=void 0))),e===void 0?bm:e},kC=zC,GC=function(i,e){return new(kC(i))(e===0?0:e)},HC=Rc,VC=Pt,WC=Qh,$C=So,XC=bc,qC=GC,Tm=VC([].push),er=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,s=i===6,a=i===7,o=i===5||s;return function(l,c,u,f){for(var h=$C(l),d=WC(h),_=XC(d),g=HC(c,u),p=0,m=f||qC,S=e?m(l,_):t||a?m(l,0):void 0,y,v;_>p;p++)if((o||p in d)&&(y=d[p],v=g(y,p,h),i))if(e)S[p]=v;else if(v)switch(i){case 3:return!0;case 5:return y;case 6:return p;case 2:Tm(S,y)}else switch(i){case 4:return!1;case 7:Tm(S,y)}return s?-1:n||r?r:S}},jC={forEach:er(0),map:er(1),filter:er(2),some:er(3),every:er(4),find:er(5),findIndex:er(6),filterReject:er(7)},YC=Pt,Am=wd,tl=Cc.getWeakData,KC=Td,ZC=Ii,JC=ma,wu=Dn,QC=Lc,mx=jC,wm=mi,gx=_a,eR=gx.set,tR=gx.getterFor,nR=mx.find,iR=mx.findIndex,rR=YC([].splice),sR=0,nl=function(i){return i.frozen||(i.frozen=new _x)},_x=function(){this.entries=[]},Cu=function(i,e){return nR(i.entries,function(t){return t[0]===e})};_x.prototype={get:function(i){var e=Cu(this,i);if(e)return e[1]},has:function(i){return!!Cu(this,i)},set:function(i,e){var t=Cu(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=iR(this.entries,function(t){return t[0]===i});return~e&&rR(this.entries,e,1),!!~e}};var aR={getConstructor:function(i,e,t,n){var r=i(function(l,c){KC(l,s),eR(l,{type:e,id:sR++,frozen:void 0}),JC(c)||QC(c,l[n],{that:l,AS_ENTRIES:t})}),s=r.prototype,a=tR(e),o=function(l,c,u){var f=a(l),h=tl(ZC(c),!0);return h===!0?nl(f).set(c,u):h[f.id]=u,l};return Am(s,{delete:function(l){var c=a(this);if(!wu(l))return!1;var u=tl(l);return u===!0?nl(c).delete(l):u&&wm(u,c.id)&&delete u[c.id]},has:function(c){var u=a(this);if(!wu(c))return!1;var f=tl(c);return f===!0?nl(u).has(c):f&&wm(f,u.id)}}),Am(s,t?{get:function(c){var u=a(this);if(wu(c)){var f=tl(c);return f===!0?nl(u).get(c):f?f[u.id]:void 0}},set:function(c,u){return o(this,c,u)}}:{add:function(c){return o(this,c,!0)}}),r}},oR=Y0,Cm=$n,Xl=Pt,Rm=wd,lR=Cc,cR=Ad,vx=aR,il=Dn,rl=_a.enforce,uR=Qt,fR=A0,wo=Object,hR=Array.isArray,sl=wo.isExtensible,xx=wo.isFrozen,dR=wo.isSealed,yx=wo.freeze,pR=wo.seal,mR=!Cm.ActiveXObject&&"ActiveXObject"in Cm,Ia,Sx=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Ex=cR("WeakMap",Sx,vx),Bs=Ex.prototype,ql=Xl(Bs.set),gR=function(){return oR&&uR(function(){var i=yx([]);return ql(new Ex,i,1),!xx(i)})};if(fR)if(mR){Ia=vx.getConstructor(Sx,"WeakMap",!0),lR.enable();var Pm=Xl(Bs.delete),al=Xl(Bs.has),Lm=Xl(Bs.get);Rm(Bs,{delete:function(i){if(il(i)&&!sl(i)){var e=rl(this);return e.frozen||(e.frozen=new Ia),Pm(this,i)||e.frozen.delete(i)}return Pm(this,i)},has:function(e){if(il(e)&&!sl(e)){var t=rl(this);return t.frozen||(t.frozen=new Ia),al(this,e)||t.frozen.has(e)}return al(this,e)},get:function(e){if(il(e)&&!sl(e)){var t=rl(this);return t.frozen||(t.frozen=new Ia),al(this,e)?Lm(this,e):t.frozen.get(e)}return Lm(this,e)},set:function(e,t){if(il(e)&&!sl(e)){var n=rl(this);n.frozen||(n.frozen=new Ia),al(this,e)?ql(this,e,t):n.frozen.set(e,t)}else ql(this,e,t);return this}})}else gR()&&Rm(Bs,{set:function(e,t){var n;return hR(e)&&(xx(e)?n=yx:dR(e)&&(n=pR)),ql(this,e,t),n&&n(e),this}});var _R=Ao;_R.WeakMap;var vR=Ii,xR=ex,yR=function(i,e,t,n){try{return n?e(vR(t)[0],t[1]):e(t)}catch(r){xR(i,"throw",r)}},SR=Xn,ER=gi,MR=Ac,bR=function(i,e,t){SR?ER.f(i,e,MR(0,t)):i[e]=t},TR=Rc,AR=Qi,wR=So,CR=yR,RR=Z0,PR=px,LR=bc,Dm=bR,DR=Q0,IR=bd,Im=Array,OR=function(e){var t=wR(e),n=PR(this),r=arguments.length,s=r>1?arguments[1]:void 0,a=s!==void 0;a&&(s=TR(s,r>2?arguments[2]:void 0));var o=IR(t),l=0,c,u,f,h,d,_;if(o&&!(this===Im&&RR(o)))for(h=DR(t,o),d=h.next,u=n?new this:[];!(f=AR(d,h)).done;l++)_=a?CR(h,s,[f.value,l],!0):f.value,Dm(u,l,_);else for(c=LR(t),u=n?new this(c):Im(c);c>l;l++)_=a?s(t[l],l):t[l],Dm(u,l,_);return u.length=l,u},UR=xa,NR=OR,FR=ix,BR=!FR(function(i){Array.from(i)});UR({target:"Array",stat:!0,forced:BR},{from:NR});var zR=Ao;zR.Array.from;var Om=Xn,kR=Pt,GR=Qi,HR=Qt,Ru=M0,VR=md,WR=hd,$R=So,XR=Qh,xs=Object.assign,Um=Object.defineProperty,qR=kR([].concat),jR=!xs||HR(function(){if(Om&&xs({b:1},xs(Um({},"a",{enumerable:!0,get:function(){Um(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),xs({},i)[t]!==7||Ru(xs({},e)).join("")!==n})?function(e,t){for(var n=$R(e),r=arguments.length,s=1,a=VR.f,o=WR.f;r>s;)for(var l=XR(arguments[s++]),c=a?qR(Ru(l),a(l)):Ru(l),u=c.length,f=0,h;u>f;)h=c[f++],(!Om||GR(o,l,h))&&(n[h]=l[h]);return n}:xs,YR=xa,Nm=jR;YR({target:"Object",stat:!0,arity:2,forced:Object.assign!==Nm},{assign:Nm});var KR=Ao;KR.Object.assign;var ol,fc=new WeakMap;function Mx(){if(ol!==void 0)return ol;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return ol=i?{passive:!1}:!1,ol}function ya(i){var e=fc.get(i)||[];return fc.set(i,e),function(n,r,s){function a(o){o.defaultPrevented||s(o)}r.split(/\s+/g).forEach(function(o){e.push({elem:n,eventName:o,handler:a}),n.addEventListener(o,a,Mx())})}}function ZR(i){var e=fc.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,s=t.handler;n.removeEventListener(r,s,Mx())}),fc.delete(i))}function JR(i){return i.touches?i.touches[i.touches.length-1]:i}function Js(i){var e=JR(i);return{x:e.clientX,y:e.clientY}}function ll(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var bx=["webkit","moz","ms","o"],QR=new RegExp("^-(?!(?:"+bx.join("|")+")-)");function eP(i){var e={};return Object.keys(i).forEach(function(t){if(!QR.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,bx.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function us(i,e){e=eP(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,s){return s.toUpperCase()});i.style[n]=e[t]})}var tP=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=Js(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,s=t.lastPosition,a=Date.now(),o=Js(e),l={x:-(o.x-s.x),y:-(o.y-s.y)},c=a-r||16.7,u=l.x/c*16.7,f=l.y/c*16.7;n.x=u*this.velocityMultiplier,n.y=f*this.velocityMultiplier,this.delta=l,this.updateTime=a,this.lastPosition=o},i}(),nP=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?Pi({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?Pi({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(s){for(var a=Math.abs(r[s])<=10?0:r[s];a!==0;)n[s]+=a,a=a*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new tP(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function si(i,e,t){return Math.max(e,Math.min(t,i))}function Tx(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var a=this,o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];if(t){var c=Date.now(),u=c-r;r=c,u>=e&&i.apply(this,o)}clearTimeout(n),n=setTimeout(function(){i.apply(a,o)},e)}}function Fm(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(s){Object.defineProperty(this,r,{value:si(s,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function Pu(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function Ax(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var s=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:Tx.apply(void 0,pE([s],i))}),this[n]}}}}var iP=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),kr([Fm(0,1)],i.prototype,"damping",void 0),kr([Fm(0,1/0)],i.prototype,"thumbMinSize",void 0),kr([Pu],i.prototype,"renderByPixels",void 0),kr([Pu],i.prototype,"alwaysShowTracks",void 0),kr([Pu],i.prototype,"continuousScrolling",void 0),i}(),la;(function(i){i.X="x",i.Y="y"})(la||(la={}));var rP=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),us(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case la.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case la.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),Bm=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new rP(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){us(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),sP=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new Bm(la.X,t),this.yAxis=new Bm(la.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},kr([Ax(300)],i.prototype,"autoHideOnIdle",null),i}();function aP(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(o){return n[o]?parseFloat(n[o]):0}),s=r[0]+r[1],a=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+a,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function oP(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),s=Math.max(t.left,n.left),a=Math.min(t.right,n.right),o=Math.min(t.bottom,n.bottom);return r<o&&s<a}function lP(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function cP(i,e,t){var n=i.options,r=i.offset,s=i.limit,a=i.track,o=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=si(e,0,s.x),t=si(t,0,s.y),e!==r.x&&a.xAxis.show(),t!==r.y&&a.yAxis.show(),n.alwaysShowTracks||a.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,us(o,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),a.update(),{offset:Pi({},r),limit:Pi({},s)})}var zm=new WeakMap;function uP(i,e,t,n,r){n===void 0&&(n=0);var s=r===void 0?{}:r,a=s.easing,o=a===void 0?fP:a,l=s.callback,c=i.options,u=i.offset,f=i.limit;c.renderByPixels&&(e=Math.round(e),t=Math.round(t));var h=u.x,d=u.y,_=si(e,0,f.x)-h,g=si(t,0,f.y)-d,p=Date.now();function m(){var S=Date.now()-p,y=n?o(Math.min(S/n,1)):1;if(i.setPosition(h+_*y,d+g*y),S>=n)typeof l=="function"&&l.call(i);else{var v=requestAnimationFrame(m);zm.set(i,v)}}cancelAnimationFrame(zm.get(i)),m()}function fP(i){return Math.pow(i-1,3)+1}function hP(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,s=r===void 0?!0:r,a=n.onlyScrollIfNeeded,o=a===void 0?!1:a,l=n.offsetTop,c=l===void 0?0:l,u=n.offsetLeft,f=u===void 0?0:u,h=n.offsetBottom,d=h===void 0?0:h,_=i.containerEl,g=i.bounding,p=i.offset,m=i.limit;if(!(!e||!_.contains(e))){var S=e.getBoundingClientRect();if(!(o&&i.isVisible(e))){var y=s?S.top-g.top-c:S.bottom-g.bottom+d;i.setMomentum(S.left-g.left-f,si(y,-p.y,m.y-p.y))}}}var wx=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=Pi(Pi({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return Pi({},e)},i.pluginName="",i.defaultOptions={},i}(),hc={order:new Set,constructors:{}};function dP(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");hc.order.add(n),hc.constructors[n]=t})}function pP(i,e){return Array.from(hc.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=hc.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var Kn;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(Kn||(Kn={}));function mP(i){var e=ya(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!vP(r)){var s=gP(i,n.keyCode||n.which);if(s){var a=s[0],o=s[1];i.addTransformableMomentum(a,o,n,function(l){l?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function gP(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case Kn.TAB:return _P(i);case Kn.SPACE:return[0,200];case Kn.PAGE_UP:return[0,-t.container.height+40];case Kn.PAGE_DOWN:return[0,t.container.height-40];case Kn.END:return[0,n.y-r.y];case Kn.HOME:return[0,-r.y];case Kn.LEFT:return[-40,0];case Kn.UP:return[0,-40];case Kn.RIGHT:return[40,0];case Kn.DOWN:return[0,40];default:return null}}function _P(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function vP(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var vi;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(vi||(vi={}));function xP(i){var e=ya(i),t=i.containerEl,n=i.track,r=n.xAxis,s=n.yAxis;function a(d,_){var g=i.size,p=i.limit,m=i.offset;if(d===vi.X){var S=g.container.width+(r.thumb.realSize-r.thumb.displaySize);return si(_/S*g.content.width,0,p.x)-m.x}if(d===vi.Y){var y=g.container.height+(s.thumb.realSize-s.thumb.displaySize);return si(_/y*g.content.height,0,p.y)-m.y}return 0}function o(d){if(ll(d,[r.element,r.thumb.element]))return vi.X;if(ll(d,[s.element,s.thumb.element]))return vi.Y}var l,c,u,f,h;e(t,"click",function(d){if(!(c||!ll(d.target,[r.element,s.element]))){var _=d.target,g=o(_),p=_.getBoundingClientRect(),m=Js(d);if(g===vi.X){var S=m.x-p.left-r.thumb.displaySize/2;i.setMomentum(a(g,S),0)}if(g===vi.Y){var S=m.y-p.top-s.thumb.displaySize/2;i.setMomentum(0,a(g,S))}}}),e(t,"mousedown",function(d){if(ll(d.target,[r.thumb.element,s.thumb.element])){l=!0;var _=d.target,g=Js(d),p=_.getBoundingClientRect();f=o(_),u={x:g.x-p.left,y:g.y-p.top},h=t.getBoundingClientRect(),us(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(d){if(l){c=!0;var _=Js(d);if(f===vi.X){var g=_.x-u.x-h.left;i.setMomentum(a(f,g),0)}if(f===vi.Y){var g=_.y-u.y-h.top;i.setMomentum(0,a(f,g))}}}),e(window,"mouseup blur",function(){l=c=!1,us(i.containerEl,{"-user-select":""})})}function yP(i){var e=ya(i);e(window,"resize",Tx(i.update.bind(i),300))}function SP(i){var e=ya(i),t=i.containerEl,n=i.contentEl,r=!1,s=!1,a;function o(l){var c=l.x,u=l.y;if(!(!c&&!u)){var f=i.offset,h=i.limit;i.setMomentum(si(f.x+c,0,h.x)-f.x,si(f.y+u,0,h.y)-f.y),a=requestAnimationFrame(function(){o({x:c,y:u})})}}e(window,"mousemove",function(l){if(r){cancelAnimationFrame(a);var c=EP(i,l);o(c)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(a),r=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(a),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(a),r=!1,s=!1}),e(t,"scroll",function(l){l.preventDefault(),t.scrollTop=t.scrollLeft=0})}function EP(i,e){var t=i.bounding,n=t.top,r=t.right,s=t.bottom,a=t.left,o=Js(e),l=o.x,c=o.y,u={x:0,y:0},f=20;return l===0&&c===0||(l>r-f?u.x=l-r+f:l<a+f&&(u.x=l-a-f),c>s-f?u.y=c-s+f:c<n+f&&(u.y=c-n-f),u.x*=2,u.y*=2),u}var cl;function MP(i){var e=i.options.delegateTo||i.containerEl,t=new nP,n=ya(i),r,s=0;n(e,"touchstart",function(a){t.track(a),i.setMomentum(0,0),s===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),s++}),n(e,"touchmove",function(a){if(!(cl&&cl!==i)){t.update(a);var o=t.getDelta(),l=o.x,c=o.y;i.addTransformableMomentum(l,c,a,function(u){u&&a.cancelable&&(a.preventDefault(),cl=i)})}}),n(e,"touchcancel touchend",function(a){var o=t.getEasingDistance(r);i.addTransformableMomentum(o.x,o.y,a),s--,s===0&&(i.options.damping=r),t.release(a),cl=null})}function bP(i){var e=ya(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var s=AP(r),a=s.x,o=s.y;i.addTransformableMomentum(a,o,r,function(l){l&&r.preventDefault()})})}var Oa={STANDARD:1,OTHERS:-3},km=[1,28,500],TP=function(i){return km[i]||km[0]};function AP(i){if("deltaX"in i){var e=TP(i.deltaMode);return{x:i.deltaX/Oa.STANDARD*e,y:i.deltaY/Oa.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/Oa.OTHERS,y:i.wheelDeltaY/Oa.OTHERS}:{x:0,y:i.wheelDelta/Oa.OTHERS}}const Gm=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:mP,mouseHandler:xP,resizeHandler:yP,selectHandler:SP,touchHandler:MP,wheelHandler:bP},Symbol.toStringTag,{value:"Module"}));var Si=new Map,Hm=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new iP(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),us(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(l){r.appendChild(l)}),e.appendChild(r),this.track=new sP(this),this.size=this.getSize(),this._plugins=pP(this,this.options.plugins);var s=e.scrollLeft,a=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,a,{withoutCallbacks:!0});var o=window.ResizeObserver;typeof o=="function"&&(this._observer=new o(function(){n.update()}),this._observer.observe(r)),Si.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=Si.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return aP(this)},i.prototype.update=function(){lP(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return oP(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=cP(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(a){a.call(r,s)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),uP(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),hP(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var s=this._plugins.reduce(function(o,l){return l.transformDelta(o,n)||o},{x:e,y:t}),a=!this._shouldPropagateMomentum(s.x,s.y);a&&this.addMomentum(s.x,s.y),r&&r.call(this,a)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;ZR(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),Si.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(s){t.appendChild(s)}),us(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(Gm).forEach(function(t){Gm[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,s=n.offset,a=n.limit;if(!r.continuousScrolling)return!1;a.x===0&&a.y===0&&this._updateDebounced();var o=si(e+s.x,0,a.x),l=si(t+s.y,0,a.y),c=!0;return c=c&&o===s.x,c=c&&l===s.y,c=c&&(s.x===a.x||s.x===0||s.y===a.y||s.y===0),c},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=Pi({},this._momentum);this._plugins.forEach(function(s){s.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,s=t._momentum,a=r[e],o=s[e];if(Math.abs(o)<=.1)return{momentum:0,position:a+o};var l=o*(1-n.damping);return n.renderByPixels&&(l|=0),{momentum:l,position:a+o-l}},kr([Ax(100,!0)],i.prototype,"_updateDebounced",null),i}(),wP="rgba(222, 222, 222, .75)",CP="rgba(0, 0, 0, .5)",RP=`
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
  background: `+wP+`;
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
  background: `+CP+`;
  border-radius: 4px;
}
`,Cx="smooth-scrollbar-style",dc=!1;function Vm(){if(!(dc||typeof window>"u")){var i=document.createElement("style");i.id=Cx,i.textContent=RP,document.head&&document.head.appendChild(i),dc=!0}}function PP(){if(!(!dc||typeof window>"u")){var i=document.getElementById(Cx);!i||!i.parentNode||(i.parentNode.removeChild(i),dc=!1)}}var Wm=function(i){dE(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return Vm(),Si.has(t)?Si.get(t):new Hm(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return Si.has(t)},e.get=function(t){return Si.get(t)},e.getAll=function(){return Array.from(Si.values())},e.destroy=function(t){var n=Si.get(t);n&&n.destroy()},e.destroyAll=function(){Si.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return dP.apply(void 0,t)},e.attachStyle=function(){return Vm()},e.detachStyle=function(){return PP()},e.version="8.8.4",e.ScrollbarPlugin=wx,e}(Hm);const fn={page:{breakpoint:769},time:{debounce:250},phone:{viewBox:"0 0 100 80",width:"30",height:"30",rectWidth:"100",rectHeight:"3"},tabletAndUp:{viewBox:"0 0 100 80",width:"30",height:"30",rectWidth:"100",rectHeight:"10"},humbergerBtnSelector:"button.Header__Icon",logoeSelector:"Header__LogoImage",buttonParent:"Header__FlexItem",svgCart:"cart",svg:{cartDesktop:"cartDesktopSvg",cartPhone:"cartPhoneSvg"},color:{white:"#ffffff",black:"#000000"},target:{pageContainer:"page-container",header:"section-header",announcement:"section-announcement"},rootProperty:{headerHeight:"--header-height",announcementHeight:"--announcement-bar-height"}};var Rx={exports:{}},Lu={exports:{}},Du={exports:{}},Iu={exports:{}},$m;function Pd(){return $m||($m=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:Ft,function(){function e(){}let t=e.prototype;return t.on=function(n,r){if(!n||!r)return this;let s=this._events=this._events||{},a=s[n]=s[n]||[];return a.includes(r)||a.push(r),this},t.once=function(n,r){if(!n||!r)return this;this.on(n,r);let s=this._onceEvents=this._onceEvents||{},a=s[n]=s[n]||{};return a[r]=!0,this},t.off=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;let a=s.indexOf(r);return a!=-1&&s.splice(a,1),this},t.emitEvent=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;s=s.slice(0),r=r||[];let a=this._onceEvents&&this._onceEvents[n];for(let o of s)a&&a[o]&&(this.off(n,o),delete a[o]),o.apply(this,r);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(Iu)),Iu.exports}var Ou={exports:{}};/*!
 * Infinite Scroll v2.0.4
 * measure size of elements
 * MIT license
 */var Xm;function Px(){return Xm||(Xm=1,function(i){(function(e,t){i.exports?i.exports=t():e.getSize=t()})(window,function(){function t(a){let o=parseFloat(a);return a.indexOf("%")==-1&&!isNaN(o)&&o}let n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];function r(){let a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return n.forEach(o=>{a[o]=0}),a}function s(a){if(typeof a=="string"&&(a=document.querySelector(a)),!(a&&typeof a=="object"&&a.nodeType))return;let l=getComputedStyle(a);if(l.display=="none")return r();let c={};c.width=a.offsetWidth,c.height=a.offsetHeight;let u=c.isBorderBox=l.boxSizing=="border-box";n.forEach(y=>{let v=l[y],M=parseFloat(v);c[y]=isNaN(M)?0:M});let f=c.paddingLeft+c.paddingRight,h=c.paddingTop+c.paddingBottom,d=c.marginLeft+c.marginRight,_=c.marginTop+c.marginBottom,g=c.borderLeftWidth+c.borderRightWidth,p=c.borderTopWidth+c.borderBottomWidth,m=t(l.width);m!==!1&&(c.width=m+(u?0:f+g));let S=t(l.height);return S!==!1&&(c.height=S+(u?0:h+p)),c.innerWidth=c.width-(f+g),c.innerHeight=c.height-(h+p),c.outerWidth=c.width+d,c.outerHeight=c.height+_,c}return s})}(Ou)),Ou.exports}var Uu={exports:{}},qm;function ds(){return qm||(qm=1,function(i){(function(e,t){i.exports?i.exports=t(e):e.fizzyUIUtils=t(e)})(Ft,function(t){let n={};n.extend=function(s,a){return Object.assign(s,a)},n.modulo=function(s,a){return(s%a+a)%a},n.makeArray=function(s){return Array.isArray(s)?s:s==null?[]:typeof s=="object"&&typeof s.length=="number"?[...s]:[s]},n.removeFrom=function(s,a){let o=s.indexOf(a);o!=-1&&s.splice(o,1)},n.getParent=function(s,a){for(;s.parentNode&&s!=document.body;)if(s=s.parentNode,s.matches(a))return s},n.getQueryElement=function(s){return typeof s=="string"?document.querySelector(s):s},n.handleEvent=function(s){let a="on"+s.type;this[a]&&this[a](s)},n.filterFindElements=function(s,a){return s=n.makeArray(s),s.filter(o=>o instanceof HTMLElement).reduce((o,l)=>{if(!a)return o.push(l),o;l.matches(a)&&o.push(l);let c=l.querySelectorAll(a);return o=o.concat(...c),o},[])},n.debounceMethod=function(s,a,o){o=o||100;let l=s.prototype[a],c=a+"Timeout";s.prototype[a]=function(){clearTimeout(this[c]);let u=arguments;this[c]=setTimeout(()=>{l.apply(this,u),delete this[c]},o)}},n.docReady=function(s){let a=document.readyState;a=="complete"||a=="interactive"?setTimeout(s):document.addEventListener("DOMContentLoaded",s)},n.toDashed=function(s){return s.replace(/(.)([A-Z])/g,function(a,o,l){return o+"-"+l}).toLowerCase()};let r=t.console;return n.htmlInit=function(s,a){n.docReady(function(){let l="data-"+n.toDashed(a),c=document.querySelectorAll(`[${l}]`),u=t.jQuery;[...c].forEach(f=>{let h=f.getAttribute(l),d;try{d=h&&JSON.parse(h)}catch(g){r&&r.error(`Error parsing ${l} on ${f.className}: ${g}`);return}let _=new s(f,d);u&&u.data(f,a,_)})})},n})}(Uu)),Uu.exports}var Nu={exports:{}},jm;function LP(){return jm||(jm=1,function(i){(function(e,t){i.exports?i.exports=t(Px()):(e.Flickity=e.Flickity||{},e.Flickity.Cell=t(e.getSize))})(typeof window<"u"?window:Ft,function(t){const n="flickity-cell";function r(a){this.element=a,this.element.classList.add(n),this.x=0,this.unselect()}let s=r.prototype;return s.destroy=function(){this.unselect(),this.element.classList.remove(n),this.element.style.transform="",this.element.removeAttribute("aria-hidden")},s.getSize=function(){this.size=t(this.element)},s.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},s.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},s.remove=function(){this.element.remove()},r})}(Nu)),Nu.exports}var Fu={exports:{}},Ym;function DP(){return Ym||(Ym=1,function(i){(function(e,t){i.exports?i.exports=t():(e.Flickity=e.Flickity||{},e.Flickity.Slide=t())})(typeof window<"u"?window:Ft,function(){function t(r,s,a){this.beginMargin=r,this.endMargin=s,this.cellAlign=a,this.cells=[],this.outerWidth=0,this.height=0}let n=t.prototype;return n.addCell=function(r){this.cells.push(r),this.outerWidth+=r.size.outerWidth,this.height=Math.max(r.size.outerHeight,this.height),this.cells.length===1&&(this.x=r.x,this.firstMargin=r.size[this.beginMargin])},n.updateTarget=function(){let r=this.getLastCell(),s=r?r.size[this.endMargin]:0,a=this.outerWidth-(this.firstMargin+s);this.target=this.x+this.firstMargin+a*this.cellAlign},n.getLastCell=function(){return this.cells[this.cells.length-1]},n.select=function(){this.cells.forEach(r=>r.select())},n.unselect=function(){this.cells.forEach(r=>r.unselect())},n.getCellElements=function(){return this.cells.map(r=>r.element)},t})}(Fu)),Fu.exports}var Bu={exports:{}},Km;function IP(){return Km||(Km=1,function(i){(function(e,t){i.exports?i.exports=t(ds()):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=t(e.fizzyUIUtils))})(typeof window<"u"?window:Ft,function(t){let n={};return n.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},n.animate=function(){this.applyDragForce(),this.applySelectedAttraction();let r=this.x;this.integratePhysics(),this.positionSlider(),this.settle(r),this.isAnimating&&requestAnimationFrame(()=>this.animate())},n.positionSlider=function(){let r=this.x;this.isWrapping&&(r=t.modulo(r,this.slideableWidth)-this.slideableWidth,this.shiftWrapCells(r)),this.setTranslateX(r,this.isAnimating),this.dispatchScrollEvent()},n.setTranslateX=function(r,s){r+=this.cursorPosition,this.options.rightToLeft&&(r=-r);let a=this.getPositionValue(r);this.slider.style.transform=s?`translate3d(${a},0,0)`:`translateX(${a})`},n.dispatchScrollEvent=function(){let r=this.slides[0];if(!r)return;let s=-this.x-r.target,a=s/this.slidesWidth;this.dispatchEvent("scroll",null,[a,s])},n.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},n.getPositionValue=function(r){return this.options.percentPosition?Math.round(r/this.size.innerWidth*1e4)*.01+"%":Math.round(r)+"px"},n.settle=function(r){!this.isPointerDown&&Math.round(this.x*100)===Math.round(r*100)&&this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},n.shiftWrapCells=function(r){let s=this.cursorPosition+r;this._shiftCells(this.beforeShiftCells,s,-1);let a=this.size.innerWidth-(r+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,a,1)},n._shiftCells=function(r,s,a){r.forEach(o=>{let l=s>0?a:0;this._wrapShiftCell(o,l),s-=o.size.outerWidth})},n._unshiftCells=function(r){!r||!r.length||r.forEach(s=>this._wrapShiftCell(s,0))},n._wrapShiftCell=function(r,s){this._renderCellPosition(r,r.x+this.slideableWidth*s)},n.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},n.applyForce=function(r){this.velocity+=r},n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown)return;let s=this.dragX-this.x-this.velocity;this.applyForce(s)},n.applySelectedAttraction=function(){if(this.isDraggable&&this.isPointerDown||this.isFreeScrolling||!this.slides.length)return;let a=(this.selectedSlide.target*-1-this.x)*this.options.selectedAttraction;this.applyForce(a)},n})}(Bu)),Bu.exports}var Zm;function Ar(){return Zm||(Zm=1,function(i){(function(e,t){if(i.exports)i.exports=t(e,Pd(),Px(),ds(),LP(),DP(),IP());else{let n=e.Flickity;e.Flickity=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,n.Cell,n.Slide,n.animatePrototype)}})(typeof window<"u"?window:Ft,function(t,n,r,s,a,o,l){const{getComputedStyle:c,console:u}=t;let{jQuery:f}=t,h=0,d={};function _(v,M){let b=s.getQueryElement(v);if(!b){u&&u.error(`Bad element for Flickity: ${b||v}`);return}if(this.element=b,this.element.flickityGUID){let E=d[this.element.flickityGUID];return E&&E.option(M),E}f&&(this.$element=f(this.element)),this.options={...this.constructor.defaults},this.option(M),this._create()}_.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},_.create={};let g=_.prototype;Object.assign(g,n.prototype),g._create=function(){let{resize:v,watchCSS:M,rightToLeft:b}=this.options,E=this.guid=++h;this.element.flickityGUID=E,d[E]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.beginMargin=b?"marginRight":"marginLeft",this.endMargin=b?"marginLeft":"marginRight",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),this.focusableElems=[this.element],(v||M)&&t.addEventListener("resize",this);for(let L in this.options.on){let I=this.options.on[L];this.on(L,I)}for(let L in _.create)_.create[L].call(this);M?this.watchCSS():this.activate()},g.option=function(v){Object.assign(this.options,v)},g.activate=function(){if(this.isActive)return;this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();let v=this._filterFindCellElements(this.element.children);this.slider.append(...v),this.viewport.append(this.slider),this.element.append(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready")},g._createSlider=function(){let v=document.createElement("div");v.className="flickity-slider",this.slider=v},g._filterFindCellElements=function(v){return s.filterFindElements(v,this.options.cellSelector)},g.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize()},g._makeCells=function(v){return this._filterFindCellElements(v).map(b=>new a(b))},g.getLastCell=function(){return this.cells[this.cells.length-1]},g.getLastSlide=function(){return this.slides[this.slides.length-1]},g.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},g._positionCells=function(v){v=v||0,this.maxCellHeight=v&&this.maxCellHeight||0;let M=0;if(v>0){let b=this.cells[v-1];M=b.x+b.size.outerWidth}this.cells.slice(v).forEach(b=>{b.x=M,this._renderCellPosition(b,M),M+=b.size.outerWidth,this.maxCellHeight=Math.max(b.size.outerHeight,this.maxCellHeight)}),this.slideableWidth=M,this.updateSlides(),this._containSlides(),this.slidesWidth=this.cells.length?this.getLastSlide().target-this.slides[0].target:0},g._renderCellPosition=function(v,M){let b=this.options.rightToLeft?-1:1,E=M*b;this.options.percentPosition&&(E*=this.size.innerWidth/v.size.width);let L=this.getPositionValue(E);v.element.style.transform=`translateX( ${L} )`},g._sizeCells=function(v){v.forEach(M=>M.getSize())},g.updateSlides=function(){if(this.slides=[],!this.cells.length)return;let{beginMargin:v,endMargin:M}=this,b=new o(v,M,this.cellAlign);this.slides.push(b);let E=this._getCanCellFit();this.cells.forEach((L,I)=>{if(!b.cells.length){b.addCell(L);return}let x=b.outerWidth-b.firstMargin+(L.size.outerWidth-L.size[M]);E(I,x)||(b.updateTarget(),b=new o(v,M,this.cellAlign),this.slides.push(b)),b.addCell(L)}),b.updateTarget(),this.updateSelectedSlide()},g._getCanCellFit=function(){let{groupCells:v}=this.options;if(!v)return()=>!1;if(typeof v=="number"){let L=parseInt(v,10);return I=>I%L!==0}let M=1,b=typeof v=="string"&&v.match(/^(\d+)%$/);b&&(M=parseInt(b[1],10)/100);let E=(this.size.innerWidth+1)*M;return(L,I)=>I<=E},g._init=g.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},g.getSize=function(){this.size=r(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};let p={left:0,center:.5,right:1};g.setCellAlign=function(){let{cellAlign:v,rightToLeft:M}=this.options,b=p[v];this.cellAlign=b!==void 0?b:v,M&&(this.cellAlign=1-this.cellAlign)},g.setGallerySize=function(){if(!this.options.setGallerySize)return;let v=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=`${v}px`},g._updateWrapShiftCells=function(){if(this.isWrapping=this.getIsWrapping(),!this.isWrapping)return;this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);let v=this.cursorPosition,M=this.cells.length-1;this.beforeShiftCells=this._getGapCells(v,M,-1);let b=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(b,0,1)},g.getIsWrapping=function(){let{wrapAround:v}=this.options;if(!v||this.slides.length<2)return!1;if(v!=="fill")return!0;let M=this.slideableWidth-this.size.innerWidth;if(M>this.size.innerWidth)return!0;for(let b of this.cells)if(b.size.outerWidth>M)return!1;return!0},g._getGapCells=function(v,M,b){let E=[];for(;v>0;){let L=this.cells[M];if(!L)break;E.push(L),M+=b,v-=L.size.outerWidth}return E},g._containSlides=function(){if(!(this.options.contain&&!this.isWrapping&&this.cells.length))return;let M=this.slideableWidth-this.getLastCell().size[this.endMargin];if(M<this.size.innerWidth)this.slides.forEach(E=>{E.target=M*this.cellAlign});else{let E=this.cursorPosition+this.cells[0].size[this.beginMargin],L=M-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(I=>{I.target=Math.max(I.target,E),I.target=Math.min(I.target,L)})}},g.dispatchEvent=function(v,M,b){let E=M?[M].concat(b):b;if(this.emitEvent(v,E),f&&this.$element){v+=this.options.namespaceJQueryEvents?".flickity":"";let L=v;if(M){let I=new f.Event(M);I.type=v,L=I}this.$element.trigger(L,b)}};const m=["dragStart","dragMove","dragEnd","pointerDown","pointerMove","pointerEnd","staticClick"];let S=g.emitEvent;g.emitEvent=function(v,M){if(v==="staticClick"){let I=this.getParentCell(M[0].target),x=I&&I.element,C=I&&this.cells.indexOf(I);M=M.concat(x,C)}if(S.call(this,v,M),!m.includes(v)||!f||!this.$element)return;v+=this.options.namespaceJQueryEvents?".flickity":"";let E=M.shift(0),L=new f.Event(E);L.type=v,this.$element.trigger(L,M)},g.select=function(v,M,b){if(!this.isActive||(v=parseInt(v,10),this._wrapSelect(v),(this.isWrapping||M)&&(v=s.modulo(v,this.slides.length)),!this.slides[v]))return;let E=this.selectedIndex;this.selectedIndex=v,this.updateSelectedSlide(),b?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[v]),v!==E&&this.dispatchEvent("change",null,[v])},g._wrapSelect=function(v){if(!this.isWrapping)return;const{selectedIndex:M,slideableWidth:b,slides:{length:E}}=this;if(!this.isDragSelect){let L=s.modulo(v,E),I=Math.abs(L-M),x=Math.abs(L+E-M),C=Math.abs(L-E-M);x<I?v+=E:C<I&&(v-=E)}v<0?this.x-=b:v>=E&&(this.x+=b)},g.previous=function(v,M){this.select(this.selectedIndex-1,v,M)},g.next=function(v,M){this.select(this.selectedIndex+1,v,M)},g.updateSelectedSlide=function(){let v=this.slides[this.selectedIndex];v&&(this.unselectSelectedSlide(),this.selectedSlide=v,v.select(),this.selectedCells=v.cells,this.selectedElements=v.getCellElements(),this.selectedCell=v.cells[0],this.selectedElement=this.selectedElements[0])},g.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},g.selectInitialIndex=function(){let v=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,!1,!0);return}if(v&&typeof v=="string"&&this.queryCell(v)){this.selectCell(v,!1,!0);return}let M=0;v&&this.slides[v]&&(M=v),this.select(M,!1,!0)},g.selectCell=function(v,M,b){let E=this.queryCell(v);if(!E)return;let L=this.getCellSlideIndex(E);this.select(L,M,b)},g.getCellSlideIndex=function(v){let M=this.slides.find(b=>b.cells.includes(v));return this.slides.indexOf(M)},g.getCell=function(v){for(let M of this.cells)if(M.element===v)return M},g.getCells=function(v){return v=s.makeArray(v),v.map(M=>this.getCell(M)).filter(Boolean)},g.getCellElements=function(){return this.cells.map(v=>v.element)},g.getParentCell=function(v){let M=this.getCell(v);if(M)return M;let b=v.closest(".flickity-slider > *");return this.getCell(b)},g.getAdjacentCellElements=function(v,M){if(!v)return this.selectedSlide.getCellElements();M=M===void 0?this.selectedIndex:M;let b=this.slides.length;if(1+v*2>=b)return this.getCellElements();let E=[];for(let L=M-v;L<=M+v;L++){let I=this.isWrapping?s.modulo(L,b):L,x=this.slides[I];x&&(E=E.concat(x.getCellElements()))}return E},g.queryCell=function(v){return typeof v=="number"?this.cells[v]:(typeof v=="string"&&!v.match(/^[#.]?[\d/]/)&&(v=this.element.querySelector(v)),this.getCell(v))},g.uiChange=function(){this.emitEvent("uiChange")},g.onresize=function(){this.watchCSS(),this.resize()},s.debounceMethod(_,"onresize",150),g.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging)return;this.getSize(),this.isWrapping&&(this.x=s.modulo(this.x,this.slideableWidth)),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");let v=this.selectedElements&&this.selectedElements[0];this.selectCell(v,!1,!0)},g.watchCSS=function(){if(!this.options.watchCSS)return;c(this.element,":after").content.includes("flickity")?this.activate():this.deactivate()},g.onkeydown=function(v){let{activeElement:M}=document,b=_.keyboardHandlers[v.key];if(!this.options.accessibility||!M||!b)return;this.focusableElems.some(L=>M===L)&&b.call(this)},_.keyboardHandlers={ArrowLeft:function(){this.uiChange();let v=this.options.rightToLeft?"next":"previous";this[v]()},ArrowRight:function(){this.uiChange();let v=this.options.rightToLeft?"previous":"next";this[v]()}},g.focus=function(){this.element.focus({preventScroll:!0})},g.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(v=>v.destroy()),this.viewport.remove(),this.element.append(...this.slider.children),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},g.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),f&&this.$element&&f.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete d[this.guid]},Object.assign(g,l),_.data=function(v){if(v=s.getQueryElement(v),v)return d[v.flickityGUID]},s.htmlInit(_,"flickity");let{jQueryBridget:y}=t;return f&&y&&y("flickity",_,f),_.setJQuery=function(v){f=v},_.Cell=a,_.Slide=o,_})}(Du)),Du.exports}var zu={exports:{}},ku={exports:{}};/*!
 * Unidragger v3.0.1
 * Draggable base class
 * MIT license
 */var Jm;function OP(){return Jm||(Jm=1,function(i){(function(e,t){i.exports?i.exports=t(e,Pd()):e.Unidragger=t(e,e.EvEmitter)})(typeof window<"u"?window:Ft,function(t,n){function r(){}let s=r.prototype=Object.create(n.prototype);s.handleEvent=function(u){let f="on"+u.type;this[f]&&this[f](u)};let a,o;"ontouchstart"in t?(a="touchstart",o=["touchmove","touchend","touchcancel"]):t.PointerEvent?(a="pointerdown",o=["pointermove","pointerup","pointercancel"]):(a="mousedown",o=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(u,f){this.handles.forEach(h=>{h[u](a,this),h[u]("click",this),t.PointerEvent&&(h.style.touchAction=f)})},s.bindActivePointerEvents=function(){o.forEach(u=>{t.addEventListener(u,this)})},s.unbindActivePointerEvents=function(){o.forEach(u=>{t.removeEventListener(u,this)})},s.withPointer=function(u,f){f.pointerId===this.pointerIdentifier&&this[u](f,f)},s.withTouch=function(u,f){let h;for(let d of f.changedTouches)d.identifier===this.pointerIdentifier&&(h=d);h&&this[u](f,h)},s.onmousedown=function(u){this.pointerDown(u,u)},s.ontouchstart=function(u){this.pointerDown(u,u.changedTouches[0])},s.onpointerdown=function(u){this.pointerDown(u,u)};const l=["TEXTAREA","INPUT","SELECT","OPTION"],c=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(u,f){let h=l.includes(u.target.nodeName),d=c.includes(u.target.type),_=!h||d;!this.isPointerDown&&!u.button&&_&&(this.isPointerDown=!0,this.pointerIdentifier=f.pointerId!==void 0?f.pointerId:f.identifier,this.pointerDownPointer={pageX:f.pageX,pageY:f.pageY},this.bindActivePointerEvents(),this.emitEvent("pointerDown",[u,f]))},s.onmousemove=function(u){this.pointerMove(u,u)},s.onpointermove=function(u){this.withPointer("pointerMove",u)},s.ontouchmove=function(u){this.withTouch("pointerMove",u)},s.pointerMove=function(u,f){let h={x:f.pageX-this.pointerDownPointer.pageX,y:f.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[u,f,h]),!this.isDragging&&this.hasDragStarted(h)&&this.dragStart(u,f),this.isDragging&&this.dragMove(u,f,h)},s.hasDragStarted=function(u){return Math.abs(u.x)>3||Math.abs(u.y)>3},s.dragStart=function(u,f){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[u,f])},s.dragMove=function(u,f,h){this.emitEvent("dragMove",[u,f,h])},s.onmouseup=function(u){this.pointerUp(u,u)},s.onpointerup=function(u){this.withPointer("pointerUp",u)},s.ontouchend=function(u){this.withTouch("pointerUp",u)},s.pointerUp=function(u,f){this.pointerDone(),this.emitEvent("pointerUp",[u,f]),this.isDragging?this.dragEnd(u,f):this.staticClick(u,f)},s.dragEnd=function(u,f){this.isDragging=!1,setTimeout(()=>delete this.isPreventingClicks),this.emitEvent("dragEnd",[u,f])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(u){this.withPointer("pointerCancel",u)},s.ontouchcancel=function(u){this.withTouch("pointerCancel",u)},s.pointerCancel=function(u,f){this.pointerDone(),this.emitEvent("pointerCancel",[u,f])},s.onclick=function(u){this.isPreventingClicks&&u.preventDefault()},s.staticClick=function(u,f){let h=u.type==="mouseup";h&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[u,f]),h&&(this.isIgnoringMouseUp=!0,setTimeout(()=>{delete this.isIgnoringMouseUp},400)))},r})}(ku)),ku.exports}var Qm;function UP(){return Qm||(Qm=1,function(i){(function(e,t){i.exports?i.exports=t(e,Ar(),OP(),ds()):e.Flickity=t(e,e.Flickity,e.Unidragger,e.fizzyUIUtils)})(typeof window<"u"?window:Ft,function(t,n,r,s){Object.assign(n.defaults,{draggable:">1",dragThreshold:3});let a=n.prototype;Object.assign(a,r.prototype),a.touchActionValue="",n.create.drag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("pointerDown",this.handlePointerDone),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.on("staticClick",this.handleStaticClick)},a.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},a.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},a.updateDraggable=function(){this.options.draggable===">1"?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.element.classList.toggle("is-draggable",this.isDraggable)},a._uiChangeDrag=function(){delete this.isFreeScrolling},a.handlePointerDown=function(l){if(!this.isDraggable){this.bindActivePointerEvents(l);return}let c=l.type==="touchstart",u=l.pointerType==="touch",f=l.target.matches("input, textarea, select");!c&&!u&&!f&&l.preventDefault(),f||this.focus(),document.activeElement!==this.element&&document.activeElement.blur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=o(),t.addEventListener("scroll",this),this.bindActivePointerEvents(l)},a.hasDragStarted=function(l){return Math.abs(l.x)>this.options.dragThreshold},a.handlePointerUp=function(){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down")},a.handlePointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},a.handleDragStart=function(){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this))},a.handleDragMove=function(l,c,u){if(!this.isDraggable)return;l.preventDefault(),this.previousDragX=this.dragX;let f=this.options.rightToLeft?-1:1;this.isWrapping&&(u.x%=this.slideableWidth);let h=this.dragStartPosition+u.x*f;if(!this.isWrapping){let d=Math.max(-this.slides[0].target,this.dragStartPosition);h=h>d?(h+d)*.5:h;let _=Math.min(-this.getLastSlide().target,this.dragStartPosition);h=h<_?(h+_)*.5:h}this.dragX=h,this.dragMoveTime=new Date},a.handleDragEnd=function(){if(!this.isDraggable)return;let{freeScroll:l}=this.options;l&&(this.isFreeScrolling=!0);let c=this.dragEndRestingSelect();if(l&&!this.isWrapping){let u=this.getRestingPosition();this.isFreeScrolling=-u>this.slides[0].target&&-u<this.getLastSlide().target}else!l&&c===this.selectedIndex&&(c+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.isWrapping,this.select(c),delete this.isDragSelect},a.dragEndRestingSelect=function(){let l=this.getRestingPosition(),c=Math.abs(this.getSlideDistance(-l,this.selectedIndex)),u=this._getClosestResting(l,c,1),f=this._getClosestResting(l,c,-1);return u.distance<f.distance?u.index:f.index},a._getClosestResting=function(l,c,u){let f=this.selectedIndex,h=1/0,d=this.options.contain&&!this.isWrapping?(_,g)=>_<=g:(_,g)=>_<g;for(;d(c,h)&&(f+=u,h=c,c=this.getSlideDistance(-l,f),c!==null);)c=Math.abs(c);return{distance:h,index:f-u}},a.getSlideDistance=function(l,c){let u=this.slides.length,f=this.options.wrapAround&&u>1,h=f?s.modulo(c,u):c,d=this.slides[h];if(!d)return null;let _=f?this.slideableWidth*Math.floor(c/u):0;return l-(d.target+_)},a.dragEndBoostSelect=function(){if(this.previousDragX===void 0||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;let l=this.getSlideDistance(-this.dragX,this.selectedIndex),c=this.previousDragX-this.dragX;return l>0&&c>0?1:l<0&&c<0?-1:0},a.onscroll=function(){let l=o(),c=this.pointerDownScroll.x-l.x,u=this.pointerDownScroll.y-l.y;(Math.abs(c)>3||Math.abs(u)>3)&&this.pointerDone()};function o(){return{x:t.pageXOffset,y:t.pageYOffset}}return n})}(zu)),zu.exports}var Gu={exports:{}},eg;function NP(){return eg||(eg=1,function(i){(function(e,t){i.exports?i.exports=t(Ar()):t(e.Flickity)})(typeof window<"u"?window:Ft,function(t){const n="http://www.w3.org/2000/svg";function r(o,l,c){this.increment=o,this.direction=l,this.isPrevious=o==="previous",this.isLeft=l==="left",this._create(c)}r.prototype._create=function(o){let l=this.element=document.createElement("button");l.className=`flickity-button flickity-prev-next-button ${this.increment}`;let c=this.isPrevious?"Previous":"Next";l.setAttribute("type","button"),l.setAttribute("aria-label",c),this.disable();let u=this.createSVG(c,o);l.append(u)},r.prototype.createSVG=function(o,l){let c=document.createElementNS(n,"svg");c.setAttribute("class","flickity-button-icon"),c.setAttribute("viewBox","0 0 100 100");let u=document.createElementNS(n,"title");u.append(o);let f=document.createElementNS(n,"path"),h=s(l);return f.setAttribute("d",h),f.setAttribute("class","arrow"),this.isLeft||f.setAttribute("transform","translate(100, 100) rotate(180)"),c.append(u,f),c};function s(o){if(typeof o=="string")return o;let{x0:l,x1:c,x2:u,x3:f,y1:h,y2:d}=o;return`M ${l}, 50
    L ${c}, ${h+50}
    L ${u}, ${d+50}
    L ${f}, 50
    L ${u}, ${50-d}
    L ${c}, ${50-h}
    Z`}r.prototype.enable=function(){this.element.removeAttribute("disabled")},r.prototype.disable=function(){this.element.setAttribute("disabled",!0)},Object.assign(t.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),t.create.prevNextButtons=function(){if(!this.options.prevNextButtons)return;let{rightToLeft:o,arrowShape:l}=this.options,c=o?"right":"left",u=o?"left":"right";this.prevButton=new r("previous",c,l),this.nextButton=new r("next",u,l),this.focusableElems.push(this.prevButton.element),this.focusableElems.push(this.nextButton.element),this.handlePrevButtonClick=()=>{this.uiChange(),this.previous()},this.handleNextButtonClick=()=>{this.uiChange(),this.next()},this.on("activate",this.activatePrevNextButtons),this.on("select",this.updatePrevNextButtons)};let a=t.prototype;return a.updatePrevNextButtons=function(){let o=this.slides.length?this.slides.length-1:0;this.updatePrevNextButton(this.prevButton,0),this.updatePrevNextButton(this.nextButton,o)},a.updatePrevNextButton=function(o,l){if(this.isWrapping&&this.slides.length>1){o.enable();return}let c=this.selectedIndex!==l;o[c?"enable":"disable"](),!c&&document.activeElement===o.element&&this.focus()},a.activatePrevNextButtons=function(){this.prevButton.element.addEventListener("click",this.handlePrevButtonClick),this.nextButton.element.addEventListener("click",this.handleNextButtonClick),this.element.append(this.prevButton.element,this.nextButton.element),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.element.remove(),this.nextButton.element.remove(),this.prevButton.element.removeEventListener("click",this.handlePrevButtonClick),this.nextButton.element.removeEventListener("click",this.handleNextButtonClick),this.off("deactivate",this.deactivatePrevNextButtons)},t.PrevNextButton=r,t})}(Gu)),Gu.exports}var Hu={exports:{}},tg;function FP(){return tg||(tg=1,function(i){(function(e,t){i.exports?i.exports=t(Ar(),ds()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:Ft,function(t,n){function r(){this.holder=document.createElement("div"),this.holder.className="flickity-page-dots",this.dots=[]}r.prototype.setDots=function(a){let o=a-this.dots.length;o>0?this.addDots(o):o<0&&this.removeDots(-o)},r.prototype.addDots=function(a){let o=new Array(a).fill().map((l,c)=>{let u=document.createElement("button");u.setAttribute("type","button");let f=c+1+this.dots.length;return u.className="flickity-page-dot",u.textContent=`View slide ${f}`,u});this.holder.append(...o),this.dots=this.dots.concat(o)},r.prototype.removeDots=function(a){this.dots.splice(this.dots.length-a,a).forEach(l=>l.remove())},r.prototype.updateSelected=function(a){this.selectedDot&&(this.selectedDot.classList.remove("is-selected"),this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[a],this.selectedDot.classList.add("is-selected"),this.selectedDot.setAttribute("aria-current","step"))},t.PageDots=r,Object.assign(t.defaults,{pageDots:!0}),t.create.pageDots=function(){this.options.pageDots&&(this.pageDots=new r,this.handlePageDotsClick=this.onPageDotsClick.bind(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))};let s=t.prototype;return s.activatePageDots=function(){this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots),this.pageDots.holder.addEventListener("click",this.handlePageDotsClick),this.element.append(this.pageDots.holder)},s.onPageDotsClick=function(a){let o=this.pageDots.dots.indexOf(a.target);o!==-1&&(this.uiChange(),this.select(o))},s.updateSelectedPageDots=function(){this.pageDots.updateSelected(this.selectedIndex)},s.updatePageDots=function(){this.pageDots.dots.forEach(a=>{n.removeFrom(this.focusableElems,a)}),this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots)},s.deactivatePageDots=function(){this.pageDots.holder.remove(),this.pageDots.holder.removeEventListener("click",this.handlePageDotsClick)},t.PageDots=r,t})}(Hu)),Hu.exports}var Vu={exports:{}},ng;function BP(){return ng||(ng=1,function(i){(function(e,t){i.exports?i.exports=t(Ar()):t(e.Flickity)})(typeof window<"u"?window:Ft,function(t){function n(s,a){this.autoPlay=s,this.onTick=a,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype.play=function(){if(this.state==="playing")return;if(document.hidden){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()},n.prototype.tick=function(){if(this.state!=="playing")return;let s=typeof this.autoPlay=="number"?this.autoPlay:3e3;this.clear(),this.timeout=setTimeout(()=>{this.onTick(),this.tick()},s)},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){this.state==="playing"&&(this.state="paused",this.clear())},n.prototype.unpause=function(){this.state==="paused"&&this.play()},n.prototype.visibilityChange=function(){let s=document.hidden;this[s?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},Object.assign(t.defaults,{pauseAutoPlayOnHover:!0}),t.create.player=function(){this.player=new n(this.options.autoPlay,()=>{this.next(!0)}),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)};let r=t.prototype;return r.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},r.playPlayer=function(){this.player.play()},r.stopPlayer=function(){this.player.stop()},r.pausePlayer=function(){this.player.pause()},r.unpausePlayer=function(){this.player.unpause()},r.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},r.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},r.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},t.Player=n,t})}(Vu)),Vu.exports}var Wu={exports:{}},ig;function zP(){return ig||(ig=1,function(i){(function(e,t){i.exports?i.exports=t(Ar(),ds()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:Ft,function(t,n){function r(a){let o=document.createDocumentFragment();return a.forEach(l=>o.appendChild(l.element)),o}let s=t.prototype;return s.insert=function(a,o){let l=this._makeCells(a);if(!l||!l.length)return;let c=this.cells.length;o=o===void 0?c:o;let u=r(l),f=o===c;if(f)this.slider.appendChild(u);else{let h=this.cells[o].element;this.slider.insertBefore(u,h)}if(o===0)this.cells=l.concat(this.cells);else if(f)this.cells=this.cells.concat(l);else{let h=this.cells.splice(o,c-o);this.cells=this.cells.concat(l).concat(h)}this._sizeCells(l),this.cellChange(o),this.positionSliderAtSelected()},s.append=function(a){this.insert(a,this.cells.length)},s.prepend=function(a){this.insert(a,0)},s.remove=function(a){let o=this.getCells(a);if(!o||!o.length)return;let l=this.cells.length-1;o.forEach(c=>{c.remove();let u=this.cells.indexOf(c);l=Math.min(u,l),n.removeFrom(this.cells,c)}),this.cellChange(l),this.positionSliderAtSelected()},s.cellSizeChange=function(a){let o=this.getCell(a);if(!o)return;o.getSize();let l=this.cells.indexOf(o);this.cellChange(l)},s.cellChange=function(a){let o=this.selectedElement;this._positionCells(a),this._updateWrapShiftCells(),this.setGallerySize();let l=this.getCell(o);l&&(this.selectedIndex=this.getCellSlideIndex(l)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[a]),this.select(this.selectedIndex)},t})}(Wu)),Wu.exports}var $u={exports:{}},rg;function kP(){return rg||(rg=1,function(i){(function(e,t){i.exports?i.exports=t(Ar(),ds()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:Ft,function(t,n){const r="data-flickity-lazyload",s=`${r}-src`,a=`${r}-srcset`,o=`img[${r}], img[${s}], img[${a}], source[${a}]`;t.create.lazyLoad=function(){this.on("select",this.lazyLoad),this.handleLazyLoadComplete=this.onLazyLoadComplete.bind(this)};let l=t.prototype;l.lazyLoad=function(){let{lazyLoad:f}=this.options;if(!f)return;let h=typeof f=="number"?f:0;this.getAdjacentCellElements(h).map(c).flat().forEach(d=>new u(d,this.handleLazyLoadComplete))};function c(f){if(f.matches("img")){let h=f.getAttribute(r),d=f.getAttribute(s),_=f.getAttribute(a);if(h||d||_)return f}return[...f.querySelectorAll(o)]}l.onLazyLoadComplete=function(f,h){let d=this.getParentCell(f),_=d&&d.element;this.cellSizeChange(_),this.dispatchEvent("lazyLoad",h,_)};function u(f,h){this.img=f,this.onComplete=h,this.load()}return u.prototype.handleEvent=n.handleEvent,u.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);let f=this.img.getAttribute(r)||this.img.getAttribute(s),h=this.img.getAttribute(a);this.img.src=f,h&&this.img.setAttribute("srcset",h),this.img.removeAttribute(r),this.img.removeAttribute(s),this.img.removeAttribute(a)},u.prototype.onload=function(f){this.complete(f,"flickity-lazyloaded")},u.prototype.onerror=function(f){this.complete(f,"flickity-lazyerror")},u.prototype.complete=function(f,h){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this),(this.img.parentNode.matches("picture")?this.img.parentNode:this.img).classList.add(h),this.onComplete(this.img,f)},t.LazyLoader=u,t})}($u)),$u.exports}var Xu={exports:{}},qu={exports:{}};/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */var sg;function GP(){return sg||(sg=1,function(i){(function(e,t){i.exports?i.exports=t(e,Pd()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:Ft,function(t,n){let r=t.jQuery,s=t.console;function a(h){return Array.isArray(h)?h:typeof h=="object"&&typeof h.length=="number"?[...h]:[h]}function o(h,d,_){if(!(this instanceof o))return new o(h,d,_);let g=h;if(typeof h=="string"&&(g=document.querySelectorAll(h)),!g){s.error(`Bad element for imagesLoaded ${g||h}`);return}this.elements=a(g),this.options={},typeof d=="function"?_=d:Object.assign(this.options,d),_&&this.on("always",_),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}o.prototype=Object.create(n.prototype),o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const l=[1,9,11];o.prototype.addElementImages=function(h){h.nodeName==="IMG"&&this.addImage(h),this.options.background===!0&&this.addElementBackgroundImages(h);let{nodeType:d}=h;if(!d||!l.includes(d))return;let _=h.querySelectorAll("img");for(let g of _)this.addImage(g);if(typeof this.options.background=="string"){let g=h.querySelectorAll(this.options.background);for(let p of g)this.addElementBackgroundImages(p)}};const c=/url\((['"])?(.*?)\1\)/gi;o.prototype.addElementBackgroundImages=function(h){let d=getComputedStyle(h);if(!d)return;let _=c.exec(d.backgroundImage);for(;_!==null;){let g=_&&_[2];g&&this.addBackground(g,h),_=c.exec(d.backgroundImage)}},o.prototype.addImage=function(h){let d=new u(h);this.images.push(d)},o.prototype.addBackground=function(h,d){let _=new f(h,d);this.images.push(_)},o.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let h=(d,_,g)=>{setTimeout(()=>{this.progress(d,_,g)})};this.images.forEach(function(d){d.once("progress",h),d.check()})},o.prototype.progress=function(h,d,_){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!h.isLoaded,this.emitEvent("progress",[this,h,d]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,h),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${_}`,h,d)},o.prototype.complete=function(){let h=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(h,[this]),this.emitEvent("always",[this]),this.jqDeferred){let d=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[d](this)}};function u(h){this.img=h}u.prototype=Object.create(n.prototype),u.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},u.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},u.prototype.confirm=function(h,d){this.isLoaded=h;let{parentNode:_}=this.img,g=_.nodeName==="PICTURE"?_:this.img;this.emitEvent("progress",[this,g,d])},u.prototype.handleEvent=function(h){let d="on"+h.type;this[d]&&this[d](h)},u.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},u.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},u.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function f(h,d){this.url=h,this.element=d,this.img=new Image}return f.prototype=Object.create(u.prototype),f.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},f.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},f.prototype.confirm=function(h,d){this.isLoaded=h,this.emitEvent("progress",[this,this.element,d])},o.makeJQueryPlugin=function(h){h=h||t.jQuery,h&&(r=h,r.fn.imagesLoaded=function(d,_){return new o(this,d,_).jqDeferred.promise(r(this))})},o.makeJQueryPlugin(),o})}(qu)),qu.exports}var ag;function HP(){return ag||(ag=1,function(i){(function(e,t){i.exports?i.exports=t(Ar(),GP()):t(e.Flickity,e.imagesLoaded)})(typeof window<"u"?window:Ft,function(t,n){return t.create.imagesLoaded=function(){this.on("activate",this.imagesLoaded)},t.prototype.imagesLoaded=function(){if(!this.options.imagesLoaded)return;let r=(s,a)=>{let o=this.getParentCell(a.img);this.cellSizeChange(o&&o.element),this.options.freeScroll||this.positionSliderAtSelected()};n(this.slider).on("progress",r)},t})}(Xu)),Xu.exports}/*!
 * Flickity v3.0.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2022 Metafizzy
 */var og;function VP(){return og||(og=1,function(i){if(i.exports){const e=Ar();UP(),NP(),FP(),BP(),zP(),kP(),HP(),i.exports=e}}(Lu)),Lu.exports}(function(i){(function(e,t){i.exports?i.exports=t(VP(),ds()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:Ft,function(t,n){let r=t.Slide;r.prototype.renderFadePosition=function(){},r.prototype.setOpacity=function(f){this.cells.forEach(h=>{h.element.style.opacity=f})},t.create.fade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};let s=t.prototype,a=s.updateSlides;s.updateSlides=function(){a.apply(this,arguments),this.options.fade&&this.slides.forEach((f,h)=>{let d=f.target-f.x,_=f.cells[0].x;f.cells.forEach(p=>{let m=p.x-_-d;this._renderCellPosition(p,m)});let g=h===this.selectedIndex?1:0;f.setOpacity(g)})},s.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},s.onSettleFade=function(){if(delete this.didDragEnd,!this.options.fade)return;this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!==this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0)},s.onDragEndFade=function(){this.didDragEnd=!0},s.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},s.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(f=>{f.setOpacity("")}))};let o=s.positionSlider;s.positionSlider=function(){if(!this.options.fade){o.apply(this,arguments);return}this.fadeSlides(),this.dispatchScrollEvent()};let l=s.positionSliderAtSelected;s.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),l.apply(this,arguments)},s.fadeSlides=function(){if(this.slides.length<2)return;let f=this.getFadeIndexes(),h=this.slides[f.a],d=this.slides[f.b],_=this.wrapDifference(h.target,d.target),g=this.wrapDifference(h.target,-this.x);g/=_,h.setOpacity(1-g),d.setOpacity(g);let p=f.a;this.isDragging&&(p=g>.5?f.a:f.b),this.fadeHideIndex!==void 0&&this.fadeHideIndex!==p&&this.fadeHideIndex!==f.a&&this.fadeHideIndex!==f.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=p},s.getFadeIndexes=function(){return!this.isDragging&&!this.didDragEnd?{a:this.fadeIndex,b:this.selectedIndex}:this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes()},s.getFadeDragWrapIndexes=function(){let f=this.slides.map(function(S,y){return this.getSlideDistance(-this.x,y)},this),h=f.map(function(S){return Math.abs(S)}),d=Math.min(...h),_=h.indexOf(d),g=f[_],p=this.slides.length,m=g>=0?1:-1;return{a:_,b:n.modulo(_+m,p)}},s.getFadeDragLimitIndexes=function(){let f=0;for(let h=0;h<this.slides.length-1;h++){let d=this.slides[h];if(-this.x<d.target)break;f=h}return{a:f,b:f+1}},s.wrapDifference=function(f,h){let d=h-f;if(!this.options.wrapAround)return d;let _=d+this.slideableWidth,g=d-this.slideableWidth;return Math.abs(_)<Math.abs(d)&&(d=_),Math.abs(g)<Math.abs(d)&&(d=g),d};let c=s._updateWrapShiftCells;s._updateWrapShiftCells=function(){this.options.fade?this.isWrapping=this.getIsWrapping():c.apply(this,arguments)};let u=s.shiftWrapCells;return s.shiftWrapCells=function(){this.options.fade||u.apply(this,arguments)},t})})(Rx);var WP=Rx.exports;const $P=mE(WP);function _o(i){const e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return e>=i&&e>t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="161",XP=0,lg=1,qP=2,Lx=1,jP=2,zi=3,br=0,Pn=1,Vi=2,vr=0,Qs=1,cg=2,ug=3,fg=4,YP=5,Gr=100,KP=101,ZP=102,hg=103,dg=104,JP=200,QP=201,eL=202,tL=203,uh=204,fh=205,nL=206,iL=207,rL=208,sL=209,aL=210,oL=211,lL=212,cL=213,uL=214,fL=0,hL=1,dL=2,pc=3,pL=4,mL=5,gL=6,_L=7,Dx=0,vL=1,xL=2,xr=0,yL=1,SL=2,EL=3,ML=4,bL=5,TL=6,Ix=300,ca=301,ua=302,hh=303,dh=304,Ic=306,ph=1e3,di=1001,mh=1002,xn=1003,pg=1004,Ua=1005,Nt=1006,ju=1007,$r=1008,yr=1009,AL=1010,wL=1011,Dd=1012,Ox=1013,pr=1014,Wi=1015,vo=1016,Ux=1017,Nx=1018,es=1020,CL=1021,pi=1023,RL=1024,PL=1025,ts=1026,fa=1027,LL=1028,Fx=1029,DL=1030,Bx=1031,zx=1033,Yu=33776,Ku=33777,Zu=33778,Ju=33779,mg=35840,gg=35841,_g=35842,vg=35843,kx=36196,xg=37492,yg=37496,Sg=37808,Eg=37809,Mg=37810,bg=37811,Tg=37812,Ag=37813,wg=37814,Cg=37815,Rg=37816,Pg=37817,Lg=37818,Dg=37819,Ig=37820,Og=37821,Qu=36492,Ug=36494,Ng=36495,IL=36283,Fg=36284,Bg=36285,zg=36286,Gx=3e3,ns=3001,OL=3200,UL=3201,NL=0,FL=1,ei="",Kt="srgb",Zi="srgb-linear",Id="display-p3",Oc="display-p3-linear",mc="linear",xt="srgb",gc="rec709",_c="p3",ys=7680,kg=519,BL=512,zL=513,kL=514,Hx=515,GL=516,HL=517,VL=518,WL=519,Gg=35044,Hg="300 es",gh=1035,Xi=2e3,vc=2001;class Sa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ef=Math.PI/180,_h=180/Math.PI;function Co(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Tn(i,e,t){return Math.max(e,Math.min(t,i))}function $L(i,e){return(i%e+e)%e}function tf(i,e,t){return(1-t)*i+t*e}function Vg(i){return(i&i-1)===0&&i!==0}function vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Na(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],_=n[8],g=r[0],p=r[3],m=r[6],S=r[1],y=r[4],v=r[7],M=r[2],b=r[5],E=r[8];return s[0]=a*g+o*S+l*M,s[3]=a*p+o*y+l*b,s[6]=a*m+o*v+l*E,s[1]=c*g+u*S+f*M,s[4]=c*p+u*y+f*b,s[7]=c*m+u*v+f*E,s[2]=h*g+d*S+_*M,s[5]=h*p+d*y+_*b,s[8]=h*m+d*v+_*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,_=t*f+n*h+r*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(r*c-u*n)*g,e[2]=(o*n-r*a)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nf.makeScale(e,t)),this}rotate(e){return this.premultiply(nf.makeRotation(-e)),this}translate(e,t){return this.premultiply(nf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nf=new Qe;function Vx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function xo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function XL(){const i=xo("canvas");return i.style.display="block",i}const Wg={};function ea(i){i in Wg||(Wg[i]=!0,console.warn(i))}const $g=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xg=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ul={[Zi]:{transfer:mc,primaries:gc,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:xt,primaries:gc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Oc]:{transfer:mc,primaries:_c,toReference:i=>i.applyMatrix3(Xg),fromReference:i=>i.applyMatrix3($g)},[Id]:{transfer:xt,primaries:_c,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xg),fromReference:i=>i.applyMatrix3($g).convertLinearToSRGB()}},qL=new Set([Zi,Oc]),ht={enabled:!0,_workingColorSpace:Zi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!qL.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ul[e].toReference,r=ul[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ul[i].primaries},getTransfer:function(i){return i===ei?mc:ul[i].transfer}};function ta(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function rf(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ss;class Wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ss===void 0&&(Ss=xo("canvas")),Ss.width=e.width,Ss.height=e.height;const n=Ss.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ss}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ta(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ta(t[n]/255)*255):t[n]=ta(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let jL=0;class $x{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jL++}),this.uuid=Co(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(sf(r[a].image)):s.push(sf(r[a]))}else s=sf(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function sf(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YL=0;class un extends Sa{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=di,r=di,s=Nt,a=$r,o=pi,l=yr,c=un.DEFAULT_ANISOTROPY,u=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YL++}),this.uuid=Co(),this.name="",this.source=new $x(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ns?Kt:ei),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ph:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case mh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ph:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case mh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?ns:Gx}set encoding(e){ea("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?Kt:ei}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=Ix;un.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,n=0,r=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(d+1)/2,M=(m+1)/2,b=(u+h)/4,E=(f+g)/4,L=(_+p)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=b/n,s=E/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=b/r,s=L/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=E/s,r=L/s),this.set(n,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-g)/S,this.z=(h-u)/S,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KL extends Sa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(ea("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?Kt:ei),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new un(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $x(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends KL{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Xx extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZL extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=xn,this.minFilter=xn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ro{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],d=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=_,e[t+3]=g;return}if(f!==g||l!==h||c!==d||u!==_){let p=1-o;const m=l*h+c*d+u*_+f*g,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const M=Math.sqrt(y),b=Math.atan2(M,m*S);p=Math.sin(p*b)/M,o=Math.sin(o*b)/M}const v=o*S;if(l=l*p+h*v,c=c*p+d*v,u=u*p+_*v,f=f*p+g*v,p===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*d-c*h,e[t+1]=l*_+u*h+c*f-o*d,e[t+2]=c*_+u*d+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"YXZ":this._x=h*u*f+c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"ZXY":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f-h*d*_;break;case"ZYX":this._x=h*u*f-c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f+h*d*_;break;case"YZX":this._x=h*u*f+c*d*_,this._y=c*d*f+h*u*_,this._z=c*u*_-h*d*f,this._w=c*u*f-h*d*_;break;case"XZY":this._x=h*u*f-c*d*_,this._y=c*d*f-h*u*_,this._z=c*u*_+h*d*f,this._w=c*u*f+h*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return af.copy(this).projectOnVector(e),this.sub(af)}reflect(e){return this.sub(af.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const af=new q,qg=new Ro;class Po{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,oi):oi.fromBufferAttribute(s,a),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),fl.copy(n.boundingBox)),fl.applyMatrix4(e.matrixWorld),this.union(fl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),hl.subVectors(this.max,Fa),Es.subVectors(e.a,Fa),Ms.subVectors(e.b,Fa),bs.subVectors(e.c,Fa),tr.subVectors(Ms,Es),nr.subVectors(bs,Ms),Lr.subVectors(Es,bs);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Lr.z,Lr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Lr.z,0,-Lr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Lr.y,Lr.x,0];return!of(t,Es,Ms,bs,hl)||(t=[1,0,0,0,1,0,0,0,1],!of(t,Es,Ms,bs,hl))?!1:(dl.crossVectors(tr,nr),t=[dl.x,dl.y,dl.z],of(t,Es,Ms,bs,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new q,new q,new q,new q,new q,new q,new q,new q],oi=new q,fl=new Po,Es=new q,Ms=new q,bs=new q,tr=new q,nr=new q,Lr=new q,Fa=new q,hl=new q,dl=new q,Dr=new q;function of(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Dr.fromArray(i,s);const o=r.x*Math.abs(Dr.x)+r.y*Math.abs(Dr.y)+r.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const JL=new Po,Ba=new q,lf=new q;class Od{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):JL.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Ba,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(lf)),this.expandByPoint(Ba.copy(e.center).sub(lf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new q,cf=new q,pl=new q,ir=new q,uf=new q,ml=new q,ff=new q;class qx{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cf.copy(e).add(t).multiplyScalar(.5),pl.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(cf);const s=e.distanceTo(t)*.5,a=-this.direction.dot(pl),o=ir.dot(this.direction),l=-ir.dot(pl),c=ir.lengthSq(),u=Math.abs(1-a*a);let f,h,d,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(cf).addScaledVector(pl,h),d}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const n=Ui.dot(this.direction),r=Ui.dot(Ui)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,n,r,s){uf.subVectors(t,e),ml.subVectors(n,e),ff.crossVectors(uf,ml);let a=this.direction.dot(ff),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ir.subVectors(this.origin,e);const l=o*this.direction.dot(ml.crossVectors(ir,ml));if(l<0)return null;const c=o*this.direction.dot(uf.cross(ir));if(c<0||l+c>a)return null;const u=-o*ir.dot(ff);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,r,s,a,o,l,c,u,f,h,d,_,g,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,h,d,_,g,p)}set(e,t,n,r,s,a,o,l,c,u,f,h,d,_,g,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),a=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+_*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=_+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h+g*o,t[4]=_*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,_=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,_=o*u,g=o*f;t[0]=l*u,t[4]=_*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=_*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+_,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-_,t[2]=_*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QL,e,eD)}lookAt(e,t,n){const r=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),rr.crossVectors(n,On),rr.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),rr.crossVectors(n,On)),rr.normalize(),gl.crossVectors(On,rr),r[0]=rr.x,r[4]=gl.x,r[8]=On.x,r[1]=rr.y,r[5]=gl.y,r[9]=On.y,r[2]=rr.z,r[6]=gl.z,r[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],_=n[2],g=n[6],p=n[10],m=n[14],S=n[3],y=n[7],v=n[11],M=n[15],b=r[0],E=r[4],L=r[8],I=r[12],x=r[1],C=r[5],O=r[9],Y=r[13],D=r[2],k=r[6],F=r[10],$=r[14],X=r[3],j=r[7],R=r[11],K=r[15];return s[0]=a*b+o*x+l*D+c*X,s[4]=a*E+o*C+l*k+c*j,s[8]=a*L+o*O+l*F+c*R,s[12]=a*I+o*Y+l*$+c*K,s[1]=u*b+f*x+h*D+d*X,s[5]=u*E+f*C+h*k+d*j,s[9]=u*L+f*O+h*F+d*R,s[13]=u*I+f*Y+h*$+d*K,s[2]=_*b+g*x+p*D+m*X,s[6]=_*E+g*C+p*k+m*j,s[10]=_*L+g*O+p*F+m*R,s[14]=_*I+g*Y+p*$+m*K,s[3]=S*b+y*x+v*D+M*X,s[7]=S*E+y*C+v*k+M*j,s[11]=S*L+y*O+v*F+M*R,s[15]=S*I+y*Y+v*$+M*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],_=e[3],g=e[7],p=e[11],m=e[15];return _*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*d-n*l*d)+g*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+m*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],_=e[12],g=e[13],p=e[14],m=e[15],S=f*p*c-g*h*c+g*l*d-o*p*d-f*l*m+o*h*m,y=_*h*c-u*p*c-_*l*d+a*p*d+u*l*m-a*h*m,v=u*g*c-_*f*c+_*o*d-a*g*d-u*o*m+a*f*m,M=_*f*l-u*g*l-_*o*h+a*g*h+u*o*p-a*f*p,b=t*S+n*y+r*v+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=S*E,e[1]=(g*h*s-f*p*s-g*r*d+n*p*d+f*r*m-n*h*m)*E,e[2]=(o*p*s-g*l*s+g*r*c-n*p*c-o*r*m+n*l*m)*E,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*E,e[4]=y*E,e[5]=(u*p*s-_*h*s+_*r*d-t*p*d-u*r*m+t*h*m)*E,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*m-t*l*m)*E,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*E,e[8]=v*E,e[9]=(_*f*s-u*g*s-_*n*d+t*g*d+u*n*m-t*f*m)*E,e[10]=(a*g*s-_*o*s+_*n*c-t*g*c-a*n*m+t*o*m)*E,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*E,e[12]=M*E,e[13]=(u*g*r-_*f*r+_*n*h-t*g*h-u*n*p+t*f*p)*E,e[14]=(_*o*r-a*g*r-_*n*l+t*g*l+a*n*p-t*o*p)*E,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,_=s*f,g=a*u,p=a*f,m=o*f,S=l*c,y=l*u,v=l*f,M=n.x,b=n.y,E=n.z;return r[0]=(1-(g+m))*M,r[1]=(d+v)*M,r[2]=(_-y)*M,r[3]=0,r[4]=(d-v)*b,r[5]=(1-(h+m))*b,r[6]=(p+S)*b,r[7]=0,r[8]=(_+y)*E,r[9]=(p-S)*E,r[10]=(1-(h+g))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ts.set(r[0],r[1],r[2]).length();const a=Ts.set(r[4],r[5],r[6]).length(),o=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const c=1/s,u=1/a,f=1/o;return li.elements[0]*=c,li.elements[1]*=c,li.elements[2]*=c,li.elements[4]*=u,li.elements[5]*=u,li.elements[6]*=u,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,t.setFromRotationMatrix(li),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Xi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,_;if(o===Xi)d=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===vc)d=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Xi){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(a-s),h=(t+e)*c,d=(n+r)*u;let _,g;if(o===Xi)_=(a+s)*f,g=-2*f;else if(o===vc)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ts=new q,li=new Jt,QL=new q(0,0,0),eD=new q(1,1,1),rr=new q,gl=new q,On=new q,jg=new Jt,Yg=new Ro;class Uc{constructor(e=0,t=0,n=0,r=Uc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return jg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(jg,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Yg.setFromEuler(this),this.setFromQuaternion(Yg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Uc.DEFAULT_ORDER="XYZ";class Ud{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tD=0;const Kg=new q,As=new Ro,Ni=new Jt,_l=new q,za=new q,nD=new q,iD=new Ro,Zg=new q(1,0,0),Jg=new q(0,1,0),Qg=new q(0,0,1),rD={type:"added"},sD={type:"removed"};class Vn extends Sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tD++}),this.uuid=Co(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new q,t=new Uc,n=new Ro,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Qe}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ud,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.multiply(As),this}rotateOnWorldAxis(e,t){return As.setFromAxisAngle(e,t),this.quaternion.premultiply(As),this}rotateX(e){return this.rotateOnAxis(Zg,e)}rotateY(e){return this.rotateOnAxis(Jg,e)}rotateZ(e){return this.rotateOnAxis(Qg,e)}translateOnAxis(e,t){return Kg.copy(e).applyQuaternion(this.quaternion),this.position.add(Kg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Zg,e)}translateY(e){return this.translateOnAxis(Jg,e)}translateZ(e){return this.translateOnAxis(Qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_l.copy(e):_l.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(za,_l,this.up):Ni.lookAt(_l,za,this.up),this.quaternion.setFromRotationMatrix(Ni),r&&(Ni.extractRotation(r.matrixWorld),As.setFromRotationMatrix(Ni),this.quaternion.premultiply(As.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(rD)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sD)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ni.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ni),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,e,nD),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,iD,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Vn.DEFAULT_UP=new q(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new q,Fi=new q,hf=new q,Bi=new q,ws=new q,Cs=new q,e_=new q,df=new q,pf=new q,mf=new q;class bi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ci.subVectors(e,t),r.cross(ci);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ci.subVectors(r,t),Fi.subVectors(n,t),hf.subVectors(e,t);const a=ci.dot(ci),o=ci.dot(Fi),l=ci.dot(hf),c=Fi.dot(Fi),u=Fi.dot(hf),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-d-_,_,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bi.x),l.addScaledVector(a,Bi.y),l.addScaledVector(o,Bi.z),l)}static isFrontFacing(e,t,n,r){return ci.subVectors(n,t),Fi.subVectors(e,t),ci.cross(Fi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),Fi.subVectors(this.a,this.b),ci.cross(Fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return bi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ws.subVectors(r,n),Cs.subVectors(s,n),df.subVectors(e,n);const l=ws.dot(df),c=Cs.dot(df);if(l<=0&&c<=0)return t.copy(n);pf.subVectors(e,r);const u=ws.dot(pf),f=Cs.dot(pf);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ws,a);mf.subVectors(e,s);const d=ws.dot(mf),_=Cs.dot(mf);if(_>=0&&d<=_)return t.copy(s);const g=d*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Cs,o);const p=u*_-d*f;if(p<=0&&f-u>=0&&d-_>=0)return e_.subVectors(s,r),o=(f-u)/(f-u+(d-_)),t.copy(r).addScaledVector(e_,o);const m=1/(p+g+h);return a=g*m,o=h*m,t.copy(n).addScaledVector(ws,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},vl={h:0,s:0,l:0};function gf(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=$L(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=gf(a,s,e+1/3),this.g=gf(a,s,e),this.b=gf(a,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=jx[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}copyLinearToSRGB(e){return this.r=rf(e.r),this.g=rf(e.g),this.b=rf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ht.fromWorkingColorSpace(rn.copy(this),e),Math.round(Tn(rn.r*255,0,255))*65536+Math.round(Tn(rn.g*255,0,255))*256+Math.round(Tn(rn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,r=rn.g,s=rn.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Kt){ht.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,r=rn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(vl);const n=tf(sr.h,vl.h,t),r=tf(sr.s,vl.s,t),s=tf(sr.l,vl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new dt;dt.NAMES=jx;let aD=0;class Nc extends Sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aD++}),this.uuid=Co(),this.name="",this.type="Material",this.blending=Qs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=fh,this.blendEquation=Gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=pc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qs&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uh&&(n.blendSrc=this.blendSrc),this.blendDst!==fh&&(n.blendDst=this.blendDst),this.blendEquation!==Gr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==pc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kg&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yx extends Nc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new q,xl=new ot;class Li{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Gg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ea("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)xl.fromBufferAttribute(this,t),xl.applyMatrix3(e),this.setXY(t,xl.x,xl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Na(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Na(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Na(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Na(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Na(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),n=Mn(n,this.array),r=Mn(r,this.array),s=Mn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Gg&&(e.usage=this.usage),e}}class Kx extends Li{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Zx extends Li{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class is extends Li{constructor(e,t,n){super(new Float32Array(e),t,n)}}let oD=0;const jn=new Jt,_f=new Vn,Rs=new q,Un=new Po,ka=new Po,Wt=new q;class ps extends Sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:oD++}),this.uuid=Co(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Zx:Kx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return _f.lookAt(e),_f.updateMatrix(),this.applyMatrix4(_f.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new is(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Od);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ka.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Un.min,ka.min),Un.expandByPoint(Wt),Wt.addVectors(Un.max,ka.max),Un.expandByPoint(Wt)):(Un.expandByPoint(ka.min),Un.expandByPoint(ka.max))}Un.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),Wt.add(Rs)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<o;x++)c[x]=new q,u[x]=new q;const f=new q,h=new q,d=new q,_=new ot,g=new ot,p=new ot,m=new q,S=new q;function y(x,C,O){f.fromArray(r,x*3),h.fromArray(r,C*3),d.fromArray(r,O*3),_.fromArray(a,x*2),g.fromArray(a,C*2),p.fromArray(a,O*2),h.sub(f),d.sub(f),g.sub(_),p.sub(_);const Y=1/(g.x*p.y-p.x*g.y);isFinite(Y)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(Y),S.copy(d).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(Y),c[x].add(m),c[C].add(m),c[O].add(m),u[x].add(S),u[C].add(S),u[O].add(S))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let x=0,C=v.length;x<C;++x){const O=v[x],Y=O.start,D=O.count;for(let k=Y,F=Y+D;k<F;k+=3)y(n[k+0],n[k+1],n[k+2])}const M=new q,b=new q,E=new q,L=new q;function I(x){E.fromArray(s,x*3),L.copy(E);const C=c[x];M.copy(C),M.sub(E.multiplyScalar(E.dot(C))).normalize(),b.crossVectors(L,C);const Y=b.dot(u[x])<0?-1:1;l[x*4]=M.x,l[x*4+1]=M.y,l[x*4+2]=M.z,l[x*4+3]=Y}for(let x=0,C=v.length;x<C;++x){const O=v[x],Y=O.start,D=O.count;for(let k=Y,F=Y+D;k<F;k+=3)I(n[k+0]),I(n[k+1]),I(n[k+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Li(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const _=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[d++]}return new Li(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ps,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t_=new Jt,Ir=new qx,yl=new Od,n_=new q,Ps=new q,Ls=new q,Ds=new q,vf=new q,Sl=new q,El=new ot,Ml=new ot,bl=new ot,i_=new q,r_=new q,s_=new q,Tl=new q,Al=new q;class wi extends Vn{constructor(e=new ps,t=new Yx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Sl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(vf.fromBufferAttribute(f,e),a?Sl.addScaledVector(vf,u):Sl.addScaledVector(vf.sub(t),u))}t.add(Sl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yl.copy(n.boundingSphere),yl.applyMatrix4(s),Ir.copy(e.ray).recast(e.near),!(yl.containsPoint(Ir.origin)===!1&&(Ir.intersectSphere(yl,n_)===null||Ir.origin.distanceToSquared(n_)>(e.far-e.near)**2))&&(t_.copy(s).invert(),Ir.copy(e.ray).applyMatrix4(t_),!(n.boundingBox!==null&&Ir.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ir)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,M=y;v<M;v+=3){const b=o.getX(v),E=o.getX(v+1),L=o.getX(v+2);r=wl(this,m,e,n,c,u,f,b,E,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=o.getX(p),y=o.getX(p+1),v=o.getX(p+2);r=wl(this,a,e,n,c,u,f,S,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=S,M=y;v<M;v+=3){const b=v,E=v+1,L=v+2;r=wl(this,m,e,n,c,u,f,b,E,L),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=_,m=g;p<m;p+=3){const S=p,y=p+1,v=p+2;r=wl(this,a,e,n,c,u,f,S,y,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function lD(i,e,t,n,r,s,a,o){let l;if(e.side===Pn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===br,o),l===null)return null;Al.copy(o),Al.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Al);return c<t.near||c>t.far?null:{distance:c,point:Al.clone(),object:i}}function wl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ps),i.getVertexPosition(l,Ls),i.getVertexPosition(c,Ds);const u=lD(i,e,t,n,Ps,Ls,Ds,Tl);if(u){r&&(El.fromBufferAttribute(r,o),Ml.fromBufferAttribute(r,l),bl.fromBufferAttribute(r,c),u.uv=bi.getInterpolation(Tl,Ps,Ls,Ds,El,Ml,bl,new ot)),s&&(El.fromBufferAttribute(s,o),Ml.fromBufferAttribute(s,l),bl.fromBufferAttribute(s,c),u.uv1=bi.getInterpolation(Tl,Ps,Ls,Ds,El,Ml,bl,new ot),u.uv2=u.uv1),a&&(i_.fromBufferAttribute(a,o),r_.fromBufferAttribute(a,l),s_.fromBufferAttribute(a,c),u.normal=bi.getInterpolation(Tl,Ps,Ls,Ds,i_,r_,s_,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};bi.getNormal(Ps,Ls,Ds,f.normal),u.face=f}return u}class Lo extends ps{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new is(c,3)),this.setAttribute("normal",new is(u,3)),this.setAttribute("uv",new is(f,2));function _(g,p,m,S,y,v,M,b,E,L,I){const x=v/E,C=M/L,O=v/2,Y=M/2,D=b/2,k=E+1,F=L+1;let $=0,X=0;const j=new q;for(let R=0;R<F;R++){const K=R*C-Y;for(let re=0;re<k;re++){const Ie=re*x-O;j[g]=Ie*S,j[p]=K*y,j[m]=D,c.push(j.x,j.y,j.z),j[g]=0,j[p]=0,j[m]=b>0?1:-1,u.push(j.x,j.y,j.z),f.push(re/E),f.push(1-R/L),$+=1}}for(let R=0;R<L;R++)for(let K=0;K<E;K++){const re=h+K+k*R,Ie=h+K+k*(R+1),W=h+(K+1)+k*(R+1),Z=h+(K+1)+k*R;l.push(re,Ie,Z),l.push(Ie,W,Z),X+=6}o.addGroup(d,X,I),d+=X,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function mn(i){const e={};for(let t=0;t<i.length;t++){const n=ha(i[t]);for(const r in n)e[r]=n[r]}return e}function cD(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jx(i){return i.getRenderTarget()===null?i.outputColorSpace:ht.workingColorSpace}const uD={clone:ha,merge:mn};var fD=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hD=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends Nc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fD,this.fragmentShader=hD,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=cD(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Qx extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new q,a_=new ot,o_=new ot;class Qn extends Qx{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_h*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ef*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _h*2*Math.atan(Math.tan(ef*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,t){return this.getViewBounds(e,a_,o_),t.subVectors(o_,a_)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ef*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Os=1;class dD extends Vn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Qn(Is,Os,e,t);r.layers=this.layers,this.add(r);const s=new Qn(Is,Os,e,t);s.layers=this.layers,this.add(s);const a=new Qn(Is,Os,e,t);a.layers=this.layers,this.add(a);const o=new Qn(Is,Os,e,t);o.layers=this.layers,this.add(o);const l=new Qn(Is,Os,e,t);l.layers=this.layers,this.add(l);const c=new Qn(Is,Os,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Xi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class ey extends un{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ca,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pD extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(ea("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ns?Kt:ei),this.texture=new ey(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Lo(5,5,5),s=new Ji({name:"CubemapFromEquirect",uniforms:ha(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:vr});s.uniforms.tEquirect.value=t;const a=new wi(r,s),o=t.minFilter;return t.minFilter===$r&&(t.minFilter=Nt),new dD(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const xf=new q,mD=new q,gD=new Qe;class Br{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=xf.subVectors(n,t).cross(mD.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xf),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||gD.getNormalMatrix(e),r=this.coplanarPoint(xf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Od,Cl=new q;class ty{constructor(e=new Br,t=new Br,n=new Br,r=new Br,s=new Br,a=new Br){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Xi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],_=r[9],g=r[10],p=r[11],m=r[12],S=r[13],y=r[14],v=r[15];if(n[0].setComponents(l-s,h-c,p-d,v-m).normalize(),n[1].setComponents(l+s,h+c,p+d,v+m).normalize(),n[2].setComponents(l+a,h+u,p+_,v+S).normalize(),n[3].setComponents(l-a,h-u,p-_,v-S).normalize(),n[4].setComponents(l-o,h-f,p-g,v-y).normalize(),t===Xi)n[5].setComponents(l+o,h+f,p+g,v+y).normalize();else if(t===vc)n[5].setComponents(o,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Cl.x=r.normal.x>0?e.max.x:e.min.x,Cl.y=r.normal.y>0?e.max.y:e.min.y,Cl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Cl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ny(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function _D(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=i.SHORT;else if(f instanceof Uint32Array)g=i.UNSIGNED_INT;else if(f instanceof Int32Array)g=i.INT;else if(f instanceof Int8Array)g=i.BYTE;else if(f instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,_=u.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&_.length===0&&i.bufferSubData(f,0,h),_.length!==0){for(let g=0,p=_.length;g<p;g++){const m=_[g];t?i.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):i.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class Do extends ps{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const S=m*h-a;for(let y=0;y<c;y++){const v=y*f-s;_.push(v,-S,0),g.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){const y=S+c*m,v=S+c*(m+1),M=S+1+c*(m+1),b=S+1+c*m;d.push(y,v,b),d.push(v,M,b)}this.setIndex(d),this.setAttribute("position",new is(_,3)),this.setAttribute("normal",new is(g,3)),this.setAttribute("uv",new is(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Do(e.width,e.height,e.widthSegments,e.heightSegments)}}var vD=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xD=`#ifdef USE_ALPHAHASH
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
#endif`,yD=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,SD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ED=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bD=`#ifdef USE_AOMAP
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
#endif`,TD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AD=`#ifdef USE_BATCHING
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
#endif`,wD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,CD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,RD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PD=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,LD=`#ifdef USE_IRIDESCENCE
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
#endif`,DD=`#ifdef USE_BUMPMAP
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
#endif`,ID=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,OD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ND=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,BD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,kD=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GD=`#define PI 3.141592653589793
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
} // validated`,HD=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,VD=`vec3 transformedNormal = objectNormal;
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
#endif`,WD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$D=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,XD=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jD="gl_FragColor = linearToOutputTexel( gl_FragColor );",YD=`
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
}`,KD=`#ifdef USE_ENVMAP
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
#endif`,ZD=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JD=`#ifdef USE_ENVMAP
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
#endif`,QD=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eI=`#ifdef USE_ENVMAP
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
#endif`,tI=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nI=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iI=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rI=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sI=`#ifdef USE_GRADIENTMAP
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
}`,aI=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,oI=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lI=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uI=`uniform bool receiveShadow;
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
#endif`,fI=`#ifdef USE_ENVMAP
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
#endif`,hI=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pI=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mI=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gI=`PhysicalMaterial material;
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
#endif`,_I=`struct PhysicalMaterial {
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
}`,vI=`
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
#endif`,xI=`#if defined( RE_IndirectDiffuse )
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
#endif`,yI=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,EI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,bI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,TI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CI=`#if defined( USE_POINTS_UV )
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
#endif`,RI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DI=`#ifdef USE_MORPHNORMALS
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
#endif`,II=`#ifdef USE_MORPHTARGETS
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
#endif`,OI=`#ifdef USE_MORPHTARGETS
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
#endif`,UI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,NI=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zI=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kI=`#ifdef USE_NORMALMAP
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
#endif`,GI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,WI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$I=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,XI=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,KI=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ZI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QI=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n2=`float getShadowMask() {
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
}`,i2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r2=`#ifdef USE_SKINNING
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
#endif`,s2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,a2=`#ifdef USE_SKINNING
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
#endif`,o2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,f2=`#ifdef USE_TRANSMISSION
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
#endif`,h2=`#ifdef USE_TRANSMISSION
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
#endif`,d2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v2=`uniform sampler2D t2D;
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
}`,x2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,S2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M2=`#include <common>
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
}`,b2=`#if DEPTH_PACKING == 3200
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
}`,T2=`#define DISTANCE
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
}`,A2=`#define DISTANCE
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
}`,w2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R2=`uniform float scale;
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
}`,P2=`uniform vec3 diffuse;
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
}`,L2=`#include <common>
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
}`,D2=`uniform vec3 diffuse;
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
}`,I2=`#define LAMBERT
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
}`,O2=`#define LAMBERT
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
}`,U2=`#define MATCAP
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
}`,N2=`#define MATCAP
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
}`,F2=`#define NORMAL
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
}`,B2=`#define NORMAL
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
}`,z2=`#define PHONG
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
}`,k2=`#define PHONG
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
}`,G2=`#define STANDARD
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
}`,H2=`#define STANDARD
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
}`,V2=`#define TOON
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
}`,W2=`#define TOON
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
}`,$2=`uniform float size;
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
}`,X2=`uniform vec3 diffuse;
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
}`,q2=`#include <common>
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
}`,j2=`uniform vec3 color;
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
}`,Y2=`uniform float rotation;
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
}`,K2=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:vD,alphahash_pars_fragment:xD,alphamap_fragment:yD,alphamap_pars_fragment:SD,alphatest_fragment:ED,alphatest_pars_fragment:MD,aomap_fragment:bD,aomap_pars_fragment:TD,batching_pars_vertex:AD,batching_vertex:wD,begin_vertex:CD,beginnormal_vertex:RD,bsdfs:PD,iridescence_fragment:LD,bumpmap_pars_fragment:DD,clipping_planes_fragment:ID,clipping_planes_pars_fragment:OD,clipping_planes_pars_vertex:UD,clipping_planes_vertex:ND,color_fragment:FD,color_pars_fragment:BD,color_pars_vertex:zD,color_vertex:kD,common:GD,cube_uv_reflection_fragment:HD,defaultnormal_vertex:VD,displacementmap_pars_vertex:WD,displacementmap_vertex:$D,emissivemap_fragment:XD,emissivemap_pars_fragment:qD,colorspace_fragment:jD,colorspace_pars_fragment:YD,envmap_fragment:KD,envmap_common_pars_fragment:ZD,envmap_pars_fragment:JD,envmap_pars_vertex:QD,envmap_physical_pars_fragment:fI,envmap_vertex:eI,fog_vertex:tI,fog_pars_vertex:nI,fog_fragment:iI,fog_pars_fragment:rI,gradientmap_pars_fragment:sI,lightmap_fragment:aI,lightmap_pars_fragment:oI,lights_lambert_fragment:lI,lights_lambert_pars_fragment:cI,lights_pars_begin:uI,lights_toon_fragment:hI,lights_toon_pars_fragment:dI,lights_phong_fragment:pI,lights_phong_pars_fragment:mI,lights_physical_fragment:gI,lights_physical_pars_fragment:_I,lights_fragment_begin:vI,lights_fragment_maps:xI,lights_fragment_end:yI,logdepthbuf_fragment:SI,logdepthbuf_pars_fragment:EI,logdepthbuf_pars_vertex:MI,logdepthbuf_vertex:bI,map_fragment:TI,map_pars_fragment:AI,map_particle_fragment:wI,map_particle_pars_fragment:CI,metalnessmap_fragment:RI,metalnessmap_pars_fragment:PI,morphcolor_vertex:LI,morphnormal_vertex:DI,morphtarget_pars_vertex:II,morphtarget_vertex:OI,normal_fragment_begin:UI,normal_fragment_maps:NI,normal_pars_fragment:FI,normal_pars_vertex:BI,normal_vertex:zI,normalmap_pars_fragment:kI,clearcoat_normal_fragment_begin:GI,clearcoat_normal_fragment_maps:HI,clearcoat_pars_fragment:VI,iridescence_pars_fragment:WI,opaque_fragment:$I,packing:XI,premultiplied_alpha_fragment:qI,project_vertex:jI,dithering_fragment:YI,dithering_pars_fragment:KI,roughnessmap_fragment:ZI,roughnessmap_pars_fragment:JI,shadowmap_pars_fragment:QI,shadowmap_pars_vertex:e2,shadowmap_vertex:t2,shadowmask_pars_fragment:n2,skinbase_vertex:i2,skinning_pars_vertex:r2,skinning_vertex:s2,skinnormal_vertex:a2,specularmap_fragment:o2,specularmap_pars_fragment:l2,tonemapping_fragment:c2,tonemapping_pars_fragment:u2,transmission_fragment:f2,transmission_pars_fragment:h2,uv_pars_fragment:d2,uv_pars_vertex:p2,uv_vertex:m2,worldpos_vertex:g2,background_vert:_2,background_frag:v2,backgroundCube_vert:x2,backgroundCube_frag:y2,cube_vert:S2,cube_frag:E2,depth_vert:M2,depth_frag:b2,distanceRGBA_vert:T2,distanceRGBA_frag:A2,equirect_vert:w2,equirect_frag:C2,linedashed_vert:R2,linedashed_frag:P2,meshbasic_vert:L2,meshbasic_frag:D2,meshlambert_vert:I2,meshlambert_frag:O2,meshmatcap_vert:U2,meshmatcap_frag:N2,meshnormal_vert:F2,meshnormal_frag:B2,meshphong_vert:z2,meshphong_frag:k2,meshphysical_vert:G2,meshphysical_frag:H2,meshtoon_vert:V2,meshtoon_frag:W2,points_vert:$2,points_frag:X2,shadow_vert:q2,shadow_frag:j2,sprite_vert:Y2,sprite_frag:K2},ce={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ei={basic:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:mn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:mn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:mn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new dt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:mn([ce.points,ce.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:mn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:mn([ce.common,ce.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:mn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:mn([ce.sprite,ce.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:mn([ce.common,ce.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:mn([ce.lights,ce.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Ei.physical={uniforms:mn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const Rl={r:0,b:0,g:0};function Z2(i,e,t,n,r,s,a){const o=new dt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function _(p,m){let S=!1,y=m.isScene===!0?m.background:null;y&&y.isTexture&&(y=(m.backgroundBlurriness>0?t:e).get(y)),y===null?g(o,l):y&&y.isColor&&(g(y,1),S=!0);const v=i.xr.getEnvironmentBlendMode();v==="additive"?n.buffers.color.setClear(0,0,0,1,a):v==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ic)?(u===void 0&&(u=new wi(new Lo(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:ha(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(M,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ht.getTransfer(y.colorSpace)!==xt,(f!==y||h!==y.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new wi(new Do(2,2),new Ji({name:"BackgroundMaterial",uniforms:ha(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ht.getTransfer(y.colorSpace)!==xt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,m){p.getRGB(Rl,Jx(i)),n.buffers.color.setClear(Rl.r,Rl.g,Rl.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(o,l)},render:_}}function J2(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(D,k,F,$,X){let j=!1;if(a){const R=g($,F,k);c!==R&&(c=R,d(c.object)),j=m(D,$,F,X),j&&S(D,$,F,X)}else{const R=k.wireframe===!0;(c.geometry!==$.id||c.program!==F.id||c.wireframe!==R)&&(c.geometry=$.id,c.program=F.id,c.wireframe=R,j=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,L(D,k,F,$),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(D){return n.isWebGL2?i.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return n.isWebGL2?i.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function g(D,k,F){const $=F.wireframe===!0;let X=o[D.id];X===void 0&&(X={},o[D.id]=X);let j=X[k.id];j===void 0&&(j={},X[k.id]=j);let R=j[$];return R===void 0&&(R=p(h()),j[$]=R),R}function p(D){const k=[],F=[],$=[];for(let X=0;X<r;X++)k[X]=0,F[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:F,attributeDivisors:$,object:D,attributes:{},index:null}}function m(D,k,F,$){const X=c.attributes,j=k.attributes;let R=0;const K=F.getAttributes();for(const re in K)if(K[re].location>=0){const W=X[re];let Z=j[re];if(Z===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;R++}return c.attributesNum!==R||c.index!==$}function S(D,k,F,$){const X={},j=k.attributes;let R=0;const K=F.getAttributes();for(const re in K)if(K[re].location>=0){let W=j[re];W===void 0&&(re==="instanceMatrix"&&D.instanceMatrix&&(W=D.instanceMatrix),re==="instanceColor"&&D.instanceColor&&(W=D.instanceColor));const Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),X[re]=Z,R++}c.attributes=X,c.attributesNum=R,c.index=$}function y(){const D=c.newAttributes;for(let k=0,F=D.length;k<F;k++)D[k]=0}function v(D){M(D,0)}function M(D,k){const F=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;F[D]=1,$[D]===0&&(i.enableVertexAttribArray(D),$[D]=1),X[D]!==k&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,k),X[D]=k)}function b(){const D=c.newAttributes,k=c.enabledAttributes;for(let F=0,$=k.length;F<$;F++)k[F]!==D[F]&&(i.disableVertexAttribArray(F),k[F]=0)}function E(D,k,F,$,X,j,R){R===!0?i.vertexAttribIPointer(D,k,F,X,j):i.vertexAttribPointer(D,k,F,$,X,j)}function L(D,k,F,$){if(n.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const X=$.attributes,j=F.getAttributes(),R=k.defaultAttributeValues;for(const K in j){const re=j[K];if(re.location>=0){let Ie=X[K];if(Ie===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Ie=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Ie=D.instanceColor)),Ie!==void 0){const W=Ie.normalized,Z=Ie.itemSize,ue=t.get(Ie);if(ue===void 0)continue;const me=ue.buffer,ye=ue.type,he=ue.bytesPerElement,qe=n.isWebGL2===!0&&(ye===i.INT||ye===i.UNSIGNED_INT||Ie.gpuType===Ox);if(Ie.isInterleavedBufferAttribute){const Le=Ie.data,N=Le.stride,ke=Ie.offset;if(Le.isInstancedInterleavedBuffer){for(let pe=0;pe<re.locationSize;pe++)M(re.location+pe,Le.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let pe=0;pe<re.locationSize;pe++)v(re.location+pe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let pe=0;pe<re.locationSize;pe++)E(re.location+pe,Z/re.locationSize,ye,W,N*he,(ke+Z/re.locationSize*pe)*he,qe)}else{if(Ie.isInstancedBufferAttribute){for(let Le=0;Le<re.locationSize;Le++)M(re.location+Le,Ie.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Le=0;Le<re.locationSize;Le++)v(re.location+Le);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Le=0;Le<re.locationSize;Le++)E(re.location+Le,Z/re.locationSize,ye,W,Z*he,Z/re.locationSize*Le*he,qe)}}else if(R!==void 0){const W=R[K];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(re.location,W);break;case 3:i.vertexAttrib3fv(re.location,W);break;case 4:i.vertexAttrib4fv(re.location,W);break;default:i.vertexAttrib1fv(re.location,W)}}}}b()}function I(){O();for(const D in o){const k=o[D];for(const F in k){const $=k[F];for(const X in $)_($[X].object),delete $[X];delete k[F]}delete o[D]}}function x(D){if(o[D.id]===void 0)return;const k=o[D.id];for(const F in k){const $=k[F];for(const X in $)_($[X].object),delete $[X];delete k[F]}delete o[D.id]}function C(D){for(const k in o){const F=o[k];if(F[D.id]===void 0)continue;const $=F[D.id];for(const X in $)_($[X].object),delete $[X];delete F[D.id]}}function O(){Y(),u=!0,c!==l&&(c=l,d(c.object))}function Y(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:O,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:v,disableUnusedAttributes:b}}function Q2(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,_;if(r)d=i,_="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[_](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<h;_++)this.render(u[_],f[_]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let _=0;for(let g=0;g<h;g++)_+=f[g];t.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function eO(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,v=a||e.has("OES_texture_float"),M=y&&v,b=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:v,floatVertexTextures:M,maxSamples:b}}function tO(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Br,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:n,y=S*4;let v=m.clippingState||null;l.value=v,v=u(_,h,y,d);for(let M=0;M!==y;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=d+g*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==g;++y,v+=4)a.copy(f[y]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function nO(i){let e=new WeakMap;function t(a,o){return o===hh?a.mapping=ca:o===dh&&(a.mapping=ua),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===hh||o===dh)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new pD(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class iO extends Qx{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Vs=4,l_=[.125,.215,.35,.446,.526,.582],Hr=20,yf=new iO,c_=new dt;let Sf=null,Ef=0,Mf=0;const zr=(1+Math.sqrt(5))/2,Us=1/zr,u_=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,zr,Us),new q(0,zr,-Us),new q(Us,0,zr),new q(-Us,0,zr),new q(zr,Us,0),new q(-zr,Us,0)];class f_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=p_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=d_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sf,Ef,Mf),e.scissorTest=!1,Pl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sf=this._renderer.getRenderTarget(),Ef=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:vo,format:pi,colorSpace:Zi,depthBuffer:!1},r=h_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rO(s)),this._blurMaterial=sO(s,e,t)}return r}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,yf)}_sceneToCubeUV(e,t,n,r){const o=new Qn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(c_),u.toneMapping=xr,u.autoClear=!1;const d=new Yx({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1}),_=new wi(new Lo,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(c_),g=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):S===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;Pl(r,S*y,m>2?y:0,y,y),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===ca||e.mapping===ua;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=p_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=d_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new wi(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Pl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yf)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=u_[(r-1)%u_.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wi(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Hr;p>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hr}`);const m=[];let S=0;for(let E=0;E<Hr;++E){const L=E/g,I=Math.exp(-L*L/2);m.push(I),E===0?S+=I:E<p&&(S+=2*I)}for(let E=0;E<m.length;E++)m[E]=m[E]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const v=this._sizeLods[r],M=3*v*(r>y-Vs?r-y+Vs:0),b=4*(this._cubeSize-v);Pl(t,M,b,3*v,2*v),l.setRenderTarget(t),l.render(f,yf)}}function rO(i){const e=[],t=[],n=[];let r=i;const s=i-Vs+1+l_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Vs?l=l_[a-i+Vs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,_=6,g=3,p=2,m=1,S=new Float32Array(g*_*d),y=new Float32Array(p*_*d),v=new Float32Array(m*_*d);for(let b=0;b<d;b++){const E=b%3*2/3-1,L=b>2?0:-1,I=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];S.set(I,g*_*b),y.set(h,p*_*b);const x=[b,b,b,b,b,b];v.set(x,m*_*b)}const M=new ps;M.setAttribute("position",new Li(S,g)),M.setAttribute("uv",new Li(y,p)),M.setAttribute("faceIndex",new Li(v,m)),e.push(M),r>Vs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function h_(i,e,t){const n=new fs(i,e,t);return n.texture.mapping=Ic,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function sO(i,e,t){const n=new Float32Array(Hr),r=new q(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function d_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nd(),fragmentShader:`

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
		`,blending:vr,depthTest:!1,depthWrite:!1})}function p_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vr,depthTest:!1,depthWrite:!1})}function Nd(){return`

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
	`}function aO(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===hh||l===dh,u=l===ca||l===ua;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new f_(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new f_(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function oO(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function lO(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)e.remove(g[p])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const _ in d){const g=d[_];for(let p=0,m=g.length;p<m;p++)e.update(g[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,_=f.attributes.position;let g=0;if(d!==null){const S=d.array;g=d.version;for(let y=0,v=S.length;y<v;y+=3){const M=S[y+0],b=S[y+1],E=S[y+2];h.push(M,b,b,E,E,M)}}else if(_!==void 0){const S=_.array;g=_.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const M=y+0,b=y+1,E=y+2;h.push(M,b,b,E,E,M)}}else return;const p=new(Vx(h)?Zx:Kx)(h,1);p.version=g;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function cO(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,_){i.drawElements(s,_,o,d*l),t.update(_,s,1)}function f(d,_,g){if(g===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,_,o,d*l,g),t.update(_,s,g)}function h(d,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<g;m++)this.render(d[m]/l,_[m]);else{p.multiDrawElementsWEBGL(s,_,0,o,d,0,g);let m=0;for(let S=0;S<g;S++)m+=_[S];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function uO(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function fO(i,e){return i[0]-e[0]}function hO(i,e){return Math.abs(e[1])-Math.abs(i[1])}function dO(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new jt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let k=function(){Y.dispose(),s.delete(u),u.removeEventListener("dispose",k)};var d=k;p!==void 0&&p.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let I=0;y===!0&&(I=1),v===!0&&(I=2),M===!0&&(I=3);let x=u.attributes.position.count*I,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const O=new Float32Array(x*C*4*g),Y=new Xx(O,x,C,g);Y.type=Wi,Y.needsUpdate=!0;const D=I*4;for(let F=0;F<g;F++){const $=b[F],X=E[F],j=L[F],R=x*C*4*F;for(let K=0;K<$.count;K++){const re=K*D;y===!0&&(a.fromBufferAttribute($,K),O[R+re+0]=a.x,O[R+re+1]=a.y,O[R+re+2]=a.z,O[R+re+3]=0),v===!0&&(a.fromBufferAttribute(X,K),O[R+re+4]=a.x,O[R+re+5]=a.y,O[R+re+6]=a.z,O[R+re+7]=0),M===!0&&(a.fromBufferAttribute(j,K),O[R+re+8]=a.x,O[R+re+9]=a.y,O[R+re+10]=a.z,O[R+re+11]=j.itemSize===4?a.w:1)}}p={count:g,texture:Y,size:new ot(x,C)},s.set(u,p),u.addEventListener("dispose",k)}let m=0;for(let y=0;y<h.length;y++)m+=h[y];const S=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",S),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let v=0;v<_;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<_;v++){const M=g[v];M[0]=v,M[1]=h[v]}g.sort(hO);for(let v=0;v<8;v++)v<_&&g[v][1]?(o[v][0]=g[v][0],o[v][1]=g[v][1]):(o[v][0]=Number.MAX_SAFE_INTEGER,o[v][1]=0);o.sort(fO);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let S=0;for(let v=0;v<8;v++){const M=o[v],b=M[0],E=M[1];b!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+v)!==p[b]&&u.setAttribute("morphTarget"+v,p[b]),m&&u.getAttribute("morphNormal"+v)!==m[b]&&u.setAttribute("morphNormal"+v,m[b]),r[v]=E,S+=E):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),m&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-S;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function pO(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class iy extends un{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:ts,u!==ts&&u!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=pr),n===void 0&&u===fa&&(n=es),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:xn,this.minFilter=l!==void 0?l:xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ry=new un,sy=new iy(1,1);sy.compareFunction=Hx;const ay=new Xx,oy=new ZL,ly=new ey,m_=[],g_=[],__=new Float32Array(16),v_=new Float32Array(9),x_=new Float32Array(4);function Ea(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=m_[r];if(s===void 0&&(s=new Float32Array(r),m_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Ht(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fc(i,e){let t=g_[e];t===void 0&&(t=new Int32Array(e),g_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function mO(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function gO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function _O(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function vO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function xO(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;x_.set(n),i.uniformMatrix2fv(this.addr,!1,x_),Vt(t,n)}}function yO(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;v_.set(n),i.uniformMatrix3fv(this.addr,!1,v_),Vt(t,n)}}function SO(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ht(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,n))return;__.set(n),i.uniformMatrix4fv(this.addr,!1,__),Vt(t,n)}}function EO(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function MO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function bO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function TO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function AO(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function CO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function RO(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function PO(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?sy:ry;t.setTexture2D(e||s,r)}function LO(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||oy,r)}function DO(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||ly,r)}function IO(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ay,r)}function OO(i){switch(i){case 5126:return mO;case 35664:return gO;case 35665:return _O;case 35666:return vO;case 35674:return xO;case 35675:return yO;case 35676:return SO;case 5124:case 35670:return EO;case 35667:case 35671:return MO;case 35668:case 35672:return bO;case 35669:case 35673:return TO;case 5125:return AO;case 36294:return wO;case 36295:return CO;case 36296:return RO;case 35678:case 36198:case 36298:case 36306:case 35682:return PO;case 35679:case 36299:case 36307:return LO;case 35680:case 36300:case 36308:case 36293:return DO;case 36289:case 36303:case 36311:case 36292:return IO}}function UO(i,e){i.uniform1fv(this.addr,e)}function NO(i,e){const t=Ea(e,this.size,2);i.uniform2fv(this.addr,t)}function FO(i,e){const t=Ea(e,this.size,3);i.uniform3fv(this.addr,t)}function BO(i,e){const t=Ea(e,this.size,4);i.uniform4fv(this.addr,t)}function zO(i,e){const t=Ea(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function kO(i,e){const t=Ea(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function GO(i,e){const t=Ea(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function HO(i,e){i.uniform1iv(this.addr,e)}function VO(i,e){i.uniform2iv(this.addr,e)}function WO(i,e){i.uniform3iv(this.addr,e)}function $O(i,e){i.uniform4iv(this.addr,e)}function XO(i,e){i.uniform1uiv(this.addr,e)}function qO(i,e){i.uniform2uiv(this.addr,e)}function jO(i,e){i.uniform3uiv(this.addr,e)}function YO(i,e){i.uniform4uiv(this.addr,e)}function KO(i,e,t){const n=this.cache,r=e.length,s=Fc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ry,s[a])}function ZO(i,e,t){const n=this.cache,r=e.length,s=Fc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||oy,s[a])}function JO(i,e,t){const n=this.cache,r=e.length,s=Fc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ly,s[a])}function QO(i,e,t){const n=this.cache,r=e.length,s=Fc(t,r);Ht(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ay,s[a])}function eU(i){switch(i){case 5126:return UO;case 35664:return NO;case 35665:return FO;case 35666:return BO;case 35674:return zO;case 35675:return kO;case 35676:return GO;case 5124:case 35670:return HO;case 35667:case 35671:return VO;case 35668:case 35672:return WO;case 35669:case 35673:return $O;case 5125:return XO;case 36294:return qO;case 36295:return jO;case 36296:return YO;case 35678:case 36198:case 36298:case 36306:case 35682:return KO;case 35679:case 36299:case 36307:return ZO;case 35680:case 36300:case 36308:case 36293:return JO;case 36289:case 36303:case 36311:case 36292:return QO}}class tU{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=OO(t.type)}}class nU{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=eU(t.type)}}class iU{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function y_(i,e){i.seq.push(e),i.map[e.id]=e}function rU(i,e,t){const n=i.name,r=n.length;for(bf.lastIndex=0;;){const s=bf.exec(n),a=bf.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){y_(t,c===void 0?new tU(o,i,e):new nU(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new iU(o),y_(t,f)),t=f}}}class jl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);rU(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function S_(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const sU=37297;let aU=0;function oU(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function lU(i){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i);let n;switch(e===t?n="":e===_c&&t===gc?n="LinearDisplayP3ToLinearSRGB":e===gc&&t===_c&&(n="LinearSRGBToLinearDisplayP3"),i){case Zi:case Oc:return[n,"LinearTransferOETF"];case Kt:case Id:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function E_(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+oU(i.getShaderSource(e),a)}else return r}function cU(i,e){const t=lU(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function uU(i,e){let t;switch(e){case yL:t="Linear";break;case SL:t="Reinhard";break;case EL:t="OptimizedCineon";break;case ML:t="ACESFilmic";break;case TL:t="AgX";break;case bL:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function fU(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ws).join(`
`)}function hU(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function dU(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function pU(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ws(i){return i!==""}function M_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function b_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mU=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(i){return i.replace(mU,_U)}const gU=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _U(i,e){let t=je[e];if(t===void 0){const n=gU.get(e);if(n!==void 0)t=je[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return xh(t)}const vU=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function T_(i){return i.replace(vU,xU)}function xU(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function A_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function yU(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lx?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===jP?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zi&&(e="SHADOWMAP_TYPE_VSM"),e}function SU(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ca:case ua:e="ENVMAP_TYPE_CUBE";break;case Ic:e="ENVMAP_TYPE_CUBE_UV";break}return e}function EU(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function MU(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dx:e="ENVMAP_BLENDING_MULTIPLY";break;case vL:e="ENVMAP_BLENDING_MIX";break;case xL:e="ENVMAP_BLENDING_ADD";break}return e}function bU(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function TU(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=yU(t),c=SU(t),u=EU(t),f=MU(t),h=bU(t),d=t.isWebGL2?"":fU(t),_=hU(t),g=dU(s),p=r.createProgram();let m,S,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),S=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),S.length>0&&(S+=`
`)):(m=[A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),S=[d,A_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xr?"#define TONE_MAPPING":"",t.toneMapping!==xr?je.tonemapping_pars_fragment:"",t.toneMapping!==xr?uU("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,cU("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=xh(a),a=M_(a,t),a=b_(a,t),o=xh(o),o=M_(o,t),o=b_(o,t),a=T_(a),o=T_(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const v=y+m+a,M=y+S+o,b=S_(r,r.VERTEX_SHADER,v),E=S_(r,r.FRAGMENT_SHADER,M);r.attachShader(p,b),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function L(O){if(i.debug.checkShaderErrors){const Y=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(b).trim(),k=r.getShaderInfoLog(E).trim();let F=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,b,E);else{const X=E_(r,b,"vertex"),j=E_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Y+`
`+X+`
`+j)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(D===""||k==="")&&($=!1);$&&(O.diagnostics={runnable:F,programLog:Y,vertexShader:{log:D,prefix:m},fragmentShader:{log:k,prefix:S}})}r.deleteShader(b),r.deleteShader(E),I=new jl(r,p),x=pU(r,p)}let I;this.getUniforms=function(){return I===void 0&&L(this),I};let x;this.getAttributes=function(){return x===void 0&&L(this),x};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,sU)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=aU++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=b,this.fragmentShader=E,this}let AU=0;class wU{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new CU(e),t.set(e,n)),n}}class CU{constructor(e){this.id=AU++,this.code=e,this.usedTimes=0}}function RU(i,e,t,n,r,s,a){const o=new Ud,l=new wU,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let _=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,C,O,Y,D){const k=Y.fog,F=D.geometry,$=x.isMeshStandardMaterial?Y.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),j=X&&X.mapping===Ic?X.image.height:null,R=g[x.type];x.precision!==null&&(_=r.getMaxPrecision(x.precision),_!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",_,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=K!==void 0?K.length:0;let Ie=0;F.morphAttributes.position!==void 0&&(Ie=1),F.morphAttributes.normal!==void 0&&(Ie=2),F.morphAttributes.color!==void 0&&(Ie=3);let W,Z,ue,me;if(R){const at=Ei[R];W=at.vertexShader,Z=at.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,l.update(x),ue=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const ye=i.getRenderTarget(),he=D.isInstancedMesh===!0,qe=D.isBatchedMesh===!0,Le=!!x.map,N=!!x.matcap,ke=!!X,pe=!!x.aoMap,Ce=!!x.lightMap,_e=!!x.bumpMap,H=!!x.normalMap,Oe=!!x.displacementMap,w=!!x.emissiveMap,T=!!x.metalnessMap,B=!!x.roughnessMap,ee=x.anisotropy>0,Q=x.clearcoat>0,te=x.iridescence>0,fe=x.sheen>0,le=x.transmission>0,oe=ee&&!!x.anisotropyMap,Ae=Q&&!!x.clearcoatMap,ze=Q&&!!x.clearcoatNormalMap,J=Q&&!!x.clearcoatRoughnessMap,rt=te&&!!x.iridescenceMap,Re=te&&!!x.iridescenceThicknessMap,Ge=fe&&!!x.sheenColorMap,be=fe&&!!x.sheenRoughnessMap,ge=!!x.specularMap,He=!!x.specularColorMap,Ke=!!x.specularIntensityMap,st=le&&!!x.transmissionMap,de=le&&!!x.thicknessMap,tt=!!x.gradientMap,P=!!x.alphaMap,ne=x.alphaTest>0,ie=!!x.alphaHash,ve=!!x.extensions;let De=xr;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(De=i.toneMapping);const Ye={isWebGL2:f,shaderID:R,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:_,batching:qe,instancing:he,instancingColor:he&&D.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Zi,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:N,envMap:ke,envMapMode:ke&&X.mapping,envMapCubeUVHeight:j,aoMap:pe,lightMap:Ce,bumpMap:_e,normalMap:H,displacementMap:d&&Oe,emissiveMap:w,normalMapObjectSpace:H&&x.normalMapType===FL,normalMapTangentSpace:H&&x.normalMapType===NL,metalnessMap:T,roughnessMap:B,anisotropy:ee,anisotropyMap:oe,clearcoat:Q,clearcoatMap:Ae,clearcoatNormalMap:ze,clearcoatRoughnessMap:J,iridescence:te,iridescenceMap:rt,iridescenceThicknessMap:Re,sheen:fe,sheenColorMap:Ge,sheenRoughnessMap:be,specularMap:ge,specularColorMap:He,specularIntensityMap:Ke,transmission:le,transmissionMap:st,thicknessMap:de,gradientMap:tt,opaque:x.transparent===!1&&x.blending===Qs&&x.alphaToCoverage===!1,alphaMap:P,alphaTest:ne,alphaHash:ie,combine:x.combine,mapUv:Le&&p(x.map.channel),aoMapUv:pe&&p(x.aoMap.channel),lightMapUv:Ce&&p(x.lightMap.channel),bumpMapUv:_e&&p(x.bumpMap.channel),normalMapUv:H&&p(x.normalMap.channel),displacementMapUv:Oe&&p(x.displacementMap.channel),emissiveMapUv:w&&p(x.emissiveMap.channel),metalnessMapUv:T&&p(x.metalnessMap.channel),roughnessMapUv:B&&p(x.roughnessMap.channel),anisotropyMapUv:oe&&p(x.anisotropyMap.channel),clearcoatMapUv:Ae&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ze&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:be&&p(x.sheenRoughnessMap.channel),specularMapUv:ge&&p(x.specularMap.channel),specularColorMapUv:He&&p(x.specularColorMap.channel),specularIntensityMapUv:Ke&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:de&&p(x.thicknessMap.channel),alphaMapUv:P&&p(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(H||ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Le||P),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&O.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Vi,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ve&&x.extensions.derivatives===!0,extensionFragDepth:ve&&x.extensions.fragDepth===!0,extensionDrawBuffers:ve&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ve&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function S(x){const C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)C.push(O),C.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(y(C,x),v(C,x),C.push(i.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function y(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function v(x,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.matcap&&o.enable(4),C.envMap&&o.enable(5),C.normalMapObjectSpace&&o.enable(6),C.normalMapTangentSpace&&o.enable(7),C.clearcoat&&o.enable(8),C.iridescence&&o.enable(9),C.alphaTest&&o.enable(10),C.vertexColors&&o.enable(11),C.vertexAlphas&&o.enable(12),C.vertexUv1s&&o.enable(13),C.vertexUv2s&&o.enable(14),C.vertexUv3s&&o.enable(15),C.vertexTangents&&o.enable(16),C.anisotropy&&o.enable(17),C.alphaHash&&o.enable(18),C.batching&&o.enable(19),x.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),x.push(o.mask)}function M(x){const C=g[x.type];let O;if(C){const Y=Ei[C];O=uD.clone(Y.uniforms)}else O=x.uniforms;return O}function b(x,C){let O;for(let Y=0,D=u.length;Y<D;Y++){const k=u[Y];if(k.cacheKey===C){O=k,++O.usedTimes;break}}return O===void 0&&(O=new TU(i,C,x,s),u.push(O)),O}function E(x){if(--x.usedTimes===0){const C=u.indexOf(x);u[C]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function I(){l.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:M,acquireProgram:b,releaseProgram:E,releaseShaderCache:L,programs:u,dispose:I}}function PU(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function LU(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function w_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function C_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,d,_,g,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),e++,m}function o(f,h,d,_,g,p){const m=a(f,h,d,_,g,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,_,g,p){const m=a(f,h,d,_,g,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||LU),n.length>1&&n.sort(h||w_),r.length>1&&r.sort(h||w_)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function DU(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new C_,i.set(n,[a])):r>=s.length?(a=new C_,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function IU(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new dt};break;case"SpotLight":t={position:new q,direction:new q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function OU(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let UU=0;function NU(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function FU(i,e){const t=new IU,n=OU(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,a=new Jt,o=new Jt;function l(u,f){let h=0,d=0,_=0;for(let O=0;O<9;O++)r.probe[O].set(0,0,0);let g=0,p=0,m=0,S=0,y=0,v=0,M=0,b=0,E=0,L=0,I=0;u.sort(NU);const x=f===!0?Math.PI:1;for(let O=0,Y=u.length;O<Y;O++){const D=u[O],k=D.color,F=D.intensity,$=D.distance,X=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=k.r*F*x,d+=k.g*F*x,_+=k.b*F*x;else if(D.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],F);I++}else if(D.isDirectionalLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*x),D.castShadow){const R=D.shadow,K=n.get(D);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.directionalShadow[g]=K,r.directionalShadowMap[g]=X,r.directionalShadowMatrix[g]=D.shadow.matrix,v++}r.directional[g]=j,g++}else if(D.isSpotLight){const j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(k).multiplyScalar(F*x),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[m]=j;const R=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,R.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[m]=R.matrix,D.castShadow){const K=n.get(D);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.spotShadow[m]=K,r.spotShadowMap[m]=X,b++}m++}else if(D.isRectAreaLight){const j=t.get(D);j.color.copy(k).multiplyScalar(F),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=j,S++}else if(D.isPointLight){const j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*x),j.distance=D.distance,j.decay=D.decay,D.castShadow){const R=D.shadow,K=n.get(D);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=D.shadow.matrix,M++}r.point[p]=j,p++}else if(D.isHemisphereLight){const j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(F*x),j.groundColor.copy(D.groundColor).multiplyScalar(F*x),r.hemi[y]=j,y++}}S>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==g||C.pointLength!==p||C.spotLength!==m||C.rectAreaLength!==S||C.hemiLength!==y||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==b||C.numSpotMaps!==E||C.numLightProbes!==I)&&(r.directional.length=g,r.spot.length=m,r.rectArea.length=S,r.point.length=p,r.hemi.length=y,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=b+E-L,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=I,C.directionalLength=g,C.pointLength=p,C.spotLength=m,C.rectAreaLength=S,C.hemiLength=y,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=b,C.numSpotMaps=E,C.numLightProbes=I,r.version=UU++)}function c(u,f){let h=0,d=0,_=0,g=0,p=0;const m=f.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const v=u[S];if(v.isDirectionalLight){const M=r.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),h++}else if(v.isSpotLight){const M=r.spot[_];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),_++}else if(v.isRectAreaLight){const M=r.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),a.copy(v.matrixWorld),a.premultiply(m),o.extractRotation(a),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const M=r.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const M=r.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function R_(i,e){const t=new FU(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function BU(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new R_(i,e),t.set(s,[l])):a>=o.length?(l=new R_(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class zU extends Nc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OL,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kU extends Nc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const GU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,HU=`uniform sampler2D shadow_pass;
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
}`;function VU(i,e,t){let n=new ty;const r=new ot,s=new ot,a=new jt,o=new zU({depthPacking:UL}),l=new kU,c={},u=t.maxTextureSize,f={[br]:Pn,[Pn]:br,[Vi]:Vi},h=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:GU,fragmentShader:HU}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const _=new ps;_.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new wi(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lx;let m=this.type;this.render=function(b,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const I=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(vr),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const Y=m!==zi&&this.type===zi,D=m===zi&&this.type!==zi;for(let k=0,F=b.length;k<F;k++){const $=b[k],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const j=X.getFrameExtents();if(r.multiply(j),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,X.mapSize.y=s.y)),X.map===null||Y===!0||D===!0){const K=this.type!==zi?{minFilter:xn,magFilter:xn}:{};X.map!==null&&X.map.dispose(),X.map=new fs(r.x,r.y,K),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const R=X.getViewportCount();for(let K=0;K<R;K++){const re=X.getViewport(K);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),O.viewport(a),X.updateMatrices($,K),n=X.getFrustum(),v(E,L,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===zi&&S(X,L),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(I,x,C)};function S(b,E){const L=e.update(g);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new fs(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,L,h,g,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,L,d,g,null)}function y(b,E,L,I){let x=null;const C=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)x=C;else if(x=L.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=x.uuid,Y=E.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let k=D[Y];k===void 0&&(k=x.clone(),D[Y]=k,E.addEventListener("dispose",M)),x=k}if(x.visible=E.visible,x.wireframe=E.wireframe,I===zi?x.side=E.shadowSide!==null?E.shadowSide:E.side:x.side=E.shadowSide!==null?E.shadowSide:f[E.side],x.alphaMap=E.alphaMap,x.alphaTest=E.alphaTest,x.map=E.map,x.clipShadows=E.clipShadows,x.clippingPlanes=E.clippingPlanes,x.clipIntersection=E.clipIntersection,x.displacementMap=E.displacementMap,x.displacementScale=E.displacementScale,x.displacementBias=E.displacementBias,x.wireframeLinewidth=E.wireframeLinewidth,x.linewidth=E.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=L}return x}function v(b,E,L,I,x){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===zi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const Y=e.update(b),D=b.material;if(Array.isArray(D)){const k=Y.groups;for(let F=0,$=k.length;F<$;F++){const X=k[F],j=D[X.materialIndex];if(j&&j.visible){const R=y(b,j,I,x);b.onBeforeShadow(i,b,E,L,Y,R,X),i.renderBufferDirect(L,null,Y,R,b,X),b.onAfterShadow(i,b,E,L,Y,R,X)}}}else if(D.visible){const k=y(b,D,I,x);b.onBeforeShadow(i,b,E,L,Y,k,null),i.renderBufferDirect(L,null,Y,k,b,null),b.onAfterShadow(i,b,E,L,Y,k,null)}}const O=b.children;for(let Y=0,D=O.length;Y<D;Y++)v(O[Y],E,L,I,x)}function M(b){b.target.removeEventListener("dispose",M);for(const L in c){const I=c[L],x=b.target.uuid;x in I&&(I[x].dispose(),delete I[x])}}}function WU(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const ne=new jt;let ie=null;const ve=new jt(0,0,0,0);return{setMask:function(De){ie!==De&&!P&&(i.colorMask(De,De,De,De),ie=De)},setLocked:function(De){P=De},setClear:function(De,Ye,at,Te,Ee){Ee===!0&&(De*=Te,Ye*=Te,at*=Te),ne.set(De,Ye,at,Te),ve.equals(ne)===!1&&(i.clearColor(De,Ye,at,Te),ve.copy(ne))},reset:function(){P=!1,ie=null,ve.set(-1,0,0,0)}}}function s(){let P=!1,ne=null,ie=null,ve=null;return{setTest:function(De){De?he(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(De){ne!==De&&!P&&(i.depthMask(De),ne=De)},setFunc:function(De){if(ie!==De){switch(De){case fL:i.depthFunc(i.NEVER);break;case hL:i.depthFunc(i.ALWAYS);break;case dL:i.depthFunc(i.LESS);break;case pc:i.depthFunc(i.LEQUAL);break;case pL:i.depthFunc(i.EQUAL);break;case mL:i.depthFunc(i.GEQUAL);break;case gL:i.depthFunc(i.GREATER);break;case _L:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=De}},setLocked:function(De){P=De},setClear:function(De){ve!==De&&(i.clearDepth(De),ve=De)},reset:function(){P=!1,ne=null,ie=null,ve=null}}}function a(){let P=!1,ne=null,ie=null,ve=null,De=null,Ye=null,at=null,Te=null,Ee=null;return{setTest:function(Pe){P||(Pe?he(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Pe){ne!==Pe&&!P&&(i.stencilMask(Pe),ne=Pe)},setFunc:function(Pe,se,Ne){(ie!==Pe||ve!==se||De!==Ne)&&(i.stencilFunc(Pe,se,Ne),ie=Pe,ve=se,De=Ne)},setOp:function(Pe,se,Ne){(Ye!==Pe||at!==se||Te!==Ne)&&(i.stencilOp(Pe,se,Ne),Ye=Pe,at=se,Te=Ne)},setLocked:function(Pe){P=Pe},setClear:function(Pe){Ee!==Pe&&(i.clearStencil(Pe),Ee=Pe)},reset:function(){P=!1,ne=null,ie=null,ve=null,De=null,Ye=null,at=null,Te=null,Ee=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},_=new WeakMap,g=[],p=null,m=!1,S=null,y=null,v=null,M=null,b=null,E=null,L=null,I=new dt(0,0,0),x=0,C=!1,O=null,Y=null,D=null,k=null,F=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(R)[1]),X=j>=1):R.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),X=j>=2);let K=null,re={};const Ie=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),Z=new jt().fromArray(Ie),ue=new jt().fromArray(W);function me(P,ne,ie,ve){const De=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(P,Ye),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<ie;at++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ne,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ne+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Ye}const ye={};ye[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(i.DEPTH_TEST),l.setFunc(pc),Oe(!1),w(lg),he(i.CULL_FACE),_e(vr);function he(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function qe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Le(P,ne){return d[P]!==ne?(i.bindFramebuffer(P,ne),d[P]=ne,n&&(P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne)),!0):!1}function N(P,ne){let ie=g,ve=!1;if(P)if(ie=_.get(ne),ie===void 0&&(ie=[],_.set(ne,ie)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(ie.length!==De.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,at=De.length;Ye<at;Ye++)ie[Ye]=i.COLOR_ATTACHMENT0+Ye;ie.length=De.length,ve=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,ve=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ke(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const pe={[Gr]:i.FUNC_ADD,[KP]:i.FUNC_SUBTRACT,[ZP]:i.FUNC_REVERSE_SUBTRACT};if(n)pe[hg]=i.MIN,pe[dg]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(pe[hg]=P.MIN_EXT,pe[dg]=P.MAX_EXT)}const Ce={[JP]:i.ZERO,[QP]:i.ONE,[eL]:i.SRC_COLOR,[uh]:i.SRC_ALPHA,[aL]:i.SRC_ALPHA_SATURATE,[rL]:i.DST_COLOR,[nL]:i.DST_ALPHA,[tL]:i.ONE_MINUS_SRC_COLOR,[fh]:i.ONE_MINUS_SRC_ALPHA,[sL]:i.ONE_MINUS_DST_COLOR,[iL]:i.ONE_MINUS_DST_ALPHA,[oL]:i.CONSTANT_COLOR,[lL]:i.ONE_MINUS_CONSTANT_COLOR,[cL]:i.CONSTANT_ALPHA,[uL]:i.ONE_MINUS_CONSTANT_ALPHA};function _e(P,ne,ie,ve,De,Ye,at,Te,Ee,Pe){if(P===vr){m===!0&&(qe(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),P!==YP){if(P!==S||Pe!==C){if((y!==Gr||b!==Gr)&&(i.blendEquation(i.FUNC_ADD),y=Gr,b=Gr),Pe)switch(P){case Qs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cg:i.blendFunc(i.ONE,i.ONE);break;case ug:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fg:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Qs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cg:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ug:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fg:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}v=null,M=null,E=null,L=null,I.set(0,0,0),x=0,S=P,C=Pe}return}De=De||ne,Ye=Ye||ie,at=at||ve,(ne!==y||De!==b)&&(i.blendEquationSeparate(pe[ne],pe[De]),y=ne,b=De),(ie!==v||ve!==M||Ye!==E||at!==L)&&(i.blendFuncSeparate(Ce[ie],Ce[ve],Ce[Ye],Ce[at]),v=ie,M=ve,E=Ye,L=at),(Te.equals(I)===!1||Ee!==x)&&(i.blendColor(Te.r,Te.g,Te.b,Ee),I.copy(Te),x=Ee),S=P,C=!1}function H(P,ne){P.side===Vi?qe(i.CULL_FACE):he(i.CULL_FACE);let ie=P.side===Pn;ne&&(ie=!ie),Oe(ie),P.blending===Qs&&P.transparent===!1?_e(vr):_e(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ve=P.stencilWrite;c.setTest(ve),ve&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){O!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),O=P)}function w(P){P!==XP?(he(i.CULL_FACE),P!==Y&&(P===lg?i.cullFace(i.BACK):P===qP?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),Y=P}function T(P){P!==D&&(X&&i.lineWidth(P),D=P)}function B(P,ne,ie){P?(he(i.POLYGON_OFFSET_FILL),(k!==ne||F!==ie)&&(i.polygonOffset(ne,ie),k=ne,F=ie)):qe(i.POLYGON_OFFSET_FILL)}function ee(P){P?he(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function Q(P){P===void 0&&(P=i.TEXTURE0+$-1),K!==P&&(i.activeTexture(P),K=P)}function te(P,ne,ie){ie===void 0&&(K===null?ie=i.TEXTURE0+$-1:ie=K);let ve=re[ie];ve===void 0&&(ve={type:void 0,texture:void 0},re[ie]=ve),(ve.type!==P||ve.texture!==ne)&&(K!==ie&&(i.activeTexture(ie),K=ie),i.bindTexture(P,ne||ye[P]),ve.type=P,ve.texture=ne)}function fe(){const P=re[K];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Re(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function be(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function Ke(P){ue.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ue.copy(P))}function st(P,ne){let ie=f.get(ne);ie===void 0&&(ie=new WeakMap,f.set(ne,ie));let ve=ie.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(ne,P.name),ie.set(P,ve))}function de(P,ne){const ve=f.get(ne).get(P);u.get(ne)!==ve&&(i.uniformBlockBinding(ne,ve,P.__bindingPointIndex),u.set(ne,ve))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,re={},d={},_=new WeakMap,g=[],p=null,m=!1,S=null,y=null,v=null,M=null,b=null,E=null,L=null,I=new dt(0,0,0),x=0,C=!1,O=null,Y=null,D=null,k=null,F=null,Z.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:he,disable:qe,bindFramebuffer:Le,drawBuffers:N,useProgram:ke,setBlending:_e,setMaterial:H,setFlipSided:Oe,setCullFace:w,setLineWidth:T,setPolygonOffset:B,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:oe,texImage2D:be,texImage3D:ge,updateUBOMapping:st,uniformBlockBinding:de,texStorage2D:Re,texStorage3D:Ge,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:rt,scissor:He,viewport:Ke,reset:tt}}function $U(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,T){return d?new OffscreenCanvas(w,T):xo("canvas")}function g(w,T,B,ee){let Q=1;if((w.width>ee||w.height>ee)&&(Q=ee/Math.max(w.width,w.height)),Q<1||T===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const te=T?vh:Math.floor,fe=te(Q*w.width),le=te(Q*w.height);f===void 0&&(f=_(fe,le));const oe=B?_(fe,le):f;return oe.width=fe,oe.height=le,oe.getContext("2d").drawImage(w,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+fe+"x"+le+")."),oe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return Vg(w.width)&&Vg(w.height)}function m(w){return o?!1:w.wrapS!==di||w.wrapT!==di||w.minFilter!==xn&&w.minFilter!==Nt}function S(w,T){return w.generateMipmaps&&T&&w.minFilter!==xn&&w.minFilter!==Nt}function y(w){i.generateMipmap(w)}function v(w,T,B,ee,Q=!1){if(o===!1)return T;if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let te=T;if(T===i.RED&&(B===i.FLOAT&&(te=i.R32F),B===i.HALF_FLOAT&&(te=i.R16F),B===i.UNSIGNED_BYTE&&(te=i.R8)),T===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.R8UI),B===i.UNSIGNED_SHORT&&(te=i.R16UI),B===i.UNSIGNED_INT&&(te=i.R32UI),B===i.BYTE&&(te=i.R8I),B===i.SHORT&&(te=i.R16I),B===i.INT&&(te=i.R32I)),T===i.RG&&(B===i.FLOAT&&(te=i.RG32F),B===i.HALF_FLOAT&&(te=i.RG16F),B===i.UNSIGNED_BYTE&&(te=i.RG8)),T===i.RGBA){const fe=Q?mc:ht.getTransfer(ee);B===i.FLOAT&&(te=i.RGBA32F),B===i.HALF_FLOAT&&(te=i.RGBA16F),B===i.UNSIGNED_BYTE&&(te=fe===xt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function M(w,T,B){return S(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==xn&&w.minFilter!==Nt?Math.log2(Math.max(T.width,T.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?T.mipmaps.length:1}function b(w){return w===xn||w===pg||w===Ua?i.NEAREST:i.LINEAR}function E(w){const T=w.target;T.removeEventListener("dispose",E),I(T),T.isVideoTexture&&u.delete(T)}function L(w){const T=w.target;T.removeEventListener("dispose",L),C(T)}function I(w){const T=n.get(w);if(T.__webglInit===void 0)return;const B=w.source,ee=h.get(B);if(ee){const Q=ee[T.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(w),Object.keys(ee).length===0&&h.delete(B)}n.remove(w)}function x(w){const T=n.get(w);i.deleteTexture(T.__webglTexture);const B=w.source,ee=h.get(B);delete ee[T.__cacheKey],a.memory.textures--}function C(w){const T=w.texture,B=n.get(w),ee=n.get(T);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let te=0;te<B.__webglFramebuffer[Q].length;te++)i.deleteFramebuffer(B.__webglFramebuffer[Q][te]);else i.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)i.deleteFramebuffer(B.__webglFramebuffer[Q]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let Q=0,te=T.length;Q<te;Q++){const fe=n.get(T[Q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(T[Q])}n.remove(T),n.remove(w)}let O=0;function Y(){O=0}function D(){const w=O;return w>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),O+=1,w}function k(w){const T=[];return T.push(w.wrapS),T.push(w.wrapT),T.push(w.wrapR||0),T.push(w.magFilter),T.push(w.minFilter),T.push(w.anisotropy),T.push(w.internalFormat),T.push(w.format),T.push(w.type),T.push(w.generateMipmaps),T.push(w.premultiplyAlpha),T.push(w.flipY),T.push(w.unpackAlignment),T.push(w.colorSpace),T.join()}function F(w,T){const B=n.get(w);if(w.isVideoTexture&&H(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,w,T);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+T)}function $(w,T){const B=n.get(w);if(w.version>0&&B.__version!==w.version){Z(B,w,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+T)}function X(w,T){const B=n.get(w);if(w.version>0&&B.__version!==w.version){Z(B,w,T);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+T)}function j(w,T){const B=n.get(w);if(w.version>0&&B.__version!==w.version){ue(B,w,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+T)}const R={[ph]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[mh]:i.MIRRORED_REPEAT},K={[xn]:i.NEAREST,[pg]:i.NEAREST_MIPMAP_NEAREST,[Ua]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[ju]:i.LINEAR_MIPMAP_NEAREST,[$r]:i.LINEAR_MIPMAP_LINEAR},re={[BL]:i.NEVER,[WL]:i.ALWAYS,[zL]:i.LESS,[Hx]:i.LEQUAL,[kL]:i.EQUAL,[VL]:i.GEQUAL,[GL]:i.GREATER,[HL]:i.NOTEQUAL};function Ie(w,T,B){if(T.type===Wi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Nt||T.magFilter===ju||T.magFilter===Ua||T.magFilter===$r||T.minFilter===Nt||T.minFilter===ju||T.minFilter===Ua||T.minFilter===$r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(i.texParameteri(w,i.TEXTURE_WRAP_S,R[T.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,R[T.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,R[T.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,K[T.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,K[T.minFilter])):(i.texParameteri(w,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(w,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(T.wrapS!==di||T.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(w,i.TEXTURE_MAG_FILTER,b(T.magFilter)),i.texParameteri(w,i.TEXTURE_MIN_FILTER,b(T.minFilter)),T.minFilter!==xn&&T.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,re[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===xn||T.minFilter!==Ua&&T.minFilter!==$r||T.type===Wi&&e.has("OES_texture_float_linear")===!1||o===!1&&T.type===vo&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(i.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function W(w,T){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,T.addEventListener("dispose",E));const ee=T.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=k(T);if(te!==w.__cacheKey){Q[te]===void 0&&(Q[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[te].usedTimes++;const fe=Q[w.__cacheKey];fe!==void 0&&(Q[w.__cacheKey].usedTimes--,fe.usedTimes===0&&x(T)),w.__cacheKey=te,w.__webglTexture=Q[te].texture}return B}function Z(w,T,B){let ee=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ee=i.TEXTURE_3D);const Q=W(w,T),te=T.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+B);const fe=n.get(te);if(te.version!==fe.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const le=ht.getPrimaries(ht.workingColorSpace),oe=T.colorSpace===ei?null:ht.getPrimaries(T.colorSpace),Ae=T.colorSpace===ei||le===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=m(T)&&p(T.image)===!1;let J=g(T.image,ze,!1,r.maxTextureSize);J=Oe(T,J);const rt=p(J)||o,Re=s.convert(T.format,T.colorSpace);let Ge=s.convert(T.type),be=v(T.internalFormat,Re,Ge,T.colorSpace,T.isVideoTexture);Ie(ee,T,rt);let ge;const He=T.mipmaps,Ke=o&&T.isVideoTexture!==!0&&be!==kx,st=fe.__version===void 0||Q===!0,de=te.dataReady,tt=M(T,J,rt);if(T.isDepthTexture)be=i.DEPTH_COMPONENT,o?T.type===Wi?be=i.DEPTH_COMPONENT32F:T.type===pr?be=i.DEPTH_COMPONENT24:T.type===es?be=i.DEPTH24_STENCIL8:be=i.DEPTH_COMPONENT16:T.type===Wi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ts&&be===i.DEPTH_COMPONENT&&T.type!==Dd&&T.type!==pr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=pr,Ge=s.convert(T.type)),T.format===fa&&be===i.DEPTH_COMPONENT&&(be=i.DEPTH_STENCIL,T.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=es,Ge=s.convert(T.type))),st&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,be,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,be,J.width,J.height,0,Re,Ge,null));else if(T.isDataTexture)if(He.length>0&&rt){Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,be,He[0].width,He[0].height);for(let P=0,ne=He.length;P<ne;P++)ge=He[P],Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ge.width,ge.height,Re,Ge,ge.data):t.texImage2D(i.TEXTURE_2D,P,be,ge.width,ge.height,0,Re,Ge,ge.data);T.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(i.TEXTURE_2D,tt,be,J.width,J.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Re,Ge,J.data)):t.texImage2D(i.TEXTURE_2D,0,be,J.width,J.height,0,Re,Ge,J.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ke&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,be,He[0].width,He[0].height,J.depth);for(let P=0,ne=He.length;P<ne;P++)ge=He[P],T.format!==pi?Re!==null?Ke?de&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,ge.width,ge.height,J.depth,Re,ge.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,be,ge.width,ge.height,J.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,ge.width,ge.height,J.depth,Re,Ge,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,P,be,ge.width,ge.height,J.depth,0,Re,Ge,ge.data)}else{Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,be,He[0].width,He[0].height);for(let P=0,ne=He.length;P<ne;P++)ge=He[P],T.format!==pi?Re!==null?Ke?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,ge.width,ge.height,Re,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,P,be,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,ge.width,ge.height,Re,Ge,ge.data):t.texImage2D(i.TEXTURE_2D,P,be,ge.width,ge.height,0,Re,Ge,ge.data)}else if(T.isDataArrayTexture)Ke?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,be,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Re,Ge,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,Re,Ge,J.data);else if(T.isData3DTexture)Ke?(st&&t.texStorage3D(i.TEXTURE_3D,tt,be,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Re,Ge,J.data)):t.texImage3D(i.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,Re,Ge,J.data);else if(T.isFramebufferTexture){if(st)if(Ke)t.texStorage2D(i.TEXTURE_2D,tt,be,J.width,J.height);else{let P=J.width,ne=J.height;for(let ie=0;ie<tt;ie++)t.texImage2D(i.TEXTURE_2D,ie,be,P,ne,0,Re,Ge,null),P>>=1,ne>>=1}}else if(He.length>0&&rt){Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,be,He[0].width,He[0].height);for(let P=0,ne=He.length;P<ne;P++)ge=He[P],Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,Re,Ge,ge):t.texImage2D(i.TEXTURE_2D,P,be,Re,Ge,ge);T.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(i.TEXTURE_2D,tt,be,J.width,J.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Ge,J)):t.texImage2D(i.TEXTURE_2D,0,be,Re,Ge,J);S(T,rt)&&y(ee),fe.__version=te.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function ue(w,T,B){if(T.image.length!==6)return;const ee=W(w,T),Q=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const fe=ht.getPrimaries(ht.workingColorSpace),le=T.colorSpace===ei?null:ht.getPrimaries(T.colorSpace),oe=T.colorSpace===ei||fe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,ze=T.image[0]&&T.image[0].isDataTexture,J=[];for(let P=0;P<6;P++)!Ae&&!ze?J[P]=g(T.image[P],!1,!0,r.maxCubemapSize):J[P]=ze?T.image[P].image:T.image[P],J[P]=Oe(T,J[P]);const rt=J[0],Re=p(rt)||o,Ge=s.convert(T.format,T.colorSpace),be=s.convert(T.type),ge=v(T.internalFormat,Ge,be,T.colorSpace),He=o&&T.isVideoTexture!==!0,Ke=te.__version===void 0||ee===!0,st=Q.dataReady;let de=M(T,rt,Re);Ie(i.TEXTURE_CUBE_MAP,T,Re);let tt;if(Ae){He&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,ge,rt.width,rt.height);for(let P=0;P<6;P++){tt=J[P].mipmaps;for(let ne=0;ne<tt.length;ne++){const ie=tt[ne];T.format!==pi?Ge!==null?He?st&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,ie.width,ie.height,Ge,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,ge,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,ie.width,ie.height,Ge,be,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,ge,ie.width,ie.height,0,Ge,be,ie.data)}}}else{tt=T.mipmaps,He&&Ke&&(tt.length>0&&de++,t.texStorage2D(i.TEXTURE_CUBE_MAP,de,ge,J[0].width,J[0].height));for(let P=0;P<6;P++)if(ze){He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,J[P].width,J[P].height,Ge,be,J[P].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ge,J[P].width,J[P].height,0,Ge,be,J[P].data);for(let ne=0;ne<tt.length;ne++){const ve=tt[ne].image[P].image;He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,ve.width,ve.height,Ge,be,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,ge,ve.width,ve.height,0,Ge,be,ve.data)}}else{He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,Ge,be,J[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,ge,Ge,be,J[P]);for(let ne=0;ne<tt.length;ne++){const ie=tt[ne];He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,Ge,be,ie.image[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,ge,Ge,be,ie.image[P])}}}S(T,Re)&&y(i.TEXTURE_CUBE_MAP),te.__version=Q.version,T.onUpdate&&T.onUpdate(T)}w.__version=T.version}function me(w,T,B,ee,Q,te){const fe=s.convert(B.format,B.colorSpace),le=s.convert(B.type),oe=v(B.internalFormat,fe,le,B.colorSpace);if(!n.get(T).__hasExternalTextures){const ze=Math.max(1,T.width>>te),J=Math.max(1,T.height>>te);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,oe,ze,J,T.depth,0,fe,le,null):t.texImage2D(Q,te,oe,ze,J,0,fe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),_e(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,0,Ce(T)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(w,T,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),T.depthBuffer&&!T.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||_e(T)){const Q=T.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Wi?ee=i.DEPTH_COMPONENT32F:Q.type===pr&&(ee=i.DEPTH_COMPONENT24));const te=Ce(T);_e(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ee,T.width,T.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ee,T.width,T.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,T.width,T.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,w)}else if(T.depthBuffer&&T.stencilBuffer){const ee=Ce(T);B&&_e(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,w)}else{const ee=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],fe=s.convert(te.format,te.colorSpace),le=s.convert(te.type),oe=v(te.internalFormat,fe,le,te.colorSpace),Ae=Ce(T);B&&_e(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,oe,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,oe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,oe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(w,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const ee=n.get(T.depthTexture).__webglTexture,Q=Ce(T);if(T.depthTexture.format===ts)_e(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(T.depthTexture.format===fa)_e(T)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(w){const T=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!T.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(T.__webglFramebuffer,w)}else if(B){T.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[ee]),T.__webglDepthbuffer[ee]=i.createRenderbuffer(),ye(T.__webglDepthbuffer[ee],w,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=i.createRenderbuffer(),ye(T.__webglDepthbuffer,w,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(w,T,B){const ee=n.get(w);T!==void 0&&me(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&qe(w)}function N(w){const T=w.texture,B=n.get(w),ee=n.get(T);w.addEventListener("dispose",L),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=T.version,a.memory.textures++);const Q=w.isWebGLCubeRenderTarget===!0,te=w.isWebGLMultipleRenderTargets===!0,fe=p(w)||o;if(Q){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let oe=0;oe<T.mipmaps.length;oe++)B.__webglFramebuffer[le][oe]=i.createFramebuffer()}else B.__webglFramebuffer[le]=i.createFramebuffer()}else{if(o&&T.mipmaps&&T.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<T.mipmaps.length;le++)B.__webglFramebuffer[le]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(te)if(r.drawBuffers){const le=w.texture;for(let oe=0,Ae=le.length;oe<Ae;oe++){const ze=n.get(le[oe]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&w.samples>0&&_e(w)===!1){const le=te?T:[T];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<le.length;oe++){const Ae=le[oe];B.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const ze=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),rt=v(Ae.internalFormat,ze,J,Ae.colorSpace,w.isXRRenderTarget===!0),Re=Ce(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,rt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,T,fe);for(let le=0;le<6;le++)if(o&&T.mipmaps&&T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)me(B.__webglFramebuffer[le][oe],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else me(B.__webglFramebuffer[le],w,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);S(T,fe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=w.texture;for(let oe=0,Ae=le.length;oe<Ae;oe++){const ze=le[oe],J=n.get(ze);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ie(i.TEXTURE_2D,ze,fe),me(B.__webglFramebuffer,w,ze,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),S(ze,fe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(o?le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),Ie(le,T,fe),o&&T.mipmaps&&T.mipmaps.length>0)for(let oe=0;oe<T.mipmaps.length;oe++)me(B.__webglFramebuffer[oe],w,T,i.COLOR_ATTACHMENT0,le,oe);else me(B.__webglFramebuffer,w,T,i.COLOR_ATTACHMENT0,le,0);S(T,fe)&&y(le),t.unbindTexture()}w.depthBuffer&&qe(w)}function ke(w){const T=p(w)||o,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,Q=B.length;ee<Q;ee++){const te=B[ee];if(S(te,T)){const fe=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(fe,le),y(fe),t.unbindTexture()}}}function pe(w){if(o&&w.samples>0&&_e(w)===!1){const T=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,ee=w.height;let Q=i.COLOR_BUFFER_BIT;const te=[],fe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(w),oe=w.isWebGLMultipleRenderTargets===!0;if(oe)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){te.push(i.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&te.push(fe);const ze=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ze===!1&&(w.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),oe){const J=n.get(T[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);const ze=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Ce(w){return Math.min(r.maxSamples,w.samples)}function _e(w){const T=n.get(w);return o&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function H(w){const T=a.render.frame;u.get(w)!==T&&(u.set(w,T),w.update())}function Oe(w,T){const B=w.colorSpace,ee=w.format,Q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===gh||B!==Zi&&B!==ei&&(ht.getTransfer(B)===xt?o===!1?e.has("EXT_sRGB")===!0&&ee===pi?(w.format=gh,w.minFilter=Nt,w.generateMipmaps=!1):T=Wx.sRGBToLinear(T):(ee!==pi||Q!==yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),T}this.allocateTextureUnit=D,this.resetTextureUnits=Y,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Le,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function XU(i,e,t){const n=t.isWebGL2;function r(s,a=ei){let o;const l=ht.getTransfer(a);if(s===yr)return i.UNSIGNED_BYTE;if(s===Ux)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Nx)return i.UNSIGNED_SHORT_5_5_5_1;if(s===AL)return i.BYTE;if(s===wL)return i.SHORT;if(s===Dd)return i.UNSIGNED_SHORT;if(s===Ox)return i.INT;if(s===pr)return i.UNSIGNED_INT;if(s===Wi)return i.FLOAT;if(s===vo)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===CL)return i.ALPHA;if(s===pi)return i.RGBA;if(s===RL)return i.LUMINANCE;if(s===PL)return i.LUMINANCE_ALPHA;if(s===ts)return i.DEPTH_COMPONENT;if(s===fa)return i.DEPTH_STENCIL;if(s===gh)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===LL)return i.RED;if(s===Fx)return i.RED_INTEGER;if(s===DL)return i.RG;if(s===Bx)return i.RG_INTEGER;if(s===zx)return i.RGBA_INTEGER;if(s===Yu||s===Ku||s===Zu||s===Ju)if(l===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Yu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ku)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ju)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Yu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ku)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ju)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mg||s===gg||s===_g||s===vg)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mg)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gg)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_g)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vg)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===kx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xg||s===yg)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===xg)return l===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sg||s===Eg||s===Mg||s===bg||s===Tg||s===Ag||s===wg||s===Cg||s===Rg||s===Pg||s===Lg||s===Dg||s===Ig||s===Og)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Eg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===bg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ag)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===wg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Dg)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ig)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Og)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qu||s===Ug||s===Ng)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Qu)return l===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ug)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ng)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===IL||s===Fg||s===Bg||s===zg)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Qu)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Fg)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Bg)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zg)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class qU extends Qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ll extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jU={type:"move"};class Tf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ll,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ll,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ll,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,_=.005;c.inputState.pinching&&h>d+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jU)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ll;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const YU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,KU=`
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

}`;class ZU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ji({extensions:{fragDepth:!0},vertexShader:YU,fragmentShader:KU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new Do(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class JU extends Sa{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,_=null;const g=new ZU,p=t.getContextAttributes();let m=null,S=null;const y=[],v=[],M=new ot;let b=null;const E=new Qn;E.layers.enable(1),E.viewport=new jt;const L=new Qn;L.layers.enable(2),L.viewport=new jt;const I=[E,L],x=new qU;x.layers.enable(1),x.layers.enable(2);let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=y[W];return Z===void 0&&(Z=new Tf,y[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=y[W];return Z===void 0&&(Z=new Tf,y[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=y[W];return Z===void 0&&(Z=new Tf,y[W]=Z),Z.getHandSpace()};function Y(W){const Z=v.indexOf(W.inputSource);if(Z===-1)return;const ue=y[Z];ue!==void 0&&(ue.update(W.inputSource,W.frame,c||a),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function D(){r.removeEventListener("select",Y),r.removeEventListener("selectstart",Y),r.removeEventListener("selectend",Y),r.removeEventListener("squeeze",Y),r.removeEventListener("squeezestart",Y),r.removeEventListener("squeezeend",Y),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",k);for(let W=0;W<y.length;W++){const Z=v[W];Z!==null&&(v[W]=null,y[W].disconnect(Z))}C=null,O=null,g.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,S=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",Y),r.addEventListener("selectstart",Y),r.addEventListener("selectend",Y),r.addEventListener("squeeze",Y),r.addEventListener("squeezestart",Y),r.addEventListener("squeezeend",Y),r.addEventListener("end",D),r.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(M),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new fs(d.framebufferWidth,d.framebufferHeight,{format:pi,type:yr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ue=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?fa:ts,ue=p.stencil?es:pr);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new fs(h.textureWidth,h.textureHeight,{format:pi,type:yr,depthTexture:new iy(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const he=e.properties.get(S);he.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function k(W){for(let Z=0;Z<W.removed.length;Z++){const ue=W.removed[Z],me=v.indexOf(ue);me>=0&&(v[me]=null,y[me].disconnect(ue))}for(let Z=0;Z<W.added.length;Z++){const ue=W.added[Z];let me=v.indexOf(ue);if(me===-1){for(let he=0;he<y.length;he++)if(he>=v.length){v.push(ue),me=he;break}else if(v[he]===null){v[he]=ue,me=he;break}if(me===-1)break}const ye=y[me];ye&&ye.connect(ue)}}const F=new q,$=new q;function X(W,Z,ue){F.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const me=F.distanceTo($),ye=Z.projectionMatrix.elements,he=ue.projectionMatrix.elements,qe=ye[14]/(ye[10]-1),Le=ye[14]/(ye[10]+1),N=(ye[9]+1)/ye[5],ke=(ye[9]-1)/ye[5],pe=(ye[8]-1)/ye[0],Ce=(he[8]+1)/he[0],_e=qe*pe,H=qe*Ce,Oe=me/(-pe+Ce),w=Oe*-pe;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(w),W.translateZ(Oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const T=qe+Oe,B=Le+Oe,ee=_e-w,Q=H+(me-w),te=N*Le/B*T,fe=ke*Le/B*T;W.projectionMatrix.makePerspective(ee,Q,te,fe,T,B),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;g.texture!==null&&(W.near=g.depthNear,W.far=g.depthFar),x.near=L.near=E.near=W.near,x.far=L.far=E.far=W.far,(C!==x.near||O!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,O=x.far,E.near=C,E.far=O,L.near=C,L.far=O,E.updateProjectionMatrix(),L.updateProjectionMatrix(),W.updateProjectionMatrix());const Z=W.parent,ue=x.cameras;j(x,Z);for(let me=0;me<ue.length;me++)j(ue[me],Z);ue.length===2?X(x,E,L):x.projectionMatrix.copy(E.projectionMatrix),R(W,x,Z)};function R(W,Z,ue){ue===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=_h*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return g.texture!==null};let K=null;function re(W,Z){if(u=Z.getViewerPose(c||a),_=Z,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let me=!1;ue.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let he=0;he<ue.length;he++){const qe=ue[he];let Le=null;if(d!==null)Le=d.getViewport(qe);else{const ke=f.getViewSubImage(h,qe);Le=ke.viewport,he===0&&(e.setRenderTargetTextures(S,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(S))}let N=I[he];N===void 0&&(N=new Qn,N.layers.enable(he),N.viewport=new jt,I[he]=N),N.matrix.fromArray(qe.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(qe.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(N)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const he=f.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&g.init(e,he,r.renderState)}}for(let ue=0;ue<y.length;ue++){const me=v[ue],ye=y[ue];me!==null&&ye!==void 0&&ye.update(me,Z,c||a)}g.render(e,x),K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),_=null}const Ie=new ny;Ie.setAnimationLoop(re),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function QU(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Jx(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*y,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Pn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function eN(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function c(S,y){let v=r[S.id];v===void 0&&(_(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",p));const M=y.program;n.updateUBOMapping(S,M);const b=e.render.frame;s[S.id]!==b&&(h(S),s[S.id]=b)}function u(S){const y=f();S.__bindingPointIndex=y;const v=i.createBuffer(),M=S.__size,b=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,M,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=r[S.id],v=S.uniforms,M=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let b=0,E=v.length;b<E;b++){const L=Array.isArray(v[b])?v[b]:[v[b]];for(let I=0,x=L.length;I<x;I++){const C=L[I];if(d(C,b,I,M)===!0){const O=C.__offset,Y=Array.isArray(C.value)?C.value:[C.value];let D=0;for(let k=0;k<Y.length;k++){const F=Y[k],$=g(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,O+D,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,y,v,M){const b=S.value,E=y+"_"+v;if(M[E]===void 0)return typeof b=="number"||typeof b=="boolean"?M[E]=b:M[E]=b.clone(),!0;{const L=M[E];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return M[E]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function _(S){const y=S.uniforms;let v=0;const M=16;for(let E=0,L=y.length;E<L;E++){const I=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,C=I.length;x<C;x++){const O=I[x],Y=Array.isArray(O.value)?O.value:[O.value];for(let D=0,k=Y.length;D<k;D++){const F=Y[D],$=g(F),X=v%M;X!==0&&M-X<$.boundary&&(v+=M-X),O.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=$.storage}}}const b=v%M;return b>0&&(v+=M-b),S.__size=v,S.__cache={},this}function g(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class cy{constructor(e={}){const{canvas:t=XL(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=xr,this.toneMappingExposure=1;const y=this;let v=!1,M=0,b=0,E=null,L=-1,I=null;const x=new jt,C=new jt;let O=null;const Y=new dt(0);let D=0,k=t.width,F=t.height,$=1,X=null,j=null;const R=new jt(0,0,k,F),K=new jt(0,0,k,F);let re=!1;const Ie=new ty;let W=!1,Z=!1,ue=null;const me=new Jt,ye=new ot,he=new q,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return E===null?$:1}let N=n;function ke(A,U){for(let V=0;V<A.length;V++){const G=A[V],z=t.getContext(G,U);if(z!==null)return z}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ld}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&U.shift(),N=ke(U,A),N===null)throw ke(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pe,Ce,_e,H,Oe,w,T,B,ee,Q,te,fe,le,oe,Ae,ze,J,rt,Re,Ge,be,ge,He,Ke;function st(){pe=new oO(N),Ce=new eO(N,pe,e),pe.init(Ce),ge=new XU(N,pe,Ce),_e=new WU(N,pe,Ce),H=new uO(N),Oe=new PU,w=new $U(N,pe,_e,Oe,Ce,ge,H),T=new nO(y),B=new aO(y),ee=new _D(N,Ce),He=new J2(N,pe,ee,Ce),Q=new lO(N,ee,H,He),te=new pO(N,Q,ee,H),Re=new dO(N,Ce,w),ze=new tO(Oe),fe=new RU(y,T,B,pe,Ce,He,ze),le=new QU(y,Oe),oe=new DU,Ae=new BU(pe,Ce),rt=new Z2(y,T,B,_e,te,h,l),J=new VU(y,te,Ce),Ke=new eN(N,H,Ce,_e),Ge=new Q2(N,pe,H,Ce),be=new cO(N,pe,H,Ce),H.programs=fe.programs,y.capabilities=Ce,y.extensions=pe,y.properties=Oe,y.renderLists=oe,y.shadowMap=J,y.state=_e,y.info=H}st();const de=new JU(y,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(k,F,!1))},this.getSize=function(A){return A.set(k,F)},this.setSize=function(A,U,V=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=A,F=U,t.width=Math.floor(A*$),t.height=Math.floor(U*$),V===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(k*$,F*$).floor()},this.setDrawingBufferSize=function(A,U,V){k=A,F=U,$=V,t.width=Math.floor(A*V),t.height=Math.floor(U*V),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,U,V,G){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,U,V,G),_e.viewport(x.copy(R).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(K)},this.setScissor=function(A,U,V,G){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,U,V,G),_e.scissor(C.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){_e.setScissorTest(re=A)},this.setOpaqueSort=function(A){X=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(A=!0,U=!0,V=!0){let G=0;if(A){let z=!1;if(E!==null){const ae=E.texture.format;z=ae===zx||ae===Bx||ae===Fx}if(z){const ae=E.texture.type,Se=ae===yr||ae===pr||ae===Dd||ae===es||ae===Ux||ae===Nx,Fe=rt.getClearColor(),Me=rt.getClearAlpha(),we=Fe.r,Be=Fe.g,We=Fe.b;Se?(d[0]=we,d[1]=Be,d[2]=We,d[3]=Me,N.clearBufferuiv(N.COLOR,0,d)):(_[0]=we,_[1]=Be,_[2]=We,_[3]=Me,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}U&&(G|=N.DEPTH_BUFFER_BIT),V&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),oe.dispose(),Ae.dispose(),Oe.dispose(),T.dispose(),B.dispose(),te.dispose(),He.dispose(),Ke.dispose(),fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ee),de.removeEventListener("sessionend",Pe),ue&&(ue.dispose(),ue=null),se.stop()};function tt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const A=H.autoReset,U=J.enabled,V=J.autoUpdate,G=J.needsUpdate,z=J.type;st(),H.autoReset=A,J.enabled=U,J.autoUpdate=V,J.needsUpdate=G,J.type=z}function ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ie(A){const U=A.target;U.removeEventListener("dispose",ie),ve(U)}function ve(A){De(A),Oe.remove(A)}function De(A){const U=Oe.get(A).programs;U!==void 0&&(U.forEach(function(V){fe.releaseProgram(V)}),A.isShaderMaterial&&fe.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,V,G,z,ae){U===null&&(U=qe);const Se=z.isMesh&&z.matrixWorld.determinant()<0,Fe=gt(A,U,V,G,z);_e.setMaterial(G,Se);let Me=V.index,we=1;if(G.wireframe===!0){if(Me=Q.getWireframeAttribute(V),Me===void 0)return;we=2}const Be=V.drawRange,We=V.attributes.position;let St=Be.start*we,zt=(Be.start+Be.count)*we;ae!==null&&(St=Math.max(St,ae.start*we),zt=Math.min(zt,(ae.start+ae.count)*we)),Me!==null?(St=Math.max(St,0),zt=Math.min(zt,Me.count)):We!=null&&(St=Math.max(St,0),zt=Math.min(zt,We.count));const ut=zt-St;if(ut<0||ut===1/0)return;He.setup(z,G,Fe,V,Me);let hn,ft=Ge;if(Me!==null&&(hn=ee.get(Me),ft=be,ft.setIndex(hn)),z.isMesh)G.wireframe===!0?(_e.setLineWidth(G.wireframeLinewidth*Le()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(z.isLine){let $e=G.linewidth;$e===void 0&&($e=1),_e.setLineWidth($e*Le()),z.isLineSegments?ft.setMode(N.LINES):z.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else z.isPoints?ft.setMode(N.POINTS):z.isSprite&&ft.setMode(N.TRIANGLES);if(z.isBatchedMesh)ft.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ft.renderInstances(St,ut,z.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Bc=Math.min(V.instanceCount,$e);ft.renderInstances(St,ut,Bc)}else ft.render(St,ut)};function Ye(A,U,V){A.transparent===!0&&A.side===Vi&&A.forceSinglePass===!1?(A.side=Pn,A.needsUpdate=!0,mt(A,U,V),A.side=br,A.needsUpdate=!0,mt(A,U,V),A.side=Vi):mt(A,U,V)}this.compile=function(A,U,V=null){V===null&&(V=A),p=Ae.get(V),p.init(),S.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),A!==V&&A.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(y._useLegacyLights);const G=new Set;return A.traverse(function(z){const ae=z.material;if(ae)if(Array.isArray(ae))for(let Se=0;Se<ae.length;Se++){const Fe=ae[Se];Ye(Fe,V,z),G.add(Fe)}else Ye(ae,V,z),G.add(ae)}),S.pop(),p=null,G},this.compileAsync=function(A,U,V=null){const G=this.compile(A,U,V);return new Promise(z=>{function ae(){if(G.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&G.delete(Se)}),G.size===0){z(A);return}setTimeout(ae,10)}pe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let at=null;function Te(A){at&&at(A)}function Ee(){se.stop()}function Pe(){se.start()}const se=new ny;se.setAnimationLoop(Te),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(A){at=A,de.setAnimationLoop(A),A===null?se.stop():se.start()},de.addEventListener("sessionstart",Ee),de.addEventListener("sessionend",Pe),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(U),U=de.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,U,E),p=Ae.get(A,S.length),p.init(),S.push(p),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ie.setFromProjectionMatrix(me),Z=this.localClippingEnabled,W=ze.init(this.clippingPlanes,Z),g=oe.get(A,m.length),g.init(),m.push(g),Ne(A,U,0,y.sortObjects),g.finish(),y.sortObjects===!0&&g.sort(X,j),this.info.render.frame++,W===!0&&ze.beginShadows();const V=p.state.shadowsArray;if(J.render(V,A,U),W===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&rt.render(g,A),p.setupLights(y._useLegacyLights),U.isArrayCamera){const G=U.cameras;for(let z=0,ae=G.length;z<ae;z++){const Se=G[z];Ue(g,A,Se,Se.viewport)}}else Ue(g,A,U);E!==null&&(w.updateMultisampleRenderTarget(E),w.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(y,A,U),He.resetDefaultState(),L=-1,I=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Ne(A,U,V,G){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){G&&he.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);const Se=te.update(A),Fe=A.material;Fe.visible&&g.push(A,Se,Fe,V,he.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const Se=te.update(A),Fe=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),he.copy(A.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),he.copy(Se.boundingSphere.center)),he.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Fe)){const Me=Se.groups;for(let we=0,Be=Me.length;we<Be;we++){const We=Me[we],St=Fe[We.materialIndex];St&&St.visible&&g.push(A,Se,St,V,he.z,We)}}else Fe.visible&&g.push(A,Se,Fe,V,he.z,null)}}const ae=A.children;for(let Se=0,Fe=ae.length;Se<Fe;Se++)Ne(ae[Se],U,V,G)}function Ue(A,U,V,G){const z=A.opaque,ae=A.transmissive,Se=A.transparent;p.setupLightsView(V),W===!0&&ze.setGlobalState(y.clippingPlanes,V),ae.length>0&&Ve(z,ae,U,V),G&&_e.viewport(x.copy(G)),z.length>0&&Mt(z,U,V),ae.length>0&&Mt(ae,U,V),Se.length>0&&Mt(Se,U,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function Ve(A,U,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ae=Ce.isWebGL2;ue===null&&(ue=new fs(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?vo:yr,minFilter:$r,samples:ae?4:0})),y.getDrawingBufferSize(ye),ae?ue.setSize(ye.x,ye.y):ue.setSize(vh(ye.x),vh(ye.y));const Se=y.getRenderTarget();y.setRenderTarget(ue),y.getClearColor(Y),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear();const Fe=y.toneMapping;y.toneMapping=xr,Mt(A,V,G),w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue);let Me=!1;for(let we=0,Be=U.length;we<Be;we++){const We=U[we],St=We.object,zt=We.geometry,ut=We.material,hn=We.group;if(ut.side===Vi&&St.layers.test(G.layers)){const ft=ut.side;ut.side=Pn,ut.needsUpdate=!0,Ze(St,V,G,zt,ut,hn),ut.side=ft,ut.needsUpdate=!0,Me=!0}}Me===!0&&(w.updateMultisampleRenderTarget(ue),w.updateRenderTargetMipmap(ue)),y.setRenderTarget(Se),y.setClearColor(Y,D),y.toneMapping=Fe}function Mt(A,U,V){const G=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ae=A.length;z<ae;z++){const Se=A[z],Fe=Se.object,Me=Se.geometry,we=G===null?Se.material:G,Be=Se.group;Fe.layers.test(V.layers)&&Ze(Fe,U,V,Me,we,Be)}}function Ze(A,U,V,G,z,ae){A.onBeforeRender(y,U,V,G,z,ae),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),z.onBeforeRender(y,U,V,G,A,ae),z.transparent===!0&&z.side===Vi&&z.forceSinglePass===!1?(z.side=Pn,z.needsUpdate=!0,y.renderBufferDirect(V,U,G,z,A,ae),z.side=br,z.needsUpdate=!0,y.renderBufferDirect(V,U,G,z,A,ae),z.side=Vi):y.renderBufferDirect(V,U,G,z,A,ae),A.onAfterRender(y,U,V,G,z,ae)}function mt(A,U,V){U.isScene!==!0&&(U=qe);const G=Oe.get(A),z=p.state.lights,ae=p.state.shadowsArray,Se=z.state.version,Fe=fe.getParameters(A,z.state,ae,U,V),Me=fe.getProgramCacheKey(Fe);let we=G.programs;G.environment=A.isMeshStandardMaterial?U.environment:null,G.fog=U.fog,G.envMap=(A.isMeshStandardMaterial?B:T).get(A.envMap||G.environment),we===void 0&&(A.addEventListener("dispose",ie),we=new Map,G.programs=we);let Be=we.get(Me);if(Be!==void 0){if(G.currentProgram===Be&&G.lightsStateVersion===Se)return vt(A,Fe),Be}else Fe.uniforms=fe.getUniforms(A),A.onBuild(V,Fe,y),A.onBeforeCompile(Fe,y),Be=fe.acquireProgram(Fe,Me),we.set(Me,Be),G.uniforms=Fe.uniforms;const We=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=ze.uniform),vt(A,Fe),G.needsLights=In(A),G.lightsStateVersion=Se,G.needsLights&&(We.ambientLightColor.value=z.state.ambient,We.lightProbe.value=z.state.probe,We.directionalLights.value=z.state.directional,We.directionalLightShadows.value=z.state.directionalShadow,We.spotLights.value=z.state.spot,We.spotLightShadows.value=z.state.spotShadow,We.rectAreaLights.value=z.state.rectArea,We.ltc_1.value=z.state.rectAreaLTC1,We.ltc_2.value=z.state.rectAreaLTC2,We.pointLights.value=z.state.point,We.pointLightShadows.value=z.state.pointShadow,We.hemisphereLights.value=z.state.hemi,We.directionalShadowMap.value=z.state.directionalShadowMap,We.directionalShadowMatrix.value=z.state.directionalShadowMatrix,We.spotShadowMap.value=z.state.spotShadowMap,We.spotLightMatrix.value=z.state.spotLightMatrix,We.spotLightMap.value=z.state.spotLightMap,We.pointShadowMap.value=z.state.pointShadowMap,We.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Be,G.uniformsList=null,Be}function Bt(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=jl.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function vt(A,U){const V=Oe.get(A);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function gt(A,U,V,G,z){U.isScene!==!0&&(U=qe),w.resetTextureUnits();const ae=U.fog,Se=G.isMeshStandardMaterial?U.environment:null,Fe=E===null?y.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Zi,Me=(G.isMeshStandardMaterial?B:T).get(G.envMap||Se),we=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),We=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,zt=!!V.morphAttributes.color;let ut=xr;G.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ut=y.toneMapping);const hn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=hn!==void 0?hn.length:0,$e=Oe.get(G),Bc=p.state.lights;if(W===!0&&(Z===!0||A!==I)){const qn=A===I&&G.id===L;ze.setState(G,A,qn)}let wt=!1;G.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Bc.state.version||$e.outputColorSpace!==Fe||z.isBatchedMesh&&$e.batching===!1||!z.isBatchedMesh&&$e.batching===!0||z.isInstancedMesh&&$e.instancing===!1||!z.isInstancedMesh&&$e.instancing===!0||z.isSkinnedMesh&&$e.skinning===!1||!z.isSkinnedMesh&&$e.skinning===!0||z.isInstancedMesh&&$e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$e.instancingColor===!1&&z.instanceColor!==null||$e.envMap!==Me||G.fog===!0&&$e.fog!==ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==we||$e.vertexTangents!==Be||$e.morphTargets!==We||$e.morphNormals!==St||$e.morphColors!==zt||$e.toneMapping!==ut||Ce.isWebGL2===!0&&$e.morphTargetsCount!==ft)&&(wt=!0):(wt=!0,$e.__version=G.version);let wr=$e.currentProgram;wt===!0&&(wr=mt(G,U,z));let Bd=!1,Ma=!1,zc=!1;const tn=wr.getUniforms(),Cr=$e.uniforms;if(_e.useProgram(wr.program)&&(Bd=!0,Ma=!0,zc=!0),G.id!==L&&(L=G.id,Ma=!0),Bd||I!==A){tn.setValue(N,"projectionMatrix",A.projectionMatrix),tn.setValue(N,"viewMatrix",A.matrixWorldInverse);const qn=tn.map.cameraPosition;qn!==void 0&&qn.setValue(N,he.setFromMatrixPosition(A.matrixWorld)),Ce.logarithmicDepthBuffer&&tn.setValue(N,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&tn.setValue(N,"isOrthographic",A.isOrthographicCamera===!0),I!==A&&(I=A,Ma=!0,zc=!0)}if(z.isSkinnedMesh){tn.setOptional(N,z,"bindMatrix"),tn.setOptional(N,z,"bindMatrixInverse");const qn=z.skeleton;qn&&(Ce.floatVertexTextures?(qn.boneTexture===null&&qn.computeBoneTexture(),tn.setValue(N,"boneTexture",qn.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(tn.setOptional(N,z,"batchingTexture"),tn.setValue(N,"batchingTexture",z._matricesTexture,w));const kc=V.morphAttributes;if((kc.position!==void 0||kc.normal!==void 0||kc.color!==void 0&&Ce.isWebGL2===!0)&&Re.update(z,V,wr),(Ma||$e.receiveShadow!==z.receiveShadow)&&($e.receiveShadow=z.receiveShadow,tn.setValue(N,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Cr.envMap.value=Me,Cr.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Ma&&(tn.setValue(N,"toneMappingExposure",y.toneMappingExposure),$e.needsLights&&ct(Cr,zc),ae&&G.fog===!0&&le.refreshFogUniforms(Cr,ae),le.refreshMaterialUniforms(Cr,G,$,F,ue),jl.upload(N,Bt($e),Cr,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(jl.upload(N,Bt($e),Cr,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&tn.setValue(N,"center",z.center),tn.setValue(N,"modelViewMatrix",z.modelViewMatrix),tn.setValue(N,"normalMatrix",z.normalMatrix),tn.setValue(N,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const qn=G.uniformsGroups;for(let Gc=0,Iy=qn.length;Gc<Iy;Gc++)if(Ce.isWebGL2){const zd=qn[Gc];Ke.update(zd,wr),Ke.bind(zd,wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wr}function ct(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function In(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,U,V){Oe.get(A.texture).__webglTexture=U,Oe.get(A.depthTexture).__webglTexture=V;const G=Oe.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,U){const V=Oe.get(A);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,V=0){E=A,M=U,b=V;let G=!0,z=null,ae=!1,Se=!1;if(A){const Me=Oe.get(A);Me.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(N.FRAMEBUFFER,null),G=!1):Me.__webglFramebuffer===void 0?w.setupRenderTarget(A):Me.__hasExternalTextures&&w.rebindTextures(A,Oe.get(A.texture).__webglTexture,Oe.get(A.depthTexture).__webglTexture);const we=A.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Be=Oe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?z=Be[U][V]:z=Be[U],ae=!0):Ce.isWebGL2&&A.samples>0&&w.useMultisampledRTT(A)===!1?z=Oe.get(A).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[V]:z=Be,x.copy(A.viewport),C.copy(A.scissor),O=A.scissorTest}else x.copy(R).multiplyScalar($).floor(),C.copy(K).multiplyScalar($).floor(),O=re;if(_e.bindFramebuffer(N.FRAMEBUFFER,z)&&Ce.drawBuffers&&G&&_e.drawBuffers(A,z),_e.viewport(x),_e.scissor(C),_e.setScissorTest(O),ae){const Me=Oe.get(A.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,V)}else if(Se){const Me=Oe.get(A.texture),we=U||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,we)}L=-1},this.readRenderTargetPixels=function(A,U,V,G,z,ae,Se){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Oe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Se!==void 0&&(Fe=Fe[Se]),Fe){_e.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const Me=A.texture,we=Me.format,Be=Me.type;if(we!==pi&&ge.convert(we)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Be===vo&&(pe.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Be!==yr&&ge.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Wi&&(Ce.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-G&&V>=0&&V<=A.height-z&&N.readPixels(U,V,G,z,ge.convert(we),ge.convert(Be),ae)}finally{const Me=E!==null?Oe.get(E).__webglFramebuffer:null;_e.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(A,U,V=0){const G=Math.pow(2,-V),z=Math.floor(U.image.width*G),ae=Math.floor(U.image.height*G);w.setTexture2D(U,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,A.x,A.y,z,ae),_e.unbindTexture()},this.copyTextureToTexture=function(A,U,V,G=0){const z=U.image.width,ae=U.image.height,Se=ge.convert(V.format),Fe=ge.convert(V.type);w.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),U.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,G,A.x,A.y,z,ae,Se,Fe,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,G,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,Se,U.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,G,A.x,A.y,Se,Fe,U.image),G===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(A,U,V,G,z=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=A.max.x-A.min.x+1,Se=A.max.y-A.min.y+1,Fe=A.max.z-A.min.z+1,Me=ge.convert(G.format),we=ge.convert(G.type);let Be;if(G.isData3DTexture)w.setTexture3D(G,0),Be=N.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)w.setTexture2DArray(G,0),Be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,G.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,G.unpackAlignment);const We=N.getParameter(N.UNPACK_ROW_LENGTH),St=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),ut=N.getParameter(N.UNPACK_SKIP_ROWS),hn=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[z]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,A.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,A.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Be,z,U.x,U.y,U.z,ae,Se,Fe,Me,we,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,z,U.x,U.y,U.z,ae,Se,Fe,Me,ft.data)):N.texSubImage3D(Be,z,U.x,U.y,U.z,ae,Se,Fe,Me,we,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,We),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,hn),z===0&&G.generateMipmaps&&N.generateMipmap(Be),_e.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?w.setTextureCube(A,0):A.isData3DTexture?w.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?w.setTexture2DArray(A,0):w.setTexture2D(A,0),_e.unbindTexture()},this.resetState=function(){M=0,b=0,E=null,_e.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Id?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Oc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?ns:Gx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?Kt:Zi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class tN extends cy{}tN.prototype.isWebGL1Renderer=!0;class nN extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class iN extends un{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Nt,this.magFilter=s!==void 0?s:Nt,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const P_={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class rN{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],_=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const sN=new rN;class Fd{constructor(e){this.manager=e!==void 0?e:sN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Fd.DEFAULT_MATERIAL_NAME="__DEFAULT";class aN extends Fd{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=P_.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=xo("img");function l(){u(),P_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class oN extends Fd{constructor(e){super(e)}load(e,t,n,r){const s=new un,a=new aN(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class lN{constructor(e,t,n=0,r=1/0){this.ray=new qx(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Ud,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return yh(e,this,n,t),n.sort(L_),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)yh(e[r],this,n,t);return n.sort(L_),n}}function L_(i,e){return i.distance-e.distance}function yh(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)yh(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);const Sh=new ot;function cN(){document.querySelector("#global-container").addEventListener("pointermove",uN)}function uN(i){Sh.x=fN(i.clientX),Sh.y=hN(i.clientY)}function fN(i){return i/window.innerWidth*2-1}function hN(i){return-(i/window.innerHeight)*2+1}function dN(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}function pN(i,e){return Math.round(i/e*100)}const $s=new Map,mN=new oN;window.textureCache=$s;const Yl={init:gN,loadAllAssets:_N,loadImg:fy,getTexByElement:vN,addProgressAction:py,letsBegin:SN},Xr={};function gN(){Xr.globalContainer=document.getElementById("global-container"),Xr.loader=document.getElementById("loader"),Xr.loaderPercent=document.getElementById("Loader-percent"),py((i,e)=>{Xr.loaderPercent.innerHTML=pN(i,e)+"%"})}async function _N(){const i=document.querySelectorAll("[data-webgl]");for(const t of i){const n=t.dataset;for(let r in n){if(!r.startsWith("tex"))continue;const s=n[r];$s.has(s)||$s.set(s,null)}}const e=[];$s.forEach((t,n)=>{let r=null;r=(/\.(mp4|webm|mov)$/.test(n)?xN:fy)(n).then(a=>{$s.set(n,a)}).catch(()=>{console.error("Failed to load Media: ",n)}),e.push(r)}),await Promise.all(e)}async function vN(i){const e=new Map,t=i.dataset;let n=null,r=!0;for(let s in t){if(!s.startsWith("tex"))continue;const a=t[s],o=$s.get(a);s=s.replace("-",""),e.set(s,o),r&&i instanceof HTMLImageElement&&(n=new Promise(l=>{i.onload=l}),i.src=a,r=!1),r&&i instanceof HTMLVideoElement&&(n=new Promise(l=>{i.oncanplay=l}),i.src=a,i.load(),r=!1)}return await n,e}let uy=0,D_=0,Eh=null;async function fy(i){hy();const e=await mN.loadAsync(i);return dy(),e.magFilter=Nt,e.minFilter=Nt,e.needsUpdate=!1,e}async function xN(i){const e=document.createElement("video");let t=i.split(".").pop();return t==="mov"&&(t="quicktime"),e.canPlayType(`video/${t}`)?(hy(),new Promise(n=>{const r=document.createElement("video");r.oncanplay=()=>{const s=new iN(r);dy(),s.magFilter=Nt,s.minFilter=Nt,r.play(),r.oncanplay=null,n(s)},r.src=i,r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,r.defaultMuted=!0})):null}function hy(){uy++}function dy(){D_++,Eh&&Eh(D_,uy)}function py(i){Eh=i}function yN(){const i=Wh.timeline();return i.to(Xr.loader.firstElementChild,{opacity:0,y:10,duration:.3,delay:.5}).set(Xr.globalContainer,{visibility:"visible"}).set(Xr.loader,{display:"none"}),i}function SN(){yN()}const EN="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",MN="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;uniform vec4 uResolution;uniform sampler2D tex1;uniform sampler2D tex2;vec2 coverUv(vec2 uv,vec4 resolution){return(uv-0.5)*resolution.zw+0.5;}void main(){vec2 uv=coverUv(vUv,uResolution);vec4 t1=texture2D(tex1,uv);vec4 t2=texture2D(tex2,uv);vec4 mixColor=mix(t1,t2,step(.5,uv.y));gl_FragColor=mixColor;}",lt={os:[],raycaster:new lN,worldInit:my,adjustWorldPosition:gy,render:vy};function my(i,e){return lt.renderer=new cy({canvas:i,antialias:!0}),lt.renderer.setSize(e.width,e.height,!1),lt.renderer.setPixelRatio(e.devicePixelRatio),lt.renderer.setClearColor(0,0),lt.scene=new nN,lt.camera=TN(e),bN(e),lt}async function bN(i){const t=[...document.querySelectorAll("[data-webgl]")].map(async n=>{const r=n.getBoundingClientRect(),s=await Yl.getTexByElement(n),a=new Do(r.width,r.height,1,1),o=new Ji({vertexShader:EN,fragmentShader:MN,uniforms:{uMouse:{value:new ot(.5,.5)},uHover:{value:0}}});function l(h){if(!s.get("tex1"))return h;const d=s.get("tex1").source.data,_={};d instanceof HTMLImageElement?(_.width=d.naturalWidth,_.height=d.naturalHeight):d instanceof HTMLVideoElement&&(_.width=d.videoWidth,_.height=d.videoHeight);const g=c(r,_);return h.uResolution={value:g},h}function c(h,d){const{width:_,height:g}=h,p=new jt(_,g,1,1);if(!d)return p;const{width:m,height:S}=d,y=S/m,v=g/_;let M,b;return v>y?(M=1/v*y,b=1):(M=1,b=v/y),p.z=M,p.w=b,p}o.uniforms=l(o.uniforms),s.forEach((h,d)=>{o.uniforms[d]={value:h}});const u=new wi(a,o);u.position.z=0;const f={geometry:a,material:o,mesh:u,rect:r,$:{el:n}};return lt.scene.add(u),lt.os.push(f),f});await Promise.all(t),gy(i)}function gy(i){lt.renderer.setSize(i.width,i.height,!1),lt.os.forEach(e=>wN(e,i)),CN(i)}function TN(i){const{fov:e,aspect:t,near:n,far:r,cameraZ:s}=i,a=new Qn(e,t,n,r);return a.position.z=s,a}function AN(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=_y(n,Ct.rect);e.position.y=r}function wN(i,e){const{$:{el:t},mesh:n,geometry:r,rect:s}=i,a=t.getBoundingClientRect(),{x:o,y:l}=_y(a,e);n.position.x=o,n.position.y=l,r.scale(a.width/s.width,a.height/s.height,1),i.rect=a}function CN(i){const{aspect:e,radian:t,fov:n}=i;lt.camera.aspect=e,lt.camera.radian=t,lt.camera.fov=n,lt.camera.updateProjectionMatrix(),lt.renderer.render(lt.scene,lt.camera)}function _y(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function RN(){lt.raycaster.setFromCamera(Sh,lt.camera);const e=lt.raycaster.intersectObjects(lt.scene.children)[0];for(let t=0;t<lt.scene.children.length;t++){const n=lt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=dN(r.value,r.__endValue,.1)}}function vy(){requestAnimationFrame(vy),lt.os.forEach(i=>AN(i)),RN(),lt.renderer.render(lt.scene,lt.camera)}const Ct={init:PN},xy={};let I_=!1;function PN(i){xy.canvas=i;const e=i.getBoundingClientRect();return Ct.rect=e,Ct.width=e.width,Ct.height=e.height,Ct.near=1500,Ct.far=4e3,Ct.aspect=Ct.width/Ct.height,Ct.cameraZ=2500,Ct.radian=2*Math.atan(Ct.height/2/Ct.cameraZ),Ct.fov=180*Ct.radian/Math.PI,Ct.devicePixelRatio=window.devicePixelRatio,I_||(I_=!0,LN()),Ct}function LN(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{DN()},100)})}function DN(){IN(),lt.adjustWorldPosition(Ct)}function IN(){const{near:i,far:e,cameraZ:t}=Ct;Ct.init(xy.canvas,i,e,t)}const yy=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 17 20">
<path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
</svg>`,Sy=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 19 23">
<path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="currentColor"></path>
</svg>`,da=fn.page.breakpoint,ON=fn.time.debounce,UN=fn.humbergerBtnSelector,NN=fn.logoeSelector,Ey=fn.buttonParent,Mh=fn.svgCart,FN=fn.target.pageContainer,BN=fn.target.header,zN=fn.target.announcement,kN=fn.rootProperty.headerHeight,GN=fn.rootProperty.announcementHeight,My=fn.tabletAndUp,by=fn.phone;_o(da);(function(){document.addEventListener("DOMContentLoaded",function(){t3(),Ly(),n3(),HN()})})();function HN(){VN(),WN(),$N()}function VN(){const i={contain:!0,prevNextButtons:!1,setGallerySize:!1,adaptiveHeight:!1,wrapAround:!0,dragThreshold:10,pauseAutoPlayOnHover:!1,autoPlay:!1,pageDots:!0,fade:!0,on:{change:function(n){console.log("Slide changed to",n),document.querySelectorAll(".Carousel__Cell").forEach((a,o)=>{if(a.classList.contains("is-selected")){let d=function(_){h===null&&(h=_);let g=_-h,p=Math.min(g/f,1),m=qN(c,u,p);a.style.opacity=m,p<1&&requestAnimationFrame(d)};var l=d;a.style.visibility="inherit";let c=0,u=1,f=1e3,h=null;requestAnimationFrame(d)}else a.style.visibility="hidden",a.style.opacity="1"}),document.querySelectorAll(".SectionHeader").forEach((a,o)=>{o===n?(a.style.visibility="visible",a.style.opacity="1",a.style.transform="translateY(0)"):(a.style.visibility="hidden",a.style.opacity="0",a.style.transform="translateY(20px)")})}}},e=document.querySelector(".Slideshow-Carousel"),t=JSON.stringify(i,null,2);e.setAttribute("data-flickity-config",t),new $P(e,i),e.classList.add("Carousel--fixed")}function WN(i){const e=new MutationObserver(function(t){t.forEach(function(n){n.type==="childList"&&document.querySelectorAll(".flickity-page-dots").length>0&&(e.disconnect(),console.log("disconnected"))})});e.observe(document,{childList:!0,subtree:!0})}function $N(i){const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".Carousel__Cell");let s=["/img/yamadera.jpeg","/img/sakuramich.jpeg","/img/yamadera.jpeg","/img/yamadera.jpeg","/img/sakuramich.jpeg"],a=["Text 1","Text 2","Text 3","Text 4","Text 5"],o=["Text A","Text B","Text C","Text D","Text E"];r.forEach((l,c)=>{let u=s[c%s.length],f=a[c%a.length],h=o[c%o.length];jN(l,u),YN(l,u),KN(l,f,h)}),r.length>0&&(e.disconnect(),e3(),XN())}})});e.observe(document,{childList:!0,subtree:!0})}function XN(){const i=document.querySelectorAll(".SectionHeader");i[0].style.visibility="visible",i[0].style.opacity="1",i[0].style.transform="matrix(1, 0, 0, 1, 0, 0)"}function qN(i,e,t){return i*(1-t)+e*t}function Ty(i,e){const t=document.createElement("img");t.alt="yamadera",t.classList.add("Slideshow__Image","Image--lazyLoaded"),t.onload=function(){i.appendChild(t)},t.src=e}function jN(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-tablet-and-up"),i.appendChild(t),Ty(t,e)}function YN(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-phone"),i.appendChild(t),Ty(t,e)}function KN(i,e,t){const n=document.createElement("div");n.classList.add("Slideshow__Content","Slideshow__Content--bottomLeft"),i.appendChild(n),ZN(n,e,t)}function ZN(i,e,t){const n=document.createElement("header");n.classList.add("SectionHeader"),i.appendChild(n);const r=document.createElement("h3"),s=document.createElement("h2");r.classList.add("SectionHeader__SubHeader","Heading","u-h6"),s.classList.add("SectionHeader__Heading","Section__Heading--emphasize","Heading","u-h1"),r.textContent=e,s.textContent=t,n.appendChild(r),n.appendChild(s),JN(n)}function JN(i){const e=document.createElement("div");e.classList.add("SectionHeader__ButtonWrapper"),i.appendChild(e),QN(e)}function QN(i){const e=document.createElement("div");e.classList.add("ButtonGroup","ButtonGroup--spacingSmall"),i.appendChild(e);const t=document.createElement("a");t.href="./subhtml/demo-wrapAround.html",t.classList.add("ButtonGroup__Item","Button"),t.textContent="READ MORE",e.appendChild(t)}function e3(){document.querySelectorAll(".Carousel__Cell")}function t3(){const i=document.title,e=document.querySelector(".AnnouncementBar__Content");return e&&(e.innerHTML=i),i}function n3(){const i=_o(da)?My:by;Ry(i);const e=_o(da)?Sy:yy;Ay(e)}async function i3(i){const n=new DOMParser().parseFromString(i,"image/svg+xml").querySelector("svg");if(!n)throw new Error(`No SVG element found in the provided data: ${i}`);return n.getAttribute("height")||n.setAttribute("height","20"),n.getAttribute("width")||n.setAttribute("width","20"),n.querySelectorAll("path").forEach(s=>{s.setAttribute("fill","currentColor"),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width","0.05")}),n}async function Ay(i){try{const e=document.querySelector(`.${Mh}`);if(!e)throw new Error(`No element found with class: ${Mh}`);Cy(e);const t=await i3(i);if(!t)throw new Error(`No SVG element created for path: ${i}`);e.appendChild(t),window.innerWidth>=da?t.classList.add("hidden-phone"):t.classList.add("hidden-tablet-and-up");const r=document.querySelector(`.${Ey}`).offsetHeight;bh(t,r),Py()}catch(e){console.error("Error in createCart:",e)}}let O_;window.addEventListener("resize",wy);window.addEventListener("orientationchange",wy);function wy(){clearTimeout(O_),O_=setTimeout(async()=>{const i=_o(da)?My:by;Ry(i);const e=_o(da)?Sy:yy;await Ay(e),Py()},ON)}function Cy(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function r3(i,e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",i),n.setAttribute("width",e),n.setAttribute("height",t),n}function s3(i,e,t,n){for(let r=0;r<3;r++){const s=document.createElementNS("http://www.w3.org/2000/svg","rect");s.setAttribute("width",t),s.setAttribute("height",n),s.setAttribute("y",r*parseInt(e)),s.setAttribute("fill","currentColor"),i.appendChild(s)}}function U_({viewBox:i,width:e,height:t,rectWidth:n,rectHeight:r}){const s=r3(i,e,t);return s3(s,t,n,r),s}function Ry(i){const e=document.querySelector(UN);Cy(e);const t=U_(i),n=U_(i);e.appendChild(t),e.appendChild(n),n.style.display="none"}function a3(i,e,t){if(!i)return;const n=i.parentNode;n.style.height=`${t}px`,n.style.width=`${e}px`}function N_(i,e,t){i.style.width=`${e}px`,i.style.height=`${t}px`}function bh(i,e){if(!i){console.log("No element provided to adjustElementToHeight");return}if(i instanceof SVGSVGElement){const t=i.getBBox(),r=t.width/t.height*e;N_(i,r,e)}else{const n=i.offsetWidth/i.offsetHeight*e;N_(i,n,e)}}function Py(){const e=document.querySelector(`.${Ey}`).offsetHeight;document.querySelectorAll(`.${NN}`).forEach(r=>bh(r,e));const n=document.querySelector(`.${Mh}`);bh(n,e),a3(n,n.offsetWidth,e)}function Ly(){const i=window.innerHeight,e=document.getElementById(FN);e&&(e.style.height=`${i}px`),Dy("--window-height",i)}window.addEventListener("resize",Ly);window.addEventListener("load",function(){F_(`#${BN}`,kN),F_(`#${zN}`,GN)});function F_(i,e){const t=document.querySelector(i);if(t){const n=t.offsetHeight;Dy(e,n)}}function Dy(i,e){document.documentElement.style.setProperty(i,`${e}px`)}window.addEventListener("load",o3);let Th=0;function o3(){const i=document.body.getElementsByTagName("*"),e=Array.from(i).filter(t=>t.id.includes("section"));Th=0,e.forEach(t=>{Th+=t.offsetHeight})}const l3={get totalHeight(){return Th}},c3=fn.target.pageContainer;class Ah extends wx{transformDelta(e,t){return e=this.options.disabled?{x:0,y:0}:e,e}}Hc(Ah,"pluginName","disablePlugin"),Hc(Ah,"defaultOptions",{disabled:!1});let or;function u3(){const i=document.getElementById(c3);Wh.registerPlugin(Xe),Wm.use(Ah),or=Wm.init(i,{delegateTo:document}),Xe.scrollerProxy(i,{scrollTop(n){return arguments.length?or.scrollTop=n:or.scrollTop}}),or.addListener(Xe.update);function e(){or.updatePluginOptions("disablePlugin",{disabled:!0}),console.log("plugin is disabled")}function t(){or.updatePluginOptions("disablePlugin",{disabled:!1})}Xe.defaults({scroller:i}),or.addListener(n=>{n.offset.y+window.innerHeight>=or.getSize().content.height&&console.log("you're at the bottom of the page")}),window.addEventListener("load",function(){const n=l3.totalHeight,r=document.querySelector(`#${fn.target.header}`);r.style.position="relative",r.style.zIndex="1000",Xe.create({trigger:r,start:"top top",end:`${n}px top`,pin:!0,pinSpacing:!1,onEnter:()=>{},onLeaveBack:()=>{}});function s(){const a=document.getElementById(fn.target.header);a.classList.add("Header--transparent"),Xe.create({trigger:a,start:"top top",end:99999,onEnter:()=>{a.classList.remove("Header--transparent")},onLeaveBack:()=>{a.classList.add("Header--transparent")}})}return s(),{disablePlugin:e,enablePlugin:t}})}async function f3(){const i=document.querySelector("#canvas");Ct.init(i),u3(),Yl.init(),await Yl.loadAllAssets(),my(i,Ct),cN(),lt.render(),Yl.letsBegin()}function h3(){document.querySelector("[data-webgl]")}f3();console.log("Production output");h3();
