import {Router, Request, Response} from "express";
import express = require("express");
import {PokemonService} from "./pokemon.service";

export class PokemonController {

    async createPokemon(req: Request, res: Response) {
        const pokemonBody = req.body;
        if(!pokemonBody.name) {
            res.status(400).json("Please enter a valid name");
            return;
        }
        if(!pokemonBody.imageUrl) {
            res.status(400).json("Please enter a imageUrl");
            return;
        }
        if(!pokemonBody.attack) {
            res.status(400).json("Please enter a attack");
            return;
        }
        if(!pokemonBody.speed) {
            res.status(400).json("Please enter a valid speed");
            return;
        }
        if(!pokemonBody.HP) {
            res.status(400).json("Please enter a valid HP");
            return;
        }
        if(!pokemonBody.type) {
            res.status(400).json("Please enter a valid type");
            return;
        }
        if(!pokemonBody.nb_damaged) {
            res.status(400).json("Please enter a valid nb_damaged");
            return;
        }
        if(!pokemonBody.specialPower) {
            res.status(400).json("Please enter a valid specialPower");
            return;
        }

        try {
            const pokemon = await PokemonService.getInstance().createPokemon({
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
        } catch(err) {
            res.status(400).json("Create Pokemon error!");
            return;
        }
    }

    async getAllPokemons(req: Request, res: Response) {
        const pokemons = await PokemonService.getInstance().getAll();
        res.json(pokemons);
    }

    async getPokemon(req: Request, res: Response) {
        try {
            const pokemon = await PokemonService.getInstance().getById(req.params.pokemon_id);
            if(pokemon === null) {
                res.status(404).json("Pokemon not found!");
                return;
            }
            res.json(pokemon);
        } catch(err) {
            res.status(400).json("getPokemon error!");
            return;
        }
    }

    buildRoutes(): Router {
        const router = express.Router();

        router.get('/', this.getAllPokemons.bind(this));
        router.post('/', express.json(), this.createPokemon.bind(this));
        router.get('/pokemonId/:pokemon_id', this.getPokemon.bind(this));
        return router;
    }
}
