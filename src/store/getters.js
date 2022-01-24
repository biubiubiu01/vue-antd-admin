const getters = {
  token: state => state.user.token,
  baseRoute: state => state.permission.routes,
  userInfo: state => state.user.accountInfo
};
export default getters;
