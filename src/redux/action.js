import axios from "axios";
const CHART_DATA = "CHART_DATA";

export const fillChartData = data => {
  return {
    type: CHART_DATA,
    payload: data
  };
};

export const fetchChartData = city => {
  console.log("city", city);
  return dispatch => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast/?q=${city}&APPID=2a6724dd0c56d73cd0dc8ded36e53215`
      )
      .then(response => {
        const data = response.data;
        dispatch(fillChartData(data)); // dispatching the actio
      })
      .catch(error => {
        const errorMsg = "Error while Fetching!";
        console.log("error");
        return errorMsg;
      });
  };
};
