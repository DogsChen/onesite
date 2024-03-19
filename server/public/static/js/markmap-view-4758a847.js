import{H as K,g as ot,d as at,e as T,f as b,n as A}from"./markmap-common-cbf3a342.js";import"./d3-transition-a9c794af.js";import{t as O,z as lt,i as ct}from"./d3-zoom-b1d61cbc.js";import{o as ht}from"./d3-scale-50cba69f.js";import{s as dt}from"./d3-scale-chromatic-d8eacfae.js";import{s as ut}from"./d3-selection-48aa1586.js";import{l as pt}from"./d3-shape-990556c2.js";import{m as V,a as W,b as ft}from"./d3-array-4780ac64.js";/*! markmap-view v0.15.0 | MIT License */function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},k.apply(this,arguments)}function gt(e){var t=0,i=e.children,n=i&&i.length;if(!n)t=1;else for(;--n>=0;)t+=i[n].value;e.value=t}function mt(){return this.eachAfter(gt)}function yt(e){var t=this,i,n=[t],s,o,l;do for(i=n.reverse(),n=[];t=i.pop();)if(e(t),s=t.children,s)for(o=0,l=s.length;o<l;++o)n.push(s[o]);while(n.length);return this}function xt(e){for(var t=this,i=[t],n,s;t=i.pop();)if(e(t),n=t.children,n)for(s=n.length-1;s>=0;--s)i.push(n[s]);return this}function vt(e){for(var t=this,i=[t],n=[],s,o,l;t=i.pop();)if(n.push(t),s=t.children,s)for(o=0,l=s.length;o<l;++o)i.push(s[o]);for(;t=n.pop();)e(t);return this}function St(e){return this.eachAfter(function(t){for(var i=+e(t.data)||0,n=t.children,s=n&&n.length;--s>=0;)i+=n[s].value;t.value=i})}function zt(e){return this.eachBefore(function(t){t.children&&t.children.sort(e)})}function kt(e){for(var t=this,i=bt(t,e),n=[t];t!==i;)t=t.parent,n.push(t);for(var s=n.length;e!==i;)n.splice(s,0,e),e=e.parent;return n}function bt(e,t){if(e===t)return e;var i=e.ancestors(),n=t.ancestors(),s=null;for(e=i.pop(),t=n.pop();e===t;)s=e,e=i.pop(),t=n.pop();return s}function Et(){for(var e=this,t=[e];e=e.parent;)t.push(e);return t}function Ct(){var e=[];return this.each(function(t){e.push(t)}),e}function wt(){var e=[];return this.eachBefore(function(t){t.children||e.push(t)}),e}function $t(){var e=this,t=[];return e.each(function(i){i!==e&&t.push({source:i.parent,target:i})}),t}function L(e,t){var i=new N(e),n=+e.value&&(i.value=e.value),s,o=[i],l,a,h,f;for(t==null&&(t=jt);s=o.pop();)if(n&&(s.value=+s.data.value),(a=t(s.data))&&(f=a.length))for(s.children=new Array(f),h=f-1;h>=0;--h)o.push(l=s.children[h]=new N(a[h])),l.parent=s,l.depth=s.depth+1;return i.eachBefore(_t)}function Xt(){return L(this).eachBefore(Nt)}function jt(e){return e.children}function Nt(e){e.data=e.data.data}function _t(e){var t=0;do e.height=t;while((e=e.parent)&&e.height<++t)}function N(e){this.data=e,this.depth=this.height=0,this.parent=null}N.prototype=L.prototype={constructor:N,count:mt,each:yt,eachAfter:vt,eachBefore:xt,sum:St,sort:zt,path:kt,ancestors:Et,descendants:Ct,leaves:wt,links:$t,copy:Xt};var Rt="d3-flextree",Mt="2.1.2",Tt="build/d3-flextree.js",At="index",Ot={name:"Chris Maloney",url:"http://chrismaloney.org"},Ht="Flexible tree layout algorithm that allows for variable node sizes.",Bt=["d3","d3-module","layout","tree","hierarchy","d3-hierarchy","plugin","d3-plugin","infovis","visualization","2d"],Dt="https://github.com/klortho/d3-flextree",Ft="WTFPL",Lt={type:"git",url:"https://github.com/klortho/d3-flextree.git"},It={clean:"rm -rf build demo test","build:demo":"rollup -c --environment BUILD:demo","build:dev":"rollup -c --environment BUILD:dev","build:prod":"rollup -c --environment BUILD:prod","build:test":"rollup -c --environment BUILD:test",build:"rollup -c",lint:"eslint index.js src","test:main":"node test/bundle.js","test:browser":"node test/browser-tests.js",test:"npm-run-all test:*",prepare:"npm-run-all clean build lint test"},Vt={"d3-hierarchy":"^1.1.5"},Wt={"babel-plugin-external-helpers":"^6.22.0","babel-preset-es2015-rollup":"^3.0.0",d3:"^4.13.0","d3-selection-multi":"^1.0.1",eslint:"^4.19.1",jsdom:"^11.6.2","npm-run-all":"^4.1.2",rollup:"^0.55.3","rollup-plugin-babel":"^2.7.1","rollup-plugin-commonjs":"^8.0.2","rollup-plugin-copy":"^0.2.3","rollup-plugin-json":"^2.3.0","rollup-plugin-node-resolve":"^3.0.2","rollup-plugin-uglify":"^3.0.0","uglify-es":"^3.3.9"},Yt={name:Rt,version:Mt,main:Tt,module:At,"jsnext:main":"index",author:Ot,description:Ht,keywords:Bt,homepage:Dt,license:Ft,repository:Lt,scripts:It,dependencies:Vt,devDependencies:Wt};const{version:Pt}=Yt,Ut=Object.freeze({children:e=>e.children,nodeSize:e=>e.data.size,spacing:0});function Z(e){const t=Object.assign({},Ut,e);function i(a){const h=t[a];return typeof h=="function"?h:()=>h}function n(a){const h=l(o(),a,f=>f.children);return h.update(),h.data}function s(){const a=i("nodeSize"),h=i("spacing");return class G extends L.prototype.constructor{constructor(c){super(c)}copy(){const c=l(this.constructor,this,u=>u.children);return c.each(u=>u.data=u.data.data),c}get size(){return a(this)}spacing(c){return h(this,c)}get nodes(){return this.descendants()}get xSize(){return this.size[0]}get ySize(){return this.size[1]}get top(){return this.y}get bottom(){return this.y+this.ySize}get left(){return this.x-this.xSize/2}get right(){return this.x+this.xSize/2}get root(){const c=this.ancestors();return c[c.length-1]}get numChildren(){return this.hasChildren?this.children.length:0}get hasChildren(){return!this.noChildren}get noChildren(){return this.children===null}get firstChild(){return this.hasChildren?this.children[0]:null}get lastChild(){return this.hasChildren?this.children[this.numChildren-1]:null}get extents(){return(this.children||[]).reduce((c,u)=>G.maxExtents(c,u.extents),this.nodeExtents)}get nodeExtents(){return{top:this.top,bottom:this.bottom,left:this.left,right:this.right}}static maxExtents(c,u){return{top:Math.min(c.top,u.top),bottom:Math.max(c.bottom,u.bottom),left:Math.min(c.left,u.left),right:Math.max(c.right,u.right)}}}}function o(){const a=s(),h=i("nodeSize"),f=i("spacing");return class extends a{constructor(c){super(c),Object.assign(this,{x:0,y:0,relX:0,prelim:0,shift:0,change:0,lExt:this,lExtRelX:0,lThr:null,rExt:this,rExtRelX:0,rThr:null})}get size(){return h(this.data)}spacing(c){return f(this.data,c.data)}get x(){return this.data.x}set x(c){this.data.x=c}get y(){return this.data.y}set y(c){this.data.y=c}update(){return q(this),J(this),this}}}function l(a,h,f){const c=(u,m)=>{const d=new a(u);Object.assign(d,{parent:m,depth:m===null?0:m.depth+1,height:0,length:1});const x=f(u)||[];return d.children=x.length===0?null:x.map(v=>c(v,d)),d.children&&Object.assign(d,d.children.reduce((v,S)=>({height:Math.max(v.height,S.height+1),length:v.length+S.length}),d)),d};return c(h,null)}return Object.assign(n,{nodeSize(a){return arguments.length?(t.nodeSize=a,n):t.nodeSize},spacing(a){return arguments.length?(t.spacing=a,n):t.spacing},children(a){return arguments.length?(t.children=a,n):t.children},hierarchy(a,h){const f=typeof h=="undefined"?t.children:h;return l(s(),a,f)},dump(a){const h=i("nodeSize"),f=c=>u=>{const m=c+"  ",d=c+"    ",{x,y:v}=u,S=h(u),y=u.children||[],g=y.length===0?" ":`,${m}children: [${d}${y.map(f(d)).join(d)}${m}],${c}`;return`{ size: [${S.join(", ")}],${m}x: ${x}, y: ${v}${g}},`};return f(`
`)(a)}}),n}Z.version=Pt;const q=(e,t=0)=>(e.y=t,(e.children||[]).reduce((i,n)=>{const[s,o]=i;q(n,e.y+e.ySize);const l=(s===0?n.lExt:n.rExt).bottom;s!==0&&Gt(e,s,o);const a=ie(l,s,o);return[s+1,a]},[0,null]),Kt(e),ne(e),e),J=(e,t,i)=>{typeof t=="undefined"&&(t=-e.relX-e.prelim,i=0);const n=t+e.relX;return e.relX=n+e.prelim-i,e.prelim=0,e.x=i+e.relX,(e.children||[]).forEach(s=>J(s,n,e.x)),e},Kt=e=>{(e.children||[]).reduce((t,i)=>{const[n,s]=t,o=n+i.shift,l=s+o+i.change;return i.relX+=l,[o,l]},[0,0])},Gt=(e,t,i)=>{const n=e.children[t-1],s=e.children[t];let o=n,l=n.relX,a=s,h=s.relX,f=!0;for(;o&&a;){o.bottom>i.lowY&&(i=i.next);const c=l+o.prelim-(h+a.prelim)+o.xSize/2+a.xSize/2+o.spacing(a);(c>0||c<0&&f)&&(h+=c,Zt(s,c),qt(e,t,i.index,c)),f=!1;const u=o.bottom,m=a.bottom;u<=m&&(o=Qt(o),o&&(l+=o.relX)),u>=m&&(a=Jt(a),a&&(h+=a.relX))}!o&&a?te(e,t,a,h):o&&!a&&ee(e,t,o,l)},Zt=(e,t)=>{e.relX+=t,e.lExtRelX+=t,e.rExtRelX+=t},qt=(e,t,i,n)=>{const s=e.children[t],o=t-i;if(o>1){const l=n/o;e.children[i+1].shift+=l,s.shift-=l,s.change-=n-l}},Jt=e=>e.hasChildren?e.firstChild:e.lThr,Qt=e=>e.hasChildren?e.lastChild:e.rThr,te=(e,t,i,n)=>{const s=e.firstChild,o=s.lExt,l=e.children[t];o.lThr=i;const a=n-i.relX-s.lExtRelX;o.relX+=a,o.prelim-=a,s.lExt=l.lExt,s.lExtRelX=l.lExtRelX},ee=(e,t,i,n)=>{const s=e.children[t],o=s.rExt,l=e.children[t-1];o.rThr=i;const a=n-i.relX-s.rExtRelX;o.relX+=a,o.prelim-=a,s.rExt=l.rExt,s.rExtRelX=l.rExtRelX},ne=e=>{if(e.hasChildren){const t=e.firstChild,i=e.lastChild,n=(t.prelim+t.relX-t.xSize/2+i.relX+i.prelim+i.xSize/2)/2;Object.assign(e,{prelim:n,lExt:t.lExt,lExtRelX:t.lExtRelX,rExt:i.rExt,rExtRelX:i.rExtRelX})}},ie=(e,t,i)=>{for(;i!==null&&e>=i.lowY;)i=i.next;return{lowY:e,index:t,next:i}};/*! @gera2ld/jsx-dom v2.2.2 | ISC License */const Q=1,tt=2,re="http://www.w3.org/2000/svg",H="http://www.w3.org/1999/xlink",se={show:H,actuate:H,href:H},oe=e=>typeof e=="string"||typeof e=="number",ae=e=>(e==null?void 0:e.vtype)===Q,le=e=>(e==null?void 0:e.vtype)===tt;function j(e,t){let i;if(typeof e=="string")i=Q;else if(typeof e=="function")i=tt;else throw new Error("Invalid VNode type");return{vtype:i,type:e,props:t}}function ce(e){return e.children}const he={isSvg:!1};function Y(e,t){Array.isArray(t)||(t=[t]),t=t.filter(Boolean),t.length&&e.append(...t)}function de(e,t,i){for(const n in t)if(!(n==="key"||n==="children"||n==="ref"))if(n==="dangerouslySetInnerHTML")e.innerHTML=t[n].__html;else if(n==="innerHTML"||n==="textContent"||n==="innerText"||n==="value"&&["textarea","select"].includes(e.tagName)){const s=t[n];s!=null&&(e[n]=s)}else n.startsWith("on")?e[n.toLowerCase()]=t[n]:pe(e,n,t[n],i.isSvg)}const ue={className:"class",labelFor:"for"};function pe(e,t,i,n){if(t=ue[t]||t,i===!0)e.setAttribute(t,"");else if(i===!1)e.removeAttribute(t);else{const s=n?se[t]:void 0;s!==void 0?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}}function fe(e){return e.reduce((t,i)=>t.concat(i),[])}function F(e,t){return Array.isArray(e)?fe(e.map(i=>F(i,t))):I(e,t)}function I(e,t=he){if(e==null||typeof e=="boolean")return null;if(e instanceof Node)return e;if(le(e)){const{type:i,props:n}=e;if(i===ce){const o=document.createDocumentFragment();if(n.children){const l=F(n.children,t);Y(o,l)}return o}const s=i(n);return I(s,t)}if(oe(e))return document.createTextNode(`${e}`);if(ae(e)){let i;const{type:n,props:s}=e;if(!t.isSvg&&n==="svg"&&(t=Object.assign({},t,{isSvg:!0})),t.isSvg?i=document.createElementNS(re,n):i=document.createElement(n),de(i,s,t),s.children){let l=t;t.isSvg&&n==="foreignObject"&&(l=Object.assign({},l,{isSvg:!1}));const a=F(s.children,l);a!=null&&Y(i,a)}const{ref:o}=s;return typeof o=="function"&&o(i),i}throw new Error("mount: Invalid Vnode!")}function B(e){return I(e)}var ge=".markmap{font:300 16px/20px sans-serif}.markmap-link{fill:none}.markmap-node>circle{cursor:pointer}.markmap-foreign{display:inline-block}.markmap-foreign a{color:#0097e6}.markmap-foreign a:hover{color:#00a8ff}.markmap-foreign code{background-color:#f0f0f0;border-radius:2px;color:#555;font-size:calc(1em - 2px);padding:.25em}.markmap-foreign pre{margin:0}.markmap-foreign pre>code{display:block}.markmap-foreign del{text-decoration:line-through}.markmap-foreign em{font-style:italic}.markmap-foreign strong{font-weight:700}.markmap-foreign mark{background:#ffeaa7}",me=".markmap-container{height:0;left:-100px;overflow:hidden;position:absolute;top:-100px;width:0}.markmap-container>.markmap-foreign{display:inline-block}.markmap-container>.markmap-foreign>div:last-child{white-space:nowrap}";function P(e){const t=e.data;return Math.max(4-2*t.depth,1.5)}function U(e,t){const i=ft(e,t);return e[i]}function D(e){e.stopPropagation()}function ye(){return{transformHtml:new K}}const xe=new K,ve=ht(dt),Se=typeof navigator!="undefined"&&navigator.userAgent.includes("Macintosh");class _{constructor(t,i){this.options=_.defaultOptions,this.revokers=[],this.handleZoom=n=>{const{transform:s}=n;this.g.attr("transform",s)},this.handlePan=n=>{n.preventDefault();const s=O(this.svg.node()),o=s.translate(-n.deltaX/s.k,-n.deltaY/s.k);this.svg.call(this.zoom.transform,o)},this.handleClick=(n,s)=>{let o=this.options.toggleRecursively;n.ctrlKey&&(o=!o),this.toggleNode(s.data,o)},this.viewHooks=ye(),this.svg=t.datum?t:ut(t),this.styleNode=this.svg.append("style"),this.zoom=lt().filter(n=>this.options.scrollForPan&&n.type==="wheel"?n.ctrlKey&&!n.button:(!n.ctrlKey||n.type==="wheel")&&!n.button).on("zoom",this.handleZoom),this.setOptions(i),this.state={id:this.options.id||this.svg.attr("id")||ot(),minX:0,maxX:0,minY:0,maxY:0},this.g=this.svg.append("g"),this.revokers.push(xe.tap(()=>{this.setData()}))}getStyleContent(){const{style:t}=this.options,{id:i}=this.state,n=typeof t=="function"?t(i):"";return[this.options.embedGlobalCSS&&ge,n].filter(Boolean).join(`
`)}updateStyle(){this.svg.attr("class",at(this.svg.attr("class"),"markmap",this.state.id));const t=this.getStyleContent();this.styleNode.text(t)}toggleNode(t,i=!1){var n;const s=(n=t.payload)!=null&&n.fold?0:1;if(i)T(t,(l,a)=>{l.payload=k({},l.payload,{fold:s}),a()});else{var o;t.payload=k({},t.payload,{fold:(o=t.payload)!=null&&o.fold?0:1})}this.renderData(t)}initializeData(t){let i=0;const{color:n,nodeMinHeight:s,maxWidth:o,initialExpandLevel:l}=this.options,{id:a}=this.state,h=B(j("div",{className:`markmap-container markmap ${a}-g`})),f=B(j("style",{children:[this.getStyleContent(),me].join(`
`)}));document.body.append(h,f);const c=o?`max-width: ${o}px`:"";let u=0;T(t,(d,x,v)=>{var S,y,g;d.children=(S=d.children)==null?void 0:S.map(w=>k({},w)),i+=1;const E=B(j("div",{className:"markmap-foreign",style:c,children:j("div",{dangerouslySetInnerHTML:{__html:d.content}})}));h.append(E),d.state=k({},d.state,{id:i,el:E.firstChild}),d.state.path=[v==null||(y=v.state)==null?void 0:y.path,d.state.id].filter(Boolean).join("."),n(d);const C=((g=d.payload)==null?void 0:g.fold)===2;C?u+=1:(u||l>=0&&d.depth>=l)&&(d.payload=k({},d.payload,{fold:1})),x(),C&&(u-=1)});const m=Array.from(h.childNodes).map(d=>d.firstChild);this.viewHooks.transformHtml.call(this,m),m.forEach(d=>{var x;(x=d.parentNode)==null||x.append(d.cloneNode(!0))}),T(t,(d,x,v)=>{var S;const y=d.state,g=y.el.getBoundingClientRect();d.content=y.el.innerHTML,y.size=[Math.ceil(g.width)+1,Math.max(Math.ceil(g.height),s)],y.key=[v==null||(S=v.state)==null?void 0:S.id,y.id].filter(Boolean).join(".")+d.content,x()}),h.remove(),f.remove()}setOptions(t){this.options=k({},this.options,t),this.options.zoom?this.svg.call(this.zoom):this.svg.on(".zoom",null),this.options.pan?this.svg.on("wheel",this.handlePan):this.svg.on("wheel",null)}setData(t,i){i&&this.setOptions(i),t&&(this.state.data=t),this.state.data&&(this.initializeData(this.state.data),this.updateStyle(),this.renderData())}renderData(t){var i,n;if(!this.state.data)return;const{spacingHorizontal:s,paddingX:o,spacingVertical:l,autoFit:a,color:h}=this.options,f=Z({}).children(r=>{var p;if(!((p=r.payload)!=null&&p.fold))return r.children}).nodeSize(r=>{const[p,z]=r.data.state.size;return[z,p+(p?o*2:0)+s]}).spacing((r,p)=>r.parent===p.parent?l:l*2),c=f.hierarchy(this.state.data);f(c);const u=c.descendants().reverse(),m=c.links(),d=pt(),x=V(u,r=>r.x-r.xSize/2),v=W(u,r=>r.x+r.xSize/2),S=V(u,r=>r.y),y=W(u,r=>r.y+r.ySize-s);Object.assign(this.state,{minX:x,maxX:v,minY:S,maxY:y}),a&&this.fit();const g=t&&u.find(r=>r.data===t)||c,E=(i=g.data.state.x0)!=null?i:g.x,C=(n=g.data.state.y0)!=null?n:g.y,w=this.g.selectAll(b("g")).data(u,r=>r.data.state.key),et=w.enter().append("g").attr("data-depth",r=>r.data.depth).attr("data-path",r=>r.data.state.path).attr("transform",r=>`translate(${C+g.ySize-r.ySize},${E+g.xSize/2-r.xSize})`),R=this.transition(w.exit());R.select("line").attr("x1",r=>r.ySize-s).attr("x2",r=>r.ySize-s),R.select("foreignObject").style("opacity",0),R.attr("transform",r=>`translate(${g.y+g.ySize-r.ySize},${g.x+g.xSize/2-r.xSize})`).remove();const $=w.merge(et).attr("class",r=>{var p;return["markmap-node",((p=r.data.payload)==null?void 0:p.fold)&&"markmap-fold"].filter(Boolean).join(" ")});this.transition($).attr("transform",r=>`translate(${r.y},${r.x-r.xSize/2})`);const nt=$.selectAll(b("line")).data(r=>[r],r=>r.data.state.key).join(r=>r.append("line").attr("x1",p=>p.ySize-s).attr("x2",p=>p.ySize-s),r=>r,r=>r.remove());this.transition(nt).attr("x1",-1).attr("x2",r=>r.ySize-s+2).attr("y1",r=>r.xSize).attr("y2",r=>r.xSize).attr("stroke",r=>h(r.data)).attr("stroke-width",P);const it=$.selectAll(b("circle")).data(r=>{var p;return(p=r.data.children)!=null&&p.length?[r]:[]},r=>r.data.state.key).join(r=>r.append("circle").attr("stroke-width","1.5").attr("cx",p=>p.ySize-s).attr("cy",p=>p.xSize).attr("r",0).on("click",(p,z)=>this.handleClick(p,z)).on("mousedown",D),r=>r,r=>r.remove());this.transition(it).attr("r",6).attr("cx",r=>r.ySize-s).attr("cy",r=>r.xSize).attr("stroke",r=>h(r.data)).attr("fill",r=>{var p;return(p=r.data.payload)!=null&&p.fold&&r.data.children?h(r.data):"#fff"});const rt=$.selectAll(b("foreignObject")).data(r=>[r],r=>r.data.state.key).join(r=>{const p=r.append("foreignObject").attr("class","markmap-foreign").attr("x",o).attr("y",0).style("opacity",0).on("mousedown",D).on("dblclick",D);return p.append("xhtml:div").select(function(M){const X=M.data.state.el.cloneNode(!0);return this.replaceWith(X),X}).attr("xmlns","http://www.w3.org/1999/xhtml"),p},r=>r,r=>r.remove()).attr("width",r=>Math.max(0,r.ySize-s-o*2)).attr("height",r=>r.xSize);this.transition(rt).style("opacity",1);const st=this.g.selectAll(b("path")).data(m,r=>r.target.data.state.key).join(r=>{const p=[C+g.ySize-s,E+g.xSize/2];return r.insert("path","g").attr("class","markmap-link").attr("data-depth",z=>z.target.data.depth).attr("data-path",z=>z.target.data.state.path).attr("d",d({source:p,target:p}))},r=>r,r=>{const p=[g.y+g.ySize-s,g.x+g.xSize/2];return this.transition(r).attr("d",d({source:p,target:p})).remove()});this.transition(st).attr("stroke",r=>h(r.target.data)).attr("stroke-width",r=>P(r.target)).attr("d",r=>{const p=r.source,z=r.target,M=[p.y+p.ySize-s,p.x+p.xSize/2],X=[z.y,z.x+z.xSize/2];return d({source:M,target:X})}),u.forEach(r=>{r.data.state.x0=r.x,r.data.state.y0=r.y})}transition(t){const{duration:i}=this.options;return t.transition().duration(i)}async fit(){const t=this.svg.node(),{width:i,height:n}=t.getBoundingClientRect(),{fitRatio:s}=this.options,{minX:o,maxX:l,minY:a,maxY:h}=this.state,f=h-a,c=l-o,u=Math.min(i/f*s,n/c*s,2),m=ct.translate((i-f*u)/2-a*u,(n-c*u)/2-o*u).scale(u);return this.transition(this.svg).call(this.zoom.transform,m).end().catch(A)}async ensureView(t,i){let n;if(this.g.selectAll(b("g")).each(function(g){g.data===t&&(n=g)}),!n)return;const s=this.svg.node(),{spacingHorizontal:o}=this.options,l=s.getBoundingClientRect(),a=O(s),[h,f]=[n.y,n.y+n.ySize-o+2].map(y=>y*a.k+a.x),[c,u]=[n.x-n.xSize/2,n.x+n.xSize/2].map(y=>y*a.k+a.y),m=k({left:0,right:0,top:0,bottom:0},i),d=[m.left-h,l.width-m.right-f],x=[m.top-c,l.height-m.bottom-u],v=d[0]*d[1]>0?U(d,Math.abs)/a.k:0,S=x[0]*x[1]>0?U(x,Math.abs)/a.k:0;if(v||S){const y=a.translate(v,S);return this.transition(this.svg).call(this.zoom.transform,y).end().catch(A)}}async rescale(t){const i=this.svg.node(),{width:n,height:s}=i.getBoundingClientRect(),o=n/2,l=s/2,a=O(i),h=a.translate((o-a.x)*(1-t)/a.k,(l-a.y)*(1-t)/a.k).scale(t);return this.transition(this.svg).call(this.zoom.transform,h).end().catch(A)}destroy(){this.svg.on(".zoom",null),this.svg.html(null),this.revokers.forEach(t=>{t()})}static create(t,i,n=null){const s=new _(t,i);return n&&(s.setData(n),s.fit()),s}}_.defaultOptions={autoFit:!1,color:e=>{var t;return ve(`${((t=e.state)==null?void 0:t.path)||""}`)},duration:500,embedGlobalCSS:!0,fitRatio:.95,maxWidth:0,nodeMinHeight:16,paddingX:8,scrollForPan:Se,spacingHorizontal:80,spacingVertical:5,initialExpandLevel:-1,zoom:!0,pan:!0,toggleRecursively:!1};export{_ as M};