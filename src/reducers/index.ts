import {combineReducers} from 'redux'

import countries, {ICountriesReducer} from './countriesReducers'



export default combineReducers({
    countries,
})

export interface IState{
    countries: ICountriesReducer,
}