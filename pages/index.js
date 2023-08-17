import Headcom from "../components/headder";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import fetch from "isomorphic-unfetch";
import Slider from "react-slick";
/*export const config = {
  runtime: 'experimental-edge',
}*/
export default class Index extends React.Component {
  static async getInitialProps() {
    const ress = await fetch(
      "https://api.airtable.com/v0/appQOQbIXft6asexm/slide?api_key=keyWjSEzEwtUqENPG"
    );
    const shows = await ress.json();
    const datas = [];
    for (var i = 0; i < shows.records.length; i++) {
      var vall = shows.records[i].fields;
      var id = shows.records[i].id;
      var title = vall["title"];
      var link = vall["link"];
      var poto = vall['poto'][0]['thumbnails'].large.url;
      var subtitle = vall["subtitle"];
      datas.push({
        id: id,
        link: link,
        title: title,
        subtitle: subtitle,
        poto: poto,
      });
    }
    return { datas };
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
    return (
      <>
        <Headcom />
        <div className="slider -style-3 slider-arrow-middle">
          <div className="slider__carousel">
            <Slider {...settings}>
            {this.props.datas.map((a) => (

              <div className="slider__carousel__item slider-3" key={a.id}>
                <div className="container">
                  <div className="slider-background">
                    <img
                      className="slider-background"
                      src={a.poto}
                      alt={a.title}
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

{a.link ?
                      <a
                        className="btn -red"
                        href={a.link}
                      >
                        Lihat koleksi
                      </a>
                      : ''
  }

                    </div>
                  </div>
                </div>
              </div>

))}

            </Slider>
          </div>
        </div>
      </>
    );
  }
}