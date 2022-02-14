"use strict";(self.webpackChunkfireERP=self.webpackChunkfireERP||[]).push([[260],{7260:(st,T,i)=>{i.r(T),i.d(T,{CustomerModule:()=>mt});var S=i(4977),c=i(1402),v=i(6087),_=i(4847),s=i(4999),b=i(8746),t=i(5e3),u=i(515),d=i(4004),p=i(262),f=i(5347);class Y{constructor(r,e,n,a,l,h,Z){this.id=r,this.documentType=e,this.documentNumber=n,this.name=a,this.phoneNumber=l,this.email=h,this.address=Z}}var I=i(520);let C=(()=>{class o{constructor(e){this.http=e}list(){return this.http.get(f.S.customerList).pipe((0,d.U)(e=>e),(0,p.K)((e,n)=>u.E))}get(e){return this.http.get(`${f.S.getCustomer}/${e}`).pipe((0,d.U)(n=>new Y(n.id,n.documentType,n.documentNumber,n.name,n.phoneNumber,n.email,n.address)),(0,p.K)((n,a)=>u.E))}add(e){return this.http.post(`${f.S.addCustomer}`,e).pipe((0,d.U)(n=>n),(0,p.K)((n,a)=>u.E))}update(e){return this.http.put(`${f.S.updateCustomer}`,e).pipe((0,d.U)(n=>n),(0,p.K)((n,a)=>u.E))}delete(e){return this.http.delete(`${f.S.deleteCustomer}/${e}`).pipe((0,d.U)(n=>n),(0,p.K)((n,a)=>u.E))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(I.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var A=i(1953),N=i(7423),x=i(5245),y=i(4841);function w(o,r){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," RUC "),t.qZA())}function L(o,r){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.documentType," ")}}function E(o,r){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Cliente "),t.qZA())}function F(o,r){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function J(o,r){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Tel\xe9fono "),t.qZA())}function B(o,r){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.phoneNumber," ")}}function k(o,r){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Correo "),t.qZA())}function Q(o,r){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.email," ")}}function R(o,r){1&o&&(t.TgZ(0,"mat-header-cell"),t._uU(1," Direccion "),t.qZA())}function M(o,r){if(1&o&&(t.TgZ(0,"mat-cell"),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.xp6(1),t.hij(" ",e.address," ")}}function O(o,r){1&o&&t._UZ(0,"mat-header-row")}function $(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-row",18),t.NdJ("click",function(){const l=t.CHM(e).$implicit;return t.oxw().onCustomerDetailNavigate(l)}),t.qZA()}}const H=function(){return[5,10,20]};let D=(()=>{class o{constructor(e,n,a,l){this.customerService=e,this.loadingBackdropService=n,this.route=a,this.router=l,this.dataSource=new s.by,this.displayedColumns=["documentType","name","phoneNumber","email","address"]}ngOnInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator,this.loadCustomers()}loadCustomers(){this.loadingBackdropService.show(),this.customerService.list().pipe((0,b.x)(()=>this.loadingBackdropService.hide())).subscribe(e=>{this.dataSource.data=e})}onCustomerAddNavigate(){this.router.navigate(["new"],{relativeTo:this.route})}onCustomerDetailNavigate(e){this.router.navigate([e.id],{relativeTo:this.route})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C),t.Y36(A.C),t.Y36(c.gz),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer-list"]],viewQuery:function(e,n){if(1&e&&(t.Gf(_.YE,7),t.Gf(v.NW,7)),2&e){let a;t.iGM(a=t.CRH())&&(n.sort=a.first),t.iGM(a=t.CRH())&&(n.paginator=a.first)}},decls:40,vars:5,consts:[[1,"carded"],[1,"top-bg","accent"],[1,"center"],[1,"header","accent"],["type","button","mat-raised-button","",1,"u-margin-l-8"],["type","button","mat-raised-button","",1,"u-margin-l-8",3,"click"],[1,"content-card"],["matSort","",1,"vertical-fit",3,"dataSource"],["matColumnDef","documentType"],[4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","phoneNumber"],["matColumnDef","email"],["matColumnDef","address"],[4,"matHeaderRowDef"],[3,"click",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions"],[3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"h2"),t._uU(5,"Customers"),t.qZA(),t.TgZ(6,"div"),t.TgZ(7,"button",4),t.TgZ(8,"mat-icon"),t._uU(9,"delete"),t.qZA(),t._uU(10,"DELETE "),t.qZA(),t.TgZ(11,"button",4),t.TgZ(12,"mat-icon"),t._uU(13,"edit"),t.qZA(),t._uU(14,"EDIT "),t.qZA(),t.TgZ(15,"button",5),t.NdJ("click",function(){return n.onCustomerAddNavigate()}),t.TgZ(16,"mat-icon"),t._uU(17,"add"),t.qZA(),t._uU(18,"ADD "),t.qZA(),t.qZA(),t.qZA(),t.TgZ(19,"div",6),t.TgZ(20,"perfect-scrollbar"),t.TgZ(21,"mat-table",7),t.ynx(22,8),t.YNc(23,w,2,0,"mat-header-cell",9),t.YNc(24,L,2,1,"mat-cell",10),t.BQk(),t.ynx(25,11),t.YNc(26,E,2,0,"mat-header-cell",9),t.YNc(27,F,2,1,"mat-cell",10),t.BQk(),t.ynx(28,12),t.YNc(29,J,2,0,"mat-header-cell",9),t.YNc(30,B,2,1,"mat-cell",10),t.BQk(),t.ynx(31,13),t.YNc(32,k,2,0,"mat-header-cell",9),t.YNc(33,Q,2,1,"mat-cell",10),t.BQk(),t.ynx(34,14),t.YNc(35,R,2,0,"mat-header-cell",9),t.YNc(36,M,2,1,"mat-cell",10),t.BQk(),t.YNc(37,O,1,0,"mat-header-row",15),t.YNc(38,$,1,0,"mat-row",16),t.qZA(),t.qZA(),t._UZ(39,"mat-paginator",17),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(21),t.Q6J("dataSource",n.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",n.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",n.displayedColumns),t.xp6(1),t.Q6J("pageSizeOptions",t.DdM(4,H)))},directives:[N.lW,x.Hw,y.Vv,s.BZ,_.YE,s.w1,s.fO,s.ge,s.Dz,s.ev,s.as,s.XQ,s.nj,s.Gk,v.NW],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),o})();var m=i(3075),K=i(5177),j=i(8966),z=i(7261),G=i(9808),U=i(3251),q=i(7322),P=i(7531);function V(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().addCustomer()}),t.TgZ(1,"span"),t._uU(2,"ADD"),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("disabled",e.clientForm.invalid)}}function W(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){return t.CHM(e),t.oxw().saveCustomer()}),t.TgZ(1,"span"),t._uU(2,"SAVE"),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.Q6J("disabled",e.clientForm.invalid||e.clientForm.pristine)}}function X(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){return t.CHM(e),t.oxw().confirmDeleteCustomer()}),t.TgZ(1,"span"),t._uU(2,"DELETE"),t.qZA(),t.qZA()}}function tt(o,r){1&o&&(t.TgZ(0,"mat-error",21),t._uU(1," Required field "),t.qZA())}function et(o,r){1&o&&(t.TgZ(0,"mat-error",21),t._uU(1," Required field "),t.qZA())}function ot(o,r){1&o&&(t.TgZ(0,"mat-error",21),t._uU(1," Required field "),t.qZA())}function nt(o,r){1&o&&(t.TgZ(0,"mat-error",21),t._uU(1," Invalid Email "),t.qZA())}function rt(o,r){1&o&&(t.TgZ(0,"mat-error",21),t._uU(1," Required field "),t.qZA())}let g=(()=>{class o{constructor(e,n,a,l,h,Z){this.dialog=e,this.customerService=n,this.loadingBackdropService=a,this.snackBar=l,this.route=h,this.router=Z,this.initFormBuilder()}ngOnInit(){this.clientId=this.route.snapshot.params.id,this.clientId?(this.pageType="edit",this.loadingBackdropService.show(),this.customerService.get(this.clientId).pipe((0,b.x)(()=>this.loadingBackdropService.hide())).subscribe(e=>this.loadFormData(e),e=>{})):this.pageType="new"}navigateToListPage(){this.router.navigate([".."],{relativeTo:this.route})}confirmDeleteCustomer(){this.dialog.open(K.$,{data:{title:"Confirm",body:"Are you sure you want to delete this customer?"}}).afterClosed().subscribe(n=>{n&&this.deleteCustomer()})}deleteCustomer(){this.deleteSuscription=this.customerService.delete(this.clientId).subscribe(e=>{this.snackBar.open("Customer deleted","OK",{duration:3e3})},e=>{})}saveCustomer(){const e=this.clientForm.getRawValue();this.addSuscription=this.customerService.update(e).subscribe(n=>{this.snackBar.open("Customer edited","OK",{verticalPosition:"bottom",duration:3e3})},n=>{})}addCustomer(){const e=this.clientForm.getRawValue();this.addSuscription=this.customerService.add(e).subscribe(n=>{this.snackBar.open("Customer added","OK",{duration:3e3})},n=>{this.snackBar.open("Something went wrong","OK",{duration:3e3})})}initFormBuilder(){this.clientForm=new m.cw({name:new m.NI({value:"",disabled:!1},m.kI.required),documentType:new m.NI({value:"",disabled:!1}),documentNumber:new m.NI({value:"",disabled:!1}),email:new m.NI({value:"",disabled:!1}),address:new m.NI({value:"",disabled:!1}),phoneNumber:new m.NI({value:"",disabled:!1})})}loadFormData(e){this.customer=e,this.clientForm.setValue({name:e.name,documentType:e.documentType,documentNumber:e.documentNumber,email:e.email,address:e.address,phoneNumber:e.phoneNumber})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(j.uw),t.Y36(C),t.Y36(A.C),t.Y36(z.ux),t.Y36(c.gz),t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customer-detail"]],decls:40,vars:10,consts:[[1,"carded"],[1,"top-bg","accent"],[1,"center"],[1,"header","accent"],["mat-icon-button","",3,"click"],["type","button","mat-raised-button","","class","u-margin-l-8",3,"disabled","click",4,"ngIf"],["type","button","mat-raised-button","","class","u-margin-l-8",3,"click",4,"ngIf"],[1,"content-card"],[1,"vertical-fit",3,"formGroup"],["label","Basic Information"],[1,"u-padding-16"],[2,"width","100%"],["matInput","","placeholder","Name","type","text","formControlName","name"],["class","form-control-feedback",4,"ngIf"],["matInput","","placeholder","Document Type","type","text","formControlName","documentType"],["matInput","","placeholder","Document Number","type","text","formControlName","documentNumber"],["matInput","","placeholder","Email","type","email","formControlName","email"],["matInput","","placeholder","Address","type","text","formControlName","address"],["matInput","","placeholder","Telephone","type","tel","formControlName","phoneNumber"],["type","button","mat-raised-button","",1,"u-margin-l-8",3,"disabled","click"],["type","button","mat-raised-button","",1,"u-margin-l-8",3,"click"],[1,"form-control-feedback"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"div"),t.TgZ(5,"button",4),t.NdJ("click",function(){return n.navigateToListPage()}),t.TgZ(6,"mat-icon"),t._uU(7,"arrow_back"),t.qZA(),t.qZA(),t.TgZ(8,"div"),t.TgZ(9,"h2"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12,"Customer Detail"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(13,"div"),t.YNc(14,V,3,1,"button",5),t.YNc(15,W,3,1,"button",5),t.YNc(16,X,3,0,"button",6),t.qZA(),t.qZA(),t.TgZ(17,"perfect-scrollbar",7),t.TgZ(18,"form",8),t.TgZ(19,"fieldset"),t.TgZ(20,"mat-tab-group"),t.TgZ(21,"mat-tab",9),t.TgZ(22,"div",10),t.TgZ(23,"mat-form-field",11),t._UZ(24,"input",12),t.YNc(25,tt,2,0,"mat-error",13),t.qZA(),t.TgZ(26,"mat-form-field",11),t._UZ(27,"input",14),t.YNc(28,et,2,0,"mat-error",13),t.qZA(),t.TgZ(29,"mat-form-field",11),t._UZ(30,"input",15),t.YNc(31,ot,2,0,"mat-error",13),t.qZA(),t.TgZ(32,"mat-form-field",11),t._UZ(33,"input",16),t.YNc(34,nt,2,0,"mat-error",13),t.qZA(),t.TgZ(35,"mat-form-field",11),t._UZ(36,"input",17),t.YNc(37,rt,2,0,"mat-error",13),t.qZA(),t.TgZ(38,"mat-form-field",11),t._UZ(39,"input",18),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(10),t.Oqu(n.customer?n.customer.name:"Customer"),t.xp6(4),t.Q6J("ngIf","new"===n.pageType),t.xp6(1),t.Q6J("ngIf","edit"===n.pageType),t.xp6(1),t.Q6J("ngIf","edit"===n.pageType),t.xp6(2),t.Q6J("formGroup",n.clientForm),t.xp6(7),t.Q6J("ngIf",!1),t.xp6(3),t.Q6J("ngIf",!1),t.xp6(3),t.Q6J("ngIf",!1),t.xp6(3),t.Q6J("ngIf",!1),t.xp6(3),t.Q6J("ngIf",!1))},directives:[N.lW,x.Hw,G.O5,y.Vv,m._Y,m.JL,m.sg,U.SP,U.uX,q.KE,P.Nt,m.Fj,m.JJ,m.u,q.TO],styles:[""]}),o})();const it=[{path:"",component:D},{path:"new",component:g},{path:":id",component:g}];let at=(()=>{class o{}return o.components=[D,g],o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[c.Bz.forChild(it)],c.Bz]}),o})(),mt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[C],imports:[[at,S.m]]}),o})()}}]);