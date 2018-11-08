<template>
 <div class="header">
	<div class="header-left"><span class="iconfont icon">&#xe600;</span></div>
	<div class="header-middle"><span class="iconfont icon1">&#xe601;</span>输入城市景点/内容/游玩</div>
	<router-link to="city">
  <div class="header-right">北京<span class="iconfont icon2">&#xe602;</span></div></router-link>
 </div>
</template>
<script>
export default{
  name: 'homeheader'
  // props:{
  //   cities: String
  // }
}
</script>
<style scoped lang="stylus">
  @import '~@/assets/styles/varibles.styl';
/*保证这个header只对自已有作用*/
  .header
    display :flex
    height : 0.86rem
    line-height :0.86rem
    background:#00bcd4
    .header-left
      width: .86rem
      float :left
      .icon
        margin-left 13px
        color #fff
    .header-middle
      box-sizing: border-box;
      padding-left 10px
      letter-spacing:2px
      flex :1
      height .64rem
      line-height  .64rem
      border-radius: 0.1rem
      background-color #fff
      margin-top .11rem
      color #ccc
      .icon1
        font-size 16px
    .header-right
      color #fff
      text-align center
      line-height .86rem
      width: 1.24rem
      float : right 
      .icon2
        font-size 16px
        
</style>
