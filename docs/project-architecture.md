# TixXinBlog 项目架构基线

本文用于沉淀当前项目的长期有效约定，作为后续实现和 Cursor 规则的统一参考。

## 1. 项目定位

TixXinBlog 是一个中大型个人博客系统，目标包括：

- 文章创作、发布、管理
- 分类、标签、搜索
- 评论、点赞、收藏
- SEO 优化与性能优化
- 后台管理与统计分析
- 可扩展的内容系统与后续增强能力

项目当前仍处于先设计、后实现阶段，代码落地时应优先遵循本文档约定。

## 2. 技术方向

- 前端：Nuxt 4、Vue 3、Composition API、TypeScript
- 服务端：NestJS
- 样式：SCSS
- 图标：@nuxt/icon（基于 Iconify，默认使用 Lucide 图标集）
- 数据层：Prisma + PostgreSQL
- 内容层：Markdown / MDX，可结合数据库元信息
- 搜索：Meilisearch
- 评论：自建
- 部署：Docker

说明：数据库、搜索、评论、部署属于后续架构选型，不应在当前目录结构和编码规则中被提前写死。

## 3. 整体架构

系统按四个主要方向组织：

- 前台网站
- 后台管理系统
- 内容系统
- API 服务

整体链路可以理解为：

```text
Browser -> Nuxt App -> Nitro Server -> Database
```

## 4. 仓库与目录边界

当前仓库的长期目录边界应保持清晰：

- `src/frontend/`：前端项目
- `src/backend/`：后端项目
- `docs/`：文档与架构说明

结合现有空目录骨架，预期模块如下：

```text
src/
  frontend/
    web-blog/
    web-admin/
  backend/
    server-main/
```

## 5. Nuxt 前端目录规范

前端项目默认采用 Nuxt 4 文件系统路由，推荐目录职责如下：

```text
app/
  pages/
  components/
  composables/
  features/
  layouts/
  middleware/
  utils/
  types/
```

职责约定：

- `app/pages/`：只放可访问页面
- `components/`：放可复用 UI 组件
- `composables/`：放跨页面复用逻辑
- `features/`：按业务域组织接口、model、schema、constants 等
- `layouts/`：页面布局
- `middleware/`：路由守卫
- `utils/`：纯函数工具
- `types/`：跨域共享类型

核心原则：

- 页面保持轻量，主要负责组装 UI 和页面级交互
- 业务逻辑尽量下沉到 `features/`
- 页面私有 UI 不要塞进 `pages/`
- 优先采用组件化、模块化开发方式组织前端实现
- 相同或相似逻辑优先提炼复用，避免复制粘贴式开发

## 6. 模块化与可维护性原则

项目实现过程中，默认遵循以下约束：

- 优先采用模块化开发，按领域和职责拆分代码
- 尽量遵守单一职责原则，一个文件只做一件事
- 当单个文件同时承担页面、状态、请求、数据转换等多类职责时，应主动拆分
- 页面优先通过组件、组合式函数和业务模块组合完成，而不是把逻辑集中在单个大文件中
- 遇到重复逻辑时，优先抽取为可复用组件、`composables`、`utils` 或 `features` 内部能力
- 写代码时优先考虑长期维护成本，保持命名清晰、结构稳定、依赖关系简单

## 7. 页面与路由命名规范

这是当前最重要的前端约定。

- 独立页面直接使用 `xxx.vue`
- 只有模块存在子页面时才使用 `xxx/index.vue`
- 简单动态详情优先使用 `[id].vue` 或 `[slug].vue`
- 详情页存在子流程时再使用 `[id]/index.vue`
- 不为了目录“好看”而多包一层无意义的 `index.vue`

推荐写法示例：

```text
app/pages/
  index.vue
  login.vue
  dashboard.vue
  posts/
    index.vue
    [slug].vue
  users/
    index.vue
    create.vue
    [id]/
      index.vue
      edit.vue
```

## 8. 博客核心模块

首期核心能力建议围绕以下模块展开：

- 文章系统：文章、草稿、定时发布、Markdown 内容、阅读量
- 分类系统：分类列表与分类详情
- 标签系统：标签列表与标签详情
- 搜索系统：全文搜索、分类/标签检索
- 评论系统：评论、回复、点赞、举报
- 用户系统：登录、评论、收藏、点赞
- 统计系统：阅读量、热门内容、搜索统计
- 后台系统：文章、分类、标签、评论、用户、统计管理

## 9. 推荐页面结构

博客前台推荐路由：

```text
/
/posts
/posts/[slug]
/categories
/categories/[slug]
/tags
/tags/[slug]
/search
/about
```

后台推荐路由：

```text
/admin
/admin/posts
/admin/comments
/admin/users
/admin/settings
```

## 10. SEO 与性能方向

默认按 SEO 友好和性能优先来实现：

- 使用 `useSeoMeta()` 等页面元信息能力
- 补齐 sitemap、robots、OpenGraph、Twitter Card
- 优先考虑 SSG / SSR 兼容写法
- 配合 CDN 缓存、图片优化、懒加载

## 11. 安全与实现原则

- 基本安全目标：XSS 过滤、CSRF 防护、API 限流、登录权限校验
- 优先做最小可落地实现，避免过度设计
- 如果实现必须偏离本文档，应明确记录偏离原因和范围
- 实现时优先选择更易维护的拆分方案，而不是短期可跑但难以扩展的大文件方案

## 12. 开发阶段建议

推荐按阶段推进：

1. 第一阶段：文章、分类、标签、Markdown 内容能力
2. 第二阶段：评论、搜索、收藏等交互能力
3. 第三阶段：后台管理与统计能力
4. 第四阶段：推荐、多语言、AI 等增强能力

## 13. 开发阶段 Mock 数据策略

项目当前处于 **UI 打磨阶段**，前端不对接真实后端 API，所有业务数据使用 mock。

### 基本原则

- Mock 数据统一存放在 `features/<domain>/mock.ts`，配套类型放 `features/<domain>/types.ts`
- 页面层（`pages/*.vue`）负责引入 mock 数据并通过 props 传递给组件
- **组件不直接 import mock 文件**，而是通过 props 接收数据，保持组件与数据源解耦
- 导航、Tab 列表等配置型数据也归入 `features/<domain>/mock.ts`
- 多个组件共用的数据（如导航项）只定义一次，统一 import，避免重复维护

### 当前 Mock 模块

| 模块 | 路径 | 导出内容 |
|------|------|----------|
| 文章 | `features/post/mock.ts` | `mockPosts`、`mockPostTabs` |
| 统计 | `features/stats/mock.ts` | `mockSiteStats`、`mockTags`、`mockCategories` |
| 导航 | `features/nav/mock.ts` | `mockNavItems` |
| 站点 | `features/site/mock.ts` | `mockFooterLinks`、`mockPoweredBy`、`mockSiteStatus` |

### 未来迁移路径

接入真实 API 时，只需在页面层将 `import { mockXxx }` 替换为 `useFetch()` / `useAsyncData()` 调用，组件无需任何改动。

## 14. 当前结论

对后续实现最重要的基线只有三条：

- 仓库分层先稳住：前端在 `src/frontend/`，后端在 `src/backend/`，文档在 `docs/`
- Nuxt 前端坚持“页面归 pages，复用归 components，业务归 features，逻辑归 composables”
- 没有子页面就不要建目录，只有存在子页面时才使用 `index.vue`

同时始终补充遵守两条工程约束：

- 优先模块化开发，避免把多类职责堆在同一文件中
- 优先复用已有组件和模块，减少重复代码
