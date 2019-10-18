<template>
  <main id="whole">
    <div class="whole-list">
      <ul class="list-ul" v-for="(n,m) in listall1">
        <li v-for="(v,i) in listall1[m].list">
          <div class="list-left">
            <div class="pd-head" v-if="v.show=='true'"><img :src="v.pic" alt=""></div>
            <img :src="v.images" alt="">
          </div>
          <div class="list-right">
            <h4>{{v.text}}</h4>
            <p class="price">零售价:{{v.price}}</p>
            <div class="list-send">
              <div class="pd-self" v-if="v.show=='false'"><p>{{v.des1}}</p></div>
              <div class="pd-self direct" v-if="v.show=='true'"><p>{{v.des}}</p></div>
              <div class="pd-center" v-if="v.show=='true'"><p>{{v.send}}</p></div>
            </div>
            <div class="description">
              <router-link to="" class="pd-car"><img :src="v.car" alt=""></router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
  export default{
    data(){
      return{
        listall:[],
        listall1:[],
        show:false,
      }
    },
    methods:{

    },
    mounted(){
      this.$http.get('./data/store.json')
              .then((response)=> {
                // console.log(response.data.listall);
                this.listall=response.data.listall
                this.listall1=response.data.listall1
              })
              .catch(function (error) {
                console.log(error);
             })

    }
  }
</script>

<style scoped>
  .list-ul li{
    overflow: hidden;
    margin: 0px;
    padding: 5px 10px 0px 10px;
    background-color: #fff;
  }
  .list-left{
    float: left;
    width: 100px;
    height: 100px;
    position: relative;
  }
  .pd-head{
    position: absolute;
    top:0px;
    left: 0px;
    width: 30px;
    height: 30px;
  }
  .list-left img{
    width: 100%;
  }
  .list-right{
    float: left;
    width: 245px;
    text-align: left;
    margin-left: 8px;
    border-bottom:1px solid #ccc;
    position:relative
  }
  .list-right h4{
    padding-bottom: 10px;
  }
  .list-send{
    padding-bottom: 20px;
  }
  .price{
    color: #bd0000;
    font-size: 16px;
  }
  .description{
    position: absolute;
    bottom:0px;
    right:0px;
  }
  .pd-car{
    display: block;
    width: 25px;
    height: 25px;

  }
  .pd-car img{
    width: 100%;
  }
  .list-send{

  }
  .pd-self{
    width: 35px;
    height: 20px;
    border: 1px solid #f23030;
    color: #f23030;
    text-align: center;
    border-radius: 5px;
    display: inline-block;
  }
  .pd-center{
    display: inline-block;
    background-color: #fcc951;
    width: 10px;
    height: 10px;
    color: #fff;
    width: 20px;
    height: 20px;
    text-align: center;
    border-radius: 3px;
  }
</style>
