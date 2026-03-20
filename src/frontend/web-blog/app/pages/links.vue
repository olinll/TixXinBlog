<!--
  @file links.vue
  @description 友链页面，展示友情链接、申请表单和友链须知
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="page-columns">
    <main class="main-content">
      <header class="links-header">
        <CommonSearchBox placeholder="搜索友链..." />
      </header>
      <CommonPageHeader
        title="友情链接"
        subtitle="互联网上志同道合的伙伴们"
        icon="lucide:link"
      />
      <div class="links-body">
        <LinkGrid :links="links" />
        <LinkForm />
      </div>
    </main>

    <aside class="aside-right">
      <SidebarRightSidebar>
        <LinkRules :rules="linkRules" />
        <LinkSiteInfoCard :info="siteInfo" />
      </SidebarRightSidebar>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { mockLinks, mockLinkRules, mockSiteInfo } from '~/features/link/mock'

const links = mockLinks
const linkRules = mockLinkRules
const siteInfo = mockSiteInfo
</script>

<style lang="scss" scoped>
.links-header {
  padding: 1.5rem 2rem 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.links-body {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
