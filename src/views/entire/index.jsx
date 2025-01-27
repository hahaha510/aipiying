import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import EntireRooms from './c-cpns/entire-rooms'
import EntireFilter from './c-cpns/entire-filter'
import EntirePagination from './c-cpns/entire-pagination'
import { useDispatch } from 'react-redux'
import { fetchRoomListAction } from '../../store/modules/entire/createActions'
const Entire = memo(() => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchRoomListAction())
  },[dispatch])
  return (
    <EntireWrapper>
      <EntireFilter></EntireFilter>
      <EntireRooms></EntireRooms>
      <EntirePagination></EntirePagination>
    </EntireWrapper>
  )
})

export default Entire