LazyLoad=function(a){function h(b,c){var d=a.createElement(b),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}function i(a){var b=d[a],c,g;b&&(c=b.callback,g=b.urls,g.shift(),e=0,g.length||(c&&c.call(b.context,b.obj),d[a]=null,f[a].length&&k(a)))}function j(){var c=navigator.userAgent;b={async:a.createElement("script").async===!0},(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}function k(e,g,k,n,o){var p=function(){i(e)},q=e==="css",r=[],s,t,u,v,w,x;b||j();if(g){g=typeof g=="string"?[g]:g.concat();if(q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(s=0,t=g.length;s<t;++s)f[e].push({urls:[g[s]],callback:s===t-1?k:null,obj:n,context:o})}if(d[e]||!(v=d[e]=f[e].shift()))return;c||(c=a.head||a.getElementsByTagName("head")[0]),w=v.urls;for(s=0,t=w.length;s<t;++s)x=w[s],q?u=b.gecko?h("style"):h("link",{href:x,rel:"stylesheet"}):(u=h("script",{src:x}),u.async=!1),u.className="lazyload",u.setAttribute("charset","utf-8"),b.ie&&!q?u.onreadystatechange=function(){/loaded|complete/.test(u.readyState)&&(u.onreadystatechange=null,p())}:q&&(b.gecko||b.webkit)?b.webkit?(v.urls[s]=u.href,m()):(u.innerHTML='@import "'+x+'";',l(u)):u.onload=u.onerror=p,r.push(u);for(s=0,t=r.length;s<t;++s)c.appendChild(r[s])}function l(a){var b;try{b=!!a.sheet.cssRules}catch(c){e+=1,e<200?setTimeout(function(){l(a)},50):b&&i("css");return}i("css")}function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1,a&&(e<200?setTimeout(m,50):i("css"))}}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document),function(){function k(){LazyLoad.js(i.js,l)}function l(){g.js=!0,i.lang!="en"?LazyLoad.js(h.locale+i.lang+".js?"+f,m):g.language=!0,q()}function m(){g.language=!0,q()}function n(){g.css=!0,q()}function o(){g.font.css=!0,q()}function p(){g.font.js=!0,q()}function q(){if(g.checks>40)return;g.checks++,g.js&&g.css&&g.font.css&&g.font.js&&g.language?g.finished||(g.finished=!0,s()):g.timeout=setTimeout("onloaded_check_again();",250)}function r(){b=document.createElement("div"),c=document.getElementById("timeline-embed"),c.appendChild(b),b.setAttribute("id","timeline"),i.width.toString().match("%")?(c.style.width=i.width,c.setAttribute("class","full-embed "),c.setAttribute("className","full-embed ")):(c.setAttribute("class"," sized-embed"),c.setAttribute("className"," sized-embed"),i.width=i.width-2,c.style.width=i.width+"px"),i.height.toString().match("%")?c.style.height=i.height:(i.height=i.height-16,c.style.height=i.height+"px"),b.style.position="relative"}function s(){a=new VMM.Timeline,a.init(i.source),e&&VMM.bindEvent(global,onTimelineHeadline,"TIMELINE_HEADLINE")}var a,b,c,d,e=!1,f="1.43",g={timeout:"",checks:0,finished:!1,js:!1,css:!1,jquery:!1,language:!1,font:{css:!1,js:!1}},h={base:"http://embed.verite.co/timeline/",css:"http://embed.verite.co/timeline/css/",js:"http://embed.verite.co/timeline/js/",locale:"http://embed.verite.co/timeline/js/locale/",font:{css:"http://embed.verite.co/timeline/css/themes/font/",js:"http://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",google:["Bevan::latin","Pontano+Sans::latin"]}},i={embed:!0,width:"100%",height:"650",source:"https://docs.google.com/spreadsheet/pub?key=0Agl_Dv6iEbDadFYzRjJPUGktY0NkWXFUWkVIZDNGRHc&output=html",lang:"en",font:"default",css:h.css+"timeline.css?"+f,js:h.js+"timeline-min.js?"+f};if(typeof url_config=="object"){i.height="100%";for(d in url_config)Object.prototype.hasOwnProperty.call(url_config,d)&&(i[d]=url_config[d]);i.source.match("docs.google.com")||i.source.match("json")||i.source.match("storify")||(i.source="https://docs.google.com/spreadsheet/pub?key="+i.source+"&output=html"),e=!0}else if(typeof timeline_config=="object")for(d in timeline_config)Object.prototype.hasOwnProperty.call(timeline_config,d)&&(i[d]=timeline_config[d]);else if(typeof config=="object")for(d in config)Object.prototype.hasOwnProperty.call(config,d)&&(i[d]=config[d]);timeline_config=i,r(),LazyLoad.css(i.css,n);if(i.font=="default")g.font.js=!0,g.font.css=!0;else{i.font.match("/")?h.font.css=i.font:h.font.css=h.font.css+i.font+".css",LazyLoad.css(h.font.css,o);switch(i.font){case"Merriweather-NewsCycle":h.font.google=["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"];break;case"PoiretOne-Molengo":h.font.google=["Poiret+One::latin","Molengo::latin"];break;case"Arvo-PTSans":h.font.google=["Arvo:400,700,400italic:latin","PT+Sans:400,700,400italic:latin"];break;case"PTSerif-PTSans":h.font.google=["PT+Sans:400,700,400italic:latin","PT+Serif:400,700,400italic:latin"];break;case"DroidSerif-DroidSans":h.font.google=["Droid+Sans:400,700:latin","Droid+Serif:400,700,400italic:latin"];break;case"Lekton-Molengo":h.font.google=["Lekton:400,700,400italic:latin","Molengo::latin"];break;case"NixieOne-Ledger":h.font.google=["Nixie+One::latin","Ledger::latin"];break;case"AbrilFatface-Average":h.font.google=["Average::latin","Abril+Fatface::latin"];break;case"PlayfairDisplay-Muli":h.font.google=["Playfair+Display:400,400italic:latin","Muli:300,400,300italic,400italic:latin"];break;case"Rancho-Gudea":h.font.google=["Rancho::latin","Gudea:400,700,400italic:latin"];break;case"Bevan-PotanoSans":h.font.google=["Bevan::latin","Pontano+Sans::latin"];break;case"BreeSerif-OpenSans":h.font.google=["Bree+Serif::latin","Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800:latin"];break;case"SansitaOne-Kameron":h.font.google=["Sansita+One::latin","Kameron:400,700:latin"];break;case"Pacifico-Arimo":h.font.google=["Pacifico::latin","Arimo:400,700,400italic,700italic:latin"];break;default:h.font.google=["News+Cycle:400,700:latin","Merriweather:400,700,900:latin"]}WebFontConfig={google:{families:h.font.google}},LazyLoad.js(h.font.js,p)}try{g.jquery=jQuery,g.jquery=!0}catch(j){g.jquery=!1}g.jquery?onJQueryLoaded():LazyLoad.js("http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js",k),this.onloaded_check_again=function(){q()}}();