(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/H/B":function(e,t,a){e.exports=a.p+"static/pic05-641667b6aa05f6cc3220fbf59570732c.png"},"9XZr":function(e,t,a){"use strict";var r=a("XKFU"),i=a("Lgjv"),n=a("ol8x"),l=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);r(r.P+r.F*l,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},AQ3a:function(e,t,a){e.exports=a.p+"static/pic02-61f20d8dc73c7cd0188761f8d03dc42f.png"},Lgjv:function(e,t,a){var r=a("ne8i"),i=a("l0Rn"),n=a("vhPU");e.exports=function(e,t,a,l){var c=String(n(e)),s=c.length,o=void 0===a?" ":String(a),p=r(t);if(p<=s||""==o)return c;var m=p-s,u=i.call(o,Math.ceil(m/o.length));return u.length>m&&(u=u.slice(0,m)),l?u+c:c+u}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("Bl7J"),l=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement("div",{className:"logo"},i.a.createElement("span",{className:"fas fa-lg fa-pen-nib"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"inner"},i.a.createElement("h1",null,"Yoshiki Niwa"),i.a.createElement("p",null,"Imagine Deeply, Write Insightfully."))),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("biograph")}},"自己紹介")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("webdev")}},"Web 制作")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("pictogram")}},"ピクトグラム制作")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("translation")}},"翻訳・カタログ制作")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("writing")}},"ライティング")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"お問い合わせ")))))},c=a("dvgb"),s=a.n(c),o=a("AQ3a"),p=a.n(o),m=a("yK3y"),u=a.n(m),h=a("qPae"),d=a.n(h),f=a("/H/B"),E=a.n(f);a("f3/d"),a("xfY5"),a("a1Th"),a("Btvt"),a("9XZr");var g=function(e){var t,a;function r(){for(var t,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))||this).myBirthday=function(e){var a={year:t.props.year,month:t.props.month,date:t.props.date},r=new Date(a.year,a.month-1,a.date),i=r.getFullYear().toString().padStart(4,"0"),n=(r.getMonth()+1).toString().padStart(2,"0"),l=r.getDate().toString().padStart(2,"0"),c=new Date,s=c.getFullYear().toString().padStart(4,"0"),o=(c.getMonth()+1).toString().padStart(2,"0"),p=c.getDate().toString().padStart(2,"0");return Math.floor((Number(s+o+p)-Number(i+n+l))/1e4)},t}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement("div",{className:"Age"},i.a.createElement("p",null,"JOBs: Marketer, Writer, Developer"),i.a.createElement("p",null,this.props.name,i.a.createElement("br",null),this.props.year," 年 ",this.props.month," 月 ",this.props.date," 日 生まれ (",this.myBirthday(this.props)," 歳)"),i.a.createElement("p",null,"理学士(化学)　東北大学"))},r}(r.Component);var v=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this,t=i.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return i.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},i.a.createElement("article",{id:"biograph",className:("biograph"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"自己紹介"),i.a.createElement(g,{name:"にわ よしき",year:1990,month:11,date:24}),i.a.createElement("p",null),t),i.a.createElement("article",{id:"webdev",className:("webdev"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"Web制作"),i.a.createElement("p",null,"株式会社ビジコムジャパン ",i.a.createElement("a",{href:"https://bizcomjapan.co.jp"},"HP")," (gohugo)",i.a.createElement("br",null)),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:s.a,alt:"株式会社ビジコムジャパン"})),i.a.createElement("p",null,"CIPPS 国際公共政策センター (In Process, Wordpress)"),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:p.a,alt:"CIPPS 国際公共政策センター"})),t),i.a.createElement("article",{id:"pictogram",className:("pictogram"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"ピクトグラム制作"),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:u.a,alt:""})),i.a.createElement("p",null,"自然現象・化学反応などを一目見てわかるよう易しく表現します。"),i.a.createElement("p",null,"(Photoshop, Illustrator)"),t),i.a.createElement("article",{id:"translation",className:("translation"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"翻訳・カタログ制作"),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:d.a,alt:""})),i.a.createElement("p",null,i.a.createElement("ul",null,i.a.createElement("li",null,"ドイツ 化学メーカー(研究用試薬) 各種カタログ"),i.a.createElement("li",null,"ドイツ 細胞関連製品メーカー (研究用試薬) 各種カタログ"),i.a.createElement("li",null,"アメリカ 化合物ライブラリー専門企業 各種製品カタログ"))),i.a.createElement("p",null,"内容につきまして、公開できないものがございます。",i.a.createElement("br",null),"お手数ですがお問い合わせください。"),t),i.a.createElement("article",{id:"writing",className:("writing"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"ライティング"),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:E.a,alt:""})),i.a.createElement("p",null,"東京カレンダーWEB (計 8 作)"),i.a.createElement("p",null,"詳細につきましてはお問い合わせください。"),t),i.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"お問い合わせ"),i.a.createElement("p",null,"お問い合わせ、お仕事のご依頼等はこちらから。"),i.a.createElement("iframe",{src:"https://docs.google.com/forms/d/e/1FAIpQLSfrqesyCRi_gKiW9U3UUOmkx9ztg040BaDfyFgGBaRGa83lVQ/viewform?embedded=true",width:"640",height:"844",frameborder:"0",marginheight:"0",marginwidth:"0"},"読み込んでいます…"),t))},r}(i.a.Component),b=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"© Gatsby Starter - Dimension. Design: ",i.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),". Built with: ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))};function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var N=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(y(a)),a.handleCloseArticle=a.handleCloseArticle.bind(y(a)),a.setWrapperRef=a.setWrapperRef.bind(y(a)),a.handleClickOutside=a.handleClickOutside.bind(y(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},c.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},c.setWrapperRef=function(e){this.wrapperRef=e},c.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},c.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},c.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},c.render=function(){return i.a.createElement(n.a,{location:this.props.location},i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(l,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),i.a.createElement(v,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),i.a.createElement(b,{timeout:this.state.timeout})),i.a.createElement("div",{id:"bg"})))},r}(i.a.Component);t.default=N},dvgb:function(e,t,a){e.exports=a.p+"static/pic01-f5496b0df141cdfe6287adc4887e4aa5.png"},l0Rn:function(e,t,a){"use strict";var r=a("RYi7"),i=a("vhPU");e.exports=function(e){var t=String(i(this)),a="",n=r(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(a+=t);return a}},qPae:function(e,t,a){e.exports=a.p+"static/pic04-40eef599261ac345686c231e3ce2bf84.png"},xfY5:function(e,t,a){"use strict";var r=a("dyZX"),i=a("aagx"),n=a("LZWt"),l=a("Xbzi"),c=a("apmT"),s=a("eeVq"),o=a("kJMx").f,p=a("EemH").f,m=a("hswa").f,u=a("qncB").trim,h=r.Number,d=h,f=h.prototype,E="Number"==n(a("Kuth")(f)),g="trim"in String.prototype,v=function(e){var t=c(e,!1);if("string"==typeof t&&t.length>2){var a,r,i,n=(t=g?t.trim():u(t,3)).charCodeAt(0);if(43===n||45===n){if(88===(a=t.charCodeAt(2))||120===a)return NaN}else if(48===n){switch(t.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+t}for(var l,s=t.slice(2),o=0,p=s.length;o<p;o++)if((l=s.charCodeAt(o))<48||l>i)return NaN;return parseInt(s,r)}}return+t};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof h&&(E?s((function(){f.valueOf.call(a)})):"Number"!=n(a))?l(new d(v(t)),a,h):v(t)};for(var b,y=a("nh4g")?o(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;y.length>N;N++)i(d,b=y[N])&&!i(h,b)&&m(h,b,p(d,b));h.prototype=f,f.constructor=h,a("KroJ")(r,"Number",h)}},yK3y:function(e,t,a){e.exports=a.p+"static/pic03-5dab073f8fe00e50f607c3451b6b5be8.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-5a44d376b5fb0c6a205f.js.map