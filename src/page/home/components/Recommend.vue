<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of  list" :key="item.id">
                
                    <img :src="item.imgUrl" class="item-img" />
                
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'homeRecommend',
    props:{
        list: Array
    },
    data () {
        return {
        }
    }
}
</script>
<style lang="stylus" scoped>
  @import '~@/assets/styles/mixins.styl';
    .recommend-title
      line-height .8rem
      background #eee
      text-indent .2rem
      margin-top .1rem
    .item
      overflow: hidden
      display flex
      height 1.9rem
      
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem 
        color #000
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        background-color #ff9300
        margin-top .2rem
        padding 0 .1rem
        border-radius .03rem 
        color #fff
</style>
