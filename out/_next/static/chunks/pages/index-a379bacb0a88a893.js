(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return s(6616)}])},6616:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return v}});var i=s(5893),t=s(7294);s(4640),s(9678);var d=s(2962),l=s(5152),n=s.n(l),r=s(9828),o=s(3977);let c=(0,o.ZF)({apiKey:"AIzaSyA4J8KKCdKIY4dpQt9aESZ1OeWtkApM0qs",authDomain:"docapp-e4e9c.firebaseapp.com",projectId:"docapp-e4e9c",storageBucket:"docapp-e4e9c.appspot.com",messagingSenderId:"389725881316",appId:"1:389725881316:web:4a2dc1c3440977a3e07df1"}),p=(0,r.ad)(c),h=(0,r.hJ)(p,"slides"),m=(0,r.hJ)(p,"productslide"),u=n()(()=>Promise.all([s.e(672),s.e(623)]).then(s.bind(s,6623)),{loadableGenerated:{webpack:()=>[6623]},loading:()=>(0,i.jsx)("div",{className:"load-wraper",children:(0,i.jsx)("div",{className:"activity"})}),ssr:!1}),j=n()(()=>s.e(259).then(s.bind(s,5259)),{loadableGenerated:{webpack:()=>[5259]},loading:()=>(0,i.jsx)("div",{className:"load-wraper",children:(0,i.jsx)("div",{className:"activity"})}),ssr:!1}),x=n()(()=>s.e(66).then(s.bind(s,6066)),{loadableGenerated:{webpack:()=>[6066]},loading:()=>"",ssr:!1}),k=n()(()=>s.e(91).then(s.bind(s,91)),{loadableGenerated:{webpack:()=>[91]},loading:()=>(0,i.jsx)("div",{className:"load-wraper",children:(0,i.jsx)("div",{className:"activity"})}),ssr:!1}),b=n()(()=>s.e(159).then(s.bind(s,159)),{loadableGenerated:{webpack:()=>[159]},loading:()=>(0,i.jsx)("div",{className:"load-wraper",children:(0,i.jsx)("div",{className:"activity"})}),ssr:!1});class v extends t.Component{static async getInitialProps(){let e=await (0,r.PL)(h),a=await (0,r.PL)(m),s=[],i=[];return e.forEach((e,a)=>{var i=e.data(),t=i.title,d=i.subtitle,l=i.link,n=i.poto[0].downloadURL;s.push({poto:n,title:t,subtitle:d,link:l})}),a.forEach((e,a)=>{var s=e.data(),t=s.title,d=s.kategori,l=s.link,n=Object.values(e.data().poto);i.push({poto:n,title:t,kategori:d,link:l})}),{slidesitem:s,produkitem:i}}render(){var e={dots:!1,infinite:!0,speed:500,slidesToShow:4,slidesToScroll:1,initialSlide:0,autoplay:!0,autoplaySpeed:3e3,nextArrow:(0,i.jsx)(function(e){let{className:a,style:s,onClick:t}=e;return(0,i.jsx)("div",{className:a,style:{...s,display:"block",background:"rgba(0,0,0, .7)"},onClick:t})},{}),prevArrow:(0,i.jsx)(function(e){let{className:a,style:s,onClick:t}=e;return(0,i.jsx)("div",{className:a,style:{...s,display:"block",background:"rgba(0,0,0, .7)"},onClick:t})},{}),responsive:[{breakpoint:1170,settings:{slidesToShow:4}},{breakpoint:992,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:576,settings:{slidesToShow:1}}]};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.PB,{title:"Selamat Datang di clopz store",description:"Toko Beragam Perlengkapan kecantikan Wanita",canonical:"https://clopz.store/",openGraph:{url:"https://clopz.store/",title:"Selamat Datang di clopz store",description:"Toko Beragam Perlengkapan kecantikan Wanita",images:[{url:"https://clopz.store/image/pic.jpeg",width:600,height:315,alt:"clopz store"}],site_name:"clopz store"}}),(0,i.jsx)(j,{}),(0,i.jsx)("div",{className:"slider -style-3 slider-arrow-middle",children:(0,i.jsx)("div",{className:"slider__carousel",children:(0,i.jsx)(x,{dots:!0,infinite:!0,speed:500,fade:!0,arrows:!1,slidesToShow:1,slidesToScroll:1,children:this.props.slidesitem.map(e=>(0,i.jsx)("div",{className:"slider__carousel__item slider-3",children:(0,i.jsxs)("div",{className:"container",children:[(0,i.jsx)("div",{className:"slider-background",children:(0,i.jsx)("img",{className:"slider-background",src:e.poto,alt:e.title,width:1366,height:760})}),(0,i.jsxs)("div",{className:"slider-content",children:[(0,i.jsx)("h1",{className:"slider-content__title","data-animation-in":"fadeInUp","data-animation-delay":"0.2",children:e.title}),(0,i.jsx)("p",{className:"slider-content__description","data-animation-in":"fadeInUp","data-animation-delay":"0.3",children:e.subtitle}),(0,i.jsx)("div",{"data-animation-in":"fadeInUp","data-animation-out":"fadeInDown","data-animation-delay":"0.4",children:e.link?(0,i.jsx)("a",{className:"btn -red",href:e.link,children:"Lihat koleksi"}):""})]})]})},e.id))})})}),(0,i.jsx)(u,{}),(0,i.jsx)("div",{}),(0,i.jsxs)("div",{className:"product-tab-slide",children:[(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"product-tab-slide__header",children:[(0,i.jsx)("h5",{children:"Koleksi Terbaru"}),(0,i.jsx)("div",{className:"product-tab-slide__header__controller",children:(0,i.jsx)("a",{className:"btn -white",href:"https://web.facebook.com/profile.php?id=100063520513606",target:"_blank",children:"Lihat semua"})})]})}),(0,i.jsx)("div",{className:"product-tab-slide__content",children:(0,i.jsx)(x,{...e,children:this.props.produkitem.map((e,a)=>(0,i.jsx)("div",{className:"product-slide__item",children:(0,i.jsxs)("div",{className:"product ",children:[(0,i.jsx)("div",{className:"product-type"}),(0,i.jsx)("div",{className:"product-thumb",children:(0,i.jsx)("div",{className:"product-thumb__image",children:e.poto.map(e=>(0,i.jsx)("img",{src:e.downloadURL,alt:"Product image",width:308}))})}),(0,i.jsxs)("div",{className:"product-content",children:[(0,i.jsx)("div",{className:"product-content__header"}),e.link?(0,i.jsx)("a",{className:"product-name",href:e.link,target:"_blank",children:e.title}):(0,i.jsxs)("span",{className:"product-name",children:[" ",e.title]}),(0,i.jsx)("div",{className:"product-content__footer",children:(0,i.jsx)("h5",{className:"product-price--main",children:e.kategori})})]})]})},e.id))})})]}),(0,i.jsx)(b,{}),(0,i.jsx)(k,{})]})}}}},function(e){e.O(0,[774,16,962,947,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);