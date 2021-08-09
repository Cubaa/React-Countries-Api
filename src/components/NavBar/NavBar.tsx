import react from 'react'
import styled from 'styled-components'
import {ThemeColorMode} from './ThemeColorMode/ThemeColorMode'

interface IThemeColor{
    themeColor: string;
    switchThemeColor: () => void;
}

export const NavBar:React.FC<IThemeColor> = (props)=>{
    return(
        <>
            <h3>Where in the world?</h3>
            <ThemeColorModeWrapper>
                <ThemeColorMode switchThemeColor = {props.switchThemeColor} themeColor={props.themeColor}/>
            </ThemeColorModeWrapper>
        </>
    )
}

const ThemeColorModeWrapper = styled.div`
display: flex;
padding: 1rem 0.75rem 0 0;
span{
    font-size: 0.9rem;
}

`