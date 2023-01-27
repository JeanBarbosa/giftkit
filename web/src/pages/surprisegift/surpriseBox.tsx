import SearchPopover from '@/components/SearchPopover'
import { SurpriseBoxContainer } from '@/styles/pages/surpriseBox'
import { withSSRAuth } from '@/utils/withSSRAuth'

export default function SurpriseBox() {
  return (
    <>
      <SurpriseBoxContainer>
        <SearchPopover />
      </SurpriseBoxContainer>
    </>
  )
}

// Verifica se  o usuário está autenticado
export const getServerSideProps = withSSRAuth(async (ctx) => {
  return {
    props: {},
  }
})