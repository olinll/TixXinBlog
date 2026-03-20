<!--
  @file ChatStats.vue
  @description 留言板右侧栏对话统计卡片
  @author TixXin
  @since 2026-03-20
-->

<template>
  <section class="card chat-stats">
    <h3 class="chat-stats__title">
      <Icon
        name="lucide:bar-chart-2"
        size="14"
      />
      对话统计
    </h3>
    <div class="chat-stats__grid">
      <div
        v-for="item in stats"
        :key="item.label"
        class="chat-stats__cell"
      >
        <p class="chat-stats__value">
          {{ item.value }}
        </p>
        <p class="chat-stats__label">
          {{ item.label }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ChatStat } from '~/features/guestbook/types'

defineProps<{
  stats: ChatStat[]
}>()
</script>

<style lang="scss" scoped>
.chat-stats {
  padding: 1.25rem;
}

.chat-stats__title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1.25rem;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-main);

  :deep(svg),
  :deep(.icon) {
    color: var(--text-soft);
  }
}

.chat-stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
}

.chat-stats__cell {
  text-align: center;
  padding: 0.75rem 0.25rem;
  border-radius: $radius-md;
  background: var(--surface-2);
  transition: color 0.2s;

  &:hover .chat-stats__value {
    color: #059669;
  }
}

:root.dark .chat-stats__cell:hover .chat-stats__value {
  color: #34d399;
}

.chat-stats__value {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-main);
  transition: color 0.2s;
}

.chat-stats__label {
  margin: 0.25rem 0 0;
  font-size: 0.625rem;
  font-weight: 500;
  color: var(--text-muted);
}
</style>
