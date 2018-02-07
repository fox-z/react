import * as home from './action-type'

let defaultState = {
  banner : [] , // 首页轮播图
}

export const homeData = ( state = defaultState , action = {} ) => {
  switch( action.type ){
    case home.saveBanner :
    return [ ...state , ...action.data ] ;
    break ;
    default :
    return state ;
    break ;
  }
}