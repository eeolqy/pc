webpackJsonp([4],{JmVx:function(n,t){},NHnr:function(n,t,e){"use strict";function o(n){e("mv9m")}Object.defineProperty(t,"__esModule",{value:!0});var r=e("X6yQ"),u=e("dXqY"),c={count:0},a={username:function(n){return n.count+"getters"}},l={add:function(n,t){n.count=n.count+t}},i={addAction:function(n){n.commit;console.log(arguments),console.log("actions")}},p={state:c,getters:a,mutations:l,actions:i};r.default.use(u.a);var s={root:"root",scrollTop:0},m={changeScrollTop:function(n,t){n.scrollTop=t}},d={changeScrollTopAction:function(n,t){(0,n.commit)("changeScrollTop",t)}},f=new u.a.Store({state:s,mutations:m,actions:d,modules:{user:p}}),h=f,b={name:"app",computed:{root:function(){return this.$store.state.root}},created:function(){}},g=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"app",attrs:{id:"app"}},[e("router-view")],1)},v=[],T={render:g,staticRenderFns:v},w=T,x=e("kgPM"),y=o,A=x(b,w,!1,y,null,null),N=A.exports,O=e("byqf"),S=function(){return e.e(2).then(e.bind(null,"z06N"))},_=function(){return e.e(2).then(e.bind(null,"mFGN"))},J=function(){return e.e(1).then(e.bind(null,"ZOnL"))},V=function(){return e.e(1).then(e.bind(null,"V7Ov"))},Z=function(){return e.e(0).then(e.bind(null,"Cfm5"))},k=function(){return e.e(0).then(e.bind(null,"Q/EW"))},q=function(){return e.e(0).then(e.bind(null,"0xO6"))},C=function(){return e.e(0).then(e.bind(null,"lpZL"))};r.default.use(O.a);var E=new O.a({routes:[{path:"/a",name:"routera",component:S},{path:"/b",name:"routerb",component:_},{path:"/c",name:"routerc",component:J,children:[{path:"/d",name:"routerd",component:V},{path:"/e",name:"routere",component:Z}]},{path:"/f",name:"routerf",component:k},{path:"/",name:"list",component:q},{path:"/detail",name:"detail",component:C}],scrollBehavior:function(n,t,e){return console.log(n),console.log(t),console.log(e),{x:100,y:400}}}),F=e("n51Z"),H=e.n(F);e("JmVx");r.default.use(H.a),r.default.config.productionTip=!1,new r.default({el:"#app",router:E,store:h,template:"<App/>",components:{App:N}})},mv9m:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.00ba3ff7ae8bd718a81f.js.map