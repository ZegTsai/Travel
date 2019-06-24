<template>
    <div>
      <div
      class="header"
      v-if="isHeaderShow"
      :style="opacityStyle"
      >
        <router-link tag="div" to="/" class="header-home-back">
          <span class="iconfont home-back-icon">&#xe624;</span>
        </router-link>
        <div class="header-content">
        {{ this.sightName }}
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isHeaderShow: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  props: {
    sightName: {
      type: String
    }
  },
  methods: {
    handleScroll () {
      var scrollTop = document.documentElement.scrollTop
      if (scrollTop > 46 && scrollTop < 205) {
        this.opacityStyle.opacity = (scrollTop - 46) / (205 - 46)
        this.isHeaderShow = true
      } else if (scrollTop < 46) {
        this.isHeaderShow = false
        this.opacityStyle.opacity = 0
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  .header
    z-index: 99
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .8rem
    line-height: .8rem
    background-color: #00bcd4
    .header-home-back
      height: .8rem
      width: 15%
      float: left
      .home-back-icon
        margin-left: .2rem
        color: white
        font-weight: bold
    .header-content
      display: inline-block
      height: .8rem
      margin-left: 1.5rem
      font-size: .32rem
      color: white
</style>
