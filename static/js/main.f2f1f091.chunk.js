(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,n){e.exports=n(73)},36:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(28),l=n.n(i),o=n(4),c=n(5),s=n(7),m=n(6),u=n(8),f=(n(36),n(29)),p=(n(70),function(e){function t(){var e,n;Object(o.a)(this,t);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).terminal=new f.Terminal({cursorBlink:!0}),n.lineBuffer="",n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.createElement("div",{className:"terminal",ref:function(t){return e.buildTerminal(t)}})}},{key:"buildTerminal",value:function(e){var t=this;if(!e)throw new Error("Ref was not passed!");this.terminal.open(e),this.terminal.writeln("Welcome to my portfolio"),this.terminal.writeln("There's some hidden functionality here. See if you can figure it out."),this.terminal.writeln("No cheating!"),this.prompt(),this.terminal.on("key",function(e,n){var r=!n.altKey&&!n.ctrlKey&&!n.metaKey;if(13===n.keyCode)t.lineBuffer.length>0&&t.processCommand(t.lineBuffer),t.lineBuffer="",t.prompt();else if(8===n.keyCode){if(0===t.lineBuffer.length)return;t.lineBuffer=t.lineBuffer.substring(0,t.lineBuffer.length-1),t.terminal.write("\b \b")}else r&&(t.lineBuffer=t.lineBuffer.concat(e),t.terminal.write(e))})}},{key:"prompt",value:function(){this.terminal.write("\r\n$ ")}},{key:"processCommand",value:function(e){switch(e){case"clear":this.terminal.clear();break;default:this.terminal.write("\r\n\n"),this.printMessage("Unrecognized Command: "+e)}}},{key:"printMessage",value:function(e){this.terminal.writeln("  "+e)}}]),t}(r.Component)),h=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"section"},r.createElement("h2",null,this.props.title),this.props.children)}}]),t}(r.Component),d=(n(71),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.createElement("div",{className:"companies"},this.props.employerList.map(function(t){return e.renderEmployer(t)}))}},{key:"renderEmployer",value:function(e){return r.createElement("a",{key:e.href,href:e.href,target:"_blank"},r.createElement("img",{src:e.src,alt:e.name}))}}]),t}(r.Component)),b=[{name:"Spiff Pty Ltd",href:"https://editor.spiff.com.au/",src:"img/spiff-logo.png"},{name:"Learn District",href:"http://learndistrict.com/",src:"img/ld-logo.png"}],g=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"flex-wrapper"},a.a.createElement("div",{className:"main-content"},a.a.createElement("h1",{className:"title"},"Liam Parker"),a.a.createElement("div",{className:"sub"},a.a.createElement(h,{title:"About me."},a.a.createElement("img",{className:"personal-photo",src:"https://avatars3.githubusercontent.com/u/7558040?s=460&v=4"}),a.a.createElement("p",{className:"bio"},"I am a junior software developer based in Melbourne, Australia. I currently work at #Spiff, an exciting tech startup in Southbank. We're working on a cloud based packaging customization platform.")),a.a.createElement(h,{title:"People I've worked with."},a.a.createElement(d,{employerList:b})),a.a.createElement(h,{title:"Contributions and personal work."},a.a.createElement("p",null,"Coming Soon")),a.a.createElement(h,{title:"Links."},a.a.createElement("div",{className:"social-media"},a.a.createElement("a",{href:"https://github.com/elInfidel",target:"_blank"},a.a.createElement("img",{src:"img/github-logo.png"})),a.a.createElement("a",{href:"https://www.linkedin.com/in/liam-parker-40063648/",target:"_blank"},a.a.createElement("img",{src:"img/linked-in-logo.png"})))))),a.a.createElement("div",{className:"term-wrapper"},a.a.createElement(p,null)))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(72),l.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.f2f1f091.chunk.js.map