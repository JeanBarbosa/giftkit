import { registerAs } from '@nestjs/config'

export default registerAs('beuniapi', () => ({

  //url base API beuni
  urlApiBeuni: process.env.URL_API_BEUNI,
}))
