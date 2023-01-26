import { Body, Controller, Post } from '@nestjs/common'
import { ScratchcardsService } from 'src/services/scratchcards.services'
import { Prisma } from '@prisma/client'
import { MailService } from '../../mail/mail.service'

@Controller('scratchcards')
export class ScratchcardsController {
  constructor(
    private readonly scratchcardsService: ScratchcardsService,
    private readonly mailService: MailService,
  ) { }

  @Post('new')
  create(
    @Body() data: Prisma.ScratchcardUncheckedCreateInput
  ) {
    const userId = "bb4c6f58-82aa-4f1e-b014-c63486a24e2e"
    return this.scratchcardsService.create({
      userId,
      ...data
    })
  }


  @Post('send')
  async send() {

    const hash = 'dfsafasfsdafasdfsfa'

    await this.mailService.newSurpriseGift({
      to: 'programmer.jean@gmail.com',
      data: {
        hash,
      },
    })
  }
}
