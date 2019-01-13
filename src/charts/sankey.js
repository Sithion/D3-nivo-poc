import React from 'react';
import {ResponsiveSankey} from '@nivo/sankey'

const data = {
	"nodes": [
		{
			"id": "John",
			"color": "hsl(59, 70%, 50%)"
		},
		{
			"id": "Raoul",
			"color": "hsl(44, 70%, 50%)"
		},
		{
			"id": "Jane",
			"color": "hsl(205, 70%, 50%)"
		},
		{
			"id": "Marcel",
			"color": "hsl(198, 70%, 50%)"
		},
		{
			"id": "Ibrahim",
			"color": "hsl(38, 70%, 50%)"
		},
		{
			"id": "Junko",
			"color": "hsl(72, 70%, 50%)"
		},
		{
			"id": "Lyu",
			"color": "hsl(5, 70%, 50%)"
		},
		{
			"id": "André",
			"color": "hsl(191, 70%, 50%)"
		},
		{
			"id": "Maki",
			"color": "hsl(160, 70%, 50%)"
		},
		{
			"id": "Véronique",
			"color": "hsl(293, 70%, 50%)"
		},
		{
			"id": "Thibeau",
			"color": "hsl(97, 70%, 50%)"
		},
		{
			"id": "Josiane",
			"color": "hsl(286, 70%, 50%)"
		},
		{
			"id": "Raphaël",
			"color": "hsl(23, 70%, 50%)"
		}
	],
	"links": [
		{
			"source": "Marcel",
			"target": "Thibeau",
			"value": 101
		},
		{
			"source": "John",
			"target": "Raphaël",
			"value": 33
		},
		{
			"source": "John",
			"target": "André",
			"value": 87
		},
		{
			"source": "Junko",
			"target": "Maki",
			"value": 166
		},
		{
			"source": "Junko",
			"target": "Véronique",
			"value": 196
		},
		{
			"source": "Thibeau",
			"target": "Ibrahim",
			"value": 45
		},
		{
			"source": "Raoul",
			"target": "Ibrahim",
			"value": 195
		},
		{
			"source": "Raoul",
			"target": "Josiane",
			"value": 96
		},
		{
			"source": "André",
			"target": "Lyu",
			"value": 169
		},
		{
			"source": "Ibrahim",
			"target": "Raphaël",
			"value": 63
		},
		{
			"source": "Véronique",
			"target": "Ibrahim",
			"value": 13
		},
		{
			"source": "Véronique",
			"target": "Raoul",
			"value": 110
		},
		{
			"source": "Jane",
			"target": "Ibrahim",
			"value": 19
		},
		{
			"source": "Jane",
			"target": "John",
			"value": 145
		},
		{
			"source": "Maki",
			"target": "Raphaël",
			"value": 156
		},
		{
			"source": "Josiane",
			"target": "Lyu",
			"value": 39
		}
	]
};
export default ({title}) => (
	<ResponsiveSankey
		data={data}
		margin={{
			'top': 40,
			'right': 160,
			'bottom': 40,
			'left': 50
		}}
		align="justify"
		colors="category10"
		nodeOpacity={1}
		nodeWidth={18}
		nodeBorderColor="inherit:darker(0.8)"
		linkHoverOthersOpacity={0.1}
		enableLinkGradient={true}
		labelPosition="outside"
		labelOrientation="vertical"
		labelPadding={16}
		labelTextColor="inherit:darker(1)"
		animate={true}
		motionStiffness={120}
		motionDamping={11}
		legends={[
			{
				'anchor': 'bottom-right',
				'direction': 'column',
				'translateX': 130,
				'itemWidth': 100,
				'itemHeight': 14,
				'itemDirection': 'right-to-left',
				'itemsSpacing': 2,
				'itemTextColor': '#999',
				'symbolSize': 14,
				'effects': [
					{
						'on': 'hover',
						'style': {
							'itemTextColor': '#000'
						}
					}
				]
			}
		]}
	/>
)
