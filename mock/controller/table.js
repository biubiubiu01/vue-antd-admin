const Mock = require('mockjs');

let tableList = [];

for (let i = 0; i < 111; i++) {
  tableList.push(
    Mock.mock({
      id: '@natural(1000000,99999999)',
      name: '@first',
      'status|1': ['待付款', '待发货', '已发货', '已收货', '已评价'],
      date: Mock.Random.datetime(),
      'text|1': ['快点到，越快越好', '请尽快发货', '尽量轻拿轻放', '到了打电话', ''],
      money: '@natural(50,3500)'
    })
  );
}

module.exports = [
  {
    url: '/table/tableList',
    type: 'post',
    response: config => {
      const { name, status, page = 1, size = 15 } = config.body;
      let list = tableList;
      if (name) {
        list = list.filter(item => item.name.toLocaleLowerCase().search(name.toLocaleLowerCase()) != -1);
      }

      if (status) {
        list = list.filter(item => item.status == status);
      }

      const pageList = list.filter((item, index) => index < size * page && index >= size * (page - 1));
      return {
        data: {
          list: pageList,
          total: list.length,
          page: page,
          size: size
        },
        code: 200,
        message: 'table获取成功！'
      };
    }
  },
  {
    url: '/table/deleteTable',
    type: 'post',
    response: config => {
      const { id } = config.body;
      let list = tableList;

      let index = list.findIndex(item => item.id == id);
      list.splice(index, 1);
      return {
        code: 200,
        message: '删除成功'
      };
    }
  },
  {
    url: '/table/batchDeleteTable',
    type: 'post',
    response: config => {
      const { batchId } = config.body;
      let list = tableList;
      const arr = batchId.split(',');
      arr.forEach(item => {
        const index = list.findIndex(j => j.id == item);
        list.splice(index, 1);
      });

      return {
        code: 200,
        message: '删除成功！'
      };
    }
  },
  {
    url: '/table/editTable',
    type: 'post',
    response: config => {
      const { id, text } = config.body;
      let list = tableList;
      list.forEach(item => {
        if (item.id == id) {
          item.text = text;
        }
      });

      return {
        code: 200,
        message: '修改成功！'
      };
    }
  }
];
