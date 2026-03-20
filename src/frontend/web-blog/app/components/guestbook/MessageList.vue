<!--
  @file MessageList.vue
  @description 按日期分组的留言列表容器，组间展示日期分隔徽标
  @author TixXin
  @since 2026-03-20
-->

<template>
  <div class="message-list">
    <template
      v-for="group in groups"
      :key="group.date"
    >
      <div class="message-list__date-row">
        <span class="message-list__date-badge">{{ group.date }}</span>
      </div>
      <GuestbookMessageBubble
        v-for="msg in group.messages"
        :key="msg.id"
        :message="msg"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import type { DateGroup } from '~/features/guestbook/types'

defineProps<{
  groups: DateGroup[]
}>()
</script>

<style lang="scss" scoped>
.message-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.25rem 1.5rem;
}

.message-list__date-row {
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
}

.message-list__date-badge {
  font-size: 0.625rem;
  font-weight: 500;
  color: var(--text-soft);
  padding: 0.25rem 0.75rem;
  border-radius: $radius-full;
  user-select: none;
  background: var(--surface-2);
  border: 1px solid var(--border-soft);
}
</style>
