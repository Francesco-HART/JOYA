import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const ScreenShot = () => {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);
  const [bgImg, setBgImg]= useState({
    backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/screenshot-bg.png)`
  });

  const color= localStorage.getItem("color");

  useEffect(()=>{    
    if(color === "color-1")
     setBgImg( {
      backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/screenshot-bg.png)`
    });
    else if(color === "color-2")
    setBgImg({ backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-2/screenshot-bg.png)`
	})
    else 
    setBgImg({backgroundImage:`url(${process.env.PUBLIC_URL}/assets/images/color/color-3/screenshot-bg.png)`
	})
  },[color]);

  const options = {
    arrows: false,
    accessibility: false,
    infinite: true,
    dots: false,
    margin: 30,
    speed: 300,
    autoplaySpeed: 8000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '110px',
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '132px',
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '132px',
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '50px',
        },
      }
    ],
  };

  return (
    <section id="screenshot" className="screenshot padding-top-bottom" style={bgImg}>
      <div className="screenshot-decor">
        <div className="screenshot-circle1">
          <img src={`${process.env.PUBLIC_URL}/assets/images/feature-circle-two.png`} alt="feature-circle-two" />
        </div>
        <div className="screenshot-circle2">
          <img src={`${process.env.PUBLIC_URL}/assets/images/feature-circle.png`} alt="feature-circle" />
        </div>
        <div className="screenshot-circle3">
          <img src={`${process.env.PUBLIC_URL}/assets/images/main-banner1.png`} alt="feature-circle-three" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="screenshot-contain">
              <img className="mobile-light-left" src={`${process.env.PUBLIC_URL}/assets/images/light.png`} alt="light" />
              <img
                className="mob-mocup img-fluid"
                src={`${process.env.PUBLIC_URL}/assets/images/screenshot-mob.png`}
                alt="screenshot-mob"
              />
              <img
                className="mobile-light-right"
                src={`${process.env.PUBLIC_URL}/assets/images/light-right.png`}
                alt="light-right"
              />
              <Slider
                {...options}
                className="screenshot-carousel slick-margin"
              >
                <div className="screenshot-item">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/app/2.2.png`} alt="app" className="img-fluid" />
                </div>
                <div className="screenshot-item">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/app/2.4.png`} alt="app" className="img-fluid" />
                </div>
                <div className="screenshot-item">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/app/2.1.png`} alt="app" className="img-fluid" />
                </div>
                <div className="screenshot-item">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/app/2.5.png`} alt="app" className="img-fluid" />
                </div>
                <div className="screenshot-item">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/app/2.3.png`} alt="app" className="img-fluid" />
                </div>
                <div className="screenshot-item">
                  <img src={`${process.env.PUBLIC_URL}/assets/images/app/2.6.png`} alt="app" className="img-fluid" />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenShot;
