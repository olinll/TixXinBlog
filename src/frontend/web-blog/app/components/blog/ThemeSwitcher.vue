<!--
  @file ThemeSwitcher.vue
  @description 主题切换器组件，支持亮色/跟随系统/暗色三种模式
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="theme-switcher card">
    <button
      v-for="option in themeOptions"
      :key="option"
      class="theme-toggle-btn"
      :class="{ 'theme-active': currentPreference === option }"
      :title="labels[option]"
      @click="setTheme(option)"
    >
      <Icon :name="icons[option]!" size="16" />
    </button>
  </div>
</template>

<script setup lang="ts">
const { currentPreference, themeOptions, setTheme } = useTheme()

const icons: Record<string, string> = {
  light: 'lucide:sun',
  system: 'lucide:monitor',
  dark: 'lucide:moon',
}

const labels: Record<string, string> = {
  light: '浅色模式',
  system: '跟随系统',
  dark: '深色模式',
}
</script>

<style lang="scss" scoped>
.theme-switcher {
  display: none;
  padding: 0.375rem;
  gap: 0;

  @media (min-width: $breakpoint-lg) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}

.theme-toggle-btn {
  flex: 1;
  font-size: 0.875rem;
}
</style>
