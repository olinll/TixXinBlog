<!--
  @file SiteInfoCard.vue
  @description 本站信息卡片组件，展示站点名称、地址和描述
  @author TixXin
  @since 2025-03-17
-->

<template>
  <section class="card site-info">
    <h3 class="site-info__title">
      <Icon name="lucide:clipboard" size="14" /> 本站信息
    </h3>
    <div class="site-info__list">
      <div
        v-for="item in info"
        :key="item.label"
        class="site-info__row"
      >
        <span class="site-info__label">{{ item.label }}</span>
        <span class="site-info__value">{{ item.value }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SiteInfo } from '~/features/link/types'

defineProps<{
  info: SiteInfo[]
}>()
</script>

<style lang="scss" scoped>
.site-info {
  padding: 1.25rem;
}

.site-info__title {
  font-size: 0.8125rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.site-info__list {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.site-info__row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  border-radius: $radius-sm;
  background: var(--surface-2);
  font-size: 0.75rem;
}

.site-info__label {
  color: var(--text-soft);
}

.site-info__value {
  font-weight: 500;
}
</style>
