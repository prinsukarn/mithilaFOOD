import React, { useEffect } from "react";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { listmenu } from "../Actions/GetMenuAction.js";

function Burger(props) {
  // Dispatch Category List
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.getmenu);
  const { loading, error, getmenu } = menu;

  useEffect(() => {
    dispatch(listmenu());
  }, [dispatch]);

  return (
    <div>
      <Header />
      {/* food section */}

      <section className="food_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>Burger Menu</h2>
          </div>
          <div className="filters-content">
            <div className="row grid">
              {getmenu &&
                getmenu.map((comment, i) => (
                  <div className="col-sm-6 col-lg-3 all pizza">
                    <div className="box">
                      <div>
                        <div className="img-box">
                          <img src={comment.image} alt="" />
                        </div>
                        <div className="detail-box">
                          <h5>{comment.title}</h5>

                          <div className="options">
                            <h6>{comment.restaurantChain}</h6>
                            <h5 className="flex-end">{comment.price}</h5>{" "}
                            <h6>Rs.200</h6>
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

export default Burger;
