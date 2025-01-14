import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getDiscountInfo, getGoodPriceInfo,getHighScoreInfo, getHotRecommendInfo, getLongForInfo,getPlusInfo } from "../../service/modules/home";

// 这个回调函数有两个参数 payload和state
export const fectchHomeDataAction=createAsyncThunk('fetchdata',async(payload,{dispatch})=>{
  // const res= await getGoodPriceInfo()
  // return res
  getGoodPriceInfo().then((res)=>{
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHighScoreInfo().then((res)=>{
    dispatch(changeHighScoreInfoAction(res))
  })
  getDiscountInfo().then((res)=>{
    dispatch(changeDiscountInfoAction(res))
  })
  getHotRecommendInfo().then((res)=>{
    dispatch(changeHotRecommendInfoAction(res))
  })
  getLongForInfo().then((res)=>{
    dispatch(changeLongForInfoAction(res))
  })
  getPlusInfo().then((res)=>{
    dispatch(changePlusInfoAction(res))
  })
})

const homeSlice=createSlice({
  name:'Home',
  initialState:{
    goodPriceInfo:{},
    highScoreInfo:{},
    discountInfo:{},
    hotRecommend:{},
    longFor:{},
    plusInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,{payload}){
      state.goodPriceInfo=payload
    },
    changeHighScoreInfoAction(state,{payload}){
      state.highScoreInfo=payload
    },
    changeDiscountInfoAction(state,{payload}){
      state.discountInfo=payload
    },
    changeHotRecommendInfoAction(state,{payload}){
      state.hotRecommend=payload
    },
    changeLongForInfoAction(state,{payload}){
      state.longFor=payload
    },
    changePlusInfoAction(state,{payload}){
      state.plusInfo=payload
    }
  },
  // extraReducers:(builder)=>{
  //   builder.addCase(fectchHomeDataAction.fulfilled,(state,{payload})=>{
  //     state.goodPriceInfo=payload
  //   })
  // }
})
export const {changeGoodPriceInfoAction,changeHighScoreInfoAction,changeDiscountInfoAction,changeHotRecommendInfoAction,changeLongForInfoAction,changePlusInfoAction} =homeSlice.actions
export default homeSlice.reducer