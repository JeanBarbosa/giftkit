import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import beuniConfig from './config/beuni.config'
import { HttpModule } from './http/http.module'
import appConfig from './config/app.config'
import mailConfig from './config/mail.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        appConfig,
        beuniConfig,
        mailConfig,
      ],
      envFilePath: ['.env'],
    }),
    HttpModule,
  ],
})
export class AppModule { }
