<template>
    <div>
        <div class="header">城市选择
            <router-link to="/">
            <div class="iconfont icon">&#xe600;</div>
            </router-link>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'Cityheader'
}
</script>
<style lang='stylus' scoped>
  @import '~@/assets/styles/varibles.styl';
    .header
      overflow hidden
      height .86rem
      line-height .86rem
      color #fff
      text-align center
      background-color $bgColor 
      font-size .32rem
    .icon
      box-sizing border-box
      float left
      padding-left .2rem
      color #fff
</style>
