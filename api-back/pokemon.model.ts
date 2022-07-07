import mongoose, {Schema, Document, Model} from "mongoose";

const pokemonSchema = new Schema({
    name: {
        type: Schema.Types.String,
    },
    imageUrl: {
        type: Schema.Types.String,
    },
    attack: {
        type: Schema.Types.Number,
    },
    speed: {
        type: Schema.Types.Number,
    },
    HP: {
        type: Schema.Types.Number,
    },
    type: {
        type: Schema.Types.String,
    },
    nb_damaged: {
        type: Schema.Types.Number,
    },
    specialPower: {
        type: Schema.Types.String,
    }
},
        {
            collection: "pokemon",
                timestamps: true,
            versionKey: false
        });
export interface PokemonProps {
    name: string;
    imageUrl: string;
    attack: number;
    speed: number;
    HP: number;
    type: string;
    nb_damaged?:number;
    specialPower?: string;
}

export type PokemonDocument = PokemonProps & Document;

export const PokemonModel: Model<PokemonDocument> = mongoose.model<PokemonDocument>("Pokemon", pokemonSchema);
