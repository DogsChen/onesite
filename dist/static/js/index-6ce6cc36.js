import{_ as A,s as G,d as H,e as J}from"./index-8e42ae19.js";import{u as K}from"./vue-router-b5535615.js";import{E as k}from"./element-plus-6e566333.js";import{D as z,r as O,b as Q,R as i,ah as X,e as m,f as y,x as n,j as e,w as t,a7 as Y,m as r,b6 as Z,b5 as ee,F as S,k as I,U as p,q as te,T as u}from"./@vue-a5898d8d.js";import"./axios-f45f83e3.js";import"./vuex-37c0abaa.js";import"./js-base64-8ead6284.js";import"./@element-plus-fc73f803.js";import"./vuex-persistedstate-1d34ce44.js";import"./screenfull-c3c7916b.js";import"./nprogress-1339b349.js";import"./@babel-dfdb6114.js";import"./mockjs-3e444fda.js";import"./@kangc-a25feab1.js";import"./vue-d4953661.js";import"./lodash-es-b6050654.js";import"./@vueuse-c063da6b.js";import"./@ctrl-eb0b847c.js";import"./dayjs-89c8356b.js";import"./async-validator-1193b133.js";import"./memoize-one-99e54574.js";import"./escape-html-4bbaf1e1.js";import"./normalize-wheel-es-eea50788.js";import"./@floating-ui-a9dc73ab.js";const ae=f=>(Z("data-v-23006e50"),f=f(),ee(),f),le=ae(()=>n("h2",null,"\u8868\u683C\u5E03\u5C40",-1)),oe={class:"font-color"},ne={class:"grid-content"},se={style:{display:"none"}},ie=["onClick"],re={class:"multi-line2"},ce=u("\u70B9\u8D5E"),pe=u("\u6536\u85CF"),ue=u("\u4E0B\u8F7D"),de={style:{"margin-left":"10px"}},_e={setup(f){const V=K(),d=z({isloading:!0,data:[]}),P=[{value:"category=ori&viewtype=basic",label:"91\u539F\u521B"},{label:"\u5F53\u524D\u6700\u70ED",value:"category=hot&viewtype=basic"},{label:"\u672C\u6708\u6700\u70ED",value:"category=top&viewtype=basic"},{label:"\u975E\u4ED8\u8D39",value:"category=nonpaid&viewtype=basic"},{label:"10\u5206\u949F\u4EE5\u4E0A",value:"category=long&viewtype=basic"},{label:"20\u5206\u949F\u4EE5\u4E0A",value:"category=longer&viewtype=basic"},{label:"\u672C\u6708\u6536\u85CF",value:"category=tf&viewtype=basic"},{label:"\u672C\u6708\u52A0\u7CBE",value:"category=rf&viewtype=basic"},{label:"\u9AD8\u6E05",value:"category=hd&viewtype=basic"},{label:"\u6BCF\u6708\u6700\u70ED",value:"category=top&m=-1&viewtype=basic"},{label:"\u672C\u6708\u6536\u85CF",value:"category=tf&viewtype=basic"},{label:"\u672C\u6708\u8BA8\u8BBA",value:"category=md&viewtype=basic"},{label:"\u6536\u85CF\u6700\u591A",value:"category=mf&viewtype=basic"}],b=O("category=hot&viewtype=basic"),D=o=>{alert("\u70B9\u8D5E\u4E86"+o)},L=o=>{alert("\u6536\u85CF\u4E86"+o)},T=async(o,c)=>{await H(o,c).then(_=>{k.success(c+"\u4E0B\u8F7D\u5B8C\u6210\uFF01\u6587\u4EF6\u8DEF\u5F84\uFF1A"+_)}).catch(_=>{k.error(_)})},a=z({currentPage:1,pageSize:24,small:!0,background:!1,total:1e3,pagerCount:5,layout:"prev, pager, next, jumper"}),j=o=>{a.pageSize=o},B=o=>{a.currentPage=o,d.isloading=!0,h()},C=()=>{window.innerWidth<768?(a.small=!0,a.pagerCount=5,a.background=!1,a.layout="prev, pager, next, jumper"):(a.small=!1,a.pagerCount=10,a.background=!0,a.layout="prev, pager, next, jumper")},h=async()=>{let o=await G(a.currentPage,b.value);d.data=o.data.data,a.total=1e3,d.isloading=!1};(()=>{C(),h()})(),Q(()=>{window.onresize=()=>C()});const R=async o=>{let c=await J(o);V.push({name:"video-preview",params:{href:c.data}})};return(o,c)=>{const _=i("el-option"),U=i("el-select"),s=i("el-col"),g=i("el-row"),$=i("el-image"),w=i("el-link"),E=i("CollectionTag"),v=i("el-icon"),N=i("Star"),F=i("ChatLineRound"),M=i("el-scrollbar"),W=i("el-pagination"),q=X("loading");return m(),y("div",null,[le,n("div",null,[e(U,{modelValue:b.value,"onUpdate:modelValue":c[0]||(c[0]=l=>b.value=l),onChange:h},{default:t(()=>[(m(),y(S,null,I(P,l=>e(_,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),Y((m(),y("div",null,[e(g,null,{default:t(()=>[e(s,{span:7}),e(s,{span:10,class:"page-size-content"},{default:t(()=>[n("h3",oe,"\u7B2C"+p(r(a).currentPage)+"\u9875",1)]),_:1}),e(s,{span:7})]),_:1}),e(g,null,{default:t(()=>[e(M,{height:"70vh"},{default:t(()=>[(m(!0),y(S,null,I(r(d).data,(l,ve)=>(m(),te(s,{xs:24,sm:12,md:12,lg:8,xl:6,class:"content-item"},{default:t(()=>[n("div",ne,[n("div",se,p(l.id),1),n("div",null,[n("a",{onClick:x=>R(l.href)},[e($,{style:{width:"400px",height:"255px"},src:l.imgurl},null,8,["src"])],8,ie)]),n("div",re,p(l.title),1),n("div",null,[e(g,{style:{padding:"8px 0 8px 0"}},{default:t(()=>[e(s,{span:12,class:"single-line-truncate"},{default:t(()=>[u(" \u4F5C\u8005: "+p(l.otherInfo.\u4F5C\u8005),1)]),_:2},1024),e(s,{span:4},{default:t(()=>[e(w,{type:"success",onClick:x=>D(l)},{default:t(()=>[ce]),_:2},1032,["onClick"])]),_:2},1024),e(s,{span:4},{default:t(()=>[e(w,{type:"danger",onClick:x=>L(l)},{default:t(()=>[pe]),_:2},1032,["onClick"])]),_:2},1024),e(s,{span:4},{default:t(()=>[e(w,{type:"warning",onClick:x=>T(l.href,l.title)},{default:t(()=>[ue]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024),e(g,null,{default:t(()=>[e(s,{span:8,class:"info",style:{"vertical-align":"text-top",display:"inline"}},{default:t(()=>[n("div",null,[e(v,{style:{top:"2px"}},{default:t(()=>[e(v,null,{default:t(()=>[e(E)]),_:1})]),_:1}),u(" \u70ED\u5EA6 "+p(l.otherInfo.\u70ED\u5EA6),1)])]),_:2},1024),e(s,{span:8,class:"info"},{default:t(()=>[n("div",null,[e(v,{style:{top:"2px"}},{default:t(()=>[e(N)]),_:1}),u(" \u6536\u85CF "+p(l.otherInfo.\u6536\u85CF),1)])]),_:2},1024),e(s,{span:8,class:"info"},{default:t(()=>[n("div",null,[e(v,{style:{top:"2px"}},{default:t(()=>[e(v,null,{default:t(()=>[e(F)]),_:1})]),_:1}),u(" \u7559\u8A00 "+p(l.otherInfo.\u7559\u8A00),1)])]),_:2},1024)]),_:2},1024)])])]),_:2},1024))),256))]),_:1})]),_:1}),e(g,{style:{"margin-top":"15px"}},{default:t(()=>[e(s,null,{default:t(()=>[n("div",de,[e(W,{"current-page":r(a).currentPage,"onUpdate:current-page":c[1]||(c[1]=l=>r(a).currentPage=l),"page-size":r(a).pageSize,"onUpdate:page-size":c[2]||(c[2]=l=>r(a).pageSize=l),small:r(a).small,"pager-count":r(a).pagerCount,background:r(a).background,layout:r(a).layout,total:r(a).total,onSizeChange:j,onCurrentChange:B},null,8,["current-page","page-size","small","pager-count","background","layout","total"])])]),_:1})]),_:1})])),[[q,r(d).isloading]])])}}};var Fe=A(_e,[["__scopeId","data-v-23006e50"]]);export{Fe as default};