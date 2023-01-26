import axios from "axios"
import { GetServerSidePropsContext } from "next"
import { parseCookies } from "nookies"

type Context = undefined | GetServerSidePropsContext


export function setupApiClient(ctx: Context = undefined) {
  let cookies = parseCookies(ctx)

  const api = axios.create({
    baseURL: "http://localhost:3333",
    headers: {
      Authorization: `Bearer ${cookies["surprisegift.token"]}`,
    },
  })

  return api
}