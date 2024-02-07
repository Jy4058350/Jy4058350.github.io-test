(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Fi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function F_(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},js={duration:.5,overwrite:!1,delay:0},Kf,sn,St,Zn=1e8,_t=1/Zn,Ju=Math.PI*2,ox=Ju/4,lx=0,B_=Math.sqrt,cx=Math.cos,ux=Math.sin,$t=function(e){return typeof e=="string"},Rt=function(e){return typeof e=="function"},$i=function(e){return typeof e=="number"},Zf=function(e){return typeof e>"u"},Ci=function(e){return typeof e=="object"},Mn=function(e){return e!==!1},Jf=function(){return typeof window<"u"},Eo=function(e){return Rt(e)||$t(e)},z_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},an=Array.isArray,Qu=/(?:-?\.?\d|\.)+/gi,G_=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Is=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ic=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,k_=/[+-]=-?[.\d]+/,H_=/[^,'"\[\]\s]+/gi,fx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,_i,ef,Qf,kn={},Gl={},V_,W_=function(e){return(Gl=Jr(e,kn))&&Rn},eh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ja=function(e,t){return!t&&console.warn(e)},$_=function(e,t){return e&&(kn[e]=t)&&Gl&&(Gl[e]=t)||kn},Qa=function(){return 0},hx={suppressEvents:!0,isStart:!0,kill:!1},El={suppressEvents:!0,kill:!1},dx={suppressEvents:!0},th={},fr=[],tf={},X_,Un={},Oc={},cd=30,Tl=[],nh="",ih=function(e){var t=e[0],n,r;if(Ci(t)||Rt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Tl.length;r--&&!Tl[r].targetTest(t););n=Tl[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new _g(e[r],n)))||e.splice(r,1);return e},kr=function(e){return e._gsap||ih(Jn(e))[0]._gsap},q_=function(e,t,n){return(n=e[t])&&Rt(n)?e[t]():Zf(n)&&e.getAttribute&&e.getAttribute(t)||n},En=function(e,t){return(e=e.split(",")).forEach(t)||e},Pt=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},zs=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},px=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},kl=function(){var e=fr.length,t=fr.slice(0),n,r;for(tf={},fr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Y_=function(e,t,n,r){fr.length&&!sn&&kl(),e.render(t,n,r||sn&&t<0&&(e._initted||e._startAt)),fr.length&&!sn&&kl()},j_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(H_).length<2?t:$t(e)?e.trim():e},K_=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mx=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Jr=function(e,t){for(var n in t)e[n]=t[n];return e},ud=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ci(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Hl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Ga=function(e){var t=e.parent||bt,n=e.keyframes?mx(an(e.keyframes)):ei;if(Mn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},_x=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Z_=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},uc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},gr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Hr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},gx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},nf=function(e,t,n,r){return e._startAt&&(sn?e._startAt.revert(El):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},vx=function i(e){return!e||e._ts&&i(e.parent)},fd=function(e){return e._repeat?Ks(e._tTime,e=e.duration()+e._rDelay)*e:0},Ks=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Vl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},fc=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},hc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),fc(e),n._dirty||Hr(n,e)),e},J_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Vl(e.rawTime(),t),(!t._dur||co(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),Hr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},yi=function(e,t,n,r){return t.parent&&gr(t),t._start=Wt(($i(n)?n:n||e!==bt?$n(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Z_(e,t,"_first","_last",e._sort?"_start":0),rf(t)||(e._recent=t),r||J_(e,t),e._ts<0&&hc(e,e._tTime),e},Q_=function(e,t){return(kn.ScrollTrigger||eh("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},eg=function(e,t,n,r,s){if(sh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&X_!==Nn.frame)return fr.push(e),e._lazy=[s,r],1},xx=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},rf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},yx=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&xx(e)&&!(!e._initted&&rf(e))||(e._ts<0||e._dp._ts<0)&&!rf(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=co(0,e._tDur,t),u=Ks(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ks(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||r||e._zTime===_t||!t&&e._zTime){if(!e._initted&&eg(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&nf(e,t,n,!0),e._onUpdate&&!n&&Bn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Bn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&gr(e,1),!n&&!sn&&(Bn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Sx=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Zs=function(e,t,n,r){var s=e._repeat,a=Wt(t)||0,o=e._tTime/e._tDur;return o&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Wt(a*(s+1)+e._rDelay*s):a,o>0&&!r&&hc(e,e._tTime=e._tDur*o),e.parent&&fc(e),n||Hr(e.parent,e),e},hd=function(e){return e instanceof mn?Hr(e):Zs(e,e._dur)},Mx={_start:0,endTime:Qa,totalDuration:Qa},$n=function i(e,t,n){var r=e.labels,s=e._recent||Mx,a=e.duration()>=Zn?s.endTime(!1):e._dur,o,l,c;return $t(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in r||(r[t]=a),r[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(an(n)?n[0]:n).totalDuration()),o>1?i(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},ka=function(e,t,n){var r=$i(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],o,l;if(r&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;a.immediateRender=Mn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Ot(t[0],a,t[s+1])},Sr=function(e,t){return e||e===0?t(e):t},co=function(e,t,n){return n<e?e:n>t?t:n},rn=function(e,t){return!$t(e)||!(t=fx.exec(e))?"":t[1]},Ex=function(e,t,n){return Sr(n,function(r){return co(e,t,r)})},sf=[].slice,tg=function(e,t){return e&&Ci(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ci(e[0]))&&!e.nodeType&&e!==_i},Tx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return $t(r)&&!t||tg(r,1)?(s=n).push.apply(s,Jn(r)):n.push(r)})||n},Jn=function(e,t,n){return St&&!t&&St.selector?St.selector(e):$t(e)&&!n&&(ef||!Js())?sf.call((t||Qf).querySelectorAll(e),0):an(e)?Tx(e,n):tg(e)?sf.call(e,0):e?[e]:[]},af=function(e){return e=Jn(e)[0]||Ja("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Jn(t,n.querySelectorAll?n:n===e?Ja("Invalid scope")||Qf.createElement("div"):e)}},ng=function(e){return e.sort(function(){return .5-Math.random()})},ig=function(e){if(Rt(e))return e;var t=Ci(e)?e:{each:e},n=Vr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},o=r>0&&r<1,l=isNaN(r)||o,c=t.axis,u=r,f=r;return $t(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!o&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,p=a[_],m,y,x,S,C,A,E,D,U;if(!p){if(U=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!U){for(E=-Zn;E<(E=g[U++].getBoundingClientRect().left)&&U<_;);U<_&&U--}for(p=a[_]=[],m=l?Math.min(U,_)*u-.5:r%U,y=U===Zn?0:l?_*f/U-.5:r/U|0,E=0,D=Zn,A=0;A<_;A++)x=A%U-m,S=y-(A/U|0),p[A]=C=c?Math.abs(c==="y"?S:x):B_(x*x+S*S),C>E&&(E=C),C<D&&(D=C);r==="random"&&ng(p),p.max=E-D,p.min=D,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(U>_?_-1:c?c==="y"?_/U:U:Math.max(U,_/U))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=rn(t.amount||t.each)||0,n=n&&_<0?dg(n):n}return _=(p[h]-p.min)/p.max||0,Wt(p.b+(n?n(_):_)*p.v)+p.u}},of=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=Wt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+($i(n)?0:rn(n))}},rg=function(e,t){var n=an(e),r,s;return!n&&Ci(e)&&(r=n=e.radius||Zn,e.values?(e=Jn(e.values),(s=!$i(e[0]))&&(r*=r)):e=of(e.increment)),Sr(t,n?Rt(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Zn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:a,s||u===a||$i(a)?u:u+rn(a)}:of(e))},sg=function(e,t,n,r){return Sr(an(e)?!t:n===!0?!!(n=0):!r,function(){return an(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},bx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Ax=function(e,t){return function(n){return e(parseFloat(n))+(t||rn(n))}},wx=function(e,t,n){return og(e,t,0,1,n)},ag=function(e,t,n){return Sr(n,function(r){return e[~~t(r)]})},Rx=function i(e,t,n){var r=t-e;return an(e)?ag(e,i(0,e.length),t):Sr(n,function(s){return(r+(s-e)%r)%r+e})},Cx=function i(e,t,n){var r=t-e,s=r*2;return an(e)?ag(e,i(0,e.length-1),t):Sr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},eo=function(e){for(var t=0,n="",r,s,a,o;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),o=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(o?H_:Qu),n+=e.substr(t,r-t)+sg(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},og=function(e,t,n,r,s){var a=t-e,o=r-n;return Sr(s,function(l){return n+((l-e)/a*o||0)})},Px=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=$t(e),o={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(an(e)&&!an(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=Jr(an(e)?[]:{},e));if(!u){for(l in t)rh.call(o,e,l,"get",t[l]);s=function(g){return lh(g,o)||(a?e.p:e)}}}return Sr(n,s)},dd=function(e,t,n){var r=e.labels,s=Zn,a,o,l;for(a in r)o=r[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Bn=function(e,t,n){var r=e.vars,s=r[t],a=St,o=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&fr.length&&kl(),o&&(St=o),u=l?s.apply(c,l):s.call(c),St=a,u},Ia=function(e){return gr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Bn(e,"onInterrupt"),e},Os,lg=[],cg=function(e){if(e)if(e=!e.name&&e.default||e,Jf()||e.headless){var t=e.name,n=Rt(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Qa,render:lh,add:rh,kill:Xx,modifier:$x,rawVars:0},a={targetTest:0,get:0,getSetter:oh,aliases:{},register:0};if(Js(),e!==r){if(Un[t])return;ei(r,ei(Hl(e,s),a)),Jr(r.prototype,Jr(s,Hl(e,a))),Un[r.prop=t]=r,e.targetTest&&(Tl.push(r),th[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}$_(t,r),e.register&&e.register(Rn,r,Tn)}else lg.push(e)},dt=255,Oa={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},Uc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},ug=function(e,t,n){var r=e?$i(e)?[e>>16,e>>8&dt,e&dt]:0:Oa.black,s,a,o,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Oa[e])r=Oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&dt,r&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(Qu),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,r.length>3&&(r[3]*=1),r[0]=Uc(l+1/3,s,a),r[1]=Uc(l,s,a),r[2]=Uc(l-1/3,s,a);else if(~e.indexOf("="))return r=e.match(G_),n&&r.length<4&&(r[3]=1),r}else r=e.match(Qu)||Oa.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/dt,a=r[1]/dt,o=r[2]/dt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},fg=function(e){var t=[],n=[],r=-1;return e.split(hr).forEach(function(s){var a=s.match(Is)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},pd=function(e,t,n){var r="",s=(e+r).match(hr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=ug(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=fg(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(hr,"1").split(Is),f=c.length-1;o<f;o++)r+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(hr),f=c.length-1;o<f;o++)r+=c[o]+s[o];return r+c[f]},hr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Oa)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Lx=/hsl[a]?\(/,hg=function(e){var t=e.join(" "),n;if(hr.lastIndex=0,hr.test(t))return n=Lx.test(t),e[1]=pd(e[1],n),e[0]=pd(e[0],n,fg(e[1])),!0},to,Nn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(p){var m=i()-r,y=p===!0,x,S,C,A;if((m>e||m<0)&&(n+=m-t),r+=m,C=r-n,x=C-a,(x>0||y)&&(A=++f.frame,h=C-f.time*1e3,f.time=C=C/1e3,a+=x+(x>=s?4:s-x),S=1),y||(l=c(_)),S)for(d=0;d<o.length;d++)o[d](C,h,A,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){V_&&(!ef&&Jf()&&(_i=ef=window,Qf=_i.document||{},kn.gsap=Rn,(_i.gsapVersions||(_i.gsapVersions=[])).push(Rn.version),W_(Gl||_i.GreenSockGlobals||!_i.gsap&&_i||{}),lg.forEach(cg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},to=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),to=0,c=Qa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,y){var x=m?function(S,C,A,E){p(S,C,A,E),f.remove(x)}:p;return f.remove(p),o[y?"unshift":"push"](x),Js(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),Js=function(){return!to&&Nn.wake()},it={},Dx=/^[\d.\-M][\d.\-,\s]/,Ix=/["']/g,Ox=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[r]=isNaN(c)?c.replace(Ix,"").trim():+c,r=l.substr(o+1).trim();return t},Ux=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Nx=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ox(t[1])]:Ux(e).split(",").map(j_)):it._CE&&Dx.test(e)?it._CE("",e):n},dg=function(e){return function(t){return 1-e(1-t)}},pg=function i(e,t){for(var n=e._first,r;n;)n instanceof mn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Vr=function(e,t){return e&&(Rt(e)?e:it[e]||Nx(e))||t},as=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return En(e,function(o){it[o]=kn[o]=s,it[a=o.toLowerCase()]=n;for(var l in s)it[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[o+"."+l]=s[l]}),s},mg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ju*(Math.asin(1/r)||0),o=function(u){return u===1?1:r*Math.pow(2,-10*u)*ux((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:mg(o);return s=Ju/s,l.config=function(c,u){return i(e,c,u)},l},Fc=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:mg(n);return r.config=function(s){return i(e,s)},r};En("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;as(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;as("Elastic",Nc("in"),Nc("out"),Nc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(o){return o<t?i*o*o:o<n?i*Math.pow(o-1.5/e,2)+.75:o<r?i*(o-=2.25/e)*o+.9375:i*Math.pow(o-2.625/e,2)+.984375};as("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);as("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});as("Circ",function(i){return-(B_(1-i*i)-1)});as("Sine",function(i){return i===1?1:-cx(i*ox)+1});as("Back",Fc("in"),Fc("out"),Fc());it.SteppedEase=it.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-_t;return function(o){return((r*co(0,a,o)|0)+s)*n}}};js.ease=it["quad.out"];En("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return nh+=i+","+i+"Params,"});var _g=function(e,t){this.id=lx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:q_,this.set=t?t.getSetter:oh},no=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zs(this,+t.duration,1,1),this.data=t.data,St&&(this._ctx=St,St.data.push(this)),to||Nn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Zs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Js(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(hc(this,n),!s._dp||s.parent||J_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===_t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Y_(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fd(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fd(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ks(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Vl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(co(-Math.abs(this._delay),this._tDur,s),r!==!1),fc(this),gx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Js(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&yi(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Vl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=dx);var r=sn;return sn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,hd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime($n(this,n),Mn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Mn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=Rt(n)?n:K_,o=function(){var c=r.then;r.then=null,Rt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),s(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?o():r._prom=o})},e.kill=function(){Ia(this)},i}();ei(no.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var mn=function(i){F_(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Mn(n.sortChildren),bt&&yi(n.parent||bt,Fi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Q_(Fi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return ka(0,arguments,this),this},t.from=function(r,s,a){return ka(1,arguments,this),this},t.fromTo=function(r,s,a,o){return ka(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,Ga(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ot(r,s,$n(this,a),1),this},t.call=function(r,s,a){return yi(this,Ot.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ot(r,a,$n(this,l)),this},t.staggerFrom=function(r,s,a,o,l,c,u){return a.runBackwards=1,Ga(a).immediateRender=Mn(a.immediateRender),this.staggerTo(r,s,a,o,l,c,u)},t.staggerFromTo=function(r,s,a,o,l,c,u,f){return o.startAt=a,Ga(o).immediateRender=Mn(o.immediateRender),this.staggerTo(r,s,o,l,c,u,f)},t.render=function(r,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:Wt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,p,m,y,x,S,C,A,E;if(this!==bt&&u>l&&r>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,r+=this._time-o),h=u,S=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,a);if(h=Wt(u%p),u===l?(_=this._repeat,h=c):(_=~~(u/p),_&&_===u/p&&(h=c,_--),h>c&&(h=c)),C=Ks(this._tTime,p),!o&&this._tTime&&C!==_&&this._tTime-C*p-this._dur<=0&&(C=_),A&&_&1&&(h=c-h,E=1),_!==C&&!this._lock){var D=A&&C&1,U=D===(A&&_&1);if(_<C&&(D=!D),o=D?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Wt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Bn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,U&&(this._lock=2,o=D?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;pg(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=Sx(this,Wt(o),Wt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&h&&!s&&!_&&(Bn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-_t);break}}d=g}else{d=this._last;for(var v=r<0?r:h;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||sn&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=v?-_t:_t);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=o?0:-_t)._zTime=h>=o?1:-1,this._ts))return this._start=S,fc(this),this.render(r,s,a);this._onUpdate&&!s&&Bn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(S===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&gr(this,1),!s&&!(r<0&&!o)&&(u||o||!l)&&(Bn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if($i(s)||(s=$n(this,s,r)),!(r instanceof no)){if(an(r))return r.forEach(function(o){return a.add(o,s)}),this;if($t(r))return this.addLabel(r,s);if(Rt(r))r=Ot.delayedCall(0,r);else return this}return this!==r?yi(this,r,s):this},t.getChildren=function(r,s,a,o){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Zn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ot?s&&l.push(c):(a&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return $t(r)?this.removeLabel(r):Rt(r)?this.killTweensOf(r):(uc(this,r),r===this._recent&&(this._recent=this._last),Hr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt(Nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=$n(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var o=Ot.delayedCall(0,s||Qa,a);return o.data="isPause",this._hasPause=1,yi(this,o,$n(this,r))},t.removePause=function(r){var s=this._first;for(r=$n(this,r);s;)s._start===r&&s.data==="isPause"&&gr(s),s=s._next},t.killTweensOf=function(r,s,a){for(var o=this.getTweensOf(r,a),l=o.length;l--;)sr!==o[l]&&o[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],o=Jn(r),l=this._first,c=$i(s),u;l;)l instanceof Ot?px(l._targets,o)&&(c?(!sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,o=$n(a,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ot.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Zs(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,ei({startAt:{time:$n(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),dd(this,$n(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),dd(this,$n(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=r,o._end+=r),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=r);return Hr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Hr(this)},t.totalDuration=function(r){var s=0,a=this,o=a._last,l=Zn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,yi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Zs(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(bt._ts&&(Y_(bt,Vl(r,bt)),X_=Nn.frame),Nn.frame>=cd){cd+=zn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&zn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}(no);ei(mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fx=function(e,t,n,r,s,a,o){var l=new Tn(this._pt,e,t,0,1,Mg,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=eo(r)),a&&(y=[n,r],a(y,e,t),n=y[0],r=y[1]),h=n.match(Ic)||[];f=Ic.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?zs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Ic.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=o,(k_.test(r)||m)&&(l.e=0),this._pt=l,l},rh=function(e,t,n,r,s,a,o,l,c,u){Rt(r)&&(r=r(s||0,e,a));var f=e[t],h=n!=="get"?n:Rt(f)?c?e[t.indexOf("set")||!Rt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Rt(f)?c?Hx:yg:ah,g;if($t(r)&&(~r.indexOf("random(")&&(r=eo(r)),r.charAt(1)==="="&&(g=zs(h,r)+(rn(h)||0),(g||g===0)&&(r=g))),!u||h!==r||lf)return!isNaN(h*r)&&r!==""?(g=new Tn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?Wx:Sg,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&eh(t,r),Fx.call(this,e,t,h,r,d,l||zn.stringFilter,c))},Bx=function(e,t,n,r,s){if(Rt(e)&&(e=Ha(e,s,t,n,r)),!Ci(e)||e.style&&e.nodeType||an(e)||z_(e))return $t(e)?Ha(e,s,t,n,r):e;var a={},o;for(o in e)a[o]=Ha(e[o],s,t,n,r);return a},gg=function(e,t,n,r,s,a){var o,l,c,u;if(Un[e]&&(o=new Un[e]).init(s,o.rawVars?t[e]:Bx(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=l=new Tn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Os))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},sr,lf,sh=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,o=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Kf,S=e.timeline,C,A,E,D,U,v,w,I,j,L,G,F,$;if(S&&(!h||!s)&&(s="none"),e._ease=Vr(s,js.ease),e._yEase=f?dg(Vr(f===!0?s:f,js.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(I=p[0]?kr(p[0]).harness:0,F=I&&r[I.prop],C=Hl(r,th),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?El:hx),_._lazy=0),a){if(gr(e._startAt=Ot.set(p,ei({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Bn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!d)&&e._startAt.revert(El),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),E=ei({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Mn(l),immediateRender:o,stagger:0,parent:m},C),F&&(E[I.prop]=F),gr(e._startAt=Ot.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(El):e._startAt.render(-1,!0)),e._zTime=t,!o)i(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Mn(l)||l&&!g,A=0;A<p.length;A++){if(U=p[A],w=U._gsap||ih(p)[A]._gsap,e._ptLookup[A]=L={},tf[w.id]&&fr.length&&kl(),G=y===p?A:y.indexOf(U),I&&(j=new I).init(U,F||C,e,G,y)!==!1&&(e._pt=D=new Tn(e._pt,U,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(X){L[X]=D}),j.priority&&(v=1)),!I||F)for(E in C)Un[E]&&(j=gg(E,C,e,G,U,y))?j.priority&&(v=1):L[E]=D=rh.call(e,U,E,"get",C[E],G,y,0,r.stringFilter);e._op&&e._op[A]&&e.kill(U,e._op[A]),x&&e._pt&&(sr=e,bt.killTweensOf(U,L,e.globalTime(t)),$=!e.parent,sr=0),e._pt&&l&&(tf[w.id]=1)}v&&Eg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&S.render(Zn,!0,!0)},zx=function(e,t,n,r,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lf=1,e.vars[t]="+=0",sh(e,o),lf=0,l?Ja(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Pt(n)+rn(f.e)),f.b&&(f.b=u.s+rn(f.b))},Gx=function(e,t){var n=e[0]?kr(e[0]).harness:0,r=n&&n.aliases,s,a,o,l;if(!r)return t;s=Jr({},t);for(a in r)if(a in s)for(l=r[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},kx=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,o;if(an(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ha=function(e,t,n,r,s){return Rt(e)?e.call(t,n,r,s):$t(e)&&~e.indexOf("random(")?eo(e):e},vg=nh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",xg={};En(vg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return xg[i]=1});var Ot=function(i){F_(e,i);function e(n,r,s,a){var o;typeof r=="number"&&(s.duration=r,r=s,s=null),o=i.call(this,a?r:Ga(r))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=r.parent||bt,x=(an(n)||z_(n)?$i(n[0]):"length"in r)?[n]:Jn(n),S,C,A,E,D,U,v,w;if(o._targets=x.length?ih(x):Ja("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||Eo(c)||Eo(u)){if(r=o.vars,S=o.timeline=new mn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:x}),S.kill(),S.parent=S._dp=Fi(o),S._start=0,h||Eo(c)||Eo(u)){if(E=x.length,v=h&&ig(h),Ci(h))for(D in h)~vg.indexOf(D)&&(w||(w={}),w[D]=h[D]);for(C=0;C<E;C++)A=Hl(r,xg),A.stagger=0,m&&(A.yoyoEase=m),w&&Jr(A,w),U=x[C],A.duration=+Ha(c,Fi(o),C,U,x),A.delay=(+Ha(u,Fi(o),C,U,x)||0)-o._delay,!h&&E===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),S.to(U,A,v?v(C,U,x):0),S._ease=it.none;S.duration()?c=u=0:o.timeline=0}else if(g){Ga(ei(S.vars.defaults,{ease:"none"})),S._ease=Vr(g.ease||r.ease||"none");var I=0,j,L,G;if(an(g))g.forEach(function(F){return S.to(x,F,">")}),S.duration();else{A={};for(D in g)D==="ease"||D==="easeEach"||kx(D,g[D],A,g.easeEach);for(D in A)for(j=A[D].sort(function(F,$){return F.t-$.t}),I=0,C=0;C<j.length;C++)L=j[C],G={ease:L.e,duration:(L.t-(C?j[C-1].t:0))/100*c},G[D]=L.v,S.to(x,G,I),I+=G.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||o.duration(c=S.duration())}else o.timeline=0;return d===!0&&!Kf&&(sr=Fi(o),bt.killTweensOf(x),sr=0),yi(y,Fi(o),s),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(f||!c&&!g&&o._start===Wt(y._time)&&Mn(f)&&vx(Fi(o))&&y.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-u)||0)),p&&Q_(Fi(o),p),o}var t=e.prototype;return t.render=function(r,s,a){var o=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-_t&&!u?l:r<_t?0:r,h,d,g,_,p,m,y,x,S;if(!c)yx(this,r,s,a);else if(f!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,a);if(h=Wt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===Wt(f/_)&&(h=c,g--),h>c&&(h=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,h=c-h),p=Ks(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(x&&this._yEase&&pg(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Wt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(eg(this,u?r:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!o&&!s&&!g&&(Bn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(r<0?r:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&nf(this,r,s,a),Bn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Bn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&nf(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&gr(this,1),!s&&!(u&&!o)&&(f||o||m)&&(Bn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,o,l){to||Nn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||sh(this,c),u=this._ease(c/this._dur),zx(this,r,s,a,o,u,c,l)?this.resetTo(r,s,a,o,1):(hc(this,0),this.parent||Z_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ia(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,sr&&sr.vars.overwrite!==!0)._first||Ia(this),this.parent&&a!==this.timeline.totalDuration()&&Zs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=r?Jn(r):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&_x(o,l))return s==="all"&&(this._pt=0),Ia(this);for(f=this._op=this._op||[],s!=="all"&&($t(s)&&(_={},En(s,function(y){return _[y]=1}),s=_),s=Gx(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&uc(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Ia(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return ka(1,arguments)},e.delayedCall=function(r,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(r,s,a){return ka(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return bt.killTweensOf(r,s,a)},e}(no);ei(Ot.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En("staggerTo,staggerFrom,staggerFromTo",function(i){Ot[i]=function(){var e=new mn,t=sf.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var ah=function(e,t,n){return e[t]=n},yg=function(e,t,n){return e[t](n)},Hx=function(e,t,n,r){return e[t](r.fp,n)},Vx=function(e,t,n){return e.setAttribute(t,n)},oh=function(e,t){return Rt(e[t])?yg:Zf(e[t])&&e.setAttribute?Vx:ah},Sg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Wx=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Mg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},lh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},$x=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},Xx=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?uc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},qx=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Eg=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},Tn=function(){function i(t,n,r,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=r,this.r=o||Sg,this.d=l||this,this.set=c||ah,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=qx,this.m=n,this.mt=s,this.tween=r},i}();En(nh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return th[i]=1});kn.TweenMax=kn.TweenLite=Ot;kn.TimelineLite=kn.TimelineMax=mn;bt=new mn({sortChildren:!1,defaults:js,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=hg;var Wr=[],bl={},Yx=[],md=0,jx=0,Bc=function(e){return(bl[e]||Yx).map(function(t){return t()})},cf=function(){var e=Date.now(),t=[];e-md>2&&(Bc("matchMediaInit"),Wr.forEach(function(n){var r=n.queries,s=n.conditions,a,o,l,c;for(o in r)a=_i.matchMedia(r[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Bc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),md=e,Bc("matchMedia"))},Tg=function(){function i(t,n){this.selector=n&&af(n),this.data=[],this._r=[],this.isReverted=!1,this.id=jx++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Rt(n)&&(s=r,r=n,n=Rt);var a=this,o=function(){var c=St,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=af(s)),St=a,f=r.apply(a,arguments),Rt(f)&&a._r.push(f),St=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Rt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var r=St;St=null,n(this),St=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ot&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ot)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},e.revert=function(n){this.kill(n||{})},i}(),Kx=function(){function i(t){this.contexts=[],this.scope=t,St&&St.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Ci(n)||(n={matches:n});var a=new Tg(0,s||this.scope),o=a.conditions={},l,c,u;St&&!a.selector&&(a.selector=St.selector),this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(c in n)c==="all"?u=1:(l=_i.matchMedia(n[c]),l&&(Wr.indexOf(a)<0&&Wr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(cf):l.addEventListener("change",cf)));return u&&r(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Wl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return cg(r)})},timeline:function(e){return new mn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){$t(e)&&(e=Jn(e)[0]);var s=kr(e||{}).get,a=n?K_:j_;return n==="native"&&(n=""),e&&(t?a((Un[t]&&Un[t].get||s)(e,t,n,r)):function(o,l,c){return a((Un[o]&&Un[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Jn(e),e.length>1){var r=e.map(function(u){return Rn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var a=Un[t],o=kr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Os._pt=0,f.init(e,n?u+n:u,Os,0,[e]),f.render(1,f),Os._pt&&lh(1,Os)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var r,s=Rn.to(e,Jr((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Vr(e.ease,js.ease)),ud(js,e||{})},config:function(e){return ud(zn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!Un[o]&&!kn[o]&&Ja(t+" effect requires "+o+" plugin.")}),Oc[t]=function(o,l,c){return n(Jn(o),ei(l||{},s),c)},a&&(mn.prototype[t]=function(o,l,c){return this.add(Oc[t](o,Ci(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Vr(t)},parseEase:function(e,t){return arguments.length?Vr(e,t):it},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new mn(e),r,s;for(n.smoothChildTiming=Mn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,r=bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ot&&r.vars.onComplete===r._targets[0]))&&yi(n,r,r._start-r._delay),r=s;return yi(bt,n,0),n},context:function(e,t){return e?new Tg(e,t):St},matchMedia:function(e){return new Kx(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||cf()},addEventListener:function(e,t){var n=bl[e]||(bl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=bl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Rx,wrapYoyo:Cx,distribute:ig,random:sg,snap:rg,normalize:wx,getUnit:rn,clamp:Ex,splitColor:ug,toArray:Jn,selector:af,mapRange:og,pipe:bx,unitize:Ax,interpolate:Px,shuffle:ng},install:W_,effects:Oc,ticker:Nn,updateRoot:mn.updateRoot,plugins:Un,globalTimeline:bt,core:{PropTween:Tn,globals:$_,Tween:Ot,Timeline:mn,Animation:no,getCache:kr,_removeLinkedListItem:uc,reverting:function(){return sn},context:function(e){return e&&St&&(St.data.push(e),e._ctx=St),St},suppressOverwrites:function(e){return Kf=e}}};En("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Wl[i]=Ot[i]});Nn.add(mn.updateRoot);Os=Wl.to({},{duration:0});var Zx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Jx=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=Zx(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},zc=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(o){var l,c;if($t(s)&&(l={},En(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Jx(o,s)}}}},Rn=Wl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],r,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zc("roundProps",of),zc("modifiers"),zc("snap",rg))||Wl;Ot.version=mn.version=Rn.version="3.12.5";V_=1;Jf()&&Js();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _d,ar,Gs,ch,Br,gd,uh,Qx=function(){return typeof window<"u"},Xi={},Pr=180/Math.PI,ks=Math.PI/180,ls=Math.atan2,vd=1e8,fh=/([A-Z])/g,ey=/(left|right|width|margin|padding|x)/i,ty=/[\s,\(]\S/,Mi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ny=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},iy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},ry=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},bg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ag=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},sy=function(e,t,n){return e.style[t]=n},ay=function(e,t,n){return e.style.setProperty(t,n)},oy=function(e,t,n){return e._gsap[t]=n},ly=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},cy=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},uy=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},At="transform",bn=At+"Origin",fy=function i(e,t){var n=this,r=this.target,s=r.style,a=r._gsap;if(e in Xi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Mi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Bi(r,o)}):this.tfm[e]=a.x?a[e]:Bi(r,e),e===bn&&(this.tfm.zOrigin=a.zOrigin);else return Mi.transform.split(",").forEach(function(o){return i.call(n,o,t)});if(this.props.indexOf(At)>=0)return;a.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(bn,t,"")),e=At}(s||t)&&this.props.push(e,t,s[e])},wg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},hy=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(fh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=uh(),(!s||!s.isStart)&&!n[At]&&(wg(n),r.zOrigin&&n[bn]&&(n[bn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Rg=function(e,t){var n={target:e,props:[],revert:hy,save:fy};return e._gsap||Rn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},Cg,ff=function(e,t){var n=ar.createElementNS?ar.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ar.createElement(e);return n&&n.style?n:ar.createElement(e)},bi=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(fh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,Qs(t)||t,1)||""},xd="O,Moz,ms,Ms,Webkit".split(","),Qs=function(e,t,n){var r=t||Br,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(xd[a]+e in s););return a<0?null:(a===3?"ms":a>=0?xd[a]:"")+e},hf=function(){Qx()&&window.document&&(_d=window,ar=_d.document,Gs=ar.documentElement,Br=ff("div")||{style:{}},ff("div"),At=Qs(At),bn=At+"Origin",Br.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cg=!!Qs("perspective"),uh=Rn.core.reverting,ch=1)},Gc=function i(e){var t=ff("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Gs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Gs.removeChild(t),this.style.cssText=s,a},yd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Pg=function(e){var t;try{t=e.getBBox()}catch{t=Gc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Gc||(t=Gc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+yd(e,["x","cx","x1"])||0,y:+yd(e,["y","cy","y1"])||0,width:0,height:0}:t},Lg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Pg(e))},Qr=function(e,t){if(t){var n=e.style,r;t in Xi&&t!==bn&&(t=At),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(fh,"-$1").toLowerCase())):n.removeAttribute(t)}},or=function(e,t,n,r,s,a){var o=new Tn(e._pt,t,n,0,1,a?Ag:bg);return e._pt=o,o.b=r,o.e=s,e._props.push(n),o},Sd={deg:1,rad:1,turn:1},dy={grid:1,flex:1},vr=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Br.style,l=ey.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,p,m;if(r===a||!s||Sd[r]||Sd[a])return s;if(a!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&Lg(e),(d||a==="%")&&(Xi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Pt(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ar||!_.appendChild)&&(_=ar.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Nn.time&&!p.uncache)return Pt(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[u],y?e.style[t]=y:Qr(e,t)}else(d||a==="%")&&!dy[bi(_,"display")]&&(o.position=bi(e,"position")),_===e&&(o.position="static"),_.appendChild(Br),g=Br[u],_.removeChild(Br),o.position="absolute";return l&&d&&(p=kr(_),p.time=Nn.time,p.width=_[u]),Pt(h?g*s/f:g&&s?f/g*s:0)},Bi=function(e,t,n,r){var s;return ch||hf(),t in Mi&&t!=="transform"&&(t=Mi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Xi[t]&&t!=="transform"?(s=ro(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Xl(bi(e,bn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=$l[t]&&$l[t](e,t,n)||bi(e,t)||q_(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?vr(e,t,s,n)+n:s},py=function(e,t,n,r){if(!n||n==="none"){var s=Qs(t,e,1),a=s&&bi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=bi(e,"borderTopColor"))}var o=new Tn(this._pt,e.style,t,0,1,Mg),l=0,c=0,u,f,h,d,g,_,p,m,y,x,S,C;if(o.b=n,o.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=bi(e,t)||r,_?e.style[t]=_:Qr(e,t)),u=[n,r],hg(u),n=u[0],r=u[1],h=n.match(Is)||[],C=r.match(Is)||[],C.length){for(;f=Is.exec(r);)p=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=zs(d,p)+S),m=parseFloat(p),x=p.substr((m+"").length),l=Is.lastIndex-x.length,x||(x=x||zn.units[t]||S,l===r.length&&(r+=x,o.e+=x)),S!==x&&(d=vr(e,t,_,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<r.length?r.substring(l,r.length):""}else o.r=t==="display"&&r==="none"?Ag:bg;return k_.test(r)&&(o.e=0),this._pt=o,o},Md={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},my=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Md[n]||n,t[1]=Md[r]||r,t.join(" ")},_y=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Xi[o]&&(l=1,o=o==="transformOrigin"?bn:At),Qr(n,o);l&&(Qr(n,At),a&&(a.svg&&n.removeAttribute("transform"),ro(n,1),a.uncache=1,wg(r)))}},$l={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new Tn(e._pt,t,n,0,0,_y);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},io=[1,0,0,1,0,0],Dg={},Ig=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ed=function(e){var t=bi(e,At);return Ig(t)?io:t.substr(7).match(G_).map(Pt)},hh=function(e,t){var n=e._gsap||kr(e),r=e.style,s=Ed(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?io:s):(s===io&&!e.offsetParent&&e!==Gs&&!n.svg&&(l=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,Gs.appendChild(e)),s=Ed(e),l?r.display=l:Qr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Gs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},df=function(e,t,n,r,s,a){var o=e._gsap,l=s||hh(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],x=t.split(" "),S=parseFloat(x[0])||0,C=parseFloat(x[1])||0,A,E,D,U;n?l!==io&&(E=d*p-g*_)&&(D=S*(p/E)+C*(-_/E)+(_*y-p*m)/E,U=S*(-g/E)+C*(d/E)-(d*y-g*m)/E,S=D,C=U):(A=Pg(e),S=A.x+(~x[0].indexOf("%")?S/100*A.width:S),C=A.y+(~(x[1]||x[0]).indexOf("%")?C/100*A.height:C)),r||r!==!1&&o.smooth?(m=S-c,y=C-u,o.xOffset=f+(m*d+y*_)-m,o.yOffset=h+(m*g+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=C,o.smooth=!!r,o.origin=t,o.originIsAbsolute=!!n,e.style[bn]="0px 0px",a&&(or(a,o,"xOrigin",c,S),or(a,o,"yOrigin",u,C),or(a,o,"xOffset",f,o.xOffset),or(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+C)},ro=function(e,t){var n=e._gsap||new _g(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=bi(e,bn)||"0",u,f,h,d,g,_,p,m,y,x,S,C,A,E,D,U,v,w,I,j,L,G,F,$,X,Y,R,K,re,Ie,W,Z;return u=f=h=_=p=m=y=x=S=0,d=g=1,n.svg=!!(e.getCTM&&Lg(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[At]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[At]!=="none"?l[At]:"")),r.scale=r.rotate=r.translate="none"),E=hh(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),df(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,A=n.yOrigin||0,E!==io&&(w=E[0],I=E[1],j=E[2],L=E[3],u=G=E[4],f=F=E[5],E.length===6?(d=Math.sqrt(w*w+I*I),g=Math.sqrt(L*L+j*j),_=w||I?ls(I,w)*Pr:0,y=j||L?ls(j,L)*Pr+_:0,y&&(g*=Math.abs(Math.cos(y*ks))),n.svg&&(u-=C-(C*w+A*j),f-=A-(C*I+A*L))):(Z=E[6],Ie=E[7],R=E[8],K=E[9],re=E[10],W=E[11],u=E[12],f=E[13],h=E[14],D=ls(Z,re),p=D*Pr,D&&(U=Math.cos(-D),v=Math.sin(-D),$=G*U+R*v,X=F*U+K*v,Y=Z*U+re*v,R=G*-v+R*U,K=F*-v+K*U,re=Z*-v+re*U,W=Ie*-v+W*U,G=$,F=X,Z=Y),D=ls(-j,re),m=D*Pr,D&&(U=Math.cos(-D),v=Math.sin(-D),$=w*U-R*v,X=I*U-K*v,Y=j*U-re*v,W=L*v+W*U,w=$,I=X,j=Y),D=ls(I,w),_=D*Pr,D&&(U=Math.cos(D),v=Math.sin(D),$=w*U+I*v,X=G*U+F*v,I=I*U-w*v,F=F*U-G*v,w=$,G=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Pt(Math.sqrt(w*w+I*I+j*j)),g=Pt(Math.sqrt(F*F+Z*Z)),D=ls(G,F),y=Math.abs(D)>2e-4?D*Pr:0,S=W?1/(W<0?-W:W):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ig(bi(e,At)),$&&e.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Pt(d),n.scaleY=Pt(g),n.rotation=Pt(_)+o,n.rotationX=Pt(p)+o,n.rotationY=Pt(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[bn]=Xl(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?vy:Cg?Og:gy,n.uncache=0,n},Xl=function(e){return(e=e.split(" "))[0]+" "+e[1]},kc=function(e,t,n){var r=rn(t);return Pt(parseFloat(t)+parseFloat(vr(e,"x",n+"px",r)))+r},gy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Og(e,t)},Tr="0deg",_a="0px",br=") ",Og=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,S="",C=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==Tr||u!==Tr)){var A=parseFloat(u)*ks,E=Math.sin(A),D=Math.cos(A),U;A=parseFloat(f)*ks,U=Math.cos(A),a=kc(y,a,E*U*-x),o=kc(y,o,-Math.sin(A)*-x),l=kc(y,l,D*U*-x+x)}p!==_a&&(S+="perspective("+p+br),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(C||a!==_a||o!==_a||l!==_a)&&(S+=l!==_a||C?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+br),c!==Tr&&(S+="rotate("+c+br),u!==Tr&&(S+="rotateY("+u+br),f!==Tr&&(S+="rotateX("+f+br),(h!==Tr||d!==Tr)&&(S+="skew("+h+", "+d+br),(g!==1||_!==1)&&(S+="scale("+g+", "+_+br),y.style[At]=S||"translate(0, 0)"},vy=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),S=parseFloat(o),C,A,E,D,U;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ks,c*=ks,C=Math.cos(l)*f,A=Math.sin(l)*f,E=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=ks,U=Math.tan(c-u),U=Math.sqrt(1+U*U),E*=U,D*=U,u&&(U=Math.tan(u),U=Math.sqrt(1+U*U),C*=U,A*=U)),C=Pt(C),A=Pt(A),E=Pt(E),D=Pt(D)):(C=f,D=h,A=E=0),(x&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(x=vr(d,"x",a,"px"),S=vr(d,"y",o,"px")),(g||_||p||m)&&(x=Pt(x+g-(g*C+_*E)+p),S=Pt(S+_-(g*A+_*D)+m)),(r||s)&&(U=d.getBBox(),x=Pt(x+r/100*U.width),S=Pt(S+s/100*U.height)),U="matrix("+C+","+A+","+E+","+D+","+x+","+S+")",d.setAttribute("transform",U),y&&(d.style[At]=U)},xy=function(e,t,n,r,s){var a=360,o=$t(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Pr:1),c=l-r,u=r+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*vd)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*vd)%a-~~(c/a)*a)),e._pt=h=new Tn(e._pt,t,n,r,c,ny),h.e=u,h.u="deg",e._props.push(n),h},Td=function(e,t){for(var n in t)e[n]=t[n];return e},yy=function(e,t,n){var r=Td({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[At]=t,o=ro(n,1),Qr(n,At),n.setAttribute("transform",c)):(c=getComputedStyle(n)[At],a[At]=t,o=ro(n,1),a[At]=c);for(l in Xi)c=r[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=rn(c),g=rn(u),f=d!==g?vr(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Tn(e._pt,o,l,f,h-f,uf),e._pt.u=g||0,e._props.push(l));Td(o,r)};En("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(o){return e<2?i+o:"border"+o+i});$l[e>1?"border"+i:i]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return Bi(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var Ug={name:"css",register:hf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,x,S,C,A,E,D;ch||hf(),this.styles=this.styles||Rg(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Un[_]&&gg(_,t,n,r,e,s)))){if(d=typeof u,g=$l[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=eo(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",hr.lastIndex=0,hr.test(c)||(p=rn(c),m=rn(u)),m?p!==m&&(c=vr(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,r,s,0,0,_),a.push(_),D.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],$t(c)&&~c.indexOf("random(")&&(c=eo(c)),rn(c+"")||c==="auto"||(c+=zn.units[_]||rn(Bi(e,_))||""),(c+"").charAt(1)==="="&&(c=Bi(e,_))):c=Bi(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Mi&&(_==="autoAlpha"&&(h===1&&Bi(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,o.visibility),or(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Mi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in Xi,x){if(this.styles.save(_),S||(C=e._gsap,C.renderTransform&&!t.parseTransform||ro(e,t.parseTransform),A=t.smoothOrigin!==!1&&C.smooth,S=this._pt=new Tn(this._pt,o,At,0,1,C.renderTransform,C,0,-1),S.dep=1),_==="scale")this._pt=new Tn(this._pt,C,"scaleY",C.scaleY,(y?zs(C.scaleY,y+f):f)-C.scaleY||0,uf),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(bn,0,o[bn]),u=my(u),C.svg?df(e,u,0,A,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==C.zOrigin&&or(this,C,"zOrigin",C.zOrigin,m),or(this,o,_,Xl(c),Xl(u)));continue}else if(_==="svgOrigin"){df(e,u,1,A,0,this);continue}else if(_ in Dg){xy(this,C,_,h,y?zs(h,y+u):u);continue}else if(_==="smoothOrigin"){or(this,C,"smooth",C.smooth,u);continue}else if(_==="force3D"){C[_]=u;continue}else if(_==="transform"){yy(this,u,e);continue}}else _ in o||(_=Qs(_)||_);if(x||(f||f===0)&&(h||h===0)&&!ty.test(u)&&_ in o)p=(c+"").substr((h+"").length),f||(f=0),m=rn(u)||(_ in zn.units?zn.units[_]:p),p!==m&&(h=vr(e,_,c,m)),this._pt=new Tn(this._pt,x?C:o,_,h,(y?zs(h,y+f):f)-h,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?ry:uf),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=iy);else if(_ in o)py.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){eh(_,u);continue}x||(_ in o?D.push(_,0,o[_]):D.push(_,1,c||e[_])),a.push(_)}}E&&Eg(this)},render:function(e,t){if(t.tween._time||!uh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bi,aliases:Mi,getSetter:function(e,t,n){var r=Mi[t];return r&&r.indexOf(",")<0&&(t=r),t in Xi&&t!==bn&&(e._gsap.x||Bi(e,"x"))?n&&gd===n?t==="scale"?ly:oy:(gd=n||{})&&(t==="scale"?cy:uy):e.style&&!Zf(e.style[t])?sy:~t.indexOf("-")?ay:oh(e,t)},core:{_removeProperty:Qr,_getMatrix:hh}};Rn.utils.checkPrefix=Qs;Rn.core.getStyleSaver=Rg;(function(i,e,t,n){var r=En(i+","+e+","+t,function(s){Xi[s]=1});En(e,function(s){zn.units[s]="deg",Dg[s]=1}),Mi[r[13]]=i+","+e,En(n,function(s){var a=s.split(":");Mi[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");En("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){zn.units[i]="px"});Rn.registerPlugin(Ug);var Ng=Rn.registerPlugin(Ug)||Rn;Ng.core.Tween;/*! *****************************************************************************
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
***************************************************************************** */var pf=function(i,e){return pf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},pf(i,e)};function Sy(i,e){pf(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ai=function(){return Ai=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ai.apply(this,arguments)};function Ur(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var o=i.length-1;o>=0;o--)(a=i[o])&&(s=(r<3?a(s):r>3?a(e,t,s):a(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function My(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],a=0,o=s.length;a<o;a++,r++)n[r]=s[a];return n}var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Kt=function(i){try{return!!i()}catch{return!0}},Ey=Kt,dh=!Ey(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),Fg=dh,Bg=Function.prototype,mf=Bg.call,Ty=Fg&&Bg.bind.bind(mf,mf),Ct=Fg?Ty:function(i){return function(){return mf.apply(i,arguments)}},zg=Ct,by=zg({}.toString),Ay=zg("".slice),aa=function(i){return Ay(by(i),8,-1)},wy=Ct,Ry=Kt,Cy=aa,Hc=Object,Py=wy("".split),ph=Ry(function(){return!Hc("z").propertyIsEnumerable(0)})?function(i){return Cy(i)==="String"?Py(i,""):Hc(i)}:Hc,oa=function(i){return i==null},Ly=oa,Dy=TypeError,dc=function(i){if(Ly(i))throw new Dy("Can't call method on "+i);return i},Iy=ph,Oy=dc,la=function(i){return Iy(Oy(i))},ga=function(i){return i&&i.Math===Math&&i},Hn=ga(typeof globalThis=="object"&&globalThis)||ga(typeof window=="object"&&window)||ga(typeof self=="object"&&self)||ga(typeof To=="object"&&To)||ga(typeof To=="object"&&To)||function(){return this}()||Function("return this")(),Gg={exports:{}},Uy=!1,bd=Hn,Ny=Object.defineProperty,mh=function(i,e){try{Ny(bd,i,{value:e,configurable:!0,writable:!0})}catch{bd[i]=e}return e},Fy=Hn,By=mh,Ad="__core-js_shared__",zy=Fy[Ad]||By(Ad,{}),_h=zy,wd=_h;(Gg.exports=function(i,e){return wd[i]||(wd[i]=e!==void 0?e:{})})("versions",[]).push({version:"3.35.1",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"});var kg=Gg.exports,Gy=dc,ky=Object,uo=function(i){return ky(Gy(i))},Hy=Ct,Vy=uo,Wy=Hy({}.hasOwnProperty),hi=Object.hasOwn||function(e,t){return Wy(Vy(e),t)},$y=Ct,Xy=0,qy=Math.random(),Yy=$y(1 .toString),gh=function(i){return"Symbol("+(i===void 0?"":i)+")_"+Yy(++Xy+qy,36)},jy=typeof navigator<"u"&&String(navigator.userAgent)||"",Hg=Hn,Vc=jy,Rd=Hg.process,Cd=Hg.Deno,Pd=Rd&&Rd.versions||Cd&&Cd.version,Ld=Pd&&Pd.v8,li,ql;Ld&&(li=Ld.split("."),ql=li[0]>0&&li[0]<4?1:+(li[0]+li[1]));!ql&&Vc&&(li=Vc.match(/Edge\/(\d+)/),(!li||li[1]>=74)&&(li=Vc.match(/Chrome\/(\d+)/),li&&(ql=+li[1])));var Ky=ql,Dd=Ky,Zy=Kt,Jy=Hn,Qy=Jy.String,Vg=!!Object.getOwnPropertySymbols&&!Zy(function(){var i=Symbol("symbol detection");return!Qy(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&Dd&&Dd<41}),eS=Vg,Wg=eS&&!Symbol.sham&&typeof Symbol.iterator=="symbol",tS=Hn,nS=kg,Id=hi,iS=gh,rS=Vg,sS=Wg,Us=tS.Symbol,Wc=nS("wks"),aS=sS?Us.for||Us:Us&&Us.withoutSetter||iS,ni=function(i){return Id(Wc,i)||(Wc[i]=rS&&Id(Us,i)?Us[i]:aS("Symbol."+i)),Wc[i]},$c=typeof document=="object"&&document.all,Zt=typeof $c>"u"&&$c!==void 0?function(i){return typeof i=="function"||i===$c}:function(i){return typeof i=="function"},oS=Zt,Cn=function(i){return typeof i=="object"?i!==null:oS(i)},lS=Cn,cS=String,uS=TypeError,Pi=function(i){if(lS(i))return i;throw new uS(cS(i)+" is not an object")},$g={},fS=Kt,ii=!fS(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),hS=ii,dS=Kt,Xg=hS&&dS(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),di={},pS=Hn,Od=Cn,_f=pS.document,mS=Od(_f)&&Od(_f.createElement),qg=function(i){return mS?_f.createElement(i):{}},_S=ii,gS=Kt,vS=qg,Yg=!_S&&!gS(function(){return Object.defineProperty(vS("div"),"a",{get:function(){return 7}}).a!==7}),xS=dh,bo=Function.prototype.call,Ki=xS?bo.bind(bo):function(){return bo.apply(bo,arguments)},Xc=Hn,yS=Zt,SS=function(i){return yS(i)?i:void 0},fo=function(i,e){return arguments.length<2?SS(Xc[i]):Xc[i]&&Xc[i][e]},MS=Ct,vh=MS({}.isPrototypeOf),ES=fo,TS=Zt,bS=vh,AS=Wg,wS=Object,jg=AS?function(i){return typeof i=="symbol"}:function(i){var e=ES("Symbol");return TS(e)&&bS(e.prototype,wS(i))},RS=String,xh=function(i){try{return RS(i)}catch{return"Object"}},CS=Zt,PS=xh,LS=TypeError,ho=function(i){if(CS(i))return i;throw new LS(PS(i)+" is not a function")},DS=ho,IS=oa,yh=function(i,e){var t=i[e];return IS(t)?void 0:DS(t)},qc=Ki,Yc=Zt,jc=Cn,OS=TypeError,US=function(i,e){var t,n;if(e==="string"&&Yc(t=i.toString)&&!jc(n=qc(t,i))||Yc(t=i.valueOf)&&!jc(n=qc(t,i))||e!=="string"&&Yc(t=i.toString)&&!jc(n=qc(t,i)))return n;throw new OS("Can't convert object to primitive value")},NS=Ki,Ud=Cn,Nd=jg,FS=yh,BS=US,zS=ni,GS=TypeError,kS=zS("toPrimitive"),HS=function(i,e){if(!Ud(i)||Nd(i))return i;var t=FS(i,kS),n;if(t){if(e===void 0&&(e="default"),n=NS(t,i,e),!Ud(n)||Nd(n))return n;throw new GS("Can't convert object to primitive value")}return e===void 0&&(e="number"),BS(i,e)},VS=HS,WS=jg,Sh=function(i){var e=VS(i,"string");return WS(e)?e:e+""},$S=ii,XS=Yg,qS=Xg,Ao=Pi,Fd=Sh,YS=TypeError,Kc=Object.defineProperty,jS=Object.getOwnPropertyDescriptor,Zc="enumerable",Jc="configurable",Qc="writable";di.f=$S?qS?function(e,t,n){if(Ao(e),t=Fd(t),Ao(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Qc in n&&!n[Qc]){var r=jS(e,t);r&&r[Qc]&&(e[t]=n.value,n={configurable:Jc in n?n[Jc]:r[Jc],enumerable:Zc in n?n[Zc]:r[Zc],writable:!1})}return Kc(e,t,n)}:Kc:function(e,t,n){if(Ao(e),t=Fd(t),Ao(n),XS)try{return Kc(e,t,n)}catch{}if("get"in n||"set"in n)throw new YS("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var KS=Math.ceil,ZS=Math.floor,JS=Math.trunc||function(e){var t=+e;return(t>0?ZS:KS)(t)},QS=JS,Mh=function(i){var e=+i;return e!==e||e===0?0:QS(e)},eM=Mh,tM=Math.max,nM=Math.min,iM=function(i,e){var t=eM(i);return t<0?tM(t+e,0):nM(t,e)},rM=Mh,sM=Math.min,aM=function(i){var e=rM(i);return e>0?sM(e,9007199254740991):0},oM=aM,pc=function(i){return oM(i.length)},lM=la,cM=iM,uM=pc,Bd=function(i){return function(e,t,n){var r=lM(e),s=uM(r),a=cM(n,s),o;if(i&&t!==t){for(;s>a;)if(o=r[a++],o!==o)return!0}else for(;s>a;a++)if((i||a in r)&&r[a]===t)return i||a||0;return!i&&-1}},fM={includes:Bd(!0),indexOf:Bd(!1)},mc={},hM=Ct,eu=hi,dM=la,pM=fM.indexOf,mM=mc,zd=hM([].push),Kg=function(i,e){var t=dM(i),n=0,r=[],s;for(s in t)!eu(mM,s)&&eu(t,s)&&zd(r,s);for(;e.length>n;)eu(t,s=e[n++])&&(~pM(r,s)||zd(r,s));return r},Eh=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_M=Kg,gM=Eh,Zg=Object.keys||function(e){return _M(e,gM)},vM=ii,xM=Xg,yM=di,SM=Pi,MM=la,EM=Zg;$g.f=vM&&!xM?Object.defineProperties:function(e,t){SM(e);for(var n=MM(t),r=EM(t),s=r.length,a=0,o;s>a;)yM.f(e,o=r[a++],n[o]);return e};var TM=fo,bM=TM("document","documentElement"),AM=kg,wM=gh,Gd=AM("keys"),Th=function(i){return Gd[i]||(Gd[i]=wM(i))},RM=Pi,CM=$g,kd=Eh,PM=mc,LM=bM,DM=qg,IM=Th,Hd=">",Vd="<",gf="prototype",vf="script",Jg=IM("IE_PROTO"),tu=function(){},Qg=function(i){return Vd+vf+Hd+i+Vd+"/"+vf+Hd},Wd=function(i){i.write(Qg("")),i.close();var e=i.parentWindow.Object;return i=null,e},OM=function(){var i=DM("iframe"),e="java"+vf+":",t;return i.style.display="none",LM.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(Qg("document.F=Object")),t.close(),t.F},wo,Al=function(){try{wo=new ActiveXObject("htmlfile")}catch{}Al=typeof document<"u"?document.domain&&wo?Wd(wo):OM():Wd(wo);for(var i=kd.length;i--;)delete Al[gf][kd[i]];return Al()};PM[Jg]=!0;var bh=Object.create||function(e,t){var n;return e!==null?(tu[gf]=RM(e),n=new tu,tu[gf]=null,n[Jg]=e):n=Al(),t===void 0?n:CM.f(n,t)},UM=ni,NM=bh,FM=di.f,xf=UM("unscopables"),yf=Array.prototype;yf[xf]===void 0&&FM(yf,xf,{configurable:!0,value:NM(null)});var BM=function(i){yf[xf][i]=!0},po={},zM=Hn,GM=Zt,$d=zM.WeakMap,ev=GM($d)&&/native code/.test(String($d)),_c=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},kM=ii,HM=di,VM=_c,Ah=kM?function(i,e,t){return HM.f(i,e,VM(1,t))}:function(i,e,t){return i[e]=t,i},WM=ev,tv=Hn,$M=Cn,XM=Ah,nu=hi,iu=_h,qM=Th,YM=mc,Xd="Object already initialized",Sf=tv.TypeError,jM=tv.WeakMap,Yl,so,jl,KM=function(i){return jl(i)?so(i):Yl(i,{})},ZM=function(i){return function(e){var t;if(!$M(e)||(t=so(e)).type!==i)throw new Sf("Incompatible receiver, "+i+" required");return t}};if(WM||iu.state){var pi=iu.state||(iu.state=new jM);pi.get=pi.get,pi.has=pi.has,pi.set=pi.set,Yl=function(i,e){if(pi.has(i))throw new Sf(Xd);return e.facade=i,pi.set(i,e),e},so=function(i){return pi.get(i)||{}},jl=function(i){return pi.has(i)}}else{var cs=qM("state");YM[cs]=!0,Yl=function(i,e){if(nu(i,cs))throw new Sf(Xd);return e.facade=i,XM(i,cs,e),e},so=function(i){return nu(i,cs)?i[cs]:{}},jl=function(i){return nu(i,cs)}}var ca={set:Yl,get:so,has:jl,enforce:KM,getterFor:ZM},wh={},Rh={},nv={}.propertyIsEnumerable,iv=Object.getOwnPropertyDescriptor,JM=iv&&!nv.call({1:2},1);Rh.f=JM?function(e){var t=iv(this,e);return!!t&&t.enumerable}:nv;var QM=ii,eE=Ki,tE=Rh,nE=_c,iE=la,rE=Sh,sE=hi,aE=Yg,qd=Object.getOwnPropertyDescriptor;wh.f=QM?qd:function(e,t){if(e=iE(e),t=rE(t),aE)try{return qd(e,t)}catch{}if(sE(e,t))return nE(!eE(tE.f,e,t),e[t])};var rv={exports:{}},Mf=ii,oE=hi,sv=Function.prototype,lE=Mf&&Object.getOwnPropertyDescriptor,Ch=oE(sv,"name"),cE=Ch&&(function(){}).name==="something",uE=Ch&&(!Mf||Mf&&lE(sv,"name").configurable),av={EXISTS:Ch,PROPER:cE,CONFIGURABLE:uE},fE=Ct,hE=Zt,Ef=_h,dE=fE(Function.toString);hE(Ef.inspectSource)||(Ef.inspectSource=function(i){return dE(i)});var ov=Ef.inspectSource,Ph=Ct,pE=Kt,mE=Zt,Ro=hi,Tf=ii,_E=av.CONFIGURABLE,gE=ov,lv=ca,vE=lv.enforce,xE=lv.get,Yd=String,wl=Object.defineProperty,yE=Ph("".slice),SE=Ph("".replace),ME=Ph([].join),EE=Tf&&!pE(function(){return wl(function(){},"length",{value:8}).length!==8}),TE=String(String).split("String"),bE=rv.exports=function(i,e,t){yE(Yd(e),0,7)==="Symbol("&&(e="["+SE(Yd(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!Ro(i,"name")||_E&&i.name!==e)&&(Tf?wl(i,"name",{value:e,configurable:!0}):i.name=e),EE&&t&&Ro(t,"arity")&&i.length!==t.arity&&wl(i,"length",{value:t.arity});try{t&&Ro(t,"constructor")&&t.constructor?Tf&&wl(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=vE(i);return Ro(n,"source")||(n.source=ME(TE,typeof e=="string"?e:"")),i};Function.prototype.toString=bE(function(){return mE(this)&&xE(this).source||gE(this)},"toString");var cv=rv.exports,AE=Zt,wE=di,RE=cv,CE=mh,ua=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(AE(t)&&RE(t,s,n),n.global)r?i[e]=t:CE(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:wE.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},gc={},PE=Kg,LE=Eh,DE=LE.concat("length","prototype");gc.f=Object.getOwnPropertyNames||function(e){return PE(e,DE)};var Lh={};Lh.f=Object.getOwnPropertySymbols;var IE=fo,OE=Ct,UE=gc,NE=Lh,FE=Pi,BE=OE([].concat),zE=IE("Reflect","ownKeys")||function(e){var t=UE.f(FE(e)),n=NE.f;return n?BE(t,n(e)):t},jd=hi,GE=zE,kE=wh,HE=di,VE=function(i,e,t){for(var n=GE(e),r=HE.f,s=kE.f,a=0;a<n.length;a++){var o=n[a];!jd(i,o)&&!(t&&jd(t,o))&&r(i,o,s(e,o))}},WE=Kt,$E=Zt,XE=/#|\.prototype\./,mo=function(i,e){var t=YE[qE(i)];return t===KE?!0:t===jE?!1:$E(e)?WE(e):!!e},qE=mo.normalize=function(i){return String(i).replace(XE,".").toLowerCase()},YE=mo.data={},jE=mo.NATIVE="N",KE=mo.POLYFILL="P",uv=mo,Co=Hn,ZE=wh.f,JE=Ah,QE=ua,eT=mh,tT=VE,nT=uv,fa=function(i,e){var t=i.target,n=i.global,r=i.stat,s,a,o,l,c,u;if(n?a=Co:r?a=Co[t]||eT(t,{}):a=Co[t]&&Co[t].prototype,a)for(o in e){if(c=e[o],i.dontCallGetSet?(u=ZE(a,o),l=u&&u.value):l=a[o],s=nT(n?o:t+(r?".":"#")+o,i.forced),!s&&l!==void 0){if(typeof c==typeof l)continue;tT(c,l)}(i.sham||l&&l.sham)&&JE(c,"sham",!0),QE(a,o,c,i)}},iT=Kt,rT=!iT(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),sT=hi,aT=Zt,oT=uo,lT=Th,cT=rT,Kd=lT("IE_PROTO"),bf=Object,uT=bf.prototype,fv=cT?bf.getPrototypeOf:function(i){var e=oT(i);if(sT(e,Kd))return e[Kd];var t=e.constructor;return aT(t)&&e instanceof t?t.prototype:e instanceof bf?uT:null},fT=Kt,hT=Zt,dT=Cn,Zd=fv,pT=ua,mT=ni,Af=mT("iterator"),hv=!1,es,ru,su;[].keys&&(su=[].keys(),"next"in su?(ru=Zd(Zd(su)),ru!==Object.prototype&&(es=ru)):hv=!0);var _T=!dT(es)||fT(function(){var i={};return es[Af].call(i)!==i});_T&&(es={});hT(es[Af])||pT(es,Af,function(){return this});var dv={IteratorPrototype:es,BUGGY_SAFARI_ITERATORS:hv},gT=di.f,vT=hi,xT=ni,Jd=xT("toStringTag"),Dh=function(i,e,t){i&&!t&&(i=i.prototype),i&&!vT(i,Jd)&&gT(i,Jd,{configurable:!0,value:e})},yT=dv.IteratorPrototype,ST=bh,MT=_c,ET=Dh,TT=po,bT=function(){return this},AT=function(i,e,t,n){var r=e+" Iterator";return i.prototype=ST(yT,{next:MT(+!n,t)}),ET(i,r,!1),TT[r]=bT,i},wT=Ct,RT=ho,CT=function(i,e,t){try{return wT(RT(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},PT=Cn,LT=function(i){return PT(i)||i===null},DT=LT,IT=String,OT=TypeError,UT=function(i){if(DT(i))return i;throw new OT("Can't set "+IT(i)+" as a prototype")},NT=CT,FT=Pi,BT=UT,pv=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=NT(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return FT(r),BT(s),i?t(r,s):r.__proto__=s,r}}():void 0),zT=fa,GT=Ki,mv=av,kT=Zt,HT=AT,Qd=fv,ep=pv,VT=Dh,WT=Ah,au=ua,$T=ni,XT=po,_v=dv,qT=mv.PROPER,YT=mv.CONFIGURABLE,tp=_v.IteratorPrototype,Po=_v.BUGGY_SAFARI_ITERATORS,va=$T("iterator"),np="keys",xa="values",ip="entries",jT=function(){return this},Ih=function(i,e,t,n,r,s,a){HT(t,e,n);var o=function(m){if(m===r&&h)return h;if(!Po&&m&&m in u)return u[m];switch(m){case np:return function(){return new t(this,m)};case xa:return function(){return new t(this,m)};case ip:return function(){return new t(this,m)}}return function(){return new t(this)}},l=e+" Iterator",c=!1,u=i.prototype,f=u[va]||u["@@iterator"]||r&&u[r],h=!Po&&f||o(r),d=e==="Array"&&u.entries||f,g,_,p;if(d&&(g=Qd(d.call(new i)),g!==Object.prototype&&g.next&&(Qd(g)!==tp&&(ep?ep(g,tp):kT(g[va])||au(g,va,jT)),VT(g,l,!0))),qT&&r===xa&&f&&f.name!==xa&&(YT?WT(u,"name",xa):(c=!0,h=function(){return GT(f,this)})),r)if(_={values:o(xa),keys:s?h:o(np),entries:o(ip)},a)for(p in _)(Po||c||!(p in u))&&au(u,p,_[p]);else zT({target:e,proto:!0,forced:Po||c},_);return u[va]!==h&&au(u,va,h,{name:r}),XT[e]=h,_},Oh=function(i,e){return{value:i,done:e}},KT=la,Uh=BM,rp=po,gv=ca,ZT=di.f,JT=Ih,Lo=Oh,QT=ii,vv="Array Iterator",eb=gv.set,tb=gv.getterFor(vv);JT(Array,"Array",function(i,e){eb(this,{type:vv,target:KT(i),index:0,kind:e})},function(){var i=tb(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,Lo(void 0,!0);switch(i.kind){case"keys":return Lo(t,!1);case"values":return Lo(e[t],!1)}return Lo([t,e[t]],!1)},"values");var sp=rp.Arguments=rp.Array;Uh("keys");Uh("values");Uh("entries");if(QT&&sp.name!=="values")try{ZT(sp,"name",{value:"values"})}catch{}var xv={exports:{}},yv={},nb=Ct,ib=nb([].slice),rb=aa,sb=la,Sv=gc.f,ab=ib,Mv=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],ob=function(i){try{return Sv(i)}catch{return ab(Mv)}};yv.f=function(e){return Mv&&rb(e)==="Window"?ob(e):Sv(sb(e))};var lb=Kt,cb=lb(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),ub=Kt,fb=Cn,hb=aa,ap=cb,Rl=Object.isExtensible,db=ub(function(){Rl(1)}),pb=db||ap?function(e){return!fb(e)||ap&&hb(e)==="ArrayBuffer"?!1:Rl?Rl(e):!0}:Rl,mb=Kt,Ev=!mb(function(){return Object.isExtensible(Object.preventExtensions({}))}),_b=fa,gb=Ct,vb=mc,xb=Cn,Nh=hi,yb=di.f,op=gc,Sb=yv,Fh=pb,Mb=gh,Eb=Ev,Tv=!1,qi=Mb("meta"),Tb=0,Bh=function(i){yb(i,qi,{value:{objectID:"O"+Tb++,weakData:{}}})},bb=function(i,e){if(!xb(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!Nh(i,qi)){if(!Fh(i))return"F";if(!e)return"E";Bh(i)}return i[qi].objectID},Ab=function(i,e){if(!Nh(i,qi)){if(!Fh(i))return!0;if(!e)return!1;Bh(i)}return i[qi].weakData},wb=function(i){return Eb&&Tv&&Fh(i)&&!Nh(i,qi)&&Bh(i),i},Rb=function(){Cb.enable=function(){},Tv=!0;var i=op.f,e=gb([].splice),t={};t[qi]=1,i(t).length&&(op.f=function(n){for(var r=i(n),s=0,a=r.length;s<a;s++)if(r[s]===qi){e(r,s,1);break}return r},_b({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Sb.f}))},Cb=xv.exports={enable:Rb,fastKey:bb,getWeakData:Ab,onFreeze:wb};vb[qi]=!0;var vc=xv.exports,Pb=aa,Lb=Ct,Db=function(i){if(Pb(i)==="Function")return Lb(i)},lp=Db,Ib=ho,Ob=dh,Ub=lp(lp.bind),xc=function(i,e){return Ib(i),e===void 0?i:Ob?Ub(i,e):function(){return i.apply(e,arguments)}},Nb=ni,Fb=po,Bb=Nb("iterator"),zb=Array.prototype,bv=function(i){return i!==void 0&&(Fb.Array===i||zb[Bb]===i)},Gb=ni,kb=Gb("toStringTag"),Av={};Av[kb]="z";var zh=String(Av)==="[object z]",Hb=zh,Vb=Zt,Cl=aa,Wb=ni,$b=Wb("toStringTag"),Xb=Object,qb=Cl(function(){return arguments}())==="Arguments",Yb=function(i,e){try{return i[e]}catch{}},yc=Hb?Cl:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=Yb(e=Xb(i),$b))=="string"?t:qb?Cl(e):(n=Cl(e))==="Object"&&Vb(e.callee)?"Arguments":n},jb=yc,cp=yh,Kb=oa,Zb=po,Jb=ni,Qb=Jb("iterator"),Gh=function(i){if(!Kb(i))return cp(i,Qb)||cp(i,"@@iterator")||Zb[jb(i)]},eA=Ki,tA=ho,nA=Pi,iA=xh,rA=Gh,sA=TypeError,wv=function(i,e){var t=arguments.length<2?rA(i):e;if(tA(t))return nA(eA(t,i));throw new sA(iA(i)+" is not iterable")},aA=Ki,up=Pi,oA=yh,Rv=function(i,e,t){var n,r;up(i);try{if(n=oA(i,"return"),!n){if(e==="throw")throw t;return t}n=aA(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return up(n),t},lA=xc,cA=Ki,uA=Pi,fA=xh,hA=bv,dA=pc,fp=vh,pA=wv,mA=Gh,hp=Rv,_A=TypeError,Pl=function(i,e){this.stopped=i,this.result=e},dp=Pl.prototype,Sc=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),a=!!(t&&t.IS_ITERATOR),o=!!(t&&t.INTERRUPTED),l=lA(e,n),c,u,f,h,d,g,_,p=function(y){return c&&hp(c,"normal",y),new Pl(!0,y)},m=function(y){return r?(uA(y),o?l(y[0],y[1],p):l(y[0],y[1])):o?l(y,p):l(y)};if(s)c=i.iterator;else if(a)c=i;else{if(u=mA(i),!u)throw new _A(fA(i)+" is not iterable");if(hA(u)){for(f=0,h=dA(i);h>f;f++)if(d=m(i[f]),d&&fp(dp,d))return d;return new Pl(!1)}c=pA(i,u)}for(g=s?i.next:c.next;!(_=cA(g,c)).done;){try{d=m(_.value)}catch(y){hp(c,"throw",y)}if(typeof d=="object"&&d&&fp(dp,d))return d}return new Pl(!1)},gA=vh,vA=TypeError,kh=function(i,e){if(gA(e,i))return i;throw new vA("Incorrect invocation")},xA=ni,Cv=xA("iterator"),Pv=!1;try{var yA=0,pp={next:function(){return{done:!!yA++}},return:function(){Pv=!0}};pp[Cv]=function(){return this},Array.from(pp,function(){throw 2})}catch{}var Lv=function(i,e){try{if(!e&&!Pv)return!1}catch{return!1}var t=!1;try{var n={};n[Cv]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},SA=Zt,MA=Cn,mp=pv,EA=function(i,e,t){var n,r;return mp&&SA(n=e.constructor)&&n!==t&&MA(r=n.prototype)&&r!==t.prototype&&mp(i,r),i},TA=fa,bA=Hn,AA=Ct,_p=uv,wA=ua,RA=vc,CA=Sc,PA=kh,LA=Zt,DA=oa,ou=Cn,lu=Kt,IA=Lv,OA=Dh,UA=EA,Hh=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",a=bA[i],o=a&&a.prototype,l=a,c={},u=function(m){var y=AA(o[m]);wA(o,m,m==="add"?function(S){return y(this,S===0?0:S),this}:m==="delete"?function(x){return r&&!ou(x)?!1:y(this,x===0?0:x)}:m==="get"?function(S){return r&&!ou(S)?void 0:y(this,S===0?0:S)}:m==="has"?function(S){return r&&!ou(S)?!1:y(this,S===0?0:S)}:function(S,C){return y(this,S===0?0:S,C),this})},f=_p(i,!LA(a)||!(r||o.forEach&&!lu(function(){new a().entries().next()})));if(f)l=t.getConstructor(e,i,n,s),RA.enable();else if(_p(i,!0)){var h=new l,d=h[s](r?{}:-0,1)!==h,g=lu(function(){h.has(1)}),_=IA(function(m){new a(m)}),p=!r&&lu(function(){for(var m=new a,y=5;y--;)m[s](y,y);return!m.has(-0)});_||(l=e(function(m,y){PA(m,o);var x=UA(new a,m,l);return DA(y)||CA(y,x[s],{that:x,AS_ENTRIES:n}),x}),l.prototype=o,o.constructor=l),(g||p)&&(u("delete"),u("has"),n&&u("get")),(p||d)&&u(s),r&&o.clear&&delete o.clear}return c[i]=l,TA({global:!0,constructor:!0,forced:l!==a},c),OA(l,i),r||t.setStrong(l,i,n),l},gp=cv,NA=di,Dv=function(i,e,t){return t.get&&gp(t.get,e,{getter:!0}),t.set&&gp(t.set,e,{setter:!0}),NA.f(i,e,t)},FA=ua,Vh=function(i,e,t){for(var n in e)FA(i,n,e[n],t);return i},BA=fo,zA=Dv,GA=ni,kA=ii,vp=GA("species"),HA=function(i){var e=BA(i);kA&&e&&!e[vp]&&zA(e,vp,{configurable:!0,get:function(){return this}})},xp=bh,VA=Dv,yp=Vh,WA=xc,$A=kh,XA=oa,qA=Sc,YA=Ih,Do=Oh,jA=HA,ya=ii,Sp=vc.fastKey,Iv=ca,Mp=Iv.set,cu=Iv.getterFor,Ov={getConstructor:function(i,e,t,n){var r=i(function(c,u){$A(c,s),Mp(c,{type:e,index:xp(null),first:void 0,last:void 0,size:0}),ya||(c.size=0),XA(u)||qA(u,c[n],{that:c,AS_ENTRIES:t})}),s=r.prototype,a=cu(e),o=function(c,u,f){var h=a(c),d=l(c,u),g,_;return d?d.value=f:(h.last=d={index:_=Sp(u,!0),key:u,value:f,previous:g=h.last,next:void 0,removed:!1},h.first||(h.first=d),g&&(g.next=d),ya?h.size++:c.size++,_!=="F"&&(h.index[_]=d)),c},l=function(c,u){var f=a(c),h=Sp(u),d;if(h!=="F")return f.index[h];for(d=f.first;d;d=d.next)if(d.key===u)return d};return yp(s,{clear:function(){for(var u=this,f=a(u),h=f.first;h;)h.removed=!0,h.previous&&(h.previous=h.previous.next=void 0),h=h.next;f.first=f.last=void 0,f.index=xp(null),ya?f.size=0:u.size=0},delete:function(c){var u=this,f=a(u),h=l(u,c);if(h){var d=h.next,g=h.previous;delete f.index[h.index],h.removed=!0,g&&(g.next=d),d&&(d.previous=g),f.first===h&&(f.first=d),f.last===h&&(f.last=g),ya?f.size--:u.size--}return!!h},forEach:function(u){for(var f=a(this),h=WA(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:f.first;)for(h(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!l(this,u)}}),yp(s,t?{get:function(u){var f=l(this,u);return f&&f.value},set:function(u,f){return o(this,u===0?0:u,f)}}:{add:function(u){return o(this,u=u===0?0:u,u)}}),ya&&VA(s,"size",{configurable:!0,get:function(){return a(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=cu(e),s=cu(n);YA(i,e,function(a,o){Mp(this,{type:n,target:a,state:r(a),kind:o,last:void 0})},function(){for(var a=s(this),o=a.kind,l=a.last;l&&l.removed;)l=l.previous;return!a.target||!(a.last=l=l?l.next:a.state.first)?(a.target=void 0,Do(void 0,!0)):Do(o==="keys"?l.key:o==="values"?l.value:[l.key,l.value],!1)},t?"entries":"values",!t,!0),jA(e)}},KA=Hh,ZA=Ov;KA("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},ZA);var Io=Ct,Sa=Map.prototype,JA={Map,set:Io(Sa.set),get:Io(Sa.get),has:Io(Sa.has),remove:Io(Sa.delete),proto:Sa},QA=fa,ew=Ct,tw=ho,nw=dc,iw=Sc,Mc=JA,rw=Uy,sw=Mc.Map,aw=Mc.has,ow=Mc.get,lw=Mc.set,cw=ew([].push);QA({target:"Map",stat:!0,forced:rw},{groupBy:function(e,t){nw(e),tw(t);var n=new sw,r=0;return iw(e,function(s){var a=t(s,r++);aw(n,a)?cw(ow(n,a),s):lw(n,a,[s])}),n}});var uw=zh,fw=yc,hw=uw?{}.toString:function(){return"[object "+fw(this)+"]"},dw=zh,pw=ua,mw=hw;dw||pw(Object.prototype,"toString",mw,{unsafe:!0});var _w=yc,gw=String,Uv=function(i){if(_w(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return gw(i)},Wh=Ct,vw=Mh,xw=Uv,yw=dc,Sw=Wh("".charAt),Ep=Wh("".charCodeAt),Mw=Wh("".slice),Tp=function(i){return function(e,t){var n=xw(yw(e)),r=vw(t),s=n.length,a,o;return r<0||r>=s?i?"":void 0:(a=Ep(n,r),a<55296||a>56319||r+1===s||(o=Ep(n,r+1))<56320||o>57343?i?Sw(n,r):a:i?Mw(n,r,r+2):(a-55296<<10)+(o-56320)+65536)}},Ew={codeAt:Tp(!1),charAt:Tp(!0)},Tw=Ew.charAt,bw=Uv,Nv=ca,Aw=Ih,bp=Oh,Fv="String Iterator",ww=Nv.set,Rw=Nv.getterFor(Fv);Aw(String,"String",function(i){ww(this,{type:Fv,string:bw(i),index:0})},function(){var e=Rw(this),t=e.string,n=e.index,r;return n>=t.length?bp(void 0,!0):(r=Tw(t,n),e.index+=r.length,bp(r,!1))});var Cw=Hn,_o=Cw,Pw=_o;Pw.Map;var Lw=Hh,Dw=Ov;Lw("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Dw);var Iw=_o;Iw.Set;var Ow=aa,Uw=Array.isArray||function(e){return Ow(e)==="Array"},Nw=Ct,Fw=Kt,Bv=Zt,Bw=yc,zw=fo,Gw=ov,zv=function(){},Gv=zw("Reflect","construct"),$h=/^\s*(?:class|function)\b/,kw=Nw($h.exec),Hw=!$h.test(zv),Ma=function(e){if(!Bv(e))return!1;try{return Gv(zv,[],e),!0}catch{return!1}},kv=function(e){if(!Bv(e))return!1;switch(Bw(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return Hw||!!kw($h,Gw(e))}catch{return!0}};kv.sham=!0;var Hv=!Gv||Fw(function(){var i;return Ma(Ma.call)||!Ma(Object)||!Ma(function(){i=!0})||i})?kv:Ma,Ap=Uw,Vw=Hv,Ww=Cn,$w=ni,Xw=$w("species"),wp=Array,qw=function(i){var e;return Ap(i)&&(e=i.constructor,Vw(e)&&(e===wp||Ap(e.prototype))?e=void 0:Ww(e)&&(e=e[Xw],e===null&&(e=void 0))),e===void 0?wp:e},Yw=qw,jw=function(i,e){return new(Yw(i))(e===0?0:e)},Kw=xc,Zw=Ct,Jw=ph,Qw=uo,e1=pc,t1=jw,Rp=Zw([].push),Zi=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,s=i===6,a=i===7,o=i===5||s;return function(l,c,u,f){for(var h=Qw(l),d=Jw(h),g=e1(d),_=Kw(c,u),p=0,m=f||t1,y=e?m(l,g):t||a?m(l,0):void 0,x,S;g>p;p++)if((o||p in d)&&(x=d[p],S=_(x,p,h),i))if(e)y[p]=S;else if(S)switch(i){case 3:return!0;case 5:return x;case 6:return p;case 2:Rp(y,x)}else switch(i){case 4:return!1;case 7:Rp(y,x)}return s?-1:n||r?r:y}},n1={forEach:Zi(0),map:Zi(1),filter:Zi(2),some:Zi(3),every:Zi(4),find:Zi(5),findIndex:Zi(6),filterReject:Zi(7)},i1=Ct,Cp=Vh,Oo=vc.getWeakData,r1=kh,s1=Pi,a1=oa,uu=Cn,o1=Sc,Vv=n1,Pp=hi,Wv=ca,l1=Wv.set,c1=Wv.getterFor,u1=Vv.find,f1=Vv.findIndex,h1=i1([].splice),d1=0,Uo=function(i){return i.frozen||(i.frozen=new $v)},$v=function(){this.entries=[]},fu=function(i,e){return u1(i.entries,function(t){return t[0]===e})};$v.prototype={get:function(i){var e=fu(this,i);if(e)return e[1]},has:function(i){return!!fu(this,i)},set:function(i,e){var t=fu(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=f1(this.entries,function(t){return t[0]===i});return~e&&h1(this.entries,e,1),!!~e}};var p1={getConstructor:function(i,e,t,n){var r=i(function(l,c){r1(l,s),l1(l,{type:e,id:d1++,frozen:void 0}),a1(c)||o1(c,l[n],{that:l,AS_ENTRIES:t})}),s=r.prototype,a=c1(e),o=function(l,c,u){var f=a(l),h=Oo(s1(c),!0);return h===!0?Uo(f).set(c,u):h[f.id]=u,l};return Cp(s,{delete:function(l){var c=a(this);if(!uu(l))return!1;var u=Oo(l);return u===!0?Uo(c).delete(l):u&&Pp(u,c.id)&&delete u[c.id]},has:function(c){var u=a(this);if(!uu(c))return!1;var f=Oo(c);return f===!0?Uo(u).has(c):f&&Pp(f,u.id)}}),Cp(s,t?{get:function(c){var u=a(this);if(uu(c)){var f=Oo(c);return f===!0?Uo(u).get(c):f?f[u.id]:void 0}},set:function(c,u){return o(this,c,u)}}:{add:function(c){return o(this,c,!0)}}),r}},m1=Ev,Lp=Hn,Ll=Ct,Dp=Vh,_1=vc,g1=Hh,Xv=p1,No=Cn,Fo=ca.enforce,v1=Kt,x1=ev,go=Object,y1=Array.isArray,Bo=go.isExtensible,qv=go.isFrozen,S1=go.isSealed,Yv=go.freeze,M1=go.seal,E1=!Lp.ActiveXObject&&"ActiveXObject"in Lp,Ea,jv=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Kv=g1("WeakMap",jv,Xv),Cs=Kv.prototype,Dl=Ll(Cs.set),T1=function(){return m1&&v1(function(){var i=Yv([]);return Dl(new Kv,i,1),!qv(i)})};if(x1)if(E1){Ea=Xv.getConstructor(jv,"WeakMap",!0),_1.enable();var Ip=Ll(Cs.delete),zo=Ll(Cs.has),Op=Ll(Cs.get);Dp(Cs,{delete:function(i){if(No(i)&&!Bo(i)){var e=Fo(this);return e.frozen||(e.frozen=new Ea),Ip(this,i)||e.frozen.delete(i)}return Ip(this,i)},has:function(e){if(No(e)&&!Bo(e)){var t=Fo(this);return t.frozen||(t.frozen=new Ea),zo(this,e)||t.frozen.has(e)}return zo(this,e)},get:function(e){if(No(e)&&!Bo(e)){var t=Fo(this);return t.frozen||(t.frozen=new Ea),zo(this,e)?Op(this,e):t.frozen.get(e)}return Op(this,e)},set:function(e,t){if(No(e)&&!Bo(e)){var n=Fo(this);n.frozen||(n.frozen=new Ea),zo(this,e)?Dl(this,e,t):n.frozen.set(e,t)}else Dl(this,e,t);return this}})}else T1()&&Dp(Cs,{set:function(e,t){var n;return y1(e)&&(qv(e)?n=Yv:S1(e)&&(n=M1)),Dl(this,e,t),n&&n(e),this}});var b1=_o;b1.WeakMap;var A1=Pi,w1=Rv,R1=function(i,e,t,n){try{return n?e(A1(t)[0],t[1]):e(t)}catch(r){w1(i,"throw",r)}},C1=Sh,P1=di,L1=_c,D1=function(i,e,t){var n=C1(e);n in i?P1.f(i,n,L1(0,t)):i[n]=t},I1=xc,O1=Ki,U1=uo,N1=R1,F1=bv,B1=Hv,z1=pc,Up=D1,G1=wv,k1=Gh,Np=Array,H1=function(e){var t=U1(e),n=B1(this),r=arguments.length,s=r>1?arguments[1]:void 0,a=s!==void 0;a&&(s=I1(s,r>2?arguments[2]:void 0));var o=k1(t),l=0,c,u,f,h,d,g;if(o&&!(this===Np&&F1(o)))for(h=G1(t,o),d=h.next,u=n?new this:[];!(f=O1(d,h)).done;l++)g=a?N1(h,s,[f.value,l],!0):f.value,Up(u,l,g);else for(c=z1(t),u=n?new this(c):Np(c);c>l;l++)g=a?s(t[l],l):t[l],Up(u,l,g);return u.length=l,u},V1=fa,W1=H1,$1=Lv,X1=!$1(function(i){Array.from(i)});V1({target:"Array",stat:!0,forced:X1},{from:W1});var q1=_o;q1.Array.from;var Fp=ii,Y1=Ct,j1=Ki,K1=Kt,hu=Zg,Z1=Lh,J1=Rh,Q1=uo,eR=ph,us=Object.assign,Bp=Object.defineProperty,tR=Y1([].concat),nR=!us||K1(function(){if(Fp&&us({b:1},us(Bp({},"a",{enumerable:!0,get:function(){Bp(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),us({},i)[t]!==7||hu(us({},e)).join("")!==n})?function(e,t){for(var n=Q1(e),r=arguments.length,s=1,a=Z1.f,o=J1.f;r>s;)for(var l=eR(arguments[s++]),c=a?tR(hu(l),a(l)):hu(l),u=c.length,f=0,h;u>f;)h=c[f++],(!Fp||j1(o,l,h))&&(n[h]=l[h]);return n}:us,iR=fa,zp=nR;iR({target:"Object",stat:!0,arity:2,forced:Object.assign!==zp},{assign:zp});var rR=_o;rR.Object.assign;var Go,Kl=new WeakMap;function Zv(){if(Go!==void 0)return Go;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return Go=i?{passive:!1}:!1,Go}function ha(i){var e=Kl.get(i)||[];return Kl.set(i,e),function(n,r,s){function a(o){o.defaultPrevented||s(o)}r.split(/\s+/g).forEach(function(o){e.push({elem:n,eventName:o,handler:a}),n.addEventListener(o,a,Zv())})}}function sR(i){var e=Kl.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,s=t.handler;n.removeEventListener(r,s,Zv())}),Kl.delete(i))}function aR(i){return i.touches?i.touches[i.touches.length-1]:i}function Hs(i){var e=aR(i);return{x:e.clientX,y:e.clientY}}function ko(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var Jv=["webkit","moz","ms","o"],oR=new RegExp("^-(?!(?:"+Jv.join("|")+")-)");function lR(i){var e={};return Object.keys(i).forEach(function(t){if(!oR.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,Jv.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function ts(i,e){e=lR(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,s){return s.toUpperCase()});i.style[n]=e[t]})}var cR=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=Hs(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,s=t.lastPosition,a=Date.now(),o=Hs(e),l={x:-(o.x-s.x),y:-(o.y-s.y)},c=a-r||16.7,u=l.x/c*16.7,f=l.y/c*16.7;n.x=u*this.velocityMultiplier,n.y=f*this.velocityMultiplier,this.delta=l,this.updateTime=a,this.lastPosition=o},i}(),uR=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?Ai({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?Ai({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(s){for(var a=Math.abs(r[s])<=10?0:r[s];a!==0;)n[s]+=a,a=a*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new cR(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function ti(i,e,t){return Math.max(e,Math.min(t,i))}function Qv(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var a=this,o=[],l=0;l<arguments.length;l++)o[l]=arguments[l];if(t){var c=Date.now(),u=c-r;r=c,u>=e&&i.apply(this,o)}clearTimeout(n),n=setTimeout(function(){i.apply(a,o)},e)}}function Gp(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(s){Object.defineProperty(this,r,{value:ti(s,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function du(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function e0(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var s=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:Qv.apply(void 0,My([s],i))}),this[n]}}}}var fR=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),Ur([Gp(0,1)],i.prototype,"damping",void 0),Ur([Gp(0,1/0)],i.prototype,"thumbMinSize",void 0),Ur([du],i.prototype,"renderByPixels",void 0),Ur([du],i.prototype,"alwaysShowTracks",void 0),Ur([du],i.prototype,"continuousScrolling",void 0),i}(),ea;(function(i){i.X="x",i.Y="y"})(ea||(ea={}));var hR=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),ts(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case ea.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case ea.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),kp=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new hR(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){ts(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),dR=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new kp(ea.X,t),this.yAxis=new kp(ea.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},Ur([e0(300)],i.prototype,"autoHideOnIdle",null),i}();function pR(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(o){return n[o]?parseFloat(n[o]):0}),s=r[0]+r[1],a=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+a,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function mR(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),s=Math.max(t.left,n.left),a=Math.min(t.right,n.right),o=Math.min(t.bottom,n.bottom);return r<o&&s<a}function _R(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function gR(i,e,t){var n=i.options,r=i.offset,s=i.limit,a=i.track,o=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=ti(e,0,s.x),t=ti(t,0,s.y),e!==r.x&&a.xAxis.show(),t!==r.y&&a.yAxis.show(),n.alwaysShowTracks||a.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,ts(o,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),a.update(),{offset:Ai({},r),limit:Ai({},s)})}var Hp=new WeakMap;function vR(i,e,t,n,r){n===void 0&&(n=0);var s=r===void 0?{}:r,a=s.easing,o=a===void 0?xR:a,l=s.callback,c=i.options,u=i.offset,f=i.limit;c.renderByPixels&&(e=Math.round(e),t=Math.round(t));var h=u.x,d=u.y,g=ti(e,0,f.x)-h,_=ti(t,0,f.y)-d,p=Date.now();function m(){var y=Date.now()-p,x=n?o(Math.min(y/n,1)):1;if(i.setPosition(h+g*x,d+_*x),y>=n)typeof l=="function"&&l.call(i);else{var S=requestAnimationFrame(m);Hp.set(i,S)}}cancelAnimationFrame(Hp.get(i)),m()}function xR(i){return Math.pow(i-1,3)+1}function yR(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,s=r===void 0?!0:r,a=n.onlyScrollIfNeeded,o=a===void 0?!1:a,l=n.offsetTop,c=l===void 0?0:l,u=n.offsetLeft,f=u===void 0?0:u,h=n.offsetBottom,d=h===void 0?0:h,g=i.containerEl,_=i.bounding,p=i.offset,m=i.limit;if(!(!e||!g.contains(e))){var y=e.getBoundingClientRect();if(!(o&&i.isVisible(e))){var x=s?y.top-_.top-c:y.bottom-_.bottom+d;i.setMomentum(y.left-_.left-f,ti(x,-p.y,m.y-p.y))}}}var SR=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=Ai(Ai({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return Ai({},e)},i.pluginName="",i.defaultOptions={},i}(),Zl={order:new Set,constructors:{}};function MR(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Zl.order.add(n),Zl.constructors[n]=t})}function ER(i,e){return Array.from(Zl.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Zl.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var Xn;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(Xn||(Xn={}));function TR(i){var e=ha(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!wR(r)){var s=bR(i,n.keyCode||n.which);if(s){var a=s[0],o=s[1];i.addTransformableMomentum(a,o,n,function(l){l?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function bR(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case Xn.TAB:return AR(i);case Xn.SPACE:return[0,200];case Xn.PAGE_UP:return[0,-t.container.height+40];case Xn.PAGE_DOWN:return[0,t.container.height-40];case Xn.END:return[0,n.y-r.y];case Xn.HOME:return[0,-r.y];case Xn.LEFT:return[-40,0];case Xn.UP:return[0,-40];case Xn.RIGHT:return[40,0];case Xn.DOWN:return[0,40];default:return null}}function AR(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function wR(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var mi;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(mi||(mi={}));function RR(i){var e=ha(i),t=i.containerEl,n=i.track,r=n.xAxis,s=n.yAxis;function a(d,g){var _=i.size,p=i.limit,m=i.offset;if(d===mi.X){var y=_.container.width+(r.thumb.realSize-r.thumb.displaySize);return ti(g/y*_.content.width,0,p.x)-m.x}if(d===mi.Y){var x=_.container.height+(s.thumb.realSize-s.thumb.displaySize);return ti(g/x*_.content.height,0,p.y)-m.y}return 0}function o(d){if(ko(d,[r.element,r.thumb.element]))return mi.X;if(ko(d,[s.element,s.thumb.element]))return mi.Y}var l,c,u,f,h;e(t,"click",function(d){if(!(c||!ko(d.target,[r.element,s.element]))){var g=d.target,_=o(g),p=g.getBoundingClientRect(),m=Hs(d);if(_===mi.X){var y=m.x-p.left-r.thumb.displaySize/2;i.setMomentum(a(_,y),0)}if(_===mi.Y){var y=m.y-p.top-s.thumb.displaySize/2;i.setMomentum(0,a(_,y))}}}),e(t,"mousedown",function(d){if(ko(d.target,[r.thumb.element,s.thumb.element])){l=!0;var g=d.target,_=Hs(d),p=g.getBoundingClientRect();f=o(g),u={x:_.x-p.left,y:_.y-p.top},h=t.getBoundingClientRect(),ts(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(d){if(l){c=!0;var g=Hs(d);if(f===mi.X){var _=g.x-u.x-h.left;i.setMomentum(a(f,_),0)}if(f===mi.Y){var _=g.y-u.y-h.top;i.setMomentum(0,a(f,_))}}}),e(window,"mouseup blur",function(){l=c=!1,ts(i.containerEl,{"-user-select":""})})}function CR(i){var e=ha(i);e(window,"resize",Qv(i.update.bind(i),300))}function PR(i){var e=ha(i),t=i.containerEl,n=i.contentEl,r=!1,s=!1,a;function o(l){var c=l.x,u=l.y;if(!(!c&&!u)){var f=i.offset,h=i.limit;i.setMomentum(ti(f.x+c,0,h.x)-f.x,ti(f.y+u,0,h.y)-f.y),a=requestAnimationFrame(function(){o({x:c,y:u})})}}e(window,"mousemove",function(l){if(r){cancelAnimationFrame(a);var c=LR(i,l);o(c)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(a),r=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(a),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(a),r=!1,s=!1}),e(t,"scroll",function(l){l.preventDefault(),t.scrollTop=t.scrollLeft=0})}function LR(i,e){var t=i.bounding,n=t.top,r=t.right,s=t.bottom,a=t.left,o=Hs(e),l=o.x,c=o.y,u={x:0,y:0},f=20;return l===0&&c===0||(l>r-f?u.x=l-r+f:l<a+f&&(u.x=l-a-f),c>s-f?u.y=c-s+f:c<n+f&&(u.y=c-n-f),u.x*=2,u.y*=2),u}var Ho;function DR(i){var e=i.options.delegateTo||i.containerEl,t=new uR,n=ha(i),r,s=0;n(e,"touchstart",function(a){t.track(a),i.setMomentum(0,0),s===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),s++}),n(e,"touchmove",function(a){if(!(Ho&&Ho!==i)){t.update(a);var o=t.getDelta(),l=o.x,c=o.y;i.addTransformableMomentum(l,c,a,function(u){u&&a.cancelable&&(a.preventDefault(),Ho=i)})}}),n(e,"touchcancel touchend",function(a){var o=t.getEasingDistance(r);i.addTransformableMomentum(o.x,o.y,a),s--,s===0&&(i.options.damping=r),t.release(a),Ho=null})}function IR(i){var e=ha(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var s=UR(r),a=s.x,o=s.y;i.addTransformableMomentum(a,o,r,function(l){l&&r.preventDefault()})})}var Ta={STANDARD:1,OTHERS:-3},Vp=[1,28,500],OR=function(i){return Vp[i]||Vp[0]};function UR(i){if("deltaX"in i){var e=OR(i.deltaMode);return{x:i.deltaX/Ta.STANDARD*e,y:i.deltaY/Ta.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/Ta.OTHERS,y:i.wheelDeltaY/Ta.OTHERS}:{x:0,y:i.wheelDelta/Ta.OTHERS}}const Wp=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:TR,mouseHandler:RR,resizeHandler:CR,selectHandler:PR,touchHandler:DR,wheelHandler:IR},Symbol.toStringTag,{value:"Module"}));var gi=new Map,$p=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new fR(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),ts(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(l){r.appendChild(l)}),e.appendChild(r),this.track=new dR(this),this.size=this.getSize(),this._plugins=ER(this,this.options.plugins);var s=e.scrollLeft,a=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,a,{withoutCallbacks:!0});var o=window.ResizeObserver;typeof o=="function"&&(this._observer=new o(function(){n.update()}),this._observer.observe(r)),gi.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=gi.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return pR(this)},i.prototype.update=function(){_R(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return mR(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=gR(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(a){a.call(r,s)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),vR(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),yR(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var s=this._plugins.reduce(function(o,l){return l.transformDelta(o,n)||o},{x:e,y:t}),a=!this._shouldPropagateMomentum(s.x,s.y);a&&this.addMomentum(s.x,s.y),r&&r.call(this,a)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;sR(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),gi.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(s){t.appendChild(s)}),ts(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(Wp).forEach(function(t){Wp[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,s=n.offset,a=n.limit;if(!r.continuousScrolling)return!1;a.x===0&&a.y===0&&this._updateDebounced();var o=ti(e+s.x,0,a.x),l=ti(t+s.y,0,a.y),c=!0;return c=c&&o===s.x,c=c&&l===s.y,c=c&&(s.x===a.x||s.x===0||s.y===a.y||s.y===0),c},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=Ai({},this._momentum);this._plugins.forEach(function(s){s.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,s=t._momentum,a=r[e],o=s[e];if(Math.abs(o)<=.1)return{momentum:0,position:a+o};var l=o*(1-n.damping);return n.renderByPixels&&(l|=0),{momentum:l,position:a+o-l}},Ur([e0(100,!0)],i.prototype,"_updateDebounced",null),i}(),NR="rgba(222, 222, 222, .75)",FR="rgba(0, 0, 0, .5)",BR=`
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
  background: `+NR+`;
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
  background: `+FR+`;
  border-radius: 4px;
}
`,t0="smooth-scrollbar-style",Jl=!1;function Xp(){if(!(Jl||typeof window>"u")){var i=document.createElement("style");i.id=t0,i.textContent=BR,document.head&&document.head.appendChild(i),Jl=!0}}function zR(){if(!(!Jl||typeof window>"u")){var i=document.getElementById(t0);!i||!i.parentNode||(i.parentNode.removeChild(i),Jl=!1)}}var GR=function(i){Sy(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return Xp(),gi.has(t)?gi.get(t):new $p(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return gi.has(t)},e.get=function(t){return gi.get(t)},e.getAll=function(){return Array.from(gi.values())},e.destroy=function(t){var n=gi.get(t);n&&n.destroy()},e.destroyAll=function(){gi.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return MR.apply(void 0,t)},e.attachStyle=function(){return Xp()},e.detachStyle=function(){return zR()},e.version="8.8.4",e.ScrollbarPlugin=SR,e}($p);function qp(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function kR(i,e,t){return e&&qp(i.prototype,e),t&&qp(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var qt,Il,Fn,lr,cr,Vs,n0,Lr,Va,i0,Hi,oi,r0,s0=function(){return qt||typeof window<"u"&&(qt=window.gsap)&&qt.registerPlugin&&qt},a0=1,Ns=[],et=[],wi=[],Wa=Date.now,wf=function(e,t){return t},HR=function(){var e=Va.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,et),r.push.apply(r,wi),et=n,wi=r,wf=function(a,o){return t[a](o)}},dr=function(e,t){return~wi.indexOf(e)&&wi[wi.indexOf(e)+1][t]},$a=function(e){return!!~i0.indexOf(e)},cn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},ln=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Vo="scrollLeft",Wo="scrollTop",Rf=function(){return Hi&&Hi.isPressed||et.cache++},Ql=function(e,t){var n=function r(s){if(s||s===0){a0&&(Fn.history.scrollRestoration="manual");var a=Hi&&Hi.isPressed;s=r.v=Math.round(s)||(Hi&&Hi.iOS?1:0),e(s),r.cacheID=et.cache,a&&wf("ss",s)}else(t||et.cache!==r.cacheID||wf("ref"))&&(r.cacheID=et.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},_n={s:Vo,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Ql(function(i){return arguments.length?Fn.scrollTo(i,Bt.sc()):Fn.pageXOffset||lr[Vo]||cr[Vo]||Vs[Vo]||0})},Bt={s:Wo,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:_n,sc:Ql(function(i){return arguments.length?Fn.scrollTo(_n.sc(),i):Fn.pageYOffset||lr[Wo]||cr[Wo]||Vs[Wo]||0})},xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||qt.utils.toArray)(e)[0]||(typeof e=="string"&&qt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},xr=function(e,t){var n=t.s,r=t.sc;$a(e)&&(e=lr.scrollingElement||cr);var s=et.indexOf(e),a=r===Bt.sc?1:2;!~s&&(s=et.push(e)-1),et[s+a]||cn(e,"scroll",Rf);var o=et[s+a],l=o||(et[s+a]=Ql(dr(e,n),!0)||($a(e)?r:Ql(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=qt.getProperty(e,"scrollBehavior")==="smooth"),l},Cf=function(e,t,n){var r=e,s=e,a=Wa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Wa();_||p-a>l?(s=r,r=g,o=a,a=p):n?r+=g:r=s+(g-s)/(p-o)*(a-o)},f=function(){s=r=n?0:r,o=a=0},h=function(g){var _=o,p=s,m=Wa();return(g||g===0)&&g!==r&&u(g),a===o||m-o>c?0:(r+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},ba=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Yp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},o0=function(){Va=qt.core.globals().ScrollTrigger,Va&&Va.core&&HR()},l0=function(e){return qt=e||s0(),!Il&&qt&&typeof document<"u"&&document.body&&(Fn=window,lr=document,cr=lr.documentElement,Vs=lr.body,i0=[Fn,lr,cr,Vs],qt.utils.clamp,r0=qt.core.context||function(){},Lr="onpointerenter"in Vs?"pointer":"mouse",n0=Lt.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,oi=Lt.eventTypes=("ontouchstart"in cr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in cr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return a0=0},500),o0(),Il=1),Il};_n.op=Bt;et.cache=0;var Lt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Il||l0(qt)||console.warn("Please gsap.registerPlugin(Observer)"),Va||o0();var r=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,S=n.onRelease,C=n.onRight,A=n.onLeft,E=n.onUp,D=n.onDown,U=n.onChangeX,v=n.onChangeY,w=n.onChange,I=n.onToggleX,j=n.onToggleY,L=n.onHover,G=n.onHoverEnd,F=n.onMove,$=n.ignoreCheck,X=n.isNormalizer,Y=n.onGestureStart,R=n.onGestureEnd,K=n.onWheel,re=n.onEnable,Ie=n.onDisable,W=n.onClick,Z=n.scrollSpeed,ue=n.capture,me=n.allowClicks,ye=n.lockAxis,he=n.onLockAxis;this.target=o=xn(o)||cr,this.vars=n,d&&(d=qt.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,Z=Z||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fn.getComputedStyle(Vs).lineHeight)||22);var Xe,Le,N,Ge,pe,Re,ge,H=this,Oe=0,b=0,M=n.passive||!u,B=xr(o,_n),ee=xr(o,Bt),Q=B(),te=ee(),fe=~a.indexOf("touch")&&!~a.indexOf("pointer")&&oi[0]==="pointerdown",le=$a(o),oe=o.ownerDocument||lr,Ae=[0,0,0],ze=[0,0,0],J=0,rt=function(){return J=Wa()},Ce=function(Me,Pe){return(H.event=Me)&&d&&~d.indexOf(Me.target)||Pe&&fe&&Me.pointerType!=="touch"||$&&$(Me,Pe)},ke=function(){H._vx.reset(),H._vy.reset(),Le.pause(),f&&f(H)},Te=function(){var Me=H.deltaX=Yp(Ae),Pe=H.deltaY=Yp(ze),se=Math.abs(Me)>=r,Ne=Math.abs(Pe)>=r;w&&(se||Ne)&&w(H,Me,Pe,Ae,ze),se&&(C&&H.deltaX>0&&C(H),A&&H.deltaX<0&&A(H),U&&U(H),I&&H.deltaX<0!=Oe<0&&I(H),Oe=H.deltaX,Ae[0]=Ae[1]=Ae[2]=0),Ne&&(D&&H.deltaY>0&&D(H),E&&H.deltaY<0&&E(H),v&&v(H),j&&H.deltaY<0!=b<0&&j(H),b=H.deltaY,ze[0]=ze[1]=ze[2]=0),(Ge||N)&&(F&&F(H),N&&(y(H),N=!1),Ge=!1),Re&&!(Re=!1)&&he&&he(H),pe&&(K(H),pe=!1),Xe=0},_e=function(Me,Pe,se){Ae[se]+=Me,ze[se]+=Pe,H._vx.update(Me),H._vy.update(Pe),c?Xe||(Xe=requestAnimationFrame(Te)):Te()},He=function(Me,Pe){ye&&!ge&&(H.axis=ge=Math.abs(Me)>Math.abs(Pe)?"x":"y",Re=!0),ge!=="y"&&(Ae[2]+=Me,H._vx.update(Me,!0)),ge!=="x"&&(ze[2]+=Pe,H._vy.update(Pe,!0)),c?Xe||(Xe=requestAnimationFrame(Te)):Te()},Ke=function(Me){if(!Ce(Me,1)){Me=ba(Me,u);var Pe=Me.clientX,se=Me.clientY,Ne=Pe-H.x,Ue=se-H.y,Ve=H.isDragging;H.x=Pe,H.y=se,(Ve||Math.abs(H.startX-Pe)>=s||Math.abs(H.startY-se)>=s)&&(y&&(N=!0),Ve||(H.isDragging=!0),He(Ne,Ue),Ve||p&&p(H))}},st=H.onPress=function(be){Ce(be,1)||be&&be.button||(H.axis=ge=null,Le.pause(),H.isPressed=!0,be=ba(be),Oe=b=0,H.startX=H.x=be.clientX,H.startY=H.y=be.clientY,H._vx.reset(),H._vy.reset(),cn(X?o:oe,oi[1],Ke,M,!0),H.deltaX=H.deltaY=0,x&&x(H))},de=H.onRelease=function(be){if(!Ce(be,1)){ln(X?o:oe,oi[1],Ke,!0);var Me=!isNaN(H.y-H.startY),Pe=H.isDragging,se=Pe&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Ne=ba(be);!se&&Me&&(H._vx.reset(),H._vy.reset(),u&&me&&qt.delayedCall(.08,function(){if(Wa()-J>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(oe.createEvent){var Ue=oe.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,Fn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Ue)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Pe&&!X&&Le.restart(!0),m&&Pe&&m(H),S&&S(H,se)}},tt=function(Me){return Me.touches&&Me.touches.length>1&&(H.isGesturing=!0)&&Y(Me,H.isDragging)},P=function(){return(H.isGesturing=!1)||R(H)},ne=function(Me){if(!Ce(Me)){var Pe=B(),se=ee();_e((Pe-Q)*Z,(se-te)*Z,1),Q=Pe,te=se,f&&Le.restart(!0)}},ie=function(Me){if(!Ce(Me)){Me=ba(Me,u),K&&(pe=!0);var Pe=(Me.deltaMode===1?l:Me.deltaMode===2?Fn.innerHeight:1)*g;_e(Me.deltaX*Pe,Me.deltaY*Pe,0),f&&!X&&Le.restart(!0)}},ve=function(Me){if(!Ce(Me)){var Pe=Me.clientX,se=Me.clientY,Ne=Pe-H.x,Ue=se-H.y;H.x=Pe,H.y=se,Ge=!0,f&&Le.restart(!0),(Ne||Ue)&&He(Ne,Ue)}},De=function(Me){H.event=Me,L(H)},Ye=function(Me){H.event=Me,G(H)},at=function(Me){return Ce(Me)||ba(Me,u)&&W(H)};Le=H._dc=qt.delayedCall(h||.25,ke).pause(),H.deltaX=H.deltaY=0,H._vx=Cf(0,50,!0),H._vy=Cf(0,50,!0),H.scrollX=B,H.scrollY=ee,H.isDragging=H.isGesturing=H.isPressed=!1,r0(this),H.enable=function(be){return H.isEnabled||(cn(le?oe:o,"scroll",Rf),a.indexOf("scroll")>=0&&cn(le?oe:o,"scroll",ne,M,ue),a.indexOf("wheel")>=0&&cn(o,"wheel",ie,M,ue),(a.indexOf("touch")>=0&&n0||a.indexOf("pointer")>=0)&&(cn(o,oi[0],st,M,ue),cn(oe,oi[2],de),cn(oe,oi[3],de),me&&cn(o,"click",rt,!0,!0),W&&cn(o,"click",at),Y&&cn(oe,"gesturestart",tt),R&&cn(oe,"gestureend",P),L&&cn(o,Lr+"enter",De),G&&cn(o,Lr+"leave",Ye),F&&cn(o,Lr+"move",ve)),H.isEnabled=!0,be&&be.type&&st(be),re&&re(H)),H},H.disable=function(){H.isEnabled&&(Ns.filter(function(be){return be!==H&&$a(be.target)}).length||ln(le?oe:o,"scroll",Rf),H.isPressed&&(H._vx.reset(),H._vy.reset(),ln(X?o:oe,oi[1],Ke,!0)),ln(le?oe:o,"scroll",ne,ue),ln(o,"wheel",ie,ue),ln(o,oi[0],st,ue),ln(oe,oi[2],de),ln(oe,oi[3],de),ln(o,"click",rt,!0),ln(o,"click",at),ln(oe,"gesturestart",tt),ln(oe,"gestureend",P),ln(o,Lr+"enter",De),ln(o,Lr+"leave",Ye),ln(o,Lr+"move",ve),H.isEnabled=H.isPressed=H.isDragging=!1,Ie&&Ie(H))},H.kill=H.revert=function(){H.disable();var be=Ns.indexOf(H);be>=0&&Ns.splice(be,1),Hi===H&&(Hi=0)},Ns.push(H),X&&$a(o)&&(Hi=H),H.enable(_)},kR(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Lt.version="3.12.5";Lt.create=function(i){return new Lt(i)};Lt.register=l0;Lt.getAll=function(){return Ns.slice()};Lt.getById=function(i){return Ns.filter(function(e){return e.vars.id===i})[0]};s0()&&qt.registerPlugin(Lt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xe,Ps,nt,Et,ci,xt,c0,ec,ao,Xa,Ua,$o,tn,Ec,Pf,hn,jp,Kp,Ls,u0,pu,f0,fn,Lf,h0,d0,rr,Df,Xh,Ws,qh,tc,If,mu,Xo=1,nn=Date.now,_u=nn(),Qn=0,Na=0,Zp=function(e,t,n){var r=On(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Jp=function(e,t){return t&&(!On(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},VR=function i(){return Na&&requestAnimationFrame(i)},Qp=function(){return Ec=1},em=function(){return Ec=0},vi=function(e){return e},Fa=function(e){return Math.round(e*1e5)/1e5||0},p0=function(){return typeof window<"u"},m0=function(){return xe||p0()&&(xe=window.gsap)&&xe.registerPlugin&&xe},ns=function(e){return!!~c0.indexOf(e)},_0=function(e){return(e==="Height"?qh:nt["inner"+e])||ci["client"+e]||xt["client"+e]},g0=function(e){return dr(e,"getBoundingClientRect")||(ns(e)?function(){return Bl.width=nt.innerWidth,Bl.height=qh,Bl}:function(){return zi(e)})},WR=function(e,t,n){var r=n.d,s=n.d2,a=n.a;return(a=dr(e,"getBoundingClientRect"))?function(){return a()[r]}:function(){return(t?_0(s):e["client"+s])||0}},$R=function(e,t){return!t||~wi.indexOf(e)?g0(e):function(){return Bl}},Ei=function(e,t){var n=t.s,r=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+r)&&(a=dr(e,n))?a()-g0(e)()[s]:ns(e)?(ci[n]||xt[n])-_0(r):e[n]-e["offset"+r])},qo=function(e,t){for(var n=0;n<Ls.length;n+=3)(!t||~t.indexOf(Ls[n+1]))&&e(Ls[n],Ls[n+1],Ls[n+2])},On=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},Ba=function(e){return typeof e=="number"},Dr=function(e){return typeof e=="object"},Aa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},gu=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},fs=Math.abs,v0="left",x0="top",Yh="right",jh="bottom",$r="width",Xr="height",qa="Right",Ya="Left",ja="Top",Ka="Bottom",It="padding",qn="margin",ta="Width",Kh="Height",Ft="px",Yn=function(e){return nt.getComputedStyle(e)},XR=function(e){var t=Yn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},tm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},zi=function(e,t){var n=t&&Yn(e)[Pf]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},nc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},y0=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},qR=function(e){return function(t){return xe.utils.snap(y0(e),t)}},Zh=function(e){var t=xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,a){a===void 0&&(a=.001);var o;if(!s)return t(r);if(s>0){for(r-=a,o=0;o<n.length;o++)if(n[o]>=r)return n[o];return n[o-1]}else for(o=n.length,r+=a;o--;)if(n[o]<=r)return n[o];return n[0]}:function(r,s,a){a===void 0&&(a=.001);var o=t(r);return!s||Math.abs(o-r)<a||o-r<0==s<0?o:t(s<0?r-e:r+e)}},YR=function(e){return function(t,n){return Zh(y0(e))(t,n.direction)}},Yo=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Vt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},Ht=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},jo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},nm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ko={toggleActions:"play",anticipatePin:0},ic={top:0,left:0,center:.5,bottom:1,right:1},Ol=function(e,t){if(On(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in ic?ic[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Zo=function(e,t,n,r,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Et.createElement("div"),_=ns(n)||dr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?xt:n,y=e.indexOf("start")!==-1,x=y?c:u,S="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(r===Bt?Yh:jh)+":"+(a+parseFloat(h))+"px;"),o&&(S+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],Ul(g,0,r,y),g},Ul=function(e,t,n,r){var s={display:"block"},a=n[r?"os2":"p2"],o=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+a+ta]=1,s["border"+o+ta]=0,s[n.p]=t+"px",xe.set(e,s)},Je=[],Of={},oo,im=function(){return nn()-Qn>34&&(oo||(oo=requestAnimationFrame(Wi)))},hs=function(){(!fn||!fn.isPressed||fn.startX>xt.clientWidth)&&(et.cache++,fn?oo||(oo=requestAnimationFrame(Wi)):Wi(),Qn||rs("scrollStart"),Qn=nn())},vu=function(){d0=nt.innerWidth,h0=nt.innerHeight},za=function(){et.cache++,!tn&&!f0&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!Lf||d0!==nt.innerWidth||Math.abs(nt.innerHeight-h0)>nt.innerHeight*.25)&&ec.restart(!0)},is={},jR=[],S0=function i(){return Ht(je,"scrollEnd",i)||zr(!0)},rs=function(e){return is[e]&&is[e].map(function(t){return t()})||jR},In=[],M0=function(e){for(var t=0;t<In.length;t+=5)(!e||In[t+4]&&In[t+4].query===e)&&(In[t].style.cssText=In[t+1],In[t].getBBox&&In[t].setAttribute("transform",In[t+2]||""),In[t+3].uncache=1)},Jh=function(e,t){var n;for(hn=0;hn<Je.length;hn++)n=Je[hn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));tc=!0,t&&M0(t),t||rs("revert")},E0=function(e,t){et.cache++,(t||!dn)&&et.forEach(function(n){return gn(n)&&n.cacheID++&&(n.rec=0)}),On(e)&&(nt.history.scrollRestoration=Xh=e)},dn,qr=0,rm,KR=function(){if(rm!==qr){var e=rm=qr;requestAnimationFrame(function(){return e===qr&&zr(!0)})}},T0=function(){xt.appendChild(Ws),qh=!fn&&Ws.offsetHeight||nt.innerHeight,xt.removeChild(Ws)},sm=function(e){return ao(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},zr=function(e,t){if(Qn&&!e&&!tc){Vt(je,"scrollEnd",S0);return}T0(),dn=je.isRefreshing=!0,et.forEach(function(r){return gn(r)&&++r.cacheID&&(r.rec=r())});var n=rs("refreshInit");u0&&je.sort(),t||Jh(),et.forEach(function(r){gn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),tc=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",a=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-a),r.refresh()}}),If=1,sm(!0),Je.forEach(function(r){var s=Ei(r.scroller,r._dir),a=r.vars.end==="max"||r._endClamp&&r.end>s,o=r._startClamp&&r.start>=s;(a||o)&&r.setPositions(o?s-1:r.start,a?Math.max(o?s:r.start+1,s):r.end,!0)}),sm(!1),If=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),et.forEach(function(r){gn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),E0(Xh,1),ec.pause(),qr++,dn=2,Wi(2),Je.forEach(function(r){return gn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),dn=je.isRefreshing=!1,rs("refresh")},Uf=0,Nl=1,Za,Wi=function(e){if(e===2||!dn&&!tc){je.isUpdating=!0,Za&&Za.update(0);var t=Je.length,n=nn(),r=n-_u>=50,s=t&&Je[0].scroll();if(Nl=Uf>s?-1:1,dn||(Uf=s),r&&(Qn&&!Ec&&n-Qn>200&&(Qn=0,rs("scrollEnd")),Ua=_u,_u=n),Nl<0){for(hn=t;hn-- >0;)Je[hn]&&Je[hn].update(0,r);Nl=1}else for(hn=0;hn<t;hn++)Je[hn]&&Je[hn].update(0,r);je.isUpdating=!1}oo=0},Nf=[v0,x0,jh,Yh,qn+Ka,qn+qa,qn+ja,qn+Ya,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=Nf.concat([$r,Xr,"boxSizing","max"+ta,"max"+Kh,"position",qn,It,It+ja,It+qa,It+Ka,It+Ya]),ZR=function(e,t,n){$s(n);var r=e._gsap;if(r.spacerIsNative)$s(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},xu=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Nf.length,a=t.style,o=e.style,l;s--;)l=Nf[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[jh]=o[Yh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[$r]=nc(e,_n)+Ft,a[Xr]=nc(e,Bt)+Ft,a[It]=o[qn]=o[x0]=o[v0]="0",$s(r),o[$r]=o["max"+ta]=n[$r],o[Xr]=o["max"+Kh]=n[Xr],o[It]=n[It],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},JR=/([A-Z])/g,$s=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,a;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;r<n;r+=2)a=e[r+1],s=e[r],a?t[s]=a:t[s]&&t.removeProperty(s.replace(JR,"-$1").toLowerCase())}},Jo=function(e){for(var t=Fl.length,n=e.style,r=[],s=0;s<t;s++)r.push(Fl[s],n[Fl[s]]);return r.t=e,r},QR=function(e,t,n){for(var r=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],r.push(o,o in t?t[o]:e[a+1]);return r.t=e.t,r},Bl={left:0,top:0},am=function(e,t,n,r,s,a,o,l,c,u,f,h,d,g){gn(e)&&(e=e(l)),On(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ol("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),Ba(e))d&&(e=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Ul(o,n,r,!0);else{gn(t)&&(t=t(l));var x=(e||"0").split(" "),S,C,A,E;y=xn(t,l)||xt,S=zi(y)||{},(!S||!S.left&&!S.top)&&Yn(y).display==="none"&&(E=y.style.display,y.style.display="block",S=zi(y),E?y.style.display=E:y.style.removeProperty("display")),C=Ol(x[0],S[r.d]),A=Ol(x[1]||"0",n),e=S[r.p]-c[r.p]-u+C+s-A,o&&Ul(o,A,r,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var D=e+n,U=a._isStart;p="scroll"+r.d2,Ul(a,D,r,U&&D>20||!U&&(f?Math.max(xt[p],ci[p]):a.parentNode[p])<=D+1),f&&(c=zi(o),f&&(a.style[r.op.p]=c[r.op.p]-r.op.m-a._offset+Ft))}return d&&y&&(p=zi(y),d.seek(h),m=zi(y),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},eC=/(webkit|moz|length|cssText|inset)/i,om=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,a,o;if(t===xt){e._stOrig=s.cssText,o=Yn(e);for(a in o)!+a&&!eC.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=r}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},b0=function(e,t,n){var r=t,s=r;return function(a){var o=Math.round(e());return o!==r&&o!==s&&Math.abs(o-r)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=r,r=a,a}},Qo=function(e,t,n){var r={};r[t.p]="+="+n,xe.set(e,r)},lm=function(e,t){var n=xr(e,t),r="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||n();var _=b0(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[r]=o,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,a.tween&&Wi()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=xe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Vt(e,"wheel",n.wheelHandler),je.isTouch&&Vt(e,"touchmove",n.wheelHandler),s},je=function(){function i(t,n){Ps||i.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Df(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Na){this.update=this.refresh=this.kill=vi;return}n=tm(On(n)||Ba(n)||n.nodeType?{trigger:n}:n,Ko);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,S=s.snap,C=s.pinReparent,A=s.pinSpacer,E=s.containerAnimation,D=s.fastScrollEnd,U=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?_n:Bt,w=!f&&f!==0,I=xn(n.scroller||nt),j=xe.core.getCache(I),L=ns(I),G=("pinType"in n?n.pinType:dr(I,"pinType")||L&&"fixed")==="fixed",F=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=w&&n.toggleActions.split(" "),X="markers"in n?n.markers:Ko.markers,Y=L?0:parseFloat(Yn(I)["border"+v.p2+ta])||0,R=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(R)},re=WR(I,L,v),Ie=$R(I,L),W=0,Z=0,ue=0,me=xr(I,v),ye,he,Xe,Le,N,Ge,pe,Re,ge,H,Oe,b,M,B,ee,Q,te,fe,le,oe,Ae,ze,J,rt,Ce,ke,Te,_e,He,Ke,st,de,tt,P,ne,ie,ve,De,Ye;if(R._startClamp=R._endClamp=!1,R._dir=v,p*=45,R.scroller=I,R.scroll=E?E.time.bind(E):me,Le=me(),R.vars=n,r=r||n.animation,"refreshPriority"in n&&(u0=1,n.refreshPriority===-9999&&(Za=R)),j.tweenScroll=j.tweenScroll||{top:lm(I,Bt),left:lm(I,_n)},R.tweenTo=ye=j.tweenScroll[v.p],R.scrubDuration=function(se){tt=Ba(se)&&se,tt?de?de.duration(se):de=xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return m&&m(R)}}):(de&&de.progress(1).kill(),de=0)},r&&(r.vars.lazy=!1,r._initted&&!R.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),R.animation=r.pause(),r.scrollTrigger=R,R.scrubDuration(f),Ke=0,l||(l=r.vars.id)),S&&((!Dr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in xt.style&&xe.set(L?[xt,ci]:I,{scrollBehavior:"auto"}),et.forEach(function(se){return gn(se)&&se.target===(L?Et.scrollingElement||ci:I)&&(se.smooth=!1)}),Xe=gn(S.snapTo)?S.snapTo:S.snapTo==="labels"?qR(r):S.snapTo==="labelsDirectional"?YR(r):S.directional!==!1?function(se,Ne){return Zh(S.snapTo)(se,nn()-Z<500?0:Ne.direction)}:xe.utils.snap(S.snapTo),P=S.duration||{min:.1,max:2},P=Dr(P)?Xa(P.min,P.max):Xa(P,P),ne=xe.delayedCall(S.delay||tt/2||.1,function(){var se=me(),Ne=nn()-Z<500,Ue=ye.tween;if((Ne||Math.abs(R.getVelocity())<10)&&!Ue&&!Ec&&W!==se){var Ve=(se-Ge)/B,Mt=r&&!w?r.totalProgress():Ve,Ze=Ne?0:(Mt-st)/(nn()-Ua)*1e3||0,pt=xe.utils.clamp(-Ve,1-Ve,fs(Ze/2)*Ze/.185),Ut=Ve+(S.inertia===!1?0:pt),gt,mt,lt=S,Pn=lt.onStart,T=lt.onInterrupt,O=lt.onComplete;if(gt=Xe(Ut,R),Ba(gt)||(gt=Ut),mt=Math.round(Ge+gt*B),se<=pe&&se>=Ge&&mt!==se){if(Ue&&!Ue._initted&&Ue.data<=fs(mt-se))return;S.inertia===!1&&(pt=gt-Ve),ye(mt,{duration:P(fs(Math.max(fs(Ut-Mt),fs(gt-Mt))*.185/Ze/.05||0)),ease:S.ease||"power3",data:fs(mt-se),onInterrupt:function(){return ne.restart(!0)&&T&&T(R)},onComplete:function(){R.update(),W=me(),r&&(de?de.resetTo("totalProgress",gt,r._tTime/r._tDur):r.progress(gt)),Ke=st=r&&!w?r.totalProgress():R.progress,y&&y(R),O&&O(R)}},se,pt*B,mt-se-pt*B),Pn&&Pn(R,ye.tween)}}else R.isActive&&W!==se&&ne.restart(!0)}).pause()),l&&(Of[l]=R),h=R.trigger=xn(h||d!==!0&&d),Ye=h&&h._gsap&&h._gsap.stRevert,Ye&&(Ye=Ye(R)),d=d===!0?h:xn(d),On(o)&&(o={targets:h,className:o}),d&&(g===!1||g===qn||(g=!g&&d.parentNode&&d.parentNode.style&&Yn(d.parentNode).display==="flex"?!1:It),R.pin=d,he=xe.core.getCache(d),he.spacer?ee=he.pinState:(A&&(A=xn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),he.spacerIsNative=!!A,A&&(he.spacerState=Jo(A))),he.spacer=fe=A||Et.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),he.pinState=ee=Jo(d)),n.force3D!==!1&&xe.set(d,{force3D:!0}),R.spacer=fe=he.spacer,He=Yn(d),rt=He[g+v.os2],oe=xe.getProperty(d),Ae=xe.quickSetter(d,v.a,Ft),xu(d,fe,He),te=Jo(d)),X){b=Dr(X)?tm(X,nm):nm,H=Zo("scroller-start",l,I,v,b,0),Oe=Zo("scroller-end",l,I,v,b,0,H),le=H["offset"+v.op.d2];var at=xn(dr(I,"content")||I);Re=this.markerStart=Zo("start",l,at,v,b,le,0,E),ge=this.markerEnd=Zo("end",l,at,v,b,le,0,E),E&&(De=xe.quickSetter([Re,ge],v.a,Ft)),!G&&!(wi.length&&dr(I,"fixedMarkers")===!0)&&(XR(L?xt:I),xe.set([H,Oe],{force3D:!0}),ke=xe.quickSetter(H,v.a,Ft),_e=xe.quickSetter(Oe,v.a,Ft))}if(E){var be=E.vars.onUpdate,Me=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),be&&be.apply(E,Me||[])})}if(R.previous=function(){return Je[Je.indexOf(R)-1]},R.next=function(){return Je[Je.indexOf(R)+1]},R.revert=function(se,Ne){if(!Ne)return R.kill(!0);var Ue=se!==!1||!R.enabled,Ve=tn;Ue!==R.isReverted&&(Ue&&(ie=Math.max(me(),R.scroll.rec||0),ue=R.progress,ve=r&&r.progress()),Re&&[Re,ge,H,Oe].forEach(function(Mt){return Mt.style.display=Ue?"none":"block"}),Ue&&(tn=R,R.update(Ue)),d&&(!C||!R.isActive)&&(Ue?ZR(d,fe,ee):xu(d,fe,Yn(d),Ce)),Ue||R.update(Ue),tn=Ve,R.isReverted=Ue)},R.refresh=function(se,Ne,Ue,Ve){if(!((tn||!R.enabled)&&!Ne)){if(d&&se&&Qn){Vt(i,"scrollEnd",S0);return}!dn&&K&&K(R),tn=R,ye.tween&&!Ue&&(ye.tween.kill(),ye.tween=0),de&&de.pause(),_&&r&&r.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Mt=re(),Ze=Ie(),pt=E?E.duration():Ei(I,v),Ut=B<=.01,gt=0,mt=Ve||0,lt=Dr(Ue)?Ue.end:n.end,Pn=n.endTrigger||h,T=Dr(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),O=R.pinnedContainer=n.pinnedContainer&&xn(n.pinnedContainer,R),V=h&&Math.max(0,Je.indexOf(R))||0,k=V,z,ae,Se,Fe,Ee,we,Be,We,yt,Nt,ct,on,ut;for(X&&Dr(Ue)&&(on=xe.getProperty(H,v.p),ut=xe.getProperty(Oe,v.p));k--;)we=Je[k],we.end||we.refresh(0,1)||(tn=R),Be=we.pin,Be&&(Be===h||Be===d||Be===O)&&!we.isReverted&&(Nt||(Nt=[]),Nt.unshift(we),we.revert(!0,!0)),we!==Je[k]&&(V--,k--);for(gn(T)&&(T=T(R)),T=Zp(T,"start",R),Ge=am(T,h,Mt,v,me(),Re,H,R,Ze,Y,G,pt,E,R._startClamp&&"_startClamp")||(d?-.001:0),gn(lt)&&(lt=lt(R)),On(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(On(T)?T.split(" ")[0]:"")+lt:(gt=Ol(lt.substr(2),Mt),lt=On(T)?T:(E?xe.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Ge):Ge)+gt,Pn=h)),lt=Zp(lt,"end",R),pe=Math.max(Ge,am(lt||(Pn?"100% 0":pt),Pn,Mt,v,me()+gt,ge,Oe,R,Ze,Y,G,pt,E,R._endClamp&&"_endClamp"))||-.001,gt=0,k=V;k--;)we=Je[k],Be=we.pin,Be&&we.start-we._pinPush<=Ge&&!E&&we.end>0&&(z=we.end-(R._startClamp?Math.max(0,we.start):we.start),(Be===h&&we.start-we._pinPush<Ge||Be===O)&&isNaN(T)&&(gt+=z*(1-we.progress)),Be===d&&(mt+=z));if(Ge+=gt,pe+=gt,R._startClamp&&(R._startClamp+=gt),R._endClamp&&!dn&&(R._endClamp=pe||-.001,pe=Math.min(pe,Ei(I,v))),B=pe-Ge||(Ge-=.01)&&.001,Ut&&(ue=xe.utils.clamp(0,1,xe.utils.normalize(Ge,pe,ie))),R._pinPush=mt,Re&&gt&&(z={},z[v.a]="+="+gt,O&&(z[v.p]="-="+me()),xe.set([Re,ge],z)),d&&!(If&&R.end>=Ei(I,v)))z=Yn(d),Fe=v===Bt,Se=me(),ze=parseFloat(oe(v.a))+mt,!pt&&pe>1&&(ct=(L?Et.scrollingElement||ci:I).style,ct={style:ct,value:ct["overflow"+v.a.toUpperCase()]},L&&Yn(xt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+v.a.toUpperCase()]="scroll")),xu(d,fe,z),te=Jo(d),ae=zi(d,!0),We=G&&xr(I,Fe?_n:Bt)(),g?(Ce=[g+v.os2,B+mt+Ft],Ce.t=fe,k=g===It?nc(d,v)+B+mt:0,k&&(Ce.push(v.d,k+Ft),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=k+Ft)),$s(Ce),O&&Je.forEach(function($e){$e.pin===O&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),G&&me(ie)):(k=nc(d,v),k&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=k+Ft)),G&&(Ee={top:ae.top+(Fe?Se-Ge:We)+Ft,left:ae.left+(Fe?We:Se-Ge)+Ft,boxSizing:"border-box",position:"fixed"},Ee[$r]=Ee["max"+ta]=Math.ceil(ae.width)+Ft,Ee[Xr]=Ee["max"+Kh]=Math.ceil(ae.height)+Ft,Ee[qn]=Ee[qn+ja]=Ee[qn+qa]=Ee[qn+Ka]=Ee[qn+Ya]="0",Ee[It]=z[It],Ee[It+ja]=z[It+ja],Ee[It+qa]=z[It+qa],Ee[It+Ka]=z[It+Ka],Ee[It+Ya]=z[It+Ya],Q=QR(ee,Ee,C),dn&&me(0)),r?(yt=r._initted,pu(1),r.render(r.duration(),!0,!0),J=oe(v.a)-ze+B+mt,Te=Math.abs(B-J)>1,G&&Te&&Q.splice(Q.length-2,2),r.render(0,!0,!0),yt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),pu(0)):J=B,ct&&(ct.value?ct.style["overflow"+v.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+v.a));else if(h&&me()&&!E)for(ae=h.parentNode;ae&&ae!==xt;)ae._pinOffset&&(Ge-=ae._pinOffset,pe-=ae._pinOffset),ae=ae.parentNode;Nt&&Nt.forEach(function($e){return $e.revert(!1,!0)}),R.start=Ge,R.end=pe,Le=N=dn?ie:me(),!E&&!dn&&(Le<ie&&me(ie),R.scroll.rec=0),R.revert(!1,!0),Z=nn(),ne&&(W=-1,ne.restart(!0)),tn=0,r&&w&&(r._initted||ve)&&r.progress()!==ve&&r.progress(ve||0,!0).render(r.time(),!0,!0),(Ut||ue!==R.progress||E||_)&&(r&&!w&&r.totalProgress(E&&Ge<-.001&&!ue?xe.utils.normalize(Ge,pe,0):ue,!0),R.progress=Ut||(Le-Ge)/B===ue?0:ue),d&&g&&(fe._pinOffset=Math.round(R.progress*J)),de&&de.invalidate(),isNaN(on)||(on-=xe.getProperty(H,v.p),ut-=xe.getProperty(Oe,v.p),Qo(H,v,on),Qo(Re,v,on-(Ve||0)),Qo(Oe,v,ut),Qo(ge,v,ut-(Ve||0))),Ut&&!dn&&R.update(),u&&!dn&&!M&&(M=!0,u(R),M=!1)}},R.getVelocity=function(){return(me()-N)/(nn()-Ua)*1e3||0},R.endAnimation=function(){Aa(R.callbackAnimation),r&&(de?de.progress(1):r.paused()?w||Aa(r,R.direction<0,1):Aa(r,r.reversed()))},R.labelToScroll=function(se){return r&&r.labels&&(Ge||R.refresh()||Ge)+r.labels[se]/r.duration()*B||0},R.getTrailing=function(se){var Ne=Je.indexOf(R),Ue=R.direction>0?Je.slice(0,Ne).reverse():Je.slice(Ne+1);return(On(se)?Ue.filter(function(Ve){return Ve.vars.preventOverlaps===se}):Ue).filter(function(Ve){return R.direction>0?Ve.end<=Ge:Ve.start>=pe})},R.update=function(se,Ne,Ue){if(!(E&&!Ue&&!se)){var Ve=dn===!0?ie:R.scroll(),Mt=se?0:(Ve-Ge)/B,Ze=Mt<0?0:Mt>1?1:Mt||0,pt=R.progress,Ut,gt,mt,lt,Pn,T,O,V;if(Ne&&(N=Le,Le=E?me():Ve,S&&(st=Ke,Ke=r&&!w?r.totalProgress():Ze)),p&&d&&!tn&&!Xo&&Qn&&(!Ze&&Ge<Ve+(Ve-N)/(nn()-Ua)*p?Ze=1e-4:Ze===1&&pe>Ve+(Ve-N)/(nn()-Ua)*p&&(Ze=.9999)),Ze!==pt&&R.enabled){if(Ut=R.isActive=!!Ze&&Ze<1,gt=!!pt&&pt<1,T=Ut!==gt,Pn=T||!!Ze!=!!pt,R.direction=Ze>pt?1:-1,R.progress=Ze,Pn&&!tn&&(mt=Ze&&!pt?0:Ze===1?1:pt===1?2:3,w&&(lt=!T&&$[mt+1]!=="none"&&$[mt+1]||$[mt],V=r&&(lt==="complete"||lt==="reset"||lt in r))),U&&(T||V)&&(V||f||!r)&&(gn(U)?U(R):R.getTrailing(U).forEach(function(Se){return Se.endAnimation()})),w||(de&&!tn&&!Xo?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",Ze,r._tTime/r._tDur):(de.vars.totalProgress=Ze,de.invalidate().restart())):r&&r.totalProgress(Ze,!!(tn&&(Z||se)))),d){if(se&&g&&(fe.style[g+v.os2]=rt),!G)Ae(Fa(ze+J*Ze));else if(Pn){if(O=!se&&Ze>pt&&pe+1>Ve&&Ve+1>=Ei(I,v),C)if(!se&&(Ut||O)){var k=zi(d,!0),z=Ve-Ge;om(d,xt,k.top+(v===Bt?z:0)+Ft,k.left+(v===Bt?0:z)+Ft)}else om(d,fe);$s(Ut||O?Q:te),Te&&Ze<1&&Ut||Ae(ze+(Ze===1&&!O?J:0))}}S&&!ye.tween&&!tn&&!Xo&&ne.restart(!0),o&&(T||x&&Ze&&(Ze<1||!mu))&&ao(o.targets).forEach(function(Se){return Se.classList[Ut||x?"add":"remove"](o.className)}),a&&!w&&!se&&a(R),Pn&&!tn?(w&&(V&&(lt==="complete"?r.pause().totalProgress(1):lt==="reset"?r.restart(!0).pause():lt==="restart"?r.restart(!0):r[lt]()),a&&a(R)),(T||!mu)&&(c&&T&&gu(R,c),F[mt]&&gu(R,F[mt]),x&&(Ze===1?R.kill(!1,1):F[mt]=0),T||(mt=Ze===1?1:3,F[mt]&&gu(R,F[mt]))),D&&!Ut&&Math.abs(R.getVelocity())>(Ba(D)?D:2500)&&(Aa(R.callbackAnimation),de?de.progress(1):Aa(r,lt==="reverse"?1:!Ze,1))):w&&a&&!tn&&a(R)}if(_e){var ae=E?Ve/E.duration()*(E._caScrollDist||0):Ve;ke(ae+(H._isFlipped?1:0)),_e(ae)}De&&De(-Ve/E.duration()*(E._caScrollDist||0))}},R.enable=function(se,Ne){R.enabled||(R.enabled=!0,Vt(I,"resize",za),L||Vt(I,"scroll",hs),K&&Vt(i,"refreshInit",K),se!==!1&&(R.progress=ue=0,Le=N=W=me()),Ne!==!1&&R.refresh())},R.getTween=function(se){return se&&ye?ye.tween:de},R.setPositions=function(se,Ne,Ue,Ve){if(E){var Mt=E.scrollTrigger,Ze=E.duration(),pt=Mt.end-Mt.start;se=Mt.start+pt*se/Ze,Ne=Mt.start+pt*Ne/Ze}R.refresh(!1,!1,{start:Jp(se,Ue&&!!R._startClamp),end:Jp(Ne,Ue&&!!R._endClamp)},Ve),R.update()},R.adjustPinSpacing=function(se){if(Ce&&se){var Ne=Ce.indexOf(v.d)+1;Ce[Ne]=parseFloat(Ce[Ne])+se+Ft,Ce[1]=parseFloat(Ce[1])+se+Ft,$s(Ce)}},R.disable=function(se,Ne){if(R.enabled&&(se!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Ne||de&&de.pause(),ie=0,he&&(he.uncache=1),K&&Ht(i,"refreshInit",K),ne&&(ne.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!L)){for(var Ue=Je.length;Ue--;)if(Je[Ue].scroller===I&&Je[Ue]!==R)return;Ht(I,"resize",za),L||Ht(I,"scroll",hs)}},R.kill=function(se,Ne){R.disable(se,Ne),de&&!Ne&&de.kill(),l&&delete Of[l];var Ue=Je.indexOf(R);Ue>=0&&Je.splice(Ue,1),Ue===hn&&Nl>0&&hn--,Ue=0,Je.forEach(function(Ve){return Ve.scroller===R.scroller&&(Ue=1)}),Ue||dn||(R.scroll.rec=0),r&&(r.scrollTrigger=null,se&&r.revert({kill:!1}),Ne||r.kill()),Re&&[Re,ge,H,Oe].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),Za===R&&(Za=0),d&&(he&&(he.uncache=1),Ue=0,Je.forEach(function(Ve){return Ve.pin===d&&Ue++}),Ue||(he.spacer=0)),n.onKill&&n.onKill(R)},Je.push(R),R.enable(!1,!1),Ye&&Ye(R),r&&r.add&&!B){var Pe=R.update;R.update=function(){R.update=Pe,Ge||pe||R.refresh()},xe.delayedCall(.01,R.update),B=.01,Ge=pe=0}else R.refresh();d&&KR()},i.register=function(n){return Ps||(xe=n||m0(),p0()&&window.document&&i.enable(),Ps=Na),Ps},i.defaults=function(n){if(n)for(var r in n)Ko[r]=n[r];return Ko},i.disable=function(n,r){Na=0,Je.forEach(function(a){return a[r?"kill":"disable"](n)}),Ht(nt,"wheel",hs),Ht(Et,"scroll",hs),clearInterval($o),Ht(Et,"touchcancel",vi),Ht(xt,"touchstart",vi),Yo(Ht,Et,"pointerdown,touchstart,mousedown",Qp),Yo(Ht,Et,"pointerup,touchend,mouseup",em),ec.kill(),qo(Ht);for(var s=0;s<et.length;s+=3)jo(Ht,et[s],et[s+1]),jo(Ht,et[s],et[s+2])},i.enable=function(){if(nt=window,Et=document,ci=Et.documentElement,xt=Et.body,xe&&(ao=xe.utils.toArray,Xa=xe.utils.clamp,Df=xe.core.context||vi,pu=xe.core.suppressOverwrites||vi,Xh=nt.history.scrollRestoration||"auto",Uf=nt.pageYOffset,xe.core.globals("ScrollTrigger",i),xt)){Na=1,Ws=document.createElement("div"),Ws.style.height="100vh",Ws.style.position="absolute",T0(),VR(),Lt.register(xe),i.isTouch=Lt.isTouch,rr=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Lf=Lt.isTouch===1,Vt(nt,"wheel",hs),c0=[nt,Et,ci,xt],xe.matchMedia?(i.matchMedia=function(l){var c=xe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},xe.addEventListener("matchMediaInit",function(){return Jh()}),xe.addEventListener("matchMediaRevert",function(){return M0()}),xe.addEventListener("matchMedia",function(){zr(0,1),rs("matchMedia")}),xe.matchMedia("(orientation: portrait)",function(){return vu(),vu})):console.warn("Requires GSAP 3.11.0 or later"),vu(),Vt(Et,"scroll",hs);var n=xt.style,r=n.borderTopStyle,s=xe.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=zi(xt),Bt.m=Math.round(a.top+Bt.sc())||0,_n.m=Math.round(a.left+_n.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),$o=setInterval(im,250),xe.delayedCall(.5,function(){return Xo=0}),Vt(Et,"touchcancel",vi),Vt(xt,"touchstart",vi),Yo(Vt,Et,"pointerdown,touchstart,mousedown",Qp),Yo(Vt,Et,"pointerup,touchend,mouseup",em),Pf=xe.utils.checkPrefix("transform"),Fl.push(Pf),Ps=nn(),ec=xe.delayedCall(.2,zr).pause(),Ls=[Et,"visibilitychange",function(){var l=nt.innerWidth,c=nt.innerHeight;Et.hidden?(jp=l,Kp=c):(jp!==l||Kp!==c)&&za()},Et,"DOMContentLoaded",zr,nt,"load",zr,nt,"resize",za],qo(Vt),Je.forEach(function(l){return l.enable(0,1)}),o=0;o<et.length;o+=3)jo(Ht,et[o],et[o+1]),jo(Ht,et[o],et[o+2])}},i.config=function(n){"limitCallbacks"in n&&(mu=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval($o)||($o=r)&&setInterval(im,r),"ignoreMobileResize"in n&&(Lf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(qo(Ht)||qo(Vt,n.autoRefreshEvents||"none"),f0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=xn(n),a=et.indexOf(s),o=ns(s);~a&&et.splice(a,o?6:2),r&&(o?wi.unshift(nt,r,xt,r,ci,r):wi.unshift(s,r))},i.clearMatchMedia=function(n){Je.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var a=(On(n)?xn(n):n).getBoundingClientRect(),o=a[s?$r:Xr]*r||0;return s?a.right-o>0&&a.left+o<nt.innerWidth:a.bottom-o>0&&a.top+o<nt.innerHeight},i.positionInViewport=function(n,r,s){On(n)&&(n=xn(n));var a=n.getBoundingClientRect(),o=a[s?$r:Xr],l=r==null?o/2:r in ic?ic[r]*o:~r.indexOf("%")?parseFloat(r)*o/100:parseFloat(r)||0;return s?(a.left+l)/nt.innerWidth:(a.top+l)/nt.innerHeight},i.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=is.killAll||[];is={},r.forEach(function(s){return s()})}},i}();je.version="3.12.5";je.saveStyles=function(i){return i?ao(i).forEach(function(e){if(e&&e.style){var t=In.indexOf(e);t>=0&&In.splice(t,5),In.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),Df())}}):In};je.revert=function(i,e){return Jh(!i,e)};je.create=function(i,e){return new je(i,e)};je.refresh=function(i){return i?za():(Ps||je.register())&&zr(!0)};je.update=function(i){return++et.cache&&Wi(i===!0?2:0)};je.clearScrollMemory=E0;je.maxScroll=function(i,e){return Ei(i,e?_n:Bt)};je.getScrollFunc=function(i,e){return xr(xn(i),e?_n:Bt)};je.getById=function(i){return Of[i]};je.getAll=function(){return Je.filter(function(i){return i.vars.id!=="ScrollSmoother"})};je.isScrolling=function(){return!!Qn};je.snapDirectional=Zh;je.addEventListener=function(i,e){var t=is[i]||(is[i]=[]);~t.indexOf(e)||t.push(e)};je.removeEventListener=function(i,e){var t=is[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};je.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=xe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&gn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return gn(s)&&(s=s(),Vt(je,"refresh",function(){return s=e.batchMax()})),ao(i).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(je.create(c))}),t};var cm=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},yu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Lt.isTouch?" pinch-zoom":""):"none",e===ci&&i(xt,t)},el={auto:1,scroll:1},tC=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||xe.core.getCache(s),o=nn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(el[(l=Yn(s)).overflowY]||el[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ns(s)&&(el[(l=Yn(s)).overflowY]||el[l.overflowX]),a._isScrollT=o}(a._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},A0=function(e,t,n,r){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&tC,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Vt(Et,Lt.eventTypes[0],fm,!1,!0)},onDisable:function(){return Ht(Et,Lt.eventTypes[0],fm,!0)}})},nC=/(input|label|select|textarea)/i,um,fm=function(e){var t=nC.test(e.target.tagName);(t||um)&&(e._gsapAllow=!0,um=t)},iC=function(e){Dr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=xn(e.target)||ci,u=xe.core.globals().ScrollSmoother,f=u&&u.get(),h=rr&&(e.content&&xn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=xr(c,Bt),g=xr(c,_n),_=1,p=(Lt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,m=0,y=gn(r)?function(){return r(o)}:function(){return r||2.8},x,S,C=A0(c,e.type,!0,s),A=function(){return S=!1},E=vi,D=vi,U=function(){l=Ei(c,Bt),D=Xa(rr?1:0,l),n&&(E=Xa(0,Ei(c,_n))),x=qr},v=function(){h._gsap.y=Fa(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},w=function(){if(S){requestAnimationFrame(A);var X=Fa(o.deltaY/2),Y=D(d.v-X);if(h&&Y!==d.v+d.offset){d.offset=Y-d.v;var R=Fa((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=et.cache,Wi()}return!0}d.offset&&v(),S=!0},I,j,L,G,F=function(){U(),I.isActive()&&I.vars.scrollY>l&&(d()>l?I.progress(1)&&d(l):I.resetTo("scrollY",l))};return h&&xe.set(h,{y:"+=0"}),e.ignoreCheck=function($){return rr&&$.type==="touchmove"&&w()||_>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){S=!1;var $=_;_=Fa((nt.visualViewport&&nt.visualViewport.scale||1)/p),I.pause(),$!==_&&yu(c,_>1.01?!0:n?!1:"x"),j=g(),L=d(),U(),x=qr},e.onRelease=e.onGestureStart=function($,X){if(d.offset&&v(),!X)G.restart(!0);else{et.cache++;var Y=y(),R,K;n&&(R=g(),K=R+Y*.05*-$.velocityX/.227,Y*=cm(g,R,K,Ei(c,_n)),I.vars.scrollX=E(K)),R=d(),K=R+Y*.05*-$.velocityY/.227,Y*=cm(d,R,K,Ei(c,Bt)),I.vars.scrollY=D(K),I.invalidate().duration(Y).play(.01),(rr&&I.vars.scrollY>=l||R>=l-1)&&xe.to({},{onUpdate:F,duration:Y})}a&&a($)},e.onWheel=function(){I._ts&&I.pause(),nn()-m>1e3&&(x=0,m=nn())},e.onChange=function($,X,Y,R,K){if(qr!==x&&U(),X&&n&&g(E(R[2]===X?j+($.startX-$.x):g()+X-R[1])),Y){d.offset&&v();var re=K[2]===Y,Ie=re?L+$.startY-$.y:d()+Y-K[1],W=D(Ie);re&&Ie!==W&&(L+=W-Ie),d(W)}(Y||X)&&Wi()},e.onEnable=function(){yu(c,n?!1:"x"),je.addEventListener("refresh",F),Vt(nt,"resize",F),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),C.enable()},e.onDisable=function(){yu(c,!0),Ht(nt,"resize",F),je.removeEventListener("refresh",F),C.kill()},e.lockAxis=e.lockAxis!==!1,o=new Lt(e),o.iOS=rr,rr&&!d()&&d(1),rr&&xe.ticker.add(vi),G=o._dc,I=xe.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:b0(d,d(),function(){return I.pause()})},onUpdate:Wi,onComplete:G.vars.onComplete}),o};je.sort=function(i){return Je.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};je.observe=function(i){return new Lt(i)};je.normalizeScroll=function(i){if(typeof i>"u")return fn;if(i===!0&&fn)return fn.enable();if(i===!1){fn&&fn.kill(),fn=i;return}var e=i instanceof Lt?i:iC(i);return fn&&fn.target===e.target&&fn.kill(),ns(e.target)&&(fn=e),e};je.core={_getVelocityProp:Cf,_inputObserver:A0,_scrollers:et,_proxies:wi,bridge:{ss:function(){Qn||rs("scrollStart"),Qn=nn()},ref:function(){return tn}}};m0()&&xe.registerPlugin(je);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="161",rC=0,hm=1,sC=2,w0=1,aC=2,Ni=3,yr=0,An=1,Gi=2,pr=0,Xs=1,dm=2,pm=3,mm=4,oC=5,Nr=100,lC=101,cC=102,_m=103,gm=104,uC=200,fC=201,hC=202,dC=203,Ff=204,Bf=205,pC=206,mC=207,_C=208,gC=209,vC=210,xC=211,yC=212,SC=213,MC=214,EC=0,TC=1,bC=2,rc=3,AC=4,wC=5,RC=6,CC=7,R0=0,PC=1,LC=2,mr=0,DC=1,IC=2,OC=3,UC=4,NC=5,FC=6,C0=300,na=301,ia=302,zf=303,Gf=304,Tc=306,kf=1e3,ui=1001,Hf=1002,pn=1003,vm=1004,wa=1005,yn=1006,Su=1007,Gr=1008,_r=1009,BC=1010,zC=1011,ed=1012,P0=1013,ur=1014,ki=1015,lo=1016,L0=1017,D0=1018,Yr=1020,GC=1021,fi=1023,kC=1024,HC=1025,jr=1026,ra=1027,VC=1028,I0=1029,WC=1030,O0=1031,U0=1033,Mu=33776,Eu=33777,Tu=33778,bu=33779,xm=35840,ym=35841,Sm=35842,Mm=35843,N0=36196,Em=37492,Tm=37496,bm=37808,Am=37809,wm=37810,Rm=37811,Cm=37812,Pm=37813,Lm=37814,Dm=37815,Im=37816,Om=37817,Um=37818,Nm=37819,Fm=37820,Bm=37821,Au=36492,zm=36494,Gm=36495,$C=36283,km=36284,Hm=36285,Vm=36286,F0=3e3,Kr=3001,XC=3200,qC=3201,YC=0,jC=1,Kn="",Xt="srgb",Yi="srgb-linear",td="display-p3",bc="display-p3-linear",sc="linear",vt="srgb",ac="rec709",oc="p3",ds=7680,Wm=519,KC=512,ZC=513,JC=514,B0=515,QC=516,eP=517,tP=518,nP=519,$m=35044,Xm="300 es",Vf=1035,Vi=2e3,lc=2001;class da{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=Math.PI/180,Wf=180/Math.PI;function vo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function iP(i,e){return(i%e+e)%e}function Ru(i,e,t){return(1-t)*i+t*e}function qm(i){return(i&i-1)===0&&i!==0}function $f(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ra(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,a,o,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],p=r[3],m=r[6],y=r[1],x=r[4],S=r[7],C=r[2],A=r[5],E=r[8];return s[0]=a*_+o*y+l*C,s[3]=a*p+o*x+l*A,s[6]=a*m+o*S+l*E,s[1]=c*_+u*y+f*C,s[4]=c*p+u*x+f*A,s[7]=c*m+u*S+f*E,s[2]=h*_+d*y+g*C,s[5]=h*p+d*x+g*A,s[8]=h*m+d*S+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cu.makeScale(e,t)),this}rotate(e){return this.premultiply(Cu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cu=new Qe;function z0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function rP(){const i=cc("canvas");return i.style.display="block",i}const Ym={};function qs(i){i in Ym||(Ym[i]=!0,console.warn(i))}const jm=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Km=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),tl={[Yi]:{transfer:sc,primaries:ac,toReference:i=>i,fromReference:i=>i},[Xt]:{transfer:vt,primaries:ac,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[bc]:{transfer:sc,primaries:oc,toReference:i=>i.applyMatrix3(Km),fromReference:i=>i.applyMatrix3(jm)},[td]:{transfer:vt,primaries:oc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Km),fromReference:i=>i.applyMatrix3(jm).convertLinearToSRGB()}},sP=new Set([Yi,bc]),ft={enabled:!0,_workingColorSpace:Yi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!sP.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=tl[e].toReference,r=tl[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return tl[i].primaries},getTransfer:function(i){return i===Kn?sc:tl[i].transfer}};function Ys(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ps;class G0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ps===void 0&&(ps=cc("canvas")),ps.width=e.width,ps.height=e.height;const n=ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=cc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ys(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ys(t[n]/255)*255):t[n]=Ys(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let aP=0;class k0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:aP++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Lu(r[a].image)):s.push(Lu(r[a]))}else s=Lu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Lu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?G0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oP=0;class wn extends da{constructor(e=wn.DEFAULT_IMAGE,t=wn.DEFAULT_MAPPING,n=ui,r=ui,s=yn,a=Gr,o=fi,l=_r,c=wn.DEFAULT_ANISOTROPY,u=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oP++}),this.uuid=vo(),this.name="",this.source=new k0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Kr?Xt:Kn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==C0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kf:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kf:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Xt?Kr:F0}set encoding(e){qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Kr?Xt:Kn}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=C0;wn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,S=(d+1)/2,C=(m+1)/2,A=(u+h)/4,E=(f+_)/4,D=(g+p)/4;return x>S&&x>C?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=E/n):S>C?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=A/r,s=D/r):C<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),n=E/s,r=D/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lP extends da{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Kr?Xt:Kn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new wn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new k0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends lP{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class H0 extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cP extends wn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=pn,this.minFilter=pn,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-o;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const C=Math.sqrt(x),A=Math.atan2(C,m*y);p=Math.sin(p*A)/C,o=Math.sin(o*A)/C}const S=o*y;if(l=l*p+h*S,c=c*p+d*S,u=u*p+g*S,f=f*p+_*S,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),f=o(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Du.copy(this).projectOnVector(e),this.sub(Du)}reflect(e){return this.sub(Du.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Du=new q,Zm=new xo;class yo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ri):ri.fromBufferAttribute(s,a),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),nl.copy(n.boundingBox)),nl.applyMatrix4(e.matrixWorld),this.union(nl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ca),il.subVectors(this.max,Ca),ms.subVectors(e.a,Ca),_s.subVectors(e.b,Ca),gs.subVectors(e.c,Ca),Ji.subVectors(_s,ms),Qi.subVectors(gs,_s),Ar.subVectors(ms,gs);let t=[0,-Ji.z,Ji.y,0,-Qi.z,Qi.y,0,-Ar.z,Ar.y,Ji.z,0,-Ji.x,Qi.z,0,-Qi.x,Ar.z,0,-Ar.x,-Ji.y,Ji.x,0,-Qi.y,Qi.x,0,-Ar.y,Ar.x,0];return!Iu(t,ms,_s,gs,il)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,ms,_s,gs,il))?!1:(rl.crossVectors(Ji,Qi),t=[rl.x,rl.y,rl.z],Iu(t,ms,_s,gs,il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Li=[new q,new q,new q,new q,new q,new q,new q,new q],ri=new q,nl=new yo,ms=new q,_s=new q,gs=new q,Ji=new q,Qi=new q,Ar=new q,Ca=new q,il=new q,rl=new q,wr=new q;function Iu(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){wr.fromArray(i,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=t.dot(wr),u=n.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const uP=new yo,Pa=new q,Ou=new q;class nd{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uP.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pa.subVectors(e,this.center);const t=Pa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Pa,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pa.copy(e.center).add(Ou)),this.expandByPoint(Pa.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new q,Uu=new q,sl=new q,er=new q,Nu=new q,al=new q,Fu=new q;class V0{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Uu.copy(e).add(t).multiplyScalar(.5),sl.copy(t).sub(e).normalize(),er.copy(this.origin).sub(Uu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(sl),o=er.dot(this.direction),l=-er.dot(sl),c=er.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Uu).addScaledVector(sl,h),d}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const n=Di.dot(this.direction),r=Di.dot(Di)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,n,r,s){Nu.subVectors(t,e),al.subVectors(n,e),Fu.crossVectors(Nu,al);let a=this.direction.dot(Fu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;er.subVectors(this.origin,e);const l=o*this.direction.dot(al.crossVectors(er,al));if(l<0)return null;const c=o*this.direction.dot(Nu.cross(er));if(c<0||l+c>a)return null;const u=-o*er.dot(Fu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class jt{constructor(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,p){jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,p)}set(e,t,n,r,s,a,o,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/vs.setFromMatrixColumn(e,0).length(),s=1/vs.setFromMatrixColumn(e,1).length(),a=1/vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fP,e,hP)}lookAt(e,t,n){const r=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),tr.crossVectors(n,Ln),tr.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),tr.crossVectors(n,Ln)),tr.normalize(),ol.crossVectors(Ln,tr),r[0]=tr.x,r[4]=ol.x,r[8]=Ln.x,r[1]=tr.y,r[5]=ol.y,r[9]=Ln.y,r[2]=tr.z,r[6]=ol.z,r[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],x=n[7],S=n[11],C=n[15],A=r[0],E=r[4],D=r[8],U=r[12],v=r[1],w=r[5],I=r[9],j=r[13],L=r[2],G=r[6],F=r[10],$=r[14],X=r[3],Y=r[7],R=r[11],K=r[15];return s[0]=a*A+o*v+l*L+c*X,s[4]=a*E+o*w+l*G+c*Y,s[8]=a*D+o*I+l*F+c*R,s[12]=a*U+o*j+l*$+c*K,s[1]=u*A+f*v+h*L+d*X,s[5]=u*E+f*w+h*G+d*Y,s[9]=u*D+f*I+h*F+d*R,s[13]=u*U+f*j+h*$+d*K,s[2]=g*A+_*v+p*L+m*X,s[6]=g*E+_*w+p*G+m*Y,s[10]=g*D+_*I+p*F+m*R,s[14]=g*U+_*j+p*$+m*K,s[3]=y*A+x*v+S*L+C*X,s[7]=y*E+x*w+S*G+C*Y,s[11]=y*D+x*I+S*F+C*R,s[15]=y*U+x*j+S*$+C*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*o*h+n*c*h+r*o*d-n*l*d)+_*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+m*(-r*o*u-t*l*f+t*o*h+r*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*h*c+_*l*d-o*p*d-f*l*m+o*h*m,x=g*h*c-u*p*c-g*l*d+a*p*d+u*l*m-a*h*m,S=u*_*c-g*f*c+g*o*d-a*_*d-u*o*m+a*f*m,C=g*f*l-u*_*l-g*o*h+a*_*h+u*o*p-a*f*p,A=t*y+n*x+r*S+s*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/A;return e[0]=y*E,e[1]=(_*h*s-f*p*s-_*r*d+n*p*d+f*r*m-n*h*m)*E,e[2]=(o*p*s-_*l*s+_*r*c-n*p*c-o*r*m+n*l*m)*E,e[3]=(f*l*s-o*h*s-f*r*c+n*h*c+o*r*d-n*l*d)*E,e[4]=x*E,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*m+t*h*m)*E,e[6]=(g*l*s-a*p*s-g*r*c+t*p*c+a*r*m-t*l*m)*E,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*E,e[8]=S*E,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*m-t*f*m)*E,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*E,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*E,e[12]=C*E,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*p+t*f*p)*E,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*p-t*o*p)*E,e[15]=(a*f*r-u*o*r+u*n*l-t*f*l-a*n*h+t*o*h)*E,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,p=a*f,m=o*f,y=l*c,x=l*u,S=l*f,C=n.x,A=n.y,E=n.z;return r[0]=(1-(_+m))*C,r[1]=(d+S)*C,r[2]=(g-x)*C,r[3]=0,r[4]=(d-S)*A,r[5]=(1-(h+m))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(g+x)*E,r[9]=(p-y)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=vs.set(r[0],r[1],r[2]).length();const a=vs.set(r[4],r[5],r[6]).length(),o=vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],si.copy(this);const c=1/s,u=1/a,f=1/o;return si.elements[0]*=c,si.elements[1]*=c,si.elements[2]*=c,si.elements[4]*=u,si.elements[5]*=u,si.elements[6]*=u,si.elements[8]*=f,si.elements[9]*=f,si.elements[10]*=f,t.setFromRotationMatrix(si),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Vi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(o===Vi)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===lc)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Vi){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(a-s),h=(t+e)*c,d=(n+r)*u;let g,_;if(o===Vi)g=(a+s)*f,_=-2*f;else if(o===lc)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vs=new q,si=new jt,fP=new q(0,0,0),hP=new q(1,1,1),tr=new q,ol=new q,Ln=new q,Jm=new jt,Qm=new xo;class Ac{constructor(e=0,t=0,n=0,r=Ac.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ac.DEFAULT_ORDER="XYZ";class id{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let dP=0;const e_=new q,xs=new xo,Ii=new jt,ll=new q,La=new q,pP=new q,mP=new xo,t_=new q(1,0,0),n_=new q(0,1,0),i_=new q(0,0,1),_P={type:"added"},gP={type:"removed"};class Gn extends da{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:dP++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new q,t=new Ac,n=new xo,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new jt},normalMatrix:{value:new Qe}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new id,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.multiply(xs),this}rotateOnWorldAxis(e,t){return xs.setFromAxisAngle(e,t),this.quaternion.premultiply(xs),this}rotateX(e){return this.rotateOnAxis(t_,e)}rotateY(e){return this.rotateOnAxis(n_,e)}rotateZ(e){return this.rotateOnAxis(i_,e)}translateOnAxis(e,t){return e_.copy(e).applyQuaternion(this.quaternion),this.position.add(e_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(t_,e)}translateY(e){return this.translateOnAxis(n_,e)}translateZ(e){return this.translateOnAxis(i_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ll.copy(e):ll.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),La.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(La,ll,this.up):Ii.lookAt(ll,La,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),xs.setFromRotationMatrix(Ii),this.quaternion.premultiply(xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_P)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gP)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,e,pP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(La,mP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gn.DEFAULT_UP=new q(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new q,Oi=new q,Bu=new q,Ui=new q,ys=new q,Ss=new q,r_=new q,zu=new q,Gu=new q,ku=new q;class Si{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ai.subVectors(e,t),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ai.subVectors(r,t),Oi.subVectors(n,t),Bu.subVectors(e,t);const a=ai.dot(ai),o=ai.dot(Oi),l=ai.dot(Bu),c=Oi.dot(Oi),u=Oi.dot(Bu),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static isFrontFacing(e,t,n,r){return ai.subVectors(n,t),Oi.subVectors(e,t),ai.cross(Oi).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Si.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Si.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,n),Ss.subVectors(s,n),zu.subVectors(e,n);const l=ys.dot(zu),c=Ss.dot(zu);if(l<=0&&c<=0)return t.copy(n);Gu.subVectors(e,r);const u=ys.dot(Gu),f=Ss.dot(Gu);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);ku.subVectors(e,s);const d=ys.dot(ku),g=Ss.dot(ku);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ss,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return r_.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(r_,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(ys,a).addScaledVector(Ss,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const W0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},cl={h:0,s:0,l:0};function Hu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ft.workingColorSpace){return this.r=e,this.g=t,this.b=n,ft.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ft.workingColorSpace){if(e=iP(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Hu(a,s,e+1/3),this.g=Hu(a,s,e),this.b=Hu(a,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=W0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Pu(e.r),this.g=Pu(e.g),this.b=Pu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ft.fromWorkingColorSpace(en.copy(this),e),Math.round(Sn(en.r*255,0,255))*65536+Math.round(Sn(en.g*255,0,255))*256+Math.round(Sn(en.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(en.copy(this),t);const n=en.r,r=en.g,s=en.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Xt){ft.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,r=en.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+t,nr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nr),e.getHSL(cl);const n=Ru(nr.h,cl.h,t),r=Ru(nr.s,cl.s,t),s=Ru(nr.l,cl.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new ht;ht.NAMES=W0;let vP=0;class wc extends da{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vP++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=Xs,this.side=yr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ff,this.blendDst=Bf,this.blendEquation=Nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(n.blending=this.blending),this.side!==yr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ff&&(n.blendSrc=this.blendSrc),this.blendDst!==Bf&&(n.blendDst=this.blendDst),this.blendEquation!==Nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wm&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $0 extends wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=R0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new q,ul=new ot;class Ri{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$m,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ul.fromBufferAttribute(this,t),ul.applyMatrix3(e),this.setXY(t,ul.x,ul.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ra(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=vn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=vn(t,this.array),n=vn(n,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$m&&(e.usage=this.usage),e}}class X0 extends Ri{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class q0 extends Ri{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zr extends Ri{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xP=0;const Wn=new jt,Vu=new Gn,Ms=new q,Dn=new yo,Da=new yo,kt=new q;class os extends da{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xP++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(z0(e)?q0:X0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return Vu.lookAt(e),Vu.updateMatrix(),this.applyMatrix4(Vu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Zr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new nd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Da.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(Dn.min,Da.min),Dn.expandByPoint(kt),kt.addVectors(Dn.max,Da.max),Dn.expandByPoint(kt)):(Dn.expandByPoint(Da.min),Dn.expandByPoint(Da.max))}Dn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),kt.add(Ms)),r=Math.max(r,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let v=0;v<o;v++)c[v]=new q,u[v]=new q;const f=new q,h=new q,d=new q,g=new ot,_=new ot,p=new ot,m=new q,y=new q;function x(v,w,I){f.fromArray(r,v*3),h.fromArray(r,w*3),d.fromArray(r,I*3),g.fromArray(a,v*2),_.fromArray(a,w*2),p.fromArray(a,I*2),h.sub(f),d.sub(f),_.sub(g),p.sub(g);const j=1/(_.x*p.y-p.x*_.y);isFinite(j)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(j),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(j),c[v].add(m),c[w].add(m),c[I].add(m),u[v].add(y),u[w].add(y),u[I].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let v=0,w=S.length;v<w;++v){const I=S[v],j=I.start,L=I.count;for(let G=j,F=j+L;G<F;G+=3)x(n[G+0],n[G+1],n[G+2])}const C=new q,A=new q,E=new q,D=new q;function U(v){E.fromArray(s,v*3),D.copy(E);const w=c[v];C.copy(w),C.sub(E.multiplyScalar(E.dot(w))).normalize(),A.crossVectors(D,w);const j=A.dot(u[v])<0?-1:1;l[v*4]=C.x,l[v*4+1]=C.y,l[v*4+2]=C.z,l[v*4+3]=j}for(let v=0,w=S.length;v<w;++v){const I=S[v],j=I.start,L=I.count;for(let G=j,F=j+L;G<F;G+=3)U(n[G+0]),U(n[G+1]),U(n[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new q,s=new q,a=new q,o=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Ri(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new os,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const s_=new jt,Rr=new V0,fl=new nd,a_=new q,Es=new q,Ts=new q,bs=new q,Wu=new q,hl=new q,dl=new ot,pl=new ot,ml=new ot,o_=new q,l_=new q,c_=new q,_l=new q,gl=new q;class Ti extends Gn{constructor(e=new os,t=new $0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Wu.fromBufferAttribute(f,e),a?hl.addScaledVector(Wu,u):hl.addScaledVector(Wu.sub(t),u))}t.add(hl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(s),Rr.copy(e.ray).recast(e.near),!(fl.containsPoint(Rr.origin)===!1&&(Rr.intersectSphere(fl,a_)===null||Rr.origin.distanceToSquared(a_)>(e.far-e.near)**2))&&(s_.copy(s).invert(),Rr.copy(e.ray).applyMatrix4(s_),!(n.boundingBox!==null&&Rr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Rr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,C=x;S<C;S+=3){const A=o.getX(S),E=o.getX(S+1),D=o.getX(S+2);r=vl(this,m,e,n,c,u,f,A,E,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),S=o.getX(p+2);r=vl(this,a,e,n,c,u,f,y,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],y=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,C=x;S<C;S+=3){const A=S,E=S+1,D=S+2;r=vl(this,m,e,n,c,u,f,A,E,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,x=p+1,S=p+2;r=vl(this,a,e,n,c,u,f,y,x,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function yP(i,e,t,n,r,s,a,o){let l;if(e.side===An?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===yr,o),l===null)return null;gl.copy(o),gl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(gl);return c<t.near||c>t.far?null:{distance:c,point:gl.clone(),object:i}}function vl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Es),i.getVertexPosition(l,Ts),i.getVertexPosition(c,bs);const u=yP(i,e,t,n,Es,Ts,bs,_l);if(u){r&&(dl.fromBufferAttribute(r,o),pl.fromBufferAttribute(r,l),ml.fromBufferAttribute(r,c),u.uv=Si.getInterpolation(_l,Es,Ts,bs,dl,pl,ml,new ot)),s&&(dl.fromBufferAttribute(s,o),pl.fromBufferAttribute(s,l),ml.fromBufferAttribute(s,c),u.uv1=Si.getInterpolation(_l,Es,Ts,bs,dl,pl,ml,new ot),u.uv2=u.uv1),a&&(o_.fromBufferAttribute(a,o),l_.fromBufferAttribute(a,l),c_.fromBufferAttribute(a,c),u.normal=Si.getInterpolation(_l,Es,Ts,bs,o_,l_,c_,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new q,materialIndex:0};Si.getNormal(Es,Ts,bs,f.normal),u.face=f}return u}class So extends os{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Zr(c,3)),this.setAttribute("normal",new Zr(u,3)),this.setAttribute("uv",new Zr(f,2));function g(_,p,m,y,x,S,C,A,E,D,U){const v=S/E,w=C/D,I=S/2,j=C/2,L=A/2,G=E+1,F=D+1;let $=0,X=0;const Y=new q;for(let R=0;R<F;R++){const K=R*w-j;for(let re=0;re<G;re++){const Ie=re*v-I;Y[_]=Ie*y,Y[p]=K*x,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(re/E),f.push(1-R/D),$+=1}}for(let R=0;R<D;R++)for(let K=0;K<E;K++){const re=h+K+G*R,Ie=h+K+G*(R+1),W=h+(K+1)+G*(R+1),Z=h+(K+1)+G*R;l.push(re,Ie,Z),l.push(Ie,W,Z),X+=6}o.addGroup(d,X,U),d+=X,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function sa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function un(i){const e={};for(let t=0;t<i.length;t++){const n=sa(i[t]);for(const r in n)e[r]=n[r]}return e}function SP(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Y0(i){return i.getRenderTarget()===null?i.outputColorSpace:ft.workingColorSpace}const MP={clone:sa,merge:un};var EP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EP,this.fragmentShader=TP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=sa(e.uniforms),this.uniformsGroups=SP(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class j0 extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Vi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new q,u_=new ot,f_=new ot;class jn extends j0{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wf*2*Math.atan(Math.tan(wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,t){return this.getViewBounds(e,u_,f_),t.subVectors(f_,u_)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,ws=1;class bP extends Gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new jn(As,ws,e,t);r.layers=this.layers,this.add(r);const s=new jn(As,ws,e,t);s.layers=this.layers,this.add(s);const a=new jn(As,ws,e,t);a.layers=this.layers,this.add(a);const o=new jn(As,ws,e,t);o.layers=this.layers,this.add(o);const l=new jn(As,ws,e,t);l.layers=this.layers,this.add(l);const c=new jn(As,ws,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===lc)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class K0 extends wn{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:na,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class AP extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Kr?Xt:Kn),this.texture=new K0(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new So(5,5,5),s=new ji({name:"CubemapFromEquirect",uniforms:sa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:pr});s.uniforms.tEquirect.value=t;const a=new Ti(r,s),o=t.minFilter;return t.minFilter===Gr&&(t.minFilter=yn),new bP(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const $u=new q,wP=new q,RP=new Qe;class Ir{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=$u.subVectors(n,t).cross(wP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta($u),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||RP.getNormalMatrix(e),r=this.coplanarPoint($u).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new nd,xl=new q;class Z0{constructor(e=new Ir,t=new Ir,n=new Ir,r=new Ir,s=new Ir,a=new Ir){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vi){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],y=r[13],x=r[14],S=r[15];if(n[0].setComponents(l-s,h-c,p-d,S-m).normalize(),n[1].setComponents(l+s,h+c,p+d,S+m).normalize(),n[2].setComponents(l+a,h+u,p+g,S+y).normalize(),n[3].setComponents(l-a,h-u,p-g,S-y).normalize(),n[4].setComponents(l-o,h-f,p-_,S-x).normalize(),t===Vi)n[5].setComponents(l+o,h+f,p+_,S+x).normalize();else if(t===lc)n[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J0(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function CP(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?i.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):i.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:a,remove:o,update:l}}class Mo extends os{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-a;for(let x=0;x<c;x++){const S=x*f-s;g.push(S,-y,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,S=y+c*(m+1),C=y+1+c*(m+1),A=y+1+c*m;d.push(x,S,A),d.push(S,C,A)}this.setIndex(d),this.setAttribute("position",new Zr(g,3)),this.setAttribute("normal",new Zr(_,3)),this.setAttribute("uv",new Zr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.widthSegments,e.heightSegments)}}var PP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LP=`#ifdef USE_ALPHAHASH
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
#endif`,DP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NP=`#ifdef USE_AOMAP
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
#endif`,FP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,BP=`#ifdef USE_BATCHING
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
#endif`,zP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,VP=`#ifdef USE_IRIDESCENCE
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
#endif`,WP=`#ifdef USE_BUMPMAP
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
#endif`,$P=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,YP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jP=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZP=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,JP=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,QP=`#define PI 3.141592653589793
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
} // validated`,eL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tL=`vec3 transformedNormal = objectNormal;
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
#endif`,nL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,aL="gl_FragColor = linearToOutputTexel( gl_FragColor );",oL=`
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
}`,lL=`#ifdef USE_ENVMAP
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
#endif`,cL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,uL=`#ifdef USE_ENVMAP
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
#endif`,fL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hL=`#ifdef USE_ENVMAP
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
#endif`,dL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_L=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gL=`#ifdef USE_GRADIENTMAP
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
}`,vL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,xL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,SL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ML=`uniform bool receiveShadow;
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
#endif`,EL=`#ifdef USE_ENVMAP
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
#endif`,TL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RL=`PhysicalMaterial material;
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
#endif`,CL=`struct PhysicalMaterial {
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
}`,PL=`
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
#endif`,LL=`#if defined( RE_IndirectDiffuse )
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
#endif`,DL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,NL=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,FL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,GL=`#if defined( USE_POINTS_UV )
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
#endif`,kL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,HL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VL=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WL=`#ifdef USE_MORPHNORMALS
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
#endif`,$L=`#ifdef USE_MORPHTARGETS
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
#endif`,XL=`#ifdef USE_MORPHTARGETS
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
#endif`,qL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YL=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JL=`#ifdef USE_NORMALMAP
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
#endif`,QL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,f2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p2=`float getShadowMask() {
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
}`,m2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_2=`#ifdef USE_SKINNING
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
#endif`,g2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v2=`#ifdef USE_SKINNING
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
#endif`,x2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,E2=`#ifdef USE_TRANSMISSION
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
#endif`,T2=`#ifdef USE_TRANSMISSION
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
#endif`,b2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const C2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P2=`uniform sampler2D t2D;
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
}`,L2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,O2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U2=`#include <common>
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
}`,N2=`#if DEPTH_PACKING == 3200
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
}`,F2=`#define DISTANCE
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
}`,B2=`#define DISTANCE
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
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,k2=`uniform float scale;
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
}`,H2=`uniform vec3 diffuse;
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
}`,V2=`#include <common>
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
}`,W2=`uniform vec3 diffuse;
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
}`,$2=`#define LAMBERT
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
}`,X2=`#define LAMBERT
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
}`,q2=`#define MATCAP
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
}`,Y2=`#define MATCAP
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
}`,j2=`#define NORMAL
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
}`,K2=`#define NORMAL
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
}`,Z2=`#define PHONG
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
}`,J2=`#define PHONG
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
}`,Q2=`#define STANDARD
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
}`,eD=`#define STANDARD
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
}`,tD=`#define TOON
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
}`,nD=`#define TOON
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
}`,iD=`uniform float size;
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
}`,rD=`uniform vec3 diffuse;
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
}`,sD=`#include <common>
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
}`,aD=`uniform vec3 color;
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
}`,oD=`uniform float rotation;
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
}`,lD=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:PP,alphahash_pars_fragment:LP,alphamap_fragment:DP,alphamap_pars_fragment:IP,alphatest_fragment:OP,alphatest_pars_fragment:UP,aomap_fragment:NP,aomap_pars_fragment:FP,batching_pars_vertex:BP,batching_vertex:zP,begin_vertex:GP,beginnormal_vertex:kP,bsdfs:HP,iridescence_fragment:VP,bumpmap_pars_fragment:WP,clipping_planes_fragment:$P,clipping_planes_pars_fragment:XP,clipping_planes_pars_vertex:qP,clipping_planes_vertex:YP,color_fragment:jP,color_pars_fragment:KP,color_pars_vertex:ZP,color_vertex:JP,common:QP,cube_uv_reflection_fragment:eL,defaultnormal_vertex:tL,displacementmap_pars_vertex:nL,displacementmap_vertex:iL,emissivemap_fragment:rL,emissivemap_pars_fragment:sL,colorspace_fragment:aL,colorspace_pars_fragment:oL,envmap_fragment:lL,envmap_common_pars_fragment:cL,envmap_pars_fragment:uL,envmap_pars_vertex:fL,envmap_physical_pars_fragment:EL,envmap_vertex:hL,fog_vertex:dL,fog_pars_vertex:pL,fog_fragment:mL,fog_pars_fragment:_L,gradientmap_pars_fragment:gL,lightmap_fragment:vL,lightmap_pars_fragment:xL,lights_lambert_fragment:yL,lights_lambert_pars_fragment:SL,lights_pars_begin:ML,lights_toon_fragment:TL,lights_toon_pars_fragment:bL,lights_phong_fragment:AL,lights_phong_pars_fragment:wL,lights_physical_fragment:RL,lights_physical_pars_fragment:CL,lights_fragment_begin:PL,lights_fragment_maps:LL,lights_fragment_end:DL,logdepthbuf_fragment:IL,logdepthbuf_pars_fragment:OL,logdepthbuf_pars_vertex:UL,logdepthbuf_vertex:NL,map_fragment:FL,map_pars_fragment:BL,map_particle_fragment:zL,map_particle_pars_fragment:GL,metalnessmap_fragment:kL,metalnessmap_pars_fragment:HL,morphcolor_vertex:VL,morphnormal_vertex:WL,morphtarget_pars_vertex:$L,morphtarget_vertex:XL,normal_fragment_begin:qL,normal_fragment_maps:YL,normal_pars_fragment:jL,normal_pars_vertex:KL,normal_vertex:ZL,normalmap_pars_fragment:JL,clearcoat_normal_fragment_begin:QL,clearcoat_normal_fragment_maps:e2,clearcoat_pars_fragment:t2,iridescence_pars_fragment:n2,opaque_fragment:i2,packing:r2,premultiplied_alpha_fragment:s2,project_vertex:a2,dithering_fragment:o2,dithering_pars_fragment:l2,roughnessmap_fragment:c2,roughnessmap_pars_fragment:u2,shadowmap_pars_fragment:f2,shadowmap_pars_vertex:h2,shadowmap_vertex:d2,shadowmask_pars_fragment:p2,skinbase_vertex:m2,skinning_pars_vertex:_2,skinning_vertex:g2,skinnormal_vertex:v2,specularmap_fragment:x2,specularmap_pars_fragment:y2,tonemapping_fragment:S2,tonemapping_pars_fragment:M2,transmission_fragment:E2,transmission_pars_fragment:T2,uv_pars_fragment:b2,uv_pars_vertex:A2,uv_vertex:w2,worldpos_vertex:R2,background_vert:C2,background_frag:P2,backgroundCube_vert:L2,backgroundCube_frag:D2,cube_vert:I2,cube_frag:O2,depth_vert:U2,depth_frag:N2,distanceRGBA_vert:F2,distanceRGBA_frag:B2,equirect_vert:z2,equirect_frag:G2,linedashed_vert:k2,linedashed_frag:H2,meshbasic_vert:V2,meshbasic_frag:W2,meshlambert_vert:$2,meshlambert_frag:X2,meshmatcap_vert:q2,meshmatcap_frag:Y2,meshnormal_vert:j2,meshnormal_frag:K2,meshphong_vert:Z2,meshphong_frag:J2,meshphysical_vert:Q2,meshphysical_frag:eD,meshtoon_vert:tD,meshtoon_frag:nD,points_vert:iD,points_frag:rD,shadow_vert:sD,shadow_frag:aD,sprite_vert:oD,sprite_frag:lD},ce={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},xi={basic:{uniforms:un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:un([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:un([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:un([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ht(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:un([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:un([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:un([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:un([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:un([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:un([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:un([ce.common,ce.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:un([ce.lights,ce.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};xi.physical={uniforms:un([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const yl={r:0,b:0,g:0};function cD(i,e,t,n,r,s,a){const o=new ht(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let y=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Tc)?(u===void 0&&(u=new Ti(new So(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:sa(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ft.getTransfer(x.colorSpace)!==vt,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ti(new Mo(2,2),new ji({name:"BackgroundMaterial",uniforms:sa(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:yr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==vt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(yl,Y0(i)),n.buffers.color.setClear(yl.r,yl.g,yl.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function uD(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(L,G,F,$,X){let Y=!1;if(a){const R=_($,F,G);c!==R&&(c=R,d(c.object)),Y=m(L,$,F,X),Y&&y(L,$,F,X)}else{const R=G.wireframe===!0;(c.geometry!==$.id||c.program!==F.id||c.wireframe!==R)&&(c.geometry=$.id,c.program=F.id,c.wireframe=R,Y=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,D(L,G,F,$),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,G,F){const $=F.wireframe===!0;let X=o[L.id];X===void 0&&(X={},o[L.id]=X);let Y=X[G.id];Y===void 0&&(Y={},X[G.id]=Y);let R=Y[$];return R===void 0&&(R=p(h()),Y[$]=R),R}function p(L){const G=[],F=[],$=[];for(let X=0;X<r;X++)G[X]=0,F[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:F,attributeDivisors:$,object:L,attributes:{},index:null}}function m(L,G,F,$){const X=c.attributes,Y=G.attributes;let R=0;const K=F.getAttributes();for(const re in K)if(K[re].location>=0){const W=X[re];let Z=Y[re];if(Z===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;R++}return c.attributesNum!==R||c.index!==$}function y(L,G,F,$){const X={},Y=G.attributes;let R=0;const K=F.getAttributes();for(const re in K)if(K[re].location>=0){let W=Y[re];W===void 0&&(re==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),re==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));const Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),X[re]=Z,R++}c.attributes=X,c.attributesNum=R,c.index=$}function x(){const L=c.newAttributes;for(let G=0,F=L.length;G<F;G++)L[G]=0}function S(L){C(L,0)}function C(L,G){const F=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;F[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),X[L]!==G&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,G),X[L]=G)}function A(){const L=c.newAttributes,G=c.enabledAttributes;for(let F=0,$=G.length;F<$;F++)G[F]!==L[F]&&(i.disableVertexAttribArray(F),G[F]=0)}function E(L,G,F,$,X,Y,R){R===!0?i.vertexAttribIPointer(L,G,F,X,Y):i.vertexAttribPointer(L,G,F,$,X,Y)}function D(L,G,F,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=$.attributes,Y=F.getAttributes(),R=G.defaultAttributeValues;for(const K in Y){const re=Y[K];if(re.location>=0){let Ie=X[K];if(Ie===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ie=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ie=L.instanceColor)),Ie!==void 0){const W=Ie.normalized,Z=Ie.itemSize,ue=t.get(Ie);if(ue===void 0)continue;const me=ue.buffer,ye=ue.type,he=ue.bytesPerElement,Xe=n.isWebGL2===!0&&(ye===i.INT||ye===i.UNSIGNED_INT||Ie.gpuType===P0);if(Ie.isInterleavedBufferAttribute){const Le=Ie.data,N=Le.stride,Ge=Ie.offset;if(Le.isInstancedInterleavedBuffer){for(let pe=0;pe<re.locationSize;pe++)C(re.location+pe,Le.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let pe=0;pe<re.locationSize;pe++)S(re.location+pe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let pe=0;pe<re.locationSize;pe++)E(re.location+pe,Z/re.locationSize,ye,W,N*he,(Ge+Z/re.locationSize*pe)*he,Xe)}else{if(Ie.isInstancedBufferAttribute){for(let Le=0;Le<re.locationSize;Le++)C(re.location+Le,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Le=0;Le<re.locationSize;Le++)S(re.location+Le);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Le=0;Le<re.locationSize;Le++)E(re.location+Le,Z/re.locationSize,ye,W,Z*he,Z/re.locationSize*Le*he,Xe)}}else if(R!==void 0){const W=R[K];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(re.location,W);break;case 3:i.vertexAttrib3fv(re.location,W);break;case 4:i.vertexAttrib4fv(re.location,W);break;default:i.vertexAttrib1fv(re.location,W)}}}}A()}function U(){I();for(const L in o){const G=o[L];for(const F in G){const $=G[F];for(const X in $)g($[X].object),delete $[X];delete G[F]}delete o[L]}}function v(L){if(o[L.id]===void 0)return;const G=o[L.id];for(const F in G){const $=G[F];for(const X in $)g($[X].object),delete $[X];delete G[F]}delete o[L.id]}function w(L){for(const G in o){const F=o[G];if(F[L.id]===void 0)continue;const $=F[L.id];for(const X in $)g($[X].object),delete $[X];delete F[L.id]}}function I(){j(),u=!0,c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:I,resetDefaultState:j,dispose:U,releaseStatesOfGeometry:v,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:S,disableUnusedAttributes:A}}function fD(i,e,t,n){const r=n.isWebGL2;let s;function a(u){s=u}function o(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function hD(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,S=a||e.has("OES_texture_float"),C=x&&S,A=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:A}}function dD(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Ir,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let S=m.clippingState||null;l.value=S,S=u(g,h,x,d);for(let C=0;C!==x;++C)S[C]=t[C];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,S=d;x!==_;++x,S+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function pD(i){let e=new WeakMap;function t(a,o){return o===zf?a.mapping=na:o===Gf&&(a.mapping=ia),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===zf||o===Gf)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new AP(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class mD extends j0{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fs=4,h_=[.125,.215,.35,.446,.526,.582],Fr=20,Xu=new mD,d_=new ht;let qu=null,Yu=0,ju=0;const Or=(1+Math.sqrt(5))/2,Rs=1/Or,p_=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Or,Rs),new q(0,Or,-Rs),new q(Rs,0,Or),new q(-Rs,0,Or),new q(Or,Rs,0),new q(-Or,Rs,0)];class m_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=v_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qu,Yu,ju),e.scissorTest=!1,Sl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===na||e.mapping===ia?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qu=this._renderer.getRenderTarget(),Yu=this._renderer.getActiveCubeFace(),ju=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:lo,format:fi,colorSpace:Yi,depthBuffer:!1},r=__(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=__(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_D(s)),this._blurMaterial=gD(s,e,t)}return r}_compileMaterial(e){const t=new Ti(this._lodPlanes[0],e);this._renderer.compile(t,Xu)}_sceneToCubeUV(e,t,n,r){const o=new jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(d_),u.toneMapping=mr,u.autoClear=!1;const d=new $0({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Ti(new So,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(d_),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Sl(r,y*x,m>2?x:0,x,x),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===na||e.mapping===ia;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=v_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g_());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ti(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Sl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Xu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=p_[(r-1)%p_.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Ti(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Fr;p>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Fr}`);const m=[];let y=0;for(let E=0;E<Fr;++E){const D=E/_,U=Math.exp(-D*D/2);m.push(U),E===0?y+=U:E<p&&(y+=2*U)}for(let E=0;E<m.length;E++)m[E]=m[E]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const S=this._sizeLods[r],C=3*S*(r>x-Fs?r-x+Fs:0),A=4*(this._cubeSize-S);Sl(t,C,A,3*S,2*S),l.setRenderTarget(t),l.render(f,Xu)}}function _D(i){const e=[],t=[],n=[];let r=i;const s=i-Fs+1+h_.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Fs?l=h_[a-i+Fs-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),x=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let A=0;A<d;A++){const E=A%3*2/3-1,D=A>2?0:-1,U=[E,D,0,E+2/3,D,0,E+2/3,D+1,0,E,D,0,E+2/3,D+1,0,E,D+1,0];y.set(U,_*g*A),x.set(h,p*g*A);const v=[A,A,A,A,A,A];S.set(v,m*g*A)}const C=new os;C.setAttribute("position",new Ri(y,_)),C.setAttribute("uv",new Ri(x,p)),C.setAttribute("faceIndex",new Ri(S,m)),e.push(C),r>Fs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function __(i,e,t){const n=new ss(i,e,t);return n.texture.mapping=Tc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Sl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function gD(i,e,t){const n=new Float32Array(Fr),r=new q(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rd(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function g_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rd(),fragmentShader:`

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
		`,blending:pr,depthTest:!1,depthWrite:!1})}function v_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function rd(){return`

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
	`}function vD(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===zf||l===Gf,u=l===na||l===ia;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new m_(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new m_(i));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function xD(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function yD(i,e,t,n){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let x=0,S=y.length;x<S;x+=3){const C=y[x+0],A=y[x+1],E=y[x+2];h.push(C,A,A,E,E,C)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const C=x+0,A=x+1,E=x+2;h.push(C,A,A,E,E,C)}}else return;const p=new(z0(h)?q0:X0)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function SD(i,e,t,n){const r=n.isWebGL2;let s;function a(d){s=d}let o,l;function c(d){o=d.type,l=d.bytesPerElement}function u(d,g){i.drawElements(s,g,o,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,o,d*l,_),t.update(g,s,_)}function h(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,o,d,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function MD(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ED(i,e){return i[0]-e[0]}function TD(i,e){return Math.abs(e[1])-Math.abs(i[1])}function bD(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Yt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==_){let G=function(){j.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var d=G;p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],E=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let U=0;x===!0&&(U=1),S===!0&&(U=2),C===!0&&(U=3);let v=u.attributes.position.count*U,w=1;v>e.maxTextureSize&&(w=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const I=new Float32Array(v*w*4*_),j=new H0(I,v,w,_);j.type=ki,j.needsUpdate=!0;const L=U*4;for(let F=0;F<_;F++){const $=A[F],X=E[F],Y=D[F],R=v*w*4*F;for(let K=0;K<$.count;K++){const re=K*L;x===!0&&(a.fromBufferAttribute($,K),I[R+re+0]=a.x,I[R+re+1]=a.y,I[R+re+2]=a.z,I[R+re+3]=0),S===!0&&(a.fromBufferAttribute(X,K),I[R+re+4]=a.x,I[R+re+5]=a.y,I[R+re+6]=a.z,I[R+re+7]=0),C===!0&&(a.fromBufferAttribute(Y,K),I[R+re+8]=a.x,I[R+re+9]=a.y,I[R+re+10]=a.z,I[R+re+11]=Y.itemSize===4?a.w:1)}}p={count:_,texture:j,size:new ot(v,w)},s.set(u,p),u.addEventListener("dispose",G)}let m=0;for(let x=0;x<h.length;x++)m+=h[x];const y=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let S=0;S<g;S++)_[S]=[S,0];n[u.id]=_}for(let S=0;S<g;S++){const C=_[S];C[0]=S,C[1]=h[S]}_.sort(TD);for(let S=0;S<8;S++)S<g&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(ED);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let y=0;for(let S=0;S<8;S++){const C=o[S],A=C[0],E=C[1];A!==Number.MAX_SAFE_INTEGER&&E?(p&&u.getAttribute("morphTarget"+S)!==p[A]&&u.setAttribute("morphTarget"+S,p[A]),m&&u.getAttribute("morphNormal"+S)!==m[A]&&u.setAttribute("morphNormal"+S,m[A]),r[S]=E,y+=E):(p&&u.hasAttribute("morphTarget"+S)===!0&&u.deleteAttribute("morphTarget"+S),m&&u.hasAttribute("morphNormal"+S)===!0&&u.deleteAttribute("morphNormal"+S),r[S]=0)}const x=u.morphTargetsRelative?1:1-y;f.getUniforms().setValue(i,"morphTargetBaseInfluence",x),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function AD(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Q0 extends wn{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:jr,u!==jr&&u!==ra)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===jr&&(n=ur),n===void 0&&u===ra&&(n=Yr),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:pn,this.minFilter=l!==void 0?l:pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ex=new wn,tx=new Q0(1,1);tx.compareFunction=B0;const nx=new H0,ix=new cP,rx=new K0,x_=[],y_=[],S_=new Float32Array(16),M_=new Float32Array(9),E_=new Float32Array(4);function pa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=x_[r];if(s===void 0&&(s=new Float32Array(r),x_[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Rc(i,e){let t=y_[e];t===void 0&&(t=new Int32Array(e),y_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function RD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function CD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function PD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function LD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;E_.set(n),i.uniformMatrix2fv(this.addr,!1,E_),Gt(t,n)}}function DD(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;M_.set(n),i.uniformMatrix3fv(this.addr,!1,M_),Gt(t,n)}}function ID(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(zt(t,n))return;S_.set(n),i.uniformMatrix4fv(this.addr,!1,S_),Gt(t,n)}}function OD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function UD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function ND(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function FD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function BD(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function GD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function kD(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function HD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?tx:ex;t.setTexture2D(e||s,r)}function VD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ix,r)}function WD(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rx,r)}function $D(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nx,r)}function XD(i){switch(i){case 5126:return wD;case 35664:return RD;case 35665:return CD;case 35666:return PD;case 35674:return LD;case 35675:return DD;case 35676:return ID;case 5124:case 35670:return OD;case 35667:case 35671:return UD;case 35668:case 35672:return ND;case 35669:case 35673:return FD;case 5125:return BD;case 36294:return zD;case 36295:return GD;case 36296:return kD;case 35678:case 36198:case 36298:case 36306:case 35682:return HD;case 35679:case 36299:case 36307:return VD;case 35680:case 36300:case 36308:case 36293:return WD;case 36289:case 36303:case 36311:case 36292:return $D}}function qD(i,e){i.uniform1fv(this.addr,e)}function YD(i,e){const t=pa(e,this.size,2);i.uniform2fv(this.addr,t)}function jD(i,e){const t=pa(e,this.size,3);i.uniform3fv(this.addr,t)}function KD(i,e){const t=pa(e,this.size,4);i.uniform4fv(this.addr,t)}function ZD(i,e){const t=pa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function JD(i,e){const t=pa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function QD(i,e){const t=pa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eI(i,e){i.uniform1iv(this.addr,e)}function tI(i,e){i.uniform2iv(this.addr,e)}function nI(i,e){i.uniform3iv(this.addr,e)}function iI(i,e){i.uniform4iv(this.addr,e)}function rI(i,e){i.uniform1uiv(this.addr,e)}function sI(i,e){i.uniform2uiv(this.addr,e)}function aI(i,e){i.uniform3uiv(this.addr,e)}function oI(i,e){i.uniform4uiv(this.addr,e)}function lI(i,e,t){const n=this.cache,r=e.length,s=Rc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ex,s[a])}function cI(i,e,t){const n=this.cache,r=e.length,s=Rc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ix,s[a])}function uI(i,e,t){const n=this.cache,r=e.length,s=Rc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rx,s[a])}function fI(i,e,t){const n=this.cache,r=e.length,s=Rc(t,r);zt(n,s)||(i.uniform1iv(this.addr,s),Gt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nx,s[a])}function hI(i){switch(i){case 5126:return qD;case 35664:return YD;case 35665:return jD;case 35666:return KD;case 35674:return ZD;case 35675:return JD;case 35676:return QD;case 5124:case 35670:return eI;case 35667:case 35671:return tI;case 35668:case 35672:return nI;case 35669:case 35673:return iI;case 5125:return rI;case 36294:return sI;case 36295:return aI;case 36296:return oI;case 35678:case 36198:case 36298:case 36306:case 35682:return lI;case 35679:case 36299:case 36307:return cI;case 35680:case 36300:case 36308:case 36293:return uI;case 36289:case 36303:case 36311:case 36292:return fI}}class dI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=XD(t.type)}}class pI{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hI(t.type)}}class mI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ku=/(\w+)(\])?(\[|\.)?/g;function T_(i,e){i.seq.push(e),i.map[e.id]=e}function _I(i,e,t){const n=i.name,r=n.length;for(Ku.lastIndex=0;;){const s=Ku.exec(n),a=Ku.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){T_(t,c===void 0?new dI(o,i,e):new pI(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new mI(o),T_(t,f)),t=f}}}class zl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_I(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function b_(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gI=37297;let vI=0;function xI(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function yI(i){const e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(i);let n;switch(e===t?n="":e===oc&&t===ac?n="LinearDisplayP3ToLinearSRGB":e===ac&&t===oc&&(n="LinearSRGBToLinearDisplayP3"),i){case Yi:case bc:return[n,"LinearTransferOETF"];case Xt:case td:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function A_(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xI(i.getShaderSource(e),a)}else return r}function SI(i,e){const t=yI(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function MI(i,e){let t;switch(e){case DC:t="Linear";break;case IC:t="Reinhard";break;case OC:t="OptimizedCineon";break;case UC:t="ACESFilmic";break;case FC:t="AgX";break;case NC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function EI(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Bs).join(`
`)}function TI(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function bI(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AI(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bs(i){return i!==""}function w_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function R_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wI=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xf(i){return i.replace(wI,CI)}const RI=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function CI(i,e){let t=qe[e];if(t===void 0){const n=RI.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xf(t)}const PI=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C_(i){return i.replace(PI,LI)}function LI(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function P_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function DI(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===w0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===aC?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ni&&(e="SHADOWMAP_TYPE_VSM"),e}function II(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case na:case ia:e="ENVMAP_TYPE_CUBE";break;case Tc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OI(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ia:e="ENVMAP_MODE_REFRACTION";break}return e}function UI(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case R0:e="ENVMAP_BLENDING_MULTIPLY";break;case PC:e="ENVMAP_BLENDING_MIX";break;case LC:e="ENVMAP_BLENDING_ADD";break}return e}function NI(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function FI(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=DI(t),c=II(t),u=OI(t),f=UI(t),h=NI(t),d=t.isWebGL2?"":EI(t),g=TI(t),_=bI(s),p=r.createProgram();let m,y,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),m.length>0&&(m+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Bs).join(`
`),y.length>0&&(y+=`
`)):(m=[P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),y=[d,P_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?qe.tonemapping_pars_fragment:"",t.toneMapping!==mr?MI("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,SI("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bs).join(`
`)),a=Xf(a),a=w_(a,t),a=R_(a,t),o=Xf(o),o=w_(o,t),o=R_(o,t),a=C_(a),o=C_(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=x+m+a,C=x+y+o,A=b_(r,r.VERTEX_SHADER,S),E=b_(r,r.FRAGMENT_SHADER,C);r.attachShader(p,A),r.attachShader(p,E),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(I){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(A).trim(),G=r.getShaderInfoLog(E).trim();let F=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,A,E);else{const X=A_(r,A,"vertex"),Y=A_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+X+`
`+Y)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||G==="")&&($=!1);$&&(I.diagnostics={runnable:F,programLog:j,vertexShader:{log:L,prefix:m},fragmentShader:{log:G,prefix:y}})}r.deleteShader(A),r.deleteShader(E),U=new zl(r,p),v=AI(r,p)}let U;this.getUniforms=function(){return U===void 0&&D(this),U};let v;this.getAttributes=function(){return v===void 0&&D(this),v};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(p,gI)),w},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vI++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=E,this}let BI=0;class zI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GI(e),t.set(e,n)),n}}class GI{constructor(e){this.id=BI++,this.code=e,this.usedTimes=0}}function kI(i,e,t,n,r,s,a){const o=new id,l=new zI,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,w,I,j,L){const G=j.fog,F=L.geometry,$=v.isMeshStandardMaterial?j.environment:null,X=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),Y=X&&X.mapping===Tc?X.image.height:null,R=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,re=K!==void 0?K.length:0;let Ie=0;F.morphAttributes.position!==void 0&&(Ie=1),F.morphAttributes.normal!==void 0&&(Ie=2),F.morphAttributes.color!==void 0&&(Ie=3);let W,Z,ue,me;if(R){const at=xi[R];W=at.vertexShader,Z=at.fragmentShader}else W=v.vertexShader,Z=v.fragmentShader,l.update(v),ue=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const ye=i.getRenderTarget(),he=L.isInstancedMesh===!0,Xe=L.isBatchedMesh===!0,Le=!!v.map,N=!!v.matcap,Ge=!!X,pe=!!v.aoMap,Re=!!v.lightMap,ge=!!v.bumpMap,H=!!v.normalMap,Oe=!!v.displacementMap,b=!!v.emissiveMap,M=!!v.metalnessMap,B=!!v.roughnessMap,ee=v.anisotropy>0,Q=v.clearcoat>0,te=v.iridescence>0,fe=v.sheen>0,le=v.transmission>0,oe=ee&&!!v.anisotropyMap,Ae=Q&&!!v.clearcoatMap,ze=Q&&!!v.clearcoatNormalMap,J=Q&&!!v.clearcoatRoughnessMap,rt=te&&!!v.iridescenceMap,Ce=te&&!!v.iridescenceThicknessMap,ke=fe&&!!v.sheenColorMap,Te=fe&&!!v.sheenRoughnessMap,_e=!!v.specularMap,He=!!v.specularColorMap,Ke=!!v.specularIntensityMap,st=le&&!!v.transmissionMap,de=le&&!!v.thicknessMap,tt=!!v.gradientMap,P=!!v.alphaMap,ne=v.alphaTest>0,ie=!!v.alphaHash,ve=!!v.extensions;let De=mr;v.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(De=i.toneMapping);const Ye={isWebGL2:f,shaderID:R,shaderType:v.type,shaderName:v.name,vertexShader:W,fragmentShader:Z,defines:v.defines,customVertexShaderID:ue,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Xe,instancing:he,instancingColor:he&&L.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Yi,alphaToCoverage:!!v.alphaToCoverage,map:Le,matcap:N,envMap:Ge,envMapMode:Ge&&X.mapping,envMapCubeUVHeight:Y,aoMap:pe,lightMap:Re,bumpMap:ge,normalMap:H,displacementMap:d&&Oe,emissiveMap:b,normalMapObjectSpace:H&&v.normalMapType===jC,normalMapTangentSpace:H&&v.normalMapType===YC,metalnessMap:M,roughnessMap:B,anisotropy:ee,anisotropyMap:oe,clearcoat:Q,clearcoatMap:Ae,clearcoatNormalMap:ze,clearcoatRoughnessMap:J,iridescence:te,iridescenceMap:rt,iridescenceThicknessMap:Ce,sheen:fe,sheenColorMap:ke,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:He,specularIntensityMap:Ke,transmission:le,transmissionMap:st,thicknessMap:de,gradientMap:tt,opaque:v.transparent===!1&&v.blending===Xs&&v.alphaToCoverage===!1,alphaMap:P,alphaTest:ne,alphaHash:ie,combine:v.combine,mapUv:Le&&p(v.map.channel),aoMapUv:pe&&p(v.aoMap.channel),lightMapUv:Re&&p(v.lightMap.channel),bumpMapUv:ge&&p(v.bumpMap.channel),normalMapUv:H&&p(v.normalMap.channel),displacementMapUv:Oe&&p(v.displacementMap.channel),emissiveMapUv:b&&p(v.emissiveMap.channel),metalnessMapUv:M&&p(v.metalnessMap.channel),roughnessMapUv:B&&p(v.roughnessMap.channel),anisotropyMapUv:oe&&p(v.anisotropyMap.channel),clearcoatMapUv:Ae&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:ze&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(v.sheenRoughnessMap.channel),specularMapUv:_e&&p(v.specularMap.channel),specularColorMapUv:He&&p(v.specularColorMap.channel),specularIntensityMapUv:Ke&&p(v.specularIntensityMap.channel),transmissionMapUv:st&&p(v.transmissionMap.channel),thicknessMapUv:de&&p(v.thicknessMap.channel),alphaMapUv:P&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(H||ee),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Le||P),fog:!!G,useFog:v.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Le&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Gi,flipSided:v.side===An,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:ve&&v.extensions.derivatives===!0,extensionFragDepth:ve&&v.extensions.fragDepth===!0,extensionDrawBuffers:ve&&v.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&v.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ve&&v.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function y(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)w.push(I),w.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(w,v),S(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function S(v,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){const w=_[v.type];let I;if(w){const j=xi[w];I=MP.clone(j.uniforms)}else I=v.uniforms;return I}function A(v,w){let I;for(let j=0,L=u.length;j<L;j++){const G=u[j];if(G.cacheKey===w){I=G,++I.usedTimes;break}}return I===void 0&&(I=new FI(i,w,v,s),u.push(I)),I}function E(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),v.destroy()}}function D(v){l.remove(v)}function U(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:C,acquireProgram:A,releaseProgram:E,releaseShaderCache:D,programs:u,dispose:U}}function HI(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function VI(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function L_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function D_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(f,h,d,g,_,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function o(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||VI),n.length>1&&n.sort(h||L_),r.length>1&&r.sort(h||L_)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function WI(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new D_,i.set(n,[a])):r>=s.length?(a=new D_,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function $I(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ht};break;case"SpotLight":t={position:new q,direction:new q,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function XI(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qI=0;function YI(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function jI(i,e){const t=new $I,n=XI(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,a=new jt,o=new jt;function l(u,f){let h=0,d=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let _=0,p=0,m=0,y=0,x=0,S=0,C=0,A=0,E=0,D=0,U=0;u.sort(YI);const v=f===!0?Math.PI:1;for(let I=0,j=u.length;I<j;I++){const L=u[I],G=L.color,F=L.intensity,$=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=G.r*F*v,d+=G.g*F*v,g+=G.b*F*v;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],F);U++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*v),L.castShadow){const R=L.shadow,K=n.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=L.shadow.matrix,S++}r.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(G).multiplyScalar(F*v),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[m]=Y;const R=L.shadow;if(L.map&&(r.spotLightMap[E]=L.map,E++,R.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[m]=R.matrix,L.castShadow){const K=n.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,r.spotShadow[m]=K,r.spotShadowMap[m]=X,A++}m++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(G).multiplyScalar(F),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*v),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const R=L.shadow,K=n.get(L);K.shadowBias=R.bias,K.shadowNormalBias=R.normalBias,K.shadowRadius=R.radius,K.shadowMapSize=R.mapSize,K.shadowCameraNear=R.camera.near,K.shadowCameraFar=R.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=L.shadow.matrix,C++}r.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(F*v),Y.groundColor.copy(L.groundColor).multiplyScalar(F*v),r.hemi[x]=Y,x++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==p||w.spotLength!==m||w.rectAreaLength!==y||w.hemiLength!==x||w.numDirectionalShadows!==S||w.numPointShadows!==C||w.numSpotShadows!==A||w.numSpotMaps!==E||w.numLightProbes!==U)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=y,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=A+E-D,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=U,w.directionalLength=_,w.pointLength=p,w.spotLength=m,w.rectAreaLength=y,w.hemiLength=x,w.numDirectionalShadows=S,w.numPointShadows=C,w.numSpotShadows=A,w.numSpotMaps=E,w.numLightProbes=U,r.version=qI++)}function c(u,f){let h=0,d=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const S=u[y];if(S.isDirectionalLight){const C=r.directional[h];C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),h++}else if(S.isSpotLight){const C=r.spot[g];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),C.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const C=r.rectArea[_];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),o.identity(),a.copy(S.matrixWorld),a.premultiply(m),o.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const C=r.point[d];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const C=r.hemi[p];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function I_(i,e){const t=new jI(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(f){n.push(f)}function o(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function KI(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new I_(i,e),t.set(s,[l])):a>=o.length?(l=new I_(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class ZI extends wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=XC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class JI extends wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const QI=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eO=`uniform sampler2D shadow_pass;
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
}`;function tO(i,e,t){let n=new Z0;const r=new ot,s=new ot,a=new Yt,o=new ZI({depthPacking:qC}),l=new JI,c={},u=t.maxTextureSize,f={[yr]:An,[An]:yr,[Gi]:Gi},h=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:QI,fragmentShader:eO}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new os;g.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ti(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=w0;let m=this.type;this.render=function(A,E,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const U=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),I=i.state;I.setBlending(pr),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const j=m!==Ni&&this.type===Ni,L=m===Ni&&this.type!==Ni;for(let G=0,F=A.length;G<F;G++){const $=A[G],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||j===!0||L===!0){const K=this.type!==Ni?{minFilter:pn,magFilter:pn}:{};X.map!==null&&X.map.dispose(),X.map=new ss(r.x,r.y,K),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const R=X.getViewportCount();for(let K=0;K<R;K++){const re=X.getViewport(K);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),I.viewport(a),X.updateMatrices($,K),n=X.getFrustum(),S(E,D,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Ni&&y(X,D),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(U,v,w)};function y(A,E){const D=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ss(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(E,null,D,h,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(E,null,D,d,_,null)}function x(A,E,D,U){let v=null;const w=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)v=w;else if(v=D.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const I=v.uuid,j=E.uuid;let L=c[I];L===void 0&&(L={},c[I]=L);let G=L[j];G===void 0&&(G=v.clone(),L[j]=G,E.addEventListener("dispose",C)),v=G}if(v.visible=E.visible,v.wireframe=E.wireframe,U===Ni?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=i.properties.get(v);I.light=D}return v}function S(A,E,D,U,v){if(A.visible===!1)return;if(A.layers.test(E.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===Ni)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const j=e.update(A),L=A.material;if(Array.isArray(L)){const G=j.groups;for(let F=0,$=G.length;F<$;F++){const X=G[F],Y=L[X.materialIndex];if(Y&&Y.visible){const R=x(A,Y,U,v);A.onBeforeShadow(i,A,E,D,j,R,X),i.renderBufferDirect(D,null,j,R,A,X),A.onAfterShadow(i,A,E,D,j,R,X)}}}else if(L.visible){const G=x(A,L,U,v);A.onBeforeShadow(i,A,E,D,j,G,null),i.renderBufferDirect(D,null,j,G,A,null),A.onAfterShadow(i,A,E,D,j,G,null)}}const I=A.children;for(let j=0,L=I.length;j<L;j++)S(I[j],E,D,U,v)}function C(A){A.target.removeEventListener("dispose",C);for(const D in c){const U=c[D],v=A.target.uuid;v in U&&(U[v].dispose(),delete U[v])}}}function nO(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const ne=new Yt;let ie=null;const ve=new Yt(0,0,0,0);return{setMask:function(De){ie!==De&&!P&&(i.colorMask(De,De,De,De),ie=De)},setLocked:function(De){P=De},setClear:function(De,Ye,at,be,Me){Me===!0&&(De*=be,Ye*=be,at*=be),ne.set(De,Ye,at,be),ve.equals(ne)===!1&&(i.clearColor(De,Ye,at,be),ve.copy(ne))},reset:function(){P=!1,ie=null,ve.set(-1,0,0,0)}}}function s(){let P=!1,ne=null,ie=null,ve=null;return{setTest:function(De){De?he(i.DEPTH_TEST):Xe(i.DEPTH_TEST)},setMask:function(De){ne!==De&&!P&&(i.depthMask(De),ne=De)},setFunc:function(De){if(ie!==De){switch(De){case EC:i.depthFunc(i.NEVER);break;case TC:i.depthFunc(i.ALWAYS);break;case bC:i.depthFunc(i.LESS);break;case rc:i.depthFunc(i.LEQUAL);break;case AC:i.depthFunc(i.EQUAL);break;case wC:i.depthFunc(i.GEQUAL);break;case RC:i.depthFunc(i.GREATER);break;case CC:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=De}},setLocked:function(De){P=De},setClear:function(De){ve!==De&&(i.clearDepth(De),ve=De)},reset:function(){P=!1,ne=null,ie=null,ve=null}}}function a(){let P=!1,ne=null,ie=null,ve=null,De=null,Ye=null,at=null,be=null,Me=null;return{setTest:function(Pe){P||(Pe?he(i.STENCIL_TEST):Xe(i.STENCIL_TEST))},setMask:function(Pe){ne!==Pe&&!P&&(i.stencilMask(Pe),ne=Pe)},setFunc:function(Pe,se,Ne){(ie!==Pe||ve!==se||De!==Ne)&&(i.stencilFunc(Pe,se,Ne),ie=Pe,ve=se,De=Ne)},setOp:function(Pe,se,Ne){(Ye!==Pe||at!==se||be!==Ne)&&(i.stencilOp(Pe,se,Ne),Ye=Pe,at=se,be=Ne)},setLocked:function(Pe){P=Pe},setClear:function(Pe){Me!==Pe&&(i.clearStencil(Pe),Me=Pe)},reset:function(){P=!1,ne=null,ie=null,ve=null,De=null,Ye=null,at=null,be=null,Me=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,S=null,C=null,A=null,E=null,D=null,U=new ht(0,0,0),v=0,w=!1,I=null,j=null,L=null,G=null,F=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const R=i.getParameter(i.VERSION);R.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(R)[1]),X=Y>=1):R.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(R)[1]),X=Y>=2);let K=null,re={};const Ie=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),Z=new Yt().fromArray(Ie),ue=new Yt().fromArray(W);function me(P,ne,ie,ve){const De=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(P,Ye),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<ie;at++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ne,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ne+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return Ye}const ye={};ye[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(i.DEPTH_TEST),l.setFunc(rc),Oe(!1),b(hm),he(i.CULL_FACE),ge(pr);function he(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function Xe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Le(P,ne){return d[P]!==ne?(i.bindFramebuffer(P,ne),d[P]=ne,n&&(P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne)),!0):!1}function N(P,ne){let ie=_,ve=!1;if(P)if(ie=g.get(ne),ie===void 0&&(ie=[],g.set(ne,ie)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(ie.length!==De.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,at=De.length;Ye<at;Ye++)ie[Ye]=i.COLOR_ATTACHMENT0+Ye;ie.length=De.length,ve=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,ve=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function Ge(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const pe={[Nr]:i.FUNC_ADD,[lC]:i.FUNC_SUBTRACT,[cC]:i.FUNC_REVERSE_SUBTRACT};if(n)pe[_m]=i.MIN,pe[gm]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(pe[_m]=P.MIN_EXT,pe[gm]=P.MAX_EXT)}const Re={[uC]:i.ZERO,[fC]:i.ONE,[hC]:i.SRC_COLOR,[Ff]:i.SRC_ALPHA,[vC]:i.SRC_ALPHA_SATURATE,[_C]:i.DST_COLOR,[pC]:i.DST_ALPHA,[dC]:i.ONE_MINUS_SRC_COLOR,[Bf]:i.ONE_MINUS_SRC_ALPHA,[gC]:i.ONE_MINUS_DST_COLOR,[mC]:i.ONE_MINUS_DST_ALPHA,[xC]:i.CONSTANT_COLOR,[yC]:i.ONE_MINUS_CONSTANT_COLOR,[SC]:i.CONSTANT_ALPHA,[MC]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ne,ie,ve,De,Ye,at,be,Me,Pe){if(P===pr){m===!0&&(Xe(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),P!==oC){if(P!==y||Pe!==w){if((x!==Nr||A!==Nr)&&(i.blendEquation(i.FUNC_ADD),x=Nr,A=Nr),Pe)switch(P){case Xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dm:i.blendFunc(i.ONE,i.ONE);break;case pm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,C=null,E=null,D=null,U.set(0,0,0),v=0,y=P,w=Pe}return}De=De||ne,Ye=Ye||ie,at=at||ve,(ne!==x||De!==A)&&(i.blendEquationSeparate(pe[ne],pe[De]),x=ne,A=De),(ie!==S||ve!==C||Ye!==E||at!==D)&&(i.blendFuncSeparate(Re[ie],Re[ve],Re[Ye],Re[at]),S=ie,C=ve,E=Ye,D=at),(be.equals(U)===!1||Me!==v)&&(i.blendColor(be.r,be.g,be.b,Me),U.copy(be),v=Me),y=P,w=!1}function H(P,ne){P.side===Gi?Xe(i.CULL_FACE):he(i.CULL_FACE);let ie=P.side===An;ne&&(ie=!ie),Oe(ie),P.blending===Xs&&P.transparent===!1?ge(pr):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),o.setMask(P.colorWrite);const ve=P.stencilWrite;c.setTest(ve),ve&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),B(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):Xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){I!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),I=P)}function b(P){P!==rC?(he(i.CULL_FACE),P!==j&&(P===hm?i.cullFace(i.BACK):P===sC?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Xe(i.CULL_FACE),j=P}function M(P){P!==L&&(X&&i.lineWidth(P),L=P)}function B(P,ne,ie){P?(he(i.POLYGON_OFFSET_FILL),(G!==ne||F!==ie)&&(i.polygonOffset(ne,ie),G=ne,F=ie)):Xe(i.POLYGON_OFFSET_FILL)}function ee(P){P?he(i.SCISSOR_TEST):Xe(i.SCISSOR_TEST)}function Q(P){P===void 0&&(P=i.TEXTURE0+$-1),K!==P&&(i.activeTexture(P),K=P)}function te(P,ne,ie){ie===void 0&&(K===null?ie=i.TEXTURE0+$-1:ie=K);let ve=re[ie];ve===void 0&&(ve={type:void 0,texture:void 0},re[ie]=ve),(ve.type!==P||ve.texture!==ne)&&(K!==ie&&(i.activeTexture(ie),K=ie),i.bindTexture(P,ne||ye[P]),ve.type=P,ve.texture=ne)}function fe(){const P=re[K];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function le(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function oe(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ae(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ke(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function Ke(P){ue.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ue.copy(P))}function st(P,ne){let ie=f.get(ne);ie===void 0&&(ie=new WeakMap,f.set(ne,ie));let ve=ie.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(ne,P.name),ie.set(P,ve))}function de(P,ne){const ve=f.get(ne).get(P);u.get(ne)!==ve&&(i.uniformBlockBinding(ne,ve,P.__bindingPointIndex),u.set(ne,ve))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,re={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,x=null,S=null,C=null,A=null,E=null,D=null,U=new ht(0,0,0),v=0,w=!1,I=null,j=null,L=null,G=null,F=null,Z.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:he,disable:Xe,bindFramebuffer:Le,drawBuffers:N,useProgram:Ge,setBlending:ge,setMaterial:H,setFlipSided:Oe,setCullFace:b,setLineWidth:M,setPolygonOffset:B,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:fe,compressedTexImage2D:le,compressedTexImage3D:oe,texImage2D:Te,texImage3D:_e,updateUBOMapping:st,uniformBlockBinding:de,texStorage2D:Ce,texStorage3D:ke,texSubImage2D:Ae,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:rt,scissor:He,viewport:Ke,reset:tt}}function iO(i,e,t,n,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,M){return d?new OffscreenCanvas(b,M):cc("canvas")}function _(b,M,B,ee){let Q=1;if((b.width>ee||b.height>ee)&&(Q=ee/Math.max(b.width,b.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const te=M?$f:Math.floor,fe=te(Q*b.width),le=te(Q*b.height);f===void 0&&(f=g(fe,le));const oe=B?g(fe,le):f;return oe.width=fe,oe.height=le,oe.getContext("2d").drawImage(b,0,0,fe,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+le+")."),oe}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return qm(b.width)&&qm(b.height)}function m(b){return o?!1:b.wrapS!==ui||b.wrapT!==ui||b.minFilter!==pn&&b.minFilter!==yn}function y(b,M){return b.generateMipmaps&&M&&b.minFilter!==pn&&b.minFilter!==yn}function x(b){i.generateMipmap(b)}function S(b,M,B,ee,Q=!1){if(o===!1)return M;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=M;if(M===i.RED&&(B===i.FLOAT&&(te=i.R32F),B===i.HALF_FLOAT&&(te=i.R16F),B===i.UNSIGNED_BYTE&&(te=i.R8)),M===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(te=i.R8UI),B===i.UNSIGNED_SHORT&&(te=i.R16UI),B===i.UNSIGNED_INT&&(te=i.R32UI),B===i.BYTE&&(te=i.R8I),B===i.SHORT&&(te=i.R16I),B===i.INT&&(te=i.R32I)),M===i.RG&&(B===i.FLOAT&&(te=i.RG32F),B===i.HALF_FLOAT&&(te=i.RG16F),B===i.UNSIGNED_BYTE&&(te=i.RG8)),M===i.RGBA){const fe=Q?sc:ft.getTransfer(ee);B===i.FLOAT&&(te=i.RGBA32F),B===i.HALF_FLOAT&&(te=i.RGBA16F),B===i.UNSIGNED_BYTE&&(te=fe===vt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function C(b,M,B){return y(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==pn&&b.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function A(b){return b===pn||b===vm||b===wa?i.NEAREST:i.LINEAR}function E(b){const M=b.target;M.removeEventListener("dispose",E),U(M),M.isVideoTexture&&u.delete(M)}function D(b){const M=b.target;M.removeEventListener("dispose",D),w(M)}function U(b){const M=n.get(b);if(M.__webglInit===void 0)return;const B=b.source,ee=h.get(B);if(ee){const Q=ee[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&v(b),Object.keys(ee).length===0&&h.delete(B)}n.remove(b)}function v(b){const M=n.get(b);i.deleteTexture(M.__webglTexture);const B=b.source,ee=h.get(B);delete ee[M.__cacheKey],a.memory.textures--}function w(b){const M=b.texture,B=n.get(b),ee=n.get(M);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(B.__webglFramebuffer[Q]))for(let te=0;te<B.__webglFramebuffer[Q].length;te++)i.deleteFramebuffer(B.__webglFramebuffer[Q][te]);else i.deleteFramebuffer(B.__webglFramebuffer[Q]);B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer[Q])}else{if(Array.isArray(B.__webglFramebuffer))for(let Q=0;Q<B.__webglFramebuffer.length;Q++)i.deleteFramebuffer(B.__webglFramebuffer[Q]);else i.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&i.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&i.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let Q=0;Q<B.__webglColorRenderbuffer.length;Q++)B.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(B.__webglColorRenderbuffer[Q]);B.__webglDepthRenderbuffer&&i.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,te=M.length;Q<te;Q++){const fe=n.get(M[Q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),a.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(b)}let I=0;function j(){I=0}function L(){const b=I;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),I+=1,b}function G(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.wrapR||0),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.colorSpace),M.join()}function F(b,M){const B=n.get(b);if(b.isVideoTexture&&H(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(B,b,M);return}}t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+M)}function $(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+M)}function X(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){Z(B,b,M);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+M)}function Y(b,M){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ue(B,b,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+M)}const R={[kf]:i.REPEAT,[ui]:i.CLAMP_TO_EDGE,[Hf]:i.MIRRORED_REPEAT},K={[pn]:i.NEAREST,[vm]:i.NEAREST_MIPMAP_NEAREST,[wa]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[Su]:i.LINEAR_MIPMAP_NEAREST,[Gr]:i.LINEAR_MIPMAP_LINEAR},re={[KC]:i.NEVER,[nP]:i.ALWAYS,[ZC]:i.LESS,[B0]:i.LEQUAL,[JC]:i.EQUAL,[tP]:i.GEQUAL,[QC]:i.GREATER,[eP]:i.NOTEQUAL};function Ie(b,M,B){if(M.type===ki&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===Su||M.magFilter===wa||M.magFilter===Gr||M.minFilter===yn||M.minFilter===Su||M.minFilter===wa||M.minFilter===Gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),B?(i.texParameteri(b,i.TEXTURE_WRAP_S,R[M.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,R[M.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,R[M.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,K[M.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,K[M.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==ui||M.wrapT!==ui)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,A(M.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,A(M.minFilter)),M.minFilter!==pn&&M.minFilter!==yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===pn||M.minFilter!==wa&&M.minFilter!==Gr||M.type===ki&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===lo&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function W(b,M){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",E));const ee=M.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=G(M);if(te!==b.__cacheKey){Q[te]===void 0&&(Q[te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[te].usedTimes++;const fe=Q[b.__cacheKey];fe!==void 0&&(Q[b.__cacheKey].usedTimes--,fe.usedTimes===0&&v(M)),b.__cacheKey=te,b.__webglTexture=Q[te].texture}return B}function Z(b,M,B){let ee=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ee=i.TEXTURE_3D);const Q=W(b,M),te=M.source;t.bindTexture(ee,b.__webglTexture,i.TEXTURE0+B);const fe=n.get(te);if(te.version!==fe.__version||Q===!0){t.activeTexture(i.TEXTURE0+B);const le=ft.getPrimaries(ft.workingColorSpace),oe=M.colorSpace===Kn?null:ft.getPrimaries(M.colorSpace),Ae=M.colorSpace===Kn||le===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const ze=m(M)&&p(M.image)===!1;let J=_(M.image,ze,!1,r.maxTextureSize);J=Oe(M,J);const rt=p(J)||o,Ce=s.convert(M.format,M.colorSpace);let ke=s.convert(M.type),Te=S(M.internalFormat,Ce,ke,M.colorSpace,M.isVideoTexture);Ie(ee,M,rt);let _e;const He=M.mipmaps,Ke=o&&M.isVideoTexture!==!0&&Te!==N0,st=fe.__version===void 0||Q===!0,de=te.dataReady,tt=C(M,J,rt);if(M.isDepthTexture)Te=i.DEPTH_COMPONENT,o?M.type===ki?Te=i.DEPTH_COMPONENT32F:M.type===ur?Te=i.DEPTH_COMPONENT24:M.type===Yr?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:M.type===ki&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===jr&&Te===i.DEPTH_COMPONENT&&M.type!==ed&&M.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=ur,ke=s.convert(M.type)),M.format===ra&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,M.type!==Yr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Yr,ke=s.convert(M.type))),st&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Te,J.width,J.height,0,Ce,ke,null));else if(M.isDataTexture)if(He.length>0&&rt){Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,He[0].width,He[0].height);for(let P=0,ne=He.length;P<ne;P++)_e=He[P],Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,_e.width,_e.height,Ce,ke,_e.data):t.texImage2D(i.TEXTURE_2D,P,Te,_e.width,_e.height,0,Ce,ke,_e.data);M.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,J.width,J.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Ce,ke,J.data)):t.texImage2D(i.TEXTURE_2D,0,Te,J.width,J.height,0,Ce,ke,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ke&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Te,He[0].width,He[0].height,J.depth);for(let P=0,ne=He.length;P<ne;P++)_e=He[P],M.format!==fi?Ce!==null?Ke?de&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,_e.width,_e.height,J.depth,Ce,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,Te,_e.width,_e.height,J.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,_e.width,_e.height,J.depth,Ce,ke,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,P,Te,_e.width,_e.height,J.depth,0,Ce,ke,_e.data)}else{Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,He[0].width,He[0].height);for(let P=0,ne=He.length;P<ne;P++)_e=He[P],M.format!==fi?Ce!==null?Ke?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,_e.width,_e.height,Ce,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,P,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,_e.width,_e.height,Ce,ke,_e.data):t.texImage2D(i.TEXTURE_2D,P,Te,_e.width,_e.height,0,Ce,ke,_e.data)}else if(M.isDataArrayTexture)Ke?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Te,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ce,ke,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,Ce,ke,J.data);else if(M.isData3DTexture)Ke?(st&&t.texStorage3D(i.TEXTURE_3D,tt,Te,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ce,ke,J.data)):t.texImage3D(i.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,Ce,ke,J.data);else if(M.isFramebufferTexture){if(st)if(Ke)t.texStorage2D(i.TEXTURE_2D,tt,Te,J.width,J.height);else{let P=J.width,ne=J.height;for(let ie=0;ie<tt;ie++)t.texImage2D(i.TEXTURE_2D,ie,Te,P,ne,0,Ce,ke,null),P>>=1,ne>>=1}}else if(He.length>0&&rt){Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,He[0].width,He[0].height);for(let P=0,ne=He.length;P<ne;P++)_e=He[P],Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,Ce,ke,_e):t.texImage2D(i.TEXTURE_2D,P,Te,Ce,ke,_e);M.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,J.width,J.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,ke,J)):t.texImage2D(i.TEXTURE_2D,0,Te,Ce,ke,J);y(M,rt)&&x(ee),fe.__version=te.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function ue(b,M,B){if(M.image.length!==6)return;const ee=W(b,M),Q=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);const fe=ft.getPrimaries(ft.workingColorSpace),le=M.colorSpace===Kn?null:ft.getPrimaries(M.colorSpace),oe=M.colorSpace===Kn||fe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ae=M.isCompressedTexture||M.image[0].isCompressedTexture,ze=M.image[0]&&M.image[0].isDataTexture,J=[];for(let P=0;P<6;P++)!Ae&&!ze?J[P]=_(M.image[P],!1,!0,r.maxCubemapSize):J[P]=ze?M.image[P].image:M.image[P],J[P]=Oe(M,J[P]);const rt=J[0],Ce=p(rt)||o,ke=s.convert(M.format,M.colorSpace),Te=s.convert(M.type),_e=S(M.internalFormat,ke,Te,M.colorSpace),He=o&&M.isVideoTexture!==!0,Ke=te.__version===void 0||ee===!0,st=Q.dataReady;let de=C(M,rt,Ce);Ie(i.TEXTURE_CUBE_MAP,M,Ce);let tt;if(Ae){He&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,_e,rt.width,rt.height);for(let P=0;P<6;P++){tt=J[P].mipmaps;for(let ne=0;ne<tt.length;ne++){const ie=tt[ne];M.format!==fi?ke!==null?He?st&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,ie.width,ie.height,ke,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,_e,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,ie.width,ie.height,ke,Te,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,_e,ie.width,ie.height,0,ke,Te,ie.data)}}}else{tt=M.mipmaps,He&&Ke&&(tt.length>0&&de++,t.texStorage2D(i.TEXTURE_CUBE_MAP,de,_e,J[0].width,J[0].height));for(let P=0;P<6;P++)if(ze){He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,J[P].width,J[P].height,ke,Te,J[P].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,_e,J[P].width,J[P].height,0,ke,Te,J[P].data);for(let ne=0;ne<tt.length;ne++){const ve=tt[ne].image[P].image;He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,ve.width,ve.height,ke,Te,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,_e,ve.width,ve.height,0,ke,Te,ve.data)}}else{He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,ke,Te,J[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,_e,ke,Te,J[P]);for(let ne=0;ne<tt.length;ne++){const ie=tt[ne];He?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,ke,Te,ie.image[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,_e,ke,Te,ie.image[P])}}}y(M,Ce)&&x(i.TEXTURE_CUBE_MAP),te.__version=Q.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function me(b,M,B,ee,Q,te){const fe=s.convert(B.format,B.colorSpace),le=s.convert(B.type),oe=S(B.internalFormat,fe,le,B.colorSpace);if(!n.get(M).__hasExternalTextures){const ze=Math.max(1,M.width>>te),J=Math.max(1,M.height>>te);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,oe,ze,J,M.depth,0,fe,le,null):t.texImage2D(Q,te,oe,ze,J,0,fe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ge(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,0,Re(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,n.get(B).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(b,M,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let ee=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(B||ge(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===ki?ee=i.DEPTH_COMPONENT32F:Q.type===ur&&(ee=i.DEPTH_COMPONENT24));const te=Re(M);ge(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ee,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ee,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const ee=Re(M);B&&ge(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ee=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],fe=s.convert(te.format,te.colorSpace),le=s.convert(te.type),oe=S(te.internalFormat,fe,le,te.colorSpace),Ae=Re(M);B&&ge(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae,oe,M.width,M.height):ge(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae,oe,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,oe,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),F(M.depthTexture,0);const ee=n.get(M.depthTexture).__webglTexture,Q=Re(M);if(M.depthTexture.format===jr)ge(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(M.depthTexture.format===ra)ge(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function Xe(b){const M=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");he(M.__webglFramebuffer,b)}else if(B){M.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[ee]),M.__webglDepthbuffer[ee]=i.createRenderbuffer(),ye(M.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ye(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(b,M,B){const ee=n.get(b);M!==void 0&&me(ee.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Xe(b)}function N(b){const M=b.texture,B=n.get(b),ee=n.get(M);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=M.version,a.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,te=b.isWebGLMultipleRenderTargets===!0,fe=p(b)||o;if(Q){B.__webglFramebuffer=[];for(let le=0;le<6;le++)if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[le]=[];for(let oe=0;oe<M.mipmaps.length;oe++)B.__webglFramebuffer[le][oe]=i.createFramebuffer()}else B.__webglFramebuffer[le]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)B.__webglFramebuffer[le]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(te)if(r.drawBuffers){const le=b.texture;for(let oe=0,Ae=le.length;oe<Ae;oe++){const ze=n.get(le[oe]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&ge(b)===!1){const le=te?M:[M];B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let oe=0;oe<le.length;oe++){const Ae=le[oe];B.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[oe]);const ze=s.convert(Ae.format,Ae.colorSpace),J=s.convert(Ae.type),rt=S(Ae.internalFormat,ze,J,Ae.colorSpace,b.isXRRenderTarget===!0),Ce=Re(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,rt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,B.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,M,fe);for(let le=0;le<6;le++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)me(B.__webglFramebuffer[le][oe],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else me(B.__webglFramebuffer[le],b,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);y(M,fe)&&x(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const le=b.texture;for(let oe=0,Ae=le.length;oe<Ae;oe++){const ze=le[oe],J=n.get(ze);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ie(i.TEXTURE_2D,ze,fe),me(B.__webglFramebuffer,b,ze,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,0),y(ze,fe)&&x(i.TEXTURE_2D)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?le=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(le,ee.__webglTexture),Ie(le,M,fe),o&&M.mipmaps&&M.mipmaps.length>0)for(let oe=0;oe<M.mipmaps.length;oe++)me(B.__webglFramebuffer[oe],b,M,i.COLOR_ATTACHMENT0,le,oe);else me(B.__webglFramebuffer,b,M,i.COLOR_ATTACHMENT0,le,0);y(M,fe)&&x(le),t.unbindTexture()}b.depthBuffer&&Xe(b)}function Ge(b){const M=p(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,Q=B.length;ee<Q;ee++){const te=B[ee];if(y(te,M)){const fe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,le=n.get(te).__webglTexture;t.bindTexture(fe,le),x(fe),t.unbindTexture()}}}function pe(b){if(o&&b.samples>0&&ge(b)===!1){const M=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,ee=b.height;let Q=i.COLOR_BUFFER_BIT;const te=[],fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=n.get(b),oe=b.isWebGLMultipleRenderTargets===!0;if(oe)for(let Ae=0;Ae<M.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let Ae=0;Ae<M.length;Ae++){te.push(i.COLOR_ATTACHMENT0+Ae),b.depthBuffer&&te.push(fe);const ze=le.__ignoreDepthValues!==void 0?le.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),oe&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),oe){const J=n.get(M[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<M.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,le.__webglColorRenderbuffer[Ae]);const ze=n.get(M[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}}function Re(b){return Math.min(r.maxSamples,b.samples)}function ge(b){const M=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function H(b){const M=a.render.frame;u.get(b)!==M&&(u.set(b,M),b.update())}function Oe(b,M){const B=b.colorSpace,ee=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Vf||B!==Yi&&B!==Kn&&(ft.getTransfer(B)===vt?o===!1?e.has("EXT_sRGB")===!0&&ee===fi?(b.format=Vf,b.minFilter=yn,b.generateMipmaps=!1):M=G0.sRGBToLinear(M):(ee!==fi||Q!==_r)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=F,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=N,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function rO(i,e,t){const n=t.isWebGL2;function r(s,a=Kn){let o;const l=ft.getTransfer(a);if(s===_r)return i.UNSIGNED_BYTE;if(s===L0)return i.UNSIGNED_SHORT_4_4_4_4;if(s===D0)return i.UNSIGNED_SHORT_5_5_5_1;if(s===BC)return i.BYTE;if(s===zC)return i.SHORT;if(s===ed)return i.UNSIGNED_SHORT;if(s===P0)return i.INT;if(s===ur)return i.UNSIGNED_INT;if(s===ki)return i.FLOAT;if(s===lo)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===GC)return i.ALPHA;if(s===fi)return i.RGBA;if(s===kC)return i.LUMINANCE;if(s===HC)return i.LUMINANCE_ALPHA;if(s===jr)return i.DEPTH_COMPONENT;if(s===ra)return i.DEPTH_STENCIL;if(s===Vf)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===VC)return i.RED;if(s===I0)return i.RED_INTEGER;if(s===WC)return i.RG;if(s===O0)return i.RG_INTEGER;if(s===U0)return i.RGBA_INTEGER;if(s===Mu||s===Eu||s===Tu||s===bu)if(l===vt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Mu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Eu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Mu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Eu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===xm||s===ym||s===Sm||s===Mm)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===xm)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ym)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Sm)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mm)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===N0)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Em||s===Tm)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Em)return l===vt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Tm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bm||s===Am||s===wm||s===Rm||s===Cm||s===Pm||s===Lm||s===Dm||s===Im||s===Om||s===Um||s===Nm||s===Fm||s===Bm)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===bm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Am)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Lm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Im)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Om)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Um)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Nm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bm)return l===vt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Au||s===zm||s===Gm)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Au)return l===vt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===zm)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gm)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===$C||s===km||s===Hm||s===Vm)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Au)return o.COMPRESSED_RED_RGTC1_EXT;if(s===km)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hm)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Vm)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yr?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class sO extends jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ml extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aO={type:"move"};class Zu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ml,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ml,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ml,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(aO)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ml;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const oO=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lO=`
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

}`;class cO{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new wn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new ji({extensions:{fragDepth:!0},vertexShader:oO,fragmentShader:lO,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ti(new Mo(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class uO extends da{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new cO,p=t.getContextAttributes();let m=null,y=null;const x=[],S=[],C=new ot;let A=null;const E=new jn;E.layers.enable(1),E.viewport=new Yt;const D=new jn;D.layers.enable(2),D.viewport=new Yt;const U=[E,D],v=new sO;v.layers.enable(1),v.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=x[W];return Z===void 0&&(Z=new Zu,x[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=x[W];return Z===void 0&&(Z=new Zu,x[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=x[W];return Z===void 0&&(Z=new Zu,x[W]=Z),Z.getHandSpace()};function j(W){const Z=S.indexOf(W.inputSource);if(Z===-1)return;const ue=x[Z];ue!==void 0&&(ue.update(W.inputSource,W.frame,c||a),ue.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",G);for(let W=0;W<x.length;W++){const Z=S[W];Z!==null&&(S[W]=null,x[W].disconnect(Z))}w=null,I=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",L),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new ss(d.framebufferWidth,d.framebufferHeight,{format:fi,type:_r,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ue=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?ra:jr,ue=p.stencil?Yr:ur);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new ss(h.textureWidth,h.textureHeight,{format:fi,type:_r,depthTexture:new Q0(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const he=e.properties.get(y);he.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(W){for(let Z=0;Z<W.removed.length;Z++){const ue=W.removed[Z],me=S.indexOf(ue);me>=0&&(S[me]=null,x[me].disconnect(ue))}for(let Z=0;Z<W.added.length;Z++){const ue=W.added[Z];let me=S.indexOf(ue);if(me===-1){for(let he=0;he<x.length;he++)if(he>=S.length){S.push(ue),me=he;break}else if(S[he]===null){S[he]=ue,me=he;break}if(me===-1)break}const ye=x[me];ye&&ye.connect(ue)}}const F=new q,$=new q;function X(W,Z,ue){F.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);const me=F.distanceTo($),ye=Z.projectionMatrix.elements,he=ue.projectionMatrix.elements,Xe=ye[14]/(ye[10]-1),Le=ye[14]/(ye[10]+1),N=(ye[9]+1)/ye[5],Ge=(ye[9]-1)/ye[5],pe=(ye[8]-1)/ye[0],Re=(he[8]+1)/he[0],ge=Xe*pe,H=Xe*Re,Oe=me/(-pe+Re),b=Oe*-pe;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(b),W.translateZ(Oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const M=Xe+Oe,B=Le+Oe,ee=ge-b,Q=H+(me-b),te=N*Le/B*M,fe=Ge*Le/B*M;W.projectionMatrix.makePerspective(ee,Q,te,fe,M,B),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),v.near=D.near=E.near=W.near,v.far=D.far=E.far=W.far,(w!==v.near||I!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,I=v.far,E.near=w,E.far=I,D.near=w,D.far=I,E.updateProjectionMatrix(),D.updateProjectionMatrix(),W.updateProjectionMatrix());const Z=W.parent,ue=v.cameras;Y(v,Z);for(let me=0;me<ue.length;me++)Y(ue[me],Z);ue.length===2?X(v,E,D):v.projectionMatrix.copy(E.projectionMatrix),R(W,v,Z)};function R(W,Z,ue){ue===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ue.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Wf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let K=null;function re(W,Z){if(u=Z.getViewerPose(c||a),g=Z,u!==null){const ue=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let me=!1;ue.length!==v.cameras.length&&(v.cameras.length=0,me=!0);for(let he=0;he<ue.length;he++){const Xe=ue[he];let Le=null;if(d!==null)Le=d.getViewport(Xe);else{const Ge=f.getViewSubImage(h,Xe);Le=Ge.viewport,he===0&&(e.setRenderTargetTextures(y,Ge.colorTexture,h.ignoreDepthValues?void 0:Ge.depthStencilTexture),e.setRenderTarget(y))}let N=U[he];N===void 0&&(N=new jn,N.layers.enable(he),N.viewport=new Yt,U[he]=N),N.matrix.fromArray(Xe.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(Xe.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(v.matrix.copy(N.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),me===!0&&v.cameras.push(N)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const he=f.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&_.init(e,he,r.renderState)}}for(let ue=0;ue<x.length;ue++){const me=S[ue],ye=x[ue];me!==null&&ye!==void 0&&ye.update(me,Z,c||a)}_.render(e,v),K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ie=new J0;Ie.setAnimationLoop(re),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function fO(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Y0(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===An&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===An&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const x=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*x,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===An&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function hO(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function c(y,x){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",p));const C=x.program;n.updateUBOMapping(y,C);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const x=f();y.__bindingPointIndex=x;const S=i.createBuffer(),C=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=r[y.id],S=y.uniforms,C=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let A=0,E=S.length;A<E;A++){const D=Array.isArray(S[A])?S[A]:[S[A]];for(let U=0,v=D.length;U<v;U++){const w=D[U];if(d(w,A,U,C)===!0){const I=w.__offset,j=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let G=0;G<j.length;G++){const F=j[G],$=_(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,I+L,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,x,S,C){const A=y.value,E=x+"_"+S;if(C[E]===void 0)return typeof A=="number"||typeof A=="boolean"?C[E]=A:C[E]=A.clone(),!0;{const D=C[E];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return C[E]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function g(y){const x=y.uniforms;let S=0;const C=16;for(let E=0,D=x.length;E<D;E++){const U=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,w=U.length;v<w;v++){const I=U[v],j=Array.isArray(I.value)?I.value:[I.value];for(let L=0,G=j.length;L<G;L++){const F=j[L],$=_(F),X=S%C;X!==0&&C-X<$.boundary&&(S+=C-X),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=$.storage}}}const A=S%C;return A>0&&(S+=C-A),y.__size=S,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class sx{constructor(e={}){const{canvas:t=rP(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const x=this;let S=!1,C=0,A=0,E=null,D=-1,U=null;const v=new Yt,w=new Yt;let I=null;const j=new ht(0);let L=0,G=t.width,F=t.height,$=1,X=null,Y=null;const R=new Yt(0,0,G,F),K=new Yt(0,0,G,F);let re=!1;const Ie=new Z0;let W=!1,Z=!1,ue=null;const me=new jt,ye=new ot,he=new q,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return E===null?$:1}let N=n;function Ge(T,O){for(let V=0;V<T.length;V++){const k=T[V],z=t.getContext(k,O);if(z!==null)return z}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qh}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),N=Ge(O,T),N===null)throw Ge(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let pe,Re,ge,H,Oe,b,M,B,ee,Q,te,fe,le,oe,Ae,ze,J,rt,Ce,ke,Te,_e,He,Ke;function st(){pe=new xD(N),Re=new hD(N,pe,e),pe.init(Re),_e=new rO(N,pe,Re),ge=new nO(N,pe,Re),H=new MD(N),Oe=new HI,b=new iO(N,pe,ge,Oe,Re,_e,H),M=new pD(x),B=new vD(x),ee=new CP(N,Re),He=new uD(N,pe,ee,Re),Q=new yD(N,ee,H,He),te=new AD(N,Q,ee,H),Ce=new bD(N,Re,b),ze=new dD(Oe),fe=new kI(x,M,B,pe,Re,He,ze),le=new fO(x,Oe),oe=new WI,Ae=new KI(pe,Re),rt=new cD(x,M,B,ge,te,h,l),J=new tO(x,te,Re),Ke=new hO(N,H,Re,ge),ke=new fD(N,pe,H,Re),Te=new SD(N,pe,H,Re),H.programs=fe.programs,x.capabilities=Re,x.extensions=pe,x.properties=Oe,x.renderLists=oe,x.shadowMap=J,x.state=ge,x.info=H}st();const de=new uO(x,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(T){T!==void 0&&($=T,this.setSize(G,F,!1))},this.getSize=function(T){return T.set(G,F)},this.setSize=function(T,O,V=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=T,F=O,t.width=Math.floor(T*$),t.height=Math.floor(O*$),V===!0&&(t.style.width=T+"px",t.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(G*$,F*$).floor()},this.setDrawingBufferSize=function(T,O,V){G=T,F=O,$=V,t.width=Math.floor(T*V),t.height=Math.floor(O*V),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(v)},this.getViewport=function(T){return T.copy(R)},this.setViewport=function(T,O,V,k){T.isVector4?R.set(T.x,T.y,T.z,T.w):R.set(T,O,V,k),ge.viewport(v.copy(R).multiplyScalar($).floor())},this.getScissor=function(T){return T.copy(K)},this.setScissor=function(T,O,V,k){T.isVector4?K.set(T.x,T.y,T.z,T.w):K.set(T,O,V,k),ge.scissor(w.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){ge.setScissorTest(re=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){Y=T},this.getClearColor=function(T){return T.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(T=!0,O=!0,V=!0){let k=0;if(T){let z=!1;if(E!==null){const ae=E.texture.format;z=ae===U0||ae===O0||ae===I0}if(z){const ae=E.texture.type,Se=ae===_r||ae===ur||ae===ed||ae===Yr||ae===L0||ae===D0,Fe=rt.getClearColor(),Ee=rt.getClearAlpha(),we=Fe.r,Be=Fe.g,We=Fe.b;Se?(d[0]=we,d[1]=Be,d[2]=We,d[3]=Ee,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=we,g[1]=Be,g[2]=We,g[3]=Ee,N.clearBufferiv(N.COLOR,0,g))}else k|=N.COLOR_BUFFER_BIT}O&&(k|=N.DEPTH_BUFFER_BIT),V&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),oe.dispose(),Ae.dispose(),Oe.dispose(),M.dispose(),B.dispose(),te.dispose(),He.dispose(),Ke.dispose(),fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Me),de.removeEventListener("sessionend",Pe),ue&&(ue.dispose(),ue=null),se.stop()};function tt(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=H.autoReset,O=J.enabled,V=J.autoUpdate,k=J.needsUpdate,z=J.type;st(),H.autoReset=T,J.enabled=O,J.autoUpdate=V,J.needsUpdate=k,J.type=z}function ne(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const O=T.target;O.removeEventListener("dispose",ie),ve(O)}function ve(T){De(T),Oe.remove(T)}function De(T){const O=Oe.get(T).programs;O!==void 0&&(O.forEach(function(V){fe.releaseProgram(V)}),T.isShaderMaterial&&fe.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,V,k,z,ae){O===null&&(O=Xe);const Se=z.isMesh&&z.matrixWorld.determinant()<0,Fe=mt(T,O,V,k,z);ge.setMaterial(k,Se);let Ee=V.index,we=1;if(k.wireframe===!0){if(Ee=Q.getWireframeAttribute(V),Ee===void 0)return;we=2}const Be=V.drawRange,We=V.attributes.position;let yt=Be.start*we,Nt=(Be.start+Be.count)*we;ae!==null&&(yt=Math.max(yt,ae.start*we),Nt=Math.min(Nt,(ae.start+ae.count)*we)),Ee!==null?(yt=Math.max(yt,0),Nt=Math.min(Nt,Ee.count)):We!=null&&(yt=Math.max(yt,0),Nt=Math.min(Nt,We.count));const ct=Nt-yt;if(ct<0||ct===1/0)return;He.setup(z,k,Fe,V,Ee);let on,ut=ke;if(Ee!==null&&(on=ee.get(Ee),ut=Te,ut.setIndex(on)),z.isMesh)k.wireframe===!0?(ge.setLineWidth(k.wireframeLinewidth*Le()),ut.setMode(N.LINES)):ut.setMode(N.TRIANGLES);else if(z.isLine){let $e=k.linewidth;$e===void 0&&($e=1),ge.setLineWidth($e*Le()),z.isLineSegments?ut.setMode(N.LINES):z.isLineLoop?ut.setMode(N.LINE_LOOP):ut.setMode(N.LINE_STRIP)}else z.isPoints?ut.setMode(N.POINTS):z.isSprite&&ut.setMode(N.TRIANGLES);if(z.isBatchedMesh)ut.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ut.renderInstances(yt,ct,z.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Cc=Math.min(V.instanceCount,$e);ut.renderInstances(yt,ct,Cc)}else ut.render(yt,ct)};function Ye(T,O,V){T.transparent===!0&&T.side===Gi&&T.forceSinglePass===!1?(T.side=An,T.needsUpdate=!0,pt(T,O,V),T.side=yr,T.needsUpdate=!0,pt(T,O,V),T.side=Gi):pt(T,O,V)}this.compile=function(T,O,V=null){V===null&&(V=T),p=Ae.get(V),p.init(),y.push(p),V.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),T!==V&&T.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights(x._useLegacyLights);const k=new Set;return T.traverse(function(z){const ae=z.material;if(ae)if(Array.isArray(ae))for(let Se=0;Se<ae.length;Se++){const Fe=ae[Se];Ye(Fe,V,z),k.add(Fe)}else Ye(ae,V,z),k.add(ae)}),y.pop(),p=null,k},this.compileAsync=function(T,O,V=null){const k=this.compile(T,O,V);return new Promise(z=>{function ae(){if(k.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&k.delete(Se)}),k.size===0){z(T);return}setTimeout(ae,10)}pe.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let at=null;function be(T){at&&at(T)}function Me(){se.stop()}function Pe(){se.start()}const se=new J0;se.setAnimationLoop(be),typeof self<"u"&&se.setContext(self),this.setAnimationLoop=function(T){at=T,de.setAnimationLoop(T),T===null?se.stop():se.start()},de.addEventListener("sessionstart",Me),de.addEventListener("sessionend",Pe),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(O),O=de.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,O,E),p=Ae.get(T,y.length),p.init(),y.push(p),me.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(me),Z=this.localClippingEnabled,W=ze.init(this.clippingPlanes,Z),_=oe.get(T,m.length),_.init(),m.push(_),Ne(T,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,W===!0&&ze.beginShadows();const V=p.state.shadowsArray;if(J.render(V,T,O),W===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&rt.render(_,T),p.setupLights(x._useLegacyLights),O.isArrayCamera){const k=O.cameras;for(let z=0,ae=k.length;z<ae;z++){const Se=k[z];Ue(_,T,Se,Se.viewport)}}else Ue(_,T,O);E!==null&&(b.updateMultisampleRenderTarget(E),b.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(x,T,O),He.resetDefaultState(),D=-1,U=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ne(T,O,V,k){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ie.intersectsSprite(T)){k&&he.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const Se=te.update(T),Fe=T.material;Fe.visible&&_.push(T,Se,Fe,V,he.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ie.intersectsObject(T))){const Se=te.update(T),Fe=T.material;if(k&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),he.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),he.copy(Se.boundingSphere.center)),he.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Fe)){const Ee=Se.groups;for(let we=0,Be=Ee.length;we<Be;we++){const We=Ee[we],yt=Fe[We.materialIndex];yt&&yt.visible&&_.push(T,Se,yt,V,he.z,We)}}else Fe.visible&&_.push(T,Se,Fe,V,he.z,null)}}const ae=T.children;for(let Se=0,Fe=ae.length;Se<Fe;Se++)Ne(ae[Se],O,V,k)}function Ue(T,O,V,k){const z=T.opaque,ae=T.transmissive,Se=T.transparent;p.setupLightsView(V),W===!0&&ze.setGlobalState(x.clippingPlanes,V),ae.length>0&&Ve(z,ae,O,V),k&&ge.viewport(v.copy(k)),z.length>0&&Mt(z,O,V),ae.length>0&&Mt(ae,O,V),Se.length>0&&Mt(Se,O,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ve(T,O,V,k){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ae=Re.isWebGL2;ue===null&&(ue=new ss(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?lo:_r,minFilter:Gr,samples:ae?4:0})),x.getDrawingBufferSize(ye),ae?ue.setSize(ye.x,ye.y):ue.setSize($f(ye.x),$f(ye.y));const Se=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(j),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const Fe=x.toneMapping;x.toneMapping=mr,Mt(T,V,k),b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue);let Ee=!1;for(let we=0,Be=O.length;we<Be;we++){const We=O[we],yt=We.object,Nt=We.geometry,ct=We.material,on=We.group;if(ct.side===Gi&&yt.layers.test(k.layers)){const ut=ct.side;ct.side=An,ct.needsUpdate=!0,Ze(yt,V,k,Nt,ct,on),ct.side=ut,ct.needsUpdate=!0,Ee=!0}}Ee===!0&&(b.updateMultisampleRenderTarget(ue),b.updateRenderTargetMipmap(ue)),x.setRenderTarget(Se),x.setClearColor(j,L),x.toneMapping=Fe}function Mt(T,O,V){const k=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ae=T.length;z<ae;z++){const Se=T[z],Fe=Se.object,Ee=Se.geometry,we=k===null?Se.material:k,Be=Se.group;Fe.layers.test(V.layers)&&Ze(Fe,O,V,Ee,we,Be)}}function Ze(T,O,V,k,z,ae){T.onBeforeRender(x,O,V,k,z,ae),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(x,O,V,k,T,ae),z.transparent===!0&&z.side===Gi&&z.forceSinglePass===!1?(z.side=An,z.needsUpdate=!0,x.renderBufferDirect(V,O,k,z,T,ae),z.side=yr,z.needsUpdate=!0,x.renderBufferDirect(V,O,k,z,T,ae),z.side=Gi):x.renderBufferDirect(V,O,k,z,T,ae),T.onAfterRender(x,O,V,k,z,ae)}function pt(T,O,V){O.isScene!==!0&&(O=Xe);const k=Oe.get(T),z=p.state.lights,ae=p.state.shadowsArray,Se=z.state.version,Fe=fe.getParameters(T,z.state,ae,O,V),Ee=fe.getProgramCacheKey(Fe);let we=k.programs;k.environment=T.isMeshStandardMaterial?O.environment:null,k.fog=O.fog,k.envMap=(T.isMeshStandardMaterial?B:M).get(T.envMap||k.environment),we===void 0&&(T.addEventListener("dispose",ie),we=new Map,k.programs=we);let Be=we.get(Ee);if(Be!==void 0){if(k.currentProgram===Be&&k.lightsStateVersion===Se)return gt(T,Fe),Be}else Fe.uniforms=fe.getUniforms(T),T.onBuild(V,Fe,x),T.onBeforeCompile(Fe,x),Be=fe.acquireProgram(Fe,Ee),we.set(Ee,Be),k.uniforms=Fe.uniforms;const We=k.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(We.clippingPlanes=ze.uniform),gt(T,Fe),k.needsLights=Pn(T),k.lightsStateVersion=Se,k.needsLights&&(We.ambientLightColor.value=z.state.ambient,We.lightProbe.value=z.state.probe,We.directionalLights.value=z.state.directional,We.directionalLightShadows.value=z.state.directionalShadow,We.spotLights.value=z.state.spot,We.spotLightShadows.value=z.state.spotShadow,We.rectAreaLights.value=z.state.rectArea,We.ltc_1.value=z.state.rectAreaLTC1,We.ltc_2.value=z.state.rectAreaLTC2,We.pointLights.value=z.state.point,We.pointLightShadows.value=z.state.pointShadow,We.hemisphereLights.value=z.state.hemi,We.directionalShadowMap.value=z.state.directionalShadowMap,We.directionalShadowMatrix.value=z.state.directionalShadowMatrix,We.spotShadowMap.value=z.state.spotShadowMap,We.spotLightMatrix.value=z.state.spotLightMatrix,We.spotLightMap.value=z.state.spotLightMap,We.pointShadowMap.value=z.state.pointShadowMap,We.pointShadowMatrix.value=z.state.pointShadowMatrix),k.currentProgram=Be,k.uniformsList=null,Be}function Ut(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=zl.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function gt(T,O){const V=Oe.get(T);V.outputColorSpace=O.outputColorSpace,V.batching=O.batching,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function mt(T,O,V,k,z){O.isScene!==!0&&(O=Xe),b.resetTextureUnits();const ae=O.fog,Se=k.isMeshStandardMaterial?O.environment:null,Fe=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Yi,Ee=(k.isMeshStandardMaterial?B:M).get(k.envMap||Se),we=k.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),We=!!V.morphAttributes.position,yt=!!V.morphAttributes.normal,Nt=!!V.morphAttributes.color;let ct=mr;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(ct=x.toneMapping);const on=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ut=on!==void 0?on.length:0,$e=Oe.get(k),Cc=p.state.lights;if(W===!0&&(Z===!0||T!==U)){const Vn=T===U&&k.id===D;ze.setState(k,T,Vn)}let wt=!1;k.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Cc.state.version||$e.outputColorSpace!==Fe||z.isBatchedMesh&&$e.batching===!1||!z.isBatchedMesh&&$e.batching===!0||z.isInstancedMesh&&$e.instancing===!1||!z.isInstancedMesh&&$e.instancing===!0||z.isSkinnedMesh&&$e.skinning===!1||!z.isSkinnedMesh&&$e.skinning===!0||z.isInstancedMesh&&$e.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&$e.instancingColor===!1&&z.instanceColor!==null||$e.envMap!==Ee||k.fog===!0&&$e.fog!==ae||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==we||$e.vertexTangents!==Be||$e.morphTargets!==We||$e.morphNormals!==yt||$e.morphColors!==Nt||$e.toneMapping!==ct||Re.isWebGL2===!0&&$e.morphTargetsCount!==ut)&&(wt=!0):(wt=!0,$e.__version=k.version);let Mr=$e.currentProgram;wt===!0&&(Mr=pt(k,O,z));let od=!1,ma=!1,Pc=!1;const Jt=Mr.getUniforms(),Er=$e.uniforms;if(ge.useProgram(Mr.program)&&(od=!0,ma=!0,Pc=!0),k.id!==D&&(D=k.id,ma=!0),od||U!==T){Jt.setValue(N,"projectionMatrix",T.projectionMatrix),Jt.setValue(N,"viewMatrix",T.matrixWorldInverse);const Vn=Jt.map.cameraPosition;Vn!==void 0&&Vn.setValue(N,he.setFromMatrixPosition(T.matrixWorld)),Re.logarithmicDepthBuffer&&Jt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Jt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),U!==T&&(U=T,ma=!0,Pc=!0)}if(z.isSkinnedMesh){Jt.setOptional(N,z,"bindMatrix"),Jt.setOptional(N,z,"bindMatrixInverse");const Vn=z.skeleton;Vn&&(Re.floatVertexTextures?(Vn.boneTexture===null&&Vn.computeBoneTexture(),Jt.setValue(N,"boneTexture",Vn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Jt.setOptional(N,z,"batchingTexture"),Jt.setValue(N,"batchingTexture",z._matricesTexture,b));const Lc=V.morphAttributes;if((Lc.position!==void 0||Lc.normal!==void 0||Lc.color!==void 0&&Re.isWebGL2===!0)&&Ce.update(z,V,Mr),(ma||$e.receiveShadow!==z.receiveShadow)&&($e.receiveShadow=z.receiveShadow,Jt.setValue(N,"receiveShadow",z.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Er.envMap.value=Ee,Er.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),ma&&(Jt.setValue(N,"toneMappingExposure",x.toneMappingExposure),$e.needsLights&&lt(Er,Pc),ae&&k.fog===!0&&le.refreshFogUniforms(Er,ae),le.refreshMaterialUniforms(Er,k,$,F,ue),zl.upload(N,Ut($e),Er,b)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(zl.upload(N,Ut($e),Er,b),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Jt.setValue(N,"center",z.center),Jt.setValue(N,"modelViewMatrix",z.modelViewMatrix),Jt.setValue(N,"normalMatrix",z.normalMatrix),Jt.setValue(N,"modelMatrix",z.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Vn=k.uniformsGroups;for(let Dc=0,ax=Vn.length;Dc<ax;Dc++)if(Re.isWebGL2){const ld=Vn[Dc];Ke.update(ld,Mr),Ke.bind(ld,Mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mr}function lt(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Pn(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,O,V){Oe.get(T.texture).__webglTexture=O,Oe.get(T.depthTexture).__webglTexture=V;const k=Oe.get(T);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=V===void 0,k.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const V=Oe.get(T);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,V=0){E=T,C=O,A=V;let k=!0,z=null,ae=!1,Se=!1;if(T){const Ee=Oe.get(T);Ee.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(N.FRAMEBUFFER,null),k=!1):Ee.__webglFramebuffer===void 0?b.setupRenderTarget(T):Ee.__hasExternalTextures&&b.rebindTextures(T,Oe.get(T.texture).__webglTexture,Oe.get(T.depthTexture).__webglTexture);const we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Se=!0);const Be=Oe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[O])?z=Be[O][V]:z=Be[O],ae=!0):Re.isWebGL2&&T.samples>0&&b.useMultisampledRTT(T)===!1?z=Oe.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?z=Be[V]:z=Be,v.copy(T.viewport),w.copy(T.scissor),I=T.scissorTest}else v.copy(R).multiplyScalar($).floor(),w.copy(K).multiplyScalar($).floor(),I=re;if(ge.bindFramebuffer(N.FRAMEBUFFER,z)&&Re.drawBuffers&&k&&ge.drawBuffers(T,z),ge.viewport(v),ge.scissor(w),ge.setScissorTest(I),ae){const Ee=Oe.get(T.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,V)}else if(Se){const Ee=Oe.get(T.texture),we=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,we)}D=-1},this.readRenderTargetPixels=function(T,O,V,k,z,ae,Se){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Oe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Fe=Fe[Se]),Fe){ge.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const Ee=T.texture,we=Ee.format,Be=Ee.type;if(we!==fi&&_e.convert(we)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Be===lo&&(pe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Be!==_r&&_e.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===ki&&(Re.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-k&&V>=0&&V<=T.height-z&&N.readPixels(O,V,k,z,_e.convert(we),_e.convert(Be),ae)}finally{const Ee=E!==null?Oe.get(E).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Ee)}}},this.copyFramebufferToTexture=function(T,O,V=0){const k=Math.pow(2,-V),z=Math.floor(O.image.width*k),ae=Math.floor(O.image.height*k);b.setTexture2D(O,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,T.x,T.y,z,ae),ge.unbindTexture()},this.copyTextureToTexture=function(T,O,V,k=0){const z=O.image.width,ae=O.image.height,Se=_e.convert(V.format),Fe=_e.convert(V.type);b.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,k,T.x,T.y,z,ae,Se,Fe,O.image.data):O.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,k,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Se,O.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,k,T.x,T.y,Se,Fe,O.image),k===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(T,O,V,k,z=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ae=T.max.x-T.min.x+1,Se=T.max.y-T.min.y+1,Fe=T.max.z-T.min.z+1,Ee=_e.convert(k.format),we=_e.convert(k.type);let Be;if(k.isData3DTexture)b.setTexture3D(k,0),Be=N.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)b.setTexture2DArray(k,0),Be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const We=N.getParameter(N.UNPACK_ROW_LENGTH),yt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Nt=N.getParameter(N.UNPACK_SKIP_PIXELS),ct=N.getParameter(N.UNPACK_SKIP_ROWS),on=N.getParameter(N.UNPACK_SKIP_IMAGES),ut=V.isCompressedTexture?V.mipmaps[z]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ut.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ut.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,T.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,T.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,T.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Be,z,O.x,O.y,O.z,ae,Se,Fe,Ee,we,ut.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,z,O.x,O.y,O.z,ae,Se,Fe,Ee,ut.data)):N.texSubImage3D(Be,z,O.x,O.y,O.z,ae,Se,Fe,Ee,we,ut),N.pixelStorei(N.UNPACK_ROW_LENGTH,We),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,yt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Nt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ct),N.pixelStorei(N.UNPACK_SKIP_IMAGES,on),z===0&&k.generateMipmaps&&N.generateMipmap(Be),ge.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?b.setTextureCube(T,0):T.isData3DTexture?b.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?b.setTexture2DArray(T,0):b.setTexture2D(T,0),ge.unbindTexture()},this.resetState=function(){C=0,A=0,E=null,ge.reset(),He.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===td?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===bc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Xt?Kr:F0}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Kr?Xt:Yi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class dO extends sx{}dO.prototype.isWebGL1Renderer=!0;class pO extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class mO{constructor(e,t,n=0,r=1/0){this.ray=new V0(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new id,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return qf(e,this,n,t),n.sort(O_),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)qf(e[r],this,n,t);return n.sort(O_),n}}function O_(i,e){return i.distance-e.distance}function qf(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,a=r.length;s<a;s++)qf(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);class U_{static isWebGLAvailable(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}static isWebGL2Available(){try{const e=document.createElement("canvas");return!!(window.WebGL2RenderingContext&&e.getContext("webgl2"))}catch{return!1}}static isColorSpaceAvailable(e){try{const t=document.createElement("canvas"),n=window.WebGL2RenderingContext&&t.getContext("webgl2");return n.drawingBufferColorSpace=e,n.drawingBufferColorSpace===e}catch{return!1}}static getWebGLErrorMessage(){return this.getErrorMessage(1)}static getWebGL2ErrorMessage(){return this.getErrorMessage(2)}static getErrorMessage(e){const t={1:"WebGL",2:"WebGL 2"},n={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext};let r='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';const s=document.createElement("div");return s.id="webglmessage",s.style.fontFamily="monospace",s.style.fontSize="13px",s.style.fontWeight="normal",s.style.textAlign="center",s.style.background="#fff",s.style.color="#000",s.style.padding="1.5em",s.style.width="400px",s.style.margin="5em auto 0",n[e]?r=r.replace("$0","graphics card"):r=r.replace("$0","browser"),r=r.replace("$1",t[e]),s.innerHTML=r,s}}const _O="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}",gO="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;void main(){vec2 mouse=step(uMouse,vUv);gl_FragColor=vec4(mouse,uHover,1.);}",Tt={},Yf=[],sd=document.querySelector("#canvas"),Ds=sd.getBoundingClientRect(),jf=new ot,N_=new mO;function vO(){if(U_.isWebGLAvailable()){let u=function(){requestAnimationFrame(u),Yf.forEach(f=>xO(f)),TO(),Tt.renderer.render(Tt.scene,Tt.camera)};var i=u;SO(),MO(),Tt.renderer=new sx({canvas:sd,antialias:!0}),Tt.renderer.setSize(Ds.width,Ds.height,!1),Tt.renderer.setPixelRatio(window.devicePixelRatio),Tt.renderer.setClearColor(0,0),Tt.scene=new pO;const e=Ds.width,t=Ds.height,n=1500,r=4e3,s=e/t,a=2500,l=180*(2*Math.atan(t/2/a))/Math.PI;Tt.camera=new jn(l,s,n,r),Tt.camera.position.z=a,document.querySelectorAll("[data-webgl]").forEach(f=>{const h=f.getBoundingClientRect(),d=new Mo(h.width,h.height,1,1),g=new ji({vertexShader:_O,fragmentShader:gO,uniforms:{uMouse:{value:new ot(.5,.5)},uHover:{value:0}}}),_=new Ti(d,g);_.position.z=0;const{x:p,y:m}=ad(h,Ds);_.position.x=p,_.position.y=m;const y={geometry:d,material:g,mesh:_,rect:h,$:{el:f}};Tt.scene.add(_),Yf.push(y)}),u()}else{const e=U_.getWebGLErrorMessage();document.getElementById("container").appendChild(e)}}function xO(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=ad(n,Ds);e.position.y=r}function yO(i,e){const{$:{el:t},mesh:n,geometry:r,rect:s}=i,a=t.getBoundingClientRect(),{x:o,y:l}=ad(a,e);n.position.x=o,n.position.y=l,r.scale(a.width/s.width,a.height/s.height,1),i.rect=a}function ad(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function SO(){Ng.registerPlugin(je);const i=document.querySelector("#pageContainer"),e=GR.init(i,{delegateTo:document});je.scrollerProxy(i,{scrollTop(t){return arguments.length?e.scrollTop=t:e.scrollTop}}),e.addListener(je.update),je.defaults({scroller:i}),document.querySelector("[data-webgl]")}function MO(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{const e=sd.getBoundingClientRect();Tt.renderer.setSize(e.width,e.height,!1),Yf.forEach(o=>yO(o,e));const t=e.width,n=e.height,r=t/n,a=180*(2*Math.atan(n/2/Tt.camera.position.z))/Math.PI;Tt.camera.aspect=r,Tt.camera.fov=a,Tt.camera.updateProjectionMatrix(),Tt.renderer.render(Tt.scene,Tt.camera)},500)})}function EO(i){jf.x=i.clientX/window.innerWidth*2-1,jf.y=-(i.clientY/window.innerHeight)*2+1}window.addEventListener("pointermove",EO);function TO(){N_.setFromCamera(jf,Tt.camera);const e=N_.intersectObjects(Tt.scene.children)[0];for(let t=0;t<Tt.scene.children.length;t++){const n=Tt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=bO(r.value,r.__endValue,.1)}}function bO(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}vO();
