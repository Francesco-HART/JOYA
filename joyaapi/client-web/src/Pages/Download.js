import React, { useEffect } from "react";

const Download = () => {
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
      className="authentication-form download"
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
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="text-center">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/down.png`}
                className="img-fluid downlod-img"
                alt=""
              />
              <div className="col-lg-8 offset-lg-2">
                <h2>Your download should begin automatically</h2>
              </div>
              <h3>
                If it doesn’t start automatically,{" "}
                <a
                  href="javascript"
                  className="manual-down"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  please click here to downlaod manually.
                </a>
              </h3>
            </div>
          </div>
        </div>
        {/*copy-right-section*/}
        <footer className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-section">
                  <p>2021-22 Copyright &copy; By Fibyou Strap</p>
                </div>
                <div className="form-button text-center">
                  <a
                    href="/"
                    className="btn btn-custom btn-lg theme-color btn-back"
                  >
                    <i className="fa fa-angle-double-left mr-2"></i>Back to home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/*end copy right section*/}
      </div>
    </section>
  );
};

export default Download;
