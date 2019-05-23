<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span>
    </div>
    <div class="header-input" >
      <div>
      <span class="iconfont input-icon">&#xe632;</span>
      <input value="输入城市游玩/购物/吃喝" class="input-icon" />
      </div>
    </div>
    <div class="header-right arrow-icon">城市
      <span class="iconfont">&#xe64a;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
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
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      background #fff
      border-radius: .1rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      line-height: .64rem
      height: .64rem
      color: #ccc
      .input-icon
        color: grey
    .header-right
      width: 1.24rem
      text-align: center
      float: right
      .arrow-icn
        font-size: .2rem
</style>
