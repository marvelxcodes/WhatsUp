import useSwr from "swr"

const NewChat = () => {
  const { data } = useSwr("/chat")
  return (
    <div className="new-chat">
      <input type="text" placeholder="Phone" />
      <button>
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
    </div>
  )
}

export default NewChat
