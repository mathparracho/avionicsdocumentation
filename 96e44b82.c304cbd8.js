(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(140)),c={id:"leituraescrita",title:"Teste de Leitura e Escrita do SD",sidebar_label:"Leitura e Escrita"},o={unversionedId:"aurorav2/software/testes/leituraescrita",id:"aurorav2/software/testes/leituraescrita",isDocsHomePage:!1,title:"Teste de Leitura e Escrita do SD",description:"Ver gloss\xe1rio para mais informa\xe7\xf5es sobre o teste",source:"@site/docs/aurorav2/software/testes/leituraescrita.md",slug:"/aurorav2/software/testes/leituraescrita",permalink:"/avionicsdocumentation/docs/aurorav2/software/testes/leituraescrita",editUrl:"https://github.com/gabrielaleks/avionicsdocumentation/edit/master/my-website/docs/aurorav2/software/testes/leituraescrita.md",version:"current",sidebar_label:"Leitura e Escrita",sidebar:"Docs",previous:{title:"C\xf3digos de Teste",permalink:"/avionicsdocumentation/docs/aurorav2/software/testes/funcionamento"},next:{title:"Arquitetura",permalink:"/avionicsdocumentation/docs/quimera/arquitetura"}},s=[],u={toc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Ver ",Object(i.b)("a",{parentName:"em",href:"http://localhost:3000/avionicsdocumentation/docs/glossario/testes/leituraescrita"},"gloss\xe1rio")," para mais informa\xe7\xf5es sobre o teste")),Object(i.b)("p",null,"O teste de leitura e escrita foi feito usando a biblioteca ",Object(i.b)("em",{parentName:"p"},"SdFat"),"."),Object(i.b)("p",null,"Resultados:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-cpp"},"Type any character to start\nFreeStack: 1037\nType is FAT32\nStarting print test.  Please wait.\n\nTest of println(uint16_t)\nTime 5.84 sec\nFile size 128.89 KB\nWrite 22.06 KB/sec\nMaximum latency: 11296 usec, Minimum Latency: 112 usec, Avg Latency: 281 usec\n\nTest of printField(uint16_t, char)\nTime 1.93 sec\nFile size 128.89 KB\nWrite 66.68 KB/sec\nMaximum latency: 39052 usec, Minimum Latency: 36 usec, Avg Latency: 85 usec\n\nTest of println(uint32_t)\nTime 9.09 sec\nFile size 200.00 KB\nWrite 22.00 KB/sec\nMaximum latency: 42996 usec, Minimum Latency: 380 usec, Avg Latency: 443 usec\n\nTest of printField(uint32_t, char)\nTime 2.67 sec\nFile size 200.00 KB\nWrite 75.05 KB/sec\nMaximum latency: 46644 usec, Minimum Latency: 64 usec, Avg Latency: 122 usec\n\nTest of println(float)\nTime 9.96 sec\nFile size 149.00 KB\nWrite 14.95 KB/sec\nMaximum latency: 43052 usec, Minimum Latency: 376 usec, Avg Latency: 487 usec\n\nTest of printField(float, char)\nTime 3.81 sec\nFile size 149.00 KB\nWrite 39.10 KB/sec\nMaximum latency: 46360 usec, Minimum Latency: 124 usec, Avg Latency: 179 usec\n\nDone!\n")))}l.isMDXComponent=!0},140:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=r,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);