<!--
  @file projects.vue
  @description 项目展示页面，展示个人开源项目及技术栈信息
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="main-inner">
    <CommonPageHeader
      title="项目展示"
      subtitle="这里是我参与或独立开发的开源项目"
      icon="lucide:layers"
    >
      <template #action>
        <CommonSearchBox placeholder="搜索项目..." />
      </template>
    </CommonPageHeader>
    <div class="projects-body">
      <ProjectGrid :projects="projects" />
    </div>
    <ClientOnly>
      <Teleport to="#right-sidebar-target">
        <SidebarRightSidebar>
          <ProjectStats :stats="projectStats" />
          <ProjectTechStackCard :stack="techStack" />
        </SidebarRightSidebar>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { mockProjects, mockProjectStats, mockTechStack } from '~/features/project/mock'

const projects = mockProjects
const projectStats = mockProjectStats
const techStack = mockTechStack
</script>

<style lang="scss" scoped>
.projects-body {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}
</style>