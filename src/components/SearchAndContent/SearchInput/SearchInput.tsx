import React from 'react'
import styled from 'styled-components'

interface ISearchCountries{
    searchCountries:(e:any) => void;
}
export const SearchInput: React.FC<ISearchCountries> = (props)=>{
    return(
        <>
            <input onChange={(e)=>props.searchCountries(e)} type="text" placeholder="Search for a country"></input>
        </>
    )
}