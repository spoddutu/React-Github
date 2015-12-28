"use strict"
var Alt = require('../alt-flux.js')
var RepoActions = require('../actions/repos-actions.js')

class RepoStore {

	constructor(){
		this.repos = []
		this.loading = false

		this.bindListeners({
			search: RepoActions.search,
			searchComplete: RepoActions.searchComplete
		})
	}

	search(){
		console.log("search is called...")
		this.loading = true
	}

	searchComplete(repos){
		this.loading = false
		this.repos = repos
	}

}

module.exports = Alt.createStore(RepoStore)