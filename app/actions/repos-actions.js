"use strict"
var SuperAgent = require('superagent')
var alt = require('../alt-flux.js')

class ReposActions{

	search(searchText){
		SuperAgent.get("https://api.github.com/search/repositories")
			.query({q: searchText})
			.send()
			.end(function(err, res){
				this.searchComplete(res)
			}.bind(this))

		return;
	}

	searchComplete(res){
		return res.body.items
	}
}

module.exports = alt.createActions(ReposActions)
