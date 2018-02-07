import * as home from './action-type'
export const saveBanner = ( data ) => {
  return {
    type : home.saveBanner ,
    data
  }
}