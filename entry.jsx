import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store';
import {Provider} from 'react-redux';
import BoardContainer from './board_container';


const App = ({store}) => (
	<Provider store={store}>
		<BoardContainer />
	</Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
    const root = document.getElementById('root');
    ReactDOM.render(<App store={store} />, root);
});
