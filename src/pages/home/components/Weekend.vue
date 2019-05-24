<template>
  <div>
    <h2 class="title">周末去哪儿</h2>
    <ul v-for="item of WkList" :key="item.id">
        <li class="wk-item">
          <img class="wk-img" :src="item.imgUrl" />
          <h3 class="wk-title">{{item.title}}</h3>
          <p class="wk-desc">{{item.desc}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    WkList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scope>
  @import "../../../assets/styles/mixins.styl"
  .wk-item
    height: 3.8rem
    background-color: white
    .wk-img
      overflow: hidden
      width: 100%
      height: 2.7rem
    .wk-title
      height: 0.5 rem
      padding-left: 0.15rem
      padding-top: 0.2rem
      font-weight: bold
    .wk-desc
      height: 0.3 rem
      padding-left: 0.15rem
      font-size: 0.24rem
      ellipsis()
</style>
