import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
	head: Component.Head(),
	header: [],
	afterBody: [
		Component.Comments({
			provider: 'giscus',
			options: {
				// from data-repo
				repo: 'Rexus752/Giardino-Digitale',
				// from data-repo-id
				repoId: 'R_kgDOMXGFSg',
				// from data-category
				category: 'Announcements',
				// from data-category-id
				categoryId: 'DIC_kwDOMXGFSs4ChDeJ',
			}
		}),
	],
	footer: Component.Footer({
		links: {
			"GitHub Repository": "https://github.com/Rexus752/Digital-Garden",
		},
	}),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
	beforeBody: [
		Component.Breadcrumbs(),
		Component.ArticleTitle(),
		Component.ContentMeta(),
		Component.TagList(),
	],
	left: [
		Component.PageTitle(),
		Component.MobileOnly(Component.Spacer()),
		Component.Search(),
		// Component.Darkmode(),
		Component.DesktopOnly(Component.Explorer()),
	],
	right: [
		Component.Graph(),
		// Component.DesktopOnly(Component.TableOfContents()),
		Component.Backlinks(),
	],
}

// components for pages that display lists of pages	(e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
	beforeBody: [
		Component.Breadcrumbs(),
		Component.ArticleTitle(),
		Component.ContentMeta()
	],
	left: [
		Component.PageTitle(),
		Component.MobileOnly(Component.Spacer()),
		Component.Search(),
		// Component.Darkmode(),
		Component.DesktopOnly(Component.Explorer()),
	],
	right: [],
}
