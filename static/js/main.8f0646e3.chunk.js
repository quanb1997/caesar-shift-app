(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(3),c=a.n(r),o=(a(9),function(e){var t=e.title;return l.a.createElement("header",null,l.a.createElement("h3",null,t))}),u=function(e,t){var a=e.title;t.subtitle;return l.a.createElement("header",null,l.a.createElement("h1",null,a),l.a.createElement(o,{title:"By Quan"}))};u.defaultProps={title:"Caesar Shift Calculator"};var i=u,m=a(1);function s(e,t){for(var a="",n=0,l=0;l<e.length;l++)e[l].match(/^[a-z0-9]+$/i)?(console.log(n),n=e[l].charCodeAt()+t,console.log(n),t>0?e[l].charCodeAt()<91&&n>90?n-=26:e[l].charCodeAt()<123&&n>122&&(n-=26):e[l].charCodeAt()<64&&n>65?(console.log(n),n+=26,console.log(n)):e[l].charCodeAt()<96&&n>97&&(n+=26),a+=String.fromCharCode(n)):a+=e[l];return a}var f=function(e){var t=e.onInput,a=Object(n.useState)(""),r=Object(m.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(""),i=Object(m.a)(u,2),f=i[0],b=i[1],h=Object(n.useState)(""),d=Object(m.a)(h,2),p=d[0],E=d[1];return l.a.createElement("form",{className:"encrypter-form",onSubmit:function(e){if(e.preventDefault(),c||p){if(f||alert("Please select a number to shift by"),isNaN(f))return alert("shift must be a number"),!1;(Number(f)>26||Number(f)<1)&&alert("Please select a number between 1 and 26 to shift by"),c?(E(s(c,Number(f))),o("")):p&&(o(s(p,-1*Number(f))),E("")),t({red_text:c,shift:f,black_text:p})}else alert("Please add red text or black text")}},l.a.createElement("div",{className:"form-control"},l.a.createElement("label",null,"Red Text (Text to shift)"),l.a.createElement("input",{type:"text",placeholder:"Enter text to shift",value:c,onChange:function(e){return o(e.target.value)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",null,"Number to shift by"),l.a.createElement("input",{type:"text",placeholder:"Enter number to shift by",value:f,onChange:function(e){return b(e.target.value)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("label",null,"Black Text (Shifted Text)"),l.a.createElement("input",{type:"text",placeholder:"Output will appear here",value:p,onChange:function(e){return E(e.target.value)}})),l.a.createElement("div",{className:"form-control"},l.a.createElement("input",{type:"submit",value:"Shift",className:"btn btn-block"})))};var b=function(e,t){console.log(e)},h=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(i,{subtitle:"Quan"}),l.a.createElement(f,{onInput:b}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,13)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),l(e),r(e),c(e)})};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(h,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(12)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.8f0646e3.chunk.js.map