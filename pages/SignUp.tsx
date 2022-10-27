import { useRouter } from "next/router"
import { useEffect } from "react"

const SignUp = () => {
    const { push } = useRouter()
    useEffect(() => {
        async () => {
            push("/")
        }
    }, [])
    
  return (
    <div>SignUp</div>
  )
}

export default SignUp