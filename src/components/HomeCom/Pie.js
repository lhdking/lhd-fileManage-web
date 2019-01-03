
import React, { Component } from 'react';
import { connect } from 'dva';
import { Chart, Geom, Axis, Tooltip, Legend,  Label,Coord } from 'bizcharts';
import DataSet from "@antv/data-set";
// 数据源
const data = [
      {
        item: "事例一",
        count: 40
      },
      {
        item: "事例二",
        count: 21
      },
      {
        item: "事例三",
        count: 17
      },
      {
        item: "事例四",
        count: 13
      },
      {
        item: "事例五",
        count: 9
      }
  ];
const { DataView } = DataSet;
// 定义度量
const cols = {
  sold: { alias: '销售量' }, // 数据字段别名映射
  genre: { alias: '游戏种类' }
};

class Pie extends Component {
	constructor(props){
			super(props);
			this.state={
				 
			}
	}
	render(){
		const dv = new DataView();
			dv.source(data).transform({
			type: "percent",
			field: "count",
			dimension: "item",
			as: "percent"
		});
		const cols = {
		  percent: {
			formatter: val => {
			  val = val * 100 + "%";
			  return val;
			}
		  }
		};
		return (
		<div>
        <Chart
          height={400}
          data={dv}
          scale={cols}
          padding={[80, 100, 80, 80]}
          forceFit
        >
          <Coord type="theta" radius={0.75} />
          <Axis name="percent" />
          <Legend
            position="right"
            offsetY={-window.innerHeight / 2	}
            offsetX={-100}
          />
          <Tooltip
            showTitle={false}
            itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
          />
          <Geom
            type="intervalStack"
            position="percent"
            color="item"
            tooltip={[
              "item*percent",
              (item, percent) => {
                percent = percent * 100 + "%";
                return {
                  name: item,
                  value: percent
                };
              }
            ]}
            style={{
              lineWidth: 1,
              stroke: "#fff"
            }}
          >
            <Label
              content="percent"
              formatter={(val, item) => {
                return item.point.item + ": " + val;
              }}
            />
          </Geom>
        </Chart>
      </div>
		
		);
	}
}
export default Pie;

