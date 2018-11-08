<template>
  <div>
     <homeheader ></homeheader>
     <headerswiper :list='swiperList'></headerswiper>
     <headericons :list='iconList'></headericons>
     <headRecommend :list='recommendList'></headRecommend>
     <headWeekend :list='weekendList'></headWeekend>
  </div>
</template>
<script>
import homeheader from './components/header.vue'
import headerswiper from './components/swiper.vue'
import headericons from './components/icons.vue'
import headRecommend from './components/Recommend.vue'
import headWeekend from './components/Weekend.vue'
import axios from 'axios'
export default{
  name: 'home',
  components: {
    homeheader,
    headerswiper,
    headericons,
    headRecommend,
    headWeekend
  },
  data(){
    return {
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    gethomeInfo(){
      axios.get('./api/index.json')
           .then(this.gethomeInfoSucc)
    },
    gethomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList=data.swiperList
        this.iconList=data.iconList
        this.recommendList=data.recommendList
        this.weekendList=data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    this.gethomeInfo()
  }
}
</script>
<style>
</style>
