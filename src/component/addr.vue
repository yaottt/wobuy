<template>
  <main id="addr">
    <header class="head">
      <div class="ad-back">
        <router-link to="/super">返回</router-link>
      </div>
      <h1 class="title">地址选择</h1>
    </header>
    <section>
      <div class="location" >
        <span>当前定位城市:</span>
        <span class="local-city">{{this.$store.state.city}}</span>
        <span class="local-city"></span>
        <!-- <a href="#">{{LocationCity}}</a> -->
      </div>
      <div class="passion">
        <div class="city-title" v-for="(v,i) in title">
          <p>{{v}}</p>
          <ul class="options addr-menu"v-for="(m,a) in list[i]" >
            <li class="addr-list" v-for='(j,b) in list[i].city'  @click="handleCityCick(i,j,b)">
                 <span>{{j}}</span>
                <!-- {{m}} -->

            </li >
          </ul>
        </div>
      </div>
      <!-- {{selfcity}} -->
    </section>

  </main>
</template>

<script>
  // import BMap from 'BMap';
  import map from '../../data/js/map.js'
  export default({
    name:'addr',
    data(){
      return{
      title:[],
      list:[],
      // city:[],
      addr:[],
      head1:[],
      LocationCity:"正在定位",
      ak:'GHjxaY1b1d9t1hxzbYVxHrzQe042di34',
      selfcity:this.$store.state.city,
      numone:1
      }
    },
    methods:{
      get(i){
        this.index=i;
      },
      // city(){
      // map.init().then(BMap =>{
      // const locationCity = new BMap.Geolocation();
      // var that = this;
      // locationCity.getCurrentPosition(
      // 	          function getinfo(options){
      // 	            let city = options.address.city;    //此处拿到位置相关信息
      // 	            that.$store.city = city;
      // 	            console.log(options)
      //               console.log(city)
      // 	          },
      // 	          function (e){
      // 	            that.$store.city = '定位失败';
      // 	            console.log('定位失败')
      // 	          },
      // 	          {provider: 'baidu'}
      // 	        )
      // 	      })
      // },
      // city(){
      // map.init().then(BMap =>{
      // const locationCity = new BMap.Geolocation();
      // var that = this;
      // locationCity.getCurrentPosition(
      // 	          function getinfo(options){
      // 	            let city = options.address.city;    //此处拿到位置相关信息
      // 	            that.LocationCity = city;
      // 	            console.log(options)
      // 	          },
      // 	          function (e){
      // 	            that.LocationCity = '定位失败';
      // 	            console.log('定位失败')
      // 	          },
      // 	          {provider: 'baidu'}
      // 	        )
      // 	      })
      // },
      city(){

        this.$store.commit('city');
        // this.selfcity=this.$store.state.city;
        // console.log(this.selfcity);
        // this.numone++;
      },
       handleCityCick(i,city,index){
         console.log(i)

         if(i!=1){
           this.$store.dispatch('changeCity',city)
           this.$router.push('/index')
           // this.selfcity=city;
         }else{
           var _this=this;
           for(var i in _this.title){
             _this.head1[i]=$('.city-title').eq(i).offset().top;
             // console.log(_this.head1[i])
           };
             var v=index;
             $('html,body').animate({'scrollTop': _this.head1[v+2]},500)
             // console.log(v);
         }


       }

     },

    mounted(){
      var _this=this;
      var i=0;
      this.city();

      _this.$Indicator.open({
      	text: 'Loading...',
      	spinnerType: 'fading-circle'
      });

      setTimeout(function(){
        for(var i in _this.title){
          _this.head1[i]=$('.city-title').eq(i).offset().top;
        };
        $('.letters').click(function(event){
          var v=$(this).index();
          $('html,body').animate({'scrollTop': _this.head1[v+2]},500)
          console.log(v);
      });
        _this.$Indicator.close();
      },1000);

      this.$http.get('./data/addr.json')
      		  .then((response)=> {
      		    this.title=response.data.title
              this.list=response.data.list
              this.addr=response.data
              // console.log(response.data.list);

      		  })
      		  .catch(function (error) {
      		  })
    },
    // watch:{
    //   selfcity(){
    //     console.log(1);
    //     // return this.selfcity
    //   }
    // }
  })

</script>

<style scoped>
  #addr .head{
    width: 100%;
    height: 43px;
    border-bottom: 1px solid #b5b5b5;
    position: relative;
    background-color: #FFF;
  }
  .ad-back{
    position: absolute;
    top: 12px;
    left: 8px;
  }
  .ad-back a{
    display: block;
    background-image: url('../assets/images/s-bg2.png');
    background-repeat: no-repeat;
    background-size: 60px 700px;
    font-size: 16px;
    line-height: 22px;
    width: 50px;
    height: 20px;
    overflow: hidden;
    background-position: -44px -157px;
    padding-left: 17px;
    color:#333;
    text-decoration: none;
  }
  #addr .title{
    font-size: 0.966183rem;
    font-weight: normal;
    height: 43px;
    line-height: 43px;
    text-align: center;
    margin:0px;
  }
  /* ············定位城市············· */
  .location{
    line-height: 45px;
    background-color: #FFF;
    text-align: center;
    font-size: 0.869565rem;
  }
  .location .local-city{
    color: #ff9c00;
    font-size: 26px;
    padding-left: 10px;
  }
  .city-title P{
    padding-left: 10px;
    font-size: 0.746666rem;
    color: #323232;
    line-height: 30px;
    background-color: #f2f2f2;
    border-bottom: 1px solid #e2e2e2;
    font-weight: 700;
    display: block;
    text-align:left;
  }
  .addr-menu{
    width: 100%;
    text-align: left;
    margin:0px;
    background-color: #fff;
  }
  .addr-list{
    margin:0px;
    line-height: 48px;
    display: inline-block;
    width: 28%;
    border-bottom: 1px solid #ededed;
    border-right: 1px solid #ededed;
    text-align: center;
    color: #323232;
    font-size: 0.8rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding:0px 8px;
  }
  .passion .city-title:nth-of-type(2) ul li{
    width: 15%;
  }
</style>
