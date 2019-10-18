<template>
  <main id="register">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2">返回</a>
        </div>
        <h1>注册</h1>
      </div>
    </header>
    <div class="r-content">
      <form action="#" id="f-res">
        <p class="r-inputbox">
          <span class="r-label">手机号：</span>
          <span class="r-inputBorder">
            <input type="text" class="r-input r-inputH" placeholder="请输入手机号">
          </span>
        </p>
        <p class="r-inputbox">
          <span class="r-label">验证码：</span>
          <span class="r-inputBorder">
            <input type="text" class="r-input r-inputH" placeholder="请输入验证码">
            <span class="r-code">
              <img src="../../data/images/code.png" alt="">
            </span>
          </span>
        </p>
        <p class="r-inputbox r-third">
          <span class="r-label">手机验证码：</span>
          <span class="r-inputBorder ">
            <input type="text" class="r-input r-inputH" placeholder="请输入验证码">
          </span>
          <span class="r-get">
            <a href="#" class="r-btn">获取验证码</a>
          </span>
        </p>
        <p class="rule">
          点击下一步即代表已同意
            <a href="#">《用户服务协议》</a>
            和
            <a href="#">《我买网隐私协议》</a>
        </p>
        <div class="next">
          <a href="#" class="next-btn">下一步</a>
        </div>
      </form>
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
<style>
 body{
    background-color: #eee;
  }
</style>
<style scoped>

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
  .r-content{
    in-width: 304px;
    padding: 8px;
  }
  /* form部分 */
  .r-inputbox{
    position: relative;
    padding-left: 77px;
    padding-bottom: 8px;
    overflow: hidden;
  }
  .r-label{
    top: 0;
    left: 0;
    position: absolute;
    line-height: 36px;
  }
  .r-inputBorder{
    border: 1px solid #d4d4d4;
    border-radius: 3px;
    display: block;
  }
  .r-input{
    text-indent: 10px;
    border: none;
    background-color: #f5f5f5;
    border-radius: 3px;
  }
  .r-inputH{
    width:100%;
    height: 34px;
  }
  .r-code{
    position: absolute;
    right: 0;
    width: 88px;
    top: 7px;
    padding-left: 7px;
    border-left: 1px solid #d7d7d7;
  }
  .r-get{
    position: absolute;
    right: 0;
    top: 1px;
  }
  .r-btn{
    width: 84px;
    height: 34px;
    background-color: #ff8143;
    color: #fff;
    display: block;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    line-height: 34px;
  }
  .r-third{
    padding-right: 95px;

  }
  .rule{
    color: #666666;
    margin-top: 20px;
    margin-bottom: 50px;
    text-align: left;

  }
  .rule a{
     color: #81b304;
  }
  .next-btn{
    display: block;
    width: 100%;
    outline-style: none;
    border-style: none;
    border: 1px solid #81b304;
    border-radius: 3px;
    height: 34px;
    line-height: 34px;
    background-color: #81b304;
    color: #fff;
  }
</style>
