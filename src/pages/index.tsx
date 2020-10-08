import { Bias } from "../enums"
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { useGetNews } from "../data/use-get-news"
import { getUserSources } from "../logic/get-user-sources"

const IndexPage: React.FC = () => {
  const data = useGetNews()

  const user = {
    bias: Bias.Left,
    breakBiasTarget: -20,
    firstName: "John",
    lastName: "Grisham",
    email: "john.email.com",
    password: "test",
    userId: 1,
  }

  console.log(getUserSources(user))

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}

export default IndexPage
