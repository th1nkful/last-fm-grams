(this["webpackJsonplast-fm-grams"]=this["webpackJsonplast-fm-grams"]||[]).push([[0],{188:function(e,t,a){e.exports=a(388)},193:function(e,t,a){},299:function(e,t,a){},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),u=a.n(c),s=(a(193),a(12)),o=a.n(s),l=a(24),i=a(17),m=a(395),p=a(51),f=a(20),g=a(390),y=a(392),d=a(396),b=a(112),v=a(113),h=a(155),E=a.n(h),k=a(156),w=a.n(k),x=a(157),O=a.n(x),j=a(184),S=function(e,t){var a={},n=null,r=0;return e.forEach((function(e){e[t]!==n&&(r+=1,n=e[t],a["".concat(r,".").concat(n)]=Object(j.a)({},e,{key:n,items:[e]})),a["".concat(r,".").concat(n)].items.push(e)})),Object.values(a)},T=E.a.create({baseURL:"https://ws.audioscrobbler.com/2.0"});T.interceptors.request.use((function(e){return e.params=e.params||{},e.params.api_key="cd948c3e719c7c938523be6bcea7300a",e.params.format="json",e}));var A=function(e){return T.get("/?method=user.getinfo&user=".concat(e))},F=function(e){return T.get("/?method=user.getfriends&user=".concat(e))},I=function(e){return T.get("/?method=user.getrecenttracks&user=".concat(e))},C=function(e){return T.get("/?method=user.gettopalbums&user=".concat(e))},J=function(e){return T.get("/?method=user.gettopartists&user=".concat(e))},B=function(e){return T.get("/?method=user.gettoptracks&user=".concat(e))},M=function(e){return T.get("/?method=user.getweeklyalbumchart&user=".concat(e))},N=function(e){return T.get("/?method=user.getweeklyartistchart&user=".concat(e))},P=function(e){return T.get("/?method=user.getweeklytrackchart&user=".concat(e))},U=function(e){var t=e.reverse();return Object(i.a)(t,1)[0]},W=function(e){return e["#text"]||e},L=function(e,t){return e.map((function(e){var a=e.artist,n=e.album,r=e.name,c=e.mbid,u=e.url,s=e.date,o=e.image;return{artist:W(a),album:W(n),name:r,mbid:c,url:u,date:W(s),image:W(U(o)),user:t}}))},H=function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,r,c,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return a=e.sent,n=a.data.friends.user,r=[t].concat(Object(v.a)(n.map((function(e){return e.name})))),e.next=7,Promise.all(r.map(function(){var e=Object(l.a)(o.a.mark((function e(t){var a,n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return a=e.sent,n=a.data,r=n.recenttracks.track,e.abrupt("return",S(L(r,t),"album"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return c=e.sent,u=w()(O.a.apply(void 0,Object(v.a)(c)),["date"],["desc"]),e.abrupt("return",{data:u});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=(a(299),a(391)),z=a(389),G=a(397),R=a(394),$=a(393),_=r.a.createContext(void 0),D=function(e){var t=e.children,a=r.a.useState(void 0),n=Object(i.a)(a,2),c=n[0],u=n[1],s={user:c,setUser:function(e){localStorage.setItem("user",JSON.stringify(c)),u(e)}},m=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,n,r,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,A(c.name);case 4:t=e.sent,a=t.data.user,n=a.playcount,r=a.name,s=a.url,l=a.country,u({playcount:n,name:r,url:s,country:l});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.useEffect((function(){if(void 0===c){var e=localStorage.getItem("user");if(e)try{return u(JSON.parse(e)),void m()}catch(t){return void u(void 0)}}else localStorage.setItem("user",JSON.stringify(c))}),[c]),r.a.createElement(_.Provider,{value:s},t)},K=function(){return r.a.useContext(_)},Q=q.a.Title,V=q.a.Text,X=function(){var e=r.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=r.a.useState({}),u=Object(i.a)(c,2),s=(u[0],u[1]),m=r.a.useState([]),y=Object(i.a)(m,2),d=y[0],b=y[1],v=K().user,h=function(){var e=Object(l.a)(o.a.mark((function e(){var t,a,r,c,u,l,m,p,f,g,y;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.next=3,Promise.all([H(v.name),I(v.name),C(v.name),J(v.name),B(v.name),M(v.name),N(v.name),P(v.name)]);case 3:t=e.sent,a=t.map((function(e){return e.data})),r=Object(i.a)(a,8),c=r[0],u=r[1].recenttracks,l=r[2].topalbums,m=r[3].topartists,p=r[4].toptracks,f=r[5].weeklyalbumchart,g=r[6].weeklyartistchart,y=r[7].weeklytrackchart,s({recentTracks:u,topAlbums:l,topArtists:m,topTracks:p,weeklyAlbums:f,weeklyArtists:g,weeklyTracks:y}),b(c),n(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(r.a.useEffect((function(){h()}),[null]),a)return r.a.createElement(r.a.Fragment,null,Array(3).fill(null).map((function(){return r.a.createElement(g.a,{style:{marginTop:"1em",maxWidth:"50%"}},r.a.createElement($.a,{avatar:!0,paragraph:{rows:4}}))})));var E=Object(i.a)(d,1)[0];return console.log(E||null),r.a.createElement(r.a.Fragment,null,d.map((function(e){return r.a.createElement(g.a,{key:"".concat(e.user,".").concat(e.mbid),style:{maxWidth:"50%",marginBottom:"1em"},cover:r.a.createElement("img",{alt:"".concat(e.artist," - ").concat(e.album," - ").concat(e.name),src:e.image})},r.a.createElement(g.a.Meta,{title:r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{level:4,style:{display:"block",marginBottom:"0"}},e.key||e.name),e.key?r.a.createElement(V,{style:{display:"block"},strong:!0},e.artist):r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{style:{display:"block"},type:"secondary"},e.album),r.a.createElement(V,{style:{display:"block"},strong:!0},e.artist)))}),r.a.createElement("div",{style:{marginTop:"1em"}},r.a.createElement(p.a,null,r.a.createElement(f.a,{span:12},r.a.createElement(V,{strong:!0},e.user)),r.a.createElement(f.a,{span:12,style:{textAlign:"right"}},r.a.createElement(V,{type:"secondary"},"Played at ",e.date)))))})))},Y=q.a.Text,Z=function(){var e=K().user;return r.a.createElement(m.a,{style:{minHeight:"100vh"}},r.a.createElement(m.a,null,r.a.createElement(m.a.Header,{style:{background:"#fff"}},r.a.createElement(z.a,{size:"large",icon:r.a.createElement(R.a,null)}),r.a.createElement(Y,{strong:!0,style:{margin:"0 .5em"}},e.name),r.a.createElement(G.a,{color:"geekblue"},e.playcount," plays")),r.a.createElement(m.a.Content,{style:{margin:"2em"}},r.a.createElement(p.a,{gutter:24},r.a.createElement(f.a,{span:24},r.a.createElement(X,null)))),r.a.createElement(m.a.Footer,{style:{textAlign:"center"}},"th1nkful \xa92020")))};function ee(){var e=r.a.useState(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=K(),u=c.user,s=c.setUser,v=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n,r,c,u,l,i,m;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A(a);case 3:t=e.sent,n=t.data.user,r=n.playcount,c=n.name,u=n.url,l=n.country,s({playcount:r,name:c,url:u,country:l}),e.next=18;break;case 9:if(e.prev=9,e.t0=e.catch(0),!(i=e.t0.response)){e.next=17;break}if(!(m=i.data).message){e.next=17;break}return console.log(m.message),e.abrupt("return");case 17:console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return u?r.a.createElement(Z,null):r.a.createElement(m.a,null,r.a.createElement(p.a,{gutter:24,style:{height:"100vh"},justify:"center"},r.a.createElement(f.a,{span:12},r.a.createElement(g.a,{className:"App",title:"Last FM Grams",style:{marginTop:"2em"}},r.a.createElement(y.a.Item,{label:"Last.FM Username"},r.a.createElement(d.a,{value:a,onChange:function(e){var t=e.target;return n(t.value)}})),r.a.createElement(y.a.Item,null,r.a.createElement(b.a,{onClick:v,type:"primary"},"Setup"))))))}var te=function(){return r.a.createElement(D,null,r.a.createElement(p.a,{gutter:24},r.a.createElement(f.a,{span:24},r.a.createElement(ee,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[188,1,2]]]);
//# sourceMappingURL=main.855eb919.chunk.js.map