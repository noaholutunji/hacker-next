(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{235:function(e,t,n){__NEXT_REGISTER_PAGE("/story",function(){return e.exports=n(243),{page:e.exports.default}})},243:function(e,t,n){"use strict";n.r(t);var o=n(32),r=n.n(o),a=n(11),s=n.n(a),c=n(0),i=n.n(c),m=n(54),l=n.n(m),u=n(41),f=n.n(u),p=n(55),d=function e(t){var n=t.comment;return i.a.createElement("div",{className:"jsx-2825457607 comment"},i.a.createElement("div",{className:"jsx-2825457607 comment-user"},n.user),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:n.content},className:"jsx-2825457607 comment-content"}),n.comments&&i.a.createElement("div",{className:"jsx-2825457607 nested-comments"},n.comments.map(function(t){return i.a.createElement(e,{key:t.id,comment:t})})),i.a.createElement(s.a,{styleId:"2825457607",css:[".comment.jsx-2825457607{margin-bottom:1.5em;}",".comment-user.jsx-2825457607{font-size:0.9rem;font-weight:bold;margin-bottom:0.5em;}",".comment-content.jsx-2825457607{font-size:0.9rem;}",".comment-content.jsx-2825457607 p{margin:0;margin-bottom:0.5em;word-wrap:break-word;}",".comment-content.jsx-2825457607 a{color:#f60;-webkit-text-decoration:underline;text-decoration:underline;}",".comment-content.jsx-2825457607 pre{max-width:100%;overflow:scroll;}",".nested-comments.jsx-2825457607{margin-top:1em;border-left:1px solid rgba(0,0,0,0.1);padding-left:1em;}"]}))},y=function(e){var t=e.comments;return i.a.createElement(i.a.Fragment,null,t.map(function(e){return i.a.createElement(d,{key:e.id,comment:e})}))};function x(e){return(x="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,n,o,r,a,s){try{var c=e[a](s),i=c.value}catch(e){return void n(e)}c.done?t(i):Promise.resolve(i).then(o,r)}function j(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e,t){return!t||"object"!==x(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,g(t).apply(this,arguments))}var n,o,a,c,m;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,i.a.Component),n=t,o=[{key:"render",value:function(){var e=this.props.story;return e?i.a.createElement(p.a,{title:e.title,backButton:!0},i.a.createElement("main",{className:"jsx-2332383615"},i.a.createElement("h1",{className:"jsx-2332383615 story-title"},i.a.createElement("a",{href:e.url,className:"jsx-2332383615"},e.title)),i.a.createElement("div",{className:"jsx-2332383615 story-details"},i.a.createElement("strong",{className:"jsx-2332383615"},e.points," points"),i.a.createElement("strong",{className:"jsx-2332383615"},e.comments_count," comments"),i.a.createElement("strong",{className:"jsx-2332383615"},e.time_ago)),e.comments.length>0?i.a.createElement(y,{comments:e.comments}):i.a.createElement("div",{className:"jsx-2332383615"},"No comments for this story")),i.a.createElement(s.a,{styleId:"2332383615",css:["main.jsx-2332383615{padding:1em;}",".story-title.jsx-2332383615{font-size:1.2rem;margin:0;font-weight:300;padding-bottom:0.5em;}",".story-title.jsx-2332383615 a.jsx-2332383615{color:#333;-webkit-text-decoration:none;text-decoration:none;}",".story-title.jsx-2332383615 a.jsx-2332383615:hover{-webkit-text-decoration:underline;text-decoration:underline;}",".story-details.jsx-2332383615{font-size:0.8rem;padding-bottom:1em;border-bottom:1px solid rgba(0,0,0,0.1);margin-bottom:1em;}",".story-details.jsx-2332383615 strong.jsx-2332383615{margin-right:1em;}",".story-details.jsx-2332383615 a.jsx-2332383615{color:#f60;}"]})):i.a.createElement(f.a,{statusCode:503})}}],a=[{key:"getInitialProps",value:(c=r.a.mark(function e(t){var n,o,a,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.req,t.res,n=t.query,e.prev=1,a=n.id,e.next=5,l()("https://node-hnapi.herokuapp.com/item/".concat(a));case 5:return s=e.sent,e.next=8,s.json();case 8:o=e.sent,e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0),o=null;case 15:return e.abrupt("return",{story:o});case 16:case"end":return e.stop()}},e,this,[[1,11]])}),m=function(){var e=this,t=arguments;return new Promise(function(n,o){var r=c.apply(e,t);function a(e){b(r,n,o,a,s,"next",e)}function s(e){b(r,n,o,a,s,"throw",e)}a(void 0)})},function(e){return m.apply(this,arguments)})}],o&&j(n.prototype,o),a&&j(n,a),t}();t.default=w}},[[235,1,0]]]);