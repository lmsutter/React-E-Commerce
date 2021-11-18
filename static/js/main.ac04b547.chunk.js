(this["webpackJsonpreact-e-commerce"]=this["webpackJsonpreact-e-commerce"]||[]).push([[0],{44:function(n,e,t){"use strict";t.r(e);var r=t(1),i=t(22),c=t.n(i),o=t(8),a=t(11),l=t(4);var s,d,j,u,h,b,p,f,O,m,x,g,v,w,y,k,C,F=t(6),N=t(3),S=t(2),T=S.c.div(s||(s=Object(N.a)(["\n  width: 500px;\n  background-color: white;\n  border-radius: 45px;\n  padding: 1em;\n\n  img {\n    max-width: 80%;\n    border-radius: 40px;\n  }\n"]))),H=S.c.button(d||(d=Object(N.a)(["\n  border-radius: 2em;\n  padding: .5em 1em;\n  border: none;\n  background-color: ",";\n  color: white;\n  font-size: 1.2rem;\n"])),(function(n){return n.theme.color2})),L=S.c.div(j||(j=Object(N.a)(["\n  @media (min-width: 600px) {\n    display: flex;\n    flex-direction: row;\n    width: 100vw;\n    justify-content: space-around;\n    background-color: #fff;\n  }\n"]))),V=S.c.div(u||(u=Object(N.a)(["\n  position: fixed;\n  top: 7em; \n  left: 0;\n  width: 335px;\n\n  transform: \n    ",";\n  transition: all .5s ease-in-out;\n\n  h3 {\n    background-color: ",";\n    margin: 0;\n    padding: .2em .5em;\n    border-radius: .7em .7em 0 0;\n    display: inline-block;\n    font-size: 1.5rem;\n    transform: translateY(2px);\n  }\n\n  h3:hover,\n  h3:focus {\n    cursor: pointer;\n  }\n\n  .sort .option {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto;\n  }\n\n  .filter .option {\n    display: grid;\n    grid-template-rows: auto auto;\n    grid-template-columns: auto auto auto;\n  }\n\n  .catHeader { \n    grid-row: 1 / 2;\n    margin: 0 1em;\n  }\n\n  .first {\n    padding-top: 1em;\n  }\n\n  .optionContainer {\n    border-radius: 0 .7em .7em .7em;\n    background-color: ",";\n\n  }\n\n  .subOption {\n    padding: 1em;\n    font-size: 1.2rem;\n    }\n\n  .subOption:hover,\n  .subOption:focus {\n    cursor: pointer;\n  }\n\n  .sort .subOption {\n    grid-row: 2 / 3;\n  }\n\n  .filter .subOption {\n    grid-row: 2 / 3;\n  }\n\n  .none:hover {\n    cursor: pointer;\n  }\n\n  div.activeSF {\n    display: inline-block;\n    position: absolute;\n    content: '';\n    width: .7em;\n    height: .7em;\n    background-color: ",";\n    border-radius: 5em;\n    margin-left: .2em;\n    transform: translateY(40%);\n  }\n\n  @media (min-width: 600px) {\n    transform: unset;\n    position: static;\n    width: initial;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-color: #fff;\n\n    h3 {\n      background-color: #fff;\n      margin-right: 1em;\n    }\n\n    h3:hover,\n    h3:focus {\n      cursor: default;\n    }\n\n    .catHeader {\n      background-color: #fff;\n      margin: 0;\n      justify-self: center;\n      text-align: center;\n      grid-column: 1 / 3;\n    }\n\n    .optionContainer {\n      display: flex;\n      flex-direction: row;\n      background-color: #fff;\n    }\n\n    .first {\n      padding-top: 0;\n      grid-row: 1 / 3;\n      align-self: center;\n      margin: 0 1em;\n    }\n\n    .subOption {\n      padding: .7em;\n      font-size: 1em;\n    }\n    \n  }\n"])),(function(n){var e=n.open,t=(n.x,n.y);return e?"translateX(3em) translateY(0)  rotate(0) ":"translateX(-297px) translateY(".concat(t,")  rotate(90deg) ")}),(function(n){return n.theme.color3}),(function(n){return n.theme.color3}),(function(n){return n.theme.color2})),E=S.c.div(h||(h=Object(N.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  @media (min-width: 600px) {\n    flex-direction: row;\n    flex-wrap: wrap;\n    max-width: 80vw;\n    overflow-y: auto;\n    margin: 0 auto;\n    justify-content: center;\n  }\n"]))),z=S.c.div(b||(b=Object(N.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  \n  \n  h2 {\n    margin: 0;\n    margin-bottom: 1em;\n    background: rgba(255, 255, 255, 1);\n    padding: 1em; \n    border-radius: 1.7em;\n    box-shadow: 0 0 15px 3px rgba(20, 20, 20, .2);\n  }\n  \n  @media (min-width: 600px) {\n    margin-top: 2em;\n  }\n  "]))),P=Object(S.c)(T)(p||(p=Object(N.a)(['\n  margin-bottom: 2em;\n  width: 80vw;\n  height: 300px;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: auto auto auto;\n  grid-row-gap: .7em;\n  grid-template-areas: \n    "name name name"\n    "image image image"\n    "info moreinfo addcart";\n  background-color: white;\n  box-shadow: 0 0 15px 3px rgba(20, 20, 20, .2);\n\n  @media (min-width: 600px) {\n    width: initial;\n    height: 450px;\n    max-width: 450px;\n    max-heigth: 450px;\n    margin: 2em;\n  }\n']))),X=S.c.h3(f||(f=Object(N.a)(["\n  grid-area: name;\n  color: white;\n  background-color: rgba(23, 23, 23, .5);\n  margin: .5em .5em;\n  padding: 1em;\n  border-radius: 1.5em;\n"]))),I=S.c.img(O||(O=Object(N.a)(["\n  grid-area: name-start / name-start / image-end / image-end;\n  min-width: 100%;\n  max-height: 100%;\n  object-fit: cover;\n"]))),R=S.c.div(m||(m=Object(N.a)(["\n  grid-area: info;\n  margin-left: 1em;\n"]))),A=S.c.p(x||(x=Object(N.a)(["\n  margin-bottom: .3em;\n"]))),M=S.c.p(g||(g=Object(N.a)([""]))),Y=Object(S.c)(H)(v||(v=Object(N.a)(["\n  grid-area: moreinfo;\n  place-self: center;\n  a {\n    color: #fff;\n    text-decoration: none;\n  }\n"]))),B=Object(S.c)(H)(w||(w=Object(N.a)(["\n  grid-area: addcart;\n  background-color: ",";\n  place-self: center;\n  &:hover {\n    cursor: pointer;\n  }\n"])),(function(n){return n.theme.color1})),D=t(0);function J(n){var e=n.children;return Object(D.jsxs)(D.Fragment,{children:[" ",e," "]})}J.Options=function(n){var e=n.children;return Object(D.jsx)(L,{children:e})},J.SortFilter=function(n){var e=n.onClick,t=n.open,r=n.x,i=n.y,c=n.children;return Object(D.jsx)(V,{onClick:e,y:i,x:r,open:t,children:c})},J.Frame=function(n){var e=n.children;return Object(D.jsx)(E,{children:e})},J.Category=function(n){var e=n.children;return Object(D.jsx)(z,{children:e})},J.Name=function(n){var e=n.children;return Object(D.jsx)(X,{children:e})},J.Image=function(n){var e=n.children,t=n.src;return Object(D.jsx)(I,{src:t,children:e})},J.InfoBox=function(n){var e=n.children;return Object(D.jsx)(R,{children:e})},J.Price=function(n){var e=n.children;return Object(D.jsx)(A,{children:e})},J.Rating=function(n){var e=n.children;return Object(D.jsx)(M,{children:e})},J.MoreInfo=function(n){var e=n.category,t=(n.children,n.item);return Object(D.jsx)(Y,{children:Object(D.jsxs)(a.b,{to:"/category/".concat(e,"/").concat(t),children:[Object(D.jsx)("span",{children:"+ "}),Object(D.jsx)("span",{children:"Info"})]})})},J.AddCart=function(n){n.children;return Object(D.jsxs)(B,{children:[Object(D.jsx)("span",{children:"+ "}),Object(D.jsx)("span",{children:"Cart"})]})},J.ContentCard=function(n){var e=n.children;return Object(D.jsx)(P,{children:e})};var $=S.c.svg.attrs({version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"})(y||(y=Object(N.a)([""]))),q=Object(S.c)($)(k||(k=Object(N.a)(["\n  \n  .first {\n    fill: ",";\n  }\n  .second {\n    fill: ",";\n  }\n  .third {\n    fill: ",";\n  }\n"])),(function(n){return n.theme.color1}),(function(n){return n.theme.color2}),(function(n){return n.theme.color3})),W=function(){return Object(D.jsxs)(q,{viewBox:"0 60 1920 1080",children:[Object(D.jsx)("path",{className:"first",d:"m 633.06208,211.44704 c 40.77837,79.60778 45.64742,166.07832 79.1222,263.52922 33.47476,97.45092 94.94664,206.56849 70.60134,266.27432 -23.73665,59.70584 -133.29046,69.31368 -235.54068,118.7254 C 444.99472,908.70135 350.04808,996.54451 260.57913,993.11306 171.1102,988.99554 87.118954,892.91721 49.383762,783.79957 12.257186,674.682 21.386674,552.52523 61.556396,461.93706 102.33475,370.6626 174.15336,310.95678 242.32017,236.83918 310.48699,162.72158 375.61064,74.878521 445.60335,67.329501 516.20469,59.780481 592.28372,132.52553 633.06208,211.44704 Z"}),Object(D.jsx)("path",{className:"second",d:"m 1699.4725,105.29742 c 96.0809,51.19293 164.4426,139.74633 181.1943,229.82511 17.4778,90.59923 -16.5947,183.30168 -40.978,278.66808 -23.7169,95.30909 -37.8047,192.70442 -99.5932,258.06185 -61.7887,65.35744 -171.398,97.52144 -274.1262,92.36883 -102.0619,-5.20989 -196.5761,-47.79367 -246.791,-110.51056 -50.8214,-62.08178 -57.95,-143.66158 -100.4624,-216.36799 -41.7859,-72.18597 -118.95572,-135.49858 -107.7635,-183.09579 10.5257,-47.5399 108.6868,-79.88484 180.8972,-148.47056 72.2104,-68.58575 119.0766,-174.04739 203.743,-219.804605 84.6663,-45.757222 208.4657,-31.924687 303.8798,19.325635 z"}),Object(D.jsx)("path",{className:"third",d:"m 770.23523,155.93173 c 92.9299,-61.101025 203.62304,-77.886665 289.21527,-46.99249 86.4087,30.50065 148.2412,108.92239 217.3088,179.90341 69.3595,70.34614 145.4294,133.01009 169.7003,222.61847 24.271,89.60827 -4.3067,205.6783 -61.2708,296.3907 -56.6723,90.07753 -141.4395,154.1626 -220.7568,167.6852 -79.0844,14.3987 -152.4862,-20.8889 -236.40403,-19.4801 -83.10132,1.0153 -176.71877,38.7271 -211.69043,4.1889 C 681.07396,926.34256 703.6395,820.58302 681.94033,719.8515 660.24118,619.12003 594.04448,522.54035 598.23758,422.1772 602.43055,321.81426 677.59727,216.39786 770.23523,155.93173 Z"})]})},Z=Object(S.c)($)(C||(C=Object(N.a)(["\n  width: 1em;\n  margin-left: .5em;\n  fill: black;\n"]))),U=function(n){var e=20*n.rating;return Object(D.jsxs)(Z,{fill:"black",viewBox:"-4 -5 63 63",children:[Object(D.jsx)("defs",{children:Object(D.jsx)("clipPath",{id:"star",children:Object(D.jsx)("path",{d:"M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558\r s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024\r l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506\r c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017\r l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"})})}),Object(D.jsx)("path",{stroke:"black",strokeWidth:"5px",d:"M55.818,21.578c-0.118-0.362-0.431-0.626-0.808-0.681L36.92,18.268L28.83,1.876c-0.168-0.342-0.516-0.558-0.896-0.558\r s-0.729,0.216-0.896,0.558l-8.091,16.393l-18.09,2.629c-0.377,0.055-0.689,0.318-0.808,0.681c-0.117,0.361-0.02,0.759,0.253,1.024\r l13.091,12.76l-3.091,18.018c-0.064,0.375,0.09,0.754,0.397,0.978c0.309,0.226,0.718,0.255,1.053,0.076l16.182-8.506l16.18,8.506\r c0.146,0.077,0.307,0.115,0.466,0.115c0.207,0,0.413-0.064,0.588-0.191c0.308-0.224,0.462-0.603,0.397-0.978l-3.09-18.017\r l13.091-12.761C55.838,22.336,55.936,21.939,55.818,21.578z"}),Object(D.jsx)("rect",{x:"0",y:"0",fill:"white",width:"100%",height:"100%",clipPath:"url(#star)"}),Object(D.jsx)("rect",{x:"0",y:"0",fill:"black",width:"".concat(e,"%"),height:"100%",clipPath:"url(#star)"})]})};function G(n){var e=n.data,t=n.category,i=n.breakpoints,c=n.categoryPretty,a=n.sortFilterOption,l=n.setSortFilterOption;console.log(a);var s=Object(r.useState)(""),d=Object(o.a)(s,2),j=d[0],u=d[1],h=Object(r.useState)([]),b=Object(o.a)(h,2),p=b[0],f=b[1];Object(r.useEffect)((function(){f(e)}),[e]),Object(r.useEffect)((function(){var n=[],t=a.sortOption,r=a.sortValue,i=a.filterOption,c=a.filterValue;"none"===i?n=e:"price"===i?n=e.filter((function(n){return n.price>=c[0]&&n.price<=c[1]})):"rating"===i?n=e.filter((function(n){return n.rating.rate>=c[0]&&n.rating.rate<=c[1]})):"popularity"===i&&(n=e.filter((function(n){return n.rating.count>=c[0]&&n.rating.count<=c[1]}))),"price"===t?n.sort((function(n,e){return"HighLow"===r?e.price-n.price:n.price-e.price})):"rating"===t?n.sort((function(n,e){return"HighLow"===r?e.rating.rate-n.rating.rate:n.rating.rate-e.rating.rate})):"popularity"===t&&n.sort((function(n,e){return"HighLow"===r?e.rating.count-n.rating.count:n.rating.count-e.rating.count})),f(JSON.parse(JSON.stringify(n)))}),[e,a]);var O=i[t.replaceAll("-"," ")],m=function(n){u(j===n?"":n)},x=function(n,e,t){return Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(r){return Object(F.a)(Object(F.a)({},r),{},{filterOption:n,filterValue:[e,t]})}))},children:["price"===n&&"$",e,t!==1/0?Object(D.jsxs)(D.Fragment,{children:["- ","price"===n&&"$",t]}):"+",Object(D.jsx)("div",{className:a.filterOption===n&&a.filterValue[0]===e&&a.filterValue[1]===t?"activeSF":""})]})};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(J.Options,{children:[Object(D.jsxs)(J.SortFilter,{onClick:function(){return m("sort")},y:"0",x:"-243px",open:"sort"===j,children:[Object(D.jsx)("h3",{children:"Sort"}),Object(D.jsxs)("div",{className:"sort optionContainer",children:[Object(D.jsx)("div",{className:"option",children:Object(D.jsxs)("h4",{className:"catHeader first none",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"none",sortValue:"none"})}))},children:["None",Object(D.jsx)("div",{className:"none"===a.sortOption?"activeSF":""})]})}),Object(D.jsxs)("div",{className:"option first",children:[Object(D.jsx)("h4",{className:"catHeader",children:"Price"}),Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"price",sortValue:"LowHigh"})}))},children:["Low-High",Object(D.jsx)("div",{className:"price"===a.sortOption&&"LowHigh"===a.sortValue?"activeSF":""})]}),Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"price",sortValue:"HighLow"})}))},children:["High-Low",Object(D.jsx)("div",{className:"price"===a.sortOption&&"HighLow"===a.sortValue?"activeSF":""})]})]}),Object(D.jsxs)("div",{className:"option",children:[Object(D.jsx)("h4",{className:"catHeader",children:"Rating"}),Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"rating",sortValue:"LowHigh"})}))},children:["Low-High",Object(D.jsx)("div",{className:"rating"===a.sortOption&&"LowHigh"===a.sortValue?"activeSF":""})]}),Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"rating",sortValue:"HighLow"})}))},children:["High-Low",Object(D.jsx)("div",{className:"rating"===a.sortOption&&"HighLow"===a.sortValue?"activeSF":""})]})]}),Object(D.jsxs)("div",{className:"option",children:[Object(D.jsx)("h4",{className:"catHeader",children:"Popularity"}),Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"popularity",sortValue:"LowHigh"})}))},children:["Low-High",Object(D.jsx)("div",{className:"popularity"===a.sortOption&&"LowHigh"===a.sortValue?"activeSF":""})]}),Object(D.jsxs)("div",{className:"subOption",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{sortOption:"popularity",sortValue:"HighLow"})}))},children:["High-Low",Object(D.jsx)("div",{className:"popularity"===a.sortOption&&"HighLow"===a.sortValue?"activeSF":""})]})]})]})]}),Object(D.jsxs)(J.SortFilter,{onClick:function(){return m("filter")},y:"100px",x:"-243px",open:"filter"===j,children:[Object(D.jsx)("h3",{children:"Filter"}),Object(D.jsxs)("div",{className:"filter optionContainer",children:[Object(D.jsx)("div",{className:"option",children:Object(D.jsxs)("h4",{className:"catHeader first none",onClick:function(){return l((function(n){return Object(F.a)(Object(F.a)({},n),{},{filterOption:"none",filterValue:"none"})}))},children:["None",Object(D.jsx)("div",{className:"none"===a.filterOption?"activeSF":""})]})}),Object(D.jsxs)("div",{className:"option first",children:[Object(D.jsx)("h4",{className:"catHeader",children:"Price"}),x("price",O.price[0],O.price[1]),x("price",O.price[2],O.price[3]),x("price",O.price[4],1/0)]}),Object(D.jsxs)("div",{className:"option",children:[Object(D.jsx)("h4",{className:"catHeader",children:"Rating"}),x("rating",O.rating[0],O.rating[1]),x("rating",O.rating[2],O.rating[3]),x("rating",O.rating[4],1/0)]}),Object(D.jsxs)("div",{className:"option",children:[Object(D.jsx)("h4",{className:"catHeader",children:"Popularity"}),x("popularity",O.popularity[0],O.popularity[1]),x("popularity",O.popularity[2],O.popularity[3]),x("popularity",O.popularity[4],1/0)]})]})]})]}),e?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(J.Category,{children:Object(D.jsx)("h2",{children:c})}),Object(D.jsx)(J.Frame,{children:p?p.map((function(n){return Object(D.jsxs)(J.ContentCard,{children:[Object(D.jsx)(J.Image,{src:n.image}),Object(D.jsx)(J.Name,{children:n.title}),Object(D.jsxs)(J.InfoBox,{children:[Object(D.jsxs)(J.Price,{children:["$",n.price]}),Object(D.jsxs)(J.Rating,{children:[n.rating.rate,Object(D.jsx)(U,{rating:n.rating.rate})]})]}),Object(D.jsx)(J.MoreInfo,{category:t,item:n.id}),Object(D.jsx)(J.AddCart,{})]},n.id+"j")})):null})]}):Object(D.jsx)(J.Category,{children:Object(D.jsx)("h2",{children:"Items not found, try reloading the page"})})]})}function K(n){var e=Object(l.f)().category,t=e.split("-").map((function(n){return n[0].toUpperCase()+n.substring(1)})).join(" "),r=n.data.filter((function(n){var t=n.category.replaceAll(" ","-");return e===t}));return Object(D.jsx)("section",{children:Object(D.jsx)(G,{data:r,category:e,categoryPretty:t,breakpoints:n.breakpoints,sortFilterOption:n.sortFilterOption,setSortFilterOption:n.setSortFilterOption})})}var Q,_,nn,en,tn,rn,cn,on,an,ln,sn=t(28),dn=t(27),jn="100px",un=S.c.div(Q||(Q=Object(N.a)(["\n  position: fixed;\n  top: 15px;\n  right: 15px;\n  z-index: 1;\n\n  div {\n    content: '';\n    width: 30px;\n    height: 3px;\n    background-color: black;\n    margin: 8px 0;\n  }\n\n  div:first-of-type {\n    transform: ",";\n    transition: transform .2s ease-in;\n  }\n\n  div:nth-of-type(2) {\n    transform: ",";\n    transition: transform .2s ease-in;\n  }\n\n  div:last-of-type {\n    display: ","\n  }\n\n  @media (min-width: 600px) {\n    display: none;\n  }\n"])),(function(n){return n.open?" translateY(5px) rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateY(-5px) rotate(-45deg) ":"rotate(0)"}),(function(n){return n.open?"none":"block"})),hn=S.c.div(_||(_=Object(N.a)(["\n\n  transform: ",";\n  transition: transform .2s ease-in;\n  display: flex;\n  flex-direction: column;\n  background: white;\n  justify-content: center;\n  align-items: center;\n\n  position: absolute;\n  top: 0; \n  right: 0;\n  height: 100vh;\n  box-sizing: border-box;\n\n @media (min-width: 970px) {\n   flex-direction: row;\n   height: ",";\n   width: 100vw; \n   position: static;\n   justify-content: space-between;\n   transform: translateX(0);\n\n }\n"])),(function(n){return n.open?"translateX(0)":"translateX(100%)"}),(function(){return jn})),bn=S.c.nav(nn||(nn=Object(N.a)(["\n  height: 100%;\n \n\n  ul:first-child {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    list-style: none;\n    align-items: center;\n    padding-left: 0;\n    margin: 0;\n\n    li {\n      font-size: 1.3rem;\n      width: 100%;\n      text-align: center;\n      box-sizing: border-box;\n    }\n  }\n\n  @media (min-width: 970px) {\n    li {\n      display: block; \n      margin-right: 1.5em;\n    }\n    ul:first-child {\n      flex-direction: row;\n\n    }\n    \n  }\n  \n"]))),pn=S.c.h1(en||(en=Object(N.a)(["\n  font-size: 1.7rem;\n  margin: 1em;\n  display: ",";\n  @media (min-width: 970px) {\n    font-size: 2.5rem;\n    display: ",";\n    margin-left: 1em;\n  }\n"])),(function(n){return n.mobile?"block":"none"}),(function(n){return n.mobile?"none":"inline"})),fn=Object(S.c)(H)(tn||(tn=Object(N.a)(["\n  background-color: ",";\n  margin: 0 2em;\n  font-size: 1.3rem;\n"])),(function(n){return n.theme.color1})),On=Object(S.c)(a.c)(rn||(rn=Object(N.a)(["\n  color: black;\n  text-decoration: none;\n  margin: 0 ;\n  position: relative;\n  display: inline-block;\n\n  &:before {\n    content: '';\n    width: 80%;\n    transform: scaleX(0);\n    transition: transform .2s ease-in;\n    transform-origin: left;\n    height: 5px;\n    background-color: ",";\n    bottom: 0;\n    left: 0;\n    position: absolute;\n  }\n  \n  &.active:before,\n  &:hover&:before {\n    transform: scaleX(100%);\n  }\n"])),(function(n){return n.theme.color2})),mn=S.c.ul(cn||(cn=Object(N.a)(["\n\n  ","\n\n  & li {\n    margin: 0;\n    display: block;\n    transform: translateX(0);\n    transition: transform .3s ease-in;\n    min-width: 100%;\n    border-bottom: 2px solid rgb(230, 230, 230);\n  }\n  \n  \n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  transition: height .3s ease-in;\n  height: 0;\n\n  @media (min-width: 970px) {\n    li {\n      padding: .5em 1em;\n      background: white;\n    }\n    \n  }\n  "])),(function(n){var e=n.children,t=n.open,r=Object(sn.a)(e),i="";return t?null:(r.forEach((function(n,e){var t=1+e;i+="\n        & > li:nth-child(".concat(t,") {\n          transform: translateX(").concat(4*t,"em);\n          transition: transform .3s ease-in;\n        }")})),i)})),xn=S.c.li(on||(on=Object(N.a)(["\n  @media (min-width: 970px) {\n    height: ",";\n \n    div {\n      height: ",";\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n   \n  }\n"])),(function(){return jn}),(function(){return jn})),gn=Object(S.c)(dn.ChevronDown)(an||(an=Object(N.a)(["\n  transform: ",";\n  transition: transform .3s ease-in;\n"])),(function(n){return n.open?"translateY(5px)":"translateY(5px) rotate(180deg)"}));function vn(n){var e=n.children;return Object(D.jsxs)(D.Fragment,{children:[" ",e," "]})}function wn(n){var e=n.setSortFilterOption,t=Object(r.useState)(""),i=Object(o.a)(t,2),c=i[0],a=i[1],l=Object(r.useState)(!1),s=Object(o.a)(l,2),d=s[0],j=s[1];return Object(D.jsxs)(vn,{children:[Object(D.jsx)(vn.Toggle,{open:d,onClick:function(){return j((function(n){return!n}))}}),Object(D.jsx)(vn.Title,{mobile:!0,children:"React E-Commerce"}),Object(D.jsxs)(vn.Frame,{setOpen:j,open:d,children:[Object(D.jsx)(vn.Title,{mobile:!1,children:"React E-Commerce"}),Object(D.jsxs)(vn.Nav,{children:[Object(D.jsx)(vn.Link,{to:"/",onClick:function(){return e({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"})},children:"Home"}),Object(D.jsx)(vn.Link,{to:"/category/electronics",onClick:function(){return e({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"})},children:"Electronics"}),Object(D.jsx)(vn.Link,{to:"/category/jewelery",onClick:function(){return e({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"})},children:"Jewelry"}),Object(D.jsxs)(vn.DropDown,{onClick:function(){var n;a((n="Clothing")===c?"":n)},active:c,title:"Clothing",children:[Object(D.jsxs)(vn.Link,{to:"/category/men's-clothing",onClick:function(){return e({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"})},children:["Men's",Object(D.jsx)("br",{}),"Clothing"]}),Object(D.jsxs)(vn.Link,{to:"/category/women's-clothing",onClick:function(){return e({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"})},children:["Women's",Object(D.jsx)("br",{}),"Clothing"]})]}),Object(D.jsx)(vn.Cart,{to:"/cart",onClick:function(){return e({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"})},children:"Cart"})]})]})]})}vn.Frame=function(n){var e=n.open,t=n.setOpen,i=n.children,c=Object(r.useRef)(null);return function(n,e){Object(r.useEffect)((function(){var t=function(t){var r=null===n||void 0===n?void 0:n.current,i=t.target.classList.contains("toggle");!r||r.contains(t.target)||i||e(t)};return document.addEventListener("mousedown",t),document.addEventListener("touchstart",t),function(){document.removeEventListener("mousedown",t),document.removeEventListener("touchstart",t)}}),[n,e])}(c,(function(){return t(!1)})),Object(D.jsx)(hn,{ref:c,open:e,children:i})},vn.Toggle=function(n){var e=n.open,t=n.onClick;return Object(D.jsxs)(un,{className:"toggle",open:e,onClick:t,children:[Object(D.jsx)("div",{}),Object(D.jsx)("div",{}),Object(D.jsx)("div",{})]})},vn.Title=function(n){var e=n.children,t=n.mobile;return Object(D.jsx)(pn,{mobile:t,children:e})},vn.Nav=function(n){var e=n.children;return Object(D.jsx)(bn,{children:Object(D.jsx)("ul",{children:e})})},vn.Link=function(n){var e=n.to,t=n.children,r=n.onClick;return Object(D.jsx)("li",{children:Object(D.jsx)(On,{to:e,activeClassName:"active",onClick:r,exact:!0,children:t})})},vn.Cart=function(n){var e=n.to,t=n.children;return Object(D.jsx)("li",{children:Object(D.jsx)(a.c,{to:e,children:Object(D.jsx)(fn,{children:t})})})},vn.DropDown=function(n){var e=n.title,t=n.active,i=n.onClick,c=n.children,a=Object(r.useState)(!1),l=Object(o.a)(a,2),s=l[0],d=l[1],j=Object(r.useRef)(),u=function(){var n=j.current.scrollHeight;j.current.style.height=n+"px"};return Object(r.useEffect)((function(){d(t===e)}),[t,e]),Object(r.useEffect)((function(){return s?u():function(){var n=j.current.scrollHeight,e=j.current.style.transition;j.current.style.transition="",requestAnimationFrame((function(){j.current.style.height=n+"px",j.current.style.transition=e,requestAnimationFrame((function(){j.current.style.height="0px"}))}))}(),u()}),[s]),Object(D.jsxs)(xn,{onClick:i,children:[Object(D.jsxs)("div",{children:[e,Object(D.jsx)(gn,{open:s,size:24})]}),Object(D.jsx)(mn,{ref:j,open:s,children:c})]})};var yn,kn,Cn,Fn,Nn,Sn=S.c.div(ln||(ln=Object(N.a)(["\n  position: fixed;\n  top: 0;\n  z-index: -1;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  \n  div {\n    width: 80%\n  }\n"])));function Tn(){return Object(D.jsx)(Sn,{children:Object(D.jsx)("div",{children:Object(D.jsx)(W,{})})})}function Hn(){return Object(D.jsx)("h1",{children:"Home"})}var Ln=S.c.div(yn||(yn=Object(N.a)(["\n  background-color: #F2F2F2;\n  min-width: 100vw;\n  padding: 1.5em;\n"]))),Vn=S.c.h2(kn||(kn=Object(N.a)(["\n"]))),En=S.c.div(Cn||(Cn=Object(N.a)(["\n  display: flex;\n  flex-direction: ",";\n  margin-bottom: 1em;\n"])),(function(n){var e=n.mflex;return e||"row"})),zn=S.c.h3(Fn||(Fn=Object(N.a)(["\n\n"]))),Pn=S.c.p(Nn||(Nn=Object(N.a)(["\n\n"])));function Xn(n){var e=n.children;return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(Ln,{children:e})})}function In(){return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(Xn,{children:[Object(D.jsxs)(Xn.Section,{mflex:"column",children:[Object(D.jsx)(Xn.Title,{children:"React E-Commerce"}),Object(D.jsxs)(Xn.Section,{mflex:"row",children:[Object(D.jsx)(Xn.Text,{children:"\xa91990-2021"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"})]})]}),Object(D.jsxs)(Xn.Section,{mflex:"column",children:[Object(D.jsxs)(Xn.Section,{mflex:"column",children:[Object(D.jsx)(Xn.Subtitle,{children:"Contact"}),Object(D.jsxs)(Xn.Section,{mflex:"row",children:[Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"})]})]}),Object(D.jsxs)(Xn.Section,{mflex:"column",children:[Object(D.jsx)(Xn.Subtitle,{children:"Employment"}),Object(D.jsxs)(Xn.Section,{mflex:"row",children:[Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"})]})]}),Object(D.jsxs)(Xn.Section,{mflex:"column",children:[Object(D.jsx)(Xn.Subtitle,{children:"Help"}),Object(D.jsxs)(Xn.Section,{mflex:"row",children:[Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"})]})]}),Object(D.jsxs)(Xn.Section,{mflex:"column",children:[Object(D.jsx)(Xn.Subtitle,{children:"About"}),Object(D.jsxs)(Xn.Section,{mflex:"row",children:[Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"}),Object(D.jsx)(Xn.Text,{children:"Filler Test"})]})]})]})]})})}Xn.Title=function(n){var e=n.children;return Object(D.jsx)(Vn,{children:e})},Xn.Section=function(n){var e=n.children,t=n.mflex;return Object(D.jsx)(En,{mflex:t,children:e})},Xn.Subtitle=function(n){var e=n.children;return Object(D.jsx)(zn,{children:e})},Xn.Text=function(n){var e=n.children;return Object(D.jsx)(Pn,{children:e})};var Rn,An=function(){var n=Object(r.useState)([]),e=Object(o.a)(n,2),t=e[0],i=e[1],c=Object(r.useState)({sortOption:"none",sortValue:"none",filterOption:"none",filterValue:"none"}),s=Object(o.a)(c,2),d=s[0],j=s[1];console.log(d),Object(r.useEffect)((function(){fetch("https://fakestoreapi.com/products").then((function(n){return n.json()})).then((function(n){i(n)})).catch((function(n){i(null)}))}),[]);var u=function(n){var e=Object(r.useState)({jewelery:{price:[],popularity:[],rating:[0,2.9,3,3.9,4]},electronics:{price:[],popularity:[],rating:[0,2.9,3,3.9,4]},"men's clothing":{price:[],popularity:[],rating:[0,2.9,3,3.9,4]},"women's clothing":{price:[],popularity:[],rating:[0,2.9,3,3.9,4]}}),t=Object(o.a)(e,2),i=t[0],c=t[1];return Object(r.useEffect)((function(){var e={jewelery:{count:0,price:0,popularity:0,rating:0},electronics:{count:0,price:0,popularity:0,rating:0},"men's clothing":{count:0,price:0,popularity:0,rating:0},"women's clothing":{count:0,price:0,popularity:0,rating:0}};n.forEach((function(n){e[n.category].count+=1,e[n.category].price+=n.price,e[n.category].popularity+=n.rating.count}));var t={jewelery:{price:[],popularity:[],rating:[0,2.9,3,3.9,4]},electronics:{price:[],popularity:[],rating:[0,2.9,3,3.9,4]},"men's clothing":{price:[],popularity:[],rating:[0,2.9,3,3.9,4]},"women's clothing":{price:[],popularity:[],rating:[0,2.9,3,3.9,4]}};for(var r in e){var i=e[r].count,o=Math.round(e[r].price/i/3);t[r].price=[0,o-1,o,2*o-1,2*o];var a=Math.round(e[r].popularity/i/3);t[r].popularity=[0,a-1,a,2*a-1,2*a]}c(t)}),[n]),i}(t);return Object(D.jsxs)(a.a,{basename:"/React-E-Commerce",children:[Object(D.jsx)(Tn,{}),Object(D.jsx)(wn,{setSortFilterOption:j}),Object(D.jsxs)(l.c,{children:[Object(D.jsx)(l.a,{path:"/",exact:!0,children:Object(D.jsx)(Hn,{})}),Object(D.jsx)(l.a,{path:"/category/:category",exact:!0,children:Object(D.jsx)(K,{data:t,breakpoints:u,sortFilterOption:d,setSortFilterOption:j})}),Object(D.jsx)(l.a,{path:"/category/:category/:item",children:Object(D.jsx)("h2",{children:"Item page"})}),Object(D.jsx)(l.a,{path:"/cart",children:"Cart"})]}),Object(D.jsx)(In,{})]})},Mn=Object(S.b)(Rn||(Rn=Object(N.a)(["\n  body {\n    font-family: 'Montserrat', sans-serif;\n    background-color: #e1f7f0;\n    max-width: 100vw;\n    max-height: 100vh;\n    overflow-X: hidden;\n  }\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n"])));function Yn(n){var e=n.children;return Object(D.jsx)(S.a,{theme:{color1:"#7400B8",color2:"#4EA8DE",color3:"#80FFDB"},children:e})}c.a.render(Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)(Yn,{children:[Object(D.jsx)(Mn,{}),Object(D.jsx)(An,{})]})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ac04b547.chunk.js.map