
import {Route,Routes} from 'react-router-dom'
import Home from './pages.jsx/home.jsx'
import Cart from './pages.jsx/cart.jsx'
import Header from './component.jsx/header.jsx'

import './App.css'

function App() {
  

  return (

    <>

    <Header/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>




    </Routes>


     </>)
}
export default App
