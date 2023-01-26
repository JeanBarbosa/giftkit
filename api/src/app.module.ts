import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import beuniConfig from './config/beuni.config'
import { HttpModule } from './http/http.module'
import appConfig from './config/app.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        beuniConfig,
        appConfig
      ],
      envFilePath: ['.env'],
    }),
    HttpModule
  ],
  providers: [],
})
export class AppModule { }
