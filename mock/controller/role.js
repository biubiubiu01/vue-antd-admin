let { roleData } = require('../constant');

module.exports = [
  {
    url: '/roleManage/roleTableData',
    type: 'post',
    response: config => {
      return {
        data: roleData,
        code: 200,
        message: '角色table获取成功！'
      };
    }
  },
  {
    url: '/roleManage/deleteRole',
    type: 'post',
    response: config => {
      const { id } = config.body;
      let index = roleData.findIndex(item => item.id == id);
      roleData.splice(index, 1);

      return {
        code: 200,
        message: '删除成功！'
      };
    }
  },
  {
    url: '/roleManage/editRole',
    type: 'post',
    response: config => {
      const { id, roleString, text, roleIds } = config.body;
      roleData.forEach(item => {
        if (item.id == id) {
          Object.assign(item, {
            roleString,
            text,
            roleIds
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
    url: '/roleManage/addRole',
    type: 'post',
    response: config => {
      const { roleString, text, roleIds } = config.body;
      const id = parseInt(Math.random() * 1000000000000);
      const role = 'custom' + parseInt(Math.random() * 100000);
      roleData.push({
        id,
        roleString,
        text,
        key: role,
        role: role,
        roleIds
      });

      return {
        code: 200,
        message: '添加成功！'
      };
    }
  },
  {
    url: '/roleManage/getRole',
    type: 'post',
    response: config => {
      const { role } = config.body;
      let str = roleData.find(item => item.role == role);
      if (str) {
        return {
          code: 200,
          data: str,
          message: '查询成功'
        };
      }
    }
  }
];
