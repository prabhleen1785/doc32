import React, { Component } from "react";
import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis } from "victory";

export default class ChartBuilder extends Component {
  constructor() {
    super();
  }
  render() {
    const { heading, data } = this.props;
    return (
      <div>
        <h1>{heading}</h1>
        <div className="victoryChartHelper">
          <VictoryChart theme={VictoryTheme.material} className="victoryChart">
            <VictoryAxis dependentAxis />
            <VictoryAxis
              style={{
                tickLabels: { angle: -45, fontSize: 7 }
              }}
            />
            <VictoryLine data={data} />
          </VictoryChart>
        </div>
      </div>
    );
  }
}
