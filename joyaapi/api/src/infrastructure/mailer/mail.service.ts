import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { createTransport } from 'nodemailer';

import { MailDTO } from './dto/mail.dto';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(mailDTO: MailDTO): Promise<void> {
    await this.mailerService.sendMail(mailDTO);
  }

  // async verifyConnection(
  //   mailSettingsDTO: MailSettingsDTO,
  // ): Promise<{ success: boolean }> {
  //   try {
  //     const { host, port, login, password } = mailSettingsDTO;
  //     const transporter = createTransport({
  //       host,
  //       port,
  //       secure: port === 465 ? true : false,
  //       auth: {
  //         user: login,
  //         pass: password,
  //       },
  //       tls: { rejectUnauthorized: false },
  //     } as any);
  //     await transporter.verify();
  //     return { success: true };
  //   } catch (e) {
  //     return { success: false };
  //   }
  // }
}
