import { useEffect, useState } from "react";
import PokemonForm from "../components/pokemon-form";
import PokemonList from "../components/pokemon-list";
import PokemonSearch from "../components/pokemon-search";

const API_URL =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon?idAuthor=1";
const DEFAULT_POKEMON = {
  id: 0,
  name: "",
  image: "",
  attack: 0,
  defense: 0,
  hp: "",
  type: "",
  idAuthor: 1,
};

const PokemonPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);
  const [search, setSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((data) => setPokemonList(data));
  }, []);

  useEffect(() => {
    if (!search) return setFilteredList([...pokemonList]);
    const searchUpper = search.toUpperCase();
    const filtered = pokemonList.filter((p) =>
      p.name.toUpperCase().includes(searchUpper)
    );
    setFilteredList(filtered);
  }, [search, pokemonList]);

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
    <div className="pokemons">
      <h1>Pokemons</h1>
      <PokemonSearch
        onSearch={handleSearch}
        handleNew={handleNew}
        search={search}
      />
      <PokemonList
        list={filteredList}
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
    </div>
  );
};

export default PokemonPage;
