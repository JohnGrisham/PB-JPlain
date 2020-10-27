import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'

export interface SEOProps {
	title: string
	description?: string
	lang?: string
	meta?: []
}

const SEO: React.FC<SEOProps> = ({ description = '', lang = 'en', meta = [], title }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description
	const defaultTitle = site.siteMetadata?.title

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
			meta={[
				{
					content: metaDescription,
					name: `description`
				},
				{
					content: title,
					property: `og:title`
				},
				{
					content: metaDescription,
					property: `og:description`
				},
				{
					content: `website`,
					property: `og:type`
				},
				{
					content: `summary`,
					name: `twitter:card`
				},
				{
					content: site.siteMetadata?.author || ``,
					name: `twitter:creator`
				},
				{
					content: title,
					name: `twitter:title`
				},
				{
					content: metaDescription,
					name: `twitter:description`
				}
			].concat(meta)}
		/>
	)
}

export default SEO
