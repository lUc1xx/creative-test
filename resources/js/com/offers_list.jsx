import React from 'react'
import Offer from './offer.jsx'

export default class OffersList extends React.Component {

	render() {
		return(
			<div className="offers__list">
				{this.props.data.map((item) => (
					<Offer key={item.id} data={item} />
				))}
			</div>
		)
	}
}