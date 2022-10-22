import type { NextPage } from "next"
import Sidebar from "@components/Sidebar"
import Header from "@components/Header"

const Home: NextPage = () => {
  return (
    <main>
      <Sidebar />
      <section>
        <Header />
        <div className="main-container">
			
		</div>
      </section>
    </main>
  )
}

export default Home
