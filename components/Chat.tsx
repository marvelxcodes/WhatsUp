import Image from "next/image"

export type ChatProps = {
  phone: string
  name: string
  lastSeen: string
  isCurr: boolean
}

const Chat = ({}: ChatProps) => {
  return (
    <div onClick={() =>  } className='chat'>
      <div className="image-container">
        <Image src={"https://github.com/marvelxcodes.png"} height={100} width={100} />
      </div>
      <div className="text-container">
        <p className="name">Rama Krishnan V</p>
        <p className="lastSeen">{`last seen ${"10 minutes ago"}`}</p>
      </div>
    </div>
  )
}

export default Chat
