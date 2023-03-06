import React, { useEffect } from "react";

const PageNotFound = () => {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);

  return (
    <div className="authentication-form not-found">
      <div className="innerpage-decor">
        <div className="innerpage-circle1">
          <img src="assets/images/Testimonial2.png" alt="" />
        </div>
        <div className="innerpage-circle2">
          <img src="assets/images/Testimonial1.png" alt="" />
        </div>
      </div>
      <div className="text-center">
        <h2 className="error-font">
          4<span>0</span>4
        </h2>
        <h2 className="f-bold">Not found</h2>
        <div className="col-md-8 offset-md-2 col-12">
          <h3>
            The page you are attempting to reach is currently not available.
            This may be because the page does not exist or has been moved.
          </h3>
        </div>
        <div className="mt-5">
          <a
            href={`${process.env.PUBLIC_URL}/`}
            className="btn btn-custom theme-color theme-color pt-2 pb-2"
          >
            BACK TO HOME PAGE
          </a>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
