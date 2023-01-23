import { Controller, Get } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'
import { ApiService } from '../../api/api.service'

type Category = {
  record_id: string,
  public_id: string
}

@Controller()
export class ProductsController {
  constructor(
    private readonly apiService: ApiService,
  ) { }

  @Get('categories')
  findAllCategories(): Observable<AxiosResponse<Category[]>> {
    return this.apiService.findAllCategories()
  }
}
