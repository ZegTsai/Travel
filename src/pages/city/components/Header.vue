<template>
    <div class="header" id="city-header">
      <div class="header-top">
        <div class="header-top-left">
          <router-link to="/">
          <span class="iconfont home-back">&#xe624;</span>
          </router-link>
        </div>
        <!-- 城市选择标题 -->
        <div class="header-top-right">
        <p class="city-select">城市选择</p>
        </div>
      </div>
        <!-- 境内外选择 -->
      <div class="header-bottom">
        <div class="header-china">境内</div>
        <div class="header-board">境外·港澳台</div>
      </div>
      <!-- 查找框 -->
      <div class="search">
        <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  .header
    position: relative
    overflow: scroll
    width: 100%
    height: 2.2rem
    background-color: #00bcd4
    .header-top
      height: .8rem
      line-height: .8rem
      border-bottom: .001rem solid #ccc
      .header-top-left
        width: 20%
        float: left
        .home-back
          padding: 20%
          color: white
          font-weight: bold
      .header-top-right
        width: 80%
        float: left
        .city-select
          padding-left: 25%
          font-size: .32rem
          color: white
          padding-top: .1rem
    .header-bottom
      height: .6rem
      line-height: .6rem
      text-align: center
      .header-china
        height: .4rem
        line-height: .4rem
        margin-top: .05rem
        background-color: #fff
        width: 35%
        color: #00bcd4
        float: left
        margin-left: 15%
      .header-board
        height: .4rem
        line-height: .4rem
        margin-top: .05rem
        color: white
        width: 35%
        margin-left: 0
        float: left
        border: .005rem solid #fff
    .search
      background-color: #00bcd4
      height: .7rem
      .search-input
        box-sizing: border-box
        width: 80%
        height: .5rem
        margin-left: 9%
        margin-top: .1rem
        text-align: center
        padding: 0 .1rem
        background-color: #fff
        border-radius: .06rem
        color: #666
</style>
