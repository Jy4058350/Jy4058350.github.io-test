var bI=Object.defineProperty;var TI=(i,e,t)=>e in i?bI(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var pp=(i,e,t)=>(TI(i,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Ss(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function CM(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},vl={duration:.5,overwrite:!1,delay:0},Kg,si,cn,_r=1e8,en=1/_r,Zm=Math.PI*2,AI=Zm/4,wI=0,RM=Math.sqrt,CI=Math.cos,RI=Math.sin,Gn=function(e){return typeof e=="string"},vn=function(e){return typeof e=="function"},Rs=function(e){return typeof e=="number"},Zg=function(e){return typeof e>"u"},is=function(e){return typeof e=="object"},Ri=function(e){return e!==!1},Jg=function(){return typeof window<"u"},Zu=function(e){return vn(e)||Gn(e)},PM=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ai=Array.isArray,Jm=/(?:-?\.?\d|\.)+/gi,LM=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,tl=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,mp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,DM=/[+-]=-?[.\d]+/,IM=/[^,'"\[\]\s]+/gi,PI=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,hn,Vr,Qm,Qg,Ji={},mh={},OM,UM=function(e){return(mh=no(e,Ji))&&Oi},e_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},kc=function(e,t){return!t&&console.warn(e)},NM=function(e,t){return e&&(Ji[e]=t)&&mh&&(mh[e]=t)||Ji},Hc=function(){return 0},LI={suppressEvents:!0,isStart:!0,kill:!1},Zf={suppressEvents:!0,kill:!1},DI={suppressEvents:!0},t_={},sa=[],eg={},FM,Xi={},gp={},Rx=30,Jf=[],n_="",i_=function(e){var t=e[0],n,r;if(is(t)||vn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Jf.length;r--&&!Jf[r].targetTest(t););n=Jf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new ob(e[r],n)))||e.splice(r,1);return e},$a=function(e){return e._gsap||i_(vr(e))[0]._gsap},BM=function(e,t,n){return(n=e[t])&&vn(n)?e[t]():Zg(n)&&e.getAttribute&&e.getAttribute(t)||n},Pi=function(e,t){return(e=e.split(",")).forEach(t)||e},Mn=function(e){return Math.round(e*1e5)/1e5||0},kn=function(e){return Math.round(e*1e7)/1e7||0},ll=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},II=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gh=function(){var e=sa.length,t=sa.slice(0),n,r;for(eg={},sa.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},zM=function(e,t,n,r){sa.length&&!si&&gh(),e.render(t,n,r||si&&t<0&&(e._initted||e._startAt)),sa.length&&!si&&gh()},kM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(IM).length<2?t:Gn(e)?e.trim():e},HM=function(e){return e},yr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},OI=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},no=function(e,t){for(var n in t)e[n]=t[n];return e},Px=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=is(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},_h=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Cc=function(e){var t=e.parent||hn,n=e.keyframes?OI(ai(e.keyframes)):yr;if(Ri(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},UI=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},GM=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],l;if(s)for(l=t[s];o&&o[s]>l;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},kh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},fa=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Xa=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},NI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},tg=function(e,t,n,r){return e._startAt&&(si?e._startAt.revert(Zf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},FI=function i(e){return!e||e._ts&&i(e.parent)},Lx=function(e){return e._repeat?xl(e._tTime,e=e.duration()+e._rDelay)*e:0},xl=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},vh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hh=function(e){return e._end=kn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},Gh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=kn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hh(e),n._dirty||Xa(n,e)),e},WM=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=vh(e.rawTime(),t),(!t._dur||Jc(0,t.totalDuration(),n)-t._tTime>en)&&t.render(n,!0)),Xa(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-en}},Yr=function(e,t,n,r){return t.parent&&fa(t),t._start=kn((Rs(n)?n:n||e!==hn?fr(e,n,t):e._time)+t._delay),t._end=kn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),GM(e,t,"_first","_last",e._sort?"_start":0),ng(t)||(e._recent=t),r||WM(e,t),e._ts<0&&Gh(e,e._tTime),e},VM=function(e,t){return(Ji.ScrollTrigger||e_("scrollTrigger",t))&&Ji.ScrollTrigger.create(t,e)},$M=function(e,t,n,r,s){if(s_(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!si&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&FM!==qi.frame)return sa.push(e),e._lazy=[s,r],1},BI=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},ng=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},zI=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&BI(e)&&!(!e._initted&&ng(e))||(e._ts<0||e._dp._ts<0)&&!ng(e))?0:1,l=e._rDelay,u=0,f,h,p;if(l&&e._repeat&&(u=Jc(0,e._tDur,t),h=xl(u,l),e._yoyo&&h&1&&(o=1-o),h!==xl(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||si||r||e._zTime===en||!t&&e._zTime){if(!e._initted&&$M(e,t,r,n,u))return;for(p=e._zTime,e._zTime=t||(n?en:0),n||(n=t&&!p),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,f=e._pt;f;)f.r(o,f.d),f=f._next;t<0&&tg(e,t,n,!0),e._onUpdate&&!n&&ji(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&ji(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&fa(e,1),!n&&!si&&(ji(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},kI=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},yl=function(e,t,n,r){var s=e._repeat,o=kn(t)||0,l=e._tTime/e._tDur;return l&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:kn(o*(s+1)+e._rDelay*s):o,l>0&&!r&&Gh(e,e._tTime=e._tDur*l),e.parent&&Hh(e),n||Xa(e.parent,e),e},Dx=function(e){return e instanceof vi?Xa(e):yl(e,e._dur)},HI={_start:0,endTime:Hc,totalDuration:Hc},fr=function i(e,t,n){var r=e.labels,s=e._recent||HI,o=e.duration()>=_r?s.endTime(!1):e._dur,l,u,f;return Gn(t)&&(isNaN(t)||t in r)?(u=t.charAt(0),f=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(l<0?s:n).totalDuration()/100:1)):l<0?(t in r||(r[t]=o),r[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),f&&n&&(u=u/100*(ai(n)?n[0]:n).totalDuration()),l>1?i(e,t.substr(0,l-1),n)+u:o+u)):t==null?o:+t},Rc=function(e,t,n){var r=Rs(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],l,u;if(r&&(o.duration=t[1]),o.parent=n,e){for(l=o,u=n;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=Ri(u.vars.inherit)&&u.parent;o.immediateRender=Ri(l.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wn(t[0],o,t[s+1])},ga=function(e,t){return e||e===0?t(e):t},Jc=function(e,t,n){return n<e?e:n>t?t:n},ri=function(e,t){return!Gn(e)||!(t=PI.exec(e))?"":t[1]},GI=function(e,t,n){return ga(n,function(r){return Jc(e,t,r)})},ig=[].slice,XM=function(e,t){return e&&is(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&is(e[0]))&&!e.nodeType&&e!==Vr},WI=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return Gn(r)&&!t||XM(r,1)?(s=n).push.apply(s,vr(r)):n.push(r)})||n},vr=function(e,t,n){return cn&&!t&&cn.selector?cn.selector(e):Gn(e)&&!n&&(Qm||!Sl())?ig.call((t||Qg).querySelectorAll(e),0):ai(e)?WI(e,n):XM(e)?ig.call(e,0):e?[e]:[]},rg=function(e){return e=vr(e)[0]||kc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return vr(t,n.querySelectorAll?n:n===e?kc("Invalid scope")||Qg.createElement("div"):e)}},qM=function(e){return e.sort(function(){return .5-Math.random()})},YM=function(e){if(vn(e))return e;var t=is(e)?e:{each:e},n=qa(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},l=r>0&&r<1,u=isNaN(r)||l,f=t.axis,h=r,p=r;return Gn(r)?h=p={center:.5,edges:.5,end:1}[r]||0:!l&&u&&(h=r[0],p=r[1]),function(m,g,y){var x=(y||t).length,_=o[x],v,A,T,E,C,R,w,z,G;if(!_){if(G=t.grid==="auto"?0:(t.grid||[1,_r])[1],!G){for(w=-_r;w<(w=y[G++].getBoundingClientRect().left)&&G<x;);G<x&&G--}for(_=o[x]=[],v=u?Math.min(G,x)*h-.5:r%G,A=G===_r?0:u?x*p/G-.5:r/G|0,w=0,z=_r,R=0;R<x;R++)T=R%G-v,E=A-(R/G|0),_[R]=C=f?Math.abs(f==="y"?E:T):RM(T*T+E*E),C>w&&(w=C),C<z&&(z=C);r==="random"&&qM(_),_.max=w-z,_.min=z,_.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(G>x?x-1:f?f==="y"?x/G:G:Math.max(G,x/G))||0)*(r==="edges"?-1:1),_.b=x<0?s-x:s,_.u=ri(t.amount||t.each)||0,n=n&&x<0?rb(n):n}return x=(_[m]-_.min)/_.max||0,kn(_.b+(n?n(x):x)*_.v)+_.u}},sg=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=kn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Rs(n)?0:ri(n))}},jM=function(e,t){var n=ai(e),r,s;return!n&&is(e)&&(r=n=e.radius||_r,e.values?(e=vr(e.values),(s=!Rs(e[0]))&&(r*=r)):e=sg(e.increment)),ga(t,n?vn(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var l=parseFloat(s?o.x:o),u=parseFloat(s?o.y:0),f=_r,h=0,p=e.length,m,g;p--;)s?(m=e[p].x-l,g=e[p].y-u,m=m*m+g*g):m=Math.abs(e[p]-l),m<f&&(f=m,h=p);return h=!r||f<=r?e[h]:o,s||h===o||Rs(o)?h:h+ri(o)}:sg(e))},KM=function(e,t,n,r){return ga(ai(e)?!t:n===!0?!!(n=0):!r,function(){return ai(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},VI=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},$I=function(e,t){return function(n){return e(parseFloat(n))+(t||ri(n))}},XI=function(e,t,n){return JM(e,t,0,1,n)},ZM=function(e,t,n){return ga(n,function(r){return e[~~t(r)]})},qI=function i(e,t,n){var r=t-e;return ai(e)?ZM(e,i(0,e.length),t):ga(n,function(s){return(r+(s-e)%r)%r+e})},YI=function i(e,t,n){var r=t-e,s=r*2;return ai(e)?ZM(e,i(0,e.length-1),t):ga(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Gc=function(e){for(var t=0,n="",r,s,o,l;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),l=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(l?IM:Jm),n+=e.substr(t,r-t)+KM(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},JM=function(e,t,n,r,s){var o=t-e,l=r-n;return ga(s,function(u){return n+((u-e)/o*l||0)})},jI=function i(e,t,n,r){var s=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!s){var o=Gn(e),l={},u,f,h,p,m;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(ai(e)&&!ai(t)){for(h=[],p=e.length,m=p-2,f=1;f<p;f++)h.push(i(e[f-1],e[f]));p--,s=function(y){y*=p;var x=Math.min(m,~~y);return h[x](y-x)},n=t}else r||(e=no(ai(e)?[]:{},e));if(!h){for(u in t)r_.call(l,e,u,"get",t[u]);s=function(y){return l_(y,l)||(o?e.p:e)}}}return ga(n,s)},Ix=function(e,t,n){var r=e.labels,s=_r,o,l,u;for(o in r)l=r[o]-t,l<0==!!n&&l&&s>(l=Math.abs(l))&&(u=o,s=l);return u},ji=function(e,t,n){var r=e.vars,s=r[t],o=cn,l=e._ctx,u,f,h;if(s)return u=r[t+"Params"],f=r.callbackScope||e,n&&sa.length&&gh(),l&&(cn=l),h=u?s.apply(f,u):s.call(f),cn=o,h},Sc=function(e){return fa(e),e.scrollTrigger&&e.scrollTrigger.kill(!!si),e.progress()<1&&ji(e,"onInterrupt"),e},nl,QM=[],eb=function(e){if(e)if(e=!e.name&&e.default||e,Jg()||e.headless){var t=e.name,n=vn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Hc,render:l_,add:r_,kill:f2,modifier:u2,rawVars:0},o={targetTest:0,get:0,getSetter:o_,aliases:{},register:0};if(Sl(),e!==r){if(Xi[t])return;yr(r,yr(_h(e,s),o)),no(r.prototype,no(s,_h(e,o))),Xi[r.prop=t]=r,e.targetTest&&(Jf.push(r),t_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}NM(t,r),e.register&&e.register(Oi,r,Li)}else QM.push(e)},Jt=255,Ec={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},_p=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Jt+.5|0},tb=function(e,t,n){var r=e?Rs(e)?[e>>16,e>>8&Jt,e&Jt]:0:Ec.black,s,o,l,u,f,h,p,m,g,y;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ec[e])r=Ec[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(r=y=e.match(Jm),!t)u=+r[0]%360/360,f=+r[1]/100,h=+r[2]/100,o=h<=.5?h*(f+1):h+f-h*f,s=h*2-o,r.length>3&&(r[3]*=1),r[0]=_p(u+1/3,s,o),r[1]=_p(u,s,o),r[2]=_p(u-1/3,s,o);else if(~e.indexOf("="))return r=e.match(LM),n&&r.length<4&&(r[3]=1),r}else r=e.match(Jm)||Ec.transparent;r=r.map(Number)}return t&&!y&&(s=r[0]/Jt,o=r[1]/Jt,l=r[2]/Jt,p=Math.max(s,o,l),m=Math.min(s,o,l),h=(p+m)/2,p===m?u=f=0:(g=p-m,f=h>.5?g/(2-p-m):g/(p+m),u=p===s?(o-l)/g+(o<l?6:0):p===o?(l-s)/g+2:(s-o)/g+4,u*=60),r[0]=~~(u+.5),r[1]=~~(f*100+.5),r[2]=~~(h*100+.5)),n&&r.length<4&&(r[3]=1),r},nb=function(e){var t=[],n=[],r=-1;return e.split(aa).forEach(function(s){var o=s.match(tl)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Ox=function(e,t,n){var r="",s=(e+r).match(aa),o=t?"hsla(":"rgba(",l=0,u,f,h,p;if(!s)return e;if(s=s.map(function(m){return(m=tb(m,t,1))&&o+(t?m[0]+","+m[1]+"%,"+m[2]+"%,"+m[3]:m.join(","))+")"}),n&&(h=nb(e),u=n.c,u.join(r)!==h.c.join(r)))for(f=e.replace(aa,"1").split(tl),p=f.length-1;l<p;l++)r+=f[l]+(~u.indexOf(l)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!f)for(f=e.split(aa),p=f.length-1;l<p;l++)r+=f[l]+s[l];return r+f[p]},aa=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ec)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),KI=/hsl[a]?\(/,ib=function(e){var t=e.join(" "),n;if(aa.lastIndex=0,aa.test(t))return n=KI.test(t),e[1]=Ox(e[1],n),e[0]=Ox(e[0],n,nb(e[1])),!0},Wc,qi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,l=[],u,f,h,p,m,g,y=function x(_){var v=i()-r,A=_===!0,T,E,C,R;if((v>e||v<0)&&(n+=v-t),r+=v,C=r-n,T=C-o,(T>0||A)&&(R=++p.frame,m=C-p.time*1e3,p.time=C=C/1e3,o+=T+(T>=s?4:s-T),E=1),A||(u=f(x)),E)for(g=0;g<l.length;g++)l[g](C,m,R,_)};return p={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return m/(1e3/(_||60))},wake:function(){OM&&(!Qm&&Jg()&&(Vr=Qm=window,Qg=Vr.document||{},Ji.gsap=Oi,(Vr.gsapVersions||(Vr.gsapVersions=[])).push(Oi.version),UM(mh||Vr.GreenSockGlobals||!Vr.gsap&&Vr||{}),QM.forEach(eb)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&p.sleep(),f=h||function(_){return setTimeout(_,o-p.time*1e3+1|0)},Wc=1,y(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(u),Wc=0,f=Hc},lagSmoothing:function(_,v){e=_||1/0,t=Math.min(v||33,e)},fps:function(_){s=1e3/(_||240),o=p.time*1e3+s},add:function(_,v,A){var T=v?function(E,C,R,w){_(E,C,R,w),p.remove(T)}:_;return p.remove(_),l[A?"unshift":"push"](T),Sl(),T},remove:function(_,v){~(v=l.indexOf(_))&&l.splice(v,1)&&g>=v&&g--},_listeners:l},p}(),Sl=function(){return!Wc&&qi.wake()},Nt={},ZI=/^[\d.\-M][\d.\-,\s]/,JI=/["']/g,QI=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,l,u,f;s<o;s++)u=n[s],l=s!==o-1?u.lastIndexOf(","):u.length,f=u.substr(0,l),t[r]=isNaN(f)?f.replace(JI,"").trim():+f,r=u.substr(l+1).trim();return t},e2=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},t2=function(e){var t=(e+"").split("("),n=Nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[QI(t[1])]:e2(e).split(",").map(kM)):Nt._CE&&ZI.test(e)?Nt._CE("",e):n},rb=function(e){return function(t){return 1-e(1-t)}},sb=function i(e,t){for(var n=e._first,r;n;)n instanceof vi?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},qa=function(e,t){return e&&(vn(e)?e:Nt[e]||t2(e))||t},uo=function(e,t,n,r){n===void 0&&(n=function(u){return 1-t(1-u)}),r===void 0&&(r=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return Pi(e,function(l){Nt[l]=Ji[l]=s,Nt[o=l.toLowerCase()]=n;for(var u in s)Nt[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Nt[l+"."+u]=s[u]}),s},ab=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},vp=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/Zm*(Math.asin(1/r)||0),l=function(h){return h===1?1:r*Math.pow(2,-10*h)*RI((h-o)*s)+1},u=e==="out"?l:e==="in"?function(f){return 1-l(1-f)}:ab(l);return s=Zm/s,u.config=function(f,h){return i(e,f,h)},u},xp=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ab(n);return r.config=function(s){return i(e,s)},r};Pi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;uo(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Nt.Linear.easeNone=Nt.none=Nt.Linear.easeIn;uo("Elastic",vp("in"),vp("out"),vp());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(l){return l<t?i*l*l:l<n?i*Math.pow(l-1.5/e,2)+.75:l<r?i*(l-=2.25/e)*l+.9375:i*Math.pow(l-2.625/e,2)+.984375};uo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);uo("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});uo("Circ",function(i){return-(RM(1-i*i)-1)});uo("Sine",function(i){return i===1?1:-CI(i*AI)+1});uo("Back",xp("in"),xp("out"),xp());Nt.SteppedEase=Nt.steps=Ji.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-en;return function(l){return((r*Jc(0,o,l)|0)+s)*n}}};vl.ease=Nt["quad.out"];Pi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return n_+=i+","+i+"Params,"});var ob=function(e,t){this.id=wI++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:BM,this.set=t?t.getSetter:o_},Vc=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,yl(this,+t.duration,1,1),this.data=t.data,cn&&(this._ctx=cn,cn.data.push(this)),Wc||qi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,yl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Sl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Gh(this,n),!s._dp||s.parent||WM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===en||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),zM(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Lx(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Lx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?xl(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?vh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-en?0:this._rts,this.totalTime(Jc(-Math.abs(this._delay),this._tDur,s),r!==!1),Hh(this),NI(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?vh(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=DI);var r=si;return si=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),si=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Dx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,Dx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(fr(this,n),Ri(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ri(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-en)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=vn(n)?n:HM,l=function(){var f=r.then;r.then=null,vn(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=f),s(o),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){Sc(this)},i}();yr(Vc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var vi=function(i){CM(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ri(n.sortChildren),hn&&Yr(n.parent||hn,Ss(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&VM(Ss(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Rc(0,arguments,this),this},t.from=function(r,s,o){return Rc(1,arguments,this),this},t.fromTo=function(r,s,o,l){return Rc(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Cc(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wn(r,s,fr(this,o),1),this},t.call=function(r,s,o){return Yr(this,wn.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,l,u,f,h){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=f,o.onCompleteParams=h,o.parent=this,new wn(r,o,fr(this,u)),this},t.staggerFrom=function(r,s,o,l,u,f,h){return o.runBackwards=1,Cc(o).immediateRender=Ri(o.immediateRender),this.staggerTo(r,s,o,l,u,f,h)},t.staggerFromTo=function(r,s,o,l,u,f,h,p){return l.startAt=o,Cc(l).immediateRender=Ri(l.immediateRender),this.staggerTo(r,s,l,u,f,h,p)},t.render=function(r,s,o){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,f=this._dur,h=r<=0?0:kn(r),p=this._zTime<0!=r<0&&(this._initted||!f),m,g,y,x,_,v,A,T,E,C,R,w;if(this!==hn&&h>u&&r>=0&&(h=u),h!==this._tTime||o||p){if(l!==this._time&&f&&(h+=this._time-l,r+=this._time-l),m=h,E=this._start,T=this._ts,v=!T,p&&(f||(l=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(R=this._yoyo,_=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,s,o);if(m=kn(h%_),h===u?(x=this._repeat,m=f):(x=~~(h/_),x&&x===h/_&&(m=f,x--),m>f&&(m=f)),C=xl(this._tTime,_),!l&&this._tTime&&C!==x&&this._tTime-C*_-this._dur<=0&&(C=x),R&&x&1&&(m=f-m,w=1),x!==C&&!this._lock){var z=R&&C&1,G=z===(R&&x&1);if(x<C&&(z=!z),l=z?0:h%f?f:h,this._lock=1,this.render(l||(w?0:kn(x*_)),s,!f)._lock=0,this._tTime=h,!s&&this.parent&&ji(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),l&&l!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,u=this._tDur,G&&(this._lock=2,l=z?f:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;sb(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=kI(this,kn(l),kn(m)),A&&(h-=m-(m=A._start))),this._tTime=h,this._time=m,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,l=0),!l&&m&&!s&&!x&&(ji(this,"onStart"),this._tTime!==h))return this;if(m>=l&&r>=0)for(g=this._first;g;){if(y=g._next,(g._act||m>=g._start)&&g._ts&&A!==g){if(g.parent!==this)return this.render(r,s,o);if(g.render(g._ts>0?(m-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(m-g._start)*g._ts,s,o),m!==this._time||!this._ts&&!v){A=0,y&&(h+=this._zTime=-en);break}}g=y}else{g=this._last;for(var M=r<0?r:m;g;){if(y=g._prev,(g._act||M<=g._end)&&g._ts&&A!==g){if(g.parent!==this)return this.render(r,s,o);if(g.render(g._ts>0?(M-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(M-g._start)*g._ts,s,o||si&&(g._initted||g._startAt)),m!==this._time||!this._ts&&!v){A=0,y&&(h+=this._zTime=M?-en:en);break}}g=y}}if(A&&!s&&(this.pause(),A.render(m>=l?0:-en)._zTime=m>=l?1:-1,this._ts))return this._start=E,Hh(this),this.render(r,s,o);this._onUpdate&&!s&&ji(this,"onUpdate",!0),(h===u&&this._tTime>=this.totalDuration()||!h&&l)&&(E===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(h===u&&this._ts>0||!h&&this._ts<0)&&fa(this,1),!s&&!(r<0&&!l)&&(h||l||!u)&&(ji(this,h===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Rs(s)||(s=fr(this,s,r)),!(r instanceof Vc)){if(ai(r))return r.forEach(function(l){return o.add(l,s)}),this;if(Gn(r))return this.addLabel(r,s);if(vn(r))r=wn.delayedCall(0,r);else return this}return this!==r?Yr(this,r,s):this},t.getChildren=function(r,s,o,l){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-_r);for(var u=[],f=this._first;f;)f._start>=l&&(f instanceof wn?s&&u.push(f):(o&&u.push(f),r&&u.push.apply(u,f.getChildren(!0,s,o)))),f=f._next;return u},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Gn(r)?this.removeLabel(r):vn(r)?this.killTweensOf(r):(kh(this,r),r===this._recent&&(this._recent=this._last),Xa(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=kn(qi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=fr(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var l=wn.delayedCall(0,s||Hc,o);return l.data="isPause",this._hasPause=1,Yr(this,l,fr(this,r))},t.removePause=function(r){var s=this._first;for(r=fr(this,r);s;)s._start===r&&s.data==="isPause"&&fa(s),s=s._next},t.killTweensOf=function(r,s,o){for(var l=this.getTweensOf(r,o),u=l.length;u--;)Qs!==l[u]&&l[u].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],l=vr(r),u=this._first,f=Rs(s),h;u;)u instanceof wn?II(u._targets,l)&&(f?(!Qs||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&o.push(u):(h=u.getTweensOf(l,s)).length&&o.push.apply(o,h),u=u._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,l=fr(o,r),u=s,f=u.startAt,h=u.onStart,p=u.onStartParams,m=u.immediateRender,g,y=wn.to(o,yr({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale())||en,onStart:function(){if(o.pause(),!g){var _=s.duration||Math.abs((l-(f&&"time"in f?f.time:o._time))/o.timeScale());y._dur!==_&&yl(y,_,0,1).render(y._time,!0,!0),g=1}h&&h.apply(y,p||[])}},s));return m?y.render(0):y},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,yr({startAt:{time:fr(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Ix(this,fr(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Ix(this,fr(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var l=this._first,u=this.labels,f;l;)l._start>=o&&(l._start+=r,l._end+=r),l=l._next;if(s)for(f in u)u[f]>=o&&(u[f]+=r);return Xa(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Xa(this)},t.totalDuration=function(r){var s=0,o=this,l=o._last,u=_r,f,h,p;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(p=o.parent;l;)f=l._prev,l._dirty&&l.totalDuration(),h=l._start,h>u&&o._sort&&l._ts&&!o._lock?(o._lock=1,Yr(o,l,h-l._delay,1)._lock=0):u=h,h<0&&l._ts&&(s-=h,(!p&&!o._dp||p&&p.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=f;yl(o,o===hn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(hn._ts&&(zM(hn,vh(r,hn)),FM=qi.frame),qi.frame>=Rx){Rx+=Ki.autoSleep||120;var s=hn._first;if((!s||!s._ts)&&Ki.autoSleep&&qi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qi.sleep()}}},e}(Vc);yr(vi.prototype,{_lock:0,_hasPause:0,_forcing:0});var n2=function(e,t,n,r,s,o,l){var u=new Li(this._pt,e,t,0,1,db,null,s),f=0,h=0,p,m,g,y,x,_,v,A;for(u.b=n,u.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=Gc(r)),o&&(A=[n,r],o(A,e,t),n=A[0],r=A[1]),m=n.match(mp)||[];p=mp.exec(r);)y=p[0],x=r.substring(f,p.index),g?g=(g+1)%5:x.substr(-5)==="rgba("&&(g=1),y!==m[h++]&&(_=parseFloat(m[h-1])||0,u._pt={_next:u._pt,p:x||h===1?x:",",s:_,c:y.charAt(1)==="="?ll(_,y)-_:parseFloat(y)-_,m:g&&g<4?Math.round:0},f=mp.lastIndex);return u.c=f<r.length?r.substring(f,r.length):"",u.fp=l,(DM.test(r)||v)&&(u.e=0),this._pt=u,u},r_=function(e,t,n,r,s,o,l,u,f,h){vn(r)&&(r=r(s||0,e,o));var p=e[t],m=n!=="get"?n:vn(p)?f?e[t.indexOf("set")||!vn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():p,g=vn(p)?f?o2:fb:a_,y;if(Gn(r)&&(~r.indexOf("random(")&&(r=Gc(r)),r.charAt(1)==="="&&(y=ll(m,r)+(ri(m)||0),(y||y===0)&&(r=y))),!h||m!==r||ag)return!isNaN(m*r)&&r!==""?(y=new Li(this._pt,e,t,+m||0,r-(m||0),typeof p=="boolean"?c2:hb,0,g),f&&(y.fp=f),l&&y.modifier(l,this,e),this._pt=y):(!p&&!(t in e)&&e_(t,r),n2.call(this,e,t,m,r,g,u||Ki.stringFilter,f))},i2=function(e,t,n,r,s){if(vn(e)&&(e=Pc(e,s,t,n,r)),!is(e)||e.style&&e.nodeType||ai(e)||PM(e))return Gn(e)?Pc(e,s,t,n,r):e;var o={},l;for(l in e)o[l]=Pc(e[l],s,t,n,r);return o},lb=function(e,t,n,r,s,o){var l,u,f,h;if(Xi[e]&&(l=new Xi[e]).init(s,l.rawVars?t[e]:i2(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=u=new Li(n._pt,s,e,0,1,l.render,l,0,l.priority),n!==nl))for(f=n._ptLookup[n._targets.indexOf(s)],h=l._props.length;h--;)f[l._props[h]]=u;return l},Qs,ag,s_=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,l=r.immediateRender,u=r.lazy,f=r.onUpdate,h=r.runBackwards,p=r.yoyoEase,m=r.keyframes,g=r.autoRevert,y=e._dur,x=e._startAt,_=e._targets,v=e.parent,A=v&&v.data==="nested"?v.vars.targets:_,T=e._overwrite==="auto"&&!Kg,E=e.timeline,C,R,w,z,G,M,U,V,oe,k,J,j,te;if(E&&(!m||!s)&&(s="none"),e._ease=qa(s,vl.ease),e._yEase=p?rb(qa(p===!0?s:p,vl.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||m&&!r.stagger){if(V=_[0]?$a(_[0]).harness:0,j=V&&r[V.prop],C=_h(r,t_),x&&(x._zTime<0&&x.progress(1),t<0&&h&&l&&!g?x.render(-1,!0):x.revert(h&&y?Zf:LI),x._lazy=0),o){if(fa(e._startAt=wn.set(_,yr({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!x&&Ri(u),startAt:null,delay:0,onUpdate:f&&function(){return ji(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si||!l&&!g)&&e._startAt.revert(Zf),l&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&y&&!x){if(t&&(l=!1),w=yr({overwrite:!1,data:"isFromStart",lazy:l&&!x&&Ri(u),immediateRender:l,stagger:0,parent:v},C),j&&(w[V.prop]=j),fa(e._startAt=wn.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(si?e._startAt.revert(Zf):e._startAt.render(-1,!0)),e._zTime=t,!l)i(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,u=y&&Ri(u)||u&&!y,R=0;R<_.length;R++){if(G=_[R],U=G._gsap||i_(_)[R]._gsap,e._ptLookup[R]=k={},eg[U.id]&&sa.length&&gh(),J=A===_?R:A.indexOf(G),V&&(oe=new V).init(G,j||C,e,J,A)!==!1&&(e._pt=z=new Li(e._pt,G,oe.name,0,1,oe.render,oe,0,oe.priority),oe._props.forEach(function(ie){k[ie]=z}),oe.priority&&(M=1)),!V||j)for(w in C)Xi[w]&&(oe=lb(w,C,e,J,G,A))?oe.priority&&(M=1):k[w]=z=r_.call(e,G,w,"get",C[w],J,A,0,r.stringFilter);e._op&&e._op[R]&&e.kill(G,e._op[R]),T&&e._pt&&(Qs=e,hn.killTweensOf(G,k,e.globalTime(t)),te=!e.parent,Qs=0),e._pt&&u&&(eg[U.id]=1)}M&&pb(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!te,m&&t<=0&&E.render(_r,!0,!0)},r2=function(e,t,n,r,s,o,l,u){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,p,m,g;if(!f)for(f=e._ptCache[t]=[],m=e._ptLookup,g=e._targets.length;g--;){if(h=m[g][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return ag=1,e.vars[t]="+=0",s_(e,l),ag=0,u?kc(t+" not eligible for reset"):1;f.push(h)}for(g=f.length;g--;)p=f[g],h=p._pt||p,h.s=(r||r===0)&&!s?r:h.s+(r||0)+o*h.c,h.c=n-h.s,p.e&&(p.e=Mn(n)+ri(p.e)),p.b&&(p.b=h.s+ri(p.b))},s2=function(e,t){var n=e[0]?$a(e[0]).harness:0,r=n&&n.aliases,s,o,l,u;if(!r)return t;s=no({},t);for(o in r)if(o in s)for(u=r[o].split(","),l=u.length;l--;)s[u[l]]=s[o];return s},a2=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,l;if(ai(t))l=n[e]||(n[e]=[]),t.forEach(function(u,f){return l.push({t:f/(t.length-1)*100,v:u,e:s})});else for(o in t)l=n[o]||(n[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:t[o],e:s})},Pc=function(e,t,n,r,s){return vn(e)?e.call(t,n,r,s):Gn(e)&&~e.indexOf("random(")?Gc(e):e},cb=n_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ub={};Pi(cb+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return ub[i]=1});var wn=function(i){CM(e,i);function e(n,r,s,o){var l;typeof r=="number"&&(s.duration=r,r=s,s=null),l=i.call(this,o?r:Cc(r))||this;var u=l.vars,f=u.duration,h=u.delay,p=u.immediateRender,m=u.stagger,g=u.overwrite,y=u.keyframes,x=u.defaults,_=u.scrollTrigger,v=u.yoyoEase,A=r.parent||hn,T=(ai(n)||PM(n)?Rs(n[0]):"length"in r)?[n]:vr(n),E,C,R,w,z,G,M,U;if(l._targets=T.length?i_(T):kc("GSAP target "+n+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=g,y||m||Zu(f)||Zu(h)){if(r=l.vars,E=l.timeline=new vi({data:"nested",defaults:x||{},targets:A&&A.data==="nested"?A.vars.targets:T}),E.kill(),E.parent=E._dp=Ss(l),E._start=0,m||Zu(f)||Zu(h)){if(w=T.length,M=m&&YM(m),is(m))for(z in m)~cb.indexOf(z)&&(U||(U={}),U[z]=m[z]);for(C=0;C<w;C++)R=_h(r,ub),R.stagger=0,v&&(R.yoyoEase=v),U&&no(R,U),G=T[C],R.duration=+Pc(f,Ss(l),C,G,T),R.delay=(+Pc(h,Ss(l),C,G,T)||0)-l._delay,!m&&w===1&&R.delay&&(l._delay=h=R.delay,l._start+=h,R.delay=0),E.to(G,R,M?M(C,G,T):0),E._ease=Nt.none;E.duration()?f=h=0:l.timeline=0}else if(y){Cc(yr(E.vars.defaults,{ease:"none"})),E._ease=qa(y.ease||r.ease||"none");var V=0,oe,k,J;if(ai(y))y.forEach(function(j){return E.to(T,j,">")}),E.duration();else{R={};for(z in y)z==="ease"||z==="easeEach"||a2(z,y[z],R,y.easeEach);for(z in R)for(oe=R[z].sort(function(j,te){return j.t-te.t}),V=0,C=0;C<oe.length;C++)k=oe[C],J={ease:k.e,duration:(k.t-(C?oe[C-1].t:0))/100*f},J[z]=k.v,E.to(T,J,V),V+=J.duration;E.duration()<f&&E.to({},{duration:f-E.duration()})}}f||l.duration(f=E.duration())}else l.timeline=0;return g===!0&&!Kg&&(Qs=Ss(l),hn.killTweensOf(T),Qs=0),Yr(A,Ss(l),s),r.reversed&&l.reverse(),r.paused&&l.paused(!0),(p||!f&&!y&&l._start===kn(A._time)&&Ri(p)&&FI(Ss(l))&&A.data!=="nested")&&(l._tTime=-en,l.render(Math.max(0,-h)||0)),_&&VM(Ss(l),_),l}var t=e.prototype;return t.render=function(r,s,o){var l=this._time,u=this._tDur,f=this._dur,h=r<0,p=r>u-en&&!h?u:r<en?0:r,m,g,y,x,_,v,A,T,E;if(!f)zI(this,r,s,o);else if(p!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(m=p,T=this.timeline,this._repeat){if(x=f+this._rDelay,this._repeat<-1&&h)return this.totalTime(x*100+r,s,o);if(m=kn(p%x),p===u?(y=this._repeat,m=f):(y=~~(p/x),y&&y===kn(p/x)&&(m=f,y--),m>f&&(m=f)),v=this._yoyo&&y&1,v&&(E=this._yEase,m=f-m),_=xl(this._tTime,x),m===l&&!o&&this._initted&&y===_)return this._tTime=p,this;y!==_&&(T&&this._yEase&&sb(T,v),this.vars.repeatRefresh&&!v&&!this._lock&&this._time!==x&&this._initted&&(this._lock=o=1,this.render(kn(x*y),!0).invalidate()._lock=0))}if(!this._initted){if($M(this,h?r:m,o,s,p))return this._tTime=0,this;if(l!==this._time&&!(o&&this.vars.repeatRefresh&&y!==_))return this;if(f!==this._dur)return this.render(r,s,o)}if(this._tTime=p,this._time=m,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(E||this._ease)(m/f),this._from&&(this.ratio=A=1-A),m&&!l&&!s&&!y&&(ji(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(A,g.d),g=g._next;T&&T.render(r<0?r:T._dur*T._ease(m/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(h&&tg(this,r,s,o),ji(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!s&&this.parent&&ji(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(h&&!this._onUpdate&&tg(this,r,!0,!0),(r||!f)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&fa(this,1),!s&&!(h&&!l)&&(p||l||v)&&(ji(this,p===u?"onComplete":"onReverseComplete",!0),this._prom&&!(p<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,l,u){Wc||qi.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||s_(this,f),h=this._ease(f/this._dur),r2(this,r,s,o,l,h,f,u)?this.resetTo(r,s,o,l,1):(Gh(this,0),this.parent||GM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Sc(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Qs&&Qs.vars.overwrite!==!0)._first||Sc(this),this.parent&&o!==this.timeline.totalDuration()&&yl(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,u=r?vr(r):l,f=this._ptLookup,h=this._pt,p,m,g,y,x,_,v;if((!s||s==="all")&&UI(l,u))return s==="all"&&(this._pt=0),Sc(this);for(p=this._op=this._op||[],s!=="all"&&(Gn(s)&&(x={},Pi(s,function(A){return x[A]=1}),s=x),s=s2(l,s)),v=l.length;v--;)if(~u.indexOf(l[v])){m=f[v],s==="all"?(p[v]=s,y=m,g={}):(g=p[v]=p[v]||{},y=s);for(x in y)_=m&&m[x],_&&((!("kill"in _.d)||_.d.kill(x)===!0)&&kh(this,_,"_pt"),delete m[x]),g!=="all"&&(g[x]=1)}return this._initted&&!this._pt&&h&&Sc(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Rc(1,arguments)},e.delayedCall=function(r,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(r,s,o){return Rc(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return hn.killTweensOf(r,s,o)},e}(Vc);yr(wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Pi("staggerTo,staggerFrom,staggerFromTo",function(i){wn[i]=function(){var e=new vi,t=ig.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var a_=function(e,t,n){return e[t]=n},fb=function(e,t,n){return e[t](n)},o2=function(e,t,n,r){return e[t](r.fp,n)},l2=function(e,t,n){return e.setAttribute(t,n)},o_=function(e,t){return vn(e[t])?fb:Zg(e[t])&&e.setAttribute?l2:a_},hb=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},c2=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},db=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},l_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},u2=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},f2=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?kh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},h2=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},pb=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},Li=function(){function i(t,n,r,s,o,l,u,f,h){this.t=n,this.s=s,this.c=o,this.p=r,this.r=l||hb,this.d=u||this,this.set=f||a_,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=h2,this.m=n,this.mt=s,this.tween=r},i}();Pi(n_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return t_[i]=1});Ji.TweenMax=Ji.TweenLite=wn;Ji.TimelineLite=Ji.TimelineMax=vi;hn=new vi({sortChildren:!1,defaults:vl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=ib;var Ya=[],Qf={},d2=[],Ux=0,p2=0,yp=function(e){return(Qf[e]||d2).map(function(t){return t()})},og=function(){var e=Date.now(),t=[];e-Ux>2&&(yp("matchMediaInit"),Ya.forEach(function(n){var r=n.queries,s=n.conditions,o,l,u,f;for(l in r)o=Vr.matchMedia(r[l]).matches,o&&(u=1),o!==s[l]&&(s[l]=o,f=1);f&&(n.revert(),u&&t.push(n))}),yp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Ux=e,yp("matchMedia"))},mb=function(){function i(t,n){this.selector=n&&rg(n),this.data=[],this._r=[],this.isReverted=!1,this.id=p2++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){vn(n)&&(s=r,r=n,n=vn);var o=this,l=function(){var f=cn,h=o.selector,p;return f&&f!==o&&f.data.push(o),s&&(o.selector=rg(s)),cn=o,p=r.apply(o,arguments),vn(p)&&o._r.push(p),cn=f,o.selector=h,o.isReverted=!1,p};return o.last=l,n===vn?l(o,function(u){return o.add(null,u)}):n?o[n]=l:l},e.ignore=function(n){var r=cn;cn=null,n(this),cn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof wn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var l=s.getTweens(),u=s.data.length,f;u--;)f=s.data[u],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(h){return l.splice(l.indexOf(h),1)}));for(l.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,p){return p.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),u=s.data.length;u--;)f=s.data[u],f instanceof vi?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof wn)&&f.revert&&f.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(l){return l.kill&&l.kill()}),this.clear(),r)for(var o=Ya.length;o--;)Ya[o].id===this.id&&Ya.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),m2=function(){function i(t){this.contexts=[],this.scope=t,cn&&cn.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){is(n)||(n={matches:n});var o=new mb(0,s||this.scope),l=o.conditions={},u,f,h;cn&&!o.selector&&(o.selector=cn.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(f in n)f==="all"?h=1:(u=Vr.matchMedia(n[f]),u&&(Ya.indexOf(o)<0&&Ya.push(o),(l[f]=u.matches)&&(h=1),u.addListener?u.addListener(og):u.addEventListener("change",og)));return h&&r(o,function(p){return o.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),xh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return eb(r)})},timeline:function(e){return new vi(e)},getTweensOf:function(e,t){return hn.getTweensOf(e,t)},getProperty:function(e,t,n,r){Gn(e)&&(e=vr(e)[0]);var s=$a(e||{}).get,o=n?HM:kM;return n==="native"&&(n=""),e&&(t?o((Xi[t]&&Xi[t].get||s)(e,t,n,r)):function(l,u,f){return o((Xi[l]&&Xi[l].get||s)(e,l,u,f))})},quickSetter:function(e,t,n){if(e=vr(e),e.length>1){var r=e.map(function(h){return Oi.quickSetter(h,t,n)}),s=r.length;return function(h){for(var p=s;p--;)r[p](h)}}e=e[0]||{};var o=Xi[t],l=$a(e),u=l.harness&&(l.harness.aliases||{})[t]||t,f=o?function(h){var p=new o;nl._pt=0,p.init(e,n?h+n:h,nl,0,[e]),p.render(1,p),nl._pt&&l_(1,nl)}:l.set(e,u);return o?f:function(h){return f(e,u,n?h+n:h,l,1)}},quickTo:function(e,t,n){var r,s=Oi.to(e,no((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(u,f,h){return s.resetTo(t,u,f,h)};return o.tween=s,o},isTweening:function(e){return hn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=qa(e.ease,vl.ease)),Px(vl,e||{})},config:function(e){return Px(Ki,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(l){return l&&!Xi[l]&&!Ji[l]&&kc(t+" effect requires "+l+" plugin.")}),gp[t]=function(l,u,f){return n(vr(l),yr(u||{},s),f)},o&&(vi.prototype[t]=function(l,u,f){return this.add(gp[t](l,is(u)?u:(f=u)&&{},this),f)})},registerEase:function(e,t){Nt[e]=qa(t)},parseEase:function(e,t){return arguments.length?qa(e,t):Nt},getById:function(e){return hn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new vi(e),r,s;for(n.smoothChildTiming=Ri(e.smoothChildTiming),hn.remove(n),n._dp=0,n._time=n._tTime=hn._time,r=hn._first;r;)s=r._next,(t||!(!r._dur&&r instanceof wn&&r.vars.onComplete===r._targets[0]))&&Yr(n,r,r._start-r._delay),r=s;return Yr(hn,n,0),n},context:function(e,t){return e?new mb(e,t):cn},matchMedia:function(e){return new m2(e)},matchMediaRefresh:function(){return Ya.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||og()},addEventListener:function(e,t){var n=Qf[e]||(Qf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Qf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:qI,wrapYoyo:YI,distribute:YM,random:KM,snap:jM,normalize:XI,getUnit:ri,clamp:GI,splitColor:tb,toArray:vr,selector:rg,mapRange:JM,pipe:VI,unitize:$I,interpolate:jI,shuffle:qM},install:UM,effects:gp,ticker:qi,updateRoot:vi.updateRoot,plugins:Xi,globalTimeline:hn,core:{PropTween:Li,globals:NM,Tween:wn,Timeline:vi,Animation:Vc,getCache:$a,_removeLinkedListItem:kh,reverting:function(){return si},context:function(e){return e&&cn&&(cn.data.push(e),e._ctx=cn),cn},suppressOverwrites:function(e){return Kg=e}}};Pi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return xh[i]=wn[i]});qi.add(vi.updateRoot);nl=xh.to({},{duration:0});var g2=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},_2=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=g2(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},Sp=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(l){var u,f;if(Gn(s)&&(u={},Pi(s,function(h){return u[h]=1}),s=u),t){u={};for(f in s)u[f]=t(s[f]);s=u}_2(l,s)}}}},Oi=xh.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,l,u;this.tween=n;for(o in t)u=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(u||0)+"",t[o],r,s,0,0,o),l.op=o,l.b=u,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)si?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Sp("roundProps",sg),Sp("modifiers"),Sp("snap",jM))||xh;wn.version=vi.version=Oi.version="3.12.5";OM=1;Jg()&&Sl();Nt.Power0;Nt.Power1;Nt.Power2;Nt.Power3;Nt.Power4;Nt.Linear;Nt.Quad;Nt.Cubic;Nt.Quart;Nt.Quint;Nt.Strong;Nt.Elastic;Nt.Back;Nt.SteppedEase;Nt.Bounce;Nt.Sine;Nt.Expo;Nt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nx,ea,cl,c_,Ha,Fx,u_,v2=function(){return typeof window<"u"},Ps={},Ia=180/Math.PI,ul=Math.PI/180,Lo=Math.atan2,Bx=1e8,f_=/([A-Z])/g,x2=/(left|right|width|margin|padding|x)/i,y2=/[\s,\(]\S/,Kr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},S2=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},E2=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},M2=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},gb=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},_b=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},b2=function(e,t,n){return e.style[t]=n},T2=function(e,t,n){return e.style.setProperty(t,n)},A2=function(e,t,n){return e._gsap[t]=n},w2=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},C2=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},R2=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},dn="transform",Di=dn+"Origin",P2=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Ps&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Kr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(l){return n.tfm[l]=Es(r,l)}):this.tfm[e]=o.x?o[e]:Es(r,e),e===Di&&(this.tfm.zOrigin=o.zOrigin);else return Kr.transform.split(",").forEach(function(l){return i.call(n,l,t)});if(this.props.indexOf(dn)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Di,t,"")),e=dn}(s||t)&&this.props.push(e,t,s[e])},vb=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},L2=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(f_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=u_(),(!s||!s.isStart)&&!n[dn]&&(vb(n),r.zOrigin&&n[Di]&&(n[Di]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},xb=function(e,t){var n={target:e,props:[],revert:L2,save:P2};return e._gsap||Oi.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},yb,cg=function(e,t){var n=ea.createElementNS?ea.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ea.createElement(e);return n&&n.style?n:ea.createElement(e)},Qr=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(f_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,El(t)||t,1)||""},zx="O,Moz,ms,Ms,Webkit".split(","),El=function(e,t,n){var r=t||Ha,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(zx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?zx[o]:"")+e},ug=function(){v2()&&window.document&&(Nx=window,ea=Nx.document,cl=ea.documentElement,Ha=cg("div")||{style:{}},cg("div"),dn=El(dn),Di=dn+"Origin",Ha.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",yb=!!El("perspective"),u_=Oi.core.reverting,c_=1)},Ep=function i(e){var t=cg("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(cl.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),cl.removeChild(t),this.style.cssText=s,o},kx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Sb=function(e){var t;try{t=e.getBBox()}catch{t=Ep.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Ep||(t=Ep.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+kx(e,["x","cx","x1"])||0,y:+kx(e,["y","cy","y1"])||0,width:0,height:0}:t},Eb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Sb(e))},io=function(e,t){if(t){var n=e.style,r;t in Ps&&t!==Di&&(t=dn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(f_,"-$1").toLowerCase())):n.removeAttribute(t)}},ta=function(e,t,n,r,s,o){var l=new Li(e._pt,t,n,0,1,o?_b:gb);return e._pt=l,l.b=r,l.e=s,e._props.push(n),l},Hx={deg:1,rad:1,turn:1},D2={grid:1,flex:1},ha=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",l=Ha.style,u=x2.test(t),f=e.tagName.toLowerCase()==="svg",h=(f?"client":"offset")+(u?"Width":"Height"),p=100,m=r==="px",g=r==="%",y,x,_,v;if(r===o||!s||Hx[r]||Hx[o])return s;if(o!=="px"&&!m&&(s=i(e,t,n,"px")),v=e.getCTM&&Eb(e),(g||o==="%")&&(Ps[t]||~t.indexOf("adius")))return y=v?e.getBBox()[u?"width":"height"]:e[h],Mn(g?s/y*p:s/100*y);if(l[u?"width":"height"]=p+(m?o:r),x=~t.indexOf("adius")||r==="em"&&e.appendChild&&!f?e:e.parentNode,v&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===ea||!x.appendChild)&&(x=ea.body),_=x._gsap,_&&g&&_.width&&u&&_.time===qi.time&&!_.uncache)return Mn(s/_.width*p);if(g&&(t==="height"||t==="width")){var A=e.style[t];e.style[t]=p+r,y=e[h],A?e.style[t]=A:io(e,t)}else(g||o==="%")&&!D2[Qr(x,"display")]&&(l.position=Qr(e,"position")),x===e&&(l.position="static"),x.appendChild(Ha),y=Ha[h],x.removeChild(Ha),l.position="absolute";return u&&g&&(_=$a(x),_.time=qi.time,_.width=x[h]),Mn(m?y*s/p:y&&s?p/y*s:0)},Es=function(e,t,n,r){var s;return c_||ug(),t in Kr&&t!=="transform"&&(t=Kr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ps[t]&&t!=="transform"?(s=Xc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Sh(Qr(e,Di))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=yh[t]&&yh[t](e,t,n)||Qr(e,t)||BM(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ha(e,t,s,n)+n:s},I2=function(e,t,n,r){if(!n||n==="none"){var s=El(t,e,1),o=s&&Qr(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Qr(e,"borderTopColor"))}var l=new Li(this._pt,e.style,t,0,1,db),u=0,f=0,h,p,m,g,y,x,_,v,A,T,E,C;if(l.b=n,l.e=r,n+="",r+="",r==="auto"&&(x=e.style[t],e.style[t]=r,r=Qr(e,t)||r,x?e.style[t]=x:io(e,t)),h=[n,r],ib(h),n=h[0],r=h[1],m=n.match(tl)||[],C=r.match(tl)||[],C.length){for(;p=tl.exec(r);)_=p[0],A=r.substring(u,p.index),y?y=(y+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(y=1),_!==(x=m[f++]||"")&&(g=parseFloat(x)||0,E=x.substr((g+"").length),_.charAt(1)==="="&&(_=ll(g,_)+E),v=parseFloat(_),T=_.substr((v+"").length),u=tl.lastIndex-T.length,T||(T=T||Ki.units[t]||E,u===r.length&&(r+=T,l.e+=T)),E!==T&&(g=ha(e,t,x,T)||0),l._pt={_next:l._pt,p:A||f===1?A:",",s:g,c:v-g,m:y&&y<4||t==="zIndex"?Math.round:0});l.c=u<r.length?r.substring(u,r.length):""}else l.r=t==="display"&&r==="none"?_b:gb;return DM.test(r)&&(l.e=0),this._pt=l,l},Gx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},O2=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Gx[n]||n,t[1]=Gx[r]||r,t.join(" ")},U2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,l,u,f;if(s==="all"||s===!0)r.cssText="",u=1;else for(s=s.split(","),f=s.length;--f>-1;)l=s[f],Ps[l]&&(u=1,l=l==="transformOrigin"?Di:dn),io(n,l);u&&(io(n,dn),o&&(o.svg&&n.removeAttribute("transform"),Xc(n,1),o.uncache=1,vb(r)))}},yh={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Li(e._pt,t,n,0,0,U2);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},$c=[1,0,0,1,0,0],Mb={},bb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Wx=function(e){var t=Qr(e,dn);return bb(t)?$c:t.substr(7).match(LM).map(Mn)},h_=function(e,t){var n=e._gsap||$a(e),r=e.style,s=Wx(e),o,l,u,f;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?$c:s):(s===$c&&!e.offsetParent&&e!==cl&&!n.svg&&(u=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(f=1,l=e.nextElementSibling,cl.appendChild(e)),s=Wx(e),u?r.display=u:io(e,"display"),f&&(l?o.insertBefore(e,l):o?o.appendChild(e):cl.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},fg=function(e,t,n,r,s,o){var l=e._gsap,u=s||h_(e,!0),f=l.xOrigin||0,h=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,g=u[0],y=u[1],x=u[2],_=u[3],v=u[4],A=u[5],T=t.split(" "),E=parseFloat(T[0])||0,C=parseFloat(T[1])||0,R,w,z,G;n?u!==$c&&(w=g*_-y*x)&&(z=E*(_/w)+C*(-x/w)+(x*A-_*v)/w,G=E*(-y/w)+C*(g/w)-(g*A-y*v)/w,E=z,C=G):(R=Sb(e),E=R.x+(~T[0].indexOf("%")?E/100*R.width:E),C=R.y+(~(T[1]||T[0]).indexOf("%")?C/100*R.height:C)),r||r!==!1&&l.smooth?(v=E-f,A=C-h,l.xOffset=p+(v*g+A*x)-v,l.yOffset=m+(v*y+A*_)-A):l.xOffset=l.yOffset=0,l.xOrigin=E,l.yOrigin=C,l.smooth=!!r,l.origin=t,l.originIsAbsolute=!!n,e.style[Di]="0px 0px",o&&(ta(o,l,"xOrigin",f,E),ta(o,l,"yOrigin",h,C),ta(o,l,"xOffset",p,l.xOffset),ta(o,l,"yOffset",m,l.yOffset)),e.setAttribute("data-svg-origin",E+" "+C)},Xc=function(e,t){var n=e._gsap||new ob(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",l="deg",u=getComputedStyle(e),f=Qr(e,Di)||"0",h,p,m,g,y,x,_,v,A,T,E,C,R,w,z,G,M,U,V,oe,k,J,j,te,ie,ae,N,ce,Se,Je,ne,ue;return h=p=m=x=_=v=A=T=E=0,g=y=1,n.svg=!!(e.getCTM&&Eb(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[dn]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[dn]!=="none"?u[dn]:"")),r.scale=r.rotate=r.translate="none"),w=h_(e,n.svg),n.svg&&(n.uncache?(ie=e.getBBox(),f=n.xOrigin-ie.x+"px "+(n.yOrigin-ie.y)+"px",te=""):te=!t&&e.getAttribute("data-svg-origin"),fg(e,te||f,!!te||n.originIsAbsolute,n.smooth!==!1,w)),C=n.xOrigin||0,R=n.yOrigin||0,w!==$c&&(U=w[0],V=w[1],oe=w[2],k=w[3],h=J=w[4],p=j=w[5],w.length===6?(g=Math.sqrt(U*U+V*V),y=Math.sqrt(k*k+oe*oe),x=U||V?Lo(V,U)*Ia:0,A=oe||k?Lo(oe,k)*Ia+x:0,A&&(y*=Math.abs(Math.cos(A*ul))),n.svg&&(h-=C-(C*U+R*oe),p-=R-(C*V+R*k))):(ue=w[6],Je=w[7],N=w[8],ce=w[9],Se=w[10],ne=w[11],h=w[12],p=w[13],m=w[14],z=Lo(ue,Se),_=z*Ia,z&&(G=Math.cos(-z),M=Math.sin(-z),te=J*G+N*M,ie=j*G+ce*M,ae=ue*G+Se*M,N=J*-M+N*G,ce=j*-M+ce*G,Se=ue*-M+Se*G,ne=Je*-M+ne*G,J=te,j=ie,ue=ae),z=Lo(-oe,Se),v=z*Ia,z&&(G=Math.cos(-z),M=Math.sin(-z),te=U*G-N*M,ie=V*G-ce*M,ae=oe*G-Se*M,ne=k*M+ne*G,U=te,V=ie,oe=ae),z=Lo(V,U),x=z*Ia,z&&(G=Math.cos(z),M=Math.sin(z),te=U*G+V*M,ie=J*G+j*M,V=V*G-U*M,j=j*G-J*M,U=te,J=ie),_&&Math.abs(_)+Math.abs(x)>359.9&&(_=x=0,v=180-v),g=Mn(Math.sqrt(U*U+V*V+oe*oe)),y=Mn(Math.sqrt(j*j+ue*ue)),z=Lo(J,j),A=Math.abs(z)>2e-4?z*Ia:0,E=ne?1/(ne<0?-ne:ne):0),n.svg&&(te=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bb(Qr(e,dn)),te&&e.setAttribute("transform",te))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(g*=-1,A+=x<=0?180:-180,x+=x<=0?180:-180):(y*=-1,A+=A<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=m+o,n.scaleX=Mn(g),n.scaleY=Mn(y),n.rotation=Mn(x)+l,n.rotationX=Mn(_)+l,n.rotationY=Mn(v)+l,n.skewX=A+l,n.skewY=T+l,n.transformPerspective=E+o,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Di]=Sh(f)),n.xOffset=n.yOffset=0,n.force3D=Ki.force3D,n.renderTransform=n.svg?F2:yb?Tb:N2,n.uncache=0,n},Sh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Mp=function(e,t,n){var r=ri(t);return Mn(parseFloat(t)+parseFloat(ha(e,"x",n+"px",r)))+r},N2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tb(e,t)},wa="0deg",rc="0px",Ca=") ",Tb=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,l=n.y,u=n.z,f=n.rotation,h=n.rotationY,p=n.rotationX,m=n.skewX,g=n.skewY,y=n.scaleX,x=n.scaleY,_=n.transformPerspective,v=n.force3D,A=n.target,T=n.zOrigin,E="",C=v==="auto"&&e&&e!==1||v===!0;if(T&&(p!==wa||h!==wa)){var R=parseFloat(h)*ul,w=Math.sin(R),z=Math.cos(R),G;R=parseFloat(p)*ul,G=Math.cos(R),o=Mp(A,o,w*G*-T),l=Mp(A,l,-Math.sin(R)*-T),u=Mp(A,u,z*G*-T+T)}_!==rc&&(E+="perspective("+_+Ca),(r||s)&&(E+="translate("+r+"%, "+s+"%) "),(C||o!==rc||l!==rc||u!==rc)&&(E+=u!==rc||C?"translate3d("+o+", "+l+", "+u+") ":"translate("+o+", "+l+Ca),f!==wa&&(E+="rotate("+f+Ca),h!==wa&&(E+="rotateY("+h+Ca),p!==wa&&(E+="rotateX("+p+Ca),(m!==wa||g!==wa)&&(E+="skew("+m+", "+g+Ca),(y!==1||x!==1)&&(E+="scale("+y+", "+x+Ca),A.style[dn]=E||"translate(0, 0)"},F2=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,l=n.y,u=n.rotation,f=n.skewX,h=n.skewY,p=n.scaleX,m=n.scaleY,g=n.target,y=n.xOrigin,x=n.yOrigin,_=n.xOffset,v=n.yOffset,A=n.forceCSS,T=parseFloat(o),E=parseFloat(l),C,R,w,z,G;u=parseFloat(u),f=parseFloat(f),h=parseFloat(h),h&&(h=parseFloat(h),f+=h,u+=h),u||f?(u*=ul,f*=ul,C=Math.cos(u)*p,R=Math.sin(u)*p,w=Math.sin(u-f)*-m,z=Math.cos(u-f)*m,f&&(h*=ul,G=Math.tan(f-h),G=Math.sqrt(1+G*G),w*=G,z*=G,h&&(G=Math.tan(h),G=Math.sqrt(1+G*G),C*=G,R*=G)),C=Mn(C),R=Mn(R),w=Mn(w),z=Mn(z)):(C=p,z=m,R=w=0),(T&&!~(o+"").indexOf("px")||E&&!~(l+"").indexOf("px"))&&(T=ha(g,"x",o,"px"),E=ha(g,"y",l,"px")),(y||x||_||v)&&(T=Mn(T+y-(y*C+x*w)+_),E=Mn(E+x-(y*R+x*z)+v)),(r||s)&&(G=g.getBBox(),T=Mn(T+r/100*G.width),E=Mn(E+s/100*G.height)),G="matrix("+C+","+R+","+w+","+z+","+T+","+E+")",g.setAttribute("transform",G),A&&(g.style[dn]=G)},B2=function(e,t,n,r,s){var o=360,l=Gn(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Ia:1),f=u-r,h=r+f+"deg",p,m;return l&&(p=s.split("_")[1],p==="short"&&(f%=o,f!==f%(o/2)&&(f+=f<0?o:-o)),p==="cw"&&f<0?f=(f+o*Bx)%o-~~(f/o)*o:p==="ccw"&&f>0&&(f=(f-o*Bx)%o-~~(f/o)*o)),e._pt=m=new Li(e._pt,t,n,r,f,S2),m.e=h,m.u="deg",e._props.push(n),m},Vx=function(e,t){for(var n in t)e[n]=t[n];return e},z2=function(e,t,n){var r=Vx({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,l,u,f,h,p,m,g,y;r.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),o[dn]=t,l=Xc(n,1),io(n,dn),n.setAttribute("transform",f)):(f=getComputedStyle(n)[dn],o[dn]=t,l=Xc(n,1),o[dn]=f);for(u in Ps)f=r[u],h=l[u],f!==h&&s.indexOf(u)<0&&(g=ri(f),y=ri(h),p=g!==y?ha(n,u,f,y):parseFloat(f),m=parseFloat(h),e._pt=new Li(e._pt,l,u,p,m-p,lg),e._pt.u=y||0,e._props.push(u));Vx(l,r)};Pi("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(l){return e<2?i+l:"border"+l+i});yh[e>1?"border"+i:i]=function(l,u,f,h,p){var m,g;if(arguments.length<4)return m=o.map(function(y){return Es(l,y,f)}),g=m.join(" "),g.split(m[0]).length===5?m[0]:g;m=(h+"").split(" "),g={},o.forEach(function(y,x){return g[y]=m[x]=m[x]||m[(x-1)/2|0]}),l.init(u,g,p)}});var Ab={name:"css",register:ug,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,l=e.style,u=n.vars.startAt,f,h,p,m,g,y,x,_,v,A,T,E,C,R,w,z;c_||ug(),this.styles=this.styles||xb(e),z=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(h=t[x],!(Xi[x]&&lb(x,t,n,r,e,s)))){if(g=typeof h,y=yh[x],g==="function"&&(h=h.call(n,r,e,s),g=typeof h),g==="string"&&~h.indexOf("random(")&&(h=Gc(h)),y)y(this,e,x,h,n)&&(w=1);else if(x.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(x)+"").trim(),h+="",aa.lastIndex=0,aa.test(f)||(_=ri(f),v=ri(h)),v?_!==v&&(f=ha(e,x,f,v)+v):_&&(h+=_),this.add(l,"setProperty",f,h,r,s,0,0,x),o.push(x),z.push(x,0,l[x]);else if(g!=="undefined"){if(u&&x in u?(f=typeof u[x]=="function"?u[x].call(n,r,e,s):u[x],Gn(f)&&~f.indexOf("random(")&&(f=Gc(f)),ri(f+"")||f==="auto"||(f+=Ki.units[x]||ri(Es(e,x))||""),(f+"").charAt(1)==="="&&(f=Es(e,x))):f=Es(e,x),m=parseFloat(f),A=g==="string"&&h.charAt(1)==="="&&h.substr(0,2),A&&(h=h.substr(2)),p=parseFloat(h),x in Kr&&(x==="autoAlpha"&&(m===1&&Es(e,"visibility")==="hidden"&&p&&(m=0),z.push("visibility",0,l.visibility),ta(this,l,"visibility",m?"inherit":"hidden",p?"inherit":"hidden",!p)),x!=="scale"&&x!=="transform"&&(x=Kr[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in Ps,T){if(this.styles.save(x),E||(C=e._gsap,C.renderTransform&&!t.parseTransform||Xc(e,t.parseTransform),R=t.smoothOrigin!==!1&&C.smooth,E=this._pt=new Li(this._pt,l,dn,0,1,C.renderTransform,C,0,-1),E.dep=1),x==="scale")this._pt=new Li(this._pt,C,"scaleY",C.scaleY,(A?ll(C.scaleY,A+p):p)-C.scaleY||0,lg),this._pt.u=0,o.push("scaleY",x),x+="X";else if(x==="transformOrigin"){z.push(Di,0,l[Di]),h=O2(h),C.svg?fg(e,h,0,R,0,this):(v=parseFloat(h.split(" ")[2])||0,v!==C.zOrigin&&ta(this,C,"zOrigin",C.zOrigin,v),ta(this,l,x,Sh(f),Sh(h)));continue}else if(x==="svgOrigin"){fg(e,h,1,R,0,this);continue}else if(x in Mb){B2(this,C,x,m,A?ll(m,A+h):h);continue}else if(x==="smoothOrigin"){ta(this,C,"smooth",C.smooth,h);continue}else if(x==="force3D"){C[x]=h;continue}else if(x==="transform"){z2(this,h,e);continue}}else x in l||(x=El(x)||x);if(T||(p||p===0)&&(m||m===0)&&!y2.test(h)&&x in l)_=(f+"").substr((m+"").length),p||(p=0),v=ri(h)||(x in Ki.units?Ki.units[x]:_),_!==v&&(m=ha(e,x,f,v)),this._pt=new Li(this._pt,T?C:l,x,m,(A?ll(m,A+p):p)-m,!T&&(v==="px"||x==="zIndex")&&t.autoRound!==!1?M2:lg),this._pt.u=v||0,_!==v&&v!=="%"&&(this._pt.b=f,this._pt.r=E2);else if(x in l)I2.call(this,e,x,f,A?A+h:h);else if(x in e)this.add(e,x,f||e[x],A?A+h:h,r,s);else if(x!=="parseTransform"){e_(x,h);continue}T||(x in l?z.push(x,0,l[x]):z.push(x,1,f||e[x])),o.push(x)}}w&&pb(this)},render:function(e,t){if(t.tween._time||!u_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Es,aliases:Kr,getSetter:function(e,t,n){var r=Kr[t];return r&&r.indexOf(",")<0&&(t=r),t in Ps&&t!==Di&&(e._gsap.x||Es(e,"x"))?n&&Fx===n?t==="scale"?w2:A2:(Fx=n||{})&&(t==="scale"?C2:R2):e.style&&!Zg(e.style[t])?b2:~t.indexOf("-")?T2:o_(e,t)},core:{_removeProperty:io,_getMatrix:h_}};Oi.utils.checkPrefix=El;Oi.core.getStyleSaver=xb;(function(i,e,t,n){var r=Pi(i+","+e+","+t,function(s){Ps[s]=1});Pi(e,function(s){Ki.units[s]="deg",Mb[s]=1}),Kr[r[13]]=i+","+e,Pi(n,function(s){var o=s.split(":");Kr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Pi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ki.units[i]="px"});Oi.registerPlugin(Ab);var d_=Oi.registerPlugin(Ab)||Oi;d_.core.Tween;function $x(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function k2(i,e,t){return e&&$x(i.prototype,e),t&&$x(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qn,eh,Yi,na,ia,fl,wb,Oa,Lc,Cb,As,Pr,Rb,Pb=function(){return qn||typeof window<"u"&&(qn=window.gsap)&&qn.registerPlugin&&qn},Lb=1,il=[],Pt=[],es=[],Dc=Date.now,hg=function(e,t){return t},H2=function(){var e=Lc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Pt),r.push.apply(r,es),Pt=n,es=r,hg=function(o,l){return t[o](l)}},oa=function(e,t){return~es.indexOf(e)&&es[es.indexOf(e)+1][t]},Ic=function(e){return!!~Cb.indexOf(e)},hi=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},fi=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Ju="scrollLeft",Qu="scrollTop",dg=function(){return As&&As.isPressed||Pt.cache++},Eh=function(e,t){var n=function r(s){if(s||s===0){Lb&&(Yi.history.scrollRestoration="manual");var o=As&&As.isPressed;s=r.v=Math.round(s)||(As&&As.iOS?1:0),e(s),r.cacheID=Pt.cache,o&&hg("ss",s)}else(t||Pt.cache!==r.cacheID||hg("ref"))&&(r.cacheID=Pt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},xi={s:Ju,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Eh(function(i){return arguments.length?Yi.scrollTo(i,In.sc()):Yi.pageXOffset||na[Ju]||ia[Ju]||fl[Ju]||0})},In={s:Qu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xi,sc:Eh(function(i){return arguments.length?Yi.scrollTo(xi.sc(),i):Yi.pageYOffset||na[Qu]||ia[Qu]||fl[Qu]||0})},wi=function(e,t){return(t&&t._ctx&&t._ctx.selector||qn.utils.toArray)(e)[0]||(typeof e=="string"&&qn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},da=function(e,t){var n=t.s,r=t.sc;Ic(e)&&(e=na.scrollingElement||ia);var s=Pt.indexOf(e),o=r===In.sc?1:2;!~s&&(s=Pt.push(e)-1),Pt[s+o]||hi(e,"scroll",dg);var l=Pt[s+o],u=l||(Pt[s+o]=Eh(oa(e,n),!0)||(Ic(e)?r:Eh(function(f){return arguments.length?e[n]=f:e[n]})));return u.target=e,l||(u.smooth=qn.getProperty(e,"scrollBehavior")==="smooth"),u},pg=function(e,t,n){var r=e,s=e,o=Dc(),l=o,u=t||50,f=Math.max(500,u*3),h=function(y,x){var _=Dc();x||_-o>u?(s=r,r=y,l=o,o=_):n?r+=y:r=s+(y-s)/(_-l)*(o-l)},p=function(){s=r=n?0:r,l=o=0},m=function(y){var x=l,_=s,v=Dc();return(y||y===0)&&y!==r&&h(y),o===l||v-l>f?0:(r+(n?_:-_))/((n?v:o)-x)*1e3};return{update:h,reset:p,getVelocity:m}},sc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Xx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Db=function(){Lc=qn.core.globals().ScrollTrigger,Lc&&Lc.core&&H2()},Ib=function(e){return qn=e||Pb(),!eh&&qn&&typeof document<"u"&&document.body&&(Yi=window,na=document,ia=na.documentElement,fl=na.body,Cb=[Yi,na,ia,fl],qn.utils.clamp,Rb=qn.core.context||function(){},Oa="onpointerenter"in fl?"pointer":"mouse",wb=bn.isTouch=Yi.matchMedia&&Yi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Yi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Pr=bn.eventTypes=("ontouchstart"in ia?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ia?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Lb=0},500),Db(),eh=1),eh};xi.op=In;Pt.cache=0;var bn=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){eh||Ib(qn)||console.warn("Please gsap.registerPlugin(Observer)"),Lc||Db();var r=n.tolerance,s=n.dragMinimum,o=n.type,l=n.target,u=n.lineHeight,f=n.debounce,h=n.preventDefault,p=n.onStop,m=n.onStopDelay,g=n.ignore,y=n.wheelSpeed,x=n.event,_=n.onDragStart,v=n.onDragEnd,A=n.onDrag,T=n.onPress,E=n.onRelease,C=n.onRight,R=n.onLeft,w=n.onUp,z=n.onDown,G=n.onChangeX,M=n.onChangeY,U=n.onChange,V=n.onToggleX,oe=n.onToggleY,k=n.onHover,J=n.onHoverEnd,j=n.onMove,te=n.ignoreCheck,ie=n.isNormalizer,ae=n.onGestureStart,N=n.onGestureEnd,ce=n.onWheel,Se=n.onEnable,Je=n.onDisable,ne=n.onClick,ue=n.scrollSpeed,Te=n.capture,De=n.allowClicks,Oe=n.lockAxis,Ce=n.onLockAxis;this.target=l=wi(l)||ia,this.vars=n,g&&(g=qn.utils.toArray(g)),r=r||1e-9,s=s||0,y=y||1,ue=ue||1,o=o||"wheel,touch,pointer",f=f!==!1,u||(u=parseFloat(Yi.getComputedStyle(fl).lineHeight)||22);var gt,$e,q,st,be,Ge,Ue,K=this,et=0,O=0,P=n.passive||!h,Y=da(l,xi),me=da(l,In),de=Y(),_e=me(),we=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Pr[0]==="pointerdown",Ae=Ic(l),Ee=l.ownerDocument||na,ke=[0,0,0],tt=[0,0,0],pe=0,Tt=function(){return pe=Dc()},Xe=function(Ve,je){return(K.event=Ve)&&g&&~g.indexOf(Ve.target)||je&&we&&Ve.pointerType!=="touch"||te&&te(Ve,je)},at=function(){K._vx.reset(),K._vy.reset(),$e.pause(),p&&p(K)},We=function(){var Ve=K.deltaX=Xx(ke),je=K.deltaY=Xx(tt),ye=Math.abs(Ve)>=r,nt=Math.abs(je)>=r;U&&(ye||nt)&&U(K,Ve,je,ke,tt),ye&&(C&&K.deltaX>0&&C(K),R&&K.deltaX<0&&R(K),G&&G(K),V&&K.deltaX<0!=et<0&&V(K),et=K.deltaX,ke[0]=ke[1]=ke[2]=0),nt&&(z&&K.deltaY>0&&z(K),w&&K.deltaY<0&&w(K),M&&M(K),oe&&K.deltaY<0!=O<0&&oe(K),O=K.deltaY,tt[0]=tt[1]=tt[2]=0),(st||q)&&(j&&j(K),q&&(A(K),q=!1),st=!1),Ge&&!(Ge=!1)&&Ce&&Ce(K),be&&(ce(K),be=!1),gt=0},Ie=function(Ve,je,ye){ke[ye]+=Ve,tt[ye]+=je,K._vx.update(Ve),K._vy.update(je),f?gt||(gt=requestAnimationFrame(We)):We()},ot=function(Ve,je){Oe&&!Ue&&(K.axis=Ue=Math.abs(Ve)>Math.abs(je)?"x":"y",Ge=!0),Ue!=="y"&&(ke[2]+=Ve,K._vx.update(Ve,!0)),Ue!=="x"&&(tt[2]+=je,K._vy.update(je,!0)),f?gt||(gt=requestAnimationFrame(We)):We()},_t=function(Ve){if(!Xe(Ve,1)){Ve=sc(Ve,h);var je=Ve.clientX,ye=Ve.clientY,nt=je-K.x,Qe=ye-K.y,ft=K.isDragging;K.x=je,K.y=ye,(ft||Math.abs(K.startX-je)>=s||Math.abs(K.startY-ye)>=s)&&(A&&(q=!0),ft||(K.isDragging=!0),ot(nt,Qe),ft||_&&_(K))}},Dt=K.onPress=function(qe){Xe(qe,1)||qe&&qe.button||(K.axis=Ue=null,$e.pause(),K.isPressed=!0,qe=sc(qe),et=O=0,K.startX=K.x=qe.clientX,K.startY=K.y=qe.clientY,K._vx.reset(),K._vy.reset(),hi(ie?l:Ee,Pr[1],_t,P,!0),K.deltaX=K.deltaY=0,T&&T(K))},Pe=K.onRelease=function(qe){if(!Xe(qe,1)){fi(ie?l:Ee,Pr[1],_t,!0);var Ve=!isNaN(K.y-K.startY),je=K.isDragging,ye=je&&(Math.abs(K.x-K.startX)>3||Math.abs(K.y-K.startY)>3),nt=sc(qe);!ye&&Ve&&(K._vx.reset(),K._vy.reset(),h&&De&&qn.delayedCall(.08,function(){if(Dc()-pe>300&&!qe.defaultPrevented){if(qe.target.click)qe.target.click();else if(Ee.createEvent){var Qe=Ee.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,Yi,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),qe.target.dispatchEvent(Qe)}}})),K.isDragging=K.isGesturing=K.isPressed=!1,p&&je&&!ie&&$e.restart(!0),v&&je&&v(K),E&&E(K,ye)}},Ct=function(Ve){return Ve.touches&&Ve.touches.length>1&&(K.isGesturing=!0)&&ae(Ve,K.isDragging)},F=function(){return(K.isGesturing=!1)||N(K)},ve=function(Ve){if(!Xe(Ve)){var je=Y(),ye=me();Ie((je-de)*ue,(ye-_e)*ue,1),de=je,_e=ye,p&&$e.restart(!0)}},xe=function(Ve){if(!Xe(Ve)){Ve=sc(Ve,h),ce&&(be=!0);var je=(Ve.deltaMode===1?u:Ve.deltaMode===2?Yi.innerHeight:1)*y;Ie(Ve.deltaX*je,Ve.deltaY*je,0),p&&!ie&&$e.restart(!0)}},Ne=function(Ve){if(!Xe(Ve)){var je=Ve.clientX,ye=Ve.clientY,nt=je-K.x,Qe=ye-K.y;K.x=je,K.y=ye,st=!0,p&&$e.restart(!0),(nt||Qe)&&ot(nt,Qe)}},Ze=function(Ve){K.event=Ve,k(K)},vt=function(Ve){K.event=Ve,J(K)},It=function(Ve){return Xe(Ve)||sc(Ve,h)&&ne(K)};$e=K._dc=qn.delayedCall(m||.25,at).pause(),K.deltaX=K.deltaY=0,K._vx=pg(0,50,!0),K._vy=pg(0,50,!0),K.scrollX=Y,K.scrollY=me,K.isDragging=K.isGesturing=K.isPressed=!1,Rb(this),K.enable=function(qe){return K.isEnabled||(hi(Ae?Ee:l,"scroll",dg),o.indexOf("scroll")>=0&&hi(Ae?Ee:l,"scroll",ve,P,Te),o.indexOf("wheel")>=0&&hi(l,"wheel",xe,P,Te),(o.indexOf("touch")>=0&&wb||o.indexOf("pointer")>=0)&&(hi(l,Pr[0],Dt,P,Te),hi(Ee,Pr[2],Pe),hi(Ee,Pr[3],Pe),De&&hi(l,"click",Tt,!0,!0),ne&&hi(l,"click",It),ae&&hi(Ee,"gesturestart",Ct),N&&hi(Ee,"gestureend",F),k&&hi(l,Oa+"enter",Ze),J&&hi(l,Oa+"leave",vt),j&&hi(l,Oa+"move",Ne)),K.isEnabled=!0,qe&&qe.type&&Dt(qe),Se&&Se(K)),K},K.disable=function(){K.isEnabled&&(il.filter(function(qe){return qe!==K&&Ic(qe.target)}).length||fi(Ae?Ee:l,"scroll",dg),K.isPressed&&(K._vx.reset(),K._vy.reset(),fi(ie?l:Ee,Pr[1],_t,!0)),fi(Ae?Ee:l,"scroll",ve,Te),fi(l,"wheel",xe,Te),fi(l,Pr[0],Dt,Te),fi(Ee,Pr[2],Pe),fi(Ee,Pr[3],Pe),fi(l,"click",Tt,!0),fi(l,"click",It),fi(Ee,"gesturestart",Ct),fi(Ee,"gestureend",F),fi(l,Oa+"enter",Ze),fi(l,Oa+"leave",vt),fi(l,Oa+"move",Ne),K.isEnabled=K.isPressed=K.isDragging=!1,Je&&Je(K))},K.kill=K.revert=function(){K.disable();var qe=il.indexOf(K);qe>=0&&il.splice(qe,1),As===K&&(As=0)},il.push(K),ie&&Ic(l)&&(As=K),K.enable(x)},k2(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();bn.version="3.12.5";bn.create=function(i){return new bn(i)};bn.register=Ib;bn.getAll=function(){return il.slice()};bn.getById=function(i){return il.filter(function(e){return e.vars.id===i})[0]};Pb()&&qn.registerPlugin(bn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var He,Jo,Ut,fn,Lr,an,Ob,Mh,qc,Oc,Mc,ef,ni,Wh,mg,mi,qx,Yx,Qo,Ub,bp,Nb,pi,gg,Fb,Bb,Js,_g,p_,hl,m_,bh,vg,Tp,tf=1,ii=Date.now,Ap=ii(),xr=0,bc=0,jx=function(e,t,n){var r=$i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Kx=function(e,t){return t&&(!$i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},G2=function i(){return bc&&requestAnimationFrame(i)},Zx=function(){return Wh=1},Jx=function(){return Wh=0},$r=function(e){return e},Tc=function(e){return Math.round(e*1e5)/1e5||0},zb=function(){return typeof window<"u"},kb=function(){return He||zb()&&(He=window.gsap)&&He.registerPlugin&&He},ro=function(e){return!!~Ob.indexOf(e)},Hb=function(e){return(e==="Height"?m_:Ut["inner"+e])||Lr["client"+e]||an["client"+e]},Gb=function(e){return oa(e,"getBoundingClientRect")||(ro(e)?function(){return sh.width=Ut.innerWidth,sh.height=m_,sh}:function(){return Ms(e)})},W2=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=oa(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Hb(s):e["client"+s])||0}},V2=function(e,t){return!t||~es.indexOf(e)?Gb(e):function(){return sh}},Zr=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=oa(e,n))?o()-Gb(e)()[s]:ro(e)?(Lr[n]||an[n])-Hb(r):e[n]-e["offset"+r])},nf=function(e,t){for(var n=0;n<Qo.length;n+=3)(!t||~t.indexOf(Qo[n+1]))&&e(Qo[n],Qo[n+1],Qo[n+2])},$i=function(e){return typeof e=="string"},yi=function(e){return typeof e=="function"},Ac=function(e){return typeof e=="number"},Ua=function(e){return typeof e=="object"},ac=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},wp=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Do=Math.abs,Wb="left",Vb="top",g_="right",__="bottom",ja="width",Ka="height",Uc="Right",Nc="Left",Fc="Top",Bc="Bottom",An="padding",dr="margin",Ml="Width",v_="Height",Dn="px",pr=function(e){return Ut.getComputedStyle(e)},$2=function(e){var t=pr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Qx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ms=function(e,t){var n=t&&pr(e)[mg]!=="matrix(1, 0, 0, 1, 0, 0)"&&He.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Th=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},$b=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},X2=function(e){return function(t){return He.utils.snap($b(e),t)}},x_=function(e){var t=He.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var l;if(!s)return t(r);if(s>0){for(r-=o,l=0;l<n.length;l++)if(n[l]>=r)return n[l];return n[l-1]}else for(l=n.length,r+=o;l--;)if(n[l]<=r)return n[l];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var l=t(r);return!s||Math.abs(l-r)<o||l-r<0==s<0?l:t(s<0?r-e:r+e)}},q2=function(e){return function(t,n){return x_($b(e))(t,n.direction)}},rf=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},zn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Bn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},sf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ey={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},af={toggleActions:"play",anticipatePin:0},Ah={top:0,left:0,center:.5,bottom:1,right:1},th=function(e,t){if($i(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Ah?Ah[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},of=function(e,t,n,r,s,o,l,u){var f=s.startColor,h=s.endColor,p=s.fontSize,m=s.indent,g=s.fontWeight,y=fn.createElement("div"),x=ro(n)||oa(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,v=x?an:n,A=e.indexOf("start")!==-1,T=A?f:h,E="border-color:"+T+";font-size:"+p+";color:"+T+";font-weight:"+g+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return E+="position:"+((_||u)&&x?"fixed;":"absolute;"),(_||u||!x)&&(E+=(r===In?g_:__)+":"+(o+parseFloat(m))+"px;"),l&&(E+="box-sizing:border-box;text-align:left;width:"+l.offsetWidth+"px;"),y._isStart=A,y.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),y.style.cssText=E,y.innerText=t||t===0?e+"-"+t:e,v.children[0]?v.insertBefore(y,v.children[0]):v.appendChild(y),y._offset=y["offset"+r.op.d2],nh(y,0,r,A),y},nh=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],l=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+Ml]=1,s["border"+l+Ml]=0,s[n.p]=t+"px",He.set(e,s)},At=[],xg={},Yc,ty=function(){return ii()-xr>34&&(Yc||(Yc=requestAnimationFrame(Cs)))},Io=function(){(!pi||!pi.isPressed||pi.startX>an.clientWidth)&&(Pt.cache++,pi?Yc||(Yc=requestAnimationFrame(Cs)):Cs(),xr||ao("scrollStart"),xr=ii())},Cp=function(){Bb=Ut.innerWidth,Fb=Ut.innerHeight},wc=function(){Pt.cache++,!ni&&!Nb&&!fn.fullscreenElement&&!fn.webkitFullscreenElement&&(!gg||Bb!==Ut.innerWidth||Math.abs(Ut.innerHeight-Fb)>Ut.innerHeight*.25)&&Mh.restart(!0)},so={},Y2=[],Xb=function i(){return Bn(yt,"scrollEnd",i)||Ga(!0)},ao=function(e){return so[e]&&so[e].map(function(t){return t()})||Y2},Vi=[],qb=function(e){for(var t=0;t<Vi.length;t+=5)(!e||Vi[t+4]&&Vi[t+4].query===e)&&(Vi[t].style.cssText=Vi[t+1],Vi[t].getBBox&&Vi[t].setAttribute("transform",Vi[t+2]||""),Vi[t+3].uncache=1)},y_=function(e,t){var n;for(mi=0;mi<At.length;mi++)n=At[mi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));bh=!0,t&&qb(t),t||ao("revert")},Yb=function(e,t){Pt.cache++,(t||!gi)&&Pt.forEach(function(n){return yi(n)&&n.cacheID++&&(n.rec=0)}),$i(e)&&(Ut.history.scrollRestoration=p_=e)},gi,Za=0,ny,j2=function(){if(ny!==Za){var e=ny=Za;requestAnimationFrame(function(){return e===Za&&Ga(!0)})}},jb=function(){an.appendChild(hl),m_=!pi&&hl.offsetHeight||Ut.innerHeight,an.removeChild(hl)},iy=function(e){return qc(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ga=function(e,t){if(xr&&!e&&!bh){zn(yt,"scrollEnd",Xb);return}jb(),gi=yt.isRefreshing=!0,Pt.forEach(function(r){return yi(r)&&++r.cacheID&&(r.rec=r())});var n=ao("refreshInit");Ub&&yt.sort(),t||y_(),Pt.forEach(function(r){yi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),At.slice(0).forEach(function(r){return r.refresh()}),bh=!1,At.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),vg=1,iy(!0),At.forEach(function(r){var s=Zr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,l=r._startClamp&&r.start>=s;(o||l)&&r.setPositions(l?s-1:r.start,o?Math.max(l?s:r.start+1,s):r.end,!0)}),iy(!1),vg=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Pt.forEach(function(r){yi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Yb(p_,1),Mh.pause(),Za++,gi=2,Cs(2),At.forEach(function(r){return yi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),gi=yt.isRefreshing=!1,ao("refresh")},yg=0,ih=1,zc,Cs=function(e){if(e===2||!gi&&!bh){yt.isUpdating=!0,zc&&zc.update(0);var t=At.length,n=ii(),r=n-Ap>=50,s=t&&At[0].scroll();if(ih=yg>s?-1:1,gi||(yg=s),r&&(xr&&!Wh&&n-xr>200&&(xr=0,ao("scrollEnd")),Mc=Ap,Ap=n),ih<0){for(mi=t;mi-- >0;)At[mi]&&At[mi].update(0,r);ih=1}else for(mi=0;mi<t;mi++)At[mi]&&At[mi].update(0,r);yt.isUpdating=!1}Yc=0},Sg=[Wb,Vb,__,g_,dr+Bc,dr+Uc,dr+Fc,dr+Nc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],rh=Sg.concat([ja,Ka,"boxSizing","max"+Ml,"max"+v_,"position",dr,An,An+Fc,An+Uc,An+Bc,An+Nc]),K2=function(e,t,n){dl(n);var r=e._gsap;if(r.spacerIsNative)dl(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Rp=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Sg.length,o=t.style,l=e.style,u;s--;)u=Sg[s],o[u]=n[u];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),l[__]=l[g_]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ja]=Th(e,xi)+Dn,o[Ka]=Th(e,In)+Dn,o[An]=l[dr]=l[Vb]=l[Wb]="0",dl(r),l[ja]=l["max"+Ml]=n[ja],l[Ka]=l["max"+v_]=n[Ka],l[An]=n[An],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Z2=/([A-Z])/g,dl=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||He.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Z2,"-$1").toLowerCase())}},lf=function(e){for(var t=rh.length,n=e.style,r=[],s=0;s<t;s++)r.push(rh[s],n[rh[s]]);return r.t=e,r},J2=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,l;o<s;o+=2)l=e[o],r.push(l,l in t?t[l]:e[o+1]);return r.t=e.t,r},sh={left:0,top:0},ry=function(e,t,n,r,s,o,l,u,f,h,p,m,g,y){yi(e)&&(e=e(u)),$i(e)&&e.substr(0,3)==="max"&&(e=m+(e.charAt(4)==="="?th("0"+e.substr(3),n):0));var x=g?g.time():0,_,v,A;if(g&&g.seek(0),isNaN(e)||(e=+e),Ac(e))g&&(e=He.utils.mapRange(g.scrollTrigger.start,g.scrollTrigger.end,0,m,e)),l&&nh(l,n,r,!0);else{yi(t)&&(t=t(u));var T=(e||"0").split(" "),E,C,R,w;A=wi(t,u)||an,E=Ms(A)||{},(!E||!E.left&&!E.top)&&pr(A).display==="none"&&(w=A.style.display,A.style.display="block",E=Ms(A),w?A.style.display=w:A.style.removeProperty("display")),C=th(T[0],E[r.d]),R=th(T[1]||"0",n),e=E[r.p]-f[r.p]-h+C+s-R,l&&nh(l,R,r,n-R<20||l._isStart&&R>20),n-=n-R}if(y&&(u[y]=e||-.001,e<0&&(e=0)),o){var z=e+n,G=o._isStart;_="scroll"+r.d2,nh(o,z,r,G&&z>20||!G&&(p?Math.max(an[_],Lr[_]):o.parentNode[_])<=z+1),p&&(f=Ms(l),p&&(o.style[r.op.p]=f[r.op.p]-r.op.m-o._offset+Dn))}return g&&A&&(_=Ms(A),g.seek(m),v=Ms(A),g._caScrollDist=_[r.p]-v[r.p],e=e/g._caScrollDist*m),g&&g.seek(x),g?e:Math.round(e)},Q2=/(webkit|moz|length|cssText|inset)/i,sy=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,l;if(t===an){e._stOrig=s.cssText,l=pr(e);for(o in l)!+o&&!Q2.test(o)&&l[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=l[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;He.core.getCache(e).uncache=1,t.appendChild(e)}},Kb=function(e,t,n){var r=t,s=r;return function(o){var l=Math.round(e());return l!==r&&l!==s&&Math.abs(l-r)>3&&Math.abs(l-s)>3&&(o=l,n&&n()),s=r,r=o,o}},cf=function(e,t,n){var r={};r[t.p]="+="+n,He.set(e,r)},ay=function(e,t){var n=da(e,t),r="_scroll"+t.p2,s=function o(l,u,f,h,p){var m=o.tween,g=u.onComplete,y={};f=f||n();var x=Kb(n,f,function(){m.kill(),o.tween=0});return p=h&&p||0,h=h||l-f,m&&m.kill(),u[r]=l,u.inherit=!1,u.modifiers=y,y[r]=function(){return x(f+h*m.ratio+p*m.ratio*m.ratio)},u.onUpdate=function(){Pt.cache++,o.tween&&Cs()},u.onComplete=function(){o.tween=0,g&&g.call(m)},m=o.tween=He.to(e,u),m};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},zn(e,"wheel",n.wheelHandler),yt.isTouch&&zn(e,"touchmove",n.wheelHandler),s},yt=function(){function i(t,n){Jo||i.register(He)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),_g(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!bc){this.update=this.refresh=this.kill=$r;return}n=Qx($i(n)||Ac(n)||n.nodeType?{trigger:n}:n,af);var s=n,o=s.onUpdate,l=s.toggleClass,u=s.id,f=s.onToggle,h=s.onRefresh,p=s.scrub,m=s.trigger,g=s.pin,y=s.pinSpacing,x=s.invalidateOnRefresh,_=s.anticipatePin,v=s.onScrubComplete,A=s.onSnapComplete,T=s.once,E=s.snap,C=s.pinReparent,R=s.pinSpacer,w=s.containerAnimation,z=s.fastScrollEnd,G=s.preventOverlaps,M=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xi:In,U=!p&&p!==0,V=wi(n.scroller||Ut),oe=He.core.getCache(V),k=ro(V),J=("pinType"in n?n.pinType:oa(V,"pinType")||k&&"fixed")==="fixed",j=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],te=U&&n.toggleActions.split(" "),ie="markers"in n?n.markers:af.markers,ae=k?0:parseFloat(pr(V)["border"+M.p2+Ml])||0,N=this,ce=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Se=W2(V,k,M),Je=V2(V,k),ne=0,ue=0,Te=0,De=da(V,M),Oe,Ce,gt,$e,q,st,be,Ge,Ue,K,et,O,P,Y,me,de,_e,we,Ae,Ee,ke,tt,pe,Tt,Xe,at,We,Ie,ot,_t,Dt,Pe,Ct,F,ve,xe,Ne,Ze,vt;if(N._startClamp=N._endClamp=!1,N._dir=M,_*=45,N.scroller=V,N.scroll=w?w.time.bind(w):De,$e=De(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(Ub=1,n.refreshPriority===-9999&&(zc=N)),oe.tweenScroll=oe.tweenScroll||{top:ay(V,In),left:ay(V,xi)},N.tweenTo=Oe=oe.tweenScroll[M.p],N.scrubDuration=function(ye){Ct=Ac(ye)&&ye,Ct?Pe?Pe.duration(ye):Pe=He.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ct,paused:!0,onComplete:function(){return v&&v(N)}}):(Pe&&Pe.progress(1).kill(),Pe=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(p),_t=0,u||(u=r.vars.id)),E&&((!Ua(E)||E.push)&&(E={snapTo:E}),"scrollBehavior"in an.style&&He.set(k?[an,Lr]:V,{scrollBehavior:"auto"}),Pt.forEach(function(ye){return yi(ye)&&ye.target===(k?fn.scrollingElement||Lr:V)&&(ye.smooth=!1)}),gt=yi(E.snapTo)?E.snapTo:E.snapTo==="labels"?X2(r):E.snapTo==="labelsDirectional"?q2(r):E.directional!==!1?function(ye,nt){return x_(E.snapTo)(ye,ii()-ue<500?0:nt.direction)}:He.utils.snap(E.snapTo),F=E.duration||{min:.1,max:2},F=Ua(F)?Oc(F.min,F.max):Oc(F,F),ve=He.delayedCall(E.delay||Ct/2||.1,function(){var ye=De(),nt=ii()-ue<500,Qe=Oe.tween;if((nt||Math.abs(N.getVelocity())<10)&&!Qe&&!Wh&&ne!==ye){var ft=(ye-st)/Y,tn=r&&!U?r.totalProgress():ft,St=nt?0:(tn-Dt)/(ii()-Mc)*1e3||0,$t=He.utils.clamp(-ft,1-ft,Do(St/2)*St/.185),yn=ft+(E.inertia===!1?0:$t),jt,Xt,zt=E,Zn=zt.onStart,I=zt.onInterrupt,$=zt.onComplete;if(jt=gt(yn,N),Ac(jt)||(jt=yn),Xt=Math.round(st+jt*Y),ye<=be&&ye>=st&&Xt!==ye){if(Qe&&!Qe._initted&&Qe.data<=Do(Xt-ye))return;E.inertia===!1&&($t=jt-ft),Oe(Xt,{duration:F(Do(Math.max(Do(yn-tn),Do(jt-tn))*.185/St/.05||0)),ease:E.ease||"power3",data:Do(Xt-ye),onInterrupt:function(){return ve.restart(!0)&&I&&I(N)},onComplete:function(){N.update(),ne=De(),r&&(Pe?Pe.resetTo("totalProgress",jt,r._tTime/r._tDur):r.progress(jt)),_t=Dt=r&&!U?r.totalProgress():N.progress,A&&A(N),$&&$(N)}},ye,$t*Y,Xt-ye-$t*Y),Zn&&Zn(N,Oe.tween)}}else N.isActive&&ne!==ye&&ve.restart(!0)}).pause()),u&&(xg[u]=N),m=N.trigger=wi(m||g!==!0&&g),vt=m&&m._gsap&&m._gsap.stRevert,vt&&(vt=vt(N)),g=g===!0?m:wi(g),$i(l)&&(l={targets:m,className:l}),g&&(y===!1||y===dr||(y=!y&&g.parentNode&&g.parentNode.style&&pr(g.parentNode).display==="flex"?!1:An),N.pin=g,Ce=He.core.getCache(g),Ce.spacer?me=Ce.pinState:(R&&(R=wi(R),R&&!R.nodeType&&(R=R.current||R.nativeElement),Ce.spacerIsNative=!!R,R&&(Ce.spacerState=lf(R))),Ce.spacer=we=R||fn.createElement("div"),we.classList.add("pin-spacer"),u&&we.classList.add("pin-spacer-"+u),Ce.pinState=me=lf(g)),n.force3D!==!1&&He.set(g,{force3D:!0}),N.spacer=we=Ce.spacer,ot=pr(g),Tt=ot[y+M.os2],Ee=He.getProperty(g),ke=He.quickSetter(g,M.a,Dn),Rp(g,we,ot),_e=lf(g)),ie){O=Ua(ie)?Qx(ie,ey):ey,K=of("scroller-start",u,V,M,O,0),et=of("scroller-end",u,V,M,O,0,K),Ae=K["offset"+M.op.d2];var It=wi(oa(V,"content")||V);Ge=this.markerStart=of("start",u,It,M,O,Ae,0,w),Ue=this.markerEnd=of("end",u,It,M,O,Ae,0,w),w&&(Ze=He.quickSetter([Ge,Ue],M.a,Dn)),!J&&!(es.length&&oa(V,"fixedMarkers")===!0)&&($2(k?an:V),He.set([K,et],{force3D:!0}),at=He.quickSetter(K,M.a,Dn),Ie=He.quickSetter(et,M.a,Dn))}if(w){var qe=w.vars.onUpdate,Ve=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){N.update(0,0,1),qe&&qe.apply(w,Ve||[])})}if(N.previous=function(){return At[At.indexOf(N)-1]},N.next=function(){return At[At.indexOf(N)+1]},N.revert=function(ye,nt){if(!nt)return N.kill(!0);var Qe=ye!==!1||!N.enabled,ft=ni;Qe!==N.isReverted&&(Qe&&(xe=Math.max(De(),N.scroll.rec||0),Te=N.progress,Ne=r&&r.progress()),Ge&&[Ge,Ue,K,et].forEach(function(tn){return tn.style.display=Qe?"none":"block"}),Qe&&(ni=N,N.update(Qe)),g&&(!C||!N.isActive)&&(Qe?K2(g,we,me):Rp(g,we,pr(g),Xe)),Qe||N.update(Qe),ni=ft,N.isReverted=Qe)},N.refresh=function(ye,nt,Qe,ft){if(!((ni||!N.enabled)&&!nt)){if(g&&ye&&xr){zn(i,"scrollEnd",Xb);return}!gi&&ce&&ce(N),ni=N,Oe.tween&&!Qe&&(Oe.tween.kill(),Oe.tween=0),Pe&&Pe.pause(),x&&r&&r.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var tn=Se(),St=Je(),$t=w?w.duration():Zr(V,M),yn=Y<=.01,jt=0,Xt=ft||0,zt=Ua(Qe)?Qe.end:n.end,Zn=n.endTrigger||m,I=Ua(Qe)?Qe.start:n.start||(n.start===0||!m?0:g?"0 0":"0 100%"),$=N.pinnedContainer=n.pinnedContainer&&wi(n.pinnedContainer,N),ee=m&&Math.max(0,At.indexOf(N))||0,Q=ee,Z,Me,Fe,it,Be,Ye,rt,ht,Kt,mn,Ft,Wn,Ht;for(ie&&Ua(Qe)&&(Wn=He.getProperty(K,M.p),Ht=He.getProperty(et,M.p));Q--;)Ye=At[Q],Ye.end||Ye.refresh(0,1)||(ni=N),rt=Ye.pin,rt&&(rt===m||rt===g||rt===$)&&!Ye.isReverted&&(mn||(mn=[]),mn.unshift(Ye),Ye.revert(!0,!0)),Ye!==At[Q]&&(ee--,Q--);for(yi(I)&&(I=I(N)),I=jx(I,"start",N),st=ry(I,m,tn,M,De(),Ge,K,N,St,ae,J,$t,w,N._startClamp&&"_startClamp")||(g?-.001:0),yi(zt)&&(zt=zt(N)),$i(zt)&&!zt.indexOf("+=")&&(~zt.indexOf(" ")?zt=($i(I)?I.split(" ")[0]:"")+zt:(jt=th(zt.substr(2),tn),zt=$i(I)?I:(w?He.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,st):st)+jt,Zn=m)),zt=jx(zt,"end",N),be=Math.max(st,ry(zt||(Zn?"100% 0":$t),Zn,tn,M,De()+jt,Ue,et,N,St,ae,J,$t,w,N._endClamp&&"_endClamp"))||-.001,jt=0,Q=ee;Q--;)Ye=At[Q],rt=Ye.pin,rt&&Ye.start-Ye._pinPush<=st&&!w&&Ye.end>0&&(Z=Ye.end-(N._startClamp?Math.max(0,Ye.start):Ye.start),(rt===m&&Ye.start-Ye._pinPush<st||rt===$)&&isNaN(I)&&(jt+=Z*(1-Ye.progress)),rt===g&&(Xt+=Z));if(st+=jt,be+=jt,N._startClamp&&(N._startClamp+=jt),N._endClamp&&!gi&&(N._endClamp=be||-.001,be=Math.min(be,Zr(V,M))),Y=be-st||(st-=.01)&&.001,yn&&(Te=He.utils.clamp(0,1,He.utils.normalize(st,be,xe))),N._pinPush=Xt,Ge&&jt&&(Z={},Z[M.a]="+="+jt,$&&(Z[M.p]="-="+De()),He.set([Ge,Ue],Z)),g&&!(vg&&N.end>=Zr(V,M)))Z=pr(g),it=M===In,Fe=De(),tt=parseFloat(Ee(M.a))+Xt,!$t&&be>1&&(Ft=(k?fn.scrollingElement||Lr:V).style,Ft={style:Ft,value:Ft["overflow"+M.a.toUpperCase()]},k&&pr(an)["overflow"+M.a.toUpperCase()]!=="scroll"&&(Ft.style["overflow"+M.a.toUpperCase()]="scroll")),Rp(g,we,Z),_e=lf(g),Me=Ms(g,!0),ht=J&&da(V,it?xi:In)(),y?(Xe=[y+M.os2,Y+Xt+Dn],Xe.t=we,Q=y===An?Th(g,M)+Y+Xt:0,Q&&(Xe.push(M.d,Q+Dn),we.style.flexBasis!=="auto"&&(we.style.flexBasis=Q+Dn)),dl(Xe),$&&At.forEach(function(dt){dt.pin===$&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),J&&De(xe)):(Q=Th(g,M),Q&&we.style.flexBasis!=="auto"&&(we.style.flexBasis=Q+Dn)),J&&(Be={top:Me.top+(it?Fe-st:ht)+Dn,left:Me.left+(it?ht:Fe-st)+Dn,boxSizing:"border-box",position:"fixed"},Be[ja]=Be["max"+Ml]=Math.ceil(Me.width)+Dn,Be[Ka]=Be["max"+v_]=Math.ceil(Me.height)+Dn,Be[dr]=Be[dr+Fc]=Be[dr+Uc]=Be[dr+Bc]=Be[dr+Nc]="0",Be[An]=Z[An],Be[An+Fc]=Z[An+Fc],Be[An+Uc]=Z[An+Uc],Be[An+Bc]=Z[An+Bc],Be[An+Nc]=Z[An+Nc],de=J2(me,Be,C),gi&&De(0)),r?(Kt=r._initted,bp(1),r.render(r.duration(),!0,!0),pe=Ee(M.a)-tt+Y+Xt,We=Math.abs(Y-pe)>1,J&&We&&de.splice(de.length-2,2),r.render(0,!0,!0),Kt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),bp(0)):pe=Y,Ft&&(Ft.value?Ft.style["overflow"+M.a.toUpperCase()]=Ft.value:Ft.style.removeProperty("overflow-"+M.a));else if(m&&De()&&!w)for(Me=m.parentNode;Me&&Me!==an;)Me._pinOffset&&(st-=Me._pinOffset,be-=Me._pinOffset),Me=Me.parentNode;mn&&mn.forEach(function(dt){return dt.revert(!1,!0)}),N.start=st,N.end=be,$e=q=gi?xe:De(),!w&&!gi&&($e<xe&&De(xe),N.scroll.rec=0),N.revert(!1,!0),ue=ii(),ve&&(ne=-1,ve.restart(!0)),ni=0,r&&U&&(r._initted||Ne)&&r.progress()!==Ne&&r.progress(Ne||0,!0).render(r.time(),!0,!0),(yn||Te!==N.progress||w||x)&&(r&&!U&&r.totalProgress(w&&st<-.001&&!Te?He.utils.normalize(st,be,0):Te,!0),N.progress=yn||($e-st)/Y===Te?0:Te),g&&y&&(we._pinOffset=Math.round(N.progress*pe)),Pe&&Pe.invalidate(),isNaN(Wn)||(Wn-=He.getProperty(K,M.p),Ht-=He.getProperty(et,M.p),cf(K,M,Wn),cf(Ge,M,Wn-(ft||0)),cf(et,M,Ht),cf(Ue,M,Ht-(ft||0))),yn&&!gi&&N.update(),h&&!gi&&!P&&(P=!0,h(N),P=!1)}},N.getVelocity=function(){return(De()-q)/(ii()-Mc)*1e3||0},N.endAnimation=function(){ac(N.callbackAnimation),r&&(Pe?Pe.progress(1):r.paused()?U||ac(r,N.direction<0,1):ac(r,r.reversed()))},N.labelToScroll=function(ye){return r&&r.labels&&(st||N.refresh()||st)+r.labels[ye]/r.duration()*Y||0},N.getTrailing=function(ye){var nt=At.indexOf(N),Qe=N.direction>0?At.slice(0,nt).reverse():At.slice(nt+1);return($i(ye)?Qe.filter(function(ft){return ft.vars.preventOverlaps===ye}):Qe).filter(function(ft){return N.direction>0?ft.end<=st:ft.start>=be})},N.update=function(ye,nt,Qe){if(!(w&&!Qe&&!ye)){var ft=gi===!0?xe:N.scroll(),tn=ye?0:(ft-st)/Y,St=tn<0?0:tn>1?1:tn||0,$t=N.progress,yn,jt,Xt,zt,Zn,I,$,ee;if(nt&&(q=$e,$e=w?De():ft,E&&(Dt=_t,_t=r&&!U?r.totalProgress():St)),_&&g&&!ni&&!tf&&xr&&(!St&&st<ft+(ft-q)/(ii()-Mc)*_?St=1e-4:St===1&&be>ft+(ft-q)/(ii()-Mc)*_&&(St=.9999)),St!==$t&&N.enabled){if(yn=N.isActive=!!St&&St<1,jt=!!$t&&$t<1,I=yn!==jt,Zn=I||!!St!=!!$t,N.direction=St>$t?1:-1,N.progress=St,Zn&&!ni&&(Xt=St&&!$t?0:St===1?1:$t===1?2:3,U&&(zt=!I&&te[Xt+1]!=="none"&&te[Xt+1]||te[Xt],ee=r&&(zt==="complete"||zt==="reset"||zt in r))),G&&(I||ee)&&(ee||p||!r)&&(yi(G)?G(N):N.getTrailing(G).forEach(function(Fe){return Fe.endAnimation()})),U||(Pe&&!ni&&!tf?(Pe._dp._time-Pe._start!==Pe._time&&Pe.render(Pe._dp._time-Pe._start),Pe.resetTo?Pe.resetTo("totalProgress",St,r._tTime/r._tDur):(Pe.vars.totalProgress=St,Pe.invalidate().restart())):r&&r.totalProgress(St,!!(ni&&(ue||ye)))),g){if(ye&&y&&(we.style[y+M.os2]=Tt),!J)ke(Tc(tt+pe*St));else if(Zn){if($=!ye&&St>$t&&be+1>ft&&ft+1>=Zr(V,M),C)if(!ye&&(yn||$)){var Q=Ms(g,!0),Z=ft-st;sy(g,an,Q.top+(M===In?Z:0)+Dn,Q.left+(M===In?0:Z)+Dn)}else sy(g,we);dl(yn||$?de:_e),We&&St<1&&yn||ke(tt+(St===1&&!$?pe:0))}}E&&!Oe.tween&&!ni&&!tf&&ve.restart(!0),l&&(I||T&&St&&(St<1||!Tp))&&qc(l.targets).forEach(function(Fe){return Fe.classList[yn||T?"add":"remove"](l.className)}),o&&!U&&!ye&&o(N),Zn&&!ni?(U&&(ee&&(zt==="complete"?r.pause().totalProgress(1):zt==="reset"?r.restart(!0).pause():zt==="restart"?r.restart(!0):r[zt]()),o&&o(N)),(I||!Tp)&&(f&&I&&wp(N,f),j[Xt]&&wp(N,j[Xt]),T&&(St===1?N.kill(!1,1):j[Xt]=0),I||(Xt=St===1?1:3,j[Xt]&&wp(N,j[Xt]))),z&&!yn&&Math.abs(N.getVelocity())>(Ac(z)?z:2500)&&(ac(N.callbackAnimation),Pe?Pe.progress(1):ac(r,zt==="reverse"?1:!St,1))):U&&o&&!ni&&o(N)}if(Ie){var Me=w?ft/w.duration()*(w._caScrollDist||0):ft;at(Me+(K._isFlipped?1:0)),Ie(Me)}Ze&&Ze(-ft/w.duration()*(w._caScrollDist||0))}},N.enable=function(ye,nt){N.enabled||(N.enabled=!0,zn(V,"resize",wc),k||zn(V,"scroll",Io),ce&&zn(i,"refreshInit",ce),ye!==!1&&(N.progress=Te=0,$e=q=ne=De()),nt!==!1&&N.refresh())},N.getTween=function(ye){return ye&&Oe?Oe.tween:Pe},N.setPositions=function(ye,nt,Qe,ft){if(w){var tn=w.scrollTrigger,St=w.duration(),$t=tn.end-tn.start;ye=tn.start+$t*ye/St,nt=tn.start+$t*nt/St}N.refresh(!1,!1,{start:Kx(ye,Qe&&!!N._startClamp),end:Kx(nt,Qe&&!!N._endClamp)},ft),N.update()},N.adjustPinSpacing=function(ye){if(Xe&&ye){var nt=Xe.indexOf(M.d)+1;Xe[nt]=parseFloat(Xe[nt])+ye+Dn,Xe[1]=parseFloat(Xe[1])+ye+Dn,dl(Xe)}},N.disable=function(ye,nt){if(N.enabled&&(ye!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,nt||Pe&&Pe.pause(),xe=0,Ce&&(Ce.uncache=1),ce&&Bn(i,"refreshInit",ce),ve&&(ve.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!k)){for(var Qe=At.length;Qe--;)if(At[Qe].scroller===V&&At[Qe]!==N)return;Bn(V,"resize",wc),k||Bn(V,"scroll",Io)}},N.kill=function(ye,nt){N.disable(ye,nt),Pe&&!nt&&Pe.kill(),u&&delete xg[u];var Qe=At.indexOf(N);Qe>=0&&At.splice(Qe,1),Qe===mi&&ih>0&&mi--,Qe=0,At.forEach(function(ft){return ft.scroller===N.scroller&&(Qe=1)}),Qe||gi||(N.scroll.rec=0),r&&(r.scrollTrigger=null,ye&&r.revert({kill:!1}),nt||r.kill()),Ge&&[Ge,Ue,K,et].forEach(function(ft){return ft.parentNode&&ft.parentNode.removeChild(ft)}),zc===N&&(zc=0),g&&(Ce&&(Ce.uncache=1),Qe=0,At.forEach(function(ft){return ft.pin===g&&Qe++}),Qe||(Ce.spacer=0)),n.onKill&&n.onKill(N)},At.push(N),N.enable(!1,!1),vt&&vt(N),r&&r.add&&!Y){var je=N.update;N.update=function(){N.update=je,st||be||N.refresh()},He.delayedCall(.01,N.update),Y=.01,st=be=0}else N.refresh();g&&j2()},i.register=function(n){return Jo||(He=n||kb(),zb()&&window.document&&i.enable(),Jo=bc),Jo},i.defaults=function(n){if(n)for(var r in n)af[r]=n[r];return af},i.disable=function(n,r){bc=0,At.forEach(function(o){return o[r?"kill":"disable"](n)}),Bn(Ut,"wheel",Io),Bn(fn,"scroll",Io),clearInterval(ef),Bn(fn,"touchcancel",$r),Bn(an,"touchstart",$r),rf(Bn,fn,"pointerdown,touchstart,mousedown",Zx),rf(Bn,fn,"pointerup,touchend,mouseup",Jx),Mh.kill(),nf(Bn);for(var s=0;s<Pt.length;s+=3)sf(Bn,Pt[s],Pt[s+1]),sf(Bn,Pt[s],Pt[s+2])},i.enable=function(){if(Ut=window,fn=document,Lr=fn.documentElement,an=fn.body,He&&(qc=He.utils.toArray,Oc=He.utils.clamp,_g=He.core.context||$r,bp=He.core.suppressOverwrites||$r,p_=Ut.history.scrollRestoration||"auto",yg=Ut.pageYOffset,He.core.globals("ScrollTrigger",i),an)){bc=1,hl=document.createElement("div"),hl.style.height="100vh",hl.style.position="absolute",jb(),G2(),bn.register(He),i.isTouch=bn.isTouch,Js=bn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),gg=bn.isTouch===1,zn(Ut,"wheel",Io),Ob=[Ut,fn,Lr,an],He.matchMedia?(i.matchMedia=function(u){var f=He.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},He.addEventListener("matchMediaInit",function(){return y_()}),He.addEventListener("matchMediaRevert",function(){return qb()}),He.addEventListener("matchMedia",function(){Ga(0,1),ao("matchMedia")}),He.matchMedia("(orientation: portrait)",function(){return Cp(),Cp})):console.warn("Requires GSAP 3.11.0 or later"),Cp(),zn(fn,"scroll",Io);var n=an.style,r=n.borderTopStyle,s=He.core.Animation.prototype,o,l;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Ms(an),In.m=Math.round(o.top+In.sc())||0,xi.m=Math.round(o.left+xi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),ef=setInterval(ty,250),He.delayedCall(.5,function(){return tf=0}),zn(fn,"touchcancel",$r),zn(an,"touchstart",$r),rf(zn,fn,"pointerdown,touchstart,mousedown",Zx),rf(zn,fn,"pointerup,touchend,mouseup",Jx),mg=He.utils.checkPrefix("transform"),rh.push(mg),Jo=ii(),Mh=He.delayedCall(.2,Ga).pause(),Qo=[fn,"visibilitychange",function(){var u=Ut.innerWidth,f=Ut.innerHeight;fn.hidden?(qx=u,Yx=f):(qx!==u||Yx!==f)&&wc()},fn,"DOMContentLoaded",Ga,Ut,"load",Ga,Ut,"resize",wc],nf(zn),At.forEach(function(u){return u.enable(0,1)}),l=0;l<Pt.length;l+=3)sf(Bn,Pt[l],Pt[l+1]),sf(Bn,Pt[l],Pt[l+2])}},i.config=function(n){"limitCallbacks"in n&&(Tp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(ef)||(ef=r)&&setInterval(ty,r),"ignoreMobileResize"in n&&(gg=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(nf(Bn)||nf(zn,n.autoRefreshEvents||"none"),Nb=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=wi(n),o=Pt.indexOf(s),l=ro(s);~o&&Pt.splice(o,l?6:2),r&&(l?es.unshift(Ut,r,an,r,Lr,r):es.unshift(s,r))},i.clearMatchMedia=function(n){At.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=($i(n)?wi(n):n).getBoundingClientRect(),l=o[s?ja:Ka]*r||0;return s?o.right-l>0&&o.left+l<Ut.innerWidth:o.bottom-l>0&&o.top+l<Ut.innerHeight},i.positionInViewport=function(n,r,s){$i(n)&&(n=wi(n));var o=n.getBoundingClientRect(),l=o[s?ja:Ka],u=r==null?l/2:r in Ah?Ah[r]*l:~r.indexOf("%")?parseFloat(r)*l/100:parseFloat(r)||0;return s?(o.left+u)/Ut.innerWidth:(o.top+u)/Ut.innerHeight},i.killAll=function(n){if(At.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=so.killAll||[];so={},r.forEach(function(s){return s()})}},i}();yt.version="3.12.5";yt.saveStyles=function(i){return i?qc(i).forEach(function(e){if(e&&e.style){var t=Vi.indexOf(e);t>=0&&Vi.splice(t,5),Vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),He.core.getCache(e),_g())}}):Vi};yt.revert=function(i,e){return y_(!i,e)};yt.create=function(i,e){return new yt(i,e)};yt.refresh=function(i){return i?wc():(Jo||yt.register())&&Ga(!0)};yt.update=function(i){return++Pt.cache&&Cs(i===!0?2:0)};yt.clearScrollMemory=Yb;yt.maxScroll=function(i,e){return Zr(i,e?xi:In)};yt.getScrollFunc=function(i,e){return da(wi(i),e?xi:In)};yt.getById=function(i){return xg[i]};yt.getAll=function(){return At.filter(function(i){return i.vars.id!=="ScrollSmoother"})};yt.isScrolling=function(){return!!xr};yt.snapDirectional=x_;yt.addEventListener=function(i,e){var t=so[i]||(so[i]=[]);~t.indexOf(e)||t.push(e)};yt.removeEventListener=function(i,e){var t=so[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};yt.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(f,h){var p=[],m=[],g=He.delayedCall(r,function(){h(p,m),p=[],m=[]}).pause();return function(y){p.length||g.restart(!0),p.push(y.trigger),m.push(y),s<=p.length&&g.progress(1)}},l;for(l in e)n[l]=l.substr(0,2)==="on"&&yi(e[l])&&l!=="onRefreshInit"?o(l,e[l]):e[l];return yi(s)&&(s=s(),zn(yt,"refresh",function(){return s=e.batchMax()})),qc(i).forEach(function(u){var f={};for(l in n)f[l]=n[l];f.trigger=u,t.push(yt.create(f))}),t};var oy=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Pp=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(bn.isTouch?" pinch-zoom":""):"none",e===Lr&&i(an,t)},uf={auto:1,scroll:1},eO=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||He.core.getCache(s),l=ii(),u;if(!o._isScrollT||l-o._isScrollT>2e3){for(;s&&s!==an&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(uf[(u=pr(s)).overflowY]||uf[u.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ro(s)&&(uf[(u=pr(s)).overflowY]||uf[u.overflowX]),o._isScrollT=l}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Zb=function(e,t,n,r){return bn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&eO,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&zn(fn,bn.eventTypes[0],cy,!1,!0)},onDisable:function(){return Bn(fn,bn.eventTypes[0],cy,!0)}})},tO=/(input|label|select|textarea)/i,ly,cy=function(e){var t=tO.test(e.target.tagName);(t||ly)&&(e._gsapAllow=!0,ly=t)},nO=function(e){Ua(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,l,u,f=wi(e.target)||Lr,h=He.core.globals().ScrollSmoother,p=h&&h.get(),m=Js&&(e.content&&wi(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),g=da(f,In),y=da(f,xi),x=1,_=(bn.isTouch&&Ut.visualViewport?Ut.visualViewport.scale*Ut.visualViewport.width:Ut.outerWidth)/Ut.innerWidth,v=0,A=yi(r)?function(){return r(l)}:function(){return r||2.8},T,E,C=Zb(f,e.type,!0,s),R=function(){return E=!1},w=$r,z=$r,G=function(){u=Zr(f,In),z=Oc(Js?1:0,u),n&&(w=Oc(0,Zr(f,xi))),T=Za},M=function(){m._gsap.y=Tc(parseFloat(m._gsap.y)+g.offset)+"px",m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(m._gsap.y)+", 0, 1)",g.offset=g.cacheID=0},U=function(){if(E){requestAnimationFrame(R);var ie=Tc(l.deltaY/2),ae=z(g.v-ie);if(m&&ae!==g.v+g.offset){g.offset=ae-g.v;var N=Tc((parseFloat(m&&m._gsap.y)||0)-g.offset);m.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",m._gsap.y=N+"px",g.cacheID=Pt.cache,Cs()}return!0}g.offset&&M(),E=!0},V,oe,k,J,j=function(){G(),V.isActive()&&V.vars.scrollY>u&&(g()>u?V.progress(1)&&g(u):V.resetTo("scrollY",u))};return m&&He.set(m,{y:"+=0"}),e.ignoreCheck=function(te){return Js&&te.type==="touchmove"&&U()||x>1.05&&te.type!=="touchstart"||l.isGesturing||te.touches&&te.touches.length>1},e.onPress=function(){E=!1;var te=x;x=Tc((Ut.visualViewport&&Ut.visualViewport.scale||1)/_),V.pause(),te!==x&&Pp(f,x>1.01?!0:n?!1:"x"),oe=y(),k=g(),G(),T=Za},e.onRelease=e.onGestureStart=function(te,ie){if(g.offset&&M(),!ie)J.restart(!0);else{Pt.cache++;var ae=A(),N,ce;n&&(N=y(),ce=N+ae*.05*-te.velocityX/.227,ae*=oy(y,N,ce,Zr(f,xi)),V.vars.scrollX=w(ce)),N=g(),ce=N+ae*.05*-te.velocityY/.227,ae*=oy(g,N,ce,Zr(f,In)),V.vars.scrollY=z(ce),V.invalidate().duration(ae).play(.01),(Js&&V.vars.scrollY>=u||N>=u-1)&&He.to({},{onUpdate:j,duration:ae})}o&&o(te)},e.onWheel=function(){V._ts&&V.pause(),ii()-v>1e3&&(T=0,v=ii())},e.onChange=function(te,ie,ae,N,ce){if(Za!==T&&G(),ie&&n&&y(w(N[2]===ie?oe+(te.startX-te.x):y()+ie-N[1])),ae){g.offset&&M();var Se=ce[2]===ae,Je=Se?k+te.startY-te.y:g()+ae-ce[1],ne=z(Je);Se&&Je!==ne&&(k+=ne-Je),g(ne)}(ae||ie)&&Cs()},e.onEnable=function(){Pp(f,n?!1:"x"),yt.addEventListener("refresh",j),zn(Ut,"resize",j),g.smooth&&(g.target.style.scrollBehavior="auto",g.smooth=y.smooth=!1),C.enable()},e.onDisable=function(){Pp(f,!0),Bn(Ut,"resize",j),yt.removeEventListener("refresh",j),C.kill()},e.lockAxis=e.lockAxis!==!1,l=new bn(e),l.iOS=Js,Js&&!g()&&g(1),Js&&He.ticker.add($r),J=l._dc,V=He.to(l,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Kb(g,g(),function(){return V.pause()})},onUpdate:Cs,onComplete:J.vars.onComplete}),l};yt.sort=function(i){return At.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};yt.observe=function(i){return new bn(i)};yt.normalizeScroll=function(i){if(typeof i>"u")return pi;if(i===!0&&pi)return pi.enable();if(i===!1){pi&&pi.kill(),pi=i;return}var e=i instanceof bn?i:nO(i);return pi&&pi.target===e.target&&pi.kill(),ro(e.target)&&(pi=e),e};yt.core={_getVelocityProp:pg,_inputObserver:Zb,_scrollers:Pt,_proxies:es,bridge:{ss:function(){xr||ao("scrollStart"),xr=ii()},ref:function(){return ni}}};kb()&&He.registerPlugin(yt);/*! *****************************************************************************
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
***************************************************************************** */var Eg=function(i,e){return Eg=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Eg(i,e)};function iO(i,e){Eg(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ts=function(){return ts=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},ts.apply(this,arguments)};function Ba(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var l=i.length-1;l>=0;l--)(o=i[l])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function rO(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,l=s.length;o<l;o++,r++)n[r]=s[o];return n}var on=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sO(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var jn=function(i){try{return!!i()}catch{return!0}},aO=jn,S_=!aO(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),Jb=S_,Qb=Function.prototype,Mg=Qb.call,oO=Jb&&Qb.bind.bind(Mg,Mg),xn=Jb?oO:function(i){return function(){return Mg.apply(i,arguments)}},eT=xn,lO=eT({}.toString),cO=eT("".slice),Ll=function(i){return cO(lO(i),8,-1)},uO=xn,fO=jn,hO=Ll,Lp=Object,dO=uO("".split),E_=fO(function(){return!Lp("z").propertyIsEnumerable(0)})?function(i){return hO(i)==="String"?dO(i,""):Lp(i)}:Lp,Dl=function(i){return i==null},pO=Dl,mO=TypeError,Vh=function(i){if(pO(i))throw new mO("Can't call method on "+i);return i},gO=E_,_O=Vh,Il=function(i){return gO(_O(i))},oc=function(i){return i&&i.Math===Math&&i},Qi=oc(typeof globalThis=="object"&&globalThis)||oc(typeof window=="object"&&window)||oc(typeof self=="object"&&self)||oc(typeof on=="object"&&on)||oc(typeof on=="object"&&on)||function(){return this}()||Function("return this")(),tT={exports:{}},vO=!1,uy=Qi,xO=Object.defineProperty,M_=function(i,e){try{xO(uy,i,{value:e,configurable:!0,writable:!0})}catch{uy[i]=e}return e},yO=Qi,SO=M_,fy="__core-js_shared__",hy=tT.exports=yO[fy]||SO(fy,{});(hy.versions||(hy.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var b_=tT.exports,dy=b_,nT=function(i,e){return dy[i]||(dy[i]=e||{})},EO=Vh,MO=Object,Qc=function(i){return MO(EO(i))},bO=xn,TO=Qc,AO=bO({}.hasOwnProperty),Nr=Object.hasOwn||function(e,t){return AO(TO(e),t)},wO=xn,CO=0,RO=Math.random(),PO=wO(1 .toString),T_=function(i){return"Symbol("+(i===void 0?"":i)+")_"+PO(++CO+RO,36)},LO=typeof navigator<"u"&&String(navigator.userAgent)||"",iT=Qi,Dp=LO,py=iT.process,my=iT.Deno,gy=py&&py.versions||my&&my.version,_y=gy&&gy.v8,Dr,wh;_y&&(Dr=_y.split("."),wh=Dr[0]>0&&Dr[0]<4?1:+(Dr[0]+Dr[1]));!wh&&Dp&&(Dr=Dp.match(/Edge\/(\d+)/),(!Dr||Dr[1]>=74)&&(Dr=Dp.match(/Chrome\/(\d+)/),Dr&&(wh=+Dr[1])));var DO=wh,vy=DO,IO=jn,OO=Qi,UO=OO.String,rT=!!Object.getOwnPropertySymbols&&!IO(function(){var i=Symbol("symbol detection");return!UO(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&vy&&vy<41}),NO=rT,sT=NO&&!Symbol.sham&&typeof Symbol.iterator=="symbol",FO=Qi,BO=nT,xy=Nr,zO=T_,kO=rT,HO=sT,rl=FO.Symbol,Ip=BO("wks"),GO=HO?rl.for||rl:rl&&rl.withoutSetter||zO,Er=function(i){return xy(Ip,i)||(Ip[i]=kO&&xy(rl,i)?rl[i]:GO("Symbol."+i)),Ip[i]},Op=typeof document=="object"&&document.all,Kn=typeof Op>"u"&&Op!==void 0?function(i){return typeof i=="function"||i===Op}:function(i){return typeof i=="function"},WO=Kn,Ui=function(i){return typeof i=="object"?i!==null:WO(i)},VO=Ui,$O=String,XO=TypeError,rs=function(i){if(VO(i))return i;throw new XO($O(i)+" is not an object")},aT={},qO=jn,er=!qO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),YO=er,jO=jn,oT=YO&&jO(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Fr={},KO=Qi,yy=Ui,bg=KO.document,ZO=yy(bg)&&yy(bg.createElement),lT=function(i){return ZO?bg.createElement(i):{}},JO=er,QO=jn,eU=lT,cT=!JO&&!QO(function(){return Object.defineProperty(eU("div"),"a",{get:function(){return 7}}).a!==7}),tU=S_,ff=Function.prototype.call,Os=tU?ff.bind(ff):function(){return ff.apply(ff,arguments)},Up=Qi,nU=Kn,iU=function(i){return nU(i)?i:void 0},eu=function(i,e){return arguments.length<2?iU(Up[i]):Up[i]&&Up[i][e]},rU=xn,A_=rU({}.isPrototypeOf),sU=eu,aU=Kn,oU=A_,lU=sT,cU=Object,uT=lU?function(i){return typeof i=="symbol"}:function(i){var e=sU("Symbol");return aU(e)&&oU(e.prototype,cU(i))},uU=String,w_=function(i){try{return uU(i)}catch{return"Object"}},fU=Kn,hU=w_,dU=TypeError,tu=function(i){if(fU(i))return i;throw new dU(hU(i)+" is not a function")},pU=tu,mU=Dl,C_=function(i,e){var t=i[e];return mU(t)?void 0:pU(t)},Np=Os,Fp=Kn,Bp=Ui,gU=TypeError,_U=function(i,e){var t,n;if(e==="string"&&Fp(t=i.toString)&&!Bp(n=Np(t,i))||Fp(t=i.valueOf)&&!Bp(n=Np(t,i))||e!=="string"&&Fp(t=i.toString)&&!Bp(n=Np(t,i)))return n;throw new gU("Can't convert object to primitive value")},vU=Os,Sy=Ui,Ey=uT,xU=C_,yU=_U,SU=Er,EU=TypeError,MU=SU("toPrimitive"),bU=function(i,e){if(!Sy(i)||Ey(i))return i;var t=xU(i,MU),n;if(t){if(e===void 0&&(e="default"),n=vU(t,i,e),!Sy(n)||Ey(n))return n;throw new EU("Can't convert object to primitive value")}return e===void 0&&(e="number"),yU(i,e)},TU=bU,AU=uT,fT=function(i){var e=TU(i,"string");return AU(e)?e:e+""},wU=er,CU=cT,RU=oT,hf=rs,My=fT,PU=TypeError,zp=Object.defineProperty,LU=Object.getOwnPropertyDescriptor,kp="enumerable",Hp="configurable",Gp="writable";Fr.f=wU?RU?function(e,t,n){if(hf(e),t=My(t),hf(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Gp in n&&!n[Gp]){var r=LU(e,t);r&&r[Gp]&&(e[t]=n.value,n={configurable:Hp in n?n[Hp]:r[Hp],enumerable:kp in n?n[kp]:r[kp],writable:!1})}return zp(e,t,n)}:zp:function(e,t,n){if(hf(e),t=My(t),hf(n),CU)try{return zp(e,t,n)}catch{}if("get"in n||"set"in n)throw new PU("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var DU=Math.ceil,IU=Math.floor,OU=Math.trunc||function(e){var t=+e;return(t>0?IU:DU)(t)},UU=OU,R_=function(i){var e=+i;return e!==e||e===0?0:UU(e)},NU=R_,FU=Math.max,BU=Math.min,zU=function(i,e){var t=NU(i);return t<0?FU(t+e,0):BU(t,e)},kU=R_,HU=Math.min,GU=function(i){var e=kU(i);return e>0?HU(e,9007199254740991):0},WU=GU,$h=function(i){return WU(i.length)},VU=Il,$U=zU,XU=$h,by=function(i){return function(e,t,n){var r=VU(e),s=XU(r);if(s===0)return!i&&-1;var o=$U(n,s),l;if(i&&t!==t){for(;s>o;)if(l=r[o++],l!==l)return!0}else for(;s>o;o++)if((i||o in r)&&r[o]===t)return i||o||0;return!i&&-1}},qU={includes:by(!0),indexOf:by(!1)},Xh={},YU=xn,Wp=Nr,jU=Il,KU=qU.indexOf,ZU=Xh,Ty=YU([].push),hT=function(i,e){var t=jU(i),n=0,r=[],s;for(s in t)!Wp(ZU,s)&&Wp(t,s)&&Ty(r,s);for(;e.length>n;)Wp(t,s=e[n++])&&(~KU(r,s)||Ty(r,s));return r},P_=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],JU=hT,QU=P_,dT=Object.keys||function(e){return JU(e,QU)},eN=er,tN=oT,nN=Fr,iN=rs,rN=Il,sN=dT;aT.f=eN&&!tN?Object.defineProperties:function(e,t){iN(e);for(var n=rN(t),r=sN(t),s=r.length,o=0,l;s>o;)nN.f(e,l=r[o++],n[l]);return e};var aN=eu,oN=aN("document","documentElement"),lN=nT,cN=T_,Ay=lN("keys"),L_=function(i){return Ay[i]||(Ay[i]=cN(i))},uN=rs,fN=aT,wy=P_,hN=Xh,dN=oN,pN=lT,mN=L_,Cy=">",Ry="<",Tg="prototype",Ag="script",pT=mN("IE_PROTO"),Vp=function(){},mT=function(i){return Ry+Ag+Cy+i+Ry+"/"+Ag+Cy},Py=function(i){i.write(mT("")),i.close();var e=i.parentWindow.Object;return i=null,e},gN=function(){var i=pN("iframe"),e="java"+Ag+":",t;return i.style.display="none",dN.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(mT("document.F=Object")),t.close(),t.F},df,ah=function(){try{df=new ActiveXObject("htmlfile")}catch{}ah=typeof document<"u"?document.domain&&df?Py(df):gN():Py(df);for(var i=wy.length;i--;)delete ah[Tg][wy[i]];return ah()};hN[pT]=!0;var D_=Object.create||function(e,t){var n;return e!==null?(Vp[Tg]=uN(e),n=new Vp,Vp[Tg]=null,n[pT]=e):n=ah(),t===void 0?n:fN.f(n,t)},_N=Er,vN=D_,xN=Fr.f,wg=_N("unscopables"),Cg=Array.prototype;Cg[wg]===void 0&&xN(Cg,wg,{configurable:!0,value:vN(null)});var yN=function(i){Cg[wg][i]=!0},nu={},SN=Qi,EN=Kn,Ly=SN.WeakMap,gT=EN(Ly)&&/native code/.test(String(Ly)),qh=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},MN=er,bN=Fr,TN=qh,I_=MN?function(i,e,t){return bN.f(i,e,TN(1,t))}:function(i,e,t){return i[e]=t,i},AN=gT,_T=Qi,wN=Ui,CN=I_,$p=Nr,Xp=b_,RN=L_,PN=Xh,Dy="Object already initialized",Rg=_T.TypeError,LN=_T.WeakMap,Ch,jc,Rh,DN=function(i){return Rh(i)?jc(i):Ch(i,{})},IN=function(i){return function(e){var t;if(!wN(e)||(t=jc(e)).type!==i)throw new Rg("Incompatible receiver, "+i+" required");return t}};if(AN||Xp.state){var Gr=Xp.state||(Xp.state=new LN);Gr.get=Gr.get,Gr.has=Gr.has,Gr.set=Gr.set,Ch=function(i,e){if(Gr.has(i))throw new Rg(Dy);return e.facade=i,Gr.set(i,e),e},jc=function(i){return Gr.get(i)||{}},Rh=function(i){return Gr.has(i)}}else{var Oo=RN("state");PN[Oo]=!0,Ch=function(i,e){if($p(i,Oo))throw new Rg(Dy);return e.facade=i,CN(i,Oo,e),e},jc=function(i){return $p(i,Oo)?i[Oo]:{}},Rh=function(i){return $p(i,Oo)}}var Ol={set:Ch,get:jc,has:Rh,enforce:DN,getterFor:IN},O_={},U_={},vT={}.propertyIsEnumerable,xT=Object.getOwnPropertyDescriptor,ON=xT&&!vT.call({1:2},1);U_.f=ON?function(e){var t=xT(this,e);return!!t&&t.enumerable}:vT;var UN=er,NN=Os,FN=U_,BN=qh,zN=Il,kN=fT,HN=Nr,GN=cT,Iy=Object.getOwnPropertyDescriptor;O_.f=UN?Iy:function(e,t){if(e=zN(e),t=kN(t),GN)try{return Iy(e,t)}catch{}if(HN(e,t))return BN(!NN(FN.f,e,t),e[t])};var yT={exports:{}},Pg=er,WN=Nr,ST=Function.prototype,VN=Pg&&Object.getOwnPropertyDescriptor,N_=WN(ST,"name"),$N=N_&&(function(){}).name==="something",XN=N_&&(!Pg||Pg&&VN(ST,"name").configurable),ET={EXISTS:N_,PROPER:$N,CONFIGURABLE:XN},qN=xn,YN=Kn,Lg=b_,jN=qN(Function.toString);YN(Lg.inspectSource)||(Lg.inspectSource=function(i){return jN(i)});var MT=Lg.inspectSource,F_=xn,KN=jn,ZN=Kn,pf=Nr,Dg=er,JN=ET.CONFIGURABLE,QN=MT,bT=Ol,e3=bT.enforce,t3=bT.get,Oy=String,oh=Object.defineProperty,n3=F_("".slice),i3=F_("".replace),r3=F_([].join),s3=Dg&&!KN(function(){return oh(function(){},"length",{value:8}).length!==8}),a3=String(String).split("String"),o3=yT.exports=function(i,e,t){n3(Oy(e),0,7)==="Symbol("&&(e="["+i3(Oy(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!pf(i,"name")||JN&&i.name!==e)&&(Dg?oh(i,"name",{value:e,configurable:!0}):i.name=e),s3&&t&&pf(t,"arity")&&i.length!==t.arity&&oh(i,"length",{value:t.arity});try{t&&pf(t,"constructor")&&t.constructor?Dg&&oh(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=e3(i);return pf(n,"source")||(n.source=r3(a3,typeof e=="string"?e:"")),i};Function.prototype.toString=o3(function(){return ZN(this)&&t3(this).source||QN(this)},"toString");var TT=yT.exports,l3=Kn,c3=Fr,u3=TT,f3=M_,Ul=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(l3(t)&&u3(t,s,n),n.global)r?i[e]=t:f3(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:c3.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},Yh={},h3=hT,d3=P_,p3=d3.concat("length","prototype");Yh.f=Object.getOwnPropertyNames||function(e){return h3(e,p3)};var B_={};B_.f=Object.getOwnPropertySymbols;var m3=eu,g3=xn,_3=Yh,v3=B_,x3=rs,y3=g3([].concat),S3=m3("Reflect","ownKeys")||function(e){var t=_3.f(x3(e)),n=v3.f;return n?y3(t,n(e)):t},Uy=Nr,E3=S3,M3=O_,b3=Fr,T3=function(i,e,t){for(var n=E3(e),r=b3.f,s=M3.f,o=0;o<n.length;o++){var l=n[o];!Uy(i,l)&&!(t&&Uy(t,l))&&r(i,l,s(e,l))}},A3=jn,w3=Kn,C3=/#|\.prototype\./,iu=function(i,e){var t=P3[R3(i)];return t===D3?!0:t===L3?!1:w3(e)?A3(e):!!e},R3=iu.normalize=function(i){return String(i).replace(C3,".").toLowerCase()},P3=iu.data={},L3=iu.NATIVE="N",D3=iu.POLYFILL="P",AT=iu,mf=Qi,I3=O_.f,O3=I_,U3=Ul,N3=M_,F3=T3,B3=AT,Nl=function(i,e){var t=i.target,n=i.global,r=i.stat,s,o,l,u,f,h;if(n?o=mf:r?o=mf[t]||N3(t,{}):o=mf[t]&&mf[t].prototype,o)for(l in e){if(f=e[l],i.dontCallGetSet?(h=I3(o,l),u=h&&h.value):u=o[l],s=B3(n?l:t+(r?".":"#")+l,i.forced),!s&&u!==void 0){if(typeof f==typeof u)continue;F3(f,u)}(i.sham||u&&u.sham)&&O3(f,"sham",!0),U3(o,l,f,i)}},z3=jn,k3=!z3(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),H3=Nr,G3=Kn,W3=Qc,V3=L_,$3=k3,Ny=V3("IE_PROTO"),Ig=Object,X3=Ig.prototype,wT=$3?Ig.getPrototypeOf:function(i){var e=W3(i);if(H3(e,Ny))return e[Ny];var t=e.constructor;return G3(t)&&e instanceof t?t.prototype:e instanceof Ig?X3:null},q3=jn,Y3=Kn,j3=Ui,Fy=wT,K3=Ul,Z3=Er,Og=Z3("iterator"),CT=!1,oo,qp,Yp;[].keys&&(Yp=[].keys(),"next"in Yp?(qp=Fy(Fy(Yp)),qp!==Object.prototype&&(oo=qp)):CT=!0);var J3=!j3(oo)||q3(function(){var i={};return oo[Og].call(i)!==i});J3&&(oo={});Y3(oo[Og])||K3(oo,Og,function(){return this});var RT={IteratorPrototype:oo,BUGGY_SAFARI_ITERATORS:CT},Q3=Fr.f,eF=Nr,tF=Er,By=tF("toStringTag"),z_=function(i,e,t){i&&!t&&(i=i.prototype),i&&!eF(i,By)&&Q3(i,By,{configurable:!0,value:e})},nF=RT.IteratorPrototype,iF=D_,rF=qh,sF=z_,aF=nu,oF=function(){return this},lF=function(i,e,t,n){var r=e+" Iterator";return i.prototype=iF(nF,{next:rF(+!n,t)}),sF(i,r,!1),aF[r]=oF,i},cF=xn,uF=tu,fF=function(i,e,t){try{return cF(uF(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},hF=Ui,dF=function(i){return hF(i)||i===null},pF=dF,mF=String,gF=TypeError,_F=function(i){if(pF(i))return i;throw new gF("Can't set "+mF(i)+" as a prototype")},vF=fF,xF=rs,yF=_F,PT=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=vF(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return xF(r),yF(s),i?t(r,s):r.__proto__=s,r}}():void 0),SF=Nl,EF=Os,LT=ET,MF=Kn,bF=lF,zy=wT,ky=PT,TF=z_,AF=I_,jp=Ul,wF=Er,CF=nu,DT=RT,RF=LT.PROPER,PF=LT.CONFIGURABLE,Hy=DT.IteratorPrototype,gf=DT.BUGGY_SAFARI_ITERATORS,lc=wF("iterator"),Gy="keys",cc="values",Wy="entries",LF=function(){return this},k_=function(i,e,t,n,r,s,o){bF(t,e,n);var l=function(v){if(v===r&&m)return m;if(!gf&&v&&v in h)return h[v];switch(v){case Gy:return function(){return new t(this,v)};case cc:return function(){return new t(this,v)};case Wy:return function(){return new t(this,v)}}return function(){return new t(this)}},u=e+" Iterator",f=!1,h=i.prototype,p=h[lc]||h["@@iterator"]||r&&h[r],m=!gf&&p||l(r),g=e==="Array"&&h.entries||p,y,x,_;if(g&&(y=zy(g.call(new i)),y!==Object.prototype&&y.next&&(zy(y)!==Hy&&(ky?ky(y,Hy):MF(y[lc])||jp(y,lc,LF)),TF(y,u,!0))),RF&&r===cc&&p&&p.name!==cc&&(PF?AF(h,"name",cc):(f=!0,m=function(){return EF(p,this)})),r)if(x={values:l(cc),keys:s?m:l(Gy),entries:l(Wy)},o)for(_ in x)(gf||f||!(_ in h))&&jp(h,_,x[_]);else SF({target:e,proto:!0,forced:gf||f},x);return h[lc]!==m&&jp(h,lc,m,{name:r}),CF[e]=m,x},H_=function(i,e){return{value:i,done:e}},DF=Il,G_=yN,Vy=nu,IT=Ol,IF=Fr.f,OF=k_,_f=H_,UF=er,OT="Array Iterator",NF=IT.set,FF=IT.getterFor(OT);OF(Array,"Array",function(i,e){NF(this,{type:OT,target:DF(i),index:0,kind:e})},function(){var i=FF(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,_f(void 0,!0);switch(i.kind){case"keys":return _f(t,!1);case"values":return _f(e[t],!1)}return _f([t,e[t]],!1)},"values");var $y=Vy.Arguments=Vy.Array;G_("keys");G_("values");G_("entries");if(UF&&$y.name!=="values")try{IF($y,"name",{value:"values"})}catch{}var UT={exports:{}},NT={},BF=xn,zF=BF([].slice),kF=Ll,HF=Il,FT=Yh.f,GF=zF,BT=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],WF=function(i){try{return FT(i)}catch{return GF(BT)}};NT.f=function(e){return BT&&kF(e)==="Window"?WF(e):FT(HF(e))};var VF=jn,$F=VF(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),XF=jn,qF=Ui,YF=Ll,Xy=$F,lh=Object.isExtensible,jF=XF(function(){lh(1)}),KF=jF||Xy?function(e){return!qF(e)||Xy&&YF(e)==="ArrayBuffer"?!1:lh?lh(e):!0}:lh,ZF=jn,zT=!ZF(function(){return Object.isExtensible(Object.preventExtensions({}))}),JF=Nl,QF=xn,eB=Xh,tB=Ui,W_=Nr,nB=Fr.f,qy=Yh,iB=NT,V_=KF,rB=T_,sB=zT,kT=!1,Ls=rB("meta"),aB=0,$_=function(i){nB(i,Ls,{value:{objectID:"O"+aB++,weakData:{}}})},oB=function(i,e){if(!tB(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!W_(i,Ls)){if(!V_(i))return"F";if(!e)return"E";$_(i)}return i[Ls].objectID},lB=function(i,e){if(!W_(i,Ls)){if(!V_(i))return!0;if(!e)return!1;$_(i)}return i[Ls].weakData},cB=function(i){return sB&&kT&&V_(i)&&!W_(i,Ls)&&$_(i),i},uB=function(){fB.enable=function(){},kT=!0;var i=qy.f,e=QF([].splice),t={};t[Ls]=1,i(t).length&&(qy.f=function(n){for(var r=i(n),s=0,o=r.length;s<o;s++)if(r[s]===Ls){e(r,s,1);break}return r},JF({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:iB.f}))},fB=UT.exports={enable:uB,fastKey:oB,getWeakData:lB,onFreeze:cB};eB[Ls]=!0;var jh=UT.exports,hB=Ll,dB=xn,pB=function(i){if(hB(i)==="Function")return dB(i)},Yy=pB,mB=tu,gB=S_,_B=Yy(Yy.bind),Kh=function(i,e){return mB(i),e===void 0?i:gB?_B(i,e):function(){return i.apply(e,arguments)}},vB=Er,xB=nu,yB=vB("iterator"),SB=Array.prototype,HT=function(i){return i!==void 0&&(xB.Array===i||SB[yB]===i)},EB=Er,MB=EB("toStringTag"),GT={};GT[MB]="z";var X_=String(GT)==="[object z]",bB=X_,TB=Kn,ch=Ll,AB=Er,wB=AB("toStringTag"),CB=Object,RB=ch(function(){return arguments}())==="Arguments",PB=function(i,e){try{return i[e]}catch{}},Zh=bB?ch:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=PB(e=CB(i),wB))=="string"?t:RB?ch(e):(n=ch(e))==="Object"&&TB(e.callee)?"Arguments":n},LB=Zh,jy=C_,DB=Dl,IB=nu,OB=Er,UB=OB("iterator"),q_=function(i){if(!DB(i))return jy(i,UB)||jy(i,"@@iterator")||IB[LB(i)]},NB=Os,FB=tu,BB=rs,zB=w_,kB=q_,HB=TypeError,WT=function(i,e){var t=arguments.length<2?kB(i):e;if(FB(t))return BB(NB(t,i));throw new HB(zB(i)+" is not iterable")},GB=Os,Ky=rs,WB=C_,VT=function(i,e,t){var n,r;Ky(i);try{if(n=WB(i,"return"),!n){if(e==="throw")throw t;return t}n=GB(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return Ky(n),t},VB=Kh,$B=Os,XB=rs,qB=w_,YB=HT,jB=$h,Zy=A_,KB=WT,ZB=q_,Jy=VT,JB=TypeError,uh=function(i,e){this.stopped=i,this.result=e},Qy=uh.prototype,Jh=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),l=!!(t&&t.INTERRUPTED),u=VB(e,n),f,h,p,m,g,y,x,_=function(A){return f&&Jy(f,"normal",A),new uh(!0,A)},v=function(A){return r?(XB(A),l?u(A[0],A[1],_):u(A[0],A[1])):l?u(A,_):u(A)};if(s)f=i.iterator;else if(o)f=i;else{if(h=ZB(i),!h)throw new JB(qB(i)+" is not iterable");if(YB(h)){for(p=0,m=jB(i);m>p;p++)if(g=v(i[p]),g&&Zy(Qy,g))return g;return new uh(!1)}f=KB(i,h)}for(y=s?i.next:f.next;!(x=$B(y,f)).done;){try{g=v(x.value)}catch(A){Jy(f,"throw",A)}if(typeof g=="object"&&g&&Zy(Qy,g))return g}return new uh(!1)},QB=A_,ez=TypeError,Y_=function(i,e){if(QB(e,i))return i;throw new ez("Incorrect invocation")},tz=Er,$T=tz("iterator"),XT=!1;try{var nz=0,eS={next:function(){return{done:!!nz++}},return:function(){XT=!0}};eS[$T]=function(){return this},Array.from(eS,function(){throw 2})}catch{}var qT=function(i,e){try{if(!e&&!XT)return!1}catch{return!1}var t=!1;try{var n={};n[$T]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},iz=Kn,rz=Ui,tS=PT,sz=function(i,e,t){var n,r;return tS&&iz(n=e.constructor)&&n!==t&&rz(r=n.prototype)&&r!==t.prototype&&tS(i,r),i},az=Nl,oz=Qi,lz=xn,nS=AT,cz=Ul,uz=jh,fz=Jh,hz=Y_,dz=Kn,pz=Dl,Kp=Ui,Zp=jn,mz=qT,gz=z_,_z=sz,j_=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",o=oz[i],l=o&&o.prototype,u=o,f={},h=function(v){var A=lz(l[v]);cz(l,v,v==="add"?function(E){return A(this,E===0?0:E),this}:v==="delete"?function(T){return r&&!Kp(T)?!1:A(this,T===0?0:T)}:v==="get"?function(E){return r&&!Kp(E)?void 0:A(this,E===0?0:E)}:v==="has"?function(E){return r&&!Kp(E)?!1:A(this,E===0?0:E)}:function(E,C){return A(this,E===0?0:E,C),this})},p=nS(i,!dz(o)||!(r||l.forEach&&!Zp(function(){new o().entries().next()})));if(p)u=t.getConstructor(e,i,n,s),uz.enable();else if(nS(i,!0)){var m=new u,g=m[s](r?{}:-0,1)!==m,y=Zp(function(){m.has(1)}),x=mz(function(v){new o(v)}),_=!r&&Zp(function(){for(var v=new o,A=5;A--;)v[s](A,A);return!v.has(-0)});x||(u=e(function(v,A){hz(v,l);var T=_z(new o,v,u);return pz(A)||fz(A,T[s],{that:T,AS_ENTRIES:n}),T}),u.prototype=l,l.constructor=u),(y||_)&&(h("delete"),h("has"),n&&h("get")),(_||g)&&h(s),r&&l.clear&&delete l.clear}return f[i]=u,az({global:!0,constructor:!0,forced:u!==o},f),gz(u,i),r||t.setStrong(u,i,n),u},iS=TT,vz=Fr,YT=function(i,e,t){return t.get&&iS(t.get,e,{getter:!0}),t.set&&iS(t.set,e,{setter:!0}),vz.f(i,e,t)},xz=Ul,K_=function(i,e,t){for(var n in e)xz(i,n,e[n],t);return i},yz=eu,Sz=YT,Ez=Er,Mz=er,rS=Ez("species"),bz=function(i){var e=yz(i);Mz&&e&&!e[rS]&&Sz(e,rS,{configurable:!0,get:function(){return this}})},sS=D_,Tz=YT,aS=K_,Az=Kh,wz=Y_,Cz=Dl,Rz=Jh,Pz=k_,vf=H_,Lz=bz,uc=er,oS=jh.fastKey,jT=Ol,lS=jT.set,Jp=jT.getterFor,KT={getConstructor:function(i,e,t,n){var r=i(function(f,h){wz(f,s),lS(f,{type:e,index:sS(null),first:void 0,last:void 0,size:0}),uc||(f.size=0),Cz(h)||Rz(h,f[n],{that:f,AS_ENTRIES:t})}),s=r.prototype,o=Jp(e),l=function(f,h,p){var m=o(f),g=u(f,h),y,x;return g?g.value=p:(m.last=g={index:x=oS(h,!0),key:h,value:p,previous:y=m.last,next:void 0,removed:!1},m.first||(m.first=g),y&&(y.next=g),uc?m.size++:f.size++,x!=="F"&&(m.index[x]=g)),f},u=function(f,h){var p=o(f),m=oS(h),g;if(m!=="F")return p.index[m];for(g=p.first;g;g=g.next)if(g.key===h)return g};return aS(s,{clear:function(){for(var h=this,p=o(h),m=p.first;m;)m.removed=!0,m.previous&&(m.previous=m.previous.next=void 0),m=m.next;p.first=p.last=void 0,p.index=sS(null),uc?p.size=0:h.size=0},delete:function(f){var h=this,p=o(h),m=u(h,f);if(m){var g=m.next,y=m.previous;delete p.index[m.index],m.removed=!0,y&&(y.next=g),g&&(g.previous=y),p.first===m&&(p.first=g),p.last===m&&(p.last=y),uc?p.size--:h.size--}return!!m},forEach:function(h){for(var p=o(this),m=Az(h,arguments.length>1?arguments[1]:void 0),g;g=g?g.next:p.first;)for(m(g.value,g.key,this);g&&g.removed;)g=g.previous},has:function(h){return!!u(this,h)}}),aS(s,t?{get:function(h){var p=u(this,h);return p&&p.value},set:function(h,p){return l(this,h===0?0:h,p)}}:{add:function(h){return l(this,h=h===0?0:h,h)}}),uc&&Tz(s,"size",{configurable:!0,get:function(){return o(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=Jp(e),s=Jp(n);Pz(i,e,function(o,l){lS(this,{type:n,target:o,state:r(o),kind:l,last:void 0})},function(){for(var o=s(this),l=o.kind,u=o.last;u&&u.removed;)u=u.previous;return!o.target||!(o.last=u=u?u.next:o.state.first)?(o.target=void 0,vf(void 0,!0)):vf(l==="keys"?u.key:l==="values"?u.value:[u.key,u.value],!1)},t?"entries":"values",!t,!0),Lz(e)}},Dz=j_,Iz=KT;Dz("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Iz);var xf=xn,fc=Map.prototype,Oz={Map,set:xf(fc.set),get:xf(fc.get),has:xf(fc.has),remove:xf(fc.delete),proto:fc},Uz=Nl,Nz=xn,Fz=tu,Bz=Vh,zz=Jh,Qh=Oz,kz=vO,Hz=Qh.Map,Gz=Qh.has,Wz=Qh.get,Vz=Qh.set,$z=Nz([].push);Uz({target:"Map",stat:!0,forced:kz},{groupBy:function(e,t){Bz(e),Fz(t);var n=new Hz,r=0;return zz(e,function(s){var o=t(s,r++);Gz(n,o)?$z(Wz(n,o),s):Vz(n,o,[s])}),n}});var Xz=X_,qz=Zh,Yz=Xz?{}.toString:function(){return"[object "+qz(this)+"]"},jz=X_,Kz=Ul,Zz=Yz;jz||Kz(Object.prototype,"toString",Zz,{unsafe:!0});var Jz=Zh,Qz=String,ZT=function(i){if(Jz(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return Qz(i)},Z_=xn,ek=R_,tk=ZT,nk=Vh,ik=Z_("".charAt),cS=Z_("".charCodeAt),rk=Z_("".slice),uS=function(i){return function(e,t){var n=tk(nk(e)),r=ek(t),s=n.length,o,l;return r<0||r>=s?i?"":void 0:(o=cS(n,r),o<55296||o>56319||r+1===s||(l=cS(n,r+1))<56320||l>57343?i?ik(n,r):o:i?rk(n,r,r+2):(o-55296<<10)+(l-56320)+65536)}},sk={codeAt:uS(!1),charAt:uS(!0)},ak=sk.charAt,ok=ZT,JT=Ol,lk=k_,fS=H_,QT="String Iterator",ck=JT.set,uk=JT.getterFor(QT);lk(String,"String",function(i){ck(this,{type:QT,string:ok(i),index:0})},function(){var e=uk(this),t=e.string,n=e.index,r;return n>=t.length?fS(void 0,!0):(r=ak(t,n),e.index+=r.length,fS(r,!1))});var fk=Qi,ru=fk,hk=ru;hk.Map;var dk=j_,pk=KT;dk("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},pk);var mk=ru;mk.Set;var gk=Ll,_k=Array.isArray||function(e){return gk(e)==="Array"},vk=xn,xk=jn,e1=Kn,yk=Zh,Sk=eu,Ek=MT,t1=function(){},n1=Sk("Reflect","construct"),J_=/^\s*(?:class|function)\b/,Mk=vk(J_.exec),bk=!J_.test(t1),hc=function(e){if(!e1(e))return!1;try{return n1(t1,[],e),!0}catch{return!1}},i1=function(e){if(!e1(e))return!1;switch(yk(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return bk||!!Mk(J_,Ek(e))}catch{return!0}};i1.sham=!0;var r1=!n1||xk(function(){var i;return hc(hc.call)||!hc(Object)||!hc(function(){i=!0})||i})?i1:hc,hS=_k,Tk=r1,Ak=Ui,wk=Er,Ck=wk("species"),dS=Array,Rk=function(i){var e;return hS(i)&&(e=i.constructor,Tk(e)&&(e===dS||hS(e.prototype))?e=void 0:Ak(e)&&(e=e[Ck],e===null&&(e=void 0))),e===void 0?dS:e},Pk=Rk,Lk=function(i,e){return new(Pk(i))(e===0?0:e)},Dk=Kh,Ik=xn,Ok=E_,Uk=Qc,Nk=$h,Fk=Lk,pS=Ik([].push),Vs=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,s=i===6,o=i===7,l=i===5||s;return function(u,f,h,p){for(var m=Uk(u),g=Ok(m),y=Nk(g),x=Dk(f,h),_=0,v=p||Fk,A=e?v(u,y):t||o?v(u,0):void 0,T,E;y>_;_++)if((l||_ in g)&&(T=g[_],E=x(T,_,m),i))if(e)A[_]=E;else if(E)switch(i){case 3:return!0;case 5:return T;case 6:return _;case 2:pS(A,T)}else switch(i){case 4:return!1;case 7:pS(A,T)}return s?-1:n||r?r:A}},Bk={forEach:Vs(0),map:Vs(1),filter:Vs(2),some:Vs(3),every:Vs(4),find:Vs(5),findIndex:Vs(6),filterReject:Vs(7)},zk=xn,mS=K_,yf=jh.getWeakData,kk=Y_,Hk=rs,Gk=Dl,Qp=Ui,Wk=Jh,s1=Bk,gS=Nr,a1=Ol,Vk=a1.set,$k=a1.getterFor,Xk=s1.find,qk=s1.findIndex,Yk=zk([].splice),jk=0,Sf=function(i){return i.frozen||(i.frozen=new o1)},o1=function(){this.entries=[]},em=function(i,e){return Xk(i.entries,function(t){return t[0]===e})};o1.prototype={get:function(i){var e=em(this,i);if(e)return e[1]},has:function(i){return!!em(this,i)},set:function(i,e){var t=em(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=qk(this.entries,function(t){return t[0]===i});return~e&&Yk(this.entries,e,1),!!~e}};var Kk={getConstructor:function(i,e,t,n){var r=i(function(u,f){kk(u,s),Vk(u,{type:e,id:jk++,frozen:void 0}),Gk(f)||Wk(f,u[n],{that:u,AS_ENTRIES:t})}),s=r.prototype,o=$k(e),l=function(u,f,h){var p=o(u),m=yf(Hk(f),!0);return m===!0?Sf(p).set(f,h):m[p.id]=h,u};return mS(s,{delete:function(u){var f=o(this);if(!Qp(u))return!1;var h=yf(u);return h===!0?Sf(f).delete(u):h&&gS(h,f.id)&&delete h[f.id]},has:function(f){var h=o(this);if(!Qp(f))return!1;var p=yf(f);return p===!0?Sf(h).has(f):p&&gS(p,h.id)}}),mS(s,t?{get:function(f){var h=o(this);if(Qp(f)){var p=yf(f);return p===!0?Sf(h).get(f):p?p[h.id]:void 0}},set:function(f,h){return l(this,f,h)}}:{add:function(f){return l(this,f,!0)}}),r}},Zk=zT,_S=Qi,fh=xn,vS=K_,Jk=jh,Qk=j_,l1=Kk,Ef=Ui,Mf=Ol.enforce,eH=jn,tH=gT,su=Object,nH=Array.isArray,bf=su.isExtensible,c1=su.isFrozen,iH=su.isSealed,u1=su.freeze,rH=su.seal,sH=!_S.ActiveXObject&&"ActiveXObject"in _S,dc,f1=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},h1=Qk("WeakMap",f1,l1),el=h1.prototype,hh=fh(el.set),aH=function(){return Zk&&eH(function(){var i=u1([]);return hh(new h1,i,1),!c1(i)})};if(tH)if(sH){dc=l1.getConstructor(f1,"WeakMap",!0),Jk.enable();var xS=fh(el.delete),Tf=fh(el.has),yS=fh(el.get);vS(el,{delete:function(i){if(Ef(i)&&!bf(i)){var e=Mf(this);return e.frozen||(e.frozen=new dc),xS(this,i)||e.frozen.delete(i)}return xS(this,i)},has:function(e){if(Ef(e)&&!bf(e)){var t=Mf(this);return t.frozen||(t.frozen=new dc),Tf(this,e)||t.frozen.has(e)}return Tf(this,e)},get:function(e){if(Ef(e)&&!bf(e)){var t=Mf(this);return t.frozen||(t.frozen=new dc),Tf(this,e)?yS(this,e):t.frozen.get(e)}return yS(this,e)},set:function(e,t){if(Ef(e)&&!bf(e)){var n=Mf(this);n.frozen||(n.frozen=new dc),Tf(this,e)?hh(this,e,t):n.frozen.set(e,t)}else hh(this,e,t);return this}})}else aH()&&vS(el,{set:function(e,t){var n;return nH(e)&&(c1(e)?n=u1:iH(e)&&(n=rH)),hh(this,e,t),n&&n(e),this}});var oH=ru;oH.WeakMap;var lH=rs,cH=VT,uH=function(i,e,t,n){try{return n?e(lH(t)[0],t[1]):e(t)}catch(r){cH(i,"throw",r)}},fH=er,hH=Fr,dH=qh,pH=function(i,e,t){fH?hH.f(i,e,dH(0,t)):i[e]=t},mH=Kh,gH=Os,_H=Qc,vH=uH,xH=HT,yH=r1,SH=$h,SS=pH,EH=WT,MH=q_,ES=Array,bH=function(e){var t=_H(e),n=yH(this),r=arguments.length,s=r>1?arguments[1]:void 0,o=s!==void 0;o&&(s=mH(s,r>2?arguments[2]:void 0));var l=MH(t),u=0,f,h,p,m,g,y;if(l&&!(this===ES&&xH(l)))for(m=EH(t,l),g=m.next,h=n?new this:[];!(p=gH(g,m)).done;u++)y=o?vH(m,s,[p.value,u],!0):p.value,SS(h,u,y);else for(f=SH(t),h=n?new this(f):ES(f);f>u;u++)y=o?s(t[u],u):t[u],SS(h,u,y);return h.length=u,h},TH=Nl,AH=bH,wH=qT,CH=!wH(function(i){Array.from(i)});TH({target:"Array",stat:!0,forced:CH},{from:AH});var RH=ru;RH.Array.from;var MS=er,PH=xn,LH=Os,DH=jn,tm=dT,IH=B_,OH=U_,UH=Qc,NH=E_,Uo=Object.assign,bS=Object.defineProperty,FH=PH([].concat),BH=!Uo||DH(function(){if(MS&&Uo({b:1},Uo(bS({},"a",{enumerable:!0,get:function(){bS(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),Uo({},i)[t]!==7||tm(Uo({},e)).join("")!==n})?function(e,t){for(var n=UH(e),r=arguments.length,s=1,o=IH.f,l=OH.f;r>s;)for(var u=NH(arguments[s++]),f=o?FH(tm(u),o(u)):tm(u),h=f.length,p=0,m;h>p;)m=f[p++],(!MS||LH(l,u,m))&&(n[m]=u[m]);return n}:Uo,zH=Nl,TS=BH;zH({target:"Object",stat:!0,arity:2,forced:Object.assign!==TS},{assign:TS});var kH=ru;kH.Object.assign;var Af,Ph=new WeakMap;function d1(){if(Af!==void 0)return Af;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return Af=i?{passive:!1}:!1,Af}function Fl(i){var e=Ph.get(i)||[];return Ph.set(i,e),function(n,r,s){function o(l){l.defaultPrevented||s(l)}r.split(/\s+/g).forEach(function(l){e.push({elem:n,eventName:l,handler:o}),n.addEventListener(l,o,d1())})}}function HH(i){var e=Ph.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,s=t.handler;n.removeEventListener(r,s,d1())}),Ph.delete(i))}function GH(i){return i.touches?i.touches[i.touches.length-1]:i}function pl(i){var e=GH(i);return{x:e.clientX,y:e.clientY}}function wf(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var p1=["webkit","moz","ms","o"],WH=new RegExp("^-(?!(?:"+p1.join("|")+")-)");function VH(i){var e={};return Object.keys(i).forEach(function(t){if(!WH.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,p1.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function lo(i,e){e=VH(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,s){return s.toUpperCase()});i.style[n]=e[t]})}var $H=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=pl(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,s=t.lastPosition,o=Date.now(),l=pl(e),u={x:-(l.x-s.x),y:-(l.y-s.y)},f=o-r||16.7,h=u.x/f*16.7,p=u.y/f*16.7;n.x=h*this.velocityMultiplier,n.y=p*this.velocityMultiplier,this.delta=u,this.updateTime=o,this.lastPosition=l},i}(),XH=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?ts({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?ts({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(s){for(var o=Math.abs(r[s])<=10?0:r[s];o!==0;)n[s]+=o,o=o*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new $H(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function Sr(i,e,t){return Math.max(e,Math.min(t,i))}function m1(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var o=this,l=[],u=0;u<arguments.length;u++)l[u]=arguments[u];if(t){var f=Date.now(),h=f-r;r=f,h>=e&&i.apply(this,l)}clearTimeout(n),n=setTimeout(function(){i.apply(o,l)},e)}}function AS(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(s){Object.defineProperty(this,r,{value:Sr(s,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function nm(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function g1(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var s=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:m1.apply(void 0,rO([s],i))}),this[n]}}}}var qH=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),Ba([AS(0,1)],i.prototype,"damping",void 0),Ba([AS(0,1/0)],i.prototype,"thumbMinSize",void 0),Ba([nm],i.prototype,"renderByPixels",void 0),Ba([nm],i.prototype,"alwaysShowTracks",void 0),Ba([nm],i.prototype,"continuousScrolling",void 0),i}(),bl;(function(i){i.X="x",i.Y="y"})(bl||(bl={}));var YH=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),lo(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case bl.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case bl.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),wS=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new YH(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){lo(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),jH=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new wS(bl.X,t),this.yAxis=new wS(bl.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},Ba([g1(300)],i.prototype,"autoHideOnIdle",null),i}();function KH(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(l){return n[l]?parseFloat(n[l]):0}),s=r[0]+r[1],o=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+o,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function ZH(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),s=Math.max(t.left,n.left),o=Math.min(t.right,n.right),l=Math.min(t.bottom,n.bottom);return r<l&&s<o}function JH(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function QH(i,e,t){var n=i.options,r=i.offset,s=i.limit,o=i.track,l=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=Sr(e,0,s.x),t=Sr(t,0,s.y),e!==r.x&&o.xAxis.show(),t!==r.y&&o.yAxis.show(),n.alwaysShowTracks||o.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,lo(l,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),o.update(),{offset:ts({},r),limit:ts({},s)})}var CS=new WeakMap;function eG(i,e,t,n,r){n===void 0&&(n=0);var s=r===void 0?{}:r,o=s.easing,l=o===void 0?tG:o,u=s.callback,f=i.options,h=i.offset,p=i.limit;f.renderByPixels&&(e=Math.round(e),t=Math.round(t));var m=h.x,g=h.y,y=Sr(e,0,p.x)-m,x=Sr(t,0,p.y)-g,_=Date.now();function v(){var A=Date.now()-_,T=n?l(Math.min(A/n,1)):1;if(i.setPosition(m+y*T,g+x*T),A>=n)typeof u=="function"&&u.call(i);else{var E=requestAnimationFrame(v);CS.set(i,E)}}cancelAnimationFrame(CS.get(i)),v()}function tG(i){return Math.pow(i-1,3)+1}function nG(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,s=r===void 0?!0:r,o=n.onlyScrollIfNeeded,l=o===void 0?!1:o,u=n.offsetTop,f=u===void 0?0:u,h=n.offsetLeft,p=h===void 0?0:h,m=n.offsetBottom,g=m===void 0?0:m,y=i.containerEl,x=i.bounding,_=i.offset,v=i.limit;if(!(!e||!y.contains(e))){var A=e.getBoundingClientRect();if(!(l&&i.isVisible(e))){var T=s?A.top-x.top-f:A.bottom-x.bottom+g;i.setMomentum(A.left-x.left-p,Sr(T,-_.y,v.y-_.y))}}}var _1=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=ts(ts({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return ts({},e)},i.pluginName="",i.defaultOptions={},i}(),Lh={order:new Set,constructors:{}};function iG(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Lh.order.add(n),Lh.constructors[n]=t})}function rG(i,e){return Array.from(Lh.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Lh.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var hr;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(hr||(hr={}));function sG(i){var e=Fl(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!lG(r)){var s=aG(i,n.keyCode||n.which);if(s){var o=s[0],l=s[1];i.addTransformableMomentum(o,l,n,function(u){u?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function aG(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case hr.TAB:return oG(i);case hr.SPACE:return[0,200];case hr.PAGE_UP:return[0,-t.container.height+40];case hr.PAGE_DOWN:return[0,t.container.height-40];case hr.END:return[0,n.y-r.y];case hr.HOME:return[0,-r.y];case hr.LEFT:return[-40,0];case hr.UP:return[0,-40];case hr.RIGHT:return[40,0];case hr.DOWN:return[0,40];default:return null}}function oG(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function lG(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var Wr;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(Wr||(Wr={}));function cG(i){var e=Fl(i),t=i.containerEl,n=i.track,r=n.xAxis,s=n.yAxis;function o(g,y){var x=i.size,_=i.limit,v=i.offset;if(g===Wr.X){var A=x.container.width+(r.thumb.realSize-r.thumb.displaySize);return Sr(y/A*x.content.width,0,_.x)-v.x}if(g===Wr.Y){var T=x.container.height+(s.thumb.realSize-s.thumb.displaySize);return Sr(y/T*x.content.height,0,_.y)-v.y}return 0}function l(g){if(wf(g,[r.element,r.thumb.element]))return Wr.X;if(wf(g,[s.element,s.thumb.element]))return Wr.Y}var u,f,h,p,m;e(t,"click",function(g){if(!(f||!wf(g.target,[r.element,s.element]))){var y=g.target,x=l(y),_=y.getBoundingClientRect(),v=pl(g);if(x===Wr.X){var A=v.x-_.left-r.thumb.displaySize/2;i.setMomentum(o(x,A),0)}if(x===Wr.Y){var A=v.y-_.top-s.thumb.displaySize/2;i.setMomentum(0,o(x,A))}}}),e(t,"mousedown",function(g){if(wf(g.target,[r.thumb.element,s.thumb.element])){u=!0;var y=g.target,x=pl(g),_=y.getBoundingClientRect();p=l(y),h={x:x.x-_.left,y:x.y-_.top},m=t.getBoundingClientRect(),lo(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(g){if(u){f=!0;var y=pl(g);if(p===Wr.X){var x=y.x-h.x-m.left;i.setMomentum(o(p,x),0)}if(p===Wr.Y){var x=y.y-h.y-m.top;i.setMomentum(0,o(p,x))}}}),e(window,"mouseup blur",function(){u=f=!1,lo(i.containerEl,{"-user-select":""})})}function uG(i){var e=Fl(i);e(window,"resize",m1(i.update.bind(i),300))}function fG(i){var e=Fl(i),t=i.containerEl,n=i.contentEl,r=!1,s=!1,o;function l(u){var f=u.x,h=u.y;if(!(!f&&!h)){var p=i.offset,m=i.limit;i.setMomentum(Sr(p.x+f,0,m.x)-p.x,Sr(p.y+h,0,m.y)-p.y),o=requestAnimationFrame(function(){l({x:f,y:h})})}}e(window,"mousemove",function(u){if(r){cancelAnimationFrame(o);var f=hG(i,u);l(f)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(o),r=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(o),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(o),r=!1,s=!1}),e(t,"scroll",function(u){u.preventDefault(),t.scrollTop=t.scrollLeft=0})}function hG(i,e){var t=i.bounding,n=t.top,r=t.right,s=t.bottom,o=t.left,l=pl(e),u=l.x,f=l.y,h={x:0,y:0},p=20;return u===0&&f===0||(u>r-p?h.x=u-r+p:u<o+p&&(h.x=u-o-p),f>s-p?h.y=f-s+p:f<n+p&&(h.y=f-n-p),h.x*=2,h.y*=2),h}var Cf;function dG(i){var e=i.options.delegateTo||i.containerEl,t=new XH,n=Fl(i),r,s=0;n(e,"touchstart",function(o){t.track(o),i.setMomentum(0,0),s===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),s++}),n(e,"touchmove",function(o){if(!(Cf&&Cf!==i)){t.update(o);var l=t.getDelta(),u=l.x,f=l.y;i.addTransformableMomentum(u,f,o,function(h){h&&o.cancelable&&(o.preventDefault(),Cf=i)})}}),n(e,"touchcancel touchend",function(o){var l=t.getEasingDistance(r);i.addTransformableMomentum(l.x,l.y,o),s--,s===0&&(i.options.damping=r),t.release(o),Cf=null})}function pG(i){var e=Fl(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var s=gG(r),o=s.x,l=s.y;i.addTransformableMomentum(o,l,r,function(u){u&&r.preventDefault()})})}var pc={STANDARD:1,OTHERS:-3},RS=[1,28,500],mG=function(i){return RS[i]||RS[0]};function gG(i){if("deltaX"in i){var e=mG(i.deltaMode);return{x:i.deltaX/pc.STANDARD*e,y:i.deltaY/pc.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/pc.OTHERS,y:i.wheelDeltaY/pc.OTHERS}:{x:0,y:i.wheelDelta/pc.OTHERS}}const PS=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:sG,mouseHandler:cG,resizeHandler:uG,selectHandler:fG,touchHandler:dG,wheelHandler:pG},Symbol.toStringTag,{value:"Module"}));var Xr=new Map,LS=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new qH(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),lo(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(u){r.appendChild(u)}),e.appendChild(r),this.track=new jH(this),this.size=this.getSize(),this._plugins=rG(this,this.options.plugins);var s=e.scrollLeft,o=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,o,{withoutCallbacks:!0});var l=window.ResizeObserver;typeof l=="function"&&(this._observer=new l(function(){n.update()}),this._observer.observe(r)),Xr.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=Xr.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return KH(this)},i.prototype.update=function(){JH(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return ZH(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=QH(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(o){o.call(r,s)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),eG(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),nG(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var s=this._plugins.reduce(function(l,u){return u.transformDelta(l,n)||l},{x:e,y:t}),o=!this._shouldPropagateMomentum(s.x,s.y);o&&this.addMomentum(s.x,s.y),r&&r.call(this,o)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;HH(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),Xr.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(s){t.appendChild(s)}),lo(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(PS).forEach(function(t){PS[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,s=n.offset,o=n.limit;if(!r.continuousScrolling)return!1;o.x===0&&o.y===0&&this._updateDebounced();var l=Sr(e+s.x,0,o.x),u=Sr(t+s.y,0,o.y),f=!0;return f=f&&l===s.x,f=f&&u===s.y,f=f&&(s.x===o.x||s.x===0||s.y===o.y||s.y===0),f},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=ts({},this._momentum);this._plugins.forEach(function(s){s.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,s=t._momentum,o=r[e],l=s[e];if(Math.abs(l)<=.1)return{momentum:0,position:o+l};var u=l*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:o+l-u}},Ba([g1(100,!0)],i.prototype,"_updateDebounced",null),i}(),_G="rgba(222, 222, 222, .75)",vG="rgba(0, 0, 0, .5)",xG=`
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
  background: `+_G+`;
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
  background: `+vG+`;
  border-radius: 4px;
}
`,v1="smooth-scrollbar-style",Dh=!1;function DS(){if(!(Dh||typeof window>"u")){var i=document.createElement("style");i.id=v1,i.textContent=xG,document.head&&document.head.appendChild(i),Dh=!0}}function yG(){if(!(!Dh||typeof window>"u")){var i=document.getElementById(v1);!i||!i.parentNode||(i.parentNode.removeChild(i),Dh=!1)}}var IS=function(i){iO(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return DS(),Xr.has(t)?Xr.get(t):new LS(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return Xr.has(t)},e.get=function(t){return Xr.get(t)},e.getAll=function(){return Array.from(Xr.values())},e.destroy=function(t){var n=Xr.get(t);n&&n.destroy()},e.destroyAll=function(){Xr.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return iG.apply(void 0,t)},e.attachStyle=function(){return DS()},e.detachStyle=function(){return yG()},e.version="8.8.4",e.ScrollbarPlugin=_1,e}(LS);const pn={humbergerBtnSelector:"button.Header__Icon",logoSelector:"Header__LogoImage",buttonParent:"Header__FlexItem",svgCart:"cart",sidebarBtnConfig:{attributes:{"data-action":"close-drawer","data-drawer-id":"sidebar-cart","aria-label":"カートを閉じる"},classes:["Drawer__Close","Icon-Wrapper--clickable"]},cartAtagConfig:{attributes:{href:"/cart","data-action":"open-drawer","data-drawer-id":"sidebar-cart","aria-label":"カートを開く","aria-expanded":"false"},classes:["Header__Icon","Icon-Wrapper","Icon-Wrapper--clickable","hidden-desk"]},svg:{cartDesktop:"cartDesktopSvg",cartPhone:"cartPhoneSvg"},page:{breakpoint:769},time:{debounce:250},phone:{width:"20",height:"15",rectWidth:"20",rectHeight:"1"},tabletAndUp:{width:"30",height:"25",rectWidth:"30",rectHeight:"2"},logo:{white:"./logo-white.png",black:"./logo-black.png",phone:"18px",tablet:"28px"},smallCart:{width:"18",height:"18",strokeWidth:"0.8"},largeCart:{width:"28",height:"28",strokeWidth:"1.2"},smallHeader:{height:"48"},largeHeader:{height:"64"},target:{pageContainer:"page-container",header:"section-header",announcement:"section-announcement"},rootProperty:{headerHeight:"--header-height",announcementHeight:"--announcement-bar-height"}};var x1={exports:{}},im={exports:{}},rm={exports:{}},sm={exports:{}},OS;function Q_(){return OS||(OS=1,function(i){(function(e,t){i.exports?i.exports=t():e.EvEmitter=t()})(typeof window<"u"?window:on,function(){function e(){}let t=e.prototype;return t.on=function(n,r){if(!n||!r)return this;let s=this._events=this._events||{},o=s[n]=s[n]||[];return o.includes(r)||o.push(r),this},t.once=function(n,r){if(!n||!r)return this;this.on(n,r);let s=this._onceEvents=this._onceEvents||{},o=s[n]=s[n]||{};return o[r]=!0,this},t.off=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;let o=s.indexOf(r);return o!=-1&&s.splice(o,1),this},t.emitEvent=function(n,r){let s=this._events&&this._events[n];if(!s||!s.length)return this;s=s.slice(0),r=r||[];let o=this._onceEvents&&this._onceEvents[n];for(let l of s)o&&o[l]&&(this.off(n,l),delete o[l]),l.apply(this,r);return this},t.allOff=function(){return delete this._events,delete this._onceEvents,this},e})}(sm)),sm.exports}var am={exports:{}};/*!
 * Infinite Scroll v2.0.4
 * measure size of elements
 * MIT license
 */var US;function y1(){return US||(US=1,function(i){(function(e,t){i.exports?i.exports=t():e.getSize=t()})(window,function(){function t(o){let l=parseFloat(o);return o.indexOf("%")==-1&&!isNaN(l)&&l}let n=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];function r(){let o={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0};return n.forEach(l=>{o[l]=0}),o}function s(o){if(typeof o=="string"&&(o=document.querySelector(o)),!(o&&typeof o=="object"&&o.nodeType))return;let u=getComputedStyle(o);if(u.display=="none")return r();let f={};f.width=o.offsetWidth,f.height=o.offsetHeight;let h=f.isBorderBox=u.boxSizing=="border-box";n.forEach(T=>{let E=u[T],C=parseFloat(E);f[T]=isNaN(C)?0:C});let p=f.paddingLeft+f.paddingRight,m=f.paddingTop+f.paddingBottom,g=f.marginLeft+f.marginRight,y=f.marginTop+f.marginBottom,x=f.borderLeftWidth+f.borderRightWidth,_=f.borderTopWidth+f.borderBottomWidth,v=t(u.width);v!==!1&&(f.width=v+(h?0:p+x));let A=t(u.height);return A!==!1&&(f.height=A+(h?0:m+_)),f.innerWidth=f.width-(p+x),f.innerHeight=f.height-(m+_),f.outerWidth=f.width+g,f.outerHeight=f.height+y,f}return s})}(am)),am.exports}var om={exports:{}},NS;function fo(){return NS||(NS=1,function(i){(function(e,t){i.exports?i.exports=t(e):e.fizzyUIUtils=t(e)})(on,function(t){let n={};n.extend=function(s,o){return Object.assign(s,o)},n.modulo=function(s,o){return(s%o+o)%o},n.makeArray=function(s){return Array.isArray(s)?s:s==null?[]:typeof s=="object"&&typeof s.length=="number"?[...s]:[s]},n.removeFrom=function(s,o){let l=s.indexOf(o);l!=-1&&s.splice(l,1)},n.getParent=function(s,o){for(;s.parentNode&&s!=document.body;)if(s=s.parentNode,s.matches(o))return s},n.getQueryElement=function(s){return typeof s=="string"?document.querySelector(s):s},n.handleEvent=function(s){let o="on"+s.type;this[o]&&this[o](s)},n.filterFindElements=function(s,o){return s=n.makeArray(s),s.filter(l=>l instanceof HTMLElement).reduce((l,u)=>{if(!o)return l.push(u),l;u.matches(o)&&l.push(u);let f=u.querySelectorAll(o);return l=l.concat(...f),l},[])},n.debounceMethod=function(s,o,l){l=l||100;let u=s.prototype[o],f=o+"Timeout";s.prototype[o]=function(){clearTimeout(this[f]);let h=arguments;this[f]=setTimeout(()=>{u.apply(this,h),delete this[f]},l)}},n.docReady=function(s){let o=document.readyState;o=="complete"||o=="interactive"?setTimeout(s):document.addEventListener("DOMContentLoaded",s)},n.toDashed=function(s){return s.replace(/(.)([A-Z])/g,function(o,l,u){return l+"-"+u}).toLowerCase()};let r=t.console;return n.htmlInit=function(s,o){n.docReady(function(){let u="data-"+n.toDashed(o),f=document.querySelectorAll(`[${u}]`),h=t.jQuery;[...f].forEach(p=>{let m=p.getAttribute(u),g;try{g=m&&JSON.parse(m)}catch(x){r&&r.error(`Error parsing ${u} on ${p.className}: ${x}`);return}let y=new s(p,g);h&&h.data(p,o,y)})})},n})}(om)),om.exports}var lm={exports:{}},FS;function SG(){return FS||(FS=1,function(i){(function(e,t){i.exports?i.exports=t(y1()):(e.Flickity=e.Flickity||{},e.Flickity.Cell=t(e.getSize))})(typeof window<"u"?window:on,function(t){const n="flickity-cell";function r(o){this.element=o,this.element.classList.add(n),this.x=0,this.unselect()}let s=r.prototype;return s.destroy=function(){this.unselect(),this.element.classList.remove(n),this.element.style.transform="",this.element.removeAttribute("aria-hidden")},s.getSize=function(){this.size=t(this.element)},s.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},s.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},s.remove=function(){this.element.remove()},r})}(lm)),lm.exports}var cm={exports:{}},BS;function EG(){return BS||(BS=1,function(i){(function(e,t){i.exports?i.exports=t():(e.Flickity=e.Flickity||{},e.Flickity.Slide=t())})(typeof window<"u"?window:on,function(){function t(r,s,o){this.beginMargin=r,this.endMargin=s,this.cellAlign=o,this.cells=[],this.outerWidth=0,this.height=0}let n=t.prototype;return n.addCell=function(r){this.cells.push(r),this.outerWidth+=r.size.outerWidth,this.height=Math.max(r.size.outerHeight,this.height),this.cells.length===1&&(this.x=r.x,this.firstMargin=r.size[this.beginMargin])},n.updateTarget=function(){let r=this.getLastCell(),s=r?r.size[this.endMargin]:0,o=this.outerWidth-(this.firstMargin+s);this.target=this.x+this.firstMargin+o*this.cellAlign},n.getLastCell=function(){return this.cells[this.cells.length-1]},n.select=function(){this.cells.forEach(r=>r.select())},n.unselect=function(){this.cells.forEach(r=>r.unselect())},n.getCellElements=function(){return this.cells.map(r=>r.element)},t})}(cm)),cm.exports}var um={exports:{}},zS;function MG(){return zS||(zS=1,function(i){(function(e,t){i.exports?i.exports=t(fo()):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=t(e.fizzyUIUtils))})(typeof window<"u"?window:on,function(t){let n={};return n.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},n.animate=function(){this.applyDragForce(),this.applySelectedAttraction();let r=this.x;this.integratePhysics(),this.positionSlider(),this.settle(r),this.isAnimating&&requestAnimationFrame(()=>this.animate())},n.positionSlider=function(){let r=this.x;this.isWrapping&&(r=t.modulo(r,this.slideableWidth)-this.slideableWidth,this.shiftWrapCells(r)),this.setTranslateX(r,this.isAnimating),this.dispatchScrollEvent()},n.setTranslateX=function(r,s){r+=this.cursorPosition,this.options.rightToLeft&&(r=-r);let o=this.getPositionValue(r);this.slider.style.transform=s?`translate3d(${o},0,0)`:`translateX(${o})`},n.dispatchScrollEvent=function(){let r=this.slides[0];if(!r)return;let s=-this.x-r.target,o=s/this.slidesWidth;this.dispatchEvent("scroll",null,[o,s])},n.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},n.getPositionValue=function(r){return this.options.percentPosition?Math.round(r/this.size.innerWidth*1e4)*.01+"%":Math.round(r)+"px"},n.settle=function(r){!this.isPointerDown&&Math.round(this.x*100)===Math.round(r*100)&&this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},n.shiftWrapCells=function(r){let s=this.cursorPosition+r;this._shiftCells(this.beforeShiftCells,s,-1);let o=this.size.innerWidth-(r+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,o,1)},n._shiftCells=function(r,s,o){r.forEach(l=>{let u=s>0?o:0;this._wrapShiftCell(l,u),s-=l.size.outerWidth})},n._unshiftCells=function(r){!r||!r.length||r.forEach(s=>this._wrapShiftCell(s,0))},n._wrapShiftCell=function(r,s){this._renderCellPosition(r,r.x+this.slideableWidth*s)},n.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},n.applyForce=function(r){this.velocity+=r},n.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},n.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},n.applyDragForce=function(){if(!this.isDraggable||!this.isPointerDown)return;let s=this.dragX-this.x-this.velocity;this.applyForce(s)},n.applySelectedAttraction=function(){if(this.isDraggable&&this.isPointerDown||this.isFreeScrolling||!this.slides.length)return;let o=(this.selectedSlide.target*-1-this.x)*this.options.selectedAttraction;this.applyForce(o)},n})}(um)),um.exports}var kS;function _a(){return kS||(kS=1,function(i){(function(e,t){if(i.exports)i.exports=t(e,Q_(),y1(),fo(),SG(),EG(),MG());else{let n=e.Flickity;e.Flickity=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,n.Cell,n.Slide,n.animatePrototype)}})(typeof window<"u"?window:on,function(t,n,r,s,o,l,u){const{getComputedStyle:f,console:h}=t;let{jQuery:p}=t,m=0,g={};function y(E,C){let R=s.getQueryElement(E);if(!R){h&&h.error(`Bad element for Flickity: ${R||E}`);return}if(this.element=R,this.element.flickityGUID){let w=g[this.element.flickityGUID];return w&&w.option(C),w}p&&(this.$element=p(this.element)),this.options={...this.constructor.defaults},this.option(C),this._create()}y.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},y.create={};let x=y.prototype;Object.assign(x,n.prototype),x._create=function(){let{resize:E,watchCSS:C,rightToLeft:R}=this.options,w=this.guid=++m;this.element.flickityGUID=w,g[w]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.beginMargin=R?"marginRight":"marginLeft",this.endMargin=R?"marginLeft":"marginRight",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),this.focusableElems=[this.element],(E||C)&&t.addEventListener("resize",this);for(let z in this.options.on){let G=this.options.on[z];this.on(z,G)}for(let z in y.create)y.create[z].call(this);C?this.watchCSS():this.activate()},x.option=function(E){Object.assign(this.options,E)},x.activate=function(){if(this.isActive)return;this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();let E=this._filterFindCellElements(this.element.children);this.slider.append(...E),this.viewport.append(this.slider),this.element.append(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready")},x._createSlider=function(){let E=document.createElement("div");E.className="flickity-slider",this.slider=E},x._filterFindCellElements=function(E){return s.filterFindElements(E,this.options.cellSelector)},x.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize()},x._makeCells=function(E){return this._filterFindCellElements(E).map(R=>new o(R))},x.getLastCell=function(){return this.cells[this.cells.length-1]},x.getLastSlide=function(){return this.slides[this.slides.length-1]},x.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},x._positionCells=function(E){E=E||0,this.maxCellHeight=E&&this.maxCellHeight||0;let C=0;if(E>0){let R=this.cells[E-1];C=R.x+R.size.outerWidth}this.cells.slice(E).forEach(R=>{R.x=C,this._renderCellPosition(R,C),C+=R.size.outerWidth,this.maxCellHeight=Math.max(R.size.outerHeight,this.maxCellHeight)}),this.slideableWidth=C,this.updateSlides(),this._containSlides(),this.slidesWidth=this.cells.length?this.getLastSlide().target-this.slides[0].target:0},x._renderCellPosition=function(E,C){let R=this.options.rightToLeft?-1:1,w=C*R;this.options.percentPosition&&(w*=this.size.innerWidth/E.size.width);let z=this.getPositionValue(w);E.element.style.transform=`translateX( ${z} )`},x._sizeCells=function(E){E.forEach(C=>C.getSize())},x.updateSlides=function(){if(this.slides=[],!this.cells.length)return;let{beginMargin:E,endMargin:C}=this,R=new l(E,C,this.cellAlign);this.slides.push(R);let w=this._getCanCellFit();this.cells.forEach((z,G)=>{if(!R.cells.length){R.addCell(z);return}let M=R.outerWidth-R.firstMargin+(z.size.outerWidth-z.size[C]);w(G,M)||(R.updateTarget(),R=new l(E,C,this.cellAlign),this.slides.push(R)),R.addCell(z)}),R.updateTarget(),this.updateSelectedSlide()},x._getCanCellFit=function(){let{groupCells:E}=this.options;if(!E)return()=>!1;if(typeof E=="number"){let z=parseInt(E,10);return G=>G%z!==0}let C=1,R=typeof E=="string"&&E.match(/^(\d+)%$/);R&&(C=parseInt(R[1],10)/100);let w=(this.size.innerWidth+1)*C;return(z,G)=>G<=w},x._init=x.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},x.getSize=function(){this.size=r(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};let _={left:0,center:.5,right:1};x.setCellAlign=function(){let{cellAlign:E,rightToLeft:C}=this.options,R=_[E];this.cellAlign=R!==void 0?R:E,C&&(this.cellAlign=1-this.cellAlign)},x.setGallerySize=function(){if(!this.options.setGallerySize)return;let E=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=`${E}px`},x._updateWrapShiftCells=function(){if(this.isWrapping=this.getIsWrapping(),!this.isWrapping)return;this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);let E=this.cursorPosition,C=this.cells.length-1;this.beforeShiftCells=this._getGapCells(E,C,-1);let R=this.size.innerWidth-this.cursorPosition;this.afterShiftCells=this._getGapCells(R,0,1)},x.getIsWrapping=function(){let{wrapAround:E}=this.options;if(!E||this.slides.length<2)return!1;if(E!=="fill")return!0;let C=this.slideableWidth-this.size.innerWidth;if(C>this.size.innerWidth)return!0;for(let R of this.cells)if(R.size.outerWidth>C)return!1;return!0},x._getGapCells=function(E,C,R){let w=[];for(;E>0;){let z=this.cells[C];if(!z)break;w.push(z),C+=R,E-=z.size.outerWidth}return w},x._containSlides=function(){if(!(this.options.contain&&!this.isWrapping&&this.cells.length))return;let C=this.slideableWidth-this.getLastCell().size[this.endMargin];if(C<this.size.innerWidth)this.slides.forEach(w=>{w.target=C*this.cellAlign});else{let w=this.cursorPosition+this.cells[0].size[this.beginMargin],z=C-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(G=>{G.target=Math.max(G.target,w),G.target=Math.min(G.target,z)})}},x.dispatchEvent=function(E,C,R){let w=C?[C].concat(R):R;if(this.emitEvent(E,w),p&&this.$element){E+=this.options.namespaceJQueryEvents?".flickity":"";let z=E;if(C){let G=new p.Event(C);G.type=E,z=G}this.$element.trigger(z,R)}};const v=["dragStart","dragMove","dragEnd","pointerDown","pointerMove","pointerEnd","staticClick"];let A=x.emitEvent;x.emitEvent=function(E,C){if(E==="staticClick"){let G=this.getParentCell(C[0].target),M=G&&G.element,U=G&&this.cells.indexOf(G);C=C.concat(M,U)}if(A.call(this,E,C),!v.includes(E)||!p||!this.$element)return;E+=this.options.namespaceJQueryEvents?".flickity":"";let w=C.shift(0),z=new p.Event(w);z.type=E,this.$element.trigger(z,C)},x.select=function(E,C,R){if(!this.isActive||(E=parseInt(E,10),this._wrapSelect(E),(this.isWrapping||C)&&(E=s.modulo(E,this.slides.length)),!this.slides[E]))return;let w=this.selectedIndex;this.selectedIndex=E,this.updateSelectedSlide(),R?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[E]),E!==w&&this.dispatchEvent("change",null,[E])},x._wrapSelect=function(E){if(!this.isWrapping)return;const{selectedIndex:C,slideableWidth:R,slides:{length:w}}=this;if(!this.isDragSelect){let z=s.modulo(E,w),G=Math.abs(z-C),M=Math.abs(z+w-C),U=Math.abs(z-w-C);M<G?E+=w:U<G&&(E-=w)}E<0?this.x-=R:E>=w&&(this.x+=R)},x.previous=function(E,C){this.select(this.selectedIndex-1,E,C)},x.next=function(E,C){this.select(this.selectedIndex+1,E,C)},x.updateSelectedSlide=function(){let E=this.slides[this.selectedIndex];E&&(this.unselectSelectedSlide(),this.selectedSlide=E,E.select(),this.selectedCells=E.cells,this.selectedElements=E.getCellElements(),this.selectedCell=E.cells[0],this.selectedElement=this.selectedElements[0])},x.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},x.selectInitialIndex=function(){let E=this.options.initialIndex;if(this.isInitActivated){this.select(this.selectedIndex,!1,!0);return}if(E&&typeof E=="string"&&this.queryCell(E)){this.selectCell(E,!1,!0);return}let C=0;E&&this.slides[E]&&(C=E),this.select(C,!1,!0)},x.selectCell=function(E,C,R){let w=this.queryCell(E);if(!w)return;let z=this.getCellSlideIndex(w);this.select(z,C,R)},x.getCellSlideIndex=function(E){let C=this.slides.find(R=>R.cells.includes(E));return this.slides.indexOf(C)},x.getCell=function(E){for(let C of this.cells)if(C.element===E)return C},x.getCells=function(E){return E=s.makeArray(E),E.map(C=>this.getCell(C)).filter(Boolean)},x.getCellElements=function(){return this.cells.map(E=>E.element)},x.getParentCell=function(E){let C=this.getCell(E);if(C)return C;let R=E.closest(".flickity-slider > *");return this.getCell(R)},x.getAdjacentCellElements=function(E,C){if(!E)return this.selectedSlide.getCellElements();C=C===void 0?this.selectedIndex:C;let R=this.slides.length;if(1+E*2>=R)return this.getCellElements();let w=[];for(let z=C-E;z<=C+E;z++){let G=this.isWrapping?s.modulo(z,R):z,M=this.slides[G];M&&(w=w.concat(M.getCellElements()))}return w},x.queryCell=function(E){return typeof E=="number"?this.cells[E]:(typeof E=="string"&&!E.match(/^[#.]?[\d/]/)&&(E=this.element.querySelector(E)),this.getCell(E))},x.uiChange=function(){this.emitEvent("uiChange")},x.onresize=function(){this.watchCSS(),this.resize()},s.debounceMethod(y,"onresize",150),x.resize=function(){if(!this.isActive||this.isAnimating||this.isDragging)return;this.getSize(),this.isWrapping&&(this.x=s.modulo(this.x,this.slideableWidth)),this.positionCells(),this._updateWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");let E=this.selectedElements&&this.selectedElements[0];this.selectCell(E,!1,!0)},x.watchCSS=function(){if(!this.options.watchCSS)return;f(this.element,":after").content.includes("flickity")?this.activate():this.deactivate()},x.onkeydown=function(E){let{activeElement:C}=document,R=y.keyboardHandlers[E.key];if(!this.options.accessibility||!C||!R)return;this.focusableElems.some(z=>C===z)&&R.call(this)},y.keyboardHandlers={ArrowLeft:function(){this.uiChange();let E=this.options.rightToLeft?"next":"previous";this[E]()},ArrowRight:function(){this.uiChange();let E=this.options.rightToLeft?"previous":"next";this[E]()}},x.focus=function(){this.element.focus({preventScroll:!0})},x.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(E=>E.destroy()),this.viewport.remove(),this.element.append(...this.slider.children),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},x.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),p&&this.$element&&p.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete g[this.guid]},Object.assign(x,u),y.data=function(E){if(E=s.getQueryElement(E),E)return g[E.flickityGUID]},s.htmlInit(y,"flickity");let{jQueryBridget:T}=t;return p&&T&&T("flickity",y,p),y.setJQuery=function(E){p=E},y.Cell=o,y.Slide=l,y})}(rm)),rm.exports}var fm={exports:{}},hm={exports:{}};/*!
 * Unidragger v3.0.1
 * Draggable base class
 * MIT license
 */var HS;function bG(){return HS||(HS=1,function(i){(function(e,t){i.exports?i.exports=t(e,Q_()):e.Unidragger=t(e,e.EvEmitter)})(typeof window<"u"?window:on,function(t,n){function r(){}let s=r.prototype=Object.create(n.prototype);s.handleEvent=function(h){let p="on"+h.type;this[p]&&this[p](h)};let o,l;"ontouchstart"in t?(o="touchstart",l=["touchmove","touchend","touchcancel"]):t.PointerEvent?(o="pointerdown",l=["pointermove","pointerup","pointercancel"]):(o="mousedown",l=["mousemove","mouseup"]),s.touchActionValue="none",s.bindHandles=function(){this._bindHandles("addEventListener",this.touchActionValue)},s.unbindHandles=function(){this._bindHandles("removeEventListener","")},s._bindHandles=function(h,p){this.handles.forEach(m=>{m[h](o,this),m[h]("click",this),t.PointerEvent&&(m.style.touchAction=p)})},s.bindActivePointerEvents=function(){l.forEach(h=>{t.addEventListener(h,this)})},s.unbindActivePointerEvents=function(){l.forEach(h=>{t.removeEventListener(h,this)})},s.withPointer=function(h,p){p.pointerId===this.pointerIdentifier&&this[h](p,p)},s.withTouch=function(h,p){let m;for(let g of p.changedTouches)g.identifier===this.pointerIdentifier&&(m=g);m&&this[h](p,m)},s.onmousedown=function(h){this.pointerDown(h,h)},s.ontouchstart=function(h){this.pointerDown(h,h.changedTouches[0])},s.onpointerdown=function(h){this.pointerDown(h,h)};const u=["TEXTAREA","INPUT","SELECT","OPTION"],f=["radio","checkbox","button","submit","image","file"];return s.pointerDown=function(h,p){let m=u.includes(h.target.nodeName),g=f.includes(h.target.type),y=!m||g;!this.isPointerDown&&!h.button&&y&&(this.isPointerDown=!0,this.pointerIdentifier=p.pointerId!==void 0?p.pointerId:p.identifier,this.pointerDownPointer={pageX:p.pageX,pageY:p.pageY},this.bindActivePointerEvents(),this.emitEvent("pointerDown",[h,p]))},s.onmousemove=function(h){this.pointerMove(h,h)},s.onpointermove=function(h){this.withPointer("pointerMove",h)},s.ontouchmove=function(h){this.withTouch("pointerMove",h)},s.pointerMove=function(h,p){let m={x:p.pageX-this.pointerDownPointer.pageX,y:p.pageY-this.pointerDownPointer.pageY};this.emitEvent("pointerMove",[h,p,m]),!this.isDragging&&this.hasDragStarted(m)&&this.dragStart(h,p),this.isDragging&&this.dragMove(h,p,m)},s.hasDragStarted=function(h){return Math.abs(h.x)>3||Math.abs(h.y)>3},s.dragStart=function(h,p){this.isDragging=!0,this.isPreventingClicks=!0,this.emitEvent("dragStart",[h,p])},s.dragMove=function(h,p,m){this.emitEvent("dragMove",[h,p,m])},s.onmouseup=function(h){this.pointerUp(h,h)},s.onpointerup=function(h){this.withPointer("pointerUp",h)},s.ontouchend=function(h){this.withTouch("pointerUp",h)},s.pointerUp=function(h,p){this.pointerDone(),this.emitEvent("pointerUp",[h,p]),this.isDragging?this.dragEnd(h,p):this.staticClick(h,p)},s.dragEnd=function(h,p){this.isDragging=!1,setTimeout(()=>delete this.isPreventingClicks),this.emitEvent("dragEnd",[h,p])},s.pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this.unbindActivePointerEvents(),this.emitEvent("pointerDone")},s.onpointercancel=function(h){this.withPointer("pointerCancel",h)},s.ontouchcancel=function(h){this.withTouch("pointerCancel",h)},s.pointerCancel=function(h,p){this.pointerDone(),this.emitEvent("pointerCancel",[h,p])},s.onclick=function(h){this.isPreventingClicks&&h.preventDefault()},s.staticClick=function(h,p){let m=h.type==="mouseup";m&&this.isIgnoringMouseUp||(this.emitEvent("staticClick",[h,p]),m&&(this.isIgnoringMouseUp=!0,setTimeout(()=>{delete this.isIgnoringMouseUp},400)))},r})}(hm)),hm.exports}var GS;function TG(){return GS||(GS=1,function(i){(function(e,t){i.exports?i.exports=t(e,_a(),bG(),fo()):e.Flickity=t(e,e.Flickity,e.Unidragger,e.fizzyUIUtils)})(typeof window<"u"?window:on,function(t,n,r,s){Object.assign(n.defaults,{draggable:">1",dragThreshold:3});let o=n.prototype;Object.assign(o,r.prototype),o.touchActionValue="",n.create.drag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),this.on("pointerDown",this.handlePointerDown),this.on("pointerUp",this.handlePointerUp),this.on("pointerDown",this.handlePointerDone),this.on("dragStart",this.handleDragStart),this.on("dragMove",this.handleDragMove),this.on("dragEnd",this.handleDragEnd),this.on("staticClick",this.handleStaticClick)},o.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},o.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},o.updateDraggable=function(){this.options.draggable===">1"?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.element.classList.toggle("is-draggable",this.isDraggable)},o._uiChangeDrag=function(){delete this.isFreeScrolling},o.handlePointerDown=function(u){if(!this.isDraggable){this.bindActivePointerEvents(u);return}let f=u.type==="touchstart",h=u.pointerType==="touch",p=u.target.matches("input, textarea, select");!f&&!h&&!p&&u.preventDefault(),p||this.focus(),document.activeElement!==this.element&&document.activeElement.blur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),t.addEventListener("scroll",this),this.bindActivePointerEvents(u)},o.hasDragStarted=function(u){return Math.abs(u.x)>this.options.dragThreshold},o.handlePointerUp=function(){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down")},o.handlePointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},o.handleDragStart=function(){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this))},o.handleDragMove=function(u,f,h){if(!this.isDraggable)return;u.preventDefault(),this.previousDragX=this.dragX;let p=this.options.rightToLeft?-1:1;this.isWrapping&&(h.x%=this.slideableWidth);let m=this.dragStartPosition+h.x*p;if(!this.isWrapping){let g=Math.max(-this.slides[0].target,this.dragStartPosition);m=m>g?(m+g)*.5:m;let y=Math.min(-this.getLastSlide().target,this.dragStartPosition);m=m<y?(m+y)*.5:m}this.dragX=m,this.dragMoveTime=new Date},o.handleDragEnd=function(){if(!this.isDraggable)return;let{freeScroll:u}=this.options;u&&(this.isFreeScrolling=!0);let f=this.dragEndRestingSelect();if(u&&!this.isWrapping){let h=this.getRestingPosition();this.isFreeScrolling=-h>this.slides[0].target&&-h<this.getLastSlide().target}else!u&&f===this.selectedIndex&&(f+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.isWrapping,this.select(f),delete this.isDragSelect},o.dragEndRestingSelect=function(){let u=this.getRestingPosition(),f=Math.abs(this.getSlideDistance(-u,this.selectedIndex)),h=this._getClosestResting(u,f,1),p=this._getClosestResting(u,f,-1);return h.distance<p.distance?h.index:p.index},o._getClosestResting=function(u,f,h){let p=this.selectedIndex,m=1/0,g=this.options.contain&&!this.isWrapping?(y,x)=>y<=x:(y,x)=>y<x;for(;g(f,m)&&(p+=h,m=f,f=this.getSlideDistance(-u,p),f!==null);)f=Math.abs(f);return{distance:m,index:p-h}},o.getSlideDistance=function(u,f){let h=this.slides.length,p=this.options.wrapAround&&h>1,m=p?s.modulo(f,h):f,g=this.slides[m];if(!g)return null;let y=p?this.slideableWidth*Math.floor(f/h):0;return u-(g.target+y)},o.dragEndBoostSelect=function(){if(this.previousDragX===void 0||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;let u=this.getSlideDistance(-this.dragX,this.selectedIndex),f=this.previousDragX-this.dragX;return u>0&&f>0?1:u<0&&f<0?-1:0},o.onscroll=function(){let u=l(),f=this.pointerDownScroll.x-u.x,h=this.pointerDownScroll.y-u.y;(Math.abs(f)>3||Math.abs(h)>3)&&this.pointerDone()};function l(){return{x:t.pageXOffset,y:t.pageYOffset}}return n})}(fm)),fm.exports}var dm={exports:{}},WS;function AG(){return WS||(WS=1,function(i){(function(e,t){i.exports?i.exports=t(_a()):t(e.Flickity)})(typeof window<"u"?window:on,function(t){const n="http://www.w3.org/2000/svg";function r(l,u,f){this.increment=l,this.direction=u,this.isPrevious=l==="previous",this.isLeft=u==="left",this._create(f)}r.prototype._create=function(l){let u=this.element=document.createElement("button");u.className=`flickity-button flickity-prev-next-button ${this.increment}`;let f=this.isPrevious?"Previous":"Next";u.setAttribute("type","button"),u.setAttribute("aria-label",f),this.disable();let h=this.createSVG(f,l);u.append(h)},r.prototype.createSVG=function(l,u){let f=document.createElementNS(n,"svg");f.setAttribute("class","flickity-button-icon"),f.setAttribute("viewBox","0 0 100 100");let h=document.createElementNS(n,"title");h.append(l);let p=document.createElementNS(n,"path"),m=s(u);return p.setAttribute("d",m),p.setAttribute("class","arrow"),this.isLeft||p.setAttribute("transform","translate(100, 100) rotate(180)"),f.append(h,p),f};function s(l){if(typeof l=="string")return l;let{x0:u,x1:f,x2:h,x3:p,y1:m,y2:g}=l;return`M ${u}, 50
    L ${f}, ${m+50}
    L ${h}, ${g+50}
    L ${p}, 50
    L ${h}, ${50-g}
    L ${f}, ${50-m}
    Z`}r.prototype.enable=function(){this.element.removeAttribute("disabled")},r.prototype.disable=function(){this.element.setAttribute("disabled",!0)},Object.assign(t.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),t.create.prevNextButtons=function(){if(!this.options.prevNextButtons)return;let{rightToLeft:l,arrowShape:u}=this.options,f=l?"right":"left",h=l?"left":"right";this.prevButton=new r("previous",f,u),this.nextButton=new r("next",h,u),this.focusableElems.push(this.prevButton.element),this.focusableElems.push(this.nextButton.element),this.handlePrevButtonClick=()=>{this.uiChange(),this.previous()},this.handleNextButtonClick=()=>{this.uiChange(),this.next()},this.on("activate",this.activatePrevNextButtons),this.on("select",this.updatePrevNextButtons)};let o=t.prototype;return o.updatePrevNextButtons=function(){let l=this.slides.length?this.slides.length-1:0;this.updatePrevNextButton(this.prevButton,0),this.updatePrevNextButton(this.nextButton,l)},o.updatePrevNextButton=function(l,u){if(this.isWrapping&&this.slides.length>1){l.enable();return}let f=this.selectedIndex!==u;l[f?"enable":"disable"](),!f&&document.activeElement===l.element&&this.focus()},o.activatePrevNextButtons=function(){this.prevButton.element.addEventListener("click",this.handlePrevButtonClick),this.nextButton.element.addEventListener("click",this.handleNextButtonClick),this.element.append(this.prevButton.element,this.nextButton.element),this.on("deactivate",this.deactivatePrevNextButtons)},o.deactivatePrevNextButtons=function(){this.prevButton.element.remove(),this.nextButton.element.remove(),this.prevButton.element.removeEventListener("click",this.handlePrevButtonClick),this.nextButton.element.removeEventListener("click",this.handleNextButtonClick),this.off("deactivate",this.deactivatePrevNextButtons)},t.PrevNextButton=r,t})}(dm)),dm.exports}var pm={exports:{}},VS;function wG(){return VS||(VS=1,function(i){(function(e,t){i.exports?i.exports=t(_a(),fo()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:on,function(t,n){function r(){this.holder=document.createElement("div"),this.holder.className="flickity-page-dots",this.dots=[]}r.prototype.setDots=function(o){let l=o-this.dots.length;l>0?this.addDots(l):l<0&&this.removeDots(-l)},r.prototype.addDots=function(o){let l=new Array(o).fill().map((u,f)=>{let h=document.createElement("button");h.setAttribute("type","button");let p=f+1+this.dots.length;return h.className="flickity-page-dot",h.textContent=`View slide ${p}`,h});this.holder.append(...l),this.dots=this.dots.concat(l)},r.prototype.removeDots=function(o){this.dots.splice(this.dots.length-o,o).forEach(u=>u.remove())},r.prototype.updateSelected=function(o){this.selectedDot&&(this.selectedDot.classList.remove("is-selected"),this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[o],this.selectedDot.classList.add("is-selected"),this.selectedDot.setAttribute("aria-current","step"))},t.PageDots=r,Object.assign(t.defaults,{pageDots:!0}),t.create.pageDots=function(){this.options.pageDots&&(this.pageDots=new r,this.handlePageDotsClick=this.onPageDotsClick.bind(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))};let s=t.prototype;return s.activatePageDots=function(){this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots),this.pageDots.holder.addEventListener("click",this.handlePageDotsClick),this.element.append(this.pageDots.holder)},s.onPageDotsClick=function(o){let l=this.pageDots.dots.indexOf(o.target);l!==-1&&(this.uiChange(),this.select(l))},s.updateSelectedPageDots=function(){this.pageDots.updateSelected(this.selectedIndex)},s.updatePageDots=function(){this.pageDots.dots.forEach(o=>{n.removeFrom(this.focusableElems,o)}),this.pageDots.setDots(this.slides.length),this.focusableElems.push(...this.pageDots.dots)},s.deactivatePageDots=function(){this.pageDots.holder.remove(),this.pageDots.holder.removeEventListener("click",this.handlePageDotsClick)},t.PageDots=r,t})}(pm)),pm.exports}var mm={exports:{}},$S;function CG(){return $S||($S=1,function(i){(function(e,t){i.exports?i.exports=t(_a()):t(e.Flickity)})(typeof window<"u"?window:on,function(t){function n(s,o){this.autoPlay=s,this.onTick=o,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype.play=function(){if(this.state==="playing")return;if(document.hidden){document.addEventListener("visibilitychange",this.onVisibilityPlay);return}this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()},n.prototype.tick=function(){if(this.state!=="playing")return;let s=typeof this.autoPlay=="number"?this.autoPlay:3e3;this.clear(),this.timeout=setTimeout(()=>{this.onTick(),this.tick()},s)},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){this.state==="playing"&&(this.state="paused",this.clear())},n.prototype.unpause=function(){this.state==="paused"&&this.play()},n.prototype.visibilityChange=function(){let s=document.hidden;this[s?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},Object.assign(t.defaults,{pauseAutoPlayOnHover:!0}),t.create.player=function(){this.player=new n(this.options.autoPlay,()=>{this.next(!0)}),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)};let r=t.prototype;return r.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},r.playPlayer=function(){this.player.play()},r.stopPlayer=function(){this.player.stop()},r.pausePlayer=function(){this.player.pause()},r.unpausePlayer=function(){this.player.unpause()},r.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},r.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},r.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},t.Player=n,t})}(mm)),mm.exports}var gm={exports:{}},XS;function RG(){return XS||(XS=1,function(i){(function(e,t){i.exports?i.exports=t(_a(),fo()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:on,function(t,n){function r(o){let l=document.createDocumentFragment();return o.forEach(u=>l.appendChild(u.element)),l}let s=t.prototype;return s.insert=function(o,l){let u=this._makeCells(o);if(!u||!u.length)return;let f=this.cells.length;l=l===void 0?f:l;let h=r(u),p=l===f;if(p)this.slider.appendChild(h);else{let m=this.cells[l].element;this.slider.insertBefore(h,m)}if(l===0)this.cells=u.concat(this.cells);else if(p)this.cells=this.cells.concat(u);else{let m=this.cells.splice(l,f-l);this.cells=this.cells.concat(u).concat(m)}this._sizeCells(u),this.cellChange(l),this.positionSliderAtSelected()},s.append=function(o){this.insert(o,this.cells.length)},s.prepend=function(o){this.insert(o,0)},s.remove=function(o){let l=this.getCells(o);if(!l||!l.length)return;let u=this.cells.length-1;l.forEach(f=>{f.remove();let h=this.cells.indexOf(f);u=Math.min(h,u),n.removeFrom(this.cells,f)}),this.cellChange(u),this.positionSliderAtSelected()},s.cellSizeChange=function(o){let l=this.getCell(o);if(!l)return;l.getSize();let u=this.cells.indexOf(l);this.cellChange(u)},s.cellChange=function(o){let l=this.selectedElement;this._positionCells(o),this._updateWrapShiftCells(),this.setGallerySize();let u=this.getCell(l);u&&(this.selectedIndex=this.getCellSlideIndex(u)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[o]),this.select(this.selectedIndex)},t})}(gm)),gm.exports}var _m={exports:{}},qS;function PG(){return qS||(qS=1,function(i){(function(e,t){i.exports?i.exports=t(_a(),fo()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:on,function(t,n){const r="data-flickity-lazyload",s=`${r}-src`,o=`${r}-srcset`,l=`img[${r}], img[${s}], img[${o}], source[${o}]`;t.create.lazyLoad=function(){this.on("select",this.lazyLoad),this.handleLazyLoadComplete=this.onLazyLoadComplete.bind(this)};let u=t.prototype;u.lazyLoad=function(){let{lazyLoad:p}=this.options;if(!p)return;let m=typeof p=="number"?p:0;this.getAdjacentCellElements(m).map(f).flat().forEach(g=>new h(g,this.handleLazyLoadComplete))};function f(p){if(p.matches("img")){let m=p.getAttribute(r),g=p.getAttribute(s),y=p.getAttribute(o);if(m||g||y)return p}return[...p.querySelectorAll(l)]}u.onLazyLoadComplete=function(p,m){let g=this.getParentCell(p),y=g&&g.element;this.cellSizeChange(y),this.dispatchEvent("lazyLoad",m,y)};function h(p,m){this.img=p,this.onComplete=m,this.load()}return h.prototype.handleEvent=n.handleEvent,h.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);let p=this.img.getAttribute(r)||this.img.getAttribute(s),m=this.img.getAttribute(o);this.img.src=p,m&&this.img.setAttribute("srcset",m),this.img.removeAttribute(r),this.img.removeAttribute(s),this.img.removeAttribute(o)},h.prototype.onload=function(p){this.complete(p,"flickity-lazyloaded")},h.prototype.onerror=function(p){this.complete(p,"flickity-lazyerror")},h.prototype.complete=function(p,m){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this),(this.img.parentNode.matches("picture")?this.img.parentNode:this.img).classList.add(m),this.onComplete(this.img,p)},t.LazyLoader=h,t})}(_m)),_m.exports}var vm={exports:{}},xm={exports:{}};/*!
 * imagesLoaded v5.0.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */var YS;function LG(){return YS||(YS=1,function(i){(function(e,t){i.exports?i.exports=t(e,Q_()):e.imagesLoaded=t(e,e.EvEmitter)})(typeof window<"u"?window:on,function(t,n){let r=t.jQuery,s=t.console;function o(m){return Array.isArray(m)?m:typeof m=="object"&&typeof m.length=="number"?[...m]:[m]}function l(m,g,y){if(!(this instanceof l))return new l(m,g,y);let x=m;if(typeof m=="string"&&(x=document.querySelectorAll(m)),!x){s.error(`Bad element for imagesLoaded ${x||m}`);return}this.elements=o(x),this.options={},typeof g=="function"?y=g:Object.assign(this.options,g),y&&this.on("always",y),this.getImages(),r&&(this.jqDeferred=new r.Deferred),setTimeout(this.check.bind(this))}l.prototype=Object.create(n.prototype),l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)};const u=[1,9,11];l.prototype.addElementImages=function(m){m.nodeName==="IMG"&&this.addImage(m),this.options.background===!0&&this.addElementBackgroundImages(m);let{nodeType:g}=m;if(!g||!u.includes(g))return;let y=m.querySelectorAll("img");for(let x of y)this.addImage(x);if(typeof this.options.background=="string"){let x=m.querySelectorAll(this.options.background);for(let _ of x)this.addElementBackgroundImages(_)}};const f=/url\((['"])?(.*?)\1\)/gi;l.prototype.addElementBackgroundImages=function(m){let g=getComputedStyle(m);if(!g)return;let y=f.exec(g.backgroundImage);for(;y!==null;){let x=y&&y[2];x&&this.addBackground(x,m),y=f.exec(g.backgroundImage)}},l.prototype.addImage=function(m){let g=new h(m);this.images.push(g)},l.prototype.addBackground=function(m,g){let y=new p(m,g);this.images.push(y)},l.prototype.check=function(){if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length){this.complete();return}let m=(g,y,x)=>{setTimeout(()=>{this.progress(g,y,x)})};this.images.forEach(function(g){g.once("progress",m),g.check()})},l.prototype.progress=function(m,g,y){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!m.isLoaded,this.emitEvent("progress",[this,m,g]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,m),this.progressedCount===this.images.length&&this.complete(),this.options.debug&&s&&s.log(`progress: ${y}`,m,g)},l.prototype.complete=function(){let m=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(m,[this]),this.emitEvent("always",[this]),this.jqDeferred){let g=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[g](this)}};function h(m){this.img=m}h.prototype=Object.create(n.prototype),h.prototype.check=function(){if(this.getIsImageComplete()){this.confirm(this.img.naturalWidth!==0,"naturalWidth");return}this.proxyImage=new Image,this.img.crossOrigin&&(this.proxyImage.crossOrigin=this.img.crossOrigin),this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.currentSrc||this.img.src},h.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},h.prototype.confirm=function(m,g){this.isLoaded=m;let{parentNode:y}=this.img,x=y.nodeName==="PICTURE"?y:this.img;this.emitEvent("progress",[this,x,g])},h.prototype.handleEvent=function(m){let g="on"+m.type;this[g]&&this[g](m)},h.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},h.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)};function p(m,g){this.url=m,this.element=g,this.img=new Image}return p.prototype=Object.create(h.prototype),p.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(this.img.naturalWidth!==0,"naturalWidth"),this.unbindEvents())},p.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},p.prototype.confirm=function(m,g){this.isLoaded=m,this.emitEvent("progress",[this,this.element,g])},l.makeJQueryPlugin=function(m){m=m||t.jQuery,m&&(r=m,r.fn.imagesLoaded=function(g,y){return new l(this,g,y).jqDeferred.promise(r(this))})},l.makeJQueryPlugin(),l})}(xm)),xm.exports}var jS;function DG(){return jS||(jS=1,function(i){(function(e,t){i.exports?i.exports=t(_a(),LG()):t(e.Flickity,e.imagesLoaded)})(typeof window<"u"?window:on,function(t,n){return t.create.imagesLoaded=function(){this.on("activate",this.imagesLoaded)},t.prototype.imagesLoaded=function(){if(!this.options.imagesLoaded)return;let r=(s,o)=>{let l=this.getParentCell(o.img);this.cellSizeChange(l&&l.element),this.options.freeScroll||this.positionSliderAtSelected()};n(this.slider).on("progress",r)},t})}(vm)),vm.exports}/*!
 * Flickity v3.0.0
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2022 Metafizzy
 */var KS;function IG(){return KS||(KS=1,function(i){if(i.exports){const e=_a();TG(),AG(),wG(),CG(),RG(),PG(),DG(),i.exports=e}}(im)),im.exports}(function(i){(function(e,t){i.exports?i.exports=t(IG(),fo()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:on,function(t,n){let r=t.Slide;r.prototype.renderFadePosition=function(){},r.prototype.setOpacity=function(p){this.cells.forEach(m=>{m.element.style.opacity=p})},t.create.fade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};let s=t.prototype,o=s.updateSlides;s.updateSlides=function(){o.apply(this,arguments),this.options.fade&&this.slides.forEach((p,m)=>{let g=p.target-p.x,y=p.cells[0].x;p.cells.forEach(_=>{let v=_.x-y-g;this._renderCellPosition(_,v)});let x=m===this.selectedIndex?1:0;p.setOpacity(x)})},s.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},s.onSettleFade=function(){if(delete this.didDragEnd,!this.options.fade)return;this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!==this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0)},s.onDragEndFade=function(){this.didDragEnd=!0},s.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},s.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(p=>{p.setOpacity("")}))};let l=s.positionSlider;s.positionSlider=function(){if(!this.options.fade){l.apply(this,arguments);return}this.fadeSlides(),this.dispatchScrollEvent()};let u=s.positionSliderAtSelected;s.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),u.apply(this,arguments)},s.fadeSlides=function(){if(this.slides.length<2)return;let p=this.getFadeIndexes(),m=this.slides[p.a],g=this.slides[p.b],y=this.wrapDifference(m.target,g.target),x=this.wrapDifference(m.target,-this.x);x/=y,m.setOpacity(1-x),g.setOpacity(x);let _=p.a;this.isDragging&&(_=x>.5?p.a:p.b),this.fadeHideIndex!==void 0&&this.fadeHideIndex!==_&&this.fadeHideIndex!==p.a&&this.fadeHideIndex!==p.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=_},s.getFadeIndexes=function(){return!this.isDragging&&!this.didDragEnd?{a:this.fadeIndex,b:this.selectedIndex}:this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes()},s.getFadeDragWrapIndexes=function(){let p=this.slides.map(function(A,T){return this.getSlideDistance(-this.x,T)},this),m=p.map(function(A){return Math.abs(A)}),g=Math.min(...m),y=m.indexOf(g),x=p[y],_=this.slides.length,v=x>=0?1:-1;return{a:y,b:n.modulo(y+v,_)}},s.getFadeDragLimitIndexes=function(){let p=0;for(let m=0;m<this.slides.length-1;m++){let g=this.slides[m];if(-this.x<g.target)break;p=m}return{a:p,b:p+1}},s.wrapDifference=function(p,m){let g=m-p;if(!this.options.wrapAround)return g;let y=g+this.slideableWidth,x=g-this.slideableWidth;return Math.abs(y)<Math.abs(g)&&(g=y),Math.abs(x)<Math.abs(g)&&(g=x),g};let f=s._updateWrapShiftCells;s._updateWrapShiftCells=function(){this.options.fade?this.isWrapping=this.getIsWrapping():f.apply(this,arguments)};let h=s.shiftWrapCells;return s.shiftWrapCells=function(){this.options.fade||h.apply(this,arguments)},t})})(x1);var OG=x1.exports;const UG=sO(OG);var Ih={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Ih.exports;(function(i,e){(function(){var t,n="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,h="__lodash_placeholder__",p=1,m=2,g=4,y=1,x=2,_=1,v=2,A=4,T=8,E=16,C=32,R=64,w=128,z=256,G=512,M=30,U="...",V=800,oe=16,k=1,J=2,j=3,te=1/0,ie=9007199254740991,ae=17976931348623157e292,N=NaN,ce=4294967295,Se=ce-1,Je=ce>>>1,ne=[["ary",w],["bind",_],["bindKey",v],["curry",T],["curryRight",E],["flip",G],["partial",C],["partialRight",R],["rearg",z]],ue="[object Arguments]",Te="[object Array]",De="[object AsyncFunction]",Oe="[object Boolean]",Ce="[object Date]",gt="[object DOMException]",$e="[object Error]",q="[object Function]",st="[object GeneratorFunction]",be="[object Map]",Ge="[object Number]",Ue="[object Null]",K="[object Object]",et="[object Promise]",O="[object Proxy]",P="[object RegExp]",Y="[object Set]",me="[object String]",de="[object Symbol]",_e="[object Undefined]",we="[object WeakMap]",Ae="[object WeakSet]",Ee="[object ArrayBuffer]",ke="[object DataView]",tt="[object Float32Array]",pe="[object Float64Array]",Tt="[object Int8Array]",Xe="[object Int16Array]",at="[object Int32Array]",We="[object Uint8Array]",Ie="[object Uint8ClampedArray]",ot="[object Uint16Array]",_t="[object Uint32Array]",Dt=/\b__p \+= '';/g,Pe=/\b(__p \+=) '' \+/g,Ct=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,xe=RegExp(F.source),Ne=RegExp(ve.source),Ze=/<%-([\s\S]+?)%>/g,vt=/<%([\s\S]+?)%>/g,It=/<%=([\s\S]+?)%>/g,qe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ve=/^\w*$/,je=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/[\\^$.*+?()[\]{}|]/g,nt=RegExp(ye.source),Qe=/^\s+/,ft=/\s/,tn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,St=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,yn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jt=/[()=,{}\[\]\/\s]/,Xt=/\\(\\)?/g,zt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Zn=/\w*$/,I=/^[-+]0x[0-9a-f]+$/i,$=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,Q=/^0o[0-7]+$/i,Z=/^(?:0|[1-9]\d*)$/,Me=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fe=/($^)/,it=/['\n\r\u2028\u2029\\]/g,Be="\\ud800-\\udfff",Ye="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Kt=Ye+rt+ht,mn="\\u2700-\\u27bf",Ft="a-z\\xdf-\\xf6\\xf8-\\xff",Wn="\\xac\\xb1\\xd7\\xf7",Ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",kl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nn="A-Z\\xc0-\\xd6\\xd8-\\xde",Br="\\ufe0e\\ufe0f",Hl=Wn+Ht+dt+kl,ss="['’]",Gl="["+Be+"]",Rn="["+Hl+"]",tr="["+Kt+"]",po="\\d+",Si="["+mn+"]",mo="["+Ft+"]",fu="[^"+Be+Hl+po+mn+Ft+nn+"]",go="\\ud83c[\\udffb-\\udfff]",AA="(?:"+tr+"|"+go+")",pv="[^"+Be+"]",ad="(?:\\ud83c[\\udde6-\\uddff]){2}",od="[\\ud800-\\udbff][\\udc00-\\udfff]",_o="["+nn+"]",mv="\\u200d",gv="(?:"+mo+"|"+fu+")",wA="(?:"+_o+"|"+fu+")",_v="(?:"+ss+"(?:d|ll|m|re|s|t|ve))?",vv="(?:"+ss+"(?:D|LL|M|RE|S|T|VE))?",xv=AA+"?",yv="["+Br+"]?",CA="(?:"+mv+"(?:"+[pv,ad,od].join("|")+")"+yv+xv+")*",RA="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",PA="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Sv=yv+xv+CA,LA="(?:"+[Si,ad,od].join("|")+")"+Sv,DA="(?:"+[pv+tr+"?",tr,ad,od,Gl].join("|")+")",IA=RegExp(ss,"g"),OA=RegExp(tr,"g"),ld=RegExp(go+"(?="+go+")|"+DA+Sv,"g"),UA=RegExp([_o+"?"+mo+"+"+_v+"(?="+[Rn,_o,"$"].join("|")+")",wA+"+"+vv+"(?="+[Rn,_o+gv,"$"].join("|")+")",_o+"?"+gv+"+"+_v,_o+"+"+vv,PA,RA,po,LA].join("|"),"g"),NA=RegExp("["+mv+Be+Kt+Br+"]"),FA=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,BA=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],zA=-1,rn={};rn[tt]=rn[pe]=rn[Tt]=rn[Xe]=rn[at]=rn[We]=rn[Ie]=rn[ot]=rn[_t]=!0,rn[ue]=rn[Te]=rn[Ee]=rn[Oe]=rn[ke]=rn[Ce]=rn[$e]=rn[q]=rn[be]=rn[Ge]=rn[K]=rn[P]=rn[Y]=rn[me]=rn[we]=!1;var Qt={};Qt[ue]=Qt[Te]=Qt[Ee]=Qt[ke]=Qt[Oe]=Qt[Ce]=Qt[tt]=Qt[pe]=Qt[Tt]=Qt[Xe]=Qt[at]=Qt[be]=Qt[Ge]=Qt[K]=Qt[P]=Qt[Y]=Qt[me]=Qt[de]=Qt[We]=Qt[Ie]=Qt[ot]=Qt[_t]=!0,Qt[$e]=Qt[q]=Qt[we]=!1;var kA={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},HA={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},GA={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},WA={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},VA=parseFloat,$A=parseInt,Ev=typeof on=="object"&&on&&on.Object===Object&&on,XA=typeof self=="object"&&self&&self.Object===Object&&self,Vn=Ev||XA||Function("return this")(),cd=e&&!e.nodeType&&e,va=cd&&!0&&i&&!i.nodeType&&i,Mv=va&&va.exports===cd,ud=Mv&&Ev.process,nr=function(){try{var W=va&&va.require&&va.require("util").types;return W||ud&&ud.binding&&ud.binding("util")}catch{}}(),bv=nr&&nr.isArrayBuffer,Tv=nr&&nr.isDate,Av=nr&&nr.isMap,wv=nr&&nr.isRegExp,Cv=nr&&nr.isSet,Rv=nr&&nr.isTypedArray;function Ni(W,le,re){switch(re.length){case 0:return W.call(le);case 1:return W.call(le,re[0]);case 2:return W.call(le,re[0],re[1]);case 3:return W.call(le,re[0],re[1],re[2])}return W.apply(le,re)}function qA(W,le,re,ze){for(var pt=-1,kt=W==null?0:W.length;++pt<kt;){var Pn=W[pt];le(ze,Pn,re(Pn),W)}return ze}function ir(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze&&le(W[re],re,W)!==!1;);return W}function YA(W,le){for(var re=W==null?0:W.length;re--&&le(W[re],re,W)!==!1;);return W}function Pv(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze;)if(!le(W[re],re,W))return!1;return!0}function Us(W,le){for(var re=-1,ze=W==null?0:W.length,pt=0,kt=[];++re<ze;){var Pn=W[re];le(Pn,re,W)&&(kt[pt++]=Pn)}return kt}function hu(W,le){var re=W==null?0:W.length;return!!re&&vo(W,le,0)>-1}function fd(W,le,re){for(var ze=-1,pt=W==null?0:W.length;++ze<pt;)if(re(le,W[ze]))return!0;return!1}function ln(W,le){for(var re=-1,ze=W==null?0:W.length,pt=Array(ze);++re<ze;)pt[re]=le(W[re],re,W);return pt}function Ns(W,le){for(var re=-1,ze=le.length,pt=W.length;++re<ze;)W[pt+re]=le[re];return W}function hd(W,le,re,ze){var pt=-1,kt=W==null?0:W.length;for(ze&&kt&&(re=W[++pt]);++pt<kt;)re=le(re,W[pt],pt,W);return re}function jA(W,le,re,ze){var pt=W==null?0:W.length;for(ze&&pt&&(re=W[--pt]);pt--;)re=le(re,W[pt],pt,W);return re}function dd(W,le){for(var re=-1,ze=W==null?0:W.length;++re<ze;)if(le(W[re],re,W))return!0;return!1}var KA=pd("length");function ZA(W){return W.split("")}function JA(W){return W.match(yn)||[]}function Lv(W,le,re){var ze;return re(W,function(pt,kt,Pn){if(le(pt,kt,Pn))return ze=kt,!1}),ze}function du(W,le,re,ze){for(var pt=W.length,kt=re+(ze?1:-1);ze?kt--:++kt<pt;)if(le(W[kt],kt,W))return kt;return-1}function vo(W,le,re){return le===le?uw(W,le,re):du(W,Dv,re)}function QA(W,le,re,ze){for(var pt=re-1,kt=W.length;++pt<kt;)if(ze(W[pt],le))return pt;return-1}function Dv(W){return W!==W}function Iv(W,le){var re=W==null?0:W.length;return re?gd(W,le)/re:N}function pd(W){return function(le){return le==null?t:le[W]}}function md(W){return function(le){return W==null?t:W[le]}}function Ov(W,le,re,ze,pt){return pt(W,function(kt,Pn,Zt){re=ze?(ze=!1,kt):le(re,kt,Pn,Zt)}),re}function ew(W,le){var re=W.length;for(W.sort(le);re--;)W[re]=W[re].value;return W}function gd(W,le){for(var re,ze=-1,pt=W.length;++ze<pt;){var kt=le(W[ze]);kt!==t&&(re=re===t?kt:re+kt)}return re}function _d(W,le){for(var re=-1,ze=Array(W);++re<W;)ze[re]=le(re);return ze}function tw(W,le){return ln(le,function(re){return[re,W[re]]})}function Uv(W){return W&&W.slice(0,zv(W)+1).replace(Qe,"")}function Fi(W){return function(le){return W(le)}}function vd(W,le){return ln(le,function(re){return W[re]})}function Wl(W,le){return W.has(le)}function Nv(W,le){for(var re=-1,ze=W.length;++re<ze&&vo(le,W[re],0)>-1;);return re}function Fv(W,le){for(var re=W.length;re--&&vo(le,W[re],0)>-1;);return re}function nw(W,le){for(var re=W.length,ze=0;re--;)W[re]===le&&++ze;return ze}var iw=md(kA),rw=md(HA);function sw(W){return"\\"+WA[W]}function aw(W,le){return W==null?t:W[le]}function xo(W){return NA.test(W)}function ow(W){return FA.test(W)}function lw(W){for(var le,re=[];!(le=W.next()).done;)re.push(le.value);return re}function xd(W){var le=-1,re=Array(W.size);return W.forEach(function(ze,pt){re[++le]=[pt,ze]}),re}function Bv(W,le){return function(re){return W(le(re))}}function Fs(W,le){for(var re=-1,ze=W.length,pt=0,kt=[];++re<ze;){var Pn=W[re];(Pn===le||Pn===h)&&(W[re]=h,kt[pt++]=re)}return kt}function pu(W){var le=-1,re=Array(W.size);return W.forEach(function(ze){re[++le]=ze}),re}function cw(W){var le=-1,re=Array(W.size);return W.forEach(function(ze){re[++le]=[ze,ze]}),re}function uw(W,le,re){for(var ze=re-1,pt=W.length;++ze<pt;)if(W[ze]===le)return ze;return-1}function fw(W,le,re){for(var ze=re+1;ze--;)if(W[ze]===le)return ze;return ze}function yo(W){return xo(W)?dw(W):KA(W)}function Mr(W){return xo(W)?pw(W):ZA(W)}function zv(W){for(var le=W.length;le--&&ft.test(W.charAt(le)););return le}var hw=md(GA);function dw(W){for(var le=ld.lastIndex=0;ld.test(W);)++le;return le}function pw(W){return W.match(ld)||[]}function mw(W){return W.match(UA)||[]}var gw=function W(le){le=le==null?Vn:So.defaults(Vn.Object(),le,So.pick(Vn,BA));var re=le.Array,ze=le.Date,pt=le.Error,kt=le.Function,Pn=le.Math,Zt=le.Object,yd=le.RegExp,_w=le.String,rr=le.TypeError,mu=re.prototype,vw=kt.prototype,Eo=Zt.prototype,gu=le["__core-js_shared__"],_u=vw.toString,Vt=Eo.hasOwnProperty,xw=0,kv=function(){var a=/[^.]+$/.exec(gu&&gu.keys&&gu.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),vu=Eo.toString,yw=_u.call(Zt),Sw=Vn._,Ew=yd("^"+_u.call(Vt).replace(ye,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),xu=Mv?le.Buffer:t,Bs=le.Symbol,yu=le.Uint8Array,Hv=xu?xu.allocUnsafe:t,Su=Bv(Zt.getPrototypeOf,Zt),Gv=Zt.create,Wv=Eo.propertyIsEnumerable,Eu=mu.splice,Vv=Bs?Bs.isConcatSpreadable:t,Vl=Bs?Bs.iterator:t,xa=Bs?Bs.toStringTag:t,Mu=function(){try{var a=ba(Zt,"defineProperty");return a({},"",{}),a}catch{}}(),Mw=le.clearTimeout!==Vn.clearTimeout&&le.clearTimeout,bw=ze&&ze.now!==Vn.Date.now&&ze.now,Tw=le.setTimeout!==Vn.setTimeout&&le.setTimeout,bu=Pn.ceil,Tu=Pn.floor,Sd=Zt.getOwnPropertySymbols,Aw=xu?xu.isBuffer:t,$v=le.isFinite,ww=mu.join,Cw=Bv(Zt.keys,Zt),Ln=Pn.max,Jn=Pn.min,Rw=ze.now,Pw=le.parseInt,Xv=Pn.random,Lw=mu.reverse,Ed=ba(le,"DataView"),$l=ba(le,"Map"),Md=ba(le,"Promise"),Mo=ba(le,"Set"),Xl=ba(le,"WeakMap"),ql=ba(Zt,"create"),Au=Xl&&new Xl,bo={},Dw=Ta(Ed),Iw=Ta($l),Ow=Ta(Md),Uw=Ta(Mo),Nw=Ta(Xl),wu=Bs?Bs.prototype:t,Yl=wu?wu.valueOf:t,qv=wu?wu.toString:t;function L(a){if(gn(a)&&!mt(a)&&!(a instanceof Lt)){if(a instanceof sr)return a;if(Vt.call(a,"__wrapped__"))return Y0(a)}return new sr(a)}var To=function(){function a(){}return function(c){if(!un(c))return{};if(Gv)return Gv(c);a.prototype=c;var d=new a;return a.prototype=t,d}}();function Cu(){}function sr(a,c){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=t}L.templateSettings={escape:Ze,evaluate:vt,interpolate:It,variable:"",imports:{_:L}},L.prototype=Cu.prototype,L.prototype.constructor=L,sr.prototype=To(Cu.prototype),sr.prototype.constructor=sr;function Lt(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ce,this.__views__=[]}function Fw(){var a=new Lt(this.__wrapped__);return a.__actions__=Ei(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Ei(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Ei(this.__views__),a}function Bw(){if(this.__filtered__){var a=new Lt(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function zw(){var a=this.__wrapped__.value(),c=this.__dir__,d=mt(a),S=c<0,b=d?a.length:0,D=ZC(0,b,this.__views__),B=D.start,H=D.end,X=H-B,fe=S?H:B-1,he=this.__iteratees__,ge=he.length,Le=0,Ke=Jn(X,this.__takeCount__);if(!d||!S&&b==X&&Ke==X)return _0(a,this.__actions__);var ct=[];e:for(;X--&&Le<Ke;){fe+=c;for(var Et=-1,ut=a[fe];++Et<ge;){var Rt=he[Et],Ot=Rt.iteratee,ki=Rt.type,ui=Ot(ut);if(ki==J)ut=ui;else if(!ui){if(ki==k)continue e;break e}}ct[Le++]=ut}return ct}Lt.prototype=To(Cu.prototype),Lt.prototype.constructor=Lt;function ya(a){var c=-1,d=a==null?0:a.length;for(this.clear();++c<d;){var S=a[c];this.set(S[0],S[1])}}function kw(){this.__data__=ql?ql(null):{},this.size=0}function Hw(a){var c=this.has(a)&&delete this.__data__[a];return this.size-=c?1:0,c}function Gw(a){var c=this.__data__;if(ql){var d=c[a];return d===u?t:d}return Vt.call(c,a)?c[a]:t}function Ww(a){var c=this.__data__;return ql?c[a]!==t:Vt.call(c,a)}function Vw(a,c){var d=this.__data__;return this.size+=this.has(a)?0:1,d[a]=ql&&c===t?u:c,this}ya.prototype.clear=kw,ya.prototype.delete=Hw,ya.prototype.get=Gw,ya.prototype.has=Ww,ya.prototype.set=Vw;function as(a){var c=-1,d=a==null?0:a.length;for(this.clear();++c<d;){var S=a[c];this.set(S[0],S[1])}}function $w(){this.__data__=[],this.size=0}function Xw(a){var c=this.__data__,d=Ru(c,a);if(d<0)return!1;var S=c.length-1;return d==S?c.pop():Eu.call(c,d,1),--this.size,!0}function qw(a){var c=this.__data__,d=Ru(c,a);return d<0?t:c[d][1]}function Yw(a){return Ru(this.__data__,a)>-1}function jw(a,c){var d=this.__data__,S=Ru(d,a);return S<0?(++this.size,d.push([a,c])):d[S][1]=c,this}as.prototype.clear=$w,as.prototype.delete=Xw,as.prototype.get=qw,as.prototype.has=Yw,as.prototype.set=jw;function os(a){var c=-1,d=a==null?0:a.length;for(this.clear();++c<d;){var S=a[c];this.set(S[0],S[1])}}function Kw(){this.size=0,this.__data__={hash:new ya,map:new($l||as),string:new ya}}function Zw(a){var c=Hu(this,a).delete(a);return this.size-=c?1:0,c}function Jw(a){return Hu(this,a).get(a)}function Qw(a){return Hu(this,a).has(a)}function eC(a,c){var d=Hu(this,a),S=d.size;return d.set(a,c),this.size+=d.size==S?0:1,this}os.prototype.clear=Kw,os.prototype.delete=Zw,os.prototype.get=Jw,os.prototype.has=Qw,os.prototype.set=eC;function Sa(a){var c=-1,d=a==null?0:a.length;for(this.__data__=new os;++c<d;)this.add(a[c])}function tC(a){return this.__data__.set(a,u),this}function nC(a){return this.__data__.has(a)}Sa.prototype.add=Sa.prototype.push=tC,Sa.prototype.has=nC;function br(a){var c=this.__data__=new as(a);this.size=c.size}function iC(){this.__data__=new as,this.size=0}function rC(a){var c=this.__data__,d=c.delete(a);return this.size=c.size,d}function sC(a){return this.__data__.get(a)}function aC(a){return this.__data__.has(a)}function oC(a,c){var d=this.__data__;if(d instanceof as){var S=d.__data__;if(!$l||S.length<r-1)return S.push([a,c]),this.size=++d.size,this;d=this.__data__=new os(S)}return d.set(a,c),this.size=d.size,this}br.prototype.clear=iC,br.prototype.delete=rC,br.prototype.get=sC,br.prototype.has=aC,br.prototype.set=oC;function Yv(a,c){var d=mt(a),S=!d&&Aa(a),b=!d&&!S&&Ws(a),D=!d&&!S&&!b&&Ro(a),B=d||S||b||D,H=B?_d(a.length,_w):[],X=H.length;for(var fe in a)(c||Vt.call(a,fe))&&!(B&&(fe=="length"||b&&(fe=="offset"||fe=="parent")||D&&(fe=="buffer"||fe=="byteLength"||fe=="byteOffset")||fs(fe,X)))&&H.push(fe);return H}function jv(a){var c=a.length;return c?a[Od(0,c-1)]:t}function lC(a,c){return Gu(Ei(a),Ea(c,0,a.length))}function cC(a){return Gu(Ei(a))}function bd(a,c,d){(d!==t&&!Tr(a[c],d)||d===t&&!(c in a))&&ls(a,c,d)}function jl(a,c,d){var S=a[c];(!(Vt.call(a,c)&&Tr(S,d))||d===t&&!(c in a))&&ls(a,c,d)}function Ru(a,c){for(var d=a.length;d--;)if(Tr(a[d][0],c))return d;return-1}function uC(a,c,d,S){return zs(a,function(b,D,B){c(S,b,d(b),B)}),S}function Kv(a,c){return a&&kr(c,Nn(c),a)}function fC(a,c){return a&&kr(c,bi(c),a)}function ls(a,c,d){c=="__proto__"&&Mu?Mu(a,c,{configurable:!0,enumerable:!0,value:d,writable:!0}):a[c]=d}function Td(a,c){for(var d=-1,S=c.length,b=re(S),D=a==null;++d<S;)b[d]=D?t:sp(a,c[d]);return b}function Ea(a,c,d){return a===a&&(d!==t&&(a=a<=d?a:d),c!==t&&(a=a>=c?a:c)),a}function ar(a,c,d,S,b,D){var B,H=c&p,X=c&m,fe=c&g;if(d&&(B=b?d(a,S,b,D):d(a)),B!==t)return B;if(!un(a))return a;var he=mt(a);if(he){if(B=QC(a),!H)return Ei(a,B)}else{var ge=Qn(a),Le=ge==q||ge==st;if(Ws(a))return y0(a,H);if(ge==K||ge==ue||Le&&!b){if(B=X||Le?{}:z0(a),!H)return X?GC(a,fC(B,a)):HC(a,Kv(B,a))}else{if(!Qt[ge])return b?a:{};B=eR(a,ge,H)}}D||(D=new br);var Ke=D.get(a);if(Ke)return Ke;D.set(a,B),px(a)?a.forEach(function(ut){B.add(ar(ut,c,d,ut,a,D))}):hx(a)&&a.forEach(function(ut,Rt){B.set(Rt,ar(ut,c,d,Rt,a,D))});var ct=fe?X?$d:Vd:X?bi:Nn,Et=he?t:ct(a);return ir(Et||a,function(ut,Rt){Et&&(Rt=ut,ut=a[Rt]),jl(B,Rt,ar(ut,c,d,Rt,a,D))}),B}function hC(a){var c=Nn(a);return function(d){return Zv(d,a,c)}}function Zv(a,c,d){var S=d.length;if(a==null)return!S;for(a=Zt(a);S--;){var b=d[S],D=c[b],B=a[b];if(B===t&&!(b in a)||!D(B))return!1}return!0}function Jv(a,c,d){if(typeof a!="function")throw new rr(o);return nc(function(){a.apply(t,d)},c)}function Kl(a,c,d,S){var b=-1,D=hu,B=!0,H=a.length,X=[],fe=c.length;if(!H)return X;d&&(c=ln(c,Fi(d))),S?(D=fd,B=!1):c.length>=r&&(D=Wl,B=!1,c=new Sa(c));e:for(;++b<H;){var he=a[b],ge=d==null?he:d(he);if(he=S||he!==0?he:0,B&&ge===ge){for(var Le=fe;Le--;)if(c[Le]===ge)continue e;X.push(he)}else D(c,ge,S)||X.push(he)}return X}var zs=T0(zr),Qv=T0(wd,!0);function dC(a,c){var d=!0;return zs(a,function(S,b,D){return d=!!c(S,b,D),d}),d}function Pu(a,c,d){for(var S=-1,b=a.length;++S<b;){var D=a[S],B=c(D);if(B!=null&&(H===t?B===B&&!zi(B):d(B,H)))var H=B,X=D}return X}function pC(a,c,d,S){var b=a.length;for(d=xt(d),d<0&&(d=-d>b?0:b+d),S=S===t||S>b?b:xt(S),S<0&&(S+=b),S=d>S?0:gx(S);d<S;)a[d++]=c;return a}function e0(a,c){var d=[];return zs(a,function(S,b,D){c(S,b,D)&&d.push(S)}),d}function $n(a,c,d,S,b){var D=-1,B=a.length;for(d||(d=nR),b||(b=[]);++D<B;){var H=a[D];c>0&&d(H)?c>1?$n(H,c-1,d,S,b):Ns(b,H):S||(b[b.length]=H)}return b}var Ad=A0(),t0=A0(!0);function zr(a,c){return a&&Ad(a,c,Nn)}function wd(a,c){return a&&t0(a,c,Nn)}function Lu(a,c){return Us(c,function(d){return hs(a[d])})}function Ma(a,c){c=Hs(c,a);for(var d=0,S=c.length;a!=null&&d<S;)a=a[Hr(c[d++])];return d&&d==S?a:t}function n0(a,c,d){var S=c(a);return mt(a)?S:Ns(S,d(a))}function li(a){return a==null?a===t?_e:Ue:xa&&xa in Zt(a)?KC(a):cR(a)}function Cd(a,c){return a>c}function mC(a,c){return a!=null&&Vt.call(a,c)}function gC(a,c){return a!=null&&c in Zt(a)}function _C(a,c,d){return a>=Jn(c,d)&&a<Ln(c,d)}function Rd(a,c,d){for(var S=d?fd:hu,b=a[0].length,D=a.length,B=D,H=re(D),X=1/0,fe=[];B--;){var he=a[B];B&&c&&(he=ln(he,Fi(c))),X=Jn(he.length,X),H[B]=!d&&(c||b>=120&&he.length>=120)?new Sa(B&&he):t}he=a[0];var ge=-1,Le=H[0];e:for(;++ge<b&&fe.length<X;){var Ke=he[ge],ct=c?c(Ke):Ke;if(Ke=d||Ke!==0?Ke:0,!(Le?Wl(Le,ct):S(fe,ct,d))){for(B=D;--B;){var Et=H[B];if(!(Et?Wl(Et,ct):S(a[B],ct,d)))continue e}Le&&Le.push(ct),fe.push(Ke)}}return fe}function vC(a,c,d,S){return zr(a,function(b,D,B){c(S,d(b),D,B)}),S}function Zl(a,c,d){c=Hs(c,a),a=W0(a,c);var S=a==null?a:a[Hr(lr(c))];return S==null?t:Ni(S,a,d)}function i0(a){return gn(a)&&li(a)==ue}function xC(a){return gn(a)&&li(a)==Ee}function yC(a){return gn(a)&&li(a)==Ce}function Jl(a,c,d,S,b){return a===c?!0:a==null||c==null||!gn(a)&&!gn(c)?a!==a&&c!==c:SC(a,c,d,S,Jl,b)}function SC(a,c,d,S,b,D){var B=mt(a),H=mt(c),X=B?Te:Qn(a),fe=H?Te:Qn(c);X=X==ue?K:X,fe=fe==ue?K:fe;var he=X==K,ge=fe==K,Le=X==fe;if(Le&&Ws(a)){if(!Ws(c))return!1;B=!0,he=!1}if(Le&&!he)return D||(D=new br),B||Ro(a)?N0(a,c,d,S,b,D):YC(a,c,X,d,S,b,D);if(!(d&y)){var Ke=he&&Vt.call(a,"__wrapped__"),ct=ge&&Vt.call(c,"__wrapped__");if(Ke||ct){var Et=Ke?a.value():a,ut=ct?c.value():c;return D||(D=new br),b(Et,ut,d,S,D)}}return Le?(D||(D=new br),jC(a,c,d,S,b,D)):!1}function EC(a){return gn(a)&&Qn(a)==be}function Pd(a,c,d,S){var b=d.length,D=b,B=!S;if(a==null)return!D;for(a=Zt(a);b--;){var H=d[b];if(B&&H[2]?H[1]!==a[H[0]]:!(H[0]in a))return!1}for(;++b<D;){H=d[b];var X=H[0],fe=a[X],he=H[1];if(B&&H[2]){if(fe===t&&!(X in a))return!1}else{var ge=new br;if(S)var Le=S(fe,he,X,a,c,ge);if(!(Le===t?Jl(he,fe,y|x,S,ge):Le))return!1}}return!0}function r0(a){if(!un(a)||rR(a))return!1;var c=hs(a)?Ew:ee;return c.test(Ta(a))}function MC(a){return gn(a)&&li(a)==P}function bC(a){return gn(a)&&Qn(a)==Y}function TC(a){return gn(a)&&Yu(a.length)&&!!rn[li(a)]}function s0(a){return typeof a=="function"?a:a==null?Ti:typeof a=="object"?mt(a)?l0(a[0],a[1]):o0(a):wx(a)}function Ld(a){if(!tc(a))return Cw(a);var c=[];for(var d in Zt(a))Vt.call(a,d)&&d!="constructor"&&c.push(d);return c}function AC(a){if(!un(a))return lR(a);var c=tc(a),d=[];for(var S in a)S=="constructor"&&(c||!Vt.call(a,S))||d.push(S);return d}function Dd(a,c){return a<c}function a0(a,c){var d=-1,S=Mi(a)?re(a.length):[];return zs(a,function(b,D,B){S[++d]=c(b,D,B)}),S}function o0(a){var c=qd(a);return c.length==1&&c[0][2]?H0(c[0][0],c[0][1]):function(d){return d===a||Pd(d,a,c)}}function l0(a,c){return jd(a)&&k0(c)?H0(Hr(a),c):function(d){var S=sp(d,a);return S===t&&S===c?ap(d,a):Jl(c,S,y|x)}}function Du(a,c,d,S,b){a!==c&&Ad(c,function(D,B){if(b||(b=new br),un(D))wC(a,c,B,d,Du,S,b);else{var H=S?S(Zd(a,B),D,B+"",a,c,b):t;H===t&&(H=D),bd(a,B,H)}},bi)}function wC(a,c,d,S,b,D,B){var H=Zd(a,d),X=Zd(c,d),fe=B.get(X);if(fe){bd(a,d,fe);return}var he=D?D(H,X,d+"",a,c,B):t,ge=he===t;if(ge){var Le=mt(X),Ke=!Le&&Ws(X),ct=!Le&&!Ke&&Ro(X);he=X,Le||Ke||ct?mt(H)?he=H:Sn(H)?he=Ei(H):Ke?(ge=!1,he=y0(X,!0)):ct?(ge=!1,he=S0(X,!0)):he=[]:ic(X)||Aa(X)?(he=H,Aa(H)?he=_x(H):(!un(H)||hs(H))&&(he=z0(X))):ge=!1}ge&&(B.set(X,he),b(he,X,S,D,B),B.delete(X)),bd(a,d,he)}function c0(a,c){var d=a.length;if(d)return c+=c<0?d:0,fs(c,d)?a[c]:t}function u0(a,c,d){c.length?c=ln(c,function(D){return mt(D)?function(B){return Ma(B,D.length===1?D[0]:D)}:D}):c=[Ti];var S=-1;c=ln(c,Fi(lt()));var b=a0(a,function(D,B,H){var X=ln(c,function(fe){return fe(D)});return{criteria:X,index:++S,value:D}});return ew(b,function(D,B){return kC(D,B,d)})}function CC(a,c){return f0(a,c,function(d,S){return ap(a,S)})}function f0(a,c,d){for(var S=-1,b=c.length,D={};++S<b;){var B=c[S],H=Ma(a,B);d(H,B)&&Ql(D,Hs(B,a),H)}return D}function RC(a){return function(c){return Ma(c,a)}}function Id(a,c,d,S){var b=S?QA:vo,D=-1,B=c.length,H=a;for(a===c&&(c=Ei(c)),d&&(H=ln(a,Fi(d)));++D<B;)for(var X=0,fe=c[D],he=d?d(fe):fe;(X=b(H,he,X,S))>-1;)H!==a&&Eu.call(H,X,1),Eu.call(a,X,1);return a}function h0(a,c){for(var d=a?c.length:0,S=d-1;d--;){var b=c[d];if(d==S||b!==D){var D=b;fs(b)?Eu.call(a,b,1):Fd(a,b)}}return a}function Od(a,c){return a+Tu(Xv()*(c-a+1))}function PC(a,c,d,S){for(var b=-1,D=Ln(bu((c-a)/(d||1)),0),B=re(D);D--;)B[S?D:++b]=a,a+=d;return B}function Ud(a,c){var d="";if(!a||c<1||c>ie)return d;do c%2&&(d+=a),c=Tu(c/2),c&&(a+=a);while(c);return d}function bt(a,c){return Jd(G0(a,c,Ti),a+"")}function LC(a){return jv(Po(a))}function DC(a,c){var d=Po(a);return Gu(d,Ea(c,0,d.length))}function Ql(a,c,d,S){if(!un(a))return a;c=Hs(c,a);for(var b=-1,D=c.length,B=D-1,H=a;H!=null&&++b<D;){var X=Hr(c[b]),fe=d;if(X==="__proto__"||X==="constructor"||X==="prototype")return a;if(b!=B){var he=H[X];fe=S?S(he,X,H):t,fe===t&&(fe=un(he)?he:fs(c[b+1])?[]:{})}jl(H,X,fe),H=H[X]}return a}var d0=Au?function(a,c){return Au.set(a,c),a}:Ti,IC=Mu?function(a,c){return Mu(a,"toString",{configurable:!0,enumerable:!1,value:lp(c),writable:!0})}:Ti;function OC(a){return Gu(Po(a))}function or(a,c,d){var S=-1,b=a.length;c<0&&(c=-c>b?0:b+c),d=d>b?b:d,d<0&&(d+=b),b=c>d?0:d-c>>>0,c>>>=0;for(var D=re(b);++S<b;)D[S]=a[S+c];return D}function UC(a,c){var d;return zs(a,function(S,b,D){return d=c(S,b,D),!d}),!!d}function Iu(a,c,d){var S=0,b=a==null?S:a.length;if(typeof c=="number"&&c===c&&b<=Je){for(;S<b;){var D=S+b>>>1,B=a[D];B!==null&&!zi(B)&&(d?B<=c:B<c)?S=D+1:b=D}return b}return Nd(a,c,Ti,d)}function Nd(a,c,d,S){var b=0,D=a==null?0:a.length;if(D===0)return 0;c=d(c);for(var B=c!==c,H=c===null,X=zi(c),fe=c===t;b<D;){var he=Tu((b+D)/2),ge=d(a[he]),Le=ge!==t,Ke=ge===null,ct=ge===ge,Et=zi(ge);if(B)var ut=S||ct;else fe?ut=ct&&(S||Le):H?ut=ct&&Le&&(S||!Ke):X?ut=ct&&Le&&!Ke&&(S||!Et):Ke||Et?ut=!1:ut=S?ge<=c:ge<c;ut?b=he+1:D=he}return Jn(D,Se)}function p0(a,c){for(var d=-1,S=a.length,b=0,D=[];++d<S;){var B=a[d],H=c?c(B):B;if(!d||!Tr(H,X)){var X=H;D[b++]=B===0?0:B}}return D}function m0(a){return typeof a=="number"?a:zi(a)?N:+a}function Bi(a){if(typeof a=="string")return a;if(mt(a))return ln(a,Bi)+"";if(zi(a))return qv?qv.call(a):"";var c=a+"";return c=="0"&&1/a==-te?"-0":c}function ks(a,c,d){var S=-1,b=hu,D=a.length,B=!0,H=[],X=H;if(d)B=!1,b=fd;else if(D>=r){var fe=c?null:XC(a);if(fe)return pu(fe);B=!1,b=Wl,X=new Sa}else X=c?[]:H;e:for(;++S<D;){var he=a[S],ge=c?c(he):he;if(he=d||he!==0?he:0,B&&ge===ge){for(var Le=X.length;Le--;)if(X[Le]===ge)continue e;c&&X.push(ge),H.push(he)}else b(X,ge,d)||(X!==H&&X.push(ge),H.push(he))}return H}function Fd(a,c){return c=Hs(c,a),a=W0(a,c),a==null||delete a[Hr(lr(c))]}function g0(a,c,d,S){return Ql(a,c,d(Ma(a,c)),S)}function Ou(a,c,d,S){for(var b=a.length,D=S?b:-1;(S?D--:++D<b)&&c(a[D],D,a););return d?or(a,S?0:D,S?D+1:b):or(a,S?D+1:0,S?b:D)}function _0(a,c){var d=a;return d instanceof Lt&&(d=d.value()),hd(c,function(S,b){return b.func.apply(b.thisArg,Ns([S],b.args))},d)}function Bd(a,c,d){var S=a.length;if(S<2)return S?ks(a[0]):[];for(var b=-1,D=re(S);++b<S;)for(var B=a[b],H=-1;++H<S;)H!=b&&(D[b]=Kl(D[b]||B,a[H],c,d));return ks($n(D,1),c,d)}function v0(a,c,d){for(var S=-1,b=a.length,D=c.length,B={};++S<b;){var H=S<D?c[S]:t;d(B,a[S],H)}return B}function zd(a){return Sn(a)?a:[]}function kd(a){return typeof a=="function"?a:Ti}function Hs(a,c){return mt(a)?a:jd(a,c)?[a]:q0(Gt(a))}var NC=bt;function Gs(a,c,d){var S=a.length;return d=d===t?S:d,!c&&d>=S?a:or(a,c,d)}var x0=Mw||function(a){return Vn.clearTimeout(a)};function y0(a,c){if(c)return a.slice();var d=a.length,S=Hv?Hv(d):new a.constructor(d);return a.copy(S),S}function Hd(a){var c=new a.constructor(a.byteLength);return new yu(c).set(new yu(a)),c}function FC(a,c){var d=c?Hd(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.byteLength)}function BC(a){var c=new a.constructor(a.source,Zn.exec(a));return c.lastIndex=a.lastIndex,c}function zC(a){return Yl?Zt(Yl.call(a)):{}}function S0(a,c){var d=c?Hd(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.length)}function E0(a,c){if(a!==c){var d=a!==t,S=a===null,b=a===a,D=zi(a),B=c!==t,H=c===null,X=c===c,fe=zi(c);if(!H&&!fe&&!D&&a>c||D&&B&&X&&!H&&!fe||S&&B&&X||!d&&X||!b)return 1;if(!S&&!D&&!fe&&a<c||fe&&d&&b&&!S&&!D||H&&d&&b||!B&&b||!X)return-1}return 0}function kC(a,c,d){for(var S=-1,b=a.criteria,D=c.criteria,B=b.length,H=d.length;++S<B;){var X=E0(b[S],D[S]);if(X){if(S>=H)return X;var fe=d[S];return X*(fe=="desc"?-1:1)}}return a.index-c.index}function M0(a,c,d,S){for(var b=-1,D=a.length,B=d.length,H=-1,X=c.length,fe=Ln(D-B,0),he=re(X+fe),ge=!S;++H<X;)he[H]=c[H];for(;++b<B;)(ge||b<D)&&(he[d[b]]=a[b]);for(;fe--;)he[H++]=a[b++];return he}function b0(a,c,d,S){for(var b=-1,D=a.length,B=-1,H=d.length,X=-1,fe=c.length,he=Ln(D-H,0),ge=re(he+fe),Le=!S;++b<he;)ge[b]=a[b];for(var Ke=b;++X<fe;)ge[Ke+X]=c[X];for(;++B<H;)(Le||b<D)&&(ge[Ke+d[B]]=a[b++]);return ge}function Ei(a,c){var d=-1,S=a.length;for(c||(c=re(S));++d<S;)c[d]=a[d];return c}function kr(a,c,d,S){var b=!d;d||(d={});for(var D=-1,B=c.length;++D<B;){var H=c[D],X=S?S(d[H],a[H],H,d,a):t;X===t&&(X=a[H]),b?ls(d,H,X):jl(d,H,X)}return d}function HC(a,c){return kr(a,Yd(a),c)}function GC(a,c){return kr(a,F0(a),c)}function Uu(a,c){return function(d,S){var b=mt(d)?qA:uC,D=c?c():{};return b(d,a,lt(S,2),D)}}function Ao(a){return bt(function(c,d){var S=-1,b=d.length,D=b>1?d[b-1]:t,B=b>2?d[2]:t;for(D=a.length>3&&typeof D=="function"?(b--,D):t,B&&ci(d[0],d[1],B)&&(D=b<3?t:D,b=1),c=Zt(c);++S<b;){var H=d[S];H&&a(c,H,S,D)}return c})}function T0(a,c){return function(d,S){if(d==null)return d;if(!Mi(d))return a(d,S);for(var b=d.length,D=c?b:-1,B=Zt(d);(c?D--:++D<b)&&S(B[D],D,B)!==!1;);return d}}function A0(a){return function(c,d,S){for(var b=-1,D=Zt(c),B=S(c),H=B.length;H--;){var X=B[a?H:++b];if(d(D[X],X,D)===!1)break}return c}}function WC(a,c,d){var S=c&_,b=ec(a);function D(){var B=this&&this!==Vn&&this instanceof D?b:a;return B.apply(S?d:this,arguments)}return D}function w0(a){return function(c){c=Gt(c);var d=xo(c)?Mr(c):t,S=d?d[0]:c.charAt(0),b=d?Gs(d,1).join(""):c.slice(1);return S[a]()+b}}function wo(a){return function(c){return hd(Tx(bx(c).replace(IA,"")),a,"")}}function ec(a){return function(){var c=arguments;switch(c.length){case 0:return new a;case 1:return new a(c[0]);case 2:return new a(c[0],c[1]);case 3:return new a(c[0],c[1],c[2]);case 4:return new a(c[0],c[1],c[2],c[3]);case 5:return new a(c[0],c[1],c[2],c[3],c[4]);case 6:return new a(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var d=To(a.prototype),S=a.apply(d,c);return un(S)?S:d}}function VC(a,c,d){var S=ec(a);function b(){for(var D=arguments.length,B=re(D),H=D,X=Co(b);H--;)B[H]=arguments[H];var fe=D<3&&B[0]!==X&&B[D-1]!==X?[]:Fs(B,X);if(D-=fe.length,D<d)return D0(a,c,Nu,b.placeholder,t,B,fe,t,t,d-D);var he=this&&this!==Vn&&this instanceof b?S:a;return Ni(he,this,B)}return b}function C0(a){return function(c,d,S){var b=Zt(c);if(!Mi(c)){var D=lt(d,3);c=Nn(c),d=function(H){return D(b[H],H,b)}}var B=a(c,d,S);return B>-1?b[D?c[B]:B]:t}}function R0(a){return us(function(c){var d=c.length,S=d,b=sr.prototype.thru;for(a&&c.reverse();S--;){var D=c[S];if(typeof D!="function")throw new rr(o);if(b&&!B&&ku(D)=="wrapper")var B=new sr([],!0)}for(S=B?S:d;++S<d;){D=c[S];var H=ku(D),X=H=="wrapper"?Xd(D):t;X&&Kd(X[0])&&X[1]==(w|T|C|z)&&!X[4].length&&X[9]==1?B=B[ku(X[0])].apply(B,X[3]):B=D.length==1&&Kd(D)?B[H]():B.thru(D)}return function(){var fe=arguments,he=fe[0];if(B&&fe.length==1&&mt(he))return B.plant(he).value();for(var ge=0,Le=d?c[ge].apply(this,fe):he;++ge<d;)Le=c[ge].call(this,Le);return Le}})}function Nu(a,c,d,S,b,D,B,H,X,fe){var he=c&w,ge=c&_,Le=c&v,Ke=c&(T|E),ct=c&G,Et=Le?t:ec(a);function ut(){for(var Rt=arguments.length,Ot=re(Rt),ki=Rt;ki--;)Ot[ki]=arguments[ki];if(Ke)var ui=Co(ut),Hi=nw(Ot,ui);if(S&&(Ot=M0(Ot,S,b,Ke)),D&&(Ot=b0(Ot,D,B,Ke)),Rt-=Hi,Ke&&Rt<fe){var En=Fs(Ot,ui);return D0(a,c,Nu,ut.placeholder,d,Ot,En,H,X,fe-Rt)}var Ar=ge?d:this,ps=Le?Ar[a]:a;return Rt=Ot.length,H?Ot=uR(Ot,H):ct&&Rt>1&&Ot.reverse(),he&&X<Rt&&(Ot.length=X),this&&this!==Vn&&this instanceof ut&&(ps=Et||ec(ps)),ps.apply(Ar,Ot)}return ut}function P0(a,c){return function(d,S){return vC(d,a,c(S),{})}}function Fu(a,c){return function(d,S){var b;if(d===t&&S===t)return c;if(d!==t&&(b=d),S!==t){if(b===t)return S;typeof d=="string"||typeof S=="string"?(d=Bi(d),S=Bi(S)):(d=m0(d),S=m0(S)),b=a(d,S)}return b}}function Gd(a){return us(function(c){return c=ln(c,Fi(lt())),bt(function(d){var S=this;return a(c,function(b){return Ni(b,S,d)})})})}function Bu(a,c){c=c===t?" ":Bi(c);var d=c.length;if(d<2)return d?Ud(c,a):c;var S=Ud(c,bu(a/yo(c)));return xo(c)?Gs(Mr(S),0,a).join(""):S.slice(0,a)}function $C(a,c,d,S){var b=c&_,D=ec(a);function B(){for(var H=-1,X=arguments.length,fe=-1,he=S.length,ge=re(he+X),Le=this&&this!==Vn&&this instanceof B?D:a;++fe<he;)ge[fe]=S[fe];for(;X--;)ge[fe++]=arguments[++H];return Ni(Le,b?d:this,ge)}return B}function L0(a){return function(c,d,S){return S&&typeof S!="number"&&ci(c,d,S)&&(d=S=t),c=ds(c),d===t?(d=c,c=0):d=ds(d),S=S===t?c<d?1:-1:ds(S),PC(c,d,S,a)}}function zu(a){return function(c,d){return typeof c=="string"&&typeof d=="string"||(c=cr(c),d=cr(d)),a(c,d)}}function D0(a,c,d,S,b,D,B,H,X,fe){var he=c&T,ge=he?B:t,Le=he?t:B,Ke=he?D:t,ct=he?t:D;c|=he?C:R,c&=~(he?R:C),c&A||(c&=~(_|v));var Et=[a,c,b,Ke,ge,ct,Le,H,X,fe],ut=d.apply(t,Et);return Kd(a)&&V0(ut,Et),ut.placeholder=S,$0(ut,a,c)}function Wd(a){var c=Pn[a];return function(d,S){if(d=cr(d),S=S==null?0:Jn(xt(S),292),S&&$v(d)){var b=(Gt(d)+"e").split("e"),D=c(b[0]+"e"+(+b[1]+S));return b=(Gt(D)+"e").split("e"),+(b[0]+"e"+(+b[1]-S))}return c(d)}}var XC=Mo&&1/pu(new Mo([,-0]))[1]==te?function(a){return new Mo(a)}:fp;function I0(a){return function(c){var d=Qn(c);return d==be?xd(c):d==Y?cw(c):tw(c,a(c))}}function cs(a,c,d,S,b,D,B,H){var X=c&v;if(!X&&typeof a!="function")throw new rr(o);var fe=S?S.length:0;if(fe||(c&=~(C|R),S=b=t),B=B===t?B:Ln(xt(B),0),H=H===t?H:xt(H),fe-=b?b.length:0,c&R){var he=S,ge=b;S=b=t}var Le=X?t:Xd(a),Ke=[a,c,d,S,b,he,ge,D,B,H];if(Le&&oR(Ke,Le),a=Ke[0],c=Ke[1],d=Ke[2],S=Ke[3],b=Ke[4],H=Ke[9]=Ke[9]===t?X?0:a.length:Ln(Ke[9]-fe,0),!H&&c&(T|E)&&(c&=~(T|E)),!c||c==_)var ct=WC(a,c,d);else c==T||c==E?ct=VC(a,c,H):(c==C||c==(_|C))&&!b.length?ct=$C(a,c,d,S):ct=Nu.apply(t,Ke);var Et=Le?d0:V0;return $0(Et(ct,Ke),a,c)}function O0(a,c,d,S){return a===t||Tr(a,Eo[d])&&!Vt.call(S,d)?c:a}function U0(a,c,d,S,b,D){return un(a)&&un(c)&&(D.set(c,a),Du(a,c,t,U0,D),D.delete(c)),a}function qC(a){return ic(a)?t:a}function N0(a,c,d,S,b,D){var B=d&y,H=a.length,X=c.length;if(H!=X&&!(B&&X>H))return!1;var fe=D.get(a),he=D.get(c);if(fe&&he)return fe==c&&he==a;var ge=-1,Le=!0,Ke=d&x?new Sa:t;for(D.set(a,c),D.set(c,a);++ge<H;){var ct=a[ge],Et=c[ge];if(S)var ut=B?S(Et,ct,ge,c,a,D):S(ct,Et,ge,a,c,D);if(ut!==t){if(ut)continue;Le=!1;break}if(Ke){if(!dd(c,function(Rt,Ot){if(!Wl(Ke,Ot)&&(ct===Rt||b(ct,Rt,d,S,D)))return Ke.push(Ot)})){Le=!1;break}}else if(!(ct===Et||b(ct,Et,d,S,D))){Le=!1;break}}return D.delete(a),D.delete(c),Le}function YC(a,c,d,S,b,D,B){switch(d){case ke:if(a.byteLength!=c.byteLength||a.byteOffset!=c.byteOffset)return!1;a=a.buffer,c=c.buffer;case Ee:return!(a.byteLength!=c.byteLength||!D(new yu(a),new yu(c)));case Oe:case Ce:case Ge:return Tr(+a,+c);case $e:return a.name==c.name&&a.message==c.message;case P:case me:return a==c+"";case be:var H=xd;case Y:var X=S&y;if(H||(H=pu),a.size!=c.size&&!X)return!1;var fe=B.get(a);if(fe)return fe==c;S|=x,B.set(a,c);var he=N0(H(a),H(c),S,b,D,B);return B.delete(a),he;case de:if(Yl)return Yl.call(a)==Yl.call(c)}return!1}function jC(a,c,d,S,b,D){var B=d&y,H=Vd(a),X=H.length,fe=Vd(c),he=fe.length;if(X!=he&&!B)return!1;for(var ge=X;ge--;){var Le=H[ge];if(!(B?Le in c:Vt.call(c,Le)))return!1}var Ke=D.get(a),ct=D.get(c);if(Ke&&ct)return Ke==c&&ct==a;var Et=!0;D.set(a,c),D.set(c,a);for(var ut=B;++ge<X;){Le=H[ge];var Rt=a[Le],Ot=c[Le];if(S)var ki=B?S(Ot,Rt,Le,c,a,D):S(Rt,Ot,Le,a,c,D);if(!(ki===t?Rt===Ot||b(Rt,Ot,d,S,D):ki)){Et=!1;break}ut||(ut=Le=="constructor")}if(Et&&!ut){var ui=a.constructor,Hi=c.constructor;ui!=Hi&&"constructor"in a&&"constructor"in c&&!(typeof ui=="function"&&ui instanceof ui&&typeof Hi=="function"&&Hi instanceof Hi)&&(Et=!1)}return D.delete(a),D.delete(c),Et}function us(a){return Jd(G0(a,t,Z0),a+"")}function Vd(a){return n0(a,Nn,Yd)}function $d(a){return n0(a,bi,F0)}var Xd=Au?function(a){return Au.get(a)}:fp;function ku(a){for(var c=a.name+"",d=bo[c],S=Vt.call(bo,c)?d.length:0;S--;){var b=d[S],D=b.func;if(D==null||D==a)return b.name}return c}function Co(a){var c=Vt.call(L,"placeholder")?L:a;return c.placeholder}function lt(){var a=L.iteratee||cp;return a=a===cp?s0:a,arguments.length?a(arguments[0],arguments[1]):a}function Hu(a,c){var d=a.__data__;return iR(c)?d[typeof c=="string"?"string":"hash"]:d.map}function qd(a){for(var c=Nn(a),d=c.length;d--;){var S=c[d],b=a[S];c[d]=[S,b,k0(b)]}return c}function ba(a,c){var d=aw(a,c);return r0(d)?d:t}function KC(a){var c=Vt.call(a,xa),d=a[xa];try{a[xa]=t;var S=!0}catch{}var b=vu.call(a);return S&&(c?a[xa]=d:delete a[xa]),b}var Yd=Sd?function(a){return a==null?[]:(a=Zt(a),Us(Sd(a),function(c){return Wv.call(a,c)}))}:hp,F0=Sd?function(a){for(var c=[];a;)Ns(c,Yd(a)),a=Su(a);return c}:hp,Qn=li;(Ed&&Qn(new Ed(new ArrayBuffer(1)))!=ke||$l&&Qn(new $l)!=be||Md&&Qn(Md.resolve())!=et||Mo&&Qn(new Mo)!=Y||Xl&&Qn(new Xl)!=we)&&(Qn=function(a){var c=li(a),d=c==K?a.constructor:t,S=d?Ta(d):"";if(S)switch(S){case Dw:return ke;case Iw:return be;case Ow:return et;case Uw:return Y;case Nw:return we}return c});function ZC(a,c,d){for(var S=-1,b=d.length;++S<b;){var D=d[S],B=D.size;switch(D.type){case"drop":a+=B;break;case"dropRight":c-=B;break;case"take":c=Jn(c,a+B);break;case"takeRight":a=Ln(a,c-B);break}}return{start:a,end:c}}function JC(a){var c=a.match(St);return c?c[1].split($t):[]}function B0(a,c,d){c=Hs(c,a);for(var S=-1,b=c.length,D=!1;++S<b;){var B=Hr(c[S]);if(!(D=a!=null&&d(a,B)))break;a=a[B]}return D||++S!=b?D:(b=a==null?0:a.length,!!b&&Yu(b)&&fs(B,b)&&(mt(a)||Aa(a)))}function QC(a){var c=a.length,d=new a.constructor(c);return c&&typeof a[0]=="string"&&Vt.call(a,"index")&&(d.index=a.index,d.input=a.input),d}function z0(a){return typeof a.constructor=="function"&&!tc(a)?To(Su(a)):{}}function eR(a,c,d){var S=a.constructor;switch(c){case Ee:return Hd(a);case Oe:case Ce:return new S(+a);case ke:return FC(a,d);case tt:case pe:case Tt:case Xe:case at:case We:case Ie:case ot:case _t:return S0(a,d);case be:return new S;case Ge:case me:return new S(a);case P:return BC(a);case Y:return new S;case de:return zC(a)}}function tR(a,c){var d=c.length;if(!d)return a;var S=d-1;return c[S]=(d>1?"& ":"")+c[S],c=c.join(d>2?", ":" "),a.replace(tn,`{
/* [wrapped with `+c+`] */
`)}function nR(a){return mt(a)||Aa(a)||!!(Vv&&a&&a[Vv])}function fs(a,c){var d=typeof a;return c=c??ie,!!c&&(d=="number"||d!="symbol"&&Z.test(a))&&a>-1&&a%1==0&&a<c}function ci(a,c,d){if(!un(d))return!1;var S=typeof c;return(S=="number"?Mi(d)&&fs(c,d.length):S=="string"&&c in d)?Tr(d[c],a):!1}function jd(a,c){if(mt(a))return!1;var d=typeof a;return d=="number"||d=="symbol"||d=="boolean"||a==null||zi(a)?!0:Ve.test(a)||!qe.test(a)||c!=null&&a in Zt(c)}function iR(a){var c=typeof a;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?a!=="__proto__":a===null}function Kd(a){var c=ku(a),d=L[c];if(typeof d!="function"||!(c in Lt.prototype))return!1;if(a===d)return!0;var S=Xd(d);return!!S&&a===S[0]}function rR(a){return!!kv&&kv in a}var sR=gu?hs:dp;function tc(a){var c=a&&a.constructor,d=typeof c=="function"&&c.prototype||Eo;return a===d}function k0(a){return a===a&&!un(a)}function H0(a,c){return function(d){return d==null?!1:d[a]===c&&(c!==t||a in Zt(d))}}function aR(a){var c=Xu(a,function(S){return d.size===f&&d.clear(),S}),d=c.cache;return c}function oR(a,c){var d=a[1],S=c[1],b=d|S,D=b<(_|v|w),B=S==w&&d==T||S==w&&d==z&&a[7].length<=c[8]||S==(w|z)&&c[7].length<=c[8]&&d==T;if(!(D||B))return a;S&_&&(a[2]=c[2],b|=d&_?0:A);var H=c[3];if(H){var X=a[3];a[3]=X?M0(X,H,c[4]):H,a[4]=X?Fs(a[3],h):c[4]}return H=c[5],H&&(X=a[5],a[5]=X?b0(X,H,c[6]):H,a[6]=X?Fs(a[5],h):c[6]),H=c[7],H&&(a[7]=H),S&w&&(a[8]=a[8]==null?c[8]:Jn(a[8],c[8])),a[9]==null&&(a[9]=c[9]),a[0]=c[0],a[1]=b,a}function lR(a){var c=[];if(a!=null)for(var d in Zt(a))c.push(d);return c}function cR(a){return vu.call(a)}function G0(a,c,d){return c=Ln(c===t?a.length-1:c,0),function(){for(var S=arguments,b=-1,D=Ln(S.length-c,0),B=re(D);++b<D;)B[b]=S[c+b];b=-1;for(var H=re(c+1);++b<c;)H[b]=S[b];return H[c]=d(B),Ni(a,this,H)}}function W0(a,c){return c.length<2?a:Ma(a,or(c,0,-1))}function uR(a,c){for(var d=a.length,S=Jn(c.length,d),b=Ei(a);S--;){var D=c[S];a[S]=fs(D,d)?b[D]:t}return a}function Zd(a,c){if(!(c==="constructor"&&typeof a[c]=="function")&&c!="__proto__")return a[c]}var V0=X0(d0),nc=Tw||function(a,c){return Vn.setTimeout(a,c)},Jd=X0(IC);function $0(a,c,d){var S=c+"";return Jd(a,tR(S,fR(JC(S),d)))}function X0(a){var c=0,d=0;return function(){var S=Rw(),b=oe-(S-d);if(d=S,b>0){if(++c>=V)return arguments[0]}else c=0;return a.apply(t,arguments)}}function Gu(a,c){var d=-1,S=a.length,b=S-1;for(c=c===t?S:c;++d<c;){var D=Od(d,b),B=a[D];a[D]=a[d],a[d]=B}return a.length=c,a}var q0=aR(function(a){var c=[];return a.charCodeAt(0)===46&&c.push(""),a.replace(je,function(d,S,b,D){c.push(b?D.replace(Xt,"$1"):S||d)}),c});function Hr(a){if(typeof a=="string"||zi(a))return a;var c=a+"";return c=="0"&&1/a==-te?"-0":c}function Ta(a){if(a!=null){try{return _u.call(a)}catch{}try{return a+""}catch{}}return""}function fR(a,c){return ir(ne,function(d){var S="_."+d[0];c&d[1]&&!hu(a,S)&&a.push(S)}),a.sort()}function Y0(a){if(a instanceof Lt)return a.clone();var c=new sr(a.__wrapped__,a.__chain__);return c.__actions__=Ei(a.__actions__),c.__index__=a.__index__,c.__values__=a.__values__,c}function hR(a,c,d){(d?ci(a,c,d):c===t)?c=1:c=Ln(xt(c),0);var S=a==null?0:a.length;if(!S||c<1)return[];for(var b=0,D=0,B=re(bu(S/c));b<S;)B[D++]=or(a,b,b+=c);return B}function dR(a){for(var c=-1,d=a==null?0:a.length,S=0,b=[];++c<d;){var D=a[c];D&&(b[S++]=D)}return b}function pR(){var a=arguments.length;if(!a)return[];for(var c=re(a-1),d=arguments[0],S=a;S--;)c[S-1]=arguments[S];return Ns(mt(d)?Ei(d):[d],$n(c,1))}var mR=bt(function(a,c){return Sn(a)?Kl(a,$n(c,1,Sn,!0)):[]}),gR=bt(function(a,c){var d=lr(c);return Sn(d)&&(d=t),Sn(a)?Kl(a,$n(c,1,Sn,!0),lt(d,2)):[]}),_R=bt(function(a,c){var d=lr(c);return Sn(d)&&(d=t),Sn(a)?Kl(a,$n(c,1,Sn,!0),t,d):[]});function vR(a,c,d){var S=a==null?0:a.length;return S?(c=d||c===t?1:xt(c),or(a,c<0?0:c,S)):[]}function xR(a,c,d){var S=a==null?0:a.length;return S?(c=d||c===t?1:xt(c),c=S-c,or(a,0,c<0?0:c)):[]}function yR(a,c){return a&&a.length?Ou(a,lt(c,3),!0,!0):[]}function SR(a,c){return a&&a.length?Ou(a,lt(c,3),!0):[]}function ER(a,c,d,S){var b=a==null?0:a.length;return b?(d&&typeof d!="number"&&ci(a,c,d)&&(d=0,S=b),pC(a,c,d,S)):[]}function j0(a,c,d){var S=a==null?0:a.length;if(!S)return-1;var b=d==null?0:xt(d);return b<0&&(b=Ln(S+b,0)),du(a,lt(c,3),b)}function K0(a,c,d){var S=a==null?0:a.length;if(!S)return-1;var b=S-1;return d!==t&&(b=xt(d),b=d<0?Ln(S+b,0):Jn(b,S-1)),du(a,lt(c,3),b,!0)}function Z0(a){var c=a==null?0:a.length;return c?$n(a,1):[]}function MR(a){var c=a==null?0:a.length;return c?$n(a,te):[]}function bR(a,c){var d=a==null?0:a.length;return d?(c=c===t?1:xt(c),$n(a,c)):[]}function TR(a){for(var c=-1,d=a==null?0:a.length,S={};++c<d;){var b=a[c];S[b[0]]=b[1]}return S}function J0(a){return a&&a.length?a[0]:t}function AR(a,c,d){var S=a==null?0:a.length;if(!S)return-1;var b=d==null?0:xt(d);return b<0&&(b=Ln(S+b,0)),vo(a,c,b)}function wR(a){var c=a==null?0:a.length;return c?or(a,0,-1):[]}var CR=bt(function(a){var c=ln(a,zd);return c.length&&c[0]===a[0]?Rd(c):[]}),RR=bt(function(a){var c=lr(a),d=ln(a,zd);return c===lr(d)?c=t:d.pop(),d.length&&d[0]===a[0]?Rd(d,lt(c,2)):[]}),PR=bt(function(a){var c=lr(a),d=ln(a,zd);return c=typeof c=="function"?c:t,c&&d.pop(),d.length&&d[0]===a[0]?Rd(d,t,c):[]});function LR(a,c){return a==null?"":ww.call(a,c)}function lr(a){var c=a==null?0:a.length;return c?a[c-1]:t}function DR(a,c,d){var S=a==null?0:a.length;if(!S)return-1;var b=S;return d!==t&&(b=xt(d),b=b<0?Ln(S+b,0):Jn(b,S-1)),c===c?fw(a,c,b):du(a,Dv,b,!0)}function IR(a,c){return a&&a.length?c0(a,xt(c)):t}var OR=bt(Q0);function Q0(a,c){return a&&a.length&&c&&c.length?Id(a,c):a}function UR(a,c,d){return a&&a.length&&c&&c.length?Id(a,c,lt(d,2)):a}function NR(a,c,d){return a&&a.length&&c&&c.length?Id(a,c,t,d):a}var FR=us(function(a,c){var d=a==null?0:a.length,S=Td(a,c);return h0(a,ln(c,function(b){return fs(b,d)?+b:b}).sort(E0)),S});function BR(a,c){var d=[];if(!(a&&a.length))return d;var S=-1,b=[],D=a.length;for(c=lt(c,3);++S<D;){var B=a[S];c(B,S,a)&&(d.push(B),b.push(S))}return h0(a,b),d}function Qd(a){return a==null?a:Lw.call(a)}function zR(a,c,d){var S=a==null?0:a.length;return S?(d&&typeof d!="number"&&ci(a,c,d)?(c=0,d=S):(c=c==null?0:xt(c),d=d===t?S:xt(d)),or(a,c,d)):[]}function kR(a,c){return Iu(a,c)}function HR(a,c,d){return Nd(a,c,lt(d,2))}function GR(a,c){var d=a==null?0:a.length;if(d){var S=Iu(a,c);if(S<d&&Tr(a[S],c))return S}return-1}function WR(a,c){return Iu(a,c,!0)}function VR(a,c,d){return Nd(a,c,lt(d,2),!0)}function $R(a,c){var d=a==null?0:a.length;if(d){var S=Iu(a,c,!0)-1;if(Tr(a[S],c))return S}return-1}function XR(a){return a&&a.length?p0(a):[]}function qR(a,c){return a&&a.length?p0(a,lt(c,2)):[]}function YR(a){var c=a==null?0:a.length;return c?or(a,1,c):[]}function jR(a,c,d){return a&&a.length?(c=d||c===t?1:xt(c),or(a,0,c<0?0:c)):[]}function KR(a,c,d){var S=a==null?0:a.length;return S?(c=d||c===t?1:xt(c),c=S-c,or(a,c<0?0:c,S)):[]}function ZR(a,c){return a&&a.length?Ou(a,lt(c,3),!1,!0):[]}function JR(a,c){return a&&a.length?Ou(a,lt(c,3)):[]}var QR=bt(function(a){return ks($n(a,1,Sn,!0))}),eP=bt(function(a){var c=lr(a);return Sn(c)&&(c=t),ks($n(a,1,Sn,!0),lt(c,2))}),tP=bt(function(a){var c=lr(a);return c=typeof c=="function"?c:t,ks($n(a,1,Sn,!0),t,c)});function nP(a){return a&&a.length?ks(a):[]}function iP(a,c){return a&&a.length?ks(a,lt(c,2)):[]}function rP(a,c){return c=typeof c=="function"?c:t,a&&a.length?ks(a,t,c):[]}function ep(a){if(!(a&&a.length))return[];var c=0;return a=Us(a,function(d){if(Sn(d))return c=Ln(d.length,c),!0}),_d(c,function(d){return ln(a,pd(d))})}function ex(a,c){if(!(a&&a.length))return[];var d=ep(a);return c==null?d:ln(d,function(S){return Ni(c,t,S)})}var sP=bt(function(a,c){return Sn(a)?Kl(a,c):[]}),aP=bt(function(a){return Bd(Us(a,Sn))}),oP=bt(function(a){var c=lr(a);return Sn(c)&&(c=t),Bd(Us(a,Sn),lt(c,2))}),lP=bt(function(a){var c=lr(a);return c=typeof c=="function"?c:t,Bd(Us(a,Sn),t,c)}),cP=bt(ep);function uP(a,c){return v0(a||[],c||[],jl)}function fP(a,c){return v0(a||[],c||[],Ql)}var hP=bt(function(a){var c=a.length,d=c>1?a[c-1]:t;return d=typeof d=="function"?(a.pop(),d):t,ex(a,d)});function tx(a){var c=L(a);return c.__chain__=!0,c}function dP(a,c){return c(a),a}function Wu(a,c){return c(a)}var pP=us(function(a){var c=a.length,d=c?a[0]:0,S=this.__wrapped__,b=function(D){return Td(D,a)};return c>1||this.__actions__.length||!(S instanceof Lt)||!fs(d)?this.thru(b):(S=S.slice(d,+d+(c?1:0)),S.__actions__.push({func:Wu,args:[b],thisArg:t}),new sr(S,this.__chain__).thru(function(D){return c&&!D.length&&D.push(t),D}))});function mP(){return tx(this)}function gP(){return new sr(this.value(),this.__chain__)}function _P(){this.__values__===t&&(this.__values__=mx(this.value()));var a=this.__index__>=this.__values__.length,c=a?t:this.__values__[this.__index__++];return{done:a,value:c}}function vP(){return this}function xP(a){for(var c,d=this;d instanceof Cu;){var S=Y0(d);S.__index__=0,S.__values__=t,c?b.__wrapped__=S:c=S;var b=S;d=d.__wrapped__}return b.__wrapped__=a,c}function yP(){var a=this.__wrapped__;if(a instanceof Lt){var c=a;return this.__actions__.length&&(c=new Lt(this)),c=c.reverse(),c.__actions__.push({func:Wu,args:[Qd],thisArg:t}),new sr(c,this.__chain__)}return this.thru(Qd)}function SP(){return _0(this.__wrapped__,this.__actions__)}var EP=Uu(function(a,c,d){Vt.call(a,d)?++a[d]:ls(a,d,1)});function MP(a,c,d){var S=mt(a)?Pv:dC;return d&&ci(a,c,d)&&(c=t),S(a,lt(c,3))}function bP(a,c){var d=mt(a)?Us:e0;return d(a,lt(c,3))}var TP=C0(j0),AP=C0(K0);function wP(a,c){return $n(Vu(a,c),1)}function CP(a,c){return $n(Vu(a,c),te)}function RP(a,c,d){return d=d===t?1:xt(d),$n(Vu(a,c),d)}function nx(a,c){var d=mt(a)?ir:zs;return d(a,lt(c,3))}function ix(a,c){var d=mt(a)?YA:Qv;return d(a,lt(c,3))}var PP=Uu(function(a,c,d){Vt.call(a,d)?a[d].push(c):ls(a,d,[c])});function LP(a,c,d,S){a=Mi(a)?a:Po(a),d=d&&!S?xt(d):0;var b=a.length;return d<0&&(d=Ln(b+d,0)),ju(a)?d<=b&&a.indexOf(c,d)>-1:!!b&&vo(a,c,d)>-1}var DP=bt(function(a,c,d){var S=-1,b=typeof c=="function",D=Mi(a)?re(a.length):[];return zs(a,function(B){D[++S]=b?Ni(c,B,d):Zl(B,c,d)}),D}),IP=Uu(function(a,c,d){ls(a,d,c)});function Vu(a,c){var d=mt(a)?ln:a0;return d(a,lt(c,3))}function OP(a,c,d,S){return a==null?[]:(mt(c)||(c=c==null?[]:[c]),d=S?t:d,mt(d)||(d=d==null?[]:[d]),u0(a,c,d))}var UP=Uu(function(a,c,d){a[d?0:1].push(c)},function(){return[[],[]]});function NP(a,c,d){var S=mt(a)?hd:Ov,b=arguments.length<3;return S(a,lt(c,4),d,b,zs)}function FP(a,c,d){var S=mt(a)?jA:Ov,b=arguments.length<3;return S(a,lt(c,4),d,b,Qv)}function BP(a,c){var d=mt(a)?Us:e0;return d(a,qu(lt(c,3)))}function zP(a){var c=mt(a)?jv:LC;return c(a)}function kP(a,c,d){(d?ci(a,c,d):c===t)?c=1:c=xt(c);var S=mt(a)?lC:DC;return S(a,c)}function HP(a){var c=mt(a)?cC:OC;return c(a)}function GP(a){if(a==null)return 0;if(Mi(a))return ju(a)?yo(a):a.length;var c=Qn(a);return c==be||c==Y?a.size:Ld(a).length}function WP(a,c,d){var S=mt(a)?dd:UC;return d&&ci(a,c,d)&&(c=t),S(a,lt(c,3))}var VP=bt(function(a,c){if(a==null)return[];var d=c.length;return d>1&&ci(a,c[0],c[1])?c=[]:d>2&&ci(c[0],c[1],c[2])&&(c=[c[0]]),u0(a,$n(c,1),[])}),$u=bw||function(){return Vn.Date.now()};function $P(a,c){if(typeof c!="function")throw new rr(o);return a=xt(a),function(){if(--a<1)return c.apply(this,arguments)}}function rx(a,c,d){return c=d?t:c,c=a&&c==null?a.length:c,cs(a,w,t,t,t,t,c)}function sx(a,c){var d;if(typeof c!="function")throw new rr(o);return a=xt(a),function(){return--a>0&&(d=c.apply(this,arguments)),a<=1&&(c=t),d}}var tp=bt(function(a,c,d){var S=_;if(d.length){var b=Fs(d,Co(tp));S|=C}return cs(a,S,c,d,b)}),ax=bt(function(a,c,d){var S=_|v;if(d.length){var b=Fs(d,Co(ax));S|=C}return cs(c,S,a,d,b)});function ox(a,c,d){c=d?t:c;var S=cs(a,T,t,t,t,t,t,c);return S.placeholder=ox.placeholder,S}function lx(a,c,d){c=d?t:c;var S=cs(a,E,t,t,t,t,t,c);return S.placeholder=lx.placeholder,S}function cx(a,c,d){var S,b,D,B,H,X,fe=0,he=!1,ge=!1,Le=!0;if(typeof a!="function")throw new rr(o);c=cr(c)||0,un(d)&&(he=!!d.leading,ge="maxWait"in d,D=ge?Ln(cr(d.maxWait)||0,c):D,Le="trailing"in d?!!d.trailing:Le);function Ke(En){var Ar=S,ps=b;return S=b=t,fe=En,B=a.apply(ps,Ar),B}function ct(En){return fe=En,H=nc(Rt,c),he?Ke(En):B}function Et(En){var Ar=En-X,ps=En-fe,Cx=c-Ar;return ge?Jn(Cx,D-ps):Cx}function ut(En){var Ar=En-X,ps=En-fe;return X===t||Ar>=c||Ar<0||ge&&ps>=D}function Rt(){var En=$u();if(ut(En))return Ot(En);H=nc(Rt,Et(En))}function Ot(En){return H=t,Le&&S?Ke(En):(S=b=t,B)}function ki(){H!==t&&x0(H),fe=0,S=X=b=H=t}function ui(){return H===t?B:Ot($u())}function Hi(){var En=$u(),Ar=ut(En);if(S=arguments,b=this,X=En,Ar){if(H===t)return ct(X);if(ge)return x0(H),H=nc(Rt,c),Ke(X)}return H===t&&(H=nc(Rt,c)),B}return Hi.cancel=ki,Hi.flush=ui,Hi}var XP=bt(function(a,c){return Jv(a,1,c)}),qP=bt(function(a,c,d){return Jv(a,cr(c)||0,d)});function YP(a){return cs(a,G)}function Xu(a,c){if(typeof a!="function"||c!=null&&typeof c!="function")throw new rr(o);var d=function(){var S=arguments,b=c?c.apply(this,S):S[0],D=d.cache;if(D.has(b))return D.get(b);var B=a.apply(this,S);return d.cache=D.set(b,B)||D,B};return d.cache=new(Xu.Cache||os),d}Xu.Cache=os;function qu(a){if(typeof a!="function")throw new rr(o);return function(){var c=arguments;switch(c.length){case 0:return!a.call(this);case 1:return!a.call(this,c[0]);case 2:return!a.call(this,c[0],c[1]);case 3:return!a.call(this,c[0],c[1],c[2])}return!a.apply(this,c)}}function jP(a){return sx(2,a)}var KP=NC(function(a,c){c=c.length==1&&mt(c[0])?ln(c[0],Fi(lt())):ln($n(c,1),Fi(lt()));var d=c.length;return bt(function(S){for(var b=-1,D=Jn(S.length,d);++b<D;)S[b]=c[b].call(this,S[b]);return Ni(a,this,S)})}),np=bt(function(a,c){var d=Fs(c,Co(np));return cs(a,C,t,c,d)}),ux=bt(function(a,c){var d=Fs(c,Co(ux));return cs(a,R,t,c,d)}),ZP=us(function(a,c){return cs(a,z,t,t,t,c)});function JP(a,c){if(typeof a!="function")throw new rr(o);return c=c===t?c:xt(c),bt(a,c)}function QP(a,c){if(typeof a!="function")throw new rr(o);return c=c==null?0:Ln(xt(c),0),bt(function(d){var S=d[c],b=Gs(d,0,c);return S&&Ns(b,S),Ni(a,this,b)})}function eL(a,c,d){var S=!0,b=!0;if(typeof a!="function")throw new rr(o);return un(d)&&(S="leading"in d?!!d.leading:S,b="trailing"in d?!!d.trailing:b),cx(a,c,{leading:S,maxWait:c,trailing:b})}function tL(a){return rx(a,1)}function nL(a,c){return np(kd(c),a)}function iL(){if(!arguments.length)return[];var a=arguments[0];return mt(a)?a:[a]}function rL(a){return ar(a,g)}function sL(a,c){return c=typeof c=="function"?c:t,ar(a,g,c)}function aL(a){return ar(a,p|g)}function oL(a,c){return c=typeof c=="function"?c:t,ar(a,p|g,c)}function lL(a,c){return c==null||Zv(a,c,Nn(c))}function Tr(a,c){return a===c||a!==a&&c!==c}var cL=zu(Cd),uL=zu(function(a,c){return a>=c}),Aa=i0(function(){return arguments}())?i0:function(a){return gn(a)&&Vt.call(a,"callee")&&!Wv.call(a,"callee")},mt=re.isArray,fL=bv?Fi(bv):xC;function Mi(a){return a!=null&&Yu(a.length)&&!hs(a)}function Sn(a){return gn(a)&&Mi(a)}function hL(a){return a===!0||a===!1||gn(a)&&li(a)==Oe}var Ws=Aw||dp,dL=Tv?Fi(Tv):yC;function pL(a){return gn(a)&&a.nodeType===1&&!ic(a)}function mL(a){if(a==null)return!0;if(Mi(a)&&(mt(a)||typeof a=="string"||typeof a.splice=="function"||Ws(a)||Ro(a)||Aa(a)))return!a.length;var c=Qn(a);if(c==be||c==Y)return!a.size;if(tc(a))return!Ld(a).length;for(var d in a)if(Vt.call(a,d))return!1;return!0}function gL(a,c){return Jl(a,c)}function _L(a,c,d){d=typeof d=="function"?d:t;var S=d?d(a,c):t;return S===t?Jl(a,c,t,d):!!S}function ip(a){if(!gn(a))return!1;var c=li(a);return c==$e||c==gt||typeof a.message=="string"&&typeof a.name=="string"&&!ic(a)}function vL(a){return typeof a=="number"&&$v(a)}function hs(a){if(!un(a))return!1;var c=li(a);return c==q||c==st||c==De||c==O}function fx(a){return typeof a=="number"&&a==xt(a)}function Yu(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=ie}function un(a){var c=typeof a;return a!=null&&(c=="object"||c=="function")}function gn(a){return a!=null&&typeof a=="object"}var hx=Av?Fi(Av):EC;function xL(a,c){return a===c||Pd(a,c,qd(c))}function yL(a,c,d){return d=typeof d=="function"?d:t,Pd(a,c,qd(c),d)}function SL(a){return dx(a)&&a!=+a}function EL(a){if(sR(a))throw new pt(s);return r0(a)}function ML(a){return a===null}function bL(a){return a==null}function dx(a){return typeof a=="number"||gn(a)&&li(a)==Ge}function ic(a){if(!gn(a)||li(a)!=K)return!1;var c=Su(a);if(c===null)return!0;var d=Vt.call(c,"constructor")&&c.constructor;return typeof d=="function"&&d instanceof d&&_u.call(d)==yw}var rp=wv?Fi(wv):MC;function TL(a){return fx(a)&&a>=-ie&&a<=ie}var px=Cv?Fi(Cv):bC;function ju(a){return typeof a=="string"||!mt(a)&&gn(a)&&li(a)==me}function zi(a){return typeof a=="symbol"||gn(a)&&li(a)==de}var Ro=Rv?Fi(Rv):TC;function AL(a){return a===t}function wL(a){return gn(a)&&Qn(a)==we}function CL(a){return gn(a)&&li(a)==Ae}var RL=zu(Dd),PL=zu(function(a,c){return a<=c});function mx(a){if(!a)return[];if(Mi(a))return ju(a)?Mr(a):Ei(a);if(Vl&&a[Vl])return lw(a[Vl]());var c=Qn(a),d=c==be?xd:c==Y?pu:Po;return d(a)}function ds(a){if(!a)return a===0?a:0;if(a=cr(a),a===te||a===-te){var c=a<0?-1:1;return c*ae}return a===a?a:0}function xt(a){var c=ds(a),d=c%1;return c===c?d?c-d:c:0}function gx(a){return a?Ea(xt(a),0,ce):0}function cr(a){if(typeof a=="number")return a;if(zi(a))return N;if(un(a)){var c=typeof a.valueOf=="function"?a.valueOf():a;a=un(c)?c+"":c}if(typeof a!="string")return a===0?a:+a;a=Uv(a);var d=$.test(a);return d||Q.test(a)?$A(a.slice(2),d?2:8):I.test(a)?N:+a}function _x(a){return kr(a,bi(a))}function LL(a){return a?Ea(xt(a),-ie,ie):a===0?a:0}function Gt(a){return a==null?"":Bi(a)}var DL=Ao(function(a,c){if(tc(c)||Mi(c)){kr(c,Nn(c),a);return}for(var d in c)Vt.call(c,d)&&jl(a,d,c[d])}),vx=Ao(function(a,c){kr(c,bi(c),a)}),Ku=Ao(function(a,c,d,S){kr(c,bi(c),a,S)}),IL=Ao(function(a,c,d,S){kr(c,Nn(c),a,S)}),OL=us(Td);function UL(a,c){var d=To(a);return c==null?d:Kv(d,c)}var NL=bt(function(a,c){a=Zt(a);var d=-1,S=c.length,b=S>2?c[2]:t;for(b&&ci(c[0],c[1],b)&&(S=1);++d<S;)for(var D=c[d],B=bi(D),H=-1,X=B.length;++H<X;){var fe=B[H],he=a[fe];(he===t||Tr(he,Eo[fe])&&!Vt.call(a,fe))&&(a[fe]=D[fe])}return a}),FL=bt(function(a){return a.push(t,U0),Ni(xx,t,a)});function BL(a,c){return Lv(a,lt(c,3),zr)}function zL(a,c){return Lv(a,lt(c,3),wd)}function kL(a,c){return a==null?a:Ad(a,lt(c,3),bi)}function HL(a,c){return a==null?a:t0(a,lt(c,3),bi)}function GL(a,c){return a&&zr(a,lt(c,3))}function WL(a,c){return a&&wd(a,lt(c,3))}function VL(a){return a==null?[]:Lu(a,Nn(a))}function $L(a){return a==null?[]:Lu(a,bi(a))}function sp(a,c,d){var S=a==null?t:Ma(a,c);return S===t?d:S}function XL(a,c){return a!=null&&B0(a,c,mC)}function ap(a,c){return a!=null&&B0(a,c,gC)}var qL=P0(function(a,c,d){c!=null&&typeof c.toString!="function"&&(c=vu.call(c)),a[c]=d},lp(Ti)),YL=P0(function(a,c,d){c!=null&&typeof c.toString!="function"&&(c=vu.call(c)),Vt.call(a,c)?a[c].push(d):a[c]=[d]},lt),jL=bt(Zl);function Nn(a){return Mi(a)?Yv(a):Ld(a)}function bi(a){return Mi(a)?Yv(a,!0):AC(a)}function KL(a,c){var d={};return c=lt(c,3),zr(a,function(S,b,D){ls(d,c(S,b,D),S)}),d}function ZL(a,c){var d={};return c=lt(c,3),zr(a,function(S,b,D){ls(d,b,c(S,b,D))}),d}var JL=Ao(function(a,c,d){Du(a,c,d)}),xx=Ao(function(a,c,d,S){Du(a,c,d,S)}),QL=us(function(a,c){var d={};if(a==null)return d;var S=!1;c=ln(c,function(D){return D=Hs(D,a),S||(S=D.length>1),D}),kr(a,$d(a),d),S&&(d=ar(d,p|m|g,qC));for(var b=c.length;b--;)Fd(d,c[b]);return d});function eD(a,c){return yx(a,qu(lt(c)))}var tD=us(function(a,c){return a==null?{}:CC(a,c)});function yx(a,c){if(a==null)return{};var d=ln($d(a),function(S){return[S]});return c=lt(c),f0(a,d,function(S,b){return c(S,b[0])})}function nD(a,c,d){c=Hs(c,a);var S=-1,b=c.length;for(b||(b=1,a=t);++S<b;){var D=a==null?t:a[Hr(c[S])];D===t&&(S=b,D=d),a=hs(D)?D.call(a):D}return a}function iD(a,c,d){return a==null?a:Ql(a,c,d)}function rD(a,c,d,S){return S=typeof S=="function"?S:t,a==null?a:Ql(a,c,d,S)}var Sx=I0(Nn),Ex=I0(bi);function sD(a,c,d){var S=mt(a),b=S||Ws(a)||Ro(a);if(c=lt(c,4),d==null){var D=a&&a.constructor;b?d=S?new D:[]:un(a)?d=hs(D)?To(Su(a)):{}:d={}}return(b?ir:zr)(a,function(B,H,X){return c(d,B,H,X)}),d}function aD(a,c){return a==null?!0:Fd(a,c)}function oD(a,c,d){return a==null?a:g0(a,c,kd(d))}function lD(a,c,d,S){return S=typeof S=="function"?S:t,a==null?a:g0(a,c,kd(d),S)}function Po(a){return a==null?[]:vd(a,Nn(a))}function cD(a){return a==null?[]:vd(a,bi(a))}function uD(a,c,d){return d===t&&(d=c,c=t),d!==t&&(d=cr(d),d=d===d?d:0),c!==t&&(c=cr(c),c=c===c?c:0),Ea(cr(a),c,d)}function fD(a,c,d){return c=ds(c),d===t?(d=c,c=0):d=ds(d),a=cr(a),_C(a,c,d)}function hD(a,c,d){if(d&&typeof d!="boolean"&&ci(a,c,d)&&(c=d=t),d===t&&(typeof c=="boolean"?(d=c,c=t):typeof a=="boolean"&&(d=a,a=t)),a===t&&c===t?(a=0,c=1):(a=ds(a),c===t?(c=a,a=0):c=ds(c)),a>c){var S=a;a=c,c=S}if(d||a%1||c%1){var b=Xv();return Jn(a+b*(c-a+VA("1e-"+((b+"").length-1))),c)}return Od(a,c)}var dD=wo(function(a,c,d){return c=c.toLowerCase(),a+(d?Mx(c):c)});function Mx(a){return op(Gt(a).toLowerCase())}function bx(a){return a=Gt(a),a&&a.replace(Me,iw).replace(OA,"")}function pD(a,c,d){a=Gt(a),c=Bi(c);var S=a.length;d=d===t?S:Ea(xt(d),0,S);var b=d;return d-=c.length,d>=0&&a.slice(d,b)==c}function mD(a){return a=Gt(a),a&&Ne.test(a)?a.replace(ve,rw):a}function gD(a){return a=Gt(a),a&&nt.test(a)?a.replace(ye,"\\$&"):a}var _D=wo(function(a,c,d){return a+(d?"-":"")+c.toLowerCase()}),vD=wo(function(a,c,d){return a+(d?" ":"")+c.toLowerCase()}),xD=w0("toLowerCase");function yD(a,c,d){a=Gt(a),c=xt(c);var S=c?yo(a):0;if(!c||S>=c)return a;var b=(c-S)/2;return Bu(Tu(b),d)+a+Bu(bu(b),d)}function SD(a,c,d){a=Gt(a),c=xt(c);var S=c?yo(a):0;return c&&S<c?a+Bu(c-S,d):a}function ED(a,c,d){a=Gt(a),c=xt(c);var S=c?yo(a):0;return c&&S<c?Bu(c-S,d)+a:a}function MD(a,c,d){return d||c==null?c=0:c&&(c=+c),Pw(Gt(a).replace(Qe,""),c||0)}function bD(a,c,d){return(d?ci(a,c,d):c===t)?c=1:c=xt(c),Ud(Gt(a),c)}function TD(){var a=arguments,c=Gt(a[0]);return a.length<3?c:c.replace(a[1],a[2])}var AD=wo(function(a,c,d){return a+(d?"_":"")+c.toLowerCase()});function wD(a,c,d){return d&&typeof d!="number"&&ci(a,c,d)&&(c=d=t),d=d===t?ce:d>>>0,d?(a=Gt(a),a&&(typeof c=="string"||c!=null&&!rp(c))&&(c=Bi(c),!c&&xo(a))?Gs(Mr(a),0,d):a.split(c,d)):[]}var CD=wo(function(a,c,d){return a+(d?" ":"")+op(c)});function RD(a,c,d){return a=Gt(a),d=d==null?0:Ea(xt(d),0,a.length),c=Bi(c),a.slice(d,d+c.length)==c}function PD(a,c,d){var S=L.templateSettings;d&&ci(a,c,d)&&(c=t),a=Gt(a),c=Ku({},c,S,O0);var b=Ku({},c.imports,S.imports,O0),D=Nn(b),B=vd(b,D),H,X,fe=0,he=c.interpolate||Fe,ge="__p += '",Le=yd((c.escape||Fe).source+"|"+he.source+"|"+(he===It?zt:Fe).source+"|"+(c.evaluate||Fe).source+"|$","g"),Ke="//# sourceURL="+(Vt.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++zA+"]")+`
`;a.replace(Le,function(ut,Rt,Ot,ki,ui,Hi){return Ot||(Ot=ki),ge+=a.slice(fe,Hi).replace(it,sw),Rt&&(H=!0,ge+=`' +
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
}`;var Et=Ax(function(){return kt(D,Ke+"return "+ge).apply(t,B)});if(Et.source=ge,ip(Et))throw Et;return Et}function LD(a){return Gt(a).toLowerCase()}function DD(a){return Gt(a).toUpperCase()}function ID(a,c,d){if(a=Gt(a),a&&(d||c===t))return Uv(a);if(!a||!(c=Bi(c)))return a;var S=Mr(a),b=Mr(c),D=Nv(S,b),B=Fv(S,b)+1;return Gs(S,D,B).join("")}function OD(a,c,d){if(a=Gt(a),a&&(d||c===t))return a.slice(0,zv(a)+1);if(!a||!(c=Bi(c)))return a;var S=Mr(a),b=Fv(S,Mr(c))+1;return Gs(S,0,b).join("")}function UD(a,c,d){if(a=Gt(a),a&&(d||c===t))return a.replace(Qe,"");if(!a||!(c=Bi(c)))return a;var S=Mr(a),b=Nv(S,Mr(c));return Gs(S,b).join("")}function ND(a,c){var d=M,S=U;if(un(c)){var b="separator"in c?c.separator:b;d="length"in c?xt(c.length):d,S="omission"in c?Bi(c.omission):S}a=Gt(a);var D=a.length;if(xo(a)){var B=Mr(a);D=B.length}if(d>=D)return a;var H=d-yo(S);if(H<1)return S;var X=B?Gs(B,0,H).join(""):a.slice(0,H);if(b===t)return X+S;if(B&&(H+=X.length-H),rp(b)){if(a.slice(H).search(b)){var fe,he=X;for(b.global||(b=yd(b.source,Gt(Zn.exec(b))+"g")),b.lastIndex=0;fe=b.exec(he);)var ge=fe.index;X=X.slice(0,ge===t?H:ge)}}else if(a.indexOf(Bi(b),H)!=H){var Le=X.lastIndexOf(b);Le>-1&&(X=X.slice(0,Le))}return X+S}function FD(a){return a=Gt(a),a&&xe.test(a)?a.replace(F,hw):a}var BD=wo(function(a,c,d){return a+(d?" ":"")+c.toUpperCase()}),op=w0("toUpperCase");function Tx(a,c,d){return a=Gt(a),c=d?t:c,c===t?ow(a)?mw(a):JA(a):a.match(c)||[]}var Ax=bt(function(a,c){try{return Ni(a,t,c)}catch(d){return ip(d)?d:new pt(d)}}),zD=us(function(a,c){return ir(c,function(d){d=Hr(d),ls(a,d,tp(a[d],a))}),a});function kD(a){var c=a==null?0:a.length,d=lt();return a=c?ln(a,function(S){if(typeof S[1]!="function")throw new rr(o);return[d(S[0]),S[1]]}):[],bt(function(S){for(var b=-1;++b<c;){var D=a[b];if(Ni(D[0],this,S))return Ni(D[1],this,S)}})}function HD(a){return hC(ar(a,p))}function lp(a){return function(){return a}}function GD(a,c){return a==null||a!==a?c:a}var WD=R0(),VD=R0(!0);function Ti(a){return a}function cp(a){return s0(typeof a=="function"?a:ar(a,p))}function $D(a){return o0(ar(a,p))}function XD(a,c){return l0(a,ar(c,p))}var qD=bt(function(a,c){return function(d){return Zl(d,a,c)}}),YD=bt(function(a,c){return function(d){return Zl(a,d,c)}});function up(a,c,d){var S=Nn(c),b=Lu(c,S);d==null&&!(un(c)&&(b.length||!S.length))&&(d=c,c=a,a=this,b=Lu(c,Nn(c)));var D=!(un(d)&&"chain"in d)||!!d.chain,B=hs(a);return ir(b,function(H){var X=c[H];a[H]=X,B&&(a.prototype[H]=function(){var fe=this.__chain__;if(D||fe){var he=a(this.__wrapped__),ge=he.__actions__=Ei(this.__actions__);return ge.push({func:X,args:arguments,thisArg:a}),he.__chain__=fe,he}return X.apply(a,Ns([this.value()],arguments))})}),a}function jD(){return Vn._===this&&(Vn._=Sw),this}function fp(){}function KD(a){return a=xt(a),bt(function(c){return c0(c,a)})}var ZD=Gd(ln),JD=Gd(Pv),QD=Gd(dd);function wx(a){return jd(a)?pd(Hr(a)):RC(a)}function eI(a){return function(c){return a==null?t:Ma(a,c)}}var tI=L0(),nI=L0(!0);function hp(){return[]}function dp(){return!1}function iI(){return{}}function rI(){return""}function sI(){return!0}function aI(a,c){if(a=xt(a),a<1||a>ie)return[];var d=ce,S=Jn(a,ce);c=lt(c),a-=ce;for(var b=_d(S,c);++d<a;)c(d);return b}function oI(a){return mt(a)?ln(a,Hr):zi(a)?[a]:Ei(q0(Gt(a)))}function lI(a){var c=++xw;return Gt(a)+c}var cI=Fu(function(a,c){return a+c},0),uI=Wd("ceil"),fI=Fu(function(a,c){return a/c},1),hI=Wd("floor");function dI(a){return a&&a.length?Pu(a,Ti,Cd):t}function pI(a,c){return a&&a.length?Pu(a,lt(c,2),Cd):t}function mI(a){return Iv(a,Ti)}function gI(a,c){return Iv(a,lt(c,2))}function _I(a){return a&&a.length?Pu(a,Ti,Dd):t}function vI(a,c){return a&&a.length?Pu(a,lt(c,2),Dd):t}var xI=Fu(function(a,c){return a*c},1),yI=Wd("round"),SI=Fu(function(a,c){return a-c},0);function EI(a){return a&&a.length?gd(a,Ti):0}function MI(a,c){return a&&a.length?gd(a,lt(c,2)):0}return L.after=$P,L.ary=rx,L.assign=DL,L.assignIn=vx,L.assignInWith=Ku,L.assignWith=IL,L.at=OL,L.before=sx,L.bind=tp,L.bindAll=zD,L.bindKey=ax,L.castArray=iL,L.chain=tx,L.chunk=hR,L.compact=dR,L.concat=pR,L.cond=kD,L.conforms=HD,L.constant=lp,L.countBy=EP,L.create=UL,L.curry=ox,L.curryRight=lx,L.debounce=cx,L.defaults=NL,L.defaultsDeep=FL,L.defer=XP,L.delay=qP,L.difference=mR,L.differenceBy=gR,L.differenceWith=_R,L.drop=vR,L.dropRight=xR,L.dropRightWhile=yR,L.dropWhile=SR,L.fill=ER,L.filter=bP,L.flatMap=wP,L.flatMapDeep=CP,L.flatMapDepth=RP,L.flatten=Z0,L.flattenDeep=MR,L.flattenDepth=bR,L.flip=YP,L.flow=WD,L.flowRight=VD,L.fromPairs=TR,L.functions=VL,L.functionsIn=$L,L.groupBy=PP,L.initial=wR,L.intersection=CR,L.intersectionBy=RR,L.intersectionWith=PR,L.invert=qL,L.invertBy=YL,L.invokeMap=DP,L.iteratee=cp,L.keyBy=IP,L.keys=Nn,L.keysIn=bi,L.map=Vu,L.mapKeys=KL,L.mapValues=ZL,L.matches=$D,L.matchesProperty=XD,L.memoize=Xu,L.merge=JL,L.mergeWith=xx,L.method=qD,L.methodOf=YD,L.mixin=up,L.negate=qu,L.nthArg=KD,L.omit=QL,L.omitBy=eD,L.once=jP,L.orderBy=OP,L.over=ZD,L.overArgs=KP,L.overEvery=JD,L.overSome=QD,L.partial=np,L.partialRight=ux,L.partition=UP,L.pick=tD,L.pickBy=yx,L.property=wx,L.propertyOf=eI,L.pull=OR,L.pullAll=Q0,L.pullAllBy=UR,L.pullAllWith=NR,L.pullAt=FR,L.range=tI,L.rangeRight=nI,L.rearg=ZP,L.reject=BP,L.remove=BR,L.rest=JP,L.reverse=Qd,L.sampleSize=kP,L.set=iD,L.setWith=rD,L.shuffle=HP,L.slice=zR,L.sortBy=VP,L.sortedUniq=XR,L.sortedUniqBy=qR,L.split=wD,L.spread=QP,L.tail=YR,L.take=jR,L.takeRight=KR,L.takeRightWhile=ZR,L.takeWhile=JR,L.tap=dP,L.throttle=eL,L.thru=Wu,L.toArray=mx,L.toPairs=Sx,L.toPairsIn=Ex,L.toPath=oI,L.toPlainObject=_x,L.transform=sD,L.unary=tL,L.union=QR,L.unionBy=eP,L.unionWith=tP,L.uniq=nP,L.uniqBy=iP,L.uniqWith=rP,L.unset=aD,L.unzip=ep,L.unzipWith=ex,L.update=oD,L.updateWith=lD,L.values=Po,L.valuesIn=cD,L.without=sP,L.words=Tx,L.wrap=nL,L.xor=aP,L.xorBy=oP,L.xorWith=lP,L.zip=cP,L.zipObject=uP,L.zipObjectDeep=fP,L.zipWith=hP,L.entries=Sx,L.entriesIn=Ex,L.extend=vx,L.extendWith=Ku,up(L,L),L.add=cI,L.attempt=Ax,L.camelCase=dD,L.capitalize=Mx,L.ceil=uI,L.clamp=uD,L.clone=rL,L.cloneDeep=aL,L.cloneDeepWith=oL,L.cloneWith=sL,L.conformsTo=lL,L.deburr=bx,L.defaultTo=GD,L.divide=fI,L.endsWith=pD,L.eq=Tr,L.escape=mD,L.escapeRegExp=gD,L.every=MP,L.find=TP,L.findIndex=j0,L.findKey=BL,L.findLast=AP,L.findLastIndex=K0,L.findLastKey=zL,L.floor=hI,L.forEach=nx,L.forEachRight=ix,L.forIn=kL,L.forInRight=HL,L.forOwn=GL,L.forOwnRight=WL,L.get=sp,L.gt=cL,L.gte=uL,L.has=XL,L.hasIn=ap,L.head=J0,L.identity=Ti,L.includes=LP,L.indexOf=AR,L.inRange=fD,L.invoke=jL,L.isArguments=Aa,L.isArray=mt,L.isArrayBuffer=fL,L.isArrayLike=Mi,L.isArrayLikeObject=Sn,L.isBoolean=hL,L.isBuffer=Ws,L.isDate=dL,L.isElement=pL,L.isEmpty=mL,L.isEqual=gL,L.isEqualWith=_L,L.isError=ip,L.isFinite=vL,L.isFunction=hs,L.isInteger=fx,L.isLength=Yu,L.isMap=hx,L.isMatch=xL,L.isMatchWith=yL,L.isNaN=SL,L.isNative=EL,L.isNil=bL,L.isNull=ML,L.isNumber=dx,L.isObject=un,L.isObjectLike=gn,L.isPlainObject=ic,L.isRegExp=rp,L.isSafeInteger=TL,L.isSet=px,L.isString=ju,L.isSymbol=zi,L.isTypedArray=Ro,L.isUndefined=AL,L.isWeakMap=wL,L.isWeakSet=CL,L.join=LR,L.kebabCase=_D,L.last=lr,L.lastIndexOf=DR,L.lowerCase=vD,L.lowerFirst=xD,L.lt=RL,L.lte=PL,L.max=dI,L.maxBy=pI,L.mean=mI,L.meanBy=gI,L.min=_I,L.minBy=vI,L.stubArray=hp,L.stubFalse=dp,L.stubObject=iI,L.stubString=rI,L.stubTrue=sI,L.multiply=xI,L.nth=IR,L.noConflict=jD,L.noop=fp,L.now=$u,L.pad=yD,L.padEnd=SD,L.padStart=ED,L.parseInt=MD,L.random=hD,L.reduce=NP,L.reduceRight=FP,L.repeat=bD,L.replace=TD,L.result=nD,L.round=yI,L.runInContext=W,L.sample=zP,L.size=GP,L.snakeCase=AD,L.some=WP,L.sortedIndex=kR,L.sortedIndexBy=HR,L.sortedIndexOf=GR,L.sortedLastIndex=WR,L.sortedLastIndexBy=VR,L.sortedLastIndexOf=$R,L.startCase=CD,L.startsWith=RD,L.subtract=SI,L.sum=EI,L.sumBy=MI,L.template=PD,L.times=aI,L.toFinite=ds,L.toInteger=xt,L.toLength=gx,L.toLower=LD,L.toNumber=cr,L.toSafeInteger=LL,L.toString=Gt,L.toUpper=DD,L.trim=ID,L.trimEnd=OD,L.trimStart=UD,L.truncate=ND,L.unescape=FD,L.uniqueId=lI,L.upperCase=BD,L.upperFirst=op,L.each=nx,L.eachRight=ix,L.first=J0,up(L,function(){var a={};return zr(L,function(c,d){Vt.call(L.prototype,d)||(a[d]=c)}),a}(),{chain:!1}),L.VERSION=n,ir(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){L[a].placeholder=L}),ir(["drop","take"],function(a,c){Lt.prototype[a]=function(d){d=d===t?1:Ln(xt(d),0);var S=this.__filtered__&&!c?new Lt(this):this.clone();return S.__filtered__?S.__takeCount__=Jn(d,S.__takeCount__):S.__views__.push({size:Jn(d,ce),type:a+(S.__dir__<0?"Right":"")}),S},Lt.prototype[a+"Right"]=function(d){return this.reverse()[a](d).reverse()}}),ir(["filter","map","takeWhile"],function(a,c){var d=c+1,S=d==k||d==j;Lt.prototype[a]=function(b){var D=this.clone();return D.__iteratees__.push({iteratee:lt(b,3),type:d}),D.__filtered__=D.__filtered__||S,D}}),ir(["head","last"],function(a,c){var d="take"+(c?"Right":"");Lt.prototype[a]=function(){return this[d](1).value()[0]}}),ir(["initial","tail"],function(a,c){var d="drop"+(c?"":"Right");Lt.prototype[a]=function(){return this.__filtered__?new Lt(this):this[d](1)}}),Lt.prototype.compact=function(){return this.filter(Ti)},Lt.prototype.find=function(a){return this.filter(a).head()},Lt.prototype.findLast=function(a){return this.reverse().find(a)},Lt.prototype.invokeMap=bt(function(a,c){return typeof a=="function"?new Lt(this):this.map(function(d){return Zl(d,a,c)})}),Lt.prototype.reject=function(a){return this.filter(qu(lt(a)))},Lt.prototype.slice=function(a,c){a=xt(a);var d=this;return d.__filtered__&&(a>0||c<0)?new Lt(d):(a<0?d=d.takeRight(-a):a&&(d=d.drop(a)),c!==t&&(c=xt(c),d=c<0?d.dropRight(-c):d.take(c-a)),d)},Lt.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},Lt.prototype.toArray=function(){return this.take(ce)},zr(Lt.prototype,function(a,c){var d=/^(?:filter|find|map|reject)|While$/.test(c),S=/^(?:head|last)$/.test(c),b=L[S?"take"+(c=="last"?"Right":""):c],D=S||/^find/.test(c);b&&(L.prototype[c]=function(){var B=this.__wrapped__,H=S?[1]:arguments,X=B instanceof Lt,fe=H[0],he=X||mt(B),ge=function(Rt){var Ot=b.apply(L,Ns([Rt],H));return S&&Le?Ot[0]:Ot};he&&d&&typeof fe=="function"&&fe.length!=1&&(X=he=!1);var Le=this.__chain__,Ke=!!this.__actions__.length,ct=D&&!Le,Et=X&&!Ke;if(!D&&he){B=Et?B:new Lt(this);var ut=a.apply(B,H);return ut.__actions__.push({func:Wu,args:[ge],thisArg:t}),new sr(ut,Le)}return ct&&Et?a.apply(this,H):(ut=this.thru(ge),ct?S?ut.value()[0]:ut.value():ut)})}),ir(["pop","push","shift","sort","splice","unshift"],function(a){var c=mu[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",S=/^(?:pop|shift)$/.test(a);L.prototype[a]=function(){var b=arguments;if(S&&!this.__chain__){var D=this.value();return c.apply(mt(D)?D:[],b)}return this[d](function(B){return c.apply(mt(B)?B:[],b)})}}),zr(Lt.prototype,function(a,c){var d=L[c];if(d){var S=d.name+"";Vt.call(bo,S)||(bo[S]=[]),bo[S].push({name:c,func:d})}}),bo[Nu(t,v).name]=[{name:"wrapper",func:t}],Lt.prototype.clone=Fw,Lt.prototype.reverse=Bw,Lt.prototype.value=zw,L.prototype.at=pP,L.prototype.chain=mP,L.prototype.commit=gP,L.prototype.next=_P,L.prototype.plant=xP,L.prototype.reverse=yP,L.prototype.toJSON=L.prototype.valueOf=L.prototype.value=SP,L.prototype.first=L.prototype.head,Vl&&(L.prototype[Vl]=vP),L},So=gw();va?((va.exports=So)._=So,cd._=So):Vn._=So}).call(on)})(Ih,Ih.exports);Ih.exports;function Tl(i){const e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return e>=i&&e>t}function Ur(i,e,t){const n=document.createElement(i);for(const r in e)n.setAttribute(r,e[r]);return n.classList.add(...t),n}function ed(i,e,t){const n=Ur(e,{},t);return i.appendChild(n),n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ev="161",NG=0,ZS=1,FG=2,S1=1,BG=2,ys=3,pa=0,Ii=1,bs=2,la=0,ml=1,JS=2,QS=3,eE=4,zG=5,za=100,kG=101,HG=102,tE=103,nE=104,GG=200,WG=201,VG=202,$G=203,Ug=204,Ng=205,XG=206,qG=207,YG=208,jG=209,KG=210,ZG=211,JG=212,QG=213,eW=214,tW=0,nW=1,iW=2,Oh=3,rW=4,sW=5,aW=6,oW=7,E1=0,lW=1,cW=2,ca=0,uW=1,fW=2,hW=3,dW=4,pW=5,mW=6,M1=300,Al=301,wl=302,Fg=303,Bg=304,td=306,zg=1e3,Ir=1001,kg=1002,_i=1003,iE=1004,mc=1005,Cn=1006,ym=1007,Wa=1008,ua=1009,gW=1010,_W=1011,tv=1012,b1=1013,ra=1014,Ts=1015,Kc=1016,T1=1017,A1=1018,Ja=1020,vW=1021,Or=1023,xW=1024,yW=1025,Qa=1026,Cl=1027,SW=1028,w1=1029,EW=1030,C1=1031,R1=1033,Sm=33776,Em=33777,Mm=33778,bm=33779,rE=35840,sE=35841,aE=35842,oE=35843,P1=36196,lE=37492,cE=37496,uE=37808,fE=37809,hE=37810,dE=37811,pE=37812,mE=37813,gE=37814,_E=37815,vE=37816,xE=37817,yE=37818,SE=37819,EE=37820,ME=37821,Tm=36492,bE=36494,TE=36495,MW=36283,AE=36284,wE=36285,CE=36286,L1=3e3,eo=3001,bW=3200,TW=3201,AW=0,wW=1,gr="",Xn="srgb",Ds="srgb-linear",nv="display-p3",nd="display-p3-linear",Uh="linear",sn="srgb",Nh="rec709",Fh="p3",No=7680,RE=519,CW=512,RW=513,PW=514,D1=515,LW=516,DW=517,IW=518,OW=519,PE=35044,LE="300 es",Hg=1035,ws=2e3,Bh=2001;class Bl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const ei=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Am=Math.PI/180,Gg=180/Math.PI;function au(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ei[i&255]+ei[i>>8&255]+ei[i>>16&255]+ei[i>>24&255]+"-"+ei[e&255]+ei[e>>8&255]+"-"+ei[e>>16&15|64]+ei[e>>24&255]+"-"+ei[t&63|128]+ei[t>>8&255]+"-"+ei[t>>16&255]+ei[t>>24&255]+ei[n&255]+ei[n>>8&255]+ei[n>>16&255]+ei[n>>24&255]).toLowerCase()}function Ci(i,e,t){return Math.max(e,Math.min(t,i))}function UW(i,e){return(i%e+e)%e}function wm(i,e,t){return(1-t)*i+t*e}function DE(i){return(i&i-1)===0&&i!==0}function Wg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function gc(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,t=0){Bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(e,t,n,r,s,o,l,u,f){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,u,f)}set(e,t,n,r,s,o,l,u,f){const h=this.elements;return h[0]=e,h[1]=r,h[2]=l,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=o,h[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[3],u=n[6],f=n[1],h=n[4],p=n[7],m=n[2],g=n[5],y=n[8],x=r[0],_=r[3],v=r[6],A=r[1],T=r[4],E=r[7],C=r[2],R=r[5],w=r[8];return s[0]=o*x+l*A+u*C,s[3]=o*_+l*T+u*R,s[6]=o*v+l*E+u*w,s[1]=f*x+h*A+p*C,s[4]=f*_+h*T+p*R,s[7]=f*v+h*E+p*w,s[2]=m*x+g*A+y*C,s[5]=m*_+g*T+y*R,s[8]=m*v+g*E+y*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8];return t*o*h-t*l*f-n*s*h+n*l*u+r*s*f-r*o*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=h*o-l*f,m=l*u-h*s,g=f*s-o*u,y=t*p+n*m+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=p*x,e[1]=(r*f-h*n)*x,e[2]=(l*n-r*o)*x,e[3]=m*x,e[4]=(h*t-r*u)*x,e[5]=(r*s-l*t)*x,e[6]=g*x,e[7]=(n*u-f*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,l){const u=Math.cos(s),f=Math.sin(s);return this.set(n*u,n*f,-n*(u*o+f*l)+o+e,-r*f,r*u,-r*(-f*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(Cm.makeScale(e,t)),this}rotate(e){return this.premultiply(Cm.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cm=new wt;function I1(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function NW(){const i=Zc("canvas");return i.style.display="block",i}const IE={};function gl(i){i in IE||(IE[i]=!0,console.warn(i))}const OE=new wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),UE=new wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rf={[Ds]:{transfer:Uh,primaries:Nh,toReference:i=>i,fromReference:i=>i},[Xn]:{transfer:sn,primaries:Nh,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[nd]:{transfer:Uh,primaries:Fh,toReference:i=>i.applyMatrix3(UE),fromReference:i=>i.applyMatrix3(OE)},[nv]:{transfer:sn,primaries:Fh,toReference:i=>i.convertSRGBToLinear().applyMatrix3(UE),fromReference:i=>i.applyMatrix3(OE).convertLinearToSRGB()}},FW=new Set([Ds,nd]),qt={enabled:!0,_workingColorSpace:Ds,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!FW.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Rf[e].toReference,r=Rf[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Rf[i].primaries},getTransfer:function(i){return i===gr?Uh:Rf[i].transfer}};function _l(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Rm(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fo;class O1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fo===void 0&&(Fo=Zc("canvas")),Fo.width=e.width,Fo.height=e.height;const n=Fo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Fo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_l(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_l(t[n]/255)*255):t[n]=_l(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let BW=0;class U1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:BW++}),this.uuid=au(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,l=r.length;o<l;o++)r[o].isDataTexture?s.push(Pm(r[o].image)):s.push(Pm(r[o]))}else s=Pm(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Pm(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?O1.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zW=0;class oi extends Bl{constructor(e=oi.DEFAULT_IMAGE,t=oi.DEFAULT_MAPPING,n=Ir,r=Ir,s=Cn,o=Wa,l=Or,u=ua,f=oi.DEFAULT_ANISOTROPY,h=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zW++}),this.uuid=au(),this.name="",this.source=new U1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=f,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===eo?Xn:gr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==M1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zg:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case kg:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zg:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case kg:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xn?eo:L1}set encoding(e){gl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===eo?Xn:gr}}oi.DEFAULT_IMAGE=null;oi.DEFAULT_MAPPING=M1;oi.DEFAULT_ANISOTROPY=1;class Hn{constructor(e=0,t=0,n=0,r=1){Hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,f=u[0],h=u[4],p=u[8],m=u[1],g=u[5],y=u[9],x=u[2],_=u[6],v=u[10];if(Math.abs(h-m)<.01&&Math.abs(p-x)<.01&&Math.abs(y-_)<.01){if(Math.abs(h+m)<.1&&Math.abs(p+x)<.1&&Math.abs(y+_)<.1&&Math.abs(f+g+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,E=(g+1)/2,C=(v+1)/2,R=(h+m)/4,w=(p+x)/4,z=(y+_)/4;return T>E&&T>C?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=R/n,s=w/n):E>C?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=R/r,s=z/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=w/s,r=z/s),this.set(n,r,s,t),this}let A=Math.sqrt((_-y)*(_-y)+(p-x)*(p-x)+(m-h)*(m-h));return Math.abs(A)<.001&&(A=1),this.x=(_-y)/A,this.y=(p-x)/A,this.z=(m-h)/A,this.w=Math.acos((f+g+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kW extends Bl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(gl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===eo?Xn:gr),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new oi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new U1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class co extends kW{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class N1 extends oi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class HW extends oi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ou{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,l){let u=n[r+0],f=n[r+1],h=n[r+2],p=n[r+3];const m=s[o+0],g=s[o+1],y=s[o+2],x=s[o+3];if(l===0){e[t+0]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p;return}if(l===1){e[t+0]=m,e[t+1]=g,e[t+2]=y,e[t+3]=x;return}if(p!==x||u!==m||f!==g||h!==y){let _=1-l;const v=u*m+f*g+h*y+p*x,A=v>=0?1:-1,T=1-v*v;if(T>Number.EPSILON){const C=Math.sqrt(T),R=Math.atan2(C,v*A);_=Math.sin(_*R)/C,l=Math.sin(l*R)/C}const E=l*A;if(u=u*_+m*E,f=f*_+g*E,h=h*_+y*E,p=p*_+x*E,_===1-l){const C=1/Math.sqrt(u*u+f*f+h*h+p*p);u*=C,f*=C,h*=C,p*=C}}e[t]=u,e[t+1]=f,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){const l=n[r],u=n[r+1],f=n[r+2],h=n[r+3],p=s[o],m=s[o+1],g=s[o+2],y=s[o+3];return e[t]=l*y+h*p+u*g-f*m,e[t+1]=u*y+h*m+f*p-l*g,e[t+2]=f*y+h*g+l*m-u*p,e[t+3]=h*y-l*p-u*m-f*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,f=l(n/2),h=l(r/2),p=l(s/2),m=u(n/2),g=u(r/2),y=u(s/2);switch(o){case"XYZ":this._x=m*h*p+f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p-m*g*y;break;case"YXZ":this._x=m*h*p+f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p+m*g*y;break;case"ZXY":this._x=m*h*p-f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p-m*g*y;break;case"ZYX":this._x=m*h*p-f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p+m*g*y;break;case"YZX":this._x=m*h*p+f*g*y,this._y=f*g*p+m*h*y,this._z=f*h*y-m*g*p,this._w=f*h*p-m*g*y;break;case"XZY":this._x=m*h*p-f*g*y,this._y=f*g*p-m*h*y,this._z=f*h*y+m*g*p,this._w=f*h*p+m*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],l=t[5],u=t[9],f=t[2],h=t[6],p=t[10],m=n+l+p;if(m>0){const g=.5/Math.sqrt(m+1);this._w=.25/g,this._x=(h-u)*g,this._y=(s-f)*g,this._z=(o-r)*g}else if(n>l&&n>p){const g=2*Math.sqrt(1+n-l-p);this._w=(h-u)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+f)/g}else if(l>p){const g=2*Math.sqrt(1+l-n-p);this._w=(s-f)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(u+h)/g}else{const g=2*Math.sqrt(1+p-n-l);this._w=(o-r)/g,this._x=(s+f)/g,this._y=(u+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ci(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,l=t._x,u=t._y,f=t._z,h=t._w;return this._x=n*h+o*l+r*f-s*u,this._y=r*h+o*u+s*l-n*f,this._z=s*h+o*f+n*u-r*l,this._w=o*h-n*l-r*u-s*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let l=o*e._w+n*e._x+r*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const g=1-t;return this._w=g*o+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this}const f=Math.sqrt(u),h=Math.atan2(f,l),p=Math.sin((1-t)*h)/f,m=Math.sin(t*h)/f;return this._w=o*p+this._w*m,this._x=n*p+this._x*m,this._y=r*p+this._y*m,this._z=s*p+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(NE.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(NE.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,l=e.z,u=e.w,f=2*(o*r-l*n),h=2*(l*t-s*r),p=2*(s*n-o*t);return this.x=t+u*f+o*p-l*h,this.y=n+u*h+l*f-s*p,this.z=r+u*p+s*h-o*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=r*u-s*l,this.y=s*o-n*u,this.z=n*l-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lm.copy(this).projectOnVector(e),this.sub(Lm)}reflect(e){return this.sub(Lm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ci(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lm=new se,NE=new ou;class lu{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,l=s.count;o<l;o++)e.isMesh===!0?e.getVertexPosition(o,wr):wr.fromBufferAttribute(s,o),wr.applyMatrix4(e.matrixWorld),this.expandByPoint(wr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pf.copy(n.boundingBox)),Pf.applyMatrix4(e.matrixWorld),this.union(Pf)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_c),Lf.subVectors(this.max,_c),Bo.subVectors(e.a,_c),zo.subVectors(e.b,_c),ko.subVectors(e.c,_c),$s.subVectors(zo,Bo),Xs.subVectors(ko,zo),Ra.subVectors(Bo,ko);let t=[0,-$s.z,$s.y,0,-Xs.z,Xs.y,0,-Ra.z,Ra.y,$s.z,0,-$s.x,Xs.z,0,-Xs.x,Ra.z,0,-Ra.x,-$s.y,$s.x,0,-Xs.y,Xs.x,0,-Ra.y,Ra.x,0];return!Dm(t,Bo,zo,ko,Lf)||(t=[1,0,0,0,1,0,0,0,1],!Dm(t,Bo,zo,ko,Lf))?!1:(Df.crossVectors($s,Xs),t=[Df.x,Df.y,Df.z],Dm(t,Bo,zo,ko,Lf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ms=[new se,new se,new se,new se,new se,new se,new se,new se],wr=new se,Pf=new lu,Bo=new se,zo=new se,ko=new se,$s=new se,Xs=new se,Ra=new se,_c=new se,Lf=new se,Df=new se,Pa=new se;function Dm(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Pa.fromArray(i,s);const l=r.x*Math.abs(Pa.x)+r.y*Math.abs(Pa.y)+r.z*Math.abs(Pa.z),u=e.dot(Pa),f=t.dot(Pa),h=n.dot(Pa);if(Math.max(-Math.max(u,f,h),Math.min(u,f,h))>l)return!1}return!0}const GW=new lu,vc=new se,Im=new se;class iv{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):GW.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vc.subVectors(e,this.center);const t=vc.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(vc,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Im.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vc.copy(e.center).add(Im)),this.expandByPoint(vc.copy(e.center).sub(Im))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gs=new se,Om=new se,If=new se,qs=new se,Um=new se,Of=new se,Nm=new se;class F1{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gs.copy(this.origin).addScaledVector(this.direction,t),gs.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Om.copy(e).add(t).multiplyScalar(.5),If.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(Om);const s=e.distanceTo(t)*.5,o=-this.direction.dot(If),l=qs.dot(this.direction),u=-qs.dot(If),f=qs.lengthSq(),h=Math.abs(1-o*o);let p,m,g,y;if(h>0)if(p=o*u-l,m=o*l-u,y=s*h,p>=0)if(m>=-y)if(m<=y){const x=1/h;p*=x,m*=x,g=p*(p+o*m+2*l)+m*(o*p+m+2*u)+f}else m=s,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*u)+f;else m=-s,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*u)+f;else m<=-y?(p=Math.max(0,-(-o*s+l)),m=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+f):m<=y?(p=0,m=Math.min(Math.max(-s,-u),s),g=m*(m+2*u)+f):(p=Math.max(0,-(o*s+l)),m=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+m*(m+2*u)+f);else m=o>0?-s:s,p=Math.max(0,-(o*m+l)),g=-p*p+m*(m+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Om).addScaledVector(If,m),g}intersectSphere(e,t){gs.subVectors(e.center,this.origin);const n=gs.dot(this.direction),r=gs.dot(gs)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),l=n-o,u=n+o;return u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,l,u;const f=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,m=this.origin;return f>=0?(n=(e.min.x-m.x)*f,r=(e.max.x-m.x)*f):(n=(e.max.x-m.x)*f,r=(e.min.x-m.x)*f),h>=0?(s=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(s=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(l=(e.min.z-m.z)*p,u=(e.max.z-m.z)*p):(l=(e.max.z-m.z)*p,u=(e.min.z-m.z)*p),n>u||l>r)||((l>n||n!==n)&&(n=l),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,gs)!==null}intersectTriangle(e,t,n,r,s){Um.subVectors(t,e),Of.subVectors(n,e),Nm.crossVectors(Um,Of);let o=this.direction.dot(Nm),l;if(o>0){if(r)return null;l=1}else if(o<0)l=-1,o=-o;else return null;qs.subVectors(this.origin,e);const u=l*this.direction.dot(Of.crossVectors(qs,Of));if(u<0)return null;const f=l*this.direction.dot(Um.cross(qs));if(f<0||u+f>o)return null;const h=-l*qs.dot(Nm);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Yn{constructor(e,t,n,r,s,o,l,u,f,h,p,m,g,y,x,_){Yn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,l,u,f,h,p,m,g,y,x,_)}set(e,t,n,r,s,o,l,u,f,h,p,m,g,y,x,_){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=s,v[5]=o,v[9]=l,v[13]=u,v[2]=f,v[6]=h,v[10]=p,v[14]=m,v[3]=g,v[7]=y,v[11]=x,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Yn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ho.setFromMatrixColumn(e,0).length(),s=1/Ho.setFromMatrixColumn(e,1).length(),o=1/Ho.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),l=Math.sin(n),u=Math.cos(r),f=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const m=o*h,g=o*p,y=l*h,x=l*p;t[0]=u*h,t[4]=-u*p,t[8]=f,t[1]=g+y*f,t[5]=m-x*f,t[9]=-l*u,t[2]=x-m*f,t[6]=y+g*f,t[10]=o*u}else if(e.order==="YXZ"){const m=u*h,g=u*p,y=f*h,x=f*p;t[0]=m+x*l,t[4]=y*l-g,t[8]=o*f,t[1]=o*p,t[5]=o*h,t[9]=-l,t[2]=g*l-y,t[6]=x+m*l,t[10]=o*u}else if(e.order==="ZXY"){const m=u*h,g=u*p,y=f*h,x=f*p;t[0]=m-x*l,t[4]=-o*p,t[8]=y+g*l,t[1]=g+y*l,t[5]=o*h,t[9]=x-m*l,t[2]=-o*f,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const m=o*h,g=o*p,y=l*h,x=l*p;t[0]=u*h,t[4]=y*f-g,t[8]=m*f+x,t[1]=u*p,t[5]=x*f+m,t[9]=g*f-y,t[2]=-f,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const m=o*u,g=o*f,y=l*u,x=l*f;t[0]=u*h,t[4]=x-m*p,t[8]=y*p+g,t[1]=p,t[5]=o*h,t[9]=-l*h,t[2]=-f*h,t[6]=g*p+y,t[10]=m-x*p}else if(e.order==="XZY"){const m=o*u,g=o*f,y=l*u,x=l*f;t[0]=u*h,t[4]=-p,t[8]=f*h,t[1]=m*p+x,t[5]=o*h,t[9]=g*p-y,t[2]=y*p-g,t[6]=l*h,t[10]=x*p+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(WW,e,VW)}lookAt(e,t,n){const r=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),Ys.crossVectors(n,Gi),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),Ys.crossVectors(n,Gi)),Ys.normalize(),Uf.crossVectors(Gi,Ys),r[0]=Ys.x,r[4]=Uf.x,r[8]=Gi.x,r[1]=Ys.y,r[5]=Uf.y,r[9]=Gi.y,r[2]=Ys.z,r[6]=Uf.z,r[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],l=n[4],u=n[8],f=n[12],h=n[1],p=n[5],m=n[9],g=n[13],y=n[2],x=n[6],_=n[10],v=n[14],A=n[3],T=n[7],E=n[11],C=n[15],R=r[0],w=r[4],z=r[8],G=r[12],M=r[1],U=r[5],V=r[9],oe=r[13],k=r[2],J=r[6],j=r[10],te=r[14],ie=r[3],ae=r[7],N=r[11],ce=r[15];return s[0]=o*R+l*M+u*k+f*ie,s[4]=o*w+l*U+u*J+f*ae,s[8]=o*z+l*V+u*j+f*N,s[12]=o*G+l*oe+u*te+f*ce,s[1]=h*R+p*M+m*k+g*ie,s[5]=h*w+p*U+m*J+g*ae,s[9]=h*z+p*V+m*j+g*N,s[13]=h*G+p*oe+m*te+g*ce,s[2]=y*R+x*M+_*k+v*ie,s[6]=y*w+x*U+_*J+v*ae,s[10]=y*z+x*V+_*j+v*N,s[14]=y*G+x*oe+_*te+v*ce,s[3]=A*R+T*M+E*k+C*ie,s[7]=A*w+T*U+E*J+C*ae,s[11]=A*z+T*V+E*j+C*N,s[15]=A*G+T*oe+E*te+C*ce,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],l=e[5],u=e[9],f=e[13],h=e[2],p=e[6],m=e[10],g=e[14],y=e[3],x=e[7],_=e[11],v=e[15];return y*(+s*u*p-r*f*p-s*l*m+n*f*m+r*l*g-n*u*g)+x*(+t*u*g-t*f*m+s*o*m-r*o*g+r*f*h-s*u*h)+_*(+t*f*p-t*l*g-s*o*p+n*o*g+s*l*h-n*f*h)+v*(-r*l*h-t*u*p+t*l*m+r*o*p-n*o*m+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],l=e[5],u=e[6],f=e[7],h=e[8],p=e[9],m=e[10],g=e[11],y=e[12],x=e[13],_=e[14],v=e[15],A=p*_*f-x*m*f+x*u*g-l*_*g-p*u*v+l*m*v,T=y*m*f-h*_*f-y*u*g+o*_*g+h*u*v-o*m*v,E=h*x*f-y*p*f+y*l*g-o*x*g-h*l*v+o*p*v,C=y*p*u-h*x*u-y*l*m+o*x*m+h*l*_-o*p*_,R=t*A+n*T+r*E+s*C;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return e[0]=A*w,e[1]=(x*m*s-p*_*s-x*r*g+n*_*g+p*r*v-n*m*v)*w,e[2]=(l*_*s-x*u*s+x*r*f-n*_*f-l*r*v+n*u*v)*w,e[3]=(p*u*s-l*m*s-p*r*f+n*m*f+l*r*g-n*u*g)*w,e[4]=T*w,e[5]=(h*_*s-y*m*s+y*r*g-t*_*g-h*r*v+t*m*v)*w,e[6]=(y*u*s-o*_*s-y*r*f+t*_*f+o*r*v-t*u*v)*w,e[7]=(o*m*s-h*u*s+h*r*f-t*m*f-o*r*g+t*u*g)*w,e[8]=E*w,e[9]=(y*p*s-h*x*s-y*n*g+t*x*g+h*n*v-t*p*v)*w,e[10]=(o*x*s-y*l*s+y*n*f-t*x*f-o*n*v+t*l*v)*w,e[11]=(h*l*s-o*p*s-h*n*f+t*p*f+o*n*g-t*l*g)*w,e[12]=C*w,e[13]=(h*x*r-y*p*r+y*n*m-t*x*m-h*n*_+t*p*_)*w,e[14]=(y*l*r-o*x*r-y*n*u+t*x*u+o*n*_-t*l*_)*w,e[15]=(o*p*r-h*l*r+h*n*u-t*p*u-o*n*m+t*l*m)*w,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,l=e.y,u=e.z,f=s*o,h=s*l;return this.set(f*o+n,f*l-r*u,f*u+r*l,0,f*l+r*u,h*l+n,h*u-r*o,0,f*u-r*l,h*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,f=s+s,h=o+o,p=l+l,m=s*f,g=s*h,y=s*p,x=o*h,_=o*p,v=l*p,A=u*f,T=u*h,E=u*p,C=n.x,R=n.y,w=n.z;return r[0]=(1-(x+v))*C,r[1]=(g+E)*C,r[2]=(y-T)*C,r[3]=0,r[4]=(g-E)*R,r[5]=(1-(m+v))*R,r[6]=(_+A)*R,r[7]=0,r[8]=(y+T)*w,r[9]=(_-A)*w,r[10]=(1-(m+x))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ho.set(r[0],r[1],r[2]).length();const o=Ho.set(r[4],r[5],r[6]).length(),l=Ho.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Cr.copy(this);const f=1/s,h=1/o,p=1/l;return Cr.elements[0]*=f,Cr.elements[1]*=f,Cr.elements[2]*=f,Cr.elements[4]*=h,Cr.elements[5]*=h,Cr.elements[6]*=h,Cr.elements[8]*=p,Cr.elements[9]*=p,Cr.elements[10]*=p,t.setFromRotationMatrix(Cr),n.x=s,n.y=o,n.z=l,this}makePerspective(e,t,n,r,s,o,l=ws){const u=this.elements,f=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),m=(n+r)/(n-r);let g,y;if(l===ws)g=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(l===Bh)g=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=h,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=g,u[14]=y,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,s,o,l=ws){const u=this.elements,f=1/(t-e),h=1/(n-r),p=1/(o-s),m=(t+e)*f,g=(n+r)*h;let y,x;if(l===ws)y=(o+s)*p,x=-2*p;else if(l===Bh)y=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-m,u[1]=0,u[5]=2*h,u[9]=0,u[13]=-g,u[2]=0,u[6]=0,u[10]=x,u[14]=-y,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ho=new se,Cr=new Yn,WW=new se(0,0,0),VW=new se(1,1,1),Ys=new se,Uf=new se,Gi=new se,FE=new Yn,BE=new ou;class id{constructor(e=0,t=0,n=0,r=id.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],l=r[8],u=r[1],f=r[5],h=r[9],p=r[2],m=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Ci(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ci(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ci(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-o,f)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ci(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,f));break;case"YZX":this._z=Math.asin(Ci(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,f),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ci(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,f),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return FE.makeRotationFromQuaternion(e),this.setFromRotationMatrix(FE,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return BE.setFromEuler(this),this.setFromQuaternion(BE,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}id.DEFAULT_ORDER="XYZ";class rv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $W=0;const zE=new se,Go=new ou,_s=new Yn,Nf=new se,xc=new se,XW=new se,qW=new ou,kE=new se(1,0,0),HE=new se(0,1,0),GE=new se(0,0,1),YW={type:"added"},jW={type:"removed"};class Zi extends Bl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$W++}),this.uuid=au(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zi.DEFAULT_UP.clone();const e=new se,t=new id,n=new ou,r=new se(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Yn},normalMatrix:{value:new wt}}),this.matrix=new Yn,this.matrixWorld=new Yn,this.matrixAutoUpdate=Zi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.multiply(Go),this}rotateOnWorldAxis(e,t){return Go.setFromAxisAngle(e,t),this.quaternion.premultiply(Go),this}rotateX(e){return this.rotateOnAxis(kE,e)}rotateY(e){return this.rotateOnAxis(HE,e)}rotateZ(e){return this.rotateOnAxis(GE,e)}translateOnAxis(e,t){return zE.copy(e).applyQuaternion(this.quaternion),this.position.add(zE.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kE,e)}translateY(e){return this.translateOnAxis(HE,e)}translateZ(e){return this.translateOnAxis(GE,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Nf.copy(e):Nf.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),xc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(xc,Nf,this.up):_s.lookAt(Nf,xc,this.up),this.quaternion.setFromRotationMatrix(_s),r&&(_s.extractRotation(r.matrixWorld),Go.setFromRotationMatrix(_s),this.quaternion.premultiply(Go.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(YW)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(jW)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xc,e,XW),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xc,qW,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const l=r[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let f=0,h=u.length;f<h;f++){const p=u[f];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,f=this.material.length;u<f;u++)l.push(s(e.materials,this.material[u]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];r.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),f=o(e.textures),h=o(e.images),p=o(e.shapes),m=o(e.skeletons),g=o(e.animations),y=o(e.nodes);l.length>0&&(n.geometries=l),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),m.length>0&&(n.skeletons=m),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=r,n;function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Zi.DEFAULT_UP=new se(0,1,0);Zi.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Rr=new se,vs=new se,Fm=new se,xs=new se,Wo=new se,Vo=new se,WE=new se,Bm=new se,zm=new se,km=new se;class jr{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Rr.subVectors(e,t),r.cross(Rr);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Rr.subVectors(r,t),vs.subVectors(n,t),Fm.subVectors(e,t);const o=Rr.dot(Rr),l=Rr.dot(vs),u=Rr.dot(Fm),f=vs.dot(vs),h=vs.dot(Fm),p=o*f-l*l;if(p===0)return s.set(0,0,0),null;const m=1/p,g=(f*u-l*h)*m,y=(o*h-l*u)*m;return s.set(1-g-y,y,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,n,r,s,o,l,u){return this.getBarycoord(e,t,n,r,xs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,xs.x),u.addScaledVector(o,xs.y),u.addScaledVector(l,xs.z),u)}static isFrontFacing(e,t,n,r){return Rr.subVectors(n,t),vs.subVectors(e,t),Rr.cross(vs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Rr.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),Rr.cross(vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return jr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return jr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return jr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,l;Wo.subVectors(r,n),Vo.subVectors(s,n),Bm.subVectors(e,n);const u=Wo.dot(Bm),f=Vo.dot(Bm);if(u<=0&&f<=0)return t.copy(n);zm.subVectors(e,r);const h=Wo.dot(zm),p=Vo.dot(zm);if(h>=0&&p<=h)return t.copy(r);const m=u*p-h*f;if(m<=0&&u>=0&&h<=0)return o=u/(u-h),t.copy(n).addScaledVector(Wo,o);km.subVectors(e,s);const g=Wo.dot(km),y=Vo.dot(km);if(y>=0&&g<=y)return t.copy(s);const x=g*f-u*y;if(x<=0&&f>=0&&y<=0)return l=f/(f-y),t.copy(n).addScaledVector(Vo,l);const _=h*y-g*p;if(_<=0&&p-h>=0&&g-y>=0)return WE.subVectors(s,r),l=(p-h)/(p-h+(g-y)),t.copy(r).addScaledVector(WE,l);const v=1/(_+x+m);return o=x*v,l=m*v,t.copy(n).addScaledVector(Wo,o).addScaledVector(Vo,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const B1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},js={h:0,s:0,l:0},Ff={h:0,s:0,l:0};function Hm(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=UW(e,1),t=Ci(t,0,1),n=Ci(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hm(o,s,e+1/3),this.g=Hm(o,s,e),this.b=Hm(o,s,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=Xn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],l=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xn){const n=B1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}copyLinearToSRGB(e){return this.r=Rm(e.r),this.g=Rm(e.g),this.b=Rm(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return qt.fromWorkingColorSpace(ti.copy(this),e),Math.round(Ci(ti.r*255,0,255))*65536+Math.round(Ci(ti.g*255,0,255))*256+Math.round(Ci(ti.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(ti.copy(this),t);const n=ti.r,r=ti.g,s=ti.b,o=Math.max(n,r,s),l=Math.min(n,r,s);let u,f;const h=(l+o)/2;if(l===o)u=0,f=0;else{const p=o-l;switch(f=h<=.5?p/(o+l):p/(2-o-l),o){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(ti.copy(this),t),e.r=ti.r,e.g=ti.g,e.b=ti.b,e}getStyle(e=Xn){qt.fromWorkingColorSpace(ti.copy(this),e);const t=ti.r,n=ti.g,r=ti.b;return e!==Xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(js),this.setHSL(js.h+e,js.s+t,js.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(js),e.getHSL(Ff);const n=wm(js.h,Ff.h,t),r=wm(js.s,Ff.s,t),s=wm(js.l,Ff.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ti=new Yt;Yt.NAMES=B1;let KW=0;class rd extends Bl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:KW++}),this.uuid=au(),this.name="",this.type="Material",this.blending=ml,this.side=pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ug,this.blendDst=Ng,this.blendEquation=za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Oh,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=No,this.stencilZFail=No,this.stencilZPass=No,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ml&&(n.blending=this.blending),this.side!==pa&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ug&&(n.blendSrc=this.blendSrc),this.blendDst!==Ng&&(n.blendDst=this.blendDst),this.blendEquation!==za&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oh&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==RE&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==No&&(n.stencilFail=this.stencilFail),this.stencilZFail!==No&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==No&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class z1 extends rd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=E1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new se,Bf=new Bt;class ns{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=PE,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ts,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bf.fromBufferAttribute(this,t),Bf.applyMatrix3(e),this.setXY(t,Bf.x,Bf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gc(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ai(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gc(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gc(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gc(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ai(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),n=Ai(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),n=Ai(n,this.array),r=Ai(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ai(t,this.array),n=Ai(n,this.array),r=Ai(r,this.array),s=Ai(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==PE&&(e.usage=this.usage),e}}class k1 extends ns{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class H1 extends ns{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class to extends ns{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ZW=0;const ur=new Yn,Gm=new Zi,$o=new se,Wi=new lu,yc=new lu,Fn=new se;class ho extends Bl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ZW++}),this.uuid=au(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(I1(e)?H1:k1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,n){return ur.makeTranslation(e,t,n),this.applyMatrix4(ur),this}scale(e,t,n){return ur.makeScale(e,t,n),this.applyMatrix4(ur),this}lookAt(e){return Gm.lookAt(e),Gm.updateMatrix(),this.applyMatrix4(Gm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($o).negate(),this.translate($o.x,$o.y,$o.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new to(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wi.setFromBufferAttribute(s),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Wi.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Wi.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Wi.min),this.boundingBox.expandByPoint(Wi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new iv);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(Wi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];yc.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(Wi.min,yc.min),Wi.expandByPoint(Fn),Fn.addVectors(Wi.max,yc.max),Wi.expandByPoint(Fn)):(Wi.expandByPoint(yc.min),Wi.expandByPoint(yc.max))}Wi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Fn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Fn));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let f=0,h=l.count;f<h;f++)Fn.fromBufferAttribute(l,f),u&&($o.fromBufferAttribute(e,f),Fn.add($o)),r=Math.max(r,n.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,l=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ns(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,f=[],h=[];for(let M=0;M<l;M++)f[M]=new se,h[M]=new se;const p=new se,m=new se,g=new se,y=new Bt,x=new Bt,_=new Bt,v=new se,A=new se;function T(M,U,V){p.fromArray(r,M*3),m.fromArray(r,U*3),g.fromArray(r,V*3),y.fromArray(o,M*2),x.fromArray(o,U*2),_.fromArray(o,V*2),m.sub(p),g.sub(p),x.sub(y),_.sub(y);const oe=1/(x.x*_.y-_.x*x.y);isFinite(oe)&&(v.copy(m).multiplyScalar(_.y).addScaledVector(g,-x.y).multiplyScalar(oe),A.copy(g).multiplyScalar(x.x).addScaledVector(m,-_.x).multiplyScalar(oe),f[M].add(v),f[U].add(v),f[V].add(v),h[M].add(A),h[U].add(A),h[V].add(A))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let M=0,U=E.length;M<U;++M){const V=E[M],oe=V.start,k=V.count;for(let J=oe,j=oe+k;J<j;J+=3)T(n[J+0],n[J+1],n[J+2])}const C=new se,R=new se,w=new se,z=new se;function G(M){w.fromArray(s,M*3),z.copy(w);const U=f[M];C.copy(U),C.sub(w.multiplyScalar(w.dot(U))).normalize(),R.crossVectors(z,U);const oe=R.dot(h[M])<0?-1:1;u[M*4]=C.x,u[M*4+1]=C.y,u[M*4+2]=C.z,u[M*4+3]=oe}for(let M=0,U=E.length;M<U;++M){const V=E[M],oe=V.start,k=V.count;for(let J=oe,j=oe+k;J<j;J+=3)G(n[J+0]),G(n[J+1]),G(n[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ns(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,g=n.count;m<g;m++)n.setXYZ(m,0,0,0);const r=new se,s=new se,o=new se,l=new se,u=new se,f=new se,h=new se,p=new se;if(e)for(let m=0,g=e.count;m<g;m+=3){const y=e.getX(m+0),x=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,_),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),l.fromBufferAttribute(n,y),u.fromBufferAttribute(n,x),f.fromBufferAttribute(n,_),l.add(h),u.add(h),f.add(h),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(_,f.x,f.y,f.z)}else for(let m=0,g=t.count;m<g;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(l,u){const f=l.array,h=l.itemSize,p=l.normalized,m=new f.constructor(u.length*h);let g=0,y=0;for(let x=0,_=u.length;x<_;x++){l.isInterleavedBufferAttribute?g=u[x]*l.data.stride+l.offset:g=u[x]*h;for(let v=0;v<h;v++)m[y++]=f[g++]}return new ns(m,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ho,n=this.index.array,r=this.attributes;for(const l in r){const u=r[l],f=e(u,n);t.setAttribute(l,f)}const s=this.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,p=f.length;h<p;h++){const m=f[h],g=e(m,n);u.push(g)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],h=[];for(let p=0,m=f.length;p<m;p++){const g=f[p];h.push(g.toJSON(e.data))}h.length>0&&(r[u]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const h=r[f];this.setAttribute(f,h.clone(t))}const s=e.morphAttributes;for(const f in s){const h=[],p=s[f];for(let m=0,g=p.length;m<g;m++)h.push(p[m].clone(t));this.morphAttributes[f]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let f=0,h=o.length;f<h;f++){const p=o[f];this.addGroup(p.start,p.count,p.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const VE=new Yn,La=new F1,zf=new iv,$E=new se,Xo=new se,qo=new se,Yo=new se,Wm=new se,kf=new se,Hf=new Bt,Gf=new Bt,Wf=new Bt,XE=new se,qE=new se,YE=new se,Vf=new se,$f=new se;class Jr extends Zi{constructor(e=new ho,t=new z1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){kf.set(0,0,0);for(let u=0,f=s.length;u<f;u++){const h=l[u],p=s[u];h!==0&&(Wm.fromBufferAttribute(p,e),o?kf.addScaledVector(Wm,h):kf.addScaledVector(Wm.sub(t),h))}t.add(kf)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zf.copy(n.boundingSphere),zf.applyMatrix4(s),La.copy(e.ray).recast(e.near),!(zf.containsPoint(La.origin)===!1&&(La.intersectSphere(zf,$E)===null||La.origin.distanceToSquared($E)>(e.far-e.near)**2))&&(VE.copy(s).invert(),La.copy(e.ray).applyMatrix4(VE),!(n.boundingBox!==null&&La.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,La)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,l=s.index,u=s.attributes.position,f=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,m=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(o))for(let y=0,x=m.length;y<x;y++){const _=m[y],v=o[_.materialIndex],A=Math.max(_.start,g.start),T=Math.min(l.count,Math.min(_.start+_.count,g.start+g.count));for(let E=A,C=T;E<C;E+=3){const R=l.getX(E),w=l.getX(E+1),z=l.getX(E+2);r=Xf(this,v,e,n,f,h,p,R,w,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(l.count,g.start+g.count);for(let _=y,v=x;_<v;_+=3){const A=l.getX(_),T=l.getX(_+1),E=l.getX(_+2);r=Xf(this,o,e,n,f,h,p,A,T,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let y=0,x=m.length;y<x;y++){const _=m[y],v=o[_.materialIndex],A=Math.max(_.start,g.start),T=Math.min(u.count,Math.min(_.start+_.count,g.start+g.count));for(let E=A,C=T;E<C;E+=3){const R=E,w=E+1,z=E+2;r=Xf(this,v,e,n,f,h,p,R,w,z),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,g.start),x=Math.min(u.count,g.start+g.count);for(let _=y,v=x;_<v;_+=3){const A=_,T=_+1,E=_+2;r=Xf(this,o,e,n,f,h,p,A,T,E),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function JW(i,e,t,n,r,s,o,l){let u;if(e.side===Ii?u=n.intersectTriangle(o,s,r,!0,l):u=n.intersectTriangle(r,s,o,e.side===pa,l),u===null)return null;$f.copy(l),$f.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo($f);return f<t.near||f>t.far?null:{distance:f,point:$f.clone(),object:i}}function Xf(i,e,t,n,r,s,o,l,u,f){i.getVertexPosition(l,Xo),i.getVertexPosition(u,qo),i.getVertexPosition(f,Yo);const h=JW(i,e,t,n,Xo,qo,Yo,Vf);if(h){r&&(Hf.fromBufferAttribute(r,l),Gf.fromBufferAttribute(r,u),Wf.fromBufferAttribute(r,f),h.uv=jr.getInterpolation(Vf,Xo,qo,Yo,Hf,Gf,Wf,new Bt)),s&&(Hf.fromBufferAttribute(s,l),Gf.fromBufferAttribute(s,u),Wf.fromBufferAttribute(s,f),h.uv1=jr.getInterpolation(Vf,Xo,qo,Yo,Hf,Gf,Wf,new Bt),h.uv2=h.uv1),o&&(XE.fromBufferAttribute(o,l),qE.fromBufferAttribute(o,u),YE.fromBufferAttribute(o,f),h.normal=jr.getInterpolation(Vf,Xo,qo,Yo,XE,qE,YE,new se),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:u,c:f,normal:new se,materialIndex:0};jr.getNormal(Xo,qo,Yo,p.normal),h.face=p}return h}class cu extends ho{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const l=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],f=[],h=[],p=[];let m=0,g=0;y("z","y","x",-1,-1,n,t,e,o,s,0),y("z","y","x",1,-1,n,t,-e,o,s,1),y("x","z","y",1,1,e,n,t,r,o,2),y("x","z","y",1,-1,e,n,-t,r,o,3),y("x","y","z",1,-1,e,t,n,r,s,4),y("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new to(f,3)),this.setAttribute("normal",new to(h,3)),this.setAttribute("uv",new to(p,2));function y(x,_,v,A,T,E,C,R,w,z,G){const M=E/w,U=C/z,V=E/2,oe=C/2,k=R/2,J=w+1,j=z+1;let te=0,ie=0;const ae=new se;for(let N=0;N<j;N++){const ce=N*U-oe;for(let Se=0;Se<J;Se++){const Je=Se*M-V;ae[x]=Je*A,ae[_]=ce*T,ae[v]=k,f.push(ae.x,ae.y,ae.z),ae[x]=0,ae[_]=0,ae[v]=R>0?1:-1,h.push(ae.x,ae.y,ae.z),p.push(Se/w),p.push(1-N/z),te+=1}}for(let N=0;N<z;N++)for(let ce=0;ce<w;ce++){const Se=m+ce+J*N,Je=m+ce+J*(N+1),ne=m+(ce+1)+J*(N+1),ue=m+(ce+1)+J*N;u.push(Se,Je,ue),u.push(Je,ne,ue),ie+=6}l.addGroup(g,ie,G),g+=ie,m+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cu(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Rl(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function di(i){const e={};for(let t=0;t<i.length;t++){const n=Rl(i[t]);for(const r in n)e[r]=n[r]}return e}function QW(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function G1(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}const e4={clone:Rl,merge:di};var t4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Is extends rd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t4,this.fragmentShader=n4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Rl(e.uniforms),this.uniformsGroups=QW(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class W1 extends Zi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Yn,this.projectionMatrix=new Yn,this.projectionMatrixInverse=new Yn,this.coordinateSystem=ws}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ks=new se,jE=new Bt,KE=new Bt;class mr extends W1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gg*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Am*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gg*2*Math.atan(Math.tan(Am*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ks.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z),Ks.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ks.x,Ks.y).multiplyScalar(-e/Ks.z)}getViewSize(e,t){return this.getViewBounds(e,jE,KE),t.subVectors(KE,jE)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Am*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,f=o.fullHeight;s+=o.offsetX*r/u,t-=o.offsetY*n/f,r*=o.width/u,n*=o.height/f}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jo=-90,Ko=1;class i4 extends Zi{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mr(jo,Ko,e,t);r.layers=this.layers,this.add(r);const s=new mr(jo,Ko,e,t);s.layers=this.layers,this.add(s);const o=new mr(jo,Ko,e,t);o.layers=this.layers,this.add(o);const l=new mr(jo,Ko,e,t);l.layers=this.layers,this.add(l);const u=new mr(jo,Ko,e,t);u.layers=this.layers,this.add(u);const f=new mr(jo,Ko,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,l,u]=t;for(const f of t)this.remove(f);if(e===ws)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Bh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,l,u,f,h]=this.children,p=e.getRenderTarget(),m=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,l),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,m,g),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class V1 extends oi{constructor(e,t,n,r,s,o,l,u,f,h){e=e!==void 0?e:[],t=t!==void 0?t:Al,super(e,t,n,r,s,o,l,u,f,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r4 extends co{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(gl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===eo?Xn:gr),this.texture=new V1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new cu(5,5,5),s=new Is({name:"CubemapFromEquirect",uniforms:Rl(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ii,blending:la});s.uniforms.tEquirect.value=t;const o=new Jr(r,s),l=t.minFilter;return t.minFilter===Wa&&(t.minFilter=Cn),new i4(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Vm=new se,s4=new se,a4=new wt;class Na{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Vm.subVectors(n,t).cross(s4.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Vm),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||a4.getNormalMatrix(e),r=this.coplanarPoint(Vm).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Da=new iv,qf=new se;class $1{constructor(e=new Na,t=new Na,n=new Na,r=new Na,s=new Na,o=new Na){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(r),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ws){const n=this.planes,r=e.elements,s=r[0],o=r[1],l=r[2],u=r[3],f=r[4],h=r[5],p=r[6],m=r[7],g=r[8],y=r[9],x=r[10],_=r[11],v=r[12],A=r[13],T=r[14],E=r[15];if(n[0].setComponents(u-s,m-f,_-g,E-v).normalize(),n[1].setComponents(u+s,m+f,_+g,E+v).normalize(),n[2].setComponents(u+o,m+h,_+y,E+A).normalize(),n[3].setComponents(u-o,m-h,_-y,E-A).normalize(),n[4].setComponents(u-l,m-p,_-x,E-T).normalize(),t===ws)n[5].setComponents(u+l,m+p,_+x,E+T).normalize();else if(t===Bh)n[5].setComponents(l,p,x,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Da.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Da.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Da)}intersectsSprite(e){return Da.center.set(0,0,0),Da.radius=.7071067811865476,Da.applyMatrix4(e.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(qf.x=r.normal.x>0?e.max.x:e.min.x,qf.y=r.normal.y>0?e.max.y:e.min.y,qf.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(qf)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function X1(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function o4(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,h){const p=f.array,m=f.usage,g=p.byteLength,y=i.createBuffer();i.bindBuffer(h,y),i.bufferData(h,p,m),f.onUploadCallback();let x;if(p instanceof Float32Array)x=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)x=i.SHORT;else if(p instanceof Uint32Array)x=i.UNSIGNED_INT;else if(p instanceof Int32Array)x=i.INT;else if(p instanceof Int8Array)x=i.BYTE;else if(p instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:x,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:g}}function s(f,h,p){const m=h.array,g=h._updateRange,y=h.updateRanges;if(i.bindBuffer(p,f),g.count===-1&&y.length===0&&i.bufferSubData(p,0,m),y.length!==0){for(let x=0,_=y.length;x<_;x++){const v=y[x];t?i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m,v.start,v.count):i.bufferSubData(p,v.start*m.BYTES_PER_ELEMENT,m.subarray(v.start,v.start+v.count))}h.clearUpdateRanges()}g.count!==-1&&(t?i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m,g.offset,g.count):i.bufferSubData(p,g.offset*m.BYTES_PER_ELEMENT,m.subarray(g.offset,g.offset+g.count)),g.count=-1),h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=n.get(f);h&&(i.deleteBuffer(h.buffer),n.delete(f))}function u(f,h){if(f.isGLBufferAttribute){const m=n.get(f);(!m||m.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);if(p===void 0)n.set(f,r(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}class uu extends ho{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,l=Math.floor(n),u=Math.floor(r),f=l+1,h=u+1,p=e/l,m=t/u,g=[],y=[],x=[],_=[];for(let v=0;v<h;v++){const A=v*m-o;for(let T=0;T<f;T++){const E=T*p-s;y.push(E,-A,0),x.push(0,0,1),_.push(T/l),_.push(1-v/u)}}for(let v=0;v<u;v++)for(let A=0;A<l;A++){const T=A+f*v,E=A+f*(v+1),C=A+1+f*(v+1),R=A+1+f*v;g.push(T,E,R),g.push(E,C,R)}this.setIndex(g),this.setAttribute("position",new to(y,3)),this.setAttribute("normal",new to(x,3)),this.setAttribute("uv",new to(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uu(e.width,e.height,e.widthSegments,e.heightSegments)}}var l4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,c4=`#ifdef USE_ALPHAHASH
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
#endif`,u4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,f4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,h4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,d4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p4=`#ifdef USE_AOMAP
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
#endif`,m4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g4=`#ifdef USE_BATCHING
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
#endif`,_4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,v4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,y4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,S4=`#ifdef USE_IRIDESCENCE
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
#endif`,E4=`#ifdef USE_BUMPMAP
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
#endif`,M4=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,b4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,T4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,A4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,w4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,C4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,R4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,P4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,L4=`#define PI 3.141592653589793
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
} // validated`,D4=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,I4=`vec3 transformedNormal = objectNormal;
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
#endif`,O4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,U4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,N4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,F4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,B4="gl_FragColor = linearToOutputTexel( gl_FragColor );",z4=`
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
}`,k4=`#ifdef USE_ENVMAP
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
#endif`,H4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,G4=`#ifdef USE_ENVMAP
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
#endif`,W4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,V4=`#ifdef USE_ENVMAP
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
#endif`,$4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,X4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,q4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Y4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,j4=`#ifdef USE_GRADIENTMAP
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
}`,K4=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Z4=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,J4=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Q4=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eV=`uniform bool receiveShadow;
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
#endif`,tV=`#ifdef USE_ENVMAP
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
#endif`,nV=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rV=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aV=`PhysicalMaterial material;
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
#endif`,oV=`struct PhysicalMaterial {
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
}`,lV=`
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
#endif`,cV=`#if defined( RE_IndirectDiffuse )
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
#endif`,uV=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,pV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,mV=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gV=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_V=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vV=`#if defined( USE_POINTS_UV )
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
#endif`,xV=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yV=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SV=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,EV=`#ifdef USE_MORPHNORMALS
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
#endif`,MV=`#ifdef USE_MORPHTARGETS
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
#endif`,bV=`#ifdef USE_MORPHTARGETS
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
#endif`,TV=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AV=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PV=`#ifdef USE_NORMALMAP
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
#endif`,LV=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,DV=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,IV=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,OV=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,UV=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NV=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,FV=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BV=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zV=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kV=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HV=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GV=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,VV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$V=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,XV=`float getShadowMask() {
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
}`,qV=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,YV=`#ifdef USE_SKINNING
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
#endif`,jV=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KV=`#ifdef USE_SKINNING
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
#endif`,ZV=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,JV=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QV=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,e5=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,t5=`#ifdef USE_TRANSMISSION
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
#endif`,n5=`#ifdef USE_TRANSMISSION
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
#endif`,i5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const o5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,l5=`uniform sampler2D t2D;
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
}`,c5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,u5=`#ifdef ENVMAP_TYPE_CUBE
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
}`,f5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d5=`#include <common>
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
}`,p5=`#if DEPTH_PACKING == 3200
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
}`,m5=`#define DISTANCE
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
}`,g5=`#define DISTANCE
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
}`,_5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x5=`uniform float scale;
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
}`,y5=`uniform vec3 diffuse;
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
}`,S5=`#include <common>
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
}`,E5=`uniform vec3 diffuse;
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
}`,M5=`#define LAMBERT
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
}`,b5=`#define LAMBERT
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
}`,T5=`#define MATCAP
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
}`,A5=`#define MATCAP
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
}`,w5=`#define NORMAL
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
}`,C5=`#define NORMAL
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
}`,R5=`#define PHONG
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
}`,P5=`#define PHONG
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
}`,L5=`#define STANDARD
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
}`,D5=`#define STANDARD
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
}`,I5=`#define TOON
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
}`,O5=`#define TOON
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
}`,U5=`uniform float size;
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
}`,N5=`uniform vec3 diffuse;
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
}`,F5=`#include <common>
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
}`,B5=`uniform vec3 color;
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
}`,z5=`uniform float rotation;
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
}`,k5=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:l4,alphahash_pars_fragment:c4,alphamap_fragment:u4,alphamap_pars_fragment:f4,alphatest_fragment:h4,alphatest_pars_fragment:d4,aomap_fragment:p4,aomap_pars_fragment:m4,batching_pars_vertex:g4,batching_vertex:_4,begin_vertex:v4,beginnormal_vertex:x4,bsdfs:y4,iridescence_fragment:S4,bumpmap_pars_fragment:E4,clipping_planes_fragment:M4,clipping_planes_pars_fragment:b4,clipping_planes_pars_vertex:T4,clipping_planes_vertex:A4,color_fragment:w4,color_pars_fragment:C4,color_pars_vertex:R4,color_vertex:P4,common:L4,cube_uv_reflection_fragment:D4,defaultnormal_vertex:I4,displacementmap_pars_vertex:O4,displacementmap_vertex:U4,emissivemap_fragment:N4,emissivemap_pars_fragment:F4,colorspace_fragment:B4,colorspace_pars_fragment:z4,envmap_fragment:k4,envmap_common_pars_fragment:H4,envmap_pars_fragment:G4,envmap_pars_vertex:W4,envmap_physical_pars_fragment:tV,envmap_vertex:V4,fog_vertex:$4,fog_pars_vertex:X4,fog_fragment:q4,fog_pars_fragment:Y4,gradientmap_pars_fragment:j4,lightmap_fragment:K4,lightmap_pars_fragment:Z4,lights_lambert_fragment:J4,lights_lambert_pars_fragment:Q4,lights_pars_begin:eV,lights_toon_fragment:nV,lights_toon_pars_fragment:iV,lights_phong_fragment:rV,lights_phong_pars_fragment:sV,lights_physical_fragment:aV,lights_physical_pars_fragment:oV,lights_fragment_begin:lV,lights_fragment_maps:cV,lights_fragment_end:uV,logdepthbuf_fragment:fV,logdepthbuf_pars_fragment:hV,logdepthbuf_pars_vertex:dV,logdepthbuf_vertex:pV,map_fragment:mV,map_pars_fragment:gV,map_particle_fragment:_V,map_particle_pars_fragment:vV,metalnessmap_fragment:xV,metalnessmap_pars_fragment:yV,morphcolor_vertex:SV,morphnormal_vertex:EV,morphtarget_pars_vertex:MV,morphtarget_vertex:bV,normal_fragment_begin:TV,normal_fragment_maps:AV,normal_pars_fragment:wV,normal_pars_vertex:CV,normal_vertex:RV,normalmap_pars_fragment:PV,clearcoat_normal_fragment_begin:LV,clearcoat_normal_fragment_maps:DV,clearcoat_pars_fragment:IV,iridescence_pars_fragment:OV,opaque_fragment:UV,packing:NV,premultiplied_alpha_fragment:FV,project_vertex:BV,dithering_fragment:zV,dithering_pars_fragment:kV,roughnessmap_fragment:HV,roughnessmap_pars_fragment:GV,shadowmap_pars_fragment:WV,shadowmap_pars_vertex:VV,shadowmap_vertex:$V,shadowmask_pars_fragment:XV,skinbase_vertex:qV,skinning_pars_vertex:YV,skinning_vertex:jV,skinnormal_vertex:KV,specularmap_fragment:ZV,specularmap_pars_fragment:JV,tonemapping_fragment:QV,tonemapping_pars_fragment:e5,transmission_fragment:t5,transmission_pars_fragment:n5,uv_pars_fragment:i5,uv_pars_vertex:r5,uv_vertex:s5,worldpos_vertex:a5,background_vert:o5,background_frag:l5,backgroundCube_vert:c5,backgroundCube_frag:u5,cube_vert:f5,cube_frag:h5,depth_vert:d5,depth_frag:p5,distanceRGBA_vert:m5,distanceRGBA_frag:g5,equirect_vert:_5,equirect_frag:v5,linedashed_vert:x5,linedashed_frag:y5,meshbasic_vert:S5,meshbasic_frag:E5,meshlambert_vert:M5,meshlambert_frag:b5,meshmatcap_vert:T5,meshmatcap_frag:A5,meshnormal_vert:w5,meshnormal_frag:C5,meshphong_vert:R5,meshphong_frag:P5,meshphysical_vert:L5,meshphysical_frag:D5,meshtoon_vert:I5,meshtoon_frag:O5,points_vert:U5,points_frag:N5,shadow_vert:F5,shadow_frag:B5,sprite_vert:z5,sprite_frag:k5},Re={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},qr={basic:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:di([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:di([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:di([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:di([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:di([Re.points,Re.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:di([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:di([Re.common,Re.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:di([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:di([Re.sprite,Re.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:di([Re.common,Re.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:di([Re.lights,Re.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};qr.physical={uniforms:di([qr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Yf={r:0,b:0,g:0};function H5(i,e,t,n,r,s,o){const l=new Yt(0);let u=s===!0?0:1,f,h,p=null,m=0,g=null;function y(_,v){let A=!1,T=v.isScene===!0?v.background:null;T&&T.isTexture&&(T=(v.backgroundBlurriness>0?t:e).get(T)),T===null?x(l,u):T&&T.isColor&&(x(T,1),A=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||A)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),T&&(T.isCubeTexture||T.mapping===td)?(h===void 0&&(h=new Jr(new cu(1,1,1),new Is({name:"BackgroundCubeMaterial",uniforms:Rl(qr.backgroundCube.uniforms),vertexShader:qr.backgroundCube.vertexShader,fragmentShader:qr.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=qt.getTransfer(T.colorSpace)!==sn,(p!==T||m!==T.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=T,m=T.version,g=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(f===void 0&&(f=new Jr(new uu(2,2),new Is({name:"BackgroundMaterial",uniforms:Rl(qr.background.uniforms),vertexShader:qr.background.vertexShader,fragmentShader:qr.background.fragmentShader,side:pa,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=T,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=qt.getTransfer(T.colorSpace)!==sn,T.matrixAutoUpdate===!0&&T.updateMatrix(),f.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||m!==T.version||g!==i.toneMapping)&&(f.material.needsUpdate=!0,p=T,m=T.version,g=i.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null))}function x(_,v){_.getRGB(Yf,G1(i)),n.buffers.color.setClear(Yf.r,Yf.g,Yf.b,v,o)}return{getClearColor:function(){return l},setClearColor:function(_,v=1){l.set(_),u=v,x(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,x(l,u)},render:y}}function G5(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,l={},u=_(null);let f=u,h=!1;function p(k,J,j,te,ie){let ae=!1;if(o){const N=x(te,j,J);f!==N&&(f=N,g(f.object)),ae=v(k,te,j,ie),ae&&A(k,te,j,ie)}else{const N=J.wireframe===!0;(f.geometry!==te.id||f.program!==j.id||f.wireframe!==N)&&(f.geometry=te.id,f.program=j.id,f.wireframe=N,ae=!0)}ie!==null&&t.update(ie,i.ELEMENT_ARRAY_BUFFER),(ae||h)&&(h=!1,z(k,J,j,te),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function m(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g(k){return n.isWebGL2?i.bindVertexArray(k):s.bindVertexArrayOES(k)}function y(k){return n.isWebGL2?i.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function x(k,J,j){const te=j.wireframe===!0;let ie=l[k.id];ie===void 0&&(ie={},l[k.id]=ie);let ae=ie[J.id];ae===void 0&&(ae={},ie[J.id]=ae);let N=ae[te];return N===void 0&&(N=_(m()),ae[te]=N),N}function _(k){const J=[],j=[],te=[];for(let ie=0;ie<r;ie++)J[ie]=0,j[ie]=0,te[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:j,attributeDivisors:te,object:k,attributes:{},index:null}}function v(k,J,j,te){const ie=f.attributes,ae=J.attributes;let N=0;const ce=j.getAttributes();for(const Se in ce)if(ce[Se].location>=0){const ne=ie[Se];let ue=ae[Se];if(ue===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;N++}return f.attributesNum!==N||f.index!==te}function A(k,J,j,te){const ie={},ae=J.attributes;let N=0;const ce=j.getAttributes();for(const Se in ce)if(ce[Se].location>=0){let ne=ae[Se];ne===void 0&&(Se==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),Se==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),ie[Se]=ue,N++}f.attributes=ie,f.attributesNum=N,f.index=te}function T(){const k=f.newAttributes;for(let J=0,j=k.length;J<j;J++)k[J]=0}function E(k){C(k,0)}function C(k,J){const j=f.newAttributes,te=f.enabledAttributes,ie=f.attributeDivisors;j[k]=1,te[k]===0&&(i.enableVertexAttribArray(k),te[k]=1),ie[k]!==J&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),ie[k]=J)}function R(){const k=f.newAttributes,J=f.enabledAttributes;for(let j=0,te=J.length;j<te;j++)J[j]!==k[j]&&(i.disableVertexAttribArray(j),J[j]=0)}function w(k,J,j,te,ie,ae,N){N===!0?i.vertexAttribIPointer(k,J,j,ie,ae):i.vertexAttribPointer(k,J,j,te,ie,ae)}function z(k,J,j,te){if(n.isWebGL2===!1&&(k.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ie=te.attributes,ae=j.getAttributes(),N=J.defaultAttributeValues;for(const ce in ae){const Se=ae[ce];if(Se.location>=0){let Je=ie[ce];if(Je===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(Je=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(Je=k.instanceColor)),Je!==void 0){const ne=Je.normalized,ue=Je.itemSize,Te=t.get(Je);if(Te===void 0)continue;const De=Te.buffer,Oe=Te.type,Ce=Te.bytesPerElement,gt=n.isWebGL2===!0&&(Oe===i.INT||Oe===i.UNSIGNED_INT||Je.gpuType===b1);if(Je.isInterleavedBufferAttribute){const $e=Je.data,q=$e.stride,st=Je.offset;if($e.isInstancedInterleavedBuffer){for(let be=0;be<Se.locationSize;be++)C(Se.location+be,$e.meshPerAttribute);k.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let be=0;be<Se.locationSize;be++)E(Se.location+be);i.bindBuffer(i.ARRAY_BUFFER,De);for(let be=0;be<Se.locationSize;be++)w(Se.location+be,ue/Se.locationSize,Oe,ne,q*Ce,(st+ue/Se.locationSize*be)*Ce,gt)}else{if(Je.isInstancedBufferAttribute){for(let $e=0;$e<Se.locationSize;$e++)C(Se.location+$e,Je.meshPerAttribute);k.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let $e=0;$e<Se.locationSize;$e++)E(Se.location+$e);i.bindBuffer(i.ARRAY_BUFFER,De);for(let $e=0;$e<Se.locationSize;$e++)w(Se.location+$e,ue/Se.locationSize,Oe,ne,ue*Ce,ue/Se.locationSize*$e*Ce,gt)}}else if(N!==void 0){const ne=N[ce];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Se.location,ne);break;case 3:i.vertexAttrib3fv(Se.location,ne);break;case 4:i.vertexAttrib4fv(Se.location,ne);break;default:i.vertexAttrib1fv(Se.location,ne)}}}}R()}function G(){V();for(const k in l){const J=l[k];for(const j in J){const te=J[j];for(const ie in te)y(te[ie].object),delete te[ie];delete J[j]}delete l[k]}}function M(k){if(l[k.id]===void 0)return;const J=l[k.id];for(const j in J){const te=J[j];for(const ie in te)y(te[ie].object),delete te[ie];delete J[j]}delete l[k.id]}function U(k){for(const J in l){const j=l[J];if(j[k.id]===void 0)continue;const te=j[k.id];for(const ie in te)y(te[ie].object),delete te[ie];delete j[k.id]}}function V(){oe(),h=!0,f!==u&&(f=u,g(f.object))}function oe(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:V,resetDefaultState:oe,dispose:G,releaseStatesOfGeometry:M,releaseStatesOfProgram:U,initAttributes:T,enableAttribute:E,disableUnusedAttributes:R}}function W5(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}function l(h,p){i.drawArrays(s,h,p),t.update(p,s,1)}function u(h,p,m){if(m===0)return;let g,y;if(r)g=i,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,h,p,m),t.update(p,s,m)}function f(h,p,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<m;y++)this.render(h[y],p[y]);else{g.multiDrawArraysWEBGL(s,h,0,p,0,m);let y=0;for(let x=0;x<m;x++)y+=p[x];t.update(y,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function V5(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let l=t.precision!==void 0?t.precision:"highp";const u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,E=o||e.has("OES_texture_float"),C=T&&E,R=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:h,maxTextures:p,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:_,maxVaryings:v,maxFragmentUniforms:A,vertexTextures:T,floatFragmentTextures:E,floatVertexTextures:C,maxSamples:R}}function $5(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Na,l=new wt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,m){const g=p.length!==0||m||n!==0||r;return r=m,n=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,m){t=h(p,m,0)},this.setState=function(p,m,g){const y=p.clippingPlanes,x=p.clipIntersection,_=p.clipShadows,v=i.get(p);if(!r||y===null||y.length===0||s&&!_)s?h(null):f();else{const A=s?0:n,T=A*4;let E=v.clippingState||null;u.value=E,E=h(y,m,T,g);for(let C=0;C!==T;++C)E[C]=t[C];v.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,m,g,y){const x=p!==null?p.length:0;let _=null;if(x!==0){if(_=u.value,y!==!0||_===null){const v=g+x*4,A=m.matrixWorldInverse;l.getNormalMatrix(A),(_===null||_.length<v)&&(_=new Float32Array(v));for(let T=0,E=g;T!==x;++T,E+=4)o.copy(p[T]).applyMatrix4(A,l),o.normal.toArray(_,E),_[E+3]=o.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,_}}function X5(i){let e=new WeakMap;function t(o,l){return l===Fg?o.mapping=Al:l===Bg&&(o.mapping=wl),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Fg||l===Bg)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const f=new r4(u.height);return f.fromEquirectangularTexture(i,o),e.set(o,f),o.addEventListener("dispose",r),t(f.texture,o.mapping)}else return null}}return o}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class q5 extends W1{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,l=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=f*this.view.offsetX,o=s+f*this.view.width,l-=h*this.view.offsetY,u=l-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const sl=4,ZE=[.125,.215,.35,.446,.526,.582],ka=20,$m=new q5,JE=new Yt;let Xm=null,qm=0,Ym=0;const Fa=(1+Math.sqrt(5))/2,Zo=1/Fa,QE=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Fa,Zo),new se(0,Fa,-Zo),new se(Zo,0,Fa),new se(-Zo,0,Fa),new se(Fa,Zo,0),new se(-Fa,Zo,0)];class eM{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Xm=this._renderer.getRenderTarget(),qm=this._renderer.getActiveCubeFace(),Ym=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iM(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nM(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xm,qm,Ym),e.scissorTest=!1,jf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Al||e.mapping===wl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xm=this._renderer.getRenderTarget(),qm=this._renderer.getActiveCubeFace(),Ym=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Kc,format:Or,colorSpace:Ds,depthBuffer:!1},r=tM(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tM(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Y5(s)),this._blurMaterial=j5(s,e,t)}return r}_compileMaterial(e){const t=new Jr(this._lodPlanes[0],e);this._renderer.compile(t,$m)}_sceneToCubeUV(e,t,n,r){const l=new mr(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,m=h.toneMapping;h.getClearColor(JE),h.toneMapping=ca,h.autoClear=!1;const g=new z1({name:"PMREM.Background",side:Ii,depthWrite:!1,depthTest:!1}),y=new Jr(new cu,g);let x=!1;const _=e.background;_?_.isColor&&(g.color.copy(_),e.background=null,x=!0):(g.color.copy(JE),x=!0);for(let v=0;v<6;v++){const A=v%3;A===0?(l.up.set(0,u[v],0),l.lookAt(f[v],0,0)):A===1?(l.up.set(0,0,u[v]),l.lookAt(0,f[v],0)):(l.up.set(0,u[v],0),l.lookAt(0,0,f[v]));const T=this._cubeSize;jf(r,A*T,v>2?T:0,T,T),h.setRenderTarget(r),x&&h.render(y,l),h.render(e,l)}y.geometry.dispose(),y.material.dispose(),h.toneMapping=m,h.autoClear=p,e.background=_}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Al||e.mapping===wl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=iM()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nM());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Jr(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;jf(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,$m)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=QE[(r-1)%QE.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,l){const u=this._renderer,f=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new Jr(this._lodPlanes[r],f),m=f.uniforms,g=this._sizeLods[n]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*ka-1),x=s/y,_=isFinite(s)?1+Math.floor(h*x):ka;_>ka&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ka}`);const v=[];let A=0;for(let w=0;w<ka;++w){const z=w/x,G=Math.exp(-z*z/2);v.push(G),w===0?A+=G:w<_&&(A+=2*G)}for(let w=0;w<v.length;w++)v[w]=v[w]/A;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=v,m.latitudinal.value=o==="latitudinal",l&&(m.poleAxis.value=l);const{_lodMax:T}=this;m.dTheta.value=y,m.mipInt.value=T-n;const E=this._sizeLods[r],C=3*E*(r>T-sl?r-T+sl:0),R=4*(this._cubeSize-E);jf(t,C,R,3*E,2*E),u.setRenderTarget(t),u.render(p,$m)}}function Y5(i){const e=[],t=[],n=[];let r=i;const s=i-sl+1+ZE.length;for(let o=0;o<s;o++){const l=Math.pow(2,r);t.push(l);let u=1/l;o>i-sl?u=ZE[o-i+sl-1]:o===0&&(u=0),n.push(u);const f=1/(l-2),h=-f,p=1+f,m=[h,h,p,h,p,p,h,h,p,p,h,p],g=6,y=6,x=3,_=2,v=1,A=new Float32Array(x*y*g),T=new Float32Array(_*y*g),E=new Float32Array(v*y*g);for(let R=0;R<g;R++){const w=R%3*2/3-1,z=R>2?0:-1,G=[w,z,0,w+2/3,z,0,w+2/3,z+1,0,w,z,0,w+2/3,z+1,0,w,z+1,0];A.set(G,x*y*R),T.set(m,_*y*R);const M=[R,R,R,R,R,R];E.set(M,v*y*R)}const C=new ho;C.setAttribute("position",new ns(A,x)),C.setAttribute("uv",new ns(T,_)),C.setAttribute("faceIndex",new ns(E,v)),e.push(C),r>sl&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tM(i,e,t){const n=new co(i,e,t);return n.texture.mapping=td,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jf(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function j5(i,e,t){const n=new Float32Array(ka),r=new se(0,1,0);return new Is({name:"SphericalGaussianBlur",defines:{n:ka,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sv(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function nM(){return new Is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sv(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function iM(){return new Is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sv(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function sv(){return`

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
	`}function K5(i){let e=new WeakMap,t=null;function n(l){if(l&&l.isTexture){const u=l.mapping,f=u===Fg||u===Bg,h=u===Al||u===wl;if(f||h)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let p=e.get(l);return t===null&&(t=new eM(i)),p=f?t.fromEquirectangular(l,p):t.fromCubemap(l,p),e.set(l,p),p.texture}else{if(e.has(l))return e.get(l).texture;{const p=l.image;if(f&&p&&p.height>0||h&&p&&r(p)){t===null&&(t=new eM(i));const m=f?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,m),l.addEventListener("dispose",s),m.texture}else return null}}}return l}function r(l){let u=0;const f=6;for(let h=0;h<f;h++)l[h]!==void 0&&u++;return u===f}function s(l){const u=l.target;u.removeEventListener("dispose",s);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Z5(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function J5(i,e,t,n){const r={},s=new WeakMap;function o(p){const m=p.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);for(const y in m.morphAttributes){const x=m.morphAttributes[y];for(let _=0,v=x.length;_<v;_++)e.remove(x[_])}m.removeEventListener("dispose",o),delete r[m.id];const g=s.get(m);g&&(e.remove(g),s.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(p,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function u(p){const m=p.attributes;for(const y in m)e.update(m[y],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const y in g){const x=g[y];for(let _=0,v=x.length;_<v;_++)e.update(x[_],i.ARRAY_BUFFER)}}function f(p){const m=[],g=p.index,y=p.attributes.position;let x=0;if(g!==null){const A=g.array;x=g.version;for(let T=0,E=A.length;T<E;T+=3){const C=A[T+0],R=A[T+1],w=A[T+2];m.push(C,R,R,w,w,C)}}else if(y!==void 0){const A=y.array;x=y.version;for(let T=0,E=A.length/3-1;T<E;T+=3){const C=T+0,R=T+1,w=T+2;m.push(C,R,R,w,w,C)}}else return;const _=new(I1(m)?H1:k1)(m,1);_.version=x;const v=s.get(p);v&&e.remove(v),s.set(p,_)}function h(p){const m=s.get(p);if(m){const g=p.index;g!==null&&m.version<g.version&&f(p)}else f(p);return s.get(p)}return{get:l,update:u,getWireframeAttribute:h}}function Q5(i,e,t,n){const r=n.isWebGL2;let s;function o(g){s=g}let l,u;function f(g){l=g.type,u=g.bytesPerElement}function h(g,y){i.drawElements(s,y,l,g*u),t.update(y,s,1)}function p(g,y,x){if(x===0)return;let _,v;if(r)_=i,v="drawElementsInstanced";else if(_=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[v](s,y,l,g*u,x),t.update(y,s,x)}function m(g,y,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let v=0;v<x;v++)this.render(g[v]/u,y[v]);else{_.multiDrawElementsWEBGL(s,y,0,l,g,0,x);let v=0;for(let A=0;A<x;A++)v+=y[A];t.update(v,s,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=m}function e$(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,l){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=l*(s/3);break;case i.LINES:t.lines+=l*(s/2);break;case i.LINE_STRIP:t.lines+=l*(s-1);break;case i.LINE_LOOP:t.lines+=l*s;break;case i.POINTS:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function t$(i,e){return i[0]-e[0]}function n$(i,e){return Math.abs(e[1])-Math.abs(i[1])}function i$(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Hn,l=[];for(let f=0;f<8;f++)l[f]=[f,0];function u(f,h,p){const m=f.morphTargetInfluences;if(e.isWebGL2===!0){const y=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=y!==void 0?y.length:0;let _=s.get(h);if(_===void 0||_.count!==x){let J=function(){oe.dispose(),s.delete(h),h.removeEventListener("dispose",J)};var g=J;_!==void 0&&_.texture.dispose();const T=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,R=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],z=h.morphAttributes.color||[];let G=0;T===!0&&(G=1),E===!0&&(G=2),C===!0&&(G=3);let M=h.attributes.position.count*G,U=1;M>e.maxTextureSize&&(U=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const V=new Float32Array(M*U*4*x),oe=new N1(V,M,U,x);oe.type=Ts,oe.needsUpdate=!0;const k=G*4;for(let j=0;j<x;j++){const te=R[j],ie=w[j],ae=z[j],N=M*U*4*j;for(let ce=0;ce<te.count;ce++){const Se=ce*k;T===!0&&(o.fromBufferAttribute(te,ce),V[N+Se+0]=o.x,V[N+Se+1]=o.y,V[N+Se+2]=o.z,V[N+Se+3]=0),E===!0&&(o.fromBufferAttribute(ie,ce),V[N+Se+4]=o.x,V[N+Se+5]=o.y,V[N+Se+6]=o.z,V[N+Se+7]=0),C===!0&&(o.fromBufferAttribute(ae,ce),V[N+Se+8]=o.x,V[N+Se+9]=o.y,V[N+Se+10]=o.z,V[N+Se+11]=ae.itemSize===4?o.w:1)}}_={count:x,texture:oe,size:new Bt(M,U)},s.set(h,_),h.addEventListener("dispose",J)}let v=0;for(let T=0;T<m.length;T++)v+=m[T];const A=h.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",A),p.getUniforms().setValue(i,"morphTargetInfluences",m),p.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const y=m===void 0?0:m.length;let x=n[h.id];if(x===void 0||x.length!==y){x=[];for(let E=0;E<y;E++)x[E]=[E,0];n[h.id]=x}for(let E=0;E<y;E++){const C=x[E];C[0]=E,C[1]=m[E]}x.sort(n$);for(let E=0;E<8;E++)E<y&&x[E][1]?(l[E][0]=x[E][0],l[E][1]=x[E][1]):(l[E][0]=Number.MAX_SAFE_INTEGER,l[E][1]=0);l.sort(t$);const _=h.morphAttributes.position,v=h.morphAttributes.normal;let A=0;for(let E=0;E<8;E++){const C=l[E],R=C[0],w=C[1];R!==Number.MAX_SAFE_INTEGER&&w?(_&&h.getAttribute("morphTarget"+E)!==_[R]&&h.setAttribute("morphTarget"+E,_[R]),v&&h.getAttribute("morphNormal"+E)!==v[R]&&h.setAttribute("morphNormal"+E,v[R]),r[E]=w,A+=w):(_&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),v&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),r[E]=0)}const T=h.morphTargetsRelative?1:1-A;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function r$(i,e,t,n){let r=new WeakMap;function s(u){const f=n.render.frame,h=u.geometry,p=e.get(u,h);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const m=u.skeleton;r.get(m)!==f&&(m.update(),r.set(m,f))}return p}function o(){r=new WeakMap}function l(u){const f=u.target;f.removeEventListener("dispose",l),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:s,dispose:o}}class q1 extends oi{constructor(e,t,n,r,s,o,l,u,f,h){if(h=h!==void 0?h:Qa,h!==Qa&&h!==Cl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qa&&(n=ra),n===void 0&&h===Cl&&(n=Ja),super(null,r,s,o,l,u,h,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:_i,this.minFilter=u!==void 0?u:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Y1=new oi,j1=new q1(1,1);j1.compareFunction=D1;const K1=new N1,Z1=new HW,J1=new V1,rM=[],sM=[],aM=new Float32Array(16),oM=new Float32Array(9),lM=new Float32Array(4);function zl(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=rM[r];if(s===void 0&&(s=new Float32Array(r),rM[r]=s),e!==0){n.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,i[o].toArray(s,l)}return s}function On(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Un(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function sd(i,e){let t=sM[e];t===void 0&&(t=new Int32Array(e),sM[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function s$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function a$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2fv(this.addr,e),Un(t,e)}}function o$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(On(t,e))return;i.uniform3fv(this.addr,e),Un(t,e)}}function l$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4fv(this.addr,e),Un(t,e)}}function c$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;lM.set(n),i.uniformMatrix2fv(this.addr,!1,lM),Un(t,n)}}function u$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;oM.set(n),i.uniformMatrix3fv(this.addr,!1,oM),Un(t,n)}}function f$(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(On(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Un(t,e)}else{if(On(t,n))return;aM.set(n),i.uniformMatrix4fv(this.addr,!1,aM),Un(t,n)}}function h$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function d$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2iv(this.addr,e),Un(t,e)}}function p$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3iv(this.addr,e),Un(t,e)}}function m$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4iv(this.addr,e),Un(t,e)}}function g$(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(On(t,e))return;i.uniform2uiv(this.addr,e),Un(t,e)}}function v$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(On(t,e))return;i.uniform3uiv(this.addr,e),Un(t,e)}}function x$(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(On(t,e))return;i.uniform4uiv(this.addr,e),Un(t,e)}}function y$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?j1:Y1;t.setTexture2D(e||s,r)}function S$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Z1,r)}function E$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||J1,r)}function M$(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||K1,r)}function b$(i){switch(i){case 5126:return s$;case 35664:return a$;case 35665:return o$;case 35666:return l$;case 35674:return c$;case 35675:return u$;case 35676:return f$;case 5124:case 35670:return h$;case 35667:case 35671:return d$;case 35668:case 35672:return p$;case 35669:case 35673:return m$;case 5125:return g$;case 36294:return _$;case 36295:return v$;case 36296:return x$;case 35678:case 36198:case 36298:case 36306:case 35682:return y$;case 35679:case 36299:case 36307:return S$;case 35680:case 36300:case 36308:case 36293:return E$;case 36289:case 36303:case 36311:case 36292:return M$}}function T$(i,e){i.uniform1fv(this.addr,e)}function A$(i,e){const t=zl(e,this.size,2);i.uniform2fv(this.addr,t)}function w$(i,e){const t=zl(e,this.size,3);i.uniform3fv(this.addr,t)}function C$(i,e){const t=zl(e,this.size,4);i.uniform4fv(this.addr,t)}function R$(i,e){const t=zl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function P$(i,e){const t=zl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function L$(i,e){const t=zl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function D$(i,e){i.uniform1iv(this.addr,e)}function I$(i,e){i.uniform2iv(this.addr,e)}function O$(i,e){i.uniform3iv(this.addr,e)}function U$(i,e){i.uniform4iv(this.addr,e)}function N$(i,e){i.uniform1uiv(this.addr,e)}function F$(i,e){i.uniform2uiv(this.addr,e)}function B$(i,e){i.uniform3uiv(this.addr,e)}function z$(i,e){i.uniform4uiv(this.addr,e)}function k$(i,e,t){const n=this.cache,r=e.length,s=sd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Y1,s[o])}function H$(i,e,t){const n=this.cache,r=e.length,s=sd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Z1,s[o])}function G$(i,e,t){const n=this.cache,r=e.length,s=sd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||J1,s[o])}function W$(i,e,t){const n=this.cache,r=e.length,s=sd(t,r);On(n,s)||(i.uniform1iv(this.addr,s),Un(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||K1,s[o])}function V$(i){switch(i){case 5126:return T$;case 35664:return A$;case 35665:return w$;case 35666:return C$;case 35674:return R$;case 35675:return P$;case 35676:return L$;case 5124:case 35670:return D$;case 35667:case 35671:return I$;case 35668:case 35672:return O$;case 35669:case 35673:return U$;case 5125:return N$;case 36294:return F$;case 36295:return B$;case 36296:return z$;case 35678:case 36198:case 36298:case 36306:case 35682:return k$;case 35679:case 36299:case 36307:return H$;case 35680:case 36300:case 36308:case 36293:return G$;case 36289:case 36303:case 36311:case 36292:return W$}}class $${constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=b$(t.type)}}class X${constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=V$(t.type)}}class q${constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const l=r[s];l.setValue(e,t[l.id],n)}}}const jm=/(\w+)(\])?(\[|\.)?/g;function cM(i,e){i.seq.push(e),i.map[e.id]=e}function Y$(i,e,t){const n=i.name,r=n.length;for(jm.lastIndex=0;;){const s=jm.exec(n),o=jm.lastIndex;let l=s[1];const u=s[2]==="]",f=s[3];if(u&&(l=l|0),f===void 0||f==="["&&o+2===r){cM(t,f===void 0?new $$(l,i,e):new X$(l,i,e));break}else{let p=t.map[l];p===void 0&&(p=new q$(l),cM(t,p)),t=p}}}class dh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Y$(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=n[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function uM(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const j$=37297;let K$=0;function Z$(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const l=o+1;n.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return n.join(`
`)}function J$(i){const e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(i);let n;switch(e===t?n="":e===Fh&&t===Nh?n="LinearDisplayP3ToLinearSRGB":e===Nh&&t===Fh&&(n="LinearSRGBToLinearDisplayP3"),i){case Ds:case nd:return[n,"LinearTransferOETF"];case Xn:case nv:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fM(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Z$(i.getShaderSource(e),o)}else return r}function Q$(i,e){const t=J$(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function e8(i,e){let t;switch(e){case uW:t="Linear";break;case fW:t="Reinhard";break;case hW:t="OptimizedCineon";break;case dW:t="ACESFilmic";break;case mW:t="AgX";break;case pW:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function t8(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(al).join(`
`)}function n8(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function i8(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function r8(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let l=1;s.type===i.FLOAT_MAT2&&(l=2),s.type===i.FLOAT_MAT3&&(l=3),s.type===i.FLOAT_MAT4&&(l=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:l}}return t}function al(i){return i!==""}function hM(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dM(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const s8=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vg(i){return i.replace(s8,o8)}const a8=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function o8(i,e){let t=Mt[e];if(t===void 0){const n=a8.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vg(t)}const l8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pM(i){return i.replace(l8,c8)}function c8(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mM(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function u8(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===S1?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===BG?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function f8(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Al:case wl:e="ENVMAP_TYPE_CUBE";break;case td:e="ENVMAP_TYPE_CUBE_UV";break}return e}function h8(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wl:e="ENVMAP_MODE_REFRACTION";break}return e}function d8(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case E1:e="ENVMAP_BLENDING_MULTIPLY";break;case lW:e="ENVMAP_BLENDING_MIX";break;case cW:e="ENVMAP_BLENDING_ADD";break}return e}function p8(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function m8(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=u8(t),f=f8(t),h=h8(t),p=d8(t),m=p8(t),g=t.isWebGL2?"":t8(t),y=n8(t),x=i8(s),_=r.createProgram();let v,A,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(al).join(`
`),v.length>0&&(v+=`
`),A=[g,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(al).join(`
`),A.length>0&&(A+=`
`)):(v=[mM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),A=[g,mM(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ca?"#define TONE_MAPPING":"",t.toneMapping!==ca?Mt.tonemapping_pars_fragment:"",t.toneMapping!==ca?e8("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,Q$("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),o=Vg(o),o=hM(o,t),o=dM(o,t),l=Vg(l),l=hM(l,t),l=dM(l,t),o=pM(o),l=pM(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,A=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===LE?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===LE?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const E=T+v+o,C=T+A+l,R=uM(r,r.VERTEX_SHADER,E),w=uM(r,r.FRAGMENT_SHADER,C);r.attachShader(_,R),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function z(V){if(i.debug.checkShaderErrors){const oe=r.getProgramInfoLog(_).trim(),k=r.getShaderInfoLog(R).trim(),J=r.getShaderInfoLog(w).trim();let j=!0,te=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,R,w);else{const ie=fM(r,R,"vertex"),ae=fM(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+oe+`
`+ie+`
`+ae)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(k===""||J==="")&&(te=!1);te&&(V.diagnostics={runnable:j,programLog:oe,vertexShader:{log:k,prefix:v},fragmentShader:{log:J,prefix:A}})}r.deleteShader(R),r.deleteShader(w),G=new dh(r,_),M=r8(r,_)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let M;this.getAttributes=function(){return M===void 0&&z(this),M};let U=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=r.getProgramParameter(_,j$)),U},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K$++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=w,this}let g8=0;class _8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new v8(e),t.set(e,n)),n}}class v8{constructor(e){this.id=g8++,this.code=e,this.usedTimes=0}}function x8(i,e,t,n,r,s,o){const l=new rv,u=new _8,f=new Set,h=[],p=r.isWebGL2,m=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return f.add(M),M===0?"uv":`uv${M}`}function v(M,U,V,oe,k){const J=oe.fog,j=k.geometry,te=M.isMeshStandardMaterial?oe.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||te),ae=ie&&ie.mapping===td?ie.image.height:null,N=x[M.type];M.precision!==null&&(y=r.getMaxPrecision(M.precision),y!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",y,"instead."));const ce=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Se=ce!==void 0?ce.length:0;let Je=0;j.morphAttributes.position!==void 0&&(Je=1),j.morphAttributes.normal!==void 0&&(Je=2),j.morphAttributes.color!==void 0&&(Je=3);let ne,ue,Te,De;if(N){const It=qr[N];ne=It.vertexShader,ue=It.fragmentShader}else ne=M.vertexShader,ue=M.fragmentShader,u.update(M),Te=u.getVertexShaderID(M),De=u.getFragmentShaderID(M);const Oe=i.getRenderTarget(),Ce=k.isInstancedMesh===!0,gt=k.isBatchedMesh===!0,$e=!!M.map,q=!!M.matcap,st=!!ie,be=!!M.aoMap,Ge=!!M.lightMap,Ue=!!M.bumpMap,K=!!M.normalMap,et=!!M.displacementMap,O=!!M.emissiveMap,P=!!M.metalnessMap,Y=!!M.roughnessMap,me=M.anisotropy>0,de=M.clearcoat>0,_e=M.iridescence>0,we=M.sheen>0,Ae=M.transmission>0,Ee=me&&!!M.anisotropyMap,ke=de&&!!M.clearcoatMap,tt=de&&!!M.clearcoatNormalMap,pe=de&&!!M.clearcoatRoughnessMap,Tt=_e&&!!M.iridescenceMap,Xe=_e&&!!M.iridescenceThicknessMap,at=we&&!!M.sheenColorMap,We=we&&!!M.sheenRoughnessMap,Ie=!!M.specularMap,ot=!!M.specularColorMap,_t=!!M.specularIntensityMap,Dt=Ae&&!!M.transmissionMap,Pe=Ae&&!!M.thicknessMap,Ct=!!M.gradientMap,F=!!M.alphaMap,ve=M.alphaTest>0,xe=!!M.alphaHash,Ne=!!M.extensions;let Ze=ca;M.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const vt={isWebGL2:p,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:ue,defines:M.defines,customVertexShaderID:Te,customFragmentShaderID:De,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:y,batching:gt,instancing:Ce,instancingColor:Ce&&k.instanceColor!==null,supportsVertexTextures:g,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Ds,alphaToCoverage:!!M.alphaToCoverage,map:$e,matcap:q,envMap:st,envMapMode:st&&ie.mapping,envMapCubeUVHeight:ae,aoMap:be,lightMap:Ge,bumpMap:Ue,normalMap:K,displacementMap:g&&et,emissiveMap:O,normalMapObjectSpace:K&&M.normalMapType===wW,normalMapTangentSpace:K&&M.normalMapType===AW,metalnessMap:P,roughnessMap:Y,anisotropy:me,anisotropyMap:Ee,clearcoat:de,clearcoatMap:ke,clearcoatNormalMap:tt,clearcoatRoughnessMap:pe,iridescence:_e,iridescenceMap:Tt,iridescenceThicknessMap:Xe,sheen:we,sheenColorMap:at,sheenRoughnessMap:We,specularMap:Ie,specularColorMap:ot,specularIntensityMap:_t,transmission:Ae,transmissionMap:Dt,thicknessMap:Pe,gradientMap:Ct,opaque:M.transparent===!1&&M.blending===ml&&M.alphaToCoverage===!1,alphaMap:F,alphaTest:ve,alphaHash:xe,combine:M.combine,mapUv:$e&&_(M.map.channel),aoMapUv:be&&_(M.aoMap.channel),lightMapUv:Ge&&_(M.lightMap.channel),bumpMapUv:Ue&&_(M.bumpMap.channel),normalMapUv:K&&_(M.normalMap.channel),displacementMapUv:et&&_(M.displacementMap.channel),emissiveMapUv:O&&_(M.emissiveMap.channel),metalnessMapUv:P&&_(M.metalnessMap.channel),roughnessMapUv:Y&&_(M.roughnessMap.channel),anisotropyMapUv:Ee&&_(M.anisotropyMap.channel),clearcoatMapUv:ke&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:tt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Tt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:at&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:We&&_(M.sheenRoughnessMap.channel),specularMapUv:Ie&&_(M.specularMap.channel),specularColorMapUv:ot&&_(M.specularColorMap.channel),specularIntensityMapUv:_t&&_(M.specularIntensityMap.channel),transmissionMapUv:Dt&&_(M.transmissionMap.channel),thicknessMapUv:Pe&&_(M.thicknessMap.channel),alphaMapUv:F&&_(M.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(K||me),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!j.attributes.uv&&($e||F),fog:!!J,useFog:M.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:m,skinning:k.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Je,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&M.map.isVideoTexture===!0&&qt.getTransfer(M.map.colorSpace)===sn,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===bs,flipSided:M.side===Ii,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ne&&M.extensions.derivatives===!0,extensionFragDepth:Ne&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return vt.vertexUv1s=f.has(1),vt.vertexUv2s=f.has(2),vt.vertexUv3s=f.has(3),f.clear(),vt}function A(M){const U=[];if(M.shaderID?U.push(M.shaderID):(U.push(M.customVertexShaderID),U.push(M.customFragmentShaderID)),M.defines!==void 0)for(const V in M.defines)U.push(V),U.push(M.defines[V]);return M.isRawShaderMaterial===!1&&(T(U,M),E(U,M),U.push(i.outputColorSpace)),U.push(M.customProgramCacheKey),U.join()}function T(M,U){M.push(U.precision),M.push(U.outputColorSpace),M.push(U.envMapMode),M.push(U.envMapCubeUVHeight),M.push(U.mapUv),M.push(U.alphaMapUv),M.push(U.lightMapUv),M.push(U.aoMapUv),M.push(U.bumpMapUv),M.push(U.normalMapUv),M.push(U.displacementMapUv),M.push(U.emissiveMapUv),M.push(U.metalnessMapUv),M.push(U.roughnessMapUv),M.push(U.anisotropyMapUv),M.push(U.clearcoatMapUv),M.push(U.clearcoatNormalMapUv),M.push(U.clearcoatRoughnessMapUv),M.push(U.iridescenceMapUv),M.push(U.iridescenceThicknessMapUv),M.push(U.sheenColorMapUv),M.push(U.sheenRoughnessMapUv),M.push(U.specularMapUv),M.push(U.specularColorMapUv),M.push(U.specularIntensityMapUv),M.push(U.transmissionMapUv),M.push(U.thicknessMapUv),M.push(U.combine),M.push(U.fogExp2),M.push(U.sizeAttenuation),M.push(U.morphTargetsCount),M.push(U.morphAttributeCount),M.push(U.numDirLights),M.push(U.numPointLights),M.push(U.numSpotLights),M.push(U.numSpotLightMaps),M.push(U.numHemiLights),M.push(U.numRectAreaLights),M.push(U.numDirLightShadows),M.push(U.numPointLightShadows),M.push(U.numSpotLightShadows),M.push(U.numSpotLightShadowsWithMaps),M.push(U.numLightProbes),M.push(U.shadowMapType),M.push(U.toneMapping),M.push(U.numClippingPlanes),M.push(U.numClipIntersection),M.push(U.depthPacking)}function E(M,U){l.disableAll(),U.isWebGL2&&l.enable(0),U.supportsVertexTextures&&l.enable(1),U.instancing&&l.enable(2),U.instancingColor&&l.enable(3),U.matcap&&l.enable(4),U.envMap&&l.enable(5),U.normalMapObjectSpace&&l.enable(6),U.normalMapTangentSpace&&l.enable(7),U.clearcoat&&l.enable(8),U.iridescence&&l.enable(9),U.alphaTest&&l.enable(10),U.vertexColors&&l.enable(11),U.vertexAlphas&&l.enable(12),U.vertexUv1s&&l.enable(13),U.vertexUv2s&&l.enable(14),U.vertexUv3s&&l.enable(15),U.vertexTangents&&l.enable(16),U.anisotropy&&l.enable(17),U.alphaHash&&l.enable(18),U.batching&&l.enable(19),M.push(l.mask),l.disableAll(),U.fog&&l.enable(0),U.useFog&&l.enable(1),U.flatShading&&l.enable(2),U.logarithmicDepthBuffer&&l.enable(3),U.skinning&&l.enable(4),U.morphTargets&&l.enable(5),U.morphNormals&&l.enable(6),U.morphColors&&l.enable(7),U.premultipliedAlpha&&l.enable(8),U.shadowMapEnabled&&l.enable(9),U.useLegacyLights&&l.enable(10),U.doubleSided&&l.enable(11),U.flipSided&&l.enable(12),U.useDepthPacking&&l.enable(13),U.dithering&&l.enable(14),U.transmission&&l.enable(15),U.sheen&&l.enable(16),U.opaque&&l.enable(17),U.pointsUvs&&l.enable(18),U.decodeVideoTexture&&l.enable(19),U.alphaToCoverage&&l.enable(20),M.push(l.mask)}function C(M){const U=x[M.type];let V;if(U){const oe=qr[U];V=e4.clone(oe.uniforms)}else V=M.uniforms;return V}function R(M,U){let V;for(let oe=0,k=h.length;oe<k;oe++){const J=h[oe];if(J.cacheKey===U){V=J,++V.usedTimes;break}}return V===void 0&&(V=new m8(i,U,M,s),h.push(V)),V}function w(M){if(--M.usedTimes===0){const U=h.indexOf(M);h[U]=h[h.length-1],h.pop(),M.destroy()}}function z(M){u.remove(M)}function G(){u.dispose()}return{getParameters:v,getProgramCacheKey:A,getUniforms:C,acquireProgram:R,releaseProgram:w,releaseShaderCache:z,programs:h,dispose:G}}function y8(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,l){i.get(s)[o]=l}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function S8(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _M(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,m,g,y,x,_){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:m,material:g,groupOrder:y,renderOrder:p.renderOrder,z:x,group:_},i[e]=v):(v.id=p.id,v.object=p,v.geometry=m,v.material=g,v.groupOrder=y,v.renderOrder=p.renderOrder,v.z=x,v.group=_),e++,v}function l(p,m,g,y,x,_){const v=o(p,m,g,y,x,_);g.transmission>0?n.push(v):g.transparent===!0?r.push(v):t.push(v)}function u(p,m,g,y,x,_){const v=o(p,m,g,y,x,_);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):t.unshift(v)}function f(p,m){t.length>1&&t.sort(p||S8),n.length>1&&n.sort(m||gM),r.length>1&&r.sort(m||gM)}function h(){for(let p=e,m=i.length;p<m;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:l,unshift:u,finish:h,sort:f}}function E8(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new _M,i.set(n,[o])):r>=s.length?(o=new _M,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function M8(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Yt};break;case"SpotLight":t={position:new se,direction:new se,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":t={color:new Yt,position:new se,halfWidth:new se,halfHeight:new se};break}return i[e.id]=t,t}}}function b8(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let T8=0;function A8(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function w8(i,e){const t=new M8,n=b8(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new se);const s=new se,o=new Yn,l=new Yn;function u(h,p){let m=0,g=0,y=0;for(let V=0;V<9;V++)r.probe[V].set(0,0,0);let x=0,_=0,v=0,A=0,T=0,E=0,C=0,R=0,w=0,z=0,G=0;h.sort(A8);const M=p===!0?Math.PI:1;for(let V=0,oe=h.length;V<oe;V++){const k=h[V],J=k.color,j=k.intensity,te=k.distance,ie=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=J.r*j*M,g+=J.g*j*M,y+=J.b*j*M;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(k.sh.coefficients[ae],j);G++}else if(k.isDirectionalLight){const ae=t.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity*M),k.castShadow){const N=k.shadow,ce=n.get(k);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,r.directionalShadow[x]=ce,r.directionalShadowMap[x]=ie,r.directionalShadowMatrix[x]=k.shadow.matrix,E++}r.directional[x]=ae,x++}else if(k.isSpotLight){const ae=t.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(J).multiplyScalar(j*M),ae.distance=te,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,r.spot[v]=ae;const N=k.shadow;if(k.map&&(r.spotLightMap[w]=k.map,w++,N.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[v]=N.matrix,k.castShadow){const ce=n.get(k);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,r.spotShadow[v]=ce,r.spotShadowMap[v]=ie,R++}v++}else if(k.isRectAreaLight){const ae=t.get(k);ae.color.copy(J).multiplyScalar(j),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),r.rectArea[A]=ae,A++}else if(k.isPointLight){const ae=t.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity*M),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const N=k.shadow,ce=n.get(k);ce.shadowBias=N.bias,ce.shadowNormalBias=N.normalBias,ce.shadowRadius=N.radius,ce.shadowMapSize=N.mapSize,ce.shadowCameraNear=N.camera.near,ce.shadowCameraFar=N.camera.far,r.pointShadow[_]=ce,r.pointShadowMap[_]=ie,r.pointShadowMatrix[_]=k.shadow.matrix,C++}r.point[_]=ae,_++}else if(k.isHemisphereLight){const ae=t.get(k);ae.skyColor.copy(k.color).multiplyScalar(j*M),ae.groundColor.copy(k.groundColor).multiplyScalar(j*M),r.hemi[T]=ae,T++}}A>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=y;const U=r.hash;(U.directionalLength!==x||U.pointLength!==_||U.spotLength!==v||U.rectAreaLength!==A||U.hemiLength!==T||U.numDirectionalShadows!==E||U.numPointShadows!==C||U.numSpotShadows!==R||U.numSpotMaps!==w||U.numLightProbes!==G)&&(r.directional.length=x,r.spot.length=v,r.rectArea.length=A,r.point.length=_,r.hemi.length=T,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=R+w-z,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=G,U.directionalLength=x,U.pointLength=_,U.spotLength=v,U.rectAreaLength=A,U.hemiLength=T,U.numDirectionalShadows=E,U.numPointShadows=C,U.numSpotShadows=R,U.numSpotMaps=w,U.numLightProbes=G,r.version=T8++)}function f(h,p){let m=0,g=0,y=0,x=0,_=0;const v=p.matrixWorldInverse;for(let A=0,T=h.length;A<T;A++){const E=h[A];if(E.isDirectionalLight){const C=r.directional[m];C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),m++}else if(E.isSpotLight){const C=r.spot[y];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),C.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(v),y++}else if(E.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),l.identity(),o.copy(E.matrixWorld),o.premultiply(v),l.extractRotation(o),C.halfWidth.set(E.width*.5,0,0),C.halfHeight.set(0,E.height*.5,0),C.halfWidth.applyMatrix4(l),C.halfHeight.applyMatrix4(l),x++}else if(E.isPointLight){const C=r.point[g];C.position.setFromMatrixPosition(E.matrixWorld),C.position.applyMatrix4(v),g++}else if(E.isHemisphereLight){const C=r.hemi[_];C.direction.setFromMatrixPosition(E.matrixWorld),C.direction.transformDirection(v),_++}}}return{setup:u,setupView:f,state:r}}function vM(i,e){const t=new w8(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(p){n.push(p)}function l(p){r.push(p)}function u(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:f,pushLight:o,pushShadow:l}}function C8(i,e){let t=new WeakMap;function n(s,o=0){const l=t.get(s);let u;return l===void 0?(u=new vM(i,e),t.set(s,[u])):o>=l.length?(u=new vM(i,e),l.push(u)):u=l[o],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class R8 extends rd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bW,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class P8 extends rd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const L8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D8=`uniform sampler2D shadow_pass;
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
}`;function I8(i,e,t){let n=new $1;const r=new Bt,s=new Bt,o=new Hn,l=new R8({depthPacking:TW}),u=new P8,f={},h=t.maxTextureSize,p={[pa]:Ii,[Ii]:pa,[bs]:bs},m=new Is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:L8,fragmentShader:D8}),g=m.clone();g.defines.HORIZONTAL_PASS=1;const y=new ho;y.setAttribute("position",new ns(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Jr(y,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=S1;let v=this.type;this.render=function(R,w,z){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const G=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(la),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const oe=v!==ys&&this.type===ys,k=v===ys&&this.type!==ys;for(let J=0,j=R.length;J<j;J++){const te=R[J],ie=te.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const ae=ie.getFrameExtents();if(r.multiply(ae),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ae.x),r.x=s.x*ae.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ae.y),r.y=s.y*ae.y,ie.mapSize.y=s.y)),ie.map===null||oe===!0||k===!0){const ce=this.type!==ys?{minFilter:_i,magFilter:_i}:{};ie.map!==null&&ie.map.dispose(),ie.map=new co(r.x,r.y,ce),ie.map.texture.name=te.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const N=ie.getViewportCount();for(let ce=0;ce<N;ce++){const Se=ie.getViewport(ce);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),V.viewport(o),ie.updateMatrices(te,ce),n=ie.getFrustum(),E(w,z,ie.camera,te,this.type)}ie.isPointLightShadow!==!0&&this.type===ys&&A(ie,z),ie.needsUpdate=!1}v=this.type,_.needsUpdate=!1,i.setRenderTarget(G,M,U)};function A(R,w){const z=e.update(x);m.defines.VSM_SAMPLES!==R.blurSamples&&(m.defines.VSM_SAMPLES=R.blurSamples,g.defines.VSM_SAMPLES=R.blurSamples,m.needsUpdate=!0,g.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new co(r.x,r.y)),m.uniforms.shadow_pass.value=R.map.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,z,m,x,null),g.uniforms.shadow_pass.value=R.mapPass.texture,g.uniforms.resolution.value=R.mapSize,g.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,z,g,x,null)}function T(R,w,z,G){let M=null;const U=z.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(U!==void 0)M=U;else if(M=z.isPointLight===!0?u:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=M.uuid,oe=w.uuid;let k=f[V];k===void 0&&(k={},f[V]=k);let J=k[oe];J===void 0&&(J=M.clone(),k[oe]=J,w.addEventListener("dispose",C)),M=J}if(M.visible=w.visible,M.wireframe=w.wireframe,G===ys?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:p[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,z.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const V=i.properties.get(M);V.light=z}return M}function E(R,w,z,G,M){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===ys)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,R.matrixWorld);const oe=e.update(R),k=R.material;if(Array.isArray(k)){const J=oe.groups;for(let j=0,te=J.length;j<te;j++){const ie=J[j],ae=k[ie.materialIndex];if(ae&&ae.visible){const N=T(R,ae,G,M);R.onBeforeShadow(i,R,w,z,oe,N,ie),i.renderBufferDirect(z,null,oe,N,R,ie),R.onAfterShadow(i,R,w,z,oe,N,ie)}}}else if(k.visible){const J=T(R,k,G,M);R.onBeforeShadow(i,R,w,z,oe,J,null),i.renderBufferDirect(z,null,oe,J,R,null),R.onAfterShadow(i,R,w,z,oe,J,null)}}const V=R.children;for(let oe=0,k=V.length;oe<k;oe++)E(V[oe],w,z,G,M)}function C(R){R.target.removeEventListener("dispose",C);for(const z in f){const G=f[z],M=R.target.uuid;M in G&&(G[M].dispose(),delete G[M])}}}function O8(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const ve=new Hn;let xe=null;const Ne=new Hn(0,0,0,0);return{setMask:function(Ze){xe!==Ze&&!F&&(i.colorMask(Ze,Ze,Ze,Ze),xe=Ze)},setLocked:function(Ze){F=Ze},setClear:function(Ze,vt,It,qe,Ve){Ve===!0&&(Ze*=qe,vt*=qe,It*=qe),ve.set(Ze,vt,It,qe),Ne.equals(ve)===!1&&(i.clearColor(Ze,vt,It,qe),Ne.copy(ve))},reset:function(){F=!1,xe=null,Ne.set(-1,0,0,0)}}}function s(){let F=!1,ve=null,xe=null,Ne=null;return{setTest:function(Ze){Ze?Ce(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Ze){ve!==Ze&&!F&&(i.depthMask(Ze),ve=Ze)},setFunc:function(Ze){if(xe!==Ze){switch(Ze){case tW:i.depthFunc(i.NEVER);break;case nW:i.depthFunc(i.ALWAYS);break;case iW:i.depthFunc(i.LESS);break;case Oh:i.depthFunc(i.LEQUAL);break;case rW:i.depthFunc(i.EQUAL);break;case sW:i.depthFunc(i.GEQUAL);break;case aW:i.depthFunc(i.GREATER);break;case oW:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Ze}},setLocked:function(Ze){F=Ze},setClear:function(Ze){Ne!==Ze&&(i.clearDepth(Ze),Ne=Ze)},reset:function(){F=!1,ve=null,xe=null,Ne=null}}}function o(){let F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,It=null,qe=null,Ve=null;return{setTest:function(je){F||(je?Ce(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(je){ve!==je&&!F&&(i.stencilMask(je),ve=je)},setFunc:function(je,ye,nt){(xe!==je||Ne!==ye||Ze!==nt)&&(i.stencilFunc(je,ye,nt),xe=je,Ne=ye,Ze=nt)},setOp:function(je,ye,nt){(vt!==je||It!==ye||qe!==nt)&&(i.stencilOp(je,ye,nt),vt=je,It=ye,qe=nt)},setLocked:function(je){F=je},setClear:function(je){Ve!==je&&(i.clearStencil(je),Ve=je)},reset:function(){F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,It=null,qe=null,Ve=null}}}const l=new r,u=new s,f=new o,h=new WeakMap,p=new WeakMap;let m={},g={},y=new WeakMap,x=[],_=null,v=!1,A=null,T=null,E=null,C=null,R=null,w=null,z=null,G=new Yt(0,0,0),M=0,U=!1,V=null,oe=null,k=null,J=null,j=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ae=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(N)[1]),ie=ae>=1):N.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ie=ae>=2);let ce=null,Se={};const Je=i.getParameter(i.SCISSOR_BOX),ne=i.getParameter(i.VIEWPORT),ue=new Hn().fromArray(Je),Te=new Hn().fromArray(ne);function De(F,ve,xe,Ne){const Ze=new Uint8Array(4),vt=i.createTexture();i.bindTexture(F,vt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let It=0;It<xe;It++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(ve+It,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return vt}const Oe={};Oe[i.TEXTURE_2D]=De(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=De(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[i.TEXTURE_2D_ARRAY]=De(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=De(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ce(i.DEPTH_TEST),u.setFunc(Oh),et(!1),O(ZS),Ce(i.CULL_FACE),Ue(la);function Ce(F){m[F]!==!0&&(i.enable(F),m[F]=!0)}function gt(F){m[F]!==!1&&(i.disable(F),m[F]=!1)}function $e(F,ve){return g[F]!==ve?(i.bindFramebuffer(F,ve),g[F]=ve,n&&(F===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function q(F,ve){let xe=x,Ne=!1;if(F)if(xe=y.get(ve),xe===void 0&&(xe=[],y.set(ve,xe)),F.isWebGLMultipleRenderTargets){const Ze=F.texture;if(xe.length!==Ze.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,It=Ze.length;vt<It;vt++)xe[vt]=i.COLOR_ATTACHMENT0+vt;xe.length=Ze.length,Ne=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ne=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ne=!0);Ne&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function st(F){return _!==F?(i.useProgram(F),_=F,!0):!1}const be={[za]:i.FUNC_ADD,[kG]:i.FUNC_SUBTRACT,[HG]:i.FUNC_REVERSE_SUBTRACT};if(n)be[tE]=i.MIN,be[nE]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(be[tE]=F.MIN_EXT,be[nE]=F.MAX_EXT)}const Ge={[GG]:i.ZERO,[WG]:i.ONE,[VG]:i.SRC_COLOR,[Ug]:i.SRC_ALPHA,[KG]:i.SRC_ALPHA_SATURATE,[YG]:i.DST_COLOR,[XG]:i.DST_ALPHA,[$G]:i.ONE_MINUS_SRC_COLOR,[Ng]:i.ONE_MINUS_SRC_ALPHA,[jG]:i.ONE_MINUS_DST_COLOR,[qG]:i.ONE_MINUS_DST_ALPHA,[ZG]:i.CONSTANT_COLOR,[JG]:i.ONE_MINUS_CONSTANT_COLOR,[QG]:i.CONSTANT_ALPHA,[eW]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(F,ve,xe,Ne,Ze,vt,It,qe,Ve,je){if(F===la){v===!0&&(gt(i.BLEND),v=!1);return}if(v===!1&&(Ce(i.BLEND),v=!0),F!==zG){if(F!==A||je!==U){if((T!==za||R!==za)&&(i.blendEquation(i.FUNC_ADD),T=za,R=za),je)switch(F){case ml:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case JS:i.blendFunc(i.ONE,i.ONE);break;case QS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eE:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case JS:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case QS:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case eE:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}E=null,C=null,w=null,z=null,G.set(0,0,0),M=0,A=F,U=je}return}Ze=Ze||ve,vt=vt||xe,It=It||Ne,(ve!==T||Ze!==R)&&(i.blendEquationSeparate(be[ve],be[Ze]),T=ve,R=Ze),(xe!==E||Ne!==C||vt!==w||It!==z)&&(i.blendFuncSeparate(Ge[xe],Ge[Ne],Ge[vt],Ge[It]),E=xe,C=Ne,w=vt,z=It),(qe.equals(G)===!1||Ve!==M)&&(i.blendColor(qe.r,qe.g,qe.b,Ve),G.copy(qe),M=Ve),A=F,U=!1}function K(F,ve){F.side===bs?gt(i.CULL_FACE):Ce(i.CULL_FACE);let xe=F.side===Ii;ve&&(xe=!xe),et(xe),F.blending===ml&&F.transparent===!1?Ue(la):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),l.setMask(F.colorWrite);const Ne=F.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Y(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){V!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),V=F)}function O(F){F!==NG?(Ce(i.CULL_FACE),F!==oe&&(F===ZS?i.cullFace(i.BACK):F===FG?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),oe=F}function P(F){F!==k&&(ie&&i.lineWidth(F),k=F)}function Y(F,ve,xe){F?(Ce(i.POLYGON_OFFSET_FILL),(J!==ve||j!==xe)&&(i.polygonOffset(ve,xe),J=ve,j=xe)):gt(i.POLYGON_OFFSET_FILL)}function me(F){F?Ce(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function de(F){F===void 0&&(F=i.TEXTURE0+te-1),ce!==F&&(i.activeTexture(F),ce=F)}function _e(F,ve,xe){xe===void 0&&(ce===null?xe=i.TEXTURE0+te-1:xe=ce);let Ne=Se[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},Se[xe]=Ne),(Ne.type!==F||Ne.texture!==ve)&&(ce!==xe&&(i.activeTexture(xe),ce=xe),i.bindTexture(F,ve||Oe[F]),Ne.type=F,Ne.texture=ve)}function we(){const F=Se[ce];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ke(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function We(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ie(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(F){ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function _t(F){Te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Te.copy(F))}function Dt(F,ve){let xe=p.get(ve);xe===void 0&&(xe=new WeakMap,p.set(ve,xe));let Ne=xe.get(F);Ne===void 0&&(Ne=i.getUniformBlockIndex(ve,F.name),xe.set(F,Ne))}function Pe(F,ve){const Ne=p.get(ve).get(F);h.get(ve)!==Ne&&(i.uniformBlockBinding(ve,Ne,F.__bindingPointIndex),h.set(ve,Ne))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},ce=null,Se={},g={},y=new WeakMap,x=[],_=null,v=!1,A=null,T=null,E=null,C=null,R=null,w=null,z=null,G=new Yt(0,0,0),M=0,U=!1,V=null,oe=null,k=null,J=null,j=null,ue.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Ce,disable:gt,bindFramebuffer:$e,drawBuffers:q,useProgram:st,setBlending:Ue,setMaterial:K,setFlipSided:et,setCullFace:O,setLineWidth:P,setPolygonOffset:Y,setScissorTest:me,activeTexture:de,bindTexture:_e,unbindTexture:we,compressedTexImage2D:Ae,compressedTexImage3D:Ee,texImage2D:We,texImage3D:Ie,updateUBOMapping:Dt,uniformBlockBinding:Pe,texStorage2D:Xe,texStorage3D:at,texSubImage2D:ke,texSubImage3D:tt,compressedTexSubImage2D:pe,compressedTexSubImage3D:Tt,scissor:ot,viewport:_t,reset:Ct}}function U8(i,e,t,n,r,s,o){const l=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let p;const m=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,P){return g?new OffscreenCanvas(O,P):Zc("canvas")}function x(O,P,Y,me){let de=1;if((O.width>me||O.height>me)&&(de=me/Math.max(O.width,O.height)),de<1||P===!0)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap){const _e=P?Wg:Math.floor,we=_e(de*O.width),Ae=_e(de*O.height);p===void 0&&(p=y(we,Ae));const Ee=Y?y(we,Ae):p;return Ee.width=we,Ee.height=Ae,Ee.getContext("2d").drawImage(O,0,0,we,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+O.width+"x"+O.height+") to ("+we+"x"+Ae+")."),Ee}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+O.width+"x"+O.height+")."),O;return O}function _(O){return DE(O.width)&&DE(O.height)}function v(O){return l?!1:O.wrapS!==Ir||O.wrapT!==Ir||O.minFilter!==_i&&O.minFilter!==Cn}function A(O,P){return O.generateMipmaps&&P&&O.minFilter!==_i&&O.minFilter!==Cn}function T(O){i.generateMipmap(O)}function E(O,P,Y,me,de=!1){if(l===!1)return P;if(O!==null){if(i[O]!==void 0)return i[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let _e=P;if(P===i.RED&&(Y===i.FLOAT&&(_e=i.R32F),Y===i.HALF_FLOAT&&(_e=i.R16F),Y===i.UNSIGNED_BYTE&&(_e=i.R8)),P===i.RED_INTEGER&&(Y===i.UNSIGNED_BYTE&&(_e=i.R8UI),Y===i.UNSIGNED_SHORT&&(_e=i.R16UI),Y===i.UNSIGNED_INT&&(_e=i.R32UI),Y===i.BYTE&&(_e=i.R8I),Y===i.SHORT&&(_e=i.R16I),Y===i.INT&&(_e=i.R32I)),P===i.RG&&(Y===i.FLOAT&&(_e=i.RG32F),Y===i.HALF_FLOAT&&(_e=i.RG16F),Y===i.UNSIGNED_BYTE&&(_e=i.RG8)),P===i.RGBA){const we=de?Uh:qt.getTransfer(me);Y===i.FLOAT&&(_e=i.RGBA32F),Y===i.HALF_FLOAT&&(_e=i.RGBA16F),Y===i.UNSIGNED_BYTE&&(_e=we===sn?i.SRGB8_ALPHA8:i.RGBA8),Y===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),Y===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function C(O,P,Y){return A(O,Y)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==Cn?Math.log2(Math.max(P.width,P.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?P.mipmaps.length:1}function R(O){return O===_i||O===iE||O===mc?i.NEAREST:i.LINEAR}function w(O){const P=O.target;P.removeEventListener("dispose",w),G(P),P.isVideoTexture&&h.delete(P)}function z(O){const P=O.target;P.removeEventListener("dispose",z),U(P)}function G(O){const P=n.get(O);if(P.__webglInit===void 0)return;const Y=O.source,me=m.get(Y);if(me){const de=me[P.__cacheKey];de.usedTimes--,de.usedTimes===0&&M(O),Object.keys(me).length===0&&m.delete(Y)}n.remove(O)}function M(O){const P=n.get(O);i.deleteTexture(P.__webglTexture);const Y=O.source,me=m.get(Y);delete me[P.__cacheKey],o.memory.textures--}function U(O){const P=O.texture,Y=n.get(O),me=n.get(P);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),O.depthTexture&&O.depthTexture.dispose(),O.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(Y.__webglFramebuffer[de]))for(let _e=0;_e<Y.__webglFramebuffer[de].length;_e++)i.deleteFramebuffer(Y.__webglFramebuffer[de][_e]);else i.deleteFramebuffer(Y.__webglFramebuffer[de]);Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer[de])}else{if(Array.isArray(Y.__webglFramebuffer))for(let de=0;de<Y.__webglFramebuffer.length;de++)i.deleteFramebuffer(Y.__webglFramebuffer[de]);else i.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&i.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let de=0;de<Y.__webglColorRenderbuffer.length;de++)Y.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(Y.__webglColorRenderbuffer[de]);Y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(O.isWebGLMultipleRenderTargets)for(let de=0,_e=P.length;de<_e;de++){const we=n.get(P[de]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),o.memory.textures--),n.remove(P[de])}n.remove(P),n.remove(O)}let V=0;function oe(){V=0}function k(){const O=V;return O>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+r.maxTextures),V+=1,O}function J(O){const P=[];return P.push(O.wrapS),P.push(O.wrapT),P.push(O.wrapR||0),P.push(O.magFilter),P.push(O.minFilter),P.push(O.anisotropy),P.push(O.internalFormat),P.push(O.format),P.push(O.type),P.push(O.generateMipmaps),P.push(O.premultiplyAlpha),P.push(O.flipY),P.push(O.unpackAlignment),P.push(O.colorSpace),P.join()}function j(O,P){const Y=n.get(O);if(O.isVideoTexture&&K(O),O.isRenderTargetTexture===!1&&O.version>0&&Y.__version!==O.version){const me=O.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(Y,O,P);return}}t.bindTexture(i.TEXTURE_2D,Y.__webglTexture,i.TEXTURE0+P)}function te(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){ue(Y,O,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Y.__webglTexture,i.TEXTURE0+P)}function ie(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){ue(Y,O,P);return}t.bindTexture(i.TEXTURE_3D,Y.__webglTexture,i.TEXTURE0+P)}function ae(O,P){const Y=n.get(O);if(O.version>0&&Y.__version!==O.version){Te(Y,O,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture,i.TEXTURE0+P)}const N={[zg]:i.REPEAT,[Ir]:i.CLAMP_TO_EDGE,[kg]:i.MIRRORED_REPEAT},ce={[_i]:i.NEAREST,[iE]:i.NEAREST_MIPMAP_NEAREST,[mc]:i.NEAREST_MIPMAP_LINEAR,[Cn]:i.LINEAR,[ym]:i.LINEAR_MIPMAP_NEAREST,[Wa]:i.LINEAR_MIPMAP_LINEAR},Se={[CW]:i.NEVER,[OW]:i.ALWAYS,[RW]:i.LESS,[D1]:i.LEQUAL,[PW]:i.EQUAL,[IW]:i.GEQUAL,[LW]:i.GREATER,[DW]:i.NOTEQUAL};function Je(O,P,Y){if(P.type===Ts&&e.has("OES_texture_float_linear")===!1&&(P.magFilter===Cn||P.magFilter===ym||P.magFilter===mc||P.magFilter===Wa||P.minFilter===Cn||P.minFilter===ym||P.minFilter===mc||P.minFilter===Wa)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(i.texParameteri(O,i.TEXTURE_WRAP_S,N[P.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,N[P.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,N[P.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,ce[P.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,ce[P.minFilter])):(i.texParameteri(O,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(O,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==Ir||P.wrapT!==Ir)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(O,i.TEXTURE_MAG_FILTER,R(P.magFilter)),i.texParameteri(O,i.TEXTURE_MIN_FILTER,R(P.minFilter)),P.minFilter!==_i&&P.minFilter!==Cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),P.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,Se[P.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===_i||P.minFilter!==mc&&P.minFilter!==Wa||P.type===Ts&&e.has("OES_texture_float_linear")===!1||l===!1&&P.type===Kc&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(O,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function ne(O,P){let Y=!1;O.__webglInit===void 0&&(O.__webglInit=!0,P.addEventListener("dispose",w));const me=P.source;let de=m.get(me);de===void 0&&(de={},m.set(me,de));const _e=J(P);if(_e!==O.__cacheKey){de[_e]===void 0&&(de[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),de[_e].usedTimes++;const we=de[O.__cacheKey];we!==void 0&&(de[O.__cacheKey].usedTimes--,we.usedTimes===0&&M(P)),O.__cacheKey=_e,O.__webglTexture=de[_e].texture}return Y}function ue(O,P,Y){let me=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(me=i.TEXTURE_3D);const de=ne(O,P),_e=P.source;t.bindTexture(me,O.__webglTexture,i.TEXTURE0+Y);const we=n.get(_e);if(_e.version!==we.__version||de===!0){t.activeTexture(i.TEXTURE0+Y);const Ae=qt.getPrimaries(qt.workingColorSpace),Ee=P.colorSpace===gr?null:qt.getPrimaries(P.colorSpace),ke=P.colorSpace===gr||Ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const tt=v(P)&&_(P.image)===!1;let pe=x(P.image,tt,!1,r.maxTextureSize);pe=et(P,pe);const Tt=_(pe)||l,Xe=s.convert(P.format,P.colorSpace);let at=s.convert(P.type),We=E(P.internalFormat,Xe,at,P.colorSpace,P.isVideoTexture);Je(me,P,Tt);let Ie;const ot=P.mipmaps,_t=l&&P.isVideoTexture!==!0&&We!==P1,Dt=we.__version===void 0||de===!0,Pe=_e.dataReady,Ct=C(P,pe,Tt);if(P.isDepthTexture)We=i.DEPTH_COMPONENT,l?P.type===Ts?We=i.DEPTH_COMPONENT32F:P.type===ra?We=i.DEPTH_COMPONENT24:P.type===Ja?We=i.DEPTH24_STENCIL8:We=i.DEPTH_COMPONENT16:P.type===Ts&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Qa&&We===i.DEPTH_COMPONENT&&P.type!==tv&&P.type!==ra&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=ra,at=s.convert(P.type)),P.format===Cl&&We===i.DEPTH_COMPONENT&&(We=i.DEPTH_STENCIL,P.type!==Ja&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Ja,at=s.convert(P.type))),Dt&&(_t?t.texStorage2D(i.TEXTURE_2D,1,We,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,We,pe.width,pe.height,0,Xe,at,null));else if(P.isDataTexture)if(ot.length>0&&Tt){_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,ot[0].width,ot[0].height);for(let F=0,ve=ot.length;F<ve;F++)Ie=ot[F],_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,at,Ie.data):t.texImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Xe,at,Ie.data);P.generateMipmaps=!1}else _t?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Xe,at,pe.data)):t.texImage2D(i.TEXTURE_2D,0,We,pe.width,pe.height,0,Xe,at,pe.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){_t&&Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,We,ot[0].width,ot[0].height,pe.depth);for(let F=0,ve=ot.length;F<ve;F++)Ie=ot[F],P.format!==Or?Xe!==null?_t?Pe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,pe.depth,Xe,Ie.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,We,Ie.width,Ie.height,pe.depth,0,Ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,Ie.width,Ie.height,pe.depth,Xe,at,Ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,We,Ie.width,Ie.height,pe.depth,0,Xe,at,Ie.data)}else{_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,ot[0].width,ot[0].height);for(let F=0,ve=ot.length;F<ve;F++)Ie=ot[F],P.format!==Or?Xe!==null?_t?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,Ie.data):t.compressedTexImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Ie.width,Ie.height,Xe,at,Ie.data):t.texImage2D(i.TEXTURE_2D,F,We,Ie.width,Ie.height,0,Xe,at,Ie.data)}else if(P.isDataArrayTexture)_t?(Dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,We,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Xe,at,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,We,pe.width,pe.height,pe.depth,0,Xe,at,pe.data);else if(P.isData3DTexture)_t?(Dt&&t.texStorage3D(i.TEXTURE_3D,Ct,We,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Xe,at,pe.data)):t.texImage3D(i.TEXTURE_3D,0,We,pe.width,pe.height,pe.depth,0,Xe,at,pe.data);else if(P.isFramebufferTexture){if(Dt)if(_t)t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height);else{let F=pe.width,ve=pe.height;for(let xe=0;xe<Ct;xe++)t.texImage2D(i.TEXTURE_2D,xe,We,F,ve,0,Xe,at,null),F>>=1,ve>>=1}}else if(ot.length>0&&Tt){_t&&Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,ot[0].width,ot[0].height);for(let F=0,ve=ot.length;F<ve;F++)Ie=ot[F],_t?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Xe,at,Ie):t.texImage2D(i.TEXTURE_2D,F,We,Xe,at,Ie);P.generateMipmaps=!1}else _t?(Dt&&t.texStorage2D(i.TEXTURE_2D,Ct,We,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,at,pe)):t.texImage2D(i.TEXTURE_2D,0,We,Xe,at,pe);A(P,Tt)&&T(me),we.__version=_e.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function Te(O,P,Y){if(P.image.length!==6)return;const me=ne(O,P),de=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+Y);const _e=n.get(de);if(de.version!==_e.__version||me===!0){t.activeTexture(i.TEXTURE0+Y);const we=qt.getPrimaries(qt.workingColorSpace),Ae=P.colorSpace===gr?null:qt.getPrimaries(P.colorSpace),Ee=P.colorSpace===gr||we===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const ke=P.isCompressedTexture||P.image[0].isCompressedTexture,tt=P.image[0]&&P.image[0].isDataTexture,pe=[];for(let F=0;F<6;F++)!ke&&!tt?pe[F]=x(P.image[F],!1,!0,r.maxCubemapSize):pe[F]=tt?P.image[F].image:P.image[F],pe[F]=et(P,pe[F]);const Tt=pe[0],Xe=_(Tt)||l,at=s.convert(P.format,P.colorSpace),We=s.convert(P.type),Ie=E(P.internalFormat,at,We,P.colorSpace),ot=l&&P.isVideoTexture!==!0,_t=_e.__version===void 0||me===!0,Dt=de.dataReady;let Pe=C(P,Tt,Xe);Je(i.TEXTURE_CUBE_MAP,P,Xe);let Ct;if(ke){ot&&_t&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ie,Tt.width,Tt.height);for(let F=0;F<6;F++){Ct=pe[F].mipmaps;for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];P.format!==Or?at!==null?ot?Dt&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,at,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,Ie,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,at,We,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,Ie,xe.width,xe.height,0,at,We,xe.data)}}}else{Ct=P.mipmaps,ot&&_t&&(Ct.length>0&&Pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,Ie,pe[0].width,pe[0].height));for(let F=0;F<6;F++)if(tt){ot?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,pe[F].width,pe[F].height,at,We,pe[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ie,pe[F].width,pe[F].height,0,at,We,pe[F].data);for(let ve=0;ve<Ct.length;ve++){const Ne=Ct[ve].image[F].image;ot?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,Ne.width,Ne.height,at,We,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,Ie,Ne.width,Ne.height,0,at,We,Ne.data)}}else{ot?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,at,We,pe[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ie,at,We,pe[F]);for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];ot?Dt&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,at,We,xe.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,Ie,at,We,xe.image[F])}}}A(P,Xe)&&T(i.TEXTURE_CUBE_MAP),_e.__version=de.version,P.onUpdate&&P.onUpdate(P)}O.__version=P.version}function De(O,P,Y,me,de,_e){const we=s.convert(Y.format,Y.colorSpace),Ae=s.convert(Y.type),Ee=E(Y.internalFormat,we,Ae,Y.colorSpace);if(!n.get(P).__hasExternalTextures){const tt=Math.max(1,P.width>>_e),pe=Math.max(1,P.height>>_e);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,_e,Ee,tt,pe,P.depth,0,we,Ae,null):t.texImage2D(de,_e,Ee,tt,pe,0,we,Ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,O),Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,de,n.get(Y).__webglTexture,0,Ge(P)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,de,n.get(Y).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(O,P,Y){if(i.bindRenderbuffer(i.RENDERBUFFER,O),P.depthBuffer&&!P.stencilBuffer){let me=l===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(Y||Ue(P)){const de=P.depthTexture;de&&de.isDepthTexture&&(de.type===Ts?me=i.DEPTH_COMPONENT32F:de.type===ra&&(me=i.DEPTH_COMPONENT24));const _e=Ge(P);Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e,me,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,_e,me,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,O)}else if(P.depthBuffer&&P.stencilBuffer){const me=Ge(P);Y&&Ue(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,P.width,P.height):Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,O)}else{const me=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let de=0;de<me.length;de++){const _e=me[de],we=s.convert(_e.format,_e.colorSpace),Ae=s.convert(_e.type),Ee=E(_e.internalFormat,we,Ae,_e.colorSpace),ke=Ge(P);Y&&Ue(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ke,Ee,P.width,P.height):Ue(P)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ke,Ee,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(O,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,O),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),j(P.depthTexture,0);const me=n.get(P.depthTexture).__webglTexture,de=Ge(P);if(P.depthTexture.format===Qa)Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(P.depthTexture.format===Cl)Ue(P)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function gt(O){const P=n.get(O),Y=O.isWebGLCubeRenderTarget===!0;if(O.depthTexture&&!P.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ce(P.__webglFramebuffer,O)}else if(Y){P.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[me]),P.__webglDepthbuffer[me]=i.createRenderbuffer(),Oe(P.__webglDepthbuffer[me],O,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),Oe(P.__webglDepthbuffer,O,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(O,P,Y){const me=n.get(O);P!==void 0&&De(me.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Y!==void 0&&gt(O)}function q(O){const P=O.texture,Y=n.get(O),me=n.get(P);O.addEventListener("dispose",z),O.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=P.version,o.memory.textures++);const de=O.isWebGLCubeRenderTarget===!0,_e=O.isWebGLMultipleRenderTargets===!0,we=_(O)||l;if(de){Y.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(l&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer[Ae]=[];for(let Ee=0;Ee<P.mipmaps.length;Ee++)Y.__webglFramebuffer[Ae][Ee]=i.createFramebuffer()}else Y.__webglFramebuffer[Ae]=i.createFramebuffer()}else{if(l&&P.mipmaps&&P.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ae=0;Ae<P.mipmaps.length;Ae++)Y.__webglFramebuffer[Ae]=i.createFramebuffer()}else Y.__webglFramebuffer=i.createFramebuffer();if(_e)if(r.drawBuffers){const Ae=O.texture;for(let Ee=0,ke=Ae.length;Ee<ke;Ee++){const tt=n.get(Ae[Ee]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&O.samples>0&&Ue(O)===!1){const Ae=_e?P:[P];Y.__webglMultisampledFramebuffer=i.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ee=0;Ee<Ae.length;Ee++){const ke=Ae[Ee];Y.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee]);const tt=s.convert(ke.format,ke.colorSpace),pe=s.convert(ke.type),Tt=E(ke.internalFormat,tt,pe,ke.colorSpace,O.isXRRenderTarget===!0),Xe=Ge(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Tt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Y.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(Y.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(Y.__webglDepthRenderbuffer,O,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Je(i.TEXTURE_CUBE_MAP,P,we);for(let Ae=0;Ae<6;Ae++)if(l&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)De(Y.__webglFramebuffer[Ae][Ee],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ee);else De(Y.__webglFramebuffer[Ae],O,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);A(P,we)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){const Ae=O.texture;for(let Ee=0,ke=Ae.length;Ee<ke;Ee++){const tt=Ae[Ee],pe=n.get(tt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Je(i.TEXTURE_2D,tt,we),De(Y.__webglFramebuffer,O,tt,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),A(tt,we)&&T(i.TEXTURE_2D)}t.unbindTexture()}else{let Ae=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(l?Ae=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Ae,me.__webglTexture),Je(Ae,P,we),l&&P.mipmaps&&P.mipmaps.length>0)for(let Ee=0;Ee<P.mipmaps.length;Ee++)De(Y.__webglFramebuffer[Ee],O,P,i.COLOR_ATTACHMENT0,Ae,Ee);else De(Y.__webglFramebuffer,O,P,i.COLOR_ATTACHMENT0,Ae,0);A(P,we)&&T(Ae),t.unbindTexture()}O.depthBuffer&&gt(O)}function st(O){const P=_(O)||l,Y=O.isWebGLMultipleRenderTargets===!0?O.texture:[O.texture];for(let me=0,de=Y.length;me<de;me++){const _e=Y[me];if(A(_e,P)){const we=O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Ae=n.get(_e).__webglTexture;t.bindTexture(we,Ae),T(we),t.unbindTexture()}}}function be(O){if(l&&O.samples>0&&Ue(O)===!1){const P=O.isWebGLMultipleRenderTargets?O.texture:[O.texture],Y=O.width,me=O.height;let de=i.COLOR_BUFFER_BIT;const _e=[],we=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(O),Ee=O.isWebGLMultipleRenderTargets===!0;if(Ee)for(let ke=0;ke<P.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let ke=0;ke<P.length;ke++){_e.push(i.COLOR_ATTACHMENT0+ke),O.depthBuffer&&_e.push(we);const tt=Ae.__ignoreDepthValues!==void 0?Ae.__ignoreDepthValues:!1;if(tt===!1&&(O.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ke]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[we]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[we])),Ee){const pe=n.get(P[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,Y,me,0,0,Y,me,de,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,_e)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let ke=0;ke<P.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[ke]);const tt=n.get(P[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}}function Ge(O){return Math.min(r.maxSamples,O.samples)}function Ue(O){const P=n.get(O);return l&&O.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function K(O){const P=o.render.frame;h.get(O)!==P&&(h.set(O,P),O.update())}function et(O,P){const Y=O.colorSpace,me=O.format,de=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||O.format===Hg||Y!==Ds&&Y!==gr&&(qt.getTransfer(Y)===sn?l===!1?e.has("EXT_sRGB")===!0&&me===Or?(O.format=Hg,O.minFilter=Cn,O.generateMipmaps=!1):P=O1.sRGBToLinear(P):(me!==Or||de!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),P}this.allocateTextureUnit=k,this.resetTextureUnits=oe,this.setTexture2D=j,this.setTexture2DArray=te,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=$e,this.setupRenderTarget=q,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=gt,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ue}function N8(i,e,t){const n=t.isWebGL2;function r(s,o=gr){let l;const u=qt.getTransfer(o);if(s===ua)return i.UNSIGNED_BYTE;if(s===T1)return i.UNSIGNED_SHORT_4_4_4_4;if(s===A1)return i.UNSIGNED_SHORT_5_5_5_1;if(s===gW)return i.BYTE;if(s===_W)return i.SHORT;if(s===tv)return i.UNSIGNED_SHORT;if(s===b1)return i.INT;if(s===ra)return i.UNSIGNED_INT;if(s===Ts)return i.FLOAT;if(s===Kc)return n?i.HALF_FLOAT:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===vW)return i.ALPHA;if(s===Or)return i.RGBA;if(s===xW)return i.LUMINANCE;if(s===yW)return i.LUMINANCE_ALPHA;if(s===Qa)return i.DEPTH_COMPONENT;if(s===Cl)return i.DEPTH_STENCIL;if(s===Hg)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===SW)return i.RED;if(s===w1)return i.RED_INTEGER;if(s===EW)return i.RG;if(s===C1)return i.RG_INTEGER;if(s===R1)return i.RGBA_INTEGER;if(s===Sm||s===Em||s===Mm||s===bm)if(u===sn)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Sm)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Em)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mm)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bm)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Sm)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Em)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mm)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bm)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rE||s===sE||s===aE||s===oE)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===rE)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sE)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===aE)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===oE)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===P1)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lE||s===cE)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===lE)return u===sn?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===cE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===uE||s===fE||s===hE||s===dE||s===pE||s===mE||s===gE||s===_E||s===vE||s===xE||s===yE||s===SE||s===EE||s===ME)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===uE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_E)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===SE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===EE)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ME)return u===sn?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Tm||s===bE||s===TE)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Tm)return u===sn?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===bE)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===TE)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===MW||s===AE||s===wE||s===CE)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Tm)return l.COMPRESSED_RED_RGTC1_EXT;if(s===AE)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wE)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===CE)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ja?n?i.UNSIGNED_INT_24_8:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class F8 extends mr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kf extends Zi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const B8={type:"move"};class Km{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const l=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){o=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n),v=this._getHandJoint(f,x);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const h=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],m=h.position.distanceTo(p.position),g=.02,y=.005;f.inputState.pinching&&m>g+y?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&m<=g-y&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(B8)))}return l!==null&&(l.visible=r!==null),u!==null&&(u.visible=s!==null),f!==null&&(f.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const z8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,k8=`
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

}`;class H8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new oi,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Is({extensions:{fragDepth:!0},vertexShader:z8,fragmentShader:k8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jr(new uu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class G8 extends Bl{constructor(e,t){super();const n=this;let r=null,s=1,o=null,l="local-floor",u=1,f=null,h=null,p=null,m=null,g=null,y=null;const x=new H8,_=t.getContextAttributes();let v=null,A=null;const T=[],E=[],C=new Bt;let R=null;const w=new mr;w.layers.enable(1),w.viewport=new Hn;const z=new mr;z.layers.enable(2),z.viewport=new Hn;const G=[w,z],M=new F8;M.layers.enable(1),M.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=T[ne];return ue===void 0&&(ue=new Km,T[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=T[ne];return ue===void 0&&(ue=new Km,T[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=T[ne];return ue===void 0&&(ue=new Km,T[ne]=ue),ue.getHandSpace()};function oe(ne){const ue=E.indexOf(ne.inputSource);if(ue===-1)return;const Te=T[ue];Te!==void 0&&(Te.update(ne.inputSource,ne.frame,f||o),Te.dispatchEvent({type:ne.type,data:ne.inputSource}))}function k(){r.removeEventListener("select",oe),r.removeEventListener("selectstart",oe),r.removeEventListener("selectend",oe),r.removeEventListener("squeeze",oe),r.removeEventListener("squeezestart",oe),r.removeEventListener("squeezeend",oe),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",J);for(let ne=0;ne<T.length;ne++){const ue=E[ne];ue!==null&&(E[ne]=null,T[ne].disconnect(ue))}U=null,V=null,x.reset(),e.setRenderTarget(v),g=null,m=null,p=null,r=null,A=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){l=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||o},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return m!==null?m:g},this.getBinding=function(){return p},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",oe),r.addEventListener("selectstart",oe),r.addEventListener("selectend",oe),r.addEventListener("squeeze",oe),r.addEventListener("squeezestart",oe),r.addEventListener("squeezeend",oe),r.addEventListener("end",k),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),A=new co(g.framebufferWidth,g.framebufferHeight,{format:Or,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let ue=null,Te=null,De=null;_.depth&&(De=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=_.stencil?Cl:Qa,Te=_.stencil?Ja:ra);const Oe={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:s};p=new XRWebGLBinding(r,t),m=p.createProjectionLayer(Oe),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),A=new co(m.textureWidth,m.textureHeight,{format:Or,type:ua,depthTexture:new q1(m.textureWidth,m.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const Ce=e.properties.get(A);Ce.__ignoreDepthValues=m.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(u),f=null,o=await r.requestReferenceSpace(l),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function J(ne){for(let ue=0;ue<ne.removed.length;ue++){const Te=ne.removed[ue],De=E.indexOf(Te);De>=0&&(E[De]=null,T[De].disconnect(Te))}for(let ue=0;ue<ne.added.length;ue++){const Te=ne.added[ue];let De=E.indexOf(Te);if(De===-1){for(let Ce=0;Ce<T.length;Ce++)if(Ce>=E.length){E.push(Te),De=Ce;break}else if(E[Ce]===null){E[Ce]=Te,De=Ce;break}if(De===-1)break}const Oe=T[De];Oe&&Oe.connect(Te)}}const j=new se,te=new se;function ie(ne,ue,Te){j.setFromMatrixPosition(ue.matrixWorld),te.setFromMatrixPosition(Te.matrixWorld);const De=j.distanceTo(te),Oe=ue.projectionMatrix.elements,Ce=Te.projectionMatrix.elements,gt=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),q=(Oe[9]+1)/Oe[5],st=(Oe[9]-1)/Oe[5],be=(Oe[8]-1)/Oe[0],Ge=(Ce[8]+1)/Ce[0],Ue=gt*be,K=gt*Ge,et=De/(-be+Ge),O=et*-be;ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(O),ne.translateZ(et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert();const P=gt+et,Y=$e+et,me=Ue-O,de=K+(De-O),_e=q*$e/Y*P,we=st*$e/Y*P;ne.projectionMatrix.makePerspective(me,de,_e,we,P,Y),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}function ae(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;x.texture!==null&&(ne.near=x.depthNear,ne.far=x.depthFar),M.near=z.near=w.near=ne.near,M.far=z.far=w.far=ne.far,(U!==M.near||V!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),U=M.near,V=M.far,w.near=U,w.far=V,z.near=U,z.far=V,w.updateProjectionMatrix(),z.updateProjectionMatrix(),ne.updateProjectionMatrix());const ue=ne.parent,Te=M.cameras;ae(M,ue);for(let De=0;De<Te.length;De++)ae(Te[De],ue);Te.length===2?ie(M,w,z):M.projectionMatrix.copy(w.projectionMatrix),N(ne,M,ue)};function N(ne,ue,Te){Te===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(Te.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Gg*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(m===null&&g===null))return u},this.setFoveation=function(ne){u=ne,m!==null&&(m.fixedFoveation=ne),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null};let ce=null;function Se(ne,ue){if(h=ue.getViewerPose(f||o),y=ue,h!==null){const Te=h.views;g!==null&&(e.setRenderTargetFramebuffer(A,g.framebuffer),e.setRenderTarget(A));let De=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,De=!0);for(let Ce=0;Ce<Te.length;Ce++){const gt=Te[Ce];let $e=null;if(g!==null)$e=g.getViewport(gt);else{const st=p.getViewSubImage(m,gt);$e=st.viewport,Ce===0&&(e.setRenderTargetTextures(A,st.colorTexture,m.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(A))}let q=G[Ce];q===void 0&&(q=new mr,q.layers.enable(Ce),q.viewport=new Hn,G[Ce]=q),q.matrix.fromArray(gt.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(gt.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set($e.x,$e.y,$e.width,$e.height),Ce===0&&(M.matrix.copy(q.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),De===!0&&M.cameras.push(q)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ce=p.getDepthInformation(Te[0]);Ce&&Ce.isValid&&Ce.texture&&x.init(e,Ce,r.renderState)}}for(let Te=0;Te<T.length;Te++){const De=E[Te],Oe=T[Te];De!==null&&Oe!==void 0&&Oe.update(De,ue,f||o)}x.render(e,M),ce&&ce(ne,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),y=null}const Je=new X1;Je.setAnimationLoop(Se),this.setAnimationLoop=function(ne){ce=ne},this.dispose=function(){}}}function W8(i,e){function t(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function n(_,v){v.color.getRGB(_.fogColor.value,G1(i)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function r(_,v,A,T,E){v.isMeshBasicMaterial||v.isMeshLambertMaterial?s(_,v):v.isMeshToonMaterial?(s(_,v),p(_,v)):v.isMeshPhongMaterial?(s(_,v),h(_,v)):v.isMeshStandardMaterial?(s(_,v),m(_,v),v.isMeshPhysicalMaterial&&g(_,v,E)):v.isMeshMatcapMaterial?(s(_,v),y(_,v)):v.isMeshDepthMaterial?s(_,v):v.isMeshDistanceMaterial?(s(_,v),x(_,v)):v.isMeshNormalMaterial?s(_,v):v.isLineBasicMaterial?(o(_,v),v.isLineDashedMaterial&&l(_,v)):v.isPointsMaterial?u(_,v,A,T):v.isSpriteMaterial?f(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function s(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,t(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Ii&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,t(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Ii&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,t(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,t(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const A=e.get(v).envMap;if(A&&(_.envMap.value=A,_.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap){_.lightMap.value=v.lightMap;const T=i._useLegacyLights===!0?Math.PI:1;_.lightMapIntensity.value=v.lightMapIntensity*T,t(v.lightMap,_.lightMapTransform)}v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,_.aoMapTransform))}function o(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform))}function l(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function u(_,v,A,T){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*A,_.scale.value=T*.5,v.map&&(_.map.value=v.map,t(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function f(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,t(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,t(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function h(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function p(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function m(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,_.roughnessMapTransform)),e.get(v).envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function g(_,v,A){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ii&&_.clearcoatNormalScale.value.negate())),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=A.texture,_.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,v){v.matcap&&(_.matcap.value=v.matcap)}function x(_,v){const A=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(A.matrixWorld),_.nearDistance.value=A.shadow.camera.near,_.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function V8(i,e,t,n){let r={},s={},o=[];const l=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(A,T){const E=T.program;n.uniformBlockBinding(A,E)}function f(A,T){let E=r[A.id];E===void 0&&(y(A),E=h(A),r[A.id]=E,A.addEventListener("dispose",_));const C=T.program;n.updateUBOMapping(A,C);const R=e.render.frame;s[A.id]!==R&&(m(A),s[A.id]=R)}function h(A){const T=p();A.__bindingPointIndex=T;const E=i.createBuffer(),C=A.__size,R=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,E),E}function p(){for(let A=0;A<l;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(A){const T=r[A.id],E=A.uniforms,C=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let R=0,w=E.length;R<w;R++){const z=Array.isArray(E[R])?E[R]:[E[R]];for(let G=0,M=z.length;G<M;G++){const U=z[G];if(g(U,R,G,C)===!0){const V=U.__offset,oe=Array.isArray(U.value)?U.value:[U.value];let k=0;for(let J=0;J<oe.length;J++){const j=oe[J],te=x(j);typeof j=="number"||typeof j=="boolean"?(U.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,V+k,U.__data)):j.isMatrix3?(U.__data[0]=j.elements[0],U.__data[1]=j.elements[1],U.__data[2]=j.elements[2],U.__data[3]=0,U.__data[4]=j.elements[3],U.__data[5]=j.elements[4],U.__data[6]=j.elements[5],U.__data[7]=0,U.__data[8]=j.elements[6],U.__data[9]=j.elements[7],U.__data[10]=j.elements[8],U.__data[11]=0):(j.toArray(U.__data,k),k+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(A,T,E,C){const R=A.value,w=T+"_"+E;if(C[w]===void 0)return typeof R=="number"||typeof R=="boolean"?C[w]=R:C[w]=R.clone(),!0;{const z=C[w];if(typeof R=="number"||typeof R=="boolean"){if(z!==R)return C[w]=R,!0}else if(z.equals(R)===!1)return z.copy(R),!0}return!1}function y(A){const T=A.uniforms;let E=0;const C=16;for(let w=0,z=T.length;w<z;w++){const G=Array.isArray(T[w])?T[w]:[T[w]];for(let M=0,U=G.length;M<U;M++){const V=G[M],oe=Array.isArray(V.value)?V.value:[V.value];for(let k=0,J=oe.length;k<J;k++){const j=oe[k],te=x(j),ie=E%C;ie!==0&&C-ie<te.boundary&&(E+=C-ie),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=E,E+=te.storage}}}const R=E%C;return R>0&&(E+=C-R),A.__size=E,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function _(A){const T=A.target;T.removeEventListener("dispose",_);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function v(){for(const A in r)i.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:u,update:f,dispose:v}}class Q1{constructor(e={}){const{canvas:t=NW(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:l=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let m;n!==null?m=n.getContextAttributes().alpha:m=o;const g=new Uint32Array(4),y=new Int32Array(4);let x=null,_=null;const v=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this._useLegacyLights=!1,this.toneMapping=ca,this.toneMappingExposure=1;const T=this;let E=!1,C=0,R=0,w=null,z=-1,G=null;const M=new Hn,U=new Hn;let V=null;const oe=new Yt(0);let k=0,J=t.width,j=t.height,te=1,ie=null,ae=null;const N=new Hn(0,0,J,j),ce=new Hn(0,0,J,j);let Se=!1;const Je=new $1;let ne=!1,ue=!1,Te=null;const De=new Yn,Oe=new Bt,Ce=new se,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return w===null?te:1}let q=n;function st(I,$){for(let ee=0;ee<I.length;ee++){const Q=I[ee],Z=t.getContext(Q,$);if(Z!==null)return Z}return null}try{const I={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ev}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ve,!1),q===null){const $=["webgl2","webgl","experimental-webgl"];if(T.isWebGL1Renderer===!0&&$.shift(),q=st($,I),q===null)throw st($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&q instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),q.getShaderPrecisionFormat===void 0&&(q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let be,Ge,Ue,K,et,O,P,Y,me,de,_e,we,Ae,Ee,ke,tt,pe,Tt,Xe,at,We,Ie,ot,_t;function Dt(){be=new Z5(q),Ge=new V5(q,be,e),be.init(Ge),Ie=new N8(q,be,Ge),Ue=new O8(q,be,Ge),K=new e$(q),et=new y8,O=new U8(q,be,Ue,et,Ge,Ie,K),P=new X5(T),Y=new K5(T),me=new o4(q,Ge),ot=new G5(q,be,me,Ge),de=new J5(q,me,K,ot),_e=new r$(q,de,me,K),Xe=new i$(q,Ge,O),tt=new $5(et),we=new x8(T,P,Y,be,Ge,ot,tt),Ae=new W8(T,et),Ee=new E8,ke=new C8(be,Ge),Tt=new H5(T,P,Y,Ue,_e,m,u),pe=new I8(T,_e,Ge),_t=new V8(q,K,Ge,Ue),at=new W5(q,be,K,Ge),We=new Q5(q,be,K,Ge),K.programs=we.programs,T.capabilities=Ge,T.extensions=be,T.properties=et,T.renderLists=Ee,T.shadowMap=pe,T.state=Ue,T.info=K}Dt();const Pe=new G8(T,q);this.xr=Pe,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const I=be.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=be.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(I){I!==void 0&&(te=I,this.setSize(J,j,!1))},this.getSize=function(I){return I.set(J,j)},this.setSize=function(I,$,ee=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=I,j=$,t.width=Math.floor(I*te),t.height=Math.floor($*te),ee===!0&&(t.style.width=I+"px",t.style.height=$+"px"),this.setViewport(0,0,I,$)},this.getDrawingBufferSize=function(I){return I.set(J*te,j*te).floor()},this.setDrawingBufferSize=function(I,$,ee){J=I,j=$,te=ee,t.width=Math.floor(I*ee),t.height=Math.floor($*ee),this.setViewport(0,0,I,$)},this.getCurrentViewport=function(I){return I.copy(M)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,$,ee,Q){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,$,ee,Q),Ue.viewport(M.copy(N).multiplyScalar(te).floor())},this.getScissor=function(I){return I.copy(ce)},this.setScissor=function(I,$,ee,Q){I.isVector4?ce.set(I.x,I.y,I.z,I.w):ce.set(I,$,ee,Q),Ue.scissor(U.copy(ce).multiplyScalar(te).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(I){Ue.setScissorTest(Se=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){ae=I},this.getClearColor=function(I){return I.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(I=!0,$=!0,ee=!0){let Q=0;if(I){let Z=!1;if(w!==null){const Me=w.texture.format;Z=Me===R1||Me===C1||Me===w1}if(Z){const Me=w.texture.type,Fe=Me===ua||Me===ra||Me===tv||Me===Ja||Me===T1||Me===A1,it=Tt.getClearColor(),Be=Tt.getClearAlpha(),Ye=it.r,rt=it.g,ht=it.b;Fe?(g[0]=Ye,g[1]=rt,g[2]=ht,g[3]=Be,q.clearBufferuiv(q.COLOR,0,g)):(y[0]=Ye,y[1]=rt,y[2]=ht,y[3]=Be,q.clearBufferiv(q.COLOR,0,y))}else Q|=q.COLOR_BUFFER_BIT}$&&(Q|=q.DEPTH_BUFFER_BIT),ee&&(Q|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ee.dispose(),ke.dispose(),et.dispose(),P.dispose(),Y.dispose(),_e.dispose(),ot.dispose(),_t.dispose(),we.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",Ve),Pe.removeEventListener("sessionend",je),Te&&(Te.dispose(),Te=null),ye.stop()};function Ct(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const I=K.autoReset,$=pe.enabled,ee=pe.autoUpdate,Q=pe.needsUpdate,Z=pe.type;Dt(),K.autoReset=I,pe.enabled=$,pe.autoUpdate=ee,pe.needsUpdate=Q,pe.type=Z}function ve(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function xe(I){const $=I.target;$.removeEventListener("dispose",xe),Ne($)}function Ne(I){Ze(I),et.remove(I)}function Ze(I){const $=et.get(I).programs;$!==void 0&&($.forEach(function(ee){we.releaseProgram(ee)}),I.isShaderMaterial&&we.releaseShaderCache(I))}this.renderBufferDirect=function(I,$,ee,Q,Z,Me){$===null&&($=gt);const Fe=Z.isMesh&&Z.matrixWorld.determinant()<0,it=Xt(I,$,ee,Q,Z);Ue.setMaterial(Q,Fe);let Be=ee.index,Ye=1;if(Q.wireframe===!0){if(Be=de.getWireframeAttribute(ee),Be===void 0)return;Ye=2}const rt=ee.drawRange,ht=ee.attributes.position;let Kt=rt.start*Ye,mn=(rt.start+rt.count)*Ye;Me!==null&&(Kt=Math.max(Kt,Me.start*Ye),mn=Math.min(mn,(Me.start+Me.count)*Ye)),Be!==null?(Kt=Math.max(Kt,0),mn=Math.min(mn,Be.count)):ht!=null&&(Kt=Math.max(Kt,0),mn=Math.min(mn,ht.count));const Ft=mn-Kt;if(Ft<0||Ft===1/0)return;ot.setup(Z,Q,it,ee,Be);let Wn,Ht=at;if(Be!==null&&(Wn=me.get(Be),Ht=We,Ht.setIndex(Wn)),Z.isMesh)Q.wireframe===!0?(Ue.setLineWidth(Q.wireframeLinewidth*$e()),Ht.setMode(q.LINES)):Ht.setMode(q.TRIANGLES);else if(Z.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),Ue.setLineWidth(dt*$e()),Z.isLineSegments?Ht.setMode(q.LINES):Z.isLineLoop?Ht.setMode(q.LINE_LOOP):Ht.setMode(q.LINE_STRIP)}else Z.isPoints?Ht.setMode(q.POINTS):Z.isSprite&&Ht.setMode(q.TRIANGLES);if(Z.isBatchedMesh)Ht.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else if(Z.isInstancedMesh)Ht.renderInstances(Kt,Ft,Z.count);else if(ee.isInstancedBufferGeometry){const dt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,kl=Math.min(ee.instanceCount,dt);Ht.renderInstances(Kt,Ft,kl)}else Ht.render(Kt,Ft)};function vt(I,$,ee){I.transparent===!0&&I.side===bs&&I.forceSinglePass===!1?(I.side=Ii,I.needsUpdate=!0,$t(I,$,ee),I.side=pa,I.needsUpdate=!0,$t(I,$,ee),I.side=bs):$t(I,$,ee)}this.compile=function(I,$,ee=null){ee===null&&(ee=I),_=ke.get(ee),_.init(),A.push(_),ee.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),I!==ee&&I.traverseVisible(function(Z){Z.isLight&&Z.layers.test($.layers)&&(_.pushLight(Z),Z.castShadow&&_.pushShadow(Z))}),_.setupLights(T._useLegacyLights);const Q=new Set;return I.traverse(function(Z){const Me=Z.material;if(Me)if(Array.isArray(Me))for(let Fe=0;Fe<Me.length;Fe++){const it=Me[Fe];vt(it,ee,Z),Q.add(it)}else vt(Me,ee,Z),Q.add(Me)}),A.pop(),_=null,Q},this.compileAsync=function(I,$,ee=null){const Q=this.compile(I,$,ee);return new Promise(Z=>{function Me(){if(Q.forEach(function(Fe){et.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){Z(I);return}setTimeout(Me,10)}be.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let It=null;function qe(I){It&&It(I)}function Ve(){ye.stop()}function je(){ye.start()}const ye=new X1;ye.setAnimationLoop(qe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(I){It=I,Pe.setAnimationLoop(I),I===null?ye.stop():ye.start()},Pe.addEventListener("sessionstart",Ve),Pe.addEventListener("sessionend",je),this.render=function(I,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera($),$=Pe.getCamera()),I.isScene===!0&&I.onBeforeRender(T,I,$,w),_=ke.get(I,A.length),_.init(),A.push(_),De.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Je.setFromProjectionMatrix(De),ue=this.localClippingEnabled,ne=tt.init(this.clippingPlanes,ue),x=Ee.get(I,v.length),x.init(),v.push(x),nt(I,$,0,T.sortObjects),x.finish(),T.sortObjects===!0&&x.sort(ie,ae),this.info.render.frame++,ne===!0&&tt.beginShadows();const ee=_.state.shadowsArray;if(pe.render(ee,I,$),ne===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&Tt.render(x,I),_.setupLights(T._useLegacyLights),$.isArrayCamera){const Q=$.cameras;for(let Z=0,Me=Q.length;Z<Me;Z++){const Fe=Q[Z];Qe(x,I,Fe,Fe.viewport)}}else Qe(x,I,$);w!==null&&(O.updateMultisampleRenderTarget(w),O.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(T,I,$),ot.resetDefaultState(),z=-1,G=null,A.pop(),A.length>0?_=A[A.length-1]:_=null,v.pop(),v.length>0?x=v[v.length-1]:x=null};function nt(I,$,ee,Q){if(I.visible===!1)return;if(I.layers.test($.layers)){if(I.isGroup)ee=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update($);else if(I.isLight)_.pushLight(I),I.castShadow&&_.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||Je.intersectsSprite(I)){Q&&Ce.setFromMatrixPosition(I.matrixWorld).applyMatrix4(De);const Fe=_e.update(I),it=I.material;it.visible&&x.push(I,Fe,it,ee,Ce.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||Je.intersectsObject(I))){const Fe=_e.update(I),it=I.material;if(Q&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Ce.copy(I.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ce.copy(Fe.boundingSphere.center)),Ce.applyMatrix4(I.matrixWorld).applyMatrix4(De)),Array.isArray(it)){const Be=Fe.groups;for(let Ye=0,rt=Be.length;Ye<rt;Ye++){const ht=Be[Ye],Kt=it[ht.materialIndex];Kt&&Kt.visible&&x.push(I,Fe,Kt,ee,Ce.z,ht)}}else it.visible&&x.push(I,Fe,it,ee,Ce.z,null)}}const Me=I.children;for(let Fe=0,it=Me.length;Fe<it;Fe++)nt(Me[Fe],$,ee,Q)}function Qe(I,$,ee,Q){const Z=I.opaque,Me=I.transmissive,Fe=I.transparent;_.setupLightsView(ee),ne===!0&&tt.setGlobalState(T.clippingPlanes,ee),Me.length>0&&ft(Z,Me,$,ee),Q&&Ue.viewport(M.copy(Q)),Z.length>0&&tn(Z,$,ee),Me.length>0&&tn(Me,$,ee),Fe.length>0&&tn(Fe,$,ee),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ft(I,$,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Me=Ge.isWebGL2;Te===null&&(Te=new co(1,1,{generateMipmaps:!0,type:be.has("EXT_color_buffer_half_float")?Kc:ua,minFilter:Wa,samples:Me?4:0})),T.getDrawingBufferSize(Oe),Me?Te.setSize(Oe.x,Oe.y):Te.setSize(Wg(Oe.x),Wg(Oe.y));const Fe=T.getRenderTarget();T.setRenderTarget(Te),T.getClearColor(oe),k=T.getClearAlpha(),k<1&&T.setClearColor(16777215,.5),T.clear();const it=T.toneMapping;T.toneMapping=ca,tn(I,ee,Q),O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te);let Be=!1;for(let Ye=0,rt=$.length;Ye<rt;Ye++){const ht=$[Ye],Kt=ht.object,mn=ht.geometry,Ft=ht.material,Wn=ht.group;if(Ft.side===bs&&Kt.layers.test(Q.layers)){const Ht=Ft.side;Ft.side=Ii,Ft.needsUpdate=!0,St(Kt,ee,Q,mn,Ft,Wn),Ft.side=Ht,Ft.needsUpdate=!0,Be=!0}}Be===!0&&(O.updateMultisampleRenderTarget(Te),O.updateRenderTargetMipmap(Te)),T.setRenderTarget(Fe),T.setClearColor(oe,k),T.toneMapping=it}function tn(I,$,ee){const Q=$.isScene===!0?$.overrideMaterial:null;for(let Z=0,Me=I.length;Z<Me;Z++){const Fe=I[Z],it=Fe.object,Be=Fe.geometry,Ye=Q===null?Fe.material:Q,rt=Fe.group;it.layers.test(ee.layers)&&St(it,$,ee,Be,Ye,rt)}}function St(I,$,ee,Q,Z,Me){I.onBeforeRender(T,$,ee,Q,Z,Me),I.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),Z.onBeforeRender(T,$,ee,Q,I,Me),Z.transparent===!0&&Z.side===bs&&Z.forceSinglePass===!1?(Z.side=Ii,Z.needsUpdate=!0,T.renderBufferDirect(ee,$,Q,Z,I,Me),Z.side=pa,Z.needsUpdate=!0,T.renderBufferDirect(ee,$,Q,Z,I,Me),Z.side=bs):T.renderBufferDirect(ee,$,Q,Z,I,Me),I.onAfterRender(T,$,ee,Q,Z,Me)}function $t(I,$,ee){$.isScene!==!0&&($=gt);const Q=et.get(I),Z=_.state.lights,Me=_.state.shadowsArray,Fe=Z.state.version,it=we.getParameters(I,Z.state,Me,$,ee),Be=we.getProgramCacheKey(it);let Ye=Q.programs;Q.environment=I.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(I.isMeshStandardMaterial?Y:P).get(I.envMap||Q.environment),Ye===void 0&&(I.addEventListener("dispose",xe),Ye=new Map,Q.programs=Ye);let rt=Ye.get(Be);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Fe)return jt(I,it),rt}else it.uniforms=we.getUniforms(I),I.onBuild(ee,it,T),I.onBeforeCompile(it,T),rt=we.acquireProgram(it,Be),Ye.set(Be,rt),Q.uniforms=it.uniforms;const ht=Q.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ht.clippingPlanes=tt.uniform),jt(I,it),Q.needsLights=Zn(I),Q.lightsStateVersion=Fe,Q.needsLights&&(ht.ambientLightColor.value=Z.state.ambient,ht.lightProbe.value=Z.state.probe,ht.directionalLights.value=Z.state.directional,ht.directionalLightShadows.value=Z.state.directionalShadow,ht.spotLights.value=Z.state.spot,ht.spotLightShadows.value=Z.state.spotShadow,ht.rectAreaLights.value=Z.state.rectArea,ht.ltc_1.value=Z.state.rectAreaLTC1,ht.ltc_2.value=Z.state.rectAreaLTC2,ht.pointLights.value=Z.state.point,ht.pointLightShadows.value=Z.state.pointShadow,ht.hemisphereLights.value=Z.state.hemi,ht.directionalShadowMap.value=Z.state.directionalShadowMap,ht.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,ht.spotShadowMap.value=Z.state.spotShadowMap,ht.spotLightMatrix.value=Z.state.spotLightMatrix,ht.spotLightMap.value=Z.state.spotLightMap,ht.pointShadowMap.value=Z.state.pointShadowMap,ht.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function yn(I){if(I.uniformsList===null){const $=I.currentProgram.getUniforms();I.uniformsList=dh.seqWithValue($.seq,I.uniforms)}return I.uniformsList}function jt(I,$){const ee=et.get(I);ee.outputColorSpace=$.outputColorSpace,ee.batching=$.batching,ee.instancing=$.instancing,ee.instancingColor=$.instancingColor,ee.skinning=$.skinning,ee.morphTargets=$.morphTargets,ee.morphNormals=$.morphNormals,ee.morphColors=$.morphColors,ee.morphTargetsCount=$.morphTargetsCount,ee.numClippingPlanes=$.numClippingPlanes,ee.numIntersection=$.numClipIntersection,ee.vertexAlphas=$.vertexAlphas,ee.vertexTangents=$.vertexTangents,ee.toneMapping=$.toneMapping}function Xt(I,$,ee,Q,Z){$.isScene!==!0&&($=gt),O.resetTextureUnits();const Me=$.fog,Fe=Q.isMeshStandardMaterial?$.environment:null,it=w===null?T.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Ds,Be=(Q.isMeshStandardMaterial?Y:P).get(Q.envMap||Fe),Ye=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ht=!!ee.morphAttributes.position,Kt=!!ee.morphAttributes.normal,mn=!!ee.morphAttributes.color;let Ft=ca;Q.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ft=T.toneMapping);const Wn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ht=Wn!==void 0?Wn.length:0,dt=et.get(Q),kl=_.state.lights;if(ne===!0&&(ue===!0||I!==G)){const Si=I===G&&Q.id===z;tt.setState(Q,I,Si)}let nn=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==kl.state.version||dt.outputColorSpace!==it||Z.isBatchedMesh&&dt.batching===!1||!Z.isBatchedMesh&&dt.batching===!0||Z.isInstancedMesh&&dt.instancing===!1||!Z.isInstancedMesh&&dt.instancing===!0||Z.isSkinnedMesh&&dt.skinning===!1||!Z.isSkinnedMesh&&dt.skinning===!0||Z.isInstancedMesh&&dt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&dt.instancingColor===!1&&Z.instanceColor!==null||dt.envMap!==Be||Q.fog===!0&&dt.fog!==Me||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==tt.numPlanes||dt.numIntersection!==tt.numIntersection)||dt.vertexAlphas!==Ye||dt.vertexTangents!==rt||dt.morphTargets!==ht||dt.morphNormals!==Kt||dt.morphColors!==mn||dt.toneMapping!==Ft||Ge.isWebGL2===!0&&dt.morphTargetsCount!==Ht)&&(nn=!0):(nn=!0,dt.__version=Q.version);let Br=dt.currentProgram;nn===!0&&(Br=$t(Q,$,Z));let Hl=!1,ss=!1,Gl=!1;const Rn=Br.getUniforms(),tr=dt.uniforms;if(Ue.useProgram(Br.program)&&(Hl=!0,ss=!0,Gl=!0),Q.id!==z&&(z=Q.id,ss=!0),Hl||G!==I){Rn.setValue(q,"projectionMatrix",I.projectionMatrix),Rn.setValue(q,"viewMatrix",I.matrixWorldInverse);const Si=Rn.map.cameraPosition;Si!==void 0&&Si.setValue(q,Ce.setFromMatrixPosition(I.matrixWorld)),Ge.logarithmicDepthBuffer&&Rn.setValue(q,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Rn.setValue(q,"isOrthographic",I.isOrthographicCamera===!0),G!==I&&(G=I,ss=!0,Gl=!0)}if(Z.isSkinnedMesh){Rn.setOptional(q,Z,"bindMatrix"),Rn.setOptional(q,Z,"bindMatrixInverse");const Si=Z.skeleton;Si&&(Ge.floatVertexTextures?(Si.boneTexture===null&&Si.computeBoneTexture(),Rn.setValue(q,"boneTexture",Si.boneTexture,O)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}Z.isBatchedMesh&&(Rn.setOptional(q,Z,"batchingTexture"),Rn.setValue(q,"batchingTexture",Z._matricesTexture,O));const po=ee.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0&&Ge.isWebGL2===!0)&&Xe.update(Z,ee,Br),(ss||dt.receiveShadow!==Z.receiveShadow)&&(dt.receiveShadow=Z.receiveShadow,Rn.setValue(q,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(tr.envMap.value=Be,tr.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ss&&(Rn.setValue(q,"toneMappingExposure",T.toneMappingExposure),dt.needsLights&&zt(tr,Gl),Me&&Q.fog===!0&&Ae.refreshFogUniforms(tr,Me),Ae.refreshMaterialUniforms(tr,Q,te,j,Te),dh.upload(q,yn(dt),tr,O)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(dh.upload(q,yn(dt),tr,O),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Rn.setValue(q,"center",Z.center),Rn.setValue(q,"modelViewMatrix",Z.modelViewMatrix),Rn.setValue(q,"normalMatrix",Z.normalMatrix),Rn.setValue(q,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Si=Q.uniformsGroups;for(let mo=0,fu=Si.length;mo<fu;mo++)if(Ge.isWebGL2){const go=Si[mo];_t.update(go,Br),_t.bind(go,Br)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Br}function zt(I,$){I.ambientLightColor.needsUpdate=$,I.lightProbe.needsUpdate=$,I.directionalLights.needsUpdate=$,I.directionalLightShadows.needsUpdate=$,I.pointLights.needsUpdate=$,I.pointLightShadows.needsUpdate=$,I.spotLights.needsUpdate=$,I.spotLightShadows.needsUpdate=$,I.rectAreaLights.needsUpdate=$,I.hemisphereLights.needsUpdate=$}function Zn(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,$,ee){et.get(I.texture).__webglTexture=$,et.get(I.depthTexture).__webglTexture=ee;const Q=et.get(I);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ee===void 0,Q.__autoAllocateDepthBuffer||be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,$){const ee=et.get(I);ee.__webglFramebuffer=$,ee.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(I,$=0,ee=0){w=I,C=$,R=ee;let Q=!0,Z=null,Me=!1,Fe=!1;if(I){const Be=et.get(I);Be.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(q.FRAMEBUFFER,null),Q=!1):Be.__webglFramebuffer===void 0?O.setupRenderTarget(I):Be.__hasExternalTextures&&O.rebindTextures(I,et.get(I.texture).__webglTexture,et.get(I.depthTexture).__webglTexture);const Ye=I.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const rt=et.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(rt[$])?Z=rt[$][ee]:Z=rt[$],Me=!0):Ge.isWebGL2&&I.samples>0&&O.useMultisampledRTT(I)===!1?Z=et.get(I).__webglMultisampledFramebuffer:Array.isArray(rt)?Z=rt[ee]:Z=rt,M.copy(I.viewport),U.copy(I.scissor),V=I.scissorTest}else M.copy(N).multiplyScalar(te).floor(),U.copy(ce).multiplyScalar(te).floor(),V=Se;if(Ue.bindFramebuffer(q.FRAMEBUFFER,Z)&&Ge.drawBuffers&&Q&&Ue.drawBuffers(I,Z),Ue.viewport(M),Ue.scissor(U),Ue.setScissorTest(V),Me){const Be=et.get(I.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Be.__webglTexture,ee)}else if(Fe){const Be=et.get(I.texture),Ye=$||0;q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Ye)}z=-1},this.readRenderTargetPixels=function(I,$,ee,Q,Z,Me,Fe){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=et.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Fe!==void 0&&(it=it[Fe]),it){Ue.bindFramebuffer(q.FRAMEBUFFER,it);try{const Be=I.texture,Ye=Be.format,rt=Be.type;if(Ye!==Or&&Ie.convert(Ye)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=rt===Kc&&(be.has("EXT_color_buffer_half_float")||Ge.isWebGL2&&be.has("EXT_color_buffer_float"));if(rt!==ua&&Ie.convert(rt)!==q.getParameter(q.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===Ts&&(Ge.isWebGL2||be.has("OES_texture_float")||be.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=I.width-Q&&ee>=0&&ee<=I.height-Z&&q.readPixels($,ee,Q,Z,Ie.convert(Ye),Ie.convert(rt),Me)}finally{const Be=w!==null?et.get(w).__webglFramebuffer:null;Ue.bindFramebuffer(q.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(I,$,ee=0){const Q=Math.pow(2,-ee),Z=Math.floor($.image.width*Q),Me=Math.floor($.image.height*Q);O.setTexture2D($,0),q.copyTexSubImage2D(q.TEXTURE_2D,ee,0,0,I.x,I.y,Z,Me),Ue.unbindTexture()},this.copyTextureToTexture=function(I,$,ee,Q=0){const Z=$.image.width,Me=$.image.height,Fe=Ie.convert(ee.format),it=Ie.convert(ee.type);O.setTexture2D(ee,0),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment),$.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Z,Me,Fe,it,$.image.data):$.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,$.mipmaps[0].width,$.mipmaps[0].height,Fe,$.mipmaps[0].data):q.texSubImage2D(q.TEXTURE_2D,Q,I.x,I.y,Fe,it,$.image),Q===0&&ee.generateMipmaps&&q.generateMipmap(q.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(I,$,ee,Q,Z=0){if(T.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=I.max.x-I.min.x+1,Fe=I.max.y-I.min.y+1,it=I.max.z-I.min.z+1,Be=Ie.convert(Q.format),Ye=Ie.convert(Q.type);let rt;if(Q.isData3DTexture)O.setTexture3D(Q,0),rt=q.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)O.setTexture2DArray(Q,0),rt=q.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,Q.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,Q.unpackAlignment);const ht=q.getParameter(q.UNPACK_ROW_LENGTH),Kt=q.getParameter(q.UNPACK_IMAGE_HEIGHT),mn=q.getParameter(q.UNPACK_SKIP_PIXELS),Ft=q.getParameter(q.UNPACK_SKIP_ROWS),Wn=q.getParameter(q.UNPACK_SKIP_IMAGES),Ht=ee.isCompressedTexture?ee.mipmaps[Z]:ee.image;q.pixelStorei(q.UNPACK_ROW_LENGTH,Ht.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Ht.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,I.min.x),q.pixelStorei(q.UNPACK_SKIP_ROWS,I.min.y),q.pixelStorei(q.UNPACK_SKIP_IMAGES,I.min.z),ee.isDataTexture||ee.isData3DTexture?q.texSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ye,Ht.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),q.compressedTexSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ht.data)):q.texSubImage3D(rt,Z,$.x,$.y,$.z,Me,Fe,it,Be,Ye,Ht),q.pixelStorei(q.UNPACK_ROW_LENGTH,ht),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Kt),q.pixelStorei(q.UNPACK_SKIP_PIXELS,mn),q.pixelStorei(q.UNPACK_SKIP_ROWS,Ft),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Wn),Z===0&&Q.generateMipmaps&&q.generateMipmap(rt),Ue.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?O.setTextureCube(I,0):I.isData3DTexture?O.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?O.setTexture2DArray(I,0):O.setTexture2D(I,0),Ue.unbindTexture()},this.resetState=function(){C=0,R=0,w=null,Ue.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ws}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===nv?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===nd?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xn?eo:L1}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===eo?Xn:Ds}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class $8 extends Q1{}$8.prototype.isWebGL1Renderer=!0;class X8 extends Zi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class q8 extends oi{constructor(e,t,n,r,s,o,l,u,f){super(e,t,n,r,s,o,l,u,f),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Cn,this.magFilter=s!==void 0?s:Cn,this.generateMipmaps=!1;const h=this;function p(){h.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const xM={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Y8{constructor(e,t,n){const r=this;let s=!1,o=0,l=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){l++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,l),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,l),o===l&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,p){return f.push(h,p),this},this.removeHandler=function(h){const p=f.indexOf(h);return p!==-1&&f.splice(p,2),this},this.getHandler=function(h){for(let p=0,m=f.length;p<m;p+=2){const g=f[p],y=f[p+1];if(g.global&&(g.lastIndex=0),g.test(h))return y}return null}}}const j8=new Y8;class av{constructor(e){this.manager=e!==void 0?e:j8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}av.DEFAULT_MATERIAL_NAME="__DEFAULT";class K8 extends av{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=xM.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=Zc("img");function u(){h(),xM.add(e,this),t&&t(this),s.manager.itemEnd(e)}function f(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){l.removeEventListener("load",u,!1),l.removeEventListener("error",f,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class Z8 extends av{constructor(e){super(e)}load(e,t,n,r){const s=new oi,o=new K8(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class J8{constructor(e,t,n=0,r=1/0){this.ray=new F1(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new rv,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return $g(e,this,n,t),n.sort(yM),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)$g(e[r],this,n,t);return n.sort(yM),n}}function yM(i,e){return i.distance-e.distance}function $g(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)$g(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ev}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ev);const Xg=new Bt;function Q8(){document.querySelector("#global-container").addEventListener("pointermove",e6)}function e6(i){Xg.x=t6(i.clientX),Xg.y=n6(i.clientY)}function t6(i){return i/window.innerWidth*2-1}function n6(i){return-(i/window.innerHeight)*2+1}function i6(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}function r6(i,e){return Math.round(i/e*100)}const ol=new Map,s6=new Z8;window.textureCache=ol;const ph={init:a6,loadAllAssets:o6,loadImg:tA,getTexByElement:l6,addProgressAction:rA,letsBegin:f6},Va={};function a6(){Va.globalContainer=document.getElementById("global-container"),Va.loader=document.getElementById("loader"),Va.loaderPercent=document.getElementById("Loader-percent"),rA((i,e)=>{Va.loaderPercent.innerHTML=r6(i,e)+"%"})}async function o6(){const i=document.querySelectorAll("[data-webgl]");for(const t of i){const n=t.dataset;for(let r in n){if(!r.startsWith("tex"))continue;const s=n[r];ol.has(s)||ol.set(s,null)}}const e=[];ol.forEach((t,n)=>{let r=null;r=(/\.(mp4|webm|mov)$/.test(n)?c6:tA)(n).then(o=>{ol.set(n,o)}).catch(()=>{console.error("Failed to load Media: ",n)}),e.push(r)}),await Promise.all(e)}async function l6(i){const e=new Map,t=i.dataset;let n=null,r=!0;for(let s in t){if(!s.startsWith("tex"))continue;const o=t[s],l=ol.get(o);s=s.replace("-",""),e.set(s,l),r&&i instanceof HTMLImageElement&&(n=new Promise(u=>{i.onload=u}),i.src=o,r=!1),r&&i instanceof HTMLVideoElement&&(n=new Promise(u=>{i.oncanplay=u}),i.src=o,i.load(),r=!1)}return await n,e}let eA=0,SM=0,qg=null;async function tA(i){nA();const e=await s6.loadAsync(i);return iA(),e.magFilter=Cn,e.minFilter=Cn,e.needsUpdate=!1,e}async function c6(i){const e=document.createElement("video");let t=i.split(".").pop();return t==="mov"&&(t="quicktime"),e.canPlayType(`video/${t}`)?(nA(),new Promise(n=>{const r=document.createElement("video");r.oncanplay=()=>{const s=new q8(r);iA(),s.magFilter=Cn,s.minFilter=Cn,r.play(),r.oncanplay=null,n(s)},r.src=i,r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,r.defaultMuted=!0})):null}function nA(){eA++}function iA(){SM++,qg&&qg(SM,eA)}function rA(i){qg=i}function u6(){const i=d_.timeline();return i.to(Va.loader.firstElementChild,{opacity:0,y:10,duration:.3,delay:.5}).set(Va.globalContainer,{visibility:"visible"}).set(Va.loader,{display:"none"}),i}function f6(){u6()}const h6="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",d6="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;uniform vec4 uResolution;uniform sampler2D tex1;uniform sampler2D tex2;vec2 coverUv(vec2 uv,vec4 resolution){return(uv-0.5)*resolution.zw+0.5;}void main(){vec2 uv=coverUv(vUv,uResolution);vec4 t1=texture2D(tex1,uv);vec4 t2=texture2D(tex2,uv);vec4 mixColor=mix(t1,t2,step(.5,uv.y));gl_FragColor=mixColor;}",Wt={os:[],raycaster:new J8,worldInit:sA,adjustWorldPosition:aA,render:lA};function sA(i,e){return Wt.renderer=new Q1({canvas:i,antialias:!0}),Wt.renderer.setSize(e.width,e.height,!1),Wt.renderer.setPixelRatio(e.devicePixelRatio),Wt.renderer.setClearColor(0,0),Wt.scene=new X8,Wt.camera=m6(e),p6(e),Wt}async function p6(i){const t=[...document.querySelectorAll("[data-webgl]")].map(async n=>{const r=n.getBoundingClientRect(),s=await ph.getTexByElement(n),o=new uu(r.width,r.height,1,1),l=new Is({vertexShader:h6,fragmentShader:d6,uniforms:{uMouse:{value:new Bt(.5,.5)},uHover:{value:0}}});function u(m){if(!s.get("tex1"))return m;const g=s.get("tex1").source.data,y={};g instanceof HTMLImageElement?(y.width=g.naturalWidth,y.height=g.naturalHeight):g instanceof HTMLVideoElement&&(y.width=g.videoWidth,y.height=g.videoHeight);const x=f(r,y);return m.uResolution={value:x},m}function f(m,g){const{width:y,height:x}=m,_=new Hn(y,x,1,1);if(!g)return _;const{width:v,height:A}=g,T=A/v,E=x/y;let C,R;return E>T?(C=1/E*T,R=1):(C=1,R=E/T),_.z=C,_.w=R,_}l.uniforms=u(l.uniforms),s.forEach((m,g)=>{l.uniforms[g]={value:m}});const h=new Jr(o,l);h.position.z=0;const p={geometry:o,material:l,mesh:h,rect:r,$:{el:n}};return Wt.scene.add(h),Wt.os.push(p),p});await Promise.all(t),aA(i)}function aA(i){Wt.renderer.setSize(i.width,i.height,!1),Wt.os.forEach(e=>_6(e,i)),v6(i)}function m6(i){const{fov:e,aspect:t,near:n,far:r,cameraZ:s}=i,o=new mr(e,t,n,r);return o.position.z=s,o}function g6(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=oA(n,_n.rect);e.position.y=r}function _6(i,e){const{$:{el:t},mesh:n,geometry:r,rect:s}=i,o=t.getBoundingClientRect(),{x:l,y:u}=oA(o,e);n.position.x=l,n.position.y=u,r.scale(o.width/s.width,o.height/s.height,1),i.rect=o}function v6(i){const{aspect:e,radian:t,fov:n}=i;Wt.camera.aspect=e,Wt.camera.radian=t,Wt.camera.fov=n,Wt.camera.updateProjectionMatrix(),Wt.renderer.render(Wt.scene,Wt.camera)}function oA(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function x6(){Wt.raycaster.setFromCamera(Xg,Wt.camera);const e=Wt.raycaster.intersectObjects(Wt.scene.children)[0];for(let t=0;t<Wt.scene.children.length;t++){const n=Wt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=i6(r.value,r.__endValue,.1)}}function lA(){requestAnimationFrame(lA),Wt.os.forEach(i=>g6(i)),x6(),Wt.renderer.render(Wt.scene,Wt.camera)}const _n={init:y6},cA={};let EM=!1;function y6(i){cA.canvas=i;const e=i.getBoundingClientRect();return _n.rect=e,_n.width=e.width,_n.height=e.height,_n.near=1500,_n.far=4e3,_n.aspect=_n.width/_n.height,_n.cameraZ=2500,_n.radian=2*Math.atan(_n.height/2/_n.cameraZ),_n.fov=180*_n.radian/Math.PI,_n.devicePixelRatio=window.devicePixelRatio,EM||(EM=!0,S6()),_n}function S6(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{E6()},100)})}function E6(){M6(),Wt.adjustWorldPosition(_n)}function M6(){const{near:i,far:e,cameraZ:t}=_n;_n.init(cA.canvas,i,e,t)}const b6=`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" width="50" height="50">
<path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
</svg>`,uA=`<svg  xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 16 14">
      <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
    </svg>`,T6=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 18 17">
      <g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <path d="M16 16l-5.0752-5.0752"></path>
        <circle cx="6.4" cy="6.4" r="6.4"></circle>
      </g>
    </svg>`,Pl=pn.page.breakpoint,A6=pn.time.debounce,w6=pn.humbergerBtnSelector,C6=pn.logo.white,fA=pn.logo.black,R6=pn.logo.phone,P6=pn.logo.tablet,L6=pn.target.pageContainer,ov=pn.target.header,hA=pn.target.announcement,dA=pn.rootProperty.headerHeight,pA=pn.rootProperty.announcementHeight,mA=pn.tabletAndUp,gA=pn.phone,D6=pn.smallCart,I6=pn.largeCart;Tl(Pl);function O6(){document.addEventListener("DOMContentLoaded",async function(){xX(),hv(),cv(),oX(),nX(),j6()})}window.addEventListener("resize",function(){const i=document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]');console.log("sidebarCart",i),i.addEventListener("click",function(e){e.preventDefault(),console.log("openSidebarCart is called",i)})});function U6(){const i=document.querySelector('[data-section-id="cart"]');i.setAttribute("aria-hidden",!0),i.classList.add("Drawer","Drawer--fromRight"),N6(i),X6(i),k6(i)}function N6(i){const e=Ur("div",{},["Drawer__Header","Drawer__Header--bordered","Drawer__Container"]);i.appendChild(e);const t=Ur("span",{},["Drawer__Title","Heading","u-h4"]);t.textContent="カート",e.appendChild(t),Ur("div",{},["Drawer__Header","Drawer__Header--bordered","Drawer__Container"]),F6(e)}function F6(i){const e=Ur("button",pn.sidebarBtnConfig.attributes,pn.sidebarBtnConfig.classes);return i.appendChild(e),B6(uA,e),e}async function B6(i,e){z6(i,e,["Icon","Icon--close"],"1.0")}async function z6(i,e,t,n="1.5",r="currentColor"){const s=e;uv(s);async function o(u){const p=new DOMParser().parseFromString(u,"image/svg+xml").querySelector("svg");if(!p)throw new Error(`No SVG element found in the provided data: ${u}`);return p.querySelectorAll("path").forEach(g=>{g.setAttribute("fill","none"),g.setAttribute("stroke-width",n),g.setAttribute("stroke","currentColor")}),p}const l=await o(i);xA(s,l),_A(l,t)}function _A(i,e){i.classList.add(...e)}function k6(i){const e=Ur("form",{},["Cart","Drawer__Content"]);e.setAttribute("action","/cart"),e.setAttribute("method","post"),e.setAttribute("novalidate",""),i.appendChild(e),H6(e)}function H6(i){const e=Ur("div",{},["Drawer__Main"]);i.appendChild(e),G6(e),V6(e,"カートに商品がありません")}function G6(i){const e=ed(i,"div",["Cart__ShippingNotice","Text--subdued"]);W6(e)}function W6(i){const e=ed(i,"div",["Drawer__Container"]);$6(e,"あと")}function V6(i,e){const t=ed(i,"p",["Cart__Empty","Heading","u-h5"]);t.textContent=e}function $6(i,e){const t=Ur("p",{},[]);t.appendChild(document.createTextNode(e));const n=Ur("span",{},[]),r=Ur("span",{},["yen"]);r.textContent="¥",n.appendChild(r),n.appendChild(document.createTextNode("10,000")),t.appendChild(n),t.appendChild(document.createTextNode("以上で送料無料")),i.appendChild(t)}function X6(i){const e=document.querySelector("html"),t=document.querySelector(".PageOverlay"),n=document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]');q6(e,t,i,n),Y6(e,t,i)}function q6(i,e,t,n){const r=document.getElementById("page-container");n.addEventListener("click",function(s){s.preventDefault(),console.log("openSidebarCart is called",n),e==null||e.classList.toggle("is-visible"),i.classList.toggle("no-scroll"),t.setAttribute("aria-hidden",!1),t.setAttribute("tabindex","-1"),t.addEventListener("transitionend",function(o){if(o.propertyName!=="transform")return;const l=t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');l&&ma&&(l.focus(),lv(),ma=!1,r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))})})}function Y6(i,e,t,n){const r=document.getElementById("page-container");document.querySelector('[data-action="close-drawer"][data-drawer-id="sidebar-cart"]').addEventListener("click",function(){t.setAttribute("aria-hidden","true"),e.classList.remove("is-visible"),i.classList.remove("no-scroll"),t.addEventListener("transitionend",function(o){if(o.propertyName!=="transform")return;r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(u=>{u.removeAttribute("tabindex"),yA()}),ma=!0})})}function j6(){document.querySelectorAll(".Drawer__Main").forEach(e=>{e.setAttribute("data-scrollable",""),e.style.overflow="auto"})}function K6(){document.querySelectorAll(".Collapsible").forEach(e=>{if(e){const t=e.querySelector(".Collapsible__Button");t?(t.classList.add("Heading","u-h6"),J6(e),eX(t)):Z6(e)}else console.log("Collapsible not found")})}function Z6(i){const e=document.createElement("a");e.classList.add("Collapsible__Button","Heading","Link","Link--primary","u-h6");const t=i.textContent;e.textContent=t,e.setAttribute("href","#"),i.textContent="",i.appendChild(e)}function J6(i){const e=document.createElement("div");e.classList.add("Collapsible__Inner"),i.appendChild(e);const t=Q6();e.appendChild(t),e.style.overflow="hidden",e.style.height="0"}function Q6(){return document.querySelector(".Collapsible__Content")}function eX(i){const e=document.createElement("span");e.classList.add("Collapsible__Plus"),i.appendChild(e);const t=document.querySelector(".Collapsible__Button");tX(t)}function tX(i){const e=document.querySelector(".Collapsible__Inner");window.addEventListener("DOMContentLoaded",t=>{e.style.height==="0px"?MM(e):bM(e)}),i.addEventListener("click",function(){const t=document.querySelector(".Collapsible__Button"),n=document.querySelector(".Collapsible__Inner"),r=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!r),n.style.overflow=n.style.overflow==="visible"?"hidden":"visible",n.style.height=n.style.height==="0px"?"auto":"0px",n.getAttribute("tabindex")==="-1"?bM(n):MM(n),r||(console.log("btn",t),t.focus())})}function MM(i){i.setAttribute("tabindex","-1"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.setAttribute("tabindex","-1")})}function bM(i){i.removeAttribute("tabindex"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.removeAttribute("tabindex")})}function nX(){rX(uA),iX(T6),K6(),U6()}function iX(i){vA(i,"Drawer__Search",["Icon","Icon--search"])}function rX(i){vA(i,"Drawer__Close",["Icon","Icon--close"]);const e=document.getElementById("sidebar-menu");e.setAttribute("aria-hidden",!0),sX(e),aX(e,"Drawer__Close")}async function vA(i,e,t){const n=document.querySelector(`.${e}`);uv(n);async function r(o){const f=new DOMParser().parseFromString(o,"image/svg+xml").querySelector("svg");if(!f)throw new Error(`No SVG element found in the provided data: ${o}`);return f.querySelectorAll("path").forEach(p=>{p.setAttribute("fill","none"),p.setAttribute("stroke-width","1.5"),p.setAttribute("stroke","currentColor")}),f}const s=await r(i);xA(n,s),s.classList.add(...t)}function xA(i,e){i.appendChild(e),e.setAttribute("viewBox","0 0 20 20"),e.setAttribute("width","16"),e.setAttribute("height","14")}function lv(){const{disablePlugin:i,enablePlugin:e}=dv();i()}function yA(){const{disablePlugin:i,enablePlugin:e}=dv();e()}let ma=!0;function sX(i){const e=document.querySelector("html"),t=document.getElementById("sidebar-menu"),n=document.querySelector(".PageOverlay"),r=document.querySelector(".Header__Icon"),s=document.getElementById("page-container");r.addEventListener("click",function(){i.setAttribute("aria-hidden",!1),t.setAttribute("tabindex","-1"),t.addEventListener("transitionend",function(o){if(o.propertyName!=="transform")return;const l=t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');l&&ma&&(l.focus(),lv(),ma=!1,s.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))}),n.classList.add("is-visible"),e.classList.add("no-scroll")})}function aX(i,e){const t=document.querySelector("html"),n=document.getElementById("sidebar-menu"),r=document.querySelector(".PageOverlay"),s=document.getElementById("page-container");document.querySelector(`.${e}`).addEventListener("click",function(){i.setAttribute("aria-hidden",!0),n.removeAttribute("tabindex"),r.classList.remove("is-visible"),t.classList.remove("no-scroll"),n.addEventListener("transitionend",function(l){if(l.propertyName!=="transform")return;s.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.removeAttribute("tabindex"),yA()}),ma=!0})})}function oX(){const i=lX();cX(),uX(),i.select(4),setTimeout(()=>i.select(0),0)}function lX(){const i={contain:!0,prevNextButtons:!1,setGallerySize:!1,adaptiveHeight:!1,wrapAround:!0,dragThreshold:15,pauseAutoPlayOnHover:!1,autoPlay:!1,pageDots:!0,fade:!0,on:{change:function(r){console.log("Slide changed to",r),document.querySelectorAll(".Carousel__Cell").forEach((u,f)=>{if(u.classList.contains("is-selected")){let x=function(_){y===null&&(y=_);let v=_-y,A=Math.min(v/g,1),T=fX(p,m,A);u.style.opacity=T,A<1&&requestAnimationFrame(x)};var h=x;u.style.visibility="inherit";let p=0,m=1,g=1e3,y=null;requestAnimationFrame(x)}else u.style.visibility="hidden",u.style.opacity="1"}),document.querySelectorAll(".SectionHeader").forEach((u,f)=>{setTimeout(()=>{console.log("index",r),f===r?(u.style.visibility="visible",u.style.opacity="1",u.style.transform="matrix(1, 0, 0, 1, 0, 0)",u.style.transition="all 0.7s ease-in-out"):(u.style.visibility="hidden",u.style.opacity="0",u.style.transform="matrix(1, 0, 0, 1, 0, 20)",u.style.transition="all 0.7s ease-in-out")},500)}),document.querySelectorAll(".SectionHeader__ButtonWrapper").forEach((u,f)=>{setTimeout(()=>{f===r?(u.style.visibility="visible",u.style.opacity="1",u.style.transform="matrix(1, 0, 0, 1, 0, 0)",u.style.transition="all 0.7s ease-in-out"):(u.style.visibility="hidden",u.style.opacity="0",u.style.transform="matrix(1, 0, 0, 1, 0, 20)",u.style.transition="all 0.7s ease-in-out")},700)})}}},e=document.querySelector(".Slideshow-Carousel"),t=JSON.stringify(i,null,2);e.setAttribute("data-flickity-config",t);const n=new UG(e,i);return e.classList.add("Carousel--fixed"),n}let TM=!1;function cX(i){const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".flickity-page-dots");if(r.length>0&&r[0].children.length>0)return;!TM&&r.length>0&&(e.disconnect(),TM=!0,console.log("disconnected"))}})});e.observe(document,{childList:!0,subtree:!0})}let AM=!1;function uX(i){if(AM)return;AM=!0;const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".Carousel__Cell");let s=["./img/yamadera.jpeg","./img/sakuramich.jpeg","./img/yamadera.jpeg","./img/yamadera.jpeg","./img/sakuramich.jpeg"],o=["Text 1","Text 2","Text 3","Text 4","Text 5"],l=["Text A","Text B","Text C","Text D","Text E"];r.forEach((u,f)=>{if(u.children.length>0)return;let h=s[f%s.length],p=o[f%o.length],m=l[f%l.length];hX(u,h),dX(u,h),pX(u,p,m)}),r.length>=s.length&&(e.disconnect(),console.log("disconnected"),vX())}})});e.observe(document,{childList:!0,subtree:!0})}function fX(i,e,t){return i*(1-t)+e*t}function SA(i,e){const t=document.createElement("img");t.alt="yamadera",t.classList.add("Slideshow__Image","Image--lazyLoaded"),t.onload=function(){i.appendChild(t)},t.src=e}function hX(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-tablet-and-up"),i.appendChild(t),SA(t,e)}function dX(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-phone"),i.appendChild(t),SA(t,e)}function pX(i,e,t){const n=document.createElement("div");n.classList.add("Slideshow__Content","Slideshow__Content--bottomLeft"),i.appendChild(n),mX(n,e,t)}function mX(i,e,t){const n=document.createElement("header");n.classList.add("SectionHeader"),i.appendChild(n);const r=document.createElement("h3"),s=document.createElement("h2");r.classList.add("SectionHeader__SubHeader","Heading","u-h6"),s.classList.add("SectionHeader__Heading","Section__Heading--emphasize","Heading","u-h1"),r.textContent=e,s.textContent=t,n.appendChild(r),n.appendChild(s),gX(n)}function gX(i){const e=document.createElement("div");e.classList.add("SectionHeader__ButtonWrapper"),i.appendChild(e),_X(e)}function _X(i){const e=document.createElement("div");e.classList.add("ButtonGroup","ButtonGroup--spacingSmall"),i.appendChild(e);const t=document.createElement("a");t.href="./subhtml/demo-wrapAround.html",t.classList.add("ButtonGroup__Item","Button"),t.textContent="READ MORE",e.appendChild(t)}function vX(){document.querySelectorAll(".Carousel__Cell")}function xX(){const i=document.title,e=document.querySelector(".AnnouncementBar__Content");return e&&(e.innerHTML=i),i}function yX(i){SX(i),[{src:fA,alt:"logo"},{src:C6,alt:"logo"}].forEach(t=>MX(t.src,t.alt))}function SX(i){const e=document.querySelector(".Header__FlexItem--logo"),t=document.createElement("h1");t.classList.add("Header__Logo"),e.appendChild(t),EX(t,i)}function EX(i,e){const t=document.querySelector(".Header__LogoLink"),n=t.parentElement;i.appendChild(t),n.appendChild(i),t.querySelectorAll(".Header__LogoImage").forEach(l=>l.remove());const s=document.createElement("img");s.className="Header__LogoImage Header__LogoImage--primary",s.alt="",s.style.height=e;const o=document.createElement("img");o.className="Header__LogoImage Header__LogoImage--transparent",o.alt="",o.style.height=e,t.appendChild(s),t.appendChild(o)}function MX(i,e){const t=document.querySelector(`.Header__LogoImage--${i===fA?"primary":"transparent"}`);t.src=i,t.alt=e}function cv(){const i=Tl(Pl)?mA:gA;bA(i);const e=Tl(Pl)?P6:R6;yX(e),EA()}function EA(){const i=document.querySelectorAll(".Header__FlexItem.Header__FlexItem--fill");fv(i[1]);const e=Ur("a",pn.cartAtagConfig.attributes,pn.cartAtagConfig.classes);i[1].appendChild(e);const t=ed(e,"span",["hidden-phone"]);return bX(b6,t,["Icon","Icon--cart-desktop"],"1.0"),e.addEventListener("click",function(n){const r=document.getElementById("page-container"),s=document.querySelector('[data-section-id="cart"]'),o=document.querySelector("html"),l=document.querySelector(".PageOverlay");document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]'),n.preventDefault(),console.log("openSidebarCart is called test"),console.log("openSidebarCart is called",e),l==null||l.classList.toggle("is-visible"),o.classList.toggle("no-scroll"),s.setAttribute("aria-hidden",!1),s.setAttribute("tabindex","-1"),s.addEventListener("transitionend",function(u){if(u.propertyName!=="transform")return;const f=s.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');f&&ma&&(f.focus(),lv(),ma=!1,r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(p=>{p.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))})}),e}async function bX(i,e,t,n){TX(i,e,t,n)}async function TX(i,e,t,n="1.0",r="currentColor"){const s=e;uv(s);async function o(u){const p=new DOMParser().parseFromString(u,"image/svg+xml").querySelector("svg");if(!p)throw new Error(`No SVG element found in the provided data: ${u}`);return p.querySelectorAll("path").forEach(g=>{g.setAttribute("fill","none"),g.setAttribute("stroke-width",n),g.setAttribute("stroke","currentColor")}),p}const l=await o(i);AX(s,l),_A(l,t)}function AX(i,e){const t=Tl(Pl)?I6:D6;i.appendChild(e),e.setAttribute("viewBox","0 0 20 20"),e.setAttribute("width",t.width),e.setAttribute("height",t.height),e.setAttribute("strokeWidth",t.strokeWidth),i.style.width=t.width,i.style.height=t.height,e.style.width=t.width,e.style.height=t.height}function uv(i){fv(i)}let wM;window.addEventListener("resize",async function(){cv(),hv(),MA()});window.addEventListener("orientationchange",async function(){cv(),hv(),MA()});function MA(){clearTimeout(wM),wM=setTimeout(()=>{const i=Tl(Pl)?mA:gA;bA(i),EA();const e=Tl(Pl)?"28px":"18px";document.querySelectorAll(".Header__LogoImage").forEach(n=>{n.style.height=e}),wX(),zh(`#${ov}`,dA),zh(`#${hA}`,pA)},A6)}function wX(){let i;const e=document.querySelector(".pin-spacer"),t=document.getElementById(ov),n=document.querySelector(".Header__Wrapper"),r=document.querySelector(".Slideshow--fullscreen"),s=document.documentElement.clientWidth,o=n.offsetHeight;t.style.width=s+"px",t.style.maxWidth=s+"px",t.style.height=o+"px",t.style.maxHeight=o+"px",e.style.width=s+"px",e.style.maxWidth=s+"px",e.style.height=o+"px",e.style.maxHeight=o+"px",r.style.top="",i=CX(r),r.style.top=-i+"px"}function CX(i){const t=i.getBoundingClientRect().top,n=document.querySelector(".AnnouncementBar").offsetHeight;return t-n}function fv(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function RX(i,e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",`0 0 ${e} ${t}`),n.setAttribute("width",e),n.setAttribute("height",t),n}function PX(i,e,t,n){const r=(e-n*3)/2;for(let s=0;s<3;s++){const o=document.createElementNS("http://www.w3.org/2000/svg","rect");o.setAttribute("width",t),o.setAttribute("height",n),o.setAttribute("y",s*(parseInt(n)+r)),o.setAttribute("fill","currentColor"),i.appendChild(o)}}function LX({viewBox:i,width:e,height:t,rectWidth:n,rectHeight:r}){const s=RX(i,e,t);return PX(s,t,n,r),s}function bA(i){const e=document.querySelector(w6);fv(e);const t=LX(i);e.appendChild(t)}function hv(){const i=window.innerHeight,e=document.getElementById(L6);e&&(e.style.height=`${i}px`),TA("--window-height",i)}window.addEventListener("load",function(){zh(`#${ov}`,dA),zh(`#${hA}`,pA)});function zh(i,e){const t=document.querySelector(i);if(t){const n=t.offsetHeight;TA(e,n)}}function TA(i,e){document.documentElement.style.setProperty(i,`${e}px`)}let Yg=0;function DX(){const i=document.body.getElementsByTagName("*"),e=Array.from(i).filter(t=>t.id.includes("section"));Yg=0,e.forEach(t=>{Yg+=t.offsetHeight})}const IX={get totalHeight(){return DX(),Yg}},OX=pn.target.pageContainer;class jg extends _1{transformDelta(e,t){return e=this.options.disabled?{x:0,y:0}:e,e}}pp(jg,"pluginName","disablePlugin"),pp(jg,"defaultOptions",{disabled:!1});let Zs;function dv(){window.addEventListener("load",function(){});const i=document.getElementById(OX);d_.registerPlugin(yt),IS.use(jg),Zs=IS.init(i,{delegateTo:document}),yt.scrollerProxy(i,{scrollTop(n){return arguments.length?Zs.scrollTop=n:Zs.scrollTop}}),Zs.addListener(yt.update);function e(){Zs.updatePluginOptions("disablePlugin",{disabled:!0}),console.log("plugin is disabled")}function t(){Zs.updatePluginOptions("disablePlugin",{disabled:!1})}return yt.defaults({scroller:i}),Zs.addListener(n=>{n.offset.y+window.innerHeight>=Zs.getSize().content.height&&console.log("you're at the bottom of the page")}),window.addEventListener("load",function(){const n=IX.totalHeight,r=document.querySelector(`#${pn.target.header}`);r.style.position="relative",r.style.zIndex="1000",yt.create({trigger:r,start:"top top",end:`${n}px top`,pin:!0,pinSpacing:!1,onEnter:()=>{},onLeaveBack:()=>{}});function s(){const o=document.getElementById(pn.target.header);o.classList.add("Header--transparent"),yt.create({trigger:o,start:"top top",end:99999,onEnter:()=>{o.classList.remove("Header--transparent")},onLeaveBack:()=>{o.classList.add("Header--transparent")}})}s()}),{disablePlugin:e,enablePlugin:t}}async function UX(){O6();const i=document.querySelector("#canvas");_n.init(i),dv(),ph.init(),await ph.loadAllAssets(),sA(i,_n),Q8(),Wt.render(),ph.letsBegin()}function NX(){document.querySelector("[data-webgl]")}UX();console.log("Production output");NX();
