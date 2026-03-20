/**
 * @file mock.ts
 * @description 项目模块 mock 数据
 * @author TixXin
 * @since 2025-03-17
 */

import type { ProjectItem, ProjectStats, TechStackItem } from './types'

export const mockProjects: ProjectItem[] = [
  {
    title: 'VueDash — 管理后台模板',
    description: '一个基于 Vue3 + TypeScript + Pinia 构建的现代化管理后台模板，内置权限管理、动态路由、多主题切换等开箱即用的功能。',
    cover: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    stars: '1.2k',
    tags: [
      { label: 'Vue3', color: 'emerald' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'Pinia', color: 'amber' },
      { label: 'Tailwind', color: 'sky' },
    ],
    links: [
      { icon: 'lucide:github', label: '源代码', href: '#' },
      { icon: 'lucide:external-link', label: '在线预览', href: '#' },
    ],
  },
  {
    title: 'MarkNote — Markdown 编辑器',
    description: '一款极简的在线 Markdown 编辑器，支持实时预览、代码高亮、数学公式渲染、Mermaid 图表以及导出 PDF 功能。',
    cover: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    status: 'active',
    stars: '846',
    tags: [
      { label: 'React', color: 'sky' },
      { label: 'TypeScript', color: 'blue' },
      { label: 'CodeMirror', color: 'slate' },
    ],
    links: [
      { icon: 'lucide:github', label: '源代码', href: '#' },
      { icon: 'lucide:external-link', label: '在线预览', href: '#' },
    ],
  },
  {
    title: 'CloudSync — 文件同步服务',
    description: '基于 Node.js + WebSocket 的跨设备实时文件同步工具，支持增量同步、冲突检测和版本历史回溯。',
    cover: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
    status: 'dev',
    stars: '320',
    tags: [
      { label: 'Node.js', color: 'emerald' },
      { label: 'WebSocket', color: 'amber' },
      { label: 'Redis', color: 'rose' },
      { label: 'Docker', color: 'blue' },
    ],
    links: [
      { icon: 'lucide:github', label: '源代码', href: '#' },
    ],
  },
  {
    title: 'PixelSnap — 截图标注工具',
    description: '一个轻量级的桌面截图标注工具，支持区域截图、全屏截图、OCR 文字识别、贴图固定以及快速分享到剪贴板。',
    cover: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=600&q=80',
    status: 'archived',
    stars: '567',
    tags: [
      { label: 'Electron', color: 'sky' },
      { label: 'Vue3', color: 'emerald' },
      { label: 'Canvas', color: 'slate' },
    ],
    links: [
      { icon: 'lucide:github', label: '源代码', href: '#' },
      { icon: 'lucide:download', label: '下载', href: '#' },
    ],
  },
]

export const mockProjectStats: ProjectStats[] = [
  { label: '总项目数', value: '4' },
  { label: '总 Star 数', value: '2.9k' },
  { label: '总 Fork 数', value: '480' },
]

export const mockTechStack: TechStackItem[] = [
  { name: 'Vue / React', percent: 75 },
  { name: 'TypeScript', percent: 60 },
  { name: 'Node.js', percent: 45 },
  { name: 'Docker / DevOps', percent: 30 },
]
