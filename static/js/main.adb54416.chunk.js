(this["webpackJsonpreact-todolist"]=this["webpackJsonpreact-todolist"]||[]).push([[0],{22:function(n,e,t){},25:function(n,e,t){"use strict";t.r(e);var r=t(1),o=t(0),i=t.n(o),a=t(12),c=t.n(a),u=(t(22),t(10)),d=t(16),l=t(7),s=t(2),b=t(3);function x(){var n=Object(s.a)(["\n  color:#8C495E;\n  background:rgba(255,255,255,0.5);\n  margin-left:20px;\n  border:none;\n  box-shadow:2px 2px ;\n  cursor:pointer;\n  outline: none;\n  :active {\n    color:black;\n    transform: translateY(2px);\n    box-shadow:1px 1px ;\n  }\n"]);return x=function(){return n},n}function p(){var n=Object(s.a)(["\n  width:300px;\n  padding:5px;\n  border:0px;\n  outline:none;\n"]);return p=function(){return n},n}function j(){var n=Object(s.a)(["\n  margin-bottom:30px;\n  \n"]);return j=function(){return n},n}var f=b.a.div(j()),h=b.a.input(p()),v=b.a.button(x());var g=function(n){var e=n.value,t=n.handleButtonClick,o=n.handleInputChange;return Object(r.jsxs)(f,{children:[Object(r.jsx)(h,{placeholder:"Ha! I can help you memorize something",value:e,onChange:o}),Object(r.jsx)(v,{onClick:t,children:" Add! "})]})};function O(){var n=Object(s.a)(["\n  color:#8C495E;\n  background:rgba(255,255,255,0.5);\n  margin-left:20px;\n  cursor:pointer;\n  outline: none;\n  box-shadow:2px 2px ;\n  border:none;\n  :active {\n    transform: translateY(2px);\n    box-shadow:1px 1px ;\n  }\n"]);return O=function(){return n},n}function m(){var n=Object(s.a)(["\n  color:#8C495E;\n  ","\n"]);return m=function(){return n},n}function C(){var n=Object(s.a)(["\n  color:#8C495E;\n  border:1px solid;\n  font-size:10px;\n  border-radius:3px;\n  cursor: pointer;\n  padding:3px 2px;\n"]);return C=function(){return n},n}function D(){var n=Object(s.a)(["\n  display:flex;\n  justify-content:space-between;\n  padding:5px;\n"]);return D=function(){return n},n}function k(){var n=Object(s.a)(["\n  text-align:center;\n  margin:10px;\n"]);return k=function(){return n},n}var w=b.a.div(k()),F=b.a.div(D()),T=b.a.div(C()),E=b.a.div(m(),(function(n){return n.isDone&&"\n    text-decoration:line-through;\n  "})),I=b.a.button(O());var Y=function(n){var e=n.todo,t=n.handleDeleteTodo,o=n.handleToggleDone;return Object(r.jsx)(w,{children:Object(r.jsxs)(F,{children:[Object(r.jsx)(T,{onClick:function(){o(e.id)},children:e.isDone?"Done":"Todo"}),Object(r.jsx)(E,{isDone:e.isDone,children:e.content}),Object(r.jsx)("div",{children:Object(r.jsx)(I,{onClick:function(){t(e.id)},children:"Delete"})})]})})};function y(){var n=Object(s.a)(["\n  border:none;\n  outline:none;\n  box-shadow:2px 2px;\n  background:rgba(255,255,255,0.5);\n  color:#9c6375;\n  margin:15px 15px 30px 15px;\n\n  cursor:pointer;\n  :active {\n    box-shadow:1px 1px;\n  }\n  \n  \n"]);return y=function(){return n},n}function A(){var n=Object(s.a)(["\n  margin:30px;\n"]);return A=function(){return n},n}function S(){var n=Object(s.a)(["\n  margin:0px auto;\n"]);return S=function(){return n},n}var z=b.a.div(S()),B=b.a.div(A()),L=b.a.button(y());var N=function(n){var e=n.handleFilterAll,t=n.handleFilterNotYet,o=n.handleFilterDone,i=n.handleCleanUp;return Object(r.jsx)(z,{children:Object(r.jsxs)(B,{children:[Object(r.jsx)(L,{onClick:e,children:"All"}),Object(r.jsx)(L,{onClick:t,children:"To do"}),Object(r.jsx)(L,{onClick:o,children:"Done"}),Object(r.jsx)(L,{onClick:i,children:"Clear"})]})})},J=t.p+"static/media/background.38760fb4.jpg";function P(){var n=Object(s.a)(['\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: -999;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-image: url("','");\n\n']);return P=function(){return n},n}function U(){var n=Object(s.a)(["\n  color:#8C495E;\n  padding:25px;\n  font-size:30px;\n  font-family:monospace;\n"]);return U=function(){return n},n}function H(){var n=Object(s.a)(["\n  margin:150px auto;\n  background: rgba(255,255,255,0.5);\n  width:450px;\n  text-align:center;\n  box-shadow:6px 8px 6px rgba(0, 0, 0, 0.4);\n  border-radius:2px;\n"]);return H=function(){return n},n}var M=b.a.div(H()),W=b.a.div(U()),q=b.a.div(P(),J),G=3;var K=function(){var n=i.a.useState(""),e=Object(l.a)(n,2),t=e[0],o=e[1],a=i.a.useState([{id:2,content:"Climb the tree",isDone:!0},{id:1,content:"Wandering around the street",isDone:!1}]),c=Object(l.a)(a,2),s=c[0],b=c[1],x=i.a.useState("all"),p=Object(l.a)(x,2),j=p[0],f=p[1],h=function(n){b(s.filter((function(e){return e.id!==n})))},v=function(n){b(s.map((function(e){return e.id!==n?e:Object(u.a)(Object(u.a)({},e),{},{isDone:!e.isDone})})))};return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(M,{children:[Object(r.jsx)(q,{}),Object(r.jsx)(W,{children:"I am TodoList"}),Object(r.jsx)(g,{handleButtonClick:function(){""!==t&&(b([{id:G,content:t,isDone:!1}].concat(Object(d.a)(s))),G++),o("")},handleInputChange:function(n){var e=n.target.value;o(e)},value:t}),s.filter((function(n){return"all"===j||("completed"===j?n.isDone:"notYet"===j?!n.isDone:void 0)})).map((function(n){return Object(r.jsx)(Y,{todo:n,handleDeleteTodo:h,handleToggleDone:v},n.id)})),Object(r.jsx)(N,{handleFilterAll:function(){f("all")},handleFilterNotYet:function(){f("notYet")},handleFilterDone:function(){f("completed")},handleCleanUp:function(){b([])}})]})})},Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),o(n),i(n),a(n)}))};c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(K,{})}),document.getElementById("root")),Q()}},[[25,1,2]]]);
//# sourceMappingURL=main.adb54416.chunk.js.map