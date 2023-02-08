import { useEffect, useState } from "react";
import PokemonForm from "../components/pokemon-form";
import PokemonList from "../components/pokemon-list";
import PokemonSearch from "../components/pokemon-search";

const API_URL = "http://localhost:3000/pokemons";
const DEFAULT_POKEMON = {
  id: 0,
  name: "",
  attack: 0,
  defense: 0,
  image: "",
};

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(`${API_URL}?name_like=${search}`)
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, [search]);

  const handleEdit = (pokemon) => {
    setPokemon(pokemon);
    setShowForm(true);
  };

  const handleCancel = () => {
    setPokemon(DEFAULT_POKEMON);
    setShowForm(false);
  };

  const handleNew = () => {
    setPokemon(DEFAULT_POKEMON);
    setShowForm(true);
  };

  const handleSearch = (value) => {
    setSearch(value);
  };

  const handleDelete = (id) => {
    const list = pokemonList.filter((element) => element.id !== id);
    setPokemonList(list);
  };

  const handleSuccess = (pokemon) => {
    const index = pokemonList.findIndex((element) => element.id === pokemon.id);
    const list = [...pokemonList];
    if (index >= 0) {
      list[index] = pokemon;
      setPokemonList(list);
    } else {
      setPokemonList([...list, pokemon]);
    }
    setShowForm(false);
  };

  return (
    <>
      <PokemonSearch
        onSearch={handleSearch}
        handleNew={handleNew}
        search={search}
      />
      <PokemonList
        list={pokemonList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {showForm && (
        <PokemonForm
          pokemon={pokemon}
          handleCancel={handleCancel}
          onSuccess={handleSuccess}
        />
      )}
    </>
  );
};

export default PokemonPage;
