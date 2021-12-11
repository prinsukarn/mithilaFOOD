import React from "react";
import { Link } from "react-router-dom";

function OfferSection(props) {
  return (
    <div>
      {/* offer section */}
      <section className="offer_section layout_padding-bottom">
        <div className="offer_container">
          <div className="container ">
            <div className="row">
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="assets/images/o1.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Tasty Thursdays</h5>
                    <h6>
                      <span>20%</span> Off
                    </h6>

                    <Link to="/book">Book Now</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6  ">
                <div className="box ">
                  <div className="img-box">
                    <img src="assets/images/o2.jpg" alt="" />
                  </div>
                  <div className="detail-box">
                    <h5>Pizza Days</h5>
                    <h6>
                      <span>15%</span> Off
                    </h6>

                    <Link to="/book">Book Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end offer section */}
    </div>
  );
}

export default OfferSection;
