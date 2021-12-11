import React from "react";

function Footer(props) {
  return (
    <div>
      {/* footer section */}
      <footer className="footer_section">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-col">
              <div className="footer_contact">
                <h4>Contact Us</h4>
                <div className="contact_link_box">
                  <a href>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Koteshwor-32, Kathmandu, Nepal</span>
                  </a>
                  <a href>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>Phone: +977-9887172695</span>
                  </a>
                  <a href>
                    <i className="fa fa-envelope" aria-hidden="true" />
                    <span>info@mithilafood.com</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <div className="footer_detail">
                <a href className="footer-logo">
                  mithilaFood
                </a>
                <p>Mouthwatering Food in your Budget</p>
                <div className="footer_social">
                  <a href="https://www.facebook.com/brownricetech">
                    <i className="fa fa-facebook" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-linkedin" aria-hidden="true" />
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 footer-col">
              <h4>Opening Hours</h4>
              <p>Everyday</p>
              <p>10.00 Am -10.00 Pm</p>
            </div>
          </div>
        </div>
      </footer>
      {/* footer section */}
    </div>
  );
}

export default Footer;
