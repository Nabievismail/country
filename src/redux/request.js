import { logDOM } from "@testing-library/react";
import { service } from "../http/service";
import { countryAllAction, iteDetailAction } from "./action";


export const getRequestCountryAll = () => {
    return async (dispatch) => {
        try{
            const response = await service.getCountryAll()
            dispatch(countryAllAction(response.data))
        }catch (e) {
            console.log(e);
        }
    }
}

export const getRequestSearchName = (name) => {
    return async (dispatch) =>{
        try {
            const response = await service.getCountrySearch(name)
            dispatch(iteDetailAction(response.data, null))
        }catch (e) {
            dispatch(iteDetailAction([], e.response.data.message))
        }
    }
}