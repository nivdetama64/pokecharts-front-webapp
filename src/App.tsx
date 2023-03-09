import React from 'react';
import './App.css';
import MobileApp from './components/mobile-module/MobileApp/MobileApp';

export default class Pokechart extends React.Component<{}, {}> {  
  

  public render(): React.ReactElement<{}> {
    
    return (
      <div className="App">
        <MobileApp></MobileApp>
      </div>
    );
  }
}

