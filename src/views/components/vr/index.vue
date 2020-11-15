<template>
  <div class="PSViewer" ref="psvdbg" style="height:calc(100vh - 148px);"></div>
</template>

<script>
import { Viewer } from 'photo-sphere-viewer';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
import MarkersPlugin from 'photo-sphere-viewer/dist/plugins/markers';
export default {
  name: 'vr',
  data() {
    return {
      img: require('../../../assets/vr/base.jpg')
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var PSV = new Viewer({
        panorama: this.img, //图片
        caption: '室内',
        container: this.$refs.psvdbg, //id
        size: {
          width: '100%',
          height: this.$refs.psvdbg.offsetHeight
        },
        navbar: ['autorotate', 'zoom', 'caption', 'fullscreen'],
        plugins: [
          [
            MarkersPlugin,
            {
              markers: [
                {
                  id: 'image',
                  longitude: 0.931,
                  latitude: 0.3,
                  image: require('../../../assets/vr/exit.png'),
                  anchor: 'bottom center',
                  width: 48,
                  height: 48,
                  tooltip: 'A image marker. <b>Click me!</b>',
                  content: '这是一个marker标记'
                },
                {
                  // 具有自定义样式的html标记
                  id: 'text',
                  longitude: 0,
                  latitude: 0,
                  html: 'HTML <b>marker</b> ♥',
                  anchor: 'bottom right',
                  style: {
                    maxWidth: '100px',
                    color: 'white',
                    fontSize: '20px',
                    fontFamily: 'Helvetica, sans-serif',
                    textAlign: 'center'
                  },
                  tooltip: {
                    content: 'An HTML marker',
                    position: 'right'
                  }
                }
              ]
            }
          ]
        ]
      });
      PSV.on('click', function(e) {
        // console.log(e);
        // console.log(MarkersButton);
        // console.log(PSV.buttons.MarkersButton);
      });
    }
  }
};
</script>
<style lang="scss" scoped>
// @import "photo-sphere-viewer/dist/plugins/style.scss";
</style>
