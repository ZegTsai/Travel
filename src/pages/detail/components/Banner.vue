<template>
  <div>
    <div class="banner">
      <router-link to="/">
        <div class="home-back">
          <div class="home-back-icon">
            <span class="iconfont">&#xe624;</span>
          </div>
        </div>
      </router-link>
      <img class="banner-img" :src="this.bannerImg" @click="handleBannerClick" />
      <div class="banner-info">
        <div class="banner-title">{{ this.sightName }}</div>
        <div class="banner-number">
          <span class="iconfont">&#xe692;
          </span>
          {{ this.gallaryImgs.length }}
        </div>
      </div>
    </div>
    <common-gallary
    :imgs="gallaryImgs"
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/gallary'
export default {
  name: 'DetailBanner',
  props: {
    gallaryImgs: {
      type: Array
    },
    sightName: {
      type: String
    },
    bannerImg: {
      type: String
    }
  },
  data () {
    return {
      showGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .home-back
      position: absolute
      top: .2rem
      left: .2rem
      width: .7rem
      height: .7rem
      border-radius: .5rem
      background: rgba(white, .7)
      .home-back-icon
        margin: .2rem .15rem
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        margin-left: .2rem
        flex: 1
        font-size: .4rem
      .banner-number
        margin-right: .2rem
        padding: .05rem .5rem
        height: .4rem
        line-height: .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
</style>
