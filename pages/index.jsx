import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetch from "isomorphic-unfetch";  
import { NextSeo } from "next-seo";
import dynamic from 'next/dynamic';
const Aboutcom = dynamic(() => import('../components/about'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Headcom = dynamic(() => import('../components/headder'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Slider = dynamic(() => import('react-slick'), {
  loading: () => '',
  ssr: false,
});
const Footcom = dynamic(() => import('../components/footer'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
const Gapcom = dynamic(() => import('../components/gap'), {
  loading: () => <div className="load-wraper">
    <div className="activity"></div>
  </div>,
  ssr: false,
});
export const config = {
  runtime: "experimental-edge",
};
export default class Index extends React.Component {
  static async getInitialProps() {

    const ress = await fetch("https://api.airtable.com/v0/appyb6VwSElije84f/slide?api_key=keyGlbdc0CCQr8oya");
    const shows = await ress.json();
    const datas = [];
    const resslide = await fetch("https://api.airtable.com/v0/appyb6VwSElije84f/slideproduk?api_key=keyGlbdc0CCQr8oya");
    const showslide = await resslide.json();
    const dataslide = [];
    for (var i = 0; i < shows.records.length; i++) {
      var vall = shows.records[i].fields;
      var id = shows.records[i].id;
      var title = vall["title"];
      var link = vall["link"];
      var poto = vall["poto"][0].url;
      var subtitle = vall["subtitle"];
      datas.push({
        id: id,
        link: link,
        title: title,
        subtitle: subtitle,
        poto: poto,
      });
    };
    for (var i = 0; i < showslide.records.length; i++) {
      var valls = showslide.records[i].fields;
      var id = showslide.records[i].id;
      var title = valls["title"];
      var link = valls["link"];
      var poto = valls["poto"];
      var kategori = valls["kategori"];
      dataslide.push({
        id: id,
        link: link,
        title: title,
        kategori: kategori,
        poto: poto,
      });
    };
    return { datas, dataslide };
  };
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
        }, {
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
              {this.props.datas.map((a) => {
                return (
                  <div className="slider__carousel__item slider-3" key={a.id}>
                    <div className="container">
                      <div className="slider-background">
                        <img
                          className="slider-background"
                          src={a.poto}
                          alt={a.title}
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
                          {a.title}
                        </h1>
                        <p
                          className="slider-content__description"
                          data-animation-in="fadeInUp"
                          data-animation-delay="0.3"
                        >
                          {a.subtitle}
                        </p>
                        <div
                          data-animation-in="fadeInUp"
                          data-animation-out="fadeInDown"
                          data-animation-delay="0.4"
                        >
                          {a.link ? (
                            <a className="btn -red" href={a.link}>
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
        <div className="product-tab-slide">
          <div className="container">
            <div className="product-tab-slide__header">
              <h5>Koleksi Terbaru</h5>
              <div className="product-tab-slide__header__controller">
                <a className="btn -white" href="https://web.facebook.com/profile.php?id=100063520513606" target="_blank">
                  Lihat semua
                </a>
              </div>
            </div>
          </div>
          <div className="product-tab-slide__content">
            <Slider {...settingsslide}>
              {this.props.dataslide.map((a, i) => {
                return (
                  <div className="product-slide__item" key={a.id}>
                    <div className="product ">
                      <div className="product-type"></div>
                      <div className="product-thumb">
                        <div className="product-thumb__image">
                          {a.poto ? a.poto.map((b) => (
                            <img src={b.url} alt="Product image" key={b.id} width={308} />
                          )) : <img src='/image/no.png' alt="Product image" />}
                        </div>
                      </div>
                      <div className="product-content">
                        <div className="product-content__header"></div>
                        {a.link ?
                          <a
                            className="product-name"
                            href={a.link}
                            target="_blank"
                          >
                            {a.title}
                          </a> : <span className="product-name" > {a.title}</span>

                        }
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
};