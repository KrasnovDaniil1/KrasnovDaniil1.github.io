import{_ as N,o as z,c as P,b as C,t as $,h as M,r as S,a as T,w as D}from"./index-16ccd824.js";const R="/assets/TableDecor-3170ad5c.png";const U={props:{about:{type:Object,default:{title:"Нет текста",msg:"Нет текста"}}},setup(){return{TableDecor:R}}},Z=["src"],G=["src"];function W(e,t,o,n,r,a){return z(),P("div",null,[C("h1",null,$(o.about.title),1),C("p",null,$(o.about.msg),1),C("img",{style:{left:"0"},src:n.TableDecor},null,8,Z),C("img",{style:{right:"0",transform:"scale(-1, 1)"},src:n.TableDecor},null,8,G)])}const pt=N(U,[["render",W],["__scopeId","data-v-8b2708a1"]]);function A(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?A(Object(o),!0).forEach(function(n){K(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):A(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function L(e){return(L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function q(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function K(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function J(e){return function(t){if(Array.isArray(t))return _(t)}(e)||function(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,o){if(t){if(typeof t=="string")return _(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(t,o)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function _(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function E(e,t){var o=t.options,n=t.callbacks,r=t.map,a=t.useObjectManager,s=t.objectManagerClusterize,p=t.useHtmlInLayout?`
    <div v-html="properties.balloonContentHeader"></div>
    <div v-html="properties.balloonContentBody"></div>
    <div v-html="properties.balloonContentFooter"></div>
  `:`
    <div>{{ properties.balloonContentHeader }}</div>
    <div>{{ properties.balloonContentBody }}</div>
    <div>{{ properties.balloonContentFooter }}</div>
  `,l={},u=[];if(e.forEach(function(c){c.clusterName?l[c.clusterName]=l[c.clusterName]?[].concat(J(l[c.clusterName]),[c]):[c]:u.push(c)}),Object.keys(l).forEach(function(c){var i=o[c]||{},m=n[c]||{},f=i.layout||p;i.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(f);var v=i.clusterBalloonLayout||i.clusterLayout;delete i.clusterBalloonLayout;var j=v?ymaps.templateLayoutFactory.createClass(v):i.clusterBalloonContentLayout||"cluster#balloonTwoColumns";i.clusterBalloonContentLayout=j;var k=i.clusterIconContentLayout;if(i.clusterIconContentLayout=k&&ymaps.templateLayoutFactory.createClass(k),a){var h=new ymaps.ObjectManager(Object.assign({clusterize:s},i));Object.keys(m).forEach(function(y){h.clusters.events.add(y,m[y])}),h.add(l[c]),r.geoObjects.add(h)}else{var O=new ymaps.Clusterer(i);Object.keys(m).forEach(function(y){O.events.add(y,m[y])}),i.createCluster&&(O.createCluster=i.createCluster),O.add(l[c]),r.geoObjects.add(O)}}),u.length){var d=a?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;u.forEach(function(c){return d.add(c)}),r.geoObjects.add(d)}}function x(e){return e.charAt(0).toUpperCase()+e.slice(1)}function Q(e){return(e.icon.color||"blue")+(e.icon.glyph?x(e.icon.glyph):e.icon.content?"Stretchy":"")}function H(e){return e.map(function(t){return Array.isArray(t)?H(t):+t})}function X(e,t){var o=[];return function n(r,a){if(r===a)return!0;if(r instanceof Date&&a instanceof Date)return+r==+a;if(L(r)!=="object"||L(a)!=="object")return!1;if(function(l,u){for(var d=o.length;d--;)if(!(o[d][0]!==l&&o[d][0]!==u||o[d][1]!==u&&o[d][1]!==l))return!0;return!1}(r,a))return!0;o.push([r,a]);var s=Object.keys(r),p=s.length;if(Object.keys(a).length!==p)return!1;for(;p--;)if(!n(r[s[p]],a[s[p]]))return!1;return!0}(e,t)}var b=new(function(){function e(){(function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")})(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,o;return t=e,(o=[{key:"$on",value:function(n,r){var a=this;return this.events[n]||(this.events[n]=[]),this.events[n].push(r),function(){a.events[n]=a.events[n].filter(function(s){return r!==s})}}},{key:"$emit",value:function(n,r){var a=this.events[n];a&&a.forEach(function(s){return s(r)})}}])&&q(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()),Y=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function B(e){return e.filter(function(t){return![].concat(Y,["default"]).includes(t)}).length===0}function tt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(t,o){if(window.ymaps)return t();if(document.getElementById("vue-yandex-maps"))b.$on("scriptIsLoaded",t);else{var n=document.createElement("SCRIPT"),r=e.apiKey,a=r===void 0?"":r,s=e.lang,p=s===void 0?"ru_RU":s,l=e.version,u=l===void 0?"2.1":l,d=e.coordorder,c=d===void 0?"latlong":d,i=e.debug,m=i!==void 0&&i,f=e.enterprise,v=f!==void 0&&f,j=m?"debug":"release",k="lang=".concat(p).concat(a&&"&apikey=".concat(a),"&mode=").concat(j,"&coordorder=").concat(c),h="https://".concat(v?"enterprise.":"","api-maps.yandex.ru/").concat(u,"/?").concat(k);n.setAttribute("src",h),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),b.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready(function(){b.ymapReady=!0,b.$emit("scriptIsLoaded"),t()})},n.onerror=o}})}var et,F=1,I=b,nt=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],g={pluginOptions:{},provide:function(){var e,t,o,n,r,a,s=this,p=[],l=[];return this.balloonComponent!=null&&(n=this.balloonComponent,r=null,a="vue-balloon-".concat(F),F+=1,o=function(u,d){var c=ymaps.templateLayoutFactory.createClass('<div id="'.concat(a,'"><div>'),{build:function(){c.superclass.build.call(this),(r=new et({parent:u.$root,data:function(){return{props:u.$props,listeners:u.$listeners}},propsData:{marker:d,component:n}})).$mount("#".concat(a))},clear:function(){r.$destroy(),r=null,c.superclass.clear.call(this)}});return c}),{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(u){s.myMap.geoObjects&&(p.push(u),e&&clearTimeout(e),e=setTimeout(function(){s.deleteMarkers(p),p=[]},0))},compareValues:function(u){var d=u.newVal,c=u.oldVal,i=u.marker;X(d,c)||(l.push(i),t&&clearTimeout(t),t=setTimeout(function(){s.setMarkers(l),l=[]},0))},makeComponentBalloonTemplate:o}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null}},props:{coords:{type:Array,required:!0},zoom:{validator:function(e){return!Number.isNaN(e)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return B(e)}},detailedControls:{type:Object,validator:function(e){return B(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},mapEvents:{type:Array,default:function(){return[]}},showAllMarkers:Boolean,disablePan:Boolean,balloonComponent:{type:[Object,Function],default:function(){return null}},useHtmlInLayout:Boolean},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{init:function(){var e,t,o=this;this.myMap={},this.markers=[],window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||(e=(t=this.$slots).default)!==null&&e!==void 0&&e.call(t)||this.placemarks.length)&&document.getElementById(this.ymapId)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),(this.mapEvents.length?this.mapEvents:nt).forEach(function(n){return o.myMap.events.add(n,function(r){return o.$emit(n,r)})}),this.myMap.events.add("boundschange",function(n){var r=n.originalEvent,a=r.newZoom,s=r.newCenter,p=r.newBounds;o.$emit("boundschange",n),o.$emit("update:zoom",a),o.$emit("update:coords",s),o.$emit("update:bounds",p)}),this.detailedControls&&Object.keys(this.detailedControls).forEach(function(n){o.myMap.controls.remove(n),o.myMap.controls.add(n,o.detailedControls[n])}),this.scrollZoom===!1&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(e){var t=this;this.markers.push(e),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.setMarkers(t.markers)},0)},setMarkers:function(e){var t=this,o={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize,useHtmlInLayout:this.useHtmlInLayout};if(this.markers!==e){var n=e.map(function(r){return t.useObjectManager?r.id:r.properties.get("markerId")});this.deleteMarkers(n),E(e,o),this.$emit("markers-was-change",n)}else E(e,o);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(e){var t=this,o=[];this.myMap.geoObjects.each(function(n){return o.push(n)}),o.forEach(function(n){var r=[];if(t.useObjectManager)n.remove(e);else{var a,s=function(l){var u=l.properties.get("markerId");e.includes(u)&&r.push(l)};if(n.each)n.each(s),a=n.getLength();else if(n.getGeoObjects){var p=n.getGeoObjects();p.forEach(s),a=p.length}a===0||a===r.length?t.myMap.geoObjects.remove(n):r.length&&r.forEach(function(l){return n.remove(l)})}}),this.$emit("markers-was-delete",e)}},watch:{coordinates:function(e){this.myMap&&(this.disablePan?this.myMap.setCenter&&this.myMap.setCenter(e):this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(e,{checkZoomRange:!0}))},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(e){this.myMap.setBounds&&this.myMap.setBounds(e)}},render:function(){var e,t;return M("section",{class:"ymap-container",ref:"mapContainer"},[M("div",{id:this.ymapId,class:this.ymapClass,style:this.style}),this.isReady&&M("div",[(e=(t=this.$slots).default)===null||e===void 0?void 0:e.call(t)])])},mounted:function(){var e=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver(function(){e.myMap.container&&e.myMap.container.fitToViewport()});var t=this.$refs.mapContainer;if(this.mapObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),I.scriptIsNotAttached){var o=this.debug;tt(w(w(w({},this.$options.pluginOptions),this.settings),{},{debug:o}))}I.ymapReady?ymaps.ready(this.init):I.$on("scriptIsLoaded",this.init)},beforeUnmount:function(){var e;(e=this.myMap)!==null&&e!==void 0&&e.geoObjects&&this.myMap.geoObjects.removeAll()}},ot=["placemark","polyline","rectangle","polygon","circle"],rt=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],V={inject:["useObjectManager","addMarker","deleteMarker","compareValues","makeComponentBalloonTemplate"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(e){return ot.includes(e.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(e){return!Number.isNaN(e)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object,balloonComponentProps:{type:Object,default:function(){return{}}},markerEvents:{type:Array,default:function(){return[]}}},data:function(){return{unwatchArr:[]}},render:function(){return this.$slots.balloon&&M("div",{style:"display: none;"},[this.$slots.balloon()])},mounted:function(){var e=this;Object.keys(this.$props).forEach(function(t){t!=="balloonComponentProps"&&e.unwatchArr.push(e.$watch(t,function(o,n){return e.compareValues({newVal:o,oldVal:n,marker:e.defineMarker()})}))}),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var e=this,t={markerId:this.markerId,markerType:this.markerType||"placemark",coords:H(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:{}},o=null;this.balloonTemplate&&(o=ymaps.templateLayoutFactory.createClass(this.balloonTemplate)),this.$slots.balloon&&(o=ymaps.templateLayoutFactory.createClass(this.$slots.balloon()[0].elm.outerHTML)),this.makeComponentBalloonTemplate&&(o=this.makeComponentBalloonTemplate(this,t)),o!=null&&(t.balloonOptions.balloonContentLayout=o),this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(t.iconContent=this.icon.content,t.iconLayout=this.icon.layout,t.iconImageHref=this.icon.imageHref,t.iconImageSize=this.icon.imageSize,t.iconImageOffset=this.icon.imageOffset,t.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&typeof this.icon.contentLayout=="string"&&(t.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):t.icon=this.icon;var n=function(i,m){var f=x(i);if(!m)return f;switch(f){case"Placemark":return"Point";case"Polyline":return"LineString";default:return f}}(t.markerType,this.useObjectManager),r={hintContent:t.hintContent,iconContent:t.icon?t.icon.content:t.iconContent,markerId:t.markerId},a=t.balloon?{balloonContentHeader:t.balloon.header,balloonContentBody:t.balloon.body,balloonContentFooter:t.balloon.footer}:{},s=Object.assign(r,a,t.properties),p=t.iconLayout?{iconLayout:t.iconLayout,iconImageHref:t.iconImageHref,iconImageSize:t.iconImageSize,iconImageOffset:t.iconImageOffset,iconContentOffset:t.iconContentOffset,iconContentLayout:t.iconContentLayout}:{preset:t.icon&&"islands#".concat(Q(t),"Icon")},l=t.markerStroke?{strokeColor:t.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(t.markerStroke.opacity)>=0?parseFloat(t.markerStroke.opacity):1,strokeStyle:t.markerStroke.style,strokeWidth:parseFloat(t.markerStroke.width)>=0?parseFloat(t.markerStroke.width):1}:{},u=t.markerFill?{fill:t.markerFill.enabled||!0,fillColor:t.markerFill.color||"0066ff99",fillOpacity:parseFloat(t.markerFill.opacity)>=0?parseFloat(t.markerFill.opacity):1,fillImageHref:t.markerFill.imageHref||""}:{},d=Object.assign(p,l,u,t.balloonOptions,t.options);n==="Circle"&&(t.coords=[t.coords,t.circleRadius]);var c=function(i,m){var f=m?{type:"Feature",id:i.properties.markerId,geometry:{type:i.markerType,coordinates:i.coords},properties:i.properties,options:i.options}:new ymaps[i.markerType](i.coords,i.properties,i.options);return f.clusterName=i.clusterName,f}({properties:s,options:d,markerType:n,coords:t.coords,clusterName:t.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||(this.markerEvents.length?this.markerEvents:rt).forEach(function(i){return c.events.add(i,function(m){return e.$emit(i,m)})}),c}},beforeUnmount:function(){this.unwatchArr.forEach(function(e){return e()}),this.deleteMarker(this.markerId)}};g.install=function e(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.installed||(e.installed=!0,g.pluginOptions=o,t.component("yandex-map",g),t.component("ymap-marker",V))},typeof window<"u"&&window.Vue&&window.Vue.use(g);var at=g,it=V;const st={props:{coords:{type:Array}},components:{yandexMap:at,ymapMarker:it},setup(){}},ct={class:"map"};function lt(e,t,o,n,r,a){const s=S("ymapMarker"),p=S("yandexMap");return z(),P("div",ct,[T(p,{coords:o.coords,zoom:12},{default:D(()=>[T(s,{coords:o.coords,"marker-id":"123","hint-content":"some hint"},null,8,["coords"])]),_:1},8,["coords"])])}const dt=N(st,[["render",lt],["__scopeId","data-v-05ce39d3"]]);export{dt as M,pt as T};
