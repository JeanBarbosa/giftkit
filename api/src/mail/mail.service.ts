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

  async newSurpriseGift(mailData: MailData<{ hash: string }>) {
    await this.mailerService.sendMail({
      to: mailData.to,
      subject: 'common.confirmEmail',
      text: `${this.configService.get('app.frontendDomain')}/confirm-email/${mailData.data.hash
        } common.confirmEmail`,
      template: 'surprisegift',
      context: {
        title: 'common.confirmEmail',
        url: `${this.configService.get('app.frontendDomain')}/confirm-email/${mailData.data.hash
          }`,
        actionTitle: 'common.confirmEmail',
        app_name: this.configService.get('app.name'),
        text1: 'Trouble signing in?',
        text2: 'Resetting your password is easy.',
        text3: 'If you did not make this request then please ignore this email.',
      },
    })
  }
}
