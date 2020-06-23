import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomePage from "./HomePage";
import WeatherComponent from "./WeatherComponent";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/weather-information"
          component={() => <WeatherComponent store={store} />}
        />
      </Router>
    </Provider>
  );
}
