webpackJsonp([21],{433:function(l,n,t){"use strict";function e(l){return a._20(0,[(l()(),a._19(-1,null,["\n"])),(l()(),a.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),a.Y(2,16384,null,0,b.a,[f.a,a.j,a.z,[2,m.a]],null,null),(l()(),a._19(-1,null,["\n\n    "])),(l()(),a.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"],["color","primary"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,w.b,w.a)),a.Y(5,49152,null,0,y.a,[P.a,[2,m.a],[2,j.a],f.a,a.j,a.z],{color:[0,"color"]},null),(l()(),a._19(-1,3,["\n        "])),(l()(),a.Z(7,0,null,3,2,"ion-title",[],null,null,null,Y.b,Y.a)),a.Y(8,49152,null,0,Z.a,[f.a,a.j,a.z,[2,z.a],[2,y.a]],null,null),(l()(),a._19(9,0,["",""])),(l()(),a._19(-1,3,["\n    "])),(l()(),a._19(-1,null,["\n\n"])),(l()(),a._19(-1,null,["\n\n\n"])),(l()(),a.Z(13,0,null,null,9,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,E.b,E.a)),a.Y(14,4374528,null,0,D.a,[f.a,I.a,S.a,a.j,a.z,P.a,T.a,a.u,[2,m.a],[2,j.a]],null,null),(l()(),a._19(-1,1,["\n\n    "])),(l()(),a.Z(16,0,null,1,5,"ion-grid",[["class","grid"]],null,null,null,null,null)),a.Y(17,16384,null,0,V.a,[],null,null),(l()(),a._19(-1,null,["\n\n        "])),(l()(),a._19(-1,null,["\n         "])),(l()(),a.Z(20,0,null,null,0,"iframe",[["allowfullscreen",""],["frameborder","0"],["height","315"],["style","margin-top: 30%"]],[[8,"src",5]],null,null,null,null)),(l()(),a._19(-1,null,["\n    "])),(l()(),a._19(-1,1,["\n"])),(l()(),a._19(-1,null,["\n"]))],function(l,n){l(n,5,0,"primary")},function(l,n){var t=n.component;l(n,4,0,a._11(n,5)._hidden,a._11(n,5)._sbPadding);l(n,9,0,t.name);l(n,13,0,a._11(n,14).statusbarPadding,a._11(n,14)._hasRefresher);l(n,20,0,t.trustedVideoUrl)})}Object.defineProperty(n,"__esModule",{value:!0});var a=t(0),i=(t(1),t(21),t(34)),u=function(){function l(l,n,t){this.navCtrl=l,this.navParams=n,this.sanitizer=t,this.title=n.data.title,console.log("title123",this.title),this.title=n.data.TYPE,this.name=n.data.NAME,this.date=n.data.DATE,this.description=n.data.DESCRIPTION,this.vedio=n.data.VIDEO,this.videotemp=this.vedio.split("/"),console.log("video code",this.videotemp),this.videourl="https://www.youtube.com/embed/"+this.videotemp[this.videotemp.length-1],console.log("final url",this.videourl),console.log("title",this.title),console.log("name",this.name),console.log("description",this.description),console.log("date",this.date),console.log("vedio",this.vedio),this.Selectedvedio=n.data.ID,console.log("MainId",this.Selectedvedio)}return l.prototype.ionViewDidLoad=function(){this.trustedVideoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(this.videourl),this.title=this.navParams.data.TYPE,console.log("mainarray",this.title)},l}(),o=function(){return function(){}}(),s=t(258),r=t(259),d=t(260),c=t(261),h=t(262),_=t(263),v=t(264),p=t(265),g=t(266),b=t(69),f=t(2),m=t(6),w=t(156),y=t(33),P=t(11),j=t(22),Y=t(268),Z=t(70),z=t(53),E=t(267),D=t(31),I=t(5),S=t(12),T=t(37),V=t(167),k=t(14),M=a.X({encapsulation:2,styles:[],data:{}}),N=a.V("page-webview",u,function(l){return a._20(0,[(l()(),a.Z(0,0,null,null,1,"page-webview",[],null,null,null,e,M)),a.Y(1,49152,null,0,u,[j.a,k.a,i.c],null,null)],null,null)},{},{},[]),O=t(16),R=t(26),U=t(155),A=t(54);t.d(n,"WebviewPageModuleNgFactory",function(){return C});var C=a.W(o,[],function(l){return a._7([a._8(512,a.i,a.S,[[8,[s.a,r.a,d.a,c.a,h.a,_.a,v.a,p.a,g.a,N]],[3,a.i],a.s]),a._8(4608,O.k,O.j,[a.r,[2,O.s]]),a._8(4608,R.k,R.k,[]),a._8(4608,R.c,R.c,[]),a._8(512,O.b,O.b,[]),a._8(512,R.j,R.j,[]),a._8(512,R.d,R.d,[]),a._8(512,R.i,R.i,[]),a._8(512,U.a,U.a,[]),a._8(512,U.b,U.b,[]),a._8(512,o,o,[]),a._8(256,A.a,u,[])])})}});