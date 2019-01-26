import React, { Component } from "react";
import "./App.css";
import moment from "moment";
import axios from "axios";
import { months } from "./utils/constants";
import { generateCalendar, parseInfo, yearOptions } from "./utils/calendarUtils";
import { Calendar, Selector } from "./components";

//id=3128760 => Barcelona Spain.
const apiUrl = "http://api.openweathermap.org/data/2.5/forecast?id=3128760&units=metric&appid=46e1d672f4aa417c608d72f960125875";

const noPadding = {
  padding: '0px'
}

class App extends Component {
  state = {
    today: moment().startOf('day').utc(),
    selectedYear: moment().utc().year(),
    selectedMonth: moment().utc().month(),
    actualMonth: [],
    weatherInfo: [],
    error: null
  };

  componentDidMount = () => {
    const { selectedYear, selectedMonth } = this.state;
    this.setState({
      actualMonth: this.handleShowCalendar(selectedMonth, selectedYear)
    });
  };

  handleShowCalendar = (month, year) => {
    if (moment().utc().year() === year && moment().utc().month() === month) {
      this.getWeatherData(this.onSuccessGetWeatherData, this.onFailGetWeatherData);
    }

    return generateCalendar(month, year);
  };

  handleChangeYear = event => {
    const year = parseInt(event.target.value);
    this.setState({
      selectedYear: year,
      actualMonth: this.handleShowCalendar(this.state.selectedMonth, year),
      error: null
    });
  };

  handleChangeMonth = event => {
    const month = parseInt(event.target.value);
    this.setState({
      selectedMonth: month,
      actualMonth: this.handleShowCalendar(month, this.state.selectedYear),
      error: null
    });
  };

  getWeatherData = (onSuccess, onFail) => {
    axios
      .get(apiUrl)
      .then(function(response) {
        onSuccess(response.data.list);
      })
      .catch(function(error) {
        onFail(error.message);
      });
  };

  onSuccessGetWeatherData = responseList => {
    this.setState({
      weatherInfo: parseInfo(responseList)
    });
  };

  onFailGetWeatherData = error => {
    this.setState({
      error: error
    });
  };

  render() {
    const {
      today,
      selectedYear,
      selectedMonth,
      actualMonth,
      weatherInfo,
      error
    } = this.state;
    return (
      <div className="container" style={{ marginTop: "20px" }}>

        {
          error && <div className="alert alert-danger" role="alert">
          {error}
            </div>
        }
        <form>
          <div className="form-group row">
            <div className="col-sm-2" style={noPadding}>
              <Selector
                value={selectedYear}
                handleChange={this.handleChangeYear}
                options={yearOptions()}
              />
            </div>
            <div className="col-sm-2" style={noPadding}>
              <Selector
                value={selectedMonth}
                handleChange={this.handleChangeMonth}
                options={months}
              />
            </div>
          </div>
        </form>

        <Calendar
          today={today}
          monthDays={actualMonth}
          weatherInfo={weatherInfo}
        />
      </div>
    );
  }
}

export default App;
