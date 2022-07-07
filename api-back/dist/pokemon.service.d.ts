import { PokemonDocument, PokemonProps } from "./pokemon.model";
export declare class PokemonService {
    private static instance?;
    static getInstance(): PokemonService;
    private constructor();
    createPokemon(props: PokemonProps): Promise<PokemonDocument>;
    getAll(): Promise<PokemonDocument[]>;
    getById(pokemonId: string): Promise<PokemonDocument | null>;
}
