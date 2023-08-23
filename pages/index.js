import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA4J8KKCdKIY4dpQt9aESZ1OeWtkApM0qs",
  authDomain: "docapp-e4e9c.firebaseapp.com",
  projectId: "docapp-e4e9c",
  storageBucket: "docapp-e4e9c.appspot.com",
  messagingSenderId: "389725881316",
  appId: "1:389725881316:web:4a2dc1c3440977a3e07df1",
};
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const dbSlide = collection(database, "slides");
const dbSlideproduct = collection(database, "productslide");
//const [datas, ds]=useState([])
const Aboutcom = dynamic(() => import("../components/about"), {
  loading: () => (
    <div className="load-wraper">
      <div className="activity"></div>
    </div>
  ),
  ssr: false,
});
const Headcom = dynamic(() => import("../components/headder"), {
  loading: () => (
    <div className="load-wraper">
      <div className="activity"></div>
    </div>
  ),
  ssr: false,
});
const Slider = dynamic(() => import("react-slick"), {
  loading: () => "",
  ssr: false,
});
const Footcom = dynamic(() => import("../components/footer"), {
  loading: () => (
    <div className="load-wraper">
      <div className="activity"></div>
    </div>
  ),
  ssr: false,
});
const Gapcom = dynamic(() => import("../components/gap"), {
  loading: () => (
    <div className="load-wraper">
      <div className="activity"></div>
    </div>
  ),
  ssr: false,
});
/*export const config = {
  runtime: "experimental-edge",
};*/
export default class Index extends React.Component {
  static async getInitialProps() {
    /* const slidesitem = [];
    getDocs(dbSlide).then((data) => {
      var datax = data.docs;
      for (var i = 0; i < datax.length; i++) {
        var vall = datax[i].data();
        var title = vall["title"];
        var subtitle = vall["subtitle"];
        var link = vall["link"];
        var poto = vall["poto"][0]['downloadURL'];
        slidesitem.push({
          poto: poto,
          title: title,
          subtitle: subtitle,
          link: link,
        });
      }
    });*/
    const querySnapshot = await getDocs(dbSlide);
    const querySnapshotp = await getDocs(dbSlideproduct);
    const slidesitem = [];
    const produkitem = [];
    querySnapshot.forEach((doc, i) => {
      // for query doc snapshots
      var vall = doc.data();
      var title = vall["title"];
      var subtitle = vall["subtitle"];
      var link = vall["link"];
      var poto = vall["poto"][0]["downloadURL"];
      slidesitem.push({
        poto: poto,
        title: title,
        subtitle: subtitle,
        link: link,
      });
    });
    querySnapshotp.forEach((b, i) => {
      var vall = b.data();
      var title = vall["title"];
      var kategori = vall["kategori"];
      var link = vall["link"];
      var myArrayOfObject = Object.values(b.data().poto);
/*
      b.data().poto.forEach(function (c) {
        potoitem.push(c.downloadURL)
      });*/
      produkitem.push({
        poto: myArrayOfObject,
        title: title,
        kategori: kategori,
        link: link,
      });  
    });
    return { slidesitem, produkitem };
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "rgba(0,0,0, .7)" }}
          onClick={onClick}
        />
      );
    }
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "rgba(0,0,0, .7)" }}
          onClick={onClick}
        />
      );
    }
    var settingsslide = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 3000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <>
        <NextSeo
          title="Selamat Datang di clopz store"
          description="Toko Beragam Perlengkapan kecantikan Wanita"
          canonical="https://clopzstore.my.id/"
          openGraph={{
            url: "https://clopzstore.my.id/",
            title: "Selamat Datang di clopz store",
            description: "Toko Beragam Perlengkapan kecantikan Wanita",
            images: [
              {
                url: "https://clopzstore.my.id/image/pic.jpeg",
                width: 600,
                height: 315,
                alt: "clopz store",
              },
            ],
            site_name: "clopz store",
          }}
        />

        <Headcom />

        <div className="slider -style-3 slider-arrow-middle">
          <div className="slider__carousel">
            <Slider {...settings}>
              {this.props.slidesitem.map((i) => {
                return (
                  <div className="slider__carousel__item slider-3" key={i.id}>
                    <div className="container">
                      <div className="slider-background">
                        <img
                          className="slider-background"
                          src={i.poto}
                          alt={i.title}
                          width={1366}
                          height={760}
                        />
                      </div>

                      <div className="slider-content">
                        <h1
                          className="slider-content__title"
                          data-animation-in="fadeInUp"
                          data-animation-delay="0.2"
                        >
                          {i.title}
                        </h1>
                        <p
                          className="slider-content__description"
                          data-animation-in="fadeInUp"
                          data-animation-delay="0.3"
                        >
                          {i.subtitle}
                        </p>
                        <div
                          data-animation-in="fadeInUp"
                          data-animation-out="fadeInDown"
                          data-animation-delay="0.4"
                        >
                          {i.link ? (
                            <a className="btn -red" href={i.link}>
                              Lihat koleksi
                            </a>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <Aboutcom />
        <div></div>
        <div className="product-tab-slide">
          <div className="container">
            <div className="product-tab-slide__header">
              <h5>Koleksi Terbaru</h5>
              <div className="product-tab-slide__header__controller">
                <a
                  className="btn -white"
                  href="https://web.facebook.com/profile.php?id=100063520513606"
                  target="_blank"
                >
                  Lihat semua
                </a>
              </div>
            </div>
          </div>
          <div className="product-tab-slide__content">
            <Slider {...settingsslide}>
              {this.props.produkitem.map((a, i) => {
                return (
                  <div className="product-slide__item" key={a.id}>
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <div className="product-thumb__image">

                          {a.poto.map((x) => (
                            <img src={x.downloadURL} alt="Product image" width={308} />
                          ))}
                                    
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header"></div>
                        {a.link ? (
                          <a
                            className="product-name"
                            href={a.link}
                            target="_blank"
                          >
                            {a.title}
                          </a>
                        ) : (
                          <span className="product-name"> {a.title}</span>
                        )}
                        <div className="product-content__footer">
                          <h5 className="product-price--main">{a.kategori}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
        <Gapcom />
        <Footcom />
      </>
    );
  }
}
