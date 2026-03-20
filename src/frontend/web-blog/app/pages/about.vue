<!--
  @file about.vue
  @description 关于我页面，展示个人信息、技能、经历和联系方式
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="page-columns">
    <main class="main-content">
      <header class="about-header">
        <CommonSearchBox placeholder="搜索..." />
      </header>
      <div class="about-body">
        <AboutHero :profile="profile" />
        <AboutSkillBars :skills="skills" />
        <AboutExperienceTimeline :experiences="experiences" />
        <AboutContactCards :contacts="contacts" />
      </div>
    </main>

    <aside class="aside-right">
      <SidebarRightSidebar>
        <AboutHobbyCard :hobbies="hobbies" />
        <AboutReadingCard :books="readings" />
        <AboutDonateCard />
      </SidebarRightSidebar>
    </aside>
  </div>
</template>

<script setup lang="ts">
import {
  mockProfile,
  mockSkills,
  mockExperiences,
  mockContacts,
  mockHobbies,
  mockReadings,
} from '~/features/about/mock'

const profile = mockProfile
const skills = mockSkills
const experiences = mockExperiences
const contacts = mockContacts
const hobbies = mockHobbies
const readings = mockReadings
</script>

<style lang="scss" scoped>
.about-header {
  padding: 1.5rem 2rem 0.5rem;
  display: flex;
  justify-content: flex-end;
}

.about-body {
  flex: 1;
  padding: 1rem 2rem 2rem;
  overflow-y: auto;
}
</style>
