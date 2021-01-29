// article-template.styled.tsx
import styled from 'styled-components'
export const Article = styled.article`
   background-color: white;
   color: ${({ theme }) => theme.colors.mediumGray};
   display: flex;
   flex-direction: column;
   padding: 2em 10vw 2em 10vw;
`
export const Author = styled.div`
   display: flex;
   justify-content: center;
`
export const AfterTitle = styled.div`
   margin: auto auto;
   width: 100%;
   @media all and (min-width: 700px) {
     width: 70%;
   }
`
export const Content = styled.div`
   display: flex;
   flex: 1;
   margin-top: 2em;
   max-width: 100vw;
   overflow: hidden;
   word-wrap: break-word;
   div {
   max-width: 100%;
   }
`
export const Heading = styled.h1`
  font-size: 2em;
`
export const List = styled.ul`
  list-style-type: disc;
`
export const Paragraph = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`
export const SubHeading = styled.h2`
  font-size: 1.5em;
`
export const Title = styled.h1`
  font-size: 3em;
  text-align: center;
`