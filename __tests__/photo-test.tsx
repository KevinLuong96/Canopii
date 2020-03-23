/**
 * @format
 */

import "react-native";
import React from "react";
import Photo from "../photo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducer/reducers";
import { shallow } from "enzyme";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
const store = createStore(rootReducer);

it("renders correctly", () => {
  renderer.create(
    <Provider store={store}>
      <Photo
        route={{ params: { photo: "", treeType: "" } }}
        navigation={{ setOptions: () => {} }}
      />
    </Provider>
  );
});

it("Should be able to upload photos for image recognition", () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Photo
        route={{ params: { photo: "", treeType: "" } }}
        navigation={{ setOptions: () => {} }}
      />
    </Provider>
  );

  wrapper.find("Button").to.have.length(1);
});
