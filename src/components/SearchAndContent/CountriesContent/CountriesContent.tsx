import React from 'react'
import {CountriesCard} from './CountriesCard/CountriesCard'
import {ISingleCountry} from '../../../entities/singleCountryType'

interface ICountriesList{
    countriesList: ISingleCountry[];
    pagesNumber: number;
    handleMoreInfo: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export const CountriesContent: React.FC<ICountriesList> = (props)=>{

    return(
        <>
            <CountriesCard countriesList = {props.countriesList} pagesNumber = {props.pagesNumber} handleMoreInfo = {props.handleMoreInfo}/>
        </>
    )
}

