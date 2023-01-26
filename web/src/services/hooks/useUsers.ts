import { useQuery } from "react-query"
import { api } from "../apiClient"

type User = {
  id: string
  name: string
  email: string
}

type GetUsersResponse = {
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data } = await api.get('users', {
    params: {
      page
    }
  })

  return {
    users: data.users,
  }
}

export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}