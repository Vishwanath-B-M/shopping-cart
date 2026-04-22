import {configureStore, createReducer} from'@reduxjs/toolkit'
import cartReducer from "./slice/cartslice"

const Store=configureStore({
    reducer:{
        cart:cartReducer
    }
})
export default Store;