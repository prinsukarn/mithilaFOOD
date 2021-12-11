import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { listmenu, chickenlist } from "../Actions/GetMenuAction.js";

function Chicken(props) {
  // Dispatch Category List
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.getmenu);
  const { loading, error, getmenu } = menu;

  useEffect(() => {
    dispatch(chickenlist());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {/* food section */}

      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Chicken Menu</h2>
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
                            <h6>Rs.150</h6>
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

export default Chicken;
