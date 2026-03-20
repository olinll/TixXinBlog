/**
 * @file mock.ts
 * @description 站点模块 mock 数据，提供页脚链接、技术栈信息和系统状态
 * @author TixXin
 * @since 2025-03-17
 */

import type { FooterLink, PoweredByItem, SiteStatus } from './types'

export const mockFooterLinks: FooterLink[] = [
  { label: '关于本站', href: '/about' },
  { label: '隐私政策', href: '/privacy' },
  { label: 'RSS 订阅', href: '/rss' },
  { label: '站点地图', href: '/sitemap' },
]

export const mockPoweredBy: PoweredByItem[] = [
  { label: 'Nuxt', href: 'https://nuxt.com' },
  { label: 'Vue', href: 'https://vuejs.org' },
]

export const mockSiteStatus: SiteStatus = {
  pingMs: 18,
  statusText: 'All Systems Operational',
}
