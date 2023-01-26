import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import logoImg from "../assets/logo.svg"
import Image from 'next/image'

import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
import { AuthProvider } from '@/contexts/AuthContext'
import { Profile } from '@/components/Profile'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header>
            <Image src={logoImg} alt="logo beuni" />
            <Profile />
          </Header>
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </AuthProvider>
  )

}
