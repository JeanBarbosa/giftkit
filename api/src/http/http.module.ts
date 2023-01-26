import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ApiModule } from '../api/api.module'
import { MailerModule } from '@nestjs-modules/mailer'
import { UsersService } from '../services/users.services'
import { ScratchcardsService } from 'src/services/scratchcards.services'
import { MailService } from '../mail/mail.service'
import { MailConfigService } from 'src/mail/mail-config.service'

import { UsersController } from './users/users.controller'
import { ProductsController } from './products/products.controller'
import { ScratchcardsController } from './scratchcards/scratchcards.controller'

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
    MailerModule.forRootAsync({
      useClass: MailConfigService,
    }),],
  providers: [
    MailService,
    ScratchcardsService,
    UsersService,
  ],
  controllers: [
    UsersController,
    ProductsController,
    ScratchcardsController,
  ]
})
export class HttpModule { }
