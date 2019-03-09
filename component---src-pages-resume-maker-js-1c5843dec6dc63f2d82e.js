(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(184),o=a(185),s=a(256),l=a.n(s),c=a(257),d=a.n(c),u=a(258),p=a.n(u),m=a(259),f=a.n(m),h=a(260),g=a.n(h),y=a(261),b=a.n(y),w=a(262),E=a.n(w);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Resume Maker"),r.a.createElement("img",{src:g.a,alt:""}),r.a.createElement(T,null,r.a.createElement(x,{style:{marginRight:10}},"React")),r.a.createElement("a",{href:"http://react-resume-oliver.surge.sh/",style:{display:"inline-block",background:"none"}},r.a.createElement(v,null,"Go to App")),r.a.createElement("img",{src:l.a,alt:"",style:{borderRadius:10,marginTop:40}}),r.a.createElement("p",{style:{marginTop:20}},"The Main page includes a form on the left hand side and a pdf on the right. Main idea of the app is to fill up the form which then get written into a PDF, and behind the scene React does just that, it takes in the input from the form and write it into the pdf"),r.a.createElement("img",{src:d.a,alt:"",style:{borderRadius:10,marginTop:20}}),r.a.createElement("p",null,"The First Page of the form includes some basic information starting with names, role, study, contact information and experience. The layout at which the input is written on to the PDF was implemented by CSS Grid and Flexbox. I played around with some design and ended up settling down for this simple layout"),r.a.createElement("img",{src:p.a,alt:"",style:{borderRadius:10,marginTop:20}}),r.a.createElement("p",null,"The Secone Page consists of addition information of experience, projects and portfolio link. The Pages are navigated by swiping right/left to involve smooth transition and better user experience."),r.a.createElement("img",{src:f.a,alt:"",style:{borderRadius:10,marginTop:20}}),r.a.createElement("p",null,"The Last page of the form includes skills, tools and interests. After filling up everything, I can hover over to the top of the pdf which will bring Download and Print icon. If clicked the app download or print straight from the browser."),r.a.createElement("embed",{src:E.a,width:"500",height:"745",type:"application/pdf"}),r.a.createElement("p",null,"This is the resume made from the above inputs"),r.a.createElement("video",{width:"700",height:"400",controls:!0},r.a.createElement("source",{src:b.a,type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement("p",null,"Video showcasing the app in action")))};var v=o.a.div.withConfig({displayName:"resume-maker__Button",componentId:"sc-40y6wp-0"})(["border:1px solid #2EEC96;border-radius:10px;width:100%;padding:5px;text-align:center;color:#2EEC96;:hover{cursor:pointer}"]),x=o.a.div.withConfig({displayName:"resume-maker__ButtonTag",componentId:"sc-40y6wp-1"})(["width:10%;padding:5px;text-align:center;color:#B8B8B8;}"]),T=o.a.div.withConfig({displayName:"resume-maker__Tags",componentId:"sc-40y6wp-2"})(["display:flex;justify-content:center;margin-bottom:40px;"])},179:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return u}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=a(37),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"parsePath",function(){return s.parsePath}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(180),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=r.a.createContext({}),p=function(e){return r.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(u);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},180:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},182:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=a(58),l=a(3),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},183:function(e,t,a){e.exports=a.p+"static/logo-fd9784065a86450b155c3bc4c8c954c6.png"},184:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(2),s=a.n(o),l=a(179),c=a(183),d=a.n(c),u=a(186),p=a.n(u),m=function(e){return i.a.createElement("li",{style:{display:"inline-block"}},i.a.createElement(l.Link,{to:e.to,style:e.pageYT?g.forYT:g.aLink},e.children))},f=function(e){e.siteTitle;var t=e.newStyle;return i.a.createElement("header",{style:{background:"transparent",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center"}},i.a.createElement(l.Link,{to:"/",style:{background:"none"}},i.a.createElement("img",{src:d.a,width:"100",alt:""})),i.a.createElement("ul",{style:{listStyle:"none",float:"right",marginLeft:"auto"}},i.a.createElement(m,{pageYT:t,to:"/",style:t?g.forYT:g.aLink}," Home"),i.a.createElement(p.a,{cover:!0,to:"/projects/",bg:"#2EEC96",style:t?g.forYT:g.aLink},"Projects"),i.a.createElement(p.a,{cover:!0,to:"/design/",bg:"#2EEC96",style:t?g.forYT:g.aLink},"UI/UX"),i.a.createElement(p.a,{paintDrip:!0,to:"/youtube",color:"red",style:t?g.forYT:g.aLink},"Youtube"))))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var h=f,g={aLink:{color:"#333333",backgroundImage:"none",textDecoration:"none",marginLeft:"2.5rem"},forYT:{color:"white",backgroundImage:"none",textDecoration:"none",marginLeft:"2.5rem"}},y=(a(166),function(e){var t=e.children,a=e.color;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("section",{style:a?{backgroundColor:"red",height:"100%",color:"white"}:null},i.a.createElement(h,{siteTitle:e.site.siteMetadata.title,newStyle:!!a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{marginTop:80}},"© ",(new Date).getFullYear()," Designed & Coded by ",i.a.createElement(l.Link,{to:"/",style:a?{color:"white"}:null},"Oliver Gomes"),"  ",i.a.createElement("br",null),"Built with",i.a.createElement("span",null)," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",style:a?{color:"white"}:null},"Gatsby"))))},data:n})});y.propTypes={children:s.a.node.isRequired};t.a=y},256:function(e,t,a){e.exports=a.p+"static/1-442ddd211b3a26218011ad19e5095a3a.png"},257:function(e,t,a){e.exports=a.p+"static/2-bc3a29dd926fe812fa7d2d6512e8a290.png"},258:function(e,t,a){e.exports=a.p+"static/3-07f22ef54eb2e386b5d2fcd9845bfc8e.png"},259:function(e,t,a){e.exports=a.p+"static/4-4eab6f9827229a27f503509c2895041a.png"},260:function(e,t,a){e.exports=a.p+"static/react-resume-a685d31646cd1eb17dbfd57c21a46075.png"},261:function(e,t,a){e.exports=a.p+"static/resume-maker-1231b4e2ba8b4974f3376fd359380982.mp4"},262:function(e,t,a){e.exports=a.p+"static/react-resume-ed37e3750675c971ea9f28801371dcb4.pdf"}}]);
//# sourceMappingURL=component---src-pages-resume-maker-js-1c5843dec6dc63f2d82e.js.map