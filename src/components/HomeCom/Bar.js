
import React, { Component } from 'react';
import { connect } from 'dva';
import { Chart, Geom, Axis, Tooltip, Legend, Coord } from 'bizcharts';
// 数据源
const data = [
  { genre: 'Sports', sold: 275, income: 2300 },
  { genre: 'Strategy', sold: 115, income: 667 },
  { genre: 'Action', sold: 120, income: 982 },
  { genre: 'Shooter', sold: 350, income: 5271 },
  { genre: 'Other', sold: 150, income: 3710 }
];

// 定义度量
const cols = {
  sold: { alias: '销售量' }, // 数据字段别名映射
  genre: { alias: '游戏种类' }
};

class Bar extends Component {
	constructor(props){
			super(props);
			this.state={
				 
			}
	}
	render(){
		return (
		<Chart width={800} height={400} data={data} scale={cols}>
    <Axis name="genre" />
    <Axis name="sold" />
    <Legend position="top" dy={-20} />
    <Tooltip />
    <Geom type="interval" position="genre*sold" color="genre" />
  </Chart>);
	}
}
export default Bar;

