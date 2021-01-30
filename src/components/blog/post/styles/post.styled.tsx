// post.styled.tsx
import { Card } from '@material-ui/core'
import { Image } from '../../../image'
import { Link } from 'gatsby'
import styled from 'styled-components'
export const AuthorInfo = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h4 {
   margin: 0px;
  }
`
export const FeaturedImage = styled(Image).attrs(() => ({
   aspectRatio: 21 / 11,
   type: 'fluid'
}))`
   flex: 1;
`
export const Info = styled.div`
   align-items: center;
   display: flex;
   flex-direction: column;
   margin-top: 1em;
`
export const PostItem = styled(Card).attrs({
   raised: true
})`
   align-items: center;
   display: flex;
   flex-direction: column;
   text-align: center;
`
export const PostContent = styled.span`
   padding: 1em;
`
export const PostContentUpper = styled.div`
   margin-bottom: 10px;
   
   h3 {
   margin: 0px;
   }
`
export const PostLink = styled(Link)`
   color: ${({ theme }) => theme.colors.black};
   display: flex;
   flex: 1;
   flex-direction: column;
   text-decoration: none;
   width: 100%;
`