export interface PokemonProps {
    name: string;
    attack: number;
    speed: number;
    HP: number;
    type: String;
}

export class Pokemon implements PokemonProps {
    name: string;
    attack: number;
    speed: number;
    HP: number;
    type: String;

    constructor(props: PokemonProps) {
        this.name = props.name;
        this.attack = props.attack;
        this.speed = props.speed;
        this.HP = props.HP;
        this.type = props.type;
    }
}