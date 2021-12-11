import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Hero(props) {
  return (
    <div>
      <div className="hero_area">
        <div className="bg-box">
          <img src="assets/images/hero-bg.jpg" alt="" />
        </div>
        <Header />
        {/* slider section */}
        <section className="slider_section ">
          <div
            id="customCarousel1"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Fast Food Restaurant</h1>
                        <h4>
                          Mithila Food brings you the delicacies of mithila
                          along with fast food.
                        </h4>
                        <div>
                          <Link to="/book">
                          
                              Book Now
                           
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item ">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>20% Discount</h1>
                        <h4>
                          Get uh4to 20% discount on Thursdays and weekends
                        </h4>
                        <div>
                          <Link to="/book">
                          
                              Book Now
                           
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container ">
                  <div className="row">
                    <div className="col-md-7 col-lg-6 ">
                      <div className="detail-box">
                        <h1>Online Booking</h1>
                        <h4>
                          Book a table now and get your table reserved for a
                          delicious family time.
                        </h4>
                        <div>
                          <Link to="/book">Book Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container">
              <ol className="carousel-indicators">
                <li
                  data-target="#customCarousel1"
                  data-slide-to={0}
                  className="active"
                />
                <li data-target="#customCarousel1" data-slide-to={1} />
                <li data-target="#customCarousel1" data-slide-to={2} />
              </ol>
            </div>
          </div>
        </section>
        {/* end slider section */}
      </div>
    </div>
  );
}

export default Hero;
