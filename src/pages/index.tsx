import * as React from "react"
import { Link, type HeadFC, type PageProps } from "gatsby"

import '../styles/global.css'
import '../styles/index.css'

import Header from '../components/header'
import Footer from '../components/footer'

// @ts-ignore
import projectimage from '../assets/project-image.png'





const IndexPage: React.FC<PageProps> = () => {

  if (typeof window !== 'undefined') {
    console.log('we are running on the client')
  } else {
      console.log('we are running on the server');
  }

  return (
    <div className="flex flex-col">
      <Header />
      <main className="pt-20">
        <img src={projectimage} className="border-2 border-slate-300 dark:border-slate-600 mt-12 rounded-lg"></img>
        <h1 className="text-center mt-8 text-2xl">Welcome to My Portfolio</h1>

        <h1 className="text-center text-xl mt-8">Projects:</h1>
        <ul className="mx-auto w-fit mt-3 mb-[111px] flex flex-col text-center [&>a]:underline">
          <Link>Habitazen Habit Tracker Web App</Link>
          <Link>Pomodoro Timer Web App</Link>
          <Link>Music Track Stem Mixer Web App</Link>
        </ul>

      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Toby Hogan - Portfolio</title>
