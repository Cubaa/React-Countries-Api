import React from 'react'
import styled from 'styled-components'

interface ISelectRegion{
  selectRegion: (e: any) => void
}


export const SelectRegion: React.FC<ISelectRegion> = (props)=>{
    return(
        <>
        
        <SelectItemWrapper>
        <div>
            <select onChange={(e)=>props.selectRegion(e)}>
                <option value="Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Asia">Asia</option>
                <option value="Americas">America</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
        </SelectItemWrapper>
        </>
    )
}

const SelectItemWrapper = styled.div`
width:100%;
display: flex;
justify-content: flex-start;
margin-top: 2rem;
padding-left: 1.3rem;

div{
    @import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
    position: relative;
  background-color: #FEFEFE;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 9px;
  width: auto;
  float: left;
  max-width: 100%;
  border-radius: 2px;

 
  select {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1rem;
    font-weight: 200;
    max-width: 100%;
    padding: 8px 24px 8px 10px;
    border: none;
    color: ${props => props.theme.colors.fontColorSelect};
    background-color: ${props => props.theme.colors.selectBackground};
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    cursor: pointer;
    &:active,
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }
  &:after {
    content: " ";
    position: absolute;
    top: 50%;
    margin-top: -2px;
    right: 8px;
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #aaa;
  }

}
 


`