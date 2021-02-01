const typeDefs = require('./src/graphql/typedefs.js')

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	createTypes(typeDefs)
}

exports.createPages = async ({ actions: { createPage }, graphql })   => {
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