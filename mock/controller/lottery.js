const Mock = require('mockjs');

const prizeData = [
  {
    number: 8,
    prize: '法拉利三折折扣券',
    angle: 11,
    win: true,
    message: '恭喜您，你获得法拉利三折折扣券一张'
  },
  {
    number: 7,
    prize: '华为Mate40',
    angle: 51,
    win: true,
    message: '恭喜您，你获得华为Mate40手机一部'
  },
  {
    number: 16,
    prize: '再来一次',
    angle: 91,
    win: true,
    message: '恭喜您，你获得再来一次的机会'
  },
  {
    number: 12,
    prize: 'Vip会员',
    angle: 179,
    win: true,
    message: '恭喜您，您获得Vip会员大礼包一份'
  },

  {
    number: 1,
    prize: 'iPhone手机',
    angle: 211,
    win: true,
    message: '恭喜您，您获得iPhone手机一部'
  },
  {
    number: 4,
    prize: '1000元现金红包',
    angle: 251,
    win: true,
    message: '恭喜您，您获得1000元现金红包一份'
  },
  {
    number: 13,
    prize: '888元现金红包',
    angle: 291,
    win: true,
    message: '恭喜您，您获得888元现金红包'
  },
  {
    number: 3,
    prize: '兰博基尼5元代金券',
    angle: 331,
    win: true,
    message: '恭喜您，你获得兰博基尼5元代金券'
  }
];

function prizeList() {
  const random = Mock.Random.natural(0, 20); //中奖号码随机生成
  const offset = Mock.Random.natural(10, 30); //指针偏移角度
  let arr = prizeData.find(item => item.number === random) || {
    angle: 131,
    win: false,
    message: '很遗憾,您没有获得奖品，再试一次吧'
  };
  let temp = { ...arr };
  temp.angle += offset;
  return temp;
}

const nineData = [
  {
    number: 0,
    win: true,
    message: '恭喜您，你获得精美大礼包一份'
  },
  {
    number: 1,
    win: true,
    message: '恭喜您，你获得华为手机一部'
  },
  {
    number: 2,
    win: true,
    message: '恭喜您，你获得保时捷50元代金券'
  },
  {
    number: 3,
    win: true,
    message: '恭喜您，您获得劳斯莱斯雨伞'
  },
  {
    number: 6,
    win: true,
    message: '恭喜您，您获得9999元现金红包'
  },
  {
    number: 5,
    win: true,
    message: '恭喜您，您获得iPhone手机一部'
  },
  {
    number: 4,
    win: true,
    message: '恭喜您，你获得888元现金红包'
  }
];

function nineList() {
  const random = Mock.Random.natural(0, 15); //中奖号码随机生成
  return (
    nineData.find(item => item.number === random) || {
      number: 7,
      win: false,
      message: '很遗憾,您没有获得奖品，再试一次吧'
    }
  );
}

module.exports = [
  {
    url: '/lottery/circular',
    type: 'post',
    response: () => {
      const temp = prizeList();
      return {
        data: temp,
        code: 200,
        message: temp.message
      };
    }
  },
  {
    url: '/lottery/nineLucky',
    type: 'post',
    response: () => {
      const temp = nineList();
      return {
        data: temp,
        code: 200,
        message: temp.message
      };
    }
  }
];
