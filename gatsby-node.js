/* eslint-disable @typescript-eslint/no-var-requires */
const typeDefs = require('./src/graphql/typedefs.js')

exports.createSchemaCustomization = ({ actions }) => {
	const { createTypes } = actions
	createTypes(typeDefs)
}
