import React from "react";
import { Link } from "react-router-dom";

function AboutSection(props) {
  return (
    <div>
      {/* about section */}
      <section className="about_section layout_padding">
        <div className="container  ">
          <div className="row">
            <div className="col-md-6 ">
              <div className="img-box">
                <img src="assets/images/burger.png" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2>mithilaFOOD</h2>
                </div>
                <p>
                  If you're a foodie who is always drooling to try mouthwatering
                  recipes, then mithilaFOOD is the right place for you. We are
                  open to serve you delicious fast food items at your budget.
                </p>
                <h2>Mouthwatering Food in your Budget</h2>
                <Link to="/menu">View Menu</Link>&nbsp;
                <Link to="/book">Book Now</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end about section */}
    </div>
  );
}

export default AboutSection;
