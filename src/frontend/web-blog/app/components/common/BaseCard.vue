<!--
  @file BaseCard.vue
  @description 通用卡片容器组件，支持可选的 hover 效果
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="card" :class="{ 'card--hover': hoverable }">
    <slot />
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  hoverable?: boolean
}>(), {
  hoverable: false,
})
</script>
