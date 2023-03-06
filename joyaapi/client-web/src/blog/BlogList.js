import React, { useEffect, useState } from "react";
import Menu from "../components/Navbar";
import { BLOGS } from "./Blogs";

const BlogList = () => {
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

  // Dynamic Blog Data Loop
  const DataList = (data) => {
    return data.data.map((val, i) => {
      return (
        <div className="col-md-6" key={i}>
          <div className="blog-item">
            <div
              id="blog-block"
              name="blog-block"
              className="blog-block"
              style={bgImg}
            >
              <div className="blog-box">
                <div className="overflow-hidden">
                  <a href={val.link}>
                    <img src={val.photo} alt="blog" className="img-fluid" />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog-text">
              <a href={val.textLink}>
                <p>{val.details}</p>
              </a>
              <h5>{val.username}</h5>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      {/*breadcrumb start*/}
      <div className="breadcrumb-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-text-center d-align-center">
              <h2 className="title">
                <span> Blog</span>
              </h2>
            </div>
            <div className="col-md-6 col-sm-6 col-text-center">
              <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                <ol className="breadcrumb bg-transparent mb-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      Blog
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/*breadcrumb end*/}

      {/*blog Section start*/}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="row blog-list">
                <DataList data={BLOGS} />
              </div>
            </div>

            {/*paginations*/}
            <div className="col-md-12">
              <nav aria-label="Page navigation" className="blog-pagination">
                <ul className="pagination justify-content-center blog-pagin">
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      aria-label="Previous"
                    >
                      <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                  </li>
                  <li className="page-item active">
                    <a
                      className="page-link"
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link"
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      aria-label="Next"
                    >
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/*paginations end*/}
          </div>
        </div>
      </section>
      {/*blog Section End*/}

      {/*Footer Section start*/}
      <div className="bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright-section">
                <p>2021- 22 Copyright &copy; Fibyou</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Footer Section End*/}
    </div>
  );
};

export default BlogList;
