<template>
  <div class="notice-wrapper">
    <a-list item-layout="vertical" :data-source="data" size="large">
      <a-list-item slot="renderItem" slot-scope="item">
        <a-list-item-meta>
          <p slot="title">
            {{ item.user }}
          </p>
          <a-avatar slot="avatar" :src="item.imgUrl" />
          <div slot="description">
            {{ item.description }}
            <div style="margin-top:8px">{{ item.time }}</div>
          </div>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: 'notice',
  data() {
    return {
      data: [
        {
          user: '系统管理员',
          description: '您的页面存在风险，请尽快解决。',
          imgUrl: require('../../../../../assets/nav/system.png'),
          time: '2020-11-16 09:25:45'
        },
        {
          user: '系统管理员',
          description: '您的页面存在样式问题，请优先解决。',
          imgUrl: require('../../../../../assets/nav/system.png'),
          time: '2020-11-12  15:32:15'
        },
        {
          user: '不知名用户',
          description: '加油，赶紧写完,相信自己。',
          imgUrl: require('../../../../../assets/nav/user.gif'),
          time: '2020-11-11  11:11:11'
        },
        {
          user: '系统管理员',
          description: '您还有很多页面要写，请注意进度。',
          imgUrl: require('../../../../../assets/nav/system.png'),
          time: '2020-11-10  12:18:16'
        },
        {
          user: '马掌门',
          description: '年轻人不讲武德，劝你们耗子尾汁！',
          imgUrl: require('../../../../../assets/nav/old.png'),
          time: '2020-11-10  13:18:16'
        },
        {
          user: '黑虎阿福',
          description: '乌鸦坐飞机，龙卷风摧毁停车场',
          imgUrl: require('../../../../../assets/nav/user.gif'),
          time: '2020-10-18  14:12:16'
        }
      ]
    };
  }
};
</script>
