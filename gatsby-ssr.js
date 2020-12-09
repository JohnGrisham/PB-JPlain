// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react')

// Move Typography.js styles to the top of the head section so they're loaded first.
exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
	const headComponents = getHeadComponents()
	headComponents.sort((x, y) => {
		if (x.key === 'TypographyStyle') {
			return -1
		} else if (y.key === 'TypographyStyle') {
			return 1
		}
		return 0
	})
	replaceHeadComponents([
		...headComponents,
		<script
			key="analytics"
			async
			defer
			data-domain="echo-breaking-news.com"
			src="https://plausible.io/js/plausible.js"></script>
	])
}
