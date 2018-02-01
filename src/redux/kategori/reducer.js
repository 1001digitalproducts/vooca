import * as type from '../type';

const initialState = {
    dataKategori: [],

};

const KategoriReducer = (state = initialState, action) =>{
    switch (action.type){
        case type.GET_DATA_KATEGORI_S:
            return{
                ...state,
                dataKategori: []
            };
        default:
            return state;
    }
};

export default KategoriReducer;