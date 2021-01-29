import * as React from 'react'
import * as Styled from './styles'
import { Avatar, Image, Layout } from '../components'
import { ImageType } from '../enums'
import { Query } from '../interfaces'
import RehypeReact from 'rehype-react'
import { format } from 'date-fns'
import { graphql } from 'gatsby'
export const query = graphql`
   query($slug: String!) {
      allMarkdownRemark(filter: 
      { frontmatter: { slug: { eq: $slug }} }) {
            edges {
                node {
                    frontmatter {
                          author {
                               avatar
                               name
                       }
                       date
                       featuredImage
                       title
                    }
                    excerpt
                    htmlAst
                    }
               }
          }
     }
`
const articleTemplate: React.FC<{ data: { allMarkdownRemark: Query['allMarkdownRemark'] } }> = ({ data }) => {
  if (!data) {
    return null
  }
  const {
      allMarkdownRemark: {
             edges: [
                 {
                   node: { frontmatter, htmlAst }
                 }
              ]
          }
      } = { ...data }
  const renderAst = new (RehypeReact as any)({
      components: {
           h1: Styled.Heading,
           h2: Styled.SubHeading,
           p: Styled.Paragraph,
           ul: Styled.List
        },
        createElement: React.createElement
   }).Compiler
return (
  <Layout>
     <Styled.Article>
         {frontmatter && (<>
            <Styled.Title>{frontmatter.title}</Styled.Title>
           {frontmatter.author && (
           <Styled.Author>{frontmatter.author.avatar && 
           <Avatar avatar={frontmatter.author.avatar} />}
              <Styled.SubHeading>
              {frontmatter.author.name}
             </Styled.SubHeading>
           </Styled.Author>)}
      {(frontmatter.featuredImage 
      || frontmatter.date) && 
(<Styled.AfterTitle>
    {frontmatter.featuredImage && 
(<Image src={frontmatter.featuredImage} type={ImageType.FLUID}
style={frontmatter.date ? { marginBottom: '10px' } : undefined}/>)}
   {frontmatter.date && (
       <Styled.SubHeading style={{ textAlign: 'center' }}>
        {format(new Date(frontmatter.date), 'MMM do yyyy')}
       </Styled.SubHeading>
   )}
    </Styled.AfterTitle>)}</>)}
    <Styled.Content>{renderAst(htmlAst)}</Styled.Content>   
       </Styled.Article>
   </Layout>)
}

export default articleTemplate