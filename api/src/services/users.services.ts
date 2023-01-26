import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) { }

  async listAll() {
    return this.prismaService.user.findMany()
  }

  async create(data: Prisma.UserUncheckedCreateInput) {
    let userExists = await this.prismaService.user.findUnique({
      where: {
        email: data.email
      }
    })

    if (!userExists) {
      userExists = await this.prismaService.user.create({
        data
      })
    }

    return userExists
  }
}