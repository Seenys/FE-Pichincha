import axios from "axios";

// Constants for the API
import { API_URL } from "../constants/Constants";
import { PokemonCreate, Pokemons } from "../Types/Pokemon";

// Create axios instance
const instance = axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
// Get Pokemon
const GetPokemon = async () => {
    try {
        const endPoint = "/?idAuthor=33";
        const response = await instance.get(`${endPoint}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Get Pokemon by ID
const GetPokemonById = async (id: number) => {
    console.log("id", id)
    try {
        const endPoint = `/${id}`;
        const response = await instance.get(`${endPoint}`);
        console.log("response", response)
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Create Pokemon
const CreatePokemon = async (pokemon: PokemonCreate) => {
    try {
        const endPoint = "/";
        const response = await instance.post(`${endPoint}`, pokemon);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Update Pokemon
const UpdatePokemon = async (pokemon: PokemonCreate) => {
    try {
        const endPoint = `/${pokemon.id}`;
        const response = await instance.put(`${endPoint}`, pokemon);
        return response.data;
    } catch (error) {
        throw error;
    }
};

// Delete Pokemon
const DeletePokemon = async (id: number) => {
    try {
        const endPoint = `/${id}`;
        const response = await instance.delete(`${endPoint}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export { GetPokemon, GetPokemonById, CreatePokemon, UpdatePokemon, DeletePokemon };
