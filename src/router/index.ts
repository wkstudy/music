import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
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
    },
    {
      // 歌单
      path: '/songsheet',
      name: 'songsheet',
      component: () => import('@/page/SongSheet.vue'),
    }
  ],
})

export default router;