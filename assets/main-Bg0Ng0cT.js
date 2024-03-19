var AI=Object.defineProperty;var CI=(i,e,t)=>e in i?AI(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var fp=(i,e,t)=>(CI(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ss(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function AM(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xl={duration:.5,overwrite:!1,delay:0},jg,si,cn,_r=1e8,en=1/_r,Ym=Math.PI*2,RI=Ym/4,PI=0,CM=Math.sqrt,LI=Math.cos,DI=Math.sin,Gn=function(e){return typeof e=="string"},_n=function(e){return typeof e=="function"},Rs=function(e){return typeof e=="number"},Kg=function(e){return typeof e>"u"},is=function(e){return typeof e=="object"},Ri=function(e){return e!==!1},Zg=function(){return typeof window<"u"},Ku=function(e){return _n(e)||Gn(e)},RM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},oi=Array.isArray,jm=/(?:-?\.?\d|\.)+/gi,PM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,nl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,hp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,LM=/[+-]=-?[.\d]+/,DM=/[^,'"\[\]\s]+/gi,II=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,hn,Wr,Km,Jg,Ji={},ph={},IM,OM=function(e){return(ph=ra(e,Ji))&&Oi},Qg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},zc=function(e,t){return!t&&console.warn(e)},UM=function(e,t){return e&&(Ji[e]=t)&&ph&&(ph[e]=t)||Ji},Hc=function(){return 0},OI={suppressEvents:!0,isStart:!0,kill:!1},Kf={suppressEvents:!0,kill:!1},UI={suppressEvents:!0},e_={},so=[],Zm={},NM,Xi={},dp={},Tx=30,Zf=[],t_="",n_=function(e){var t=e[0],n,r;if(is(t)||_n(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Zf.length;r--&&!Zf[r].targetTest(t););n=Zf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ob(e[r],n)))||e.splice(r,1);return e},Xo=function(e){return e._gsap||n_(vr(e))[0]._gsap},FM=function(e,t,n){return(n=e[t])&&_n(n)?e[t]():Kg(n)&&e.getAttribute&&e.getAttribute(t)||n},Pi=function(e,t){return(e=e.split(",")).forEach(t)||e},Mn=function(e){return Math.round(e*1e5)/1e5||0},Hn=function(e){return Math.round(e*1e7)/1e7||0},cl=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},NI=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},mh=function(){var e=so.length,t=so.slice(0),n,r;for(Zm={},so.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},BM=function(e,t,n,r){so.length&&!si&&mh(),e.render(t,n,r||si&&t<0&&(e._initted||e._startAt)),so.length&&!si&&mh()},zM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(DM).length<2?t:Gn(e)?e.trim():e},HM=function(e){return e},yr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},FI=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},ra=function(e,t){for(var n in t)e[n]=t[n];return e},wx=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=is(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},gh=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ac=function(e){var t=e.parent||hn,n=e.keyframes?FI(oi(e.keyframes)):yr;if(Ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},BI=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},kM=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],l;if(s)for(l=t[s];a&&a[s]>l;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Bh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},ho=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Jm=function(e,t,n,r){return e._startAt&&(si?e._startAt.revert(Kf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},HI=function i(e){return!e||e._ts&&i(e.parent)},Ax=function(e){return e._repeat?yl(e._tTime,e=e.duration()+e._rDelay)*e:0},yl=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_h=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zh=function(e){return e._end=Hn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},Hh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Hn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zh(e),n._dirty||qo(n,e)),e},GM=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_h(e.rawTime(),t),(!t._dur||Zc(0,t.totalDuration(),n)-t._tTime>en)&&t.render(n,!0)),qo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-en}},qr=function(e,t,n,r){return t.parent&&ho(t),t._start=Hn((Rs(n)?n:n||e!==hn?fr(e,n,t):e._time)+t._delay),t._end=Hn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),kM(e,t,"_first","_last",e._sort?"_start":0),Qm(t)||(e._recent=t),r||GM(e,t),e._ts<0&&Hh(e,e._tTime),e},WM=function(e,t){return(Ji.ScrollTrigger||Qg("scrollTrigger",t))&&Ji.ScrollTrigger.create(t,e)},VM=function(e,t,n,r,s){if(r_(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!si&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&NM!==qi.frame)return so.push(e),e._lazy=[s,r],1},kI=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Qm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},GI=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&kI(e)&&!(!e._initted&&Qm(e))||(e._ts<0||e._dp._ts<0)&&!Qm(e))?0:1,l=e._rDelay,u=0,f,h,p;if(l&&e._repeat&&(u=Zc(0,e._tDur,t),h=yl(u,l),e._yoyo&&h&1&&(a=1-a),h!==yl(e._tTime,l)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||si||r||e._zTime===en||!t&&e._zTime){if(!e._initted&&VM(e,t,r,n,u))return;for(p=e._zTime,e._zTime=t||(n?en:0),n||(n=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,f=e._pt;f;)f.r(a,f.d),f=f._next;t<0&&Jm(e,t,n,!0),e._onUpdate&&!n&&ji(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&ji(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ho(e,1),!n&&!si&&(ji(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},WI=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Sl=function(e,t,n,r){var s=e._repeat,a=Hn(t)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Hn(a*(s+1)+e._rDelay*s):a,l>0&&!r&&Hh(e,e._tTime=e._tDur*l),e.parent&&zh(e),n||qo(e.parent,e),e},Cx=function(e){return e instanceof vi?qo(e):Sl(e,e._dur)},VI={_start:0,endTime:Hc,totalDuration:Hc},fr=function i(e,t,n){var r=e.labels,s=e._recent||VI,a=e.duration()>=_r?s.endTime(!1):e._dur,l,u,f;return Gn(t)&&(isNaN(t)||t in r)?(u=t.charAt(0),f=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(l<0?s:n).totalDuration()/100:1)):l<0?(t in r||(r[t]=a),r[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),f&&n&&(u=u/100*(oi(n)?n[0]:n).totalDuration()),l>1?i(e,t.substr(0,l-1),n)+u:a+u)):t==null?a:+t},Cc=function(e,t,n){var r=Rs(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],l,u;if(r&&(a.duration=t[1]),a.parent=n,e){for(l=a,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=Ri(u.vars.inherit)&&u.parent;a.immediateRender=Ri(l.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new An(t[0],a,t[s+1])},_o=function(e,t){return e||e===0?t(e):t},Zc=function(e,t,n){return n<e?e:n>t?t:n},ri=function(e,t){return!Gn(e)||!(t=II.exec(e))?"":t[1]},$I=function(e,t,n){return _o(n,function(r){return Zc(e,t,r)})},eg=[].slice,$M=function(e,t){return e&&is(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&is(e[0]))&&!e.nodeType&&e!==Wr},XI=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Gn(r)&&!t||$M(r,1)?(s=n).push.apply(s,vr(r)):n.push(r)})||n},vr=function(e,t,n){return cn&&!t&&cn.selector?cn.selector(e):Gn(e)&&!n&&(Km||!El())?eg.call((t||Jg).querySelectorAll(e),0):oi(e)?XI(e,n):$M(e)?eg.call(e,0):e?[e]:[]},tg=function(e){return e=vr(e)[0]||zc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vr(t,n.querySelectorAll?n:n===e?zc("Invalid scope")||Jg.createElement("div"):e)}},XM=function(e){return e.sort(function(){return .5-Math.random()})},qM=function(e){if(_n(e))return e;var t=is(e)?e:{each:e},n=Yo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},l=r>0&&r<1,u=isNaN(r)||l,f=t.axis,h=r,p=r;return Gn(r)?h=p={center:.5,edges:.5,end:1}[r]||0:!l&&u&&(h=r[0],p=r[1]),function(m,g,y){var x=(y||t).length,_=a[x],v,w,T,E,C,R,A,z,G;if(!_){if(G=t.grid==="auto"?0:(t.grid||[1,_r])[1],!G){for(A=-_r;A<(A=y[G++].getBoundingClientRect().left)&&G<x;);G<x&&G--}for(_=a[x]=[],v=u?Math.min(G,x)*h-.5:r%G,w=G===_r?0:u?x*p/G-.5:r/G|0,A=0,z=_r,R=0;R<x;R++)T=R%G-v,E=w-(R/G|0),_[R]=C=f?Math.abs(f==="y"?E:T):CM(T*T+E*E),C>A&&(A=C),C<z&&(z=C);r==="random"&&XM(_),_.max=A-z,_.min=z,_.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(G>x?x-1:f?f==="y"?x/G:G:Math.max(G,x/G))||0)*(r==="edges"?-1:1),_.b=x<0?s-x:s,_.u=ri(t.amount||t.each)||0,n=n&&x<0?ib(n):n}return x=(_[m]-_.min)/_.max||0,Hn(_.b+(n?n(x):x)*_.v)+_.u}},ng=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Hn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Rs(n)?0:ri(n))}},YM=function(e,t){var n=oi(e),r,s;return!n&&is(e)&&(r=n=e.radius||_r,e.values?(e=vr(e.values),(s=!Rs(e[0]))&&(r*=r)):e=ng(e.increment)),_o(t,n?_n(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var l=parseFloat(s?a.x:a),u=parseFloat(s?a.y:0),f=_r,h=0,p=e.length,m,g;p--;)s?(m=e[p].x-l,g=e[p].y-u,m=m*m+g*g):m=Math.abs(e[p]-l),m<f&&(f=m,h=p);return h=!r||f<=r?e[h]:a,s||h===a||Rs(a)?h:h+ri(a)}:ng(e))},jM=function(e,t,n,r){return _o(oi(e)?!t:n===!0?!!(n=0):!r,function(){return oi(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},qI=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},YI=function(e,t){return function(n){return e(parseFloat(n))+(t||ri(n))}},jI=function(e,t,n){return ZM(e,t,0,1,n)},KM=function(e,t,n){return _o(n,function(r){return e[~~t(r)]})},KI=function i(e,t,n){var r=t-e;return oi(e)?KM(e,i(0,e.length),t):_o(n,function(s){return(r+(s-e)%r)%r+e})},ZI=function i(e,t,n){var r=t-e,s=r*2;return oi(e)?KM(e,i(0,e.length-1),t):_o(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},kc=function(e){for(var t=0,n="",r,s,a,l;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),l=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(l?DM:jm),n+=e.substr(t,r-t)+jM(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},ZM=function(e,t,n,r,s){var a=t-e,l=r-n;return _o(s,function(u){return n+((u-e)/a*l||0)})},JI=function i(e,t,n,r){var s=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!s){var a=Gn(e),l={},u,f,h,p,m;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(oi(e)&&!oi(t)){for(h=[],p=e.length,m=p-2,f=1;f<p;f++)h.push(i(e[f-1],e[f]));p--,s=function(y){y*=p;var x=Math.min(m,~~y);return h[x](y-x)},n=t}else r||(e=ra(oi(e)?[]:{},e));if(!h){for(u in t)i_.call(l,e,u,"get",t[u]);s=function(y){return a_(y,l)||(a?e.p:e)}}}return _o(n,s)},Rx=function(e,t,n){var r=e.labels,s=_r,a,l,u;for(a in r)l=r[a]-t,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=a,s=l);return u},ji=function(e,t,n){var r=e.vars,s=r[t],a=cn,l=e._ctx,u,f,h;if(s)return u=r[t+"Params"],f=r.callbackScope||e,n&&so.length&&mh(),l&&(cn=l),h=u?s.apply(f,u):s.call(f),cn=a,h},yc=function(e){return ho(e),e.scrollTrigger&&e.scrollTrigger.kill(!!si),e.progress()<1&&ji(e,"onInterrupt"),e},il,JM=[],QM=function(e){if(e)if(e=!e.name&&e.default||e,Zg()||e.headless){var t=e.name,n=_n(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Hc,render:a_,add:i_,kill:p2,modifier:d2,rawVars:0},a={targetTest:0,get:0,getSetter:o_,aliases:{},register:0};if(El(),e!==r){if(Xi[t])return;yr(r,yr(gh(e,s),a)),ra(r.prototype,ra(s,gh(e,a))),Xi[r.prop=t]=r,e.targetTest&&(Zf.push(r),e_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}UM(t,r),e.register&&e.register(Oi,r,Li)}else JM.push(e)},Jt=255,Sc={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},pp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Jt+.5|0},eb=function(e,t,n){var r=e?Rs(e)?[e>>16,e>>8&Jt,e&Jt]:0:Sc.black,s,a,l,u,f,h,p,m,g,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Sc[e])r=Sc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),l=e.charAt(3),e="#"+s+s+a+a+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(jm),!t)u=+r[0]%360/360,f=+r[1]/100,h=+r[2]/100,a=h<=.5?h*(f+1):h+f-h*f,s=h*2-a,r.length>3&&(r[3]*=1),r[0]=pp(u+1/3,s,a),r[1]=pp(u,s,a),r[2]=pp(u-1/3,s,a);else if(~e.indexOf("="))return r=e.match(PM),n&&r.length<4&&(r[3]=1),r}else r=e.match(jm)||Sc.transparent;r=r.map(Number)}return t&&!y&&(s=r[0]/Jt,a=r[1]/Jt,l=r[2]/Jt,p=Math.max(s,a,l),m=Math.min(s,a,l),h=(p+m)/2,p===m?u=f=0:(g=p-m,f=h>.5?g/(2-p-m):g/(p+m),u=p===s?(a-l)/g+(a<l?6:0):p===a?(l-s)/g+2:(s-a)/g+4,u*=60),r[0]=~~(u+.5),r[1]=~~(f*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},tb=function(e){var t=[],n=[],r=-1;return e.split(oo).forEach(function(s){var a=s.match(nl)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},Px=function(e,t,n){var r="",s=(e+r).match(oo),a=t?"hsla(":"rgba(",l=0,u,f,h,p;if(!s)return e;if(s=s.map(function(m){return(m=eb(m,t,1))&&a+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(h=tb(e),u=n.c,u.join(r)!==h.c.join(r)))for(f=e.replace(oo,"1").split(nl),p=f.length-1;l<p;l++)r+=f[l]+(~u.indexOf(l)?s.shift()||a+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!f)for(f=e.split(oo),p=f.length-1;l<p;l++)r+=f[l]+s[l];return r+f[p]},oo=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Sc)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),QI=/hsl[a]?\(/,nb=function(e){var t=e.join(" "),n;if(oo.lastIndex=0,oo.test(t))return n=QI.test(t),e[1]=Px(e[1],n),e[0]=Px(e[0],n,tb(e[1])),!0},Gc,qi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,l=[],u,f,h,p,m,g,y=function x(_){var v=i()-r,w=_===!0,T,E,C,R;if((v>e||v<0)&&(n+=v-t),r+=v,C=r-n,T=C-a,(T>0||w)&&(R=++p.frame,m=C-p.time*1e3,p.time=C=C/1e3,a+=T+(T>=s?4:s-T),E=1),w||(u=f(x)),E)for(g=0;g<l.length;g++)l[g](C,m,R,_)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return m/(1e3/(_||60))},wake:function(){IM&&(!Km&&Zg()&&(Wr=Km=window,Jg=Wr.document||{},Ji.gsap=Oi,(Wr.gsapVersions||(Wr.gsapVersions=[])).push(Oi.version),OM(ph||Wr.GreenSockGlobals||!Wr.gsap&&Wr||{}),JM.forEach(QM)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&p.sleep(),f=h||function(_){return setTimeout(_,a-p.time*1e3+1|0)},Gc=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(u),Gc=0,f=Hc},lagSmoothing:function(_,v){e=_||1/0,t=Math.min(v||33,e)},fps:function(_){s=1e3/(_||240),a=p.time*1e3+s},add:function(_,v,w){var T=v?function(E,C,R,A){_(E,C,R,A),p.remove(T)}:_;return p.remove(_),l[w?"unshift":"push"](T),El(),T},remove:function(_,v){~(v=l.indexOf(_))&&l.splice(v,1)&&g>=v&&g--},_listeners:l},p}(),El=function(){return!Gc&&qi.wake()},Nt={},e2=/^[\d.\-M][\d.\-,\s]/,t2=/["']/g,n2=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,l,u,f;s<a;s++)u=n[s],l=s!==a-1?u.lastIndexOf(","):u.length,f=u.substr(0,l),t[r]=isNaN(f)?f.replace(t2,"").trim():+f,r=u.substr(l+1).trim();return t},i2=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},r2=function(e){var t=(e+"").split("("),n=Nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[n2(t[1])]:i2(e).split(",").map(zM)):Nt._CE&&e2.test(e)?Nt._CE("",e):n},ib=function(e){return function(t){return 1-e(1-t)}},rb=function i(e,t){for(var n=e._first,r;n;)n instanceof vi?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Yo=function(e,t){return e&&(_n(e)?e:Nt[e]||r2(e))||t},ha=function(e,t,n,r){n===void 0&&(n=function(u){return 1-t(1-u)}),r===void 0&&(r=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return Pi(e,function(l){Nt[l]=Ji[l]=s,Nt[a=l.toLowerCase()]=n;for(var u in s)Nt[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Nt[l+"."+u]=s[u]}),s},sb=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},mp=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ym*(Math.asin(1/r)||0),l=function(h){return h===1?1:r*Math.pow(2,-10*h)*DI((h-a)*s)+1},u=e==="out"?l:e==="in"?function(f){return 1-l(1-f)}:sb(l);return s=Ym/s,u.config=function(f,h){return i(e,f,h)},u},gp=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:sb(n);return r.config=function(s){return i(e,s)},r};Pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;ha(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Nt.Linear.easeNone=Nt.none=Nt.Linear.easeIn;ha("Elastic",mp("in"),mp("out"),mp());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(l){return l<t?i*l*l:l<n?i*Math.pow(l-1.5/e,2)+.75:l<r?i*(l-=2.25/e)*l+.9375:i*Math.pow(l-2.625/e,2)+.984375};ha("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ha("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});ha("Circ",function(i){return-(CM(1-i*i)-1)});ha("Sine",function(i){return i===1?1:-LI(i*RI)+1});ha("Back",gp("in"),gp("out"),gp());Nt.SteppedEase=Nt.steps=Ji.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-en;return function(l){return((r*Zc(0,a,l)|0)+s)*n}}};xl.ease=Nt["quad.out"];Pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return t_+=i+","+i+"Params,"});var ob=function(e,t){this.id=PI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:FM,this.set=t?t.getSetter:o_},Wc=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Sl(this,+t.duration,1,1),this.data=t.data,cn&&(this._ctx=cn,cn.data.push(this)),Gc||qi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Sl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(El(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hh(this,n),!s._dp||s.parent||GM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===en||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),BM(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ax(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ax(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?yl(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_h(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-en?0:this._rts,this.totalTime(Zc(-Math.abs(this._delay),this._tDur,s),r!==!1),zh(this),zI(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(El(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&qr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_h(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=UI);var r=si;return si=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),si=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Cx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(fr(this,n),Ri(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ri(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-en)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=_n(n)?n:HM,l=function(){var f=r.then;r.then=null,_n(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=f),s(a),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){yc(this)},i}();yr(Wc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var vi=function(i){AM(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ri(n.sortChildren),hn&&qr(n.parent||hn,Ss(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&WM(Ss(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Cc(0,arguments,this),this},t.from=function(r,s,a){return Cc(1,arguments,this),this},t.fromTo=function(r,s,a,l){return Cc(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ac(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new An(r,s,fr(this,a),1),this},t.call=function(r,s,a){return qr(this,An.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,l,u,f,h){return a.duration=s,a.stagger=a.stagger||l,a.onComplete=f,a.onCompleteParams=h,a.parent=this,new An(r,a,fr(this,u)),this},t.staggerFrom=function(r,s,a,l,u,f,h){return a.runBackwards=1,Ac(a).immediateRender=Ri(a.immediateRender),this.staggerTo(r,s,a,l,u,f,h)},t.staggerFromTo=function(r,s,a,l,u,f,h,p){return l.startAt=a,Ac(l).immediateRender=Ri(l.immediateRender),this.staggerTo(r,s,l,u,f,h,p)},t.render=function(r,s,a){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,f=this._dur,h=r<=0?0:Hn(r),p=this._zTime<0!=r<0&&(this._initted||!f),m,g,y,x,_,v,w,T,E,C,R,A;if(this!==hn&&h>u&&r>=0&&(h=u),h!==this._tTime||a||p){if(l!==this._time&&f&&(h+=this._time-l,r+=this._time-l),m=h,E=this._start,T=this._ts,v=!T,p&&(f||(l=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,a);if(m=Hn(h%_),h===u?(x=this._repeat,m=f):(x=~~(h/_),x&&x===h/_&&(m=f,x--),m>f&&(m=f)),C=yl(this._tTime,_),!l&&this._tTime&&C!==x&&this._tTime-C*_-this._dur<=0&&(C=x),R&&x&1&&(m=f-m,A=1),x!==C&&!this._lock){var z=R&&C&1,G=z===(R&&x&1);if(x<C&&(z=!z),l=z?0:h%f?f:h,this._lock=1,this.render(l||(A?0:Hn(x*_)),s,!f)._lock=0,this._tTime=h,!s&&this.parent&&ji(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),l&&l!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,u=this._tDur,G&&(this._lock=2,l=z?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;rb(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=WI(this,Hn(l),Hn(m)),w&&(h-=m-(m=w._start))),this._tTime=h,this._time=m,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&m&&!s&&!x&&(ji(this,"onStart"),this._tTime!==h))return this;if(m>=l&&r>=0)for(g=this._first;g;){if(y=g._next,(g._act||m>=g._start)&&g._ts&&w!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(m-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(m-g._start)*g._ts,s,a),m!==this._time||!this._ts&&!v){w=0,y&&(h+=this._zTime=-en);break}}g=y}else{g=this._last;for(var M=r<0?r:m;g;){if(y=g._prev,(g._act||M<=g._end)&&g._ts&&w!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(M-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(M-g._start)*g._ts,s,a||si&&(g._initted||g._startAt)),m!==this._time||!this._ts&&!v){w=0,y&&(h+=this._zTime=M?-en:en);break}}g=y}}if(w&&!s&&(this.pause(),w.render(m>=l?0:-en)._zTime=m>=l?1:-1,this._ts))return this._start=E,zh(this),this.render(r,s,a);this._onUpdate&&!s&&ji(this,"onUpdate",!0),(h===u&&this._tTime>=this.totalDuration()||!h&&l)&&(E===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(h===u&&this._ts>0||!h&&this._ts<0)&&ho(this,1),!s&&!(r<0&&!l)&&(h||l||!u)&&(ji(this,h===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(Rs(s)||(s=fr(this,s,r)),!(r instanceof Wc)){if(oi(r))return r.forEach(function(l){return a.add(l,s)}),this;if(Gn(r))return this.addLabel(r,s);if(_n(r))r=An.delayedCall(0,r);else return this}return this!==r?qr(this,r,s):this},t.getChildren=function(r,s,a,l){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),l===void 0&&(l=-_r);for(var u=[],f=this._first;f;)f._start>=l&&(f instanceof An?s&&u.push(f):(a&&u.push(f),r&&u.push.apply(u,f.getChildren(!0,s,a)))),f=f._next;return u},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return Gn(r)?this.removeLabel(r):_n(r)?this.killTweensOf(r):(Bh(this,r),r===this._recent&&(this._recent=this._last),qo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Hn(qi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fr(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var l=An.delayedCall(0,s||Hc,a);return l.data="isPause",this._hasPause=1,qr(this,l,fr(this,r))},t.removePause=function(r){var s=this._first;for(r=fr(this,r);s;)s._start===r&&s.data==="isPause"&&ho(s),s=s._next},t.killTweensOf=function(r,s,a){for(var l=this.getTweensOf(r,a),u=l.length;u--;)Qs!==l[u]&&l[u].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],l=vr(r),u=this._first,f=Rs(s),h;u;)u instanceof An?NI(u._targets,l)&&(f?(!Qs||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&a.push(u):(h=u.getTweensOf(l,s)).length&&a.push.apply(a,h),u=u._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,l=fr(a,r),u=s,f=u.startAt,h=u.onStart,p=u.onStartParams,m=u.immediateRender,g,y=An.to(a,yr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(f&&"time"in f?f.time:a._time))/a.timeScale())||en,onStart:function(){if(a.pause(),!g){var _=s.duration||Math.abs((l-(f&&"time"in f?f.time:a._time))/a.timeScale());y._dur!==_&&Sl(y,_,0,1).render(y._time,!0,!0),g=1}h&&h.apply(y,p||[])}},s));return m?y.render(0):y},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,yr({startAt:{time:fr(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rx(this,fr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rx(this,fr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var l=this._first,u=this.labels,f;l;)l._start>=a&&(l._start+=r,l._end+=r),l=l._next;if(s)for(f in u)u[f]>=a&&(u[f]+=r);return qo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qo(this)},t.totalDuration=function(r){var s=0,a=this,l=a._last,u=_r,f,h,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(p=a.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),h=l._start,h>u&&a._sort&&l._ts&&!a._lock?(a._lock=1,qr(a,l,h-l._delay,1)._lock=0):u=h,h<0&&l._ts&&(s-=h,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=h/a._ts,a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=f;Sl(a,a===hn&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(hn._ts&&(BM(hn,_h(r,hn)),NM=qi.frame),qi.frame>=Tx){Tx+=Ki.autoSleep||120;var s=hn._first;if((!s||!s._ts)&&Ki.autoSleep&&qi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qi.sleep()}}},e}(Wc);yr(vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var s2=function(e,t,n,r,s,a,l){var u=new Li(this._pt,e,t,0,1,hb,null,s),f=0,h=0,p,m,g,y,x,_,v,w;for(u.b=n,u.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=kc(r)),a&&(w=[n,r],a(w,e,t),n=w[0],r=w[1]),m=n.match(hp)||[];p=hp.exec(r);)y=p[0],x=r.substring(f,p.index),g?g=(g+1)%5:x.substr(-5)==="rgba("&&(g=1),y!==m[h++]&&(_=parseFloat(m[h-1])||0,u._pt={_next:u._pt,p:x||h===1?x:",",s:_,c:y.charAt(1)==="="?cl(_,y)-_:parseFloat(y)-_,m:g&&g<4?Math.round:0},f=hp.lastIndex);return u.c=f<r.length?r.substring(f,r.length):"",u.fp=l,(LM.test(r)||v)&&(u.e=0),this._pt=u,u},i_=function(e,t,n,r,s,a,l,u,f,h){_n(r)&&(r=r(s||0,e,a));var p=e[t],m=n!=="get"?n:_n(p)?f?e[t.indexOf("set")||!_n(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():p,g=_n(p)?f?u2:ub:s_,y;if(Gn(r)&&(~r.indexOf("random(")&&(r=kc(r)),r.charAt(1)==="="&&(y=cl(m,r)+(ri(m)||0),(y||y===0)&&(r=y))),!h||m!==r||ig)return!isNaN(m*r)&&r!==""?(y=new Li(this._pt,e,t,+m||0,r-(m||0),typeof p=="boolean"?h2:fb,0,g),f&&(y.fp=f),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(t in e)&&Qg(t,r),s2.call(this,e,t,m,r,g,u||Ki.stringFilter,f))},o2=function(e,t,n,r,s){if(_n(e)&&(e=Rc(e,s,t,n,r)),!is(e)||e.style&&e.nodeType||oi(e)||RM(e))return Gn(e)?Rc(e,s,t,n,r):e;var a={},l;for(l in e)a[l]=Rc(e[l],s,t,n,r);return a},ab=function(e,t,n,r,s,a){var l,u,f,h;if(Xi[e]&&(l=new Xi[e]).init(s,l.rawVars?t[e]:o2(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=u=new Li(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==il))for(f=n._ptLookup[n._targets.indexOf(s)],h=l._props.length;h--;)f[l._props[h]]=u;return l},Qs,ig,r_=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,l=r.immediateRender,u=r.lazy,f=r.onUpdate,h=r.runBackwards,p=r.yoyoEase,m=r.keyframes,g=r.autoRevert,y=e._dur,x=e._startAt,_=e._targets,v=e.parent,w=v&&v.data==="nested"?v.vars.targets:_,T=e._overwrite==="auto"&&!jg,E=e.timeline,C,R,A,z,G,M,U,V,ae,H,J,j,te;if(E&&(!m||!s)&&(s="none"),e._ease=Yo(s,xl.ease),e._yEase=p?ib(Yo(p===!0?s:p,xl.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||m&&!r.stagger){if(V=_[0]?Xo(_[0]).harness:0,j=V&&r[V.prop],C=gh(r,e_),x&&(x._zTime<0&&x.progress(1),t<0&&h&&l&&!g?x.render(-1,!0):x.revert(h&&y?Kf:OI),x._lazy=0),a){if(ho(e._startAt=An.set(_,yr({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!x&&Ri(u),startAt:null,delay:0,onUpdate:f&&function(){return ji(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si||!l&&!g)&&e._startAt.revert(Kf),l&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&y&&!x){if(t&&(l=!1),A=yr({overwrite:!1,data:"isFromStart",lazy:l&&!x&&Ri(u),immediateRender:l,stagger:0,parent:v},C),j&&(A[V.prop]=j),ho(e._startAt=An.set(_,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si?e._startAt.revert(Kf):e._startAt.render(-1,!0)),e._zTime=t,!l)i(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,u=y&&Ri(u)||u&&!y,R=0;R<_.length;R++){if(G=_[R],U=G._gsap||n_(_)[R]._gsap,e._ptLookup[R]=H={},Zm[U.id]&&so.length&&mh(),J=w===_?R:w.indexOf(G),V&&(ae=new V).init(G,j||C,e,J,w)!==!1&&(e._pt=z=new Li(e._pt,G,ae.name,0,1,ae.render,ae,0,ae.priority),ae._props.forEach(function(ie){H[ie]=z}),ae.priority&&(M=1)),!V||j)for(A in C)Xi[A]&&(ae=ab(A,C,e,J,G,w))?ae.priority&&(M=1):H[A]=z=i_.call(e,G,A,"get",C[A],J,w,0,r.stringFilter);e._op&&e._op[R]&&e.kill(G,e._op[R]),T&&e._pt&&(Qs=e,hn.killTweensOf(G,H,e.globalTime(t)),te=!e.parent,Qs=0),e._pt&&u&&(Zm[U.id]=1)}M&&db(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!te,m&&t<=0&&E.render(_r,!0,!0)},a2=function(e,t,n,r,s,a,l,u){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,m,g;if(!f)for(f=e._ptCache[t]=[],m=e._ptLookup,g=e._targets.length;g--;){if(h=m[g][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ig=1,e.vars[t]="+=0",r_(e,l),ig=0,u?zc(t+" not eligible for reset"):1;f.push(h)}for(g=f.length;g--;)p=f[g],h=p._pt||p,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,p.e&&(p.e=Mn(n)+ri(p.e)),p.b&&(p.b=h.s+ri(p.b))},l2=function(e,t){var n=e[0]?Xo(e[0]).harness:0,r=n&&n.aliases,s,a,l,u;if(!r)return t;s=ra({},t);for(a in r)if(a in s)for(u=r[a].split(","),l=u.length;l--;)s[u[l]]=s[a];return s},c2=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,l;if(oi(t))l=n[e]||(n[e]=[]),t.forEach(function(u,f){return l.push({t:f/(t.length-1)*100,v:u,e:s})});else for(a in t)l=n[a]||(n[a]=[]),a==="ease"||l.push({t:parseFloat(e),v:t[a],e:s})},Rc=function(e,t,n,r,s){return _n(e)?e.call(t,n,r,s):Gn(e)&&~e.indexOf("random(")?kc(e):e},lb=t_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",cb={};Pi(lb+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return cb[i]=1});var An=function(i){AM(e,i);function e(n,r,s,a){var l;typeof r=="number"&&(s.duration=r,r=s,s=null),l=i.call(this,a?r:Ac(r))||this;var u=l.vars,f=u.duration,h=u.delay,p=u.immediateRender,m=u.stagger,g=u.overwrite,y=u.keyframes,x=u.defaults,_=u.scrollTrigger,v=u.yoyoEase,w=r.parent||hn,T=(oi(n)||RM(n)?Rs(n[0]):"length"in r)?[n]:vr(n),E,C,R,A,z,G,M,U;if(l._targets=T.length?n_(T):zc("GSAP target "+n+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,y||m||Ku(f)||Ku(h)){if(r=l.vars,E=l.timeline=new vi({data:"nested",defaults:x||{},targets:w&&w.data==="nested"?w.vars.targets:T}),E.kill(),E.parent=E._dp=Ss(l),E._start=0,m||Ku(f)||Ku(h)){if(A=T.length,M=m&&qM(m),is(m))for(z in m)~lb.indexOf(z)&&(U||(U={}),U[z]=m[z]);for(C=0;C<A;C++)R=gh(r,cb),R.stagger=0,v&&(R.yoyoEase=v),U&&ra(R,U),G=T[C],R.duration=+Rc(f,Ss(l),C,G,T),R.delay=(+Rc(h,Ss(l),C,G,T)||0)-l._delay,!m&&A===1&&R.delay&&(l._delay=h=R.delay,l._start+=h,R.delay=0),E.to(G,R,M?M(C,G,T):0),E._ease=Nt.none;E.duration()?f=h=0:l.timeline=0}else if(y){Ac(yr(E.vars.defaults,{ease:"none"})),E._ease=Yo(y.ease||r.ease||"none");var V=0,ae,H,J;if(oi(y))y.forEach(function(j){return E.to(T,j,">")}),E.duration();else{R={};for(z in y)z==="ease"||z==="easeEach"||c2(z,y[z],R,y.easeEach);for(z in R)for(ae=R[z].sort(function(j,te){return j.t-te.t}),V=0,C=0;C<ae.length;C++)H=ae[C],J={ease:H.e,duration:(H.t-(C?ae[C-1].t:0))/100*f},J[z]=H.v,E.to(T,J,V),V+=J.duration;E.duration()<f&&E.to({},{duration:f-E.duration()})}}f||l.duration(f=E.duration())}else l.timeline=0;return g===!0&&!jg&&(Qs=Ss(l),hn.killTweensOf(T),Qs=0),qr(w,Ss(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!f&&!y&&l._start===Hn(w._time)&&Ri(p)&&HI(Ss(l))&&w.data!=="nested")&&(l._tTime=-en,l.render(Math.max(0,-h)||0)),_&&WM(Ss(l),_),l}var t=e.prototype;return t.render=function(r,s,a){var l=this._time,u=this._tDur,f=this._dur,h=r<0,p=r>u-en&&!h?u:r<en?0:r,m,g,y,x,_,v,w,T,E;if(!f)GI(this,r,s,a);else if(p!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(m=p,T=this.timeline,this._repeat){if(x=f+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+r,s,a);if(m=Hn(p%x),p===u?(y=this._repeat,m=f):(y=~~(p/x),y&&y===Hn(p/x)&&(m=f,y--),m>f&&(m=f)),v=this._yoyo&&y&1,v&&(E=this._yEase,m=f-m),_=yl(this._tTime,x),m===l&&!a&&this._initted&&y===_)return this._tTime=p,this;y!==_&&(T&&this._yEase&&rb(T,v),this.vars.repeatRefresh&&!v&&!this._lock&&this._time!==x&&this._initted&&(this._lock=a=1,this.render(Hn(x*y),!0).invalidate()._lock=0))}if(!this._initted){if(VM(this,h?r:m,a,s,p))return this._tTime=0,this;if(l!==this._time&&!(a&&this.vars.repeatRefresh&&y!==_))return this;if(f!==this._dur)return this.render(r,s,a)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(E||this._ease)(m/f),this._from&&(this.ratio=w=1-w),m&&!l&&!s&&!y&&(ji(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(w,g.d),g=g._next;T&&T.render(r<0?r:T._dur*T._ease(m/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&Jm(this,r,s,a),ji(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!s&&this.parent&&ji(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&Jm(this,r,!0,!0),(r||!f)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&ho(this,1),!s&&!(h&&!l)&&(p||l||v)&&(ji(this,p===u?"onComplete":"onReverseComplete",!0),this._prom&&!(p<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,l,u){Gc||qi.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||r_(this,f),h=this._ease(f/this._dur),a2(this,r,s,a,l,h,f,u)?this.resetTo(r,s,a,l,1):(Hh(this,0),this.parent||kM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?yc(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Qs&&Qs.vars.overwrite!==!0)._first||yc(this),this.parent&&a!==this.timeline.totalDuration()&&Sl(this,this._dur*this.timeline._tDur/a,0,1),this}var l=this._targets,u=r?vr(r):l,f=this._ptLookup,h=this._pt,p,m,g,y,x,_,v;if((!s||s==="all")&&BI(l,u))return s==="all"&&(this._pt=0),yc(this);for(p=this._op=this._op||[],s!=="all"&&(Gn(s)&&(x={},Pi(s,function(w){return x[w]=1}),s=x),s=l2(l,s)),v=l.length;v--;)if(~u.indexOf(l[v])){m=f[v],s==="all"?(p[v]=s,y=m,g={}):(g=p[v]=p[v]||{},y=s);for(x in y)_=m&&m[x],_&&((!("kill"in _.d)||_.d.kill(x)===!0)&&Bh(this,_,"_pt"),delete m[x]),g!=="all"&&(g[x]=1)}return this._initted&&!this._pt&&h&&yc(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Cc(1,arguments)},e.delayedCall=function(r,s,a,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:l})},e.fromTo=function(r,s,a){return Cc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return hn.killTweensOf(r,s,a)},e}(Wc);yr(An.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pi("staggerTo,staggerFrom,staggerFromTo",function(i){An[i]=function(){var e=new vi,t=eg.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var s_=function(e,t,n){return e[t]=n},ub=function(e,t,n){return e[t](n)},u2=function(e,t,n,r){return e[t](r.fp,n)},f2=function(e,t,n){return e.setAttribute(t,n)},o_=function(e,t){return _n(e[t])?ub:Kg(e[t])&&e.setAttribute?f2:s_},fb=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},h2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},hb=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},a_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},d2=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},p2=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Bh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},m2=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},db=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Li=function(){function i(t,n,r,s,a,l,u,f,h){this.t=n,this.s=s,this.c=a,this.p=r,this.r=l||fb,this.d=u||this,this.set=f||s_,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=m2,this.m=n,this.mt=s,this.tween=r},i}();Pi(t_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return e_[i]=1});Ji.TweenMax=Ji.TweenLite=An;Ji.TimelineLite=Ji.TimelineMax=vi;hn=new vi({sortChildren:!1,defaults:xl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=nb;var jo=[],Jf={},g2=[],Lx=0,_2=0,_p=function(e){return(Jf[e]||g2).map(function(t){return t()})},rg=function(){var e=Date.now(),t=[];e-Lx>2&&(_p("matchMediaInit"),jo.forEach(function(n){var r=n.queries,s=n.conditions,a,l,u,f;for(l in r)a=Wr.matchMedia(r[l]).matches,a&&(u=1),a!==s[l]&&(s[l]=a,f=1);f&&(n.revert(),u&&t.push(n))}),_p("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Lx=e,_p("matchMedia"))},pb=function(){function i(t,n){this.selector=n&&tg(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_2++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){_n(n)&&(s=r,r=n,n=_n);var a=this,l=function(){var f=cn,h=a.selector,p;return f&&f!==a&&f.data.push(a),s&&(a.selector=tg(s)),cn=a,p=r.apply(a,arguments),_n(p)&&a._r.push(p),cn=f,a.selector=h,a.isReverted=!1,p};return a.last=l,n===_n?l(a,function(u){return a.add(null,u)}):n?a[n]=l:l},e.ignore=function(n){var r=cn;cn=null,n(this),cn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof An&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,f;u--;)f=s.data[u],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(h){return l.splice(l.indexOf(h),1)}));for(l.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),u=s.data.length;u--;)f=s.data[u],f instanceof vi?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof An)&&f.revert&&f.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var a=jo.length;a--;)jo[a].id===this.id&&jo.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),v2=function(){function i(t){this.contexts=[],this.scope=t,cn&&cn.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){is(n)||(n={matches:n});var a=new pb(0,s||this.scope),l=a.conditions={},u,f,h;cn&&!a.selector&&(a.selector=cn.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(f in n)f==="all"?h=1:(u=Wr.matchMedia(n[f]),u&&(jo.indexOf(a)<0&&jo.push(a),(l[f]=u.matches)&&(h=1),u.addListener?u.addListener(rg):u.addEventListener("change",rg)));return h&&r(a,function(p){return a.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),vh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return QM(r)})},timeline:function(e){return new vi(e)},getTweensOf:function(e,t){return hn.getTweensOf(e,t)},getProperty:function(e,t,n,r){Gn(e)&&(e=vr(e)[0]);var s=Xo(e||{}).get,a=n?HM:zM;return n==="native"&&(n=""),e&&(t?a((Xi[t]&&Xi[t].get||s)(e,t,n,r)):function(l,u,f){return a((Xi[l]&&Xi[l].get||s)(e,l,u,f))})},quickSetter:function(e,t,n){if(e=vr(e),e.length>1){var r=e.map(function(h){return Oi.quickSetter(h,t,n)}),s=r.length;return function(h){for(var p=s;p--;)r[p](h)}}e=e[0]||{};var a=Xi[t],l=Xo(e),u=l.harness&&(l.harness.aliases||{})[t]||t,f=a?function(h){var p=new a;il._pt=0,p.init(e,n?h+n:h,il,0,[e]),p.render(1,p),il._pt&&a_(1,il)}:l.set(e,u);return a?f:function(h){return f(e,u,n?h+n:h,l,1)}},quickTo:function(e,t,n){var r,s=Oi.to(e,ra((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(u,f,h){return s.resetTo(t,u,f,h)};return a.tween=s,a},isTweening:function(e){return hn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yo(e.ease,xl.ease)),wx(xl,e||{})},config:function(e){return wx(Ki,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Xi[l]&&!Ji[l]&&zc(t+" effect requires "+l+" plugin.")}),dp[t]=function(l,u,f){return n(vr(l),yr(u||{},s),f)},a&&(vi.prototype[t]=function(l,u,f){return this.add(dp[t](l,is(u)?u:(f=u)&&{},this),f)})},registerEase:function(e,t){Nt[e]=Yo(t)},parseEase:function(e,t){return arguments.length?Yo(e,t):Nt},getById:function(e){return hn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vi(e),r,s;for(n.smoothChildTiming=Ri(e.smoothChildTiming),hn.remove(n),n._dp=0,n._time=n._tTime=hn._time,r=hn._first;r;)s=r._next,(t||!(!r._dur&&r instanceof An&&r.vars.onComplete===r._targets[0]))&&qr(n,r,r._start-r._delay),r=s;return qr(hn,n,0),n},context:function(e,t){return e?new pb(e,t):cn},matchMedia:function(e){return new v2(e)},matchMediaRefresh:function(){return jo.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||rg()},addEventListener:function(e,t){var n=Jf[e]||(Jf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Jf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:KI,wrapYoyo:ZI,distribute:qM,random:jM,snap:YM,normalize:jI,getUnit:ri,clamp:$I,splitColor:eb,toArray:vr,selector:tg,mapRange:ZM,pipe:qI,unitize:YI,interpolate:JI,shuffle:XM},install:OM,effects:dp,ticker:qi,updateRoot:vi.updateRoot,plugins:Xi,globalTimeline:hn,core:{PropTween:Li,globals:UM,Tween:An,Timeline:vi,Animation:Wc,getCache:Xo,_removeLinkedListItem:Bh,reverting:function(){return si},context:function(e){return e&&cn&&(cn.data.push(e),e._ctx=cn),cn},suppressOverwrites:function(e){return jg=e}}};Pi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return vh[i]=An[i]});qi.add(vi.updateRoot);il=vh.to({},{duration:0});var x2=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},y2=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=x2(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},vp=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(l){var u,f;if(Gn(s)&&(u={},Pi(s,function(h){return u[h]=1}),s=u),t){u={};for(f in s)u[f]=t(s[f]);s=u}y2(l,s)}}}},Oi=vh.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,l,u;this.tween=n;for(a in t)u=e.getAttribute(a)||"",l=this.add(e,"setAttribute",(u||0)+"",t[a],r,s,0,0,a),l.op=a,l.b=u,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)si?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},vp("roundProps",ng),vp("modifiers"),vp("snap",YM))||vh;An.version=vi.version=Oi.version="3.12.5";IM=1;Zg()&&El();Nt.Power0;Nt.Power1;Nt.Power2;Nt.Power3;Nt.Power4;Nt.Linear;Nt.Quad;Nt.Cubic;Nt.Quart;Nt.Quint;Nt.Strong;Nt.Elastic;Nt.Back;Nt.SteppedEase;Nt.Bounce;Nt.Sine;Nt.Expo;Nt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dx,eo,ul,l_,Go,Ix,c_,S2=function(){return typeof window<"u"},Ps={},Oo=180/Math.PI,fl=Math.PI/180,Da=Math.atan2,Ox=1e8,u_=/([A-Z])/g,E2=/(left|right|width|margin|padding|x)/i,M2=/[\s,\(]\S/,jr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},b2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},T2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},w2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},mb=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gb=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},A2=function(e,t,n){return e.style[t]=n},C2=function(e,t,n){return e.style.setProperty(t,n)},R2=function(e,t,n){return e._gsap[t]=n},P2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},L2=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},D2=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},dn="transform",Di=dn+"Origin",I2=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Ps&&s){if(this.tfm=this.tfm||{},e!=="transform")e=jr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Es(r,l)}):this.tfm[e]=a.x?a[e]:Es(r,e),e===Di&&(this.tfm.zOrigin=a.zOrigin);else return jr.transform.split(",").forEach(function(l){return i.call(n,l,t)});if(this.props.indexOf(dn)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Di,t,"")),e=dn}(s||t)&&this.props.push(e,t,s[e])},_b=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},O2=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(u_,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=c_(),(!s||!s.isStart)&&!n[dn]&&(_b(n),r.zOrigin&&n[Di]&&(n[Di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},vb=function(e,t){var n={target:e,props:[],revert:O2,save:I2};return e._gsap||Oi.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},xb,og=function(e,t){var n=eo.createElementNS?eo.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):eo.createElement(e);return n&&n.style?n:eo.createElement(e)},Jr=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(u_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Ml(t)||t,1)||""},Ux="O,Moz,ms,Ms,Webkit".split(","),Ml=function(e,t,n){var r=t||Go,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ux[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ux[a]:"")+e},ag=function(){S2()&&window.document&&(Dx=window,eo=Dx.document,ul=eo.documentElement,Go=og("div")||{style:{}},og("div"),dn=Ml(dn),Di=dn+"Origin",Go.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",xb=!!Ml("perspective"),c_=Oi.core.reverting,l_=1)},xp=function i(e){var t=og("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(ul.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ul.removeChild(t),this.style.cssText=s,a},Nx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},yb=function(e){var t;try{t=e.getBBox()}catch{t=xp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===xp||(t=xp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Nx(e,["x","cx","x1"])||0,y:+Nx(e,["y","cy","y1"])||0,width:0,height:0}:t},Sb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&yb(e))},sa=function(e,t){if(t){var n=e.style,r;t in Ps&&t!==Di&&(t=dn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(u_,"-$1").toLowerCase())):n.removeAttribute(t)}},to=function(e,t,n,r,s,a){var l=new Li(e._pt,t,n,0,1,a?gb:mb);return e._pt=l,l.b=r,l.e=s,e._props.push(n),l},Fx={deg:1,rad:1,turn:1},U2={grid:1,flex:1},po=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",l=Go.style,u=E2.test(t),f=e.tagName.toLowerCase()==="svg",h=(f?"client":"offset")+(u?"Width":"Height"),p=100,m=r==="px",g=r==="%",y,x,_,v;if(r===a||!s||Fx[r]||Fx[a])return s;if(a!=="px"&&!m&&(s=i(e,t,n,"px")),v=e.getCTM&&Sb(e),(g||a==="%")&&(Ps[t]||~t.indexOf("adius")))return y=v?e.getBBox()[u?"width":"height"]:e[h],Mn(g?s/y*p:s/100*y);if(l[u?"width":"height"]=p+(m?a:r),x=~t.indexOf("adius")||r==="em"&&e.appendChild&&!f?e:e.parentNode,v&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===eo||!x.appendChild)&&(x=eo.body),_=x._gsap,_&&g&&_.width&&u&&_.time===qi.time&&!_.uncache)return Mn(s/_.width*p);if(g&&(t==="height"||t==="width")){var w=e.style[t];e.style[t]=p+r,y=e[h],w?e.style[t]=w:sa(e,t)}else(g||a==="%")&&!U2[Jr(x,"display")]&&(l.position=Jr(e,"position")),x===e&&(l.position="static"),x.appendChild(Go),y=Go[h],x.removeChild(Go),l.position="absolute";return u&&g&&(_=Xo(x),_.time=qi.time,_.width=x[h]),Mn(m?y*s/p:y&&s?p/y*s:0)},Es=function(e,t,n,r){var s;return l_||ag(),t in jr&&t!=="transform"&&(t=jr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ps[t]&&t!=="transform"?(s=$c(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:yh(Jr(e,Di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=xh[t]&&xh[t](e,t,n)||Jr(e,t)||FM(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?po(e,t,s,n)+n:s},N2=function(e,t,n,r){if(!n||n==="none"){var s=Ml(t,e,1),a=s&&Jr(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Jr(e,"borderTopColor"))}var l=new Li(this._pt,e.style,t,0,1,hb),u=0,f=0,h,p,m,g,y,x,_,v,w,T,E,C;if(l.b=n,l.e=r,n+="",r+="",r==="auto"&&(x=e.style[t],e.style[t]=r,r=Jr(e,t)||r,x?e.style[t]=x:sa(e,t)),h=[n,r],nb(h),n=h[0],r=h[1],m=n.match(nl)||[],C=r.match(nl)||[],C.length){for(;p=nl.exec(r);)_=p[0],w=r.substring(u,p.index),y?y=(y+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(y=1),_!==(x=m[f++]||"")&&(g=parseFloat(x)||0,E=x.substr((g+"").length),_.charAt(1)==="="&&(_=cl(g,_)+E),v=parseFloat(_),T=_.substr((v+"").length),u=nl.lastIndex-T.length,T||(T=T||Ki.units[t]||E,u===r.length&&(r+=T,l.e+=T)),E!==T&&(g=po(e,t,x,T)||0),l._pt={_next:l._pt,p:w||f===1?w:",",s:g,c:v-g,m:y&&y<4||t==="zIndex"?Math.round:0});l.c=u<r.length?r.substring(u,r.length):""}else l.r=t==="display"&&r==="none"?gb:mb;return LM.test(r)&&(l.e=0),this._pt=l,l},Bx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},F2=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Bx[n]||n,t[1]=Bx[r]||r,t.join(" ")},B2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,l,u,f;if(s==="all"||s===!0)r.cssText="",u=1;else for(s=s.split(","),f=s.length;--f>-1;)l=s[f],Ps[l]&&(u=1,l=l==="transformOrigin"?Di:dn),sa(n,l);u&&(sa(n,dn),a&&(a.svg&&n.removeAttribute("transform"),$c(n,1),a.uncache=1,_b(r)))}},xh={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Li(e._pt,t,n,0,0,B2);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},Vc=[1,0,0,1,0,0],Eb={},Mb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},zx=function(e){var t=Jr(e,dn);return Mb(t)?Vc:t.substr(7).match(PM).map(Mn)},f_=function(e,t){var n=e._gsap||Xo(e),r=e.style,s=zx(e),a,l,u,f;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?Vc:s):(s===Vc&&!e.offsetParent&&e!==ul&&!n.svg&&(u=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(f=1,l=e.nextElementSibling,ul.appendChild(e)),s=zx(e),u?r.display=u:sa(e,"display"),f&&(l?a.insertBefore(e,l):a?a.appendChild(e):ul.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},lg=function(e,t,n,r,s,a){var l=e._gsap,u=s||f_(e,!0),f=l.xOrigin||0,h=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,g=u[0],y=u[1],x=u[2],_=u[3],v=u[4],w=u[5],T=t.split(" "),E=parseFloat(T[0])||0,C=parseFloat(T[1])||0,R,A,z,G;n?u!==Vc&&(A=g*_-y*x)&&(z=E*(_/A)+C*(-x/A)+(x*w-_*v)/A,G=E*(-y/A)+C*(g/A)-(g*w-y*v)/A,E=z,C=G):(R=yb(e),E=R.x+(~T[0].indexOf("%")?E/100*R.width:E),C=R.y+(~(T[1]||T[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&l.smooth?(v=E-f,w=C-h,l.xOffset=p+(v*g+w*x)-v,l.yOffset=m+(v*y+w*_)-w):l.xOffset=l.yOffset=0,l.xOrigin=E,l.yOrigin=C,l.smooth=!!r,l.origin=t,l.originIsAbsolute=!!n,e.style[Di]="0px 0px",a&&(to(a,l,"xOrigin",f,E),to(a,l,"yOrigin",h,C),to(a,l,"xOffset",p,l.xOffset),to(a,l,"yOffset",m,l.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},$c=function(e,t){var n=e._gsap||new ob(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",l="deg",u=getComputedStyle(e),f=Jr(e,Di)||"0",h,p,m,g,y,x,_,v,w,T,E,C,R,A,z,G,M,U,V,ae,H,J,j,te,ie,oe,N,ce,Se,Je,ne,ue;return h=p=m=x=_=v=w=T=E=0,g=y=1,n.svg=!!(e.getCTM&&Sb(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[dn]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[dn]!=="none"?u[dn]:"")),r.scale=r.rotate=r.translate="none"),A=f_(e,n.svg),n.svg&&(n.uncache?(ie=e.getBBox(),f=n.xOrigin-ie.x+"px "+(n.yOrigin-ie.y)+"px",te=""):te=!t&&e.getAttribute("data-svg-origin"),lg(e,te||f,!!te||n.originIsAbsolute,n.smooth!==!1,A)),C=n.xOrigin||0,R=n.yOrigin||0,A!==Vc&&(U=A[0],V=A[1],ae=A[2],H=A[3],h=J=A[4],p=j=A[5],A.length===6?(g=Math.sqrt(U*U+V*V),y=Math.sqrt(H*H+ae*ae),x=U||V?Da(V,U)*Oo:0,w=ae||H?Da(ae,H)*Oo+x:0,w&&(y*=Math.abs(Math.cos(w*fl))),n.svg&&(h-=C-(C*U+R*ae),p-=R-(C*V+R*H))):(ue=A[6],Je=A[7],N=A[8],ce=A[9],Se=A[10],ne=A[11],h=A[12],p=A[13],m=A[14],z=Da(ue,Se),_=z*Oo,z&&(G=Math.cos(-z),M=Math.sin(-z),te=J*G+N*M,ie=j*G+ce*M,oe=ue*G+Se*M,N=J*-M+N*G,ce=j*-M+ce*G,Se=ue*-M+Se*G,ne=Je*-M+ne*G,J=te,j=ie,ue=oe),z=Da(-ae,Se),v=z*Oo,z&&(G=Math.cos(-z),M=Math.sin(-z),te=U*G-N*M,ie=V*G-ce*M,oe=ae*G-Se*M,ne=H*M+ne*G,U=te,V=ie,ae=oe),z=Da(V,U),x=z*Oo,z&&(G=Math.cos(z),M=Math.sin(z),te=U*G+V*M,ie=J*G+j*M,V=V*G-U*M,j=j*G-J*M,U=te,J=ie),_&&Math.abs(_)+Math.abs(x)>359.9&&(_=x=0,v=180-v),g=Mn(Math.sqrt(U*U+V*V+ae*ae)),y=Mn(Math.sqrt(j*j+ue*ue)),z=Da(J,j),w=Math.abs(z)>2e-4?z*Oo:0,E=ne?1/(ne<0?-ne:ne):0),n.svg&&(te=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Mb(Jr(e,dn)),te&&e.setAttribute("transform",te))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(g*=-1,w+=x<=0?180:-180,x+=x<=0?180:-180):(y*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=m+a,n.scaleX=Mn(g),n.scaleY=Mn(y),n.rotation=Mn(x)+l,n.rotationX=Mn(_)+l,n.rotationY=Mn(v)+l,n.skewX=w+l,n.skewY=T+l,n.transformPerspective=E+a,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Di]=yh(f)),n.xOffset=n.yOffset=0,n.force3D=Ki.force3D,n.renderTransform=n.svg?H2:xb?bb:z2,n.uncache=0,n},yh=function(e){return(e=e.split(" "))[0]+" "+e[1]},yp=function(e,t,n){var r=ri(t);return Mn(parseFloat(t)+parseFloat(po(e,"x",n+"px",r)))+r},z2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,bb(e,t)},Co="0deg",ic="0px",Ro=") ",bb=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.z,f=n.rotation,h=n.rotationY,p=n.rotationX,m=n.skewX,g=n.skewY,y=n.scaleX,x=n.scaleY,_=n.transformPerspective,v=n.force3D,w=n.target,T=n.zOrigin,E="",C=v==="auto"&&e&&e!==1||v===!0;if(T&&(p!==Co||h!==Co)){var R=parseFloat(h)*fl,A=Math.sin(R),z=Math.cos(R),G;R=parseFloat(p)*fl,G=Math.cos(R),a=yp(w,a,A*G*-T),l=yp(w,l,-Math.sin(R)*-T),u=yp(w,u,z*G*-T+T)}_!==ic&&(E+="perspective("+_+Ro),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||a!==ic||l!==ic||u!==ic)&&(E+=u!==ic||C?"translate3d("+a+", "+l+", "+u+") ":"translate("+a+", "+l+Ro),f!==Co&&(E+="rotate("+f+Ro),h!==Co&&(E+="rotateY("+h+Ro),p!==Co&&(E+="rotateX("+p+Ro),(m!==Co||g!==Co)&&(E+="skew("+m+", "+g+Ro),(y!==1||x!==1)&&(E+="scale("+y+", "+x+Ro),w.style[dn]=E||"translate(0, 0)"},H2=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,l=n.y,u=n.rotation,f=n.skewX,h=n.skewY,p=n.scaleX,m=n.scaleY,g=n.target,y=n.xOrigin,x=n.yOrigin,_=n.xOffset,v=n.yOffset,w=n.forceCSS,T=parseFloat(a),E=parseFloat(l),C,R,A,z,G;u=parseFloat(u),f=parseFloat(f),h=parseFloat(h),h&&(h=parseFloat(h),f+=h,u+=h),u||f?(u*=fl,f*=fl,C=Math.cos(u)*p,R=Math.sin(u)*p,A=Math.sin(u-f)*-m,z=Math.cos(u-f)*m,f&&(h*=fl,G=Math.tan(f-h),G=Math.sqrt(1+G*G),A*=G,z*=G,h&&(G=Math.tan(h),G=Math.sqrt(1+G*G),C*=G,R*=G)),C=Mn(C),R=Mn(R),A=Mn(A),z=Mn(z)):(C=p,z=m,R=A=0),(T&&!~(a+"").indexOf("px")||E&&!~(l+"").indexOf("px"))&&(T=po(g,"x",a,"px"),E=po(g,"y",l,"px")),(y||x||_||v)&&(T=Mn(T+y-(y*C+x*A)+_),E=Mn(E+x-(y*R+x*z)+v)),(r||s)&&(G=g.getBBox(),T=Mn(T+r/100*G.width),E=Mn(E+s/100*G.height)),G="matrix("+C+","+R+","+A+","+z+","+T+","+E+")",g.setAttribute("transform",G),w&&(g.style[dn]=G)},k2=function(e,t,n,r,s){var a=360,l=Gn(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Oo:1),f=u-r,h=r+f+"deg",p,m;return l&&(p=s.split("_")[1],p==="short"&&(f%=a,f!==f%(a/2)&&(f+=f<0?a:-a)),p==="cw"&&f<0?f=(f+a*Ox)%a-~~(f/a)*a:p==="ccw"&&f>0&&(f=(f-a*Ox)%a-~~(f/a)*a)),e._pt=m=new Li(e._pt,t,n,r,f,b2),m.e=h,m.u="deg",e._props.push(n),m},Hx=function(e,t){for(var n in t)e[n]=t[n];return e},G2=function(e,t,n){var r=Hx({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,l,u,f,h,p,m,g,y;r.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),a[dn]=t,l=$c(n,1),sa(n,dn),n.setAttribute("transform",f)):(f=getComputedStyle(n)[dn],a[dn]=t,l=$c(n,1),a[dn]=f);for(u in Ps)f=r[u],h=l[u],f!==h&&s.indexOf(u)<0&&(g=ri(f),y=ri(h),p=g!==y?po(n,u,f,y):parseFloat(f),m=parseFloat(h),e._pt=new Li(e._pt,l,u,p,m-p,sg),e._pt.u=y||0,e._props.push(u));Hx(l,r)};Pi("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(l){return e<2?i+l:"border"+l+i});xh[e>1?"border"+i:i]=function(l,u,f,h,p){var m,g;if(arguments.length<4)return m=a.map(function(y){return Es(l,y,f)}),g=m.join(" "),g.split(m[0]).length===5?m[0]:g;m=(h+"").split(" "),g={},a.forEach(function(y,x){return g[y]=m[x]=m[x]||m[(x-1)/2|0]}),l.init(u,g,p)}});var Tb={name:"css",register:ag,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,l=e.style,u=n.vars.startAt,f,h,p,m,g,y,x,_,v,w,T,E,C,R,A,z;l_||ag(),this.styles=this.styles||vb(e),z=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(h=t[x],!(Xi[x]&&ab(x,t,n,r,e,s)))){if(g=typeof h,y=xh[x],g==="function"&&(h=h.call(n,r,e,s),g=typeof h),g==="string"&&~h.indexOf("random(")&&(h=kc(h)),y)y(this,e,x,h,n)&&(A=1);else if(x.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",oo.lastIndex=0,oo.test(f)||(_=ri(f),v=ri(h)),v?_!==v&&(f=po(e,x,f,v)+v):_&&(h+=_),this.add(l,"setProperty",f,h,r,s,0,0,x),a.push(x),z.push(x,0,l[x]);else if(g!=="undefined"){if(u&&x in u?(f=typeof u[x]=="function"?u[x].call(n,r,e,s):u[x],Gn(f)&&~f.indexOf("random(")&&(f=kc(f)),ri(f+"")||f==="auto"||(f+=Ki.units[x]||ri(Es(e,x))||""),(f+"").charAt(1)==="="&&(f=Es(e,x))):f=Es(e,x),m=parseFloat(f),w=g==="string"&&h.charAt(1)==="="&&h.substr(0,2),w&&(h=h.substr(2)),p=parseFloat(h),x in jr&&(x==="autoAlpha"&&(m===1&&Es(e,"visibility")==="hidden"&&p&&(m=0),z.push("visibility",0,l.visibility),to(this,l,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),x!=="scale"&&x!=="transform"&&(x=jr[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in Ps,T){if(this.styles.save(x),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||$c(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new Li(this._pt,l,dn,0,1,C.renderTransform,C,0,-1),E.dep=1),x==="scale")this._pt=new Li(this._pt,C,"scaleY",C.scaleY,(w?cl(C.scaleY,w+p):p)-C.scaleY||0,sg),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){z.push(Di,0,l[Di]),h=F2(h),C.svg?lg(e,h,0,R,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==C.zOrigin&&to(this,C,"zOrigin",C.zOrigin,v),to(this,l,x,yh(f),yh(h)));continue}else if(x==="svgOrigin"){lg(e,h,1,R,0,this);continue}else if(x in Eb){k2(this,C,x,m,w?cl(m,w+h):h);continue}else if(x==="smoothOrigin"){to(this,C,"smooth",C.smooth,h);continue}else if(x==="force3D"){C[x]=h;continue}else if(x==="transform"){G2(this,h,e);continue}}else x in l||(x=Ml(x)||x);if(T||(p||p===0)&&(m||m===0)&&!M2.test(h)&&x in l)_=(f+"").substr((m+"").length),p||(p=0),v=ri(h)||(x in Ki.units?Ki.units[x]:_),_!==v&&(m=po(e,x,f,v)),this._pt=new Li(this._pt,T?C:l,x,m,(w?cl(m,w+p):p)-m,!T&&(v==="px"||x==="zIndex")&&t.autoRound!==!1?w2:sg),this._pt.u=v||0,_!==v&&v!=="%"&&(this._pt.b=f,this._pt.r=T2);else if(x in l)N2.call(this,e,x,f,w?w+h:h);else if(x in e)this.add(e,x,f||e[x],w?w+h:h,r,s);else if(x!=="parseTransform"){Qg(x,h);continue}T||(x in l?z.push(x,0,l[x]):z.push(x,1,f||e[x])),a.push(x)}}A&&db(this)},render:function(e,t){if(t.tween._time||!c_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Es,aliases:jr,getSetter:function(e,t,n){var r=jr[t];return r&&r.indexOf(",")<0&&(t=r),t in Ps&&t!==Di&&(e._gsap.x||Es(e,"x"))?n&&Ix===n?t==="scale"?P2:R2:(Ix=n||{})&&(t==="scale"?L2:D2):e.style&&!Kg(e.style[t])?A2:~t.indexOf("-")?C2:o_(e,t)},core:{_removeProperty:sa,_getMatrix:f_}};Oi.utils.checkPrefix=Ml;Oi.core.getStyleSaver=vb;(function(i,e,t,n){var r=Pi(i+","+e+","+t,function(s){Ps[s]=1});Pi(e,function(s){Ki.units[s]="deg",Eb[s]=1}),jr[r[13]]=i+","+e,Pi(n,function(s){var a=s.split(":");jr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ki.units[i]="px"});Oi.registerPlugin(Tb);var h_=Oi.registerPlugin(Tb)||Oi;h_.core.Tween;function kx(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function W2(i,e,t){return e&&kx(i.prototype,e),t&&kx(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qn,Qf,Yi,no,io,hl,wb,Uo,Pc,Ab,ws,Pr,Cb,Rb=function(){return qn||typeof window<"u"&&(qn=window.gsap)&&qn.registerPlugin&&qn},Pb=1,rl=[],Pt=[],Qr=[],Lc=Date.now,cg=function(e,t){return t},V2=function(){var e=Pc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Pt),r.push.apply(r,Qr),Pt=n,Qr=r,cg=function(a,l){return t[a](l)}},ao=function(e,t){return~Qr.indexOf(e)&&Qr[Qr.indexOf(e)+1][t]},Dc=function(e){return!!~Ab.indexOf(e)},hi=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},fi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Zu="scrollLeft",Ju="scrollTop",ug=function(){return ws&&ws.isPressed||Pt.cache++},Sh=function(e,t){var n=function r(s){if(s||s===0){Pb&&(Yi.history.scrollRestoration="manual");var a=ws&&ws.isPressed;s=r.v=Math.round(s)||(ws&&ws.iOS?1:0),e(s),r.cacheID=Pt.cache,a&&cg("ss",s)}else(t||Pt.cache!==r.cacheID||cg("ref"))&&(r.cacheID=Pt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},xi={s:Zu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Sh(function(i){return arguments.length?Yi.scrollTo(i,In.sc()):Yi.pageXOffset||no[Zu]||io[Zu]||hl[Zu]||0})},In={s:Ju,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xi,sc:Sh(function(i){return arguments.length?Yi.scrollTo(xi.sc(),i):Yi.pageYOffset||no[Ju]||io[Ju]||hl[Ju]||0})},Ai=function(e,t){return(t&&t._ctx&&t._ctx.selector||qn.utils.toArray)(e)[0]||(typeof e=="string"&&qn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},mo=function(e,t){var n=t.s,r=t.sc;Dc(e)&&(e=no.scrollingElement||io);var s=Pt.indexOf(e),a=r===In.sc?1:2;!~s&&(s=Pt.push(e)-1),Pt[s+a]||hi(e,"scroll",ug);var l=Pt[s+a],u=l||(Pt[s+a]=Sh(ao(e,n),!0)||(Dc(e)?r:Sh(function(f){return arguments.length?e[n]=f:e[n]})));return u.target=e,l||(u.smooth=qn.getProperty(e,"scrollBehavior")==="smooth"),u},fg=function(e,t,n){var r=e,s=e,a=Lc(),l=a,u=t||50,f=Math.max(500,u*3),h=function(y,x){var _=Lc();x||_-a>u?(s=r,r=y,l=a,a=_):n?r+=y:r=s+(y-s)/(_-l)*(a-l)},p=function(){s=r=n?0:r,l=a=0},m=function(y){var x=l,_=s,v=Lc();return(y||y===0)&&y!==r&&h(y),a===l||v-l>f?0:(r+(n?_:-_))/((n?v:a)-x)*1e3};return{update:h,reset:p,getVelocity:m}},rc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Gx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Lb=function(){Pc=qn.core.globals().ScrollTrigger,Pc&&Pc.core&&V2()},Db=function(e){return qn=e||Rb(),!Qf&&qn&&typeof document<"u"&&document.body&&(Yi=window,no=document,io=no.documentElement,hl=no.body,Ab=[Yi,no,io,hl],qn.utils.clamp,Cb=qn.core.context||function(){},Uo="onpointerenter"in hl?"pointer":"mouse",wb=bn.isTouch=Yi.matchMedia&&Yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pr=bn.eventTypes=("ontouchstart"in io?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in io?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Pb=0},500),Lb(),Qf=1),Qf};xi.op=In;Pt.cache=0;var bn=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Qf||Db(qn)||console.warn("Please gsap.registerPlugin(Observer)"),Pc||Lb();var r=n.tolerance,s=n.dragMinimum,a=n.type,l=n.target,u=n.lineHeight,f=n.debounce,h=n.preventDefault,p=n.onStop,m=n.onStopDelay,g=n.ignore,y=n.wheelSpeed,x=n.event,_=n.onDragStart,v=n.onDragEnd,w=n.onDrag,T=n.onPress,E=n.onRelease,C=n.onRight,R=n.onLeft,A=n.onUp,z=n.onDown,G=n.onChangeX,M=n.onChangeY,U=n.onChange,V=n.onToggleX,ae=n.onToggleY,H=n.onHover,J=n.onHoverEnd,j=n.onMove,te=n.ignoreCheck,ie=n.isNormalizer,oe=n.onGestureStart,N=n.onGestureEnd,ce=n.onWheel,Se=n.onEnable,Je=n.onDisable,ne=n.onClick,ue=n.scrollSpeed,Te=n.capture,De=n.allowClicks,Oe=n.lockAxis,Ce=n.onLockAxis;this.target=l=Ai(l)||io,this.vars=n,g&&(g=qn.utils.toArray(g)),r=r||1e-9,s=s||0,y=y||1,ue=ue||1,a=a||"wheel,touch,pointer",f=f!==!1,u||(u=parseFloat(Yi.getComputedStyle(hl).lineHeight)||22);var gt,$e,q,st,be,Ge,Ue,K=this,et=0,O=0,P=n.passive||!h,Y=mo(l,xi),me=mo(l,In),de=Y(),_e=me(),Ae=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Pr[0]==="pointerdown",we=Dc(l),Ee=l.ownerDocument||no,He=[0,0,0],tt=[0,0,0],pe=0,Tt=function(){return pe=Lc()},Xe=function(Ve,je){return(K.event=Ve)&&g&&~g.indexOf(Ve.target)||je&&Ae&&Ve.pointerType!=="touch"||te&&te(Ve,je)},ot=function(){K._vx.reset(),K._vy.reset(),$e.pause(),p&&p(K)},We=function(){var Ve=K.deltaX=Gx(He),je=K.deltaY=Gx(tt),ye=Math.abs(Ve)>=r,nt=Math.abs(je)>=r;U&&(ye||nt)&&U(K,Ve,je,He,tt),ye&&(C&&K.deltaX>0&&C(K),R&&K.deltaX<0&&R(K),G&&G(K),V&&K.deltaX<0!=et<0&&V(K),et=K.deltaX,He[0]=He[1]=He[2]=0),nt&&(z&&K.deltaY>0&&z(K),A&&K.deltaY<0&&A(K),M&&M(K),ae&&K.deltaY<0!=O<0&&ae(K),O=K.deltaY,tt[0]=tt[1]=tt[2]=0),(st||q)&&(j&&j(K),q&&(w(K),q=!1),st=!1),Ge&&!(Ge=!1)&&Ce&&Ce(K),be&&(ce(K),be=!1),gt=0},Ie=function(Ve,je,ye){He[ye]+=Ve,tt[ye]+=je,K._vx.update(Ve),K._vy.update(je),f?gt||(gt=requestAnimationFrame(We)):We()},at=function(Ve,je){Oe&&!Ue&&(K.axis=Ue=Math.abs(Ve)>Math.abs(je)?"x":"y",Ge=!0),Ue!=="y"&&(He[2]+=Ve,K._vx.update(Ve,!0)),Ue!=="x"&&(tt[2]+=je,K._vy.update(je,!0)),f?gt||(gt=requestAnimationFrame(We)):We()},_t=function(Ve){if(!Xe(Ve,1)){Ve=rc(Ve,h);var je=Ve.clientX,ye=Ve.clientY,nt=je-K.x,Qe=ye-K.y,ft=K.isDragging;K.x=je,K.y=ye,(ft||Math.abs(K.startX-je)>=s||Math.abs(K.startY-ye)>=s)&&(w&&(q=!0),ft||(K.isDragging=!0),at(nt,Qe),ft||_&&_(K))}},Dt=K.onPress=function(qe){Xe(qe,1)||qe&&qe.button||(K.axis=Ue=null,$e.pause(),K.isPressed=!0,qe=rc(qe),et=O=0,K.startX=K.x=qe.clientX,K.startY=K.y=qe.clientY,K._vx.reset(),K._vy.reset(),hi(ie?l:Ee,Pr[1],_t,P,!0),K.deltaX=K.deltaY=0,T&&T(K))},Pe=K.onRelease=function(qe){if(!Xe(qe,1)){fi(ie?l:Ee,Pr[1],_t,!0);var Ve=!isNaN(K.y-K.startY),je=K.isDragging,ye=je&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),nt=rc(qe);!ye&&Ve&&(K._vx.reset(),K._vy.reset(),h&&De&&qn.delayedCall(.08,function(){if(Lc()-pe>300&&!qe.defaultPrevented){if(qe.target.click)qe.target.click();else if(Ee.createEvent){var Qe=Ee.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,Yi,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),qe.target.dispatchEvent(Qe)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,p&&je&&!ie&&$e.restart(!0),v&&je&&v(K),E&&E(K,ye)}},Ct=function(Ve){return Ve.touches&&Ve.touches.length>1&&(K.isGesturing=!0)&&oe(Ve,K.isDragging)},F=function(){return(K.isGesturing=!1)||N(K)},ve=function(Ve){if(!Xe(Ve)){var je=Y(),ye=me();Ie((je-de)*ue,(ye-_e)*ue,1),de=je,_e=ye,p&&$e.restart(!0)}},xe=function(Ve){if(!Xe(Ve)){Ve=rc(Ve,h),ce&&(be=!0);var je=(Ve.deltaMode===1?u:Ve.deltaMode===2?Yi.innerHeight:1)*y;Ie(Ve.deltaX*je,Ve.deltaY*je,0),p&&!ie&&$e.restart(!0)}},Ne=function(Ve){if(!Xe(Ve)){var je=Ve.clientX,ye=Ve.clientY,nt=je-K.x,Qe=ye-K.y;K.x=je,K.y=ye,st=!0,p&&$e.restart(!0),(nt||Qe)&&at(nt,Qe)}},Ze=function(Ve){K.event=Ve,H(K)},vt=function(Ve){K.event=Ve,J(K)},It=function(Ve){return Xe(Ve)||rc(Ve,h)&&ne(K)};$e=K._dc=qn.delayedCall(m||.25,ot).pause(),K.deltaX=K.deltaY=0,K._vx=fg(0,50,!0),K._vy=fg(0,50,!0),K.scrollX=Y,K.scrollY=me,K.isDragging=K.isGesturing=K.isPressed=!1,Cb(this),K.enable=function(qe){return K.isEnabled||(hi(we?Ee:l,"scroll",ug),a.indexOf("scroll")>=0&&hi(we?Ee:l,"scroll",ve,P,Te),a.indexOf("wheel")>=0&&hi(l,"wheel",xe,P,Te),(a.indexOf("touch")>=0&&wb||a.indexOf("pointer")>=0)&&(hi(l,Pr[0],Dt,P,Te),hi(Ee,Pr[2],Pe),hi(Ee,Pr[3],Pe),De&&hi(l,"click",Tt,!0,!0),ne&&hi(l,"click",It),oe&&hi(Ee,"gesturestart",Ct),N&&hi(Ee,"gestureend",F),H&&hi(l,Uo+"enter",Ze),J&&hi(l,Uo+"leave",vt),j&&hi(l,Uo+"move",Ne)),K.isEnabled=!0,qe&&qe.type&&Dt(qe),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(rl.filter(function(qe){return qe!==K&&Dc(qe.target)}).length||fi(we?Ee:l,"scroll",ug),K.isPressed&&(K._vx.reset(),K._vy.reset(),fi(ie?l:Ee,Pr[1],_t,!0)),fi(we?Ee:l,"scroll",ve,Te),fi(l,"wheel",xe,Te),fi(l,Pr[0],Dt,Te),fi(Ee,Pr[2],Pe),fi(Ee,Pr[3],Pe),fi(l,"click",Tt,!0),fi(l,"click",It),fi(Ee,"gesturestart",Ct),fi(Ee,"gestureend",F),fi(l,Uo+"enter",Ze),fi(l,Uo+"leave",vt),fi(l,Uo+"move",Ne),K.isEnabled=K.isPressed=K.isDragging=!1,Je&&Je(K))},K.kill=K.revert=function(){K.disable();var qe=rl.indexOf(K);qe>=0&&rl.splice(qe,1),ws===K&&(ws=0)},rl.push(K),ie&&Dc(l)&&(ws=K),K.enable(x)},W2(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();bn.version="3.12.5";bn.create=function(i){return new bn(i)};bn.register=Db;bn.getAll=function(){return rl.slice()};bn.getById=function(i){return rl.filter(function(e){return e.vars.id===i})[0]};Rb()&&qn.registerPlugin(bn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ke,Qa,Ut,fn,Lr,on,Ib,Eh,Xc,Ic,Ec,Qu,ni,kh,hg,mi,Wx,Vx,el,Ob,Sp,Ub,pi,dg,Nb,Fb,Js,pg,d_,dl,p_,Mh,mg,Ep,ef=1,ii=Date.now,Mp=ii(),xr=0,Mc=0,$x=function(e,t,n){var r=$i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Xx=function(e,t){return t&&(!$i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},$2=function i(){return Mc&&requestAnimationFrame(i)},qx=function(){return kh=1},Yx=function(){return kh=0},Vr=function(e){return e},bc=function(e){return Math.round(e*1e5)/1e5||0},Bb=function(){return typeof window<"u"},zb=function(){return ke||Bb()&&(ke=window.gsap)&&ke.registerPlugin&&ke},oa=function(e){return!!~Ib.indexOf(e)},Hb=function(e){return(e==="Height"?p_:Ut["inner"+e])||Lr["client"+e]||on["client"+e]},kb=function(e){return ao(e,"getBoundingClientRect")||(oa(e)?function(){return rh.width=Ut.innerWidth,rh.height=p_,rh}:function(){return Ms(e)})},X2=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=ao(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?Hb(s):e["client"+s])||0}},q2=function(e,t){return!t||~Qr.indexOf(e)?kb(e):function(){return rh}},Kr=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=ao(e,n))?a()-kb(e)()[s]:oa(e)?(Lr[n]||on[n])-Hb(r):e[n]-e["offset"+r])},tf=function(e,t){for(var n=0;n<el.length;n+=3)(!t||~t.indexOf(el[n+1]))&&e(el[n],el[n+1],el[n+2])},$i=function(e){return typeof e=="string"},yi=function(e){return typeof e=="function"},Tc=function(e){return typeof e=="number"},No=function(e){return typeof e=="object"},sc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},bp=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Ia=Math.abs,Gb="left",Wb="top",m_="right",g_="bottom",Ko="width",Zo="height",Oc="Right",Uc="Left",Nc="Top",Fc="Bottom",wn="padding",dr="margin",bl="Width",__="Height",Dn="px",pr=function(e){return Ut.getComputedStyle(e)},Y2=function(e){var t=pr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},jx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ms=function(e,t){var n=t&&pr(e)[hg]!=="matrix(1, 0, 0, 1, 0, 0)"&&ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},bh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vb=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},j2=function(e){return function(t){return ke.utils.snap(Vb(e),t)}},v_=function(e){var t=ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var l;if(!s)return t(r);if(s>0){for(r-=a,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=a;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var l=t(r);return!s||Math.abs(l-r)<a||l-r<0==s<0?l:t(s<0?r-e:r+e)}},K2=function(e){return function(t,n){return v_(Vb(e))(t,n.direction)}},nf=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},zn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Bn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},rf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},sf={toggleActions:"play",anticipatePin:0},Th={top:0,left:0,center:.5,bottom:1,right:1},eh=function(e,t){if($i(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Th?Th[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},of=function(e,t,n,r,s,a,l,u){var f=s.startColor,h=s.endColor,p=s.fontSize,m=s.indent,g=s.fontWeight,y=fn.createElement("div"),x=oa(n)||ao(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,v=x?on:n,w=e.indexOf("start")!==-1,T=w?f:h,E="border-color:"+T+";font-size:"+p+";color:"+T+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((_||u)&&x?"fixed;":"absolute;"),(_||u||!x)&&(E+=(r===In?m_:g_)+":"+(a+parseFloat(m))+"px;"),l&&(E+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=w,y.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),y.style.cssText=E,y.innerText=t||t===0?e+"-"+t:e,v.children[0]?v.insertBefore(y,v.children[0]):v.appendChild(y),y._offset=y["offset"+r.op.d2],th(y,0,r,w),y},th=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],l=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+bl]=1,s["border"+l+bl]=0,s[n.p]=t+"px",ke.set(e,s)},wt=[],gg={},qc,Zx=function(){return ii()-xr>34&&(qc||(qc=requestAnimationFrame(Cs)))},Oa=function(){(!pi||!pi.isPressed||pi.startX>on.clientWidth)&&(Pt.cache++,pi?qc||(qc=requestAnimationFrame(Cs)):Cs(),xr||la("scrollStart"),xr=ii())},Tp=function(){Fb=Ut.innerWidth,Nb=Ut.innerHeight},wc=function(){Pt.cache++,!ni&&!Ub&&!fn.fullscreenElement&&!fn.webkitFullscreenElement&&(!dg||Fb!==Ut.innerWidth||Math.abs(Ut.innerHeight-Nb)>Ut.innerHeight*.25)&&Eh.restart(!0)},aa={},Z2=[],$b=function i(){return Bn(yt,"scrollEnd",i)||Wo(!0)},la=function(e){return aa[e]&&aa[e].map(function(t){return t()})||Z2},Vi=[],Xb=function(e){for(var t=0;t<Vi.length;t+=5)(!e||Vi[t+4]&&Vi[t+4].query===e)&&(Vi[t].style.cssText=Vi[t+1],Vi[t].getBBox&&Vi[t].setAttribute("transform",Vi[t+2]||""),Vi[t+3].uncache=1)},x_=function(e,t){var n;for(mi=0;mi<wt.length;mi++)n=wt[mi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Mh=!0,t&&Xb(t),t||la("revert")},qb=function(e,t){Pt.cache++,(t||!gi)&&Pt.forEach(function(n){return yi(n)&&n.cacheID++&&(n.rec=0)}),$i(e)&&(Ut.history.scrollRestoration=d_=e)},gi,Jo=0,Jx,J2=function(){if(Jx!==Jo){var e=Jx=Jo;requestAnimationFrame(function(){return e===Jo&&Wo(!0)})}},Yb=function(){on.appendChild(dl),p_=!pi&&dl.offsetHeight||Ut.innerHeight,on.removeChild(dl)},Qx=function(e){return Xc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Wo=function(e,t){if(xr&&!e&&!Mh){zn(yt,"scrollEnd",$b);return}Yb(),gi=yt.isRefreshing=!0,Pt.forEach(function(r){return yi(r)&&++r.cacheID&&(r.rec=r())});var n=la("refreshInit");Ob&&yt.sort(),t||x_(),Pt.forEach(function(r){yi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),wt.slice(0).forEach(function(r){return r.refresh()}),Mh=!1,wt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),mg=1,Qx(!0),wt.forEach(function(r){var s=Kr(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,l=r._startClamp&&r.start>=s;(a||l)&&r.setPositions(l?s-1:r.start,a?Math.max(l?s:r.start+1,s):r.end,!0)}),Qx(!1),mg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Pt.forEach(function(r){yi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),qb(d_,1),Eh.pause(),Jo++,gi=2,Cs(2),wt.forEach(function(r){return yi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),gi=yt.isRefreshing=!1,la("refresh")},_g=0,nh=1,Bc,Cs=function(e){if(e===2||!gi&&!Mh){yt.isUpdating=!0,Bc&&Bc.update(0);var t=wt.length,n=ii(),r=n-Mp>=50,s=t&&wt[0].scroll();if(nh=_g>s?-1:1,gi||(_g=s),r&&(xr&&!kh&&n-xr>200&&(xr=0,la("scrollEnd")),Ec=Mp,Mp=n),nh<0){for(mi=t;mi-- >0;)wt[mi]&&wt[mi].update(0,r);nh=1}else for(mi=0;mi<t;mi++)wt[mi]&&wt[mi].update(0,r);yt.isUpdating=!1}qc=0},vg=[Gb,Wb,g_,m_,dr+Fc,dr+Oc,dr+Nc,dr+Uc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ih=vg.concat([Ko,Zo,"boxSizing","max"+bl,"max"+__,"position",dr,wn,wn+Nc,wn+Oc,wn+Fc,wn+Uc]),Q2=function(e,t,n){pl(n);var r=e._gsap;if(r.spacerIsNative)pl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},wp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=vg.length,a=t.style,l=e.style,u;s--;)u=vg[s],a[u]=n[u];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),l[g_]=l[m_]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ko]=bh(e,xi)+Dn,a[Zo]=bh(e,In)+Dn,a[wn]=l[dr]=l[Wb]=l[Gb]="0",pl(r),l[Ko]=l["max"+bl]=n[Ko],l[Zo]=l["max"+__]=n[Zo],l[wn]=n[wn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eO=/([A-Z])/g,pl=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||ke.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(eO,"-$1").toLowerCase())}},af=function(e){for(var t=ih.length,n=e.style,r=[],s=0;s<t;s++)r.push(ih[s],n[ih[s]]);return r.t=e,r},tO=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,l;a<s;a+=2)l=e[a],r.push(l,l in t?t[l]:e[a+1]);return r.t=e.t,r},rh={left:0,top:0},ey=function(e,t,n,r,s,a,l,u,f,h,p,m,g,y){yi(e)&&(e=e(u)),$i(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?eh("0"+e.substr(3),n):0));var x=g?g.time():0,_,v,w;if(g&&g.seek(0),isNaN(e)||(e=+e),Tc(e))g&&(e=ke.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,m,e)),l&&th(l,n,r,!0);else{yi(t)&&(t=t(u));var T=(e||"0").split(" "),E,C,R,A;w=Ai(t,u)||on,E=Ms(w)||{},(!E||!E.left&&!E.top)&&pr(w).display==="none"&&(A=w.style.display,w.style.display="block",E=Ms(w),A?w.style.display=A:w.style.removeProperty("display")),C=eh(T[0],E[r.d]),R=eh(T[1]||"0",n),e=E[r.p]-f[r.p]-h+C+s-R,l&&th(l,R,r,n-R<20||l._isStart&&R>20),n-=n-R}if(y&&(u[y]=e||-.001,e<0&&(e=0)),a){var z=e+n,G=a._isStart;_="scroll"+r.d2,th(a,z,r,G&&z>20||!G&&(p?Math.max(on[_],Lr[_]):a.parentNode[_])<=z+1),p&&(f=Ms(l),p&&(a.style[r.op.p]=f[r.op.p]-r.op.m-a._offset+Dn))}return g&&w&&(_=Ms(w),g.seek(m),v=Ms(w),g._caScrollDist=_[r.p]-v[r.p],e=e/g._caScrollDist*m),g&&g.seek(x),g?e:Math.round(e)},nO=/(webkit|moz|length|cssText|inset)/i,ty=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,l;if(t===on){e._stOrig=s.cssText,l=pr(e);for(a in l)!+a&&!nO.test(a)&&l[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=l[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;ke.core.getCache(e).uncache=1,t.appendChild(e)}},jb=function(e,t,n){var r=t,s=r;return function(a){var l=Math.round(e());return l!==r&&l!==s&&Math.abs(l-r)>3&&Math.abs(l-s)>3&&(a=l,n&&n()),s=r,r=a,a}},lf=function(e,t,n){var r={};r[t.p]="+="+n,ke.set(e,r)},ny=function(e,t){var n=mo(e,t),r="_scroll"+t.p2,s=function a(l,u,f,h,p){var m=a.tween,g=u.onComplete,y={};f=f||n();var x=jb(n,f,function(){m.kill(),a.tween=0});return p=h&&p||0,h=h||l-f,m&&m.kill(),u[r]=l,u.inherit=!1,u.modifiers=y,y[r]=function(){return x(f+h*m.ratio+p*m.ratio*m.ratio)},u.onUpdate=function(){Pt.cache++,a.tween&&Cs()},u.onComplete=function(){a.tween=0,g&&g.call(m)},m=a.tween=ke.to(e,u),m};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},zn(e,"wheel",n.wheelHandler),yt.isTouch&&zn(e,"touchmove",n.wheelHandler),s},yt=function(){function i(t,n){Qa||i.register(ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),pg(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Mc){this.update=this.refresh=this.kill=Vr;return}n=jx($i(n)||Tc(n)||n.nodeType?{trigger:n}:n,sf);var s=n,a=s.onUpdate,l=s.toggleClass,u=s.id,f=s.onToggle,h=s.onRefresh,p=s.scrub,m=s.trigger,g=s.pin,y=s.pinSpacing,x=s.invalidateOnRefresh,_=s.anticipatePin,v=s.onScrubComplete,w=s.onSnapComplete,T=s.once,E=s.snap,C=s.pinReparent,R=s.pinSpacer,A=s.containerAnimation,z=s.fastScrollEnd,G=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xi:In,U=!p&&p!==0,V=Ai(n.scroller||Ut),ae=ke.core.getCache(V),H=oa(V),J=("pinType"in n?n.pinType:ao(V,"pinType")||H&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],te=U&&n.toggleActions.split(" "),ie="markers"in n?n.markers:sf.markers,oe=H?0:parseFloat(pr(V)["border"+M.p2+bl])||0,N=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Se=X2(V,H,M),Je=q2(V,H),ne=0,ue=0,Te=0,De=mo(V,M),Oe,Ce,gt,$e,q,st,be,Ge,Ue,K,et,O,P,Y,me,de,_e,Ae,we,Ee,He,tt,pe,Tt,Xe,ot,We,Ie,at,_t,Dt,Pe,Ct,F,ve,xe,Ne,Ze,vt;if(N._startClamp=N._endClamp=!1,N._dir=M,_*=45,N.scroller=V,N.scroll=A?A.time.bind(A):De,$e=De(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(Ob=1,n.refreshPriority===-9999&&(Bc=N)),ae.tweenScroll=ae.tweenScroll||{top:ny(V,In),left:ny(V,xi)},N.tweenTo=Oe=ae.tweenScroll[M.p],N.scrubDuration=function(ye){Ct=Tc(ye)&&ye,Ct?Pe?Pe.duration(ye):Pe=ke.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ct,paused:!0,onComplete:function(){return v&&v(N)}}):(Pe&&Pe.progress(1).kill(),Pe=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(p),_t=0,u||(u=r.vars.id)),E&&((!No(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in on.style&&ke.set(H?[on,Lr]:V,{scrollBehavior:"auto"}),Pt.forEach(function(ye){return yi(ye)&&ye.target===(H?fn.scrollingElement||Lr:V)&&(ye.smooth=!1)}),gt=yi(E.snapTo)?E.snapTo:E.snapTo==="labels"?j2(r):E.snapTo==="labelsDirectional"?K2(r):E.directional!==!1?function(ye,nt){return v_(E.snapTo)(ye,ii()-ue<500?0:nt.direction)}:ke.utils.snap(E.snapTo),F=E.duration||{min:.1,max:2},F=No(F)?Ic(F.min,F.max):Ic(F,F),ve=ke.delayedCall(E.delay||Ct/2||.1,function(){var ye=De(),nt=ii()-ue<500,Qe=Oe.tween;if((nt||Math.abs(N.getVelocity())<10)&&!Qe&&!kh&&ne!==ye){var ft=(ye-st)/Y,tn=r&&!U?r.totalProgress():ft,St=nt?0:(tn-Dt)/(ii()-Ec)*1e3||0,$t=ke.utils.clamp(-ft,1-ft,Ia(St/2)*St/.185),yn=ft+(E.inertia===!1?0:$t),jt,Xt,zt=E,Zn=zt.onStart,I=zt.onInterrupt,$=zt.onComplete;if(jt=gt(yn,N),Tc(jt)||(jt=yn),Xt=Math.round(st+jt*Y),ye<=be&&ye>=st&&Xt!==ye){if(Qe&&!Qe._initted&&Qe.data<=Ia(Xt-ye))return;E.inertia===!1&&($t=jt-ft),Oe(Xt,{duration:F(Ia(Math.max(Ia(yn-tn),Ia(jt-tn))*.185/St/.05||0)),ease:E.ease||"power3",data:Ia(Xt-ye),onInterrupt:function(){return ve.restart(!0)&&I&&I(N)},onComplete:function(){N.update(),ne=De(),r&&(Pe?Pe.resetTo("totalProgress",jt,r._tTime/r._tDur):r.progress(jt)),_t=Dt=r&&!U?r.totalProgress():N.progress,w&&w(N),$&&$(N)}},ye,$t*Y,Xt-ye-$t*Y),Zn&&Zn(N,Oe.tween)}}else N.isActive&&ne!==ye&&ve.restart(!0)}).pause()),u&&(gg[u]=N),m=N.trigger=Ai(m||g!==!0&&g),vt=m&&m._gsap&&m._gsap.stRevert,vt&&(vt=vt(N)),g=g===!0?m:Ai(g),$i(l)&&(l={targets:m,className:l}),g&&(y===!1||y===dr||(y=!y&&g.parentNode&&g.parentNode.style&&pr(g.parentNode).display==="flex"?!1:wn),N.pin=g,Ce=ke.core.getCache(g),Ce.spacer?me=Ce.pinState:(R&&(R=Ai(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Ce.spacerIsNative=!!R,R&&(Ce.spacerState=af(R))),Ce.spacer=Ae=R||fn.createElement("div"),Ae.classList.add("pin-spacer"),u&&Ae.classList.add("pin-spacer-"+u),Ce.pinState=me=af(g)),n.force3D!==!1&&ke.set(g,{force3D:!0}),N.spacer=Ae=Ce.spacer,at=pr(g),Tt=at[y+M.os2],Ee=ke.getProperty(g),He=ke.quickSetter(g,M.a,Dn),wp(g,Ae,at),_e=af(g)),ie){O=No(ie)?jx(ie,Kx):Kx,K=of("scroller-start",u,V,M,O,0),et=of("scroller-end",u,V,M,O,0,K),we=K["offset"+M.op.d2];var It=Ai(ao(V,"content")||V);Ge=this.markerStart=of("start",u,It,M,O,we,0,A),Ue=this.markerEnd=of("end",u,It,M,O,we,0,A),A&&(Ze=ke.quickSetter([Ge,Ue],M.a,Dn)),!J&&!(Qr.length&&ao(V,"fixedMarkers")===!0)&&(Y2(H?on:V),ke.set([K,et],{force3D:!0}),ot=ke.quickSetter(K,M.a,Dn),Ie=ke.quickSetter(et,M.a,Dn))}if(A){var qe=A.vars.onUpdate,Ve=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){N.update(0,0,1),qe&&qe.apply(A,Ve||[])})}if(N.previous=function(){return wt[wt.indexOf(N)-1]},N.next=function(){return wt[wt.indexOf(N)+1]},N.revert=function(ye,nt){if(!nt)return N.kill(!0);var Qe=ye!==!1||!N.enabled,ft=ni;Qe!==N.isReverted&&(Qe&&(xe=Math.max(De(),N.scroll.rec||0),Te=N.progress,Ne=r&&r.progress()),Ge&&[Ge,Ue,K,et].forEach(function(tn){return tn.style.display=Qe?"none":"block"}),Qe&&(ni=N,N.update(Qe)),g&&(!C||!N.isActive)&&(Qe?Q2(g,Ae,me):wp(g,Ae,pr(g),Xe)),Qe||N.update(Qe),ni=ft,N.isReverted=Qe)},N.refresh=function(ye,nt,Qe,ft){if(!((ni||!N.enabled)&&!nt)){if(g&&ye&&xr){zn(i,"scrollEnd",$b);return}!gi&&ce&&ce(N),ni=N,Oe.tween&&!Qe&&(Oe.tween.kill(),Oe.tween=0),Pe&&Pe.pause(),x&&r&&r.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var tn=Se(),St=Je(),$t=A?A.duration():Kr(V,M),yn=Y<=.01,jt=0,Xt=ft||0,zt=No(Qe)?Qe.end:n.end,Zn=n.endTrigger||m,I=No(Qe)?Qe.start:n.start||(n.start===0||!m?0:g?"0 0":"0 100%"),$=N.pinnedContainer=n.pinnedContainer&&Ai(n.pinnedContainer,N),ee=m&&Math.max(0,wt.indexOf(N))||0,Q=ee,Z,Me,Fe,it,Be,Ye,rt,ht,Kt,pn,Ft,Wn,kt;for(ie&&No(Qe)&&(Wn=ke.getProperty(K,M.p),kt=ke.getProperty(et,M.p));Q--;)Ye=wt[Q],Ye.end||Ye.refresh(0,1)||(ni=N),rt=Ye.pin,rt&&(rt===m||rt===g||rt===$)&&!Ye.isReverted&&(pn||(pn=[]),pn.unshift(Ye),Ye.revert(!0,!0)),Ye!==wt[Q]&&(ee--,Q--);for(yi(I)&&(I=I(N)),I=$x(I,"start",N),st=ey(I,m,tn,M,De(),Ge,K,N,St,oe,J,$t,A,N._startClamp&&"_startClamp")||(g?-.001:0),yi(zt)&&(zt=zt(N)),$i(zt)&&!zt.indexOf("+=")&&(~zt.indexOf(" ")?zt=($i(I)?I.split(" ")[0]:"")+zt:(jt=eh(zt.substr(2),tn),zt=$i(I)?I:(A?ke.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,st):st)+jt,Zn=m)),zt=$x(zt,"end",N),be=Math.max(st,ey(zt||(Zn?"100% 0":$t),Zn,tn,M,De()+jt,Ue,et,N,St,oe,J,$t,A,N._endClamp&&"_endClamp"))||-.001,jt=0,Q=ee;Q--;)Ye=wt[Q],rt=Ye.pin,rt&&Ye.start-Ye._pinPush<=st&&!A&&Ye.end>0&&(Z=Ye.end-(N._startClamp?Math.max(0,Ye.start):Ye.start),(rt===m&&Ye.start-Ye._pinPush<st||rt===$)&&isNaN(I)&&(jt+=Z*(1-Ye.progress)),rt===g&&(Xt+=Z));if(st+=jt,be+=jt,N._startClamp&&(N._startClamp+=jt),N._endClamp&&!gi&&(N._endClamp=be||-.001,be=Math.min(be,Kr(V,M))),Y=be-st||(st-=.01)&&.001,yn&&(Te=ke.utils.clamp(0,1,ke.utils.normalize(st,be,xe))),N._pinPush=Xt,Ge&&jt&&(Z={},Z[M.a]="+="+jt,$&&(Z[M.p]="-="+De()),ke.set([Ge,Ue],Z)),g&&!(mg&&N.end>=Kr(V,M)))Z=pr(g),it=M===In,Fe=De(),tt=parseFloat(Ee(M.a))+Xt,!$t&&be>1&&(Ft=(H?fn.scrollingElement||Lr:V).style,Ft={style:Ft,value:Ft["overflow"+M.a.toUpperCase()]},H&&pr(on)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Ft.style["overflow"+M.a.toUpperCase()]="scroll")),wp(g,Ae,Z),_e=af(g),Me=Ms(g,!0),ht=J&&mo(V,it?xi:In)(),y?(Xe=[y+M.os2,Y+Xt+Dn],Xe.t=Ae,Q=y===wn?bh(g,M)+Y+Xt:0,Q&&(Xe.push(M.d,Q+Dn),Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=Q+Dn)),pl(Xe),$&&wt.forEach(function(dt){dt.pin===$&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),J&&De(xe)):(Q=bh(g,M),Q&&Ae.style.flexBasis!=="auto"&&(Ae.style.flexBasis=Q+Dn)),J&&(Be={top:Me.top+(it?Fe-st:ht)+Dn,left:Me.left+(it?ht:Fe-st)+Dn,boxSizing:"border-box",position:"fixed"},Be[Ko]=Be["max"+bl]=Math.ceil(Me.width)+Dn,Be[Zo]=Be["max"+__]=Math.ceil(Me.height)+Dn,Be[dr]=Be[dr+Nc]=Be[dr+Oc]=Be[dr+Fc]=Be[dr+Uc]="0",Be[wn]=Z[wn],Be[wn+Nc]=Z[wn+Nc],Be[wn+Oc]=Z[wn+Oc],Be[wn+Fc]=Z[wn+Fc],Be[wn+Uc]=Z[wn+Uc],de=tO(me,Be,C),gi&&De(0)),r?(Kt=r._initted,Sp(1),r.render(r.duration(),!0,!0),pe=Ee(M.a)-tt+Y+Xt,We=Math.abs(Y-pe)>1,J&&We&&de.splice(de.length-2,2),r.render(0,!0,!0),Kt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Sp(0)):pe=Y,Ft&&(Ft.value?Ft.style["overflow"+M.a.toUpperCase()]=Ft.value:Ft.style.removeProperty("overflow-"+M.a));else if(m&&De()&&!A)for(Me=m.parentNode;Me&&Me!==on;)Me._pinOffset&&(st-=Me._pinOffset,be-=Me._pinOffset),Me=Me.parentNode;pn&&pn.forEach(function(dt){return dt.revert(!1,!0)}),N.start=st,N.end=be,$e=q=gi?xe:De(),!A&&!gi&&($e<xe&&De(xe),N.scroll.rec=0),N.revert(!1,!0),ue=ii(),ve&&(ne=-1,ve.restart(!0)),ni=0,r&&U&&(r._initted||Ne)&&r.progress()!==Ne&&r.progress(Ne||0,!0).render(r.time(),!0,!0),(yn||Te!==N.progress||A||x)&&(r&&!U&&r.totalProgress(A&&st<-.001&&!Te?ke.utils.normalize(st,be,0):Te,!0),N.progress=yn||($e-st)/Y===Te?0:Te),g&&y&&(Ae._pinOffset=Math.round(N.progress*pe)),Pe&&Pe.invalidate(),isNaN(Wn)||(Wn-=ke.getProperty(K,M.p),kt-=ke.getProperty(et,M.p),lf(K,M,Wn),lf(Ge,M,Wn-(ft||0)),lf(et,M,kt),lf(Ue,M,kt-(ft||0))),yn&&!gi&&N.update(),h&&!gi&&!P&&(P=!0,h(N),P=!1)}},N.getVelocity=function(){return(De()-q)/(ii()-Ec)*1e3||0},N.endAnimation=function(){sc(N.callbackAnimation),r&&(Pe?Pe.progress(1):r.paused()?U||sc(r,N.direction<0,1):sc(r,r.reversed()))},N.labelToScroll=function(ye){return r&&r.labels&&(st||N.refresh()||st)+r.labels[ye]/r.duration()*Y||0},N.getTrailing=function(ye){var nt=wt.indexOf(N),Qe=N.direction>0?wt.slice(0,nt).reverse():wt.slice(nt+1);return($i(ye)?Qe.filter(function(ft){return ft.vars.preventOverlaps===ye}):Qe).filter(function(ft){return N.direction>0?ft.end<=st:ft.start>=be})},N.update=function(ye,nt,Qe){if(!(A&&!Qe&&!ye)){var ft=gi===!0?xe:N.scroll(),tn=ye?0:(ft-st)/Y,St=tn<0?0:tn>1?1:tn||0,$t=N.progress,yn,jt,Xt,zt,Zn,I,$,ee;if(nt&&(q=$e,$e=A?De():ft,E&&(Dt=_t,_t=r&&!U?r.totalProgress():St)),_&&g&&!ni&&!ef&&xr&&(!St&&st<ft+(ft-q)/(ii()-Ec)*_?St=1e-4:St===1&&be>ft+(ft-q)/(ii()-Ec)*_&&(St=.9999)),St!==$t&&N.enabled){if(yn=N.isActive=!!St&&St<1,jt=!!$t&&$t<1,I=yn!==jt,Zn=I||!!St!=!!$t,N.direction=St>$t?1:-1,N.progress=St,Zn&&!ni&&(Xt=St&&!$t?0:St===1?1:$t===1?2:3,U&&(zt=!I&&te[Xt+1]!=="none"&&te[Xt+1]||te[Xt],ee=r&&(zt==="complete"||zt==="reset"||zt in r))),G&&(I||ee)&&(ee||p||!r)&&(yi(G)?G(N):N.getTrailing(G).forEach(function(Fe){return Fe.endAnimation()})),U||(Pe&&!ni&&!ef?(Pe._dp._time-Pe._start!==Pe._time&&Pe.render(Pe._dp._time-Pe._start),Pe.resetTo?Pe.resetTo("totalProgress",St,r._tTime/r._tDur):(Pe.vars.totalProgress=St,Pe.invalidate().restart())):r&&r.totalProgress(St,!!(ni&&(ue||ye)))),g){if(ye&&y&&(Ae.style[y+M.os2]=Tt),!J)He(bc(tt+pe*St));else if(Zn){if($=!ye&&St>$t&&be+1>ft&&ft+1>=Kr(V,M),C)if(!ye&&(yn||$)){var Q=Ms(g,!0),Z=ft-st;ty(g,on,Q.top+(M===In?Z:0)+Dn,Q.left+(M===In?0:Z)+Dn)}else ty(g,Ae);pl(yn||$?de:_e),We&&St<1&&yn||He(tt+(St===1&&!$?pe:0))}}E&&!Oe.tween&&!ni&&!ef&&ve.restart(!0),l&&(I||T&&St&&(St<1||!Ep))&&Xc(l.targets).forEach(function(Fe){return Fe.classList[yn||T?"add":"remove"](l.className)}),a&&!U&&!ye&&a(N),Zn&&!ni?(U&&(ee&&(zt==="complete"?r.pause().totalProgress(1):zt==="reset"?r.restart(!0).pause():zt==="restart"?r.restart(!0):r[zt]()),a&&a(N)),(I||!Ep)&&(f&&I&&bp(N,f),j[Xt]&&bp(N,j[Xt]),T&&(St===1?N.kill(!1,1):j[Xt]=0),I||(Xt=St===1?1:3,j[Xt]&&bp(N,j[Xt]))),z&&!yn&&Math.abs(N.getVelocity())>(Tc(z)?z:2500)&&(sc(N.callbackAnimation),Pe?Pe.progress(1):sc(r,zt==="reverse"?1:!St,1))):U&&a&&!ni&&a(N)}if(Ie){var Me=A?ft/A.duration()*(A._caScrollDist||0):ft;ot(Me+(K._isFlipped?1:0)),Ie(Me)}Ze&&Ze(-ft/A.duration()*(A._caScrollDist||0))}},N.enable=function(ye,nt){N.enabled||(N.enabled=!0,zn(V,"resize",wc),H||zn(V,"scroll",Oa),ce&&zn(i,"refreshInit",ce),ye!==!1&&(N.progress=Te=0,$e=q=ne=De()),nt!==!1&&N.refresh())},N.getTween=function(ye){return ye&&Oe?Oe.tween:Pe},N.setPositions=function(ye,nt,Qe,ft){if(A){var tn=A.scrollTrigger,St=A.duration(),$t=tn.end-tn.start;ye=tn.start+$t*ye/St,nt=tn.start+$t*nt/St}N.refresh(!1,!1,{start:Xx(ye,Qe&&!!N._startClamp),end:Xx(nt,Qe&&!!N._endClamp)},ft),N.update()},N.adjustPinSpacing=function(ye){if(Xe&&ye){var nt=Xe.indexOf(M.d)+1;Xe[nt]=parseFloat(Xe[nt])+ye+Dn,Xe[1]=parseFloat(Xe[1])+ye+Dn,pl(Xe)}},N.disable=function(ye,nt){if(N.enabled&&(ye!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,nt||Pe&&Pe.pause(),xe=0,Ce&&(Ce.uncache=1),ce&&Bn(i,"refreshInit",ce),ve&&(ve.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!H)){for(var Qe=wt.length;Qe--;)if(wt[Qe].scroller===V&&wt[Qe]!==N)return;Bn(V,"resize",wc),H||Bn(V,"scroll",Oa)}},N.kill=function(ye,nt){N.disable(ye,nt),Pe&&!nt&&Pe.kill(),u&&delete gg[u];var Qe=wt.indexOf(N);Qe>=0&&wt.splice(Qe,1),Qe===mi&&nh>0&&mi--,Qe=0,wt.forEach(function(ft){return ft.scroller===N.scroller&&(Qe=1)}),Qe||gi||(N.scroll.rec=0),r&&(r.scrollTrigger=null,ye&&r.revert({kill:!1}),nt||r.kill()),Ge&&[Ge,Ue,K,et].forEach(function(ft){return ft.parentNode&&ft.parentNode.removeChild(ft)}),Bc===N&&(Bc=0),g&&(Ce&&(Ce.uncache=1),Qe=0,wt.forEach(function(ft){return ft.pin===g&&Qe++}),Qe||(Ce.spacer=0)),n.onKill&&n.onKill(N)},wt.push(N),N.enable(!1,!1),vt&&vt(N),r&&r.add&&!Y){var je=N.update;N.update=function(){N.update=je,st||be||N.refresh()},ke.delayedCall(.01,N.update),Y=.01,st=be=0}else N.refresh();g&&J2()},i.register=function(n){return Qa||(ke=n||zb(),Bb()&&window.document&&i.enable(),Qa=Mc),Qa},i.defaults=function(n){if(n)for(var r in n)sf[r]=n[r];return sf},i.disable=function(n,r){Mc=0,wt.forEach(function(a){return a[r?"kill":"disable"](n)}),Bn(Ut,"wheel",Oa),Bn(fn,"scroll",Oa),clearInterval(Qu),Bn(fn,"touchcancel",Vr),Bn(on,"touchstart",Vr),nf(Bn,fn,"pointerdown,touchstart,mousedown",qx),nf(Bn,fn,"pointerup,touchend,mouseup",Yx),Eh.kill(),tf(Bn);for(var s=0;s<Pt.length;s+=3)rf(Bn,Pt[s],Pt[s+1]),rf(Bn,Pt[s],Pt[s+2])},i.enable=function(){if(Ut=window,fn=document,Lr=fn.documentElement,on=fn.body,ke&&(Xc=ke.utils.toArray,Ic=ke.utils.clamp,pg=ke.core.context||Vr,Sp=ke.core.suppressOverwrites||Vr,d_=Ut.history.scrollRestoration||"auto",_g=Ut.pageYOffset,ke.core.globals("ScrollTrigger",i),on)){Mc=1,dl=document.createElement("div"),dl.style.height="100vh",dl.style.position="absolute",Yb(),$2(),bn.register(ke),i.isTouch=bn.isTouch,Js=bn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),dg=bn.isTouch===1,zn(Ut,"wheel",Oa),Ib=[Ut,fn,Lr,on],ke.matchMedia?(i.matchMedia=function(u){var f=ke.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},ke.addEventListener("matchMediaInit",function(){return x_()}),ke.addEventListener("matchMediaRevert",function(){return Xb()}),ke.addEventListener("matchMedia",function(){Wo(0,1),la("matchMedia")}),ke.matchMedia("(orientation: portrait)",function(){return Tp(),Tp})):console.warn("Requires GSAP 3.11.0 or later"),Tp(),zn(fn,"scroll",Oa);var n=on.style,r=n.borderTopStyle,s=ke.core.Animation.prototype,a,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=Ms(on),In.m=Math.round(a.top+In.sc())||0,xi.m=Math.round(a.left+xi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Qu=setInterval(Zx,250),ke.delayedCall(.5,function(){return ef=0}),zn(fn,"touchcancel",Vr),zn(on,"touchstart",Vr),nf(zn,fn,"pointerdown,touchstart,mousedown",qx),nf(zn,fn,"pointerup,touchend,mouseup",Yx),hg=ke.utils.checkPrefix("transform"),ih.push(hg),Qa=ii(),Eh=ke.delayedCall(.2,Wo).pause(),el=[fn,"visibilitychange",function(){var u=Ut.innerWidth,f=Ut.innerHeight;fn.hidden?(Wx=u,Vx=f):(Wx!==u||Vx!==f)&&wc()},fn,"DOMContentLoaded",Wo,Ut,"load",Wo,Ut,"resize",wc],tf(zn),wt.forEach(function(u){return u.enable(0,1)}),l=0;l<Pt.length;l+=3)rf(Bn,Pt[l],Pt[l+1]),rf(Bn,Pt[l],Pt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Ep=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Qu)||(Qu=r)&&setInterval(Zx,r),"ignoreMobileResize"in n&&(dg=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tf(Bn)||tf(zn,n.autoRefreshEvents||"none"),Ub=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Ai(n),a=Pt.indexOf(s),l=oa(s);~a&&Pt.splice(a,l?6:2),r&&(l?Qr.unshift(Ut,r,on,r,Lr,r):Qr.unshift(s,r))},i.clearMatchMedia=function(n){wt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=($i(n)?Ai(n):n).getBoundingClientRect(),l=a[s?Ko:Zo]*r||0;return s?a.right-l>0&&a.left+l<Ut.innerWidth:a.bottom-l>0&&a.top+l<Ut.innerHeight},i.positionInViewport=function(n,r,s){$i(n)&&(n=Ai(n));var a=n.getBoundingClientRect(),l=a[s?Ko:Zo],u=r==null?l/2:r in Th?Th[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return s?(a.left+u)/Ut.innerWidth:(a.top+u)/Ut.innerHeight},i.killAll=function(n){if(wt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=aa.killAll||[];aa={},r.forEach(function(s){return s()})}},i}();yt.version="3.12.5";yt.saveStyles=function(i){return i?Xc(i).forEach(function(e){if(e&&e.style){var t=Vi.indexOf(e);t>=0&&Vi.splice(t,5),Vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ke.core.getCache(e),pg())}}):Vi};yt.revert=function(i,e){return x_(!i,e)};yt.create=function(i,e){return new yt(i,e)};yt.refresh=function(i){return i?wc():(Qa||yt.register())&&Wo(!0)};yt.update=function(i){return++Pt.cache&&Cs(i===!0?2:0)};yt.clearScrollMemory=qb;yt.maxScroll=function(i,e){return Kr(i,e?xi:In)};yt.getScrollFunc=function(i,e){return mo(Ai(i),e?xi:In)};yt.getById=function(i){return gg[i]};yt.getAll=function(){return wt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};yt.isScrolling=function(){return!!xr};yt.snapDirectional=v_;yt.addEventListener=function(i,e){var t=aa[i]||(aa[i]=[]);~t.indexOf(e)||t.push(e)};yt.removeEventListener=function(i,e){var t=aa[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};yt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(f,h){var p=[],m=[],g=ke.delayedCall(r,function(){h(p,m),p=[],m=[]}).pause();return function(y){p.length||g.restart(!0),p.push(y.trigger),m.push(y),s<=p.length&&g.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&yi(e[l])&&l!=="onRefreshInit"?a(l,e[l]):e[l];return yi(s)&&(s=s(),zn(yt,"refresh",function(){return s=e.batchMax()})),Xc(i).forEach(function(u){var f={};for(l in n)f[l]=n[l];f.trigger=u,t.push(yt.create(f))}),t};var iy=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Ap=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bn.isTouch?" pinch-zoom":""):"none",e===Lr&&i(on,t)},cf={auto:1,scroll:1},iO=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||ke.core.getCache(s),l=ii(),u;if(!a._isScrollT||l-a._isScrollT>2e3){for(;s&&s!==on&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(cf[(u=pr(s)).overflowY]||cf[u.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!oa(s)&&(cf[(u=pr(s)).overflowY]||cf[u.overflowX]),a._isScrollT=l}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Kb=function(e,t,n,r){return bn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&iO,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&zn(fn,bn.eventTypes[0],sy,!1,!0)},onDisable:function(){return Bn(fn,bn.eventTypes[0],sy,!0)}})},rO=/(input|label|select|textarea)/i,ry,sy=function(e){var t=rO.test(e.target.tagName);(t||ry)&&(e._gsapAllow=!0,ry=t)},sO=function(e){No(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,l,u,f=Ai(e.target)||Lr,h=ke.core.globals().ScrollSmoother,p=h&&h.get(),m=Js&&(e.content&&Ai(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),g=mo(f,In),y=mo(f,xi),x=1,_=(bn.isTouch&&Ut.visualViewport?Ut.visualViewport.scale*Ut.visualViewport.width:Ut.outerWidth)/Ut.innerWidth,v=0,w=yi(r)?function(){return r(l)}:function(){return r||2.8},T,E,C=Kb(f,e.type,!0,s),R=function(){return E=!1},A=Vr,z=Vr,G=function(){u=Kr(f,In),z=Ic(Js?1:0,u),n&&(A=Ic(0,Kr(f,xi))),T=Jo},M=function(){m._gsap.y=bc(parseFloat(m._gsap.y)+g.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},U=function(){if(E){requestAnimationFrame(R);var ie=bc(l.deltaY/2),oe=z(g.v-ie);if(m&&oe!==g.v+g.offset){g.offset=oe-g.v;var N=bc((parseFloat(m&&m._gsap.y)||0)-g.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",m._gsap.y=N+"px",g.cacheID=Pt.cache,Cs()}return!0}g.offset&&M(),E=!0},V,ae,H,J,j=function(){G(),V.isActive()&&V.vars.scrollY>u&&(g()>u?V.progress(1)&&g(u):V.resetTo("scrollY",u))};return m&&ke.set(m,{y:"+=0"}),e.ignoreCheck=function(te){return Js&&te.type==="touchmove"&&U()||x>1.05&&te.type!=="touchstart"||l.isGesturing||te.touches&&te.touches.length>1},e.onPress=function(){E=!1;var te=x;x=bc((Ut.visualViewport&&Ut.visualViewport.scale||1)/_),V.pause(),te!==x&&Ap(f,x>1.01?!0:n?!1:"x"),ae=y(),H=g(),G(),T=Jo},e.onRelease=e.onGestureStart=function(te,ie){if(g.offset&&M(),!ie)J.restart(!0);else{Pt.cache++;var oe=w(),N,ce;n&&(N=y(),ce=N+oe*.05*-te.velocityX/.227,oe*=iy(y,N,ce,Kr(f,xi)),V.vars.scrollX=A(ce)),N=g(),ce=N+oe*.05*-te.velocityY/.227,oe*=iy(g,N,ce,Kr(f,In)),V.vars.scrollY=z(ce),V.invalidate().duration(oe).play(.01),(Js&&V.vars.scrollY>=u||N>=u-1)&&ke.to({},{onUpdate:j,duration:oe})}a&&a(te)},e.onWheel=function(){V._ts&&V.pause(),ii()-v>1e3&&(T=0,v=ii())},e.onChange=function(te,ie,oe,N,ce){if(Jo!==T&&G(),ie&&n&&y(A(N[2]===ie?ae+(te.startX-te.x):y()+ie-N[1])),oe){g.offset&&M();var Se=ce[2]===oe,Je=Se?H+te.startY-te.y:g()+oe-ce[1],ne=z(Je);Se&&Je!==ne&&(H+=ne-Je),g(ne)}(oe||ie)&&Cs()},e.onEnable=function(){Ap(f,n?!1:"x"),yt.addEventListener("refresh",j),zn(Ut,"resize",j),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=y.smooth=!1),C.enable()},e.onDisable=function(){Ap(f,!0),Bn(Ut,"resize",j),yt.removeEventListener("refresh",j),C.kill()},e.lockAxis=e.lockAxis!==!1,l=new bn(e),l.iOS=Js,Js&&!g()&&g(1),Js&&ke.ticker.add(Vr),J=l._dc,V=ke.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jb(g,g(),function(){return V.pause()})},onUpdate:Cs,onComplete:J.vars.onComplete}),l};yt.sort=function(i){return wt.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};yt.observe=function(i){return new bn(i)};yt.normalizeScroll=function(i){if(typeof i>"u")return pi;if(i===!0&&pi)return pi.enable();if(i===!1){pi&&pi.kill(),pi=i;return}var e=i instanceof bn?i:sO(i);return pi&&pi.target===e.target&&pi.kill(),oa(e.target)&&(pi=e),e};yt.core={_getVelocityProp:fg,_inputObserver:Kb,_scrollers:Pt,_proxies:Qr,bridge:{ss:function(){xr||la("scrollStart"),xr=ii()},ref:function(){return ni}}};zb()&&ke.registerPlugin(yt);/*! *****************************************************************************
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
***************************************************************************** */var xg=function(i,e){return xg=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},xg(i,e)};function oO(i,e){xg(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var es=function(){return es=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},es.apply(this,arguments)};function zo(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(a=i[l])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function aO(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],a=0,l=s.length;a<l;a++,r++)n[r]=s[a];return n}var an=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lO(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jn=function(i){try{return!!i()}catch{return!0}},cO=jn,y_=!cO(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),Zb=y_,Jb=Function.prototype,yg=Jb.call,uO=Zb&&Jb.bind.bind(yg,yg),xn=Zb?uO:function(i){return function(){return yg.apply(i,arguments)}},Qb=xn,fO=Qb({}.toString),hO=Qb("".slice),Pl=function(i){return hO(fO(i),8,-1)},dO=xn,pO=jn,mO=Pl,Cp=Object,gO=dO("".split),S_=pO(function(){return!Cp("z").propertyIsEnumerable(0)})?function(i){return mO(i)==="String"?gO(i,""):Cp(i)}:Cp,Ll=function(i){return i==null},_O=Ll,vO=TypeError,Gh=function(i){if(_O(i))throw new vO("Can't call method on "+i);return i},xO=S_,yO=Gh,Dl=function(i){return xO(yO(i))},oc=function(i){return i&&i.Math===Math&&i},Qi=oc(typeof globalThis=="object"&&globalThis)||oc(typeof window=="object"&&window)||oc(typeof self=="object"&&self)||oc(typeof an=="object"&&an)||oc(typeof an=="object"&&an)||function(){return this}()||Function("return this")(),eT={exports:{}},SO=!1,oy=Qi,EO=Object.defineProperty,E_=function(i,e){try{EO(oy,i,{value:e,configurable:!0,writable:!0})}catch{oy[i]=e}return e},MO=Qi,bO=E_,ay="__core-js_shared__",ly=eT.exports=MO[ay]||bO(ay,{});(ly.versions||(ly.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var M_=eT.exports,cy=M_,tT=function(i,e){return cy[i]||(cy[i]=e||{})},TO=Gh,wO=Object,Jc=function(i){return wO(TO(i))},AO=xn,CO=Jc,RO=AO({}.hasOwnProperty),Ur=Object.hasOwn||function(e,t){return RO(CO(e),t)},PO=xn,LO=0,DO=Math.random(),IO=PO(1 .toString),b_=function(i){return"Symbol("+(i===void 0?"":i)+")_"+IO(++LO+DO,36)},OO=typeof navigator<"u"&&String(navigator.userAgent)||"",nT=Qi,Rp=OO,uy=nT.process,fy=nT.Deno,hy=uy&&uy.versions||fy&&fy.version,dy=hy&&hy.v8,Dr,wh;dy&&(Dr=dy.split("."),wh=Dr[0]>0&&Dr[0]<4?1:+(Dr[0]+Dr[1]));!wh&&Rp&&(Dr=Rp.match(/Edge\/(\d+)/),(!Dr||Dr[1]>=74)&&(Dr=Rp.match(/Chrome\/(\d+)/),Dr&&(wh=+Dr[1])));var UO=wh,py=UO,NO=jn,FO=Qi,BO=FO.String,iT=!!Object.getOwnPropertySymbols&&!NO(function(){var i=Symbol("symbol detection");return!BO(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&py&&py<41}),zO=iT,rT=zO&&!Symbol.sham&&typeof Symbol.iterator=="symbol",HO=Qi,kO=tT,my=Ur,GO=b_,WO=iT,VO=rT,sl=HO.Symbol,Pp=kO("wks"),$O=VO?sl.for||sl:sl&&sl.withoutSetter||GO,Er=function(i){return my(Pp,i)||(Pp[i]=WO&&my(sl,i)?sl[i]:$O("Symbol."+i)),Pp[i]},Lp=typeof document=="object"&&document.all,Kn=typeof Lp>"u"&&Lp!==void 0?function(i){return typeof i=="function"||i===Lp}:function(i){return typeof i=="function"},XO=Kn,Ui=function(i){return typeof i=="object"?i!==null:XO(i)},qO=Ui,YO=String,jO=TypeError,rs=function(i){if(qO(i))return i;throw new jO(YO(i)+" is not an object")},sT={},KO=jn,er=!KO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),ZO=er,JO=jn,oT=ZO&&JO(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Nr={},QO=Qi,gy=Ui,Sg=QO.document,eU=gy(Sg)&&gy(Sg.createElement),aT=function(i){return eU?Sg.createElement(i):{}},tU=er,nU=jn,iU=aT,lT=!tU&&!nU(function(){return Object.defineProperty(iU("div"),"a",{get:function(){return 7}}).a!==7}),rU=y_,uf=Function.prototype.call,Os=rU?uf.bind(uf):function(){return uf.apply(uf,arguments)},Dp=Qi,sU=Kn,oU=function(i){return sU(i)?i:void 0},Qc=function(i,e){return arguments.length<2?oU(Dp[i]):Dp[i]&&Dp[i][e]},aU=xn,T_=aU({}.isPrototypeOf),lU=Qc,cU=Kn,uU=T_,fU=rT,hU=Object,cT=fU?function(i){return typeof i=="symbol"}:function(i){var e=lU("Symbol");return cU(e)&&uU(e.prototype,hU(i))},dU=String,w_=function(i){try{return dU(i)}catch{return"Object"}},pU=Kn,mU=w_,gU=TypeError,eu=function(i){if(pU(i))return i;throw new gU(mU(i)+" is not a function")},_U=eu,vU=Ll,A_=function(i,e){var t=i[e];return vU(t)?void 0:_U(t)},Ip=Os,Op=Kn,Up=Ui,xU=TypeError,yU=function(i,e){var t,n;if(e==="string"&&Op(t=i.toString)&&!Up(n=Ip(t,i))||Op(t=i.valueOf)&&!Up(n=Ip(t,i))||e!=="string"&&Op(t=i.toString)&&!Up(n=Ip(t,i)))return n;throw new xU("Can't convert object to primitive value")},SU=Os,_y=Ui,vy=cT,EU=A_,MU=yU,bU=Er,TU=TypeError,wU=bU("toPrimitive"),AU=function(i,e){if(!_y(i)||vy(i))return i;var t=EU(i,wU),n;if(t){if(e===void 0&&(e="default"),n=SU(t,i,e),!_y(n)||vy(n))return n;throw new TU("Can't convert object to primitive value")}return e===void 0&&(e="number"),MU(i,e)},CU=AU,RU=cT,uT=function(i){var e=CU(i,"string");return RU(e)?e:e+""},PU=er,LU=lT,DU=oT,ff=rs,xy=uT,IU=TypeError,Np=Object.defineProperty,OU=Object.getOwnPropertyDescriptor,Fp="enumerable",Bp="configurable",zp="writable";Nr.f=PU?DU?function(e,t,n){if(ff(e),t=xy(t),ff(n),typeof e=="function"&&t==="prototype"&&"value"in n&&zp in n&&!n[zp]){var r=OU(e,t);r&&r[zp]&&(e[t]=n.value,n={configurable:Bp in n?n[Bp]:r[Bp],enumerable:Fp in n?n[Fp]:r[Fp],writable:!1})}return Np(e,t,n)}:Np:function(e,t,n){if(ff(e),t=xy(t),ff(n),LU)try{return Np(e,t,n)}catch{}if("get"in n||"set"in n)throw new IU("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var UU=Math.ceil,NU=Math.floor,FU=Math.trunc||function(e){var t=+e;return(t>0?NU:UU)(t)},BU=FU,C_=function(i){var e=+i;return e!==e||e===0?0:BU(e)},zU=C_,HU=Math.max,kU=Math.min,GU=function(i,e){var t=zU(i);return t<0?HU(t+e,0):kU(t,e)},WU=C_,VU=Math.min,$U=function(i){var e=WU(i);return e>0?VU(e,9007199254740991):0},XU=$U,Wh=function(i){return XU(i.length)},qU=Dl,YU=GU,jU=Wh,yy=function(i){return function(e,t,n){var r=qU(e),s=jU(r);if(s===0)return!i&&-1;var a=YU(n,s),l;if(i&&t!==t){for(;s>a;)if(l=r[a++],l!==l)return!0}else for(;s>a;a++)if((i||a in r)&&r[a]===t)return i||a||0;return!i&&-1}},KU={includes:yy(!0),indexOf:yy(!1)},Vh={},ZU=xn,Hp=Ur,JU=Dl,QU=KU.indexOf,eN=Vh,Sy=ZU([].push),fT=function(i,e){var t=JU(i),n=0,r=[],s;for(s in t)!Hp(eN,s)&&Hp(t,s)&&Sy(r,s);for(;e.length>n;)Hp(t,s=e[n++])&&(~QU(r,s)||Sy(r,s));return r},R_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],tN=fT,nN=R_,hT=Object.keys||function(e){return tN(e,nN)},iN=er,rN=oT,sN=Nr,oN=rs,aN=Dl,lN=hT;sT.f=iN&&!rN?Object.defineProperties:function(e,t){oN(e);for(var n=aN(t),r=lN(t),s=r.length,a=0,l;s>a;)sN.f(e,l=r[a++],n[l]);return e};var cN=Qc,uN=cN("document","documentElement"),fN=tT,hN=b_,Ey=fN("keys"),P_=function(i){return Ey[i]||(Ey[i]=hN(i))},dN=rs,pN=sT,My=R_,mN=Vh,gN=uN,_N=aT,vN=P_,by=">",Ty="<",Eg="prototype",Mg="script",dT=vN("IE_PROTO"),kp=function(){},pT=function(i){return Ty+Mg+by+i+Ty+"/"+Mg+by},wy=function(i){i.write(pT("")),i.close();var e=i.parentWindow.Object;return i=null,e},xN=function(){var i=_N("iframe"),e="java"+Mg+":",t;return i.style.display="none",gN.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(pT("document.F=Object")),t.close(),t.F},hf,sh=function(){try{hf=new ActiveXObject("htmlfile")}catch{}sh=typeof document<"u"?document.domain&&hf?wy(hf):xN():wy(hf);for(var i=My.length;i--;)delete sh[Eg][My[i]];return sh()};mN[dT]=!0;var L_=Object.create||function(e,t){var n;return e!==null?(kp[Eg]=dN(e),n=new kp,kp[Eg]=null,n[dT]=e):n=sh(),t===void 0?n:pN.f(n,t)},yN=Er,SN=L_,EN=Nr.f,bg=yN("unscopables"),Tg=Array.prototype;Tg[bg]===void 0&&EN(Tg,bg,{configurable:!0,value:SN(null)});var MN=function(i){Tg[bg][i]=!0},tu={},bN=Qi,TN=Kn,Ay=bN.WeakMap,mT=TN(Ay)&&/native code/.test(String(Ay)),$h=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},wN=er,AN=Nr,CN=$h,D_=wN?function(i,e,t){return AN.f(i,e,CN(1,t))}:function(i,e,t){return i[e]=t,i},RN=mT,gT=Qi,PN=Ui,LN=D_,Gp=Ur,Wp=M_,DN=P_,IN=Vh,Cy="Object already initialized",wg=gT.TypeError,ON=gT.WeakMap,Ah,Yc,Ch,UN=function(i){return Ch(i)?Yc(i):Ah(i,{})},NN=function(i){return function(e){var t;if(!PN(e)||(t=Yc(e)).type!==i)throw new wg("Incompatible receiver, "+i+" required");return t}};if(RN||Wp.state){var kr=Wp.state||(Wp.state=new ON);kr.get=kr.get,kr.has=kr.has,kr.set=kr.set,Ah=function(i,e){if(kr.has(i))throw new wg(Cy);return e.facade=i,kr.set(i,e),e},Yc=function(i){return kr.get(i)||{}},Ch=function(i){return kr.has(i)}}else{var Ua=DN("state");IN[Ua]=!0,Ah=function(i,e){if(Gp(i,Ua))throw new wg(Cy);return e.facade=i,LN(i,Ua,e),e},Yc=function(i){return Gp(i,Ua)?i[Ua]:{}},Ch=function(i){return Gp(i,Ua)}}var Il={set:Ah,get:Yc,has:Ch,enforce:UN,getterFor:NN},I_={},O_={},_T={}.propertyIsEnumerable,vT=Object.getOwnPropertyDescriptor,FN=vT&&!_T.call({1:2},1);O_.f=FN?function(e){var t=vT(this,e);return!!t&&t.enumerable}:_T;var BN=er,zN=Os,HN=O_,kN=$h,GN=Dl,WN=uT,VN=Ur,$N=lT,Ry=Object.getOwnPropertyDescriptor;I_.f=BN?Ry:function(e,t){if(e=GN(e),t=WN(t),$N)try{return Ry(e,t)}catch{}if(VN(e,t))return kN(!zN(HN.f,e,t),e[t])};var xT={exports:{}},Ag=er,XN=Ur,yT=Function.prototype,qN=Ag&&Object.getOwnPropertyDescriptor,U_=XN(yT,"name"),YN=U_&&(function(){}).name==="something",jN=U_&&(!Ag||Ag&&qN(yT,"name").configurable),ST={EXISTS:U_,PROPER:YN,CONFIGURABLE:jN},KN=xn,ZN=Kn,Cg=M_,JN=KN(Function.toString);ZN(Cg.inspectSource)||(Cg.inspectSource=function(i){return JN(i)});var ET=Cg.inspectSource,N_=xn,QN=jn,e3=Kn,df=Ur,Rg=er,t3=ST.CONFIGURABLE,n3=ET,MT=Il,i3=MT.enforce,r3=MT.get,Py=String,oh=Object.defineProperty,s3=N_("".slice),o3=N_("".replace),a3=N_([].join),l3=Rg&&!QN(function(){return oh(function(){},"length",{value:8}).length!==8}),c3=String(String).split("String"),u3=xT.exports=function(i,e,t){s3(Py(e),0,7)==="Symbol("&&(e="["+o3(Py(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!df(i,"name")||t3&&i.name!==e)&&(Rg?oh(i,"name",{value:e,configurable:!0}):i.name=e),l3&&t&&df(t,"arity")&&i.length!==t.arity&&oh(i,"length",{value:t.arity});try{t&&df(t,"constructor")&&t.constructor?Rg&&oh(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=i3(i);return df(n,"source")||(n.source=a3(c3,typeof e=="string"?e:"")),i};Function.prototype.toString=u3(function(){return e3(this)&&r3(this).source||n3(this)},"toString");var bT=xT.exports,f3=Kn,h3=Nr,d3=bT,p3=E_,Ol=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(f3(t)&&d3(t,s,n),n.global)r?i[e]=t:p3(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:h3.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},Xh={},m3=fT,g3=R_,_3=g3.concat("length","prototype");Xh.f=Object.getOwnPropertyNames||function(e){return m3(e,_3)};var F_={};F_.f=Object.getOwnPropertySymbols;var v3=Qc,x3=xn,y3=Xh,S3=F_,E3=rs,M3=x3([].concat),b3=v3("Reflect","ownKeys")||function(e){var t=y3.f(E3(e)),n=S3.f;return n?M3(t,n(e)):t},Ly=Ur,T3=b3,w3=I_,A3=Nr,C3=function(i,e,t){for(var n=T3(e),r=A3.f,s=w3.f,a=0;a<n.length;a++){var l=n[a];!Ly(i,l)&&!(t&&Ly(t,l))&&r(i,l,s(e,l))}},R3=jn,P3=Kn,L3=/#|\.prototype\./,nu=function(i,e){var t=I3[D3(i)];return t===U3?!0:t===O3?!1:P3(e)?R3(e):!!e},D3=nu.normalize=function(i){return String(i).replace(L3,".").toLowerCase()},I3=nu.data={},O3=nu.NATIVE="N",U3=nu.POLYFILL="P",TT=nu,pf=Qi,N3=I_.f,F3=D_,B3=Ol,z3=E_,H3=C3,k3=TT,Ul=function(i,e){var t=i.target,n=i.global,r=i.stat,s,a,l,u,f,h;if(n?a=pf:r?a=pf[t]||z3(t,{}):a=pf[t]&&pf[t].prototype,a)for(l in e){if(f=e[l],i.dontCallGetSet?(h=N3(a,l),u=h&&h.value):u=a[l],s=k3(n?l:t+(r?".":"#")+l,i.forced),!s&&u!==void 0){if(typeof f==typeof u)continue;H3(f,u)}(i.sham||u&&u.sham)&&F3(f,"sham",!0),B3(a,l,f,i)}},G3=jn,W3=!G3(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),V3=Ur,$3=Kn,X3=Jc,q3=P_,Y3=W3,Dy=q3("IE_PROTO"),Pg=Object,j3=Pg.prototype,wT=Y3?Pg.getPrototypeOf:function(i){var e=X3(i);if(V3(e,Dy))return e[Dy];var t=e.constructor;return $3(t)&&e instanceof t?t.prototype:e instanceof Pg?j3:null},K3=jn,Z3=Kn,J3=Ui,Iy=wT,Q3=Ol,eF=Er,Lg=eF("iterator"),AT=!1,ca,Vp,$p;[].keys&&($p=[].keys(),"next"in $p?(Vp=Iy(Iy($p)),Vp!==Object.prototype&&(ca=Vp)):AT=!0);var tF=!J3(ca)||K3(function(){var i={};return ca[Lg].call(i)!==i});tF&&(ca={});Z3(ca[Lg])||Q3(ca,Lg,function(){return this});var CT={IteratorPrototype:ca,BUGGY_SAFARI_ITERATORS:AT},nF=Nr.f,iF=Ur,rF=Er,Oy=rF("toStringTag"),B_=function(i,e,t){i&&!t&&(i=i.prototype),i&&!iF(i,Oy)&&nF(i,Oy,{configurable:!0,value:e})},sF=CT.IteratorPrototype,oF=L_,aF=$h,lF=B_,cF=tu,uF=function(){return this},fF=function(i,e,t,n){var r=e+" Iterator";return i.prototype=oF(sF,{next:aF(+!n,t)}),lF(i,r,!1),cF[r]=uF,i},hF=xn,dF=eu,pF=function(i,e,t){try{return hF(dF(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},mF=Ui,gF=function(i){return mF(i)||i===null},_F=gF,vF=String,xF=TypeError,yF=function(i){if(_F(i))return i;throw new xF("Can't set "+vF(i)+" as a prototype")},SF=pF,EF=rs,MF=yF,RT=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=SF(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return EF(r),MF(s),i?t(r,s):r.__proto__=s,r}}():void 0),bF=Ul,TF=Os,PT=ST,wF=Kn,AF=fF,Uy=wT,Ny=RT,CF=B_,RF=D_,Xp=Ol,PF=Er,LF=tu,LT=CT,DF=PT.PROPER,IF=PT.CONFIGURABLE,Fy=LT.IteratorPrototype,mf=LT.BUGGY_SAFARI_ITERATORS,ac=PF("iterator"),By="keys",lc="values",zy="entries",OF=function(){return this},z_=function(i,e,t,n,r,s,a){AF(t,e,n);var l=function(v){if(v===r&&m)return m;if(!mf&&v&&v in h)return h[v];switch(v){case By:return function(){return new t(this,v)};case lc:return function(){return new t(this,v)};case zy:return function(){return new t(this,v)}}return function(){return new t(this)}},u=e+" Iterator",f=!1,h=i.prototype,p=h[ac]||h["@@iterator"]||r&&h[r],m=!mf&&p||l(r),g=e==="Array"&&h.entries||p,y,x,_;if(g&&(y=Uy(g.call(new i)),y!==Object.prototype&&y.next&&(Uy(y)!==Fy&&(Ny?Ny(y,Fy):wF(y[ac])||Xp(y,ac,OF)),CF(y,u,!0))),DF&&r===lc&&p&&p.name!==lc&&(IF?RF(h,"name",lc):(f=!0,m=function(){return TF(p,this)})),r)if(x={values:l(lc),keys:s?m:l(By),entries:l(zy)},a)for(_ in x)(mf||f||!(_ in h))&&Xp(h,_,x[_]);else bF({target:e,proto:!0,forced:mf||f},x);return h[ac]!==m&&Xp(h,ac,m,{name:r}),LF[e]=m,x},H_=function(i,e){return{value:i,done:e}},UF=Dl,k_=MN,Hy=tu,DT=Il,NF=Nr.f,FF=z_,gf=H_,BF=er,IT="Array Iterator",zF=DT.set,HF=DT.getterFor(IT);FF(Array,"Array",function(i,e){zF(this,{type:IT,target:UF(i),index:0,kind:e})},function(){var i=HF(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,gf(void 0,!0);switch(i.kind){case"keys":return gf(t,!1);case"values":return gf(e[t],!1)}return gf([t,e[t]],!1)},"values");var ky=Hy.Arguments=Hy.Array;k_("keys");k_("values");k_("entries");if(BF&&ky.name!=="values")try{NF(ky,"name",{value:"values"})}catch{}var OT={exports:{}},UT={},kF=xn,GF=kF([].slice),WF=Pl,VF=Dl,NT=Xh.f,$F=GF,FT=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],XF=function(i){try{return NT(i)}catch{return $F(FT)}};UT.f=function(e){return FT&&WF(e)==="Window"?XF(e):NT(VF(e))};var qF=jn,YF=qF(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),jF=jn,KF=Ui,ZF=Pl,Gy=YF,ah=Object.isExtensible,JF=jF(function(){ah(1)}),QF=JF||Gy?function(e){return!KF(e)||Gy&&ZF(e)==="ArrayBuffer"?!1:ah?ah(e):!0}:ah,eB=jn,BT=!eB(function(){return Object.isExtensible(Object.preventExtensions({}))}),tB=Ul,nB=xn,iB=Vh,rB=Ui,G_=Ur,sB=Nr.f,Wy=Xh,oB=UT,W_=QF,aB=b_,lB=BT,zT=!1,Ls=aB("meta"),cB=0,V_=function(i){sB(i,Ls,{value:{objectID:"O"+cB++,weakData:{}}})},uB=function(i,e){if(!rB(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!G_(i,Ls)){if(!W_(i))return"F";if(!e)return"E";V_(i)}return i[Ls].objectID},fB=function(i,e){if(!G_(i,Ls)){if(!W_(i))return!0;if(!e)return!1;V_(i)}return i[Ls].weakData},hB=function(i){return lB&&zT&&W_(i)&&!G_(i,Ls)&&V_(i),i},dB=function(){pB.enable=function(){},zT=!0;var i=Wy.f,e=nB([].splice),t={};t[Ls]=1,i(t).length&&(Wy.f=function(n){for(var r=i(n),s=0,a=r.length;s<a;s++)if(r[s]===Ls){e(r,s,1);break}return r},tB({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:oB.f}))},pB=OT.exports={enable:dB,fastKey:uB,getWeakData:fB,onFreeze:hB};iB[Ls]=!0;var qh=OT.exports,mB=Pl,gB=xn,_B=function(i){if(mB(i)==="Function")return gB(i)},Vy=_B,vB=eu,xB=y_,yB=Vy(Vy.bind),Yh=function(i,e){return vB(i),e===void 0?i:xB?yB(i,e):function(){return i.apply(e,arguments)}},SB=Er,EB=tu,MB=SB("iterator"),bB=Array.prototype,HT=function(i){return i!==void 0&&(EB.Array===i||bB[MB]===i)},TB=Er,wB=TB("toStringTag"),kT={};kT[wB]="z";var $_=String(kT)==="[object z]",AB=$_,CB=Kn,lh=Pl,RB=Er,PB=RB("toStringTag"),LB=Object,DB=lh(function(){return arguments}())==="Arguments",IB=function(i,e){try{return i[e]}catch{}},jh=AB?lh:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=IB(e=LB(i),PB))=="string"?t:DB?lh(e):(n=lh(e))==="Object"&&CB(e.callee)?"Arguments":n},OB=jh,$y=A_,UB=Ll,NB=tu,FB=Er,BB=FB("iterator"),X_=function(i){if(!UB(i))return $y(i,BB)||$y(i,"@@iterator")||NB[OB(i)]},zB=Os,HB=eu,kB=rs,GB=w_,WB=X_,VB=TypeError,GT=function(i,e){var t=arguments.length<2?WB(i):e;if(HB(t))return kB(zB(t,i));throw new VB(GB(i)+" is not iterable")},$B=Os,Xy=rs,XB=A_,WT=function(i,e,t){var n,r;Xy(i);try{if(n=XB(i,"return"),!n){if(e==="throw")throw t;return t}n=$B(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return Xy(n),t},qB=Yh,YB=Os,jB=rs,KB=w_,ZB=HT,JB=Wh,qy=T_,QB=GT,ez=X_,Yy=WT,tz=TypeError,ch=function(i,e){this.stopped=i,this.result=e},jy=ch.prototype,Kh=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),a=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),u=qB(e,n),f,h,p,m,g,y,x,_=function(w){return f&&Yy(f,"normal",w),new ch(!0,w)},v=function(w){return r?(jB(w),l?u(w[0],w[1],_):u(w[0],w[1])):l?u(w,_):u(w)};if(s)f=i.iterator;else if(a)f=i;else{if(h=ez(i),!h)throw new tz(KB(i)+" is not iterable");if(ZB(h)){for(p=0,m=JB(i);m>p;p++)if(g=v(i[p]),g&&qy(jy,g))return g;return new ch(!1)}f=QB(i,h)}for(y=s?i.next:f.next;!(x=YB(y,f)).done;){try{g=v(x.value)}catch(w){Yy(f,"throw",w)}if(typeof g=="object"&&g&&qy(jy,g))return g}return new ch(!1)},nz=T_,iz=TypeError,q_=function(i,e){if(nz(e,i))return i;throw new iz("Incorrect invocation")},rz=Er,VT=rz("iterator"),$T=!1;try{var sz=0,Ky={next:function(){return{done:!!sz++}},return:function(){$T=!0}};Ky[VT]=function(){return this},Array.from(Ky,function(){throw 2})}catch{}var XT=function(i,e){try{if(!e&&!$T)return!1}catch{return!1}var t=!1;try{var n={};n[VT]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},oz=Kn,az=Ui,Zy=RT,lz=function(i,e,t){var n,r;return Zy&&oz(n=e.constructor)&&n!==t&&az(r=n.prototype)&&r!==t.prototype&&Zy(i,r),i},cz=Ul,uz=Qi,fz=xn,Jy=TT,hz=Ol,dz=qh,pz=Kh,mz=q_,gz=Kn,_z=Ll,qp=Ui,Yp=jn,vz=XT,xz=B_,yz=lz,Y_=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",a=uz[i],l=a&&a.prototype,u=a,f={},h=function(v){var w=fz(l[v]);hz(l,v,v==="add"?function(E){return w(this,E===0?0:E),this}:v==="delete"?function(T){return r&&!qp(T)?!1:w(this,T===0?0:T)}:v==="get"?function(E){return r&&!qp(E)?void 0:w(this,E===0?0:E)}:v==="has"?function(E){return r&&!qp(E)?!1:w(this,E===0?0:E)}:function(E,C){return w(this,E===0?0:E,C),this})},p=Jy(i,!gz(a)||!(r||l.forEach&&!Yp(function(){new a().entries().next()})));if(p)u=t.getConstructor(e,i,n,s),dz.enable();else if(Jy(i,!0)){var m=new u,g=m[s](r?{}:-0,1)!==m,y=Yp(function(){m.has(1)}),x=vz(function(v){new a(v)}),_=!r&&Yp(function(){for(var v=new a,w=5;w--;)v[s](w,w);return!v.has(-0)});x||(u=e(function(v,w){mz(v,l);var T=yz(new a,v,u);return _z(w)||pz(w,T[s],{that:T,AS_ENTRIES:n}),T}),u.prototype=l,l.constructor=u),(y||_)&&(h("delete"),h("has"),n&&h("get")),(_||g)&&h(s),r&&l.clear&&delete l.clear}return f[i]=u,cz({global:!0,constructor:!0,forced:u!==a},f),xz(u,i),r||t.setStrong(u,i,n),u},Qy=bT,Sz=Nr,qT=function(i,e,t){return t.get&&Qy(t.get,e,{getter:!0}),t.set&&Qy(t.set,e,{setter:!0}),Sz.f(i,e,t)},Ez=Ol,j_=function(i,e,t){for(var n in e)Ez(i,n,e[n],t);return i},Mz=Qc,bz=qT,Tz=Er,wz=er,eS=Tz("species"),Az=function(i){var e=Mz(i);wz&&e&&!e[eS]&&bz(e,eS,{configurable:!0,get:function(){return this}})},tS=L_,Cz=qT,nS=j_,Rz=Yh,Pz=q_,Lz=Ll,Dz=Kh,Iz=z_,_f=H_,Oz=Az,cc=er,iS=qh.fastKey,YT=Il,rS=YT.set,jp=YT.getterFor,jT={getConstructor:function(i,e,t,n){var r=i(function(f,h){Pz(f,s),rS(f,{type:e,index:tS(null),first:void 0,last:void 0,size:0}),cc||(f.size=0),Lz(h)||Dz(h,f[n],{that:f,AS_ENTRIES:t})}),s=r.prototype,a=jp(e),l=function(f,h,p){var m=a(f),g=u(f,h),y,x;return g?g.value=p:(m.last=g={index:x=iS(h,!0),key:h,value:p,previous:y=m.last,next:void 0,removed:!1},m.first||(m.first=g),y&&(y.next=g),cc?m.size++:f.size++,x!=="F"&&(m.index[x]=g)),f},u=function(f,h){var p=a(f),m=iS(h),g;if(m!=="F")return p.index[m];for(g=p.first;g;g=g.next)if(g.key===h)return g};return nS(s,{clear:function(){for(var h=this,p=a(h),m=p.first;m;)m.removed=!0,m.previous&&(m.previous=m.previous.next=void 0),m=m.next;p.first=p.last=void 0,p.index=tS(null),cc?p.size=0:h.size=0},delete:function(f){var h=this,p=a(h),m=u(h,f);if(m){var g=m.next,y=m.previous;delete p.index[m.index],m.removed=!0,y&&(y.next=g),g&&(g.previous=y),p.first===m&&(p.first=g),p.last===m&&(p.last=y),cc?p.size--:h.size--}return!!m},forEach:function(h){for(var p=a(this),m=Rz(h,arguments.length>1?arguments[1]:void 0),g;g=g?g.next:p.first;)for(m(g.value,g.key,this);g&&g.removed;)g=g.previous},has:function(h){return!!u(this,h)}}),nS(s,t?{get:function(h){var p=u(this,h);return p&&p.value},set:function(h,p){return l(this,h===0?0:h,p)}}:{add:function(h){return l(this,h=h===0?0:h,h)}}),cc&&Cz(s,"size",{configurable:!0,get:function(){return a(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=jp(e),s=jp(n);Iz(i,e,function(a,l){rS(this,{type:n,target:a,state:r(a),kind:l,last:void 0})},function(){for(var a=s(this),l=a.kind,u=a.last;u&&u.removed;)u=u.previous;return!a.target||!(a.last=u=u?u.next:a.state.first)?(a.target=void 0,_f(void 0,!0)):_f(l==="keys"?u.key:l==="values"?u.value:[u.key,u.value],!1)},t?"entries":"values",!t,!0),Oz(e)}},Uz=Y_,Nz=jT;Uz("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Nz);var vf=xn,uc=Map.prototype,Fz={Map,set:vf(uc.set),get:vf(uc.get),has:vf(uc.has),remove:vf(uc.delete),proto:uc},Bz=Ul,zz=xn,Hz=eu,kz=Gh,Gz=Kh,Zh=Fz,Wz=SO,Vz=Zh.Map,$z=Zh.has,Xz=Zh.get,qz=Zh.set,Yz=zz([].push);Bz({target:"Map",stat:!0,forced:Wz},{groupBy:function(e,t){kz(e),Hz(t);var n=new Vz,r=0;return Gz(e,function(s){var a=t(s,r++);$z(n,a)?Yz(Xz(n,a),s):qz(n,a,[s])}),n}});var jz=$_,Kz=jh,Zz=jz?{}.toString:function(){return"[object "+Kz(this)+"]"},Jz=$_,Qz=Ol,eH=Zz;Jz||Qz(Object.prototype,"toString",eH,{unsafe:!0});var tH=jh,nH=String,KT=function(i){if(tH(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return nH(i)},K_=xn,iH=C_,rH=KT,sH=Gh,oH=K_("".charAt),sS=K_("".charCodeAt),aH=K_("".slice),oS=function(i){return function(e,t){var n=rH(sH(e)),r=iH(t),s=n.length,a,l;return r<0||r>=s?i?"":void 0:(a=sS(n,r),a<55296||a>56319||r+1===s||(l=sS(n,r+1))<56320||l>57343?i?oH(n,r):a:i?aH(n,r,r+2):(a-55296<<10)+(l-56320)+65536)}},lH={codeAt:oS(!1),charAt:oS(!0)},cH=lH.charAt,uH=KT,ZT=Il,fH=z_,aS=H_,JT="String Iterator",hH=ZT.set,dH=ZT.getterFor(JT);fH(String,"String",function(i){hH(this,{type:JT,string:uH(i),index:0})},function(){var e=dH(this),t=e.string,n=e.index,r;return n>=t.length?aS(void 0,!0):(r=cH(t,n),e.index+=r.length,aS(r,!1))});var pH=Qi,iu=pH,mH=iu;mH.Map;var gH=Y_,_H=jT;gH("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},_H);var vH=iu;vH.Set;var xH=Pl,yH=Array.isArray||function(e){return xH(e)==="Array"},SH=xn,EH=jn,QT=Kn,MH=jh,bH=Qc,TH=ET,e1=function(){},t1=bH("Reflect","construct"),Z_=/^\s*(?:class|function)\b/,wH=SH(Z_.exec),AH=!Z_.test(e1),fc=function(e){if(!QT(e))return!1;try{return t1(e1,[],e),!0}catch{return!1}},n1=function(e){if(!QT(e))return!1;switch(MH(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return AH||!!wH(Z_,TH(e))}catch{return!0}};n1.sham=!0;var i1=!t1||EH(function(){var i;return fc(fc.call)||!fc(Object)||!fc(function(){i=!0})||i})?n1:fc,lS=yH,CH=i1,RH=Ui,PH=Er,LH=PH("species"),cS=Array,DH=function(i){var e;return lS(i)&&(e=i.constructor,CH(e)&&(e===cS||lS(e.prototype))?e=void 0:RH(e)&&(e=e[LH],e===null&&(e=void 0))),e===void 0?cS:e},IH=DH,OH=function(i,e){return new(IH(i))(e===0?0:e)},UH=Yh,NH=xn,FH=S_,BH=Jc,zH=Wh,HH=OH,uS=NH([].push),Vs=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,s=i===6,a=i===7,l=i===5||s;return function(u,f,h,p){for(var m=BH(u),g=FH(m),y=zH(g),x=UH(f,h),_=0,v=p||HH,w=e?v(u,y):t||a?v(u,0):void 0,T,E;y>_;_++)if((l||_ in g)&&(T=g[_],E=x(T,_,m),i))if(e)w[_]=E;else if(E)switch(i){case 3:return!0;case 5:return T;case 6:return _;case 2:uS(w,T)}else switch(i){case 4:return!1;case 7:uS(w,T)}return s?-1:n||r?r:w}},kH={forEach:Vs(0),map:Vs(1),filter:Vs(2),some:Vs(3),every:Vs(4),find:Vs(5),findIndex:Vs(6),filterReject:Vs(7)},GH=xn,fS=j_,xf=qh.getWeakData,WH=q_,VH=rs,$H=Ll,Kp=Ui,XH=Kh,r1=kH,hS=Ur,s1=Il,qH=s1.set,YH=s1.getterFor,jH=r1.find,KH=r1.findIndex,ZH=GH([].splice),JH=0,yf=function(i){return i.frozen||(i.frozen=new o1)},o1=function(){this.entries=[]},Zp=function(i,e){return jH(i.entries,function(t){return t[0]===e})};o1.prototype={get:function(i){var e=Zp(this,i);if(e)return e[1]},has:function(i){return!!Zp(this,i)},set:function(i,e){var t=Zp(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=KH(this.entries,function(t){return t[0]===i});return~e&&ZH(this.entries,e,1),!!~e}};var QH={getConstructor:function(i,e,t,n){var r=i(function(u,f){WH(u,s),qH(u,{type:e,id:JH++,frozen:void 0}),$H(f)||XH(f,u[n],{that:u,AS_ENTRIES:t})}),s=r.prototype,a=YH(e),l=function(u,f,h){var p=a(u),m=xf(VH(f),!0);return m===!0?yf(p).set(f,h):m[p.id]=h,u};return fS(s,{delete:function(u){var f=a(this);if(!Kp(u))return!1;var h=xf(u);return h===!0?yf(f).delete(u):h&&hS(h,f.id)&&delete h[f.id]},has:function(f){var h=a(this);if(!Kp(f))return!1;var p=xf(f);return p===!0?yf(h).has(f):p&&hS(p,h.id)}}),fS(s,t?{get:function(f){var h=a(this);if(Kp(f)){var p=xf(f);return p===!0?yf(h).get(f):p?p[h.id]:void 0}},set:function(f,h){return l(this,f,h)}}:{add:function(f){return l(this,f,!0)}}),r}},ek=BT,dS=Qi,uh=xn,pS=j_,tk=qh,nk=Y_,a1=QH,Sf=Ui,Ef=Il.enforce,ik=jn,rk=mT,ru=Object,sk=Array.isArray,Mf=ru.isExtensible,l1=ru.isFrozen,ok=ru.isSealed,c1=ru.freeze,ak=ru.seal,lk=!dS.ActiveXObject&&"ActiveXObject"in dS,hc,u1=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},f1=nk("WeakMap",u1,a1),tl=f1.prototype,fh=uh(tl.set),ck=function(){return ek&&ik(function(){var i=c1([]);return fh(new f1,i,1),!l1(i)})};if(rk)if(lk){hc=a1.getConstructor(u1,"WeakMap",!0),tk.enable();var mS=uh(tl.delete),bf=uh(tl.has),gS=uh(tl.get);pS(tl,{delete:function(i){if(Sf(i)&&!Mf(i)){var e=Ef(this);return e.frozen||(e.frozen=new hc),mS(this,i)||e.frozen.delete(i)}return mS(this,i)},has:function(e){if(Sf(e)&&!Mf(e)){var t=Ef(this);return t.frozen||(t.frozen=new hc),bf(this,e)||t.frozen.has(e)}return bf(this,e)},get:function(e){if(Sf(e)&&!Mf(e)){var t=Ef(this);return t.frozen||(t.frozen=new hc),bf(this,e)?gS(this,e):t.frozen.get(e)}return gS(this,e)},set:function(e,t){if(Sf(e)&&!Mf(e)){var n=Ef(this);n.frozen||(n.frozen=new hc),bf(this,e)?fh(this,e,t):n.frozen.set(e,t)}else fh(this,e,t);return this}})}else ck()&&pS(tl,{set:function(e,t){var n;return sk(e)&&(l1(e)?n=c1:ok(e)&&(n=ak)),fh(this,e,t),n&&n(e),this}});var uk=iu;uk.WeakMap;var fk=rs,hk=WT,dk=function(i,e,t,n){try{return n?e(fk(t)[0],t[1]):e(t)}catch(r){hk(i,"throw",r)}},pk=er,mk=Nr,gk=$h,_k=function(i,e,t){pk?mk.f(i,e,gk(0,t)):i[e]=t},vk=Yh,xk=Os,yk=Jc,Sk=dk,Ek=HT,Mk=i1,bk=Wh,_S=_k,Tk=GT,wk=X_,vS=Array,Ak=function(e){var t=yk(e),n=Mk(this),r=arguments.length,s=r>1?arguments[1]:void 0,a=s!==void 0;a&&(s=vk(s,r>2?arguments[2]:void 0));var l=wk(t),u=0,f,h,p,m,g,y;if(l&&!(this===vS&&Ek(l)))for(m=Tk(t,l),g=m.next,h=n?new this:[];!(p=xk(g,m)).done;u++)y=a?Sk(m,s,[p.value,u],!0):p.value,_S(h,u,y);else for(f=bk(t),h=n?new this(f):vS(f);f>u;u++)y=a?s(t[u],u):t[u],_S(h,u,y);return h.length=u,h},Ck=Ul,Rk=Ak,Pk=XT,Lk=!Pk(function(i){Array.from(i)});Ck({target:"Array",stat:!0,forced:Lk},{from:Rk});var Dk=iu;Dk.Array.from;var xS=er,Ik=xn,Ok=Os,Uk=jn,Jp=hT,Nk=F_,Fk=O_,Bk=Jc,zk=S_,Na=Object.assign,yS=Object.defineProperty,Hk=Ik([].concat),kk=!Na||Uk(function(){if(xS&&Na({b:1},Na(yS({},"a",{enumerable:!0,get:function(){yS(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),Na({},i)[t]!==7||Jp(Na({},e)).join("")!==n})?function(e,t){for(var n=Bk(e),r=arguments.length,s=1,a=Nk.f,l=Fk.f;r>s;)for(var u=zk(arguments[s++]),f=a?Hk(Jp(u),a(u)):Jp(u),h=f.length,p=0,m;h>p;)m=f[p++],(!xS||Ok(l,u,m))&&(n[m]=u[m]);return n}:Na,Gk=Ul,SS=kk;Gk({target:"Object",stat:!0,arity:2,forced:Object.assign!==SS},{assign:SS});var Wk=iu;Wk.Object.assign;var Tf,Rh=new WeakMap;function h1(){if(Tf!==void 0)return Tf;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return Tf=i?{passive:!1}:!1,Tf}function Nl(i){var e=Rh.get(i)||[];return Rh.set(i,e),function(n,r,s){function a(l){l.defaultPrevented||s(l)}r.split(/\s+/g).forEach(function(l){e.push({elem:n,eventName:l,handler:a}),n.addEventListener(l,a,h1())})}}function Vk(i){var e=Rh.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,s=t.handler;n.removeEventListener(r,s,h1())}),Rh.delete(i))}function $k(i){return i.touches?i.touches[i.touches.length-1]:i}function ml(i){var e=$k(i);return{x:e.clientX,y:e.clientY}}function wf(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var d1=["webkit","moz","ms","o"],Xk=new RegExp("^-(?!(?:"+d1.join("|")+")-)");function qk(i){var e={};return Object.keys(i).forEach(function(t){if(!Xk.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,d1.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function ua(i,e){e=qk(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,s){return s.toUpperCase()});i.style[n]=e[t]})}var Yk=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=ml(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,s=t.lastPosition,a=Date.now(),l=ml(e),u={x:-(l.x-s.x),y:-(l.y-s.y)},f=a-r||16.7,h=u.x/f*16.7,p=u.y/f*16.7;n.x=h*this.velocityMultiplier,n.y=p*this.velocityMultiplier,this.delta=u,this.updateTime=a,this.lastPosition=l},i}(),jk=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?es({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?es({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(s){for(var a=Math.abs(r[s])<=10?0:r[s];a!==0;)n[s]+=a,a=a*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new Yk(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function Sr(i,e,t){return Math.max(e,Math.min(t,i))}function p1(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var a=this,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];if(t){var f=Date.now(),h=f-r;r=f,h>=e&&i.apply(this,l)}clearTimeout(n),n=setTimeout(function(){i.apply(a,l)},e)}}function ES(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(s){Object.defineProperty(this,r,{value:Sr(s,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function Qp(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function m1(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var s=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:p1.apply(void 0,aO([s],i))}),this[n]}}}}var Kk=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),zo([ES(0,1)],i.prototype,"damping",void 0),zo([ES(0,1/0)],i.prototype,"thumbMinSize",void 0),zo([Qp],i.prototype,"renderByPixels",void 0),zo([Qp],i.prototype,"alwaysShowTracks",void 0),zo([Qp],i.prototype,"continuousScrolling",void 0),i}(),Tl;(function(i){i.X="x",i.Y="y"})(Tl||(Tl={}));var Zk=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),ua(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case Tl.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case Tl.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),MS=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new Zk(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){ua(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),Jk=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new MS(Tl.X,t),this.yAxis=new MS(Tl.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},zo([m1(300)],i.prototype,"autoHideOnIdle",null),i}();function Qk(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(l){return n[l]?parseFloat(n[l]):0}),s=r[0]+r[1],a=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+a,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function eG(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),s=Math.max(t.left,n.left),a=Math.min(t.right,n.right),l=Math.min(t.bottom,n.bottom);return r<l&&s<a}function tG(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function nG(i,e,t){var n=i.options,r=i.offset,s=i.limit,a=i.track,l=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=Sr(e,0,s.x),t=Sr(t,0,s.y),e!==r.x&&a.xAxis.show(),t!==r.y&&a.yAxis.show(),n.alwaysShowTracks||a.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,ua(l,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),a.update(),{offset:es({},r),limit:es({},s)})}var bS=new WeakMap;function iG(i,e,t,n,r){n===void 0&&(n=0);var s=r===void 0?{}:r,a=s.easing,l=a===void 0?rG:a,u=s.callback,f=i.options,h=i.offset,p=i.limit;f.renderByPixels&&(e=Math.round(e),t=Math.round(t));var m=h.x,g=h.y,y=Sr(e,0,p.x)-m,x=Sr(t,0,p.y)-g,_=Date.now();function v(){var w=Date.now()-_,T=n?l(Math.min(w/n,1)):1;if(i.setPosition(m+y*T,g+x*T),w>=n)typeof u=="function"&&u.call(i);else{var E=requestAnimationFrame(v);bS.set(i,E)}}cancelAnimationFrame(bS.get(i)),v()}function rG(i){return Math.pow(i-1,3)+1}function sG(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,s=r===void 0?!0:r,a=n.onlyScrollIfNeeded,l=a===void 0?!1:a,u=n.offsetTop,f=u===void 0?0:u,h=n.offsetLeft,p=h===void 0?0:h,m=n.offsetBottom,g=m===void 0?0:m,y=i.containerEl,x=i.bounding,_=i.offset,v=i.limit;if(!(!e||!y.contains(e))){var w=e.getBoundingClientRect();if(!(l&&i.isVisible(e))){var T=s?w.top-x.top-f:w.bottom-x.bottom+g;i.setMomentum(w.left-x.left-p,Sr(T,-_.y,v.y-_.y))}}}var g1=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=es(es({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return es({},e)},i.pluginName="",i.defaultOptions={},i}(),Ph={order:new Set,constructors:{}};function oG(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Ph.order.add(n),Ph.constructors[n]=t})}function aG(i,e){return Array.from(Ph.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Ph.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var hr;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(hr||(hr={}));function lG(i){var e=Nl(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!fG(r)){var s=cG(i,n.keyCode||n.which);if(s){var a=s[0],l=s[1];i.addTransformableMomentum(a,l,n,function(u){u?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function cG(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case hr.TAB:return uG(i);case hr.SPACE:return[0,200];case hr.PAGE_UP:return[0,-t.container.height+40];case hr.PAGE_DOWN:return[0,t.container.height-40];case hr.END:return[0,n.y-r.y];case hr.HOME:return[0,-r.y];case hr.LEFT:return[-40,0];case hr.UP:return[0,-40];case hr.RIGHT:return[40,0];case hr.DOWN:return[0,40];default:return null}}function uG(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function fG(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var Gr;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(Gr||(Gr={}));function hG(i){var e=Nl(i),t=i.containerEl,n=i.track,r=n.xAxis,s=n.yAxis;function a(g,y){var x=i.size,_=i.limit,v=i.offset;if(g===Gr.X){var w=x.container.width+(r.thumb.realSize-r.thumb.displaySize);return Sr(y/w*x.content.width,0,_.x)-v.x}if(g===Gr.Y){var T=x.container.height+(s.thumb.realSize-s.thumb.displaySize);return Sr(y/T*x.content.height,0,_.y)-v.y}return 0}function l(g){if(wf(g,[r.element,r.thumb.element]))return Gr.X;if(wf(g,[s.element,s.thumb.element]))return Gr.Y}var u,f,h,p,m;e(t,"click",function(g){if(!(f||!wf(g.target,[r.element,s.element]))){var y=g.target,x=l(y),_=y.getBoundingClientRect(),v=ml(g);if(x===Gr.X){var w=v.x-_.left-r.thumb.displaySize/2;i.setMomentum(a(x,w),0)}if(x===Gr.Y){var w=v.y-_.top-s.thumb.displaySize/2;i.setMomentum(0,a(x,w))}}}),e(t,"mousedown",function(g){if(wf(g.target,[r.thumb.element,s.thumb.element])){u=!0;var y=g.target,x=ml(g),_=y.getBoundingClientRect();p=l(y),h={x:x.x-_.left,y:x.y-_.top},m=t.getBoundingClientRect(),ua(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(g){if(u){f=!0;var y=ml(g);if(p===Gr.X){var x=y.x-h.x-m.left;i.setMomentum(a(p,x),0)}if(p===Gr.Y){var x=y.y-h.y-m.top;i.setMomentum(0,a(p,x))}}}),e(window,"mouseup blur",function(){u=f=!1,ua(i.containerEl,{"-user-select":""})})}function dG(i){var e=Nl(i);e(window,"resize",p1(i.update.bind(i),300))}function pG(i){var e=Nl(i),t=i.containerEl,n=i.contentEl,r=!1,s=!1,a;function l(u){var f=u.x,h=u.y;if(!(!f&&!h)){var p=i.offset,m=i.limit;i.setMomentum(Sr(p.x+f,0,m.x)-p.x,Sr(p.y+h,0,m.y)-p.y),a=requestAnimationFrame(function(){l({x:f,y:h})})}}e(window,"mousemove",function(u){if(r){cancelAnimationFrame(a);var f=mG(i,u);l(f)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(a),r=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(a),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(a),r=!1,s=!1}),e(t,"scroll",function(u){u.preventDefault(),t.scrollTop=t.scrollLeft=0})}function mG(i,e){var t=i.bounding,n=t.top,r=t.right,s=t.bottom,a=t.left,l=ml(e),u=l.x,f=l.y,h={x:0,y:0},p=20;return u===0&&f===0||(u>r-p?h.x=u-r+p:u<a+p&&(h.x=u-a-p),f>s-p?h.y=f-s+p:f<n+p&&(h.y=f-n-p),h.x*=2,h.y*=2),h}var Af;function gG(i){var e=i.options.delegateTo||i.containerEl,t=new jk,n=Nl(i),r,s=0;n(e,"touchstart",function(a){t.track(a),i.setMomentum(0,0),s===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),s++}),n(e,"touchmove",function(a){if(!(Af&&Af!==i)){t.update(a);var l=t.getDelta(),u=l.x,f=l.y;i.addTransformableMomentum(u,f,a,function(h){h&&a.cancelable&&(a.preventDefault(),Af=i)})}}),n(e,"touchcancel touchend",function(a){var l=t.getEasingDistance(r);i.addTransformableMomentum(l.x,l.y,a),s--,s===0&&(i.options.damping=r),t.release(a),Af=null})}function _G(i){var e=Nl(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var s=xG(r),a=s.x,l=s.y;i.addTransformableMomentum(a,l,r,function(u){u&&r.preventDefault()})})}var dc={STANDARD:1,OTHERS:-3},TS=[1,28,500],vG=function(i){return TS[i]||TS[0]};function xG(i){if("deltaX"in i){var e=vG(i.deltaMode);return{x:i.deltaX/dc.STANDARD*e,y:i.deltaY/dc.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/dc.OTHERS,y:i.wheelDeltaY/dc.OTHERS}:{x:0,y:i.wheelDelta/dc.OTHERS}}const wS=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:lG,mouseHandler:hG,resizeHandler:dG,selectHandler:pG,touchHandler:gG,wheelHandler:_G},Symbol.toStringTag,{value:"Module"}));var $r=new Map,AS=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new Kk(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),ua(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(u){r.appendChild(u)}),e.appendChild(r),this.track=new Jk(this),this.size=this.getSize(),this._plugins=aG(this,this.options.plugins);var s=e.scrollLeft,a=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,a,{withoutCallbacks:!0});var l=window.ResizeObserver;typeof l=="function"&&(this._observer=new l(function(){n.update()}),this._observer.observe(r)),$r.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=$r.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return Qk(this)},i.prototype.update=function(){tG(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return eG(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=nG(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(a){a.call(r,s)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),iG(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),sG(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var s=this._plugins.reduce(function(l,u){return u.transformDelta(l,n)||l},{x:e,y:t}),a=!this._shouldPropagateMomentum(s.x,s.y);a&&this.addMomentum(s.x,s.y),r&&r.call(this,a)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;Vk(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),$r.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(s){t.appendChild(s)}),ua(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(wS).forEach(function(t){wS[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,s=n.offset,a=n.limit;if(!r.continuousScrolling)return!1;a.x===0&&a.y===0&&this._updateDebounced();var l=Sr(e+s.x,0,a.x),u=Sr(t+s.y,0,a.y),f=!0;return f=f&&l===s.x,f=f&&u===s.y,f=f&&(s.x===a.x||s.x===0||s.y===a.y||s.y===0),f},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=es({},this._momentum);this._plugins.forEach(function(s){s.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,s=t._momentum,a=r[e],l=s[e];if(Math.abs(l)<=.1)return{momentum:0,position:a+l};var u=l*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:a+l-u}},zo([m1(100,!0)],i.prototype,"_updateDebounced",null),i}(),yG="rgba(222, 222, 222, .75)",SG="rgba(0, 0, 0, .5)",EG=`
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
  background: `+yG+`;
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
  background: `+SG+`;
  border-radius: 4px;
}
`,_1="smooth-scrollbar-style",Lh=!1;function CS(){if(!(Lh||typeof window>"u")){var i=document.createElement("style");i.id=_1,i.textContent=EG,document.head&&document.head.appendChild(i),Lh=!0}}function MG(){if(!(!Lh||typeof window>"u")){var i=document.getElementById(_1);!i||!i.parentNode||(i.parentNode.removeChild(i),Lh=!1)}}var RS=function(i){oO(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return CS(),$r.has(t)?$r.get(t):new AS(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return $r.has(t)},e.get=function(t){return $r.get(t)},e.getAll=function(){return Array.from($r.values())},e.destroy=function(t){var n=$r.get(t);n&&n.destroy()},e.destroyAll=function(){$r.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return oG.apply(void 0,t)},e.attachStyle=function(){return CS()},e.detachStyle=function(){return MG()},e.version="8.8.4",e.ScrollbarPlugin=g1,e}(AS);const vn={humbergerBtnSelector:"button.Header__Icon",logoSelector:"Header__LogoImage",buttonParent:"Header__FlexItem",svgCart:"cart",sidebarBtnConfig:{attributes:{"data-action":"close-drawer","data-drawer-id":"sidebar-cart","aria-label":"カートを閉じる"},classes:["Drawer__Close","Icon-Wrapper--clickable"]},svg:{cartDesktop:"cartDesktopSvg",cartPhone:"cartPhoneSvg"},page:{breakpoint:769},time:{debounce:250},phone:{width:"20",height:"15",rectWidth:"20",rectHeight:"1"},tabletAndUp:{width:"30",height:"25",rectWidth:"30",rectHeight:"2"},logo:{white:"./logo-white.png",black:"./logo-black.png",phone:"18px",tablet:"24px"},target:{pageContainer:"page-container",header:"section-header",announcement:"section-announcement"},rootProperty:{headerHeight:"--header-height",announcementHeight:"--announcement-bar-height"}};var v1={exports:{}},em={exports:{}},tm={exports:{}},nm={exports:{}},PS;function J_(){return PS||(PS=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:an,function(){function e(){}let t=e.prototype;return t.on=function(n,r){if(!n||!r)return this;let s=this._events=this._events||{},a=s[n]=s[n]||[];return a.includes(r)||a.push(r),this},t.once=function(n,r){if(!n||!r)return this;this.on(n,r);let s=this._onceEvents=this._onceEvents||{},a=s[n]=s[n]||{};return a[r]=!0,this},t.off=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;let a=s.indexOf(r);return a!=-1&&s.splice(a,1),this},t.emitEvent=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;s=s.slice(0),r=r||[];let a=this._onceEvents&&this._onceEvents[n];for(let l of s)a&&a[l]&&(this.off(n,l),delete a[l]),l.apply(this,r);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(nm)),nm.exports}var im={exports:{}};/*!
 * Infinite Scroll v2.0.4
 * measure size of elements
 * MIT license
 */var LS;function x1(){return LS||(LS=1,function(i){(function(e,t){i.exports?i.exports=t():e.getSize=t()})(window,function(){function t(a){let l=parseFloat(a);return a.indexOf("%")==-1&&!isNaN(l)&&l}let n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];function r(){let a={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return n.forEach(l=>{a[l]=0}),a}function s(a){if(typeof a=="string"&&(a=document.querySelector(a)),!(a&&typeof a=="object"&&a.nodeType))return;let u=getComputedStyle(a);if(u.display=="none")return r();let f={};f.width=a.offsetWidth,f.height=a.offsetHeight;let h=f.isBorderBox=u.boxSizing=="border-box";n.forEach(T=>{let E=u[T],C=parseFloat(E);f[T]=isNaN(C)?0:C});let p=f.paddingLeft+f.paddingRight,m=f.paddingTop+f.paddingBottom,g=f.marginLeft+f.marginRight,y=f.marginTop+f.marginBottom,x=f.borderLeftWidth+f.borderRightWidth,_=f.borderTopWidth+f.borderBottomWidth,v=t(u.width);v!==!1&&(f.width=v+(h?0:p+x));let w=t(u.height);return w!==!1&&(f.height=w+(h?0:m+_)),f.innerWidth=f.width-(p+x),f.innerHeight=f.height-(m+_),f.outerWidth=f.width+g,f.outerHeight=f.height+y,f}return s})}(im)),im.exports}var rm={exports:{}},DS;function da(){return DS||(DS=1,function(i){(function(e,t){i.exports?i.exports=t(e):e.fizzyUIUtils=t(e)})(an,function(t){let n={};n.extend=function(s,a){return Object.assign(s,a)},n.modulo=function(s,a){return(s%a+a)%a},n.makeArray=function(s){return Array.isArray(s)?s:s==null?[]:typeof s=="object"&&typeof s.length=="number"?[...s]:[s]},n.removeFrom=function(s,a){let l=s.indexOf(a);l!=-1&&s.splice(l,1)},n.getParent=function(s,a){for(;s.parentNode&&s!=document.body;)if(s=s.parentNode,s.matches(a))return s},n.getQueryElement=function(s){return typeof s=="string"?document.querySelector(s):s},n.handleEvent=function(s){let a="on"+s.type;this[a]&&this[a](s)},n.filterFindElements=function(s,a){return s=n.makeArray(s),s.filter(l=>l instanceof HTMLElement).reduce((l,u)=>{if(!a)return l.push(u),l;u.matches(a)&&l.push(u);let f=u.querySelectorAll(a);return l=l.concat(...f),l},[])},n.debounceMethod=function(s,a,l){l=l||100;let u=s.prototype[a],f=a+"Timeout";s.prototype[a]=function(){clearTimeout(this[f]);let h=arguments;this[f]=setTimeout(()=>{u.apply(this,h),delete this[f]},l)}},n.docReady=function(s){let a=document.readyState;a=="complete"||a=="interactive"?setTimeout(s):document.addEventListener("DOMContentLoaded",s)},n.toDashed=function(s){return s.replace(/(.)([A-Z])/g,function(a,l,u){return l+"-"+u}).toLowerCase()};let r=t.console;return n.htmlInit=function(s,a){n.docReady(function(){let u="data-"+n.toDashed(a),f=document.querySelectorAll(`[${u}]`),h=t.jQuery;[...f].forEach(p=>{let m=p.getAttribute(u),g;try{g=m&&JSON.parse(m)}catch(x){r&&r.error(`Error parsing ${u} on ${p.className}: ${x}`);return}let y=new s(p,g);h&&h.data(p,a,y)})})},n})}(rm)),rm.exports}var sm={exports:{}},IS;function bG(){return IS||(IS=1,function(i){(function(e,t){i.exports?i.exports=t(x1()):(e.Flickity=e.Flickity||{},e.Flickity.Cell=t(e.getSize))})(typeof window<"u"?window:an,function(t){const n="flickity-cell";function r(a){this.element=a,this.element.classList.add(n),this.x=0,this.unselect()}let s=r.prototype;return s.destroy=function(){this.unselect(),this.element.classList.remove(n),this.element.style.transform="",this.element.removeAttribute("aria-hidden")},s.getSize=function(){this.size=t(this.element)},s.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},s.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},s.remove=function(){this.element.remove()},r})}(sm)),sm.exports}var om={exports:{}},OS;function TG(){return OS||(OS=1,function(i){(function(e,t){i.exports?i.exports=t():(e.Flickity=e.Flickity||{},e.Flickity.Slide=t())})(typeof window<"u"?window:an,function(){function t(r,s,a){this.beginMargin=r,this.endMargin=s,this.cellAlign=a,this.cells=[],this.outerWidth=0,this.height=0}let n=t.prototype;return n.addCell=function(r){this.cells.push(r),this.outerWidth+=r.size.outerWidth,this.height=Math.max(r.size.outerHeight,this.height),this.cells.length===1&&(this.x=r.x,this.firstMargin=r.size[this.beginMargin])},n.updateTarget=function(){let r=this.getLastCell(),s=r?r.size[this.endMargin]:0,a=this.outerWidth-(this.firstMargin+s);this.target=this.x+this.firstMargin+a*this.cellAlign},n.getLastCell=function(){return this.cells[this.cells.length-1]},n.select=function(){this.cells.forEach(r=>r.select())},n.unselect=function(){this.cells.forEach(r=>r.unselect())},n.getCellElements=function(){return this.cells.map(r=>r.element)},t})}(om)),om.exports}var am={exports:{}},US;function wG(){return US||(US=1,function(i){(function(e,t){i.exports?i.exports=t(da()):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=t(e.fizzyUIUtils))})(typeof window<"u"?window:an,function(t){let n={};return n.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},n.animate=function(){this.applyDragForce(),this.applySelectedAttraction();let r=this.x;this.integratePhysics(),this.positionSlider(),this.settle(r),this.isAnimating&&requestAnimationFrame(()=>this.animate())},n.positionSlider=function(){let r=this.x;this.isWrapping&&(r=t.modulo(r,this.slideableWidth)-this.slideableWidth,this.shiftWrapCells(r)),this.setTranslateX(r,this.isAnimating),this.dispatchScrollEvent()},n.setTranslateX=function(r,s){r+=this.cursorPosition,this.options.rightToLeft&&(r=-r);let a=this.getPositionValue(r);this.slider.style.transform=s?`translate3d(${a},0,0)`:`translateX(${a})`},n.dispatchScrollEvent=function(){let r=this.slides[0];if(!r)return;let s=-this.x-r.target,a=s/this.slidesWidth;this.dispatchEvent("scroll",null,[a,s])},n.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},n.getPositionValue=function(r){return this.options.percentPosition?Math.round(r/this.size.innerWidth*1e4)*.01+"%":Math.round(r)+"px"},n.settle=function(r){!this.isPointerDown&&Math.round(this.x*100)===Math.round(r*100)&&this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},n.shiftWrapCells=function(r){let s=this.cursorPosition+r;this._shiftCells(this.beforeShiftCells,s,-1);let a=this.size.innerWidth-(r+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,a,1)},n._shiftCells=function(r,s,a){r.forEach(l=>{let u=s>0?a:0;this._wrapShiftCell(l,u),s-=l.size.outerWidth})},n._unshiftCells=function(r){!r||!r.length||r.forEach(s=>this._wrapShiftCell(s,0))},n._wrapShiftCell=function(r,s){this._renderCellPosition(r,r.x+this.slideableWidth*s)},n.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},n.applyForce=function(r){this.velocity+=r},n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown)return;let s=this.dragX-this.x-this.velocity;this.applyForce(s)},n.applySelectedAttraction=function(){if(this.isDraggable&&this.isPointerDown||this.isFreeScrolling||!this.slides.length)return;let a=(this.selectedSlide.target*-1-this.x)*this.options.selectedAttraction;this.applyForce(a)},n})}(am)),am.exports}var NS;function vo(){return NS||(NS=1,function(i){(function(e,t){if(i.exports)i.exports=t(e,J_(),x1(),da(),bG(),TG(),wG());else{let n=e.Flickity;e.Flickity=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,n.Cell,n.Slide,n.animatePrototype)}})(typeof window<"u"?window:an,function(t,n,r,s,a,l,u){const{getComputedStyle:f,console:h}=t;let{jQuery:p}=t,m=0,g={};function y(E,C){let R=s.getQueryElement(E);if(!R){h&&h.error(`Bad element for Flickity: ${R||E}`);return}if(this.element=R,this.element.flickityGUID){let A=g[this.element.flickityGUID];return A&&A.option(C),A}p&&(this.$element=p(this.element)),this.options={...this.constructor.defaults},this.option(C),this._create()}y.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},y.create={};let x=y.prototype;Object.assign(x,n.prototype),x._create=function(){let{resize:E,watchCSS:C,rightToLeft:R}=this.options,A=this.guid=++m;this.element.flickityGUID=A,g[A]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.beginMargin=R?"marginRight":"marginLeft",this.endMargin=R?"marginLeft":"marginRight",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),this.focusableElems=[this.element],(E||C)&&t.addEventListener("resize",this);for(let z in this.options.on){let G=this.options.on[z];this.on(z,G)}for(let z in y.create)y.create[z].call(this);C?this.watchCSS():this.activate()},x.option=function(E){Object.assign(this.options,E)},x.activate=function(){if(this.isActive)return;this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();let E=this._filterFindCellElements(this.element.children);this.slider.append(...E),this.viewport.append(this.slider),this.element.append(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready")},x._createSlider=function(){let E=document.createElement("div");E.className="flickity-slider",this.slider=E},x._filterFindCellElements=function(E){return s.filterFindElements(E,this.options.cellSelector)},x.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize()},x._makeCells=function(E){return this._filterFindCellElements(E).map(R=>new a(R))},x.getLastCell=function(){return this.cells[this.cells.length-1]},x.getLastSlide=function(){return this.slides[this.slides.length-1]},x.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},x._positionCells=function(E){E=E||0,this.maxCellHeight=E&&this.maxCellHeight||0;let C=0;if(E>0){let R=this.cells[E-1];C=R.x+R.size.outerWidth}this.cells.slice(E).forEach(R=>{R.x=C,this._renderCellPosition(R,C),C+=R.size.outerWidth,this.maxCellHeight=Math.max(R.size.outerHeight,this.maxCellHeight)}),this.slideableWidth=C,this.updateSlides(),this._containSlides(),this.slidesWidth=this.cells.length?this.getLastSlide().target-this.slides[0].target:0},x._renderCellPosition=function(E,C){let R=this.options.rightToLeft?-1:1,A=C*R;this.options.percentPosition&&(A*=this.size.innerWidth/E.size.width);let z=this.getPositionValue(A);E.element.style.transform=`translateX( ${z} )`},x._sizeCells=function(E){E.forEach(C=>C.getSize())},x.updateSlides=function(){if(this.slides=[],!this.cells.length)return;let{beginMargin:E,endMargin:C}=this,R=new l(E,C,this.cellAlign);this.slides.push(R);let A=this._getCanCellFit();this.cells.forEach((z,G)=>{if(!R.cells.length){R.addCell(z);return}let M=R.outerWidth-R.firstMargin+(z.size.outerWidth-z.size[C]);A(G,M)||(R.updateTarget(),R=new l(E,C,this.cellAlign),this.slides.push(R)),R.addCell(z)}),R.updateTarget(),this.updateSelectedSlide()},x._getCanCellFit=function(){let{groupCells:E}=this.options;if(!E)return()=>!1;if(typeof E=="number"){let z=parseInt(E,10);return G=>G%z!==0}let C=1,R=typeof E=="string"&&E.match(/^(\d+)%$/);R&&(C=parseInt(R[1],10)/100);let A=(this.size.innerWidth+1)*C;return(z,G)=>G<=A},x._init=x.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},x.getSize=function(){this.size=r(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};let _={left:0,center:.5,right:1};x.setCellAlign=function(){let{cellAlign:E,rightToLeft:C}=this.options,R=_[E];this.cellAlign=R!==void 0?R:E,C&&(this.cellAlign=1-this.cellAlign)},x.setGallerySize=function(){if(!this.options.setGallerySize)return;let E=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=`${E}px`},x._updateWrapShiftCells=function(){if(this.isWrapping=this.getIsWrapping(),!this.isWrapping)return;this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);let E=this.cursorPosition,C=this.cells.length-1;this.beforeShiftCells=this._getGapCells(E,C,-1);let R=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(R,0,1)},x.getIsWrapping=function(){let{wrapAround:E}=this.options;if(!E||this.slides.length<2)return!1;if(E!=="fill")return!0;let C=this.slideableWidth-this.size.innerWidth;if(C>this.size.innerWidth)return!0;for(let R of this.cells)if(R.size.outerWidth>C)return!1;return!0},x._getGapCells=function(E,C,R){let A=[];for(;E>0;){let z=this.cells[C];if(!z)break;A.push(z),C+=R,E-=z.size.outerWidth}return A},x._containSlides=function(){if(!(this.options.contain&&!this.isWrapping&&this.cells.length))return;let C=this.slideableWidth-this.getLastCell().size[this.endMargin];if(C<this.size.innerWidth)this.slides.forEach(A=>{A.target=C*this.cellAlign});else{let A=this.cursorPosition+this.cells[0].size[this.beginMargin],z=C-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(G=>{G.target=Math.max(G.target,A),G.target=Math.min(G.target,z)})}},x.dispatchEvent=function(E,C,R){let A=C?[C].concat(R):R;if(this.emitEvent(E,A),p&&this.$element){E+=this.options.namespaceJQueryEvents?".flickity":"";let z=E;if(C){let G=new p.Event(C);G.type=E,z=G}this.$element.trigger(z,R)}};const v=["dragStart","dragMove","dragEnd","pointerDown","pointerMove","pointerEnd","staticClick"];let w=x.emitEvent;x.emitEvent=function(E,C){if(E==="staticClick"){let G=this.getParentCell(C[0].target),M=G&&G.element,U=G&&this.cells.indexOf(G);C=C.concat(M,U)}if(w.call(this,E,C),!v.includes(E)||!p||!this.$element)return;E+=this.options.namespaceJQueryEvents?".flickity":"";let A=C.shift(0),z=new p.Event(A);z.type=E,this.$element.trigger(z,C)},x.select=function(E,C,R){if(!this.isActive||(E=parseInt(E,10),this._wrapSelect(E),(this.isWrapping||C)&&(E=s.modulo(E,this.slides.length)),!this.slides[E]))return;let A=this.selectedIndex;this.selectedIndex=E,this.updateSelectedSlide(),R?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[E]),E!==A&&this.dispatchEvent("change",null,[E])},x._wrapSelect=function(E){if(!this.isWrapping)return;const{selectedIndex:C,slideableWidth:R,slides:{length:A}}=this;if(!this.isDragSelect){let z=s.modulo(E,A),G=Math.abs(z-C),M=Math.abs(z+A-C),U=Math.abs(z-A-C);M<G?E+=A:U<G&&(E-=A)}E<0?this.x-=R:E>=A&&(this.x+=R)},x.previous=function(E,C){this.select(this.selectedIndex-1,E,C)},x.next=function(E,C){this.select(this.selectedIndex+1,E,C)},x.updateSelectedSlide=function(){let E=this.slides[this.selectedIndex];E&&(this.unselectSelectedSlide(),this.selectedSlide=E,E.select(),this.selectedCells=E.cells,this.selectedElements=E.getCellElements(),this.selectedCell=E.cells[0],this.selectedElement=this.selectedElements[0])},x.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},x.selectInitialIndex=function(){let E=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,!1,!0);return}if(E&&typeof E=="string"&&this.queryCell(E)){this.selectCell(E,!1,!0);return}let C=0;E&&this.slides[E]&&(C=E),this.select(C,!1,!0)},x.selectCell=function(E,C,R){let A=this.queryCell(E);if(!A)return;let z=this.getCellSlideIndex(A);this.select(z,C,R)},x.getCellSlideIndex=function(E){let C=this.slides.find(R=>R.cells.includes(E));return this.slides.indexOf(C)},x.getCell=function(E){for(let C of this.cells)if(C.element===E)return C},x.getCells=function(E){return E=s.makeArray(E),E.map(C=>this.getCell(C)).filter(Boolean)},x.getCellElements=function(){return this.cells.map(E=>E.element)},x.getParentCell=function(E){let C=this.getCell(E);if(C)return C;let R=E.closest(".flickity-slider > *");return this.getCell(R)},x.getAdjacentCellElements=function(E,C){if(!E)return this.selectedSlide.getCellElements();C=C===void 0?this.selectedIndex:C;let R=this.slides.length;if(1+E*2>=R)return this.getCellElements();let A=[];for(let z=C-E;z<=C+E;z++){let G=this.isWrapping?s.modulo(z,R):z,M=this.slides[G];M&&(A=A.concat(M.getCellElements()))}return A},x.queryCell=function(E){return typeof E=="number"?this.cells[E]:(typeof E=="string"&&!E.match(/^[#.]?[\d/]/)&&(E=this.element.querySelector(E)),this.getCell(E))},x.uiChange=function(){this.emitEvent("uiChange")},x.onresize=function(){this.watchCSS(),this.resize()},s.debounceMethod(y,"onresize",150),x.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging)return;this.getSize(),this.isWrapping&&(this.x=s.modulo(this.x,this.slideableWidth)),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");let E=this.selectedElements&&this.selectedElements[0];this.selectCell(E,!1,!0)},x.watchCSS=function(){if(!this.options.watchCSS)return;f(this.element,":after").content.includes("flickity")?this.activate():this.deactivate()},x.onkeydown=function(E){let{activeElement:C}=document,R=y.keyboardHandlers[E.key];if(!this.options.accessibility||!C||!R)return;this.focusableElems.some(z=>C===z)&&R.call(this)},y.keyboardHandlers={ArrowLeft:function(){this.uiChange();let E=this.options.rightToLeft?"next":"previous";this[E]()},ArrowRight:function(){this.uiChange();let E=this.options.rightToLeft?"previous":"next";this[E]()}},x.focus=function(){this.element.focus({preventScroll:!0})},x.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(E=>E.destroy()),this.viewport.remove(),this.element.append(...this.slider.children),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},x.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),p&&this.$element&&p.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete g[this.guid]},Object.assign(x,u),y.data=function(E){if(E=s.getQueryElement(E),E)return g[E.flickityGUID]},s.htmlInit(y,"flickity");let{jQueryBridget:T}=t;return p&&T&&T("flickity",y,p),y.setJQuery=function(E){p=E},y.Cell=a,y.Slide=l,y})}(tm)),tm.exports}var lm={exports:{}},cm={exports:{}};/*!
 * Unidragger v3.0.1
 * Draggable base class
 * MIT license
 */var FS;function AG(){return FS||(FS=1,function(i){(function(e,t){i.exports?i.exports=t(e,J_()):e.Unidragger=t(e,e.EvEmitter)})(typeof window<"u"?window:an,function(t,n){function r(){}let s=r.prototype=Object.create(n.prototype);s.handleEvent=function(h){let p="on"+h.type;this[p]&&this[p](h)};let a,l;"ontouchstart"in t?(a="touchstart",l=["touchmove","touchend","touchcancel"]):t.PointerEvent?(a="pointerdown",l=["pointermove","pointerup","pointercancel"]):(a="mousedown",l=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(h,p){this.handles.forEach(m=>{m[h](a,this),m[h]("click",this),t.PointerEvent&&(m.style.touchAction=p)})},s.bindActivePointerEvents=function(){l.forEach(h=>{t.addEventListener(h,this)})},s.unbindActivePointerEvents=function(){l.forEach(h=>{t.removeEventListener(h,this)})},s.withPointer=function(h,p){p.pointerId===this.pointerIdentifier&&this[h](p,p)},s.withTouch=function(h,p){let m;for(let g of p.changedTouches)g.identifier===this.pointerIdentifier&&(m=g);m&&this[h](p,m)},s.onmousedown=function(h){this.pointerDown(h,h)},s.ontouchstart=function(h){this.pointerDown(h,h.changedTouches[0])},s.onpointerdown=function(h){this.pointerDown(h,h)};const u=["TEXTAREA","INPUT","SELECT","OPTION"],f=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(h,p){let m=u.includes(h.target.nodeName),g=f.includes(h.target.type),y=!m||g;!this.isPointerDown&&!h.button&&y&&(this.isPointerDown=!0,this.pointerIdentifier=p.pointerId!==void 0?p.pointerId:p.identifier,this.pointerDownPointer={pageX:p.pageX,pageY:p.pageY},this.bindActivePointerEvents(),this.emitEvent("pointerDown",[h,p]))},s.onmousemove=function(h){this.pointerMove(h,h)},s.onpointermove=function(h){this.withPointer("pointerMove",h)},s.ontouchmove=function(h){this.withTouch("pointerMove",h)},s.pointerMove=function(h,p){let m={x:p.pageX-this.pointerDownPointer.pageX,y:p.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[h,p,m]),!this.isDragging&&this.hasDragStarted(m)&&this.dragStart(h,p),this.isDragging&&this.dragMove(h,p,m)},s.hasDragStarted=function(h){return Math.abs(h.x)>3||Math.abs(h.y)>3},s.dragStart=function(h,p){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[h,p])},s.dragMove=function(h,p,m){this.emitEvent("dragMove",[h,p,m])},s.onmouseup=function(h){this.pointerUp(h,h)},s.onpointerup=function(h){this.withPointer("pointerUp",h)},s.ontouchend=function(h){this.withTouch("pointerUp",h)},s.pointerUp=function(h,p){this.pointerDone(),this.emitEvent("pointerUp",[h,p]),this.isDragging?this.dragEnd(h,p):this.staticClick(h,p)},s.dragEnd=function(h,p){this.isDragging=!1,setTimeout(()=>delete this.isPreventingClicks),this.emitEvent("dragEnd",[h,p])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(h){this.withPointer("pointerCancel",h)},s.ontouchcancel=function(h){this.withTouch("pointerCancel",h)},s.pointerCancel=function(h,p){this.pointerDone(),this.emitEvent("pointerCancel",[h,p])},s.onclick=function(h){this.isPreventingClicks&&h.preventDefault()},s.staticClick=function(h,p){let m=h.type==="mouseup";m&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[h,p]),m&&(this.isIgnoringMouseUp=!0,setTimeout(()=>{delete this.isIgnoringMouseUp},400)))},r})}(cm)),cm.exports}var BS;function CG(){return BS||(BS=1,function(i){(function(e,t){i.exports?i.exports=t(e,vo(),AG(),da()):e.Flickity=t(e,e.Flickity,e.Unidragger,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n,r,s){Object.assign(n.defaults,{draggable:">1",dragThreshold:3});let a=n.prototype;Object.assign(a,r.prototype),a.touchActionValue="",n.create.drag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("pointerDown",this.handlePointerDone),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.on("staticClick",this.handleStaticClick)},a.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},a.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},a.updateDraggable=function(){this.options.draggable===">1"?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.element.classList.toggle("is-draggable",this.isDraggable)},a._uiChangeDrag=function(){delete this.isFreeScrolling},a.handlePointerDown=function(u){if(!this.isDraggable){this.bindActivePointerEvents(u);return}let f=u.type==="touchstart",h=u.pointerType==="touch",p=u.target.matches("input, textarea, select");!f&&!h&&!p&&u.preventDefault(),p||this.focus(),document.activeElement!==this.element&&document.activeElement.blur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),t.addEventListener("scroll",this),this.bindActivePointerEvents(u)},a.hasDragStarted=function(u){return Math.abs(u.x)>this.options.dragThreshold},a.handlePointerUp=function(){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down")},a.handlePointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},a.handleDragStart=function(){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this))},a.handleDragMove=function(u,f,h){if(!this.isDraggable)return;u.preventDefault(),this.previousDragX=this.dragX;let p=this.options.rightToLeft?-1:1;this.isWrapping&&(h.x%=this.slideableWidth);let m=this.dragStartPosition+h.x*p;if(!this.isWrapping){let g=Math.max(-this.slides[0].target,this.dragStartPosition);m=m>g?(m+g)*.5:m;let y=Math.min(-this.getLastSlide().target,this.dragStartPosition);m=m<y?(m+y)*.5:m}this.dragX=m,this.dragMoveTime=new Date},a.handleDragEnd=function(){if(!this.isDraggable)return;let{freeScroll:u}=this.options;u&&(this.isFreeScrolling=!0);let f=this.dragEndRestingSelect();if(u&&!this.isWrapping){let h=this.getRestingPosition();this.isFreeScrolling=-h>this.slides[0].target&&-h<this.getLastSlide().target}else!u&&f===this.selectedIndex&&(f+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.isWrapping,this.select(f),delete this.isDragSelect},a.dragEndRestingSelect=function(){let u=this.getRestingPosition(),f=Math.abs(this.getSlideDistance(-u,this.selectedIndex)),h=this._getClosestResting(u,f,1),p=this._getClosestResting(u,f,-1);return h.distance<p.distance?h.index:p.index},a._getClosestResting=function(u,f,h){let p=this.selectedIndex,m=1/0,g=this.options.contain&&!this.isWrapping?(y,x)=>y<=x:(y,x)=>y<x;for(;g(f,m)&&(p+=h,m=f,f=this.getSlideDistance(-u,p),f!==null);)f=Math.abs(f);return{distance:m,index:p-h}},a.getSlideDistance=function(u,f){let h=this.slides.length,p=this.options.wrapAround&&h>1,m=p?s.modulo(f,h):f,g=this.slides[m];if(!g)return null;let y=p?this.slideableWidth*Math.floor(f/h):0;return u-(g.target+y)},a.dragEndBoostSelect=function(){if(this.previousDragX===void 0||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;let u=this.getSlideDistance(-this.dragX,this.selectedIndex),f=this.previousDragX-this.dragX;return u>0&&f>0?1:u<0&&f<0?-1:0},a.onscroll=function(){let u=l(),f=this.pointerDownScroll.x-u.x,h=this.pointerDownScroll.y-u.y;(Math.abs(f)>3||Math.abs(h)>3)&&this.pointerDone()};function l(){return{x:t.pageXOffset,y:t.pageYOffset}}return n})}(lm)),lm.exports}var um={exports:{}},zS;function RG(){return zS||(zS=1,function(i){(function(e,t){i.exports?i.exports=t(vo()):t(e.Flickity)})(typeof window<"u"?window:an,function(t){const n="http://www.w3.org/2000/svg";function r(l,u,f){this.increment=l,this.direction=u,this.isPrevious=l==="previous",this.isLeft=u==="left",this._create(f)}r.prototype._create=function(l){let u=this.element=document.createElement("button");u.className=`flickity-button flickity-prev-next-button ${this.increment}`;let f=this.isPrevious?"Previous":"Next";u.setAttribute("type","button"),u.setAttribute("aria-label",f),this.disable();let h=this.createSVG(f,l);u.append(h)},r.prototype.createSVG=function(l,u){let f=document.createElementNS(n,"svg");f.setAttribute("class","flickity-button-icon"),f.setAttribute("viewBox","0 0 100 100");let h=document.createElementNS(n,"title");h.append(l);let p=document.createElementNS(n,"path"),m=s(u);return p.setAttribute("d",m),p.setAttribute("class","arrow"),this.isLeft||p.setAttribute("transform","translate(100, 100) rotate(180)"),f.append(h,p),f};function s(l){if(typeof l=="string")return l;let{x0:u,x1:f,x2:h,x3:p,y1:m,y2:g}=l;return`M ${u}, 50
    L ${f}, ${m+50}
    L ${h}, ${g+50}
    L ${p}, 50
    L ${h}, ${50-g}
    L ${f}, ${50-m}
    Z`}r.prototype.enable=function(){this.element.removeAttribute("disabled")},r.prototype.disable=function(){this.element.setAttribute("disabled",!0)},Object.assign(t.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),t.create.prevNextButtons=function(){if(!this.options.prevNextButtons)return;let{rightToLeft:l,arrowShape:u}=this.options,f=l?"right":"left",h=l?"left":"right";this.prevButton=new r("previous",f,u),this.nextButton=new r("next",h,u),this.focusableElems.push(this.prevButton.element),this.focusableElems.push(this.nextButton.element),this.handlePrevButtonClick=()=>{this.uiChange(),this.previous()},this.handleNextButtonClick=()=>{this.uiChange(),this.next()},this.on("activate",this.activatePrevNextButtons),this.on("select",this.updatePrevNextButtons)};let a=t.prototype;return a.updatePrevNextButtons=function(){let l=this.slides.length?this.slides.length-1:0;this.updatePrevNextButton(this.prevButton,0),this.updatePrevNextButton(this.nextButton,l)},a.updatePrevNextButton=function(l,u){if(this.isWrapping&&this.slides.length>1){l.enable();return}let f=this.selectedIndex!==u;l[f?"enable":"disable"](),!f&&document.activeElement===l.element&&this.focus()},a.activatePrevNextButtons=function(){this.prevButton.element.addEventListener("click",this.handlePrevButtonClick),this.nextButton.element.addEventListener("click",this.handleNextButtonClick),this.element.append(this.prevButton.element,this.nextButton.element),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.element.remove(),this.nextButton.element.remove(),this.prevButton.element.removeEventListener("click",this.handlePrevButtonClick),this.nextButton.element.removeEventListener("click",this.handleNextButtonClick),this.off("deactivate",this.deactivatePrevNextButtons)},t.PrevNextButton=r,t})}(um)),um.exports}var fm={exports:{}},HS;function PG(){return HS||(HS=1,function(i){(function(e,t){i.exports?i.exports=t(vo(),da()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){function r(){this.holder=document.createElement("div"),this.holder.className="flickity-page-dots",this.dots=[]}r.prototype.setDots=function(a){let l=a-this.dots.length;l>0?this.addDots(l):l<0&&this.removeDots(-l)},r.prototype.addDots=function(a){let l=new Array(a).fill().map((u,f)=>{let h=document.createElement("button");h.setAttribute("type","button");let p=f+1+this.dots.length;return h.className="flickity-page-dot",h.textContent=`View slide ${p}`,h});this.holder.append(...l),this.dots=this.dots.concat(l)},r.prototype.removeDots=function(a){this.dots.splice(this.dots.length-a,a).forEach(u=>u.remove())},r.prototype.updateSelected=function(a){this.selectedDot&&(this.selectedDot.classList.remove("is-selected"),this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[a],this.selectedDot.classList.add("is-selected"),this.selectedDot.setAttribute("aria-current","step"))},t.PageDots=r,Object.assign(t.defaults,{pageDots:!0}),t.create.pageDots=function(){this.options.pageDots&&(this.pageDots=new r,this.handlePageDotsClick=this.onPageDotsClick.bind(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))};let s=t.prototype;return s.activatePageDots=function(){this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots),this.pageDots.holder.addEventListener("click",this.handlePageDotsClick),this.element.append(this.pageDots.holder)},s.onPageDotsClick=function(a){let l=this.pageDots.dots.indexOf(a.target);l!==-1&&(this.uiChange(),this.select(l))},s.updateSelectedPageDots=function(){this.pageDots.updateSelected(this.selectedIndex)},s.updatePageDots=function(){this.pageDots.dots.forEach(a=>{n.removeFrom(this.focusableElems,a)}),this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots)},s.deactivatePageDots=function(){this.pageDots.holder.remove(),this.pageDots.holder.removeEventListener("click",this.handlePageDotsClick)},t.PageDots=r,t})}(fm)),fm.exports}var hm={exports:{}},kS;function LG(){return kS||(kS=1,function(i){(function(e,t){i.exports?i.exports=t(vo()):t(e.Flickity)})(typeof window<"u"?window:an,function(t){function n(s,a){this.autoPlay=s,this.onTick=a,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype.play=function(){if(this.state==="playing")return;if(document.hidden){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()},n.prototype.tick=function(){if(this.state!=="playing")return;let s=typeof this.autoPlay=="number"?this.autoPlay:3e3;this.clear(),this.timeout=setTimeout(()=>{this.onTick(),this.tick()},s)},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){this.state==="playing"&&(this.state="paused",this.clear())},n.prototype.unpause=function(){this.state==="paused"&&this.play()},n.prototype.visibilityChange=function(){let s=document.hidden;this[s?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},Object.assign(t.defaults,{pauseAutoPlayOnHover:!0}),t.create.player=function(){this.player=new n(this.options.autoPlay,()=>{this.next(!0)}),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)};let r=t.prototype;return r.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},r.playPlayer=function(){this.player.play()},r.stopPlayer=function(){this.player.stop()},r.pausePlayer=function(){this.player.pause()},r.unpausePlayer=function(){this.player.unpause()},r.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},r.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},r.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},t.Player=n,t})}(hm)),hm.exports}var dm={exports:{}},GS;function DG(){return GS||(GS=1,function(i){(function(e,t){i.exports?i.exports=t(vo(),da()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){function r(a){let l=document.createDocumentFragment();return a.forEach(u=>l.appendChild(u.element)),l}let s=t.prototype;return s.insert=function(a,l){let u=this._makeCells(a);if(!u||!u.length)return;let f=this.cells.length;l=l===void 0?f:l;let h=r(u),p=l===f;if(p)this.slider.appendChild(h);else{let m=this.cells[l].element;this.slider.insertBefore(h,m)}if(l===0)this.cells=u.concat(this.cells);else if(p)this.cells=this.cells.concat(u);else{let m=this.cells.splice(l,f-l);this.cells=this.cells.concat(u).concat(m)}this._sizeCells(u),this.cellChange(l),this.positionSliderAtSelected()},s.append=function(a){this.insert(a,this.cells.length)},s.prepend=function(a){this.insert(a,0)},s.remove=function(a){let l=this.getCells(a);if(!l||!l.length)return;let u=this.cells.length-1;l.forEach(f=>{f.remove();let h=this.cells.indexOf(f);u=Math.min(h,u),n.removeFrom(this.cells,f)}),this.cellChange(u),this.positionSliderAtSelected()},s.cellSizeChange=function(a){let l=this.getCell(a);if(!l)return;l.getSize();let u=this.cells.indexOf(l);this.cellChange(u)},s.cellChange=function(a){let l=this.selectedElement;this._positionCells(a),this._updateWrapShiftCells(),this.setGallerySize();let u=this.getCell(l);u&&(this.selectedIndex=this.getCellSlideIndex(u)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[a]),this.select(this.selectedIndex)},t})}(dm)),dm.exports}var pm={exports:{}},WS;function IG(){return WS||(WS=1,function(i){(function(e,t){i.exports?i.exports=t(vo(),da()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){const r="data-flickity-lazyload",s=`${r}-src`,a=`${r}-srcset`,l=`img[${r}], img[${s}], img[${a}], source[${a}]`;t.create.lazyLoad=function(){this.on("select",this.lazyLoad),this.handleLazyLoadComplete=this.onLazyLoadComplete.bind(this)};let u=t.prototype;u.lazyLoad=function(){let{lazyLoad:p}=this.options;if(!p)return;let m=typeof p=="number"?p:0;this.getAdjacentCellElements(m).map(f).flat().forEach(g=>new h(g,this.handleLazyLoadComplete))};function f(p){if(p.matches("img")){let m=p.getAttribute(r),g=p.getAttribute(s),y=p.getAttribute(a);if(m||g||y)return p}return[...p.querySelectorAll(l)]}u.onLazyLoadComplete=function(p,m){let g=this.getParentCell(p),y=g&&g.element;this.cellSizeChange(y),this.dispatchEvent("lazyLoad",m,y)};function h(p,m){this.img=p,this.onComplete=m,this.load()}return h.prototype.handleEvent=n.handleEvent,h.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);let p=this.img.getAttribute(r)||this.img.getAttribute(s),m=this.img.getAttribute(a);this.img.src=p,m&&this.img.setAttribute("srcset",m),this.img.removeAttribute(r),this.img.removeAttribute(s),this.img.removeAttribute(a)},h.prototype.onload=function(p){this.complete(p,"flickity-lazyloaded")},h.prototype.onerror=function(p){this.complete(p,"flickity-lazyerror")},h.prototype.complete=function(p,m){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this),(this.img.parentNode.matches("picture")?this.img.parentNode:this.img).classList.add(m),this.onComplete(this.img,p)},t.LazyLoader=h,t})}(pm)),pm.exports}var mm={exports:{}},gm={exports:{}};/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */var VS;function OG(){return VS||(VS=1,function(i){(function(e,t){i.exports?i.exports=t(e,J_()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:an,function(t,n){let r=t.jQuery,s=t.console;function a(m){return Array.isArray(m)?m:typeof m=="object"&&typeof m.length=="number"?[...m]:[m]}function l(m,g,y){if(!(this instanceof l))return new l(m,g,y);let x=m;if(typeof m=="string"&&(x=document.querySelectorAll(m)),!x){s.error(`Bad element for imagesLoaded ${x||m}`);return}this.elements=a(x),this.options={},typeof g=="function"?y=g:Object.assign(this.options,g),y&&this.on("always",y),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}l.prototype=Object.create(n.prototype),l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const u=[1,9,11];l.prototype.addElementImages=function(m){m.nodeName==="IMG"&&this.addImage(m),this.options.background===!0&&this.addElementBackgroundImages(m);let{nodeType:g}=m;if(!g||!u.includes(g))return;let y=m.querySelectorAll("img");for(let x of y)this.addImage(x);if(typeof this.options.background=="string"){let x=m.querySelectorAll(this.options.background);for(let _ of x)this.addElementBackgroundImages(_)}};const f=/url\((['"])?(.*?)\1\)/gi;l.prototype.addElementBackgroundImages=function(m){let g=getComputedStyle(m);if(!g)return;let y=f.exec(g.backgroundImage);for(;y!==null;){let x=y&&y[2];x&&this.addBackground(x,m),y=f.exec(g.backgroundImage)}},l.prototype.addImage=function(m){let g=new h(m);this.images.push(g)},l.prototype.addBackground=function(m,g){let y=new p(m,g);this.images.push(y)},l.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let m=(g,y,x)=>{setTimeout(()=>{this.progress(g,y,x)})};this.images.forEach(function(g){g.once("progress",m),g.check()})},l.prototype.progress=function(m,g,y){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!m.isLoaded,this.emitEvent("progress",[this,m,g]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,m),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${y}`,m,g)},l.prototype.complete=function(){let m=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(m,[this]),this.emitEvent("always",[this]),this.jqDeferred){let g=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[g](this)}};function h(m){this.img=m}h.prototype=Object.create(n.prototype),h.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(m,g){this.isLoaded=m;let{parentNode:y}=this.img,x=y.nodeName==="PICTURE"?y:this.img;this.emitEvent("progress",[this,x,g])},h.prototype.handleEvent=function(m){let g="on"+m.type;this[g]&&this[g](m)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function p(m,g){this.url=m,this.element=g,this.img=new Image}return p.prototype=Object.create(h.prototype),p.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},p.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},p.prototype.confirm=function(m,g){this.isLoaded=m,this.emitEvent("progress",[this,this.element,g])},l.makeJQueryPlugin=function(m){m=m||t.jQuery,m&&(r=m,r.fn.imagesLoaded=function(g,y){return new l(this,g,y).jqDeferred.promise(r(this))})},l.makeJQueryPlugin(),l})}(gm)),gm.exports}var $S;function UG(){return $S||($S=1,function(i){(function(e,t){i.exports?i.exports=t(vo(),OG()):t(e.Flickity,e.imagesLoaded)})(typeof window<"u"?window:an,function(t,n){return t.create.imagesLoaded=function(){this.on("activate",this.imagesLoaded)},t.prototype.imagesLoaded=function(){if(!this.options.imagesLoaded)return;let r=(s,a)=>{let l=this.getParentCell(a.img);this.cellSizeChange(l&&l.element),this.options.freeScroll||this.positionSliderAtSelected()};n(this.slider).on("progress",r)},t})}(mm)),mm.exports}/*!
 * Flickity v3.0.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2022 Metafizzy
 */var XS;function NG(){return XS||(XS=1,function(i){if(i.exports){const e=vo();CG(),RG(),PG(),LG(),DG(),IG(),UG(),i.exports=e}}(em)),em.exports}(function(i){(function(e,t){i.exports?i.exports=t(NG(),da()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:an,function(t,n){let r=t.Slide;r.prototype.renderFadePosition=function(){},r.prototype.setOpacity=function(p){this.cells.forEach(m=>{m.element.style.opacity=p})},t.create.fade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};let s=t.prototype,a=s.updateSlides;s.updateSlides=function(){a.apply(this,arguments),this.options.fade&&this.slides.forEach((p,m)=>{let g=p.target-p.x,y=p.cells[0].x;p.cells.forEach(_=>{let v=_.x-y-g;this._renderCellPosition(_,v)});let x=m===this.selectedIndex?1:0;p.setOpacity(x)})},s.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},s.onSettleFade=function(){if(delete this.didDragEnd,!this.options.fade)return;this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!==this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0)},s.onDragEndFade=function(){this.didDragEnd=!0},s.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},s.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(p=>{p.setOpacity("")}))};let l=s.positionSlider;s.positionSlider=function(){if(!this.options.fade){l.apply(this,arguments);return}this.fadeSlides(),this.dispatchScrollEvent()};let u=s.positionSliderAtSelected;s.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),u.apply(this,arguments)},s.fadeSlides=function(){if(this.slides.length<2)return;let p=this.getFadeIndexes(),m=this.slides[p.a],g=this.slides[p.b],y=this.wrapDifference(m.target,g.target),x=this.wrapDifference(m.target,-this.x);x/=y,m.setOpacity(1-x),g.setOpacity(x);let _=p.a;this.isDragging&&(_=x>.5?p.a:p.b),this.fadeHideIndex!==void 0&&this.fadeHideIndex!==_&&this.fadeHideIndex!==p.a&&this.fadeHideIndex!==p.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=_},s.getFadeIndexes=function(){return!this.isDragging&&!this.didDragEnd?{a:this.fadeIndex,b:this.selectedIndex}:this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes()},s.getFadeDragWrapIndexes=function(){let p=this.slides.map(function(w,T){return this.getSlideDistance(-this.x,T)},this),m=p.map(function(w){return Math.abs(w)}),g=Math.min(...m),y=m.indexOf(g),x=p[y],_=this.slides.length,v=x>=0?1:-1;return{a:y,b:n.modulo(y+v,_)}},s.getFadeDragLimitIndexes=function(){let p=0;for(let m=0;m<this.slides.length-1;m++){let g=this.slides[m];if(-this.x<g.target)break;p=m}return{a:p,b:p+1}},s.wrapDifference=function(p,m){let g=m-p;if(!this.options.wrapAround)return g;let y=g+this.slideableWidth,x=g-this.slideableWidth;return Math.abs(y)<Math.abs(g)&&(g=y),Math.abs(x)<Math.abs(g)&&(g=x),g};let f=s._updateWrapShiftCells;s._updateWrapShiftCells=function(){this.options.fade?this.isWrapping=this.getIsWrapping():f.apply(this,arguments)};let h=s.shiftWrapCells;return s.shiftWrapCells=function(){this.options.fade||h.apply(this,arguments)},t})})(v1);var FG=v1.exports;const BG=lO(FG);var Dh={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Dh.exports;(function(i,e){(function(){var t,n="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",p=1,m=2,g=4,y=1,x=2,_=1,v=2,w=4,T=8,E=16,C=32,R=64,A=128,z=256,G=512,M=30,U="...",V=800,ae=16,H=1,J=2,j=3,te=1/0,ie=9007199254740991,oe=17976931348623157e292,N=NaN,ce=4294967295,Se=ce-1,Je=ce>>>1,ne=[["ary",A],["bind",_],["bindKey",v],["curry",T],["curryRight",E],["flip",G],["partial",C],["partialRight",R],["rearg",z]],ue="[object Arguments]",Te="[object Array]",De="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",gt="[object DOMException]",$e="[object Error]",q="[object Function]",st="[object GeneratorFunction]",be="[object Map]",Ge="[object Number]",Ue="[object Null]",K="[object Object]",et="[object Promise]",O="[object Proxy]",P="[object RegExp]",Y="[object Set]",me="[object String]",de="[object Symbol]",_e="[object Undefined]",Ae="[object WeakMap]",we="[object WeakSet]",Ee="[object ArrayBuffer]",He="[object DataView]",tt="[object Float32Array]",pe="[object Float64Array]",Tt="[object Int8Array]",Xe="[object Int16Array]",ot="[object Int32Array]",We="[object Uint8Array]",Ie="[object Uint8ClampedArray]",at="[object Uint16Array]",_t="[object Uint32Array]",Dt=/\b__p \+= '';/g,Pe=/\b(__p \+=) '' \+/g,Ct=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,xe=RegExp(F.source),Ne=RegExp(ve.source),Ze=/<%-([\s\S]+?)%>/g,vt=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,qe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ve=/^\w*$/,je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/[\\^$.*+?()[\]{}|]/g,nt=RegExp(ye.source),Qe=/^\s+/,ft=/\s/,tn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,St=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,yn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jt=/[()=,{}\[\]\/\s]/,Xt=/\\(\\)?/g,zt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zn=/\w*$/,I=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,Q=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,Me=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fe=/($^)/,it=/['\n\r\u2028\u2029\\]/g,Be="\\ud800-\\udfff",Ye="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Kt=Ye+rt+ht,pn="\\u2700-\\u27bf",Ft="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",kt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",zl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nn="A-Z\\xc0-\\xd6\\xd8-\\xde",Fr="\\ufe0e\\ufe0f",Hl=Wn+kt+dt+zl,ss="['’]",kl="["+Be+"]",Rn="["+Hl+"]",tr="["+Kt+"]",ma="\\d+",Si="["+pn+"]",ga="["+Ft+"]",uu="[^"+Be+Hl+ma+pn+Ft+nn+"]",_a="\\ud83c[\\udffb-\\udfff]",Rw="(?:"+tr+"|"+_a+")",uv="[^"+Be+"]",id="(?:\\ud83c[\\udde6-\\uddff]){2}",rd="[\\ud800-\\udbff][\\udc00-\\udfff]",va="["+nn+"]",fv="\\u200d",hv="(?:"+ga+"|"+uu+")",Pw="(?:"+va+"|"+uu+")",dv="(?:"+ss+"(?:d|ll|m|re|s|t|ve))?",pv="(?:"+ss+"(?:D|LL|M|RE|S|T|VE))?",mv=Rw+"?",gv="["+Fr+"]?",Lw="(?:"+fv+"(?:"+[uv,id,rd].join("|")+")"+gv+mv+")*",Dw="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Iw="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_v=gv+mv+Lw,Ow="(?:"+[Si,id,rd].join("|")+")"+_v,Uw="(?:"+[uv+tr+"?",tr,id,rd,kl].join("|")+")",Nw=RegExp(ss,"g"),Fw=RegExp(tr,"g"),sd=RegExp(_a+"(?="+_a+")|"+Uw+_v,"g"),Bw=RegExp([va+"?"+ga+"+"+dv+"(?="+[Rn,va,"$"].join("|")+")",Pw+"+"+pv+"(?="+[Rn,va+hv,"$"].join("|")+")",va+"?"+hv+"+"+dv,va+"+"+pv,Iw,Dw,ma,Ow].join("|"),"g"),zw=RegExp("["+fv+Be+Kt+Fr+"]"),Hw=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,kw=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Gw=-1,rn={};rn[tt]=rn[pe]=rn[Tt]=rn[Xe]=rn[ot]=rn[We]=rn[Ie]=rn[at]=rn[_t]=!0,rn[ue]=rn[Te]=rn[Ee]=rn[Oe]=rn[He]=rn[Ce]=rn[$e]=rn[q]=rn[be]=rn[Ge]=rn[K]=rn[P]=rn[Y]=rn[me]=rn[Ae]=!1;var Qt={};Qt[ue]=Qt[Te]=Qt[Ee]=Qt[He]=Qt[Oe]=Qt[Ce]=Qt[tt]=Qt[pe]=Qt[Tt]=Qt[Xe]=Qt[ot]=Qt[be]=Qt[Ge]=Qt[K]=Qt[P]=Qt[Y]=Qt[me]=Qt[de]=Qt[We]=Qt[Ie]=Qt[at]=Qt[_t]=!0,Qt[$e]=Qt[q]=Qt[Ae]=!1;var Ww={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},Vw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},$w={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Xw={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},qw=parseFloat,Yw=parseInt,vv=typeof an=="object"&&an&&an.Object===Object&&an,jw=typeof self=="object"&&self&&self.Object===Object&&self,Vn=vv||jw||Function("return this")(),od=e&&!e.nodeType&&e,xo=od&&!0&&i&&!i.nodeType&&i,xv=xo&&xo.exports===od,ad=xv&&vv.process,nr=function(){try{var W=xo&&xo.require&&xo.require("util").types;return W||ad&&ad.binding&&ad.binding("util")}catch{}}(),yv=nr&&nr.isArrayBuffer,Sv=nr&&nr.isDate,Ev=nr&&nr.isMap,Mv=nr&&nr.isRegExp,bv=nr&&nr.isSet,Tv=nr&&nr.isTypedArray;function Ni(W,le,re){switch(re.length){case 0:return W.call(le);case 1:return W.call(le,re[0]);case 2:return W.call(le,re[0],re[1]);case 3:return W.call(le,re[0],re[1],re[2])}return W.apply(le,re)}function Kw(W,le,re,ze){for(var pt=-1,Ht=W==null?0:W.length;++pt<Ht;){var Pn=W[pt];le(ze,Pn,re(Pn),W)}return ze}function ir(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze&&le(W[re],re,W)!==!1;);return W}function Zw(W,le){for(var re=W==null?0:W.length;re--&&le(W[re],re,W)!==!1;);return W}function wv(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze;)if(!le(W[re],re,W))return!1;return!0}function Us(W,le){for(var re=-1,ze=W==null?0:W.length,pt=0,Ht=[];++re<ze;){var Pn=W[re];le(Pn,re,W)&&(Ht[pt++]=Pn)}return Ht}function fu(W,le){var re=W==null?0:W.length;return!!re&&xa(W,le,0)>-1}function ld(W,le,re){for(var ze=-1,pt=W==null?0:W.length;++ze<pt;)if(re(le,W[ze]))return!0;return!1}function ln(W,le){for(var re=-1,ze=W==null?0:W.length,pt=Array(ze);++re<ze;)pt[re]=le(W[re],re,W);return pt}function Ns(W,le){for(var re=-1,ze=le.length,pt=W.length;++re<ze;)W[pt+re]=le[re];return W}function cd(W,le,re,ze){var pt=-1,Ht=W==null?0:W.length;for(ze&&Ht&&(re=W[++pt]);++pt<Ht;)re=le(re,W[pt],pt,W);return re}function Jw(W,le,re,ze){var pt=W==null?0:W.length;for(ze&&pt&&(re=W[--pt]);pt--;)re=le(re,W[pt],pt,W);return re}function ud(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze;)if(le(W[re],re,W))return!0;return!1}var Qw=fd("length");function eA(W){return W.split("")}function tA(W){return W.match(yn)||[]}function Av(W,le,re){var ze;return re(W,function(pt,Ht,Pn){if(le(pt,Ht,Pn))return ze=Ht,!1}),ze}function hu(W,le,re,ze){for(var pt=W.length,Ht=re+(ze?1:-1);ze?Ht--:++Ht<pt;)if(le(W[Ht],Ht,W))return Ht;return-1}function xa(W,le,re){return le===le?dA(W,le,re):hu(W,Cv,re)}function nA(W,le,re,ze){for(var pt=re-1,Ht=W.length;++pt<Ht;)if(ze(W[pt],le))return pt;return-1}function Cv(W){return W!==W}function Rv(W,le){var re=W==null?0:W.length;return re?dd(W,le)/re:N}function fd(W){return function(le){return le==null?t:le[W]}}function hd(W){return function(le){return W==null?t:W[le]}}function Pv(W,le,re,ze,pt){return pt(W,function(Ht,Pn,Zt){re=ze?(ze=!1,Ht):le(re,Ht,Pn,Zt)}),re}function iA(W,le){var re=W.length;for(W.sort(le);re--;)W[re]=W[re].value;return W}function dd(W,le){for(var re,ze=-1,pt=W.length;++ze<pt;){var Ht=le(W[ze]);Ht!==t&&(re=re===t?Ht:re+Ht)}return re}function pd(W,le){for(var re=-1,ze=Array(W);++re<W;)ze[re]=le(re);return ze}function rA(W,le){return ln(le,function(re){return[re,W[re]]})}function Lv(W){return W&&W.slice(0,Uv(W)+1).replace(Qe,"")}function Fi(W){return function(le){return W(le)}}function md(W,le){return ln(le,function(re){return W[re]})}function Gl(W,le){return W.has(le)}function Dv(W,le){for(var re=-1,ze=W.length;++re<ze&&xa(le,W[re],0)>-1;);return re}function Iv(W,le){for(var re=W.length;re--&&xa(le,W[re],0)>-1;);return re}function sA(W,le){for(var re=W.length,ze=0;re--;)W[re]===le&&++ze;return ze}var oA=hd(Ww),aA=hd(Vw);function lA(W){return"\\"+Xw[W]}function cA(W,le){return W==null?t:W[le]}function ya(W){return zw.test(W)}function uA(W){return Hw.test(W)}function fA(W){for(var le,re=[];!(le=W.next()).done;)re.push(le.value);return re}function gd(W){var le=-1,re=Array(W.size);return W.forEach(function(ze,pt){re[++le]=[pt,ze]}),re}function Ov(W,le){return function(re){return W(le(re))}}function Fs(W,le){for(var re=-1,ze=W.length,pt=0,Ht=[];++re<ze;){var Pn=W[re];(Pn===le||Pn===h)&&(W[re]=h,Ht[pt++]=re)}return Ht}function du(W){var le=-1,re=Array(W.size);return W.forEach(function(ze){re[++le]=ze}),re}function hA(W){var le=-1,re=Array(W.size);return W.forEach(function(ze){re[++le]=[ze,ze]}),re}function dA(W,le,re){for(var ze=re-1,pt=W.length;++ze<pt;)if(W[ze]===le)return ze;return-1}function pA(W,le,re){for(var ze=re+1;ze--;)if(W[ze]===le)return ze;return ze}function Sa(W){return ya(W)?gA(W):Qw(W)}function Mr(W){return ya(W)?_A(W):eA(W)}function Uv(W){for(var le=W.length;le--&&ft.test(W.charAt(le)););return le}var mA=hd($w);function gA(W){for(var le=sd.lastIndex=0;sd.test(W);)++le;return le}function _A(W){return W.match(sd)||[]}function vA(W){return W.match(Bw)||[]}var xA=function W(le){le=le==null?Vn:Ea.defaults(Vn.Object(),le,Ea.pick(Vn,kw));var re=le.Array,ze=le.Date,pt=le.Error,Ht=le.Function,Pn=le.Math,Zt=le.Object,_d=le.RegExp,yA=le.String,rr=le.TypeError,pu=re.prototype,SA=Ht.prototype,Ma=Zt.prototype,mu=le["__core-js_shared__"],gu=SA.toString,Vt=Ma.hasOwnProperty,EA=0,Nv=function(){var o=/[^.]+$/.exec(mu&&mu.keys&&mu.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),_u=Ma.toString,MA=gu.call(Zt),bA=Vn._,TA=_d("^"+gu.call(Vt).replace(ye,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),vu=xv?le.Buffer:t,Bs=le.Symbol,xu=le.Uint8Array,Fv=vu?vu.allocUnsafe:t,yu=Ov(Zt.getPrototypeOf,Zt),Bv=Zt.create,zv=Ma.propertyIsEnumerable,Su=pu.splice,Hv=Bs?Bs.isConcatSpreadable:t,Wl=Bs?Bs.iterator:t,yo=Bs?Bs.toStringTag:t,Eu=function(){try{var o=To(Zt,"defineProperty");return o({},"",{}),o}catch{}}(),wA=le.clearTimeout!==Vn.clearTimeout&&le.clearTimeout,AA=ze&&ze.now!==Vn.Date.now&&ze.now,CA=le.setTimeout!==Vn.setTimeout&&le.setTimeout,Mu=Pn.ceil,bu=Pn.floor,vd=Zt.getOwnPropertySymbols,RA=vu?vu.isBuffer:t,kv=le.isFinite,PA=pu.join,LA=Ov(Zt.keys,Zt),Ln=Pn.max,Jn=Pn.min,DA=ze.now,IA=le.parseInt,Gv=Pn.random,OA=pu.reverse,xd=To(le,"DataView"),Vl=To(le,"Map"),yd=To(le,"Promise"),ba=To(le,"Set"),$l=To(le,"WeakMap"),Xl=To(Zt,"create"),Tu=$l&&new $l,Ta={},UA=wo(xd),NA=wo(Vl),FA=wo(yd),BA=wo(ba),zA=wo($l),wu=Bs?Bs.prototype:t,ql=wu?wu.valueOf:t,Wv=wu?wu.toString:t;function L(o){if(mn(o)&&!mt(o)&&!(o instanceof Lt)){if(o instanceof sr)return o;if(Vt.call(o,"__wrapped__"))return V0(o)}return new sr(o)}var wa=function(){function o(){}return function(c){if(!un(c))return{};if(Bv)return Bv(c);o.prototype=c;var d=new o;return o.prototype=t,d}}();function Au(){}function sr(o,c){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=t}L.templateSettings={escape:Ze,evaluate:vt,interpolate:It,variable:"",imports:{_:L}},L.prototype=Au.prototype,L.prototype.constructor=L,sr.prototype=wa(Au.prototype),sr.prototype.constructor=sr;function Lt(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function HA(){var o=new Lt(this.__wrapped__);return o.__actions__=Ei(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=Ei(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=Ei(this.__views__),o}function kA(){if(this.__filtered__){var o=new Lt(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function GA(){var o=this.__wrapped__.value(),c=this.__dir__,d=mt(o),S=c<0,b=d?o.length:0,D=eR(0,b,this.__views__),B=D.start,k=D.end,X=k-B,fe=S?k:B-1,he=this.__iteratees__,ge=he.length,Le=0,Ke=Jn(X,this.__takeCount__);if(!d||!S&&b==X&&Ke==X)return d0(o,this.__actions__);var ct=[];e:for(;X--&&Le<Ke;){fe+=c;for(var Et=-1,ut=o[fe];++Et<ge;){var Rt=he[Et],Ot=Rt.iteratee,Hi=Rt.type,ui=Ot(ut);if(Hi==J)ut=ui;else if(!ui){if(Hi==H)continue e;break e}}ct[Le++]=ut}return ct}Lt.prototype=wa(Au.prototype),Lt.prototype.constructor=Lt;function So(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var S=o[c];this.set(S[0],S[1])}}function WA(){this.__data__=Xl?Xl(null):{},this.size=0}function VA(o){var c=this.has(o)&&delete this.__data__[o];return this.size-=c?1:0,c}function $A(o){var c=this.__data__;if(Xl){var d=c[o];return d===u?t:d}return Vt.call(c,o)?c[o]:t}function XA(o){var c=this.__data__;return Xl?c[o]!==t:Vt.call(c,o)}function qA(o,c){var d=this.__data__;return this.size+=this.has(o)?0:1,d[o]=Xl&&c===t?u:c,this}So.prototype.clear=WA,So.prototype.delete=VA,So.prototype.get=$A,So.prototype.has=XA,So.prototype.set=qA;function os(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var S=o[c];this.set(S[0],S[1])}}function YA(){this.__data__=[],this.size=0}function jA(o){var c=this.__data__,d=Cu(c,o);if(d<0)return!1;var S=c.length-1;return d==S?c.pop():Su.call(c,d,1),--this.size,!0}function KA(o){var c=this.__data__,d=Cu(c,o);return d<0?t:c[d][1]}function ZA(o){return Cu(this.__data__,o)>-1}function JA(o,c){var d=this.__data__,S=Cu(d,o);return S<0?(++this.size,d.push([o,c])):d[S][1]=c,this}os.prototype.clear=YA,os.prototype.delete=jA,os.prototype.get=KA,os.prototype.has=ZA,os.prototype.set=JA;function as(o){var c=-1,d=o==null?0:o.length;for(this.clear();++c<d;){var S=o[c];this.set(S[0],S[1])}}function QA(){this.size=0,this.__data__={hash:new So,map:new(Vl||os),string:new So}}function eC(o){var c=Hu(this,o).delete(o);return this.size-=c?1:0,c}function tC(o){return Hu(this,o).get(o)}function nC(o){return Hu(this,o).has(o)}function iC(o,c){var d=Hu(this,o),S=d.size;return d.set(o,c),this.size+=d.size==S?0:1,this}as.prototype.clear=QA,as.prototype.delete=eC,as.prototype.get=tC,as.prototype.has=nC,as.prototype.set=iC;function Eo(o){var c=-1,d=o==null?0:o.length;for(this.__data__=new as;++c<d;)this.add(o[c])}function rC(o){return this.__data__.set(o,u),this}function sC(o){return this.__data__.has(o)}Eo.prototype.add=Eo.prototype.push=rC,Eo.prototype.has=sC;function br(o){var c=this.__data__=new os(o);this.size=c.size}function oC(){this.__data__=new os,this.size=0}function aC(o){var c=this.__data__,d=c.delete(o);return this.size=c.size,d}function lC(o){return this.__data__.get(o)}function cC(o){return this.__data__.has(o)}function uC(o,c){var d=this.__data__;if(d instanceof os){var S=d.__data__;if(!Vl||S.length<r-1)return S.push([o,c]),this.size=++d.size,this;d=this.__data__=new as(S)}return d.set(o,c),this.size=d.size,this}br.prototype.clear=oC,br.prototype.delete=aC,br.prototype.get=lC,br.prototype.has=cC,br.prototype.set=uC;function Vv(o,c){var d=mt(o),S=!d&&Ao(o),b=!d&&!S&&Ws(o),D=!d&&!S&&!b&&Pa(o),B=d||S||b||D,k=B?pd(o.length,yA):[],X=k.length;for(var fe in o)(c||Vt.call(o,fe))&&!(B&&(fe=="length"||b&&(fe=="offset"||fe=="parent")||D&&(fe=="buffer"||fe=="byteLength"||fe=="byteOffset")||fs(fe,X)))&&k.push(fe);return k}function $v(o){var c=o.length;return c?o[Ld(0,c-1)]:t}function fC(o,c){return ku(Ei(o),Mo(c,0,o.length))}function hC(o){return ku(Ei(o))}function Sd(o,c,d){(d!==t&&!Tr(o[c],d)||d===t&&!(c in o))&&ls(o,c,d)}function Yl(o,c,d){var S=o[c];(!(Vt.call(o,c)&&Tr(S,d))||d===t&&!(c in o))&&ls(o,c,d)}function Cu(o,c){for(var d=o.length;d--;)if(Tr(o[d][0],c))return d;return-1}function dC(o,c,d,S){return zs(o,function(b,D,B){c(S,b,d(b),B)}),S}function Xv(o,c){return o&&zr(c,Nn(c),o)}function pC(o,c){return o&&zr(c,bi(c),o)}function ls(o,c,d){c=="__proto__"&&Eu?Eu(o,c,{configurable:!0,enumerable:!0,value:d,writable:!0}):o[c]=d}function Ed(o,c){for(var d=-1,S=c.length,b=re(S),D=o==null;++d<S;)b[d]=D?t:np(o,c[d]);return b}function Mo(o,c,d){return o===o&&(d!==t&&(o=o<=d?o:d),c!==t&&(o=o>=c?o:c)),o}function or(o,c,d,S,b,D){var B,k=c&p,X=c&m,fe=c&g;if(d&&(B=b?d(o,S,b,D):d(o)),B!==t)return B;if(!un(o))return o;var he=mt(o);if(he){if(B=nR(o),!k)return Ei(o,B)}else{var ge=Qn(o),Le=ge==q||ge==st;if(Ws(o))return g0(o,k);if(ge==K||ge==ue||Le&&!b){if(B=X||Le?{}:U0(o),!k)return X?$C(o,pC(B,o)):VC(o,Xv(B,o))}else{if(!Qt[ge])return b?o:{};B=iR(o,ge,k)}}D||(D=new br);var Ke=D.get(o);if(Ke)return Ke;D.set(o,B),ux(o)?o.forEach(function(ut){B.add(or(ut,c,d,ut,o,D))}):lx(o)&&o.forEach(function(ut,Rt){B.set(Rt,or(ut,c,d,Rt,o,D))});var ct=fe?X?Gd:kd:X?bi:Nn,Et=he?t:ct(o);return ir(Et||o,function(ut,Rt){Et&&(Rt=ut,ut=o[Rt]),Yl(B,Rt,or(ut,c,d,Rt,o,D))}),B}function mC(o){var c=Nn(o);return function(d){return qv(d,o,c)}}function qv(o,c,d){var S=d.length;if(o==null)return!S;for(o=Zt(o);S--;){var b=d[S],D=c[b],B=o[b];if(B===t&&!(b in o)||!D(B))return!1}return!0}function Yv(o,c,d){if(typeof o!="function")throw new rr(a);return tc(function(){o.apply(t,d)},c)}function jl(o,c,d,S){var b=-1,D=fu,B=!0,k=o.length,X=[],fe=c.length;if(!k)return X;d&&(c=ln(c,Fi(d))),S?(D=ld,B=!1):c.length>=r&&(D=Gl,B=!1,c=new Eo(c));e:for(;++b<k;){var he=o[b],ge=d==null?he:d(he);if(he=S||he!==0?he:0,B&&ge===ge){for(var Le=fe;Le--;)if(c[Le]===ge)continue e;X.push(he)}else D(c,ge,S)||X.push(he)}return X}var zs=S0(Br),jv=S0(bd,!0);function gC(o,c){var d=!0;return zs(o,function(S,b,D){return d=!!c(S,b,D),d}),d}function Ru(o,c,d){for(var S=-1,b=o.length;++S<b;){var D=o[S],B=c(D);if(B!=null&&(k===t?B===B&&!zi(B):d(B,k)))var k=B,X=D}return X}function _C(o,c,d,S){var b=o.length;for(d=xt(d),d<0&&(d=-d>b?0:b+d),S=S===t||S>b?b:xt(S),S<0&&(S+=b),S=d>S?0:hx(S);d<S;)o[d++]=c;return o}function Kv(o,c){var d=[];return zs(o,function(S,b,D){c(S,b,D)&&d.push(S)}),d}function $n(o,c,d,S,b){var D=-1,B=o.length;for(d||(d=sR),b||(b=[]);++D<B;){var k=o[D];c>0&&d(k)?c>1?$n(k,c-1,d,S,b):Ns(b,k):S||(b[b.length]=k)}return b}var Md=E0(),Zv=E0(!0);function Br(o,c){return o&&Md(o,c,Nn)}function bd(o,c){return o&&Zv(o,c,Nn)}function Pu(o,c){return Us(c,function(d){return hs(o[d])})}function bo(o,c){c=ks(c,o);for(var d=0,S=c.length;o!=null&&d<S;)o=o[Hr(c[d++])];return d&&d==S?o:t}function Jv(o,c,d){var S=c(o);return mt(o)?S:Ns(S,d(o))}function li(o){return o==null?o===t?_e:Ue:yo&&yo in Zt(o)?QC(o):hR(o)}function Td(o,c){return o>c}function vC(o,c){return o!=null&&Vt.call(o,c)}function xC(o,c){return o!=null&&c in Zt(o)}function yC(o,c,d){return o>=Jn(c,d)&&o<Ln(c,d)}function wd(o,c,d){for(var S=d?ld:fu,b=o[0].length,D=o.length,B=D,k=re(D),X=1/0,fe=[];B--;){var he=o[B];B&&c&&(he=ln(he,Fi(c))),X=Jn(he.length,X),k[B]=!d&&(c||b>=120&&he.length>=120)?new Eo(B&&he):t}he=o[0];var ge=-1,Le=k[0];e:for(;++ge<b&&fe.length<X;){var Ke=he[ge],ct=c?c(Ke):Ke;if(Ke=d||Ke!==0?Ke:0,!(Le?Gl(Le,ct):S(fe,ct,d))){for(B=D;--B;){var Et=k[B];if(!(Et?Gl(Et,ct):S(o[B],ct,d)))continue e}Le&&Le.push(ct),fe.push(Ke)}}return fe}function SC(o,c,d,S){return Br(o,function(b,D,B){c(S,d(b),D,B)}),S}function Kl(o,c,d){c=ks(c,o),o=z0(o,c);var S=o==null?o:o[Hr(lr(c))];return S==null?t:Ni(S,o,d)}function Qv(o){return mn(o)&&li(o)==ue}function EC(o){return mn(o)&&li(o)==Ee}function MC(o){return mn(o)&&li(o)==Ce}function Zl(o,c,d,S,b){return o===c?!0:o==null||c==null||!mn(o)&&!mn(c)?o!==o&&c!==c:bC(o,c,d,S,Zl,b)}function bC(o,c,d,S,b,D){var B=mt(o),k=mt(c),X=B?Te:Qn(o),fe=k?Te:Qn(c);X=X==ue?K:X,fe=fe==ue?K:fe;var he=X==K,ge=fe==K,Le=X==fe;if(Le&&Ws(o)){if(!Ws(c))return!1;B=!0,he=!1}if(Le&&!he)return D||(D=new br),B||Pa(o)?D0(o,c,d,S,b,D):ZC(o,c,X,d,S,b,D);if(!(d&y)){var Ke=he&&Vt.call(o,"__wrapped__"),ct=ge&&Vt.call(c,"__wrapped__");if(Ke||ct){var Et=Ke?o.value():o,ut=ct?c.value():c;return D||(D=new br),b(Et,ut,d,S,D)}}return Le?(D||(D=new br),JC(o,c,d,S,b,D)):!1}function TC(o){return mn(o)&&Qn(o)==be}function Ad(o,c,d,S){var b=d.length,D=b,B=!S;if(o==null)return!D;for(o=Zt(o);b--;){var k=d[b];if(B&&k[2]?k[1]!==o[k[0]]:!(k[0]in o))return!1}for(;++b<D;){k=d[b];var X=k[0],fe=o[X],he=k[1];if(B&&k[2]){if(fe===t&&!(X in o))return!1}else{var ge=new br;if(S)var Le=S(fe,he,X,o,c,ge);if(!(Le===t?Zl(he,fe,y|x,S,ge):Le))return!1}}return!0}function e0(o){if(!un(o)||aR(o))return!1;var c=hs(o)?TA:ee;return c.test(wo(o))}function wC(o){return mn(o)&&li(o)==P}function AC(o){return mn(o)&&Qn(o)==Y}function CC(o){return mn(o)&&qu(o.length)&&!!rn[li(o)]}function t0(o){return typeof o=="function"?o:o==null?Ti:typeof o=="object"?mt(o)?r0(o[0],o[1]):i0(o):Mx(o)}function Cd(o){if(!ec(o))return LA(o);var c=[];for(var d in Zt(o))Vt.call(o,d)&&d!="constructor"&&c.push(d);return c}function RC(o){if(!un(o))return fR(o);var c=ec(o),d=[];for(var S in o)S=="constructor"&&(c||!Vt.call(o,S))||d.push(S);return d}function Rd(o,c){return o<c}function n0(o,c){var d=-1,S=Mi(o)?re(o.length):[];return zs(o,function(b,D,B){S[++d]=c(b,D,B)}),S}function i0(o){var c=Vd(o);return c.length==1&&c[0][2]?F0(c[0][0],c[0][1]):function(d){return d===o||Ad(d,o,c)}}function r0(o,c){return Xd(o)&&N0(c)?F0(Hr(o),c):function(d){var S=np(d,o);return S===t&&S===c?ip(d,o):Zl(c,S,y|x)}}function Lu(o,c,d,S,b){o!==c&&Md(c,function(D,B){if(b||(b=new br),un(D))PC(o,c,B,d,Lu,S,b);else{var k=S?S(Yd(o,B),D,B+"",o,c,b):t;k===t&&(k=D),Sd(o,B,k)}},bi)}function PC(o,c,d,S,b,D,B){var k=Yd(o,d),X=Yd(c,d),fe=B.get(X);if(fe){Sd(o,d,fe);return}var he=D?D(k,X,d+"",o,c,B):t,ge=he===t;if(ge){var Le=mt(X),Ke=!Le&&Ws(X),ct=!Le&&!Ke&&Pa(X);he=X,Le||Ke||ct?mt(k)?he=k:Sn(k)?he=Ei(k):Ke?(ge=!1,he=g0(X,!0)):ct?(ge=!1,he=_0(X,!0)):he=[]:nc(X)||Ao(X)?(he=k,Ao(k)?he=dx(k):(!un(k)||hs(k))&&(he=U0(X))):ge=!1}ge&&(B.set(X,he),b(he,X,S,D,B),B.delete(X)),Sd(o,d,he)}function s0(o,c){var d=o.length;if(d)return c+=c<0?d:0,fs(c,d)?o[c]:t}function o0(o,c,d){c.length?c=ln(c,function(D){return mt(D)?function(B){return bo(B,D.length===1?D[0]:D)}:D}):c=[Ti];var S=-1;c=ln(c,Fi(lt()));var b=n0(o,function(D,B,k){var X=ln(c,function(fe){return fe(D)});return{criteria:X,index:++S,value:D}});return iA(b,function(D,B){return WC(D,B,d)})}function LC(o,c){return a0(o,c,function(d,S){return ip(o,S)})}function a0(o,c,d){for(var S=-1,b=c.length,D={};++S<b;){var B=c[S],k=bo(o,B);d(k,B)&&Jl(D,ks(B,o),k)}return D}function DC(o){return function(c){return bo(c,o)}}function Pd(o,c,d,S){var b=S?nA:xa,D=-1,B=c.length,k=o;for(o===c&&(c=Ei(c)),d&&(k=ln(o,Fi(d)));++D<B;)for(var X=0,fe=c[D],he=d?d(fe):fe;(X=b(k,he,X,S))>-1;)k!==o&&Su.call(k,X,1),Su.call(o,X,1);return o}function l0(o,c){for(var d=o?c.length:0,S=d-1;d--;){var b=c[d];if(d==S||b!==D){var D=b;fs(b)?Su.call(o,b,1):Od(o,b)}}return o}function Ld(o,c){return o+bu(Gv()*(c-o+1))}function IC(o,c,d,S){for(var b=-1,D=Ln(Mu((c-o)/(d||1)),0),B=re(D);D--;)B[S?D:++b]=o,o+=d;return B}function Dd(o,c){var d="";if(!o||c<1||c>ie)return d;do c%2&&(d+=o),c=bu(c/2),c&&(o+=o);while(c);return d}function bt(o,c){return jd(B0(o,c,Ti),o+"")}function OC(o){return $v(La(o))}function UC(o,c){var d=La(o);return ku(d,Mo(c,0,d.length))}function Jl(o,c,d,S){if(!un(o))return o;c=ks(c,o);for(var b=-1,D=c.length,B=D-1,k=o;k!=null&&++b<D;){var X=Hr(c[b]),fe=d;if(X==="__proto__"||X==="constructor"||X==="prototype")return o;if(b!=B){var he=k[X];fe=S?S(he,X,k):t,fe===t&&(fe=un(he)?he:fs(c[b+1])?[]:{})}Yl(k,X,fe),k=k[X]}return o}var c0=Tu?function(o,c){return Tu.set(o,c),o}:Ti,NC=Eu?function(o,c){return Eu(o,"toString",{configurable:!0,enumerable:!1,value:sp(c),writable:!0})}:Ti;function FC(o){return ku(La(o))}function ar(o,c,d){var S=-1,b=o.length;c<0&&(c=-c>b?0:b+c),d=d>b?b:d,d<0&&(d+=b),b=c>d?0:d-c>>>0,c>>>=0;for(var D=re(b);++S<b;)D[S]=o[S+c];return D}function BC(o,c){var d;return zs(o,function(S,b,D){return d=c(S,b,D),!d}),!!d}function Du(o,c,d){var S=0,b=o==null?S:o.length;if(typeof c=="number"&&c===c&&b<=Je){for(;S<b;){var D=S+b>>>1,B=o[D];B!==null&&!zi(B)&&(d?B<=c:B<c)?S=D+1:b=D}return b}return Id(o,c,Ti,d)}function Id(o,c,d,S){var b=0,D=o==null?0:o.length;if(D===0)return 0;c=d(c);for(var B=c!==c,k=c===null,X=zi(c),fe=c===t;b<D;){var he=bu((b+D)/2),ge=d(o[he]),Le=ge!==t,Ke=ge===null,ct=ge===ge,Et=zi(ge);if(B)var ut=S||ct;else fe?ut=ct&&(S||Le):k?ut=ct&&Le&&(S||!Ke):X?ut=ct&&Le&&!Ke&&(S||!Et):Ke||Et?ut=!1:ut=S?ge<=c:ge<c;ut?b=he+1:D=he}return Jn(D,Se)}function u0(o,c){for(var d=-1,S=o.length,b=0,D=[];++d<S;){var B=o[d],k=c?c(B):B;if(!d||!Tr(k,X)){var X=k;D[b++]=B===0?0:B}}return D}function f0(o){return typeof o=="number"?o:zi(o)?N:+o}function Bi(o){if(typeof o=="string")return o;if(mt(o))return ln(o,Bi)+"";if(zi(o))return Wv?Wv.call(o):"";var c=o+"";return c=="0"&&1/o==-te?"-0":c}function Hs(o,c,d){var S=-1,b=fu,D=o.length,B=!0,k=[],X=k;if(d)B=!1,b=ld;else if(D>=r){var fe=c?null:jC(o);if(fe)return du(fe);B=!1,b=Gl,X=new Eo}else X=c?[]:k;e:for(;++S<D;){var he=o[S],ge=c?c(he):he;if(he=d||he!==0?he:0,B&&ge===ge){for(var Le=X.length;Le--;)if(X[Le]===ge)continue e;c&&X.push(ge),k.push(he)}else b(X,ge,d)||(X!==k&&X.push(ge),k.push(he))}return k}function Od(o,c){return c=ks(c,o),o=z0(o,c),o==null||delete o[Hr(lr(c))]}function h0(o,c,d,S){return Jl(o,c,d(bo(o,c)),S)}function Iu(o,c,d,S){for(var b=o.length,D=S?b:-1;(S?D--:++D<b)&&c(o[D],D,o););return d?ar(o,S?0:D,S?D+1:b):ar(o,S?D+1:0,S?b:D)}function d0(o,c){var d=o;return d instanceof Lt&&(d=d.value()),cd(c,function(S,b){return b.func.apply(b.thisArg,Ns([S],b.args))},d)}function Ud(o,c,d){var S=o.length;if(S<2)return S?Hs(o[0]):[];for(var b=-1,D=re(S);++b<S;)for(var B=o[b],k=-1;++k<S;)k!=b&&(D[b]=jl(D[b]||B,o[k],c,d));return Hs($n(D,1),c,d)}function p0(o,c,d){for(var S=-1,b=o.length,D=c.length,B={};++S<b;){var k=S<D?c[S]:t;d(B,o[S],k)}return B}function Nd(o){return Sn(o)?o:[]}function Fd(o){return typeof o=="function"?o:Ti}function ks(o,c){return mt(o)?o:Xd(o,c)?[o]:W0(Gt(o))}var zC=bt;function Gs(o,c,d){var S=o.length;return d=d===t?S:d,!c&&d>=S?o:ar(o,c,d)}var m0=wA||function(o){return Vn.clearTimeout(o)};function g0(o,c){if(c)return o.slice();var d=o.length,S=Fv?Fv(d):new o.constructor(d);return o.copy(S),S}function Bd(o){var c=new o.constructor(o.byteLength);return new xu(c).set(new xu(o)),c}function HC(o,c){var d=c?Bd(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.byteLength)}function kC(o){var c=new o.constructor(o.source,Zn.exec(o));return c.lastIndex=o.lastIndex,c}function GC(o){return ql?Zt(ql.call(o)):{}}function _0(o,c){var d=c?Bd(o.buffer):o.buffer;return new o.constructor(d,o.byteOffset,o.length)}function v0(o,c){if(o!==c){var d=o!==t,S=o===null,b=o===o,D=zi(o),B=c!==t,k=c===null,X=c===c,fe=zi(c);if(!k&&!fe&&!D&&o>c||D&&B&&X&&!k&&!fe||S&&B&&X||!d&&X||!b)return 1;if(!S&&!D&&!fe&&o<c||fe&&d&&b&&!S&&!D||k&&d&&b||!B&&b||!X)return-1}return 0}function WC(o,c,d){for(var S=-1,b=o.criteria,D=c.criteria,B=b.length,k=d.length;++S<B;){var X=v0(b[S],D[S]);if(X){if(S>=k)return X;var fe=d[S];return X*(fe=="desc"?-1:1)}}return o.index-c.index}function x0(o,c,d,S){for(var b=-1,D=o.length,B=d.length,k=-1,X=c.length,fe=Ln(D-B,0),he=re(X+fe),ge=!S;++k<X;)he[k]=c[k];for(;++b<B;)(ge||b<D)&&(he[d[b]]=o[b]);for(;fe--;)he[k++]=o[b++];return he}function y0(o,c,d,S){for(var b=-1,D=o.length,B=-1,k=d.length,X=-1,fe=c.length,he=Ln(D-k,0),ge=re(he+fe),Le=!S;++b<he;)ge[b]=o[b];for(var Ke=b;++X<fe;)ge[Ke+X]=c[X];for(;++B<k;)(Le||b<D)&&(ge[Ke+d[B]]=o[b++]);return ge}function Ei(o,c){var d=-1,S=o.length;for(c||(c=re(S));++d<S;)c[d]=o[d];return c}function zr(o,c,d,S){var b=!d;d||(d={});for(var D=-1,B=c.length;++D<B;){var k=c[D],X=S?S(d[k],o[k],k,d,o):t;X===t&&(X=o[k]),b?ls(d,k,X):Yl(d,k,X)}return d}function VC(o,c){return zr(o,$d(o),c)}function $C(o,c){return zr(o,I0(o),c)}function Ou(o,c){return function(d,S){var b=mt(d)?Kw:dC,D=c?c():{};return b(d,o,lt(S,2),D)}}function Aa(o){return bt(function(c,d){var S=-1,b=d.length,D=b>1?d[b-1]:t,B=b>2?d[2]:t;for(D=o.length>3&&typeof D=="function"?(b--,D):t,B&&ci(d[0],d[1],B)&&(D=b<3?t:D,b=1),c=Zt(c);++S<b;){var k=d[S];k&&o(c,k,S,D)}return c})}function S0(o,c){return function(d,S){if(d==null)return d;if(!Mi(d))return o(d,S);for(var b=d.length,D=c?b:-1,B=Zt(d);(c?D--:++D<b)&&S(B[D],D,B)!==!1;);return d}}function E0(o){return function(c,d,S){for(var b=-1,D=Zt(c),B=S(c),k=B.length;k--;){var X=B[o?k:++b];if(d(D[X],X,D)===!1)break}return c}}function XC(o,c,d){var S=c&_,b=Ql(o);function D(){var B=this&&this!==Vn&&this instanceof D?b:o;return B.apply(S?d:this,arguments)}return D}function M0(o){return function(c){c=Gt(c);var d=ya(c)?Mr(c):t,S=d?d[0]:c.charAt(0),b=d?Gs(d,1).join(""):c.slice(1);return S[o]()+b}}function Ca(o){return function(c){return cd(Sx(yx(c).replace(Nw,"")),o,"")}}function Ql(o){return function(){var c=arguments;switch(c.length){case 0:return new o;case 1:return new o(c[0]);case 2:return new o(c[0],c[1]);case 3:return new o(c[0],c[1],c[2]);case 4:return new o(c[0],c[1],c[2],c[3]);case 5:return new o(c[0],c[1],c[2],c[3],c[4]);case 6:return new o(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new o(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var d=wa(o.prototype),S=o.apply(d,c);return un(S)?S:d}}function qC(o,c,d){var S=Ql(o);function b(){for(var D=arguments.length,B=re(D),k=D,X=Ra(b);k--;)B[k]=arguments[k];var fe=D<3&&B[0]!==X&&B[D-1]!==X?[]:Fs(B,X);if(D-=fe.length,D<d)return C0(o,c,Uu,b.placeholder,t,B,fe,t,t,d-D);var he=this&&this!==Vn&&this instanceof b?S:o;return Ni(he,this,B)}return b}function b0(o){return function(c,d,S){var b=Zt(c);if(!Mi(c)){var D=lt(d,3);c=Nn(c),d=function(k){return D(b[k],k,b)}}var B=o(c,d,S);return B>-1?b[D?c[B]:B]:t}}function T0(o){return us(function(c){var d=c.length,S=d,b=sr.prototype.thru;for(o&&c.reverse();S--;){var D=c[S];if(typeof D!="function")throw new rr(a);if(b&&!B&&zu(D)=="wrapper")var B=new sr([],!0)}for(S=B?S:d;++S<d;){D=c[S];var k=zu(D),X=k=="wrapper"?Wd(D):t;X&&qd(X[0])&&X[1]==(A|T|C|z)&&!X[4].length&&X[9]==1?B=B[zu(X[0])].apply(B,X[3]):B=D.length==1&&qd(D)?B[k]():B.thru(D)}return function(){var fe=arguments,he=fe[0];if(B&&fe.length==1&&mt(he))return B.plant(he).value();for(var ge=0,Le=d?c[ge].apply(this,fe):he;++ge<d;)Le=c[ge].call(this,Le);return Le}})}function Uu(o,c,d,S,b,D,B,k,X,fe){var he=c&A,ge=c&_,Le=c&v,Ke=c&(T|E),ct=c&G,Et=Le?t:Ql(o);function ut(){for(var Rt=arguments.length,Ot=re(Rt),Hi=Rt;Hi--;)Ot[Hi]=arguments[Hi];if(Ke)var ui=Ra(ut),ki=sA(Ot,ui);if(S&&(Ot=x0(Ot,S,b,Ke)),D&&(Ot=y0(Ot,D,B,Ke)),Rt-=ki,Ke&&Rt<fe){var En=Fs(Ot,ui);return C0(o,c,Uu,ut.placeholder,d,Ot,En,k,X,fe-Rt)}var wr=ge?d:this,ps=Le?wr[o]:o;return Rt=Ot.length,k?Ot=dR(Ot,k):ct&&Rt>1&&Ot.reverse(),he&&X<Rt&&(Ot.length=X),this&&this!==Vn&&this instanceof ut&&(ps=Et||Ql(ps)),ps.apply(wr,Ot)}return ut}function w0(o,c){return function(d,S){return SC(d,o,c(S),{})}}function Nu(o,c){return function(d,S){var b;if(d===t&&S===t)return c;if(d!==t&&(b=d),S!==t){if(b===t)return S;typeof d=="string"||typeof S=="string"?(d=Bi(d),S=Bi(S)):(d=f0(d),S=f0(S)),b=o(d,S)}return b}}function zd(o){return us(function(c){return c=ln(c,Fi(lt())),bt(function(d){var S=this;return o(c,function(b){return Ni(b,S,d)})})})}function Fu(o,c){c=c===t?" ":Bi(c);var d=c.length;if(d<2)return d?Dd(c,o):c;var S=Dd(c,Mu(o/Sa(c)));return ya(c)?Gs(Mr(S),0,o).join(""):S.slice(0,o)}function YC(o,c,d,S){var b=c&_,D=Ql(o);function B(){for(var k=-1,X=arguments.length,fe=-1,he=S.length,ge=re(he+X),Le=this&&this!==Vn&&this instanceof B?D:o;++fe<he;)ge[fe]=S[fe];for(;X--;)ge[fe++]=arguments[++k];return Ni(Le,b?d:this,ge)}return B}function A0(o){return function(c,d,S){return S&&typeof S!="number"&&ci(c,d,S)&&(d=S=t),c=ds(c),d===t?(d=c,c=0):d=ds(d),S=S===t?c<d?1:-1:ds(S),IC(c,d,S,o)}}function Bu(o){return function(c,d){return typeof c=="string"&&typeof d=="string"||(c=cr(c),d=cr(d)),o(c,d)}}function C0(o,c,d,S,b,D,B,k,X,fe){var he=c&T,ge=he?B:t,Le=he?t:B,Ke=he?D:t,ct=he?t:D;c|=he?C:R,c&=~(he?R:C),c&w||(c&=~(_|v));var Et=[o,c,b,Ke,ge,ct,Le,k,X,fe],ut=d.apply(t,Et);return qd(o)&&H0(ut,Et),ut.placeholder=S,k0(ut,o,c)}function Hd(o){var c=Pn[o];return function(d,S){if(d=cr(d),S=S==null?0:Jn(xt(S),292),S&&kv(d)){var b=(Gt(d)+"e").split("e"),D=c(b[0]+"e"+(+b[1]+S));return b=(Gt(D)+"e").split("e"),+(b[0]+"e"+(+b[1]-S))}return c(d)}}var jC=ba&&1/du(new ba([,-0]))[1]==te?function(o){return new ba(o)}:lp;function R0(o){return function(c){var d=Qn(c);return d==be?gd(c):d==Y?hA(c):rA(c,o(c))}}function cs(o,c,d,S,b,D,B,k){var X=c&v;if(!X&&typeof o!="function")throw new rr(a);var fe=S?S.length:0;if(fe||(c&=~(C|R),S=b=t),B=B===t?B:Ln(xt(B),0),k=k===t?k:xt(k),fe-=b?b.length:0,c&R){var he=S,ge=b;S=b=t}var Le=X?t:Wd(o),Ke=[o,c,d,S,b,he,ge,D,B,k];if(Le&&uR(Ke,Le),o=Ke[0],c=Ke[1],d=Ke[2],S=Ke[3],b=Ke[4],k=Ke[9]=Ke[9]===t?X?0:o.length:Ln(Ke[9]-fe,0),!k&&c&(T|E)&&(c&=~(T|E)),!c||c==_)var ct=XC(o,c,d);else c==T||c==E?ct=qC(o,c,k):(c==C||c==(_|C))&&!b.length?ct=YC(o,c,d,S):ct=Uu.apply(t,Ke);var Et=Le?c0:H0;return k0(Et(ct,Ke),o,c)}function P0(o,c,d,S){return o===t||Tr(o,Ma[d])&&!Vt.call(S,d)?c:o}function L0(o,c,d,S,b,D){return un(o)&&un(c)&&(D.set(c,o),Lu(o,c,t,L0,D),D.delete(c)),o}function KC(o){return nc(o)?t:o}function D0(o,c,d,S,b,D){var B=d&y,k=o.length,X=c.length;if(k!=X&&!(B&&X>k))return!1;var fe=D.get(o),he=D.get(c);if(fe&&he)return fe==c&&he==o;var ge=-1,Le=!0,Ke=d&x?new Eo:t;for(D.set(o,c),D.set(c,o);++ge<k;){var ct=o[ge],Et=c[ge];if(S)var ut=B?S(Et,ct,ge,c,o,D):S(ct,Et,ge,o,c,D);if(ut!==t){if(ut)continue;Le=!1;break}if(Ke){if(!ud(c,function(Rt,Ot){if(!Gl(Ke,Ot)&&(ct===Rt||b(ct,Rt,d,S,D)))return Ke.push(Ot)})){Le=!1;break}}else if(!(ct===Et||b(ct,Et,d,S,D))){Le=!1;break}}return D.delete(o),D.delete(c),Le}function ZC(o,c,d,S,b,D,B){switch(d){case He:if(o.byteLength!=c.byteLength||o.byteOffset!=c.byteOffset)return!1;o=o.buffer,c=c.buffer;case Ee:return!(o.byteLength!=c.byteLength||!D(new xu(o),new xu(c)));case Oe:case Ce:case Ge:return Tr(+o,+c);case $e:return o.name==c.name&&o.message==c.message;case P:case me:return o==c+"";case be:var k=gd;case Y:var X=S&y;if(k||(k=du),o.size!=c.size&&!X)return!1;var fe=B.get(o);if(fe)return fe==c;S|=x,B.set(o,c);var he=D0(k(o),k(c),S,b,D,B);return B.delete(o),he;case de:if(ql)return ql.call(o)==ql.call(c)}return!1}function JC(o,c,d,S,b,D){var B=d&y,k=kd(o),X=k.length,fe=kd(c),he=fe.length;if(X!=he&&!B)return!1;for(var ge=X;ge--;){var Le=k[ge];if(!(B?Le in c:Vt.call(c,Le)))return!1}var Ke=D.get(o),ct=D.get(c);if(Ke&&ct)return Ke==c&&ct==o;var Et=!0;D.set(o,c),D.set(c,o);for(var ut=B;++ge<X;){Le=k[ge];var Rt=o[Le],Ot=c[Le];if(S)var Hi=B?S(Ot,Rt,Le,c,o,D):S(Rt,Ot,Le,o,c,D);if(!(Hi===t?Rt===Ot||b(Rt,Ot,d,S,D):Hi)){Et=!1;break}ut||(ut=Le=="constructor")}if(Et&&!ut){var ui=o.constructor,ki=c.constructor;ui!=ki&&"constructor"in o&&"constructor"in c&&!(typeof ui=="function"&&ui instanceof ui&&typeof ki=="function"&&ki instanceof ki)&&(Et=!1)}return D.delete(o),D.delete(c),Et}function us(o){return jd(B0(o,t,q0),o+"")}function kd(o){return Jv(o,Nn,$d)}function Gd(o){return Jv(o,bi,I0)}var Wd=Tu?function(o){return Tu.get(o)}:lp;function zu(o){for(var c=o.name+"",d=Ta[c],S=Vt.call(Ta,c)?d.length:0;S--;){var b=d[S],D=b.func;if(D==null||D==o)return b.name}return c}function Ra(o){var c=Vt.call(L,"placeholder")?L:o;return c.placeholder}function lt(){var o=L.iteratee||op;return o=o===op?t0:o,arguments.length?o(arguments[0],arguments[1]):o}function Hu(o,c){var d=o.__data__;return oR(c)?d[typeof c=="string"?"string":"hash"]:d.map}function Vd(o){for(var c=Nn(o),d=c.length;d--;){var S=c[d],b=o[S];c[d]=[S,b,N0(b)]}return c}function To(o,c){var d=cA(o,c);return e0(d)?d:t}function QC(o){var c=Vt.call(o,yo),d=o[yo];try{o[yo]=t;var S=!0}catch{}var b=_u.call(o);return S&&(c?o[yo]=d:delete o[yo]),b}var $d=vd?function(o){return o==null?[]:(o=Zt(o),Us(vd(o),function(c){return zv.call(o,c)}))}:cp,I0=vd?function(o){for(var c=[];o;)Ns(c,$d(o)),o=yu(o);return c}:cp,Qn=li;(xd&&Qn(new xd(new ArrayBuffer(1)))!=He||Vl&&Qn(new Vl)!=be||yd&&Qn(yd.resolve())!=et||ba&&Qn(new ba)!=Y||$l&&Qn(new $l)!=Ae)&&(Qn=function(o){var c=li(o),d=c==K?o.constructor:t,S=d?wo(d):"";if(S)switch(S){case UA:return He;case NA:return be;case FA:return et;case BA:return Y;case zA:return Ae}return c});function eR(o,c,d){for(var S=-1,b=d.length;++S<b;){var D=d[S],B=D.size;switch(D.type){case"drop":o+=B;break;case"dropRight":c-=B;break;case"take":c=Jn(c,o+B);break;case"takeRight":o=Ln(o,c-B);break}}return{start:o,end:c}}function tR(o){var c=o.match(St);return c?c[1].split($t):[]}function O0(o,c,d){c=ks(c,o);for(var S=-1,b=c.length,D=!1;++S<b;){var B=Hr(c[S]);if(!(D=o!=null&&d(o,B)))break;o=o[B]}return D||++S!=b?D:(b=o==null?0:o.length,!!b&&qu(b)&&fs(B,b)&&(mt(o)||Ao(o)))}function nR(o){var c=o.length,d=new o.constructor(c);return c&&typeof o[0]=="string"&&Vt.call(o,"index")&&(d.index=o.index,d.input=o.input),d}function U0(o){return typeof o.constructor=="function"&&!ec(o)?wa(yu(o)):{}}function iR(o,c,d){var S=o.constructor;switch(c){case Ee:return Bd(o);case Oe:case Ce:return new S(+o);case He:return HC(o,d);case tt:case pe:case Tt:case Xe:case ot:case We:case Ie:case at:case _t:return _0(o,d);case be:return new S;case Ge:case me:return new S(o);case P:return kC(o);case Y:return new S;case de:return GC(o)}}function rR(o,c){var d=c.length;if(!d)return o;var S=d-1;return c[S]=(d>1?"& ":"")+c[S],c=c.join(d>2?", ":" "),o.replace(tn,`{
/* [wrapped with `+c+`] */
`)}function sR(o){return mt(o)||Ao(o)||!!(Hv&&o&&o[Hv])}function fs(o,c){var d=typeof o;return c=c??ie,!!c&&(d=="number"||d!="symbol"&&Z.test(o))&&o>-1&&o%1==0&&o<c}function ci(o,c,d){if(!un(d))return!1;var S=typeof c;return(S=="number"?Mi(d)&&fs(c,d.length):S=="string"&&c in d)?Tr(d[c],o):!1}function Xd(o,c){if(mt(o))return!1;var d=typeof o;return d=="number"||d=="symbol"||d=="boolean"||o==null||zi(o)?!0:Ve.test(o)||!qe.test(o)||c!=null&&o in Zt(c)}function oR(o){var c=typeof o;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?o!=="__proto__":o===null}function qd(o){var c=zu(o),d=L[c];if(typeof d!="function"||!(c in Lt.prototype))return!1;if(o===d)return!0;var S=Wd(d);return!!S&&o===S[0]}function aR(o){return!!Nv&&Nv in o}var lR=mu?hs:up;function ec(o){var c=o&&o.constructor,d=typeof c=="function"&&c.prototype||Ma;return o===d}function N0(o){return o===o&&!un(o)}function F0(o,c){return function(d){return d==null?!1:d[o]===c&&(c!==t||o in Zt(d))}}function cR(o){var c=$u(o,function(S){return d.size===f&&d.clear(),S}),d=c.cache;return c}function uR(o,c){var d=o[1],S=c[1],b=d|S,D=b<(_|v|A),B=S==A&&d==T||S==A&&d==z&&o[7].length<=c[8]||S==(A|z)&&c[7].length<=c[8]&&d==T;if(!(D||B))return o;S&_&&(o[2]=c[2],b|=d&_?0:w);var k=c[3];if(k){var X=o[3];o[3]=X?x0(X,k,c[4]):k,o[4]=X?Fs(o[3],h):c[4]}return k=c[5],k&&(X=o[5],o[5]=X?y0(X,k,c[6]):k,o[6]=X?Fs(o[5],h):c[6]),k=c[7],k&&(o[7]=k),S&A&&(o[8]=o[8]==null?c[8]:Jn(o[8],c[8])),o[9]==null&&(o[9]=c[9]),o[0]=c[0],o[1]=b,o}function fR(o){var c=[];if(o!=null)for(var d in Zt(o))c.push(d);return c}function hR(o){return _u.call(o)}function B0(o,c,d){return c=Ln(c===t?o.length-1:c,0),function(){for(var S=arguments,b=-1,D=Ln(S.length-c,0),B=re(D);++b<D;)B[b]=S[c+b];b=-1;for(var k=re(c+1);++b<c;)k[b]=S[b];return k[c]=d(B),Ni(o,this,k)}}function z0(o,c){return c.length<2?o:bo(o,ar(c,0,-1))}function dR(o,c){for(var d=o.length,S=Jn(c.length,d),b=Ei(o);S--;){var D=c[S];o[S]=fs(D,d)?b[D]:t}return o}function Yd(o,c){if(!(c==="constructor"&&typeof o[c]=="function")&&c!="__proto__")return o[c]}var H0=G0(c0),tc=CA||function(o,c){return Vn.setTimeout(o,c)},jd=G0(NC);function k0(o,c,d){var S=c+"";return jd(o,rR(S,pR(tR(S),d)))}function G0(o){var c=0,d=0;return function(){var S=DA(),b=ae-(S-d);if(d=S,b>0){if(++c>=V)return arguments[0]}else c=0;return o.apply(t,arguments)}}function ku(o,c){var d=-1,S=o.length,b=S-1;for(c=c===t?S:c;++d<c;){var D=Ld(d,b),B=o[D];o[D]=o[d],o[d]=B}return o.length=c,o}var W0=cR(function(o){var c=[];return o.charCodeAt(0)===46&&c.push(""),o.replace(je,function(d,S,b,D){c.push(b?D.replace(Xt,"$1"):S||d)}),c});function Hr(o){if(typeof o=="string"||zi(o))return o;var c=o+"";return c=="0"&&1/o==-te?"-0":c}function wo(o){if(o!=null){try{return gu.call(o)}catch{}try{return o+""}catch{}}return""}function pR(o,c){return ir(ne,function(d){var S="_."+d[0];c&d[1]&&!fu(o,S)&&o.push(S)}),o.sort()}function V0(o){if(o instanceof Lt)return o.clone();var c=new sr(o.__wrapped__,o.__chain__);return c.__actions__=Ei(o.__actions__),c.__index__=o.__index__,c.__values__=o.__values__,c}function mR(o,c,d){(d?ci(o,c,d):c===t)?c=1:c=Ln(xt(c),0);var S=o==null?0:o.length;if(!S||c<1)return[];for(var b=0,D=0,B=re(Mu(S/c));b<S;)B[D++]=ar(o,b,b+=c);return B}function gR(o){for(var c=-1,d=o==null?0:o.length,S=0,b=[];++c<d;){var D=o[c];D&&(b[S++]=D)}return b}function _R(){var o=arguments.length;if(!o)return[];for(var c=re(o-1),d=arguments[0],S=o;S--;)c[S-1]=arguments[S];return Ns(mt(d)?Ei(d):[d],$n(c,1))}var vR=bt(function(o,c){return Sn(o)?jl(o,$n(c,1,Sn,!0)):[]}),xR=bt(function(o,c){var d=lr(c);return Sn(d)&&(d=t),Sn(o)?jl(o,$n(c,1,Sn,!0),lt(d,2)):[]}),yR=bt(function(o,c){var d=lr(c);return Sn(d)&&(d=t),Sn(o)?jl(o,$n(c,1,Sn,!0),t,d):[]});function SR(o,c,d){var S=o==null?0:o.length;return S?(c=d||c===t?1:xt(c),ar(o,c<0?0:c,S)):[]}function ER(o,c,d){var S=o==null?0:o.length;return S?(c=d||c===t?1:xt(c),c=S-c,ar(o,0,c<0?0:c)):[]}function MR(o,c){return o&&o.length?Iu(o,lt(c,3),!0,!0):[]}function bR(o,c){return o&&o.length?Iu(o,lt(c,3),!0):[]}function TR(o,c,d,S){var b=o==null?0:o.length;return b?(d&&typeof d!="number"&&ci(o,c,d)&&(d=0,S=b),_C(o,c,d,S)):[]}function $0(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var b=d==null?0:xt(d);return b<0&&(b=Ln(S+b,0)),hu(o,lt(c,3),b)}function X0(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var b=S-1;return d!==t&&(b=xt(d),b=d<0?Ln(S+b,0):Jn(b,S-1)),hu(o,lt(c,3),b,!0)}function q0(o){var c=o==null?0:o.length;return c?$n(o,1):[]}function wR(o){var c=o==null?0:o.length;return c?$n(o,te):[]}function AR(o,c){var d=o==null?0:o.length;return d?(c=c===t?1:xt(c),$n(o,c)):[]}function CR(o){for(var c=-1,d=o==null?0:o.length,S={};++c<d;){var b=o[c];S[b[0]]=b[1]}return S}function Y0(o){return o&&o.length?o[0]:t}function RR(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var b=d==null?0:xt(d);return b<0&&(b=Ln(S+b,0)),xa(o,c,b)}function PR(o){var c=o==null?0:o.length;return c?ar(o,0,-1):[]}var LR=bt(function(o){var c=ln(o,Nd);return c.length&&c[0]===o[0]?wd(c):[]}),DR=bt(function(o){var c=lr(o),d=ln(o,Nd);return c===lr(d)?c=t:d.pop(),d.length&&d[0]===o[0]?wd(d,lt(c,2)):[]}),IR=bt(function(o){var c=lr(o),d=ln(o,Nd);return c=typeof c=="function"?c:t,c&&d.pop(),d.length&&d[0]===o[0]?wd(d,t,c):[]});function OR(o,c){return o==null?"":PA.call(o,c)}function lr(o){var c=o==null?0:o.length;return c?o[c-1]:t}function UR(o,c,d){var S=o==null?0:o.length;if(!S)return-1;var b=S;return d!==t&&(b=xt(d),b=b<0?Ln(S+b,0):Jn(b,S-1)),c===c?pA(o,c,b):hu(o,Cv,b,!0)}function NR(o,c){return o&&o.length?s0(o,xt(c)):t}var FR=bt(j0);function j0(o,c){return o&&o.length&&c&&c.length?Pd(o,c):o}function BR(o,c,d){return o&&o.length&&c&&c.length?Pd(o,c,lt(d,2)):o}function zR(o,c,d){return o&&o.length&&c&&c.length?Pd(o,c,t,d):o}var HR=us(function(o,c){var d=o==null?0:o.length,S=Ed(o,c);return l0(o,ln(c,function(b){return fs(b,d)?+b:b}).sort(v0)),S});function kR(o,c){var d=[];if(!(o&&o.length))return d;var S=-1,b=[],D=o.length;for(c=lt(c,3);++S<D;){var B=o[S];c(B,S,o)&&(d.push(B),b.push(S))}return l0(o,b),d}function Kd(o){return o==null?o:OA.call(o)}function GR(o,c,d){var S=o==null?0:o.length;return S?(d&&typeof d!="number"&&ci(o,c,d)?(c=0,d=S):(c=c==null?0:xt(c),d=d===t?S:xt(d)),ar(o,c,d)):[]}function WR(o,c){return Du(o,c)}function VR(o,c,d){return Id(o,c,lt(d,2))}function $R(o,c){var d=o==null?0:o.length;if(d){var S=Du(o,c);if(S<d&&Tr(o[S],c))return S}return-1}function XR(o,c){return Du(o,c,!0)}function qR(o,c,d){return Id(o,c,lt(d,2),!0)}function YR(o,c){var d=o==null?0:o.length;if(d){var S=Du(o,c,!0)-1;if(Tr(o[S],c))return S}return-1}function jR(o){return o&&o.length?u0(o):[]}function KR(o,c){return o&&o.length?u0(o,lt(c,2)):[]}function ZR(o){var c=o==null?0:o.length;return c?ar(o,1,c):[]}function JR(o,c,d){return o&&o.length?(c=d||c===t?1:xt(c),ar(o,0,c<0?0:c)):[]}function QR(o,c,d){var S=o==null?0:o.length;return S?(c=d||c===t?1:xt(c),c=S-c,ar(o,c<0?0:c,S)):[]}function eP(o,c){return o&&o.length?Iu(o,lt(c,3),!1,!0):[]}function tP(o,c){return o&&o.length?Iu(o,lt(c,3)):[]}var nP=bt(function(o){return Hs($n(o,1,Sn,!0))}),iP=bt(function(o){var c=lr(o);return Sn(c)&&(c=t),Hs($n(o,1,Sn,!0),lt(c,2))}),rP=bt(function(o){var c=lr(o);return c=typeof c=="function"?c:t,Hs($n(o,1,Sn,!0),t,c)});function sP(o){return o&&o.length?Hs(o):[]}function oP(o,c){return o&&o.length?Hs(o,lt(c,2)):[]}function aP(o,c){return c=typeof c=="function"?c:t,o&&o.length?Hs(o,t,c):[]}function Zd(o){if(!(o&&o.length))return[];var c=0;return o=Us(o,function(d){if(Sn(d))return c=Ln(d.length,c),!0}),pd(c,function(d){return ln(o,fd(d))})}function K0(o,c){if(!(o&&o.length))return[];var d=Zd(o);return c==null?d:ln(d,function(S){return Ni(c,t,S)})}var lP=bt(function(o,c){return Sn(o)?jl(o,c):[]}),cP=bt(function(o){return Ud(Us(o,Sn))}),uP=bt(function(o){var c=lr(o);return Sn(c)&&(c=t),Ud(Us(o,Sn),lt(c,2))}),fP=bt(function(o){var c=lr(o);return c=typeof c=="function"?c:t,Ud(Us(o,Sn),t,c)}),hP=bt(Zd);function dP(o,c){return p0(o||[],c||[],Yl)}function pP(o,c){return p0(o||[],c||[],Jl)}var mP=bt(function(o){var c=o.length,d=c>1?o[c-1]:t;return d=typeof d=="function"?(o.pop(),d):t,K0(o,d)});function Z0(o){var c=L(o);return c.__chain__=!0,c}function gP(o,c){return c(o),o}function Gu(o,c){return c(o)}var _P=us(function(o){var c=o.length,d=c?o[0]:0,S=this.__wrapped__,b=function(D){return Ed(D,o)};return c>1||this.__actions__.length||!(S instanceof Lt)||!fs(d)?this.thru(b):(S=S.slice(d,+d+(c?1:0)),S.__actions__.push({func:Gu,args:[b],thisArg:t}),new sr(S,this.__chain__).thru(function(D){return c&&!D.length&&D.push(t),D}))});function vP(){return Z0(this)}function xP(){return new sr(this.value(),this.__chain__)}function yP(){this.__values__===t&&(this.__values__=fx(this.value()));var o=this.__index__>=this.__values__.length,c=o?t:this.__values__[this.__index__++];return{done:o,value:c}}function SP(){return this}function EP(o){for(var c,d=this;d instanceof Au;){var S=V0(d);S.__index__=0,S.__values__=t,c?b.__wrapped__=S:c=S;var b=S;d=d.__wrapped__}return b.__wrapped__=o,c}function MP(){var o=this.__wrapped__;if(o instanceof Lt){var c=o;return this.__actions__.length&&(c=new Lt(this)),c=c.reverse(),c.__actions__.push({func:Gu,args:[Kd],thisArg:t}),new sr(c,this.__chain__)}return this.thru(Kd)}function bP(){return d0(this.__wrapped__,this.__actions__)}var TP=Ou(function(o,c,d){Vt.call(o,d)?++o[d]:ls(o,d,1)});function wP(o,c,d){var S=mt(o)?wv:gC;return d&&ci(o,c,d)&&(c=t),S(o,lt(c,3))}function AP(o,c){var d=mt(o)?Us:Kv;return d(o,lt(c,3))}var CP=b0($0),RP=b0(X0);function PP(o,c){return $n(Wu(o,c),1)}function LP(o,c){return $n(Wu(o,c),te)}function DP(o,c,d){return d=d===t?1:xt(d),$n(Wu(o,c),d)}function J0(o,c){var d=mt(o)?ir:zs;return d(o,lt(c,3))}function Q0(o,c){var d=mt(o)?Zw:jv;return d(o,lt(c,3))}var IP=Ou(function(o,c,d){Vt.call(o,d)?o[d].push(c):ls(o,d,[c])});function OP(o,c,d,S){o=Mi(o)?o:La(o),d=d&&!S?xt(d):0;var b=o.length;return d<0&&(d=Ln(b+d,0)),Yu(o)?d<=b&&o.indexOf(c,d)>-1:!!b&&xa(o,c,d)>-1}var UP=bt(function(o,c,d){var S=-1,b=typeof c=="function",D=Mi(o)?re(o.length):[];return zs(o,function(B){D[++S]=b?Ni(c,B,d):Kl(B,c,d)}),D}),NP=Ou(function(o,c,d){ls(o,d,c)});function Wu(o,c){var d=mt(o)?ln:n0;return d(o,lt(c,3))}function FP(o,c,d,S){return o==null?[]:(mt(c)||(c=c==null?[]:[c]),d=S?t:d,mt(d)||(d=d==null?[]:[d]),o0(o,c,d))}var BP=Ou(function(o,c,d){o[d?0:1].push(c)},function(){return[[],[]]});function zP(o,c,d){var S=mt(o)?cd:Pv,b=arguments.length<3;return S(o,lt(c,4),d,b,zs)}function HP(o,c,d){var S=mt(o)?Jw:Pv,b=arguments.length<3;return S(o,lt(c,4),d,b,jv)}function kP(o,c){var d=mt(o)?Us:Kv;return d(o,Xu(lt(c,3)))}function GP(o){var c=mt(o)?$v:OC;return c(o)}function WP(o,c,d){(d?ci(o,c,d):c===t)?c=1:c=xt(c);var S=mt(o)?fC:UC;return S(o,c)}function VP(o){var c=mt(o)?hC:FC;return c(o)}function $P(o){if(o==null)return 0;if(Mi(o))return Yu(o)?Sa(o):o.length;var c=Qn(o);return c==be||c==Y?o.size:Cd(o).length}function XP(o,c,d){var S=mt(o)?ud:BC;return d&&ci(o,c,d)&&(c=t),S(o,lt(c,3))}var qP=bt(function(o,c){if(o==null)return[];var d=c.length;return d>1&&ci(o,c[0],c[1])?c=[]:d>2&&ci(c[0],c[1],c[2])&&(c=[c[0]]),o0(o,$n(c,1),[])}),Vu=AA||function(){return Vn.Date.now()};function YP(o,c){if(typeof c!="function")throw new rr(a);return o=xt(o),function(){if(--o<1)return c.apply(this,arguments)}}function ex(o,c,d){return c=d?t:c,c=o&&c==null?o.length:c,cs(o,A,t,t,t,t,c)}function tx(o,c){var d;if(typeof c!="function")throw new rr(a);return o=xt(o),function(){return--o>0&&(d=c.apply(this,arguments)),o<=1&&(c=t),d}}var Jd=bt(function(o,c,d){var S=_;if(d.length){var b=Fs(d,Ra(Jd));S|=C}return cs(o,S,c,d,b)}),nx=bt(function(o,c,d){var S=_|v;if(d.length){var b=Fs(d,Ra(nx));S|=C}return cs(c,S,o,d,b)});function ix(o,c,d){c=d?t:c;var S=cs(o,T,t,t,t,t,t,c);return S.placeholder=ix.placeholder,S}function rx(o,c,d){c=d?t:c;var S=cs(o,E,t,t,t,t,t,c);return S.placeholder=rx.placeholder,S}function sx(o,c,d){var S,b,D,B,k,X,fe=0,he=!1,ge=!1,Le=!0;if(typeof o!="function")throw new rr(a);c=cr(c)||0,un(d)&&(he=!!d.leading,ge="maxWait"in d,D=ge?Ln(cr(d.maxWait)||0,c):D,Le="trailing"in d?!!d.trailing:Le);function Ke(En){var wr=S,ps=b;return S=b=t,fe=En,B=o.apply(ps,wr),B}function ct(En){return fe=En,k=tc(Rt,c),he?Ke(En):B}function Et(En){var wr=En-X,ps=En-fe,bx=c-wr;return ge?Jn(bx,D-ps):bx}function ut(En){var wr=En-X,ps=En-fe;return X===t||wr>=c||wr<0||ge&&ps>=D}function Rt(){var En=Vu();if(ut(En))return Ot(En);k=tc(Rt,Et(En))}function Ot(En){return k=t,Le&&S?Ke(En):(S=b=t,B)}function Hi(){k!==t&&m0(k),fe=0,S=X=b=k=t}function ui(){return k===t?B:Ot(Vu())}function ki(){var En=Vu(),wr=ut(En);if(S=arguments,b=this,X=En,wr){if(k===t)return ct(X);if(ge)return m0(k),k=tc(Rt,c),Ke(X)}return k===t&&(k=tc(Rt,c)),B}return ki.cancel=Hi,ki.flush=ui,ki}var jP=bt(function(o,c){return Yv(o,1,c)}),KP=bt(function(o,c,d){return Yv(o,cr(c)||0,d)});function ZP(o){return cs(o,G)}function $u(o,c){if(typeof o!="function"||c!=null&&typeof c!="function")throw new rr(a);var d=function(){var S=arguments,b=c?c.apply(this,S):S[0],D=d.cache;if(D.has(b))return D.get(b);var B=o.apply(this,S);return d.cache=D.set(b,B)||D,B};return d.cache=new($u.Cache||as),d}$u.Cache=as;function Xu(o){if(typeof o!="function")throw new rr(a);return function(){var c=arguments;switch(c.length){case 0:return!o.call(this);case 1:return!o.call(this,c[0]);case 2:return!o.call(this,c[0],c[1]);case 3:return!o.call(this,c[0],c[1],c[2])}return!o.apply(this,c)}}function JP(o){return tx(2,o)}var QP=zC(function(o,c){c=c.length==1&&mt(c[0])?ln(c[0],Fi(lt())):ln($n(c,1),Fi(lt()));var d=c.length;return bt(function(S){for(var b=-1,D=Jn(S.length,d);++b<D;)S[b]=c[b].call(this,S[b]);return Ni(o,this,S)})}),Qd=bt(function(o,c){var d=Fs(c,Ra(Qd));return cs(o,C,t,c,d)}),ox=bt(function(o,c){var d=Fs(c,Ra(ox));return cs(o,R,t,c,d)}),eL=us(function(o,c){return cs(o,z,t,t,t,c)});function tL(o,c){if(typeof o!="function")throw new rr(a);return c=c===t?c:xt(c),bt(o,c)}function nL(o,c){if(typeof o!="function")throw new rr(a);return c=c==null?0:Ln(xt(c),0),bt(function(d){var S=d[c],b=Gs(d,0,c);return S&&Ns(b,S),Ni(o,this,b)})}function iL(o,c,d){var S=!0,b=!0;if(typeof o!="function")throw new rr(a);return un(d)&&(S="leading"in d?!!d.leading:S,b="trailing"in d?!!d.trailing:b),sx(o,c,{leading:S,maxWait:c,trailing:b})}function rL(o){return ex(o,1)}function sL(o,c){return Qd(Fd(c),o)}function oL(){if(!arguments.length)return[];var o=arguments[0];return mt(o)?o:[o]}function aL(o){return or(o,g)}function lL(o,c){return c=typeof c=="function"?c:t,or(o,g,c)}function cL(o){return or(o,p|g)}function uL(o,c){return c=typeof c=="function"?c:t,or(o,p|g,c)}function fL(o,c){return c==null||qv(o,c,Nn(c))}function Tr(o,c){return o===c||o!==o&&c!==c}var hL=Bu(Td),dL=Bu(function(o,c){return o>=c}),Ao=Qv(function(){return arguments}())?Qv:function(o){return mn(o)&&Vt.call(o,"callee")&&!zv.call(o,"callee")},mt=re.isArray,pL=yv?Fi(yv):EC;function Mi(o){return o!=null&&qu(o.length)&&!hs(o)}function Sn(o){return mn(o)&&Mi(o)}function mL(o){return o===!0||o===!1||mn(o)&&li(o)==Oe}var Ws=RA||up,gL=Sv?Fi(Sv):MC;function _L(o){return mn(o)&&o.nodeType===1&&!nc(o)}function vL(o){if(o==null)return!0;if(Mi(o)&&(mt(o)||typeof o=="string"||typeof o.splice=="function"||Ws(o)||Pa(o)||Ao(o)))return!o.length;var c=Qn(o);if(c==be||c==Y)return!o.size;if(ec(o))return!Cd(o).length;for(var d in o)if(Vt.call(o,d))return!1;return!0}function xL(o,c){return Zl(o,c)}function yL(o,c,d){d=typeof d=="function"?d:t;var S=d?d(o,c):t;return S===t?Zl(o,c,t,d):!!S}function ep(o){if(!mn(o))return!1;var c=li(o);return c==$e||c==gt||typeof o.message=="string"&&typeof o.name=="string"&&!nc(o)}function SL(o){return typeof o=="number"&&kv(o)}function hs(o){if(!un(o))return!1;var c=li(o);return c==q||c==st||c==De||c==O}function ax(o){return typeof o=="number"&&o==xt(o)}function qu(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=ie}function un(o){var c=typeof o;return o!=null&&(c=="object"||c=="function")}function mn(o){return o!=null&&typeof o=="object"}var lx=Ev?Fi(Ev):TC;function EL(o,c){return o===c||Ad(o,c,Vd(c))}function ML(o,c,d){return d=typeof d=="function"?d:t,Ad(o,c,Vd(c),d)}function bL(o){return cx(o)&&o!=+o}function TL(o){if(lR(o))throw new pt(s);return e0(o)}function wL(o){return o===null}function AL(o){return o==null}function cx(o){return typeof o=="number"||mn(o)&&li(o)==Ge}function nc(o){if(!mn(o)||li(o)!=K)return!1;var c=yu(o);if(c===null)return!0;var d=Vt.call(c,"constructor")&&c.constructor;return typeof d=="function"&&d instanceof d&&gu.call(d)==MA}var tp=Mv?Fi(Mv):wC;function CL(o){return ax(o)&&o>=-ie&&o<=ie}var ux=bv?Fi(bv):AC;function Yu(o){return typeof o=="string"||!mt(o)&&mn(o)&&li(o)==me}function zi(o){return typeof o=="symbol"||mn(o)&&li(o)==de}var Pa=Tv?Fi(Tv):CC;function RL(o){return o===t}function PL(o){return mn(o)&&Qn(o)==Ae}function LL(o){return mn(o)&&li(o)==we}var DL=Bu(Rd),IL=Bu(function(o,c){return o<=c});function fx(o){if(!o)return[];if(Mi(o))return Yu(o)?Mr(o):Ei(o);if(Wl&&o[Wl])return fA(o[Wl]());var c=Qn(o),d=c==be?gd:c==Y?du:La;return d(o)}function ds(o){if(!o)return o===0?o:0;if(o=cr(o),o===te||o===-te){var c=o<0?-1:1;return c*oe}return o===o?o:0}function xt(o){var c=ds(o),d=c%1;return c===c?d?c-d:c:0}function hx(o){return o?Mo(xt(o),0,ce):0}function cr(o){if(typeof o=="number")return o;if(zi(o))return N;if(un(o)){var c=typeof o.valueOf=="function"?o.valueOf():o;o=un(c)?c+"":c}if(typeof o!="string")return o===0?o:+o;o=Lv(o);var d=$.test(o);return d||Q.test(o)?Yw(o.slice(2),d?2:8):I.test(o)?N:+o}function dx(o){return zr(o,bi(o))}function OL(o){return o?Mo(xt(o),-ie,ie):o===0?o:0}function Gt(o){return o==null?"":Bi(o)}var UL=Aa(function(o,c){if(ec(c)||Mi(c)){zr(c,Nn(c),o);return}for(var d in c)Vt.call(c,d)&&Yl(o,d,c[d])}),px=Aa(function(o,c){zr(c,bi(c),o)}),ju=Aa(function(o,c,d,S){zr(c,bi(c),o,S)}),NL=Aa(function(o,c,d,S){zr(c,Nn(c),o,S)}),FL=us(Ed);function BL(o,c){var d=wa(o);return c==null?d:Xv(d,c)}var zL=bt(function(o,c){o=Zt(o);var d=-1,S=c.length,b=S>2?c[2]:t;for(b&&ci(c[0],c[1],b)&&(S=1);++d<S;)for(var D=c[d],B=bi(D),k=-1,X=B.length;++k<X;){var fe=B[k],he=o[fe];(he===t||Tr(he,Ma[fe])&&!Vt.call(o,fe))&&(o[fe]=D[fe])}return o}),HL=bt(function(o){return o.push(t,L0),Ni(mx,t,o)});function kL(o,c){return Av(o,lt(c,3),Br)}function GL(o,c){return Av(o,lt(c,3),bd)}function WL(o,c){return o==null?o:Md(o,lt(c,3),bi)}function VL(o,c){return o==null?o:Zv(o,lt(c,3),bi)}function $L(o,c){return o&&Br(o,lt(c,3))}function XL(o,c){return o&&bd(o,lt(c,3))}function qL(o){return o==null?[]:Pu(o,Nn(o))}function YL(o){return o==null?[]:Pu(o,bi(o))}function np(o,c,d){var S=o==null?t:bo(o,c);return S===t?d:S}function jL(o,c){return o!=null&&O0(o,c,vC)}function ip(o,c){return o!=null&&O0(o,c,xC)}var KL=w0(function(o,c,d){c!=null&&typeof c.toString!="function"&&(c=_u.call(c)),o[c]=d},sp(Ti)),ZL=w0(function(o,c,d){c!=null&&typeof c.toString!="function"&&(c=_u.call(c)),Vt.call(o,c)?o[c].push(d):o[c]=[d]},lt),JL=bt(Kl);function Nn(o){return Mi(o)?Vv(o):Cd(o)}function bi(o){return Mi(o)?Vv(o,!0):RC(o)}function QL(o,c){var d={};return c=lt(c,3),Br(o,function(S,b,D){ls(d,c(S,b,D),S)}),d}function eD(o,c){var d={};return c=lt(c,3),Br(o,function(S,b,D){ls(d,b,c(S,b,D))}),d}var tD=Aa(function(o,c,d){Lu(o,c,d)}),mx=Aa(function(o,c,d,S){Lu(o,c,d,S)}),nD=us(function(o,c){var d={};if(o==null)return d;var S=!1;c=ln(c,function(D){return D=ks(D,o),S||(S=D.length>1),D}),zr(o,Gd(o),d),S&&(d=or(d,p|m|g,KC));for(var b=c.length;b--;)Od(d,c[b]);return d});function iD(o,c){return gx(o,Xu(lt(c)))}var rD=us(function(o,c){return o==null?{}:LC(o,c)});function gx(o,c){if(o==null)return{};var d=ln(Gd(o),function(S){return[S]});return c=lt(c),a0(o,d,function(S,b){return c(S,b[0])})}function sD(o,c,d){c=ks(c,o);var S=-1,b=c.length;for(b||(b=1,o=t);++S<b;){var D=o==null?t:o[Hr(c[S])];D===t&&(S=b,D=d),o=hs(D)?D.call(o):D}return o}function oD(o,c,d){return o==null?o:Jl(o,c,d)}function aD(o,c,d,S){return S=typeof S=="function"?S:t,o==null?o:Jl(o,c,d,S)}var _x=R0(Nn),vx=R0(bi);function lD(o,c,d){var S=mt(o),b=S||Ws(o)||Pa(o);if(c=lt(c,4),d==null){var D=o&&o.constructor;b?d=S?new D:[]:un(o)?d=hs(D)?wa(yu(o)):{}:d={}}return(b?ir:Br)(o,function(B,k,X){return c(d,B,k,X)}),d}function cD(o,c){return o==null?!0:Od(o,c)}function uD(o,c,d){return o==null?o:h0(o,c,Fd(d))}function fD(o,c,d,S){return S=typeof S=="function"?S:t,o==null?o:h0(o,c,Fd(d),S)}function La(o){return o==null?[]:md(o,Nn(o))}function hD(o){return o==null?[]:md(o,bi(o))}function dD(o,c,d){return d===t&&(d=c,c=t),d!==t&&(d=cr(d),d=d===d?d:0),c!==t&&(c=cr(c),c=c===c?c:0),Mo(cr(o),c,d)}function pD(o,c,d){return c=ds(c),d===t?(d=c,c=0):d=ds(d),o=cr(o),yC(o,c,d)}function mD(o,c,d){if(d&&typeof d!="boolean"&&ci(o,c,d)&&(c=d=t),d===t&&(typeof c=="boolean"?(d=c,c=t):typeof o=="boolean"&&(d=o,o=t)),o===t&&c===t?(o=0,c=1):(o=ds(o),c===t?(c=o,o=0):c=ds(c)),o>c){var S=o;o=c,c=S}if(d||o%1||c%1){var b=Gv();return Jn(o+b*(c-o+qw("1e-"+((b+"").length-1))),c)}return Ld(o,c)}var gD=Ca(function(o,c,d){return c=c.toLowerCase(),o+(d?xx(c):c)});function xx(o){return rp(Gt(o).toLowerCase())}function yx(o){return o=Gt(o),o&&o.replace(Me,oA).replace(Fw,"")}function _D(o,c,d){o=Gt(o),c=Bi(c);var S=o.length;d=d===t?S:Mo(xt(d),0,S);var b=d;return d-=c.length,d>=0&&o.slice(d,b)==c}function vD(o){return o=Gt(o),o&&Ne.test(o)?o.replace(ve,aA):o}function xD(o){return o=Gt(o),o&&nt.test(o)?o.replace(ye,"\\$&"):o}var yD=Ca(function(o,c,d){return o+(d?"-":"")+c.toLowerCase()}),SD=Ca(function(o,c,d){return o+(d?" ":"")+c.toLowerCase()}),ED=M0("toLowerCase");function MD(o,c,d){o=Gt(o),c=xt(c);var S=c?Sa(o):0;if(!c||S>=c)return o;var b=(c-S)/2;return Fu(bu(b),d)+o+Fu(Mu(b),d)}function bD(o,c,d){o=Gt(o),c=xt(c);var S=c?Sa(o):0;return c&&S<c?o+Fu(c-S,d):o}function TD(o,c,d){o=Gt(o),c=xt(c);var S=c?Sa(o):0;return c&&S<c?Fu(c-S,d)+o:o}function wD(o,c,d){return d||c==null?c=0:c&&(c=+c),IA(Gt(o).replace(Qe,""),c||0)}function AD(o,c,d){return(d?ci(o,c,d):c===t)?c=1:c=xt(c),Dd(Gt(o),c)}function CD(){var o=arguments,c=Gt(o[0]);return o.length<3?c:c.replace(o[1],o[2])}var RD=Ca(function(o,c,d){return o+(d?"_":"")+c.toLowerCase()});function PD(o,c,d){return d&&typeof d!="number"&&ci(o,c,d)&&(c=d=t),d=d===t?ce:d>>>0,d?(o=Gt(o),o&&(typeof c=="string"||c!=null&&!tp(c))&&(c=Bi(c),!c&&ya(o))?Gs(Mr(o),0,d):o.split(c,d)):[]}var LD=Ca(function(o,c,d){return o+(d?" ":"")+rp(c)});function DD(o,c,d){return o=Gt(o),d=d==null?0:Mo(xt(d),0,o.length),c=Bi(c),o.slice(d,d+c.length)==c}function ID(o,c,d){var S=L.templateSettings;d&&ci(o,c,d)&&(c=t),o=Gt(o),c=ju({},c,S,P0);var b=ju({},c.imports,S.imports,P0),D=Nn(b),B=md(b,D),k,X,fe=0,he=c.interpolate||Fe,ge="__p += '",Le=_d((c.escape||Fe).source+"|"+he.source+"|"+(he===It?zt:Fe).source+"|"+(c.evaluate||Fe).source+"|$","g"),Ke="//# sourceURL="+(Vt.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++Gw+"]")+`
`;o.replace(Le,function(ut,Rt,Ot,Hi,ui,ki){return Ot||(Ot=Hi),ge+=o.slice(fe,ki).replace(it,lA),Rt&&(k=!0,ge+=`' +
__e(`+Rt+`) +
'`),ui&&(X=!0,ge+=`';
`+ui+`;
__p += '`),Ot&&(ge+=`' +
((__t = (`+Ot+`)) == null ? '' : __t) +
'`),fe=ki+ut.length,ut}),ge+=`';
`;var ct=Vt.call(c,"variable")&&c.variable;if(!ct)ge=`with (obj) {
`+ge+`
}
`;else if(jt.test(ct))throw new pt(l);ge=(X?ge.replace(Dt,""):ge).replace(Pe,"$1").replace(Ct,"$1;"),ge="function("+(ct||"obj")+`) {
`+(ct?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(k?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+ge+`return __p
}`;var Et=Ex(function(){return Ht(D,Ke+"return "+ge).apply(t,B)});if(Et.source=ge,ep(Et))throw Et;return Et}function OD(o){return Gt(o).toLowerCase()}function UD(o){return Gt(o).toUpperCase()}function ND(o,c,d){if(o=Gt(o),o&&(d||c===t))return Lv(o);if(!o||!(c=Bi(c)))return o;var S=Mr(o),b=Mr(c),D=Dv(S,b),B=Iv(S,b)+1;return Gs(S,D,B).join("")}function FD(o,c,d){if(o=Gt(o),o&&(d||c===t))return o.slice(0,Uv(o)+1);if(!o||!(c=Bi(c)))return o;var S=Mr(o),b=Iv(S,Mr(c))+1;return Gs(S,0,b).join("")}function BD(o,c,d){if(o=Gt(o),o&&(d||c===t))return o.replace(Qe,"");if(!o||!(c=Bi(c)))return o;var S=Mr(o),b=Dv(S,Mr(c));return Gs(S,b).join("")}function zD(o,c){var d=M,S=U;if(un(c)){var b="separator"in c?c.separator:b;d="length"in c?xt(c.length):d,S="omission"in c?Bi(c.omission):S}o=Gt(o);var D=o.length;if(ya(o)){var B=Mr(o);D=B.length}if(d>=D)return o;var k=d-Sa(S);if(k<1)return S;var X=B?Gs(B,0,k).join(""):o.slice(0,k);if(b===t)return X+S;if(B&&(k+=X.length-k),tp(b)){if(o.slice(k).search(b)){var fe,he=X;for(b.global||(b=_d(b.source,Gt(Zn.exec(b))+"g")),b.lastIndex=0;fe=b.exec(he);)var ge=fe.index;X=X.slice(0,ge===t?k:ge)}}else if(o.indexOf(Bi(b),k)!=k){var Le=X.lastIndexOf(b);Le>-1&&(X=X.slice(0,Le))}return X+S}function HD(o){return o=Gt(o),o&&xe.test(o)?o.replace(F,mA):o}var kD=Ca(function(o,c,d){return o+(d?" ":"")+c.toUpperCase()}),rp=M0("toUpperCase");function Sx(o,c,d){return o=Gt(o),c=d?t:c,c===t?uA(o)?vA(o):tA(o):o.match(c)||[]}var Ex=bt(function(o,c){try{return Ni(o,t,c)}catch(d){return ep(d)?d:new pt(d)}}),GD=us(function(o,c){return ir(c,function(d){d=Hr(d),ls(o,d,Jd(o[d],o))}),o});function WD(o){var c=o==null?0:o.length,d=lt();return o=c?ln(o,function(S){if(typeof S[1]!="function")throw new rr(a);return[d(S[0]),S[1]]}):[],bt(function(S){for(var b=-1;++b<c;){var D=o[b];if(Ni(D[0],this,S))return Ni(D[1],this,S)}})}function VD(o){return mC(or(o,p))}function sp(o){return function(){return o}}function $D(o,c){return o==null||o!==o?c:o}var XD=T0(),qD=T0(!0);function Ti(o){return o}function op(o){return t0(typeof o=="function"?o:or(o,p))}function YD(o){return i0(or(o,p))}function jD(o,c){return r0(o,or(c,p))}var KD=bt(function(o,c){return function(d){return Kl(d,o,c)}}),ZD=bt(function(o,c){return function(d){return Kl(o,d,c)}});function ap(o,c,d){var S=Nn(c),b=Pu(c,S);d==null&&!(un(c)&&(b.length||!S.length))&&(d=c,c=o,o=this,b=Pu(c,Nn(c)));var D=!(un(d)&&"chain"in d)||!!d.chain,B=hs(o);return ir(b,function(k){var X=c[k];o[k]=X,B&&(o.prototype[k]=function(){var fe=this.__chain__;if(D||fe){var he=o(this.__wrapped__),ge=he.__actions__=Ei(this.__actions__);return ge.push({func:X,args:arguments,thisArg:o}),he.__chain__=fe,he}return X.apply(o,Ns([this.value()],arguments))})}),o}function JD(){return Vn._===this&&(Vn._=bA),this}function lp(){}function QD(o){return o=xt(o),bt(function(c){return s0(c,o)})}var eI=zd(ln),tI=zd(wv),nI=zd(ud);function Mx(o){return Xd(o)?fd(Hr(o)):DC(o)}function iI(o){return function(c){return o==null?t:bo(o,c)}}var rI=A0(),sI=A0(!0);function cp(){return[]}function up(){return!1}function oI(){return{}}function aI(){return""}function lI(){return!0}function cI(o,c){if(o=xt(o),o<1||o>ie)return[];var d=ce,S=Jn(o,ce);c=lt(c),o-=ce;for(var b=pd(S,c);++d<o;)c(d);return b}function uI(o){return mt(o)?ln(o,Hr):zi(o)?[o]:Ei(W0(Gt(o)))}function fI(o){var c=++EA;return Gt(o)+c}var hI=Nu(function(o,c){return o+c},0),dI=Hd("ceil"),pI=Nu(function(o,c){return o/c},1),mI=Hd("floor");function gI(o){return o&&o.length?Ru(o,Ti,Td):t}function _I(o,c){return o&&o.length?Ru(o,lt(c,2),Td):t}function vI(o){return Rv(o,Ti)}function xI(o,c){return Rv(o,lt(c,2))}function yI(o){return o&&o.length?Ru(o,Ti,Rd):t}function SI(o,c){return o&&o.length?Ru(o,lt(c,2),Rd):t}var EI=Nu(function(o,c){return o*c},1),MI=Hd("round"),bI=Nu(function(o,c){return o-c},0);function TI(o){return o&&o.length?dd(o,Ti):0}function wI(o,c){return o&&o.length?dd(o,lt(c,2)):0}return L.after=YP,L.ary=ex,L.assign=UL,L.assignIn=px,L.assignInWith=ju,L.assignWith=NL,L.at=FL,L.before=tx,L.bind=Jd,L.bindAll=GD,L.bindKey=nx,L.castArray=oL,L.chain=Z0,L.chunk=mR,L.compact=gR,L.concat=_R,L.cond=WD,L.conforms=VD,L.constant=sp,L.countBy=TP,L.create=BL,L.curry=ix,L.curryRight=rx,L.debounce=sx,L.defaults=zL,L.defaultsDeep=HL,L.defer=jP,L.delay=KP,L.difference=vR,L.differenceBy=xR,L.differenceWith=yR,L.drop=SR,L.dropRight=ER,L.dropRightWhile=MR,L.dropWhile=bR,L.fill=TR,L.filter=AP,L.flatMap=PP,L.flatMapDeep=LP,L.flatMapDepth=DP,L.flatten=q0,L.flattenDeep=wR,L.flattenDepth=AR,L.flip=ZP,L.flow=XD,L.flowRight=qD,L.fromPairs=CR,L.functions=qL,L.functionsIn=YL,L.groupBy=IP,L.initial=PR,L.intersection=LR,L.intersectionBy=DR,L.intersectionWith=IR,L.invert=KL,L.invertBy=ZL,L.invokeMap=UP,L.iteratee=op,L.keyBy=NP,L.keys=Nn,L.keysIn=bi,L.map=Wu,L.mapKeys=QL,L.mapValues=eD,L.matches=YD,L.matchesProperty=jD,L.memoize=$u,L.merge=tD,L.mergeWith=mx,L.method=KD,L.methodOf=ZD,L.mixin=ap,L.negate=Xu,L.nthArg=QD,L.omit=nD,L.omitBy=iD,L.once=JP,L.orderBy=FP,L.over=eI,L.overArgs=QP,L.overEvery=tI,L.overSome=nI,L.partial=Qd,L.partialRight=ox,L.partition=BP,L.pick=rD,L.pickBy=gx,L.property=Mx,L.propertyOf=iI,L.pull=FR,L.pullAll=j0,L.pullAllBy=BR,L.pullAllWith=zR,L.pullAt=HR,L.range=rI,L.rangeRight=sI,L.rearg=eL,L.reject=kP,L.remove=kR,L.rest=tL,L.reverse=Kd,L.sampleSize=WP,L.set=oD,L.setWith=aD,L.shuffle=VP,L.slice=GR,L.sortBy=qP,L.sortedUniq=jR,L.sortedUniqBy=KR,L.split=PD,L.spread=nL,L.tail=ZR,L.take=JR,L.takeRight=QR,L.takeRightWhile=eP,L.takeWhile=tP,L.tap=gP,L.throttle=iL,L.thru=Gu,L.toArray=fx,L.toPairs=_x,L.toPairsIn=vx,L.toPath=uI,L.toPlainObject=dx,L.transform=lD,L.unary=rL,L.union=nP,L.unionBy=iP,L.unionWith=rP,L.uniq=sP,L.uniqBy=oP,L.uniqWith=aP,L.unset=cD,L.unzip=Zd,L.unzipWith=K0,L.update=uD,L.updateWith=fD,L.values=La,L.valuesIn=hD,L.without=lP,L.words=Sx,L.wrap=sL,L.xor=cP,L.xorBy=uP,L.xorWith=fP,L.zip=hP,L.zipObject=dP,L.zipObjectDeep=pP,L.zipWith=mP,L.entries=_x,L.entriesIn=vx,L.extend=px,L.extendWith=ju,ap(L,L),L.add=hI,L.attempt=Ex,L.camelCase=gD,L.capitalize=xx,L.ceil=dI,L.clamp=dD,L.clone=aL,L.cloneDeep=cL,L.cloneDeepWith=uL,L.cloneWith=lL,L.conformsTo=fL,L.deburr=yx,L.defaultTo=$D,L.divide=pI,L.endsWith=_D,L.eq=Tr,L.escape=vD,L.escapeRegExp=xD,L.every=wP,L.find=CP,L.findIndex=$0,L.findKey=kL,L.findLast=RP,L.findLastIndex=X0,L.findLastKey=GL,L.floor=mI,L.forEach=J0,L.forEachRight=Q0,L.forIn=WL,L.forInRight=VL,L.forOwn=$L,L.forOwnRight=XL,L.get=np,L.gt=hL,L.gte=dL,L.has=jL,L.hasIn=ip,L.head=Y0,L.identity=Ti,L.includes=OP,L.indexOf=RR,L.inRange=pD,L.invoke=JL,L.isArguments=Ao,L.isArray=mt,L.isArrayBuffer=pL,L.isArrayLike=Mi,L.isArrayLikeObject=Sn,L.isBoolean=mL,L.isBuffer=Ws,L.isDate=gL,L.isElement=_L,L.isEmpty=vL,L.isEqual=xL,L.isEqualWith=yL,L.isError=ep,L.isFinite=SL,L.isFunction=hs,L.isInteger=ax,L.isLength=qu,L.isMap=lx,L.isMatch=EL,L.isMatchWith=ML,L.isNaN=bL,L.isNative=TL,L.isNil=AL,L.isNull=wL,L.isNumber=cx,L.isObject=un,L.isObjectLike=mn,L.isPlainObject=nc,L.isRegExp=tp,L.isSafeInteger=CL,L.isSet=ux,L.isString=Yu,L.isSymbol=zi,L.isTypedArray=Pa,L.isUndefined=RL,L.isWeakMap=PL,L.isWeakSet=LL,L.join=OR,L.kebabCase=yD,L.last=lr,L.lastIndexOf=UR,L.lowerCase=SD,L.lowerFirst=ED,L.lt=DL,L.lte=IL,L.max=gI,L.maxBy=_I,L.mean=vI,L.meanBy=xI,L.min=yI,L.minBy=SI,L.stubArray=cp,L.stubFalse=up,L.stubObject=oI,L.stubString=aI,L.stubTrue=lI,L.multiply=EI,L.nth=NR,L.noConflict=JD,L.noop=lp,L.now=Vu,L.pad=MD,L.padEnd=bD,L.padStart=TD,L.parseInt=wD,L.random=mD,L.reduce=zP,L.reduceRight=HP,L.repeat=AD,L.replace=CD,L.result=sD,L.round=MI,L.runInContext=W,L.sample=GP,L.size=$P,L.snakeCase=RD,L.some=XP,L.sortedIndex=WR,L.sortedIndexBy=VR,L.sortedIndexOf=$R,L.sortedLastIndex=XR,L.sortedLastIndexBy=qR,L.sortedLastIndexOf=YR,L.startCase=LD,L.startsWith=DD,L.subtract=bI,L.sum=TI,L.sumBy=wI,L.template=ID,L.times=cI,L.toFinite=ds,L.toInteger=xt,L.toLength=hx,L.toLower=OD,L.toNumber=cr,L.toSafeInteger=OL,L.toString=Gt,L.toUpper=UD,L.trim=ND,L.trimEnd=FD,L.trimStart=BD,L.truncate=zD,L.unescape=HD,L.uniqueId=fI,L.upperCase=kD,L.upperFirst=rp,L.each=J0,L.eachRight=Q0,L.first=Y0,ap(L,function(){var o={};return Br(L,function(c,d){Vt.call(L.prototype,d)||(o[d]=c)}),o}(),{chain:!1}),L.VERSION=n,ir(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){L[o].placeholder=L}),ir(["drop","take"],function(o,c){Lt.prototype[o]=function(d){d=d===t?1:Ln(xt(d),0);var S=this.__filtered__&&!c?new Lt(this):this.clone();return S.__filtered__?S.__takeCount__=Jn(d,S.__takeCount__):S.__views__.push({size:Jn(d,ce),type:o+(S.__dir__<0?"Right":"")}),S},Lt.prototype[o+"Right"]=function(d){return this.reverse()[o](d).reverse()}}),ir(["filter","map","takeWhile"],function(o,c){var d=c+1,S=d==H||d==j;Lt.prototype[o]=function(b){var D=this.clone();return D.__iteratees__.push({iteratee:lt(b,3),type:d}),D.__filtered__=D.__filtered__||S,D}}),ir(["head","last"],function(o,c){var d="take"+(c?"Right":"");Lt.prototype[o]=function(){return this[d](1).value()[0]}}),ir(["initial","tail"],function(o,c){var d="drop"+(c?"":"Right");Lt.prototype[o]=function(){return this.__filtered__?new Lt(this):this[d](1)}}),Lt.prototype.compact=function(){return this.filter(Ti)},Lt.prototype.find=function(o){return this.filter(o).head()},Lt.prototype.findLast=function(o){return this.reverse().find(o)},Lt.prototype.invokeMap=bt(function(o,c){return typeof o=="function"?new Lt(this):this.map(function(d){return Kl(d,o,c)})}),Lt.prototype.reject=function(o){return this.filter(Xu(lt(o)))},Lt.prototype.slice=function(o,c){o=xt(o);var d=this;return d.__filtered__&&(o>0||c<0)?new Lt(d):(o<0?d=d.takeRight(-o):o&&(d=d.drop(o)),c!==t&&(c=xt(c),d=c<0?d.dropRight(-c):d.take(c-o)),d)},Lt.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},Lt.prototype.toArray=function(){return this.take(ce)},Br(Lt.prototype,function(o,c){var d=/^(?:filter|find|map|reject)|While$/.test(c),S=/^(?:head|last)$/.test(c),b=L[S?"take"+(c=="last"?"Right":""):c],D=S||/^find/.test(c);b&&(L.prototype[c]=function(){var B=this.__wrapped__,k=S?[1]:arguments,X=B instanceof Lt,fe=k[0],he=X||mt(B),ge=function(Rt){var Ot=b.apply(L,Ns([Rt],k));return S&&Le?Ot[0]:Ot};he&&d&&typeof fe=="function"&&fe.length!=1&&(X=he=!1);var Le=this.__chain__,Ke=!!this.__actions__.length,ct=D&&!Le,Et=X&&!Ke;if(!D&&he){B=Et?B:new Lt(this);var ut=o.apply(B,k);return ut.__actions__.push({func:Gu,args:[ge],thisArg:t}),new sr(ut,Le)}return ct&&Et?o.apply(this,k):(ut=this.thru(ge),ct?S?ut.value()[0]:ut.value():ut)})}),ir(["pop","push","shift","sort","splice","unshift"],function(o){var c=pu[o],d=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",S=/^(?:pop|shift)$/.test(o);L.prototype[o]=function(){var b=arguments;if(S&&!this.__chain__){var D=this.value();return c.apply(mt(D)?D:[],b)}return this[d](function(B){return c.apply(mt(B)?B:[],b)})}}),Br(Lt.prototype,function(o,c){var d=L[c];if(d){var S=d.name+"";Vt.call(Ta,S)||(Ta[S]=[]),Ta[S].push({name:c,func:d})}}),Ta[Uu(t,v).name]=[{name:"wrapper",func:t}],Lt.prototype.clone=HA,Lt.prototype.reverse=kA,Lt.prototype.value=GA,L.prototype.at=_P,L.prototype.chain=vP,L.prototype.commit=xP,L.prototype.next=yP,L.prototype.plant=EP,L.prototype.reverse=MP,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=bP,L.prototype.first=L.prototype.head,Wl&&(L.prototype[Wl]=SP),L},Ea=xA();xo?((xo.exports=Ea)._=Ea,od._=Ea):Vn._=Ea}).call(an)})(Dh,Dh.exports);Dh.exports;function Qo(i){const e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return e>=i&&e>t}function ts(i,e,t){const n=document.createElement(i);for(const r in e)n.setAttribute(r,e[r]);return n.classList.add(...t),n}function Q_(i,e,t){const n=ts(e,{},t);return i.appendChild(n),n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ev="161",zG=0,qS=1,HG=2,y1=1,kG=2,ys=3,go=0,Ii=1,bs=2,lo=0,gl=1,YS=2,jS=3,KS=4,GG=5,Ho=100,WG=101,VG=102,ZS=103,JS=104,$G=200,XG=201,qG=202,YG=203,Dg=204,Ig=205,jG=206,KG=207,ZG=208,JG=209,QG=210,eW=211,tW=212,nW=213,iW=214,rW=0,sW=1,oW=2,Ih=3,aW=4,lW=5,cW=6,uW=7,S1=0,fW=1,hW=2,co=0,dW=1,pW=2,mW=3,gW=4,_W=5,vW=6,E1=300,wl=301,Al=302,Og=303,Ug=304,Jh=306,Ng=1e3,Ir=1001,Fg=1002,_i=1003,QS=1004,pc=1005,Cn=1006,_m=1007,Vo=1008,uo=1009,xW=1010,yW=1011,tv=1012,M1=1013,ro=1014,Ts=1015,jc=1016,b1=1017,T1=1018,ea=1020,SW=1021,Or=1023,EW=1024,MW=1025,ta=1026,Cl=1027,bW=1028,w1=1029,TW=1030,A1=1031,C1=1033,vm=33776,xm=33777,ym=33778,Sm=33779,eE=35840,tE=35841,nE=35842,iE=35843,R1=36196,rE=37492,sE=37496,oE=37808,aE=37809,lE=37810,cE=37811,uE=37812,fE=37813,hE=37814,dE=37815,pE=37816,mE=37817,gE=37818,_E=37819,vE=37820,xE=37821,Em=36492,yE=36494,SE=36495,wW=36283,EE=36284,ME=36285,bE=36286,P1=3e3,na=3001,AW=3200,CW=3201,RW=0,PW=1,gr="",Xn="srgb",Ds="srgb-linear",nv="display-p3",Qh="display-p3-linear",Oh="linear",sn="srgb",Uh="rec709",Nh="p3",Fa=7680,TE=519,LW=512,DW=513,IW=514,L1=515,OW=516,UW=517,NW=518,FW=519,wE=35044,AE="300 es",Bg=1035,As=2e3,Fh=2001;class Fl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mm=Math.PI/180,zg=180/Math.PI;function su(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function Ci(i,e,t){return Math.max(e,Math.min(t,i))}function BW(i,e){return(i%e+e)%e}function bm(i,e,t){return(1-t)*i+t*e}function CE(i){return(i&i-1)===0&&i!==0}function Hg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function mc(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,t=0){Bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,n,r,s,a,l,u,f){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,f)}set(e,t,n,r,s,a,l,u,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=a,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[3],u=n[6],f=n[1],h=n[4],p=n[7],m=n[2],g=n[5],y=n[8],x=r[0],_=r[3],v=r[6],w=r[1],T=r[4],E=r[7],C=r[2],R=r[5],A=r[8];return s[0]=a*x+l*w+u*C,s[3]=a*_+l*T+u*R,s[6]=a*v+l*E+u*A,s[1]=f*x+h*w+p*C,s[4]=f*_+h*T+p*R,s[7]=f*v+h*E+p*A,s[2]=m*x+g*w+y*C,s[5]=m*_+g*T+y*R,s[8]=m*v+g*E+y*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8];return t*a*h-t*l*f-n*s*h+n*l*u+r*s*f-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=h*a-l*f,m=l*u-h*s,g=f*s-a*u,y=t*p+n*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=p*x,e[1]=(r*f-h*n)*x,e[2]=(l*n-r*a)*x,e[3]=m*x,e[4]=(h*t-r*u)*x,e[5]=(r*s-l*t)*x,e[6]=g*x,e[7]=(n*u-f*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*a+f*l)+a+e,-r*f,r*u,-r*(-f*a+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Tm.makeScale(e,t)),this}rotate(e){return this.premultiply(Tm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Tm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tm=new At;function D1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zW(){const i=Kc("canvas");return i.style.display="block",i}const RE={};function _l(i){i in RE||(RE[i]=!0,console.warn(i))}const PE=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),LE=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Cf={[Ds]:{transfer:Oh,primaries:Uh,toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:sn,primaries:Uh,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qh]:{transfer:Oh,primaries:Nh,toReference:i=>i.applyMatrix3(LE),fromReference:i=>i.applyMatrix3(PE)},[nv]:{transfer:sn,primaries:Nh,toReference:i=>i.convertSRGBToLinear().applyMatrix3(LE),fromReference:i=>i.applyMatrix3(PE).convertLinearToSRGB()}},HW=new Set([Ds,Qh]),qt={enabled:!0,_workingColorSpace:Ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!HW.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Cf[e].toReference,r=Cf[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Cf[i].primaries},getTransfer:function(i){return i===gr?Oh:Cf[i].transfer}};function vl(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wm(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ba;class I1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ba===void 0&&(Ba=Kc("canvas")),Ba.width=e.width,Ba.height=e.height;const n=Ba.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ba}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vl(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vl(t[n]/255)*255):t[n]=vl(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let kW=0;class O1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:kW++}),this.uuid=su(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(Am(r[a].image)):s.push(Am(r[a]))}else s=Am(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Am(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?I1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GW=0;class ai extends Fl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,n=Ir,r=Ir,s=Cn,a=Vo,l=Or,u=uo,f=ai.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GW++}),this.uuid=su(),this.name="",this.source=new O1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_l("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===na?Xn:gr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==E1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ng:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case Fg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ng:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case Fg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _l("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xn?na:P1}set encoding(e){_l("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===na?Xn:gr}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=E1;ai.DEFAULT_ANISOTROPY=1;class kn{constructor(e=0,t=0,n=0,r=1){kn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,f=u[0],h=u[4],p=u[8],m=u[1],g=u[5],y=u[9],x=u[2],_=u[6],v=u[10];if(Math.abs(h-m)<.01&&Math.abs(p-x)<.01&&Math.abs(y-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+x)<.1&&Math.abs(y+_)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,E=(g+1)/2,C=(v+1)/2,R=(h+m)/4,A=(p+x)/4,z=(y+_)/4;return T>E&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=A/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=z/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=A/s,r=z/s),this.set(n,r,s,t),this}let w=Math.sqrt((_-y)*(_-y)+(p-x)*(p-x)+(m-h)*(m-h));return Math.abs(w)<.001&&(w=1),this.x=(_-y)/w,this.y=(p-x)/w,this.z=(m-h)/w,this.w=Math.acos((f+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WW extends Fl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kn(0,0,e,t),this.scissorTest=!1,this.viewport=new kn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(_l("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===na?Xn:gr),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new O1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fa extends WW{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class U1 extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class VW extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,l){let u=n[r+0],f=n[r+1],h=n[r+2],p=n[r+3];const m=s[a+0],g=s[a+1],y=s[a+2],x=s[a+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=x;return}if(p!==x||u!==m||f!==g||h!==y){let _=1-l;const v=u*m+f*g+h*y+p*x,w=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,v*w);_=Math.sin(_*R)/C,l=Math.sin(l*R)/C}const E=l*w;if(u=u*_+m*E,f=f*_+g*E,h=h*_+y*E,p=p*_+x*E,_===1-l){const C=1/Math.sqrt(u*u+f*f+h*h+p*p);u*=C,f*=C,h*=C,p*=C}}e[t]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const l=n[r],u=n[r+1],f=n[r+2],h=n[r+3],p=s[a],m=s[a+1],g=s[a+2],y=s[a+3];return e[t]=l*y+h*p+u*g-f*m,e[t+1]=u*y+h*m+f*p-l*g,e[t+2]=f*y+h*g+l*m-u*p,e[t+3]=h*y-l*p-u*m-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,u=Math.sin,f=l(n/2),h=l(r/2),p=l(s/2),m=u(n/2),g=u(r/2),y=u(s/2);switch(a){case"XYZ":this._x=m*h*p+f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p-m*g*y;break;case"YXZ":this._x=m*h*p+f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p+m*g*y;break;case"ZXY":this._x=m*h*p-f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p-m*g*y;break;case"ZYX":this._x=m*h*p-f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p+m*g*y;break;case"YZX":this._x=m*h*p+f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p-m*g*y;break;case"XZY":this._x=m*h*p-f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],l=t[5],u=t[9],f=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-u)*g,this._y=(s-f)*g,this._z=(a-r)*g}else if(n>l&&n>p){const g=2*Math.sqrt(1+n-l-p);this._w=(h-u)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+f)/g}else if(l>p){const g=2*Math.sqrt(1+l-n-p);this._w=(s-f)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(u+h)/g}else{const g=2*Math.sqrt(1+p-n-l);this._w=(a-r)/g,this._x=(s+f)/g,this._y=(u+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ci(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,l=t._x,u=t._y,f=t._z,h=t._w;return this._x=n*h+a*l+r*f-s*u,this._y=r*h+a*u+s*l-n*f,this._z=s*h+a*f+n*u-r*l,this._w=a*h-n*l-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let l=a*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const f=Math.sqrt(u),h=Math.atan2(f,l),p=Math.sin((1-t)*h)/f,m=Math.sin(t*h)/f;return this._w=a*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(DE.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(DE.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,l=e.z,u=e.w,f=2*(a*r-l*n),h=2*(l*t-s*r),p=2*(s*n-a*t);return this.x=t+u*f+a*p-l*h,this.y=n+u*h+l*f-s*p,this.z=r+u*p+s*h-a*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*a-n*u,this.z=n*l-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Cm.copy(this).projectOnVector(e),this.sub(Cm)}reflect(e){return this.sub(Cm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cm=new se,DE=new ou;class au{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,Ar):Ar.fromBufferAttribute(s,a),Ar.applyMatrix4(e.matrixWorld),this.expandByPoint(Ar);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rf.copy(n.boundingBox)),Rf.applyMatrix4(e.matrixWorld),this.union(Rf)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ar),Ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gc),Pf.subVectors(this.max,gc),za.subVectors(e.a,gc),Ha.subVectors(e.b,gc),ka.subVectors(e.c,gc),$s.subVectors(Ha,za),Xs.subVectors(ka,Ha),Po.subVectors(za,ka);let t=[0,-$s.z,$s.y,0,-Xs.z,Xs.y,0,-Po.z,Po.y,$s.z,0,-$s.x,Xs.z,0,-Xs.x,Po.z,0,-Po.x,-$s.y,$s.x,0,-Xs.y,Xs.x,0,-Po.y,Po.x,0];return!Rm(t,za,Ha,ka,Pf)||(t=[1,0,0,0,1,0,0,0,1],!Rm(t,za,Ha,ka,Pf))?!1:(Lf.crossVectors($s,Xs),t=[Lf.x,Lf.y,Lf.z],Rm(t,za,Ha,ka,Pf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ms=[new se,new se,new se,new se,new se,new se,new se,new se],Ar=new se,Rf=new au,za=new se,Ha=new se,ka=new se,$s=new se,Xs=new se,Po=new se,gc=new se,Pf=new se,Lf=new se,Lo=new se;function Rm(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Lo.fromArray(i,s);const l=r.x*Math.abs(Lo.x)+r.y*Math.abs(Lo.y)+r.z*Math.abs(Lo.z),u=e.dot(Lo),f=t.dot(Lo),h=n.dot(Lo);if(Math.max(-Math.max(u,f,h),Math.min(u,f,h))>l)return!1}return!0}const $W=new au,_c=new se,Pm=new se;class iv{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$W.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_c.subVectors(e,this.center);const t=_c.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_c,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_c.copy(e.center).add(Pm)),this.expandByPoint(_c.copy(e.center).sub(Pm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gs=new se,Lm=new se,Df=new se,qs=new se,Dm=new se,If=new se,Im=new se;class N1{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gs.copy(this.origin).addScaledVector(this.direction,t),gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Lm.copy(e).add(t).multiplyScalar(.5),Df.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Lm);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Df),l=qs.dot(this.direction),u=-qs.dot(Df),f=qs.lengthSq(),h=Math.abs(1-a*a);let p,m,g,y;if(h>0)if(p=a*u-l,m=a*l-u,y=s*h,p>=0)if(m>=-y)if(m<=y){const x=1/h;p*=x,m*=x,g=p*(p+a*m+2*l)+m*(a*p+m+2*u)+f}else m=s,p=Math.max(0,-(a*m+l)),g=-p*p+m*(m+2*u)+f;else m=-s,p=Math.max(0,-(a*m+l)),g=-p*p+m*(m+2*u)+f;else m<=-y?(p=Math.max(0,-(-a*s+l)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+f):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+f):(p=Math.max(0,-(a*s+l)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+f);else m=a>0?-s:s,p=Math.max(0,-(a*m+l)),g=-p*p+m*(m+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Lm).addScaledVector(Df,m),g}intersectSphere(e,t){gs.subVectors(e.center,this.origin);const n=gs.dot(this.direction),r=gs.dot(gs)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=n-a,u=n+a;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,l,u;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),h>=0?(s=(e.min.y-m.y)*h,a=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,a=(e.min.y-m.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(l=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gs)!==null}intersectTriangle(e,t,n,r,s){Dm.subVectors(t,e),If.subVectors(n,e),Im.crossVectors(Dm,If);let a=this.direction.dot(Im),l;if(a>0){if(r)return null;l=1}else if(a<0)l=-1,a=-a;else return null;qs.subVectors(this.origin,e);const u=l*this.direction.dot(If.crossVectors(qs,If));if(u<0)return null;const f=l*this.direction.dot(Dm.cross(qs));if(f<0||u+f>a)return null;const h=-l*qs.dot(Im);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn{constructor(e,t,n,r,s,a,l,u,f,h,p,m,g,y,x,_){Yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,l,u,f,h,p,m,g,y,x,_)}set(e,t,n,r,s,a,l,u,f,h,p,m,g,y,x,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=a,v[9]=l,v[13]=u,v[2]=f,v[6]=h,v[10]=p,v[14]=m,v[3]=g,v[7]=y,v[11]=x,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ga.setFromMatrixColumn(e,0).length(),s=1/Ga.setFromMatrixColumn(e,1).length(),a=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=a*h,g=a*p,y=l*h,x=l*p;t[0]=u*h,t[4]=-u*p,t[8]=f,t[1]=g+y*f,t[5]=m-x*f,t[9]=-l*u,t[2]=x-m*f,t[6]=y+g*f,t[10]=a*u}else if(e.order==="YXZ"){const m=u*h,g=u*p,y=f*h,x=f*p;t[0]=m+x*l,t[4]=y*l-g,t[8]=a*f,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=g*l-y,t[6]=x+m*l,t[10]=a*u}else if(e.order==="ZXY"){const m=u*h,g=u*p,y=f*h,x=f*p;t[0]=m-x*l,t[4]=-a*p,t[8]=y+g*l,t[1]=g+y*l,t[5]=a*h,t[9]=x-m*l,t[2]=-a*f,t[6]=l,t[10]=a*u}else if(e.order==="ZYX"){const m=a*h,g=a*p,y=l*h,x=l*p;t[0]=u*h,t[4]=y*f-g,t[8]=m*f+x,t[1]=u*p,t[5]=x*f+m,t[9]=g*f-y,t[2]=-f,t[6]=l*u,t[10]=a*u}else if(e.order==="YZX"){const m=a*u,g=a*f,y=l*u,x=l*f;t[0]=u*h,t[4]=x-m*p,t[8]=y*p+g,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-f*h,t[6]=g*p+y,t[10]=m-x*p}else if(e.order==="XZY"){const m=a*u,g=a*f,y=l*u,x=l*f;t[0]=u*h,t[4]=-p,t[8]=f*h,t[1]=m*p+x,t[5]=a*h,t[9]=g*p-y,t[2]=y*p-g,t[6]=l*h,t[10]=x*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XW,e,qW)}lookAt(e,t,n){const r=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),Ys.crossVectors(n,Gi),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),Ys.crossVectors(n,Gi)),Ys.normalize(),Of.crossVectors(Gi,Ys),r[0]=Ys.x,r[4]=Of.x,r[8]=Gi.x,r[1]=Ys.y,r[5]=Of.y,r[9]=Gi.y,r[2]=Ys.z,r[6]=Of.z,r[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],l=n[4],u=n[8],f=n[12],h=n[1],p=n[5],m=n[9],g=n[13],y=n[2],x=n[6],_=n[10],v=n[14],w=n[3],T=n[7],E=n[11],C=n[15],R=r[0],A=r[4],z=r[8],G=r[12],M=r[1],U=r[5],V=r[9],ae=r[13],H=r[2],J=r[6],j=r[10],te=r[14],ie=r[3],oe=r[7],N=r[11],ce=r[15];return s[0]=a*R+l*M+u*H+f*ie,s[4]=a*A+l*U+u*J+f*oe,s[8]=a*z+l*V+u*j+f*N,s[12]=a*G+l*ae+u*te+f*ce,s[1]=h*R+p*M+m*H+g*ie,s[5]=h*A+p*U+m*J+g*oe,s[9]=h*z+p*V+m*j+g*N,s[13]=h*G+p*ae+m*te+g*ce,s[2]=y*R+x*M+_*H+v*ie,s[6]=y*A+x*U+_*J+v*oe,s[10]=y*z+x*V+_*j+v*N,s[14]=y*G+x*ae+_*te+v*ce,s[3]=w*R+T*M+E*H+C*ie,s[7]=w*A+T*U+E*J+C*oe,s[11]=w*z+T*V+E*j+C*N,s[15]=w*G+T*ae+E*te+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],l=e[5],u=e[9],f=e[13],h=e[2],p=e[6],m=e[10],g=e[14],y=e[3],x=e[7],_=e[11],v=e[15];return y*(+s*u*p-r*f*p-s*l*m+n*f*m+r*l*g-n*u*g)+x*(+t*u*g-t*f*m+s*a*m-r*a*g+r*f*h-s*u*h)+_*(+t*f*p-t*l*g-s*a*p+n*a*g+s*l*h-n*f*h)+v*(-r*l*h-t*u*p+t*l*m+r*a*p-n*a*m+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=e[9],m=e[10],g=e[11],y=e[12],x=e[13],_=e[14],v=e[15],w=p*_*f-x*m*f+x*u*g-l*_*g-p*u*v+l*m*v,T=y*m*f-h*_*f-y*u*g+a*_*g+h*u*v-a*m*v,E=h*x*f-y*p*f+y*l*g-a*x*g-h*l*v+a*p*v,C=y*p*u-h*x*u-y*l*m+a*x*m+h*l*_-a*p*_,R=t*w+n*T+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=w*A,e[1]=(x*m*s-p*_*s-x*r*g+n*_*g+p*r*v-n*m*v)*A,e[2]=(l*_*s-x*u*s+x*r*f-n*_*f-l*r*v+n*u*v)*A,e[3]=(p*u*s-l*m*s-p*r*f+n*m*f+l*r*g-n*u*g)*A,e[4]=T*A,e[5]=(h*_*s-y*m*s+y*r*g-t*_*g-h*r*v+t*m*v)*A,e[6]=(y*u*s-a*_*s-y*r*f+t*_*f+a*r*v-t*u*v)*A,e[7]=(a*m*s-h*u*s+h*r*f-t*m*f-a*r*g+t*u*g)*A,e[8]=E*A,e[9]=(y*p*s-h*x*s-y*n*g+t*x*g+h*n*v-t*p*v)*A,e[10]=(a*x*s-y*l*s+y*n*f-t*x*f-a*n*v+t*l*v)*A,e[11]=(h*l*s-a*p*s-h*n*f+t*p*f+a*n*g-t*l*g)*A,e[12]=C*A,e[13]=(h*x*r-y*p*r+y*n*m-t*x*m-h*n*_+t*p*_)*A,e[14]=(y*l*r-a*x*r-y*n*u+t*x*u+a*n*_-t*l*_)*A,e[15]=(a*p*r-h*l*r+h*n*u-t*p*u-a*n*m+t*l*m)*A,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,l=e.y,u=e.z,f=s*a,h=s*l;return this.set(f*a+n,f*l-r*u,f*u+r*l,0,f*l+r*u,h*l+n,h*u-r*a,0,f*u-r*l,h*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,l=t._z,u=t._w,f=s+s,h=a+a,p=l+l,m=s*f,g=s*h,y=s*p,x=a*h,_=a*p,v=l*p,w=u*f,T=u*h,E=u*p,C=n.x,R=n.y,A=n.z;return r[0]=(1-(x+v))*C,r[1]=(g+E)*C,r[2]=(y-T)*C,r[3]=0,r[4]=(g-E)*R,r[5]=(1-(m+v))*R,r[6]=(_+w)*R,r[7]=0,r[8]=(y+T)*A,r[9]=(_-w)*A,r[10]=(1-(m+x))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ga.set(r[0],r[1],r[2]).length();const a=Ga.set(r[4],r[5],r[6]).length(),l=Ga.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cr.copy(this);const f=1/s,h=1/a,p=1/l;return Cr.elements[0]*=f,Cr.elements[1]*=f,Cr.elements[2]*=f,Cr.elements[4]*=h,Cr.elements[5]*=h,Cr.elements[6]*=h,Cr.elements[8]*=p,Cr.elements[9]*=p,Cr.elements[10]*=p,t.setFromRotationMatrix(Cr),n.x=s,n.y=a,n.z=l,this}makePerspective(e,t,n,r,s,a,l=As){const u=this.elements,f=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let g,y;if(l===As)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(l===Fh)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,a,l=As){const u=this.elements,f=1/(t-e),h=1/(n-r),p=1/(a-s),m=(t+e)*f,g=(n+r)*h;let y,x;if(l===As)y=(a+s)*p,x=-2*p;else if(l===Fh)y=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=x,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ga=new se,Cr=new Yn,XW=new se(0,0,0),qW=new se(1,1,1),Ys=new se,Of=new se,Gi=new se,IE=new Yn,OE=new ou;class ed{constructor(e=0,t=0,n=0,r=ed.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],u=r[1],f=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ci(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ci(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ci(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ci(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,f));break;case"YZX":this._z=Math.asin(Ci(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ci(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return IE.makeRotationFromQuaternion(e),this.setFromRotationMatrix(IE,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return OE.setFromEuler(this),this.setFromQuaternion(OE,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ed.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YW=0;const UE=new se,Wa=new ou,_s=new Yn,Uf=new se,vc=new se,jW=new se,KW=new ou,NE=new se(1,0,0),FE=new se(0,1,0),BE=new se(0,0,1),ZW={type:"added"},JW={type:"removed"};class Zi extends Fl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YW++}),this.uuid=su(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zi.DEFAULT_UP.clone();const e=new se,t=new ed,n=new ou,r=new se(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yn},normalMatrix:{value:new At}}),this.matrix=new Yn,this.matrixWorld=new Yn,this.matrixAutoUpdate=Zi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(NE,e)}rotateY(e){return this.rotateOnAxis(FE,e)}rotateZ(e){return this.rotateOnAxis(BE,e)}translateOnAxis(e,t){return UE.copy(e).applyQuaternion(this.quaternion),this.position.add(UE.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(NE,e)}translateY(e){return this.translateOnAxis(FE,e)}translateZ(e){return this.translateOnAxis(BE,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uf.copy(e):Uf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),vc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(vc,Uf,this.up):_s.lookAt(Uf,vc,this.up),this.quaternion.setFromRotationMatrix(_s),r&&(_s.extractRotation(r.matrixWorld),Wa.setFromRotationMatrix(_s),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(ZW)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(JW)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vc,e,jW),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vc,KW,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,h=u.length;f<h;f++){const p=u[f];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=a(e.geometries),u=a(e.materials),f=a(e.textures),h=a(e.images),p=a(e.shapes),m=a(e.skeletons),g=a(e.animations),y=a(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Zi.DEFAULT_UP=new se(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rr=new se,vs=new se,Om=new se,xs=new se,Va=new se,$a=new se,zE=new se,Um=new se,Nm=new se,Fm=new se;class Yr{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rr.subVectors(e,t),r.cross(Rr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rr.subVectors(r,t),vs.subVectors(n,t),Om.subVectors(e,t);const a=Rr.dot(Rr),l=Rr.dot(vs),u=Rr.dot(Om),f=vs.dot(vs),h=vs.dot(Om),p=a*f-l*l;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(f*u-l*h)*m,y=(a*h-l*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,n,r,s,a,l,u){return this.getBarycoord(e,t,n,r,xs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,xs.x),u.addScaledVector(a,xs.y),u.addScaledVector(l,xs.z),u)}static isFrontFacing(e,t,n,r){return Rr.subVectors(n,t),vs.subVectors(e,t),Rr.cross(vs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rr.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),Rr.cross(vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Yr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Yr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,l;Va.subVectors(r,n),$a.subVectors(s,n),Um.subVectors(e,n);const u=Va.dot(Um),f=$a.dot(Um);if(u<=0&&f<=0)return t.copy(n);Nm.subVectors(e,r);const h=Va.dot(Nm),p=$a.dot(Nm);if(h>=0&&p<=h)return t.copy(r);const m=u*p-h*f;if(m<=0&&u>=0&&h<=0)return a=u/(u-h),t.copy(n).addScaledVector(Va,a);Fm.subVectors(e,s);const g=Va.dot(Fm),y=$a.dot(Fm);if(y>=0&&g<=y)return t.copy(s);const x=g*f-u*y;if(x<=0&&f>=0&&y<=0)return l=f/(f-y),t.copy(n).addScaledVector($a,l);const _=h*y-g*p;if(_<=0&&p-h>=0&&g-y>=0)return zE.subVectors(s,r),l=(p-h)/(p-h+(g-y)),t.copy(r).addScaledVector(zE,l);const v=1/(_+x+m);return a=x*v,l=m*v,t.copy(n).addScaledVector(Va,a).addScaledVector($a,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Nf={h:0,s:0,l:0};function Bm(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=BW(e,1),t=Ci(t,0,1),n=Ci(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Bm(a,s,e+1/3),this.g=Bm(a,s,e),this.b=Bm(a,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=F1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}copyLinearToSRGB(e){return this.r=wm(e.r),this.g=wm(e.g),this.b=wm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return qt.fromWorkingColorSpace(ti.copy(this),e),Math.round(Ci(ti.r*255,0,255))*65536+Math.round(Ci(ti.g*255,0,255))*256+Math.round(Ci(ti.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(ti.copy(this),t);const n=ti.r,r=ti.g,s=ti.b,a=Math.max(n,r,s),l=Math.min(n,r,s);let u,f;const h=(l+a)/2;if(l===a)u=0,f=0;else{const p=a-l;switch(f=h<=.5?p/(a+l):p/(2-a-l),a){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Xn){qt.fromWorkingColorSpace(ti.copy(this),e);const t=ti.r,n=ti.g,r=ti.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(js),this.setHSL(js.h+e,js.s+t,js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(js),e.getHSL(Nf);const n=bm(js.h,Nf.h,t),r=bm(js.s,Nf.s,t),s=bm(js.l,Nf.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Yt;Yt.NAMES=F1;let QW=0;class td extends Fl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QW++}),this.uuid=su(),this.name="",this.type="Material",this.blending=gl,this.side=go,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dg,this.blendDst=Ig,this.blendEquation=Ho,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=TE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fa,this.stencilZFail=Fa,this.stencilZPass=Fa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gl&&(n.blending=this.blending),this.side!==go&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dg&&(n.blendSrc=this.blendSrc),this.blendDst!==Ig&&(n.blendDst=this.blendDst),this.blendEquation!==Ho&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ih&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==TE&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fa&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fa&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fa&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const l in s){const u=s[l];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class B1 extends td{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=S1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new se,Ff=new Bt;class ns{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ts,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return _l("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ff.fromBufferAttribute(this,t),Ff.applyMatrix3(e),this.setXY(t,Ff.x,Ff.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=mc(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mc(t,this.array)),t}setX(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mc(t,this.array)),t}setY(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mc(t,this.array)),t}setW(e,t){return this.normalized&&(t=wi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wi(t,this.array),n=wi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=wi(t,this.array),n=wi(n,this.array),r=wi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=wi(t,this.array),n=wi(n,this.array),r=wi(r,this.array),s=wi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wE&&(e.usage=this.usage),e}}class z1 extends ns{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class H1 extends ns{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ia extends ns{constructor(e,t,n){super(new Float32Array(e),t,n)}}let e4=0;const ur=new Yn,zm=new Zi,Xa=new se,Wi=new au,xc=new au,Fn=new se;class pa extends Fl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:e4++}),this.uuid=su(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D1(e)?H1:z1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new At().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,n){return ur.makeTranslation(e,t,n),this.applyMatrix4(ur),this}scale(e,t,n){return ur.makeScale(e,t,n),this.applyMatrix4(ur),this}lookAt(e){return zm.lookAt(e),zm.updateMatrix(),this.applyMatrix4(zm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ia(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new au);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wi.setFromBufferAttribute(s),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Wi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Wi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Wi.min),this.boundingBox.expandByPoint(Wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iv);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(Wi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];xc.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(Wi.min,xc.min),Wi.expandByPoint(Fn),Fn.addVectors(Wi.max,xc.max),Wi.expandByPoint(Fn)):(Wi.expandByPoint(xc.min),Wi.expandByPoint(xc.max))}Wi.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Fn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Fn));if(t)for(let s=0,a=t.length;s<a;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)Fn.fromBufferAttribute(l,f),u&&(Xa.fromBufferAttribute(e,f),Fn.add(Xa)),r=Math.max(r,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ns(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,f=[],h=[];for(let M=0;M<l;M++)f[M]=new se,h[M]=new se;const p=new se,m=new se,g=new se,y=new Bt,x=new Bt,_=new Bt,v=new se,w=new se;function T(M,U,V){p.fromArray(r,M*3),m.fromArray(r,U*3),g.fromArray(r,V*3),y.fromArray(a,M*2),x.fromArray(a,U*2),_.fromArray(a,V*2),m.sub(p),g.sub(p),x.sub(y),_.sub(y);const ae=1/(x.x*_.y-_.x*x.y);isFinite(ae)&&(v.copy(m).multiplyScalar(_.y).addScaledVector(g,-x.y).multiplyScalar(ae),w.copy(g).multiplyScalar(x.x).addScaledVector(m,-_.x).multiplyScalar(ae),f[M].add(v),f[U].add(v),f[V].add(v),h[M].add(w),h[U].add(w),h[V].add(w))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let M=0,U=E.length;M<U;++M){const V=E[M],ae=V.start,H=V.count;for(let J=ae,j=ae+H;J<j;J+=3)T(n[J+0],n[J+1],n[J+2])}const C=new se,R=new se,A=new se,z=new se;function G(M){A.fromArray(s,M*3),z.copy(A);const U=f[M];C.copy(U),C.sub(A.multiplyScalar(A.dot(U))).normalize(),R.crossVectors(z,U);const ae=R.dot(h[M])<0?-1:1;u[M*4]=C.x,u[M*4+1]=C.y,u[M*4+2]=C.z,u[M*4+3]=ae}for(let M=0,U=E.length;M<U;++M){const V=E[M],ae=V.start,H=V.count;for(let J=ae,j=ae+H;J<j;J+=3)G(n[J+0]),G(n[J+1]),G(n[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ns(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new se,s=new se,a=new se,l=new se,u=new se,f=new se,h=new se,p=new se;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),x=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,_),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,_),l.add(h),u.add(h),f.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),a.fromBufferAttribute(t,m+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(l,u){const f=l.array,h=l.itemSize,p=l.normalized,m=new f.constructor(u.length*h);let g=0,y=0;for(let x=0,_=u.length;x<_;x++){l.isInterleavedBufferAttribute?g=u[x]*l.data.stride+l.offset:g=u[x]*h;for(let v=0;v<h;v++)m[y++]=f[g++]}return new ns(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pa,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++){const m=f[h],g=e(m,n);u.push(g)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,u=a.length;l<u;l++){const f=a[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],h=[];for(let p=0,m=f.length;p<m;p++){const g=f[p];h.push(g.toJSON(e.data))}h.length>0&&(r[u]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let f=0,h=a.length;f<h;f++){const p=a[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const HE=new Yn,Do=new N1,Bf=new iv,kE=new se,qa=new se,Ya=new se,ja=new se,Hm=new se,zf=new se,Hf=new Bt,kf=new Bt,Gf=new Bt,GE=new se,WE=new se,VE=new se,Wf=new se,Vf=new se;class Zr extends Zi{constructor(e=new pa,t=new B1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){zf.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const h=l[u],p=s[u];h!==0&&(Hm.fromBufferAttribute(p,e),a?zf.addScaledVector(Hm,h):zf.addScaledVector(Hm.sub(t),h))}t.add(zf)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bf.copy(n.boundingSphere),Bf.applyMatrix4(s),Do.copy(e.ray).recast(e.near),!(Bf.containsPoint(Do.origin)===!1&&(Do.intersectSphere(Bf,kE)===null||Do.origin.distanceToSquared(kE)>(e.far-e.near)**2))&&(HE.copy(s).invert(),Do.copy(e.ray).applyMatrix4(HE),!(n.boundingBox!==null&&Do.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Do)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let y=0,x=m.length;y<x;y++){const _=m[y],v=a[_.materialIndex],w=Math.max(_.start,g.start),T=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=w,C=T;E<C;E+=3){const R=l.getX(E),A=l.getX(E+1),z=l.getX(E+2);r=$f(this,v,e,n,f,h,p,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let _=y,v=x;_<v;_+=3){const w=l.getX(_),T=l.getX(_+1),E=l.getX(_+2);r=$f(this,a,e,n,f,h,p,w,T,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(a))for(let y=0,x=m.length;y<x;y++){const _=m[y],v=a[_.materialIndex],w=Math.max(_.start,g.start),T=Math.min(u.count,Math.min(_.start+_.count,g.start+g.count));for(let E=w,C=T;E<C;E+=3){const R=E,A=E+1,z=E+2;r=$f(this,v,e,n,f,h,p,R,A,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(u.count,g.start+g.count);for(let _=y,v=x;_<v;_+=3){const w=_,T=_+1,E=_+2;r=$f(this,a,e,n,f,h,p,w,T,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function t4(i,e,t,n,r,s,a,l){let u;if(e.side===Ii?u=n.intersectTriangle(a,s,r,!0,l):u=n.intersectTriangle(r,s,a,e.side===go,l),u===null)return null;Vf.copy(l),Vf.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Vf);return f<t.near||f>t.far?null:{distance:f,point:Vf.clone(),object:i}}function $f(i,e,t,n,r,s,a,l,u,f){i.getVertexPosition(l,qa),i.getVertexPosition(u,Ya),i.getVertexPosition(f,ja);const h=t4(i,e,t,n,qa,Ya,ja,Wf);if(h){r&&(Hf.fromBufferAttribute(r,l),kf.fromBufferAttribute(r,u),Gf.fromBufferAttribute(r,f),h.uv=Yr.getInterpolation(Wf,qa,Ya,ja,Hf,kf,Gf,new Bt)),s&&(Hf.fromBufferAttribute(s,l),kf.fromBufferAttribute(s,u),Gf.fromBufferAttribute(s,f),h.uv1=Yr.getInterpolation(Wf,qa,Ya,ja,Hf,kf,Gf,new Bt),h.uv2=h.uv1),a&&(GE.fromBufferAttribute(a,l),WE.fromBufferAttribute(a,u),VE.fromBufferAttribute(a,f),h.normal=Yr.getInterpolation(Wf,qa,Ya,ja,GE,WE,VE,new se),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:u,c:f,normal:new se,materialIndex:0};Yr.getNormal(qa,Ya,ja,p.normal),h.face=p}return h}class lu extends pa{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],f=[],h=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,a,s,0),y("z","y","x",1,-1,n,t,-e,a,s,1),y("x","z","y",1,1,e,n,t,r,a,2),y("x","z","y",1,-1,e,n,-t,r,a,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new ia(f,3)),this.setAttribute("normal",new ia(h,3)),this.setAttribute("uv",new ia(p,2));function y(x,_,v,w,T,E,C,R,A,z,G){const M=E/A,U=C/z,V=E/2,ae=C/2,H=R/2,J=A+1,j=z+1;let te=0,ie=0;const oe=new se;for(let N=0;N<j;N++){const ce=N*U-ae;for(let Se=0;Se<J;Se++){const Je=Se*M-V;oe[x]=Je*w,oe[_]=ce*T,oe[v]=H,f.push(oe.x,oe.y,oe.z),oe[x]=0,oe[_]=0,oe[v]=R>0?1:-1,h.push(oe.x,oe.y,oe.z),p.push(Se/A),p.push(1-N/z),te+=1}}for(let N=0;N<z;N++)for(let ce=0;ce<A;ce++){const Se=m+ce+J*N,Je=m+ce+J*(N+1),ne=m+(ce+1)+J*(N+1),ue=m+(ce+1)+J*N;u.push(Se,Je,ue),u.push(Je,ne,ue),ie+=6}l.addGroup(g,ie,G),g+=ie,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rl(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function di(i){const e={};for(let t=0;t<i.length;t++){const n=Rl(i[t]);for(const r in n)e[r]=n[r]}return e}function n4(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function k1(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}const i4={clone:Rl,merge:di};var r4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Is extends td{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r4,this.fragmentShader=s4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rl(e.uniforms),this.uniformsGroups=n4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class G1 extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yn,this.projectionMatrix=new Yn,this.projectionMatrixInverse=new Yn,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new se,$E=new Bt,XE=new Bt;class mr extends G1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Mm*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zg*2*Math.atan(Math.tan(Mm*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,$E,XE),t.subVectors(XE,$E)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Mm*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,f=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/f,r*=a.width/u,n*=a.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ka=-90,Za=1;class o4 extends Zi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mr(Ka,Za,e,t);r.layers=this.layers,this.add(r);const s=new mr(Ka,Za,e,t);s.layers=this.layers,this.add(s);const a=new mr(Ka,Za,e,t);a.layers=this.layers,this.add(a);const l=new mr(Ka,Za,e,t);l.layers=this.layers,this.add(l);const u=new mr(Ka,Za,e,t);u.layers=this.layers,this.add(u);const f=new mr(Ka,Za,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,l,u]=t;for(const f of t)this.remove(f);if(e===As)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Fh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,u,f,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class W1 extends ai{constructor(e,t,n,r,s,a,l,u,f,h){e=e!==void 0?e:[],t=t!==void 0?t:wl,super(e,t,n,r,s,a,l,u,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class a4 extends fa{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(_l("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===na?Xn:gr),this.texture=new W1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new lu(5,5,5),s=new Is({name:"CubemapFromEquirect",uniforms:Rl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ii,blending:lo});s.uniforms.tEquirect.value=t;const a=new Zr(r,s),l=t.minFilter;return t.minFilter===Vo&&(t.minFilter=Cn),new o4(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const km=new se,l4=new se,c4=new At;class Fo{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=km.subVectors(n,t).cross(l4.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(km),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||c4.getNormalMatrix(e),r=this.coplanarPoint(km).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Io=new iv,Xf=new se;class V1{constructor(e=new Fo,t=new Fo,n=new Fo,r=new Fo,s=new Fo,a=new Fo){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=As){const n=this.planes,r=e.elements,s=r[0],a=r[1],l=r[2],u=r[3],f=r[4],h=r[5],p=r[6],m=r[7],g=r[8],y=r[9],x=r[10],_=r[11],v=r[12],w=r[13],T=r[14],E=r[15];if(n[0].setComponents(u-s,m-f,_-g,E-v).normalize(),n[1].setComponents(u+s,m+f,_+g,E+v).normalize(),n[2].setComponents(u+a,m+h,_+y,E+w).normalize(),n[3].setComponents(u-a,m-h,_-y,E-w).normalize(),n[4].setComponents(u-l,m-p,_-x,E-T).normalize(),t===As)n[5].setComponents(u+l,m+p,_+x,E+T).normalize();else if(t===Fh)n[5].setComponents(l,p,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Io.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Io.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Io)}intersectsSprite(e){return Io.center.set(0,0,0),Io.radius=.7071067811865476,Io.applyMatrix4(e.matrixWorld),this.intersectsSphere(Io)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Xf.x=r.normal.x>0?e.max.x:e.min.x,Xf.y=r.normal.y>0?e.max.y:e.min.y,Xf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $1(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function u4(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,h){const p=f.array,m=f.usage,g=p.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,h,p){const m=h.array,g=h._updateRange,y=h.updateRanges;if(i.bindBuffer(p,f),g.count===-1&&y.length===0&&i.bufferSubData(p,0,m),y.length!==0){for(let x=0,_=y.length;x<_;x++){const v=y[x];t?i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=n.get(f);h&&(i.deleteBuffer(h.buffer),n.delete(f))}function u(f,h){if(f.isGLBufferAttribute){const m=n.get(f);(!m||m.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);if(p===void 0)n.set(f,r(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:u}}class cu extends pa{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,l=Math.floor(n),u=Math.floor(r),f=l+1,h=u+1,p=e/l,m=t/u,g=[],y=[],x=[],_=[];for(let v=0;v<h;v++){const w=v*m-a;for(let T=0;T<f;T++){const E=T*p-s;y.push(E,-w,0),x.push(0,0,1),_.push(T/l),_.push(1-v/u)}}for(let v=0;v<u;v++)for(let w=0;w<l;w++){const T=w+f*v,E=w+f*(v+1),C=w+1+f*(v+1),R=w+1+f*v;g.push(T,E,R),g.push(E,C,R)}this.setIndex(g),this.setAttribute("position",new ia(y,3)),this.setAttribute("normal",new ia(x,3)),this.setAttribute("uv",new ia(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.widthSegments,e.heightSegments)}}var f4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,h4=`#ifdef USE_ALPHAHASH
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
#endif`,d4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,p4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,m4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,g4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_4=`#ifdef USE_AOMAP
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
#endif`,v4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,x4=`#ifdef USE_BATCHING
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
#endif`,y4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,S4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,E4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,M4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,b4=`#ifdef USE_IRIDESCENCE
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
#endif`,T4=`#ifdef USE_BUMPMAP
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
#endif`,w4=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,A4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,L4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,O4=`#define PI 3.141592653589793
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
} // validated`,U4=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,N4=`vec3 transformedNormal = objectNormal;
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
#endif`,F4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,H4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k4="gl_FragColor = linearToOutputTexel( gl_FragColor );",G4=`
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
}`,W4=`#ifdef USE_ENVMAP
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
#endif`,V4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$4=`#ifdef USE_ENVMAP
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
#endif`,X4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q4=`#ifdef USE_ENVMAP
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
#endif`,Y4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,j4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J4=`#ifdef USE_GRADIENTMAP
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
}`,Q4=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,eV=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,tV=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,iV=`uniform bool receiveShadow;
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
#endif`,rV=`#ifdef USE_ENVMAP
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
#endif`,sV=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,aV=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cV=`PhysicalMaterial material;
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
#endif`,uV=`struct PhysicalMaterial {
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
}`,fV=`
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
#endif`,hV=`#if defined( RE_IndirectDiffuse )
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
#endif`,dV=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,pV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,mV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,_V=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,vV=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xV=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yV=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,SV=`#if defined( USE_POINTS_UV )
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
#endif`,EV=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MV=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bV=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,TV=`#ifdef USE_MORPHNORMALS
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
#endif`,wV=`#ifdef USE_MORPHTARGETS
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
#endif`,AV=`#ifdef USE_MORPHTARGETS
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
#endif`,CV=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,RV=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,PV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,LV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IV=`#ifdef USE_NORMALMAP
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
#endif`,OV=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,UV=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NV=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,FV=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,BV=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zV=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HV=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kV=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,GV=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WV=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,VV=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$V=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,XV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,YV=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jV=`float getShadowMask() {
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
}`,KV=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ZV=`#ifdef USE_SKINNING
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
#endif`,JV=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,QV=`#ifdef USE_SKINNING
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
#endif`,e5=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t5=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n5=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,r5=`#ifdef USE_TRANSMISSION
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
#endif`,s5=`#ifdef USE_TRANSMISSION
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
#endif`,o5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const u5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f5=`uniform sampler2D t2D;
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
}`,h5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,d5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g5=`#include <common>
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
}`,_5=`#if DEPTH_PACKING == 3200
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
}`,v5=`#define DISTANCE
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
}`,x5=`#define DISTANCE
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
}`,y5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,S5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E5=`uniform float scale;
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
}`,M5=`uniform vec3 diffuse;
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
}`,b5=`#include <common>
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
}`,T5=`uniform vec3 diffuse;
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
}`,w5=`#define LAMBERT
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
}`,A5=`#define LAMBERT
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
}`,C5=`#define MATCAP
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
}`,R5=`#define MATCAP
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
}`,P5=`#define NORMAL
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
}`,L5=`#define NORMAL
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
}`,D5=`#define PHONG
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
}`,I5=`#define PHONG
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
}`,O5=`#define STANDARD
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
}`,U5=`#define STANDARD
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
}`,N5=`#define TOON
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
}`,F5=`#define TOON
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
}`,B5=`uniform float size;
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
}`,z5=`uniform vec3 diffuse;
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
}`,H5=`#include <common>
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
}`,k5=`uniform vec3 color;
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
}`,G5=`uniform float rotation;
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
}`,W5=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:f4,alphahash_pars_fragment:h4,alphamap_fragment:d4,alphamap_pars_fragment:p4,alphatest_fragment:m4,alphatest_pars_fragment:g4,aomap_fragment:_4,aomap_pars_fragment:v4,batching_pars_vertex:x4,batching_vertex:y4,begin_vertex:S4,beginnormal_vertex:E4,bsdfs:M4,iridescence_fragment:b4,bumpmap_pars_fragment:T4,clipping_planes_fragment:w4,clipping_planes_pars_fragment:A4,clipping_planes_pars_vertex:C4,clipping_planes_vertex:R4,color_fragment:P4,color_pars_fragment:L4,color_pars_vertex:D4,color_vertex:I4,common:O4,cube_uv_reflection_fragment:U4,defaultnormal_vertex:N4,displacementmap_pars_vertex:F4,displacementmap_vertex:B4,emissivemap_fragment:z4,emissivemap_pars_fragment:H4,colorspace_fragment:k4,colorspace_pars_fragment:G4,envmap_fragment:W4,envmap_common_pars_fragment:V4,envmap_pars_fragment:$4,envmap_pars_vertex:X4,envmap_physical_pars_fragment:rV,envmap_vertex:q4,fog_vertex:Y4,fog_pars_vertex:j4,fog_fragment:K4,fog_pars_fragment:Z4,gradientmap_pars_fragment:J4,lightmap_fragment:Q4,lightmap_pars_fragment:eV,lights_lambert_fragment:tV,lights_lambert_pars_fragment:nV,lights_pars_begin:iV,lights_toon_fragment:sV,lights_toon_pars_fragment:oV,lights_phong_fragment:aV,lights_phong_pars_fragment:lV,lights_physical_fragment:cV,lights_physical_pars_fragment:uV,lights_fragment_begin:fV,lights_fragment_maps:hV,lights_fragment_end:dV,logdepthbuf_fragment:pV,logdepthbuf_pars_fragment:mV,logdepthbuf_pars_vertex:gV,logdepthbuf_vertex:_V,map_fragment:vV,map_pars_fragment:xV,map_particle_fragment:yV,map_particle_pars_fragment:SV,metalnessmap_fragment:EV,metalnessmap_pars_fragment:MV,morphcolor_vertex:bV,morphnormal_vertex:TV,morphtarget_pars_vertex:wV,morphtarget_vertex:AV,normal_fragment_begin:CV,normal_fragment_maps:RV,normal_pars_fragment:PV,normal_pars_vertex:LV,normal_vertex:DV,normalmap_pars_fragment:IV,clearcoat_normal_fragment_begin:OV,clearcoat_normal_fragment_maps:UV,clearcoat_pars_fragment:NV,iridescence_pars_fragment:FV,opaque_fragment:BV,packing:zV,premultiplied_alpha_fragment:HV,project_vertex:kV,dithering_fragment:GV,dithering_pars_fragment:WV,roughnessmap_fragment:VV,roughnessmap_pars_fragment:$V,shadowmap_pars_fragment:XV,shadowmap_pars_vertex:qV,shadowmap_vertex:YV,shadowmask_pars_fragment:jV,skinbase_vertex:KV,skinning_pars_vertex:ZV,skinning_vertex:JV,skinnormal_vertex:QV,specularmap_fragment:e5,specularmap_pars_fragment:t5,tonemapping_fragment:n5,tonemapping_pars_fragment:i5,transmission_fragment:r5,transmission_pars_fragment:s5,uv_pars_fragment:o5,uv_pars_vertex:a5,uv_vertex:l5,worldpos_vertex:c5,background_vert:u5,background_frag:f5,backgroundCube_vert:h5,backgroundCube_frag:d5,cube_vert:p5,cube_frag:m5,depth_vert:g5,depth_frag:_5,distanceRGBA_vert:v5,distanceRGBA_frag:x5,equirect_vert:y5,equirect_frag:S5,linedashed_vert:E5,linedashed_frag:M5,meshbasic_vert:b5,meshbasic_frag:T5,meshlambert_vert:w5,meshlambert_frag:A5,meshmatcap_vert:C5,meshmatcap_frag:R5,meshnormal_vert:P5,meshnormal_frag:L5,meshphong_vert:D5,meshphong_frag:I5,meshphysical_vert:O5,meshphysical_frag:U5,meshtoon_vert:N5,meshtoon_frag:F5,points_vert:B5,points_frag:z5,shadow_vert:H5,shadow_frag:k5,sprite_vert:G5,sprite_frag:W5},Re={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Xr={basic:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:di([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:di([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:di([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:di([Re.points,Re.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:di([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:di([Re.common,Re.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:di([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:di([Re.sprite,Re.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:di([Re.common,Re.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:di([Re.lights,Re.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Xr.physical={uniforms:di([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const qf={r:0,b:0,g:0};function V5(i,e,t,n,r,s,a){const l=new Yt(0);let u=s===!0?0:1,f,h,p=null,m=0,g=null;function y(_,v){let w=!1,T=v.isScene===!0?v.background:null;T&&T.isTexture&&(T=(v.backgroundBlurriness>0?t:e).get(T)),T===null?x(l,u):T&&T.isColor&&(x(T,1),w=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),T&&(T.isCubeTexture||T.mapping===Jh)?(h===void 0&&(h=new Zr(new lu(1,1,1),new Is({name:"BackgroundCubeMaterial",uniforms:Rl(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=qt.getTransfer(T.colorSpace)!==sn,(p!==T||m!==T.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=T,m=T.version,g=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Zr(new cu(2,2),new Is({name:"BackgroundMaterial",uniforms:Rl(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:go,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=qt.getTransfer(T.colorSpace)!==sn,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,g=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function x(_,v){_.getRGB(qf,k1(i)),n.buffers.color.setClear(qf.r,qf.g,qf.b,v,a)}return{getClearColor:function(){return l},setClearColor:function(_,v=1){l.set(_),u=v,x(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,x(l,u)},render:y}}function $5(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,l={},u=_(null);let f=u,h=!1;function p(H,J,j,te,ie){let oe=!1;if(a){const N=x(te,j,J);f!==N&&(f=N,g(f.object)),oe=v(H,te,j,ie),oe&&w(H,te,j,ie)}else{const N=J.wireframe===!0;(f.geometry!==te.id||f.program!==j.id||f.wireframe!==N)&&(f.geometry=te.id,f.program=j.id,f.wireframe=N,oe=!0)}ie!==null&&t.update(ie,i.ELEMENT_ARRAY_BUFFER),(oe||h)&&(h=!1,z(H,J,j,te),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(H){return n.isWebGL2?i.bindVertexArray(H):s.bindVertexArrayOES(H)}function y(H){return n.isWebGL2?i.deleteVertexArray(H):s.deleteVertexArrayOES(H)}function x(H,J,j){const te=j.wireframe===!0;let ie=l[H.id];ie===void 0&&(ie={},l[H.id]=ie);let oe=ie[J.id];oe===void 0&&(oe={},ie[J.id]=oe);let N=oe[te];return N===void 0&&(N=_(m()),oe[te]=N),N}function _(H){const J=[],j=[],te=[];for(let ie=0;ie<r;ie++)J[ie]=0,j[ie]=0,te[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:te,object:H,attributes:{},index:null}}function v(H,J,j,te){const ie=f.attributes,oe=J.attributes;let N=0;const ce=j.getAttributes();for(const Se in ce)if(ce[Se].location>=0){const ne=ie[Se];let ue=oe[Se];if(ue===void 0&&(Se==="instanceMatrix"&&H.instanceMatrix&&(ue=H.instanceMatrix),Se==="instanceColor"&&H.instanceColor&&(ue=H.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;N++}return f.attributesNum!==N||f.index!==te}function w(H,J,j,te){const ie={},oe=J.attributes;let N=0;const ce=j.getAttributes();for(const Se in ce)if(ce[Se].location>=0){let ne=oe[Se];ne===void 0&&(Se==="instanceMatrix"&&H.instanceMatrix&&(ne=H.instanceMatrix),Se==="instanceColor"&&H.instanceColor&&(ne=H.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),ie[Se]=ue,N++}f.attributes=ie,f.attributesNum=N,f.index=te}function T(){const H=f.newAttributes;for(let J=0,j=H.length;J<j;J++)H[J]=0}function E(H){C(H,0)}function C(H,J){const j=f.newAttributes,te=f.enabledAttributes,ie=f.attributeDivisors;j[H]=1,te[H]===0&&(i.enableVertexAttribArray(H),te[H]=1),ie[H]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,J),ie[H]=J)}function R(){const H=f.newAttributes,J=f.enabledAttributes;for(let j=0,te=J.length;j<te;j++)J[j]!==H[j]&&(i.disableVertexAttribArray(j),J[j]=0)}function A(H,J,j,te,ie,oe,N){N===!0?i.vertexAttribIPointer(H,J,j,ie,oe):i.vertexAttribPointer(H,J,j,te,ie,oe)}function z(H,J,j,te){if(n.isWebGL2===!1&&(H.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ie=te.attributes,oe=j.getAttributes(),N=J.defaultAttributeValues;for(const ce in oe){const Se=oe[ce];if(Se.location>=0){let Je=ie[ce];if(Je===void 0&&(ce==="instanceMatrix"&&H.instanceMatrix&&(Je=H.instanceMatrix),ce==="instanceColor"&&H.instanceColor&&(Je=H.instanceColor)),Je!==void 0){const ne=Je.normalized,ue=Je.itemSize,Te=t.get(Je);if(Te===void 0)continue;const De=Te.buffer,Oe=Te.type,Ce=Te.bytesPerElement,gt=n.isWebGL2===!0&&(Oe===i.INT||Oe===i.UNSIGNED_INT||Je.gpuType===M1);if(Je.isInterleavedBufferAttribute){const $e=Je.data,q=$e.stride,st=Je.offset;if($e.isInstancedInterleavedBuffer){for(let be=0;be<Se.locationSize;be++)C(Se.location+be,$e.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let be=0;be<Se.locationSize;be++)E(Se.location+be);i.bindBuffer(i.ARRAY_BUFFER,De);for(let be=0;be<Se.locationSize;be++)A(Se.location+be,ue/Se.locationSize,Oe,ne,q*Ce,(st+ue/Se.locationSize*be)*Ce,gt)}else{if(Je.isInstancedBufferAttribute){for(let $e=0;$e<Se.locationSize;$e++)C(Se.location+$e,Je.meshPerAttribute);H.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let $e=0;$e<Se.locationSize;$e++)E(Se.location+$e);i.bindBuffer(i.ARRAY_BUFFER,De);for(let $e=0;$e<Se.locationSize;$e++)A(Se.location+$e,ue/Se.locationSize,Oe,ne,ue*Ce,ue/Se.locationSize*$e*Ce,gt)}}else if(N!==void 0){const ne=N[ce];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Se.location,ne);break;case 3:i.vertexAttrib3fv(Se.location,ne);break;case 4:i.vertexAttrib4fv(Se.location,ne);break;default:i.vertexAttrib1fv(Se.location,ne)}}}}R()}function G(){V();for(const H in l){const J=l[H];for(const j in J){const te=J[j];for(const ie in te)y(te[ie].object),delete te[ie];delete J[j]}delete l[H]}}function M(H){if(l[H.id]===void 0)return;const J=l[H.id];for(const j in J){const te=J[j];for(const ie in te)y(te[ie].object),delete te[ie];delete J[j]}delete l[H.id]}function U(H){for(const J in l){const j=l[J];if(j[H.id]===void 0)continue;const te=j[H.id];for(const ie in te)y(te[ie].object),delete te[ie];delete j[H.id]}}function V(){ae(),h=!0,f!==u&&(f=u,g(f.object))}function ae(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:V,resetDefaultState:ae,dispose:G,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:E,disableUnusedAttributes:R}}function X5(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function l(h,p){i.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,m){if(m===0)return;let g,y;if(r)g=i,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,h,p,m),t.update(p,s,m)}function f(h,p,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<m;y++)this.render(h[y],p[y]);else{g.multiDrawArraysWEBGL(s,h,0,p,0,m);let y=0;for(let x=0;x<m;x++)y+=p[x];t.update(y,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function q5(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=a||e.has("OES_texture_float"),C=T&&E,R=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:R}}function Y5(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Fo,l=new At,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,x=p.clipIntersection,_=p.clipShadows,v=i.get(p);if(!r||y===null||y.length===0||s&&!_)s?h(null):f();else{const w=s?0:n,T=w*4;let E=v.clippingState||null;u.value=E,E=h(y,m,T,g);for(let C=0;C!==T;++C)E[C]=t[C];v.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,g,y){const x=p!==null?p.length:0;let _=null;if(x!==0){if(_=u.value,y!==!0||_===null){const v=g+x*4,w=m.matrixWorldInverse;l.getNormalMatrix(w),(_===null||_.length<v)&&(_=new Float32Array(v));for(let T=0,E=g;T!==x;++T,E+=4)a.copy(p[T]).applyMatrix4(w,l),a.normal.toArray(_,E),_[E+3]=a.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function j5(i){let e=new WeakMap;function t(a,l){return l===Og?a.mapping=wl:l===Ug&&(a.mapping=Al),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===Og||l===Ug)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const f=new a4(u.height);return f.fromEquirectangularTexture(i,a),e.set(a,f),a.addEventListener("dispose",r),t(f.texture,a.mapping)}else return null}}return a}function r(a){const l=a.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class K5 extends G1{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,a=s+f*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ol=4,qE=[.125,.215,.35,.446,.526,.582],ko=20,Gm=new K5,YE=new Yt;let Wm=null,Vm=0,$m=0;const Bo=(1+Math.sqrt(5))/2,Ja=1/Bo,jE=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Bo,Ja),new se(0,Bo,-Ja),new se(Ja,0,Bo),new se(-Ja,0,Bo),new se(Bo,Ja,0),new se(-Bo,Ja,0)];class KE{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Wm=this._renderer.getRenderTarget(),Vm=this._renderer.getActiveCubeFace(),$m=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=QE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=JE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wm,Vm,$m),e.scissorTest=!1,Yf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wl||e.mapping===Al?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wm=this._renderer.getRenderTarget(),Vm=this._renderer.getActiveCubeFace(),$m=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:jc,format:Or,colorSpace:Ds,depthBuffer:!1},r=ZE(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ZE(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Z5(s)),this._blurMaterial=J5(s,e,t)}return r}_compileMaterial(e){const t=new Zr(this._lodPlanes[0],e);this._renderer.compile(t,Gm)}_sceneToCubeUV(e,t,n,r){const l=new mr(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(YE),h.toneMapping=co,h.autoClear=!1;const g=new B1({name:"PMREM.Background",side:Ii,depthWrite:!1,depthTest:!1}),y=new Zr(new lu,g);let x=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,x=!0):(g.color.copy(YE),x=!0);for(let v=0;v<6;v++){const w=v%3;w===0?(l.up.set(0,u[v],0),l.lookAt(f[v],0,0)):w===1?(l.up.set(0,0,u[v]),l.lookAt(0,f[v],0)):(l.up.set(0,u[v],0),l.lookAt(0,0,f[v]));const T=this._cubeSize;Yf(r,w*T,v>2?T:0,T,T),h.setRenderTarget(r),x&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===wl||e.mapping===Al;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=QE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=JE());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Zr(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Yf(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Gm)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jE[(r-1)%jE.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,l){const u=this._renderer,f=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Zr(this._lodPlanes[r],f),m=f.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ko-1),x=s/y,_=isFinite(s)?1+Math.floor(h*x):ko;_>ko&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ko}`);const v=[];let w=0;for(let A=0;A<ko;++A){const z=A/x,G=Math.exp(-z*z/2);v.push(G),A===0?w+=G:A<_&&(w+=2*G)}for(let A=0;A<v.length;A++)v[A]=v[A]/w;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=v,m.latitudinal.value=a==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:T}=this;m.dTheta.value=y,m.mipInt.value=T-n;const E=this._sizeLods[r],C=3*E*(r>T-ol?r-T+ol:0),R=4*(this._cubeSize-E);Yf(t,C,R,3*E,2*E),u.setRenderTarget(t),u.render(p,Gm)}}function Z5(i){const e=[],t=[],n=[];let r=i;const s=i-ol+1+qE.length;for(let a=0;a<s;a++){const l=Math.pow(2,r);t.push(l);let u=1/l;a>i-ol?u=qE[a-i+ol-1]:a===0&&(u=0),n.push(u);const f=1/(l-2),h=-f,p=1+f,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,y=6,x=3,_=2,v=1,w=new Float32Array(x*y*g),T=new Float32Array(_*y*g),E=new Float32Array(v*y*g);for(let R=0;R<g;R++){const A=R%3*2/3-1,z=R>2?0:-1,G=[A,z,0,A+2/3,z,0,A+2/3,z+1,0,A,z,0,A+2/3,z+1,0,A,z+1,0];w.set(G,x*y*R),T.set(m,_*y*R);const M=[R,R,R,R,R,R];E.set(M,v*y*R)}const C=new pa;C.setAttribute("position",new ns(w,x)),C.setAttribute("uv",new ns(T,_)),C.setAttribute("faceIndex",new ns(E,v)),e.push(C),r>ol&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ZE(i,e,t){const n=new fa(i,e,t);return n.texture.mapping=Jh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yf(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function J5(i,e,t){const n=new Float32Array(ko),r=new se(0,1,0);return new Is({name:"SphericalGaussianBlur",defines:{n:ko,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sv(),fragmentShader:`

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
		`,blending:lo,depthTest:!1,depthWrite:!1})}function JE(){return new Is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sv(),fragmentShader:`

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
		`,blending:lo,depthTest:!1,depthWrite:!1})}function QE(){return new Is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:lo,depthTest:!1,depthWrite:!1})}function sv(){return`

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
	`}function Q5(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===Og||u===Ug,h=u===wl||u===Al;if(f||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new KE(i)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||h&&p&&r(p)){t===null&&(t=new KE(i));const m=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",s),m.texture}else return null}}}return l}function r(l){let u=0;const f=6;for(let h=0;h<f;h++)l[h]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function e$(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function t$(i,e,t,n){const r={},s=new WeakMap;function a(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const x=m.morphAttributes[y];for(let _=0,v=x.length;_<v;_++)e.remove(x[_])}m.removeEventListener("dispose",a),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return r[m.id]===!0||(m.addEventListener("dispose",a),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const x=g[y];for(let _=0,v=x.length;_<v;_++)e.update(x[_],i.ARRAY_BUFFER)}}function f(p){const m=[],g=p.index,y=p.attributes.position;let x=0;if(g!==null){const w=g.array;x=g.version;for(let T=0,E=w.length;T<E;T+=3){const C=w[T+0],R=w[T+1],A=w[T+2];m.push(C,R,R,A,A,C)}}else if(y!==void 0){const w=y.array;x=y.version;for(let T=0,E=w.length/3-1;T<E;T+=3){const C=T+0,R=T+1,A=T+2;m.push(C,R,R,A,A,C)}}else return;const _=new(D1(m)?H1:z1)(m,1);_.version=x;const v=s.get(p);v&&e.remove(v),s.set(p,_)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&f(p)}else f(p);return s.get(p)}return{get:l,update:u,getWireframeAttribute:h}}function n$(i,e,t,n){const r=n.isWebGL2;let s;function a(g){s=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function h(g,y){i.drawElements(s,y,l,g*u),t.update(y,s,1)}function p(g,y,x){if(x===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,y,l,g*u,x),t.update(y,s,x)}function m(g,y,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<x;v++)this.render(g[v]/u,y[v]);else{_.multiDrawElementsWEBGL(s,y,0,l,g,0,x);let v=0;for(let w=0;w<x;w++)v+=y[w];t.update(v,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function i$(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,l){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function r$(i,e){return i[0]-e[0]}function s$(i,e){return Math.abs(e[1])-Math.abs(i[1])}function o$(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new kn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function u(f,h,p){const m=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=y!==void 0?y.length:0;let _=s.get(h);if(_===void 0||_.count!==x){let J=function(){ae.dispose(),s.delete(h),h.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],A=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let G=0;T===!0&&(G=1),E===!0&&(G=2),C===!0&&(G=3);let M=h.attributes.position.count*G,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*U*4*x),ae=new U1(V,M,U,x);ae.type=Ts,ae.needsUpdate=!0;const H=G*4;for(let j=0;j<x;j++){const te=R[j],ie=A[j],oe=z[j],N=M*U*4*j;for(let ce=0;ce<te.count;ce++){const Se=ce*H;T===!0&&(a.fromBufferAttribute(te,ce),V[N+Se+0]=a.x,V[N+Se+1]=a.y,V[N+Se+2]=a.z,V[N+Se+3]=0),E===!0&&(a.fromBufferAttribute(ie,ce),V[N+Se+4]=a.x,V[N+Se+5]=a.y,V[N+Se+6]=a.z,V[N+Se+7]=0),C===!0&&(a.fromBufferAttribute(oe,ce),V[N+Se+8]=a.x,V[N+Se+9]=a.y,V[N+Se+10]=a.z,V[N+Se+11]=oe.itemSize===4?a.w:1)}}_={count:x,texture:ae,size:new Bt(M,U)},s.set(h,_),h.addEventListener("dispose",J)}let v=0;for(let T=0;T<m.length;T++)v+=m[T];const w=h.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",w),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const y=m===void 0?0:m.length;let x=n[h.id];if(x===void 0||x.length!==y){x=[];for(let E=0;E<y;E++)x[E]=[E,0];n[h.id]=x}for(let E=0;E<y;E++){const C=x[E];C[0]=E,C[1]=m[E]}x.sort(s$);for(let E=0;E<8;E++)E<y&&x[E][1]?(l[E][0]=x[E][0],l[E][1]=x[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(r$);const _=h.morphAttributes.position,v=h.morphAttributes.normal;let w=0;for(let E=0;E<8;E++){const C=l[E],R=C[0],A=C[1];R!==Number.MAX_SAFE_INTEGER&&A?(_&&h.getAttribute("morphTarget"+E)!==_[R]&&h.setAttribute("morphTarget"+E,_[R]),v&&h.getAttribute("morphNormal"+E)!==v[R]&&h.setAttribute("morphNormal"+E,v[R]),r[E]=A,w+=A):(_&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),v&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const T=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function a$(i,e,t,n){let r=new WeakMap;function s(u){const f=n.render.frame,h=u.geometry,p=e.get(u,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function a(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:a}}class X1 extends ai{constructor(e,t,n,r,s,a,l,u,f,h){if(h=h!==void 0?h:ta,h!==ta&&h!==Cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ta&&(n=ro),n===void 0&&h===Cl&&(n=ea),super(null,r,s,a,l,u,h,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:_i,this.minFilter=u!==void 0?u:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const q1=new ai,Y1=new X1(1,1);Y1.compareFunction=L1;const j1=new U1,K1=new VW,Z1=new W1,eM=[],tM=[],nM=new Float32Array(16),iM=new Float32Array(9),rM=new Float32Array(4);function Bl(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=eM[r];if(s===void 0&&(s=new Float32Array(r),eM[r]=s),e!==0){n.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=t,i[a].toArray(s,l)}return s}function On(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function nd(i,e){let t=tM[e];t===void 0&&(t=new Int32Array(e),tM[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function l$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function c$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function u$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function f$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function h$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;rM.set(n),i.uniformMatrix2fv(this.addr,!1,rM),Un(t,n)}}function d$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;iM.set(n),i.uniformMatrix3fv(this.addr,!1,iM),Un(t,n)}}function p$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;nM.set(n),i.uniformMatrix4fv(this.addr,!1,nM),Un(t,n)}}function m$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function g$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function _$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function v$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function x$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function S$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function E$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function M$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Y1:q1;t.setTexture2D(e||s,r)}function b$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||K1,r)}function T$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Z1,r)}function w$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||j1,r)}function A$(i){switch(i){case 5126:return l$;case 35664:return c$;case 35665:return u$;case 35666:return f$;case 35674:return h$;case 35675:return d$;case 35676:return p$;case 5124:case 35670:return m$;case 35667:case 35671:return g$;case 35668:case 35672:return _$;case 35669:case 35673:return v$;case 5125:return x$;case 36294:return y$;case 36295:return S$;case 36296:return E$;case 35678:case 36198:case 36298:case 36306:case 35682:return M$;case 35679:case 36299:case 36307:return b$;case 35680:case 36300:case 36308:case 36293:return T$;case 36289:case 36303:case 36311:case 36292:return w$}}function C$(i,e){i.uniform1fv(this.addr,e)}function R$(i,e){const t=Bl(e,this.size,2);i.uniform2fv(this.addr,t)}function P$(i,e){const t=Bl(e,this.size,3);i.uniform3fv(this.addr,t)}function L$(i,e){const t=Bl(e,this.size,4);i.uniform4fv(this.addr,t)}function D$(i,e){const t=Bl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function I$(i,e){const t=Bl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function O$(i,e){const t=Bl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function U$(i,e){i.uniform1iv(this.addr,e)}function N$(i,e){i.uniform2iv(this.addr,e)}function F$(i,e){i.uniform3iv(this.addr,e)}function B$(i,e){i.uniform4iv(this.addr,e)}function z$(i,e){i.uniform1uiv(this.addr,e)}function H$(i,e){i.uniform2uiv(this.addr,e)}function k$(i,e){i.uniform3uiv(this.addr,e)}function G$(i,e){i.uniform4uiv(this.addr,e)}function W$(i,e,t){const n=this.cache,r=e.length,s=nd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||q1,s[a])}function V$(i,e,t){const n=this.cache,r=e.length,s=nd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||K1,s[a])}function $$(i,e,t){const n=this.cache,r=e.length,s=nd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Z1,s[a])}function X$(i,e,t){const n=this.cache,r=e.length,s=nd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||j1,s[a])}function q$(i){switch(i){case 5126:return C$;case 35664:return R$;case 35665:return P$;case 35666:return L$;case 35674:return D$;case 35675:return I$;case 35676:return O$;case 5124:case 35670:return U$;case 35667:case 35671:return N$;case 35668:case 35672:return F$;case 35669:case 35673:return B$;case 5125:return z$;case 36294:return H$;case 36295:return k$;case 36296:return G$;case 35678:case 36198:case 36298:case 36306:case 35682:return W$;case 35679:case 36299:case 36307:return V$;case 35680:case 36300:case 36308:case 36293:return $$;case 36289:case 36303:case 36311:case 36292:return X$}}class Y${constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=A$(t.type)}}class j${constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=q$(t.type)}}class K${constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const Xm=/(\w+)(\])?(\[|\.)?/g;function sM(i,e){i.seq.push(e),i.map[e.id]=e}function Z$(i,e,t){const n=i.name,r=n.length;for(Xm.lastIndex=0;;){const s=Xm.exec(n),a=Xm.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&a+2===r){sM(t,f===void 0?new Y$(l,i,e):new j$(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new K$(l),sM(t,p)),t=p}}}class hh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Z$(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function oM(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const J$=37297;let Q$=0;function e8(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const l=a+1;n.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return n.join(`
`)}function t8(i){const e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(i);let n;switch(e===t?n="":e===Nh&&t===Uh?n="LinearDisplayP3ToLinearSRGB":e===Uh&&t===Nh&&(n="LinearSRGBToLinearDisplayP3"),i){case Ds:case Qh:return[n,"LinearTransferOETF"];case Xn:case nv:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function aM(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+e8(i.getShaderSource(e),a)}else return r}function n8(i,e){const t=t8(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function i8(i,e){let t;switch(e){case dW:t="Linear";break;case pW:t="Reinhard";break;case mW:t="OptimizedCineon";break;case gW:t="ACESFilmic";break;case vW:t="AgX";break;case _W:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function r8(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(al).join(`
`)}function s8(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function o8(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function a8(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:l}}return t}function al(i){return i!==""}function lM(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cM(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l8=/^[ \t]*#include +<([\w\d./]+)>/gm;function kg(i){return i.replace(l8,u8)}const c8=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function u8(i,e){let t=Mt[e];if(t===void 0){const n=c8.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return kg(t)}const f8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uM(i){return i.replace(f8,h8)}function h8(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fM(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function d8(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===y1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===kG?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function p8(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case wl:case Al:e="ENVMAP_TYPE_CUBE";break;case Jh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function m8(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Al:e="ENVMAP_MODE_REFRACTION";break}return e}function g8(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case S1:e="ENVMAP_BLENDING_MULTIPLY";break;case fW:e="ENVMAP_BLENDING_MIX";break;case hW:e="ENVMAP_BLENDING_ADD";break}return e}function _8(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function v8(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,l=t.fragmentShader;const u=d8(t),f=p8(t),h=m8(t),p=g8(t),m=_8(t),g=t.isWebGL2?"":r8(t),y=s8(t),x=o8(s),_=r.createProgram();let v,w,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(al).join(`
`),v.length>0&&(v+=`
`),w=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(al).join(`
`),w.length>0&&(w+=`
`)):(v=[fM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),w=[g,fM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==co?"#define TONE_MAPPING":"",t.toneMapping!==co?Mt.tonemapping_pars_fragment:"",t.toneMapping!==co?i8("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,n8("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),a=kg(a),a=lM(a,t),a=cM(a,t),l=kg(l),l=lM(l,t),l=cM(l,t),a=uM(a),l=uM(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,w=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===AE?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===AE?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+w);const E=T+v+a,C=T+w+l,R=oM(r,r.VERTEX_SHADER,E),A=oM(r,r.FRAGMENT_SHADER,C);r.attachShader(_,R),r.attachShader(_,A),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function z(V){if(i.debug.checkShaderErrors){const ae=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(A).trim();let j=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,A);else{const ie=aM(r,R,"vertex"),oe=aM(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ae+`
`+ie+`
`+oe)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(H===""||J==="")&&(te=!1);te&&(V.diagnostics={runnable:j,programLog:ae,vertexShader:{log:H,prefix:v},fragmentShader:{log:J,prefix:w}})}r.deleteShader(R),r.deleteShader(A),G=new hh(r,_),M=a8(r,_)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,J$)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q$++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=A,this}let x8=0;class y8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new S8(e),t.set(e,n)),n}}class S8{constructor(e){this.id=x8++,this.code=e,this.usedTimes=0}}function E8(i,e,t,n,r,s,a){const l=new rv,u=new y8,f=new Set,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return f.add(M),M===0?"uv":`uv${M}`}function v(M,U,V,ae,H){const J=ae.fog,j=H.geometry,te=M.isMeshStandardMaterial?ae.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),oe=ie&&ie.mapping===Jh?ie.image.height:null,N=x[M.type];M.precision!==null&&(y=r.getMaxPrecision(M.precision),y!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",y,"instead."));const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Je=0;j.morphAttributes.position!==void 0&&(Je=1),j.morphAttributes.normal!==void 0&&(Je=2),j.morphAttributes.color!==void 0&&(Je=3);let ne,ue,Te,De;if(N){const It=Xr[N];ne=It.vertexShader,ue=It.fragmentShader}else ne=M.vertexShader,ue=M.fragmentShader,u.update(M),Te=u.getVertexShaderID(M),De=u.getFragmentShaderID(M);const Oe=i.getRenderTarget(),Ce=H.isInstancedMesh===!0,gt=H.isBatchedMesh===!0,$e=!!M.map,q=!!M.matcap,st=!!ie,be=!!M.aoMap,Ge=!!M.lightMap,Ue=!!M.bumpMap,K=!!M.normalMap,et=!!M.displacementMap,O=!!M.emissiveMap,P=!!M.metalnessMap,Y=!!M.roughnessMap,me=M.anisotropy>0,de=M.clearcoat>0,_e=M.iridescence>0,Ae=M.sheen>0,we=M.transmission>0,Ee=me&&!!M.anisotropyMap,He=de&&!!M.clearcoatMap,tt=de&&!!M.clearcoatNormalMap,pe=de&&!!M.clearcoatRoughnessMap,Tt=_e&&!!M.iridescenceMap,Xe=_e&&!!M.iridescenceThicknessMap,ot=Ae&&!!M.sheenColorMap,We=Ae&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,at=!!M.specularColorMap,_t=!!M.specularIntensityMap,Dt=we&&!!M.transmissionMap,Pe=we&&!!M.thicknessMap,Ct=!!M.gradientMap,F=!!M.alphaMap,ve=M.alphaTest>0,xe=!!M.alphaHash,Ne=!!M.extensions;let Ze=co;M.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const vt={isWebGL2:p,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:ue,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:y,batching:gt,instancing:Ce,instancingColor:Ce&&H.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ds,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:q,envMap:st,envMapMode:st&&ie.mapping,envMapCubeUVHeight:oe,aoMap:be,lightMap:Ge,bumpMap:Ue,normalMap:K,displacementMap:g&&et,emissiveMap:O,normalMapObjectSpace:K&&M.normalMapType===PW,normalMapTangentSpace:K&&M.normalMapType===RW,metalnessMap:P,roughnessMap:Y,anisotropy:me,anisotropyMap:Ee,clearcoat:de,clearcoatMap:He,clearcoatNormalMap:tt,clearcoatRoughnessMap:pe,iridescence:_e,iridescenceMap:Tt,iridescenceThicknessMap:Xe,sheen:Ae,sheenColorMap:ot,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:at,specularIntensityMap:_t,transmission:we,transmissionMap:Dt,thicknessMap:Pe,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===gl&&M.alphaToCoverage===!1,alphaMap:F,alphaTest:ve,alphaHash:xe,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:be&&_(M.aoMap.channel),lightMapUv:Ge&&_(M.lightMap.channel),bumpMapUv:Ue&&_(M.bumpMap.channel),normalMapUv:K&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:O&&_(M.emissiveMap.channel),metalnessMapUv:P&&_(M.metalnessMap.channel),roughnessMapUv:Y&&_(M.roughnessMap.channel),anisotropyMapUv:Ee&&_(M.anisotropyMap.channel),clearcoatMapUv:He&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(M.sheenRoughnessMap.channel),specularMapUv:Ie&&_(M.specularMap.channel),specularColorMapUv:at&&_(M.specularColorMap.channel),specularIntensityMapUv:_t&&_(M.specularIntensityMap.channel),transmissionMapUv:Dt&&_(M.transmissionMap.channel),thicknessMapUv:Pe&&_(M.thicknessMap.channel),alphaMapUv:F&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(K||me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!j.attributes.uv&&($e||F),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:H.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Je,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===sn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bs,flipSided:M.side===Ii,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ne&&M.extensions.derivatives===!0,extensionFragDepth:Ne&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=f.has(1),vt.vertexUv2s=f.has(2),vt.vertexUv3s=f.has(3),f.clear(),vt}function w(M){const U=[];if(M.shaderID?U.push(M.shaderID):(U.push(M.customVertexShaderID),U.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)U.push(V),U.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(T(U,M),E(U,M),U.push(i.outputColorSpace)),U.push(M.customProgramCacheKey),U.join()}function T(M,U){M.push(U.precision),M.push(U.outputColorSpace),M.push(U.envMapMode),M.push(U.envMapCubeUVHeight),M.push(U.mapUv),M.push(U.alphaMapUv),M.push(U.lightMapUv),M.push(U.aoMapUv),M.push(U.bumpMapUv),M.push(U.normalMapUv),M.push(U.displacementMapUv),M.push(U.emissiveMapUv),M.push(U.metalnessMapUv),M.push(U.roughnessMapUv),M.push(U.anisotropyMapUv),M.push(U.clearcoatMapUv),M.push(U.clearcoatNormalMapUv),M.push(U.clearcoatRoughnessMapUv),M.push(U.iridescenceMapUv),M.push(U.iridescenceThicknessMapUv),M.push(U.sheenColorMapUv),M.push(U.sheenRoughnessMapUv),M.push(U.specularMapUv),M.push(U.specularColorMapUv),M.push(U.specularIntensityMapUv),M.push(U.transmissionMapUv),M.push(U.thicknessMapUv),M.push(U.combine),M.push(U.fogExp2),M.push(U.sizeAttenuation),M.push(U.morphTargetsCount),M.push(U.morphAttributeCount),M.push(U.numDirLights),M.push(U.numPointLights),M.push(U.numSpotLights),M.push(U.numSpotLightMaps),M.push(U.numHemiLights),M.push(U.numRectAreaLights),M.push(U.numDirLightShadows),M.push(U.numPointLightShadows),M.push(U.numSpotLightShadows),M.push(U.numSpotLightShadowsWithMaps),M.push(U.numLightProbes),M.push(U.shadowMapType),M.push(U.toneMapping),M.push(U.numClippingPlanes),M.push(U.numClipIntersection),M.push(U.depthPacking)}function E(M,U){l.disableAll(),U.isWebGL2&&l.enable(0),U.supportsVertexTextures&&l.enable(1),U.instancing&&l.enable(2),U.instancingColor&&l.enable(3),U.matcap&&l.enable(4),U.envMap&&l.enable(5),U.normalMapObjectSpace&&l.enable(6),U.normalMapTangentSpace&&l.enable(7),U.clearcoat&&l.enable(8),U.iridescence&&l.enable(9),U.alphaTest&&l.enable(10),U.vertexColors&&l.enable(11),U.vertexAlphas&&l.enable(12),U.vertexUv1s&&l.enable(13),U.vertexUv2s&&l.enable(14),U.vertexUv3s&&l.enable(15),U.vertexTangents&&l.enable(16),U.anisotropy&&l.enable(17),U.alphaHash&&l.enable(18),U.batching&&l.enable(19),M.push(l.mask),l.disableAll(),U.fog&&l.enable(0),U.useFog&&l.enable(1),U.flatShading&&l.enable(2),U.logarithmicDepthBuffer&&l.enable(3),U.skinning&&l.enable(4),U.morphTargets&&l.enable(5),U.morphNormals&&l.enable(6),U.morphColors&&l.enable(7),U.premultipliedAlpha&&l.enable(8),U.shadowMapEnabled&&l.enable(9),U.useLegacyLights&&l.enable(10),U.doubleSided&&l.enable(11),U.flipSided&&l.enable(12),U.useDepthPacking&&l.enable(13),U.dithering&&l.enable(14),U.transmission&&l.enable(15),U.sheen&&l.enable(16),U.opaque&&l.enable(17),U.pointsUvs&&l.enable(18),U.decodeVideoTexture&&l.enable(19),U.alphaToCoverage&&l.enable(20),M.push(l.mask)}function C(M){const U=x[M.type];let V;if(U){const ae=Xr[U];V=i4.clone(ae.uniforms)}else V=M.uniforms;return V}function R(M,U){let V;for(let ae=0,H=h.length;ae<H;ae++){const J=h[ae];if(J.cacheKey===U){V=J,++V.usedTimes;break}}return V===void 0&&(V=new v8(i,U,M,s),h.push(V)),V}function A(M){if(--M.usedTimes===0){const U=h.indexOf(M);h[U]=h[h.length-1],h.pop(),M.destroy()}}function z(M){u.remove(M)}function G(){u.dispose()}return{getParameters:v,getProgramCacheKey:w,getUniforms:C,acquireProgram:R,releaseProgram:A,releaseShaderCache:z,programs:h,dispose:G}}function M8(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,l){i.get(s)[a]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function b8(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function hM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dM(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,m,g,y,x,_){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:x,group:_},i[e]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=g,v.groupOrder=y,v.renderOrder=p.renderOrder,v.z=x,v.group=_),e++,v}function l(p,m,g,y,x,_){const v=a(p,m,g,y,x,_);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):t.push(v)}function u(p,m,g,y,x,_){const v=a(p,m,g,y,x,_);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function f(p,m){t.length>1&&t.sort(p||b8),n.length>1&&n.sort(m||hM),r.length>1&&r.sort(m||hM)}function h(){for(let p=e,m=i.length;p<m;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:h,sort:f}}function T8(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new dM,i.set(n,[a])):r>=s.length?(a=new dM,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function w8(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Yt};break;case"SpotLight":t={position:new se,direction:new se,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":t={color:new Yt,position:new se,halfWidth:new se,halfHeight:new se};break}return i[e.id]=t,t}}}function A8(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C8=0;function R8(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function P8(i,e){const t=new w8,n=A8(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new se);const s=new se,a=new Yn,l=new Yn;function u(h,p){let m=0,g=0,y=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let x=0,_=0,v=0,w=0,T=0,E=0,C=0,R=0,A=0,z=0,G=0;h.sort(R8);const M=p===!0?Math.PI:1;for(let V=0,ae=h.length;V<ae;V++){const H=h[V],J=H.color,j=H.intensity,te=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=J.r*j*M,g+=J.g*j*M,y+=J.b*j*M;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(H.sh.coefficients[oe],j);G++}else if(H.isDirectionalLight){const oe=t.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity*M),H.castShadow){const N=H.shadow,ce=n.get(H);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,r.directionalShadow[x]=ce,r.directionalShadowMap[x]=ie,r.directionalShadowMatrix[x]=H.shadow.matrix,E++}r.directional[x]=oe,x++}else if(H.isSpotLight){const oe=t.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(J).multiplyScalar(j*M),oe.distance=te,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,r.spot[v]=oe;const N=H.shadow;if(H.map&&(r.spotLightMap[A]=H.map,A++,N.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[v]=N.matrix,H.castShadow){const ce=n.get(H);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,r.spotShadow[v]=ce,r.spotShadowMap[v]=ie,R++}v++}else if(H.isRectAreaLight){const oe=t.get(H);oe.color.copy(J).multiplyScalar(j),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),r.rectArea[w]=oe,w++}else if(H.isPointLight){const oe=t.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity*M),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const N=H.shadow,ce=n.get(H);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,ce.shadowCameraNear=N.camera.near,ce.shadowCameraFar=N.camera.far,r.pointShadow[_]=ce,r.pointShadowMap[_]=ie,r.pointShadowMatrix[_]=H.shadow.matrix,C++}r.point[_]=oe,_++}else if(H.isHemisphereLight){const oe=t.get(H);oe.skyColor.copy(H.color).multiplyScalar(j*M),oe.groundColor.copy(H.groundColor).multiplyScalar(j*M),r.hemi[T]=oe,T++}}w>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=y;const U=r.hash;(U.directionalLength!==x||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==w||U.hemiLength!==T||U.numDirectionalShadows!==E||U.numPointShadows!==C||U.numSpotShadows!==R||U.numSpotMaps!==A||U.numLightProbes!==G)&&(r.directional.length=x,r.spot.length=v,r.rectArea.length=w,r.point.length=_,r.hemi.length=T,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+A-z,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=G,U.directionalLength=x,U.pointLength=_,U.spotLength=v,U.rectAreaLength=w,U.hemiLength=T,U.numDirectionalShadows=E,U.numPointShadows=C,U.numSpotShadows=R,U.numSpotMaps=A,U.numLightProbes=G,r.version=C8++)}function f(h,p){let m=0,g=0,y=0,x=0,_=0;const v=p.matrixWorldInverse;for(let w=0,T=h.length;w<T;w++){const E=h[w];if(E.isDirectionalLight){const C=r.directional[m];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),m++}else if(E.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),y++}else if(E.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),l.identity(),a.copy(E.matrixWorld),a.premultiply(v),l.extractRotation(a),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),x++}else if(E.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),g++}else if(E.isHemisphereLight){const C=r.hemi[_];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(v),_++}}}return{setup:u,setupView:f,state:r}}function pM(i,e){const t=new P8(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(p){n.push(p)}function l(p){r.push(p)}function u(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:f,pushLight:a,pushShadow:l}}function L8(i,e){let t=new WeakMap;function n(s,a=0){const l=t.get(s);let u;return l===void 0?(u=new pM(i,e),t.set(s,[u])):a>=l.length?(u=new pM(i,e),l.push(u)):u=l[a],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class D8 extends td{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AW,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class I8 extends td{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const O8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,U8=`uniform sampler2D shadow_pass;
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
}`;function N8(i,e,t){let n=new V1;const r=new Bt,s=new Bt,a=new kn,l=new D8({depthPacking:CW}),u=new I8,f={},h=t.maxTextureSize,p={[go]:Ii,[Ii]:go,[bs]:bs},m=new Is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:O8,fragmentShader:U8}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new pa;y.setAttribute("position",new ns(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Zr(y,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=y1;let v=this.type;this.render=function(R,A,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const G=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(lo),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const ae=v!==ys&&this.type===ys,H=v===ys&&this.type!==ys;for(let J=0,j=R.length;J<j;J++){const te=R[J],ie=te.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const oe=ie.getFrameExtents();if(r.multiply(oe),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,ie.mapSize.y=s.y)),ie.map===null||ae===!0||H===!0){const ce=this.type!==ys?{minFilter:_i,magFilter:_i}:{};ie.map!==null&&ie.map.dispose(),ie.map=new fa(r.x,r.y,ce),ie.map.texture.name=te.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const N=ie.getViewportCount();for(let ce=0;ce<N;ce++){const Se=ie.getViewport(ce);a.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),V.viewport(a),ie.updateMatrices(te,ce),n=ie.getFrustum(),E(A,z,ie.camera,te,this.type)}ie.isPointLightShadow!==!0&&this.type===ys&&w(ie,z),ie.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(G,M,U)};function w(R,A){const z=e.update(x);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new fa(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(A,null,z,m,x,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(A,null,z,g,x,null)}function T(R,A,z,G){let M=null;const U=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)M=U;else if(M=z.isPointLight===!0?u:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=M.uuid,ae=A.uuid;let H=f[V];H===void 0&&(H={},f[V]=H);let J=H[ae];J===void 0&&(J=M.clone(),H[ae]=J,A.addEventListener("dispose",C)),M=J}if(M.visible=A.visible,M.wireframe=A.wireframe,G===ys?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:p[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=z}return M}function E(R,A,z,G,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ys)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const ae=e.update(R),H=R.material;if(Array.isArray(H)){const J=ae.groups;for(let j=0,te=J.length;j<te;j++){const ie=J[j],oe=H[ie.materialIndex];if(oe&&oe.visible){const N=T(R,oe,G,M);R.onBeforeShadow(i,R,A,z,ae,N,ie),i.renderBufferDirect(z,null,ae,N,R,ie),R.onAfterShadow(i,R,A,z,ae,N,ie)}}}else if(H.visible){const J=T(R,H,G,M);R.onBeforeShadow(i,R,A,z,ae,J,null),i.renderBufferDirect(z,null,ae,J,R,null),R.onAfterShadow(i,R,A,z,ae,J,null)}}const V=R.children;for(let ae=0,H=V.length;ae<H;ae++)E(V[ae],A,z,G,M)}function C(R){R.target.removeEventListener("dispose",C);for(const z in f){const G=f[z],M=R.target.uuid;M in G&&(G[M].dispose(),delete G[M])}}}function F8(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const ve=new kn;let xe=null;const Ne=new kn(0,0,0,0);return{setMask:function(Ze){xe!==Ze&&!F&&(i.colorMask(Ze,Ze,Ze,Ze),xe=Ze)},setLocked:function(Ze){F=Ze},setClear:function(Ze,vt,It,qe,Ve){Ve===!0&&(Ze*=qe,vt*=qe,It*=qe),ve.set(Ze,vt,It,qe),Ne.equals(ve)===!1&&(i.clearColor(Ze,vt,It,qe),Ne.copy(ve))},reset:function(){F=!1,xe=null,Ne.set(-1,0,0,0)}}}function s(){let F=!1,ve=null,xe=null,Ne=null;return{setTest:function(Ze){Ze?Ce(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Ze){ve!==Ze&&!F&&(i.depthMask(Ze),ve=Ze)},setFunc:function(Ze){if(xe!==Ze){switch(Ze){case rW:i.depthFunc(i.NEVER);break;case sW:i.depthFunc(i.ALWAYS);break;case oW:i.depthFunc(i.LESS);break;case Ih:i.depthFunc(i.LEQUAL);break;case aW:i.depthFunc(i.EQUAL);break;case lW:i.depthFunc(i.GEQUAL);break;case cW:i.depthFunc(i.GREATER);break;case uW:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Ze}},setLocked:function(Ze){F=Ze},setClear:function(Ze){Ne!==Ze&&(i.clearDepth(Ze),Ne=Ze)},reset:function(){F=!1,ve=null,xe=null,Ne=null}}}function a(){let F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,It=null,qe=null,Ve=null;return{setTest:function(je){F||(je?Ce(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(je){ve!==je&&!F&&(i.stencilMask(je),ve=je)},setFunc:function(je,ye,nt){(xe!==je||Ne!==ye||Ze!==nt)&&(i.stencilFunc(je,ye,nt),xe=je,Ne=ye,Ze=nt)},setOp:function(je,ye,nt){(vt!==je||It!==ye||qe!==nt)&&(i.stencilOp(je,ye,nt),vt=je,It=ye,qe=nt)},setLocked:function(je){F=je},setClear:function(je){Ve!==je&&(i.clearStencil(je),Ve=je)},reset:function(){F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,It=null,qe=null,Ve=null}}}const l=new r,u=new s,f=new a,h=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,x=[],_=null,v=!1,w=null,T=null,E=null,C=null,R=null,A=null,z=null,G=new Yt(0,0,0),M=0,U=!1,V=null,ae=null,H=null,J=null,j=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,oe=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(N)[1]),ie=oe>=1):N.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ie=oe>=2);let ce=null,Se={};const Je=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ue=new kn().fromArray(Je),Te=new kn().fromArray(ne);function De(F,ve,xe,Ne){const Ze=new Uint8Array(4),vt=i.createTexture();i.bindTexture(F,vt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<xe;It++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(ve+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return vt}const Oe={};Oe[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ce(i.DEPTH_TEST),u.setFunc(Ih),et(!1),O(qS),Ce(i.CULL_FACE),Ue(lo);function Ce(F){m[F]!==!0&&(i.enable(F),m[F]=!0)}function gt(F){m[F]!==!1&&(i.disable(F),m[F]=!1)}function $e(F,ve){return g[F]!==ve?(i.bindFramebuffer(F,ve),g[F]=ve,n&&(F===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function q(F,ve){let xe=x,Ne=!1;if(F)if(xe=y.get(ve),xe===void 0&&(xe=[],y.set(ve,xe)),F.isWebGLMultipleRenderTargets){const Ze=F.texture;if(xe.length!==Ze.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,It=Ze.length;vt<It;vt++)xe[vt]=i.COLOR_ATTACHMENT0+vt;xe.length=Ze.length,Ne=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ne=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ne=!0);Ne&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function st(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const be={[Ho]:i.FUNC_ADD,[WG]:i.FUNC_SUBTRACT,[VG]:i.FUNC_REVERSE_SUBTRACT};if(n)be[ZS]=i.MIN,be[JS]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(be[ZS]=F.MIN_EXT,be[JS]=F.MAX_EXT)}const Ge={[$G]:i.ZERO,[XG]:i.ONE,[qG]:i.SRC_COLOR,[Dg]:i.SRC_ALPHA,[QG]:i.SRC_ALPHA_SATURATE,[ZG]:i.DST_COLOR,[jG]:i.DST_ALPHA,[YG]:i.ONE_MINUS_SRC_COLOR,[Ig]:i.ONE_MINUS_SRC_ALPHA,[JG]:i.ONE_MINUS_DST_COLOR,[KG]:i.ONE_MINUS_DST_ALPHA,[eW]:i.CONSTANT_COLOR,[tW]:i.ONE_MINUS_CONSTANT_COLOR,[nW]:i.CONSTANT_ALPHA,[iW]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(F,ve,xe,Ne,Ze,vt,It,qe,Ve,je){if(F===lo){v===!0&&(gt(i.BLEND),v=!1);return}if(v===!1&&(Ce(i.BLEND),v=!0),F!==GG){if(F!==w||je!==U){if((T!==Ho||R!==Ho)&&(i.blendEquation(i.FUNC_ADD),T=Ho,R=Ho),je)switch(F){case gl:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case YS:i.blendFunc(i.ONE,i.ONE);break;case jS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case KS:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case YS:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case KS:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,C=null,A=null,z=null,G.set(0,0,0),M=0,w=F,U=je}return}Ze=Ze||ve,vt=vt||xe,It=It||Ne,(ve!==T||Ze!==R)&&(i.blendEquationSeparate(be[ve],be[Ze]),T=ve,R=Ze),(xe!==E||Ne!==C||vt!==A||It!==z)&&(i.blendFuncSeparate(Ge[xe],Ge[Ne],Ge[vt],Ge[It]),E=xe,C=Ne,A=vt,z=It),(qe.equals(G)===!1||Ve!==M)&&(i.blendColor(qe.r,qe.g,qe.b,Ve),G.copy(qe),M=Ve),w=F,U=!1}function K(F,ve){F.side===bs?gt(i.CULL_FACE):Ce(i.CULL_FACE);let xe=F.side===Ii;ve&&(xe=!xe),et(xe),F.blending===gl&&F.transparent===!1?Ue(lo):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),l.setMask(F.colorWrite);const Ne=F.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){V!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),V=F)}function O(F){F!==zG?(Ce(i.CULL_FACE),F!==ae&&(F===qS?i.cullFace(i.BACK):F===HG?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),ae=F}function P(F){F!==H&&(ie&&i.lineWidth(F),H=F)}function Y(F,ve,xe){F?(Ce(i.POLYGON_OFFSET_FILL),(J!==ve||j!==xe)&&(i.polygonOffset(ve,xe),J=ve,j=xe)):gt(i.POLYGON_OFFSET_FILL)}function me(F){F?Ce(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function de(F){F===void 0&&(F=i.TEXTURE0+te-1),ce!==F&&(i.activeTexture(F),ce=F)}function _e(F,ve,xe){xe===void 0&&(ce===null?xe=i.TEXTURE0+te-1:xe=ce);let Ne=Se[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},Se[xe]=Ne),(Ne.type!==F||Ne.texture!==ve)&&(ce!==xe&&(i.activeTexture(xe),ce=xe),i.bindTexture(F,ve||Oe[F]),Ne.type=F,Ne.texture=ve)}function Ae(){const F=Se[ce];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function we(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(F){ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function _t(F){Te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Te.copy(F))}function Dt(F,ve){let xe=p.get(ve);xe===void 0&&(xe=new WeakMap,p.set(ve,xe));let Ne=xe.get(F);Ne===void 0&&(Ne=i.getUniformBlockIndex(ve,F.name),xe.set(F,Ne))}function Pe(F,ve){const Ne=p.get(ve).get(F);h.get(ve)!==Ne&&(i.uniformBlockBinding(ve,Ne,F.__bindingPointIndex),h.set(ve,Ne))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ce=null,Se={},g={},y=new WeakMap,x=[],_=null,v=!1,w=null,T=null,E=null,C=null,R=null,A=null,z=null,G=new Yt(0,0,0),M=0,U=!1,V=null,ae=null,H=null,J=null,j=null,ue.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Ce,disable:gt,bindFramebuffer:$e,drawBuffers:q,useProgram:st,setBlending:Ue,setMaterial:K,setFlipSided:et,setCullFace:O,setLineWidth:P,setPolygonOffset:Y,setScissorTest:me,activeTexture:de,bindTexture:_e,unbindTexture:Ae,compressedTexImage2D:we,compressedTexImage3D:Ee,texImage2D:We,texImage3D:Ie,updateUBOMapping:Dt,uniformBlockBinding:Pe,texStorage2D:Xe,texStorage3D:ot,texSubImage2D:He,texSubImage3D:tt,compressedTexSubImage2D:pe,compressedTexSubImage3D:Tt,scissor:at,viewport:_t,reset:Ct}}function B8(i,e,t,n,r,s,a){const l=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,P){return g?new OffscreenCanvas(O,P):Kc("canvas")}function x(O,P,Y,me){let de=1;if((O.width>me||O.height>me)&&(de=me/Math.max(O.width,O.height)),de<1||P===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const _e=P?Hg:Math.floor,Ae=_e(de*O.width),we=_e(de*O.height);p===void 0&&(p=y(Ae,we));const Ee=Y?y(Ae,we):p;return Ee.width=Ae,Ee.height=we,Ee.getContext("2d").drawImage(O,0,0,Ae,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+Ae+"x"+we+")."),Ee}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function _(O){return CE(O.width)&&CE(O.height)}function v(O){return l?!1:O.wrapS!==Ir||O.wrapT!==Ir||O.minFilter!==_i&&O.minFilter!==Cn}function w(O,P){return O.generateMipmaps&&P&&O.minFilter!==_i&&O.minFilter!==Cn}function T(O){i.generateMipmap(O)}function E(O,P,Y,me,de=!1){if(l===!1)return P;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e=P;if(P===i.RED&&(Y===i.FLOAT&&(_e=i.R32F),Y===i.HALF_FLOAT&&(_e=i.R16F),Y===i.UNSIGNED_BYTE&&(_e=i.R8)),P===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.R8UI),Y===i.UNSIGNED_SHORT&&(_e=i.R16UI),Y===i.UNSIGNED_INT&&(_e=i.R32UI),Y===i.BYTE&&(_e=i.R8I),Y===i.SHORT&&(_e=i.R16I),Y===i.INT&&(_e=i.R32I)),P===i.RG&&(Y===i.FLOAT&&(_e=i.RG32F),Y===i.HALF_FLOAT&&(_e=i.RG16F),Y===i.UNSIGNED_BYTE&&(_e=i.RG8)),P===i.RGBA){const Ae=de?Oh:qt.getTransfer(me);Y===i.FLOAT&&(_e=i.RGBA32F),Y===i.HALF_FLOAT&&(_e=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(_e=Ae===sn?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(O,P,Y){return w(O,Y)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==Cn?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function R(O){return O===_i||O===QS||O===pc?i.NEAREST:i.LINEAR}function A(O){const P=O.target;P.removeEventListener("dispose",A),G(P),P.isVideoTexture&&h.delete(P)}function z(O){const P=O.target;P.removeEventListener("dispose",z),U(P)}function G(O){const P=n.get(O);if(P.__webglInit===void 0)return;const Y=O.source,me=m.get(Y);if(me){const de=me[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(O),Object.keys(me).length===0&&m.delete(Y)}n.remove(O)}function M(O){const P=n.get(O);i.deleteTexture(P.__webglTexture);const Y=O.source,me=m.get(Y);delete me[P.__cacheKey],a.memory.textures--}function U(O){const P=O.texture,Y=n.get(O),me=n.get(P);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),a.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Y.__webglFramebuffer[de]))for(let _e=0;_e<Y.__webglFramebuffer[de].length;_e++)i.deleteFramebuffer(Y.__webglFramebuffer[de][_e]);else i.deleteFramebuffer(Y.__webglFramebuffer[de]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[de])}else{if(Array.isArray(Y.__webglFramebuffer))for(let de=0;de<Y.__webglFramebuffer.length;de++)i.deleteFramebuffer(Y.__webglFramebuffer[de]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let de=0;de<Y.__webglColorRenderbuffer.length;de++)Y.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[de]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let de=0,_e=P.length;de<_e;de++){const Ae=n.get(P[de]);Ae.__webglTexture&&(i.deleteTexture(Ae.__webglTexture),a.memory.textures--),n.remove(P[de])}n.remove(P),n.remove(O)}let V=0;function ae(){V=0}function H(){const O=V;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),V+=1,O}function J(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function j(O,P){const Y=n.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){const me=O.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,O,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function te(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){ue(Y,O,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function ie(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){ue(Y,O,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function oe(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){Te(Y,O,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const N={[Ng]:i.REPEAT,[Ir]:i.CLAMP_TO_EDGE,[Fg]:i.MIRRORED_REPEAT},ce={[_i]:i.NEAREST,[QS]:i.NEAREST_MIPMAP_NEAREST,[pc]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[_m]:i.LINEAR_MIPMAP_NEAREST,[Vo]:i.LINEAR_MIPMAP_LINEAR},Se={[LW]:i.NEVER,[FW]:i.ALWAYS,[DW]:i.LESS,[L1]:i.LEQUAL,[IW]:i.EQUAL,[NW]:i.GEQUAL,[OW]:i.GREATER,[UW]:i.NOTEQUAL};function Je(O,P,Y){if(P.type===Ts&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Cn||P.magFilter===_m||P.magFilter===pc||P.magFilter===Vo||P.minFilter===Cn||P.minFilter===_m||P.minFilter===pc||P.minFilter===Vo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(O,i.TEXTURE_WRAP_S,N[P.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,N[P.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,N[P.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ce[P.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ce[P.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==Ir||P.wrapT!==Ir)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,R(P.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,R(P.minFilter)),P.minFilter!==_i&&P.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Se[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===_i||P.minFilter!==pc&&P.minFilter!==Vo||P.type===Ts&&e.has("OES_texture_float_linear")===!1||l===!1&&P.type===jc&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(O,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function ne(O,P){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",A));const me=P.source;let de=m.get(me);de===void 0&&(de={},m.set(me,de));const _e=J(P);if(_e!==O.__cacheKey){de[_e]===void 0&&(de[_e]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),de[_e].usedTimes++;const Ae=de[O.__cacheKey];Ae!==void 0&&(de[O.__cacheKey].usedTimes--,Ae.usedTimes===0&&M(P)),O.__cacheKey=_e,O.__webglTexture=de[_e].texture}return Y}function ue(O,P,Y){let me=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(me=i.TEXTURE_3D);const de=ne(O,P),_e=P.source;t.bindTexture(me,O.__webglTexture,i.TEXTURE0+Y);const Ae=n.get(_e);if(_e.version!==Ae.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);const we=qt.getPrimaries(qt.workingColorSpace),Ee=P.colorSpace===gr?null:qt.getPrimaries(P.colorSpace),He=P.colorSpace===gr||we===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const tt=v(P)&&_(P.image)===!1;let pe=x(P.image,tt,!1,r.maxTextureSize);pe=et(P,pe);const Tt=_(pe)||l,Xe=s.convert(P.format,P.colorSpace);let ot=s.convert(P.type),We=E(P.internalFormat,Xe,ot,P.colorSpace,P.isVideoTexture);Je(me,P,Tt);let Ie;const at=P.mipmaps,_t=l&&P.isVideoTexture!==!0&&We!==R1,Dt=Ae.__version===void 0||de===!0,Pe=_e.dataReady,Ct=C(P,pe,Tt);if(P.isDepthTexture)We=i.DEPTH_COMPONENT,l?P.type===Ts?We=i.DEPTH_COMPONENT32F:P.type===ro?We=i.DEPTH_COMPONENT24:P.type===ea?We=i.DEPTH24_STENCIL8:We=i.DEPTH_COMPONENT16:P.type===Ts&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===ta&&We===i.DEPTH_COMPONENT&&P.type!==tv&&P.type!==ro&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=ro,ot=s.convert(P.type)),P.format===Cl&&We===i.DEPTH_COMPONENT&&(We=i.DEPTH_STENCIL,P.type!==ea&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=ea,ot=s.convert(P.type))),Dt&&(_t?t.texStorage2D(i.TEXTURE_2D,1,We,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,We,pe.width,pe.height,0,Xe,ot,null));else if(P.isDataTexture)if(at.length>0&&Tt){_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,at[0].width,at[0].height);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,ot,Ie.data):t.texImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Xe,ot,Ie.data);P.generateMipmaps=!1}else _t?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Xe,ot,pe.data)):t.texImage2D(i.TEXTURE_2D,0,We,pe.width,pe.height,0,Xe,ot,pe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){_t&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,We,at[0].width,at[0].height,pe.depth);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],P.format!==Or?Xe!==null?_t?Pe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,pe.depth,Xe,Ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,We,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,pe.depth,Xe,ot,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,We,Ie.width,Ie.height,pe.depth,0,Xe,ot,Ie.data)}else{_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,at[0].width,at[0].height);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],P.format!==Or?Xe!==null?_t?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,ot,Ie.data):t.texImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Xe,ot,Ie.data)}else if(P.isDataArrayTexture)_t?(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,We,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Xe,ot,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,Xe,ot,pe.data);else if(P.isData3DTexture)_t?(Dt&&t.texStorage3D(i.TEXTURE_3D,Ct,We,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Xe,ot,pe.data)):t.texImage3D(i.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,Xe,ot,pe.data);else if(P.isFramebufferTexture){if(Dt)if(_t)t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height);else{let F=pe.width,ve=pe.height;for(let xe=0;xe<Ct;xe++)t.texImage2D(i.TEXTURE_2D,xe,We,F,ve,0,Xe,ot,null),F>>=1,ve>>=1}}else if(at.length>0&&Tt){_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,at[0].width,at[0].height);for(let F=0,ve=at.length;F<ve;F++)Ie=at[F],_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Xe,ot,Ie):t.texImage2D(i.TEXTURE_2D,F,We,Xe,ot,Ie);P.generateMipmaps=!1}else _t?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,ot,pe)):t.texImage2D(i.TEXTURE_2D,0,We,Xe,ot,pe);w(P,Tt)&&T(me),Ae.__version=_e.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Te(O,P,Y){if(P.image.length!==6)return;const me=ne(O,P),de=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);const _e=n.get(de);if(de.version!==_e.__version||me===!0){t.activeTexture(i.TEXTURE0+Y);const Ae=qt.getPrimaries(qt.workingColorSpace),we=P.colorSpace===gr?null:qt.getPrimaries(P.colorSpace),Ee=P.colorSpace===gr||Ae===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const He=P.isCompressedTexture||P.image[0].isCompressedTexture,tt=P.image[0]&&P.image[0].isDataTexture,pe=[];for(let F=0;F<6;F++)!He&&!tt?pe[F]=x(P.image[F],!1,!0,r.maxCubemapSize):pe[F]=tt?P.image[F].image:P.image[F],pe[F]=et(P,pe[F]);const Tt=pe[0],Xe=_(Tt)||l,ot=s.convert(P.format,P.colorSpace),We=s.convert(P.type),Ie=E(P.internalFormat,ot,We,P.colorSpace),at=l&&P.isVideoTexture!==!0,_t=_e.__version===void 0||me===!0,Dt=de.dataReady;let Pe=C(P,Tt,Xe);Je(i.TEXTURE_CUBE_MAP,P,Xe);let Ct;if(He){at&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ie,Tt.width,Tt.height);for(let F=0;F<6;F++){Ct=pe[F].mipmaps;for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];P.format!==Or?ot!==null?at?Dt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,ot,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,ot,We,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,Ie,xe.width,xe.height,0,ot,We,xe.data)}}}else{Ct=P.mipmaps,at&&_t&&(Ct.length>0&&Pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ie,pe[0].width,pe[0].height));for(let F=0;F<6;F++)if(tt){at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,pe[F].width,pe[F].height,ot,We,pe[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ie,pe[F].width,pe[F].height,0,ot,We,pe[F].data);for(let ve=0;ve<Ct.length;ve++){const Ne=Ct[ve].image[F].image;at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,Ne.width,Ne.height,ot,We,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,Ie,Ne.width,Ne.height,0,ot,We,Ne.data)}}else{at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,ot,We,pe[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ie,ot,We,pe[F]);for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];at?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,ot,We,xe.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,Ie,ot,We,xe.image[F])}}}w(P,Xe)&&T(i.TEXTURE_CUBE_MAP),_e.__version=de.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function De(O,P,Y,me,de,_e){const Ae=s.convert(Y.format,Y.colorSpace),we=s.convert(Y.type),Ee=E(Y.internalFormat,Ae,we,Y.colorSpace);if(!n.get(P).__hasExternalTextures){const tt=Math.max(1,P.width>>_e),pe=Math.max(1,P.height>>_e);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,_e,Ee,tt,pe,P.depth,0,Ae,we,null):t.texImage2D(de,_e,Ee,tt,pe,0,Ae,we,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,de,n.get(Y).__webglTexture,0,Ge(P)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,de,n.get(Y).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(O,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let me=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Ue(P)){const de=P.depthTexture;de&&de.isDepthTexture&&(de.type===Ts?me=i.DEPTH_COMPONENT32F:de.type===ro&&(me=i.DEPTH_COMPONENT24));const _e=Ge(P);Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,me,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const me=Ge(P);Y&&Ue(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,P.width,P.height):Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{const me=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0;de<me.length;de++){const _e=me[de],Ae=s.convert(_e.format,_e.colorSpace),we=s.convert(_e.type),Ee=E(_e.internalFormat,Ae,we,_e.colorSpace),He=Ge(P);Y&&Ue(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Ee,P.width,P.height):Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,Ee,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),j(P.depthTexture,0);const me=n.get(P.depthTexture).__webglTexture,de=Ge(P);if(P.depthTexture.format===ta)Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(P.depthTexture.format===Cl)Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function gt(O){const P=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ce(P.__webglFramebuffer,O)}else if(Y){P.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[me]),P.__webglDepthbuffer[me]=i.createRenderbuffer(),Oe(P.__webglDepthbuffer[me],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Oe(P.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(O,P,Y){const me=n.get(O);P!==void 0&&De(me.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&gt(O)}function q(O){const P=O.texture,Y=n.get(O),me=n.get(P);O.addEventListener("dispose",z),O.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=P.version,a.memory.textures++);const de=O.isWebGLCubeRenderTarget===!0,_e=O.isWebGLMultipleRenderTargets===!0,Ae=_(O)||l;if(de){Y.__webglFramebuffer=[];for(let we=0;we<6;we++)if(l&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer[we]=[];for(let Ee=0;Ee<P.mipmaps.length;Ee++)Y.__webglFramebuffer[we][Ee]=i.createFramebuffer()}else Y.__webglFramebuffer[we]=i.createFramebuffer()}else{if(l&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer=[];for(let we=0;we<P.mipmaps.length;we++)Y.__webglFramebuffer[we]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(_e)if(r.drawBuffers){const we=O.texture;for(let Ee=0,He=we.length;Ee<He;Ee++){const tt=n.get(we[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&O.samples>0&&Ue(O)===!1){const we=_e?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<we.length;Ee++){const He=we[Ee];Y.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);const tt=s.convert(He.format,He.colorSpace),pe=s.convert(He.type),Tt=E(He.internalFormat,tt,pe,He.colorSpace,O.isXRRenderTarget===!0),Xe=Ge(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Tt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Je(i.TEXTURE_CUBE_MAP,P,Ae);for(let we=0;we<6;we++)if(l&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)De(Y.__webglFramebuffer[we][Ee],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ee);else De(Y.__webglFramebuffer[we],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);w(P,Ae)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const we=O.texture;for(let Ee=0,He=we.length;Ee<He;Ee++){const tt=we[Ee],pe=n.get(tt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Je(i.TEXTURE_2D,tt,Ae),De(Y.__webglFramebuffer,O,tt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),w(tt,Ae)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let we=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(l?we=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(we,me.__webglTexture),Je(we,P,Ae),l&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)De(Y.__webglFramebuffer[Ee],O,P,i.COLOR_ATTACHMENT0,we,Ee);else De(Y.__webglFramebuffer,O,P,i.COLOR_ATTACHMENT0,we,0);w(P,Ae)&&T(we),t.unbindTexture()}O.depthBuffer&&gt(O)}function st(O){const P=_(O)||l,Y=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let me=0,de=Y.length;me<de;me++){const _e=Y[me];if(w(_e,P)){const Ae=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,we=n.get(_e).__webglTexture;t.bindTexture(Ae,we),T(Ae),t.unbindTexture()}}}function be(O){if(l&&O.samples>0&&Ue(O)===!1){const P=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],Y=O.width,me=O.height;let de=i.COLOR_BUFFER_BIT;const _e=[],Ae=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=n.get(O),Ee=O.isWebGLMultipleRenderTargets===!0;if(Ee)for(let He=0;He<P.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let He=0;He<P.length;He++){_e.push(i.COLOR_ATTACHMENT0+He),O.depthBuffer&&_e.push(Ae);const tt=we.__ignoreDepthValues!==void 0?we.__ignoreDepthValues:!1;if(tt===!1&&(O.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,we.__webglColorRenderbuffer[He]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[Ae]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[Ae])),Ee){const pe=n.get(P[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,Y,me,0,0,Y,me,de,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let He=0;He<P.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,we.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,we.__webglColorRenderbuffer[He]);const tt=n.get(P[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,we.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}}function Ge(O){return Math.min(r.maxSamples,O.samples)}function Ue(O){const P=n.get(O);return l&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function K(O){const P=a.render.frame;h.get(O)!==P&&(h.set(O,P),O.update())}function et(O,P){const Y=O.colorSpace,me=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Bg||Y!==Ds&&Y!==gr&&(qt.getTransfer(Y)===sn?l===!1?e.has("EXT_sRGB")===!0&&me===Or?(O.format=Bg,O.minFilter=Cn,O.generateMipmaps=!1):P=I1.sRGBToLinear(P):(me!==Or||de!==uo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=H,this.resetTextureUnits=ae,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=ie,this.setTextureCube=oe,this.rebindTextures=$e,this.setupRenderTarget=q,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ue}function z8(i,e,t){const n=t.isWebGL2;function r(s,a=gr){let l;const u=qt.getTransfer(a);if(s===uo)return i.UNSIGNED_BYTE;if(s===b1)return i.UNSIGNED_SHORT_4_4_4_4;if(s===T1)return i.UNSIGNED_SHORT_5_5_5_1;if(s===xW)return i.BYTE;if(s===yW)return i.SHORT;if(s===tv)return i.UNSIGNED_SHORT;if(s===M1)return i.INT;if(s===ro)return i.UNSIGNED_INT;if(s===Ts)return i.FLOAT;if(s===jc)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===SW)return i.ALPHA;if(s===Or)return i.RGBA;if(s===EW)return i.LUMINANCE;if(s===MW)return i.LUMINANCE_ALPHA;if(s===ta)return i.DEPTH_COMPONENT;if(s===Cl)return i.DEPTH_STENCIL;if(s===Bg)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===bW)return i.RED;if(s===w1)return i.RED_INTEGER;if(s===TW)return i.RG;if(s===A1)return i.RG_INTEGER;if(s===C1)return i.RGBA_INTEGER;if(s===vm||s===xm||s===ym||s===Sm)if(u===sn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===vm)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xm)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ym)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sm)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===vm)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xm)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ym)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sm)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===eE||s===tE||s===nE||s===iE)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===eE)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===tE)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===nE)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===iE)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===R1)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===rE||s===sE)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===rE)return u===sn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===sE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===oE||s===aE||s===lE||s===cE||s===uE||s===fE||s===hE||s===dE||s===pE||s===mE||s===gE||s===_E||s===vE||s===xE)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===oE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===aE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===lE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===cE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===uE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===fE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===hE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===pE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===mE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===gE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===_E)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===vE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===xE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Em||s===yE||s===SE)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Em)return u===sn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yE)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===SE)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===wW||s===EE||s===ME||s===bE)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Em)return l.COMPRESSED_RED_RGTC1_EXT;if(s===EE)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ME)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bE)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ea?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class H8 extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jf extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const k8={type:"move"};class qm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){a=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n),v=this._getHandJoint(f,x);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,y=.005;f.inputState.pinching&&m>g+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=g-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(k8)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const G8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W8=`
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

}`;class V8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ai,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Is({extensions:{fragDepth:!0},vertexShader:G8,fragmentShader:W8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zr(new cu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class $8 extends Fl{constructor(e,t){super();const n=this;let r=null,s=1,a=null,l="local-floor",u=1,f=null,h=null,p=null,m=null,g=null,y=null;const x=new V8,_=t.getContextAttributes();let v=null,w=null;const T=[],E=[],C=new Bt;let R=null;const A=new mr;A.layers.enable(1),A.viewport=new kn;const z=new mr;z.layers.enable(2),z.viewport=new kn;const G=[A,z],M=new H8;M.layers.enable(1),M.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=T[ne];return ue===void 0&&(ue=new qm,T[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=T[ne];return ue===void 0&&(ue=new qm,T[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=T[ne];return ue===void 0&&(ue=new qm,T[ne]=ue),ue.getHandSpace()};function ae(ne){const ue=E.indexOf(ne.inputSource);if(ue===-1)return;const Te=T[ue];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,f||a),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function H(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",J);for(let ne=0;ne<T.length;ne++){const ue=E[ne];ue!==null&&(E[ne]=null,T[ne].disconnect(ue))}U=null,V=null,x.reset(),e.setRenderTarget(v),g=null,m=null,p=null,r=null,w=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||a},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",H),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),w=new fa(g.framebufferWidth,g.framebufferHeight,{format:Or,type:uo,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ue=null,Te=null,De=null;_.depth&&(De=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?Cl:ta,Te=_.stencil?ea:ro);const Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Oe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),w=new fa(m.textureWidth,m.textureHeight,{format:Or,type:uo,depthTexture:new X1(m.textureWidth,m.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(w);Ce.__ignoreDepthValues=m.ignoreDepthValues}w.isXRRenderTarget=!0,this.setFoveation(u),f=null,a=await r.requestReferenceSpace(l),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(ne){for(let ue=0;ue<ne.removed.length;ue++){const Te=ne.removed[ue],De=E.indexOf(Te);De>=0&&(E[De]=null,T[De].disconnect(Te))}for(let ue=0;ue<ne.added.length;ue++){const Te=ne.added[ue];let De=E.indexOf(Te);if(De===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=E.length){E.push(Te),De=Ce;break}else if(E[Ce]===null){E[Ce]=Te,De=Ce;break}if(De===-1)break}const Oe=T[De];Oe&&Oe.connect(Te)}}const j=new se,te=new se;function ie(ne,ue,Te){j.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const De=j.distanceTo(te),Oe=ue.projectionMatrix.elements,Ce=Te.projectionMatrix.elements,gt=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),q=(Oe[9]+1)/Oe[5],st=(Oe[9]-1)/Oe[5],be=(Oe[8]-1)/Oe[0],Ge=(Ce[8]+1)/Ce[0],Ue=gt*be,K=gt*Ge,et=De/(-be+Ge),O=et*-be;ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(O),ne.translateZ(et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const P=gt+et,Y=$e+et,me=Ue-O,de=K+(De-O),_e=q*$e/Y*P,Ae=st*$e/Y*P;ne.projectionMatrix.makePerspective(me,de,_e,Ae,P,Y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function oe(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;x.texture!==null&&(ne.near=x.depthNear,ne.far=x.depthFar),M.near=z.near=A.near=ne.near,M.far=z.far=A.far=ne.far,(U!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,V=M.far,A.near=U,A.far=V,z.near=U,z.far=V,A.updateProjectionMatrix(),z.updateProjectionMatrix(),ne.updateProjectionMatrix());const ue=ne.parent,Te=M.cameras;oe(M,ue);for(let De=0;De<Te.length;De++)oe(Te[De],ue);Te.length===2?ie(M,A,z):M.projectionMatrix.copy(A.projectionMatrix),N(ne,M,ue)};function N(ne,ue,Te){Te===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=zg*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null};let ce=null;function Se(ne,ue){if(h=ue.getViewerPose(f||a),y=ue,h!==null){const Te=h.views;g!==null&&(e.setRenderTargetFramebuffer(w,g.framebuffer),e.setRenderTarget(w));let De=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,De=!0);for(let Ce=0;Ce<Te.length;Ce++){const gt=Te[Ce];let $e=null;if(g!==null)$e=g.getViewport(gt);else{const st=p.getViewSubImage(m,gt);$e=st.viewport,Ce===0&&(e.setRenderTargetTextures(w,st.colorTexture,m.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(w))}let q=G[Ce];q===void 0&&(q=new mr,q.layers.enable(Ce),q.viewport=new kn,G[Ce]=q),q.matrix.fromArray(gt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(gt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set($e.x,$e.y,$e.width,$e.height),Ce===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),De===!0&&M.cameras.push(q)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=p.getDepthInformation(Te[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let Te=0;Te<T.length;Te++){const De=E[Te],Oe=T[Te];De!==null&&Oe!==void 0&&Oe.update(De,ue,f||a)}x.render(e,M),ce&&ce(ne,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),y=null}const Je=new $1;Je.setAnimationLoop(Se),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}}function X8(i,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,k1(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,w,T,E){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(_,v):v.isMeshToonMaterial?(s(_,v),p(_,v)):v.isMeshPhongMaterial?(s(_,v),h(_,v)):v.isMeshStandardMaterial?(s(_,v),m(_,v),v.isMeshPhysicalMaterial&&g(_,v,E)):v.isMeshMatcapMaterial?(s(_,v),y(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),x(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(a(_,v),v.isLineDashedMaterial&&l(_,v)):v.isPointsMaterial?u(_,v,w,T):v.isSpriteMaterial?f(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Ii&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Ii&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const w=e.get(v).envMap;if(w&&(_.envMap.value=w,_.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap){_.lightMap.value=v.lightMap;const T=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=v.lightMapIntensity*T,t(v.lightMap,_.lightMapTransform)}v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function a(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function l(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function u(_,v,w,T){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*w,_.scale.value=T*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function f(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function p(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),e.get(v).envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,w){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ii&&_.clearcoatNormalScale.value.negate())),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=w.texture,_.transmissionSamplerSize.value.set(w.width,w.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,v){v.matcap&&(_.matcap.value=v.matcap)}function x(_,v){const w=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(w.matrixWorld),_.nearDistance.value=w.shadow.camera.near,_.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function q8(i,e,t,n){let r={},s={},a=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(w,T){const E=T.program;n.uniformBlockBinding(w,E)}function f(w,T){let E=r[w.id];E===void 0&&(y(w),E=h(w),r[w.id]=E,w.addEventListener("dispose",_));const C=T.program;n.updateUBOMapping(w,C);const R=e.render.frame;s[w.id]!==R&&(m(w),s[w.id]=R)}function h(w){const T=p();w.__bindingPointIndex=T;const E=i.createBuffer(),C=w.__size,R=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function p(){for(let w=0;w<l;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(w){const T=r[w.id],E=w.uniforms,C=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,A=E.length;R<A;R++){const z=Array.isArray(E[R])?E[R]:[E[R]];for(let G=0,M=z.length;G<M;G++){const U=z[G];if(g(U,R,G,C)===!0){const V=U.__offset,ae=Array.isArray(U.value)?U.value:[U.value];let H=0;for(let J=0;J<ae.length;J++){const j=ae[J],te=x(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+H,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,H),H+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,T,E,C){const R=w.value,A=T+"_"+E;if(C[A]===void 0)return typeof R=="number"||typeof R=="boolean"?C[A]=R:C[A]=R.clone(),!0;{const z=C[A];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[A]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function y(w){const T=w.uniforms;let E=0;const C=16;for(let A=0,z=T.length;A<z;A++){const G=Array.isArray(T[A])?T[A]:[T[A]];for(let M=0,U=G.length;M<U;M++){const V=G[M],ae=Array.isArray(V.value)?V.value:[V.value];for(let H=0,J=ae.length;H<J;H++){const j=ae[H],te=x(j),ie=E%C;ie!==0&&C-ie<te.boundary&&(E+=C-ie),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=te.storage}}}const R=E%C;return R>0&&(E+=C-R),w.__size=E,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function _(w){const T=w.target;T.removeEventListener("dispose",_);const E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function v(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:u,update:f,dispose:v}}class J1{constructor(e={}){const{canvas:t=zW(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=a;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const v=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=co,this.toneMappingExposure=1;const T=this;let E=!1,C=0,R=0,A=null,z=-1,G=null;const M=new kn,U=new kn;let V=null;const ae=new Yt(0);let H=0,J=t.width,j=t.height,te=1,ie=null,oe=null;const N=new kn(0,0,J,j),ce=new kn(0,0,J,j);let Se=!1;const Je=new V1;let ne=!1,ue=!1,Te=null;const De=new Yn,Oe=new Bt,Ce=new se,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return A===null?te:1}let q=n;function st(I,$){for(let ee=0;ee<I.length;ee++){const Q=I[ee],Z=t.getContext(Q,$);if(Z!==null)return Z}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ev}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ve,!1),q===null){const $=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&$.shift(),q=st($,I),q===null)throw st($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let be,Ge,Ue,K,et,O,P,Y,me,de,_e,Ae,we,Ee,He,tt,pe,Tt,Xe,ot,We,Ie,at,_t;function Dt(){be=new e$(q),Ge=new q5(q,be,e),be.init(Ge),Ie=new z8(q,be,Ge),Ue=new F8(q,be,Ge),K=new i$(q),et=new M8,O=new B8(q,be,Ue,et,Ge,Ie,K),P=new j5(T),Y=new Q5(T),me=new u4(q,Ge),at=new $5(q,be,me,Ge),de=new t$(q,me,K,at),_e=new a$(q,de,me,K),Xe=new o$(q,Ge,O),tt=new Y5(et),Ae=new E8(T,P,Y,be,Ge,at,tt),we=new X8(T,et),Ee=new T8,He=new L8(be,Ge),Tt=new V5(T,P,Y,Ue,_e,m,u),pe=new N8(T,_e,Ge),_t=new q8(q,K,Ge,Ue),ot=new X5(q,be,K,Ge),We=new n$(q,be,K,Ge),K.programs=Ae.programs,T.capabilities=Ge,T.extensions=be,T.properties=et,T.renderLists=Ee,T.shadowMap=pe,T.state=Ue,T.info=K}Dt();const Pe=new $8(T,q);this.xr=Pe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const I=be.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=be.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(I){I!==void 0&&(te=I,this.setSize(J,j,!1))},this.getSize=function(I){return I.set(J,j)},this.setSize=function(I,$,ee=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,j=$,t.width=Math.floor(I*te),t.height=Math.floor($*te),ee===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(J*te,j*te).floor()},this.setDrawingBufferSize=function(I,$,ee){J=I,j=$,te=ee,t.width=Math.floor(I*ee),t.height=Math.floor($*ee),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,$,ee,Q){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,$,ee,Q),Ue.viewport(M.copy(N).multiplyScalar(te).floor())},this.getScissor=function(I){return I.copy(ce)},this.setScissor=function(I,$,ee,Q){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,$,ee,Q),Ue.scissor(U.copy(ce).multiplyScalar(te).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(I){Ue.setScissorTest(Se=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){oe=I},this.getClearColor=function(I){return I.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(I=!0,$=!0,ee=!0){let Q=0;if(I){let Z=!1;if(A!==null){const Me=A.texture.format;Z=Me===C1||Me===A1||Me===w1}if(Z){const Me=A.texture.type,Fe=Me===uo||Me===ro||Me===tv||Me===ea||Me===b1||Me===T1,it=Tt.getClearColor(),Be=Tt.getClearAlpha(),Ye=it.r,rt=it.g,ht=it.b;Fe?(g[0]=Ye,g[1]=rt,g[2]=ht,g[3]=Be,q.clearBufferuiv(q.COLOR,0,g)):(y[0]=Ye,y[1]=rt,y[2]=ht,y[3]=Be,q.clearBufferiv(q.COLOR,0,y))}else Q|=q.COLOR_BUFFER_BIT}$&&(Q|=q.DEPTH_BUFFER_BIT),ee&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ee.dispose(),He.dispose(),et.dispose(),P.dispose(),Y.dispose(),_e.dispose(),at.dispose(),_t.dispose(),Ae.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ve),Pe.removeEventListener("sessionend",je),Te&&(Te.dispose(),Te=null),ye.stop()};function Ct(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=K.autoReset,$=pe.enabled,ee=pe.autoUpdate,Q=pe.needsUpdate,Z=pe.type;Dt(),K.autoReset=I,pe.enabled=$,pe.autoUpdate=ee,pe.needsUpdate=Q,pe.type=Z}function ve(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function xe(I){const $=I.target;$.removeEventListener("dispose",xe),Ne($)}function Ne(I){Ze(I),et.remove(I)}function Ze(I){const $=et.get(I).programs;$!==void 0&&($.forEach(function(ee){Ae.releaseProgram(ee)}),I.isShaderMaterial&&Ae.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ee,Q,Z,Me){$===null&&($=gt);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,it=Xt(I,$,ee,Q,Z);Ue.setMaterial(Q,Fe);let Be=ee.index,Ye=1;if(Q.wireframe===!0){if(Be=de.getWireframeAttribute(ee),Be===void 0)return;Ye=2}const rt=ee.drawRange,ht=ee.attributes.position;let Kt=rt.start*Ye,pn=(rt.start+rt.count)*Ye;Me!==null&&(Kt=Math.max(Kt,Me.start*Ye),pn=Math.min(pn,(Me.start+Me.count)*Ye)),Be!==null?(Kt=Math.max(Kt,0),pn=Math.min(pn,Be.count)):ht!=null&&(Kt=Math.max(Kt,0),pn=Math.min(pn,ht.count));const Ft=pn-Kt;if(Ft<0||Ft===1/0)return;at.setup(Z,Q,it,ee,Be);let Wn,kt=ot;if(Be!==null&&(Wn=me.get(Be),kt=We,kt.setIndex(Wn)),Z.isMesh)Q.wireframe===!0?(Ue.setLineWidth(Q.wireframeLinewidth*$e()),kt.setMode(q.LINES)):kt.setMode(q.TRIANGLES);else if(Z.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),Ue.setLineWidth(dt*$e()),Z.isLineSegments?kt.setMode(q.LINES):Z.isLineLoop?kt.setMode(q.LINE_LOOP):kt.setMode(q.LINE_STRIP)}else Z.isPoints?kt.setMode(q.POINTS):Z.isSprite&&kt.setMode(q.TRIANGLES);if(Z.isBatchedMesh)kt.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)kt.renderInstances(Kt,Ft,Z.count);else if(ee.isInstancedBufferGeometry){const dt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,zl=Math.min(ee.instanceCount,dt);kt.renderInstances(Kt,Ft,zl)}else kt.render(Kt,Ft)};function vt(I,$,ee){I.transparent===!0&&I.side===bs&&I.forceSinglePass===!1?(I.side=Ii,I.needsUpdate=!0,$t(I,$,ee),I.side=go,I.needsUpdate=!0,$t(I,$,ee),I.side=bs):$t(I,$,ee)}this.compile=function(I,$,ee=null){ee===null&&(ee=I),_=He.get(ee),_.init(),w.push(_),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),I!==ee&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(T._useLegacyLights);const Q=new Set;return I.traverse(function(Z){const Me=Z.material;if(Me)if(Array.isArray(Me))for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];vt(it,ee,Z),Q.add(it)}else vt(Me,ee,Z),Q.add(Me)}),w.pop(),_=null,Q},this.compileAsync=function(I,$,ee=null){const Q=this.compile(I,$,ee);return new Promise(Z=>{function Me(){if(Q.forEach(function(Fe){et.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){Z(I);return}setTimeout(Me,10)}be.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let It=null;function qe(I){It&&It(I)}function Ve(){ye.stop()}function je(){ye.start()}const ye=new $1;ye.setAnimationLoop(qe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(I){It=I,Pe.setAnimationLoop(I),I===null?ye.stop():ye.start()},Pe.addEventListener("sessionstart",Ve),Pe.addEventListener("sessionend",je),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera($),$=Pe.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,$,A),_=He.get(I,w.length),_.init(),w.push(_),De.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Je.setFromProjectionMatrix(De),ue=this.localClippingEnabled,ne=tt.init(this.clippingPlanes,ue),x=Ee.get(I,v.length),x.init(),v.push(x),nt(I,$,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(ie,oe),this.info.render.frame++,ne===!0&&tt.beginShadows();const ee=_.state.shadowsArray;if(pe.render(ee,I,$),ne===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Tt.render(x,I),_.setupLights(T._useLegacyLights),$.isArrayCamera){const Q=$.cameras;for(let Z=0,Me=Q.length;Z<Me;Z++){const Fe=Q[Z];Qe(x,I,Fe,Fe.viewport)}}else Qe(x,I,$);A!==null&&(O.updateMultisampleRenderTarget(A),O.updateRenderTargetMipmap(A)),I.isScene===!0&&I.onAfterRender(T,I,$),at.resetDefaultState(),z=-1,G=null,w.pop(),w.length>0?_=w[w.length-1]:_=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function nt(I,$,ee,Q){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Je.intersectsSprite(I)){Q&&Ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(De);const Fe=_e.update(I),it=I.material;it.visible&&x.push(I,Fe,it,ee,Ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Je.intersectsObject(I))){const Fe=_e.update(I),it=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ce.copy(I.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(I.matrixWorld).applyMatrix4(De)),Array.isArray(it)){const Be=Fe.groups;for(let Ye=0,rt=Be.length;Ye<rt;Ye++){const ht=Be[Ye],Kt=it[ht.materialIndex];Kt&&Kt.visible&&x.push(I,Fe,Kt,ee,Ce.z,ht)}}else it.visible&&x.push(I,Fe,it,ee,Ce.z,null)}}const Me=I.children;for(let Fe=0,it=Me.length;Fe<it;Fe++)nt(Me[Fe],$,ee,Q)}function Qe(I,$,ee,Q){const Z=I.opaque,Me=I.transmissive,Fe=I.transparent;_.setupLightsView(ee),ne===!0&&tt.setGlobalState(T.clippingPlanes,ee),Me.length>0&&ft(Z,Me,$,ee),Q&&Ue.viewport(M.copy(Q)),Z.length>0&&tn(Z,$,ee),Me.length>0&&tn(Me,$,ee),Fe.length>0&&tn(Fe,$,ee),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ft(I,$,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Me=Ge.isWebGL2;Te===null&&(Te=new fa(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?jc:uo,minFilter:Vo,samples:Me?4:0})),T.getDrawingBufferSize(Oe),Me?Te.setSize(Oe.x,Oe.y):Te.setSize(Hg(Oe.x),Hg(Oe.y));const Fe=T.getRenderTarget();T.setRenderTarget(Te),T.getClearColor(ae),H=T.getClearAlpha(),H<1&&T.setClearColor(16777215,.5),T.clear();const it=T.toneMapping;T.toneMapping=co,tn(I,ee,Q),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te);let Be=!1;for(let Ye=0,rt=$.length;Ye<rt;Ye++){const ht=$[Ye],Kt=ht.object,pn=ht.geometry,Ft=ht.material,Wn=ht.group;if(Ft.side===bs&&Kt.layers.test(Q.layers)){const kt=Ft.side;Ft.side=Ii,Ft.needsUpdate=!0,St(Kt,ee,Q,pn,Ft,Wn),Ft.side=kt,Ft.needsUpdate=!0,Be=!0}}Be===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te)),T.setRenderTarget(Fe),T.setClearColor(ae,H),T.toneMapping=it}function tn(I,$,ee){const Q=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Me=I.length;Z<Me;Z++){const Fe=I[Z],it=Fe.object,Be=Fe.geometry,Ye=Q===null?Fe.material:Q,rt=Fe.group;it.layers.test(ee.layers)&&St(it,$,ee,Be,Ye,rt)}}function St(I,$,ee,Q,Z,Me){I.onBeforeRender(T,$,ee,Q,Z,Me),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(T,$,ee,Q,I,Me),Z.transparent===!0&&Z.side===bs&&Z.forceSinglePass===!1?(Z.side=Ii,Z.needsUpdate=!0,T.renderBufferDirect(ee,$,Q,Z,I,Me),Z.side=go,Z.needsUpdate=!0,T.renderBufferDirect(ee,$,Q,Z,I,Me),Z.side=bs):T.renderBufferDirect(ee,$,Q,Z,I,Me),I.onAfterRender(T,$,ee,Q,Z,Me)}function $t(I,$,ee){$.isScene!==!0&&($=gt);const Q=et.get(I),Z=_.state.lights,Me=_.state.shadowsArray,Fe=Z.state.version,it=Ae.getParameters(I,Z.state,Me,$,ee),Be=Ae.getProgramCacheKey(it);let Ye=Q.programs;Q.environment=I.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(I.isMeshStandardMaterial?Y:P).get(I.envMap||Q.environment),Ye===void 0&&(I.addEventListener("dispose",xe),Ye=new Map,Q.programs=Ye);let rt=Ye.get(Be);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Fe)return jt(I,it),rt}else it.uniforms=Ae.getUniforms(I),I.onBuild(ee,it,T),I.onBeforeCompile(it,T),rt=Ae.acquireProgram(it,Be),Ye.set(Be,rt),Q.uniforms=it.uniforms;const ht=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ht.clippingPlanes=tt.uniform),jt(I,it),Q.needsLights=Zn(I),Q.lightsStateVersion=Fe,Q.needsLights&&(ht.ambientLightColor.value=Z.state.ambient,ht.lightProbe.value=Z.state.probe,ht.directionalLights.value=Z.state.directional,ht.directionalLightShadows.value=Z.state.directionalShadow,ht.spotLights.value=Z.state.spot,ht.spotLightShadows.value=Z.state.spotShadow,ht.rectAreaLights.value=Z.state.rectArea,ht.ltc_1.value=Z.state.rectAreaLTC1,ht.ltc_2.value=Z.state.rectAreaLTC2,ht.pointLights.value=Z.state.point,ht.pointLightShadows.value=Z.state.pointShadow,ht.hemisphereLights.value=Z.state.hemi,ht.directionalShadowMap.value=Z.state.directionalShadowMap,ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ht.spotShadowMap.value=Z.state.spotShadowMap,ht.spotLightMatrix.value=Z.state.spotLightMatrix,ht.spotLightMap.value=Z.state.spotLightMap,ht.pointShadowMap.value=Z.state.pointShadowMap,ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function yn(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=hh.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function jt(I,$){const ee=et.get(I);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function Xt(I,$,ee,Q,Z){$.isScene!==!0&&($=gt),O.resetTextureUnits();const Me=$.fog,Fe=Q.isMeshStandardMaterial?$.environment:null,it=A===null?T.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ds,Be=(Q.isMeshStandardMaterial?Y:P).get(Q.envMap||Fe),Ye=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ht=!!ee.morphAttributes.position,Kt=!!ee.morphAttributes.normal,pn=!!ee.morphAttributes.color;let Ft=co;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ft=T.toneMapping);const Wn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,kt=Wn!==void 0?Wn.length:0,dt=et.get(Q),zl=_.state.lights;if(ne===!0&&(ue===!0||I!==G)){const Si=I===G&&Q.id===z;tt.setState(Q,I,Si)}let nn=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==zl.state.version||dt.outputColorSpace!==it||Z.isBatchedMesh&&dt.batching===!1||!Z.isBatchedMesh&&dt.batching===!0||Z.isInstancedMesh&&dt.instancing===!1||!Z.isInstancedMesh&&dt.instancing===!0||Z.isSkinnedMesh&&dt.skinning===!1||!Z.isSkinnedMesh&&dt.skinning===!0||Z.isInstancedMesh&&dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&dt.instancingColor===!1&&Z.instanceColor!==null||dt.envMap!==Be||Q.fog===!0&&dt.fog!==Me||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==tt.numPlanes||dt.numIntersection!==tt.numIntersection)||dt.vertexAlphas!==Ye||dt.vertexTangents!==rt||dt.morphTargets!==ht||dt.morphNormals!==Kt||dt.morphColors!==pn||dt.toneMapping!==Ft||Ge.isWebGL2===!0&&dt.morphTargetsCount!==kt)&&(nn=!0):(nn=!0,dt.__version=Q.version);let Fr=dt.currentProgram;nn===!0&&(Fr=$t(Q,$,Z));let Hl=!1,ss=!1,kl=!1;const Rn=Fr.getUniforms(),tr=dt.uniforms;if(Ue.useProgram(Fr.program)&&(Hl=!0,ss=!0,kl=!0),Q.id!==z&&(z=Q.id,ss=!0),Hl||G!==I){Rn.setValue(q,"projectionMatrix",I.projectionMatrix),Rn.setValue(q,"viewMatrix",I.matrixWorldInverse);const Si=Rn.map.cameraPosition;Si!==void 0&&Si.setValue(q,Ce.setFromMatrixPosition(I.matrixWorld)),Ge.logarithmicDepthBuffer&&Rn.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Rn.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,ss=!0,kl=!0)}if(Z.isSkinnedMesh){Rn.setOptional(q,Z,"bindMatrix"),Rn.setOptional(q,Z,"bindMatrixInverse");const Si=Z.skeleton;Si&&(Ge.floatVertexTextures?(Si.boneTexture===null&&Si.computeBoneTexture(),Rn.setValue(q,"boneTexture",Si.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Rn.setOptional(q,Z,"batchingTexture"),Rn.setValue(q,"batchingTexture",Z._matricesTexture,O));const ma=ee.morphAttributes;if((ma.position!==void 0||ma.normal!==void 0||ma.color!==void 0&&Ge.isWebGL2===!0)&&Xe.update(Z,ee,Fr),(ss||dt.receiveShadow!==Z.receiveShadow)&&(dt.receiveShadow=Z.receiveShadow,Rn.setValue(q,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(tr.envMap.value=Be,tr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ss&&(Rn.setValue(q,"toneMappingExposure",T.toneMappingExposure),dt.needsLights&&zt(tr,kl),Me&&Q.fog===!0&&we.refreshFogUniforms(tr,Me),we.refreshMaterialUniforms(tr,Q,te,j,Te),hh.upload(q,yn(dt),tr,O)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(hh.upload(q,yn(dt),tr,O),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Rn.setValue(q,"center",Z.center),Rn.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Rn.setValue(q,"normalMatrix",Z.normalMatrix),Rn.setValue(q,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Si=Q.uniformsGroups;for(let ga=0,uu=Si.length;ga<uu;ga++)if(Ge.isWebGL2){const _a=Si[ga];_t.update(_a,Fr),_t.bind(_a,Fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fr}function zt(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Zn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(I,$,ee){et.get(I.texture).__webglTexture=$,et.get(I.depthTexture).__webglTexture=ee;const Q=et.get(I);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ee===void 0,Q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,$){const ee=et.get(I);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ee=0){A=I,C=$,R=ee;let Q=!0,Z=null,Me=!1,Fe=!1;if(I){const Be=et.get(I);Be.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1):Be.__webglFramebuffer===void 0?O.setupRenderTarget(I):Be.__hasExternalTextures&&O.rebindTextures(I,et.get(I.texture).__webglTexture,et.get(I.depthTexture).__webglTexture);const Ye=I.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const rt=et.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?Z=rt[$][ee]:Z=rt[$],Me=!0):Ge.isWebGL2&&I.samples>0&&O.useMultisampledRTT(I)===!1?Z=et.get(I).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[ee]:Z=rt,M.copy(I.viewport),U.copy(I.scissor),V=I.scissorTest}else M.copy(N).multiplyScalar(te).floor(),U.copy(ce).multiplyScalar(te).floor(),V=Se;if(Ue.bindFramebuffer(q.FRAMEBUFFER,Z)&&Ge.drawBuffers&&Q&&Ue.drawBuffers(I,Z),Ue.viewport(M),Ue.scissor(U),Ue.setScissorTest(V),Me){const Be=et.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,ee)}else if(Fe){const Be=et.get(I.texture),Ye=$||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Ye)}z=-1},this.readRenderTargetPixels=function(I,$,ee,Q,Z,Me,Fe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=et.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(it=it[Fe]),it){Ue.bindFramebuffer(q.FRAMEBUFFER,it);try{const Be=I.texture,Ye=Be.format,rt=Be.type;if(Ye!==Or&&Ie.convert(Ye)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=rt===jc&&(be.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&be.has("EXT_color_buffer_float"));if(rt!==uo&&Ie.convert(rt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Ts&&(Ge.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-Q&&ee>=0&&ee<=I.height-Z&&q.readPixels($,ee,Q,Z,Ie.convert(Ye),Ie.convert(rt),Me)}finally{const Be=A!==null?et.get(A).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(I,$,ee=0){const Q=Math.pow(2,-ee),Z=Math.floor($.image.width*Q),Me=Math.floor($.image.height*Q);O.setTexture2D($,0),q.copyTexSubImage2D(q.TEXTURE_2D,ee,0,0,I.x,I.y,Z,Me),Ue.unbindTexture()},this.copyTextureToTexture=function(I,$,ee,Q=0){const Z=$.image.width,Me=$.image.height,Fe=Ie.convert(ee.format),it=Ie.convert(ee.type);O.setTexture2D(ee,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment),$.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Z,Me,Fe,it,$.image.data):$.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,$.mipmaps[0].width,$.mipmaps[0].height,Fe,$.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Fe,it,$.image),Q===0&&ee.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(I,$,ee,Q,Z=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=I.max.x-I.min.x+1,Fe=I.max.y-I.min.y+1,it=I.max.z-I.min.z+1,Be=Ie.convert(Q.format),Ye=Ie.convert(Q.type);let rt;if(Q.isData3DTexture)O.setTexture3D(Q,0),rt=q.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)O.setTexture2DArray(Q,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);const ht=q.getParameter(q.UNPACK_ROW_LENGTH),Kt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),pn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ft=q.getParameter(q.UNPACK_SKIP_ROWS),Wn=q.getParameter(q.UNPACK_SKIP_IMAGES),kt=ee.isCompressedTexture?ee.mipmaps[Z]:ee.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,kt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,kt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,I.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,I.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,I.min.z),ee.isDataTexture||ee.isData3DTexture?q.texSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ye,kt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,kt.data)):q.texSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ye,kt),q.pixelStorei(q.UNPACK_ROW_LENGTH,ht),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Kt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,pn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ft),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Wn),Z===0&&Q.generateMipmaps&&q.generateMipmap(rt),Ue.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Ue.unbindTexture()},this.resetState=function(){C=0,R=0,A=null,Ue.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nv?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===Qh?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xn?na:P1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===na?Xn:Ds}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Y8 extends J1{}Y8.prototype.isWebGL1Renderer=!0;class j8 extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class K8 extends ai{constructor(e,t,n,r,s,a,l,u,f){super(e,t,n,r,s,a,l,u,f),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Cn,this.magFilter=s!==void 0?s:Cn,this.generateMipmaps=!1;const h=this;function p(){h.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const mM={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Z8{constructor(e,t,n){const r=this;let s=!1,a=0,l=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,l),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,l),a===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,p){return f.push(h,p),this},this.removeHandler=function(h){const p=f.indexOf(h);return p!==-1&&f.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=f.length;p<m;p+=2){const g=f[p],y=f[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return y}return null}}}const J8=new Z8;class ov{constructor(e){this.manager=e!==void 0?e:J8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ov.DEFAULT_MATERIAL_NAME="__DEFAULT";class Q8 extends ov{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=mM.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const l=Kc("img");function u(){h(),mM.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class e6 extends ov{constructor(e){super(e)}load(e,t,n,r){const s=new ai,a=new Q8(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class t6{constructor(e,t,n=0,r=1/0){this.ray=new N1(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rv,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Gg(e,this,n,t),n.sort(gM),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Gg(e[r],this,n,t);return n.sort(gM),n}}function gM(i,e){return i.distance-e.distance}function Gg(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)Gg(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ev}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ev);const Wg=new Bt;function n6(){document.querySelector("#global-container").addEventListener("pointermove",i6)}function i6(i){Wg.x=r6(i.clientX),Wg.y=s6(i.clientY)}function r6(i){return i/window.innerWidth*2-1}function s6(i){return-(i/window.innerHeight)*2+1}function o6(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}function a6(i,e){return Math.round(i/e*100)}const ll=new Map,l6=new e6;window.textureCache=ll;const dh={init:c6,loadAllAssets:u6,loadImg:ew,getTexByElement:f6,addProgressAction:iw,letsBegin:p6},$o={};function c6(){$o.globalContainer=document.getElementById("global-container"),$o.loader=document.getElementById("loader"),$o.loaderPercent=document.getElementById("Loader-percent"),iw((i,e)=>{$o.loaderPercent.innerHTML=a6(i,e)+"%"})}async function u6(){const i=document.querySelectorAll("[data-webgl]");for(const t of i){const n=t.dataset;for(let r in n){if(!r.startsWith("tex"))continue;const s=n[r];ll.has(s)||ll.set(s,null)}}const e=[];ll.forEach((t,n)=>{let r=null;r=(/\.(mp4|webm|mov)$/.test(n)?h6:ew)(n).then(a=>{ll.set(n,a)}).catch(()=>{console.error("Failed to load Media: ",n)}),e.push(r)}),await Promise.all(e)}async function f6(i){const e=new Map,t=i.dataset;let n=null,r=!0;for(let s in t){if(!s.startsWith("tex"))continue;const a=t[s],l=ll.get(a);s=s.replace("-",""),e.set(s,l),r&&i instanceof HTMLImageElement&&(n=new Promise(u=>{i.onload=u}),i.src=a,r=!1),r&&i instanceof HTMLVideoElement&&(n=new Promise(u=>{i.oncanplay=u}),i.src=a,i.load(),r=!1)}return await n,e}let Q1=0,_M=0,Vg=null;async function ew(i){tw();const e=await l6.loadAsync(i);return nw(),e.magFilter=Cn,e.minFilter=Cn,e.needsUpdate=!1,e}async function h6(i){const e=document.createElement("video");let t=i.split(".").pop();return t==="mov"&&(t="quicktime"),e.canPlayType(`video/${t}`)?(tw(),new Promise(n=>{const r=document.createElement("video");r.oncanplay=()=>{const s=new K8(r);nw(),s.magFilter=Cn,s.minFilter=Cn,r.play(),r.oncanplay=null,n(s)},r.src=i,r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,r.defaultMuted=!0})):null}function tw(){Q1++}function nw(){_M++,Vg&&Vg(_M,Q1)}function iw(i){Vg=i}function d6(){const i=h_.timeline();return i.to($o.loader.firstElementChild,{opacity:0,y:10,duration:.3,delay:.5}).set($o.globalContainer,{visibility:"visible"}).set($o.loader,{display:"none"}),i}function p6(){d6()}const m6="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",g6="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;uniform vec4 uResolution;uniform sampler2D tex1;uniform sampler2D tex2;vec2 coverUv(vec2 uv,vec4 resolution){return(uv-0.5)*resolution.zw+0.5;}void main(){vec2 uv=coverUv(vUv,uResolution);vec4 t1=texture2D(tex1,uv);vec4 t2=texture2D(tex2,uv);vec4 mixColor=mix(t1,t2,step(.5,uv.y));gl_FragColor=mixColor;}",Wt={os:[],raycaster:new t6,worldInit:rw,adjustWorldPosition:sw,render:aw};function rw(i,e){return Wt.renderer=new J1({canvas:i,antialias:!0}),Wt.renderer.setSize(e.width,e.height,!1),Wt.renderer.setPixelRatio(e.devicePixelRatio),Wt.renderer.setClearColor(0,0),Wt.scene=new j8,Wt.camera=v6(e),_6(e),Wt}async function _6(i){const t=[...document.querySelectorAll("[data-webgl]")].map(async n=>{const r=n.getBoundingClientRect(),s=await dh.getTexByElement(n),a=new cu(r.width,r.height,1,1),l=new Is({vertexShader:m6,fragmentShader:g6,uniforms:{uMouse:{value:new Bt(.5,.5)},uHover:{value:0}}});function u(m){if(!s.get("tex1"))return m;const g=s.get("tex1").source.data,y={};g instanceof HTMLImageElement?(y.width=g.naturalWidth,y.height=g.naturalHeight):g instanceof HTMLVideoElement&&(y.width=g.videoWidth,y.height=g.videoHeight);const x=f(r,y);return m.uResolution={value:x},m}function f(m,g){const{width:y,height:x}=m,_=new kn(y,x,1,1);if(!g)return _;const{width:v,height:w}=g,T=w/v,E=x/y;let C,R;return E>T?(C=1/E*T,R=1):(C=1,R=E/T),_.z=C,_.w=R,_}l.uniforms=u(l.uniforms),s.forEach((m,g)=>{l.uniforms[g]={value:m}});const h=new Zr(a,l);h.position.z=0;const p={geometry:a,material:l,mesh:h,rect:r,$:{el:n}};return Wt.scene.add(h),Wt.os.push(p),p});await Promise.all(t),sw(i)}function sw(i){Wt.renderer.setSize(i.width,i.height,!1),Wt.os.forEach(e=>y6(e,i)),S6(i)}function v6(i){const{fov:e,aspect:t,near:n,far:r,cameraZ:s}=i,a=new mr(e,t,n,r);return a.position.z=s,a}function x6(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=ow(n,gn.rect);e.position.y=r}function y6(i,e){const{$:{el:t},mesh:n,geometry:r,rect:s}=i,a=t.getBoundingClientRect(),{x:l,y:u}=ow(a,e);n.position.x=l,n.position.y=u,r.scale(a.width/s.width,a.height/s.height,1),i.rect=a}function S6(i){const{aspect:e,radian:t,fov:n}=i;Wt.camera.aspect=e,Wt.camera.radian=t,Wt.camera.fov=n,Wt.camera.updateProjectionMatrix(),Wt.renderer.render(Wt.scene,Wt.camera)}function ow(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function E6(){Wt.raycaster.setFromCamera(Wg,Wt.camera);const e=Wt.raycaster.intersectObjects(Wt.scene.children)[0];for(let t=0;t<Wt.scene.children.length;t++){const n=Wt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=o6(r.value,r.__endValue,.1)}}function aw(){requestAnimationFrame(aw),Wt.os.forEach(i=>x6(i)),E6(),Wt.renderer.render(Wt.scene,Wt.camera)}const gn={init:M6},lw={};let vM=!1;function M6(i){lw.canvas=i;const e=i.getBoundingClientRect();return gn.rect=e,gn.width=e.width,gn.height=e.height,gn.near=1500,gn.far=4e3,gn.aspect=gn.width/gn.height,gn.cameraZ=2500,gn.radian=2*Math.atan(gn.height/2/gn.cameraZ),gn.fov=180*gn.radian/Math.PI,gn.devicePixelRatio=window.devicePixelRatio,vM||(vM=!0,b6()),gn}function b6(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{T6()},100)})}function T6(){w6(),Wt.adjustWorldPosition(gn)}function w6(){const{near:i,far:e,cameraZ:t}=gn;gn.init(lw.canvas,i,e,t)}const cw=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 17 20">
<path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
</svg>`,uw=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 19 23">
<path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="currentColor"></path>
</svg>`,fw=`<svg  xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 16 14">
      <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
    </svg>`,A6=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 18 17">
      <g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <path d="M16 16l-5.0752-5.0752"></path>
        <circle cx="6.4" cy="6.4" r="6.4"></circle>
      </g>
    </svg>`,fo=vn.page.breakpoint,C6=vn.time.debounce,R6=vn.humbergerBtnSelector,P6=vn.logoSelector,hw=vn.buttonParent,$g=vn.svgCart,L6=vn.logo.white,dw=vn.logo.black,D6=vn.logo.phone,I6=vn.logo.tablet,O6=vn.target.pageContainer,pw=vn.target.header,U6=vn.target.announcement,N6=vn.rootProperty.headerHeight,F6=vn.rootProperty.announcementHeight,mw=vn.tabletAndUp,gw=vn.phone;Qo(fo);function B6(){document.addEventListener("DOMContentLoaded",async function(){bX(),lv(),await RX(),fX(),oX(),Q6()})}function z6(){const i=document.querySelector('[data-section-id="cart"]');i.setAttribute("aria-hidden",!0),i.classList.add("Drawer","Drawer--fromRight"),H6(i),K6(i),V6(i)}function H6(i){const e=ts("div",{},["Drawer__Header","Drawer__Header--bordered","Drawer__Container"]);i.appendChild(e);const t=ts("span",{},["Drawer__Title","Heading","u-h4"]);t.textContent="カート",e.appendChild(t),ts("div",{},["Drawer__Header","Drawer__Header--bordered","Drawer__Container"]),k6(e)}function k6(i){const e=ts("button",vn.sidebarBtnConfig.attributes,vn.sidebarBtnConfig.classes);return i.appendChild(e),G6(fw,e),e}async function G6(i,e){W6(i,e,["Icon","Icon--close"])}async function W6(i,e,t){const n=e;av(n);async function r(a){const f=new DOMParser().parseFromString(a,"image/svg+xml").querySelector("svg");if(!f)throw new Error(`No SVG element found in the provided data: ${a}`);return f.querySelectorAll("path").forEach(p=>{p.setAttribute("fill","none"),p.setAttribute("stroke-width","1.5"),p.setAttribute("stroke","currentColor")}),f}const s=await r(i);vw(n,s),s.classList.add(...t)}function V6(i){const e=ts("form",{},["Cart","Drawer__Content"]);e.setAttribute("action","/cart"),e.setAttribute("method","post"),e.setAttribute("novalidate",""),i.appendChild(e),$6(e)}function $6(i){const e=ts("div",{},["Drawer__Main"]);i.appendChild(e),X6(e),Y6(e,"カートに商品がありません")}function X6(i){const e=Q_(i,"div",["Cart__ShippingNotice","Text--subdued"]);q6(e)}function q6(i){const e=Q_(i,"div",["Drawer__Container"]);j6(e,"あと")}function Y6(i,e){const t=Q_(i,"p",["Cart__Empty","Heading","u-h5"]);t.textContent=e}function j6(i,e){const t=ts("p",{},[]);t.appendChild(document.createTextNode(e));const n=ts("span",{},[]),r=ts("span",{},["yen"]);r.textContent="¥",n.appendChild(r),n.appendChild(document.createTextNode("10,000")),t.appendChild(n),t.appendChild(document.createTextNode("以上で送料無料")),i.appendChild(t)}function K6(i){const e=document.querySelector("html"),t=document.querySelector(".PageOverlay");document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]'),Z6(e,t,i),J6(e,t,i)}function Z6(i,e,t,n){document.querySelector("a[data-drawer-id]").addEventListener("click",function(r){r.preventDefault(),e==null||e.classList.toggle("is-visible"),i.classList.toggle("no-scroll"),t.setAttribute("aria-hidden","false"),xw()})}function J6(i,e,t,n){document.querySelector('[data-action="close-drawer"][data-drawer-id="sidebar-cart"]').addEventListener("click",function(){t.setAttribute("aria-hidden","true"),e.classList.remove("is-visible"),i.classList.remove("no-scroll"),yw()})}function Q6(){document.querySelectorAll(".Drawer__Main").forEach(e=>{e.setAttribute("data-scrollable",""),e.style.overflow="auto"})}function eX(){document.querySelectorAll(".Collapsible").forEach(e=>{if(e){const t=e.querySelector(".Collapsible__Button");t?(t.classList.add("Heading","u-h6"),nX(e),rX(t)):tX(e)}else console.log("Collapsible not found")})}function tX(i){const e=document.createElement("a");e.classList.add("Collapsible__Button","Heading","Link","Link--primary","u-h6");const t=i.textContent;e.textContent=t,e.setAttribute("href","#"),i.textContent="",i.appendChild(e)}function nX(i){const e=document.createElement("div");e.classList.add("Collapsible__Inner"),i.appendChild(e);const t=iX();e.appendChild(t),e.style.overflow="hidden",e.style.height="0"}function iX(){return document.querySelector(".Collapsible__Content")}function rX(i){const e=document.createElement("span");e.classList.add("Collapsible__Plus"),i.appendChild(e);const t=document.querySelector(".Collapsible__Button");sX(t)}function sX(i){const e=document.querySelector(".Collapsible__Inner");window.addEventListener("DOMContentLoaded",t=>{e.style.height==="0px"?xM(e):yM(e)}),i.addEventListener("click",function(){const t=document.querySelector(".Collapsible__Button"),n=document.querySelector(".Collapsible__Inner"),r=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!r),n.style.overflow=n.style.overflow==="visible"?"hidden":"visible",n.style.height=n.style.height==="0px"?"auto":"0px",n.getAttribute("tabindex")==="-1"?yM(n):xM(n),r||(console.log("btn",t),t.focus())})}function xM(i){i.setAttribute("tabindex","-1"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.setAttribute("tabindex","-1")})}function yM(i){i.removeAttribute("tabindex"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.removeAttribute("tabindex")})}function oX(){lX(fw),aX(A6),eX(),z6()}function aX(i){_w(i,"Drawer__Search",["Icon","Icon--search"])}function lX(i){_w(i,"Drawer__Close",["Icon","Icon--close"]);const e=document.getElementById("sidebar-menu");e.setAttribute("aria-hidden",!0),cX(e),uX(e,"Drawer__Close")}async function _w(i,e,t){const n=document.querySelector(`.${e}`);av(n);async function r(a){const f=new DOMParser().parseFromString(a,"image/svg+xml").querySelector("svg");if(!f)throw new Error(`No SVG element found in the provided data: ${a}`);return f.querySelectorAll("path").forEach(p=>{p.setAttribute("fill","none"),p.setAttribute("stroke-width","1.5"),p.setAttribute("stroke","currentColor")}),f}const s=await r(i);vw(n,s),s.classList.add(...t)}function vw(i,e){i.appendChild(e),e.setAttribute("viewBox","0 0 20 20"),e.setAttribute("width","16"),e.setAttribute("height","14")}function xw(){const{disablePlugin:i,enablePlugin:e}=cv();i()}function yw(){const{disablePlugin:i,enablePlugin:e}=cv();e()}let Xg=!0;function cX(i){const e=document.querySelector("html"),t=document.getElementById("sidebar-menu"),n=document.querySelector(".PageOverlay"),r=document.querySelector(".Header__Icon"),s=document.getElementById("page-container");r.addEventListener("click",function(){i.setAttribute("aria-hidden",!1),t.setAttribute("tabindex","-1"),t.addEventListener("transitionend",function(a){if(a.propertyName!=="transform")return;const l=t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');l&&Xg&&(l.focus(),xw(),Xg=!1,s.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))}),n.classList.add("is-visible"),e.classList.add("no-scroll")})}function uX(i,e){const t=document.querySelector("html"),n=document.getElementById("sidebar-menu"),r=document.querySelector(".PageOverlay"),s=document.getElementById("page-container");document.querySelector(`.${e}`).addEventListener("click",function(){i.setAttribute("aria-hidden",!0),n.removeAttribute("tabindex"),r.classList.remove("is-visible"),t.classList.remove("no-scroll"),n.addEventListener("transitionend",function(l){if(l.propertyName!=="transform")return;s.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.removeAttribute("tabindex"),yw()}),Xg=!0})})}function fX(){hX(),dX(),pX()}function hX(){const i={contain:!0,prevNextButtons:!1,setGallerySize:!1,adaptiveHeight:!1,wrapAround:!0,dragThreshold:15,pauseAutoPlayOnHover:!1,autoPlay:!1,pageDots:!0,fade:!0,on:{change:function(n){console.log("Slide changed to",n),document.querySelectorAll(".Carousel__Cell").forEach((l,u)=>{if(l.classList.contains("is-selected")){let y=function(x){g===null&&(g=x);let _=x-g,v=Math.min(_/m,1),w=gX(h,p,v);l.style.opacity=w,v<1&&requestAnimationFrame(y)};var f=y;l.style.visibility="inherit";let h=0,p=1,m=1e3,g=null;requestAnimationFrame(y)}else l.style.visibility="hidden",l.style.opacity="1"}),document.querySelectorAll(".SectionHeader").forEach((l,u)=>{setTimeout(()=>{console.log("index",n),u===n?(l.style.visibility="visible",l.style.opacity="1",l.style.transform="matrix(1, 0, 0, 1, 0, 0)",l.style.transition="all 0.7s ease-in-out"):(l.style.visibility="hidden",l.style.opacity="0",l.style.transform="matrix(1, 0, 0, 1, 0, 20)",l.style.transition="all 0.7s ease-in-out")},500)}),document.querySelectorAll(".SectionHeader__ButtonWrapper").forEach((l,u)=>{setTimeout(()=>{u===n?(l.style.visibility="visible",l.style.opacity="1",l.style.transform="matrix(1, 0, 0, 1, 0, 0)",l.style.transition="all 0.7s ease-in-out"):(l.style.visibility="hidden",l.style.opacity="0",l.style.transform="matrix(1, 0, 0, 1, 0, 20)",l.style.transition="all 0.7s ease-in-out")},700)})}}},e=document.querySelector(".Slideshow-Carousel"),t=JSON.stringify(i,null,2);e.setAttribute("data-flickity-config",t),new BG(e,i),e.classList.add("Carousel--fixed")}let SM=!1;function dX(i){const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".flickity-page-dots");if(r.length>0&&r[0].children.length>0)return;!SM&&r.length>0&&(e.disconnect(),SM=!0,console.log("disconnected"))}})});e.observe(document,{childList:!0,subtree:!0})}let EM=!1;function pX(i){if(EM)return;EM=!0;const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".Carousel__Cell");let s=["./img/yamadera.jpeg","./img/sakuramich.jpeg","./img/yamadera.jpeg","./img/yamadera.jpeg","./img/sakuramich.jpeg"],a=["Text 1","Text 2","Text 3","Text 4","Text 5"],l=["Text A","Text B","Text C","Text D","Text E"];r.forEach((u,f)=>{if(u.children.length>0)return;let h=s[f%s.length],p=a[f%a.length],m=l[f%l.length];_X(u,h),vX(u,h),xX(u,p,m)}),r.length>=s.length&&(e.disconnect(),console.log("disconnected"),MX(),mX())}})});e.observe(document,{childList:!0,subtree:!0})}function mX(){const i=document.querySelectorAll(".SectionHeader");i[0].style.visibility="visible",i[0].style.opacity="1",i[0].style.transform="matrix(1, 0, 0, 1, 0, 0)",i[0].style.transition="all 0.7s ease-in-out";for(let e=1;e<=4;e++)i[e].style.visibility="hidden",i[e].style.opacity="0",i[e].style.transform="matrix(1, 0, 0, 1, 0, 20)",i[0].style.transition="all 0.7s ease-in-out"}function gX(i,e,t){return i*(1-t)+e*t}function Sw(i,e){const t=document.createElement("img");t.alt="yamadera",t.classList.add("Slideshow__Image","Image--lazyLoaded"),t.onload=function(){i.appendChild(t)},t.src=e}function _X(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-tablet-and-up"),i.appendChild(t),Sw(t,e)}function vX(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-phone"),i.appendChild(t),Sw(t,e)}function xX(i,e,t){const n=document.createElement("div");n.classList.add("Slideshow__Content","Slideshow__Content--bottomLeft"),i.appendChild(n),yX(n,e,t)}function yX(i,e,t){const n=document.createElement("header");n.classList.add("SectionHeader"),i.appendChild(n);const r=document.createElement("h3"),s=document.createElement("h2");r.classList.add("SectionHeader__SubHeader","Heading","u-h6"),s.classList.add("SectionHeader__Heading","Section__Heading--emphasize","Heading","u-h1"),r.textContent=e,s.textContent=t,n.appendChild(r),n.appendChild(s),SX(n)}function SX(i){const e=document.createElement("div");e.classList.add("SectionHeader__ButtonWrapper"),i.appendChild(e),EX(e)}function EX(i){const e=document.createElement("div");e.classList.add("ButtonGroup","ButtonGroup--spacingSmall"),i.appendChild(e);const t=document.createElement("a");t.href="./subhtml/demo-wrapAround.html",t.classList.add("ButtonGroup__Item","Button"),t.textContent="READ MORE",e.appendChild(t)}function MX(){document.querySelectorAll(".Carousel__Cell")}function bX(){const i=document.title,e=document.querySelector(".AnnouncementBar__Content");return e&&(e.innerHTML=i),i}function TX(i){wX(i),[{src:dw,alt:"logo"},{src:L6,alt:"logo"}].forEach(t=>CX(t.src,t.alt))}function wX(i){const e=document.querySelector(".Header__FlexItem--logo"),t=document.createElement("h1");t.classList.add("Header__Logo"),e.appendChild(t),AX(t,i)}function AX(i,e){const t=document.querySelector(".Header__LogoLink"),n=t.parentElement;i.appendChild(t),n.appendChild(i);const r=document.createElement("img");r.className="Header__LogoImage Header__LogoImage--primary",r.alt="",r.style.height=e;const s=document.createElement("img");s.className="Header__LogoImage Header__LogoImage--transparent",s.alt="",s.style.height=e,t.appendChild(r),t.appendChild(s)}function CX(i,e){const t=document.querySelector(`.Header__LogoImage--${i===dw?"primary":"transparent"}`);t.src=i,t.alt=e}async function RX(){const i=Qo(fo)?mw:gw;ww(i);const e=Qo(fo)?uw:cw;let t;try{t=await Ew(e)}catch(r){console.error("'An error occurred while creating the SVG:",r)}t&&Mw(t);const n=Qo(fo)?I6:D6;TX(n)}async function PX(i){const n=new DOMParser().parseFromString(i,"image/svg+xml").querySelector("svg");if(!n)throw new Error(`No SVG element found in the provided data: ${i}`);return n.getAttribute("height")||n.setAttribute("height","20"),n.getAttribute("width")||n.setAttribute("width","20"),n.querySelectorAll("path").forEach(s=>{s.setAttribute("fill","currentColor"),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width","0.05")}),n}async function Ew(i){try{const e=LX();av(e);const t=await IX(i,e);return OX(t),t}catch(e){console.error("Error in createSvg:",e)}}function LX(){const i=document.querySelector(`.${$g}`);if(!i)throw new Error(`No element found with class: ${$g}`);const e=document.querySelectorAll(".Header__FlexItem.Header__FlexItem--fill");return DX(e[1],i),i}function DX(i,e){const t=document.createElement("a");t.href="/cart",t.classList.add("Header__Icon","Icon-Wrapper","Icon-Wrapper--clickable"),t.setAttribute("data-drawer-id","sidebar-cart"),t.setAttribute("data-action","open-drawer"),t.setAttribute("aria-label","カートを開く"),t.appendChild(e),i.appendChild(t)}function av(i){Tw(i)}async function IX(i,e){return await UX(i,e)}function OX(i){window.innerWidth>=fo?i.classList.add("hidden-phone"):i.classList.add("hidden-tablet-and-up")}function Mw(i){const t=document.querySelector(`.${hw}`).offsetHeight;Aw(i,t),HX()}async function UX(i,e){const t=await PX(i);if(!t)throw new Error(`No SVG element created for path: ${i}`);return e.appendChild(t),t}let MM;window.addEventListener("resize",function(){console.log("Window resized"),bw(),lv()});window.addEventListener("orientationchange",function(){console.log("Orientation changed"),bw(),lv()});async function bw(){console.log("Resize event"),clearTimeout(MM),MM=setTimeout(async()=>{const i=Qo(fo)?mw:gw;ww(i);const e=Qo(fo)?uw:cw,t=await Ew(e);t&&Mw(t);const n=Qo(fo)?"28px":"18px";document.querySelectorAll(".Header__LogoImage").forEach(s=>{s.style.height=n}),NX()},C6)}function NX(){const i=document.querySelector(".pin-spacer"),e=document.getElementById(pw);if(i){const t=document.documentElement.clientWidth;console.log("width",t),i.style.width=t+"px",i.style.maxWidth=t+"px",e.style.width=t+"px",e.style.maxWidth=t+"px"}}window.screen&&window.screen.orientation&&window.screen.orientation.addEventListener("change",function(){console.log("Screen orientation changed:",window.screen.orientation.type)});function Tw(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function FX(i,e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",`0 0 ${e} ${t}`),n.setAttribute("width",e),n.setAttribute("height",t),n}function BX(i,e,t,n){const r=(e-n*3)/2;for(let s=0;s<3;s++){const a=document.createElementNS("http://www.w3.org/2000/svg","rect");a.setAttribute("width",t),a.setAttribute("height",n),a.setAttribute("y",s*(parseInt(n)+r)),a.setAttribute("fill","currentColor"),i.appendChild(a)}}function bM({viewBox:i,width:e,height:t,rectWidth:n,rectHeight:r}){const s=FX(i,e,t);return BX(s,t,n,r),s}function ww(i){const e=document.querySelector(R6);Tw(e);const t=bM(i),n=bM(i);e.appendChild(t),e.appendChild(n),n.style.display="none"}function zX(i,e,t){if(!i)return;const n=i.parentNode;n.style.height=`${t}px`,n.style.width=`${e}px`}function TM(i,e,t){i.style.width=`${e}px`,i.style.height=`${t}px`}function Aw(i,e){if(!i){console.log("No element provided to adjustElementToHeight");return}if(i instanceof SVGSVGElement){const t=i.getBBox(),r=t.width/t.height*e;TM(i,r,e)}else{const n=i.offsetWidth/i.offsetHeight*e;TM(i,n,e)}}function HX(){const e=document.querySelector(`.${hw}`).offsetHeight;document.querySelectorAll(`.${P6}`);const t=document.querySelector(`.${$g}`);Aw(t,e),zX(t,t.offsetWidth,e)}function lv(){const i=window.innerHeight,e=document.getElementById(O6);e&&(e.style.height=`${i}px`),Cw("--window-height",i)}window.addEventListener("load",function(){wM(`#${pw}`,N6),wM(`#${U6}`,F6)});function wM(i,e){const t=document.querySelector(i);if(t){const n=t.offsetHeight;Cw(e,n)}}function Cw(i,e){document.documentElement.style.setProperty(i,`${e}px`)}window.addEventListener("load",kX);let qg=0;function kX(){const i=document.body.getElementsByTagName("*"),e=Array.from(i).filter(t=>t.id.includes("section"));qg=0,e.forEach(t=>{qg+=t.offsetHeight})}const GX={get totalHeight(){return qg}},WX=vn.target.pageContainer;class Yg extends g1{transformDelta(e,t){return e=this.options.disabled?{x:0,y:0}:e,e}}fp(Yg,"pluginName","disablePlugin"),fp(Yg,"defaultOptions",{disabled:!1});let Zs;function cv(){window.addEventListener("load",function(){});const i=document.getElementById(WX);h_.registerPlugin(yt),RS.use(Yg),Zs=RS.init(i,{delegateTo:document}),yt.scrollerProxy(i,{scrollTop(n){return arguments.length?Zs.scrollTop=n:Zs.scrollTop}}),Zs.addListener(yt.update);function e(){Zs.updatePluginOptions("disablePlugin",{disabled:!0}),console.log("plugin is disabled")}function t(){Zs.updatePluginOptions("disablePlugin",{disabled:!1})}return yt.defaults({scroller:i}),Zs.addListener(n=>{n.offset.y+window.innerHeight>=Zs.getSize().content.height&&console.log("you're at the bottom of the page")}),window.addEventListener("load",function(){const n=GX.totalHeight,r=document.querySelector(`#${vn.target.header}`);r.style.position="relative",r.style.zIndex="1000",yt.create({trigger:r,start:"top top",end:`${n}px top`,pin:!0,pinSpacing:!1,onEnter:()=>{},onLeaveBack:()=>{}});function s(){const a=document.getElementById(vn.target.header);a.classList.add("Header--transparent"),yt.create({trigger:a,start:"top top",end:99999,onEnter:()=>{a.classList.remove("Header--transparent")},onLeaveBack:()=>{a.classList.add("Header--transparent")}})}s()}),{disablePlugin:e,enablePlugin:t}}async function VX(){B6();const i=document.querySelector("#canvas");gn.init(i),cv(),dh.init(),await dh.loadAllAssets(),rw(i,gn),n6(),Wt.render(),dh.letsBegin()}function $X(){document.querySelector("[data-webgl]")}VX();console.log("Production output");$X();
