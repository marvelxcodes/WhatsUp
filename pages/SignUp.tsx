import { useRouter } from "next/router"
import { useUser } from "@clerk/nextjs"
import useSWR from "swr"
import axios from "axios"

const SignUp = () => {
  const { user } = useUser()
  const { push } = useRouter()

  const fetch = (url: string) => {
    axios.post(url, {
      id: Number(user?.primaryPhoneNumber?.toString().slice(-10)),
      name: user?.fullName
    })
  }

  const { data } = useSWR(`/api/user/create`, fetch, {
    onSuccess: () => push("/"),
    revalidateOnFocus: false
  })

  return <div>{!data && <h1>Redirecting...</h1>}</div>
}

export default SignUp
