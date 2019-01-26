import moment from "moment";

const CALENDAR_ROWS = 6;
const CALENDAR_WEEKDAYS = 7;
export const QANTITY_YEARS = 10;

export const yearOptions = () => {
  let yearArray = [];
  for (let i = moment().year() - QANTITY_YEARS; i <= moment().year() + QANTITY_YEARS; i++) {
    yearArray.push(
      { value: i, label: i }
    );
  }
  return yearArray;
};

export const generateCalendar = (month, year) => {
  const endOfSelectedMonth = moment()
    .year(year)
    .month(month)
    .endOf("month")
    .date();
  const endOfLastMonth = moment()
    .year(year)
    .month(month)
    .add(-1, "months")
    .endOf("month")
    .date();
  const weekEndOfLastMonth = moment()
    .year(year)
    .month(month)
    .add(-1, "months")
    .endOf("month")
    .days();

  const hasWeekForLastMonth = weekEndOfLastMonth > 0;
  let monthValue = hasWeekForLastMonth ? (month - 1 >= 0 ? month - 1 : 11) : month;
  let yearValue = hasWeekForLastMonth && monthValue === 11 ? year - 1 : year;
  let result = [];
  let date = hasWeekForLastMonth ? endOfLastMonth + 1 - weekEndOfLastMonth : 1;
  for (let i = 0; i < CALENDAR_ROWS; i++) {
    let week = [];
    for (let j = 0; j < CALENDAR_WEEKDAYS; j++) {
      week.push(moment().year(yearValue).month(monthValue).date(date).startOf('day'));
      if (
        (i > 0 && date === endOfSelectedMonth) ||
        (i === 0 && date === endOfLastMonth)
      ) {
        date = 1;
        monthValue++;
        if (monthValue === 12) {
          monthValue = 0;
          yearValue++;
        }
      } else {
        date++;
      }
    }
    result.push(week);
  }

  return result;
};

export const parseInfo = weatherList => {
  const chunk = 8;
  let result = [];
  let tempArray;

  for (let i = 0, j = weatherList.length; i < j; i += chunk) {
    tempArray = weatherList.slice(i, i + chunk);
    result.push(tempArray);
  }

  return result.map(dayInfo => {
    return calculateAverage(dayInfo);
  });
};

const calculateAverage = arrayInfo => {
  let temp = 0;
  let weather = [];
  for (let i = 0; i < arrayInfo.length; i++) {
    temp += arrayInfo[i].main.temp;
    const weatherInfo = arrayInfo[i].weather[0];
    const indexOf = mapByProperty(weather, "id").indexOf(weatherInfo.id);
    if (indexOf >= 0) {
      weather[indexOf].appearences++;
    } else {
      weather.push({
        id: weatherInfo.id,
        name: weatherInfo.main,
        appearences: 1,
        icon: weatherInfo.icon.replace('n','d')
      });
    }
  }

  const weatherDay = moment(arrayInfo[0].dt_txt).startOf('day');
  const indexOfMax = mapByProperty(weather, "appearences").indexOf(
    maxAppearences(weather)
  );

  return {
    date: weatherDay,
    temperature: celsiusAverage(temp),
    weather: weather[indexOfMax].name,
    icon: `https://openweathermap.org/img/w/${weather[indexOfMax].icon}.png`
  };
};

const mapByProperty = (array, property) => {
  return array.map(e => {
    return e[property];
  });
};

const maxAppearences = array => {
  return Math.max.apply(Math, mapByProperty(array, "appearences"));
};

const celsiusAverage = (temp) => {
  return Math.floor(temp / 8);
}
