import{F as d}from"./index-BC1wpBVT.js";function m(){q(),p()}m();function p(){new d(".Carousel",{wrapAround:!0,pageDots:!0,prevNextButtons:!0,on:{ready:function(){const e=document.querySelector(".flickity-viewport");e.style.touchAction="pan-y",e.style.height="";const t=document.querySelector(".flickity-slider");t.style.left="0px",document.querySelectorAll(".Carousel__Cell").forEach((n,s)=>{n.style.transform="",n.style.position="absolute",n.style.left=`${s*100}%`,n.classList.contains("is-selected")&&(n.style.visibility="inherit",n.style.opacity="1")})},settle:function(){const e=document.querySelectorAll(".Carousel__Cell");e.forEach((t,i)=>{t.style.transform="",t.classList.contains("is-selected")?(t.style.visibility="inherit",t.style.opacity="1",i===4?e[0].style.left="500%":e[0].style.left="0%"):(t.style.visibility="hidden",t.style.opacity="0")})},change:function(e){document.querySelectorAll(".Carousel__Cell").forEach((i,n)=>{if(i.style.setProperty("transform","none","important"),i.classList.contains("is-selected")){let l=function(r){o===null&&(o=r);let u=r-o,c=Math.min(u/a,1),f=h(s,y,c);i.style.opacity=f,c<1&&requestAnimationFrame(l)};i.style.visibility="inherit";let s=0,y=1,a=1e3,o=null;requestAnimationFrame(l)}else i.style.visibility="hidden",i.style.opacity="1"})}}})}function h(e,t,i){return e*(1-i)+t*i}function q(){const e=document.title,t=document.querySelector(".AnnouncementBar__Content");return t&&(t.innerHTML=e),e}
