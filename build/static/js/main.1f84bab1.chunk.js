(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{17:function(e,t,n){e.exports=n(40)},40:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),u=n(15),c=n.n(u),o=n(16),l=n(3),i=function(e){var t=e.handleFilterChange,n=e.filterText;return a.a.createElement("div",null,"filter shown with: ",a.a.createElement("input",{onChange:t,value:n}))},s=function(e){var t=e.addName,n=e.handleNameChange,r=e.newName,u=e.handleNumberChange,c=e.newNumber;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,"name: ",a.a.createElement("input",{onChange:n,value:r})),a.a.createElement("div",null,"number: ",a.a.createElement("input",{onChange:u,value:c})),a.a.createElement("div",null,a.a.createElement("button",{type:"submit"},"add")))},f=function(e){var t=e.persons,n=e.filterText,r=e.handleDeleteOf;return t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})).map((function(e){return a.a.createElement("p",{key:e.name},e.name,": ",e.number,a.a.createElement("button",{onClick:function(){return r(e.id)}},"delete"))}))},m=function(e){var t=e.message,n=e.colour;if(null===t)return null;console.log(n);var r={color:n,background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:15};return a.a.createElement("div",{style:r},t)},d=n(2),p=n.n(d),b=n(4),h=n(5),v=n.n(h),g="/api/people",w={getAll:function(){var e=Object(b.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(g);case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),create:function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(g,t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),update:function(){var e=Object(b.a)(p.a.mark((function e(t,n){var r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(g,"/").concat(t),n);case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),remove:function(){var e=Object(b.a)(p.a.mark((function e(t){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.delete("".concat(g,"/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var j=function(){var e=Object(r.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],c=Object(r.useState)(""),d=Object(l.a)(c,2),p=d[0],b=d[1],h=Object(r.useState)(""),v=Object(l.a)(h,2),g=v[0],j=v[1],E=Object(r.useState)(""),y=Object(l.a)(E,2),C=y[0],x=y[1],k=Object(r.useState)(null),N=Object(l.a)(k,2),S=N[0],P=N[1],D=Object(r.useState)(null),T=Object(l.a)(D,2),A=T[0],L=T[1];Object(r.useEffect)((function(){w.getAll().then((function(e){return u(e)}))}),[]);var B=function(e){if(window.confirm("".concat(p," is already added to phonebook, replace the old number with a new one?"))){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(n,!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{number:g});w.update(e.id,t).then((function(t){console.log(t),u(n.map((function(n){return n.id!==e.id?n:t})))})).catch((function(e){console.log(e),L("Information of ".concat(p," has already been removed from server")),setTimeout((function(){L(null)}),3e3)}))}b(""),j("")},F=function(){var e={name:p,number:g};w.create(e).then((function(e){u(n.concat(e)),b(""),j(""),P("Added ".concat(p)),setTimeout((function(){P(null)}),3e3)}))};return a.a.createElement("div",null,a.a.createElement("h2",null,"Phonebook"),a.a.createElement(m,{message:S,colour:"green"}),a.a.createElement(m,{message:A,colour:"red"}),a.a.createElement(i,{handleFilterChange:function(e){return x(e.target.value)},filterText:C}),a.a.createElement("h2",null,"Add a new"),a.a.createElement(s,{addName:function(e){e.preventDefault();var t=n.find((function(e){return e.name.toLowerCase()===p.toLowerCase()}));t?B(t):F()},handleNameChange:function(e){return b(e.target.value)},newName:p,handleNumberChange:function(e){return j(e.target.value)},newNumber:g}),a.a.createElement("h2",null,"Numbers"),a.a.createElement(f,{persons:n,filterText:C,handleDeleteOf:function(e){console.log("delete person with id ".concat(e));var t=n.find((function(t){return t.id===e}));window.confirm("Do you wan't to delete ".concat(t.name))&&w.remove(e).then((function(t){u(n.filter((function(t){return t.id!==e})))}))}}))};c.a.render(a.a.createElement(j,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1f84bab1.chunk.js.map