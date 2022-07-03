import mongoose, {Schema, Document, Model} from "mongoose";

const pokemonSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    imageUrl: {
        type: Schema.Types.String,
        required: true,
    },
    attack: {
        type: Schema.Types.number,
        required: true,
    },
    speed: {
        type: Schema.Types.number,
        unique: true
    },
    HP: {
        type: Schema.Types.number,
        unique: true
    },
    type: {
        type: Schema.Types.String,
        ref: 'children',
        required: true
    },
    nb_damaged: {
        type: Schema.Types.number,
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
