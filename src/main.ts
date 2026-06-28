import { createApp } from 'vue'
import App from './App.vue'
// 全局注册图标
// main.ts
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const app = createApp(App)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}