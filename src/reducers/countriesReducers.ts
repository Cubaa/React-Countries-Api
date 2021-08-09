import {ISingleCountry} from '../entities/singleCountryType'
import * as actionTypes from '../Actions/ActionTypes/countriesTypes'
export interface ICountriesReducer{
    countriesList: ISingleCountry[];

}

const defaultState = (): ICountriesReducer => ({
    countriesList:[]
})

export default(state=defaultState(), action: any)=>{
   
    switch(action.type){
        case actionTypes.GET_COUNTRIES: {
            const payload: actionTypes.ICountriesTypes['GET_COUNTRIES'] = action;
           
            return{
                ...state,
                countriesList: payload.countriesList
            }
        }
       
        default: {
            
            return state
        }
    }
}