import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ApiModule } from '../api/api.module'
import { MailerModule } from '@nestjs-modules/mailer'
import { UsersService } from '../services/users.services'
import { SurprisegiftsService } from 'src/services/surprisegifts.services'
import { MailService } from '../mail/mail.service'
import { MailConfigService } from 'src/mail/mail-config.service'

import { UsersController } from './users/users.controller'
import { ProductsController } from './products/products.controller'
import { SurprisegiftsController } from './scratchcards/scratchcards.controller'

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    MailerModule.forRootAsync({
      useClass: MailConfigService,
    }),],
  providers: [
    MailService,
    SurprisegiftsService,
    UsersService,
  ],
  controllers: [
    UsersController,
    ProductsController,
    SurprisegiftsController,
  ]
})
export class HttpModule { }
