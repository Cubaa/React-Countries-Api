import {ISingleCountry} from '../../entities/singleCountryType'
export const GET_COUNTRIES = 'GET_COUNTRIES'; 

export interface ICountriesTypes{
    GET_COUNTRIES: {
        countriesList: ISingleCountry[]
    }
}