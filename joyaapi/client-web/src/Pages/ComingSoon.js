import React, { useEffect } from "react";
import Countdown from "react-countdown";

const ComingSoon = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <ul className="p-0 m-0">
          <li>
            <span id="days">{days}</span>days
          </li>
          <li>
            <span id="hours">{hours}</span>Hours
          </li>
          <li>
            <span id="minutes">{minutes}</span>Minutes
          </li>
          <li>
            <span id="seconds">{seconds}</span>Seconds
          </li>
        </ul>
      );
    }
  };

  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var countdown = new Date(year, month, day + 21).getTime();

  return (
    <div>
      {/*home section*/}
      <section
        className="authentication-form coming-soon"
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
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 offset-xl-3">
              <div className="fadeInLeft-land-caption text-center">
                <div className="">
                  <div>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/logoimage.png`}
                      alt="caption-img"
                      className="caption-img"
                    />
                    <div className="clock-box">
                      <h3>We Are Coming soon</h3>
                      <p>
                        Please check back again within Some Days as We're Pretty
                        Close
                      </p>
                      <Countdown
                        date={new Date(countdown)}
                        renderer={renderer}
                      />
                      ,
                    </div>

                    <a
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <img
                        src={`${process.env.PUBLIC_URL}/assets/images/appstore.png`}
                        alt="appstore"
                        className="store"
                      />
                    </a>
                    <a
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <img
                        className="ml-4 store"
                        src={`${process.env.PUBLIC_URL}/assets/images/play-store.png`}
                        alt="play-store"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*home section end*/}

      <section className="coming-soon md-pt-0" data-anchor="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <div className="footer-text">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/email.png`}
                  alt="email"
                />
                <h2 className="title text-center md-margin-top">
                  subscribe to <span>newsletter</span>
                </h2>
                <p> The best way to stay informed is to subscribe</p>
                <form
                  className="footer-form"
                  action="https://getform.io/f/41d9ad58-277a-4a29-814c-9a41bcb84818"
                  method="POST"
                >
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      className="form-control"
                      required
                      placeholder="enter your email"
                    />
                  </div>
                  <div className="form-button">
                    <button
                      type="submit"
                      className="btn btn-custom theme-color"
                    >
                      send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Footer Section start*/}
      <footer className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-section">
                <p>2021-22 Copyright © By Fibyou</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/*Footer Section End*/}
    </div>
  );
};

export default ComingSoon;
