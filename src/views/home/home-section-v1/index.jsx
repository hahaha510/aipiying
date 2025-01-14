import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV1Wrapper } from './style'
import SectionHeader from '../../../components/section-header'
import SectionRooms from '../../../components/section-rooms'
import SectionFooter from '../../../components/section-footer'
const HomeSectionV1 = memo((props) => {
  const {HomeData,itemWidth}=props
  return (
    <HomeSectionV1Wrapper>
        <SectionHeader title={HomeData.title} ></SectionHeader>
        <SectionRooms roomList={HomeData.list} itemWidth={itemWidth}></SectionRooms>
        <SectionFooter></SectionFooter>
    </HomeSectionV1Wrapper>
  )
})

HomeSectionV1.propTypes = {
  HomeData:PropTypes.object
}

export default HomeSectionV1