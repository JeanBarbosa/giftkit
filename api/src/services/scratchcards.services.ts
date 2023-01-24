import { Injectable } from '@nestjs/common'
import { PrismaService } from '../database/prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class ScratchcardsService {

  constructor(private readonly prismaService: PrismaService) { }

  async create(data: Prisma.ScratchcardUncheckedCreateInput) {
    return this.prismaService.scratchcard.create({
      data
    })
  }
}