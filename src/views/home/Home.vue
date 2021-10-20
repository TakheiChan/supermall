<template>

  <div id="home">
<!--    <h1>首页</h1>-->
    <nav-bar class="home-nav"><div slot="center">购物街</div> </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="['流行','新款','精选']"></tab-control>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import tabControl from "../../components/content/tabControl/tabControl";

  import {getHomeMultidata} from "../../network/home";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  // import Swiper from "../../components/common/swiper/Swiper";


  export default {
    name: "Home",
    components: {
      HomeSwiper,
      NavBar,
      RecommendView,
      FeatureView,
      tabControl
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      // 1. 请求多个数据
      getHomeMultidata().then(res => {
         console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    }
  }
</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: white;

    position: fixed;
    left: 0;
    right: 0;
  }

  .tab-control {
    position: sticky;
    top: 44px
  }
</style>
