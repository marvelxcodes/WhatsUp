import Head from "@components/Head"
import Image from "next/image"

export type HeaderProps = {
  name: string
  userName: string
  phone: number
  lastSeen: string
}

const Header = (props: HeaderProps) => {
  const {
    name = "Rama Krishnan V",
    phone = 8754205431,
    lastSeen = "2022/10/19",
  } = props
  return (
    <>
      <Head />
      <header>
        <div className="image-container">
          <Image
            src={"https://github.com/marvelxcodes.png"}
            height={100}
            width={100}
          />
        </div>
        <div className="details-container">
          <p className="name">{name}</p>
          <p className="phone">{`@${phone}`}</p>
          <p className="lastSeen"></p>
        </div>
      </header>
    </>
  )
}

export default Header
