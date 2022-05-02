import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  title: 'React-Demo',
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/article', component: '@/pages/article/index',
    }
  ],
  fastRefresh: {},
  qiankun: {
    slave: {}
  }
});
