import React, { useEffect } from "react";
import { Box, Email, Image, Item, Span, A } from "react-html-email";

const css = `
@media only screen and (max-device-width: 480px) {
  font-size: 20px !important;
}`.trim();

const sourceURL = "https://required-website.link";

const EmailPage = () => {
  useEffect(() => {
    let timer = setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Email title="Test Email" headCSS={css}>
      <Item>
        <Span fontSize={15}>Thank You!</Span>
      </Item>
      <Item>
        <Box
          cellSpacing={20}
          width="100%"
          style={{ borderTop: "3px solid black" }}
        >
          <Item>
            <Span color="gray" lineHeight={10}>
              Your account is suspended, Please contact administrator at
              <A href="">fibyouclinet@gmail.com</A>
            </Span>
            <Image
              data-mc-bar="bar"
              data-mc-baz="baz"
              alt="react"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/100px-React.js_logo.svg.png"
              width={100}
              height={100}
            />
            <A download={sourceURL} href={sourceURL}>
              Source code
            </A>
          </Item>
        </Box>
      </Item>
    </Email>
  );
};

export default EmailPage;
