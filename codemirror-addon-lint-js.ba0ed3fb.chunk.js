(self.webpackChunkvictorfug_cms=self.webpackChunkvictorfug_cms||[]).push([[953],{96477:(r,w,l)=>{(function(a){a(l(4631))})(function(a){"use strict";function u(s,e){if(!window.JSHINT)return window.console&&window.console.error("Error: window.JSHINT not defined, CodeMirror JavaScript linting cannot run."),[];e.indent||(e.indent=1),JSHINT(s,e,e.globals);var i=JSHINT.data().errors,n=[];return i&&f(i,n),n}a.registerHelper("lint","javascript",u);function f(s,e){for(var i=0;i<s.length;i++){var n=s[i];if(n){if(n.line<=0){window.console&&window.console.warn("Cannot display JSHint error (invalid line "+n.line+")",n);continue}var c=n.character-1,t=c+1;if(n.evidence){var o=n.evidence.substring(c).search(/.\b/);o>-1&&(t+=o)}var d={message:n.reason,severity:n.code&&n.code.startsWith("W")?"warning":"error",from:a.Pos(n.line-1,c),to:a.Pos(n.line-1,t)};e.push(d)}}}})}}]);
