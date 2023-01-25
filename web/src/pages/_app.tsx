import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import logoImg from "../assets/logo.svg"
import Image from 'next/image'

import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Header>
          <Image src={logoImg} alt="logo beuni" />

          <span>
            Jean Barbosa
          </span>
        </Header>
        <Component {...pageProps} />
      </Container>
    </QueryClientProvider>
  )

}
