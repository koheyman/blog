(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{200:function(t,e,n){var content=n(210);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("12927e56",content,!0,{sourceMap:!1})},201:function(t,e,n){var content=n(212);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0ace817b",content,!0,{sourceMap:!1})},209:function(t,e,n){"use strict";var r=n(200);n.n(r).a},210:function(t,e,n){(e=n(16)(!1)).push([t.i,".c-box[data-v-6356f255]{margin:0 auto;padding:20px;width:1000px;border:1px solid #1b79ad;display:flex;justify-content:center;align-items:center}",""]),t.exports=e},211:function(t,e,n){"use strict";var r=n(201);n.n(r).a},212:function(t,e,n){(e=n(16)(!1)).push([t.i,".s-main{width:820px}",""]),t.exports=e},215:function(t,e,n){"use strict";n.r(e);n(36);var r=n(3),header=n(84),c=n(46),o=n.n(c),l={asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://oipon.microcms.io/api/v1/posts",{headers:{"X-API-KEY":"e885d50d-8291-48d1-9664-d5cbbc4c3982"}});case 2:return e=t.sent,data=e.data,console.log(data),t.abrupt("return",data);case 6:case"end":return t.stop()}}),t)})))()}},d=(n(209),n(7)),f=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.contents,(function(content){return n("li",{key:content.id},[n("nuxt-link",{attrs:{to:"/"+content.id}},[t._v("\n      "+t._s(content.title)+"\n    ")])],1)})),0)}),[],!1,null,"6356f255",null).exports,v={props:{Content:{type:Object}}},_=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"c-article-card"},[n("div",{staticClass:"c-article-card__inner"},[n("nuxt-link",{attrs:{to:"/"+t.Content.id}},[n("div",{staticClass:"c-article-card__thumb"},[n("img",{attrs:{src:t.Content.mainimage.url,alt:""}})]),t._v(" "),n("div",{staticClass:"c-article-card__overview"},[n("div",{staticClass:"c-article-card__head"},[n("span",{staticClass:"c-article-card__date",domProps:{textContent:t._s(t.$dayjs(""+t.Content.publishedAt).format("YYYY/MM/DD"))}})]),t._v(" "),n("div",{staticClass:"c-article-card__title"},[n("h2",[t._v(t._s(t.Content.title))])])])])],1)])}),[],!1,null,null,null).exports,m={components:{Headers:header.a,List:f,Card:_},asyncData:function(){return Object(r.a)(regeneratorRuntime.mark((function t(){var e,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.get("https://oipon.microcms.io/api/v1/posts",{headers:{"X-API-KEY":"e885d50d-8291-48d1-9664-d5cbbc4c3982"}});case 2:return e=t.sent,data=e.data,console.log(data),t.abrupt("return",data);case 6:case"end":return t.stop()}}),t)})))()}},h=(n(211),Object(d.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("main",{staticClass:"s-main"},[e("div",{staticClass:"c-article-cards"},this._l(this.contents,(function(content){return e("card",{key:content.id,attrs:{content:content}})})),1)])}),[],!1,null,null,null));e.default=h.exports}}]);