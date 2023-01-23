import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import beuniConfig from './config/beuni.config'
import { HttpModule } from './http/http.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        beuniConfig,
      ],
      envFilePath: ['.env'],
    }),
    HttpModule
  ],
  providers: [],
})
export class AppModule { }
