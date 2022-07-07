import { Router, Request, Response } from "express";
export declare class PokemonController {
    createPokemon(req: Request, res: Response): Promise<void>;
    getAllPokemons(req: Request, res: Response): Promise<void>;
    getPokemon(req: Request, res: Response): Promise<void>;
    buildRoutes(): Router;
}
