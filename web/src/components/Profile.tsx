import { useAuth } from '@/contexts/AuthContext'

export function Profile() {
  const { user } = useAuth()
  return (
    <span>
      {user?.name ? (<span>
        {user.name}
      </span>) : ""}
    </span>
  )
}