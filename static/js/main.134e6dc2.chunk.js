(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,n){e.exports=n(36)},25:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),o=n.n(c),l=(n(25),n(12)),s=n(6),i=n(7),u=n(10),m=n(8),d=n(9),h=(n(27),function(e){var t=e.filterContacts;return r.a.createElement("div",{className:"search_box"},r.a.createElement("h3",{className:"gradient_text"},"Search"),r.a.createElement("div",{className:"dropdown"},r.a.createElement("input",{type:"text",className:"search_field",onChange:t})),r.a.createElement("br",null))}),f=(n(29),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).handleEvent=function(e){n.props.sortIt(e.target.value)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"sorting_menu"},r.a.createElement("select",{onChange:this.handleEvent,className:"form-control",id:"exampleFormControlSelect1"},r.a.createElement("option",{name:"notsorted",value:"notsorted"},"Please select"),r.a.createElement("option",{name:"Ascending",value:"Ascending"},"Ascending"),r.a.createElement("option",{name:"Descending",value:"Descending"},"Descending")))}}]),t}(a.Component)),p=(n(31),function(e){var t=e.contacts,n=e.search,a=(e.sortIt,e.sortBy,e.direction),c=e.deleteContact,o=(e.editContact,function(e){return r.a.createElement("ul",{className:"gradient_text",key:e.name},r.a.createElement("li",null,"Name: ",e.name),r.a.createElement("li",null,"Phone: ",e.phone_number),r.a.createElement("li",null,"Address: ",e.address),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return c(e.name)}},"delete"),r.a.createElement("hr",null))});if("notsorted"===a){var l=t.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.address.toLowerCase().includes(n.toLowerCase())||e.phone_number.includes(n)});return r.a.createElement("div",null,l.map(o))}if("Ascending"===a){var s=t.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}).filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.address.toLowerCase().includes(n.toLowerCase())||e.phone_number.includes(n)});return r.a.createElement("div",null,s.map(o))}if("Descending"===a){var i=t.sort(function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}).filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.address.toLowerCase().includes(n.toLowerCase())||e.phone_number.includes(n)});return r.a.createElement("div",null,i.map(o))}}),b=n(11),C=n(5),E=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState(Object(b.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.addContact(e.state),t.target.reset()},e.handleEdit=function(t){if(null!==e.props.selectedContact){var n=e.props.selectedContact[0].name;e.setState({name:n})}else console.log("null")},e.state={name:null,phone_number:null,address:null},e.handleEdit=e.handleEdit.bind(Object(C.a)(Object(C.a)(e))),e}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"addNewContactForm"},r.a.createElement("h3",null,"ADD NEW CONTACT"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"example-text-input",className:"col-2 col-form-label"},"Name"),r.a.createElement("div",{className:"col-10"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.onChange,id:"name"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"example-tel-input",className:"col-2 col-form-label"},"Telephone"),r.a.createElement("div",{className:"col-10"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.onChange,id:"phone_number"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"example-text-input",className:"col-2 col-form-label"},"Address"),r.a.createElement("div",{className:"col-10"},r.a.createElement("input",{className:"form-control",type:"text",onChange:this.onChange,id:"address"}))),r.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Add")))}}]),t}(a.Component),v=n(17),g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleInputChange=function(e,t){var a;n.setState((a={},Object(b.a)(a,e.target.id,e.target.value),Object(b.a)(a,"index",t),a))},n.state={contacts:[],name:null,phone_number:null,address:null,index:""},n.onSubmit=n.onSubmit.bind(Object(C.a)(Object(C.a)(n))),n.handleInputChange=n.handleInputChange.bind(Object(C.a)(Object(C.a)(n))),n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.mocky.io/v2/581335f71000004204abaf83").then(function(e){return e.json()}).then(function(t){return e.setState({contacts:t.contacts})}).catch(function(e){return console.log(e)})}},{key:"onSubmit",value:function(){this.editContact(this.state)}},{key:"editContact",value:function(e){var t=this.state,n=t.contacts,a=t.name,r=t.phone_number,c=t.address,o=t.index,s=Object(v.a)({},n[o],{name:a,address:c,phone_number:r}),i=Object(l.a)(n.slice(0,o)).concat([s],Object(l.a)(n.slice(o+1)));this.setState({contacts:i}),console.log(i)}},{key:"render",value:function(){var e=this,t=this.props,n=t.search,a=t.direction,c=this.state.contacts,o=function(t,n){return r.a.createElement("ul",{className:"gradient_text",key:t.name},r.a.createElement("li",null,"Name: ",r.a.createElement("input",{name:"name",id:"name",onChange:function(t){return e.handleInputChange(t,n)},defaultValue:t.name})),r.a.createElement("li",null,"Phone: ",r.a.createElement("input",{name:"phone_number",id:"phone_number",onChange:function(t){return e.handleInputChange(t,n)},defaultValue:t.phone_number})),r.a.createElement("li",null,"Address: ",r.a.createElement("input",{name:"address",id:"address",onChange:function(t){return e.handleInputChange(t,n)},defaultValue:t.address})),r.a.createElement("li",null,"Index: ",n),r.a.createElement("button",{type:"button",className:"btn btn-light",onClick:function(){return e.onSubmit()}},"Save"),r.a.createElement("hr",null))};if("notsorted"===a){var l=c.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.address.toLowerCase().includes(n.toLowerCase())||e.phone_number.includes(n)});return r.a.createElement("div",null,l.map(o))}if("Ascending"===a){var s=c.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0}).filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.address.toLowerCase().includes(n.toLowerCase())||e.phone_number.includes(n)});return r.a.createElement("div",null,s.map(o))}if("Descending"===a){var i=c.sort(function(e,t){return e.name>t.name?-1:e.name<t.name?1:0}).filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())||e.address.toLowerCase().includes(n.toLowerCase())||e.phone_number.includes(n)});return r.a.createElement("div",null,i.map(o))}}}]),t}(a.Component),w=n(39),N=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("ul",{className:"navbar-nav mr-auto center"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/",className:"nav-link"},"Browse")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/add",className:"nav-link"},"Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(w.a,{to:"/edit",className:"nav-link"},"Edit")))))},j=n(38),O=n(40),y=n(37),L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).filterContacts=function(e){n.setState({search:e.target.value})},n.sortIt=function(e){"Ascending"===e?n.setState({direction:"Ascending"}):"Descending"===e?n.setState({direction:"Descending"}):n.setState({direction:"notsorted"})},n.addContact=function(e){var t=Object(l.a)(n.state.contacts).concat([e]);n.setState({contacts:t})},n.deleteContact=function(e){var t=n.state.contacts.filter(function(t){return t.name!==e});n.setState({contacts:t})},n.saveContact=function(e){console.log(e)},n.state={search:"",contacts:[],name:"",phone_number:"",address:"",direction:"notsorted",form:"add"},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.mocky.io/v2/581335f71000004204abaf83").then(function(e){return e.json()}).then(function(t){return e.setState({contacts:t.contacts})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.contacts,a=t.search,c=t.direction;return r.a.createElement(j.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement("h1",null,"Phonebook"),r.a.createElement("div",{className:"container"},r.a.createElement(O.a,null,r.a.createElement(y.a,{exact:!0,path:"/",render:function(t){return r.a.createElement("div",null,r.a.createElement(h,{filterContacts:e.filterContacts}),r.a.createElement(f,{sortIt:e.sortIt}),r.a.createElement(p,{contacts:n,search:a,deleteContact:e.deleteContact,sortIt:e.sortIt,direction:c,filteredContacts:e.state.filteredContacts,editContact:e.editContact}))}}),r.a.createElement(y.a,{exact:!0,path:"/add",render:function(t){return r.a.createElement(E,{addContact:e.addContact,editContact:e.editContact,contact:e.state.contacts})}}),r.a.createElement(y.a,{exact:!0,path:"/edit",render:function(t){return r.a.createElement("div",null,r.a.createElement(h,{filterContacts:e.filterContacts}),r.a.createElement(g,{contacts:n,search:a,deleteContact:e.deleteContact,sortIt:e.sortIt,direction:c,filteredContacts:e.state.filteredContacts,editContact:e.editContact}))}})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,2,1]]]);
//# sourceMappingURL=main.134e6dc2.chunk.js.map