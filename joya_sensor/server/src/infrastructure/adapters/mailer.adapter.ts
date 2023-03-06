import { IMailerPort, MailData } from "../../domain/ports/mailer.port";
import { mailer, SMTP_LOGIN } from "../config/nodemailer/nodemailer.config";

class MailerAdapter extends IMailerPort {
  async sendMail({ body, receiver, subject }: MailData): Promise<void> {
    await mailer().sendMail({
      from: `JOYA <${SMTP_LOGIN}>`,
      to: receiver,
      subject: subject,
      html: body,
    });
  }
}

export { MailerAdapter };
