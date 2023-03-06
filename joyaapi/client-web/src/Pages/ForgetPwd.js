import React, { useEffect, useState } from "react";

const ForgetPwd = () => {
  const [showPwd, setShowPwd] = useState(false);
  
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);
  return (
    <section className="authentication-form">
      <div className="innerpage-decor">
        <div className="innerpage-circle1">
          <img src="assets/images/Testimonial2.png" alt="" />
        </div>
        <div className="innerpage-circle2">
          <img src="assets/images/Testimonial1.png" alt="" />
        </div>
      </div>
      <div>
        <h2 className="title text-center">
          RESET YOUR<span> PASSWORD</span>
        </h2>
        <div className="card">
          <form className="theme-form">
            <div className="form-group mt-2">
              <h6 className="mt-0 mb-3">Enter Your Mobile Number :</h6>
              <div className="form-row">
                <div className="col-4">
                  <input
                    type="text"
                    className="form-control digits mb-1"
                    defaultValue="+ 91"
                  />
                </div>
                <div className="col-8">
                  <input
                    type="tel"
                    className="form-control digits mb-1"
                    defaultValue="000-000-0000"
                  />
                </div>
                <div className="col-12 mt-4">
                  <button
                    type="submit"
                    className="btn btn-custom btn-block theme-color"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <h6 className="text-center mt-0 mb-3">
              If don't receive OTP?{" "}
              <a href="javascript" className="text-danger" onClick={(e)=>{e.preventDefault()}}>
                Resend
              </a>
            </h6>
            <div className="form-group rounded p-4 bg-light">
              <label className="col-form-label pt-0">Enter OTP</label>
              <div className="form-row">
                <div className="col">
                  <input
                    type="text"
                    className="form-control digits text-center opt-text"
                    defaultValue="00"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control digits text-center opt-text"
                    defaultValue="00"
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control digits text-center opt-text"
                    defaultValue="00"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input
                required=""
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <input
                type={showPwd ? "text" : "password"}
                name="login[password]"
                className="form-control"
                placeholder="retype password"
                required="required"
              />
              <div
                className="show-hide"
                onClick={() => {
                  setShowPwd(!showPwd);
                }}
              >
                <span className={!showPwd ? "show" : ""}></span>
              </div>
            </div>

            <div className="form-button text-center">
              <button type="submit" className="btn btn-custom theme-color">
                Done
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPwd;
