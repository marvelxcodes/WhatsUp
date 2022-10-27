import Image from "next/image"
import Chat from "@components/Chat"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import axios from "axios"
import NewChat from "./NewChat"

export type SidebarProps = {
  setCurrChat: Dispatch<SetStateAction<number>>
}

export type SidebarToggleProps = {
  isOpen: boolean
}

export const SidebarToggle = ({isOpen}: SidebarToggleProps) => {
  return (
    <span className="sidebar-toggle">
      
    </span>
  )
}

const Sidebar = ({setCurrChat}: SidebarProps) => {
  const [chats, setChats] = useState<object[]>()
  return (
    <aside>
      <SidebarToggle isOpen />
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
