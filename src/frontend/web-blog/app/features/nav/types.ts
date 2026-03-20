/**
 * @file types.ts
 * @description 导航模块类型定义
 * @author TixXin
 * @since 2025-03-17
 */

export interface NavItem {
  icon: string
  label: string
  to: string
  /** 是否仅在桌面端侧边栏显示（不出现在移动端底部导航） */
  desktopOnly?: boolean
}
