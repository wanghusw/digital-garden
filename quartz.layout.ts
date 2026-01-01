import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

const RecentNotes = [
  Component.RecentNotes({
      title: "最近的笔记",
      limit: 3,
      showTags: false,
      filter: (f) => f.slug!.startsWith("Post/"),
      linkToMore: "Post/" // 确保 /notes 页面存在
    }),
    Component.RecentNotes({
      title: "最近的日记",
      limit: 2,
      showTags: false,
      filter: (f) => f.slug!.startsWith("Journals/"),
      linkToMore: "/Journals" // 确保 /notes 页面存在
    }),
]

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/wanghusw/digital-garden",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  afterBody: [
    /*Component.RecentNotes({
      title: "最近的笔记",
      limit: 3,
      showTags: false,
      linkToMore: "/Inbox" // 确保 /notes 页面存在
    })*/
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
      Component.RecentNotes({
      title: "最近的笔记",
      limit: 3,
      showTags: false,
      filter: (f) => f.slug!.startsWith("Post/"),
      linkToMore: "Post/" // 确保 /notes 页面存在
    }),
    Component.RecentNotes({
      title: "最近的日记",
      limit: 2,
      showTags: false,
      filter: (f) => f.slug!.startsWith("Journals/"),
      linkToMore: "/Journals" // 确保 /notes 页面存在
    }),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
      },
      globalGraph: {
        showTags: false,
      },
    }),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer(),
  ],
  right: [],
}