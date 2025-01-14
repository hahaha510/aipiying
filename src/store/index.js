import { configureStore } from "@reduxjs/toolkit";
import homeReduce from './modules/home'
import entireReducer from './modules/entire/reducer'
import detailReducer from './modules/detail'
const store=configureStore({
  reducer:{
    home:homeReduce,
    entire:entireReducer,
    detail:detailReducer
  }
})
export default store