<template>
    <el-container>
      <el-header class="header">订阅转换</el-header>
      <el-main>
        <Form/>
      </el-main>
  </el-container>

</template>

<script lang="ts" setup>


  import Form from './form.vue'


</script>


<style>
  .header {
      background-color: #AD5D8D;
      border-radius: 15px; /* 添加圆角 */
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
      font-size: 32px;
      font-weight: 700;
      color: #fff;
      display: flex;
      align-items: center; /* 垂直居中 */
      justify-content: center; /* 水平居中 */

  }
  .el-main {
      background-color: #F8F8FD; 
      text-align: center; 
      display: flex;
      justify-content: center;
      height: 100vh; /* 使容器高度占满整个视口高度 */
  }
</style>