import edit from "../assets/edit.svg";
import trash from "../assets/delete.svg";

const PokemonList = ({ list, handleEdit }) => {
  return (
    <table className="pokemon-table">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Imagen</th>
          <th>Ataque</th>
          <th>Defensa</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {list.map((pokemon) => (
          <tr key={pokemon.id}>
            <td>{pokemon.name}</td>
            <td>
              <img
                src={pokemon.image}
                alt={`illustration from ${pokemon.name}`}
              />
            </td>
            <td>{pokemon.attack}</td>
            <td>{pokemon.defense}</td>
            <td>
              <button onClick={() => handleEdit(pokemon)}>
                <img src={edit} />
              </button>
              <button>
                <img src={trash} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PokemonList;
