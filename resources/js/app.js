import React from 'react'
import ReactDOM from 'react-dom'
import OffersList from './com/offers_list.jsx'
import initServer from './fake-api.js'

initServer()

fetch("/api/offers")
	.then(res => res.json())
	.then(json => render(json))

function render(data) {
	ReactDOM.render(
	  	<OffersList data={data}/>,
	  	document.getElementById('app')
	)
}


