import { FC } from "react";
import Input from "../Inputs";
import Button from "../Button";
import { PokemonCreate } from "../../Types/Pokemon";

interface CreatePokemonFormProps {
  pokemonToAdd: PokemonCreate;
  setPokemonToAdd: React.Dispatch<React.SetStateAction<PokemonCreate>>;
  handleSubmit: () => void;
  handleCancel: () => void;
  isEdit: boolean;
}

const CreatePokemonForm: FC<CreatePokemonFormProps> = ({
  pokemonToAdd,
  setPokemonToAdd,
  handleSubmit,
  handleCancel,
  isEdit,
}) => {
  return (
    <div className="w-full border-1 p-4 m-4">
      <h2 className="my-12 justify-center items-center flex">Nuevo Pokemon</h2>
      <form>
        <div className="flex">
          <div className="w-1/2 h-20 flex flex-col justify-between items-center">
            <div className="flex align-baseline justify-between">
              <label className="w-24 ">Nombre: </label>
              <Input
                onChange={(e) =>
                  setPokemonToAdd({ ...pokemonToAdd, name: e.target.value })
                }
                placeholder="Pokemon"
                name="name"
                type="text"
                className="input"
                value={pokemonToAdd.name}
              />
            </div>
            <div className="flex align-baseline justify-between">
              <label className="w-24">Imagen: </label>
              <Input
                onChange={(e) =>
                  setPokemonToAdd({
                    ...pokemonToAdd,
                    image: e.target.value,
                  })
                }
                placeholder="url"
                name="image"
                type="image"
                className="input"
              />
            </div>
          </div>
          <div className="w-1/2 h-20 flex flex-col justify-between items-center">
            <div className="flex align-baseline justify-between items-center">
              <label className="w-24">Ataque: </label>
              <input
                id="default-range"
                type="range"
                value={pokemonToAdd.attack}
                onChange={(e) =>
                  setPokemonToAdd({
                    ...pokemonToAdd,
                    attack: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
            <div className="flex align-baseline justify-between items-center">
              <label className="w-24">Defensa: </label>

              <input
                id="default-range"
                type="range"
                value={pokemonToAdd.defense}
                onChange={(e) =>
                  setPokemonToAdd({
                    ...pokemonToAdd,
                    defense: parseInt(e.target.value),
                  })
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              ></input>
            </div>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-4">
          <Button
            type="button"
            className="bg-purple-500 w-40 m-auto rounded-lg text-white h-10 hover:bg-purple-200"
            onClick={handleSubmit}
          >
            {isEdit ? "Edit" : "Create"}
          </Button>
          <Button
            className="bg-purple-500 w-40 m-auto rounded-lg text-white h-10 hover:bg-purple-200"
            type="button"
            onClick={handleCancel}
          >
            Cancelar
          </Button>
        </footer>
      </form>
    </div>
  );
};

export default CreatePokemonForm;
