import Image from "next/image"
import Chat from "@components/Chat"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import NewChat from "@components/NewChat"
import { useClerk, useUser } from "@clerk/nextjs"
import useSWR from "swr"
import axios from "axios"

export type User = {
  id: string
  name: string
  phone: number
  lastSeen: string
}

export type ChatApiResponse = {
  id: string
   
  user1: User
  user2: User
}

export type SidebarProps = {
  setCurrChat: Dispatch<SetStateAction<User>>
}

const Sidebar = ({ setCurrChat }: SidebarProps) => {
  const { user } = useUser()
  const { data: chats } = useSWR(`/api/chat/${Number(user?.primaryPhoneNumber?.toString().slice(-10))}`, url => {
    axios.get(url).then(res => res.data)
  })
  const { openUserProfile } = useClerk()
  return (
    <aside>
      <section className="profile-container">
        <div className="profile-card" onClick={() => openUserProfile()}>
          <section>
            <Image width={60} height={60} src={user?.profileImageUrl!} alt="ProfileImg" />
          </section>
          <section>
            <p className="name">{user?.fullName}</p>
            <p className="phone">{`@${Number(user?.primaryPhoneNumber?.toString().slice(-10))}`}</p>
          </section>
        </div>
      </section>
      <section className="chats-container">
        {}
        <NewChat />
      </section>
    </aside>
  )
}

export default Sidebar
