(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(6),c=a.n(r),u=(a(12),a(4)),o=a(0),i=function(e,t){var a=e.title;t.subtitle;return l.a.createElement("header",null,l.a.createElement("h1",null,a))};i.defaultProps={title:"Caesar Shift Calculator"};var m=i,s=a(3);function f(e,t){for(var a="",n=0,l=0;l<e.length;l++)e[l].match(/^[a-z0-9]+$/i)?(n=e[l].charCodeAt()+t,t>0?e[l].charCodeAt()<91&&n>90?n-=26:e[l].charCodeAt()<123&&n>122&&(n-=26):t<0&&(e[l].charCodeAt()>64&&n<65?n+=26:e[l].charCodeAt()>96&&n<97&&(n+=26)),a+=String.fromCharCode(n)):a+=e[l];return a}var h=function(e){var t=e.onInput,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],u=r[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),m=i[0],h=i[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),p=b[0],d=b[1];return l.a.createElement("form",{className:"encrypter-form",onSubmit:function(e){if(e.preventDefault(),c||p)if(m)if(isNaN(m))alert("shift must be a number");else{var a=Number(m);(a>26||a<1)&&(a%=26),c?(d(f(c,a)),u("")):p&&(u(f(p,-1*a)),d("")),t({red_text:c,final_shift:a,black_text:p})}else alert("Please select a number to shift by");else alert("Please add red text or black text")}},l.a.createElement("div",{className:"form-control"},l.a.createElement("label",null,"Red Text (Text to shift)"),l.a.createElement("input",{type:"text",placeholder:"Enter text to shift",value:c,onChange:function(e){return u(e.target.value)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",null,"Number to shift by"),l.a.createElement("input",{type:"text",placeholder:"Enter number to shift by",value:m,onChange:function(e){return h(e.target.value)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",null,"Black Text (Shifted Text)"),l.a.createElement("input",{type:"text",placeholder:"Output will appear here",value:p,onChange:function(e){return d(e.target.value)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{type:"submit",value:"Shift",className:"btn btn-block"})))},E=function(){return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \xa9 2022 "),l.a.createElement(u.b,{to:"/about"},"About"))},b=function(){return l.a.createElement("div",null,l.a.createElement("h4",null,"Version 1.0.0"),l.a.createElement("h4",null,"Built by Quan Bui"),l.a.createElement("h5",null,l.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Caesar_cipher"}," More info on Caesar Cipher")),l.a.createElement("h5",null,l.a.createElement("a",{href:"https://github.com/quanb1997"},"My Github")),l.a.createElement(u.b,{to:"/"},"Go Back"))};var p=function(e){console.log(e)},d=function(){return l.a.createElement(u.a,null,l.a.createElement("div",{className:"container"},l.a.createElement(o.c,null,l.a.createElement(o.a,{path:"/",element:l.a.createElement(l.a.Fragment,null,l.a.createElement(m,{title:"Caesar Shift Calculator"}),l.a.createElement(h,{onInput:p}))}),l.a.createElement(o.a,{path:"/about",element:l.a.createElement(b,null)})),l.a.createElement(E,null)))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),v()},7:function(e,t,a){e.exports=a(15)}},[[7,3,2]]]);
//# sourceMappingURL=main.42495c83.chunk.js.map