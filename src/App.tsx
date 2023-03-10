import React from 'react';
import './App.css';
import Header from './components/common-module/Header/Header';
import MobileApp from './components/mobile-module/MobileApp/MobileApp';
import TypesApp from './components/types-module/TypesApp/TypesApp';

export default class Pokechart extends React.Component<{}, {}> {  
  

  public render(): React.ReactElement<{}> {
    
    return (
      <div className="App">
        <Header></Header>
        <TypesApp></TypesApp>
        {/* <MobileApp></MobileApp> */}
      </div>
    );
  }
}

