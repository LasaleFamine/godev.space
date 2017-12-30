import Head from 'next/head'

export default () => (
  <div>
    <Head>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
			<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" rel="stylesheet" type="text/css" />
			<link rel="apple-touch-icon" sizes="180x180" href="/static/icons/apple-touch-icon.png" />
			<link rel="icon" type="image/png" sizes="32x32" href="/static/icons/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="/static/icons/favicon-16x16.png" />
			<link rel="manifest" href="/static/manifest.json" />
			<link rel="mask-icon" href="/static/icons/safari-pinned-tab.svg" color="#5bbad5" />
			<meta name="theme-color" content="#ffffff" />
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

      .hero {
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        height: 100vh;
      }

      .icon-bar {
        display: flex;
        justify-content: center;
      }

			.icon-bar li {
          background: transparent;
          padding-right: 35px;
			    list-style: none;
			    white-space: nowrap;
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

			.icon-bar a {
			    color: #eee;
					text-decoration: none;
      }

			.icon-bar li > i {
			    color: #FFF;
			    line-height: 1;
			    font-size: 25px;
			    display: inline-block;
			    padding: .125em .375em;
      }

      .icon-bar li a span {
        visibility: hidden;
      }

			.icon-bar li:hover {}
			.icon-bar li:hover a {
			    opacity: 1;
			    max-width: 150px;
			    transition: max-width 1s ease-out .1s, opacity 1s ease-out .1s, color .2s;
      }

      .icon-bar li:hover a span {
        visibility: visible;
      }

			.tabs.icons-nav {
				justify-content: center;
			}

    `}</style>
  </div>
)
