<template>
  <main id="details">
    <div>
      <header :class="{header:true,fixed:hide1==true}">

      <a href="#" class="back" @click="$router.back(-1)"></a>
      <div class="header-title">
        <ul>
          <li v-for="(v,i) in text" @click="get(i)" >
            <router-link :to="'/'+router[i]" :class="{active:i==index}">{{v}}</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/addr" class="share">
        <img src="../assets/images/ii_03.png" alt="">
        {{this.$store.state.city}}
      </router-link>
    </header>
    </div>

    <router-view></router-view>
    <div class="car-btn">
      <div class="save" @click="change()">
        <span :class="{saveicon:true,already:show==true}"></span>
        <p v-if="show==false">收藏</p>
        <p v-if="show==true">已收藏</p>
      </div>
      <router-link to="/buy" class="buy-car">
        <span class="car-icon "></span>
        <p>购物车</p>
        <span class="car-number" v-if="show1==true">{{num}}</span>
      </router-link>
      <div class="enjoy" @click="change1()">
        加入购物车
      </div>
    </div>

  </main>
</template>

<script>
	import { Toast } from 'mint-ui';

  export default{
    data(){
      return{
        text:['商品','详情','评价'],
        router:['details','information','comment'],
        index:0,
        show:false,
        show1:false,
        hide1:false,
        num:0,
      }
    },
    methods:{
      get(i){
        this.index=i;
        console.log(i)
        this.parts=this.router[i];
      },
      change(){
        this.show=!this.show;
      },
      change1(){
        this.show1=true;
          this.num=this.$store.state.num
        if(this.show1==true){
          this.show1==true
        }
        // Indicator.open({
        //   text: 'Loading...',
        //   spinnerType: 'fading-circle'
        // });
        // setTimeout(()=>{
        //   Indicator.close();
        // })
        Toast({
          message: '已添加至购物车',
          position: 'bottom',
          duration: 3000
        });
      },
      handelSelect(index){
        this.activeIndex=index
      },

    },
    mounted(){
      $(window).scroll(function(event){
        var h=$(window).scrollTop();
        if(h>70){
          this.hide1=true;
          // console.log(hide1)
          $(".header").addClass('fixed')
        }else{
          this.hide1=false;
          // console.log(hide1)
           $(".header").removeClass('fixed')
        }
      })
    }

  }

</script>
<style>
.mint-toast.is-placebottom {
    bottom: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    transform: translate(-50%, -50%);
    width:80px;
    padding-top: 30px;
  }
  .mint-toast-text{
    padding-top: 30px;
  }
</style>
<style scoped>
  body{
    background-color: #eee;
  }
  /* 顶部 */

  .header{
    height: 52px;
    line-height: 50px;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #d6d6d8;
  }
  .fixed{
    position: fixed;
    top:0px;
    left:0px;
    z-index: 10;
    width: 100%;
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
  .header-title{
    margin: 0px 40px;
  }
  .header-title ul{
  }
  .header-title li{
    margin:0px;
    width: 25%;
    display: inline-block;
    font-size: 15px;
  }
  .header-title li a{
    display: block;
    width: 40px;
    margin: 0px auto;
    color:#000;
  }
  .header-title  .active::after{
    content: "";
    display: block;
    border-bottom: 3px solid #00a651;
    margin: -2px auto 1px auto;
  }
  /* 底部购物车 */
  .car-btn{
    width: 100%;
    height: 50px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    background-color: #fff;
    overflow: hidden;
  }
  .car-btn a{
    float: left;
    position:relative;
  }
  .car-btn p{
    color: #333;
  }
  .save{
    width: 30%;
    height: 100%;
    float: left;
  }
  .buy-car{
    width: 30%;
    height: 100%;
  }
  .saveicon{
    position: relative;
    top:5px;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 40px;
    background-position: 0 -235px;
    display: inline-block;
    width: 25px;
    height: 25px;
  }
  .already{
    position: relative;
    top:5px;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 40px;
    background-position: 0 -211px;
    display: inline-block;
    width: 25px;
    height: 25px;
  }
  .car-icon{
    position: relative;
    top:5px;
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 40px;
    background-position: 0 -260px;
    display: inline-block;
    width: 25px;
    height: 25px;
  }
  .enjoy{
    width: 40%;
    height: 100%;
    background-color: #00a651;
    color: #fff;
    line-height: 50px;
    font-size: 18px;
    float: left;
  }
  .car-number{
    position: absolute;
    background-color: #ff860f;
    color: #fff;
    width: 16px;
    height: 16px;
    line-height: 16px;
    border-radius: 50%;
    display: inline-block;
    top: 4px;
    right: 40px;
  }
</style>
