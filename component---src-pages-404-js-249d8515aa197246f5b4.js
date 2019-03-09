(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{177:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(184),o=a(227),s=a(2),l=a.n(s),c=a(228),u=a.n(c);function d(e){var t=e.description,a=e.lang,n=e.meta,i=e.keywords,s=e.title,l=o.data.site,c=t||l.siteMetadata.description;return r.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=d;t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(p,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},179:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p}),a.d(t,"useStaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=a(37),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"parsePath",function(){return s.parsePath}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(180),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},m=function(e){r.a.useContext;var t=r.a.useContext(d);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},180:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},182:function(e,t,a){"use strict";a.r(t);a(38);var n=a(0),r=a.n(n),i=a(2),o=a.n(i),s=a(58),l=a(3),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},183:function(e,t,a){e.exports=a.p+"static/logo-fd9784065a86450b155c3bc4c8c954c6.png"},184:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),o=a(2),s=a.n(o),l=a(179),c=a(183),u=a.n(c),d=a(186),p=a.n(d),m=function(e){return i.a.createElement("li",{style:{display:"inline-block"}},i.a.createElement(l.Link,{to:e.to,style:e.pageYT?y.forYT:y.aLink},e.children))},f=function(e){e.siteTitle;var t=e.newStyle;return i.a.createElement("header",{style:{background:"transparent",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem",display:"flex",alignItems:"center"}},i.a.createElement(l.Link,{to:"/",style:{background:"none"}},i.a.createElement("img",{src:u.a,width:"100",alt:""})),i.a.createElement("ul",{style:{listStyle:"none",float:"right",marginLeft:"auto"}},i.a.createElement(m,{pageYT:t,to:"/",style:t?y.forYT:y.aLink}," Home"),i.a.createElement(p.a,{cover:!0,to:"/projects/",bg:"#2EEC96",style:t?y.forYT:y.aLink},"Projects"),i.a.createElement(p.a,{cover:!0,to:"/design/",bg:"#2EEC96",style:t?y.forYT:y.aLink},"UI/UX"),i.a.createElement(p.a,{paintDrip:!0,to:"/youtube",color:"red",style:t?y.forYT:y.aLink},"Youtube"))))};f.propTypes={siteTitle:s.a.string},f.defaultProps={siteTitle:""};var g=f,y={aLink:{color:"#333333",backgroundImage:"none",textDecoration:"none",marginLeft:"2.5rem"},forYT:{color:"white",backgroundImage:"none",textDecoration:"none",marginLeft:"2.5rem"}},h=(a(166),function(e){var t=e.children,a=e.color;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("section",{style:a?{backgroundColor:"red",height:"100%",color:"white"}:null},i.a.createElement(g,{siteTitle:e.site.siteMetadata.title,newStyle:!!a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",{style:{marginTop:80}},"© ",(new Date).getFullYear()," Designed & Coded by ",i.a.createElement(l.Link,{to:"/",style:a?{color:"white"}:null},"Oliver Gomes"),"  ",i.a.createElement("br",null),"Built with",i.a.createElement("span",null)," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org",style:a?{color:"white"}:null},"Gatsby"))))},data:n})});h.propTypes={children:s.a.node.isRequired};t.a=h},227:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-249d8515aa197246f5b4.js.map