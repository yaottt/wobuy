<template>
  <div id="food">
    <ul v-for="(n,m) in listall">
      <li v-for="(v,i) in listall[m].food">
        <div class="top">
          <div class="pd-head" v-if="v.show=='true'"><img :src="v.pic" alt=""></div>
          <div class="pd-head" v-if="v.show=='false'"><img :src="v.pic1" alt=""></div>
          <div class="pd-des">
            <div class="pd-self" v-if="v.show=='true'"><p>{{v.des1}}</p></div>
            <div class="pd-self direct" v-if="v.show=='false'"><p>{{v.des}}</p></div>
            <div class="pd-center" v-if="v.show=='false'"><p>{{v.send}}</p></div>

          </div>
          <router-link to=""><img :src="v.images" alt=""></router-link>
        </div>
        <div class="down">
          <h2>{{v.text}}</h2>
          <div class="description">
            <p>{{v.price}}</p>
            <router-link to="" class="pd-car"><img :src="v.car" alt=""></router-link>

          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default({
    name:'food',
    data(){
      return{
      listall:[
        "food"
      ],
      show:''
      }
    },
    mounted(){
      this.$http.get('./data/super.json')
      		  .then((response)=> {
      		    this.listall=response.data.listall;
                console.log(response.data.listall);
      		  })
      		  .catch(function (error) {
      		    console.log(error);
      		  })
      		  .then(function () {
      		    // always executed
      		  });
    }
  })
</script>

<style scoped>
  #food{
    width: 100%;
    padding-bottom:10px;
  }
  #food ul{
    width: 100%;
    overflow: hidden;
    background-color: #eee;
  }
  #food ul li{
    width: 49%;
    height: 15.458937rem;
    float: left;
    margin: 0px;
    border:1px solid pink;
    margin-bottom: 0.144927rem;
    background-color: #ffffff;
  }
  #food li:nth-of-type(2n) {
      margin-left: 0.144927rem;
  }
  #food li img{
    width: 100%;
  }
  #food .top{
    position:relative;
    width:100%;
  }
  #food .pd-des{
    position: absolute;
    bottom: 0.241545rem;
    right:0.241545rem;
  }
  #food .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 1.932367rem;

  }
  #food .pd-des .direct p{
     background-color: #f23030;
  }
  #food .pd-self{
    display: inline-block;
  }
  #food .pd-self p{
    background-color: #ff9000;
    color: #fff;
    font-size: 0.772946rem;
  }
  #food .pd-center{
    display: inline-block;
  }
  #food .pd-center p{
    background-color: #ff9000;
    font-size: 0.772946rem;
    color: #fff;
  }
  #food .pd-car {
    width: 1.449275rem;
    float: right;
  }
  #food .down h2{
    font-size: 0.57971rem;
    text-align: left;
    padding: 0rem 0.483091rem;
  }
  #food .down p{
    display: inline-block;
    text-align: left;
    color: #f23030;
    font-size: 0.676328rem;
    /* display: inline-block */
  }
  #food .description{
    padding: 0.483091rem;
    padding-bottom: 0.966183rem;
    text-align: left;
  }
</style>
