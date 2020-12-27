<template>
  <div class="avatar-wrapper flex">
    <a-avatar :src="imgUrl" :size="135" />
    <div class="upload">
      <a-upload
        name="avatar"
        accept="image/png,image/gif,image/jpeg"
        :before-upload="beforeUpload"
        :show-upload-list="false"
      >
        <a-button type="primary" icon="picture" :loading="loading"> 选择图片 </a-button>
      </a-upload>
    </div>
    <a-modal title="头像裁剪" :visible="modalShow" :footer="null" :width="800" @cancel="modalShow = false">
      <a-row :gutter="24">
        <a-col :span="12" class="cropper-wrapper">
          <vueCropper
            ref="cropper"
            :img="option.imgUrl"
            :info="true"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
            @realTime="realTime"
          >
          </vueCropper>
        </a-col>
        <a-col :span="12">
          <a-space :size="15">
            <a-button icon="plus" />
            <a-button icon="minus" />
            <a-button icon="undo" />
            <a-button icon="redo" />
            <a-button type="primary" icon="picture" :loading="loading"> 重新选择图片 </a-button>
          </a-space>
          <div class="accountImg">
            <img :src="previewsImg.url" alt="" :style="previewsImg.img" />
          </div>
          <a-button type="primary" icon="upload" style="margin-left:150px" @click="saveHeadImg"> 保存头像 </a-button>
        </a-col>
      </a-row>
    </a-modal>
  </div>
</template>

<script>
import { VueCropper } from 'vue-cropper';
export default {
  components: { VueCropper },
  data() {
    return {
      imgUrl: require('../../../assets/nav/user.gif'),
      loading: false,
      modalShow: false,
      option: {
        imgUrl: null,
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true
      },
      previewsImg: {}
    };
  },
  methods: {
    beforeUpload(file) {
      this.loading = true;
      //判断格式
      if (!this.isImage(file)) {
        this.$message.warning('只能选择xlxs,xls文件');
        return false;
      }
      //判断大小
      if (file.size / 1024 / 1024 > 5) {
        this.$message.warning('上传图片大小不能超过5M');
        return false;
      }
      //得先裁剪，然后再走接口上传
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = e => {
        this.option.imgUrl = e.target.result;
        this.loading = false;
        this.modalShow = true;
      };
      return false;
    },

    saveHeadImg() {
      this.$message.success('上传成功!');
      this.imgUrl = this.previewsImg.url;
      this.modalShow = false;
    },

    // handleChange(info) {
    //   if (info.file.status === 'uploading') {
    //     this.loading = true;
    //     return;
    //   }
    //   if (info.file.status === 'error') {
    //     this.loading = false;
    //     this.$message.error('上传失败');
    //     return;
    //   }
    //   if (info.file.status === 'done') {
    //     const reader = new FileReader();
    //     reader.readAsDataURL(info.file.originFileObj);
    //     reader.onload = e => {
    //       this.option.imgUrl = e.target.result;
    //       this.loading = false;
    //       this.modalShow = true;
    //     };
    //   }
    // },

    realTime(data) {
      this.previewsImg = data;
    },

    isImage(file) {
      return /\.(gif|jpg|jpeg|png)$/.test(file.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.avatar-wrapper {
  width: 100%;

  .upload {
    margin-top: 15px;
    margin-left: 25px;
  }
}
.cropper-wrapper {
  height: 350px;
}
.accountImg {
  width: 200px;
  height: 200px;
  margin: 35px 0 55px 105px;
  overflow: hidden;
  border-radius: 50%;
  img {
    border-radius: 50%;
  }
}
</style>
