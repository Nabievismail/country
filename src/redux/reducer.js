const defaultState = {
    countries: [],
    item:[],
    errorMessage: null,
    loading: false
}

export const reducer = (state = defaultState, action) => {
    const {payload, type,errorMessage} = action;
    switch(type) {
        case "LOADING" :{
            return {
                ...state,
                loading: payload
            }
        }
        case "LOAD_ITEM" : {
            return {
                ...state,
                item: payload ,
                errorMessage: errorMessage
            }
        }
        case "LOAD_ALL_COUNTRY": {
            return {
                ...state,
                countries: payload
            }
        }
        default:
            return state
    }
}