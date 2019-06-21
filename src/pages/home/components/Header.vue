<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input" >
      <div>
      <span class="iconfont input-icon">&#xe632;</span>
      <input placeholder="输入城市游玩/购物/吃喝" type="text" class="input-icon" />
      </div>
    </div>
    <router-link to='/city'>
      <div class="header-right arrow-icon">{{this.city}}
        <span class="iconfont">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  },
  props: {
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    display: flex
    line-height: .86rem
    background #00bcd4
    color: #fff
    .header-left
      width: .64rem
      float: left
      padding-left: .22rem
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background #fff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .1rem
      padding-left: .2rem
      line-height: .64rem
      height: .64rem
      color: #ccc
      .input-icon
        color: grey
        margin-bottom: .1rem
    .header-right
      mid-width: 0.84rem
      padding: 0 0.1rem
      text-align: center
      float: right
      color: white
      .arrow-icn
        font-size: .2rem
</style>
