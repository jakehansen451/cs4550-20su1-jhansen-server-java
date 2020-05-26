(this["webpackJsonpwbdv-20su1-jhansen-client-react"]=this["webpackJsonpwbdv-20su1-jhansen-client-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){e.exports=a(56)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),o=a.n(l),c=(a(31),a(32),a(7)),s=a(8),i=a(10),d=a(9),u=a(2),m=a(3),b=a(5),v=a(4),p="https://wbdv-generic-server.herokuapp.com/api/jhansen/courses/",w=function(e){return fetch(p,{method:"POST",body:JSON.stringify(e),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},h=function(e){return fetch(p+e,{method:"DELETE"}).then((function(e){return e.json()}))},f=function(e){return fetch(p+e).then((function(e){return e.json()}))},E=function(){return fetch(p).then((function(e){return e.json()}))},g=function(e,t){return fetch(p+e,{method:"PUT",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},N=(a(38),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={editing:!1,course:e.props.course,newCourseTitle:e.props.course.title},e.componentDidUpdate=function(){e.state.course!==e.props.course&&e.setState({course:e.props.course})},e.setEditing=function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{editing:t,newCourseTitle:e.state.course.title}))},e.saveCourseRow=function(){return g(e.state.course._id,Object(u.a)(Object(u.a)({},e.state.course),{},{title:e.state.newCourseTitle,modified:(new Date).toISOString()})).then((function(t){e.setEditing(!1),e.props.refreshCourses()}))},e.courseName=function(){return e.state.editing?r.a.createElement("input",{className:"wbdv-field wbdv-course-name-input",onChange:function(t){return e.setState({newCourseTitle:t.target.value})},value:e.state.newCourseTitle}):r.a.createElement(m.b,{className:"wbdv-icon-link",to:"/editor/".concat(e.state.course._id)},e.state.course.title)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("tr",{className:this.state.editing?"wbdv-highlighted":""},r.a.createElement("td",null,r.a.createElement(m.b,{to:"/editor/".concat(this.state.course._id)},r.a.createElement(b.a,{className:"wbdv-icon-link",icon:v.f}))),r.a.createElement("td",{className:"wbdv-title"},this.courseName()),r.a.createElement("td",{className:"wbdv-owner"},this.state.course.owner),r.a.createElement("td",{className:"wbdv-last-modified"},this.state.course.modified),r.a.createElement("td",{className:"wbdv-button-row"},this.state.editing?r.a.createElement("button",{className:"wbdv-button wbdv-green-btn",onClick:this.saveCourseRow},r.a.createElement(b.a,{icon:v.e})):r.a.createElement("button",{className:"wbdv-button wbdv-green-btn",onClick:function(){return e.setEditing(!0)}},r.a.createElement(b.a,{icon:v.g})),this.state.editing?r.a.createElement("button",{className:"float-right wbdv-red-btn wbdv-button wbdv-delete",onClick:function(){return e.setEditing(!1)}},r.a.createElement(b.a,{icon:v.k})):r.a.createElement("button",{className:"float-right wbdv-red-btn wbdv-button wbdv-delete",onClick:function(){return e.props.deleteCourse(e.props.course)}},r.a.createElement(b.a,{icon:v.l}))))}}]),a}(r.a.Component)),y=(a(15),a(41),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={newCourseTitle:""},e.addCourse=function(t){""!==e.state.newCourseTitle?w({title:t,owner:"me",modified:(new Date).toISOString()}).then((function(t){e.props.refreshCourses(),e.setState({newCourseTitle:""})})):alert("New course title cannot be empty.")},e.sortIcon=function(){return r.a.createElement(b.a,{className:"wbdv-sort-icon",icon:e.props.sort.includes("desc")?v.h:v.i})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wbdv-class-table"},r.a.createElement("div",{className:"wbdv-title-bar wbdv-course-table-header"},r.a.createElement("h2",null,"Courses"),r.a.createElement("form",{className:"wbdv-add-course-chunk"},r.a.createElement("input",{className:"wbdv-field wbdv-new-course",id:"add-course-title",type:"text",onChange:function(t){return e.setState({newCourseTitle:t.target.value})},value:this.state.newCourseTitle,placeholder:"Add a course",title:"Add the title of the new course"}),r.a.createElement("div",{className:"wbdv-button wbdv-add-course wbdv-icon-link",onClick:function(){return e.addCourse(e.state.newCourseTitle)}},"+"))),r.a.createElement("table",{className:"table table-striped wbdv-course-table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",{onClick:this.props.sortTitle},r.a.createElement("div",null,"Title",this.props.sort.includes("title")?this.sortIcon():null)),r.a.createElement("th",{onClick:this.props.sortOwner,className:"wbdv-owner"},r.a.createElement("div",null,"Owned By",this.props.sort.includes("owner")?this.sortIcon():null)),r.a.createElement("th",{onClick:this.props.sortDate,className:"wbdv-last-modified"},r.a.createElement("div",null,"Modified",this.props.sort.includes("date")?this.sortIcon():null)),r.a.createElement("th",null,r.a.createElement("div",{className:"wbdv-grid-btn-block"},r.a.createElement("div",{className:"wbdv-grid-btn-label"},"Grid view:"),r.a.createElement("div",{className:"wbdv-grid-btn"},this.props.gridButton))))),r.a.createElement("tbody",null,this.props.courses.map((function(t){return r.a.createElement(N,{refreshCourses:e.props.refreshCourses,deleteCourse:e.props.deleteCourse,key:t._id,course:t})})))))}}]),a}(r.a.Component)),C=function(e){var t=new Date(e),a=t.toDateString(),n=t.toLocaleTimeString(),r=n.lastIndexOf(":");return a.concat(" ",n.replace(n.substring(r,r+3)," "))},k=function(e){var t=new Date(e);if(t.toDateString()!==(new Date).toDateString())return t.toDateString();var a=t.toLocaleTimeString(),n=a.lastIndexOf(":");return a.replace(a.substring(n,n+3)," ")},O=(a(42),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={editing:!1,course:e.props.course,newCourseTitle:e.props.course.title},e.componentDidUpdate=function(){e.state.course!==e.props.course&&e.setState({course:e.props.course})},e.setEditing=function(t){return e.setState({editing:t})},e.saveCourseCard=function(){return g(e.state.course._id,Object(u.a)(Object(u.a)({},e.state.course),{},{title:e.state.newCourseTitle,modified:(new Date).toISOString()})).then((function(t){e.setEditing(!1),e.props.refreshCourses()}))},e.courseName=function(){return e.state.editing?r.a.createElement("input",{className:"wbdv-field wbdv-course-name-input",onChange:function(t){return e.setState({newCourseTitle:t.target.value})},value:e.state.newCourseTitle}):r.a.createElement(m.b,{className:"wbdv-icon-link",to:"/editor/".concat(e.state.course._id)},e.state.course.title)},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wbdv-grid-item"},r.a.createElement("div",{className:"wbdv-card-preview"},r.a.createElement("div",{className:"wbdv-preview-text"},"Preview")),r.a.createElement("div",{className:"wbdv-card-edit-block"},r.a.createElement("div",{className:"wbdv-name-block"},this.courseName()),r.a.createElement("div",{className:"wbdv-modified-info"},"Modified:\xa0",k(this.props.course.modified)),r.a.createElement("div",{className:"wbdv-card-btn-row"},this.state.editing?r.a.createElement("button",{className:"wbdv-button wbdv-green-btn wbdv-card-btn",onClick:this.saveCourseCard},r.a.createElement(b.a,{icon:v.e})):r.a.createElement("button",{className:"wbdv-button wbdv-green-btn wbdv-card-btn",onClick:function(){return e.setEditing(!0)}},r.a.createElement(b.a,{icon:v.g})),this.state.editing?r.a.createElement("button",{className:"float-right wbdv-red-btn wbdv-button wbdv-delete wbdv-card-btn",onClick:function(){return e.setEditing(!1)}},r.a.createElement(b.a,{icon:v.k})):r.a.createElement("button",{className:"float-right wbdv-red-btn wbdv-button wbdv-delete wbdv-card-btn",onClick:function(){return e.props.deleteCourse(e.props.course)}},r.a.createElement(b.a,{icon:v.l})))))}}]),a}(r.a.Component)),j=(a(43),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={newCourseTitle:""},e.addCourse=function(t){""!==e.state.newCourseTitle?w({title:t,owner:"me",modified:(new Date).toISOString()}).then((function(t){e.props.refreshCourses(),e.setState({newCourseTitle:""})})):alert("New course title cannot be empty.")},e.sortIcon=function(){return r.a.createElement(b.a,{className:"wbdv-sort-icon",icon:e.props.sort.includes("desc")?v.h:v.i})},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"wbdv-grid-container"},r.a.createElement("div",{className:"wbdv-title-bar wbdv-course-grid-header"},r.a.createElement("h2",null,"Courses"),r.a.createElement("form",{className:"wbdv-add-course-chunk"},r.a.createElement("input",{className:"wbdv-field wbdv-new-course",id:"add-course-title",type:"text",onChange:function(t){return e.setState({newCourseTitle:t.target.value})},value:this.state.newCourseTitle,placeholder:"Add a course",title:"Add the title of the new course"}),r.a.createElement("div",{className:"wbdv-button wbdv-add-course wbdv-icon-link",onClick:function(){return e.addCourse(e.state.newCourseTitle)}},"+"))),r.a.createElement("div",{className:"wbdv-grid-sort-bar"},r.a.createElement("div",{className:"wbdv-sort-button-row"},r.a.createElement("div",{className:"wbdv-sort-button",onClick:this.props.sortTitle},"Title",this.props.sort.includes("title")?this.sortIcon():null),r.a.createElement("div",{className:"wbdv-sort-button",onClick:this.props.sortOwner},"Owner",this.props.sort.includes("owner")?this.sortIcon():null),r.a.createElement("div",{className:"wbdv-sort-button",onClick:this.props.sortDate},"Modified",this.props.sort.includes("date")?this.sortIcon():null)),r.a.createElement("div",{className:"wbdv-table-btn-block"},r.a.createElement("div",{className:"wbdv-table-btn-label"},"List view:"),r.a.createElement("div",{className:"wbdv-table-btn"},this.props.tableButton))),r.a.createElement("div",{className:"wbdv-class-grid"},this.props.courses.map((function(t){return r.a.createElement(O,{refreshCourses:e.props.refreshCourses,deleteCourse:e.props.deleteCourse,key:t._id,course:t})}))))}}]),a}(r.a.Component)),T=(a(44),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={layout:e.props.match.params.layout,courses:[],sort:"date-desc"},e.setLayout=function(t){e.props.history.push("/courses/".concat(t,"/"))},e.deleteCourse=function(t){return h(t._id).then((function(a){return e.setState((function(e){return{courses:e.courses.filter((function(e){return e!==t}))}}))}))},e.sortTitle=function(t){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a=n?"title-".concat(n):"title-desc"===e.state.sort?"title-asc":"title-desc",e.setState(Object(u.a)(Object(u.a)({},e.state),{},{sort:a}))},e.sortOwner=function(t){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";a=n?"owner-".concat(n):"owner-desc"===e.state.sort?"owner-asc":"owner-desc",e.setState(Object(u.a)(Object(u.a)({},e.state),{},{sort:a}))},e.sortDate=function(){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{sort:"date-desc"===e.state.sort?"date-asc":"date-desc"}))},e.sortCourses=function(){var t;return"title-asc"===e.state.sort?t=function(e,t){return e.title.toString()<=t.title.toString()?1:-1}:"title-desc"===e.state.sort?t=function(e,t){return e.title.toString()<=t.title.toString()?-1:1}:"owner-asc"===e.state.sort?t=function(e,t){return e.owner.toString()<=t.owner.toString()?1:-1}:"owner-desc"===e.state.sort?t=function(e,t){return e.owner.toString()<=t.owner.toString()?-1:1}:"date-asc"===e.state.sort?t=function(e,t){return e.modified.toString()<=t.modified.toString()?1:-1}:"date-desc"===e.state.sort&&(t=function(e,t){return e.modified.toString()<=t.modified.toString()?-1:1}),e.state.courses.sort(t)},e.refreshCourses=function(){E().then((function(t){e.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{courses:t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{modified:C(e.modified)})}))})}))}))},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;E().then((function(t){return e.setState({courses:t.map((function(e){return Object(u.a)(Object(u.a)({},e),{},{modified:C(e.modified)})}))})}))}},{key:"componentDidUpdate",value:function(e,t,a){e.match.params.layout!==this.props.match.params.layout&&this.setState({layout:this.props.match.params.layout})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar fixed-top wbdv-course-list-search-navbar"},r.a.createElement("div",null,r.a.createElement(m.b,{to:"/"},r.a.createElement(b.a,{icon:v.a,className:"wbdv-icon-link wbdv-back-btn"})),r.a.createElement("div",{className:"navbar-brand"},"Browse Courses")),r.a.createElement("div",{className:"wbdv-search-chunk"},r.a.createElement("input",{className:"wbdv-field",type:"search",placeholder:"Search","aria-label":"Search"}),r.a.createElement("button",{className:"wbdv-button wbdv-green-btn wbdv-course-search-button",type:"submit"},"Search"))),r.a.createElement("div",{className:"wbdv-padded-top"},"table"===this.state.layout&&r.a.createElement("div",null,r.a.createElement(y,{gridButton:r.a.createElement(b.a,{icon:v.j,onClick:function(){return e.setLayout("grid")},className:"wbdv-icon-link wbdv-switch-layout-btn"}),sortTitle:this.sortTitle,sortOwner:this.sortOwner,sortDate:this.sortDate,deleteCourse:this.deleteCourse,courses:this.sortCourses(),sort:this.state.sort,refreshCourses:this.refreshCourses})),"grid"===this.state.layout&&r.a.createElement("div",null,r.a.createElement(j,{tableButton:r.a.createElement(b.a,{icon:v.d,onClick:function(){return e.setLayout("table")},className:"wbdv-icon-link wbdv-switch-layout-btn"}),sortTitle:this.sortTitle,sortOwner:this.sortOwner,sortDate:this.sortDate,deleteCourse:this.deleteCourse,courses:this.sortCourses(),sort:this.state.sort,refreshCourses:this.refreshCourses}))))}}]),a}(r.a.Component)),S=(a(45),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"wbdv-module-list-header"},r.a.createElement("div",null,"Modules"),r.a.createElement("button",{className:"wbdv-icon-link wbdv-btn",onClick:function(){return alert("Pretending to add module")}},"+")),r.a.createElement("ul",{className:"list-group wbdv-module-list"},e.modules.map((function(t){return r.a.createElement("li",{key:t.name,className:t.name===e.selectedModule.name?"list-group-item wbdv-module-item wbdv-module-selected":"list-group-item wbdv-module-item",onClick:function(){return e.selectModule(t)}},r.a.createElement("div",null,t.name),r.a.createElement("button",{className:"wbdv-icon-link wbdv-delete-btn wbdv-btn",onClick:function(){return alert("Pretending to delete module")}},"X"))}))))}),D=(a(46),function(e){return r.a.createElement("li",{key:e.tab,className:e.selected?"nav-item wbdv-navbar-content-item wbdv-selected-tab":"nav-item wbdv-navbar-content-item",onClick:function(){return e.selectTab(e.tab)}},r.a.createElement("button",{className:"nav-link wbdv-btn"},e.tab))}),P=(a(47),function(e){return r.a.createElement("nav",{className:"navbar navbar-light wbdv-editor-main-navbar"},r.a.createElement("div",null,r.a.createElement(m.b,{to:"/courses/"},r.a.createElement(b.a,{className:"wbdv-course-editor wbdv-back-btn wbdv-icon-link",icon:v.a})),r.a.createElement("div",{className:"navbar-brand"},e.title)),r.a.createElement("ul",{className:"wbdv-navbar-content navbar-nav"},e.tabs.map((function(t){return D({tab:t,selected:t===e.currentTab,selectTab:e.selectTab})})),r.a.createElement("li",{className:"nav-item wbdv-navbar-content-item"},r.a.createElement("button",{className:"nav-link wbdv-icon-link wbdv-btn",onClick:e.addTab},"+"))))}),W=function(e){return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs topic-navbar wbdv-topic-pill-list"},e.topics.map((function(t){return r.a.createElement("li",{key:t.name,className:"nav-item",onClick:function(){return e.selectTopic(t)}},r.a.createElement("div",{className:e.active.name===t.name?"nav-link wbdv-topic-pill active topic-selected":"nav-link wbdv-topic-pill"},t.name))})),r.a.createElement("li",{className:"nav-item"},r.a.createElement("div",{className:"nav-link topic-link wbdv-icon-link wbdv-topic-add-btn",onClick:e.addTopic},"+"))))},x=(a(48),a(49),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).renderWidgetBody=function(){var t=e.props.widget.name;return r.a.createElement("div",{id:t,className:"collapse show wbdv-widget-body","aria-labelledby":t.concat("-heading"),"data-parent":"#widget-accordion"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group wbdv-widget-edit-row"},r.a.createElement("label",{className:"col-form-label wbdv-widget-input-label",htmlFor:"widget-name-input"},"Widget name:"),r.a.createElement("input",{className:"wbdv-widget-input-field wbdv-field col",id:"widget-name-input",type:"text",placeholder:"Heading widget"})),r.a.createElement("div",{className:"form-group wbdv-widget-edit-row"},r.a.createElement("label",{className:"col-form-label wbdv-widget-input-label"},"Widget type:"),r.a.createElement("select",{className:"wbdv-widget-input-field wbdv-field col"},r.a.createElement("option",{value:"Heading"},"Heading"),r.a.createElement("option",{value:"Widget type 2"},"Widget type 2"),r.a.createElement("option",{value:"Widget type 3"},"Widget type 3")))),r.a.createElement("form",{className:"wbdv-heading-widget-edit"},r.a.createElement("div",{className:"wbdv-widget-edit-heading"},"Heading widget"),r.a.createElement("div",{className:"wbdv-widget-edit-row"},r.a.createElement("label",{className:"col-form-label wbdv-widget-input-label",htmlFor:"heading-body-input"},"Heading text:"),r.a.createElement("input",{className:"wbdv-widget-input-field wbdv-field col",id:"heading-body-input",type:"text",placeholder:"Put your heading text here"}))),r.a.createElement("h5",null,"Widget Preview:"),r.a.createElement("div",{className:"wbdv-heading-widget-preview"},r.a.createElement("h2",null,"Put your heading text here")))},e}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.widget.name;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header wbdv-widget-heading-bar",id:e.concat("-heading")},r.a.createElement("button",{className:"btn btn-link wbdv-clickable-label",type:"button","data-toggle":"collapse","data-target":"#".concat(e),"aria-expanded":"true","aria-controls":e},e),r.a.createElement("div",null,r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{className:"btn btn-light"},r.a.createElement(b.a,{icon:v.c})),r.a.createElement("button",{className:"btn btn-light"},r.a.createElement(b.a,{icon:v.b}))),r.a.createElement("button",{className:"wbdv-icon-link wbdv-btn wbdv-delete-btn",onClick:function(){return alert("Pretending to delete widget")}},"X"))),this.props.active?this.renderWidgetBody():null)}}]),a}(r.a.Component)),M=function(e){var t=function(t){return r.a.createElement(x,{key:t.name,widget:t,active:e.activeWidget.name===t.name})};return r.a.createElement("div",{className:"accordion",id:"widget-accordion"},e.widgets.map((function(e){if("heading"===e.type)return t(e)})))},F=(a(50),function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={widgets:e.props.widgets,activeWidget:e.props.widgets.length>0?e.props.widgets[0]:{}},e.addWidget=function(){return alert("Pretending to add widget")},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.state.widgets!==this.props.widgets&&this.setState({widgets:this.props.widgets,activeWidget:this.props.widgets.length>0?this.props.widgets[0]:{}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"wbdv-topic-content"},r.a.createElement("div",{className:"wbdv-section-header"},r.a.createElement("div",null,"Widgets"),r.a.createElement("button",{className:"wbdv-btn wbdv-icon-link",onClick:this.addWidget},"+")),r.a.createElement(M,{widgets:this.state.widgets,activeWidget:this.state.activeWidget}))}}]),a}(r.a.Component)),I=function(e){return 0===Object.keys(e).length},A=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={topics:e.props.topics,activeTopic:e.props.topics.length>0?e.props.topics[0]:{}},e.addTopic=function(){return alert("Pretending to add topic")},e.selectTopic=function(t){e.setState(Object(u.a)(Object(u.a)({},e.state),{},{activeTopic:t}))},e}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.state.topics!==this.props.topics&&this.setState({topics:this.props.topics,activeTopic:this.props.topics.length>0?this.props.topics[0]:{}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,{topics:this.state.topics,active:this.state.activeTopic,addTopic:this.addTopic,selectTopic:this.selectTopic}),r.a.createElement(F,{widgets:I(this.state.activeTopic)?[]:this.state.activeTopic.widgets}))}}]),a}(r.a.Component),B=(a(51),[{name:"Module 1",topics:[{name:"Topic 1",widgets:[{name:"Widget 1",type:"heading"},{name:"Widget 2",type:"heading"}]},{name:"Topic 2",widgets:[{name:"Widget 1",type:"heading"}]}]},{name:"Module 2",topics:[{name:"Topic 1",widgets:[{name:"Widget 1",type:"heading"},{name:"Widget 2",type:"heading"},{name:"Widget 3",type:"heading"}]}]}]),U=["Build","Pages","Theme","Store","Apps"],L=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currentTab:"Pages",course:{},selectedModule:{}},e.getCourseIDFromURL=function(){return window.location.pathname.replace("/editor/","").replace("/","")},e.selectModule=function(t){return e.setState(Object(u.a)(Object(u.a)({},e.state),{},{selectedModule:t}))},e.selectTab=function(e){return alert("Selected tab ".concat(e))},e.addTab=function(){return alert("Pretending to add tab")},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.getCourseIDFromURL();f(t).then((function(t){var a=Object(u.a)(Object(u.a)({},t),{},{modules:B,tabs:U,currentTab:"Pages"}),n=a.modules.length>0?a.modules[0]:{};e.setState(Object(u.a)(Object(u.a)({},e.state),{},{course:a,selectedModule:n}))}))}},{key:"render",value:function(){return r.a.createElement("div",null,P({title:I(this.state.course)?"":this.state.course.title,tabs:I(this.state.course)?[]:this.state.course.tabs,currentTab:this.state.currentTab,selectTab:this.selectTab,addTab:this.addTab}),r.a.createElement("div",{className:"wbdv-modules-section"},r.a.createElement("div",{className:"wbdv-modules-list"},S({modules:I(this.state.course)?[]:this.state.course.modules,selectedModule:this.state.selectedModule,selectModule:this.selectModule})),r.a.createElement("div",{className:"wbdv-topic-section"},r.a.createElement(A,{topics:I(this.state.selectedModule)?[]:this.state.selectedModule.topics}))))}}]),a}(r.a.Component),_=a(6),R=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wbdv-title-bar"},r.a.createElement("h1",null,"Whiteboard")),r.a.createElement(m.b,{to:"/courses/table/"},"Browse course offerings"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/login/"},"Login"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/register/"},"Need an account? Register here"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/profile/"},"View your profile"),r.a.createElement("br",null),r.a.createElement(m.b,{to:"/editor/"},"Edit courses"),r.a.createElement("br",null))},J=(a(52),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wbdv-title-bar"},r.a.createElement("h1",null,"Sign In"),r.a.createElement(m.b,{className:"wbdv-cancel-btn wbdv-button btn wbdv-green-btn",to:"/"},"Cancel")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"usr",className:"col-form-label wbdv-input-label"},"Username"),r.a.createElement("input",{className:"wbdv-field wbdv-username col",id:"usr",type:"text",placeholder:"DwayneJohnson",title:"Use this username to login"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"pwd",className:"col-form-label wbdv-input-label"},"Password"),r.a.createElement("input",{id:"pwd",className:"wbdv-field wbdv-password col",type:"password",placeholder:"abc123",title:"Please enter your password"}))),r.a.createElement("div",null,r.a.createElement(m.b,{className:"wbdv-button wbdv-login btn wbdv-green-btn",to:"/profile/"},"Login"),r.a.createElement("div",{className:"wbdv-login-zone-links"},r.a.createElement(m.b,{className:"wbdv-link wbdv-forgot-password",to:"/wip/"},"Forgot your password?"),r.a.createElement(m.b,{className:"wbdv-link wbdv-register",to:"/register/"},"Don't have an account yet? Register here"))))}),H=(a(53),function(){return r.a.createElement("div",{className:"wbdv-wip-block"},r.a.createElement("h1",null,"Whoops!"),r.a.createElement("div",null,"The page you're looking for hasn't been implemented yet."),r.a.createElement(m.b,{to:"/"},"Back to home"))}),V=(a(54),function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"wbdv-title-bar"},r.a.createElement("h1",null,"Register"),r.a.createElement(m.b,{className:"wbdv-ccancel-btn wbdv-button btn wbdv-green-btn",to:"/"},"Cancel")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"usr",className:"col-form-label wbdv-input-label"},"Username"),r.a.createElement("input",{className:"wbdv-field wbdv-username register-input-field col",id:"usr",type:"text",placeholder:"DwayneJohnson",title:"Please select a username"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"pwd",className:"col-form-label wbdv-input-label"},"Password"),r.a.createElement("input",{id:"pwd",className:"wbdv-field wbdv-password col",type:"password",placeholder:"abc123",title:"Please enter a secure password"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"verify-pwd",className:"col-form-label wbdv-input-label"},"Verify Password"),r.a.createElement("input",{id:"verify-pwd",className:"wbdv-field wbdv-password-verify col",type:"password",placeholder:"abc123",title:"Please re-enter your password for verification"}))),r.a.createElement("div",null,r.a.createElement(m.b,{className:"wbdv-button wbdv-register btn wbdv-green-btn",to:"/profile/"},"Register"),r.a.createElement("div",null,r.a.createElement(m.b,{className:"wbdv-link wbdv-login",to:"/login/"},"Already have an account? Click here to log in"))))}),X=(a(55),function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",{className:"wbdv-title-bar wbdv-profile-title-bar"},r.a.createElement("h1",null,"Profile")),r.a.createElement("div",{className:"wbdv-message alert wbdv-green-alert",role:"alert"},"Profile saved successfully.")),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"usr",className:"col-form-label wbdv-input-label"},"Username"),r.a.createElement("input",{className:"wbdv-field wbdv-username col",id:"usr",value:"DwayneJohnson",type:"text",placeholder:"DwayneJohnson",title:"Use this username to login",disabled:!0})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"pwd",className:"col-form-label wbdv-input-label"},"Password"),r.a.createElement("input",{className:"wbdv-field wbdv-password col",id:"pwd",type:"password",placeholder:"abc123"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"phone",className:"col-form-label wbdv-input-label"},"Phone"),r.a.createElement("input",{className:"wbdv-field wbdv-phone col",id:"phone",type:"tel",placeholder:"(123) 456-7890"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"email",className:"col-form-label wbdv-input-label"},"Email"),r.a.createElement("input",{className:"wbdv-field wbdv-email col",id:"email",type:"email",placeholder:"<last_name>.<first_initial>@husky.neu.edu"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"dob",className:"col-form-label wbdv-input-label"},"Date of Birth"),r.a.createElement("input",{className:"wbdv-field wbdv-dob col",id:"dob",type:"date"})),r.a.createElement("div",{className:"form-group wbdv-input-form-row"},r.a.createElement("label",{htmlFor:"role",className:"col-form-label wbdv-input-label"},"Role"),r.a.createElement("select",{className:"wbdv-field wbdv-role col",id:"role"},r.a.createElement("option",{value:"Faculty"},"Faculty"),r.a.createElement("option",{value:"Student"},"Student"),r.a.createElement("option",{value:"Admin"},"Admin")))),r.a.createElement("button",{className:"wbdv-button wbdv-update btn wbdv-green-btn"},"Update Profile"),r.a.createElement(m.b,{to:"/",className:"wbdv-button wbdv-logout btn wbdv-red-btn"},"Logout"))}),z=function(e){Object(i.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(_.b,{path:"/:url*",exact:!0,strict:!0,render:function(e){return r.a.createElement(_.a,{to:"".concat(e.location.pathname,"/")})}}),r.a.createElement(_.b,{path:"/",exact:!0,component:R}),r.a.createElement(_.b,{path:"/courses/",exact:!0,strict:!0,render:function(e){return r.a.createElement(_.a,{to:"".concat(e.location.pathname,"table/")})}}),r.a.createElement(_.b,{path:"/courses/:layout/",exact:!0,component:T}),r.a.createElement(_.b,{path:"/editor/",exact:!0,component:L}),r.a.createElement(_.b,{path:"/editor/:id",exact:!0,component:L}),r.a.createElement(_.b,{path:"/profile/",exact:!0,component:X}),r.a.createElement(_.b,{path:"/login/",exact:!0,component:J}),r.a.createElement(_.b,{path:"/register/",exact:!0,component:V}),r.a.createElement(_.b,{path:"/wip/",exact:!0,component:H})))}}]),a}(r.a.Component);var G=function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(z,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[26,1,2]]]);
//# sourceMappingURL=main.fafd602a.chunk.js.map