export interface Type{
    Name: string;
    MeteoBoost: string;
    Attack: TypeEffect[];
    Defense: TypeEffect[];
}

export interface TypeEffect{
    Name:string;
    Damage: number;
}