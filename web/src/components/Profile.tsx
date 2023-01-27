import { useAuth } from '@/contexts/AuthContext'
import { ProfileContainer } from '@/styles/components/profile'
import { SignOut } from "phosphor-react"

export function Profile() {
  const { user, signOut } = useAuth()

  return (
    <>
      {user?.name ? (
        <ProfileContainer>
          <span>
            {user?.name}
          </span>
          <button onClick={signOut}>
            <SignOut size={16} weight="light" color='red' />
          </button>
        </ProfileContainer>
      ) : ""}
    </>
  )
}