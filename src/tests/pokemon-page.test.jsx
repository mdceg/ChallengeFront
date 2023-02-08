import PokemonPage from "../pages/pokemon-page";
import React from "react";
import { vi, describe, test, expect, beforeEach, afterEach } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const POKEMON_LIST = [
  {
    id: 99,
    name: "charmanderrrrrr",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    attack: 66,
    defense: 49,
    hp: 15,
    type: "Fuego",
    idAuthor: 1,
  },
  {
    id: 100,
    name: "Meowth",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    attack: 50,
    defense: 50,
    hp: 40,
    type: "Normal",
    idAuthor: 1,
  },
  {
    id: 101,
    name: "Machamppppp",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    attack: 96,
    defense: 84,
    hp: 0,
    type: "Agua",
    idAuthor: 1,
  },
];

function createFetchResponse(data) {
  return { json: () => new Promise((resolve) => resolve(data)) };
}

describe("PokemonPage", () => {
  beforeEach(() => {
    global.fetch = vi.fn();
    fetch.mockResolvedValue(createFetchResponse(POKEMON_LIST));
    render(<PokemonPage />);
  });
  afterEach(() => {
    global.fetch.mockReset();
  });

  test("Fetch test", async () => {
    await waitFor(() => screen.getByRole("listitem"));

    expect(screen.getAllByRole("listitem").length).toBe(POKEMON_LIST.length);
  });
  test("Filter pokemon", async () => {
    await waitFor(() => screen.getByRole("listitem"));
    const searchInput = screen.getByLabelText("search");
    fireEvent.change(searchInput, { target: { value: "ma" } });

    expect(screen.getAllByRole("listitem").length).toBe(2);
  });
  test("Show new pokemon form", async () => {
    await waitFor(() => screen.getByRole("listitem"));
    const newButton = screen.getByRole("button", {
      name: /nuevo/i,
    });
    fireEvent.click(newButton);
    // fireEvent.change(searchButton, { target: { value: "ma" } });

    expect(screen.getByRole("form")).toBeDefined();
  });
});
