<script setup lang="ts">
import { VCodeBlock } from "@wdns/vue-code-block";
import { CODES } from "./data";

const handleCopyStatusChange = (status: string) => {
  if ('success' === status) {
    alert('Copied!')
  }
};
</script>

<template>
  <ul>
    <li v-for="(code, index) in CODES" :key="index">
      <v-code-block
        :code="code.code"
        highlightjs
        :lang="code.lang"
        :browser-window="false"
        :persistent-copy-button="false"
        theme="stackoverflow-light"
        :label="code.lang"
        @update:copy-status="handleCopyStatusChange"
      />
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
}
</style>
