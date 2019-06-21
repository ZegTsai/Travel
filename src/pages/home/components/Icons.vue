<template>
  <div class="icons">
    <!-- 滑动插件 -->
    <swiper :options="swiperOption">
      <!-- 遍历滑动页数(此处为9个icon，每页8个，分为2页) -->
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <!-- 遍历某一页中每一个icon、图像与描述 -->
        <div class="icon"  v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        loop: true
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      if (this.icons) {
        this.icons.forEach((item, index) => {
          /* 根据向下取整的结果判断icon是落在第几页 */
          const page = Math.floor(index / 8)
          if (!pages[page]) {
            /* 定义数组里边的项类型也是数组 */
            pages[page] = []
          }
          /* 由上面判断第几页后，把项放到对应页中 */
          pages[page].push(item)
        })
        return pages
        /* 最后返回的是pages=[[1,2,3,4,5,6,7,8],[1]] */
      }
    }
  }
}
</script>

<style lang="stylus" scope>
  @import "../../../assets/styles/mixins.styl"
  .icons >>> .swiper-container
    padding-bottom: 50%
  .icons
    margin-top: .2rem
  .icon
    position: relative
    overflow: hidden
    height: 0
    float: left
    width: 25%
    padding-bottom: 25%
    .icon-img
      position: absolute
      overflow: hidden
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      .icon-img-content
        height: 100%
        display: block
        margin: 0 auto
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .44rem
      color: #333
      text-align: center
      ellipsis()
</style>
