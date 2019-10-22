<template>
  <main id="forget">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2" >返回</a>
        </div>
        <h1>忘记密码</h1>
      </div>
    </header>
    <div class="f-method">
      <div class="f-tab">
        <a href="#" v-for="(v,i) in text" @click="get(i)" :class="{active:i==index}">{{v}}</a>
      </div>
       <component :is="activeIndex"></component>
    </div>
    <v-footer></v-footer>
  </main>
</template>

<script>
  import phonefind from "./phonefind.vue"
  import mailfind from "./mailfind.vue"
  import vfooter from "./footer.vue"
  export default{
    name:'forget',
    components:{
      'v-footer':vfooter,
      phonefind,
      mailfind,
    },
    data(){
      return{
        text:["手机找回","邮箱找回"],
        index:0,
        router:["phonefind","mailfind"],
        activeIndex:'phonefind',
      }
    },
    methods:{
      get(i){
        this.index=i;
        // console.log(i)
        this.activeIndex=this.router[i];
      },
    }
  }
</script>

<style scoped>
	body{
	  background-color: #eee;
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
  .f-method{
    padding: 8px;
  }
  .f-tab{
    height: 32px;
    border-left: 1px solid #7aae1e;
    border-radius: 3px;
    overflow: hidden;
  }
  .f-tab a{
    display: inline-block;
    width: 50%;
    height: 30px;
    line-height: 30px;
    color: #888;
    text-align: center;
    border: 1px solid #7aae1e;
    border-right: none;
    border-left: none;
    float: left;
  }
  .f-tab .active{
    background-color: #7aae1e;
    color: #fff;
  }
</style>
