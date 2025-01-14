
import React, { memo, useEffect, useState } from 'react'
import { BrowserWrapper } from './style'
import IconArrowLeft from '../../assets/svg/icon-arrow-left'
import IconArrowRight from '../../assets/svg/icon-arrow-right'
const PictureBrowser = memo((props) => {
  const {closeClick,pictureUrls}=props
  const [currentIndex,setCurrentIndex]=useState(0)
  useEffect(()=>{
   document.body.style.overflow="hidden"
   return ()=>{
    document.body.style.overflow='auto'
   }

  })
  // 事件函数处理逻辑
  function closeBtnClickHandle(){
    console.log('aaa')
    closeClick()
  
  }
  function controlClickHande(isNext){
    let newIndex=isNext?currentIndex+1:currentIndex-1
    if(newIndex<0) newIndex=pictureUrls.length-1
    if(newIndex>pictureUrls.length-1) newIndex=0
    setCurrentIndex(newIndex)
  }
  return (
    <BrowserWrapper>
       <div className="top">
            <div className="close-btn" onClick={closeBtnClickHandle}>
              <IconArrowLeft></IconArrowLeft>
            </div>
          </div>
          <div className="slider">
            <div className="control">
              <div className="btn left" onClick={e=>controlClickHande(false)}>
                <IconArrowLeft width='77' height='77'></IconArrowLeft>
              </div>
              <div className="btn right" onClick={e=>controlClickHande(true)}>
                <IconArrowRight width='77' height='77'></IconArrowRight>
              </div>
            </div>
            <div className="picture">
              <img src={pictureUrls[currentIndex]} alt="" />
            </div>
          </div>
          <div className="preview"></div>
    </BrowserWrapper>
  )
})


export default PictureBrowser