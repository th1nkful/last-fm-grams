(this["webpackJsonplast-fm-grams"]=this["webpackJsonplast-fm-grams"]||[]).push([[0],{240:function(e,t,a){e.exports=a(473)},245:function(e,t,a){},246:function(e,t,a){},473:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(9),l=a.n(c),o=(a(245),a(246),a(15)),u=a(95),s=a(486),m=a(487),i=a(484),p=a(488),f=a(485),y=a(17),E=a.n(y),k=a(32),d=a(110),g=a.n(d),v=a(78),b=a(38),h=a(477),w=a(480),x=a(164),T=a(212),O=a.n(T),j=a(213),M=a.n(j),I=a(214),S=a.n(I),Y=a(238),A=function(e,t){var a={},r=null,n=0;return e.forEach((function(e){e[t]!==r&&(n+=1,r=e[t],a["".concat(n,".").concat(r)]=Object(Y.a)({},e,{key:r,items:[e]})),a["".concat(n,".").concat(r)].items.push(e)})),Object.values(a)},B=O.a.create({baseURL:"https://ws.audioscrobbler.com/2.0"});B.interceptors.request.use((function(e){return e.params=e.params||{},e.params.api_key="cd948c3e719c7c938523be6bcea7300a",e.params.format="json",e}));var C=function(e){return B.get("/?method=user.getinfo&user=".concat(e))},F=function(e){return B.get("/?method=user.getfriends&user=".concat(e))},L=function(e){return B.get("/?method=user.getrecenttracks&user=".concat(e))},P=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"overall";return B.get("/?method=user.gettopalbums&user=".concat(e,"&period=").concat(t))},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"overall";return B.get("/?method=user.gettopartists&user=".concat(e,"&period=").concat(t))},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"overall";return B.get("/?method=user.gettoptracks&user=".concat(e,"&period=").concat(t))},W=function(e){return B.get("/?method=user.getweeklyalbumchart&user=".concat(e))},N=function(e){return B.get("/?method=user.getweeklyartistchart&user=".concat(e))},U=function(e){return B.get("/?method=user.getweeklytrackchart&user=".concat(e))},q=function(e){var t=e.reverse();return Object(o.a)(t,1)[0]},z=function(e){return e&&e["#text"]||e},K=function(e,t){return e.map((function(e){var a=e.artist,r=e.album,n=e.name,c=e.mbid,l=e.url,o=e.date,u=e.image;return{artist:z(a),album:z(r),name:n,mbid:c,url:l,date:z(o),image:z(q(u)),user:t}}))},G=function(){var e=Object(k.a)(E.a.mark((function e(t){var a,r,n,c,l;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(t);case 2:return a=e.sent,r=a.data.friends.user,n=[t].concat(Object(x.a)(r.map((function(e){return e.name})))),e.next=7,Promise.all(n.map(function(){var e=Object(k.a)(E.a.mark((function e(t){var a,r,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(t);case 2:return a=e.sent,r=a.data,n=r.recenttracks.track,e.abrupt("return",A(K(n,t),"album"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return c=e.sent,l=M()(S.a.apply(void 0,Object(x.a)(c)),["date"],["desc"]),e.abrupt("return",{data:l});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=n.a.createContext(void 0),$=function(e){var t=e.children,a=n.a.useState(void 0),r=Object(o.a)(a,2),c=r[0],l=r[1],u={user:c,setUser:function(e){localStorage.setItem("user",JSON.stringify(c)),l(e)}},s=function(){var e=Object(k.a)(E.a.mark((function e(){var t,a,r,n,o,u;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,C(c.name);case 4:t=e.sent,a=t.data.user,r=a.playcount,n=a.name,o=a.url,u=a.country,l({playcount:r,name:n,url:o,country:u});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){if(void 0===c){var e=localStorage.getItem("user");if(e)try{return l(JSON.parse(e)),void s()}catch(t){return void l(void 0)}}else localStorage.setItem("user",JSON.stringify(c))}),[c]),n.a.createElement(R.Provider,{value:u},t)},_=function(){return n.a.useContext(R)},H=a(478),Q=H.a.Title,V=H.a.Text,X=function(e){var t=e.track;return n.a.createElement(v.a,{justify:"center",key:"".concat(t.user,".").concat(t.date)},n.a.createElement(b.a,{span:24,lg:12},n.a.createElement(h.a,{style:{marginBottom:"1em"},cover:n.a.createElement("img",{alt:"".concat(t.artist," - ").concat(t.album," - ").concat(t.name),src:t.image})},n.a.createElement(h.a.Meta,{title:n.a.createElement(n.a.Fragment,null,n.a.createElement(Q,{level:4,style:{display:"block",marginBottom:"0"}},t.key||t.name),t.key?n.a.createElement(V,{style:{display:"block"},strong:!0},t.artist):n.a.createElement(n.a.Fragment,null,n.a.createElement(V,{style:{display:"block"},type:"secondary"},t.album),n.a.createElement(V,{style:{display:"block"},strong:!0},t.artist)))}),n.a.createElement("div",{style:{marginTop:"1em"}},n.a.createElement(v.a,null,n.a.createElement(b.a,{span:12},n.a.createElement(V,{strong:!0},t.user)),n.a.createElement(b.a,{span:12,style:{textAlign:"right"}},n.a.createElement(V,{type:"secondary"},"Played at ",t.date)))))))},Z=function(){var e=n.a.useState(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=n.a.useState(!1),l=Object(o.a)(c,2),u=l[0],s=(l[1],n.a.useState([])),m=Object(o.a)(s,2),i=m[0],p=m[1],f=_().user,y=function(){var e=Object(k.a)(E.a.mark((function e(){var t,a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,G(f.name);case 3:t=e.sent,a=t.data,p(a),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){y()}),[null]),a&&!u?n.a.createElement(v.a,{justify:"center"},n.a.createElement(b.a,{span:24,lg:12},Array(3).fill(null).map((function(){return n.a.createElement(h.a,{key:g()("skeleton"),style:{marginBottom:"1em"}},n.a.createElement(w.a,{avatar:!0,paragraph:{rows:4}}))})))):n.a.createElement(n.a.Fragment,null,i.map((function(e){return n.a.createElement(X,{track:e})})))},ee=a(481),te=a(48),ae=a.n(te),re=a(74),ne=a.n(re),ce=a(476),le=a(475),oe=H.a.Text,ue=function(e){var t=e.albums,a=e.attr;return n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:ne()(t,0,10),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{title:n.a.createElement("a",{href:e.url},e["@attr"].rank,". ",e.name," - ",e.artist.name||e.artist["#text"]),avatar:e.image?n.a.createElement(le.a,{shape:"square",src:e.image.reverse()[0]["#text"]}):null,description:n.a.createElement(n.a.Fragment,null,"Played ",e.playcount," times. ")}))},footer:a.from&&a.to?n.a.createElement(oe,null,ae.a.unix(parseInt(a.from,10)).format("Do MMM, YYYY")," to ",ae.a.unix(parseInt(a.to,10)).format("Do MMM, YYYY")):null})},se=function(e){var t=e.weeklyAlbums,a=e.topAlbums,r=n.a.useState("weekly"),c=Object(o.a)(r,2),l=c[0],u=c[1],s=[{key:"weekly",tab:"This Week",component:n.a.createElement(ue,{albums:t.album,attr:t["@attr"]})},{key:"overall",tab:"Overall",component:n.a.createElement(ue,{albums:a.album,attr:a["@attr"]})}],m=s.find((function(e){return e.key===l}));return n.a.createElement(h.a,{title:"Top Albums",style:{marginBottom:"2em"},tabList:s,activeTabKey:l,onTabChange:u},m.component)},me=H.a.Text,ie=function(e){var t=e.artist,a=e.attr;return n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:ne()(t,0,10),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{title:n.a.createElement("a",{href:e.url},e["@attr"].rank,". ",e.name),avatar:e.image?n.a.createElement(le.a,{shape:"circle",src:e.image.reverse()[0]["#text"]}):null,description:n.a.createElement(n.a.Fragment,null,"Played ",e.playcount," times. ")}))},footer:a.from&&a.to?n.a.createElement(me,null,ae.a.unix(parseInt(a.from,10)).format("Do MMM, YYYY")," to ",ae.a.unix(parseInt(a.to,10)).format("Do MMM, YYYY")):null})},pe=function(e){var t=e.weeklyArtists,a=e.topArtists,r=n.a.useState("weekly"),c=Object(o.a)(r,2),l=c[0],u=c[1],s=[{key:"weekly",tab:"This Week",component:n.a.createElement(ie,{artist:t.artist,attr:t["@attr"]})},{key:"overall",tab:"Overall",component:n.a.createElement(ie,{artist:a.artist,attr:a["@attr"]})}],m=s.find((function(e){return e.key===l}));return n.a.createElement(h.a,{title:"Top Artists",style:{marginBottom:"2em"},tabList:s,activeTabKey:l,onTabChange:u},m.component)},fe=H.a.Text,ye=function(e){var t=e.track,a=e.attr;return n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:ne()(t,0,5),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{title:n.a.createElement("a",{href:e.url},e["@attr"]&&e["@attr"].rank?"".concat(e["@attr"].rank,". "):"",e.name," - ",e.artist.name||e.artist["#text"]),avatar:e.image?n.a.createElement(le.a,{shape:"square",src:e.image.reverse()[0]["#text"]}):null,description:e.playcount?n.a.createElement(n.a.Fragment,null,"Played ",e.playcount," times. "):n.a.createElement(n.a.Fragment,null,e.album["#text"]," - ",e.artist["#text"])}))},footer:a.from&&a.to?n.a.createElement(fe,null,ae.a.unix(parseInt(a.from,10)).format("Do MMM, YYYY")," to ",ae.a.unix(parseInt(a.to,10)).format("Do MMM, YYYY")):null})},Ee=function(e){var t=e.recentTracks,a=e.weeklyTracks,r=e.topTracks,c=n.a.useState("recent"),l=Object(o.a)(c,2),u=l[0],s=l[1],m=[{key:"recent",tab:"Recent",component:n.a.createElement(ye,{track:t.track,attr:t["@attr"]})},{key:"weekly",tab:"This Week",component:n.a.createElement(ye,{track:a.track,attr:a["@attr"]})},{key:"overall",tab:"Overall",component:n.a.createElement(ye,{track:r.track,attr:r["@attr"]})}],i=m.find((function(e){return e.key===u}));return n.a.createElement(h.a,{title:"Tracks",style:{marginBottom:"2em"},tabList:m,activeTabKey:u,onTabChange:s},i.component)},ke=function(){var e=n.a.useState(!0),t=Object(o.a)(e,2),a=t[0],r=t[1],c=n.a.useState(!1),l=Object(o.a)(c,2),u=l[0],s=(l[1],n.a.useState({})),m=Object(o.a)(s,2),i=m[0],p=m[1],f=_().user,y=function(){var e=Object(k.a)(E.a.mark((function e(){var t,a,n,c,l,u,s,m,i,y,k;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,Promise.all([L(f.name),P(f.name),D(f.name),J(f.name),W(f.name),N(f.name),U(f.name),F(f.name)]);case 3:t=e.sent,a=t.map((function(e){return e.data})),n=Object(o.a)(a,8),c=n[0].recenttracks,l=n[1].topalbums,u=n[2].topartists,s=n[3].toptracks,m=n[4].weeklyalbumchart,i=n[5].weeklyartistchart,y=n[6].weeklytrackchart,k=n[7].friends,p({recentTracks:c,topAlbums:l,topArtists:u,topTracks:s,weeklyAlbums:m,weeklyArtists:i,weeklyTracks:y,friends:k}),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(n.a.useEffect((function(){y()}),[null]),a&&!u)return n.a.createElement(v.a,{justify:"center"},n.a.createElement(b.a,{span:24,lg:12},Array(3).fill(null).map((function(){return n.a.createElement(h.a,{key:g()("skeleton"),style:{marginBottom:"1em"}},n.a.createElement(w.a,{avatar:!0,paragraph:{rows:4}}))}))));return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.a,{gutter:24,style:{marginBottom:"2em"}},n.a.createElement(b.a,{span:24},n.a.createElement(h.a,{title:"The Basics"},n.a.createElement(ee.a,{title:"Scrobbled Plays",value:f.playcount})))),n.a.createElement(v.a,{gutter:24},n.a.createElement(b.a,{span:24,lg:24},n.a.createElement(pe,{weeklyArtists:i.weeklyArtists,topArtists:i.topArtists})),n.a.createElement(b.a,{span:24,lg:24},n.a.createElement(se,{weeklyAlbums:i.weeklyAlbums,topAlbums:i.topAlbums}))),n.a.createElement(v.a,{gutter:24},n.a.createElement(b.a,{span:24,lg:12},n.a.createElement(Ee,{recentTracks:i.recentTracks,weeklyTracks:i.weeklyTracks,topTracks:i.topTracks}))))},de=function(e){e.user;return n.a.createElement(u.a,{mode:"light",rightContent:[n.a.createElement(le.a,{icon:n.a.createElement(s.a,null)})],style:{position:"fixed",top:0,left:0,width:"100vw"}},"Last.fm Gram")},ge=function(){var e=_().user,t=n.a.useState("feed"),a=Object(o.a)(t,2),r=a[0],c=a[1];return n.a.createElement("div",{style:{height:"100vh"}},n.a.createElement(u.b,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white"},n.a.createElement(u.b.Item,{title:"Timeline",key:"feed",icon:n.a.createElement(m.a,null),selectedIcon:n.a.createElement(i.a,null),selected:"feed"===r,onPress:function(){return c("feed")}},n.a.createElement(de,{user:e}),n.a.createElement("div",{style:{marginTop:"61px"}},n.a.createElement(Z,null))),n.a.createElement(u.b.Item,{title:"My Summary",key:"summary",icon:n.a.createElement(p.a,null),selectedIcon:n.a.createElement(f.a,null),selected:"summary"===r,onPress:function(){return c("summary")}},n.a.createElement(de,{user:e}),n.a.createElement("div",{style:{marginTop:"61px"}},n.a.createElement(ke,null)))))},ve=a(483),be=a(479),he=a(482),we=a(163),xe=function(){var e=n.a.useState(""),t=Object(o.a)(e,2),a=t[0],r=t[1],c=_().setUser,l=function(){var e=Object(k.a)(E.a.mark((function e(){var t,r,n,l,o,u,s,m;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(a);case 3:t=e.sent,r=t.data.user,n=r.playcount,l=r.name,o=r.url,u=r.country,c({playcount:n,name:l,url:o,country:u}),e.next=18;break;case 9:if(e.prev=9,e.t0=e.catch(0),!(s=e.t0.response)){e.next=17;break}if(!(m=s.data).message){e.next=17;break}return console.log(m.message),e.abrupt("return");case 17:console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(ve.a,null,n.a.createElement(v.a,{gutter:24,style:{height:"100vh"},justify:"center"},n.a.createElement(b.a,{span:12},n.a.createElement(h.a,{className:"App",title:"Last FM Grams",style:{marginTop:"2em"}},n.a.createElement(be.a.Item,{label:"Last.FM Username"},n.a.createElement(he.a,{value:a,onChange:function(e){var t=e.target;return r(t.value)}})),n.a.createElement(be.a.Item,null,n.a.createElement(we.a,{onClick:l,type:"primary"},"Setup"))))))};function Te(){return _().user?n.a.createElement(ge,null):n.a.createElement(xe,null)}var Oe=function(){return n.a.createElement($,null,n.a.createElement(Te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[240,1,2]]]);
//# sourceMappingURL=main.7263b25c.chunk.js.map