import React, { useEffect } from "react";
import { useHistory } from "react-router";

const AboutSensor = () => {
  const history = useHistory();

  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="about" className="about">
      <div className="about-decor">
        <div className="about-circle2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/Testimonial1.png`}
            alt="team1"
          />
        </div>
        <div className="team-circle1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/main-banner1.png`}
            alt="banner1"
          />
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-7 d-medium-none">
            <div className="about-right">
              <div className="about-phone">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/aboutsensor.png`}
                  className="img-fluid"
                  alt="aboutus"
                />
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="about-contain">
              <div>
                <h2 className="title">
                  le capteur <span>joya</span>
                </h2>
                <p className="caption-about">
                  Le capteur JOYA est le système qui vous permet de savoir en temps 
                  réel l'état de votre plante où que vous soyez !
                </p>
                <div className="row sm-mb">
                  <div className="col-lg-6">
                    <ul className="about-style">
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon1.png`}
                              alt="easy-to-customized"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Paramétrage facile</h3>
                        </div>
                      </li>
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon6.png`}
                              alt="easy-to-use"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Longue durée de vie</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="about-style">
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon5.png`}
                              alt="Awasome-Design"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>3 en 1</h3>
                        </div>
                      </li>
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon7.png`}
                              alt="SEO-Friendly"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Analyse des données</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="top-margin">
                  <button
                    type="button"
                    onClick={() => {
                      history.push("subscribe");
                    }}
                    className="btn btn-custom theme-color theme-color"
                  >
                    en savoir plus...
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSensor;
