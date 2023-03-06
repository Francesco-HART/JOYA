type MailData = {
  body: any;
  receiver: string;
  subject: string;
  from?: string;
};

abstract class IMailerPort {
  abstract sendMail(data: MailData): Promise<void>;
}

export { IMailerPort };
export type { MailData };
