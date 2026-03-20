/**
 * @file mock.ts
 * @description 友链模块 mock 数据
 * @author TixXin
 * @since 2025-03-17
 */

import type { LinkItem, LinkRule, SiteInfo } from './types'

export const mockLinks: LinkItem[] = [
  {
    name: '代码小站',
    description: '分享前端开发经验，记录技术成长',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=100&q=80',
    domain: 'codeblog.dev',
  },
  {
    name: '设计日记',
    description: 'UI/UX 设计师的灵感笔记本',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80',
    domain: 'designdiary.me',
  },
  {
    name: '全栈笔记',
    description: '从前端到后端的全栈之路',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    domain: 'fullstack.note',
  },
  {
    name: '极客花园',
    description: '开源爱好者的技术分享站',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    domain: 'geekgarden.io',
  },
  {
    name: '摄影札记',
    description: '用镜头记录世界，分享摄影心得',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80',
    domain: 'photonotes.cc',
  },
  {
    name: '独立开发者',
    description: '独立开发者的创业和产品心得',
    url: '#',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=100&q=80',
    domain: 'indiemaker.dev',
  },
]

export const mockLinkRules: LinkRule[] = [
  { id: 1, text: '网站能正常访问，内容积极健康，无违规违法内容' },
  { id: 2, text: '网站有原创内容，近三个月内有文章更新' },
  { id: 3, text: '请先在您的站点添加本站友链后再提交申请' },
  { id: 4, text: '审核通过后会在本页展示，一般 1-3 个工作日内回复' },
]

export const mockSiteInfo: SiteInfo[] = [
  { label: '名称', value: 'TixXin Blog' },
  { label: '地址', value: 'TixXin.blog' },
  { label: '描述', value: '极客的数字花园' },
]
