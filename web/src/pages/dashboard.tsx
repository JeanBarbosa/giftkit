import { withSSRAuth } from '@/utils/withSSRAuth'
import Head from 'next/head'
import { Button } from '@/components/Button'
import {
  DashboardContainer,
  NewSurpriseGift,
  ListSurpriseGiftContainer
} from '@/styles/pages/dashboard'
import Router from 'next/router'

export default function Dashboard() {

  function handleNewSurpriseGift() {
    Router.push('/surprisegift')
  }

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <DashboardContainer>
        <NewSurpriseGift>
          <h1>
            Não envie brindes, <br />
            crie experiências! 🚀
          </h1>

          <p>
            Envie presentes surpresa para seus amigos <br />
            escolherem entre 3 opções de kit da Beuni 🧡
          </p>

          <Button title='criar presente surpresa' onClick={handleNewSurpriseGift} />
        </NewSurpriseGift>
        <ListSurpriseGiftContainer>
          <ul>
            <li>
              item aqui
            </li>
            <li>
              item aqui
            </li>
            <li>
              item aqui
            </li>
            <li>
              item aqui
            </li>
          </ul>
        </ListSurpriseGiftContainer>
      </DashboardContainer>
    </>
  )
}

// Verifica se  o usuário está autenticado
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})