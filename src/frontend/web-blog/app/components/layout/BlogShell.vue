<!--
  @file BlogShell.vue
  @description 博客页面外壳组件，定义三栏网格布局和底部导航页脚
  @author TixXin
  @since 2025-03-17
-->

<template>
  <div class="page-root">
    <div class="main-grid">
      <aside class="aside-left anim-fade-in-up anim-delay-1">
        <slot name="left" />
      </aside>

      <main class="main-content anim-fade-in-up anim-delay-2">
        <slot name="center" />
      </main>

      <aside class="aside-right anim-fade-in-up anim-delay-3">
        <slot name="right" />
      </aside>
    </div>

    <LayoutStatusFooter />
    <LayoutMobileNav />
  </div>
</template>
