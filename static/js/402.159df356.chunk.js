"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[402],{402:function(e,t,n){n.d(t,{h:function(){return x},Z:function(){return C}});var r=n(969),a=n(734),o=n(2723),i=n(6234),c=n(7765),u=n(8301),l=n(8224),s=n(3127),d=n(6770),m=n(4576),p=n(55),f=n(2504),v=n(8079),g="/transaction/goods/receipts/",y=f.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listTransaction:e.query({query:function(e){var t=e.page,n=e.size,r=e.grn;return{url:r?(0,f.DS)(g,"?page=".concat(t||1,"&page_size=").concat(n||f.IV,"&docid=").concat(r)):(0,f.DS)(g,"?page=".concat(t||1,"&page_size=").concat(n||f.IV))}},providesTags:function(e){var t;return e?[].concat((0,v.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:f.pJ.TRANSACTION,key:t}}))),[{type:f.pJ.TRANSACTION,id:"LIST"}]):[{type:f.pJ.TRANSACTION,id:"LIST"}]}}),addTransaction:e.mutation({query:function(e){return{url:"".concat(g),method:"POST",body:e}},invalidatesTags:[{type:f.pJ.TRANSACTION,id:"LIST"}]}),getTransaction:e.query({query:function(e){return"".concat(g).concat(e)},providesTags:function(e,t,n){return[{type:f.pJ.TRANSACTION,id:n}]}}),getTransactionNextDocId:e.query({query:function(e){return"".concat("/transaction/doc/id/","next?docid=").concat(e)},providesTags:function(e,t){return[]}}),updateTransaction:e.mutation({query:function(e){var t=e;return{url:"".concat(g),method:"POST",body:t}},invalidatesTags:function(e){var t;return[{type:f.pJ.TRANSACTION,id:null===(t=null===e||void 0===e?void 0:e.data)||void 0===t?void 0:t.key}]}}),deleteTransaction:e.mutation({query:function(e){return{url:"".concat(g).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:f.pJ.TRANSACTION,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),b=y.useAddTransactionMutation,h=y.useDeleteTransactionMutation,T=y.useGetTransactionQuery,E=y.useListTransactionQuery,S=y.useUpdateTransactionMutation,N=(y.useGetErrorProneQuery,y.useGetTransactionNextDocIdQuery),x=(y.endpoints.getTransaction,"materialpurchase"),k="Material Received",I={purchase:"GR2",inventory:"GR3",projects:"GR1"},_=(0,r.forwardRef)((function(e,t){var n,a=e.moduleName,o=e.data,c=e.isLoading,u=e.disableTable,s=void 0!==u&&u,m=e.onChange,v=void 0===m?function(){}:m,g=(0,r.useState)([]),y=(0,i.Z)(g,2),b=y[0],h=y[1],T=(0,f.nq)("admin"),E=T.data,S=(T.isLoading,E&&(null===(n=E[0])||void 0===n?void 0:n.user)),N=(0,r.useRef)(b),I=(0,r.useRef)([]),_=(0,r.useRef)([]),w=(0,f.Zp)({}),L=w.data,R=(w.isLoading,(0,f.DY)({})),A=R.data;R.isLoading;(0,r.useImperativeHandle)(t,(function(){return{getItems:function(){return b}}})),(0,r.useEffect)((function(){h(o),N.current=o}),[o]),(0,r.useEffect)((function(){I.current=(null===L||void 0===L?void 0:L.results)||[],_.current=(null===A||void 0===A?void 0:A.results)||[]}),[L,A]);var C=function(e){return r.createElement(p.JK,{value:e||0})},P=function(){return"projects"!==a||3===S};return r.createElement(p.PS,{baseRoute:"/".concat(a,"/").concat(x),description:k,isLoading:c,data:b,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:s,actionBodyTemplate:function(e){return r.createElement(d.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){return function(e){var t=N.current.filter((function(t){return t!==e}));N.current=t,h(t)}(e)},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:s||!(0,f.pH)(b),newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){var t=e.map((function(e){return Object.assign(Object.assign({},e),{netamt:e.qty*e.unitprice,totalamt:e.qty*e.unitprice+e.taxamt})}));h(t),N.current=t,v(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(p._P,{field:"item_key",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=I.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:!s&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:I.current,onChange:function(e){var r,o=Object.assign({},t);o[n.key]=e.value,o.items=_.current.find((function(t){return t.key===e.value}));var i=null===(r=I.current.filter((function(t){return t.key===e.value}))[0])||void 0===r?void 0:r.itemuom_key;o.itemuom_key=i,a(o,!0)},tabIndex:-1})}}),r.createElement(p._P,{field:"itemuom_key",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=_.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:!s&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(l.L,{autoFocus:!0,className:"p-inputtext-sm editor-dropdown-style",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:_.current,onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,r.items_uoms=_.current.find((function(t){return t.key===e.value})),a(r,!0)},tabIndex:-1})}}),r.createElement(p._P,{field:"qty",header:"Quantity",type:"number",editorType:!s&&"number"}),P()&&r.createElement(p._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!s&&"number"}),P()&&r.createElement(p._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.netamt)}}),P()&&r.createElement(p._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:!s&&"currency",summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.taxamt)}}),P()&&r.createElement(p._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return C(null===t||void 0===t?void 0:t.totalamt)}}))})),w=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}u((r=r.apply(e,t||[])).next())}))},L=function(e,t){return e?t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()):new Date(e):e},R=function(e){var t=e.moduleName,n=(0,p.pm)(),v=n.showSuccess,g=n.showError,y=(0,r.useState)(!1),h=(0,i.Z)(y,2),E=h[0],R=h[1],A=(0,r.useState)({}),C=(0,i.Z)(A,2),P=C[0],O=C[1],j=(0,a.UO)().id,V=parseInt(j||""),q=isNaN(V)||V<=0,Z=(0,r.useState)(!1),D=(0,i.Z)(Z,2),F=D[0],W=D[1],G=(0,r.useState)("S"),U=(0,i.Z)(G,2),B=U[0],M=U[1],J=(0,r.useState)("SAVE"),H=(0,i.Z)(J,2),z=H[0],Q=H[1],Y=(0,r.useState)(null),K=(0,i.Z)(Y,2),X=K[0],$=K[1],ee=(0,r.useState)(null),te=(0,i.Z)(ee,2),ne=te[0],re=te[1],ae=(0,r.useRef)(),oe=(0,r.useRef)(),ie=(0,f.ft)(),ce=T(V,{skip:q}),ue=ce.data,le=ce.isLoading,se=ce.refetch,de=N(I[t],{skip:!q}),me=de.data,pe=de.isLoading,fe=(0,a.s0)(),ve=(0,f.JB)(),ge=ve.data,ye=ve.isLoading,be=(0,f.Wv)(),he=be.data,Te=be.isLoading,Ee=(0,f.es)({vendor:X,project:ne},{skip:!ne||!X}),Se=Ee.data,Ne=Ee.isFetching,xe=S(),ke=(0,i.Z)(xe,2),Ie=ke[0],_e=ke[1].isLoading,we=b(),Le=(0,i.Z)(we,2),Re=Le[0],Ae=Le[1].isLoading;(0,r.useEffect)((function(){O(ue||Object.assign(Object.assign({},ie),{date:L(new Date,!0),docid:I[t],number:null===me||void 0===me?void 0:me.next_doc_id,loctyp:"projects"===t?"PR":"inventory"===t?"WH":""})),ue&&(re(ue.proj_key),$(ue.vend_key))}),[ue,me]);var Ce=(0,r.useState)(null),Pe=(0,i.Z)(Ce,2),Oe=Pe[0],je=Pe[1],Ve=(0,r.useState)([]),qe=(0,i.Z)(Ve,2),Ze=qe[0],De=qe[1],Fe=(0,f.dV)({id:Oe},{skip:!Oe}),We=Fe.data;Fe.isFetching;(0,r.useEffect)((function(){if(We)if(console.log(We),q)De(We);else{var e=(null===ue||void 0===ue?void 0:ue.grn_items.concat(We))||[];De(e)}}),[We]),(0,r.useEffect)((function(){ue&&De((null===ue||void 0===ue?void 0:ue.grn_items)||[])}),[ue]);var Ge=function(){return["U","R","I","C"].includes(null===ue||void 0===ue?void 0:ue.docstatus)},Ue=function(e,t){return w(void 0,void 0,void 0,(0,o.Z)().mark((function n(){var r;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,M(e);case 2:return n.next=4,Q(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(p.Rm,{baseRoute:"/".concat(t,"/").concat(x),description:k,id:V,data:P,isItemsTableChanged:F,ref:oe,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(d.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===ue||void 0===ue?void 0:ue.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=oe.current)||void 0===t?void 0:t.getIsDirty())||F?(0,m.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Ue("U","SUBMIT_WITH_SAVE")},reject:function(){return Ue("U","SUBMIT_WITHOUT_SAVE")}}):Ue("U","SUBMIT_WITH_SAVE")}}),r.createElement(d.z,{label:"Cancel",disabled:q||["R","I","C"].includes(null===ue||void 0===ue?void 0:ue.docstatus),className:"p-button-plain",onClick:function(e){return Q("CANCEL"),M("C"),!0}})),isUpdating:Ae||_e||E,isLoading:le,onSubmit:function(e){return w(void 0,void 0,void 0,(0,o.Z)().mark((function n(){var r,a,i;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=null===(r=ae.current)||void 0===r?void 0:r.getItems(),n.prev=1,!q){n.next=8;break}return n.next=5,Re(Object.assign(Object.assign(Object.assign({},e),{action:z,loctyp:"PR",docstatus:B,grn_items:null===a||void 0===a?void 0:a.map((function(e){return Object.assign(Object.assign({},e),ie)}))}),ie)).unwrap();case 5:i=n.sent,n.next=11;break;case 8:return n.next=10,Ie(Object.assign(Object.assign(Object.assign({},e),{action:z,docstatus:B,grn_items:null===a||void 0===a?void 0:a.map((function(e){return Object.assign(Object.assign({},e),ie)}))}),ie)).unwrap();case 10:i=n.sent;case 11:se(),v("Success",i.detail),R(!0),setTimeout((function(){fe("/".concat(t,"/").concat(x))}),f.P7),n.next=20;break;case 17:n.prev=17,n.t0=n.catch(1),g("An error occurred","We couldn't save your post, try again!");case 20:case"end":return n.stop()}}),n,null,[[1,17]])})))},renderForm:function(e,n,a){var o;return r.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},r.createElement(p.Wi,{label:"GRN Number",name:"number",isLoading:pe,className:"col-12 md:col-6",control:e,errors:a,leftSpan:4,rightSpan:6,formItem:{component:u.R,componentProps:{useGrouping:!1,disabled:!0}}}),r.createElement(p.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:a,required:"Select a Project",isLoading:ye,leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){re(e.value)},formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ge}}}),r.createElement(p.Wi,{label:"GRN Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:a,leftSpan:4,rightSpan:6,convertValue:L,formItem:{component:s.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(p.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:a,isLoading:Te,required:"Select a Vendor",leftSpan:4,rightSpan:6,useExplicit:!0,onChange:function(e){$(e.value)},formItem:{component:l.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:he}}}),r.createElement(p.Wi,{label:"PO Number",name:"pono",className:"col-12 md:col-6",control:e,errors:a,leftSpan:4,rightSpan:6,isLoading:Ne,useExplicit:!0,onChange:function(e){Ge()||je(e.value)},formItem:{component:l.L,componentProps:{optionLabel:"number",optionValue:"key",options:Se}}}),r.createElement(p.Wi,{label:"Vendor RefNo",name:"vendrefno",className:"col-12 md:col-6",leftSpan:4,rightSpan:6,required:"Enter Ref No",control:e,errors:a,formItem:{component:c.o,componentProps:{maxLength:25}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(_,{data:Ze||(null===(o=ae.current)||void 0===o?void 0:o.getItems())||[],isLoading:le,moduleName:t,ref:ae,disableTable:Ge(),onChange:function(e){return!F&&W(e)}})))}}))},A=function(e){var t=e.moduleName,n=E("purchase"!==t?{grn:I[t]}:{},{refetchOnMountOrArgChange:!0}),a=n.data,o=n.isLoading,c=h(),u=(0,i.Z)(c,2),l=u[0],s=u[1].isLoading;return r.createElement(p.PS,{baseRoute:"/".concat(t,"/").concat(x),description:k,isLoading:o||s,newTable:!0,showHeader:!0,data:null===a||void 0===a?void 0:a.results,deleteAction:function(e){return l(e).unwrap()}},r.createElement(p._P,{field:"number",header:"GRN Number",filteringType:"number"}),r.createElement(p._P,{field:"date",header:"GRN Date",filteringType:"text"}),r.createElement(p._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(p._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(p._P,{field:"vendrefno",header:"Vendor RefNo",filteringType:"text"}),r.createElement(p._P,{field:"status.descr",header:"GRN Status",filteringType:"text"}))},C=function(e){return r.createElement(a.AW,{path:x},r.createElement(a.AW,{path:"new",element:r.createElement(R,{moduleName:e})}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(R,{moduleName:e})}),r.createElement(a.AW,{index:!0,element:r.createElement(A,{moduleName:e})}))}}}]);
//# sourceMappingURL=402.159df356.chunk.js.map