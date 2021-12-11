import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { sandwichlist } from "../Actions/GetMenuAction.js";

function Sandwich(props) {
  // Dispatch Category List
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.getmenu);
  const { loading, error, getmenu } = menu;

  useEffect(() => {
    dispatch(sandwichlist());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {/* food section */}

      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Sandwich Menu</h2>
          </div>

          <div className="filters-content">
            <div className="row grid">
              {getmenu &&
                getmenu.map((comment, i) => (
                  <div className="col-sm-6 col-lg-3">
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img src={comment.image} alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>{comment.title}</h5>
                          <div className="options">
                            <h6>{comment.restaurantChain}</h6>
                            <h6>Rs.180</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {/* end food section */}
    </div>
  );
}

export default Sandwich;
