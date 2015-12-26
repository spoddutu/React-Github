var React = require('react')
var SuperAgent = require('superagent')
var Link = require('react-router').Link

module.exports = React.createClass({
	getInitialState: function(){
		return {
			repo: {}
		}
	},
	componentWillMount: function(){
		SuperAgent.get(`https://api.github.com/repos/${this.props.params.owner}/${this.props.params.repoName}`)
			.send()
			.end(function(err, res){
				this.setState({
					repo: res.body
				})
			}.bind(this))
	},
	render: function(){
		return(
			<div className="container">
				<div>
					<Link to="/">Back</Link>
				</div>
				<div className="page-header">
					 <h2>{ this.state.repo.name }</h2>
				</div>
  				<div className="chip">
					{ this.props.params.owner }
  				</div>
  				<div>
				<a href={ this.state.repo.html_url } target="_blank">{this.state.repo.html_url}</a>
				<p>{ this.state.repo.description }</p>
				<ul className="collection">
					<li className="collection-item">
					  Forks
					  <span className="badge">
					    { this.state.repo.forks }
					    <i className="fa fa-code-fork"></i>
					  </span>
					</li>
					<li className="collection-item">
					  Issues
					  <span className="badge">
					    { this.state.repo.open_issues }
					    <i className="fa fa-exclamation-circle"></i>
					  </span>
					</li>
					<li className="collection-item">
					  Watchers
					  <span className="badge">
					    { this.state.repo.watchers }
					    <i className="fa fa-eye"></i>
					  </span>
					</li>
				</ul>
				</div>
            </div>
		)
	}
})