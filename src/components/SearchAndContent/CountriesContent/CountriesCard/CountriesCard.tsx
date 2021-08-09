import React, {useState} from 'react'
import styled from 'styled-components'
import {ISingleCountires} from '../../../../entities/countries'


interface ICountriesList{
    countriesList: any[];
    pagesNumber: number;
    handleMoreInfo: (e: any) => void;
}

export const CountriesCard: React.FC<ICountriesList> = (props)=>{
  
    let partingCountriesArr = []
   
    for(let i=0; i<props.countriesList.length; i+=10){
       const item = props.countriesList.slice(i, i+10)
    
       partingCountriesArr.push(item)
    }
    
    return(
        <>
        {partingCountriesArr[props.pagesNumber-1]?.map((country: ISingleCountires, index: number)=>{
             
            return(
                <CountriesCardWrapper key={index} data-region={country.region} data-name={country.name}>
                <div>
                    <img src={country.flag} alt="" />
                </div>
                <div>
                    <span>{country.name}</span>
                    <div>
                        <span>Population: <span>{country.population}</span></span>
                        <span>Region: <span>{country.region}</span></span>
                        <span>Capital: <span>{country.capital}</span></span>
                    </div>
                    <div>
                        <a onClick={(e)=>props.handleMoreInfo(e)}>More info...</a>
                    </div>
                </div>
                </CountriesCardWrapper>
            )
        }) }
        </>
    )
}


const CountriesCardWrapper = styled.div`
width: 300px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 9px;
margin-top: 1.3rem;
background-color: ${props => props.theme.colors.cardColor};
>div:nth-of-type(1){
    width:100%;
    height:150px;
    border-bottom: 0.1rem solid lightgrey;
    >img{
        width: 100%;
        height:100%;
        object-fit: cover;
    }
}
>div:nth-of-type(2){
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    box-sizing: border-box;
    width:100%;
    height: 170px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    span{
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 800;
            padding: 0.1rem 0 0.1rem 0;
            color: ${props => props.theme.colors.fontCardColor};
            font-size: 1em;
    }
    >div{
       
        display: flex;
        flex-direction: column;
        >span:nth-of-type(1), span:nth-of-type(2), span:nth-of-type(3){
            font-family: 'Nunito Sans', sans-serif;
            font-weight: 600;
            padding: 0.1rem 0 0.1rem 0;
            color: ${props => props.theme.colors.fontCardColor};
            span{
                font-weight: 300;
                color: ${props => props.theme.colors.fontCardColor};
            }
        }
    }
    div:nth-of-type(2){
        width:100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items:center;
        a{
            padding: 0;
            cursor: pointer;
            font-size: 0.8rem;
            font-weight: 300;
        }
    }
}
@media (min-width: 768px){
    width: calc(30% - 0.9rem);
    margin: 0.9rem;
}
@media (min-width: 1024px){
    width: calc(23% - 0.9rem);
    margin: 0.9rem;
    
}

`