import {ISingleCountires} from '../../entities/countries'
export const GET_COUNTRIES = 'GET_COUNTRIES'; 

export interface ICountriesTypes{
    GET_COUNTRIES: {
        countriesList: ISingleCountires[]
    }
}