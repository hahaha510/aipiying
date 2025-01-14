import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '../../../components/section-header'
import ScrollView from '../../../base_ui/scroll-view'
import RoomItem from '../../../components/room-item'

const HomeSectionV3 = memo((props) => {
  const {infoData}=props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <ScrollView>
        {infoData.list.map((item)=>{
          return <RoomItem itemData={item} itemWidth='20%' key={item.id}></RoomItem>
        })}
      </ScrollView>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV3