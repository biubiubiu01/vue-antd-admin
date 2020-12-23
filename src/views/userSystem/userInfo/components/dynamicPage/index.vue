<template>
  <div class="dynamic-wrapper">
    <div class="active-wrapper">
      <div class="dynamic-title">活跃度统计图</div>
      <active-line />
    </div>
    <div class="timeline-wrapper">
      <div class="dynamic-title">近期动态</div>
      <a-timeline class="padding24" mode="left" style="margin-top:35px">
        <a-timeline-item v-for="(item, index) in timelineList" :key="index" :color="item.color">
          <p>{{ item.time }}</p>
          {{ item.title }}
        </a-timeline-item>
      </a-timeline>
    </div>
  </div>
</template>

<script>
import activeLine from './activeLine.vue';
export default {
  name: 'dynamic',
  components: { activeLine },
  data() {
    return {
      timelineList: [
        {
          title: '学习下node写个后台，把这个项目后台写了',
          time: '以后...',
          color: 'red'
        },
        {
          title: '',
          time: '...',
          color: 'gray'
        },
        {
          title: '添加页面loading模块，方法有点low，写了很多个组件，看到可以用svg去时间loading动画，后续研究下再改进',
          time: '2020-12-23',
          color: 'gray'
        },
        {
          title: '异步加载AMap,去除本地的kriging',
          time: '2020-12-08',
          color: 'gray'
        },
        {
          title: '优化webpack',
          time: '2020-12-05',
          color: 'gray'
        },
        {
          title: '打王者，休息休息',
          time: '2020-11-28',
          color: 'gray'
        },
        {
          title: '完成系统设置的一些功能',
          time: '2020-11-21',
          color: 'gray'
        },
        {
          title: '完成页面权限，分为admin、test、editor和custom自定义权限',
          time: '2020-11-20',
          color: 'gray'
        },
        {
          title: '添加个人设置页面',
          time: '2020-11-15',
          color: 'gray'
        },
        {
          title: '吃火锅,喝奶茶',
          time: '2020-11-12',
          color: 'gray'
        },
        {
          title: '完成全景图，暂时用的插件，以后有空了研究下krpano，感觉全景图挺有意思的',
          time: '2020-11-11',
          color: 'green'
        },
        {
          title: '完成地图页面,arcgis地图还有点bug',
          time: '2020-11-10',
          color: 'red'
        },
        {
          title: '完成echarts页面,之后有空了封装一个能加载所有echarts的组件，传入配置即可生成echarts',
          time: '2020-11-09',
          color: 'green'
        },
        {
          title: '上传代码至github',
          time: '2020-10-25',
          color: 'gray'
        },
        {
          title: '创建vue-antd-admin',
          time: '2020-10-13',
          color: 'gray'
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.dynamic-title {
  font-size: 1rem;
  margin-bottom: 15px;
}
.timeline-wrapper {
  margin-top: 24px;
}
</style>
