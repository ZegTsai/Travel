<template>
  <ul class="list">
    <li class="item" v-for='(item, key) of cityList' :key='key'>{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cityList: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 11.5rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      height: .4rem
      line-height: .44rem
      text-align: center
      color: $bgColor
</style>
