import { ShinyInfo } from "../Common/ShinyInfo";
import { MegaInfo } from "../Common/MegaInfo";
import { FormInfo } from "./FormInfo";

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
    Forms: FormInfo[],
}