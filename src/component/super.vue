<template>
  <div id="super">
    <ul v-for="(n,m) in listall">
      <router-link to="/details" v-for="(v,i) in listall[m].list" class="buy-li">
        <div class="top">
          <div class="pd-head" v-if="v.show=='true'"><img :src="v.pic" alt=""></div>
          <div class="pd-head" v-if="v.show=='false'"><img :src="v.pic1" alt=""></div>
          <div class="pd-des">
            <div class="pd-self" v-if="v.show=='true'"><p>{{v.des1}}</p></div>
            <div class="pd-self direct" v-if="v.show=='false'"><p>{{v.des}}</p></div>
            <div class="pd-center" v-if="v.show=='false'"><p>{{v.send}}</p></div>

          </div>
          <router-link to="/details"><img :src="v.images" alt=""></router-link>
        </div>
        <div class="down">
          <h2>{{v.text}}</h2>
          <div class="description">
            <p>{{v.price}}</p>
            <router-link to="/buy" class="pd-car"><img :src="v.car" alt=""></router-link>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default({
    name:'super',
    data(){
      return{
      listall:[

      ],
      show:''
      }
    },
    mounted(){
      this.$http.get('./data/super.json')
            .then((response)=> {
              // console.log(response.data.listall);
              this.listall=response.data.listall
            })
            .catch(function (error) {
              console.log(error);
            })
    }
  })
</script>

<style scoped>
  #super{
    width: 100%;
    padding-bottom:10px;
  }
  #super ul{
    width: 100%;
    overflow: hidden;
    background-color: #eee;
  }
  #super .buy-li{
    display: inline-block;
    width: 49%;
    height: 15.458937rem;
    float: left;
    margin: 0px;
    margin-bottom: 0.144927rem;
    background-color: #ffffff;
  }
  #super .buy-li:nth-of-type(2n) {
      margin-left: 0.144927rem;
  }
  #super .buy-li img{
    width: 100%;
  }
  #super .top{
    position:relative;
    width:100%;
  }
  .pd-des{
    position: absolute;
    bottom: 0.241545rem;
    right:0.241545rem;
  }
  .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 1.932367rem;

  }
  .pd-des .direct p{
     background-color: #f23030;
  }
  .pd-self{
    display: inline-block;
  }
  .pd-self p{
    background-color: #ff9000;
    color: #fff;
    font-size: 0.772946rem;
  }
  .pd-center{
    display: inline-block;
  }
  .pd-center p{
    background-color: #ff9000;
    font-size: 0.772946rem;
    color: #fff;
  }
  .pd-car {
    width: 1.449275rem;
    float: right;
  }
  #super .down h2{
    font-size: 0.57971rem;
    text-align: left;
    padding: 0rem 0.483091rem;
    color: #333;
  }
  #super .down p{
    display: inline-block;
    text-align: left;
    color: #f23030;
    font-size: 0.676328rem;
    /* display: inline-block */
  }
  #super .description{
    padding: 0.483091rem;
    padding-bottom: 0.966183rem;
    text-align: left;
  }
</style>
