import React from 'react';
import './App.css';
import MobileApp from './components/mobile-module/MobileApp/MobileApp';
import TypesGrid from './components/types-module/TypesGrid';

export default class Pokechart extends React.Component<{}, {}> {  
  

  public render(): React.ReactElement<{}> {
    
    return (
      <div className="App">
      <TypesGrid></TypesGrid>
        {/* <MobileApp></MobileApp> */}
      </div>
    );
  }
}

