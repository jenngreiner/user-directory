(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{41:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s(12),a=s.n(n),c=s(13),o=s(14),i=s(17),l=s(16),h=s(0);var u=function(e){var t=e.search,s=(e.handleFormSubmit,e.handleInputChange);return Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("form",{className:"search",children:Object(h.jsx)("input",{value:t,onChange:s,name:"term",list:"term",type:"text",className:"form-control",placeholder:"Search",id:"term"})})})},j=s(15),d=s.n(j),m=function(){return d.a.get("https://randomuser.me/api/?results=15&nat=us")};var b=function(e){return Object(h.jsx)("table",{className:"list-group",children:Object(h.jsxs)("tbody",{children:[Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{scope:"col",children:"Picture"}),Object(h.jsx)("th",{scope:"col",onClick:e.sortByName,children:"Name"}),Object(h.jsx)("th",{scope:"col",onClick:e.sortByPhone,children:"Phone"}),Object(h.jsx)("th",{scope:"col",onClick:e.sortByEmail,children:"Email"}),Object(h.jsx)("th",{scope:"col",onClick:e.sortByDOB,children:"DOB"})]}),e.results&&e.results.map((function(t,s){return t.name.first.toLowerCase().includes(e.search)||t.name.last.toLowerCase().includes(e.search)?Object(h.jsxs)("tr",{className:"table-row",children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{alt:t.name.first,className:"img-fluid",src:t.picture.thumbnail})}),Object(h.jsxs)("td",{children:[t.name.first," ",t.name.last]}),Object(h.jsx)("td",{children:t.phone}),Object(h.jsx)("td",{children:t.email}),Object(h.jsx)("td",{children:t.dob.date})]},s):null}))]})})};var p=function(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"User Directory"})})},O=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){var e;Object(c.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={search:"",results:[],sort:"DESC"},e.searchUsers=function(t){m(t).then((function(t){e.setState({results:t.data.results})}))},e.handleInputChange=function(t){if("search"===t.target.name){var s=t.target.value.toLowerCase();e.setState({search:s})}},e.handleFormSubmit=function(t){t.preventDefault(),e.searchUsers(e.state.search)},e.sortByName=function(){var t=e.state.employees.sort((function(e,t){return e.name.first>t.name.first?1:-1}));"DESC"===e.state.sort?(t.reverse(),e.setState({sort:"ASC"})):e.setState({sort:"DESC"}),e.setState({employees:t})},e.sortByPhone=function(){var t=e.state.results.sort((function(e,t){return parseInt(e.phone.trim().replace(/-()/),"")-parseInt(t.phone.trim().replace(/-()/),"")?1:-1}));e.setState({employees:t})},e}return Object(o.a)(s,[{key:"componentDidMount",value:function(){this.searchUsers("")}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(p,{}),Object(h.jsx)(u,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(h.jsx)(b,{search:this.state.search,results:this.state.results,sortByName:this.sortByName,sortByEmail:this.sortByEmail,sortByPhone:this.sortByPhone,sortByDOB:this.sortByDOB})]})}}]),s}(r.Component);var f=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(O,{})})};a.a.render(Object(h.jsx)(f,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.386aa853.chunk.js.map