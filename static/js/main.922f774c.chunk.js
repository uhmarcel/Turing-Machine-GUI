(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{38:function(t,e,n){t.exports=n(61)},43:function(t,e,n){},45:function(t,e,n){},55:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},61:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n.n(a),i=n(30),o=n.n(i),s=(n(43),n(4)),c=n.n(s),u=n(12),p=n(9),l=n(10),h=n(15),d=n(14),f=n(16),q=n(62),m=n(63),g=n(64),v=n(65),y=n(32),b=(n(45),function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={displayValue:n.props.TM.toString(),focus:!1},n.updateInput=function(){var t=Object(u.a)(c.a.mark(function t(e){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.setState({displayValue:e.target.value});case 1:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n.processInput=function(){var t=Object(u.a)(c.a.mark(function t(e){var a,r,i,o;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(a=n.props,r=a.TM,i=a.updateTM,o=e.target.value,/.*(?:\[|\])/g.test(o)){t.next=7;break}return r.setInput(o),t.next=7,i();case 7:n.setFocusOff();case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n.setFocusOn=function(){n.setState({focus:!0})},n.setFocusOff=function(){n.setState({focus:!1})},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){var t=this.props.TM,e=this.state,n=e.displayValue,a=e.focus;n===t.toString()||a||this.setState({displayValue:t.toString()})}},{key:"render",value:function(){var t=this.state.displayValue,e=this.props.TM;return r.a.createElement(q.a,{fluid:!0,className:"d-flex align-items-center Display"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h6",null,"Turing Machine Simulation"),r.a.createElement(m.a,{size:"sm"},r.a.createElement(g.a,{type:"text",name:"tmDisplay",spellCheck:"false",className:"DisplayArea",value:t,onFocus:this.setFocusOn,onChange:this.updateInput,onBlur:this.processInput}),r.a.createElement(v.a,{addonType:"append"},r.a.createElement(y.a,{style:{border:"none"}},"q"+e.getState()))),r.a.createElement("span",{className:"OutputText"},"Output: "+e.getOutput())))}}]),e}(a.Component)),k=n(36),O=n(23),w=n(20),M=n(69),E=n(66),S=n(68),x=n(67),C="# Binary addition TM program\n# Outputs the addition of a set of binary numbers.\n# Accepts multiple binary numbers of any length.\n\n# Mark start of tape\nq0]r (1, q1) (0, q1) \nq1]l (#/S, q2)\n\n# Mark end of tape\nq2]r (#, q3)\nq3]r (#, q4) (1, q2) (0, q2)\nq4]l (#/E, q5)\nq5]l (S, q6)\n\n# Make enough space for output\nq6]r (1/X, q7) (0/Y, q7) (#/C, q10) (E/#, q13) \n\tq7]r (E, q8)\n\tq8]r (#/0, q9) (A/0, q9)\n\tq9]l (X/1, q6) (Y/0, q6)\n\n\tq10]r (E, q11)\n\tq11]r (0/A, q11) (#/A, q12)\n    q12]l (C/#, q6) \n\n# Set new marks for current input and end of tape\nq13]r (A/0, q13) (#/0,q14)\nq14]r (#/E, q15)\nq15]l (S/#, q16)\nq16]r (#/C, q17)\n\n# Add current input to output sum\nq17]l (1/X, q18) (0/Y, q21) (#, q24)\n\tq18]r (X/1, q19) (Y/0, q19) (E, q19)\n    q19]l (1/Y, q20) (0/X, q23)\n    q20]l (1/0, q20) (0/1, q23)\n    \n    q21]r (X/1, q22) (Y/0, q22) (E, q22)\n    q22]l (1/X, q23) (0/Y, q23)\n    \n    q23]l (X/1, q17) (Y/0, q17)\n   \n# Reset tokens and repeat sum with next input   \nq24]r (C/#, q25)\nq25]r (#/C, q26) (E/#, q28)\nq26]r (X/1, q27) (Y/0, q27)\nq27]l (C, q17)\n\n# Move to final output position, clear unused zeroes and halt\nq28]l (X/1, q29) (Y/0, q29)\nq29]l (#, q30)\nq30]r (1, q31) (#, qh)\nq31]l (0/#, qh) (#, qh)\nq32]l (0, q31)\n",j=[{name:"Arithmetic Multiply",sampleInput:"1111#11",code:"# Multiply TM program\n# Outputs the multiplication of two inputs on alphabet {1}*\n\n# For each multiplicand, copy input to end of tape\nq0]r (#, q1) (1, q0)\nq1]r (1/Y, q2) (#, q8)    \nq2]l (#, q3)\n\n# Copy first input at end of tape\nq3]l (1/X, q4) (#, q0)   \nq4]r (#, q5)        \nq5]r (#, q6)\nq6]r (#/1, q7)\nq7]l (X/1, q3)          \n\n# All multiplicands processed, finish \nq8]l (Y/1, q8) (#, q9)\nq9]r (#, qh)"},{name:"Binary Addition",sampleInput:"11101#10110",code:C},{name:"Copy Paste",sampleInput:"10110",code:"# CopyPaste TM program\n# Returns an input on {1,0}* replicated.\n\nq0]r (1/X, q1) (0/Y, q2) (#, qh)\nq1]r (#/N, q6)\nq2]r (#/M, q6)\nq3]r (1/X, q4) (0/Y, q5) (N/1, q7) (M/0, q7)\nq4]r (#/1, q6)\nq5]r (#/0, q6)\nq6]l (X/1, q3) (Y/0, q3) \nq7]l (#, qh)"},{name:"Reverse",sampleInput:"11001",code:"# Reverse TM program\n# Reverses the input string on {0,1}*.\n\nq0]r (#, q1)\nq1]l (1/X, q2) (0/Y, q4) (#, q7)\nq2]r (#, q3)\nq3]r (#/1, q6)\nq4]r (#, q5)\nq5]r (#/0, q6)\nq6]l (X/1, q1) (Y/0, q1)\nq7]r (#, qh)"}],T={display:"inline"},I={borderRadius:"50%",color:"#444",width:"21px",height:"21px",marginTop:"-10px",marginRight:"10px",padding:"1px 3px 0px 0px",background:"#b0c3cf",border:"none"},N=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={dropdownOpen:!1},n.toggle=function(){n.setState(function(t){return{dropdownOpen:!t.dropdownOpen}})},n.onSelection=function(t){var e=j[t],a=e.code,r=e.sampleInput;n.props.onSelection&&n.props.onSelection(a,r)},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement(M.a,{size:"sm",isOpen:this.state.dropdownOpen,toggle:this.toggle,style:T},r.a.createElement(E.a,{caret:!0,style:I}),r.a.createElement(S.a,null,r.a.createElement(x.a,{header:!0},"Programs"),r.a.createElement(x.a,{divider:!0}),j.map(function(e,n){return r.a.createElement(x.a,{onClick:function(){return t.onSelection(n)},key:n},e.name)})))}}]),e}(a.Component),P=(n(55),function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={play:null},n.simulationReset=Object(u.a)(c.a.mark(function t(){var e,a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.props,a=e.TM,r=e.updateTM,n.stopSimulation(),a.resetTape(),a.setInput(a.input),r();case 5:case"end":return t.stop()}},t)})),n.simulationBack=Object(u.a)(c.a.mark(function t(){var e,a,r;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.props,a=e.TM,r=e.updateTM,n.stopSimulation(),a.stepBack(),r();case 4:case"end":return t.stop()}},t)})),n.simulationStep=Object(u.a)(c.a.mark(function t(){var e,a,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.props,a=e.TM,r=e.program,i=e.updateTM,a.isDone()&&n.stopSimulation(),a.step(r),i();case 4:case"end":return t.stop()}},t)})),n.simulationPlay=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:null===(e=n.state.play)?e=setInterval(n.simulationStep,200):(clearInterval(e),e=null),n.setState({play:e});case 3:case"end":return t.stop()}},t)})),n.simulationFastforward=Object(u.a)(c.a.mark(function t(){var e,a,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:for(e=n.props,a=e.TM,r=e.program,i=e.updateTM,n.stopSimulation();!a.isDone();)a.step(r);i();case 4:case"end":return t.stop()}},t)})),n.stopSimulation=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:null!==(e=n.state.play)&&(clearInterval(e),n.setState({play:null}));case 2:case"end":return t.stop()}},t)})),n.getPlayIcon=function(){return n.state.play?w.d:w.e},n.getPlayStyle=function(){return n.state.play?{}:{paddingLeft:"8px"}},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.getPlayIcon();return r.a.createElement("div",{className:"container-fluid ControlPanel"},r.a.createElement(N,{className:"float-left",onSelection:this.props.onProgramSelection}),r.a.createElement("div",{className:"EditorMsg"},"Editor"),r.a.createElement("div",{className:"float-right"},r.a.createElement(k.a,{color:"light",className:"ControlButton",onClick:this.simulationReset},r.a.createElement(O.a,{icon:w.f})),"  ",r.a.createElement(k.a,{color:"light",className:"ControlButton",onClick:this.simulationBack},r.a.createElement(O.a,{icon:w.a})),"  ",r.a.createElement(k.a,{color:"light",className:"ControlButton",onClick:this.simulationStep},r.a.createElement(O.a,{icon:w.b})),"  ",r.a.createElement(k.a,{color:"light",className:"ControlButton",onClick:this.simulationPlay,style:this.getPlayStyle()},r.a.createElement(O.a,{icon:t,style:{height:"15px"}})),"  ",r.a.createElement(k.a,{color:"light",className:"ControlButton",onClick:this.simulationFastforward},r.a.createElement(O.a,{icon:w.c}))))}}]),e}(a.Component)),A=n(37),X=(n(56),n(57),n(24)),Y=n.n(X);n(58);Y.a.defineSimpleMode("tm-custom",{start:[{regex:/^(q[0-9]+])\s*([rl])/,token:["tag","atom"]},{regex:/\(\s*(?:.\s*\/\s*.\s*|.\s*),\s*(q(?:h|[0-9]+))\s*\)/,token:["attribute"]},{regex:/#.*/,token:"comment"}],meta:{lineComment:"#"}});n(59);var B=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={previousCodeLength:null,code:""},n.updateCode=function(){var t=Object(u.a)(c.a.mark(function t(e){var a,r,i;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:a=n.props,r=a.program,i=a.updateProgram,n.setState({code:e}),r.loadCode(e),i();case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),n.handleChange=function(){var t=Object(u.a)(c.a.mark(function t(e,a,r){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n.updateCode(r);case 1:case"end":return t.stop()}},t)}));return function(e,n,a){return t.apply(this,arguments)}}(),n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidUpdate",value:function(){var t=this.props.defaultCode,e=this.state.previousCodeLength;t.length!==e&&(this.setState({previousCodeLength:t.length}),this.updateCode(t))}},{key:"render",value:function(){return r.a.createElement("div",{style:{height:"calc(100% - 200px"}},r.a.createElement(A.Controlled,{value:this.state.code,onBeforeChange:this.handleChange,options:{mode:"tm-custom",theme:"xq-light",lineNumbers:!0}}))}}]),e}(a.Component),D=(n(60),n(27)),R=function(){function t(){Object(p.a)(this,t),this.input="",this.tape=["#"],this.position=0,this.state=0,this.previous=[]}return Object(l.a)(t,[{key:"resetTape",value:function(){this.tape=["#"],this.position=0,this.state=0,this.previous=[]}},{key:"setInput",value:function(t){this.resetTape();for(var e=this.position;"#"===t[0];)t=t.substring(1);for(;"#"===t[t.length-1];)t=t.substring(0,t.length-1);this.input=t;for(var n=0;n<t.length;n++)this.tape[e+n+1]=t.charAt(n);this.tape.push("#")}},{key:"step",value:function(t){var e,n,a,r,i;if(!this.isDone()&&(this.pushState(),this.position===this.tape.length-1&&this.tape.push("#"),e=this.state,n=t.indexedMap[e].direction,this.position+=n?1:-1,!(this.position<0)))return a=this.tape[this.position],null!=t.indexedMap[e].targets[a]?(r=t.indexedMap[e].targets[a].replace,i=t.indexedMap[e].targets[a].nextState):(r=a,i=e),this.tape[this.position]=r,this.state=i,this.formatTape(),this.toString()}},{key:"stepBack",value:function(){if(0!==this.previous.length){var t=this.previous.pop(),e=t.tape,n=t.position,a=t.state;this.tape=Object(D.a)(e),this.position=n,this.state=a}}},{key:"pushState",value:function(){var t={tape:Object(D.a)(this.tape),position:this.position,state:this.state};this.previous.push(t)}},{key:"getOutput",value:function(){if(!this.isDone())return"";if(this.isNonEnding())return"undefined";for(var t="",e=this.position+1;e<this.tape.length-1;e++)t+=this.tape[e];return""===t?"\u03bb":t}},{key:"isDone",value:function(){return"h"===this.state||this.isNonEnding()}},{key:"isNonEnding",value:function(){return this.position>512||this.position<0}},{key:"formatTape",value:function(){for(;this.tape.length>2&&this.position<this.tape.length-1&&"#"===this.tape[this.tape.length-2];)this.tape.pop()}},{key:"toString",value:function(){for(var t="",e=0;e<this.tape.length;e++)e===this.position?t+="["+this.tape[e]+"]":t+=this.tape[e];return t}},{key:"getState",value:function(){return this.state}}]),t}(),F=function(){function t(e,n,a,r,i){Object(p.a)(this,t),this.state=e,this.direction=n,this.target=a,this.replace=r,this.nextState=i}return Object(l.a)(t,[{key:"toString",value:function(){var t="";return t+="q"+this.state+"]",t+=this.direction?"r":"l",t+="("+this.target+"/"+this.replace+",q"+this.nextState+")"}}]),t}(),V=function(){function t(){Object(p.a)(this,t),this.instructions=[],this.indexedMap={}}return Object(l.a)(t,[{key:"addInstruction",value:function(t){this.instructions.push(t),null==this.indexedMap[t.state]&&(this.indexedMap[t.state]={direction:null,targets:{}}),this.indexedMap[t.state].direction=t.direction,this.indexedMap[t.state].targets[t.target]={replace:t.replace,nextState:t.nextState}}},{key:"loadCode",value:function(t){var e,n,a,r=this,i=t.split(/\r?\n/);e=/^q([0-9]+)\]([lr])(\(.\/.,q(?:h|[0-9]+)\))*(#.*)?$/,n=/\((.)\/(.),q((?:h|[0-9]+))\)/g,a=/\((.)\/(.),q((?:h|[0-9]+))\)/,this.clear(),i.forEach(function(t){var i=(t=(t=t.replace(/\s+/g,"")).replace(/\((.),q((?:h|[0-9]+))\)/g,"($1/$1,q$2)")).match(e);if(null!=i){var o,s,c,u,p;o=i[1],s="r"===i[2];var l=t.match(n);null!=l&&l.forEach(function(t){var e=t.match(a);null!=e&&(c=e[1],u=e[2],p=e[3],r.addInstruction(new F(o,s,c,u,p)))})}})}},{key:"clear",value:function(){this.instructions=[],this.indexedMap={}}},{key:"toString",value:function(){var t="";return this.instructions.forEach(function(e){t+=e.toString()+"\n"}),t}}]),t}(),$=function(t){function e(){var t,n;Object(p.a)(this,e);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(t=Object(d.a)(e)).call.apply(t,[this].concat(r)))).state={TM:new R,program:new V,defaultCode:""},n.updateTM=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.state.TM,n.setState({TM:e});case 2:case"end":return t.stop()}},t)})),n.updateProgram=Object(u.a)(c.a.mark(function t(){var e;return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e=n.state.program,n.setState({program:e});case 2:case"end":return t.stop()}},t)})),n.setDefaultCode=function(t,e){n.state.TM.setInput(e),n.setState({defaultCode:t}),n.updateTM()},n}return Object(f.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){this.setDefaultCode(C,"11011#10110")}},{key:"render",value:function(){var t=this.state,e=t.TM,n=t.program,a=t.defaultCode;return r.a.createElement("div",{className:"App"},r.a.createElement(b,{TM:e,updateTM:this.updateTM}),r.a.createElement(P,{TM:e,program:n,updateTM:this.updateTM,updateProgram:this.updateProgram,onProgramSelection:this.setDefaultCode}),r.a.createElement(B,{defaultCode:a,TM:e,program:n,updateTM:this.updateTM,updateProgram:this.updateProgram}))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[38,1,2]]]);
//# sourceMappingURL=main.922f774c.chunk.js.map