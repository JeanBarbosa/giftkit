import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { parseCookies } from "nookies"

export function withSSRGuest<T>(fn: GetServerSideProps<any>) {
  return async (context: GetServerSidePropsContext): Promise<GetServerSidePropsResult<any>> => {
    const cookies = parseCookies(context)

    if (cookies["surprisegift.token"]) {
      return {
        redirect: {
          destination: "/dashboard",
          permanent: false,
        },
      }
    }

    return await fn(context)
  }
}