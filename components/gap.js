import React, { Component } from 'react';
class Gap extends Component {
    render() { 
        return (
            <div
            className="introduction-five"
            style={{backgroundImage: "url('/image/bgg.png')"}}>
            <div className="container">
              <div className="introduction-five__content">
                <h2>Dapatkan Penawaran Menarik</h2>
                <a className="btn -red" href="https://web.facebook.com/102093058332442/shop/all_products/?ref_code=page_shop_tab_card&ref_surface=mini_shop_storefront" target='_blank'>
                  Kunjungi toko sekarang{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        );
    }
}
export default Gap;