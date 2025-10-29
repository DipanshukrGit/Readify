import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'

import Courses from './Courses/Courses'
import Contacts from './Contact/Contacts'
import Abouts from './About/Abouts'
import Signup from './components/Signup'


const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/course" element={<Courses/>} />
       <Route path="/contact" element={<Contacts/>} />
        <Route path="/about" element={<Abouts/>} />
        <Route path="/signup" element={<Signup/>} />
    </Routes>
    
    </>
  )
}

export default App