
export class Pokemon {
  id!: number;
  name!: string;
  imageUrl!: string;
  attack!: number;
  speed!: number;
  HP!: number;
  type!: PokemonType;
  nb_damaged?:number;
  specialPower?: string;
}

export const enum PokemonType {
  Fire = "FIRE",
  Ice = "ICE",
  Water = "WATER",
  Thunder = "THUNDER"
}
