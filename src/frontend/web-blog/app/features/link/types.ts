/**
 * @file types.ts
 * @description 友链模块类型定义
 * @author TixXin
 * @since 2025-03-17
 */

export interface LinkItem {
  name: string
  description: string
  url: string
  avatar: string
  domain: string
}

export interface LinkRule {
  id: number
  text: string
}

export interface SiteInfo {
  label: string
  value: string
}
