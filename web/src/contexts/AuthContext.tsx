import Router from "next/router"
import { destroyCookie, setCookie } from "nookies"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState
} from "react"
import { api } from "../services/apiClient"
import { isBrowser } from "../utils/browser"

type User = {
  id: string
  name: string
  email: string
}

type SignInCredesentials = {
  name: string
  email: string
}

type AuthContextData = {
  isAuthenticaded: boolean
  signIn(credentials: SignInCredesentials): Promise<void>
  signOut(): void
  user: User
}

type Props = {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut() {
  destroyCookie(null, "surprisegift.token")

  if (isBrowser) {
    Router.push("/login")
  }
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({} as User)
  const isAuthenticaded = !!user

  const signIn = useCallback(
    async ({ email, name }: SignInCredesentials) => {

      try {
        const response = await api.post("/users", {
          email,
          name,
        })

        const user = response?.data

        setCookie(undefined, "surprisegift.token", user.id, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
          path: "/",
        })

        // para não precisar ficar passando no header das requisições a api
        setUser({
          id: user.id,
          name: user.name,
          email: user.email,
        })

        //usando o id do usuário como chave de token
        api.defaults.headers["Authorization"] = `Bearer ${user.id}`

        Router.push("/dashboard")
      } catch (error) {
        console.log(error)
        Router.push("/")
      }
    },
    []
  )

  return (
    <AuthContext.Provider
      value={{
        isAuthenticaded,
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}