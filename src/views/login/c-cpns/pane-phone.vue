<template>
  <el-form
    ref="formRef"
    :model="form"
    label-width="auto"
    style="max-width: 600px"
    class="demo-ruleForm"
  >
    <!-- 手机号 -->
    <el-form-item
      label="手机号"
      prop="phone"
      :rules="[
        { required: true, message: '请输入手机号' },
        { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确' }
      ]"
    >
      <el-input
        v-model="form.phone"
        type="text"
        maxlength="11"
        placeholder="请输入手机号"
        @input="filterPhone"
      />
    </el-form-item>

    <!-- 验证码 -->
    <el-form-item
      label="验证码"
      prop="code"
      :rules="[
        { required: true, message: '请输入验证码' },
        { pattern: /^\d{4,6}$/, message: '验证码必须是4-6位数字' }
      ]"
    >
      <div style="display: flex; gap: 10px; width: 100%">
        <el-input
          v-model="form.code"
          type="text"
          maxlength="6"
          placeholder="请输入验证码"
          style="flex: 1"
        />

        <el-button type="primary" @click="sendCode">
          获取验证码
        </el-button>
      </div>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'

const formRef = ref()

const form = reactive({
  phone: '',
  code: ''
})
function formm() {
  console.log(form.phone)
}
defineExpose({
  formm
})

/**
 * 手机号过滤
 */
const filterPhone = (value) => {
  form.phone = value.replace(/\D/g, '').slice(0, 11)
}

/**
 * 点击发送验证码
 */
const sendCode = () => {
  if (!form.phone) {
    ElMessage.error('请先输入手机号')
    return
  }

  if (!/^1[3-9]\d{9}$/.test(form.phone)) {
    ElMessage.error('手机号格式不正确')
    return
  }

  // 模拟发送成功
  ElMessage.success('验证码已发送')
}
</script>

<style lang="scss" scoped>

</style>