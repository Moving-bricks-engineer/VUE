
<template>
    <div class="icons">
      <swiper :options="swiperOption" >
        <swiper-slide v-for="(page,index) of pages" :key="index">  
            <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">            
                <img 
                :src="item.imgUrl" 
                class="icon-imgcontent">
                <p class="pp">{{item.desc}}</p>
                </div>
            </div>
        </swiper-slide>
      </swiper>     
    </div>
</template>
<script>
export default {
    name:'headericons',
    props:{
        list: Array
    },
    data (){
       return {
           swiperOption: {}
       }
    },
    computed:{
        pages (){
            const pages = []
            this.list.forEach(function(item,index){
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] =[]
                }
                pages[page].push(item)
            })
            return pages
        }
    }
  
}
</script>
<style lang='stylus' scoped>
    .icons >>> .swiper-container
      overflow hidden
    .icons
      padding-bottom 50%
      height 0
      margin-top .1rem
      .icon
        position relative
        overflow hidden
        float left
        width :25%
        padding-bottom 25%
        .pp
          text-align center
          color #333
          line-height .44rem 
        .icon-img
        //   width 100%
        //   height 80%
          top 0
          left 0
          right 0
          bottom .44rem
          position absolute
          padding-left .1rem
          box-sizing border-box
          .icon-imgcontent
            display block
            margin 0 auto
            height 100%
            
</style>