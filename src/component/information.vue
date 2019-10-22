<template>
  <main id="information">
	  <div class="pd-introduce">
      <ul>
        <li v-for="(v,i) in text" :class="{on :i==index}" @click="get(i)">{{v}}</li>
      </ul>
    </div>
    <div class="pd-content">
      <div class="shopping-content" v-if="index==0">
        <img v-for="(v,i) in shopping" :src="v.images" alt="">
      </div>
      <div class="shopping-content sp-p" v-if="index==1">
        <ul>
          <li v-for="(v,i) in list1" class="shopping-text">
             <p class="sp-title">{{v.title}}</p>
             <p class="sp-content">{{v.text}}</p>
          </li>
          <li class="shopping-text">
             <p class="sp-title n-color">备注</p>
             <p class="sp-content n-color">您收到的商品生产日期将不早于此生产日期</p>
          </li>
        </ul>
      </div>
      <div class="shopping-content sp-p" v-if="index==2">
        <p class="text-req">中粮我买网所售商品均经严格的供应商资格审查、商品审查、入库全检、出货全检流程，
        由于部分商装可能会更换，我买网所示商品图片仅作为参考，关于商品的更详尽信息如包装、
        产地、生产日期等，以收到的实物商品为准。</p>
      </div>
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
        text:["商品介绍","详细参数","温馨提示"],
        index:0,
        shopping:[],
        list1:[],
      }
    },
    methods:{
      get(i){
        this.index=i;
      },
    },
    mounted(){
      this.$http.get('./data/details.json')
      		  .then((response)=> {
      		    this.shopping=response.data.shopping;
              this.list1=response.data.list1;
                // console.log(response.data.listall);
      		  })
      		  .catch(function (error) {
      		    console.log(error);
      		  })
      		  .then(function () {
      		    // always executed
      		  });
    }
  }
</script>

<style scoped>
  #information{
    background-color: #eee;
  }
  .on{
    color: #00a651;
  }
  .pd-introduce{
    background-color: #fff;

  }
  .pd-introduce ul{
    overflow: hidden;
    border-bottom: 1px solid #d6d6d8;
  }
  .pd-introduce ul li{
    float: left;
    margin: 0px;
    width: 25%;
    height: 45px;
    line-height: 45px;
    margin: 0px;
    background: url("../assets/images/c_s_03.png") no-repeat right ;
    position: relative;
    background-size: 2px 60px;
  }
  .shopping-content{
    padding: 10px;
  }
  .shopping-content img{
    width: 100%;
  }
  .shopping-text{
    overflow: hidden;
  }
  .shopping-text p{
    float: left;
    height: 25px;
    line-height: 25px;
    font-size: 14px;
  }
  .sp-title{
    width: 23%;
    text-align: left;
  }
  .sp-p{
    min-height: 330px;
  }
  .text-req{
    text-align: left;
  }
  .pd-content{
    background-color: #fff;
  }
  .n-color{
    color: #7a7a7a;
  }
</style>
