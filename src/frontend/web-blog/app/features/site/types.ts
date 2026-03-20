/**
 * @file types.ts
 * @description 站点模块类型定义，包含页脚链接、技术栈、系统状态等接口
 * @author TixXin
 * @since 2025-03-17
 */

export interface FooterLink {
  label: string
  href: string
}

export interface PoweredByItem {
  label: string
  href: string
}

export interface SiteStatus {
  pingMs: number
  statusText: string
}
