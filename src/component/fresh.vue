<template>
  <main id="fresh">
    <header class="header">
      <a href="#" class="back" @click="$router.back(-1)"></a>
      <h1>生鲜馆</h1>
      <router-link to="/addr" class="share">
        <img src="../assets/images/ii_03.png" alt="">
        {{this.$store.state.city}}
      </router-link>
    </header>
    <div class="nav">
      <swiper :options="swiperOption">
         <swiper-slide v-for="(v,i) in list"><img :src="v.images" herf=""></swiper-slide>
         <!-- <swiper-slide><img :src="list[0].images"></swiper-slide>
         <swiper-slide><img :src="list[1].images"></swiper-slide>
         <swiper-slide><img :src="list[2].images"></swiper-slide>
         <swiper-slide><img :src="list[3].images"></swiper-slide>
         <swiper-slide><img :src="list[4].images"></swiper-slide>
         <swiper-slide><img :src="list[5].images"></swiper-slide>
         <swiper-slide><img :src="list[6].images"></swiper-slide> -->
         <div class="swiper-pagination current" slot="pagination"></div>
       </swiper>
    </div>
    <div class="menu-fixed">
        <div class="menu">
        <div class="tab">
          <div class="new-bg"></div>
          <div class="whole">全部商品</div>
          <ul class="tab-menu">
            <li v-for="(v1,i) in text" @click="get(i)"><a :class="{on:i==index}">{{v1}}</a></li>
          </ul>
          <div class="select" @click="change1()">
            <span class="iconfont icon-xiajiantou"></span>
          </div>

        </div>
      </div>
    </div>

    <div class="poster">
      <img v-for="(v,i) in ad" :src="v.images" alt="">
    </div>
    <div class="new-list">
      <div class="new-title" v-for="(v,i) in list1">
        <router-link to=""><img :src="v.title" alt=""></router-link>
      </div>
      <div class="new-content">
        <div v-for="(v,i) in list1[0].pic">
          <router-link to=""><img :src="v.images" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="new-list1">
      <div class="new-title" v-for="(v,i) in list2">
        <router-link to=""><img :src="v.title" alt=""></router-link>
      </div>
      <div class="new-content">
        <div v-for="(v,i) in list2[0].pic">
          <router-link to=""><img :src="v.images" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="new-brand">
      <ul>
        <li v-for="(v,i) in list3">
          <router-link to=""><img :src="v.images" alt=""></router-link>
        </li>
      </ul>
    </div>
    <div class="new-ice">
      <div class="ice-title" v-for="(v,i) in list4">
        <router-link to=""><img :src="v.title" alt=""></router-link>
      </div>
      <div class="ice-text" >
        <ul class="ice-ul">
          <li class="ice-list" v-for="(v,i) in list4[0].pic" >
            <router-link to=""><img :src="v.images" alt=""></router-link>
          </li>
        </ul>
      </div>
      <div class="pd-buy">
        <ul>
          <li class="buy-list" v-for="(v,i) in list4[0].img">
            <router-link to=""><img :src="v.images" alt=""></router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="new-product" v-for="(v,i) in text">
      <h2 class="pd-title">{{v}}</h2>
      <div class="new-pd">
        <ul v-for="(n,m) in listall[i]">
          <li v-for="(v,a) in listall[i].pd1">
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
      <div class="buy" @click="change()">
        <a href="#"></a>
      </div>
      <transition name="fade" enter-active-class="animated fadeIn"
      leave-active-class="animated fadeUp">
        <div class="buy-menu" v-show="show1">
          <router-link to="" class="buy-icon1 buy-bg"></router-link>
          <router-link to="" class="buy-icon2 buy-bg"></router-link>
          <router-link to="" class="buy-icon3 buy-bg"></router-link>
          <router-link to="" class="buy-icon4 buy-bg"></router-link>
          <router-link to="" class="buy-icon5 buy-bg"></router-link>
          <router-link to="/index" class="buy-icon6 buy-bg"></router-link>
        </div>
      </transition>
      <a href="#" class="buycar"><img src="../assets/images/index_addcart_03.png" alt=""></a>
      <a href="#" class="back-top" ><img src="../assets/images/top.png" alt=""></a>
    </div>
  </main>
</template>
<script>
  export default{
    name:'fresh',
    data(){
      return{
        text:[],
        // title:["抢手货"],
        list:[],
        list1:[
          "pic"
        ],
        list2:[
          "pic"
        ],
        list3:[],
        list4:[
          "pic",
          "img"
        ],
        listall:[
          "pd1"
        ],
        ad:[],
        index:0,
        show1:false,
        show:false,
        head1:[],
        swiperOption: {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            loop: true,
            autoplay: {
        　　　　delay: 3000,
        　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
        　　},
          },
      }
    },
    methods:{
      change(){
        this.show1=!this.show1
      },
      change1(){
        this.show=!this.show;
        console.log(this.show)
        if(this.show==true){
          $(".select span").css('transform',"rotate(180deg)")
          $(".tab-menu").css('width',"19rem")
          $('.tab').addClass('pos')
          $(".tab").addClass('fixed')
          $(".whole").css('display','block')
          $('.new-bg').css('display','block')
        }else{
          $(".select span").css('transform',"rotate(0deg)")
           $(".tab-menu").css('width',"26rem")
           $('.tab').removeClass('pos')
           $(".tab").removeClass('fixed')
           $(".whole").css('display','none')
           $(".new-bg").css('display','none')
        }
      },
      get(i){
        this.index=i;
        // console.log(i)
        // this.activeIndex=this.router[i];
      },
    },
    beforeRouteLeave(to, form, next) {
       $(window).unbind('scroll')
       next()
      },
    mounted(){
      var _this=this;
      var i=0;
      $(window).unbind('scroll')
      $(window).scroll(function(event){
        var h=$(window).scrollTop()
        var h1=$('.menu-fixed').offset().top;
        if(h>h1){
          $(".menu").addClass('fixed')
          $('.select').addClass('next-fixed')
        }
        if(h<h1){
          $(".menu").removeClass('fixed')
           $('.select').removeClass('next-fixed')
        }
      })
      setTimeout(function(){
        for(var i in _this.text){
          _this.head1[i]=$('.new-product').eq(i).offset().top;
        }
        $(".tab-menu li").click(function(event){
          var v=$(this).index();
          $('html,body').animate({'scrollTop': _this.head1[v]},500)
        })
        $(window).scroll(function(event){
          var h1=$(window).scrollTop()
          if(h1+30>_this.head1[4]-100){
            // alert(111)
            $(".tab-menu li").eq(4).children('a').addClass('on').parent().siblings().find('a').removeClass('on')
            $('.tab-menu').css({'right':'100px','transition':'1s'})
          }else if(h1+30>_this.head1[3]){
            $(".tab-menu li").eq(3).children('a').addClass('on').parent().siblings().find('a').removeClass('on')
            $('.tab-menu').css({'right':'0px','transition':'1s'})
          }else if(h1+30>_this.head1[2]){
            $(".tab-menu li").eq(2).children('a').addClass('on').parent().siblings().find('a').removeClass('on')

          }else if(h1+30>_this.head1[1]){
            $(".tab-menu li").eq(1).children('a').addClass('on').parent().siblings().find('a').removeClass('on')

          }
          else if(h1>_this.head1[0]){
            $(".tab-menu li").eq(0).children('a').addClass('on').parent().siblings().find('a').removeClass('on')
          }
          else{
            $(".tab-menu li").eq(0).children('a').addClass('on').parent().siblings().find('a').removeClass('on')
          }
        })
      },500)
      this.$http.get('./data/fresh.json')
      		  .then((response)=> {
      		    // console.log(response.data);
      		    // console.log(this)
      		    this.list=response.data.list;
              this.ad=response.data.ad;
              this.list1=response.data.list1;
              this.list2=response.data.list2;
              this.list3=response.data.list3;
              this.list4=response.data.list4;
              this.text=response.data.text;
              this.listall=response.data.listall;
      		  })
      		  .catch(function (error) {
      		    // console.log(error);
      		  })
    }

  }
</script>
<style>

  li{
    margin:0px;
  }
  .nav .current .swiper-pagination-bullet{
    /* border:1px solid #fff; */
    width: 10px;
    height: 10px;
    opacity:0.5;
    background:#555;
    cursor:pointer;
  }
  .nav .current .swiper-pagination-bullet-active{
    opacity:0.5;
    background:#fff;
  }
body{
    background-color: #eee;
  }
</style>
<style scoped>

  #fresh{
    padding-bottom:200px;
  }
  .header{
    height: 50px;
    line-height: 50px;
    background: #fff;
    padding: 0 50px 0 30px;
    position: relative;
    /* border:1px solid pink */
  }
  .back{
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    width: 10px;
    height: 20px;
    background: url('../assets/images/i_09.png');
    background-size: cover;
  }
  .header h1{
    text-align: center;
    font-size: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .share{
    position: absolute;
    top: 0;
    right:10px;
    color:#333;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .share img{
    height:16px ;
  }
  /* 轮播 */
  .nav img{
    width: 100%;
  }
  /* tab栏 */
  .menu-fixed{
    height: 45px;
    background-color: #fff;
  }
  .menu{
    position: relative;

  }
  .tab{
    width:100%;
    /* overflow: hidden; */
    overflow-x: scroll;
    /* border:1px solid green; */
    background-color: #fff;
    /* position: relative; */
  }
  .tab::-webkit-scrollbar{
    width: 0;
    display:none;
    /* 单隐藏滚动条 可以滚动 */
  }
  .tab .tab-menu{
    width:26rem;
    overflow:hidden;
    background-color: #fff;
    position:relative;
  }
  .pos{
    overflow: hidden;

  }
  .tab .tab-menu li{
    float:left;
    width:4.5rem;
    height: 2.125603rem;
    text-align: center;
    line-height: 1.5rem;
    margin-top:5px;
  }
  .tab-menu li a{
    font-size:0.628019rem;
    text-decoration: none;
    height: 1.125603rem;
    display: inline-block;
    text-align: center;
    color: #333;
  }
  .tab .tab-menu li .on::after{
    content: '';
    display: block;
    border-bottom: 2px solid #00a651;
    width: 100%;
    margin: -.2rem auto 0;
  }
  .tab .tab-menu li .on{
    color: #00a651;
  }
  .tab-fixed{
    position: fixed;
    top:50px;
    left:0px;
    z-index: 10;
  }
  .select{
    /* border:1px solid blue; */
    position: absolute;
    top: 0;
    right: 0;

    width: 35px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    background: #fff;
  }
  .select span{
    display: block;
    font-size: 28px;
  }
  .poster img{
    width: 100%;
  }
  /* 商品列表 */
  .new-title img{
    width: 100%;
  }
  .new-content img{
    width: 100%;
  }
  .new-brand ul{
    overflow: hidden;
  }
  .new-brand li{
    width: 50%;
    float: left;
  }
  .new-brand img{
    width: 100%;
  }
  .ice-title img{
    width: 100%;
  }
  .ice-text img{
    width: 100%;
  }
  .ice-list{
    width: 50%;
    display: inline-block;
  }
  .buy-list img{
    width: 100%;
  }
  .buy-list{
    width: 50%;
    display: inline-block;
  }
  /* 产品 */
  .new-pd{
    width: 100%;
    /* padding-bottom:10px; */
  }
  .new-pd ul{
    width: 100%;
    overflow: hidden;
    background-color: #eee;
  }
  .new-pd ul li{
    width: 49%;
    height: 15.458937rem;
    float: left;
    margin: 0px;
    /* border:1px solid pink; */
    margin-bottom: 0.144927rem;
    background-color: #ffffff;
  }
  .new-pd li:nth-of-type(2n) {
      margin-left: 0.144927rem;
  }
  .new-pd li img{
    width: 100%;
  }
  .new-pd .top{
    position:relative;
    width:100%;
  }
  .new-pd .pd-des{
    position: absolute;
    bottom: 0.241545rem;
    right:0.241545rem;
  }
  .new-pd .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 1.932367rem;

  }
  .new-pd .pd-des .direct p{
     background-color: #f23030;
  }
  .new-pd .pd-self{
    display: inline-block;
  }
  .new-pd .pd-self p{
    background-color: #ff9000;
    color: #fff;
    font-size: 0.772946rem;
  }
  .new-pd .pd-center{
    display: inline-block;
  }
  .new-pd .pd-center p{
    background-color: #ff9000;
    font-size: 0.772946rem;
    color: #fff;
  }
  .new-pd .pd-car {
    width: 1.449275rem;
    float: right;
  }
  .new-pd .down h2{
    font-size: 0.57971rem;
    text-align: left;
    padding: 0rem 0.483091rem;
  }
  .new-pd .down p{
    display: inline-block;
    text-align: left;
    color: #f23030;
    font-size: 0.676328rem;
    /* display: inline-block */
  }
  .new-pd .description{
    padding: 0.483091rem;
    padding-bottom: 0.966183rem;
    text-align: left;
  }
  .new-product .pd-title{
    width: 100%;
    height:2.8125rem ;
    line-height: 2.8125rem;
    font-size: 17px;
  }
  /* 固定图标 */
  .buy{
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: fixed;
    z-index: 999;
    bottom: 60px;
    left: 8px;
  }
  .buy a{
    display: inline-block;
    width: 40px;
    height: 40px;
    background-color: rgba(151, 197, 49, 0.8);
    background-image: url('../assets/images/s-bg-pop-mai1.png');
    background-repeat: no-repeat;
    background-size: 21px 21px;
    background-position: 10px 10px;
    border-radius: 50%;
  }
  .buycar{
    width: 30px;
    height: 30px;
    position: fixed;
    bottom: 2.5rem;
    right: .2rem;
    display: block;
    z-index: 9;
  }
  .buycar img{
    width: 30px;
    height: 30px;
    opacity: 0.2;
  }
  .back-top{
    position: fixed;
    right: .2rem;
    bottom: .4rem;
  }
  .back-top img{
    width: 30px;
    height: 30px;
    opacity: 0.2;
  }
  .buy-menu{
    width: 170px;
    height: 170px;
    background-image: url('../assets/images/s-bg-quick.png');
    background-repeat: no-repeat;
    background-size: 170px 170px;
    position: fixed;
    z-index: 999;
    bottom: 80px;
    left: 30px;
  }
  .buy-bg{
    background-image: url('../assets/images/s-bg2.png');
    background-repeat: no-repeat;
    background-size: 60px 700px;
    display: inline-block;
    position: absolute;
    z-index: 999;
  }
  .buy-icon1{
    width: 20px;
    height: 20px;
    background-position: 0 -287px;
    left: 44px;
    top: 32px;
  }
  .buy-icon2{
    width: 20px;
    height: 20px;
    background-position: 0 -308px;
    left: 107px;
    top: 31px;
  }
  .buy-icon3{
    width: 22px;
    height: 20px;
    background-position: 0 -331px;
    left: 24px;
    top: 90px;
  }
  .buy-icon4{
    width: 25px;
    height: 21px;
    background-position: 0 -353px;
    left: 122px;
    top: 91px;
  }
  .buy-icon5{
    width: 20px;
    height: 20px;
    background-position: 0 -376px;
    left: 78px;
    top: 126px;
  }
  .buy-icon6{
    width: 24px;
    height: 23px;
    background-position: 0 -398px;
    left: 73px;
    top: 73px;
  }
  .fixed{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    margin: 0 auto;
    z-index: 10;
  }
  .next-fixed{
    position: fixed;
    top:0px;
    right:0px;
  }
  .whole{
    height: 40px;
    line-height: 40px;
    display: none;
    border-bottom:1px solid #eee;

  }
  .new-bg{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 80%;
    border:1px solid rgba(0, 0, 0, .3);
    background: rgba(0, 0, 0, .3);
    display: none;
    z-index: -1;
  }
</style>
