import React, { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="footer-text">
              <img
                src={`${process.env.PUBLIC_URL}/assets/images/email.png`}
                alt="email"
              />
              <h2 className="title text-center md-margin-top">
                s'inscrire à la  <span>newsletter</span>
              </h2>
              <p>La meilleure façon de rester informé est de s'abonner.</p>
              <form
                action="https://getform.io/f/41d9ad58-277a-4a29-814c-9a41bcb84818"
                method="post"
                className="footer-form needs-validation"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                target="_blank"
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Saisir votre adresse email"
                    name="email"
                    id="mce-EMAIL"
                    required="required"
                  />
                </div>
                <div className="form-button">
                  <button
                    type="submit"
                    className="btn btn-custom theme-color"
                    id="mc-submit"
                  >
                    s'inscrire
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
