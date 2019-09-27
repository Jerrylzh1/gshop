/*
直接更新state的多个方法对象(有点像定义的bean属性)
 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGROYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGROYS] (state, {categroys}) {
    state.categroys = categroys
  },
  [RECEIVE_SHOPS] (state, {shops}) {
    state.shops = shops
  }
}
