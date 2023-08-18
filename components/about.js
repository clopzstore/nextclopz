import React, { Component } from "react";
import Fancybox from "../utilities/Fancybox";
class About extends Component {
  render() {
    return (
      <div className="introduction-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
              <div className="introduction-three__image">
                <div className="introduction-three__image__background">
                  <img src="/image/bg.png" alt="background" />
                </div>
                <div className="introduction-three__image__detail">
                  <div className="image__item">
                    <div className="wrapper">
                      <img
                        data-depth="0.3"
                        src="/image/img-1.png"
                        alt="image"
                        width={370}
                        height={490}
                      />
                    </div>
                  </div>
                  <div className="image__item">
                    <div className="wrapper">
                      <Fancybox
                        options={{
                          Carousel: {
                            infinite: false,
                          },
                        }}
                      >
                        <a
                          href="https://www.youtube.com/watch?v=KB24Tem3T9k"
                          data-fancybox
                          className="videolink"
                        >
                          <i className="fa fa-play video"></i>
                          <img
                            data-depth="0.8"
                            src="/image/img-2.png"
                            alt="image"
                            width={300}
                            height={300}
                          />
                        </a>
                      </Fancybox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="introduction-three__content">
                <h5>CLOPZSTORE</h5>
                <h3>
                  Beragam Perlengkapan kecantikan <span>Wanita</span>
                </h3>
                <div className="more-description">
                  <img src="/image/decoration.png" alt="Decoration" />
                  <span>Toko Online Pilihan Anda</span>
                </div>
                <p>
                  Selamat datang di Clopzstore - destinasi lengkap untuk semua
                  kebutuhan kecantikan wanita. Kami dengan bangga
                  mempersembahkan koleksi terbaik dari produk-produk perawatan
                  dan peralatan kecantikan yang akan membantu Anda merayakan
                  keindahan alami Anda dengan percaya diri.
                </p>
                <a
                  className="btn -dark"
                  href="https://web.facebook.com/102093058332442/shop/all_products/?ref_code=mini_shop_profile_plus_shop_tab_cta&ref_surface=mini_shop_storefront"
                >
                  Kunjungi Toko
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
