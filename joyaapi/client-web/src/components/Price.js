import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const Price = () => {
  useEffect(() => {
    let timer= setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () =>{ clearTimeout(timer)}
  }, []);

  const [bgImg, setBgImg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price-bg.png)`
  });
  const color = localStorage.getItem("color");

  const [priceBg, setPriceBg] = useState({
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price.png)`
  });

  useEffect(() => {
    if (color === "color-1") {
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price-bg.png)`
      });
      setPriceBg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/price.png)`
      });
    }
    else if (color === "color-2") {
      setBgImg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/price-bg.png)`
      })
      setPriceBg({
        backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-2/price.png)`
      })
    }
    else {
      setBgImg({ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/price-bg.png)` })
      setPriceBg({ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/color/color-3/price.png)` })

    }
  }, [color]);


  const options = {
    dots: false,
    arrows: false,
    accessibility: false,
    infinite: true,
    margin: 30,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };

  // Dynamic Price Data Easy to Update
  let data = [
    {
      title: "Basic",
      lable: "Only the basic features",
      price: "969",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
      link: "#",
    },
    {
      title: "Standard",
      lable: "Take it to the next level",
      price: "969",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
      link: "#",
    },
    {
      title: "Custom",
      lable: "Our biggest plan",
      price: "969",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
      link: "#",
    },
    {
      title: "Custom",
      lable: "Our biggest plan",
      price: "969",
      features:
        "<li>1 GB of space</li><li>real time sync</li><li>unlimited attachment</li><li>customize theme</li><li>priority email support</li>",
      link: "#",
    },
  ];

  // Dynamic Price Data Loop
  let DataList = data.map((val, i) => {
    return (
      <div className="price-item d-flex" key={i}>
        <div className="price-block">
          <div className="price-type" style={bgImg}>
            <h2>{val.title}</h2>
          </div>
          <div className="mrp">
            <h6 className="user-type">{val.lable}</h6>
            <div className="price-devide"></div>
            <h2>${val.price}</h2>
            <h6 className="price-year">per year</h6>
            <div className="price-devide"></div>
          </div>
          <ul
            className="price-feature"
            dangerouslySetInnerHTML={{ __html: val.features }}
          ></ul>
          <a
            href={val.link}
            className="btn btn-custom theme-color"
            role="button"
          >
            Select Plan
          </a>
        </div>
      </div>
    );
  });

  return (
    <section id="price" className="price" style={priceBg}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Slider
              className="price-carousel owl-carousel owl-theme slick-margin"
              {...options}
            >
              {" "}
              {DataList}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Price;
