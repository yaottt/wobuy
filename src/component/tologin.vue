<template>
  <main id="tologin">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2" >返回</a>
        </div>
        <h1>短信快捷登录</h1>
      </div>
    </header>
    <div class="t-content">
      <form action="#" class="t-login">
        <ol class="boxcon">
          <li class="boxline">
            <span class="t-bg t-username"></span>
            <span class="t-block">
              <input type="text" class="t-input" placeholder="  请输入您的邮箱, 用户名, 手机号">
            </span>
          </li>
          <li class="boxline">
            <span class="t-bg t-password"></span>
            <span class="t-block">
              <input type="text" class="t-input" placeholder="  请输入您的密码">
            </span>
          </li>
          <li class="boxline">
            <span class="t-bg t-password"></span>
            <p class="r-inputbox">
              <span class="r-inputBorder">
                <input type="text" class="r-input r-inputH" placeholder="请输入验证码">
                <span class="r-code">
                  <img src="../../data/images/code.png" alt="">
                </span>
              </span>
            </p>
          </li>
        </ol>
        <div class="to-login">
          <a href="#">登录</a>
        </div>
      </form>
      <div t-method>
        <div class="sl">
          <router-link to="/login">短信快捷登录</router-link>
        </div>
        <div class="sr">
          <router-link to="/forget">忘记密码</router-link>
        </div>
      </div>
      <p class="l-line">
        <span  class="l-block" style="padding: 5px 0;"></span>
        <router-link to="/otherlogin">用合作网站账号登录&gt;</router-link>
      </p>
    </div>
     <v-footer></v-footer>
  </main>
</template>

<script>
  import vfooter from "./footer.vue"
  export default{
    name:'index',
    components:{
      'v-footer':vfooter,
    },
  }
</script>

<style scoped>
	body{
	  background-color: #eee;
	}
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
  .t-content{
    padding: 8px;
  }
  .boxcon{
    background-color: #FFF;
    border: 1px solid #C4C4C4;
    border-radius: 4px;
  }
  .boxline{
    padding-left: 45px;
    height: 46px;
    border-bottom: 1px solid #C4C4C4;
    position: relative;
  }
  .t-username{
    width: 18px;
    height: 22px;
    position: absolute;
    top: 14px;
    left: 14px;
    display: inline-block;
    background-position: 0 0;
  }
  .t-bg {
      background-image: url('../assets/images/s-bg.png');
      background-repeat: no-repeat;
      background-size: 20px 350px;
  }
  .t-block{
    display: block;
  }
  .t-input{
    height: 46px;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    color: #333;
  }
  .t-password{
    width: 18px;
    height: 22px;
    position: absolute;
    top: 14px;
    left: 14px;
    display: inline-block;
    background-position: 0 -22px;
  }
  .r-label{
    top: 0;
    left: 0;
    position: absolute;
    line-height: 36px;
  }
  .r-inputBorder{
    border-radius: 3px;
    display: block;
  }
  .r-input{
    text-indent: 10px;
    border: none;
    border-radius: 3px;
  }
  .r-inputH{
    width:100%;
    height: 44px;
  }
  .r-code{
    position: absolute;
    right: 0;
    width: 88px;
    top: 7px;
    padding-left: 7px;
    border-left: 1px solid #d7d7d7;
  }
  .to-login{
    width: 100%;
    padding: 8px 0;
  }
  .to-login a{
    display:block ;
    border: 1px solid #81b304;
    border-radius: 3px;
    height: 34px;
    line-height: 34px;
    background-color: #81b304;
    color: #fff;
  }
  .t-method{
    overflow: hidden;
  }
  .sl a, .sr a{
    color: #0294df;
    text-decoration: underline;
  }
  .sl{
    float: left;
  }
  .sr{
    float: right;
  }
  .l-line{
    border-top: 1px solid #bebebe;
    margin-top: 30px;
    text-align: left;
  }
  .l-line span{
    border-top: 1px solid #fff;
    height: 5px;
    display: block;
  }
  .l-line a{
    padding: 15px 0;
    color: #0294df;
    font-size: 16px;
    text-align: left;
}
</style>
