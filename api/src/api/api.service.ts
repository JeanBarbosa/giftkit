import { Injectable, ForbiddenException } from '@nestjs/common'
import { Observable, map, catchError } from 'rxjs'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'
import { ConfigService } from '@nestjs/config'

type Category = {
  record_id: string,
  public_id: string
}

@Injectable()
export class ApiService {

  private readonly baseUrl: string

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService
  ) {
    this.baseUrl = configService.get('beuniapi.urlApiBeuni')
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

}
