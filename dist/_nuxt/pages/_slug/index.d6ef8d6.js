(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{202:function(t,e,n){var content=n(214);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("16b0ec5f",content,!0,{sourceMap:!1})},213:function(t,e,n){"use strict";var r=n(202);n.n(r).a},214:function(t,e,n){(e=n(16)(!1)).push([t.i,".title[data-v-35fe2830]{font-weight:700}",""]),t.exports=e},217:function(t,e,n){"use strict";n.r(e);n(36);var r=n(3),o=n(46),c=n.n(o),l={components:{Headers:n(84).a},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,c.a.get("https://oipon.microcms.io/api/v1/posts/".concat(n.slug),{headers:{"X-API-KEY":"e885d50d-8291-48d1-9664-d5cbbc4c3982"}});case 3:return r=e.sent,data=r.data,console.log(data),e.abrupt("return",data);case 7:case"end":return e.stop()}}),e)})))()}},d=(n(213),n(7)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"s-main"},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),n("p",{staticClass:"publishedAt",domProps:{textContent:t._s(t.$dayjs(""+t.publishedAt).format("YYYY/MM/DD"))}}),t._v(" "),n("p",{staticClass:"category"},[t._v(t._s(t.category&&t.category.name))]),t._v(" "),n("div",{staticClass:"post",domProps:{innerHTML:t._s(t.body)}})])}),[],!1,null,"35fe2830",null);e.default=component.exports}}]);