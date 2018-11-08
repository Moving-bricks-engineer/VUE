<template>
   <div class="swiper">
    <swiper :options="swiperOption" v-if="list.length">
    <!-- slides -->
    <swiper-slide v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" class="swiper-image">
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div> 
    </swiper>
  </div>
</template>
<script>
export default {
    name: 'headerswiper',
    props:{
        list: Array
    },
    data () {
        return {
            swiperOption: {
                autoplay: true,
                speed : 400,
                loop : true
                
                // scrollbar: '.swiper-scrollbar'
            }
        }
    }
}
</script>
<style lang="stylus"  scoped>
  .swiper
    overflow hidden
    width 100%
    height 0
    padding-bottom 26%
    .swiper-image
      width 100%
      height 2rem
</style>

