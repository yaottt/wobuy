<template>
  <main id="mailfind">
    <div class="mailway">
      <form action="#" class="m-mail">
        <div>
          <p class="m-inputbox">
            <span class="m-label">邮箱地址：</span>
            <span class="m-block m-inputborder">
              <input type="text" placeholder="请输入您注册时填写的地址" class="m-input">
            </span>
          </p>
          <p class="m-inputbox">
            <span class="m-label">验证码：</span>
            <span class="m-block m-inputborder">
              <input type="text" placeholder="请输入验证码" class="m-input">
              <span class="r-code">
                <img src="../../data/images/code.png" alt="">
              </span>
            </span>
          </p>
        </div>
        <div class="submit">
          <a href="#">提交</a>
        </div>
      </form>
      <p class="tips">温馨提示：</p>
      <p class="tips-content">
        请正确填写您的注册的电子邮箱地址，系统将把您的密码发送到您的注册邮箱，
        如果该邮箱地址错误，
        或者您已经忘记注册时的邮箱地址，我们将无法为您找回密码，建议您重新注册一个帐号。
      </p>
    </div>
  </main>
</template>

<script>
</script>

<style scoped>
  .mailway{
    padding:  8px 0px;
    min-height: 250px;
  }
  .m-inputbox{
    position: relative;
    padding-left: 77px;
    padding-bottom: 8px;
    overflow: hidden;
  }
  .m-label{
    top: 0;
    left: 0;
    position: absolute;
    line-height: 36px;
  }
  .m-block{
    display: block;
  }
  .m-inputborder{
    border: 1px solid #d4d4d4;
    border-radius: 3px;
  }
  .m-input{
    text-indent: 10px;
    border: none;
    background-color: #f5f5f5;
    border-radius: 3px;
    font-size: 14px;
    width: 100%;
    color: #333;
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
  .submit{
    border: 1px solid #81b304;
    border-radius: 3px;
  }
  .submit a{
    display: block;
    height: 34px;
    line-height: 34px;
    background-color: #81b304;
    color: #fff;
    border-radius: 1px;
    text-align: center;
    cursor: pointer;
  }
  .tips{
    text-align: left;
  }
  .tips-content{
    color: #666;
    text-align: left;
  }
</style>
