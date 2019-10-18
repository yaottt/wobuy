<template>
  <main id="shopping">
    <div class="nav">
      <swiper :options="swiperOption">
         <swiper-slide v-for="(v,i) in pic"><img :src="v.images" herf=""></swiper-slide>
         <!-- <swiper-slide><img :src="pic[0].images"></swiper-slide>
         <swiper-slide><img :src="pic[1].images"></swiper-slide>
         <swiper-slide><img :src="pic[2].images"></swiper-slide>
         <swiper-slide><img :src="pic[3].images"></swiper-slide>
         <swiper-slide><img :src="pic[4].images"></swiper-slide>
         <swiper-slide><img :src="pic[5].images"></swiper-slide>
         <swiper-slide><img :src="pic[6].images"></swiper-slide> -->
         <div class="swiper-pagination current" slot="pagination"></div>
       </swiper>
    </div>
    <div class="shopping-com">
      <div class="common-space">
        <h3 v-for="(v,i) in list">
          <span v-for="(v,i) in list" class="self">{{v.con}}</span>{{v.title}}
        </h3>
        <p class="pr">
          <span class="fast-buy">抢购价:</span>
          <span v-for="(v,i) in list" class="price">{{v.price}}</span>
          <span class="points">可获积分</span>
        </p>
      </div>
      <div class="amount">
        <p class="amount-list">数量</p>
        <p class=" amount-num">
          <span class="iconfont icon-jian decrease" @click="sub()"></span>
          <span class="account">{{this.$store.state.num}}</span>
          <span class="iconfont icon-jia increase" @click="add()"></span>

        </p>
      </div>
    </div>
    <div class="sp-select">
      <ol>
        <li>
          <router-link  to="">
            <span class="shopping-req">满减</span>
            <span class="nes">购买指定商品满158元减30元</span>
            <span class="right"></span>
          </router-link>
          </li>
        <li @click="change()">
          <router-link  to="">
            <span class="shopping-req plus">加价购</span>
            <span class="nes special">有多种加价购商品可供选择，请在购物车加入</span>
            <span :class="{right1:true, on: show==true}"></span>
          </router-link>
          <div class="least">
            <p v-if="show==true">【自有优选】购买生鲜商品即可加价换购（部分商品不参与）,数量有限换完为止</p>
            <p v-if="show==true" class="shopping-text">【超值换购】购买生鲜商品即可加价换购（部分商品不参与）,数量有限换完为止</p>
          </div>
        </li>
      </ol>
    </div>
    <div class="shopping-addr">
      <div class="sp-pd">
        送至
      <span class="sp-addr"></span>
      <p class="addr-text">广东省 广州市 黄埔区</p>
      <span class="right sp-on"></span>
      <p class="pd-now">现货</p>
      </div>
    </div>
    <div class="shopping-comment">
      <div class="comment-title">
        <router-link to="/index">
          <span class="com-left">评价(179)</span>
          <span class="com-right">好评：100%</span>
          <span class="right sp-on"></span>
        </router-link>
      </div>
      <div v-for="(v,i) in content" class="comment-content">
        <p>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span  class="user">{{v.people}}</span>
        </p>
        <p>{{v.text}}</p>

      </div>
    </div>
    <div class="shopping-store">
      <router-link to="/comment">
        <div class="store-content">
        <div class="store-pic">
          <router-link to="/store"><img v-for="(v,i) in store" :src="v.images" alt=""></router-link>
          <router-link to="/store"><p v-for="(v,i) in store">{{v.storename}}</p></router-link>
          <router-link to="/store" class="store-enter">
            进入店铺
          </router-link>
          <span class="right"></span>
        </div>
      </div>
      </router-link>
    </div>
    <div class="check-look">
      <router-link to="/information">
        点击查看图文详情
        <span class="right-icon"></span>
      </router-link>
    </div>
    <v-footer></v-footer>
  </main>
</template>

<script>
  import vfooter from "./footer.vue"
  export default{
    name:'shopping',
    components:{
      'v-footer':vfooter,
    },
    data(){
      return{
        pic:'',
        list:'',
        content:[],
        store:[],
        parts:'shopping',
        show:false,
        swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            loop: true,
        //     autoplay: {
        // 　　　　delay: 3000,
        // 　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
        // 　　},
          },
      }
    },
    methods:{
      change(){
        this.show=!this.show
      },
      add(){
        var con;
      con=this.$store.commit('add')
      },
      sub(){
      this.$store.commit('sub')
      },
      plus(){
        console.log(this.$store.state.num)
      }
    },
    mounted(){
      this.$http.get('./data/details.json')
      		  .then((response)=> {
      		    // console.log(response.data.list);
      		    // console.log(this)
      		    this.pic=response.data.pic;
              this.list=response.data.list;
              this.content=response.data.content;
               this.store=response.data.store;
              // console.log(this.list1)
      		  })
      		  .catch(function (error) {
      		    // console.log(error);
      		  })
    }

  }
</script>
<style>
  .swiper-container-horizontal .current .swiper-pagination-bullet{
    margin: 0px 7px;
    cursor:pointer;
  }
   .swiper-container-horizontal .current .swiper-pagination-bullet-active{
    background-color: #00a651;
  }

</style>
<style scoped>
  #shopping{
    background-color: #eee;
  }
  .nav img{
    width: 100%;
  }

  /* 图片标题 */
  .shopping-com{
  padding: 10px;
  background-color: #fff;
  }
  .common-space h3{
    text-align: left;
  }
  .self{
    width: 2rem;
    height: 0.853333rem;
    line-height:0.863333rem ;
    background-color: #f23030;
    border-radius: 0.213333rem;
    font-size: 14px;
    color: #fff;
    display: inline-block;
    text-align: center;
    margin-right: 10px;
  }
  .pr{
    display: inline-block;
    width: 100%;
    height: 45px;
    color: #f23030;
    text-align: left;
    margin-top:10px;
  }
  .price{
    font: normal 1.28rem 'Microsoft YaHei', Helvetica, Tahoma, sans-serif;

  }
  .points{
    float: right;
    line-height: 2.4rem;

  }
  .amount{
    text-align: left;
    overflow: hidden;
    line-height: 1.493333rem;
    padding-top: 10px;
    font-size: 13px;
    border-top: 1px solid #d6d6d8;
  }
  .amount p{
    display: inline-block;

  }
  .amount-num{
    /* width: 4.8rem; */
    /* height: 1.333333rem; */
  }
  .amount span{
    float: left;
  }
  .increase, .decrease{
    width: 1.44rem;
    height: 1.44rem;
    line-height: 1.44rem;
    text-align: center;
    font-size: 12px;
  }
  .decrease{
    border: 1px solid #8d8e91;
    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
  }
  .increase{
    border: 1px solid #404041;
    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
  }
  .account{
    height: 1.44rem;
    width: 1.92rem;
    line-height: 1.44rem;
    text-align: center;
    border-top: 1px solid #404041;
    border-bottom: 1px solid #404041;
    border-right: 0;
    border-left: 0;
  }
  .amount-list{
    float: left;
    margin-right: 10px;
  }
  /* 满减 */
  .sp-select{
    margin:10px 0px;
    background-color: #fff;
  }
  .sp-select a{
    color: #000;
  }
  .sp-select ol li{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #d6d6d8;
    text-align: left;
    position: relative;
  }
  .shopping-req{
    color: #f23030;
    border: 2px solid;
    border-radius: 5px;
    font-size: 13px;

  }
  .plus{
    position: relative;
    top:-15px;
  }
  .right{
    position: absolute;
    top: 20%;
    right:0;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 50px  ;
    background-position: 0 -155px;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .right1{
    position: absolute;
    top: 20%;
    right:0;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 50px  ;
    background-position: 0 -150px;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .nes{
    font-size: 13px;

  }
  .special{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width:76%;
    display: inline-block;
  }
  .sp-select .on{
    position: absolute;
    top: 20%;
    right: 0;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 50px;
    background-position: 0 -458px;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .right1{
    position: absolute;
    top: 20%;
    right: 0;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 50px;
    background-position: 0 -120px;
    display: inline-block;
    width: 20px;
    height: 20px;
  }
  .least p{
    color: #7f7f7f;
    height: 40px;
    line-height: 20px;
    font-size: 13px;
    margin-top: 2px;
  }
  .shopping-text{
    border-top: 1px solid #d6d6d8;
  }
  .shopping-addr{
    text-align: left;
    margin:10px 0px;
    background-color: #fff;
    /* height: 40px; */
    /* line-height: 40px; */
    width: 100%;
    position: relative;
  }
  .addr-text{
    display: inline-block;
  }
  .sp-addr{
    display: inline-block;
    width: 20px;
    height: 20px;
    border:1px solid pink;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 50px;
    background-position: 0 -188px;
    position: relative;
    top:5px;
  }
  .sp-pd{
    margin:0px 10px;
  }
  .sp-on{
    right:10px;

  }
  .pd-now{
    color: #f23030;
    padding:5px 0px;
  }
  /* 评价 */
  .shopping-comment{
    background-color: #FFFFFF;
  }
  .comment-title{
    height: 2.133333rem;
    line-height: 2.133333rem;
    padding: 0px 35px 0px 10px;
    position: relative;
  }
  .comment-title a{
    overflow: hidden;
    color: #000;
  }
  .com-left{
    float: left;
  }
  .com-right{
    float: right;
  }
  .star{
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 38px;
    background-position: 0 -167px;
    display: inline-block;
    width: 12px;
    height: 12px;
  }
  .comment-content{
    padding: 10px 0px;
    margin:0px 10px;
    border-top: 1px solid #eee;
  }
  .comment-content p{
    text-align: left;
    /* padding: 0px 10px; */

  }
  .user{
    float: right;
  }
  /* 店铺 */
  .shopping-store{
    background-color: #fff;
    margin:10px 0px;
  }
  .store-content{
    padding: 10px;

  }
  .shopping-store a{
    color: #000;
  }
  .store-pic{
    text-align: left;
     position: relative;
  }
  .store-pic img{
    width: 2.24rem;
    height: 42px;
    border: 1px solid #bfbfbf;
    border-radius: 4px;
  }
  .store-pic p{
    display: inline-block;
    margin-left: 10px;
    font-weight: bold;
  }
  .store-enter{
    float: right;
    line-height: 40px;
    padding-right: 25px;
  }
  /* 查看图文详情 */
  .check-look{
    position:  relative;
    background-color: #fff;
    height: 40px;
    line-height: 40px;
  }
   .check-look a{
     color: #000;
   }
  .right-icon{
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 40px  ;
    background-position: 0 -190px;
    display: inline-block;
    width: 20px;
    height: 20px;
    border:1px solid pink;
    position: relative;
    top:4px;
  }
</style>
