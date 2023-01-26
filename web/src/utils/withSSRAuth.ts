import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from "next"
import { destroyCookie, parseCookies } from "nookies"
import { AuthTokenError } from "../services/errors/AuthTokenError"

export function withSSRAuth<P>(fn: GetServerSideProps<any>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P> | undefined> => {
    const cookies = parseCookies(context)

    if (!cookies["surprisegift.token"]) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      }
    }

    try {
      return await fn(context)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(context, "surprisegift.token")
        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        }
      }
    }
  }
}