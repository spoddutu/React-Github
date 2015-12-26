var React = require('react')
var Header = require('./header.jsx')
var Repos = require('./repos.jsx')

module.exports = React.createClass({
	render: function(){
		return(
			<div>
				<Header />
				{this.props.children}
			</div>
		)
	}
})