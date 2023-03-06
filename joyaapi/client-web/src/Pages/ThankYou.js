import React, { useEffect } from "react";

export default function ThankYou() {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="full-page ">
      <div className="thanks-bg">
        <div className="container">
          <div className="col-md-12">
            <div className="thanks-section">
              <div>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/thank-you.png`}
                  className="img-fluid downlod-img"
                  alt=""
                />
                <div className="col-lg-8 offset-lg-2">
                  <h2>Thank You</h2>
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
        </div>
      </div>
      {/*copy-right-section*/}
      <footer className="bg-thanks">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-section">
                <p>2021-22 Copyright &copy; By Fibyou</p>
                <div className="mt-3 text-center">
                  <a
                    href={`${process.env.PUBLIC_URL}/`}
                    className="btn btn-custom theme-color theme-color pt-2 pb-2"
                  >
                    BACK TO HOME PAGE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*end copy right section*/}
    </div>
  );
}
