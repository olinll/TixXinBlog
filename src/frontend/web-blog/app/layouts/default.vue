<!--
  @file default.vue
  @description 博客默认布局，持有持久化的左侧栏与两列网格，页面导航时左侧栏不重建
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="page-root">
    <div class="blog-grid">
      <aside class="aside-left anim-fade-in-up anim-delay-1">
        <LayoutSidebarNav />
        <BlogSubscribeCard />
        <BlogThemeSwitcher />
      </aside>

      <div class="blog-content">
        <slot />
      </div>
    </div>

    <LayoutStatusFooter />
    <LayoutMobileNav />
  </div>
</template>
