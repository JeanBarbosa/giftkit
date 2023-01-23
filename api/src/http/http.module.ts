import { Module } from '@nestjs/common'
import { UsersService } from '../services/users.services'
import { DatabaseModule } from '../database/database.module'
import { ApiModule } from '../api/api.module'
import { UsersController } from './users/users.controller'
import { ProductsController } from './products/products.controller'

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
  ],
  providers: [UsersService],
  controllers: [UsersController, ProductsController]
})
export class HttpModule { }
