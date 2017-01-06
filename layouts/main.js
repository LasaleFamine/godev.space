import Meta from './../components/meta'

export default ({ children }) => (
	<div id="__main">

    { children }

    {/* global styles and meta tags */}
    <Meta />

  </div>
)
