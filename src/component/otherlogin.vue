<template>
  <main id="otherlogin">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2" >返回</a>
        </div>
        <h1>第三方联合登录</h1>
      </div>
    </header>
    <div class="o-content">
      <ol>
        <li class="inputbox">
          <router-link to="" class="o-iconlink o-clinka">
            <span class="o-bg o-iconlinka"></span>
            <span class="o-login">QQ登录</span>
            <span class="o-error"></span>
          </router-link>
        </li>
        <li class="inputbox">
          <router-link to="" class="o-iconlink o-clinka">
            <span class="o-bg o-iconlinkb"></span>
            <span class="o-login">新浪微博登录</span>
            <span class="o-error"></span>
          </router-link>
        </li>
        <li class="inputbox">
          <router-link to="" class="o-iconlink o-clinka">
            <span class="o-bg o-iconlinkc"></span>
            <span class="o-login">支付宝登录</span>
            <span class="o-error"></span>
          </router-link>
        </li>
      </ol>
    </div>
  </main>
</template>

<script>
  export default{
    name:'otherlogin',
    mehthods:{
      prev(){
      this.$router.go(-1)
      // alert(11111)
      },
    }
  }
</script>
<style>
  body{
      background-color: #eee;
    }
</style>
<style scoped>
  li{
    margin: 0px;
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
  /* form部分 */
  .o-content{
    padding: 0 25px 20px 25px;
  }
  .inputbox{
    border-bottom: 1px solid #d9d9d9;
    height: 50px;
    position: relative;
  }
  .o-clicka{
    display: block;
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
  }
  .o-bg{
    width: 31px;
    height: 31px;
    padding: 0;
    position: absolute;
    left: 25px;
    top: 10px;
    background-image: url('../assets/images/img-icon-loginlink.png');
    background-repeat: no-repeat;
    background-size: 40px 150px;
  }
  .o-login{
    font-size: 14px;
    width: 100%;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    padding-left: 70px;
    text-align: left;
    color: #333;
  }
  .o-error{
    display: block;
    width: 10px;
    height: 15px;
    position: absolute;
    top: 19px;
    right: 17px;
    background-position: 0 -120px;
    background-image: url('../assets/images/img-icon-loginlink.png');
    background-repeat: no-repeat;
    background-size: 40px 150px;
  }
  .o-iconlinkb{
    background-position: 0 -33px;
  }
  .o-iconlinkc{
    background-position: 0 -66px;
  }
</style>
