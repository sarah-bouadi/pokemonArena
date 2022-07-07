import { Document, Model } from "mongoose";
export interface PokemonProps {
    name: string;
    imageUrl: string;
    attack: number;
    speed: number;
    HP: number;
    type: string;
    nb_damaged?: number;
    specialPower?: string;
}
export declare type PokemonDocument = PokemonProps & Document;
export declare const PokemonModel: Model<PokemonDocument>;
