import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

interface IThemeColor {
  themeColor: string;
}

export const CountryDetails: React.FC<IThemeColor> = (props) => {
  let location = useLocation<any>();
  const countryDetails = location.state;

  return (
    <CountryDetailsWrapper>
      <div>
        <img src={countryDetails.country[0].flag} alt="flag" />
      </div>
      <div>
        <h1>{countryDetails.country[0].name}</h1>
        <div>
          <div>
            <div>
              <p>
                <span>Native Name: </span>
                <span>{countryDetails.country[0].nativeName}</span>
              </p>
              <p>
                <span>Population: </span>
                <span>{countryDetails.country[0].population}</span>
              </p>
              <p>
                <span>Region: </span>
                <span>{countryDetails.country[0].region}</span>
              </p>
              <p>
                <span>Sub Region: </span>
                <span>{countryDetails.country[0].subregion}</span>
              </p>
              <p>
                <span>Capital: </span>
                <span>{countryDetails.country[0].capital}</span>
              </p>
            </div>
            <div>
              <p>
                <span>Top Level Domain: </span>
                <span>{countryDetails.country[0].topLevelDomain}</span>
              </p>
              <p>
                <span>Currencies: </span>
                <span>{countryDetails.country[0].currencies[0].code}</span>
              </p>
              <p>
                <span>Languages: </span>
                {countryDetails.country[0].languages.map(
                  (language: any, index: number) => {
                    if (index === 0 || index === 1) {
                      return (
                        <span
                          key={index}
                          style={
                            props.themeColor === "light"
                              ? { color: "dimgrey", paddingRight: "0.3rem" }
                              : { color: "#e0d8d8", paddingRight: "0.3rem" }
                          }
                        >
                          {language.name}
                        </span>
                      );
                    }
                  }
                )}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p>Border Countries</p>
          <div>
            {countryDetails.country[0].borders.map(
              (country: string, index: number) => {
                return <span key={index}>{country}</span>;
              }
            )}
          </div>
        </div>
      </div>
    </CountryDetailsWrapper>
  );
};

const CountryDetailsWrapper = styled.div`
  @media (max-width: 539px) {
    display: flex;
    flex-direction: column;
    > div:nth-of-type(1) {
      margin-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 290px;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 9px;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      margin: 0 0.8rem;
      h1 {
        padding-top: 1rem;
        padding-bottom: 1rem;
        font-size: 1.3rem;
      }
      > div:nth-of-type(1) {
        /* background-color: purple; */
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: column;
          div:nth-of-type(1) {
            display: flex;
            flex-direction: column;
            /* background-color: yellow; */
            p {
              padding: 0.2rem 0.3rem 0.2rem 0;
              span:nth-of-type(1) {
                font-weight: 700;
              }
              span:nth-of-type(2) {
                color: ${(props) => props.theme.colors.detailsInfoFontColor};
              }
            }
            span {
              white-space: nowrap;
              font-size: 0.8rem;
            }
          }
          div:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            margin-top: 1rem;
            /* background-color: pink; */
            p {
              padding: 0.2rem 0.3rem 0.2rem 0;
              span:nth-of-type(1) {
                font-weight: 700;
              }
              span:nth-of-type(2) {
                color: ${(props) => props.theme.colors.detailsInfoFontColor};
              }
            }
            span {
              white-space: nowrap;
              font-size: 0.8rem;
            }
          }
        }
      }
      > div:nth-of-type(2) {
        margin-top: 1rem;
        display: flex;
        width: 100%;
        align-items: flex-start;

        flex-direction: column;
        p {
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 0.7rem;
          margin-right: 0rem;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          span {
            border: 0.1rem solid
              ${(props) => props.theme.colors.bordersCountriesBorder};
            padding: 0.2rem 0.3rem;
            font-size: 0.8rem;
            margin: 0.2rem 0.2rem;
          }
        }
      }
    }
  }
  @media (min-width: 540px) {
    display: flex;
    flex-direction: column;
    > div:nth-of-type(1) {
      margin-right: 0;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 300px;
        height: auto;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 9px;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      h1 {
        padding-bottom: 1rem;
        font-size: 1.3rem;
        padding-top: 1rem;
      }
      > div:nth-of-type(1) {
        /* background-color: purple; */
        display: flex;
        flex-direction: column;
        div {
          display: flex;
          flex-direction: row;
          div:nth-of-type(1) {
            display: flex;
            flex-direction: column;
            /* background-color: yellow; */
            p {
              padding: 0.2rem 0.3rem 0.2rem 0;
              span:nth-of-type(1) {
                font-weight: 700;
              }
              span:nth-of-type(2) {
                color: ${(props) => props.theme.colors.detailsInfoFontColor};
              }
            }
            span {
              white-space: nowrap;
              font-size: 0.8rem;
            }
          }
          div:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            /* background-color: pink; */
            p {
              padding: 0.2rem 0.3rem 0.2rem 0;
              span:nth-of-type(1) {
                font-weight: 700;
              }
              span:nth-of-type(2) {
                color: ${(props) => props.theme.colors.detailsInfoFontColor};
              }
            }
            span {
              white-space: nowrap;
              font-size: 0.8rem;
            }
          }
        }
      }
      > div:nth-of-type(2) {
        margin-top: 1rem;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 0.8rem;
          font-weight: 700;

          margin-right: 0.8rem;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          span {
            border: 0.1rem solid
              ${(props) => props.theme.colors.bordersCountriesBorder};
            padding: 0.2rem 0.3rem;
            font-size: 0.8rem;
            margin: 0.2rem 0.2rem;
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    > div:nth-of-type(1) {
      margin-left: 1rem;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 9px;
      margin-right: 3.5rem;

      img {
        height: 250px;
        object-fit: cover;
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      flex-direction: column;
      h1 {
        padding-bottom: 1rem;
        font-size: 1.3rem;
      }
      > div:nth-of-type(1) {
        /* background-color: purple; */
        display: flex;
        flex-direction: column;
        div {
          display: flex;

          div:nth-of-type(1) {
            display: flex;
            flex-direction: column;
            /* background-color: yellow; */
            p {
              padding: 0.2rem 0.3rem 0.2rem 0;
              span:nth-of-type(1) {
                font-weight: 700;
              }
              span:nth-of-type(2) {
                color: ${(props) => props.theme.colors.detailsInfoFontColor};
              }
            }
            span {
              white-space: nowrap;
              font-size: 0.8rem;
            }
          }
          div:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            /* background-color: pink; */
            p {
              padding: 0.2rem 0.3rem 0.2rem 0;
              span:nth-of-type(1) {
                font-weight: 700;
              }
              span:nth-of-type(2) {
                color: ${(props) => props.theme.colors.detailsInfoFontColor};
              }
            }
            span {
              white-space: nowrap;
              font-size: 0.8rem;
            }
          }
        }
      }
      > div:nth-of-type(2) {
        margin-top: 1rem;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        p {
          font-size: 0.8rem;
          font-weight: 700;

          margin-right: 1rem;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          span {
            border: 0.1rem solid
              ${(props) => props.theme.colors.bordersCountriesBorder};
            padding: 0.2rem 0.3rem;
            font-size: 0.8rem;
            margin: 0.2rem 0.2rem;
          }
        }
      }
    }
  }
`;
