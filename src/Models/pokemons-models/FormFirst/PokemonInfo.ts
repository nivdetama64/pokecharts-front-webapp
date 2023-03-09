import { ShinyInfo } from "../Common/ShinyInfo";

export interface PokemonInfo{
    Id: number,
    Name: string | null,
    Generation: number,
    IsNested: boolean,
    ExclusiveRaidLevel: number,
    HaveAlolanVersion: boolean,
    HaveGalarianVersion: boolean,
    IsPossibleDitto: boolean,
    IsBabyPokemon: boolean,
    CanBeShadow: boolean,
    IsPvpExclusive: boolean,
    TimeLimitedShiny: boolean,
    IsPhotobombExclusive: boolean,
    ShinyInfo: ShinyInfo | null,
}