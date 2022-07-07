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
exports.PokemonController = void 0;
const express = require("express");
const pokemon_service_1 = require("./pokemon.service");
class PokemonController {
    createPokemon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemonBody = req.body;
            if (!pokemonBody.name) {
                res.status(400).json("Please enter a valid name");
                return;
            }
            if (!pokemonBody.imageUrl) {
                res.status(400).json("Please enter a imageUrl");
                return;
            }
            if (!pokemonBody.attack) {
                res.status(400).json("Please enter a attack");
                return;
            }
            if (!pokemonBody.speed) {
                res.status(400).json("Please enter a valid speed");
                return;
            }
            if (!pokemonBody.HP) {
                res.status(400).json("Please enter a valid HP");
                return;
            }
            if (!pokemonBody.type) {
                res.status(400).json("Please enter a valid type");
                return;
            }
            if (!pokemonBody.nb_damaged) {
                res.status(400).json("Please enter a valid nb_damaged");
                return;
            }
            if (!pokemonBody.specialPower) {
                res.status(400).json("Please enter a valid specialPower");
                return;
            }
            try {
                const pokemon = yield pokemon_service_1.PokemonService.getInstance().createPokemon({
                    name: pokemonBody.name,
                    imageUrl: pokemonBody.imageUrl,
                    attack: pokemonBody.attack,
                    speed: pokemonBody.speed,
                    HP: pokemonBody.HP,
                    type: pokemonBody.type,
                    nb_damaged: pokemonBody.nb_damaged,
                    specialPower: pokemonBody.specialPower
                });
                res.json(pokemon);
            }
            catch (err) {
                res.status(400).json("Create Pokemon error!");
                return;
            }
        });
    }
    getAllPokemons(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemons = yield pokemon_service_1.PokemonService.getInstance().getAll();
            res.json(pokemons);
        });
    }
    getPokemon(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemon = yield pokemon_service_1.PokemonService.getInstance().getById(req.params.pokemon_id);
                if (pokemon === null) {
                    res.status(404).json("Pokemon not found!");
                    return;
                }
                res.json(pokemon);
            }
            catch (err) {
                res.status(400).json("getPokemon error!");
                return;
            }
        });
    }
    buildRoutes() {
        const router = express.Router();
        router.get('/', this.getAllPokemons.bind(this));
        router.post('/', express.json(), this.createPokemon.bind(this));
        router.get('/pokemonId/:pokemon_id', this.getPokemon.bind(this));
        return router;
    }
}
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map