import PropTypes from 'prop-types'
import React, { memo ,useState,useCallback} from 'react'
import { SectionV2Wrapper } from './style'
import SectionHeader from '../../../components/section-header'
import SectionRooms from '../../../components/section-rooms'
import SectionTabs from '../../../components/section-tabs'
import SectionFooter from '../../../components/section-footer'
const HomeSectionV2 = memo((props) => {
  const {infoDate,itemWidth}=props
  // 组件会渲染两次 第一次infoDate没拿到数据为空 这时候 initName是空 已经useState设给name了初始值只会设置一次
  // 我们的做法就是infoDate有数据了再进行渲染一次 就是第一次空的时候不给渲染了
  let initName=Object.keys(infoDate.dest_list)[0]
  const [name,setName]=useState(initName)
    //对数据进行处理
    const tabNames=infoDate.dest_address?.map((item)=>{
      return item.name
    }) 
      // 传入函数 用useCallback进行性能优化 要不然每次重新渲染这个组件都会并创建一个新的这个tabClick函数
       const tabClick=useCallback((index,name)=>{
        setName(name)
       },[])
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoDate.title} subTitle={infoDate.subTitle}></SectionHeader>
      <SectionTabs tabNames={tabNames} tabClick={tabClick}></SectionTabs>
      <SectionRooms roomList={infoDate.dest_list?.[name]} itemWidth={itemWidth}></SectionRooms>
      <SectionFooter name={name}></SectionFooter>
    </SectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoDate:PropTypes.object
}

export default HomeSectionV2