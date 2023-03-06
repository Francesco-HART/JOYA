import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

const Review = () => {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);

  return (
    <div>
      {/* Navbar Component*/}
      <Navbar />

      <div className="page-margin">
        {/*breadcrumb start*/}
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                <h2 className="title">
                  <span>Avis</span>
                </h2>
              </div>
              <div className="col-md-6 col-sm-6 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <a href={`${process.env.PUBLIC_URL}/`}>Accueil</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a href="javascript" onClick={(e)=>{e.preventDefault()}}>Avis</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumb end*/}

        {/*Review Section Start*/}
        <section>
          <div className="innerpage-decor">
            <div className="innerpage-circle1">
              <img src={`${process.env.PUBLIC_URL}/assets/images/Testimonial2.png`} alt="" />
            </div>
            <div className="innerpage-circle2">
              <img src={`${process.env.PUBLIC_URL}/assets/images/Testimonial1.png`} alt="" />
            </div>
          </div>
          <div className="review-block">
            <div className="container">
              <div className="row margin-bottom">
                <div className="col-lg-4 col-md-6">
                  <div className="review-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar/22.jpg`} alt="review" className="img-fluid" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review-message">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="review-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar/1.jpg`} alt="review" className="img-fluid" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review-message">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="review-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar/15.jpg`} alt="review" className="img-fluid" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review-message">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="review-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar/22.jpg`} alt="review" className="img-fluid" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review-message">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="review-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar/15.jpg`} alt="review" className="img-fluid" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review-message">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="review-box">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/avtar/1.jpg`} alt="review" className="img-fluid" />
                    <h5>John Martin</h5>
                    <div className="rating-star">
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </div>
                    <div className="review-message">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Review Section End*/}

        {/*Footer Section start*/}
        <div className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-section">
                  <p>2021 - 2022 | JOYA by Fibyou&copy;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Footer Section End*/}
      </div>
    </div>
  );
};

export default Review;
