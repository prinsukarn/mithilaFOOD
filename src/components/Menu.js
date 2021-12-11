import React, { useSelector, useDispatch, useEffect } from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  return (
    <div id="menusec">
      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Our Menu</h2>
          </div>
          <div className="filters-content">
            <div className="row grid">
              <div className="col-sm-6 col-md-3">
                <Link to="/burger">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/424571-312x231.png"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Burger&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-sm-6 col-md-3">
                <Link to="/pizza">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/426101-312x231.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Pizza&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link to="/chicken">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/418834-312x231.png"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Chicken&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link to="/egg">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://spoonacular.com/menuItemImages/poached-egg.png"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Egg&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* /********************************************Menu Row 2****************************************** */}
            <div className="row grid">
              <div className="col-sm-6 col-md-3">
                <Link to="/noodles">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/323969-312x231.png"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Noodles&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link to="/pork">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/260094-312x231.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Pork&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link to="/icecream">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/421608-312x231.jpg"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Ice Cream&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-sm-6 col-md-3">
                <Link to="/sandwich">
                  <div className="box">
                    <div>
                      <div className="img-box">
                        <img
                          src="https://images.spoonacular.com/file/wximages/419451-312x231.png"
                          alt=""
                        />
                      </div>
                      <div className="detail-box">
                        <h5>
                          Sandwich&nbsp;<span className="flex-end">(20)</span>
                        </h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end food section */}
    </div>
  );
}

export default Menu;
