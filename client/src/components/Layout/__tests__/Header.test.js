import React from "react";
import Header from "../Header";
import BreweryInfoForm from "../../Form/BreweryInfoForm";
import { ReactComponent as MagnifyingIcon } from "../../../assets/SVG/magnifying-glass.svg";
// import { ReactComponent as OpenBookIcon } from "../../../assets/SVG/open-book.svg";

import { shallow } from "enzyme";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<Header />);
});

it("displays <BreweryInfoForm /> when the MagnifyingIcon is clicked", () => {
  wrapper.find(MagnifyingIcon).simulate("click");
  expect(wrapper.find(BreweryInfoForm).length).toEqual(1);
});
