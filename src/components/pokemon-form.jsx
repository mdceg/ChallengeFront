import { useEffect, useState } from "react";
import save from "../assets/save.svg";
import cancel from "../assets/x.svg";

const API_URL =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon";

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

const PokemonForm = ({ pokemon: p, handleCancel, onSuccess }) => {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const apiMethod = pokemon.id ? "PUT" : "POST";
    const url = apiMethod === "PUT" ? `${API_URL}/${pokemon.id}` : API_URL;
    fetch(url, {
      method: apiMethod,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pokemon),
    })
      .then((response) => response.json())
      .then((data) => {
        onSuccess(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="section__pokemon">
      <h3>Nuevo Pokemon</h3>
      <form
        className="section__pokemon-form"
        onSubmit={handleSubmit}
        role="form"
      >
        <label>
          Nombre:
          <input
            type="text"
            name="name"
            value={pokemon.name}
            onChange={handleChange}
            placeholder="Nombre"
          />
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
          <input
            type="text"
            name="image"
            value={pokemon.image}
            onChange={handleChange}
            placeholder="Imagen"
          />
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
        <div className="action-buttons">
          <button type="submit" className="success">
            <img src={save} width="20px" />
            Guardar
          </button>
          <button onClick={handleCancel} className="danger">
            <img src={cancel} width="20px" />
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
};

export default PokemonForm;
