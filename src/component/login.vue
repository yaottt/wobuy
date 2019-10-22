<template>
  <main id="login">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2">返回</a>
        </div>
        <h1>短信快捷登录</h1>
      </div>
    </header>
    <div class="l-content">
      <form action="#" class="l-login">
        <ol class="boxcon">
          <li class="boxline">
            <span class=" l-userName l-phone"></span>
            <span class="l-block">
              <input type="text" class="l-input" placeholder="请输入您的手机号" id="number1" v-model="msg">
            </span>
            <a href="#" class="l-clear"><img src="../assets/images/icon_06.png" alt=""></a>
          </li>
          <li class="boxline">
            <span class="l-bg l-password"></span>
            <p>
              <span class="l-block">
                <input type="text" class="l-input l-input-code" placeholder="请输入验证码">
              </span>
              <a href="#" class="l-clear l-clear-code"><img src="../assets/images/icon_06.png" alt=""></a>
              <span class="l-code">
                <img src="../../data/images/code.png" alt="">
              </span>
            </p>
          </li>
          <li class="boxline">
            <span class=" l-userName l-phoneinfo"></span>
            <p>
              <span class="l-block">
                <input type="text" class="l-input l-input-code" placeholder="请输入d短信验证码">
              </span>
              <a href="#" class="l-clear l-clearinfo"><img src="../assets/images/icon_06.png" alt=""></a>
              <span class="l-code l-info" @click="show()">
                <a href="#" id="timeshow">获取短信验证码</a>
              </span>
            </p>
          </li>
        </ol>
        <div class="l-error " id="tishi1" v-if="showtime">请输入6位数字验证码</div>
        <p class="l-tips">温馨提示</p>
        <p class="l-rule">
          未注册我买网账号的手机号，登录时将自动注册且代表已同意
          <a href="#">《用户服务协议》</a>
          和
          <a href="#">《我买网隐私协议》</a>
        </p>
        <div class="l-login">
          <a href="#" class="l-log">登录&nbsp;|&nbsp;注册</a>
        </div>
      </form>
      <div l-method>
        <div class="sl">
          <router-link to="/tologin">账号登录</router-link>
        </div>
        <div class="sr">
          <router-link to="/otherlogin">用合作网站账号登录</router-link>
        </div>
      </div>
      <p class="l-line">
        <span  class="l-block" style="padding: 5px 0;"></span>
      </p>
      <div class="l-logo">
        <img src="../assets/images/login_buttom.png" alt="">
      </div>
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
    data(){
      return{
        nums:60,
        msg:"",
        msg1:"",
        showtime:false,
      }
    },
    methods:{
      show(){
        // console.log(111)
        var phonenum=document.getElementById("number1");
        var time=document.getElementById("timeshow");
        var tishi1=document.getElementById("tishi1");
        var phoneNum=phonenum.value;
        if(this.nums>=0&&phoneNum.length == 11 && /^[1][3,4,5,7,8][0-9]{9}$/.test(phoneNum)){
        	// time.style="padding:0px";
        	var _this=this;
        	var timer
        	timer=setInterval(function(){
        		_this.nums--;
        		if(_this.nums<0){
        			time.innerHTML="重新获取"
        			return;
        		}else{
        			time.innerHTML=_this.nums+"秒后重新获取";
        		}
        	},1000)
          // clearInterval(timer)
        	// time.innerHTML=this.nums+"秒后重新获取";
        	// console.log(time.innerHTML)
        }else{
        	// tishi1.style="display:block";
        	this.showtime=true;
        }
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
    margin:0px;
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
  .l-content{
    padding: 8px;
  }
  .boxcon{
    background-color: #FFF;
    border: 1px solid #C4C4C4;
    border-radius: 4px;
  }
  .boxline{
    padding-left: 40px;
    height: 46px;
    border-bottom: 1px solid #C4C4C4;
    position: relative;
  }
  .l-phone{
    background: url('../assets/images/icon_03.png');
    background-size: 100% 100%;
  }
  .l-userName{
    width: 18px;
    height: 22px;
    position: absolute;
    top: 14px;
    left: 14px;
    display: inline-block;
  }
  .l-block{
    display: block;
  }
  .l-input{
    height: 46px;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    color: #333;
  }
  .l-clear{
    display: block;
    position: absolute;
    right: 14px;
    top: 13px;
  }
  .l-clear-code{
    right: 102px;
  }
  .l-clear img{
    width: 20px;
    height: 20px;
  }
  .l-password{
    width: 18px;
    height: 22px;
    position: absolute;
    top: 14px;
    left: 14px;
    display: inline-block;
  }
  .l-bg{
    background-image: url('../assets/images/s-bg.png');
    background-repeat: no-repeat;
    background-size: 20px 350px;
    background-position: 0 -22px;
  }
  .l-input-code{
    width: 100%;
    height: 44px;
    line-height: normal;
    padding: 0;
    border: 0;
    background: #fff;
    font-size: 14px;
    color: #333;
}
  .l-code{
    position: absolute;
    right: 0;
    width: 88px;
    top: 7px;
    padding-left: 7px;
    border-left: 1px solid #d7d7d7;
  }
  .l-phoneinfo{
    background: url('../assets/images/icon_12.png');
    background-size: 100% 100%;
  }
  .l-clearinfo{
    right:130px;
  }
  .l-info{
    width: 116px;
    height: 30px;
  }
  .l-info a{
    display: block;
    width: 100px;
    border: 1px solid #81b304;
    color: #81b304;
    height: 20px;
    line-height: 20px;
    border-radius: 5px;
    padding: 5px;
    text-align: center;
  }
  .l-error{
    color: red;
    text-align: left;
    display: none;
  }
  .l-tips{
    color: #ff860f;
    margin: 20px 0 5px 0;
    text-align: left;
  }
  .l-rule{
    text-align: left;
  }
  .l-rule a{
    color: #81b304;
  }
  .l-login{
    width: 100%;
    padding: 8px 0;

  }
  .l-login .l-log{
    height: 34px;
    line-height: 34px;
    background-color: #81b304;
    color: #fff;
    display: block;
    border-radius: 1px;
    text-align: center;
    cursor: pointer;
    border-radius: 3px;
  }
  /* 登录方式 */
  .l-method{
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
  }
  .l-line span{
    border-top: 1px solid #fff;
  }
  .l-logo{
    text-align: center;
    padding: 0 0 5px 0;
  }
  .l-logo img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
</style>
