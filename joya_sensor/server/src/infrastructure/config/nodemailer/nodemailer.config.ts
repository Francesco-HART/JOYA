import nodemailer from "nodemailer";

const { SMTP_DOMAIN, SMTP_PORT, SMTP_LOGIN, SMTP_PASSWORD } = process.env;

const mailer = () => {
  const port = Number(SMTP_PORT);
  return nodemailer.createTransport({
    host: SMTP_DOMAIN,
    port: port,
    secure: port === 465 ? true : false,
    auth: {
      user: SMTP_LOGIN,
      pass: SMTP_PASSWORD,
    },
    tls: { rejectUnauthorized: false },
  });
};

export { mailer, SMTP_LOGIN };
