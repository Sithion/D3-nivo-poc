import React from 'react';
import {ResponsiveHeatMap} from '@nivo/heatmap'


const data = [
	{
		'zone': 'Home Depot',
		'Home Depot': 0,
		'Walmart': 60,
		'Target 2': 30,
		'Target 1': 0,
		'Entire Model Shop': 45,
		'Khol`s': 15,
	},
	{
		'zone': 'Walmart',
		'Walmart': 0,
		'Home Depot': 10,
		'Target 2': 0,
		'Target 1': 0,
		'Entire Model Shop': 0,
		'Khol`s': 0,
	},
	{
		'zone': 'Target 2',
		'Target 2': 0,
		'Home Depot': 0,
		'Walmart': 10,
		'Target 1': 0,
		'Entire Model Shop': 0,
		'Khol`s': 0,
	},
	{
		'zone': 'Target 1',
		'Target 1': 0,
		'Home Depot': 10,
		'Target 2': 0,
		'Walmart': 0,
		'Entire Model Shop': 0,
		'Khol`s': 0,
	},
	{
		'zone': 'Entire Model Shop',
		'Entire Model Shop': 0,
		'Home Depot': 10,
		'Target 2': 0,
		'Target 1': 0,
		'Walmart': 0,
		'Khol`s': 0,
	},
	{
		'zone': 'Khol`s',
		'Khol`s': 0,
		'Home Depot': 10,
		'Target 2': 0,
		'Target 1': 0,
		'Entire Model Shop': 0,
		'Walmart': 0,
	}
];
export default ({title}) => (
	<div className="chart-container">
		<div className="chart">
			<ResponsiveHeatMap
				data={data}
				keys={[
					'Home Depot',
					'Walmart',
					'Target 2',
					'Target 1',
					'Entire Model Shop',
					'Khol`s'
				]}
				indexBy="zone"
				margin={{
					'top': 120,
					'right': 80,
					'bottom': 80,
					'left': 100
				}}
				axisTop={{
					'orient': 'top',
					'tickSize': 5,
					'tickPadding': 5,
					'tickRotation': -90,
					'legend': '',
					'legendOffset': 36
				}}
				cellOpacity={1}
				enableLabels={false}
				colors={[
					'#fff',
					'#DAEFF7',
					'#81CAE6',
					'#1A99D0',
				]}
				hoverTarget="cell"
				cellHoverOthersOpacity={0.7}
			/>
		</div>
		<div className="title">{title}</div>
	</div>
)
