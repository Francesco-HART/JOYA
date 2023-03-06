import React, { useEffect, useState } from "react";
import Menu from "../components/Navbar";

const BlogLeftSidebar = () => {
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

  return (
    <div>
      <Menu />
      <div className="page-margin">
        {/*breadcrumb start*/}
        <div className="breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-text-center d-align-center">
                <h2 className="title">
                  Left<span> Sidebar</span>
                </h2>
              </div>
              <div className="col-md-6 col-sm-12 col-text-center">
                <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                  <ol className="breadcrumb bg-transparent mb-0">
                    <li className="breadcrumb-item">
                      <a href="/">Home</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="blog-list">Blog</a>
                    </li>
                    <li className="breadcrumb-item active">
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        Blog Details with Left Sidebar
                      </a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        {/*breadcrumb end*/}

        {/*blog Section starts*/}
        <section>
          <div className="container">
            <div className="row">
              {/*blog details starts*/}
              <div className="col-sm-12 col-md-8 col-lg-9">
                <div className="blog-item">
                  <div className="blog-block" style={bgImg}>
                    <div className="blog-box">
                      <div className="overflow-hidden">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/images/blog/blog-details.jpg"
                          }
                          alt="blog"
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="blog-text">
                    <h6>25 january 2018</h6>
                    <a
                      href="javascript"
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                    >
                      <h3 className="blog-head">
                        There are many variations of passages of Lorem Ipsum
                        available,{" "}
                      </h3>
                    </a>
                    <div className="blog-divider"></div>
                    <div className="blog-description">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of Lorem Ipsum.
                      </p>
                      <h5>Mark jkcno</h5>
                      <h5 className="pull-right">
                        {" "}
                        10 <i className="fa fa-heart-o"></i>, 50{" "}
                        <i className="fa fa-comments-o"></i>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="blog-divider"></div>

                {/*Comment section*/}
                <div className="reply-comment">
                  <div className="media">
                    <img
                      className="align-self-top mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/blog-comment.jpg"
                      }
                      alt="blog"
                    />
                    <div className="media-body">
                      <a href="blog-details">
                        <h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                      </a>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis.
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      className="align-self-top mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/blog-comment-two.jpg"
                      }
                      alt="blog"
                    />
                    <div className="media-body">
                      <a href="blog-details">
                        <h5 className="mt-0">Lorem Ipsum has been the</h5>
                      </a>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <img
                      className="align-self-top mr-3"
                      src={
                        process.env.PUBLIC_URL +
                        "/assets/images/blog/blog-comment-three.jpg"
                      }
                      alt="blog"
                    />
                    <div className="media-body">
                      <a href="blog-details">
                        <h5 className="mt-0">all the Lorem Ipsum Generator</h5>
                      </a>
                      <p>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel
                        metus scelerisque ante sollicitudin. Cras purus odio,
                        vestibulum in vulputate at, tempus viverra turpis.
                      </p>
                    </div>
                  </div>
                </div>
                {/*Comment section end*/}
                <div className="blog-divider"></div>
                {/*leave comment sectopn starts*/}
                <div className="row">
                  <div className="col-md-10 offset-md-1 leave-coment">
                    <h3 className="text-center">Leave Your Comment</h3>
                    <form className="theme-form footer-form p-0 mt-3">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-lg-6 col-md-12 md-fgrup-margin">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="your name"
                            />
                          </div>
                          <div className="col-lg-6 col-md-12">
                            <input
                              type="email"
                              className="form-control"
                              id="exampleFormControlInput1"
                              placeholder="email address"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="4"
                          placeholder="message"
                        ></textarea>
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
                {/*leave comment section end */}
              </div>
              {/*blog details end */}

              {/*sidebar starts*/}
              <div className="col-md-4 col-lg-3 order-md-first list-sidebar">
                <div className="sidebar">
                  <div className="sidebar-space">
                    <h4 className="blog-title">blog Category</h4>
                    <div className="blog-divider"></div>
                    <div className="blog-cat-detail">
                      <ul>
                        <li className="marg-15">
                          <a href="blog-details">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Lorem Ipsum is simply
                          </a>
                        </li>
                        <li className="marg-15">
                          <a href="blog-details">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>{" "}
                            There Are Many Variations
                          </a>
                        </li>
                        <li className="marg-15">
                          <a href="blog-details">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>{" "}
                            it has survived not only five
                          </a>
                        </li>
                        <li className="marg-15">
                          <a href="blog-details">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Lorem Ipsum has been the.
                          </a>
                        </li>
                        <li className="marg-15">
                          <a href="blog-details">
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            ></i>{" "}
                            Lorem Ipsum is random.
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="sidebar-space">
                    <h4 className="blog-title">Popular Tag</h4>
                    <div className="blog-divider"></div>
                    <div className="tags marg-20">
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">
                          Responsive design
                        </span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">Color options</span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">
                          Multiple demos
                        </span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">
                          Dedicated support
                        </span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">Documentation</span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">
                          PSD is included
                        </span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">Text</span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">Support</span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">Responsive</span>
                      </a>
                      <a
                        href="javascript"
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <span className="badge badge-theme">Design</span>
                      </a>
                    </div>
                  </div>
                  <h4 className="blog-title">Recent Post</h4>
                  <div className="blog-divider"></div>
                  <div className="recent-blog marg-20">
                    <div className="media">
                      <img
                        className="mr-3"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/blog/1.jpg"
                        }
                        alt="blog"
                      />
                      <div className="media-body">
                        <a href="blog-details">
                          <h5 className="mt-0">Lorem Ipsum Is Simply Dummy</h5>
                        </a>
                        <p className="m-0">05 March 2011</p>
                      </div>
                    </div>
                    <div className="media">
                      <img
                        className="mr-3"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/blog/2.jpg"
                        }
                        alt="blog"
                      />
                      <div className="media-body">
                        <a href="blog-details">
                          <h5 className="mt-0">Lorem Ipsum has been the</h5>
                        </a>
                        <p className="m-0">14 january 2015</p>
                      </div>
                    </div>
                    <div className="media">
                      <img
                        className="mr-3"
                        src={
                          process.env.PUBLIC_URL + "/assets/images/blog/3.jpg"
                        }
                        alt="blog"
                      />
                      <div className="media-body">
                        <a href="blog-details">
                          <h5 className="mt-0">all the Lorem Ipsum</h5>
                        </a>
                        <p className="m-0">30 November 2015</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*sidebar end*/}
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
    </div>
  );
};

export default BlogLeftSidebar;
