/**
 * @file types.ts
 * @description 项目模块类型定义
 * @author TixXin
 * @since 2025-03-17
 */

export type ProjectStatus = 'active' | 'dev' | 'archived'

export interface ProjectLink {
  icon: string
  label: string
  href: string
}

export interface ProjectTag {
  label: string
  color: 'emerald' | 'blue' | 'amber' | 'sky' | 'rose' | 'slate'
}

export interface ProjectItem {
  title: string
  description: string
  cover: string
  status: ProjectStatus
  stars: string
  tags: ProjectTag[]
  links: ProjectLink[]
}

export interface ProjectStats {
  label: string
  value: string
}

export interface TechStackItem {
  name: string
  percent: number
}
