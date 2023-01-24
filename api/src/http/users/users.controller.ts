import { Controller, Get } from '@nestjs/common'
import { UsersService } from '../../services/users.services'

@Controller()
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Get('users')
  users() {
    return this.usersService.listAll()
  }

}
