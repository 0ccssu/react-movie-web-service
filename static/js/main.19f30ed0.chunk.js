(this["webpackJsonpreact-movie-web-service"]=this["webpackJsonpreact-movie-web-service"]||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(2),n=s.n(a),c=s(13),i=s.n(c),r=s(4),o=s.n(r),l=s(14),m=s(15),d=s(16),j=s(19),v=s(18),u=s(17),b=s.n(u),h=(s(43),s(0));var p=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,c=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsxs)("ul",{className:"movie__genres",children:[" ",c.map((function(e,t){return Object(h.jsx)("li",{className:"genres__name",children:e},t)}))]}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})},O=(s(45),function(e){Object(j.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(o.a.mark((function t(){var s,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,console.log(a),e.setState({movies:a,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.getMovies()},e}return Object(d.a)(s,[{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return console.log(e),Object(h.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.19f30ed0.chunk.js.map