import React from 'react'
import styled from 'styled-components'
import { HiOutlineMoon } from 'react-icons/hi';
import {FiSun} from 'react-icons/fi'

interface IThemeColor{
    themeColor: string;
    switchThemeColor: () => void;
}


export const ThemeColorMode: React.FC<IThemeColor> = (props)=>{
    return(
        <>
            <IconInfoModeWrapper onClick={()=>props.switchThemeColor()}>
                {props.themeColor === "light" ? <HiOutlineMoon style={{fontSize: "1.3em"}} />:  <FiSun style={{fontSize: "1.3em"}} />}
                <span>{props.themeColor === "light" ? "Dark mode" : "Light mode"}</span>
            </IconInfoModeWrapper>
        </>
    )
}

const IconInfoModeWrapper = styled.div`
display: flex;
align-items: center;
height: 30%;
cursor: pointer;
span{
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    margin-left: 0.50rem;
    color: ${props => props.theme.colors.fontColor}
}
`

