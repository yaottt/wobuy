<template>
  <main id="money">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2">返回</a>
        </div>
        <h1>结算中心</h1>
      </div>
    </header>
    <div class="m-addr">
      <h4 class="title">选择收货地址</h4>
      <div class="select-addr">
        <p>
          您的收货地址为空，点击添加收货地址
          <span class="m-icon"></span>
        </p>
      </div>
    </div>
    <div class="pay m-addr">
      <h4 class="title">请选择支付方式</h4>
      <div class="pay-method">
        <ul>
          <li v-for="(v,i) in list" class="method-li">
            <input type="radio" name="select" class="car-select">
            <span>{{v.title}}</span>
            <span class="car-text">{{v.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="car-pre">
      <p>优惠券<span class="right">无可用</span></p>
      <span class="m-icon"></span>
    </div>
    <div class="car-time">
      <h4 class="title t-time">配送时间</h4>
      <div class="car-method">
        <input type="radio">
        <span>不限</span>
      </div>
    </div>
    <div class="car-pre">
      <p>发票信息 <span class="short">暂不需要开发票</span></p>
      <span class="m-icon"></span>
    </div>
    <div class="shop-list">
      <h4 class="title t-time">自营商品清单</h4>
      <div class="buy-pd">
        <ol >
          <li v-for="(v,i) in shop">
            <router-link to="">
              <img :src="v.images" alt="">
            </router-link>
            <div class="buy-content">
              <h3>{{v.title}}</h3>
              <div class="money-list">
                <p>零售价:<span>{{v.price}}</span></p>
                <p>数量：<span>{{v.amount}}</span></p>
              </div>
              <div class="money-list">
                <p>重量:<span>{{v.weight}}kg</span></p>
                <p>积分：<span>{{v.intergral }}</span></p>
              </div>
            </div>
          </li>
        </ol>
       </div>
    </div>
    <div class="pay-list">
      <h4 class="title t-time">结算明细</h4>
      <div class="list-content">
        <ol>
          <li>
            <span class="left">商品总重</span>
            <span class="right">0.72kg</span>
          </li>
          <li>
            <span class="left">商品总额</span>
            <span class="right">￥61.70</span>
          </li>
          <li>
            <span class="left">运费</span>
            <span class="right">+￥0.00</span>
          </li>
          <li>
            <span class="left">优惠金额</span>
            <span class="right">-￥0.00</span>
          </li>
          <li>
            <span class="left">优惠券</span>
            <span class="right">-￥0.00</span>
          </li>
          <li>
            <span class="left">我买卡支付金额</span>
            <span class="right">-￥0.00</span>
          </li>
          <li>
            <span class="left">赠送积分</span>
            <span class="right send">60.00分</span>
          </li>
        </ol>
        <h4 class="title t-time t-list">
          自营商品清单
          <span class="pay-price">￥61.70</span>
        </h4>
      </div>
    </div>
    <div class="send-btn">
      <router-link to="">
        <button>提交订单</button>
      </router-link>
    </div>
     <v-footer></v-footer>
  </main>
</template>

<script>
  import vfooter from "./footer.vue"
  export default{
    components:{
      'v-footer':vfooter,
    },
    data(){
      return{
        massage:[],
        list:[],
        title:[],
        shop:[],
        pay:["商品总重","商品总额","运费","优惠金额","优惠券","我买卡支付金额","赠送积分"]
      }
    },
    method:{

    },
    mounted(){
      this.$http.get('./data/car.json')
      		  .then((response)=> {
      		    // this.pay=response.data.pay;
              this.list=response.data.list;
              // this.shop=response.data.shop;
              // console.log(response.data.list)
      		  })
      		  .catch(function (error) {
      		    console.log(error);
      		  })
      this.$http.get('./data/buy.json')
      		  .then((response)=> {
      		    // this.pay=response.data.pay;
              this.shop=response.data.shop;
              // this.title=response.data.title;
              // console.log(response.data.shop)
      		  })
      		  .catch(function (error) {
      		    console.log(error);
      		  })
    }
  }
</script>

<style scoped>
  #money{
    background-color: #eee;
    overflow: hidden;
  }
  .r-topbar{
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #b5b5b5;
    position: relative;
    background-color: #FFF;
  }
  .r-topbar h1{
    font-size: 18px;
    font-weight: normal;
    height: 43px;
    line-height: 43px;
    text-align: center;
    text-overflow: ellipsis;
    vertical-align: bottom;
    overflow: hidden;
  }
  .r-back{
    position: absolute;
    top: 12px;
    left: 8px;
  }
  .r-back a{
    display: block;
    color:#333;
    font-size: 16px;
    line-height: 22px;
    width: 40px;
    height: 20px;
    overflow: hidden;
    background-position: -44px -157px;
    padding-left: 17px;
  }
  .r-bg2{
    background-image: url('../assets/images/s-bg2.png');
    background-repeat: no-repeat;
    background-size: 60px 700px;
  }
  .m-addr{
    background-color: #fff;
    padding: 10px;
    margin: 10px 0px;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
  }
  .title{
    font-weight: 700;
    text-align: left;
    height: 30px;
    line-height: 30px;
    border-bottom: 1px dashed #d9d8d1;
  }
  .select-addr{
    line-height: 80px;

  }
  .select-addr p{
    position: relative;
    color: red;
    text-align: left;

  }
  .m-icon{
    background-image: url("../assets/images/s-bg.png");
    background-repeat: no-repeat;
    background-size: 25px 350px;
    background-position: 0 -66px;
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top:50%;
    right:0px;
    transform: translateY(-50%);
  }
  .method-li{
    /* border: 1px solid #00A651; */
    text-align: left;
    margin:0px;
    overflow: hidden;
    margin:10px 0px;
  }
  .car-select{
    padding-top: 5px;
  }
  .car-text{
    color: #e80000;
  }
  .car-pre{
    position: relative;
    margin:10px 0px;
    background-color: #fff;

  }
  .car-pre p{
    text-align: left;
    padding-right: 15px;
    line-height: 40px;
    padding-left: 10px;
  }
  .car-pre span{
    float: right;
  }
  .car-time{
    /* padding: 0px 10px; */
    background-color: #fff;
    margin:10px 0px;
  }
  .car-method{
    line-height: 40px;
    text-align: left;
    padding-left: 10px;
  }
  .t-time{
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
  }
  .car-pre .short{
    float: none;
    padding-left: 15px;
  }
  /* 商品列表 */
  .shop-list{
    background-color: #fff;
    margin:10px 0px;
  }
  .buy-pd{
    text-align: left;
  }
  .buy-pd ol li{
    overflow: hidden;
    margin: 0px;
    padding: 10px;
    border-bottom: 1px dashed #d9d8d1;
  }
  .list-content .send{
    color: #7fb200;
  }
  .buy-pd li a{
    display: block;
    float: left;
    width: 60px;
    height: 60px;
  }
  .buy-pd img{
    width: 100%;

  }
  .buy-pd h3{
    color: #4B566A;
    font-size: 12px;
    font-weight: 700;
    padding: 0px 0px 10px 10px;
  }
  .buy-content{
   width: 80%;
   float: left;
  }
  .money-list{
    padding-left: 10px;
    color: #666;
  }
  .money-list p{
    display: inline-block;
    width: 100px;
  }
  .pay-list{
    background-color: #fff;
  }
  /* 结算明细 */
  .list-content ol{
    margin:10px 0px;
  }
  .list-content li{
    text-align:left;
    line-height: 25px;
    
  }
  .list-content .right{
    float:right;
  }
  .list-content .t-list{
    color:#666;
    font-weight: normal;
    padding: 0px 10px;
    border-top: 1px dashed #d9d8d1;
  }
  .pay-price{
    float: right;
    color:red;
  }
  .pay-list{
    margin:10px 0px;
  }
  .send-btn{
    margin:10px 0px;
    padding: 0px 10px;
  }
  .send-btn a{
    display: inline-block;
    width: 100%;
  }
  .send-btn button{
    width: 100%;
    height: 35px;
    line-height: 35px;
    background-color: #ff8143;
    color: #fff;
    border-style: none;
    outline-style: none;
    border-radius: 3px;
  }
  .list-content{
    margin: 0px 10px
  }
</style>
