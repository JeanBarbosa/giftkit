import { Injectable, ForbiddenException } from '@nestjs/common'
import { Observable, map, catchError } from 'rxjs'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'
import { ConfigService } from '@nestjs/config'

export type Category = {
  record_id: string,
  public_id: string
}

export type ProductImage = {
  id: string,
  width: number,
  height: number,
  url: string,
}

export type Product = {
  id: number,
  name: string,
  categories: string[],
  slug: number,
  description: string,
  brand: string,
  image: ProductImage[],
  hasFreeShipping: boolean,
  rating: number,
  recordId: string,
  minimumQuantity: number,
  total_stock: number,
  kitManagerVariations: string,
  price: number,
}

export type GetProductsResponse = {
  products: Product[],
  total: number,
  userWishlist: object,
  userCart: object
}

@Injectable()
export class ApiService {

  private readonly baseUrl: string

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.baseUrl = this.configService.get('beuniapi.urlApiBeuni')
  }

  findAllCategories(): Observable<AxiosResponse<Category[]>> {
    return this.httpService.get(`${this.baseUrl}/categories?reduced=true`)
      .pipe(
        map((response) => {
          return response.data
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available')
        }),
      )
  }


  allProducts(): Observable<AxiosResponse<GetProductsResponse[]>> {
    return this.httpService.get(`${this.baseUrl}/products`)
      .pipe(
        map((response) => {
          return response.data
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available')
        }),
      )
  }

  findProductsByCategory(q: string, category: string): Observable<AxiosResponse<GetProductsResponse[]>> {
    return this.httpService.get(`${this.baseUrl}/products?q=${q}&category=${category}`)
      .pipe(
        map((response) => {
          return response.data
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available')
        }),
      )
  }

}
