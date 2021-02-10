import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ImageContainer from './components/image-container';
import { SearchBar, NavBar } from './components/bars';
import './assets/stylesheets/index.css';
import { Provider } from "react-redux";
import { createStore } from "redux";
import counterReducer from "./states/reducers";

const store = createStore(counterReducer);

const text = 
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque purus semper eget duis at tellus at. Odio facilisis mauris sit amet massa. Arcu dictum varius duis at consectetur lorem donec massa sapien. Tellus elementum sagittis vitae et leo. Id cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Arcu bibendum at varius vel pharetra vel. Tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Et egestas quis ipsum suspendisse. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum. '

class App extends Component {
	render() {
		return (
			<div className="page">
				<div className="menu-icon fixed"></div>
				<SearchBar />
				<div className="layout">
					<ImageContainer/>
					<div className="layout-info">
						<div className="inner">
							<NavBar />
							<div className="title">Atlantica Costa</div>
							<div className="description">{text}</div>
						</div>	
						<div className="footer">
							<span className="address">Reach us at: <br></br>13, Scranton Park Street, Scranton</span>
						</div>
						<img alt="logo" className="logo" src="/images/logo.png"></img>
					</div>
				</div>
			</div>
		)
	}
};

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
