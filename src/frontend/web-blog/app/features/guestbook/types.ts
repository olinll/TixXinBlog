/**
 * @file types.ts
 * @description 留言板模块类型定义
 * @author TixXin
 * @since 2026-03-20
 */

export interface GuestMessage {
  id: number
  author: string
  avatar: string
  content: string
  time: string
  isOwner: boolean
  browser?: string
  region?: string
}

export interface DateGroup {
  date: string
  messages: GuestMessage[]
}

export interface ChatStat {
  label: string
  value: string
}

export interface ChatRule {
  id: number
  text: string
}

export interface ActiveMember {
  name: string
  avatar: string
  messageCount: number
}
