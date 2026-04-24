
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './component/header'
import Login from './pages/login'
import './App.css'

function App() {
  

  return (

    <>

    <Header/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>




    </Routes>


     </>)
}
export default App
