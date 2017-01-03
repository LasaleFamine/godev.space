
import Head from 'next/head'

export default () => (
	<div>
		<Head>
			<title>Godev.Space - @lasalefamine - Alessio Occhipinti</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="https://opensource.keycdn.com/fontawesome/4.7.0/font-awesome.min.css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.min.css" rel="stylesheet" type="text/css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="/static/projects.css" />
			<link rel="stylesheet" href="/static/style.css" />
		</Head>

		<section className="hero is-black">
			<div className="hero-body">
				<div className="container">
					<h1 className="title">
						<a href="/" title="Back">&#8592;</a> /projects
					</h1>
					<h2 className="subtitle is-pulled-right">
						<img style={{height: '50px', background: 'transparent'}} src="/static/phi-inverted.png" />
					</h2>
				</div>
			</div>
		</section>
		<section className="main section__projects">
			<div className="container material__cards">
				<div className="columns">
					<div className="column flipInX animated">
						<a href="https://ragusabot.com">
							<img className="material__card_dimension material__card material__card-1" src="/static/screencapture-ragusabot.png"/>
						</a>
					</div>
				</div>
				<div className="columns">
					<div className="column flipInY animated">
						<a href="https://beta.webcomponents.org/author/lasalefamine">
							<img className="material__card_dimension material__card material__card-1" src="/static/web-components-polymer.png"/>
						</a>
					</div>
					<div className="column flipInX animated">
						<a href="https://www.npmjs.com/~lasalefamine">
							<img className="material__card_dimension material__card material__card-1" src="/static/npmnodejs.png"/>
						</a>
					</div>
				</div>
				{/*	<div className="ml">
					<div className="card card-1 ml-item ml-flip--md ml-flip">
						<div className="ml-item__cntnt ml-flip__cntnt">
						<img src="/static/screencapture-ragusabot.png" className="ml-flip__pnl ml-flip__pnl--front"/>
							<div className="ml-flip__pnl ml-flip__pnl--back bg--black">
								<p>Here is a flpped image...</p>
							</div>
						</div>
					</div>
					<div className="card card-1 ml-item ml-flip--md ml-flip">
						<div className="ml-item__cntnt ml-flip__cntnt">
						<img src="/static/web-components-polymer.png" className="ml-flip__pnl ml-flip__pnl--front"/>
							<div className="ml-flip__pnl ml-flip__pnl--back bg--green">
								<p>Here is a flpped image...</p>
							</div>
						</div>
					</div>
					<div className="card card-1 ml-item ml-flip--md ml-flip">
						<div className="ml-item__cntnt ml-flip__cntnt">
						<img src="/static/npmnodejs.png" className="ml-flip__pnl ml-flip__pnl--front"/>
							<div className="ml-flip__pnl ml-flip__pnl--back bg--green">
								<p>Here is a flpped image...</p>
							</div>
						</div>
					</div>
				</div>	*/}
			</div>
		</section>

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
