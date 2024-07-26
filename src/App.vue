<template>
    <el-container>
      <el-header class="header">订阅转换</el-header>
      <el-main class="main">
        <div class="form-container">
          <el-form :model="form" class="form" label-width="auto" label-position="top">

            <el-form-item label="订阅链接">
              <el-input v-model="form.desc" type="textarea" placeholder="多订阅链接或节点请确保每行一条,支持手动使用|分割多链接或节点" />
            </el-form-item>

            <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="客户端">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="下拉选项1" value="shanghai" />
                    <el-option label="下拉选项2" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="后端服务">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="下拉选项1" value="shanghai" />
                    <el-option label="下拉选项2" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="20">
                <el-form-item label="远程配置">
                  <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="下拉选项1" value="shanghai" />
                    <el-option label="下拉选项2" value="beijing" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item label-width="0px">
                  <el-button type="primary">参数</el-button>
                </el-form-item>
              </el-col>
            </el-row>

            <el-form-item label="包含规则">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item label="排除规则">
              <el-input v-model="form.name" />
            </el-form-item>

            <el-form-item>
              <el-checkbox-group v-model="form.type">
                <el-checkbox value="value1" name="type">
                  Emoji
                </el-checkbox>
                <el-checkbox value="value2" name="type">
                  开启UDP
                </el-checkbox>
                <el-checkbox value="value3" name="type">
                  排序节点
                </el-checkbox>
                <el-checkbox value="value4" name="type">
                  关闭证书检查
                </el-checkbox>
                <el-checkbox value="value4" name="type">
                  Node List
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>

            <el-row :gutter="10">
              <el-col :span="20">
                <el-form-item>
                  <el-input v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item>
                  <el-button type="primary">转换</el-button>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row :gutter="10">
              <el-col :span="20">
                <el-form-item>
                  <el-input v-model="form.name" />
                </el-form-item>
              </el-col>
              <el-col :span="4">
                <el-form-item>
                  <el-button type="primary">短链</el-button>
                </el-form-item>
              </el-col>
            </el-row>


          </el-form>
        </div>

      </el-main>
  </el-container>

</template>

<script lang="ts" setup>

import { reactive } from 'vue'

// 使用 reactive 创建一个响应式的表单对象
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

</script>


<style>
.header {
  background-color: #B3C0D1;
  text-align: center;
  color: #333;
  line-height: 60px;
}
.main {
  background-color: #E9EEF3; 
  text-align: center; 
  line-height: 100px;
}
.form-container {
  display: flex;
  justify-content: center;
  height: 100vh; /* 使容器高度占满整个视口高度 */
}

.form {
  max-width: 600px;
  width: 100%; /* 使表单占满父容器的宽度 */
}

</style>