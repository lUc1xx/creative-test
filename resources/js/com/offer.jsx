import React from 'react'

export default class Offer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			like: false
		}
	}

 	toggleLike = () => {
		this.setState({
			like: !this.state.like
		})
	}

	render() {
		return(
			<div className="offer">
			
				<div className="offer__photos">
					{this.props.data.attributes.images.map((item, i) => (
						<img key={i} src={item.path} alt={item.description} />
					))}
				</div>

				<div className="offer__content">
					<h3 className="offer__content__title">
						{
							this.props.data.attributes.title 
							+ ' ' + this.props.data.attributes.area 
							+ ' ' + this.props.data.attributes.unit
						}
					</h3>
					<a href="#" className="offer__content__address">
						{
							this.props.data.attributes.address.city 
							+ ' ' + this.props.data.attributes.address.street 
							+ ' ' + this.props.data.attributes.address.house
							+ ' ' + this.props.data.attributes.address.room
						}
					</a>
					<div className="offer__content__price">
						{this.props.data.attributes.price} 
						<span>{this.props.data.attributes.currency}</span>
						<p>{this.props.data.attributes.price_type}</p>
					</div>
					<div className="offer__content__relationships">
						{
							this.props.data.relationships.attributes.first_name
							+ ' ' + this.props.data.relationships.attributes.last_name
							+ ' ' + this.props.data.relationships.attributes.middle_name
						}
					</div>

					{this.state.like === true ?
						<button className="offer__content__like" onClick={this.toggleLike}>
							<img src="img/like-active.svg" alt="star"/>
							В избранном
						</button>
					:
						<button className="offer__content__like" onClick={this.toggleLike}>
							<img src="img/like.svg" alt="star"/>
							В избранное
						</button>
					}
					
				</div>

			</div>
		)
	}
}