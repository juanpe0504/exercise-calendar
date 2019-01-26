import React from "react";
import Selector from "./Selector";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  let options = [];
  shallow(<Selector options={options} />);
});

it("calls handlechange on selector", () => {
  const options = [{ value: 1, label: "2019" }];
  const event = {
    target: { value: 1 }
  };
  const handleChangeSelector = jest.fn();
  let wrapper = shallow(
    <Selector options={options} handleChange={handleChangeSelector} />
  );
  wrapper.find("select").simulate("change", event);
  expect(handleChangeSelector).toBeCalledWith(event);
});

it('Selector should throws an error', () => {
  expect(() => shallow(<Selector />)).toThrowError();
});