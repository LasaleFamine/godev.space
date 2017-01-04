import Head from 'next/head'
import Link from 'next/prefetch'

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
			<link rel="stylesheet" href="/static/stellar.css" />
		</Head>

		<div className="__sky-container">
			<div className="__sky">
				<div className="stars"></div>
				<div className="stars1"></div>
				<div className="stars2"></div>
				<div className="shooting-stars"></div>
				<section className="hero is-transparent is-medium">
					<div className="hero-body">
						<div className="container has-text-centered">
							<h1 className="title fadeIn animated">
								Godev Space
							</h1>
							<h2 className="subtitle rotateIn animated">
								<img style={{height: '50px'}} src="/static/phi-inverted.png" />
							</h2>
						</div>
					</div>

					<div className="hero-foot">
						<nav className="tabs icons-nav">
							<div className="container">
								<ul className="icon-bar">
									<li className="fadeInLeft animated">
										<i className="fa fa-github"></i>
										<a href="https://github.com/lasalefamine" target="_blank"><span>github.com/lasalefamine</span></a>
									</li>
									<li className="fadeInUp animated">
										<i className="fa fa-linkedin" aria-hidden="true"></i>
										<a href="https://linkedin.com/in/alessioocchipinti" target="_blank"><span>/in/alessioocchipinti</span></a>
									</li>
									<li className="fadeInDown animated">
										<i className="fa fa-twitter" aria-hidden="true"></i>
										<a href="https://twitter.com/lasalefamine" target="_blank"><span>@lasalefamine</span></a>
									</li>
									<li className="fadeInRight animated">
										<i className="fa fa-tasks" aria-hidden="true"></i>
										<Link href="/projects"><a><span>/projects</span></a></Link>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</section>
			</div>
		</div>
	</div>
)
