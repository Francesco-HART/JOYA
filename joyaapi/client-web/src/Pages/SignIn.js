import React, { useEffect, useState } from "react";

const SignIn = () => {
  const [showPwd, setShowPwd] = useState(false);

  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <section
      className="authentication-form"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/aut-bg.jpg)`,
      }}
    >
      <div className="innerpage-decor">
        <div className="innerpage-circle1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Testimonial2.png`}
            alt=""
          />
        </div>
        <div className="innerpage-circle2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Testimonial1.png`}
            alt=""
          />
        </div>
      </div>
      <div>
        <h2 className="title text-center">
          <span> Login</span>
        </h2>
        <p className="text-center">
          Welcome to joya, Please Login with your personal account information.
        </p>
        <div className="card">
          <form className="theme-form">
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="email address"
                required="required"
              />
            </div>
            <div className="form-group">
              <input
                required=""
                name="login[password]"
                type={showPwd ? "text" : "password"}
                className="form-control"
                placeholder="Password"
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
            <div className="form-group row custom-row">
              <div className="col-6">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customControlAutosizing"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customControlAutosizing"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <a
                href={`${process.env.PUBLIC_URL}/forget-password`}
                className="text-right col-6 theme-link"
              >
                lost your password
              </a>
            </div>
            <div className="form-button text-center">
              <button
                type="submit"
                className="btn btn-custom btn-lg theme-color"
              >
                Login
              </button>
            </div>
            <div className="or-saparator">
              <span>or</span>
            </div>
            <h6 className="text-center mt-0 mb-3">Sign in with:</h6>
            <div className="form-button text-center social-btns">
              <button type="submit" className="btn btn-custom fb">
                Facebook
              </button>
              <button type="submit" className="btn btn-custom ggl">
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
