import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import map from '../../../data/js/map.js'
export default new Vuex.Store({
  // state类似于之前的data.$store.state.数据名
  state:{
    city:"广州",
    num:1,
    msg:'北京',
    list:[
      {
        shop:[
          {
            images:"./data/images/money01.jpg",
            title:"中粮悠采 赞岐乌冬面300g(日本进口 袋)",
            price:"21.80",
            amount:"1",
            weight:"0.3",
            intergral:"21.00",
            id:0
          },
          {
            images:"./data/images/money02.jpg",
            title:"【每日五谷】中粮悠采 轻食五谷20g*16",
            price:"39.90",
            amount:"1",
            weight:"0.432",
            intergral:"39.00",
            id:1
          }
        ]
      },
      {
        shop:[
          {
            images:"./data/images/money03.jpg",
            title:"【包邮直发】云南蒙自石榴8-10粒箱装5斤 （单果250-300g）",
            price:"71.80",
            amount:"1",
            weight:"2.5",
            intergral:"71.00",
            id:0
          }
        ]
      }
    ],
  },
  actions:{
    changeCity(ctx,city){
      console.log(city)
      ctx.commit('changeCity',city)
    },
  },
  // mutations类似于之前的方法 this.$store.commit('方法名',参数)
  mutations:{
    add(state,id){
      state.num++;

    },
    sub(state,id){
      state.num--;
      if(state.num<0){
        state.num=0
      }
    },
    prev(){
    this.$router.go(-1)
    alert(11111)
    },

    city(state,n){
    map.init().then(BMap =>{
    const locationCity = new BMap.Geolocation();
    var that = this;
    locationCity.getCurrentPosition(
    	          function getinfo(options){
    	            let city = options.address.city;    //此处拿到位置相关信息
    	             state.city = city;
    	            console.log(options)
                  console.log("city"+ state.city)
    	          },
    	          function (e){
    	            that.city = '定位失败';
    	            console.log('定位失败')
    	          },
    	          {provider: 'baidu'}
    	        )
    	      })
    },
    changeCity(state,city){
      state.city=city
    }
  },
})
