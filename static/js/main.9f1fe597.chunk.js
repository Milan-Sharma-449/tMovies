(this.webpackJsonptMovies=this.webpackJsonptMovies||[]).push([[0],{100:function(e,t,c){},101:function(e,t,c){},102:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(39),s=c.n(a),i=c(19),o=(c(49),c(50),c(51),c(7)),l=c(4),j=(c(52),c.p+"static/media/tmovie.67797e94.png"),u=c(0),d=[{display:"Home",path:"/"},{display:"Movies",path:"/movie"},{display:"TV Series",path:"/tv"}],b=function(){var e=Object(l.g)().pathname,t=Object(n.useRef)(null),c=d.findIndex((function(t){return t.path===e}));return Object(n.useEffect)((function(){var e=function(){document.body.scrollTop>100||document.documentElement.scrollTop>100?t.current.classList.add("shrink"):t.current.classList.remove("shrink")};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[]),Object(u.jsx)("div",{ref:t,className:"header",children:Object(u.jsxs)("div",{className:"header__wrap container",children:[Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(o.b,{to:"/",children:"tMovies"})]}),Object(u.jsx)("ul",{className:"header__nav",children:d.map((function(e,t){return Object(u.jsx)("li",{className:"".concat(t===c?"active":""),children:Object(u.jsx)(o.b,{to:e.path,children:e.display})},t)}))})]})})},m=(c(59),c.p+"static/media/footer-bg.67e95f05.jpg"),h=c.p+"static/media/TERMS OF SERVICE.a619be15.docx",p=function(){return Object(u.jsx)("div",{className:"footer",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsxs)("div",{className:"footer__content container",children:[Object(u.jsx)("div",{className:"footer__content__logo",children:Object(u.jsxs)("div",{className:"logo",children:[Object(u.jsx)("img",{src:j,alt:""}),Object(u.jsx)(o.b,{to:"/",children:"tMovies"})]})}),Object(u.jsxs)("div",{className:"footer__content__menus",children:[Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"Home"}),Object(u.jsx)("a",{href:"https://milan-sharma-449.github.io/Portfolio-react/",children:" Visit Our Site"}),Object(u.jsx)("a",{href:"https://milan-sharma-449.github.io/Portfolio-react/",children:" Contact Us"}),Object(u.jsx)("a",{href:h,download:!0,children:"Terms Of Service"}),Object(u.jsx)("a",{href:"https://milan-sharma-449.github.io/Portfolio-react/",children:" About Us"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)("a",{href:"https://github.com/Milan-Sharma-449",children:"GitHub"}),Object(u.jsx)("a",{href:"https://www.instagram.com/milansharma_449/",children:"Instagram"}),Object(u.jsx)("a",{href:"https://twitter.com/milansharma449",children:"Twitter"}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/milan-sharma-3b9985166/",children:"LinkedIn"}),Object(u.jsx)("a",{href:"https://stackoverflow.com/users/20611664/milan-sharma",children:"StackOverflow"})]}),Object(u.jsxs)("div",{className:"footer__content__menu",children:[Object(u.jsx)(o.b,{to:"/",children:"You must watch"}),Object(u.jsx)(o.b,{to:"/",children:"Recent release"}),Object(u.jsx)(o.b,{to:"/",children:"Top Trending"})]})]})]})})},O=(c(60),function(e){return Object(u.jsx)("button",{className:"btn ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})}),v=function(e){return Object(u.jsx)(O,{className:"btn-outline ".concat(e.className),onClick:e.onClick?function(){return e.onClick()}:null,children:e.children})},x=O,f=c(6),g=c.n(f),_=c(10),y=c(9),N=c(105),w=c(103),k=c(106),C=c(104),S=(c(62),function(e){var t=Object(n.useRef)(null);return Object(u.jsxs)("div",{ref:t,className:"modal__content",children:[e.children,Object(u.jsx)("div",{className:"modal__content__close",onClick:function(){t.current.parentNode.classList.remove("active"),e.onClose&&e.onClose()},children:Object(u.jsx)("i",{className:"bx bx-x"})})]})}),T=function(e){var t=Object(n.useState)(!1),c=Object(y.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){a(e.active)}),[e.active]),Object(u.jsx)("div",{id:e.id,className:"modal ".concat(r?"active":""),children:e.children})},L=c(42),E=c.n(L),I=c(43),M=c.n(I),V={baseUrl:"https://api.themoviedb.org/3/",apiKey:"7b357112471f14d9c6a8cadb83ce2d15",originalImage:function(e){return"https://image.tmdb.org/t/p/original/".concat(e)},w500Image:function(e){return"https://image.tmdb.org/t/p/w500/".concat(e)}},R=E.a.create({baseURL:V.baseUrl,headers:{"Content-Type":"application/json"},paramsSerializer:function(e){return M.a.stringify(Object(i.a)(Object(i.a)({},e),{},{api_key:V.apiKey}))}});R.interceptors.request.use(function(){var e=Object(_.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),R.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var F=R,q={movie:"movie",tv:"tv"},A={upcoming:"upcoming",popular:"popular",top_rated:"top_rated"},P={popular:"popular",top_rated:"top_rated",on_the_air:"on_the_air"},U={getMoviesList:function(e,t){var c="movie/"+A[e];return F.get(c,t)},getTvList:function(e,t){var c="tv/"+P[e];return F.get(c,t)},getVideos:function(e,t){var c=q[e]+"/"+t+"/videos";return F.get(c,{params:{}})},search:function(e,t){var c="search/"+q[e];return F.get(c,t)},detail:function(e,t,c){var n=q[e]+"/"+t;return F.get(n,c)},credits:function(e,t){var c=q[e]+"/"+t+"/credits";return F.get(c,{params:{}})},similar:function(e,t){var c=q[e]+"/"+t+"/similar";return F.get(c,{params:{}})}},H=(c(95),function(e){var t=Object(l.f)(),c=e.item,n=V.originalImage(c.backdrop_path?c.backdrop_path:c.poster_path),r=function(){var e=Object(_.a)(g.a.mark((function e(){var t,n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=document.querySelector("#modal_".concat(c.id)),e.next=3,U.getVideos(q.movie,c.id);case 3:(n=e.sent).results.length>0?(r="https://www.youtube.com/embed/"+n.results[0].key,t.querySelector(".modal__content > iframe").setAttribute("src",r)):t.querySelector(".modal__content").innerHTML="No trailer",t.classList.toggle("active");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{className:"hero-slide__item ".concat(e.className),style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsxs)("div",{className:"hero-slide__item__content container",children:[Object(u.jsxs)("div",{className:"hero-slide__item__content__info",children:[Object(u.jsx)("h2",{className:"title",children:c.title}),Object(u.jsx)("div",{className:"overview",children:c.overview}),Object(u.jsxs)("div",{className:"btns",children:[Object(u.jsx)(x,{onClick:function(){return t.push("/movie/"+c.id)},children:"Watch now"}),Object(u.jsx)(v,{onClick:r,children:"Watch trailer"})]})]}),Object(u.jsx)("div",{className:"hero-slide__item__content__poster",children:Object(u.jsx)("img",{src:V.w500Image(c.poster_path),alt:""})})]})})}),B=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(u.jsx)(T,{active:!1,id:"modal_".concat(t.id),children:Object(u.jsx)(S,{onClose:function(){return c.current.setAttribute("src","")},children:Object(u.jsx)("iframe",{ref:c,width:"100%",height:"500px",title:"trailer"})})})},W=function(){N.a.use([w.a]);var e=Object(n.useState)([]),t=Object(y.a)(e,2),c=t[0],r=t[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(_.a)(g.a.mark((function e(){var t,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={page:1},e.prev=1,e.next=4,U.getMoviesList(A.popular,{params:t});case 4:c=e.sent,r(c.results.slice(1,4)),console.log(c),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(u.jsxs)("div",{className:"hero-slide",children:[Object(u.jsx)(k.a,{modules:[w.a],grabCursor:!0,spaceBetween:0,slidesPerView:1,children:c.map((function(e,t){return Object(u.jsx)(C.a,{children:function(t){var c=t.isActive;return Object(u.jsx)(H,{item:e,className:"".concat(c?"active":"")})}},t)}))}),c.map((function(e,t){return Object(u.jsx)(B,{item:e},t)}))]})},J=(c(96),c(97),function(e){var t=e.item,c="/"+q[e.category]+"/"+t.id,n=V.w500Image(t.poster_path||t.backdrop_path);return Object(u.jsxs)(o.b,{to:c,children:[Object(u.jsx)("div",{className:"movie-card",style:{backgroundImage:"url(".concat(n,")")},children:Object(u.jsx)(x,{children:Object(u.jsx)("i",{className:"bx bx-play"})})}),Object(u.jsx)("h3",{children:t.title||t.name})]})}),K=function(e){var t=Object(n.useState)([]),c=Object(y.a)(t,2),r=c[0],a=c[1];return Object(n.useEffect)((function(){var t=function(){var t=Object(_.a)(g.a.mark((function t(){var c,n;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,n={},"similar"===e.type){t.next=15;break}t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,U.getMoviesList(e.type,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,U.getTvList(e.type,{params:n});case 12:c=t.sent;case 13:t.next=18;break;case 15:return t.next=17,U.similar(e.category,e.id);case 17:c=t.sent;case 18:a(c.results);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),Object(u.jsx)("div",{className:"movie-list",children:Object(u.jsx)(k.a,{grabCursor:!0,spaceBetween:10,slidesPerView:"auto",children:r.map((function(t,c){return Object(u.jsx)(C.a,{children:Object(u.jsx)(J,{item:t,category:e.category})},c)}))})})},z=function(){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(W,{}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(K,{category:q.movie,type:A.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated Movies"}),Object(u.jsx)(o.b,{to:"/movie",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(K,{category:q.movie,type:A.top_rated})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Trending TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(K,{category:q.tv,type:P.popular})]}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsxs)("div",{className:"section__header mb-2",children:[Object(u.jsx)("h2",{children:"Top Rated TV"}),Object(u.jsx)(o.b,{to:"/tv",children:Object(u.jsx)(v,{className:"small",children:"View more"})})]}),Object(u.jsx)(K,{category:q.tv,type:P.top_rated})]})]})]})},D=(c(98),function(e){return Object(u.jsx)("div",{className:"page-header",style:{backgroundImage:"url(".concat(m,")")},children:Object(u.jsx)("h2",{children:e.children})})}),G=c(28),Y=(c(99),c(100),function(e){return Object(u.jsx)("input",{type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange?function(t){return e.onChange(t)}:null})}),Q=function(e){var t=Object(l.f)(),c=Object(n.useState)(e.keyword?e.keyword:""),r=Object(y.a)(c,2),a=r[0],s=r[1],i=Object(n.useCallback)((function(){a.trim().length>0&&t.push("/".concat(q[e.category],"/search/").concat(a))}),[a,e.category,t]);return Object(n.useEffect)((function(){var e=function(e){e.preventDefault(),13===e.keyCode&&i()};return document.addEventListener("keyup",e),function(){document.removeEventListener("keyup",e)}}),[a,i]),Object(u.jsxs)("div",{className:"movie-search",children:[Object(u.jsx)(Y,{type:"text",placeholder:"Enter keyword",value:a,onChange:function(e){return s(e.target.value)}}),Object(u.jsx)(x,{className:"small",onClick:i,children:"Search"})]})},X=function(e){var t=Object(n.useState)([]),c=Object(y.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(1),i=Object(y.a)(s,2),o=i[0],j=i[1],d=Object(n.useState)(0),b=Object(y.a)(d,2),m=b[0],h=b[1],p=Object(l.h)().keyword;Object(n.useEffect)((function(){var t=function(){var t=Object(_.a)(g.a.mark((function t(){var c,n,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={},t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,U.getMoviesList(A.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,U.getTvList(P.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return r={query:p},t.next=18,U.search(e.category,{params:r});case 18:c=t.sent;case 19:a(c.results),h(c.total_pages);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[e.category,p]);var O=function(){var t=Object(_.a)(g.a.mark((function t(){var c,n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=null,void 0!==p){t.next=15;break}n={page:o+1},t.t0=e.category,t.next=t.t0===q.movie?6:10;break;case 6:return t.next=8,U.getMoviesList(A.upcoming,{params:n});case 8:return c=t.sent,t.abrupt("break",13);case 10:return t.next=12,U.getTvList(P.popular,{params:n});case 12:c=t.sent;case 13:t.next=19;break;case 15:return s={page:o+1,query:p},t.next=18,U.search(e.category,{params:s});case 18:c=t.sent;case 19:a([].concat(Object(G.a)(r),Object(G.a)(c.results))),j(o+1);case 21:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(Q,{category:e.category,keyword:p})}),Object(u.jsx)("div",{className:"movie-grid",children:r.map((function(t,c){return Object(u.jsx)(J,{category:e.category,item:t},c)}))}),o<m?Object(u.jsx)("div",{className:"movie-grid__loadmore",children:Object(u.jsx)(v,{className:"small",onClick:O,children:"Load more"})}):null]})},Z=function(){var e=Object(l.h)().category;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(D,{children:e===q.movie?"Movies":"TV Series"}),Object(u.jsx)("div",{className:"container",children:Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(X,{category:e})})})]})},$=(c(101),function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(y.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(_.a)(g.a.mark((function c(){var n;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,U.credits(t,e.id);case 2:n=c.sent,s(n.cast.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(u.jsx)("div",{className:"casts",children:a.map((function(e,t){return Object(u.jsxs)("div",{className:"casts__item",children:[Object(u.jsx)("div",{className:"casts__item__img",style:{backgroundImage:"url(".concat(V.w500Image(e.profile_path),")")}}),Object(u.jsx)("p",{className:"casts__item__name",children:e.name})]},t)}))})}),ee=function(e){var t=e.item,c=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e=9*c.current.offsetWidth/16+"px";c.current.setAttribute("height",e)}),[]),Object(u.jsxs)("div",{className:"video",children:[Object(u.jsx)("div",{className:"video__title",children:Object(u.jsx)("h2",{children:t.name})}),Object(u.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(t.key),ref:c,width:"100%",title:"video"})]})},te=function(e){var t=Object(l.h)().category,c=Object(n.useState)([]),r=Object(y.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){var c=function(){var c=Object(_.a)(g.a.mark((function c(){var n;return g.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,U.getVideos(t,e.id);case 2:n=c.sent,s(n.results.slice(0,5));case 4:case"end":return c.stop()}}),c)})));return function(){return c.apply(this,arguments)}}();c()}),[t,e.id]),Object(u.jsx)(u.Fragment,{children:a.map((function(e,t){return Object(u.jsx)(ee,{item:e},t)}))})},ce=function(){var e=Object(l.h)(),t=e.category,c=e.id,r=Object(n.useState)(null),a=Object(y.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(_.a)(g.a.mark((function e(){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U.detail(t,c,{params:{}});case 2:n=e.sent,i(n),window.scrollTo(0,0);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[t,c]),Object(u.jsx)(u.Fragment,{children:s&&Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"banner",style:{backgroundImage:"url(".concat(V.originalImage(s.backdrop_path||s.poster_path),")")}}),Object(u.jsxs)("div",{className:"mb-3 movie-content container",children:[Object(u.jsx)("div",{className:"movie-content__poster",children:Object(u.jsx)("div",{className:"movie-content__poster__img",style:{backgroundImage:"url(".concat(V.originalImage(s.poster_path||s.backdrop_path),")")}})}),Object(u.jsxs)("div",{className:"movie-content__info",children:[Object(u.jsx)("h1",{className:"title",children:s.title||s.name}),Object(u.jsx)("div",{className:"genres",children:s.genres&&s.genres.slice(0,5).map((function(e,t){return Object(u.jsx)("span",{className:"genres__item",children:e.name},t)}))}),Object(u.jsx)("p",{className:"overview",children:s.overview}),Object(u.jsxs)("div",{className:"cast",children:[Object(u.jsx)("div",{className:"section__header",children:Object(u.jsx)("h2",{children:"Casts"})}),Object(u.jsx)($,{id:s.id})]})]})]}),Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("div",{className:"section mb-3",children:Object(u.jsx)(te,{id:s.id})}),Object(u.jsxs)("div",{className:"section mb-3",children:[Object(u.jsx)("div",{className:"section__header mb-2",children:Object(u.jsx)("h2",{children:"Similar"})}),Object(u.jsx)(K,{category:t,type:"similar",id:s.id})]})]})]})})},ne=function(){return Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/:category/search/:keyword",component:Z}),Object(u.jsx)(l.a,{path:"/:category/:id",component:ce}),Object(u.jsx)(l.a,{path:"/:category",component:Z}),Object(u.jsx)(l.a,{path:"/",exact:!0,component:z})]})};var re=function(){return Object(u.jsx)(o.a,{children:Object(u.jsx)(l.a,{render:function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(b,Object(i.a)({},e)),Object(u.jsx)(ne,{}),Object(u.jsx)(p,{})]})}})})};s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(re,{})}),document.getElementById("root"))},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){},98:function(e,t,c){},99:function(e,t,c){}},[[102,1,2]]]);
//# sourceMappingURL=main.9f1fe597.chunk.js.map