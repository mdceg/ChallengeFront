import React from "react";
import renderer from "react-test-renderer";
import App from "../src/App";
import PokemonPage from "../src/pages/pokemon-page";

describe("App", () => {
  describe("When initialize", () => {
    test("Should render the pokemon list component", () => {
      const root = renderer.create(<App />).root;

      const element = root.findByType(PokemonPage);

      expect(element).toBeTruthy();
    });
  });
});
