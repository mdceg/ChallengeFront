import { useState } from "react";
import plus from "../assets/x.svg";

const PokemonSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    props.onSearch(value);
  };

  return (
    <section className="search-pokemon">
      <label>
        Listado de pokemon
        <input
          name="name"
          value={searchValue}
          type="text"
          onChange={handleChange}
          placeholder="Buscar"
        />
      </label>
      <button onClick={props.handleNew}>
        <img src={plus} />
        Nuevo
      </button>
    </section>
  );
};

export default PokemonSearch;
