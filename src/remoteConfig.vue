<template>
    <el-form-item label="远程配置">
        <el-select v-model="form.remoteConfig" placeholder="请选择">
            <el-option-group
                v-for="group in remoteConfig"
                :key="group.label"
                :label="group.label"
            >
                <el-option
                    v-for="option in group.options"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                >
                </el-option>
            </el-option-group>
      </el-select>
    </el-form-item>
  </template>
  
  <script setup lang="ts" name="RemoteConfig">
  import { ref } from 'vue';
  
  const form = ref({
    remoteConfig: '',
  });
  
  const remoteConfig = ref([
    {
      label: "universal",
      options: [
        {
          label: "No-Urltest",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"
        },
        {
          label: "Urltest",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"
        }
      ]
    },
    {
      label: "customized",
      options: [
        {
          label: "Maying",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"
        },
        {
          label: "Ytoo",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"
        },
        {
          label: "FlowerCloud",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"
        },
        {
          label: "Nexitally",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"
        },
        {
          label: "SoCloud",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"
        },
        {
          label: "ARK",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"
        },
        {
          label: "ssrCloud",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"
        }
      ]
    },
    {
      label: "Special",
      options: [
        {
          label: "NeteaseUnblock(仅规则，No-Urltest)",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"
        },
        {
          label: "Basic(仅GEOIP CN + Final)",
          value: "https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"
        }
      ]
    }
  ]);
  </script>
  
  <style scoped>
  </style>
  