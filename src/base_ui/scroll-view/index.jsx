
import React, { memo, useEffect, useRef, useState } from 'react'
import {ScrollViewWrapper} from './style'
// import iconArrowLeft from '../../assets/svg/icon-arrow-left'
// import iconArrowRight from '../../assets/svg/icon-arrow-right'
import IconArrowLeft from '../../assets/svg/icon-arrow-left'
import IconArrowRight from '../../assets/svg/icon-arrow-right'
const ScrollView = memo((props) => {
  const [showRight,setShowRight]=useState(false)
  const [showLeft,setShowLeft]=useState(false)
  const [posIndex,setPosIndex]=useState(0)
  const [distance,setDistance]=useState(0)
  const scrollContentRef=useRef()
  useEffect(()=>{
    const scrollWidth=scrollContentRef.current.scrollWidth
    const clientWidth=scrollContentRef.current.clientWidth
    const distance=scrollWidth-clientWidth
    setShowRight(distance>0)
    setDistance(distance)
  },[props.children])

  // 按钮点击事件处理
  function controlClickHandle(isRight){
    
    const newIndex=isRight?posIndex+1:posIndex-1
    const newEl =scrollContentRef.current.children[newIndex]
    const newElOffsetLeft=newEl.offsetLeft
    scrollContentRef.current.style.transform=`translate(-${newElOffsetLeft}px)`
    setPosIndex(newIndex)
    setShowRight(distance>newElOffsetLeft)
    setShowLeft(newElOffsetLeft>0)
  }
  return (
    < ScrollViewWrapper>
      {showLeft&&<div onClick={e=>controlClickHandle(false)} className='control left'><IconArrowLeft></IconArrowLeft></div>}
      {showRight&&<div onClick={e=>controlClickHandle(true)} className='control right'><IconArrowRight></IconArrowRight></div>}
      <div className='scroll'>
      <div className='scroll-content' ref={scrollContentRef}>
        {props.children}
      </div>
      </div>

    </ ScrollViewWrapper>
  )
})

export default ScrollView