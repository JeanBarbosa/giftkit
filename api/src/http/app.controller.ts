import { Controller, Get } from '@nestjs/common'
import { Observable } from 'rxjs'
import { AxiosResponse } from 'axios'
import { ApiService } from '../api/api.service'
import { UsersService } from 'src/services/users.services'

type Category = {
  record_id: string,
  public_id: string
}

@Controller()
export class AppController {
  constructor(
    private readonly apiService: ApiService,
    private readonly usersService: UsersService
  ) { }

  @Get('users')
  users() {
    return this.usersService.listAll()
  }

  @Get('categories')
  findAllCategories(): Observable<AxiosResponse<Category[]>> {
    return this.apiService.findAllCategories()
  }
}
