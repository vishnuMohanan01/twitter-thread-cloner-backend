(this["webpackJsonptwitter-thread-cloner-frontend"]=this["webpackJsonptwitter-thread-cloner-frontend"]||[]).push([[0],{156:function(e,n,t){},19:function(e,n,t){e.exports={container:"downloadStyles_container__3iqEL",downloadButtonContainer:"downloadStyles_downloadButtonContainer__1yIGz",downloadALink:"downloadStyles_downloadALink__3kuiV",downloadButton:"downloadStyles_downloadButton___X-gU",copy:"downloadStyles_copy__3Yj10",copyIcon:"downloadStyles_copyIcon__2FmIE",cautionText:"downloadStyles_cautionText__1G5x7",copied:"downloadStyles_copied__1nis_",checkIcon:"downloadStyles_checkIcon__T-NXx"}},202:function(e,n){},204:function(e,n){},237:function(e,n){},238:function(e,n){},285:function(e,n,t){"use strict";t.r(n);var o=t(2),a=t(1),r=t.n(a),c=t(141),s=t.n(c),i=(t(156),t(150)),l=t(6),d=t(26),u=t(5),h=t.n(u),m=t(25),j=t.n(m),f=t(142),_=t.n(f),b=t(143),x=t.n(b),p=function(e){return Object(o.jsxs)("div",{className:h.a.homeBody,children:[Object(o.jsx)("span",{className:h.a.homeDescription,children:"Clone twitter threads into PDF, TXT or ZIP"}),Object(o.jsx)("span",{className:h.a.homeBodyGreyDescription,children:"Paste URL of the last tweet from the thread."}),Object(o.jsx)("input",{placeholder:"Paste URL here...",onChange:function(n){return e.urlFieldChangeHandler(n)},type:"text",name:x.a.randomBytes(16),size:60,className:h.a.homeUrlTextField}),e.errorMessage?Object(o.jsx)("div",{className:h.a.errorMessage,children:e.errorMessage}):null,Object(o.jsxs)("div",{className:h.a.homeButtonsContainer,children:[Object(o.jsx)("button",{onClick:function(n){e.createPDF(n)},className:"".concat(h.a.homeConvertButton),children:"Covert to PDF"}),Object(o.jsx)("button",{onClick:function(n){e.createTXT(n)},className:"".concat(h.a.homeConvertButton),children:"Covert to TXT"}),Object(o.jsx)("button",{onClick:function(n){e.createZIP(n)},className:"".concat(h.a.homeConvertButton),children:"Covert to ZIP"})]})]})},v=t(45),O=t.n(v),g=t(42),N=t(43);function w(){var e=Object(g.a)(["\n  0%,\n  100% {\n    transform: scale(1, 1);\n  }\n  50% {\n    transform: scale(1.2, 1);\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(g.a)(["\n  17% {\n    border-bottom-right-radius: 3px;\n  }\n  25% {\n    transform: translateY(9px) rotate(22.5deg);\n  }\n  50% {\n    transform: translateY(18px) scale(1, 0.9) rotate(45deg);\n    border-bottom-right-radius: 40px;\n  }\n  75% {\n    transform: translateY(9px) rotate(67.5deg);\n  }\n  100% {\n    transform: translateY(0) rotate(90deg);\n  }\n"]);return y=function(){return e},e}var C=Object(N.b)(y()),T=Object(N.b)(w()),B={},L={small:"24px",default:"30px",large:"36px"};function S(){var e=Object(g.a)(["\n    width: ",";\n    height: ",";\n    //position: relative;\n    align-self: center;\n    //align-content: center;\n    &:before {\n      content: '';\n      width:",";\n      height: 5px;\n      background: #000;\n      opacity: 0.1;\n      position: absolute;\n      //top: calc("," + 10px) ;\n      //left: 0;\n      margin-top: 2.5rem;\n      border-radius: 50%;\n      animation: "," ","s linear infinite;\n    }\n    &:after {\n     content: '';\n      width: ",";\n      height:",";\n      background: ",";\n      animation: "," ","s linear infinite;\n      position: absolute;\n      //top: 0;\n      //left: 0;\n      border-radius: 3px;\n    }\n"]);return S=function(){return e},e}var k=N.a.div(S(),(function(e){return L[e.size]||L.default}),(function(e){return L[e.size]||L.default}),(function(e){return L[e.size]||L.default}),(function(e){return L[e.size]||L.default}),T,(function(e){return e.speed||.5}),(function(e){return L[e.size]||L.default}),(function(e){return L[e.size]||L.default}),(function(e){return e.color||"#00adb5"}),C,(function(e){return e.speed||.5})),z=function(e){var n=e.style,t=void 0===n?B:n,a=e.color,r=e.speed,c=e.size,s=void 0===c?"default":c;return Object(o.jsx)(k,{style:t,color:a,speed:r,size:s})},F=function(e){return Object(o.jsxs)("div",{className:O.a.container,children:[Object(o.jsx)("div",{className:O.a.urlContainer,children:Object(o.jsx)("p",{className:O.a.urlText,children:e.url})}),Object(o.jsx)(z,{color:"#663399",speed:.8,size:"default"}),Object(o.jsx)("div",{className:O.a.statusText,children:e.status})]})},P=t(19),D=t.n(P),I=t(149),E=t(148),R=t(147),U=t.n(R),X=function(){return Object(o.jsxs)("div",{className:D.a.copied,children:["Link Copied ",Object(o.jsx)(E.a,{className:D.a.checkIcon})]})},M=null,G=function(e){var n=Object(a.useState)(!1),t=Object(d.a)(n,2),r=t[0],c=t[1];return Object(o.jsxs)("div",{className:D.a.container,children:[Object(o.jsxs)("div",{className:D.a.downloadButtonContainer,children:[Object(o.jsx)("a",{href:e.downloadLink,className:D.a.downloadALink+" link",children:Object(o.jsx)("div",{className:D.a.downloadButton,children:"Download"})}),Object(o.jsx)("div",{className:D.a.copy,onClick:function(){return U()(e.downloadLink),c(!0),void(M||(M=setTimeout((function(){c(!1),M=null}),2001)))},children:Object(o.jsx)(I.a,{className:D.a.copyIcon})})]}),r?Object(o.jsx)(X,{}):null,Object(o.jsx)("div",{className:D.a.cautionText,children:"This download link is valid for 10 days from now."})]})},Y=new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i"),Z=function(){var e=Object(a.useState)(""),n=Object(d.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!1),s=Object(d.a)(c,2),i=s[0],l=s[1],u=Object(a.useState)(!1),m=Object(d.a)(u,2),f=m[0],b=m[1],x=Object(a.useState)(""),v=Object(d.a)(x,2),O=v[0],g=v[1],N=Object(a.useState)(null),w=Object(d.a)(N,2),y=w[0],C=w[1],T=_()("http://ec2-3-94-79-211.compute-1.amazonaws.com:4000/");Object(a.useEffect)((function(){T.on("statusCode",(function(e){"ERR"===e?(C("Met with an issue while processing..."),g(y),b(null),l(!1)):g(e)}))}),[O,y,i]);return Object(o.jsxs)("div",{className:h.a.homeContainer,children:[Object(o.jsx)("div",{className:h.a.homeNavBarContainer,children:Object(o.jsxs)("div",{className:h.a.homeNavBarLogo,onClick:function(){window.location.reload()},children:[Object(o.jsx)("span",{className:h.a.homeNavBarLogoLineOne,children:"Twitter"}),Object(o.jsxs)("div",{className:h.a.homeNavBarLogoLineTwo,children:[Object(o.jsx)("span",{className:h.a.homeNavBarLogoLineTwoPartOne,children:"Thread"}),Object(o.jsx)("span",{className:h.a.homeNavBarLogoLineTwoPartTwo,children:"Cloner"})]})]})}),i?Object(o.jsx)(F,{status:O,url:t}):f?Object(o.jsx)(G,{downloadLink:f}):Object(o.jsx)(p,{errorMessage:y,createPDF:function(e){e.preventDefault(),b(null),C(null),g(null),Y.test(t)?(l(!0),j.a.post("/convert/pdf",{url:t}).then((function(e){b(e.data),l(!1)})).catch((function(e){return console.log(e)}))):C("URL doesn't seem right")},createZIP:function(e){e.preventDefault(),b(null),C(null),g(null),Y.test(t)?(l(!0),j.a.post("/convert/zip",{url:t}).then((function(e){b(e.data),l(!1)})).catch((function(e){return console.log(e)}))):C("URL doesn't seem right")},createTXT:function(e){e.preventDefault(),b(null),C(null),g(null),Y.test(t)?(l(!0),j.a.post("/convert/txt",{url:t}).then((function(e){b(e.data),l(!1)})).catch((function(e){return console.log(e)}))):C("URL doesn't seem right")},urlFieldChangeHandler:function(e){r(e.target.value)}}),Object(o.jsx)("div",{className:h.a.homeFooter,children:Object(o.jsxs)("div",{className:h.a.footerContent,children:[Object(o.jsx)("span",{className:h.a.developedByText,children:"Developed By"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/vishnu-mohanan/",className:"link",children:Object(o.jsx)("span",{className:h.a.developerName,children:"Vishnu Mohanan"})})]})})]})},A=function(){return Object(o.jsx)("div",{style:{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"center",alignItems:"center",color:"#663399",fontFamily:'"Source Code Pro", monospace',fontSize:"30px",fontWeight:"700"},children:"Error 404"})};var H=function(){return Object(o.jsx)(i.a,{children:Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/",component:Z}),Object(o.jsx)(l.a,{component:A})]})})},J=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,286)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),a(e),r(e),c(e)}))};j.a.defaults.xsrfHeaderName="X-CSRFToken",j.a.defaults.xsrfCookieName="XSRF-TOKEN",j.a.defaults.withCredentials=!0,s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(H,{})}),document.getElementById("root")),J()},45:function(e,n,t){e.exports={container:"loadingStyles_container__3sbc4",urlContainer:"loadingStyles_urlContainer__3sqhF",urlText:"loadingStyles_urlText__3UqoL",statusText:"loadingStyles_statusText__3_yIc"}},5:function(e,n,t){e.exports={homeContainer:"home_homeContainer__1EEzX",homeNavBarContainer:"home_homeNavBarContainer__3WKNd",homeNavBarLogo:"home_homeNavBarLogo__19bFS",homeNavBarLogoLineOne:"home_homeNavBarLogoLineOne__LgnQm",homeNavBarLogoLineTwo:"home_homeNavBarLogoLineTwo__Kn9ZP",homeNavBarLogoLineTwoPartOne:"home_homeNavBarLogoLineTwoPartOne__3EPdD",homeNavBarLogoLineTwoPartTwo:"home_homeNavBarLogoLineTwoPartTwo__3maQX",homeBody:"home_homeBody__1T3R-",homeDescription:"home_homeDescription__2Kwya",homeBodyGreyDescription:"home_homeBodyGreyDescription__22tSV",homeUrlTextField:"home_homeUrlTextField__2OJoT",homeButtonsContainer:"home_homeButtonsContainer__3HhFP",errorMessage:"home_errorMessage__1OLE1",homeConvertButton:"home_homeConvertButton__msW8v",homeFooter:"home_homeFooter__22InX",footerContent:"home_footerContent__3ANGE",developedByText:"home_developedByText__31z13",developerName:"home_developerName__2Uc3J"}}},[[285,1,2]]]);
//# sourceMappingURL=main.2b784461.chunk.js.map