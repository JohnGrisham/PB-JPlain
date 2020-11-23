/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
	siteMetadata: {
		siteUrl: `https://echo-breaking-news.com`,
		title: `Echo Breaking News`,
		description: `Stuck in an echo chamber in social media? Break free with Echo Breaking news and discover a new perspective!`,
		author: `John Grisham`,
		logo: 'echo-breaking-logo.png'
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Roboto', 'Open Sans', 'Libre Baskerville']
				}
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-css-modules-typings`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `echo-breaking-news`,
				short_name: `echo-breaking`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/echo-breaking-logo.png`
			}
		}
	]
}
