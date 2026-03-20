/**
 * @file types.ts
 * @description 文章模块类型定义，包含标签、文章项、分类 Tab 等接口
 * @author TixXin
 * @since 2025-03-17
 */

export interface PostTag {
  label: string
  color: 'emerald' | 'rose' | 'sky' | 'orange' | 'blue' | 'amber'
}

export interface PostItem {
  id: number
  title: string
  summary: string
  cover?: string
  tags: PostTag[]
  category: 'tech' | 'life' | 'all'
  readTime: number
  likes: number
  views: number
  comments: number
  date: string
  folder: string
  pinned?: boolean
}

export interface PostTab {
  label: string
  value: string
}

/** 文章正文块（heading 可带 id 供目录与锚点使用） */
export interface ArticleSection {
  type: 'heading' | 'paragraph' | 'code' | 'quote' | 'list'
  level?: number
  text?: string
  language?: string
  items?: string[]
  id?: string
}

export interface ArticleDetail {
  id: string
  title: string
  cover: string
  date: string
  category: string
  readTime: string
  views: number
  likes: number
  comments: number
  content: ArticleSection[]
}

export interface CommentItem {
  id: number
  author: string
  avatar: string
  content: string
  time: string
  likes: number
  isOwner?: boolean
  replies?: CommentItem[]
}

export interface RelatedPost {
  id: string
  title: string
  date: string
  category: string
}

export interface TocItem {
  id: string
  text: string
  level: number
}
