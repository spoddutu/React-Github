var React = require('react')
var Link = require('react-router').Link

module.exports = React.createClass({
	render: function(){
		return (
        	<div className="col s6">
          		<div className="card blue-grey darken-1 animated flipInY">
	            	<div className="card-content white-text">
	              		<span className="card-title">{this.props.repo.full_name}</span>
	              		<p>{this.props.repo.description}</p>
	              		by <strong>{this.props.repo.owner.login}</strong>
	            	</div>
	            	<div className="card-action">
	            		<Link to={`/repo/${this.props.repo.owner.login}/${this.props.repo.name}`}>
	            			Details
	            		</Link>
	            	</div>
	          	</div>
	        </div>
		)
	}
})