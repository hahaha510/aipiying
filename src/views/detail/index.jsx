import React, { memo } from 'react'
import { DetailWrapper } from './style'
import DetailInfo from './c-cpns/detail-info'
import DetailPicture from './c-cpns/detail-picture'
const Detail = memo(() => {
  return (
    <DetailWrapper>
      <DetailPicture></DetailPicture>
      <DetailInfo></DetailInfo>
    </DetailWrapper>
  )
})

export default Detail