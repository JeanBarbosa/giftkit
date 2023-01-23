import { registerAs } from '@nestjs/config'

export default registerAs('beuniapi', () => ({

  //aws cognito
  urlApiBeuni: process.env.URL_API_BEUNI,
}))
