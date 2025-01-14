import React, { memo, useEffect} from 'react'
import HomeWrapper from './style'
import HomeBanner from './home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fectchHomeDataAction } from '../../store/modules/home'

import HomeSectionV1 from './home-section-v1'
import HomeSectionV2 from './home-section-v2'
import { isEmptyO } from '../../utils/isEmptyO'
import HomeLongFor from './home-longfor'
import HomeSectionV3 from './home-section-v3'

const Home = memo(() => {
  // 从state里拿数据
 const{goodPriceInfo,highScoreInfo,discountInfo,hotRecommend,longFor,plusInfo}=useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    discountInfo:state.home.discountInfo,
    hotRecommend:state.home.hotRecommend,
    longFor:state.home.longFor,
    plusInfo:state.home.plusInfo
 }),shallowEqual)


  // 发送异步网络请求获取数据
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fectchHomeDataAction())
  },[dispatch])




  return (
    <HomeWrapper>
      <HomeBanner></HomeBanner>
      <div className='content'>
          {/* <div className='good-price'>
          <SectionHeader title={goodPriceInfo.title} ></SectionHeader>
          <SectionRooms roomList={goodPriceInfo.list}></SectionRooms>
          </div>
          <div className='high-score'>
          <SectionHeader title={highScoreInfo.title} ></SectionHeader>
          <SectionRooms roomList={highScoreInfo.list}></SectionRooms>
          </div> */}
          {/* <div className='discount'>
            <SectionHeader title={discountInfo.title} subtitle={discountInfo.subtitle}></SectionHeader>
            <SectionTabs tabNames={tabNames} tabClick={tabClick}></SectionTabs>
            <SectionRooms roomList={discountInfo.dest_list?.[name]} itemWidth='33.3333%'></SectionRooms>
          </div> */}

          {isEmptyO(discountInfo)&&<HomeSectionV2 infoDate={discountInfo} itemWidth='33.3333%'></HomeSectionV2>}
          {isEmptyO(hotRecommend)&&<HomeSectionV2 infoDate={hotRecommend} itemWidth='33.3333%'></HomeSectionV2>}
          {isEmptyO(longFor)&&<HomeLongFor infoData={longFor}></HomeLongFor>}
          {isEmptyO(goodPriceInfo)&&<HomeSectionV1 HomeData={goodPriceInfo} itemWidth='25%'></HomeSectionV1>}
          {isEmptyO(highScoreInfo)&&<HomeSectionV1 HomeData={highScoreInfo} itemWidth='25%'></HomeSectionV1>}
          {isEmptyO(plusInfo)&&<HomeSectionV3 infoData={plusInfo} itemWidth='25%'></HomeSectionV3>}
 

      </div>
    </HomeWrapper>
  )
})

export default Home