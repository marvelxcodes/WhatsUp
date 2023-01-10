import Head from "@components/Head"
import Image from "next/image"

export type HeaderProps = {
  currChat: {
    id: string
    name: string
    phone: number
    lastSeen: string
  }
}

const Header = ({ currChat }: HeaderProps) => {
  return (
    <>
      <Head />
      <header>
        <div className="image-container">
          <Image
            src={"https://github.com/marvelxcodes.png"}
            height={60}
            width={60}
            alt="Profile Image"
          />
        </div>
        <div className="details-container">
          <p className="name">{currChat.name}</p>
          <p className="phone">{`@${currChat.phone}`}</p>
          <p className="lastSeen">{currChat.lastSeen}</p>
        </div>
        <svg
          onClick={() => {}}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="back-btn"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
            clipRule="evenodd"
          />
        </svg>
      </header>
    </>
  )
}

export default Header
