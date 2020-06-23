import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchChartData } from "./redux/action";
import Background from "./assets/background.jpg";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {} // data is made to store API data
    };
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    const { fetchChartData } = this.props;
    fetchChartData(this.input.value); // API call is made
    this.props.history.push("/weather-information"); // <--- The page you want to redirect your user to.
  }

  render() {
    return (
      <div className="homeWrapper">
        <div className="homeOuter">
          {/* <img src={Background} /> */}
          <form onSubmit={e => this.submitForm(e)}>
            <input
              className="inputWrapper"
              placeholder="Enter a City Name"
              ref={city => {
                this.input = city;
              }}
            />
            <button type="submit" className="button">
              Get The ForeCast
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // connecting the redux store
  return {
    data: state.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChartData: val => dispatch(fetchChartData(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
