import edit from "../assets/edit.svg";
import trash from "../assets/delete.svg";

const API_URL =
  "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon";

const PokemonList = ({ list, handleEdit, handleDelete }) => {
  const handleClickDelete = (id) => {
    const url = `${API_URL}/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(() => handleDelete(id))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
              <button
                onClick={() => handleEdit(pokemon)}
                className="success action"
              >
                <img src={edit} />
              </button>
              <button
                onClick={() => handleClickDelete(pokemon.id)}
                className="danger action"
              >
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
