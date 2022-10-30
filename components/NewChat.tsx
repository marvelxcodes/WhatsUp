import { useUser } from "@clerk/nextjs"
import axios from "axios"
import { FormEvent, Ref, useRef } from "react"
import useSWR from "swr"

const NewChat = () => {
  const phoneRef = useRef<HTMLInputElement>(null)
  const { user } = useUser()
  
  const { mutate } = useSWR("/api/chat", (url:string) => (
    axios.post(url, {
      user1: Number(user?.primaryPhoneNumber?.toString().slice(-10)),
      user2: Number(phoneRef.current?.value)
    })
  ))

  const submitHandler = async (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    mutate()
  }
  return (
    <form onSubmit={submitHandler} className="new-chat">
      <input ref={phoneRef} type="text" placeholder="Phone" />
      <button type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>
      </button>
    </form>
  )
}

export default NewChat
