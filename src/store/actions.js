/*
通过mutations间接更新state的多个方法对象
 */
import {reqAddress, reqFoodCategroys, reqShops} from '../api'
import {RECEIVE_ADDRESS, RECEIVE_CATEGROYS, RECEIVE_SHOPS} from './mutation-types'

export default {
  // 异步获取地址
  async getAddress ({commit, state}) {
    // 发送异步ajax请求
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqAddress(geohash)
    // 提交一个mutation
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  // 异步获取分类列表
  async getCategroys ({commit}) {
    const result = await reqFoodCategroys()
    if (result.code === 0) {
      const categroys = result.data
      commit(RECEIVE_CATEGROYS, {categroys})
    }
  },
  // 异步获取商家列表
  async getShops ({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops({longitude, latitude})
    if (result.code === 0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, {shops})
    }
  }
}
