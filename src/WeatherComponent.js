import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import arrow from "./assets/arrow.png";
import ChartBuilder from "./ChartBuilder.js";

class WeatherComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  morphData = (data, str) => {
    // function to morph API data (perday 2 data points fetched 9.00am and 6.00pm for better plotting of graph)
    const arr = [];
    data &&
      data.map(val => {
        if (
          val.dt_txt.includes("09:00:00") ||
          val.dt_txt.includes("18:00:00")
        ) {
          var temp = {};
          var date = val.dt_txt
            .split(" ")[0]
            .split("-")
            .reverse()
            .slice(0, 2)
            .join("/");
          var time = val.dt_txt
            .split(" ")[1]
            .split(":")
            .slice(0, 2)
            .join(":");
          var dateTime = date + "," + time;

          temp.x = dateTime;
          temp.y =
            str === "temprature"
              ? val.main.temp
              : str === "humidity"
              ? val.main.humidity
              : val.main.pressure;
          arr.push(temp);
        }
      });
    return arr;
  };

  render() {
    const { data } = this.props;
    const tempData = this.morphData(data.list, "temprature");
    const humiData = this.morphData(data.list, "humidity");
    const pressureData = this.morphData(data.list, "pressure");

    return (
      <div>
        <div className="navBar">
          <div className="navIcon">
            <Link to="/" className="homeLink">
              <img src={arrow} alt="back button" className="iconClass" />
            </Link>
          </div>
          <div className="navText">Weather Report</div>
        </div>
        <div className="chartWrapper">
          <ChartBuilder heading={"Temperature"} data={tempData} />
          <ChartBuilder heading={"Humidity"} data={humiData} />
          <ChartBuilder heading={"Pressure"} data={pressureData} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

export default connect(mapStateToProps)(WeatherComponent);
