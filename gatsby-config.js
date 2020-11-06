/* eslint-disable sort-keys */
/* eslint-disable @typescript-eslint/naming-convention */
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: `Echo Breaking News`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
		logo: 'gatsby-icon.png'
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
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-typescript`,
		`gatsby-plugin-css-modules-typings`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-source-newsapi`,
			options: {
				apiKey: `1f358602ba2f4842a88b039de45502c8`,
				variables: {
					sources: ['bbc-news', 'cnn'],
					queries: [
						'politics',
						'political',
						'president',
						'republican',
						'democrat',
						'congress',
						'senate',
						'governor',
						'mayor',
						'congress man',
						'congress woman',
						'house majority leader',
						'house minority leader'
					]
				}
			}
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
}
