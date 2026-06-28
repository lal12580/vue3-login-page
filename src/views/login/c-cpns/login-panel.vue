<template>
  <div class="panel">
    <h1 class="system">登录小页面</h1>

    <div class="boxx">
      <el-tabs
        v-model="activeName"
        type="card"
        class="demo-tabs"
        @tab-click="handleClick"
        stretch
        
      >
        <!-- 账号登录 -->
        <el-tab-pane name="first" v-model="change">
          <template #label>
            <span class="tab-label">
              <el-icon size="16">
                <Avatar />
              </el-icon>
              <span class="zi">账号登录</span>
            </span>
          </template>
            <Account ref="cia" />
        </el-tab-pane>

        <!-- 手机登录 -->
        <el-tab-pane name="second">
          <template #label>
            <span class="tab-label">
              <el-icon size="16">
                <Cellphone />
              </el-icon>
              <span class="zi">手机登录</span>
            </span>
          </template>
            <Phone ref="cip"/>
        </el-tab-pane>
      </el-tabs>
    </div>

    <div class="two">
      <el-checkbox
        v-model="checked1"
        label="记住密码"
        size="large"
        class="remember-password"
      />
      <el-link type="primary" class="forget-password">忘记密码</el-link>
    </div>
    <div class="into" @click="click_in($event)" >确定登录</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Avatar, Cellphone } from "@element-plus/icons-vue"
import Account from "./pane-account.vue"
import Phone from "./pane-phone.vue"
import type { TabsPaneContext } from "element-plus"

const checked1 = ref(true)
const activeName = ref("first")
const cia=ref<InstanceType<typeof Account>  >()
const cip=ref<InstanceType< typeof Phone >>()

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
// 点击登录按钮 调用子组件方法 显示账号密码 或 手机号验证码
function click_in(e: Event) {
  if (activeName.value === "first") {
   cia.value?.connett()
  } else if (activeName.value === "second") {
    cip.value?.formm
  }
}

</script>

<style lang="less" scoped>
.panel {
  width: 20rem;
  height: 20rem;
        /* ⭐ 黑色边框 */
    border: 1px solid #000;

    /* ⭐ 卡片内边距 */
    padding: 20px;

    /* ⭐ 圆角 */
    border-radius: 10px;

    /* ⭐ 阴影（让它更像卡片） */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

    /* ⭐ 居中优化（可选） */
    background-color: #fff;
  .system {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .boxx {
    width: 100%;
    height: 10rem;

    .demo-tabs > .el-tabs__content {
      padding: 32px;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
    }

    /* ⭐ 关键：统一标签样式 */
    .tab-label {
      display: flex;
      align-items: center;   // 垂直居中核心
      justify-content: center;
      gap: 5px;              // 图标和文字间距（比 margin 好用）
    }

    .zi {
      line-height: 1;        // 防止文字撑高导致不对齐
    }
  }

  .two {
    width: 100%;
    display: flex;
    justify-content: space-between;

    .remember-password {
      display: flex;
      align-items: center;
    }

    .forget-password {
      display: flex;
      align-items: center;
    }
  
  }

  .into {
        width: 100%;
        height: 40px;
        margin-bottom: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #409eff;
        color: #fff;
        border-radius: 6px;

        cursor: pointer;
        font-size: 14px;
        font-weight: 500;

        transition: all 0.2s;

        /* hover 状态 */
        &:hover {
            background-color: #66b1ff;
        }

        /* 点击状态 */
        &:active {
            background-color: #3a8ee6;
        }
    }
}
</style>