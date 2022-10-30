import type { NextPage } from "next"
import Sidebar from "@components/Sidebar"
import Header from "@components/Header"
import { useState } from "react"
import { useUser } from "@clerk/nextjs"
import axios from "axios"
import useSWR from "swr"

const Home: NextPage = ({}) => {
  const { user } = useUser()
  const phone = Number(user?.primaryPhoneNumber?.toString().slice(-10))

  const fetchChats = async (url: string) => {
    const res = await axios.get(url)
    return res.data
  }

  const [currChat, setCurrChat] = useState<any>({

  })
  return (
    <main>
      <Sidebar setCurrChat={setCurrChat} />
      <section className="main">
        <Header currChat={currChat} />
        <div className="main-container"></div>
      </section>
    </main>
  )
}

export default Home
