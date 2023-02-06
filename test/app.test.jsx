import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";

test("Find text", () => {
  const root = renderer.create(<App />).root;
  const element = root.findAllByType("h1");

  expect(element[0].children[0]).toBe("Hello Pichincha");
});
