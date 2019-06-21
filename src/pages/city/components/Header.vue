<template>
  <div>
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
        <input class="search-input" v-model="keyword" type="text" placeholder="输入城市名或拼音"/>
      </div>
    </div>
    <!-- 显示查找内容 -->
    <div
    class="search-content"
    ref="search"
    v-show="keyword"
    >
      <ul class="search-content-ul">
        <li class="search-content-li"
        v-for="item of list"
        :key='item.id'>
        {{item.name}}
        </li>
        <li class="search-content-li" v-show="hasNoData">没有找到匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityHeader',
  props: {
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    /* cities数据的格式(对象：键为首字母，值为一个城市的数组集合)：
    {A：[{城市1]，{城市2}]，B：[{城市1]，{城市2}]}
    */
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      /* 当没有搜索内容输入的时候，清空list */
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        /* 定义一个result的空数组，用以存放搜索到item */
        const result = []
        /* i为键位由A到Z循环一遍 */
        for (let i in this.cities) {
          /* 根据键位遍历对应首字母的城市的数据（包括id、spell和name） */
          this.cities[i].forEach((value) => {
            /* 如果对应的值，拼写或名字有包含搜索的内容，则把值放到result中 */
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  }
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
  .search-content
    text-indent: .2rem
    text-align: left
    overflow: hidden
    position: absolute
    top: 2.2rem
    height: 5rem
    left: 0
    right: 0
    bottom: 0
    .search-content-ul
      background-color: #fff
      .search-content-li
        border-bottom: .01rem solid #ccc
        height: .7rem
        line-height: .7rem
</style>
