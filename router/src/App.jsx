import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllProducts from './Pages/AllProducts/AllProducts'
import Mens from './Pages/Mens/Mens'
import Womens from './Pages/Womens/Womens'

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Navbar/>
        <Routes>
          <Route path='/' element = {<AllProducts/>}/>
          <Route path='/mens' element = {<Mens/>}/>
          <Route path='/womens' element = {<Womens/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App