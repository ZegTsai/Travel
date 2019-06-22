<template>
  <ul class="list">
    <li
    class="item"
    v-for='item of letters'
    :key='item'
    :ref='item'
    @touchstart='handleTouchStart'
    @touchmove='handleTouchMove'
    @touchend ='handleTouchEnd'
    @click='handleLetterClick'
    >{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  /* 接收父组件发送过来的城市列表（只使用其key来渲染滚动条） */
  props: {
    cityList: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cityList) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    /* 绑定点击事件，当点击滚动条时，子组件使父组件触发change事件并传点击区域的内容（例如A）给父组件 */
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 100
          const index = Math.floor((touchY - this.startY) / 17.5)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 2rem
    right: 0
    bottom: 0
    width: .35rem
    .item
      height: .35rem
      line-height: .35rem
      text-align: center
      color: $bgColor
</style>
