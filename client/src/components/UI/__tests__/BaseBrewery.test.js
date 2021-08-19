import React from "react";
import { shallow } from "enzyme";
import BaseBrewery from "../BaseBrewery";
import { ReactComponent as PhoneIcon } from "../../../assets/SVG/phone.svg";
import { ReactComponent as BrowserIcon } from "../../../assets/SVG/browser.svg";
import { ReactComponent as GlobeIcon } from "../../../assets/SVG/globe.svg";

let wrapper;
let testState = {
  breweryName: "testName",
  city: "testCity",
  state: "testState",
  phone: "123-456-7890",
  website_url: "testUrl",
  longitude: "123456",
  latitude: "78910",
};

beforeEach(() => {
  wrapper = shallow(
    <BaseBrewery
      breweryName={testState.breweryName}
      city={testState.city}
      state={testState.state}
      phone={testState.phone}
      website_url={testState.website_url}
      latitude={testState.latitude}
      longitude={testState.longitude}
    />
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("displays the text in <BaseBrewery /> when it recieves breweryName, city, and state props", () => {
  it("displays the brewery name when the props is given", () => {
    expect(wrapper.find("h3").text()).toEqual("testName");
  });

  it("displays the city and state name when the props is given", () => {
    expect(wrapper.find("h4").text()).toEqual("testCity, testState");
  });
});

describe("displays icons based on if the phone, website_url, latitude and longitude exist in <BaseBrewery />", () => {
  it("displays the PhoneIcon if the phone prop exists", () => {
    expect(wrapper.find(PhoneIcon).length).toEqual(1);
  });

  it("displays the BrowserIcon if website_url prop exists", () => {
    expect(wrapper.find(BrowserIcon).length).toEqual(1);
  });

  it("displays the GlobeIcon if the latitude and longitude props exist", () => {
    expect(wrapper.find(GlobeIcon).length).toEqual(1);
  });
});
