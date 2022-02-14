"use strict";(self.webpackChunkfireERP=self.webpackChunkfireERP||[]).push([[658],{8658:(me,Z,l)=>{l.r(Z),l.d(Z,{MovieModule:()=>le});var I=l(4977),d=l(1402),_=l(6087),T=l(4847),m=l(4999),x=l(8746),e=l(5e3),C=l(1953),c=l(520),q=l(9646),M=l(4004),F=l(1005),p=l(2340);let g=(()=>{class o{constructor(t,a){this.handler=t,this.http=a,this.http=new c.eN(t)}list(t){let a=new c.LE;return a=a.append("api_key",`${p.N.movieDB.client_secret}`),a=a.append("language","en-US"),a=a.append("page",String(t+1)),this.http.get(`${p.N.movieDB.host}/movie/now_playing`,{params:a}).pipe((0,M.U)(n=>(n.page=n.page-1,n)))}get(t){let a=new c.LE;return a=a.append("api_key",`${p.N.movieDB.client_secret}`),a=a.append("language","en-US"),this.http.get(`${p.N.movieDB.host}/movie/${t}`,{params:a}).pipe((0,M.U)(n=>(console.log(n),n)))}delete(t){return(0,q.of)("Movie was deleted").pipe((0,F.g)(500))}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(c.jN),e.LFG(c.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac}),o})();var A=l(7423),b=l(5245),y=l(4841),u=l(7093),U=l(3322),v=l(9808);function S(o,i){1&o&&(e.TgZ(0,"mat-header-cell",25),e._uU(1," Title "),e.qZA())}function L(o,i){if(1&o&&(e.TgZ(0,"mat-cell",25),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",t.title," ")}}function k(o,i){1&o&&(e.TgZ(0,"mat-header-cell"),e._uU(1," Overview "),e.qZA())}function Y(o,i){if(1&o&&(e.TgZ(0,"mat-cell"),e._uU(1),e.ALo(2,"slice"),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",e.Dn7(2,1,t.overview,0,50)," ")}}function H(o,i){1&o&&(e.TgZ(0,"mat-header-cell",26),e._uU(1," Popularity "),e.qZA())}function B(o,i){if(1&o&&(e.TgZ(0,"mat-cell",26),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",t.popularity," ")}}function J(o,i){1&o&&(e.TgZ(0,"mat-header-cell",26),e._uU(1," Vote average "),e.qZA())}function E(o,i){if(1&o&&(e.TgZ(0,"mat-cell",26),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",t.vote_average," ")}}function Q(o,i){1&o&&(e.TgZ(0,"mat-header-cell",27),e._uU(1," Release date "),e.qZA())}function R(o,i){if(1&o&&(e.TgZ(0,"mat-cell",27),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.hij(" ",t.release_date," ")}}function O(o,i){1&o&&e._UZ(0,"mat-header-row")}function G(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"mat-row",28),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().onMovieDetailNavigate(s)}),e.qZA()}}let N=(()=>{class o{constructor(t,a,n,s){this.loadingBackdropService=t,this.movieService=a,this.route=n,this.router=s,this.dataSource=new m.by,this.displayedColumns=["title","overview","popularity","vote_average","release_date"]}ngOnInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.loadMovies()}loadMovies(t){const a=t?t.pageIndex:0;this.loadingBackdropService.show(),this.movieService.list(a).pipe((0,x.x)(()=>this.loadingBackdropService.hide())).subscribe(n=>{this.dataSource.data=n.results,setTimeout(()=>{this.dataSource.paginator&&(this.dataSource.paginator.length=n.total_results,this.dataSource.paginator.pageIndex=n.page,this.dataSource.paginator.pageSize=20)})})}onCustomerAddNavigate(){this.router.navigate(["new"],{relativeTo:this.route})}onMovieDetailNavigate(t){this.router.navigate([t.id],{relativeTo:this.route})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(C.C),e.Y36(g),e.Y36(d.gz),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-movie-list"]],viewQuery:function(t,a){if(1&t&&(e.Gf(T.YE,7),e.Gf(_.NW,7)),2&t){let n;e.iGM(n=e.CRH())&&(a.sort=n.first),e.iGM(n=e.CRH())&&(a.paginator=n.first)}},decls:41,vars:7,consts:[[1,"carded"],[1,"top-bg","accent"],[1,"center"],[1,"header","accent"],["type","button","mat-raised-button","",1,"u-margin-l-8"],["type","button","mat-raised-button","",1,"u-margin-l-8",3,"click"],[1,"content-card"],["matSort","",1,"vertical-fit",3,"dataSource"],["matColumnDef","title"],["fxFlex","25",4,"matHeaderCellDef"],["fxFlex","25",4,"matCellDef"],["matColumnDef","overview"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","popularity"],["fxFlex","10","fxFlex.lt-md","15","fxHide.lt-sm","",4,"matHeaderCellDef"],["fxFlex","10","fxFlex.lt-md","15","fxHide.lt-sm","",4,"matCellDef"],["matColumnDef","vote_average"],["matColumnDef","release_date"],["fxFlex","15","fxHide.lt-md","",4,"matHeaderCellDef"],["fxFlex","15","fxHide.lt-md","",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],[3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"length","pageIndex","pageSize","page"],["paginator",""],["fxFlex","25"],["fxFlex","10","fxFlex.lt-md","15","fxHide.lt-sm",""],["fxFlex","15","fxHide.lt-md",""],[3,"click"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h2"),e._uU(5,"Movies"),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"button",4),e.TgZ(8,"mat-icon"),e._uU(9,"delete"),e.qZA(),e._uU(10,"DELETE "),e.qZA(),e.TgZ(11,"button",4),e.TgZ(12,"mat-icon"),e._uU(13,"edit"),e.qZA(),e._uU(14,"EDIT "),e.qZA(),e.TgZ(15,"button",5),e.NdJ("click",function(){return a.onCustomerAddNavigate()}),e.TgZ(16,"mat-icon"),e._uU(17,"add"),e.qZA(),e._uU(18,"ADD "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(19,"div",6),e.TgZ(20,"perfect-scrollbar"),e.TgZ(21,"mat-table",7),e.ynx(22,8),e.YNc(23,S,2,0,"mat-header-cell",9),e.YNc(24,L,2,1,"mat-cell",10),e.BQk(),e.ynx(25,11),e.YNc(26,k,2,0,"mat-header-cell",12),e.YNc(27,Y,3,5,"mat-cell",13),e.BQk(),e.ynx(28,14),e.YNc(29,H,2,0,"mat-header-cell",15),e.YNc(30,B,2,1,"mat-cell",16),e.BQk(),e.ynx(31,17),e.YNc(32,J,2,0,"mat-header-cell",15),e.YNc(33,E,2,1,"mat-cell",16),e.BQk(),e.ynx(34,18),e.YNc(35,Q,2,0,"mat-header-cell",19),e.YNc(36,R,2,1,"mat-cell",20),e.BQk(),e.YNc(37,O,1,0,"mat-header-row",21),e.YNc(38,G,1,0,"mat-row",22),e.qZA(),e.qZA(),e.TgZ(39,"mat-paginator",23,24),e.NdJ("page",function(s){return a.loadMovies(s)}),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(21),e.Q6J("dataSource",a.dataSource),e.xp6(16),e.Q6J("matHeaderRowDef",a.displayedColumns)("matHeaderRowDefSticky",!0),e.xp6(1),e.Q6J("matRowDefColumns",a.displayedColumns),e.xp6(1),e.Q6J("length",0)("pageIndex",0)("pageSize",0))},directives:[A.lW,b.Hw,y.Vv,m.BZ,T.YE,m.w1,m.fO,m.ge,u.yH,m.Dz,m.ev,U.b8,m.as,m.XQ,m.nj,m.Gk,_.NW],pipes:[v.OU],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),o})();var r=l(3075),$=l(5177),z=l(8966),W=l(7261),w=l(3251),P=l(7322),V=l(7531),f=l(6688);function X(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw().addMovie()}),e.TgZ(1,"span"),e._uU(2,"ADD"),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.movieForm.invalid)}}function K(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw().saveMovie()}),e.TgZ(1,"span"),e._uU(2,"SAVE"),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.Q6J("disabled",t.movieForm.invalid||t.movieForm.pristine)}}function ee(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){return e.CHM(t),e.oxw().confirmDeleteMovie()}),e.TgZ(1,"span"),e._uU(2,"DELETE"),e.qZA(),e.qZA()}}function te(o,i){if(1&o&&(e.TgZ(0,"mat-chip"),e._uU(1),e.qZA()),2&o){const t=i.$implicit;e.xp6(1),e.Oqu(t.name)}}const oe=function(){return{standalone:!0}};function ae(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"div",35),e._UZ(1,"img",36),e.TgZ(2,"div",37),e.TgZ(3,"mat-form-field",12),e.TgZ(4,"input",38),e.NdJ("ngModelChange",function(n){return e.CHM(t),e.oxw().movie.belongs_to_collection.name=n}),e.qZA(),e.qZA(),e.TgZ(5,"mat-form-field",12),e.TgZ(6,"textarea",39),e._uU(7,"                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos fugiat earum, facere numquam cupiditate impedit iusto obcaecati reiciendis eos vitae minima molestiae beatae illo debitis nihil modi nam sunt omnis sit, dolorem quas consequuntur explicabo tempore? Reprehenderit eos provident vero rem illum, autem illo cum aliquid iste facere architecto quibusdam.\n                                        "),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();e.xp6(1),e.MGl("src","https://image.tmdb.org/t/p/w200/",t.movie.belongs_to_collection.poster_path,"",e.LSH),e.xp6(3),e.Q6J("ngModel",t.movie.belongs_to_collection.name)("ngModelOptions",e.DdM(3,oe))}}let h=(()=>{class o{constructor(t,a,n,s,D,re){this.dialog=t,this.loadingBackdropService=a,this.movieService=n,this.snackBar=s,this.route=D,this.router=re,this.initFormBuilder()}ngOnInit(){this.movieId=this.route.snapshot.params.id,this.movieId?(this.pageType="edit",this.loadingBackdropService.show(),this.movieService.get(this.movieId).pipe((0,x.x)(()=>this.loadingBackdropService.hide())).subscribe(t=>this.loadFormData(t),t=>{})):this.pageType="new",this.showMockedFeaturesWarning()}ngOnDestroy(){this.snackBar.dismiss()}navigateToListPage(){this.router.navigate([".."],{relativeTo:this.route})}addMovie(){this.showMockedFeaturesWarning()}saveMovie(){this.showMockedFeaturesWarning()}confirmDeleteMovie(){this.dialog.open($.$,{data:{title:"Confirm",body:"Are you sure you want to delete this movie?"}}).afterClosed().subscribe(a=>{a&&this.deleteMovie()})}initFormBuilder(){this.movieForm=new r.cw({adult:new r.NI({value:null,disabled:!1}),backdrop_path:new r.NI({value:null,disabled:!1}),budget:new r.NI({value:null,disabled:!1}),homepage:new r.NI({value:null,disabled:!1}),original_language:new r.NI({value:null,disabled:!1}),original_title:new r.NI({value:null,disabled:!1}),overview:new r.NI({value:null,disabled:!1}),popularity:new r.NI({value:null,disabled:!1}),poster_path:new r.NI({value:null,disabled:!1}),release_date:new r.NI({value:null,disabled:!1}),title:new r.NI({value:null,disabled:!1},r.kI.required),video:new r.NI({value:null,disabled:!1}),vote_average:new r.NI({value:null,disabled:!1}),vote_count:new r.NI({value:null,disabled:!1})})}loadFormData(t){this.movie=t,this.movieForm.setValue({adult:t.adult,backdrop_path:t.backdrop_path,budget:t.budget,homepage:t.homepage,original_language:t.original_language,original_title:t.original_title,overview:t.overview,popularity:t.popularity,poster_path:t.poster_path,release_date:t.release_date,title:t.title,video:t.video,vote_count:t.vote_count,vote_average:t.vote_average})}deleteMovie(){this.deleteSuscription=this.movieService.delete(this.movieId).subscribe(()=>{this.showMockedFeaturesWarning()})}showMockedFeaturesWarning(){this.snackBar.open('This module is build with "The Movie Database API" and write methods are not available. Check user module to see all features in action.',"OK",{duration:1e4})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(z.uw),e.Y36(C.C),e.Y36(g),e.Y36(W.ux),e.Y36(d.gz),e.Y36(d.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-movie-detail"]],decls:58,vars:8,consts:[[1,"carded"],[1,"top-bg","accent"],[1,"center"],[1,"header","accent"],["mat-icon-button","",3,"click"],["type","button","mat-raised-button","","class","u-margin-l-8",3,"disabled","click",4,"ngIf"],["type","button","mat-raised-button","","class","u-margin-l-8",3,"click",4,"ngIf"],[1,"content-card"],[1,"vertical-fit",3,"formGroup"],["selectedIndex","0"],["label","Basic Information"],[1,"u-padding-16"],[2,"width","100%"],["matInput","","placeholder","adult","type","text","formControlName","adult"],["matInput","","placeholder","backdrop_path","type","text","formControlName","backdrop_path"],["matInput","","placeholder","budget","type","text","formControlName","budget"],["aria-label","Fruit selection"],["chipList",""],[4,"ngFor","ngForOf"],["placeholder","genres",3,"matChipInputFor"],["matInput","","placeholder","homepage","type","text","formControlName","homepage"],["matInput","","placeholder","original_language","type","text","formControlName","original_language"],["matInput","","placeholder","original_title","type","text","formControlName","original_title"],["matInput","","placeholder","overview","type","text","formControlName","overview"],["matInput","","placeholder","popularity","type","text","formControlName","popularity"],["matInput","","placeholder","poster_path","type","text","formControlName","poster_path"],["matInput","","placeholder","release_date","type","text","formControlName","release_date"],["matInput","","placeholder","title","type","text","formControlName","title"],["matInput","","placeholder","video","type","text","formControlName","video"],["matInput","","placeholder","vote_average","type","text","formControlName","vote_average"],["matInput","","placeholder","vote_count","type","text","formControlName","vote_count"],["label","Collection"],["class","u-padding-16","fxLayout","row","fxLayoutGap","16px",4,"ngIf"],["type","button","mat-raised-button","",1,"u-margin-l-8",3,"disabled","click"],["type","button","mat-raised-button","",1,"u-margin-l-8",3,"click"],["fxLayout","row","fxLayoutGap","16px",1,"u-padding-16"],["alt","poster_path",3,"src"],["fxLayout","column","fxFlex",""],["matInput","","placeholder","Name","type","text",3,"ngModel","ngModelOptions","ngModelChange"],["matInput","","placeholder","Coments","rows","7"]],template:function(t,a){if(1&t&&(e.TgZ(0,"div",0),e._UZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"div"),e.TgZ(5,"button",4),e.NdJ("click",function(){return a.navigateToListPage()}),e.TgZ(6,"mat-icon"),e._uU(7,"arrow_back"),e.qZA(),e.qZA(),e.TgZ(8,"div"),e.TgZ(9,"h2"),e._uU(10),e.qZA(),e.TgZ(11,"p"),e._uU(12,"Movie Detail"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div"),e.YNc(14,X,3,1,"button",5),e.YNc(15,K,3,1,"button",5),e.YNc(16,ee,3,0,"button",6),e.qZA(),e.qZA(),e.TgZ(17,"perfect-scrollbar",7),e.TgZ(18,"form",8),e.TgZ(19,"fieldset"),e.TgZ(20,"mat-tab-group",9),e.TgZ(21,"mat-tab",10),e.TgZ(22,"div",11),e.TgZ(23,"mat-form-field",12),e._UZ(24,"input",13),e.qZA(),e.TgZ(25,"mat-form-field",12),e._UZ(26,"input",14),e.qZA(),e.TgZ(27,"mat-form-field",12),e._UZ(28,"input",15),e.qZA(),e.TgZ(29,"mat-form-field",12),e.TgZ(30,"mat-chip-list",16,17),e.YNc(32,te,2,1,"mat-chip",18),e._UZ(33,"input",19),e.qZA(),e.qZA(),e.TgZ(34,"mat-form-field",12),e._UZ(35,"input",20),e.qZA(),e.TgZ(36,"mat-form-field",12),e._UZ(37,"input",21),e.qZA(),e.TgZ(38,"mat-form-field",12),e._UZ(39,"input",22),e.qZA(),e.TgZ(40,"mat-form-field",12),e._UZ(41,"input",23),e.qZA(),e.TgZ(42,"mat-form-field",12),e._UZ(43,"input",24),e.qZA(),e.TgZ(44,"mat-form-field",12),e._UZ(45,"input",25),e.qZA(),e.TgZ(46,"mat-form-field",12),e._UZ(47,"input",26),e.qZA(),e.TgZ(48,"mat-form-field",12),e._UZ(49,"input",27),e.qZA(),e.TgZ(50,"mat-form-field",12),e._UZ(51,"input",28),e.qZA(),e.TgZ(52,"mat-form-field",12),e._UZ(53,"input",29),e.qZA(),e.TgZ(54,"mat-form-field",12),e._UZ(55,"input",30),e.qZA(),e.qZA(),e.qZA(),e.TgZ(56,"mat-tab",31),e.YNc(57,ae,8,4,"div",32),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t){const n=e.MAs(31);e.xp6(10),e.Oqu(a.movie?a.movie.title:"Movie"),e.xp6(4),e.Q6J("ngIf","new"===a.pageType),e.xp6(1),e.Q6J("ngIf","edit"===a.pageType),e.xp6(1),e.Q6J("ngIf","edit"===a.pageType),e.xp6(2),e.Q6J("formGroup",a.movieForm),e.xp6(14),e.Q6J("ngForOf",null==a.movie?null:a.movie.genres),e.xp6(1),e.Q6J("matChipInputFor",n),e.xp6(24),e.Q6J("ngIf",a.movie&&a.movie.belongs_to_collection)}},directives:[A.lW,b.Hw,v.O5,y.Vv,r._Y,r.JL,r.sg,w.SP,w.uX,P.KE,V.Nt,r.Fj,r.JJ,r.u,f.qn,v.sg,f.HS,f.oH,u.xw,u.SQ,u.yH,r.On],styles:[""]}),o})();const ie=[{path:"",component:N},{path:"new",component:h},{path:":id",component:h}];let ne=(()=>{class o{}return o.components=[N,h],o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.Bz.forChild(ie)],d.Bz]}),o})(),le=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[g],imports:[[ne,I.m]]}),o})()}}]);