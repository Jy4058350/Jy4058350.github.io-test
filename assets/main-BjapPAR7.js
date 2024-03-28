var H2=Object.defineProperty;var G2=(i,e,t)=>e in i?H2(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var hp=(i,e,t)=>(G2(i,typeof e!="symbol"?e+"":e,t),t);import{c as qr,j as k2,r as V2,g as W2}from"./index-BC1wpBVT.js";function Ss(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function $E(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ki={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},_l={duration:.5,overwrite:!1,delay:0},L_,ri,ln,_r=1e8,en=1/_r,Im=Math.PI*2,$2=Im/4,X2=0,XE=Math.sqrt,q2=Math.cos,Y2=Math.sin,Gn=function(e){return typeof e=="string"},gn=function(e){return typeof e=="function"},Rs=function(e){return typeof e=="number"},I_=function(e){return typeof e>"u"},is=function(e){return typeof e=="object"},Ci=function(e){return e!==!1},D_=function(){return typeof window<"u"},Ku=function(e){return gn(e)||Gn(e)},qE=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},si=Array.isArray,Dm=/(?:-?\.?\d|\.)+/gi,YE=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,dp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,KE=/[+-]=-?[.\d]+/,jE=/[^,'"\[\]\s]+/gi,K2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,fn,Vr,Om,O_,Zi={},dh={},ZE,JE=function(e){return(dh=to(e,Zi))&&Di},U_=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bc=function(e,t){return!t&&console.warn(e)},QE=function(e,t){return e&&(Zi[e]=t)&&dh&&(dh[e]=t)||Zi},zc=function(){return 0},j2={suppressEvents:!0,isStart:!0,kill:!1},Kf={suppressEvents:!0,kill:!1},Z2={suppressEvents:!0},N_={},sa=[],Um={},eM,$i={},pp={},cx=30,jf=[],F_="",B_=function(e){var t=e[0],n,r;if(is(t)||gn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=jf.length;r--&&!jf[r].targetTest(t););n=jf[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new TM(e[r],n)))||e.splice(r,1);return e},Wa=function(e){return e._gsap||B_(gr(e))[0]._gsap},tM=function(e,t,n){return(n=e[t])&&gn(n)?e[t]():I_(n)&&e.getAttribute&&e.getAttribute(t)||n},Ri=function(e,t){return(e=e.split(",")).forEach(t)||e},En=function(e){return Math.round(e*1e5)/1e5||0},zn=function(e){return Math.round(e*1e7)/1e7||0},al=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},J2=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},ph=function(){var e=sa.length,t=sa.slice(0),n,r;for(Um={},sa.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},nM=function(e,t,n,r){sa.length&&!ri&&ph(),e.render(t,n,r||ri&&t<0&&(e._initted||e._startAt)),sa.length&&!ri&&ph()},iM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(jE).length<2?t:Gn(e)?e.trim():e},rM=function(e){return e},xr=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Q2=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},to=function(e,t){for(var n in t)e[n]=t[n];return e},ux=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=is(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},mh=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},wc=function(e){var t=e.parent||fn,n=e.keyframes?Q2(si(e.keyframes)):xr;if(Ci(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},eI=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},sM=function(e,t,n,r,a){n===void 0&&(n="_first"),r===void 0&&(r="_last");var l=e[r],c;if(a)for(c=t[a];l&&l[a]>c;)l=l._prev;return l?(t._next=l._next,l._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=l,t.parent=t._dp=e,t},Bh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=t._prev,l=t._next;a?a._next=l:e[n]===t&&(e[n]=l),l?l._prev=a:e[r]===t&&(e[r]=a),t._next=t._prev=t.parent=null},fa=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$a=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},tI=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Nm=function(e,t,n,r){return e._startAt&&(ri?e._startAt.revert(Kf):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},nI=function i(e){return!e||e._ts&&i(e.parent)},fx=function(e){return e._repeat?gl(e._tTime,e=e.duration()+e._rDelay)*e:0},gl=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_h=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},zh=function(e){return e._end=zn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},Hh=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),zh(e),n._dirty||$a(n,e)),e},aM=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_h(e.rawTime(),t),(!t._dur||jc(0,t.totalDuration(),n)-t._tTime>en)&&t.render(n,!0)),$a(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-en}},Yr=function(e,t,n,r){return t.parent&&fa(t),t._start=zn((Rs(n)?n:n||e!==fn?ur(e,n,t):e._time)+t._delay),t._end=zn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),sM(e,t,"_first","_last",e._sort?"_start":0),Fm(t)||(e._recent=t),r||aM(e,t),e._ts<0&&Hh(e,e._tTime),e},oM=function(e,t){return(Zi.ScrollTrigger||U_("scrollTrigger",t))&&Zi.ScrollTrigger.create(t,e)},lM=function(e,t,n,r,a){if(H_(e,t,a),!e._initted)return 1;if(!n&&e._pt&&!ri&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&eM!==Xi.frame)return sa.push(e),e._lazy=[a,r],1},iI=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Fm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},rI=function(e,t,n,r){var a=e.ratio,l=t<0||!t&&(!e._start&&iI(e)&&!(!e._initted&&Fm(e))||(e._ts<0||e._dp._ts<0)&&!Fm(e))?0:1,c=e._rDelay,u=0,f,d,p;if(c&&e._repeat&&(u=jc(0,e._tDur,t),d=gl(u,c),e._yoyo&&d&1&&(l=1-l),d!==gl(e._tTime,c)&&(a=1-l,e.vars.repeatRefresh&&e._initted&&e.invalidate())),l!==a||ri||r||e._zTime===en||!t&&e._zTime){if(!e._initted&&lM(e,t,r,n,u))return;for(p=e._zTime,e._zTime=t||(n?en:0),n||(n=t&&!p),e.ratio=l,e._from&&(l=1-l),e._time=0,e._tTime=u,f=e._pt;f;)f.r(l,f.d),f=f._next;t<0&&Nm(e,t,n,!0),e._onUpdate&&!n&&Yi(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&Yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===l&&(l&&fa(e,1),!n&&!ri&&(Yi(e,l?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},sI=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},vl=function(e,t,n,r){var a=e._repeat,l=zn(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=l/e._dur),e._dur=l,e._tDur=a?a<0?1e10:zn(l*(a+1)+e._rDelay*a):l,c>0&&!r&&Hh(e,e._tTime=e._tDur*c),e.parent&&zh(e),n||$a(e.parent,e),e},hx=function(e){return e instanceof gi?$a(e):vl(e,e._dur)},aI={_start:0,endTime:zc,totalDuration:zc},ur=function i(e,t,n){var r=e.labels,a=e._recent||aI,l=e.duration()>=_r?a.endTime(!1):e._dur,c,u,f;return Gn(t)&&(isNaN(t)||t in r)?(u=t.charAt(0),f=t.substr(-1)==="%",c=t.indexOf("="),u==="<"||u===">"?(c>=0&&(t=t.replace(/=/,"")),(u==="<"?a._start:a.endTime(a._repeat>=0))+(parseFloat(t.substr(1))||0)*(f?(c<0?a:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=l),r[t]):(u=parseFloat(t.charAt(c-1)+t.substr(c+1)),f&&n&&(u=u/100*(si(n)?n[0]:n).totalDuration()),c>1?i(e,t.substr(0,c-1),n)+u:l+u)):t==null?l:+t},Ac=function(e,t,n){var r=Rs(t[1]),a=(r?2:1)+(e<2?0:1),l=t[a],c,u;if(r&&(l.duration=t[1]),l.parent=n,e){for(c=l,u=n;u&&!("immediateRender"in c);)c=u.vars.defaults||{},u=Ci(u.vars.inherit)&&u.parent;l.immediateRender=Ci(c.immediateRender),e<2?l.runBackwards=1:l.startAt=t[a-1]}return new wn(t[0],l,t[a+1])},_a=function(e,t){return e||e===0?t(e):t},jc=function(e,t,n){return n<e?e:n>t?t:n},ii=function(e,t){return!Gn(e)||!(t=K2.exec(e))?"":t[1]},oI=function(e,t,n){return _a(n,function(r){return jc(e,t,r)})},Bm=[].slice,cM=function(e,t){return e&&is(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&is(e[0]))&&!e.nodeType&&e!==Vr},lI=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var a;return Gn(r)&&!t||cM(r,1)?(a=n).push.apply(a,gr(r)):n.push(r)})||n},gr=function(e,t,n){return ln&&!t&&ln.selector?ln.selector(e):Gn(e)&&!n&&(Om||!xl())?Bm.call((t||O_).querySelectorAll(e),0):si(e)?lI(e,n):cM(e)?Bm.call(e,0):e?[e]:[]},zm=function(e){return e=gr(e)[0]||Bc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gr(t,n.querySelectorAll?n:n===e?Bc("Invalid scope")||O_.createElement("div"):e)}},uM=function(e){return e.sort(function(){return .5-Math.random()})},fM=function(e){if(gn(e))return e;var t=is(e)?e:{each:e},n=Xa(t.ease),r=t.from||0,a=parseFloat(t.base)||0,l={},c=r>0&&r<1,u=isNaN(r)||c,f=t.axis,d=r,p=r;return Gn(r)?d=p={center:.5,edges:.5,end:1}[r]||0:!c&&u&&(d=r[0],p=r[1]),function(_,m,S){var y=(S||t).length,g=l[y],v,b,E,w,U,I,R,G,$;if(!g){if($=t.grid==="auto"?0:(t.grid||[1,_r])[1],!$){for(R=-_r;R<(R=S[$++].getBoundingClientRect().left)&&$<y;);$<y&&$--}for(g=l[y]=[],v=u?Math.min($,y)*d-.5:r%$,b=$===_r?0:u?y*p/$-.5:r/$|0,R=0,G=_r,I=0;I<y;I++)E=I%$-v,w=b-(I/$|0),g[I]=U=f?Math.abs(f==="y"?w:E):XE(E*E+w*w),U>R&&(R=U),U<G&&(G=U);r==="random"&&uM(g),g.max=R-G,g.min=G,g.v=y=(parseFloat(t.amount)||parseFloat(t.each)*($>y?y-1:f?f==="y"?y/$:$:Math.max($,y/$))||0)*(r==="edges"?-1:1),g.b=y<0?a-y:a,g.u=ii(t.amount||t.each)||0,n=n&&y<0?SM(n):n}return y=(g[_]-g.min)/g.max||0,zn(g.b+(n?n(y):y)*g.v)+g.u}},Hm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=zn(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(Rs(n)?0:ii(n))}},hM=function(e,t){var n=si(e),r,a;return!n&&is(e)&&(r=n=e.radius||_r,e.values?(e=gr(e.values),(a=!Rs(e[0]))&&(r*=r)):e=Hm(e.increment)),_a(t,n?gn(e)?function(l){return a=e(l),Math.abs(a-l)<=r?a:l}:function(l){for(var c=parseFloat(a?l.x:l),u=parseFloat(a?l.y:0),f=_r,d=0,p=e.length,_,m;p--;)a?(_=e[p].x-c,m=e[p].y-u,_=_*_+m*m):_=Math.abs(e[p]-c),_<f&&(f=_,d=p);return d=!r||f<=r?e[d]:l,a||d===l||Rs(l)?d:d+ii(l)}:Hm(e))},dM=function(e,t,n,r){return _a(si(e)?!t:n===!0?!!(n=0):!r,function(){return si(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},cI=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(a,l){return l(a)},r)}},uI=function(e,t){return function(n){return e(parseFloat(n))+(t||ii(n))}},fI=function(e,t,n){return mM(e,t,0,1,n)},pM=function(e,t,n){return _a(n,function(r){return e[~~t(r)]})},hI=function i(e,t,n){var r=t-e;return si(e)?pM(e,i(0,e.length),t):_a(n,function(a){return(r+(a-e)%r)%r+e})},dI=function i(e,t,n){var r=t-e,a=r*2;return si(e)?pM(e,i(0,e.length-1),t):_a(n,function(l){return l=(a+(l-e)%a)%a||0,e+(l>r?a-l:l)})},Hc=function(e){for(var t=0,n="",r,a,l,c;~(r=e.indexOf("random(",t));)l=e.indexOf(")",r),c=e.charAt(r+7)==="[",a=e.substr(r+7,l-r-7).match(c?jE:Dm),n+=e.substr(t,r-t)+dM(c?a:+a[0],c?0:+a[1],+a[2]||1e-5),t=l+1;return n+e.substr(t,e.length-t)},mM=function(e,t,n,r,a){var l=t-e,c=r-n;return _a(a,function(u){return n+((u-e)/l*c||0)})},pI=function i(e,t,n,r){var a=isNaN(e+t)?0:function(m){return(1-m)*e+m*t};if(!a){var l=Gn(e),c={},u,f,d,p,_;if(n===!0&&(r=1)&&(n=null),l)e={p:e},t={p:t};else if(si(e)&&!si(t)){for(d=[],p=e.length,_=p-2,f=1;f<p;f++)d.push(i(e[f-1],e[f]));p--,a=function(S){S*=p;var y=Math.min(_,~~S);return d[y](S-y)},n=t}else r||(e=to(si(e)?[]:{},e));if(!d){for(u in t)z_.call(c,e,u,"get",t[u]);a=function(S){return V_(S,c)||(l?e.p:e)}}}return _a(n,a)},dx=function(e,t,n){var r=e.labels,a=_r,l,c,u;for(l in r)c=r[l]-t,c<0==!!n&&c&&a>(c=Math.abs(c))&&(u=l,a=c);return u},Yi=function(e,t,n){var r=e.vars,a=r[t],l=ln,c=e._ctx,u,f,d;if(a)return u=r[t+"Params"],f=r.callbackScope||e,n&&sa.length&&ph(),c&&(ln=c),d=u?a.apply(f,u):a.call(f),ln=l,d},xc=function(e){return fa(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ri),e.progress()<1&&Yi(e,"onInterrupt"),e},el,_M=[],gM=function(e){if(e)if(e=!e.name&&e.default||e,D_()||e.headless){var t=e.name,n=gn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,a={init:zc,render:V_,add:z_,kill:PI,modifier:RI,rawVars:0},l={targetTest:0,get:0,getSetter:k_,aliases:{},register:0};if(xl(),e!==r){if($i[t])return;xr(r,xr(mh(e,a),l)),to(r.prototype,to(a,mh(e,l))),$i[r.prop=t]=r,e.targetTest&&(jf.push(r),N_[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}QE(t,r),e.register&&e.register(Di,r,Pi)}else _M.push(e)},Jt=255,yc={aqua:[0,Jt,Jt],lime:[0,Jt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Jt],navy:[0,0,128],white:[Jt,Jt,Jt],olive:[128,128,0],yellow:[Jt,Jt,0],orange:[Jt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Jt,0,0],pink:[Jt,192,203],cyan:[0,Jt,Jt],transparent:[Jt,Jt,Jt,0]},mp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Jt+.5|0},vM=function(e,t,n){var r=e?Rs(e)?[e>>16,e>>8&Jt,e&Jt]:0:yc.black,a,l,c,u,f,d,p,_,m,S;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),yc[e])r=yc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(a=e.charAt(1),l=e.charAt(2),c=e.charAt(3),e="#"+a+a+l+l+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Jt,r&Jt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Jt,e&Jt]}else if(e.substr(0,3)==="hsl"){if(r=S=e.match(Dm),!t)u=+r[0]%360/360,f=+r[1]/100,d=+r[2]/100,l=d<=.5?d*(f+1):d+f-d*f,a=d*2-l,r.length>3&&(r[3]*=1),r[0]=mp(u+1/3,a,l),r[1]=mp(u,a,l),r[2]=mp(u-1/3,a,l);else if(~e.indexOf("="))return r=e.match(YE),n&&r.length<4&&(r[3]=1),r}else r=e.match(Dm)||yc.transparent;r=r.map(Number)}return t&&!S&&(a=r[0]/Jt,l=r[1]/Jt,c=r[2]/Jt,p=Math.max(a,l,c),_=Math.min(a,l,c),d=(p+_)/2,p===_?u=f=0:(m=p-_,f=d>.5?m/(2-p-_):m/(p+_),u=p===a?(l-c)/m+(l<c?6:0):p===l?(c-a)/m+2:(a-l)/m+4,u*=60),r[0]=~~(u+.5),r[1]=~~(f*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},xM=function(e){var t=[],n=[],r=-1;return e.split(aa).forEach(function(a){var l=a.match(Qo)||[];t.push.apply(t,l),n.push(r+=l.length+1)}),t.c=n,t},px=function(e,t,n){var r="",a=(e+r).match(aa),l=t?"hsla(":"rgba(",c=0,u,f,d,p;if(!a)return e;if(a=a.map(function(_){return(_=vM(_,t,1))&&l+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(d=xM(e),u=n.c,u.join(r)!==d.c.join(r)))for(f=e.replace(aa,"1").split(Qo),p=f.length-1;c<p;c++)r+=f[c]+(~u.indexOf(c)?a.shift()||l+"0,0,0,0)":(d.length?d:a.length?a:n).shift());if(!f)for(f=e.split(aa),p=f.length-1;c<p;c++)r+=f[c]+a[c];return r+f[p]},aa=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in yc)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),mI=/hsl[a]?\(/,yM=function(e){var t=e.join(" "),n;if(aa.lastIndex=0,aa.test(t))return n=mI.test(t),e[1]=px(e[1],n),e[0]=px(e[0],n,xM(e[1])),!0},Gc,Xi=function(){var i=Date.now,e=500,t=33,n=i(),r=n,a=1e3/240,l=a,c=[],u,f,d,p,_,m,S=function y(g){var v=i()-r,b=g===!0,E,w,U,I;if((v>e||v<0)&&(n+=v-t),r+=v,U=r-n,E=U-l,(E>0||b)&&(I=++p.frame,_=U-p.time*1e3,p.time=U=U/1e3,l+=E+(E>=a?4:a-E),w=1),b||(u=f(y)),w)for(m=0;m<c.length;m++)c[m](U,_,I,g)};return p={time:0,frame:0,tick:function(){S(!0)},deltaRatio:function(g){return _/(1e3/(g||60))},wake:function(){ZE&&(!Om&&D_()&&(Vr=Om=window,O_=Vr.document||{},Zi.gsap=Di,(Vr.gsapVersions||(Vr.gsapVersions=[])).push(Di.version),JE(dh||Vr.GreenSockGlobals||!Vr.gsap&&Vr||{}),_M.forEach(gM)),d=typeof requestAnimationFrame<"u"&&requestAnimationFrame,u&&p.sleep(),f=d||function(g){return setTimeout(g,l-p.time*1e3+1|0)},Gc=1,S(2))},sleep:function(){(d?cancelAnimationFrame:clearTimeout)(u),Gc=0,f=zc},lagSmoothing:function(g,v){e=g||1/0,t=Math.min(v||33,e)},fps:function(g){a=1e3/(g||240),l=p.time*1e3+a},add:function(g,v,b){var E=v?function(w,U,I,R){g(w,U,I,R),p.remove(E)}:g;return p.remove(g),c[b?"unshift":"push"](E),xl(),E},remove:function(g,v){~(v=c.indexOf(g))&&c.splice(v,1)&&m>=v&&m--},_listeners:c},p}(),xl=function(){return!Gc&&Xi.wake()},Nt={},_I=/^[\d.\-M][\d.\-,\s]/,gI=/["']/g,vI=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],a=1,l=n.length,c,u,f;a<l;a++)u=n[a],c=a!==l-1?u.lastIndexOf(","):u.length,f=u.substr(0,c),t[r]=isNaN(f)?f.replace(gI,"").trim():+f,r=u.substr(c+1).trim();return t},xI=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},yI=function(e){var t=(e+"").split("("),n=Nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[vI(t[1])]:xI(e).split(",").map(iM)):Nt._CE&&_I.test(e)?Nt._CE("",e):n},SM=function(e){return function(t){return 1-e(1-t)}},EM=function i(e,t){for(var n=e._first,r;n;)n instanceof gi?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Xa=function(e,t){return e&&(gn(e)?e:Nt[e]||yI(e))||t},co=function(e,t,n,r){n===void 0&&(n=function(u){return 1-t(1-u)}),r===void 0&&(r=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var a={easeIn:t,easeOut:n,easeInOut:r},l;return Ri(e,function(c){Nt[c]=Zi[c]=a,Nt[l=c.toLowerCase()]=n;for(var u in a)Nt[l+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Nt[c+"."+u]=a[u]}),a},MM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_p=function i(e,t,n){var r=t>=1?t:1,a=(n||(e?.3:.45))/(t<1?t:1),l=a/Im*(Math.asin(1/r)||0),c=function(d){return d===1?1:r*Math.pow(2,-10*d)*Y2((d-l)*a)+1},u=e==="out"?c:e==="in"?function(f){return 1-c(1-f)}:MM(c);return a=Im/a,u.config=function(f,d){return i(e,f,d)},u},gp=function i(e,t){t===void 0&&(t=1.70158);var n=function(l){return l?--l*l*((t+1)*l+t)+1:0},r=e==="out"?n:e==="in"?function(a){return 1-n(1-a)}:MM(n);return r.config=function(a){return i(e,a)},r};Ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;co(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Nt.Linear.easeNone=Nt.none=Nt.Linear.easeIn;co("Elastic",_p("in"),_p("out"),_p());(function(i,e){var t=1/e,n=2*t,r=2.5*t,a=function(c){return c<t?i*c*c:c<n?i*Math.pow(c-1.5/e,2)+.75:c<r?i*(c-=2.25/e)*c+.9375:i*Math.pow(c-2.625/e,2)+.984375};co("Bounce",function(l){return 1-a(1-l)},a)})(7.5625,2.75);co("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});co("Circ",function(i){return-(XE(1-i*i)-1)});co("Sine",function(i){return i===1?1:-q2(i*$2)+1});co("Back",gp("in"),gp("out"),gp());Nt.SteppedEase=Nt.steps=Zi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),a=t?1:0,l=1-en;return function(c){return((r*jc(0,l,c)|0)+a)*n}}};_l.ease=Nt["quad.out"];Ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return F_+=i+","+i+"Params,"});var TM=function(e,t){this.id=X2++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:tM,this.set=t?t.getSetter:k_},kc=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,vl(this,+t.duration,1,1),this.data=t.data,ln&&(this._ctx=ln,ln.data.push(this)),Gc||Xi.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,vl(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(xl(),!arguments.length)return this._tTime;var a=this._dp;if(a&&a.smoothChildTiming&&this._ts){for(Hh(this,n),!a._dp||a.parent||aM(a,this);a&&a.parent;)a.parent._time!==a._start+(a._ts>=0?a._tTime/a._ts:(a.totalDuration()-a._tTime)/-a._ts)&&a.totalTime(a._tTime,!0),a=a.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===en||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nM(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+fx(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+fx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var a=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*a,r):this._repeat?gl(this._tTime,a)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===n)return this;var a=this.parent&&this._ts?_h(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-en?0:this._rts,this.totalTime(jc(-Math.abs(this._delay),this._tDur,a),r!==!1),zh(this),tI(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(xl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Yr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ci(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_h(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Z2);var r=ri;return ri=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ri=r,this},e.globalTime=function(n){for(var r=this,a=arguments.length?n:r.rawTime();r;)a=r._start+a/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):a},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,hx(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,hx(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(ur(this,n),Ci(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,Ci(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,a;return!!(!n||this._ts&&this._initted&&n.isActive()&&(a=n.rawTime(!0))>=r&&a<this.endTime(!0)-en)},e.eventCallback=function(n,r,a){var l=this.vars;return arguments.length>1?(r?(l[n]=r,a&&(l[n+"Params"]=a),n==="onUpdate"&&(this._onUpdate=r)):delete l[n],this):l[n]},e.then=function(n){var r=this;return new Promise(function(a){var l=gn(n)?n:rM,c=function(){var f=r.then;r.then=null,gn(l)&&(l=l(r))&&(l.then||l===r)&&(r.then=f),a(l),r.then=f};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){xc(this)},i}();xr(kc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var gi=function(i){$E(e,i);function e(n,r){var a;return n===void 0&&(n={}),a=i.call(this,n)||this,a.labels={},a.smoothChildTiming=!!n.smoothChildTiming,a.autoRemoveChildren=!!n.autoRemoveChildren,a._sort=Ci(n.sortChildren),fn&&Yr(n.parent||fn,Ss(a),r),n.reversed&&a.reverse(),n.paused&&a.paused(!0),n.scrollTrigger&&oM(Ss(a),n.scrollTrigger),a}var t=e.prototype;return t.to=function(r,a,l){return Ac(0,arguments,this),this},t.from=function(r,a,l){return Ac(1,arguments,this),this},t.fromTo=function(r,a,l,c){return Ac(2,arguments,this),this},t.set=function(r,a,l){return a.duration=0,a.parent=this,wc(a).repeatDelay||(a.repeat=0),a.immediateRender=!!a.immediateRender,new wn(r,a,ur(this,l),1),this},t.call=function(r,a,l){return Yr(this,wn.delayedCall(0,r,a),l)},t.staggerTo=function(r,a,l,c,u,f,d){return l.duration=a,l.stagger=l.stagger||c,l.onComplete=f,l.onCompleteParams=d,l.parent=this,new wn(r,l,ur(this,u)),this},t.staggerFrom=function(r,a,l,c,u,f,d){return l.runBackwards=1,wc(l).immediateRender=Ci(l.immediateRender),this.staggerTo(r,a,l,c,u,f,d)},t.staggerFromTo=function(r,a,l,c,u,f,d,p){return c.startAt=l,wc(c).immediateRender=Ci(c.immediateRender),this.staggerTo(r,a,c,u,f,d,p)},t.render=function(r,a,l){var c=this._time,u=this._dirty?this.totalDuration():this._tDur,f=this._dur,d=r<=0?0:zn(r),p=this._zTime<0!=r<0&&(this._initted||!f),_,m,S,y,g,v,b,E,w,U,I,R;if(this!==fn&&d>u&&r>=0&&(d=u),d!==this._tTime||l||p){if(c!==this._time&&f&&(d+=this._time-c,r+=this._time-c),_=d,w=this._start,E=this._ts,v=!E,p&&(f||(c=this._zTime),(r||!a)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,g=f+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,a,l);if(_=zn(d%g),d===u?(y=this._repeat,_=f):(y=~~(d/g),y&&y===d/g&&(_=f,y--),_>f&&(_=f)),U=gl(this._tTime,g),!c&&this._tTime&&U!==y&&this._tTime-U*g-this._dur<=0&&(U=y),I&&y&1&&(_=f-_,R=1),y!==U&&!this._lock){var G=I&&U&1,$=G===(I&&y&1);if(y<U&&(G=!G),c=G?0:d%f?f:d,this._lock=1,this.render(c||(R?0:zn(y*g)),a,!f)._lock=0,this._tTime=d,!a&&this.parent&&Yi(this,"onRepeat"),this.vars.repeatRefresh&&!R&&(this.invalidate()._lock=1),c&&c!==this._time||v!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(f=this._dur,u=this._tDur,$&&(this._lock=2,c=G?f:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!R&&this.invalidate()),this._lock=0,!this._ts&&!v)return this;EM(this,R)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=sI(this,zn(c),zn(_)),b&&(d-=_-(_=b._start))),this._tTime=d,this._time=_,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&_&&!a&&!y&&(Yi(this,"onStart"),this._tTime!==d))return this;if(_>=c&&r>=0)for(m=this._first;m;){if(S=m._next,(m._act||_>=m._start)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,a,l);if(m.render(m._ts>0?(_-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(_-m._start)*m._ts,a,l),_!==this._time||!this._ts&&!v){b=0,S&&(d+=this._zTime=-en);break}}m=S}else{m=this._last;for(var T=r<0?r:_;m;){if(S=m._prev,(m._act||T<=m._end)&&m._ts&&b!==m){if(m.parent!==this)return this.render(r,a,l);if(m.render(m._ts>0?(T-m._start)*m._ts:(m._dirty?m.totalDuration():m._tDur)+(T-m._start)*m._ts,a,l||ri&&(m._initted||m._startAt)),_!==this._time||!this._ts&&!v){b=0,S&&(d+=this._zTime=T?-en:en);break}}m=S}}if(b&&!a&&(this.pause(),b.render(_>=c?0:-en)._zTime=_>=c?1:-1,this._ts))return this._start=w,zh(this),this.render(r,a,l);this._onUpdate&&!a&&Yi(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&c)&&(w===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((r||!f)&&(d===u&&this._ts>0||!d&&this._ts<0)&&fa(this,1),!a&&!(r<0&&!c)&&(d||c||!u)&&(Yi(this,d===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,a){var l=this;if(Rs(a)||(a=ur(this,a,r)),!(r instanceof kc)){if(si(r))return r.forEach(function(c){return l.add(c,a)}),this;if(Gn(r))return this.addLabel(r,a);if(gn(r))r=wn.delayedCall(0,r);else return this}return this!==r?Yr(this,r,a):this},t.getChildren=function(r,a,l,c){r===void 0&&(r=!0),a===void 0&&(a=!0),l===void 0&&(l=!0),c===void 0&&(c=-_r);for(var u=[],f=this._first;f;)f._start>=c&&(f instanceof wn?a&&u.push(f):(l&&u.push(f),r&&u.push.apply(u,f.getChildren(!0,a,l)))),f=f._next;return u},t.getById=function(r){for(var a=this.getChildren(1,1,1),l=a.length;l--;)if(a[l].vars.id===r)return a[l]},t.remove=function(r){return Gn(r)?this.removeLabel(r):gn(r)?this.killTweensOf(r):(Bh(this,r),r===this._recent&&(this._recent=this._last),$a(this))},t.totalTime=function(r,a){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zn(Xi.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,a),this._forcing=0,this):this._tTime},t.addLabel=function(r,a){return this.labels[r]=ur(this,a),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,a,l){var c=wn.delayedCall(0,a||zc,l);return c.data="isPause",this._hasPause=1,Yr(this,c,ur(this,r))},t.removePause=function(r){var a=this._first;for(r=ur(this,r);a;)a._start===r&&a.data==="isPause"&&fa(a),a=a._next},t.killTweensOf=function(r,a,l){for(var c=this.getTweensOf(r,l),u=c.length;u--;)Qs!==c[u]&&c[u].kill(r,a);return this},t.getTweensOf=function(r,a){for(var l=[],c=gr(r),u=this._first,f=Rs(a),d;u;)u instanceof wn?J2(u._targets,c)&&(f?(!Qs||u._initted&&u._ts)&&u.globalTime(0)<=a&&u.globalTime(u.totalDuration())>a:!a||u.isActive())&&l.push(u):(d=u.getTweensOf(c,a)).length&&l.push.apply(l,d),u=u._next;return l},t.tweenTo=function(r,a){a=a||{};var l=this,c=ur(l,r),u=a,f=u.startAt,d=u.onStart,p=u.onStartParams,_=u.immediateRender,m,S=wn.to(l,xr({ease:a.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:a.duration||Math.abs((c-(f&&"time"in f?f.time:l._time))/l.timeScale())||en,onStart:function(){if(l.pause(),!m){var g=a.duration||Math.abs((c-(f&&"time"in f?f.time:l._time))/l.timeScale());S._dur!==g&&vl(S,g,0,1).render(S._time,!0,!0),m=1}d&&d.apply(S,p||[])}},a));return _?S.render(0):S},t.tweenFromTo=function(r,a,l){return this.tweenTo(a,xr({startAt:{time:ur(this,r)}},l))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),dx(this,ur(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),dx(this,ur(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(r,a,l){l===void 0&&(l=0);for(var c=this._first,u=this.labels,f;c;)c._start>=l&&(c._start+=r,c._end+=r),c=c._next;if(a)for(f in u)u[f]>=l&&(u[f]+=r);return $a(this)},t.invalidate=function(r){var a=this._first;for(this._lock=0;a;)a.invalidate(r),a=a._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var a=this._first,l;a;)l=a._next,this.remove(a),a=l;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),$a(this)},t.totalDuration=function(r){var a=0,l=this,c=l._last,u=_r,f,d,p;if(arguments.length)return l.timeScale((l._repeat<0?l.duration():l.totalDuration())/(l.reversed()?-r:r));if(l._dirty){for(p=l.parent;c;)f=c._prev,c._dirty&&c.totalDuration(),d=c._start,d>u&&l._sort&&c._ts&&!l._lock?(l._lock=1,Yr(l,c,d-c._delay,1)._lock=0):u=d,d<0&&c._ts&&(a-=d,(!p&&!l._dp||p&&p.smoothChildTiming)&&(l._start+=d/l._ts,l._time-=d,l._tTime-=d),l.shiftChildren(-d,!1,-1/0),u=0),c._end>a&&c._ts&&(a=c._end),c=f;vl(l,l===fn&&l._time>a?l._time:a,1,1),l._dirty=0}return l._tDur},e.updateRoot=function(r){if(fn._ts&&(nM(fn,_h(r,fn)),eM=Xi.frame),Xi.frame>=cx){cx+=Ki.autoSleep||120;var a=fn._first;if((!a||!a._ts)&&Ki.autoSleep&&Xi._listeners.length<2){for(;a&&!a._ts;)a=a._next;a||Xi.sleep()}}},e}(kc);xr(gi.prototype,{_lock:0,_hasPause:0,_forcing:0});var SI=function(e,t,n,r,a,l,c){var u=new Pi(this._pt,e,t,0,1,PM,null,a),f=0,d=0,p,_,m,S,y,g,v,b;for(u.b=n,u.e=r,n+="",r+="",(v=~r.indexOf("random("))&&(r=Hc(r)),l&&(b=[n,r],l(b,e,t),n=b[0],r=b[1]),_=n.match(dp)||[];p=dp.exec(r);)S=p[0],y=r.substring(f,p.index),m?m=(m+1)%5:y.substr(-5)==="rgba("&&(m=1),S!==_[d++]&&(g=parseFloat(_[d-1])||0,u._pt={_next:u._pt,p:y||d===1?y:",",s:g,c:S.charAt(1)==="="?al(g,S)-g:parseFloat(S)-g,m:m&&m<4?Math.round:0},f=dp.lastIndex);return u.c=f<r.length?r.substring(f,r.length):"",u.fp=c,(KE.test(r)||v)&&(u.e=0),this._pt=u,u},z_=function(e,t,n,r,a,l,c,u,f,d){gn(r)&&(r=r(a||0,e,l));var p=e[t],_=n!=="get"?n:gn(p)?f?e[t.indexOf("set")||!gn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](f):e[t]():p,m=gn(p)?f?wI:CM:G_,S;if(Gn(r)&&(~r.indexOf("random(")&&(r=Hc(r)),r.charAt(1)==="="&&(S=al(_,r)+(ii(_)||0),(S||S===0)&&(r=S))),!d||_!==r||Gm)return!isNaN(_*r)&&r!==""?(S=new Pi(this._pt,e,t,+_||0,r-(_||0),typeof p=="boolean"?CI:RM,0,m),f&&(S.fp=f),c&&S.modifier(c,this,e),this._pt=S):(!p&&!(t in e)&&U_(t,r),SI.call(this,e,t,_,r,m,u||Ki.stringFilter,f))},EI=function(e,t,n,r,a){if(gn(e)&&(e=Cc(e,a,t,n,r)),!is(e)||e.style&&e.nodeType||si(e)||qE(e))return Gn(e)?Cc(e,a,t,n,r):e;var l={},c;for(c in e)l[c]=Cc(e[c],a,t,n,r);return l},bM=function(e,t,n,r,a,l){var c,u,f,d;if($i[e]&&(c=new $i[e]).init(a,c.rawVars?t[e]:EI(t[e],r,a,l,n),n,r,l)!==!1&&(n._pt=u=new Pi(n._pt,a,e,0,1,c.render,c,0,c.priority),n!==el))for(f=n._ptLookup[n._targets.indexOf(a)],d=c._props.length;d--;)f[c._props[d]]=u;return c},Qs,Gm,H_=function i(e,t,n){var r=e.vars,a=r.ease,l=r.startAt,c=r.immediateRender,u=r.lazy,f=r.onUpdate,d=r.runBackwards,p=r.yoyoEase,_=r.keyframes,m=r.autoRevert,S=e._dur,y=e._startAt,g=e._targets,v=e.parent,b=v&&v.data==="nested"?v.vars.targets:g,E=e._overwrite==="auto"&&!L_,w=e.timeline,U,I,R,G,$,T,O,Y,ce,z,j,K,ne;if(w&&(!_||!a)&&(a="none"),e._ease=Xa(a,_l.ease),e._yEase=p?SM(Xa(p===!0?a:p,_l.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!w&&!!r.runBackwards,!w||_&&!r.stagger){if(Y=g[0]?Wa(g[0]).harness:0,K=Y&&r[Y.prop],U=mh(r,N_),y&&(y._zTime<0&&y.progress(1),t<0&&d&&c&&!m?y.render(-1,!0):y.revert(d&&S?Kf:j2),y._lazy=0),l){if(fa(e._startAt=wn.set(g,xr({data:"isStart",overwrite:!1,parent:v,immediateRender:!0,lazy:!y&&Ci(u),startAt:null,delay:0,onUpdate:f&&function(){return Yi(e,"onUpdate")},stagger:0},l))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ri||!c&&!m)&&e._startAt.revert(Kf),c&&S&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(d&&S&&!y){if(t&&(c=!1),R=xr({overwrite:!1,data:"isFromStart",lazy:c&&!y&&Ci(u),immediateRender:c,stagger:0,parent:v},U),K&&(R[Y.prop]=K),fa(e._startAt=wn.set(g,R)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ri?e._startAt.revert(Kf):e._startAt.render(-1,!0)),e._zTime=t,!c)i(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,u=S&&Ci(u)||u&&!S,I=0;I<g.length;I++){if($=g[I],O=$._gsap||B_(g)[I]._gsap,e._ptLookup[I]=z={},Um[O.id]&&sa.length&&ph(),j=b===g?I:b.indexOf($),Y&&(ce=new Y).init($,K||U,e,j,b)!==!1&&(e._pt=G=new Pi(e._pt,$,ce.name,0,1,ce.render,ce,0,ce.priority),ce._props.forEach(function(ie){z[ie]=G}),ce.priority&&(T=1)),!Y||K)for(R in U)$i[R]&&(ce=bM(R,U,e,j,$,b))?ce.priority&&(T=1):z[R]=G=z_.call(e,$,R,"get",U[R],j,b,0,r.stringFilter);e._op&&e._op[I]&&e.kill($,e._op[I]),E&&e._pt&&(Qs=e,fn.killTweensOf($,z,e.globalTime(t)),ne=!e.parent,Qs=0),e._pt&&u&&(Um[O.id]=1)}T&&LM(e),e._onInit&&e._onInit(e)}e._onUpdate=f,e._initted=(!e._op||e._pt)&&!ne,_&&t<=0&&w.render(_r,!0,!0)},MI=function(e,t,n,r,a,l,c,u){var f=(e._pt&&e._ptCache||(e._ptCache={}))[t],d,p,_,m;if(!f)for(f=e._ptCache[t]=[],_=e._ptLookup,m=e._targets.length;m--;){if(d=_[m][t],d&&d.d&&d.d._pt)for(d=d.d._pt;d&&d.p!==t&&d.fp!==t;)d=d._next;if(!d)return Gm=1,e.vars[t]="+=0",H_(e,c),Gm=0,u?Bc(t+" not eligible for reset"):1;f.push(d)}for(m=f.length;m--;)p=f[m],d=p._pt||p,d.s=(r||r===0)&&!a?r:d.s+(r||0)+l*d.c,d.c=n-d.s,p.e&&(p.e=En(n)+ii(p.e)),p.b&&(p.b=d.s+ii(p.b))},TI=function(e,t){var n=e[0]?Wa(e[0]).harness:0,r=n&&n.aliases,a,l,c,u;if(!r)return t;a=to({},t);for(l in r)if(l in a)for(u=r[l].split(","),c=u.length;c--;)a[u[c]]=a[l];return a},bI=function(e,t,n,r){var a=t.ease||r||"power1.inOut",l,c;if(si(t))c=n[e]||(n[e]=[]),t.forEach(function(u,f){return c.push({t:f/(t.length-1)*100,v:u,e:a})});else for(l in t)c=n[l]||(n[l]=[]),l==="ease"||c.push({t:parseFloat(e),v:t[l],e:a})},Cc=function(e,t,n,r,a){return gn(e)?e.call(t,n,r,a):Gn(e)&&~e.indexOf("random(")?Hc(e):e},wM=F_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",AM={};Ri(wM+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return AM[i]=1});var wn=function(i){$E(e,i);function e(n,r,a,l){var c;typeof r=="number"&&(a.duration=r,r=a,a=null),c=i.call(this,l?r:wc(r))||this;var u=c.vars,f=u.duration,d=u.delay,p=u.immediateRender,_=u.stagger,m=u.overwrite,S=u.keyframes,y=u.defaults,g=u.scrollTrigger,v=u.yoyoEase,b=r.parent||fn,E=(si(n)||qE(n)?Rs(n[0]):"length"in r)?[n]:gr(n),w,U,I,R,G,$,T,O;if(c._targets=E.length?B_(E):Bc("GSAP target "+n+" not found. https://gsap.com",!Ki.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=m,S||_||Ku(f)||Ku(d)){if(r=c.vars,w=c.timeline=new gi({data:"nested",defaults:y||{},targets:b&&b.data==="nested"?b.vars.targets:E}),w.kill(),w.parent=w._dp=Ss(c),w._start=0,_||Ku(f)||Ku(d)){if(R=E.length,T=_&&fM(_),is(_))for(G in _)~wM.indexOf(G)&&(O||(O={}),O[G]=_[G]);for(U=0;U<R;U++)I=mh(r,AM),I.stagger=0,v&&(I.yoyoEase=v),O&&to(I,O),$=E[U],I.duration=+Cc(f,Ss(c),U,$,E),I.delay=(+Cc(d,Ss(c),U,$,E)||0)-c._delay,!_&&R===1&&I.delay&&(c._delay=d=I.delay,c._start+=d,I.delay=0),w.to($,I,T?T(U,$,E):0),w._ease=Nt.none;w.duration()?f=d=0:c.timeline=0}else if(S){wc(xr(w.vars.defaults,{ease:"none"})),w._ease=Xa(S.ease||r.ease||"none");var Y=0,ce,z,j;if(si(S))S.forEach(function(K){return w.to(E,K,">")}),w.duration();else{I={};for(G in S)G==="ease"||G==="easeEach"||bI(G,S[G],I,S.easeEach);for(G in I)for(ce=I[G].sort(function(K,ne){return K.t-ne.t}),Y=0,U=0;U<ce.length;U++)z=ce[U],j={ease:z.e,duration:(z.t-(U?ce[U-1].t:0))/100*f},j[G]=z.v,w.to(E,j,Y),Y+=j.duration;w.duration()<f&&w.to({},{duration:f-w.duration()})}}f||c.duration(f=w.duration())}else c.timeline=0;return m===!0&&!L_&&(Qs=Ss(c),fn.killTweensOf(E),Qs=0),Yr(b,Ss(c),a),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(p||!f&&!S&&c._start===zn(b._time)&&Ci(p)&&nI(Ss(c))&&b.data!=="nested")&&(c._tTime=-en,c.render(Math.max(0,-d)||0)),g&&oM(Ss(c),g),c}var t=e.prototype;return t.render=function(r,a,l){var c=this._time,u=this._tDur,f=this._dur,d=r<0,p=r>u-en&&!d?u:r<en?0:r,_,m,S,y,g,v,b,E,w;if(!f)rI(this,r,a,l);else if(p!==this._tTime||!r||l||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(_=p,E=this.timeline,this._repeat){if(y=f+this._rDelay,this._repeat<-1&&d)return this.totalTime(y*100+r,a,l);if(_=zn(p%y),p===u?(S=this._repeat,_=f):(S=~~(p/y),S&&S===zn(p/y)&&(_=f,S--),_>f&&(_=f)),v=this._yoyo&&S&1,v&&(w=this._yEase,_=f-_),g=gl(this._tTime,y),_===c&&!l&&this._initted&&S===g)return this._tTime=p,this;S!==g&&(E&&this._yEase&&EM(E,v),this.vars.repeatRefresh&&!v&&!this._lock&&this._time!==y&&this._initted&&(this._lock=l=1,this.render(zn(y*S),!0).invalidate()._lock=0))}if(!this._initted){if(lM(this,d?r:_,l,a,p))return this._tTime=0,this;if(c!==this._time&&!(l&&this.vars.repeatRefresh&&S!==g))return this;if(f!==this._dur)return this.render(r,a,l)}if(this._tTime=p,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=b=(w||this._ease)(_/f),this._from&&(this.ratio=b=1-b),_&&!c&&!a&&!S&&(Yi(this,"onStart"),this._tTime!==p))return this;for(m=this._pt;m;)m.r(b,m.d),m=m._next;E&&E.render(r<0?r:E._dur*E._ease(_/this._dur),a,l)||this._startAt&&(this._zTime=r),this._onUpdate&&!a&&(d&&Nm(this,r,a,l),Yi(this,"onUpdate")),this._repeat&&S!==g&&this.vars.onRepeat&&!a&&this.parent&&Yi(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&Nm(this,r,!0,!0),(r||!f)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&fa(this,1),!a&&!(d&&!c)&&(p||c||v)&&(Yi(this,p===u?"onComplete":"onReverseComplete",!0),this._prom&&!(p<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,a,l,c,u){Gc||Xi.wake(),this._ts||this.play();var f=Math.min(this._dur,(this._dp._time-this._start)*this._ts),d;return this._initted||H_(this,f),d=this._ease(f/this._dur),MI(this,r,a,l,c,d,f,u)?this.resetTo(r,a,l,c,1):(Hh(this,0),this.parent||sM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,a){if(a===void 0&&(a="all"),!r&&(!a||a==="all"))return this._lazy=this._pt=0,this.parent?xc(this):this;if(this.timeline){var l=this.timeline.totalDuration();return this.timeline.killTweensOf(r,a,Qs&&Qs.vars.overwrite!==!0)._first||xc(this),this.parent&&l!==this.timeline.totalDuration()&&vl(this,this._dur*this.timeline._tDur/l,0,1),this}var c=this._targets,u=r?gr(r):c,f=this._ptLookup,d=this._pt,p,_,m,S,y,g,v;if((!a||a==="all")&&eI(c,u))return a==="all"&&(this._pt=0),xc(this);for(p=this._op=this._op||[],a!=="all"&&(Gn(a)&&(y={},Ri(a,function(b){return y[b]=1}),a=y),a=TI(c,a)),v=c.length;v--;)if(~u.indexOf(c[v])){_=f[v],a==="all"?(p[v]=a,S=_,m={}):(m=p[v]=p[v]||{},S=a);for(y in S)g=_&&_[y],g&&((!("kill"in g.d)||g.d.kill(y)===!0)&&Bh(this,g,"_pt"),delete _[y]),m!=="all"&&(m[y]=1)}return this._initted&&!this._pt&&d&&xc(this),this},e.to=function(r,a){return new e(r,a,arguments[2])},e.from=function(r,a){return Ac(1,arguments)},e.delayedCall=function(r,a,l,c){return new e(a,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:a,onReverseComplete:a,onCompleteParams:l,onReverseCompleteParams:l,callbackScope:c})},e.fromTo=function(r,a,l){return Ac(2,arguments)},e.set=function(r,a){return a.duration=0,a.repeatDelay||(a.repeat=0),new e(r,a)},e.killTweensOf=function(r,a,l){return fn.killTweensOf(r,a,l)},e}(kc);xr(wn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ri("staggerTo,staggerFrom,staggerFromTo",function(i){wn[i]=function(){var e=new gi,t=Bm.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var G_=function(e,t,n){return e[t]=n},CM=function(e,t,n){return e[t](n)},wI=function(e,t,n,r){return e[t](r.fp,n)},AI=function(e,t,n){return e.setAttribute(t,n)},k_=function(e,t){return gn(e[t])?CM:I_(e[t])&&e.setAttribute?AI:G_},RM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},CI=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},PM=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},V_=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},RI=function(e,t,n,r){for(var a=this._pt,l;a;)l=a._next,a.p===r&&a.modifier(e,t,n),a=l},PI=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Bh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},LI=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},LM=function(e){for(var t=e._pt,n,r,a,l;t;){for(n=t._next,r=a;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:l)?t._prev._next=t:a=t,(t._next=r)?r._prev=t:l=t,t=n}e._pt=a},Pi=function(){function i(t,n,r,a,l,c,u,f,d){this.t=n,this.s=a,this.c=l,this.p=r,this.r=c||RM,this.d=u||this,this.set=f||G_,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,a){this.mSet=this.mSet||this.set,this.set=LI,this.m=n,this.mt=a,this.tween=r},i}();Ri(F_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return N_[i]=1});Zi.TweenMax=Zi.TweenLite=wn;Zi.TimelineLite=Zi.TimelineMax=gi;fn=new gi({sortChildren:!1,defaults:_l,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ki.stringFilter=yM;var qa=[],Zf={},II=[],mx=0,DI=0,vp=function(e){return(Zf[e]||II).map(function(t){return t()})},km=function(){var e=Date.now(),t=[];e-mx>2&&(vp("matchMediaInit"),qa.forEach(function(n){var r=n.queries,a=n.conditions,l,c,u,f;for(c in r)l=Vr.matchMedia(r[c]).matches,l&&(u=1),l!==a[c]&&(a[c]=l,f=1);f&&(n.revert(),u&&t.push(n))}),vp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),mx=e,vp("matchMedia"))},IM=function(){function i(t,n){this.selector=n&&zm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=DI++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,a){gn(n)&&(a=r,r=n,n=gn);var l=this,c=function(){var f=ln,d=l.selector,p;return f&&f!==l&&f.data.push(l),a&&(l.selector=zm(a)),ln=l,p=r.apply(l,arguments),gn(p)&&l._r.push(p),ln=f,l.selector=d,l.isReverted=!1,p};return l.last=c,n===gn?c(l,function(u){return l.add(null,u)}):n?l[n]=c:c},e.ignore=function(n){var r=ln;ln=null,n(this),ln=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof wn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var a=this;if(n?function(){for(var c=a.getTweens(),u=a.data.length,f;u--;)f=a.data[u],f.data==="isFlip"&&(f.revert(),f.getChildren(!0,!0,!1).forEach(function(d){return c.splice(c.indexOf(d),1)}));for(c.map(function(d){return{g:d._dur||d._delay||d._sat&&!d._sat.vars.immediateRender?d.globalTime(0):-1/0,t:d}}).sort(function(d,p){return p.g-d.g||-1/0}).forEach(function(d){return d.t.revert(n)}),u=a.data.length;u--;)f=a.data[u],f instanceof gi?f.data!=="nested"&&(f.scrollTrigger&&f.scrollTrigger.revert(),f.kill()):!(f instanceof wn)&&f.revert&&f.revert(n);a._r.forEach(function(d){return d(n,a)}),a.isReverted=!0}():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),r)for(var l=qa.length;l--;)qa[l].id===this.id&&qa.splice(l,1)},e.revert=function(n){this.kill(n||{})},i}(),OI=function(){function i(t){this.contexts=[],this.scope=t,ln&&ln.data.push(this)}var e=i.prototype;return e.add=function(n,r,a){is(n)||(n={matches:n});var l=new IM(0,a||this.scope),c=l.conditions={},u,f,d;ln&&!l.selector&&(l.selector=ln.selector),this.contexts.push(l),r=l.add("onMatch",r),l.queries=n;for(f in n)f==="all"?d=1:(u=Vr.matchMedia(n[f]),u&&(qa.indexOf(l)<0&&qa.push(l),(c[f]=u.matches)&&(d=1),u.addListener?u.addListener(km):u.addEventListener("change",km)));return d&&r(l,function(p){return l.add(null,p)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),gh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return gM(r)})},timeline:function(e){return new gi(e)},getTweensOf:function(e,t){return fn.getTweensOf(e,t)},getProperty:function(e,t,n,r){Gn(e)&&(e=gr(e)[0]);var a=Wa(e||{}).get,l=n?rM:iM;return n==="native"&&(n=""),e&&(t?l(($i[t]&&$i[t].get||a)(e,t,n,r)):function(c,u,f){return l(($i[c]&&$i[c].get||a)(e,c,u,f))})},quickSetter:function(e,t,n){if(e=gr(e),e.length>1){var r=e.map(function(d){return Di.quickSetter(d,t,n)}),a=r.length;return function(d){for(var p=a;p--;)r[p](d)}}e=e[0]||{};var l=$i[t],c=Wa(e),u=c.harness&&(c.harness.aliases||{})[t]||t,f=l?function(d){var p=new l;el._pt=0,p.init(e,n?d+n:d,el,0,[e]),p.render(1,p),el._pt&&V_(1,el)}:c.set(e,u);return l?f:function(d){return f(e,u,n?d+n:d,c,1)}},quickTo:function(e,t,n){var r,a=Di.to(e,to((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),l=function(u,f,d){return a.resetTo(t,u,f,d)};return l.tween=a,l},isTweening:function(e){return fn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Xa(e.ease,_l.ease)),ux(_l,e||{})},config:function(e){return ux(Ki,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,a=e.defaults,l=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!$i[c]&&!Zi[c]&&Bc(t+" effect requires "+c+" plugin.")}),pp[t]=function(c,u,f){return n(gr(c),xr(u||{},a),f)},l&&(gi.prototype[t]=function(c,u,f){return this.add(pp[t](c,is(u)?u:(f=u)&&{},this),f)})},registerEase:function(e,t){Nt[e]=Xa(t)},parseEase:function(e,t){return arguments.length?Xa(e,t):Nt},getById:function(e){return fn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new gi(e),r,a;for(n.smoothChildTiming=Ci(e.smoothChildTiming),fn.remove(n),n._dp=0,n._time=n._tTime=fn._time,r=fn._first;r;)a=r._next,(t||!(!r._dur&&r instanceof wn&&r.vars.onComplete===r._targets[0]))&&Yr(n,r,r._start-r._delay),r=a;return Yr(fn,n,0),n},context:function(e,t){return e?new IM(e,t):ln},matchMedia:function(e){return new OI(e)},matchMediaRefresh:function(){return qa.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||km()},addEventListener:function(e,t){var n=Zf[e]||(Zf[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zf[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:hI,wrapYoyo:dI,distribute:fM,random:dM,snap:hM,normalize:fI,getUnit:ii,clamp:oI,splitColor:vM,toArray:gr,selector:zm,mapRange:mM,pipe:cI,unitize:uI,interpolate:pI,shuffle:uM},install:JE,effects:pp,ticker:Xi,updateRoot:gi.updateRoot,plugins:$i,globalTimeline:fn,core:{PropTween:Pi,globals:QE,Tween:wn,Timeline:gi,Animation:kc,getCache:Wa,_removeLinkedListItem:Bh,reverting:function(){return ri},context:function(e){return e&&ln&&(ln.data.push(e),e._ctx=ln),ln},suppressOverwrites:function(e){return L_=e}}};Ri("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return gh[i]=wn[i]});Xi.add(gi.updateRoot);el=gh.to({},{duration:0});var UI=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},NI=function(e,t){var n=e._targets,r,a,l;for(r in t)for(a=n.length;a--;)l=e._ptLookup[a][r],l&&(l=l.d)&&(l._pt&&(l=UI(l,r)),l&&l.modifier&&l.modifier(t[r],e,n[a],r))},xp=function(e,t){return{name:e,rawVars:1,init:function(r,a,l){l._onInit=function(c){var u,f;if(Gn(a)&&(u={},Ri(a,function(d){return u[d]=1}),a=u),t){u={};for(f in a)u[f]=t(a[f]);a=u}NI(c,a)}}}},Di=gh.registerPlugin({name:"attr",init:function(e,t,n,r,a){var l,c,u;this.tween=n;for(l in t)u=e.getAttribute(l)||"",c=this.add(e,"setAttribute",(u||0)+"",t[l],r,a,0,0,l),c.op=l,c.b=u,this._props.push(l)},render:function(e,t){for(var n=t._pt;n;)ri?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xp("roundProps",Hm),xp("modifiers"),xp("snap",hM))||gh;wn.version=gi.version=Di.version="3.12.5";ZE=1;D_()&&xl();Nt.Power0;Nt.Power1;Nt.Power2;Nt.Power3;Nt.Power4;Nt.Linear;Nt.Quad;Nt.Cubic;Nt.Quart;Nt.Quint;Nt.Strong;Nt.Elastic;Nt.Back;Nt.SteppedEase;Nt.Bounce;Nt.Sine;Nt.Expo;Nt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _x,ea,ol,W_,Ha,gx,$_,FI=function(){return typeof window<"u"},Ps={},Ia=180/Math.PI,ll=Math.PI/180,Ro=Math.atan2,vx=1e8,X_=/([A-Z])/g,BI=/(left|right|width|margin|padding|x)/i,zI=/[\s,\(]\S/,jr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},HI=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},GI=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},kI=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},DM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},OM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},VI=function(e,t,n){return e.style[t]=n},WI=function(e,t,n){return e.style.setProperty(t,n)},$I=function(e,t,n){return e._gsap[t]=n},XI=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qI=function(e,t,n,r,a){var l=e._gsap;l.scaleX=l.scaleY=n,l.renderTransform(a,l)},YI=function(e,t,n,r,a){var l=e._gsap;l[t]=n,l.renderTransform(a,l)},hn="transform",Li=hn+"Origin",KI=function i(e,t){var n=this,r=this.target,a=r.style,l=r._gsap;if(e in Ps&&a){if(this.tfm=this.tfm||{},e!=="transform")e=jr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return n.tfm[c]=Es(r,c)}):this.tfm[e]=l.x?l[e]:Es(r,e),e===Li&&(this.tfm.zOrigin=l.zOrigin);else return jr.transform.split(",").forEach(function(c){return i.call(n,c,t)});if(this.props.indexOf(hn)>=0)return;l.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Li,t,"")),e=hn}(a||t)&&this.props.push(e,t,a[e])},UM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},jI=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,a,l;for(a=0;a<e.length;a+=3)e[a+1]?t[e[a]]=e[a+2]:e[a+2]?n[e[a]]=e[a+2]:n.removeProperty(e[a].substr(0,2)==="--"?e[a]:e[a].replace(X_,"-$1").toLowerCase());if(this.tfm){for(l in this.tfm)r[l]=this.tfm[l];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),a=$_(),(!a||!a.isStart)&&!n[hn]&&(UM(n),r.zOrigin&&n[Li]&&(n[Li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},NM=function(e,t){var n={target:e,props:[],revert:jI,save:KI};return e._gsap||Di.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},FM,Wm=function(e,t){var n=ea.createElementNS?ea.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ea.createElement(e);return n&&n.style?n:ea.createElement(e)},Qr=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(X_,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,yl(t)||t,1)||""},xx="O,Moz,ms,Ms,Webkit".split(","),yl=function(e,t,n){var r=t||Ha,a=r.style,l=5;if(e in a&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);l--&&!(xx[l]+e in a););return l<0?null:(l===3?"ms":l>=0?xx[l]:"")+e},$m=function(){FI()&&window.document&&(_x=window,ea=_x.document,ol=ea.documentElement,Ha=Wm("div")||{style:{}},Wm("div"),hn=yl(hn),Li=hn+"Origin",Ha.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",FM=!!yl("perspective"),$_=Di.core.reverting,W_=1)},yp=function i(e){var t=Wm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,a=this.style.cssText,l;if(ol.appendChild(t),t.appendChild(this),this.style.display="block",e)try{l=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(l=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),ol.removeChild(t),this.style.cssText=a,l},yx=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},BM=function(e){var t;try{t=e.getBBox()}catch{t=yp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===yp||(t=yp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+yx(e,["x","cx","x1"])||0,y:+yx(e,["y","cy","y1"])||0,width:0,height:0}:t},zM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&BM(e))},no=function(e,t){if(t){var n=e.style,r;t in Ps&&t!==Li&&(t=hn),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(X_,"-$1").toLowerCase())):n.removeAttribute(t)}},ta=function(e,t,n,r,a,l){var c=new Pi(e._pt,t,n,0,1,l?OM:DM);return e._pt=c,c.b=r,c.e=a,e._props.push(n),c},Sx={deg:1,rad:1,turn:1},ZI={grid:1,flex:1},ha=function i(e,t,n,r){var a=parseFloat(n)||0,l=(n+"").trim().substr((a+"").length)||"px",c=Ha.style,u=BI.test(t),f=e.tagName.toLowerCase()==="svg",d=(f?"client":"offset")+(u?"Width":"Height"),p=100,_=r==="px",m=r==="%",S,y,g,v;if(r===l||!a||Sx[r]||Sx[l])return a;if(l!=="px"&&!_&&(a=i(e,t,n,"px")),v=e.getCTM&&zM(e),(m||l==="%")&&(Ps[t]||~t.indexOf("adius")))return S=v?e.getBBox()[u?"width":"height"]:e[d],En(m?a/S*p:a/100*S);if(c[u?"width":"height"]=p+(_?l:r),y=~t.indexOf("adius")||r==="em"&&e.appendChild&&!f?e:e.parentNode,v&&(y=(e.ownerSVGElement||{}).parentNode),(!y||y===ea||!y.appendChild)&&(y=ea.body),g=y._gsap,g&&m&&g.width&&u&&g.time===Xi.time&&!g.uncache)return En(a/g.width*p);if(m&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=p+r,S=e[d],b?e.style[t]=b:no(e,t)}else(m||l==="%")&&!ZI[Qr(y,"display")]&&(c.position=Qr(e,"position")),y===e&&(c.position="static"),y.appendChild(Ha),S=Ha[d],y.removeChild(Ha),c.position="absolute";return u&&m&&(g=Wa(y),g.time=Xi.time,g.width=y[d]),En(_?S*a/p:S&&a?p/S*a:0)},Es=function(e,t,n,r){var a;return W_||$m(),t in jr&&t!=="transform"&&(t=jr[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ps[t]&&t!=="transform"?(a=Wc(e,r),a=t!=="transformOrigin"?a[t]:a.svg?a.origin:xh(Qr(e,Li))+" "+a.zOrigin+"px"):(a=e.style[t],(!a||a==="auto"||r||~(a+"").indexOf("calc("))&&(a=vh[t]&&vh[t](e,t,n)||Qr(e,t)||tM(e,t)||(t==="opacity"?1:0))),n&&!~(a+"").trim().indexOf(" ")?ha(e,t,a,n)+n:a},JI=function(e,t,n,r){if(!n||n==="none"){var a=yl(t,e,1),l=a&&Qr(e,a,1);l&&l!==n?(t=a,n=l):t==="borderColor"&&(n=Qr(e,"borderTopColor"))}var c=new Pi(this._pt,e.style,t,0,1,PM),u=0,f=0,d,p,_,m,S,y,g,v,b,E,w,U;if(c.b=n,c.e=r,n+="",r+="",r==="auto"&&(y=e.style[t],e.style[t]=r,r=Qr(e,t)||r,y?e.style[t]=y:no(e,t)),d=[n,r],yM(d),n=d[0],r=d[1],_=n.match(Qo)||[],U=r.match(Qo)||[],U.length){for(;p=Qo.exec(r);)g=p[0],b=r.substring(u,p.index),S?S=(S+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(S=1),g!==(y=_[f++]||"")&&(m=parseFloat(y)||0,w=y.substr((m+"").length),g.charAt(1)==="="&&(g=al(m,g)+w),v=parseFloat(g),E=g.substr((v+"").length),u=Qo.lastIndex-E.length,E||(E=E||Ki.units[t]||w,u===r.length&&(r+=E,c.e+=E)),w!==E&&(m=ha(e,t,y,E)||0),c._pt={_next:c._pt,p:b||f===1?b:",",s:m,c:v-m,m:S&&S<4||t==="zIndex"?Math.round:0});c.c=u<r.length?r.substring(u,r.length):""}else c.r=t==="display"&&r==="none"?OM:DM;return KE.test(r)&&(c.e=0),this._pt=c,c},Ex={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},QI=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Ex[n]||n,t[1]=Ex[r]||r,t.join(" ")},eD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,a=t.u,l=n._gsap,c,u,f;if(a==="all"||a===!0)r.cssText="",u=1;else for(a=a.split(","),f=a.length;--f>-1;)c=a[f],Ps[c]&&(u=1,c=c==="transformOrigin"?Li:hn),no(n,c);u&&(no(n,hn),l&&(l.svg&&n.removeAttribute("transform"),Wc(n,1),l.uncache=1,UM(r)))}},vh={clearProps:function(e,t,n,r,a){if(a.data!=="isFromStart"){var l=e._pt=new Pi(e._pt,t,n,0,0,eD);return l.u=r,l.pr=-10,l.tween=a,e._props.push(n),1}}},Vc=[1,0,0,1,0,0],HM={},GM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Mx=function(e){var t=Qr(e,hn);return GM(t)?Vc:t.substr(7).match(YE).map(En)},q_=function(e,t){var n=e._gsap||Wa(e),r=e.style,a=Mx(e),l,c,u,f;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,a=[u.a,u.b,u.c,u.d,u.e,u.f],a.join(",")==="1,0,0,1,0,0"?Vc:a):(a===Vc&&!e.offsetParent&&e!==ol&&!n.svg&&(u=r.display,r.display="block",l=e.parentNode,(!l||!e.offsetParent)&&(f=1,c=e.nextElementSibling,ol.appendChild(e)),a=Mx(e),u?r.display=u:no(e,"display"),f&&(c?l.insertBefore(e,c):l?l.appendChild(e):ol.removeChild(e))),t&&a.length>6?[a[0],a[1],a[4],a[5],a[12],a[13]]:a)},Xm=function(e,t,n,r,a,l){var c=e._gsap,u=a||q_(e,!0),f=c.xOrigin||0,d=c.yOrigin||0,p=c.xOffset||0,_=c.yOffset||0,m=u[0],S=u[1],y=u[2],g=u[3],v=u[4],b=u[5],E=t.split(" "),w=parseFloat(E[0])||0,U=parseFloat(E[1])||0,I,R,G,$;n?u!==Vc&&(R=m*g-S*y)&&(G=w*(g/R)+U*(-y/R)+(y*b-g*v)/R,$=w*(-S/R)+U*(m/R)-(m*b-S*v)/R,w=G,U=$):(I=BM(e),w=I.x+(~E[0].indexOf("%")?w/100*I.width:w),U=I.y+(~(E[1]||E[0]).indexOf("%")?U/100*I.height:U)),r||r!==!1&&c.smooth?(v=w-f,b=U-d,c.xOffset=p+(v*m+b*y)-v,c.yOffset=_+(v*S+b*g)-b):c.xOffset=c.yOffset=0,c.xOrigin=w,c.yOrigin=U,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[Li]="0px 0px",l&&(ta(l,c,"xOrigin",f,w),ta(l,c,"yOrigin",d,U),ta(l,c,"xOffset",p,c.xOffset),ta(l,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",w+" "+U)},Wc=function(e,t){var n=e._gsap||new TM(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,a=n.scaleX<0,l="px",c="deg",u=getComputedStyle(e),f=Qr(e,Li)||"0",d,p,_,m,S,y,g,v,b,E,w,U,I,R,G,$,T,O,Y,ce,z,j,K,ne,ie,ae,N,oe,Re,Je,te,ue;return d=p=_=y=g=v=b=E=w=0,m=S=1,n.svg=!!(e.getCTM&&zM(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[hn]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[hn]!=="none"?u[hn]:"")),r.scale=r.rotate=r.translate="none"),R=q_(e,n.svg),n.svg&&(n.uncache?(ie=e.getBBox(),f=n.xOrigin-ie.x+"px "+(n.yOrigin-ie.y)+"px",ne=""):ne=!t&&e.getAttribute("data-svg-origin"),Xm(e,ne||f,!!ne||n.originIsAbsolute,n.smooth!==!1,R)),U=n.xOrigin||0,I=n.yOrigin||0,R!==Vc&&(O=R[0],Y=R[1],ce=R[2],z=R[3],d=j=R[4],p=K=R[5],R.length===6?(m=Math.sqrt(O*O+Y*Y),S=Math.sqrt(z*z+ce*ce),y=O||Y?Ro(Y,O)*Ia:0,b=ce||z?Ro(ce,z)*Ia+y:0,b&&(S*=Math.abs(Math.cos(b*ll))),n.svg&&(d-=U-(U*O+I*ce),p-=I-(U*Y+I*z))):(ue=R[6],Je=R[7],N=R[8],oe=R[9],Re=R[10],te=R[11],d=R[12],p=R[13],_=R[14],G=Ro(ue,Re),g=G*Ia,G&&($=Math.cos(-G),T=Math.sin(-G),ne=j*$+N*T,ie=K*$+oe*T,ae=ue*$+Re*T,N=j*-T+N*$,oe=K*-T+oe*$,Re=ue*-T+Re*$,te=Je*-T+te*$,j=ne,K=ie,ue=ae),G=Ro(-ce,Re),v=G*Ia,G&&($=Math.cos(-G),T=Math.sin(-G),ne=O*$-N*T,ie=Y*$-oe*T,ae=ce*$-Re*T,te=z*T+te*$,O=ne,Y=ie,ce=ae),G=Ro(Y,O),y=G*Ia,G&&($=Math.cos(G),T=Math.sin(G),ne=O*$+Y*T,ie=j*$+K*T,Y=Y*$-O*T,K=K*$-j*T,O=ne,j=ie),g&&Math.abs(g)+Math.abs(y)>359.9&&(g=y=0,v=180-v),m=En(Math.sqrt(O*O+Y*Y+ce*ce)),S=En(Math.sqrt(K*K+ue*ue)),G=Ro(j,K),b=Math.abs(G)>2e-4?G*Ia:0,w=te?1/(te<0?-te:te):0),n.svg&&(ne=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!GM(Qr(e,hn)),ne&&e.setAttribute("transform",ne))),Math.abs(b)>90&&Math.abs(b)<270&&(a?(m*=-1,b+=y<=0?180:-180,y+=y<=0?180:-180):(S*=-1,b+=b<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+l,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+l,n.z=_+l,n.scaleX=En(m),n.scaleY=En(S),n.rotation=En(y)+c,n.rotationX=En(g)+c,n.rotationY=En(v)+c,n.skewX=b+c,n.skewY=E+c,n.transformPerspective=w+l,(n.zOrigin=parseFloat(f.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Li]=xh(f)),n.xOffset=n.yOffset=0,n.force3D=Ki.force3D,n.renderTransform=n.svg?nD:FM?kM:tD,n.uncache=0,n},xh=function(e){return(e=e.split(" "))[0]+" "+e[1]},Sp=function(e,t,n){var r=ii(t);return En(parseFloat(t)+parseFloat(ha(e,"x",n+"px",r)))+r},tD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,kM(e,t)},wa="0deg",nc="0px",Aa=") ",kM=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,u=n.z,f=n.rotation,d=n.rotationY,p=n.rotationX,_=n.skewX,m=n.skewY,S=n.scaleX,y=n.scaleY,g=n.transformPerspective,v=n.force3D,b=n.target,E=n.zOrigin,w="",U=v==="auto"&&e&&e!==1||v===!0;if(E&&(p!==wa||d!==wa)){var I=parseFloat(d)*ll,R=Math.sin(I),G=Math.cos(I),$;I=parseFloat(p)*ll,$=Math.cos(I),l=Sp(b,l,R*$*-E),c=Sp(b,c,-Math.sin(I)*-E),u=Sp(b,u,G*$*-E+E)}g!==nc&&(w+="perspective("+g+Aa),(r||a)&&(w+="translate("+r+"%, "+a+"%) "),(U||l!==nc||c!==nc||u!==nc)&&(w+=u!==nc||U?"translate3d("+l+", "+c+", "+u+") ":"translate("+l+", "+c+Aa),f!==wa&&(w+="rotate("+f+Aa),d!==wa&&(w+="rotateY("+d+Aa),p!==wa&&(w+="rotateX("+p+Aa),(_!==wa||m!==wa)&&(w+="skew("+_+", "+m+Aa),(S!==1||y!==1)&&(w+="scale("+S+", "+y+Aa),b.style[hn]=w||"translate(0, 0)"},nD=function(e,t){var n=t||this,r=n.xPercent,a=n.yPercent,l=n.x,c=n.y,u=n.rotation,f=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,m=n.target,S=n.xOrigin,y=n.yOrigin,g=n.xOffset,v=n.yOffset,b=n.forceCSS,E=parseFloat(l),w=parseFloat(c),U,I,R,G,$;u=parseFloat(u),f=parseFloat(f),d=parseFloat(d),d&&(d=parseFloat(d),f+=d,u+=d),u||f?(u*=ll,f*=ll,U=Math.cos(u)*p,I=Math.sin(u)*p,R=Math.sin(u-f)*-_,G=Math.cos(u-f)*_,f&&(d*=ll,$=Math.tan(f-d),$=Math.sqrt(1+$*$),R*=$,G*=$,d&&($=Math.tan(d),$=Math.sqrt(1+$*$),U*=$,I*=$)),U=En(U),I=En(I),R=En(R),G=En(G)):(U=p,G=_,I=R=0),(E&&!~(l+"").indexOf("px")||w&&!~(c+"").indexOf("px"))&&(E=ha(m,"x",l,"px"),w=ha(m,"y",c,"px")),(S||y||g||v)&&(E=En(E+S-(S*U+y*R)+g),w=En(w+y-(S*I+y*G)+v)),(r||a)&&($=m.getBBox(),E=En(E+r/100*$.width),w=En(w+a/100*$.height)),$="matrix("+U+","+I+","+R+","+G+","+E+","+w+")",m.setAttribute("transform",$),b&&(m.style[hn]=$)},iD=function(e,t,n,r,a){var l=360,c=Gn(a),u=parseFloat(a)*(c&&~a.indexOf("rad")?Ia:1),f=u-r,d=r+f+"deg",p,_;return c&&(p=a.split("_")[1],p==="short"&&(f%=l,f!==f%(l/2)&&(f+=f<0?l:-l)),p==="cw"&&f<0?f=(f+l*vx)%l-~~(f/l)*l:p==="ccw"&&f>0&&(f=(f-l*vx)%l-~~(f/l)*l)),e._pt=_=new Pi(e._pt,t,n,r,f,HI),_.e=d,_.u="deg",e._props.push(n),_},Tx=function(e,t){for(var n in t)e[n]=t[n];return e},rD=function(e,t,n){var r=Tx({},n._gsap),a="perspective,force3D,transformOrigin,svgOrigin",l=n.style,c,u,f,d,p,_,m,S;r.svg?(f=n.getAttribute("transform"),n.setAttribute("transform",""),l[hn]=t,c=Wc(n,1),no(n,hn),n.setAttribute("transform",f)):(f=getComputedStyle(n)[hn],l[hn]=t,c=Wc(n,1),l[hn]=f);for(u in Ps)f=r[u],d=c[u],f!==d&&a.indexOf(u)<0&&(m=ii(f),S=ii(d),p=m!==S?ha(n,u,f,S):parseFloat(f),_=parseFloat(d),e._pt=new Pi(e._pt,c,u,p,_-p,Vm),e._pt.u=S||0,e._props.push(u));Tx(c,r)};Ri("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",a="Left",l=(e<3?[t,n,r,a]:[t+a,t+n,r+n,r+a]).map(function(c){return e<2?i+c:"border"+c+i});vh[e>1?"border"+i:i]=function(c,u,f,d,p){var _,m;if(arguments.length<4)return _=l.map(function(S){return Es(c,S,f)}),m=_.join(" "),m.split(_[0]).length===5?_[0]:m;_=(d+"").split(" "),m={},l.forEach(function(S,y){return m[S]=_[y]=_[y]||_[(y-1)/2|0]}),c.init(u,m,p)}});var VM={name:"css",register:$m,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,a){var l=this._props,c=e.style,u=n.vars.startAt,f,d,p,_,m,S,y,g,v,b,E,w,U,I,R,G;W_||$m(),this.styles=this.styles||NM(e),G=this.styles.props,this.tween=n;for(y in t)if(y!=="autoRound"&&(d=t[y],!($i[y]&&bM(y,t,n,r,e,a)))){if(m=typeof d,S=vh[y],m==="function"&&(d=d.call(n,r,e,a),m=typeof d),m==="string"&&~d.indexOf("random(")&&(d=Hc(d)),S)S(this,e,y,d,n)&&(R=1);else if(y.substr(0,2)==="--")f=(getComputedStyle(e).getPropertyValue(y)+"").trim(),d+="",aa.lastIndex=0,aa.test(f)||(g=ii(f),v=ii(d)),v?g!==v&&(f=ha(e,y,f,v)+v):g&&(d+=g),this.add(c,"setProperty",f,d,r,a,0,0,y),l.push(y),G.push(y,0,c[y]);else if(m!=="undefined"){if(u&&y in u?(f=typeof u[y]=="function"?u[y].call(n,r,e,a):u[y],Gn(f)&&~f.indexOf("random(")&&(f=Hc(f)),ii(f+"")||f==="auto"||(f+=Ki.units[y]||ii(Es(e,y))||""),(f+"").charAt(1)==="="&&(f=Es(e,y))):f=Es(e,y),_=parseFloat(f),b=m==="string"&&d.charAt(1)==="="&&d.substr(0,2),b&&(d=d.substr(2)),p=parseFloat(d),y in jr&&(y==="autoAlpha"&&(_===1&&Es(e,"visibility")==="hidden"&&p&&(_=0),G.push("visibility",0,c.visibility),ta(this,c,"visibility",_?"inherit":"hidden",p?"inherit":"hidden",!p)),y!=="scale"&&y!=="transform"&&(y=jr[y],~y.indexOf(",")&&(y=y.split(",")[0]))),E=y in Ps,E){if(this.styles.save(y),w||(U=e._gsap,U.renderTransform&&!t.parseTransform||Wc(e,t.parseTransform),I=t.smoothOrigin!==!1&&U.smooth,w=this._pt=new Pi(this._pt,c,hn,0,1,U.renderTransform,U,0,-1),w.dep=1),y==="scale")this._pt=new Pi(this._pt,U,"scaleY",U.scaleY,(b?al(U.scaleY,b+p):p)-U.scaleY||0,Vm),this._pt.u=0,l.push("scaleY",y),y+="X";else if(y==="transformOrigin"){G.push(Li,0,c[Li]),d=QI(d),U.svg?Xm(e,d,0,I,0,this):(v=parseFloat(d.split(" ")[2])||0,v!==U.zOrigin&&ta(this,U,"zOrigin",U.zOrigin,v),ta(this,c,y,xh(f),xh(d)));continue}else if(y==="svgOrigin"){Xm(e,d,1,I,0,this);continue}else if(y in HM){iD(this,U,y,_,b?al(_,b+d):d);continue}else if(y==="smoothOrigin"){ta(this,U,"smooth",U.smooth,d);continue}else if(y==="force3D"){U[y]=d;continue}else if(y==="transform"){rD(this,d,e);continue}}else y in c||(y=yl(y)||y);if(E||(p||p===0)&&(_||_===0)&&!zI.test(d)&&y in c)g=(f+"").substr((_+"").length),p||(p=0),v=ii(d)||(y in Ki.units?Ki.units[y]:g),g!==v&&(_=ha(e,y,f,v)),this._pt=new Pi(this._pt,E?U:c,y,_,(b?al(_,b+p):p)-_,!E&&(v==="px"||y==="zIndex")&&t.autoRound!==!1?kI:Vm),this._pt.u=v||0,g!==v&&v!=="%"&&(this._pt.b=f,this._pt.r=GI);else if(y in c)JI.call(this,e,y,f,b?b+d:d);else if(y in e)this.add(e,y,f||e[y],b?b+d:d,r,a);else if(y!=="parseTransform"){U_(y,d);continue}E||(y in c?G.push(y,0,c[y]):G.push(y,1,f||e[y])),l.push(y)}}R&&LM(this)},render:function(e,t){if(t.tween._time||!$_())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Es,aliases:jr,getSetter:function(e,t,n){var r=jr[t];return r&&r.indexOf(",")<0&&(t=r),t in Ps&&t!==Li&&(e._gsap.x||Es(e,"x"))?n&&gx===n?t==="scale"?XI:$I:(gx=n||{})&&(t==="scale"?qI:YI):e.style&&!I_(e.style[t])?VI:~t.indexOf("-")?WI:k_(e,t)},core:{_removeProperty:no,_getMatrix:q_}};Di.utils.checkPrefix=yl;Di.core.getStyleSaver=NM;(function(i,e,t,n){var r=Ri(i+","+e+","+t,function(a){Ps[a]=1});Ri(e,function(a){Ki.units[a]="deg",HM[a]=1}),jr[r[13]]=i+","+e,Ri(n,function(a){var l=a.split(":");jr[l[1]]=r[l[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Ki.units[i]="px"});Di.registerPlugin(VM);var Y_=Di.registerPlugin(VM)||Di;Y_.core.Tween;function bx(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function sD(i,e,t){return e&&bx(i.prototype,e),t&&bx(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Xn,Jf,qi,na,ia,cl,WM,Da,Rc,$M,ws,Rr,XM,qM=function(){return Xn||typeof window<"u"&&(Xn=window.gsap)&&Xn.registerPlugin&&Xn},YM=1,tl=[],Pt=[],es=[],Pc=Date.now,qm=function(e,t){return t},aD=function(){var e=Rc.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,Pt),r.push.apply(r,es),Pt=n,es=r,qm=function(l,c){return t[l](c)}},oa=function(e,t){return~es.indexOf(e)&&es[es.indexOf(e)+1][t]},Lc=function(e){return!!~$M.indexOf(e)},fi=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:r!==!1,capture:!!a})},ui=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},ju="scrollLeft",Zu="scrollTop",Ym=function(){return ws&&ws.isPressed||Pt.cache++},yh=function(e,t){var n=function r(a){if(a||a===0){YM&&(qi.history.scrollRestoration="manual");var l=ws&&ws.isPressed;a=r.v=Math.round(a)||(ws&&ws.iOS?1:0),e(a),r.cacheID=Pt.cache,l&&qm("ss",a)}else(t||Pt.cache!==r.cacheID||qm("ref"))&&(r.cacheID=Pt.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},vi={s:ju,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:yh(function(i){return arguments.length?qi.scrollTo(i,In.sc()):qi.pageXOffset||na[ju]||ia[ju]||cl[ju]||0})},In={s:Zu,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:vi,sc:yh(function(i){return arguments.length?qi.scrollTo(vi.sc(),i):qi.pageYOffset||na[Zu]||ia[Zu]||cl[Zu]||0})},wi=function(e,t){return(t&&t._ctx&&t._ctx.selector||Xn.utils.toArray)(e)[0]||(typeof e=="string"&&Xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},da=function(e,t){var n=t.s,r=t.sc;Lc(e)&&(e=na.scrollingElement||ia);var a=Pt.indexOf(e),l=r===In.sc?1:2;!~a&&(a=Pt.push(e)-1),Pt[a+l]||fi(e,"scroll",Ym);var c=Pt[a+l],u=c||(Pt[a+l]=yh(oa(e,n),!0)||(Lc(e)?r:yh(function(f){return arguments.length?e[n]=f:e[n]})));return u.target=e,c||(u.smooth=Xn.getProperty(e,"scrollBehavior")==="smooth"),u},Km=function(e,t,n){var r=e,a=e,l=Pc(),c=l,u=t||50,f=Math.max(500,u*3),d=function(S,y){var g=Pc();y||g-l>u?(a=r,r=S,c=l,l=g):n?r+=S:r=a+(S-a)/(g-c)*(l-c)},p=function(){a=r=n?0:r,c=l=0},_=function(S){var y=c,g=a,v=Pc();return(S||S===0)&&S!==r&&d(S),l===c||v-c>f?0:(r+(n?g:-g))/((n?v:l)-y)*1e3};return{update:d,reset:p,getVelocity:_}},ic=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},KM=function(){Rc=Xn.core.globals().ScrollTrigger,Rc&&Rc.core&&aD()},jM=function(e){return Xn=e||qM(),!Jf&&Xn&&typeof document<"u"&&document.body&&(qi=window,na=document,ia=na.documentElement,cl=na.body,$M=[qi,na,ia,cl],Xn.utils.clamp,XM=Xn.core.context||function(){},Da="onpointerenter"in cl?"pointer":"mouse",WM=Mn.isTouch=qi.matchMedia&&qi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in qi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Rr=Mn.eventTypes=("ontouchstart"in ia?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ia?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return YM=0},500),KM(),Jf=1),Jf};vi.op=In;Pt.cache=0;var Mn=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Jf||jM(Xn)||console.warn("Please gsap.registerPlugin(Observer)"),Rc||KM();var r=n.tolerance,a=n.dragMinimum,l=n.type,c=n.target,u=n.lineHeight,f=n.debounce,d=n.preventDefault,p=n.onStop,_=n.onStopDelay,m=n.ignore,S=n.wheelSpeed,y=n.event,g=n.onDragStart,v=n.onDragEnd,b=n.onDrag,E=n.onPress,w=n.onRelease,U=n.onRight,I=n.onLeft,R=n.onUp,G=n.onDown,$=n.onChangeX,T=n.onChangeY,O=n.onChange,Y=n.onToggleX,ce=n.onToggleY,z=n.onHover,j=n.onHoverEnd,K=n.onMove,ne=n.ignoreCheck,ie=n.isNormalizer,ae=n.onGestureStart,N=n.onGestureEnd,oe=n.onWheel,Re=n.onEnable,Je=n.onDisable,te=n.onClick,ue=n.scrollSpeed,Te=n.capture,Ie=n.allowClicks,Oe=n.lockAxis,Ae=n.onLockAxis;this.target=c=wi(c)||ia,this.vars=n,m&&(m=Xn.utils.toArray(m)),r=r||1e-9,a=a||0,S=S||1,ue=ue||1,l=l||"wheel,touch,pointer",f=f!==!1,u||(u=parseFloat(qi.getComputedStyle(cl).lineHeight)||22);var _t,$e,X,st,Me,ke,Ue,Z=this,et=0,D=0,A=n.passive||!d,q=da(c,vi),me=da(c,In),de=q(),ge=me(),we=~l.indexOf("touch")&&!~l.indexOf("pointer")&&Rr[0]==="pointerdown",be=Lc(c),Se=c.ownerDocument||na,He=[0,0,0],tt=[0,0,0],pe=0,bt=function(){return pe=Pc()},Xe=function(We,Ke){return(Z.event=We)&&m&&~m.indexOf(We.target)||Ke&&we&&We.pointerType!=="touch"||ne&&ne(We,Ke)},at=function(){Z._vx.reset(),Z._vy.reset(),$e.pause(),p&&p(Z)},Ve=function(){var We=Z.deltaX=wx(He),Ke=Z.deltaY=wx(tt),ye=Math.abs(We)>=r,nt=Math.abs(Ke)>=r;O&&(ye||nt)&&O(Z,We,Ke,He,tt),ye&&(U&&Z.deltaX>0&&U(Z),I&&Z.deltaX<0&&I(Z),$&&$(Z),Y&&Z.deltaX<0!=et<0&&Y(Z),et=Z.deltaX,He[0]=He[1]=He[2]=0),nt&&(G&&Z.deltaY>0&&G(Z),R&&Z.deltaY<0&&R(Z),T&&T(Z),ce&&Z.deltaY<0!=D<0&&ce(Z),D=Z.deltaY,tt[0]=tt[1]=tt[2]=0),(st||X)&&(K&&K(Z),X&&(b(Z),X=!1),st=!1),ke&&!(ke=!1)&&Ae&&Ae(Z),Me&&(oe(Z),Me=!1),_t=0},De=function(We,Ke,ye){He[ye]+=We,tt[ye]+=Ke,Z._vx.update(We),Z._vy.update(Ke),f?_t||(_t=requestAnimationFrame(Ve)):Ve()},ot=function(We,Ke){Oe&&!Ue&&(Z.axis=Ue=Math.abs(We)>Math.abs(Ke)?"x":"y",ke=!0),Ue!=="y"&&(He[2]+=We,Z._vx.update(We,!0)),Ue!=="x"&&(tt[2]+=Ke,Z._vy.update(Ke,!0)),f?_t||(_t=requestAnimationFrame(Ve)):Ve()},gt=function(We){if(!Xe(We,1)){We=ic(We,d);var Ke=We.clientX,ye=We.clientY,nt=Ke-Z.x,Qe=ye-Z.y,ft=Z.isDragging;Z.x=Ke,Z.y=ye,(ft||Math.abs(Z.startX-Ke)>=a||Math.abs(Z.startY-ye)>=a)&&(b&&(X=!0),ft||(Z.isDragging=!0),ot(nt,Qe),ft||g&&g(Z))}},It=Z.onPress=function(qe){Xe(qe,1)||qe&&qe.button||(Z.axis=Ue=null,$e.pause(),Z.isPressed=!0,qe=ic(qe),et=D=0,Z.startX=Z.x=qe.clientX,Z.startY=Z.y=qe.clientY,Z._vx.reset(),Z._vy.reset(),fi(ie?c:Se,Rr[1],gt,A,!0),Z.deltaX=Z.deltaY=0,E&&E(Z))},Pe=Z.onRelease=function(qe){if(!Xe(qe,1)){ui(ie?c:Se,Rr[1],gt,!0);var We=!isNaN(Z.y-Z.startY),Ke=Z.isDragging,ye=Ke&&(Math.abs(Z.x-Z.startX)>3||Math.abs(Z.y-Z.startY)>3),nt=ic(qe);!ye&&We&&(Z._vx.reset(),Z._vy.reset(),d&&Ie&&Xn.delayedCall(.08,function(){if(Pc()-pe>300&&!qe.defaultPrevented){if(qe.target.click)qe.target.click();else if(Se.createEvent){var Qe=Se.createEvent("MouseEvents");Qe.initMouseEvent("click",!0,!0,qi,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),qe.target.dispatchEvent(Qe)}}})),Z.isDragging=Z.isGesturing=Z.isPressed=!1,p&&Ke&&!ie&&$e.restart(!0),v&&Ke&&v(Z),w&&w(Z,ye)}},Ct=function(We){return We.touches&&We.touches.length>1&&(Z.isGesturing=!0)&&ae(We,Z.isDragging)},F=function(){return(Z.isGesturing=!1)||N(Z)},ve=function(We){if(!Xe(We)){var Ke=q(),ye=me();De((Ke-de)*ue,(ye-ge)*ue,1),de=Ke,ge=ye,p&&$e.restart(!0)}},xe=function(We){if(!Xe(We)){We=ic(We,d),oe&&(Me=!0);var Ke=(We.deltaMode===1?u:We.deltaMode===2?qi.innerHeight:1)*S;De(We.deltaX*Ke,We.deltaY*Ke,0),p&&!ie&&$e.restart(!0)}},Ne=function(We){if(!Xe(We)){var Ke=We.clientX,ye=We.clientY,nt=Ke-Z.x,Qe=ye-Z.y;Z.x=Ke,Z.y=ye,st=!0,p&&$e.restart(!0),(nt||Qe)&&ot(nt,Qe)}},Ze=function(We){Z.event=We,z(Z)},vt=function(We){Z.event=We,j(Z)},Dt=function(We){return Xe(We)||ic(We,d)&&te(Z)};$e=Z._dc=Xn.delayedCall(_||.25,at).pause(),Z.deltaX=Z.deltaY=0,Z._vx=Km(0,50,!0),Z._vy=Km(0,50,!0),Z.scrollX=q,Z.scrollY=me,Z.isDragging=Z.isGesturing=Z.isPressed=!1,XM(this),Z.enable=function(qe){return Z.isEnabled||(fi(be?Se:c,"scroll",Ym),l.indexOf("scroll")>=0&&fi(be?Se:c,"scroll",ve,A,Te),l.indexOf("wheel")>=0&&fi(c,"wheel",xe,A,Te),(l.indexOf("touch")>=0&&WM||l.indexOf("pointer")>=0)&&(fi(c,Rr[0],It,A,Te),fi(Se,Rr[2],Pe),fi(Se,Rr[3],Pe),Ie&&fi(c,"click",bt,!0,!0),te&&fi(c,"click",Dt),ae&&fi(Se,"gesturestart",Ct),N&&fi(Se,"gestureend",F),z&&fi(c,Da+"enter",Ze),j&&fi(c,Da+"leave",vt),K&&fi(c,Da+"move",Ne)),Z.isEnabled=!0,qe&&qe.type&&It(qe),Re&&Re(Z)),Z},Z.disable=function(){Z.isEnabled&&(tl.filter(function(qe){return qe!==Z&&Lc(qe.target)}).length||ui(be?Se:c,"scroll",Ym),Z.isPressed&&(Z._vx.reset(),Z._vy.reset(),ui(ie?c:Se,Rr[1],gt,!0)),ui(be?Se:c,"scroll",ve,Te),ui(c,"wheel",xe,Te),ui(c,Rr[0],It,Te),ui(Se,Rr[2],Pe),ui(Se,Rr[3],Pe),ui(c,"click",bt,!0),ui(c,"click",Dt),ui(Se,"gesturestart",Ct),ui(Se,"gestureend",F),ui(c,Da+"enter",Ze),ui(c,Da+"leave",vt),ui(c,Da+"move",Ne),Z.isEnabled=Z.isPressed=Z.isDragging=!1,Je&&Je(Z))},Z.kill=Z.revert=function(){Z.disable();var qe=tl.indexOf(Z);qe>=0&&tl.splice(qe,1),ws===Z&&(ws=0)},tl.push(Z),ie&&Lc(c)&&(ws=Z),Z.enable(y)},sD(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Mn.version="3.12.5";Mn.create=function(i){return new Mn(i)};Mn.register=jM;Mn.getAll=function(){return tl.slice()};Mn.getById=function(i){return tl.filter(function(e){return e.vars.id===i})[0]};qM()&&Xn.registerPlugin(Mn);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ge,jo,Ut,un,Pr,an,ZM,Sh,$c,Ic,Sc,Ju,ti,Gh,jm,pi,Ax,Cx,Zo,JM,Ep,QM,di,Zm,eT,tT,Js,Jm,K_,ul,j_,Eh,Qm,Mp,Qu=1,ni=Date.now,Tp=ni(),vr=0,Ec=0,Rx=function(e,t,n){var r=Wi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Px=function(e,t){return t&&(!Wi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},oD=function i(){return Ec&&requestAnimationFrame(i)},Lx=function(){return Gh=1},Ix=function(){return Gh=0},Wr=function(e){return e},Mc=function(e){return Math.round(e*1e5)/1e5||0},nT=function(){return typeof window<"u"},iT=function(){return Ge||nT()&&(Ge=window.gsap)&&Ge.registerPlugin&&Ge},io=function(e){return!!~ZM.indexOf(e)},rT=function(e){return(e==="Height"?j_:Ut["inner"+e])||Pr["client"+e]||an["client"+e]},sT=function(e){return oa(e,"getBoundingClientRect")||(io(e)?function(){return ih.width=Ut.innerWidth,ih.height=j_,ih}:function(){return Ms(e)})},lD=function(e,t,n){var r=n.d,a=n.d2,l=n.a;return(l=oa(e,"getBoundingClientRect"))?function(){return l()[r]}:function(){return(t?rT(a):e["client"+a])||0}},cD=function(e,t){return!t||~es.indexOf(e)?sT(e):function(){return ih}},Zr=function(e,t){var n=t.s,r=t.d2,a=t.d,l=t.a;return Math.max(0,(n="scroll"+r)&&(l=oa(e,n))?l()-sT(e)()[a]:io(e)?(Pr[n]||an[n])-rT(r):e[n]-e["offset"+r])},ef=function(e,t){for(var n=0;n<Zo.length;n+=3)(!t||~t.indexOf(Zo[n+1]))&&e(Zo[n],Zo[n+1],Zo[n+2])},Wi=function(e){return typeof e=="string"},xi=function(e){return typeof e=="function"},Tc=function(e){return typeof e=="number"},Oa=function(e){return typeof e=="object"},rc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},bp=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},Po=Math.abs,aT="left",oT="top",Z_="right",J_="bottom",Ya="width",Ka="height",Dc="Right",Oc="Left",Uc="Top",Nc="Bottom",bn="padding",hr="margin",Sl="Width",Q_="Height",Ln="px",dr=function(e){return Ut.getComputedStyle(e)},uD=function(e){var t=dr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Dx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ms=function(e,t){var n=t&&dr(e)[jm]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ge.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},Mh=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},lT=function(e){var t=[],n=e.labels,r=e.duration(),a;for(a in n)t.push(n[a]/r);return t},fD=function(e){return function(t){return Ge.utils.snap(lT(e),t)}},eg=function(e){var t=Ge.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,a){return r-a});return n?function(r,a,l){l===void 0&&(l=.001);var c;if(!a)return t(r);if(a>0){for(r-=l,c=0;c<n.length;c++)if(n[c]>=r)return n[c];return n[c-1]}else for(c=n.length,r+=l;c--;)if(n[c]<=r)return n[c];return n[0]}:function(r,a,l){l===void 0&&(l=.001);var c=t(r);return!a||Math.abs(c-r)<l||c-r<0==a<0?c:t(a<0?r-e:r+e)}},hD=function(e){return function(t,n){return eg(lT(e))(t,n.direction)}},tf=function(e,t,n,r){return n.split(",").forEach(function(a){return e(t,a,r)})},Bn=function(e,t,n,r,a){return e.addEventListener(t,n,{passive:!r,capture:!!a})},Fn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},nf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ox={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rf={toggleActions:"play",anticipatePin:0},Th={top:0,left:0,center:.5,bottom:1,right:1},Qf=function(e,t){if(Wi(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in Th?Th[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sf=function(e,t,n,r,a,l,c,u){var f=a.startColor,d=a.endColor,p=a.fontSize,_=a.indent,m=a.fontWeight,S=un.createElement("div"),y=io(n)||oa(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,v=y?an:n,b=e.indexOf("start")!==-1,E=b?f:d,w="border-color:"+E+";font-size:"+p+";color:"+E+";font-weight:"+m+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return w+="position:"+((g||u)&&y?"fixed;":"absolute;"),(g||u||!y)&&(w+=(r===In?Z_:J_)+":"+(l+parseFloat(_))+"px;"),c&&(w+="box-sizing:border-box;text-align:left;width:"+c.offsetWidth+"px;"),S._isStart=b,S.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),S.style.cssText=w,S.innerText=t||t===0?e+"-"+t:e,v.children[0]?v.insertBefore(S,v.children[0]):v.appendChild(S),S._offset=S["offset"+r.op.d2],eh(S,0,r,b),S},eh=function(e,t,n,r){var a={display:"block"},l=n[r?"os2":"p2"],c=n[r?"p2":"os2"];e._isFlipped=r,a[n.a+"Percent"]=r?-100:0,a[n.a]=r?"1px":0,a["border"+l+Sl]=1,a["border"+c+Sl]=0,a[n.p]=t+"px",Ge.set(e,a)},wt=[],e_={},Xc,Ux=function(){return ni()-vr>34&&(Xc||(Xc=requestAnimationFrame(Cs)))},Lo=function(){(!di||!di.isPressed||di.startX>an.clientWidth)&&(Pt.cache++,di?Xc||(Xc=requestAnimationFrame(Cs)):Cs(),vr||so("scrollStart"),vr=ni())},wp=function(){tT=Ut.innerWidth,eT=Ut.innerHeight},bc=function(){Pt.cache++,!ti&&!QM&&!un.fullscreenElement&&!un.webkitFullscreenElement&&(!Zm||tT!==Ut.innerWidth||Math.abs(Ut.innerHeight-eT)>Ut.innerHeight*.25)&&Sh.restart(!0)},ro={},dD=[],cT=function i(){return Fn(yt,"scrollEnd",i)||Ga(!0)},so=function(e){return ro[e]&&ro[e].map(function(t){return t()})||dD},Vi=[],uT=function(e){for(var t=0;t<Vi.length;t+=5)(!e||Vi[t+4]&&Vi[t+4].query===e)&&(Vi[t].style.cssText=Vi[t+1],Vi[t].getBBox&&Vi[t].setAttribute("transform",Vi[t+2]||""),Vi[t+3].uncache=1)},tg=function(e,t){var n;for(pi=0;pi<wt.length;pi++)n=wt[pi],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Eh=!0,t&&uT(t),t||so("revert")},fT=function(e,t){Pt.cache++,(t||!mi)&&Pt.forEach(function(n){return xi(n)&&n.cacheID++&&(n.rec=0)}),Wi(e)&&(Ut.history.scrollRestoration=K_=e)},mi,ja=0,Nx,pD=function(){if(Nx!==ja){var e=Nx=ja;requestAnimationFrame(function(){return e===ja&&Ga(!0)})}},hT=function(){an.appendChild(ul),j_=!di&&ul.offsetHeight||Ut.innerHeight,an.removeChild(ul)},Fx=function(e){return $c(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Ga=function(e,t){if(vr&&!e&&!Eh){Bn(yt,"scrollEnd",cT);return}hT(),mi=yt.isRefreshing=!0,Pt.forEach(function(r){return xi(r)&&++r.cacheID&&(r.rec=r())});var n=so("refreshInit");JM&&yt.sort(),t||tg(),Pt.forEach(function(r){xi(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),wt.slice(0).forEach(function(r){return r.refresh()}),Eh=!1,wt.forEach(function(r){if(r._subPinOffset&&r.pin){var a=r.vars.horizontal?"offsetWidth":"offsetHeight",l=r.pin[a];r.revert(!0,1),r.adjustPinSpacing(r.pin[a]-l),r.refresh()}}),Qm=1,Fx(!0),wt.forEach(function(r){var a=Zr(r.scroller,r._dir),l=r.vars.end==="max"||r._endClamp&&r.end>a,c=r._startClamp&&r.start>=a;(l||c)&&r.setPositions(c?a-1:r.start,l?Math.max(c?a:r.start+1,a):r.end,!0)}),Fx(!1),Qm=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),Pt.forEach(function(r){xi(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),fT(K_,1),Sh.pause(),ja++,mi=2,Cs(2),wt.forEach(function(r){return xi(r.vars.onRefresh)&&r.vars.onRefresh(r)}),mi=yt.isRefreshing=!1,so("refresh")},t_=0,th=1,Fc,Cs=function(e){if(e===2||!mi&&!Eh){yt.isUpdating=!0,Fc&&Fc.update(0);var t=wt.length,n=ni(),r=n-Tp>=50,a=t&&wt[0].scroll();if(th=t_>a?-1:1,mi||(t_=a),r&&(vr&&!Gh&&n-vr>200&&(vr=0,so("scrollEnd")),Sc=Tp,Tp=n),th<0){for(pi=t;pi-- >0;)wt[pi]&&wt[pi].update(0,r);th=1}else for(pi=0;pi<t;pi++)wt[pi]&&wt[pi].update(0,r);yt.isUpdating=!1}Xc=0},n_=[aT,oT,J_,Z_,hr+Nc,hr+Dc,hr+Uc,hr+Oc,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],nh=n_.concat([Ya,Ka,"boxSizing","max"+Sl,"max"+Q_,"position",hr,bn,bn+Uc,bn+Dc,bn+Nc,bn+Oc]),mD=function(e,t,n){fl(n);var r=e._gsap;if(r.spacerIsNative)fl(r.spacerState);else if(e._gsap.swappedIn){var a=t.parentNode;a&&(a.insertBefore(e,t),a.removeChild(t))}e._gsap.swappedIn=!1},Ap=function(e,t,n,r){if(!e._gsap.swappedIn){for(var a=n_.length,l=t.style,c=e.style,u;a--;)u=n_[a],l[u]=n[u];l.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(l.display="inline-block"),c[J_]=c[Z_]="auto",l.flexBasis=n.flexBasis||"auto",l.overflow="visible",l.boxSizing="border-box",l[Ya]=Mh(e,vi)+Ln,l[Ka]=Mh(e,In)+Ln,l[bn]=c[hr]=c[oT]=c[aT]="0",fl(r),c[Ya]=c["max"+Sl]=n[Ya],c[Ka]=c["max"+Q_]=n[Ka],c[bn]=n[bn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},_D=/([A-Z])/g,fl=function(e){if(e){var t=e.t.style,n=e.length,r=0,a,l;for((e.t._gsap||Ge.core.getCache(e.t)).uncache=1;r<n;r+=2)l=e[r+1],a=e[r],l?t[a]=l:t[a]&&t.removeProperty(a.replace(_D,"-$1").toLowerCase())}},af=function(e){for(var t=nh.length,n=e.style,r=[],a=0;a<t;a++)r.push(nh[a],n[nh[a]]);return r.t=e,r},gD=function(e,t,n){for(var r=[],a=e.length,l=n?8:0,c;l<a;l+=2)c=e[l],r.push(c,c in t?t[c]:e[l+1]);return r.t=e.t,r},ih={left:0,top:0},Bx=function(e,t,n,r,a,l,c,u,f,d,p,_,m,S){xi(e)&&(e=e(u)),Wi(e)&&e.substr(0,3)==="max"&&(e=_+(e.charAt(4)==="="?Qf("0"+e.substr(3),n):0));var y=m?m.time():0,g,v,b;if(m&&m.seek(0),isNaN(e)||(e=+e),Tc(e))m&&(e=Ge.utils.mapRange(m.scrollTrigger.start,m.scrollTrigger.end,0,_,e)),c&&eh(c,n,r,!0);else{xi(t)&&(t=t(u));var E=(e||"0").split(" "),w,U,I,R;b=wi(t,u)||an,w=Ms(b)||{},(!w||!w.left&&!w.top)&&dr(b).display==="none"&&(R=b.style.display,b.style.display="block",w=Ms(b),R?b.style.display=R:b.style.removeProperty("display")),U=Qf(E[0],w[r.d]),I=Qf(E[1]||"0",n),e=w[r.p]-f[r.p]-d+U+a-I,c&&eh(c,I,r,n-I<20||c._isStart&&I>20),n-=n-I}if(S&&(u[S]=e||-.001,e<0&&(e=0)),l){var G=e+n,$=l._isStart;g="scroll"+r.d2,eh(l,G,r,$&&G>20||!$&&(p?Math.max(an[g],Pr[g]):l.parentNode[g])<=G+1),p&&(f=Ms(c),p&&(l.style[r.op.p]=f[r.op.p]-r.op.m-l._offset+Ln))}return m&&b&&(g=Ms(b),m.seek(_),v=Ms(b),m._caScrollDist=g[r.p]-v[r.p],e=e/m._caScrollDist*_),m&&m.seek(y),m?e:Math.round(e)},vD=/(webkit|moz|length|cssText|inset)/i,zx=function(e,t,n,r){if(e.parentNode!==t){var a=e.style,l,c;if(t===an){e._stOrig=a.cssText,c=dr(e);for(l in c)!+l&&!vD.test(l)&&c[l]&&typeof a[l]=="string"&&l!=="0"&&(a[l]=c[l]);a.top=n,a.left=r}else a.cssText=e._stOrig;Ge.core.getCache(e).uncache=1,t.appendChild(e)}},dT=function(e,t,n){var r=t,a=r;return function(l){var c=Math.round(e());return c!==r&&c!==a&&Math.abs(c-r)>3&&Math.abs(c-a)>3&&(l=c,n&&n()),a=r,r=l,l}},of=function(e,t,n){var r={};r[t.p]="+="+n,Ge.set(e,r)},Hx=function(e,t){var n=da(e,t),r="_scroll"+t.p2,a=function l(c,u,f,d,p){var _=l.tween,m=u.onComplete,S={};f=f||n();var y=dT(n,f,function(){_.kill(),l.tween=0});return p=d&&p||0,d=d||c-f,_&&_.kill(),u[r]=c,u.inherit=!1,u.modifiers=S,S[r]=function(){return y(f+d*_.ratio+p*_.ratio*_.ratio)},u.onUpdate=function(){Pt.cache++,l.tween&&Cs()},u.onComplete=function(){l.tween=0,m&&m.call(_)},_=l.tween=Ge.to(e,u),_};return e[r]=n,n.wheelHandler=function(){return a.tween&&a.tween.kill()&&(a.tween=0)},Bn(e,"wheel",n.wheelHandler),yt.isTouch&&Bn(e,"touchmove",n.wheelHandler),a},yt=function(){function i(t,n){jo||i.register(Ge)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Jm(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ec){this.update=this.refresh=this.kill=Wr;return}n=Dx(Wi(n)||Tc(n)||n.nodeType?{trigger:n}:n,rf);var a=n,l=a.onUpdate,c=a.toggleClass,u=a.id,f=a.onToggle,d=a.onRefresh,p=a.scrub,_=a.trigger,m=a.pin,S=a.pinSpacing,y=a.invalidateOnRefresh,g=a.anticipatePin,v=a.onScrubComplete,b=a.onSnapComplete,E=a.once,w=a.snap,U=a.pinReparent,I=a.pinSpacer,R=a.containerAnimation,G=a.fastScrollEnd,$=a.preventOverlaps,T=n.horizontal||n.containerAnimation&&n.horizontal!==!1?vi:In,O=!p&&p!==0,Y=wi(n.scroller||Ut),ce=Ge.core.getCache(Y),z=io(Y),j=("pinType"in n?n.pinType:oa(Y,"pinType")||z&&"fixed")==="fixed",K=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],ne=O&&n.toggleActions.split(" "),ie="markers"in n?n.markers:rf.markers,ae=z?0:parseFloat(dr(Y)["border"+T.p2+Sl])||0,N=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Re=lD(Y,z,T),Je=cD(Y,z),te=0,ue=0,Te=0,Ie=da(Y,T),Oe,Ae,_t,$e,X,st,Me,ke,Ue,Z,et,D,A,q,me,de,ge,we,be,Se,He,tt,pe,bt,Xe,at,Ve,De,ot,gt,It,Pe,Ct,F,ve,xe,Ne,Ze,vt;if(N._startClamp=N._endClamp=!1,N._dir=T,g*=45,N.scroller=Y,N.scroll=R?R.time.bind(R):Ie,$e=Ie(),N.vars=n,r=r||n.animation,"refreshPriority"in n&&(JM=1,n.refreshPriority===-9999&&(Fc=N)),ce.tweenScroll=ce.tweenScroll||{top:Hx(Y,In),left:Hx(Y,vi)},N.tweenTo=Oe=ce.tweenScroll[T.p],N.scrubDuration=function(ye){Ct=Tc(ye)&&ye,Ct?Pe?Pe.duration(ye):Pe=Ge.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ct,paused:!0,onComplete:function(){return v&&v(N)}}):(Pe&&Pe.progress(1).kill(),Pe=0)},r&&(r.vars.lazy=!1,r._initted&&!N.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),N.animation=r.pause(),r.scrollTrigger=N,N.scrubDuration(p),gt=0,u||(u=r.vars.id)),w&&((!Oa(w)||w.push)&&(w={snapTo:w}),"scrollBehavior"in an.style&&Ge.set(z?[an,Pr]:Y,{scrollBehavior:"auto"}),Pt.forEach(function(ye){return xi(ye)&&ye.target===(z?un.scrollingElement||Pr:Y)&&(ye.smooth=!1)}),_t=xi(w.snapTo)?w.snapTo:w.snapTo==="labels"?fD(r):w.snapTo==="labelsDirectional"?hD(r):w.directional!==!1?function(ye,nt){return eg(w.snapTo)(ye,ni()-ue<500?0:nt.direction)}:Ge.utils.snap(w.snapTo),F=w.duration||{min:.1,max:2},F=Oa(F)?Ic(F.min,F.max):Ic(F,F),ve=Ge.delayedCall(w.delay||Ct/2||.1,function(){var ye=Ie(),nt=ni()-ue<500,Qe=Oe.tween;if((nt||Math.abs(N.getVelocity())<10)&&!Qe&&!Gh&&te!==ye){var ft=(ye-st)/q,tn=r&&!O?r.totalProgress():ft,St=nt?0:(tn-It)/(ni()-Sc)*1e3||0,$t=Ge.utils.clamp(-ft,1-ft,Po(St/2)*St/.185),xn=ft+(w.inertia===!1?0:$t),Kt,Xt,zt=w,jn=zt.onStart,L=zt.onInterrupt,V=zt.onComplete;if(Kt=_t(xn,N),Tc(Kt)||(Kt=xn),Xt=Math.round(st+Kt*q),ye<=Me&&ye>=st&&Xt!==ye){if(Qe&&!Qe._initted&&Qe.data<=Po(Xt-ye))return;w.inertia===!1&&($t=Kt-ft),Oe(Xt,{duration:F(Po(Math.max(Po(xn-tn),Po(Kt-tn))*.185/St/.05||0)),ease:w.ease||"power3",data:Po(Xt-ye),onInterrupt:function(){return ve.restart(!0)&&L&&L(N)},onComplete:function(){N.update(),te=Ie(),r&&(Pe?Pe.resetTo("totalProgress",Kt,r._tTime/r._tDur):r.progress(Kt)),gt=It=r&&!O?r.totalProgress():N.progress,b&&b(N),V&&V(N)}},ye,$t*q,Xt-ye-$t*q),jn&&jn(N,Oe.tween)}}else N.isActive&&te!==ye&&ve.restart(!0)}).pause()),u&&(e_[u]=N),_=N.trigger=wi(_||m!==!0&&m),vt=_&&_._gsap&&_._gsap.stRevert,vt&&(vt=vt(N)),m=m===!0?_:wi(m),Wi(c)&&(c={targets:_,className:c}),m&&(S===!1||S===hr||(S=!S&&m.parentNode&&m.parentNode.style&&dr(m.parentNode).display==="flex"?!1:bn),N.pin=m,Ae=Ge.core.getCache(m),Ae.spacer?me=Ae.pinState:(I&&(I=wi(I),I&&!I.nodeType&&(I=I.current||I.nativeElement),Ae.spacerIsNative=!!I,I&&(Ae.spacerState=af(I))),Ae.spacer=we=I||un.createElement("div"),we.classList.add("pin-spacer"),u&&we.classList.add("pin-spacer-"+u),Ae.pinState=me=af(m)),n.force3D!==!1&&Ge.set(m,{force3D:!0}),N.spacer=we=Ae.spacer,ot=dr(m),bt=ot[S+T.os2],Se=Ge.getProperty(m),He=Ge.quickSetter(m,T.a,Ln),Ap(m,we,ot),ge=af(m)),ie){D=Oa(ie)?Dx(ie,Ox):Ox,Z=sf("scroller-start",u,Y,T,D,0),et=sf("scroller-end",u,Y,T,D,0,Z),be=Z["offset"+T.op.d2];var Dt=wi(oa(Y,"content")||Y);ke=this.markerStart=sf("start",u,Dt,T,D,be,0,R),Ue=this.markerEnd=sf("end",u,Dt,T,D,be,0,R),R&&(Ze=Ge.quickSetter([ke,Ue],T.a,Ln)),!j&&!(es.length&&oa(Y,"fixedMarkers")===!0)&&(uD(z?an:Y),Ge.set([Z,et],{force3D:!0}),at=Ge.quickSetter(Z,T.a,Ln),De=Ge.quickSetter(et,T.a,Ln))}if(R){var qe=R.vars.onUpdate,We=R.vars.onUpdateParams;R.eventCallback("onUpdate",function(){N.update(0,0,1),qe&&qe.apply(R,We||[])})}if(N.previous=function(){return wt[wt.indexOf(N)-1]},N.next=function(){return wt[wt.indexOf(N)+1]},N.revert=function(ye,nt){if(!nt)return N.kill(!0);var Qe=ye!==!1||!N.enabled,ft=ti;Qe!==N.isReverted&&(Qe&&(xe=Math.max(Ie(),N.scroll.rec||0),Te=N.progress,Ne=r&&r.progress()),ke&&[ke,Ue,Z,et].forEach(function(tn){return tn.style.display=Qe?"none":"block"}),Qe&&(ti=N,N.update(Qe)),m&&(!U||!N.isActive)&&(Qe?mD(m,we,me):Ap(m,we,dr(m),Xe)),Qe||N.update(Qe),ti=ft,N.isReverted=Qe)},N.refresh=function(ye,nt,Qe,ft){if(!((ti||!N.enabled)&&!nt)){if(m&&ye&&vr){Bn(i,"scrollEnd",cT);return}!mi&&oe&&oe(N),ti=N,Oe.tween&&!Qe&&(Oe.tween.kill(),Oe.tween=0),Pe&&Pe.pause(),y&&r&&r.revert({kill:!1}).invalidate(),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var tn=Re(),St=Je(),$t=R?R.duration():Zr(Y,T),xn=q<=.01,Kt=0,Xt=ft||0,zt=Oa(Qe)?Qe.end:n.end,jn=n.endTrigger||_,L=Oa(Qe)?Qe.start:n.start||(n.start===0||!_?0:m?"0 0":"0 100%"),V=N.pinnedContainer=n.pinnedContainer&&wi(n.pinnedContainer,N),ee=_&&Math.max(0,wt.indexOf(N))||0,Q=ee,J,Ee,Fe,it,Be,Ye,rt,ht,jt,pn,Ft,kn,Gt;for(ie&&Oa(Qe)&&(kn=Ge.getProperty(Z,T.p),Gt=Ge.getProperty(et,T.p));Q--;)Ye=wt[Q],Ye.end||Ye.refresh(0,1)||(ti=N),rt=Ye.pin,rt&&(rt===_||rt===m||rt===V)&&!Ye.isReverted&&(pn||(pn=[]),pn.unshift(Ye),Ye.revert(!0,!0)),Ye!==wt[Q]&&(ee--,Q--);for(xi(L)&&(L=L(N)),L=Rx(L,"start",N),st=Bx(L,_,tn,T,Ie(),ke,Z,N,St,ae,j,$t,R,N._startClamp&&"_startClamp")||(m?-.001:0),xi(zt)&&(zt=zt(N)),Wi(zt)&&!zt.indexOf("+=")&&(~zt.indexOf(" ")?zt=(Wi(L)?L.split(" ")[0]:"")+zt:(Kt=Qf(zt.substr(2),tn),zt=Wi(L)?L:(R?Ge.utils.mapRange(0,R.duration(),R.scrollTrigger.start,R.scrollTrigger.end,st):st)+Kt,jn=_)),zt=Rx(zt,"end",N),Me=Math.max(st,Bx(zt||(jn?"100% 0":$t),jn,tn,T,Ie()+Kt,Ue,et,N,St,ae,j,$t,R,N._endClamp&&"_endClamp"))||-.001,Kt=0,Q=ee;Q--;)Ye=wt[Q],rt=Ye.pin,rt&&Ye.start-Ye._pinPush<=st&&!R&&Ye.end>0&&(J=Ye.end-(N._startClamp?Math.max(0,Ye.start):Ye.start),(rt===_&&Ye.start-Ye._pinPush<st||rt===V)&&isNaN(L)&&(Kt+=J*(1-Ye.progress)),rt===m&&(Xt+=J));if(st+=Kt,Me+=Kt,N._startClamp&&(N._startClamp+=Kt),N._endClamp&&!mi&&(N._endClamp=Me||-.001,Me=Math.min(Me,Zr(Y,T))),q=Me-st||(st-=.01)&&.001,xn&&(Te=Ge.utils.clamp(0,1,Ge.utils.normalize(st,Me,xe))),N._pinPush=Xt,ke&&Kt&&(J={},J[T.a]="+="+Kt,V&&(J[T.p]="-="+Ie()),Ge.set([ke,Ue],J)),m&&!(Qm&&N.end>=Zr(Y,T)))J=dr(m),it=T===In,Fe=Ie(),tt=parseFloat(Se(T.a))+Xt,!$t&&Me>1&&(Ft=(z?un.scrollingElement||Pr:Y).style,Ft={style:Ft,value:Ft["overflow"+T.a.toUpperCase()]},z&&dr(an)["overflow"+T.a.toUpperCase()]!=="scroll"&&(Ft.style["overflow"+T.a.toUpperCase()]="scroll")),Ap(m,we,J),ge=af(m),Ee=Ms(m,!0),ht=j&&da(Y,it?vi:In)(),S?(Xe=[S+T.os2,q+Xt+Ln],Xe.t=we,Q=S===bn?Mh(m,T)+q+Xt:0,Q&&(Xe.push(T.d,Q+Ln),we.style.flexBasis!=="auto"&&(we.style.flexBasis=Q+Ln)),fl(Xe),V&&wt.forEach(function(dt){dt.pin===V&&dt.vars.pinSpacing!==!1&&(dt._subPinOffset=!0)}),j&&Ie(xe)):(Q=Mh(m,T),Q&&we.style.flexBasis!=="auto"&&(we.style.flexBasis=Q+Ln)),j&&(Be={top:Ee.top+(it?Fe-st:ht)+Ln,left:Ee.left+(it?ht:Fe-st)+Ln,boxSizing:"border-box",position:"fixed"},Be[Ya]=Be["max"+Sl]=Math.ceil(Ee.width)+Ln,Be[Ka]=Be["max"+Q_]=Math.ceil(Ee.height)+Ln,Be[hr]=Be[hr+Uc]=Be[hr+Dc]=Be[hr+Nc]=Be[hr+Oc]="0",Be[bn]=J[bn],Be[bn+Uc]=J[bn+Uc],Be[bn+Dc]=J[bn+Dc],Be[bn+Nc]=J[bn+Nc],Be[bn+Oc]=J[bn+Oc],de=gD(me,Be,U),mi&&Ie(0)),r?(jt=r._initted,Ep(1),r.render(r.duration(),!0,!0),pe=Se(T.a)-tt+q+Xt,Ve=Math.abs(q-pe)>1,j&&Ve&&de.splice(de.length-2,2),r.render(0,!0,!0),jt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Ep(0)):pe=q,Ft&&(Ft.value?Ft.style["overflow"+T.a.toUpperCase()]=Ft.value:Ft.style.removeProperty("overflow-"+T.a));else if(_&&Ie()&&!R)for(Ee=_.parentNode;Ee&&Ee!==an;)Ee._pinOffset&&(st-=Ee._pinOffset,Me-=Ee._pinOffset),Ee=Ee.parentNode;pn&&pn.forEach(function(dt){return dt.revert(!1,!0)}),N.start=st,N.end=Me,$e=X=mi?xe:Ie(),!R&&!mi&&($e<xe&&Ie(xe),N.scroll.rec=0),N.revert(!1,!0),ue=ni(),ve&&(te=-1,ve.restart(!0)),ti=0,r&&O&&(r._initted||Ne)&&r.progress()!==Ne&&r.progress(Ne||0,!0).render(r.time(),!0,!0),(xn||Te!==N.progress||R||y)&&(r&&!O&&r.totalProgress(R&&st<-.001&&!Te?Ge.utils.normalize(st,Me,0):Te,!0),N.progress=xn||($e-st)/q===Te?0:Te),m&&S&&(we._pinOffset=Math.round(N.progress*pe)),Pe&&Pe.invalidate(),isNaN(kn)||(kn-=Ge.getProperty(Z,T.p),Gt-=Ge.getProperty(et,T.p),of(Z,T,kn),of(ke,T,kn-(ft||0)),of(et,T,Gt),of(Ue,T,Gt-(ft||0))),xn&&!mi&&N.update(),d&&!mi&&!A&&(A=!0,d(N),A=!1)}},N.getVelocity=function(){return(Ie()-X)/(ni()-Sc)*1e3||0},N.endAnimation=function(){rc(N.callbackAnimation),r&&(Pe?Pe.progress(1):r.paused()?O||rc(r,N.direction<0,1):rc(r,r.reversed()))},N.labelToScroll=function(ye){return r&&r.labels&&(st||N.refresh()||st)+r.labels[ye]/r.duration()*q||0},N.getTrailing=function(ye){var nt=wt.indexOf(N),Qe=N.direction>0?wt.slice(0,nt).reverse():wt.slice(nt+1);return(Wi(ye)?Qe.filter(function(ft){return ft.vars.preventOverlaps===ye}):Qe).filter(function(ft){return N.direction>0?ft.end<=st:ft.start>=Me})},N.update=function(ye,nt,Qe){if(!(R&&!Qe&&!ye)){var ft=mi===!0?xe:N.scroll(),tn=ye?0:(ft-st)/q,St=tn<0?0:tn>1?1:tn||0,$t=N.progress,xn,Kt,Xt,zt,jn,L,V,ee;if(nt&&(X=$e,$e=R?Ie():ft,w&&(It=gt,gt=r&&!O?r.totalProgress():St)),g&&m&&!ti&&!Qu&&vr&&(!St&&st<ft+(ft-X)/(ni()-Sc)*g?St=1e-4:St===1&&Me>ft+(ft-X)/(ni()-Sc)*g&&(St=.9999)),St!==$t&&N.enabled){if(xn=N.isActive=!!St&&St<1,Kt=!!$t&&$t<1,L=xn!==Kt,jn=L||!!St!=!!$t,N.direction=St>$t?1:-1,N.progress=St,jn&&!ti&&(Xt=St&&!$t?0:St===1?1:$t===1?2:3,O&&(zt=!L&&ne[Xt+1]!=="none"&&ne[Xt+1]||ne[Xt],ee=r&&(zt==="complete"||zt==="reset"||zt in r))),$&&(L||ee)&&(ee||p||!r)&&(xi($)?$(N):N.getTrailing($).forEach(function(Fe){return Fe.endAnimation()})),O||(Pe&&!ti&&!Qu?(Pe._dp._time-Pe._start!==Pe._time&&Pe.render(Pe._dp._time-Pe._start),Pe.resetTo?Pe.resetTo("totalProgress",St,r._tTime/r._tDur):(Pe.vars.totalProgress=St,Pe.invalidate().restart())):r&&r.totalProgress(St,!!(ti&&(ue||ye)))),m){if(ye&&S&&(we.style[S+T.os2]=bt),!j)He(Mc(tt+pe*St));else if(jn){if(V=!ye&&St>$t&&Me+1>ft&&ft+1>=Zr(Y,T),U)if(!ye&&(xn||V)){var Q=Ms(m,!0),J=ft-st;zx(m,an,Q.top+(T===In?J:0)+Ln,Q.left+(T===In?0:J)+Ln)}else zx(m,we);fl(xn||V?de:ge),Ve&&St<1&&xn||He(tt+(St===1&&!V?pe:0))}}w&&!Oe.tween&&!ti&&!Qu&&ve.restart(!0),c&&(L||E&&St&&(St<1||!Mp))&&$c(c.targets).forEach(function(Fe){return Fe.classList[xn||E?"add":"remove"](c.className)}),l&&!O&&!ye&&l(N),jn&&!ti?(O&&(ee&&(zt==="complete"?r.pause().totalProgress(1):zt==="reset"?r.restart(!0).pause():zt==="restart"?r.restart(!0):r[zt]()),l&&l(N)),(L||!Mp)&&(f&&L&&bp(N,f),K[Xt]&&bp(N,K[Xt]),E&&(St===1?N.kill(!1,1):K[Xt]=0),L||(Xt=St===1?1:3,K[Xt]&&bp(N,K[Xt]))),G&&!xn&&Math.abs(N.getVelocity())>(Tc(G)?G:2500)&&(rc(N.callbackAnimation),Pe?Pe.progress(1):rc(r,zt==="reverse"?1:!St,1))):O&&l&&!ti&&l(N)}if(De){var Ee=R?ft/R.duration()*(R._caScrollDist||0):ft;at(Ee+(Z._isFlipped?1:0)),De(Ee)}Ze&&Ze(-ft/R.duration()*(R._caScrollDist||0))}},N.enable=function(ye,nt){N.enabled||(N.enabled=!0,Bn(Y,"resize",bc),z||Bn(Y,"scroll",Lo),oe&&Bn(i,"refreshInit",oe),ye!==!1&&(N.progress=Te=0,$e=X=te=Ie()),nt!==!1&&N.refresh())},N.getTween=function(ye){return ye&&Oe?Oe.tween:Pe},N.setPositions=function(ye,nt,Qe,ft){if(R){var tn=R.scrollTrigger,St=R.duration(),$t=tn.end-tn.start;ye=tn.start+$t*ye/St,nt=tn.start+$t*nt/St}N.refresh(!1,!1,{start:Px(ye,Qe&&!!N._startClamp),end:Px(nt,Qe&&!!N._endClamp)},ft),N.update()},N.adjustPinSpacing=function(ye){if(Xe&&ye){var nt=Xe.indexOf(T.d)+1;Xe[nt]=parseFloat(Xe[nt])+ye+Ln,Xe[1]=parseFloat(Xe[1])+ye+Ln,fl(Xe)}},N.disable=function(ye,nt){if(N.enabled&&(ye!==!1&&N.revert(!0,!0),N.enabled=N.isActive=!1,nt||Pe&&Pe.pause(),xe=0,Ae&&(Ae.uncache=1),oe&&Fn(i,"refreshInit",oe),ve&&(ve.pause(),Oe.tween&&Oe.tween.kill()&&(Oe.tween=0)),!z)){for(var Qe=wt.length;Qe--;)if(wt[Qe].scroller===Y&&wt[Qe]!==N)return;Fn(Y,"resize",bc),z||Fn(Y,"scroll",Lo)}},N.kill=function(ye,nt){N.disable(ye,nt),Pe&&!nt&&Pe.kill(),u&&delete e_[u];var Qe=wt.indexOf(N);Qe>=0&&wt.splice(Qe,1),Qe===pi&&th>0&&pi--,Qe=0,wt.forEach(function(ft){return ft.scroller===N.scroller&&(Qe=1)}),Qe||mi||(N.scroll.rec=0),r&&(r.scrollTrigger=null,ye&&r.revert({kill:!1}),nt||r.kill()),ke&&[ke,Ue,Z,et].forEach(function(ft){return ft.parentNode&&ft.parentNode.removeChild(ft)}),Fc===N&&(Fc=0),m&&(Ae&&(Ae.uncache=1),Qe=0,wt.forEach(function(ft){return ft.pin===m&&Qe++}),Qe||(Ae.spacer=0)),n.onKill&&n.onKill(N)},wt.push(N),N.enable(!1,!1),vt&&vt(N),r&&r.add&&!q){var Ke=N.update;N.update=function(){N.update=Ke,st||Me||N.refresh()},Ge.delayedCall(.01,N.update),q=.01,st=Me=0}else N.refresh();m&&pD()},i.register=function(n){return jo||(Ge=n||iT(),nT()&&window.document&&i.enable(),jo=Ec),jo},i.defaults=function(n){if(n)for(var r in n)rf[r]=n[r];return rf},i.disable=function(n,r){Ec=0,wt.forEach(function(l){return l[r?"kill":"disable"](n)}),Fn(Ut,"wheel",Lo),Fn(un,"scroll",Lo),clearInterval(Ju),Fn(un,"touchcancel",Wr),Fn(an,"touchstart",Wr),tf(Fn,un,"pointerdown,touchstart,mousedown",Lx),tf(Fn,un,"pointerup,touchend,mouseup",Ix),Sh.kill(),ef(Fn);for(var a=0;a<Pt.length;a+=3)nf(Fn,Pt[a],Pt[a+1]),nf(Fn,Pt[a],Pt[a+2])},i.enable=function(){if(Ut=window,un=document,Pr=un.documentElement,an=un.body,Ge&&($c=Ge.utils.toArray,Ic=Ge.utils.clamp,Jm=Ge.core.context||Wr,Ep=Ge.core.suppressOverwrites||Wr,K_=Ut.history.scrollRestoration||"auto",t_=Ut.pageYOffset,Ge.core.globals("ScrollTrigger",i),an)){Ec=1,ul=document.createElement("div"),ul.style.height="100vh",ul.style.position="absolute",hT(),oD(),Mn.register(Ge),i.isTouch=Mn.isTouch,Js=Mn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Zm=Mn.isTouch===1,Bn(Ut,"wheel",Lo),ZM=[Ut,un,Pr,an],Ge.matchMedia?(i.matchMedia=function(u){var f=Ge.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Ge.addEventListener("matchMediaInit",function(){return tg()}),Ge.addEventListener("matchMediaRevert",function(){return uT()}),Ge.addEventListener("matchMedia",function(){Ga(0,1),so("matchMedia")}),Ge.matchMedia("(orientation: portrait)",function(){return wp(),wp})):console.warn("Requires GSAP 3.11.0 or later"),wp(),Bn(un,"scroll",Lo);var n=an.style,r=n.borderTopStyle,a=Ge.core.Animation.prototype,l,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",l=Ms(an),In.m=Math.round(l.top+In.sc())||0,vi.m=Math.round(l.left+vi.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Ju=setInterval(Ux,250),Ge.delayedCall(.5,function(){return Qu=0}),Bn(un,"touchcancel",Wr),Bn(an,"touchstart",Wr),tf(Bn,un,"pointerdown,touchstart,mousedown",Lx),tf(Bn,un,"pointerup,touchend,mouseup",Ix),jm=Ge.utils.checkPrefix("transform"),nh.push(jm),jo=ni(),Sh=Ge.delayedCall(.2,Ga).pause(),Zo=[un,"visibilitychange",function(){var u=Ut.innerWidth,f=Ut.innerHeight;un.hidden?(Ax=u,Cx=f):(Ax!==u||Cx!==f)&&bc()},un,"DOMContentLoaded",Ga,Ut,"load",Ga,Ut,"resize",bc],ef(Bn),wt.forEach(function(u){return u.enable(0,1)}),c=0;c<Pt.length;c+=3)nf(Fn,Pt[c],Pt[c+1]),nf(Fn,Pt[c],Pt[c+2])}},i.config=function(n){"limitCallbacks"in n&&(Mp=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Ju)||(Ju=r)&&setInterval(Ux,r),"ignoreMobileResize"in n&&(Zm=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(ef(Fn)||ef(Bn,n.autoRefreshEvents||"none"),QM=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var a=wi(n),l=Pt.indexOf(a),c=io(a);~l&&Pt.splice(l,c?6:2),r&&(c?es.unshift(Ut,r,an,r,Pr,r):es.unshift(a,r))},i.clearMatchMedia=function(n){wt.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,a){var l=(Wi(n)?wi(n):n).getBoundingClientRect(),c=l[a?Ya:Ka]*r||0;return a?l.right-c>0&&l.left+c<Ut.innerWidth:l.bottom-c>0&&l.top+c<Ut.innerHeight},i.positionInViewport=function(n,r,a){Wi(n)&&(n=wi(n));var l=n.getBoundingClientRect(),c=l[a?Ya:Ka],u=r==null?c/2:r in Th?Th[r]*c:~r.indexOf("%")?parseFloat(r)*c/100:parseFloat(r)||0;return a?(l.left+u)/Ut.innerWidth:(l.top+u)/Ut.innerHeight},i.killAll=function(n){if(wt.slice(0).forEach(function(a){return a.vars.id!=="ScrollSmoother"&&a.kill()}),n!==!0){var r=ro.killAll||[];ro={},r.forEach(function(a){return a()})}},i}();yt.version="3.12.5";yt.saveStyles=function(i){return i?$c(i).forEach(function(e){if(e&&e.style){var t=Vi.indexOf(e);t>=0&&Vi.splice(t,5),Vi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ge.core.getCache(e),Jm())}}):Vi};yt.revert=function(i,e){return tg(!i,e)};yt.create=function(i,e){return new yt(i,e)};yt.refresh=function(i){return i?bc():(jo||yt.register())&&Ga(!0)};yt.update=function(i){return++Pt.cache&&Cs(i===!0?2:0)};yt.clearScrollMemory=fT;yt.maxScroll=function(i,e){return Zr(i,e?vi:In)};yt.getScrollFunc=function(i,e){return da(wi(i),e?vi:In)};yt.getById=function(i){return e_[i]};yt.getAll=function(){return wt.filter(function(i){return i.vars.id!=="ScrollSmoother"})};yt.isScrolling=function(){return!!vr};yt.snapDirectional=eg;yt.addEventListener=function(i,e){var t=ro[i]||(ro[i]=[]);~t.indexOf(e)||t.push(e)};yt.removeEventListener=function(i,e){var t=ro[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};yt.batch=function(i,e){var t=[],n={},r=e.interval||.016,a=e.batchMax||1e9,l=function(f,d){var p=[],_=[],m=Ge.delayedCall(r,function(){d(p,_),p=[],_=[]}).pause();return function(S){p.length||m.restart(!0),p.push(S.trigger),_.push(S),a<=p.length&&m.progress(1)}},c;for(c in e)n[c]=c.substr(0,2)==="on"&&xi(e[c])&&c!=="onRefreshInit"?l(c,e[c]):e[c];return xi(a)&&(a=a(),Bn(yt,"refresh",function(){return a=e.batchMax()})),$c(i).forEach(function(u){var f={};for(c in n)f[c]=n[c];f.trigger=u,t.push(yt.create(f))}),t};var Gx=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},Cp=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Mn.isTouch?" pinch-zoom":""):"none",e===Pr&&i(an,t)},lf={auto:1,scroll:1},xD=function(e){var t=e.event,n=e.target,r=e.axis,a=(t.changedTouches?t.changedTouches[0]:t).target,l=a._gsap||Ge.core.getCache(a),c=ni(),u;if(!l._isScrollT||c-l._isScrollT>2e3){for(;a&&a!==an&&(a.scrollHeight<=a.clientHeight&&a.scrollWidth<=a.clientWidth||!(lf[(u=dr(a)).overflowY]||lf[u.overflowX]));)a=a.parentNode;l._isScroll=a&&a!==n&&!io(a)&&(lf[(u=dr(a)).overflowY]||lf[u.overflowX]),l._isScrollT=c}(l._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},pT=function(e,t,n,r){return Mn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&xD,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Bn(un,Mn.eventTypes[0],Vx,!1,!0)},onDisable:function(){return Fn(un,Mn.eventTypes[0],Vx,!0)}})},yD=/(input|label|select|textarea)/i,kx,Vx=function(e){var t=yD.test(e.target.tagName);(t||kx)&&(e._gsapAllow=!0,kx=t)},SD=function(e){Oa(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,a=t.allowNestedScroll,l=t.onRelease,c,u,f=wi(e.target)||Pr,d=Ge.core.globals().ScrollSmoother,p=d&&d.get(),_=Js&&(e.content&&wi(e.content)||p&&e.content!==!1&&!p.smooth()&&p.content()),m=da(f,In),S=da(f,vi),y=1,g=(Mn.isTouch&&Ut.visualViewport?Ut.visualViewport.scale*Ut.visualViewport.width:Ut.outerWidth)/Ut.innerWidth,v=0,b=xi(r)?function(){return r(c)}:function(){return r||2.8},E,w,U=pT(f,e.type,!0,a),I=function(){return w=!1},R=Wr,G=Wr,$=function(){u=Zr(f,In),G=Ic(Js?1:0,u),n&&(R=Ic(0,Zr(f,vi))),E=ja},T=function(){_._gsap.y=Mc(parseFloat(_._gsap.y)+m.offset)+"px",_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(_._gsap.y)+", 0, 1)",m.offset=m.cacheID=0},O=function(){if(w){requestAnimationFrame(I);var ie=Mc(c.deltaY/2),ae=G(m.v-ie);if(_&&ae!==m.v+m.offset){m.offset=ae-m.v;var N=Mc((parseFloat(_&&_._gsap.y)||0)-m.offset);_.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",_._gsap.y=N+"px",m.cacheID=Pt.cache,Cs()}return!0}m.offset&&T(),w=!0},Y,ce,z,j,K=function(){$(),Y.isActive()&&Y.vars.scrollY>u&&(m()>u?Y.progress(1)&&m(u):Y.resetTo("scrollY",u))};return _&&Ge.set(_,{y:"+=0"}),e.ignoreCheck=function(ne){return Js&&ne.type==="touchmove"&&O()||y>1.05&&ne.type!=="touchstart"||c.isGesturing||ne.touches&&ne.touches.length>1},e.onPress=function(){w=!1;var ne=y;y=Mc((Ut.visualViewport&&Ut.visualViewport.scale||1)/g),Y.pause(),ne!==y&&Cp(f,y>1.01?!0:n?!1:"x"),ce=S(),z=m(),$(),E=ja},e.onRelease=e.onGestureStart=function(ne,ie){if(m.offset&&T(),!ie)j.restart(!0);else{Pt.cache++;var ae=b(),N,oe;n&&(N=S(),oe=N+ae*.05*-ne.velocityX/.227,ae*=Gx(S,N,oe,Zr(f,vi)),Y.vars.scrollX=R(oe)),N=m(),oe=N+ae*.05*-ne.velocityY/.227,ae*=Gx(m,N,oe,Zr(f,In)),Y.vars.scrollY=G(oe),Y.invalidate().duration(ae).play(.01),(Js&&Y.vars.scrollY>=u||N>=u-1)&&Ge.to({},{onUpdate:K,duration:ae})}l&&l(ne)},e.onWheel=function(){Y._ts&&Y.pause(),ni()-v>1e3&&(E=0,v=ni())},e.onChange=function(ne,ie,ae,N,oe){if(ja!==E&&$(),ie&&n&&S(R(N[2]===ie?ce+(ne.startX-ne.x):S()+ie-N[1])),ae){m.offset&&T();var Re=oe[2]===ae,Je=Re?z+ne.startY-ne.y:m()+ae-oe[1],te=G(Je);Re&&Je!==te&&(z+=te-Je),m(te)}(ae||ie)&&Cs()},e.onEnable=function(){Cp(f,n?!1:"x"),yt.addEventListener("refresh",K),Bn(Ut,"resize",K),m.smooth&&(m.target.style.scrollBehavior="auto",m.smooth=S.smooth=!1),U.enable()},e.onDisable=function(){Cp(f,!0),Fn(Ut,"resize",K),yt.removeEventListener("refresh",K),U.kill()},e.lockAxis=e.lockAxis!==!1,c=new Mn(e),c.iOS=Js,Js&&!m()&&m(1),Js&&Ge.ticker.add(Wr),j=c._dc,Y=Ge.to(c,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:dT(m,m(),function(){return Y.pause()})},onUpdate:Cs,onComplete:j.vars.onComplete}),c};yt.sort=function(i){return wt.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};yt.observe=function(i){return new Mn(i)};yt.normalizeScroll=function(i){if(typeof i>"u")return di;if(i===!0&&di)return di.enable();if(i===!1){di&&di.kill(),di=i;return}var e=i instanceof Mn?i:SD(i);return di&&di.target===e.target&&di.kill(),io(e.target)&&(di=e),e};yt.core={_getVelocityProp:Km,_inputObserver:pT,_scrollers:Pt,_proxies:es,bridge:{ss:function(){vr||so("scrollStart"),vr=ni()},ref:function(){return ti}}};iT()&&Ge.registerPlugin(yt);/*! *****************************************************************************
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
***************************************************************************** */var i_=function(i,e){return i_=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},i_(i,e)};function ED(i,e){i_(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ts=function(){return ts=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},ts.apply(this,arguments)};function Fa(i,e,t,n){var r=arguments.length,a=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,t,n);else for(var c=i.length-1;c>=0;c--)(l=i[c])&&(a=(r<3?l(a):r>3?l(e,t,a):l(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a}function MD(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var a=arguments[e],l=0,c=a.length;l<c;l++,r++)n[r]=a[l];return n}var Yn=function(i){try{return!!i()}catch{return!0}},TD=Yn,ng=!TD(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),mT=ng,_T=Function.prototype,r_=_T.call,bD=mT&&_T.bind.bind(r_,r_),vn=mT?bD:function(i){return function(){return r_.apply(i,arguments)}},gT=vn,wD=gT({}.toString),AD=gT("".slice),Rl=function(i){return AD(wD(i),8,-1)},CD=vn,RD=Yn,PD=Rl,Rp=Object,LD=CD("".split),ig=RD(function(){return!Rp("z").propertyIsEnumerable(0)})?function(i){return PD(i)==="String"?LD(i,""):Rp(i)}:Rp,Pl=function(i){return i==null},ID=Pl,DD=TypeError,kh=function(i){if(ID(i))throw new DD("Can't call method on "+i);return i},OD=ig,UD=kh,Ll=function(i){return OD(UD(i))},sc=function(i){return i&&i.Math===Math&&i},Ji=sc(typeof globalThis=="object"&&globalThis)||sc(typeof window=="object"&&window)||sc(typeof self=="object"&&self)||sc(typeof qr=="object"&&qr)||sc(typeof qr=="object"&&qr)||function(){return this}()||Function("return this")(),vT={exports:{}},ND=!1,Wx=Ji,FD=Object.defineProperty,rg=function(i,e){try{FD(Wx,i,{value:e,configurable:!0,writable:!0})}catch{Wx[i]=e}return e},BD=Ji,zD=rg,$x="__core-js_shared__",Xx=vT.exports=BD[$x]||zD($x,{});(Xx.versions||(Xx.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var sg=vT.exports,qx=sg,xT=function(i,e){return qx[i]||(qx[i]=e||{})},HD=kh,GD=Object,Zc=function(i){return GD(HD(i))},kD=vn,VD=Zc,WD=kD({}.hasOwnProperty),Ur=Object.hasOwn||function(e,t){return WD(VD(e),t)},$D=vn,XD=0,qD=Math.random(),YD=$D(1 .toString),ag=function(i){return"Symbol("+(i===void 0?"":i)+")_"+YD(++XD+qD,36)},KD=typeof navigator<"u"&&String(navigator.userAgent)||"",yT=Ji,Pp=KD,Yx=yT.process,Kx=yT.Deno,jx=Yx&&Yx.versions||Kx&&Kx.version,Zx=jx&&jx.v8,Lr,bh;Zx&&(Lr=Zx.split("."),bh=Lr[0]>0&&Lr[0]<4?1:+(Lr[0]+Lr[1]));!bh&&Pp&&(Lr=Pp.match(/Edge\/(\d+)/),(!Lr||Lr[1]>=74)&&(Lr=Pp.match(/Chrome\/(\d+)/),Lr&&(bh=+Lr[1])));var jD=bh,Jx=jD,ZD=Yn,JD=Ji,QD=JD.String,ST=!!Object.getOwnPropertySymbols&&!ZD(function(){var i=Symbol("symbol detection");return!QD(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&Jx&&Jx<41}),eO=ST,ET=eO&&!Symbol.sham&&typeof Symbol.iterator=="symbol",tO=Ji,nO=xT,Qx=Ur,iO=ag,rO=ST,sO=ET,nl=tO.Symbol,Lp=nO("wks"),aO=sO?nl.for||nl:nl&&nl.withoutSetter||iO,Sr=function(i){return Qx(Lp,i)||(Lp[i]=rO&&Qx(nl,i)?nl[i]:aO("Symbol."+i)),Lp[i]},Ip=typeof document=="object"&&document.all,Kn=typeof Ip>"u"&&Ip!==void 0?function(i){return typeof i=="function"||i===Ip}:function(i){return typeof i=="function"},oO=Kn,Oi=function(i){return typeof i=="object"?i!==null:oO(i)},lO=Oi,cO=String,uO=TypeError,rs=function(i){if(lO(i))return i;throw new uO(cO(i)+" is not an object")},MT={},fO=Yn,Qi=!fO(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),hO=Qi,dO=Yn,TT=hO&&dO(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),Nr={},pO=Ji,ey=Oi,s_=pO.document,mO=ey(s_)&&ey(s_.createElement),bT=function(i){return mO?s_.createElement(i):{}},_O=Qi,gO=Yn,vO=bT,wT=!_O&&!gO(function(){return Object.defineProperty(vO("div"),"a",{get:function(){return 7}}).a!==7}),xO=ng,cf=Function.prototype.call,Os=xO?cf.bind(cf):function(){return cf.apply(cf,arguments)},Dp=Ji,yO=Kn,SO=function(i){return yO(i)?i:void 0},Jc=function(i,e){return arguments.length<2?SO(Dp[i]):Dp[i]&&Dp[i][e]},EO=vn,og=EO({}.isPrototypeOf),MO=Jc,TO=Kn,bO=og,wO=ET,AO=Object,AT=wO?function(i){return typeof i=="symbol"}:function(i){var e=MO("Symbol");return TO(e)&&bO(e.prototype,AO(i))},CO=String,lg=function(i){try{return CO(i)}catch{return"Object"}},RO=Kn,PO=lg,LO=TypeError,Qc=function(i){if(RO(i))return i;throw new LO(PO(i)+" is not a function")},IO=Qc,DO=Pl,cg=function(i,e){var t=i[e];return DO(t)?void 0:IO(t)},Op=Os,Up=Kn,Np=Oi,OO=TypeError,UO=function(i,e){var t,n;if(e==="string"&&Up(t=i.toString)&&!Np(n=Op(t,i))||Up(t=i.valueOf)&&!Np(n=Op(t,i))||e!=="string"&&Up(t=i.toString)&&!Np(n=Op(t,i)))return n;throw new OO("Can't convert object to primitive value")},NO=Os,ty=Oi,ny=AT,FO=cg,BO=UO,zO=Sr,HO=TypeError,GO=zO("toPrimitive"),kO=function(i,e){if(!ty(i)||ny(i))return i;var t=FO(i,GO),n;if(t){if(e===void 0&&(e="default"),n=NO(t,i,e),!ty(n)||ny(n))return n;throw new HO("Can't convert object to primitive value")}return e===void 0&&(e="number"),BO(i,e)},VO=kO,WO=AT,CT=function(i){var e=VO(i,"string");return WO(e)?e:e+""},$O=Qi,XO=wT,qO=TT,uf=rs,iy=CT,YO=TypeError,Fp=Object.defineProperty,KO=Object.getOwnPropertyDescriptor,Bp="enumerable",zp="configurable",Hp="writable";Nr.f=$O?qO?function(e,t,n){if(uf(e),t=iy(t),uf(n),typeof e=="function"&&t==="prototype"&&"value"in n&&Hp in n&&!n[Hp]){var r=KO(e,t);r&&r[Hp]&&(e[t]=n.value,n={configurable:zp in n?n[zp]:r[zp],enumerable:Bp in n?n[Bp]:r[Bp],writable:!1})}return Fp(e,t,n)}:Fp:function(e,t,n){if(uf(e),t=iy(t),uf(n),XO)try{return Fp(e,t,n)}catch{}if("get"in n||"set"in n)throw new YO("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var jO=Math.ceil,ZO=Math.floor,JO=Math.trunc||function(e){var t=+e;return(t>0?ZO:jO)(t)},QO=JO,ug=function(i){var e=+i;return e!==e||e===0?0:QO(e)},eU=ug,tU=Math.max,nU=Math.min,iU=function(i,e){var t=eU(i);return t<0?tU(t+e,0):nU(t,e)},rU=ug,sU=Math.min,aU=function(i){var e=rU(i);return e>0?sU(e,9007199254740991):0},oU=aU,Vh=function(i){return oU(i.length)},lU=Ll,cU=iU,uU=Vh,ry=function(i){return function(e,t,n){var r=lU(e),a=uU(r);if(a===0)return!i&&-1;var l=cU(n,a),c;if(i&&t!==t){for(;a>l;)if(c=r[l++],c!==c)return!0}else for(;a>l;l++)if((i||l in r)&&r[l]===t)return i||l||0;return!i&&-1}},fU={includes:ry(!0),indexOf:ry(!1)},Wh={},hU=vn,Gp=Ur,dU=Ll,pU=fU.indexOf,mU=Wh,sy=hU([].push),RT=function(i,e){var t=dU(i),n=0,r=[],a;for(a in t)!Gp(mU,a)&&Gp(t,a)&&sy(r,a);for(;e.length>n;)Gp(t,a=e[n++])&&(~pU(r,a)||sy(r,a));return r},fg=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],_U=RT,gU=fg,PT=Object.keys||function(e){return _U(e,gU)},vU=Qi,xU=TT,yU=Nr,SU=rs,EU=Ll,MU=PT;MT.f=vU&&!xU?Object.defineProperties:function(e,t){SU(e);for(var n=EU(t),r=MU(t),a=r.length,l=0,c;a>l;)yU.f(e,c=r[l++],n[c]);return e};var TU=Jc,bU=TU("document","documentElement"),wU=xT,AU=ag,ay=wU("keys"),hg=function(i){return ay[i]||(ay[i]=AU(i))},CU=rs,RU=MT,oy=fg,PU=Wh,LU=bU,IU=bT,DU=hg,ly=">",cy="<",a_="prototype",o_="script",LT=DU("IE_PROTO"),kp=function(){},IT=function(i){return cy+o_+ly+i+cy+"/"+o_+ly},uy=function(i){i.write(IT("")),i.close();var e=i.parentWindow.Object;return i=null,e},OU=function(){var i=IU("iframe"),e="java"+o_+":",t;return i.style.display="none",LU.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(IT("document.F=Object")),t.close(),t.F},ff,rh=function(){try{ff=new ActiveXObject("htmlfile")}catch{}rh=typeof document<"u"?document.domain&&ff?uy(ff):OU():uy(ff);for(var i=oy.length;i--;)delete rh[a_][oy[i]];return rh()};PU[LT]=!0;var dg=Object.create||function(e,t){var n;return e!==null?(kp[a_]=CU(e),n=new kp,kp[a_]=null,n[LT]=e):n=rh(),t===void 0?n:RU.f(n,t)},UU=Sr,NU=dg,FU=Nr.f,l_=UU("unscopables"),c_=Array.prototype;c_[l_]===void 0&&FU(c_,l_,{configurable:!0,value:NU(null)});var BU=function(i){c_[l_][i]=!0},eu={},zU=Ji,HU=Kn,fy=zU.WeakMap,DT=HU(fy)&&/native code/.test(String(fy)),$h=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},GU=Qi,kU=Nr,VU=$h,pg=GU?function(i,e,t){return kU.f(i,e,VU(1,t))}:function(i,e,t){return i[e]=t,i},WU=DT,OT=Ji,$U=Oi,XU=pg,Vp=Ur,Wp=sg,qU=hg,YU=Wh,hy="Object already initialized",u_=OT.TypeError,KU=OT.WeakMap,wh,qc,Ah,jU=function(i){return Ah(i)?qc(i):wh(i,{})},ZU=function(i){return function(e){var t;if(!$U(e)||(t=qc(e)).type!==i)throw new u_("Incompatible receiver, "+i+" required");return t}};if(WU||Wp.state){var Gr=Wp.state||(Wp.state=new KU);Gr.get=Gr.get,Gr.has=Gr.has,Gr.set=Gr.set,wh=function(i,e){if(Gr.has(i))throw new u_(hy);return e.facade=i,Gr.set(i,e),e},qc=function(i){return Gr.get(i)||{}},Ah=function(i){return Gr.has(i)}}else{var Io=qU("state");YU[Io]=!0,wh=function(i,e){if(Vp(i,Io))throw new u_(hy);return e.facade=i,XU(i,Io,e),e},qc=function(i){return Vp(i,Io)?i[Io]:{}},Ah=function(i){return Vp(i,Io)}}var Il={set:wh,get:qc,has:Ah,enforce:jU,getterFor:ZU},mg={},_g={},UT={}.propertyIsEnumerable,NT=Object.getOwnPropertyDescriptor,JU=NT&&!UT.call({1:2},1);_g.f=JU?function(e){var t=NT(this,e);return!!t&&t.enumerable}:UT;var QU=Qi,e3=Os,t3=_g,n3=$h,i3=Ll,r3=CT,s3=Ur,a3=wT,dy=Object.getOwnPropertyDescriptor;mg.f=QU?dy:function(e,t){if(e=i3(e),t=r3(t),a3)try{return dy(e,t)}catch{}if(s3(e,t))return n3(!e3(t3.f,e,t),e[t])};var FT={exports:{}},f_=Qi,o3=Ur,BT=Function.prototype,l3=f_&&Object.getOwnPropertyDescriptor,gg=o3(BT,"name"),c3=gg&&(function(){}).name==="something",u3=gg&&(!f_||f_&&l3(BT,"name").configurable),zT={EXISTS:gg,PROPER:c3,CONFIGURABLE:u3},f3=vn,h3=Kn,h_=sg,d3=f3(Function.toString);h3(h_.inspectSource)||(h_.inspectSource=function(i){return d3(i)});var HT=h_.inspectSource,vg=vn,p3=Yn,m3=Kn,hf=Ur,d_=Qi,_3=zT.CONFIGURABLE,g3=HT,GT=Il,v3=GT.enforce,x3=GT.get,py=String,sh=Object.defineProperty,y3=vg("".slice),S3=vg("".replace),E3=vg([].join),M3=d_&&!p3(function(){return sh(function(){},"length",{value:8}).length!==8}),T3=String(String).split("String"),b3=FT.exports=function(i,e,t){y3(py(e),0,7)==="Symbol("&&(e="["+S3(py(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!hf(i,"name")||_3&&i.name!==e)&&(d_?sh(i,"name",{value:e,configurable:!0}):i.name=e),M3&&t&&hf(t,"arity")&&i.length!==t.arity&&sh(i,"length",{value:t.arity});try{t&&hf(t,"constructor")&&t.constructor?d_&&sh(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=v3(i);return hf(n,"source")||(n.source=E3(T3,typeof e=="string"?e:"")),i};Function.prototype.toString=b3(function(){return m3(this)&&x3(this).source||g3(this)},"toString");var kT=FT.exports,w3=Kn,A3=Nr,C3=kT,R3=rg,Dl=function(i,e,t,n){n||(n={});var r=n.enumerable,a=n.name!==void 0?n.name:e;if(w3(t)&&C3(t,a,n),n.global)r?i[e]=t:R3(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:A3.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},Xh={},P3=RT,L3=fg,I3=L3.concat("length","prototype");Xh.f=Object.getOwnPropertyNames||function(e){return P3(e,I3)};var xg={};xg.f=Object.getOwnPropertySymbols;var D3=Jc,O3=vn,U3=Xh,N3=xg,F3=rs,B3=O3([].concat),z3=D3("Reflect","ownKeys")||function(e){var t=U3.f(F3(e)),n=N3.f;return n?B3(t,n(e)):t},my=Ur,H3=z3,G3=mg,k3=Nr,V3=function(i,e,t){for(var n=H3(e),r=k3.f,a=G3.f,l=0;l<n.length;l++){var c=n[l];!my(i,c)&&!(t&&my(t,c))&&r(i,c,a(e,c))}},W3=Yn,$3=Kn,X3=/#|\.prototype\./,tu=function(i,e){var t=Y3[q3(i)];return t===j3?!0:t===K3?!1:$3(e)?W3(e):!!e},q3=tu.normalize=function(i){return String(i).replace(X3,".").toLowerCase()},Y3=tu.data={},K3=tu.NATIVE="N",j3=tu.POLYFILL="P",VT=tu,df=Ji,Z3=mg.f,J3=pg,Q3=Dl,eN=rg,tN=V3,nN=VT,Ol=function(i,e){var t=i.target,n=i.global,r=i.stat,a,l,c,u,f,d;if(n?l=df:r?l=df[t]||eN(t,{}):l=df[t]&&df[t].prototype,l)for(c in e){if(f=e[c],i.dontCallGetSet?(d=Z3(l,c),u=d&&d.value):u=l[c],a=nN(n?c:t+(r?".":"#")+c,i.forced),!a&&u!==void 0){if(typeof f==typeof u)continue;tN(f,u)}(i.sham||u&&u.sham)&&J3(f,"sham",!0),Q3(l,c,f,i)}},iN=Yn,rN=!iN(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),sN=Ur,aN=Kn,oN=Zc,lN=hg,cN=rN,_y=lN("IE_PROTO"),p_=Object,uN=p_.prototype,WT=cN?p_.getPrototypeOf:function(i){var e=oN(i);if(sN(e,_y))return e[_y];var t=e.constructor;return aN(t)&&e instanceof t?t.prototype:e instanceof p_?uN:null},fN=Yn,hN=Kn,dN=Oi,gy=WT,pN=Dl,mN=Sr,m_=mN("iterator"),$T=!1,ao,$p,Xp;[].keys&&(Xp=[].keys(),"next"in Xp?($p=gy(gy(Xp)),$p!==Object.prototype&&(ao=$p)):$T=!0);var _N=!dN(ao)||fN(function(){var i={};return ao[m_].call(i)!==i});_N&&(ao={});hN(ao[m_])||pN(ao,m_,function(){return this});var XT={IteratorPrototype:ao,BUGGY_SAFARI_ITERATORS:$T},gN=Nr.f,vN=Ur,xN=Sr,vy=xN("toStringTag"),yg=function(i,e,t){i&&!t&&(i=i.prototype),i&&!vN(i,vy)&&gN(i,vy,{configurable:!0,value:e})},yN=XT.IteratorPrototype,SN=dg,EN=$h,MN=yg,TN=eu,bN=function(){return this},wN=function(i,e,t,n){var r=e+" Iterator";return i.prototype=SN(yN,{next:EN(+!n,t)}),MN(i,r,!1),TN[r]=bN,i},AN=vn,CN=Qc,RN=function(i,e,t){try{return AN(CN(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},PN=Oi,LN=function(i){return PN(i)||i===null},IN=LN,DN=String,ON=TypeError,UN=function(i){if(IN(i))return i;throw new ON("Can't set "+DN(i)+" as a prototype")},NN=RN,FN=rs,BN=UN,qT=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=NN(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,a){return FN(r),BN(a),i?t(r,a):r.__proto__=a,r}}():void 0),zN=Ol,HN=Os,YT=zT,GN=Kn,kN=wN,xy=WT,yy=qT,VN=yg,WN=pg,qp=Dl,$N=Sr,XN=eu,KT=XT,qN=YT.PROPER,YN=YT.CONFIGURABLE,Sy=KT.IteratorPrototype,pf=KT.BUGGY_SAFARI_ITERATORS,ac=$N("iterator"),Ey="keys",oc="values",My="entries",KN=function(){return this},Sg=function(i,e,t,n,r,a,l){kN(t,e,n);var c=function(v){if(v===r&&_)return _;if(!pf&&v&&v in d)return d[v];switch(v){case Ey:return function(){return new t(this,v)};case oc:return function(){return new t(this,v)};case My:return function(){return new t(this,v)}}return function(){return new t(this)}},u=e+" Iterator",f=!1,d=i.prototype,p=d[ac]||d["@@iterator"]||r&&d[r],_=!pf&&p||c(r),m=e==="Array"&&d.entries||p,S,y,g;if(m&&(S=xy(m.call(new i)),S!==Object.prototype&&S.next&&(xy(S)!==Sy&&(yy?yy(S,Sy):GN(S[ac])||qp(S,ac,KN)),VN(S,u,!0))),qN&&r===oc&&p&&p.name!==oc&&(YN?WN(d,"name",oc):(f=!0,_=function(){return HN(p,this)})),r)if(y={values:c(oc),keys:a?_:c(Ey),entries:c(My)},l)for(g in y)(pf||f||!(g in d))&&qp(d,g,y[g]);else zN({target:e,proto:!0,forced:pf||f},y);return d[ac]!==_&&qp(d,ac,_,{name:r}),XN[e]=_,y},Eg=function(i,e){return{value:i,done:e}},jN=Ll,Mg=BU,Ty=eu,jT=Il,ZN=Nr.f,JN=Sg,mf=Eg,QN=Qi,ZT="Array Iterator",eF=jT.set,tF=jT.getterFor(ZT);JN(Array,"Array",function(i,e){eF(this,{type:ZT,target:jN(i),index:0,kind:e})},function(){var i=tF(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,mf(void 0,!0);switch(i.kind){case"keys":return mf(t,!1);case"values":return mf(e[t],!1)}return mf([t,e[t]],!1)},"values");var by=Ty.Arguments=Ty.Array;Mg("keys");Mg("values");Mg("entries");if(QN&&by.name!=="values")try{ZN(by,"name",{value:"values"})}catch{}var JT={exports:{}},QT={},nF=vn,iF=nF([].slice),rF=Rl,sF=Ll,eb=Xh.f,aF=iF,tb=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],oF=function(i){try{return eb(i)}catch{return aF(tb)}};QT.f=function(e){return tb&&rF(e)==="Window"?oF(e):eb(sF(e))};var lF=Yn,cF=lF(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),uF=Yn,fF=Oi,hF=Rl,wy=cF,ah=Object.isExtensible,dF=uF(function(){ah(1)}),pF=dF||wy?function(e){return!fF(e)||wy&&hF(e)==="ArrayBuffer"?!1:ah?ah(e):!0}:ah,mF=Yn,nb=!mF(function(){return Object.isExtensible(Object.preventExtensions({}))}),_F=Ol,gF=vn,vF=Wh,xF=Oi,Tg=Ur,yF=Nr.f,Ay=Xh,SF=QT,bg=pF,EF=ag,MF=nb,ib=!1,Ls=EF("meta"),TF=0,wg=function(i){yF(i,Ls,{value:{objectID:"O"+TF++,weakData:{}}})},bF=function(i,e){if(!xF(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!Tg(i,Ls)){if(!bg(i))return"F";if(!e)return"E";wg(i)}return i[Ls].objectID},wF=function(i,e){if(!Tg(i,Ls)){if(!bg(i))return!0;if(!e)return!1;wg(i)}return i[Ls].weakData},AF=function(i){return MF&&ib&&bg(i)&&!Tg(i,Ls)&&wg(i),i},CF=function(){RF.enable=function(){},ib=!0;var i=Ay.f,e=gF([].splice),t={};t[Ls]=1,i(t).length&&(Ay.f=function(n){for(var r=i(n),a=0,l=r.length;a<l;a++)if(r[a]===Ls){e(r,a,1);break}return r},_F({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:SF.f}))},RF=JT.exports={enable:CF,fastKey:bF,getWeakData:wF,onFreeze:AF};vF[Ls]=!0;var qh=JT.exports,PF=Rl,LF=vn,IF=function(i){if(PF(i)==="Function")return LF(i)},Cy=IF,DF=Qc,OF=ng,UF=Cy(Cy.bind),Yh=function(i,e){return DF(i),e===void 0?i:OF?UF(i,e):function(){return i.apply(e,arguments)}},NF=Sr,FF=eu,BF=NF("iterator"),zF=Array.prototype,rb=function(i){return i!==void 0&&(FF.Array===i||zF[BF]===i)},HF=Sr,GF=HF("toStringTag"),sb={};sb[GF]="z";var Ag=String(sb)==="[object z]",kF=Ag,VF=Kn,oh=Rl,WF=Sr,$F=WF("toStringTag"),XF=Object,qF=oh(function(){return arguments}())==="Arguments",YF=function(i,e){try{return i[e]}catch{}},Kh=kF?oh:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=YF(e=XF(i),$F))=="string"?t:qF?oh(e):(n=oh(e))==="Object"&&VF(e.callee)?"Arguments":n},KF=Kh,Ry=cg,jF=Pl,ZF=eu,JF=Sr,QF=JF("iterator"),Cg=function(i){if(!jF(i))return Ry(i,QF)||Ry(i,"@@iterator")||ZF[KF(i)]},eB=Os,tB=Qc,nB=rs,iB=lg,rB=Cg,sB=TypeError,ab=function(i,e){var t=arguments.length<2?rB(i):e;if(tB(t))return nB(eB(t,i));throw new sB(iB(i)+" is not iterable")},aB=Os,Py=rs,oB=cg,ob=function(i,e,t){var n,r;Py(i);try{if(n=oB(i,"return"),!n){if(e==="throw")throw t;return t}n=aB(n,i)}catch(a){r=!0,n=a}if(e==="throw")throw t;if(r)throw n;return Py(n),t},lB=Yh,cB=Os,uB=rs,fB=lg,hB=rb,dB=Vh,Ly=og,pB=ab,mB=Cg,Iy=ob,_B=TypeError,lh=function(i,e){this.stopped=i,this.result=e},Dy=lh.prototype,jh=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),a=!!(t&&t.IS_RECORD),l=!!(t&&t.IS_ITERATOR),c=!!(t&&t.INTERRUPTED),u=lB(e,n),f,d,p,_,m,S,y,g=function(b){return f&&Iy(f,"normal",b),new lh(!0,b)},v=function(b){return r?(uB(b),c?u(b[0],b[1],g):u(b[0],b[1])):c?u(b,g):u(b)};if(a)f=i.iterator;else if(l)f=i;else{if(d=mB(i),!d)throw new _B(fB(i)+" is not iterable");if(hB(d)){for(p=0,_=dB(i);_>p;p++)if(m=v(i[p]),m&&Ly(Dy,m))return m;return new lh(!1)}f=pB(i,d)}for(S=a?i.next:f.next;!(y=cB(S,f)).done;){try{m=v(y.value)}catch(b){Iy(f,"throw",b)}if(typeof m=="object"&&m&&Ly(Dy,m))return m}return new lh(!1)},gB=og,vB=TypeError,Rg=function(i,e){if(gB(e,i))return i;throw new vB("Incorrect invocation")},xB=Sr,lb=xB("iterator"),cb=!1;try{var yB=0,Oy={next:function(){return{done:!!yB++}},return:function(){cb=!0}};Oy[lb]=function(){return this},Array.from(Oy,function(){throw 2})}catch{}var ub=function(i,e){try{if(!e&&!cb)return!1}catch{return!1}var t=!1;try{var n={};n[lb]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},SB=Kn,EB=Oi,Uy=qT,MB=function(i,e,t){var n,r;return Uy&&SB(n=e.constructor)&&n!==t&&EB(r=n.prototype)&&r!==t.prototype&&Uy(i,r),i},TB=Ol,bB=Ji,wB=vn,Ny=VT,AB=Dl,CB=qh,RB=jh,PB=Rg,LB=Kn,IB=Pl,Yp=Oi,Kp=Yn,DB=ub,OB=yg,UB=MB,Pg=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,a=n?"set":"add",l=bB[i],c=l&&l.prototype,u=l,f={},d=function(v){var b=wB(c[v]);AB(c,v,v==="add"?function(w){return b(this,w===0?0:w),this}:v==="delete"?function(E){return r&&!Yp(E)?!1:b(this,E===0?0:E)}:v==="get"?function(w){return r&&!Yp(w)?void 0:b(this,w===0?0:w)}:v==="has"?function(w){return r&&!Yp(w)?!1:b(this,w===0?0:w)}:function(w,U){return b(this,w===0?0:w,U),this})},p=Ny(i,!LB(l)||!(r||c.forEach&&!Kp(function(){new l().entries().next()})));if(p)u=t.getConstructor(e,i,n,a),CB.enable();else if(Ny(i,!0)){var _=new u,m=_[a](r?{}:-0,1)!==_,S=Kp(function(){_.has(1)}),y=DB(function(v){new l(v)}),g=!r&&Kp(function(){for(var v=new l,b=5;b--;)v[a](b,b);return!v.has(-0)});y||(u=e(function(v,b){PB(v,c);var E=UB(new l,v,u);return IB(b)||RB(b,E[a],{that:E,AS_ENTRIES:n}),E}),u.prototype=c,c.constructor=u),(S||g)&&(d("delete"),d("has"),n&&d("get")),(g||m)&&d(a),r&&c.clear&&delete c.clear}return f[i]=u,TB({global:!0,constructor:!0,forced:u!==l},f),OB(u,i),r||t.setStrong(u,i,n),u},Fy=kT,NB=Nr,fb=function(i,e,t){return t.get&&Fy(t.get,e,{getter:!0}),t.set&&Fy(t.set,e,{setter:!0}),NB.f(i,e,t)},FB=Dl,Lg=function(i,e,t){for(var n in e)FB(i,n,e[n],t);return i},BB=Jc,zB=fb,HB=Sr,GB=Qi,By=HB("species"),kB=function(i){var e=BB(i);GB&&e&&!e[By]&&zB(e,By,{configurable:!0,get:function(){return this}})},zy=dg,VB=fb,Hy=Lg,WB=Yh,$B=Rg,XB=Pl,qB=jh,YB=Sg,_f=Eg,KB=kB,lc=Qi,Gy=qh.fastKey,hb=Il,ky=hb.set,jp=hb.getterFor,db={getConstructor:function(i,e,t,n){var r=i(function(f,d){$B(f,a),ky(f,{type:e,index:zy(null),first:void 0,last:void 0,size:0}),lc||(f.size=0),XB(d)||qB(d,f[n],{that:f,AS_ENTRIES:t})}),a=r.prototype,l=jp(e),c=function(f,d,p){var _=l(f),m=u(f,d),S,y;return m?m.value=p:(_.last=m={index:y=Gy(d,!0),key:d,value:p,previous:S=_.last,next:void 0,removed:!1},_.first||(_.first=m),S&&(S.next=m),lc?_.size++:f.size++,y!=="F"&&(_.index[y]=m)),f},u=function(f,d){var p=l(f),_=Gy(d),m;if(_!=="F")return p.index[_];for(m=p.first;m;m=m.next)if(m.key===d)return m};return Hy(a,{clear:function(){for(var d=this,p=l(d),_=p.first;_;)_.removed=!0,_.previous&&(_.previous=_.previous.next=void 0),_=_.next;p.first=p.last=void 0,p.index=zy(null),lc?p.size=0:d.size=0},delete:function(f){var d=this,p=l(d),_=u(d,f);if(_){var m=_.next,S=_.previous;delete p.index[_.index],_.removed=!0,S&&(S.next=m),m&&(m.previous=S),p.first===_&&(p.first=m),p.last===_&&(p.last=S),lc?p.size--:d.size--}return!!_},forEach:function(d){for(var p=l(this),_=WB(d,arguments.length>1?arguments[1]:void 0),m;m=m?m.next:p.first;)for(_(m.value,m.key,this);m&&m.removed;)m=m.previous},has:function(d){return!!u(this,d)}}),Hy(a,t?{get:function(d){var p=u(this,d);return p&&p.value},set:function(d,p){return c(this,d===0?0:d,p)}}:{add:function(d){return c(this,d=d===0?0:d,d)}}),lc&&VB(a,"size",{configurable:!0,get:function(){return l(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=jp(e),a=jp(n);YB(i,e,function(l,c){ky(this,{type:n,target:l,state:r(l),kind:c,last:void 0})},function(){for(var l=a(this),c=l.kind,u=l.last;u&&u.removed;)u=u.previous;return!l.target||!(l.last=u=u?u.next:l.state.first)?(l.target=void 0,_f(void 0,!0)):_f(c==="keys"?u.key:c==="values"?u.value:[u.key,u.value],!1)},t?"entries":"values",!t,!0),KB(e)}},jB=Pg,ZB=db;jB("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},ZB);var gf=vn,cc=Map.prototype,JB={Map,set:gf(cc.set),get:gf(cc.get),has:gf(cc.has),remove:gf(cc.delete),proto:cc},QB=Ol,ez=vn,tz=Qc,nz=kh,iz=jh,Zh=JB,rz=ND,sz=Zh.Map,az=Zh.has,oz=Zh.get,lz=Zh.set,cz=ez([].push);QB({target:"Map",stat:!0,forced:rz},{groupBy:function(e,t){nz(e),tz(t);var n=new sz,r=0;return iz(e,function(a){var l=t(a,r++);az(n,l)?cz(oz(n,l),a):lz(n,l,[a])}),n}});var uz=Ag,fz=Kh,hz=uz?{}.toString:function(){return"[object "+fz(this)+"]"},dz=Ag,pz=Dl,mz=hz;dz||pz(Object.prototype,"toString",mz,{unsafe:!0});var _z=Kh,gz=String,pb=function(i){if(_z(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return gz(i)},Ig=vn,vz=ug,xz=pb,yz=kh,Sz=Ig("".charAt),Vy=Ig("".charCodeAt),Ez=Ig("".slice),Wy=function(i){return function(e,t){var n=xz(yz(e)),r=vz(t),a=n.length,l,c;return r<0||r>=a?i?"":void 0:(l=Vy(n,r),l<55296||l>56319||r+1===a||(c=Vy(n,r+1))<56320||c>57343?i?Sz(n,r):l:i?Ez(n,r,r+2):(l-55296<<10)+(c-56320)+65536)}},Mz={codeAt:Wy(!1),charAt:Wy(!0)},Tz=Mz.charAt,bz=pb,mb=Il,wz=Sg,$y=Eg,_b="String Iterator",Az=mb.set,Cz=mb.getterFor(_b);wz(String,"String",function(i){Az(this,{type:_b,string:bz(i),index:0})},function(){var e=Cz(this),t=e.string,n=e.index,r;return n>=t.length?$y(void 0,!0):(r=Tz(t,n),e.index+=r.length,$y(r,!1))});var Rz=Ji,nu=Rz,Pz=nu;Pz.Map;var Lz=Pg,Iz=db;Lz("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Iz);var Dz=nu;Dz.Set;var Oz=Rl,Uz=Array.isArray||function(e){return Oz(e)==="Array"},Nz=vn,Fz=Yn,gb=Kn,Bz=Kh,zz=Jc,Hz=HT,vb=function(){},xb=zz("Reflect","construct"),Dg=/^\s*(?:class|function)\b/,Gz=Nz(Dg.exec),kz=!Dg.test(vb),uc=function(e){if(!gb(e))return!1;try{return xb(vb,[],e),!0}catch{return!1}},yb=function(e){if(!gb(e))return!1;switch(Bz(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return kz||!!Gz(Dg,Hz(e))}catch{return!0}};yb.sham=!0;var Sb=!xb||Fz(function(){var i;return uc(uc.call)||!uc(Object)||!uc(function(){i=!0})||i})?yb:uc,Xy=Uz,Vz=Sb,Wz=Oi,$z=Sr,Xz=$z("species"),qy=Array,qz=function(i){var e;return Xy(i)&&(e=i.constructor,Vz(e)&&(e===qy||Xy(e.prototype))?e=void 0:Wz(e)&&(e=e[Xz],e===null&&(e=void 0))),e===void 0?qy:e},Yz=qz,Kz=function(i,e){return new(Yz(i))(e===0?0:e)},jz=Yh,Zz=vn,Jz=ig,Qz=Zc,eH=Vh,tH=Kz,Yy=Zz([].push),Ws=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,a=i===6,l=i===7,c=i===5||a;return function(u,f,d,p){for(var _=Qz(u),m=Jz(_),S=eH(m),y=jz(f,d),g=0,v=p||tH,b=e?v(u,S):t||l?v(u,0):void 0,E,w;S>g;g++)if((c||g in m)&&(E=m[g],w=y(E,g,_),i))if(e)b[g]=w;else if(w)switch(i){case 3:return!0;case 5:return E;case 6:return g;case 2:Yy(b,E)}else switch(i){case 4:return!1;case 7:Yy(b,E)}return a?-1:n||r?r:b}},nH={forEach:Ws(0),map:Ws(1),filter:Ws(2),some:Ws(3),every:Ws(4),find:Ws(5),findIndex:Ws(6),filterReject:Ws(7)},iH=vn,Ky=Lg,vf=qh.getWeakData,rH=Rg,sH=rs,aH=Pl,Zp=Oi,oH=jh,Eb=nH,jy=Ur,Mb=Il,lH=Mb.set,cH=Mb.getterFor,uH=Eb.find,fH=Eb.findIndex,hH=iH([].splice),dH=0,xf=function(i){return i.frozen||(i.frozen=new Tb)},Tb=function(){this.entries=[]},Jp=function(i,e){return uH(i.entries,function(t){return t[0]===e})};Tb.prototype={get:function(i){var e=Jp(this,i);if(e)return e[1]},has:function(i){return!!Jp(this,i)},set:function(i,e){var t=Jp(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=fH(this.entries,function(t){return t[0]===i});return~e&&hH(this.entries,e,1),!!~e}};var pH={getConstructor:function(i,e,t,n){var r=i(function(u,f){rH(u,a),lH(u,{type:e,id:dH++,frozen:void 0}),aH(f)||oH(f,u[n],{that:u,AS_ENTRIES:t})}),a=r.prototype,l=cH(e),c=function(u,f,d){var p=l(u),_=vf(sH(f),!0);return _===!0?xf(p).set(f,d):_[p.id]=d,u};return Ky(a,{delete:function(u){var f=l(this);if(!Zp(u))return!1;var d=vf(u);return d===!0?xf(f).delete(u):d&&jy(d,f.id)&&delete d[f.id]},has:function(f){var d=l(this);if(!Zp(f))return!1;var p=vf(f);return p===!0?xf(d).has(f):p&&jy(p,d.id)}}),Ky(a,t?{get:function(f){var d=l(this);if(Zp(f)){var p=vf(f);return p===!0?xf(d).get(f):p?p[d.id]:void 0}},set:function(f,d){return c(this,f,d)}}:{add:function(f){return c(this,f,!0)}}),r}},mH=nb,Zy=Ji,ch=vn,Jy=Lg,_H=qh,gH=Pg,bb=pH,yf=Oi,Sf=Il.enforce,vH=Yn,xH=DT,iu=Object,yH=Array.isArray,Ef=iu.isExtensible,wb=iu.isFrozen,SH=iu.isSealed,Ab=iu.freeze,EH=iu.seal,MH=!Zy.ActiveXObject&&"ActiveXObject"in Zy,fc,Cb=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Rb=gH("WeakMap",Cb,bb),Jo=Rb.prototype,uh=ch(Jo.set),TH=function(){return mH&&vH(function(){var i=Ab([]);return uh(new Rb,i,1),!wb(i)})};if(xH)if(MH){fc=bb.getConstructor(Cb,"WeakMap",!0),_H.enable();var Qy=ch(Jo.delete),Mf=ch(Jo.has),eS=ch(Jo.get);Jy(Jo,{delete:function(i){if(yf(i)&&!Ef(i)){var e=Sf(this);return e.frozen||(e.frozen=new fc),Qy(this,i)||e.frozen.delete(i)}return Qy(this,i)},has:function(e){if(yf(e)&&!Ef(e)){var t=Sf(this);return t.frozen||(t.frozen=new fc),Mf(this,e)||t.frozen.has(e)}return Mf(this,e)},get:function(e){if(yf(e)&&!Ef(e)){var t=Sf(this);return t.frozen||(t.frozen=new fc),Mf(this,e)?eS(this,e):t.frozen.get(e)}return eS(this,e)},set:function(e,t){if(yf(e)&&!Ef(e)){var n=Sf(this);n.frozen||(n.frozen=new fc),Mf(this,e)?uh(this,e,t):n.frozen.set(e,t)}else uh(this,e,t);return this}})}else TH()&&Jy(Jo,{set:function(e,t){var n;return yH(e)&&(wb(e)?n=Ab:SH(e)&&(n=EH)),uh(this,e,t),n&&n(e),this}});var bH=nu;bH.WeakMap;var wH=rs,AH=ob,CH=function(i,e,t,n){try{return n?e(wH(t)[0],t[1]):e(t)}catch(r){AH(i,"throw",r)}},RH=Qi,PH=Nr,LH=$h,IH=function(i,e,t){RH?PH.f(i,e,LH(0,t)):i[e]=t},DH=Yh,OH=Os,UH=Zc,NH=CH,FH=rb,BH=Sb,zH=Vh,tS=IH,HH=ab,GH=Cg,nS=Array,kH=function(e){var t=UH(e),n=BH(this),r=arguments.length,a=r>1?arguments[1]:void 0,l=a!==void 0;l&&(a=DH(a,r>2?arguments[2]:void 0));var c=GH(t),u=0,f,d,p,_,m,S;if(c&&!(this===nS&&FH(c)))for(_=HH(t,c),m=_.next,d=n?new this:[];!(p=OH(m,_)).done;u++)S=l?NH(_,a,[p.value,u],!0):p.value,tS(d,u,S);else for(f=zH(t),d=n?new this(f):nS(f);f>u;u++)S=l?a(t[u],u):t[u],tS(d,u,S);return d.length=u,d},VH=Ol,WH=kH,$H=ub,XH=!$H(function(i){Array.from(i)});VH({target:"Array",stat:!0,forced:XH},{from:WH});var qH=nu;qH.Array.from;var iS=Qi,YH=vn,KH=Os,jH=Yn,Qp=PT,ZH=xg,JH=_g,QH=Zc,eG=ig,Do=Object.assign,rS=Object.defineProperty,tG=YH([].concat),nG=!Do||jH(function(){if(iS&&Do({b:1},Do(rS({},"a",{enumerable:!0,get:function(){rS(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),Do({},i)[t]!==7||Qp(Do({},e)).join("")!==n})?function(e,t){for(var n=QH(e),r=arguments.length,a=1,l=ZH.f,c=JH.f;r>a;)for(var u=eG(arguments[a++]),f=l?tG(Qp(u),l(u)):Qp(u),d=f.length,p=0,_;d>p;)_=f[p++],(!iS||KH(c,u,_))&&(n[_]=u[_]);return n}:Do,iG=Ol,sS=nG;iG({target:"Object",stat:!0,arity:2,forced:Object.assign!==sS},{assign:sS});var rG=nu;rG.Object.assign;var Tf,Ch=new WeakMap;function Pb(){if(Tf!==void 0)return Tf;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return Tf=i?{passive:!1}:!1,Tf}function Ul(i){var e=Ch.get(i)||[];return Ch.set(i,e),function(n,r,a){function l(c){c.defaultPrevented||a(c)}r.split(/\s+/g).forEach(function(c){e.push({elem:n,eventName:c,handler:l}),n.addEventListener(c,l,Pb())})}}function sG(i){var e=Ch.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,a=t.handler;n.removeEventListener(r,a,Pb())}),Ch.delete(i))}function aG(i){return i.touches?i.touches[i.touches.length-1]:i}function hl(i){var e=aG(i);return{x:e.clientX,y:e.clientY}}function bf(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var Lb=["webkit","moz","ms","o"],oG=new RegExp("^-(?!(?:"+Lb.join("|")+")-)");function lG(i){var e={};return Object.keys(i).forEach(function(t){if(!oG.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,Lb.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function oo(i,e){e=lG(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,a){return a.toUpperCase()});i.style[n]=e[t]})}var cG=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=hl(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,a=t.lastPosition,l=Date.now(),c=hl(e),u={x:-(c.x-a.x),y:-(c.y-a.y)},f=l-r||16.7,d=u.x/f*16.7,p=u.y/f*16.7;n.x=d*this.velocityMultiplier,n.y=p*this.velocityMultiplier,this.delta=u,this.updateTime=l,this.lastPosition=c},i}(),uG=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?ts({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?ts({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(a){for(var l=Math.abs(r[a])<=10?0:r[a];l!==0;)n[a]+=l,l=l*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(a){t._renew(a)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new cG(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function yr(i,e,t){return Math.max(e,Math.min(t,i))}function Ib(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var l=this,c=[],u=0;u<arguments.length;u++)c[u]=arguments[u];if(t){var f=Date.now(),d=f-r;r=f,d>=e&&i.apply(this,c)}clearTimeout(n),n=setTimeout(function(){i.apply(l,c)},e)}}function aS(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(a){Object.defineProperty(this,r,{value:yr(a,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function em(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function Db(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var a=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:Ib.apply(void 0,MD([a],i))}),this[n]}}}}var fG=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),Fa([aS(0,1)],i.prototype,"damping",void 0),Fa([aS(0,1/0)],i.prototype,"thumbMinSize",void 0),Fa([em],i.prototype,"renderByPixels",void 0),Fa([em],i.prototype,"alwaysShowTracks",void 0),Fa([em],i.prototype,"continuousScrolling",void 0),i}(),El;(function(i){i.X="x",i.Y="y"})(El||(El={}));var hG=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),oo(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case El.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case El.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),oS=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new hG(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){oo(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),dG=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new oS(El.X,t),this.yAxis=new oS(El.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},Fa([Db(300)],i.prototype,"autoHideOnIdle",null),i}();function pG(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(c){return n[c]?parseFloat(n[c]):0}),a=r[0]+r[1],l=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+l,height:t.offsetHeight-t.clientHeight+t.scrollHeight+a}}}function mG(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),a=Math.max(t.left,n.left),l=Math.min(t.right,n.right),c=Math.min(t.bottom,n.bottom);return r<c&&a<l}function _G(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function gG(i,e,t){var n=i.options,r=i.offset,a=i.limit,l=i.track,c=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=yr(e,0,a.x),t=yr(t,0,a.y),e!==r.x&&l.xAxis.show(),t!==r.y&&l.yAxis.show(),n.alwaysShowTracks||l.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,oo(c,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),l.update(),{offset:ts({},r),limit:ts({},a)})}var lS=new WeakMap;function vG(i,e,t,n,r){n===void 0&&(n=0);var a=r===void 0?{}:r,l=a.easing,c=l===void 0?xG:l,u=a.callback,f=i.options,d=i.offset,p=i.limit;f.renderByPixels&&(e=Math.round(e),t=Math.round(t));var _=d.x,m=d.y,S=yr(e,0,p.x)-_,y=yr(t,0,p.y)-m,g=Date.now();function v(){var b=Date.now()-g,E=n?c(Math.min(b/n,1)):1;if(i.setPosition(_+S*E,m+y*E),b>=n)typeof u=="function"&&u.call(i);else{var w=requestAnimationFrame(v);lS.set(i,w)}}cancelAnimationFrame(lS.get(i)),v()}function xG(i){return Math.pow(i-1,3)+1}function yG(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,a=r===void 0?!0:r,l=n.onlyScrollIfNeeded,c=l===void 0?!1:l,u=n.offsetTop,f=u===void 0?0:u,d=n.offsetLeft,p=d===void 0?0:d,_=n.offsetBottom,m=_===void 0?0:_,S=i.containerEl,y=i.bounding,g=i.offset,v=i.limit;if(!(!e||!S.contains(e))){var b=e.getBoundingClientRect();if(!(c&&i.isVisible(e))){var E=a?b.top-y.top-f:b.bottom-y.bottom+m;i.setMomentum(b.left-y.left-p,yr(E,-g.y,v.y-g.y))}}}var Ob=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=ts(ts({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return ts({},e)},i.pluginName="",i.defaultOptions={},i}(),Rh={order:new Set,constructors:{}};function SG(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");Rh.order.add(n),Rh.constructors[n]=t})}function EG(i,e){return Array.from(Rh.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=Rh.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var fr;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(fr||(fr={}));function MG(i){var e=Ul(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!wG(r)){var a=TG(i,n.keyCode||n.which);if(a){var l=a[0],c=a[1];i.addTransformableMomentum(l,c,n,function(u){u?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function TG(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case fr.TAB:return bG(i);case fr.SPACE:return[0,200];case fr.PAGE_UP:return[0,-t.container.height+40];case fr.PAGE_DOWN:return[0,t.container.height-40];case fr.END:return[0,n.y-r.y];case fr.HOME:return[0,-r.y];case fr.LEFT:return[-40,0];case fr.UP:return[0,-40];case fr.RIGHT:return[40,0];case fr.DOWN:return[0,40];default:return null}}function bG(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function wG(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var kr;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(kr||(kr={}));function AG(i){var e=Ul(i),t=i.containerEl,n=i.track,r=n.xAxis,a=n.yAxis;function l(m,S){var y=i.size,g=i.limit,v=i.offset;if(m===kr.X){var b=y.container.width+(r.thumb.realSize-r.thumb.displaySize);return yr(S/b*y.content.width,0,g.x)-v.x}if(m===kr.Y){var E=y.container.height+(a.thumb.realSize-a.thumb.displaySize);return yr(S/E*y.content.height,0,g.y)-v.y}return 0}function c(m){if(bf(m,[r.element,r.thumb.element]))return kr.X;if(bf(m,[a.element,a.thumb.element]))return kr.Y}var u,f,d,p,_;e(t,"click",function(m){if(!(f||!bf(m.target,[r.element,a.element]))){var S=m.target,y=c(S),g=S.getBoundingClientRect(),v=hl(m);if(y===kr.X){var b=v.x-g.left-r.thumb.displaySize/2;i.setMomentum(l(y,b),0)}if(y===kr.Y){var b=v.y-g.top-a.thumb.displaySize/2;i.setMomentum(0,l(y,b))}}}),e(t,"mousedown",function(m){if(bf(m.target,[r.thumb.element,a.thumb.element])){u=!0;var S=m.target,y=hl(m),g=S.getBoundingClientRect();p=c(S),d={x:y.x-g.left,y:y.y-g.top},_=t.getBoundingClientRect(),oo(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(m){if(u){f=!0;var S=hl(m);if(p===kr.X){var y=S.x-d.x-_.left;i.setMomentum(l(p,y),0)}if(p===kr.Y){var y=S.y-d.y-_.top;i.setMomentum(0,l(p,y))}}}),e(window,"mouseup blur",function(){u=f=!1,oo(i.containerEl,{"-user-select":""})})}function CG(i){var e=Ul(i);e(window,"resize",Ib(i.update.bind(i),300))}function RG(i){var e=Ul(i),t=i.containerEl,n=i.contentEl,r=!1,a=!1,l;function c(u){var f=u.x,d=u.y;if(!(!f&&!d)){var p=i.offset,_=i.limit;i.setMomentum(yr(p.x+f,0,_.x)-p.x,yr(p.y+d,0,_.y)-p.y),l=requestAnimationFrame(function(){c({x:f,y:d})})}}e(window,"mousemove",function(u){if(r){cancelAnimationFrame(l);var f=PG(i,u);c(f)}}),e(n,"contextmenu",function(){a=!0,cancelAnimationFrame(l),r=!1}),e(n,"mousedown",function(){a=!1}),e(n,"selectstart",function(){a||(cancelAnimationFrame(l),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(l),r=!1,a=!1}),e(t,"scroll",function(u){u.preventDefault(),t.scrollTop=t.scrollLeft=0})}function PG(i,e){var t=i.bounding,n=t.top,r=t.right,a=t.bottom,l=t.left,c=hl(e),u=c.x,f=c.y,d={x:0,y:0},p=20;return u===0&&f===0||(u>r-p?d.x=u-r+p:u<l+p&&(d.x=u-l-p),f>a-p?d.y=f-a+p:f<n+p&&(d.y=f-n-p),d.x*=2,d.y*=2),d}var wf;function LG(i){var e=i.options.delegateTo||i.containerEl,t=new uG,n=Ul(i),r,a=0;n(e,"touchstart",function(l){t.track(l),i.setMomentum(0,0),a===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),a++}),n(e,"touchmove",function(l){if(!(wf&&wf!==i)){t.update(l);var c=t.getDelta(),u=c.x,f=c.y;i.addTransformableMomentum(u,f,l,function(d){d&&l.cancelable&&(l.preventDefault(),wf=i)})}}),n(e,"touchcancel touchend",function(l){var c=t.getEasingDistance(r);i.addTransformableMomentum(c.x,c.y,l),a--,a===0&&(i.options.damping=r),t.release(l),wf=null})}function IG(i){var e=Ul(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var a=OG(r),l=a.x,c=a.y;i.addTransformableMomentum(l,c,r,function(u){u&&r.preventDefault()})})}var hc={STANDARD:1,OTHERS:-3},cS=[1,28,500],DG=function(i){return cS[i]||cS[0]};function OG(i){if("deltaX"in i){var e=DG(i.deltaMode);return{x:i.deltaX/hc.STANDARD*e,y:i.deltaY/hc.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/hc.OTHERS,y:i.wheelDeltaY/hc.OTHERS}:{x:0,y:i.wheelDelta/hc.OTHERS}}const uS=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:MG,mouseHandler:AG,resizeHandler:CG,selectHandler:RG,touchHandler:LG,wheelHandler:IG},Symbol.toStringTag,{value:"Module"}));var $r=new Map,fS=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new fG(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),oo(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(u){r.appendChild(u)}),e.appendChild(r),this.track=new dG(this),this.size=this.getSize(),this._plugins=EG(this,this.options.plugins);var a=e.scrollLeft,l=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(a,l,{withoutCallbacks:!0});var c=window.ResizeObserver;typeof c=="function"&&(this._observer=new c(function(){n.update()}),this._observer.observe(r)),$r.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=$r.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return pG(this)},i.prototype.update=function(){_G(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return mG(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var a=gG(this,e,t);!a||n.withoutCallbacks||this._listeners.forEach(function(l){l.call(r,a)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),vG(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),yG(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var a=this._plugins.reduce(function(c,u){return u.transformDelta(c,n)||c},{x:e,y:t}),l=!this._shouldPropagateMomentum(a.x,a.y);l&&this.addMomentum(a.x,a.y),r&&r.call(this,l)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;sG(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),$r.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(a){t.appendChild(a)}),oo(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(a){a.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(uS).forEach(function(t){uS[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,a=n.offset,l=n.limit;if(!r.continuousScrolling)return!1;l.x===0&&l.y===0&&this._updateDebounced();var c=yr(e+a.x,0,l.x),u=yr(t+a.y,0,l.y),f=!0;return f=f&&c===a.x,f=f&&u===a.y,f=f&&(a.x===l.x||a.x===0||a.y===l.y||a.y===0),f},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=ts({},this._momentum);this._plugins.forEach(function(a){a.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,a=t._momentum,l=r[e],c=a[e];if(Math.abs(c)<=.1)return{momentum:0,position:l+c};var u=c*(1-n.damping);return n.renderByPixels&&(u|=0),{momentum:u,position:l+c-u}},Fa([Db(100,!0)],i.prototype,"_updateDebounced",null),i}(),UG="rgba(222, 222, 222, .75)",NG="rgba(0, 0, 0, .5)",FG=`
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
  background: `+UG+`;
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
  background: `+NG+`;
  border-radius: 4px;
}
`,Ub="smooth-scrollbar-style",Ph=!1;function hS(){if(!(Ph||typeof window>"u")){var i=document.createElement("style");i.id=Ub,i.textContent=FG,document.head&&document.head.appendChild(i),Ph=!0}}function BG(){if(!(!Ph||typeof window>"u")){var i=document.getElementById(Ub);!i||!i.parentNode||(i.parentNode.removeChild(i),Ph=!1)}}var dS=function(i){ED(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return hS(),$r.has(t)?$r.get(t):new fS(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return $r.has(t)},e.get=function(t){return $r.get(t)},e.getAll=function(){return Array.from($r.values())},e.destroy=function(t){var n=$r.get(t);n&&n.destroy()},e.destroyAll=function(){$r.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return SG.apply(void 0,t)},e.attachStyle=function(){return hS()},e.detachStyle=function(){return BG()},e.version="8.8.4",e.ScrollbarPlugin=Ob,e}(fS);const dn={humbergerBtnSelector:"button.Header__Icon",logoSelector:"Header__LogoImage",buttonParent:"Header__FlexItem",svgCart:"cart",sidebarBtnConfig:{attributes:{"data-action":"close-drawer","data-drawer-id":"sidebar-cart","aria-label":"カートを閉じる"},classes:["Drawer__Close","Icon-Wrapper--clickable"]},cartAtagConfig:{attributes:{href:"/cart","data-action":"open-drawer","data-drawer-id":"sidebar-cart","aria-label":"カートを開く","aria-expanded":"false"},classes:["Header__Icon","Icon-Wrapper","Icon-Wrapper--clickable","hidden-desk"]},svg:{cartDesktop:"cartDesktopSvg",cartPhone:"cartPhoneSvg"},page:{breakpoint:769},time:{debounce:250},phone:{width:"20",height:"15",rectWidth:"20",rectHeight:"1"},tabletAndUp:{width:"30",height:"25",rectWidth:"30",rectHeight:"2"},logo:{white:"./logo-white.png",black:"./logo-black.png",phone:"18px",tablet:"28px"},smallCart:{width:"18",height:"18",strokeWidth:"0.8"},largeCart:{width:"28",height:"28",strokeWidth:"1.2"},smallHeader:{height:"48"},largeHeader:{height:"64"},target:{pageContainer:"page-container",header:"section-header",announcement:"section-announcement"},rootProperty:{headerHeight:"--header-height",announcementHeight:"--announcement-bar-height"}};var Nb={exports:{}};(function(i){(function(e,t){i.exports?i.exports=t(k2,V2()):t(e.Flickity,e.fizzyUIUtils)})(typeof window<"u"?window:qr,function(t,n){let r=t.Slide;r.prototype.renderFadePosition=function(){},r.prototype.setOpacity=function(p){this.cells.forEach(_=>{_.element.style.opacity=p})},t.create.fade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};let a=t.prototype,l=a.updateSlides;a.updateSlides=function(){l.apply(this,arguments),this.options.fade&&this.slides.forEach((p,_)=>{let m=p.target-p.x,S=p.cells[0].x;p.cells.forEach(g=>{let v=g.x-S-m;this._renderCellPosition(g,v)});let y=_===this.selectedIndex?1:0;p.setOpacity(y)})},a.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},a.onSettleFade=function(){if(delete this.didDragEnd,!this.options.fade)return;this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!==this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0)},a.onDragEndFade=function(){this.didDragEnd=!0},a.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},a.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(p=>{p.setOpacity("")}))};let c=a.positionSlider;a.positionSlider=function(){if(!this.options.fade){c.apply(this,arguments);return}this.fadeSlides(),this.dispatchScrollEvent()};let u=a.positionSliderAtSelected;a.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),u.apply(this,arguments)},a.fadeSlides=function(){if(this.slides.length<2)return;let p=this.getFadeIndexes(),_=this.slides[p.a],m=this.slides[p.b],S=this.wrapDifference(_.target,m.target),y=this.wrapDifference(_.target,-this.x);y/=S,_.setOpacity(1-y),m.setOpacity(y);let g=p.a;this.isDragging&&(g=y>.5?p.a:p.b),this.fadeHideIndex!==void 0&&this.fadeHideIndex!==g&&this.fadeHideIndex!==p.a&&this.fadeHideIndex!==p.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=g},a.getFadeIndexes=function(){return!this.isDragging&&!this.didDragEnd?{a:this.fadeIndex,b:this.selectedIndex}:this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes()},a.getFadeDragWrapIndexes=function(){let p=this.slides.map(function(b,E){return this.getSlideDistance(-this.x,E)},this),_=p.map(function(b){return Math.abs(b)}),m=Math.min(..._),S=_.indexOf(m),y=p[S],g=this.slides.length,v=y>=0?1:-1;return{a:S,b:n.modulo(S+v,g)}},a.getFadeDragLimitIndexes=function(){let p=0;for(let _=0;_<this.slides.length-1;_++){let m=this.slides[_];if(-this.x<m.target)break;p=_}return{a:p,b:p+1}},a.wrapDifference=function(p,_){let m=_-p;if(!this.options.wrapAround)return m;let S=m+this.slideableWidth,y=m-this.slideableWidth;return Math.abs(S)<Math.abs(m)&&(m=S),Math.abs(y)<Math.abs(m)&&(m=y),m};let f=a._updateWrapShiftCells;a._updateWrapShiftCells=function(){this.options.fade?this.isWrapping=this.getIsWrapping():f.apply(this,arguments)};let d=a.shiftWrapCells;return a.shiftWrapCells=function(){this.options.fade||d.apply(this,arguments)},t})})(Nb);var zG=Nb.exports;const HG=W2(zG);var Lh={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Lh.exports;(function(i,e){(function(){var t,n="4.17.21",r=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",l="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",f=500,d="__lodash_placeholder__",p=1,_=2,m=4,S=1,y=2,g=1,v=2,b=4,E=8,w=16,U=32,I=64,R=128,G=256,$=512,T=30,O="...",Y=800,ce=16,z=1,j=2,K=3,ne=1/0,ie=9007199254740991,ae=17976931348623157e292,N=NaN,oe=4294967295,Re=oe-1,Je=oe>>>1,te=[["ary",R],["bind",g],["bindKey",v],["curry",E],["curryRight",w],["flip",$],["partial",U],["partialRight",I],["rearg",G]],ue="[object Arguments]",Te="[object Array]",Ie="[object AsyncFunction]",Oe="[object Boolean]",Ae="[object Date]",_t="[object DOMException]",$e="[object Error]",X="[object Function]",st="[object GeneratorFunction]",Me="[object Map]",ke="[object Number]",Ue="[object Null]",Z="[object Object]",et="[object Promise]",D="[object Proxy]",A="[object RegExp]",q="[object Set]",me="[object String]",de="[object Symbol]",ge="[object Undefined]",we="[object WeakMap]",be="[object WeakSet]",Se="[object ArrayBuffer]",He="[object DataView]",tt="[object Float32Array]",pe="[object Float64Array]",bt="[object Int8Array]",Xe="[object Int16Array]",at="[object Int32Array]",Ve="[object Uint8Array]",De="[object Uint8ClampedArray]",ot="[object Uint16Array]",gt="[object Uint32Array]",It=/\b__p \+= '';/g,Pe=/\b(__p \+=) '' \+/g,Ct=/(__e\(.*?\)|\b__t\)) \+\n'';/g,F=/&(?:amp|lt|gt|quot|#39);/g,ve=/[&<>"']/g,xe=RegExp(F.source),Ne=RegExp(ve.source),Ze=/<%-([\s\S]+?)%>/g,vt=/<%([\s\S]+?)%>/g,Dt=/<%=([\s\S]+?)%>/g,qe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,We=/^\w*$/,Ke=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ye=/[\\^$.*+?()[\]{}|]/g,nt=RegExp(ye.source),Qe=/^\s+/,ft=/\s/,tn=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,St=/\{\n\/\* \[wrapped with (.+)\] \*/,$t=/,? & /,xn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Kt=/[()=,{}\[\]\/\s]/,Xt=/\\(\\)?/g,zt=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,jn=/\w*$/,L=/^[-+]0x[0-9a-f]+$/i,V=/^0b[01]+$/i,ee=/^\[object .+?Constructor\]$/,Q=/^0o[0-7]+$/i,J=/^(?:0|[1-9]\d*)$/,Ee=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Fe=/($^)/,it=/['\n\r\u2028\u2029\\]/g,Be="\\ud800-\\udfff",Ye="\\u0300-\\u036f",rt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",jt=Ye+rt+ht,pn="\\u2700-\\u27bf",Ft="a-z\\xdf-\\xf6\\xf8-\\xff",kn="\\xac\\xb1\\xd7\\xf7",Gt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",dt="\\u2000-\\u206f",Bl=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",nn="A-Z\\xc0-\\xd6\\xd8-\\xde",Fr="\\ufe0e\\ufe0f",zl=kn+Gt+dt+Bl,ss="['’]",Hl="["+Be+"]",Cn="["+zl+"]",er="["+jt+"]",fo="\\d+",yi="["+pn+"]",ho="["+Ft+"]",cu="[^"+Be+zl+fo+pn+Ft+nn+"]",po="\\ud83c[\\udffb-\\udfff]",k1="(?:"+er+"|"+po+")",Yg="[^"+Be+"]",rd="(?:\\ud83c[\\udde6-\\uddff]){2}",sd="[\\ud800-\\udbff][\\udc00-\\udfff]",mo="["+nn+"]",Kg="\\u200d",jg="(?:"+ho+"|"+cu+")",V1="(?:"+mo+"|"+cu+")",Zg="(?:"+ss+"(?:d|ll|m|re|s|t|ve))?",Jg="(?:"+ss+"(?:D|LL|M|RE|S|T|VE))?",Qg=k1+"?",ev="["+Fr+"]?",W1="(?:"+Kg+"(?:"+[Yg,rd,sd].join("|")+")"+ev+Qg+")*",$1="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",X1="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tv=ev+Qg+W1,q1="(?:"+[yi,rd,sd].join("|")+")"+tv,Y1="(?:"+[Yg+er+"?",er,rd,sd,Hl].join("|")+")",K1=RegExp(ss,"g"),j1=RegExp(er,"g"),ad=RegExp(po+"(?="+po+")|"+Y1+tv,"g"),Z1=RegExp([mo+"?"+ho+"+"+Zg+"(?="+[Cn,mo,"$"].join("|")+")",V1+"+"+Jg+"(?="+[Cn,mo+jg,"$"].join("|")+")",mo+"?"+jg+"+"+Zg,mo+"+"+Jg,X1,$1,fo,q1].join("|"),"g"),J1=RegExp("["+Kg+Be+jt+Fr+"]"),Q1=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,ew=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],tw=-1,rn={};rn[tt]=rn[pe]=rn[bt]=rn[Xe]=rn[at]=rn[Ve]=rn[De]=rn[ot]=rn[gt]=!0,rn[ue]=rn[Te]=rn[Se]=rn[Oe]=rn[He]=rn[Ae]=rn[$e]=rn[X]=rn[Me]=rn[ke]=rn[Z]=rn[A]=rn[q]=rn[me]=rn[we]=!1;var Qt={};Qt[ue]=Qt[Te]=Qt[Se]=Qt[He]=Qt[Oe]=Qt[Ae]=Qt[tt]=Qt[pe]=Qt[bt]=Qt[Xe]=Qt[at]=Qt[Me]=Qt[ke]=Qt[Z]=Qt[A]=Qt[q]=Qt[me]=Qt[de]=Qt[Ve]=Qt[De]=Qt[ot]=Qt[gt]=!0,Qt[$e]=Qt[X]=Qt[we]=!1;var nw={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},iw={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},rw={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},sw={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},aw=parseFloat,ow=parseInt,nv=typeof qr=="object"&&qr&&qr.Object===Object&&qr,lw=typeof self=="object"&&self&&self.Object===Object&&self,Vn=nv||lw||Function("return this")(),od=e&&!e.nodeType&&e,ga=od&&!0&&i&&!i.nodeType&&i,iv=ga&&ga.exports===od,ld=iv&&nv.process,tr=function(){try{var k=ga&&ga.require&&ga.require("util").types;return k||ld&&ld.binding&&ld.binding("util")}catch{}}(),rv=tr&&tr.isArrayBuffer,sv=tr&&tr.isDate,av=tr&&tr.isMap,ov=tr&&tr.isRegExp,lv=tr&&tr.isSet,cv=tr&&tr.isTypedArray;function Ui(k,le,re){switch(re.length){case 0:return k.call(le);case 1:return k.call(le,re[0]);case 2:return k.call(le,re[0],re[1]);case 3:return k.call(le,re[0],re[1],re[2])}return k.apply(le,re)}function cw(k,le,re,ze){for(var pt=-1,Ht=k==null?0:k.length;++pt<Ht;){var Rn=k[pt];le(ze,Rn,re(Rn),k)}return ze}function nr(k,le){for(var re=-1,ze=k==null?0:k.length;++re<ze&&le(k[re],re,k)!==!1;);return k}function uw(k,le){for(var re=k==null?0:k.length;re--&&le(k[re],re,k)!==!1;);return k}function uv(k,le){for(var re=-1,ze=k==null?0:k.length;++re<ze;)if(!le(k[re],re,k))return!1;return!0}function Us(k,le){for(var re=-1,ze=k==null?0:k.length,pt=0,Ht=[];++re<ze;){var Rn=k[re];le(Rn,re,k)&&(Ht[pt++]=Rn)}return Ht}function uu(k,le){var re=k==null?0:k.length;return!!re&&_o(k,le,0)>-1}function cd(k,le,re){for(var ze=-1,pt=k==null?0:k.length;++ze<pt;)if(re(le,k[ze]))return!0;return!1}function on(k,le){for(var re=-1,ze=k==null?0:k.length,pt=Array(ze);++re<ze;)pt[re]=le(k[re],re,k);return pt}function Ns(k,le){for(var re=-1,ze=le.length,pt=k.length;++re<ze;)k[pt+re]=le[re];return k}function ud(k,le,re,ze){var pt=-1,Ht=k==null?0:k.length;for(ze&&Ht&&(re=k[++pt]);++pt<Ht;)re=le(re,k[pt],pt,k);return re}function fw(k,le,re,ze){var pt=k==null?0:k.length;for(ze&&pt&&(re=k[--pt]);pt--;)re=le(re,k[pt],pt,k);return re}function fd(k,le){for(var re=-1,ze=k==null?0:k.length;++re<ze;)if(le(k[re],re,k))return!0;return!1}var hw=hd("length");function dw(k){return k.split("")}function pw(k){return k.match(xn)||[]}function fv(k,le,re){var ze;return re(k,function(pt,Ht,Rn){if(le(pt,Ht,Rn))return ze=Ht,!1}),ze}function fu(k,le,re,ze){for(var pt=k.length,Ht=re+(ze?1:-1);ze?Ht--:++Ht<pt;)if(le(k[Ht],Ht,k))return Ht;return-1}function _o(k,le,re){return le===le?ww(k,le,re):fu(k,hv,re)}function mw(k,le,re,ze){for(var pt=re-1,Ht=k.length;++pt<Ht;)if(ze(k[pt],le))return pt;return-1}function hv(k){return k!==k}function dv(k,le){var re=k==null?0:k.length;return re?pd(k,le)/re:N}function hd(k){return function(le){return le==null?t:le[k]}}function dd(k){return function(le){return k==null?t:k[le]}}function pv(k,le,re,ze,pt){return pt(k,function(Ht,Rn,Zt){re=ze?(ze=!1,Ht):le(re,Ht,Rn,Zt)}),re}function _w(k,le){var re=k.length;for(k.sort(le);re--;)k[re]=k[re].value;return k}function pd(k,le){for(var re,ze=-1,pt=k.length;++ze<pt;){var Ht=le(k[ze]);Ht!==t&&(re=re===t?Ht:re+Ht)}return re}function md(k,le){for(var re=-1,ze=Array(k);++re<k;)ze[re]=le(re);return ze}function gw(k,le){return on(le,function(re){return[re,k[re]]})}function mv(k){return k&&k.slice(0,xv(k)+1).replace(Qe,"")}function Ni(k){return function(le){return k(le)}}function _d(k,le){return on(le,function(re){return k[re]})}function Gl(k,le){return k.has(le)}function _v(k,le){for(var re=-1,ze=k.length;++re<ze&&_o(le,k[re],0)>-1;);return re}function gv(k,le){for(var re=k.length;re--&&_o(le,k[re],0)>-1;);return re}function vw(k,le){for(var re=k.length,ze=0;re--;)k[re]===le&&++ze;return ze}var xw=dd(nw),yw=dd(iw);function Sw(k){return"\\"+sw[k]}function Ew(k,le){return k==null?t:k[le]}function go(k){return J1.test(k)}function Mw(k){return Q1.test(k)}function Tw(k){for(var le,re=[];!(le=k.next()).done;)re.push(le.value);return re}function gd(k){var le=-1,re=Array(k.size);return k.forEach(function(ze,pt){re[++le]=[pt,ze]}),re}function vv(k,le){return function(re){return k(le(re))}}function Fs(k,le){for(var re=-1,ze=k.length,pt=0,Ht=[];++re<ze;){var Rn=k[re];(Rn===le||Rn===d)&&(k[re]=d,Ht[pt++]=re)}return Ht}function hu(k){var le=-1,re=Array(k.size);return k.forEach(function(ze){re[++le]=ze}),re}function bw(k){var le=-1,re=Array(k.size);return k.forEach(function(ze){re[++le]=[ze,ze]}),re}function ww(k,le,re){for(var ze=re-1,pt=k.length;++ze<pt;)if(k[ze]===le)return ze;return-1}function Aw(k,le,re){for(var ze=re+1;ze--;)if(k[ze]===le)return ze;return ze}function vo(k){return go(k)?Rw(k):hw(k)}function Er(k){return go(k)?Pw(k):dw(k)}function xv(k){for(var le=k.length;le--&&ft.test(k.charAt(le)););return le}var Cw=dd(rw);function Rw(k){for(var le=ad.lastIndex=0;ad.test(k);)++le;return le}function Pw(k){return k.match(ad)||[]}function Lw(k){return k.match(Z1)||[]}var Iw=function k(le){le=le==null?Vn:xo.defaults(Vn.Object(),le,xo.pick(Vn,ew));var re=le.Array,ze=le.Date,pt=le.Error,Ht=le.Function,Rn=le.Math,Zt=le.Object,vd=le.RegExp,Dw=le.String,ir=le.TypeError,du=re.prototype,Ow=Ht.prototype,yo=Zt.prototype,pu=le["__core-js_shared__"],mu=Ow.toString,Wt=yo.hasOwnProperty,Uw=0,yv=function(){var s=/[^.]+$/.exec(pu&&pu.keys&&pu.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),_u=yo.toString,Nw=mu.call(Zt),Fw=Vn._,Bw=vd("^"+mu.call(Wt).replace(ye,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),gu=iv?le.Buffer:t,Bs=le.Symbol,vu=le.Uint8Array,Sv=gu?gu.allocUnsafe:t,xu=vv(Zt.getPrototypeOf,Zt),Ev=Zt.create,Mv=yo.propertyIsEnumerable,yu=du.splice,Tv=Bs?Bs.isConcatSpreadable:t,kl=Bs?Bs.iterator:t,va=Bs?Bs.toStringTag:t,Su=function(){try{var s=Ma(Zt,"defineProperty");return s({},"",{}),s}catch{}}(),zw=le.clearTimeout!==Vn.clearTimeout&&le.clearTimeout,Hw=ze&&ze.now!==Vn.Date.now&&ze.now,Gw=le.setTimeout!==Vn.setTimeout&&le.setTimeout,Eu=Rn.ceil,Mu=Rn.floor,xd=Zt.getOwnPropertySymbols,kw=gu?gu.isBuffer:t,bv=le.isFinite,Vw=du.join,Ww=vv(Zt.keys,Zt),Pn=Rn.max,Zn=Rn.min,$w=ze.now,Xw=le.parseInt,wv=Rn.random,qw=du.reverse,yd=Ma(le,"DataView"),Vl=Ma(le,"Map"),Sd=Ma(le,"Promise"),So=Ma(le,"Set"),Wl=Ma(le,"WeakMap"),$l=Ma(Zt,"create"),Tu=Wl&&new Wl,Eo={},Yw=Ta(yd),Kw=Ta(Vl),jw=Ta(Sd),Zw=Ta(So),Jw=Ta(Wl),bu=Bs?Bs.prototype:t,Xl=bu?bu.valueOf:t,Av=bu?bu.toString:t;function C(s){if(mn(s)&&!mt(s)&&!(s instanceof Lt)){if(s instanceof rr)return s;if(Wt.call(s,"__wrapped__"))return C0(s)}return new rr(s)}var Mo=function(){function s(){}return function(o){if(!cn(o))return{};if(Ev)return Ev(o);s.prototype=o;var h=new s;return s.prototype=t,h}}();function wu(){}function rr(s,o){this.__wrapped__=s,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=t}C.templateSettings={escape:Ze,evaluate:vt,interpolate:Dt,variable:"",imports:{_:C}},C.prototype=wu.prototype,C.prototype.constructor=C,rr.prototype=Mo(wu.prototype),rr.prototype.constructor=rr;function Lt(s){this.__wrapped__=s,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=oe,this.__views__=[]}function Qw(){var s=new Lt(this.__wrapped__);return s.__actions__=Si(this.__actions__),s.__dir__=this.__dir__,s.__filtered__=this.__filtered__,s.__iteratees__=Si(this.__iteratees__),s.__takeCount__=this.__takeCount__,s.__views__=Si(this.__views__),s}function eA(){if(this.__filtered__){var s=new Lt(this);s.__dir__=-1,s.__filtered__=!0}else s=this.clone(),s.__dir__*=-1;return s}function tA(){var s=this.__wrapped__.value(),o=this.__dir__,h=mt(s),x=o<0,M=h?s.length:0,P=dC(0,M,this.__views__),B=P.start,H=P.end,W=H-B,fe=x?H:B-1,he=this.__iteratees__,_e=he.length,Le=0,je=Zn(W,this.__takeCount__);if(!h||!x&&M==W&&je==W)return Zv(s,this.__actions__);var ct=[];e:for(;W--&&Le<je;){fe+=o;for(var Et=-1,ut=s[fe];++Et<_e;){var Rt=he[Et],Ot=Rt.iteratee,zi=Rt.type,ci=Ot(ut);if(zi==j)ut=ci;else if(!ci){if(zi==z)continue e;break e}}ct[Le++]=ut}return ct}Lt.prototype=Mo(wu.prototype),Lt.prototype.constructor=Lt;function xa(s){var o=-1,h=s==null?0:s.length;for(this.clear();++o<h;){var x=s[o];this.set(x[0],x[1])}}function nA(){this.__data__=$l?$l(null):{},this.size=0}function iA(s){var o=this.has(s)&&delete this.__data__[s];return this.size-=o?1:0,o}function rA(s){var o=this.__data__;if($l){var h=o[s];return h===u?t:h}return Wt.call(o,s)?o[s]:t}function sA(s){var o=this.__data__;return $l?o[s]!==t:Wt.call(o,s)}function aA(s,o){var h=this.__data__;return this.size+=this.has(s)?0:1,h[s]=$l&&o===t?u:o,this}xa.prototype.clear=nA,xa.prototype.delete=iA,xa.prototype.get=rA,xa.prototype.has=sA,xa.prototype.set=aA;function as(s){var o=-1,h=s==null?0:s.length;for(this.clear();++o<h;){var x=s[o];this.set(x[0],x[1])}}function oA(){this.__data__=[],this.size=0}function lA(s){var o=this.__data__,h=Au(o,s);if(h<0)return!1;var x=o.length-1;return h==x?o.pop():yu.call(o,h,1),--this.size,!0}function cA(s){var o=this.__data__,h=Au(o,s);return h<0?t:o[h][1]}function uA(s){return Au(this.__data__,s)>-1}function fA(s,o){var h=this.__data__,x=Au(h,s);return x<0?(++this.size,h.push([s,o])):h[x][1]=o,this}as.prototype.clear=oA,as.prototype.delete=lA,as.prototype.get=cA,as.prototype.has=uA,as.prototype.set=fA;function os(s){var o=-1,h=s==null?0:s.length;for(this.clear();++o<h;){var x=s[o];this.set(x[0],x[1])}}function hA(){this.size=0,this.__data__={hash:new xa,map:new(Vl||as),string:new xa}}function dA(s){var o=zu(this,s).delete(s);return this.size-=o?1:0,o}function pA(s){return zu(this,s).get(s)}function mA(s){return zu(this,s).has(s)}function _A(s,o){var h=zu(this,s),x=h.size;return h.set(s,o),this.size+=h.size==x?0:1,this}os.prototype.clear=hA,os.prototype.delete=dA,os.prototype.get=pA,os.prototype.has=mA,os.prototype.set=_A;function ya(s){var o=-1,h=s==null?0:s.length;for(this.__data__=new os;++o<h;)this.add(s[o])}function gA(s){return this.__data__.set(s,u),this}function vA(s){return this.__data__.has(s)}ya.prototype.add=ya.prototype.push=gA,ya.prototype.has=vA;function Mr(s){var o=this.__data__=new as(s);this.size=o.size}function xA(){this.__data__=new as,this.size=0}function yA(s){var o=this.__data__,h=o.delete(s);return this.size=o.size,h}function SA(s){return this.__data__.get(s)}function EA(s){return this.__data__.has(s)}function MA(s,o){var h=this.__data__;if(h instanceof as){var x=h.__data__;if(!Vl||x.length<r-1)return x.push([s,o]),this.size=++h.size,this;h=this.__data__=new os(x)}return h.set(s,o),this.size=h.size,this}Mr.prototype.clear=xA,Mr.prototype.delete=yA,Mr.prototype.get=SA,Mr.prototype.has=EA,Mr.prototype.set=MA;function Cv(s,o){var h=mt(s),x=!h&&ba(s),M=!h&&!x&&Vs(s),P=!h&&!x&&!M&&Ao(s),B=h||x||M||P,H=B?md(s.length,Dw):[],W=H.length;for(var fe in s)(o||Wt.call(s,fe))&&!(B&&(fe=="length"||M&&(fe=="offset"||fe=="parent")||P&&(fe=="buffer"||fe=="byteLength"||fe=="byteOffset")||fs(fe,W)))&&H.push(fe);return H}function Rv(s){var o=s.length;return o?s[Id(0,o-1)]:t}function TA(s,o){return Hu(Si(s),Sa(o,0,s.length))}function bA(s){return Hu(Si(s))}function Ed(s,o,h){(h!==t&&!Tr(s[o],h)||h===t&&!(o in s))&&ls(s,o,h)}function ql(s,o,h){var x=s[o];(!(Wt.call(s,o)&&Tr(x,h))||h===t&&!(o in s))&&ls(s,o,h)}function Au(s,o){for(var h=s.length;h--;)if(Tr(s[h][0],o))return h;return-1}function wA(s,o,h,x){return zs(s,function(M,P,B){o(x,M,h(M),B)}),x}function Pv(s,o){return s&&zr(o,Un(o),s)}function AA(s,o){return s&&zr(o,Mi(o),s)}function ls(s,o,h){o=="__proto__"&&Su?Su(s,o,{configurable:!0,enumerable:!0,value:h,writable:!0}):s[o]=h}function Md(s,o){for(var h=-1,x=o.length,M=re(x),P=s==null;++h<x;)M[h]=P?t:ip(s,o[h]);return M}function Sa(s,o,h){return s===s&&(h!==t&&(s=s<=h?s:h),o!==t&&(s=s>=o?s:o)),s}function sr(s,o,h,x,M,P){var B,H=o&p,W=o&_,fe=o&m;if(h&&(B=M?h(s,x,M,P):h(s)),B!==t)return B;if(!cn(s))return s;var he=mt(s);if(he){if(B=mC(s),!H)return Si(s,B)}else{var _e=Jn(s),Le=_e==X||_e==st;if(Vs(s))return e0(s,H);if(_e==Z||_e==ue||Le&&!M){if(B=W||Le?{}:x0(s),!H)return W?rC(s,AA(B,s)):iC(s,Pv(B,s))}else{if(!Qt[_e])return M?s:{};B=_C(s,_e,H)}}P||(P=new Mr);var je=P.get(s);if(je)return je;P.set(s,B),Y0(s)?s.forEach(function(ut){B.add(sr(ut,o,h,ut,s,P))}):X0(s)&&s.forEach(function(ut,Rt){B.set(Rt,sr(ut,o,h,Rt,s,P))});var ct=fe?W?Vd:kd:W?Mi:Un,Et=he?t:ct(s);return nr(Et||s,function(ut,Rt){Et&&(Rt=ut,ut=s[Rt]),ql(B,Rt,sr(ut,o,h,Rt,s,P))}),B}function CA(s){var o=Un(s);return function(h){return Lv(h,s,o)}}function Lv(s,o,h){var x=h.length;if(s==null)return!x;for(s=Zt(s);x--;){var M=h[x],P=o[M],B=s[M];if(B===t&&!(M in s)||!P(B))return!1}return!0}function Iv(s,o,h){if(typeof s!="function")throw new ir(l);return ec(function(){s.apply(t,h)},o)}function Yl(s,o,h,x){var M=-1,P=uu,B=!0,H=s.length,W=[],fe=o.length;if(!H)return W;h&&(o=on(o,Ni(h))),x?(P=cd,B=!1):o.length>=r&&(P=Gl,B=!1,o=new ya(o));e:for(;++M<H;){var he=s[M],_e=h==null?he:h(he);if(he=x||he!==0?he:0,B&&_e===_e){for(var Le=fe;Le--;)if(o[Le]===_e)continue e;W.push(he)}else P(o,_e,x)||W.push(he)}return W}var zs=s0(Br),Dv=s0(bd,!0);function RA(s,o){var h=!0;return zs(s,function(x,M,P){return h=!!o(x,M,P),h}),h}function Cu(s,o,h){for(var x=-1,M=s.length;++x<M;){var P=s[x],B=o(P);if(B!=null&&(H===t?B===B&&!Bi(B):h(B,H)))var H=B,W=P}return W}function PA(s,o,h,x){var M=s.length;for(h=xt(h),h<0&&(h=-h>M?0:M+h),x=x===t||x>M?M:xt(x),x<0&&(x+=M),x=h>x?0:j0(x);h<x;)s[h++]=o;return s}function Ov(s,o){var h=[];return zs(s,function(x,M,P){o(x,M,P)&&h.push(x)}),h}function Wn(s,o,h,x,M){var P=-1,B=s.length;for(h||(h=vC),M||(M=[]);++P<B;){var H=s[P];o>0&&h(H)?o>1?Wn(H,o-1,h,x,M):Ns(M,H):x||(M[M.length]=H)}return M}var Td=a0(),Uv=a0(!0);function Br(s,o){return s&&Td(s,o,Un)}function bd(s,o){return s&&Uv(s,o,Un)}function Ru(s,o){return Us(o,function(h){return hs(s[h])})}function Ea(s,o){o=Gs(o,s);for(var h=0,x=o.length;s!=null&&h<x;)s=s[Hr(o[h++])];return h&&h==x?s:t}function Nv(s,o,h){var x=o(s);return mt(s)?x:Ns(x,h(s))}function oi(s){return s==null?s===t?ge:Ue:va&&va in Zt(s)?hC(s):bC(s)}function wd(s,o){return s>o}function LA(s,o){return s!=null&&Wt.call(s,o)}function IA(s,o){return s!=null&&o in Zt(s)}function DA(s,o,h){return s>=Zn(o,h)&&s<Pn(o,h)}function Ad(s,o,h){for(var x=h?cd:uu,M=s[0].length,P=s.length,B=P,H=re(P),W=1/0,fe=[];B--;){var he=s[B];B&&o&&(he=on(he,Ni(o))),W=Zn(he.length,W),H[B]=!h&&(o||M>=120&&he.length>=120)?new ya(B&&he):t}he=s[0];var _e=-1,Le=H[0];e:for(;++_e<M&&fe.length<W;){var je=he[_e],ct=o?o(je):je;if(je=h||je!==0?je:0,!(Le?Gl(Le,ct):x(fe,ct,h))){for(B=P;--B;){var Et=H[B];if(!(Et?Gl(Et,ct):x(s[B],ct,h)))continue e}Le&&Le.push(ct),fe.push(je)}}return fe}function OA(s,o,h,x){return Br(s,function(M,P,B){o(x,h(M),P,B)}),x}function Kl(s,o,h){o=Gs(o,s),s=M0(s,o);var x=s==null?s:s[Hr(or(o))];return x==null?t:Ui(x,s,h)}function Fv(s){return mn(s)&&oi(s)==ue}function UA(s){return mn(s)&&oi(s)==Se}function NA(s){return mn(s)&&oi(s)==Ae}function jl(s,o,h,x,M){return s===o?!0:s==null||o==null||!mn(s)&&!mn(o)?s!==s&&o!==o:FA(s,o,h,x,jl,M)}function FA(s,o,h,x,M,P){var B=mt(s),H=mt(o),W=B?Te:Jn(s),fe=H?Te:Jn(o);W=W==ue?Z:W,fe=fe==ue?Z:fe;var he=W==Z,_e=fe==Z,Le=W==fe;if(Le&&Vs(s)){if(!Vs(o))return!1;B=!0,he=!1}if(Le&&!he)return P||(P=new Mr),B||Ao(s)?_0(s,o,h,x,M,P):uC(s,o,W,h,x,M,P);if(!(h&S)){var je=he&&Wt.call(s,"__wrapped__"),ct=_e&&Wt.call(o,"__wrapped__");if(je||ct){var Et=je?s.value():s,ut=ct?o.value():o;return P||(P=new Mr),M(Et,ut,h,x,P)}}return Le?(P||(P=new Mr),fC(s,o,h,x,M,P)):!1}function BA(s){return mn(s)&&Jn(s)==Me}function Cd(s,o,h,x){var M=h.length,P=M,B=!x;if(s==null)return!P;for(s=Zt(s);M--;){var H=h[M];if(B&&H[2]?H[1]!==s[H[0]]:!(H[0]in s))return!1}for(;++M<P;){H=h[M];var W=H[0],fe=s[W],he=H[1];if(B&&H[2]){if(fe===t&&!(W in s))return!1}else{var _e=new Mr;if(x)var Le=x(fe,he,W,s,o,_e);if(!(Le===t?jl(he,fe,S|y,x,_e):Le))return!1}}return!0}function Bv(s){if(!cn(s)||yC(s))return!1;var o=hs(s)?Bw:ee;return o.test(Ta(s))}function zA(s){return mn(s)&&oi(s)==A}function HA(s){return mn(s)&&Jn(s)==q}function GA(s){return mn(s)&&Xu(s.length)&&!!rn[oi(s)]}function zv(s){return typeof s=="function"?s:s==null?Ti:typeof s=="object"?mt(s)?kv(s[0],s[1]):Gv(s):ox(s)}function Rd(s){if(!Ql(s))return Ww(s);var o=[];for(var h in Zt(s))Wt.call(s,h)&&h!="constructor"&&o.push(h);return o}function kA(s){if(!cn(s))return TC(s);var o=Ql(s),h=[];for(var x in s)x=="constructor"&&(o||!Wt.call(s,x))||h.push(x);return h}function Pd(s,o){return s<o}function Hv(s,o){var h=-1,x=Ei(s)?re(s.length):[];return zs(s,function(M,P,B){x[++h]=o(M,P,B)}),x}function Gv(s){var o=$d(s);return o.length==1&&o[0][2]?S0(o[0][0],o[0][1]):function(h){return h===s||Cd(h,s,o)}}function kv(s,o){return qd(s)&&y0(o)?S0(Hr(s),o):function(h){var x=ip(h,s);return x===t&&x===o?rp(h,s):jl(o,x,S|y)}}function Pu(s,o,h,x,M){s!==o&&Td(o,function(P,B){if(M||(M=new Mr),cn(P))VA(s,o,B,h,Pu,x,M);else{var H=x?x(Kd(s,B),P,B+"",s,o,M):t;H===t&&(H=P),Ed(s,B,H)}},Mi)}function VA(s,o,h,x,M,P,B){var H=Kd(s,h),W=Kd(o,h),fe=B.get(W);if(fe){Ed(s,h,fe);return}var he=P?P(H,W,h+"",s,o,B):t,_e=he===t;if(_e){var Le=mt(W),je=!Le&&Vs(W),ct=!Le&&!je&&Ao(W);he=W,Le||je||ct?mt(H)?he=H:yn(H)?he=Si(H):je?(_e=!1,he=e0(W,!0)):ct?(_e=!1,he=t0(W,!0)):he=[]:tc(W)||ba(W)?(he=H,ba(H)?he=Z0(H):(!cn(H)||hs(H))&&(he=x0(W))):_e=!1}_e&&(B.set(W,he),M(he,W,x,P,B),B.delete(W)),Ed(s,h,he)}function Vv(s,o){var h=s.length;if(h)return o+=o<0?h:0,fs(o,h)?s[o]:t}function Wv(s,o,h){o.length?o=on(o,function(P){return mt(P)?function(B){return Ea(B,P.length===1?P[0]:P)}:P}):o=[Ti];var x=-1;o=on(o,Ni(lt()));var M=Hv(s,function(P,B,H){var W=on(o,function(fe){return fe(P)});return{criteria:W,index:++x,value:P}});return _w(M,function(P,B){return nC(P,B,h)})}function WA(s,o){return $v(s,o,function(h,x){return rp(s,x)})}function $v(s,o,h){for(var x=-1,M=o.length,P={};++x<M;){var B=o[x],H=Ea(s,B);h(H,B)&&Zl(P,Gs(B,s),H)}return P}function $A(s){return function(o){return Ea(o,s)}}function Ld(s,o,h,x){var M=x?mw:_o,P=-1,B=o.length,H=s;for(s===o&&(o=Si(o)),h&&(H=on(s,Ni(h)));++P<B;)for(var W=0,fe=o[P],he=h?h(fe):fe;(W=M(H,he,W,x))>-1;)H!==s&&yu.call(H,W,1),yu.call(s,W,1);return s}function Xv(s,o){for(var h=s?o.length:0,x=h-1;h--;){var M=o[h];if(h==x||M!==P){var P=M;fs(M)?yu.call(s,M,1):Ud(s,M)}}return s}function Id(s,o){return s+Mu(wv()*(o-s+1))}function XA(s,o,h,x){for(var M=-1,P=Pn(Eu((o-s)/(h||1)),0),B=re(P);P--;)B[x?P:++M]=s,s+=h;return B}function Dd(s,o){var h="";if(!s||o<1||o>ie)return h;do o%2&&(h+=s),o=Mu(o/2),o&&(s+=s);while(o);return h}function Tt(s,o){return jd(E0(s,o,Ti),s+"")}function qA(s){return Rv(Co(s))}function YA(s,o){var h=Co(s);return Hu(h,Sa(o,0,h.length))}function Zl(s,o,h,x){if(!cn(s))return s;o=Gs(o,s);for(var M=-1,P=o.length,B=P-1,H=s;H!=null&&++M<P;){var W=Hr(o[M]),fe=h;if(W==="__proto__"||W==="constructor"||W==="prototype")return s;if(M!=B){var he=H[W];fe=x?x(he,W,H):t,fe===t&&(fe=cn(he)?he:fs(o[M+1])?[]:{})}ql(H,W,fe),H=H[W]}return s}var qv=Tu?function(s,o){return Tu.set(s,o),s}:Ti,KA=Su?function(s,o){return Su(s,"toString",{configurable:!0,enumerable:!1,value:ap(o),writable:!0})}:Ti;function jA(s){return Hu(Co(s))}function ar(s,o,h){var x=-1,M=s.length;o<0&&(o=-o>M?0:M+o),h=h>M?M:h,h<0&&(h+=M),M=o>h?0:h-o>>>0,o>>>=0;for(var P=re(M);++x<M;)P[x]=s[x+o];return P}function ZA(s,o){var h;return zs(s,function(x,M,P){return h=o(x,M,P),!h}),!!h}function Lu(s,o,h){var x=0,M=s==null?x:s.length;if(typeof o=="number"&&o===o&&M<=Je){for(;x<M;){var P=x+M>>>1,B=s[P];B!==null&&!Bi(B)&&(h?B<=o:B<o)?x=P+1:M=P}return M}return Od(s,o,Ti,h)}function Od(s,o,h,x){var M=0,P=s==null?0:s.length;if(P===0)return 0;o=h(o);for(var B=o!==o,H=o===null,W=Bi(o),fe=o===t;M<P;){var he=Mu((M+P)/2),_e=h(s[he]),Le=_e!==t,je=_e===null,ct=_e===_e,Et=Bi(_e);if(B)var ut=x||ct;else fe?ut=ct&&(x||Le):H?ut=ct&&Le&&(x||!je):W?ut=ct&&Le&&!je&&(x||!Et):je||Et?ut=!1:ut=x?_e<=o:_e<o;ut?M=he+1:P=he}return Zn(P,Re)}function Yv(s,o){for(var h=-1,x=s.length,M=0,P=[];++h<x;){var B=s[h],H=o?o(B):B;if(!h||!Tr(H,W)){var W=H;P[M++]=B===0?0:B}}return P}function Kv(s){return typeof s=="number"?s:Bi(s)?N:+s}function Fi(s){if(typeof s=="string")return s;if(mt(s))return on(s,Fi)+"";if(Bi(s))return Av?Av.call(s):"";var o=s+"";return o=="0"&&1/s==-ne?"-0":o}function Hs(s,o,h){var x=-1,M=uu,P=s.length,B=!0,H=[],W=H;if(h)B=!1,M=cd;else if(P>=r){var fe=o?null:lC(s);if(fe)return hu(fe);B=!1,M=Gl,W=new ya}else W=o?[]:H;e:for(;++x<P;){var he=s[x],_e=o?o(he):he;if(he=h||he!==0?he:0,B&&_e===_e){for(var Le=W.length;Le--;)if(W[Le]===_e)continue e;o&&W.push(_e),H.push(he)}else M(W,_e,h)||(W!==H&&W.push(_e),H.push(he))}return H}function Ud(s,o){return o=Gs(o,s),s=M0(s,o),s==null||delete s[Hr(or(o))]}function jv(s,o,h,x){return Zl(s,o,h(Ea(s,o)),x)}function Iu(s,o,h,x){for(var M=s.length,P=x?M:-1;(x?P--:++P<M)&&o(s[P],P,s););return h?ar(s,x?0:P,x?P+1:M):ar(s,x?P+1:0,x?M:P)}function Zv(s,o){var h=s;return h instanceof Lt&&(h=h.value()),ud(o,function(x,M){return M.func.apply(M.thisArg,Ns([x],M.args))},h)}function Nd(s,o,h){var x=s.length;if(x<2)return x?Hs(s[0]):[];for(var M=-1,P=re(x);++M<x;)for(var B=s[M],H=-1;++H<x;)H!=M&&(P[M]=Yl(P[M]||B,s[H],o,h));return Hs(Wn(P,1),o,h)}function Jv(s,o,h){for(var x=-1,M=s.length,P=o.length,B={};++x<M;){var H=x<P?o[x]:t;h(B,s[x],H)}return B}function Fd(s){return yn(s)?s:[]}function Bd(s){return typeof s=="function"?s:Ti}function Gs(s,o){return mt(s)?s:qd(s,o)?[s]:A0(kt(s))}var JA=Tt;function ks(s,o,h){var x=s.length;return h=h===t?x:h,!o&&h>=x?s:ar(s,o,h)}var Qv=zw||function(s){return Vn.clearTimeout(s)};function e0(s,o){if(o)return s.slice();var h=s.length,x=Sv?Sv(h):new s.constructor(h);return s.copy(x),x}function zd(s){var o=new s.constructor(s.byteLength);return new vu(o).set(new vu(s)),o}function QA(s,o){var h=o?zd(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.byteLength)}function eC(s){var o=new s.constructor(s.source,jn.exec(s));return o.lastIndex=s.lastIndex,o}function tC(s){return Xl?Zt(Xl.call(s)):{}}function t0(s,o){var h=o?zd(s.buffer):s.buffer;return new s.constructor(h,s.byteOffset,s.length)}function n0(s,o){if(s!==o){var h=s!==t,x=s===null,M=s===s,P=Bi(s),B=o!==t,H=o===null,W=o===o,fe=Bi(o);if(!H&&!fe&&!P&&s>o||P&&B&&W&&!H&&!fe||x&&B&&W||!h&&W||!M)return 1;if(!x&&!P&&!fe&&s<o||fe&&h&&M&&!x&&!P||H&&h&&M||!B&&M||!W)return-1}return 0}function nC(s,o,h){for(var x=-1,M=s.criteria,P=o.criteria,B=M.length,H=h.length;++x<B;){var W=n0(M[x],P[x]);if(W){if(x>=H)return W;var fe=h[x];return W*(fe=="desc"?-1:1)}}return s.index-o.index}function i0(s,o,h,x){for(var M=-1,P=s.length,B=h.length,H=-1,W=o.length,fe=Pn(P-B,0),he=re(W+fe),_e=!x;++H<W;)he[H]=o[H];for(;++M<B;)(_e||M<P)&&(he[h[M]]=s[M]);for(;fe--;)he[H++]=s[M++];return he}function r0(s,o,h,x){for(var M=-1,P=s.length,B=-1,H=h.length,W=-1,fe=o.length,he=Pn(P-H,0),_e=re(he+fe),Le=!x;++M<he;)_e[M]=s[M];for(var je=M;++W<fe;)_e[je+W]=o[W];for(;++B<H;)(Le||M<P)&&(_e[je+h[B]]=s[M++]);return _e}function Si(s,o){var h=-1,x=s.length;for(o||(o=re(x));++h<x;)o[h]=s[h];return o}function zr(s,o,h,x){var M=!h;h||(h={});for(var P=-1,B=o.length;++P<B;){var H=o[P],W=x?x(h[H],s[H],H,h,s):t;W===t&&(W=s[H]),M?ls(h,H,W):ql(h,H,W)}return h}function iC(s,o){return zr(s,Xd(s),o)}function rC(s,o){return zr(s,g0(s),o)}function Du(s,o){return function(h,x){var M=mt(h)?cw:wA,P=o?o():{};return M(h,s,lt(x,2),P)}}function To(s){return Tt(function(o,h){var x=-1,M=h.length,P=M>1?h[M-1]:t,B=M>2?h[2]:t;for(P=s.length>3&&typeof P=="function"?(M--,P):t,B&&li(h[0],h[1],B)&&(P=M<3?t:P,M=1),o=Zt(o);++x<M;){var H=h[x];H&&s(o,H,x,P)}return o})}function s0(s,o){return function(h,x){if(h==null)return h;if(!Ei(h))return s(h,x);for(var M=h.length,P=o?M:-1,B=Zt(h);(o?P--:++P<M)&&x(B[P],P,B)!==!1;);return h}}function a0(s){return function(o,h,x){for(var M=-1,P=Zt(o),B=x(o),H=B.length;H--;){var W=B[s?H:++M];if(h(P[W],W,P)===!1)break}return o}}function sC(s,o,h){var x=o&g,M=Jl(s);function P(){var B=this&&this!==Vn&&this instanceof P?M:s;return B.apply(x?h:this,arguments)}return P}function o0(s){return function(o){o=kt(o);var h=go(o)?Er(o):t,x=h?h[0]:o.charAt(0),M=h?ks(h,1).join(""):o.slice(1);return x[s]()+M}}function bo(s){return function(o){return ud(sx(rx(o).replace(K1,"")),s,"")}}function Jl(s){return function(){var o=arguments;switch(o.length){case 0:return new s;case 1:return new s(o[0]);case 2:return new s(o[0],o[1]);case 3:return new s(o[0],o[1],o[2]);case 4:return new s(o[0],o[1],o[2],o[3]);case 5:return new s(o[0],o[1],o[2],o[3],o[4]);case 6:return new s(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new s(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var h=Mo(s.prototype),x=s.apply(h,o);return cn(x)?x:h}}function aC(s,o,h){var x=Jl(s);function M(){for(var P=arguments.length,B=re(P),H=P,W=wo(M);H--;)B[H]=arguments[H];var fe=P<3&&B[0]!==W&&B[P-1]!==W?[]:Fs(B,W);if(P-=fe.length,P<h)return h0(s,o,Ou,M.placeholder,t,B,fe,t,t,h-P);var he=this&&this!==Vn&&this instanceof M?x:s;return Ui(he,this,B)}return M}function l0(s){return function(o,h,x){var M=Zt(o);if(!Ei(o)){var P=lt(h,3);o=Un(o),h=function(H){return P(M[H],H,M)}}var B=s(o,h,x);return B>-1?M[P?o[B]:B]:t}}function c0(s){return us(function(o){var h=o.length,x=h,M=rr.prototype.thru;for(s&&o.reverse();x--;){var P=o[x];if(typeof P!="function")throw new ir(l);if(M&&!B&&Bu(P)=="wrapper")var B=new rr([],!0)}for(x=B?x:h;++x<h;){P=o[x];var H=Bu(P),W=H=="wrapper"?Wd(P):t;W&&Yd(W[0])&&W[1]==(R|E|U|G)&&!W[4].length&&W[9]==1?B=B[Bu(W[0])].apply(B,W[3]):B=P.length==1&&Yd(P)?B[H]():B.thru(P)}return function(){var fe=arguments,he=fe[0];if(B&&fe.length==1&&mt(he))return B.plant(he).value();for(var _e=0,Le=h?o[_e].apply(this,fe):he;++_e<h;)Le=o[_e].call(this,Le);return Le}})}function Ou(s,o,h,x,M,P,B,H,W,fe){var he=o&R,_e=o&g,Le=o&v,je=o&(E|w),ct=o&$,Et=Le?t:Jl(s);function ut(){for(var Rt=arguments.length,Ot=re(Rt),zi=Rt;zi--;)Ot[zi]=arguments[zi];if(je)var ci=wo(ut),Hi=vw(Ot,ci);if(x&&(Ot=i0(Ot,x,M,je)),P&&(Ot=r0(Ot,P,B,je)),Rt-=Hi,je&&Rt<fe){var Sn=Fs(Ot,ci);return h0(s,o,Ou,ut.placeholder,h,Ot,Sn,H,W,fe-Rt)}var br=_e?h:this,ps=Le?br[s]:s;return Rt=Ot.length,H?Ot=wC(Ot,H):ct&&Rt>1&&Ot.reverse(),he&&W<Rt&&(Ot.length=W),this&&this!==Vn&&this instanceof ut&&(ps=Et||Jl(ps)),ps.apply(br,Ot)}return ut}function u0(s,o){return function(h,x){return OA(h,s,o(x),{})}}function Uu(s,o){return function(h,x){var M;if(h===t&&x===t)return o;if(h!==t&&(M=h),x!==t){if(M===t)return x;typeof h=="string"||typeof x=="string"?(h=Fi(h),x=Fi(x)):(h=Kv(h),x=Kv(x)),M=s(h,x)}return M}}function Hd(s){return us(function(o){return o=on(o,Ni(lt())),Tt(function(h){var x=this;return s(o,function(M){return Ui(M,x,h)})})})}function Nu(s,o){o=o===t?" ":Fi(o);var h=o.length;if(h<2)return h?Dd(o,s):o;var x=Dd(o,Eu(s/vo(o)));return go(o)?ks(Er(x),0,s).join(""):x.slice(0,s)}function oC(s,o,h,x){var M=o&g,P=Jl(s);function B(){for(var H=-1,W=arguments.length,fe=-1,he=x.length,_e=re(he+W),Le=this&&this!==Vn&&this instanceof B?P:s;++fe<he;)_e[fe]=x[fe];for(;W--;)_e[fe++]=arguments[++H];return Ui(Le,M?h:this,_e)}return B}function f0(s){return function(o,h,x){return x&&typeof x!="number"&&li(o,h,x)&&(h=x=t),o=ds(o),h===t?(h=o,o=0):h=ds(h),x=x===t?o<h?1:-1:ds(x),XA(o,h,x,s)}}function Fu(s){return function(o,h){return typeof o=="string"&&typeof h=="string"||(o=lr(o),h=lr(h)),s(o,h)}}function h0(s,o,h,x,M,P,B,H,W,fe){var he=o&E,_e=he?B:t,Le=he?t:B,je=he?P:t,ct=he?t:P;o|=he?U:I,o&=~(he?I:U),o&b||(o&=~(g|v));var Et=[s,o,M,je,_e,ct,Le,H,W,fe],ut=h.apply(t,Et);return Yd(s)&&T0(ut,Et),ut.placeholder=x,b0(ut,s,o)}function Gd(s){var o=Rn[s];return function(h,x){if(h=lr(h),x=x==null?0:Zn(xt(x),292),x&&bv(h)){var M=(kt(h)+"e").split("e"),P=o(M[0]+"e"+(+M[1]+x));return M=(kt(P)+"e").split("e"),+(M[0]+"e"+(+M[1]-x))}return o(h)}}var lC=So&&1/hu(new So([,-0]))[1]==ne?function(s){return new So(s)}:cp;function d0(s){return function(o){var h=Jn(o);return h==Me?gd(o):h==q?bw(o):gw(o,s(o))}}function cs(s,o,h,x,M,P,B,H){var W=o&v;if(!W&&typeof s!="function")throw new ir(l);var fe=x?x.length:0;if(fe||(o&=~(U|I),x=M=t),B=B===t?B:Pn(xt(B),0),H=H===t?H:xt(H),fe-=M?M.length:0,o&I){var he=x,_e=M;x=M=t}var Le=W?t:Wd(s),je=[s,o,h,x,M,he,_e,P,B,H];if(Le&&MC(je,Le),s=je[0],o=je[1],h=je[2],x=je[3],M=je[4],H=je[9]=je[9]===t?W?0:s.length:Pn(je[9]-fe,0),!H&&o&(E|w)&&(o&=~(E|w)),!o||o==g)var ct=sC(s,o,h);else o==E||o==w?ct=aC(s,o,H):(o==U||o==(g|U))&&!M.length?ct=oC(s,o,h,x):ct=Ou.apply(t,je);var Et=Le?qv:T0;return b0(Et(ct,je),s,o)}function p0(s,o,h,x){return s===t||Tr(s,yo[h])&&!Wt.call(x,h)?o:s}function m0(s,o,h,x,M,P){return cn(s)&&cn(o)&&(P.set(o,s),Pu(s,o,t,m0,P),P.delete(o)),s}function cC(s){return tc(s)?t:s}function _0(s,o,h,x,M,P){var B=h&S,H=s.length,W=o.length;if(H!=W&&!(B&&W>H))return!1;var fe=P.get(s),he=P.get(o);if(fe&&he)return fe==o&&he==s;var _e=-1,Le=!0,je=h&y?new ya:t;for(P.set(s,o),P.set(o,s);++_e<H;){var ct=s[_e],Et=o[_e];if(x)var ut=B?x(Et,ct,_e,o,s,P):x(ct,Et,_e,s,o,P);if(ut!==t){if(ut)continue;Le=!1;break}if(je){if(!fd(o,function(Rt,Ot){if(!Gl(je,Ot)&&(ct===Rt||M(ct,Rt,h,x,P)))return je.push(Ot)})){Le=!1;break}}else if(!(ct===Et||M(ct,Et,h,x,P))){Le=!1;break}}return P.delete(s),P.delete(o),Le}function uC(s,o,h,x,M,P,B){switch(h){case He:if(s.byteLength!=o.byteLength||s.byteOffset!=o.byteOffset)return!1;s=s.buffer,o=o.buffer;case Se:return!(s.byteLength!=o.byteLength||!P(new vu(s),new vu(o)));case Oe:case Ae:case ke:return Tr(+s,+o);case $e:return s.name==o.name&&s.message==o.message;case A:case me:return s==o+"";case Me:var H=gd;case q:var W=x&S;if(H||(H=hu),s.size!=o.size&&!W)return!1;var fe=B.get(s);if(fe)return fe==o;x|=y,B.set(s,o);var he=_0(H(s),H(o),x,M,P,B);return B.delete(s),he;case de:if(Xl)return Xl.call(s)==Xl.call(o)}return!1}function fC(s,o,h,x,M,P){var B=h&S,H=kd(s),W=H.length,fe=kd(o),he=fe.length;if(W!=he&&!B)return!1;for(var _e=W;_e--;){var Le=H[_e];if(!(B?Le in o:Wt.call(o,Le)))return!1}var je=P.get(s),ct=P.get(o);if(je&&ct)return je==o&&ct==s;var Et=!0;P.set(s,o),P.set(o,s);for(var ut=B;++_e<W;){Le=H[_e];var Rt=s[Le],Ot=o[Le];if(x)var zi=B?x(Ot,Rt,Le,o,s,P):x(Rt,Ot,Le,s,o,P);if(!(zi===t?Rt===Ot||M(Rt,Ot,h,x,P):zi)){Et=!1;break}ut||(ut=Le=="constructor")}if(Et&&!ut){var ci=s.constructor,Hi=o.constructor;ci!=Hi&&"constructor"in s&&"constructor"in o&&!(typeof ci=="function"&&ci instanceof ci&&typeof Hi=="function"&&Hi instanceof Hi)&&(Et=!1)}return P.delete(s),P.delete(o),Et}function us(s){return jd(E0(s,t,L0),s+"")}function kd(s){return Nv(s,Un,Xd)}function Vd(s){return Nv(s,Mi,g0)}var Wd=Tu?function(s){return Tu.get(s)}:cp;function Bu(s){for(var o=s.name+"",h=Eo[o],x=Wt.call(Eo,o)?h.length:0;x--;){var M=h[x],P=M.func;if(P==null||P==s)return M.name}return o}function wo(s){var o=Wt.call(C,"placeholder")?C:s;return o.placeholder}function lt(){var s=C.iteratee||op;return s=s===op?zv:s,arguments.length?s(arguments[0],arguments[1]):s}function zu(s,o){var h=s.__data__;return xC(o)?h[typeof o=="string"?"string":"hash"]:h.map}function $d(s){for(var o=Un(s),h=o.length;h--;){var x=o[h],M=s[x];o[h]=[x,M,y0(M)]}return o}function Ma(s,o){var h=Ew(s,o);return Bv(h)?h:t}function hC(s){var o=Wt.call(s,va),h=s[va];try{s[va]=t;var x=!0}catch{}var M=_u.call(s);return x&&(o?s[va]=h:delete s[va]),M}var Xd=xd?function(s){return s==null?[]:(s=Zt(s),Us(xd(s),function(o){return Mv.call(s,o)}))}:up,g0=xd?function(s){for(var o=[];s;)Ns(o,Xd(s)),s=xu(s);return o}:up,Jn=oi;(yd&&Jn(new yd(new ArrayBuffer(1)))!=He||Vl&&Jn(new Vl)!=Me||Sd&&Jn(Sd.resolve())!=et||So&&Jn(new So)!=q||Wl&&Jn(new Wl)!=we)&&(Jn=function(s){var o=oi(s),h=o==Z?s.constructor:t,x=h?Ta(h):"";if(x)switch(x){case Yw:return He;case Kw:return Me;case jw:return et;case Zw:return q;case Jw:return we}return o});function dC(s,o,h){for(var x=-1,M=h.length;++x<M;){var P=h[x],B=P.size;switch(P.type){case"drop":s+=B;break;case"dropRight":o-=B;break;case"take":o=Zn(o,s+B);break;case"takeRight":s=Pn(s,o-B);break}}return{start:s,end:o}}function pC(s){var o=s.match(St);return o?o[1].split($t):[]}function v0(s,o,h){o=Gs(o,s);for(var x=-1,M=o.length,P=!1;++x<M;){var B=Hr(o[x]);if(!(P=s!=null&&h(s,B)))break;s=s[B]}return P||++x!=M?P:(M=s==null?0:s.length,!!M&&Xu(M)&&fs(B,M)&&(mt(s)||ba(s)))}function mC(s){var o=s.length,h=new s.constructor(o);return o&&typeof s[0]=="string"&&Wt.call(s,"index")&&(h.index=s.index,h.input=s.input),h}function x0(s){return typeof s.constructor=="function"&&!Ql(s)?Mo(xu(s)):{}}function _C(s,o,h){var x=s.constructor;switch(o){case Se:return zd(s);case Oe:case Ae:return new x(+s);case He:return QA(s,h);case tt:case pe:case bt:case Xe:case at:case Ve:case De:case ot:case gt:return t0(s,h);case Me:return new x;case ke:case me:return new x(s);case A:return eC(s);case q:return new x;case de:return tC(s)}}function gC(s,o){var h=o.length;if(!h)return s;var x=h-1;return o[x]=(h>1?"& ":"")+o[x],o=o.join(h>2?", ":" "),s.replace(tn,`{
/* [wrapped with `+o+`] */
`)}function vC(s){return mt(s)||ba(s)||!!(Tv&&s&&s[Tv])}function fs(s,o){var h=typeof s;return o=o??ie,!!o&&(h=="number"||h!="symbol"&&J.test(s))&&s>-1&&s%1==0&&s<o}function li(s,o,h){if(!cn(h))return!1;var x=typeof o;return(x=="number"?Ei(h)&&fs(o,h.length):x=="string"&&o in h)?Tr(h[o],s):!1}function qd(s,o){if(mt(s))return!1;var h=typeof s;return h=="number"||h=="symbol"||h=="boolean"||s==null||Bi(s)?!0:We.test(s)||!qe.test(s)||o!=null&&s in Zt(o)}function xC(s){var o=typeof s;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?s!=="__proto__":s===null}function Yd(s){var o=Bu(s),h=C[o];if(typeof h!="function"||!(o in Lt.prototype))return!1;if(s===h)return!0;var x=Wd(h);return!!x&&s===x[0]}function yC(s){return!!yv&&yv in s}var SC=pu?hs:fp;function Ql(s){var o=s&&s.constructor,h=typeof o=="function"&&o.prototype||yo;return s===h}function y0(s){return s===s&&!cn(s)}function S0(s,o){return function(h){return h==null?!1:h[s]===o&&(o!==t||s in Zt(h))}}function EC(s){var o=Wu(s,function(x){return h.size===f&&h.clear(),x}),h=o.cache;return o}function MC(s,o){var h=s[1],x=o[1],M=h|x,P=M<(g|v|R),B=x==R&&h==E||x==R&&h==G&&s[7].length<=o[8]||x==(R|G)&&o[7].length<=o[8]&&h==E;if(!(P||B))return s;x&g&&(s[2]=o[2],M|=h&g?0:b);var H=o[3];if(H){var W=s[3];s[3]=W?i0(W,H,o[4]):H,s[4]=W?Fs(s[3],d):o[4]}return H=o[5],H&&(W=s[5],s[5]=W?r0(W,H,o[6]):H,s[6]=W?Fs(s[5],d):o[6]),H=o[7],H&&(s[7]=H),x&R&&(s[8]=s[8]==null?o[8]:Zn(s[8],o[8])),s[9]==null&&(s[9]=o[9]),s[0]=o[0],s[1]=M,s}function TC(s){var o=[];if(s!=null)for(var h in Zt(s))o.push(h);return o}function bC(s){return _u.call(s)}function E0(s,o,h){return o=Pn(o===t?s.length-1:o,0),function(){for(var x=arguments,M=-1,P=Pn(x.length-o,0),B=re(P);++M<P;)B[M]=x[o+M];M=-1;for(var H=re(o+1);++M<o;)H[M]=x[M];return H[o]=h(B),Ui(s,this,H)}}function M0(s,o){return o.length<2?s:Ea(s,ar(o,0,-1))}function wC(s,o){for(var h=s.length,x=Zn(o.length,h),M=Si(s);x--;){var P=o[x];s[x]=fs(P,h)?M[P]:t}return s}function Kd(s,o){if(!(o==="constructor"&&typeof s[o]=="function")&&o!="__proto__")return s[o]}var T0=w0(qv),ec=Gw||function(s,o){return Vn.setTimeout(s,o)},jd=w0(KA);function b0(s,o,h){var x=o+"";return jd(s,gC(x,AC(pC(x),h)))}function w0(s){var o=0,h=0;return function(){var x=$w(),M=ce-(x-h);if(h=x,M>0){if(++o>=Y)return arguments[0]}else o=0;return s.apply(t,arguments)}}function Hu(s,o){var h=-1,x=s.length,M=x-1;for(o=o===t?x:o;++h<o;){var P=Id(h,M),B=s[P];s[P]=s[h],s[h]=B}return s.length=o,s}var A0=EC(function(s){var o=[];return s.charCodeAt(0)===46&&o.push(""),s.replace(Ke,function(h,x,M,P){o.push(M?P.replace(Xt,"$1"):x||h)}),o});function Hr(s){if(typeof s=="string"||Bi(s))return s;var o=s+"";return o=="0"&&1/s==-ne?"-0":o}function Ta(s){if(s!=null){try{return mu.call(s)}catch{}try{return s+""}catch{}}return""}function AC(s,o){return nr(te,function(h){var x="_."+h[0];o&h[1]&&!uu(s,x)&&s.push(x)}),s.sort()}function C0(s){if(s instanceof Lt)return s.clone();var o=new rr(s.__wrapped__,s.__chain__);return o.__actions__=Si(s.__actions__),o.__index__=s.__index__,o.__values__=s.__values__,o}function CC(s,o,h){(h?li(s,o,h):o===t)?o=1:o=Pn(xt(o),0);var x=s==null?0:s.length;if(!x||o<1)return[];for(var M=0,P=0,B=re(Eu(x/o));M<x;)B[P++]=ar(s,M,M+=o);return B}function RC(s){for(var o=-1,h=s==null?0:s.length,x=0,M=[];++o<h;){var P=s[o];P&&(M[x++]=P)}return M}function PC(){var s=arguments.length;if(!s)return[];for(var o=re(s-1),h=arguments[0],x=s;x--;)o[x-1]=arguments[x];return Ns(mt(h)?Si(h):[h],Wn(o,1))}var LC=Tt(function(s,o){return yn(s)?Yl(s,Wn(o,1,yn,!0)):[]}),IC=Tt(function(s,o){var h=or(o);return yn(h)&&(h=t),yn(s)?Yl(s,Wn(o,1,yn,!0),lt(h,2)):[]}),DC=Tt(function(s,o){var h=or(o);return yn(h)&&(h=t),yn(s)?Yl(s,Wn(o,1,yn,!0),t,h):[]});function OC(s,o,h){var x=s==null?0:s.length;return x?(o=h||o===t?1:xt(o),ar(s,o<0?0:o,x)):[]}function UC(s,o,h){var x=s==null?0:s.length;return x?(o=h||o===t?1:xt(o),o=x-o,ar(s,0,o<0?0:o)):[]}function NC(s,o){return s&&s.length?Iu(s,lt(o,3),!0,!0):[]}function FC(s,o){return s&&s.length?Iu(s,lt(o,3),!0):[]}function BC(s,o,h,x){var M=s==null?0:s.length;return M?(h&&typeof h!="number"&&li(s,o,h)&&(h=0,x=M),PA(s,o,h,x)):[]}function R0(s,o,h){var x=s==null?0:s.length;if(!x)return-1;var M=h==null?0:xt(h);return M<0&&(M=Pn(x+M,0)),fu(s,lt(o,3),M)}function P0(s,o,h){var x=s==null?0:s.length;if(!x)return-1;var M=x-1;return h!==t&&(M=xt(h),M=h<0?Pn(x+M,0):Zn(M,x-1)),fu(s,lt(o,3),M,!0)}function L0(s){var o=s==null?0:s.length;return o?Wn(s,1):[]}function zC(s){var o=s==null?0:s.length;return o?Wn(s,ne):[]}function HC(s,o){var h=s==null?0:s.length;return h?(o=o===t?1:xt(o),Wn(s,o)):[]}function GC(s){for(var o=-1,h=s==null?0:s.length,x={};++o<h;){var M=s[o];x[M[0]]=M[1]}return x}function I0(s){return s&&s.length?s[0]:t}function kC(s,o,h){var x=s==null?0:s.length;if(!x)return-1;var M=h==null?0:xt(h);return M<0&&(M=Pn(x+M,0)),_o(s,o,M)}function VC(s){var o=s==null?0:s.length;return o?ar(s,0,-1):[]}var WC=Tt(function(s){var o=on(s,Fd);return o.length&&o[0]===s[0]?Ad(o):[]}),$C=Tt(function(s){var o=or(s),h=on(s,Fd);return o===or(h)?o=t:h.pop(),h.length&&h[0]===s[0]?Ad(h,lt(o,2)):[]}),XC=Tt(function(s){var o=or(s),h=on(s,Fd);return o=typeof o=="function"?o:t,o&&h.pop(),h.length&&h[0]===s[0]?Ad(h,t,o):[]});function qC(s,o){return s==null?"":Vw.call(s,o)}function or(s){var o=s==null?0:s.length;return o?s[o-1]:t}function YC(s,o,h){var x=s==null?0:s.length;if(!x)return-1;var M=x;return h!==t&&(M=xt(h),M=M<0?Pn(x+M,0):Zn(M,x-1)),o===o?Aw(s,o,M):fu(s,hv,M,!0)}function KC(s,o){return s&&s.length?Vv(s,xt(o)):t}var jC=Tt(D0);function D0(s,o){return s&&s.length&&o&&o.length?Ld(s,o):s}function ZC(s,o,h){return s&&s.length&&o&&o.length?Ld(s,o,lt(h,2)):s}function JC(s,o,h){return s&&s.length&&o&&o.length?Ld(s,o,t,h):s}var QC=us(function(s,o){var h=s==null?0:s.length,x=Md(s,o);return Xv(s,on(o,function(M){return fs(M,h)?+M:M}).sort(n0)),x});function eR(s,o){var h=[];if(!(s&&s.length))return h;var x=-1,M=[],P=s.length;for(o=lt(o,3);++x<P;){var B=s[x];o(B,x,s)&&(h.push(B),M.push(x))}return Xv(s,M),h}function Zd(s){return s==null?s:qw.call(s)}function tR(s,o,h){var x=s==null?0:s.length;return x?(h&&typeof h!="number"&&li(s,o,h)?(o=0,h=x):(o=o==null?0:xt(o),h=h===t?x:xt(h)),ar(s,o,h)):[]}function nR(s,o){return Lu(s,o)}function iR(s,o,h){return Od(s,o,lt(h,2))}function rR(s,o){var h=s==null?0:s.length;if(h){var x=Lu(s,o);if(x<h&&Tr(s[x],o))return x}return-1}function sR(s,o){return Lu(s,o,!0)}function aR(s,o,h){return Od(s,o,lt(h,2),!0)}function oR(s,o){var h=s==null?0:s.length;if(h){var x=Lu(s,o,!0)-1;if(Tr(s[x],o))return x}return-1}function lR(s){return s&&s.length?Yv(s):[]}function cR(s,o){return s&&s.length?Yv(s,lt(o,2)):[]}function uR(s){var o=s==null?0:s.length;return o?ar(s,1,o):[]}function fR(s,o,h){return s&&s.length?(o=h||o===t?1:xt(o),ar(s,0,o<0?0:o)):[]}function hR(s,o,h){var x=s==null?0:s.length;return x?(o=h||o===t?1:xt(o),o=x-o,ar(s,o<0?0:o,x)):[]}function dR(s,o){return s&&s.length?Iu(s,lt(o,3),!1,!0):[]}function pR(s,o){return s&&s.length?Iu(s,lt(o,3)):[]}var mR=Tt(function(s){return Hs(Wn(s,1,yn,!0))}),_R=Tt(function(s){var o=or(s);return yn(o)&&(o=t),Hs(Wn(s,1,yn,!0),lt(o,2))}),gR=Tt(function(s){var o=or(s);return o=typeof o=="function"?o:t,Hs(Wn(s,1,yn,!0),t,o)});function vR(s){return s&&s.length?Hs(s):[]}function xR(s,o){return s&&s.length?Hs(s,lt(o,2)):[]}function yR(s,o){return o=typeof o=="function"?o:t,s&&s.length?Hs(s,t,o):[]}function Jd(s){if(!(s&&s.length))return[];var o=0;return s=Us(s,function(h){if(yn(h))return o=Pn(h.length,o),!0}),md(o,function(h){return on(s,hd(h))})}function O0(s,o){if(!(s&&s.length))return[];var h=Jd(s);return o==null?h:on(h,function(x){return Ui(o,t,x)})}var SR=Tt(function(s,o){return yn(s)?Yl(s,o):[]}),ER=Tt(function(s){return Nd(Us(s,yn))}),MR=Tt(function(s){var o=or(s);return yn(o)&&(o=t),Nd(Us(s,yn),lt(o,2))}),TR=Tt(function(s){var o=or(s);return o=typeof o=="function"?o:t,Nd(Us(s,yn),t,o)}),bR=Tt(Jd);function wR(s,o){return Jv(s||[],o||[],ql)}function AR(s,o){return Jv(s||[],o||[],Zl)}var CR=Tt(function(s){var o=s.length,h=o>1?s[o-1]:t;return h=typeof h=="function"?(s.pop(),h):t,O0(s,h)});function U0(s){var o=C(s);return o.__chain__=!0,o}function RR(s,o){return o(s),s}function Gu(s,o){return o(s)}var PR=us(function(s){var o=s.length,h=o?s[0]:0,x=this.__wrapped__,M=function(P){return Md(P,s)};return o>1||this.__actions__.length||!(x instanceof Lt)||!fs(h)?this.thru(M):(x=x.slice(h,+h+(o?1:0)),x.__actions__.push({func:Gu,args:[M],thisArg:t}),new rr(x,this.__chain__).thru(function(P){return o&&!P.length&&P.push(t),P}))});function LR(){return U0(this)}function IR(){return new rr(this.value(),this.__chain__)}function DR(){this.__values__===t&&(this.__values__=K0(this.value()));var s=this.__index__>=this.__values__.length,o=s?t:this.__values__[this.__index__++];return{done:s,value:o}}function OR(){return this}function UR(s){for(var o,h=this;h instanceof wu;){var x=C0(h);x.__index__=0,x.__values__=t,o?M.__wrapped__=x:o=x;var M=x;h=h.__wrapped__}return M.__wrapped__=s,o}function NR(){var s=this.__wrapped__;if(s instanceof Lt){var o=s;return this.__actions__.length&&(o=new Lt(this)),o=o.reverse(),o.__actions__.push({func:Gu,args:[Zd],thisArg:t}),new rr(o,this.__chain__)}return this.thru(Zd)}function FR(){return Zv(this.__wrapped__,this.__actions__)}var BR=Du(function(s,o,h){Wt.call(s,h)?++s[h]:ls(s,h,1)});function zR(s,o,h){var x=mt(s)?uv:RA;return h&&li(s,o,h)&&(o=t),x(s,lt(o,3))}function HR(s,o){var h=mt(s)?Us:Ov;return h(s,lt(o,3))}var GR=l0(R0),kR=l0(P0);function VR(s,o){return Wn(ku(s,o),1)}function WR(s,o){return Wn(ku(s,o),ne)}function $R(s,o,h){return h=h===t?1:xt(h),Wn(ku(s,o),h)}function N0(s,o){var h=mt(s)?nr:zs;return h(s,lt(o,3))}function F0(s,o){var h=mt(s)?uw:Dv;return h(s,lt(o,3))}var XR=Du(function(s,o,h){Wt.call(s,h)?s[h].push(o):ls(s,h,[o])});function qR(s,o,h,x){s=Ei(s)?s:Co(s),h=h&&!x?xt(h):0;var M=s.length;return h<0&&(h=Pn(M+h,0)),qu(s)?h<=M&&s.indexOf(o,h)>-1:!!M&&_o(s,o,h)>-1}var YR=Tt(function(s,o,h){var x=-1,M=typeof o=="function",P=Ei(s)?re(s.length):[];return zs(s,function(B){P[++x]=M?Ui(o,B,h):Kl(B,o,h)}),P}),KR=Du(function(s,o,h){ls(s,h,o)});function ku(s,o){var h=mt(s)?on:Hv;return h(s,lt(o,3))}function jR(s,o,h,x){return s==null?[]:(mt(o)||(o=o==null?[]:[o]),h=x?t:h,mt(h)||(h=h==null?[]:[h]),Wv(s,o,h))}var ZR=Du(function(s,o,h){s[h?0:1].push(o)},function(){return[[],[]]});function JR(s,o,h){var x=mt(s)?ud:pv,M=arguments.length<3;return x(s,lt(o,4),h,M,zs)}function QR(s,o,h){var x=mt(s)?fw:pv,M=arguments.length<3;return x(s,lt(o,4),h,M,Dv)}function eP(s,o){var h=mt(s)?Us:Ov;return h(s,$u(lt(o,3)))}function tP(s){var o=mt(s)?Rv:qA;return o(s)}function nP(s,o,h){(h?li(s,o,h):o===t)?o=1:o=xt(o);var x=mt(s)?TA:YA;return x(s,o)}function iP(s){var o=mt(s)?bA:jA;return o(s)}function rP(s){if(s==null)return 0;if(Ei(s))return qu(s)?vo(s):s.length;var o=Jn(s);return o==Me||o==q?s.size:Rd(s).length}function sP(s,o,h){var x=mt(s)?fd:ZA;return h&&li(s,o,h)&&(o=t),x(s,lt(o,3))}var aP=Tt(function(s,o){if(s==null)return[];var h=o.length;return h>1&&li(s,o[0],o[1])?o=[]:h>2&&li(o[0],o[1],o[2])&&(o=[o[0]]),Wv(s,Wn(o,1),[])}),Vu=Hw||function(){return Vn.Date.now()};function oP(s,o){if(typeof o!="function")throw new ir(l);return s=xt(s),function(){if(--s<1)return o.apply(this,arguments)}}function B0(s,o,h){return o=h?t:o,o=s&&o==null?s.length:o,cs(s,R,t,t,t,t,o)}function z0(s,o){var h;if(typeof o!="function")throw new ir(l);return s=xt(s),function(){return--s>0&&(h=o.apply(this,arguments)),s<=1&&(o=t),h}}var Qd=Tt(function(s,o,h){var x=g;if(h.length){var M=Fs(h,wo(Qd));x|=U}return cs(s,x,o,h,M)}),H0=Tt(function(s,o,h){var x=g|v;if(h.length){var M=Fs(h,wo(H0));x|=U}return cs(o,x,s,h,M)});function G0(s,o,h){o=h?t:o;var x=cs(s,E,t,t,t,t,t,o);return x.placeholder=G0.placeholder,x}function k0(s,o,h){o=h?t:o;var x=cs(s,w,t,t,t,t,t,o);return x.placeholder=k0.placeholder,x}function V0(s,o,h){var x,M,P,B,H,W,fe=0,he=!1,_e=!1,Le=!0;if(typeof s!="function")throw new ir(l);o=lr(o)||0,cn(h)&&(he=!!h.leading,_e="maxWait"in h,P=_e?Pn(lr(h.maxWait)||0,o):P,Le="trailing"in h?!!h.trailing:Le);function je(Sn){var br=x,ps=M;return x=M=t,fe=Sn,B=s.apply(ps,br),B}function ct(Sn){return fe=Sn,H=ec(Rt,o),he?je(Sn):B}function Et(Sn){var br=Sn-W,ps=Sn-fe,lx=o-br;return _e?Zn(lx,P-ps):lx}function ut(Sn){var br=Sn-W,ps=Sn-fe;return W===t||br>=o||br<0||_e&&ps>=P}function Rt(){var Sn=Vu();if(ut(Sn))return Ot(Sn);H=ec(Rt,Et(Sn))}function Ot(Sn){return H=t,Le&&x?je(Sn):(x=M=t,B)}function zi(){H!==t&&Qv(H),fe=0,x=W=M=H=t}function ci(){return H===t?B:Ot(Vu())}function Hi(){var Sn=Vu(),br=ut(Sn);if(x=arguments,M=this,W=Sn,br){if(H===t)return ct(W);if(_e)return Qv(H),H=ec(Rt,o),je(W)}return H===t&&(H=ec(Rt,o)),B}return Hi.cancel=zi,Hi.flush=ci,Hi}var lP=Tt(function(s,o){return Iv(s,1,o)}),cP=Tt(function(s,o,h){return Iv(s,lr(o)||0,h)});function uP(s){return cs(s,$)}function Wu(s,o){if(typeof s!="function"||o!=null&&typeof o!="function")throw new ir(l);var h=function(){var x=arguments,M=o?o.apply(this,x):x[0],P=h.cache;if(P.has(M))return P.get(M);var B=s.apply(this,x);return h.cache=P.set(M,B)||P,B};return h.cache=new(Wu.Cache||os),h}Wu.Cache=os;function $u(s){if(typeof s!="function")throw new ir(l);return function(){var o=arguments;switch(o.length){case 0:return!s.call(this);case 1:return!s.call(this,o[0]);case 2:return!s.call(this,o[0],o[1]);case 3:return!s.call(this,o[0],o[1],o[2])}return!s.apply(this,o)}}function fP(s){return z0(2,s)}var hP=JA(function(s,o){o=o.length==1&&mt(o[0])?on(o[0],Ni(lt())):on(Wn(o,1),Ni(lt()));var h=o.length;return Tt(function(x){for(var M=-1,P=Zn(x.length,h);++M<P;)x[M]=o[M].call(this,x[M]);return Ui(s,this,x)})}),ep=Tt(function(s,o){var h=Fs(o,wo(ep));return cs(s,U,t,o,h)}),W0=Tt(function(s,o){var h=Fs(o,wo(W0));return cs(s,I,t,o,h)}),dP=us(function(s,o){return cs(s,G,t,t,t,o)});function pP(s,o){if(typeof s!="function")throw new ir(l);return o=o===t?o:xt(o),Tt(s,o)}function mP(s,o){if(typeof s!="function")throw new ir(l);return o=o==null?0:Pn(xt(o),0),Tt(function(h){var x=h[o],M=ks(h,0,o);return x&&Ns(M,x),Ui(s,this,M)})}function _P(s,o,h){var x=!0,M=!0;if(typeof s!="function")throw new ir(l);return cn(h)&&(x="leading"in h?!!h.leading:x,M="trailing"in h?!!h.trailing:M),V0(s,o,{leading:x,maxWait:o,trailing:M})}function gP(s){return B0(s,1)}function vP(s,o){return ep(Bd(o),s)}function xP(){if(!arguments.length)return[];var s=arguments[0];return mt(s)?s:[s]}function yP(s){return sr(s,m)}function SP(s,o){return o=typeof o=="function"?o:t,sr(s,m,o)}function EP(s){return sr(s,p|m)}function MP(s,o){return o=typeof o=="function"?o:t,sr(s,p|m,o)}function TP(s,o){return o==null||Lv(s,o,Un(o))}function Tr(s,o){return s===o||s!==s&&o!==o}var bP=Fu(wd),wP=Fu(function(s,o){return s>=o}),ba=Fv(function(){return arguments}())?Fv:function(s){return mn(s)&&Wt.call(s,"callee")&&!Mv.call(s,"callee")},mt=re.isArray,AP=rv?Ni(rv):UA;function Ei(s){return s!=null&&Xu(s.length)&&!hs(s)}function yn(s){return mn(s)&&Ei(s)}function CP(s){return s===!0||s===!1||mn(s)&&oi(s)==Oe}var Vs=kw||fp,RP=sv?Ni(sv):NA;function PP(s){return mn(s)&&s.nodeType===1&&!tc(s)}function LP(s){if(s==null)return!0;if(Ei(s)&&(mt(s)||typeof s=="string"||typeof s.splice=="function"||Vs(s)||Ao(s)||ba(s)))return!s.length;var o=Jn(s);if(o==Me||o==q)return!s.size;if(Ql(s))return!Rd(s).length;for(var h in s)if(Wt.call(s,h))return!1;return!0}function IP(s,o){return jl(s,o)}function DP(s,o,h){h=typeof h=="function"?h:t;var x=h?h(s,o):t;return x===t?jl(s,o,t,h):!!x}function tp(s){if(!mn(s))return!1;var o=oi(s);return o==$e||o==_t||typeof s.message=="string"&&typeof s.name=="string"&&!tc(s)}function OP(s){return typeof s=="number"&&bv(s)}function hs(s){if(!cn(s))return!1;var o=oi(s);return o==X||o==st||o==Ie||o==D}function $0(s){return typeof s=="number"&&s==xt(s)}function Xu(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=ie}function cn(s){var o=typeof s;return s!=null&&(o=="object"||o=="function")}function mn(s){return s!=null&&typeof s=="object"}var X0=av?Ni(av):BA;function UP(s,o){return s===o||Cd(s,o,$d(o))}function NP(s,o,h){return h=typeof h=="function"?h:t,Cd(s,o,$d(o),h)}function FP(s){return q0(s)&&s!=+s}function BP(s){if(SC(s))throw new pt(a);return Bv(s)}function zP(s){return s===null}function HP(s){return s==null}function q0(s){return typeof s=="number"||mn(s)&&oi(s)==ke}function tc(s){if(!mn(s)||oi(s)!=Z)return!1;var o=xu(s);if(o===null)return!0;var h=Wt.call(o,"constructor")&&o.constructor;return typeof h=="function"&&h instanceof h&&mu.call(h)==Nw}var np=ov?Ni(ov):zA;function GP(s){return $0(s)&&s>=-ie&&s<=ie}var Y0=lv?Ni(lv):HA;function qu(s){return typeof s=="string"||!mt(s)&&mn(s)&&oi(s)==me}function Bi(s){return typeof s=="symbol"||mn(s)&&oi(s)==de}var Ao=cv?Ni(cv):GA;function kP(s){return s===t}function VP(s){return mn(s)&&Jn(s)==we}function WP(s){return mn(s)&&oi(s)==be}var $P=Fu(Pd),XP=Fu(function(s,o){return s<=o});function K0(s){if(!s)return[];if(Ei(s))return qu(s)?Er(s):Si(s);if(kl&&s[kl])return Tw(s[kl]());var o=Jn(s),h=o==Me?gd:o==q?hu:Co;return h(s)}function ds(s){if(!s)return s===0?s:0;if(s=lr(s),s===ne||s===-ne){var o=s<0?-1:1;return o*ae}return s===s?s:0}function xt(s){var o=ds(s),h=o%1;return o===o?h?o-h:o:0}function j0(s){return s?Sa(xt(s),0,oe):0}function lr(s){if(typeof s=="number")return s;if(Bi(s))return N;if(cn(s)){var o=typeof s.valueOf=="function"?s.valueOf():s;s=cn(o)?o+"":o}if(typeof s!="string")return s===0?s:+s;s=mv(s);var h=V.test(s);return h||Q.test(s)?ow(s.slice(2),h?2:8):L.test(s)?N:+s}function Z0(s){return zr(s,Mi(s))}function qP(s){return s?Sa(xt(s),-ie,ie):s===0?s:0}function kt(s){return s==null?"":Fi(s)}var YP=To(function(s,o){if(Ql(o)||Ei(o)){zr(o,Un(o),s);return}for(var h in o)Wt.call(o,h)&&ql(s,h,o[h])}),J0=To(function(s,o){zr(o,Mi(o),s)}),Yu=To(function(s,o,h,x){zr(o,Mi(o),s,x)}),KP=To(function(s,o,h,x){zr(o,Un(o),s,x)}),jP=us(Md);function ZP(s,o){var h=Mo(s);return o==null?h:Pv(h,o)}var JP=Tt(function(s,o){s=Zt(s);var h=-1,x=o.length,M=x>2?o[2]:t;for(M&&li(o[0],o[1],M)&&(x=1);++h<x;)for(var P=o[h],B=Mi(P),H=-1,W=B.length;++H<W;){var fe=B[H],he=s[fe];(he===t||Tr(he,yo[fe])&&!Wt.call(s,fe))&&(s[fe]=P[fe])}return s}),QP=Tt(function(s){return s.push(t,m0),Ui(Q0,t,s)});function eL(s,o){return fv(s,lt(o,3),Br)}function tL(s,o){return fv(s,lt(o,3),bd)}function nL(s,o){return s==null?s:Td(s,lt(o,3),Mi)}function iL(s,o){return s==null?s:Uv(s,lt(o,3),Mi)}function rL(s,o){return s&&Br(s,lt(o,3))}function sL(s,o){return s&&bd(s,lt(o,3))}function aL(s){return s==null?[]:Ru(s,Un(s))}function oL(s){return s==null?[]:Ru(s,Mi(s))}function ip(s,o,h){var x=s==null?t:Ea(s,o);return x===t?h:x}function lL(s,o){return s!=null&&v0(s,o,LA)}function rp(s,o){return s!=null&&v0(s,o,IA)}var cL=u0(function(s,o,h){o!=null&&typeof o.toString!="function"&&(o=_u.call(o)),s[o]=h},ap(Ti)),uL=u0(function(s,o,h){o!=null&&typeof o.toString!="function"&&(o=_u.call(o)),Wt.call(s,o)?s[o].push(h):s[o]=[h]},lt),fL=Tt(Kl);function Un(s){return Ei(s)?Cv(s):Rd(s)}function Mi(s){return Ei(s)?Cv(s,!0):kA(s)}function hL(s,o){var h={};return o=lt(o,3),Br(s,function(x,M,P){ls(h,o(x,M,P),x)}),h}function dL(s,o){var h={};return o=lt(o,3),Br(s,function(x,M,P){ls(h,M,o(x,M,P))}),h}var pL=To(function(s,o,h){Pu(s,o,h)}),Q0=To(function(s,o,h,x){Pu(s,o,h,x)}),mL=us(function(s,o){var h={};if(s==null)return h;var x=!1;o=on(o,function(P){return P=Gs(P,s),x||(x=P.length>1),P}),zr(s,Vd(s),h),x&&(h=sr(h,p|_|m,cC));for(var M=o.length;M--;)Ud(h,o[M]);return h});function _L(s,o){return ex(s,$u(lt(o)))}var gL=us(function(s,o){return s==null?{}:WA(s,o)});function ex(s,o){if(s==null)return{};var h=on(Vd(s),function(x){return[x]});return o=lt(o),$v(s,h,function(x,M){return o(x,M[0])})}function vL(s,o,h){o=Gs(o,s);var x=-1,M=o.length;for(M||(M=1,s=t);++x<M;){var P=s==null?t:s[Hr(o[x])];P===t&&(x=M,P=h),s=hs(P)?P.call(s):P}return s}function xL(s,o,h){return s==null?s:Zl(s,o,h)}function yL(s,o,h,x){return x=typeof x=="function"?x:t,s==null?s:Zl(s,o,h,x)}var tx=d0(Un),nx=d0(Mi);function SL(s,o,h){var x=mt(s),M=x||Vs(s)||Ao(s);if(o=lt(o,4),h==null){var P=s&&s.constructor;M?h=x?new P:[]:cn(s)?h=hs(P)?Mo(xu(s)):{}:h={}}return(M?nr:Br)(s,function(B,H,W){return o(h,B,H,W)}),h}function EL(s,o){return s==null?!0:Ud(s,o)}function ML(s,o,h){return s==null?s:jv(s,o,Bd(h))}function TL(s,o,h,x){return x=typeof x=="function"?x:t,s==null?s:jv(s,o,Bd(h),x)}function Co(s){return s==null?[]:_d(s,Un(s))}function bL(s){return s==null?[]:_d(s,Mi(s))}function wL(s,o,h){return h===t&&(h=o,o=t),h!==t&&(h=lr(h),h=h===h?h:0),o!==t&&(o=lr(o),o=o===o?o:0),Sa(lr(s),o,h)}function AL(s,o,h){return o=ds(o),h===t?(h=o,o=0):h=ds(h),s=lr(s),DA(s,o,h)}function CL(s,o,h){if(h&&typeof h!="boolean"&&li(s,o,h)&&(o=h=t),h===t&&(typeof o=="boolean"?(h=o,o=t):typeof s=="boolean"&&(h=s,s=t)),s===t&&o===t?(s=0,o=1):(s=ds(s),o===t?(o=s,s=0):o=ds(o)),s>o){var x=s;s=o,o=x}if(h||s%1||o%1){var M=wv();return Zn(s+M*(o-s+aw("1e-"+((M+"").length-1))),o)}return Id(s,o)}var RL=bo(function(s,o,h){return o=o.toLowerCase(),s+(h?ix(o):o)});function ix(s){return sp(kt(s).toLowerCase())}function rx(s){return s=kt(s),s&&s.replace(Ee,xw).replace(j1,"")}function PL(s,o,h){s=kt(s),o=Fi(o);var x=s.length;h=h===t?x:Sa(xt(h),0,x);var M=h;return h-=o.length,h>=0&&s.slice(h,M)==o}function LL(s){return s=kt(s),s&&Ne.test(s)?s.replace(ve,yw):s}function IL(s){return s=kt(s),s&&nt.test(s)?s.replace(ye,"\\$&"):s}var DL=bo(function(s,o,h){return s+(h?"-":"")+o.toLowerCase()}),OL=bo(function(s,o,h){return s+(h?" ":"")+o.toLowerCase()}),UL=o0("toLowerCase");function NL(s,o,h){s=kt(s),o=xt(o);var x=o?vo(s):0;if(!o||x>=o)return s;var M=(o-x)/2;return Nu(Mu(M),h)+s+Nu(Eu(M),h)}function FL(s,o,h){s=kt(s),o=xt(o);var x=o?vo(s):0;return o&&x<o?s+Nu(o-x,h):s}function BL(s,o,h){s=kt(s),o=xt(o);var x=o?vo(s):0;return o&&x<o?Nu(o-x,h)+s:s}function zL(s,o,h){return h||o==null?o=0:o&&(o=+o),Xw(kt(s).replace(Qe,""),o||0)}function HL(s,o,h){return(h?li(s,o,h):o===t)?o=1:o=xt(o),Dd(kt(s),o)}function GL(){var s=arguments,o=kt(s[0]);return s.length<3?o:o.replace(s[1],s[2])}var kL=bo(function(s,o,h){return s+(h?"_":"")+o.toLowerCase()});function VL(s,o,h){return h&&typeof h!="number"&&li(s,o,h)&&(o=h=t),h=h===t?oe:h>>>0,h?(s=kt(s),s&&(typeof o=="string"||o!=null&&!np(o))&&(o=Fi(o),!o&&go(s))?ks(Er(s),0,h):s.split(o,h)):[]}var WL=bo(function(s,o,h){return s+(h?" ":"")+sp(o)});function $L(s,o,h){return s=kt(s),h=h==null?0:Sa(xt(h),0,s.length),o=Fi(o),s.slice(h,h+o.length)==o}function XL(s,o,h){var x=C.templateSettings;h&&li(s,o,h)&&(o=t),s=kt(s),o=Yu({},o,x,p0);var M=Yu({},o.imports,x.imports,p0),P=Un(M),B=_d(M,P),H,W,fe=0,he=o.interpolate||Fe,_e="__p += '",Le=vd((o.escape||Fe).source+"|"+he.source+"|"+(he===Dt?zt:Fe).source+"|"+(o.evaluate||Fe).source+"|$","g"),je="//# sourceURL="+(Wt.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++tw+"]")+`
`;s.replace(Le,function(ut,Rt,Ot,zi,ci,Hi){return Ot||(Ot=zi),_e+=s.slice(fe,Hi).replace(it,Sw),Rt&&(H=!0,_e+=`' +
__e(`+Rt+`) +
'`),ci&&(W=!0,_e+=`';
`+ci+`;
__p += '`),Ot&&(_e+=`' +
((__t = (`+Ot+`)) == null ? '' : __t) +
'`),fe=Hi+ut.length,ut}),_e+=`';
`;var ct=Wt.call(o,"variable")&&o.variable;if(!ct)_e=`with (obj) {
`+_e+`
}
`;else if(Kt.test(ct))throw new pt(c);_e=(W?_e.replace(It,""):_e).replace(Pe,"$1").replace(Ct,"$1;"),_e="function("+(ct||"obj")+`) {
`+(ct?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(H?", __e = _.escape":"")+(W?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+_e+`return __p
}`;var Et=ax(function(){return Ht(P,je+"return "+_e).apply(t,B)});if(Et.source=_e,tp(Et))throw Et;return Et}function qL(s){return kt(s).toLowerCase()}function YL(s){return kt(s).toUpperCase()}function KL(s,o,h){if(s=kt(s),s&&(h||o===t))return mv(s);if(!s||!(o=Fi(o)))return s;var x=Er(s),M=Er(o),P=_v(x,M),B=gv(x,M)+1;return ks(x,P,B).join("")}function jL(s,o,h){if(s=kt(s),s&&(h||o===t))return s.slice(0,xv(s)+1);if(!s||!(o=Fi(o)))return s;var x=Er(s),M=gv(x,Er(o))+1;return ks(x,0,M).join("")}function ZL(s,o,h){if(s=kt(s),s&&(h||o===t))return s.replace(Qe,"");if(!s||!(o=Fi(o)))return s;var x=Er(s),M=_v(x,Er(o));return ks(x,M).join("")}function JL(s,o){var h=T,x=O;if(cn(o)){var M="separator"in o?o.separator:M;h="length"in o?xt(o.length):h,x="omission"in o?Fi(o.omission):x}s=kt(s);var P=s.length;if(go(s)){var B=Er(s);P=B.length}if(h>=P)return s;var H=h-vo(x);if(H<1)return x;var W=B?ks(B,0,H).join(""):s.slice(0,H);if(M===t)return W+x;if(B&&(H+=W.length-H),np(M)){if(s.slice(H).search(M)){var fe,he=W;for(M.global||(M=vd(M.source,kt(jn.exec(M))+"g")),M.lastIndex=0;fe=M.exec(he);)var _e=fe.index;W=W.slice(0,_e===t?H:_e)}}else if(s.indexOf(Fi(M),H)!=H){var Le=W.lastIndexOf(M);Le>-1&&(W=W.slice(0,Le))}return W+x}function QL(s){return s=kt(s),s&&xe.test(s)?s.replace(F,Cw):s}var e2=bo(function(s,o,h){return s+(h?" ":"")+o.toUpperCase()}),sp=o0("toUpperCase");function sx(s,o,h){return s=kt(s),o=h?t:o,o===t?Mw(s)?Lw(s):pw(s):s.match(o)||[]}var ax=Tt(function(s,o){try{return Ui(s,t,o)}catch(h){return tp(h)?h:new pt(h)}}),t2=us(function(s,o){return nr(o,function(h){h=Hr(h),ls(s,h,Qd(s[h],s))}),s});function n2(s){var o=s==null?0:s.length,h=lt();return s=o?on(s,function(x){if(typeof x[1]!="function")throw new ir(l);return[h(x[0]),x[1]]}):[],Tt(function(x){for(var M=-1;++M<o;){var P=s[M];if(Ui(P[0],this,x))return Ui(P[1],this,x)}})}function i2(s){return CA(sr(s,p))}function ap(s){return function(){return s}}function r2(s,o){return s==null||s!==s?o:s}var s2=c0(),a2=c0(!0);function Ti(s){return s}function op(s){return zv(typeof s=="function"?s:sr(s,p))}function o2(s){return Gv(sr(s,p))}function l2(s,o){return kv(s,sr(o,p))}var c2=Tt(function(s,o){return function(h){return Kl(h,s,o)}}),u2=Tt(function(s,o){return function(h){return Kl(s,h,o)}});function lp(s,o,h){var x=Un(o),M=Ru(o,x);h==null&&!(cn(o)&&(M.length||!x.length))&&(h=o,o=s,s=this,M=Ru(o,Un(o)));var P=!(cn(h)&&"chain"in h)||!!h.chain,B=hs(s);return nr(M,function(H){var W=o[H];s[H]=W,B&&(s.prototype[H]=function(){var fe=this.__chain__;if(P||fe){var he=s(this.__wrapped__),_e=he.__actions__=Si(this.__actions__);return _e.push({func:W,args:arguments,thisArg:s}),he.__chain__=fe,he}return W.apply(s,Ns([this.value()],arguments))})}),s}function f2(){return Vn._===this&&(Vn._=Fw),this}function cp(){}function h2(s){return s=xt(s),Tt(function(o){return Vv(o,s)})}var d2=Hd(on),p2=Hd(uv),m2=Hd(fd);function ox(s){return qd(s)?hd(Hr(s)):$A(s)}function _2(s){return function(o){return s==null?t:Ea(s,o)}}var g2=f0(),v2=f0(!0);function up(){return[]}function fp(){return!1}function x2(){return{}}function y2(){return""}function S2(){return!0}function E2(s,o){if(s=xt(s),s<1||s>ie)return[];var h=oe,x=Zn(s,oe);o=lt(o),s-=oe;for(var M=md(x,o);++h<s;)o(h);return M}function M2(s){return mt(s)?on(s,Hr):Bi(s)?[s]:Si(A0(kt(s)))}function T2(s){var o=++Uw;return kt(s)+o}var b2=Uu(function(s,o){return s+o},0),w2=Gd("ceil"),A2=Uu(function(s,o){return s/o},1),C2=Gd("floor");function R2(s){return s&&s.length?Cu(s,Ti,wd):t}function P2(s,o){return s&&s.length?Cu(s,lt(o,2),wd):t}function L2(s){return dv(s,Ti)}function I2(s,o){return dv(s,lt(o,2))}function D2(s){return s&&s.length?Cu(s,Ti,Pd):t}function O2(s,o){return s&&s.length?Cu(s,lt(o,2),Pd):t}var U2=Uu(function(s,o){return s*o},1),N2=Gd("round"),F2=Uu(function(s,o){return s-o},0);function B2(s){return s&&s.length?pd(s,Ti):0}function z2(s,o){return s&&s.length?pd(s,lt(o,2)):0}return C.after=oP,C.ary=B0,C.assign=YP,C.assignIn=J0,C.assignInWith=Yu,C.assignWith=KP,C.at=jP,C.before=z0,C.bind=Qd,C.bindAll=t2,C.bindKey=H0,C.castArray=xP,C.chain=U0,C.chunk=CC,C.compact=RC,C.concat=PC,C.cond=n2,C.conforms=i2,C.constant=ap,C.countBy=BR,C.create=ZP,C.curry=G0,C.curryRight=k0,C.debounce=V0,C.defaults=JP,C.defaultsDeep=QP,C.defer=lP,C.delay=cP,C.difference=LC,C.differenceBy=IC,C.differenceWith=DC,C.drop=OC,C.dropRight=UC,C.dropRightWhile=NC,C.dropWhile=FC,C.fill=BC,C.filter=HR,C.flatMap=VR,C.flatMapDeep=WR,C.flatMapDepth=$R,C.flatten=L0,C.flattenDeep=zC,C.flattenDepth=HC,C.flip=uP,C.flow=s2,C.flowRight=a2,C.fromPairs=GC,C.functions=aL,C.functionsIn=oL,C.groupBy=XR,C.initial=VC,C.intersection=WC,C.intersectionBy=$C,C.intersectionWith=XC,C.invert=cL,C.invertBy=uL,C.invokeMap=YR,C.iteratee=op,C.keyBy=KR,C.keys=Un,C.keysIn=Mi,C.map=ku,C.mapKeys=hL,C.mapValues=dL,C.matches=o2,C.matchesProperty=l2,C.memoize=Wu,C.merge=pL,C.mergeWith=Q0,C.method=c2,C.methodOf=u2,C.mixin=lp,C.negate=$u,C.nthArg=h2,C.omit=mL,C.omitBy=_L,C.once=fP,C.orderBy=jR,C.over=d2,C.overArgs=hP,C.overEvery=p2,C.overSome=m2,C.partial=ep,C.partialRight=W0,C.partition=ZR,C.pick=gL,C.pickBy=ex,C.property=ox,C.propertyOf=_2,C.pull=jC,C.pullAll=D0,C.pullAllBy=ZC,C.pullAllWith=JC,C.pullAt=QC,C.range=g2,C.rangeRight=v2,C.rearg=dP,C.reject=eP,C.remove=eR,C.rest=pP,C.reverse=Zd,C.sampleSize=nP,C.set=xL,C.setWith=yL,C.shuffle=iP,C.slice=tR,C.sortBy=aP,C.sortedUniq=lR,C.sortedUniqBy=cR,C.split=VL,C.spread=mP,C.tail=uR,C.take=fR,C.takeRight=hR,C.takeRightWhile=dR,C.takeWhile=pR,C.tap=RR,C.throttle=_P,C.thru=Gu,C.toArray=K0,C.toPairs=tx,C.toPairsIn=nx,C.toPath=M2,C.toPlainObject=Z0,C.transform=SL,C.unary=gP,C.union=mR,C.unionBy=_R,C.unionWith=gR,C.uniq=vR,C.uniqBy=xR,C.uniqWith=yR,C.unset=EL,C.unzip=Jd,C.unzipWith=O0,C.update=ML,C.updateWith=TL,C.values=Co,C.valuesIn=bL,C.without=SR,C.words=sx,C.wrap=vP,C.xor=ER,C.xorBy=MR,C.xorWith=TR,C.zip=bR,C.zipObject=wR,C.zipObjectDeep=AR,C.zipWith=CR,C.entries=tx,C.entriesIn=nx,C.extend=J0,C.extendWith=Yu,lp(C,C),C.add=b2,C.attempt=ax,C.camelCase=RL,C.capitalize=ix,C.ceil=w2,C.clamp=wL,C.clone=yP,C.cloneDeep=EP,C.cloneDeepWith=MP,C.cloneWith=SP,C.conformsTo=TP,C.deburr=rx,C.defaultTo=r2,C.divide=A2,C.endsWith=PL,C.eq=Tr,C.escape=LL,C.escapeRegExp=IL,C.every=zR,C.find=GR,C.findIndex=R0,C.findKey=eL,C.findLast=kR,C.findLastIndex=P0,C.findLastKey=tL,C.floor=C2,C.forEach=N0,C.forEachRight=F0,C.forIn=nL,C.forInRight=iL,C.forOwn=rL,C.forOwnRight=sL,C.get=ip,C.gt=bP,C.gte=wP,C.has=lL,C.hasIn=rp,C.head=I0,C.identity=Ti,C.includes=qR,C.indexOf=kC,C.inRange=AL,C.invoke=fL,C.isArguments=ba,C.isArray=mt,C.isArrayBuffer=AP,C.isArrayLike=Ei,C.isArrayLikeObject=yn,C.isBoolean=CP,C.isBuffer=Vs,C.isDate=RP,C.isElement=PP,C.isEmpty=LP,C.isEqual=IP,C.isEqualWith=DP,C.isError=tp,C.isFinite=OP,C.isFunction=hs,C.isInteger=$0,C.isLength=Xu,C.isMap=X0,C.isMatch=UP,C.isMatchWith=NP,C.isNaN=FP,C.isNative=BP,C.isNil=HP,C.isNull=zP,C.isNumber=q0,C.isObject=cn,C.isObjectLike=mn,C.isPlainObject=tc,C.isRegExp=np,C.isSafeInteger=GP,C.isSet=Y0,C.isString=qu,C.isSymbol=Bi,C.isTypedArray=Ao,C.isUndefined=kP,C.isWeakMap=VP,C.isWeakSet=WP,C.join=qC,C.kebabCase=DL,C.last=or,C.lastIndexOf=YC,C.lowerCase=OL,C.lowerFirst=UL,C.lt=$P,C.lte=XP,C.max=R2,C.maxBy=P2,C.mean=L2,C.meanBy=I2,C.min=D2,C.minBy=O2,C.stubArray=up,C.stubFalse=fp,C.stubObject=x2,C.stubString=y2,C.stubTrue=S2,C.multiply=U2,C.nth=KC,C.noConflict=f2,C.noop=cp,C.now=Vu,C.pad=NL,C.padEnd=FL,C.padStart=BL,C.parseInt=zL,C.random=CL,C.reduce=JR,C.reduceRight=QR,C.repeat=HL,C.replace=GL,C.result=vL,C.round=N2,C.runInContext=k,C.sample=tP,C.size=rP,C.snakeCase=kL,C.some=sP,C.sortedIndex=nR,C.sortedIndexBy=iR,C.sortedIndexOf=rR,C.sortedLastIndex=sR,C.sortedLastIndexBy=aR,C.sortedLastIndexOf=oR,C.startCase=WL,C.startsWith=$L,C.subtract=F2,C.sum=B2,C.sumBy=z2,C.template=XL,C.times=E2,C.toFinite=ds,C.toInteger=xt,C.toLength=j0,C.toLower=qL,C.toNumber=lr,C.toSafeInteger=qP,C.toString=kt,C.toUpper=YL,C.trim=KL,C.trimEnd=jL,C.trimStart=ZL,C.truncate=JL,C.unescape=QL,C.uniqueId=T2,C.upperCase=e2,C.upperFirst=sp,C.each=N0,C.eachRight=F0,C.first=I0,lp(C,function(){var s={};return Br(C,function(o,h){Wt.call(C.prototype,h)||(s[h]=o)}),s}(),{chain:!1}),C.VERSION=n,nr(["bind","bindKey","curry","curryRight","partial","partialRight"],function(s){C[s].placeholder=C}),nr(["drop","take"],function(s,o){Lt.prototype[s]=function(h){h=h===t?1:Pn(xt(h),0);var x=this.__filtered__&&!o?new Lt(this):this.clone();return x.__filtered__?x.__takeCount__=Zn(h,x.__takeCount__):x.__views__.push({size:Zn(h,oe),type:s+(x.__dir__<0?"Right":"")}),x},Lt.prototype[s+"Right"]=function(h){return this.reverse()[s](h).reverse()}}),nr(["filter","map","takeWhile"],function(s,o){var h=o+1,x=h==z||h==K;Lt.prototype[s]=function(M){var P=this.clone();return P.__iteratees__.push({iteratee:lt(M,3),type:h}),P.__filtered__=P.__filtered__||x,P}}),nr(["head","last"],function(s,o){var h="take"+(o?"Right":"");Lt.prototype[s]=function(){return this[h](1).value()[0]}}),nr(["initial","tail"],function(s,o){var h="drop"+(o?"":"Right");Lt.prototype[s]=function(){return this.__filtered__?new Lt(this):this[h](1)}}),Lt.prototype.compact=function(){return this.filter(Ti)},Lt.prototype.find=function(s){return this.filter(s).head()},Lt.prototype.findLast=function(s){return this.reverse().find(s)},Lt.prototype.invokeMap=Tt(function(s,o){return typeof s=="function"?new Lt(this):this.map(function(h){return Kl(h,s,o)})}),Lt.prototype.reject=function(s){return this.filter($u(lt(s)))},Lt.prototype.slice=function(s,o){s=xt(s);var h=this;return h.__filtered__&&(s>0||o<0)?new Lt(h):(s<0?h=h.takeRight(-s):s&&(h=h.drop(s)),o!==t&&(o=xt(o),h=o<0?h.dropRight(-o):h.take(o-s)),h)},Lt.prototype.takeRightWhile=function(s){return this.reverse().takeWhile(s).reverse()},Lt.prototype.toArray=function(){return this.take(oe)},Br(Lt.prototype,function(s,o){var h=/^(?:filter|find|map|reject)|While$/.test(o),x=/^(?:head|last)$/.test(o),M=C[x?"take"+(o=="last"?"Right":""):o],P=x||/^find/.test(o);M&&(C.prototype[o]=function(){var B=this.__wrapped__,H=x?[1]:arguments,W=B instanceof Lt,fe=H[0],he=W||mt(B),_e=function(Rt){var Ot=M.apply(C,Ns([Rt],H));return x&&Le?Ot[0]:Ot};he&&h&&typeof fe=="function"&&fe.length!=1&&(W=he=!1);var Le=this.__chain__,je=!!this.__actions__.length,ct=P&&!Le,Et=W&&!je;if(!P&&he){B=Et?B:new Lt(this);var ut=s.apply(B,H);return ut.__actions__.push({func:Gu,args:[_e],thisArg:t}),new rr(ut,Le)}return ct&&Et?s.apply(this,H):(ut=this.thru(_e),ct?x?ut.value()[0]:ut.value():ut)})}),nr(["pop","push","shift","sort","splice","unshift"],function(s){var o=du[s],h=/^(?:push|sort|unshift)$/.test(s)?"tap":"thru",x=/^(?:pop|shift)$/.test(s);C.prototype[s]=function(){var M=arguments;if(x&&!this.__chain__){var P=this.value();return o.apply(mt(P)?P:[],M)}return this[h](function(B){return o.apply(mt(B)?B:[],M)})}}),Br(Lt.prototype,function(s,o){var h=C[o];if(h){var x=h.name+"";Wt.call(Eo,x)||(Eo[x]=[]),Eo[x].push({name:o,func:h})}}),Eo[Ou(t,v).name]=[{name:"wrapper",func:t}],Lt.prototype.clone=Qw,Lt.prototype.reverse=eA,Lt.prototype.value=tA,C.prototype.at=PR,C.prototype.chain=LR,C.prototype.commit=IR,C.prototype.next=DR,C.prototype.plant=UR,C.prototype.reverse=NR,C.prototype.toJSON=C.prototype.valueOf=C.prototype.value=FR,C.prototype.first=C.prototype.head,kl&&(C.prototype[kl]=OR),C},xo=Iw();ga?((ga.exports=xo)._=xo,od._=xo):Vn._=xo}).call(qr)})(Lh,Lh.exports);Lh.exports;function Ml(i){const e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return e>=i&&e>t}function Or(i,e,t){const n=document.createElement(i);for(const r in e)n.setAttribute(r,e[r]);return n.classList.add(...t),n}function Jh(i,e,t){const n=Or(e,{},t);return i.appendChild(n),n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Og="161",GG=0,pS=1,kG=2,Fb=1,VG=2,ys=3,pa=0,Ii=1,Ts=2,la=0,dl=1,mS=2,_S=3,gS=4,WG=5,Ba=100,$G=101,XG=102,vS=103,xS=104,qG=200,YG=201,KG=202,jG=203,__=204,g_=205,ZG=206,JG=207,QG=208,ek=209,tk=210,nk=211,ik=212,rk=213,sk=214,ak=0,ok=1,lk=2,Ih=3,ck=4,uk=5,fk=6,hk=7,Bb=0,dk=1,pk=2,ca=0,mk=1,_k=2,gk=3,vk=4,xk=5,yk=6,zb=300,Tl=301,bl=302,v_=303,x_=304,Qh=306,y_=1e3,Ir=1001,S_=1002,_i=1003,yS=1004,dc=1005,An=1006,tm=1007,ka=1008,ua=1009,Sk=1010,Ek=1011,Ug=1012,Hb=1013,ra=1014,bs=1015,Yc=1016,Gb=1017,kb=1018,Za=1020,Mk=1021,Dr=1023,Tk=1024,bk=1025,Ja=1026,wl=1027,wk=1028,Vb=1029,Ak=1030,Wb=1031,$b=1033,nm=33776,im=33777,rm=33778,sm=33779,SS=35840,ES=35841,MS=35842,TS=35843,Xb=36196,bS=37492,wS=37496,AS=37808,CS=37809,RS=37810,PS=37811,LS=37812,IS=37813,DS=37814,OS=37815,US=37816,NS=37817,FS=37818,BS=37819,zS=37820,HS=37821,am=36492,GS=36494,kS=36495,Ck=36283,VS=36284,WS=36285,$S=36286,qb=3e3,Qa=3001,Rk=3200,Pk=3201,Lk=0,Ik=1,mr="",$n="srgb",Is="srgb-linear",Ng="display-p3",ed="display-p3-linear",Dh="linear",sn="srgb",Oh="rec709",Uh="p3",Oo=7680,XS=519,Dk=512,Ok=513,Uk=514,Yb=515,Nk=516,Fk=517,Bk=518,zk=519,qS=35044,YS="300 es",E_=1035,As=2e3,Nh=2001;class Nl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,l=r.length;a<l;a++)r[a].call(this,e);e.target=null}}}const Qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],om=Math.PI/180,M_=180/Math.PI;function ru(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qn[i&255]+Qn[i>>8&255]+Qn[i>>16&255]+Qn[i>>24&255]+"-"+Qn[e&255]+Qn[e>>8&255]+"-"+Qn[e>>16&15|64]+Qn[e>>24&255]+"-"+Qn[t&63|128]+Qn[t>>8&255]+"-"+Qn[t>>16&255]+Qn[t>>24&255]+Qn[n&255]+Qn[n>>8&255]+Qn[n>>16&255]+Qn[n>>24&255]).toLowerCase()}function Ai(i,e,t){return Math.max(e,Math.min(t,i))}function Hk(i,e){return(i%e+e)%e}function lm(i,e,t){return(1-t)*i+t*e}function KS(i){return(i&i-1)===0&&i!==0}function T_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function pc(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Bt{constructor(e=0,t=0){Bt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,l=this.y-e.y;return this.x=a*n-l*r+e.x,this.y=a*r+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class At{constructor(e,t,n,r,a,l,c,u,f){At.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,f)}set(e,t,n,r,a,l,c,u,f){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=a,d[5]=u,d[6]=n,d[7]=l,d[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[3],u=n[6],f=n[1],d=n[4],p=n[7],_=n[2],m=n[5],S=n[8],y=r[0],g=r[3],v=r[6],b=r[1],E=r[4],w=r[7],U=r[2],I=r[5],R=r[8];return a[0]=l*y+c*b+u*U,a[3]=l*g+c*E+u*I,a[6]=l*v+c*w+u*R,a[1]=f*y+d*b+p*U,a[4]=f*g+d*E+p*I,a[7]=f*v+d*w+p*R,a[2]=_*y+m*b+S*U,a[5]=_*g+m*E+S*I,a[8]=_*v+m*w+S*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],d=e[8];return t*l*d-t*c*f-n*a*d+n*c*u+r*a*f-r*l*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],d=e[8],p=d*l-c*f,_=c*u-d*a,m=f*a-l*u,S=t*p+n*_+r*m;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/S;return e[0]=p*y,e[1]=(r*f-d*n)*y,e[2]=(c*n-r*l)*y,e[3]=_*y,e[4]=(d*t-r*u)*y,e[5]=(r*a-c*t)*y,e[6]=m*y,e[7]=(n*u-f*t)*y,e[8]=(l*t-n*a)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,l,c){const u=Math.cos(a),f=Math.sin(a);return this.set(n*u,n*f,-n*(u*l+f*c)+l+e,-r*f,r*u,-r*(-f*l+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(cm.makeScale(e,t)),this}rotate(e){return this.premultiply(cm.makeRotation(-e)),this}translate(e,t){return this.premultiply(cm.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const cm=new At;function Kb(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Kc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gk(){const i=Kc("canvas");return i.style.display="block",i}const jS={};function pl(i){i in jS||(jS[i]=!0,console.warn(i))}const ZS=new At().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),JS=new At().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Af={[Is]:{transfer:Dh,primaries:Oh,toReference:i=>i,fromReference:i=>i},[$n]:{transfer:sn,primaries:Oh,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ed]:{transfer:Dh,primaries:Uh,toReference:i=>i.applyMatrix3(JS),fromReference:i=>i.applyMatrix3(ZS)},[Ng]:{transfer:sn,primaries:Uh,toReference:i=>i.convertSRGBToLinear().applyMatrix3(JS),fromReference:i=>i.applyMatrix3(ZS).convertLinearToSRGB()}},kk=new Set([Is,ed]),qt={enabled:!0,_workingColorSpace:Is,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!kk.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Af[e].toReference,r=Af[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Af[i].primaries},getTransfer:function(i){return i===mr?Dh:Af[i].transfer}};function ml(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function um(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Uo;class jb{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Uo===void 0&&(Uo=Kc("canvas")),Uo.width=e.width,Uo.height=e.height;const n=Uo.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Uo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Kc("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let l=0;l<a.length;l++)a[l]=ml(a[l]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ml(t[n]/255)*255):t[n]=ml(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Vk=0;class Zb{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Vk++}),this.uuid=ru(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let l=0,c=r.length;l<c;l++)r[l].isDataTexture?a.push(fm(r[l].image)):a.push(fm(r[l]))}else a=fm(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function fm(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jb.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Wk=0;class ai extends Nl{constructor(e=ai.DEFAULT_IMAGE,t=ai.DEFAULT_MAPPING,n=Ir,r=Ir,a=An,l=ka,c=Dr,u=ua,f=ai.DEFAULT_ANISOTROPY,d=mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wk++}),this.uuid=ru(),this.name="",this.source=new Zb(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=l,this.anisotropy=f,this.format=c,this.internalFormat=null,this.type=u,this.offset=new Bt(0,0),this.repeat=new Bt(1,1),this.center=new Bt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new At,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(pl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===Qa?$n:mr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zb)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case y_:e.x=e.x-Math.floor(e.x);break;case Ir:e.x=e.x<0?0:1;break;case S_:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case y_:e.y=e.y-Math.floor(e.y);break;case Ir:e.y=e.y<0?0:1;break;case S_:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===$n?Qa:qb}set encoding(e){pl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Qa?$n:mr}}ai.DEFAULT_IMAGE=null;ai.DEFAULT_MAPPING=zb;ai.DEFAULT_ANISOTROPY=1;class Hn{constructor(e=0,t=0,n=0,r=1){Hn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*r+l[12]*a,this.y=l[1]*t+l[5]*n+l[9]*r+l[13]*a,this.z=l[2]*t+l[6]*n+l[10]*r+l[14]*a,this.w=l[3]*t+l[7]*n+l[11]*r+l[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const u=e.elements,f=u[0],d=u[4],p=u[8],_=u[1],m=u[5],S=u[9],y=u[2],g=u[6],v=u[10];if(Math.abs(d-_)<.01&&Math.abs(p-y)<.01&&Math.abs(S-g)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+y)<.1&&Math.abs(S+g)<.1&&Math.abs(f+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(f+1)/2,w=(m+1)/2,U=(v+1)/2,I=(d+_)/4,R=(p+y)/4,G=(S+g)/4;return E>w&&E>U?E<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(E),r=I/n,a=R/n):w>U?w<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(w),n=I/r,a=G/r):U<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(U),n=R/a,r=G/a),this.set(n,r,a,t),this}let b=Math.sqrt((g-S)*(g-S)+(p-y)*(p-y)+(_-d)*(_-d));return Math.abs(b)<.001&&(b=1),this.x=(g-S)/b,this.y=(p-y)/b,this.z=(_-d)/b,this.w=Math.acos((f+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $k extends Nl{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Hn(0,0,e,t),this.scissorTest=!1,this.viewport=new Hn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(pl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Qa?$n:mr),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new ai(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Zb(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lo extends $k{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jb extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xk extends ai{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class su{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,l,c){let u=n[r+0],f=n[r+1],d=n[r+2],p=n[r+3];const _=a[l+0],m=a[l+1],S=a[l+2],y=a[l+3];if(c===0){e[t+0]=u,e[t+1]=f,e[t+2]=d,e[t+3]=p;return}if(c===1){e[t+0]=_,e[t+1]=m,e[t+2]=S,e[t+3]=y;return}if(p!==y||u!==_||f!==m||d!==S){let g=1-c;const v=u*_+f*m+d*S+p*y,b=v>=0?1:-1,E=1-v*v;if(E>Number.EPSILON){const U=Math.sqrt(E),I=Math.atan2(U,v*b);g=Math.sin(g*I)/U,c=Math.sin(c*I)/U}const w=c*b;if(u=u*g+_*w,f=f*g+m*w,d=d*g+S*w,p=p*g+y*w,g===1-c){const U=1/Math.sqrt(u*u+f*f+d*d+p*p);u*=U,f*=U,d*=U,p*=U}}e[t]=u,e[t+1]=f,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,a,l){const c=n[r],u=n[r+1],f=n[r+2],d=n[r+3],p=a[l],_=a[l+1],m=a[l+2],S=a[l+3];return e[t]=c*S+d*p+u*m-f*_,e[t+1]=u*S+d*_+f*p-c*m,e[t+2]=f*S+d*m+c*_-u*p,e[t+3]=d*S-c*p-u*_-f*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,l=e._order,c=Math.cos,u=Math.sin,f=c(n/2),d=c(r/2),p=c(a/2),_=u(n/2),m=u(r/2),S=u(a/2);switch(l){case"XYZ":this._x=_*d*p+f*m*S,this._y=f*m*p-_*d*S,this._z=f*d*S+_*m*p,this._w=f*d*p-_*m*S;break;case"YXZ":this._x=_*d*p+f*m*S,this._y=f*m*p-_*d*S,this._z=f*d*S-_*m*p,this._w=f*d*p+_*m*S;break;case"ZXY":this._x=_*d*p-f*m*S,this._y=f*m*p+_*d*S,this._z=f*d*S+_*m*p,this._w=f*d*p-_*m*S;break;case"ZYX":this._x=_*d*p-f*m*S,this._y=f*m*p+_*d*S,this._z=f*d*S-_*m*p,this._w=f*d*p+_*m*S;break;case"YZX":this._x=_*d*p+f*m*S,this._y=f*m*p+_*d*S,this._z=f*d*S-_*m*p,this._w=f*d*p-_*m*S;break;case"XZY":this._x=_*d*p-f*m*S,this._y=f*m*p-_*d*S,this._z=f*d*S+_*m*p,this._w=f*d*p+_*m*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],l=t[1],c=t[5],u=t[9],f=t[2],d=t[6],p=t[10],_=n+c+p;if(_>0){const m=.5/Math.sqrt(_+1);this._w=.25/m,this._x=(d-u)*m,this._y=(a-f)*m,this._z=(l-r)*m}else if(n>c&&n>p){const m=2*Math.sqrt(1+n-c-p);this._w=(d-u)/m,this._x=.25*m,this._y=(r+l)/m,this._z=(a+f)/m}else if(c>p){const m=2*Math.sqrt(1+c-n-p);this._w=(a-f)/m,this._x=(r+l)/m,this._y=.25*m,this._z=(u+d)/m}else{const m=2*Math.sqrt(1+p-n-c);this._w=(l-r)/m,this._x=(a+f)/m,this._y=(u+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ai(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,l=e._w,c=t._x,u=t._y,f=t._z,d=t._w;return this._x=n*d+l*c+r*f-a*u,this._y=r*d+l*u+a*c-n*f,this._z=a*d+l*f+n*u-r*c,this._w=l*d-n*c-r*u-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,l=this._w;let c=l*e._w+n*e._x+r*e._y+a*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=n,this._y=r,this._z=a,this;const u=1-c*c;if(u<=Number.EPSILON){const m=1-t;return this._w=m*l+t*this._w,this._x=m*n+t*this._x,this._y=m*r+t*this._y,this._z=m*a+t*this._z,this.normalize(),this}const f=Math.sqrt(u),d=Math.atan2(f,c),p=Math.sin((1-t)*d)/f,_=Math.sin(t*d)/f;return this._w=l*p+this._w*_,this._x=n*p+this._x*_,this._y=r*p+this._y*_,this._z=a*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(a),n*Math.cos(a),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class se{constructor(e=0,t=0,n=0){se.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(QS.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(QS.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,l=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*l,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*l,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,l=e.y,c=e.z,u=e.w,f=2*(l*r-c*n),d=2*(c*t-a*r),p=2*(a*n-l*t);return this.x=t+u*f+l*p-c*d,this.y=n+u*d+c*f-a*p,this.z=r+u*p+a*d-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,l=t.x,c=t.y,u=t.z;return this.x=r*u-a*c,this.y=a*l-n*u,this.z=n*c-r*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hm.copy(this).projectOnVector(e),this.sub(hm)}reflect(e){return this.sub(hm.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ai(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hm=new se,QS=new su;class au{constructor(e=new se(1/0,1/0,1/0),t=new se(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(wr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(wr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=a.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,wr):wr.fromBufferAttribute(a,l),wr.applyMatrix4(e.matrixWorld),this.expandByPoint(wr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cf.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cf.copy(n.boundingBox)),Cf.applyMatrix4(e.matrixWorld),this.union(Cf)}const r=e.children;for(let a=0,l=r.length;a<l;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,wr),wr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(mc),Rf.subVectors(this.max,mc),No.subVectors(e.a,mc),Fo.subVectors(e.b,mc),Bo.subVectors(e.c,mc),$s.subVectors(Fo,No),Xs.subVectors(Bo,Fo),Ca.subVectors(No,Bo);let t=[0,-$s.z,$s.y,0,-Xs.z,Xs.y,0,-Ca.z,Ca.y,$s.z,0,-$s.x,Xs.z,0,-Xs.x,Ca.z,0,-Ca.x,-$s.y,$s.x,0,-Xs.y,Xs.x,0,-Ca.y,Ca.x,0];return!dm(t,No,Fo,Bo,Rf)||(t=[1,0,0,0,1,0,0,0,1],!dm(t,No,Fo,Bo,Rf))?!1:(Pf.crossVectors($s,Xs),t=[Pf.x,Pf.y,Pf.z],dm(t,No,Fo,Bo,Rf))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ms),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ms=[new se,new se,new se,new se,new se,new se,new se,new se],wr=new se,Cf=new au,No=new se,Fo=new se,Bo=new se,$s=new se,Xs=new se,Ca=new se,mc=new se,Rf=new se,Pf=new se,Ra=new se;function dm(i,e,t,n,r){for(let a=0,l=i.length-3;a<=l;a+=3){Ra.fromArray(i,a);const c=r.x*Math.abs(Ra.x)+r.y*Math.abs(Ra.y)+r.z*Math.abs(Ra.z),u=e.dot(Ra),f=t.dot(Ra),d=n.dot(Ra);if(Math.max(-Math.max(u,f,d),Math.min(u,f,d))>c)return!1}return!0}const qk=new au,_c=new se,pm=new se;class Fg{constructor(e=new se,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qk.setFromPoints(e).getCenter(n);let r=0;for(let a=0,l=e.length;a<l;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_c.subVectors(e,this.center);const t=_c.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_c,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pm.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_c.copy(e.center).add(pm)),this.expandByPoint(_c.copy(e.center).sub(pm))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _s=new se,mm=new se,Lf=new se,qs=new se,_m=new se,If=new se,gm=new se;class Qb{constructor(e=new se,t=new se(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_s)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=_s.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(_s.copy(this.origin).addScaledVector(this.direction,t),_s.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){mm.copy(e).add(t).multiplyScalar(.5),Lf.copy(t).sub(e).normalize(),qs.copy(this.origin).sub(mm);const a=e.distanceTo(t)*.5,l=-this.direction.dot(Lf),c=qs.dot(this.direction),u=-qs.dot(Lf),f=qs.lengthSq(),d=Math.abs(1-l*l);let p,_,m,S;if(d>0)if(p=l*u-c,_=l*c-u,S=a*d,p>=0)if(_>=-S)if(_<=S){const y=1/d;p*=y,_*=y,m=p*(p+l*_+2*c)+_*(l*p+_+2*u)+f}else _=a,p=Math.max(0,-(l*_+c)),m=-p*p+_*(_+2*u)+f;else _=-a,p=Math.max(0,-(l*_+c)),m=-p*p+_*(_+2*u)+f;else _<=-S?(p=Math.max(0,-(-l*a+c)),_=p>0?-a:Math.min(Math.max(-a,-u),a),m=-p*p+_*(_+2*u)+f):_<=S?(p=0,_=Math.min(Math.max(-a,-u),a),m=_*(_+2*u)+f):(p=Math.max(0,-(l*a+c)),_=p>0?a:Math.min(Math.max(-a,-u),a),m=-p*p+_*(_+2*u)+f);else _=l>0?-a:a,p=Math.max(0,-(l*_+c)),m=-p*p+_*(_+2*u)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(mm).addScaledVector(Lf,_),m}intersectSphere(e,t){_s.subVectors(e.center,this.origin);const n=_s.dot(this.direction),r=_s.dot(_s)-n*n,a=e.radius*e.radius;if(r>a)return null;const l=Math.sqrt(a-r),c=n-l,u=n+l;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,l,c,u;const f=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return f>=0?(n=(e.min.x-_.x)*f,r=(e.max.x-_.x)*f):(n=(e.max.x-_.x)*f,r=(e.min.x-_.x)*f),d>=0?(a=(e.min.y-_.y)*d,l=(e.max.y-_.y)*d):(a=(e.max.y-_.y)*d,l=(e.min.y-_.y)*d),n>l||a>r||((a>n||isNaN(n))&&(n=a),(l<r||isNaN(r))&&(r=l),p>=0?(c=(e.min.z-_.z)*p,u=(e.max.z-_.z)*p):(c=(e.max.z-_.z)*p,u=(e.min.z-_.z)*p),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,_s)!==null}intersectTriangle(e,t,n,r,a){_m.subVectors(t,e),If.subVectors(n,e),gm.crossVectors(_m,If);let l=this.direction.dot(gm),c;if(l>0){if(r)return null;c=1}else if(l<0)c=-1,l=-l;else return null;qs.subVectors(this.origin,e);const u=c*this.direction.dot(If.crossVectors(qs,If));if(u<0)return null;const f=c*this.direction.dot(_m.cross(qs));if(f<0||u+f>l)return null;const d=-c*qs.dot(gm);return d<0?null:this.at(d/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qn{constructor(e,t,n,r,a,l,c,u,f,d,p,_,m,S,y,g){qn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,l,c,u,f,d,p,_,m,S,y,g)}set(e,t,n,r,a,l,c,u,f,d,p,_,m,S,y,g){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=r,v[1]=a,v[5]=l,v[9]=c,v[13]=u,v[2]=f,v[6]=d,v[10]=p,v[14]=_,v[3]=m,v[7]=S,v[11]=y,v[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/zo.setFromMatrixColumn(e,0).length(),a=1/zo.setFromMatrixColumn(e,1).length(),l=1/zo.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,l=Math.cos(n),c=Math.sin(n),u=Math.cos(r),f=Math.sin(r),d=Math.cos(a),p=Math.sin(a);if(e.order==="XYZ"){const _=l*d,m=l*p,S=c*d,y=c*p;t[0]=u*d,t[4]=-u*p,t[8]=f,t[1]=m+S*f,t[5]=_-y*f,t[9]=-c*u,t[2]=y-_*f,t[6]=S+m*f,t[10]=l*u}else if(e.order==="YXZ"){const _=u*d,m=u*p,S=f*d,y=f*p;t[0]=_+y*c,t[4]=S*c-m,t[8]=l*f,t[1]=l*p,t[5]=l*d,t[9]=-c,t[2]=m*c-S,t[6]=y+_*c,t[10]=l*u}else if(e.order==="ZXY"){const _=u*d,m=u*p,S=f*d,y=f*p;t[0]=_-y*c,t[4]=-l*p,t[8]=S+m*c,t[1]=m+S*c,t[5]=l*d,t[9]=y-_*c,t[2]=-l*f,t[6]=c,t[10]=l*u}else if(e.order==="ZYX"){const _=l*d,m=l*p,S=c*d,y=c*p;t[0]=u*d,t[4]=S*f-m,t[8]=_*f+y,t[1]=u*p,t[5]=y*f+_,t[9]=m*f-S,t[2]=-f,t[6]=c*u,t[10]=l*u}else if(e.order==="YZX"){const _=l*u,m=l*f,S=c*u,y=c*f;t[0]=u*d,t[4]=y-_*p,t[8]=S*p+m,t[1]=p,t[5]=l*d,t[9]=-c*d,t[2]=-f*d,t[6]=m*p+S,t[10]=_-y*p}else if(e.order==="XZY"){const _=l*u,m=l*f,S=c*u,y=c*f;t[0]=u*d,t[4]=-p,t[8]=f*d,t[1]=_*p+y,t[5]=l*d,t[9]=m*p-S,t[2]=S*p-m,t[6]=c*d,t[10]=y*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yk,e,Kk)}lookAt(e,t,n){const r=this.elements;return Gi.subVectors(e,t),Gi.lengthSq()===0&&(Gi.z=1),Gi.normalize(),Ys.crossVectors(n,Gi),Ys.lengthSq()===0&&(Math.abs(n.z)===1?Gi.x+=1e-4:Gi.z+=1e-4,Gi.normalize(),Ys.crossVectors(n,Gi)),Ys.normalize(),Df.crossVectors(Gi,Ys),r[0]=Ys.x,r[4]=Df.x,r[8]=Gi.x,r[1]=Ys.y,r[5]=Df.y,r[9]=Gi.y,r[2]=Ys.z,r[6]=Df.z,r[10]=Gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,l=n[0],c=n[4],u=n[8],f=n[12],d=n[1],p=n[5],_=n[9],m=n[13],S=n[2],y=n[6],g=n[10],v=n[14],b=n[3],E=n[7],w=n[11],U=n[15],I=r[0],R=r[4],G=r[8],$=r[12],T=r[1],O=r[5],Y=r[9],ce=r[13],z=r[2],j=r[6],K=r[10],ne=r[14],ie=r[3],ae=r[7],N=r[11],oe=r[15];return a[0]=l*I+c*T+u*z+f*ie,a[4]=l*R+c*O+u*j+f*ae,a[8]=l*G+c*Y+u*K+f*N,a[12]=l*$+c*ce+u*ne+f*oe,a[1]=d*I+p*T+_*z+m*ie,a[5]=d*R+p*O+_*j+m*ae,a[9]=d*G+p*Y+_*K+m*N,a[13]=d*$+p*ce+_*ne+m*oe,a[2]=S*I+y*T+g*z+v*ie,a[6]=S*R+y*O+g*j+v*ae,a[10]=S*G+y*Y+g*K+v*N,a[14]=S*$+y*ce+g*ne+v*oe,a[3]=b*I+E*T+w*z+U*ie,a[7]=b*R+E*O+w*j+U*ae,a[11]=b*G+E*Y+w*K+U*N,a[15]=b*$+E*ce+w*ne+U*oe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],l=e[1],c=e[5],u=e[9],f=e[13],d=e[2],p=e[6],_=e[10],m=e[14],S=e[3],y=e[7],g=e[11],v=e[15];return S*(+a*u*p-r*f*p-a*c*_+n*f*_+r*c*m-n*u*m)+y*(+t*u*m-t*f*_+a*l*_-r*l*m+r*f*d-a*u*d)+g*(+t*f*p-t*c*m-a*l*p+n*l*m+a*c*d-n*f*d)+v*(-r*c*d-t*u*p+t*c*_+r*l*p-n*l*_+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],l=e[4],c=e[5],u=e[6],f=e[7],d=e[8],p=e[9],_=e[10],m=e[11],S=e[12],y=e[13],g=e[14],v=e[15],b=p*g*f-y*_*f+y*u*m-c*g*m-p*u*v+c*_*v,E=S*_*f-d*g*f-S*u*m+l*g*m+d*u*v-l*_*v,w=d*y*f-S*p*f+S*c*m-l*y*m-d*c*v+l*p*v,U=S*p*u-d*y*u-S*c*_+l*y*_+d*c*g-l*p*g,I=t*b+n*E+r*w+a*U;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/I;return e[0]=b*R,e[1]=(y*_*a-p*g*a-y*r*m+n*g*m+p*r*v-n*_*v)*R,e[2]=(c*g*a-y*u*a+y*r*f-n*g*f-c*r*v+n*u*v)*R,e[3]=(p*u*a-c*_*a-p*r*f+n*_*f+c*r*m-n*u*m)*R,e[4]=E*R,e[5]=(d*g*a-S*_*a+S*r*m-t*g*m-d*r*v+t*_*v)*R,e[6]=(S*u*a-l*g*a-S*r*f+t*g*f+l*r*v-t*u*v)*R,e[7]=(l*_*a-d*u*a+d*r*f-t*_*f-l*r*m+t*u*m)*R,e[8]=w*R,e[9]=(S*p*a-d*y*a-S*n*m+t*y*m+d*n*v-t*p*v)*R,e[10]=(l*y*a-S*c*a+S*n*f-t*y*f-l*n*v+t*c*v)*R,e[11]=(d*c*a-l*p*a-d*n*f+t*p*f+l*n*m-t*c*m)*R,e[12]=U*R,e[13]=(d*y*r-S*p*r+S*n*_-t*y*_-d*n*g+t*p*g)*R,e[14]=(S*c*r-l*y*r-S*n*u+t*y*u+l*n*g-t*c*g)*R,e[15]=(l*p*r-d*c*r+d*n*u-t*p*u-l*n*_+t*c*_)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,l=e.x,c=e.y,u=e.z,f=a*l,d=a*c;return this.set(f*l+n,f*c-r*u,f*u+r*c,0,f*c+r*u,d*c+n,d*u-r*l,0,f*u-r*c,d*u+r*l,a*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,l){return this.set(1,n,a,0,e,1,l,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,l=t._y,c=t._z,u=t._w,f=a+a,d=l+l,p=c+c,_=a*f,m=a*d,S=a*p,y=l*d,g=l*p,v=c*p,b=u*f,E=u*d,w=u*p,U=n.x,I=n.y,R=n.z;return r[0]=(1-(y+v))*U,r[1]=(m+w)*U,r[2]=(S-E)*U,r[3]=0,r[4]=(m-w)*I,r[5]=(1-(_+v))*I,r[6]=(g+b)*I,r[7]=0,r[8]=(S+E)*R,r[9]=(g-b)*R,r[10]=(1-(_+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=zo.set(r[0],r[1],r[2]).length();const l=zo.set(r[4],r[5],r[6]).length(),c=zo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ar.copy(this);const f=1/a,d=1/l,p=1/c;return Ar.elements[0]*=f,Ar.elements[1]*=f,Ar.elements[2]*=f,Ar.elements[4]*=d,Ar.elements[5]*=d,Ar.elements[6]*=d,Ar.elements[8]*=p,Ar.elements[9]*=p,Ar.elements[10]*=p,t.setFromRotationMatrix(Ar),n.x=a,n.y=l,n.z=c,this}makePerspective(e,t,n,r,a,l,c=As){const u=this.elements,f=2*a/(t-e),d=2*a/(n-r),p=(t+e)/(t-e),_=(n+r)/(n-r);let m,S;if(c===As)m=-(l+a)/(l-a),S=-2*l*a/(l-a);else if(c===Nh)m=-l/(l-a),S=-l*a/(l-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return u[0]=f,u[4]=0,u[8]=p,u[12]=0,u[1]=0,u[5]=d,u[9]=_,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,n,r,a,l,c=As){const u=this.elements,f=1/(t-e),d=1/(n-r),p=1/(l-a),_=(t+e)*f,m=(n+r)*d;let S,y;if(c===As)S=(l+a)*p,y=-2*p;else if(c===Nh)S=a*p,y=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return u[0]=2*f,u[4]=0,u[8]=0,u[12]=-_,u[1]=0,u[5]=2*d,u[9]=0,u[13]=-m,u[2]=0,u[6]=0,u[10]=y,u[14]=-S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zo=new se,Ar=new qn,Yk=new se(0,0,0),Kk=new se(1,1,1),Ys=new se,Df=new se,Gi=new se,eE=new qn,tE=new su;class td{constructor(e=0,t=0,n=0,r=td.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],l=r[4],c=r[8],u=r[1],f=r[5],d=r[9],p=r[2],_=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ai(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-l,a)):(this._x=Math.atan2(_,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Ai(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,m),this._z=Math.atan2(u,f)):(this._y=Math.atan2(-p,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ai(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(u,a));break;case"ZYX":this._y=Math.asin(-Ai(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,m),this._z=Math.atan2(u,a)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Ai(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,f),this._y=Math.atan2(-p,a)):(this._x=0,this._y=Math.atan2(c,m));break;case"XZY":this._z=Math.asin(-Ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,f),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return eE.makeRotationFromQuaternion(e),this.setFromRotationMatrix(eE,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tE.setFromEuler(this),this.setFromQuaternion(tE,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}td.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jk=0;const nE=new se,Ho=new su,gs=new qn,Of=new se,gc=new se,Zk=new se,Jk=new su,iE=new se(1,0,0),rE=new se(0,1,0),sE=new se(0,0,1),Qk={type:"added"},e4={type:"removed"};class ji extends Nl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jk++}),this.uuid=ru(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ji.DEFAULT_UP.clone();const e=new se,t=new td,n=new su,r=new se(1,1,1);function a(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new qn},normalMatrix:{value:new At}}),this.matrix=new qn,this.matrixWorld=new qn,this.matrixAutoUpdate=ji.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ji.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.multiply(Ho),this}rotateOnWorldAxis(e,t){return Ho.setFromAxisAngle(e,t),this.quaternion.premultiply(Ho),this}rotateX(e){return this.rotateOnAxis(iE,e)}rotateY(e){return this.rotateOnAxis(rE,e)}rotateZ(e){return this.rotateOnAxis(sE,e)}translateOnAxis(e,t){return nE.copy(e).applyQuaternion(this.quaternion),this.position.add(nE.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(iE,e)}translateY(e){return this.translateOnAxis(rE,e)}translateZ(e){return this.translateOnAxis(sE,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Of.copy(e):Of.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),gc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gs.lookAt(gc,Of,this.up):gs.lookAt(Of,gc,this.up),this.quaternion.setFromRotationMatrix(gs),r&&(gs.extractRotation(r.matrixWorld),Ho.setFromRotationMatrix(gs),this.quaternion.premultiply(Ho.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qk)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(e4)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gs.multiply(e.parent.matrixWorld)),e.applyMatrix4(gs),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,e,Zk),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gc,Jk,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const a=t[n];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let a=0,l=r.length;a<l;a++){const c=r[a];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let f=0,d=u.length;f<d;f++){const p=u[f];a(e.shapes,p)}else a(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,f=this.material.length;u<f;u++)c.push(a(e.materials,this.material[u]));r.material=c}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(a(e.animations,u))}}if(t){const c=l(e.geometries),u=l(e.materials),f=l(e.textures),d=l(e.images),p=l(e.shapes),_=l(e.skeletons),m=l(e.animations),S=l(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),f.length>0&&(n.textures=f),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),m.length>0&&(n.animations=m),S.length>0&&(n.nodes=S)}return n.object=r,n;function l(c){const u=[];for(const f in c){const d=c[f];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}ji.DEFAULT_UP=new se(0,1,0);ji.DEFAULT_MATRIX_AUTO_UPDATE=!0;ji.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cr=new se,vs=new se,vm=new se,xs=new se,Go=new se,ko=new se,aE=new se,xm=new se,ym=new se,Sm=new se;class Kr{constructor(e=new se,t=new se,n=new se){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Cr.subVectors(e,t),r.cross(Cr);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){Cr.subVectors(r,t),vs.subVectors(n,t),vm.subVectors(e,t);const l=Cr.dot(Cr),c=Cr.dot(vs),u=Cr.dot(vm),f=vs.dot(vs),d=vs.dot(vm),p=l*f-c*c;if(p===0)return a.set(0,0,0),null;const _=1/p,m=(f*u-c*d)*_,S=(l*d-c*u)*_;return a.set(1-m-S,S,m)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,xs)===null?!1:xs.x>=0&&xs.y>=0&&xs.x+xs.y<=1}static getInterpolation(e,t,n,r,a,l,c,u){return this.getBarycoord(e,t,n,r,xs)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(a,xs.x),u.addScaledVector(l,xs.y),u.addScaledVector(c,xs.z),u)}static isFrontFacing(e,t,n,r){return Cr.subVectors(n,t),vs.subVectors(e,t),Cr.cross(vs).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cr.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),Cr.cross(vs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Kr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return Kr.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return Kr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let l,c;Go.subVectors(r,n),ko.subVectors(a,n),xm.subVectors(e,n);const u=Go.dot(xm),f=ko.dot(xm);if(u<=0&&f<=0)return t.copy(n);ym.subVectors(e,r);const d=Go.dot(ym),p=ko.dot(ym);if(d>=0&&p<=d)return t.copy(r);const _=u*p-d*f;if(_<=0&&u>=0&&d<=0)return l=u/(u-d),t.copy(n).addScaledVector(Go,l);Sm.subVectors(e,a);const m=Go.dot(Sm),S=ko.dot(Sm);if(S>=0&&m<=S)return t.copy(a);const y=m*f-u*S;if(y<=0&&f>=0&&S<=0)return c=f/(f-S),t.copy(n).addScaledVector(ko,c);const g=d*S-m*p;if(g<=0&&p-d>=0&&m-S>=0)return aE.subVectors(a,r),c=(p-d)/(p-d+(m-S)),t.copy(r).addScaledVector(aE,c);const v=1/(g+y+_);return l=y*v,c=_*v,t.copy(n).addScaledVector(Go,l).addScaledVector(ko,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const e1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ks={h:0,s:0,l:0},Uf={h:0,s:0,l:0};function Em(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=qt.workingColorSpace){if(e=Hk(e,1),t=Ai(t,0,1),n=Ai(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,l=2*n-a;this.r=Em(l,a,e+1/3),this.g=Em(l,a,e),this.b=Em(l,a,e-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(e,t=$n){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const l=r[1],c=r[2];switch(l){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],l=a.length;if(l===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$n){const n=e1[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ml(e.r),this.g=ml(e.g),this.b=ml(e.b),this}copyLinearToSRGB(e){return this.r=um(e.r),this.g=um(e.g),this.b=um(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$n){return qt.fromWorkingColorSpace(ei.copy(this),e),Math.round(Ai(ei.r*255,0,255))*65536+Math.round(Ai(ei.g*255,0,255))*256+Math.round(Ai(ei.b*255,0,255))}getHexString(e=$n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(ei.copy(this),t);const n=ei.r,r=ei.g,a=ei.b,l=Math.max(n,r,a),c=Math.min(n,r,a);let u,f;const d=(c+l)/2;if(c===l)u=0,f=0;else{const p=l-c;switch(f=d<=.5?p/(l+c):p/(2-l-c),l){case n:u=(r-a)/p+(r<a?6:0);break;case r:u=(a-n)/p+2;break;case a:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=f,e.l=d,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(ei.copy(this),t),e.r=ei.r,e.g=ei.g,e.b=ei.b,e}getStyle(e=$n){qt.fromWorkingColorSpace(ei.copy(this),e);const t=ei.r,n=ei.g,r=ei.b;return e!==$n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Ks),this.setHSL(Ks.h+e,Ks.s+t,Ks.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ks),e.getHSL(Uf);const n=lm(Ks.h,Uf.h,t),r=lm(Ks.s,Uf.s,t),a=lm(Ks.l,Uf.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ei=new Yt;Yt.NAMES=e1;let t4=0;class nd extends Nl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:t4++}),this.uuid=ru(),this.name="",this.type="Material",this.blending=dl,this.side=pa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=__,this.blendDst=g_,this.blendEquation=Ba,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ih,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==dl&&(n.blending=this.blending),this.side!==pa&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==__&&(n.blendSrc=this.blendSrc),this.blendDst!==g_&&(n.blendDst=this.blendDst),this.blendEquation!==Ba&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ih&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==XS&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Oo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Oo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Oo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}if(t){const a=r(e.textures),l=r(e.images);a.length>0&&(n.textures=a),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class t1 extends nd{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bb,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tn=new se,Nf=new Bt;class ns{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qS,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=bs,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return pl("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Nf.fromBufferAttribute(this,t),Nf.applyMatrix3(e),this.setXY(t,Nf.x,Nf.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=pc(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bi(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pc(t,this.array)),t}setX(e,t){return this.normalized&&(t=bi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pc(t,this.array)),t}setY(e,t){return this.normalized&&(t=bi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pc(t,this.array)),t}setW(e,t){return this.normalized&&(t=bi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bi(t,this.array),n=bi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=bi(t,this.array),n=bi(n,this.array),r=bi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=bi(t,this.array),n=bi(n,this.array),r=bi(r,this.array),a=bi(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qS&&(e.usage=this.usage),e}}class n1 extends ns{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class i1 extends ns{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class eo extends ns{constructor(e,t,n){super(new Float32Array(e),t,n)}}let n4=0;const cr=new qn,Mm=new ji,Vo=new se,ki=new au,vc=new au,Nn=new se;class uo extends Nl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:n4++}),this.uuid=ru(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kb(e)?i1:n1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new At().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return cr.makeRotationFromQuaternion(e),this.applyMatrix4(cr),this}rotateX(e){return cr.makeRotationX(e),this.applyMatrix4(cr),this}rotateY(e){return cr.makeRotationY(e),this.applyMatrix4(cr),this}rotateZ(e){return cr.makeRotationZ(e),this.applyMatrix4(cr),this}translate(e,t,n){return cr.makeTranslation(e,t,n),this.applyMatrix4(cr),this}scale(e,t,n){return cr.makeScale(e,t,n),this.applyMatrix4(cr),this}lookAt(e){return Mm.lookAt(e),Mm.updateMatrix(),this.applyMatrix4(Mm.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vo).negate(),this.translate(Vo.x,Vo.y,Vo.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new eo(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new au);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new se(-1/0,-1/0,-1/0),new se(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,ki.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,ki.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(ki.min),this.boundingBox.expandByPoint(ki.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fg);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new se,1/0);return}if(e){const n=this.boundingSphere.center;if(ki.setFromBufferAttribute(e),t)for(let a=0,l=t.length;a<l;a++){const c=t[a];vc.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(ki.min,vc.min),ki.expandByPoint(Nn),Nn.addVectors(ki.max,vc.max),ki.expandByPoint(Nn)):(ki.expandByPoint(vc.min),ki.expandByPoint(vc.max))}ki.getCenter(n);let r=0;for(let a=0,l=e.count;a<l;a++)Nn.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Nn));if(t)for(let a=0,l=t.length;a<l;a++){const c=t[a],u=this.morphTargetsRelative;for(let f=0,d=c.count;f<d;f++)Nn.fromBufferAttribute(c,f),u&&(Vo.fromBufferAttribute(e,f),Nn.add(Vo)),r=Math.max(r,n.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,a=t.normal.array,l=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ns(new Float32Array(4*c),4));const u=this.getAttribute("tangent").array,f=[],d=[];for(let T=0;T<c;T++)f[T]=new se,d[T]=new se;const p=new se,_=new se,m=new se,S=new Bt,y=new Bt,g=new Bt,v=new se,b=new se;function E(T,O,Y){p.fromArray(r,T*3),_.fromArray(r,O*3),m.fromArray(r,Y*3),S.fromArray(l,T*2),y.fromArray(l,O*2),g.fromArray(l,Y*2),_.sub(p),m.sub(p),y.sub(S),g.sub(S);const ce=1/(y.x*g.y-g.x*y.y);isFinite(ce)&&(v.copy(_).multiplyScalar(g.y).addScaledVector(m,-y.y).multiplyScalar(ce),b.copy(m).multiplyScalar(y.x).addScaledVector(_,-g.x).multiplyScalar(ce),f[T].add(v),f[O].add(v),f[Y].add(v),d[T].add(b),d[O].add(b),d[Y].add(b))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let T=0,O=w.length;T<O;++T){const Y=w[T],ce=Y.start,z=Y.count;for(let j=ce,K=ce+z;j<K;j+=3)E(n[j+0],n[j+1],n[j+2])}const U=new se,I=new se,R=new se,G=new se;function $(T){R.fromArray(a,T*3),G.copy(R);const O=f[T];U.copy(O),U.sub(R.multiplyScalar(R.dot(O))).normalize(),I.crossVectors(G,O);const ce=I.dot(d[T])<0?-1:1;u[T*4]=U.x,u[T*4+1]=U.y,u[T*4+2]=U.z,u[T*4+3]=ce}for(let T=0,O=w.length;T<O;++T){const Y=w[T],ce=Y.start,z=Y.count;for(let j=ce,K=ce+z;j<K;j+=3)$(n[j+0]),$(n[j+1]),$(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ns(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,m=n.count;_<m;_++)n.setXYZ(_,0,0,0);const r=new se,a=new se,l=new se,c=new se,u=new se,f=new se,d=new se,p=new se;if(e)for(let _=0,m=e.count;_<m;_+=3){const S=e.getX(_+0),y=e.getX(_+1),g=e.getX(_+2);r.fromBufferAttribute(t,S),a.fromBufferAttribute(t,y),l.fromBufferAttribute(t,g),d.subVectors(l,a),p.subVectors(r,a),d.cross(p),c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,y),f.fromBufferAttribute(n,g),c.add(d),u.add(d),f.add(d),n.setXYZ(S,c.x,c.y,c.z),n.setXYZ(y,u.x,u.y,u.z),n.setXYZ(g,f.x,f.y,f.z)}else for(let _=0,m=t.count;_<m;_+=3)r.fromBufferAttribute(t,_+0),a.fromBufferAttribute(t,_+1),l.fromBufferAttribute(t,_+2),d.subVectors(l,a),p.subVectors(r,a),d.cross(p),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nn.fromBufferAttribute(e,t),Nn.normalize(),e.setXYZ(t,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function e(c,u){const f=c.array,d=c.itemSize,p=c.normalized,_=new f.constructor(u.length*d);let m=0,S=0;for(let y=0,g=u.length;y<g;y++){c.isInterleavedBufferAttribute?m=u[y]*c.data.stride+c.offset:m=u[y]*d;for(let v=0;v<d;v++)_[S++]=f[m++]}return new ns(_,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new uo,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],f=e(u,n);t.setAttribute(c,f)}const a=this.morphAttributes;for(const c in a){const u=[],f=a[c];for(let d=0,p=f.length;d<p;d++){const _=f[d],m=e(_,n);u.push(m)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,u=l.length;c<u;c++){const f=l[c];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const f in u)u[f]!==void 0&&(e[f]=u[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const f=n[u];e.data.attributes[u]=f.toJSON(e.data)}const r={};let a=!1;for(const u in this.morphAttributes){const f=this.morphAttributes[u],d=[];for(let p=0,_=f.length;p<_;p++){const m=f[p];d.push(m.toJSON(e.data))}d.length>0&&(r[u]=d,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const f in r){const d=r[f];this.setAttribute(f,d.clone(t))}const a=e.morphAttributes;for(const f in a){const d=[],p=a[f];for(let _=0,m=p.length;_<m;_++)d.push(p[_].clone(t));this.morphAttributes[f]=d}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,d=l.length;f<d;f++){const p=l[f];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const oE=new qn,Pa=new Qb,Ff=new Fg,lE=new se,Wo=new se,$o=new se,Xo=new se,Tm=new se,Bf=new se,zf=new Bt,Hf=new Bt,Gf=new Bt,cE=new se,uE=new se,fE=new se,kf=new se,Vf=new se;class Jr extends ji{constructor(e=new uo,t=new t1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,l=r.length;a<l;a++){const c=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(a&&c){Bf.set(0,0,0);for(let u=0,f=a.length;u<f;u++){const d=c[u],p=a[u];d!==0&&(Tm.fromBufferAttribute(p,e),l?Bf.addScaledVector(Tm,d):Bf.addScaledVector(Tm.sub(t),d))}t.add(Bf)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ff.copy(n.boundingSphere),Ff.applyMatrix4(a),Pa.copy(e.ray).recast(e.near),!(Ff.containsPoint(Pa.origin)===!1&&(Pa.intersectSphere(Ff,lE)===null||Pa.origin.distanceToSquared(lE)>(e.far-e.near)**2))&&(oE.copy(a).invert(),Pa.copy(e.ray).applyMatrix4(oE),!(n.boundingBox!==null&&Pa.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pa)))}_computeIntersections(e,t,n){let r;const a=this.geometry,l=this.material,c=a.index,u=a.attributes.position,f=a.attributes.uv,d=a.attributes.uv1,p=a.attributes.normal,_=a.groups,m=a.drawRange;if(c!==null)if(Array.isArray(l))for(let S=0,y=_.length;S<y;S++){const g=_[S],v=l[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let w=b,U=E;w<U;w+=3){const I=c.getX(w),R=c.getX(w+1),G=c.getX(w+2);r=Wf(this,v,e,n,f,d,p,I,R,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let g=S,v=y;g<v;g+=3){const b=c.getX(g),E=c.getX(g+1),w=c.getX(g+2);r=Wf(this,l,e,n,f,d,p,b,E,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(u!==void 0)if(Array.isArray(l))for(let S=0,y=_.length;S<y;S++){const g=_[S],v=l[g.materialIndex],b=Math.max(g.start,m.start),E=Math.min(u.count,Math.min(g.start+g.count,m.start+m.count));for(let w=b,U=E;w<U;w+=3){const I=w,R=w+1,G=w+2;r=Wf(this,v,e,n,f,d,p,I,R,G),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const S=Math.max(0,m.start),y=Math.min(u.count,m.start+m.count);for(let g=S,v=y;g<v;g+=3){const b=g,E=g+1,w=g+2;r=Wf(this,l,e,n,f,d,p,b,E,w),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function i4(i,e,t,n,r,a,l,c){let u;if(e.side===Ii?u=n.intersectTriangle(l,a,r,!0,c):u=n.intersectTriangle(r,a,l,e.side===pa,c),u===null)return null;Vf.copy(c),Vf.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(Vf);return f<t.near||f>t.far?null:{distance:f,point:Vf.clone(),object:i}}function Wf(i,e,t,n,r,a,l,c,u,f){i.getVertexPosition(c,Wo),i.getVertexPosition(u,$o),i.getVertexPosition(f,Xo);const d=i4(i,e,t,n,Wo,$o,Xo,kf);if(d){r&&(zf.fromBufferAttribute(r,c),Hf.fromBufferAttribute(r,u),Gf.fromBufferAttribute(r,f),d.uv=Kr.getInterpolation(kf,Wo,$o,Xo,zf,Hf,Gf,new Bt)),a&&(zf.fromBufferAttribute(a,c),Hf.fromBufferAttribute(a,u),Gf.fromBufferAttribute(a,f),d.uv1=Kr.getInterpolation(kf,Wo,$o,Xo,zf,Hf,Gf,new Bt),d.uv2=d.uv1),l&&(cE.fromBufferAttribute(l,c),uE.fromBufferAttribute(l,u),fE.fromBufferAttribute(l,f),d.normal=Kr.getInterpolation(kf,Wo,$o,Xo,cE,uE,fE,new se),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:u,c:f,normal:new se,materialIndex:0};Kr.getNormal(Wo,$o,Xo,p.normal),d.face=p}return d}class ou extends uo{constructor(e=1,t=1,n=1,r=1,a=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:l};const c=this;r=Math.floor(r),a=Math.floor(a),l=Math.floor(l);const u=[],f=[],d=[],p=[];let _=0,m=0;S("z","y","x",-1,-1,n,t,e,l,a,0),S("z","y","x",1,-1,n,t,-e,l,a,1),S("x","z","y",1,1,e,n,t,r,l,2),S("x","z","y",1,-1,e,n,-t,r,l,3),S("x","y","z",1,-1,e,t,n,r,a,4),S("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(u),this.setAttribute("position",new eo(f,3)),this.setAttribute("normal",new eo(d,3)),this.setAttribute("uv",new eo(p,2));function S(y,g,v,b,E,w,U,I,R,G,$){const T=w/R,O=U/G,Y=w/2,ce=U/2,z=I/2,j=R+1,K=G+1;let ne=0,ie=0;const ae=new se;for(let N=0;N<K;N++){const oe=N*O-ce;for(let Re=0;Re<j;Re++){const Je=Re*T-Y;ae[y]=Je*b,ae[g]=oe*E,ae[v]=z,f.push(ae.x,ae.y,ae.z),ae[y]=0,ae[g]=0,ae[v]=I>0?1:-1,d.push(ae.x,ae.y,ae.z),p.push(Re/R),p.push(1-N/G),ne+=1}}for(let N=0;N<G;N++)for(let oe=0;oe<R;oe++){const Re=_+oe+j*N,Je=_+oe+j*(N+1),te=_+(oe+1)+j*(N+1),ue=_+(oe+1)+j*N;u.push(Re,Je,ue),u.push(Je,te,ue),ie+=6}c.addGroup(m,ie,$),m+=ie,_+=ne}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Al(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function hi(i){const e={};for(let t=0;t<i.length;t++){const n=Al(i[t]);for(const r in n)e[r]=n[r]}return e}function r4(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function r1(i){return i.getRenderTarget()===null?i.outputColorSpace:qt.workingColorSpace}const s4={clone:Al,merge:hi};var a4=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o4=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ds extends nd{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=a4,this.fragmentShader=o4,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Al(e.uniforms),this.uniformsGroups=r4(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const l=this.uniforms[r].value;l&&l.isTexture?t.uniforms[r]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[r]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[r]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[r]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[r]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[r]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[r]={type:"m4",value:l.toArray()}:t.uniforms[r]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class s1 extends ji{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qn,this.projectionMatrix=new qn,this.projectionMatrixInverse=new qn,this.coordinateSystem=As}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const js=new se,hE=new Bt,dE=new Bt;class pr extends s1{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=M_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(om*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return M_*2*Math.atan(Math.tan(om*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){js.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(js.x,js.y).multiplyScalar(-e/js.z),js.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(js.x,js.y).multiplyScalar(-e/js.z)}getViewSize(e,t){return this.getViewBounds(e,hE,dE),t.subVectors(dE,hE)}setViewOffset(e,t,n,r,a,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(om*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const l=this.view;if(this.view!==null&&this.view.enabled){const u=l.fullWidth,f=l.fullHeight;a+=l.offsetX*r/u,t-=l.offsetY*n/f,r*=l.width/u,n*=l.height/f}const c=this.filmOffset;c!==0&&(a+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qo=-90,Yo=1;class l4 extends ji{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pr(qo,Yo,e,t);r.layers=this.layers,this.add(r);const a=new pr(qo,Yo,e,t);a.layers=this.layers,this.add(a);const l=new pr(qo,Yo,e,t);l.layers=this.layers,this.add(l);const c=new pr(qo,Yo,e,t);c.layers=this.layers,this.add(c);const u=new pr(qo,Yo,e,t);u.layers=this.layers,this.add(u);const f=new pr(qo,Yo,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,l,c,u]=t;for(const f of t)this.remove(f);if(e===As)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(e===Nh)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,l,c,u,f,d]=this.children,p=e.getRenderTarget(),_=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),S=e.xr.enabled;e.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,l),e.setRenderTarget(n,2,r),e.render(t,c),e.setRenderTarget(n,3,r),e.render(t,u),e.setRenderTarget(n,4,r),e.render(t,f),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,r),e.render(t,d),e.setRenderTarget(p,_,m),e.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class a1 extends ai{constructor(e,t,n,r,a,l,c,u,f,d){e=e!==void 0?e:[],t=t!==void 0?t:Tl,super(e,t,n,r,a,l,c,u,f,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class c4 extends lo{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(pl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Qa?$n:mr),this.texture=new a1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:An}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ou(5,5,5),a=new Ds({name:"CubemapFromEquirect",uniforms:Al(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ii,blending:la});a.uniforms.tEquirect.value=t;const l=new Jr(r,a),c=t.minFilter;return t.minFilter===ka&&(t.minFilter=An),new l4(1,10,this).update(e,l),t.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,r){const a=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,r);e.setRenderTarget(a)}}const bm=new se,u4=new se,f4=new At;class Ua{constructor(e=new se(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bm.subVectors(n,t).cross(u4.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bm),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||f4.getNormalMatrix(e),r=this.coplanarPoint(bm).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const La=new Fg,$f=new se;class o1{constructor(e=new Ua,t=new Ua,n=new Ua,r=new Ua,a=new Ua,l=new Ua){this.planes=[e,t,n,r,a,l]}set(e,t,n,r,a,l){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(a),c[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=As){const n=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],u=r[3],f=r[4],d=r[5],p=r[6],_=r[7],m=r[8],S=r[9],y=r[10],g=r[11],v=r[12],b=r[13],E=r[14],w=r[15];if(n[0].setComponents(u-a,_-f,g-m,w-v).normalize(),n[1].setComponents(u+a,_+f,g+m,w+v).normalize(),n[2].setComponents(u+l,_+d,g+S,w+b).normalize(),n[3].setComponents(u-l,_-d,g-S,w-b).normalize(),n[4].setComponents(u-c,_-p,g-y,w-E).normalize(),t===As)n[5].setComponents(u+c,_+p,g+y,w+E).normalize();else if(t===Nh)n[5].setComponents(c,p,y,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),La.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),La.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(La)}intersectsSprite(e){return La.center.set(0,0,0),La.radius=.7071067811865476,La.applyMatrix4(e.matrixWorld),this.intersectsSphere(La)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if($f.x=r.normal.x>0?e.max.x:e.min.x,$f.y=r.normal.y>0?e.max.y:e.min.y,$f.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($f)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function l1(){let i=null,e=!1,t=null,n=null;function r(a,l){t(a,l),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function h4(i,e){const t=e.isWebGL2,n=new WeakMap;function r(f,d){const p=f.array,_=f.usage,m=p.byteLength,S=i.createBuffer();i.bindBuffer(d,S),i.bufferData(d,p,_),f.onUploadCallback();let y;if(p instanceof Float32Array)y=i.FLOAT;else if(p instanceof Uint16Array)if(f.isFloat16BufferAttribute)if(t)y=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=i.SHORT;else if(p instanceof Uint32Array)y=i.UNSIGNED_INT;else if(p instanceof Int32Array)y=i.INT;else if(p instanceof Int8Array)y=i.BYTE;else if(p instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:m}}function a(f,d,p){const _=d.array,m=d._updateRange,S=d.updateRanges;if(i.bindBuffer(p,f),m.count===-1&&S.length===0&&i.bufferSubData(p,0,_),S.length!==0){for(let y=0,g=S.length;y<g;y++){const v=S[y];t?i.bufferSubData(p,v.start*_.BYTES_PER_ELEMENT,_,v.start,v.count):i.bufferSubData(p,v.start*_.BYTES_PER_ELEMENT,_.subarray(v.start,v.start+v.count))}d.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(p,m.offset*_.BYTES_PER_ELEMENT,_,m.offset,m.count):i.bufferSubData(p,m.offset*_.BYTES_PER_ELEMENT,_.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),n.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const d=n.get(f);d&&(i.deleteBuffer(d.buffer),n.delete(f))}function u(f,d){if(f.isGLBufferAttribute){const _=n.get(f);(!_||_.version<f.version)&&n.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}f.isInterleavedBufferAttribute&&(f=f.data);const p=n.get(f);if(p===void 0)n.set(f,r(f,d));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,f,d),p.version=f.version}}return{get:l,remove:c,update:u}}class lu extends uo{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,l=t/2,c=Math.floor(n),u=Math.floor(r),f=c+1,d=u+1,p=e/c,_=t/u,m=[],S=[],y=[],g=[];for(let v=0;v<d;v++){const b=v*_-l;for(let E=0;E<f;E++){const w=E*p-a;S.push(w,-b,0),y.push(0,0,1),g.push(E/c),g.push(1-v/u)}}for(let v=0;v<u;v++)for(let b=0;b<c;b++){const E=b+f*v,w=b+f*(v+1),U=b+1+f*(v+1),I=b+1+f*v;m.push(E,w,I),m.push(w,U,I)}this.setIndex(m),this.setAttribute("position",new eo(S,3)),this.setAttribute("normal",new eo(y,3)),this.setAttribute("uv",new eo(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lu(e.width,e.height,e.widthSegments,e.heightSegments)}}var d4=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,p4=`#ifdef USE_ALPHAHASH
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
#endif`,m4=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_4=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,g4=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,v4=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x4=`#ifdef USE_AOMAP
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
#endif`,y4=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,S4=`#ifdef USE_BATCHING
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
#endif`,E4=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,M4=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,T4=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,b4=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,w4=`#ifdef USE_IRIDESCENCE
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
#endif`,A4=`#ifdef USE_BUMPMAP
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
#endif`,C4=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,R4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P4=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L4=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,I4=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O4=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,U4=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,N4=`#define PI 3.141592653589793
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
} // validated`,F4=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,B4=`vec3 transformedNormal = objectNormal;
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
#endif`,z4=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,H4=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,G4=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k4=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V4="gl_FragColor = linearToOutputTexel( gl_FragColor );",W4=`
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
}`,$4=`#ifdef USE_ENVMAP
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
#endif`,X4=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,q4=`#ifdef USE_ENVMAP
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
#endif`,Y4=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,K4=`#ifdef USE_ENVMAP
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
#endif`,j4=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Z4=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,J4=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Q4=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eV=`#ifdef USE_GRADIENTMAP
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
}`,tV=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,nV=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iV=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sV=`uniform bool receiveShadow;
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
#endif`,aV=`#ifdef USE_ENVMAP
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
#endif`,oV=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cV=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uV=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fV=`PhysicalMaterial material;
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
#endif`,hV=`struct PhysicalMaterial {
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
}`,dV=`
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
#endif`,pV=`#if defined( RE_IndirectDiffuse )
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
#endif`,mV=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_V=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gV=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,xV=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,yV=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SV=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,EV=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MV=`#if defined( USE_POINTS_UV )
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
#endif`,TV=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bV=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wV=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,AV=`#ifdef USE_MORPHNORMALS
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
#endif`,CV=`#ifdef USE_MORPHTARGETS
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
#endif`,RV=`#ifdef USE_MORPHTARGETS
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
#endif`,PV=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LV=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,IV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,DV=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OV=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,UV=`#ifdef USE_NORMALMAP
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
#endif`,NV=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,FV=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BV=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zV=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HV=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GV=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kV=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,VV=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WV=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$V=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,XV=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,qV=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,YV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KV=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jV=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ZV=`float getShadowMask() {
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
}`,JV=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QV=`#ifdef USE_SKINNING
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
#endif`,eW=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tW=`#ifdef USE_SKINNING
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
#endif`,nW=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iW=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rW=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sW=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aW=`#ifdef USE_TRANSMISSION
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
#endif`,oW=`#ifdef USE_TRANSMISSION
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
#endif`,lW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uW=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fW=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hW=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dW=`uniform sampler2D t2D;
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
}`,pW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mW=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_W=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gW=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vW=`#include <common>
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
}`,xW=`#if DEPTH_PACKING == 3200
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
}`,yW=`#define DISTANCE
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
}`,SW=`#define DISTANCE
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
}`,EW=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,MW=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TW=`uniform float scale;
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
}`,bW=`uniform vec3 diffuse;
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
}`,wW=`#include <common>
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
}`,AW=`uniform vec3 diffuse;
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
}`,CW=`#define LAMBERT
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
}`,RW=`#define LAMBERT
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
}`,PW=`#define MATCAP
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
}`,LW=`#define MATCAP
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
}`,IW=`#define NORMAL
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
}`,DW=`#define NORMAL
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
}`,OW=`#define PHONG
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
}`,UW=`#define PHONG
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
}`,NW=`#define STANDARD
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
}`,FW=`#define STANDARD
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
}`,BW=`#define TOON
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
}`,zW=`#define TOON
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
}`,HW=`uniform float size;
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
}`,GW=`uniform vec3 diffuse;
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
}`,kW=`#include <common>
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
}`,VW=`uniform vec3 color;
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
}`,WW=`uniform float rotation;
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
}`,$W=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:d4,alphahash_pars_fragment:p4,alphamap_fragment:m4,alphamap_pars_fragment:_4,alphatest_fragment:g4,alphatest_pars_fragment:v4,aomap_fragment:x4,aomap_pars_fragment:y4,batching_pars_vertex:S4,batching_vertex:E4,begin_vertex:M4,beginnormal_vertex:T4,bsdfs:b4,iridescence_fragment:w4,bumpmap_pars_fragment:A4,clipping_planes_fragment:C4,clipping_planes_pars_fragment:R4,clipping_planes_pars_vertex:P4,clipping_planes_vertex:L4,color_fragment:I4,color_pars_fragment:D4,color_pars_vertex:O4,color_vertex:U4,common:N4,cube_uv_reflection_fragment:F4,defaultnormal_vertex:B4,displacementmap_pars_vertex:z4,displacementmap_vertex:H4,emissivemap_fragment:G4,emissivemap_pars_fragment:k4,colorspace_fragment:V4,colorspace_pars_fragment:W4,envmap_fragment:$4,envmap_common_pars_fragment:X4,envmap_pars_fragment:q4,envmap_pars_vertex:Y4,envmap_physical_pars_fragment:aV,envmap_vertex:K4,fog_vertex:j4,fog_pars_vertex:Z4,fog_fragment:J4,fog_pars_fragment:Q4,gradientmap_pars_fragment:eV,lightmap_fragment:tV,lightmap_pars_fragment:nV,lights_lambert_fragment:iV,lights_lambert_pars_fragment:rV,lights_pars_begin:sV,lights_toon_fragment:oV,lights_toon_pars_fragment:lV,lights_phong_fragment:cV,lights_phong_pars_fragment:uV,lights_physical_fragment:fV,lights_physical_pars_fragment:hV,lights_fragment_begin:dV,lights_fragment_maps:pV,lights_fragment_end:mV,logdepthbuf_fragment:_V,logdepthbuf_pars_fragment:gV,logdepthbuf_pars_vertex:vV,logdepthbuf_vertex:xV,map_fragment:yV,map_pars_fragment:SV,map_particle_fragment:EV,map_particle_pars_fragment:MV,metalnessmap_fragment:TV,metalnessmap_pars_fragment:bV,morphcolor_vertex:wV,morphnormal_vertex:AV,morphtarget_pars_vertex:CV,morphtarget_vertex:RV,normal_fragment_begin:PV,normal_fragment_maps:LV,normal_pars_fragment:IV,normal_pars_vertex:DV,normal_vertex:OV,normalmap_pars_fragment:UV,clearcoat_normal_fragment_begin:NV,clearcoat_normal_fragment_maps:FV,clearcoat_pars_fragment:BV,iridescence_pars_fragment:zV,opaque_fragment:HV,packing:GV,premultiplied_alpha_fragment:kV,project_vertex:VV,dithering_fragment:WV,dithering_pars_fragment:$V,roughnessmap_fragment:XV,roughnessmap_pars_fragment:qV,shadowmap_pars_fragment:YV,shadowmap_pars_vertex:KV,shadowmap_vertex:jV,shadowmask_pars_fragment:ZV,skinbase_vertex:JV,skinning_pars_vertex:QV,skinning_vertex:eW,skinnormal_vertex:tW,specularmap_fragment:nW,specularmap_pars_fragment:iW,tonemapping_fragment:rW,tonemapping_pars_fragment:sW,transmission_fragment:aW,transmission_pars_fragment:oW,uv_pars_fragment:lW,uv_pars_vertex:cW,uv_vertex:uW,worldpos_vertex:fW,background_vert:hW,background_frag:dW,backgroundCube_vert:pW,backgroundCube_frag:mW,cube_vert:_W,cube_frag:gW,depth_vert:vW,depth_frag:xW,distanceRGBA_vert:yW,distanceRGBA_frag:SW,equirect_vert:EW,equirect_frag:MW,linedashed_vert:TW,linedashed_frag:bW,meshbasic_vert:wW,meshbasic_frag:AW,meshlambert_vert:CW,meshlambert_frag:RW,meshmatcap_vert:PW,meshmatcap_frag:LW,meshnormal_vert:IW,meshnormal_frag:DW,meshphong_vert:OW,meshphong_frag:UW,meshphysical_vert:NW,meshphysical_frag:FW,meshtoon_vert:BW,meshtoon_frag:zW,points_vert:HW,points_frag:GW,shadow_vert:kW,shadow_frag:VW,sprite_vert:WW,sprite_frag:$W},Ce={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new At}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new At}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new At}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new At},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new At},normalScale:{value:new Bt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new At},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new At}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new At}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new At}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0},uvTransform:{value:new At}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new Bt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new At},alphaMap:{value:null},alphaMapTransform:{value:new At},alphaTest:{value:0}}},Xr={basic:{uniforms:hi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:hi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:hi([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:hi([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:hi([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:hi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:hi([Ce.points,Ce.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:hi([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:hi([Ce.common,Ce.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:hi([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:hi([Ce.sprite,Ce.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new At},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:hi([Ce.common,Ce.displacementmap,{referencePosition:{value:new se},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:hi([Ce.lights,Ce.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Xr.physical={uniforms:hi([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new At},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new At},clearcoatNormalScale:{value:new Bt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new At},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new At},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new At},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new At},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new At},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new At},transmissionSamplerSize:{value:new Bt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new At},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new At},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new At},anisotropyVector:{value:new Bt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new At}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};const Xf={r:0,b:0,g:0};function XW(i,e,t,n,r,a,l){const c=new Yt(0);let u=a===!0?0:1,f,d,p=null,_=0,m=null;function S(g,v){let b=!1,E=v.isScene===!0?v.background:null;E&&E.isTexture&&(E=(v.backgroundBlurriness>0?t:e).get(E)),E===null?y(c,u):E&&E.isColor&&(y(E,1),b=!0);const w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,l):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||b)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),E&&(E.isCubeTexture||E.mapping===Qh)?(d===void 0&&(d=new Jr(new ou(1,1,1),new Ds({name:"BackgroundCubeMaterial",uniforms:Al(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(U,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=E,d.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,d.material.toneMapped=qt.getTransfer(E.colorSpace)!==sn,(p!==E||_!==E.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,p=E,_=E.version,m=i.toneMapping),d.layers.enableAll(),g.unshift(d,d.geometry,d.material,0,0,null)):E&&E.isTexture&&(f===void 0&&(f=new Jr(new lu(2,2),new Ds({name:"BackgroundMaterial",uniforms:Al(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:pa,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(f)),f.material.uniforms.t2D.value=E,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.toneMapped=qt.getTransfer(E.colorSpace)!==sn,E.matrixAutoUpdate===!0&&E.updateMatrix(),f.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||_!==E.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,p=E,_=E.version,m=i.toneMapping),f.layers.enableAll(),g.unshift(f,f.geometry,f.material,0,0,null))}function y(g,v){g.getRGB(Xf,r1(i)),n.buffers.color.setClear(Xf.r,Xf.g,Xf.b,v,l)}return{getClearColor:function(){return c},setClearColor:function(g,v=1){c.set(g),u=v,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(g){u=g,y(c,u)},render:S}}function qW(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),l=n.isWebGL2||a!==null,c={},u=g(null);let f=u,d=!1;function p(z,j,K,ne,ie){let ae=!1;if(l){const N=y(ne,K,j);f!==N&&(f=N,m(f.object)),ae=v(z,ne,K,ie),ae&&b(z,ne,K,ie)}else{const N=j.wireframe===!0;(f.geometry!==ne.id||f.program!==K.id||f.wireframe!==N)&&(f.geometry=ne.id,f.program=K.id,f.wireframe=N,ae=!0)}ie!==null&&t.update(ie,i.ELEMENT_ARRAY_BUFFER),(ae||d)&&(d=!1,G(z,j,K,ne),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function _(){return n.isWebGL2?i.createVertexArray():a.createVertexArrayOES()}function m(z){return n.isWebGL2?i.bindVertexArray(z):a.bindVertexArrayOES(z)}function S(z){return n.isWebGL2?i.deleteVertexArray(z):a.deleteVertexArrayOES(z)}function y(z,j,K){const ne=K.wireframe===!0;let ie=c[z.id];ie===void 0&&(ie={},c[z.id]=ie);let ae=ie[j.id];ae===void 0&&(ae={},ie[j.id]=ae);let N=ae[ne];return N===void 0&&(N=g(_()),ae[ne]=N),N}function g(z){const j=[],K=[],ne=[];for(let ie=0;ie<r;ie++)j[ie]=0,K[ie]=0,ne[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:K,attributeDivisors:ne,object:z,attributes:{},index:null}}function v(z,j,K,ne){const ie=f.attributes,ae=j.attributes;let N=0;const oe=K.getAttributes();for(const Re in oe)if(oe[Re].location>=0){const te=ie[Re];let ue=ae[Re];if(ue===void 0&&(Re==="instanceMatrix"&&z.instanceMatrix&&(ue=z.instanceMatrix),Re==="instanceColor"&&z.instanceColor&&(ue=z.instanceColor)),te===void 0||te.attribute!==ue||ue&&te.data!==ue.data)return!0;N++}return f.attributesNum!==N||f.index!==ne}function b(z,j,K,ne){const ie={},ae=j.attributes;let N=0;const oe=K.getAttributes();for(const Re in oe)if(oe[Re].location>=0){let te=ae[Re];te===void 0&&(Re==="instanceMatrix"&&z.instanceMatrix&&(te=z.instanceMatrix),Re==="instanceColor"&&z.instanceColor&&(te=z.instanceColor));const ue={};ue.attribute=te,te&&te.data&&(ue.data=te.data),ie[Re]=ue,N++}f.attributes=ie,f.attributesNum=N,f.index=ne}function E(){const z=f.newAttributes;for(let j=0,K=z.length;j<K;j++)z[j]=0}function w(z){U(z,0)}function U(z,j){const K=f.newAttributes,ne=f.enabledAttributes,ie=f.attributeDivisors;K[z]=1,ne[z]===0&&(i.enableVertexAttribArray(z),ne[z]=1),ie[z]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,j),ie[z]=j)}function I(){const z=f.newAttributes,j=f.enabledAttributes;for(let K=0,ne=j.length;K<ne;K++)j[K]!==z[K]&&(i.disableVertexAttribArray(K),j[K]=0)}function R(z,j,K,ne,ie,ae,N){N===!0?i.vertexAttribIPointer(z,j,K,ie,ae):i.vertexAttribPointer(z,j,K,ne,ie,ae)}function G(z,j,K,ne){if(n.isWebGL2===!1&&(z.isInstancedMesh||ne.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;E();const ie=ne.attributes,ae=K.getAttributes(),N=j.defaultAttributeValues;for(const oe in ae){const Re=ae[oe];if(Re.location>=0){let Je=ie[oe];if(Je===void 0&&(oe==="instanceMatrix"&&z.instanceMatrix&&(Je=z.instanceMatrix),oe==="instanceColor"&&z.instanceColor&&(Je=z.instanceColor)),Je!==void 0){const te=Je.normalized,ue=Je.itemSize,Te=t.get(Je);if(Te===void 0)continue;const Ie=Te.buffer,Oe=Te.type,Ae=Te.bytesPerElement,_t=n.isWebGL2===!0&&(Oe===i.INT||Oe===i.UNSIGNED_INT||Je.gpuType===Hb);if(Je.isInterleavedBufferAttribute){const $e=Je.data,X=$e.stride,st=Je.offset;if($e.isInstancedInterleavedBuffer){for(let Me=0;Me<Re.locationSize;Me++)U(Re.location+Me,$e.meshPerAttribute);z.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=$e.meshPerAttribute*$e.count)}else for(let Me=0;Me<Re.locationSize;Me++)w(Re.location+Me);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let Me=0;Me<Re.locationSize;Me++)R(Re.location+Me,ue/Re.locationSize,Oe,te,X*Ae,(st+ue/Re.locationSize*Me)*Ae,_t)}else{if(Je.isInstancedBufferAttribute){for(let $e=0;$e<Re.locationSize;$e++)U(Re.location+$e,Je.meshPerAttribute);z.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=Je.meshPerAttribute*Je.count)}else for(let $e=0;$e<Re.locationSize;$e++)w(Re.location+$e);i.bindBuffer(i.ARRAY_BUFFER,Ie);for(let $e=0;$e<Re.locationSize;$e++)R(Re.location+$e,ue/Re.locationSize,Oe,te,ue*Ae,ue/Re.locationSize*$e*Ae,_t)}}else if(N!==void 0){const te=N[oe];if(te!==void 0)switch(te.length){case 2:i.vertexAttrib2fv(Re.location,te);break;case 3:i.vertexAttrib3fv(Re.location,te);break;case 4:i.vertexAttrib4fv(Re.location,te);break;default:i.vertexAttrib1fv(Re.location,te)}}}}I()}function $(){Y();for(const z in c){const j=c[z];for(const K in j){const ne=j[K];for(const ie in ne)S(ne[ie].object),delete ne[ie];delete j[K]}delete c[z]}}function T(z){if(c[z.id]===void 0)return;const j=c[z.id];for(const K in j){const ne=j[K];for(const ie in ne)S(ne[ie].object),delete ne[ie];delete j[K]}delete c[z.id]}function O(z){for(const j in c){const K=c[j];if(K[z.id]===void 0)continue;const ne=K[z.id];for(const ie in ne)S(ne[ie].object),delete ne[ie];delete K[z.id]}}function Y(){ce(),d=!0,f!==u&&(f=u,m(f.object))}function ce(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:Y,resetDefaultState:ce,dispose:$,releaseStatesOfGeometry:T,releaseStatesOfProgram:O,initAttributes:E,enableAttribute:w,disableUnusedAttributes:I}}function YW(i,e,t,n){const r=n.isWebGL2;let a;function l(d){a=d}function c(d,p){i.drawArrays(a,d,p),t.update(p,a,1)}function u(d,p,_){if(_===0)return;let m,S;if(r)m=i,S="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),S="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[S](a,d,p,_),t.update(p,a,_)}function f(d,p,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let S=0;S<_;S++)this.render(d[S],p[S]);else{m.multiDrawArraysWEBGL(a,d,0,p,0,_);let S=0;for(let y=0;y<_;y++)S+=p[y];t.update(S,a,1)}}this.setMode=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function KW(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const l=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const u=a(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=l||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),y=i.getParameter(i.MAX_VERTEX_ATTRIBS),g=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=_>0,w=l||e.has("OES_texture_float"),U=E&&w,I=l?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:l,drawBuffers:f,getMaxAnisotropy:r,getMaxPrecision:a,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:E,floatFragmentTextures:w,floatVertexTextures:U,maxSamples:I}}function jW(i){const e=this;let t=null,n=0,r=!1,a=!1;const l=new Ua,c=new At,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const m=p.length!==0||_||n!==0||r;return r=_,n=p.length,m},this.beginShadows=function(){a=!0,d(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(p,_){t=d(p,_,0)},this.setState=function(p,_,m){const S=p.clippingPlanes,y=p.clipIntersection,g=p.clipShadows,v=i.get(p);if(!r||S===null||S.length===0||a&&!g)a?d(null):f();else{const b=a?0:n,E=b*4;let w=v.clippingState||null;u.value=w,w=d(S,_,E,m);for(let U=0;U!==E;++U)w[U]=t[U];v.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function f(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,_,m,S){const y=p!==null?p.length:0;let g=null;if(y!==0){if(g=u.value,S!==!0||g===null){const v=m+y*4,b=_.matrixWorldInverse;c.getNormalMatrix(b),(g===null||g.length<v)&&(g=new Float32Array(v));for(let E=0,w=m;E!==y;++E,w+=4)l.copy(p[E]).applyMatrix4(b,c),l.normal.toArray(g,w),g[w+3]=l.constant}u.value=g,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function ZW(i){let e=new WeakMap;function t(l,c){return c===v_?l.mapping=Tl:c===x_&&(l.mapping=bl),l}function n(l){if(l&&l.isTexture){const c=l.mapping;if(c===v_||c===x_)if(e.has(l)){const u=e.get(l).texture;return t(u,l.mapping)}else{const u=l.image;if(u&&u.height>0){const f=new c4(u.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",r),t(f.texture,l.mapping)}else return null}}return l}function r(l){const c=l.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}class JW extends s1{constructor(e=-1,t=1,n=1,r=-1,a=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,l=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,l=a+f*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(a,l,c,u,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const il=4,pE=[.125,.215,.35,.446,.526,.582],za=20,wm=new JW,mE=new Yt;let Am=null,Cm=0,Rm=0;const Na=(1+Math.sqrt(5))/2,Ko=1/Na,_E=[new se(1,1,1),new se(-1,1,1),new se(1,1,-1),new se(-1,1,-1),new se(0,Na,Ko),new se(0,Na,-Ko),new se(Ko,0,Na),new se(-Ko,0,Na),new se(Na,Ko,0),new se(-Na,Ko,0)];class gE{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Am=this._renderer.getRenderTarget(),Cm=this._renderer.getActiveCubeFace(),Rm=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yE(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xE(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Am,Cm,Rm),e.scissorTest=!1,qf(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Tl||e.mapping===bl?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Am=this._renderer.getRenderTarget(),Cm=this._renderer.getActiveCubeFace(),Rm=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:Yc,format:Dr,colorSpace:Is,depthBuffer:!1},r=vE(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vE(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=QW(a)),this._blurMaterial=e5(a,e,t)}return r}_compileMaterial(e){const t=new Jr(this._lodPlanes[0],e);this._renderer.compile(t,wm)}_sceneToCubeUV(e,t,n,r){const c=new pr(90,1,t,n),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,_=d.toneMapping;d.getClearColor(mE),d.toneMapping=ca,d.autoClear=!1;const m=new t1({name:"PMREM.Background",side:Ii,depthWrite:!1,depthTest:!1}),S=new Jr(new ou,m);let y=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,y=!0):(m.color.copy(mE),y=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(c.up.set(0,u[v],0),c.lookAt(f[v],0,0)):b===1?(c.up.set(0,0,u[v]),c.lookAt(0,f[v],0)):(c.up.set(0,u[v],0),c.lookAt(0,0,f[v]));const E=this._cubeSize;qf(r,b*E,v>2?E:0,E,E),d.setRenderTarget(r),y&&d.render(S,c),d.render(e,c)}S.geometry.dispose(),S.material.dispose(),d.toneMapping=_,d.autoClear=p,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Tl||e.mapping===bl;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yE()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xE());const a=r?this._cubemapMaterial:this._equirectMaterial,l=new Jr(this._lodPlanes[0],a),c=a.uniforms;c.envMap.value=e;const u=this._cubeSize;qf(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(l,wm)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=_E[(r-1)%_E.length];this._blur(e,r-1,r,a,l)}t.autoClear=n}_blur(e,t,n,r,a){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,r,"latitudinal",a),this._halfBlur(l,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,l,c){const u=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Jr(this._lodPlanes[r],f),_=f.uniforms,m=this._sizeLods[n]-1,S=isFinite(a)?Math.PI/(2*m):2*Math.PI/(2*za-1),y=a/S,g=isFinite(a)?1+Math.floor(d*y):za;g>za&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${za}`);const v=[];let b=0;for(let R=0;R<za;++R){const G=R/y,$=Math.exp(-G*G/2);v.push($),R===0?b+=$:R<g&&(b+=2*$)}for(let R=0;R<v.length;R++)v[R]=v[R]/b;_.envMap.value=e.texture,_.samples.value=g,_.weights.value=v,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:E}=this;_.dTheta.value=S,_.mipInt.value=E-n;const w=this._sizeLods[r],U=3*w*(r>E-il?r-E+il:0),I=4*(this._cubeSize-w);qf(t,U,I,3*w,2*w),u.setRenderTarget(t),u.render(p,wm)}}function QW(i){const e=[],t=[],n=[];let r=i;const a=i-il+1+pE.length;for(let l=0;l<a;l++){const c=Math.pow(2,r);t.push(c);let u=1/c;l>i-il?u=pE[l-i+il-1]:l===0&&(u=0),n.push(u);const f=1/(c-2),d=-f,p=1+f,_=[d,d,p,d,p,p,d,d,p,p,d,p],m=6,S=6,y=3,g=2,v=1,b=new Float32Array(y*S*m),E=new Float32Array(g*S*m),w=new Float32Array(v*S*m);for(let I=0;I<m;I++){const R=I%3*2/3-1,G=I>2?0:-1,$=[R,G,0,R+2/3,G,0,R+2/3,G+1,0,R,G,0,R+2/3,G+1,0,R,G+1,0];b.set($,y*S*I),E.set(_,g*S*I);const T=[I,I,I,I,I,I];w.set(T,v*S*I)}const U=new uo;U.setAttribute("position",new ns(b,y)),U.setAttribute("uv",new ns(E,g)),U.setAttribute("faceIndex",new ns(w,v)),e.push(U),r>il&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function vE(i,e,t){const n=new lo(i,e,t);return n.texture.mapping=Qh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qf(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function e5(i,e,t){const n=new Float32Array(za),r=new se(0,1,0);return new Ds({name:"SphericalGaussianBlur",defines:{n:za,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zg(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function xE(){return new Ds({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zg(),fragmentShader:`

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
		`,blending:la,depthTest:!1,depthWrite:!1})}function yE(){return new Ds({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:la,depthTest:!1,depthWrite:!1})}function zg(){return`

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
	`}function t5(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,f=u===v_||u===x_,d=u===Tl||u===bl;if(f||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new gE(i)),p=f?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(f&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new gE(i));const _=f?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",a),_.texture}else return null}}}return c}function r(c){let u=0;const f=6;for(let d=0;d<f;d++)c[d]!==void 0&&u++;return u===f}function a(c){const u=c.target;u.removeEventListener("dispose",a);const f=e.get(u);f!==void 0&&(e.delete(u),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function n5(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function i5(i,e,t,n){const r={},a=new WeakMap;function l(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const S in _.attributes)e.remove(_.attributes[S]);for(const S in _.morphAttributes){const y=_.morphAttributes[S];for(let g=0,v=y.length;g<v;g++)e.remove(y[g])}_.removeEventListener("dispose",l),delete r[_.id];const m=a.get(_);m&&(e.remove(m),a.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(p,_){return r[_.id]===!0||(_.addEventListener("dispose",l),r[_.id]=!0,t.memory.geometries++),_}function u(p){const _=p.attributes;for(const S in _)e.update(_[S],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const S in m){const y=m[S];for(let g=0,v=y.length;g<v;g++)e.update(y[g],i.ARRAY_BUFFER)}}function f(p){const _=[],m=p.index,S=p.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let E=0,w=b.length;E<w;E+=3){const U=b[E+0],I=b[E+1],R=b[E+2];_.push(U,I,I,R,R,U)}}else if(S!==void 0){const b=S.array;y=S.version;for(let E=0,w=b.length/3-1;E<w;E+=3){const U=E+0,I=E+1,R=E+2;_.push(U,I,I,R,R,U)}}else return;const g=new(Kb(_)?i1:n1)(_,1);g.version=y;const v=a.get(p);v&&e.remove(v),a.set(p,g)}function d(p){const _=a.get(p);if(_){const m=p.index;m!==null&&_.version<m.version&&f(p)}else f(p);return a.get(p)}return{get:c,update:u,getWireframeAttribute:d}}function r5(i,e,t,n){const r=n.isWebGL2;let a;function l(m){a=m}let c,u;function f(m){c=m.type,u=m.bytesPerElement}function d(m,S){i.drawElements(a,S,c,m*u),t.update(S,a,1)}function p(m,S,y){if(y===0)return;let g,v;if(r)g=i,v="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),v="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[v](a,S,c,m*u,y),t.update(S,a,y)}function _(m,S,y){if(y===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let v=0;v<y;v++)this.render(m[v]/u,S[v]);else{g.multiDrawElementsWEBGL(a,S,0,c,m,0,y);let v=0;for(let b=0;b<y;b++)v+=S[b];t.update(v,a,1)}}this.setMode=l,this.setIndex=f,this.render=d,this.renderInstances=p,this.renderMultiDraw=_}function s5(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,l,c){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=c*(a/3);break;case i.LINES:t.lines+=c*(a/2);break;case i.LINE_STRIP:t.lines+=c*(a-1);break;case i.LINE_LOOP:t.lines+=c*a;break;case i.POINTS:t.points+=c*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function a5(i,e){return i[0]-e[0]}function o5(i,e){return Math.abs(e[1])-Math.abs(i[1])}function l5(i,e,t){const n={},r=new Float32Array(8),a=new WeakMap,l=new Hn,c=[];for(let f=0;f<8;f++)c[f]=[f,0];function u(f,d,p){const _=f.morphTargetInfluences;if(e.isWebGL2===!0){const m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,S=m!==void 0?m.length:0;let y=a.get(d);if(y===void 0||y.count!==S){let z=function(){Y.dispose(),a.delete(d),d.removeEventListener("dispose",z)};y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,w=d.morphAttributes.color!==void 0,U=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let G=0;b===!0&&(G=1),E===!0&&(G=2),w===!0&&(G=3);let $=d.attributes.position.count*G,T=1;$>e.maxTextureSize&&(T=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*T*4*S),Y=new Jb(O,$,T,S);Y.type=bs,Y.needsUpdate=!0;const ce=G*4;for(let j=0;j<S;j++){const K=U[j],ne=I[j],ie=R[j],ae=$*T*4*j;for(let N=0;N<K.count;N++){const oe=N*ce;b===!0&&(l.fromBufferAttribute(K,N),O[ae+oe+0]=l.x,O[ae+oe+1]=l.y,O[ae+oe+2]=l.z,O[ae+oe+3]=0),E===!0&&(l.fromBufferAttribute(ne,N),O[ae+oe+4]=l.x,O[ae+oe+5]=l.y,O[ae+oe+6]=l.z,O[ae+oe+7]=0),w===!0&&(l.fromBufferAttribute(ie,N),O[ae+oe+8]=l.x,O[ae+oe+9]=l.y,O[ae+oe+10]=l.z,O[ae+oe+11]=ie.itemSize===4?l.w:1)}}y={count:S,texture:Y,size:new Bt($,T)},a.set(d,y),d.addEventListener("dispose",z)}let g=0;for(let b=0;b<_.length;b++)g+=_[b];const v=d.morphTargetsRelative?1:1-g;p.getUniforms().setValue(i,"morphTargetBaseInfluence",v),p.getUniforms().setValue(i,"morphTargetInfluences",_),p.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const m=_===void 0?0:_.length;let S=n[d.id];if(S===void 0||S.length!==m){S=[];for(let E=0;E<m;E++)S[E]=[E,0];n[d.id]=S}for(let E=0;E<m;E++){const w=S[E];w[0]=E,w[1]=_[E]}S.sort(o5);for(let E=0;E<8;E++)E<m&&S[E][1]?(c[E][0]=S[E][0],c[E][1]=S[E][1]):(c[E][0]=Number.MAX_SAFE_INTEGER,c[E][1]=0);c.sort(a5);const y=d.morphAttributes.position,g=d.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const w=c[E],U=w[0],I=w[1];U!==Number.MAX_SAFE_INTEGER&&I?(y&&d.getAttribute("morphTarget"+E)!==y[U]&&d.setAttribute("morphTarget"+E,y[U]),g&&d.getAttribute("morphNormal"+E)!==g[U]&&d.setAttribute("morphNormal"+E,g[U]),r[E]=I,v+=I):(y&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),g&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const b=d.morphTargetsRelative?1:1-v;p.getUniforms().setValue(i,"morphTargetBaseInfluence",b),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function c5(i,e,t,n){let r=new WeakMap;function a(u){const f=n.render.frame,d=u.geometry,p=e.get(u,d);if(r.get(p)!==f&&(e.update(p),r.set(p,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),r.get(u)!==f&&(t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,f))),u.isSkinnedMesh){const _=u.skeleton;r.get(_)!==f&&(_.update(),r.set(_,f))}return p}function l(){r=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:l}}class c1 extends ai{constructor(e,t,n,r,a,l,c,u,f,d){if(d=d!==void 0?d:Ja,d!==Ja&&d!==wl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Ja&&(n=ra),n===void 0&&d===wl&&(n=Za),super(null,r,a,l,c,u,d,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:_i,this.minFilter=u!==void 0?u:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const u1=new ai,f1=new c1(1,1);f1.compareFunction=Yb;const h1=new Jb,d1=new Xk,p1=new a1,SE=[],EE=[],ME=new Float32Array(16),TE=new Float32Array(9),bE=new Float32Array(4);function Fl(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=SE[r];if(a===void 0&&(a=new Float32Array(r),SE[r]=a),e!==0){n.toArray(a,0);for(let l=1,c=0;l!==e;++l)c+=t,i[l].toArray(a,c)}return a}function Dn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function On(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function id(i,e){let t=EE[e];t===void 0&&(t=new Int32Array(e),EE[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function u5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function f5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2fv(this.addr,e),On(t,e)}}function h5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dn(t,e))return;i.uniform3fv(this.addr,e),On(t,e)}}function d5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4fv(this.addr,e),On(t,e)}}function p5(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Dn(t,n))return;bE.set(n),i.uniformMatrix2fv(this.addr,!1,bE),On(t,n)}}function m5(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Dn(t,n))return;TE.set(n),i.uniformMatrix3fv(this.addr,!1,TE),On(t,n)}}function _5(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Dn(t,n))return;ME.set(n),i.uniformMatrix4fv(this.addr,!1,ME),On(t,n)}}function g5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function v5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2iv(this.addr,e),On(t,e)}}function x5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;i.uniform3iv(this.addr,e),On(t,e)}}function y5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4iv(this.addr,e),On(t,e)}}function S5(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function E5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dn(t,e))return;i.uniform2uiv(this.addr,e),On(t,e)}}function M5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dn(t,e))return;i.uniform3uiv(this.addr,e),On(t,e)}}function T5(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dn(t,e))return;i.uniform4uiv(this.addr,e),On(t,e)}}function b5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const a=this.type===i.SAMPLER_2D_SHADOW?f1:u1;t.setTexture2D(e||a,r)}function w5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||d1,r)}function A5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||p1,r)}function C5(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||h1,r)}function R5(i){switch(i){case 5126:return u5;case 35664:return f5;case 35665:return h5;case 35666:return d5;case 35674:return p5;case 35675:return m5;case 35676:return _5;case 5124:case 35670:return g5;case 35667:case 35671:return v5;case 35668:case 35672:return x5;case 35669:case 35673:return y5;case 5125:return S5;case 36294:return E5;case 36295:return M5;case 36296:return T5;case 35678:case 36198:case 36298:case 36306:case 35682:return b5;case 35679:case 36299:case 36307:return w5;case 35680:case 36300:case 36308:case 36293:return A5;case 36289:case 36303:case 36311:case 36292:return C5}}function P5(i,e){i.uniform1fv(this.addr,e)}function L5(i,e){const t=Fl(e,this.size,2);i.uniform2fv(this.addr,t)}function I5(i,e){const t=Fl(e,this.size,3);i.uniform3fv(this.addr,t)}function D5(i,e){const t=Fl(e,this.size,4);i.uniform4fv(this.addr,t)}function O5(i,e){const t=Fl(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U5(i,e){const t=Fl(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function N5(i,e){const t=Fl(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function F5(i,e){i.uniform1iv(this.addr,e)}function B5(i,e){i.uniform2iv(this.addr,e)}function z5(i,e){i.uniform3iv(this.addr,e)}function H5(i,e){i.uniform4iv(this.addr,e)}function G5(i,e){i.uniform1uiv(this.addr,e)}function k5(i,e){i.uniform2uiv(this.addr,e)}function V5(i,e){i.uniform3uiv(this.addr,e)}function W5(i,e){i.uniform4uiv(this.addr,e)}function $5(i,e,t){const n=this.cache,r=e.length,a=id(t,r);Dn(n,a)||(i.uniform1iv(this.addr,a),On(n,a));for(let l=0;l!==r;++l)t.setTexture2D(e[l]||u1,a[l])}function X5(i,e,t){const n=this.cache,r=e.length,a=id(t,r);Dn(n,a)||(i.uniform1iv(this.addr,a),On(n,a));for(let l=0;l!==r;++l)t.setTexture3D(e[l]||d1,a[l])}function q5(i,e,t){const n=this.cache,r=e.length,a=id(t,r);Dn(n,a)||(i.uniform1iv(this.addr,a),On(n,a));for(let l=0;l!==r;++l)t.setTextureCube(e[l]||p1,a[l])}function Y5(i,e,t){const n=this.cache,r=e.length,a=id(t,r);Dn(n,a)||(i.uniform1iv(this.addr,a),On(n,a));for(let l=0;l!==r;++l)t.setTexture2DArray(e[l]||h1,a[l])}function K5(i){switch(i){case 5126:return P5;case 35664:return L5;case 35665:return I5;case 35666:return D5;case 35674:return O5;case 35675:return U5;case 35676:return N5;case 5124:case 35670:return F5;case 35667:case 35671:return B5;case 35668:case 35672:return z5;case 35669:case 35673:return H5;case 5125:return G5;case 36294:return k5;case 36295:return V5;case 36296:return W5;case 35678:case 36198:case 36298:case 36306:case 35682:return $5;case 35679:case 36299:case 36307:return X5;case 35680:case 36300:case 36308:case 36293:return q5;case 36289:case 36303:case 36311:case 36292:return Y5}}class j5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R5(t.type)}}class Z5{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K5(t.type)}}class J5{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,l=r.length;a!==l;++a){const c=r[a];c.setValue(e,t[c.id],n)}}}const Pm=/(\w+)(\])?(\[|\.)?/g;function wE(i,e){i.seq.push(e),i.map[e.id]=e}function Q5(i,e,t){const n=i.name,r=n.length;for(Pm.lastIndex=0;;){const a=Pm.exec(n),l=Pm.lastIndex;let c=a[1];const u=a[2]==="]",f=a[3];if(u&&(c=c|0),f===void 0||f==="["&&l+2===r){wE(t,f===void 0?new j5(c,i,e):new Z5(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new J5(c),wE(t,p)),t=p}}}class fh{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),l=e.getUniformLocation(t,a.name);Q5(a,l,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,l=t.length;a!==l;++a){const c=t[a],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const l=e[r];l.id in t&&n.push(l)}return n}}function AE(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const e$=37297;let t$=0;function n$(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let l=r;l<a;l++){const c=l+1;n.push(`${c===e?">":" "} ${c}: ${t[l]}`)}return n.join(`
`)}function i$(i){const e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(i);let n;switch(e===t?n="":e===Uh&&t===Oh?n="LinearDisplayP3ToLinearSRGB":e===Oh&&t===Uh&&(n="LinearSRGBToLinearDisplayP3"),i){case Is:case ed:return[n,"LinearTransferOETF"];case $n:case Ng:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function CE(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+n$(i.getShaderSource(e),l)}else return r}function r$(i,e){const t=i$(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function s$(i,e){let t;switch(e){case mk:t="Linear";break;case _k:t="Reinhard";break;case gk:t="OptimizedCineon";break;case vk:t="ACESFilmic";break;case yk:t="AgX";break;case xk:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function a$(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rl).join(`
`)}function o$(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rl).join(`
`)}function l$(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function c$(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),l=a.name;let c=1;a.type===i.FLOAT_MAT2&&(c=2),a.type===i.FLOAT_MAT3&&(c=3),a.type===i.FLOAT_MAT4&&(c=4),t[l]={type:a.type,location:i.getAttribLocation(e,l),locationSize:c}}return t}function rl(i){return i!==""}function RE(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function PE(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u$=/^[ \t]*#include +<([\w\d./]+)>/gm;function b_(i){return i.replace(u$,h$)}const f$=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function h$(i,e){let t=Mt[e];if(t===void 0){const n=f$.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return b_(t)}const d$=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function LE(i){return i.replace(d$,p$)}function p$(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function IE(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function m$(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fb?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===VG?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ys&&(e="SHADOWMAP_TYPE_VSM"),e}function _$(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Tl:case bl:e="ENVMAP_TYPE_CUBE";break;case Qh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function g$(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bl:e="ENVMAP_MODE_REFRACTION";break}return e}function v$(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bb:e="ENVMAP_BLENDING_MULTIPLY";break;case dk:e="ENVMAP_BLENDING_MIX";break;case pk:e="ENVMAP_BLENDING_ADD";break}return e}function x$(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function y$(i,e,t,n){const r=i.getContext(),a=t.defines;let l=t.vertexShader,c=t.fragmentShader;const u=m$(t),f=_$(t),d=g$(t),p=v$(t),_=x$(t),m=t.isWebGL2?"":a$(t),S=o$(t),y=l$(a),g=r.createProgram();let v,b,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(rl).join(`
`),v.length>0&&(v+=`
`),b=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(rl).join(`
`),b.length>0&&(b+=`
`)):(v=[IE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rl).join(`
`),b=[m,IE(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ca?"#define TONE_MAPPING":"",t.toneMapping!==ca?Mt.tonemapping_pars_fragment:"",t.toneMapping!==ca?s$("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,r$("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rl).join(`
`)),l=b_(l),l=RE(l,t),l=PE(l,t),c=b_(c),c=RE(c,t),c=PE(c,t),l=LE(l),c=LE(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,v=[S,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,b=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===YS?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===YS?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const w=E+v+l,U=E+b+c,I=AE(r,r.VERTEX_SHADER,w),R=AE(r,r.FRAGMENT_SHADER,U);r.attachShader(g,I),r.attachShader(g,R),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function G(Y){if(i.debug.checkShaderErrors){const ce=r.getProgramInfoLog(g).trim(),z=r.getShaderInfoLog(I).trim(),j=r.getShaderInfoLog(R).trim();let K=!0,ne=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,g,I,R);else{const ie=CE(r,I,"vertex"),ae=CE(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+ce+`
`+ie+`
`+ae)}else ce!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ce):(z===""||j==="")&&(ne=!1);ne&&(Y.diagnostics={runnable:K,programLog:ce,vertexShader:{log:z,prefix:v},fragmentShader:{log:j,prefix:b}})}r.deleteShader(I),r.deleteShader(R),$=new fh(r,g),T=c$(r,g)}let $;this.getUniforms=function(){return $===void 0&&G(this),$};let T;this.getAttributes=function(){return T===void 0&&G(this),T};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,e$)),O},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=t$++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=I,this.fragmentShader=R,this}let S$=0;class E${constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(r)===!1&&(l.add(r),r.usedTimes++),l.has(a)===!1&&(l.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new M$(e),t.set(e,n)),n}}class M${constructor(e){this.id=S$++,this.code=e,this.usedTimes=0}}function T$(i,e,t,n,r,a,l){const c=new Bg,u=new E$,f=new Set,d=[],p=r.isWebGL2,_=r.logarithmicDepthBuffer,m=r.vertexTextures;let S=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return f.add(T),T===0?"uv":`uv${T}`}function v(T,O,Y,ce,z){const j=ce.fog,K=z.geometry,ne=T.isMeshStandardMaterial?ce.environment:null,ie=(T.isMeshStandardMaterial?t:e).get(T.envMap||ne),ae=ie&&ie.mapping===Qh?ie.image.height:null,N=y[T.type];T.precision!==null&&(S=r.getMaxPrecision(T.precision),S!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",S,"instead."));const oe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Re=oe!==void 0?oe.length:0;let Je=0;K.morphAttributes.position!==void 0&&(Je=1),K.morphAttributes.normal!==void 0&&(Je=2),K.morphAttributes.color!==void 0&&(Je=3);let te,ue,Te,Ie;if(N){const Dt=Xr[N];te=Dt.vertexShader,ue=Dt.fragmentShader}else te=T.vertexShader,ue=T.fragmentShader,u.update(T),Te=u.getVertexShaderID(T),Ie=u.getFragmentShaderID(T);const Oe=i.getRenderTarget(),Ae=z.isInstancedMesh===!0,_t=z.isBatchedMesh===!0,$e=!!T.map,X=!!T.matcap,st=!!ie,Me=!!T.aoMap,ke=!!T.lightMap,Ue=!!T.bumpMap,Z=!!T.normalMap,et=!!T.displacementMap,D=!!T.emissiveMap,A=!!T.metalnessMap,q=!!T.roughnessMap,me=T.anisotropy>0,de=T.clearcoat>0,ge=T.iridescence>0,we=T.sheen>0,be=T.transmission>0,Se=me&&!!T.anisotropyMap,He=de&&!!T.clearcoatMap,tt=de&&!!T.clearcoatNormalMap,pe=de&&!!T.clearcoatRoughnessMap,bt=ge&&!!T.iridescenceMap,Xe=ge&&!!T.iridescenceThicknessMap,at=we&&!!T.sheenColorMap,Ve=we&&!!T.sheenRoughnessMap,De=!!T.specularMap,ot=!!T.specularColorMap,gt=!!T.specularIntensityMap,It=be&&!!T.transmissionMap,Pe=be&&!!T.thicknessMap,Ct=!!T.gradientMap,F=!!T.alphaMap,ve=T.alphaTest>0,xe=!!T.alphaHash,Ne=!!T.extensions;let Ze=ca;T.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const vt={isWebGL2:p,shaderID:N,shaderType:T.type,shaderName:T.name,vertexShader:te,fragmentShader:ue,defines:T.defines,customVertexShaderID:Te,customFragmentShaderID:Ie,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:S,batching:_t,instancing:Ae,instancingColor:Ae&&z.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:Oe===null?i.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:Is,alphaToCoverage:!!T.alphaToCoverage,map:$e,matcap:X,envMap:st,envMapMode:st&&ie.mapping,envMapCubeUVHeight:ae,aoMap:Me,lightMap:ke,bumpMap:Ue,normalMap:Z,displacementMap:m&&et,emissiveMap:D,normalMapObjectSpace:Z&&T.normalMapType===Ik,normalMapTangentSpace:Z&&T.normalMapType===Lk,metalnessMap:A,roughnessMap:q,anisotropy:me,anisotropyMap:Se,clearcoat:de,clearcoatMap:He,clearcoatNormalMap:tt,clearcoatRoughnessMap:pe,iridescence:ge,iridescenceMap:bt,iridescenceThicknessMap:Xe,sheen:we,sheenColorMap:at,sheenRoughnessMap:Ve,specularMap:De,specularColorMap:ot,specularIntensityMap:gt,transmission:be,transmissionMap:It,thicknessMap:Pe,gradientMap:Ct,opaque:T.transparent===!1&&T.blending===dl&&T.alphaToCoverage===!1,alphaMap:F,alphaTest:ve,alphaHash:xe,combine:T.combine,mapUv:$e&&g(T.map.channel),aoMapUv:Me&&g(T.aoMap.channel),lightMapUv:ke&&g(T.lightMap.channel),bumpMapUv:Ue&&g(T.bumpMap.channel),normalMapUv:Z&&g(T.normalMap.channel),displacementMapUv:et&&g(T.displacementMap.channel),emissiveMapUv:D&&g(T.emissiveMap.channel),metalnessMapUv:A&&g(T.metalnessMap.channel),roughnessMapUv:q&&g(T.roughnessMap.channel),anisotropyMapUv:Se&&g(T.anisotropyMap.channel),clearcoatMapUv:He&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:tt&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&g(T.sheenRoughnessMap.channel),specularMapUv:De&&g(T.specularMap.channel),specularColorMapUv:ot&&g(T.specularColorMap.channel),specularIntensityMapUv:gt&&g(T.specularIntensityMap.channel),transmissionMapUv:It&&g(T.transmissionMap.channel),thicknessMapUv:Pe&&g(T.thicknessMap.channel),alphaMapUv:F&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Z||me),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&($e||F),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Je,numDirLights:O.directional.length,numPointLights:O.point.length,numSpotLights:O.spot.length,numSpotLightMaps:O.spotLightMap.length,numRectAreaLights:O.rectArea.length,numHemiLights:O.hemi.length,numDirLightShadows:O.directionalShadowMap.length,numPointLightShadows:O.pointShadowMap.length,numSpotLightShadows:O.spotShadowMap.length,numSpotLightShadowsWithMaps:O.numSpotLightShadowsWithMaps,numLightProbes:O.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&Y.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,useLegacyLights:i._useLegacyLights,decodeVideoTexture:$e&&T.map.isVideoTexture===!0&&qt.getTransfer(T.map.colorSpace)===sn,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ts,flipSided:T.side===Ii,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionDerivatives:Ne&&T.extensions.derivatives===!0,extensionFragDepth:Ne&&T.extensions.fragDepth===!0,extensionDrawBuffers:Ne&&T.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ne&&T.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ne&&T.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:p||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:p||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:p||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return vt.vertexUv1s=f.has(1),vt.vertexUv2s=f.has(2),vt.vertexUv3s=f.has(3),f.clear(),vt}function b(T){const O=[];if(T.shaderID?O.push(T.shaderID):(O.push(T.customVertexShaderID),O.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Y in T.defines)O.push(Y),O.push(T.defines[Y]);return T.isRawShaderMaterial===!1&&(E(O,T),w(O,T),O.push(i.outputColorSpace)),O.push(T.customProgramCacheKey),O.join()}function E(T,O){T.push(O.precision),T.push(O.outputColorSpace),T.push(O.envMapMode),T.push(O.envMapCubeUVHeight),T.push(O.mapUv),T.push(O.alphaMapUv),T.push(O.lightMapUv),T.push(O.aoMapUv),T.push(O.bumpMapUv),T.push(O.normalMapUv),T.push(O.displacementMapUv),T.push(O.emissiveMapUv),T.push(O.metalnessMapUv),T.push(O.roughnessMapUv),T.push(O.anisotropyMapUv),T.push(O.clearcoatMapUv),T.push(O.clearcoatNormalMapUv),T.push(O.clearcoatRoughnessMapUv),T.push(O.iridescenceMapUv),T.push(O.iridescenceThicknessMapUv),T.push(O.sheenColorMapUv),T.push(O.sheenRoughnessMapUv),T.push(O.specularMapUv),T.push(O.specularColorMapUv),T.push(O.specularIntensityMapUv),T.push(O.transmissionMapUv),T.push(O.thicknessMapUv),T.push(O.combine),T.push(O.fogExp2),T.push(O.sizeAttenuation),T.push(O.morphTargetsCount),T.push(O.morphAttributeCount),T.push(O.numDirLights),T.push(O.numPointLights),T.push(O.numSpotLights),T.push(O.numSpotLightMaps),T.push(O.numHemiLights),T.push(O.numRectAreaLights),T.push(O.numDirLightShadows),T.push(O.numPointLightShadows),T.push(O.numSpotLightShadows),T.push(O.numSpotLightShadowsWithMaps),T.push(O.numLightProbes),T.push(O.shadowMapType),T.push(O.toneMapping),T.push(O.numClippingPlanes),T.push(O.numClipIntersection),T.push(O.depthPacking)}function w(T,O){c.disableAll(),O.isWebGL2&&c.enable(0),O.supportsVertexTextures&&c.enable(1),O.instancing&&c.enable(2),O.instancingColor&&c.enable(3),O.matcap&&c.enable(4),O.envMap&&c.enable(5),O.normalMapObjectSpace&&c.enable(6),O.normalMapTangentSpace&&c.enable(7),O.clearcoat&&c.enable(8),O.iridescence&&c.enable(9),O.alphaTest&&c.enable(10),O.vertexColors&&c.enable(11),O.vertexAlphas&&c.enable(12),O.vertexUv1s&&c.enable(13),O.vertexUv2s&&c.enable(14),O.vertexUv3s&&c.enable(15),O.vertexTangents&&c.enable(16),O.anisotropy&&c.enable(17),O.alphaHash&&c.enable(18),O.batching&&c.enable(19),T.push(c.mask),c.disableAll(),O.fog&&c.enable(0),O.useFog&&c.enable(1),O.flatShading&&c.enable(2),O.logarithmicDepthBuffer&&c.enable(3),O.skinning&&c.enable(4),O.morphTargets&&c.enable(5),O.morphNormals&&c.enable(6),O.morphColors&&c.enable(7),O.premultipliedAlpha&&c.enable(8),O.shadowMapEnabled&&c.enable(9),O.useLegacyLights&&c.enable(10),O.doubleSided&&c.enable(11),O.flipSided&&c.enable(12),O.useDepthPacking&&c.enable(13),O.dithering&&c.enable(14),O.transmission&&c.enable(15),O.sheen&&c.enable(16),O.opaque&&c.enable(17),O.pointsUvs&&c.enable(18),O.decodeVideoTexture&&c.enable(19),O.alphaToCoverage&&c.enable(20),T.push(c.mask)}function U(T){const O=y[T.type];let Y;if(O){const ce=Xr[O];Y=s4.clone(ce.uniforms)}else Y=T.uniforms;return Y}function I(T,O){let Y;for(let ce=0,z=d.length;ce<z;ce++){const j=d[ce];if(j.cacheKey===O){Y=j,++Y.usedTimes;break}}return Y===void 0&&(Y=new y$(i,O,T,a),d.push(Y)),Y}function R(T){if(--T.usedTimes===0){const O=d.indexOf(T);d[O]=d[d.length-1],d.pop(),T.destroy()}}function G(T){u.remove(T)}function $(){u.dispose()}return{getParameters:v,getProgramCacheKey:b,getUniforms:U,acquireProgram:I,releaseProgram:R,releaseShaderCache:G,programs:d,dispose:$}}function b$(){let i=new WeakMap;function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function t(a){i.delete(a)}function n(a,l,c){i.get(a)[l]=c}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function w$(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function DE(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function OE(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function l(p,_,m,S,y,g){let v=i[e];return v===void 0?(v={id:p.id,object:p,geometry:_,material:m,groupOrder:S,renderOrder:p.renderOrder,z:y,group:g},i[e]=v):(v.id=p.id,v.object=p,v.geometry=_,v.material=m,v.groupOrder=S,v.renderOrder=p.renderOrder,v.z=y,v.group=g),e++,v}function c(p,_,m,S,y,g){const v=l(p,_,m,S,y,g);m.transmission>0?n.push(v):m.transparent===!0?r.push(v):t.push(v)}function u(p,_,m,S,y,g){const v=l(p,_,m,S,y,g);m.transmission>0?n.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function f(p,_){t.length>1&&t.sort(p||w$),n.length>1&&n.sort(_||DE),r.length>1&&r.sort(_||DE)}function d(){for(let p=e,_=i.length;p<_;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:c,unshift:u,finish:d,sort:f}}function A$(){let i=new WeakMap;function e(n,r){const a=i.get(n);let l;return a===void 0?(l=new OE,i.set(n,[l])):r>=a.length?(l=new OE,a.push(l)):l=a[r],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function C$(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new se,color:new Yt};break;case"SpotLight":t={position:new se,direction:new se,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new se,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new se,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":t={color:new Yt,position:new se,halfWidth:new se,halfHeight:new se};break}return i[e.id]=t,t}}}function R$(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Bt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let P$=0;function L$(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function I$(i,e){const t=new C$,n=R$(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new se);const a=new se,l=new qn,c=new qn;function u(d,p){let _=0,m=0,S=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let y=0,g=0,v=0,b=0,E=0,w=0,U=0,I=0,R=0,G=0,$=0;d.sort(L$);const T=p===!0?Math.PI:1;for(let Y=0,ce=d.length;Y<ce;Y++){const z=d[Y],j=z.color,K=z.intensity,ne=z.distance,ie=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=j.r*K*T,m+=j.g*K*T,S+=j.b*K*T;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)r.probe[ae].addScaledVector(z.sh.coefficients[ae],K);$++}else if(z.isDirectionalLight){const ae=t.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity*T),z.castShadow){const N=z.shadow,oe=n.get(z);oe.shadowBias=N.bias,oe.shadowNormalBias=N.normalBias,oe.shadowRadius=N.radius,oe.shadowMapSize=N.mapSize,r.directionalShadow[y]=oe,r.directionalShadowMap[y]=ie,r.directionalShadowMatrix[y]=z.shadow.matrix,w++}r.directional[y]=ae,y++}else if(z.isSpotLight){const ae=t.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(j).multiplyScalar(K*T),ae.distance=ne,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,r.spot[v]=ae;const N=z.shadow;if(z.map&&(r.spotLightMap[R]=z.map,R++,N.updateMatrices(z),z.castShadow&&G++),r.spotLightMatrix[v]=N.matrix,z.castShadow){const oe=n.get(z);oe.shadowBias=N.bias,oe.shadowNormalBias=N.normalBias,oe.shadowRadius=N.radius,oe.shadowMapSize=N.mapSize,r.spotShadow[v]=oe,r.spotShadowMap[v]=ie,I++}v++}else if(z.isRectAreaLight){const ae=t.get(z);ae.color.copy(j).multiplyScalar(K),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),r.rectArea[b]=ae,b++}else if(z.isPointLight){const ae=t.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity*T),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const N=z.shadow,oe=n.get(z);oe.shadowBias=N.bias,oe.shadowNormalBias=N.normalBias,oe.shadowRadius=N.radius,oe.shadowMapSize=N.mapSize,oe.shadowCameraNear=N.camera.near,oe.shadowCameraFar=N.camera.far,r.pointShadow[g]=oe,r.pointShadowMap[g]=ie,r.pointShadowMatrix[g]=z.shadow.matrix,U++}r.point[g]=ae,g++}else if(z.isHemisphereLight){const ae=t.get(z);ae.skyColor.copy(z.color).multiplyScalar(K*T),ae.groundColor.copy(z.groundColor).multiplyScalar(K*T),r.hemi[E]=ae,E++}}b>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=m,r.ambient[2]=S;const O=r.hash;(O.directionalLength!==y||O.pointLength!==g||O.spotLength!==v||O.rectAreaLength!==b||O.hemiLength!==E||O.numDirectionalShadows!==w||O.numPointShadows!==U||O.numSpotShadows!==I||O.numSpotMaps!==R||O.numLightProbes!==$)&&(r.directional.length=y,r.spot.length=v,r.rectArea.length=b,r.point.length=g,r.hemi.length=E,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=I+R-G,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=$,O.directionalLength=y,O.pointLength=g,O.spotLength=v,O.rectAreaLength=b,O.hemiLength=E,O.numDirectionalShadows=w,O.numPointShadows=U,O.numSpotShadows=I,O.numSpotMaps=R,O.numLightProbes=$,r.version=P$++)}function f(d,p){let _=0,m=0,S=0,y=0,g=0;const v=p.matrixWorldInverse;for(let b=0,E=d.length;b<E;b++){const w=d[b];if(w.isDirectionalLight){const U=r.directional[_];U.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(v),_++}else if(w.isSpotLight){const U=r.spot[S];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(v),U.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),U.direction.sub(a),U.direction.transformDirection(v),S++}else if(w.isRectAreaLight){const U=r.rectArea[y];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(v),c.identity(),l.copy(w.matrixWorld),l.premultiply(v),c.extractRotation(l),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),U.halfWidth.applyMatrix4(c),U.halfHeight.applyMatrix4(c),y++}else if(w.isPointLight){const U=r.point[m];U.position.setFromMatrixPosition(w.matrixWorld),U.position.applyMatrix4(v),m++}else if(w.isHemisphereLight){const U=r.hemi[g];U.direction.setFromMatrixPosition(w.matrixWorld),U.direction.transformDirection(v),g++}}}return{setup:u,setupView:f,state:r}}function UE(i,e){const t=new I$(i,e),n=[],r=[];function a(){n.length=0,r.length=0}function l(p){n.push(p)}function c(p){r.push(p)}function u(p){t.setup(n,p)}function f(p){t.setupView(n,p)}return{init:a,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:f,pushLight:l,pushShadow:c}}function D$(i,e){let t=new WeakMap;function n(a,l=0){const c=t.get(a);let u;return c===void 0?(u=new UE(i,e),t.set(a,[u])):l>=c.length?(u=new UE(i,e),c.push(u)):u=c[l],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class O$ extends nd{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rk,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U$ extends nd{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const N$=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F$=`uniform sampler2D shadow_pass;
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
}`;function B$(i,e,t){let n=new o1;const r=new Bt,a=new Bt,l=new Hn,c=new O$({depthPacking:Pk}),u=new U$,f={},d=t.maxTextureSize,p={[pa]:Ii,[Ii]:pa,[Ts]:Ts},_=new Ds({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Bt},radius:{value:4}},vertexShader:N$,fragmentShader:F$}),m=_.clone();m.defines.HORIZONTAL_PASS=1;const S=new uo;S.setAttribute("position",new ns(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Jr(S,_),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fb;let v=this.type;this.render=function(I,R,G){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||I.length===0)return;const $=i.getRenderTarget(),T=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(la),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ce=v!==ys&&this.type===ys,z=v===ys&&this.type!==ys;for(let j=0,K=I.length;j<K;j++){const ne=I[j],ie=ne.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ne,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);const ae=ie.getFrameExtents();if(r.multiply(ae),a.copy(ie.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(a.x=Math.floor(d/ae.x),r.x=a.x*ae.x,ie.mapSize.x=a.x),r.y>d&&(a.y=Math.floor(d/ae.y),r.y=a.y*ae.y,ie.mapSize.y=a.y)),ie.map===null||ce===!0||z===!0){const oe=this.type!==ys?{minFilter:_i,magFilter:_i}:{};ie.map!==null&&ie.map.dispose(),ie.map=new lo(r.x,r.y,oe),ie.map.texture.name=ne.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();const N=ie.getViewportCount();for(let oe=0;oe<N;oe++){const Re=ie.getViewport(oe);l.set(a.x*Re.x,a.y*Re.y,a.x*Re.z,a.y*Re.w),Y.viewport(l),ie.updateMatrices(ne,oe),n=ie.getFrustum(),w(R,G,ie.camera,ne,this.type)}ie.isPointLightShadow!==!0&&this.type===ys&&b(ie,G),ie.needsUpdate=!1}v=this.type,g.needsUpdate=!1,i.setRenderTarget($,T,O)};function b(I,R){const G=e.update(y);_.defines.VSM_SAMPLES!==I.blurSamples&&(_.defines.VSM_SAMPLES=I.blurSamples,m.defines.VSM_SAMPLES=I.blurSamples,_.needsUpdate=!0,m.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new lo(r.x,r.y)),_.uniforms.shadow_pass.value=I.map.texture,_.uniforms.resolution.value=I.mapSize,_.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(R,null,G,_,y,null),m.uniforms.shadow_pass.value=I.mapPass.texture,m.uniforms.resolution.value=I.mapSize,m.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(R,null,G,m,y,null)}function E(I,R,G,$){let T=null;const O=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)T=O;else if(T=G.isPointLight===!0?u:c,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const Y=T.uuid,ce=R.uuid;let z=f[Y];z===void 0&&(z={},f[Y]=z);let j=z[ce];j===void 0&&(j=T.clone(),z[ce]=j,R.addEventListener("dispose",U)),T=j}if(T.visible=R.visible,T.wireframe=R.wireframe,$===ys?T.side=R.shadowSide!==null?R.shadowSide:R.side:T.side=R.shadowSide!==null?R.shadowSide:p[R.side],T.alphaMap=R.alphaMap,T.alphaTest=R.alphaTest,T.map=R.map,T.clipShadows=R.clipShadows,T.clippingPlanes=R.clippingPlanes,T.clipIntersection=R.clipIntersection,T.displacementMap=R.displacementMap,T.displacementScale=R.displacementScale,T.displacementBias=R.displacementBias,T.wireframeLinewidth=R.wireframeLinewidth,T.linewidth=R.linewidth,G.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const Y=i.properties.get(T);Y.light=G}return T}function w(I,R,G,$,T){if(I.visible===!1)return;if(I.layers.test(R.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&T===ys)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const ce=e.update(I),z=I.material;if(Array.isArray(z)){const j=ce.groups;for(let K=0,ne=j.length;K<ne;K++){const ie=j[K],ae=z[ie.materialIndex];if(ae&&ae.visible){const N=E(I,ae,$,T);I.onBeforeShadow(i,I,R,G,ce,N,ie),i.renderBufferDirect(G,null,ce,N,I,ie),I.onAfterShadow(i,I,R,G,ce,N,ie)}}}else if(z.visible){const j=E(I,z,$,T);I.onBeforeShadow(i,I,R,G,ce,j,null),i.renderBufferDirect(G,null,ce,j,I,null),I.onAfterShadow(i,I,R,G,ce,j,null)}}const Y=I.children;for(let ce=0,z=Y.length;ce<z;ce++)w(Y[ce],R,G,$,T)}function U(I){I.target.removeEventListener("dispose",U);for(const G in f){const $=f[G],T=I.target.uuid;T in $&&($[T].dispose(),delete $[T])}}}function z$(i,e,t){const n=t.isWebGL2;function r(){let F=!1;const ve=new Hn;let xe=null;const Ne=new Hn(0,0,0,0);return{setMask:function(Ze){xe!==Ze&&!F&&(i.colorMask(Ze,Ze,Ze,Ze),xe=Ze)},setLocked:function(Ze){F=Ze},setClear:function(Ze,vt,Dt,qe,We){We===!0&&(Ze*=qe,vt*=qe,Dt*=qe),ve.set(Ze,vt,Dt,qe),Ne.equals(ve)===!1&&(i.clearColor(Ze,vt,Dt,qe),Ne.copy(ve))},reset:function(){F=!1,xe=null,Ne.set(-1,0,0,0)}}}function a(){let F=!1,ve=null,xe=null,Ne=null;return{setTest:function(Ze){Ze?Ae(i.DEPTH_TEST):_t(i.DEPTH_TEST)},setMask:function(Ze){ve!==Ze&&!F&&(i.depthMask(Ze),ve=Ze)},setFunc:function(Ze){if(xe!==Ze){switch(Ze){case ak:i.depthFunc(i.NEVER);break;case ok:i.depthFunc(i.ALWAYS);break;case lk:i.depthFunc(i.LESS);break;case Ih:i.depthFunc(i.LEQUAL);break;case ck:i.depthFunc(i.EQUAL);break;case uk:i.depthFunc(i.GEQUAL);break;case fk:i.depthFunc(i.GREATER);break;case hk:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Ze}},setLocked:function(Ze){F=Ze},setClear:function(Ze){Ne!==Ze&&(i.clearDepth(Ze),Ne=Ze)},reset:function(){F=!1,ve=null,xe=null,Ne=null}}}function l(){let F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,Dt=null,qe=null,We=null;return{setTest:function(Ke){F||(Ke?Ae(i.STENCIL_TEST):_t(i.STENCIL_TEST))},setMask:function(Ke){ve!==Ke&&!F&&(i.stencilMask(Ke),ve=Ke)},setFunc:function(Ke,ye,nt){(xe!==Ke||Ne!==ye||Ze!==nt)&&(i.stencilFunc(Ke,ye,nt),xe=Ke,Ne=ye,Ze=nt)},setOp:function(Ke,ye,nt){(vt!==Ke||Dt!==ye||qe!==nt)&&(i.stencilOp(Ke,ye,nt),vt=Ke,Dt=ye,qe=nt)},setLocked:function(Ke){F=Ke},setClear:function(Ke){We!==Ke&&(i.clearStencil(Ke),We=Ke)},reset:function(){F=!1,ve=null,xe=null,Ne=null,Ze=null,vt=null,Dt=null,qe=null,We=null}}}const c=new r,u=new a,f=new l,d=new WeakMap,p=new WeakMap;let _={},m={},S=new WeakMap,y=[],g=null,v=!1,b=null,E=null,w=null,U=null,I=null,R=null,G=null,$=new Yt(0,0,0),T=0,O=!1,Y=null,ce=null,z=null,j=null,K=null;const ne=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ae=0;const N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(N)[1]),ie=ae>=1):N.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),ie=ae>=2);let oe=null,Re={};const Je=i.getParameter(i.SCISSOR_BOX),te=i.getParameter(i.VIEWPORT),ue=new Hn().fromArray(Je),Te=new Hn().fromArray(te);function Ie(F,ve,xe,Ne){const Ze=new Uint8Array(4),vt=i.createTexture();i.bindTexture(F,vt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<xe;Dt++)n&&(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)?i.texImage3D(ve,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,Ze):i.texImage2D(ve+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ze);return vt}const Oe={};Oe[i.TEXTURE_2D]=Ie(i.TEXTURE_2D,i.TEXTURE_2D,1),Oe[i.TEXTURE_CUBE_MAP]=Ie(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Oe[i.TEXTURE_2D_ARRAY]=Ie(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Oe[i.TEXTURE_3D]=Ie(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ae(i.DEPTH_TEST),u.setFunc(Ih),et(!1),D(pS),Ae(i.CULL_FACE),Ue(la);function Ae(F){_[F]!==!0&&(i.enable(F),_[F]=!0)}function _t(F){_[F]!==!1&&(i.disable(F),_[F]=!1)}function $e(F,ve){return m[F]!==ve?(i.bindFramebuffer(F,ve),m[F]=ve,n&&(F===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=ve),F===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=ve)),!0):!1}function X(F,ve){let xe=y,Ne=!1;if(F)if(xe=S.get(ve),xe===void 0&&(xe=[],S.set(ve,xe)),F.isWebGLMultipleRenderTargets){const Ze=F.texture;if(xe.length!==Ze.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let vt=0,Dt=Ze.length;vt<Dt;vt++)xe[vt]=i.COLOR_ATTACHMENT0+vt;xe.length=Ze.length,Ne=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Ne=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Ne=!0);Ne&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function st(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Me={[Ba]:i.FUNC_ADD,[$G]:i.FUNC_SUBTRACT,[XG]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[vS]=i.MIN,Me[xS]=i.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Me[vS]=F.MIN_EXT,Me[xS]=F.MAX_EXT)}const ke={[qG]:i.ZERO,[YG]:i.ONE,[KG]:i.SRC_COLOR,[__]:i.SRC_ALPHA,[tk]:i.SRC_ALPHA_SATURATE,[QG]:i.DST_COLOR,[ZG]:i.DST_ALPHA,[jG]:i.ONE_MINUS_SRC_COLOR,[g_]:i.ONE_MINUS_SRC_ALPHA,[ek]:i.ONE_MINUS_DST_COLOR,[JG]:i.ONE_MINUS_DST_ALPHA,[nk]:i.CONSTANT_COLOR,[ik]:i.ONE_MINUS_CONSTANT_COLOR,[rk]:i.CONSTANT_ALPHA,[sk]:i.ONE_MINUS_CONSTANT_ALPHA};function Ue(F,ve,xe,Ne,Ze,vt,Dt,qe,We,Ke){if(F===la){v===!0&&(_t(i.BLEND),v=!1);return}if(v===!1&&(Ae(i.BLEND),v=!0),F!==WG){if(F!==b||Ke!==O){if((E!==Ba||I!==Ba)&&(i.blendEquation(i.FUNC_ADD),E=Ba,I=Ba),Ke)switch(F){case dl:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mS:i.blendFunc(i.ONE,i.ONE);break;case _S:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gS:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case dl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case mS:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case _S:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gS:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,U=null,R=null,G=null,$.set(0,0,0),T=0,b=F,O=Ke}return}Ze=Ze||ve,vt=vt||xe,Dt=Dt||Ne,(ve!==E||Ze!==I)&&(i.blendEquationSeparate(Me[ve],Me[Ze]),E=ve,I=Ze),(xe!==w||Ne!==U||vt!==R||Dt!==G)&&(i.blendFuncSeparate(ke[xe],ke[Ne],ke[vt],ke[Dt]),w=xe,U=Ne,R=vt,G=Dt),(qe.equals($)===!1||We!==T)&&(i.blendColor(qe.r,qe.g,qe.b,We),$.copy(qe),T=We),b=F,O=!1}function Z(F,ve){F.side===Ts?_t(i.CULL_FACE):Ae(i.CULL_FACE);let xe=F.side===Ii;ve&&(xe=!xe),et(xe),F.blending===dl&&F.transparent===!1?Ue(la):Ue(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),u.setFunc(F.depthFunc),u.setTest(F.depthTest),u.setMask(F.depthWrite),c.setMask(F.colorWrite);const Ne=F.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(F.stencilWriteMask),f.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),f.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),q(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):_t(i.SAMPLE_ALPHA_TO_COVERAGE)}function et(F){Y!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),Y=F)}function D(F){F!==GG?(Ae(i.CULL_FACE),F!==ce&&(F===pS?i.cullFace(i.BACK):F===kG?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_t(i.CULL_FACE),ce=F}function A(F){F!==z&&(ie&&i.lineWidth(F),z=F)}function q(F,ve,xe){F?(Ae(i.POLYGON_OFFSET_FILL),(j!==ve||K!==xe)&&(i.polygonOffset(ve,xe),j=ve,K=xe)):_t(i.POLYGON_OFFSET_FILL)}function me(F){F?Ae(i.SCISSOR_TEST):_t(i.SCISSOR_TEST)}function de(F){F===void 0&&(F=i.TEXTURE0+ne-1),oe!==F&&(i.activeTexture(F),oe=F)}function ge(F,ve,xe){xe===void 0&&(oe===null?xe=i.TEXTURE0+ne-1:xe=oe);let Ne=Re[xe];Ne===void 0&&(Ne={type:void 0,texture:void 0},Re[xe]=Ne),(Ne.type!==F||Ne.texture!==ve)&&(oe!==xe&&(i.activeTexture(xe),oe=xe),i.bindTexture(F,ve||Oe[F]),Ne.type=F,Ne.texture=ve)}function we(){const F=Re[oe];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function be(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function He(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xe(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ve(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(F){ue.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),ue.copy(F))}function gt(F){Te.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Te.copy(F))}function It(F,ve){let xe=p.get(ve);xe===void 0&&(xe=new WeakMap,p.set(ve,xe));let Ne=xe.get(F);Ne===void 0&&(Ne=i.getUniformBlockIndex(ve,F.name),xe.set(F,Ne))}function Pe(F,ve){const Ne=p.get(ve).get(F);d.get(ve)!==Ne&&(i.uniformBlockBinding(ve,Ne,F.__bindingPointIndex),d.set(ve,Ne))}function Ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},oe=null,Re={},m={},S=new WeakMap,y=[],g=null,v=!1,b=null,E=null,w=null,U=null,I=null,R=null,G=null,$=new Yt(0,0,0),T=0,O=!1,Y=null,ce=null,z=null,j=null,K=null,ue.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),f.reset()}return{buffers:{color:c,depth:u,stencil:f},enable:Ae,disable:_t,bindFramebuffer:$e,drawBuffers:X,useProgram:st,setBlending:Ue,setMaterial:Z,setFlipSided:et,setCullFace:D,setLineWidth:A,setPolygonOffset:q,setScissorTest:me,activeTexture:de,bindTexture:ge,unbindTexture:we,compressedTexImage2D:be,compressedTexImage3D:Se,texImage2D:Ve,texImage3D:De,updateUBOMapping:It,uniformBlockBinding:Pe,texStorage2D:Xe,texStorage3D:at,texSubImage2D:He,texSubImage3D:tt,compressedTexSubImage2D:pe,compressedTexSubImage3D:bt,scissor:ot,viewport:gt,reset:Ct}}function H$(i,e,t,n,r,a,l){const c=r.isWebGL2,u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new WeakMap;let p;const _=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(D,A){return m?new OffscreenCanvas(D,A):Kc("canvas")}function y(D,A,q,me){let de=1;if((D.width>me||D.height>me)&&(de=me/Math.max(D.width,D.height)),de<1||A===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const ge=A?T_:Math.floor,we=ge(de*D.width),be=ge(de*D.height);p===void 0&&(p=S(we,be));const Se=q?S(we,be):p;return Se.width=we,Se.height=be,Se.getContext("2d").drawImage(D,0,0,we,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+we+"x"+be+")."),Se}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function g(D){return KS(D.width)&&KS(D.height)}function v(D){return c?!1:D.wrapS!==Ir||D.wrapT!==Ir||D.minFilter!==_i&&D.minFilter!==An}function b(D,A){return D.generateMipmaps&&A&&D.minFilter!==_i&&D.minFilter!==An}function E(D){i.generateMipmap(D)}function w(D,A,q,me,de=!1){if(c===!1)return A;if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ge=A;if(A===i.RED&&(q===i.FLOAT&&(ge=i.R32F),q===i.HALF_FLOAT&&(ge=i.R16F),q===i.UNSIGNED_BYTE&&(ge=i.R8)),A===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ge=i.R8UI),q===i.UNSIGNED_SHORT&&(ge=i.R16UI),q===i.UNSIGNED_INT&&(ge=i.R32UI),q===i.BYTE&&(ge=i.R8I),q===i.SHORT&&(ge=i.R16I),q===i.INT&&(ge=i.R32I)),A===i.RG&&(q===i.FLOAT&&(ge=i.RG32F),q===i.HALF_FLOAT&&(ge=i.RG16F),q===i.UNSIGNED_BYTE&&(ge=i.RG8)),A===i.RGBA){const we=de?Dh:qt.getTransfer(me);q===i.FLOAT&&(ge=i.RGBA32F),q===i.HALF_FLOAT&&(ge=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ge=we===sn?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function U(D,A,q){return b(D,q)===!0||D.isFramebufferTexture&&D.minFilter!==_i&&D.minFilter!==An?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function I(D){return D===_i||D===yS||D===dc?i.NEAREST:i.LINEAR}function R(D){const A=D.target;A.removeEventListener("dispose",R),$(A),A.isVideoTexture&&d.delete(A)}function G(D){const A=D.target;A.removeEventListener("dispose",G),O(A)}function $(D){const A=n.get(D);if(A.__webglInit===void 0)return;const q=D.source,me=_.get(q);if(me){const de=me[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&T(D),Object.keys(me).length===0&&_.delete(q)}n.remove(D)}function T(D){const A=n.get(D);i.deleteTexture(A.__webglTexture);const q=D.source,me=_.get(q);delete me[A.__cacheKey],l.memory.textures--}function O(D){const A=D.texture,q=n.get(D),me=n.get(A);if(me.__webglTexture!==void 0&&(i.deleteTexture(me.__webglTexture),l.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(q.__webglFramebuffer[de]))for(let ge=0;ge<q.__webglFramebuffer[de].length;ge++)i.deleteFramebuffer(q.__webglFramebuffer[de][ge]);else i.deleteFramebuffer(q.__webglFramebuffer[de]);q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer[de])}else{if(Array.isArray(q.__webglFramebuffer))for(let de=0;de<q.__webglFramebuffer.length;de++)i.deleteFramebuffer(q.__webglFramebuffer[de]);else i.deleteFramebuffer(q.__webglFramebuffer);if(q.__webglDepthbuffer&&i.deleteRenderbuffer(q.__webglDepthbuffer),q.__webglMultisampledFramebuffer&&i.deleteFramebuffer(q.__webglMultisampledFramebuffer),q.__webglColorRenderbuffer)for(let de=0;de<q.__webglColorRenderbuffer.length;de++)q.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(q.__webglColorRenderbuffer[de]);q.__webglDepthRenderbuffer&&i.deleteRenderbuffer(q.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let de=0,ge=A.length;de<ge;de++){const we=n.get(A[de]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),l.memory.textures--),n.remove(A[de])}n.remove(A),n.remove(D)}let Y=0;function ce(){Y=0}function z(){const D=Y;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),Y+=1,D}function j(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function K(D,A){const q=n.get(D);if(D.isVideoTexture&&Z(D),D.isRenderTargetTexture===!1&&D.version>0&&q.__version!==D.version){const me=D.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(q,D,A);return}}t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+A)}function ne(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){ue(q,D,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+A)}function ie(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){ue(q,D,A);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+A)}function ae(D,A){const q=n.get(D);if(D.version>0&&q.__version!==D.version){Te(q,D,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+A)}const N={[y_]:i.REPEAT,[Ir]:i.CLAMP_TO_EDGE,[S_]:i.MIRRORED_REPEAT},oe={[_i]:i.NEAREST,[yS]:i.NEAREST_MIPMAP_NEAREST,[dc]:i.NEAREST_MIPMAP_LINEAR,[An]:i.LINEAR,[tm]:i.LINEAR_MIPMAP_NEAREST,[ka]:i.LINEAR_MIPMAP_LINEAR},Re={[Dk]:i.NEVER,[zk]:i.ALWAYS,[Ok]:i.LESS,[Yb]:i.LEQUAL,[Uk]:i.EQUAL,[Bk]:i.GEQUAL,[Nk]:i.GREATER,[Fk]:i.NOTEQUAL};function Je(D,A,q){if(A.type===bs&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===An||A.magFilter===tm||A.magFilter===dc||A.magFilter===ka||A.minFilter===An||A.minFilter===tm||A.minFilter===dc||A.minFilter===ka)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),q?(i.texParameteri(D,i.TEXTURE_WRAP_S,N[A.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,N[A.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,N[A.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,oe[A.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,oe[A.minFilter])):(i.texParameteri(D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(A.wrapS!==Ir||A.wrapT!==Ir)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(D,i.TEXTURE_MAG_FILTER,I(A.magFilter)),i.texParameteri(D,i.TEXTURE_MIN_FILTER,I(A.minFilter)),A.minFilter!==_i&&A.minFilter!==An&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),A.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Re[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const me=e.get("EXT_texture_filter_anisotropic");if(A.magFilter===_i||A.minFilter!==dc&&A.minFilter!==ka||A.type===bs&&e.has("OES_texture_float_linear")===!1||c===!1&&A.type===Yc&&e.has("OES_texture_half_float_linear")===!1)return;(A.anisotropy>1||n.get(A).__currentAnisotropy)&&(i.texParameterf(D,me.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy)}}function te(D,A){let q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",R));const me=A.source;let de=_.get(me);de===void 0&&(de={},_.set(me,de));const ge=j(A);if(ge!==D.__cacheKey){de[ge]===void 0&&(de[ge]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,q=!0),de[ge].usedTimes++;const we=de[D.__cacheKey];we!==void 0&&(de[D.__cacheKey].usedTimes--,we.usedTimes===0&&T(A)),D.__cacheKey=ge,D.__webglTexture=de[ge].texture}return q}function ue(D,A,q){let me=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(me=i.TEXTURE_3D);const de=te(D,A),ge=A.source;t.bindTexture(me,D.__webglTexture,i.TEXTURE0+q);const we=n.get(ge);if(ge.version!==we.__version||de===!0){t.activeTexture(i.TEXTURE0+q);const be=qt.getPrimaries(qt.workingColorSpace),Se=A.colorSpace===mr?null:qt.getPrimaries(A.colorSpace),He=A.colorSpace===mr||be===Se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);const tt=v(A)&&g(A.image)===!1;let pe=y(A.image,tt,!1,r.maxTextureSize);pe=et(A,pe);const bt=g(pe)||c,Xe=a.convert(A.format,A.colorSpace);let at=a.convert(A.type),Ve=w(A.internalFormat,Xe,at,A.colorSpace,A.isVideoTexture);Je(me,A,bt);let De;const ot=A.mipmaps,gt=c&&A.isVideoTexture!==!0&&Ve!==Xb,It=we.__version===void 0||de===!0,Pe=ge.dataReady,Ct=U(A,pe,bt);if(A.isDepthTexture)Ve=i.DEPTH_COMPONENT,c?A.type===bs?Ve=i.DEPTH_COMPONENT32F:A.type===ra?Ve=i.DEPTH_COMPONENT24:A.type===Za?Ve=i.DEPTH24_STENCIL8:Ve=i.DEPTH_COMPONENT16:A.type===bs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),A.format===Ja&&Ve===i.DEPTH_COMPONENT&&A.type!==Ug&&A.type!==ra&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),A.type=ra,at=a.convert(A.type)),A.format===wl&&Ve===i.DEPTH_COMPONENT&&(Ve=i.DEPTH_STENCIL,A.type!==Za&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),A.type=Za,at=a.convert(A.type))),It&&(gt?t.texStorage2D(i.TEXTURE_2D,1,Ve,pe.width,pe.height):t.texImage2D(i.TEXTURE_2D,0,Ve,pe.width,pe.height,0,Xe,at,null));else if(A.isDataTexture)if(ot.length>0&&bt){gt&&It&&t.texStorage2D(i.TEXTURE_2D,Ct,Ve,ot[0].width,ot[0].height);for(let F=0,ve=ot.length;F<ve;F++)De=ot[F],gt?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,De.width,De.height,Xe,at,De.data):t.texImage2D(i.TEXTURE_2D,F,Ve,De.width,De.height,0,Xe,at,De.data);A.generateMipmaps=!1}else gt?(It&&t.texStorage2D(i.TEXTURE_2D,Ct,Ve,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe.width,pe.height,Xe,at,pe.data)):t.texImage2D(i.TEXTURE_2D,0,Ve,pe.width,pe.height,0,Xe,at,pe.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){gt&&It&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ve,ot[0].width,ot[0].height,pe.depth);for(let F=0,ve=ot.length;F<ve;F++)De=ot[F],A.format!==Dr?Xe!==null?gt?Pe&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,De.width,De.height,pe.depth,Xe,De.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,F,Ve,De.width,De.height,pe.depth,0,De.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,F,0,0,0,De.width,De.height,pe.depth,Xe,at,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,F,Ve,De.width,De.height,pe.depth,0,Xe,at,De.data)}else{gt&&It&&t.texStorage2D(i.TEXTURE_2D,Ct,Ve,ot[0].width,ot[0].height);for(let F=0,ve=ot.length;F<ve;F++)De=ot[F],A.format!==Dr?Xe!==null?gt?Pe&&t.compressedTexSubImage2D(i.TEXTURE_2D,F,0,0,De.width,De.height,Xe,De.data):t.compressedTexImage2D(i.TEXTURE_2D,F,Ve,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):gt?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,De.width,De.height,Xe,at,De.data):t.texImage2D(i.TEXTURE_2D,F,Ve,De.width,De.height,0,Xe,at,De.data)}else if(A.isDataArrayTexture)gt?(It&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,Ve,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Xe,at,pe.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ve,pe.width,pe.height,pe.depth,0,Xe,at,pe.data);else if(A.isData3DTexture)gt?(It&&t.texStorage3D(i.TEXTURE_3D,Ct,Ve,pe.width,pe.height,pe.depth),Pe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Xe,at,pe.data)):t.texImage3D(i.TEXTURE_3D,0,Ve,pe.width,pe.height,pe.depth,0,Xe,at,pe.data);else if(A.isFramebufferTexture){if(It)if(gt)t.texStorage2D(i.TEXTURE_2D,Ct,Ve,pe.width,pe.height);else{let F=pe.width,ve=pe.height;for(let xe=0;xe<Ct;xe++)t.texImage2D(i.TEXTURE_2D,xe,Ve,F,ve,0,Xe,at,null),F>>=1,ve>>=1}}else if(ot.length>0&&bt){gt&&It&&t.texStorage2D(i.TEXTURE_2D,Ct,Ve,ot[0].width,ot[0].height);for(let F=0,ve=ot.length;F<ve;F++)De=ot[F],gt?Pe&&t.texSubImage2D(i.TEXTURE_2D,F,0,0,Xe,at,De):t.texImage2D(i.TEXTURE_2D,F,Ve,Xe,at,De);A.generateMipmaps=!1}else gt?(It&&t.texStorage2D(i.TEXTURE_2D,Ct,Ve,pe.width,pe.height),Pe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Xe,at,pe)):t.texImage2D(i.TEXTURE_2D,0,Ve,Xe,at,pe);b(A,bt)&&E(me),we.__version=ge.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Te(D,A,q){if(A.image.length!==6)return;const me=te(D,A),de=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+q);const ge=n.get(de);if(de.version!==ge.__version||me===!0){t.activeTexture(i.TEXTURE0+q);const we=qt.getPrimaries(qt.workingColorSpace),be=A.colorSpace===mr?null:qt.getPrimaries(A.colorSpace),Se=A.colorSpace===mr||we===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const He=A.isCompressedTexture||A.image[0].isCompressedTexture,tt=A.image[0]&&A.image[0].isDataTexture,pe=[];for(let F=0;F<6;F++)!He&&!tt?pe[F]=y(A.image[F],!1,!0,r.maxCubemapSize):pe[F]=tt?A.image[F].image:A.image[F],pe[F]=et(A,pe[F]);const bt=pe[0],Xe=g(bt)||c,at=a.convert(A.format,A.colorSpace),Ve=a.convert(A.type),De=w(A.internalFormat,at,Ve,A.colorSpace),ot=c&&A.isVideoTexture!==!0,gt=ge.__version===void 0||me===!0,It=de.dataReady;let Pe=U(A,bt,Xe);Je(i.TEXTURE_CUBE_MAP,A,Xe);let Ct;if(He){ot&&gt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,De,bt.width,bt.height);for(let F=0;F<6;F++){Ct=pe[F].mipmaps;for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];A.format!==Dr?at!==null?ot?It&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,at,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,De,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?It&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,0,0,xe.width,xe.height,at,Ve,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve,De,xe.width,xe.height,0,at,Ve,xe.data)}}}else{Ct=A.mipmaps,ot&&gt&&(Ct.length>0&&Pe++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,De,pe[0].width,pe[0].height));for(let F=0;F<6;F++)if(tt){ot?It&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,pe[F].width,pe[F].height,at,Ve,pe[F].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,De,pe[F].width,pe[F].height,0,at,Ve,pe[F].data);for(let ve=0;ve<Ct.length;ve++){const Ne=Ct[ve].image[F].image;ot?It&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,Ne.width,Ne.height,at,Ve,Ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,De,Ne.width,Ne.height,0,at,Ve,Ne.data)}}else{ot?It&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,at,Ve,pe[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,De,at,Ve,pe[F]);for(let ve=0;ve<Ct.length;ve++){const xe=Ct[ve];ot?It&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,0,0,at,Ve,xe.image[F]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve+1,De,at,Ve,xe.image[F])}}}b(A,Xe)&&E(i.TEXTURE_CUBE_MAP),ge.__version=de.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function Ie(D,A,q,me,de,ge){const we=a.convert(q.format,q.colorSpace),be=a.convert(q.type),Se=w(q.internalFormat,we,be,q.colorSpace);if(!n.get(A).__hasExternalTextures){const tt=Math.max(1,A.width>>ge),pe=Math.max(1,A.height>>ge);de===i.TEXTURE_3D||de===i.TEXTURE_2D_ARRAY?t.texImage3D(de,ge,Se,tt,pe,A.depth,0,we,be,null):t.texImage2D(de,ge,Se,tt,pe,0,we,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Ue(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,de,n.get(q).__webglTexture,0,ke(A)):(de===i.TEXTURE_2D||de>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,de,n.get(q).__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(D,A,q){if(i.bindRenderbuffer(i.RENDERBUFFER,D),A.depthBuffer&&!A.stencilBuffer){let me=c===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(q||Ue(A)){const de=A.depthTexture;de&&de.isDepthTexture&&(de.type===bs?me=i.DEPTH_COMPONENT32F:de.type===ra&&(me=i.DEPTH_COMPONENT24));const ge=ke(A);Ue(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ge,me,A.width,A.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,me,A.width,A.height)}else i.renderbufferStorage(i.RENDERBUFFER,me,A.width,A.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,D)}else if(A.depthBuffer&&A.stencilBuffer){const me=ke(A);q&&Ue(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,A.width,A.height):Ue(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,i.DEPTH24_STENCIL8,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,D)}else{const me=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let de=0;de<me.length;de++){const ge=me[de],we=a.convert(ge.format,ge.colorSpace),be=a.convert(ge.type),Se=w(ge.internalFormat,we,be,ge.colorSpace),He=ke(A);q&&Ue(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Se,A.width,A.height):Ue(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,Se,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Se,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ae(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),K(A.depthTexture,0);const me=n.get(A.depthTexture).__webglTexture,de=ke(A);if(A.depthTexture.format===Ja)Ue(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,me,0);else if(A.depthTexture.format===wl)Ue(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0,de):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function _t(D){const A=n.get(D),q=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(A.__webglFramebuffer,D)}else if(q){A.__webglDepthbuffer=[];for(let me=0;me<6;me++)t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[me]),A.__webglDepthbuffer[me]=i.createRenderbuffer(),Oe(A.__webglDepthbuffer[me],D,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=i.createRenderbuffer(),Oe(A.__webglDepthbuffer,D,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(D,A,q){const me=n.get(D);A!==void 0&&Ie(me.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&_t(D)}function X(D){const A=D.texture,q=n.get(D),me=n.get(A);D.addEventListener("dispose",G),D.isWebGLMultipleRenderTargets!==!0&&(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=A.version,l.memory.textures++);const de=D.isWebGLCubeRenderTarget===!0,ge=D.isWebGLMultipleRenderTargets===!0,we=g(D)||c;if(de){q.__webglFramebuffer=[];for(let be=0;be<6;be++)if(c&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[be]=[];for(let Se=0;Se<A.mipmaps.length;Se++)q.__webglFramebuffer[be][Se]=i.createFramebuffer()}else q.__webglFramebuffer[be]=i.createFramebuffer()}else{if(c&&A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let be=0;be<A.mipmaps.length;be++)q.__webglFramebuffer[be]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(ge)if(r.drawBuffers){const be=D.texture;for(let Se=0,He=be.length;Se<He;Se++){const tt=n.get(be[Se]);tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture(),l.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&D.samples>0&&Ue(D)===!1){const be=ge?A:[A];q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Se=0;Se<be.length;Se++){const He=be[Se];q.__webglColorRenderbuffer[Se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Se]);const tt=a.convert(He.format,He.colorSpace),pe=a.convert(He.type),bt=w(He.internalFormat,tt,pe,He.colorSpace,D.isXRRenderTarget===!0),Xe=ke(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,bt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,q.__webglColorRenderbuffer[Se])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(q.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Je(i.TEXTURE_CUBE_MAP,A,we);for(let be=0;be<6;be++)if(c&&A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)Ie(q.__webglFramebuffer[be][Se],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,Se);else Ie(q.__webglFramebuffer[be],D,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);b(A,we)&&E(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){const be=D.texture;for(let Se=0,He=be.length;Se<He;Se++){const tt=be[Se],pe=n.get(tt);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Je(i.TEXTURE_2D,tt,we),Ie(q.__webglFramebuffer,D,tt,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,0),b(tt,we)&&E(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(c?be=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(be,me.__webglTexture),Je(be,A,we),c&&A.mipmaps&&A.mipmaps.length>0)for(let Se=0;Se<A.mipmaps.length;Se++)Ie(q.__webglFramebuffer[Se],D,A,i.COLOR_ATTACHMENT0,be,Se);else Ie(q.__webglFramebuffer,D,A,i.COLOR_ATTACHMENT0,be,0);b(A,we)&&E(be),t.unbindTexture()}D.depthBuffer&&_t(D)}function st(D){const A=g(D)||c,q=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let me=0,de=q.length;me<de;me++){const ge=q[me];if(b(ge,A)){const we=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(ge).__webglTexture;t.bindTexture(we,be),E(we),t.unbindTexture()}}}function Me(D){if(c&&D.samples>0&&Ue(D)===!1){const A=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],q=D.width,me=D.height;let de=i.COLOR_BUFFER_BIT;const ge=[],we=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(D),Se=D.isWebGLMultipleRenderTargets===!0;if(Se)for(let He=0;He<A.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let He=0;He<A.length;He++){ge.push(i.COLOR_ATTACHMENT0+He),D.depthBuffer&&ge.push(we);const tt=be.__ignoreDepthValues!==void 0?be.__ignoreDepthValues:!1;if(tt===!1&&(D.depthBuffer&&(de|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&(de|=i.STENCIL_BUFFER_BIT)),Se&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[He]),tt===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[we]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[we])),Se){const pe=n.get(A[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,q,me,0,0,q,me,de,i.NEAREST),f&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ge)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Se)for(let He=0;He<A.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,be.__webglColorRenderbuffer[He]);const tt=n.get(A[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,tt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}}function ke(D){return Math.min(r.maxSamples,D.samples)}function Ue(D){const A=n.get(D);return c&&D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Z(D){const A=l.render.frame;d.get(D)!==A&&(d.set(D,A),D.update())}function et(D,A){const q=D.colorSpace,me=D.format,de=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===E_||q!==Is&&q!==mr&&(qt.getTransfer(q)===sn?c===!1?e.has("EXT_sRGB")===!0&&me===Dr?(D.format=E_,D.minFilter=An,D.generateMipmaps=!1):A=jb.sRGBToLinear(A):(me!==Dr||de!==ua)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),A}this.allocateTextureUnit=z,this.resetTextureUnits=ce,this.setTexture2D=K,this.setTexture2DArray=ne,this.setTexture3D=ie,this.setTextureCube=ae,this.rebindTextures=$e,this.setupRenderTarget=X,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ue}function G$(i,e,t){const n=t.isWebGL2;function r(a,l=mr){let c;const u=qt.getTransfer(l);if(a===ua)return i.UNSIGNED_BYTE;if(a===Gb)return i.UNSIGNED_SHORT_4_4_4_4;if(a===kb)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Sk)return i.BYTE;if(a===Ek)return i.SHORT;if(a===Ug)return i.UNSIGNED_SHORT;if(a===Hb)return i.INT;if(a===ra)return i.UNSIGNED_INT;if(a===bs)return i.FLOAT;if(a===Yc)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(a===Mk)return i.ALPHA;if(a===Dr)return i.RGBA;if(a===Tk)return i.LUMINANCE;if(a===bk)return i.LUMINANCE_ALPHA;if(a===Ja)return i.DEPTH_COMPONENT;if(a===wl)return i.DEPTH_STENCIL;if(a===E_)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(a===wk)return i.RED;if(a===Vb)return i.RED_INTEGER;if(a===Ak)return i.RG;if(a===Wb)return i.RG_INTEGER;if(a===$b)return i.RGBA_INTEGER;if(a===nm||a===im||a===rm||a===sm)if(u===sn)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===nm)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===im)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===rm)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===sm)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===nm)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===im)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===rm)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===sm)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===SS||a===ES||a===MS||a===TS)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===SS)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===ES)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===MS)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===TS)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Xb)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===bS||a===wS)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===bS)return u===sn?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===wS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===AS||a===CS||a===RS||a===PS||a===LS||a===IS||a===DS||a===OS||a===US||a===NS||a===FS||a===BS||a===zS||a===HS)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===AS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===CS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===RS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===PS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===LS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===IS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===DS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===OS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===US)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===NS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===FS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===BS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===zS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===HS)return u===sn?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===am||a===GS||a===kS)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===am)return u===sn?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===GS)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===kS)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ck||a===VS||a===WS||a===$S)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===am)return c.COMPRESSED_RED_RGTC1_EXT;if(a===VS)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===WS)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===$S)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Za?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[a]!==void 0?i[a]:null}return{convert:r}}class k$ extends pr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yf extends ji{constructor(){super(),this.isGroup=!0,this.type="Group"}}const V$={type:"move"};class Lm{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new se,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new se),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new se,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new se),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,l=null;const c=this._targetRay,u=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const y of e.hand.values()){const g=t.getJointPose(y,n),v=this._getHandJoint(f,y);g!==null&&(v.matrix.fromArray(g.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=g.radius),v.visible=g!==null}const d=f.joints["index-finger-tip"],p=f.joints["thumb-tip"],_=d.position.distanceTo(p.position),m=.02,S=.005;f.inputState.pinching&&_>m+S?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&_<=m-S&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(V$)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=a!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yf;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const W$=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$$=`
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

}`;class X${constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new ai,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Ds({extensions:{fragDepth:!0},vertexShader:W$,fragmentShader:$$,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jr(new lu(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class q$ extends Nl{constructor(e,t){super();const n=this;let r=null,a=1,l=null,c="local-floor",u=1,f=null,d=null,p=null,_=null,m=null,S=null;const y=new X$,g=t.getContextAttributes();let v=null,b=null;const E=[],w=[],U=new Bt;let I=null;const R=new pr;R.layers.enable(1),R.viewport=new Hn;const G=new pr;G.layers.enable(2),G.viewport=new Hn;const $=[R,G],T=new k$;T.layers.enable(1),T.layers.enable(2);let O=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ue=E[te];return ue===void 0&&(ue=new Lm,E[te]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(te){let ue=E[te];return ue===void 0&&(ue=new Lm,E[te]=ue),ue.getGripSpace()},this.getHand=function(te){let ue=E[te];return ue===void 0&&(ue=new Lm,E[te]=ue),ue.getHandSpace()};function ce(te){const ue=w.indexOf(te.inputSource);if(ue===-1)return;const Te=E[ue];Te!==void 0&&(Te.update(te.inputSource,te.frame,f||l),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",j);for(let te=0;te<E.length;te++){const ue=w[te];ue!==null&&(w[te]=null,E[te].disconnect(ue))}O=null,Y=null,y.reset(),e.setRenderTarget(v),m=null,_=null,p=null,r=null,b=null,Je.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){c=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(te){f=te},this.getBaseLayer=function(){return _!==null?_:m},this.getBinding=function(){return p},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",z),r.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:a};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),b=new lo(m.framebufferWidth,m.framebufferHeight,{format:Dr,type:ua,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ue=null,Te=null,Ie=null;g.depth&&(Ie=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=g.stencil?wl:Ja,Te=g.stencil?Za:ra);const Oe={colorFormat:t.RGBA8,depthFormat:Ie,scaleFactor:a};p=new XRWebGLBinding(r,t),_=p.createProjectionLayer(Oe),r.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new lo(_.textureWidth,_.textureHeight,{format:Dr,type:ua,depthTexture:new c1(_.textureWidth,_.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Ae=e.properties.get(b);Ae.__ignoreDepthValues=_.ignoreDepthValues}b.isXRRenderTarget=!0,this.setFoveation(u),f=null,l=await r.requestReferenceSpace(c),Je.setContext(r),Je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function j(te){for(let ue=0;ue<te.removed.length;ue++){const Te=te.removed[ue],Ie=w.indexOf(Te);Ie>=0&&(w[Ie]=null,E[Ie].disconnect(Te))}for(let ue=0;ue<te.added.length;ue++){const Te=te.added[ue];let Ie=w.indexOf(Te);if(Ie===-1){for(let Ae=0;Ae<E.length;Ae++)if(Ae>=w.length){w.push(Te),Ie=Ae;break}else if(w[Ae]===null){w[Ae]=Te,Ie=Ae;break}if(Ie===-1)break}const Oe=E[Ie];Oe&&Oe.connect(Te)}}const K=new se,ne=new se;function ie(te,ue,Te){K.setFromMatrixPosition(ue.matrixWorld),ne.setFromMatrixPosition(Te.matrixWorld);const Ie=K.distanceTo(ne),Oe=ue.projectionMatrix.elements,Ae=Te.projectionMatrix.elements,_t=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),X=(Oe[9]+1)/Oe[5],st=(Oe[9]-1)/Oe[5],Me=(Oe[8]-1)/Oe[0],ke=(Ae[8]+1)/Ae[0],Ue=_t*Me,Z=_t*ke,et=Ie/(-Me+ke),D=et*-Me;ue.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(D),te.translateZ(et),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();const A=_t+et,q=$e+et,me=Ue-D,de=Z+(Ie-D),ge=X*$e/q*A,we=st*$e/q*A;te.projectionMatrix.makePerspective(me,de,ge,we,A,q),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function ae(te,ue){ue===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ue.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;y.texture!==null&&(te.near=y.depthNear,te.far=y.depthFar),T.near=G.near=R.near=te.near,T.far=G.far=R.far=te.far,(O!==T.near||Y!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),O=T.near,Y=T.far,R.near=O,R.far=Y,G.near=O,G.far=Y,R.updateProjectionMatrix(),G.updateProjectionMatrix(),te.updateProjectionMatrix());const ue=te.parent,Te=T.cameras;ae(T,ue);for(let Ie=0;Ie<Te.length;Ie++)ae(Te[Ie],ue);Te.length===2?ie(T,R,G):T.projectionMatrix.copy(R.projectionMatrix),N(te,T,ue)};function N(te,ue,Te){Te===null?te.matrix.copy(ue.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(ue.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ue.projectionMatrix),te.projectionMatrixInverse.copy(ue.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=M_*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(_===null&&m===null))return u},this.setFoveation=function(te){u=te,_!==null&&(_.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return y.texture!==null};let oe=null;function Re(te,ue){if(d=ue.getViewerPose(f||l),S=ue,d!==null){const Te=d.views;m!==null&&(e.setRenderTargetFramebuffer(b,m.framebuffer),e.setRenderTarget(b));let Ie=!1;Te.length!==T.cameras.length&&(T.cameras.length=0,Ie=!0);for(let Ae=0;Ae<Te.length;Ae++){const _t=Te[Ae];let $e=null;if(m!==null)$e=m.getViewport(_t);else{const st=p.getViewSubImage(_,_t);$e=st.viewport,Ae===0&&(e.setRenderTargetTextures(b,st.colorTexture,_.ignoreDepthValues?void 0:st.depthStencilTexture),e.setRenderTarget(b))}let X=$[Ae];X===void 0&&(X=new pr,X.layers.enable(Ae),X.viewport=new Hn,$[Ae]=X),X.matrix.fromArray(_t.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(_t.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set($e.x,$e.y,$e.width,$e.height),Ae===0&&(T.matrix.copy(X.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),Ie===!0&&T.cameras.push(X)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")){const Ae=p.getDepthInformation(Te[0]);Ae&&Ae.isValid&&Ae.texture&&y.init(e,Ae,r.renderState)}}for(let Te=0;Te<E.length;Te++){const Ie=w[Te],Oe=E[Te];Ie!==null&&Oe!==void 0&&Oe.update(Ie,ue,f||l)}y.render(e,T),oe&&oe(te,ue),ue.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ue}),S=null}const Je=new l1;Je.setAnimationLoop(Re),this.setAnimationLoop=function(te){oe=te},this.dispose=function(){}}}function Y$(i,e){function t(g,v){g.matrixAutoUpdate===!0&&g.updateMatrix(),v.value.copy(g.matrix)}function n(g,v){v.color.getRGB(g.fogColor.value,r1(i)),v.isFog?(g.fogNear.value=v.near,g.fogFar.value=v.far):v.isFogExp2&&(g.fogDensity.value=v.density)}function r(g,v,b,E,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?a(g,v):v.isMeshToonMaterial?(a(g,v),p(g,v)):v.isMeshPhongMaterial?(a(g,v),d(g,v)):v.isMeshStandardMaterial?(a(g,v),_(g,v),v.isMeshPhysicalMaterial&&m(g,v,w)):v.isMeshMatcapMaterial?(a(g,v),S(g,v)):v.isMeshDepthMaterial?a(g,v):v.isMeshDistanceMaterial?(a(g,v),y(g,v)):v.isMeshNormalMaterial?a(g,v):v.isLineBasicMaterial?(l(g,v),v.isLineDashedMaterial&&c(g,v)):v.isPointsMaterial?u(g,v,b,E):v.isSpriteMaterial?f(g,v):v.isShadowMaterial?(g.color.value.copy(v.color),g.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function a(g,v){g.opacity.value=v.opacity,v.color&&g.diffuse.value.copy(v.color),v.emissive&&g.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.bumpMap&&(g.bumpMap.value=v.bumpMap,t(v.bumpMap,g.bumpMapTransform),g.bumpScale.value=v.bumpScale,v.side===Ii&&(g.bumpScale.value*=-1)),v.normalMap&&(g.normalMap.value=v.normalMap,t(v.normalMap,g.normalMapTransform),g.normalScale.value.copy(v.normalScale),v.side===Ii&&g.normalScale.value.negate()),v.displacementMap&&(g.displacementMap.value=v.displacementMap,t(v.displacementMap,g.displacementMapTransform),g.displacementScale.value=v.displacementScale,g.displacementBias.value=v.displacementBias),v.emissiveMap&&(g.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,g.emissiveMapTransform)),v.specularMap&&(g.specularMap.value=v.specularMap,t(v.specularMap,g.specularMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest);const b=e.get(v).envMap;if(b&&(g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=v.reflectivity,g.ior.value=v.ior,g.refractionRatio.value=v.refractionRatio),v.lightMap){g.lightMap.value=v.lightMap;const E=i._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=v.lightMapIntensity*E,t(v.lightMap,g.lightMapTransform)}v.aoMap&&(g.aoMap.value=v.aoMap,g.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,g.aoMapTransform))}function l(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform))}function c(g,v){g.dashSize.value=v.dashSize,g.totalSize.value=v.dashSize+v.gapSize,g.scale.value=v.scale}function u(g,v,b,E){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.size.value=v.size*b,g.scale.value=E*.5,v.map&&(g.map.value=v.map,t(v.map,g.uvTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function f(g,v){g.diffuse.value.copy(v.color),g.opacity.value=v.opacity,g.rotation.value=v.rotation,v.map&&(g.map.value=v.map,t(v.map,g.mapTransform)),v.alphaMap&&(g.alphaMap.value=v.alphaMap,t(v.alphaMap,g.alphaMapTransform)),v.alphaTest>0&&(g.alphaTest.value=v.alphaTest)}function d(g,v){g.specular.value.copy(v.specular),g.shininess.value=Math.max(v.shininess,1e-4)}function p(g,v){v.gradientMap&&(g.gradientMap.value=v.gradientMap)}function _(g,v){g.metalness.value=v.metalness,v.metalnessMap&&(g.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,g.metalnessMapTransform)),g.roughness.value=v.roughness,v.roughnessMap&&(g.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,g.roughnessMapTransform)),e.get(v).envMap&&(g.envMapIntensity.value=v.envMapIntensity)}function m(g,v,b){g.ior.value=v.ior,v.sheen>0&&(g.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),g.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(g.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,g.sheenColorMapTransform)),v.sheenRoughnessMap&&(g.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,g.sheenRoughnessMapTransform))),v.clearcoat>0&&(g.clearcoat.value=v.clearcoat,g.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(g.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,g.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(g.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Ii&&g.clearcoatNormalScale.value.negate())),v.iridescence>0&&(g.iridescence.value=v.iridescence,g.iridescenceIOR.value=v.iridescenceIOR,g.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(g.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,g.iridescenceMapTransform)),v.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),v.transmission>0&&(g.transmission.value=v.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(g.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,g.transmissionMapTransform)),g.thickness.value=v.thickness,v.thicknessMap&&(g.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=v.attenuationDistance,g.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(g.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(g.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=v.specularIntensity,g.specularColor.value.copy(v.specularColor),v.specularColorMap&&(g.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,g.specularColorMapTransform)),v.specularIntensityMap&&(g.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,g.specularIntensityMapTransform))}function S(g,v){v.matcap&&(g.matcap.value=v.matcap)}function y(g,v){const b=e.get(v).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function K$(i,e,t,n){let r={},a={},l=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(b,E){const w=E.program;n.uniformBlockBinding(b,w)}function f(b,E){let w=r[b.id];w===void 0&&(S(b),w=d(b),r[b.id]=w,b.addEventListener("dispose",g));const U=E.program;n.updateUBOMapping(b,U);const I=e.render.frame;a[b.id]!==I&&(_(b),a[b.id]=I)}function d(b){const E=p();b.__bindingPointIndex=E;const w=i.createBuffer(),U=b.__size,I=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,U,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,w),w}function p(){for(let b=0;b<c;b++)if(l.indexOf(b)===-1)return l.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const E=r[b.id],w=b.uniforms,U=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let I=0,R=w.length;I<R;I++){const G=Array.isArray(w[I])?w[I]:[w[I]];for(let $=0,T=G.length;$<T;$++){const O=G[$];if(m(O,I,$,U)===!0){const Y=O.__offset,ce=Array.isArray(O.value)?O.value:[O.value];let z=0;for(let j=0;j<ce.length;j++){const K=ce[j],ne=y(K);typeof K=="number"||typeof K=="boolean"?(O.__data[0]=K,i.bufferSubData(i.UNIFORM_BUFFER,Y+z,O.__data)):K.isMatrix3?(O.__data[0]=K.elements[0],O.__data[1]=K.elements[1],O.__data[2]=K.elements[2],O.__data[3]=0,O.__data[4]=K.elements[3],O.__data[5]=K.elements[4],O.__data[6]=K.elements[5],O.__data[7]=0,O.__data[8]=K.elements[6],O.__data[9]=K.elements[7],O.__data[10]=K.elements[8],O.__data[11]=0):(K.toArray(O.__data,z),z+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,O.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(b,E,w,U){const I=b.value,R=E+"_"+w;if(U[R]===void 0)return typeof I=="number"||typeof I=="boolean"?U[R]=I:U[R]=I.clone(),!0;{const G=U[R];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return U[R]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function S(b){const E=b.uniforms;let w=0;const U=16;for(let R=0,G=E.length;R<G;R++){const $=Array.isArray(E[R])?E[R]:[E[R]];for(let T=0,O=$.length;T<O;T++){const Y=$[T],ce=Array.isArray(Y.value)?Y.value:[Y.value];for(let z=0,j=ce.length;z<j;z++){const K=ce[z],ne=y(K),ie=w%U;ie!==0&&U-ie<ne.boundary&&(w+=U-ie),Y.__data=new Float32Array(ne.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=ne.storage}}}const I=w%U;return I>0&&(w+=U-I),b.__size=w,b.__cache={},this}function y(b){const E={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(E.boundary=4,E.storage=4):b.isVector2?(E.boundary=8,E.storage=8):b.isVector3||b.isColor?(E.boundary=16,E.storage=12):b.isVector4?(E.boundary=16,E.storage=16):b.isMatrix3?(E.boundary=48,E.storage=48):b.isMatrix4?(E.boundary=64,E.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),E}function g(b){const E=b.target;E.removeEventListener("dispose",g);const w=l.indexOf(E.__bindingPointIndex);l.splice(w,1),i.deleteBuffer(r[E.id]),delete r[E.id],delete a[E.id]}function v(){for(const b in r)i.deleteBuffer(r[b]);l=[],r={},a={}}return{bind:u,update:f,dispose:v}}class m1{constructor(e={}){const{canvas:t=Gk(),context:n=null,depth:r=!0,stencil:a=!0,alpha:l=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:f=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=l;const m=new Uint32Array(4),S=new Int32Array(4);let y=null,g=null;const v=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$n,this._useLegacyLights=!1,this.toneMapping=ca,this.toneMappingExposure=1;const E=this;let w=!1,U=0,I=0,R=null,G=-1,$=null;const T=new Hn,O=new Hn;let Y=null;const ce=new Yt(0);let z=0,j=t.width,K=t.height,ne=1,ie=null,ae=null;const N=new Hn(0,0,j,K),oe=new Hn(0,0,j,K);let Re=!1;const Je=new o1;let te=!1,ue=!1,Te=null;const Ie=new qn,Oe=new Bt,Ae=new se,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function $e(){return R===null?ne:1}let X=n;function st(L,V){for(let ee=0;ee<L.length;ee++){const Q=L[ee],J=t.getContext(Q,V);if(J!==null)return J}return null}try{const L={alpha:!0,depth:r,stencil:a,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:f,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Og}`),t.addEventListener("webglcontextlost",Ct,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",ve,!1),X===null){const V=["webgl2","webgl","experimental-webgl"];if(E.isWebGL1Renderer===!0&&V.shift(),X=st(V,L),X===null)throw st(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&X instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),X.getShaderPrecisionFormat===void 0&&(X.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Me,ke,Ue,Z,et,D,A,q,me,de,ge,we,be,Se,He,tt,pe,bt,Xe,at,Ve,De,ot,gt;function It(){Me=new n5(X),ke=new KW(X,Me,e),Me.init(ke),De=new G$(X,Me,ke),Ue=new z$(X,Me,ke),Z=new s5(X),et=new b$,D=new H$(X,Me,Ue,et,ke,De,Z),A=new ZW(E),q=new t5(E),me=new h4(X,ke),ot=new qW(X,Me,me,ke),de=new i5(X,me,Z,ot),ge=new c5(X,de,me,Z),Xe=new l5(X,ke,D),tt=new jW(et),we=new T$(E,A,q,Me,ke,ot,tt),be=new Y$(E,et),Se=new A$,He=new D$(Me,ke),bt=new XW(E,A,q,Ue,ge,_,u),pe=new B$(E,ge,ke),gt=new K$(X,Z,ke,Ue),at=new YW(X,Me,Z,ke),Ve=new r5(X,Me,Z,ke),Z.programs=we.programs,E.capabilities=ke,E.extensions=Me,E.properties=et,E.renderLists=Se,E.shadowMap=pe,E.state=Ue,E.info=Z}It();const Pe=new q$(E,X);this.xr=Pe,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const L=Me.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=Me.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(L){L!==void 0&&(ne=L,this.setSize(j,K,!1))},this.getSize=function(L){return L.set(j,K)},this.setSize=function(L,V,ee=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=L,K=V,t.width=Math.floor(L*ne),t.height=Math.floor(V*ne),ee===!0&&(t.style.width=L+"px",t.style.height=V+"px"),this.setViewport(0,0,L,V)},this.getDrawingBufferSize=function(L){return L.set(j*ne,K*ne).floor()},this.setDrawingBufferSize=function(L,V,ee){j=L,K=V,ne=ee,t.width=Math.floor(L*ee),t.height=Math.floor(V*ee),this.setViewport(0,0,L,V)},this.getCurrentViewport=function(L){return L.copy(T)},this.getViewport=function(L){return L.copy(N)},this.setViewport=function(L,V,ee,Q){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,V,ee,Q),Ue.viewport(T.copy(N).multiplyScalar(ne).floor())},this.getScissor=function(L){return L.copy(oe)},this.setScissor=function(L,V,ee,Q){L.isVector4?oe.set(L.x,L.y,L.z,L.w):oe.set(L,V,ee,Q),Ue.scissor(O.copy(oe).multiplyScalar(ne).floor())},this.getScissorTest=function(){return Re},this.setScissorTest=function(L){Ue.setScissorTest(Re=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){ae=L},this.getClearColor=function(L){return L.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(L=!0,V=!0,ee=!0){let Q=0;if(L){let J=!1;if(R!==null){const Ee=R.texture.format;J=Ee===$b||Ee===Wb||Ee===Vb}if(J){const Ee=R.texture.type,Fe=Ee===ua||Ee===ra||Ee===Ug||Ee===Za||Ee===Gb||Ee===kb,it=bt.getClearColor(),Be=bt.getClearAlpha(),Ye=it.r,rt=it.g,ht=it.b;Fe?(m[0]=Ye,m[1]=rt,m[2]=ht,m[3]=Be,X.clearBufferuiv(X.COLOR,0,m)):(S[0]=Ye,S[1]=rt,S[2]=ht,S[3]=Be,X.clearBufferiv(X.COLOR,0,S))}else Q|=X.COLOR_BUFFER_BIT}V&&(Q|=X.DEPTH_BUFFER_BIT),ee&&(Q|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ct,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Se.dispose(),He.dispose(),et.dispose(),A.dispose(),q.dispose(),ge.dispose(),ot.dispose(),gt.dispose(),we.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",We),Pe.removeEventListener("sessionend",Ke),Te&&(Te.dispose(),Te=null),ye.stop()};function Ct(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const L=Z.autoReset,V=pe.enabled,ee=pe.autoUpdate,Q=pe.needsUpdate,J=pe.type;It(),Z.autoReset=L,pe.enabled=V,pe.autoUpdate=ee,pe.needsUpdate=Q,pe.type=J}function ve(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function xe(L){const V=L.target;V.removeEventListener("dispose",xe),Ne(V)}function Ne(L){Ze(L),et.remove(L)}function Ze(L){const V=et.get(L).programs;V!==void 0&&(V.forEach(function(ee){we.releaseProgram(ee)}),L.isShaderMaterial&&we.releaseShaderCache(L))}this.renderBufferDirect=function(L,V,ee,Q,J,Ee){V===null&&(V=_t);const Fe=J.isMesh&&J.matrixWorld.determinant()<0,it=Xt(L,V,ee,Q,J);Ue.setMaterial(Q,Fe);let Be=ee.index,Ye=1;if(Q.wireframe===!0){if(Be=de.getWireframeAttribute(ee),Be===void 0)return;Ye=2}const rt=ee.drawRange,ht=ee.attributes.position;let jt=rt.start*Ye,pn=(rt.start+rt.count)*Ye;Ee!==null&&(jt=Math.max(jt,Ee.start*Ye),pn=Math.min(pn,(Ee.start+Ee.count)*Ye)),Be!==null?(jt=Math.max(jt,0),pn=Math.min(pn,Be.count)):ht!=null&&(jt=Math.max(jt,0),pn=Math.min(pn,ht.count));const Ft=pn-jt;if(Ft<0||Ft===1/0)return;ot.setup(J,Q,it,ee,Be);let kn,Gt=at;if(Be!==null&&(kn=me.get(Be),Gt=Ve,Gt.setIndex(kn)),J.isMesh)Q.wireframe===!0?(Ue.setLineWidth(Q.wireframeLinewidth*$e()),Gt.setMode(X.LINES)):Gt.setMode(X.TRIANGLES);else if(J.isLine){let dt=Q.linewidth;dt===void 0&&(dt=1),Ue.setLineWidth(dt*$e()),J.isLineSegments?Gt.setMode(X.LINES):J.isLineLoop?Gt.setMode(X.LINE_LOOP):Gt.setMode(X.LINE_STRIP)}else J.isPoints?Gt.setMode(X.POINTS):J.isSprite&&Gt.setMode(X.TRIANGLES);if(J.isBatchedMesh)Gt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else if(J.isInstancedMesh)Gt.renderInstances(jt,Ft,J.count);else if(ee.isInstancedBufferGeometry){const dt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Bl=Math.min(ee.instanceCount,dt);Gt.renderInstances(jt,Ft,Bl)}else Gt.render(jt,Ft)};function vt(L,V,ee){L.transparent===!0&&L.side===Ts&&L.forceSinglePass===!1?(L.side=Ii,L.needsUpdate=!0,$t(L,V,ee),L.side=pa,L.needsUpdate=!0,$t(L,V,ee),L.side=Ts):$t(L,V,ee)}this.compile=function(L,V,ee=null){ee===null&&(ee=L),g=He.get(ee),g.init(),b.push(g),ee.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),L!==ee&&L.traverseVisible(function(J){J.isLight&&J.layers.test(V.layers)&&(g.pushLight(J),J.castShadow&&g.pushShadow(J))}),g.setupLights(E._useLegacyLights);const Q=new Set;return L.traverse(function(J){const Ee=J.material;if(Ee)if(Array.isArray(Ee))for(let Fe=0;Fe<Ee.length;Fe++){const it=Ee[Fe];vt(it,ee,J),Q.add(it)}else vt(Ee,ee,J),Q.add(Ee)}),b.pop(),g=null,Q},this.compileAsync=function(L,V,ee=null){const Q=this.compile(L,V,ee);return new Promise(J=>{function Ee(){if(Q.forEach(function(Fe){et.get(Fe).currentProgram.isReady()&&Q.delete(Fe)}),Q.size===0){J(L);return}setTimeout(Ee,10)}Me.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Dt=null;function qe(L){Dt&&Dt(L)}function We(){ye.stop()}function Ke(){ye.start()}const ye=new l1;ye.setAnimationLoop(qe),typeof self<"u"&&ye.setContext(self),this.setAnimationLoop=function(L){Dt=L,Pe.setAnimationLoop(L),L===null?ye.stop():ye.start()},Pe.addEventListener("sessionstart",We),Pe.addEventListener("sessionend",Ke),this.render=function(L,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(V),V=Pe.getCamera()),L.isScene===!0&&L.onBeforeRender(E,L,V,R),g=He.get(L,b.length),g.init(),b.push(g),Ie.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Je.setFromProjectionMatrix(Ie),ue=this.localClippingEnabled,te=tt.init(this.clippingPlanes,ue),y=Se.get(L,v.length),y.init(),v.push(y),nt(L,V,0,E.sortObjects),y.finish(),E.sortObjects===!0&&y.sort(ie,ae),this.info.render.frame++,te===!0&&tt.beginShadows();const ee=g.state.shadowsArray;if(pe.render(ee,L,V),te===!0&&tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1)&&bt.render(y,L),g.setupLights(E._useLegacyLights),V.isArrayCamera){const Q=V.cameras;for(let J=0,Ee=Q.length;J<Ee;J++){const Fe=Q[J];Qe(y,L,Fe,Fe.viewport)}}else Qe(y,L,V);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(E,L,V),ot.resetDefaultState(),G=-1,$=null,b.pop(),b.length>0?g=b[b.length-1]:g=null,v.pop(),v.length>0?y=v[v.length-1]:y=null};function nt(L,V,ee,Q){if(L.visible===!1)return;if(L.layers.test(V.layers)){if(L.isGroup)ee=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(V);else if(L.isLight)g.pushLight(L),L.castShadow&&g.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Je.intersectsSprite(L)){Q&&Ae.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Ie);const Fe=ge.update(L),it=L.material;it.visible&&y.push(L,Fe,it,ee,Ae.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Je.intersectsObject(L))){const Fe=ge.update(L),it=L.material;if(Q&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ae.copy(L.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ae.copy(Fe.boundingSphere.center)),Ae.applyMatrix4(L.matrixWorld).applyMatrix4(Ie)),Array.isArray(it)){const Be=Fe.groups;for(let Ye=0,rt=Be.length;Ye<rt;Ye++){const ht=Be[Ye],jt=it[ht.materialIndex];jt&&jt.visible&&y.push(L,Fe,jt,ee,Ae.z,ht)}}else it.visible&&y.push(L,Fe,it,ee,Ae.z,null)}}const Ee=L.children;for(let Fe=0,it=Ee.length;Fe<it;Fe++)nt(Ee[Fe],V,ee,Q)}function Qe(L,V,ee,Q){const J=L.opaque,Ee=L.transmissive,Fe=L.transparent;g.setupLightsView(ee),te===!0&&tt.setGlobalState(E.clippingPlanes,ee),Ee.length>0&&ft(J,Ee,V,ee),Q&&Ue.viewport(T.copy(Q)),J.length>0&&tn(J,V,ee),Ee.length>0&&tn(Ee,V,ee),Fe.length>0&&tn(Fe,V,ee),Ue.buffers.depth.setTest(!0),Ue.buffers.depth.setMask(!0),Ue.buffers.color.setMask(!0),Ue.setPolygonOffset(!1)}function ft(L,V,ee,Q){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;const Ee=ke.isWebGL2;Te===null&&(Te=new lo(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Yc:ua,minFilter:ka,samples:Ee?4:0})),E.getDrawingBufferSize(Oe),Ee?Te.setSize(Oe.x,Oe.y):Te.setSize(T_(Oe.x),T_(Oe.y));const Fe=E.getRenderTarget();E.setRenderTarget(Te),E.getClearColor(ce),z=E.getClearAlpha(),z<1&&E.setClearColor(16777215,.5),E.clear();const it=E.toneMapping;E.toneMapping=ca,tn(L,ee,Q),D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te);let Be=!1;for(let Ye=0,rt=V.length;Ye<rt;Ye++){const ht=V[Ye],jt=ht.object,pn=ht.geometry,Ft=ht.material,kn=ht.group;if(Ft.side===Ts&&jt.layers.test(Q.layers)){const Gt=Ft.side;Ft.side=Ii,Ft.needsUpdate=!0,St(jt,ee,Q,pn,Ft,kn),Ft.side=Gt,Ft.needsUpdate=!0,Be=!0}}Be===!0&&(D.updateMultisampleRenderTarget(Te),D.updateRenderTargetMipmap(Te)),E.setRenderTarget(Fe),E.setClearColor(ce,z),E.toneMapping=it}function tn(L,V,ee){const Q=V.isScene===!0?V.overrideMaterial:null;for(let J=0,Ee=L.length;J<Ee;J++){const Fe=L[J],it=Fe.object,Be=Fe.geometry,Ye=Q===null?Fe.material:Q,rt=Fe.group;it.layers.test(ee.layers)&&St(it,V,ee,Be,Ye,rt)}}function St(L,V,ee,Q,J,Ee){L.onBeforeRender(E,V,ee,Q,J,Ee),L.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),J.onBeforeRender(E,V,ee,Q,L,Ee),J.transparent===!0&&J.side===Ts&&J.forceSinglePass===!1?(J.side=Ii,J.needsUpdate=!0,E.renderBufferDirect(ee,V,Q,J,L,Ee),J.side=pa,J.needsUpdate=!0,E.renderBufferDirect(ee,V,Q,J,L,Ee),J.side=Ts):E.renderBufferDirect(ee,V,Q,J,L,Ee),L.onAfterRender(E,V,ee,Q,J,Ee)}function $t(L,V,ee){V.isScene!==!0&&(V=_t);const Q=et.get(L),J=g.state.lights,Ee=g.state.shadowsArray,Fe=J.state.version,it=we.getParameters(L,J.state,Ee,V,ee),Be=we.getProgramCacheKey(it);let Ye=Q.programs;Q.environment=L.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(L.isMeshStandardMaterial?q:A).get(L.envMap||Q.environment),Ye===void 0&&(L.addEventListener("dispose",xe),Ye=new Map,Q.programs=Ye);let rt=Ye.get(Be);if(rt!==void 0){if(Q.currentProgram===rt&&Q.lightsStateVersion===Fe)return Kt(L,it),rt}else it.uniforms=we.getUniforms(L),L.onBuild(ee,it,E),L.onBeforeCompile(it,E),rt=we.acquireProgram(it,Be),Ye.set(Be,rt),Q.uniforms=it.uniforms;const ht=Q.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ht.clippingPlanes=tt.uniform),Kt(L,it),Q.needsLights=jn(L),Q.lightsStateVersion=Fe,Q.needsLights&&(ht.ambientLightColor.value=J.state.ambient,ht.lightProbe.value=J.state.probe,ht.directionalLights.value=J.state.directional,ht.directionalLightShadows.value=J.state.directionalShadow,ht.spotLights.value=J.state.spot,ht.spotLightShadows.value=J.state.spotShadow,ht.rectAreaLights.value=J.state.rectArea,ht.ltc_1.value=J.state.rectAreaLTC1,ht.ltc_2.value=J.state.rectAreaLTC2,ht.pointLights.value=J.state.point,ht.pointLightShadows.value=J.state.pointShadow,ht.hemisphereLights.value=J.state.hemi,ht.directionalShadowMap.value=J.state.directionalShadowMap,ht.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ht.spotShadowMap.value=J.state.spotShadowMap,ht.spotLightMatrix.value=J.state.spotLightMatrix,ht.spotLightMap.value=J.state.spotLightMap,ht.pointShadowMap.value=J.state.pointShadowMap,ht.pointShadowMatrix.value=J.state.pointShadowMatrix),Q.currentProgram=rt,Q.uniformsList=null,rt}function xn(L){if(L.uniformsList===null){const V=L.currentProgram.getUniforms();L.uniformsList=fh.seqWithValue(V.seq,L.uniforms)}return L.uniformsList}function Kt(L,V){const ee=et.get(L);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function Xt(L,V,ee,Q,J){V.isScene!==!0&&(V=_t),D.resetTextureUnits();const Ee=V.fog,Fe=Q.isMeshStandardMaterial?V.environment:null,it=R===null?E.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Is,Be=(Q.isMeshStandardMaterial?q:A).get(Q.envMap||Fe),Ye=Q.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,rt=!!ee.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ht=!!ee.morphAttributes.position,jt=!!ee.morphAttributes.normal,pn=!!ee.morphAttributes.color;let Ft=ca;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ft=E.toneMapping);const kn=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Gt=kn!==void 0?kn.length:0,dt=et.get(Q),Bl=g.state.lights;if(te===!0&&(ue===!0||L!==$)){const yi=L===$&&Q.id===G;tt.setState(Q,L,yi)}let nn=!1;Q.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Bl.state.version||dt.outputColorSpace!==it||J.isBatchedMesh&&dt.batching===!1||!J.isBatchedMesh&&dt.batching===!0||J.isInstancedMesh&&dt.instancing===!1||!J.isInstancedMesh&&dt.instancing===!0||J.isSkinnedMesh&&dt.skinning===!1||!J.isSkinnedMesh&&dt.skinning===!0||J.isInstancedMesh&&dt.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&dt.instancingColor===!1&&J.instanceColor!==null||dt.envMap!==Be||Q.fog===!0&&dt.fog!==Ee||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==tt.numPlanes||dt.numIntersection!==tt.numIntersection)||dt.vertexAlphas!==Ye||dt.vertexTangents!==rt||dt.morphTargets!==ht||dt.morphNormals!==jt||dt.morphColors!==pn||dt.toneMapping!==Ft||ke.isWebGL2===!0&&dt.morphTargetsCount!==Gt)&&(nn=!0):(nn=!0,dt.__version=Q.version);let Fr=dt.currentProgram;nn===!0&&(Fr=$t(Q,V,J));let zl=!1,ss=!1,Hl=!1;const Cn=Fr.getUniforms(),er=dt.uniforms;if(Ue.useProgram(Fr.program)&&(zl=!0,ss=!0,Hl=!0),Q.id!==G&&(G=Q.id,ss=!0),zl||$!==L){Cn.setValue(X,"projectionMatrix",L.projectionMatrix),Cn.setValue(X,"viewMatrix",L.matrixWorldInverse);const yi=Cn.map.cameraPosition;yi!==void 0&&yi.setValue(X,Ae.setFromMatrixPosition(L.matrixWorld)),ke.logarithmicDepthBuffer&&Cn.setValue(X,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Cn.setValue(X,"isOrthographic",L.isOrthographicCamera===!0),$!==L&&($=L,ss=!0,Hl=!0)}if(J.isSkinnedMesh){Cn.setOptional(X,J,"bindMatrix"),Cn.setOptional(X,J,"bindMatrixInverse");const yi=J.skeleton;yi&&(ke.floatVertexTextures?(yi.boneTexture===null&&yi.computeBoneTexture(),Cn.setValue(X,"boneTexture",yi.boneTexture,D)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}J.isBatchedMesh&&(Cn.setOptional(X,J,"batchingTexture"),Cn.setValue(X,"batchingTexture",J._matricesTexture,D));const fo=ee.morphAttributes;if((fo.position!==void 0||fo.normal!==void 0||fo.color!==void 0&&ke.isWebGL2===!0)&&Xe.update(J,ee,Fr),(ss||dt.receiveShadow!==J.receiveShadow)&&(dt.receiveShadow=J.receiveShadow,Cn.setValue(X,"receiveShadow",J.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(er.envMap.value=Be,er.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),ss&&(Cn.setValue(X,"toneMappingExposure",E.toneMappingExposure),dt.needsLights&&zt(er,Hl),Ee&&Q.fog===!0&&be.refreshFogUniforms(er,Ee),be.refreshMaterialUniforms(er,Q,ne,K,Te),fh.upload(X,xn(dt),er,D)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(fh.upload(X,xn(dt),er,D),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Cn.setValue(X,"center",J.center),Cn.setValue(X,"modelViewMatrix",J.modelViewMatrix),Cn.setValue(X,"normalMatrix",J.normalMatrix),Cn.setValue(X,"modelMatrix",J.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const yi=Q.uniformsGroups;for(let ho=0,cu=yi.length;ho<cu;ho++)if(ke.isWebGL2){const po=yi[ho];gt.update(po,Fr),gt.bind(po,Fr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Fr}function zt(L,V){L.ambientLightColor.needsUpdate=V,L.lightProbe.needsUpdate=V,L.directionalLights.needsUpdate=V,L.directionalLightShadows.needsUpdate=V,L.pointLights.needsUpdate=V,L.pointLightShadows.needsUpdate=V,L.spotLights.needsUpdate=V,L.spotLightShadows.needsUpdate=V,L.rectAreaLights.needsUpdate=V,L.hemisphereLights.needsUpdate=V}function jn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,V,ee){et.get(L.texture).__webglTexture=V,et.get(L.depthTexture).__webglTexture=ee;const Q=et.get(L);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=ee===void 0,Q.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,V){const ee=et.get(L);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(L,V=0,ee=0){R=L,U=V,I=ee;let Q=!0,J=null,Ee=!1,Fe=!1;if(L){const Be=et.get(L);Be.__useDefaultFramebuffer!==void 0?(Ue.bindFramebuffer(X.FRAMEBUFFER,null),Q=!1):Be.__webglFramebuffer===void 0?D.setupRenderTarget(L):Be.__hasExternalTextures&&D.rebindTextures(L,et.get(L.texture).__webglTexture,et.get(L.depthTexture).__webglTexture);const Ye=L.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Fe=!0);const rt=et.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(rt[V])?J=rt[V][ee]:J=rt[V],Ee=!0):ke.isWebGL2&&L.samples>0&&D.useMultisampledRTT(L)===!1?J=et.get(L).__webglMultisampledFramebuffer:Array.isArray(rt)?J=rt[ee]:J=rt,T.copy(L.viewport),O.copy(L.scissor),Y=L.scissorTest}else T.copy(N).multiplyScalar(ne).floor(),O.copy(oe).multiplyScalar(ne).floor(),Y=Re;if(Ue.bindFramebuffer(X.FRAMEBUFFER,J)&&ke.drawBuffers&&Q&&Ue.drawBuffers(L,J),Ue.viewport(T),Ue.scissor(O),Ue.setScissorTest(Y),Ee){const Be=et.get(L.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,ee)}else if(Fe){const Be=et.get(L.texture),Ye=V||0;X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,ee||0,Ye)}G=-1},this.readRenderTargetPixels=function(L,V,ee,Q,J,Ee,Fe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let it=et.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Fe!==void 0&&(it=it[Fe]),it){Ue.bindFramebuffer(X.FRAMEBUFFER,it);try{const Be=L.texture,Ye=Be.format,rt=Be.type;if(Ye!==Dr&&De.convert(Ye)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ht=rt===Yc&&(Me.has("EXT_color_buffer_half_float")||ke.isWebGL2&&Me.has("EXT_color_buffer_float"));if(rt!==ua&&De.convert(rt)!==X.getParameter(X.IMPLEMENTATION_COLOR_READ_TYPE)&&!(rt===bs&&(ke.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=L.width-Q&&ee>=0&&ee<=L.height-J&&X.readPixels(V,ee,Q,J,De.convert(Ye),De.convert(rt),Ee)}finally{const Be=R!==null?et.get(R).__webglFramebuffer:null;Ue.bindFramebuffer(X.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(L,V,ee=0){const Q=Math.pow(2,-ee),J=Math.floor(V.image.width*Q),Ee=Math.floor(V.image.height*Q);D.setTexture2D(V,0),X.copyTexSubImage2D(X.TEXTURE_2D,ee,0,0,L.x,L.y,J,Ee),Ue.unbindTexture()},this.copyTextureToTexture=function(L,V,ee,Q=0){const J=V.image.width,Ee=V.image.height,Fe=De.convert(ee.format),it=De.convert(ee.type);D.setTexture2D(ee,0),X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,ee.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,ee.unpackAlignment),V.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Q,L.x,L.y,J,Ee,Fe,it,V.image.data):V.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Q,L.x,L.y,V.mipmaps[0].width,V.mipmaps[0].height,Fe,V.mipmaps[0].data):X.texSubImage2D(X.TEXTURE_2D,Q,L.x,L.y,Fe,it,V.image),Q===0&&ee.generateMipmaps&&X.generateMipmap(X.TEXTURE_2D),Ue.unbindTexture()},this.copyTextureToTexture3D=function(L,V,ee,Q,J=0){if(E.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=L.max.x-L.min.x+1,Fe=L.max.y-L.min.y+1,it=L.max.z-L.min.z+1,Be=De.convert(Q.format),Ye=De.convert(Q.type);let rt;if(Q.isData3DTexture)D.setTexture3D(Q,0),rt=X.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)D.setTexture2DArray(Q,0),rt=X.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}X.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,Q.flipY),X.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),X.pixelStorei(X.UNPACK_ALIGNMENT,Q.unpackAlignment);const ht=X.getParameter(X.UNPACK_ROW_LENGTH),jt=X.getParameter(X.UNPACK_IMAGE_HEIGHT),pn=X.getParameter(X.UNPACK_SKIP_PIXELS),Ft=X.getParameter(X.UNPACK_SKIP_ROWS),kn=X.getParameter(X.UNPACK_SKIP_IMAGES),Gt=ee.isCompressedTexture?ee.mipmaps[J]:ee.image;X.pixelStorei(X.UNPACK_ROW_LENGTH,Gt.width),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Gt.height),X.pixelStorei(X.UNPACK_SKIP_PIXELS,L.min.x),X.pixelStorei(X.UNPACK_SKIP_ROWS,L.min.y),X.pixelStorei(X.UNPACK_SKIP_IMAGES,L.min.z),ee.isDataTexture||ee.isData3DTexture?X.texSubImage3D(rt,J,V.x,V.y,V.z,Ee,Fe,it,Be,Ye,Gt.data):ee.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),X.compressedTexSubImage3D(rt,J,V.x,V.y,V.z,Ee,Fe,it,Be,Gt.data)):X.texSubImage3D(rt,J,V.x,V.y,V.z,Ee,Fe,it,Be,Ye,Gt),X.pixelStorei(X.UNPACK_ROW_LENGTH,ht),X.pixelStorei(X.UNPACK_IMAGE_HEIGHT,jt),X.pixelStorei(X.UNPACK_SKIP_PIXELS,pn),X.pixelStorei(X.UNPACK_SKIP_ROWS,Ft),X.pixelStorei(X.UNPACK_SKIP_IMAGES,kn),J===0&&Q.generateMipmaps&&X.generateMipmap(rt),Ue.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?D.setTextureCube(L,0):L.isData3DTexture?D.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?D.setTexture2DArray(L,0):D.setTexture2D(L,0),Ue.unbindTexture()},this.resetState=function(){U=0,I=0,R=null,Ue.reset(),ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return As}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ng?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===ed?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===$n?Qa:qb}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Qa?$n:Is}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class j$ extends m1{}j$.prototype.isWebGL1Renderer=!0;class Z$ extends ji{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class J$ extends ai{constructor(e,t,n,r,a,l,c,u,f){super(e,t,n,r,a,l,c,u,f),this.isVideoTexture=!0,this.minFilter=l!==void 0?l:An,this.magFilter=a!==void 0?a:An,this.generateMipmaps=!1;const d=this;function p(){d.needsUpdate=!0,e.requestVideoFrameCallback(p)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(p)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const NE={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Q${constructor(e,t,n){const r=this;let a=!1,l=0,c=0,u;const f=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(d){c++,a===!1&&r.onStart!==void 0&&r.onStart(d,l,c),a=!0},this.itemEnd=function(d){l++,r.onProgress!==void 0&&r.onProgress(d,l,c),l===c&&(a=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,p){return f.push(d,p),this},this.removeHandler=function(d){const p=f.indexOf(d);return p!==-1&&f.splice(p,2),this},this.getHandler=function(d){for(let p=0,_=f.length;p<_;p+=2){const m=f[p],S=f[p+1];if(m.global&&(m.lastIndex=0),m.test(d))return S}return null}}}const e8=new Q$;class Hg{constructor(e){this.manager=e!==void 0?e:e8,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,a){n.load(e,r,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hg.DEFAULT_MATERIAL_NAME="__DEFAULT";class t8 extends Hg{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,l=NE.get(e);if(l!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(l),a.manager.itemEnd(e)},0),l;const c=Kc("img");function u(){d(),NE.add(e,this),t&&t(this),a.manager.itemEnd(e)}function f(p){d(),r&&r(p),a.manager.itemError(e),a.manager.itemEnd(e)}function d(){c.removeEventListener("load",u,!1),c.removeEventListener("error",f,!1)}return c.addEventListener("load",u,!1),c.addEventListener("error",f,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(c.crossOrigin=this.crossOrigin),a.manager.itemStart(e),c.src=e,c}}class n8 extends Hg{constructor(e){super(e)}load(e,t,n,r){const a=new ai,l=new t8(this.manager);return l.setCrossOrigin(this.crossOrigin),l.setPath(this.path),l.load(e,function(c){a.image=c,a.needsUpdate=!0,t!==void 0&&t(a)},n,r),a}}class i8{constructor(e,t,n=0,r=1/0){this.ray=new Qb(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Bg,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return w_(e,this,n,t),n.sort(FE),n}intersectObjects(e,t=!0,n=[]){for(let r=0,a=e.length;r<a;r++)w_(e[r],this,n,t);return n.sort(FE),n}}function FE(i,e){return i.distance-e.distance}function w_(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let a=0,l=r.length;a<l;a++)w_(r[a],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Og}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Og);const A_=new Bt;function r8(){document.querySelector("#global-container").addEventListener("pointermove",s8)}function s8(i){A_.x=a8(i.clientX),A_.y=o8(i.clientY)}function a8(i){return i/window.innerWidth*2-1}function o8(i){return-(i/window.innerHeight)*2+1}function l8(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}function c8(i,e){return Math.round(i/e*100)}const sl=new Map,u8=new n8;window.textureCache=sl;const hh={init:f8,loadAllAssets:h8,loadImg:g1,getTexByElement:d8,addProgressAction:y1,letsBegin:_8},Va={};function f8(){Va.globalContainer=document.getElementById("global-container"),Va.loader=document.getElementById("loader"),Va.loaderPercent=document.getElementById("Loader-percent"),y1((i,e)=>{Va.loaderPercent.innerHTML=c8(i,e)+"%"})}async function h8(){const i=document.querySelectorAll("[data-webgl]");for(const t of i){const n=t.dataset;for(let r in n){if(!r.startsWith("tex"))continue;const a=n[r];sl.has(a)||sl.set(a,null)}}const e=[];sl.forEach((t,n)=>{let r=null;r=(/\.(mp4|webm|mov)$/.test(n)?p8:g1)(n).then(l=>{sl.set(n,l)}).catch(()=>{console.error("Failed to load Media: ",n)}),e.push(r)}),await Promise.all(e)}async function d8(i){const e=new Map,t=i.dataset;let n=null,r=!0;for(let a in t){if(!a.startsWith("tex"))continue;const l=t[a],c=sl.get(l);a=a.replace("-",""),e.set(a,c),r&&i instanceof HTMLImageElement&&(n=new Promise(u=>{i.onload=u}),i.src=l,r=!1),r&&i instanceof HTMLVideoElement&&(n=new Promise(u=>{i.oncanplay=u}),i.src=l,i.load(),r=!1)}return await n,e}let _1=0,BE=0,C_=null;async function g1(i){v1();const e=await u8.loadAsync(i);return x1(),e.magFilter=An,e.minFilter=An,e.needsUpdate=!1,e}async function p8(i){const e=document.createElement("video");let t=i.split(".").pop();return t==="mov"&&(t="quicktime"),e.canPlayType(`video/${t}`)?(v1(),new Promise(n=>{const r=document.createElement("video");r.oncanplay=()=>{const a=new J$(r);x1(),a.magFilter=An,a.minFilter=An,r.play(),r.oncanplay=null,n(a)},r.src=i,r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,r.defaultMuted=!0})):null}function v1(){_1++}function x1(){BE++,C_&&C_(BE,_1)}function y1(i){C_=i}function m8(){const i=Y_.timeline();return i.to(Va.loader.firstElementChild,{opacity:0,y:10,duration:.3,delay:.5}).set(Va.globalContainer,{visibility:"visible"}).set(Va.loader,{display:"none"}),i}function _8(){m8()}const g8="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",v8="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;uniform vec4 uResolution;uniform sampler2D tex1;uniform sampler2D tex2;vec2 coverUv(vec2 uv,vec4 resolution){return(uv-0.5)*resolution.zw+0.5;}void main(){vec2 uv=coverUv(vUv,uResolution);vec4 t1=texture2D(tex1,uv);vec4 t2=texture2D(tex2,uv);vec4 mixColor=mix(t1,t2,step(.5,uv.y));gl_FragColor=mixColor;}",Vt={os:[],raycaster:new i8,worldInit:S1,adjustWorldPosition:E1,render:T1};function S1(i,e){return Vt.renderer=new m1({canvas:i,antialias:!0}),Vt.renderer.setSize(e.width,e.height,!1),Vt.renderer.setPixelRatio(e.devicePixelRatio),Vt.renderer.setClearColor(0,0),Vt.scene=new Z$,Vt.camera=y8(e),x8(e),Vt}async function x8(i){const t=[...document.querySelectorAll("[data-webgl]")].map(async n=>{const r=n.getBoundingClientRect(),a=await hh.getTexByElement(n),l=new lu(r.width,r.height,1,1),c=new Ds({vertexShader:g8,fragmentShader:v8,uniforms:{uMouse:{value:new Bt(.5,.5)},uHover:{value:0}}});function u(_){if(!a.get("tex1"))return _;const m=a.get("tex1").source.data,S={};m instanceof HTMLImageElement?(S.width=m.naturalWidth,S.height=m.naturalHeight):m instanceof HTMLVideoElement&&(S.width=m.videoWidth,S.height=m.videoHeight);const y=f(r,S);return _.uResolution={value:y},_}function f(_,m){const{width:S,height:y}=_,g=new Hn(S,y,1,1);if(!m)return g;const{width:v,height:b}=m,E=b/v,w=y/S;let U,I;return w>E?(U=1/w*E,I=1):(U=1,I=w/E),g.z=U,g.w=I,g}c.uniforms=u(c.uniforms),a.forEach((_,m)=>{c.uniforms[m]={value:_}});const d=new Jr(l,c);d.position.z=0;const p={geometry:l,material:c,mesh:d,rect:r,$:{el:n}};return Vt.scene.add(d),Vt.os.push(p),p});await Promise.all(t),E1(i)}function E1(i){Vt.renderer.setSize(i.width,i.height,!1),Vt.os.forEach(e=>E8(e,i)),M8(i)}function y8(i){const{fov:e,aspect:t,near:n,far:r,cameraZ:a}=i,l=new pr(e,t,n,r);return l.position.z=a,l}function S8(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=M1(n,_n.rect);e.position.y=r}function E8(i,e){const{$:{el:t},mesh:n,geometry:r,rect:a}=i,l=t.getBoundingClientRect(),{x:c,y:u}=M1(l,e);n.position.x=c,n.position.y=u,r.scale(l.width/a.width,l.height/a.height,1),i.rect=l}function M8(i){const{aspect:e,radian:t,fov:n}=i;Vt.camera.aspect=e,Vt.camera.radian=t,Vt.camera.fov=n,Vt.camera.updateProjectionMatrix(),Vt.renderer.render(Vt.scene,Vt.camera)}function M1(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function T8(){Vt.raycaster.setFromCamera(A_,Vt.camera);const e=Vt.raycaster.intersectObjects(Vt.scene.children)[0];for(let t=0;t<Vt.scene.children.length;t++){const n=Vt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=l8(r.value,r.__endValue,.1)}}function T1(){requestAnimationFrame(T1),Vt.os.forEach(i=>S8(i)),T8(),Vt.renderer.render(Vt.scene,Vt.camera)}const _n={init:b8},b1={};let zE=!1;function b8(i){b1.canvas=i;const e=i.getBoundingClientRect();return _n.rect=e,_n.width=e.width,_n.height=e.height,_n.near=1500,_n.far=4e3,_n.aspect=_n.width/_n.height,_n.cameraZ=2500,_n.radian=2*Math.atan(_n.height/2/_n.cameraZ),_n.fov=180*_n.radian/Math.PI,_n.devicePixelRatio=window.devicePixelRatio,zE||(zE=!0,w8()),_n}function w8(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{A8()},100)})}function A8(){C8(),Vt.adjustWorldPosition(_n)}function C8(){const{near:i,far:e,cameraZ:t}=_n;_n.init(b1.canvas,i,e,t)}const R8=`<svg xmlns="http://www.w3.org/2000/svg" role="presentation" width="50" height="50">
<path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
</svg>`,w1=`<svg  xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 16 14">
      <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
    </svg>`,P8=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 18 17">
      <g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <path d="M16 16l-5.0752-5.0752"></path>
        <circle cx="6.4" cy="6.4" r="6.4"></circle>
      </g>
    </svg>`,Cl=dn.page.breakpoint,L8=dn.time.debounce,I8=dn.humbergerBtnSelector,D8=dn.logo.white,A1=dn.logo.black,O8=dn.logo.phone,U8=dn.logo.tablet,N8=dn.target.pageContainer,Gg=dn.target.header,C1=dn.target.announcement,R1=dn.rootProperty.headerHeight,P1=dn.rootProperty.announcementHeight,L1=dn.tabletAndUp,I1=dn.phone,F8=dn.smallCart,B8=dn.largeCart;Ml(Cl);function z8(){document.addEventListener("DOMContentLoaded",async function(){T6(),Xg(),Vg(),h6(),o6(),e6()})}window.addEventListener("resize",function(){const i=document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]');console.log("sidebarCart",i),i.addEventListener("click",function(e){e.preventDefault(),console.log("openSidebarCart is called",i)})});function H8(){const i=document.querySelector('[data-section-id="cart"]');i.setAttribute("aria-hidden",!0),i.classList.add("Drawer","Drawer--fromRight"),G8(i),Z8(i),$8(i)}function G8(i){const e=Or("div",{},["Drawer__Header","Drawer__Header--bordered","Drawer__Container"]);i.appendChild(e);const t=Or("span",{},["Drawer__Title","Heading","u-h4"]);t.textContent="カート",e.appendChild(t),Or("div",{},["Drawer__Header","Drawer__Header--bordered","Drawer__Container"]),k8(e)}function k8(i){const e=Or("button",dn.sidebarBtnConfig.attributes,dn.sidebarBtnConfig.classes);return i.appendChild(e),V8(w1,e),e}async function V8(i,e){W8(i,e,["Icon","Icon--close"],"1.0")}async function W8(i,e,t,n="1.5",r="currentColor"){const a=e;Wg(a);async function l(u){const p=new DOMParser().parseFromString(u,"image/svg+xml").querySelector("svg");if(!p)throw new Error(`No SVG element found in the provided data: ${u}`);return p.querySelectorAll("path").forEach(m=>{m.setAttribute("fill","none"),m.setAttribute("stroke-width",n),m.setAttribute("stroke","currentColor")}),p}const c=await l(i);U1(a,c),D1(c,t)}function D1(i,e){i.classList.add(...e)}function $8(i){const e=Or("form",{},["Cart","Drawer__Content"]);e.setAttribute("action","/cart"),e.setAttribute("method","post"),e.setAttribute("novalidate",""),i.appendChild(e),X8(e)}function X8(i){const e=Or("div",{},["Drawer__Main"]);i.appendChild(e),q8(e),K8(e,"カートに商品がありません")}function q8(i){const e=Jh(i,"div",["Cart__ShippingNotice","Text--subdued"]);Y8(e)}function Y8(i){const e=Jh(i,"div",["Drawer__Container"]);j8(e,"あと")}function K8(i,e){const t=Jh(i,"p",["Cart__Empty","Heading","u-h5"]);t.textContent=e}function j8(i,e){const t=Or("p",{},[]);t.appendChild(document.createTextNode(e));const n=Or("span",{},[]),r=Or("span",{},["yen"]);r.textContent="¥",n.appendChild(r),n.appendChild(document.createTextNode("10,000")),t.appendChild(n),t.appendChild(document.createTextNode("以上で送料無料")),i.appendChild(t)}function Z8(i){const e=document.querySelector("html"),t=document.querySelector(".PageOverlay"),n=document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]');J8(e,t,i,n),Q8(e,t,i)}function J8(i,e,t,n){const r=document.getElementById("page-container");n.addEventListener("click",function(a){a.preventDefault(),console.log("openSidebarCart is called",n),e==null||e.classList.toggle("is-visible"),i.classList.toggle("no-scroll"),t.setAttribute("aria-hidden",!1),t.setAttribute("tabindex","-1"),t.addEventListener("transitionend",function(l){if(l.propertyName!=="transform")return;const c=t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');c&&ma&&(c.focus(),kg(),ma=!1,r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))})})}function Q8(i,e,t,n){const r=document.getElementById("page-container");document.querySelector('[data-action="close-drawer"][data-drawer-id="sidebar-cart"]').addEventListener("click",function(){t.setAttribute("aria-hidden","true"),e.classList.remove("is-visible"),i.classList.remove("no-scroll"),t.addEventListener("transitionend",function(l){if(l.propertyName!=="transform")return;r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(u=>{u.removeAttribute("tabindex"),N1()}),ma=!0})})}function e6(){document.querySelectorAll(".Drawer__Main").forEach(e=>{e.setAttribute("data-scrollable",""),e.style.overflow="auto"})}function t6(){document.querySelectorAll(".Collapsible").forEach(e=>{if(e){const t=e.querySelector(".Collapsible__Button");t?(t.classList.add("Heading","u-h6"),i6(e),s6(t)):n6(e)}else console.log("Collapsible not found")})}function n6(i){const e=document.createElement("a");e.classList.add("Collapsible__Button","Heading","Link","Link--primary","u-h6");const t=i.textContent;e.textContent=t,e.setAttribute("href","#"),i.textContent="",i.appendChild(e)}function i6(i){const e=document.createElement("div");e.classList.add("Collapsible__Inner"),i.appendChild(e);const t=r6();e.appendChild(t),e.style.overflow="hidden",e.style.height="0"}function r6(){return document.querySelector(".Collapsible__Content")}function s6(i){const e=document.createElement("span");e.classList.add("Collapsible__Plus"),i.appendChild(e);const t=document.querySelector(".Collapsible__Button");a6(t)}function a6(i){const e=document.querySelector(".Collapsible__Inner");window.addEventListener("DOMContentLoaded",t=>{e.style.height==="0px"?HE(e):GE(e)}),i.addEventListener("click",function(){const t=document.querySelector(".Collapsible__Button"),n=document.querySelector(".Collapsible__Inner"),r=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!r),n.style.overflow=n.style.overflow==="visible"?"hidden":"visible",n.style.height=n.style.height==="0px"?"auto":"0px",n.getAttribute("tabindex")==="-1"?GE(n):HE(n),r||(console.log("btn",t),t.focus())})}function HE(i){i.setAttribute("tabindex","-1"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.setAttribute("tabindex","-1")})}function GE(i){i.removeAttribute("tabindex"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.removeAttribute("tabindex")})}function o6(){c6(w1),l6(P8),t6(),H8()}function l6(i){O1(i,"Drawer__Search",["Icon","Icon--search"])}function c6(i){O1(i,"Drawer__Close",["Icon","Icon--close"]);const e=document.getElementById("sidebar-menu");e.setAttribute("aria-hidden",!0),u6(e),f6(e,"Drawer__Close")}async function O1(i,e,t){const n=document.querySelector(`.${e}`);Wg(n);async function r(l){const f=new DOMParser().parseFromString(l,"image/svg+xml").querySelector("svg");if(!f)throw new Error(`No SVG element found in the provided data: ${l}`);return f.querySelectorAll("path").forEach(p=>{p.setAttribute("fill","none"),p.setAttribute("stroke-width","1.5"),p.setAttribute("stroke","currentColor")}),f}const a=await r(i);U1(n,a),a.classList.add(...t)}function U1(i,e){i.appendChild(e),e.setAttribute("viewBox","0 0 20 20"),e.setAttribute("width","16"),e.setAttribute("height","14")}function kg(){const{disablePlugin:i,enablePlugin:e}=qg();i()}function N1(){const{disablePlugin:i,enablePlugin:e}=qg();e()}let ma=!0;function u6(i){const e=document.querySelector("html"),t=document.getElementById("sidebar-menu"),n=document.querySelector(".PageOverlay"),r=document.querySelector(".Header__Icon"),a=document.getElementById("page-container");r.addEventListener("click",function(){i.setAttribute("aria-hidden",!1),t.setAttribute("tabindex","-1"),t.addEventListener("transitionend",function(l){if(l.propertyName!=="transform")return;const c=t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');c&&ma&&(c.focus(),kg(),ma=!1,a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))}),n.classList.add("is-visible"),e.classList.add("no-scroll")})}function f6(i,e){const t=document.querySelector("html"),n=document.getElementById("sidebar-menu"),r=document.querySelector(".PageOverlay"),a=document.getElementById("page-container");document.querySelector(`.${e}`).addEventListener("click",function(){i.setAttribute("aria-hidden",!0),n.removeAttribute("tabindex"),r.classList.remove("is-visible"),t.classList.remove("no-scroll"),n.addEventListener("transitionend",function(c){if(c.propertyName!=="transform")return;a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(f=>{f.removeAttribute("tabindex"),N1()}),ma=!0})})}function h6(){const i=d6();p6(),m6(),i.select(4),setTimeout(()=>i.select(0),0)}function d6(){const i={contain:!0,prevNextButtons:!1,setGallerySize:!1,adaptiveHeight:!1,wrapAround:!0,dragThreshold:15,pauseAutoPlayOnHover:!1,autoPlay:!1,pageDots:!0,fade:!0,on:{change:function(r){console.log("Slide changed to",r),document.querySelectorAll(".Carousel__Cell").forEach((u,f)=>{if(u.classList.contains("is-selected")){let S=function(y){m===null&&(m=y);let g=y-m,v=Math.min(g/_,1),b=_6(d,p,v);u.style.opacity=b,v<1&&requestAnimationFrame(S)};u.style.visibility="inherit";let d=0,p=1,_=1e3,m=null;requestAnimationFrame(S)}else u.style.visibility="hidden",u.style.opacity="1"}),document.querySelectorAll(".SectionHeader").forEach((u,f)=>{setTimeout(()=>{console.log("index",r),f===r?(u.style.visibility="visible",u.style.opacity="1",u.style.transform="matrix(1, 0, 0, 1, 0, 0)",u.style.transition="all 0.7s ease-in-out"):(u.style.visibility="hidden",u.style.opacity="0",u.style.transform="matrix(1, 0, 0, 1, 0, 20)",u.style.transition="all 0.7s ease-in-out")},500)}),document.querySelectorAll(".SectionHeader__ButtonWrapper").forEach((u,f)=>{setTimeout(()=>{f===r?(u.style.visibility="visible",u.style.opacity="1",u.style.transform="matrix(1, 0, 0, 1, 0, 0)",u.style.transition="all 0.7s ease-in-out"):(u.style.visibility="hidden",u.style.opacity="0",u.style.transform="matrix(1, 0, 0, 1, 0, 20)",u.style.transition="all 0.7s ease-in-out")},700)})}}},e=document.querySelector(".Slideshow-Carousel"),t=JSON.stringify(i,null,2);e.setAttribute("data-flickity-config",t);const n=new HG(e,i);return e.classList.add("Carousel--fixed"),n}let kE=!1;function p6(i){const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".flickity-page-dots");if(r.length>0&&r[0].children.length>0)return;!kE&&r.length>0&&(e.disconnect(),kE=!0,console.log("disconnected"))}})});e.observe(document,{childList:!0,subtree:!0})}let VE=!1;function m6(i){if(VE)return;VE=!0;const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".Carousel__Cell");let a=["./img/yamadera.jpeg","./img/sakuramich.jpeg","./img/yamadera.jpeg","./img/yamadera.jpeg","./img/sakuramich.jpeg"],l=["Text 1","Text 2","Text 3","Text 4","Text 5"],c=["Text A","Text B","Text C","Text D","Text E"];r.forEach((u,f)=>{if(u.children.length>0)return;let d=a[f%a.length],p=l[f%l.length],_=c[f%c.length];g6(u,d),v6(u,d),x6(u,p,_)}),r.length>=a.length&&(e.disconnect(),console.log("disconnected"),M6())}})});e.observe(document,{childList:!0,subtree:!0})}function _6(i,e,t){return i*(1-t)+e*t}function F1(i,e){const t=document.createElement("img");t.alt="yamadera",t.classList.add("Slideshow__Image","Image--lazyLoaded"),t.onload=function(){i.appendChild(t)},t.src=e}function g6(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-tablet-and-up"),i.appendChild(t),F1(t,e)}function v6(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-phone"),i.appendChild(t),F1(t,e)}function x6(i,e,t){const n=document.createElement("div");n.classList.add("Slideshow__Content","Slideshow__Content--bottomLeft"),i.appendChild(n),y6(n,e,t)}function y6(i,e,t){const n=document.createElement("header");n.classList.add("SectionHeader"),i.appendChild(n);const r=document.createElement("h3"),a=document.createElement("h2");r.classList.add("SectionHeader__SubHeader","Heading","u-h6"),a.classList.add("SectionHeader__Heading","Section__Heading--emphasize","Heading","u-h1"),r.textContent=e,a.textContent=t,n.appendChild(r),n.appendChild(a),S6(n)}function S6(i){const e=document.createElement("div");e.classList.add("SectionHeader__ButtonWrapper"),i.appendChild(e),E6(e)}function E6(i){const e=document.createElement("div");e.classList.add("ButtonGroup","ButtonGroup--spacingSmall"),i.appendChild(e);const t=document.createElement("a");t.href="./subhtml/demo-wrapAround.html",t.classList.add("ButtonGroup__Item","Button"),t.textContent="READ MORE",e.appendChild(t)}function M6(){document.querySelectorAll(".Carousel__Cell")}function T6(){const i=document.title,e=document.querySelector(".AnnouncementBar__Content");return e&&(e.innerHTML=i),i}function b6(i){w6(i),[{src:A1,alt:"logo"},{src:D8,alt:"logo"}].forEach(t=>C6(t.src,t.alt))}function w6(i){const e=document.querySelector(".Header__FlexItem--logo"),t=document.createElement("h1");t.classList.add("Header__Logo"),e.appendChild(t),A6(t,i)}function A6(i,e){const t=document.querySelector(".Header__LogoLink"),n=t.parentElement;i.appendChild(t),n.appendChild(i),t.querySelectorAll(".Header__LogoImage").forEach(c=>c.remove());const a=document.createElement("img");a.className="Header__LogoImage Header__LogoImage--primary",a.alt="",a.style.height=e;const l=document.createElement("img");l.className="Header__LogoImage Header__LogoImage--transparent",l.alt="",l.style.height=e,t.appendChild(a),t.appendChild(l)}function C6(i,e){const t=document.querySelector(`.Header__LogoImage--${i===A1?"primary":"transparent"}`);t.src=i,t.alt=e}function Vg(){const i=Ml(Cl)?L1:I1;H1(i);const e=Ml(Cl)?U8:O8;b6(e),B1()}function B1(){const i=document.querySelectorAll(".Header__FlexItem.Header__FlexItem--fill");$g(i[1]);const e=Or("a",dn.cartAtagConfig.attributes,dn.cartAtagConfig.classes);i[1].appendChild(e);const t=Jh(e,"span",["hidden-phone"]);return R6(R8,t,["Icon","Icon--cart-desktop"],"1.0"),e.addEventListener("click",function(n){const r=document.getElementById("page-container"),a=document.querySelector('[data-section-id="cart"]'),l=document.querySelector("html"),c=document.querySelector(".PageOverlay");document.querySelector('[data-drawer-id="sidebar-cart"][data-action="open-drawer"]'),n.preventDefault(),console.log("openSidebarCart is called test"),console.log("openSidebarCart is called",e),c==null||c.classList.toggle("is-visible"),l.classList.toggle("no-scroll"),a.setAttribute("aria-hidden",!1),a.setAttribute("tabindex","-1"),a.addEventListener("transitionend",function(u){if(u.propertyName!=="transform")return;const f=a.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');f&&ma&&(f.focus(),kg(),ma=!1,r.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(p=>{p.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))})}),e}async function R6(i,e,t,n){P6(i,e,t,n)}async function P6(i,e,t,n="1.0",r="currentColor"){const a=e;Wg(a);async function l(u){const p=new DOMParser().parseFromString(u,"image/svg+xml").querySelector("svg");if(!p)throw new Error(`No SVG element found in the provided data: ${u}`);return p.querySelectorAll("path").forEach(m=>{m.setAttribute("fill","none"),m.setAttribute("stroke-width",n),m.setAttribute("stroke","currentColor")}),p}const c=await l(i);L6(a,c),D1(c,t)}function L6(i,e){const t=Ml(Cl)?B8:F8;i.appendChild(e),e.setAttribute("viewBox","0 0 20 20"),e.setAttribute("width",t.width),e.setAttribute("height",t.height),e.setAttribute("strokeWidth",t.strokeWidth),i.style.width=t.width,i.style.height=t.height,e.style.width=t.width,e.style.height=t.height}function Wg(i){$g(i)}let WE;window.addEventListener("resize",async function(){Vg(),Xg(),z1()});window.addEventListener("orientationchange",async function(){Vg(),Xg(),z1()});function z1(){clearTimeout(WE),WE=setTimeout(()=>{const i=Ml(Cl)?L1:I1;H1(i),B1();const e=Ml(Cl)?"28px":"18px";document.querySelectorAll(".Header__LogoImage").forEach(n=>{n.style.height=e}),I6(),Fh(`#${Gg}`,R1),Fh(`#${C1}`,P1)},L8)}function I6(){let i;const e=document.querySelector(".pin-spacer"),t=document.getElementById(Gg),n=document.querySelector(".Header__Wrapper"),r=document.querySelector(".Slideshow--fullscreen"),a=document.documentElement.clientWidth,l=n.offsetHeight;t.style.width=a+"px",t.style.maxWidth=a+"px",t.style.height=l+"px",t.style.maxHeight=l+"px",e.style.width=a+"px",e.style.maxWidth=a+"px",e.style.height=l+"px",e.style.maxHeight=l+"px",r.style.top="",i=D6(r),r.style.top=-i+"px"}function D6(i){const t=i.getBoundingClientRect().top,n=document.querySelector(".AnnouncementBar").offsetHeight;return t-n}function $g(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function O6(i,e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",`0 0 ${e} ${t}`),n.setAttribute("width",e),n.setAttribute("height",t),n}function U6(i,e,t,n){const r=(e-n*3)/2;for(let a=0;a<3;a++){const l=document.createElementNS("http://www.w3.org/2000/svg","rect");l.setAttribute("width",t),l.setAttribute("height",n),l.setAttribute("y",a*(parseInt(n)+r)),l.setAttribute("fill","currentColor"),i.appendChild(l)}}function N6({viewBox:i,width:e,height:t,rectWidth:n,rectHeight:r}){const a=O6(i,e,t);return U6(a,t,n,r),a}function H1(i){const e=document.querySelector(I8);$g(e);const t=N6(i);e.appendChild(t)}function Xg(){const i=window.innerHeight,e=document.getElementById(N8);e&&(e.style.height=`${i}px`),G1("--window-height",i)}window.addEventListener("load",function(){Fh(`#${Gg}`,R1),Fh(`#${C1}`,P1)});function Fh(i,e){const t=document.querySelector(i);if(t){const n=t.offsetHeight;G1(e,n)}}function G1(i,e){document.documentElement.style.setProperty(i,`${e}px`)}let R_=0;function F6(){const i=document.body.getElementsByTagName("*"),e=Array.from(i).filter(t=>t.id.includes("section"));R_=0,e.forEach(t=>{R_+=t.offsetHeight})}const B6={get totalHeight(){return F6(),R_}},z6=dn.target.pageContainer;class P_ extends Ob{transformDelta(e,t){return e=this.options.disabled?{x:0,y:0}:e,e}}hp(P_,"pluginName","disablePlugin"),hp(P_,"defaultOptions",{disabled:!1});let Zs;function qg(){window.addEventListener("load",function(){});const i=document.getElementById(z6);Y_.registerPlugin(yt),dS.use(P_),Zs=dS.init(i,{delegateTo:document}),yt.scrollerProxy(i,{scrollTop(n){return arguments.length?Zs.scrollTop=n:Zs.scrollTop}}),Zs.addListener(yt.update);function e(){Zs.updatePluginOptions("disablePlugin",{disabled:!0}),console.log("plugin is disabled")}function t(){Zs.updatePluginOptions("disablePlugin",{disabled:!1})}return yt.defaults({scroller:i}),Zs.addListener(n=>{n.offset.y+window.innerHeight>=Zs.getSize().content.height&&console.log("you're at the bottom of the page")}),window.addEventListener("load",function(){const n=B6.totalHeight,r=document.querySelector(`#${dn.target.header}`);r.style.position="relative",r.style.zIndex="1000",yt.create({trigger:r,start:"top top",end:`${n}px top`,pin:!0,pinSpacing:!1,onEnter:()=>{},onLeaveBack:()=>{}});function a(){const l=document.getElementById(dn.target.header);l.classList.add("Header--transparent"),yt.create({trigger:l,start:"top top",end:99999,onEnter:()=>{l.classList.remove("Header--transparent")},onLeaveBack:()=>{l.classList.add("Header--transparent")}})}a()}),{disablePlugin:e,enablePlugin:t}}async function H6(){z8();const i=document.querySelector("#canvas");_n.init(i),qg(),hh.init(),await hh.loadAllAssets(),S1(i,_n),r8(),Vt.render(),hh.letsBegin()}function G6(){document.querySelector("[data-webgl]")}H6();console.log("Production output");G6();
