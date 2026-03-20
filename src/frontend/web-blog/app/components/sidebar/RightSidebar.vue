<!--
  @file RightSidebar.vue
  @description 右侧栏容器组件，包裹右侧所有卡片子组件
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="right-sidebar-wrapper">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.right-sidebar-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
</style>
