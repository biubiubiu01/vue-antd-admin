const tokens = {
  admin: {
    token: 'admin20201013',
  },
  test: {
    token: 'test20201013',
  },
}
const Mock = require('mockjs')

const phoneCode = Mock.mock('@natural(147895,995425)')

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: (config) => {
      const { username, password } = config.body
      const token = tokens[username]
      if (!token) {
        return {
          code: 403,
          message: '账号不存在！',
        }
      }
      return {
        data: token,
        code: 200,
        message: '登录成功',
      }
    },
  },
  {
    url: '/user/testCode',
    type: 'post',
    response: (config) => {
      const { phone, code } = config.body
      if (phoneCode == code) {
        return {
          data: tokens['admin'],
          code: 200,
          message: '验证码输入正确',
        }
      } else {
        return {
          code: 403,
          message: '验证码输入错误',
        }
      }
    },
  },
  {
    url: '/user/code',
    type: 'post',
    response: (config) => {
      return {
        data: phoneCode,
        code: 200,
        message: '获取验证码成功',
      }
    },
  },
]
