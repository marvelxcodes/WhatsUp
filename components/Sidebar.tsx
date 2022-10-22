import Image from "next/image"
import Chat from "@components/Chat"
import { useEffect, useState } from "react"
import axios from "axios"

const Sidebar = () => {
  const [chats, setChats] = useState<object[]>()
  useEffect(() => {
    axios.get("").then((res) => {
      setChats(res.data)
    })
  })
  return (
    <aside>
      <section className="profile-container">
        <div className="profile-card">
          <section>
            <Image width={100} height={100} src={"https://github.com/marvelxcodes.png"} />
          </section>
          <section>
            <h4>Rama Krishnan V</h4>
            <p>@marvelxcodes</p>
          </section>
        </div>
      </section>
      <section className="chats-container">
        <Chat />
      </section>
    </aside>
  )
}

export default Sidebar
