(this["webpackJsonpto-do-list-react"]=this["webpackJsonpto-do-list-react"]||[]).push([[0],{24:function(t,e,n){},25:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var r,a=n(0),c=n.n(a),o=n(5),i=n.n(o),s=n(2),l=(n(24),n(12)),u=n(13),d=n(16),f=n(15),b=["title","titleId"];function j(){return j=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},j.apply(this,arguments)}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function h(t,e){var n=t.title,c=t.titleId,o=p(t,b);return a.createElement("svg",j({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref:e,"aria-labelledby":c},o),n?a.createElement("title",{id:c},n):null,r||(r=a.createElement("path",{fill:"red",d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"})))}var O=a.forwardRef(h),g=(n.p,{ADD_TASK:"ADD_TASK",DELETE_TASK:"DELETE_TASK"}),v=(n(25),n(1)),k=Object(s.b)(null,(function(t){return{deleteTask:function(e){return t(function(t){return{type:g.DELETE_TASK,payload:t}}(e))}}}))((function(t){var e=t.text,n=t.deleteTask,r=t.taskId;return Object(v.jsxs)("div",{className:"task",children:[Object(v.jsx)("input",{type:"checkbox",onChange:function(t){t.target.parentNode.children[1].classList.toggle("checked")}}),Object(v.jsx)("span",{className:"task-text",children:e}),Object(v.jsx)("button",{onClick:function(){var t={id:r,text:e};localStorage.removeItem(t.id),n(t)},children:Object(v.jsx)(O,{})})]})})),x=(n(27),Object(s.b)((function(t){return{tasks:t.tasks}}))((function(t){var e=t.tasks;return Object(v.jsx)("div",{className:"task-list",children:e.length?e.map((function(t){return Object(v.jsx)(k,{text:t.text,taskId:t.id},t.id)})):"Your To Do List is empty. Make a task with form below!"})}))),y=(n(28),n(29),Object(s.b)((function(t){return{tasks:t.tasks}}),(function(t){return{addTask:function(e){return t(function(t){return{type:g.ADD_TASK,payload:t}}(e))}}}))((function(t){var e=t.addTask;return Object(v.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target.firstChild.value;if(t.target.firstChild.value="",n){for(var r=localStorage.length,a=0;a<=localStorage.length;a++)if(!localStorage[a]){r=a;break}var c={id:r,text:n};console.log(localStorage),localStorage.setItem(c.id,c.text),e(c)}},children:[Object(v.jsx)("input",{type:"text",name:"task",placeholder:"New task",autoFocus:!0,autoComplete:"off"}),Object(v.jsx)("button",{type:"submit",children:"Add"})]})}))),m=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("h1",{children:"To Do List"}),Object(v.jsx)(y,{}),Object(v.jsx)(x,{})]})}}]),n}(c.a.Component),S=m,T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,33)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),r(t),a(t),c(t),o(t)}))},E=n(9),w=n(14),D=n.n(w),A=n(3),I=n(10),C={tasks:Object(I.a)(function(){var t=[];for(var e in localStorage)if("string"==typeof localStorage[e]){var n={id:e,text:localStorage.getItem(e)};t.push(n)}return t}())},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g.ADD_TASK:return Object(A.a)(Object(A.a)({},t),{},{tasks:[].concat(Object(I.a)(t.tasks),[e.payload])});case g.DELETE_TASK:return Object(A.a)(Object(A.a)({},t),{},{tasks:t.tasks.filter((function(t){return t.id!==e.payload.id}))});default:return t}},K=[D.a],_=Object(E.b)(L,E.a.apply(void 0,K));i.a.render(Object(v.jsx)(s.a,{store:_,children:Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(S,{})})}),document.getElementById("root")),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.ac92e3bf.chunk.js.map