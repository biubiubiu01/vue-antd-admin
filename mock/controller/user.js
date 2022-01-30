const Mock = require('mockjs');
const { userData, roleData } = require('../constant');

const phoneCode = Mock.mock('@natural(147895,995425)');

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { username, password } = config.body;
      const userItem = userData.find(item => item.username == username);
      if (!userItem) {
        return {
          code: 403,
          message: '账号不存在！'
        };
      }
      const roleList=roleData.filter(item=>userItem.role.includes(item.role))
      let roleIds=[]
      roleList.forEach(item=>{
         item.roleIds.split(',').forEach(val=>{
            if(roleIds.indexOf(val)==-1){
               roleIds.push(val)
            }
         })
      })
      return {
        data: {
          token: userItem.role + '20220120' + parseInt(Math.random() * 100000),
          userInfo: {
            ...userItem,
            roleIds:roleIds.join(','),
            roleString: roleList.map(item=>item.roleString).join(',')
          }
        },
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
  }
];
