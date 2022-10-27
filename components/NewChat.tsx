import useSWR from "swr"
import FetchNewChat from "@fetchers/NewChat"

const NewChat = () => {
  const { mutate, data } = useSWR("/chat", {
    
  })

  const submitHandler = async () => {
    await mutate()
  }
  return (
    <form onSubmit={submitHandler} className="new-chat">
      <input type="text" placeholder="Phone" />
      <button onClick={submitHandler}>
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
