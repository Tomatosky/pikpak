import{d as b,r as n,m as N,o as f,s as g,b as l,e as s,ak as v,w as i,c as F,M as A,E as c,U as h,H as x,B as w,ad as C,al as P,I as U,y as E,A as O,ag as T,a3 as L,D as S}from"./vendor.c5ea8577.js";import{n as M,i as H}from"./index.35ab843f.js";const z={class:"list-page"},j=c("a",{href:"https://t.me/shabitt",target:"_blank"},"\u4F5C\u8005",-1),V=c("a",{href:"https://shimily.notion.site/shimily/f90e8e28b55e423185f44c89c53c573c?v=b69a268a91c946ce9238f947100070a4",target:"_blank"},"\u5730\u5740",-1),Y=c("br",null,null,-1),I=E(" \u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u64CD\u4F5C\u9009\u62E9\u8BBE\u7F6E\u9ED8\u8BA4 "),W={href:"https://www.tjsky.net/?p=220#i-4",target:"_blank"},K=c("br",null,null,-1),R={key:0,class:"loading"},$=E("\u52A0\u8F7D\u4E2D "),Z=b({setup(q){const d=n([]),o=n(),p=n(!1),r=n(),y=()=>{p.value=!0,M.post("https://api.notion.com/v1/databases/f90e8e28b55e423185f44c89c53c573c/query",{start_cursor:r.value||void 0,page_size:50}).then(t=>{if(p.value=!1,r.value||(o.value=[]),o.value=o.value.concat(t.data.results),r.value=t.data.has_more&&t.data.next_cursor,d.value.length==0){if(o.value.length)for(let e in o.value[0].properties)e!=="\u53D1\u5E03\u4EBA"&&e!=="\u53D1\u5E03\u65E5\u671F"&&e!=="\u5206\u7C7B"&&e!=="\u6807\u7B7E"&&d.value.push({title:e,key:e,ellipsis:{tooltip:{placement:e==="\u540D\u79F0"?"right":"bottom"}},width:e==="\u5927\u5C0F"?100:e==="\u540D\u79F0"?1e3:void 0,render:u=>{const a=u.properties[e];switch(a.type){case"rich_text":case"title":return h("div",{},{default:()=>a[a.type]&&a[a.type].length&&a[a.type].map(B=>B.plain_text)});case"select":return h("div",{style:{color:u.properties[e].select.color}},a.select.name);case"created_time":return h(x,{time:new Date(a.created_time),type:"date",format:"MM-dd HH:MM"});default:return"--"}}});d.value.push({title:"\u64CD\u4F5C",key:"action",width:80,align:"right",render:e=>h(w,{type:"primary",onClick:()=>{D(e.properties.\u94FE\u63A5.rich_text[0].plain_text)}},{default:()=>"\u4FDD\u5B58"})})}})},_=n(),m=()=>JSON.parse(window.localStorage.getItem("pikpakUploadFolder")||"{}"),D=t=>{let e={};if(!m().id)return window.$message.error("\u8BF7\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55"),!1;if(t.indexOf("PikPak://")===0){const u=t.substring(9).split("|");e={kind:"drive#file",parent_id:m().id,name:u[0],size:u[1],hash:u[2],upload_type:"UPLOAD_TYPE_RESUMABLE",objProvider:{provider:"UPLOAD_TYPE_UNKNOWN"}}}else e={kind:"drive#file",name:"",upload_type:"UPLOAD_TYPE_URL",url:{url:t},params:{from:"file"},folder_type:"DOWNLOAD"};H.post("https://api-drive.mypikpak.com/drive/v1/files",e).then(u=>{(u.data.upload_type==="UPLOAD_TYPE_UNKNOWN"||t.indexOf("PikPak://")===-1)&&window.$message.success("\u6DFB\u52A0\u6210\u529F")})},k=t=>{t.target.offsetHeight-t.target.scrollTop<30&&r.value&&!p.value&&y()};return N(()=>{_.value=m(),r.value="",y()}),(t,e)=>(f(),g("div",z,[l(s(v),{title:"\u611F\u8C22@shabitt",type:"info",closable:""},{default:i(()=>[l(s(C),null,{default:i(()=>[j,V]),_:1})]),_:1}),Y,!_.value||!_.value.id?(f(),F(s(v),{key:0,title:"\u8BF7\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55",type:"error"},{default:i(()=>[I,c("a",W,[l(s(U),{style:{"vertical-align":"middle"},size:"20",color:"#d03050"},{default:i(()=>[l(s(P))]),_:1})])]),_:1})):(f(),F(s(v),{key:1,title:"\u9ED8\u8BA4\u76EE\u5F55",type:"success"},{default:i(()=>[E(O(_.value.name),1)]),_:1})),K,l(s(A),{style:{"max-height":"calc(100vh - 300px)"},onScroll:k},{default:i(()=>[l(s(T),{bordered:!1,size:"small",data:o.value,columns:d.value},null,8,["data","columns"]),p.value?(f(),g("div",R,[l(s(L),{size:"small"}),$])):S("",!0)]),_:1})]))}});export{Z as default};