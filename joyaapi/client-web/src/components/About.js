import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const About = () => {
  const history = useHistory();

  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/about-bg.png)`,
  });

  const color = localStorage.getItem("color");
  useEffect(() => {
    setBgImg({
      backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/about-bg.png)`,
    });
  }, [color]);

  return (
    <section id="about" className="about" style={bgImg}>
      <div className="about-decor">
        <div className="about-circle1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/team1.png`}
            alt="team1"
          />
        </div>
        <div className="about-circle2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/main-banner1.png`}
            alt="banner1"
          />
        </div>
      </div>
      <div className="container">
        <div className="row ">
          <div className="col-md-5">
            <div className="about-contain">
              <div>
                <h2 className="title">
                  l'application <span>joya</span>
                </h2>
                <p className="caption-about">
                  JOYA est une application mobile dynamique, performante et
                  facile à prendre en main. Associée à un capteur connecté, nous
                  vous donnons la possibilité de suivre l'état de vos plantes en
                  temps réel.
                </p>
                <div className="row sm-mb">
                  <div className="col-6">
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
                          <h3>Système de notifications</h3>
                        </div>
                      </li>
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon3.png`}
                              alt="easy-to-use"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Informations en temps réel</h3>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6">
                    <ul className="about-style">
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon2.png`}
                              alt="Awasome-Design"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>User Friendly</h3>
                        </div>
                      </li>
                      <li className="abt-hover">
                        <div className="about-icon">
                          <div className="icon-hover">
                            <img
                              src={`${process.env.PUBLIC_URL}/assets/images/icon4.png`}
                              alt="SEO-Friendly"
                            />
                          </div>
                        </div>
                        <div className="about-text">
                          <h3>Base de données évolutive</h3>
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
                    en savoir plus
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-7 d-medium-none">
            <div className="about-right">
              <div className="about-phone">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/aboutus.png`}
                  className="img-fluid"
                  alt="aboutus"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
