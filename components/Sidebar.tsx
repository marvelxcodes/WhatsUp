import Image from "next/image"
import Chat from "@components/Chat"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import NewChat from "@components/NewChat"

export type SidebarProps = {
  setCurrChat: Dispatch<SetStateAction<number>>
}

export type SidebarToggleProps = {
  isOpen: boolean
}

const Sidebar = ({setCurrChat}: SidebarProps) => {
  const [chats, setChats] = useState<object[]>()
  return (
    <aside>
      <section className="profile-container">
        <div className="profile-card">
          <section>
            <Image
              width={100}
              height={100}
              src={"https://github.com/marvelxcodes.png"}
            />
          </section>
          <section>
            <p className="name">Rama Krishnan V</p>
            <p className="phone">@8754205431</p>
          </section>
        </div>
      </section>
      <section className="chats-container">
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <Chat />
        <NewChat />
      </section>
    </aside>
  )
}

export default Sidebar
