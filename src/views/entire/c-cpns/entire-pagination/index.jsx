import React, { memo } from 'react'
import { EntirePaginationWrapper } from './style'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage, fetchRoomListAction } from '../../../../store/modules/entire/createActions';
const EntirePagination = memo(() => {
  const {currentPage,totalCount,roomList}=useSelector((state)=>({
    currentPage:state.entire.currentPage,
    totalCount:state.entire.totalCount,
    roomList:state.entire.roomList
  }))

  // 事件处理函数
  const dispatch=useDispatch()
  function pageChangeHandle(pageNumber){
    window.scroll(0,0)
    dispatch(changeCurrentPage(pageNumber))
    dispatch(fetchRoomListAction())
  }
  const start=currentPage*20+1
  const end=(currentPage+1)*20
  return (
    <EntirePaginationWrapper>
      {!!roomList.length&&(
            <div className='info'>
            <Pagination defaultCurrent={1} total={totalCount} pageSize={20} showSizeChanger={false} onChange={pageChangeHandle}/>
            <div className='desc'>
             第{start}-{end}个房源,共超过{totalCount}个
            </div>
            </div>
      )}
    </EntirePaginationWrapper>
  )
})

export default EntirePagination