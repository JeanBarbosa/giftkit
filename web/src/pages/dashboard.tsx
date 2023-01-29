import { withSSRAuth } from '@/utils/withSSRAuth'
import Head from 'next/head'
import { Button } from '@/components/Button'
import Router from 'next/router'
import { useSurprisegifts } from '@/services/hooks/useSurprisegifts'
import {
  DashboardContainer,
  NewSurpriseGift,
  ListSurpriseGiftContainer,
  SurpriseItem
} from '@/styles/pages/dashboard'
import { useState } from 'react'

export default function Dashboard() {

  const [page, setPage] = useState(Math.floor(Math.random() * 1000))
  const { data, isLoading, error } = useSurprisegifts(page)

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
          <h3>Presentes Surpresa enviados:</h3>
          {isLoading ? <p>carregando...</p> : error ? <p>Falha ao obter dados.</p> : (
            <ListSurpriseGiftContainer>

              {
                data?.surprises.map((item) => (
                  <SurpriseItem>
                    <h4>{item.title}</h4>
                    <p> {item.emailRecipient}</p>
                    {item.selectedCardID ? <span className='open'>Presente aberto</span> : <span className='close'>Presente fechado</span>}
                  </SurpriseItem>
                ))

              }
            </ListSurpriseGiftContainer>
          )}
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