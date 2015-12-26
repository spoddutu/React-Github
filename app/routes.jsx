var React = require('react')
var Route = require('react-router').Route
var IndexRoute = require('react-router').IndexRoute
var App = require('./views/app.jsx')
var Repos = require('./views/repos.jsx')
var RepoDetails = require('./views/repo-details.jsx')

module.exports = (
	<Route path="/" component={App}>
		<IndexRoute component={Repos} />
		<Route path="repo/:owner/:repoName" component={RepoDetails} />
	</Route>
)