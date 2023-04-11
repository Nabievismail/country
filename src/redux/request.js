import { logDOM } from "@testing-library/react";
import { service } from "../http/service";
import { countryAllAction, iteDetailAction , loadingAction} from "./action";


export const getRequestCountryAll = () => {
    return async (dispatch) => {
        try{
            dispatch(loadingAction(true))
            const response = await service.getCountryAll()
            dispatch(countryAllAction(response.data))
            dispatch(loadingAction(false))
        }catch (e) {
            console.log(e);
            dispatch(loadingAction(false))
        }
    }
}

export const getRequestSearchName = (name) => {
    return async (dispatch) =>{
        try {
            dispatch(loadingAction(true))
            const response = await service.getCountrySearch(name)
            dispatch(iteDetailAction(response.data, null))
            dispatch(loadingAction(false))
        }catch (e) {
            dispatch(iteDetailAction([], e.response.data.message))
            dispatch(loadingAction(false))

        }
    }
}