
import Head from 'next/head'
import Link from 'next/prefetch'

import Projects from './../components/project-boxes'

export default () => (
	<div id="__main">
		<Head>
			<title>Godev.Space - @lasalefamine - Alessio Occhipinti</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.min.css" rel="stylesheet" type="text/css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/static/style.css" />
			<link rel="stylesheet" href="/static/projects.css" />
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

		<footer className="footer">
			<div className="container">
				<div className="content has-text-centered">
					<p>
						<strong>Godev.Space</strong> - LasaleFamine - Alessio Occhipinti.
					</p>
					<p>
						The source code is licensed under <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
					</p>
					<p>
						<a className="icon" href="https://github.com/lasalefamine/godev.space">
							<i className="fa fa-github"></i>
						</a>
					</p>
				</div>
			</div>
		</footer>
	</div>
)
