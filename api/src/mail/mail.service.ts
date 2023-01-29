import { MailerService } from '@nestjs-modules/mailer'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MailData } from './interfaces/mail-data.interface'

@Injectable()
export class MailService {
  constructor(
    private mailerService: MailerService,
    private configService: ConfigService,
  ) { }

  async newSurpriseGift(mailData: MailData<{
    title: string,
    url1: string,
    url2: string,
    url3: string,
  }>) {
    await this.mailerService.sendMail({
      to: mailData.to,
      subject: mailData.data.title,
      text: `${this.configService.get('app.frontendDomain')}`,
      template: 'surprisegift',
      context: {
        title: mailData.data.title,
        url1: mailData.data.url1,
        url2: mailData.data.url2,
        url3: mailData.data.url3,
        text1: 'escolha entre os presentes surpresa',
      },
    })
  }
}
