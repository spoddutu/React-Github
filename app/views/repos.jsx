var React = require('react')
var SuperAgent = require('superagent')
var RepoCard = require('./repo-card.jsx')
var RepoActions = require('../actions/repos-actions.js')
var RepoStore = require('../stores/repo-store.js')

module.exports = React.createClass({
	getInitialState: function(){
		return RepoStore.getState()
	},

	componentWillMount: function(){
		RepoStore.listen(this.onChange)
	},

	componentWillUnmount: function(){
		RepoStore.unlisten(this.onChange)
	},

	onChange: function(state){
		this.setState(state)
	},

	showRepos: function(){
		return this.state.repos.map(function(repo){
			return (
				<RepoCard key={repo.id} repo={repo}/>
			)
		})
	},

	renderLoading: function(){
		if(this.state.loading){
			return (
		  		<div className="progress">
		  			<div className="indeterminate"></div>
		  		</div>
		  	)
		}
		else{
			return ""
  		}		
	},

	search: function(e){
		e.preventDefault()
		var searchText = this.refs.searchText.value
		RepoActions.search(searchText)
	},

	render: function(){
		return (
		  	<div className="container">
		  		<form onSubmit={this.search}>
		  			<div className="input-field">
		  				<label>Search GitHub Repos</label>
		  				<input type="text" ref="searchText"/>
		  			</div>
		  		</form>
		  		{this.renderLoading()}
			  	<div className="row">
			  		{this.showRepos()}
			    </div>
		    </div>
		)
	}
})