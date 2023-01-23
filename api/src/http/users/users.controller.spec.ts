import { Test, TestingModule } from '@nestjs/testing'
import { UsersController } from './users.controller'
import { UsersService } from 'src/services/users.services'

describe('AppController', () => {
  let appController: UsersController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile()

    appController = app.get<UsersController>(UsersController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.users()).toBe('Hello World!')
    })
  })
})
