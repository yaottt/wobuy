<template>
  <main id="hompage">
    <div class="nav">
      <swiper :options="swiperOption">
         <swiper-slide><img :src="min[0].images"></swiper-slide>
         <swiper-slide><img :src="min[1].images"></swiper-slide>
         <div class="swiper-pagination current" slot="pagination"></div>
       </swiper>
    </div>
    <div class="nav-down">
      <img :src="star[0].images" alt="">
    </div>
    <div class="banner">
      <swiper :options="swiperOption">
              <swiper-slide v-for="(v,i) in pic">
                <ul>
                  <li>
                    <div class="top">
                      <div class="pd-head" v-if="v.show=='true'"><img :src="v.pic" alt=""></div>
                      <div class="pd-head" v-if="v.show=='false'"><img :src="v.pic1" alt=""></div>
                      <div class="pd-des">
                        <div class="pd-self" v-if="v.show=='true'"><p>{{v.des1}}</p></div>
                        <div class="pd-self direct" v-if="v.show=='false'"><p>{{v.des}}</p></div>
                        <div class="pd-center" v-if="v.show=='false'"><p>{{v.send}}</p></div>

                      </div>
                      <router-link to=""><img :src="v.images" alt=""></router-link>
                    </div>
                    <div class="down">
                      <h2>{{v.text}}</h2>
                      <div class="description">
                        <p>{{v.price}}</p>
                        <router-link to="" class="pd-car"><img :src="v.car" alt=""></router-link>
                      </div>
                    </div>
                  </li>
                </ul>
              </swiper-slide>
              <div class="swiper-pagination1" slot="pagination"></div>
       </swiper>
    </div>
    <div class="home-tab">
      <ul class="t-menu">
        <li v-for="(v,i) in con">
          <img :src="v.images" alt="">
        </li>
      </ul>
    </div>
    <div class="t-product">
      <ul v-for="(n,m) in listall">
        <li v-for="(v,i) in listall[m].list">
          <div class="top">
            <div class="pd-head" v-if="v.show=='true'"><img :src="v.pic" alt=""></div>
            <div class="pd-head" v-if="v.show=='false'"><img :src="v.pic1" alt=""></div>
            <div class="pd-des">
              <div class="pd-self" v-if="v.show=='true'"><p>{{v.des1}}</p></div>
              <div class="pd-self direct" v-if="v.show=='false'"><p>{{v.des}}</p></div>
              <div class="pd-center" v-if="v.show=='false'"><p>{{v.send}}</p></div>

            </div>
            <router-link to=""><img :src="v.images" alt=""></router-link>
          </div>
          <div class="down">
            <h2>{{v.text}}</h2>
            <div class="description">
              <p>{{v.price}}</p>
              <router-link to="" class="pd-car"><img :src="v.car" alt=""></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>

  </main>
</template>

<script>
  export default{
    data(){
      return{
        min:[],
        star:[],
        con:[],
        listall:[],
        swiperOption1: {
            pagination: {
              el: '.swiper-pagination1',
              clickable: true
            },
            loop: true,
            autoplay: {
        　　　　delay: 3000,
        　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
        　　},
          },
        swiperOption: {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true
          },
          pagination: {
            el: '.swiper-pagination'
          }
        }
      }
    },
    methods:{

    },
    mounted(){
      this.$http.get('./data/store.json')
              .then((response)=> {
                console.log(response.data.min);
                this.min=response.data.min
                this.star=response.data.star
                this.pic=response.data.pic
                this.con=response.data.con
                this.listall=response.data.listall
              })
              .catch(function (error) {
                console.log(error);
              })
      }
    }

</script>

<style scoped>
  .nav img{
    width: 100%;
  }
  .nav-down img{
    width: 100%;
  }
  .banner{
    width: 100%;
  }
  .banner img{
    width: 100%;
  }
  .banner{
    width: 100%;
    /* padding-bottom:10px; */
  }
  .banner ul{
    width: 100%;
    height: 520px;
  }
  /* 滑动产品 */
  .banner ul li{
    width: 100%;
    height: 100%;
    float: left;
    margin: 0px;
    background-color: #ffffff;
  }
  .banner li img{
    width: 100%;
  }
  .banner .top{
    position:relative;
    width:100%;
  }
  .banner .pd-des{
    position: absolute;
    bottom: 0.241545rem;
    right:0.241545rem;
  }
  .banner .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 50px;

  }
  .banner .pd-des{
    width: 40px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
  }
  .banner .pd-des .direct p{
     background-color: #f23030;

  }
  .pd-des.pd-self{
    display: inline-block;
    width: 100%;
    height: 100%;
  }
  .banner .pd-self p{
    background-color: #ff9000;
    color: #fff;
    font-size: 0.772946rem;
    width: 100%;
    height: 100%;
    border-radius:5px;
  }
  .banner .pd-center{
    display: inline-block;
  }
  .banner .pd-center p{
    background-color: #ff9000;
    font-size: 0.772946rem;
    color: #fff;
  }
  .banner .pd-car {
    width: 40px;
    float: right;
  }
  .banner .down{
    margin-top: 5px;
  }
  .banner .down h2{
    font-size: 18px;
    text-align: left;
    padding: 0rem 0.483091rem;
  }
  .banner .down p{
    display: inline-block;
    text-align: left;
    color: #f23030;
    font-size: 24px;
    font-weight: 700;
    /* display: inline-block */
  }
  .banner .description{
    padding: 0.483091rem;
    padding-bottom: 0.966183rem;
    text-align: left;
  }
  .swiper-container{
    /* margin: 10px; */
  }
  /* tab栏  */
  .home-tab{
    width:100%;
    overflow: hidden;
    overflow-x: auto;
  }
  .home-tab::-webkit-scrollbar{
   width: 0;
    display:none;
    /* 单隐藏滚动条 可以滚动 */
  }
  .t-menu{
    overflow: hidden;
    width: 650px;
    background-color: #fff;
  }
  .t-menu li{
    float: left;
  }
  .t-menu li img{
    width: 60px;
  }
  /* 商品列表 */
  .t-product{
    width: 100%;
    padding-bottom:10px;
  }
  .t-product ul{
    width: 100%;
    overflow: hidden;
    background-color: #eee;
  }
  .t-product ul li{
    width: 49%;
    height: 15.458937rem;
    float: left;
    margin: 0px;
    margin-bottom: 0.144927rem;
    background-color: #ffffff;
  }
  .t-product li:nth-of-type(2n) {
      margin-left: 0.144927rem;
  }
  .t-product li img{
    width: 100%;
  }
  .t-product .top{
    position:relative;
    width:100%;
  }
  .t-product .pd-des{
    position: absolute;
    bottom: 0.241545rem;
    right:0.241545rem;
  }
  .t-product .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 1.932367rem;

  }
  .t-product .pd-des .direct p{
     background-color: #f23030;
  }
  .t-product .pd-self{
    display: inline-block;
  }
  .t-product .pd-self p{
    background-color: #ff9000;
    color: #fff;
    font-size: 0.772946rem;
  }
  .t-product .pd-center{
    display: inline-block;
  }
  .t-product .pd-center p{
    background-color: #ff9000;
    font-size: 0.772946rem;
    color: #fff;
  }
  .t-product .pd-car {
    width: 1.449275rem;
    float: right;
  }
  .t-product .down h2{
    font-size: 0.57971rem;
    text-align: left;
    padding: 0rem 0.483091rem;
  }
  .t-product .down p{
    display: inline-block;
    text-align: left;
    color: #f23030;
    font-size: 0.676328rem;
    /* display: inline-block */
  }
  .t-product .description{
    padding: 0.483091rem;
    padding-bottom: 0.966183rem;
    text-align: left;
  }
</style>
