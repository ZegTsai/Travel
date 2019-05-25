<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
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
