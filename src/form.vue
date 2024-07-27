<template>
  <div class="form-container">
    <el-form :model="form" class="form" label-width="auto" label-position="top">
      <el-form-item label="订阅链接">
        <el-input v-model="form.sourceSubUrl" type="textarea" placeholder="多订阅链接或节点请确保每行一条，支持手动使用|分割多链接或节点" />
      </el-form-item>

      <el-row :gutter="10">
        <el-col :span="8">
          <ClientType v-model="form.clientType" />
        </el-col>
        <el-col :span="8">
          <el-form-item label="后端服务">
            <el-select v-model="form.customBackend" placeholder="请选择">
              <el-option label="下拉选项1" value="shanghai" />
              <el-option label="下拉选项2" value="beijing" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <RemoteConfig v-model:remoteConfig="form.remoteConfig" />
        </el-col>
      </el-row>

      <el-form-item label="包含规则（选填）">
        <el-input v-model="form.includeRemarks" placeholder="节点名包含的关键字，支持正则" />
      </el-form-item>

      <el-form-item label="排除规则（选填）">
        <el-input v-model="form.excludeRemarks" placeholder="节点名不包含的关键字，支持正则" />
      </el-form-item>

      <el-checkbox-group v-model="selectedTypes" class="checkbox-group">
        <el-checkbox :value="'emoji'" name="type">Emoji</el-checkbox>
        <el-checkbox :value="'udp'" name="type">开启UDP</el-checkbox>
        <el-checkbox :value="'appendType'" name="type">排序节点</el-checkbox>
        <el-checkbox :value="'scv'" name="type">关闭证书检查</el-checkbox>
        <el-checkbox :value="'nodeList'" name="type">Node List</el-checkbox>
      </el-checkbox-group>

      <!-- 分割线 -->
      <el-divider border-style="dashed">分割线</el-divider>

      <el-row>
        <el-col :span="22">
          <el-form-item>
            <el-input v-model="customSubUrl.value" />
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-button type="info" text bg @click="copyUrl(customSubUrl.value)">复制</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22">
          <el-form-item>
            <el-input v-model="curtomShortSubUrl" />
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-button type="info" text bg @click="copyUrl(curtomShortSubUrl)">复制</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="10" class="button-row">
        <el-col :span="2">
          <el-form-item>
            <el-button type="primary" @click="handleMakeUrl">转换</el-button>
          </el-form-item>
        </el-col>
        <el-col :span="2">
          <el-form-item>
            <el-button type="primary" @click="makeShortUrl">短链</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import ClientType from './clientType.vue';
import RemoteConfig from './remoteConfig.vue';
import { makeUrl, makeShortUrl } from './makeUrl';
import { reactive, ref } from 'vue';
import { ElMessage } from 'element-plus';
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

const form = ref({
  sourceSubUrl: '',
  clientType: '',
  customBackend: '',
  remoteConfig: '',
  excludeRemarks: '',
  includeRemarks: '',
  emoji: true,
  udp: true,
  appendType: false,
  scv: false,
  nodeList: false,

});

const selectedTypes = ref<string[]>(['emoji', 'udp']);
const defaultBackend = "http://127.0.0.1:25500/sub?";
const customSubUrl = reactive({ value: '' });
const curtomShortSubUrl = ref('');



const handleMakeUrl = () => {
  form.value.selectedTypes = selectedTypes.value;
  makeUrl(form.value, defaultBackend, customSubUrl);
};



const copyUrl = (url: string) => {
  toClipboard(url).then(() => {
    ElMessage.success('链接已复制到剪贴板');
  }).catch(() => {
    ElMessage.error('复制失败');
  });
};

</script>

<style scoped>
  @import './form.css';
</style>
