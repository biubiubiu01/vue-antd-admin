const tableData = [
  {
    id: 'admin00001',
    username: 'admin',
    password: '123456',
    role: 'admin',
    date: '2020-10-13',
    text: '系统管理员，拥有所有权限',
    key: 'admin'
  },
  {
    id: 'editor00001',
    username: 'editor',
    password: '123456',
    role: 'editor',
    date: '2020-10-13',
    text: 'admin签约金牌作家--马老师',
    key: 'editor'
  },
  {
    id: 'test00001',
    username: 'test',
    password: '123456',
    role: 'test',
    date: '2020-10-13',
    text: '不知名体验者，峡谷最快乐的男人',
    key: 'test'
  },
  {
    id: 'custom00001',
    username: 'custom',
    password: '123456',
    role: 'custom',
    date: '2020-10-13',
    text: '早安，打工人(自定义权限，路由权限由管理员分配)',
    key: 'custom11'
  },
  {
    id: 'custom00002',
    username: '黑虎阿福',
    password: '123456',
    role: 'custom',
    date: '2020-10-16',
    text: '乌鸦坐飞机',
    key: 'custom22'
  },
  {
    id: 'custom00003',
    username: '马大师',
    password: '123456',
    role: 'custom',
    date: '2020-10-18',
    text: '闪电五连鞭',
    key: 'custom33'
  },
  {
    id: 'custom00004',
    username: '张三',
    password: '123456',
    role: 'custom',
    date: '2020-10-20',
    text: '不知名用户张三',
    key: 'custom44'
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
        data: tableData,
        code: 200,
        message: '用户table获取成功'
      };
    }
  },
  {
    url: '/userManage/deleteTable',
    type: 'post',
    response: config => {
      const { id } = config.body;

      let index = tableData.findIndex(item => item.id == id);
      tableData.splice(index, 1);

      return {
        code: 200,
        message: '删除成功'
      };
    }
  }
];
