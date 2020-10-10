import Image from '../components/image'
import { Link } from 'gatsby'
import React from 'react'
//import { useGetNews } from "../data/use-get-news"

const Home: React.FC = () => {
	//const data = useGetNews()

	//console.log(data)

	return (
		<>
			<h1>Hi people</h1>
			<p>Welcome to your new Gatsby site.</p>
			<p>Now go build something great.</p>
			<div style={{ marginBottom: `1.45rem`, maxWidth: `300px` }}>
				<Image />
			</div>
			<Link to="/page-2/">Go to page 2</Link> <br />
			<Link to="/using-typescript/">Go to Using TypeScript</Link>
		</>
	)
}

export default Home
