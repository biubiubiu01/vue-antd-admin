import router from './router';
import { getCache } from '@/utils/session';
import getPageTitle from '@/utils/getPageTitle';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { message } from 'ant-design-vue';
import store from './store';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const isLogin = getCache('TOKEN');
  if (to.path == '/login') {
    next();
    NProgress.done();
  } else {
    if (!isLogin) {
      next('/login');
    } else {
      const userInfo = store.state.user.accountInfo;
      if (userInfo) {
        next();
        NProgress.done();
      } else {
        try {
          const { username } = await store.dispatch('user/getInfo');
          const accountRoute = await store.dispatch('permission/getRoute', username);

          router.addRoutes(accountRoute);
          next({ ...to, replace: true });
          NProgress.done();
        } catch {
          message.error('获取用户信息失败');
          next('/login');
          NProgress.done();
        }
      }
    }
  }
});

router.afterEach(() => {
  NProgress.done();
});
