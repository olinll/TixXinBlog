<!--
  @file index.vue
  @description 博客首页，组装三栏布局并引入 mock 数据驱动各组件
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="main-inner">
    <BlogPostTabs v-model="activeTab" />
    <BlogPostCardList :posts="posts" :active-tab="activeTab" />
    <ClientOnly>
      <Teleport to="#right-sidebar-target">
        <SidebarRightSidebar>
          <SidebarSiteStatsCard :stats="siteStats" />
          <SidebarTagCloudCard :tags="tags" />
          <SidebarCategoryCard :categories="categories" />
        </SidebarRightSidebar>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { mockPosts } from '~/features/post/mock'
import { mockSiteStats, mockTags, mockCategories } from '~/features/stats/mock'

const activeTab = ref('all')
const posts = mockPosts
const siteStats = mockSiteStats
const tags = mockTags
const categories = mockCategories
</script>
