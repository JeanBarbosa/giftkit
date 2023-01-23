import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { AppController } from './http/app.controller'
import { AppService } from './http/app.service'
import { HttpModule } from '@nestjs/axios'
import { ApiModule } from './api/api.module'
import { DatabaseModule } from './database/database.module'
import beuniConfig from './config/beuni.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        beuniConfig,
      ],
      envFilePath: ['.env'],
    }),
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    ApiModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule { }
