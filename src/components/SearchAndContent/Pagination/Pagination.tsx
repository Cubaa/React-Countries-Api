import React, {useRef, useEffect} from 'react'
import styled from 'styled-components'

interface IPagination{
    pagesNumber: number;
    handleChoosePageNumber: (e: any) => void;
    pagination: string;
    choosePageNumber: number;
    countriesListLength: number;
    pagesNumberEl: any;
    themeColor: string;
}

export const Pagination: React.FC<IPagination> = (props)=>{
    const paginationNumbers = []
  
 
      
    if(true && props.pagination==="desktop" && props.countriesListLength>0){
        for(let i=0; i<props.pagesNumber;i++){
            paginationNumbers.push(<div style={props.themeColor === "light" ? {backgroundColor: "#fff"} : {backgroundColor: "#1E2C35"}}  ref={props.pagesNumberEl.current[i]} key={i+1} onClick={(e)=>props.handleChoosePageNumber(e)} data-number={i+1} >{i+1}</div>)
        }
} else if(props.pagination==="mobile" && props.countriesListLength>0) {
    
    paginationNumbers.push(<div>{props.choosePageNumber}</div>)
    
}

if(props.pagination==="desktop"){
    paginationNumbers.forEach((item)=>{
   
    if(item.props.children===props.choosePageNumber){
        props.themeColor === "light" ? item.props.style.backgroundColor =  "lightgrey" : item.props.style.backgroundColor= "#0a3855"
    }
})
}

    return(
        <>
            {paginationNumbers}
        </>
    )
}

