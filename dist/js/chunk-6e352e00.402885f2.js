(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e352e00"],{"3c89":function(t,e,a){},a13b:function(t,e,a){"use strict";var n=a("3c89"),i=a.n(n);i.a},a567:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tableCommon-wrapper"},[a("a-table",{attrs:{columns:t.tableHead,dataSource:t.tableData,loading:t.loading,pagination:t.pagination,"row-selection":t.rowSelection,rowKey:"id",scroll:t.scroll},on:{change:t.handleTableChange},scopedSlots:t._u([t._l(Object.keys(t.$scopedSlots).filter((function(t){return"expandedRowRender"!==t})),(function(e){return{key:e,fn:function(a,n,i){return[t._t(e,null,null,{text:a,record:n,index:i})]}}}))],null,!0)})],1)},i=[],r={name:"standardTable",props:{tableHead:{type:Array,required:!0},tableData:{type:Array,required:!0},loading:{type:Boolean,default:!1},pagination:{type:Boolean|Object},rowSelection:{type:Object},scroll:{type:Object}},data:function(){return{}},methods:{handleTableChange:function(t){this.$emit("changeCurrent",t.current)}}},l=r,s=a("2877"),o=Object(s["a"])(l,n,i,!1,null,"efa95cdc",null);e["a"]=o.exports},b4dd:function(t,e,a){"use strict";a("d3b7");var n=function(t){return new Promise((function(e,a){var n=document.getElementById(t);if(n)setTimeout((function(){e()}),500);else{var i=document.createElement("script");i.id=t,i.src=t,i.async=!0,document.body.appendChild(i),i.onload=function(){var t=this;setTimeout((function(){t.onerror=t.onload=null,e()}),500)},i.onerror=function(){this.onerror=this.onload=null,a("加载失败"+t)}}}))};e["a"]=n},e43d:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-wrapper"},[a("a-card",{attrs:{hoverable:!0,bordered:!1}},[a("div",{staticClass:"flex flex-wrap",attrs:{slot:"title"},slot:"title"},[a("a-button",{staticStyle:{margin:"0 16px 10px"},attrs:{type:"danger",icon:"delete",loading:t.deleteLoading},on:{click:t.batchDeleteTable}},[t._v(" 批量删除 ")]),a("div",{staticClass:"filter-wrapper"},[a("span",{staticClass:"label"},[t._v("付款人：")]),a("a-input",{staticClass:"select-width",attrs:{placeholder:"付款人"},model:{value:t.filterList.name,callback:function(e){t.$set(t.filterList,"name",e)},expression:"filterList.name"}})],1),a("div",{staticClass:"filter-wrapper",staticStyle:{margin:"0 15px"}},[a("span",{staticClass:"label"},[t._v("订单状态：")]),a("a-select",{staticClass:"select-width",attrs:{placeholder:"订单状态",allowClear:""},on:{change:t.changeStatus}},t._l(t.typeOption,(function(e){return a("a-select-option",{key:e.key,attrs:{value:e.key}},[t._v(" "+t._s(e.label)+" ")])})),1)],1),a("a-button",{staticClass:"select-bottom",staticStyle:{"margin-right":"16px"},attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v(" 查询 ")]),a("a-button",{staticClass:"select-bottom",attrs:{type:"primary",icon:"export",loading:t.exportLoading},on:{click:t.handleExport}},[t._v(" 导出 ")])],1),a("standard-table",{attrs:{tableData:t.tableData,tableHead:t.tableHead,loading:t.loading,pagination:{pageSize:t.filterList.size,current:t.filterList.page,total:t.filterList.total,showTotal:function(e){return t.filterList.total+" 条"}},rowSelection:{selectedRowKeys:t.selectedRowKeys,onChange:t.handleSelect}},on:{changeCurrent:t.handleChangeCurrent},scopedSlots:t._u([{key:"index",fn:function(e){var n=e.index;return a("div",{},[t._v(" "+t._s(n+1)+" ")])}},{key:"money",fn:function(e){var n=e.text;return a("div",{},[t._v("¥ "+t._s(n))])}},{key:"action",fn:function(e){var n=e.text;return a("div",{},[a("a-button",{attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleEdit(n)}}},[t._v(" 编辑 ")]),a("a-popconfirm",{attrs:{title:"你确定要删除当前列吗?","ok-text":"是","cancel-text":"否"},on:{confirm:function(e){return t.handleDelete(n)}}},[a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"danger",size:"small"}},[t._v(" 删除 ")])],1)],1)}}])})],1),a("a-modal",{attrs:{title:"编辑",visible:t.editShow,okText:"确认",cancelText:"取消",width:620},on:{ok:t.handleOk,cancel:function(e){t.editShow=!1}}},[a("a-form-model",{attrs:{"label-col":{span:4},"wrapper-col":{span:16},hideRequiredMark:""}},[a("a-form-model-item",{attrs:{prop:"id",label:"id"}},[a("a-input",{attrs:{disabled:""},model:{value:t.currentEdit.id,callback:function(e){t.$set(t.currentEdit,"id",e)},expression:"currentEdit.id"}})],1),a("a-form-model-item",{attrs:{prop:"name",label:"付款人"}},[a("a-input",{attrs:{disabled:""},model:{value:t.currentEdit.name,callback:function(e){t.$set(t.currentEdit,"name",e)},expression:"currentEdit.name"}})],1),a("a-form-model-item",{attrs:{prop:"status",label:"订单状态"}},[a("a-input",{attrs:{disabled:""},model:{value:t.currentEdit.status,callback:function(e){t.$set(t.currentEdit,"status",e)},expression:"currentEdit.status"}})],1),a("a-form-model-item",{attrs:{prop:"date",label:"下单时间"}},[a("a-input",{attrs:{disabled:""},model:{value:t.currentEdit.date,callback:function(e){t.$set(t.currentEdit,"date",e)},expression:"currentEdit.date"}})],1),a("a-form-model-item",{attrs:{prop:"money",label:"付款金额"}},[a("a-input",{attrs:{disabled:""},model:{value:t.currentEdit.money,callback:function(e){t.$set(t.currentEdit,"money",e)},expression:"currentEdit.money"}})],1),a("a-form-model-item",{attrs:{prop:"text",label:"备注"}},[a("a-input",{model:{value:t.currentEdit.text,callback:function(e){t.$set(t.currentEdit,"text",e)},expression:"currentEdit.text"}})],1)],1)],1)],1)},i=[],r=(a("4160"),a("a15b"),a("d81d"),a("b0c0"),a("d3b7"),a("159b"),a("5530")),l=a("a567"),s=a("b775");function o(t){return s["a"].post("/table/tableList",t)}function c(t){return s["a"].post("/table/deleteTable",t)}function d(t){return s["a"].post("/table/batchDeleteTable",t)}function u(t){return s["a"].post("/table/editTable",t)}var p=a("ed08"),f={name:"tables",components:{standardTable:l["a"]},data:function(){return{typeOption:[{key:"待付款",label:"待付款"},{key:"待发货",label:"待发货"},{key:"已发货",label:"已发货"},{key:"已收货",label:"已收货"},{key:"已评价",label:"已评价"}],tableHead:[{title:"序号",dataIndex:"index",scopedSlots:{customRender:"index"},width:60},{title:"用户id",dataIndex:"id",ellipsis:!0},{title:"付款人",dataIndex:"name"},{title:"订单状态",dataIndex:"status"},{title:"下单时间",dataIndex:"date",ellipsis:!0},{title:"付款金额",dataIndex:"money",scopedSlots:{customRender:"money"}},{title:"备注",dataIndex:"text",ellipsis:!0},{title:"操作",scopedSlots:{customRender:"action"},width:140}],tableData:[],loading:!1,selectedRowKeys:[],selectValue:[],currentEdit:{},editShow:!1,filterList:{name:"",status:"",page:1,size:15,total:0},deleteLoading:!1,exportLoading:!1}},mounted:function(){this.getTableData()},methods:{handleSelect:function(t,e){this.selectedRowKeys=t,this.selectValue=e},getTableData:function(){var t=this;this.loading=!0;var e=this.filterList,a=e.name,n=e.status,i=e.page,r=e.size;o({page:i,size:r,name:a,status:n}).then((function(e){var a=e.data||{};t.filterList.total=a.total||0,t.tableData=a.list||[],t.loading=!1}))},changeStatus:function(t){this.filterList.status=t},handleChangeCurrent:function(t){this.filterList.page=t,this.getTableData()},search:function(){this.filterList.page=1,this.getTableData()},handleEdit:function(t){this.currentEdit=Object(r["a"])({},t),this.editShow=!0},handleDelete:function(t){var e=this,a=t.id;c({id:a}).then((function(t){e.getTableData(),e.$message.success("删除成功")}))},batchDeleteTable:function(){var t=this;if(0!=this.selectValue.length){this.deleteLoading=!0;var e=this.selectValue.map((function(t){return t.id})).join(",");d({batchId:e}).then((function(e){t.getTableData(),t.$message.success("批量删除成功"),t.deleteLoading=!1}))}else this.$message.warning("请至少勾选一项")},handleOk:function(){var t=this,e=this.currentEdit,a=e.id,n=e.text;u({id:a,text:n}).then((function(e){t.$message.success("修改成功！"),t.editShow=!1,t.getTableData()}))},handleExport:function(){var t=this;this.exportLoading=!0,Promise.all([a.e("chunk-6e87ca78"),a.e("chunk-b9614302"),a.e("chunk-2133cd4f")]).then(a.bind(null,"4bf8")).then((function(e){var a=[],n=[];t.tableHead.forEach((function(t){"操作"!=t.title&&"序号"!=t.title&&(a.push(t.title),n.push(t.dataIndex))}));var i=Object(p["b"])(t.tableData,n);e.export_json_to_excel({header:a,data:i,filename:"表单统计"}),t.exportLoading=!1}))}}},m=f,h=(a("a13b"),a("2877")),b=Object(h["a"])(m,n,i,!1,null,"023ca074",null);e["default"]=b.exports},ed08:function(t,e,a){"use strict";a.d(e,"a",(function(){return s})),a.d(e,"c",(function(){return o})),a.d(e,"b",(function(){return c}));a("4de4"),a("d81d"),a("d3b7"),a("ac1f"),a("25f0"),a("5319"),a("1276");var n=a("b4dd"),i=a("ef60"),r=i.AMapCDN,l=i.AMapUiCDN;function s(t,e){var a,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=this;return function(){for(var r=arguments.length,l=new Array(r),s=0;s<r;s++)l[s]=arguments[s];if(n)return t.apply(i,l),void(n=!1);clearTimeout(a),a=setTimeout((function(){t.apply(i,l)}),e)}}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new Promise((function(a,i){function s(t,e){AMapUI.loadUI(["geo/DistrictExplorer"],(function(n){var r=new n;r.loadAreaNode(t,(function(n,r){if(n)i(n);else{var l=r.getSubFeatures();if(0!==l.length){e&&(l=l.filter((function(t){return t.properties.adcode==e})));var o={features:l};a(o)}else{var c=r._data.geoData.parent.properties.acroutes;s(c[c.length-1],t)}}}))}))}window.AMap&&window.AMapUI?s(t,e):Object(n["a"])(r).then((function(){window.AMap&&Object(n["a"])(l).then((function(){window.AMapUI&&s(t,e)}))}))}))}function c(t,e){return t.map((function(t){return e.map((function(e){return t[e].toString()}))}))}},ef60:function(t,e){var a="https://webapi.amap.com/maps?v=1.3&key=73cddabc2173e0166a622f4483d3592a&plugin=AMap.DistrictSearch",n="https://webapi.amap.com/ui/1.0/main.js",i="https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.min.js",r="https://cdn.jsdelivr.net/npm/axios@0.21.0/dist/axios.min.js",l="https://cdn.jsdelivr.net/npm//vue-router@3.2.0/dist/vue-router.min.js",s="https://cdn.jsdelivr.net/npm/vuex@3.5.1/dist/vuex.min.js",o="https://cdn.jsdelivr.net/npm/tinymce-all-in-one@4.9.3/tinymce.min.js",c="https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.7/dist/html2canvas.min.js";t.exports={AMapCDN:a,AMapUiCDN:n,VueCDN:i,AxiosCDN:r,VueRouterCDN:l,VuexCDN:s,TinymceCDN:o,html2canvasCDN:c}}}]);