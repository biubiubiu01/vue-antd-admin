import mainLayout from '@/layouts/mainLayout';

const componentsRouter = {
  name: 'components',
  path: '/components',
  component: mainLayout,
  redirect: '/components/vr',
  meta: {
    role: ['admin', 'test'],
    title: '组件',
    icon: 'component'
  },
  children: [
    {
      name: 'vr',
      path: '/components/vr',
      component: () => import('@/views/components/vr/index'),
      meta: { title: '全景图' }
    }
  ]
};

export default componentsRouter;
