import * as type from '../type';
import categories from '../../data/data.json';

const initialState = {
    dataKategori: categories,
    isiData: "dari reducer",

};

const KategoriReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.GET_DATA_KATEGORI_S:
            return {
                ...state,
                dataKategori: action.dataKategori
            };
        default:
            return state;
    }
};

export default KategoriReducer;