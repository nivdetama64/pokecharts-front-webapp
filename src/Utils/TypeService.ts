import { TYPES } from '../Data/types'; 
import { Type } from '../Models/types-models/Type';

export const TypeService = {

    getTypes(): Type[]{
        return TYPES as Type[];
    },
}
