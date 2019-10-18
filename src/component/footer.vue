<template>
  <main id="footer">
    <div class="ft">
      <div class="ft-login">
        <router-link to="/login">登录</router-link>
        <span>|</span>
        <router-link to="/register">注册</router-link>
      </div>
      <div class="ft-back">
        <router-link to="">反馈</router-link>
        <span>|</span>
        <router-link to="" class="back">回顶部</router-link>
      </div>
    </div>
    <div class="ft-menu">
      <span><router-link to="/index">首页</router-link></span>
      <span><router-link to="">分类</router-link></span>
      <span><router-link to="/buy">购物车</router-link></span>
      <span><router-link to="/money">我的小买</router-link></span>
    </div>
    <div class="ft-edition">
      <p class="list">
        <router-link to="">下载iphone客户端</router-link>
        <span>&nbsp;|</span>
        <router-link to="">下载android客户端</router-link>
      </p>
      <p class="list">
        <router-link to="">触屏版</router-link>
        <span>|</span>
        <router-link to="">电脑版</router-link>
      </p>
      <p class="tel">
        客服电话
        <span>400-005-5678</span>
      </p>
    </div>
    <div class="list-number">
      <a href="#">
        <img src="../assets/images/icpno.png" alt="">
        <p>京公网安备 11010102000458号</p>
      </a>
    </div>
  </main>
</template>

<script>
  export default({
    mounted(){
      $('.back').click(function(event){
        $("body,html").animate({scrollTop:0},300);
      })
    }
  })
</script>

<style scoped>
  #footer .ft{
    height: 25px;
    overflow: hidden;
    padding: 0px 8px 0 8px;
    border-top: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    background-color: #fff;
    line-height: 27px;
  }
  #footer .ft a{
    font-size: 0.676328rem;
    text-decoration: none;
    color: #333;
  }
  .ft-login{
    float: left;
  }
  .ft-back{
    float:right;
  }
  .ft-menu{
    padding: 8px 0 15px 0;
    text-align: center;
  }
  .ft-menu span{
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    display: inline-block;
    height: 29px;
  }
  .ft-menu span a{
    display: inline-block;
    height: 29px;
    line-height: 31px;
    width: 69px;
    background-color: #fff;
    color: #333;
    border-radius: 3px;
    font-size: 0.676328rem;
    text-decoration: none;
  }
  .ft-edition{
    color: #0294df;
  }
  .ft-edition a{
    color: #0294df;
    font-size: 0.676328rem;
  }
  .ft-edition .list{
    margin-bottom: 10px;
  }
  .ft-edition .tel{
    color: #333;
    font-size: 0.676328rem;
    margin-top: 5px;
  }
  .ft-edition .tel span{
    color: #0294df;
  }
  .list-number{
    padding: 5px 0;
  }
  .list-number a{
    display: inline-block;
    font-size: 0.676328rem;
    overflow: hidden;
  }
  .list-number a img{
    float: left;
  }
  .list-number p{
    float:left;
    color: #939393;
    margin-left: 5px;
  }
</style>
