import { BaseStatsInfo,Pokemon, GenderInfo,EncounterInfo,MovesInfo,HeightWeightScale,Evolution,ShinyInfo } from "./Pokemon";

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

export interface FormInfo{
    Id: string,
    Name: string,
    Pokemon: PokemonInfo,
    Rarity: string | null,
    MaxCP: number,
    BuddyDistance: number,
    CandyToEvolve: number,
    ResearchTaskExclusive: boolean,
    Types: string[] | null,
    Stats: BaseStatsInfo | null, 
    GenderInfo: GenderInfo | null,
    EncounterInfo: EncounterInfo | null,
    Moves: MovesInfo | null, 
    HeightWeightScale: HeightWeightScale | null,
    Evolutions: Evolution[] | null,
    EvolutionOf:  Evolution[] | null
}