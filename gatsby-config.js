/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
	siteMetadata: {
		siteUrl: `https://echo-breaking-news.com`,
		title: `Echo Breaking News`,
		description: `Sign up today to break the bias of your echo chamber and discover political news from both sides. News sources can be politically biased but you don't have to be!`,
		author: `John Grisham`,
		logo: ''
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: ['Open Sans', 'Libre Baskerville']
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
				include_favicon: false
			}
		}
	]
}
