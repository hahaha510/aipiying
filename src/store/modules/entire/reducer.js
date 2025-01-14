import * as actionTypes from './constants'
const initiaState={
    currentPage:0,
    roomList:[],
    tatalCount:0,
    isloading:true
}
function reducer(state=initiaState,actions){
  switch(actions.type){
    case actionTypes.CHANGE_CURRENT_PAGE:
      return {...state,currentPage:actions.currentPage}
    case actionTypes.CHANGE_ROOM_LIST:
      return {...state,roomList:actions.roomList}
    case actionTypes.CHANGE_TOTAL_COUNT:
      return {...state,totalCount:actions.tatalCount}
    case  actionTypes.CHANGE_IS_LOADING:
      return {...state,isloading:actions.isloading}
    default:
      return state
  }
}
export default reducer