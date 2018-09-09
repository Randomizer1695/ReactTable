import React, {Component} from 'react';
import {connect} from 'react-redux';

class Details extends Component {
	render() {
		if (!this.props.store) {
			return (<p>Для информации выберите пользователя</p>);
		}
		return (
		<div>
		<p>Выбран пользователь: <b>{this.props.store.firstName} {this.props.store.lastName}</b></p>
		<p>Описание:</p>
		<textarea value={this.props.store.description} onChange={this.props.store.description}></textarea>
		<p>Адрес проживания:<b>{this.props.store.address.streetAddress}</b></p>
		<p>Город:<b>{this.props.store.address.city}</b></p>
		<p>Провинция/штат:<b>{this.props.store.address.state}</b></p>
		<p>Индекс:<b>{this.props.store.address.zip}</b></p>
		</div>
		);
	}
}

function mapStateToProps (state) {
	return {
		store: state.active
	};
}

export default connect(mapStateToProps)(Details);