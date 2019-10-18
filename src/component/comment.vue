<template>
  <main id="comment">
    <div class="comment-list">
      <ol>
        <li v-for="(v,i) in text" @click="get(i)" :class="{on :i==index}">
          <p>{{v.top}}</p>
          <p>{{v.down}}</p>
        </li>
      </ol>
    </div>
    <div class="comment-des" v-if="index==0">
      <div v-for="(v,i) in content1" class="comment-content" >
        <p class="comment-top">
           <span  class="user">{{v.people}}</span>
           <span class="claim">{{v.date}}</span>
        </p>
        <p>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>

        </p>
        <p>{{v.text}}</p>

      </div>

    </div>
    <div class="comment-des"v-if="index==1">
      <div v-for="(v,i) in content1" class="comment-content">
        <p class="comment-top">
           <span  class="user">{{v.people}}</span>
           <span class="claim">{{v.date}}</span>
        </p>
        <p>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>
          <span class="star"></span>

        </p>
        <p>{{v.text}}</p>

      </div>

    </div>
    <div class="comment-des" v-if="index==2">
      <img src="../../data/images/nocm_03.png" alt="">
      <p>没有相应记录</p>
    </div>
    <div class="comment-des" v-if="index==3">
      <img src="../../data/images/nocm_03.png" alt="">
      <p>没有相应记录</p>
    </div>
    <div class="comment-des" v-if="index==4">
      <img src="../../data/images/nocm_03.png" alt="">
      <p>没有相应记录</p>
    </div>
    <div class="page" v-if="hide==true">
      <span>上一页</span>
      <select name="" class="com-select">
        <option value="1">1/5</option>
        <option value="2">2/5</option>
        <option value="3">3/5</option>
        <option value="4">4/5</option>
        <option value="5">5/5</option>
      </select>
      <span>下一页</span>
    </div>
    <div class="back">
      <img src="../assets/images/top.png" alt="">
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
        text:[],
        index:0,
        content1:[],
        hide:true,

      }
    },
    methods:{
      get(i){
        this.index=i;
        if(this.index>1){
          this.hide=false
        }else{
          this.hide=true
        }
      },
    },
    mounted(){
      this.$http.get('./data/details.json')
      		  .then((response)=> {
      		    this.text=response.data.text;
              this.content1=response.data.content1;
                console.log(response.data.listall);
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
  #comment{
    background-color: #eee;
  }
  .on{
    color: #00a651;
  }
  .comment-list{

  }
  .comment-list ol{
    overflow: hidden;
  }
  .comment-list ol li{
    width: 20%;
    margin: 0px;
    float: left;
    height: 50px;
    /* line-height: 50px; */
  }
  .comment-list p{
    margin-top:5px;
  }
  /* 评论内容 */
  .star{
    background: url('../assets/images/productdetail.png') no-repeat;
    background-size: 38px;
    background-position: 0 -167px;
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 10px 0px;
  }
  .comment-content{
    padding: 10px ;
    border-top: 1px solid #eee;
    background-color:#fff;
    margin-bottom: 10px;
  }
  .comment-content p{
    text-align: left;

  }
  .comment-top{
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;
    font-size: 12px;
  }
  .claim{
    float: right;
  }
  .page{
    padding: 10px 0px;
  }
  .page span{
    margin: 10px;
  }
  .com-select{
    height: 20px;
  }
  .back{
    width: 1.866666rem;
    height: 1.866666rem;
    position: fixed;
    bottom:8rem;
    right:0.8rem
  }
  .back img{
    width: 100%;
  }
</style>
