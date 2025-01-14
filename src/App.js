import React, { memo } from 'react'
import routes from './router'
import { useRoutes } from 'react-router-dom'

// 自己导入 上面是第三方导入

import './assets/css/index.css'
import Header from './components/app-header'
import Footer from './components/app-footer'
const App = memo(() => {
  return (
    <div className='app'>
      <Header></Header>
      <div className='page'>
        {useRoutes(routes)}
      </div>

      <Footer></Footer>
    </div>
  )
})

export default App