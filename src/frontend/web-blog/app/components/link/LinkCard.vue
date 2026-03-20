<!--
  @file LinkCard.vue
  @description 单个友链卡片组件，展示头像、站点名、描述和域名
  @author TixXin
  @since 2025-03-17
-->


<template>
  <a
    :href="link.url"
    class="link-card"
    target="_blank"
    rel="noopener"
  >
    <img
      :src="link.avatar"
      :alt="link.name"
      class="link-card__avatar"
      loading="lazy"
    />
    <h4 class="link-card__name">{{ link.name }}</h4>
    <p class="link-card__desc">{{ link.description }}</p>
    <div class="link-card__domain">
      <Icon name="lucide:external-link" size="10" />
      <span>{{ link.domain }}</span>
    </div>
  </a>
</template>

<script setup lang="ts">
import type { LinkItem } from '~/features/link/types'

defineProps<{
  link: LinkItem
}>()
</script>

<style lang="scss" scoped>
.link-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 1.25rem;
  background: var(--surface-1);
  border: 1px solid var(--border);
  border-radius: $radius-card;
  transition: $transition-normal;
  text-decoration: none;
  color: inherit;

  &:hover {
    box-shadow: var(--shadow-card-hover);
    border-color: var(--border-hover);

    .link-card__avatar {
      transform: scale(1.1);
    }
  }
}

.link-card__avatar {
  width: 4rem;
  height: 4rem;
  border-radius: $radius-full;
  border: 2px solid var(--border-soft);
  margin-bottom: 0.75rem;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.link-card__name {
  font-size: 0.875rem;
  font-weight: 700;
  margin: 0;
}

.link-card__desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
  line-height: 1.6;
}

.link-card__domain {
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 10px;
  color: var(--text-soft);
}
</style>
