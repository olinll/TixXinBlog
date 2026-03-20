/**
 * @file mock.ts
 * @description 文章模块 mock 数据，提供文章列表和分类 Tab 数据
 * @author TixXin
 * @since 2025-03-17
 */

import type {
  ArticleDetail,
  CommentItem,
  PostItem,
  PostTab,
  RelatedPost,
  TocItem,
} from './types'

export const mockPostTabs: PostTab[] = [
  { label: '全部文章', value: 'all' },
  { label: '技术笔记', value: 'tech' },
  { label: '生活随笔', value: 'life' },
]

export const mockPosts: PostItem[] = [
  {
    id: 1,
    title: '深入理解 Vue3 的响应式原理架构设计',
    summary: 'Vue3 的响应式系统基于 Proxy 和 Reflect 实现，相比 Vue2 的 Object.defineProperty，它有着更好的性能和更广泛的拦截能力。本文将带你一步步探索响应式系统的核心设计思想...',
    cover: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'Vue.js', color: 'emerald' },
      { label: '源码分析', color: 'blue' },
    ],
    category: 'tech',
    readTime: 12,
    likes: 48,
    views: 1024,
    comments: 24,
    date: '2024-03-10',
    folder: '前端架构',
    pinned: true,
  },
  {
    id: 2,
    title: '关于现代化个人博客交互设计的几个思考法则',
    summary: '设计一个博客不应该只是堆砌技术栈，更重要的是如何通过视觉传达博主的个人品味。极简主义不等于简陋，细节的处理、微交互的运用以及阅读体验的打磨是提升质感的关键...',
    tags: [
      { label: 'UI/UX', color: 'rose' },
      { label: '产品灵感', color: 'orange' },
    ],
    category: 'life',
    readTime: 8,
    likes: 36,
    views: 862,
    comments: 12,
    date: '2024-02-28',
    folder: '设计思考',
  },
  {
    id: 3,
    title: '零成本使用 GitHub Actions 实现流水线自动化构建部署',
    summary: '每次写完文章还要手动通过 FTP 上传服务器？是时候拥抱现代化的 CI/CD 了。这篇文章将手把手教你配置 GitHub Actions 脚本，实现代码推送后自动编译部署...',
    cover: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=400&q=80',
    tags: [
      { label: 'DevOps', color: 'sky' },
      { label: 'GitHub', color: 'emerald' },
    ],
    category: 'tech',
    readTime: 15,
    likes: 72,
    views: 756,
    comments: 8,
    date: '2024-02-15',
    folder: '效率工具',
  },
  {
    id: 4,
    title: '深入理解前端技术架构与性能优化',
    summary: '这是一段模拟的文章摘要内容，用于展示文章卡片列表。文章内容涵盖了各种技术细节和前端架构思考，希望能给你带来启发...',
    tags: [
      { label: 'Web', color: 'blue' },
      { label: '架构', color: 'emerald' },
    ],
    category: 'tech',
    readTime: 10,
    likes: 28,
    views: 534,
    comments: 6,
    date: '2024-01-20',
    folder: '前端开发',
  },
  {
    id: 5,
    title: '关于生活与工作的平衡思考法则',
    summary: '这是一段模拟的文章摘要内容，用于展示文章卡片列表。文章内容涵盖了各种生活感悟和工作思考，希望能给你带来启发...',
    tags: [
      { label: '随笔', color: 'rose' },
      { label: '思考', color: 'amber' },
    ],
    category: 'life',
    readTime: 13,
    likes: 26,
    views: 648,
    comments: 10,
    date: '2024-01-08',
    folder: '生活随笔',
  },
]

export const mockArticleDetail: ArticleDetail = {
  id: '1',
  title: '深入理解 Vue3 的响应式原理架构设计',
  cover:
    'https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&w=1200&q=80',
  date: '2024-03-10',
  category: '前端架构',
  readTime: '12 分钟',
  views: 1024,
  likes: 48,
  comments: 4,
  content: [
    {
      type: 'heading',
      level: 2,
      id: 'intro',
      text: '引言：为什么要重新设计响应式系统',
    },
    {
      type: 'paragraph',
      text:
        'Vue.js 作为目前最主流的前端框架之一，其核心竞争力就在于「响应式数据驱动」的编程范式。当我们修改一个数据，与之关联的视图就会自动更新——这背后看似简单的机制，实际上蕴含了非常精巧的设计。Vue3 对响应式系统进行了彻底的重写，从底层的拦截机制到上层的 API 设计，都有了质的飞跃。',
    },
    {
      type: 'paragraph',
      text:
        '在 Vue2 中，响应式系统基于 Object.defineProperty 实现，这种方式虽然能够完成基本的数据劫持需求，但存在诸多先天性限制。Vue3 选择使用 ES6 的 Proxy 来重新设计整个响应式体系，不仅解决了旧方案的痛点，还带来了更优秀的性能表现和更灵活的 API。本文将带你从原理层面深入理解这套架构的设计思想。',
    },
    {
      type: 'heading',
      level: 2,
      id: 'proxy-vs-define',
      text: 'Proxy 与 Object.defineProperty 的本质差异',
    },
    {
      type: 'paragraph',
      text:
        'Object.defineProperty 只能劫持对象已有属性的 getter/setter，这意味着如果你在对象创建之后新增了属性，或者直接通过索引修改数组元素，Vue2 是无法检测到变化的。这也是为什么 Vue2 需要提供 Vue.set 和 Vue.delete 这类辅助 API 的原因。',
    },
    {
      type: 'paragraph',
      text:
        '而 Proxy 是对整个对象的代理拦截，它可以捕获几乎所有的对象操作，包括属性的读取（get）、赋值（set）、删除（deleteProperty）、枚举（ownKeys）等 13 种操作。这种「全方位」的拦截能力使得 Vue3 不再需要递归遍历对象的每一个属性进行定义，而是采用惰性的方式——只有当属性被访问时才会对其进行深层代理，大大提升了初始化性能。',
    },
    {
      type: 'quote',
      text:
        'Proxy 的引入不仅是 API 层面的变更，更是响应式设计哲学的一次范式转换——从「逐属性定义」变为「整体代理拦截」，这赋予了框架在运行时更强大的感知与控制能力。',
    },
    {
      type: 'heading',
      level: 2,
      id: 'reactive-impl',
      text: 'reactive() 的实现原理',
    },
    {
      type: 'paragraph',
      text:
        'reactive() 是 Vue3 Composition API 中最核心的响应式函数。它接收一个普通对象（或数组），返回该对象的响应式代理。其内部实现并不复杂，核心就是调用 new Proxy(target, handler)，并在 handler 中注入依赖收集和触发更新的逻辑。',
    },
    {
      type: 'heading',
      level: 3,
      id: 'reactive-core',
      text: '核心简化实现',
    },
    {
      type: 'paragraph',
      text:
        '下面是一个去除边界处理后的简化版本，展示了 reactive 的核心工作流程。在 get 陷阱中执行依赖收集（track），在 set 陷阱中触发更新（trigger）：',
    },
    {
      type: 'code',
      language: 'javascript',
      text: `function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      const result = Reflect.get(target, key, receiver);
      track(target, key);
      if (typeof result === 'object' && result !== null) {
        return reactive(result);
      }
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      const result = Reflect.set(target, key, value, receiver);
      if (oldValue !== value) {
        trigger(target, key);
      }
      return result;
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key);
      trigger(target, key);
      return result;
    }
  };
  return new Proxy(target, handler);
}`,
    },
    {
      type: 'paragraph',
      text:
        '这段代码体现了 Vue3 响应式系统的三个核心设计原则：一是使用 Reflect 配合 Proxy 确保正确的 this 指向和原型链行为；二是在 get 中惰性递归代理嵌套对象，避免一次性深度遍历带来的性能开销；三是在 set 中通过对比新旧值来避免不必要的更新触发。',
    },
    {
      type: 'heading',
      level: 2,
      id: 'ref-vs-reactive',
      text: 'ref() 与 reactive() 的选择与区别',
    },
    {
      type: 'paragraph',
      text:
        '在实际开发中，我们经常面临一个选择：到底用 ref() 还是 reactive()？理解它们背后的实现差异，能帮助我们做出更合理的技术选型。',
    },
    {
      type: 'paragraph',
      text:
        'reactive() 只能作用于对象类型（Object、Array、Map、Set 等），因为 Proxy 的限制使其无法代理基本类型值。而 ref() 则通过将值包裹在一个带有 .value 属性的对象中来解决这一限制。当 ref 包裹的是对象类型时，内部实际上会调用 reactive 进行深层代理。',
    },
    {
      type: 'heading',
      level: 3,
      id: 'ref-reactive-diff',
      text: '实际开发建议',
    },
    {
      type: 'list',
      items: [
        '对于基本类型（string, number, boolean）或需要替换整个引用的场景，优先使用 ref()。',
        '对于结构稳定的对象或表单数据模型，使用 reactive() 可以避免反复 .value 的书写负担。',
        '不要对 reactive 对象进行解构赋值，否则会丢失响应式绑定。如需解构请搭配 toRefs() 使用。',
        'Vue 官方推荐在大多数场景下使用 ref()，因为它更具通用性且心智模型更统一。',
      ],
    },
    {
      type: 'heading',
      level: 2,
      id: 'effect-tracking',
      text: 'effect 与依赖追踪机制',
    },
    {
      type: 'paragraph',
      text:
        '响应式系统的另一半拼图是「副作用函数（effect）」的依赖追踪。当我们在组件的 setup 中使用响应式数据时，Vue 内部会创建一个 effect 来追踪当前渲染函数依赖了哪些响应式属性。这个追踪过程依赖于一个全局的 activeEffect 变量和一个 WeakMap → Map → Set 三层数据结构。',
    },
    {
      type: 'paragraph',
      text:
        '当 effect 执行时，会将自身赋值给 activeEffect。此时如果访问了某个响应式对象的属性，就会触发 Proxy 的 get 陷阱，进而调用 track() 函数，将当前的 activeEffect 添加到该属性对应的依赖集合中。后续当属性值发生变化时，trigger() 会遍历该属性的所有依赖 effect 并重新执行它们。',
    },
    {
      type: 'heading',
      level: 2,
      id: 'summary',
      text: '总结与展望',
    },
    {
      type: 'paragraph',
      text:
        'Vue3 的响应式系统是一次成功的架构升级。通过 Proxy 替代 defineProperty，它解决了无法检测新增属性、数组索引修改等历史痛点；通过惰性代理和精确的依赖追踪，大幅提升了运行时性能；通过 ref/reactive 等清晰的 API 设计，降低了开发者的理解成本。',
    },
    {
      type: 'paragraph',
      text:
        '如果你正在深入学习 Vue3，建议从源码的 @vue/reactivity 包开始阅读。这个包是完全独立的，可以脱离 Vue 框架使用，也是理解 Vue3 核心机制的最佳入口。',
    },
  ],
}

export const mockComments: CommentItem[] = [
  {
    id: 1,
    author: '小明',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80',
    content:
      '写得非常详细！尤其是 track/trigger 的三层数据结构那部分，终于搞明白了 WeakMap 在这里的作用。期待博主继续更新 Vue3 编译器原理相关的文章。',
    time: '2024-03-11',
    likes: 12,
    replies: [
      {
        id: 11,
        author: 'TixXin',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80',
        content: '谢谢支持，编译器系列已经在路上了。',
        time: '2024-03-11',
        likes: 3,
        isOwner: true,
      },
    ],
  },
  {
    id: 2,
    author: 'DevLin',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80',
    content:
      '请问一下，Vue3 的响应式在处理大型数组时性能如何？之前 Vue2 的数组劫持一直是个痛点，换成 Proxy 之后是否完全解决了？',
    time: '2024-03-10',
    likes: 5,
  },
  {
    id: 3,
    author: '前端小白',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80',
    content:
      '代码示例很清晰，对照源码看容易理解多了。另外想补充一点，Vue3 还通过 effectScope 提供了更细粒度的 effect 管理能力，在组件卸载时自动清理所有副作用。',
    time: '2024-03-10',
    likes: 8,
  },
  {
    id: 4,
    author: 'TixXin',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80',
    content:
      '本文侧重原理脉络，effectScope 确实是组合式 API 里很值得单独展开的一块，后面会补一篇短文说明。',
    time: '2024-03-10',
    likes: 6,
    isOwner: true,
  },
]

export const mockRelatedPosts: RelatedPost[] = [
  {
    id: '2',
    title: 'Vue3 编译器优化策略：静态提升与 PatchFlag 详解',
    date: '2024-02-20',
    category: '前端架构',
  },
  {
    id: '3',
    title: '从零手写一个迷你 Vue 响应式系统',
    date: '2024-01-15',
    category: '源码笔记',
  },
  {
    id: '4',
    title: 'React Signals vs Vue Reactivity：前端响应式方案横向对比',
    date: '2024-01-05',
    category: '技术视野',
  },
]

export const mockTocItems: TocItem[] = [
  { id: 'intro', text: '引言：为什么要重新设计响应式系统', level: 2 },
  { id: 'proxy-vs-define', text: 'Proxy 与 Object.defineProperty 的本质差异', level: 2 },
  { id: 'reactive-impl', text: 'reactive() 的实现原理', level: 2 },
  { id: 'reactive-core', text: '核心简化实现', level: 3 },
  { id: 'ref-vs-reactive', text: 'ref() 与 reactive() 的选择与区别', level: 2 },
  { id: 'ref-reactive-diff', text: '实际开发建议', level: 3 },
  { id: 'effect-tracking', text: 'effect 与依赖追踪机制', level: 2 },
  { id: 'summary', text: '总结与展望', level: 2 },
]
