(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[8488],{15135:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var r=n(67294),o=n.n(r),i=n(18093),a=n(80681),l=n(50966),c=n(5346),u=n(57557),s=n.n(u),p=["tooltip","tooltipId","tooltipPosition","tooltipTrigger","keyProp","idDropDown","args"];function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const m=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.tooltip,n=e.tooltipId;return t||n}),(function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.tooltip,r=t.tooltipId,i=t.tooltipPosition,u=void 0===i?"top":i,s=t.tooltipTrigger,m=t.keyProp,d=t.idDropDown,y=t.args,b=f(t,p);return o().createElement(l.Z,{trigger:s,id:d,key:m,placement:u,overlay:o().createElement(a.Tooltip,{id:"tooltip-"+m},r?o().createElement(c.Z,{msgId:r,msgParams:{data:y}}):n)},o().createElement(e,b))}}),(function(e){return function(t){return o().createElement(e,s()(t,["tooltipId","tooltip"]),t.children)}}))},27139:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var r=n(67294),o=n.n(r),i=n(45697),a=n.n(i),l=n(33664),c=n(27418),u=n.n(c),s=n(80681),p=n(15135),f=n(58252),m=n(81756),d=n(22843),y=n(93379),b=n.n(y),h=n(65077);function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}b()(h.Z,{insert:"head",singleton:!1}),h.Z.locals;var v=["children"],O=["children"],w=["children"];function j(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){A(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function E(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function k(e,t){if(t&&("object"===g(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},N(e)}function A(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function M(){return M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var D=(0,p.Z)(s.DropdownButton),Z=function(e){var t=e.children,n=_(e,v);return o().createElement(D,M({noCaret:!0,pullRight:!0,bsStyle:"primary",title:o().createElement(s.Glyphicon,{glyph:"menu-hamburger"}),tooltipId:"options",tooltipPosition:"bottom"},n),t)},R=function(e){var t=e.children,n=_(e,O);return o().createElement("div",n,t)},B=function(e){var t=e.children,n=e.href,r=e.onClick;return o().createElement("a",{href:n,onClick:r},t)},L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(l,e);var t,n,r,i,a=(r=l,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=N(r);if(i){var n=N(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return k(this,e)});function l(){var e;E(this,l);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return A(I(e=a.call.apply(a,[this].concat(n))),"getPanels",(function(e){return e.filter((function(e){return e.panel})).map((function(e){return u()({},e,{panel:!0===e.panel?e.plugin:e.panel})})).concat(e.filter((function(e){return e.tools})).reduce((function(e,t){return e.concat(t.tools.map((function(e,n){return{name:t.name+n,panel:e,cfg:t.cfg.toolsCfg?t.cfg.toolsCfg[n]:{}}})))}),[]))})),A(I(e),"getTools",(function(){var t=function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=n.map((function(e){return C(C({},e),t(e.children))})).sort((function(e,t){return e.position-t.position})),o={container:R,containerWrapperStyle:{position:"static"},className:"burger-menu-submenu",toolStyle:"primary",activeStyle:"default",stateSelector:"burgermenu",eventSelector:"onSelect",tool:s.MenuItem,panelStyle:e.props.panelStyle,panelClassName:e.props.panelClassName};return n.length>0?{containerWrapperStyle:{position:"static"},style:{position:"relative"},childTools:r,childPanels:e.getPanels(n),innerProps:o}:{}};return[{element:o().createElement("span",{key:"burger-menu-title"},e.props.title)}].concat(j(e.props.items.map((function(e){return C(C({},e),t(e.children))})).sort((function(e,t){return e.position-t.position}))))})),e}return t=l,(n=[{key:"render",value:function(){return o().createElement(f.Z,{id:this.props.id,className:"square-button",container:Z,mapType:this.props.mapType,toolStyle:"primary",activeStyle:"default",stateSelector:"burgermenu",eventSelector:"onSelect",tool:function(e){var t=e.children,n=_(e,w);return o().createElement(s.MenuItem,M({componentClass:B},n),t)},tools:this.getTools(),panels:this.getPanels(this.props.items),panelStyle:this.props.panelStyle,panelClassName:this.props.panelClassName})}}])&&x(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(o().Component);A(L,"propTypes",{id:a().string,dispatch:a().func,items:a().array,title:a().node,onItemClick:a().func,controls:a().object,mapType:a().string,panelStyle:a().object,panelClassName:a().string}),A(L,"contextTypes",{messages:a().object,router:a().object}),A(L,"defaultProps",{id:"mapstore-burger-menu",items:[],onItemClick:function(){},title:o().createElement(s.MenuItem,{header:!0},o().createElement(m.Z,{msgId:"options"})),controls:[],mapType:"leaflet",panelStyle:{minWidth:"300px",right:"52px",zIndex:100,position:"absolute",overflow:"auto"},panelClassName:"toolbar-panel"});const U=(0,d.rx)("BurgerMenu",{component:(0,l.connect)((function(e){return{controls:e.controls}}))(L),containers:{OmniBar:{name:"burgermenu",position:2,tool:!0,priority:1}}})},81756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(33664),o=n(5346);const i=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},65077:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(23645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".msgapi #mapstore-burger-menu {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n.msgapi .burger-menu-submenu {\n    display: none;\n    position: absolute;\n    left: -160px;\n    top: 0px;\n    width: 160px;\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n}\n\n.msgapi .burger-menu-submenu li a {\n    display: block;\n    padding: 10px 15px;\n}\n\n.msgapi .burger-menu-submenu li a:hover {\n    text-decoration: none;\n}\n\n.msgapi #mapstore-burger-menu .dropdown-menu>li>a:hover>span>.burger-menu-submenu,\n.msgapi .burger-menu-submenu>li>a:hover>span>.burger-menu-submenu {\n    display: block;\n}\n\n.msgapi .burger-menu-submenu span {\n    overflow: hidden;\n}\n\n.msgapi #mapstore-navbar #mapstore-burger-menu {\n    position: relative;\n    float: right;\n    left: 0;\n}\n",""]);const i=o},23645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},93379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var l=e[o],c=t.base?l[0]+t.base:l[0],u=n[c]||0,s="".concat(c," ").concat(u);n[c]=u+1;var p=a(s),f={css:l[1],media:l[2],sourceMap:l[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:s,updater:y(f,t),references:1}),r.push(s)}return r}function c(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,s=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function p(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function f(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,d=0;function y(e,t){var n,r,o;if(t.singleton){var i=d++;n=m||(m=c(t)),r=p.bind(null,n,i,!1),o=p.bind(null,n,i,!0)}else n=c(t),r=f.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=l(e,t),u=0;u<n.length;u++){var s=a(n[u]);0===i[s].references&&(i[s].updater(),i.splice(s,1))}n=c}}}}}]);