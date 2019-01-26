import React from "react";
import { calendarHeader } from "../../utils/constants";
import moment from "moment";

const Calendar = ({
  today,
  monthDays,
  weatherInfo
}) => {
  return (
    <div>
      <div className="row text-center text-primary font-weight-bold">
        {calendarHeader.map((head, i) => {
          return (
            <div key={i} className="col">
              {head}
            </div>
          );
        })}
      </div>

      {monthDays.map((week, i) => {
        return (
          <div key={i} className="row text-center row-heigth">
            {week.map((day, j) => {
              return (
                <div key={j} className="col align-self-center">
                  <div
                    className={
                      moment(today).isSame(day, "day")
                        ? "font-weight-bold text-danger"
                        : "font-weight-bold"
                    }
                  >
                    {day.date()}
                  </div>
                  {weatherInfo.map((weather, k) => {
                    return (
                      moment(weather.date).isSame(day, "day") && (
                        <span className="text-secondary" key={k}>
                          <img
                            src={weather.icon}
                            width="30"
                            height="30"
                            alt={`weather-icon-${k}`}
                          />
                          {weather.weather} ({weather.temperature} °C)
                        </span>
                      )
                    );
                  })}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Calendar;
