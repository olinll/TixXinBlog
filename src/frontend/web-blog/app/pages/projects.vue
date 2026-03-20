<!--
  @file projects.vue
  @description 项目展示页面，展示个人开源项目及技术栈信息
  @author TixXin
  @since 2025-03-17
-->

<template>
  <LayoutBlogShell>
    <template #left>
      <LayoutSidebarNav />
      <BlogSubscribeCard />
      <BlogThemeSwitcher />
    </template>

    <template #center>
      <header class="projects-header">
        <CommonSearchBox placeholder="搜索项目..." />
      </header>
      <CommonPageHeader
        title="项目展示"
        subtitle="这里是我参与或独立开发的开源项目"
        icon="lucide:layers"
      />
      <div class="projects-body">
        <ProjectGrid :projects="projects" />
      </div>
    </template>

    <template #right>
      <SidebarRightSidebar>
        <ProjectStats :stats="projectStats" />
        <ProjectTechStackCard :stack="techStack" />
      </SidebarRightSidebar>
    </template>
  </LayoutBlogShell>
</template>

<script setup lang="ts">
import { mockProjects, mockProjectStats, mockTechStack } from '~/features/project/mock'

const projects = mockProjects
const projectStats = mockProjectStats
const techStack = mockTechStack
</script>

<style lang="scss" scoped>
.projects-header {
  padding: 1.5rem 2rem 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.projects-body {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>
