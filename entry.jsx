import ReactDOM from 'react-dom';
import React from 'react';
import configureStore from './store';
import {Provider} from 'react-redux';
import BoardContainer from './board_container';
import Modal from 'react-modal';


const App = ({store}) => (
	<Provider store={store}>
		<BoardContainer />
	</Provider>
);

document.addEventListener('DOMContentLoaded', () => {
    let store = configureStore();
		window.store = store;
		Modal.setAppElement(document.body);
    const root = document.getElementById('root');
    ReactDOM.render(<App store={store} />, root);
});
