import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {NavBar} from '../NavBar/NavBar'
import {SearchAndContent} from '../SearchAndContent/SearchAndContent'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {IState} from '../../reducers'
import {ICountriesReducer} from '../../reducers/countriesReducers'
import {getCountries} from '../../Actions/countriesActions'
import { ISingleCountires } from '../../entities/countries'
import {FiArrowLeft} from 'react-icons/fi'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { CountryDetails } from '../CountryDetails/CountryDetails'
 //@import  url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');

 type GetCountries = ReturnType<typeof getCountries>

interface IThemeColor{
    themeColor: string;
    switchThemeColor: () => void;
}


export const MainPage:React.FC<IThemeColor> = (props)=>{
    const themeColor = props.themeColor
    const switchThemeColor = props.switchThemeColor
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    const [pagination, setPagination] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch<GetCountries>(getCountries())
    }, [])


    const { countriesList } = useSelector<IState, ICountriesReducer >(globalState =>({
        ...globalState.countries,
       
        
    }))
  
    useEffect(()=>{
        function handleResize(){
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
                })
        }
        window.addEventListener("resize", handleResize)
       
        if(dimensions.width < 1024){
           
            setPagination("mobile")
        }else setPagination("desktop")
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
  

    const themeColorSettings = {themeColor, switchThemeColor}
    const countriesListAndFiltered = {countriesList}
    
    return(
        <>  
        <Router>
            <NavBarWrapper>
                <NavBar {...themeColorSettings}/>
            </NavBarWrapper>
            <Route path='/' exact>
            <SearchAndContentWrapper>
                <SearchAndContent {...countriesListAndFiltered} pagination={pagination} {...themeColorSettings}/> 
            </SearchAndContentWrapper>
            </Route>
            <Route path='/:region/:country'>
                <CountryDetailsWrapper>
                    <CountryDetails themeColor = {themeColor}/>
                </CountryDetailsWrapper>
            </Route>
        </Router>
        </>
    )
}

const NavBarWrapper = styled.nav`
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
display: flex;
justify-content: space-between;
width: 100%;
background-color: ${props => props.theme.colors.navBarBackground};
box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
padding: 0.5rem 0;
h3{
    padding: 0.75rem 0 0 0.75rem;
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
    color: ${props => props.theme.colors.fontColor}
}
`
const SearchAndContentWrapper = styled.section`
padding-top: 1.5rem;
width: 100%;
display: flex;
flex-direction: column;

`

const CountryDetailsWrapper = styled.section`
@media (max-width: 768px){
    display: flex;
    flex-direction: column;
    align-items: center;
}

width: 100%;
padding-top: 3rem;
min-height: 10vh;
min-height: 5vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 1rem;

`