/**
 * Blur Copyright (c) 2008-2015 by Abine, Inc. All Rights Reserved.
 *
 * This software is the confidential and proprietary information
 * of Abine, Inc. ("Confidential Information"), subject
 * to the Non-Disclosure Agreement and/or License Agreement you entered
 * into with Abine. You shall use such Confidential Information only
 * in accordance with the terms of said Agreement(s). Abine makes
 * no representations or warranties about the suitability of the
 * software. The software is provided with ABSOLUTELY NO WARRANTY
 * and Abine will NOT BE LIABLE for ANY DAMAGES resulting from
 * the use of the software.
 *
 * Contact license@getabine.com with any license-related questions.
 *
 * https://www.abine.com
 * @license
 *
 */
!function(){function e(){a.className="mmFadeOut",s&&(s.style.display="none"),r&&(r.style.display="none"),i.className="";var e=[a,s,r,i];setTimeout(function(){for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentNode&&n.parentNode.removeChild(n)}},2e3)}var t=window.location.href;if(window.top==window&&t.match(/dntmeFullTour=|dntmeTour=/)){var n="mmPostInstallFlow",a=document.createElement("iframe");a.style.opacity="0";var i=document.createElement("div");i.className="dntmDimPostInstall";var r=null,s=null,o={id:n,scrolling:"no",allowTransparency:"true",frameborder:"0"},l=document.documentElement.clientHeight,c=document.documentElement.clientWidth;if(t.indexOf("dntmeFullTour")!=-1){var d=t.indexOf("dntmeFullTour")+14,u=t.length-d;t.indexOf("&",d)!=-1&&(u=t.indexOf("&",d)-d),o.src=t.substr(d,u)+"?domain="+window.location.host+"&w="+c+"&h="+l,o.top=-l+"px",o.height=l+"px",o.id=n+"Full"}else o.src=t.substr(t.indexOf("dntmeTour")+10)+"?domain="+window.location.host,r=document.createElement("div"),r.id="mmPostInstallArrow",r.style.display="none",s=document.createElement("div"),s.innerHTML="CLOSE &nbsp;x",s.id="mmPostInstallClose",s.style.opacity="0",s.onclick=e;for(var p in o)a.setAttribute(p,o[p]);a.style.width=c+"px",r&&document.documentElement.insertBefore(r,document.documentElement.firstChild),document.documentElement.insertBefore(i,document.documentElement.firstChild),document.documentElement.insertBefore(a,i),s&&(s.style.left=c-80+"px",document.documentElement.insertBefore(s,a)),setTimeout(function(){a.className="mmFadeIn",r&&setTimeout(function(){r.style.display=""},1e3),s&&setTimeout(function(){s.className="show"},3e3)},1e3),window.addEventListener("message",function(t){0==o.src.indexOf(t.origin)&&"close"==t.data&&e()},!1)}}();