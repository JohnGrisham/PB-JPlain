/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
	siteMetadata: {
		siteUrl: `https://echo-breaking-news.com`,
		title: `Echo Breaking News`,
		description: `Stuck in a social media echo chamber? Break free and improve your media literacy with fresh news and perspectives.`,
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
		`gatsby-transformer-remark`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`,
				plugins: [`gatsby-transformer-json`]
			}
		},
		{
			resolve: `gatsby-transformer-sharp`,
			options: {
				// The option defaults to true
				checkSupportedExtensions: false
			}
		},
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-sitemap`,
			options: {
				exclude: ['/confirmation']
			}
		},
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
