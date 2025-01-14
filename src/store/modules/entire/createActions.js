
import { getEntireRoomList } from '../../../service/modules/entire'
import * as actionTypes from './constants'
export const changeCurrentPage=(currentPage)=>{
  return {
    type:actionTypes.CHANGE_CURRENT_PAGE,
    currentPage
  }
}
export const changeRoomList=(roomList)=>{
  return {
    type:actionTypes.CHANGE_ROOM_LIST,
    roomList
  }
}
export const changeTotalCount=(tatalCount)=>{
  return {
    type:actionTypes.CHANGE_TOTAL_COUNT,
    tatalCount
  }
}
export const changeIsLoading=(isloading)=>{
  return {
    type:actionTypes.CHANGE_IS_LOADING,
    isloading
  }
}

// 实现获取异步数据的action
export const fetchRoomListAction=()=>{
  return async (dispatch,getState)=>{
    const currentPage=getState().entire.currentPage
    dispatch(changeIsLoading(true))
    const res=await getEntireRoomList(currentPage*20)
    dispatch(changeIsLoading(false))
    const roomList=res.list
    const totalCount=res.totalCount
    dispatch(changeRoomList(roomList))
    dispatch(changeTotalCount(totalCount))
  }
}