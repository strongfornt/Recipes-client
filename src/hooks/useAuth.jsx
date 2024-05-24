import { useContext } from "react"
import { AuthContext } from "../ContextApi/ContextProvider"



export default function useAuth() {
    const auth = useContext(AuthContext)
  return auth
}