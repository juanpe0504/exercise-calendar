import React from "react";
import Calendar from "./Calendar";
import { shallow } from "enzyme";
import moment from "moment";

it("Renders without crashing", () => {
  const initialState = {
    today: moment().utc(),
    monthDays: [],
    weatherInfo: []
  }
  shallow(<Calendar  {...initialState}/>);
});

it('Calendar should throws an error', () => {
  expect(() => shallow(<Calendar />)).toThrowError();
});

