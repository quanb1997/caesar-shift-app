(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),u=(a(9),function(e){var t=e.title;return r.a.createElement("header",null,r.a.createElement("h3",null,t))}),o=function(e,t){var a=e.title;t.subtitle;return r.a.createElement("header",null,r.a.createElement("h1",null,a),r.a.createElement(u,{title:"By Quan"}))};o.defaultProps={title:"Caesar Shift Calculator"};var i=o,m=a(1);function s(e,t){for(var a="",n=0,r=0;r<e.length;r++)e[r].match(/^[a-z0-9]+$/i)?(n=e[r].charCodeAt()+t,e[r].charCodeAt()<91&&n>90&&(t>0?n-=26:n+=26),e[r].charCodeAt()<123&&n>122&&(t>0?n-=26:n+=26),a+=String.fromCharCode(n)):a+=e[r];return a}var f=function(e){var t=e.onInput,a=Object(n.useState)(""),l=Object(m.a)(a,2),c=l[0],u=l[1],o=Object(n.useState)(""),i=Object(m.a)(o,2),f=i[0],b=i[1],h=Object(n.useState)(""),d=Object(m.a)(h,2),p=d[0],E=d[1];return r.a.createElement("form",{className:"encrypter-form",onSubmit:function(e){if(e.preventDefault(),c||p){if(f||alert("Please select a number to shift by"),isNaN(f))return alert("shift must be a number"),!1;c?(E(s(c,Number(f))),u("")):p&&(u(s(p,-1*Number(f))),E("")),t({red_text:c,shift:f,black_text:p})}else alert("Please add red text or black text")}},r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Red Text (Text to shift)"),r.a.createElement("input",{type:"text",placeholder:"Enter text to shift",value:c,onChange:function(e){return u(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Number to shift by"),r.a.createElement("input",{type:"text",placeholder:"Enter number to shift by",value:f,onChange:function(e){return b(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",null,"Black Text (Shifted Text)"),r.a.createElement("input",{type:"text",placeholder:"Output will appear here",value:p,onChange:function(e){return E(e.target.value)}})),r.a.createElement("div",{className:"form-control"},r.a.createElement("input",{type:"submit",value:"Shift",className:"btn btn-block"})))};var b=function(e,t){console.log(e)},h=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(i,{subtitle:"Quan"}),r.a.createElement(f,{onInput:b}))},d=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,13)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),l(e),c(e)})};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),d()},4:function(e,t,a){e.exports=a(12)},9:function(e,t,a){}},[[4,3,2]]]);
//# sourceMappingURL=main.48964142.chunk.js.map