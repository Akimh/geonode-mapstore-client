(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[7440],{35188:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ConnectedSyncButton:()=>N,default:()=>U});var n=r(67294),o=r.n(n),a=r(75263),i=r.n(a),c=r(33664),u=r(22222),l=r(22843),s=r(5346),f=r(93473),p=r(74621),d=r(89255),v=r(75875),y=r.n(v),b=r(82492),g=r.n(b),m="GEONODE:SYNC_RESOURCES",O=r(73443),h=r(3828),j=r(99380),w=r(34990),P=r(97395),S=r(35721),E=r(67306),k=r(55927);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){A(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T={map:j.nl,image:j.ez,video:j.ez},_=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n="",o={};if("geostory"===e)o="map"!==(n=t.subtype||t.resource_type)?(0,S.R1)(t,t):(0,S.F0)(t);else if("dashboard"===e){var a,i=null===(a=t.widgets)||void 0===a?void 0:a.map((function(e){var t=r.find((function(t){var r,n;return!(t.data.pk!==(null===(r=e.map)||void 0===r||null===(n=r.extraParams)||void 0===n?void 0:n.pk))}));return t?z(z({},e),{},{map:z(z({},e.map),t.data.data.map)}):e}));o=g()(t,{widgets:i})}return{type:n,data:o}};const x={gnSyncComponentsWithResources:function(e,t){return e.ofType(m).switchMap((function(){var e=t.getState(),r=(0,h.L4)(e),n=function(e,t){switch(e){case"geostory":return(0,h._i)(t);case"dashboard":return(0,h.F7)(t);default:return[]}}(r,e);return d.Observable.defer((function(){return y().all(n.map((function(e){var t,n;return("geostory"===r?T[e.type](e.id):(0,j.nl)(null==e||null===(t=e.map)||void 0===t||null===(n=t.extraParams)||void 0===n?void 0:n.pk)).then((function(e){return{data:e,status:"success",title:e.title}})).catch((function(){var t,r,n,o;return{data:e,status:"error",title:(null==e||null===(t=e.data)||void 0===t?void 0:t.title)||(null==e||null===(r=e.map)||void 0===r||null===(n=r.extraParams)||void 0===n?void 0:n.pk)||(null==e||null===(o=e.data)||void 0===o?void 0:o.name)}}))})))})).switchMap((function(t){var n,o,a,i,c,u,l=t.filter((function(e){return"error"===e.status})),s=t.filter((function(e){return"success"===e.status})),f=function(){if(0===s.length)return[];if("geostory"===r)return s.map((function(e){var t=e.data,r=_("geostory",t),n=r.type,o=r.data;return(0,w.zJ)(t.pk,n,o)}));if("dashboard"===r){var t=(0,E.hS)(e),n=_("dashboard",t,s).data;return[(0,k.rR)((0,E.NB)(e),n)]}return[]}(),p=(a=l.length,i=s.length,c="Success",a>0&&i>0?c="Warning":0===a&&i>0?c="Success":a>0&&0===i&&(c="Error"),{level:c.toLowerCase(),title:"gnviewer.sync".concat(c,"Title"),message:"gnviewer.sync".concat(c,"Message")}),v=p.level,y=p.title,b=p.message;return d.Observable.of.apply(d.Observable,(u=f,function(e){if(Array.isArray(e))return D(e)}(u)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(u)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?D(e,t):void 0}}(u)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).concat([(0,O.gc)(),(0,P.$Z)({title:y,message:b,values:{successTitles:null===(n=s.map((function(e){return e.title})))||void 0===n?void 0:n.join(", "),errorTitles:null===(o=l.map((function(e){return e.title})))||void 0===o?void 0:o.join(", ")}},v)]))})).catch((function(e){var t,r;return d.Observable.of((0,O.gc)(),(0,P.vU)({title:"gnviewer.syncErrorTitle",message:(null==e||null===(t=e.data)||void 0===t?void 0:t.detail)||(null==e||null===(r=e.originalError)||void 0===r?void 0:r.message)||(null==e?void 0:e.message)||"gnviewer.syncErrorDefault"}))})).startWith((0,O.id)())}))}};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(e){var t=e.synchronize,r=e.enabled,n=e.size;return r&&o().createElement(f.Z,{variant:"primary",size:n,onClick:function(){return t()}},o().createElement(s.Z,{msgId:"gnviewer.sync"}))}M.contextTypes={synchronize:i().func};var N=(0,c.connect)((0,u.P1)(p.jl,(function(e){return{enabled:e}})),{synchronize:function(){return{type:m}}})(M);const U=(0,l.rx)("Sync",{component:N,containers:{ActionNavbar:{name:"Sync",priority:1}},epics:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},x),reducers:{}})}}]);