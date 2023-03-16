"use strict";(self.webpackChunkbuild_iq_app=self.webpackChunkbuild_iq_app||[]).push([[474],{8901:function(e,t,n){n.r(t),n.d(t,{default:function(){return oe}});var r=n(969),a=n(734),i=n(1930),o=n(402),u="purchase",c=function(e,t){return(0,i.E7)("/".concat(u,"/").concat(e)+(t?"/comming-soon":""))},l=[{items:[{label:"Purchase Order",icon:"pi ml-3",template:c("purchaseorder")},{label:"Purchase Template",icon:"pi ml-3",template:c("purchasetemplate")},{label:"Material Received",icon:"pi ml-3",template:c(o.h)}]}],s=n(2723),d=n(6234),p=n(3953),m=n(7765),f=n(4756),v=n(8391),y=n(8224),h=n(8079),E=n(2504),g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},T="/transaction/purchase/template/",P=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseTemplate:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(T,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:E.pJ.PURCHASE_TEMPLATE,key:t}}))),[{type:E.pJ.PURCHASE_TEMPLATE,id:"LIST"}]):[{type:E.pJ.PURCHASE_TEMPLATE,id:"LIST"}]}}),addPurchaseTemplate:e.mutation({query:function(e){return{url:T,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.PURCHASE_TEMPLATE,id:"LIST"}]}),getPurchaseTemplate:e.query({query:function(e){return"".concat(T).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.PURCHASE_TEMPLATE,id:n}]}}),updatePurchaseTemplate:e.mutation({query:function(e){var t=e.key,n=g(e,["key"]);return{url:"".concat(T).concat(t),method:"PUT",body:n}},invalidatesTags:function(e){return[{type:E.pJ.PURCHASE_TEMPLATE,id:null===e||void 0===e?void 0:e.key}]}}),deletePurchaseTemplate:e.mutation({query:function(e){return{url:"".concat(T).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.PURCHASE_TEMPLATE,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),b=P.useAddPurchaseTemplateMutation,_=P.useDeletePurchaseTemplateMutation,S=P.useGetPurchaseTemplateQuery,O=P.useListPurchaseTemplateQuery,A=P.useUpdatePurchaseTemplateMutation,k=(P.useGetErrorProneQuery,P.endpoints.getPurchaseTemplate,n(6770)),I=n(4576),L="/transaction/purchase/template/items/",R=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseTemplateItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(L,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:E.pJ.PURCHASE_TEMPLATE_ITEM,item_key:t}}))),[{type:E.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"}]):[{type:E.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"}]}}),addPurchaseTemplateItems:e.mutation({query:function(e){return{url:L,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.PURCHASE_TEMPLATE_ITEM,id:"LIST"},{type:E.pJ.TRANSACTION,id:"LIST"}]}),deletePurchaseTemplateItems:e.mutation({query:function(e){var t=e.key,n=e.body;return{url:"".concat(L).concat(t),method:"DELETE",body:n}}}),getPurchaseTemplateItem:e.query({query:function(e){return"".concat(L).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.PURCHASE_TEMPLATE_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),x=R.useAddPurchaseTemplateItemsMutation,w=(R.useGetPurchaseTemplateItemQuery,R.useListPurchaseTemplateItemQuery,R.useDeletePurchaseTemplateItemsMutation),C=(R.useGetErrorProneQuery,R.endpoints.getPurchaseTemplateItem,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}),q=(0,r.forwardRef)((function(e,t){var n=e.data,a=e.isLoading,o=e.selectedItemType,u=(0,i.pm)(),c=u.showSuccess,l=(u.showError,(0,r.useState)([])),p=(0,d.Z)(l,2),m=p[0],f=p[1],v=x(),h=(0,d.Z)(v,2),g=h[0],T=h[1].isLoading,P=w(),b=(0,d.Z)(P,2),_=b[0],S=(b[1].isLoading,function(e){return _(e).unwrap()}),O=(0,r.useRef)(m),A=(0,r.useRef)([]),L=(0,r.useRef)([]),R=(0,E.qu)(o,{skip:!o}),q=R.data,N=(R.isLoading,(0,E.U$)(o,{skip:!o})),M=N.data;N.isLoading;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return C(this,void 0,void 0,(0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g(Object.assign({},e)).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return m}}})),(0,r.useEffect)((function(){f(n),O.current=n}),[n]),(0,r.useEffect)((function(){console.log(q),A.current=(null===q||void 0===q?void 0:q.results)||[],L.current=M||[]}),[q,M]);return q&&M?r.createElement(i.PS,{baseRoute:"/purchase/".concat("purchasetemplate"),description:"Purchase Template",isLoading:a||T,data:m,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,actionBodyTemplate:function(e){return r.createElement(k.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,I.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return t=e,C(void 0,void 0,void 0,(0,s.Z)().mark((function e(){var n,r,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=O.current.filter((function(e){return e!==t})),O.current=n,f(n),r={key:t.purtmpl_key,body:{items:[Object.assign({},t)]}},e.next=6,S(r);case 6:a=e.sent,c("Success",a);case 8:case"end":return e.stop()}}),e)})));var t},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:!function(e){if(0===e.length)return!0;var t=e[e.length-1];return(null===t||void 0===t?void 0:t.item_key)&&(null===t||void 0===t?void 0:t.itemuom_key)}(m),OnRowsChanged:function(e){f(e),O.current=e}}},r.createElement(i._P,{field:"item_key",width:"50%",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=A.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:A.current,filter:!0,filterBy:"descr",onChange:function(e){var r,i=Object.assign({},t);i[n.key]=e.value;var o=null===(r=A.current.filter((function(t){return t.key===e.value}))[0])||void 0===r?void 0:r.itemuom_key;i.itemuom_key=o,a(i,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"itemuom_key",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=L.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",options:L.current,filter:!0,filterBy:"descr",onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}})):null})),N=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{getNextDocNo:e.query({query:function(e){return{url:(0,E.DS)("/transaction/doc/id/next?docid=".concat(e))}}}),getActivePurchaseTemplates:e.query({query:function(){return{url:"/transaction/purchase/template/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.key;return{type:E.pJ.PURCHASE_TEMPLATE,id:t}}))),[{type:E.pJ.PURCHASE_TEMPLATE,id:"LIST"}])}}),getActivePurchaseTemplatesForItemType:e.query({query:function(e){return{url:"/transaction/purchase/template/all/active?item_type=".concat(e)}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.key;return{type:E.pJ.PURCHASE_TEMPLATE,id:t}}))),[{type:E.pJ.PURCHASE_TEMPLATE,id:"LIST"}])}}),getActiveProjects:e.query({query:function(){return{url:"/project/project/all/active"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.key;return{type:E.pJ.PROJECT,id:t}}))),[{type:E.pJ.PROJECT,id:"LIST"}])}}),getModeOfPayments:e.query({query:function(){return{url:"/transaction/payment/mode/"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.key;return{type:E.pJ.MODE_OF_PAYMENT,id:t}}))),[{type:E.pJ.MODE_OF_PAYMENT,id:"LIST"}])}}),getGRNNumbers:e.query({query:function(){return{url:"/transaction/goods/receipts/?only_grn_number=True"}},providesTags:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return[].concat((0,h.Z)(e.map((function(e){var t=e.key;return{type:E.pJ.GRN_NUMBER,id:t}}))),[{type:E.pJ.GRN_NUMBER,id:"LIST"}])}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),M=(N.useGetErrorProneQuery,N.useGetNextDocNoQuery),j=N.useGetActiveProjectsQuery,U=(N.useGetActivePurchaseTemplatesQuery,N.useGetActivePurchaseTemplatesForItemTypeQuery),Z=(N.useGetModeOfPaymentsQuery,N.useGetGRNNumbersQuery,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}),H=function(e){var t=(0,i.pm)(),n=t.showSuccess,o=t.showError,u=(0,r.useState)(!1),c=(0,d.Z)(u,2),l=c[0],h=c[1],g=(0,a.s0)(),T=(0,a.UO)().id,P=parseInt(T||""),_=isNaN(P)||P<=0,O=(0,r.useRef)(),k=(0,E.ft)(),I=S(P,{skip:_}),L=I.data,R=I.isLoading,x=I.refetch,w=(0,r.useState)([]),C=(0,d.Z)(w,2),N=(C[0],C[1]),j=(0,r.useState)(null),U=(0,d.Z)(j,2),H=U[0],J=U[1],D=M("PT",{skip:!_,refetchOnMountOrArgChange:_}),V=D.data,F=(D.error,b()),W=(0,d.Z)(F,2),G=W[0],Q=W[1].isLoading,B=A(),z=(0,d.Z)(B,2),Y=z[0],K=z[1].isLoading,$=(0,E.DU)(),X=$.data,ee=$.isFetching,te=(0,E.qu)(H,{skip:!H}),ne=te.data;te.isFetching;(0,r.useEffect)((function(){if(null===ne||void 0===ne?void 0:ne.results)if(console.log(ne),_){var e=ne.results.map((function(e){return{item_key:e.key,itemuom_key:e.itemuom_key}}));N(e)}else{var t=null===L||void 0===L?void 0:L.purchs_template_items.concat(ne.results.map((function(e){return{item_key:e.key,itemuom_key:e.itemuom_key}})));N(t)}}),[ne]),(0,r.useEffect)((function(){!_&&L&&(N(L.purchs_template_items),J(L.itemtyp_key))}),[L]);return r.createElement(r.Fragment,null,r.createElement(i.Rm,{baseRoute:"/purchase/purchasetemplate",description:"Purchase Template",id:P,data:L,isUpdating:Q||K||l,isLoading:R,onSubmit:function(e){return Z(void 0,void 0,void 0,(0,s.Z)().mark((function t(){var r,a,i,u,c;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,u=(null===(r=O.current)||void 0===r?void 0:r.getItems())||[],!_){t.next=9;break}return c=Object.assign(Object.assign({},e),{docid:"PT",number:null===V||void 0===V?void 0:V.next_doc_id,purchs_template_items:u}),t.next=6,G(Object.assign(Object.assign(Object.assign({},c),k),{purchs_template_items:u})).unwrap();case 6:i=t.sent,t.next=12;break;case 9:return t.next=11,Y(Object.assign(Object.assign(Object.assign({},e),k),{purchs_template_items:u})).unwrap();case 11:i=t.sent;case 12:return t.next=14,null===(a=O.current)||void 0===a?void 0:a.saveItem(Object.assign(Object.assign({p_template_id:i.data.key},k),{items:u}));case 14:x(),n("Success",i.detail),h(!0),setTimeout((function(){g("/purchase/purchasetemplate")}),E.P7),t.next=24;break;case 20:t.prev=20,t.t0=t.catch(0),console.log(t.t0),o("An error occurred","We couldn't save your post, try again!");case 24:case"end":return t.stop()}}),t,null,[[0,20]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-6"},r.createElement("div",{className:"flex"},r.createElement("div",{className:"field col-6"},r.createElement("label",{htmlFor:"number",className:(0,f.AK)("col-4",{"p-error":n.number})},"Template No"),r.createElement(p.Qr,{defaultValue:null===V||void 0===V?void 0:V.next_doc_id,name:"number",control:e,rules:{},render:function(e){var t=e.field;e.fieldState;return r.createElement(m.o,Object.assign({disabled:!0,id:t.name},t,{value:(null===L||void 0===L?void 0:L.number)||(null===V||void 0===V?void 0:V.next_doc_id)}))}}))),r.createElement("div",{className:"flex"},r.createElement(i.Wi,{label:"Template Name",name:"name",className:"field col-6",control:e,errors:n,required:!0,leftSpan:4,rightSpan:5,formItem:{component:m.o,componentProps:{maxLength:50}}}),r.createElement("div",{className:"field col-6",style:{padding:10}},r.createElement("label",{style:{margin:"auto"},htmlFor:"inactive",className:(0,f.AK)("col-4",{"p-error":n.inactive})},"Inactive"),r.createElement(p.Qr,{defaultValue:"N",name:"inactive",control:e,render:function(e){var t=e.field;e.fieldState;return r.createElement(v.X,Object.assign({checked:t.value,trueValue:"Y",falseValue:"N",id:t.name},t))}}))),r.createElement("div",{className:"field col-6"},r.createElement(i.Wi,{label:"Item Type",name:"itemtyp_key",control:e,errors:n,isLoading:ee,required:!0,leftSpan:4,rightSpan:5,useExplicit:!0,onChange:function(e){console.log(e.value),J(e.value)},formItem:{component:y.L,componentProps:{optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===X||void 0===X?void 0:X.results}}})),r.createElement("div",{className:"col-8"},r.createElement(q,{selectedItemType:H,data:(null===L||void 0===L?void 0:L.purchs_template_items)||[],isLoading:R,ref:O})))}}))},J=(n(6822),function(e){var t=O({}),n=t.data,a=t.isLoading,o=_(),u=(0,d.Z)(o,2),c=u[0],l=u[1].isLoading;return r.createElement(i.PS,{baseRoute:"/purchase/purchasetemplate",description:"Purchase Template",isLoading:a||l,newTable:!0,showHeader:!0,data:null===n||void 0===n?void 0:n.results,deleteAction:function(e){return c(e).unwrap()}},r.createElement(i._P,{field:"number",header:"Template",filteringType:"number"}),r.createElement(i._P,{field:"name",header:"Template Name",filteringType:"text"}),r.createElement(i._P,{field:"inactive",header:"Active Status",filteringType:"text",displayValueGetter:function(e){return"Y"===e.inactive?"Inactive":"Active"}}))}),D=r.createElement(a.AW,{path:"purchasetemplate"},r.createElement(a.AW,{path:"new",element:r.createElement(H,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(H,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(J,null)})),V=n(3127),F="/transaction/purchase/order/",W=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseOrder:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(F,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.key;return{type:E.pJ.PURCHASE_ORDER,key:t}}))),[{type:E.pJ.PURCHASE_ORDER,id:"LIST"}]):[{type:E.pJ.PURCHASE_ORDER,id:"LIST"}]}}),addPurchaseOrder:e.mutation({query:function(e){return{url:F,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.PURCHASE_ORDER,id:"LIST"}]}),getPurchaseOrder:e.query({query:function(e){return"".concat(F).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.PURCHASE_ORDER,id:n}]}}),updatePurchaseOrder:e.mutation({query:function(e){var t=e;return{url:"".concat(F),method:"POST",body:t}},invalidatesTags:function(e){return[{type:E.pJ.PURCHASE_ORDER,id:null===e||void 0===e?void 0:e.key}]}}),deletePurchaseOrder:e.mutation({query:function(e){return{url:"".concat(F).concat(e),method:"DELETE"}},invalidatesTags:function(e){return[{type:E.pJ.PURCHASE_ORDER,id:null===e||void 0===e?void 0:e.id}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),G=W.useAddPurchaseOrderMutation,Q=W.useDeletePurchaseOrderMutation,B=W.useGetPurchaseOrderQuery,z=W.useListPurchaseOrderQuery,Y=W.useUpdatePurchaseOrderMutation,K=(W.useGetErrorProneQuery,"/transaction/purchase/order/items/"),$=E.hi.injectEndpoints({overrideExisting:!1,endpoints:function(e){return{listPurchaseOrderItem:e.query({query:function(e){var t=e.page,n=e.size;return{url:(0,E.DS)(K,"?page=".concat(t||1,"&page_size=").concat(n||E.IV))}},providesTags:function(e){var t;return e?[].concat((0,h.Z)(null===(t=null===e||void 0===e?void 0:e.results)||void 0===t?void 0:t.map((function(e){var t=e.item_key;return{type:E.pJ.PURCHASE_ORDER_ITEM,item_key:t}}))),[{type:E.pJ.PURCHASE_ORDER_ITEM,id:"LIST"}]):[{type:E.pJ.PURCHASE_ORDER_ITEM,id:"LIST"}]}}),addPurchaseOrderItems:e.mutation({query:function(e){return{url:K,method:"POST",body:e}},invalidatesTags:[{type:E.pJ.PURCHASE_ORDER_ITEM,id:"LIST"},{type:E.pJ.TRANSACTION,id:"LIST"}]}),getPurchaseOrderItem:e.query({query:function(e){return"".concat(K).concat(e)},providesTags:function(e,t,n){return[{type:E.pJ.PURCHASE_ORDER_ITEM,id:n}]}}),getErrorProne:e.query({query:function(){return"error-prone"}})}}}),X=$.useAddPurchaseOrderItemsMutation,ee=($.useGetPurchaseOrderItemQuery,$.useListPurchaseOrderItemQuery,$.useGetErrorProneQuery,$.endpoints.getPurchaseOrderItem,function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))}),te=(0,r.forwardRef)((function(e,t){var n=e.data,a=e.isLoading,o=e.disableTable,u=void 0!==o&&o,c=e.selectedItemType,l=e.onChange,p=void 0===l?function(){}:l,m=(0,r.useState)([]),f=(0,d.Z)(m,2),v=f[0],h=f[1],g=X(),T=(0,d.Z)(g,2),P=T[0],b=T[1].isLoading,_=(0,r.useRef)(v),S=(0,r.useRef)([]),O=(0,r.useRef)([]),A=(0,E.qu)(c,{skip:!c}),L=A.data,R=(A.isLoading,(0,E.U$)(c,{skip:!c})),x=R.data;R.isLoading;(0,r.useImperativeHandle)(t,(function(){return{saveItem:function(e){return ee(this,void 0,void 0,(0,s.Z)().mark((function t(){return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P(Object.assign(Object.assign({},e),{items:v})).unwrap();case 2:case"end":return t.stop()}}),t)})))},getItems:function(){return v}}})),(0,r.useEffect)((function(){h(n),_.current=n}),[n]),(0,r.useEffect)((function(){S.current=(null===L||void 0===L?void 0:L.results)||[],O.current=x||[]}),[L,x]);var w=function(e){return r.createElement(i.JK,{value:e||0})};return r.createElement(i.PS,{baseRoute:"/purchase/".concat("purchaseorder"),description:"Purchase Order",isLoading:a||b,data:v,newTable:!0,tableLayoutClass:"h-full",allowFilters:!1,hideActionColumn:u,actionBodyTemplate:function(e){return r.createElement(k.z,{style:{height:"35px",width:"20px",marginLeft:20},type:"button",onClick:function(){(0,I.V)({message:"Are you sure you want to Delete Item?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return function(e){var t=_.current.filter((function(t){return t!==e}));_.current=t,h(t)}(e)},reject:function(){}})},className:"p-button-rounded p-button-text",icon:"pi pi-trash"})},gridProps:{allowAdd:!0,disableAdd:u||!(0,E.pH)(v),newRowDefaults:{netamt:0,taxamt:0,totalamt:0},OnRowsChanged:function(e){var t=e.map((function(e){return Object.assign(Object.assign({},e),{netamt:e.qty*e.unitprice,totalamt:e.qty*e.unitprice+e.taxamt})}));h(t),_.current=t,p(!0)},getBottomSummaryRows:function(e){return[{netamt:e.map((function(e){return parseFloat(e.netamt||0)})).reduce((function(e,t){return e+t}),0),taxamt:e.map((function(e){return parseFloat(e.taxamt||0)})).reduce((function(e,t){return e+t}),0),totalamt:e.map((function(e){return parseFloat(e.totalamt||0)})).reduce((function(e,t){return e+t}),0)}]}}},r.createElement(i._P,{field:"item_key",width:"25%",header:"Item*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=S.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items)||void 0===r?void 0:r.descr}},editorType:!u&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:S.current,onChange:function(e){var r,i=Object.assign({},t);i[n.key]=e.value;var o=null===(r=S.current.filter((function(t){return t.key===e.value}))[0])||void 0===r?void 0:r.itemuom_key;i.itemuom_key=o,a(i,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"itemuom_key",width:"20%",header:"UOM*",displayValueGetter:function(e,t){var n,r;if(!Array.isArray(e)){var a=null===(n=O.current)||void 0===n?void 0:n.filter((function(n){return n.key===e[t]}));return a.length?a[0].descr:null===(r=null===e||void 0===e?void 0:e.items_uoms)||void 0===r?void 0:r.descr}},editorType:!u&&function(e){var t=e.row,n=e.column,a=e.onRowChange;e.onClose;return r.createElement(y.L,{autoFocus:!0,style:{width:"100%"},className:"p-inputtext-sm",value:t[n.key],optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:O.current,onChange:function(e){var r=Object.assign({},t);r[n.key]=e.value,a(r,!0)},tabIndex:-1})}}),r.createElement(i._P,{field:"qty",header:"Quantity",type:"number",editorType:!u&&"number"}),r.createElement(i._P,{field:"unitprice",header:"Unit Price",type:"number",editorType:!u&&"number"}),r.createElement(i._P,{field:"netamt",header:"Net Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return w(null===t||void 0===t?void 0:t.netamt)}}),r.createElement(i._P,{field:"taxamt",header:"Tax Amt",type:"currency",defaultValue:0,editorType:!u&&"currency",summaryFormatter:function(e){var t=e.row;return w(null===t||void 0===t?void 0:t.taxamt)}}),r.createElement(i._P,{field:"totalamt",header:"Total Amt",type:"currency",defaultValue:0,summaryFormatter:function(e){var t=e.row;return w(null===t||void 0===t?void 0:t.totalamt)}}))})),ne=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{c(r.next(e))}catch(t){i(t)}}function u(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}c((r=r.apply(e,t||[])).next())}))},re=function(e){var t=(0,i.pm)(),n=t.showSuccess,o=t.showError,u=(0,r.useState)(!1),c=(0,d.Z)(u,2),l=c[0],p=c[1],f=(0,r.useState)(!1),v=(0,d.Z)(f,2),h=v[0],g=v[1],T=(0,r.useState)({}),P=(0,d.Z)(T,2),b=P[0],_=P[1],S=(0,r.useState)("S"),O=(0,d.Z)(S,2),A=O[0],L=O[1],R=(0,r.useState)("SAVE"),x=(0,d.Z)(R,2),w=x[0],C=x[1],q=(0,a.s0)(),N=(0,a.UO)().id,Z=parseInt(N||""),H=isNaN(Z)||Z<=0,J=(0,r.useRef)(),D=(0,r.useRef)(),F=(0,E.ft)(),W=B(Z,{skip:H,refetchOnMountOrArgChange:!0}),Q=W.data,z=W.isLoading,K=(0,r.useState)(null),$=(0,d.Z)(K,2),X=$[0],ee=$[1],re=(0,r.useState)([]),ae=(0,d.Z)(re,2),ie=ae[0],oe=ae[1],ue=(0,r.useState)(null),ce=(0,d.Z)(ue,2),le=ce[0],se=ce[1],de=(0,E.eQ)({id:X},{skip:!X}),pe=de.data,me=(de.isFetching,M("PO",{skip:!H,refetchOnMountOrArgChange:H})),fe=me.data,ve=(me.isFetching,U(le,{skip:!le})),ye=ve.data,he=(ve.isLoading,(0,E.Wv)()),Ee=he.data,ge=he.isLoading,Te=j({}),Pe=Te.data,be=Te.isLoading,_e=(0,E.DU)(),Se=_e.data,Oe=_e.isFetching,Ae=G(),ke=(0,d.Z)(Ae,2),Ie=ke[0],Le=ke[1].isLoading,Re=Y(),xe=(0,d.Z)(Re,2),we=xe[0],Ce=xe[1].isLoading;(0,r.useEffect)((function(){if(pe)if(console.log(pe),H)oe(pe);else{var e=null===Q||void 0===Q?void 0:Q.purchs_odr_items.concat(pe);oe(e)}}),[pe]),(0,r.useEffect)((function(){_(Q||Object.assign(Object.assign({},F),{date:(0,E.Hh)(new Date,!0),docid:"PO",number:null===fe||void 0===fe?void 0:fe.next_doc_id,loctyp:"PR"})),Q&&(oe((null===Q||void 0===Q?void 0:Q.purchs_odr_items)||[]),se(Q.itemtyp_key))}),[Q,fe]);var qe=function(){return["U","R","C"].includes(null===Q||void 0===Q?void 0:Q.docstatus)},Ne=function(e,t){return ne(void 0,void 0,void 0,(0,s.Z)().mark((function n(){var r;return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L(e);case 2:return n.next=4,C(t);case 4:null===(r=document.getElementById("submit"))||void 0===r||r.click();case 5:case"end":return n.stop()}}),n)})))};return r.createElement(r.Fragment,null,r.createElement(i.Rm,{disableSaveBtn:qe(),baseRoute:"/purchase/purchaseorder",description:"Purchase Order",id:Z,data:b,isUpdating:Le||Ce||l,ref:D,isItemsTableChanged:h,moreSubmitItems:r.createElement(r.Fragment,null,r.createElement(k.z,{label:"Submit",style:{margin:"0 20px"},disabled:"S"!==(null===Q||void 0===Q?void 0:Q.docstatus),onClick:function(e){var t;e.preventDefault(),(null===(t=D.current)||void 0===t?void 0:t.getIsDirty())||h?(0,I.V)({message:"Do you want to save the changes before submit?",header:"Confirmation",icon:"pi pi-exclamation-triangle",accept:function(){return Ne("U","SUBMIT_WITH_SAVE")},reject:function(){return Ne("U","SUBMIT_WITHOUT_SAVE")}}):Ne("U","SUBMIT_WITH_SAVE")}}),r.createElement(k.z,{label:"Cancel",disabled:H||["R","C"].includes(null===Q||void 0===Q?void 0:Q.docstatus),className:"p-button-plain",onClick:function(e){return C("CANCEL"),L("C"),!0}})),isLoading:z,onSubmit:function(e){return ne(void 0,void 0,void 0,(0,s.Z)().mark((function t(){var r,a,i,u;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,i=null===(r=J.current)||void 0===r?void 0:r.getItems(),u=Object.assign(Object.assign({},e),{docid:"PO",number:H?null===fe||void 0===fe?void 0:fe.next_doc_id:null===Q||void 0===Q?void 0:Q.number,date:(0,E.p6)(e.date,"yyyy-MM-dd"),loctyp:"PR",itemtyp_key:le,docstatus:A,action:w,purchs_odr_items:i}),console.log(u),!H){t.next=10;break}return t.next=7,Ie(Object.assign(Object.assign({},u),F)).unwrap();case 7:a=t.sent,t.next=13;break;case 10:return t.next=12,we(Object.assign(Object.assign(Object.assign({},u),F),{key:null===Q||void 0===Q?void 0:Q.key})).unwrap();case 12:a=t.sent;case 13:n("Success",a.detail),p(!0),setTimeout((function(){q("/purchase/purchaseorder")}),E.P7),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(0),o("An error occurred","We couldn't save your post, try again!");case 21:case"end":return t.stop()}}),t,null,[[0,18]])})))},renderForm:function(e,t,n){return r.createElement("div",{className:"pl-4 pt-4 grid p-fluid h-full"},r.createElement(i.Wi,{label:"PO Number",name:"number",className:"col-12 md:col-6",control:e,errors:n,leftSpan:4,rightSpan:6,formItem:{component:m.o,componentProps:{useGrouping:!1,disabled:!0,value:(null===Q||void 0===Q?void 0:Q.number)||(null===fe||void 0===fe?void 0:fe.next_doc_id)}}}),r.createElement(i.Wi,{label:"PO Date",name:"date",className:"col-12 md:col-6",useExplicit:!0,control:e,errors:n,leftSpan:4,rightSpan:6,convertValue:E.Hh,formItem:{component:V.f,componentProps:{showIcon:!0,dateFormat:"yy-mm-dd"}}}),r.createElement(i.Wi,{label:"Project",name:"proj_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:be,required:"Select a Project",leftSpan:4,rightSpan:6,useExplicit:!0,formItem:{component:y.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Pe}}}),r.createElement(i.Wi,{label:"Vendor",name:"vend_key",className:"col-12 md:col-6",control:e,errors:n,isLoading:ge,required:"Select a Vendor",leftSpan:4,rightSpan:6,useExplicit:!0,formItem:{component:y.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:Ee}}}),r.createElement(i.Wi,{label:"Item Type",name:"itemtyp_key",control:e,errors:n,isLoading:Oe,className:"col-12 md:col-6",leftSpan:4,rightSpan:6,required:!0,useExplicit:!0,onChange:function(e){se(e.value)},formItem:{component:y.L,componentProps:{optionLabel:"descr",optionValue:"key",filter:!0,filterBy:"descr",options:null===Se||void 0===Se?void 0:Se.results,value:le}}}),r.createElement(i.Wi,{label:"PO Template",name:"purtmpl_key",className:"col-12 md:col-6",control:e,errors:n,useExplicit:!0,onChange:function(e){qe()||ee(e.value)},leftSpan:4,rightSpan:6,formItem:{component:y.L,componentProps:{optionLabel:"name",optionValue:"key",filter:!0,filterBy:"name",options:ye}}}),r.createElement("div",{className:"col-12 ",style:{height:"calc(100% - 183px)",minHeight:200}},r.createElement(te,{selectedItemType:le,data:ie,isLoading:z,ref:J,disableTable:qe(),onChange:function(e){return!h&&g(e)}})))}}))},ae=function(e){var t=z({}),n=t.data,a=t.isLoading,o=Q(),u=(0,d.Z)(o,2),c=u[0],l=u[1].isLoading;return r.createElement(i.PS,{baseRoute:"/purchase/purchaseorder",description:"Purchase Order",isLoading:a||l,data:null===n||void 0===n?void 0:n.results,newTable:!0,showHeader:!0,deleteAction:function(e){return c(e).unwrap()}},r.createElement(i._P,{field:"number",header:"PO Number",filteringType:"number"}),r.createElement(i._P,{field:"date",header:"PO Date",filteringType:"date"}),r.createElement(i._P,{field:"vendor.name",header:"Vendor",filteringType:"text"}),r.createElement(i._P,{field:"project.name",header:"Project",filteringType:"text"}),r.createElement(i._P,{field:"status.descr",header:"PO Status",filteringType:"text"}))},ie=r.createElement(a.AW,{path:"purchaseorder"},r.createElement(a.AW,{path:"new",element:r.createElement(re,null)}),r.createElement(a.AW,{path:":id/edit",element:r.createElement(re,null)}),r.createElement(a.AW,{index:!0,element:r.createElement(ae,null)})),oe=function(){return r.createElement(a.Z5,null,r.createElement(a.AW,{path:"/",element:r.createElement(i.SV,{navItems:l})},r.createElement(a.AW,{index:!0,element:r.createElement(a.Fg,{to:"purchaseorder",replace:!0})}),D,ie,(0,o.Z)(u),r.createElement(a.AW,{path:":purchase/comming-soon",element:r.createElement(i.hg,null)}),r.createElement(a.AW,{path:"*",element:r.createElement(i.EN,{relative:!0})})))}}}]);
//# sourceMappingURL=474.d058ce2f.chunk.js.map