import type {
  NextPage,
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next"
import Sidebar from "@components/Sidebar"
import Header from "@components/Header"
import { useState } from "react"
import prisma from "@utils/prisma"

const Home: NextPage = ({}) => {
  const [currChat, setCurrChat] = useState({
    id: "string",
    name: "string",
    phone: 9832872342,
    lastSeen: "string"
  })
  return (
    <main>
      <Sidebar setCurrChat={setCurrChat} />
      <section className="main">
        <Header currChat={currChat} />
        <div className="main-container">
          
        </div>
      </section>
    </main>
  )
}

export type PageProps = {
  currchat: number
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<PageProps>> => {

  return {
    props: {
      
    },
  }
}

export default Home
