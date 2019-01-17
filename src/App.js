import React, { Component } from 'react';
import { Provider } from 'react-redux';

import TuitionManager from './components/TuitionManager';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="container">
					<TuitionManager />
				</div>
			</Provider>
		);
	}
}

export default App;
