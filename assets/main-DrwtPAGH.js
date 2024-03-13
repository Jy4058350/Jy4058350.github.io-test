var cy=Object.defineProperty;var uy=(i,e,t)=>e in i?cy(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var kc=(i,e,t)=>(uy(i,typeof e!="symbol"?e+"":e,t),t);import{c as Po,F as fy}from"./flickity-fade-oaUB-vbY.js";function zi(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function lg(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ta={duration:.5,overwrite:!1,delay:0},lh,ln,Et,ei=1e8,gt=1/ei,of=Math.PI*2,hy=of/4,dy=0,cg=Math.sqrt,py=Math.cos,my=Math.sin,jt=function(e){return typeof e=="string"},Ct=function(e){return typeof e=="function"},qi=function(e){return typeof e=="number"},ch=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},bn=function(e){return e!==!1},uh=function(){return typeof window<"u"},Lo=function(e){return Ct(e)||jt(e)},ug=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},cn=Array.isArray,lf=/(?:-?\.?\d|\.)+/gi,fg=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,hg=/[+-]=-?[.\d]+/,dg=/[^,'"\[\]\s]+/gi,_y=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,vi,cf,fh,Vn={},Yl={},pg,mg=function(e){return(Yl=rs(e,Vn))&&Pn},hh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ro=function(e,t){return!t&&console.warn(e)},_g=function(e,t){return e&&(Vn[e]=t)&&Yl&&(Yl[e]=t)||Vn},so=function(){return 0},gy={suppressEvents:!0,isStart:!0,kill:!1},Pl={suppressEvents:!0,kill:!1},vy={suppressEvents:!0},dh={},pr=[],uf={},gg,Fn={},Gc={},Ed=30,Ll=[],ph="",mh=function(e){var t=e[0],n,r;if(Li(t)||Ct(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=Ll.length;r--&&!Ll[r].targetTest(t););n=Ll[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new Hg(e[r],n)))||e.splice(r,1);return e},Xr=function(e){return e._gsap||mh(ti(e))[0]._gsap},vg=function(e,t,n){return(n=e[t])&&Ct(n)?e[t]():ch(n)&&e.getAttribute&&e.getAttribute(t)||n},wn=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},qt=function(e){return Math.round(e*1e7)/1e7||0},$s=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},xy=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},jl=function(){var e=pr.length,t=pr.slice(0),n,r;for(uf={},pr.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},xg=function(e,t,n,r){pr.length&&!ln&&jl(),e.render(t,n,r||ln&&t<0&&(e._initted||e._startAt)),pr.length&&!ln&&jl()},yg=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(dg).length<2?t:jt(e)?e.trim():e},Sg=function(e){return e},ii=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},yy=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},rs=function(e,t){for(var n in t)e[n]=t[n];return e},Md=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Li(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},Kl=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},Xa=function(e){var t=e.parent||bt,n=e.keyframes?yy(cn(e.keyframes)):ii;if(bn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Sy=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},Eg=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},gc=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Sr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},qr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Ey=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ff=function(e,t,n,r){return e._startAt&&(ln?e._startAt.revert(Pl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},My=function i(e){return!e||e._ts&&i(e.parent)},Td=function(e){return e._repeat?na(e._tTime,e=e.duration()+e._rDelay)*e:0},na=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},Zl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vc=function(e){return e._end=qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||gt)||0))},xc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=qt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vc(e),n._dirty||qr(n,e)),e},Mg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Zl(e.rawTime(),t),(!t._dur||go(0,t.totalDuration(),n)-t._tTime>gt)&&t.render(n,!0)),qr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-gt}},Ei=function(e,t,n,r){return t.parent&&Sr(t),t._start=qt((qi(n)?n:n||e!==bt?Yn(e,n,t):e._time)+t._delay),t._end=qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Eg(e,t,"_first","_last",e._sort?"_start":0),hf(t)||(e._recent=t),r||Mg(e,t),e._ts<0&&xc(e,e._tTime),e},Tg=function(e,t){return(Vn.ScrollTrigger||hh("scrollTrigger",t))&&Vn.ScrollTrigger.create(t,e)},bg=function(e,t,n,r,s){if(gh(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!ln&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&gg!==Bn.frame)return pr.push(e),e._lazy=[s,r],1},Ty=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},hf=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},by=function(e,t,n,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Ty(e)&&!(!e._initted&&hf(e))||(e._ts<0||e._dp._ts<0)&&!hf(e))?0:1,a=e._rDelay,l=0,c,u,f;if(a&&e._repeat&&(l=go(0,e._tDur,t),u=na(l,a),e._yoyo&&u&1&&(o=1-o),u!==na(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||ln||r||e._zTime===gt||!t&&e._zTime){if(!e._initted&&bg(e,t,r,n,l))return;for(f=e._zTime,e._zTime=t||(n?gt:0),n||(n=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&ff(e,t,n,!0),e._onUpdate&&!n&&kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Sr(e,1),!n&&!ln&&(kn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},wy=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ia=function(e,t,n,r){var s=e._repeat,o=qt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:qt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&xc(e,e._tTime=e._tDur*a),e.parent&&vc(e),n||qr(e.parent,e),e},bd=function(e){return e instanceof xn?qr(e):ia(e,e._dur)},Ay={_start:0,endTime:so,totalDuration:so},Yn=function i(e,t,n){var r=e.labels,s=e._recent||Ay,o=e.duration()>=ei?s.endTime(!1):e._dur,a,l,c;return jt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(cn(n)?n[0]:n).totalDuration()),a>1?i(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},qa=function(e,t,n){var r=qi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=bn(l.vars.inherit)&&l.parent;o.immediateRender=bn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ut(t[0],o,t[s+1])},br=function(e,t){return e||e===0?t(e):t},go=function(e,t,n){return n<e?e:n>t?t:n},on=function(e,t){return!jt(e)||!(t=_y.exec(e))?"":t[1]},Ry=function(e,t,n){return br(n,function(r){return go(e,t,r)})},df=[].slice,wg=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==vi},Cy=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return jt(r)&&!t||wg(r,1)?(s=n).push.apply(s,ti(r)):n.push(r)})||n},ti=function(e,t,n){return Et&&!t&&Et.selector?Et.selector(e):jt(e)&&!n&&(cf||!ra())?df.call((t||fh).querySelectorAll(e),0):cn(e)?Cy(e,n):wg(e)?df.call(e,0):e?[e]:[]},pf=function(e){return e=ti(e)[0]||ro("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ti(t,n.querySelectorAll?n:n===e?ro("Invalid scope")||fh.createElement("div"):e)}},Ag=function(e){return e.sort(function(){return .5-Math.random()})},Rg=function(e){if(Ct(e))return e;var t=Li(e)?e:{each:e},n=Yr(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,c=t.axis,u=r,f=r;return jt(r)?u=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(u=r[0],f=r[1]),function(h,d,g){var _=(g||t).length,p=o[_],m,y,v,S,R,w,T,D,O;if(!p){if(O=t.grid==="auto"?0:(t.grid||[1,ei])[1],!O){for(T=-ei;T<(T=g[O++].getBoundingClientRect().left)&&O<_;);O<_&&O--}for(p=o[_]=[],m=l?Math.min(O,_)*u-.5:r%O,y=O===ei?0:l?_*f/O-.5:r/O|0,T=0,D=ei,w=0;w<_;w++)v=w%O-m,S=y-(w/O|0),p[w]=R=c?Math.abs(c==="y"?S:v):cg(v*v+S*S),R>T&&(T=R),R<D&&(D=R);r==="random"&&Ag(p),p.max=T-D,p.min=D,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(O>_?_-1:c?c==="y"?_/O:O:Math.max(O,_/O))||0)*(r==="edges"?-1:1),p.b=_<0?s-_:s,p.u=on(t.amount||t.each)||0,n=n&&_<0?Bg(n):n}return _=(p[h]-p.min)/p.max||0,qt(p.b+(n?n(_):_)*p.v)+p.u}},mf=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=qt(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(qi(n)?0:on(n))}},Cg=function(e,t){var n=cn(e),r,s;return!n&&Li(e)&&(r=n=e.radius||ei,e.values?(e=ti(e.values),(s=!qi(e[0]))&&(r*=r)):e=mf(e.increment)),br(t,n?Ct(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ei,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-a,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-a),h<c&&(c=h,u=f);return u=!r||c<=r?e[u]:o,s||u===o||qi(o)?u:u+on(o)}:mf(e))},Pg=function(e,t,n,r){return br(cn(e)?!t:n===!0?!!(n=0):!r,function(){return cn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},Py=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,o){return o(s)},r)}},Ly=function(e,t){return function(n){return e(parseFloat(n))+(t||on(n))}},Dy=function(e,t,n){return Dg(e,t,0,1,n)},Lg=function(e,t,n){return br(n,function(r){return e[~~t(r)]})},Iy=function i(e,t,n){var r=t-e;return cn(e)?Lg(e,i(0,e.length),t):br(n,function(s){return(r+(s-e)%r)%r+e})},Oy=function i(e,t,n){var r=t-e,s=r*2;return cn(e)?Lg(e,i(0,e.length-1),t):br(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},ao=function(e){for(var t=0,n="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?dg:lf),n+=e.substr(t,r-t)+Pg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Dg=function(e,t,n,r,s){var o=t-e,a=r-n;return br(s,function(l){return n+((l-e)/o*a||0)})},Uy=function i(e,t,n,r){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=jt(e),a={},l,c,u,f,h;if(n===!0&&(r=1)&&(n=null),o)e={p:e},t={p:t};else if(cn(e)&&!cn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(i(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else r||(e=rs(cn(e)?[]:{},e));if(!u){for(l in t)_h.call(a,e,l,"get",t[l]);s=function(g){return yh(g,a)||(o?e.p:e)}}}return br(n,s)},wd=function(e,t,n){var r=e.labels,s=ei,o,a,l;for(o in r)a=r[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},kn=function(e,t,n){var r=e.vars,s=r[t],o=Et,a=e._ctx,l,c,u;if(s)return l=r[t+"Params"],c=r.callbackScope||e,n&&pr.length&&jl(),a&&(Et=a),u=l?s.apply(c,l):s.call(c),Et=o,u},za=function(e){return Sr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!ln),e.progress()<1&&kn(e,"onInterrupt"),e},zs,Ig=[],Og=function(e){if(e)if(e=!e.name&&e.default||e,uh()||e.headless){var t=e.name,n=Ct(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:so,render:yh,add:_h,kill:Zy,modifier:Ky,rawVars:0},o={targetTest:0,get:0,getSetter:xh,aliases:{},register:0};if(ra(),e!==r){if(Fn[t])return;ii(r,ii(Kl(e,s),o)),rs(r.prototype,rs(s,Kl(e,o))),Fn[r.prop=t]=r,e.targetTest&&(Ll.push(r),dh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}_g(t,r),e.register&&e.register(Pn,r,An)}else Ig.push(e)},pt=255,ka={aqua:[0,pt,pt],lime:[0,pt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,pt],navy:[0,0,128],white:[pt,pt,pt],olive:[128,128,0],yellow:[pt,pt,0],orange:[pt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[pt,0,0],pink:[pt,192,203],cyan:[0,pt,pt],transparent:[pt,pt,pt,0]},Vc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*pt+.5|0},Ug=function(e,t,n){var r=e?qi(e)?[e>>16,e>>8&pt,e&pt]:0:ka.black,s,o,a,l,c,u,f,h,d,g;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ka[e])r=ka[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&pt,r&pt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&pt,e&pt]}else if(e.substr(0,3)==="hsl"){if(r=g=e.match(lf),!t)l=+r[0]%360/360,c=+r[1]/100,u=+r[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,r.length>3&&(r[3]*=1),r[0]=Vc(l+1/3,s,o),r[1]=Vc(l,s,o),r[2]=Vc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(fg),n&&r.length<4&&(r[3]=1),r}else r=e.match(lf)||ka.transparent;r=r.map(Number)}return t&&!g&&(s=r[0]/pt,o=r[1]/pt,a=r[2]/pt,f=Math.max(s,o,a),h=Math.min(s,o,a),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(o-a)/d+(o<a?6:0):f===o?(a-s)/d+2:(s-o)/d+4,l*=60),r[0]=~~(l+.5),r[1]=~~(c*100+.5),r[2]=~~(u*100+.5)),n&&r.length<4&&(r[3]=1),r},Ng=function(e){var t=[],n=[],r=-1;return e.split(mr).forEach(function(s){var o=s.match(Bs)||[];t.push.apply(t,o),n.push(r+=o.length+1)}),t.c=n,t},Ad=function(e,t,n){var r="",s=(e+r).match(mr),o=t?"hsla(":"rgba(",a=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Ug(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=Ng(e),l=n.c,l.join(r)!==u.c.join(r)))for(c=e.replace(mr,"1").split(Bs),f=c.length-1;a<f;a++)r+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(mr),f=c.length-1;a<f;a++)r+=c[a]+s[a];return r+c[f]},mr=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ka)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),Ny=/hsl[a]?\(/,Fg=function(e){var t=e.join(" "),n;if(mr.lastIndex=0,mr.test(t))return n=Ny.test(t),e[1]=Ad(e[1],n),e[0]=Ad(e[0],n,Ng(e[1])),!0},oo,Bn=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,o=s,a=[],l,c,u,f,h,d,g=function _(p){var m=i()-r,y=p===!0,v,S,R,w;if((m>e||m<0)&&(n+=m-t),r+=m,R=r-n,v=R-o,(v>0||y)&&(w=++f.frame,h=R-f.time*1e3,f.time=R=R/1e3,o+=v+(v>=s?4:s-v),S=1),y||(l=c(_)),S)for(d=0;d<a.length;d++)a[d](R,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){pg&&(!cf&&uh()&&(vi=cf=window,fh=vi.document||{},Vn.gsap=Pn,(vi.gsapVersions||(vi.gsapVersions=[])).push(Pn.version),mg(Yl||vi.GreenSockGlobals||!vi.gsap&&vi||{}),Ig.forEach(Og)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,o-f.time*1e3+1|0)},oo=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),oo=0,c=so},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),o=f.time*1e3+s},add:function(p,m,y){var v=m?function(S,R,w,T){p(S,R,w,T),f.remove(v)}:p;return f.remove(p),a[y?"unshift":"push"](v),ra(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},f}(),ra=function(){return!oo&&Bn.wake()},it={},Fy=/^[\d.\-M][\d.\-,\s]/,By=/["']/g,zy=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[r]=isNaN(c)?c.replace(By,"").trim():+c,r=l.substr(a+1).trim();return t},ky=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},Hy=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[zy(t[1])]:ky(e).split(",").map(yg)):it._CE&&Fy.test(e)?it._CE("",e):n},Bg=function(e){return function(t){return 1-e(1-t)}},zg=function i(e,t){for(var n=e._first,r;n;)n instanceof xn?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},Yr=function(e,t){return e&&(Ct(e)?e:it[e]||Hy(e))||t},hs=function(e,t,n,r){n===void 0&&(n=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},o;return wn(e,function(a){it[a]=Vn[a]=s,it[o=a.toLowerCase()]=n;for(var l in s)it[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=it[a+"."+l]=s[l]}),s},kg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Wc=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/of*(Math.asin(1/r)||0),a=function(u){return u===1?1:r*Math.pow(2,-10*u)*my((u-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:kg(a);return s=of/s,l.config=function(c,u){return i(e,c,u)},l},$c=function i(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:kg(n);return r.config=function(s){return i(e,s)},r};wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;hs(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;hs("Elastic",Wc("in"),Wc("out"),Wc());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(a){return a<t?i*a*a:a<n?i*Math.pow(a-1.5/e,2)+.75:a<r?i*(a-=2.25/e)*a+.9375:i*Math.pow(a-2.625/e,2)+.984375};hs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);hs("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});hs("Circ",function(i){return-(cg(1-i*i)-1)});hs("Sine",function(i){return i===1?1:-py(i*hy)+1});hs("Back",$c("in"),$c("out"),$c());it.SteppedEase=it.steps=Vn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,o=1-gt;return function(a){return((r*go(0,o,a)|0)+s)*n}}};ta.ease=it["quad.out"];wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return ph+=i+","+i+"Params,"});var Hg=function(e,t){this.id=dy++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vg,this.set=t?t.getSetter:xh},lo=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ia(this,+t.duration,1,1),this.data=t.data,Et&&(this._ctx=Et,Et.data.push(this)),oo||Bn.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ia(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(ra(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xc(this,n),!s._dp||s.parent||Mg(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===gt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xg(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Td(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Td(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?na(this._tTime,s)+1:1},e.timeScale=function(n,r){if(!arguments.length)return this._rts===-gt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Zl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-gt?0:this._rts,this.totalTime(go(-Math.abs(this._delay),this._tDur,s),r!==!1),vc(this),Ey(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ra(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==gt&&(this._tTime-=gt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ei(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zl(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=vy);var r=ln;return ln=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),ln=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,bd(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Yn(this,n),bn(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,bn(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-gt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-gt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-gt)},e.eventCallback=function(n,r,s){var o=this.vars;return arguments.length>1?(r?(o[n]=r,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete o[n],this):o[n]},e.then=function(n){var r=this;return new Promise(function(s){var o=Ct(n)?n:Sg,a=function(){var c=r.then;r.then=null,Ct(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){za(this)},i}();ii(lo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-gt,_prom:0,_ps:!1,_rts:1});var xn=function(i){lg(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=bn(n.sortChildren),bt&&Ei(n.parent||bt,zi(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Tg(zi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return qa(0,arguments,this),this},t.from=function(r,s,o){return qa(1,arguments,this),this},t.fromTo=function(r,s,o,a){return qa(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Xa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ut(r,s,Yn(this,o),1),this},t.call=function(r,s,o){return Ei(this,Ut.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Ut(r,o,Yn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,c,u){return o.runBackwards=1,Xa(o).immediateRender=bn(o.immediateRender),this.staggerTo(r,s,o,a,l,c,u)},t.staggerFromTo=function(r,s,o,a,l,c,u,f){return a.startAt=o,Xa(a).immediateRender=bn(a.immediateRender),this.staggerTo(r,s,a,l,c,u,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=r<=0?0:qt(r),f=this._zTime<0!=r<0&&(this._initted||!c),h,d,g,_,p,m,y,v,S,R,w,T;if(this!==bt&&u>l&&r>=0&&(u=l),u!==this._tTime||o||f){if(a!==this._time&&c&&(u+=this._time-a,r+=this._time-a),h=u,S=this._start,v=this._ts,m=!v,f&&(c||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(p*100+r,s,o);if(h=qt(u%p),u===l?(_=this._repeat,h=c):(_=~~(u/p),_&&_===u/p&&(h=c,_--),h>c&&(h=c)),R=na(this._tTime,p),!a&&this._tTime&&R!==_&&this._tTime-R*p-this._dur<=0&&(R=_),w&&_&1&&(h=c-h,T=1),_!==R&&!this._lock){var D=w&&R&1,O=D===(w&&_&1);if(_<R&&(D=!D),a=D?0:u%c?c:u,this._lock=1,this.render(a||(T?0:qt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&kn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,O&&(this._lock=2,a=D?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;zg(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=wy(this,qt(a),qt(h)),y&&(u-=h-(h=y._start))),this._tTime=u,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(kn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&r>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,o),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=-gt);break}}d=g}else{d=this._last;for(var x=r<0?r:h;d;){if(g=d._prev,(d._act||x<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(r,s,o);if(d.render(d._ts>0?(x-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(x-d._start)*d._ts,s,o||ln&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){y=0,g&&(u+=this._zTime=x?-gt:gt);break}}d=g}}if(y&&!s&&(this.pause(),y.render(h>=a?0:-gt)._zTime=h>=a?1:-1,this._ts))return this._start=S,vc(this),this.render(r,s,o);this._onUpdate&&!s&&kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Sr(this,1),!s&&!(r<0&&!a)&&(u||a||!l)&&(kn(this,u===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qi(s)||(s=Yn(this,s,r)),!(r instanceof lo)){if(cn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(jt(r))return this.addLabel(r,s);if(Ct(r))r=Ut.delayedCall(0,r);else return this}return this!==r?Ei(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ut?s&&l.push(c):(o&&l.push(c),r&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return jt(r)?this.removeLabel(r):Ct(r)?this.killTweensOf(r):(gc(this,r),r===this._recent&&(this._recent=this._last),qr(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=qt(Bn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Yn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ut.delayedCall(0,s||so,o);return a.data="isPause",this._hasPause=1,Ei(this,a,Yn(this,r))},t.removePause=function(r){var s=this._first;for(r=Yn(this,r);s;)s._start===r&&s.data==="isPause"&&Sr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)lr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ti(r),l=this._first,c=qi(s),u;l;)l instanceof Ut?xy(l._targets,a)&&(c?(!lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Yn(o,r),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=Ut.to(o,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||gt,onStart:function(){if(o.pause(),!d){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==p&&ia(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ii({startAt:{time:Yn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),wd(this,Yn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),wd(this,Yn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+gt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=r);return qr(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),qr(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=ei,c,u,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=u/o._ts,o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;ia(o,o===bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(bt._ts&&(xg(bt,Zl(r,bt)),gg=Bn.frame),Bn.frame>=Ed){Ed+=Hn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Hn.autoSleep&&Bn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Bn.sleep()}}},e}(lo);ii(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Gy=function(e,t,n,r,s,o,a){var l=new An(this._pt,e,t,0,1,qg,null,s),c=0,u=0,f,h,d,g,_,p,m,y;for(l.b=n,l.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=ao(r)),o&&(y=[n,r],o(y,e,t),n=y[0],r=y[1]),h=n.match(Hc)||[];f=Hc.exec(r);)g=f[0],_=r.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?$s(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=Hc.lastIndex);return l.c=c<r.length?r.substring(c,r.length):"",l.fp=a,(hg.test(r)||m)&&(l.e=0),this._pt=l,l},_h=function(e,t,n,r,s,o,a,l,c,u){Ct(r)&&(r=r(s||0,e,o));var f=e[t],h=n!=="get"?n:Ct(f)?c?e[t.indexOf("set")||!Ct(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Ct(f)?c?qy:$g:vh,g;if(jt(r)&&(~r.indexOf("random(")&&(r=ao(r)),r.charAt(1)==="="&&(g=$s(h,r)+(on(h)||0),(g||g===0)&&(r=g))),!u||h!==r||_f)return!isNaN(h*r)&&r!==""?(g=new An(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?jy:Xg,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!f&&!(t in e)&&hh(t,r),Gy.call(this,e,t,h,r,d,l||Hn.stringFilter,c))},Vy=function(e,t,n,r,s){if(Ct(e)&&(e=Ya(e,s,t,n,r)),!Li(e)||e.style&&e.nodeType||cn(e)||ug(e))return jt(e)?Ya(e,s,t,n,r):e;var o={},a;for(a in e)o[a]=Ya(e[a],s,t,n,r);return o},Gg=function(e,t,n,r,s,o){var a,l,c,u;if(Fn[e]&&(a=new Fn[e]).init(s,a.rawVars?t[e]:Vy(t[e],r,s,o,n),n,r,o)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==zs))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},lr,_f,gh=function i(e,t,n){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,c=r.onUpdate,u=r.runBackwards,f=r.yoyoEase,h=r.keyframes,d=r.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:p,v=e._overwrite==="auto"&&!lh,S=e.timeline,R,w,T,D,O,x,A,U,j,L,z,B,$;if(S&&(!h||!s)&&(s="none"),e._ease=Yr(s,ta.ease),e._yEase=f?Bg(Yr(f===!0?s:f,ta.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!S&&!!r.runBackwards,!S||h&&!r.stagger){if(U=p[0]?Xr(p[0]).harness:0,B=U&&r[U.prop],R=Kl(r,dh),_&&(_._zTime<0&&_.progress(1),t<0&&u&&a&&!d?_.render(-1,!0):_.revert(u&&g?Pl:gy),_._lazy=0),o){if(Sr(e._startAt=Ut.set(p,ii({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&bn(l),startAt:null,delay:0,onUpdate:c&&function(){return kn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln||!a&&!d)&&e._startAt.revert(Pl),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(a=!1),T=ii({overwrite:!1,data:"isFromStart",lazy:a&&!_&&bn(l),immediateRender:a,stagger:0,parent:m},R),B&&(T[U.prop]=B),Sr(e._startAt=Ut.set(p,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(ln?e._startAt.revert(Pl):e._startAt.render(-1,!0)),e._zTime=t,!a)i(e._startAt,gt,gt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&bn(l)||l&&!g,w=0;w<p.length;w++){if(O=p[w],A=O._gsap||mh(p)[w]._gsap,e._ptLookup[w]=L={},uf[A.id]&&pr.length&&jl(),z=y===p?w:y.indexOf(O),U&&(j=new U).init(O,B||R,e,z,y)!==!1&&(e._pt=D=new An(e._pt,O,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(X){L[X]=D}),j.priority&&(x=1)),!U||B)for(T in R)Fn[T]&&(j=Gg(T,R,e,z,O,y))?j.priority&&(x=1):L[T]=D=_h.call(e,O,T,"get",R[T],z,y,0,r.stringFilter);e._op&&e._op[w]&&e.kill(O,e._op[w]),v&&e._pt&&(lr=e,bt.killTweensOf(O,L,e.globalTime(t)),$=!e.parent,lr=0),e._pt&&l&&(uf[A.id]=1)}x&&Yg(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!$,h&&t<=0&&S.render(ei,!0,!0)},Wy=function(e,t,n,r,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return _f=1,e.vars[t]="+=0",gh(e,a),_f=0,l?ro(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=n-u.s,f.e&&(f.e=Lt(n)+on(f.e)),f.b&&(f.b=u.s+on(f.b))},$y=function(e,t){var n=e[0]?Xr(e[0]).harness:0,r=n&&n.aliases,s,o,a,l;if(!r)return t;s=rs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Xy=function(e,t,n,r){var s=t.ease||r||"power1.inOut",o,a;if(cn(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ya=function(e,t,n,r,s){return Ct(e)?e.call(t,n,r,s):jt(e)&&~e.indexOf("random(")?ao(e):e},Vg=ph+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wg={};wn(Vg+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return Wg[i]=1});var Ut=function(i){lg(e,i);function e(n,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=i.call(this,o?r:Xa(r))||this;var l=a.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,y=r.parent||bt,v=(cn(n)||ug(n)?qi(n[0]):"length"in r)?[n]:ti(n),S,R,w,T,D,O,x,A;if(a._targets=v.length?mh(v):ro("GSAP target "+n+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||h||Lo(c)||Lo(u)){if(r=a.vars,S=a.timeline=new xn({data:"nested",defaults:_||{},targets:y&&y.data==="nested"?y.vars.targets:v}),S.kill(),S.parent=S._dp=zi(a),S._start=0,h||Lo(c)||Lo(u)){if(T=v.length,x=h&&Rg(h),Li(h))for(D in h)~Vg.indexOf(D)&&(A||(A={}),A[D]=h[D]);for(R=0;R<T;R++)w=Kl(r,Wg),w.stagger=0,m&&(w.yoyoEase=m),A&&rs(w,A),O=v[R],w.duration=+Ya(c,zi(a),R,O,v),w.delay=(+Ya(u,zi(a),R,O,v)||0)-a._delay,!h&&T===1&&w.delay&&(a._delay=u=w.delay,a._start+=u,w.delay=0),S.to(O,w,x?x(R,O,v):0),S._ease=it.none;S.duration()?c=u=0:a.timeline=0}else if(g){Xa(ii(S.vars.defaults,{ease:"none"})),S._ease=Yr(g.ease||r.ease||"none");var U=0,j,L,z;if(cn(g))g.forEach(function(B){return S.to(v,B,">")}),S.duration();else{w={};for(D in g)D==="ease"||D==="easeEach"||Xy(D,g[D],w,g.easeEach);for(D in w)for(j=w[D].sort(function(B,$){return B.t-$.t}),U=0,R=0;R<j.length;R++)L=j[R],z={ease:L.e,duration:(L.t-(R?j[R-1].t:0))/100*c},z[D]=L.v,S.to(v,z,U),U+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return d===!0&&!lh&&(lr=zi(a),bt.killTweensOf(v),lr=0),Ei(y,zi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!c&&!g&&a._start===qt(y._time)&&bn(f)&&My(zi(a))&&y.data!=="nested")&&(a._tTime=-gt,a.render(Math.max(0,-u)||0)),p&&Tg(zi(a),p),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,c=this._dur,u=r<0,f=r>l-gt&&!u?l:r<gt?0:r,h,d,g,_,p,m,y,v,S;if(!c)by(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+r,s,o);if(h=qt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===qt(f/_)&&(h=c,g--),h>c&&(h=c)),m=this._yoyo&&g&1,m&&(S=this._yEase,h=c-h),p=na(this._tTime,_),h===a&&!o&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(v&&this._yEase&&zg(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(qt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(bg(this,u?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(S||this._ease)(h/c),this._from&&(this.ratio=y=1-y),h&&!a&&!s&&!g&&(kn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(u&&ff(this,r,s,o),kn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ff(this,r,!0,!0),(r||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Sr(this,1),!s&&!(u&&!a)&&(f||a||m)&&(kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){oo||Bn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||gh(this,c),u=this._ease(c/this._dur),Wy(this,r,s,o,a,u,c,l)?this.resetTo(r,s,o,a,1):(xc(this,0),this.parent||Eg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?za(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,lr&&lr.vars.overwrite!==!0)._first||za(this),this.parent&&o!==this.timeline.totalDuration()&&ia(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ti(r):a,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&Sy(a,l))return s==="all"&&(this._pt=0),za(this);for(f=this._op=this._op||[],s!=="all"&&(jt(s)&&(_={},wn(s,function(y){return _[y]=1}),s=_),s=$y(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&gc(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&za(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return qa(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return qa(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return bt.killTweensOf(r,s,o)},e}(lo);ii(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});wn("staggerTo,staggerFrom,staggerFromTo",function(i){Ut[i]=function(){var e=new xn,t=df.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var vh=function(e,t,n){return e[t]=n},$g=function(e,t,n){return e[t](n)},qy=function(e,t,n,r){return e[t](r.fp,n)},Yy=function(e,t,n){return e.setAttribute(t,n)},xh=function(e,t){return Ct(e[t])?$g:ch(e[t])&&e.setAttribute?Yy:vh},Xg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},jy=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},qg=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},yh=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Ky=function(e,t,n,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,n),s=o},Zy=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?gc(this,t,"_pt"):t.dep||(n=1),t=r;return!n},Jy=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},Yg=function(e){for(var t=e._pt,n,r,s,o;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=n}e._pt=s},An=function(){function i(t,n,r,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=r,this.r=a||Xg,this.d=l||this,this.set=c||vh,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=Jy,this.m=n,this.mt=s,this.tween=r},i}();wn(ph+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return dh[i]=1});Vn.TweenMax=Vn.TweenLite=Ut;Vn.TimelineLite=Vn.TimelineMax=xn;bt=new xn({sortChildren:!1,defaults:ta,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=Fg;var jr=[],Dl={},Qy=[],Rd=0,eS=0,Xc=function(e){return(Dl[e]||Qy).map(function(t){return t()})},gf=function(){var e=Date.now(),t=[];e-Rd>2&&(Xc("matchMediaInit"),jr.forEach(function(n){var r=n.queries,s=n.conditions,o,a,l,c;for(a in r)o=vi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Xc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(r){return n.add(null,r)})}),Rd=e,Xc("matchMedia"))},jg=function(){function i(t,n){this.selector=n&&pf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=eS++,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){Ct(n)&&(s=r,r=n,n=Ct);var o=this,a=function(){var c=Et,u=o.selector,f;return c&&c!==o&&c.data.push(o),s&&(o.selector=pf(s)),Et=o,f=r.apply(o,arguments),Ct(f)&&o._r.push(f),Et=c,o.selector=u,o.isReverted=!1,f};return o.last=a,n===Ct?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var r=Et;Et=null,n(this),Et=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof Ut&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ut)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=jr.length;o--;)jr[o].id===this.id&&jr.splice(o,1)},e.revert=function(n){this.kill(n||{})},i}(),tS=function(){function i(t){this.contexts=[],this.scope=t,Et&&Et.data.push(this)}var e=i.prototype;return e.add=function(n,r,s){Li(n)||(n={matches:n});var o=new jg(0,s||this.scope),a=o.conditions={},l,c,u;Et&&!o.selector&&(o.selector=Et.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=n;for(c in n)c==="all"?u=1:(l=vi.matchMedia(n[c]),l&&(jr.indexOf(o)<0&&jr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(gf):l.addEventListener("change",gf)));return u&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),Jl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return Og(r)})},timeline:function(e){return new xn(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,r){jt(e)&&(e=ti(e)[0]);var s=Xr(e||{}).get,o=n?Sg:yg;return n==="native"&&(n=""),e&&(t?o((Fn[t]&&Fn[t].get||s)(e,t,n,r)):function(a,l,c){return o((Fn[a]&&Fn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=ti(e),e.length>1){var r=e.map(function(u){return Pn.quickSetter(u,t,n)}),s=r.length;return function(u){for(var f=s;f--;)r[f](u)}}e=e[0]||{};var o=Fn[t],a=Xr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(u){var f=new o;zs._pt=0,f.init(e,n?u+n:u,zs,0,[e]),f.render(1,f),zs._pt&&yh(1,zs)}:a.set(e,l);return o?c:function(u){return c(e,l,n?u+n:u,a,1)}},quickTo:function(e,t,n){var r,s=Pn.to(e,rs((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),o=function(l,c,u){return s.resetTo(t,l,c,u)};return o.tween=s,o},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Yr(e.ease,ta.ease)),Md(ta,e||{})},config:function(e){return Md(Hn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Fn[a]&&!Vn[a]&&ro(t+" effect requires "+a+" plugin.")}),Gc[t]=function(a,l,c){return n(ti(a),ii(l||{},s),c)},o&&(xn.prototype[t]=function(a,l,c){return this.add(Gc[t](a,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){it[e]=Yr(t)},parseEase:function(e,t){return arguments.length?Yr(e,t):it},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new xn(e),r,s;for(n.smoothChildTiming=bn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,r=bt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]))&&Ei(n,r,r._start-r._delay),r=s;return Ei(bt,n,0),n},context:function(e,t){return e?new jg(e,t):Et},matchMedia:function(e){return new tS(e)},matchMediaRefresh:function(){return jr.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||gf()},addEventListener:function(e,t){var n=Dl[e]||(Dl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Dl[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Iy,wrapYoyo:Oy,distribute:Rg,random:Pg,snap:Cg,normalize:Dy,getUnit:on,clamp:Ry,splitColor:Ug,toArray:ti,selector:pf,mapRange:Dg,pipe:Py,unitize:Ly,interpolate:Uy,shuffle:Ag},install:mg,effects:Gc,ticker:Bn,updateRoot:xn.updateRoot,plugins:Fn,globalTimeline:bt,core:{PropTween:An,globals:_g,Tween:Ut,Timeline:xn,Animation:lo,getCache:Xr,_removeLinkedListItem:gc,reverting:function(){return ln},context:function(e){return e&&Et&&(Et.data.push(e),e._ctx=Et),Et},suppressOverwrites:function(e){return lh=e}}};wn("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return Jl[i]=Ut[i]});Bn.add(xn.updateRoot);zs=Jl.to({},{duration:0});var nS=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},iS=function(e,t){var n=e._targets,r,s,o;for(r in t)for(s=n.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=nS(o,r)),o&&o.modifier&&o.modifier(t[r],e,n[s],r))},qc=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,c;if(jt(s)&&(l={},wn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}iS(a,s)}}}},Pn=Jl.registerPlugin({name:"attr",init:function(e,t,n,r,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)ln?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},qc("roundProps",mf),qc("modifiers"),qc("snap",Cg))||Jl;Ut.version=xn.version=Pn.version="3.12.5";pg=1;uh()&&ra();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cd,cr,Xs,Sh,Gr,Pd,Eh,rS=function(){return typeof window<"u"},Yi={},Or=180/Math.PI,qs=Math.PI/180,ps=Math.atan2,Ld=1e8,Mh=/([A-Z])/g,sS=/(left|right|width|margin|padding|x)/i,aS=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},vf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},oS=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},lS=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},cS=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Kg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Zg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},uS=function(e,t,n){return e.style[t]=n},fS=function(e,t,n){return e.style.setProperty(t,n)},hS=function(e,t,n){return e._gsap[t]=n},dS=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},pS=function(e,t,n,r,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},mS=function(e,t,n,r,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},wt="transform",Rn=wt+"Origin",_S=function i(e,t){var n=this,r=this.target,s=r.style,o=r._gsap;if(e in Yi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=ki(r,a)}):this.tfm[e]=o.x?o[e]:ki(r,e),e===Rn&&(this.tfm.zOrigin=o.zOrigin);else return Ti.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(wt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Rn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Jg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},gS=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Mh,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Eh(),(!s||!s.isStart)&&!n[wt]&&(Jg(n),r.zOrigin&&n[Rn]&&(n[Rn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Qg=function(e,t){var n={target:e,props:[],revert:gS,save:_S};return e._gsap||Pn.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},ev,xf=function(e,t){var n=cr.createElementNS?cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cr.createElement(e);return n&&n.style?n:cr.createElement(e)},Ai=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Mh,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,sa(t)||t,1)||""},Dd="O,Moz,ms,Ms,Webkit".split(","),sa=function(e,t,n){var r=t||Gr,s=r.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Dd[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Dd[o]:"")+e},yf=function(){rS()&&window.document&&(Cd=window,cr=Cd.document,Xs=cr.documentElement,Gr=xf("div")||{style:{}},xf("div"),wt=sa(wt),Rn=wt+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ev=!!sa("perspective"),Eh=Pn.core.reverting,Sh=1)},Yc=function i(e){var t=xf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Xs.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Xs.removeChild(t),this.style.cssText=s,o},Id=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},tv=function(e){var t;try{t=e.getBBox()}catch{t=Yc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Yc||(t=Yc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Id(e,["x","cx","x1"])||0,y:+Id(e,["y","cy","y1"])||0,width:0,height:0}:t},nv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&tv(e))},ss=function(e,t){if(t){var n=e.style,r;t in Yi&&t!==Rn&&(t=wt),n.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(r==="--"?t:t.replace(Mh,"-$1").toLowerCase())):n.removeAttribute(t)}},ur=function(e,t,n,r,s,o){var a=new An(e._pt,t,n,0,1,o?Zg:Kg);return e._pt=a,a.b=r,a.e=s,e._props.push(n),a},Od={deg:1,rad:1,turn:1},vS={grid:1,flex:1},Er=function i(e,t,n,r){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Gr.style,l=sS.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",d=r==="%",g,_,p,m;if(r===o||!s||Od[r]||Od[o])return s;if(o!=="px"&&!h&&(s=i(e,t,n,"px")),m=e.getCTM&&nv(e),(d||o==="%")&&(Yi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Lt(d?s/g*f:s/100*g);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Bn.time&&!p.uncache)return Lt(s/p.width*f);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=f+r,g=e[u],y?e.style[t]=y:ss(e,t)}else(d||o==="%")&&!vS[Ai(_,"display")]&&(a.position=Ai(e,"position")),_===e&&(a.position="static"),_.appendChild(Gr),g=Gr[u],_.removeChild(Gr),a.position="absolute";return l&&d&&(p=Xr(_),p.time=Bn.time,p.width=_[u]),Lt(h?g*s/f:g&&s?f/g*s:0)},ki=function(e,t,n,r){var s;return Sh||yf(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Yi[t]&&t!=="transform"?(s=uo(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ec(Ai(e,Rn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Ql[t]&&Ql[t](e,t,n)||Ai(e,t)||vg(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},xS=function(e,t,n,r){if(!n||n==="none"){var s=sa(t,e,1),o=s&&Ai(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Ai(e,"borderTopColor"))}var a=new An(this._pt,e.style,t,0,1,qg),l=0,c=0,u,f,h,d,g,_,p,m,y,v,S,R;if(a.b=n,a.e=r,n+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ai(e,t)||r,_?e.style[t]=_:ss(e,t)),u=[n,r],Fg(u),n=u[0],r=u[1],h=n.match(Bs)||[],R=r.match(Bs)||[],R.length){for(;f=Bs.exec(r);)p=f[0],y=r.substring(l,f.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,S=_.substr((d+"").length),p.charAt(1)==="="&&(p=$s(d,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=Bs.lastIndex-v.length,v||(v=v||Hn.units[t]||S,l===r.length&&(r+=v,a.e+=v)),S!==v&&(d=Er(e,t,_,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Zg:Kg;return hg.test(r)&&(a.e=0),this._pt=a,a},Ud={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},yS=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=Ud[n]||n,t[1]=Ud[r]||r,t.join(" ")},SS=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Yi[a]&&(l=1,a=a==="transformOrigin"?Rn:wt),ss(n,a);l&&(ss(n,wt),o&&(o.svg&&n.removeAttribute("transform"),uo(n,1),o.uncache=1,Jg(r)))}},Ql={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var o=e._pt=new An(e._pt,t,n,0,0,SS);return o.u=r,o.pr=-10,o.tween=s,e._props.push(n),1}}},co=[1,0,0,1,0,0],iv={},rv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Nd=function(e){var t=Ai(e,wt);return rv(t)?co:t.substr(7).match(fg).map(Lt)},Th=function(e,t){var n=e._gsap||Xr(e),r=e.style,s=Nd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?co:s):(s===co&&!e.offsetParent&&e!==Xs&&!n.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,Xs.appendChild(e)),s=Nd(e),l?r.display=l:ss(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Xs.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Sf=function(e,t,n,r,s,o){var a=e._gsap,l=s||Th(e,!0),c=a.xOrigin||0,u=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],y=l[5],v=t.split(" "),S=parseFloat(v[0])||0,R=parseFloat(v[1])||0,w,T,D,O;n?l!==co&&(T=d*p-g*_)&&(D=S*(p/T)+R*(-_/T)+(_*y-p*m)/T,O=S*(-g/T)+R*(d/T)-(d*y-g*m)/T,S=D,R=O):(w=tv(e),S=w.x+(~v[0].indexOf("%")?S/100*w.width:S),R=w.y+(~(v[1]||v[0]).indexOf("%")?R/100*w.height:R)),r||r!==!1&&a.smooth?(m=S-c,y=R-u,a.xOffset=f+(m*d+y*_)-m,a.yOffset=h+(m*g+y*p)-y):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=R,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!n,e.style[Rn]="0px 0px",o&&(ur(o,a,"xOrigin",c,S),ur(o,a,"yOrigin",u,R),ur(o,a,"xOffset",f,a.xOffset),ur(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",S+" "+R)},uo=function(e,t){var n=e._gsap||new Hg(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Ai(e,Rn)||"0",u,f,h,d,g,_,p,m,y,v,S,R,w,T,D,O,x,A,U,j,L,z,B,$,X,Y,C,K,ue,Ie,W,Z;return u=f=h=_=p=m=y=v=S=0,d=g=1,n.svg=!!(e.getCTM&&nv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),r.scale=r.rotate=r.translate="none"),T=Th(e,n.svg),n.svg&&(n.uncache?(X=e.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Sf(e,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,T)),R=n.xOrigin||0,w=n.yOrigin||0,T!==co&&(A=T[0],U=T[1],j=T[2],L=T[3],u=z=T[4],f=B=T[5],T.length===6?(d=Math.sqrt(A*A+U*U),g=Math.sqrt(L*L+j*j),_=A||U?ps(U,A)*Or:0,y=j||L?ps(j,L)*Or+_:0,y&&(g*=Math.abs(Math.cos(y*qs))),n.svg&&(u-=R-(R*A+w*j),f-=w-(R*U+w*L))):(Z=T[6],Ie=T[7],C=T[8],K=T[9],ue=T[10],W=T[11],u=T[12],f=T[13],h=T[14],D=ps(Z,ue),p=D*Or,D&&(O=Math.cos(-D),x=Math.sin(-D),$=z*O+C*x,X=B*O+K*x,Y=Z*O+ue*x,C=z*-x+C*O,K=B*-x+K*O,ue=Z*-x+ue*O,W=Ie*-x+W*O,z=$,B=X,Z=Y),D=ps(-j,ue),m=D*Or,D&&(O=Math.cos(-D),x=Math.sin(-D),$=A*O-C*x,X=U*O-K*x,Y=j*O-ue*x,W=L*x+W*O,A=$,U=X,j=Y),D=ps(U,A),_=D*Or,D&&(O=Math.cos(D),x=Math.sin(D),$=A*O+U*x,X=z*O+B*x,U=U*O-A*x,B=B*O-z*x,A=$,z=X),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Lt(Math.sqrt(A*A+U*U+j*j)),g=Lt(Math.sqrt(B*B+Z*Z)),D=ps(z,B),y=Math.abs(D)>2e-4?D*Or:0,S=W?1/(W<0?-W:W):0),n.svg&&($=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!rv(Ai(e,wt)),$&&e.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Lt(d),n.scaleY=Lt(g),n.rotation=Lt(_)+a,n.rotationX=Lt(p)+a,n.rotationY=Lt(m)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(r[Rn]=ec(c)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?MS:ev?sv:ES,n.uncache=0,n},ec=function(e){return(e=e.split(" "))[0]+" "+e[1]},jc=function(e,t,n){var r=on(t);return Lt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",r)))+r},ES=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,sv(e,t)},Rr="0deg",Ea="0px",Cr=") ",sv=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,v=n.zOrigin,S="",R=m==="auto"&&e&&e!==1||m===!0;if(v&&(f!==Rr||u!==Rr)){var w=parseFloat(u)*qs,T=Math.sin(w),D=Math.cos(w),O;w=parseFloat(f)*qs,O=Math.cos(w),o=jc(y,o,T*O*-v),a=jc(y,a,-Math.sin(w)*-v),l=jc(y,l,D*O*-v+v)}p!==Ea&&(S+="perspective("+p+Cr),(r||s)&&(S+="translate("+r+"%, "+s+"%) "),(R||o!==Ea||a!==Ea||l!==Ea)&&(S+=l!==Ea||R?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Cr),c!==Rr&&(S+="rotate("+c+Cr),u!==Rr&&(S+="rotateY("+u+Cr),f!==Rr&&(S+="rotateX("+f+Cr),(h!==Rr||d!==Rr)&&(S+="skew("+h+", "+d+Cr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+Cr),y.style[wt]=S||"translate(0, 0)"},MS=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,v=parseFloat(o),S=parseFloat(a),R,w,T,D,O;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=qs,c*=qs,R=Math.cos(l)*f,w=Math.sin(l)*f,T=Math.sin(l-c)*-h,D=Math.cos(l-c)*h,c&&(u*=qs,O=Math.tan(c-u),O=Math.sqrt(1+O*O),T*=O,D*=O,u&&(O=Math.tan(u),O=Math.sqrt(1+O*O),R*=O,w*=O)),R=Lt(R),w=Lt(w),T=Lt(T),D=Lt(D)):(R=f,D=h,w=T=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=Er(d,"x",o,"px"),S=Er(d,"y",a,"px")),(g||_||p||m)&&(v=Lt(v+g-(g*R+_*T)+p),S=Lt(S+_-(g*w+_*D)+m)),(r||s)&&(O=d.getBBox(),v=Lt(v+r/100*O.width),S=Lt(S+s/100*O.height)),O="matrix("+R+","+w+","+T+","+D+","+v+","+S+")",d.setAttribute("transform",O),y&&(d.style[wt]=O)},TS=function(e,t,n,r,s){var o=360,a=jt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Or:1),c=l-r,u=r+c+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),f==="cw"&&c<0?c=(c+o*Ld)%o-~~(c/o)*o:f==="ccw"&&c>0&&(c=(c-o*Ld)%o-~~(c/o)*o)),e._pt=h=new An(e._pt,t,n,r,c,oS),h.e=u,h.u="deg",e._props.push(n),h},Fd=function(e,t){for(var n in t)e[n]=t[n];return e},bS=function(e,t,n){var r=Fd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,f,h,d,g;r.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[wt]=t,a=uo(n,1),ss(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],o[wt]=t,a=uo(n,1),o[wt]=c);for(l in Yi)c=r[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=on(c),g=on(u),f=d!==g?Er(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new An(e._pt,a,l,f,h-f,vf),e._pt.u=g||0,e._props.push(l));Fd(a,r)};wn("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",o=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(a){return e<2?i+a:"border"+a+i});Ql[e>1?"border"+i:i]=function(a,l,c,u,f){var h,d;if(arguments.length<4)return h=o.map(function(g){return ki(a,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},o.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,d,f)}});var av={name:"css",register:yf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var o=this._props,a=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,y,v,S,R,w,T,D;Sh||yf(),this.styles=this.styles||Qg(e),D=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Fn[_]&&Gg(_,t,n,r,e,s)))){if(d=typeof u,g=Ql[_],d==="function"&&(u=u.call(n,r,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ao(u)),g)g(this,e,_,u,n)&&(T=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",mr.lastIndex=0,mr.test(c)||(p=on(c),m=on(u)),m?p!==m&&(c=Er(e,_,c,m)+m):p&&(u+=p),this.add(a,"setProperty",c,u,r,s,0,0,_),o.push(_),D.push(_,0,a[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,r,e,s):l[_],jt(c)&&~c.indexOf("random(")&&(c=ao(c)),on(c+"")||c==="auto"||(c+=Hn.units[_]||on(ki(e,_))||""),(c+"").charAt(1)==="="&&(c=ki(e,_))):c=ki(e,_),h=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),_ in Ti&&(_==="autoAlpha"&&(h===1&&ki(e,"visibility")==="hidden"&&f&&(h=0),D.push("visibility",0,a.visibility),ur(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Yi,v){if(this.styles.save(_),S||(R=e._gsap,R.renderTransform&&!t.parseTransform||uo(e,t.parseTransform),w=t.smoothOrigin!==!1&&R.smooth,S=this._pt=new An(this._pt,a,wt,0,1,R.renderTransform,R,0,-1),S.dep=1),_==="scale")this._pt=new An(this._pt,R,"scaleY",R.scaleY,(y?$s(R.scaleY,y+f):f)-R.scaleY||0,vf),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){D.push(Rn,0,a[Rn]),u=yS(u),R.svg?Sf(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==R.zOrigin&&ur(this,R,"zOrigin",R.zOrigin,m),ur(this,a,_,ec(c),ec(u)));continue}else if(_==="svgOrigin"){Sf(e,u,1,w,0,this);continue}else if(_ in iv){TS(this,R,_,h,y?$s(h,y+u):u);continue}else if(_==="smoothOrigin"){ur(this,R,"smooth",R.smooth,u);continue}else if(_==="force3D"){R[_]=u;continue}else if(_==="transform"){bS(this,u,e);continue}}else _ in a||(_=sa(_)||_);if(v||(f||f===0)&&(h||h===0)&&!aS.test(u)&&_ in a)p=(c+"").substr((h+"").length),f||(f=0),m=on(u)||(_ in Hn.units?Hn.units[_]:p),p!==m&&(h=Er(e,_,c,m)),this._pt=new An(this._pt,v?R:a,_,h,(y?$s(h,y+f):f)-h,!v&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?cS:vf),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=lS);else if(_ in a)xS.call(this,e,_,c,y?y+u:u);else if(_ in e)this.add(e,_,c||e[_],y?y+u:u,r,s);else if(_!=="parseTransform"){hh(_,u);continue}v||(_ in a?D.push(_,0,a[_]):D.push(_,1,c||e[_])),o.push(_)}}T&&Yg(this)},render:function(e,t){if(t.tween._time||!Eh())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ki,aliases:Ti,getSetter:function(e,t,n){var r=Ti[t];return r&&r.indexOf(",")<0&&(t=r),t in Yi&&t!==Rn&&(e._gsap.x||ki(e,"x"))?n&&Pd===n?t==="scale"?dS:hS:(Pd=n||{})&&(t==="scale"?pS:mS):e.style&&!ch(e.style[t])?uS:~t.indexOf("-")?fS:xh(e,t)},core:{_removeProperty:ss,_getMatrix:Th}};Pn.utils.checkPrefix=sa;Pn.core.getStyleSaver=Qg;(function(i,e,t,n){var r=wn(i+","+e+","+t,function(s){Yi[s]=1});wn(e,function(s){Hn.units[s]="deg",iv[s]=1}),Ti[r[13]]=i+","+e,wn(n,function(s){var o=s.split(":");Ti[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){Hn.units[i]="px"});Pn.registerPlugin(av);var bh=Pn.registerPlugin(av)||Pn;bh.core.Tween;function Bd(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function wS(i,e,t){return e&&Bd(i.prototype,e),t&&Bd(i,t),i}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Zt,Il,zn,fr,hr,Ys,ov,Ur,ja,lv,Wi,ci,cv,uv=function(){return Zt||typeof window<"u"&&(Zt=window.gsap)&&Zt.registerPlugin&&Zt},fv=1,ks=[],et=[],Ri=[],Ka=Date.now,Ef=function(e,t){return t},AS=function(){var e=ja.core,t=e.bridge||{},n=e._scrollers,r=e._proxies;n.push.apply(n,et),r.push.apply(r,Ri),et=n,Ri=r,Ef=function(o,a){return t[o](a)}},_r=function(e,t){return~Ri.indexOf(e)&&Ri[Ri.indexOf(e)+1][t]},Za=function(e){return!!~lv.indexOf(e)},dn=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:r!==!1,capture:!!s})},hn=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Do="scrollLeft",Io="scrollTop",Mf=function(){return Wi&&Wi.isPressed||et.cache++},tc=function(e,t){var n=function r(s){if(s||s===0){fv&&(zn.history.scrollRestoration="manual");var o=Wi&&Wi.isPressed;s=r.v=Math.round(s)||(Wi&&Wi.iOS?1:0),e(s),r.cacheID=et.cache,o&&Ef("ss",s)}else(t||et.cache!==r.cacheID||Ef("ref"))&&(r.cacheID=et.cache,r.v=e());return r.v+r.offset};return n.offset=0,e&&n},yn={s:Do,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:tc(function(i){return arguments.length?zn.scrollTo(i,Ht.sc()):zn.pageXOffset||fr[Do]||hr[Do]||Ys[Do]||0})},Ht={s:Io,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:yn,sc:tc(function(i){return arguments.length?zn.scrollTo(yn.sc(),i):zn.pageYOffset||fr[Io]||hr[Io]||Ys[Io]||0})},Mn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Zt.utils.toArray)(e)[0]||(typeof e=="string"&&Zt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Mr=function(e,t){var n=t.s,r=t.sc;Za(e)&&(e=fr.scrollingElement||hr);var s=et.indexOf(e),o=r===Ht.sc?1:2;!~s&&(s=et.push(e)-1),et[s+o]||dn(e,"scroll",Mf);var a=et[s+o],l=a||(et[s+o]=tc(_r(e,n),!0)||(Za(e)?r:tc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Zt.getProperty(e,"scrollBehavior")==="smooth"),l},Tf=function(e,t,n){var r=e,s=e,o=Ka(),a=o,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=Ka();_||p-o>l?(s=r,r=g,a=o,o=p):n?r+=g:r=s+(g-s)/(p-a)*(o-a)},f=function(){s=r=n?0:r,a=o=0},h=function(g){var _=a,p=s,m=Ka();return(g||g===0)&&g!==r&&u(g),o===a||m-a>c?0:(r+(n?p:-p))/((n?m:o)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Ma=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},zd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},hv=function(){ja=Zt.core.globals().ScrollTrigger,ja&&ja.core&&AS()},dv=function(e){return Zt=e||uv(),!Il&&Zt&&typeof document<"u"&&document.body&&(zn=window,fr=document,hr=fr.documentElement,Ys=fr.body,lv=[zn,fr,hr,Ys],Zt.utils.clamp,cv=Zt.core.context||function(){},Ur="onpointerenter"in Ys?"pointer":"mouse",ov=Dt.isTouch=zn.matchMedia&&zn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in zn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ci=Dt.eventTypes=("ontouchstart"in hr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in hr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return fv=0},500),hv(),Il=1),Il};yn.op=Ht;et.cache=0;var Dt=function(){function i(t){this.init(t)}var e=i.prototype;return e.init=function(n){Il||dv(Zt)||console.warn("Please gsap.registerPlugin(Observer)"),ja||hv();var r=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,v=n.onPress,S=n.onRelease,R=n.onRight,w=n.onLeft,T=n.onUp,D=n.onDown,O=n.onChangeX,x=n.onChangeY,A=n.onChange,U=n.onToggleX,j=n.onToggleY,L=n.onHover,z=n.onHoverEnd,B=n.onMove,$=n.ignoreCheck,X=n.isNormalizer,Y=n.onGestureStart,C=n.onGestureEnd,K=n.onWheel,ue=n.onEnable,Ie=n.onDisable,W=n.onClick,Z=n.scrollSpeed,ce=n.capture,me=n.allowClicks,ye=n.lockAxis,he=n.onLockAxis;this.target=a=Mn(a)||hr,this.vars=n,d&&(d=Zt.utils.toArray(d)),r=r||1e-9,s=s||0,g=g||1,Z=Z||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(zn.getComputedStyle(Ys).lineHeight)||22);var qe,Le,N,ke,pe,Re,ge,G=this,Oe=0,b=0,E=n.passive||!u,F=Mr(a,yn),ee=Mr(a,Ht),Q=F(),te=ee(),fe=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ci[0]==="pointerdown",oe=Za(a),ae=a.ownerDocument||fr,we=[0,0,0],ze=[0,0,0],J=0,rt=function(){return J=Ka()},Ce=function(Ee,Pe){return(G.event=Ee)&&d&&~d.indexOf(Ee.target)||Pe&&fe&&Ee.pointerType!=="touch"||$&&$(Ee,Pe)},He=function(){G._vx.reset(),G._vy.reset(),Le.pause(),f&&f(G)},Te=function(){var Ee=G.deltaX=zd(we),Pe=G.deltaY=zd(ze),re=Math.abs(Ee)>=r,Ne=Math.abs(Pe)>=r;A&&(re||Ne)&&A(G,Ee,Pe,we,ze),re&&(R&&G.deltaX>0&&R(G),w&&G.deltaX<0&&w(G),O&&O(G),U&&G.deltaX<0!=Oe<0&&U(G),Oe=G.deltaX,we[0]=we[1]=we[2]=0),Ne&&(D&&G.deltaY>0&&D(G),T&&G.deltaY<0&&T(G),x&&x(G),j&&G.deltaY<0!=b<0&&j(G),b=G.deltaY,ze[0]=ze[1]=ze[2]=0),(ke||N)&&(B&&B(G),N&&(y(G),N=!1),ke=!1),Re&&!(Re=!1)&&he&&he(G),pe&&(K(G),pe=!1),qe=0},_e=function(Ee,Pe,re){we[re]+=Ee,ze[re]+=Pe,G._vx.update(Ee),G._vy.update(Pe),c?qe||(qe=requestAnimationFrame(Te)):Te()},Ge=function(Ee,Pe){ye&&!ge&&(G.axis=ge=Math.abs(Ee)>Math.abs(Pe)?"x":"y",Re=!0),ge!=="y"&&(we[2]+=Ee,G._vx.update(Ee,!0)),ge!=="x"&&(ze[2]+=Pe,G._vy.update(Pe,!0)),c?qe||(qe=requestAnimationFrame(Te)):Te()},Ke=function(Ee){if(!Ce(Ee,1)){Ee=Ma(Ee,u);var Pe=Ee.clientX,re=Ee.clientY,Ne=Pe-G.x,Ue=re-G.y,Ve=G.isDragging;G.x=Pe,G.y=re,(Ve||Math.abs(G.startX-Pe)>=s||Math.abs(G.startY-re)>=s)&&(y&&(N=!0),Ve||(G.isDragging=!0),Ge(Ne,Ue),Ve||p&&p(G))}},st=G.onPress=function(be){Ce(be,1)||be&&be.button||(G.axis=ge=null,Le.pause(),G.isPressed=!0,be=Ma(be),Oe=b=0,G.startX=G.x=be.clientX,G.startY=G.y=be.clientY,G._vx.reset(),G._vy.reset(),dn(X?a:ae,ci[1],Ke,E,!0),G.deltaX=G.deltaY=0,v&&v(G))},de=G.onRelease=function(be){if(!Ce(be,1)){hn(X?a:ae,ci[1],Ke,!0);var Ee=!isNaN(G.y-G.startY),Pe=G.isDragging,re=Pe&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ne=Ma(be);!re&&Ee&&(G._vx.reset(),G._vy.reset(),u&&me&&Zt.delayedCall(.08,function(){if(Ka()-J>300&&!be.defaultPrevented){if(be.target.click)be.target.click();else if(ae.createEvent){var Ue=ae.createEvent("MouseEvents");Ue.initMouseEvent("click",!0,!0,zn,1,Ne.screenX,Ne.screenY,Ne.clientX,Ne.clientY,!1,!1,!1,!1,0,null),be.target.dispatchEvent(Ue)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Pe&&!X&&Le.restart(!0),m&&Pe&&m(G),S&&S(G,re)}},tt=function(Ee){return Ee.touches&&Ee.touches.length>1&&(G.isGesturing=!0)&&Y(Ee,G.isDragging)},P=function(){return(G.isGesturing=!1)||C(G)},ne=function(Ee){if(!Ce(Ee)){var Pe=F(),re=ee();_e((Pe-Q)*Z,(re-te)*Z,1),Q=Pe,te=re,f&&Le.restart(!0)}},ie=function(Ee){if(!Ce(Ee)){Ee=Ma(Ee,u),K&&(pe=!0);var Pe=(Ee.deltaMode===1?l:Ee.deltaMode===2?zn.innerHeight:1)*g;_e(Ee.deltaX*Pe,Ee.deltaY*Pe,0),f&&!X&&Le.restart(!0)}},ve=function(Ee){if(!Ce(Ee)){var Pe=Ee.clientX,re=Ee.clientY,Ne=Pe-G.x,Ue=re-G.y;G.x=Pe,G.y=re,ke=!0,f&&Le.restart(!0),(Ne||Ue)&&Ge(Ne,Ue)}},De=function(Ee){G.event=Ee,L(G)},je=function(Ee){G.event=Ee,z(G)},at=function(Ee){return Ce(Ee)||Ma(Ee,u)&&W(G)};Le=G._dc=Zt.delayedCall(h||.25,He).pause(),G.deltaX=G.deltaY=0,G._vx=Tf(0,50,!0),G._vy=Tf(0,50,!0),G.scrollX=F,G.scrollY=ee,G.isDragging=G.isGesturing=G.isPressed=!1,cv(this),G.enable=function(be){return G.isEnabled||(dn(oe?ae:a,"scroll",Mf),o.indexOf("scroll")>=0&&dn(oe?ae:a,"scroll",ne,E,ce),o.indexOf("wheel")>=0&&dn(a,"wheel",ie,E,ce),(o.indexOf("touch")>=0&&ov||o.indexOf("pointer")>=0)&&(dn(a,ci[0],st,E,ce),dn(ae,ci[2],de),dn(ae,ci[3],de),me&&dn(a,"click",rt,!0,!0),W&&dn(a,"click",at),Y&&dn(ae,"gesturestart",tt),C&&dn(ae,"gestureend",P),L&&dn(a,Ur+"enter",De),z&&dn(a,Ur+"leave",je),B&&dn(a,Ur+"move",ve)),G.isEnabled=!0,be&&be.type&&st(be),ue&&ue(G)),G},G.disable=function(){G.isEnabled&&(ks.filter(function(be){return be!==G&&Za(be.target)}).length||hn(oe?ae:a,"scroll",Mf),G.isPressed&&(G._vx.reset(),G._vy.reset(),hn(X?a:ae,ci[1],Ke,!0)),hn(oe?ae:a,"scroll",ne,ce),hn(a,"wheel",ie,ce),hn(a,ci[0],st,ce),hn(ae,ci[2],de),hn(ae,ci[3],de),hn(a,"click",rt,!0),hn(a,"click",at),hn(ae,"gesturestart",tt),hn(ae,"gestureend",P),hn(a,Ur+"enter",De),hn(a,Ur+"leave",je),hn(a,Ur+"move",ve),G.isEnabled=G.isPressed=G.isDragging=!1,Ie&&Ie(G))},G.kill=G.revert=function(){G.disable();var be=ks.indexOf(G);be>=0&&ks.splice(be,1),Wi===G&&(Wi=0)},ks.push(G),X&&Za(a)&&(Wi=G),G.enable(_)},wS(i,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),i}();Dt.version="3.12.5";Dt.create=function(i){return new Dt(i)};Dt.register=dv;Dt.getAll=function(){return ks.slice()};Dt.getById=function(i){return ks.filter(function(e){return e.vars.id===i})[0]};uv()&&Zt.registerPlugin(Dt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var xe,Us,nt,Tt,ui,yt,pv,nc,fo,Ja,Ha,Oo,sn,yc,bf,_n,kd,Hd,Ns,mv,Kc,_v,mn,wf,gv,vv,or,Af,wh,js,Ah,ic,Rf,Zc,Uo=1,an=Date.now,Jc=an(),ni=0,Ga=0,Gd=function(e,t,n){var r=Nn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Vd=function(e,t){return t&&(!Nn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},RS=function i(){return Ga&&requestAnimationFrame(i)},Wd=function(){return yc=1},$d=function(){return yc=0},xi=function(e){return e},Va=function(e){return Math.round(e*1e5)/1e5||0},xv=function(){return typeof window<"u"},yv=function(){return xe||xv()&&(xe=window.gsap)&&xe.registerPlugin&&xe},as=function(e){return!!~pv.indexOf(e)},Sv=function(e){return(e==="Height"?Ah:nt["inner"+e])||ui["client"+e]||yt["client"+e]},Ev=function(e){return _r(e,"getBoundingClientRect")||(as(e)?function(){return Bl.width=nt.innerWidth,Bl.height=Ah,Bl}:function(){return Hi(e)})},CS=function(e,t,n){var r=n.d,s=n.d2,o=n.a;return(o=_r(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?Sv(s):e["client"+s])||0}},PS=function(e,t){return!t||~Ri.indexOf(e)?Ev(e):function(){return Bl}},bi=function(e,t){var n=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+r)&&(o=_r(e,n))?o()-Ev(e)()[s]:as(e)?(ui[n]||yt[n])-Sv(r):e[n]-e["offset"+r])},No=function(e,t){for(var n=0;n<Ns.length;n+=3)(!t||~t.indexOf(Ns[n+1]))&&e(Ns[n],Ns[n+1],Ns[n+2])},Nn=function(e){return typeof e=="string"},Sn=function(e){return typeof e=="function"},Wa=function(e){return typeof e=="number"},Nr=function(e){return typeof e=="object"},Ta=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Qc=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ms=Math.abs,Mv="left",Tv="top",Rh="right",Ch="bottom",Kr="width",Zr="height",Qa="Right",eo="Left",to="Top",no="Bottom",Ot="padding",Kn="margin",aa="Width",Ph="Height",kt="px",Zn=function(e){return nt.getComputedStyle(e)},LS=function(e){var t=Zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Xd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&Zn(e)[bf]!=="matrix(1, 0, 0, 1, 0, 0)"&&xe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return n&&n.progress(0).kill(),r},rc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},bv=function(e){var t=[],n=e.labels,r=e.duration(),s;for(s in n)t.push(n[s]/r);return t},DS=function(e){return function(t){return xe.utils.snap(bv(e),t)}},Lh=function(e){var t=xe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return n?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<n.length;a++)if(n[a]>=r)return n[a];return n[a-1]}else for(a=n.length,r+=o;a--;)if(n[a]<=r)return n[a];return n[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},IS=function(e){return function(t,n){return Lh(bv(e))(t,n.direction)}},Fo=function(e,t,n,r){return n.split(",").forEach(function(s){return e(t,s,r)})},Xt=function(e,t,n,r,s){return e.addEventListener(t,n,{passive:!r,capture:!!s})},$t=function(e,t,n,r){return e.removeEventListener(t,n,!!r)},Bo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},qd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},zo={toggleActions:"play",anticipatePin:0},sc={top:0,left:0,center:.5,bottom:1,right:1},Ol=function(e,t){if(Nn(e)){var n=e.indexOf("="),r=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(r*=t/100),e=e.substr(0,n-1)),e=r+(e in sc?sc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ko=function(e,t,n,r,s,o,a,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Tt.createElement("div"),_=as(n)||_r(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?yt:n,y=e.indexOf("start")!==-1,v=y?c:u,S="border-color:"+v+";font-size:"+f+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(S+=(r===Ht?Rh:Ch)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=S,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+r.op.d2],Ul(g,0,r,y),g},Ul=function(e,t,n,r){var s={display:"block"},o=n[r?"os2":"p2"],a=n[r?"p2":"os2"];e._isFlipped=r,s[n.a+"Percent"]=r?-100:0,s[n.a]=r?"1px":0,s["border"+o+aa]=1,s["border"+a+aa]=0,s[n.p]=t+"px",xe.set(e,s)},Je=[],Cf={},ho,Yd=function(){return an()-ni>34&&(ho||(ho=requestAnimationFrame(Xi)))},_s=function(){(!mn||!mn.isPressed||mn.startX>yt.clientWidth)&&(et.cache++,mn?ho||(ho=requestAnimationFrame(Xi)):Xi(),ni||ls("scrollStart"),ni=an())},eu=function(){vv=nt.innerWidth,gv=nt.innerHeight},$a=function(){et.cache++,!sn&&!_v&&!Tt.fullscreenElement&&!Tt.webkitFullscreenElement&&(!wf||vv!==nt.innerWidth||Math.abs(nt.innerHeight-gv)>nt.innerHeight*.25)&&nc.restart(!0)},os={},OS=[],wv=function i(){return $t(Xe,"scrollEnd",i)||Vr(!0)},ls=function(e){return os[e]&&os[e].map(function(t){return t()})||OS},Un=[],Av=function(e){for(var t=0;t<Un.length;t+=5)(!e||Un[t+4]&&Un[t+4].query===e)&&(Un[t].style.cssText=Un[t+1],Un[t].getBBox&&Un[t].setAttribute("transform",Un[t+2]||""),Un[t+3].uncache=1)},Dh=function(e,t){var n;for(_n=0;_n<Je.length;_n++)n=Je[_n],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ic=!0,t&&Av(t),t||ls("revert")},Rv=function(e,t){et.cache++,(t||!gn)&&et.forEach(function(n){return Sn(n)&&n.cacheID++&&(n.rec=0)}),Nn(e)&&(nt.history.scrollRestoration=wh=e)},gn,Jr=0,jd,US=function(){if(jd!==Jr){var e=jd=Jr;requestAnimationFrame(function(){return e===Jr&&Vr(!0)})}},Cv=function(){yt.appendChild(js),Ah=!mn&&js.offsetHeight||nt.innerHeight,yt.removeChild(js)},Kd=function(e){return fo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Vr=function(e,t){if(ni&&!e&&!ic){Xt(Xe,"scrollEnd",wv);return}Cv(),gn=Xe.isRefreshing=!0,et.forEach(function(r){return Sn(r)&&++r.cacheID&&(r.rec=r())});var n=ls("refreshInit");mv&&Xe.sort(),t||Dh(),et.forEach(function(r){Sn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),Je.slice(0).forEach(function(r){return r.refresh()}),ic=!1,Je.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Rf=1,Kd(!0),Je.forEach(function(r){var s=bi(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Kd(!1),Rf=0,n.forEach(function(r){return r&&r.render&&r.render(-1)}),et.forEach(function(r){Sn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Rv(wh,1),nc.pause(),Jr++,gn=2,Xi(2),Je.forEach(function(r){return Sn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),gn=Xe.isRefreshing=!1,ls("refresh")},Pf=0,Nl=1,io,Xi=function(e){if(e===2||!gn&&!ic){Xe.isUpdating=!0,io&&io.update(0);var t=Je.length,n=an(),r=n-Jc>=50,s=t&&Je[0].scroll();if(Nl=Pf>s?-1:1,gn||(Pf=s),r&&(ni&&!yc&&n-ni>200&&(ni=0,ls("scrollEnd")),Ha=Jc,Jc=n),Nl<0){for(_n=t;_n-- >0;)Je[_n]&&Je[_n].update(0,r);Nl=1}else for(_n=0;_n<t;_n++)Je[_n]&&Je[_n].update(0,r);Xe.isUpdating=!1}ho=0},Lf=[Mv,Tv,Ch,Rh,Kn+no,Kn+Qa,Kn+to,Kn+eo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Fl=Lf.concat([Kr,Zr,"boxSizing","max"+aa,"max"+Ph,"position",Kn,Ot,Ot+to,Ot+Qa,Ot+no,Ot+eo]),NS=function(e,t,n){Ks(n);var r=e._gsap;if(r.spacerIsNative)Ks(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},tu=function(e,t,n,r){if(!e._gsap.swappedIn){for(var s=Lf.length,o=t.style,a=e.style,l;s--;)l=Lf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Ch]=a[Rh]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Kr]=rc(e,yn)+kt,o[Zr]=rc(e,Ht)+kt,o[Ot]=a[Kn]=a[Tv]=a[Mv]="0",Ks(r),a[Kr]=a["max"+aa]=n[Kr],a[Zr]=a["max"+Ph]=n[Zr],a[Ot]=n[Ot],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},FS=/([A-Z])/g,Ks=function(e){if(e){var t=e.t.style,n=e.length,r=0,s,o;for((e.t._gsap||xe.core.getCache(e.t)).uncache=1;r<n;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(FS,"-$1").toLowerCase())}},Ho=function(e){for(var t=Fl.length,n=e.style,r=[],s=0;s<t;s++)r.push(Fl[s],n[Fl[s]]);return r.t=e,r},BS=function(e,t,n){for(var r=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},Bl={left:0,top:0},Zd=function(e,t,n,r,s,o,a,l,c,u,f,h,d,g){Sn(e)&&(e=e(l)),Nn(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Ol("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),Wa(e))d&&(e=xe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),a&&Ul(a,n,r,!0);else{Sn(t)&&(t=t(l));var v=(e||"0").split(" "),S,R,w,T;y=Mn(t,l)||yt,S=Hi(y)||{},(!S||!S.left&&!S.top)&&Zn(y).display==="none"&&(T=y.style.display,y.style.display="block",S=Hi(y),T?y.style.display=T:y.style.removeProperty("display")),R=Ol(v[0],S[r.d]),w=Ol(v[1]||"0",n),e=S[r.p]-c[r.p]-u+R+s-w,a&&Ul(a,w,r,n-w<20||a._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var D=e+n,O=o._isStart;p="scroll"+r.d2,Ul(o,D,r,O&&D>20||!O&&(f?Math.max(yt[p],ui[p]):o.parentNode[p])<=D+1),f&&(c=Hi(a),f&&(o.style[r.op.p]=c[r.op.p]-r.op.m-o._offset+kt))}return d&&y&&(p=Hi(y),d.seek(h),m=Hi(y),d._caScrollDist=p[r.p]-m[r.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},zS=/(webkit|moz|length|cssText|inset)/i,Jd=function(e,t,n,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===yt){e._stOrig=s.cssText,a=Zn(e);for(o in a)!+o&&!zS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=r}else s.cssText=e._stOrig;xe.core.getCache(e).uncache=1,t.appendChild(e)}},Pv=function(e,t,n){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=r,r=o,o}},Go=function(e,t,n){var r={};r[t.p]="+="+n,xe.set(e,r)},Qd=function(e,t){var n=Mr(e,t),r="_scroll"+t.p2,s=function o(a,l,c,u,f){var h=o.tween,d=l.onComplete,g={};c=c||n();var _=Pv(n,c,function(){h.kill(),o.tween=0});return f=u&&f||0,u=u||a-c,h&&h.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){et.cache++,o.tween&&Xi()},l.onComplete=function(){o.tween=0,d&&d.call(h)},h=o.tween=xe.to(e,l),h};return e[r]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Xt(e,"wheel",n.wheelHandler),Xe.isTouch&&Xt(e,"touchmove",n.wheelHandler),s},Xe=function(){function i(t,n){Us||i.register(xe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Af(this),this.init(t,n)}var e=i.prototype;return e.init=function(n,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Ga){this.update=this.refresh=this.kill=xi;return}n=Xd(Nn(n)||Wa(n)||n.nodeType?{trigger:n}:n,zo);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,v=s.once,S=s.snap,R=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,D=s.fastScrollEnd,O=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?yn:Ht,A=!f&&f!==0,U=Mn(n.scroller||nt),j=xe.core.getCache(U),L=as(U),z=("pinType"in n?n.pinType:_r(U,"pinType")||L&&"fixed")==="fixed",B=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=A&&n.toggleActions.split(" "),X="markers"in n?n.markers:zo.markers,Y=L?0:parseFloat(Zn(U)["border"+x.p2+aa])||0,C=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(C)},ue=CS(U,L,x),Ie=PS(U,L),W=0,Z=0,ce=0,me=Mr(U,x),ye,he,qe,Le,N,ke,pe,Re,ge,G,Oe,b,E,F,ee,Q,te,fe,oe,ae,we,ze,J,rt,Ce,He,Te,_e,Ge,Ke,st,de,tt,P,ne,ie,ve,De,je;if(C._startClamp=C._endClamp=!1,C._dir=x,p*=45,C.scroller=U,C.scroll=T?T.time.bind(T):me,Le=me(),C.vars=n,r=r||n.animation,"refreshPriority"in n&&(mv=1,n.refreshPriority===-9999&&(io=C)),j.tweenScroll=j.tweenScroll||{top:Qd(U,Ht),left:Qd(U,yn)},C.tweenTo=ye=j.tweenScroll[x.p],C.scrubDuration=function(re){tt=Wa(re)&&re,tt?de?de.duration(re):de=xe.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:tt,paused:!0,onComplete:function(){return m&&m(C)}}):(de&&de.progress(1).kill(),de=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&n.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(f),Ke=0,l||(l=r.vars.id)),S&&((!Nr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in yt.style&&xe.set(L?[yt,ui]:U,{scrollBehavior:"auto"}),et.forEach(function(re){return Sn(re)&&re.target===(L?Tt.scrollingElement||ui:U)&&(re.smooth=!1)}),qe=Sn(S.snapTo)?S.snapTo:S.snapTo==="labels"?DS(r):S.snapTo==="labelsDirectional"?IS(r):S.directional!==!1?function(re,Ne){return Lh(S.snapTo)(re,an()-Z<500?0:Ne.direction)}:xe.utils.snap(S.snapTo),P=S.duration||{min:.1,max:2},P=Nr(P)?Ja(P.min,P.max):Ja(P,P),ne=xe.delayedCall(S.delay||tt/2||.1,function(){var re=me(),Ne=an()-Z<500,Ue=ye.tween;if((Ne||Math.abs(C.getVelocity())<10)&&!Ue&&!yc&&W!==re){var Ve=(re-ke)/F,Mt=r&&!A?r.totalProgress():Ve,Ze=Ne?0:(Mt-st)/(an()-Ha)*1e3||0,mt=xe.utils.clamp(-Ve,1-Ve,ms(Ze/2)*Ze/.185),Bt=Ve+(S.inertia===!1?0:mt),vt,_t,ct=S,Dn=ct.onStart,M=ct.onInterrupt,I=ct.onComplete;if(vt=qe(Bt,C),Wa(vt)||(vt=Bt),_t=Math.round(ke+vt*F),re<=pe&&re>=ke&&_t!==re){if(Ue&&!Ue._initted&&Ue.data<=ms(_t-re))return;S.inertia===!1&&(mt=vt-Ve),ye(_t,{duration:P(ms(Math.max(ms(Bt-Mt),ms(vt-Mt))*.185/Ze/.05||0)),ease:S.ease||"power3",data:ms(_t-re),onInterrupt:function(){return ne.restart(!0)&&M&&M(C)},onComplete:function(){C.update(),W=me(),r&&(de?de.resetTo("totalProgress",vt,r._tTime/r._tDur):r.progress(vt)),Ke=st=r&&!A?r.totalProgress():C.progress,y&&y(C),I&&I(C)}},re,mt*F,_t-re-mt*F),Dn&&Dn(C,ye.tween)}}else C.isActive&&W!==re&&ne.restart(!0)}).pause()),l&&(Cf[l]=C),h=C.trigger=Mn(h||d!==!0&&d),je=h&&h._gsap&&h._gsap.stRevert,je&&(je=je(C)),d=d===!0?h:Mn(d),Nn(a)&&(a={targets:h,className:a}),d&&(g===!1||g===Kn||(g=!g&&d.parentNode&&d.parentNode.style&&Zn(d.parentNode).display==="flex"?!1:Ot),C.pin=d,he=xe.core.getCache(d),he.spacer?ee=he.pinState:(w&&(w=Mn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),he.spacerIsNative=!!w,w&&(he.spacerState=Ho(w))),he.spacer=fe=w||Tt.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),he.pinState=ee=Ho(d)),n.force3D!==!1&&xe.set(d,{force3D:!0}),C.spacer=fe=he.spacer,Ge=Zn(d),rt=Ge[g+x.os2],ae=xe.getProperty(d),we=xe.quickSetter(d,x.a,kt),tu(d,fe,Ge),te=Ho(d)),X){b=Nr(X)?Xd(X,qd):qd,G=ko("scroller-start",l,U,x,b,0),Oe=ko("scroller-end",l,U,x,b,0,G),oe=G["offset"+x.op.d2];var at=Mn(_r(U,"content")||U);Re=this.markerStart=ko("start",l,at,x,b,oe,0,T),ge=this.markerEnd=ko("end",l,at,x,b,oe,0,T),T&&(De=xe.quickSetter([Re,ge],x.a,kt)),!z&&!(Ri.length&&_r(U,"fixedMarkers")===!0)&&(LS(L?yt:U),xe.set([G,Oe],{force3D:!0}),He=xe.quickSetter(G,x.a,kt),_e=xe.quickSetter(Oe,x.a,kt))}if(T){var be=T.vars.onUpdate,Ee=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){C.update(0,0,1),be&&be.apply(T,Ee||[])})}if(C.previous=function(){return Je[Je.indexOf(C)-1]},C.next=function(){return Je[Je.indexOf(C)+1]},C.revert=function(re,Ne){if(!Ne)return C.kill(!0);var Ue=re!==!1||!C.enabled,Ve=sn;Ue!==C.isReverted&&(Ue&&(ie=Math.max(me(),C.scroll.rec||0),ce=C.progress,ve=r&&r.progress()),Re&&[Re,ge,G,Oe].forEach(function(Mt){return Mt.style.display=Ue?"none":"block"}),Ue&&(sn=C,C.update(Ue)),d&&(!R||!C.isActive)&&(Ue?NS(d,fe,ee):tu(d,fe,Zn(d),Ce)),Ue||C.update(Ue),sn=Ve,C.isReverted=Ue)},C.refresh=function(re,Ne,Ue,Ve){if(!((sn||!C.enabled)&&!Ne)){if(d&&re&&ni){Xt(i,"scrollEnd",wv);return}!gn&&K&&K(C),sn=C,ye.tween&&!Ue&&(ye.tween.kill(),ye.tween=0),de&&de.pause(),_&&r&&r.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Mt=ue(),Ze=Ie(),mt=T?T.duration():bi(U,x),Bt=F<=.01,vt=0,_t=Ve||0,ct=Nr(Ue)?Ue.end:n.end,Dn=n.endTrigger||h,M=Nr(Ue)?Ue.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),I=C.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,C),V=h&&Math.max(0,Je.indexOf(C))||0,H=V,k,se,Se,Fe,Me,Ae,Be,We,St,zt,ut,fn,ft;for(X&&Nr(Ue)&&(fn=xe.getProperty(G,x.p),ft=xe.getProperty(Oe,x.p));H--;)Ae=Je[H],Ae.end||Ae.refresh(0,1)||(sn=C),Be=Ae.pin,Be&&(Be===h||Be===d||Be===I)&&!Ae.isReverted&&(zt||(zt=[]),zt.unshift(Ae),Ae.revert(!0,!0)),Ae!==Je[H]&&(V--,H--);for(Sn(M)&&(M=M(C)),M=Gd(M,"start",C),ke=Zd(M,h,Mt,x,me(),Re,G,C,Ze,Y,z,mt,T,C._startClamp&&"_startClamp")||(d?-.001:0),Sn(ct)&&(ct=ct(C)),Nn(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(Nn(M)?M.split(" ")[0]:"")+ct:(vt=Ol(ct.substr(2),Mt),ct=Nn(M)?M:(T?xe.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,ke):ke)+vt,Dn=h)),ct=Gd(ct,"end",C),pe=Math.max(ke,Zd(ct||(Dn?"100% 0":mt),Dn,Mt,x,me()+vt,ge,Oe,C,Ze,Y,z,mt,T,C._endClamp&&"_endClamp"))||-.001,vt=0,H=V;H--;)Ae=Je[H],Be=Ae.pin,Be&&Ae.start-Ae._pinPush<=ke&&!T&&Ae.end>0&&(k=Ae.end-(C._startClamp?Math.max(0,Ae.start):Ae.start),(Be===h&&Ae.start-Ae._pinPush<ke||Be===I)&&isNaN(M)&&(vt+=k*(1-Ae.progress)),Be===d&&(_t+=k));if(ke+=vt,pe+=vt,C._startClamp&&(C._startClamp+=vt),C._endClamp&&!gn&&(C._endClamp=pe||-.001,pe=Math.min(pe,bi(U,x))),F=pe-ke||(ke-=.01)&&.001,Bt&&(ce=xe.utils.clamp(0,1,xe.utils.normalize(ke,pe,ie))),C._pinPush=_t,Re&&vt&&(k={},k[x.a]="+="+vt,I&&(k[x.p]="-="+me()),xe.set([Re,ge],k)),d&&!(Rf&&C.end>=bi(U,x)))k=Zn(d),Fe=x===Ht,Se=me(),ze=parseFloat(ae(x.a))+_t,!mt&&pe>1&&(ut=(L?Tt.scrollingElement||ui:U).style,ut={style:ut,value:ut["overflow"+x.a.toUpperCase()]},L&&Zn(yt)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ut.style["overflow"+x.a.toUpperCase()]="scroll")),tu(d,fe,k),te=Ho(d),se=Hi(d,!0),We=z&&Mr(U,Fe?yn:Ht)(),g?(Ce=[g+x.os2,F+_t+kt],Ce.t=fe,H=g===Ot?rc(d,x)+F+_t:0,H&&(Ce.push(x.d,H+kt),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=H+kt)),Ks(Ce),I&&Je.forEach(function($e){$e.pin===I&&$e.vars.pinSpacing!==!1&&($e._subPinOffset=!0)}),z&&me(ie)):(H=rc(d,x),H&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=H+kt)),z&&(Me={top:se.top+(Fe?Se-ke:We)+kt,left:se.left+(Fe?We:Se-ke)+kt,boxSizing:"border-box",position:"fixed"},Me[Kr]=Me["max"+aa]=Math.ceil(se.width)+kt,Me[Zr]=Me["max"+Ph]=Math.ceil(se.height)+kt,Me[Kn]=Me[Kn+to]=Me[Kn+Qa]=Me[Kn+no]=Me[Kn+eo]="0",Me[Ot]=k[Ot],Me[Ot+to]=k[Ot+to],Me[Ot+Qa]=k[Ot+Qa],Me[Ot+no]=k[Ot+no],Me[Ot+eo]=k[Ot+eo],Q=BS(ee,Me,R),gn&&me(0)),r?(St=r._initted,Kc(1),r.render(r.duration(),!0,!0),J=ae(x.a)-ze+F+_t,Te=Math.abs(F-J)>1,z&&Te&&Q.splice(Q.length-2,2),r.render(0,!0,!0),St||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),Kc(0)):J=F,ut&&(ut.value?ut.style["overflow"+x.a.toUpperCase()]=ut.value:ut.style.removeProperty("overflow-"+x.a));else if(h&&me()&&!T)for(se=h.parentNode;se&&se!==yt;)se._pinOffset&&(ke-=se._pinOffset,pe-=se._pinOffset),se=se.parentNode;zt&&zt.forEach(function($e){return $e.revert(!1,!0)}),C.start=ke,C.end=pe,Le=N=gn?ie:me(),!T&&!gn&&(Le<ie&&me(ie),C.scroll.rec=0),C.revert(!1,!0),Z=an(),ne&&(W=-1,ne.restart(!0)),sn=0,r&&A&&(r._initted||ve)&&r.progress()!==ve&&r.progress(ve||0,!0).render(r.time(),!0,!0),(Bt||ce!==C.progress||T||_)&&(r&&!A&&r.totalProgress(T&&ke<-.001&&!ce?xe.utils.normalize(ke,pe,0):ce,!0),C.progress=Bt||(Le-ke)/F===ce?0:ce),d&&g&&(fe._pinOffset=Math.round(C.progress*J)),de&&de.invalidate(),isNaN(fn)||(fn-=xe.getProperty(G,x.p),ft-=xe.getProperty(Oe,x.p),Go(G,x,fn),Go(Re,x,fn-(Ve||0)),Go(Oe,x,ft),Go(ge,x,ft-(Ve||0))),Bt&&!gn&&C.update(),u&&!gn&&!E&&(E=!0,u(C),E=!1)}},C.getVelocity=function(){return(me()-N)/(an()-Ha)*1e3||0},C.endAnimation=function(){Ta(C.callbackAnimation),r&&(de?de.progress(1):r.paused()?A||Ta(r,C.direction<0,1):Ta(r,r.reversed()))},C.labelToScroll=function(re){return r&&r.labels&&(ke||C.refresh()||ke)+r.labels[re]/r.duration()*F||0},C.getTrailing=function(re){var Ne=Je.indexOf(C),Ue=C.direction>0?Je.slice(0,Ne).reverse():Je.slice(Ne+1);return(Nn(re)?Ue.filter(function(Ve){return Ve.vars.preventOverlaps===re}):Ue).filter(function(Ve){return C.direction>0?Ve.end<=ke:Ve.start>=pe})},C.update=function(re,Ne,Ue){if(!(T&&!Ue&&!re)){var Ve=gn===!0?ie:C.scroll(),Mt=re?0:(Ve-ke)/F,Ze=Mt<0?0:Mt>1?1:Mt||0,mt=C.progress,Bt,vt,_t,ct,Dn,M,I,V;if(Ne&&(N=Le,Le=T?me():Ve,S&&(st=Ke,Ke=r&&!A?r.totalProgress():Ze)),p&&d&&!sn&&!Uo&&ni&&(!Ze&&ke<Ve+(Ve-N)/(an()-Ha)*p?Ze=1e-4:Ze===1&&pe>Ve+(Ve-N)/(an()-Ha)*p&&(Ze=.9999)),Ze!==mt&&C.enabled){if(Bt=C.isActive=!!Ze&&Ze<1,vt=!!mt&&mt<1,M=Bt!==vt,Dn=M||!!Ze!=!!mt,C.direction=Ze>mt?1:-1,C.progress=Ze,Dn&&!sn&&(_t=Ze&&!mt?0:Ze===1?1:mt===1?2:3,A&&(ct=!M&&$[_t+1]!=="none"&&$[_t+1]||$[_t],V=r&&(ct==="complete"||ct==="reset"||ct in r))),O&&(M||V)&&(V||f||!r)&&(Sn(O)?O(C):C.getTrailing(O).forEach(function(Se){return Se.endAnimation()})),A||(de&&!sn&&!Uo?(de._dp._time-de._start!==de._time&&de.render(de._dp._time-de._start),de.resetTo?de.resetTo("totalProgress",Ze,r._tTime/r._tDur):(de.vars.totalProgress=Ze,de.invalidate().restart())):r&&r.totalProgress(Ze,!!(sn&&(Z||re)))),d){if(re&&g&&(fe.style[g+x.os2]=rt),!z)we(Va(ze+J*Ze));else if(Dn){if(I=!re&&Ze>mt&&pe+1>Ve&&Ve+1>=bi(U,x),R)if(!re&&(Bt||I)){var H=Hi(d,!0),k=Ve-ke;Jd(d,yt,H.top+(x===Ht?k:0)+kt,H.left+(x===Ht?0:k)+kt)}else Jd(d,fe);Ks(Bt||I?Q:te),Te&&Ze<1&&Bt||we(ze+(Ze===1&&!I?J:0))}}S&&!ye.tween&&!sn&&!Uo&&ne.restart(!0),a&&(M||v&&Ze&&(Ze<1||!Zc))&&fo(a.targets).forEach(function(Se){return Se.classList[Bt||v?"add":"remove"](a.className)}),o&&!A&&!re&&o(C),Dn&&!sn?(A&&(V&&(ct==="complete"?r.pause().totalProgress(1):ct==="reset"?r.restart(!0).pause():ct==="restart"?r.restart(!0):r[ct]()),o&&o(C)),(M||!Zc)&&(c&&M&&Qc(C,c),B[_t]&&Qc(C,B[_t]),v&&(Ze===1?C.kill(!1,1):B[_t]=0),M||(_t=Ze===1?1:3,B[_t]&&Qc(C,B[_t]))),D&&!Bt&&Math.abs(C.getVelocity())>(Wa(D)?D:2500)&&(Ta(C.callbackAnimation),de?de.progress(1):Ta(r,ct==="reverse"?1:!Ze,1))):A&&o&&!sn&&o(C)}if(_e){var se=T?Ve/T.duration()*(T._caScrollDist||0):Ve;He(se+(G._isFlipped?1:0)),_e(se)}De&&De(-Ve/T.duration()*(T._caScrollDist||0))}},C.enable=function(re,Ne){C.enabled||(C.enabled=!0,Xt(U,"resize",$a),L||Xt(U,"scroll",_s),K&&Xt(i,"refreshInit",K),re!==!1&&(C.progress=ce=0,Le=N=W=me()),Ne!==!1&&C.refresh())},C.getTween=function(re){return re&&ye?ye.tween:de},C.setPositions=function(re,Ne,Ue,Ve){if(T){var Mt=T.scrollTrigger,Ze=T.duration(),mt=Mt.end-Mt.start;re=Mt.start+mt*re/Ze,Ne=Mt.start+mt*Ne/Ze}C.refresh(!1,!1,{start:Vd(re,Ue&&!!C._startClamp),end:Vd(Ne,Ue&&!!C._endClamp)},Ve),C.update()},C.adjustPinSpacing=function(re){if(Ce&&re){var Ne=Ce.indexOf(x.d)+1;Ce[Ne]=parseFloat(Ce[Ne])+re+kt,Ce[1]=parseFloat(Ce[1])+re+kt,Ks(Ce)}},C.disable=function(re,Ne){if(C.enabled&&(re!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Ne||de&&de.pause(),ie=0,he&&(he.uncache=1),K&&$t(i,"refreshInit",K),ne&&(ne.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!L)){for(var Ue=Je.length;Ue--;)if(Je[Ue].scroller===U&&Je[Ue]!==C)return;$t(U,"resize",$a),L||$t(U,"scroll",_s)}},C.kill=function(re,Ne){C.disable(re,Ne),de&&!Ne&&de.kill(),l&&delete Cf[l];var Ue=Je.indexOf(C);Ue>=0&&Je.splice(Ue,1),Ue===_n&&Nl>0&&_n--,Ue=0,Je.forEach(function(Ve){return Ve.scroller===C.scroller&&(Ue=1)}),Ue||gn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,re&&r.revert({kill:!1}),Ne||r.kill()),Re&&[Re,ge,G,Oe].forEach(function(Ve){return Ve.parentNode&&Ve.parentNode.removeChild(Ve)}),io===C&&(io=0),d&&(he&&(he.uncache=1),Ue=0,Je.forEach(function(Ve){return Ve.pin===d&&Ue++}),Ue||(he.spacer=0)),n.onKill&&n.onKill(C)},Je.push(C),C.enable(!1,!1),je&&je(C),r&&r.add&&!F){var Pe=C.update;C.update=function(){C.update=Pe,ke||pe||C.refresh()},xe.delayedCall(.01,C.update),F=.01,ke=pe=0}else C.refresh();d&&US()},i.register=function(n){return Us||(xe=n||yv(),xv()&&window.document&&i.enable(),Us=Ga),Us},i.defaults=function(n){if(n)for(var r in n)zo[r]=n[r];return zo},i.disable=function(n,r){Ga=0,Je.forEach(function(o){return o[r?"kill":"disable"](n)}),$t(nt,"wheel",_s),$t(Tt,"scroll",_s),clearInterval(Oo),$t(Tt,"touchcancel",xi),$t(yt,"touchstart",xi),Fo($t,Tt,"pointerdown,touchstart,mousedown",Wd),Fo($t,Tt,"pointerup,touchend,mouseup",$d),nc.kill(),No($t);for(var s=0;s<et.length;s+=3)Bo($t,et[s],et[s+1]),Bo($t,et[s],et[s+2])},i.enable=function(){if(nt=window,Tt=document,ui=Tt.documentElement,yt=Tt.body,xe&&(fo=xe.utils.toArray,Ja=xe.utils.clamp,Af=xe.core.context||xi,Kc=xe.core.suppressOverwrites||xi,wh=nt.history.scrollRestoration||"auto",Pf=nt.pageYOffset,xe.core.globals("ScrollTrigger",i),yt)){Ga=1,js=document.createElement("div"),js.style.height="100vh",js.style.position="absolute",Cv(),RS(),Dt.register(xe),i.isTouch=Dt.isTouch,or=Dt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),wf=Dt.isTouch===1,Xt(nt,"wheel",_s),pv=[nt,Tt,ui,yt],xe.matchMedia?(i.matchMedia=function(l){var c=xe.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},xe.addEventListener("matchMediaInit",function(){return Dh()}),xe.addEventListener("matchMediaRevert",function(){return Av()}),xe.addEventListener("matchMedia",function(){Vr(0,1),ls("matchMedia")}),xe.matchMedia("(orientation: portrait)",function(){return eu(),eu})):console.warn("Requires GSAP 3.11.0 or later"),eu(),Xt(Tt,"scroll",_s);var n=yt.style,r=n.borderTopStyle,s=xe.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=Hi(yt),Ht.m=Math.round(o.top+Ht.sc())||0,yn.m=Math.round(o.left+yn.sc())||0,r?n.borderTopStyle=r:n.removeProperty("border-top-style"),Oo=setInterval(Yd,250),xe.delayedCall(.5,function(){return Uo=0}),Xt(Tt,"touchcancel",xi),Xt(yt,"touchstart",xi),Fo(Xt,Tt,"pointerdown,touchstart,mousedown",Wd),Fo(Xt,Tt,"pointerup,touchend,mouseup",$d),bf=xe.utils.checkPrefix("transform"),Fl.push(bf),Us=an(),nc=xe.delayedCall(.2,Vr).pause(),Ns=[Tt,"visibilitychange",function(){var l=nt.innerWidth,c=nt.innerHeight;Tt.hidden?(kd=l,Hd=c):(kd!==l||Hd!==c)&&$a()},Tt,"DOMContentLoaded",Vr,nt,"load",Vr,nt,"resize",$a],No(Xt),Je.forEach(function(l){return l.enable(0,1)}),a=0;a<et.length;a+=3)Bo($t,et[a],et[a+1]),Bo($t,et[a],et[a+2])}},i.config=function(n){"limitCallbacks"in n&&(Zc=!!n.limitCallbacks);var r=n.syncInterval;r&&clearInterval(Oo)||(Oo=r)&&setInterval(Yd,r),"ignoreMobileResize"in n&&(wf=i.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(No($t)||No(Xt,n.autoRefreshEvents||"none"),_v=(n.autoRefreshEvents+"").indexOf("resize")===-1)},i.scrollerProxy=function(n,r){var s=Mn(n),o=et.indexOf(s),a=as(s);~o&&et.splice(o,a?6:2),r&&(a?Ri.unshift(nt,r,yt,r,ui,r):Ri.unshift(s,r))},i.clearMatchMedia=function(n){Je.forEach(function(r){return r._ctx&&r._ctx.query===n&&r._ctx.kill(!0,!0)})},i.isInViewport=function(n,r,s){var o=(Nn(n)?Mn(n):n).getBoundingClientRect(),a=o[s?Kr:Zr]*r||0;return s?o.right-a>0&&o.left+a<nt.innerWidth:o.bottom-a>0&&o.top+a<nt.innerHeight},i.positionInViewport=function(n,r,s){Nn(n)&&(n=Mn(n));var o=n.getBoundingClientRect(),a=o[s?Kr:Zr],l=r==null?a/2:r in sc?sc[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/nt.innerWidth:(o.top+l)/nt.innerHeight},i.killAll=function(n){if(Je.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var r=os.killAll||[];os={},r.forEach(function(s){return s()})}},i}();Xe.version="3.12.5";Xe.saveStyles=function(i){return i?fo(i).forEach(function(e){if(e&&e.style){var t=Un.indexOf(e);t>=0&&Un.splice(t,5),Un.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),xe.core.getCache(e),Af())}}):Un};Xe.revert=function(i,e){return Dh(!i,e)};Xe.create=function(i,e){return new Xe(i,e)};Xe.refresh=function(i){return i?$a():(Us||Xe.register())&&Vr(!0)};Xe.update=function(i){return++et.cache&&Xi(i===!0?2:0)};Xe.clearScrollMemory=Rv;Xe.maxScroll=function(i,e){return bi(i,e?yn:Ht)};Xe.getScrollFunc=function(i,e){return Mr(Mn(i),e?yn:Ht)};Xe.getById=function(i){return Cf[i]};Xe.getAll=function(){return Je.filter(function(i){return i.vars.id!=="ScrollSmoother"})};Xe.isScrolling=function(){return!!ni};Xe.snapDirectional=Lh;Xe.addEventListener=function(i,e){var t=os[i]||(os[i]=[]);~t.indexOf(e)||t.push(e)};Xe.removeEventListener=function(i,e){var t=os[i],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Xe.batch=function(i,e){var t=[],n={},r=e.interval||.016,s=e.batchMax||1e9,o=function(c,u){var f=[],h=[],d=xe.delayedCall(r,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Sn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Sn(s)&&(s=s(),Xt(Xe,"refresh",function(){return s=e.batchMax()})),fo(i).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(Xe.create(c))}),t};var ep=function(e,t,n,r){return t>r?e(r):t<0&&e(0),n>r?(r-t)/(n-t):n<0?t/(t-n):1},nu=function i(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Dt.isTouch?" pinch-zoom":""):"none",e===ui&&i(yt,t)},Vo={auto:1,scroll:1},kS=function(e){var t=e.event,n=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||xe.core.getCache(s),a=an(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==yt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Vo[(l=Zn(s)).overflowY]||Vo[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!as(s)&&(Vo[(l=Zn(s)).overflowY]||Vo[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},Lv=function(e,t,n,r){return Dt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&kS,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return n&&Xt(Tt,Dt.eventTypes[0],np,!1,!0)},onDisable:function(){return $t(Tt,Dt.eventTypes[0],np,!0)}})},HS=/(input|label|select|textarea)/i,tp,np=function(e){var t=HS.test(e.target.tagName);(t||tp)&&(e._gsapAllow=!0,tp=t)},GS=function(e){Nr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Mn(e.target)||ui,u=xe.core.globals().ScrollSmoother,f=u&&u.get(),h=or&&(e.content&&Mn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Mr(c,Ht),g=Mr(c,yn),_=1,p=(Dt.isTouch&&nt.visualViewport?nt.visualViewport.scale*nt.visualViewport.width:nt.outerWidth)/nt.innerWidth,m=0,y=Sn(r)?function(){return r(a)}:function(){return r||2.8},v,S,R=Lv(c,e.type,!0,s),w=function(){return S=!1},T=xi,D=xi,O=function(){l=bi(c,Ht),D=Ja(or?1:0,l),n&&(T=Ja(0,bi(c,yn))),v=Jr},x=function(){h._gsap.y=Va(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},A=function(){if(S){requestAnimationFrame(w);var X=Va(a.deltaY/2),Y=D(d.v-X);if(h&&Y!==d.v+d.offset){d.offset=Y-d.v;var C=Va((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",h._gsap.y=C+"px",d.cacheID=et.cache,Xi()}return!0}d.offset&&x(),S=!0},U,j,L,z,B=function(){O(),U.isActive()&&U.vars.scrollY>l&&(d()>l?U.progress(1)&&d(l):U.resetTo("scrollY",l))};return h&&xe.set(h,{y:"+=0"}),e.ignoreCheck=function($){return or&&$.type==="touchmove"&&A()||_>1.05&&$.type!=="touchstart"||a.isGesturing||$.touches&&$.touches.length>1},e.onPress=function(){S=!1;var $=_;_=Va((nt.visualViewport&&nt.visualViewport.scale||1)/p),U.pause(),$!==_&&nu(c,_>1.01?!0:n?!1:"x"),j=g(),L=d(),O(),v=Jr},e.onRelease=e.onGestureStart=function($,X){if(d.offset&&x(),!X)z.restart(!0);else{et.cache++;var Y=y(),C,K;n&&(C=g(),K=C+Y*.05*-$.velocityX/.227,Y*=ep(g,C,K,bi(c,yn)),U.vars.scrollX=T(K)),C=d(),K=C+Y*.05*-$.velocityY/.227,Y*=ep(d,C,K,bi(c,Ht)),U.vars.scrollY=D(K),U.invalidate().duration(Y).play(.01),(or&&U.vars.scrollY>=l||C>=l-1)&&xe.to({},{onUpdate:B,duration:Y})}o&&o($)},e.onWheel=function(){U._ts&&U.pause(),an()-m>1e3&&(v=0,m=an())},e.onChange=function($,X,Y,C,K){if(Jr!==v&&O(),X&&n&&g(T(C[2]===X?j+($.startX-$.x):g()+X-C[1])),Y){d.offset&&x();var ue=K[2]===Y,Ie=ue?L+$.startY-$.y:d()+Y-K[1],W=D(Ie);ue&&Ie!==W&&(L+=W-Ie),d(W)}(Y||X)&&Xi()},e.onEnable=function(){nu(c,n?!1:"x"),Xe.addEventListener("refresh",B),Xt(nt,"resize",B),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),R.enable()},e.onDisable=function(){nu(c,!0),$t(nt,"resize",B),Xe.removeEventListener("refresh",B),R.kill()},e.lockAxis=e.lockAxis!==!1,a=new Dt(e),a.iOS=or,or&&!d()&&d(1),or&&xe.ticker.add(xi),z=a._dc,U=xe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:Pv(d,d(),function(){return U.pause()})},onUpdate:Xi,onComplete:z.vars.onComplete}),a};Xe.sort=function(i){return Je.sort(i||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Xe.observe=function(i){return new Dt(i)};Xe.normalizeScroll=function(i){if(typeof i>"u")return mn;if(i===!0&&mn)return mn.enable();if(i===!1){mn&&mn.kill(),mn=i;return}var e=i instanceof Dt?i:GS(i);return mn&&mn.target===e.target&&mn.kill(),as(e.target)&&(mn=e),e};Xe.core={_getVelocityProp:Tf,_inputObserver:Lv,_scrollers:et,_proxies:Ri,bridge:{ss:function(){ni||ls("scrollStart"),ni=an()},ref:function(){return sn}}};yv()&&xe.registerPlugin(Xe);/*! *****************************************************************************
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
***************************************************************************** */var Df=function(i,e){return Df=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r])},Df(i,e)};function VS(i,e){Df(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ci=function(){return Ci=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},Ci.apply(this,arguments)};function zr(i,e,t,n){var r=arguments.length,s=r<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(s=(r<3?o(s):r>3?o(e,t,s):o(e,t))||s);return r>3&&s&&Object.defineProperty(e,t,s),s}function WS(){for(var i=0,e=0,t=arguments.length;e<t;e++)i+=arguments[e].length;for(var n=Array(i),r=0,e=0;e<t;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,r++)n[r]=s[o];return n}var Qt=function(i){try{return!!i()}catch{return!0}},$S=Qt,Ih=!$S(function(){var i=(function(){}).bind();return typeof i!="function"||i.hasOwnProperty("prototype")}),Dv=Ih,Iv=Function.prototype,If=Iv.call,XS=Dv&&Iv.bind.bind(If,If),Pt=Dv?XS:function(i){return function(){return If.apply(i,arguments)}},Ov=Pt,qS=Ov({}.toString),YS=Ov("".slice),ha=function(i){return YS(qS(i),8,-1)},jS=Pt,KS=Qt,ZS=ha,iu=Object,JS=jS("".split),Oh=KS(function(){return!iu("z").propertyIsEnumerable(0)})?function(i){return ZS(i)==="String"?JS(i,""):iu(i)}:iu,da=function(i){return i==null},QS=da,eE=TypeError,Sc=function(i){if(QS(i))throw new eE("Can't call method on "+i);return i},tE=Oh,nE=Sc,pa=function(i){return tE(nE(i))},ba=function(i){return i&&i.Math===Math&&i},Wn=ba(typeof globalThis=="object"&&globalThis)||ba(typeof window=="object"&&window)||ba(typeof self=="object"&&self)||ba(typeof Po=="object"&&Po)||ba(typeof Po=="object"&&Po)||function(){return this}()||Function("return this")(),Uv={exports:{}},iE=!1,ip=Wn,rE=Object.defineProperty,Uh=function(i,e){try{rE(ip,i,{value:e,configurable:!0,writable:!0})}catch{ip[i]=e}return e},sE=Wn,aE=Uh,rp="__core-js_shared__",sp=Uv.exports=sE[rp]||aE(rp,{});(sp.versions||(sp.versions=[])).push({version:"3.36.0",mode:"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE",source:"https://github.com/zloirock/core-js"});var Nh=Uv.exports,ap=Nh,Nv=function(i,e){return ap[i]||(ap[i]=e||{})},oE=Sc,lE=Object,vo=function(i){return lE(oE(i))},cE=Pt,uE=vo,fE=cE({}.hasOwnProperty),pi=Object.hasOwn||function(e,t){return fE(uE(e),t)},hE=Pt,dE=0,pE=Math.random(),mE=hE(1 .toString),Fh=function(i){return"Symbol("+(i===void 0?"":i)+")_"+mE(++dE+pE,36)},_E=typeof navigator<"u"&&String(navigator.userAgent)||"",Fv=Wn,ru=_E,op=Fv.process,lp=Fv.Deno,cp=op&&op.versions||lp&&lp.version,up=cp&&cp.v8,fi,ac;up&&(fi=up.split("."),ac=fi[0]>0&&fi[0]<4?1:+(fi[0]+fi[1]));!ac&&ru&&(fi=ru.match(/Edge\/(\d+)/),(!fi||fi[1]>=74)&&(fi=ru.match(/Chrome\/(\d+)/),fi&&(ac=+fi[1])));var gE=ac,fp=gE,vE=Qt,xE=Wn,yE=xE.String,Bv=!!Object.getOwnPropertySymbols&&!vE(function(){var i=Symbol("symbol detection");return!yE(i)||!(Object(i)instanceof Symbol)||!Symbol.sham&&fp&&fp<41}),SE=Bv,zv=SE&&!Symbol.sham&&typeof Symbol.iterator=="symbol",EE=Wn,ME=Nv,hp=pi,TE=Fh,bE=Bv,wE=zv,Hs=EE.Symbol,su=ME("wks"),AE=wE?Hs.for||Hs:Hs&&Hs.withoutSetter||TE,si=function(i){return hp(su,i)||(su[i]=bE&&hp(Hs,i)?Hs[i]:AE("Symbol."+i)),su[i]},au=typeof document=="object"&&document.all,en=typeof au>"u"&&au!==void 0?function(i){return typeof i=="function"||i===au}:function(i){return typeof i=="function"},RE=en,Ln=function(i){return typeof i=="object"?i!==null:RE(i)},CE=Ln,PE=String,LE=TypeError,Di=function(i){if(CE(i))return i;throw new LE(PE(i)+" is not an object")},kv={},DE=Qt,$n=!DE(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!==7}),IE=$n,OE=Qt,Hv=IE&&OE(function(){return Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype!==42}),mi={},UE=Wn,dp=Ln,Of=UE.document,NE=dp(Of)&&dp(Of.createElement),Gv=function(i){return NE?Of.createElement(i):{}},FE=$n,BE=Qt,zE=Gv,Vv=!FE&&!BE(function(){return Object.defineProperty(zE("div"),"a",{get:function(){return 7}}).a!==7}),kE=Ih,Wo=Function.prototype.call,Ji=kE?Wo.bind(Wo):function(){return Wo.apply(Wo,arguments)},ou=Wn,HE=en,GE=function(i){return HE(i)?i:void 0},xo=function(i,e){return arguments.length<2?GE(ou[i]):ou[i]&&ou[i][e]},VE=Pt,Bh=VE({}.isPrototypeOf),WE=xo,$E=en,XE=Bh,qE=zv,YE=Object,Wv=qE?function(i){return typeof i=="symbol"}:function(i){var e=WE("Symbol");return $E(e)&&XE(e.prototype,YE(i))},jE=String,zh=function(i){try{return jE(i)}catch{return"Object"}},KE=en,ZE=zh,JE=TypeError,yo=function(i){if(KE(i))return i;throw new JE(ZE(i)+" is not a function")},QE=yo,eM=da,kh=function(i,e){var t=i[e];return eM(t)?void 0:QE(t)},lu=Ji,cu=en,uu=Ln,tM=TypeError,nM=function(i,e){var t,n;if(e==="string"&&cu(t=i.toString)&&!uu(n=lu(t,i))||cu(t=i.valueOf)&&!uu(n=lu(t,i))||e!=="string"&&cu(t=i.toString)&&!uu(n=lu(t,i)))return n;throw new tM("Can't convert object to primitive value")},iM=Ji,pp=Ln,mp=Wv,rM=kh,sM=nM,aM=si,oM=TypeError,lM=aM("toPrimitive"),cM=function(i,e){if(!pp(i)||mp(i))return i;var t=rM(i,lM),n;if(t){if(e===void 0&&(e="default"),n=iM(t,i,e),!pp(n)||mp(n))return n;throw new oM("Can't convert object to primitive value")}return e===void 0&&(e="number"),sM(i,e)},uM=cM,fM=Wv,$v=function(i){var e=uM(i,"string");return fM(e)?e:e+""},hM=$n,dM=Vv,pM=Hv,$o=Di,_p=$v,mM=TypeError,fu=Object.defineProperty,_M=Object.getOwnPropertyDescriptor,hu="enumerable",du="configurable",pu="writable";mi.f=hM?pM?function(e,t,n){if($o(e),t=_p(t),$o(n),typeof e=="function"&&t==="prototype"&&"value"in n&&pu in n&&!n[pu]){var r=_M(e,t);r&&r[pu]&&(e[t]=n.value,n={configurable:du in n?n[du]:r[du],enumerable:hu in n?n[hu]:r[hu],writable:!1})}return fu(e,t,n)}:fu:function(e,t,n){if($o(e),t=_p(t),$o(n),dM)try{return fu(e,t,n)}catch{}if("get"in n||"set"in n)throw new mM("Accessors not supported");return"value"in n&&(e[t]=n.value),e};var gM=Math.ceil,vM=Math.floor,xM=Math.trunc||function(e){var t=+e;return(t>0?vM:gM)(t)},yM=xM,Hh=function(i){var e=+i;return e!==e||e===0?0:yM(e)},SM=Hh,EM=Math.max,MM=Math.min,TM=function(i,e){var t=SM(i);return t<0?EM(t+e,0):MM(t,e)},bM=Hh,wM=Math.min,AM=function(i){var e=bM(i);return e>0?wM(e,9007199254740991):0},RM=AM,Ec=function(i){return RM(i.length)},CM=pa,PM=TM,LM=Ec,gp=function(i){return function(e,t,n){var r=CM(e),s=LM(r);if(s===0)return!i&&-1;var o=PM(n,s),a;if(i&&t!==t){for(;s>o;)if(a=r[o++],a!==a)return!0}else for(;s>o;o++)if((i||o in r)&&r[o]===t)return i||o||0;return!i&&-1}},DM={includes:gp(!0),indexOf:gp(!1)},Mc={},IM=Pt,mu=pi,OM=pa,UM=DM.indexOf,NM=Mc,vp=IM([].push),Xv=function(i,e){var t=OM(i),n=0,r=[],s;for(s in t)!mu(NM,s)&&mu(t,s)&&vp(r,s);for(;e.length>n;)mu(t,s=e[n++])&&(~UM(r,s)||vp(r,s));return r},Gh=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],FM=Xv,BM=Gh,qv=Object.keys||function(e){return FM(e,BM)},zM=$n,kM=Hv,HM=mi,GM=Di,VM=pa,WM=qv;kv.f=zM&&!kM?Object.defineProperties:function(e,t){GM(e);for(var n=VM(t),r=WM(t),s=r.length,o=0,a;s>o;)HM.f(e,a=r[o++],n[a]);return e};var $M=xo,XM=$M("document","documentElement"),qM=Nv,YM=Fh,xp=qM("keys"),Vh=function(i){return xp[i]||(xp[i]=YM(i))},jM=Di,KM=kv,yp=Gh,ZM=Mc,JM=XM,QM=Gv,eT=Vh,Sp=">",Ep="<",Uf="prototype",Nf="script",Yv=eT("IE_PROTO"),_u=function(){},jv=function(i){return Ep+Nf+Sp+i+Ep+"/"+Nf+Sp},Mp=function(i){i.write(jv("")),i.close();var e=i.parentWindow.Object;return i=null,e},tT=function(){var i=QM("iframe"),e="java"+Nf+":",t;return i.style.display="none",JM.appendChild(i),i.src=String(e),t=i.contentWindow.document,t.open(),t.write(jv("document.F=Object")),t.close(),t.F},Xo,zl=function(){try{Xo=new ActiveXObject("htmlfile")}catch{}zl=typeof document<"u"?document.domain&&Xo?Mp(Xo):tT():Mp(Xo);for(var i=yp.length;i--;)delete zl[Uf][yp[i]];return zl()};ZM[Yv]=!0;var Wh=Object.create||function(e,t){var n;return e!==null?(_u[Uf]=jM(e),n=new _u,_u[Uf]=null,n[Yv]=e):n=zl(),t===void 0?n:KM.f(n,t)},nT=si,iT=Wh,rT=mi.f,Ff=nT("unscopables"),Bf=Array.prototype;Bf[Ff]===void 0&&rT(Bf,Ff,{configurable:!0,value:iT(null)});var sT=function(i){Bf[Ff][i]=!0},So={},aT=Wn,oT=en,Tp=aT.WeakMap,Kv=oT(Tp)&&/native code/.test(String(Tp)),Tc=function(i,e){return{enumerable:!(i&1),configurable:!(i&2),writable:!(i&4),value:e}},lT=$n,cT=mi,uT=Tc,$h=lT?function(i,e,t){return cT.f(i,e,uT(1,t))}:function(i,e,t){return i[e]=t,i},fT=Kv,Zv=Wn,hT=Ln,dT=$h,gu=pi,vu=Nh,pT=Vh,mT=Mc,bp="Object already initialized",zf=Zv.TypeError,_T=Zv.WeakMap,oc,po,lc,gT=function(i){return lc(i)?po(i):oc(i,{})},vT=function(i){return function(e){var t;if(!hT(e)||(t=po(e)).type!==i)throw new zf("Incompatible receiver, "+i+" required");return t}};if(fT||vu.state){var _i=vu.state||(vu.state=new _T);_i.get=_i.get,_i.has=_i.has,_i.set=_i.set,oc=function(i,e){if(_i.has(i))throw new zf(bp);return e.facade=i,_i.set(i,e),e},po=function(i){return _i.get(i)||{}},lc=function(i){return _i.has(i)}}else{var gs=pT("state");mT[gs]=!0,oc=function(i,e){if(gu(i,gs))throw new zf(bp);return e.facade=i,dT(i,gs,e),e},po=function(i){return gu(i,gs)?i[gs]:{}},lc=function(i){return gu(i,gs)}}var ma={set:oc,get:po,has:lc,enforce:gT,getterFor:vT},Xh={},qh={},Jv={}.propertyIsEnumerable,Qv=Object.getOwnPropertyDescriptor,xT=Qv&&!Jv.call({1:2},1);qh.f=xT?function(e){var t=Qv(this,e);return!!t&&t.enumerable}:Jv;var yT=$n,ST=Ji,ET=qh,MT=Tc,TT=pa,bT=$v,wT=pi,AT=Vv,wp=Object.getOwnPropertyDescriptor;Xh.f=yT?wp:function(e,t){if(e=TT(e),t=bT(t),AT)try{return wp(e,t)}catch{}if(wT(e,t))return MT(!ST(ET.f,e,t),e[t])};var e0={exports:{}},kf=$n,RT=pi,t0=Function.prototype,CT=kf&&Object.getOwnPropertyDescriptor,Yh=RT(t0,"name"),PT=Yh&&(function(){}).name==="something",LT=Yh&&(!kf||kf&&CT(t0,"name").configurable),n0={EXISTS:Yh,PROPER:PT,CONFIGURABLE:LT},DT=Pt,IT=en,Hf=Nh,OT=DT(Function.toString);IT(Hf.inspectSource)||(Hf.inspectSource=function(i){return OT(i)});var i0=Hf.inspectSource,jh=Pt,UT=Qt,NT=en,qo=pi,Gf=$n,FT=n0.CONFIGURABLE,BT=i0,r0=ma,zT=r0.enforce,kT=r0.get,Ap=String,kl=Object.defineProperty,HT=jh("".slice),GT=jh("".replace),VT=jh([].join),WT=Gf&&!UT(function(){return kl(function(){},"length",{value:8}).length!==8}),$T=String(String).split("String"),XT=e0.exports=function(i,e,t){HT(Ap(e),0,7)==="Symbol("&&(e="["+GT(Ap(e),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),t&&t.getter&&(e="get "+e),t&&t.setter&&(e="set "+e),(!qo(i,"name")||FT&&i.name!==e)&&(Gf?kl(i,"name",{value:e,configurable:!0}):i.name=e),WT&&t&&qo(t,"arity")&&i.length!==t.arity&&kl(i,"length",{value:t.arity});try{t&&qo(t,"constructor")&&t.constructor?Gf&&kl(i,"prototype",{writable:!1}):i.prototype&&(i.prototype=void 0)}catch{}var n=zT(i);return qo(n,"source")||(n.source=VT($T,typeof e=="string"?e:"")),i};Function.prototype.toString=XT(function(){return NT(this)&&kT(this).source||BT(this)},"toString");var s0=e0.exports,qT=en,YT=mi,jT=s0,KT=Uh,_a=function(i,e,t,n){n||(n={});var r=n.enumerable,s=n.name!==void 0?n.name:e;if(qT(t)&&jT(t,s,n),n.global)r?i[e]=t:KT(e,t);else{try{n.unsafe?i[e]&&(r=!0):delete i[e]}catch{}r?i[e]=t:YT.f(i,e,{value:t,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return i},bc={},ZT=Xv,JT=Gh,QT=JT.concat("length","prototype");bc.f=Object.getOwnPropertyNames||function(e){return ZT(e,QT)};var Kh={};Kh.f=Object.getOwnPropertySymbols;var eb=xo,tb=Pt,nb=bc,ib=Kh,rb=Di,sb=tb([].concat),ab=eb("Reflect","ownKeys")||function(e){var t=nb.f(rb(e)),n=ib.f;return n?sb(t,n(e)):t},Rp=pi,ob=ab,lb=Xh,cb=mi,ub=function(i,e,t){for(var n=ob(e),r=cb.f,s=lb.f,o=0;o<n.length;o++){var a=n[o];!Rp(i,a)&&!(t&&Rp(t,a))&&r(i,a,s(e,a))}},fb=Qt,hb=en,db=/#|\.prototype\./,Eo=function(i,e){var t=mb[pb(i)];return t===gb?!0:t===_b?!1:hb(e)?fb(e):!!e},pb=Eo.normalize=function(i){return String(i).replace(db,".").toLowerCase()},mb=Eo.data={},_b=Eo.NATIVE="N",gb=Eo.POLYFILL="P",a0=Eo,Yo=Wn,vb=Xh.f,xb=$h,yb=_a,Sb=Uh,Eb=ub,Mb=a0,ga=function(i,e){var t=i.target,n=i.global,r=i.stat,s,o,a,l,c,u;if(n?o=Yo:r?o=Yo[t]||Sb(t,{}):o=Yo[t]&&Yo[t].prototype,o)for(a in e){if(c=e[a],i.dontCallGetSet?(u=vb(o,a),l=u&&u.value):l=o[a],s=Mb(n?a:t+(r?".":"#")+a,i.forced),!s&&l!==void 0){if(typeof c==typeof l)continue;Eb(c,l)}(i.sham||l&&l.sham)&&xb(c,"sham",!0),yb(o,a,c,i)}},Tb=Qt,bb=!Tb(function(){function i(){}return i.prototype.constructor=null,Object.getPrototypeOf(new i)!==i.prototype}),wb=pi,Ab=en,Rb=vo,Cb=Vh,Pb=bb,Cp=Cb("IE_PROTO"),Vf=Object,Lb=Vf.prototype,o0=Pb?Vf.getPrototypeOf:function(i){var e=Rb(i);if(wb(e,Cp))return e[Cp];var t=e.constructor;return Ab(t)&&e instanceof t?t.prototype:e instanceof Vf?Lb:null},Db=Qt,Ib=en,Ob=Ln,Pp=o0,Ub=_a,Nb=si,Wf=Nb("iterator"),l0=!1,cs,xu,yu;[].keys&&(yu=[].keys(),"next"in yu?(xu=Pp(Pp(yu)),xu!==Object.prototype&&(cs=xu)):l0=!0);var Fb=!Ob(cs)||Db(function(){var i={};return cs[Wf].call(i)!==i});Fb&&(cs={});Ib(cs[Wf])||Ub(cs,Wf,function(){return this});var c0={IteratorPrototype:cs,BUGGY_SAFARI_ITERATORS:l0},Bb=mi.f,zb=pi,kb=si,Lp=kb("toStringTag"),Zh=function(i,e,t){i&&!t&&(i=i.prototype),i&&!zb(i,Lp)&&Bb(i,Lp,{configurable:!0,value:e})},Hb=c0.IteratorPrototype,Gb=Wh,Vb=Tc,Wb=Zh,$b=So,Xb=function(){return this},qb=function(i,e,t,n){var r=e+" Iterator";return i.prototype=Gb(Hb,{next:Vb(+!n,t)}),Wb(i,r,!1),$b[r]=Xb,i},Yb=Pt,jb=yo,Kb=function(i,e,t){try{return Yb(jb(Object.getOwnPropertyDescriptor(i,e)[t]))}catch{}},Zb=Ln,Jb=function(i){return Zb(i)||i===null},Qb=Jb,ew=String,tw=TypeError,nw=function(i){if(Qb(i))return i;throw new tw("Can't set "+ew(i)+" as a prototype")},iw=Kb,rw=Di,sw=nw,u0=Object.setPrototypeOf||("__proto__"in{}?function(){var i=!1,e={},t;try{t=iw(Object.prototype,"__proto__","set"),t(e,[]),i=e instanceof Array}catch{}return function(r,s){return rw(r),sw(s),i?t(r,s):r.__proto__=s,r}}():void 0),aw=ga,ow=Ji,f0=n0,lw=en,cw=qb,Dp=o0,Ip=u0,uw=Zh,fw=$h,Su=_a,hw=si,dw=So,h0=c0,pw=f0.PROPER,mw=f0.CONFIGURABLE,Op=h0.IteratorPrototype,jo=h0.BUGGY_SAFARI_ITERATORS,wa=hw("iterator"),Up="keys",Aa="values",Np="entries",_w=function(){return this},Jh=function(i,e,t,n,r,s,o){cw(t,e,n);var a=function(m){if(m===r&&h)return h;if(!jo&&m&&m in u)return u[m];switch(m){case Up:return function(){return new t(this,m)};case Aa:return function(){return new t(this,m)};case Np:return function(){return new t(this,m)}}return function(){return new t(this)}},l=e+" Iterator",c=!1,u=i.prototype,f=u[wa]||u["@@iterator"]||r&&u[r],h=!jo&&f||a(r),d=e==="Array"&&u.entries||f,g,_,p;if(d&&(g=Dp(d.call(new i)),g!==Object.prototype&&g.next&&(Dp(g)!==Op&&(Ip?Ip(g,Op):lw(g[wa])||Su(g,wa,_w)),uw(g,l,!0))),pw&&r===Aa&&f&&f.name!==Aa&&(mw?fw(u,"name",Aa):(c=!0,h=function(){return ow(f,this)})),r)if(_={values:a(Aa),keys:s?h:a(Up),entries:a(Np)},o)for(p in _)(jo||c||!(p in u))&&Su(u,p,_[p]);else aw({target:e,proto:!0,forced:jo||c},_);return u[wa]!==h&&Su(u,wa,h,{name:r}),dw[e]=h,_},Qh=function(i,e){return{value:i,done:e}},gw=pa,ed=sT,Fp=So,d0=ma,vw=mi.f,xw=Jh,Ko=Qh,yw=$n,p0="Array Iterator",Sw=d0.set,Ew=d0.getterFor(p0);xw(Array,"Array",function(i,e){Sw(this,{type:p0,target:gw(i),index:0,kind:e})},function(){var i=Ew(this),e=i.target,t=i.index++;if(!e||t>=e.length)return i.target=void 0,Ko(void 0,!0);switch(i.kind){case"keys":return Ko(t,!1);case"values":return Ko(e[t],!1)}return Ko([t,e[t]],!1)},"values");var Bp=Fp.Arguments=Fp.Array;ed("keys");ed("values");ed("entries");if(yw&&Bp.name!=="values")try{vw(Bp,"name",{value:"values"})}catch{}var m0={exports:{}},_0={},Mw=Pt,Tw=Mw([].slice),bw=ha,ww=pa,g0=bc.f,Aw=Tw,v0=typeof window=="object"&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Rw=function(i){try{return g0(i)}catch{return Aw(v0)}};_0.f=function(e){return v0&&bw(e)==="Window"?Rw(e):g0(ww(e))};var Cw=Qt,Pw=Cw(function(){if(typeof ArrayBuffer=="function"){var i=new ArrayBuffer(8);Object.isExtensible(i)&&Object.defineProperty(i,"a",{value:8})}}),Lw=Qt,Dw=Ln,Iw=ha,zp=Pw,Hl=Object.isExtensible,Ow=Lw(function(){Hl(1)}),Uw=Ow||zp?function(e){return!Dw(e)||zp&&Iw(e)==="ArrayBuffer"?!1:Hl?Hl(e):!0}:Hl,Nw=Qt,x0=!Nw(function(){return Object.isExtensible(Object.preventExtensions({}))}),Fw=ga,Bw=Pt,zw=Mc,kw=Ln,td=pi,Hw=mi.f,kp=bc,Gw=_0,nd=Uw,Vw=Fh,Ww=x0,y0=!1,ji=Vw("meta"),$w=0,id=function(i){Hw(i,ji,{value:{objectID:"O"+$w++,weakData:{}}})},Xw=function(i,e){if(!kw(i))return typeof i=="symbol"?i:(typeof i=="string"?"S":"P")+i;if(!td(i,ji)){if(!nd(i))return"F";if(!e)return"E";id(i)}return i[ji].objectID},qw=function(i,e){if(!td(i,ji)){if(!nd(i))return!0;if(!e)return!1;id(i)}return i[ji].weakData},Yw=function(i){return Ww&&y0&&nd(i)&&!td(i,ji)&&id(i),i},jw=function(){Kw.enable=function(){},y0=!0;var i=kp.f,e=Bw([].splice),t={};t[ji]=1,i(t).length&&(kp.f=function(n){for(var r=i(n),s=0,o=r.length;s<o;s++)if(r[s]===ji){e(r,s,1);break}return r},Fw({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:Gw.f}))},Kw=m0.exports={enable:jw,fastKey:Xw,getWeakData:qw,onFreeze:Yw};zw[ji]=!0;var wc=m0.exports,Zw=ha,Jw=Pt,Qw=function(i){if(Zw(i)==="Function")return Jw(i)},Hp=Qw,eA=yo,tA=Ih,nA=Hp(Hp.bind),Ac=function(i,e){return eA(i),e===void 0?i:tA?nA(i,e):function(){return i.apply(e,arguments)}},iA=si,rA=So,sA=iA("iterator"),aA=Array.prototype,S0=function(i){return i!==void 0&&(rA.Array===i||aA[sA]===i)},oA=si,lA=oA("toStringTag"),E0={};E0[lA]="z";var rd=String(E0)==="[object z]",cA=rd,uA=en,Gl=ha,fA=si,hA=fA("toStringTag"),dA=Object,pA=Gl(function(){return arguments}())==="Arguments",mA=function(i,e){try{return i[e]}catch{}},Rc=cA?Gl:function(i){var e,t,n;return i===void 0?"Undefined":i===null?"Null":typeof(t=mA(e=dA(i),hA))=="string"?t:pA?Gl(e):(n=Gl(e))==="Object"&&uA(e.callee)?"Arguments":n},_A=Rc,Gp=kh,gA=da,vA=So,xA=si,yA=xA("iterator"),sd=function(i){if(!gA(i))return Gp(i,yA)||Gp(i,"@@iterator")||vA[_A(i)]},SA=Ji,EA=yo,MA=Di,TA=zh,bA=sd,wA=TypeError,M0=function(i,e){var t=arguments.length<2?bA(i):e;if(EA(t))return MA(SA(t,i));throw new wA(TA(i)+" is not iterable")},AA=Ji,Vp=Di,RA=kh,T0=function(i,e,t){var n,r;Vp(i);try{if(n=RA(i,"return"),!n){if(e==="throw")throw t;return t}n=AA(n,i)}catch(s){r=!0,n=s}if(e==="throw")throw t;if(r)throw n;return Vp(n),t},CA=Ac,PA=Ji,LA=Di,DA=zh,IA=S0,OA=Ec,Wp=Bh,UA=M0,NA=sd,$p=T0,FA=TypeError,Vl=function(i,e){this.stopped=i,this.result=e},Xp=Vl.prototype,Cc=function(i,e,t){var n=t&&t.that,r=!!(t&&t.AS_ENTRIES),s=!!(t&&t.IS_RECORD),o=!!(t&&t.IS_ITERATOR),a=!!(t&&t.INTERRUPTED),l=CA(e,n),c,u,f,h,d,g,_,p=function(y){return c&&$p(c,"normal",y),new Vl(!0,y)},m=function(y){return r?(LA(y),a?l(y[0],y[1],p):l(y[0],y[1])):a?l(y,p):l(y)};if(s)c=i.iterator;else if(o)c=i;else{if(u=NA(i),!u)throw new FA(DA(i)+" is not iterable");if(IA(u)){for(f=0,h=OA(i);h>f;f++)if(d=m(i[f]),d&&Wp(Xp,d))return d;return new Vl(!1)}c=UA(i,u)}for(g=s?i.next:c.next;!(_=PA(g,c)).done;){try{d=m(_.value)}catch(y){$p(c,"throw",y)}if(typeof d=="object"&&d&&Wp(Xp,d))return d}return new Vl(!1)},BA=Bh,zA=TypeError,ad=function(i,e){if(BA(e,i))return i;throw new zA("Incorrect invocation")},kA=si,b0=kA("iterator"),w0=!1;try{var HA=0,qp={next:function(){return{done:!!HA++}},return:function(){w0=!0}};qp[b0]=function(){return this},Array.from(qp,function(){throw 2})}catch{}var A0=function(i,e){try{if(!e&&!w0)return!1}catch{return!1}var t=!1;try{var n={};n[b0]=function(){return{next:function(){return{done:t=!0}}}},i(n)}catch{}return t},GA=en,VA=Ln,Yp=u0,WA=function(i,e,t){var n,r;return Yp&&GA(n=e.constructor)&&n!==t&&VA(r=n.prototype)&&r!==t.prototype&&Yp(i,r),i},$A=ga,XA=Wn,qA=Pt,jp=a0,YA=_a,jA=wc,KA=Cc,ZA=ad,JA=en,QA=da,Eu=Ln,Mu=Qt,e1=A0,t1=Zh,n1=WA,od=function(i,e,t){var n=i.indexOf("Map")!==-1,r=i.indexOf("Weak")!==-1,s=n?"set":"add",o=XA[i],a=o&&o.prototype,l=o,c={},u=function(m){var y=qA(a[m]);YA(a,m,m==="add"?function(S){return y(this,S===0?0:S),this}:m==="delete"?function(v){return r&&!Eu(v)?!1:y(this,v===0?0:v)}:m==="get"?function(S){return r&&!Eu(S)?void 0:y(this,S===0?0:S)}:m==="has"?function(S){return r&&!Eu(S)?!1:y(this,S===0?0:S)}:function(S,R){return y(this,S===0?0:S,R),this})},f=jp(i,!JA(o)||!(r||a.forEach&&!Mu(function(){new o().entries().next()})));if(f)l=t.getConstructor(e,i,n,s),jA.enable();else if(jp(i,!0)){var h=new l,d=h[s](r?{}:-0,1)!==h,g=Mu(function(){h.has(1)}),_=e1(function(m){new o(m)}),p=!r&&Mu(function(){for(var m=new o,y=5;y--;)m[s](y,y);return!m.has(-0)});_||(l=e(function(m,y){ZA(m,a);var v=n1(new o,m,l);return QA(y)||KA(y,v[s],{that:v,AS_ENTRIES:n}),v}),l.prototype=a,a.constructor=l),(g||p)&&(u("delete"),u("has"),n&&u("get")),(p||d)&&u(s),r&&a.clear&&delete a.clear}return c[i]=l,$A({global:!0,constructor:!0,forced:l!==o},c),t1(l,i),r||t.setStrong(l,i,n),l},Kp=s0,i1=mi,R0=function(i,e,t){return t.get&&Kp(t.get,e,{getter:!0}),t.set&&Kp(t.set,e,{setter:!0}),i1.f(i,e,t)},r1=_a,ld=function(i,e,t){for(var n in e)r1(i,n,e[n],t);return i},s1=xo,a1=R0,o1=si,l1=$n,Zp=o1("species"),c1=function(i){var e=s1(i);l1&&e&&!e[Zp]&&a1(e,Zp,{configurable:!0,get:function(){return this}})},Jp=Wh,u1=R0,Qp=ld,f1=Ac,h1=ad,d1=da,p1=Cc,m1=Jh,Zo=Qh,_1=c1,Ra=$n,em=wc.fastKey,C0=ma,tm=C0.set,Tu=C0.getterFor,P0={getConstructor:function(i,e,t,n){var r=i(function(c,u){h1(c,s),tm(c,{type:e,index:Jp(null),first:void 0,last:void 0,size:0}),Ra||(c.size=0),d1(u)||p1(u,c[n],{that:c,AS_ENTRIES:t})}),s=r.prototype,o=Tu(e),a=function(c,u,f){var h=o(c),d=l(c,u),g,_;return d?d.value=f:(h.last=d={index:_=em(u,!0),key:u,value:f,previous:g=h.last,next:void 0,removed:!1},h.first||(h.first=d),g&&(g.next=d),Ra?h.size++:c.size++,_!=="F"&&(h.index[_]=d)),c},l=function(c,u){var f=o(c),h=em(u),d;if(h!=="F")return f.index[h];for(d=f.first;d;d=d.next)if(d.key===u)return d};return Qp(s,{clear:function(){for(var u=this,f=o(u),h=f.first;h;)h.removed=!0,h.previous&&(h.previous=h.previous.next=void 0),h=h.next;f.first=f.last=void 0,f.index=Jp(null),Ra?f.size=0:u.size=0},delete:function(c){var u=this,f=o(u),h=l(u,c);if(h){var d=h.next,g=h.previous;delete f.index[h.index],h.removed=!0,g&&(g.next=d),d&&(d.previous=g),f.first===h&&(f.first=d),f.last===h&&(f.last=g),Ra?f.size--:u.size--}return!!h},forEach:function(u){for(var f=o(this),h=f1(u,arguments.length>1?arguments[1]:void 0),d;d=d?d.next:f.first;)for(h(d.value,d.key,this);d&&d.removed;)d=d.previous},has:function(u){return!!l(this,u)}}),Qp(s,t?{get:function(u){var f=l(this,u);return f&&f.value},set:function(u,f){return a(this,u===0?0:u,f)}}:{add:function(u){return a(this,u=u===0?0:u,u)}}),Ra&&u1(s,"size",{configurable:!0,get:function(){return o(this).size}}),r},setStrong:function(i,e,t){var n=e+" Iterator",r=Tu(e),s=Tu(n);m1(i,e,function(o,a){tm(this,{type:n,target:o,state:r(o),kind:a,last:void 0})},function(){for(var o=s(this),a=o.kind,l=o.last;l&&l.removed;)l=l.previous;return!o.target||!(o.last=l=l?l.next:o.state.first)?(o.target=void 0,Zo(void 0,!0)):Zo(a==="keys"?l.key:a==="values"?l.value:[l.key,l.value],!1)},t?"entries":"values",!t,!0),_1(e)}},g1=od,v1=P0;g1("Map",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},v1);var Jo=Pt,Ca=Map.prototype,x1={Map,set:Jo(Ca.set),get:Jo(Ca.get),has:Jo(Ca.has),remove:Jo(Ca.delete),proto:Ca},y1=ga,S1=Pt,E1=yo,M1=Sc,T1=Cc,Pc=x1,b1=iE,w1=Pc.Map,A1=Pc.has,R1=Pc.get,C1=Pc.set,P1=S1([].push);y1({target:"Map",stat:!0,forced:b1},{groupBy:function(e,t){M1(e),E1(t);var n=new w1,r=0;return T1(e,function(s){var o=t(s,r++);A1(n,o)?P1(R1(n,o),s):C1(n,o,[s])}),n}});var L1=rd,D1=Rc,I1=L1?{}.toString:function(){return"[object "+D1(this)+"]"},O1=rd,U1=_a,N1=I1;O1||U1(Object.prototype,"toString",N1,{unsafe:!0});var F1=Rc,B1=String,L0=function(i){if(F1(i)==="Symbol")throw new TypeError("Cannot convert a Symbol value to a string");return B1(i)},cd=Pt,z1=Hh,k1=L0,H1=Sc,G1=cd("".charAt),nm=cd("".charCodeAt),V1=cd("".slice),im=function(i){return function(e,t){var n=k1(H1(e)),r=z1(t),s=n.length,o,a;return r<0||r>=s?i?"":void 0:(o=nm(n,r),o<55296||o>56319||r+1===s||(a=nm(n,r+1))<56320||a>57343?i?G1(n,r):o:i?V1(n,r,r+2):(o-55296<<10)+(a-56320)+65536)}},W1={codeAt:im(!1),charAt:im(!0)},$1=W1.charAt,X1=L0,D0=ma,q1=Jh,rm=Qh,I0="String Iterator",Y1=D0.set,j1=D0.getterFor(I0);q1(String,"String",function(i){Y1(this,{type:I0,string:X1(i),index:0})},function(){var e=j1(this),t=e.string,n=e.index,r;return n>=t.length?rm(void 0,!0):(r=$1(t,n),e.index+=r.length,rm(r,!1))});var K1=Wn,Mo=K1,Z1=Mo;Z1.Map;var J1=od,Q1=P0;J1("Set",function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},Q1);var eR=Mo;eR.Set;var tR=ha,nR=Array.isArray||function(e){return tR(e)==="Array"},iR=Pt,rR=Qt,O0=en,sR=Rc,aR=xo,oR=i0,U0=function(){},N0=aR("Reflect","construct"),ud=/^\s*(?:class|function)\b/,lR=iR(ud.exec),cR=!ud.test(U0),Pa=function(e){if(!O0(e))return!1;try{return N0(U0,[],e),!0}catch{return!1}},F0=function(e){if(!O0(e))return!1;switch(sR(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return cR||!!lR(ud,oR(e))}catch{return!0}};F0.sham=!0;var B0=!N0||rR(function(){var i;return Pa(Pa.call)||!Pa(Object)||!Pa(function(){i=!0})||i})?F0:Pa,sm=nR,uR=B0,fR=Ln,hR=si,dR=hR("species"),am=Array,pR=function(i){var e;return sm(i)&&(e=i.constructor,uR(e)&&(e===am||sm(e.prototype))?e=void 0:fR(e)&&(e=e[dR],e===null&&(e=void 0))),e===void 0?am:e},mR=pR,_R=function(i,e){return new(mR(i))(e===0?0:e)},gR=Ac,vR=Pt,xR=Oh,yR=vo,SR=Ec,ER=_R,om=vR([].push),Qi=function(i){var e=i===1,t=i===2,n=i===3,r=i===4,s=i===6,o=i===7,a=i===5||s;return function(l,c,u,f){for(var h=yR(l),d=xR(h),g=SR(d),_=gR(c,u),p=0,m=f||ER,y=e?m(l,g):t||o?m(l,0):void 0,v,S;g>p;p++)if((a||p in d)&&(v=d[p],S=_(v,p,h),i))if(e)y[p]=S;else if(S)switch(i){case 3:return!0;case 5:return v;case 6:return p;case 2:om(y,v)}else switch(i){case 4:return!1;case 7:om(y,v)}return s?-1:n||r?r:y}},MR={forEach:Qi(0),map:Qi(1),filter:Qi(2),some:Qi(3),every:Qi(4),find:Qi(5),findIndex:Qi(6),filterReject:Qi(7)},TR=Pt,lm=ld,Qo=wc.getWeakData,bR=ad,wR=Di,AR=da,bu=Ln,RR=Cc,z0=MR,cm=pi,k0=ma,CR=k0.set,PR=k0.getterFor,LR=z0.find,DR=z0.findIndex,IR=TR([].splice),OR=0,el=function(i){return i.frozen||(i.frozen=new H0)},H0=function(){this.entries=[]},wu=function(i,e){return LR(i.entries,function(t){return t[0]===e})};H0.prototype={get:function(i){var e=wu(this,i);if(e)return e[1]},has:function(i){return!!wu(this,i)},set:function(i,e){var t=wu(this,i);t?t[1]=e:this.entries.push([i,e])},delete:function(i){var e=DR(this.entries,function(t){return t[0]===i});return~e&&IR(this.entries,e,1),!!~e}};var UR={getConstructor:function(i,e,t,n){var r=i(function(l,c){bR(l,s),CR(l,{type:e,id:OR++,frozen:void 0}),AR(c)||RR(c,l[n],{that:l,AS_ENTRIES:t})}),s=r.prototype,o=PR(e),a=function(l,c,u){var f=o(l),h=Qo(wR(c),!0);return h===!0?el(f).set(c,u):h[f.id]=u,l};return lm(s,{delete:function(l){var c=o(this);if(!bu(l))return!1;var u=Qo(l);return u===!0?el(c).delete(l):u&&cm(u,c.id)&&delete u[c.id]},has:function(c){var u=o(this);if(!bu(c))return!1;var f=Qo(c);return f===!0?el(u).has(c):f&&cm(f,u.id)}}),lm(s,t?{get:function(c){var u=o(this);if(bu(c)){var f=Qo(c);return f===!0?el(u).get(c):f?f[u.id]:void 0}},set:function(c,u){return a(this,c,u)}}:{add:function(c){return a(this,c,!0)}}),r}},NR=x0,um=Wn,Wl=Pt,fm=ld,FR=wc,BR=od,G0=UR,tl=Ln,nl=ma.enforce,zR=Qt,kR=Kv,To=Object,HR=Array.isArray,il=To.isExtensible,V0=To.isFrozen,GR=To.isSealed,W0=To.freeze,VR=To.seal,WR=!um.ActiveXObject&&"ActiveXObject"in um,La,$0=function(i){return function(){return i(this,arguments.length?arguments[0]:void 0)}},X0=BR("WeakMap",$0,G0),Fs=X0.prototype,$l=Wl(Fs.set),$R=function(){return NR&&zR(function(){var i=W0([]);return $l(new X0,i,1),!V0(i)})};if(kR)if(WR){La=G0.getConstructor($0,"WeakMap",!0),FR.enable();var hm=Wl(Fs.delete),rl=Wl(Fs.has),dm=Wl(Fs.get);fm(Fs,{delete:function(i){if(tl(i)&&!il(i)){var e=nl(this);return e.frozen||(e.frozen=new La),hm(this,i)||e.frozen.delete(i)}return hm(this,i)},has:function(e){if(tl(e)&&!il(e)){var t=nl(this);return t.frozen||(t.frozen=new La),rl(this,e)||t.frozen.has(e)}return rl(this,e)},get:function(e){if(tl(e)&&!il(e)){var t=nl(this);return t.frozen||(t.frozen=new La),rl(this,e)?dm(this,e):t.frozen.get(e)}return dm(this,e)},set:function(e,t){if(tl(e)&&!il(e)){var n=nl(this);n.frozen||(n.frozen=new La),rl(this,e)?$l(this,e,t):n.frozen.set(e,t)}else $l(this,e,t);return this}})}else $R()&&fm(Fs,{set:function(e,t){var n;return HR(e)&&(V0(e)?n=W0:GR(e)&&(n=VR)),$l(this,e,t),n&&n(e),this}});var XR=Mo;XR.WeakMap;var qR=Di,YR=T0,jR=function(i,e,t,n){try{return n?e(qR(t)[0],t[1]):e(t)}catch(r){YR(i,"throw",r)}},KR=$n,ZR=mi,JR=Tc,QR=function(i,e,t){KR?ZR.f(i,e,JR(0,t)):i[e]=t},eC=Ac,tC=Ji,nC=vo,iC=jR,rC=S0,sC=B0,aC=Ec,pm=QR,oC=M0,lC=sd,mm=Array,cC=function(e){var t=nC(e),n=sC(this),r=arguments.length,s=r>1?arguments[1]:void 0,o=s!==void 0;o&&(s=eC(s,r>2?arguments[2]:void 0));var a=lC(t),l=0,c,u,f,h,d,g;if(a&&!(this===mm&&rC(a)))for(h=oC(t,a),d=h.next,u=n?new this:[];!(f=tC(d,h)).done;l++)g=o?iC(h,s,[f.value,l],!0):f.value,pm(u,l,g);else for(c=aC(t),u=n?new this(c):mm(c);c>l;l++)g=o?s(t[l],l):t[l],pm(u,l,g);return u.length=l,u},uC=ga,fC=cC,hC=A0,dC=!hC(function(i){Array.from(i)});uC({target:"Array",stat:!0,forced:dC},{from:fC});var pC=Mo;pC.Array.from;var _m=$n,mC=Pt,_C=Ji,gC=Qt,Au=qv,vC=Kh,xC=qh,yC=vo,SC=Oh,vs=Object.assign,gm=Object.defineProperty,EC=mC([].concat),MC=!vs||gC(function(){if(_m&&vs({b:1},vs(gm({},"a",{enumerable:!0,get:function(){gm(this,"b",{value:3,enumerable:!1})}}),{b:2})).b!==1)return!0;var i={},e={},t=Symbol("assign detection"),n="abcdefghijklmnopqrst";return i[t]=7,n.split("").forEach(function(r){e[r]=r}),vs({},i)[t]!==7||Au(vs({},e)).join("")!==n})?function(e,t){for(var n=yC(e),r=arguments.length,s=1,o=vC.f,a=xC.f;r>s;)for(var l=SC(arguments[s++]),c=o?EC(Au(l),o(l)):Au(l),u=c.length,f=0,h;u>f;)h=c[f++],(!_m||_C(a,l,h))&&(n[h]=l[h]);return n}:vs,TC=ga,vm=MC;TC({target:"Object",stat:!0,arity:2,forced:Object.assign!==vm},{assign:vm});var bC=Mo;bC.Object.assign;var sl,cc=new WeakMap;function q0(){if(sl!==void 0)return sl;var i=!1;try{var e=function(){},t=Object.defineProperty({},"passive",{enumerable:!0,get:function(){return i=!0,!0}});window.addEventListener("testPassive",e,t),window.removeEventListener("testPassive",e,t)}catch{}return sl=i?{passive:!1}:!1,sl}function va(i){var e=cc.get(i)||[];return cc.set(i,e),function(n,r,s){function o(a){a.defaultPrevented||s(a)}r.split(/\s+/g).forEach(function(a){e.push({elem:n,eventName:a,handler:o}),n.addEventListener(a,o,q0())})}}function wC(i){var e=cc.get(i);e&&(e.forEach(function(t){var n=t.elem,r=t.eventName,s=t.handler;n.removeEventListener(r,s,q0())}),cc.delete(i))}function AC(i){return i.touches?i.touches[i.touches.length-1]:i}function Zs(i){var e=AC(i);return{x:e.clientX,y:e.clientY}}function al(i,e){return e===void 0&&(e=[]),e.some(function(t){return i===t})}var Y0=["webkit","moz","ms","o"],RC=new RegExp("^-(?!(?:"+Y0.join("|")+")-)");function CC(i){var e={};return Object.keys(i).forEach(function(t){if(!RC.test(t)){e[t]=i[t];return}var n=i[t];t=t.replace(/^-/,""),e[t]=n,Y0.forEach(function(r){e["-"+r+"-"+t]=n})}),e}function us(i,e){e=CC(e),Object.keys(e).forEach(function(t){var n=t.replace(/^-/,"").replace(/-([a-z])/g,function(r,s){return s.toUpperCase()});i.style[n]=e[t]})}var PC=function(){function i(e){this.velocityMultiplier=window.devicePixelRatio,this.updateTime=Date.now(),this.delta={x:0,y:0},this.velocity={x:0,y:0},this.lastPosition={x:0,y:0},this.lastPosition=Zs(e)}return i.prototype.update=function(e){var t=this,n=t.velocity,r=t.updateTime,s=t.lastPosition,o=Date.now(),a=Zs(e),l={x:-(a.x-s.x),y:-(a.y-s.y)},c=o-r||16.7,u=l.x/c*16.7,f=l.y/c*16.7;n.x=u*this.velocityMultiplier,n.y=f*this.velocityMultiplier,this.delta=l,this.updateTime=o,this.lastPosition=a},i}(),LC=function(){function i(){this._touchList={}}return Object.defineProperty(i.prototype,"_primitiveValue",{get:function(){return{x:0,y:0}},enumerable:!0,configurable:!0}),i.prototype.isActive=function(){return this._activeTouchID!==void 0},i.prototype.getDelta=function(){var e=this._getActiveTracker();return e?Ci({},e.delta):this._primitiveValue},i.prototype.getVelocity=function(){var e=this._getActiveTracker();return e?Ci({},e.velocity):this._primitiveValue},i.prototype.getEasingDistance=function(e){var t=1-e,n={x:0,y:0},r=this.getVelocity();return Object.keys(r).forEach(function(s){for(var o=Math.abs(r[s])<=10?0:r[s];o!==0;)n[s]+=o,o=o*t|0}),n},i.prototype.track=function(e){var t=this,n=e.targetTouches;return Array.from(n).forEach(function(r){t._add(r)}),this._touchList},i.prototype.update=function(e){var t=this,n=e.touches,r=e.changedTouches;return Array.from(n).forEach(function(s){t._renew(s)}),this._setActiveID(r),this._touchList},i.prototype.release=function(e){var t=this;delete this._activeTouchID,Array.from(e.changedTouches).forEach(function(n){t._delete(n)})},i.prototype._add=function(e){this._has(e)&&this._delete(e);var t=new PC(e);this._touchList[e.identifier]=t},i.prototype._renew=function(e){if(this._has(e)){var t=this._touchList[e.identifier];t.update(e)}},i.prototype._delete=function(e){delete this._touchList[e.identifier]},i.prototype._has=function(e){return this._touchList.hasOwnProperty(e.identifier)},i.prototype._setActiveID=function(e){this._activeTouchID=e[e.length-1].identifier},i.prototype._getActiveTracker=function(){var e=this,t=e._touchList,n=e._activeTouchID;return t[n]},i}();function ri(i,e,t){return Math.max(e,Math.min(t,i))}function j0(i,e,t){e===void 0&&(e=0);var n,r=-1/0;return function(){for(var o=this,a=[],l=0;l<arguments.length;l++)a[l]=arguments[l];if(t){var c=Date.now(),u=c-r;r=c,u>=e&&i.apply(this,a)}clearTimeout(n),n=setTimeout(function(){i.apply(o,a)},e)}}function xm(i,e){return i===void 0&&(i=-1/0),e===void 0&&(e=1/0),function(t,n){var r="_"+n;Object.defineProperty(t,n,{get:function(){return this[r]},set:function(s){Object.defineProperty(this,r,{value:ri(s,i,e),enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}}function Ru(i,e){var t="_"+e;Object.defineProperty(i,e,{get:function(){return this[t]},set:function(n){Object.defineProperty(this,t,{value:!!n,enumerable:!1,writable:!0,configurable:!0})},enumerable:!0,configurable:!0})}function K0(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];return function(t,n,r){var s=r.value;return{get:function(){return this.hasOwnProperty(n)||Object.defineProperty(this,n,{value:j0.apply(void 0,WS([s],i))}),this[n]}}}}var DC=function(){function i(e){var t=this;e===void 0&&(e={}),this.damping=.1,this.thumbMinSize=20,this.renderByPixels=!0,this.alwaysShowTracks=!1,this.continuousScrolling=!0,this.delegateTo=null,this.plugins={},Object.keys(e).forEach(function(n){t[n]=e[n]})}return Object.defineProperty(i.prototype,"wheelEventTarget",{get:function(){return this.delegateTo},set:function(e){console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."),this.delegateTo=e},enumerable:!0,configurable:!0}),zr([xm(0,1)],i.prototype,"damping",void 0),zr([xm(0,1/0)],i.prototype,"thumbMinSize",void 0),zr([Ru],i.prototype,"renderByPixels",void 0),zr([Ru],i.prototype,"alwaysShowTracks",void 0),zr([Ru],i.prototype,"continuousScrolling",void 0),i}(),oa;(function(i){i.X="x",i.Y="y"})(oa||(oa={}));var IC=function(){function i(e,t){t===void 0&&(t=0),this._direction=e,this._minSize=t,this.element=document.createElement("div"),this.displaySize=0,this.realSize=0,this.offset=0,this.element.className="scrollbar-thumb scrollbar-thumb-"+e}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.update=function(e,t,n){this.realSize=Math.min(t/n,1)*t,this.displaySize=Math.max(this.realSize,this._minSize),this.offset=e/n*(t+(this.realSize-this.displaySize)),us(this.element,this._getStyle())},i.prototype._getStyle=function(){switch(this._direction){case oa.X:return{width:this.displaySize+"px","-transform":"translate3d("+this.offset+"px, 0, 0)"};case oa.Y:return{height:this.displaySize+"px","-transform":"translate3d(0, "+this.offset+"px, 0)"};default:return null}},i}(),ym=function(){function i(e,t){t===void 0&&(t=0),this.element=document.createElement("div"),this._isShown=!1,this.element.className="scrollbar-track scrollbar-track-"+e,this.thumb=new IC(e,t),this.thumb.attachTo(this.element)}return i.prototype.attachTo=function(e){e.appendChild(this.element)},i.prototype.show=function(){this._isShown||(this._isShown=!0,this.element.classList.add("show"))},i.prototype.hide=function(){this._isShown&&(this._isShown=!1,this.element.classList.remove("show"))},i.prototype.update=function(e,t,n){us(this.element,{display:n<=t?"none":"block"}),this.thumb.update(e,t,n)},i}(),OC=function(){function i(e){this._scrollbar=e;var t=e.options.thumbMinSize;this.xAxis=new ym(oa.X,t),this.yAxis=new ym(oa.Y,t),this.xAxis.attachTo(e.containerEl),this.yAxis.attachTo(e.containerEl),e.options.alwaysShowTracks&&(this.xAxis.show(),this.yAxis.show())}return i.prototype.update=function(){var e=this._scrollbar,t=e.size,n=e.offset;this.xAxis.update(n.x,t.container.width,t.content.width),this.yAxis.update(n.y,t.container.height,t.content.height)},i.prototype.autoHideOnIdle=function(){this._scrollbar.options.alwaysShowTracks||(this.xAxis.hide(),this.yAxis.hide())},zr([K0(300)],i.prototype,"autoHideOnIdle",null),i}();function UC(i){var e=i.containerEl,t=i.contentEl,n=getComputedStyle(e),r=["paddingTop","paddingBottom","paddingLeft","paddingRight"].map(function(a){return n[a]?parseFloat(n[a]):0}),s=r[0]+r[1],o=r[2]+r[3];return{container:{width:e.clientWidth,height:e.clientHeight},content:{width:t.offsetWidth-t.clientWidth+t.scrollWidth+o,height:t.offsetHeight-t.clientHeight+t.scrollHeight+s}}}function NC(i,e){var t=i.bounding,n=e.getBoundingClientRect(),r=Math.max(t.top,n.top),s=Math.max(t.left,n.left),o=Math.min(t.right,n.right),a=Math.min(t.bottom,n.bottom);return r<a&&s<o}function FC(i){var e=i.getSize(),t={x:Math.max(e.content.width-e.container.width,0),y:Math.max(e.content.height-e.container.height,0)},n=i.containerEl.getBoundingClientRect(),r={top:Math.max(n.top,0),right:Math.min(n.right,window.innerWidth),bottom:Math.min(n.bottom,window.innerHeight),left:Math.max(n.left,0)};i.size=e,i.limit=t,i.bounding=r,i.track.update(),i.setPosition()}function BC(i,e,t){var n=i.options,r=i.offset,s=i.limit,o=i.track,a=i.contentEl;return n.renderByPixels&&(e=Math.round(e),t=Math.round(t)),e=ri(e,0,s.x),t=ri(t,0,s.y),e!==r.x&&o.xAxis.show(),t!==r.y&&o.yAxis.show(),n.alwaysShowTracks||o.autoHideOnIdle(),e===r.x&&t===r.y?null:(r.x=e,r.y=t,us(a,{"-transform":"translate3d("+-e+"px, "+-t+"px, 0)"}),o.update(),{offset:Ci({},r),limit:Ci({},s)})}var Sm=new WeakMap;function zC(i,e,t,n,r){n===void 0&&(n=0);var s=r===void 0?{}:r,o=s.easing,a=o===void 0?kC:o,l=s.callback,c=i.options,u=i.offset,f=i.limit;c.renderByPixels&&(e=Math.round(e),t=Math.round(t));var h=u.x,d=u.y,g=ri(e,0,f.x)-h,_=ri(t,0,f.y)-d,p=Date.now();function m(){var y=Date.now()-p,v=n?a(Math.min(y/n,1)):1;if(i.setPosition(h+g*v,d+_*v),y>=n)typeof l=="function"&&l.call(i);else{var S=requestAnimationFrame(m);Sm.set(i,S)}}cancelAnimationFrame(Sm.get(i)),m()}function kC(i){return Math.pow(i-1,3)+1}function HC(i,e,t){var n=t===void 0?{}:t,r=n.alignToTop,s=r===void 0?!0:r,o=n.onlyScrollIfNeeded,a=o===void 0?!1:o,l=n.offsetTop,c=l===void 0?0:l,u=n.offsetLeft,f=u===void 0?0:u,h=n.offsetBottom,d=h===void 0?0:h,g=i.containerEl,_=i.bounding,p=i.offset,m=i.limit;if(!(!e||!g.contains(e))){var y=e.getBoundingClientRect();if(!(a&&i.isVisible(e))){var v=s?y.top-_.top-c:y.bottom-_.bottom+d;i.setMomentum(y.left-_.left-f,ri(v,-p.y,m.y-p.y))}}}var Z0=function(){function i(e,t){var n=this.constructor;this.scrollbar=e,this.name=n.pluginName,this.options=Ci(Ci({},n.defaultOptions),t)}return i.prototype.onInit=function(){},i.prototype.onDestroy=function(){},i.prototype.onUpdate=function(){},i.prototype.onRender=function(e){},i.prototype.transformDelta=function(e,t){return Ci({},e)},i.pluginName="",i.defaultOptions={},i}(),uc={order:new Set,constructors:{}};function GC(){for(var i=[],e=0;e<arguments.length;e++)i[e]=arguments[e];i.forEach(function(t){var n=t.pluginName;if(!n)throw new TypeError("plugin name is required");uc.order.add(n),uc.constructors[n]=t})}function VC(i,e){return Array.from(uc.order).filter(function(t){return e[t]!==!1}).map(function(t){var n=uc.constructors[t],r=new n(i,e[t]);return e[t]=r.options,r})}var jn;(function(i){i[i.TAB=9]="TAB",i[i.SPACE=32]="SPACE",i[i.PAGE_UP=33]="PAGE_UP",i[i.PAGE_DOWN=34]="PAGE_DOWN",i[i.END=35]="END",i[i.HOME=36]="HOME",i[i.LEFT=37]="LEFT",i[i.UP=38]="UP",i[i.RIGHT=39]="RIGHT",i[i.DOWN=40]="DOWN"})(jn||(jn={}));function WC(i){var e=va(i),t=i.containerEl;e(t,"keydown",function(n){var r=document.activeElement;if(!(r!==t&&!t.contains(r))&&!qC(r)){var s=$C(i,n.keyCode||n.which);if(s){var o=s[0],a=s[1];i.addTransformableMomentum(o,a,n,function(l){l?n.preventDefault():(i.containerEl.blur(),i.parent&&i.parent.containerEl.focus())})}}})}function $C(i,e){var t=i.size,n=i.limit,r=i.offset;switch(e){case jn.TAB:return XC(i);case jn.SPACE:return[0,200];case jn.PAGE_UP:return[0,-t.container.height+40];case jn.PAGE_DOWN:return[0,t.container.height-40];case jn.END:return[0,n.y-r.y];case jn.HOME:return[0,-r.y];case jn.LEFT:return[-40,0];case jn.UP:return[0,-40];case jn.RIGHT:return[40,0];case jn.DOWN:return[0,40];default:return null}}function XC(i){requestAnimationFrame(function(){i.scrollIntoView(document.activeElement,{offsetTop:i.size.container.height/2,offsetLeft:i.size.container.width/2,onlyScrollIfNeeded:!0})})}function qC(i){return i.tagName==="INPUT"||i.tagName==="SELECT"||i.tagName==="TEXTAREA"||i.isContentEditable?!i.disabled:!1}var gi;(function(i){i[i.X=0]="X",i[i.Y=1]="Y"})(gi||(gi={}));function YC(i){var e=va(i),t=i.containerEl,n=i.track,r=n.xAxis,s=n.yAxis;function o(d,g){var _=i.size,p=i.limit,m=i.offset;if(d===gi.X){var y=_.container.width+(r.thumb.realSize-r.thumb.displaySize);return ri(g/y*_.content.width,0,p.x)-m.x}if(d===gi.Y){var v=_.container.height+(s.thumb.realSize-s.thumb.displaySize);return ri(g/v*_.content.height,0,p.y)-m.y}return 0}function a(d){if(al(d,[r.element,r.thumb.element]))return gi.X;if(al(d,[s.element,s.thumb.element]))return gi.Y}var l,c,u,f,h;e(t,"click",function(d){if(!(c||!al(d.target,[r.element,s.element]))){var g=d.target,_=a(g),p=g.getBoundingClientRect(),m=Zs(d);if(_===gi.X){var y=m.x-p.left-r.thumb.displaySize/2;i.setMomentum(o(_,y),0)}if(_===gi.Y){var y=m.y-p.top-s.thumb.displaySize/2;i.setMomentum(0,o(_,y))}}}),e(t,"mousedown",function(d){if(al(d.target,[r.thumb.element,s.thumb.element])){l=!0;var g=d.target,_=Zs(d),p=g.getBoundingClientRect();f=a(g),u={x:_.x-p.left,y:_.y-p.top},h=t.getBoundingClientRect(),us(i.containerEl,{"-user-select":"none"})}}),e(window,"mousemove",function(d){if(l){c=!0;var g=Zs(d);if(f===gi.X){var _=g.x-u.x-h.left;i.setMomentum(o(f,_),0)}if(f===gi.Y){var _=g.y-u.y-h.top;i.setMomentum(0,o(f,_))}}}),e(window,"mouseup blur",function(){l=c=!1,us(i.containerEl,{"-user-select":""})})}function jC(i){var e=va(i);e(window,"resize",j0(i.update.bind(i),300))}function KC(i){var e=va(i),t=i.containerEl,n=i.contentEl,r=!1,s=!1,o;function a(l){var c=l.x,u=l.y;if(!(!c&&!u)){var f=i.offset,h=i.limit;i.setMomentum(ri(f.x+c,0,h.x)-f.x,ri(f.y+u,0,h.y)-f.y),o=requestAnimationFrame(function(){a({x:c,y:u})})}}e(window,"mousemove",function(l){if(r){cancelAnimationFrame(o);var c=ZC(i,l);a(c)}}),e(n,"contextmenu",function(){s=!0,cancelAnimationFrame(o),r=!1}),e(n,"mousedown",function(){s=!1}),e(n,"selectstart",function(){s||(cancelAnimationFrame(o),r=!0)}),e(window,"mouseup blur",function(){cancelAnimationFrame(o),r=!1,s=!1}),e(t,"scroll",function(l){l.preventDefault(),t.scrollTop=t.scrollLeft=0})}function ZC(i,e){var t=i.bounding,n=t.top,r=t.right,s=t.bottom,o=t.left,a=Zs(e),l=a.x,c=a.y,u={x:0,y:0},f=20;return l===0&&c===0||(l>r-f?u.x=l-r+f:l<o+f&&(u.x=l-o-f),c>s-f?u.y=c-s+f:c<n+f&&(u.y=c-n-f),u.x*=2,u.y*=2),u}var ol;function JC(i){var e=i.options.delegateTo||i.containerEl,t=new LC,n=va(i),r,s=0;n(e,"touchstart",function(o){t.track(o),i.setMomentum(0,0),s===0&&(r=i.options.damping,i.options.damping=Math.max(r,.5)),s++}),n(e,"touchmove",function(o){if(!(ol&&ol!==i)){t.update(o);var a=t.getDelta(),l=a.x,c=a.y;i.addTransformableMomentum(l,c,o,function(u){u&&o.cancelable&&(o.preventDefault(),ol=i)})}}),n(e,"touchcancel touchend",function(o){var a=t.getEasingDistance(r);i.addTransformableMomentum(a.x,a.y,o),s--,s===0&&(i.options.damping=r),t.release(o),ol=null})}function QC(i){var e=va(i),t=i.options.delegateTo||i.containerEl,n="onwheel"in window||document.implementation.hasFeature("Events.wheel","3.0")?"wheel":"mousewheel";e(t,n,function(r){var s=tP(r),o=s.x,a=s.y;i.addTransformableMomentum(o,a,r,function(l){l&&r.preventDefault()})})}var Da={STANDARD:1,OTHERS:-3},Em=[1,28,500],eP=function(i){return Em[i]||Em[0]};function tP(i){if("deltaX"in i){var e=eP(i.deltaMode);return{x:i.deltaX/Da.STANDARD*e,y:i.deltaY/Da.STANDARD*e}}return"wheelDeltaX"in i?{x:i.wheelDeltaX/Da.OTHERS,y:i.wheelDeltaY/Da.OTHERS}:{x:0,y:i.wheelDelta/Da.OTHERS}}const Mm=Object.freeze(Object.defineProperty({__proto__:null,keyboardHandler:WC,mouseHandler:YC,resizeHandler:jC,selectHandler:KC,touchHandler:JC,wheelHandler:QC},Symbol.toStringTag,{value:"Module"}));var yi=new Map,Tm=function(){function i(e,t){var n=this;this.offset={x:0,y:0},this.limit={x:1/0,y:1/0},this.bounding={top:0,right:0,bottom:0,left:0},this._plugins=[],this._momentum={x:0,y:0},this._listeners=new Set,this.containerEl=e;var r=this.contentEl=document.createElement("div");this.options=new DC(t),e.setAttribute("data-scrollbar","true"),e.setAttribute("tabindex","-1"),us(e,{overflow:"hidden",outline:"none"}),window.navigator.msPointerEnabled&&(e.style.msTouchAction="none"),r.className="scroll-content",Array.from(e.childNodes).forEach(function(l){r.appendChild(l)}),e.appendChild(r),this.track=new OC(this),this.size=this.getSize(),this._plugins=VC(this,this.options.plugins);var s=e.scrollLeft,o=e.scrollTop;e.scrollLeft=e.scrollTop=0,this.setPosition(s,o,{withoutCallbacks:!0});var a=window.ResizeObserver;typeof a=="function"&&(this._observer=new a(function(){n.update()}),this._observer.observe(r)),yi.set(e,this),requestAnimationFrame(function(){n._init()})}return Object.defineProperty(i.prototype,"parent",{get:function(){for(var e=this.containerEl.parentElement;e;){var t=yi.get(e);if(t)return t;e=e.parentElement}return null},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollTop",{get:function(){return this.offset.y},set:function(e){this.setPosition(this.scrollLeft,e)},enumerable:!0,configurable:!0}),Object.defineProperty(i.prototype,"scrollLeft",{get:function(){return this.offset.x},set:function(e){this.setPosition(e,this.scrollTop)},enumerable:!0,configurable:!0}),i.prototype.getSize=function(){return UC(this)},i.prototype.update=function(){FC(this),this._plugins.forEach(function(e){e.onUpdate()})},i.prototype.isVisible=function(e){return NC(this,e)},i.prototype.setPosition=function(e,t,n){var r=this;e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n={});var s=BC(this,e,t);!s||n.withoutCallbacks||this._listeners.forEach(function(o){o.call(r,s)})},i.prototype.scrollTo=function(e,t,n,r){e===void 0&&(e=this.offset.x),t===void 0&&(t=this.offset.y),n===void 0&&(n=0),r===void 0&&(r={}),zC(this,e,t,n,r)},i.prototype.scrollIntoView=function(e,t){t===void 0&&(t={}),HC(this,e,t)},i.prototype.addListener=function(e){if(typeof e!="function")throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");this._listeners.add(e)},i.prototype.removeListener=function(e){this._listeners.delete(e)},i.prototype.addTransformableMomentum=function(e,t,n,r){this._updateDebounced();var s=this._plugins.reduce(function(a,l){return l.transformDelta(a,n)||a},{x:e,y:t}),o=!this._shouldPropagateMomentum(s.x,s.y);o&&this.addMomentum(s.x,s.y),r&&r.call(this,o)},i.prototype.addMomentum=function(e,t){this.setMomentum(this._momentum.x+e,this._momentum.y+t)},i.prototype.setMomentum=function(e,t){this.limit.x===0&&(e=0),this.limit.y===0&&(t=0),this.options.renderByPixels&&(e=Math.round(e),t=Math.round(t)),this._momentum.x=e,this._momentum.y=t},i.prototype.updatePluginOptions=function(e,t){this._plugins.forEach(function(n){n.name===e&&Object.assign(n.options,t)})},i.prototype.destroy=function(){var e=this,t=e.containerEl,n=e.contentEl;wC(this),this._listeners.clear(),this.setMomentum(0,0),cancelAnimationFrame(this._renderID),this._observer&&this._observer.disconnect(),yi.delete(this.containerEl);for(var r=Array.from(n.childNodes);t.firstChild;)t.removeChild(t.firstChild);r.forEach(function(s){t.appendChild(s)}),us(t,{overflow:""}),t.scrollTop=this.scrollTop,t.scrollLeft=this.scrollLeft,this._plugins.forEach(function(s){s.onDestroy()}),this._plugins.length=0},i.prototype._init=function(){var e=this;this.update(),Object.keys(Mm).forEach(function(t){Mm[t](e)}),this._plugins.forEach(function(t){t.onInit()}),this._render()},i.prototype._updateDebounced=function(){this.update()},i.prototype._shouldPropagateMomentum=function(e,t){e===void 0&&(e=0),t===void 0&&(t=0);var n=this,r=n.options,s=n.offset,o=n.limit;if(!r.continuousScrolling)return!1;o.x===0&&o.y===0&&this._updateDebounced();var a=ri(e+s.x,0,o.x),l=ri(t+s.y,0,o.y),c=!0;return c=c&&a===s.x,c=c&&l===s.y,c=c&&(s.x===o.x||s.x===0||s.y===o.y||s.y===0),c},i.prototype._render=function(){var e=this._momentum;if(e.x||e.y){var t=this._nextTick("x"),n=this._nextTick("y");e.x=t.momentum,e.y=n.momentum,this.setPosition(t.position,n.position)}var r=Ci({},this._momentum);this._plugins.forEach(function(s){s.onRender(r)}),this._renderID=requestAnimationFrame(this._render.bind(this))},i.prototype._nextTick=function(e){var t=this,n=t.options,r=t.offset,s=t._momentum,o=r[e],a=s[e];if(Math.abs(a)<=.1)return{momentum:0,position:o+a};var l=a*(1-n.damping);return n.renderByPixels&&(l|=0),{momentum:l,position:o+a-l}},zr([K0(100,!0)],i.prototype,"_updateDebounced",null),i}(),nP="rgba(222, 222, 222, .75)",iP="rgba(0, 0, 0, .5)",rP=`
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
  background: `+nP+`;
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
  background: `+iP+`;
  border-radius: 4px;
}
`,J0="smooth-scrollbar-style",fc=!1;function bm(){if(!(fc||typeof window>"u")){var i=document.createElement("style");i.id=J0,i.textContent=rP,document.head&&document.head.appendChild(i),fc=!0}}function sP(){if(!(!fc||typeof window>"u")){var i=document.getElementById(J0);!i||!i.parentNode||(i.parentNode.removeChild(i),fc=!1)}}var wm=function(i){VS(e,i);function e(){return i!==null&&i.apply(this,arguments)||this}return e.init=function(t,n){if(!t||t.nodeType!==1)throw new TypeError("expect element to be DOM Element, but got "+t);return bm(),yi.has(t)?yi.get(t):new Tm(t,n)},e.initAll=function(t){return Array.from(document.querySelectorAll("[data-scrollbar]"),function(n){return e.init(n,t)})},e.has=function(t){return yi.has(t)},e.get=function(t){return yi.get(t)},e.getAll=function(){return Array.from(yi.values())},e.destroy=function(t){var n=yi.get(t);n&&n.destroy()},e.destroyAll=function(){yi.forEach(function(t){t.destroy()})},e.use=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return GC.apply(void 0,t)},e.attachStyle=function(){return bm()},e.detachStyle=function(){return sP()},e.version="8.8.4",e.ScrollbarPlugin=Z0,e}(Tm);const Ft={humbergerBtnSelector:"button.Header__Icon",logoeSelector:"Header__LogoImage",buttonParent:"Header__FlexItem",svgCart:"cart",svg:{cartDesktop:"cartDesktopSvg",cartPhone:"cartPhoneSvg"},page:{breakpoint:769},time:{debounce:250},phone:{width:"20",height:"15",rectWidth:"20",rectHeight:"1"},tabletAndUp:{width:"30",height:"25",rectWidth:"30",rectHeight:"2"},logo:{white:"./logo-white.png",black:"./logo-black.png",phone:"18px",tablet:"24px"},color:{white:"#ffffff",black:"#000000"},target:{pageContainer:"page-container",header:"section-header",announcement:"section-announcement"},rootProperty:{headerHeight:"--header-height",announcementHeight:"--announcement-bar-height"}};function Qr(i){const e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;return e>=i&&e>t}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fd="161",aP=0,Am=1,oP=2,Q0=1,lP=2,Bi=3,Tr=0,Cn=1,Gi=2,gr=0,Js=1,Rm=2,Cm=3,Pm=4,cP=5,kr=100,uP=101,fP=102,Lm=103,Dm=104,hP=200,dP=201,pP=202,mP=203,$f=204,Xf=205,_P=206,gP=207,vP=208,xP=209,yP=210,SP=211,EP=212,MP=213,TP=214,bP=0,wP=1,AP=2,hc=3,RP=4,CP=5,PP=6,LP=7,ex=0,DP=1,IP=2,vr=0,OP=1,UP=2,NP=3,FP=4,BP=5,zP=6,tx=300,la=301,ca=302,qf=303,Yf=304,Lc=306,jf=1e3,hi=1001,Kf=1002,vn=1003,Im=1004,Ia=1005,Nt=1006,Cu=1007,Wr=1008,xr=1009,kP=1010,HP=1011,hd=1012,nx=1013,dr=1014,Vi=1015,mo=1016,ix=1017,rx=1018,es=1020,GP=1021,di=1023,VP=1024,WP=1025,ts=1026,ua=1027,$P=1028,sx=1029,XP=1030,ax=1031,ox=1033,Pu=33776,Lu=33777,Du=33778,Iu=33779,Om=35840,Um=35841,Nm=35842,Fm=35843,lx=36196,Bm=37492,zm=37496,km=37808,Hm=37809,Gm=37810,Vm=37811,Wm=37812,$m=37813,Xm=37814,qm=37815,Ym=37816,jm=37817,Km=37818,Zm=37819,Jm=37820,Qm=37821,Ou=36492,e_=36494,t_=36495,qP=36283,n_=36284,i_=36285,r_=36286,cx=3e3,ns=3001,YP=3200,jP=3201,KP=0,ZP=1,Qn="",Kt="srgb",Ki="srgb-linear",dd="display-p3",Dc="display-p3-linear",dc="linear",xt="srgb",pc="rec709",mc="p3",xs=7680,s_=519,JP=512,QP=513,eL=514,ux=515,tL=516,nL=517,iL=518,rL=519,a_=35044,o_="300 es",Zf=1035,$i=2e3,_c=2001;class xa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uu=Math.PI/180,Jf=180/Math.PI;function bo(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function Tn(i,e,t){return Math.max(e,Math.min(t,i))}function sL(i,e){return(i%e+e)%e}function Nu(i,e,t){return(1-t)*i+t*e}function l_(i){return(i&i-1)===0&&i!==0}function Qf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Oa(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function En(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ot{constructor(e=0,t=0){ot.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c)}set(e,t,n,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=r[0],p=r[3],m=r[6],y=r[1],v=r[4],S=r[7],R=r[2],w=r[5],T=r[8];return s[0]=o*_+a*y+l*R,s[3]=o*p+a*v+l*w,s[6]=o*m+a*S+l*T,s[1]=c*_+u*y+f*R,s[4]=c*p+u*v+f*w,s[7]=c*m+u*S+f*T,s[2]=h*_+d*y+g*R,s[5]=h*p+d*v+g*w,s[8]=h*m+d*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*s*u+n*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,d=c*s-o*l,g=t*f+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*n)*_,e[2]=(a*n-r*o)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Fu.makeScale(e,t)),this}rotate(e){return this.premultiply(Fu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Fu=new Qe;function fx(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function _o(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function aL(){const i=_o("canvas");return i.style.display="block",i}const c_={};function Qs(i){i in c_||(c_[i]=!0,console.warn(i))}const u_=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),f_=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ll={[Ki]:{transfer:dc,primaries:pc,toReference:i=>i,fromReference:i=>i},[Kt]:{transfer:xt,primaries:pc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Dc]:{transfer:dc,primaries:mc,toReference:i=>i.applyMatrix3(f_),fromReference:i=>i.applyMatrix3(u_)},[dd]:{transfer:xt,primaries:mc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(f_),fromReference:i=>i.applyMatrix3(u_).convertLinearToSRGB()}},oL=new Set([Ki,Dc]),ht={enabled:!0,_workingColorSpace:Ki,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!oL.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ll[e].toReference,r=ll[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ll[i].primaries},getTransfer:function(i){return i===Qn?dc:ll[i].transfer}};function ea(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ys;class hx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=_o("canvas")),ys.width=e.width,ys.height=e.height;const n=ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_o("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ea(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ea(t[n]/255)*255):t[n]=ea(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lL=0;class dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lL++}),this.uuid=bo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zu(r[o].image)):s.push(zu(r[o]))}else s=zu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function zu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hx.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cL=0;class un extends xa{constructor(e=un.DEFAULT_IMAGE,t=un.DEFAULT_MAPPING,n=hi,r=hi,s=Nt,o=Wr,a=di,l=xr,c=un.DEFAULT_ANISOTROPY,u=Qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cL++}),this.uuid=bo(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ns?Kt:Qn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jf:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case Kf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jf:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case Kf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?ns:cx}set encoding(e){Qs("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ns?Kt:Qn}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=tx;un.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,n=0,r=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,S=(d+1)/2,R=(m+1)/2,w=(u+h)/4,T=(f+_)/4,D=(g+p)/4;return v>S&&v>R?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=T/n):S>R?S<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),n=w/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=T/s,r=D/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uL extends xa{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Qs("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ns?Kt:Qn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new un(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fs extends uL{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class px extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fL extends un{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wo{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let l=n[r+0],c=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-a;const m=l*h+c*d+u*g+f*_,y=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,m*y);p=Math.sin(p*w)/R,a=Math.sin(a*w)/R}const S=a*y;if(l=l*p+h*S,c=c*p+d*S,u=u*p+g*S,f=f*p+_*S,p===1-a){const R=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=R,c*=R,u*=R,f*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],l=n[r+1],c=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-a*d,e[t+2]=c*g+u*d+a*h-l*f,e[t+3]=u*g-a*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(r/2),f=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-r*a,this._w=o*u-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(h_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*n),u=2*(a*t-s*r),f=2*(s*n-o*t);return this.x=t+l*c+o*f-a*u,this.y=n+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ku=new q,h_=new wo;class Ao{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ai):ai.fromBufferAttribute(s,o),ai.applyMatrix4(e.matrixWorld),this.expandByPoint(ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ai),ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ua),ul.subVectors(this.max,Ua),Ss.subVectors(e.a,Ua),Es.subVectors(e.b,Ua),Ms.subVectors(e.c,Ua),er.subVectors(Es,Ss),tr.subVectors(Ms,Es),Pr.subVectors(Ss,Ms);let t=[0,-er.z,er.y,0,-tr.z,tr.y,0,-Pr.z,Pr.y,er.z,0,-er.x,tr.z,0,-tr.x,Pr.z,0,-Pr.x,-er.y,er.x,0,-tr.y,tr.x,0,-Pr.y,Pr.x,0];return!Hu(t,Ss,Es,Ms,ul)||(t=[1,0,0,0,1,0,0,0,1],!Hu(t,Ss,Es,Ms,ul))?!1:(fl.crossVectors(er,tr),t=[fl.x,fl.y,fl.z],Hu(t,Ss,Es,Ms,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new q,new q,new q,new q,new q,new q,new q,new q],ai=new q,cl=new Ao,Ss=new q,Es=new q,Ms=new q,er=new q,tr=new q,Pr=new q,Ua=new q,ul=new q,fl=new q,Lr=new q;function Hu(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Lr.fromArray(i,s);const a=r.x*Math.abs(Lr.x)+r.y*Math.abs(Lr.y)+r.z*Math.abs(Lr.z),l=e.dot(Lr),c=t.dot(Lr),u=n.dot(Lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const hL=new Ao,Na=new q,Gu=new q;class pd{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):hL.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Na.subVectors(e,this.center);const t=Na.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Na,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Na.copy(e.center).add(Gu)),this.expandByPoint(Na.copy(e.center).sub(Gu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new q,Vu=new q,hl=new q,nr=new q,Wu=new q,dl=new q,$u=new q;class mx{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vu.copy(e).add(t).multiplyScalar(.5),hl.copy(t).sub(e).normalize(),nr.copy(this.origin).sub(Vu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hl),a=nr.dot(this.direction),l=-nr.dot(hl),c=nr.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Vu).addScaledVector(hl,h),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),r=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,r,s){Wu.subVectors(t,e),dl.subVectors(n,e),$u.crossVectors(Wu,dl);let o=this.direction.dot($u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;nr.subVectors(this.origin,e);const l=a*this.direction.dot(dl.crossVectors(nr,dl));if(l<0)return null;const c=a*this.direction.dot(Wu.cross(nr));if(c<0||l+c>o)return null;const u=-a*nr.dot($u);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,p)}set(e,t,n,r,s,o,a,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ts.setFromMatrixColumn(e,0).length(),s=1/Ts.setFromMatrixColumn(e,1).length(),o=1/Ts.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-a*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*u,d=o*f,g=a*u,_=a*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,_=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=o*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dL,e,pL)}lookAt(e,t,n){const r=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),ir.crossVectors(n,In),ir.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),ir.crossVectors(n,In)),ir.normalize(),pl.crossVectors(In,ir),r[0]=ir.x,r[4]=pl.x,r[8]=In.x,r[1]=ir.y,r[5]=pl.y,r[9]=In.y,r[2]=ir.z,r[6]=pl.z,r[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],y=n[3],v=n[7],S=n[11],R=n[15],w=r[0],T=r[4],D=r[8],O=r[12],x=r[1],A=r[5],U=r[9],j=r[13],L=r[2],z=r[6],B=r[10],$=r[14],X=r[3],Y=r[7],C=r[11],K=r[15];return s[0]=o*w+a*x+l*L+c*X,s[4]=o*T+a*A+l*z+c*Y,s[8]=o*D+a*U+l*B+c*C,s[12]=o*O+a*j+l*$+c*K,s[1]=u*w+f*x+h*L+d*X,s[5]=u*T+f*A+h*z+d*Y,s[9]=u*D+f*U+h*B+d*C,s[13]=u*O+f*j+h*$+d*K,s[2]=g*w+_*x+p*L+m*X,s[6]=g*T+_*A+p*z+m*Y,s[10]=g*D+_*U+p*B+m*C,s[14]=g*O+_*j+p*$+m*K,s[3]=y*w+v*x+S*L+R*X,s[7]=y*T+v*A+S*z+R*Y,s[11]=y*D+v*U+S*B+R*C,s[15]=y*O+v*j+S*$+R*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-r*c*f-s*a*h+n*c*h+r*a*d-n*l*d)+_*(+t*l*d-t*c*h+s*o*h-r*o*d+r*c*u-s*l*u)+p*(+t*c*f-t*a*d-s*o*f+n*o*d+s*a*u-n*c*u)+m*(-r*a*u-t*l*f+t*a*h+r*o*f-n*o*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],y=f*p*c-_*h*c+_*l*d-a*p*d-f*l*m+a*h*m,v=g*h*c-u*p*c-g*l*d+o*p*d+u*l*m-o*h*m,S=u*_*c-g*f*c+g*a*d-o*_*d-u*a*m+o*f*m,R=g*f*l-u*_*l-g*a*h+o*_*h+u*a*p-o*f*p,w=t*y+n*v+r*S+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(_*h*s-f*p*s-_*r*d+n*p*d+f*r*m-n*h*m)*T,e[2]=(a*p*s-_*l*s+_*r*c-n*p*c-a*r*m+n*l*m)*T,e[3]=(f*l*s-a*h*s-f*r*c+n*h*c+a*r*d-n*l*d)*T,e[4]=v*T,e[5]=(u*p*s-g*h*s+g*r*d-t*p*d-u*r*m+t*h*m)*T,e[6]=(g*l*s-o*p*s-g*r*c+t*p*c+o*r*m-t*l*m)*T,e[7]=(o*h*s-u*l*s+u*r*c-t*h*c-o*r*d+t*l*d)*T,e[8]=S*T,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*m-t*f*m)*T,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*m+t*a*m)*T,e[11]=(u*a*s-o*f*s-u*n*c+t*f*c+o*n*d-t*a*d)*T,e[12]=R*T,e[13]=(u*_*r-g*f*r+g*n*h-t*_*h-u*n*p+t*f*p)*T,e[14]=(g*a*r-o*_*r-g*n*l+t*_*l+o*n*p-t*a*p)*T,e[15]=(o*f*r-u*a*r+u*n*l-t*f*l-o*n*h+t*a*h)*T,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+n,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,h=s*c,d=s*u,g=s*f,_=o*u,p=o*f,m=a*f,y=l*c,v=l*u,S=l*f,R=n.x,w=n.y,T=n.z;return r[0]=(1-(_+m))*R,r[1]=(d+S)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(d-S)*w,r[5]=(1-(h+m))*w,r[6]=(p+y)*w,r[7]=0,r[8]=(g+v)*T,r[9]=(p-y)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=Ts.set(r[0],r[1],r[2]).length();const o=Ts.set(r[4],r[5],r[6]).length(),a=Ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const c=1/s,u=1/o,f=1/a;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=$i){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),f=(t+e)/(t-e),h=(n+r)/(n-r);let d,g;if(a===$i)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===_c)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=$i){const l=this.elements,c=1/(t-e),u=1/(n-r),f=1/(o-s),h=(t+e)*c,d=(n+r)*u;let g,_;if(a===$i)g=(o+s)*f,_=-2*f;else if(a===_c)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ts=new q,oi=new Jt,dL=new q(0,0,0),pL=new q(1,1,1),ir=new q,pl=new q,In=new q,d_=new Jt,p_=new wo;class Ic{constructor(e=0,t=0,n=0,r=Ic.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Tn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return d_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(d_,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return p_.setFromEuler(this),this.setFromQuaternion(p_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ic.DEFAULT_ORDER="XYZ";class md{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mL=0;const m_=new q,bs=new wo,Ui=new Jt,ml=new q,Fa=new q,_L=new q,gL=new wo,__=new q(1,0,0),g_=new q(0,1,0),v_=new q(0,0,1),vL={type:"added"},xL={type:"removed"};class Gn extends xa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mL++}),this.uuid=bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new q,t=new Ic,n=new wo,r=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Qe}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new md,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.multiply(bs),this}rotateOnWorldAxis(e,t){return bs.setFromAxisAngle(e,t),this.quaternion.premultiply(bs),this}rotateX(e){return this.rotateOnAxis(__,e)}rotateY(e){return this.rotateOnAxis(g_,e)}rotateZ(e){return this.rotateOnAxis(v_,e)}translateOnAxis(e,t){return m_.copy(e).applyQuaternion(this.quaternion),this.position.add(m_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(__,e)}translateY(e){return this.translateOnAxis(g_,e)}translateZ(e){return this.translateOnAxis(v_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ml.copy(e):ml.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Fa,ml,this.up):Ui.lookAt(ml,Fa,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),bs.setFromRotationMatrix(Ui),this.quaternion.premultiply(bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vL)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xL)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,_L),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,gL,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Gn.DEFAULT_UP=new q(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new q,Ni=new q,Xu=new q,Fi=new q,ws=new q,As=new q,x_=new q,qu=new q,Yu=new q,ju=new q;class Mi{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),li.subVectors(e,t),r.cross(li);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){li.subVectors(r,t),Ni.subVectors(n,t),Xu.subVectors(e,t);const o=li.dot(li),a=li.dot(Ni),l=li.dot(Xu),c=Ni.dot(Ni),u=Ni.dot(Xu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(e,t,n,r,s,o,a,l){return this.getBarycoord(e,t,n,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,n,r){return li.subVectors(n,t),Ni.subVectors(e,t),li.cross(Ni).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),li.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Mi.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;ws.subVectors(r,n),As.subVectors(s,n),qu.subVectors(e,n);const l=ws.dot(qu),c=As.dot(qu);if(l<=0&&c<=0)return t.copy(n);Yu.subVectors(e,r);const u=ws.dot(Yu),f=As.dot(Yu);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(ws,o);ju.subVectors(e,s);const d=ws.dot(ju),g=As.dot(ju);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(As,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return x_.subVectors(s,r),a=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(x_,a);const m=1/(p+_+h);return o=_*m,a=h*m,t.copy(n).addScaledVector(ws,o).addScaledVector(As,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},_l={h:0,s:0,l:0};function Ku(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class dt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=sL(e,1),t=Tn(t,0,1),n=Tn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Ku(o,s,e+1/3),this.g=Ku(o,s,e),this.b=Ku(o,s,e-1/3)}return ht.toWorkingColorSpace(this,r),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=_x[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ea(e.r),this.g=ea(e.g),this.b=ea(e.b),this}copyLinearToSRGB(e){return this.r=Bu(e.r),this.g=Bu(e.g),this.b=Bu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return ht.fromWorkingColorSpace(rn.copy(this),e),Math.round(Tn(rn.r*255,0,255))*65536+Math.round(Tn(rn.g*255,0,255))*256+Math.round(Tn(rn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.fromWorkingColorSpace(rn.copy(this),t);const n=rn.r,r=rn.g,s=rn.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-n)/f+2;break;case s:l=(n-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ht.workingColorSpace){return ht.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Kt){ht.fromWorkingColorSpace(rn.copy(this),e);const t=rn.r,n=rn.g,r=rn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(_l);const n=Nu(rr.h,_l.h,t),r=Nu(rr.s,_l.s,t),s=Nu(rr.l,_l.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new dt;dt.NAMES=_x;let yL=0;class Oc extends xa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yL++}),this.uuid=bo(),this.name="",this.type="Material",this.blending=Js,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$f,this.blendDst=Xf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=hc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=s_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$f&&(n.blendSrc=this.blendSrc),this.blendDst!==Xf&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==s_&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class gx extends Oc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ex,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new q,gl=new ot;class Pi{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=a_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Qs("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Oa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=En(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oa(t,this.array)),t}setX(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oa(t,this.array)),t}setY(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oa(t,this.array)),t}setW(e,t){return this.normalized&&(t=En(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),r=En(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=En(t,this.array),n=En(n,this.array),r=En(r,this.array),s=En(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==a_&&(e.usage=this.usage),e}}class vx extends Pi{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class xx extends Pi{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class is extends Pi{constructor(e,t,n){super(new Float32Array(e),t,n)}}let SL=0;const qn=new Jt,Zu=new Gn,Rs=new q,On=new Ao,Ba=new Ao,Wt=new q;class ds extends xa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:SL++}),this.uuid=bo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fx(e)?xx:vx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,t,n){return qn.makeTranslation(e,t,n),this.applyMatrix4(qn),this}scale(e,t,n){return qn.makeScale(e,t,n),this.applyMatrix4(qn),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new is(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];On.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,On.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,On.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(On.min),this.boundingBox.expandByPoint(On.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(On.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ba.setFromBufferAttribute(a),this.morphTargetsRelative?(Wt.addVectors(On.min,Ba.min),On.expandByPoint(Wt),Wt.addVectors(On.max,Ba.max),On.expandByPoint(Wt)):(On.expandByPoint(Ba.min),On.expandByPoint(Ba.max))}On.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Wt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Wt.fromBufferAttribute(a,c),l&&(Rs.fromBufferAttribute(e,c),Wt.add(Rs)),r=Math.max(r,n.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let x=0;x<a;x++)c[x]=new q,u[x]=new q;const f=new q,h=new q,d=new q,g=new ot,_=new ot,p=new ot,m=new q,y=new q;function v(x,A,U){f.fromArray(r,x*3),h.fromArray(r,A*3),d.fromArray(r,U*3),g.fromArray(o,x*2),_.fromArray(o,A*2),p.fromArray(o,U*2),h.sub(f),d.sub(f),_.sub(g),p.sub(g);const j=1/(_.x*p.y-p.x*_.y);isFinite(j)&&(m.copy(h).multiplyScalar(p.y).addScaledVector(d,-_.y).multiplyScalar(j),y.copy(d).multiplyScalar(_.x).addScaledVector(h,-p.x).multiplyScalar(j),c[x].add(m),c[A].add(m),c[U].add(m),u[x].add(y),u[A].add(y),u[U].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let x=0,A=S.length;x<A;++x){const U=S[x],j=U.start,L=U.count;for(let z=j,B=j+L;z<B;z+=3)v(n[z+0],n[z+1],n[z+2])}const R=new q,w=new q,T=new q,D=new q;function O(x){T.fromArray(s,x*3),D.copy(T);const A=c[x];R.copy(A),R.sub(T.multiplyScalar(T.dot(A))).normalize(),w.crossVectors(D,A);const j=w.dot(u[x])<0?-1:1;l[x*4]=R.x,l[x*4+1]=R.y,l[x*4+2]=R.z,l[x*4+3]=j}for(let x=0,A=S.length;x<A;++x){const U=S[x],j=U.start,L=U.count;for(let z=j,B=j+L;z<B;z+=3)O(n[z+0]),O(n[z+1]),O(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pi(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new q,s=new q,o=new q,a=new q,l=new q,c=new q,u=new q,f=new q;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?d=l[_]*a.data.stride+a.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Pi(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ds,n=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const y_=new Jt,Dr=new mx,vl=new pd,S_=new q,Cs=new q,Ps=new q,Ls=new q,Ju=new q,xl=new q,yl=new ot,Sl=new ot,El=new ot,E_=new q,M_=new q,T_=new q,Ml=new q,Tl=new q;class wi extends Gn{constructor(e=new ds,t=new gx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ju.fromBufferAttribute(f,e),o?xl.addScaledVector(Ju,u):xl.addScaledVector(Ju.sub(t),u))}t.add(xl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vl.copy(n.boundingSphere),vl.applyMatrix4(s),Dr.copy(e.ray).recast(e.near),!(vl.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(vl,S_)===null||Dr.origin.distanceToSquared(S_)>(e.far-e.near)**2))&&(y_.copy(s).invert(),Dr.copy(e.ray).applyMatrix4(y_),!(n.boundingBox!==null&&Dr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Dr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=v;S<R;S+=3){const w=a.getX(S),T=a.getX(S+1),D=a.getX(S+2);r=bl(this,m,e,n,c,u,f,w,T,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);r=bl(this,o,e,n,c,u,f,y,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=o[p.materialIndex],y=Math.max(p.start,d.start),v=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=y,R=v;S<R;S+=3){const w=S,T=S+1,D=S+2;r=bl(this,m,e,n,c,u,f,w,T,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const y=p,v=p+1,S=p+2;r=bl(this,o,e,n,c,u,f,y,v,S),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function EL(i,e,t,n,r,s,o,a){let l;if(e.side===Cn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,e.side===Tr,a),l===null)return null;Tl.copy(a),Tl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Tl);return c<t.near||c>t.far?null:{distance:c,point:Tl.clone(),object:i}}function bl(i,e,t,n,r,s,o,a,l,c){i.getVertexPosition(a,Cs),i.getVertexPosition(l,Ps),i.getVertexPosition(c,Ls);const u=EL(i,e,t,n,Cs,Ps,Ls,Ml);if(u){r&&(yl.fromBufferAttribute(r,a),Sl.fromBufferAttribute(r,l),El.fromBufferAttribute(r,c),u.uv=Mi.getInterpolation(Ml,Cs,Ps,Ls,yl,Sl,El,new ot)),s&&(yl.fromBufferAttribute(s,a),Sl.fromBufferAttribute(s,l),El.fromBufferAttribute(s,c),u.uv1=Mi.getInterpolation(Ml,Cs,Ps,Ls,yl,Sl,El,new ot),u.uv2=u.uv1),o&&(E_.fromBufferAttribute(o,a),M_.fromBufferAttribute(o,l),T_.fromBufferAttribute(o,c),u.normal=Mi.getInterpolation(Ml,Cs,Ps,Ls,E_,M_,T_,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new q,materialIndex:0};Mi.getNormal(Cs,Ps,Ls,f.normal),u.face=f}return u}class Ro extends ds{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new is(c,3)),this.setAttribute("normal",new is(u,3)),this.setAttribute("uv",new is(f,2));function g(_,p,m,y,v,S,R,w,T,D,O){const x=S/T,A=R/D,U=S/2,j=R/2,L=w/2,z=T+1,B=D+1;let $=0,X=0;const Y=new q;for(let C=0;C<B;C++){const K=C*A-j;for(let ue=0;ue<z;ue++){const Ie=ue*x-U;Y[_]=Ie*y,Y[p]=K*v,Y[m]=L,c.push(Y.x,Y.y,Y.z),Y[_]=0,Y[p]=0,Y[m]=w>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(ue/T),f.push(1-C/D),$+=1}}for(let C=0;C<D;C++)for(let K=0;K<T;K++){const ue=h+K+z*C,Ie=h+K+z*(C+1),W=h+(K+1)+z*(C+1),Z=h+(K+1)+z*C;l.push(ue,Ie,Z),l.push(Ie,W,Z),X+=6}a.addGroup(d,X,O),d+=X,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ro(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function pn(i){const e={};for(let t=0;t<i.length;t++){const n=fa(i[t]);for(const r in n)e[r]=n[r]}return e}function ML(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yx(i){return i.getRenderTarget()===null?i.outputColorSpace:ht.workingColorSpace}const TL={clone:fa,merge:pn};var bL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Zi extends Oc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bL,this.fragmentShader=wL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=ML(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sx extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=$i}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new q,b_=new ot,w_=new ot;class Jn extends Sx{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Uu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jf*2*Math.atan(Math.tan(Uu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,t){return this.getViewBounds(e,b_,w_),t.subVectors(w_,b_)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Uu*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ds=-90,Is=1;class AL extends Gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jn(Ds,Is,e,t);r.layers=this.layers,this.add(r);const s=new Jn(Ds,Is,e,t);s.layers=this.layers,this.add(s);const o=new Jn(Ds,Is,e,t);o.layers=this.layers,this.add(o);const a=new Jn(Ds,Is,e,t);a.layers=this.layers,this.add(a);const l=new Jn(Ds,Is,e,t);l.layers=this.layers,this.add(l);const c=new Jn(Ds,Is,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===$i)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===_c)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ex extends un{constructor(e,t,n,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:la,super(e,t,n,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RL extends fs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Qs("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ns?Kt:Qn),this.texture=new Ex(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ro(5,5,5),s=new Zi({name:"CubemapFromEquirect",uniforms:fa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:gr});s.uniforms.tEquirect.value=t;const o=new wi(r,s),a=t.minFilter;return t.minFilter===Wr&&(t.minFilter=Nt),new AL(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Qu=new q,CL=new q,PL=new Qe;class Fr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Qu.subVectors(n,t).cross(CL.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Qu),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||PL.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new pd,wl=new q;class Mx{constructor(e=new Fr,t=new Fr,n=new Fr,r=new Fr,s=new Fr,o=new Fr){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=$i){const n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],d=r[8],g=r[9],_=r[10],p=r[11],m=r[12],y=r[13],v=r[14],S=r[15];if(n[0].setComponents(l-s,h-c,p-d,S-m).normalize(),n[1].setComponents(l+s,h+c,p+d,S+m).normalize(),n[2].setComponents(l+o,h+u,p+g,S+y).normalize(),n[3].setComponents(l-o,h-u,p-g,S-y).normalize(),n[4].setComponents(l-a,h-f,p-_,S-v).normalize(),t===$i)n[5].setComponents(l+a,h+f,p+_,S+v).normalize();else if(t===_c)n[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){return Ir.center.set(0,0,0),Ir.radius=.7071067811865476,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(wl.x=r.normal.x>0?e.max.x:e.min.x,wl.y=r.normal.y>0?e.max.y:e.min.y,wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Tx(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function LL(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=f.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=i.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=i.SHORT;else if(f instanceof Uint32Array)_=i.UNSIGNED_INT;else if(f instanceof Int32Array)_=i.INT;else if(f instanceof Int8Array)_=i.BYTE;else if(f instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version,size:d}}function s(c,u,f){const h=u.array,d=u._updateRange,g=u.updateRanges;if(i.bindBuffer(f,c),d.count===-1&&g.length===0&&i.bufferSubData(f,0,h),g.length!==0){for(let _=0,p=g.length;_<p;_++){const m=g[_];t?i.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count):i.bufferSubData(f,m.start*h.BYTES_PER_ELEMENT,h.subarray(m.start,m.start+m.count))}u.clearUpdateRanges()}d.count!==-1&&(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);if(f===void 0)n.set(c,r(c,u));else if(f.version<c.version){if(f.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,c,u),f.version=c.version}}return{get:o,remove:a,update:l}}class Co extends ds{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const y=m*h-o;for(let v=0;v<c;v++){const S=v*f-s;g.push(S,-y,0),_.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){const v=y+c*m,S=y+c*(m+1),R=y+1+c*(m+1),w=y+1+c*m;d.push(v,S,w),d.push(S,R,w)}this.setIndex(d),this.setAttribute("position",new is(g,3)),this.setAttribute("normal",new is(_,3)),this.setAttribute("uv",new is(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Co(e.width,e.height,e.widthSegments,e.heightSegments)}}var DL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,IL=`#ifdef USE_ALPHAHASH
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
#endif`,OL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,UL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BL=`#ifdef USE_AOMAP
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
#endif`,zL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kL=`#ifdef USE_BATCHING
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
#endif`,HL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,GL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,VL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$L=`#ifdef USE_IRIDESCENCE
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
#endif`,XL=`#ifdef USE_BUMPMAP
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
#endif`,qL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,YL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ZL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,QL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,e2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,t2=`#define PI 3.141592653589793
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
} // validated`,n2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i2=`vec3 transformedNormal = objectNormal;
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
#endif`,r2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l2="gl_FragColor = linearToOutputTexel( gl_FragColor );",c2=`
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
}`,u2=`#ifdef USE_ENVMAP
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
#endif`,f2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p2=`#ifdef USE_ENVMAP
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
#endif`,m2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x2=`#ifdef USE_GRADIENTMAP
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
}`,y2=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,S2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T2=`uniform bool receiveShadow;
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
#endif`,b2=`#ifdef USE_ENVMAP
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
#endif`,w2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P2=`PhysicalMaterial material;
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
#endif`,L2=`struct PhysicalMaterial {
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
}`,D2=`
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
#endif`,I2=`#if defined( RE_IndirectDiffuse )
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
#endif`,O2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N2=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,B2=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,z2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G2=`#if defined( USE_POINTS_UV )
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
#endif`,V2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,W2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X2=`#ifdef USE_MORPHNORMALS
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
#endif`,q2=`#ifdef USE_MORPHTARGETS
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
#endif`,Y2=`#ifdef USE_MORPHTARGETS
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
#endif`,j2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eD=`#ifdef USE_NORMALMAP
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
#endif`,tD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,oD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_D=`float getShadowMask() {
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
}`,gD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vD=`#ifdef USE_SKINNING
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
#endif`,xD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yD=`#ifdef USE_SKINNING
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
#endif`,SD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ED=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,TD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bD=`#ifdef USE_TRANSMISSION
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
#endif`,wD=`#ifdef USE_TRANSMISSION
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
#endif`,AD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const LD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DD=`uniform sampler2D t2D;
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
}`,ID=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,UD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ND=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FD=`#include <common>
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
}`,BD=`#if DEPTH_PACKING == 3200
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
}`,zD=`#define DISTANCE
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
}`,kD=`#define DISTANCE
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
}`,HD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VD=`uniform float scale;
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
}`,WD=`uniform vec3 diffuse;
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
}`,$D=`#include <common>
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
}`,XD=`uniform vec3 diffuse;
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
}`,qD=`#define LAMBERT
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
}`,YD=`#define LAMBERT
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
}`,jD=`#define MATCAP
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
}`,KD=`#define MATCAP
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
}`,ZD=`#define NORMAL
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
}`,JD=`#define NORMAL
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
}`,QD=`#define PHONG
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
}`,eI=`#define PHONG
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
}`,tI=`#define STANDARD
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
}`,nI=`#define STANDARD
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
}`,iI=`#define TOON
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
}`,rI=`#define TOON
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
}`,sI=`uniform float size;
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
}`,aI=`uniform vec3 diffuse;
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
}`,oI=`#include <common>
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
}`,lI=`uniform vec3 color;
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
}`,cI=`uniform float rotation;
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
}`,uI=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:DL,alphahash_pars_fragment:IL,alphamap_fragment:OL,alphamap_pars_fragment:UL,alphatest_fragment:NL,alphatest_pars_fragment:FL,aomap_fragment:BL,aomap_pars_fragment:zL,batching_pars_vertex:kL,batching_vertex:HL,begin_vertex:GL,beginnormal_vertex:VL,bsdfs:WL,iridescence_fragment:$L,bumpmap_pars_fragment:XL,clipping_planes_fragment:qL,clipping_planes_pars_fragment:YL,clipping_planes_pars_vertex:jL,clipping_planes_vertex:KL,color_fragment:ZL,color_pars_fragment:JL,color_pars_vertex:QL,color_vertex:e2,common:t2,cube_uv_reflection_fragment:n2,defaultnormal_vertex:i2,displacementmap_pars_vertex:r2,displacementmap_vertex:s2,emissivemap_fragment:a2,emissivemap_pars_fragment:o2,colorspace_fragment:l2,colorspace_pars_fragment:c2,envmap_fragment:u2,envmap_common_pars_fragment:f2,envmap_pars_fragment:h2,envmap_pars_vertex:d2,envmap_physical_pars_fragment:b2,envmap_vertex:p2,fog_vertex:m2,fog_pars_vertex:_2,fog_fragment:g2,fog_pars_fragment:v2,gradientmap_pars_fragment:x2,lightmap_fragment:y2,lightmap_pars_fragment:S2,lights_lambert_fragment:E2,lights_lambert_pars_fragment:M2,lights_pars_begin:T2,lights_toon_fragment:w2,lights_toon_pars_fragment:A2,lights_phong_fragment:R2,lights_phong_pars_fragment:C2,lights_physical_fragment:P2,lights_physical_pars_fragment:L2,lights_fragment_begin:D2,lights_fragment_maps:I2,lights_fragment_end:O2,logdepthbuf_fragment:U2,logdepthbuf_pars_fragment:N2,logdepthbuf_pars_vertex:F2,logdepthbuf_vertex:B2,map_fragment:z2,map_pars_fragment:k2,map_particle_fragment:H2,map_particle_pars_fragment:G2,metalnessmap_fragment:V2,metalnessmap_pars_fragment:W2,morphcolor_vertex:$2,morphnormal_vertex:X2,morphtarget_pars_vertex:q2,morphtarget_vertex:Y2,normal_fragment_begin:j2,normal_fragment_maps:K2,normal_pars_fragment:Z2,normal_pars_vertex:J2,normal_vertex:Q2,normalmap_pars_fragment:eD,clearcoat_normal_fragment_begin:tD,clearcoat_normal_fragment_maps:nD,clearcoat_pars_fragment:iD,iridescence_pars_fragment:rD,opaque_fragment:sD,packing:aD,premultiplied_alpha_fragment:oD,project_vertex:lD,dithering_fragment:cD,dithering_pars_fragment:uD,roughnessmap_fragment:fD,roughnessmap_pars_fragment:hD,shadowmap_pars_fragment:dD,shadowmap_pars_vertex:pD,shadowmap_vertex:mD,shadowmask_pars_fragment:_D,skinbase_vertex:gD,skinning_pars_vertex:vD,skinning_vertex:xD,skinnormal_vertex:yD,specularmap_fragment:SD,specularmap_pars_fragment:ED,tonemapping_fragment:MD,tonemapping_pars_fragment:TD,transmission_fragment:bD,transmission_pars_fragment:wD,uv_pars_fragment:AD,uv_pars_vertex:RD,uv_vertex:CD,worldpos_vertex:PD,background_vert:LD,background_frag:DD,backgroundCube_vert:ID,backgroundCube_frag:OD,cube_vert:UD,cube_frag:ND,depth_vert:FD,depth_frag:BD,distanceRGBA_vert:zD,distanceRGBA_frag:kD,equirect_vert:HD,equirect_frag:GD,linedashed_vert:VD,linedashed_frag:WD,meshbasic_vert:$D,meshbasic_frag:XD,meshlambert_vert:qD,meshlambert_frag:YD,meshmatcap_vert:jD,meshmatcap_frag:KD,meshnormal_vert:ZD,meshnormal_frag:JD,meshphong_vert:QD,meshphong_frag:eI,meshphysical_vert:tI,meshphysical_frag:nI,meshtoon_vert:iI,meshtoon_frag:rI,points_vert:sI,points_frag:aI,shadow_vert:oI,shadow_frag:lI,sprite_vert:cI,sprite_frag:uI},le={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Si={basic:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:pn([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:pn([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:pn([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new dt(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:pn([le.points,le.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:pn([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:pn([le.common,le.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:pn([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:pn([le.sprite,le.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:pn([le.common,le.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:pn([le.lights,le.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Si.physical={uniforms:pn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Al={r:0,b:0,g:0};function fI(i,e,t,n,r,s,o){const a=new dt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let y=!1,v=m.isScene===!0?m.background:null;v&&v.isTexture&&(v=(m.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),y=!0);const S=i.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Lc)?(u===void 0&&(u=new wi(new Ro(1,1,1),new Zi({name:"BackgroundCubeMaterial",uniforms:fa(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,(f!==v||h!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new wi(new Co(2,2),new Zi({name:"BackgroundMaterial",uniforms:fa(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ht.getTransfer(v.colorSpace)!==xt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=i.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Al,yx(i)),n.buffers.color.setClear(Al.r,Al.g,Al.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),l=m,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(a,l)},render:g}}function hI(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,u=!1;function f(L,z,B,$,X){let Y=!1;if(o){const C=_($,B,z);c!==C&&(c=C,d(c.object)),Y=m(L,$,B,X),Y&&y(L,$,B,X)}else{const C=z.wireframe===!0;(c.geometry!==$.id||c.program!==B.id||c.wireframe!==C)&&(c.geometry=$.id,c.program=B.id,c.wireframe=C,Y=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(Y||u)&&(u=!1,D(L,z,B,$),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?i.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?i.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,z,B){const $=B.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let Y=X[z.id];Y===void 0&&(Y={},X[z.id]=Y);let C=Y[$];return C===void 0&&(C=p(h()),Y[$]=C),C}function p(L){const z=[],B=[],$=[];for(let X=0;X<r;X++)z[X]=0,B[X]=0,$[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:B,attributeDivisors:$,object:L,attributes:{},index:null}}function m(L,z,B,$){const X=c.attributes,Y=z.attributes;let C=0;const K=B.getAttributes();for(const ue in K)if(K[ue].location>=0){const W=X[ue];let Z=Y[ue];if(Z===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),W===void 0||W.attribute!==Z||Z&&W.data!==Z.data)return!0;C++}return c.attributesNum!==C||c.index!==$}function y(L,z,B,$){const X={},Y=z.attributes;let C=0;const K=B.getAttributes();for(const ue in K)if(K[ue].location>=0){let W=Y[ue];W===void 0&&(ue==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),ue==="instanceColor"&&L.instanceColor&&(W=L.instanceColor));const Z={};Z.attribute=W,W&&W.data&&(Z.data=W.data),X[ue]=Z,C++}c.attributes=X,c.attributesNum=C,c.index=$}function v(){const L=c.newAttributes;for(let z=0,B=L.length;z<B;z++)L[z]=0}function S(L){R(L,0)}function R(L,z){const B=c.newAttributes,$=c.enabledAttributes,X=c.attributeDivisors;B[L]=1,$[L]===0&&(i.enableVertexAttribArray(L),$[L]=1),X[L]!==z&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,z),X[L]=z)}function w(){const L=c.newAttributes,z=c.enabledAttributes;for(let B=0,$=z.length;B<$;B++)z[B]!==L[B]&&(i.disableVertexAttribArray(B),z[B]=0)}function T(L,z,B,$,X,Y,C){C===!0?i.vertexAttribIPointer(L,z,B,X,Y):i.vertexAttribPointer(L,z,B,$,X,Y)}function D(L,z,B,$){if(n.isWebGL2===!1&&(L.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const X=$.attributes,Y=B.getAttributes(),C=z.defaultAttributeValues;for(const K in Y){const ue=Y[K];if(ue.location>=0){let Ie=X[K];if(Ie===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Ie=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Ie=L.instanceColor)),Ie!==void 0){const W=Ie.normalized,Z=Ie.itemSize,ce=t.get(Ie);if(ce===void 0)continue;const me=ce.buffer,ye=ce.type,he=ce.bytesPerElement,qe=n.isWebGL2===!0&&(ye===i.INT||ye===i.UNSIGNED_INT||Ie.gpuType===nx);if(Ie.isInterleavedBufferAttribute){const Le=Ie.data,N=Le.stride,ke=Ie.offset;if(Le.isInstancedInterleavedBuffer){for(let pe=0;pe<ue.locationSize;pe++)R(ue.location+pe,Le.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let pe=0;pe<ue.locationSize;pe++)S(ue.location+pe);i.bindBuffer(i.ARRAY_BUFFER,me);for(let pe=0;pe<ue.locationSize;pe++)T(ue.location+pe,Z/ue.locationSize,ye,W,N*he,(ke+Z/ue.locationSize*pe)*he,qe)}else{if(Ie.isInstancedBufferAttribute){for(let Le=0;Le<ue.locationSize;Le++)R(ue.location+Le,Ie.meshPerAttribute);L.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Le=0;Le<ue.locationSize;Le++)S(ue.location+Le);i.bindBuffer(i.ARRAY_BUFFER,me);for(let Le=0;Le<ue.locationSize;Le++)T(ue.location+Le,Z/ue.locationSize,ye,W,Z*he,Z/ue.locationSize*Le*he,qe)}}else if(C!==void 0){const W=C[K];if(W!==void 0)switch(W.length){case 2:i.vertexAttrib2fv(ue.location,W);break;case 3:i.vertexAttrib3fv(ue.location,W);break;case 4:i.vertexAttrib4fv(ue.location,W);break;default:i.vertexAttrib1fv(ue.location,W)}}}}w()}function O(){U();for(const L in a){const z=a[L];for(const B in z){const $=z[B];for(const X in $)g($[X].object),delete $[X];delete z[B]}delete a[L]}}function x(L){if(a[L.id]===void 0)return;const z=a[L.id];for(const B in z){const $=z[B];for(const X in $)g($[X].object),delete $[X];delete z[B]}delete a[L.id]}function A(L){for(const z in a){const B=a[z];if(B[L.id]===void 0)continue;const $=B[L.id];for(const X in $)g($[X].object),delete $[X];delete B[L.id]}}function U(){j(),u=!0,c!==l&&(c=l,d(c.object))}function j(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:U,resetDefaultState:j,dispose:O,releaseStatesOfGeometry:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:S,disableUnusedAttributes:w}}function dI(i,e,t,n){const r=n.isWebGL2;let s;function o(u){s=u}function a(u,f){i.drawArrays(s,u,f),t.update(f,s,1)}function l(u,f,h){if(h===0)return;let d,g;if(r)d=i,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](s,u,f,h),t.update(f,s,h)}function c(u,f,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<h;g++)this.render(u[g],f[g]);else{d.multiDrawArraysWEBGL(s,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function pI(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),p=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,S=o||e.has("OES_texture_float"),R=v&&S,w=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:y,vertexTextures:v,floatFragmentTextures:S,floatVertexTextures:R,maxSamples:w}}function mI(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new Fr,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||r;return r=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,v=y*4;let S=m.clippingState||null;l.value=S,S=u(g,h,v,d);for(let R=0;R!==v;++R)S[R]=t[R];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=d;v!==_;++v,S+=4)o.copy(f[v]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function _I(i){let e=new WeakMap;function t(o,a){return a===qf?o.mapping=la:a===Yf&&(o.mapping=ca),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qf||a===Yf)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RL(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class gI extends Sx{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Gs=4,A_=[.125,.215,.35,.446,.526,.582],Hr=20,ef=new gI,R_=new dt;let tf=null,nf=0,rf=0;const Br=(1+Math.sqrt(5))/2,Os=1/Br,C_=[new q(1,1,1),new q(-1,1,1),new q(1,1,-1),new q(-1,1,-1),new q(0,Br,Os),new q(0,Br,-Os),new q(Os,0,Br),new q(-Os,0,Br),new q(Br,Os,0),new q(-Br,Os,0)];class P_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=D_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tf,nf,rf),e.scissorTest=!1,Rl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===la||e.mapping===ca?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:mo,format:di,colorSpace:Ki,depthBuffer:!1},r=L_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=L_(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vI(s)),this._blurMaterial=xI(s,e,t)}return r}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,ef)}_sceneToCubeUV(e,t,n,r){const a=new Jn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(R_),u.toneMapping=vr,u.autoClear=!1;const d=new gx({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),g=new wi(new Ro,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(R_),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):y===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;Rl(r,y*v,m>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===la||e.mapping===ca;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=D_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ef)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=C_[(r-1)%C_.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new wi(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):Hr;p>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Hr}`);const m=[];let y=0;for(let T=0;T<Hr;++T){const D=T/_,O=Math.exp(-D*D/2);m.push(O),T===0?y+=O:T<p&&(y+=2*O)}for(let T=0;T<m.length;T++)m[T]=m[T]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-n;const S=this._sizeLods[r],R=3*S*(r>v-Gs?r-v+Gs:0),w=4*(this._cubeSize-S);Rl(t,R,w,3*S,2*S),l.setRenderTarget(t),l.render(f,ef)}}function vI(i){const e=[],t=[],n=[];let r=i;const s=i-Gs+1+A_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>i-Gs?l=A_[o-i+Gs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,y=new Float32Array(_*g*d),v=new Float32Array(p*g*d),S=new Float32Array(m*g*d);for(let w=0;w<d;w++){const T=w%3*2/3-1,D=w>2?0:-1,O=[T,D,0,T+2/3,D,0,T+2/3,D+1,0,T,D,0,T+2/3,D+1,0,T,D+1,0];y.set(O,_*g*w),v.set(h,p*g*w);const x=[w,w,w,w,w,w];S.set(x,m*g*w)}const R=new ds;R.setAttribute("position",new Pi(y,_)),R.setAttribute("uv",new Pi(v,p)),R.setAttribute("faceIndex",new Pi(S,m)),e.push(R),r>Gs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function L_(i,e,t){const n=new fs(i,e,t);return n.texture.mapping=Lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Rl(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function xI(i,e,t){const n=new Float32Array(Hr),r=new q(0,1,0);return new Zi({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_d(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function D_(){return new Zi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_d(),fragmentShader:`

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
		`,blending:gr,depthTest:!1,depthWrite:!1})}function I_(){return new Zi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gr,depthTest:!1,depthWrite:!1})}function _d(){return`

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
	`}function yI(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===qf||l===Yf,u=l===la||l===ca;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new P_(i)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new P_(i));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function SI(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function EI(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],i.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],i.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const y=d.array;_=d.version;for(let v=0,S=y.length;v<S;v+=3){const R=y[v+0],w=y[v+1],T=y[v+2];h.push(R,w,w,T,T,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let v=0,S=y.length/3-1;v<S;v+=3){const R=v+0,w=v+1,T=v+2;h.push(R,w,w,T,T,R)}}else return;const p=new(fx(h)?xx:vx)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function MI(i,e,t,n){const r=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,g){i.drawElements(s,g,a,d*l),t.update(g,s,1)}function f(d,g,_){if(_===0)return;let p,m;if(r)p=i,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,g,a,d*l,_),t.update(g,s,_)}function h(d,g,_){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<_;m++)this.render(d[m]/l,g[m]);else{p.multiDrawElementsWEBGL(s,g,0,a,d,0,_);let m=0;for(let y=0;y<_;y++)m+=g[y];t.update(m,s,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f,this.renderMultiDraw=h}function TI(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function bI(i,e){return i[0]-e[0]}function wI(i,e){return Math.abs(e[1])-Math.abs(i[1])}function AI(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Yt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0;let _=s.get(u);if(_===void 0||_.count!==g){let L=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",L)};_!==void 0&&_.texture.dispose();const y=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let D=0;y===!0&&(D=1),v===!0&&(D=2),S===!0&&(D=3);let O=u.attributes.position.count*D,x=1;O>e.maxTextureSize&&(x=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const A=new Float32Array(O*x*4*g),U=new px(A,O,x,g);U.type=Vi,U.needsUpdate=!0;const j=D*4;for(let z=0;z<g;z++){const B=R[z],$=w[z],X=T[z],Y=O*x*4*z;for(let C=0;C<B.count;C++){const K=C*j;y===!0&&(o.fromBufferAttribute(B,C),A[Y+K+0]=o.x,A[Y+K+1]=o.y,A[Y+K+2]=o.z,A[Y+K+3]=0),v===!0&&(o.fromBufferAttribute($,C),A[Y+K+4]=o.x,A[Y+K+5]=o.y,A[Y+K+6]=o.z,A[Y+K+7]=0),S===!0&&(o.fromBufferAttribute(X,C),A[Y+K+8]=o.x,A[Y+K+9]=o.y,A[Y+K+10]=o.z,A[Y+K+11]=X.itemSize===4?o.w:1)}}_={count:g,texture:U,size:new ot(O,x)},s.set(u,_),u.addEventListener("dispose",L)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const m=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(i,"morphTargetBaseInfluence",m),f.getUniforms().setValue(i,"morphTargetInfluences",h),f.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),f.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}else{const d=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<d;v++){const S=g[v];S[0]=v,S[1]=h[v]}g.sort(wI);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(bI);const _=u.morphAttributes.position,p=u.morphAttributes.normal;let m=0;for(let v=0;v<8;v++){const S=a[v],R=S[0],w=S[1];R!==Number.MAX_SAFE_INTEGER&&w?(_&&u.getAttribute("morphTarget"+v)!==_[R]&&u.setAttribute("morphTarget"+v,_[R]),p&&u.getAttribute("morphNormal"+v)!==p[R]&&u.setAttribute("morphNormal"+v,p[R]),r[v]=w,m+=w):(_&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),p&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const y=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(i,"morphTargetBaseInfluence",y),f.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function RI(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}class bx extends un{constructor(e,t,n,r,s,o,a,l,c,u){if(u=u!==void 0?u:ts,u!==ts&&u!==ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ts&&(n=dr),n===void 0&&u===ua&&(n=es),super(null,r,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const wx=new un,Ax=new bx(1,1);Ax.compareFunction=ux;const Rx=new px,Cx=new fL,Px=new Ex,O_=[],U_=[],N_=new Float32Array(16),F_=new Float32Array(9),B_=new Float32Array(4);function ya(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=O_[r];if(s===void 0&&(s=new Float32Array(r),O_[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Uc(i,e){let t=U_[e];t===void 0&&(t=new Int32Array(e),U_[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function CI(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function PI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function LI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function DI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function II(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;B_.set(n),i.uniformMatrix2fv(this.addr,!1,B_),Vt(t,n)}}function OI(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;F_.set(n),i.uniformMatrix3fv(this.addr,!1,F_),Vt(t,n)}}function UI(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;N_.set(n),i.uniformMatrix4fv(this.addr,!1,N_),Vt(t,n)}}function NI(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function FI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function BI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function zI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function kI(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function HI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function GI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function VI(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function WI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?Ax:wx;t.setTexture2D(e||s,r)}function $I(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Cx,r)}function XI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Px,r)}function qI(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Rx,r)}function YI(i){switch(i){case 5126:return CI;case 35664:return PI;case 35665:return LI;case 35666:return DI;case 35674:return II;case 35675:return OI;case 35676:return UI;case 5124:case 35670:return NI;case 35667:case 35671:return FI;case 35668:case 35672:return BI;case 35669:case 35673:return zI;case 5125:return kI;case 36294:return HI;case 36295:return GI;case 36296:return VI;case 35678:case 36198:case 36298:case 36306:case 35682:return WI;case 35679:case 36299:case 36307:return $I;case 35680:case 36300:case 36308:case 36293:return XI;case 36289:case 36303:case 36311:case 36292:return qI}}function jI(i,e){i.uniform1fv(this.addr,e)}function KI(i,e){const t=ya(e,this.size,2);i.uniform2fv(this.addr,t)}function ZI(i,e){const t=ya(e,this.size,3);i.uniform3fv(this.addr,t)}function JI(i,e){const t=ya(e,this.size,4);i.uniform4fv(this.addr,t)}function QI(i,e){const t=ya(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function eO(i,e){const t=ya(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tO(i,e){const t=ya(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function nO(i,e){i.uniform1iv(this.addr,e)}function iO(i,e){i.uniform2iv(this.addr,e)}function rO(i,e){i.uniform3iv(this.addr,e)}function sO(i,e){i.uniform4iv(this.addr,e)}function aO(i,e){i.uniform1uiv(this.addr,e)}function oO(i,e){i.uniform2uiv(this.addr,e)}function lO(i,e){i.uniform3uiv(this.addr,e)}function cO(i,e){i.uniform4uiv(this.addr,e)}function uO(i,e,t){const n=this.cache,r=e.length,s=Uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||wx,s[o])}function fO(i,e,t){const n=this.cache,r=e.length,s=Uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cx,s[o])}function hO(i,e,t){const n=this.cache,r=e.length,s=Uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Px,s[o])}function dO(i,e,t){const n=this.cache,r=e.length,s=Uc(t,r);Gt(n,s)||(i.uniform1iv(this.addr,s),Vt(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Rx,s[o])}function pO(i){switch(i){case 5126:return jI;case 35664:return KI;case 35665:return ZI;case 35666:return JI;case 35674:return QI;case 35675:return eO;case 35676:return tO;case 5124:case 35670:return nO;case 35667:case 35671:return iO;case 35668:case 35672:return rO;case 35669:case 35673:return sO;case 5125:return aO;case 36294:return oO;case 36295:return lO;case 36296:return cO;case 35678:case 36198:case 36298:case 36306:case 35682:return uO;case 35679:case 36299:case 36307:return fO;case 35680:case 36300:case 36308:case 36293:return hO;case 36289:case 36303:case 36311:case 36292:return dO}}class mO{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=YI(t.type)}}class _O{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pO(t.type)}}class gO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const sf=/(\w+)(\])?(\[|\.)?/g;function z_(i,e){i.seq.push(e),i.map[e.id]=e}function vO(i,e,t){const n=i.name,r=n.length;for(sf.lastIndex=0;;){const s=sf.exec(n),o=sf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){z_(t,c===void 0?new mO(a,i,e):new _O(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new gO(a),z_(t,f)),t=f}}}class Xl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);vO(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function k_(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xO=37297;let yO=0;function SO(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function EO(i){const e=ht.getPrimaries(ht.workingColorSpace),t=ht.getPrimaries(i);let n;switch(e===t?n="":e===mc&&t===pc?n="LinearDisplayP3ToLinearSRGB":e===pc&&t===mc&&(n="LinearSRGBToLinearDisplayP3"),i){case Ki:case Dc:return[n,"LinearTransferOETF"];case Kt:case dd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function H_(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+SO(i.getShaderSource(e),o)}else return r}function MO(i,e){const t=EO(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function TO(i,e){let t;switch(e){case OP:t="Linear";break;case UP:t="Reinhard";break;case NP:t="OptimizedCineon";break;case FP:t="ACESFilmic";break;case zP:t="AgX";break;case BP:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function bO(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Vs).join(`
`)}function wO(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function AO(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function RO(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Vs(i){return i!==""}function G_(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function V_(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CO=/^[ \t]*#include +<([\w\d./]+)>/gm;function eh(i){return i.replace(CO,LO)}const PO=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function LO(i,e){let t=Ye[e];if(t===void 0){const n=PO.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return eh(t)}const DO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(i){return i.replace(DO,IO)}function IO(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $_(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function OO(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===lP?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bi&&(e="SHADOWMAP_TYPE_VSM"),e}function UO(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case la:case ca:e="ENVMAP_TYPE_CUBE";break;case Lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NO(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ca:e="ENVMAP_MODE_REFRACTION";break}return e}function FO(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ex:e="ENVMAP_BLENDING_MULTIPLY";break;case DP:e="ENVMAP_BLENDING_MIX";break;case IP:e="ENVMAP_BLENDING_ADD";break}return e}function BO(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zO(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=OO(t),c=UO(t),u=NO(t),f=FO(t),h=BO(t),d=t.isWebGL2?"":bO(t),g=wO(t),_=AO(s),p=r.createProgram();let m,y,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),m.length>0&&(m+=`
`),y=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Vs).join(`
`),y.length>0&&(y+=`
`)):(m=[$_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),y=[d,$_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vr?"#define TONE_MAPPING":"",t.toneMapping!==vr?Ye.tonemapping_pars_fragment:"",t.toneMapping!==vr?TO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,MO("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vs).join(`
`)),o=eh(o),o=G_(o,t),o=V_(o,t),a=eh(a),a=G_(a,t),a=V_(a,t),o=W_(o),a=W_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,y=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===o_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===o_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const S=v+m+o,R=v+y+a,w=k_(r,r.VERTEX_SHADER,S),T=k_(r,r.FRAGMENT_SHADER,R);r.attachShader(p,w),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(U){if(i.debug.checkShaderErrors){const j=r.getProgramInfoLog(p).trim(),L=r.getShaderInfoLog(w).trim(),z=r.getShaderInfoLog(T).trim();let B=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,p,w,T);else{const X=H_(r,w,"vertex"),Y=H_(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+j+`
`+X+`
`+Y)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(L===""||z==="")&&($=!1);$&&(U.diagnostics={runnable:B,programLog:j,vertexShader:{log:L,prefix:m},fragmentShader:{log:z,prefix:y}})}r.deleteShader(w),r.deleteShader(T),O=new Xl(r,p),x=RO(r,p)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let x;this.getAttributes=function(){return x===void 0&&D(this),x};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(p,xO)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yO++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}let kO=0;class HO{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new GO(e),t.set(e,n)),n}}class GO{constructor(e){this.id=kO++,this.code=e,this.usedTimes=0}}function VO(i,e,t,n,r,s,o){const a=new md,l=new HO,c=new Set,u=[],f=r.isWebGL2,h=r.logarithmicDepthBuffer,d=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return c.add(x),x===0?"uv":`uv${x}`}function m(x,A,U,j,L){const z=j.fog,B=L.geometry,$=x.isMeshStandardMaterial?j.environment:null,X=(x.isMeshStandardMaterial?t:e).get(x.envMap||$),Y=X&&X.mapping===Lc?X.image.height:null,C=_[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const K=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ue=K!==void 0?K.length:0;let Ie=0;B.morphAttributes.position!==void 0&&(Ie=1),B.morphAttributes.normal!==void 0&&(Ie=2),B.morphAttributes.color!==void 0&&(Ie=3);let W,Z,ce,me;if(C){const at=Si[C];W=at.vertexShader,Z=at.fragmentShader}else W=x.vertexShader,Z=x.fragmentShader,l.update(x),ce=l.getVertexShaderID(x),me=l.getFragmentShaderID(x);const ye=i.getRenderTarget(),he=L.isInstancedMesh===!0,qe=L.isBatchedMesh===!0,Le=!!x.map,N=!!x.matcap,ke=!!X,pe=!!x.aoMap,Re=!!x.lightMap,ge=!!x.bumpMap,G=!!x.normalMap,Oe=!!x.displacementMap,b=!!x.emissiveMap,E=!!x.metalnessMap,F=!!x.roughnessMap,ee=x.anisotropy>0,Q=x.clearcoat>0,te=x.iridescence>0,fe=x.sheen>0,oe=x.transmission>0,ae=ee&&!!x.anisotropyMap,we=Q&&!!x.clearcoatMap,ze=Q&&!!x.clearcoatNormalMap,J=Q&&!!x.clearcoatRoughnessMap,rt=te&&!!x.iridescenceMap,Ce=te&&!!x.iridescenceThicknessMap,He=fe&&!!x.sheenColorMap,Te=fe&&!!x.sheenRoughnessMap,_e=!!x.specularMap,Ge=!!x.specularColorMap,Ke=!!x.specularIntensityMap,st=oe&&!!x.transmissionMap,de=oe&&!!x.thicknessMap,tt=!!x.gradientMap,P=!!x.alphaMap,ne=x.alphaTest>0,ie=!!x.alphaHash,ve=!!x.extensions;let De=vr;x.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(De=i.toneMapping);const je={isWebGL2:f,shaderID:C,shaderType:x.type,shaderName:x.name,vertexShader:W,fragmentShader:Z,defines:x.defines,customVertexShaderID:ce,customFragmentShaderID:me,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:qe,instancing:he,instancingColor:he&&L.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:ye===null?i.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Ki,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:N,envMap:ke,envMapMode:ke&&X.mapping,envMapCubeUVHeight:Y,aoMap:pe,lightMap:Re,bumpMap:ge,normalMap:G,displacementMap:d&&Oe,emissiveMap:b,normalMapObjectSpace:G&&x.normalMapType===ZP,normalMapTangentSpace:G&&x.normalMapType===KP,metalnessMap:E,roughnessMap:F,anisotropy:ee,anisotropyMap:ae,clearcoat:Q,clearcoatMap:we,clearcoatNormalMap:ze,clearcoatRoughnessMap:J,iridescence:te,iridescenceMap:rt,iridescenceThicknessMap:Ce,sheen:fe,sheenColorMap:He,sheenRoughnessMap:Te,specularMap:_e,specularColorMap:Ge,specularIntensityMap:Ke,transmission:oe,transmissionMap:st,thicknessMap:de,gradientMap:tt,opaque:x.transparent===!1&&x.blending===Js&&x.alphaToCoverage===!1,alphaMap:P,alphaTest:ne,alphaHash:ie,combine:x.combine,mapUv:Le&&p(x.map.channel),aoMapUv:pe&&p(x.aoMap.channel),lightMapUv:Re&&p(x.lightMap.channel),bumpMapUv:ge&&p(x.bumpMap.channel),normalMapUv:G&&p(x.normalMap.channel),displacementMapUv:Oe&&p(x.displacementMap.channel),emissiveMapUv:b&&p(x.emissiveMap.channel),metalnessMapUv:E&&p(x.metalnessMap.channel),roughnessMapUv:F&&p(x.roughnessMap.channel),anisotropyMapUv:ae&&p(x.anisotropyMap.channel),clearcoatMapUv:we&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ze&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:He&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(x.sheenRoughnessMap.channel),specularMapUv:_e&&p(x.specularMap.channel),specularColorMapUv:Ge&&p(x.specularColorMap.channel),specularIntensityMapUv:Ke&&p(x.specularIntensityMap.channel),transmissionMapUv:st&&p(x.transmissionMap.channel),thicknessMapUv:de&&p(x.thicknessMap.channel),alphaMapUv:P&&p(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(G||ee),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Le||P),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Ie,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&ht.getTransfer(x.map.colorSpace)===xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gi,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ve&&x.extensions.derivatives===!0,extensionFragDepth:ve&&x.extensions.fragDepth===!0,extensionDrawBuffers:ve&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ve&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ve&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:ve&&x.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return je.vertexUv1s=c.has(1),je.vertexUv2s=c.has(2),je.vertexUv3s=c.has(3),c.clear(),je}function y(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const U in x.defines)A.push(U),A.push(x.defines[U]);return x.isRawShaderMaterial===!1&&(v(A,x),S(A,x),A.push(i.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function v(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function S(x,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),x.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.alphaToCoverage&&a.enable(20),x.push(a.mask)}function R(x){const A=_[x.type];let U;if(A){const j=Si[A];U=TL.clone(j.uniforms)}else U=x.uniforms;return U}function w(x,A){let U;for(let j=0,L=u.length;j<L;j++){const z=u[j];if(z.cacheKey===A){U=z,++U.usedTimes;break}}return U===void 0&&(U=new zO(i,A,x,s),u.push(U)),U}function T(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),x.destroy()}}function D(x){l.remove(x)}function O(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:w,releaseProgram:T,releaseShaderCache:D,programs:u,dispose:O}}function WO(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function $O(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function X_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function q_(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,g,_,p){let m=i[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},i[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function a(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?r.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=o(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?r.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||$O),n.length>1&&n.sort(h||X_),r.length>1&&r.sort(h||X_)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function XO(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new q_,i.set(n,[o])):r>=s.length?(o=new q_,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function qO(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new dt};break;case"SpotLight":t={position:new q,direction:new q,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[e.id]=t,t}}}function YO(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let jO=0;function KO(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ZO(i,e){const t=new qO,n=YO(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new q);const s=new q,o=new Jt,a=new Jt;function l(u,f){let h=0,d=0,g=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let _=0,p=0,m=0,y=0,v=0,S=0,R=0,w=0,T=0,D=0,O=0;u.sort(KO);const x=f===!0?Math.PI:1;for(let U=0,j=u.length;U<j;U++){const L=u[U],z=L.color,B=L.intensity,$=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=z.r*B*x,d+=z.g*B*x,g+=z.b*B*x;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(L.sh.coefficients[Y],B);O++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),L.castShadow){const C=L.shadow,K=n.get(L);K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,r.directionalShadow[_]=K,r.directionalShadowMap[_]=X,r.directionalShadowMatrix[_]=L.shadow.matrix,S++}r.directional[_]=Y,_++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(z).multiplyScalar(B*x),Y.distance=$,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,r.spot[m]=Y;const C=L.shadow;if(L.map&&(r.spotLightMap[T]=L.map,T++,C.updateMatrices(L),L.castShadow&&D++),r.spotLightMatrix[m]=C.matrix,L.castShadow){const K=n.get(L);K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,r.spotShadow[m]=K,r.spotShadowMap[m]=X,w++}m++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(z).multiplyScalar(B),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),r.rectArea[y]=Y,y++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*x),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const C=L.shadow,K=n.get(L);K.shadowBias=C.bias,K.shadowNormalBias=C.normalBias,K.shadowRadius=C.radius,K.shadowMapSize=C.mapSize,K.shadowCameraNear=C.camera.near,K.shadowCameraFar=C.camera.far,r.pointShadow[p]=K,r.pointShadowMap[p]=X,r.pointShadowMatrix[p]=L.shadow.matrix,R++}r.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(B*x),Y.groundColor.copy(L.groundColor).multiplyScalar(B*x),r.hemi[v]=Y,v++}}y>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=le.LTC_FLOAT_1,r.rectAreaLTC2=le.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=le.LTC_HALF_1,r.rectAreaLTC2=le.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==p||A.spotLength!==m||A.rectAreaLength!==y||A.hemiLength!==v||A.numDirectionalShadows!==S||A.numPointShadows!==R||A.numSpotShadows!==w||A.numSpotMaps!==T||A.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=m,r.rectArea.length=y,r.point.length=p,r.hemi.length=v,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+T-D,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=O,A.directionalLength=_,A.pointLength=p,A.spotLength=m,A.rectAreaLength=y,A.hemiLength=v,A.numDirectionalShadows=S,A.numPointShadows=R,A.numSpotShadows=w,A.numSpotMaps=T,A.numLightProbes=O,r.version=jO++)}function c(u,f){let h=0,d=0,g=0,_=0,p=0;const m=f.matrixWorldInverse;for(let y=0,v=u.length;y<v;y++){const S=u[y];if(S.isDirectionalLight){const R=r.directional[h];R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),h++}else if(S.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),a.identity(),o.copy(S.matrixWorld),o.premultiply(m),a.extractRotation(o),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const R=r.point[d];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const R=r.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:l,setupView:c,state:r}}function Y_(i,e){const t=new ZO(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function l(f){t.setup(n,f)}function c(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function JO(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Y_(i,e),t.set(s,[l])):o>=a.length?(l=new Y_(i,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class QO extends Oc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=YP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eU extends Oc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nU=`uniform sampler2D shadow_pass;
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
}`;function iU(i,e,t){let n=new Mx;const r=new ot,s=new ot,o=new Yt,a=new QO({depthPacking:jP}),l=new eU,c={},u=t.maxTextureSize,f={[Tr]:Cn,[Cn]:Tr,[Gi]:Gi},h=new Zi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:tU,fragmentShader:nU}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ds;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wi(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Q0;let m=this.type;this.render=function(w,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const O=i.getRenderTarget(),x=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),U=i.state;U.setBlending(gr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const j=m!==Bi&&this.type===Bi,L=m===Bi&&this.type!==Bi;for(let z=0,B=w.length;z<B;z++){const $=w[z],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const Y=X.getFrameExtents();if(r.multiply(Y),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,X.mapSize.y=s.y)),X.map===null||j===!0||L===!0){const K=this.type!==Bi?{minFilter:vn,magFilter:vn}:{};X.map!==null&&X.map.dispose(),X.map=new fs(r.x,r.y,K),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const C=X.getViewportCount();for(let K=0;K<C;K++){const ue=X.getViewport(K);o.set(s.x*ue.x,s.y*ue.y,s.x*ue.z,s.y*ue.w),U.viewport(o),X.updateMatrices($,K),n=X.getFrustum(),S(T,D,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Bi&&y(X,D),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(O,x,A)};function y(w,T){const D=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new fs(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,D,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,D,d,_,null)}function v(w,T,D,O){let x=null;const A=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)x=A;else if(x=D.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,j=T.uuid;let L=c[U];L===void 0&&(L={},c[U]=L);let z=L[j];z===void 0&&(z=x.clone(),L[j]=z,T.addEventListener("dispose",R)),x=z}if(x.visible=T.visible,x.wireframe=T.wireframe,O===Bi?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:f[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=i.properties.get(x);U.light=D}return x}function S(w,T,D,O,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Bi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const j=e.update(w),L=w.material;if(Array.isArray(L)){const z=j.groups;for(let B=0,$=z.length;B<$;B++){const X=z[B],Y=L[X.materialIndex];if(Y&&Y.visible){const C=v(w,Y,O,x);w.onBeforeShadow(i,w,T,D,j,C,X),i.renderBufferDirect(D,null,j,C,w,X),w.onAfterShadow(i,w,T,D,j,C,X)}}}else if(L.visible){const z=v(w,L,O,x);w.onBeforeShadow(i,w,T,D,j,z,null),i.renderBufferDirect(D,null,j,z,w,null),w.onAfterShadow(i,w,T,D,j,z,null)}}const U=w.children;for(let j=0,L=U.length;j<L;j++)S(U[j],T,D,O,x)}function R(w){w.target.removeEventListener("dispose",R);for(const D in c){const O=c[D],x=w.target.uuid;x in O&&(O[x].dispose(),delete O[x])}}}function rU(i,e,t){const n=t.isWebGL2;function r(){let P=!1;const ne=new Yt;let ie=null;const ve=new Yt(0,0,0,0);return{setMask:function(De){ie!==De&&!P&&(i.colorMask(De,De,De,De),ie=De)},setLocked:function(De){P=De},setClear:function(De,je,at,be,Ee){Ee===!0&&(De*=be,je*=be,at*=be),ne.set(De,je,at,be),ve.equals(ne)===!1&&(i.clearColor(De,je,at,be),ve.copy(ne))},reset:function(){P=!1,ie=null,ve.set(-1,0,0,0)}}}function s(){let P=!1,ne=null,ie=null,ve=null;return{setTest:function(De){De?he(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(De){ne!==De&&!P&&(i.depthMask(De),ne=De)},setFunc:function(De){if(ie!==De){switch(De){case bP:i.depthFunc(i.NEVER);break;case wP:i.depthFunc(i.ALWAYS);break;case AP:i.depthFunc(i.LESS);break;case hc:i.depthFunc(i.LEQUAL);break;case RP:i.depthFunc(i.EQUAL);break;case CP:i.depthFunc(i.GEQUAL);break;case PP:i.depthFunc(i.GREATER);break;case LP:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ie=De}},setLocked:function(De){P=De},setClear:function(De){ve!==De&&(i.clearDepth(De),ve=De)},reset:function(){P=!1,ne=null,ie=null,ve=null}}}function o(){let P=!1,ne=null,ie=null,ve=null,De=null,je=null,at=null,be=null,Ee=null;return{setTest:function(Pe){P||(Pe?he(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Pe){ne!==Pe&&!P&&(i.stencilMask(Pe),ne=Pe)},setFunc:function(Pe,re,Ne){(ie!==Pe||ve!==re||De!==Ne)&&(i.stencilFunc(Pe,re,Ne),ie=Pe,ve=re,De=Ne)},setOp:function(Pe,re,Ne){(je!==Pe||at!==re||be!==Ne)&&(i.stencilOp(Pe,re,Ne),je=Pe,at=re,be=Ne)},setLocked:function(Pe){P=Pe},setClear:function(Pe){Ee!==Pe&&(i.clearStencil(Pe),Ee=Pe)},reset:function(){P=!1,ne=null,ie=null,ve=null,De=null,je=null,at=null,be=null,Ee=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,R=null,w=null,T=null,D=null,O=new dt(0,0,0),x=0,A=!1,U=null,j=null,L=null,z=null,B=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const C=i.getParameter(i.VERSION);C.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(C)[1]),X=Y>=1):C.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),X=Y>=2);let K=null,ue={};const Ie=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),Z=new Yt().fromArray(Ie),ce=new Yt().fromArray(W);function me(P,ne,ie,ve){const De=new Uint8Array(4),je=i.createTexture();i.bindTexture(P,je),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let at=0;at<ie;at++)n&&(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)?i.texImage3D(ne,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,De):i.texImage2D(ne+at,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,De);return je}const ye={};ye[i.TEXTURE_2D]=me(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=me(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=me(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=me(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),he(i.DEPTH_TEST),l.setFunc(hc),Oe(!1),b(Am),he(i.CULL_FACE),ge(gr);function he(P){h[P]!==!0&&(i.enable(P),h[P]=!0)}function qe(P){h[P]!==!1&&(i.disable(P),h[P]=!1)}function Le(P,ne){return d[P]!==ne?(i.bindFramebuffer(P,ne),d[P]=ne,n&&(P===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ne),P===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ne)),!0):!1}function N(P,ne){let ie=_,ve=!1;if(P)if(ie=g.get(ne),ie===void 0&&(ie=[],g.set(ne,ie)),P.isWebGLMultipleRenderTargets){const De=P.texture;if(ie.length!==De.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let je=0,at=De.length;je<at;je++)ie[je]=i.COLOR_ATTACHMENT0+je;ie.length=De.length,ve=!0}}else ie[0]!==i.COLOR_ATTACHMENT0&&(ie[0]=i.COLOR_ATTACHMENT0,ve=!0);else ie[0]!==i.BACK&&(ie[0]=i.BACK,ve=!0);ve&&(t.isWebGL2?i.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function ke(P){return p!==P?(i.useProgram(P),p=P,!0):!1}const pe={[kr]:i.FUNC_ADD,[uP]:i.FUNC_SUBTRACT,[fP]:i.FUNC_REVERSE_SUBTRACT};if(n)pe[Lm]=i.MIN,pe[Dm]=i.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(pe[Lm]=P.MIN_EXT,pe[Dm]=P.MAX_EXT)}const Re={[hP]:i.ZERO,[dP]:i.ONE,[pP]:i.SRC_COLOR,[$f]:i.SRC_ALPHA,[yP]:i.SRC_ALPHA_SATURATE,[vP]:i.DST_COLOR,[_P]:i.DST_ALPHA,[mP]:i.ONE_MINUS_SRC_COLOR,[Xf]:i.ONE_MINUS_SRC_ALPHA,[xP]:i.ONE_MINUS_DST_COLOR,[gP]:i.ONE_MINUS_DST_ALPHA,[SP]:i.CONSTANT_COLOR,[EP]:i.ONE_MINUS_CONSTANT_COLOR,[MP]:i.CONSTANT_ALPHA,[TP]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ne,ie,ve,De,je,at,be,Ee,Pe){if(P===gr){m===!0&&(qe(i.BLEND),m=!1);return}if(m===!1&&(he(i.BLEND),m=!0),P!==cP){if(P!==y||Pe!==A){if((v!==kr||w!==kr)&&(i.blendEquation(i.FUNC_ADD),v=kr,w=kr),Pe)switch(P){case Js:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rm:i.blendFunc(i.ONE,i.ONE);break;case Cm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pm:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Js:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rm:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Cm:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pm:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}S=null,R=null,T=null,D=null,O.set(0,0,0),x=0,y=P,A=Pe}return}De=De||ne,je=je||ie,at=at||ve,(ne!==v||De!==w)&&(i.blendEquationSeparate(pe[ne],pe[De]),v=ne,w=De),(ie!==S||ve!==R||je!==T||at!==D)&&(i.blendFuncSeparate(Re[ie],Re[ve],Re[je],Re[at]),S=ie,R=ve,T=je,D=at),(be.equals(O)===!1||Ee!==x)&&(i.blendColor(be.r,be.g,be.b,Ee),O.copy(be),x=Ee),y=P,A=!1}function G(P,ne){P.side===Gi?qe(i.CULL_FACE):he(i.CULL_FACE);let ie=P.side===Cn;ne&&(ie=!ie),Oe(ie),P.blending===Js&&P.transparent===!1?ge(gr):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const ve=P.stencilWrite;c.setTest(ve),ve&&(c.setMask(P.stencilWriteMask),c.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),c.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),F(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?he(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(P){U!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),U=P)}function b(P){P!==aP?(he(i.CULL_FACE),P!==j&&(P===Am?i.cullFace(i.BACK):P===oP?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),j=P}function E(P){P!==L&&(X&&i.lineWidth(P),L=P)}function F(P,ne,ie){P?(he(i.POLYGON_OFFSET_FILL),(z!==ne||B!==ie)&&(i.polygonOffset(ne,ie),z=ne,B=ie)):qe(i.POLYGON_OFFSET_FILL)}function ee(P){P?he(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function Q(P){P===void 0&&(P=i.TEXTURE0+$-1),K!==P&&(i.activeTexture(P),K=P)}function te(P,ne,ie){ie===void 0&&(K===null?ie=i.TEXTURE0+$-1:ie=K);let ve=ue[ie];ve===void 0&&(ve={type:void 0,texture:void 0},ue[ie]=ve),(ve.type!==P||ve.texture!==ne)&&(K!==ie&&(i.activeTexture(ie),K=ie),i.bindTexture(P,ne||ye[P]),ve.type=P,ve.texture=ne)}function fe(){const P=ue[K];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ae(){try{i.compressedTexImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function we(){try{i.texSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ze(){try{i.texSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{i.texStorage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{i.texStorage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Te(){try{i.texImage2D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function _e(){try{i.texImage3D.apply(i,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(P){Z.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),Z.copy(P))}function Ke(P){ce.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),ce.copy(P))}function st(P,ne){let ie=f.get(ne);ie===void 0&&(ie=new WeakMap,f.set(ne,ie));let ve=ie.get(P);ve===void 0&&(ve=i.getUniformBlockIndex(ne,P.name),ie.set(P,ve))}function de(P,ne){const ve=f.get(ne).get(P);u.get(ne)!==ve&&(i.uniformBlockBinding(ne,ve,P.__bindingPointIndex),u.set(ne,ve))}function tt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},K=null,ue={},d={},g=new WeakMap,_=[],p=null,m=!1,y=null,v=null,S=null,R=null,w=null,T=null,D=null,O=new dt(0,0,0),x=0,A=!1,U=null,j=null,L=null,z=null,B=null,Z.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:he,disable:qe,bindFramebuffer:Le,drawBuffers:N,useProgram:ke,setBlending:ge,setMaterial:G,setFlipSided:Oe,setCullFace:b,setLineWidth:E,setPolygonOffset:F,setScissorTest:ee,activeTexture:Q,bindTexture:te,unbindTexture:fe,compressedTexImage2D:oe,compressedTexImage3D:ae,texImage2D:Te,texImage3D:_e,updateUBOMapping:st,uniformBlockBinding:de,texStorage2D:Ce,texStorage3D:He,texSubImage2D:we,texSubImage3D:ze,compressedTexSubImage2D:J,compressedTexSubImage3D:rt,scissor:Ge,viewport:Ke,reset:tt}}function sU(i,e,t,n,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return d?new OffscreenCanvas(b,E):_o("canvas")}function _(b,E,F,ee){let Q=1;if((b.width>ee||b.height>ee)&&(Q=ee/Math.max(b.width,b.height)),Q<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const te=E?Qf:Math.floor,fe=te(Q*b.width),oe=te(Q*b.height);f===void 0&&(f=g(fe,oe));const ae=F?g(fe,oe):f;return ae.width=fe,ae.height=oe,ae.getContext("2d").drawImage(b,0,0,fe,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+fe+"x"+oe+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function p(b){return l_(b.width)&&l_(b.height)}function m(b){return a?!1:b.wrapS!==hi||b.wrapT!==hi||b.minFilter!==vn&&b.minFilter!==Nt}function y(b,E){return b.generateMipmaps&&E&&b.minFilter!==vn&&b.minFilter!==Nt}function v(b){i.generateMipmap(b)}function S(b,E,F,ee,Q=!1){if(a===!1)return E;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=E;if(E===i.RED&&(F===i.FLOAT&&(te=i.R32F),F===i.HALF_FLOAT&&(te=i.R16F),F===i.UNSIGNED_BYTE&&(te=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(te=i.R8UI),F===i.UNSIGNED_SHORT&&(te=i.R16UI),F===i.UNSIGNED_INT&&(te=i.R32UI),F===i.BYTE&&(te=i.R8I),F===i.SHORT&&(te=i.R16I),F===i.INT&&(te=i.R32I)),E===i.RG&&(F===i.FLOAT&&(te=i.RG32F),F===i.HALF_FLOAT&&(te=i.RG16F),F===i.UNSIGNED_BYTE&&(te=i.RG8)),E===i.RGBA){const fe=Q?dc:ht.getTransfer(ee);F===i.FLOAT&&(te=i.RGBA32F),F===i.HALF_FLOAT&&(te=i.RGBA16F),F===i.UNSIGNED_BYTE&&(te=fe===xt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(te=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(te=i.RGB5_A1)}return(te===i.R16F||te===i.R32F||te===i.RG16F||te===i.RG32F||te===i.RGBA16F||te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function R(b,E,F){return y(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==vn&&b.minFilter!==Nt?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function w(b){return b===vn||b===Im||b===Ia?i.NEAREST:i.LINEAR}function T(b){const E=b.target;E.removeEventListener("dispose",T),O(E),E.isVideoTexture&&u.delete(E)}function D(b){const E=b.target;E.removeEventListener("dispose",D),A(E)}function O(b){const E=n.get(b);if(E.__webglInit===void 0)return;const F=b.source,ee=h.get(F);if(ee){const Q=ee[E.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&x(b),Object.keys(ee).length===0&&h.delete(F)}n.remove(b)}function x(b){const E=n.get(b);i.deleteTexture(E.__webglTexture);const F=b.source,ee=h.get(F);delete ee[E.__cacheKey],o.memory.textures--}function A(b){const E=b.texture,F=n.get(b),ee=n.get(E);if(ee.__webglTexture!==void 0&&(i.deleteTexture(ee.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(F.__webglFramebuffer[Q]))for(let te=0;te<F.__webglFramebuffer[Q].length;te++)i.deleteFramebuffer(F.__webglFramebuffer[Q][te]);else i.deleteFramebuffer(F.__webglFramebuffer[Q]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[Q])}else{if(Array.isArray(F.__webglFramebuffer))for(let Q=0;Q<F.__webglFramebuffer.length;Q++)i.deleteFramebuffer(F.__webglFramebuffer[Q]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let Q=0;Q<F.__webglColorRenderbuffer.length;Q++)F.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[Q]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Q=0,te=E.length;Q<te;Q++){const fe=n.get(E[Q]);fe.__webglTexture&&(i.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(E[Q])}n.remove(E),n.remove(b)}let U=0;function j(){U=0}function L(){const b=U;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),U+=1,b}function z(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function B(b,E){const F=n.get(b);if(b.isVideoTexture&&G(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const ee=b.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(F,b,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function $(b,E){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Z(F,b,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function X(b,E){const F=n.get(b);if(b.version>0&&F.__version!==b.version){Z(F,b,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function Y(b,E){const F=n.get(b);if(b.version>0&&F.__version!==b.version){ce(F,b,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const C={[jf]:i.REPEAT,[hi]:i.CLAMP_TO_EDGE,[Kf]:i.MIRRORED_REPEAT},K={[vn]:i.NEAREST,[Im]:i.NEAREST_MIPMAP_NEAREST,[Ia]:i.NEAREST_MIPMAP_LINEAR,[Nt]:i.LINEAR,[Cu]:i.LINEAR_MIPMAP_NEAREST,[Wr]:i.LINEAR_MIPMAP_LINEAR},ue={[JP]:i.NEVER,[rL]:i.ALWAYS,[QP]:i.LESS,[ux]:i.LEQUAL,[eL]:i.EQUAL,[iL]:i.GEQUAL,[tL]:i.GREATER,[nL]:i.NOTEQUAL};function Ie(b,E,F){if(E.type===Vi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Nt||E.magFilter===Cu||E.magFilter===Ia||E.magFilter===Wr||E.minFilter===Nt||E.minFilter===Cu||E.minFilter===Ia||E.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),F?(i.texParameteri(b,i.TEXTURE_WRAP_S,C[E.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,C[E.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,C[E.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,K[E.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,K[E.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(E.wrapS!==hi||E.wrapT!==hi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,w(E.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,w(E.minFilter)),E.minFilter!==vn&&E.minFilter!==Nt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,ue[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===vn||E.minFilter!==Ia&&E.minFilter!==Wr||E.type===Vi&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===mo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||n.get(E).__currentAnisotropy)&&(i.texParameterf(b,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy)}}function W(b,E){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",T));const ee=E.source;let Q=h.get(ee);Q===void 0&&(Q={},h.set(ee,Q));const te=z(E);if(te!==b.__cacheKey){Q[te]===void 0&&(Q[te]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Q[te].usedTimes++;const fe=Q[b.__cacheKey];fe!==void 0&&(Q[b.__cacheKey].usedTimes--,fe.usedTimes===0&&x(E)),b.__cacheKey=te,b.__webglTexture=Q[te].texture}return F}function Z(b,E,F){let ee=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=i.TEXTURE_3D);const Q=W(b,E),te=E.source;t.bindTexture(ee,b.__webglTexture,i.TEXTURE0+F);const fe=n.get(te);if(te.version!==fe.__version||Q===!0){t.activeTexture(i.TEXTURE0+F);const oe=ht.getPrimaries(ht.workingColorSpace),ae=E.colorSpace===Qn?null:ht.getPrimaries(E.colorSpace),we=E.colorSpace===Qn||oe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const ze=m(E)&&p(E.image)===!1;let J=_(E.image,ze,!1,r.maxTextureSize);J=Oe(E,J);const rt=p(J)||a,Ce=s.convert(E.format,E.colorSpace);let He=s.convert(E.type),Te=S(E.internalFormat,Ce,He,E.colorSpace,E.isVideoTexture);Ie(ee,E,rt);let _e;const Ge=E.mipmaps,Ke=a&&E.isVideoTexture!==!0&&Te!==lx,st=fe.__version===void 0||Q===!0,de=te.dataReady,tt=R(E,J,rt);if(E.isDepthTexture)Te=i.DEPTH_COMPONENT,a?E.type===Vi?Te=i.DEPTH_COMPONENT32F:E.type===dr?Te=i.DEPTH_COMPONENT24:E.type===es?Te=i.DEPTH24_STENCIL8:Te=i.DEPTH_COMPONENT16:E.type===Vi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===ts&&Te===i.DEPTH_COMPONENT&&E.type!==hd&&E.type!==dr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=dr,He=s.convert(E.type)),E.format===ua&&Te===i.DEPTH_COMPONENT&&(Te=i.DEPTH_STENCIL,E.type!==es&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=es,He=s.convert(E.type))),st&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Te,J.width,J.height):t.texImage2D(i.TEXTURE_2D,0,Te,J.width,J.height,0,Ce,He,null));else if(E.isDataTexture)if(Ge.length>0&&rt){Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,Ge[0].width,Ge[0].height);for(let P=0,ne=Ge.length;P<ne;P++)_e=Ge[P],Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,_e.width,_e.height,Ce,He,_e.data):t.texImage2D(i.TEXTURE_2D,P,Te,_e.width,_e.height,0,Ce,He,_e.data);E.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,J.width,J.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J.width,J.height,Ce,He,J.data)):t.texImage2D(i.TEXTURE_2D,0,Te,J.width,J.height,0,Ce,He,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Te,Ge[0].width,Ge[0].height,J.depth);for(let P=0,ne=Ge.length;P<ne;P++)_e=Ge[P],E.format!==di?Ce!==null?Ke?de&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,_e.width,_e.height,J.depth,Ce,_e.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,P,Te,_e.width,_e.height,J.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,P,0,0,0,_e.width,_e.height,J.depth,Ce,He,_e.data):t.texImage3D(i.TEXTURE_2D_ARRAY,P,Te,_e.width,_e.height,J.depth,0,Ce,He,_e.data)}else{Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,Ge[0].width,Ge[0].height);for(let P=0,ne=Ge.length;P<ne;P++)_e=Ge[P],E.format!==di?Ce!==null?Ke?de&&t.compressedTexSubImage2D(i.TEXTURE_2D,P,0,0,_e.width,_e.height,Ce,_e.data):t.compressedTexImage2D(i.TEXTURE_2D,P,Te,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,_e.width,_e.height,Ce,He,_e.data):t.texImage2D(i.TEXTURE_2D,P,Te,_e.width,_e.height,0,Ce,He,_e.data)}else if(E.isDataArrayTexture)Ke?(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,Te,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ce,He,J.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,J.width,J.height,J.depth,0,Ce,He,J.data);else if(E.isData3DTexture)Ke?(st&&t.texStorage3D(i.TEXTURE_3D,tt,Te,J.width,J.height,J.depth),de&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ce,He,J.data)):t.texImage3D(i.TEXTURE_3D,0,Te,J.width,J.height,J.depth,0,Ce,He,J.data);else if(E.isFramebufferTexture){if(st)if(Ke)t.texStorage2D(i.TEXTURE_2D,tt,Te,J.width,J.height);else{let P=J.width,ne=J.height;for(let ie=0;ie<tt;ie++)t.texImage2D(i.TEXTURE_2D,ie,Te,P,ne,0,Ce,He,null),P>>=1,ne>>=1}}else if(Ge.length>0&&rt){Ke&&st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,Ge[0].width,Ge[0].height);for(let P=0,ne=Ge.length;P<ne;P++)_e=Ge[P],Ke?de&&t.texSubImage2D(i.TEXTURE_2D,P,0,0,Ce,He,_e):t.texImage2D(i.TEXTURE_2D,P,Te,Ce,He,_e);E.generateMipmaps=!1}else Ke?(st&&t.texStorage2D(i.TEXTURE_2D,tt,Te,J.width,J.height),de&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ce,He,J)):t.texImage2D(i.TEXTURE_2D,0,Te,Ce,He,J);y(E,rt)&&v(ee),fe.__version=te.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ce(b,E,F){if(E.image.length!==6)return;const ee=W(b,E),Q=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+F);const te=n.get(Q);if(Q.version!==te.__version||ee===!0){t.activeTexture(i.TEXTURE0+F);const fe=ht.getPrimaries(ht.workingColorSpace),oe=E.colorSpace===Qn?null:ht.getPrimaries(E.colorSpace),ae=E.colorSpace===Qn||fe===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const we=E.isCompressedTexture||E.image[0].isCompressedTexture,ze=E.image[0]&&E.image[0].isDataTexture,J=[];for(let P=0;P<6;P++)!we&&!ze?J[P]=_(E.image[P],!1,!0,r.maxCubemapSize):J[P]=ze?E.image[P].image:E.image[P],J[P]=Oe(E,J[P]);const rt=J[0],Ce=p(rt)||a,He=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),_e=S(E.internalFormat,He,Te,E.colorSpace),Ge=a&&E.isVideoTexture!==!0,Ke=te.__version===void 0||ee===!0,st=Q.dataReady;let de=R(E,rt,Ce);Ie(i.TEXTURE_CUBE_MAP,E,Ce);let tt;if(we){Ge&&Ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,de,_e,rt.width,rt.height);for(let P=0;P<6;P++){tt=J[P].mipmaps;for(let ne=0;ne<tt.length;ne++){const ie=tt[ne];E.format!==di?He!==null?Ge?st&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,ie.width,ie.height,He,ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,_e,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ge?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,0,0,ie.width,ie.height,He,Te,ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne,_e,ie.width,ie.height,0,He,Te,ie.data)}}}else{tt=E.mipmaps,Ge&&Ke&&(tt.length>0&&de++,t.texStorage2D(i.TEXTURE_CUBE_MAP,de,_e,J[0].width,J[0].height));for(let P=0;P<6;P++)if(ze){Ge?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,J[P].width,J[P].height,He,Te,J[P].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,_e,J[P].width,J[P].height,0,He,Te,J[P].data);for(let ne=0;ne<tt.length;ne++){const ve=tt[ne].image[P].image;Ge?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,ve.width,ve.height,He,Te,ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,_e,ve.width,ve.height,0,He,Te,ve.data)}}else{Ge?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,0,0,He,Te,J[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,0,_e,He,Te,J[P]);for(let ne=0;ne<tt.length;ne++){const ie=tt[ne];Ge?st&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,0,0,He,Te,ie.image[P]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+P,ne+1,_e,He,Te,ie.image[P])}}}y(E,Ce)&&v(i.TEXTURE_CUBE_MAP),te.__version=Q.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function me(b,E,F,ee,Q,te){const fe=s.convert(F.format,F.colorSpace),oe=s.convert(F.type),ae=S(F.internalFormat,fe,oe,F.colorSpace);if(!n.get(E).__hasExternalTextures){const ze=Math.max(1,E.width>>te),J=Math.max(1,E.height>>te);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,te,ae,ze,J,E.depth,0,fe,oe,null):t.texImage2D(Q,te,ae,ze,J,0,fe,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,Q,n.get(F).__webglTexture,0,Re(E)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,Q,n.get(F).__webglTexture,te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ye(b,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let ee=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(F||ge(E)){const Q=E.depthTexture;Q&&Q.isDepthTexture&&(Q.type===Vi?ee=i.DEPTH_COMPONENT32F:Q.type===dr&&(ee=i.DEPTH_COMPONENT24));const te=Re(E);ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,ee,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,te,ee,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,ee,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const ee=Re(E);F&&ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let Q=0;Q<ee.length;Q++){const te=ee[Q],fe=s.convert(te.format,te.colorSpace),oe=s.convert(te.type),ae=S(te.internalFormat,fe,oe,te.colorSpace),we=Re(E);F&&ge(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ae,E.width,E.height):ge(E)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ae,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ae,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),B(E.depthTexture,0);const ee=n.get(E.depthTexture).__webglTexture,Q=Re(E);if(E.depthTexture.format===ts)ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ee,0);else if(E.depthTexture.format===ua)ge(E)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function qe(b){const E=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");he(E.__webglFramebuffer,b)}else if(F){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=i.createRenderbuffer(),ye(E.__webglDepthbuffer[ee],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),ye(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Le(b,E,F){const ee=n.get(b);E!==void 0&&me(ee.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&qe(b)}function N(b){const E=b.texture,F=n.get(b),ee=n.get(E);b.addEventListener("dispose",D),b.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=E.version,o.memory.textures++);const Q=b.isWebGLCubeRenderTarget===!0,te=b.isWebGLMultipleRenderTargets===!0,fe=p(b)||a;if(Q){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let ae=0;ae<E.mipmaps.length;ae++)F.__webglFramebuffer[oe][ae]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<E.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(te)if(r.drawBuffers){const oe=b.texture;for(let ae=0,we=oe.length;ae<we;ae++){const ze=n.get(oe[ae]);ze.__webglTexture===void 0&&(ze.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&ge(b)===!1){const oe=te?E:[E];F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<oe.length;ae++){const we=oe[ae];F.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const ze=s.convert(we.format,we.colorSpace),J=s.convert(we.type),rt=S(we.internalFormat,ze,J,we.colorSpace,b.isXRRenderTarget===!0),Ce=Re(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,rt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ye(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Q){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,E,fe);for(let oe=0;oe<6;oe++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)me(F.__webglFramebuffer[oe][ae],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else me(F.__webglFramebuffer[oe],b,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);y(E,fe)&&v(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(te){const oe=b.texture;for(let ae=0,we=oe.length;ae<we;ae++){const ze=oe[ae],J=n.get(ze);t.bindTexture(i.TEXTURE_2D,J.__webglTexture),Ie(i.TEXTURE_2D,ze,fe),me(F.__webglFramebuffer,b,ze,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,0),y(ze,fe)&&v(i.TEXTURE_2D)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?oe=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ee.__webglTexture),Ie(oe,E,fe),a&&E.mipmaps&&E.mipmaps.length>0)for(let ae=0;ae<E.mipmaps.length;ae++)me(F.__webglFramebuffer[ae],b,E,i.COLOR_ATTACHMENT0,oe,ae);else me(F.__webglFramebuffer,b,E,i.COLOR_ATTACHMENT0,oe,0);y(E,fe)&&v(oe),t.unbindTexture()}b.depthBuffer&&qe(b)}function ke(b){const E=p(b)||a,F=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ee=0,Q=F.length;ee<Q;ee++){const te=F[ee];if(y(te,E)){const fe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,oe=n.get(te).__webglTexture;t.bindTexture(fe,oe),v(fe),t.unbindTexture()}}}function pe(b){if(a&&b.samples>0&&ge(b)===!1){const E=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],F=b.width,ee=b.height;let Q=i.COLOR_BUFFER_BIT;const te=[],fe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=n.get(b),ae=b.isWebGLMultipleRenderTargets===!0;if(ae)for(let we=0;we<E.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let we=0;we<E.length;we++){te.push(i.COLOR_ATTACHMENT0+we),b.depthBuffer&&te.push(fe);const ze=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(ze===!1&&(b.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),ae&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,oe.__webglColorRenderbuffer[we]),ze===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[fe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[fe])),ae){const J=n.get(E[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,J,0)}i.blitFramebuffer(0,0,F,ee,0,0,F,ee,Q,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let we=0;we<E.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,oe.__webglColorRenderbuffer[we]);const ze=n.get(E[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Re(b){return Math.min(r.maxSamples,b.samples)}function ge(b){const E=n.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function G(b){const E=o.render.frame;u.get(b)!==E&&(u.set(b,E),b.update())}function Oe(b,E){const F=b.colorSpace,ee=b.format,Q=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Zf||F!==Ki&&F!==Qn&&(ht.getTransfer(F)===xt?a===!1?e.has("EXT_sRGB")===!0&&ee===di?(b.format=Zf,b.minFilter=Nt,b.generateMipmaps=!1):E=hx.sRGBToLinear(E):(ee!==di||Q!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}this.allocateTextureUnit=L,this.resetTextureUnits=j,this.setTexture2D=B,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Le,this.setupRenderTarget=N,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=pe,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function aU(i,e,t){const n=t.isWebGL2;function r(s,o=Qn){let a;const l=ht.getTransfer(o);if(s===xr)return i.UNSIGNED_BYTE;if(s===ix)return i.UNSIGNED_SHORT_4_4_4_4;if(s===rx)return i.UNSIGNED_SHORT_5_5_5_1;if(s===kP)return i.BYTE;if(s===HP)return i.SHORT;if(s===hd)return i.UNSIGNED_SHORT;if(s===nx)return i.INT;if(s===dr)return i.UNSIGNED_INT;if(s===Vi)return i.FLOAT;if(s===mo)return n?i.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===GP)return i.ALPHA;if(s===di)return i.RGBA;if(s===VP)return i.LUMINANCE;if(s===WP)return i.LUMINANCE_ALPHA;if(s===ts)return i.DEPTH_COMPONENT;if(s===ua)return i.DEPTH_STENCIL;if(s===Zf)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===$P)return i.RED;if(s===sx)return i.RED_INTEGER;if(s===XP)return i.RG;if(s===ax)return i.RG_INTEGER;if(s===ox)return i.RGBA_INTEGER;if(s===Pu||s===Lu||s===Du||s===Iu)if(l===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Pu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Iu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Pu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Lu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Du)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Iu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Om||s===Um||s===Nm||s===Fm)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Om)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Um)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Nm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Fm)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===lx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bm||s===zm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Bm)return l===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===zm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===km||s===Hm||s===Gm||s===Vm||s===Wm||s===$m||s===Xm||s===qm||s===Ym||s===jm||s===Km||s===Zm||s===Jm||s===Qm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===km)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Hm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Gm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Vm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Wm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$m)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Xm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===qm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ym)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===jm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Km)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Zm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Jm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qm)return l===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ou||s===e_||s===t_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Ou)return l===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===e_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===t_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===qP||s===n_||s===i_||s===r_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ou)return a.COMPRESSED_RED_RGTC1_EXT;if(s===n_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===i_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===r_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===es?n?i.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class oU extends Jn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Cl extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lU={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lU)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Cl;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uU=`
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

}`;class fU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,r=new Zi({extensions:{fragDepth:!0},vertexShader:cU,fragmentShader:uU,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wi(new Co(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class hU extends xa{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new fU,p=t.getContextAttributes();let m=null,y=null;const v=[],S=[],R=new ot;let w=null;const T=new Jn;T.layers.enable(1),T.viewport=new Yt;const D=new Jn;D.layers.enable(2),D.viewport=new Yt;const O=[T,D],x=new oU;x.layers.enable(1),x.layers.enable(2);let A=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Z=v[W];return Z===void 0&&(Z=new af,v[W]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(W){let Z=v[W];return Z===void 0&&(Z=new af,v[W]=Z),Z.getGripSpace()},this.getHand=function(W){let Z=v[W];return Z===void 0&&(Z=new af,v[W]=Z),Z.getHandSpace()};function j(W){const Z=S.indexOf(W.inputSource);if(Z===-1)return;const ce=v[Z];ce!==void 0&&(ce.update(W.inputSource,W.frame,c||o),ce.dispatchEvent({type:W.type,data:W.inputSource}))}function L(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",z);for(let W=0;W<v.length;W++){const Z=S[W];Z!==null&&(S[W]=null,v[W].disconnect(Z))}A=null,U=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,r=null,y=null,Ie.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",L),r.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,Z),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new fs(d.framebufferWidth,d.framebufferHeight,{format:di,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Z=null,ce=null,me=null;p.depth&&(me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Z=p.stencil?ua:ts,ce=p.stencil?es:dr);const ye={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(ye),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new fs(h.textureWidth,h.textureHeight,{format:di,type:xr,depthTexture:new bx(h.textureWidth,h.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const he=e.properties.get(y);he.__ignoreDepthValues=h.ignoreDepthValues}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function z(W){for(let Z=0;Z<W.removed.length;Z++){const ce=W.removed[Z],me=S.indexOf(ce);me>=0&&(S[me]=null,v[me].disconnect(ce))}for(let Z=0;Z<W.added.length;Z++){const ce=W.added[Z];let me=S.indexOf(ce);if(me===-1){for(let he=0;he<v.length;he++)if(he>=S.length){S.push(ce),me=he;break}else if(S[he]===null){S[he]=ce,me=he;break}if(me===-1)break}const ye=v[me];ye&&ye.connect(ce)}}const B=new q,$=new q;function X(W,Z,ce){B.setFromMatrixPosition(Z.matrixWorld),$.setFromMatrixPosition(ce.matrixWorld);const me=B.distanceTo($),ye=Z.projectionMatrix.elements,he=ce.projectionMatrix.elements,qe=ye[14]/(ye[10]-1),Le=ye[14]/(ye[10]+1),N=(ye[9]+1)/ye[5],ke=(ye[9]-1)/ye[5],pe=(ye[8]-1)/ye[0],Re=(he[8]+1)/he[0],ge=qe*pe,G=qe*Re,Oe=me/(-pe+Re),b=Oe*-pe;Z.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(b),W.translateZ(Oe),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const E=qe+Oe,F=Le+Oe,ee=ge-b,Q=G+(me-b),te=N*Le/F*E,fe=ke*Le/F*E;W.projectionMatrix.makePerspective(ee,Q,te,fe,E,F),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function Y(W,Z){Z===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Z.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),x.near=D.near=T.near=W.near,x.far=D.far=T.far=W.far,(A!==x.near||U!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,U=x.far,T.near=A,T.far=U,D.near=A,D.far=U,T.updateProjectionMatrix(),D.updateProjectionMatrix(),W.updateProjectionMatrix());const Z=W.parent,ce=x.cameras;Y(x,Z);for(let me=0;me<ce.length;me++)Y(ce[me],Z);ce.length===2?X(x,T,D):x.projectionMatrix.copy(T.projectionMatrix),C(W,x,Z)};function C(W,Z,ce){ce===null?W.matrix.copy(Z.matrixWorld):(W.matrix.copy(ce.matrixWorld),W.matrix.invert(),W.matrix.multiply(Z.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Z.projectionMatrix),W.projectionMatrixInverse.copy(Z.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Jf*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let K=null;function ue(W,Z){if(u=Z.getViewerPose(c||o),g=Z,u!==null){const ce=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let me=!1;ce.length!==x.cameras.length&&(x.cameras.length=0,me=!0);for(let he=0;he<ce.length;he++){const qe=ce[he];let Le=null;if(d!==null)Le=d.getViewport(qe);else{const ke=f.getViewSubImage(h,qe);Le=ke.viewport,he===0&&(e.setRenderTargetTextures(y,ke.colorTexture,h.ignoreDepthValues?void 0:ke.depthStencilTexture),e.setRenderTarget(y))}let N=O[he];N===void 0&&(N=new Jn,N.layers.enable(he),N.viewport=new Yt,O[he]=N),N.matrix.fromArray(qe.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(qe.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(Le.x,Le.y,Le.width,Le.height),he===0&&(x.matrix.copy(N.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),me===!0&&x.cameras.push(N)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const he=f.getDepthInformation(ce[0]);he&&he.isValid&&he.texture&&_.init(e,he,r.renderState)}}for(let ce=0;ce<v.length;ce++){const me=S[ce],ye=v[ce];me!==null&&ye!==void 0&&ye.update(me,Z,c||o)}_.render(e,x),K&&K(W,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}const Ie=new Tx;Ie.setAnimationLoop(ue),this.setAnimationLoop=function(W){K=W},this.dispose=function(){}}}function dU(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,yx(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,y,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,y,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=e.get(m).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const v=i._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*v,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=v*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Cn&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const y=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function pU(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,v){const S=v.program;n.uniformBlockBinding(y,S)}function c(y,v){let S=r[y.id];S===void 0&&(g(y),S=u(y),r[y.id]=S,y.addEventListener("dispose",p));const R=v.program;n.updateUBOMapping(y,R);const w=e.render.frame;s[y.id]!==w&&(h(y),s[y.id]=w)}function u(y){const v=f();y.__bindingPointIndex=v;const S=i.createBuffer(),R=y.__size,w=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const v=r[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const D=Array.isArray(S[w])?S[w]:[S[w]];for(let O=0,x=D.length;O<x;O++){const A=D[O];if(d(A,w,O,R)===!0){const U=A.__offset,j=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let z=0;z<j.length;z++){const B=j[z],$=_(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,U+L,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,L),L+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,A.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,v,S,R){const w=y.value,T=v+"_"+S;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const D=R[T];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[T]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function g(y){const v=y.uniforms;let S=0;const R=16;for(let T=0,D=v.length;T<D;T++){const O=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,A=O.length;x<A;x++){const U=O[x],j=Array.isArray(U.value)?U.value:[U.value];for(let L=0,z=j.length;L<z;L++){const B=j[L],$=_(B),X=S%R;X!==0&&R-X<$.boundary&&(S+=R-X),U.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=$.storage}}}const w=S%R;return w>0&&(S+=R-w),y.__size=S,y.__cache={},this}function _(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function p(y){const v=y.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:m}}class Lx{constructor(e={}){const{canvas:t=aL(),context:n=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=o;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=vr,this.toneMappingExposure=1;const v=this;let S=!1,R=0,w=0,T=null,D=-1,O=null;const x=new Yt,A=new Yt;let U=null;const j=new dt(0);let L=0,z=t.width,B=t.height,$=1,X=null,Y=null;const C=new Yt(0,0,z,B),K=new Yt(0,0,z,B);let ue=!1;const Ie=new Mx;let W=!1,Z=!1,ce=null;const me=new Jt,ye=new ot,he=new q,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return T===null?$:1}let N=n;function ke(M,I){for(let V=0;V<M.length;V++){const H=M[V],k=t.getContext(H,I);if(k!==null)return k}return null}try{const M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fd}`),t.addEventListener("webglcontextlost",tt,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ne,!1),N===null){const I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),N=ke(I,M),N===null)throw ke(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let pe,Re,ge,G,Oe,b,E,F,ee,Q,te,fe,oe,ae,we,ze,J,rt,Ce,He,Te,_e,Ge,Ke;function st(){pe=new SI(N),Re=new pI(N,pe,e),pe.init(Re),_e=new aU(N,pe,Re),ge=new rU(N,pe,Re),G=new TI(N),Oe=new WO,b=new sU(N,pe,ge,Oe,Re,_e,G),E=new _I(v),F=new yI(v),ee=new LL(N,Re),Ge=new hI(N,pe,ee,Re),Q=new EI(N,ee,G,Ge),te=new RI(N,Q,ee,G),Ce=new AI(N,Re,b),ze=new mI(Oe),fe=new VO(v,E,F,pe,Re,Ge,ze),oe=new dU(v,Oe),ae=new XO,we=new JO(pe,Re),rt=new fI(v,E,F,ge,te,h,l),J=new iU(v,te,Re),Ke=new pU(N,G,Re,ge),He=new dI(N,pe,G,Re),Te=new MI(N,pe,G,Re),G.programs=fe.programs,v.capabilities=Re,v.extensions=pe,v.properties=Oe,v.renderLists=ae,v.shadowMap=J,v.state=ge,v.info=G}st();const de=new hU(v,N);this.xr=de,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const M=pe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=pe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(z,B,!1))},this.getSize=function(M){return M.set(z,B)},this.setSize=function(M,I,V=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=M,B=I,t.width=Math.floor(M*$),t.height=Math.floor(I*$),V===!0&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(z*$,B*$).floor()},this.setDrawingBufferSize=function(M,I,V){z=M,B=I,$=V,t.width=Math.floor(M*V),t.height=Math.floor(I*V),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(x)},this.getViewport=function(M){return M.copy(C)},this.setViewport=function(M,I,V,H){M.isVector4?C.set(M.x,M.y,M.z,M.w):C.set(M,I,V,H),ge.viewport(x.copy(C).multiplyScalar($).floor())},this.getScissor=function(M){return M.copy(K)},this.setScissor=function(M,I,V,H){M.isVector4?K.set(M.x,M.y,M.z,M.w):K.set(M,I,V,H),ge.scissor(A.copy(K).multiplyScalar($).floor())},this.getScissorTest=function(){return ue},this.setScissorTest=function(M){ge.setScissorTest(ue=M)},this.setOpaqueSort=function(M){X=M},this.setTransparentSort=function(M){Y=M},this.getClearColor=function(M){return M.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor.apply(rt,arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha.apply(rt,arguments)},this.clear=function(M=!0,I=!0,V=!0){let H=0;if(M){let k=!1;if(T!==null){const se=T.texture.format;k=se===ox||se===ax||se===sx}if(k){const se=T.texture.type,Se=se===xr||se===dr||se===hd||se===es||se===ix||se===rx,Fe=rt.getClearColor(),Me=rt.getClearAlpha(),Ae=Fe.r,Be=Fe.g,We=Fe.b;Se?(d[0]=Ae,d[1]=Be,d[2]=We,d[3]=Me,N.clearBufferuiv(N.COLOR,0,d)):(g[0]=Ae,g[1]=Be,g[2]=We,g[3]=Me,N.clearBufferiv(N.COLOR,0,g))}else H|=N.COLOR_BUFFER_BIT}I&&(H|=N.DEPTH_BUFFER_BIT),V&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",tt,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),ae.dispose(),we.dispose(),Oe.dispose(),E.dispose(),F.dispose(),te.dispose(),Ge.dispose(),Ke.dispose(),fe.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ee),de.removeEventListener("sessionend",Pe),ce&&(ce.dispose(),ce=null),re.stop()};function tt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const M=G.autoReset,I=J.enabled,V=J.autoUpdate,H=J.needsUpdate,k=J.type;st(),G.autoReset=M,J.enabled=I,J.autoUpdate=V,J.needsUpdate=H,J.type=k}function ne(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ie(M){const I=M.target;I.removeEventListener("dispose",ie),ve(I)}function ve(M){De(M),Oe.remove(M)}function De(M){const I=Oe.get(M).programs;I!==void 0&&(I.forEach(function(V){fe.releaseProgram(V)}),M.isShaderMaterial&&fe.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,V,H,k,se){I===null&&(I=qe);const Se=k.isMesh&&k.matrixWorld.determinant()<0,Fe=_t(M,I,V,H,k);ge.setMaterial(H,Se);let Me=V.index,Ae=1;if(H.wireframe===!0){if(Me=Q.getWireframeAttribute(V),Me===void 0)return;Ae=2}const Be=V.drawRange,We=V.attributes.position;let St=Be.start*Ae,zt=(Be.start+Be.count)*Ae;se!==null&&(St=Math.max(St,se.start*Ae),zt=Math.min(zt,(se.start+se.count)*Ae)),Me!==null?(St=Math.max(St,0),zt=Math.min(zt,Me.count)):We!=null&&(St=Math.max(St,0),zt=Math.min(zt,We.count));const ut=zt-St;if(ut<0||ut===1/0)return;Ge.setup(k,H,Fe,V,Me);let fn,ft=He;if(Me!==null&&(fn=ee.get(Me),ft=Te,ft.setIndex(fn)),k.isMesh)H.wireframe===!0?(ge.setLineWidth(H.wireframeLinewidth*Le()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(k.isLine){let $e=H.linewidth;$e===void 0&&($e=1),ge.setLineWidth($e*Le()),k.isLineSegments?ft.setMode(N.LINES):k.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else k.isPoints?ft.setMode(N.POINTS):k.isSprite&&ft.setMode(N.TRIANGLES);if(k.isBatchedMesh)ft.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)ft.renderInstances(St,ut,k.count);else if(V.isInstancedBufferGeometry){const $e=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nc=Math.min(V.instanceCount,$e);ft.renderInstances(St,ut,Nc)}else ft.render(St,ut)};function je(M,I,V){M.transparent===!0&&M.side===Gi&&M.forceSinglePass===!1?(M.side=Cn,M.needsUpdate=!0,mt(M,I,V),M.side=Tr,M.needsUpdate=!0,mt(M,I,V),M.side=Gi):mt(M,I,V)}this.compile=function(M,I,V=null){V===null&&(V=M),p=we.get(V),p.init(),y.push(p),V.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),M!==V&&M.traverseVisible(function(k){k.isLight&&k.layers.test(I.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights(v._useLegacyLights);const H=new Set;return M.traverse(function(k){const se=k.material;if(se)if(Array.isArray(se))for(let Se=0;Se<se.length;Se++){const Fe=se[Se];je(Fe,V,k),H.add(Fe)}else je(se,V,k),H.add(se)}),y.pop(),p=null,H},this.compileAsync=function(M,I,V=null){const H=this.compile(M,I,V);return new Promise(k=>{function se(){if(H.forEach(function(Se){Oe.get(Se).currentProgram.isReady()&&H.delete(Se)}),H.size===0){k(M);return}setTimeout(se,10)}pe.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let at=null;function be(M){at&&at(M)}function Ee(){re.stop()}function Pe(){re.start()}const re=new Tx;re.setAnimationLoop(be),typeof self<"u"&&re.setContext(self),this.setAnimationLoop=function(M){at=M,de.setAnimationLoop(M),M===null?re.stop():re.start()},de.addEventListener("sessionstart",Ee),de.addEventListener("sessionend",Pe),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(I),I=de.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,I,T),p=we.get(M,y.length),p.init(),y.push(p),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ie.setFromProjectionMatrix(me),Z=this.localClippingEnabled,W=ze.init(this.clippingPlanes,Z),_=ae.get(M,m.length),_.init(),m.push(_),Ne(M,I,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(X,Y),this.info.render.frame++,W===!0&&ze.beginShadows();const V=p.state.shadowsArray;if(J.render(V,M,I),W===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset(),(de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1)&&rt.render(_,M),p.setupLights(v._useLegacyLights),I.isArrayCamera){const H=I.cameras;for(let k=0,se=H.length;k<se;k++){const Se=H[k];Ue(_,M,Se,Se.viewport)}}else Ue(_,M,I);T!==null&&(b.updateMultisampleRenderTarget(T),b.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(v,M,I),Ge.resetDefaultState(),D=-1,O=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Ne(M,I,V,H){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)V=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ie.intersectsSprite(M)){H&&he.setFromMatrixPosition(M.matrixWorld).applyMatrix4(me);const Se=te.update(M),Fe=M.material;Fe.visible&&_.push(M,Se,Fe,V,he.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ie.intersectsObject(M))){const Se=te.update(M),Fe=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),he.copy(M.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),he.copy(Se.boundingSphere.center)),he.applyMatrix4(M.matrixWorld).applyMatrix4(me)),Array.isArray(Fe)){const Me=Se.groups;for(let Ae=0,Be=Me.length;Ae<Be;Ae++){const We=Me[Ae],St=Fe[We.materialIndex];St&&St.visible&&_.push(M,Se,St,V,he.z,We)}}else Fe.visible&&_.push(M,Se,Fe,V,he.z,null)}}const se=M.children;for(let Se=0,Fe=se.length;Se<Fe;Se++)Ne(se[Se],I,V,H)}function Ue(M,I,V,H){const k=M.opaque,se=M.transmissive,Se=M.transparent;p.setupLightsView(V),W===!0&&ze.setGlobalState(v.clippingPlanes,V),se.length>0&&Ve(k,se,I,V),H&&ge.viewport(x.copy(H)),k.length>0&&Mt(k,I,V),se.length>0&&Mt(se,I,V),Se.length>0&&Mt(Se,I,V),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function Ve(M,I,V,H){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const se=Re.isWebGL2;ce===null&&(ce=new fs(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?mo:xr,minFilter:Wr,samples:se?4:0})),v.getDrawingBufferSize(ye),se?ce.setSize(ye.x,ye.y):ce.setSize(Qf(ye.x),Qf(ye.y));const Se=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(j),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Fe=v.toneMapping;v.toneMapping=vr,Mt(M,V,H),b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce);let Me=!1;for(let Ae=0,Be=I.length;Ae<Be;Ae++){const We=I[Ae],St=We.object,zt=We.geometry,ut=We.material,fn=We.group;if(ut.side===Gi&&St.layers.test(H.layers)){const ft=ut.side;ut.side=Cn,ut.needsUpdate=!0,Ze(St,V,H,zt,ut,fn),ut.side=ft,ut.needsUpdate=!0,Me=!0}}Me===!0&&(b.updateMultisampleRenderTarget(ce),b.updateRenderTargetMipmap(ce)),v.setRenderTarget(Se),v.setClearColor(j,L),v.toneMapping=Fe}function Mt(M,I,V){const H=I.isScene===!0?I.overrideMaterial:null;for(let k=0,se=M.length;k<se;k++){const Se=M[k],Fe=Se.object,Me=Se.geometry,Ae=H===null?Se.material:H,Be=Se.group;Fe.layers.test(V.layers)&&Ze(Fe,I,V,Me,Ae,Be)}}function Ze(M,I,V,H,k,se){M.onBeforeRender(v,I,V,H,k,se),M.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),k.onBeforeRender(v,I,V,H,M,se),k.transparent===!0&&k.side===Gi&&k.forceSinglePass===!1?(k.side=Cn,k.needsUpdate=!0,v.renderBufferDirect(V,I,H,k,M,se),k.side=Tr,k.needsUpdate=!0,v.renderBufferDirect(V,I,H,k,M,se),k.side=Gi):v.renderBufferDirect(V,I,H,k,M,se),M.onAfterRender(v,I,V,H,k,se)}function mt(M,I,V){I.isScene!==!0&&(I=qe);const H=Oe.get(M),k=p.state.lights,se=p.state.shadowsArray,Se=k.state.version,Fe=fe.getParameters(M,k.state,se,I,V),Me=fe.getProgramCacheKey(Fe);let Ae=H.programs;H.environment=M.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(M.isMeshStandardMaterial?F:E).get(M.envMap||H.environment),Ae===void 0&&(M.addEventListener("dispose",ie),Ae=new Map,H.programs=Ae);let Be=Ae.get(Me);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===Se)return vt(M,Fe),Be}else Fe.uniforms=fe.getUniforms(M),M.onBuild(V,Fe,v),M.onBeforeCompile(Fe,v),Be=fe.acquireProgram(Fe,Me),Ae.set(Me,Be),H.uniforms=Fe.uniforms;const We=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(We.clippingPlanes=ze.uniform),vt(M,Fe),H.needsLights=Dn(M),H.lightsStateVersion=Se,H.needsLights&&(We.ambientLightColor.value=k.state.ambient,We.lightProbe.value=k.state.probe,We.directionalLights.value=k.state.directional,We.directionalLightShadows.value=k.state.directionalShadow,We.spotLights.value=k.state.spot,We.spotLightShadows.value=k.state.spotShadow,We.rectAreaLights.value=k.state.rectArea,We.ltc_1.value=k.state.rectAreaLTC1,We.ltc_2.value=k.state.rectAreaLTC2,We.pointLights.value=k.state.point,We.pointLightShadows.value=k.state.pointShadow,We.hemisphereLights.value=k.state.hemi,We.directionalShadowMap.value=k.state.directionalShadowMap,We.directionalShadowMatrix.value=k.state.directionalShadowMatrix,We.spotShadowMap.value=k.state.spotShadowMap,We.spotLightMatrix.value=k.state.spotLightMatrix,We.spotLightMap.value=k.state.spotLightMap,We.pointShadowMap.value=k.state.pointShadowMap,We.pointShadowMatrix.value=k.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function Bt(M){if(M.uniformsList===null){const I=M.currentProgram.getUniforms();M.uniformsList=Xl.seqWithValue(I.seq,M.uniforms)}return M.uniformsList}function vt(M,I){const V=Oe.get(M);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function _t(M,I,V,H,k){I.isScene!==!0&&(I=qe),b.resetTextureUnits();const se=I.fog,Se=H.isMeshStandardMaterial?I.environment:null,Fe=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ki,Me=(H.isMeshStandardMaterial?F:E).get(H.envMap||Se),Ae=H.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),We=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,zt=!!V.morphAttributes.color;let ut=vr;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ut=v.toneMapping);const fn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ft=fn!==void 0?fn.length:0,$e=Oe.get(H),Nc=p.state.lights;if(W===!0&&(Z===!0||M!==O)){const Xn=M===O&&H.id===D;ze.setState(H,M,Xn)}let At=!1;H.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Nc.state.version||$e.outputColorSpace!==Fe||k.isBatchedMesh&&$e.batching===!1||!k.isBatchedMesh&&$e.batching===!0||k.isInstancedMesh&&$e.instancing===!1||!k.isInstancedMesh&&$e.instancing===!0||k.isSkinnedMesh&&$e.skinning===!1||!k.isSkinnedMesh&&$e.skinning===!0||k.isInstancedMesh&&$e.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&$e.instancingColor===!1&&k.instanceColor!==null||$e.envMap!==Me||H.fog===!0&&$e.fog!==se||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==ze.numPlanes||$e.numIntersection!==ze.numIntersection)||$e.vertexAlphas!==Ae||$e.vertexTangents!==Be||$e.morphTargets!==We||$e.morphNormals!==St||$e.morphColors!==zt||$e.toneMapping!==ut||Re.isWebGL2===!0&&$e.morphTargetsCount!==ft)&&(At=!0):(At=!0,$e.__version=H.version);let wr=$e.currentProgram;At===!0&&(wr=mt(H,I,k));let yd=!1,Sa=!1,Fc=!1;const tn=wr.getUniforms(),Ar=$e.uniforms;if(ge.useProgram(wr.program)&&(yd=!0,Sa=!0,Fc=!0),H.id!==D&&(D=H.id,Sa=!0),yd||O!==M){tn.setValue(N,"projectionMatrix",M.projectionMatrix),tn.setValue(N,"viewMatrix",M.matrixWorldInverse);const Xn=tn.map.cameraPosition;Xn!==void 0&&Xn.setValue(N,he.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&tn.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&tn.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),O!==M&&(O=M,Sa=!0,Fc=!0)}if(k.isSkinnedMesh){tn.setOptional(N,k,"bindMatrix"),tn.setOptional(N,k,"bindMatrixInverse");const Xn=k.skeleton;Xn&&(Re.floatVertexTextures?(Xn.boneTexture===null&&Xn.computeBoneTexture(),tn.setValue(N,"boneTexture",Xn.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}k.isBatchedMesh&&(tn.setOptional(N,k,"batchingTexture"),tn.setValue(N,"batchingTexture",k._matricesTexture,b));const Bc=V.morphAttributes;if((Bc.position!==void 0||Bc.normal!==void 0||Bc.color!==void 0&&Re.isWebGL2===!0)&&Ce.update(k,V,wr),(Sa||$e.receiveShadow!==k.receiveShadow)&&($e.receiveShadow=k.receiveShadow,tn.setValue(N,"receiveShadow",k.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Ar.envMap.value=Me,Ar.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),Sa&&(tn.setValue(N,"toneMappingExposure",v.toneMappingExposure),$e.needsLights&&ct(Ar,Fc),se&&H.fog===!0&&oe.refreshFogUniforms(Ar,se),oe.refreshMaterialUniforms(Ar,H,$,B,ce),Xl.upload(N,Bt($e),Ar,b)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Xl.upload(N,Bt($e),Ar,b),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&tn.setValue(N,"center",k.center),tn.setValue(N,"modelViewMatrix",k.modelViewMatrix),tn.setValue(N,"normalMatrix",k.normalMatrix),tn.setValue(N,"modelMatrix",k.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Xn=H.uniformsGroups;for(let zc=0,ly=Xn.length;zc<ly;zc++)if(Re.isWebGL2){const Sd=Xn[zc];Ke.update(Sd,wr),Ke.bind(Sd,wr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return wr}function ct(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Dn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,I,V){Oe.get(M.texture).__webglTexture=I,Oe.get(M.depthTexture).__webglTexture=V;const H=Oe.get(M);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=V===void 0,H.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const V=Oe.get(M);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,V=0){T=M,R=I,w=V;let H=!0,k=null,se=!1,Se=!1;if(M){const Me=Oe.get(M);Me.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(N.FRAMEBUFFER,null),H=!1):Me.__webglFramebuffer===void 0?b.setupRenderTarget(M):Me.__hasExternalTextures&&b.rebindTextures(M,Oe.get(M.texture).__webglTexture,Oe.get(M.depthTexture).__webglTexture);const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);const Be=Oe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Be[I])?k=Be[I][V]:k=Be[I],se=!0):Re.isWebGL2&&M.samples>0&&b.useMultisampledRTT(M)===!1?k=Oe.get(M).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[V]:k=Be,x.copy(M.viewport),A.copy(M.scissor),U=M.scissorTest}else x.copy(C).multiplyScalar($).floor(),A.copy(K).multiplyScalar($).floor(),U=ue;if(ge.bindFramebuffer(N.FRAMEBUFFER,k)&&Re.drawBuffers&&H&&ge.drawBuffers(M,k),ge.viewport(x),ge.scissor(A),ge.setScissorTest(U),se){const Me=Oe.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,V)}else if(Se){const Me=Oe.get(M.texture),Ae=I||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Me.__webglTexture,V||0,Ae)}D=-1},this.readRenderTargetPixels=function(M,I,V,H,k,se,Se){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Oe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Se!==void 0&&(Fe=Fe[Se]),Fe){ge.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const Me=M.texture,Ae=Me.format,Be=Me.type;if(Ae!==di&&_e.convert(Ae)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const We=Be===mo&&(pe.has("EXT_color_buffer_half_float")||Re.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Be!==xr&&_e.convert(Be)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Be===Vi&&(Re.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!We){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-H&&V>=0&&V<=M.height-k&&N.readPixels(I,V,H,k,_e.convert(Ae),_e.convert(Be),se)}finally{const Me=T!==null?Oe.get(T).__webglFramebuffer:null;ge.bindFramebuffer(N.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(M,I,V=0){const H=Math.pow(2,-V),k=Math.floor(I.image.width*H),se=Math.floor(I.image.height*H);b.setTexture2D(I,0),N.copyTexSubImage2D(N.TEXTURE_2D,V,0,0,M.x,M.y,k,se),ge.unbindTexture()},this.copyTextureToTexture=function(M,I,V,H=0){const k=I.image.width,se=I.image.height,Se=_e.convert(V.format),Fe=_e.convert(V.type);b.setTexture2D(V,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment),I.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,H,M.x,M.y,k,se,Se,Fe,I.image.data):I.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,H,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,Se,I.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,H,M.x,M.y,Se,Fe,I.image),H===0&&V.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(M,I,V,H,k=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const se=M.max.x-M.min.x+1,Se=M.max.y-M.min.y+1,Fe=M.max.z-M.min.z+1,Me=_e.convert(H.format),Ae=_e.convert(H.type);let Be;if(H.isData3DTexture)b.setTexture3D(H,0),Be=N.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)b.setTexture2DArray(H,0),Be=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,H.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,H.unpackAlignment);const We=N.getParameter(N.UNPACK_ROW_LENGTH),St=N.getParameter(N.UNPACK_IMAGE_HEIGHT),zt=N.getParameter(N.UNPACK_SKIP_PIXELS),ut=N.getParameter(N.UNPACK_SKIP_ROWS),fn=N.getParameter(N.UNPACK_SKIP_IMAGES),ft=V.isCompressedTexture?V.mipmaps[k]:V.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,ft.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ft.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),V.isDataTexture||V.isData3DTexture?N.texSubImage3D(Be,k,I.x,I.y,I.z,se,Se,Fe,Me,Ae,ft.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,k,I.x,I.y,I.z,se,Se,Fe,Me,ft.data)):N.texSubImage3D(Be,k,I.x,I.y,I.z,se,Se,Fe,Me,Ae,ft),N.pixelStorei(N.UNPACK_ROW_LENGTH,We),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,St),N.pixelStorei(N.UNPACK_SKIP_PIXELS,zt),N.pixelStorei(N.UNPACK_SKIP_ROWS,ut),N.pixelStorei(N.UNPACK_SKIP_IMAGES,fn),k===0&&H.generateMipmaps&&N.generateMipmap(Be),ge.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?b.setTextureCube(M,0):M.isData3DTexture?b.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?b.setTexture2DArray(M,0):b.setTexture2D(M,0),ge.unbindTexture()},this.resetState=function(){R=0,w=0,T=null,ge.reset(),Ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===dd?"display-p3":"srgb",t.unpackColorSpace=ht.workingColorSpace===Dc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?ns:cx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ns?Kt:Ki}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mU extends Lx{}mU.prototype.isWebGL1Renderer=!0;class _U extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gU extends un{constructor(e,t,n,r,s,o,a,l,c){super(e,t,n,r,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Nt,this.magFilter=s!==void 0?s:Nt,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}const j_={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class vU{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const xU=new vU;class gd{constructor(e){this.manager=e!==void 0?e:xU,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}gd.DEFAULT_MATERIAL_NAME="__DEFAULT";class yU extends gd{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=j_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=_o("img");function l(){u(),j_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class SU extends gd{constructor(e){super(e)}load(e,t,n,r){const s=new un,o=new yU(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class EU{constructor(e,t,n=0,r=1/0){this.ray=new mx(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new md,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return th(e,this,n,t),n.sort(K_),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)th(e[r],this,n,t);return n.sort(K_),n}}function K_(i,e){return i.distance-e.distance}function th(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)th(r[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fd);const nh=new ot;function MU(){document.querySelector("#global-container").addEventListener("pointermove",TU)}function TU(i){nh.x=bU(i.clientX),nh.y=wU(i.clientY)}function bU(i){return i/window.innerWidth*2-1}function wU(i){return-(i/window.innerHeight)*2+1}function AU(i,e,t){let n=(1-t)*i+t*e;return Math.abs(e-n)<.001&&(n=e),n}function RU(i,e){return Math.round(i/e*100)}const Ws=new Map,CU=new SU;window.textureCache=Ws;const ql={init:PU,loadAllAssets:LU,loadImg:Ix,getTexByElement:DU,addProgressAction:Nx,letsBegin:UU},$r={};function PU(){$r.globalContainer=document.getElementById("global-container"),$r.loader=document.getElementById("loader"),$r.loaderPercent=document.getElementById("Loader-percent"),Nx((i,e)=>{$r.loaderPercent.innerHTML=RU(i,e)+"%"})}async function LU(){const i=document.querySelectorAll("[data-webgl]");for(const t of i){const n=t.dataset;for(let r in n){if(!r.startsWith("tex"))continue;const s=n[r];Ws.has(s)||Ws.set(s,null)}}const e=[];Ws.forEach((t,n)=>{let r=null;r=(/\.(mp4|webm|mov)$/.test(n)?IU:Ix)(n).then(o=>{Ws.set(n,o)}).catch(()=>{console.error("Failed to load Media: ",n)}),e.push(r)}),await Promise.all(e)}async function DU(i){const e=new Map,t=i.dataset;let n=null,r=!0;for(let s in t){if(!s.startsWith("tex"))continue;const o=t[s],a=Ws.get(o);s=s.replace("-",""),e.set(s,a),r&&i instanceof HTMLImageElement&&(n=new Promise(l=>{i.onload=l}),i.src=o,r=!1),r&&i instanceof HTMLVideoElement&&(n=new Promise(l=>{i.oncanplay=l}),i.src=o,i.load(),r=!1)}return await n,e}let Dx=0,Z_=0,ih=null;async function Ix(i){Ox();const e=await CU.loadAsync(i);return Ux(),e.magFilter=Nt,e.minFilter=Nt,e.needsUpdate=!1,e}async function IU(i){const e=document.createElement("video");let t=i.split(".").pop();return t==="mov"&&(t="quicktime"),e.canPlayType(`video/${t}`)?(Ox(),new Promise(n=>{const r=document.createElement("video");r.oncanplay=()=>{const s=new gU(r);Ux(),s.magFilter=Nt,s.minFilter=Nt,r.play(),r.oncanplay=null,n(s)},r.src=i,r.autoplay=!0,r.loop=!0,r.muted=!0,r.playsinline=!0,r.defaultMuted=!0})):null}function Ox(){Dx++}function Ux(){Z_++,ih&&ih(Z_,Dx)}function Nx(i){ih=i}function OU(){const i=bh.timeline();return i.to($r.loader.firstElementChild,{opacity:0,y:10,duration:.3,delay:.5}).set($r.globalContainer,{visibility:"visible"}).set($r.loader,{display:"none"}),i}function UU(){OU()}const NU="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",FU="varying vec2 vUv;uniform vec2 uMouse;uniform float uHover;uniform vec4 uResolution;uniform sampler2D tex1;uniform sampler2D tex2;vec2 coverUv(vec2 uv,vec4 resolution){return(uv-0.5)*resolution.zw+0.5;}void main(){vec2 uv=coverUv(vUv,uResolution);vec4 t1=texture2D(tex1,uv);vec4 t2=texture2D(tex2,uv);vec4 mixColor=mix(t1,t2,step(.5,uv.y));gl_FragColor=mixColor;}",lt={os:[],raycaster:new EU,worldInit:Fx,adjustWorldPosition:Bx,render:kx};function Fx(i,e){return lt.renderer=new Lx({canvas:i,antialias:!0}),lt.renderer.setSize(e.width,e.height,!1),lt.renderer.setPixelRatio(e.devicePixelRatio),lt.renderer.setClearColor(0,0),lt.scene=new _U,lt.camera=zU(e),BU(e),lt}async function BU(i){const t=[...document.querySelectorAll("[data-webgl]")].map(async n=>{const r=n.getBoundingClientRect(),s=await ql.getTexByElement(n),o=new Co(r.width,r.height,1,1),a=new Zi({vertexShader:NU,fragmentShader:FU,uniforms:{uMouse:{value:new ot(.5,.5)},uHover:{value:0}}});function l(h){if(!s.get("tex1"))return h;const d=s.get("tex1").source.data,g={};d instanceof HTMLImageElement?(g.width=d.naturalWidth,g.height=d.naturalHeight):d instanceof HTMLVideoElement&&(g.width=d.videoWidth,g.height=d.videoHeight);const _=c(r,g);return h.uResolution={value:_},h}function c(h,d){const{width:g,height:_}=h,p=new Yt(g,_,1,1);if(!d)return p;const{width:m,height:y}=d,v=y/m,S=_/g;let R,w;return S>v?(R=1/S*v,w=1):(R=1,w=S/v),p.z=R,p.w=w,p}a.uniforms=l(a.uniforms),s.forEach((h,d)=>{a.uniforms[d]={value:h}});const u=new wi(o,a);u.position.z=0;const f={geometry:o,material:a,mesh:u,rect:r,$:{el:n}};return lt.scene.add(u),lt.os.push(f),f});await Promise.all(t),Bx(i)}function Bx(i){lt.renderer.setSize(i.width,i.height,!1),lt.os.forEach(e=>HU(e,i)),GU(i)}function zU(i){const{fov:e,aspect:t,near:n,far:r,cameraZ:s}=i,o=new Jn(e,t,n,r);return o.position.z=s,o}function kU(i){const{mesh:e,$:{el:t}}=i,n=t.getBoundingClientRect(),{y:r}=zx(n,Rt.rect);e.position.y=r}function HU(i,e){const{$:{el:t},mesh:n,geometry:r,rect:s}=i,o=t.getBoundingClientRect(),{x:a,y:l}=zx(o,e);n.position.x=a,n.position.y=l,r.scale(o.width/s.width,o.height/s.height,1),i.rect=o}function GU(i){const{aspect:e,radian:t,fov:n}=i;lt.camera.aspect=e,lt.camera.radian=t,lt.camera.fov=n,lt.camera.updateProjectionMatrix(),lt.renderer.render(lt.scene,lt.camera)}function zx(i,e){const t=i.left+i.width/2-e.width/2,n=-i.top-i.height/2+e.height/2;return{x:t,y:n}}function VU(){lt.raycaster.setFromCamera(nh,lt.camera);const e=lt.raycaster.intersectObjects(lt.scene.children)[0];for(let t=0;t<lt.scene.children.length;t++){const n=lt.scene.children[t],r=n.material.uniforms.uHover;(e==null?void 0:e.object)===n?(n.material.uniforms.uMouse.value=e.uv,r.__endValue=1):r.__endValue=0,r.value=AU(r.value,r.__endValue,.1)}}function kx(){requestAnimationFrame(kx),lt.os.forEach(i=>kU(i)),VU(),lt.renderer.render(lt.scene,lt.camera)}const Rt={init:WU},Hx={};let J_=!1;function WU(i){Hx.canvas=i;const e=i.getBoundingClientRect();return Rt.rect=e,Rt.width=e.width,Rt.height=e.height,Rt.near=1500,Rt.far=4e3,Rt.aspect=Rt.width/Rt.height,Rt.cameraZ=2500,Rt.radian=2*Math.atan(Rt.height/2/Rt.cameraZ),Rt.fov=180*Rt.radian/Math.PI,Rt.devicePixelRatio=window.devicePixelRatio,J_||(J_=!0,$U()),Rt}function $U(){let i;window.addEventListener("resize",()=>{clearTimeout(i),i=setTimeout(()=>{XU()},100)})}function XU(){qU(),lt.adjustWorldPosition(Rt)}function qU(){const{near:i,far:e,cameraZ:t}=Rt;Rt.init(Hx.canvas,i,e,t)}const Gx=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 17 20">
<path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
</svg>`,Vx=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 19 23">
<path d="M0 22.985V5.995L2 6v.03l17-.014v16.968H0zm17-15H2v13h15v-13zm-5-2.882c0-2.04-.493-3.203-2.5-3.203-2 0-2.5 1.164-2.5 3.203v.912H5V4.647C5 1.19 7.274 0 9.5 0 11.517 0 14 1.354 14 4.647v1.368h-2v-.912z" fill="currentColor"></path>
</svg>`,YU=`<svg  xmlns="http://www.w3.org/2000/svg" role="presentation" viewBox="0 0 16 14">
      <path d="M15 0L1 14m14 0L1 0" stroke="currentColor" fill="none" fill-rule="evenodd"></path>
    </svg>`,jU=`<svg xmlns="http://www.w3.org/2000/svg"  role="presentation" viewBox="0 0 18 17">
      <g transform="translate(1 1)" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="square">
        <path d="M16 16l-5.0752-5.0752"></path>
        <circle cx="6.4" cy="6.4" r="6.4"></circle>
      </g>
    </svg>`,yr=Ft.page.breakpoint,KU=Ft.time.debounce,ZU=Ft.humbergerBtnSelector,JU=Ft.logoeSelector,Wx=Ft.buttonParent,rh=Ft.svgCart,QU=Ft.logo.white,$x=Ft.logo.black,eN=Ft.logo.phone,tN=Ft.logo.tablet,nN=Ft.target.pageContainer,Xx=Ft.target.header,iN=Ft.target.announcement,rN=Ft.rootProperty.headerHeight,sN=Ft.rootProperty.announcementHeight,qx=Ft.tabletAndUp,Yx=Ft.phone;Qr(yr);function aN(){document.addEventListener("DOMContentLoaded",async function(){UN(),vd(),await kN(),EN(),pN(),oN()})}function oN(){const i=document.querySelectorAll(".Drawer__Main");console.log("elements",i),i.forEach(e=>{e.setAttribute("data-scrollable",""),e.style.overflow="auto"})}function lN(){document.querySelectorAll(".Collapsible").forEach(e=>{if(e){const t=e.querySelector(".Collapsible__Button");t?(t.classList.add("Heading","u-h6"),uN(e),hN(t)):cN(e)}else console.log("Collapsible not found")})}function cN(i){const e=document.createElement("a");e.classList.add("Collapsible__Button","Heading","Link","Link--primary","u-h6");const t=i.textContent;e.textContent=t,e.setAttribute("href","#"),i.textContent="",i.appendChild(e)}function uN(i){const e=document.createElement("div");e.classList.add("Collapsible__Inner"),i.appendChild(e);const t=fN();e.appendChild(t),e.style.overflow="hidden",e.style.height="0"}function fN(){return document.querySelector(".Collapsible__Content")}function hN(i){const e=document.createElement("span");e.classList.add("Collapsible__Plus"),i.appendChild(e);const t=document.querySelector(".Collapsible__Button");dN(t)}function dN(i){const e=document.querySelector(".Collapsible__Inner");window.addEventListener("DOMContentLoaded",t=>{e.style.height==="0px"?Q_(e):eg(e)}),i.addEventListener("click",function(){const t=document.querySelector(".Collapsible__Button"),n=document.querySelector(".Collapsible__Inner"),r=t.getAttribute("aria-expanded")==="true";t.setAttribute("aria-expanded",!r),n.style.overflow=n.style.overflow==="visible"?"hidden":"visible",n.style.height=n.style.height==="0px"?"auto":"0px",n.getAttribute("tabindex")==="-1"?eg(n):Q_(n),r||(console.log("btn",t),t.focus())})}function Q_(i){i.setAttribute("tabindex","-1"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.setAttribute("tabindex","-1")})}function eg(i){i.removeAttribute("tabindex"),i.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(t=>{t.removeAttribute("tabindex")})}function pN(){_N(YU),mN(jU),lN()}function mN(i){jx(i,"Drawer__Search",["Icon","Icon--search"])}function _N(i){jx(i,"Drawer__Close",["Icon","Icon--close"]);const e=document.getElementById("sidebar-menu");e.setAttribute("aria-hidden",!0),yN(e),SN(e,"Drawer__Close")}async function jx(i,e,t){const n=document.querySelector(`.${e}`);Jx(n);async function r(o){const c=new DOMParser().parseFromString(o,"image/svg+xml").querySelector("svg");if(!c)throw new Error(`No SVG element found in the provided data: ${o}`);return c.querySelectorAll("path").forEach(f=>{f.setAttribute("fill","none"),f.setAttribute("stroke-width","1.5"),f.setAttribute("stroke","currentColor")}),c}const s=await r(i);gN(n,s),s.classList.add(...t)}function gN(i,e){i.appendChild(e),e.setAttribute("viewBox","0 0 20 20"),e.setAttribute("width","16"),e.setAttribute("height","14")}function vN(){const{disablePlugin:i,enablePlugin:e}=xd();i()}function xN(){const{disablePlugin:i,enablePlugin:e}=xd();e()}let sh=!0;function yN(i){const e=document.querySelector("html"),t=document.getElementById("sidebar-menu"),n=document.querySelector(".PageOverlay"),r=document.querySelector(".Header__Icon"),s=document.getElementById("page-container");r.addEventListener("click",function(){i.setAttribute("aria-hidden",!1),t.setAttribute("tabindex","-1"),t.addEventListener("transitionend",function(o){if(o.propertyName!=="transform")return;const a=t.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');a&&sh&&(a.focus(),vN(),sh=!1,s.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(c=>{c.setAttribute("tabindex","-1"),console.log("Adding pageContainer tabindex=-1")}))}),n.classList.add("is-visible"),e.classList.add("no-scroll")})}function SN(i,e){const t=document.querySelector("html"),n=document.getElementById("sidebar-menu"),r=document.querySelector(".PageOverlay"),s=document.getElementById("page-container");document.querySelector(`.${e}`).addEventListener("click",function(){i.setAttribute("aria-hidden",!0),n.removeAttribute("tabindex"),r.classList.remove("is-visible"),t.classList.remove("no-scroll"),n.addEventListener("transitionend",function(a){if(a.propertyName!=="transform")return;s.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])').forEach(c=>{c.removeAttribute("tabindex"),xN()}),sh=!0})})}function EN(){MN(),TN(),bN()}function MN(){const i={contain:!0,prevNextButtons:!1,setGallerySize:!1,adaptiveHeight:!1,wrapAround:!0,dragThreshold:15,pauseAutoPlayOnHover:!1,autoPlay:!1,pageDots:!0,fade:!0,on:{change:function(n){console.log("Slide changed to",n),document.querySelectorAll(".Carousel__Cell").forEach((a,l)=>{if(a.classList.contains("is-selected")){let d=function(g){h===null&&(h=g);let _=g-h,p=Math.min(_/f,1),m=AN(c,u,p);a.style.opacity=m,p<1&&requestAnimationFrame(d)};a.style.visibility="inherit";let c=0,u=1,f=1e3,h=null;requestAnimationFrame(d)}else a.style.visibility="hidden",a.style.opacity="1"}),document.querySelectorAll(".SectionHeader").forEach((a,l)=>{setTimeout(()=>{console.log("index",n),l===n?(a.style.visibility="visible",a.style.opacity="1",a.style.transform="matrix(1, 0, 0, 1, 0, 0)",a.style.transition="all 0.7s ease-in-out"):(a.style.visibility="hidden",a.style.opacity="0",a.style.transform="matrix(1, 0, 0, 1, 0, 20)",a.style.transition="all 0.7s ease-in-out")},500)}),document.querySelectorAll(".SectionHeader__ButtonWrapper").forEach((a,l)=>{setTimeout(()=>{l===n?(a.style.visibility="visible",a.style.opacity="1",a.style.transform="matrix(1, 0, 0, 1, 0, 0)",a.style.transition="all 0.7s ease-in-out"):(a.style.visibility="hidden",a.style.opacity="0",a.style.transform="matrix(1, 0, 0, 1, 0, 20)",a.style.transition="all 0.7s ease-in-out")},700)})}}},e=document.querySelector(".Slideshow-Carousel"),t=JSON.stringify(i,null,2);e.setAttribute("data-flickity-config",t),new fy(e,i),e.classList.add("Carousel--fixed")}let tg=!1;function TN(i){const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".flickity-page-dots");if(r.length>0&&r[0].children.length>0)return;!tg&&r.length>0&&(e.disconnect(),tg=!0,console.log("disconnected"))}})});e.observe(document,{childList:!0,subtree:!0})}let ng=!1;function bN(i){if(ng)return;ng=!0;const e=new MutationObserver(function(t){t.forEach(function(n){if(n.type==="childList"){const r=document.querySelectorAll(".Carousel__Cell");let s=["./img/yamadera.jpeg","./img/sakuramich.jpeg","./img/yamadera.jpeg","./img/yamadera.jpeg","./img/sakuramich.jpeg"],o=["Text 1","Text 2","Text 3","Text 4","Text 5"],a=["Text A","Text B","Text C","Text D","Text E"];r.forEach((l,c)=>{if(l.children.length>0)return;let u=s[c%s.length],f=o[c%o.length],h=a[c%a.length];RN(l,u),CN(l,u),PN(l,f,h)}),r.length>=s.length&&(e.disconnect(),console.log("disconnected"),ON(),wN())}})});e.observe(document,{childList:!0,subtree:!0})}function wN(){const i=document.querySelectorAll(".SectionHeader");i[0].style.visibility="visible",i[0].style.opacity="1",i[0].style.transform="matrix(1, 0, 0, 1, 0, 0)",i[0].style.transition="all 0.7s ease-in-out";for(let e=1;e<=4;e++)i[e].style.visibility="hidden",i[e].style.opacity="0",i[e].style.transform="matrix(1, 0, 0, 1, 0, 20)",i[0].style.transition="all 0.7s ease-in-out"}function AN(i,e,t){return i*(1-t)+e*t}function Kx(i,e){const t=document.createElement("img");t.alt="yamadera",t.classList.add("Slideshow__Image","Image--lazyLoaded"),t.onload=function(){i.appendChild(t)},t.src=e}function RN(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-tablet-and-up"),i.appendChild(t),Kx(t,e)}function CN(i,e){const t=document.createElement("div");t.classList.add("Slideshow__ImageContainer","hidden-phone"),i.appendChild(t),Kx(t,e)}function PN(i,e,t){const n=document.createElement("div");n.classList.add("Slideshow__Content","Slideshow__Content--bottomLeft"),i.appendChild(n),LN(n,e,t)}function LN(i,e,t){const n=document.createElement("header");n.classList.add("SectionHeader"),i.appendChild(n);const r=document.createElement("h3"),s=document.createElement("h2");r.classList.add("SectionHeader__SubHeader","Heading","u-h6"),s.classList.add("SectionHeader__Heading","Section__Heading--emphasize","Heading","u-h1"),r.textContent=e,s.textContent=t,n.appendChild(r),n.appendChild(s),DN(n)}function DN(i){const e=document.createElement("div");e.classList.add("SectionHeader__ButtonWrapper"),i.appendChild(e),IN(e)}function IN(i){const e=document.createElement("div");e.classList.add("ButtonGroup","ButtonGroup--spacingSmall"),i.appendChild(e);const t=document.createElement("a");t.href="./subhtml/demo-wrapAround.html",t.classList.add("ButtonGroup__Item","Button"),t.textContent="READ MORE",e.appendChild(t)}function ON(){document.querySelectorAll(".Carousel__Cell")}function UN(){const i=document.title,e=document.querySelector(".AnnouncementBar__Content");return e&&(e.innerHTML=i),i}function NN(i){FN(i),[{src:$x,alt:"logo"},{src:QU,alt:"logo"}].forEach(t=>zN(t.src,t.alt))}function FN(i){const e=document.querySelector(".Header__FlexItem--logo"),t=document.createElement("h1");t.classList.add("Header__Logo"),e.appendChild(t),BN(t,i)}function BN(i,e){const t=document.querySelector(".Header__LogoLink"),n=t.parentElement;i.appendChild(t),n.appendChild(i);const r=document.createElement("img");r.className="Header__LogoImage Header__LogoImage--primary",r.alt="",r.style.height=e;const s=document.createElement("img");s.className="Header__LogoImage Header__LogoImage--transparent",s.alt="",s.style.height=e,t.appendChild(r),t.appendChild(s)}function zN(i,e){const t=document.querySelector(`.Header__LogoImage--${i===$x?"primary":"transparent"}`);t.src=i,t.alt=e}async function kN(){const i=Qr(yr)?qx:Yx;ny(i);const e=Qr(yr)?Vx:Gx;let t;try{t=await Zx(e)}catch(r){console.error("'An error occurred while creating the SVG:",r)}t&&Qx(t);const n=Qr(yr)?tN:eN;NN(n)}async function HN(i){const n=new DOMParser().parseFromString(i,"image/svg+xml").querySelector("svg");if(!n)throw new Error(`No SVG element found in the provided data: ${i}`);return n.getAttribute("height")||n.setAttribute("height","20"),n.getAttribute("width")||n.setAttribute("width","20"),n.querySelectorAll("path").forEach(s=>{s.setAttribute("fill","currentColor"),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width","0.05")}),n}async function Zx(i){try{const e=GN();Jx(e);const t=await VN(i,e);return WN(t),t}catch(e){console.error("Error in createSvg:",e)}}function GN(){const i=document.querySelector(`.${rh}`);if(!i)throw new Error(`No element found with class: ${rh}`);return i}function Jx(i){ty(i)}async function VN(i,e){return await $N(i,e)}function WN(i){window.innerWidth>=yr?i.classList.add("hidden-phone"):i.classList.add("hidden-tablet-and-up")}function Qx(i){const t=document.querySelector(`.${Wx}`).offsetHeight;iy(i,t),ry()}async function $N(i,e){const t=await HN(i);if(!t)throw new Error(`No SVG element created for path: ${i}`);return e.appendChild(t),t}let ig;window.addEventListener("resize",function(){console.log("Window resized"),ey(),vd()});window.addEventListener("orientationchange",function(){console.log("Orientation changed"),ey(),vd()});async function ey(){console.log("Resize event"),clearTimeout(ig),ig=setTimeout(async()=>{const i=Qr(yr)?qx:Yx;ny(i);const e=Qr(yr)?Vx:Gx,t=await Zx(e);t&&Qx(t);const n=Qr(yr)?"28px":"18px";document.querySelectorAll(".Header__LogoImage").forEach(s=>{s.style.height=n}),XN(),ry()},KU)}function XN(){const i=document.querySelector(".pin-spacer"),e=document.getElementById(Xx);if(i){const t=document.documentElement.clientWidth;console.log("width",t),i.style.width=t+"px",i.style.maxWidth=t+"px",e.style.width=t+"px",e.style.maxWidth=t+"px"}}window.screen&&window.screen.orientation&&window.screen.orientation.addEventListener("change",function(){console.log("Screen orientation changed:",window.screen.orientation.type)});function ty(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function qN(i,e,t){const n=document.createElementNS("http://www.w3.org/2000/svg","svg");return n.setAttribute("viewBox",`0 0 ${e} ${t}`),n.setAttribute("width",e),n.setAttribute("height",t),n}function YN(i,e,t,n){const r=(e-n*3)/2;for(let s=0;s<3;s++){const o=document.createElementNS("http://www.w3.org/2000/svg","rect");o.setAttribute("width",t),o.setAttribute("height",n),o.setAttribute("y",s*(parseInt(n)+r)),o.setAttribute("fill","currentColor"),i.appendChild(o)}}function rg({viewBox:i,width:e,height:t,rectWidth:n,rectHeight:r}){const s=qN(i,e,t);return YN(s,t,n,r),s}function ny(i){const e=document.querySelector(ZU);ty(e);const t=rg(i),n=rg(i);e.appendChild(t),e.appendChild(n),n.style.display="none"}function jN(i,e,t){if(!i)return;const n=i.parentNode;n.style.height=`${t}px`,n.style.width=`${e}px`}function sg(i,e,t){i.style.width=`${e}px`,i.style.height=`${t}px`}function iy(i,e){if(!i){console.log("No element provided to adjustElementToHeight");return}if(i instanceof SVGSVGElement){const t=i.getBBox(),r=t.width/t.height*e;sg(i,r,e)}else{const n=i.offsetWidth/i.offsetHeight*e;sg(i,n,e)}}function ry(){const e=document.querySelector(`.${Wx}`).offsetHeight;document.querySelectorAll(`.${JU}`);const t=document.querySelector(`.${rh}`);iy(t,e),jN(t,t.offsetWidth,e)}function vd(){const i=window.innerHeight,e=document.getElementById(nN);e&&(e.style.height=`${i}px`),oy("--window-height",i)}function sy(){og(`#${Xx}`,rN),og(`#${iN}`,sN)}let ag;function ay(){clearTimeout(ag),ag=setTimeout(()=>{const i=document.querySelector(".Slideshow--fullscreen"),e=window.innerHeight;console.log("windowHeight",e);const n=document.querySelector(".Header").offsetHeight,s=document.querySelector(".AnnouncementBar").offsetHeight,o=KN();console.log("headerIsNotTransparent",o),i.style.height=`${e-n*(o==="0"?0:1)-s}px`},50)}window.addEventListener("load",function(){sy(),ay()});window.addEventListener("resize",function(){sy(),ay()});function KN(){return getComputedStyle(document.documentElement).getPropertyValue("--header-is-not-transparent").trim()}function og(i,e){const t=document.querySelector(i);if(t){const n=t.offsetHeight;console.log("target height",t,n),oy(e,n)}}function oy(i,e){document.documentElement.style.setProperty(i,`${e}px`)}window.addEventListener("load",ZN);let ah=0;function ZN(){const i=document.body.getElementsByTagName("*"),e=Array.from(i).filter(t=>t.id.includes("section"));ah=0,e.forEach(t=>{ah+=t.offsetHeight})}const JN={get totalHeight(){return ah}},QN=Ft.target.pageContainer;class oh extends Z0{transformDelta(e,t){return e=this.options.disabled?{x:0,y:0}:e,e}}kc(oh,"pluginName","disablePlugin"),kc(oh,"defaultOptions",{disabled:!1});let ar;function xd(){window.addEventListener("load",function(){});const i=document.getElementById(QN);bh.registerPlugin(Xe),wm.use(oh),ar=wm.init(i,{delegateTo:document}),Xe.scrollerProxy(i,{scrollTop(n){return arguments.length?ar.scrollTop=n:ar.scrollTop}}),ar.addListener(Xe.update);function e(){ar.updatePluginOptions("disablePlugin",{disabled:!0}),console.log("plugin is disabled")}function t(){ar.updatePluginOptions("disablePlugin",{disabled:!1})}return Xe.defaults({scroller:i}),ar.addListener(n=>{n.offset.y+window.innerHeight>=ar.getSize().content.height&&console.log("you're at the bottom of the page")}),window.addEventListener("load",function(){const n=JN.totalHeight,r=document.querySelector(`#${Ft.target.header}`);r.style.position="relative",r.style.zIndex="1000",Xe.create({trigger:r,start:"top top",end:`${n}px top`,pin:!0,pinSpacing:!1,onEnter:()=>{},onLeaveBack:()=>{}});function s(){const o=document.getElementById(Ft.target.header);o.classList.add("Header--transparent"),Xe.create({trigger:o,start:"top top",end:99999,onEnter:()=>{o.classList.remove("Header--transparent")},onLeaveBack:()=>{o.classList.add("Header--transparent")}})}s()}),{disablePlugin:e,enablePlugin:t}}async function e3(){aN();const i=document.querySelector("#canvas");Rt.init(i),xd(),ql.init(),await ql.loadAllAssets(),Fx(i,Rt),MU(),lt.render(),ql.letsBegin()}function t3(){document.querySelector("[data-webgl]")}e3();console.log("Production output");t3();
