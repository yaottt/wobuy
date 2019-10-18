<template>
  <main id="store">
    <div class="store-head">
      <div class="store-bg">
        <img src="../../data/images/bg01.jpg" alt="">
        <div class="shadow"></div>
      </div>
      <div class="head-content">
        <div class="search-box">
          <span class="left"><img src="../assets/images/back_w.png" alt=""></span>
          <div class="ipt">
            <span><img src="../assets/images/nav_05.png" alt=""></span>
            <input type="text" placeholder="搜索本店内商品" class="search-ipt">
            <p>搜索</p>
          </div>
        </div>
        <div class="store-massagge">
          <div class="store-shop">
            <img src="../../data/images/storepic01.png" alt="">
            <p>中粮优采旗舰店</p>
            <div class="store-addr">
              <router-link to="/addr">{{this.$store.state.city}}</router-link>
              <span class="addr"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="store-nav">
      <div class="tab-items" v-for="(v,i) in text" @click="get(i)">
        <img :src="v.image1" alt="" v-if="index!=i">
        <img :src="v.image2" alt="" v-if="index==i">
        <span class="tabtext" :class="{active:index==i,on:index==i}">{{v.title}}</span>
      </div>
    </div>
    <component :is="activeIndex"></component>
    <v-footer></v-footer>
  </main>
</template>

<script>
  import vfooter from "./footer.vue"
  import homepage from "./homepage.vue"
  import whole from "./whole.vue"
  export default{

    components:{
      'v-footer':vfooter,
      homepage,
      whole,
    },
    data(){
      return{
        text:[],
        index:0,
        show:0,
        router:['homepage','whole','whole','whole'],
        activeIndex:'homepage',
      }
    },
    methods:{
      get(i){
        this.index=i;
        this.activeIndex=this.router[i];
      }
    },
    mounted(){
      this.$http.get('./data/store.json')
            .then((response)=> {
              // console.log(response.data.listall);
              this.text=response.data.text
            })
            .catch(function (error) {
              console.log(error);
            })
    }
  }
</script>

<style scoped>
  #store{
    background-color: #eee;
  }
  .store-head{
    width: 100%;
    height: 115px;
    height: 6.133333rem;
    border:1px solid #0077AA;
    position: relative;
  }
  .store-bg{
    width: 100%;
    height: 100%;

  }
  .store-bg img{
    width: 100%;
  }
  .shadow{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .head-content{
    position: absolute;
    top:0px;
    left: 0px;
    width: 100%;
  }
  .ipt{
    display: inline-block;
    width: 65%;
    height: 40px;
    position: relative;
    padding-right:48px ;
  }
  .ipt span img{
    width: 20px;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    left:1%;
    z-index: 1;
  }
  .ipt .search-ipt{
    width: 85%;
    height: 38px;
    text-indent: 27px;
    outline-style: none;
    border-style: none;
    background: rgba(255, 255, 255, 0.8);
    font: normal 15px 'microsoft yahei';
    border-radius: 6px;
    border:1px solid #ccc;
    position: absolute;
    top:0px;
    left:0px;

  }
  .ipt p{
    margin:0px;
    width: 40px;
    display: inline-block;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right:0px;
    /* line-height: 59px; */
    font:'microsoft yahei';
    font-size: 15px;
    color:#FFFFFF;

  }
  .search-box{
    width: 100%;
    padding-top:5px;
    position: relative;
  }
 .search-box .left{
    display: block;
    width: 15px;
    height: 20px;
    position: absolute;
    top:50%;
    left:2%;
    transform: translateY(-50%);
  }
  .left img{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .store-massagge{
    /* width: 100%; */
    padding: 10px;
  }
  .store-shop{
    height: 40px;
    text-align: left;
  }
  .store-shop img{
    height: 100%;
    border-radius: 5px;
  }
  .store-shop p{
    display: inline-block;
    color: #fff;
    padding-left: 10px;
  }
  .store-addr{
    float: right;
    height: 100%;
    line-height: 35px;

  }
  .store-addr a{
     font-size: 14px;
     color:#fff;padding-right: 5px;
  }
  .addr{
    display: block;
    width: 20px;
    height: 20px;
    float: right;
    background: url('../assets/images/a_d_03.png') no-repeat;
    background-size: contain;
    background-position: 0 0;
    margin-top: 10px;
  }
  .store-nav{
    overflow:hidden;
    background-color: #fff;
  }
  .tab-items{
    float:left;
    font-size: 0.22rem;
    display: block;
    width: 25%;
  }
  .tab-items .on{
    border-bottom: 4px solid #00a651;
  }
  .active{
    color:#00a651
  }
  .tab-items img{
    width: 25%;
    display: inline-block;
    margin:10px 0px 5px 0px;
  }
  .tab-items .tabtext{
    display: block;
    color:#000;
    padding-bottom:5px
  }
  .tab-items .active{
    color:#00a651
  }
  .tab-items .on{
    border-bottom: 4px solid #00a651;
  }
</style>
