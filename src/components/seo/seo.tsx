import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'
import React from 'react'

export interface SEOProps {
	title: string
	description?: string
	previewImage?: { src?: string; width?: number }
	lang?: string
	meta?: []
}

const SEO: React.FC<SEOProps> = ({ description = '', lang = 'en', meta = [], previewImage, title }) => {
	const { allFile, site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						logo
					}
				}
				allFile(filter: { internal: { mediaType: { regex: "/image/" } } }) {
					nodes {
						relativePath
						publicURL
					}
				}
			}
		`
	)

	const metaDescription = description || site.siteMetadata.description
	const defaultTitle = site.siteMetadata?.title
	const metaPreview = site.siteMetadata?.logo || previewImage?.src

	const previewImagePath = React.useMemo(() => {
		if (!metaPreview) {
			return ''
		}

		const match = allFile.nodes.find(({ relativePath }: { relativePath: string }) => metaPreview === relativePath)

		if (match && match.publicURL) {
			return `${match.publicURL}${previewImage?.width ? `?w=${previewImage.width}` : ''}`
		}
	}, [allFile, metaPreview, previewImage])

	return (
		<Helmet
			htmlAttributes={{
				lang
			}}
			title={title}
			titleTemplate={defaultTitle ? `${defaultTitle} | %s` : undefined}
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
					content: previewImagePath,
					property: `og:image`
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
