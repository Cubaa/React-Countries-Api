import React from 'react'
import styled from 'styled-components'
import {CountriesCard} from './CountriesCard/CountriesCard'
import {ISingleCountires} from '../../../entities/countries'

interface ICountriesList{
    countriesList: ISingleCountires[];
    pagesNumber: number;
    handleMoreInfo: (e: any) => void
}

export const CountriesContent: React.FC<ICountriesList> = (props)=>{

    return(
        <>
            <CountriesCard countriesList = {props.countriesList} pagesNumber = {props.pagesNumber} handleMoreInfo = {props.handleMoreInfo}/>
        </>
    )
}

