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
  const [currChat, setCurrChat] = useState()
  return (
    <main>
      <Sidebar setCurrChat={setCurrChat} />
      <section>
        <Header />
        <div className="main-container"></div>
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
      currchat: 8754205431,
    },
  }
}

export default Home
