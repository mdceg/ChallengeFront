import React from "react";
import renderer from "react-test-renderer";
import PokemonList from "../src/components/pokemon-list";

describe("PokemonList", () => {
  test("return a table", () => {
    const root = renderer.create(<PokemonList list={[]} />).root;
    const element = root.findAllByType("table");

    expect(element[0]).toBeTruthy();
  });
  test("return a thead tag", () => {
    const root = renderer.create(<PokemonList list={[]} />).root;
    const element = root.findAllByType("thead");

    expect(element).toBeTruthy();
  });
});
