"use strict";(self.webpackChunkcom_foxdebug_acode=self.webpackChunkcom_foxdebug_acode||[]).push([[541],{81541:function(n,e,c){c.r(e),c.d(e,{default:function(){return r}});var i=c(8187),s=c.n(i),a=c(53124),t=c(73305),o=c(2802),d=c(79870),r=function(){return new Promise((n=>{const{encodings:e}=d.Z,c=s()("i",{className:"icon search",dataset:{action:"search"}}),i=(0,t.Z)(strings.encoding),r=s().parse('<div tabindex="-1" class="main" id="mode-selector"></div>'),l=s().parse(a.Z.render('<ul class="list" id="mode-list">{{#encodings}}\r\n  {{#.}}\r\n  <li tabindex="1" class="tile" data-action="select" data-encoding="{{.}}">\r\n    <span class="icon no-icon"></span>\r\n    <div class="text">\r\n      <span>{{.}}</span>\r\n    </div>\r\n  </li>\r\n  {{/.}}\r\n  {{/encodings}}</ul>',{encodings:e}));function u(e){const c=e.target,{action:s,encoding:a}=c.dataset;s&&("search"===s?(0,o.Z)(l):"select"===s&&(n(a),i.hide()))}i.addEventListener("click",u),i.body=r,i.header.append(c),document.body.append(i),setTimeout((()=>{r.append(l)}),300),actionStack.push({id:"encodings",action:function(){i.hide()}}),i.onhide=function(){actionStack.remove("encodings"),r.removeEventListener("click",u)}}))}}}]);