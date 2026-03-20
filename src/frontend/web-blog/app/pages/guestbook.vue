<!--
  @file guestbook.vue
  @description 留言板页面，聊天式留言列表与侧栏统计、守则与活跃成员
  @author TixXin
  @since 2026-03-20
-->

<template>
  <LayoutBlogShell>
    <template #left>
      <LayoutSidebarNav />
      <BlogSubscribeCard />
      <BlogThemeSwitcher />
    </template>

    <template #center>
      <div class="guestbook-center">
        <GuestbookHeader :member-count="totalMessageCount" />
        <div class="guestbook-center__messages">
          <GuestbookMessageList :groups="dateGroups" />
        </div>
        <GuestbookMessageInput />
      </div>
    </template>

    <template #right>
      <SidebarRightSidebar>
        <GuestbookChatStats :stats="chatStats" />
        <GuestbookChatRules :rules="chatRules" />
        <GuestbookActiveMembers :members="activeMembers" />
      </SidebarRightSidebar>
    </template>
  </LayoutBlogShell>
</template>

<script setup lang="ts">
import {
  mockActiveMembers,
  mockChatRules,
  mockChatStats,
  mockDateGroups,
} from '~/features/guestbook/mock'

const dateGroups = mockDateGroups
const chatStats = mockChatStats
const chatRules = mockChatRules
const activeMembers = mockActiveMembers

const totalMessageCount = computed(() =>
  dateGroups.reduce((sum, g) => sum + g.messages.length, 0),
)
</script>

<style lang="scss" scoped>
.guestbook-center {
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.guestbook-center__messages {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}
</style>
