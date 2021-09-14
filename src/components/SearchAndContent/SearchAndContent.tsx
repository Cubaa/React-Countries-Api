import React, { useState, useEffect, useRef, createRef } from "react";
import styled from "styled-components";
import { SearchInput } from "./SearchInput/SearchInput";
import { SelectRegion } from "./SelectRegion/SelectRegion";
import { CountriesContent } from "./CountriesContent/CountriesContent";
import { ISingleCountry } from "../../entities/singleCountryType";
import { Pagination } from "./Pagination/Pagination";
import {
  HiOutlineArrowCircleLeft,
  HiOutlineArrowCircleRight,
} from "react-icons/hi";
import { useHistory } from "react-router-dom";

interface ICountriesList {
  countriesList: ISingleCountry[];
  pagination: string;
  themeColor: string;
  switchThemeColor: () => void;
}
interface IThemeColor {
  themeColor: string;
}
export const SearchAndContent: React.FC<ICountriesList> = (props) => {
  const [countriesList, setCountriesList] = useState<ISingleCountry[]>([]);
  const [region, setRegion] = useState<string>("Region");
  const [pagesNumber, setPagesNumber] = useState<number>(0);
  const [choosePageNumber, setchoosePageNumber] = useState<number>(1);
  const pagesNumberEl = useRef<any>([]);
  let filteredCountries: ISingleCountry[] = [];
  let history = useHistory();

  const handleMoreInfo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    const countryRegion = (e.target as Element).parentElement?.parentElement
      ?.parentElement?.dataset.region;
    const countryName = (e.target as Element).parentElement?.parentElement
      ?.parentElement?.dataset.name;

    const country = countriesList.filter((country: ISingleCountry) => {
      if (country.name === countryName && country.region === countryRegion)
        return country;
    });
    history.push({
      pathname: `/${countryRegion}/${countryName}`,
      state: { country },
    });
  };
  const selectRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value);
    setchoosePageNumber(1);
    pagesNumberEl.current.forEach((item: any) => {
      if (item.current === null) return;
      props.themeColor === "light"
        ? (item.current.style.backgroundColor = "#fff")
        : (item.current.style.backgroundColor = "#1E2C35");
      if (item.current.dataset.number === "1")
        props.themeColor === "light"
          ? (item.current.style.backgroundColor = "lightgrey")
          : (item.current.style.backgroundColor = "#0a3855");
    });
  };
  const handleChoosePageNumber = (e: any) => {
    setchoosePageNumber(e.target.dataset.number * 1);

    pagesNumberEl.current.forEach((item: any) => {
      if (item.current === null) return;
      props.themeColor === "light"
        ? (item.current.style.backgroundColor = "#fff")
        : (item.current.style.backgroundColor = "#1E2C35");

      if (item.current.dataset.number === e.target.dataset.number) {
        props.themeColor === "light"
          ? (item.current.style.backgroundColor = "lightgrey")
          : (item.current.style.backgroundColor = "#0a3855");
      }
    });
  };

  useEffect(() => {
    if (region === "Region") {
      setCountriesList(props.countriesList);
      setPagesNumber(Math.ceil(props.countriesList.length / 10));
    } else {
      const countriesByregion = props.countriesList.filter(
        (country: ISingleCountry) => {
          if (country.region === region) {
            return country;
          }
        }
      );
      setCountriesList(countriesByregion);
      setPagesNumber(Math.ceil(countriesByregion.length / 10));
    }

    return () => {};
  }, [region, props.countriesList]);

  const searchCountries = (e: React.ChangeEvent<HTMLInputElement>) => {
    pagesNumberEl.current.forEach((item: any) => {
      if (item.current === null) return;
      props.themeColor === "light"
        ? (item.current.style.backgroundColor = "#fff")
        : (item.current.style.backgroundColor = "#1E2C35");
      if (item.current.dataset.number === "1")
        props.themeColor === "light"
          ? (item.current.style.backgroundColor = "lightgrey")
          : (item.current.style.backgroundColor = "#0a3855");
    });

    setchoosePageNumber(1);
    filteredCountries = props.countriesList.filter(
      (country: ISingleCountry, index: number) => {
        if (country.name.includes(`${e.target.value}`)) {
          if (country.region === region) return country;
          else if (region === "Region") return country;
        }
      }
    );

    setCountriesList(filteredCountries);
    setPagesNumber(Math.ceil(filteredCountries.length / 10));
  };
  const incerementPageNumber = () => {
    if (choosePageNumber >= Math.ceil(countriesList.length) / 10) {
      return;
    }
    setchoosePageNumber(choosePageNumber + 1);
  };
  const decrementPageNumber = () => {
    if (choosePageNumber <= 1) {
      return;
    }
    setchoosePageNumber(choosePageNumber - 1);
  };

  if (pagesNumberEl.current.length !== Math.ceil(countriesList.length) / 10) {
    pagesNumberEl.current = Array(25)
      .fill(0)
      .map((_, i) => pagesNumberEl.current[i] || createRef());
  }

  return (
    <>
      <SearchRegionWrapper>
        <SearchInput searchCountries={searchCountries} />
        <SelectRegion selectRegion={selectRegion} />
      </SearchRegionWrapper>
      <CountriesContentWrapper>
        <CountriesContent
          countriesList={countriesList}
          pagesNumber={choosePageNumber}
          handleMoreInfo={handleMoreInfo}
        />
      </CountriesContentWrapper>
      <PaginationWrapper themeColor={props.themeColor}>
        <HiOutlineArrowCircleLeft onClick={() => decrementPageNumber()} />
        <Pagination
          pagesNumber={pagesNumber}
          handleChoosePageNumber={handleChoosePageNumber}
          pagination={props.pagination}
          choosePageNumber={choosePageNumber}
          countriesListLength={countriesList.length}
          pagesNumberEl={pagesNumberEl}
          themeColor={props.themeColor}
        />
        <HiOutlineArrowCircleRight onClick={() => incerementPageNumber()} />
      </PaginationWrapper>
    </>
  );
};

const CountriesContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 10vh;
  display: flex;
  padding: 1.5rem 0 2rem 0;

  background-color: ${(props) => props.theme.colors.backgroundContentCard};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    padding-left: 1rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: stretch;
    padding-left: 1rem;
  }
`;

const SearchRegionWrapper = styled.div`
  width: 100%;
  min-height: 5vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;

  input {
    width: 90%;
    padding: 12px 24px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 9px;

    transition: transform 250ms ease-in-out;
    font-size: 14px;
    line-height: 18px;

    color: ${(props) => props.theme.colors.fontColorInput};
    background-color: ${(props) => props.theme.colors.inputbackground};

    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-size: 18px 18px;
    background-position: 95% center;
    border-radius: 50px;
    border: none;
    transition: padding 250ms ease-in-out;
    backface-visibility: hidden;
    transform-style: preserve-3d;

    &::placeholder {
      color: ${(props) => props.theme.colors.fontColorInputPlaceholder};
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    &:hover,
    &:focus {
      padding: 12px 12px;
      outline: 0;
      border: none;

      border-radius: 0;
      background-position: 95% center;
    }
  }
`;

const PaginationWrapper = styled.div<IThemeColor>`
  width: 100%;
  min-height: 2vh;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 0.1rem solid
      ${(props) => (props.themeColor === "light" ? "lightgray" : "#fff")};
    color: ${(props) => (props.themeColor === "light" ? "#000" : "#fff")};
  }
  div:nth-of-type(1) {
    background-color: ${(props) =>
      props.themeColor === "light" ? "#fff" : "#1E2C35"};
    color: ${(props) => (props.themeColor === "light" ? "#000" : "#fff")};
  }
  svg {
    display: block;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
  svg:nth-of-type(1) {
    margin-right: 0.3rem;
  }
  svg:nth-of-type(2) {
    margin-left: 0.3rem;
  }
  @media (min-width: 1023px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 1rem;
    svg {
      display: none;
    }
  }
`;
