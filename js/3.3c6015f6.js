(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"hHh Lpr fFf"}},[a("q-header",{staticClass:"bg-white text-dark",attrs:{elevated:"","height-hint":"64",id:"topHeader"}},[a("q-toolbar",[a("q-btn",{staticClass:"q-mr-sm",attrs:{flat:"",dense:"",round:"","aria-label":"Menu",icon:"menu"},on:{click:function(t){e.leftDrawerOpen=!e.leftDrawerOpen}}}),a("div",{attrs:{id:"logo-container"}},[a("router-link",{attrs:{to:"/"}},[a("img",{attrs:{id:"logo-image",src:i("caad")}})]),a("span",{attrs:{id:"logo-text"}},[e._v(e._s(e.$t("Settings.Logo.Title")))])],1),a("q-space"),a("website-search",{directives:[{name:"show",rawName:"v-show",value:e.$q.screen.gt.sm&&e.$route.path.length>1,expression:"$q.screen.gt.sm && $route.path.length > 1"}],attrs:{toolbar:""}}),a("q-space"),a("div",{staticClass:"q-gutter-sm row items-center no-wrap"},[e.$q.screen.gt.sm?a("q-btn-dropdown",{attrs:{"no-caps":"",icon:"language",stretch:"",flat:"",label:"Language"}},[a("q-list",e._l(e.langOptions,(function(t,i){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:i,attrs:{clickable:"",tabindex:"0"},on:{click:function(i){return e.changeLanguage(t.value)}}},[a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1),"en-us"===t.value?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"done_all"}})],1):e._e()],1)})),1)],1):e._e(),e.$q.screen.lt.md?a("q-btn",{attrs:{label:e.$q.screen.gt.xs?"Search":"",to:"/",dense:"",flat:"","no-caps":"",icon:"search"}}):e._e(),a("q-btn",{attrs:{dense:"",flat:"","no-caps":"",label:e.$q.screen.gt.xs?"Settings":"",icon:"build_circle"},on:{click:function(t){e.rightDrawerOpen=!e.rightDrawerOpen}}})],1)],1)],1),a("q-drawer",{attrs:{padding:"","show-if-above":""},model:{value:e.leftDrawerOpen,callback:function(t){e.leftDrawerOpen=t},expression:"leftDrawerOpen"}},[a("q-scroll-area",{staticClass:"fit"},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v(e._s(e.$t("Settings.LeftDrawer.Intro.key1")))]),a("q-item",{attrs:{to:"/intro",exact:"","active-class":"is-active-link",clickable:"",tag:"a"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"chat_bubble_outline"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("Settings.LeftDrawer.Intro.key2")))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(e.$t("Settings.LeftDrawer.Intro.key3")))])],1)],1),a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v(e._s(e.$t("Settings.LeftDrawer.Section1.key1")))]),a("q-expansion-item",{ref:"marriageSectionParent",attrs:{group:"sectionGroup",icon:"filter_1","content-inset-level":1,label:e.$t("Settings.LeftDrawer.Section1.key2"),caption:e.$t("Settings.LeftDrawer.Section1.key3")}},e._l(e.marriageSection,(function(t){return a("q-item",e._b({directives:[{name:"ripple",rawName:"v-ripple.early",modifiers:{early:!0}}],key:t.title,attrs:{clickable:"","active-class":"is-active-link",exact:"",to:t.link,tag:"a"}},"q-item",t,!1),[a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1)],1)})),1),a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v(e._s(e.$t("Settings.LeftDrawer.Section2.key1")))]),a("q-expansion-item",{attrs:{icon:"filter_2",group:"sectionGroup","content-inset-level":1,label:e.$t("Settings.LeftDrawer.Section2.key2"),caption:e.$t("Settings.LeftDrawer.Section2.key3")}},e._l(e.violenceSection,(function(t){return a("q-item",e._b({directives:[{name:"ripple",rawName:"v-ripple.early",modifiers:{early:!0}}],key:t.title,attrs:{clickable:"","active-class":"is-active-link",exact:"",to:t.link,tag:"a"}},"q-item",t,!1),[a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1)],1)})),1),a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v(e._s(e.$t("Settings.LeftDrawer.Section3.key1")))]),a("q-expansion-item",{attrs:{icon:"filter_3","content-inset-level":1,group:"sectionGroup",label:e.$t("Settings.LeftDrawer.Section3.key2"),caption:e.$t("Settings.LeftDrawer.Section3.key3")}},e._l(e.quranSection,(function(t){return a("q-item",e._b({directives:[{name:"ripple",rawName:"v-ripple.early",modifiers:{early:!0}}],key:t.title,attrs:{clickable:"","active-class":"is-active-link",exact:"",to:t.link,tag:"a"}},"q-item",t,!1),[a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1)],1)})),1),a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[e._v(e._s(e.$t("Settings.LeftDrawer.Section4.key1")))]),a("q-expansion-item",{attrs:{icon:"filter_4",group:"sectionGroup","content-inset-level":1,label:e.$t("Settings.LeftDrawer.Section4.key2"),caption:e.$t("Settings.LeftDrawer.Section4.key3")}},e._l(e.commonSection,(function(t){return a("q-item",e._b({directives:[{name:"ripple",rawName:"v-ripple.early",modifiers:{early:!0}}],key:t.title,attrs:{clickable:"","active-class":"is-active-link",exact:"",to:t.link,tag:"a"}},"q-item",t,!1),[a("q-item-section",[a("q-item-label",[e._v(e._s(t.title))])],1)],1)})),1)],1)],1)],1),a("q-drawer",{attrs:{side:"right",elevated:"","content-class":"tr",overlay:"",behavior:"mobile",width:270,id:"rightDrawer",breakpoint:500},model:{value:e.rightDrawerOpen,callback:function(t){e.rightDrawerOpen=t},expression:"rightDrawerOpen"}},[a("q-list",{attrs:{padding:""}},[a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key1")))]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"brightness_6"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("Settings.RightDrawer.key2")))])],1),a("q-item-section",{attrs:{side:""}},[a("q-toggle",{attrs:{color:"blue",val:"battery"},on:{input:function(t){return e.toggleNightTheme(e.isNightMode)}},model:{value:e.isNightMode,callback:function(t){e.isNightMode=t},expression:"isNightMode"}})],1)],1),a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key3")))]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"fullscreen"}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("Settings.RightDrawer.key4")))])],1),a("q-item-section",{attrs:{side:""}},[a("q-toggle",{attrs:{val:"battery",color:"green"},on:{input:function(t){return e.toggleFullScreen(e.isFullScreen)}},model:{value:e.isFullScreen,callback:function(t){e.isFullScreen=t},expression:"isFullScreen"}})],1)],1),a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key5")))]),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"remove"},on:{click:e.decreaseFontSize}})],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("Settings.RightDrawer.key6")))])],1),a("q-item-section",{attrs:{side:""}},[a("q-icon",{attrs:{name:"add"},on:{click:e.increaseFontSize}})],1)],1),e.$q.screen.lt.md?[a("q-item-label",{attrs:{header:""}},[e._v(e._s(e.$t("Settings.RightDrawer.key7")))]),a("q-item",{attrs:{tag:"label"}},[a("q-item-section",[a("q-btn-dropdown",{attrs:{"no-caps":"",icon:"language",stretch:"",flat:"",label:"Language"}},[a("q-list",e._l(e.langOptions,(function(t,i){return a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],key:i,attrs:{clickable:"",tabindex:"0"},on:{click:function(i){return e.changeLanguage(t.value)}}},[a("q-item-section",[a("q-item-label",[e._v(e._s(t.label))])],1),"en-us"===t.value?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"done_all"}})],1):e._e()],1)})),1)],1)],1)],1)]:e._e()],2)],1),a("q-page-container",[a("router-view"),a("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[a("q-btn",{attrs:{fab:"",icon:"keyboard_arrow_up",color:"primary"}},[a("q-tooltip",[e._v(e._s(e.$t("Settings.Tooltip.BackToTop")))])],1)],1),a("div",{attrs:{id:"is-footer"},domProps:{innerHTML:e._s(e.$t("Settings.Footer.Text"))}})],1)],1)},n=[],r=(i("e6cf"),{name:"MainLayout",components:{WebsiteSearch:()=>Promise.all([i.e(0),i.e(4)]).then(i.bind(null,"0902"))},data(){return{leftDrawerOpen:!1,rightDrawerOpen:!1,isNightMode:!1,isFullScreen:!1,isActive:!1,fontSize:16,lineHeight:24,lang:this.$i18n.locale,langOptions:[{value:"en-us",label:"English"},{value:"ar",label:"Arabic"},{value:"ur",label:"Urdu"}],marriageSection:[{title:this.$t("Settings.LeftDrawer.Section1.key4"),link:"polygamy"},{title:this.$t("Settings.LeftDrawer.Section1.key5"),link:"arranged-marriages"},{title:this.$t("Settings.LeftDrawer.Section1.key6"),link:"aishara-marriage"},{title:this.$t("Settings.LeftDrawer.Section1.key7"),link:"divorce-objections"},{title:this.$t("Settings.LeftDrawer.Section1.key8"),link:"inheritence-objections"},{title:this.$t("Settings.LeftDrawer.Section1.key9"),link:"women-witness"}],violenceSection:[{title:this.$t("Settings.LeftDrawer.Section2.key4"),link:"jihad"},{title:this.$t("Settings.LeftDrawer.Section2.key5"),link:"chopping-hands"},{title:this.$t("Settings.LeftDrawer.Section2.key6"),link:"slavery"},{title:this.$t("Settings.LeftDrawer.Section2.key7"),link:"islam-was-spread-by-sword"},{title:this.$t("Settings.LeftDrawer.Section2.key8"),link:"jizya"}],quranSection:[{title:this.$t("Settings.LeftDrawer.Section3.key4"),link:"eternal-speech-in-a-book"},{title:this.$t("Settings.LeftDrawer.Section3.key5"),link:"scientific-miracles-in-the-quran"}],commonSection:[{title:this.$t("Settings.LeftDrawer.Section4.key4"),link:"alghazali-ended-islamic-golden-age"},{title:this.$t("Settings.LeftDrawer.Section4.key5"),link:"muslims-worship-blackstone"},{title:this.$t("Settings.LeftDrawer.Section4.key6"),link:"problem-of-evil"},{title:this.$t("Settings.LeftDrawer.Section4.key7"),link:"women-dress-code"},{title:this.$t("Settings.LeftDrawer.Section4.key8"),link:"who-created-god"},{title:this.$t("Settings.LeftDrawer.Section4.key9"),link:"4200-religions"},{title:this.$t("Settings.LeftDrawer.Section4.key10"),link:"predestination"},{title:this.$t("Settings.LeftDrawer.Section4.key11"),link:"hellfire"},{title:this.$t("Settings.LeftDrawer.Section4.key12"),link:"music"},{title:this.$t("Settings.LeftDrawer.Section4.key13"),link:"homosexuality"}]}},methods:{toggleNightTheme(e){this.$q.dark.set(e),this.notify("Theme Changed successfully!",{position:"bottom",type:"positive",textColor:"green"})},toggleFullScreen(e){this.$q.fullscreen.toggle(),this.rightDrawerOpen=!this.rightDrawerOpen},notify(e,t={}){this.$q.notify({message:e,color:"black",timeout:1500,type:t.type||"",textColor:t.textColor||"white",position:t.position||"bottom-right",actions:[{label:"Dismiss"}]})},changeLanguage(e){"en-us"!==e&&this.notify("Working on...",{type:"info",textColor:"primary"})},decreaseFontSize(){const e=document.getElementsByClassName("text-fluid")[0];e&&this.fontSize>16&&(e.style.fontSize=this.fontSize-1+"px",this.fontSize--)},increaseFontSize(){const e=document.getElementsByClassName("text-fluid")[0];e&&this.fontSize<19&&(e.style.fontSize=this.fontSize+1+"px",this.fontSize++)}},watch:{"$q.fullscreen.isActive"(e){this.isFullScreen=e}}}),s=r,l=(i("89d3"),i("2877")),o=i("4d5a"),c=i("e359"),g=i("65c6"),m=i("9c40"),p=i("2c91"),u=i("f20b"),f=i("1c1c"),h=i("66e5"),d=i("4074"),S=i("0170"),b=i("0016"),k=i("9404"),w=i("4983"),v=i("3b73"),q=i("9564"),y=i("09e3"),A=i("5096"),D=i("05c0"),L=i("7f67"),_=i("714f"),$=i("eebe"),z=i.n($),Q=Object(l["a"])(s,a,n,!1,null,null,null);t["default"]=Q.exports;z()(Q,"components",{QLayout:o["a"],QHeader:c["a"],QToolbar:g["a"],QBtn:m["a"],QSpace:p["a"],QBtnDropdown:u["a"],QList:f["a"],QItem:h["a"],QItemSection:d["a"],QItemLabel:S["a"],QIcon:b["a"],QDrawer:k["a"],QScrollArea:w["a"],QExpansionItem:v["a"],QToggle:q["a"],QPageContainer:y["a"],QPageScroller:A["a"],QTooltip:D["a"]}),z()(Q,"directives",{ClosePopup:L["a"],Ripple:_["a"]})},"89d3":function(e,t,i){"use strict";var a=i("e87e"),n=i.n(a);n.a},caad:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAABGCAMAAAAU/+24AAABhlBMVEUAAAD3szj2sTn5szn3sjn3sjj/rzD3sTj3sjj3sTj3rzj2sTn3szj3sTj6tTX2sjn2sjn4sjnd3d3n5+f4sTf3sjnv7+/l5eXU1NTl5eXq6ure3t7R0dHn5+f2sjjm5ubV1dXn5+f2sTj2sjnl5eXm5ubPz8/Ozs7Nzc3i4uLMzMzT09PMzMzLy8vg4ODMzMzNzc3Z2dnl5eXX19fU1NTW1tbl5eXZ2dnPz8/Ozs7m5ubT09Pm5ubZ2dnPz8/T09PT09Pl5eXq6ury8vLq6urj4+PLy8vo6Oju7u7U1NTZ2dnn5+fc3NzY2Njd3d3k5OTh4eHh4eG9vb2tra3X19fe3t7S0tLV1dXX19fm5ub3sjnj4+Pm5ubb29vMzMzk5OTT09PZ2dnS0tK4uLjOzs7IyMizs7Pf39+AgICfn5/h4eGurq6ZmZnX19epqanGxsbU1NTNzc3R0dHn5+fr6+vy8vKmpqaGhoasrKze3t7p6em5ubns7OzY2Njd3d2ioqLv7+/l5eUu+/RDAAAAWnRSTlMAQO9Q4GAQ38CgIM9/gDCvj3DEQG8/EM/W7zAf72DQ368g8LDQsBDrkGpQ9+aA8vr1NrPBsJyfV/3+j8CvPPbc6PK5wL/GQM/Qw181UFxpjoFwbXBtZGGHchTf8AGnAAAACXBIWXMAAC4jAAAuIwF4pT92AAACP0lEQVRo3u3W+VMTMRQH8MWWQinUo9LaFsT7QAEPsNYLFbxYFetteH2li9CC64k3qPifm+xuaRLxwHGSnSHf35K82XwmV2tZJiYmJiYbJC26ARJnU0Q3QUiERPUCWsUNirWR9p9q4jGFINIhNFsIScglkcRff+0/JJro5NeoixCSlEqSZPMWdWuUjG/lmwyU8GbnVi4SV3nOt6XE1aBp297d3RlvdqYzaXWeHVPZHN9uJ0GaG5nOgDJRvqcMAL1cT2yn72ld7cllaUlfbv0f/5fswgqdDXbzoq4o2bOXO+j7WAXsV+I5cBCnWQ4JvYeFVv8Rr6RHDegoehngO/ODwjHvH/JKjikBWceR7dkJoe8kZIT2ME5L50wtaKQKcCpEoMLpijS9XlChWPYuFTe/VtBI0QE/Z7SBZrAJOotPKwEIzjUe52GcnaspBNXnG6DzFxAXYDXZVAP0rI4qQW4AKhQRnwOf3gD0QgsoTz3NDfOT0gGaf+mDRulz/Er0QJ8PmnWrGm7ZawqqSiDIWfquPfvBKsuglGZQLWygaphAF1G+9QCXLA2gNzUfdHlx8e07KWMBCFWC6u990DjAr0BzWh7G34CUv9RXrtJcWwN0nQ3cUAz68BE+sRs2tQboMxtwcKnuqL1lfwIpv/YGtC7Q8hfHWQgR6Os3l2ZmJSygZc/juhgWELpBVkICWmqAvhuQARmQAW1MkDUxYds3b7E/hrcnJ++USnfvBblfonnABh4+emzb9hNFIBMTExMThfkBAEoX9yA1MkwAAAAYdEVYdEF1dGhvcgBPbmxpbmUgTG9nbyBNYWtlcm+NwBcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDctMjZUMDk6Mjg6NTUtMDQ6MDBOwrLOAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA3LTI2VDA5OjI4OjU1LTA0OjAwP58KcgAAAER0RVh0RGVzYwBMb2dvIGNyZWF0ZWQgd2l0aCB3d3cub25saW5lbG9nb21ha2VyLmNvbSwgdGhlIGZyZWUgbG9nbyBtYWtlciGflt7xAAAAAElFTkSuQmCC"},e87e:function(e,t,i){}}]);