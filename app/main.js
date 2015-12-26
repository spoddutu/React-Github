var React = require('react')
var $ = require('jquery')
var ReactDOM = require('react-dom')
var Router = require('react-router').Router
var routes = require('./routes.jsx')

ReactDOM.render(
	<Router>
		{routes}
	</Router>,
	document.querySelector("#main")
)
