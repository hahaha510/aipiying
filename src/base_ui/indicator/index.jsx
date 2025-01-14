
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const {selectIndex}=props
  const contentRef=useRef()
  useEffect(()=>{
    const selectItemEl=contentRef.current.children[selectIndex]
    const itemLeft=selectItemEl?.offsetLeft
    const itemWidth=selectItemEl?.clientWidth
    const contentWidth=contentRef.current.clientWidth
    let distance=itemLeft+itemWidth*0.5-contentWidth*0.5
    const contentScroll=contentRef.current.scrollWidth

    // 对左右两边的特殊情况进行处理
    if(distance<0) distance=0
    const maxDistance=contentScroll-contentWidth
    if(distance>maxDistance) distance=maxDistance
    contentRef.current.style.transform=`translate(${-distance}px)`
  },[selectIndex])
  return (
    <IndicatorWrapper>
      <div className='i-content' ref={contentRef}>
      {props.children}
      </div>
    </IndicatorWrapper>

  )
})

Indicator.propTypes = {}

export default Indicator