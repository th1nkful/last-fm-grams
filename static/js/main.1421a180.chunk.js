(this["webpackJsonplast-fm-grams"]=this["webpackJsonplast-fm-grams"]||[]).push([[0],{232:function(e,t,a){e.exports=a(442)},237:function(e,t,a){},238:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(7),l=a.n(c),s=(a(237),a(84)),o=(a(238),a(47)),u=a(445),m=a(452),i=a(444),p=a(454),f=a(69),E=a(31),y=a(455),g=a(456),d=a(13),k=a.n(d),h=a(29),v=a(23),b=a(105),w=a.n(b),x=a(447),I=a(450),M=a(161),T=a(203),Y=a.n(T),j=a(204),O=a.n(j),S=a(205),A=a.n(S),B=a(231),F=function(e,t){var a={},r=null,n=0;return e.forEach((function(e){e[t]!==r&&(n+=1,r=e[t],a["".concat(n,".").concat(r)]=Object(B.a)({},e,{key:r,items:[e]})),a["".concat(n,".").concat(r)].items.push(e)})),Object.values(a)},L=Y.a.create({baseURL:"https://ws.audioscrobbler.com/2.0"});L.interceptors.request.use((function(e){return e.params=e.params||{},e.params.api_key="cd948c3e719c7c938523be6bcea7300a",e.params.format="json",e}));var P=function(e){return L.get("/?method=user.getinfo&user=".concat(e))},z=function(e){return L.get("/?method=user.getfriends&user=".concat(e))},D=function(e){return L.get("/?method=user.getrecenttracks&user=".concat(e))},C=function(e){return L.get("/?method=user.gettopalbums&user=".concat(e))},J=function(e){return L.get("/?method=user.gettopartists&user=".concat(e))},W=function(e){return L.get("/?method=user.gettoptracks&user=".concat(e))},N=function(e){return L.get("/?method=user.getweeklyalbumchart&user=".concat(e))},U=function(e){return L.get("/?method=user.getweeklyartistchart&user=".concat(e))},q=function(e){return L.get("/?method=user.getweeklytrackchart&user=".concat(e))},G=function(e){var t=e.reverse();return Object(v.a)(t,1)[0]},H=function(e){return e["#text"]||e},R=function(e,t){return e.map((function(e){var a=e.artist,r=e.album,n=e.name,c=e.mbid,l=e.url,s=e.date,o=e.image;return{artist:H(a),album:H(r),name:n,mbid:c,url:l,date:H(s),image:H(G(o)),user:t}}))},K=function(){var e=Object(h.a)(k.a.mark((function e(t){var a,r,n,c,l;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:return a=e.sent,r=a.data.friends.user,n=[t].concat(Object(M.a)(r.map((function(e){return e.name})))),e.next=7,Promise.all(n.map(function(){var e=Object(h.a)(k.a.mark((function e(t){var a,r,n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(t);case 2:return a=e.sent,r=a.data,n=r.recenttracks.track,e.abrupt("return",F(R(n,t),"album"));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 7:return c=e.sent,l=O()(A.a.apply(void 0,Object(M.a)(c)),["date"],["desc"]),e.abrupt("return",{data:l});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=n.a.createContext(void 0),_=function(e){var t=e.children,a=n.a.useState(void 0),r=Object(v.a)(a,2),c=r[0],l=r[1],s={user:c,setUser:function(e){localStorage.setItem("user",JSON.stringify(c)),l(e)}},o=function(){var e=Object(h.a)(k.a.mark((function e(){var t,a,r,n,s,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,P(c.name);case 4:t=e.sent,a=t.data.user,r=a.playcount,n=a.name,s=a.url,o=a.country,l({playcount:r,name:n,url:s,country:o});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){if(void 0===c){var e=localStorage.getItem("user");if(e)try{return l(JSON.parse(e)),void o()}catch(t){return void l(void 0)}}else localStorage.setItem("user",JSON.stringify(c))}),[c]),n.a.createElement($.Provider,{value:s},t)},Q=function(){return n.a.useContext($)},V=a(448),X=V.a.Title,Z=V.a.Text,ee=function(e){var t=e.track;return n.a.createElement(f.a,{justify:"center",key:"".concat(t.user,".").concat(t.date)},n.a.createElement(E.a,{span:24,lg:12},n.a.createElement(x.a,{style:{marginBottom:"1em"},cover:n.a.createElement("img",{alt:"".concat(t.artist," - ").concat(t.album," - ").concat(t.name),src:t.image})},n.a.createElement(x.a.Meta,{title:n.a.createElement(n.a.Fragment,null,n.a.createElement(X,{level:4,style:{display:"block",marginBottom:"0"}},t.key||t.name),t.key?n.a.createElement(Z,{style:{display:"block"},strong:!0},t.artist):n.a.createElement(n.a.Fragment,null,n.a.createElement(Z,{style:{display:"block"},type:"secondary"},t.album),n.a.createElement(Z,{style:{display:"block"},strong:!0},t.artist)))}),n.a.createElement("div",{style:{marginTop:"1em"}},n.a.createElement(f.a,null,n.a.createElement(E.a,{span:12},n.a.createElement(Z,{strong:!0},t.user)),n.a.createElement(E.a,{span:12,style:{textAlign:"right"}},n.a.createElement(Z,{type:"secondary"},"Played at ",t.date)))))))},te=function(){var e=n.a.useState(!1),t=Object(v.a)(e,2),a=t[0],r=t[1],c=n.a.useState([]),l=Object(v.a)(c,2),s=l[0],o=l[1],u=Q().user,m=function(){var e=Object(h.a)(k.a.mark((function e(){var t,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,K(u.name);case 3:t=e.sent,a=t.data,o(a),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){m()}),[null]),a?n.a.createElement(f.a,{justify:"center"},n.a.createElement(E.a,{span:24,lg:12},Array(3).fill(null).map((function(){return n.a.createElement(x.a,{key:w()("skeleton"),style:{marginBottom:"1em"}},n.a.createElement(I.a,{avatar:!0,paragraph:{rows:4}}))})))):n.a.createElement(n.a.Fragment,null,s.map((function(e){return n.a.createElement(ee,{track:e})})))},ae=a(87),re=a.n(ae),ne=a(451),ce=a(446),le=a(54),se=a.n(le),oe=V.a.Text,ue=function(){var e=n.a.useState(!0),t=Object(v.a)(e,2),a=t[0],r=t[1],c=n.a.useState({}),l=Object(v.a)(c,2),s=l[0],o=l[1],u=Q().user;console.log(u);var m=function(){var e=Object(h.a)(k.a.mark((function e(){var t,a,n,c,l,s,m,i,p,f,E;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),e.next=3,Promise.all([D(u.name),C(u.name),J(u.name),W(u.name),N(u.name),U(u.name),q(u.name),z(u.name)]);case 3:t=e.sent,a=t.map((function(e){return e.data})),n=Object(v.a)(a,8),c=n[0].recenttracks,l=n[1].topalbums,s=n[2].topartists,m=n[3].toptracks,i=n[4].weeklyalbumchart,p=n[5].weeklyartistchart,f=n[6].weeklytrackchart,E=n[7].friends,o({recentTracks:c,topAlbums:l,topArtists:s,topTracks:m,weeklyAlbums:i,weeklyArtists:p,weeklyTracks:f,friends:E}),r(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return n.a.useEffect((function(){m()}),[null]),a?n.a.createElement(f.a,{justify:"center"},n.a.createElement(E.a,{span:24,lg:12},Array(3).fill(null).map((function(){return n.a.createElement(x.a,{key:w()("skeleton"),style:{marginBottom:"1em"}},n.a.createElement(I.a,{avatar:!0,paragraph:{rows:4}}))})))):(console.log(s),n.a.createElement("div",{style:{margin:"2em"}},n.a.createElement(f.a,{gutter:24,style:{marginBottom:"2em"}},n.a.createElement(E.a,{span:24},n.a.createElement(x.a,{title:"The Basics"},n.a.createElement(ne.a,{title:"Scrobbled Plays",value:u.playcount})))),n.a.createElement(f.a,{gutter:24},n.a.createElement(E.a,{span:24,lg:24},n.a.createElement(x.a,{title:"Top Artists (This Week)",style:{marginBottom:"2em"}},n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:re()(s.weeklyArtists.artist,0,5),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{title:n.a.createElement("a",{href:e.url},e["@attr"].rank,". ",e.name),description:n.a.createElement(n.a.Fragment,null,"Played ",e.playcount," times. ")}))},footer:n.a.createElement(oe,null,se.a.unix(parseInt(s.weeklyArtists["@attr"].from,10)).format("Do MMM, YYYY")," to ",se.a.unix(parseInt(s.weeklyArtists["@attr"].to,10)).format("Do MMM, YYYY"))}))),n.a.createElement(E.a,{span:24,lg:24},n.a.createElement(x.a,{title:"Top Artists (This Week)",style:{marginBottom:"2em"}},n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:re()(s.weeklyAlbums.album,0,5),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{title:n.a.createElement("a",{href:e.url},e["@attr"].rank,". ",e.name," - ",e.artist["#text"]),description:n.a.createElement(n.a.Fragment,null,"Played ",e.playcount," times. ")}))},footer:n.a.createElement(oe,null,se.a.unix(parseInt(s.weeklyAlbums["@attr"].from,10)).format("Do MMM, YYYY")," to ",se.a.unix(parseInt(s.weeklyAlbums["@attr"].to,10)).format("Do MMM, YYYY"))})))),n.a.createElement(f.a,{gutter:24},n.a.createElement(E.a,{span:24,lg:12},n.a.createElement(x.a,{title:"Top Tracks (This Week)",style:{marginBottom:"2em"}},n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:re()(s.weeklyTracks.track,0,5),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{avatar:n.a.createElement(i.a,{shape:"square",src:e.image.reverse()[0]["#text"]}),title:n.a.createElement("a",{href:e.url},e["@attr"].rank,". ",e.name," - ",e.artist["#text"]),description:n.a.createElement(n.a.Fragment,null,"Played ",e.playcount," times.")}))},footer:n.a.createElement(oe,null,se.a.unix(parseInt(s.weeklyTracks["@attr"].from,10)).format("Do MMM, YYYY")," to ",se.a.unix(parseInt(s.weeklyTracks["@attr"].to,10)).format("Do MMM, YYYY"))}))),n.a.createElement(E.a,{span:24,lg:12},n.a.createElement(x.a,{title:"Recent Tracks",style:{marginBottom:"2em"}},n.a.createElement(ce.a,{itemLayout:"horizontal",dataSource:re()(s.recentTracks.track,0,5),renderItem:function(e){return n.a.createElement(ce.a.Item,null,n.a.createElement(ce.a.Item.Meta,{avatar:n.a.createElement(i.a,{shape:"square",src:e.image.reverse()[0]["#text"]}),title:n.a.createElement("a",{href:e.url},e.name),description:n.a.createElement(n.a.Fragment,null,e.album["#text"]," - ",e.artist["#text"])}))}}))))))},me=function(){var e=Q().user;return n.a.createElement(u.a,{style:{minHeight:"100vh"}},n.a.createElement(u.a.Header,{style:{padding:"0 1em",position:"fixed",zIndex:1,width:"100%"}},n.a.createElement(m.a,{mode:"horizontal",theme:"dark",defaultSelectedKeys:["1"]},n.a.createElement(m.a.Item,{key:"0"},n.a.createElement("span",{style:{color:"#fff"}},"Last.fm Grams")),n.a.createElement(m.a.Item,{key:"1"},n.a.createElement(s.b,{to:"/"},n.a.createElement(y.a,null),n.a.createElement("span",null,"Timeline"))),n.a.createElement(m.a.Item,{key:"2"},n.a.createElement(s.b,{to:"/my-summary"},n.a.createElement(g.a,null),n.a.createElement("span",null,"My Summary"))),n.a.createElement(m.a.Item,{key:"3",style:{float:"right"}},n.a.createElement(i.a,{size:"large",icon:n.a.createElement(g.a,null)}),n.a.createElement("span",{style:{margin:"0 .5em",color:"#fff"}},e.name),n.a.createElement(p.a,{color:"geekblue"},e.playcount," plays")))),n.a.createElement(u.a,null,n.a.createElement(u.a.Content,{style:{marginTop:"64px"}},n.a.createElement(f.a,{gutter:24,style:{marginTop:"2em"}},n.a.createElement(E.a,{span:24},n.a.createElement(o.c,null,n.a.createElement(o.a,{path:"/my-summary",component:ue}),n.a.createElement(o.a,{path:"/",exact:!0,component:te})))))))},ie=a(449),pe=a(453),fe=a(160),Ee=function(){var e=n.a.useState(""),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Q().setUser,l=function(){var e=Object(h.a)(k.a.mark((function e(){var t,r,n,l,s,o,u,m;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(a);case 3:t=e.sent,r=t.data.user,n=r.playcount,l=r.name,s=r.url,o=r.country,c({playcount:n,name:l,url:s,country:o}),e.next=18;break;case 9:if(e.prev=9,e.t0=e.catch(0),!(u=e.t0.response)){e.next=17;break}if(!(m=u.data).message){e.next=17;break}return console.log(m.message),e.abrupt("return");case 17:console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return n.a.createElement(u.a,null,n.a.createElement(f.a,{gutter:24,style:{height:"100vh"},justify:"center"},n.a.createElement(E.a,{span:12},n.a.createElement(x.a,{className:"App",title:"Last FM Grams",style:{marginTop:"2em"}},n.a.createElement(ie.a.Item,{label:"Last.FM Username"},n.a.createElement(pe.a,{value:a,onChange:function(e){var t=e.target;return r(t.value)}})),n.a.createElement(ie.a.Item,null,n.a.createElement(fe.a,{onClick:l,type:"primary"},"Setup"))))))};function ye(){return Q().user?n.a.createElement(me,null):n.a.createElement(Ee,null)}var ge=function(){return n.a.createElement(_,null,n.a.createElement(s.a,{basename:"/"},n.a.createElement(ye,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[232,1,2]]]);
//# sourceMappingURL=main.1421a180.chunk.js.map