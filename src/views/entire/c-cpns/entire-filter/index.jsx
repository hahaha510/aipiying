
import React, { memo, useState } from 'react'
import { EntireFilterWrapper } from './style'
import filterData from '../../../../assets/data/filter_data.json'
import classNames from 'classnames'
const EntireFilter = memo((props) => {
  const [selectItem,setSelectItem]=useState([])
  function itemClickHandle(item){
    const newSelectItem=[...selectItem]
    if(newSelectItem.includes(item)){
      // 从数组中删掉
      const itemIndex=newSelectItem.findIndex((filteritem)=>filteritem===item)
      newSelectItem.splice(itemIndex,1)
    }else{
      newSelectItem.push(item)
    }
    console.log(newSelectItem)
    setSelectItem(newSelectItem)
  }
  return (
    <EntireFilterWrapper>
        <div className='filter'>
        {
        filterData.map((item)=>{
          return (
            <div className={classNames('item',{active:selectItem.includes(item)})} key={item} onClick={e=>itemClickHandle(item)}>{item}</div>
          )
        })
      }
        </div>
    </EntireFilterWrapper>
  )
})


export default EntireFilter