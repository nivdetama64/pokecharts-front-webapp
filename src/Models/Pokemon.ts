export interface Pokemon{
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
    MegaForms: MegaInfo[] | null,
    Forms: Form[],
}

export interface ShinyInfo{
    FoundEgg: boolean,
    FoundEvolution: boolean,
    FoundPhotobomb: boolean,
    FoundRaid: boolean,
    FoundResearch: boolean,
    FoundWild: boolean,
}

export interface Form{
    Name: string,
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
}

export interface BaseStatsInfo{
    BaseAttack: number,
    BaseDefense: number,
    BaseStamina: number,
}

export interface EncounterInfo{
    AttackProbability: number,
    BaseCaptureRate: number,
    BaseFleeRate: number,
    DodgeProbability: number | null,
    MaxPokemonActionFrequency: number,
    MinPokemonActionFrequency: number,
}

export interface GenderInfo{
    FemalePercent: number | null,
    MalePercent: number | null,
    GenderlessPercent: number | null,
}

export interface MovesInfo{
    ChargedMoves: string[] | null,
    EliteChargedMoves: string[] | null,
    EliteFastMoves: string[] | null,
    FastMoves: string[] | null,
}

export interface Evolution{
    PokemonId: number,
    PokemonName: string | null,
    Form: string | null,
    CandyRequired: number,
    GenderRequired: string | null,
    OnlyEvolvesInDaytime: boolean,
    OnlyEvolvesInNighttime: boolean,
    LureRequired: string | null,
    NoCandyCostIfTraded: boolean,
    ItemRequired: string | null,
    UpsideDown: boolean,
    BuddyDistanceRequired: number,
    MustBeBuddyToEvolve: boolean,
}

export interface MegaInfo{
    FirstTimeMegaEnergyRequired: number,
    Form: string | null,
    MegaEnergyRequired: number,
    MegaName: string | null,
    Stats: BaseStatsInfo | null,
    Types: string[] | null
}

export interface HeightWeightScale{
    BuddyScale: number,
    HeightStandardDeviation: number,
    ModelHeight: number,
    ModelScale: number,
    PokedexHeight: number,
    PokedexWeight: number,
    WeightStandardDeviation: number
}