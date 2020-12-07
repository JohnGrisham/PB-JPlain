exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
	if (stage === 'build-html') {
		actions.setWebpackConfig({
			externals: getConfig().externals.concat(function (context, request, callback) {
				const regex = /^@?firebase(\/(.+))?/
				// exclude firebase products from being bundled, so they will be loaded using require() at runtime.
				if (regex.test(request)) {
					return callback(null, 'umd ' + request)
				}
				callback()
			})
		})
	}
}

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	const typeDefs = `
	type MarkdownRemarkFrontmatter {
		title: String!
		slug: String!
		date: Date
		featuredImage: String
	}

	type MarkdownRemark implements Node {
		frontmatter: MarkdownRemarkFrontmatter
	}
  `
	createTypes(typeDefs)
}

exports.createPages = async ({ actions: { createPage }, graphql }) => {
	const {
		data: { allMarkdownRemark, errors }
	} = await graphql(`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							slug
						}
					}
				}
			}
		}
	`)

	if (!allMarkdownRemark || errors) {
		// eslint-disable-next-line no-console
		console.log('Error retrieving data', errors || 'No data could be found for this query!')
		return
	}

	const articleTemplate = require.resolve('./src/templates/article-template.tsx')

	allMarkdownRemark.edges.forEach((edge) => {
		createPage({
			component: articleTemplate,
			context: {
				slug: edge.node.frontmatter.slug
			},
			path: `/blog/${edge.node.frontmatter.slug}/`
		})
	})
}
