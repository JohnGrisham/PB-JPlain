import { graphql, useStaticQuery } from 'gatsby'

export function useGetNews() {
	const data = useStaticQuery(
		graphql`
			query {
				allNewsArticles {
					edges {
						node {
							source {
								id
								name
							}
							content
							title
							author
							description
							url
							urlToImage
							publishedAt
						}
					}
				}
			}
		`
	)

	return data
}
