import Head from "@components/Head"

export type HeaderProps = {
  name: string
  userName: string
  phone: number
  lastSeen: string
}

const Header = (props:HeaderProps) => {
  const { name="Rama Krishnan V", phone=8754205431, lastSeen="2022/10/19" } = props
  return (
    <>
      <Head />
      <header>
        <h1>{name}</h1>
        <h3>{`@${phone}`}</h3>
      <p>{}</p>
      </header>
    </>
  )
}

export default Header
