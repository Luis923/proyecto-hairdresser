(this["webpackJsonpproyecto-personal"]=this["webpackJsonpproyecto-personal"]||[]).push([[0],Array(19).concat([function(e,t,a){},,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(13),n=a.n(r),i=(a(19),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,n=t.getTTFB;a(e),c(e),s(e),r(e),n(e)}))}),l=(a(20),a(2)),o=a(3),d=a(5),j=a(4),m=(a(21),a(22),a(0)),u=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"galleryCard row",children:[Object(m.jsx)("img",{loading:"lazy",className:"cardImage img-fluid",src:this.props.urlImagen,alt:"imagen"}),Object(m.jsx)("h3",{className:"cardSubtitle text-center fw-light",children:this.props.subtitulo}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo})]})}}]),a}(s.a.Component),b=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={galleryData:[],cargando:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/Luis923/json-db/gallery").then((function(e){return e.json()})).then((function(t){return e.setState({galleryData:t,cargando:!1})})).catch((function(e){}))}},{key:"render",value:function(){return this.state.cargando?Object(m.jsx)("h1",{children:"Cargando..."}):Object(m.jsxs)("div",{className:"gallery pb-5",children:[Object(m.jsx)("h2",{className:"galleryTitle text-center my-3 fs-1",children:"GALLERY"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row gx-5 gy-4",children:this.state.galleryData.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3",children:Object(m.jsx)(u,{urlImagen:e.url,subtitulo:e.subtitulo,parrafo:e.parrafo})},e.id)}))})})]})}}]),a}(s.a.Component),h=(a(24),a(25),a(7)),p=a(9),x=a(8),O=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ourTeamCard",children:[Object(m.jsx)("img",{loading:"lazy",className:"cardImage img-fluid",src:this.props.urlImagen,alt:"imagen"}),Object(m.jsx)("h3",{className:"cardSubtitle text-center",children:this.props.subtitulo}),Object(m.jsx)("h4",{className:"cardSubtitle2 text-center text-white",children:this.props.subtitulo2}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo}),Object(m.jsx)("div",{className:"socialMediaBox",children:Object(m.jsxs)("ul",{className:"socialMediaList col-12 d-flex justify-content-center p-0",children:[Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:p.a})}),Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:p.b})}),Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:x.c})})]})})]})}}]),a}(s.a.Component),f=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={ourTeamData:[],cargando:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/Luis923/json-db/ourTeam").then((function(e){return e.json()})).then((function(t){return e.setState({ourTeamData:t,cargando:!1})})).catch((function(e){}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"ourTeam",children:[Object(m.jsx)("h2",{className:"ourTeamTitle text-center fs-1",children:"OUR TEAM"}),Object(m.jsx)("div",{className:"container-fluid px-3",children:Object(m.jsx)("div",{className:"row px-5",children:this.state.ourTeamData.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-sm-6 col-md-3",children:Object(m.jsx)(O,{urlImagen:e.url,subtitulo:e.subtitulo,subtitulo2:e.subtitulo2,parrafo:e.parrafo})},e.id)}))})})]})}}]),a}(s.a.Component),g=(a(31),a(32),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(o.a)(a,[{key:"render",value:function(){var e={background:this.props.color};return Object(m.jsxs)("div",{className:"newsCard",style:e,children:[Object(m.jsx)("img",{loading:"lazy",className:"cardImage img-fluid",src:this.props.urlImagen,alt:"imagen"}),Object(m.jsxs)("div",{className:"cardContenido p-3",children:[Object(m.jsx)("h3",{className:"cardSubtitle text-center",children:this.props.subtitulo}),Object(m.jsx)("h4",{className:"cardSubtitle2 text-center text-white",children:this.props.subtitulo2}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo}),Object(m.jsx)("p",{className:"cardParagraph2 text-center",children:this.props.parrafo2}),Object(m.jsx)("div",{className:"d-flex justify-content-center",children:Object(m.jsx)("button",{type:"button",className:"cardButton text-white border-0",children:"Read More"})})]})]})}}]),a}(s.a.Component)),v=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={newsData:[],cargando:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/Luis923/json-db/news").then((function(e){return e.json()})).then((function(t){return e.setState({newsData:t,cargando:!1})})).catch((function(e){}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"News",children:[Object(m.jsx)("h2",{className:"NewsTitle text-center fs-1",children:"News"}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row gy-3",children:this.state.newsData.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-sm-6 col-md-3 col-lg-3",children:Object(m.jsx)(g,{urlImagen:e.url,subtitulo:e.subtitulo,subtitulo2:e.subtitulo2,parrafo:e.parrafo,parrafo2:e.parrafo2,color:e.color})},e.id)}))})})]})}}]),a}(s.a.Component),N=(a(33),a(34),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={},e}return Object(o.a)(a,[{key:"render",value:function(){var e={background:this.props.color};return Object(m.jsxs)("div",{className:"priceTableCard",children:[Object(m.jsx)("img",{loading:"lazy",className:"cardImage img-fluid",src:this.props.urlImagen,alt:"imagen"}),Object(m.jsx)("h3",{className:"cardSubtitle text-center text-white m-0",style:e,children:this.props.subtitulo}),Object(m.jsx)("h4",{className:"cardSubtitle2 text-center text-white m-0",children:this.props.subtitulo2}),Object(m.jsxs)("div",{className:"contenideParagraphs py-2",children:[Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo2}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo3}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo4}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo5}),Object(m.jsx)("p",{className:"cardParagraph text-center",children:this.props.parrafo6})]}),Object(m.jsx)("button",{className:"cardLink d-block text-center w-100 text-white",children:"Buy Now"})]})}}]),a}(s.a.Component)),y=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={priceTableData:[],cargando:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/Luis923/json-db/priceTable").then((function(e){return e.json()})).then((function(t){return e.setState({priceTableData:t,cargando:!1})})).catch((function(e){}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"priceTable",children:[Object(m.jsx)("h2",{className:"priceTableTitle text-center fs-1",children:"PRICE-TABLE"}),Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"row d-flex justify-content-center",children:this.state.priceTableData.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-sm-4",children:Object(m.jsx)(N,{urlImagen:e.urlImagen,subtitulo:e.subtitulo,subtitulo2:e.subtitulo2,parrafo:e.parrafo,parrafo2:e.parrafo2,parrafo3:e.parrafo3,parrafo4:e.parrafo4,parrafo5:e.parrafo5,parrafo6:e.parrafo6,color:e.color})},e.id)}))})})]})}}]),a}(s.a.Component),w=(a(35),a(36),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={color:"#E8E8E8"},e.update=function(t){var a=t.target.value,c="green";""===a.trim()&&(c="#E8E8E8"),""!==a.trim()&&a.length<5&&(c="red"),e.setState({color:c})},e}return Object(o.a)(a,[{key:"render",value:function(){var e={border:"1px solid ".concat(this.state.color),padding:"0.3em 0.6em",outline:"none"};return Object(m.jsx)("input",{type:this.props.type,className:"FormtextInput form-control",placeholder:this.props.placeholder,onChange:this.update,style:e,required:!0})}}]),a}(c.Component)),S=a.p+"static/media/map.e1db5317.webp",I=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).handleSubmit=function(e){e.preventDefault()},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"contact container my-4",children:[Object(m.jsx)("h2",{className:"contactTitle text-center fs-1",children:"CONTACT"}),Object(m.jsxs)("div",{className:"contacContenide row",children:[Object(m.jsx)("div",{className:"contactMap col-12 col-sm-6 ",children:Object(m.jsx)("img",{loading:"lazy",className:"contactImage img-fluid",src:S,alt:"imagen"})}),Object(m.jsxs)("form",{className:"contactForm col-12 col-sm-6 ",onSubmit:this.handleSubmit,children:[Object(m.jsx)("h3",{className:"contactSubtitle fs-5",children:"Vivamus lacinia odio ut Vivamus lacinia odiout lacinia odio ut"}),Object(m.jsx)(w,{type:"text",placeholder:"Nombre"}),Object(m.jsx)(w,{type:"email",placeholder:"Email"}),Object(m.jsx)(w,{type:"tel",placeholder:"Phone"}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Send"})]})]})]})}}]),a}(c.Component),k=(a(37),a(38),a(14)),T=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e,t={},a={background:this.props.color};return"magic"===this.props.icono?t=x.b:"gem"===this.props.icono?t=k.a:"cut"===this.props.icono?t=x.a:"shield"===this.props.icono?t=x.d:(t=x.d,e={display:this.props.icono}),Object(m.jsxs)("div",{className:"serviciosCardIcon p-4",style:a,children:[Object(m.jsx)(h.a,{className:"socialMedia fa-2x",icon:t,style:e}),Object(m.jsx)("h3",{className:"servicioCardTitle text-white",children:this.props.subtitulo}),Object(m.jsx)("p",{className:"servicioCardParagraph",children:this.props.parrafo})]})}}]),a}(c.Component),C=function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={serviciosData:{},serviciosIconData:[],cargando:!0},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://my-json-server.typicode.com/Luis923/json-db/serviciosIcon").then((function(e){return e.json()})).then((function(t){return e.setState({serviciosIconData:t,cargando:!1})}))}},{key:"render",value:function(){var e=0;return Object(m.jsxs)("div",{className:"servicios py-4 bg-dark",children:[Object(m.jsx)("h3",{className:"serviciosTitle text-center text-white fs-1",children:"SERVICES"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-12 col-sm-12 col-md-4",children:Object(m.jsx)("div",{className:"row h-100 d-flex align-content-between",children:this.state.serviciosIconData.map((function(t){return 3===++e?Object(m.jsx)("br",{},t.id):Object(m.jsx)("div",{className:"col-12 col-sm-4 col-md-12 my-3",children:Object(m.jsx)(T,{subtitulo:t.subtitulo,parrafo:t.parrafo,color:t.color,icono:"none"})},t.id)}))})}),Object(m.jsx)("div",{className:"col-12 col-sm-12 col-md-8",children:Object(m.jsx)("div",{className:"row h-100 d-flex align-content-between",children:this.state.serviciosIconData.map((function(e){return Object(m.jsx)("div",{className:"col-12 col-sm-6 col-md-6 my-3 my-3",children:Object(m.jsx)(T,{subtitulo:e.subtitulo,parrafo:e.parrafo,color:e.color,icono:e.icono})},e.id)}))})})]})})]})}}]),a}(c.Component),D=a.p+"static/media/welcomeImage1.0c9caeed.webp",L=a.p+"static/media/welcomeImage2.96efaf5f.webp",M=a.p+"static/media/welcomeImage3.92201393.webp",E=a.p+"static/media/welcomeImage4.61d6f8ea.webp",P=(a(39),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"welcome container bg-white py-4",children:Object(m.jsxs)("div",{className:"row pt-3",children:[Object(m.jsxs)("div",{className:"col-12 col-xl-6",children:[Object(m.jsx)("h2",{className:"welcomeTitle fs-1",children:"Welcome"}),Object(m.jsx)("p",{className:"welcomeParagraph1 fw-bold\tfs-5",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse porta erat sit amet eros sagittis, quis hendrerit libero aliquam. Fusce semper augue ac dolor efficitur, a pretium metus pellentesque."}),Object(m.jsx)("p",{className:"welcomeParagraph2",children:"Sed posuere laoreet neque, eu rhoncus libero accumsan eget. Morbi tempor nibh ullamcorper urna hendrerit, at molestie tortor molestie. Suspendisse vel porttitor metus, vitae luctus velit. Donec dictum suscipit orci nec facilisis. Sed pretium eu diam id tincidunt."})]}),Object(m.jsx)("div",{className:"col-12 col-xl-6",children:Object(m.jsxs)("div",{className:"row g-4",children:[Object(m.jsx)("div",{className:"col-12 col-sm-6 ",children:Object(m.jsx)("img",{className:"welcomeImage1 mx-auto d-block",src:D,alt:"imagen"})}),Object(m.jsx)("div",{className:"col-12 col-sm-6",children:Object(m.jsx)("img",{className:"welcomeImage2 mx-auto d-block",src:L,alt:"imagen"})}),Object(m.jsx)("div",{className:"col-12 col-sm-6",children:Object(m.jsx)("img",{className:"welcomeImage3 mx-auto d-block",src:M,alt:"imagen"})}),Object(m.jsx)("div",{className:"col-12 col-sm-6",children:Object(m.jsx)("img",{className:"welcomeImage4 mx-auto d-block",src:E,alt:"imagen"})})]})})]})})}}]),a}(c.Component)),A=a.p+"static/media/mainImage1.551c9ed8.webp",W=a.p+"static/media/mainImage2.45c5d6ea.webp",z=a.p+"static/media/mainImage3.ec85c649.webp",B=(a(40),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("main",{className:"main container-fluid p-0",children:Object(m.jsxs)("div",{id:"carouselExampleInterval",className:"carousel slide","data-bs-ride":"carousel",children:[Object(m.jsxs)("div",{className:"carousel-inner",children:[Object(m.jsxs)("div",{className:"carousel-item active","data-bs-interval":"2000",children:[Object(m.jsx)("img",{loading:"lazy",src:A,className:"d-block w-100",alt:"mainImage1"}),Object(m.jsxs)("div",{className:"carousel-caption mainText d-none d-md-block pb-5",children:[Object(m.jsx)("h2",{className:"mainTitle mb-5 pb-5 ps-5 fs-1",children:"WELLNESS"}),Object(m.jsx)("h3",{className:"mainSubtitle mb-4 pt-5",children:"Welcome"}),Object(m.jsx)("h4",{className:"mainSubtitle2 mb-4 fs-2",children:"Make a Amazing Look"}),Object(m.jsx)("p",{className:"mb-5 pb-5",children:"Lorem ipsum dolor sit"})]})]}),Object(m.jsxs)("div",{className:"carousel-item","data-bs-interval":"2000",children:[Object(m.jsx)("img",{loading:"lazy",src:W,className:"d-block w-100",alt:"mainImage2"}),Object(m.jsxs)("div",{className:"carousel-caption mainText d-none d-md-block",children:[Object(m.jsx)("h2",{className:"mainTitle mb-5 pb-5 ps-5 fs-1",children:"WELLNESS"}),Object(m.jsx)("h3",{className:"mainSubtitle mb-4 pt-5",children:"Welcome"}),Object(m.jsx)("h4",{className:"mainSubtitle2 mb-4 fs-2",children:"Wellness Body Massage"}),Object(m.jsx)("p",{className:"mb-5 pb-5",children:"Lorem ipsum dolor sit"})]})]}),Object(m.jsxs)("div",{loading:"lazy",className:"carousel-item","data-bs-interval":"2000",children:[Object(m.jsx)("img",{src:z,className:"d-block w-100",alt:"mainImage3"}),Object(m.jsxs)("div",{className:"carousel-caption mainText d-none d-md-block",children:[Object(m.jsx)("h2",{className:"mainTitle mb-5 pb-5 ps-5 fs-1",children:"WELLNESS"}),Object(m.jsx)("h3",{className:"mainSubtitle mb-4 pt-5",children:"Welcome"}),Object(m.jsx)("h4",{className:"mainSubtitle2 mb-4 fs-2",children:"Best Beauty And Spa"}),Object(m.jsx)("p",{className:"mb-5 pb-5",children:"Lorem ipsum dolor sit"})]})]})]}),Object(m.jsxs)("button",{className:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleInterval","data-bs-slide":"prev",children:[Object(m.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Previous"})]}),Object(m.jsxs)("button",{className:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleInterval","data-bs-slide":"next",children:[Object(m.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(m.jsx)("span",{className:"visually-hidden",children:"Next"})]})]})})}}]),a}(c.Component)),F=(a(41),function(e){Object(d.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(m.jsx)("footer",{className:"footer",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row text-white",children:[Object(m.jsxs)("div",{className:"col-2",children:[Object(m.jsx)("h2",{className:"footerTitle mt-3",children:"Contact Us"}),Object(m.jsx)("h3",{className:"footerSubtitle1 fs-5",children:"Adress"}),Object(m.jsx)("p",{className:"footerParagraph1 fw-light",children:"5280 Wetzel Lane U.S.A"}),Object(m.jsx)("h3",{className:"footerSubtitle1 fs-5",children:"Mail"}),Object(m.jsx)("p",{className:"footerParagraph1 fw-light",children:"mail@example.com"}),Object(m.jsx)("h3",{className:"footerSubtitle1 fs-5",children:"Phone"}),Object(m.jsx)("p",{className:"footerParagraph1 fw-light",children:"+5244 125 625"})]}),Object(m.jsx)("div",{className:"col-10  d-flex align-items-center justify-content-center",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("p",{className:"copiright col-12 text-center",children:"\xa9 2018 Wellness. All Rights Reserved | Design by W3Layouts"}),Object(m.jsxs)("ul",{className:"socialMediaList col-12 d-flex justify-content-center p-0",children:[Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:p.a})}),Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:p.b})}),Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:x.c})}),Object(m.jsx)("li",{className:"m-2 p-1 rounded-circle bg-light d-flex justify-content-center align-items-center",children:Object(m.jsx)(h.a,{className:"socialMedia",icon:p.c})})]})]})})]})})})}}]),a}(c.Component));n.a.render(Object(m.jsxs)(s.a.StrictMode,{children:[Object(m.jsx)(B,{}),Object(m.jsx)(P,{}),Object(m.jsx)(C,{}),Object(m.jsx)(b,{}),Object(m.jsx)(f,{}),Object(m.jsx)(v,{}),Object(m.jsx)(y,{}),Object(m.jsx)(I,{}),Object(m.jsx)(F,{})]}),document.getElementById("root")),i()}]),[[42,1,2]]]);
//# sourceMappingURL=main.21b63880.chunk.js.map