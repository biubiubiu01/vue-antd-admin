const getters = {
  token: state => state.user.token,
  baseRoute: state => state.permission.routes
};
export default getters;
