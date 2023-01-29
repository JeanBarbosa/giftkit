import { Body, Controller, Get, Post } from '@nestjs/common'
import { CurrentUserID } from '../../utils/decorators/current-user-id.decorator'
import { SurpriseData, SurprisegiftsService } from '../../services/surprisegifts.services'

@Controller('surprisegift')
export class SurprisegiftsController {
  constructor(
    private readonly surprisegiftsService: SurprisegiftsService,
  ) { }

  @Get()
  me(@CurrentUserID() userId: string) {
    return this.surprisegiftsService.allSurpriseByUserId(userId)
  }

  @Post()
  create(
    @Body() data: SurpriseData,
    @CurrentUserID() userId: string
  ) {
    return this.surprisegiftsService.create({
      userId,
      ...data
    })
  }
}
