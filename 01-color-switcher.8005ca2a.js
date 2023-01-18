const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let n=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(function(){n=setInterval(o,1e3)})),e.addEventListener("click",(function(){clearInterval(n)}));
//# sourceMappingURL=01-color-switcher.8005ca2a.js.map
