import { BaseStatsInfo } from "../Common/BaseStatsInfo";

export interface MegaInfo{
    FirstTimeMegaEnergyRequired: number,
    Form: string | null,
    MegaEnergyRequired: number,
    MegaName: string | null,
    Stats: BaseStatsInfo | null,
    Types: string[] | null
}