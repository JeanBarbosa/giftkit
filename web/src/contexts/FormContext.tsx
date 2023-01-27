import {
  useState,
  createContext,
  useContext,
  ReactNode
} from "react"

type FormContextData = {
  data: any
  setFormValues: (values: any) => void
}

type Props = {
  children: ReactNode
}

export const FormContext = createContext({} as FormContextData)

export default function FormProvider({ children }: Props) {
  const [data, setData] = useState({})

  const setFormValues = (values: any) => {
    setData((prevValues) => ({
      ...prevValues,
      ...values,
    }))
  }

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormData = () => useContext(FormContext)