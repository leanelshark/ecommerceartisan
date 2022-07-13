import React from 'react'
import Navbar from './Navbar'
import Masonry from '../components/Masonry'
import Main from '../components/Main'


const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Masonry/>
    </div>
  )
}

export default HomePage