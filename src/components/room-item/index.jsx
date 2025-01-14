import PropTypes from 'prop-types'
import React, { Fragment, memo, useRef, useState } from 'react'
import { RoomWrapper } from './style'
import { Rate } from 'antd';
import { Carousel } from 'antd';
import IconArrowLeft from '../../assets/svg/icon-arrow-left'
import IconArrowRight from '../../assets/svg/icon-arrow-right';
import Indicator from '../../base_ui/indicator';
import classNames from 'classnames';
const RoomItem = memo((props) => {
  const {itemData,itemWidth='25%',itemClick={}}=props
  const swpierRef=useRef()
  const [selectIndex,setSelectIndex]=useState(0)
  function btnClickHandle(isRight=true,event){
    isRight?swpierRef.current.next():swpierRef.current.prev()
    // 获取最新的索引值
    let newIndex=isRight?selectIndex+1:selectIndex-1
    let length=itemData.picture_urls.length-1
    if(newIndex<0) newIndex=length
    if(newIndex>length) newIndex=0
    setSelectIndex(newIndex)
    // 阻止事件冒泡
    event.stopPropagation()
  }
  function itemClickHandle(){
   if(itemClick) itemClick(itemData)
  }
  return (
    <RoomWrapper  verifycolor={itemData?.verify_info?.text_color || "#39576a"} itemwidth={itemWidth}  onClick={itemClickHandle}>
      <div className='inner' >
          {itemData.picture_urls?(
            <Fragment>
              <div className='swpier'>
              <div className='control'>
              <div className='btn left' onClick={e=>btnClickHandle(false,e)}>
                <IconArrowLeft width="30" height="30"></IconArrowLeft>
              </div>
              <div className='btn right' onClick={e=>btnClickHandle(true,e)}>
                <IconArrowRight width="30" height="30" ></IconArrowRight>
              </div>
              </div>
              <div className='indicator'>
            <Indicator selectIndex={selectIndex}>
            {
              itemData?.picture_urls?.map((item,index)=>{
                return (
                  <div className='item' key={item} >
                    <span className={classNames('dot',{active:selectIndex===index})}></span>
                  </div>
                )
              })
            }
            </Indicator>
          </div>
            <Carousel dots={false} ref={swpierRef}>
            {
            itemData?.picture_urls?.map((item)=>{
              return (
                <div className='cover' key={item}>
                    <img src={item} alt="" />
                </div>
              )
            })
          }
            </Carousel>

          </div>
  
            </Fragment>
          
          ):<div className='cover'><img src={itemData.picture_url} alt='' /></div>}
        <div className='desc'>
          {itemData.verify_info.messages.join(" · ")}
        </div>
        <div className='name'>{itemData.name}</div>
        <div className='price'>¥{itemData.price}/晚</div>

        <div className='bottom'>
        <Rate allowHalf defaultValue={itemData.star_rating} disabled style={{fontSize:12,color: "#00848A"}}/>
        <span className='count'>{itemData.reviews_count}</span>
        {
          itemData.bottom_info && <span className='extra'>·{itemData.bottom_info?.content}</span>
        }
        </div>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
 itemData:PropTypes.object
}

export default RoomItem