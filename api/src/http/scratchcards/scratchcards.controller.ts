import { Body, Controller, Get, Post } from '@nestjs/common'
import { ScratchcardsService } from 'src/services/scratchcards.services'
import { Prisma } from '@prisma/client'

@Controller()
export class ScratchcardsController {
  constructor(
    private readonly scratchcardsService: ScratchcardsService
  ) { }

  @Post('scratchcards')
  create(
    @Body() data: Prisma.ScratchcardUncheckedCreateInput
  ) {
    const userId = "bb4c6f58-82aa-4f1e-b014-c63486a24e2e"
    return this.scratchcardsService.create({
      userId,
      ...data
    })
  }

}
