import { useEffect, useState } from "react";
import save from "../assets/save.svg";
import cancel from "../assets/x.svg";

const DEFAULT_POKEMON = {
  id: 0,
  name: "",
  attack: 0,
  defense: 0,
  image: "",
};

const PokemonForm = ({ pokemon: p, handleCancel }) => {
  const [pokemon, setPokemon] = useState(DEFAULT_POKEMON);

  useEffect(() => {
    setPokemon(p);
  }, [p]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemon((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="section__pokemon">
      <h2>Nuevo Pokemon</h2>
      <form className="section__pokemon-form">
        <label>
          Nombre:
          <input name="name" value={pokemon.name} onChange={handleChange} />
        </label>
        <label>
          Ataque:
          <span>0</span>
          <input
            name="attack"
            type="range"
            value={pokemon.attack}
            onChange={handleChange}
          />
          <span>100</span>
        </label>
        <label>
          Imagen:
          <input name="image" value={pokemon.image} onChange={handleChange} />
        </label>

        <label>
          Defensa:
          <span>0</span>
          <input
            name="defense"
            type="range"
            value={pokemon.defense}
            onChange={handleChange}
          />
          <span>100</span>
        </label>
      </form>
      <div className="action-buttons">
        <button>
          <img src={save} width="20px" />
          Guardar
        </button>
        <button onClick={handleCancel}>
          <img src={cancel} width="20px" />
          Cancelar
        </button>
      </div>
    </section>
  );
};

export default PokemonForm;
