(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{323:function(t,e,i){},331:function(t,e,i){},354:function(t,e,i){"use strict";i(323)},364:function(t,e,i){"use strict";i(331)},387:function(t,e,i){"use strict";var a=i(320),s=i(352),n={name:"Home",components:{NavLink:a.a,GithubButton:s.a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},o=(i(354),i(44)),r=Object(o.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"theme-body"},[i("section",{staticClass:"hero-section"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-md-7 pt-5 mb-5 align-self-center"},[i("div",{staticClass:"promo p-md-3 p-lg-5"},[t._m(0),t._v(" "),i("div",{staticClass:"subheadline mb-4"},[t._v("\n              "+t._s(t.data.tagline||t.$description||"Welcome to RevoGrid")+"\n            ")]),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"hero-quotes mt-5"},[t._m(2),t._v(" "),i("div",{staticClass:"source media flex-column flex-md-row align-items-center"},t._l(t.$site.themeConfig.frameworks,(function(e){return i("a",{attrs:{href:e.url}},[i("img",{attrs:{src:t.$withBase(e.img),alt:e.title||""}})])})),0)])])]),t._v(" "),i("div",{staticClass:"col-12 col-md-5 mb-5 align-self-stretch"},[i("div",{staticClass:"grid-panel-present mb-3"},[i("div",{staticClass:"row ps-2 pb-3 pt-3 header-buttons"},[i("span",{staticClass:"baloon col-3",domProps:{textContent:t._s("<revo-grid/>")}}),t._v(" "),i("github-button",{staticClass:"col-4",attrs:{href:"https://github.com/revolist/revogrid","data-color-scheme":"no-preference: light; light: light; dark: dark;","data-size":"large","aria-label":"Star revolist/revogrid on GitHub"}},[t._v("Star me")])],1),t._v(" "),i("demo-initial")],1)])])])]),t._v(" "),i("section",{staticClass:"benefits-section theme-bg-light-gradient py-5",attrs:{id:"benefits-section"}},[i("div",{staticClass:"container py-5"},[i("h2",{staticClass:"section-heading text-center mb-3"},[t._v("Best things you can get from RevoGrid")]),t._v(" "),t._m(3),t._v(" "),t.data.features&&t.data.features.length?i("div",{staticClass:"row text-center"},t._l(t.data.features,(function(e,a){return i("div",{key:a,staticClass:"item col-12 col-md-6 col-lg-4"},[i("div",{staticClass:"item-inner p-3 p-lg-4"},[i("div",{staticClass:"item-header mb-3"},[i("div",{staticClass:"item-icon"},[i("img",{attrs:{src:t.$withBase(e.icon)}})]),t._v(" "),i("h3",{staticClass:"item-heading"},[t._v(t._s(e.title))])]),t._v(" "),i("div",{staticClass:"item-desc"},[t._v("\n              "+t._s(e.details)+"\n            ")])])])})),0):t._e()])]),t._v(" "),t.data.footer?i("footer",{staticClass:"footer"},[i("div",{staticClass:"footer-bottom text-center py-5",domProps:{innerHTML:t._s(t.data.footer)}})]):t._e()])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"headline mt-1 mb-3 me-2"},[this._v("\n              Hello,"),e("br"),this._v("\n              I am RevoGrid – the sheet"),e("br"),this._v("\n              you will "),e("a",[this._v("love.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cta-holder"},[e("a",{staticClass:"btn btn-primary me-lg-2",attrs:{href:"demo/"}},[this._v("Demo")]),this._v(" "),e("a",{staticClass:"btn btn-secondary scrollto",attrs:{href:"guide/"}},[this._v("Docs")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",{staticClass:"quote p-4 theme-bg-light text-muted"},[e("small",[this._v("I am support all famous framewors and much more")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-intro single-col-max mx-auto text-center mb-5"},[this._v("We are improving grid all the time. If you wish to get more information consider to visit our "),e("a",{attrs:{target:"_blank",href:"https://github.com/revolist/revogrid/projects/1"}},[this._v("roadmap")]),this._v(".")])}],!1,null,"2820475c",null);e.a=r.exports},388:function(t,e,i){"use strict";i(313);var a=i(355),s=i(386),n=i(392),o=i(347);function r(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var l={name:"Navbar",components:{SidebarButton:n.a,NavLinks:o.a,SearchBox:s.a,AlgoliaSearchBox:a.a},data:function(){return{linksWrapMaxWidth:null}},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}},mounted:function(){var t=this,e=parseInt(r(this.$el,"paddingLeft"))+parseInt(r(this.$el,"paddingRight")),i=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};i(),window.addEventListener("resize",i,!1)}},c=(i(364),i(44)),d=Object(c.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"navbar header"},[i("SidebarButton",{on:{"toggle-sidebar":function(e){return t.$emit("toggle-sidebar")}}}),t._v(" "),i("RouterLink",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?i("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e()]),t._v(" "),i("div",{staticClass:"links",style:t.linksWrapMaxWidth?{"max-width":t.linksWrapMaxWidth+"px"}:{}},[t.isAlgoliaSearch?i("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search&&!1!==t.$page.frontmatter.search?i("SearchBox"):t._e(),t._v(" "),i("NavLinks",{staticClass:"can-hide"})],1)],1)}),[],!1,null,null,null);e.a=d.exports}}]);