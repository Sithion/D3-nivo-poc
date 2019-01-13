import React, {Component} from 'react';
import './App.css';
import {HeatMap, Sankey} from './charts';

class App extends Component{
	render(){
		return (
			<div className="App">
				<div className="chart-container">
					<div className="chart">
						<HeatMap />
						<div className="title">
							Zone Traffic
						</div>
					</div>
					<div className="chart">
						<Sankey title={'Zone Traffic'}/>
						<div className="title">
							Traffic Flow
						</div>
					</div>

				</div>
			</div>
		);
	}
}

export default App;
