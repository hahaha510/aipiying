import React, { memo, useState } from 'react'
import { DetailPicWrapper } from './style'
import { useSelector } from 'react-redux'
import PictureBrowser from '../../../../base_ui/picture-browser'

const DetailPicture = memo(() => {
  const [showBrowser,setShowBrowser]=useState(false)
  const {detailInfo}=useSelector((state)=>({
    detailInfo:state.detail.detailInfo
  }))
  return (
    <DetailPicWrapper>
      <div className="pictures">
        <div className="left">
          <div className="item" onClick={e=>setShowBrowser(true)}>
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="cover"></div>
          </div>
        </div>
        <div className="right">
          {
            detailInfo?.picture_urls?.slice(1,5).map((item)=>{
              return (
                <div className="item" key={item}>
                  <img src={item} alt="" />
                  <div className="cover"></div>
                </div>
              )
            })
          }
        </div>
      </div>
      <div onClick={e=>{setShowBrowser(true)}} className='show-btn'>显示照片</div>
      {
        showBrowser&&<PictureBrowser closeClick={e=>setShowBrowser(false)} pictureUrls={detailInfo.picture_urls}></PictureBrowser>
      }
    </DetailPicWrapper>
  )
})

export default DetailPicture