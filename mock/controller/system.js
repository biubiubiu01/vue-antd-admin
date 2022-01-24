const { userData: tableData } = require('../constant');
const moment = require('moment');

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
        data: list,
        code: 200,
        message: '用户table获取成功！'
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
        message: '删除成功！'
      };
    }
  },
  {
    url: '/userManage/batchDeleteTable',
    type: 'post',
    response: config => {
      const { batchId } = config.body;
      const arr = batchId.split(',');
      arr.forEach(item => {
        const index = tableData.findIndex(j => j.id == item);
        tableData.splice(index, 1);
      });

      return {
        code: 200,
        message: '删除成功！'
      };
    }
  },
  {
    url: '/userManage/editTable',
    type: 'post',
    response: config => {
      const { id, role, username, password, text, location, position, skill, label } = config.body;
      tableData.forEach(item => {
        if (item.id == id) {
          Object.assign(item, {
            role,
            username,
            password,
            text,
            location,
            position,
            skill,
            label
          });
        }
      });

      return {
        code: 200,
        message: '修改成功！'
      };
    }
  },
  {
    url: '/userManage/addTable',
    type: 'post',
    response: config => {
      const { role, username, password, text, location, position, label, skill } = config.body;
      const id = parseInt(Math.random() * 1000000000000);
      const date = moment(new Date())
        .add(0, 'year')
        .format('YYYY-MM-DD');
      tableData.push({
        role,
        username,
        password,
        text,
        id,
        date,
        key: role,
        location,
        position,
        label,
        skill
      });

      return {
        code: 200,
        message: '添加成功！'
      };
    }
  }
];
