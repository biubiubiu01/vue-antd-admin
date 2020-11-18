import mainLayout from '@/layouts/mainLayout';

const nestRouter = {
  name: 'nest',
  path: '/nest',
  component: mainLayout,
  redirect: '/nest/menu1',
  meta: {
    role: ['admin', 'test'],
    title: '嵌套路由',
    icon: 'nest'
  },
  children: [
    {
      name: 'menu1',
      path: '/nest/menu1',
      component: () => import('@/views/nest/menu1/index'),
      redirect: '/nest/menu1/menu1-1',
      meta: { title: '路由菜单1' },
      children: [
        {
          name: 'menu1-1',
          path: '/nest/menu1/menu1-1',
          component: () => import('@/views/nest/menu1/menu1-1/index'),
          meta: { title: '路由菜单1-1' }
        },
        {
          name: 'menu1-2',
          path: '/nest/menu1/menu1-2',
          component: () => import('@/views/nest/menu1/menu1-2/index'),
          meta: { title: '路由菜单1-2' },
          redirect: '/nest/menu1/menu1-2/menu1-2-1',
          children: [
            {
              name: 'menu1-2-1',
              path: '/nest/menu1/menu1-2/menu1-2-1',
              component: () => import('@/views/nest/menu1/menu1-2/menu1-2-1/index'),
              meta: { title: '路由菜单1-2-1' }
            }
          ]
        }
      ]
    },
    {
      name: 'menu2',
      path: '/nest/menu2',
      component: () => import('@/views/nest/menu2/index'),
      meta: { title: '路由菜单2' }
    }
  ]
};

export default nestRouter;
