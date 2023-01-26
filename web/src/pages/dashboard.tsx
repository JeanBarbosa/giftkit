import { useAuth } from '@/contexts/AuthContext'
import { withSSRAuth } from '@/utils/withSSRAuth'

export default function Dashboard() {
  const { user } = useAuth()

  return (
    <>
      <h1>Dashboard: {user?.name}</h1>
    </>
  )
}

// Verifica se  o usuário está autenticado
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})