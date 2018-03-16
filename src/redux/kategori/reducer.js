import * as type from '../type';
import categories from '../../data/dataKategori.json';
import dataKata from '../../data/dataDetailKategori.json';

const initialState = {
    dataKategori: categories,
    isiData: "dari reducer",
    dataKata: [],

};

const KategoriReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_DATA_KATA:
            const indexData = categories.findIndex((val) => {
                return val.kategori === action.payload
            });

            const dataFilter = dataKata.filter((val) => {
                return val.idKategori === categories[indexData].id
            });

            return {
                ...state,
                dataKata: dataFilter
            };
        default:
            return state;
    }
};

export default KategoriReducer;