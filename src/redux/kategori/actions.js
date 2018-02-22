import * as type from '../type';

export const getKata = (id) =>{
    return{
        type: type.GET_DATA_KATA,
        payload: id
    }
};
