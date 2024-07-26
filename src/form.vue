<template>
    <div class="form-container">
        <el-form :model="form" class="form" label-width="auto" label-position="top">
            <el-form-item label="订阅链接">
                <el-input v-model="form.desc" type="textarea" placeholder="多订阅链接或节点请确保每行一条，支持手动使用|分割多链接或节点" />
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

            <el-form-item label="远程配置">
                <el-select v-model="form.region" placeholder="请选择">
                    <el-option label="下拉选项1" value="shanghai" />
                    <el-option label="下拉选项2" value="beijing" />
                </el-select>
            </el-form-item>
     
            <el-form-item label="包含规则">
                <el-input v-model="form.name" placeholder="节点名包含的关键字，支持正则" />
            </el-form-item>

            <el-form-item label="排除规则">
                <el-input v-model="form.name" placeholder="节点名不包含的关键字，支持正则" />
            </el-form-item>

            <el-form-item class="form-checkbox-group">
                    <el-checkbox-group v-model="form.type" class="checkbox-group">
                        <el-checkbox value="emoji" name="type">Emoji</el-checkbox>
                        <el-checkbox value="enableUDP" name="type">开启UDP</el-checkbox>
                        <el-checkbox value="sortNodes" name="type">排序节点</el-checkbox>
                        <el-checkbox value="disableCertCheck" name="type">关闭证书检查</el-checkbox>
                        <el-checkbox value="nodeList" name="type">Node List</el-checkbox>
                    </el-checkbox-group>
            </el-form-item>


            <!-- 分割线 -->
            <el-divider border-style="dashed">分割线</el-divider>



            <el-row :gutter="10">
                <el-col :span="22">
                    <el-form-item>
                        <el-input v-model="customSubUrl" />
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    <el-form-item>
                        <el-button type="primary">转换</el-button>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="10">
                <el-col :span="22">
                    <el-form-item>
                    <el-input v-model="curtomShortSubUrl" />
                    </el-form-item>
                </el-col>
                <el-col :span="2">
                    <el-form-item>
                    <el-button type="primary">短链</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>

</template>


<script lang="ts" setup name="Form">


import { reactive, ref } from 'vue'


const form = ref({
  type: ['emoji', 'enableUDP'] // 默认勾选前两项
});


</script>


<style scoped>
  @import './form.css'
</style>