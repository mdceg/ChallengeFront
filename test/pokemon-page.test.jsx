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

describe("PokemonPage", () => {
  test("cd", () => {
    const root = renderer.create(<PokemonPage />).root;
    const element = root.findAllByType("table");

    expect(element[0]).toBeTruthy();
  });
});
