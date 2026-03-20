<!--
  @file PostCard.vue
  @description 文章卡片组件，展示单篇文章的封面、标题、摘要、标签和元信息
  @author TixXin
  @since 2025-03-17
-->

<template>
  <article class="post-card card card--hover" @click="navigateToPost">
    <div class="post-card__body" :class="{ 'post-card__body--with-cover': post.cover }">
      <div class="post-card__text">
        <h2 class="post-card__title">{{ post.title }}</h2>
        <p class="post-card__summary line-clamp-2">{{ post.summary }}</p>
        <div class="post-card__tags">
          <span
            v-for="tag in post.tags"
            :key="tag.label"
            class="tag-badge"
            :style="tagStyle(tag.color)"
          >
            # {{ tag.label }}
          </span>
        </div>
      </div>
      <div v-if="post.cover" class="post-card__cover">
        <span v-if="post.pinned" class="post-card__pin">
          <span class="post-card__ping" />
          <Icon name="lucide:pin" size="10" /> 置顶
        </span>
        <img :src="post.cover" alt="Cover" loading="lazy" />
      </div>
    </div>

    <div class="post-card__footer">
      <div class="post-card__meta">
        <span class="post-card__meta-item"><Icon name="lucide:clock" size="12" /> {{ post.readTime }} min</span>
        <span class="post-card__meta-item"><Icon name="lucide:heart" size="12" /> {{ post.likes }}</span>
        <span class="post-card__meta-item"><Icon name="lucide:eye" size="12" /> {{ post.views.toLocaleString() }}</span>
      </div>
      <div class="post-card__meta">
        <span>{{ post.date }}</span>
        <span class="post-card__dot" />
        <span>{{ post.folder }}</span>
        <span class="post-card__dot" />
        <span class="post-card__meta-item"><Icon name="lucide:message-square" size="12" /> {{ post.comments }}</span>
        <Icon name="lucide:chevron-right" size="14" class="post-card__arrow" />
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { PostItem } from '~/features/post/types'

const props = defineProps<{
  post: PostItem
}>()

function navigateToPost() {
  // placeholder for future navigation
}

const tagColorMap: Record<string, { bg: string; text: string; border: string }> = {
  emerald: { bg: 'var(--tag-emerald-bg)', text: 'var(--tag-emerald-text)', border: 'var(--tag-emerald-border)' },
  rose: { bg: 'var(--tag-rose-bg)', text: 'var(--tag-rose-text)', border: 'var(--tag-rose-border)' },
  sky: { bg: 'var(--tag-sky-bg)', text: 'var(--tag-sky-text)', border: 'var(--tag-sky-border)' },
  orange: { bg: 'var(--tag-orange-bg)', text: 'var(--tag-orange-text)', border: 'var(--tag-orange-border)' },
  blue: { bg: 'var(--tag-blue-bg)', text: 'var(--tag-blue-text)', border: 'var(--tag-blue-border)' },
  amber: { bg: 'var(--tag-amber-bg)', text: 'var(--tag-amber-text)', border: 'var(--tag-amber-border)' },
}

function tagStyle(color: string) {
  const c = tagColorMap[color] ?? tagColorMap.blue!
  return {
    background: c!.bg,
    color: c!.text,
    borderColor: c!.border,
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  padding: 1.25rem;
  cursor: pointer;
  transition: $transition-normal;
}

.post-card__body {
  display: flex;
  flex-direction: column;

  &--with-cover {
    flex-direction: column-reverse;

    @media (min-width: $breakpoint-sm) {
      flex-direction: row;
      gap: 1.25rem;
    }
  }
}

.post-card__text {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 8rem;
}

.post-card__title {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1.4;
  margin-bottom: 0.5rem;
  transition: color 0.2s;

  .post-card:hover & {
    color: var(--accent);
  }
}

.post-card__summary {
  font-size: 0.8125rem;
  color: var(--text-muted);
  line-height: 1.7;
  margin-bottom: 0.75rem;
}

.post-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.375rem;
  margin-top: auto;
}

.post-card__cover {
  width: 100%;
  height: 130px;
  border-radius: $radius-md;
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  margin-bottom: 1rem;

  @media (min-width: $breakpoint-sm) {
    width: 11.25rem;
    margin-bottom: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    .post-card:hover & {
      transform: scale(1.05);
    }
  }
}

.post-card__pin {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: #ef4444;
  color: #fff;
  font-size: 0.625rem;
  font-weight: 700;
  padding: 0.125rem 0.5rem;
  border-radius: $radius-sm;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.post-card__ping {
  position: relative;
  width: 6px;
  height: 6px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: #fff;
  }

  &::before {
    animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
    opacity: 0.75;
  }

  &::after {
    width: 6px;
    height: 6px;
  }
}

@keyframes ping {
  75%, 100% {
    transform: scale(2.5);
    opacity: 0;
  }
}

.post-card__arrow {
  opacity: 0;
  transform: translateX(-4px);
  transition: $transition-fast;
  margin-left: auto;

  .post-card:hover & {
    opacity: 1;
    transform: translateX(0);
  }
}

.post-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px solid var(--border-soft);
}

.post-card__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.6875rem;
  color: var(--text-soft);
}

.post-card__meta-item {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.post-card__dot {
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--text-faint);
}
</style>
