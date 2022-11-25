import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"




// 2. 定义路由配置
const routes = [
  {
    path: '/',
    component: () => import('./pages/muyu.vue'),

  },
  {
    path: '/shaoxiang',
    component: () => import('./pages/shaoxiang.vue'),

  },
  {
    path: '/qiuqian',
    component: () => import('./pages/qiuqian.vue'),

  },
  {
    path: '/toutai',
    component: () => import('./pages/toutai.vue'),

  },


  
  


  {
    path: '/TemplateHope2',
    component: () => import('./pages/TemplateHope2.vue'),
    children: [

    ]
  },
  


];

// 3. 创建路由实例
const router = createRouter({
  // 4. 采用hash 模式
  history: createWebHashHistory(),
  // 采用 history 模式
  // history: createWebHistory(),
  routes, //使用上方定义的路由配置
});

/*
// 路由守卫
router.beforeEach((to, from, next) => {
    const isLogin = localStorage.ele_login ? true : false;
    if (to.path == '/login') {
      next();
    } else {
      // 是否在登录状态下
      isLogin ? next() : next('/login');
    }
  });
*/


export default router
//导出router
