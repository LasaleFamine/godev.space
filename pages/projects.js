import Head from 'next/head'
import Link from 'next/prefetch'

import Page from './../layouts/main'
import Projects from './../components/project-boxes'
import Footer from './../components/footer'

export default () => (
	<Page>
		<Head>
			<title>Godev.Space/projects</title>
		</Head>

		<section className="hero is-black">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">
						<Link href="/">&#8592;</Link> /projects
					</h1>
					<h2 className="subtitle is-pulled-right">
						<img style={{height: '50px', background: 'transparent'}} src="/static/phi-inverted.png" />
					</h2>
				</div>
			</div>
		</section>

		<Projects></Projects>

		<Footer></Footer>

	</Page>
)
