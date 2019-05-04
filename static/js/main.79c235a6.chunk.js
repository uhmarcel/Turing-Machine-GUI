(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(t,e,a){t.exports=a(43)},30:function(t,e,a){},37:function(t,e,a){},41:function(t,e,a){},42:function(t,e,a){},43:function(t,e,a){"use strict";a.r(e);var n=a(1),r=a.n(n),i=a(21),o=a.n(i),s=(a(30),a(2)),c=a.n(s),u=a(3),l=a(4),p=a(5),h=a(8),d=a(7),f=a(9),m=a(44),v=a(45),g={height:"90px",background:"#90a4be",color:"#111",font:"10px"},y={font:"14px monospace",letterSpacing:"1px",height:"28px",border:"none"},b={font:"12px monospace"},k=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={displayValue:a.props.TM.toString(),focus:!1},a.updateInput=function(){var t=Object(u.a)(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.setState({displayValue:e.target.value});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.processInput=function(){var t=Object(u.a)(c.a.mark(function t(e){var n,r,i,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.props,r=n.TM,i=n.updateTM,o=e.target.value,/.*(?:\[|\])/g.test(o)){t.next=7;break}return r.setInput(o),t.next=7,i();case 7:a.setFocusOff();case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.setFocusOn=function(){a.setState({focus:!0})},a.setFocusOff=function(){a.setState({focus:!1})},a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentDidUpdate",value:function(){var t=this.props.TM,e=this.state,a=e.displayValue,n=e.focus;a===t.toString()||n||this.setState({displayValue:t.toString()})}},{key:"render",value:function(){var t=this.state.displayValue;return r.a.createElement(m.a,{fluid:!0,style:g,className:"d-flex align-items-center"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h6",null,"Turing Machine Simulator"),r.a.createElement(v.a,{type:"text",name:"tmDisplay",spellCheck:"false",className:"w-100 mt-0",style:y,value:t,onFocus:this.setFocusOn,onChange:this.updateInput,onBlur:this.processInput}),r.a.createElement("span",{className:"container",style:b},"Output: 11101")))}}]),e}(n.Component),w=a(46),M=a(14),x=a(15),O=(a(37),function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={play:null},a.simulationReset=Object(u.a)(c.a.mark(function t(){var e,n,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.props,n=e.TM,r=e.updateTM,n.resetTape(),n.setInput(n.input),r();case 4:case"end":return t.stop()}},t)})),a.simulationBack=Object(u.a)(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Not yet implemented");case 1:case"end":return t.stop()}},t)})),a.simulationStep=Object(u.a)(c.a.mark(function t(){var e,n,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.props,n=e.TM,r=e.program,i=e.updateTM,n.step(r),i();case 3:case"end":return t.stop()}},t)})),a.simulationPlay=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:null===(e=a.state.play)?e=setInterval(a.simulationStep,200):(clearInterval(e),e=null),a.setState({play:e});case 3:case"end":return t.stop()}},t)})),a.simulationFastforward=Object(u.a)(c.a.mark(function t(){var e,n,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=a.props,n=e.TM,r=e.program,i=e.updateTM;!n.isDone();)n.step(r);i();case 3:case"end":return t.stop()}},t)})),a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"container-fluid ControlPanel"},r.a.createElement("span",null,"Editor"),r.a.createElement("div",{className:"float-right"},r.a.createElement(w.a,{color:"light",className:"ControlButton",onClick:this.simulationReset},r.a.createElement(M.a,{icon:x.e})),"  ",r.a.createElement(w.a,{color:"light",className:"ControlButton"},r.a.createElement(M.a,{icon:x.a})),"  ",r.a.createElement(w.a,{color:"light",className:"ControlButton",onClick:this.simulationStep},r.a.createElement(M.a,{icon:x.b})),"  ",r.a.createElement(w.a,{color:"light",className:"ControlButton",onClick:this.simulationPlay,style:{paddingLeft:"8px"}},r.a.createElement(M.a,{icon:x.d,style:{height:"15px"}})),"  ",r.a.createElement(w.a,{color:"light",className:"ControlButton",onClick:this.simulationFastforward},r.a.createElement(M.a,{icon:x.c}))))}}]),e}(n.Component)),j=a(23),q="# Multiply TM program\n# Outputs the multiplication of two inputs on alphabet {1}*\n\n# For each multiplicand, copy input to end of tape\nq0]r (#, q1) (1, q0)\nq1]r (1/M, q2) (#, q8)    # Mark current multiplicand, and copy input\nq2]l (#, q3)\n\n# Copy first input at end of tape\nq3]l (1/X, q4) (#, q0)    # Mark current char being copied\nq4]r (#, q5)        \nq5]r (#, q6)\nq6]r (#/1, q7)\nq7]l (X/1, q3)            # Remove mark and recover\n\n# All multiplicands processed, finish \nq8]l (M/1, q8) (#, q9)\nq9]r (#, q-1)",T=(a(38),a(39),a(17)),E=a.n(T);a(40);E.a.defineSimpleMode("tm-custom",{start:[{regex:/^(q[0-9]+])\s*([rl])/,token:["tag   ","atom  "]},{regex:/\(\s*(?:.\s*\/\s*.\s*|.\s*),\s*(q-?[0-9]+)\s*\)/,token:["attribute  "]},{regex:/#.*/,token:"comment"}],meta:{lineComment:"#"}});a(41);var C=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={code:q},a.updateCode=function(){var t=Object(u.a)(c.a.mark(function t(e){var n,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n=a.props,r=n.program,i=n.updateProgram,a.setState({code:e}),r.loadCode(e),i();case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),a.handleChange=function(){var t=Object(u.a)(c.a.mark(function t(e,n,r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a.updateCode(r);case 1:case"end":return t.stop()}},t)}));return function(e,a,n){return t.apply(this,arguments)}}(),a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){var t=this.state.code;this.updateCode(t)}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"calc(100% - 55px"}},r.a.createElement(j.Controlled,{value:this.state.code,onBeforeChange:this.handleChange,options:{mode:"tm-custom",theme:"xq-light",lineNumbers:!0}}))}}]),e}(n.Component),S=(a(42),function(){function t(e,a,n,r,i){Object(l.a)(this,t),this.state=e,this.direction=a,this.target=n,this.replace=r,this.nextState=i}return Object(p.a)(t,[{key:"toString",value:function(){var t="";return t+="q"+this.state+"]",t+=this.direction?"r":"l",t+="("+this.target+"/"+this.replace+",q"+this.nextState+")"}}]),t}()),N=function(){function t(){Object(l.a)(this,t),this.instructions=[],this.indexedMap={}}return Object(p.a)(t,[{key:"addInstruction",value:function(t){this.instructions.push(t),null==this.indexedMap[t.state]&&(this.indexedMap[t.state]={direction:null,targets:{}}),this.indexedMap[t.state].direction=t.direction,this.indexedMap[t.state].targets[t.target]={replace:t.replace,nextState:t.nextState}}},{key:"loadCode",value:function(t){var e,a,n,r=this,i=t.split(/\r?\n/);e=/^q([0-9]+)\]([lr])(\(.\/.,q-?[0-9]+\))*(#.*)?$/,a=/\((.)\/(.),q(-?[0-9]+)\)/g,n=/\((.)\/(.),q(-?[0-9]+)\)/,this.clear(),i.forEach(function(t){var i=(t=(t=t.replace(/\s+/g,"")).replace(/\((.),q(-?[0-9]+)\)/g,"($1/$1,q$2)")).match(e);if(null!=i){var o,s,c,u,l;o=i[1],s="r"==i[2];var p=t.match(a);null!=p&&p.forEach(function(t){var e=t.match(n);null!=e&&(c=e[1],u=e[2],l=e[3],r.addInstruction(new S(o,s,c,u,l)))})}})}},{key:"clear",value:function(){this.instructions=[],this.indexedMap={}}},{key:"toString",value:function(){var t="";return this.instructions.forEach(function(e){t+=e.toString()+"\n"}),t}}]),t}(),I=function(){function t(){Object(l.a)(this,t),this.tape=["#"],this.position=0,this.state=0,this.input=null}return Object(p.a)(t,[{key:"resetTape",value:function(){this.tape=["#"],this.position=0,this.state=0}},{key:"setInput",value:function(t){this.resetTape();var e=this.position;this.input=t;for(var a=0;a<t.length;a++)this.tape[e+a+1]=t.charAt(a);this.tape.push("#")}},{key:"step",value:function(t){var e,a,n,r,i;if(!this.isDone())return this.position===this.tape.length-1&&this.tape.push("#"),e=this.state,a=t.indexedMap[e].direction,this.position+=a?1:-1,n=this.tape[this.position],null!=t.indexedMap[e].targets[n]?(r=t.indexedMap[e].targets[n].replace,i=t.indexedMap[e].targets[n].nextState):(r=n,i=e),this.tape[this.position]=r,this.state=i,this.toString();console.log("stop")}},{key:"getOutput",value:function(){for(var t="",e=this.position;e<this.tape.length;e++){var a=this.tape[e];"#"!==a&&(t+=a)}return t}},{key:"isDone",value:function(){return"-1"===this.state}},{key:"toString",value:function(){for(var t="",e=0;e<this.tape.length;e++)e===this.position?t+="["+this.tape[e]+"]":t+=this.tape[e];return t}}]),t}(),B=function(t){function e(){var t,a;Object(l.a)(this,e);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={TM:new I,program:new N},a.updateTM=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.state.TM,a.setState({TM:e});case 2:case"end":return t.stop()}},t)})),a.updateProgram=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=a.state.program,a.setState({program:e});case 2:case"end":return t.stop()}},t)})),a}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.state.TM.setInput("111#11"),this.updateTM()}},{key:"render",value:function(){var t=this.state,e=t.TM,a=t.program;return r.a.createElement("div",{className:"App"},r.a.createElement(k,{TM:e,updateTM:this.updateTM}),r.a.createElement(O,{TM:e,program:a,updateTM:this.updateTM}),r.a.createElement(C,{TM:e,program:a,updateTM:this.updateTM,updateProgram:this.updateProgram}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.79c235a6.chunk.js.map