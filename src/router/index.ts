import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      // 首页
      path: '/index',
      name: 'index',
      redirect: '/recommend',
      component: () => import('@/page/Index.vue'),
      children: [
        {
          path: '/recommend',
          name: 'recommend',
          component: () => import('@/page/Recommend.vue'),
        },
        {
          path: '/singer',
          name: 'singer',
          component: () => import('@/page/Singer.vue'),
        },
        {
          path: '/rank',
          name: 'rank',
          component: () => import('@/page/Rank.vue'),
        }
      ]
    }
  ],
})

export default router;