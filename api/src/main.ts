import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import * as MailDev from 'maildev'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.enableCors()

  if (configService.get('app.nodeEnv') === 'development') {
    const maildev = new MailDev({
      smtp: 1025 // incoming SMTP port - default is 1025
    })

    maildev.listen((err) => {
      console.log('We can now sent emails to port 1025!')
    })
  }

  await app.listen(configService.get('app.port'))
}
bootstrap()
