import React, { memo, useCallback } from 'react'
import { EntireRoomsWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import RoomItem from '../../../../components/room-item'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '../../../../store/modules/detail'
const EntireRooms = memo(() => {
  const{roomList,totalCount,isloading}=useSelector((state)=>{
    return {
      roomList:state.entire.roomList,
      totalCount:state.entire.totalCount,
      isloading:state.entire.isloading
    }
  })

    // 事件处理函数
    const navigate=useNavigate()
    const dispatch=useDispatch()
const itemClick=useCallback((item)=>{
  dispatch(changeDetailInfoAction(item))
    navigate('/detail')

},[navigate,dispatch])
  return (
    <EntireRoomsWrapper>
      <h2 className='title'>{totalCount}处住所</h2>
      <div className='list'>
      {
        roomList?.map((item)=>{
          return <RoomItem itemData={item} itemWidth='20%' key={item._id} itemClick={itemClick}></RoomItem>
        })
      }
      </div>
      {isloading&&(
        <div className='cover'></div>
      )}
    </EntireRoomsWrapper>
  )
})

export default EntireRooms