import Head from 'next/head'
import Link from 'next/prefetch'

import Page from './../layouts/main'
import Projects from './../components/project-boxes'
import Footer from './../components/footer'

const analytics = () => {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-74988372-1', 'auto');
	ga('send', 'pageview');
}

export default () => (
	<Page>
		<Head>
			<title>Godev.Space/projects</title>
			<script>
				analytics()
			</script>
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
