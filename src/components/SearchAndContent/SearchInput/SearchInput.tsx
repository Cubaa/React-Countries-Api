import React from 'react'

interface ISearchCountries{
    searchCountries:(e:React.ChangeEvent<HTMLInputElement>) => void;
}
export const SearchInput: React.FC<ISearchCountries> = (props)=>{
    return(
        <>
            <input onChange={(e)=>props.searchCountries(e)} type="text" placeholder="Search for a country"></input>
        </>
    )
}