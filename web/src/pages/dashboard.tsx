import { withSSRAuth } from '@/utils/withSSRAuth'

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
    </>
  )
}

// Verifica se  o usuário está autenticado
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})