<template>
  <el-form
    ref="formRef"
    :model="connet"
    label-width="auto"
    style="max-width: 600px"
    class="demo-ruleForm"
  
  >
    <!-- 账号 -->
    <el-form-item
      label="账号"
      prop="account"
      :rules="[
        { required: true, message: '请输入账号(英文和数字构成)', trigger: 'blur' },
        { min: 4, max: 16, message: '账号长度为4~16位', trigger: 'blur' },
        {
          pattern: /^[a-zA-Z0-9]+$/,
          message: '账号只能由英文和数字组成',
          trigger: ['blur', 'change']
        }
      ]"
    >
      <el-input
        v-model="connet.account"
        type="text"
        autocomplete="off"
        placeholder="请输入账号"
        @input="filterAccount"
         clearable
      />
    </el-form-item>

    <!-- 密码 -->
    <el-form-item
      label="密码"
      prop="password"
       clearable
    :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, max: 20, message: '密码长度6~20位', trigger: 'blur' },
      {
        pattern: /^[a-zA-Z0-9_]+$/,
        message: '只能包含字母、数字、下划线',
        trigger: 'change'
      }
    ]"
    >
      <el-input
        v-model="connet.password"
        type="password"
        autocomplete="off"
        placeholder="请输入密码"
      />
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'

const formRef = ref()

// 表单数据 及 传给父的账号密码
const connet = reactive({
  account: '',
  password: ''
})
function connett() {
  formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('✅ 校验成功，账号密码是：', connet)
    } else {
       ElNotification({
        title: '拉完了！',
        message: '输入格式有错误，请检查后重新输入',
        type: 'error',
      })
      console.log('❌ 校验失败，错误信息：', fields)
    }
  })
}

defineExpose({
  connett
})

</script>