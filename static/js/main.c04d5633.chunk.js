(this["webpackJsonpamath-random-rack-game"]=this["webpackJsonpamath-random-rack-game"]||[]).push([[0],{63:function(t,e,n){t.exports=n(78)},68:function(t,e,n){},69:function(t,e,n){},70:function(t,e,n){},78:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(7),o=n.n(r),c=(n(68),n(12)),d=n(16),l=n(55),m=n(56),p=n(58),s=n(59),u=n(32),g=n(45),h=n(15),b=(n(69),n(70),n(119)),f=n(121),y=n(122),v=n(116),E=n(42),k=n.n(E),x=n(117),O=n(118),I=n(120),S=[{content:"0",id:"item-1"},{content:"0",id:"item-2"},{content:"0",id:"item-3"},{content:"0",id:"item-4"},{content:"0",id:"item-5"},{content:"1",id:"item-6"},{content:"1",id:"item-7"},{content:"1",id:"item-8"},{content:"1",id:"item-9"},{content:"1",id:"item-10"},{content:"1",id:"item-11"},{content:"2",id:"item-12"},{content:"2",id:"item-13"},{content:"2",id:"item-14"},{content:"2",id:"item-15"},{content:"2",id:"item-16"},{content:"2",id:"item-17"},{content:"3",id:"item-18"},{content:"3",id:"item-19"},{content:"3",id:"item-20"},{content:"3",id:"item-21"},{content:"3",id:"item-22"},{content:"4",id:"item-23"},{content:"4",id:"item-24"},{content:"4",id:"item-25"},{content:"4",id:"item-26"},{content:"4",id:"item-27"},{content:"5",id:"item-28"},{content:"5",id:"item-29"},{content:"5",id:"item-30"},{content:"5",id:"item-31"},{content:"6",id:"item-32"},{content:"6",id:"item-33"},{content:"6",id:"item-34"},{content:"6",id:"item-35"},{content:"7",id:"item-36"},{content:"7",id:"item-37"},{content:"7",id:"item-38"},{content:"7",id:"item-39"},{content:"8",id:"item-40"},{content:"8",id:"item-41"},{content:"8",id:"item-42"},{content:"8",id:"item-43"},{content:"9",id:"item-44"},{content:"9",id:"item-45"},{content:"9",id:"item-46"},{content:"9",id:"item-47"},{content:"10",id:"item-48"},{content:"10",id:"item-49"},{content:"11",id:"item-50"},{content:"12",id:"item-51"},{content:"12",id:"item-52"},{content:"13",id:"item-53"},{content:"14",id:"item-54"},{content:"15",id:"item-55"},{content:"16",id:"item-56"},{content:"17",id:"item-57"},{content:"18",id:"item-58"},{content:"19",id:"item-59"},{content:"20",id:"item-60"},{content:"+",id:"item-61"},{content:"+",id:"item-62"},{content:"+",id:"item-63"},{content:"+",id:"item-64"},{content:"-",id:"item-65"},{content:"-",id:"item-66"},{content:"-",id:"item-67"},{content:"-",id:"item-68"},{content:"+/-",id:"item-69"},{content:"+/-",id:"item-70"},{content:"+/-",id:"item-71"},{content:"+/-",id:"item-72"},{content:"+/-",id:"item-89"},{content:"x",id:"item-73"},{content:"x",id:"item-74"},{content:"x",id:"item-75"},{content:"x",id:"item-76"},{content:"\xf7",id:"item-77"},{content:"\xf7",id:"item-78"},{content:"\xf7",id:"item-79"},{content:"\xf7",id:"item-80"},{content:"x/\xf7",id:"item-81"},{content:"x/\xf7",id:"item-82"},{content:"x/\xf7",id:"item-83"},{content:"x/\xf7",id:"item-84"},{content:"?",id:"item-85"},{content:"?",id:"item-86"},{content:"?",id:"item-87"},{content:"?",id:"item-88"},{content:"=",id:"item-90"},{content:"=",id:"item-91"},{content:"=",id:"item-92"},{content:"=",id:"item-93"},{content:"=",id:"item-94"},{content:"=",id:"item-95"},{content:"=",id:"item-96"},{content:"=",id:"item-97"},{content:"=",id:"item-98"},{content:"=",id:"item-99"},{content:"=",id:"item-100"}];function j(t){return/^([0-9]+)$/.test(t)}function B(t){t.sort((function(){return Math.random()-.5}))}var P=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;B(S);var e=S.splice(0,t);return Array.from(e)},L=function(t,e,n){var a=Array.from(t),i=a.splice(e,1),r=Object(g.a)(i,1)[0];return a.splice(n,0,r),a},C=function(t,e,n,a){var i=Array.from(t),r=Array.from(e),o=i.splice(n.index,1),c=Object(g.a)(o,1)[0];r.splice(a.index,0,c);var d={};return d[n.droppableId]=i,d[a.droppableId]=r,d},w=function(t,e){return Object(u.a)({userSelect:"none",padding:2,margin:"".concat(4,"px ").concat(4,"px 0 0"),background:t?"lightgreen":"#424242",color:"white",minWidth:64,flexGrow:1,flexBasis:0,maxWidth:96,minHeight:64,display:"flex",justifyContent:"center",alignItems:"center"},e)},D=function(t){return{background:t?"lightblue":"lightgrey",display:"flex",padding:8,flexWrap:"wrap",minHeight:64}},T=function(t){Object(s.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={p1:[],p2:[],p1Bucket:[],p2Bucket:[],change:[],submit:[],bag:[],trash:[],p1Turn:!1,p2Turn:!1,snapshot:[]},t.id2List={droppableP1:"p1",droppableP2:"p2",droppableP1Bucket:"p1Bucket",droppableP2Bucket:"p2Bucket",droppableChange:"change",droppableSubmit:"submit"},t.updateSnapshot=function(){var e=JSON.parse(JSON.stringify(t.state));t.setState({snapshot:[e]})},t.retrieveSnapshot=function(){0!==t.state.snapshot.length&&t.setState(Object(u.a)({},t.state.snapshot.shift()))},t.getList=function(e){return t.state[t.id2List[e]]},t.onSubmitChange=function(e,n,a){var i;t.updateSnapshot();var r=e.length,o=Array.from(t.state.bag);B(o);var l=o.splice(0,r),m=t.state[t.id2List[n.droppableId]];t.setState((i={},Object(c.a)(i,t.id2List[n.droppableId],[].concat(Object(d.a)(m),Object(d.a)(l))),Object(c.a)(i,"bag",[].concat(Object(d.a)(o),Object(d.a)(e))),Object(c.a)(i,"change",[]),Object(c.a)(i,t.id2List[a.droppableId],[]),i))},t.onSubmitConfirm=function(e,n,a){var i;t.updateSnapshot();var r=e.length,o=Array.from(t.state.bag);B(o);var l=o.splice(0,r),m=t.state[t.id2List[n.droppableId]];t.setState((i={},Object(c.a)(i,t.id2List[n.droppableId],[].concat(Object(d.a)(m),Object(d.a)(l))),Object(c.a)(i,"bag",Object(d.a)(o)),Object(c.a)(i,"trash",[].concat(Object(d.a)(t.state.trash),[e])),Object(c.a)(i,"submit",[]),Object(c.a)(i,t.id2List[a.droppableId],[]),i))},t.onDragEnd=function(e){var n=e.source,a=e.destination;if(a)if(n.droppableId===a.droppableId){var i=L(t.getList(n.droppableId),n.index,a.index);t.setState(Object(c.a)({},t.id2List[n.droppableId],i))}else{var r,o=C(t.getList(n.droppableId),t.getList(a.droppableId),n,a);t.setState((r={},Object(c.a)(r,t.id2List[n.droppableId],o[n.droppableId]),Object(c.a)(r,t.id2List[a.droppableId],o[a.droppableId]),r))}},t}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.setState({p1:P(8),p2:P(8),p1Bucket:[],p2Bucket:[],submit:[],bag:P(84),p1Turn:!0,p2Turn:!0,snapshot:[]})}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{className:"App",id:"App",style:{fontFamily:"Sriracha",color:"#333"}},i.a.createElement(h.a,{onDragEnd:this.onDragEnd},i.a.createElement(f.a,{expanded:this.state.p1Turn,onChange:function(){return t.setState({p1Turn:!t.state.p1Turn})}},i.a.createElement(y.a,{expandIcon:i.a.createElement(k.a,null)},i.a.createElement(I.a,{id:"p1-name-basic",label:"\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19 1",variant:"outlined",onClick:function(t){return t.stopPropagation()}})),this.state.p1Turn&&i.a.createElement(v.a,{style:{display:"flex",flexDirection:"column"}},i.a.createElement(h.c,{droppableId:"droppableP1",direction:"horizontal"},(function(e,n){return i.a.createElement("div",{ref:e.innerRef,style:D(n.isDraggingOver)},t.state.p1.map((function(t,e){return i.a.createElement(h.b,{key:t.id,draggableId:t.id,index:e},(function(e,n){return i.a.createElement(x.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{style:w(n.isDragging,e.draggableProps.style)}),i.a.createElement(O.a,{variant:"h3",component:"h4",style:{fontFamily:"Sriracha"}},t.content))}))})),e.placeholder)})),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(b.a,{style:{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},disabled:0===this.state.p1Bucket.length||8===this.state.p1.length||0===this.state.bag.length,variant:"contained",color:"primary",onClick:function(){t.onSubmitChange(t.state.p1Bucket,{droppableId:"droppableP1"},{droppableId:"droppableP1Bucket"})}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19"," ")),i.a.createElement(b.a,{style:{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},disabled:0===this.state.p1Bucket.length||8===this.state.p1.length&&0!==this.state.bag.length,variant:"contained",color:"secondary",onClick:function(){t.onSubmitConfirm(t.state.p1Bucket,{droppableId:"droppableP1"},{droppableId:"droppableP1Bucket"})}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"\u0e25\u0e07"," ")," "),i.a.createElement(b.a,{style:Object(u.a)({},{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},{marginLeft:16}),variant:"contained",color:"primary",disabled:0===this.state.p1Bucket.length,onClick:function(){navigator.clipboard.writeText(t.state.p1Bucket.map((function(t){return j(t.content)?t.content:'"('.concat(t.content,')"')})).join("\t"))}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"Copy"," "))),i.a.createElement(h.c,{droppableId:"droppableP1Bucket",direction:"horizontal"},(function(e,n){return i.a.createElement("div",{ref:e.innerRef,style:D(n.isDraggingOver)},t.state.p1Bucket.map((function(t,e){return i.a.createElement(h.b,{key:t.id,draggableId:t.id,index:e},(function(e,n){return i.a.createElement(x.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{style:w(n.isDragging,e.draggableProps.style)}),i.a.createElement(O.a,{variant:"h3",component:"h4",style:{fontFamily:"Sriracha"}},t.content))}))})),e.placeholder)})))),i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"\u0e40\u0e1a\u0e35\u0e49\u0e22\u0e43\u0e19\u0e16\u0e38\u0e07\u0e40\u0e2b\u0e25\u0e37\u0e2d",": ".concat(this.state.bag.length," \u0e15\u0e31\u0e27")),i.a.createElement(b.a,{style:{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},disabled:0===this.state.snapshot.length,variant:"contained",color:"primary",onClick:function(){t.retrieveSnapshot()}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"Back"," ")),i.a.createElement(f.a,{expanded:this.state.p2Turn,onChange:function(){return t.setState({p2Turn:!t.state.p2Turn})}},i.a.createElement(y.a,{expandIcon:i.a.createElement(k.a,null)},i.a.createElement(I.a,{id:"p2-name-basic",label:"\u0e1c\u0e39\u0e49\u0e40\u0e25\u0e48\u0e19 2",variant:"outlined",onClick:function(t){return t.stopPropagation()},color:"secondary"})),this.state.p2Turn&&i.a.createElement(v.a,{style:{display:"flex",flexDirection:"column"}},i.a.createElement(h.c,{droppableId:"droppableP2",direction:"horizontal"},(function(e,n){return i.a.createElement("div",{ref:e.innerRef,style:D(n.isDraggingOver)},t.state.p2.map((function(t,e){return i.a.createElement(h.b,{key:t.id,draggableId:t.id,index:e},(function(e,n){return i.a.createElement(x.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{style:w(n.isDragging,e.draggableProps.style)}),i.a.createElement(O.a,{variant:"h3",component:"h4",style:{fontFamily:"Sriracha"}},t.content))}))})),e.placeholder)})),i.a.createElement("div",{style:{display:"flex"}},i.a.createElement(b.a,{style:{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},disabled:0===this.state.p2Bucket.length||8===this.state.p2.length||0===this.state.bag.length,variant:"contained",color:"primary",onClick:function(){t.onSubmitChange(t.state.p2Bucket,{droppableId:"droppableP2"},{droppableId:"droppableP2Bucket"})}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"\u0e40\u0e1b\u0e25\u0e35\u0e48\u0e22\u0e19"," ")),i.a.createElement(b.a,{style:{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},disabled:0===this.state.p2Bucket.length||8===this.state.p2.length&&0!==this.state.bag.length,variant:"contained",color:"secondary",onClick:function(){t.onSubmitConfirm(t.state.p2Bucket,{droppableId:"droppableP2"},{droppableId:"droppableP2Bucket"})}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"\u0e25\u0e07"," ")),i.a.createElement(b.a,{style:Object(u.a)({},{padding:16,margin:8,marginLeft:0,minWidth:128,display:"flex"},{marginLeft:16}),variant:"contained",color:"primary",disabled:0===this.state.p2Bucket.length,onClick:function(){navigator.clipboard.writeText(t.state.p2Bucket.map((function(t){return j(t.content)?t.content:'"('.concat(t.content,')"')})).join("\t"))}},i.a.createElement(O.a,{variant:"h5",component:"h6",style:{fontFamily:"Sriracha"}},"Copy"," "))),i.a.createElement(h.c,{droppableId:"droppableP2Bucket",direction:"horizontal"},(function(e,n){return i.a.createElement("div",{ref:e.innerRef,style:D(n.isDraggingOver)},t.state.p2Bucket.map((function(t,e){return i.a.createElement(h.b,{key:t.id,draggableId:t.id,index:e},(function(e,n){return i.a.createElement(x.a,Object.assign({ref:e.innerRef},e.draggableProps,e.dragHandleProps,{style:w(n.isDragging,e.draggableProps.style)}),i.a.createElement(O.a,{variant:"h3",component:"h4",style:{fontFamily:"Sriracha"}},t.content))}))})),e.placeholder)}))))),i.a.createElement("div",{id:"bag"},i.a.createElement(f.a,null,i.a.createElement(y.a,{expandIcon:i.a.createElement(k.a,null)},i.a.createElement("h2",null,"\u0e40\u0e1a\u0e35\u0e49\u0e22\u0e43\u0e19\u0e16\u0e38\u0e07")),i.a.createElement(v.a,null,this.state.bag.map((function(t){return i.a.createElement("span",{key:t.id},t.content)}))))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[63,1,2]]]);
//# sourceMappingURL=main.c04d5633.chunk.js.map