export const countryAllAction = (data) => {
    return {
        type: "LOAD_ALL_COUNTRY",
        payload: data 
    }
}

export const iteDetailAction = (data, errorMessage) => {
    return{
        type: 'LOAD_ITEM',
        payload: data,
        errorMessage
    }
}