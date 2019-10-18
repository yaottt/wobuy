import VueRouter from 'vue-router'

import index from '../../component/index.vue'
import super1 from '../../component/super.vue'
import day from '../../component/day.vue'
import food from '../../component/food.vue'
import addr from '../../component/addr.vue'
import register from '../../component/register.vue'
import login from '../../component/login.vue'
import tologin from '../../component/tologin.vue'
import otherlogin from '../../component/otherlogin.vue'
import forget from '../../component/forget.vue'
import fresh from '../../component/fresh.vue'
import details from '../../component/details.vue'
import information from '../../component/information.vue'
import comment from '../../component/comment.vue'
import shopping from '../../component/shopping.vue'
import money from '../../component/money.vue'
import buy from '../../component/buy.vue'
import store from '../../component/store.vue'
export default new VueRouter({
  routes:[
    {
      path:'/',component:index,
      children:[
        {
          path:'/super',component:super1,
        },
        {
          path:'/food',component:food,
        },
        {
          path:'/day',component:day,
        }
      ],
       redirect:'/addr'
    },
    {
      path:'/addr',component:addr,
    },
    {
      path:'/index',component:index,
    },
    {
      path:'/register',component:register,
    },
    {
      path:'/login',component:login,
    },
    {
      path:'/tologin',component:tologin,
    },
    {
      path:'/otherlogin',component:otherlogin,
    },
    {
      path:'/forget',component:forget,
    },
    {
      path:'/fresh',component:fresh,
    },
    {
      path:'/details',component:details,
      children:[
        {
          path:'/information',component:information,
        },
        {
          path:'/comment',component:comment,
        },
        {
          path:'/shopping',component:shopping,
        }
      ],
      redirect:'/shopping'
    },
    {
      path:'/money',component:money,
    },
    {
      path:'/buy',component:buy,
    },
    {
      path:'/store',component:store,
    },
    {
      path:'/*',redirect:'/index'
    }
  ]
})
