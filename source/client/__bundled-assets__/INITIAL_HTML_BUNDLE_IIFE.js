var _clientHtml=(()=>{var a=Object.defineProperty;var r=Object.getOwnPropertyDescriptor;var d=Object.getOwnPropertyNames;var n=Object.prototype.hasOwnProperty;var g=(i,t)=>{for(var s in t)a(i,s,{get:t[s],enumerable:!0})},f=(i,t,s,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of d(t))!n.call(i,e)&&e!==s&&a(i,e,{get:()=>t[e],enumerable:!(o=r(t,e))||o.enumerable});return i};var m=i=>f(a({},"__esModule",{value:!0}),i);var S={};g(S,{InitialStewHtml:()=>P});var l={foo:"splash_zhhVgH"};function p(i){return h("div",{className:l.foo},"loading...")}function P(i){let{stewBuildConfig:t,splashPageCss:s}=i;return h("html",{lang:"en"},h("head",null),h("body",null,h("style",{id:"splashPageStyle"},s),h("div",{id:"appContainer"},h(p,null)),h("script",{id:"appScript","data-stew_build_id":t.stewBuildId,src:`/app.${t.stewBuildId}.js`})))}return m(S);})();