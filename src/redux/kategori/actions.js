import * as type from '../type';

export const getKata = (id) => {
    return {
        type: type.GET_DATA_KATA,
        payload: id
    }
};

export const cariKategori = (val) =>{
    return{
        type: type.CARI_KATEGORI,
        payload: val
    }
};
