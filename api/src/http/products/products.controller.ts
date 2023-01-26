import { Controller, Get, Query } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'
import {
  ApiService,
  Category,
  GetProductsResponse
} from '../../api/api.service'

@Controller('products')
export class ProductsController {
  constructor(
    private readonly apiService: ApiService,
  ) { }

  @Get('categories')
  findAllCategories(): Observable<AxiosResponse<Category[]>> {
    return this.apiService.findAllCategories()
  }

  @Get()
  all(
    @Query('category') category: string
  ): Observable<AxiosResponse<GetProductsResponse[]>> {

    if (category) {
      return this.apiService.findProductsByCategory(category)
    }

    return this.apiService.allProducts()
  }
}
