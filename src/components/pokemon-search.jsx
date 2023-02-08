import plus from "../assets/x.svg";

const PokemonSearch = ({ search, handleNew, onSearch }) => {
  const handleChange = (event) => {
    const { value } = event.target;
    onSearch(value);
  };

  return (
    <section className="search-pokemon">
      <div className="search-pokemon__input">
        <label htmlFor="search">Listado de pokemon</label>
        <input
          id="search"
          aria-label="search"
          value={search}
          type="search"
          onChange={handleChange}
          placeholder="Buscar"
        />
      </div>
      <button onClick={handleNew} className="info">
        <img src={plus} />
        Nuevo
      </button>
    </section>
  );
};

export default PokemonSearch;
