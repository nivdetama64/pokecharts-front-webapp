import { CONSTS } from '../Data/consts';
import { FORMS } from '../Data/forms'; 
import { Filter } from '../Models/Filter';
import { FormInfo } from '../Models/Form';

export const PokemonService = {

    getPokemons(
      ids: string[] | null,
      orderBy: string | null, 
      orderDir: string | null,
      filters: Filter[]
      ): FormInfo[]{
        let result = ids !== null ? this.idsFilter(ids) :  FORMS as FormInfo[];
        console.log(result)
        result = result.filter(d => CONSTS.availableForms.indexOf(d.Name) > -1);
        if (filters)
            result = this.filterPokemon(result, filters)
        if (orderBy !== null && orderDir !== null)
            result = this.orderPokemons(result, orderBy, orderDir);
        return result;
    },

    filterPokemon(pokemons: FormInfo[], filters: Filter[]): FormInfo[]{
        filters.forEach(f => {
            if (f !== null && f.values.length > 0){
                if (f.operator === "or"){
                    switch (f.field){
                        case "generation":
                            pokemons = pokemons.filter(p => f.values.findIndex(i => i === p.Pokemon.Generation.toString()) > -1);
                            break;
                        case "buddyDistance":
                            pokemons = pokemons.filter(p => f.values.findIndex(i => i === p.BuddyDistance.toString()) > -1);
                            break;
                        case "candyToEvolve":
                            pokemons = pokemons.filter(p => f.values.findIndex(i => i === p.CandyToEvolve.toString()) > -1);
                            break;
                        case "element":
                            pokemons = pokemons.filter(p => 
                                (f.values.findIndex(i => p.Types !== null && p.Types.length > 0 && i === p.Types[0].toString()) > -1)
                                || (f.values.findIndex(i => p.Types !== null && p.Types.length > 1 && i === p.Types[1].toString()) > -1));
                            break;
                        default: break;
                    }
                }
                else{
                    switch (f.field){
                        case "element":
                            pokemons = pokemons.filter(p => 
                                (f.values.findIndex(i => p.Types !== null && p.Types.length > 1 && i === p.Types[0].toString()) > -1)
                                && (f.values.findIndex(i => p.Types !== null && p.Types.length > 1 && i === p.Types[1].toString()) > -1));
                            break;
                        default: break;
                    }
                }
            }
        });
        return pokemons;
    },

    idsFilter(ids: string[]): FormInfo[]{
        let result = FORMS as FormInfo[];
        return result.filter(f => {return ids.includes(f.Id) != null})
    },

    orderPokemons(input: FormInfo[], field: string, dir: string): FormInfo[]{
        switch (field){
            case "Id": return dir === "desc" ? 
                input.sort((a, b) => (a.Pokemon.Id > b.Pokemon.Id) ? -1 : 1): 
                input.sort((a, b) => (a.Pokemon.Id < b.Pokemon.Id) ? -1 : 1);
            default: return input;
        }
    }
}
