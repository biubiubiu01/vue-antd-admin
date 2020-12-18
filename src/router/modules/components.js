import mainLayout from '@/layouts/mainLayout';

const componentsRouter = {
  name: 'components',
  path: '/components',
  component: mainLayout,
  redirect: '/components/vr',
  meta: {
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      name: 'vr',
      path: '/components/vr',
      component: () => import('@/views/components/vr/index'),
      meta: { title: '全景图', role: ['admin', 'test'] }
    },
    {
      name: 'editor',
      path: '/components/editor',
      component: () => import('@/views/components/editor/index'),
      meta: { title: '富文本编辑器' }
    },
    {
      name: 'Markdown',
      path: '/components/markdown',
      component: () => import('@/views/components/markdown/index'),
      meta: { title: 'Markdown' }
    },
    {
      name: 'lottery',
      path: '/components/lottery',
      component: () => import('@/views/components/lottery/index'),
      meta: { title: '抽奖页' }
    },
    {
      name: 'table',
      path: '/components/table',
      component: () => import('@/views/components/table/index'),
      meta: { title: 'Table表' }
    }
    // {
    //   name: 'loading',
    //   path: '/components/loading',
    //   component: () => import('@/views/components/loading/index'),
    //   meta: { title: 'Loading' }
    // }
  ]
};

export default componentsRouter;
