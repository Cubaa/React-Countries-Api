import { Dispatch } from "redux";
import * as actionTypes from "./ActionTypes/countriesTypes";
import { ISingleCountry } from "../entities/singleCountryType";

export const getCountries = (): Promise<ISingleCountry[]> =>
  ((dispatch: Dispatch) => {
    return fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((countriesList: ISingleCountry[]) => {
        dispatch({
          type: actionTypes.GET_COUNTRIES,
          countriesList,
        });
      });
  }) as any;
