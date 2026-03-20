<!--
  @file PostCardList.vue
  @description 文章卡片列表组件，按当前选中 Tab 过滤并渲染文章卡片
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="main-content__body">
    <BlogPostCard
      v-for="post in filteredPosts"
      :key="post.id"
      :post="post"
    />
    <p v-if="filteredPosts.length === 0" class="post-list__empty">
      暂无相关文章
    </p>
    <div v-if="filteredPosts.length > 0" class="post-list__loader">
      <Icon name="lucide:loader-2" size="20" class="post-list__spinner" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostItem } from '~/features/post/types'

const props = defineProps<{
  posts: PostItem[]
  activeTab: string
}>()

const filteredPosts = computed(() => {
  if (props.activeTab === 'all') return props.posts
  return props.posts.filter(p => p.category === props.activeTab)
})
</script>

<style lang="scss" scoped>
.post-list__empty {
  text-align: center;
  padding: 3rem 0;
  color: var(--text-soft);
  font-size: 0.875rem;
}

.post-list__loader {
  display: flex;
  justify-content: center;
  padding: 1.5rem 0;
}

.post-list__spinner {
  color: var(--text-soft);
  animation: spin 1.2s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
