import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'
import ScrollView from '../../base_ui/scroll-view'
const SectionTabs = memo((props) => {
  const {tabNames=[],tabClick}=props
  const [currentIndex,setCurrentIndex]=useState(0)
  // 点击事件处理函数
  function itemClickHandle(index,item){
    setCurrentIndex(index)
    tabClick(index,item)
  }
  return (
    <SectionTabsWrapper>
      <ScrollView>
      {tabNames.map((item,index)=>{
        return <div className={classNames('item',{active:index===currentIndex})} onClick={e=>itemClickHandle(index,item)} key={index}>{item}</div>
      })}
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array
}

export default SectionTabs