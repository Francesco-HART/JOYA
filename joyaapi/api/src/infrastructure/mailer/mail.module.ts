import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'judd.steuber68@ethereal.email',
          pass: 'YPeQ4F63UZZA1wwBKY',
        },
        tls: { rejectUnauthorized: false },
      },
    }),
  ],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
