import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: 'about' */ '../views/AboutView.vue'),
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: 'about' */ '../views/TestView.vue'),
  },
  {
    path: '/products/:productId',
    component: () => import(/* webpackChunkName: 'about' */ '../views/ProductView.vue'),
    // children: [
    //   {
    //     path: 'comments',
    //     component: () => import(/* webpackChunkName: 'about' */ '../views/CommentView.vue'),
    //   },
    // ],
  },
  {
    path: '/products/:productId/comments',
    component: () => import(/* webpackChunkName: 'about' */ '../views/CommentView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router hook
router.beforeEach((to, from) => {
  console.log(to);
  console.log(from);
});

export default router;
