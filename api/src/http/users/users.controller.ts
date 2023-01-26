import { Controller, Get, Post, Body } from '@nestjs/common'
import { UsersService } from '../../services/users.services'
import { Prisma } from '@prisma/client'
import { CurrentUserID } from 'src/utils/decorators/current-user-id.decorator'

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService
  ) { }

  @Get('me')
  async me(@CurrentUserID() userId: any) {
    return await this.usersService.getUserById(userId)
  }

  @Get()
  async users() {
    return await this.usersService.listAll()
  }

  @Post()
  async create(@Body() data: Prisma.UserUncheckedCreateInput) {
    return await this.usersService.create(data)
  }
}
