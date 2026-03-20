<!--
  @file ActiveMembers.vue
  @description 留言板右侧栏活跃成员列表
  @author TixXin
  @since 2026-03-20
-->

<template>
  <section class="card active-members">
    <h3 class="active-members__title">
      <Icon
        name="lucide:users"
        size="14"
      />
      活跃成员
    </h3>
    <ul class="active-members__list">
      <li
        v-for="(m, index) in members"
        :key="`${m.name}-${index}`"
        class="active-members__row"
      >
        <div
          class="active-members__avatar-wrap"
          :class="{ 'active-members__avatar-wrap--online': index === 0 }"
        >
          <img
            class="active-members__avatar"
            :src="m.avatar"
            :alt="`${m.name} 的头像`"
            width="36"
            height="36"
          >
        </div>
        <div class="active-members__info">
          <span class="active-members__name">{{ m.name }}</span>
          <span class="active-members__count">{{ m.messageCount }} 条留言</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { ActiveMember } from '~/features/guestbook/types'

defineProps<{
  members: ActiveMember[]
}>()
</script>

<style lang="scss" scoped>
.active-members {
  padding: 1.25rem;
}

.active-members__title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 1rem;
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

.active-members__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.active-members__row {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: $radius-md;
  transition: background 0.2s;

  &:hover {
    background: var(--surface-2);
  }
}

.active-members__avatar-wrap {
  position: relative;
  flex-shrink: 0;

  &--online::after {
    content: '';
    position: absolute;
    right: -1px;
    bottom: -1px;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: $radius-full;
    background: #10b981;
    box-shadow: 0 0 0 2px var(--surface-1);
  }
}

.active-members__avatar {
  width: 2.25rem;
  height: 2.25rem;
  border-radius: $radius-full;
  object-fit: cover;
  box-shadow: 0 0 0 2px var(--surface-2);
}

.active-members__info {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
}

.active-members__name {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--text-main);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.active-members__count {
  font-size: 0.625rem;
  color: var(--text-muted);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
