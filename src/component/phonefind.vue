<template>
  <main id="phonefind">
    <div class="phoneway">
      <form action="#" class="p-phone">
        <div>
          <p class="p-inputbox">
            <span class="p-label">手机号：</span>
            <span class="p-block p-inputborder">
              <input type="text" placeholder="请输入手机号" class="p-input">
            </span>
          </p>
          <p class="p-inputbox">
            <span class="p-label">验证码：</span>
            <span class="p-block p-inputborder">
              <input type="text" placeholder="请输入验证码" class="p-input">
              <span class="r-code">
                <img src="../../data/images/code.png" alt="">
              </span>
            </span>
          </p>
          <p class="p-inputbox p-check">
            <span class="p-label">手机验证码：</span>
            <span class="p-block p-inputborder">
              <input type="text" placeholder="请输入手机验证码" class="p-input">
            </span>
            <span class="p-border">
              <a href="#">获取验证码</a>
            </span>
          </p>
        </div>
        <div class="submit">
          <a href="#">提交</a>
        </div>
      </form>
    </div>
  </main>
</template>

<script>

</script>

<style scoped>
  .phoneway{
    padding: 8px 0px;
    min-height: 250px;
  }
  .p-inputbox{
    position: relative;
    padding-left: 77px;
    padding-bottom: 8px;
    overflow: hidden;
  }
  .p-label{
    top: 0;
    left: 0;
    position: absolute;
    line-height: 36px;
  }
  .p-block{
    display: block;
  }
  .p-inputborder{
    border: 1px solid #d4d4d4;
    border-radius: 3px;
  }
  .p-input{
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
  .p-check{
    padding-right: 95px;
  }
  .p-border{
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    border: 1px solid #ff8143;
    border-radius: 3px;
  }
  .p-border a{
    width: 84px;
    height: 34px;
    line-height: 34px;
    background-color: #ff8143;
    color: #fff;
    display: block;
    border-radius: 1px;
    text-align: center;
    cursor: pointer;
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
</style>
