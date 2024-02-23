import React from 'react'
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"
import About from "./About"
import Fedback from "./Fedback"


function Home() {
  return (
    <div>
      <Navbar />
      <SearchForm />
      <About />
      <Fedback />
    </div>
  )
}

export default Home
