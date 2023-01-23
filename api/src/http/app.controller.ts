import { Controller, Get, ForbiddenException } from '@nestjs/common'
import { AppService } from './app.service'
import { Observable, map, catchError } from 'rxjs'
import { HttpService } from '@nestjs/axios'
import { AxiosResponse } from 'axios'

type Category = {
  record_id: string,
  public_id: string
}

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService
  ) { }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('categories')
  findAll(): Observable<AxiosResponse<Category[]>> {
    return this.httpService.get('https://api.beuni.com.br/atlas/brands/v2/categories?reduced=true')
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
