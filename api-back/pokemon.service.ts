import {PokemonDocument, PokemonModel, PokemonProps} from "./pokemon.model";

export class PokemonService {

    private static instance?: PokemonService;

    public static getInstance(): PokemonService {
        if(PokemonService.instance === undefined) {
            PokemonService.instance = new PokemonService();
        }
        return PokemonService.instance;
    }

    private constructor() { }

    public async createPokemon(props: PokemonProps): Promise<PokemonDocument> {
        const model = new PokemonModel(props);
        const pokemon = await model.save();
        return pokemon;
    }

    async getAll(): Promise<PokemonDocument[]> {
        return PokemonModel.find().exec();
    }

    async getById(pokemonId: string): Promise<PokemonDocument | null> {
        return PokemonModel.findById(pokemonId).exec();
    }

}