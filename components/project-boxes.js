import React from 'react'
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
)
