(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),d=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=d(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},s=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(a),s=r,m=u["".concat(b,".").concat(s)]||u[s]||p[s]||c;return a?n.a.createElement(m,l(l({ref:t},i),{},{components:a})):n.a.createElement(m,l({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,b=new Array(c);b[0]=s;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var i=2;i<c;i++)b[i]=a[i];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},155:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/eps_schem-61e8d428da23e5962b1e4bac730a146c.jpg"},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/eps_pcb-02d02e6ec1fd98d03530a9f95ab4a5b6.png"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(7),c=(a(0),a(105)),b={id:"eps",title:"EPS - Electrical Power System",sidebar_label:"EPS"},l={unversionedId:"aurorav2/hardware/placas/eps",id:"aurorav2/hardware/placas/eps",isDocsHomePage:!1,title:"EPS - Electrical Power System",description:"Objetivo",source:"@site/docs/aurorav2/hardware/placas/eps.md",slug:"/aurorav2/hardware/placas/eps",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/eps",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/aurorav2/hardware/placas/eps.md",version:"current",sidebar_label:"EPS",sidebar:"docs",previous:{title:"Design Rule Check (DRC)",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/altium/drc"},next:{title:"CDHS - Command Data Handling System",permalink:"/avionicsdocumentation/docs/aurorav2/hardware/placas/cdhs"}},o=[{value:"Objetivo",id:"objetivo",children:[]},{value:"Componentes",id:"componentes",children:[]},{value:"Esquem\xe1tico",id:"esquem\xe1tico",children:[]},{value:"PCB",id:"pcb",children:[]}],i={toc:o};function d(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"objetivo"},"Objetivo"),Object(c.b)("p",null,"Duas fun\xe7\xf5es s\xe3o exercidas simultaneamente nesta placa: (1) fornecimento de energia e (2) regula\xe7\xe3o desta energia. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Duas baterias de lithium-ion (li-ion) modelo 18650 e de voltagem nominal 3.7v s\xe3o usadas em paralelo. Em conjunto, dois m\xf3dulos TP4056 s\xe3o usados para a recarga dessas baterias. \xc9 utilizado tamb\xe9m um m\xf3dulo sensor de corrente (INA219) para que sejam avaliadas a todo momento a corrente e a tens\xe3o geradas para o circuito."),Object(c.b)("li",{parentName:"ol"},"Tr\xeas tens\xf5es diferentes s\xe3o utilizadas por componentes da avi\xf4nica. Essas tens\xf5es s\xe3o obtidas no EPS atrav\xe9s de tr\xeas diferentes reguladores de tens\xe3o. S\xe3o utilizados o step-up regulator U3V709 para gerar 9V, o regulador de tens\xe3o LM7805 para gerar 5V e o regulador de tens\xe3o LD1117V33 para gerar 3.3V. ")),Object(c.b)("p",null,"H\xe1 tamb\xe9m um sistema com um MOSFET e duas chaves, uma interna ao circuito e outra externa ao foguete. \xc9 a partir desse sistema, chamado de Remove Before Flight (RBF), que a avi\xf4nica pode ser mantida desligada enquanto estiver dentro do foguete e s\xf3 seja acionada no momento do lan\xe7amento."),Object(c.b)("h2",{id:"componentes"},"Componentes"),Object(c.b)("p",null,"Os componentes da placa s\xe3o:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Componente"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Qtd"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Obs"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"40 pins flat connector"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Conector do barramento")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"TP4056"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Carrega baterias")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Battery Holder"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"18650 Battery"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"3.7V")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mini-lock connector"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"2"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Para carregar baterias e RBF")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Slide switch"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"On/Off/RBF")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"MOSFET"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"RBF")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"INA219"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Mede tens\xe3o e corrente")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"U3V709"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Step-up 3.7V -> 9V")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"LM7085M"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Step-down 9V -> 5V")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"LD1117V33"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Step-down 9V -> 3.3V")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Resistor"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1x 10K\u03a9")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Capacitor"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"5"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"1x 33uF, 1x 0.22uF, 1x 0.1uF, 1x 100uF, 1x 10uF")))),Object(c.b)("h2",{id:"esquem\xe1tico"},"Esquem\xe1tico"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(155).default})),Object(c.b)("h2",{id:"pcb"},"PCB"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:a(156).default})))}d.isMDXComponent=!0}}]);