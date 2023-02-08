import { render, screen } from "@testing-library/react";
import React from "react";
import PokemonList from "../components/pokemon-list";

describe("PokemonList", () => {
  test("return a table", () => {
    const { container } = render(<PokemonList list={[]} />);
    const element = container.querySelector("table");

    expect(element).toBeDefined();
  });
  test("return a thead tag", () => {
    const { container } = render(<PokemonList list={[]} />);
    const element = container.querySelector("thead");

    expect(element).toBeDefined();
  });
});
