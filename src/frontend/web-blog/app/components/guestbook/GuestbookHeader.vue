<!--
  @file GuestbookHeader.vue
  @description 留言板聊天式顶栏，展示标题、留言数与在线状态指示
  @author TixXin
  @since 2026-03-20
-->

<template>
  <header class="guestbook-header">
    <div class="guestbook-header__main">
      <div class="guestbook-header__icon-wrap" aria-hidden="true">
        <Icon name="lucide:message-circle" size="20" />
      </div>
      <div>
        <h2 class="guestbook-header__title">
          留言板
        </h2>
        <p class="guestbook-header__subtitle">
          共 {{ formattedCount }} 条留言
        </p>
      </div>
    </div>
    <div
      class="guestbook-header__online"
      role="status"
      aria-label="在线状态指示"
    >
      <span class="guestbook-header__pulse" />
      <span class="guestbook-header__online-text">在线</span>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  memberCount: number
}>()

const formattedCount = computed(() =>
  props.memberCount.toLocaleString('zh-CN'),
)
</script>

<style lang="scss" scoped>
.guestbook-header {
  position: sticky;
  top: 0;
  z-index: 5;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--border-soft);
  background: var(--surface-1-alpha-90);
  backdrop-filter: blur(8px);
}

.guestbook-header__main {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 0;
}

.guestbook-header__icon-wrap {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: $radius-md;
  background: var(--surface-2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-soft);
  flex-shrink: 0;
}

.guestbook-header__title {
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  color: var(--text-main);
}

.guestbook-header__subtitle {
  margin: 0.125rem 0 0;
  font-size: 0.625rem;
  color: var(--text-muted);
}

.guestbook-header__online {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.1875rem 0.625rem 0.1875rem 0.5rem;
  border-radius: $radius-full;
  font-size: 0.6875rem;
  font-weight: 600;
  color: #059669;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.15);
  flex-shrink: 0;
}

:root.dark .guestbook-header__online {
  color: #34d399;
}

.guestbook-header__pulse {
  position: relative;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: $radius-full;
  background: #10b981;
  flex-shrink: 0;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: #34d399;
    animation: guestbook-ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    opacity: 0.6;
  }
}

.guestbook-header__online-text {
  line-height: 1;
}

@keyframes guestbook-ping {
  75%,
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>
