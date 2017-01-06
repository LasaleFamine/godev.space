import Link from 'next/link'

export default () => (
	<section className="main section__projects">
		<div className="container material__cards">
			<div className="columns">
				<div className="column flipInX animated">
					<a href="https://ragusabot.com">
						<img className="material__card_dimension material__card material__card-1" src="/static/screencapture-ragusabot.png"/>
					</a>
				</div>
				<div className="column flipInX animated">
					<a href="https://.com">
						<img className="material__card_dimension material__card material__card-1" src="/static/screencapture-ng-pagespeed.png"/>
					</a>
				</div>
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
		</div>

		<style jsx>{`
			.section__projects {
				padding: 30px;
				position: relative;
			}

			.container.material__cards .columns {
				text-align: center;
			}

			.material__card_dimension {
				max-height: 150px;
				overflow: hidden;
			}

			.material__card-1 {
			  // box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
			  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
			}

			.material__card-1:hover {
			  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
			}
    `}</style>
	</section>
)
