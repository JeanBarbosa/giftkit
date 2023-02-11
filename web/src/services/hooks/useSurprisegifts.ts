import { useQuery } from "react-query"
import { api } from "../apiClient"

type SurpriseGift = {
  id: string
  title: string
  description: string
  emailRecipient: string
  selectedCardID: string
}

type GetSurpriseGiftsResponse = {
  surprises: SurpriseGift[]
}

export async function getSurprisegifts(page: number): Promise<GetSurpriseGiftsResponse> {
  const { data } = await api.get('surprisegift', {
    params: {
      page
    }
  })

  return {
    surprises: data
  }
}

export function useSurprisegifts(page: number) {
  return useQuery(['surprisegifts', page], () => getSurprisegifts(page), {
    staleTime: 1000 * 60 * 10, // 10 minutos
  })
}