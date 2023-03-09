import { BaseStatsInfo } from "../Common/BaseStatsInfo";
import { GenderInfo } from "../Common/GenderInfo";
import { EncounterInfo } from "../Common/EncounterInfo";
import { MovesInfo } from "../Common/MovesInfo";
import { HeightWeightScale } from "../Common/HeightWeightScale";
import { Evolution } from "../Common/Evolution";

export interface FormInfo{
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