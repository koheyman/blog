(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{201:function(t,e,n){var content=n(209);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("12927e56",content,!0,{sourceMap:!1})},203:function(t,e,n){"use strict";var r={props:{Content:{type:Object}}},c=n(8),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"c-article-card"},[n("div",{staticClass:"c-article-card__inner"},[n("nuxt-link",{attrs:{to:"/"+t.Content.id}},[n("div",{staticClass:"c-article-card__thumb"},[n("img",{attrs:{src:t.Content.mainimage.url,alt:""}})]),t._v(" "),n("div",{staticClass:"c-article-card__overview"},[n("div",{staticClass:"c-article-card__head"},[n("span",{staticClass:"c-article-card__date",domProps:{textContent:t._s(t.$dayjs(""+t.Content.publishedAt).format("YYYY/MM/DD"))}})]),t._v(" "),n("div",{staticClass:"c-article-card__title"},[n("h2",[t._v(t._s(t.Content.title))])])])])],1)])}),[],!1,null,null,null);e.a=component.exports},208:function(t,e,n){"use strict";var r=n(201);n.n(r).a},209:function(t,e,n){(e=n(20)(!1)).push([t.i,".c-box[data-v-6356f255]{margin:0 auto;padding:20px;width:1000px;border:1px solid #1b79ad;display:flex;justify-content:center;align-items:center}",""]),t.exports=e},213:function(t,e,n){"use strict";n.r(e);n(26);var r=n(2),header=n(85),c=n(47),o=n.n(c),l={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://oipon.microcms.io/api/v1/posts",{headers:{"X-API-KEY":"e885d50d-8291-48d1-9664-d5cbbc4c3982"}});case 2:return e=t.sent,data=e.data,console.log(data),t.abrupt("return",data);case 6:case"end":return t.stop()}}),t)})))()}},d=(n(208),n(8)),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.contents,(function(content){return n("li",{key:content.id},[n("nuxt-link",{attrs:{to:"/"+content.id}},[t._v("\n      "+t._s(content.title)+"\n    ")])],1)})),0)}),[],!1,null,"6356f255",null).exports,v=n(203),_={components:{Side:n(83).a,Headers:header.a,List:f,Card:v.a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$config,e.next=3,o.a.get("https://oipon.microcms.io/api/v1/posts",{headers:{"X-API-KEY":n.apiKey}});case 3:return r=e.sent,data=r.data,e.abrupt("return",data);case 6:case"end":return e.stop()}}),e)})))()}},m=Object(d.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"l-wrap"},[e("main",{staticClass:"l-main"},[e("div",{staticClass:"c-article-cards"},this._l(this.contents,(function(content){return e("card",{key:content.id,attrs:{content:content}})})),1)]),this._v(" "),e("side")],1)])}),[],!1,null,"ec318914",null);e.default=m.exports}}]);