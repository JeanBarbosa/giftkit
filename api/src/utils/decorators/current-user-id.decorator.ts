import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentUserID = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const token = ctx.switchToHttp().getRequest().headers['authorization']
    return token.split('Bearer ').join("")
  },
)