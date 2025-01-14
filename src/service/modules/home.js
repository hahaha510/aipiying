import hyRequest from '../request/index'
export const getGoodPriceInfo=function(){
 return  hyRequest.get({
    url:'/home/goodprice'
  })
}
export const getHighScoreInfo=function(){
  return hyRequest.get({
    url:'/home/highscore'
  })
}
export const getDiscountInfo=function(){
  return hyRequest.get({
    url:'/home/discount'
  })
}
export const getHotRecommendInfo=function(){
  return hyRequest.get({
    url:'/home/hotrecommenddest'
  })
}

export const getLongForInfo=function(){
  return hyRequest.get({
    url:'/home/longfor'
  })
}

export const getPlusInfo=function(){
  return hyRequest.get({
    url:'/home/plus'
  })
}