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
      meta: { title: '抽奖页', role: ['admin', 'test'] }
    },
    {
      name: 'table',
      path: '/components/table',
      component: () => import('@/views/components/table/index'),
      meta: { title: 'Table表', role: ['admin', 'test'] }
    },
    {
      name: 'form',
      path: '/components/form',
      component: () => import('@/views/components/form/index'),
      meta: { title: '表单页', role: ['admin', 'test'] }
    },
    {
      name: 'loading',
      path: '/components/loading',
      component: () => import('@/views/components/loading/index'),
      meta: { title: 'Loading', role: ['admin', 'test'] }
    },
    {
      name: 'uploadExcel',
      path: '/components/uploadExcel',
      component: () => import('@/views/components/uploadExcel/index'),
      meta: { title: '上传Excel', role: ['admin', 'test'] }
    },
    {
      name: 'uploadAvatar',
      path: '/components/uploadAvatar',
      component: () => import('@/views/components/uploadAvatar/index'),
      meta: { title: '头像上传', role: ['admin', 'test'] }
    },
    {
      name: 'webSocket',
      path: '/components/webSocket',
      component: () => import('@/views/components/webSocket/index'),
      meta: { title: 'webSocket', role: ['admin', 'test'] }
    },
    {
      name: '截屏',
      path: '/components/screenshot',
      component: () => import('@/views/components/screenshot/index'),
      meta: { title: '截屏', role: ['admin', 'test'] }
    }
  ]
};

export default componentsRouter;
