(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2501],{4206:(e,t,r)=>{"use strict";r.d(t,{hZ:()=>n,pb:()=>o,kD:()=>i,DI:()=>l,IC:()=>a,iU:()=>u,W7:()=>s,Vw:()=>c,KD:()=>p,uj:()=>d,lo:()=>f,Yf:()=>y,fo:()=>F,PY:()=>E,bp:()=>m});var n="CHANGE_DRAWING_STATUS",o="DRAW:END_DRAWING",i="DRAW:SET_CURRENT_STYLE",l="DRAW:GEOMETRY_CHANGED",a="DRAW:DRAW_SUPPORT_STOPPED",u="DRAW:FEATURES_SELECTED",s="DRAW:DRAWING_FEATURES";function c(e,t,r,n,o){return{type:l,features:e,owner:t,enableEdit:r,textChanged:n,circleChanged:o}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:u,features:e}}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{type:s,features:e}}function f(){return{type:a}}function y(e,t,r,o,i,l){return{type:n,status:e,method:t,owner:r,features:o,options:i,style:l}}function F(e,t){return{type:o,geometry:e,owner:t}}function E(e){return{type:i,currentStyle:e}}var m=function(e){return y("clean","",e,[],{})}},40512:(e,t,r)=>{"use strict";r.d(t,{y6:()=>n,g$:()=>o,Xk:()=>i,H1:()=>l,MY:()=>a,Xs:()=>u,no:()=>s,Nd:()=>c,Zq:()=>p,Xr:()=>d,Rb:()=>f,HH:()=>y});var n="LAYER_FILTER:INIT_LAYER_FILTER",o="LAYER_FILTER:APPLIED_FILTER",i="LAYER_FILTER:STORE_CURRENT_APPLIED_FILTER",l="LAYER_FILTER:DISCARD_CURRENT_FILTER",a="LAYER_FILTER:APPLY_FILTER",u="LAYER_FILTER:OPEN_QUERY_BUILDER";function s(){return{type:i}}function c(){return{type:l}}function p(){return{type:u}}function d(e){return{type:o,filter:e}}function f(){return{type:a}}function y(e){return{type:n,filter:e}}},7878:(e,t,r)=>{"use strict";r.d(t,{E6:()=>l,vo:()=>a,l1:()=>u,J9:()=>s,U:()=>c,z8:()=>p,ql:()=>d,O_:()=>f,M$:()=>y,Ug:()=>F,p5:()=>E,Fz:()=>m,WZ:()=>b,bP:()=>g,On:()=>v,d_:()=>_,xM:()=>I,bl:()=>R,Wi:()=>T,PN:()=>O,_M:()=>L,Wm:()=>A,Eg:()=>h,V1:()=>S,cY:()=>w,RD:()=>P,Hl:()=>D,co:()=>N,uY:()=>C,H8:()=>j,je:()=>U,go:()=>M,_8:()=>x,xd:()=>G,o7:()=>Y,Nr:()=>W,Gf:()=>H,nh:()=>q,Rf:()=>V,Xp:()=>k,D6:()=>z,Sm:()=>Z,Ef:()=>Q,jW:()=>B,kQ:()=>$,JG:()=>X,js:()=>J,q$:()=>K,OZ:()=>ee,Nc:()=>te,NV:()=>re,I5:()=>ne,QL:()=>oe,I:()=>ie,ku:()=>le,EU:()=>ae,IV:()=>ue,HT:()=>se,lg:()=>ce,ds:()=>pe,VF:()=>de,DD:()=>fe,uo:()=>ye,Ry:()=>Fe,ZH:()=>Ee,AQ:()=>me,yC:()=>be,F:()=>ge,mc:()=>ve,uM:()=>Ie,eJ:()=>Re,uP:()=>Te,N5:()=>Oe,bn:()=>Le,Bm:()=>Ae,F2:()=>he,jR:()=>Se,$J:()=>we,ln:()=>Pe});var n=r(75875),o=r.n(n);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l="ADD_FILTER_FIELD",a="REMOVE_FILTER_FIELD",u="UPDATE_FILTER_FIELD",s="UPDATE_EXCEPTION_FIELD",c="ADD_GROUP_FIELD",p="UPDATE_LOGIC_COMBO",d="REMOVE_GROUP_FIELD",f="CHANGE_CASCADING_VALUE",y="EXPAND_ATTRIBUTE_PANEL",F="EXPAND_SPATIAL_PANEL",E="QUERYFORM:EXPAND_CROSS_LAYER",m="QUERYFORM:SET_CROSS_LAYER_PARAMETER",b="QUERYFORM:RESET_CROSS_LAYER_FILTER",g="SELECT_SPATIAL_METHOD",v="SELECT_VIEWPORT_SPATIAL_METHOD",_="UPDATE_GEOMETRY",I="SELECT_SPATIAL_OPERATION",R="CHANGE_SPATIAL_ATTRIBUTE",T="CHANGE_SPATIAL_FILTER_VALUE",O="REMOVE_SPATIAL_SELECT",L="SHOW_SPATIAL_DETAILS",A="QUERY_FORM_SEARCH",h="QUERY_FORM_RESET",S="SHOW_GENERATED_FILTER",w="CHANGE_DWITHIN_VALUE",P="ZONE_SEARCH",D="ZONE_SEARCH_ERROR",N="ZONE_FILTER",C="ZONE_CHANGE",j="ZONES_RESET",U="SIMPLE_FILTER_FIELD_UPDATE",M="ADD_SIMPLE_FILTER_FIELD",x="REMOVE_SIMPLE_FILTER_FIELD",G="REMOVE_ALL_SIMPLE_FILTER_FIELDS",Y="UPDATE_FILTER_FIELD_OPTIONS",W="LOADING_FILTER_FIELD_OPTIONS",H="QUERYFORM:ADD_CROSS_LAYER_FILTER_FIELD",q="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD",V="QUERYFORM:REMOVE_CROSS_LAYER_FILTER_FIELD",k="QUERYFORM:UPDATE_CROSS_LAYER_FILTER_FIELD_OPTIONS",z="SET_AUTOCOMPLETE_MODE",Z="TOGGLE_AUTOCOMPLETE_MENU",Q="QUERYFORM:LOAD_FILTER";function B(e){return{type:l,groupId:e}}function $(e,t){return{type:c,groupId:e,index:t}}function X(e){return{type:a,rowId:e}}function J(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:Z,rowId:e,status:t,layerFilterType:r}}function K(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:u,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:o}}function ee(e,t){return{type:s,rowId:e,exceptionMessage:t}}function te(e,t){return{type:p,groupId:e,logic:t}}function re(e){return{type:z,status:e}}function ne(e){return{type:d,groupId:e}}function oe(e){return{type:f,attributes:e}}function ie(e){return{type:y,expand:e}}function le(e){return{type:F,expand:e}}function ae(e){return{type:E,expand:e}}function ue(e,t){return{type:m,key:e,value:t}}function se(e,t){return{type:g,fieldName:t,method:e}}function ce(){return{type:v}}function pe(e){return{type:_,geometry:e}}function de(e,t){return{type:I,fieldName:t,operation:e}}function fe(e){return{type:R,attribute:e}}function ye(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.feature,r=e.srsName,n=e.collectGeometries,o=e.style,i=e.options,l=e.value;return{type:T,value:l,collectGeometries:n,options:i,geometry:t&&t.geometry,feature:t,srsName:r,style:o}}function Fe(){return{type:O}}function Ee(e){return{type:L,show:e}}function me(e){return{type:w,distance:e}}function be(e,t){return{type:A,searchUrl:e,filterObj:t}}function ge(e){return{type:Q,filter:e}}function ve(e){return{type:h,skip:e}}function _e(e,t){return{type:D,error:e,id:t}}function Ie(e,t){return{type:P,active:e,id:t}}function Re(e,t,r){return function(n){return o().post(e,t,{timeout:1e4,headers:{Accept:"application/json","Content-Type":"text/plain"}}).then((function(o){var l=o.data;if("object"!==i(l))try{l=JSON.parse(l)}catch(o){n(_e("Search result broken ("+e+":   "+t+"): "+o.message,r))}n(function(e,t){return{type:N,data:e,id:t}}(l,r)),n(Ie(!1,r))})).catch((function(e){n(_e(e,r))}))}}function Te(e,t){return{type:C,id:e,value:t}}function Oe(e){return{type:H,rowId:(new Date).getTime(),groupId:e}}function Le(e,t,r,n){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return{type:q,rowId:e,fieldName:t,fieldValue:r,fieldType:n,fieldOptions:o}}function Ae(e){return{type:V,rowId:e}}function he(){return{type:b}}function Se(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"filterField";return{type:W,status:e,filterField:t,layerFilterType:r}}function we(e,t,r){return{type:Y,filterField:e,options:t,valuesCount:r}}function Pe(e,t,r){return{type:k,filterField:e,options:t,valuesCount:r}}},47310:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(75875),o=r.n(n),i=r(8575),l=r(27418),a=r.n(l),u={format:"json",bounded:0,polygon_geojson:1,priority:5};const s={geocode:function(e,t){var r=a()({q:e},u,t||{}),n=i.format({protocol:"https",host:"nominatim.openstreetmap.org",query:r});return o().get(n)},reverseGeocode:function(e,t){var r=a()({lat:e.lat,lon:e.lng},t||{},u),n=i.format({protocol:"https",host:"nominatim.openstreetmap.org/reverse",query:r});return o().get(n)}}},43614:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(27418),o=r.n(n),i=r(57588),l=r(61365);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(l,e);var t,r,n,o,i=(n=l,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(n);if(o){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return p(this,e)});function l(){return u(this,l),i.apply(this,arguments)}return t=l,(r=[{key:"handleDialogClick",value:function(e){e.target===e.currentTarget&&this.props.onHide(e)}}])&&s(t.prototype,r),l}(i.Modal);const y=o()((0,l.Z)(f),{Body:i.Modal.Body,Dialog:i.Modal.Dialog,Footer:i.Modal.Footer,Header:i.Modal.Header,Title:i.Modal.Title})},97301:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(95797),o=r(33528),i=r(7878),l=r(82904),a=r(27418),u=r.n(a);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(e){return["STATE_NAME","STATE_ABBR","SUB_REGION","STATE_FIPS"].map((function(t){return{attribute:t,values:e.features.reduce((function(e,r){return-1===e.indexOf(r.properties[t])?[].concat((n=e,function(e){if(Array.isArray(e))return c(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[r.properties[t]]).sort():e;var n}),[])}})).reduce((function(e,t){return u()(e,s({},t.attribute,t.values.map((function(e){return{id:e,name:e}}))))}),{})},d={featureTypes:{},data:{},result:null,resultError:null,syncWmsFilter:!1,isLayerFilter:!1};const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.S0:return u()({},e,{typeName:t.typeName,url:t.url});case n.u7:return u()({},e,{featureTypes:u()({},e.featureTypes,s({},t.typeName,t.featureType))});case n.lN:return u()({},e,{featureTypes:u()({},e.featureTypes,s({},t.typeName,{error:t.error}))});case n.yz:return u()({},e,{featureLoading:t.isLoading});case n.lj:return u()({},e,{featureLoading:!1,data:u()({},e.data,s({},t.typeName,p(t.feature)))});case n.zW:return u()({},e,{featureLoading:!1,featureTypes:u()({},e.data,s({},t.typeName,{error:t.error}))});case n.Yx:return u()({},e,{isNew:!0,searchUrl:t.searchUrl,filterObj:t.filterObj});case n.VN:return u()({},e,{filterObj:u()({},e.filterObj,t.updates)});case n.Hu:return u()({},e,{isNew:!1,result:t.result,searchUrl:t.searchUrl,filterObj:t.filterObj,resultError:null});case n.VT:return u()({},e,{isNew:!1,result:null,resultError:t.error});case l.l:case i.Eg:return t.skip&&t.skip.indexOf("query")>=0?e:u()({},e,{isNew:!1,result:null,filterObj:null,searchUrl:null});case n.RD:return u()({},e,{result:null,resultError:null});case n._T:return u()({},e,{syncWmsFilter:!e.syncWmsFilter});case o.WB:return u()({},e,{syncWmsFilter:t.syncWmsFilter});case n.vO:return u()({},e,{isLayerFilter:!e.isLayerFilter});default:return e}}},46905:(e,t,r)=>{"use strict";r.d(t,{Z:()=>T});var n=r(7878),o=r(4206),i=r(27418),l=r.n(i),a=r(19412),u=r.n(a),s=r(94707),c=r.n(s),p=r(27361),d=r.n(p),f=r(61868),y=["attribute"];function F(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e))return b(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var I={searchUrl:null,featureTypeConfigUrl:null,showGeneratedFilter:!1,attributePanelExpanded:!0,spatialPanelExpanded:!0,crossLayerExpanded:!0,showDetailsPanel:!1,groupLevels:5,useMapProjection:!1,toolbarEnabled:!0,groupFields:[{id:1,logic:"OR",index:0}],maxFeaturesWPS:5,filterFields:[],spatialField:{method:null,attribute:"the_geom",operation:"INTERSECTS",geometry:null},simpleFilterFields:[]},R=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=l()({},t,(_(e={},r.fieldName,r.fieldValue),_(e,"type",r.fieldType),e),{fieldOptions:l()({},v({},t.fieldOptions),{currentPage:void 0===r.fieldOptions.currentPage?1:r.fieldOptions.currentPage})});return"attribute"===r.fieldName&&(n.value="string"===r.fieldType?"":null,n.operator="="),"operator"===r.fieldName&&(n.value=null),n};const T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.E6:var r={rowId:(new Date).getTime(),groupId:t.groupId,attribute:null,operator:"=",value:null,type:null,fieldOptions:{valuesCount:0,currentPage:1},exception:null};return l()({},e,{filterFields:e.filterFields?[].concat(m(e.filterFields),[r]):[r]});case n.vo:return l()({},e,{filterFields:e.filterFields.filter((function(e){return e.rowId!==t.rowId}))});case n.l1:return l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.rowId?R(e,t):e}))});case n.o7:return l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.filterField.rowId?l()({},e,{options:l()({},v({},e.options),_({},e.attribute,t.options))},{fieldOptions:l()({},v({},e.fieldOptions),{valuesCount:t.valuesCount})}):e}))});case n.Sm:return"filterField"===t.layerFilterType?l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.rowId?l()({},e,{openAutocompleteMenu:t.status}):e}))}):(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(d()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.rowId?v(v({},e),{},{openAutocompleteMenu:t.status}):e})),e);case n.D6:return l()({},e,{autocompleteEnabled:t.status});case n.Nr:return"filterField"===t.layerFilterType?l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.filterField.rowId?l()({},e,{loading:t.status}):e}))}):(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(d()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.filterField.rowId?v(v({},e),{},{loading:t.status}):e})),e);case n.J9:return l()({},e,{filterFields:e.filterFields.map((function(e){return e.rowId===t.rowId?l()({},e,{exception:t.exceptionMessage}):e}))});case n.U:var i={id:(new Date).getTime(),logic:"OR",groupId:t.groupId,index:t.index+1};return l()({},e,{groupFields:e.groupFields?[].concat(m(e.groupFields),[i]):[i]});case n.z8:return l()({},e,{groupFields:e.groupFields.map((function(e){return e.id===t.groupId?l()({},e,{logic:t.logic}):e}))});case n.ql:return l()({},e,{filterFields:e.filterFields.filter((function(e){return e.groupId!==t.groupId})),groupFields:e.groupFields.filter((function(e){return e.id!==t.groupId}))});case n.O_:return l()({},e,{filterFields:e.filterFields.map((function(e){for(var r=0;r<t.attributes.length;r++)if(e.attribute===t.attributes[r].id)return l()({},e,{value:null});return e}))});case n.M$:return l()({},e,{attributePanelExpanded:t.expand});case n.Ug:return l()({},e,{spatialPanelExpanded:t.expand});case n.p5:return l()({},e,{crossLayerExpanded:t.expand});case n.Fz:return l()({},e,{crossLayerFilter:(0,f.t8)(t.key,t.value,e.crossLayerFilter)});case n.Gf:return(0,f.vy)("crossLayerFilter.collectGeometries.queryCollection.filterFields",{rowId:t.rowId,groupId:t.groupId,attribute:null,operator:"=",value:null,type:null,fieldOptions:{valuesCount:0,currentPage:1},exception:null},{rowId:t.rowId},e);case n.nh:return(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(d()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.rowId?R(e,t):e})),e);case n.Rf:return(0,f.z6)("crossLayerFilter.collectGeometries.queryCollection.filterFields",{rowId:t.rowId},e);case n.WZ:return l()({},e,{crossLayerFilter:{attribute:e.crossLayerFilter&&e.crossLayerFilter.attribute}});case n.Xp:return(0,f.t8)("crossLayerFilter.collectGeometries.queryCollection.filterFields",(d()(e,"crossLayerFilter.collectGeometries.queryCollection.filterFields")||[]).map((function(e){return e.rowId===t.filterField.rowId?v(v({},e),{},{options:v(v({},e.options),{},_({},e.attribute,t.options)),fieldOptions:v(v({},e.fieldOptions),{},{valuesCount:t.valuesCount})}):e})),e);case n.bP:var a;return l()({},e,{spatialField:l()({},e.spatialField,(a={},_(a,t.fieldName,t.method),_(a,"geometry",null),a))});case n.d_:return l()({},e,{spatialField:l()({},e.spatialField,{geometry:t.geometry})},{toolbarEnabled:!0});case n.xM:return l()({},e,{spatialField:l()({},e.spatialField,_({},t.fieldName,t.operation))});case n.bl:return l()({},e,{spatialField:l()({},e.spatialField,{attribute:t.attribute}),crossLayerFilter:l()({},e.crossLayerFilter,{attribute:t.attribute})});case o.hZ:return"queryform"===t.owner&&"start"===t.status?l()({},e,{toolbarEnabled:!1}):e;case n.Wi:return l()({},e,{toolbarEnabled:!0,spatialField:l()({},e.spatialField,{value:t.value,collectGeometries:t.collectGeometries,geometry:t.srsName?v(v({},t.geometry),{},{projection:t.srsName}):t.geometry})});case o.pb:return"queryform"===t.owner?l()({},e,{toolbarEnabled:!0,spatialField:l()({},e.spatialField,{collectGeometries:t.collectGeometries,geometry:t.geometry})}):e;case n.PN:var s=l()({},I.spatialField,{attribute:e.spatialField.attribute,value:void 0});return l()({},e,{spatialField:l()({},e.spatialField,s)});case n._M:return l()({},e,{showDetailsPanel:t.show});case n.Eg:var p=l()({},I.spatialField,{attribute:e.spatialField.attribute,value:void 0}),b={attribute:e.crossLayerFilter&&e.crossLayerFilter.attribute};return l()({},e,I,{spatialField:p,crossLayerFilter:b});case n.V1:return l()({},e,{showGeneratedFilter:t.data});case n.cY:return l()({},e,{spatialField:l()({},e.spatialField,{geometry:l()({},e.spatialField.geometry,{distance:t.distance})})});case n.co:return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){return e.id===t.id&&t.data.features&&t.data.features.length>0?l()({},e,{values:t.data.features,open:!0,error:null}):e}))})});case n.RD:return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){return e.id===t.id?l()({},e,{busy:t.active}):e}))})});case n.uY:var g,T,O=e.spatialField.zoneFields.map((function(e){if(e.id===t.id){if(g=e.multivalue?t.value.value:t.value.value[0],t.value.feature[0]){var r=t.value.feature[0],n=r.geometry_name;if(e.multivalue&&t.value.feature.length>1){for(var o=1;o<t.value.feature.length;o++){var i=t.value.feature[o];i&&(r=u()(r,i))}T={coordinates:r.geometry.coordinates,geometryName:n,geometryType:r.geometry.type}}else T={coordinates:r.geometry.coordinates,geometryName:n,geometryType:r.geometry.type}}return l()({},e,{value:g,open:!1,geometryName:T?T.geometryName:null})}return e.dependson&&t.id===e.dependson.id?l()({},e,{disabled:!1,values:null,value:null,open:!1,dependson:l()({},e.dependson,{value:g})}):e})),L=c()({type:"FeatureCollection",features:t.value.feature});return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:O,geometry:L&&T?{extent:L,type:T.geometryType,coordinates:T.coordinates}:null})});case n.H8:return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){var t=l()({},e,{values:null,value:null,open:!1,error:null});return e.dependson?l()({},t,{disabled:!0,open:!1,value:null,dependson:l()({},e.dependson,{value:null})}):t})),geometry:null})});case n.Hl:var A;return l()({},e,{spatialField:l()({},e.spatialField,{zoneFields:e.spatialField.zoneFields.map((function(e){return e.id===t.id?(A="object"!==E(t.error)?t.error.status&&t.error.statusText&&t.error.data?{status:t.error.status,statusText:t.error.statusText,data:t.error.data}:{message:t.error.message||"unknown error"}:t.error,l()({},e,{error:A,busy:!1})):e}))})});case n.je:var h=e.simpleFilterFields.reduce((function(e,r){return r.fieldId===t.id?e.push(v(v({},r),t.properties)):e.push(r),e}),[]);return v(v({},e),{},{simpleFilterFields:h});case n.go:var S=t.properties.fieldId?t.properties:v(v({},t.properties),{},{fieldId:(new Date).getTime()}),w=e.simpleFilterFields?[].concat(m(e.simpleFilterFields),[S]):[S];return v(v({},e),{},{simpleFilterFields:w});case n._8:return v(v({},e),{},{simpleFilterFields:e.simpleFilterFields.filter((function(e){return e.fieldId!==t.id}))});case n.xd:return v(v({},e),{},{simpleFilterFields:[]});case n.Ef:var P=I.spatialField,D=(P.attribute,F(P,y)),N=l()({},I,{spatialField:v({},D)}),C=t.filter||N,j=C.spatialField,U=C.filterFields,M=C.groupFields,x=C.crossLayerFilter,G=C.attributePanelExpanded,Y=C.spatialPanelExpanded,W=C.crossLayerExpanded;return v(v({},e),{attributePanelExpanded:G,spatialPanelExpanded:Y,crossLayerExpanded:W,spatialField:v(v({},j),{},{attribute:j&&j.attribute||e.spatialField&&e.spatialField.attribute}),filterFields:U,groupFields:M,crossLayerFilter:v(v({},x),{},{attribute:x&&x.attribute||e.crossLayerFilter&&e.crossLayerFilter.attribute})});default:return e}}},11847:(e,t,r)=>{"use strict";r.d(t,{ij:()=>E,w0:()=>m,vl:()=>b,K2:()=>g,Nw:()=>v});var n=r(8575),o=r(1469),i=r.n(o),l=r(47037),a=r.n(l),u=r(18446),s=r.n(u),c=r(89734),p=r.n(c),d=r(13311),f=r.n(d),y=r(64210);function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var E=function(e){if(!e)return{};var t=!(0===e.indexOf("http")),r=t?[]:e.match(/([^:]*:)\/\/([^:]*:?[^@]*@)?([^:\/\?]*):?([^\/\?]*)/);if(t){var n=window.location;r[1]=n.protocol,r[3]=n.hostname,r[4]=n.port,r[5]=e}r[4]=""!==r[4]&&r[4]?r[4]:"https:"===r[1]?"443":"80",r[5]=r[5]?r[5]:e.slice(r[0].length);var o,i,l=(i=6,function(e){if(Array.isArray(e))return e}(o=r)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],l=!0,a=!1;try{for(r=r.call(e);!(l=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(e){a=!0,o=e}finally{try{l||null==r.return||r.return()}finally{if(a)throw o}}return i}}(o,i)||function(e,t){if(e){if("string"==typeof e)return F(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?F(e,t):void 0}}(o,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=l[1],u=l[3],s=l[4],c=l[5],p=0===c.indexOf("/")?c.split("/")[1]:"";return{protocol:a,domain:u,port:s,rootPath:c,applicationRootPath:p}},m=function(e,t){var r=i()(e)?e[0]:e,o=i()(t)?t[0]:t;if(r===o)return!0;if(!r||!o)return!1;if(!a()(r)||!a()(o))return!1;var l=n.parse(r),u=n.parse(o),c=E(r),d=E(o),f=c.protocol===d.protocol,y=c.domain===d.domain,F=c.port===d.port,m=l.pathname===u.pathname,b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(e===t)return!0;if(!e&&!t)return!0;var r=e?e.split("&").filter((function(e){return!!e})):[],n=t?t.split("&").filter((function(e){return!!e})):[];return s()(p()(r),p()(n))}(l.query,u.query);return f&&F&&y&&m&&b},b=function(e){return y.Qc(e)},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:/^(http(s{0,1}):\/\/)+?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/,r=new RegExp(t);return r.test(e)},v=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/^(http(s{0,1}):\/\/)+?[\w.\-{}]+(?:\.[\w\.-]+)+[\w\-\._~\/\;\.\%\:\&\=\?{}]+$/,n=new RegExp(r),o=n.test(e);if(!o)return!1;if(o&&!t)return!0;if(o&&t){var i=/\{(.*?)\}/.test(e);return 0===t.filter((function(e){return f()(i,e)})).length}return!1}}}]);