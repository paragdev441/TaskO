(this["webpackJsonptask-reminder"]=this["webpackJsonptask-reminder"]||[]).push([[8],{256:function(e,t,a){e.exports={list_block:"TaskList_list_block__xKQOf",list_item:"TaskList_list_item__1WmbY",list_index:"TaskList_list_index__xm7Y0",form_header:"TaskList_form_header__hmgPa"}},295:function(e,t,a){"use strict";a.r(t);var s=a(43),r=a(56),i=a(0),c=a(256),n=a.n(c),d=a(299),o=a(46),l=a(128),b=a(1),h=function(e){var t=e.submittedDate,a=e.totalHours,s=Object(i.useState)(Math.ceil((new Date-t)/6e4/(60*a)*100)),c=Object(r.a)(s,2),n=c[0],d=c[1],o=Object(i.useState)(1),l=Object(r.a)(o,2);l[0],l[1];return Object(i.useEffect)((function(){setTimeout(d(Math.ceil((new Date-t)/6e4/(60*a)*100)),1e4),console.log("ggggg")}),[n]),Object(b.jsxs)("div",{className:"progressbar primary-border-color","data-progress-bar":"true","data-show-progress-string":"true","data-progress-text":"Avancement",children:[Object(b.jsx)("div",{className:n>=100?"progressbar-visual error":"progressbar-visual","data-progress-bar-visual":"true",style:{width:n>=100?"100%":"".concat(n,"%"),transition:"width 0.5s ease-out 0s"}}),Object(b.jsxs)("div",{className:"progressbar-text","data-progress-bar-text":"true",children:[n>=100?null:Object(b.jsx)("span",{children:"Time Elapse:- "})," ",Object(b.jsx)("span",{children:n>=100?"Time Over":"".concat(n,"%")})]})]})},j=function(e){var t=e.tasks,a=e.handleTask;return console.log(t,"tasks"),t.map((function(e,s){return Object(b.jsxs)("div",{className:n.a.list_item,children:[Object(b.jsx)("span",{className:n.a.list_index,children:s+1}),Object(b.jsx)(d.a,{onChange:function(e){return a(e,s)},name:"checkedB",color:"primary"}),Object(b.jsxs)("div",{className:n.a.list_block,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h4",{children:"Description"})}),Object(b.jsx)("div",{style:{paddingBottom:"10px"},children:e.description}),Object(b.jsx)("div",{children:Object(b.jsx)("h4",{children:"Time Elapsed Percentage:"})}),Object(b.jsx)("div",{style:{paddingBottom:"10px"},children:Object(b.jsx)(h,{submittedDate:new Date(e.submittedDate),totalHours:e.totalHours})})]})]},"".concat(t).concat(s))}))};t.default=function(){var e=new l.a,t=Object(i.useState)(e.get("tasks")?e.get("tasks"):void 0),a=Object(r.a)(t,2),c=a[0],d=a[1],h=Object(i.useState)([]),u=Object(r.a)(h,2),g=u[0],x=u[1];console.log(g,"selectedTasks");return console.log(c,"taskssssss"),Object(b.jsx)("div",{className:n.a.container,children:Object(b.jsxs)("div",{className:n.a.items,children:[Object(b.jsxs)("div",{className:n.a.items_head,children:[Object(b.jsx)("h1",{className:n.a.form_header,children:"View Task"}),c?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.c,{disabled:0===g.length,onClick:function(){var t=c.filter((function(e,t){return!g.includes(t)}));e.remove("tasks",c),e.set("tasks",t),d(t)},variant:"raised",children:"Remove Completed Tasks"}),Object(b.jsx)("hr",{})]}):null]}),c?Object(b.jsx)("div",{className:"list_block",children:c?Object(b.jsx)(j,{tasks:c,handleTask:function(e,t){e.target.checked?x([].concat(Object(s.a)(g),[t])):(console.log("to delete",t),x(g.filter((function(e,a){return t!==e}))))}}):null}):Object(b.jsx)("div",{style:{paddingBottom:"50px"},children:"No tasks are available"})]})})}},46:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"d",(function(){return n})),a.d(t,"a",(function(){return d})),a.d(t,"c",(function(){return o}));a(0);var s=a(301),r=a(289),i=a(291),c=Object(s.a)(r.a)({background:"linear-gradient(45deg, #2de2e2 30%, #0f88f1 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",fontWeight:"600"}),n=Object(s.a)(r.a)({background:"linear-gradient(45deg, #78ec16 30%, #23a014 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px",fontWeight:"600"}),d=(Object(s.a)(r.a)({background:"linear-gradient(45deg, #0ab2f3 30%, #0f88f1 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}),Object(s.a)(i.a)({background:"linear-gradient(45deg, #0ab2f3 30%, #0f88f1 90%)",border:0,borderRadius:"38px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"26px",fontWeight:"600"})),o=Object(s.a)(i.a)({background:"linear-gradient(45deg, #ff7507 30%, #dc0929 90%)",border:0,borderRadius:"38px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",fontWeight:"600",color:"white",height:48,padding:"26px"})}}]);