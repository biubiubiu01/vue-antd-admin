import mainLayout from '@/layouts/mainLayout';

const componentsRouter = {
  name: 'components',
  path: '/components',
  component: mainLayout,
  redirect: '/components/vr',
  meta: {
    title: '组件',
    icon: 'component',
    role: 36
  },
  children: [
    {
      name: 'vr',
      path: '/components/vr',
      component: () => import('@/views/components/vr/index'),
      meta: { title: '全景图', role: 23 }
    },
    {
      name: 'editor',
      path: '/components/editor',
      component: () => import('@/views/components/editor/index'),
      meta: { title: '富文本编辑器', role: 24 }
    },
    {
      name: 'lottery',
      path: '/components/lottery',
      component: () => import('@/views/components/lottery/index'),
      meta: { title: '抽奖页', role: 26 }
    },
    {
      name: 'table',
      path: '/components/table',
      component: () => import('@/views/components/table/index'),
      meta: { title: 'Table表', role: 27 }
    },
    {
      name: 'form',
      path: '/components/form',
      component: () => import('@/views/components/form/index'),
      meta: { title: '表单页', role: 28 }
    },
    {
      name: 'loading',
      path: '/components/loading',
      component: () => import('@/views/components/loading/index'),
      meta: { title: 'Loading', role: 29 }
    },
    {
      name: 'uploadExcel',
      path: '/components/uploadExcel',
      component: () => import('@/views/components/uploadExcel/index'),
      meta: { title: '上传Excel', role: 30 }
    },
    {
      name: 'uploadAvatar',
      path: '/components/uploadAvatar',
      component: () => import('@/views/components/uploadAvatar/index'),
      meta: { title: '头像上传', role: 31 }
    },
    {
      name: 'webSocket',
      path: '/components/webSocket',
      component: () => import('@/views/components/webSocket/index'),
      meta: { title: 'webSocket', role: 32 }
    },
    {
      name: '截屏',
      path: '/components/screenshot',
      component: () => import('@/views/components/screenshot/index'),
      meta: { title: '截屏', role: 33 }
    }
  ]
};

export default componentsRouter;
