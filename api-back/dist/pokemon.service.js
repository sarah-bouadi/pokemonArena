"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const pokemon_model_1 = require("./pokemon.model");
class PokemonService {
    constructor() { }
    static getInstance() {
        if (PokemonService.instance === undefined) {
            PokemonService.instance = new PokemonService();
        }
        return PokemonService.instance;
    }
    createPokemon(props) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = new pokemon_model_1.PokemonModel(props);
            const pokemon = yield model.save();
            return pokemon;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return pokemon_model_1.PokemonModel.find().exec();
        });
    }
    getById(pokemonId) {
        return __awaiter(this, void 0, void 0, function* () {
            return pokemon_model_1.PokemonModel.findById(pokemonId).exec();
        });
    }
}
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map