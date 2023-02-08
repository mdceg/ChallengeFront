import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../App";
import PokemonPage from "../pages/pokemon-page";

describe("App", () => {
  describe("When initialize", () => {
    test("Should render the pokemon list component", () => {
      render(<App />);

      expect(screen.findByText("Pokemons")).toBeTruthy();
    });
  });
});
