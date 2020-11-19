const tableHead = [
  {
    column_description: 'id',
    column_name: 'id'
  },
  {
    column_description: '用户名',
    column_name: 'username'
  },
  {
    column_description: '密码',
    column_name: 'password'
  },
  {
    column_description: '权限',
    column_name: 'role'
  },
  {
    column_description: '创建日期',
    column_name: 'date'
  },
  {
    column_description: '描述',
    column_name: 'text'
  }
];
const tableData = [
  {
    id: 'admin00001',
    username: 'admin',
    password: '123456',
    role: 'admin',
    date: '2020-10-13',
    text: '系统管理员，拥有所有权限'
  },
  {
    id: 'editor00001',
    username: 'editor',
    password: '123456',
    role: 'editor',
    date: '2020-10-13',
    text: 'admin签约金牌作家--马老师'
  },
  {
    id: 'test00001',
    username: 'test',
    password: '123456',
    role: 'test',
    date: '2020-10-13',
    text: '不知名体验者，峡谷最快乐的男人'
  },
  {
    id: 'custom00001',
    username: 'custom',
    password: '123456',
    role: 'custom',
    date: '2020-10-13',
    text: '早安，打工人(自定义权限，路由权限由管理员分配)'
  }
];

function filterTable(list, key, value) {
  if (key == 'role') {
    return list.filter(item => item[key] == value);
  } else if (key == 'username') {
    return list.filter(item => item[key].search(value) != -1);
  } else {
    return list.filter(item => {
      return value[0] < item[key] && value[1] > item[key];
    });
  }
}

module.exports = [
  {
    url: '/userManage/userTable',
    type: 'post',
    response: config => {
      const { role, username, startTime, endTime } = config.body;
      let list = tableData;
      if (role) {
        list = filterTable(list, 'role', role);
      }
      if (username) {
        list = filterTable(list, 'username', username);
      }
      if (startTime && endTime) {
        list = filterTable(list, 'date', [startTime, endTime]);
      }

      return {
        data: {
          tableHead,
          tableData: list,
          total: list.length
        },
        code: 200,
        message: '用户table获取成功'
      };
    }
  }
];
