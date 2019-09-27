<template>
  <div id="app">
  <section class="content">
    <!--首页外卖-->
    <div class="on">
      <section class="msite">
        <!--首页头部-->
        <HeaderTop :title="address.name">
        <span class="header_search" slot="left">
            <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
        </span>
        </HeaderTop>
        <!--首页导航-->
        <nav class="msite_nav">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(categroys,index) in categroysArr" :key="index">
                <a href="javascript:" class="link_to_food" v-for="(category, index) in categroys" :key="index">
                  <div class="food_container">
                    <img :src="baseImageUrl+category.image_url">
                  </div>
                  <span>{{category.title}}</span>
                </a>
              </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list">
          <div class="shop_header">
            <i class="iconfont icon-option"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          <ShopList></ShopList>
        </div>
      </section>
    </div>
  </section>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
export default {
  data () {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  mounted () {
    this.$store.dispatch('getCategroys')
  },
  computed: {
    ...mapState(['address', 'categroys']),
    // 根据categorys一维数组生成2维数组
    categroysArr () {
      const {categroys} = this
      // 准备空的二维数组
      const arry = []
      let minArr = []
      // 遍历categorys
      categroys.forEach(c => {
        // 如果当前小数组已经满了 创建一个新数组
        if (minArr.length === 8) {
          minArr = []
        }
        // 如果minArr是空的，将小数组保存到大数组中去
        if (minArr.length === 0) {
          arry.push(minArr)
        }
        // 当前分类保存在小数组中
        minArr.push(c)
      })
      return arry
    }
  },
  watch: {

    categroys (value) {
    //   // categroys 数组中有数据了 在异步更新界面之前执行
    //   setTimeout(() => {
    //     // eslint-disable-next-line no-new
    //     // 创建一个swipper实例化对象，来实现轮播
    //     new Swiper('.swiper-container', {
    //       loop: true,
    //       // 如果需要分页器
    //       pagination: {
    //         el: '.swiper-pagination'
    //       }
    //     })
    //   }, 100)
      //界面更新就立即调用swipper对象
      this.$nextTick(() => {//一旦完成界面更新，立即调用(此条语句应该显示在数据更新之后)
        // 创建一个swipper实例化对象，来实现轮播
        new Swiper('.swiper-container', {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          }
        })
      })
  }

  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
