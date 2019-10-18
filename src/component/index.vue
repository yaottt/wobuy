<template >
  <div id="index" class="index">
    <div class="header">
      <div class="select">
        <router-link to="/addr">
          {{this.$store.state.city}}
         <!-- {{LocationCity}} -->
        </router-link>
         <span></span>
      </div>
      <div class="ipt">
        <span><img src="../assets/images/nav_05.png" alt=""></span>
        <input type="text" placeholder="请输入关键词" class="search-ipt">
        <p>搜索</p>
      </div>
    </div>
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
    <div class="tp">
      <dd v-for="(item,index) in con"><img :src="item.images" href=""></dd>
    </div>
    <div class="sale">
      <swiper :options="swiperOption1">
        <swiper-slide>
          <router-link to="/fresh"><img src="../assets/images/app-icon01.jpg" href=""></router-link>
          <router-link to="/fresh"><img src="../assets/images/app-icon02.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon03.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon04.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon05.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon06.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon07.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon08.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon09.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon10.jpg" href=""></router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to=""><img src="../assets/images/app-icon11.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon12.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon13.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon14.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon15.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon16.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon17.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon18.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon19.jpg" href=""></router-link>
          <router-link to=""><img src="../assets/images/app-icon20.jpg" href=""></router-link>
        </swiper-slide>
        <div class="swiper-pagination active" slot="pagination"></div>
      </swiper>

    </div>
    <div class="new">
      <dd v-for="(a,i) in der"><router-link to=""><img :src="a.images" alt=""></router-link></dd>
    </div>
    <div class="new-in">
      <dd v-for="(b,i) in que"><router-link to=""><img :src="b.images" alt=""></router-link></dd>
    </div>
    <div class="product">
      <div class="fruits">
        <dd v-for="(c,i) in rid"><router-link to=""><img :src="c.images" alt=""></router-link></dd>
      </div>
      <div class="full">
        <dd v-for="(d,i) in opt"><router-link to=""><img :src="d.images" alt=""></router-link></dd>
      </div>
    </div>
    <div class="buy-title">
      <ul>
        <img src="../assets/images/indexnoticeimg.png" alt="" class="title">
        <a href="#" class="goto"><img src="../assets/images/right.png" alt=""></a>
        <swiper :options="swiperOption2">
          <swiper-slide v-for="(e,i) in gid"><p>{{e.title}}</p></swiper-slide>
         <!-- <swiper-slide><p>{{gid[0].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[1].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[2].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[3].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[4].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[5].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[6].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[7].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[8].title}}</p></swiper-slide>
          <swiper-slide><p>{{gid[9].title}}</p></swiper-slide> -->

        </swiper>
      </ul>
    </div>
    <div class="sale-method">
      <div class="oil">
        <dd v-for="(f,i) in gr"><router-link to=""><img :src="f.images" alt=""></router-link></dd>
      </div>
      <div class="dry">
        <dd v-for="(g,i) in dr"><router-link to=""><img :src="g.images" alt=""></router-link></dd>
        <div class="dry-pd">
        <dd v-for="(h,i) in sp"><router-link to=""><img :src="h.images" alt=""></router-link></dd>
        </div>
      </div>
    </div>
    <div class="brand">
      <dl v-for="(j,i) in brd"><router-link to=""><img :src="j.title" alt=""></router-link></dl>
      <div class="brand-pd">
         <dl v-for="(j,i) in brd[0].pic"><router-link to=""><img :src="j.images" alt=""></router-link></dl>
      </div>
    </div>
    <div class="recommend">
      <div v-for="(k,i) in list1"><router-link to=""><img :src="k.title" alt=""></router-link></div>
      <!-- <div><router-link to=""><img src="../asstes/images/recom.jpg" alt=""></router-link></div> -->
      <div v-for="(k,i) in list1[0].pic"><router-link to="/details"><img :src="k.images" alt=""></router-link></div>
    </div>
    <div class="re-sale" v-for="(l,i) in list2">
      <div class="re-top">
        <router-link to=""><img :src="l.top" alt="">
        </router-link></div>
      <div class="re-down">
        <div><router-link to=""><img :src="l.images1" alt=""></router-link></div>
        <div><router-link to=""><img :src="l.images2" alt=""></router-link></div>
        <div><router-link to=""><img :src="l.images3" alt=""></router-link></div>
      </div>
    </div>
    <div class="more">
      <div class="more-top" v-for="(m,i) in list3">
        <router-link to=""><img :src="m.title" alt=""></router-link>
      </div>
      <div class="more-down">
        <div v-for="(m,i) in list3[0].pic">
          <router-link to=""><img :src="m.images" alt=""></router-link>
        </div>
      </div>
    </div>
    <div class="tab">
      <ul class="tab-menu">
        <!-- <li v-for="(n,i) in list4"><router-link to="/super" class="on">{{n.text}}</router-link></li>-->
         <!-- <li v-for="(v1,i) in text" @click="get(i)"><router-link :to="'/'+router[i]" :class="{on:i==index}" >{{v1}}</router-link></li> -->
        <li v-for="(v1,i) in text" @click="get(i)"><a :class="{on:i==index}" >{{v1}}</a></li>
      </ul>
    </div>
    <component :is="activeIndex"></component>
    <div class="buy" @click="change()">
      <a href="#"></a>
    </div>
    <transition name="fade" enter-active-class="animated fadeIn"
    leave-active-class="animated fadeUp">
      <div class="buy-menu" v-show="show1">
        <router-link to="" class="buy-icon1 buy-bg"></router-link to="">
        <router-link to="" class="buy-icon2 buy-bg"></router-link to="">
        <router-link to="" class="buy-icon3 buy-bg"></router-link to="">
        <router-link to="" class="buy-icon4 buy-bg"></router-link to="">
        <router-link to="" class="buy-icon5 buy-bg"></router-link to="">
        <router-link to="/index" class="buy-icon6 buy-bg"></router-link to="">
      </div>
    </transition>
    <v-footer></v-footer>
    <a href="#" class="buycar"><img src="../assets/images/index_addcart_03.png" alt=""></a>
    <a href="#" class="back-top" ><img src="../assets/images/top.png" alt=""></a>
  </div>
</template>
<script>
  import vfooter from "./footer.vue"
  import day from "./day.vue"
  import food from "./food.vue"
  import super1 from "./super.vue"
  export default{
    name:'index',
    components:{
      'v-footer':vfooter,
      day,
      food,
      super1
    },
    data(){
      return{
        text:['超级爆品','生鲜日配','进口美食','美酒佳酿','休闲零食','中粮出品',
        '母婴食品','包邮直送'],
        router:['super1','day','food'],
        index:0,
        addrs:'广州',
        list:'',
        con:'',
        der:'',
        que:'',
        rid:'',
        opt:'',
        gid:[
          "title"
        ],
        gr:'',
        dr:'',
        sp:'',
        brd:[
            'pic'
        ],
        list1:[
          "pic"
        ],
        list2:'',
        list3:[
          "pic"
        ],
        list4:'',
        listall:[],
        activeIndex:'super1',
        show1:false,
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
        swiperOption1: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
              el: '.swiper-pagination',
              clickable: true
          }
        },
        swiperOption2: {
          direction: 'vertical',
          pagination: {
            el: '.swiper-pagination2',
            clickable: true
          },
          loop: true,
          autoplay: {
      　　　　delay: 3000,
      　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
      　　},
        }

      }
    },

    methods:{
      change(){
        this.show1=!this.show1
      },
      get(i){
      				this.index=i;
              this.activeIndex=this.router[i];
      },
      handelSelect(index){
        this.activeIndex=index
      }
    },
    beforeRouteLeave(to, form, next) {
       $(window).unbind('scroll')
       next()
      },
    mounted(){

      $(window).scroll(function(event){
        var h=$(window).scrollTop()
        var h1=$('.more').offset().top;
        if(h>50){
          $('.header').addClass('fixed')
          $('.select span').addClass('add')
          $('.select a').css('color',"#333")
          $('.ipt .search-ipt').css({"background":"#f5f5f5","border":"transparent"})
          $('.ipt p').css("color","#333")
        }else{
          $('.header').removeClass('fixed')
          $('.select span').removeClass('add')
          $('.select a').css('color',"#ffffff")
          $('.ipt p').css("color","#ffffff")
        }
        if(h>h1+300){
          $('.tab').addClass('tab-fixed')
        }
        if(h<h1+300){
          $('.tab').removeClass('tab-fixed')
        }


      })
      $('.back-top').click(function(event){
        $("body,html").animate({scrollTop:0},300);
      })

      this.$http.get('./data/index.json')
      		  .then((response)=> {
      		    // console.log(response.data.list);
      		    // console.log(this)
      		    this.list=response.data.list
              this.con=response.data.des
              this.der=response.data.new
              this.que=response.data.buy
              this.rid=response.data.fru
              this.opt=response.data.prd
              this.gid=response.data.text
              this.gr=response.data.group
              this.dr=response.data.dry
              this.sp=response.data.shopping
              this.brd=response.data.bd
              this.list1=response.data.list1
              this.list2=response.data.list2
              this.list3=response.data.list3
              this.list4=response.data.list4
              // console.log(this.list1)
      		  })
      		  .catch(function (error) {
      		    // console.log(error);
      		  })
      this.$http.get('./data/super.json')
            .then((response)=> {
              // console.log(response.data.listall);
              this.listall=response.data.listall
            })
            .catch(function (error) {
              console.log(error);
            })
      this.$http.get('./data/addr.json')
        .then((response)=>{
          // console.log(response);
          // this.addrs=addr;
        })
        .catch(function (error) {
          console.log(error);
        })

    }
  }
</script>

<style >
  *{
    margin:0px;
    padding:0px;
  }
</style>
<style scoped>
  body{
    background-color: #eee;
  }

  dd{
    margin-bottom: -5px;
  }

  .router-link-exact-active{
    /* margin-bottom: -5px; */
  }
  /* ·················导航··························· */
  .index{
    width: 100%;
    position: relative;
  }
  .header{
    position:absolute;
    top:0px;
    left: 0px;
    width: 100%;
    padding-top:5px;
    z-index:2;
    background:url('../assets/images/mask.png') no-repeat;
    background-size:100% 110%;
  }
  .fixed{
    position:fixed;
    top:0px;
    left:0px;
    background: rgba(255,255,255,0.9);
    color:#333;
  }
  .select{
    display: inline-block;
    width: 52px;
    font: normal 15px 'microsoft yahei';
    position: relative;
    bottom: 15px;

  }
  .select a{
    color:#ffffff;
    text-decoration:none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    width:2.6875rem;
    position: relative;
    top: 5px;
    right: 8px;

  }
  .select span{
    display: inline-block;
    background-image:url('../assets/images/a_d_03.png');
    width: 12px;
    height: 7px;
    background-size: 100% 100%;
    position: absolute;
    top:13px;
    right:0px;
  }
  .select .add{
    background-image:url('../assets/images/a_d_b_03.png');
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
/* ··················轮播图···················· */
  .nav img{
    width:100%;
  }
  .current .swiper-pagination-bullet{
    border:1px solid #fff;
    opacity:0.5;
    background:#555;
    cursor:pointer;
  }
  .current .swiper-pagination-bullet-active{
    opacity:0.5;
    background:#fff;
  }
  .nav .swiper-wrapper{
    margin-bottom: -5px;
  }

  /*·················轮播图下方广告················  */
  .tp img{
    width:100%;
  }
  /*················图标·························· */
  .sale{
    width:100%;
  }
  .sale a{
    float:left;
    width:20%;
  }
  .sale img{
    width:100%;
  }
  .active .swiper-pagination-bullet{
    width:11px;
    height:6px;
    border-radius:0%;
    opacity:0.8;
    background:url('../assets/images/icon_jingang_normal.png');
    background-size:100% 100%;
  }
  .active .swiper-pagination-bullet-active{
     background:url('../assets/images/icon_jingang_down.png') no-repeat;
     background-size:100% 100%;
  }
  /* ············新客红包·············· */
  .new img{
    width: 100%;
  }
  /* ················买一赠一··············· */
  .new-in img{
    width: 100%;
  }
  .new-in dd{
    margin-bottom: 0px;
  }
  /* ···············红心蜜柚·············· */
  .product{
    width: 100%;
    overflow: hidden;
  }
  .product .fruits{
    width: 33.3%;
    display: inline-block;
    float:left;
  }
  .product .fruits dd{
    margin-bottom: 0px;
  }
  .product .fruits img{
    width: 100%;
  }
  .product .full{
    width: 66.6%;
    float:left;
    background-color: #fff;
  }
  .product .full dd{
    width: 50%;
    float: left;
    margin-bottom: 1px;
  }
  .product .full img{
    width: 100%;
  }
  /* ···············我买头条················· */
  .buy-title{
    width: 100%;
    position: relative;
    background-color: #fff;
  }
  .buy-title ul{
    width: 100%;
  }
  .buy-title .title{
    width: 5.25rem;
    position: absolute;
    top:15px;
    left:10px;
  }
  .buy-title .goto{
    display: block;
    width: 0.45rem;
    height: 0.75rem;
    position: absolute;
    top:15px;
    right:10px;
  }
  .buy-title .goto img{
    width: 100%;
  }
  .buy-title .swiper-container{
    width: 100%;
    height: 2.5rem!important;
  }
  .buy-title p{
    font-size: 0.75rem;
    padding:0.8125rem 1.25rem 0.625rem 6.25rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .buy-title .swiper-slide{
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .sale-method{
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
  }
  .sale-method .oil{
    width: 50%;
    float: left;
  }
  .sale-method .oil img{
    width: 100%;
  }
  .sale-method .dry{
    width: 50%;
    float:left;
  }
  .sale-method .dry img{
    width: 100%;
  }
  .dry dd{
    margin-bottom: 0px;
  }
  .dry-pd{
    width: 100%;
    overflow: hidden;
  }
  .dry-pd dd{
    width: 50%;
    float:left;
  }
  .dry-pd img{
    width: 100%;
  }
  /* ·············中粮品牌专区···················· */
  .brand{
    width: 100%;
  }
  .brand dl{
/*    margin-bottom: -5px; */
  }
  .brand img{
    width: 100%;
  }
  .brand-pd{
    width: 100%;
    overflow: hidden;
    margin-bottom: -5px;
  }
  .brand-pd dl{
    width: 33.3%;
    float: left;
  }
  /* ·············好货推荐············ */
  .recommend{
    width: 100%;
  }
  .recommend div{
    width: 100%;
    /* margin-bottom: -5px; */
  }
  .recommend img{
    width: 100%;
  }
  /* ···············产品模块················ */
  .re-sale{
    width:100%;
  }
  .re-sale img{
    width: 100%;
  }
  .re-top{
    width: 100%;
  }
  .re-down{
    width: 100%;
    overflow: hidden;
  }
  .re-down div{
    width: 33.3%;
    float: left;

  }
  /* ············更多推荐············ */
  .more{
    width: 100%;
  }
  .more-top{
    width: 100%;
    margin-bottom: -5px;
  }
  .more-down{
    width: 100%;
    overflow: hidden;
  }
  .more-down div{
    width:33.3% ;
    float: left;
  }
  .more-down a{
    display: block;
  }
  .more-down a img{
    border:1px solid #f1f1f1;
  }
  .more img{
    width: 100%;
  }
  /*···················tab栏·················· */
  .tab{
    width:100%;
    overflow: hidden;
    overflow-x: auto;
  }
  .tab::-webkit-scrollbar{
    width: 0;
    display:none;
    /* 单隐藏滚动条 可以滚动 */
  }
  .tab .tab-menu{
    width:40.73913rem;
    overflow:hidden;
    background-color: #fff;
  }
  .tab .tab-menu li{
    float:left;
    width:3.97rem;
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
  /* ···············固定定位图标················ */
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
  }
  .back-top{
    position: fixed;
    right: .2rem;
    bottom: .4rem;
  }
  .back-top img{
    width: 30px;
    height: 30px;
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

  /* 动态组件 */
  #super{
    width: 100%;
    padding-bottom:10px;
  }
  #super ul{
    width: 100%;
    overflow: hidden;
    background-color: #eee;
  }
  #super ul li{
    width: 49%;
    height: 15.458937rem;
    float: left;
    margin: 0px;
    margin-bottom: 0.144927rem;
    background-color: #ffffff;
  }
  #super li:nth-of-type(2n) {
      margin-left: 0.144927rem;
  }
  #super li img{
    width: 100%;
  }
  #super .top{
    position:relative;
    width:100%;
  }
  .pd-des{
    position: absolute;
    bottom: 0.241545rem;
    right:0.241545rem;
  }
  .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 1.932367rem;

  }
  .pd-des .direct p{
     background-color: #f23030;
  }
  .pd-self{
    display: inline-block;
  }
  .pd-self p{
    background-color: #ff9000;
    color: #fff;
    font-size: 0.772946rem;
  }
  .pd-center{
    display: inline-block;
  }
  .pd-center p{
    background-color: #ff9000;
    font-size: 0.772946rem;
    color: #fff;
  }
  .pd-car {
    width: 1.449275rem;
    float: right;
  }
  #super .down h2{
    font-size: 0.57971rem;
    text-align: left;
    padding: 0rem 0.483091rem;
  }
  #super .down p{
    display: inline-block;
    text-align: left;
    color: #f23030;
    font-size: 0.676328rem;
    /* display: inline-block */
  }
  #super .description{
    padding: 0.483091rem;
    padding-bottom: 0.966183rem;
    text-align: left;
  }
</style>
