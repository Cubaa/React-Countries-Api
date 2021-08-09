import 'styled-components'

declare module 'styled-components'{
    export interface DefaultTheme{
        colors:{
            navBarBackground: string;
            inputbackground: string;
            selectBackground: string;
            bodyBackground: string;
            fontColor: string;
            fontColorInputPlaceholder: string;
            fontColorSelect: string;
            fontColorInput: string;
            cardColor: string;
            fontCardColor: string;
            backgroundContentCard: string;
            paginationBorderColor: string;
            paginationBackgroundColor: string;
            paginationFontColor: string;
            bordersCountriesBorder: string;
            detailsInfoFontColor: string;
        }
    }
}