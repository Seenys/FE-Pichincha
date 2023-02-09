export interface Pokemons {
    id:       number;
    name:     string;
    image:    string;
    attack:   number;
    defense:  number;
    hp?:       number;
    type?:     null | string;
    idAuthor?: number;
}

export interface PokemonCreate {
    id?:       number;
    name:     string;
    image:    string;
    attack:   number;
    defense:  number;
    hp:       number;
    type:     null | string;
    idAuthor: number;
}

export interface PokemonCard {
    id:       number;
    name:     string;
    image:    string;
    attack:   number;
    defense:  number;
    handleDelete: (id: number) => void;
    handleEdit: (id: number) => void;
}

