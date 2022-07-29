"use strict";(self["webpackChunkpayroll_managment_system"]=self["webpackChunkpayroll_managment_system"]||[]).push([[62],{3062:function(e,t,s){s.r(t),s.d(t,{default:function(){return L}});var a=s(6190),l=s(9582),i=s(4886),n=s(266),r=s(3875),o=s(9223),c=s(4324),h=s(1713),m=s(5375),d=s(7808),u=function(){var e=this,t=e._self._c;return t(l.Z,{attrs:{elevation:"5",outlined:""}},[t(i.EB,[t(h.Z,[t(n.Z,{attrs:{colls:"1"}},[t("add-payroll",{on:{registerEmployee:e.registerEmployee}})],1),t(n.Z,{attrs:{colls:"1"}},[t(m.Z,{attrs:{items:["","2021","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032"],label:"Year",required:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(n.Z,{attrs:{colls:"3"}},[t(m.Z,{attrs:{items:["","Managment","IT","Finance","Marketing"],label:"Department",required:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(n.Z,{attrs:{colls:"4"}},[t(m.Z,{attrs:{items:["","September","October","December","January","February","March","April","May","June","July","Auguest"],label:"Search by Month",required:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),t(n.Z,{attrs:{colls:"3"}},[t(d.Z,{attrs:{"append-icon":"mdi-magnify",label:"Search any thing...","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)],1)],1),t(a.Z,[t(c.Z,{staticClass:"mr-2",attrs:{small:""}},[e._v(" mdi-printer")]),e._v("Print ")],1),t(o.Z),t(i.ZB,[t(r.Z,{attrs:{headers:e.$store.state.payroll.headers,items:e.$store.state.payroll.payroll,search:e.search},scopedSlots:e._u([{key:"item.actions",fn:function({item:s}){return[t("payroll-detail"),t(c.Z,{staticClass:"mr-2",attrs:{small:"",color:"blue"},on:{click:function(t){return e.editItem(s.id)}}},[e._v(" mdi-printer ")]),t(c.Z,{attrs:{small:"",color:"red"},on:{click:function(t){return e.deleteItem(s.id)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)],1)},p=[],y=(s(6699),s(1767)),Z=s(5352);const v={...m.l,offsetY:!0,offsetOverflow:!0,transition:!1};var I=m.Z.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:(e,t,s)=>s.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1},hideNoData:Boolean,menuProps:{type:m.Z.options.props.menuProps.type,default:()=>v},noFilter:Boolean,searchInput:{type:String}},data(){return{lazySearch:this.searchInput}},computed:{classes(){return{...m.Z.options.computed.classes.call(this),"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1}},computedItems(){return this.filteredItems},selectedValues(){return this.selectedItems.map((e=>this.getValue(e)))},hasDisplayedItems(){return this.hideSelected?this.filteredItems.some((e=>!this.hasItem(e))):this.filteredItems.length>0},currentRange(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems(){return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((e=>{const t=(0,Z.qF)(e,this.itemText),s=null!=t?String(t):"";return this.filter(e,String(this.internalSearch),s)}))},internalSearch:{get(){return this.lazySearch},set(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed(){return!1},isDirty(){return this.searchIsDirty||this.selectedItems.length>0},isSearching(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps(){const e=m.Z.options.computed.$_menuProps.call(this);return e.contentClass=`v-autocomplete__content ${e.contentClass||""}`.trim(),{...v,...e}},searchIsDirty(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem(){return this.multiple?null:this.selectedItems.find((e=>this.valueComparator(this.getValue(e),this.getValue(this.internalValue))))},listData(){const e=m.Z.options.computed.listData.call(this);return e.props={...e.props,items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch},e}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive(e){!e&&this.hasSlot&&(this.lazySearch=null)},items(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created(){this.setSearch()},destroyed(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged(e,t){if(e!==t){if(!this.autoSelectFirst){const s=t[this.$refs.menu.listIndex];s?this.setMenuIndex(e.findIndex((e=>e===s))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((()=>{this.internalSearch&&(1===e.length||this.autoSelectFirst)&&(this.$refs.menu.getTiles(),this.autoSelectFirst&&e.length&&(this.setMenuIndex(0),this.$emit("update:list-index",this.$refs.menu.listIndex)))}))}},onInternalSearchChanged(){this.updateMenuDimensions()},updateMenuDimensions(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex(e){this.searchIsDirty||(this.multiple&&e===Z.Do.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===Z.Do.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==Z.Do.backspace&&e!==Z.Do["delete"]||this.deleteCurrentItem())},deleteCurrentItem(){const e=this.selectedIndex,t=this.selectedItems[e];if(!this.isInteractive||this.getDisabled(t))return;const s=this.selectedItems.length-1;if(-1===this.selectedIndex&&0!==s)return void(this.selectedIndex=s);const a=this.selectedItems.length,l=e!==a-1?e:e-1,i=this.selectedItems[l];i?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l},clearableCallback(){this.internalSearch=null,m.Z.options.methods.clearableCallback.call(this)},genInput(){const e=d.Z.options.methods.genInput.call(this);return e.data=(0,y.ZP)(e.data,{attrs:{"aria-activedescendant":(0,Z.vO)(this.$refs.menu,"activeTile.id"),autocomplete:(0,Z.vO)(e.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),e},genInputSlot(){const e=m.Z.options.methods.genInputSlot.call(this);return e.data.attrs.role="combobox",e},genSelections(){return this.hasSlot||this.multiple?m.Z.options.methods.genSelections.call(this):[]},onClick(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput(e){if(this.selectedIndex>-1||!e.target)return;const t=e.target,s=t.value;t.value&&this.activateMenu(),this.multiple||""!==s||this.deleteCurrentItem(),this.internalSearch=s,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){const t=e.keyCode;!e.ctrlKey&&[Z.Do.home,Z.Do.end].includes(t)||m.Z.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown(e){},onTabDown(e){m.Z.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown(e){e.preventDefault(),this.activateMenu()},selectItem(e){m.Z.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems(){m.Z.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch(){this.$nextTick((()=>{this.multiple&&this.internalSearch&&this.isMenuActive||(this.internalSearch=!this.selectedItems.length||this.multiple||this.hasSlot?null:this.getText(this.selectedItem))}))},updateSelf(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy(e){var t,s;if(-1===this.selectedIndex)return;const a=this.selectedItems[this.selectedIndex],l=this.getText(a);null==(t=e.clipboardData)||t.setData("text/plain",l),null==(s=e.clipboardData)||s.setData("text/vnd.vuetify.autocomplete.item+plain",l),e.preventDefault()}}}),g=s(2118),f=s(4061),_=s(5125),D=s(3687),S=function(){var e=this,t=e._self._c;return t(f.Z,{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:l}){return[t(a.Z,e._g(e._b({attrs:{elevation:"5",small:"",color:"primary",dark:""}},"v-btn",l,!1),s),[t(c.Z,{attrs:{dense:"",small:""}},[e._v("mdi-cash-multiple")]),e._v(" Add Payroll ")],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.Z,[t(i.EB,[t("span",{staticClass:"text-h5"},[e._v("Generate Employee Payroll ")])]),t(o.Z),t(i.ZB,[t(g.Z,[t(_.Z,{ref:"form"},[t(h.Z,[t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(m.Z,{attrs:{items:["Managment","IT","Finance","Marketing"],label:"Department",required:""},model:{value:e.employeeData.department,callback:function(t){e.$set(e.employeeData,"department",t)},expression:"employeeData.department"}})],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I,{attrs:{items:["","September","October","December","January","February","March","April","May","June","July","Auguest"],label:"Month"}})],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(I,{attrs:{items:["","2022","2023","2024","2025","2026","2027","2028","2029","2030","2031","2032"],label:"Year"}})],1)],1)],1)],1)],1),t(o.Z),t(i.h7,[t(D.Z),t(a.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),t(a.Z,{attrs:{color:"blue darken-1",text:"",type:"submit"},on:{click:e.savePayroll}},[e._v(" Generate ")])],1)],1)],1)},b=[],x={data(){return{dialog:!1,employeeData:{name:"",phone:"",email:"",city:"",tin:"",homeNumber:"",birthDate:"",postion:"",hiringDate:"",salary:"",allowance:"",account:"",workType:""}}},methods:{saveEmployee(){this.$emit("registerEmployee",this.employeeData),this.dialog=!1}}},k=x,w=s(1001),C=(0,w.Z)(k,S,b,!1,null,null,null),V=C.exports,M=s(4525),F=s(2017),$=function(){var e=this,t=e._self._c;return t(f.Z,{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function({on:s,attrs:a}){return[t(c.Z,e._g(e._b({staticClass:"mr-2",attrs:{small:"",color:"green"},on:{click:function(t){return e.editItem(e.item.id)}}},"v-icon",a,!1),s),[e._v(" mdi-eye ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(l.Z,[t(i.EB,[t("span",{staticClass:"text-h5"},[e._v("Abebe Belay Detail Info")])]),t(o.Z),t(i.ZB,[t(h.Z,[t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Full Name")]),t(F.oZ,[e._v(e._s(e.employeeData.name))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Phone Number")]),t(F.oZ,[e._v(e._s(e.employeeData.phone))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Email")]),t(F.oZ,[e._v(e._s(e.employeeData.email))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("City")]),t(F.oZ,[e._v(e._s(e.employeeData.city))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Tin Number")]),t(F.oZ,[e._v(e._s(e.employeeData.tin))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("House Number")]),t(F.oZ,[e._v(e._s(e.employeeData.homeNumber))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Birth Date")]),t(F.oZ,[e._v(e._s(e.employeeData.birthDate))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Work Position")]),t(F.oZ,[e._v(e._s(e.employeeData.postion))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Hiring Date")]),t(F.oZ,[e._v(e._s(e.employeeData.hiringDate))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Salary")]),t(F.oZ,[e._v(e._s(e.employeeData.salary))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Allowance")]),t(F.oZ,[e._v(e._s(e.employeeData.allowance))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Account")]),t(F.oZ,[e._v(e._s(e.employeeData.account))])],1)],1)],1),t(n.Z,{attrs:{cols:"12",sm:"6",md:"4"}},[t(M.Z,{attrs:{"two-line":""}},[t(F.km,[t(F.V9,[e._v("Work Type")]),t(F.oZ,[e._v(e._s(e.employeeData.workType))])],1)],1)],1)],1)],1),t(i.h7,[t(D.Z),t(a.Z,{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")])],1)],1)],1)},T=[],A={data(){return{dialog:!1,employeeData:{name:"Abebe Belay",phone:"0956897845",email:"abebe@gmail.com",city:"Addis Ababa",tin:"00994567",homeNumber:"345",birthDate:"2/14/1990",postion:"IT Officer",hiringDate:"5/06/2014",salary:"5863",allowance:"1000",account:"1000235698745",workType:"Permanent"}}},methods:{}},P=A,B=(0,w.Z)(P,$,T,!1,null,null,null),E=B.exports,N={components:{AddPayroll:V,PayrollDetail:E},data(){return{search:""}},methods:{registerEmployee(e){this.$store.state.employee.push(e)}}},O=N,z=(0,w.Z)(O,u,p,!1,null,null,null),L=z.exports}}]);
//# sourceMappingURL=62.6ddacc1c.js.map