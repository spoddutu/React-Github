var SuperAgent = require('superagent')
var Alt = require('../alt-flux.js')

class ReposActions{

	search(searchText){
		SuperAgent.get("https://api.github.com/search/repositories")
			.query({q: searchText})
			.send()
			.end(function(err, res){
				this.searchComplete(res)
			}.bind(this))

		this.dispatch();
	}

	searchComplete(res){
		this.dispatch(res.body.items)
	}
}

module.exports = Alt.createActions(ReposActions)