import React, { useState, useEffect } from "react";
import {
  CreatePokemon,
  DeletePokemon,
  GetPokemon,
  GetPokemonById,
  UpdatePokemon,
} from "../services/api";
import Pokemon from "./pokemonCard/Pokemon";
import { PokemonCreate, Pokemons } from "../Types/Pokemon";
import CreatePokemonForm from "./CreatePokemon/CreatePokemonForm";

const PokemonList: React.FC = () => {
  const [pokemonData, setPokemonData] = useState<Pokemons[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  // type useState<Pokemons> = {

  const [pokemonToAdd, setPokemonToAdd] = useState<PokemonCreate>({
    name: "",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/065.png",
    attack: 0,
    defense: 0,
    hp: 66,
    type: "fire",
    idAuthor: 33,
  });

  const fetchData = async () => {
    const pokemon = await GetPokemon();
    setPokemonData(pokemon);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //Filter pokemon by ID
  const handleSearch = async (e: string) => {
    if (e === "") {
      const pokemon = await GetPokemon();
      setPokemonData(pokemon);
    }
    setSearchTerm(e);
    const int = parseInt(e);
    const pokemon = await GetPokemonById(int);
    setPokemonData([pokemon]);
  };

  const handleCancel = () => {
    setDisabled(false);
  };

  const handleSubmit = () => {
    setDisabled(false);

    if (isEdit) {
      UpdatePokemon(pokemonToAdd);
      setIsEdit(false);
      fetchData();

      return;
    }
    CreatePokemon(pokemonToAdd);
    fetchData();
  };

  const handleDelete = (id: number) => {
    DeletePokemon(id);
    fetchData();
  };

  const handleEdit = async (id: number) => {
    const res = await GetPokemonById(id);
    setIsEdit(true);
    setDisabled(true);
    setPokemonToAdd(res);
  };

  //   Filter pokemon by id, when search bar is used without api call
  //   const filteredPokemon = pokemonData.filter((pokemon) =>
  //     pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  return (
    <div>
      <h1 className="text-4xl text-center">Pokemon List</h1>
      <div className="flex m-[30px] justify-between">
        <input
          type="text"
          value={searchTerm}
          className="h-7 border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by Id..."
        />

        <button
          className="bg-purple-500 w-40 rounded-lg text-white h-10 hover:bg-purple-200"
          type="button"
          onClick={() => setDisabled(true)}
        >
          Add Pokemon
        </button>
      </div>
      <div className="w-full">
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-400">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Attack</th>
              <th className="px-4 py-2">Defense</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pokemonData.length === 0
              ? "No Pokemon Found"
              : pokemonData.map((pokemon) => (
                  <Pokemon
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    id={pokemon.id}
                    image={pokemon.image}
                    key={pokemon.id}
                    name={pokemon.name}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
                ))}
          </tbody>
        </table>
      </div>
      {disabled && (
        <CreatePokemonForm
          pokemonToAdd={pokemonToAdd}
          setPokemonToAdd={setPokemonToAdd}
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
          isEdit={isEdit}
        />
      )}
    </div>
  );
};

export default PokemonList;
