<template>
  <main id="buy">
    <header class="r-head">
      <div class="r-topbar">
        <div class="r-back" @click="$router.back(-1)">
          <a href="#" class="r-bg2">返回</a>
        </div>
        <h1 @click="get()">购物车</h1>
      </div>
    </header>
    <section class="car-content" v-for="(n,m) in list">
      <div class="buy-select" >
        <div class="top-bar" >
          <h2>自营常温品</h2>
          <p class="edit" @click="change()">
            <span class="buy-edit" v-if="show==true">编辑</span>
            <span class="buy-edit" v-if="show==false">完成</span>
          </p>
          <span :class="{check_box:true, 'checked':show1[m]}" @click="checkall(n,m)"></span>
          <p class="selectall">全选</p>
        </div>
      </div>
      <div class="shop-list">
        <div class="buy-pd" >
          <ol>
            <li v-for="(item,index) in list[m].shop"  :key="item.id">
              <span>{{a}}{{b}}</span>
              <span class="check_box" @click="checkSingle(item,index,n,m)" :class="{'checked':item.checked}"  :value="item"></span>
              <!-- <span class="check_box" @click="item.select=!item.select" :class="{check_on:item.select}" v-model="check_goods" :value="item"></span> -->
              <router-link to="">
                <img :src="item.images" alt="">
              </router-link>
              <div class="buy-content">
                <h3>
                {{item.title}}
                <span class="list-icon"></span>
                </h3>
                <div class="money-list">
                  <p>零售价:<span class="sale-price">{{parseInt(item.price*item.num)}}</span></p>
                  <p>数量：<span>{{item.num}}</span></p>
                </div>
                <div class="money-list">
                  <p>重量:<span>{{parseInt(item.weight*item.num)}}kg</span></p>
                  <p>积分：<span>{{item.intergral*item.num}}</span></p>
                </div>
                <div class="buy-del" >
                  <div class="buy-acount">
                    <span class="acount-num">数量：</span>
                    <span class="iconfont icon-jian decrease" @click="reduce(item)"></span>
                    <!-- <span class="account">{{v.num}}</span> -->
                     <input class="btn-group account" type="number" v-model="item.num" />
                    <span class="iconfont icon-jia increase" @click="add(item)"></span>
                  </div>
                  <div class="buy-dele" v-if="show==false" @click="deletepro(n,m,item,index)">
                    删除
                  </div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div class="discount" >
        <ul v-if="lis[m]==0">
          <li v-for="(v,i) in sale" >
            <span class="left d-bg"></span>
            <span class="right d-bg"></span>
            <p class="d-text">{{v.text}}</p>
          </li>
        </ul>
        <div class="no-take l-text" >
          <p>本购物车暂不参加加价购活动</p>
        </div>
        <div class="l-send l-text" >
          <p>廉享嘉-产地直送负责发货（点击查看商品）</p>
          <span class="right d-bg"></span>
          <span></span>
        </div>
        <div class="pd-back ">
          <p>
            <span class="list-icon"></span>
            不适用7天无理由退货 | 特惠品不可用券哦~
          </p>
          <!-- <div class="pd-count">
            <p>优惠:<span class="pd-price">￥0.0</span></p>
            <p>总金额(不含运费):<span class="pd-price">￥{{totalPrice}}</span></p>
          </div> -->
        </div>
        <!-- <div class="go-acount">
          <router-link to="">
            <button>去结算</button>
          </router-link>
        </div> -->
      </div>
      <div class="buy-down">
        <span :class="{check_box:true, 'checked':allCheck}" @click="allChoose()"></span>
        <div class="down-pay">
          <span>总计￥{{totalPrice}}</span>
          <button>去结算</button>
        </div>

      </div>
    </section>
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
        shop:[],
        sale:[],
        shop1:[],
        list:[],
        item:[],
        i:0,
        a:0,
        b:0,
        lis:[0,1],
        show1:[false,false,false,false,false,false],
        show:true,
        allCheck:false,
        totalPrice:0,//总金额
        checkAllItem:false,//全部选中
        check_goods:[]//已选的商品
      }
    },
    methods:{
      get(i){
        for(var i=0;i<this.list.length;i++){
          this.lis[i]=i;
          // console.log(i)
          // console.log(this.lis[i])
        }
      },
      // changeProduct(event){
      //   this.shop.map((item)=>{
      //     this.$set(item,'select',true);
      //      item.select=!item.select;
      //   })

      // },
      // get1(){
      //   console.log(this.check_goods)
      // },
      change(){
        this.show=!this.show
      },
      reduce(item){
        if(item.num<=0){
          item.num=0
        }else{
          item.num--;
        }
        this.getMoney()
      },
      add(item){
        item.num++
        this.getMoney()
      },
      // 删除
      // delete_num(v){
      //   this.check_goods.splice(,1);
      //   this.list.shop.splice(),1)
      // },
      // 全选
      // check_all(){
      //   if(this.check_goods.length>0){
      //     this.check_goods=[]
      //   }else{
      //     this.cart_list.forEach(item=>{
      //       this.check_goods.push(item)
      //     })
      //   }
      // }
      // add(id){
      //   this.$store.commit('add',id)
      // },
      // sub(id){
      // this.$store.commit('sub',id)
      // },
      // // 删除某一项
      // deleteProduct:function(i){
      //   this.list[0].shop.splice(i,1);
      //   this.calcTotalPrice();
      //   console.log(this.list[0].shop)
      //   //当某一项删除时，如果你选中了，这里也是要做计算总价格的
      // },
      // changeNumber:function(number,add){
      //   if(add<0){
      //     number.productQty--;
      //     if(number.productQty<'1'){
      //       number.productQty=1
      //     }else{
      //       number.productQty++
      //     }
      //     this.calcTotalPrice()
      //   }
      // },
      // // 单选
      checkSingle(item,index,n,m){  //i是父级的索引值  this.itemlist[i]

          var sum=0;
          this.b++
          let partsArr = this.list[m].shop;
          if(typeof(item.checked)=='undefined'){
              this.$set(item,"checked",true);
          }else{
              item.checked=!item.checked;
          }
          let tempArr=[];

          partsArr.forEach((item,index) => {
              if(item.checked){
                  tempArr.push(item);
              }
          });

          if(partsArr.length==tempArr.length){
              this.show1[m]=true;
          }else{
              this.show1[m]=false;
          }
          this.getMoney(item,index,n,m)
          console.log(n)
      },
      // 店铺全选
      checkall(n,m){
          this.show1[m] = !this.show1[m]
          var itemcheck = this.list[m].shop
          console.log(this.show1)

          if(this.show1[m]){
             for(var m in itemcheck){
                 this.$set(itemcheck[m],'checked',true)

             }
          }else{
              for(var m in itemcheck){
                 this.$set(itemcheck[m],'checked',false)
             }
          }
          this.getMoney(n,m)
      },
      // 全选
      allChoose: function(){
          this.allCheck=!this.allCheck;
          if(this.allCheck){
              console.log(this.list)
              this.list.forEach( (n,m)=>{
                  // console.log(m)
                  this.show1[m]=true;
                  var partsList =this.list[m].shop;
                  partsList.forEach((item,index)=>{
                      item.checked=true;
                  })
              })
          }
          else{
               this.list.forEach( (n,m)=>{
                  // console.log(m)
                  this.show1[m]=false;
                  var partsList =this.list[m].shop;
                  partsList.forEach((item,index)=>{
                      item.checked=false;
                  })
              })
          }
          this.getMoney()
      },
      // 总额
      getMoney:function(n,m){
        this.totalPrice=0;
        this.list.forEach((n,m)=>{
          this.list[m].shop.forEach((item,index)=>{
            // console.log(index)
            // console.log('m='+m)
            if(item.checked){
              this.totalPrice+=item.price*item.num;
            }
          })
          return this.totalPrice
        })
      },
      // 删除商品
      deletepro(n,m,item,index){
        let partsArr = this.list;
        let str=this.list[m].shop[index].id
        // console.log(str)
        this.list[m].shop.splice(index,1)
          // let arr= [];
          // let storeDelist=[]
          // this.list.forEach((n,m)=>{
          //     let storelist=this.list[m].shop;
              // console.log(storelist)
          //     let storeDelList =[];
              // this.list[m].shop.forEach((item,index)=>{   //店铺
                  // console.log(str.id)
          //         this.list[m].shop.splice(index,1)

              // })
          //     console.log(storeDelList)
          // })
          // console.log(arr)
          // console.log('storeDelList的长度  '+storeDelList.length)
          // if(arr.length==tempArr.length){
          //     Toast({
          //         message: '请选择要删除的商品',
          //         position: 'bottom',
          //         duration: 2000
          //     });
          // }
           this.getMoney()
      },

    },
    computed:{
      // 总价
      // total_price(){
      //   let price=0;
      //   this.check_goods.forEach(item=>{
      //     price+=Number(item.price)*Number(item.num)
      //   })
      //   return price
      // },
      // // 数量
      // total_num(){
      //   let t_num=0;
      //   this.check_goods.forEach(item=>{
      //     t_num+=Number(item.num)
      //   })
      //   return t_num
      // },
      // isSelectAll:function(){
      //   return this.shop.every(function(val){
      //     return val.select
      //   })
      // },
    //   getTotal:function(){
    //           //获取productList中select为true的数据。
    //           var _shop=this.shop.filter(function (val) { return val.select}),totalPrice=0;
    //           for(var i=0,len=_shop.length;i<len;i++){
    //               //总价累加
    //               totalPrice+=_shop[i].num*_shop[i].price;
    //               console.log(totalPrice)
    //           }
    //           //选择产品的件数就是_proList.length，总价就是totalPrice
    //           return {totalNum:_shop.length,totalPrice:totalPrice}
    //       }
    },
    mounted(){
      // var _this=this;
      // //为productList添加select（是否选中）字段，初始值为true
      //  this.shop.map(function (item) {
      //      _this.$set(item, 'select', true);
      //  })
      this.$http.get('./data/buy.json')
      		  .then((response)=> {
      		    // this.pay=response.data.pay;
              // this.shop=response.data.shop;
              this.sale=response.data.sale;
              this.list=response.data.list;
              // console.log(response.data.list)
      		  })
      		  .catch(function (error) {
      		    console.log(error);
      		  })
    }
  }
</script>

<style scoped>
  #buy{
    background-color: #eee;
  }
  .car-content{
    margin-bottom: 10px;
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
  /* 店铺 */
  .buy-select{
    background-color: #fff;
  }
  .top-bar{
    border-bottom: 1px solid #b5b5b5;
    width: 100%;
    position: relative;
  }
  .top-bar h2{
    height: 45px;
    line-height: 45px;
  }
  .check_box{
    border:1px solid #C4C4C4;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    position: absolute;
    left: 10px;
    top:50%;
    transform: translateY(-50%);
  }
  .checked{
    background-image: url('../assets/images/check.png');
    background-size: 100% 100%;
  }
  .selectall{
    position: absolute;
    top:50%;
    left:35px;
    transform: translateY(-50%);
  }
  .edit{
    display: inline-block;
    width: 40px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right:10px;
  }
  .buy-edit{
    display: block;
  }
  /* 商品清单 */
  .shop-list{
    background-color: #fff;
  }
  .buy-pd{
    text-align: left;
  }
  .buy-pd ol li{
    overflow: hidden;
    margin: 0px ;
    padding: 10px 0px 10px 35px;
    border-bottom: 1px dashed #d9d8d1;
    position: relative;
  }
  .list-content .send{
    color: #7fb200;
  }
  .buy-pd li a{
    display: block;
    float: left;
    width: 60px;
    height: 60px;
    border: 1px solid #d9d8d1;
  }
  .buy-pd img{
    width: 100%;

  }
  .buy-pd h3{
    color: #4B566A;
    font-size: 12px;
    font-weight: 700;
    padding: 0px 0px 10px 10px;
  }
  .buy-content{
   width: 80%;
   float: left;
  }
  .money-list{
    padding-left: 10px;
    color: #666;
  }
  .money-list p{
    display: inline-block;
    width: 100px;
  }
  .pay-list{
    background-color: #fff;
  }
  .list-icon{
    display: inline-block;
    background-position: -44px -48px;
    width: 12px;
    height: 12px;
    margin: 0 3px 0 3px;
    background-image: url('../assets/images/s-bg2.png');
    background-repeat: no-repeat;
    background-size: 60px 700px;
  }
  .sale-price{
    color:red;
  }
  .buy-del{
    overflow: hidden;
    padding-left: 10px;
    padding-top:5px;
  }
  .buy-acount{
    float: left;
  }
  .buy-dele{
    border:1px solid #0077AA;
    float: right;
    height: 17px;
    line-height: 17px;
    min-width: 74px;
    font-size: 12px;
    color: #333;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .decrease, .increase{
    float: left;
    width: 17px;
    height: 16px;
    line-height: 15px;
    text-align: center;
    border: 1px solid #d8d8d8;
    font-size: 14px;
    color: #000;
    background-image: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#ededed));
  }
  .account{
    border: 1px solid #d8d8d8;
    width: 40px;
    height: 16px;
    text-align: center;
    float: left;
    border-left: none;
    border-right: 0;
  }
  .acount-num{
    float: left;
  }
  /* 优惠*/
  .discount{
    background-color: #fff;
    position: relative;
  }
  .discount ul{
    margin-bottom: 10px;
  }
  .discount li{
    margin:0px;
    margin: 0px 10px;
    position: relative;
    min-height: 40px;
    border-top: 1px dashed #E3E3E3;
  }
  .discount .d-text{
    padding: 8px 10px 0px 0px;
    padding-left: 40px;
    min-height: 25px;
    text-align: left;

  }
  .discount .left{
    display: inline-block;
    background-position: 0 -63px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .discount .right{
    background-image: url('../assets/images/s-bg.png');
    background-repeat: no-repeat;
    background-size: 25px 350px;
    background-position: 0 -66px;
    display: block;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);
  }
  .d-bg{
    background-image: url('../assets/images/s-bg2.png');
    background-repeat: no-repeat;
    background-size: 60px 700px;
  }
  /* 退货 */
  .pd-back{
    margin:0px 10px;
    padding: 10px 0px;
    border-top: 1px dashed #E3E3E3;
  }
  .pd-back p{
    text-align: left;
    color: #666;
    font-size: 12px;
  }
  .pd-count p{
    font-size: 14px;
  }
   .pd-price{
    color: red;
  }
  .go-acount{
    margin:0px 10px;
    padding: 10px 0px;
    border-top: 1px dashed #E3E3E3;
  }
  .go-acount a{
    display: inline-block;
    width: 100%;
  }
  .go-acount button{
    width: 100%;
    height: 34px;
    line-height: 34px;
    border-style: none;
    outline-style: none;
    background-color: #ff8143;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
  }
  .l-text{
    margin:0px 10px;
    padding: 10px 0px;
    border-top: 1px dashed #E3E3E3;
    color:red;
    position: relative;
  }
  .l-text p{
    text-align: left;

  }
  /* 底部购物车 */
  .buy-down{
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height:50px ;
    line-height: 50px;
    border:1px solid #0077AA;
    overflow: hidden;
    background-color: #fff;
    border:1px solid #eee;
  }
  .buy-down button{
    height: 100%;
    width: 100px;
    background-color: #ff8143;
    color: #fff;
    border-radius: 3px;
    text-align: center;
    cursor: pointer;
    outline-style: none;
    border-style: none;
  }
  .buy-down .down-pay{
    float: right;
    width: 200px;
    height: 100%;
    text-align: right;
  }
</style>
