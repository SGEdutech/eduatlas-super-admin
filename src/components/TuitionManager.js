import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchTuitionsAction } from '../actions/tuitionActions'

import ClaimFilter from './ClaimFilter';
import DateFilter from './DateFilter';
import Pagination from './Pagination';
import Search from './Search';
import SectionTitle from './SectionTitle';
import Table from './Table';

class TuitionManager extends Component {
	componentDidMount() {
		this.props.fetchTuitionsAction();
	}

	render() {
		return (
			<>
				<div className="row align-items-center">
					<div className="col-md-6"><Search /></div>
					<div className="col-md-4"><DateFilter /></div>
					<div className="col-md-2"><ClaimFilter /></div>
				</div>
				<SectionTitle />
				<Table tuitions={this.props.tuitions} />
				<Pagination />
			</>
		);
	}
}

const mapStateToProps = state => {
	return {
		tuitions: state.tuition.tuitions,
		fetching: state.tuition.fetching,
		fetched: state.tuition.fetched,
		error: state.tuition.error
	}
}

export default connect(mapStateToProps, { fetchTuitionsAction })(TuitionManager);
