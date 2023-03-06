import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { BLOGS } from "../blog/Blogs";

const Blog = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/team-img-bg.png)`,
  });

  const color = localStorage.getItem("color");

  useEffect(() => {
    if (color === "color-1")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/team-img-bg.png)`,
      });
    else if (color === "color-2")
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/team-img-bg.png)`,
      });
    else
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/team-img-bg.png)`,
      });
  }, [color]);

  //Slick slider Options
  const options = {
    arrows: false,
    accessibility: false,
    infinite: true,
    dots: true,
    dotClass: ".blog-carousel",
    margin: 30,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
        },
      },
    ],
  };

  let DataList = BLOGS.map((val, i) => {
    return (
      <div className="blog-item" key={i}>
        <div className="blog-block" style={bgImg}>
          <div className="blog-box">
            <div className="overflow-hidden">
              <a href={val.link}>
                <img src={val.photo} className="img-fluid" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="blog-text">
          <h6>{val.date}</h6>
          <a href={val.link}>
            <h3>{val.title}</h3>
          </a>
          <h5>
            posted by {val.username}, {val.hits} hits, {val.comments} comment
          </h5>
        </div>
      </div>
    );
  });

  return (
    <section id="blog" className="blog">
      <div className="about-decor">
        <div className="about-circle1">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images/team1.png`}
            className="img-fluid"
            alt="team1"
          />
        </div>
        <div className="about-circle2">
          <img
            src={`${process.env.PUBLIC_URL}/assets/images//main-banner1.png`}
            className="img-fluid"
            alt="main-banner1"
          />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h2 className="title">
              latest <span>blog</span>
            </h2>
          </div>
          <div className="col-sm-12">
            <Slider
              className="blog-carousel owl-carousel owl-theme rounded-dots slick-margin"
              {...options}
            >
              {DataList}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
