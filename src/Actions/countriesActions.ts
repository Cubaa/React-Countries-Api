
import {Dispatch} from 'redux';
import * as actionTypes from './ActionTypes/countriesTypes'
import {ISingleCountires} from '../entities/countries'

export const getCountries = (): Promise<ISingleCountires[]> =>((dispatch: Dispatch) =>{
    return fetch('https://restcountries.eu/rest/v2/all')
        .then(res =>res.json())
        .then((countriesList: ISingleCountires[])=>{
            dispatch({
                type: actionTypes.GET_COUNTRIES,
                countriesList
            })
        })
}) as any;

