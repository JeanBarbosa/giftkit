import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { ApiModule } from '../api/api.module'
import { UsersService } from '../services/users.services'
import { ScratchcardsService } from 'src/services/scratchcards.services'

import { UsersController } from './users/users.controller'
import { ProductsController } from './products/products.controller'
import { ScratchcardsController } from './scratchcards/scratchcards.controller'

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
  ],
  providers: [
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
