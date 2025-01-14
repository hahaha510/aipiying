import React, { memo, useState } from 'react'
import Indicator from '../../base_ui/indicator'
import { DemoWrapper } from './style'

const Demo = memo((props) => {
  const names=['aaa','bbb','ccc','ddd','fff','rrr']
  const [selectIndex,setSelectIndex]=useState(0)
  function toggleClickHandle(isNext){
    let newSelectIndex=isNext?selectIndex+1:selectIndex-1
    if(newSelectIndex<0) newSelectIndex=names.length-1
    if(newSelectIndex>names.length-1) newSelectIndex=0
    setSelectIndex(newSelectIndex)
  }
  return (
<DemoWrapper>
<div>
      <div className='control'>
        <button onClick={e=>toggleClickHandle(false)}>上一个</button>
        <button onClick={e=>toggleClickHandle(true)}>下一个</button>
      </div>
      <div className='list'>
        <Indicator selectIndex={selectIndex}>
          {names.map(item=>{
            return <button key={item}>{item}</button>
          })}
        </Indicator>
      </div>
    </div>
</DemoWrapper>
  )
})



export default Demo