import { useRouter } from "next/router"
import { useUser } from "@clerk/nextjs"
import useSWR from "swr"
import axios from "axios"

const SignUp = () => {
  const { user } = useUser()
  const { push } = useRouter()

  const fetch = (url:string) => {
    axios.post(url, {
        name: user?.fullName,
        phone: Number(user?.primaryPhoneNumber?.toString().slice(-10))
    })
  }

    const { isValidating } = useSWR(`${location.origin}/api/user/create`, fetch, {
    onSuccess: () => push("/")
  })

  return <div>{isValidating && <h1>"Redirecting..."</h1>}</div>
}

export default SignUp
