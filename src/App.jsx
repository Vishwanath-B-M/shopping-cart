
import {Route,Routes} from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Header from './component/header'
import Login from './pages/login'
import Category from './pages/category'
import SingleCategory from './pages/singlecategory'
import './App.css'

function App() {
  

  return (

    <>

    <Header/>

    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/category' element={<Category/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/singlecategory' element={<SingleCategory/>}/>
    </Routes>


     </>)
}
export default App
