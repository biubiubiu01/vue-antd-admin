const tokens = {
  admin: {
    token: 'admin20201013'
  },
  test: {
    token: 'test20201013'
  },
  editor: {
    token: 'editor20201013'
  }
};

const userInfo = {
  admin20201013: {
    username: 'admin',
    location: 'Wuhan',
    position: '混元太极门掌门人',
    role: '超级管理员',
    label: '年轻人不讲武德',
    skill: '闪电五连鞭'
  },
  test20201013: {
    username: 'test',
    location: 'Wuhan',
    position: '四皇',
    role: '普通用户',
    label: '给我一个面子',
    skill: '面子果实'
  },
  editor20201013: {
    username: 'editor',
    location: 'Wuhan',
    position: '金牌作者',
    role: '作家',
    label: '暂无',
    skill: '暂无'
  }
};

const Mock = require('mockjs');

const phoneCode = Mock.mock('@natural(147895,995425)');

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username, password } = config.body;
      const token = tokens[username];
      if (!token) {
        return {
          code: 403,
          message: '账号不存在！'
        };
      }
      return {
        data: token,
        code: 200,
        message: '登录成功'
      };
    }
  },
  {
    url: '/user/logout',
    type: 'post',
    response: config => {
      return {
        code: 200,
        message: '退出成功！'
      };
    }
  },
  {
    url: '/user/testCode',
    type: 'post',
    response: config => {
      const { phone, code } = config.body;
      if (phoneCode == code) {
        return {
          data: tokens['admin'],
          code: 200,
          message: '验证码输入正确'
        };
      } else {
        return {
          code: 403,
          message: '验证码输入错误'
        };
      }
    }
  },
  {
    url: '/user/code',
    type: 'post',
    response: config => {
      return {
        data: phoneCode,
        code: 200,
        message: '获取验证码成功'
      };
    }
  },
  {
    url: '/user/userInfo',
    type: 'post',
    response: config => {
      const { token } = config.body;

      const info = userInfo[token];

      if (!token || !info) {
        return {
          code: 403,
          message: '用户信息不存在！'
        };
      }
      return {
        data: info,
        code: 200,
        message: '获取用户信息成功！'
      };
    }
  }
];
