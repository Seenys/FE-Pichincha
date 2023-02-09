import React from "react";
import { PokemonCard } from "../../Types/Pokemon";
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Pokemon: React.FC<PokemonCard> = ({
  name,
  id,
  image,
  attack,
  defense,
  handleDelete,
  handleEdit,
}) => {
  return (
    <tr key={id} className="w-full">
      <td className="border px-4 py-2">{name}</td>
      <td className="border px-4 py-2">
        {" "}
        <img src={image} alt={name} width={50} />
      </td>
      <td className="border px-4 py-2">{attack}</td>
      <td className="border px-4 py-2">{defense}</td>
      <td className="border h-auto px-4 py-2 justify-between flex items-center align-middle hover:cursor-pointer">
        <FaEdit onClick={() => handleEdit(id)} className="w-1/2" />
        <FaTrash onClick={() => handleDelete(id)} className="w-1/2" />
      </td>
    </tr>
  );
};

export default Pokemon;
