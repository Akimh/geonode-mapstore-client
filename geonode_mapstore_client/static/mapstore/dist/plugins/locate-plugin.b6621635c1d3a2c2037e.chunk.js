(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7482],{86450:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});var r=n(24852);const o=(e,t)=>{const[o,a]=(0,r.useState)(!1),[c,i]=(0,r.useState)(null),s=(0,r.useRef)();return(0,r.useEffect)((()=>(e&&!s.current&&(a(!1),i(null),n(87376)("./"+e+"/"+t).then((e=>{s.current=e.default,a(!0)})).catch((e=>{i(e)}))),()=>{})),[e]),[o,s.current,c]}},87376:(e,t,n)=>{var r={"./hooks/useMapTool":[86450],"./hooks/useMapTool.js":[86450],"./leaflet/locate":[33965,3965],"./leaflet/locate.js":[33965,3965],"./openlayers/locate":[77095,7089,1324,4738,9530,7095],"./openlayers/locate.js":[77095,7089,1324,4738,9530,7095]};function o(e){if(!n.o(r,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((()=>n(o)))}o.keys=()=>Object.keys(r),o.id=87376,e.exports=o},50966:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(61365),o=n(30294);const a=(0,r.Z)(o.OverlayTrigger)},61365:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(24852),o=n.n(r),a=n(37275);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const i=function(e){return function(t){return o().createElement(e,c({},t,{container:document.querySelector("."+(a.ZP.getConfigProp("themePrefix")||"ms2")+" > div")||document.body}))}}},34682:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Q}),n(52780);var r=n(24852),o=n.n(r),a=n(71703),c=n(30294),i="CHANGE_LOCATE_STATE",s="LOCATE_ERROR";function l(e){return{type:i,state:e}}var u=n(81756),p=n(45697),f=n.n(p),A=n(5346),d=n(50966),y=n(97671),h=n.n(y),g=n(38560);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function C(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?L(e):t}function L(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.e(844).then(n.t.bind(n,10844,23));var w=!1,k=!1,j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(s,e);var t,n,r,a,i=(r=s,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(a){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function s(){var e;b(this,s);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return I(L(e=i.call.apply(i,[this].concat(n))),"onClick",(function(){var t;switch(e.props.locate){case"FOLLOWING":t="DISABLED";break;case"ENABLED":t="FOLLOWING";break;case"DISABLED":t="ENABLED";break;case"LOCATING":case"PERMISSION_DENIED":t="DISABLED"}e.props.onClick(t)})),I(L(e),"renderButton",(function(){var t="PERMISSION_DENIED"===e.props.locate;return o().createElement(g.Z,v({id:e.props.id,disabled:t},e.props.btnConfig,{onClick:e.onClick,bsStyle:e.getBtnStyle(),style:e.props.style}),o().createElement(c.Glyphicon,{glyph:e.props.glyph}),e.props.text,e.props.help)})),I(L(e),"renderLoadingButton",(function(){var t=o().createElement("img",{src:h(),style:{display:"inline-block",margin:"0px",padding:0,background:"transparent",border:0},alt:"..."});return o().createElement(g.Z,v({id:e.props.id,onClick:e.onClick},e.props.btnConfig,{bsStyle:e.getBtnStyle(),style:e.props.style}),t)})),I(L(e),"addTooltip",(function(t){var n=o().createElement(c.Tooltip,{id:"locate-tooltip"},o().createElement(A.Z,{msgId:e.props.tooltip}));return o().createElement(d.Z,{placement:e.props.tooltipPlace,key:"{overlay-trigger.".concat(e.props.id,"-").concat(e.props.tooltip,"}"),overlay:n},t)})),I(L(e),"getBtnStyle",(function(){var t=e.props,n=t.locate,r=t.bsStyle;return"FOLLOWING"!==n&&"ENABLED"!==n||(r="success active"),r})),e}return t=s,(n=[{key:"UNSAFE_componentWillMount",value:function(){var e=this;"PERMISSION_DENIED"===this.props.locate||w||k||(w=!0,navigator.geolocation.getCurrentPosition((function(){w=!1,k=!0}),(function(t){w=!1,1===t.code&&e.props.onClick("PERMISSION_DENIED")})))}},{key:"render",value:function(){var e="LOCATING"===this.props.locate?this.renderLoadingButton():this.renderButton();return this.props.tooltip?this.addTooltip(e):e}}])&&E(t.prototype,n),s}(o().Component);I(j,"propTypes",{id:f().string,hide:f().bool,btnConfig:f().object,text:f().oneOfType([f().string,f().element]),help:f().oneOfType([f().string,f().element]),locate:f().string,onClick:f().func,tooltip:f().element,tooltipPlace:f().string,style:f().object,bsStyle:f().string,glyph:f().string}),I(j,"defaultProps",{id:"locate-btn",onClick:function(){},locate:"DISABLED",tooltipPlace:"left",bsStyle:"default",glyph:"1-position-1",btnConfig:{className:"square-button"}});const D=j;var R=n(22843),B=n(27418),N=n.n(B);var P=n(86450);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){G(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var M=(0,a.connect)((function(e){return{locate:e.locate&&e.locate.state||"DISABLED",tooltip:e.locate&&"FOLLOWING"===e.locate.state?"locate.tooltipDeactivate":"locate.tooltip"}}),{onClick:l})(D);const Q=(0,R.rx)("Locate",{component:M,options:{disablePluginIf:"{state('mapType') === 'cesium'}"},containers:{Toolbar:{name:"locate",position:2,tool:!0,icon:o().createElement(c.Glyphicon,{glyph:"screenshot"}),help:o().createElement(u.Z,{msgId:"helptexts.locateBtn"}),priority:1},Map:{name:"Locate",Tool:(0,a.connect)((function(e){return{status:e.locate&&e.locate.state,messages:e.locale&&e.locale.messages?e.locale.messages.locate:void 0}}),{changeLocateState:l,onLocateError:function(e){return{type:s,error:e}}})((function(e){var t,n,o=e.map,a=e.mapType,c=e.status,i=e.messages,s=e.maxZoom,l=e.changeLocateState,u=e.onLocateError,p=e.rateControl,f=(0,r.useRef)(),A=(t=(0,P.default)(a,"locate"),n=3,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(e){i=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),d=A[0],y=A[1],h=A[2];(0,r.useEffect)((function(){h&&u(h)}),[h]);var g=function(e){c!==e&&l(e)},m=function(e){u(e.message),l("DISABLED")};function v(){return{locateOptions:x(x({},void 0!==s&&{maxZoom:s}),void 0!==p&&{rateControl:p})}}return(0,r.useEffect)((function(){if(d){var e=v();f.current=new y,f.current.start({map:o,options:e,messages:i,status:c,onStateChange:g,onLocationError:m})}return function(){var e;null===(e=f.current)||void 0===e||e.clear()}}),[d]),(0,r.useEffect)((function(){var e,t=v();null===(e=f.current)||void 0===e||e.update({status:c,messages:i,options:t})}),[c,i,d,s]),null})),priority:1}},reducers:{locate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{state:"DISABLED"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:return N()({},e,{state:t.state});case s:return N()({},e,{error:t.error});default:return e}}}})},81756:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(71703),o=n(5346);const a=(0,r.connect)((function(e){return{locale:e.locale&&e.locale.currentLocale,messages:e.locale&&e.locale.messages||[]}}))(o.Z)},98065:(e,t,n)=>{(e.exports=n(9252)()).push([e.id,".msgapi #locate-btn {\n    position: absolute;\n    z-index: 1000;\n    right: 10px;\n    bottom: 150px;\n}\n\n.msgapi #mapstore-toolbar #locate-btn {\n    position: static;\n}\n",""])},9252:e=>{e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var c=t[o];"number"==typeof c[0]&&r[c[0]]||(n&&!c[2]?c[2]=n:n&&(c[2]="("+c[2]+") and ("+n+")"),e.push(c))}},e}},14246:e=>{var t={},n=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}},r=n((function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())})),o=n((function(){return document.head||document.getElementsByTagName("head")[0]})),a=null,c=0;function i(e,n){for(var r=0;r<e.length;r++){var o=e[r],a=t[o.id];if(a){a.refs++;for(var c=0;c<a.parts.length;c++)a.parts[c](o.parts[c]);for(;c<o.parts.length;c++)a.parts.push(u(o.parts[c],n))}else{var i=[];for(c=0;c<o.parts.length;c++)i.push(u(o.parts[c],n));t[o.id]={id:o.id,refs:1,parts:i}}}}function s(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],c={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(c):t.push(n[a]={id:a,parts:[c]})}return t}function l(){var e=document.createElement("style"),t=o();return e.type="text/css",t.appendChild(e),e}function u(e,t){var n,r,i,s,u;if(t.singleton){var p=c++;n=a||(a=l()),r=A.bind(null,n,p,!1),i=A.bind(null,n,p,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(s=document.createElement("link"),u=o(),s.rel="stylesheet",u.appendChild(s),n=s,r=y.bind(null,n),i=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(),r=d.bind(null,n),i=function(){n.parentNode.removeChild(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");void 0===(n=n||{}).singleton&&(n.singleton=r());var o=s(e);return i(o,n),function(e){for(var r=[],a=0;a<o.length;a++){var c=o[a];(l=t[c.id]).refs--,r.push(l)}for(e&&i(s(e),n),a=0;a<r.length;a++){var l;if(0===(l=r[a]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete t[l.id]}}}};var p,f=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function A(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}function d(e,t){var n=t.css,r=t.media;if(t.sourceMap,r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function y(e,t){var n=t.css,r=(t.media,t.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}},52780:(e,t,n)=>{var r=n(98065);"string"==typeof r&&(r=[[e.id,r,""]]),n(14246)(r,{}),r.locals&&(e.exports=r.locals)},97671:e=>{e.exports="data:image/gif;base64,R0lGODlhEAALAPQAAP///zMzM+Hh4dnZ2e7u7jc3NzMzM1dXV5qamn9/f8fHx05OTm5ubqGhoYKCgsrKylFRUTY2NnFxcerq6t/f3/b29l9fX+Li4vT09MTExLKystTU1PHx8QAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCwAAACwAAAAAEAALAAAFLSAgjmRpnqSgCuLKAq5AEIM4zDVw03ve27ifDgfkEYe04kDIDC5zrtYKRa2WQgAh+QQJCwAAACwAAAAAEAALAAAFJGBhGAVgnqhpHIeRvsDawqns0qeN5+y967tYLyicBYE7EYkYAgAh+QQJCwAAACwAAAAAEAALAAAFNiAgjothLOOIJAkiGgxjpGKiKMkbz7SN6zIawJcDwIK9W/HISxGBzdHTuBNOmcJVCyoUlk7CEAAh+QQJCwAAACwAAAAAEAALAAAFNSAgjqQIRRFUAo3jNGIkSdHqPI8Tz3V55zuaDacDyIQ+YrBH+hWPzJFzOQQaeavWi7oqnVIhACH5BAkLAAAALAAAAAAQAAsAAAUyICCOZGme1rJY5kRRk7hI0mJSVUXJtF3iOl7tltsBZsNfUegjAY3I5sgFY55KqdX1GgIAIfkECQsAAAAsAAAAABAACwAABTcgII5kaZ4kcV2EqLJipmnZhWGXaOOitm2aXQ4g7P2Ct2ER4AMul00kj5g0Al8tADY2y6C+4FIIACH5BAkLAAAALAAAAAAQAAsAAAUvICCOZGme5ERRk6iy7qpyHCVStA3gNa/7txxwlwv2isSacYUc+l4tADQGQ1mvpBAAIfkECQsAAAAsAAAAABAACwAABS8gII5kaZ7kRFGTqLLuqnIcJVK0DeA1r/u3HHCXC/aKxJpxhRz6Xi0ANAZDWa+kEAA7AAAAAAAAAAAA"}}]);