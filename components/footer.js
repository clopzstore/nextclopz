import React, { Component } from 'react';
class Foot extends Component {
    render() { 
        return (
            <div className="footer-one">
            <div className="container">
              <div className="footer-one__header">
                <div className="footer-one__header__logo">
                  <a href="/">
                    <img src="/image/logo.png" alt="Logo" />
                  </a>
                </div>
    
                <div className="footer-one__header__social">
                  <div className="social-icons -border">
                    <ul>
                      <li>
                        <a
                          href="https://web.facebook.com/profile.php?id=100063520513606" target="_blank"
                          style={{ color: "undefined" }}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
    
                      <li>
                        <a
                          href="https://www.instagram.com/clopzstores/?hl=en" target="_blank"
                          style={{ color: "undefined" }}
                        >
                          <i className="fab fa-instagram"> </i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.youtube.com/channel/UCwh1XudQqbdjJKMEc9L_EfQ" target="_blank"
                          style={{ color: "undefined" }}
                        >
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-one__footer">
              <div className="container">
                <div className="footer-one__footer__wrapper text-center text-lg-start">
                  <p>©2023 Clopzstore</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Foot;