import type { AppProps } from 'next/app'
import { globalStyles } from '@/styles/global'
import { Container, Header } from '@/styles/pages/app'
import logoImg from "../assets/logo.svg"
import Image from 'next/image'

import { QueryClientProvider } from 'react-query'
import { queryClient } from '../services/queryClient'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  const { user } = useAuth()
  console.log(user)
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Header>
            <Image src={logoImg} alt="logo beuni" />

            {user?.name ? (<span>
              user.name
            </span>) : ""}

          </Header>
          <Component {...pageProps} />
        </Container>
      </QueryClientProvider>
    </AuthProvider>
  )

}
