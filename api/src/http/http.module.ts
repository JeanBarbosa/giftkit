import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { UsersService } from '../services/users.services'
import { DatabaseModule } from 'src/database/database.module'
import { ApiModule } from 'src/api/api.module'

@Module({
  imports: [
    ApiModule,
    DatabaseModule,
  ],
  providers: [UsersService],
  controllers: [AppController]
})
export class HttpModule { }
