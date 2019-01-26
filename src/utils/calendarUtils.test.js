import { generateCalendar, parseInfo, QANTITY_YEARS, yearOptions } from "./calendarUtils";
import moment from "moment";

test("Generating Calendar from today should have 6 rows and 7 columns per row", () => {
  const today = moment();
  const calendar = generateCalendar(today.month(), today.year());
  expect(calendar).not.toBe(null);
  expect(calendar.length).toBe(6);
  expect(calendar[0].length).toBe(7);
});

test("Generating Calendar from a day on 2019 april should be correct", () => {
  const today = moment().month(3).year(2019).date(1);
  const calendar = generateCalendar(today.month(), today.year());
  expect(calendar).not.toBe(null);
  expect(calendar.length).toBe(6);
  expect(calendar[0].length).toBe(7);
  expect(calendar).toEqual(mockCalendarApril2019);
});

test("Generating Calendar from a day on 2018 december should be correct", () => {
  const today = moment().month(11).year(2018).date(1);
  const calendar = generateCalendar(today.month(), today.year());
  expect(calendar).not.toBe(null);
  expect(calendar.length).toBe(6);
  expect(calendar[0].length).toBe(7);
  expect(calendar).toEqual(mockCalendarDecember2018);
});

test("ParseInfo from empty response should return empty data", () => {
  const weatherInfo = parseInfo([]);
  expect(weatherInfo).not.toBe(null);
  expect(weatherInfo.length).toBe(0);
  expect(weatherInfo).toEqual([]);
});

test('ParseInfo from dirty response should throw error', () => {
  expect(() => parseInfo([{},{}])).toThrowError();
});

test("ParseInfo should create correct data", () => {
  const weatherInfo = parseInfo(mockWeatherResponse);
  expect(weatherInfo).not.toBe(null);
  expect(weatherInfo.length).toBe(5);
});

test("YearOptions should list correct data", () => {
  const options = yearOptions();
  expect(options).not.toBe(null);
  expect(options.length).toBe(21);
  expect(options[QANTITY_YEARS].value).toBe(moment().year());
  expect(options[0].value).toBe(moment().year() - QANTITY_YEARS);
  expect(options[options.length-1].value).toBe(moment().year() + QANTITY_YEARS);
});


const mockCalendarApril2019 = [
  [
    moment().year(2019).month(3).date(1).startOf('day'),
    moment().year(2019).month(3).date(2).startOf('day'),
    moment().year(2019).month(3).date(3).startOf('day'),
    moment().year(2019).month(3).date(4).startOf('day'),
    moment().year(2019).month(3).date(5).startOf('day'),
    moment().year(2019).month(3).date(6).startOf('day'),
    moment().year(2019).month(3).date(7).startOf('day')
  ],
  [
    moment().year(2019).month(3).date(8).startOf('day'),
    moment().year(2019).month(3).date(9).startOf('day'),
    moment().year(2019).month(3).date(10).startOf('day'),
    moment().year(2019).month(3).date(11).startOf('day'),
    moment().year(2019).month(3).date(12).startOf('day'),
    moment().year(2019).month(3).date(13).startOf('day'),
    moment().year(2019).month(3).date(14).startOf('day')
  ],
  [
    moment().year(2019).month(3).date(15).startOf('day'),
    moment().year(2019).month(3).date(16).startOf('day'),
    moment().year(2019).month(3).date(17).startOf('day'),
    moment().year(2019).month(3).date(18).startOf('day'),
    moment().year(2019).month(3).date(19).startOf('day'),
    moment().year(2019).month(3).date(20).startOf('day'),
    moment().year(2019).month(3).date(21).startOf('day')
  ],
  [
    moment().year(2019).month(3).date(22).startOf('day'),
    moment().year(2019).month(3).date(23).startOf('day'),
    moment().year(2019).month(3).date(24).startOf('day'),
    moment().year(2019).month(3).date(25).startOf('day'),
    moment().year(2019).month(3).date(26).startOf('day'),
    moment().year(2019).month(3).date(27).startOf('day'),
    moment().year(2019).month(3).date(28).startOf('day')
  ],
  [
    moment().year(2019).month(3).date(29).startOf('day'),
    moment().year(2019).month(3).date(30).startOf('day'),
    moment().year(2019).month(4).date(1).startOf('day'),
    moment().year(2019).month(4).date(2).startOf('day'),
    moment().year(2019).month(4).date(3).startOf('day'),
    moment().year(2019).month(4).date(4).startOf('day'),
    moment().year(2019).month(4).date(5).startOf('day')
  ],
  [
    moment().year(2019).month(4).date(6).startOf('day'),
    moment().year(2019).month(4).date(7).startOf('day'),
    moment().year(2019).month(4).date(8).startOf('day'),
    moment().year(2019).month(4).date(9).startOf('day'),
    moment().year(2019).month(4).date(10).startOf('day'),
    moment().year(2019).month(4).date(11).startOf('day'),
    moment().year(2019).month(4).date(12).startOf('day')
  ]
];

const mockCalendarDecember2018 = [
  [
    moment().year(2018).month(10).date(26).startOf('day'),
    moment().year(2018).month(10).date(27).startOf('day'),
    moment().year(2018).month(10).date(28).startOf('day'),
    moment().year(2018).month(10).date(29).startOf('day'),
    moment().year(2018).month(10).date(30).startOf('day'),
    moment().year(2018).month(11).date(1).startOf('day'),
    moment().year(2018).month(11).date(2).startOf('day')
  ],
  [
    moment().year(2018).month(11).date(3).startOf('day'),
    moment().year(2018).month(11).date(4).startOf('day'),
    moment().year(2018).month(11).date(5).startOf('day'),
    moment().year(2018).month(11).date(6).startOf('day'),
    moment().year(2018).month(11).date(7).startOf('day'),
    moment().year(2018).month(11).date(8).startOf('day'),
    moment().year(2018).month(11).date(9).startOf('day'),
  ],
  [
    moment().year(2018).month(11).date(10).startOf('day'),
    moment().year(2018).month(11).date(11).startOf('day'),
    moment().year(2018).month(11).date(12).startOf('day'),
    moment().year(2018).month(11).date(13).startOf('day'),
    moment().year(2018).month(11).date(14).startOf('day'),
    moment().year(2018).month(11).date(15).startOf('day'),
    moment().year(2018).month(11).date(16).startOf('day')
  ],
  [
    moment().year(2018).month(11).date(17).startOf('day'),
    moment().year(2018).month(11).date(18).startOf('day'),
    moment().year(2018).month(11).date(19).startOf('day'),
    moment().year(2018).month(11).date(20).startOf('day'),
    moment().year(2018).month(11).date(21).startOf('day'),
    moment().year(2018).month(11).date(22).startOf('day'),
    moment().year(2018).month(11).date(23).startOf('day')
  ],
  [
    moment().year(2018).month(11).date(24).startOf('day'),
    moment().year(2018).month(11).date(25).startOf('day'),
    moment().year(2018).month(11).date(26).startOf('day'),
    moment().year(2018).month(11).date(27).startOf('day'),
    moment().year(2018).month(11).date(28).startOf('day'),
    moment().year(2018).month(11).date(29).startOf('day'),
    moment().year(2018).month(11).date(30).startOf('day')
  ],
  [
    moment().year(2018).month(11).date(31).startOf('day'),
    moment().year(2019).month(0).date(1).startOf('day'),
    moment().year(2019).month(0).date(2).startOf('day'),
    moment().year(2019).month(0).date(3).startOf('day'),
    moment().year(2019).month(0).date(4).startOf('day'),
    moment().year(2019).month(0).date(5).startOf('day'),
    moment().year(2019).month(0).date(6).startOf('day')
  ]
];

const mockWeatherResponse = [
    {
      "dt": 1548018000,
      "main": {
        "temp": 8.87
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "dt_txt": "2019-01-20 21:00:00"
    },
    {
      "dt": 1548028800,
      "main": {
        "temp": 9.07
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "dt_txt": "2019-01-21 00:00:00"
    },
    {
      "dt": 1548039600,
      "main": {
        "temp": 9.16
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "dt_txt": "2019-01-21 03:00:00"
    },
    {
      "dt": 1548050400,
      "main": {
        "temp": 8.06
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-21 06:00:00"
    },
    {
      "dt": 1548061200,
      "main": {
        "temp": 8.57
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-21 09:00:00"
    },
    {
      "dt": 1548072000,
      "main": {
        "temp": 10.45
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-21 12:00:00"
    },
    {
      "dt": 1548082800,
      "main": {
        "temp": 10.78
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-21 15:00:00"
    },
    {
      "dt": 1548093600,
      "main": {
        "temp": 9.48
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-21 18:00:00"
    },
    {
      "dt": 1548104400,
      "main": {
        "temp": 8.88
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "02n"
        }
      ],
      "dt_txt": "2019-01-21 21:00:00"
    },
    {
      "dt": 1548115200,
      "main": {
        "temp": 8.38
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-22 00:00:00"
    },
    {
      "dt": 1548126000,
      "main": {
        "temp": 7.86
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-22 03:00:00"
    },
    {
      "dt": 1548136800,
      "main": {
        "temp": 7.01
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-22 06:00:00"
    },
    {
      "dt": 1548147600,
      "main": {
        "temp": 7.27
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-22 09:00:00"
    },
    {
      "dt": 1548158400,
      "main": {
        "temp": 9.19
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-22 12:00:00"
    },
    {
      "dt": 1548169200,
      "main": {
        "temp": 9.34
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "dt_txt": "2019-01-22 15:00:00"
    },
    {
      "dt": 1548180000,
      "main": {
        "temp": 7.87
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "dt_txt": "2019-01-22 18:00:00"
    },
    {
      "dt": 1548190800,
      "main": {
        "temp": 7.38
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "dt_txt": "2019-01-22 21:00:00"
    },
    {
      "dt": 1548201600,
      "main": {
        "temp": 6.63
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-23 00:00:00"
    },
    {
      "dt": 1548212400,
      "main": {
        "temp": 5.75
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "dt_txt": "2019-01-23 03:00:00"
    },
    {
      "dt": 1548223200,
      "main": {
        "temp": 5.95
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "dt_txt": "2019-01-23 06:00:00"
    },
    {
      "dt": 1548234000,
      "main": {
        "temp": 7.03
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-23 09:00:00"
    },
    {
      "dt": 1548244800,
      "main": {
        "temp": 9.82
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "dt_txt": "2019-01-23 12:00:00"
    },
    {
      "dt": 1548255600,
      "main": {
        "temp": 10.92
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "dt_txt": "2019-01-23 15:00:00"
    },
    {
      "dt": 1548266400,
      "main": {
        "temp": 9.88
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "dt_txt": "2019-01-23 18:00:00"
    },
    {
      "dt": 1548277200,
      "main": {
        "temp": 10.29
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-23 21:00:00"
    },
    {
      "dt": 1548288000,
      "main": {
        "temp": 9.82
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-24 00:00:00"
    },
    {
      "dt": 1548298800,
      "main": {
        "temp": 9.74
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-24 03:00:00"
    },
    {
      "dt": 1548309600,
      "main": {
        "temp": 10.41
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-24 06:00:00"
    },
    {
      "dt": 1548320400,
      "main": {
        "temp": 11.63
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "dt_txt": "2019-01-24 09:00:00"
    },
    {
      "dt": 1548331200,
      "main": {
        "temp": 14.12
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02d"
        }
      ],
      "dt_txt": "2019-01-24 12:00:00"
    },
    {
      "dt": 1548342000,
      "main": {
        "temp": 15.79
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-24 15:00:00"
    },
    {
      "dt": 1548352800,
      "main": {
        "temp": 14.1
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-24 18:00:00"
    },
    {
      "dt": 1548363600,
      "main": {
        "temp": 13.38
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-24 21:00:00"
    },
    {
      "dt": 1548374400,
      "main": {
        "temp": 11.85
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-25 00:00:00"
    },
    {
      "dt": 1548385200,
      "main": {
        "temp": 10.29
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-25 03:00:00"
    },
    {
      "dt": 1548396000,
      "main": {
        "temp": 9.46
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-25 06:00:00"
    },
    {
      "dt": 1548406800,
      "main": {
        "temp": 9.8
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-25 09:00:00"
    },
    {
      "dt": 1548417600,
      "main": {
        "temp": 11.2
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-25 12:00:00"
    },
    {
      "dt": 1548428400,
      "main": {
        "temp": 9.68
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "dt_txt": "2019-01-25 15:00:00"
    },
    {
      "dt": 1548439200,
      "main": {
        "temp": 8.71
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "dt_txt": "2019-01-25 18:00:00"
    }
  ]