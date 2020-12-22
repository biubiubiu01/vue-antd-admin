<template>
  <div class="form-container">
    <a-card :hoverable="true" :bordered="false">
      <a-form-model :model="form" :rules="formRule" :label-col="{ span: 6 }" :wrapper-col="{ span: 14 }" ref="form">
        <a-form-model-item prop="name" label="商品名称" hasFeedback>
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item prop="type" label="商品类型" hasFeedback>
          <a-select placeholder="请输入商品类型" allowClear @change="changeType">
            <a-select-option v-for="item in typeOption" :key="item.key" :value="item.key">
              {{ item.label }}
            </a-select-option>
          </a-select>
        </a-form-model-item>
        <a-form-model-item prop="weight" label="重量" hasFeedback>
          <a-input v-model="form.weight" placeholder="请输入重量（kg）" />
        </a-form-model-item>
        <a-form-model-item prop="weight" label="价格" hasFeedback>
          <a-input v-model="form.price" />
        </a-form-model-item>
        <a-form-model-item prop="date" label="上架日期" hasFeedback>
          <a-range-picker :placeholder="['开始日期', '结束日期']" allowClear @change="changTime" />
        </a-form-model-item>
        <a-form-model-item label="是否置顶" prop="recommend">
          <a-switch v-model="form.topping" />
        </a-form-model-item>
        <a-form-model-item prop="text" label="商品描述">
          <a-textarea v-model="form.text" placeholder="请输入商品描述" :autoSize="{ minRows: 3, maxRows: 5 }" />
        </a-form-model-item>
        <a-form-model-item prop="reviewer" label="审核人">
          <a-radio-group v-model="form.reviewer">
            <a-radio value="Siri">
              Siri
            </a-radio>
            <a-radio value="Timi">
              Timi
            </a-radio>
          </a-radio-group>
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 24 }" class="text-center">
          <a-button type="primary" @click="addFormData">
            添加
          </a-button>
          <a-button style="margin-left: 10px;" @click="resetFrom">
            取消
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
export default {
  name: 'formPgae',
  data() {
    return {
      formRule: {
        name: [{ required: true, trigger: 'blur', message: '商品名称不能为空！' }],
        type: [{ required: true, trigger: 'blur', message: '商品类型不能为空!' }],
        weight: [{ required: true, trigger: 'blur', message: '商品重量不能为空' }],
        date: [{ required: true, trigger: 'blur', message: '时间不能为空' }]
      },
      typeOption: [
        {
          key: 'clothes',
          label: '衣服'
        },
        {
          key: 'shoes',
          label: '鞋子'
        },
        {
          key: 'snacks',
          label: '零食'
        },
        {
          key: 'sport',
          label: '运动器材'
        },
        {
          key: 'fruits',
          label: '水果'
        },
        {
          key: 'frequently',
          label: '日用品'
        },
        {
          key: 'other',
          label: '其他'
        }
      ],
      form: {
        name: '',
        type: '',
        weight: '',
        price: '',
        topping: false,
        text: '',
        date: [],
        reviewer: 'Siri'
      }
    };
  },
  mounted() {},
  methods: {
    changeType(val) {
      this.form.type = val;
    },
    changTime(val, str) {
      this.form.date = str;
    },
    addFormData() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$message.success('模拟添加成功');
        }
      });
    },
    resetFrom() {
      this.$refs.form.resetFields();
    }
  }
};
</script>
<style lang="scss" scoped>
.form-container {
  width: 100%;
}
</style>
