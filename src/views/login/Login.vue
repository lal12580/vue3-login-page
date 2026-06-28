<template>
    <div class="center"><Panel/></div>
</template>

<script setup lang="ts">
 import Panel from './c-cpns/login-panel.vue'
</script>

<style scoped>
.center{
    background-color: #d01e1e00;
    background-image: url('./c-cpns/login_pic.jpg');
    background-size: cover;       /* ⭐核心：铺满但可能裁剪 */
    background-position: center;  /* ⭐居中显示 */
    background-repeat: no-repeat; /* ⭐不重复 */
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>