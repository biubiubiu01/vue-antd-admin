<template>
  <div class="scoket-container">
    <div class="chat-container">
      <div class="status">
        {{ socketStatus }}
      </div>
      <scroll-bar style="width:100%;height:400px;padding:6px 0 15px" ref="scrollBar">
        <p class="text-center">{{ newsList[newsList.length - 1].date }}</p>
        <div
          class="list-item"
          v-for="(item, index) in newsList"
          :key="index"
          :class="{ 'text-right': index % 2 === 0 }"
        >
          <div class="message myself" v-if="index % 2 == 0">{{ item.message }}</div>
          <a-avatar :src="item.imgUrl" :size="35" />
          <div class="message" v-if="index % 2 != 0" v-html="item.message"></div>
        </div>
      </scroll-bar>
    </div>
    <a-comment>
      <a-avatar slot="avatar" :src="imgUrl" alt="Han Solo" />
      <div slot="content">
        <a-form-item>
          <a-textarea :rows="3" @change="changeText" :value="textValue" />
        </a-form-item>
        <a-form-item>
          <a-button html-type="submit" type="primary" @click="sendNews">
            发送
          </a-button>
        </a-form-item>
      </div>
    </a-comment>
  </div>
</template>
<script>
const moment = require('moment');

export default {
  data() {
    return {
      errorTimes: 0,
      websock: null,
      imgUrl: require('../../../assets/nav/user.gif'),
      socketStatus: 'webSocket连接断开',
      newsList: [
        {
          user: 'admin',
          imgUrl: require('../../../assets/nav/user.gif'),
          message: 'hello',
          date: '2020-12-27 15:36:24'
        },
        {
          user: 'robot',
          imgUrl: require('../../../assets/nav/robot.png'),
          message: 'hello',
          date: '2020-12-27 15:36:24'
        }
      ],
      textValue: ''
    };
  },
  created() {
    this.init();
  },
  destroyed() {
    this.websock.close();
  },
  methods: {
    init() {
      if (typeof WebSocket === 'undefined') {
        alert('您的浏览器不支持socket');
        return;
      }
      this.websock = new WebSocket('ws://123.207.136.134:9010/ajaxchattest');
      this.websock.onmessage = this.websocketonmessage;
      this.websock.onopen = this.websocketonopen;
      this.websock.onerror = this.websocketonerror;
      this.websock.onclose = this.websocketclose;
    },
    websocketonopen() {
      this.errorTimes = 0;
      this.socketStatus = 'webSocket已连接';
    },
    //数据接收
    websocketonmessage(e) {
      this.socketStatus = '输入中...';

      setTimeout(() => {
        this.newsList.push({
          user: 'robot',
          imgUrl: require('../../../assets/nav/robot.png'),
          message: e.data,
          date: moment().format('YYYY-MM-DD HH:mm:ss')
        });
        this.socketStatus = 'webSocket已连接';
        this.$nextTick(() => {
          const boxDom = this.$refs['scrollBar'].wrap;
          boxDom.scrollTop = boxDom.scrollHeight;
        });
      }, 350);
    },
    //数据发送
    websocketsend(message) {
      this.websock.send(message);
      this.newsList.push({
        user: 'admin',
        imgUrl: require('../../../assets/nav/user.gif'),
        message: message,
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      });
      this.textValue = '';
    },
    websocketonerror() {
      if (this.errorTimes == 2) {
        this.$message.error('连接失败,请稍后重试');
        this.socketStatus = 'webSocket连接失败';
        return;
      }
      this.errorTimes++;
      console.log('连接失败,正在重新连接');
      this.init();
    },
    websocketclose(e) {
      this.socketStatus = 'webSocket连接断开';
      console.log('断开了连接', e);
    },
    changeText(e) {
      this.textValue = e.target.value;
    },
    sendNews() {
      if (!this.textValue) {
        this.$message.warning('输入内容不能为空');
        return;
      }
      this.websocketsend(this.textValue);
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-container {
  margin: 0 auto;
  background-color: #fff;
  .status {
    color: #fff;
    background: #1890ff;
    height: 35px;
    line-height: 35px;
    text-align: center;
  }
  .list-item {
    box-sizing: border-box;
    padding: 5px 15px;

    .message {
      background-color: #f0f2f5;
      margin-left: 8px;
      line-height: 32px;
      max-width: calc(100% - 100px);
      border-radius: 3px;
      display: inline-block;
      position: relative;
      padding: 0 12px;
      box-sizing: border-box;
    }
    .myself {
      margin-right: 8px;
    }
    .myself.message::before {
      border-right: 0;
      border-left: 6px solid #f0f2f5;
      left: unset;
      right: -6px;
    }

    .message::before {
      content: ' ';
      border-left: 0px solid #f0f2f5;
      border-top: 6px solid transparent;
      border-right: 6px solid #f0f2f5;
      border-bottom: 6px solid transparent;
      position: absolute;
      left: -6px;
      top: 12px;
    }
  }
}
</style>
