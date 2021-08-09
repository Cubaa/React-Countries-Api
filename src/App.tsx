import React, {useState} from 'react';
import {GlobalStyles} from '../src/components/GlobalStyles'
import {MainPage} from './components/MainPage/MainPage'
import {ThemeProvider} from 'styled-components'
import light from  './components/Theme/Light'
import dark from  './components/Theme/Dark'
import {Provider} from 'react-redux'
import store from './tools/store'

function App() {
  const [themeColor, setThemeColor] = useState('light')
  const switchThemeColor = ()=>{
    if(themeColor==='light')
      setThemeColor('dark')
    else setThemeColor('light')
  }

  const themeColorSetting = {themeColor, switchThemeColor}

  return (
    <ThemeProvider theme={themeColor==='light' ? light : dark}>
    <div className="App">
      <GlobalStyles />
      <Provider store={store}>
      <MainPage {...themeColorSetting}/>
      </Provider>
    </div>
    </ThemeProvider>
  );
}

export default App;
