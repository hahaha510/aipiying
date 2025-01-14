import React, { memo, useEffect } from 'react'
import {RightWrapper} from './style'
import IconGlobal from '../../../../assets/svg/icon_global'
import IconMenu from '../../../../assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'
import { useState } from 'react'
const Right = memo(() => {
  // 数据
  const [showPanel,setShowPanel]=useState(false);

  //副作用处理 
  useEffect(()=>{
    function windowClickHandel(){ 
      setShowPanel(false)
    }
    window.addEventListener('click', windowClickHandel,true)  //默认会事件冒泡 点击了profile设为true 冒泡到window会变为false
    return ()=>{
      window.removeEventListener('click',windowClickHandel,true)
    }
  },[])


  // 事件处理函数
  function profileClickHandle(){
    setShowPanel(true)
  };
  return (
    <RightWrapper>
      <div className='btns'>
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal/>
        </span>
      </div>
      <div className='profile'onClick={profileClickHandle}>
        <IconMenu></IconMenu>
        <IconAvatar></IconAvatar>
        {showPanel&&(        <div className='panel'>
            <div className='top'>
              <div className='item register'>注册</div>
              <div className='item login'>登录</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>)}
      </div>
    </RightWrapper>
  )
})

export default Right