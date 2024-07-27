<template>
  <el-form-item label="客户端">
    <el-select v-model="selectedClientType" placeholder="请选择">
      <el-option
        v-for="option in clientTypes"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      ></el-option>
    </el-select>
  </el-form-item>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from 'vue';

// 接收父组件传递的值
const props = defineProps<{ modelValue: string }>();
// 触发更新事件
const emit = defineEmits(['update:modelValue']);

// 客户端类型列表
const clientTypes = ref([
  { label: 'Clash', value: 'clash' },
  { label: 'Surge', value: 'surge&ver=4' },
  { label: 'Quantumult', value: 'quan' },
  { label: 'QuantumultX', value: 'quanx' },
  { label: 'Mellow', value: 'mellow' },
  { label: 'Surfboard', value: 'surfboard' },
  { label: 'Loon', value: 'loon' },
  { label: 'singbox', value: 'singbox' },
  { label: 'ss', value: 'ss' },
  { label: 'ssd', value: 'ssd' },
  { label: 'sssub', value: 'sssub' },
  { label: 'ssr', value: 'ssr' },
  { label: 'ClashR', value: 'clashr' },
  { label: 'V2Ray', value: 'v2ray' },
  { label: 'Trojan', value: 'trojan' },
  { label: 'Surge3', value: 'surge&ver=3' },
]);

// 双向绑定 selectedClientType
const selectedClientType = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<style scoped>
</style>
