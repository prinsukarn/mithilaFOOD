import React from "react";

function BookingSection(props) {
  return (
    <div>
      {/* book section */}
      <section className="book_section layout_padding">
        <div className="container">
          <div className="heading_container">
            <h2>Book A Table</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="form_container">
                <form action>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>
                  <div>
                    <select className="form-control nice-select wide">
                      <option value disabled selected>
                        How many persons?
                      </option>
                      <option value>2</option>
                      <option value>3</option>
                      <option value>4</option>
                      <option value>5</option>
                    </select>
                  </div>
                  <div>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="btn_box">
                    <button>Book Now</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113032.64621443553!2d85.25609158929645!3d27.708942726581757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!5e0!3m2!1sen!2snp!4v1638951756895!5m2!1sen!2snp"
                width="600"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* end book section */}
    </div>
  );
}

export default BookingSection;
