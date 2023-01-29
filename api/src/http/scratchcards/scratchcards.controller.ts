import { Body, Controller, Post } from '@nestjs/common'
import { CurrentUserID } from '../../utils/decorators/current-user-id.decorator'
import { SurpriseData, SurprisegiftsService } from '../../services/surprisegifts.services'

@Controller('surprisegift')
export class SurprisegiftsController {
  constructor(
    private readonly scratchcardsService: SurprisegiftsService,
  ) { }

  @Post()
  create(
    @Body() data: SurpriseData,
    @CurrentUserID() userId: string
  ) {
    return this.scratchcardsService.create({
      userId,
      ...data
    })
  }
}
