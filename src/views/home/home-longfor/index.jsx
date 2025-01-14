import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForWrapper } from './style'
import SectionHeader from '../../../components/section-header'
import ScrollView from '../../../base_ui/scroll-view'
import LongforItem from '../../../components/longfor-item'
const HomeLongFor = memo((props) => {
  const {infoData}=props
  console.log(infoData)
  return (
    <LongForWrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
      <div className='longfor-list'>
        <ScrollView>
          {
            infoData.list.map(item => {
              return <LongforItem itemData={item} key={item.city}/>
            })
          }
        </ScrollView>
      </div>
    </LongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData:PropTypes.object
}

export default HomeLongFor