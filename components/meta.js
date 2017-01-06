import Head from 'next/head'

export default () => (
  <div>
    <Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.2.3/css/bulma.min.css" rel="stylesheet" type="text/css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet" type="text/css" />
    </Head>

    { /* global styles */ }
    <style jsx global>{`
			html {
			    height: 100%;
			}

			html body {
			    width: 100%;
			    height: 100%;
			    margin: 0;
			    font-family: 'Josefin Sans', sans-serif;
			}

			body > div:nth-of-type(1), #__next, #__main {
			    height: 100%;
			}

			.hero.is-transparent {
			    background-color: rgba(255, 255, 255, 0);
			}

			.hero.is-transparent h1 {
			    color: #fff;
			}

			.icon-bar li {
			    overflow: hidden;
			    background: transparent;
			    list-style: none;
			    white-space: nowrap;
			    margin-right: 10px;
			    border-radius: 25px;
			    display: inline-block;
			}

			.icon-bar li a {
			    opacity: 0;
			    color: #666;
			    max-width: 0;
			    display: inline-block;
			    text-decoration: none;
					padding: 0;
			    transition: max-width .5s ease-out .1s, opacity .5s ease-out .1s, color;
			}

			.icon-bar li a:hover {
			    color: #eee;
					text-decoration: none!important;
			}

			.icon-bar li a span {
			    float: right;
			    display: block;
			    padding-right: 1em;
					line-height: 2.5;
			}

			.icon-bar li>i {
			    color: #FFF;
			    line-height: 1;
			    font-size: 25px;
			    display: inline-block;
			    padding: .125em .375em;
			}

			.icon-bar li:hover {}
			.icon-bar li:hover a {
			    opacity: 1;
			    max-width: 150px;
			    transition: max-width 1s ease-out .1s, opacity 1s ease-out .1s, color .2s;
			}

			.tabs.icons-nav {
				justify-content: center;
			}

    `}</style>
  </div>
)
