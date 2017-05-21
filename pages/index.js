import Head from 'next/head'
import Page from './../layouts/main'

export default () => (
  <Page>
		<Head>
			<title>Godev.Space - @lasalefamine - Alessio Occhipinti</title>
			<link rel="stylesheet" href="/static/stellar.css" />
			<script>
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

				ga('create', 'UA-74988372-1', 'auto');
				ga('send', 'pageview');
			</script>
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
									<li>
										<i className="fa fa-github"></i>
										<a href="https://github.com/lasalefamine" target="_blank"><span>github.com/lasalefamine</span></a>
									</li>
									<li>
										<i className="fa fa-linkedin" aria-hidden="true"></i>
										<a href="https://linkedin.com/in/alessioocchipinti" target="_blank"><span>/in/alessioocchipinti</span></a>
									</li>
									<li>
										<i className="fa fa-twitter" aria-hidden="true"></i>
										<a href="https://twitter.com/lasalefamine" target="_blank"><span>@lasalefamine</span></a>
									</li>
									<li>
										<i className="fa fa-tasks" aria-hidden="true"></i>
										<a href="/projects"><span>/projects</span></a>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</section>
			</div>
		</div>
  </Page>
)
