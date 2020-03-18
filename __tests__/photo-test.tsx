/**
 * @format
 */

import "react-native";
import React from "react";
import Photo from "../photo";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducer/reducers";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const store = createStore(rootReducer);

  renderer.create(
    <Provider store={store}>
      <Photo
        route={{ params: { photo: "", treeType: "" } }}
        navigation={{ setOptions: () => {} }}
      />
    </Provider>
  );
});
